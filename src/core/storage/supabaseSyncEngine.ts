/**
 * Supabase Offline-First Sync Engine for Mentalis
 * Handles seamless bidirectional sync between local Zustand state and Supabase PostgreSQL.
 * Allows full offline operation while automatically migrating and syncing data once online and authenticated.
 */

import { getSupabase, isSupabaseConfigured } from '../../lib/supabase/client';
import { Database } from '../../lib/supabase/types';
import { calculateUserRank } from '../mastery';

export type SyncStatus = 'unconfigured' | 'offline' | 'idle' | 'syncing' | 'synced' | 'error';

interface SyncListener {
  (status: SyncStatus, error?: string): void;
}

class SupabaseSyncEngine {
  private status: SyncStatus = 'idle';
  private listeners: Set<SyncListener> = new Set();
  private debounceTimer: NodeJS.Timeout | null = null;
  private currentUserId: string | null = null;
  private isOnline: boolean = typeof window !== 'undefined' ? window.navigator.onLine : true;
  private lastSyncedHash: string | null = null;

  private computeStateHash(state: any): string {
    if (!state) return '';
    return JSON.stringify({
      tc: state.overallStats?.totalCalculations || state.overallStats?.totalQuestions || 0,
      tcor: state.overallStats?.totalCorrect || 0,
      cs: state.overallStats?.currentStreak || 0,
      bs: state.overallStats?.bestStreak || state.overallStats?.longestStreak || 0,
      tts: state.overallStats?.totalTimeSpentSeconds || 0,
      lad: state.overallStats?.lastActiveDate || '',
      xp: state.xp || 0,
      lvl: state.level || 1,
      un: state.username || '',
      at: state.avatarType || 'google',
      bl: state.selectedBadgeLevel || 1,
      mb: state.selectedMasteryBadgeId || '',
      snd: state.soundEnabled ?? true,
      rm: state.reducedMotion ?? false,
      tv: state.timerVisible ?? true,
      loc: state.locale || 'en',
      hclo: state.hasCompletedLanguageOnboarding ?? false,
      lm: state.learningMode || 'standard',
      asl: state.activeAddSubLevel || 1,
      atb: state.activeTable || 2,
      ast: state.activeSquareTrack || '',
      fmc: state.factMemoryMap ? Object.keys(state.factMemoryMap).length : 0,
      tmc: state.techniqueMasteryMap ? Object.keys(state.techniqueMasteryMap).length : 0,
    });
  }

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => {
        this.isOnline = true;
        this.notify('idle');
      });
      window.addEventListener('offline', () => {
        this.isOnline = false;
        this.notify('offline');
      });
    }
  }

  public subscribe(listener: SyncListener): () => void {
    this.listeners.add(listener);
    listener(this.getStatus());
    return () => {
      this.listeners.delete(listener);
    };
  }

  public getStatus(): SyncStatus {
    if (!isSupabaseConfigured()) return 'unconfigured';
    if (!this.isOnline) return 'offline';
    return this.status;
  }

  private notify(newStatus: SyncStatus, error?: string) {
    this.status = newStatus;
    this.listeners.forEach((l) => l(newStatus, error));
  }

  public setUserId(userId: string | null) {
    this.currentUserId = userId;
  }

  /**
   * Migrate and sync local state to Supabase when user signs in
   */
  public async initialSyncOnAuth(
    userId: string,
    localState: any,
    userMeta?: { displayName?: string; avatarUrl?: string | null }
  ): Promise<{ hydratedState?: any; error?: string }> {
    const supabase = getSupabase();
    if (!supabase || !this.isOnline) {
      this.notify('offline');
      return {};
    }

    this.currentUserId = userId;
    this.notify('syncing');

    try {
      // 0. Ensure profile exists in public.profiles with valid name
      const cleanName = userMeta?.displayName && userMeta.displayName.toLowerCase() !== 'unknown'
        ? userMeta.displayName
        : (localState.currentUser?.displayName && localState.currentUser.displayName.toLowerCase() !== 'unknown'
            ? localState.currentUser.displayName
            : (localState.currentUser?.email?.split('@')[0] || 'Learner'));

      const initialProfilePayload: any = {
        id: userId,
        display_name: cleanName,
        avatar_url: userMeta?.avatarUrl || localState.currentUser?.avatarUrl || null,
        xp: localState.xp || 0,
        level: localState.level || 1,
        avatar_type: localState.avatarType || 'google',
        selected_badge_level: localState.selectedBadgeLevel || 1,
        last_seen_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      if (localState.username) {
        initialProfilePayload.username = localState.username;
      }
      await supabase.from('profiles').upsert(initialProfilePayload);

      // 1. Fetch remote user_stats and profile
      const [statsRes, profileRes] = await Promise.all([
        supabase.from('user_stats').select('*').eq('user_id', userId).maybeSingle(),
        supabase.from('profiles').select('*').eq('id', userId).maybeSingle(),
      ]);

      const remoteStats = statsRes.data;
      if (statsRes.error) {
        console.warn('[SyncEngine] Note reading user_stats:', statsRes.error.message);
      }

      // If remote has data and more questions answered than local, hydrate from remote
      const remoteTotal = remoteStats?.total_questions_answered || 0;
      const localTotal = localState?.overallStats?.totalCalculations || localState?.overallStats?.totalQuestions || 0;

      if (remoteStats && remoteTotal > localTotal) {
        // Fetch remote settings, learner profile, and fact memory
        const [settingsRes, learnerRes, factRes, techniqueRes] = await Promise.all([
          supabase.from('user_settings').select('*').eq('user_id', userId).maybeSingle(),
          supabase.from('learner_profiles').select('*').eq('user_id', userId).maybeSingle(),
          supabase.from('fact_memory_states').select('*').eq('user_id', userId),
          supabase.from('technique_mastery').select('*').eq('user_id', userId),
        ]);

        const restoredFactMemoryMap: Record<string, any> = {};
        if (factRes.data) {
          for (const item of factRes.data) {
            restoredFactMemoryMap[item.fact_key] = item.state_data;
          }
        }

        const restoredTechniqueMap: Record<string, any> = {};
        if (techniqueRes.data) {
          for (const item of techniqueRes.data) {
            restoredTechniqueMap[item.technique_id] = item.mastery_state;
          }
        }

        const hydratedState: any = {
          overallStats: {
            totalCalculations: remoteStats.total_questions_answered,
            totalCorrect: remoteStats.total_correct,
            currentStreak: remoteStats.current_streak,
            bestStreak: remoteStats.longest_streak,
            lastActiveDate: remoteStats.last_active_date,
            dailyActiveStreak: localState?.overallStats?.dailyActiveStreak || 1,
            totalTimeSpentSeconds: remoteStats.total_time_spent_seconds || localState?.overallStats?.totalTimeSpentSeconds || 0,
          },
          progressMap: remoteStats.progress_map || {},
          dailyActivityMap: (remoteStats.progress_map as any)?._dailyActivityMap || localState?.dailyActivityMap || {},
          anzanStats: remoteStats.anzan_stats || {},
        };

        if (profileRes.data) {
          const p = profileRes.data;
          hydratedState.xp = p.xp ?? 0;
          hydratedState.level = p.level ?? 1;
          hydratedState.avatarType = (p.avatar_type as any) || 'google';
          hydratedState.selectedBadgeLevel = p.selected_badge_level || 1;
          if (p.equipped_badge_id && (p.avatar_type as any) === 'mastery') {
            hydratedState.selectedMasteryBadgeId = p.equipped_badge_id;
          }
          if (p.username) hydratedState.username = p.username;
        }

        if (learnerRes.data?.profile_data) {
          hydratedState.learnerProfile = learnerRes.data.profile_data;
        }

        if (Object.keys(restoredFactMemoryMap).length > 0) {
          hydratedState.factMemoryMap = restoredFactMemoryMap;
        }

        if (Object.keys(restoredTechniqueMap).length > 0) {
          hydratedState.techniqueMasteryMap = restoredTechniqueMap;
        }

        if (settingsRes.data) {
          const s = settingsRes.data;
          hydratedState.soundEnabled = s.sound_enabled;
          hydratedState.reducedMotion = s.reduced_motion;
          hydratedState.timerVisible = s.timer_visible;
          hydratedState.locale = s.locale;
          hydratedState.hasCompletedLanguageOnboarding = s.has_completed_language_onboarding;
          hydratedState.learningMode = s.learning_mode;
          hydratedState.activeAddSubLevel = s.active_add_sub_level;
          hydratedState.activeTable = s.active_table;
          hydratedState.activeSquareTrack = s.active_square_track;
          hydratedState.anzanConfig = s.anzan_config;
          hydratedState.customDrillConfig = s.custom_drill_config;
          hydratedState.aiCoachingEnabled = s.ai_coaching_enabled;
          hydratedState.aiCoachState = s.ai_coach_state;
        }

        this.lastSyncedHash = this.computeStateHash(hydratedState);
        this.notify('synced');
        return { hydratedState };
      } else {
        // Local has newer or equal data -> push local to Supabase
        const pushResult = await this.pushAllToSupabase(userId, localState, userMeta);
        if (pushResult.success) {
          this.notify('synced');
        } else {
          this.notify('error', pushResult.error);
        }
        return {};
      }
    } catch (err: any) {
      console.error('[SyncEngine] Error during initialSyncOnAuth:', err);
      this.notify('error', err?.message || 'Sync failed');
      return { error: err?.message };
    }
  }

  /**
   * Push full local state to Supabase
   */
  public async pushAllToSupabase(
    userId: string,
    state: any,
    userMeta?: { displayName?: string; avatarUrl?: string | null }
  ): Promise<{ success: boolean; error?: string }> {
    const supabase = getSupabase();
    if (!supabase || !this.isOnline) return { success: false, error: 'Offline or Supabase unconfigured' };

    try {
      // 0. Ensure profile exists and has clean name
      const cleanName = userMeta?.displayName && userMeta.displayName.toLowerCase() !== 'unknown'
        ? userMeta.displayName
        : (state.currentUser?.displayName && state.currentUser.displayName.toLowerCase() !== 'unknown'
            ? state.currentUser.displayName
            : state.currentUser?.email?.split('@')[0] || 'Learner');

      // 1. User Stats & Rank Calculation
      const totalCalcs = state.overallStats?.totalCalculations || state.overallStats?.totalQuestions || 0;
      const totalCorrect = state.overallStats?.totalCorrect || 0;
      const currentStreak = state.overallStats?.currentStreak || 0;
      const bestStreak = state.overallStats?.bestStreak || state.overallStats?.longestStreak || 0;
      const timeSpent = state.overallStats?.totalTimeSpentSeconds || 0;
      const cpm = timeSpent > 0 ? Number(((totalCorrect / timeSpent) * 60).toFixed(1)) : 0;
      const accuracy = totalCalcs > 0 ? Math.round((totalCorrect / totalCalcs) * 100) : 0;
      const rankInfo = calculateUserRank(totalCalcs, totalCorrect, bestStreak, timeSpent);

      const profileUpsertPayload: any = {
        id: userId,
        display_name: cleanName,
        avatar_url: userMeta?.avatarUrl || state.currentUser?.avatarUrl || null,
        xp: state.xp || 0,
        level: state.level || 1,
        avatar_type: state.avatarType || 'google',
        selected_badge_level: state.selectedBadgeLevel || 1,
        rating: rankInfo.rating,
        rank_tier: rankInfo.ratingTier,
        equipped_badge_type: state.avatarType === 'mastery' ? 'mastery' : (state.avatarType === 'badge' ? 'level' : 'google'),
        equipped_badge_id: state.avatarType === 'mastery' ? (state.selectedMasteryBadgeId || 'sq_20') : String(state.selectedBadgeLevel || 1),
        last_seen_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      if (state.username) {
        profileUpsertPayload.username = state.username;
      }

      const { error: profileErr } = await supabase.from('profiles').upsert(profileUpsertPayload);
      if (profileErr) {
        console.warn('[SyncEngine] Profile upsert note:', profileErr.message);
      }

      const { error: statsErr } = await supabase.from('user_stats').upsert({
        user_id: userId,
        total_questions_answered: totalCalcs,
        total_correct: totalCorrect,
        current_streak: currentStreak,
        longest_streak: bestStreak,
        total_time_spent_seconds: timeSpent,
        last_active_date: state.overallStats?.lastActiveDate || null,
        overall_cpm: cpm,
        overall_accuracy: accuracy,
        progress_map: {
          ...(state.progressMap || {}),
          _dailyActivityMap: state.dailyActivityMap || {},
        },
        anzan_stats: state.anzanStats || {},
        updated_at: new Date().toISOString(),
      });
      if (statsErr) throw new Error(`Stats sync: ${statsErr.message}`);

      // 2. Learner Profile
      if (state.learnerProfile) {
        const { error: learnErr } = await supabase.from('learner_profiles').upsert({
          user_id: userId,
          profile_data: state.learnerProfile,
          updated_at: new Date().toISOString(),
        });
        if (learnErr) throw new Error(`Learner profile: ${learnErr.message}`);
      }

      // 3. User Settings
      const { error: setErr } = await supabase.from('user_settings').upsert({
        user_id: userId,
        sound_enabled: state.soundEnabled ?? true,
        reduced_motion: state.reducedMotion ?? false,
        timer_visible: state.timerVisible ?? true,
        locale: state.locale || 'en',
        has_completed_language_onboarding: state.hasCompletedLanguageOnboarding ?? false,
        learning_mode: state.learningMode || 'standard',
        active_add_sub_level: state.activeAddSubLevel || 1,
        active_table: state.activeTable || 2,
        active_square_track: state.activeSquareTrack || 'squares_1_25',
        anzan_config: state.anzanConfig || {},
        custom_drill_config: state.customDrillConfig || null,
        ai_coaching_enabled: state.aiCoachingEnabled ?? true,
        ai_coach_state: state.aiCoachState || {},
        updated_at: new Date().toISOString(),
      });
      if (setErr) throw new Error(`Settings sync: ${setErr.message}`);

      // 4. Fact Memory States (batch upsert top / updated items)
      if (state.factMemoryMap) {
        const factEntries = Object.entries(state.factMemoryMap).map(([fact_key, state_data]) => ({
          user_id: userId,
          fact_key,
          state_data: state_data as any,
          updated_at: new Date().toISOString(),
        }));
        if (factEntries.length > 0) {
          for (let i = 0; i < factEntries.length; i += 100) {
            const slice = factEntries.slice(i, i + 100);
            await supabase.from('fact_memory_states').upsert(slice);
          }
        }
      }

      // 5. Technique Mastery
      if (state.techniqueMasteryMap) {
        const techEntries = Object.entries(state.techniqueMasteryMap).map(([technique_id, mastery_state]) => ({
          user_id: userId,
          technique_id,
          mastery_state: mastery_state as any,
          updated_at: new Date().toISOString(),
        }));
        if (techEntries.length > 0) {
          await supabase.from('technique_mastery').upsert(techEntries);
        }
      }

      // 6. Update Leaderboard Entry (Rating / CPM)
      if (state.overallStats) {
        const cpm = state.overallStats.overallCPM || 0;
        if (cpm > 0) {
          await supabase.from('leaderboard_entries').upsert({
            user_id: userId,
            category: 'global_cpm',
            score: cpm,
            period: 'all_time',
            metadata: {
              accuracy: state.overallStats.overallAccuracy || 0,
              totalAnswered: state.overallStats.totalQuestions || 0,
            },
            updated_at: new Date().toISOString(),
          });
        }
      }

      this.lastSyncedHash = this.computeStateHash(state);
      return { success: true };
    } catch (err: any) {
      console.error('[SyncEngine] Error pushing state:', err);
      return { success: false, error: err?.message || 'Database sync error' };
    }
  }

  /**
   * Debounced sync called during normal app state transitions
   */
  public debouncedSync(userId: string | null, state: any, delayMs: number = 3000) {
    if (!userId || !isSupabaseConfigured() || !this.isOnline) return;

    const currentHash = this.computeStateHash(state);
    if (this.lastSyncedHash && currentHash === this.lastSyncedHash) {
      // Nothing has changed, avoid unnecessary sync
      return;
    }

    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = setTimeout(async () => {
      const nowHash = this.computeStateHash(state);
      if (this.lastSyncedHash && nowHash === this.lastSyncedHash) {
        return;
      }
      this.notify('syncing');
      const res = await this.pushAllToSupabase(userId, state);
      if (res.success) {
        this.lastSyncedHash = nowHash;
        this.notify('synced');
      } else {
        this.notify('error', res.error);
      }
    }, delayMs);
  }

  // =========================================================================
  // SOCIAL & MULTIPLAYER API (Prepared for Upcoming Versions)
  // =========================================================================

  /**
   * Fetch leaderboard rankings
   */
  public async fetchLeaderboard(category: string = 'global_cpm', period: string = 'all_time', limit: number = 50) {
    const supabase = getSupabase();
    if (!supabase) return [];
    const { data } = await supabase
      .from('leaderboard_entries')
      .select(`
        id,
        user_id,
        score,
        category,
        period,
        updated_at,
        profiles (
          id,
          username,
          display_name,
          avatar_url,
          tier,
          rating
        )
      `)
      .eq('category', category)
      .eq('period', period)
      .order('score', { ascending: false })
      .limit(limit);

    return data || [];
  }

  /**
   * Create a 1v1 challenge (multiplication, tables sprint, etc.)
   */
  public async createChallenge(challengeType: string, config: any) {
    const supabase = getSupabase();
    if (!supabase || !this.currentUserId) return null;

    const { data, error } = await supabase
      .from('challenges_1v1')
      .insert({
        creator_id: this.currentUserId,
        challenge_type: challengeType,
        config,
        status: 'waiting',
      })
      .select()
      .single();

    if (error) {
      console.error('[SyncEngine] Error creating challenge:', error);
      return null;
    }
    return data;
  }

  /**
   * Fetch active or open 1v1 challenges
   */
  public async fetchOpenChallenges() {
    const supabase = getSupabase();
    if (!supabase) return [];
    const { data } = await supabase
      .from('challenges_1v1')
      .select(`
        *,
        creator:profiles!creator_id(display_name, avatar_url, rating, tier)
      `)
      .eq('status', 'waiting')
      .order('created_at', { ascending: false })
      .limit(20);

    return data || [];
  }

  /**
   * Send a chat message
   */
  public async sendChatMessage(conversationId: string, messageText: string, metadata: any = {}) {
    const supabase = getSupabase();
    if (!supabase || !this.currentUserId) return null;

    const { data, error } = await supabase
      .from('chat_messages')
      .insert({
        conversation_id: conversationId,
        sender_id: this.currentUserId,
        message_text: messageText,
        metadata,
      })
      .select()
      .single();

    if (error) {
      console.error('[SyncEngine] Error sending chat message:', error);
      return null;
    }
    return data;
  }
}

export const syncEngine = new SupabaseSyncEngine();
