/**
 * Social Graph, Friends & Chat Engine for Mentalis
 * Handles following, mutual friendships (mutual follow = friend), public profiles,
 * and realtime 1v1 messaging.
 */

import { getSupabase } from '../../lib/supabase/client';
import { calculateUserRank, UserRank } from '../mastery';

export interface UserProfileData {
  id: string;
  username: string;
  displayName: string;
  avatarUrl: string | null;
  avatarType: 'google' | 'badge' | 'mastery';
  selectedBadgeLevel: number;
  equippedMasteryBadgeId?: string | null;
  level: number;
  xp: number;
  rating: number;
  tier: string;
  bio: string;
  lastSeenAt: string;
  createdAt: string;
}

export interface PublicProfileView {
  profile: UserProfileData;
  stats: {
    totalQuestions: number;
    totalCorrect: number;
    currentStreak: number;
    longestStreak: number;
    overallCPM: number;
    overallAccuracy: number;
    totalTimeSpentSeconds: number;
    lastActiveDate: string | null;
    progressMap: Record<string, any>;
    dailyActivityMap?: Record<string, number>;
  };
  rankInfo: UserRank;
  followersCount: number;
  followingCount: number;
  friendsCount: number;
  isFollowing: boolean;
  isFollowedBy: boolean;
  isFriend: boolean;
}

export interface FriendSummary {
  userId: string;
  username: string;
  displayName: string;
  avatarUrl: string | null;
  avatarType: 'google' | 'badge' | 'mastery';
  selectedBadgeLevel: number;
  equippedMasteryBadgeId?: string | null;
  level: number;
  rating: number;
  lastSeenAt: string;
}

export interface AppNotification {
  id: string;
  userId: string;
  actorId: string;
  type: string;
  title: string;
  message: string;
  metadata: {
    actorUsername?: string;
    actorDisplayName?: string;
    actorAvatarUrl?: string | null;
    actorAvatarType?: 'google' | 'badge' | 'mastery';
    actorBadgeLevel?: number;
    actorMasteryBadgeId?: string;
    [key: string]: any;
  };
  isRead: boolean;
  createdAt: string;
}

export interface ChatMessageItem {
  id: string;
  conversationId: string;
  senderId: string;
  messageText: string;
  metadata: any;
  createdAt: string;
}

class SocialEngine {
  /**
   * Fetch complete public profile data by username
   */
  public async fetchPublicProfile(
    username: string,
    viewerId?: string | null
  ): Promise<PublicProfileView | null> {
    const supabase = getSupabase();
    if (!supabase) return null;

    // 1. Fetch profile
    const { data: profileData, error: profErr } = await supabase
      .from('profiles')
      .select('*')
      .ilike('username', username.trim())
      .maybeSingle();

    if (profErr || !profileData) {
      return null;
    }

    const userId = profileData.id;

    // 2. Fetch stats and follower relationships in parallel
    const [statsRes, followersRes, followingRes, viewerFollowRes, targetFollowRes] = await Promise.all([
      supabase.from('user_stats').select('*').eq('user_id', userId).maybeSingle(),
      supabase.from('follows').select('follower_id', { count: 'exact' }).eq('following_id', userId),
      supabase.from('follows').select('following_id', { count: 'exact' }).eq('follower_id', userId),
      viewerId
        ? supabase.from('follows').select('*').eq('follower_id', viewerId).eq('following_id', userId).maybeSingle()
        : Promise.resolve({ data: null }),
      viewerId
        ? supabase.from('follows').select('*').eq('follower_id', userId).eq('following_id', viewerId).maybeSingle()
        : Promise.resolve({ data: null }),
    ]);

    // 3. Count mutual friends (people who follow user AND whom user follows)
    let friendsCount = 0;
    const { data: mutualData } = await supabase
      .from('follows')
      .select('following_id')
      .eq('follower_id', userId);

    if (mutualData && mutualData.length > 0) {
      const followingIds = mutualData.map((f) => f.following_id);
      const { count } = await supabase
        .from('follows')
        .select('*', { count: 'exact', head: true })
        .eq('following_id', userId)
        .in('follower_id', followingIds);
      friendsCount = count || 0;
    }

    const isFollowing = Boolean(viewerFollowRes.data);
    const isFollowedBy = Boolean(targetFollowRes.data);
    const isFriend = isFollowing && isFollowedBy;

    const statsRow = statsRes.data;
    const totalQuestions = statsRow?.total_questions_answered || 0;
    const totalCorrect = statsRow?.total_correct || 0;
    const longestStreak = statsRow?.longest_streak || 0;
    const totalTimeSpentSeconds = Number(statsRow?.total_time_spent_seconds || 0);

    const rankInfo = calculateUserRank(totalQuestions, totalCorrect, longestStreak, totalTimeSpentSeconds);

    return {
      profile: {
        id: profileData.id,
        username: profileData.username || 'user',
        displayName: profileData.display_name || profileData.username || 'Mentalist',
        avatarUrl: profileData.avatar_url,
        avatarType: (profileData.avatar_type as any) || 'google',
        selectedBadgeLevel: profileData.selected_badge_level || 1,
        equippedMasteryBadgeId: profileData.equipped_badge_id || null,
        level: profileData.level || 1,
        xp: Number(profileData.xp || 0),
        rating: rankInfo.rating,
        tier: rankInfo.ratingTier,
        bio: profileData.bio || '',
        lastSeenAt: profileData.last_seen_at || profileData.created_at,
        createdAt: profileData.created_at,
      },
      stats: {
        totalQuestions,
        totalCorrect,
        currentStreak: statsRow?.current_streak || 0,
        longestStreak,
        overallCPM: Number(statsRow?.overall_cpm || 0),
        overallAccuracy: Number(statsRow?.overall_accuracy || 0),
        totalTimeSpentSeconds,
        lastActiveDate: statsRow?.last_active_date || null,
        progressMap: (statsRow?.progress_map as any) || {},
        dailyActivityMap: (statsRow?.progress_map as any)?._dailyActivityMap || {},
      },
      rankInfo,
      followersCount: followersRes.count || 0,
      followingCount: followingRes.count || 0,
      friendsCount,
      isFollowing,
      isFollowedBy,
      isFriend,
    };
  }

  /**
   * Follow or unfollow a user
   */
  public async toggleFollow(
    viewerId: string,
    targetUserId: string
  ): Promise<{ isFollowing: boolean; error?: string }> {
    const supabase = getSupabase();
    if (!supabase) return { isFollowing: false, error: 'Database unavailable' };

    // Check current state
    const { data: existing } = await supabase
      .from('follows')
      .select('*')
      .eq('follower_id', viewerId)
      .eq('following_id', targetUserId)
      .maybeSingle();

    if (existing) {
      // Unfollow
      const { error } = await supabase
        .from('follows')
        .delete()
        .eq('follower_id', viewerId)
        .eq('following_id', targetUserId);
      if (error) return { isFollowing: true, error: error.message };
      return { isFollowing: false };
    } else {
      // Follow
      const { error } = await supabase.from('follows').insert({
        follower_id: viewerId,
        following_id: targetUserId,
      });
      if (error) return { isFollowing: false, error: error.message };

      // Dispatch in-web notification to target user
      try {
        const { data: actorProfile } = await supabase
          .from('profiles')
          .select('id, username, display_name, avatar_url, avatar_type, selected_badge_level, equipped_badge_id')
          .eq('id', viewerId)
          .maybeSingle();

        const actorName = actorProfile?.display_name || actorProfile?.username || 'A Mentalist';

        await supabase.from('notifications').insert({
          user_id: targetUserId,
          actor_id: viewerId,
          type: 'follow',
          title: 'New Follower',
          message: `${actorName} is now following you!`,
          metadata: {
            actorUsername: actorProfile?.username,
            actorDisplayName: actorName,
            actorAvatarUrl: actorProfile?.avatar_url,
            actorAvatarType: actorProfile?.avatar_type || 'google',
            actorBadgeLevel: actorProfile?.selected_badge_level || 1,
            actorMasteryBadgeId: actorProfile?.equipped_badge_id,
          },
        });
      } catch (notifErr) {
        console.warn('[SocialEngine] Notification insert note:', notifErr);
      }

      return { isFollowing: true };
    }
  }

  /**
   * Fetch mutual friends for a user (follower + following = friend)
   */
  public async fetchFriends(userId: string): Promise<FriendSummary[]> {
    const supabase = getSupabase();
    if (!supabase) return [];

    // 1. Get who user follows
    const { data: myFollows } = await supabase
      .from('follows')
      .select('following_id')
      .eq('follower_id', userId);

    if (!myFollows || myFollows.length === 0) return [];

    const followingIds = myFollows.map((f) => f.following_id);

    // 2. Filter for those who also follow user back
    const { data: mutualFollows } = await supabase
      .from('follows')
      .select(`
        follower_id,
        profiles!follower_id (
          id,
          username,
          display_name,
          avatar_url,
          avatar_type,
          selected_badge_level,
          equipped_badge_id,
          level,
          rating,
          last_seen_at
        )
      `)
      .eq('following_id', userId)
      .in('follower_id', followingIds);

    if (!mutualFollows) return [];

    return mutualFollows.map((item: any) => {
      const p = item.profiles;
      return {
        userId: p.id,
        username: p.username || 'user',
        displayName: p.display_name || p.username || 'Friend',
        avatarUrl: p.avatar_url,
        avatarType: p.avatar_type || 'google',
        selectedBadgeLevel: p.selected_badge_level || 1,
        equippedMasteryBadgeId: p.equipped_badge_id || null,
        level: p.level || 1,
        rating: p.rating || 1200,
        lastSeenAt: p.last_seen_at || new Date().toISOString(),
      };
    });
  }

  // Rate Limiting Map: userId -> { recentMinuteTimestamps, recentHourTimestamps }
  private availabilityRateLimits: Map<string, { minute: number[]; hour: number[] }> = new Map();

  /**
   * Check if user is within rate limits: max 5 checks / minute and max 10 checks / 60 minutes
   */
  public checkUsernameRateLimit(userId: string): {
    allowed: boolean;
    error?: string;
    remainingMinute: number;
    remainingHour: number;
  } {
    const now = Date.now();
    let tracker = this.availabilityRateLimits.get(userId);
    if (!tracker) {
      tracker = { minute: [], hour: [] };
      this.availabilityRateLimits.set(userId, tracker);
    }

    // Filter older than 60s and 60m
    tracker.minute = tracker.minute.filter((t) => now - t < 60_000);
    tracker.hour = tracker.hour.filter((t) => now - t < 3_600_000);

    const remainingMinute = Math.max(0, 5 - tracker.minute.length);
    const remainingHour = Math.max(0, 10 - tracker.hour.length);

    if (tracker.minute.length >= 5) {
      const waitSec = Math.ceil((60_000 - (now - tracker.minute[0])) / 1000);
      return {
        allowed: false,
        error: `Rate limit reached: Maximum 5 checks per minute. Please wait ${waitSec}s.`,
        remainingMinute: 0,
        remainingHour,
      };
    }

    if (tracker.hour.length >= 10) {
      const waitMin = Math.ceil((3_600_000 - (now - tracker.hour[0])) / 60_000);
      return {
        allowed: false,
        error: `Rate limit reached: Maximum 10 checks per 60 minutes. Please wait ${waitMin} minutes.`,
        remainingMinute: 0,
        remainingHour: 0,
      };
    }

    return { allowed: true, remainingMinute, remainingHour };
  }

  /**
   * Check username availability with rate-limiting (5/min, 10/hr)
   */
  public async checkUsernameAvailability(
    userId: string,
    candidate: string
  ): Promise<{ available: boolean; error?: string; remainingMinute?: number; remainingHour?: number }> {
    const rateCheck = this.checkUsernameRateLimit(userId);
    if (!rateCheck.allowed) {
      return {
        available: false,
        error: rateCheck.error,
        remainingMinute: rateCheck.remainingMinute,
        remainingHour: rateCheck.remainingHour,
      };
    }

    const clean = candidate.trim().toLowerCase();
    if (!/^[a-z0-9_]{3,20}$/.test(clean)) {
      return {
        available: false,
        error: 'Username must be 3 to 20 characters and contain only letters, numbers, and underscores.',
      };
    }

    // Record this check in rate limit tracker
    const tracker = this.availabilityRateLimits.get(userId);
    if (tracker) {
      const now = Date.now();
      tracker.minute.push(now);
      tracker.hour.push(now);
    }

    const supabase = getSupabase();
    if (!supabase) return { available: false, error: 'Database unconfigured' };

    const { data: existing, error } = await supabase
      .from('profiles')
      .select('id')
      .ilike('username', clean)
      .neq('id', userId)
      .maybeSingle();

    if (error) {
      return { available: false, error: error.message };
    }

    if (existing) {
      return {
        available: false,
        error: 'Username is already taken. Please choose another.',
        remainingMinute: Math.max(0, rateCheck.remainingMinute - 1),
        remainingHour: Math.max(0, rateCheck.remainingHour - 1),
      };
    }

    return {
      available: true,
      remainingMinute: Math.max(0, rateCheck.remainingMinute - 1),
      remainingHour: Math.max(0, rateCheck.remainingHour - 1),
    };
  }

  /**
   * Automatically generate and assign a unique default username (e.g. rupesh_a8f2k)
   */
  public async generateDefaultUsername(displayName: string, userId: string): Promise<string | null> {
    const supabase = getSupabase();
    if (!supabase) return null;

    const rawWord = displayName.trim().split(/[\s_-]+/)[0].toLowerCase().replace(/[^a-z0-9]/g, '');
    const prefix = rawWord.length >= 2 ? rawWord.slice(0, 14) : 'user';

    for (let attempt = 0; attempt < 5; attempt++) {
      const suffix = Math.random().toString(36).substring(2, 7);
      const candidate = `${prefix}_${suffix}`.slice(0, 20);

      const { data: existing } = await supabase
        .from('profiles')
        .select('id')
        .ilike('username', candidate)
        .maybeSingle();

      if (!existing) {
        await supabase
          .from('profiles')
          .update({ username: candidate, updated_at: new Date().toISOString() })
          .eq('id', userId);
        return candidate;
      }
    }
    return null;
  }

  /**
   * Update unique username with 30-day cooldown enforcement
   */
  public async updateUsername(userId: string, newUsername: string): Promise<{ success: boolean; error?: string }> {
    const supabase = getSupabase();
    if (!supabase) return { success: false, error: 'Database unconfigured' };

    const clean = newUsername.trim().toLowerCase();
    if (!/^[a-z0-9_]{3,20}$/.test(clean)) {
      return {
        success: false,
        error: 'Username must be 3 to 20 characters and contain only letters, numbers, and underscores.',
      };
    }

    // Check 30-day change limit
    const { data: currentProf } = await supabase
      .from('profiles')
      .select('username, username_changed_at')
      .eq('id', userId)
      .maybeSingle();

    if (currentProf?.username && currentProf?.username_changed_at) {
      const lastChanged = new Date(currentProf.username_changed_at).getTime();
      const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000;
      const elapsed = Date.now() - lastChanged;

      if (elapsed < thirtyDaysMs) {
        const remainingDays = Math.ceil((thirtyDaysMs - elapsed) / (24 * 60 * 60 * 1000));
        return {
          success: false,
          error: `Username can only be changed once every 30 days. Please wait ${remainingDays} more days.`,
        };
      }
    }

    // Check if taken by another user
    const { data: existing } = await supabase
      .from('profiles')
      .select('id')
      .ilike('username', clean)
      .neq('id', userId)
      .maybeSingle();

    if (existing) {
      return { success: false, error: 'Username is already taken. Please choose another.' };
    }

    const { error } = await supabase
      .from('profiles')
      .update({
        username: clean,
        username_changed_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('id', userId);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  }

  /**
   * Fetch suggested active mentalists to follow
   */
  public async fetchSuggestedFriends(currentUserId: string, limit: number = 10): Promise<FriendSummary[]> {
    const supabase = getSupabase();
    if (!supabase) return [];

    // Get who the user already follows
    const { data: myFollows } = await supabase
      .from('follows')
      .select('following_id')
      .eq('follower_id', currentUserId);

    const followingIds = new Set(myFollows?.map((f) => f.following_id) || []);
    followingIds.add(currentUserId);

    const { data, error } = await supabase
      .from('profiles')
      .select('id, username, display_name, avatar_url, avatar_type, selected_badge_level, equipped_badge_id, level, rating, last_seen_at')
      .not('username', 'is', null)
      .order('last_seen_at', { ascending: false })
      .limit(limit + followingIds.size);

    if (error || !data) return [];

    return data
      .filter((p) => !followingIds.has(p.id))
      .slice(0, limit)
      .map((p) => ({
        userId: p.id,
        username: p.username || 'learner',
        displayName: p.display_name || p.username || 'Learner',
        avatarUrl: p.avatar_url,
        avatarType: p.avatar_type || 'google',
        selectedBadgeLevel: p.selected_badge_level || 1,
        equippedMasteryBadgeId: p.equipped_badge_id || null,
        level: p.level || 1,
        rating: p.rating || 1200,
        lastSeenAt: p.last_seen_at || new Date().toISOString(),
      }));
  }

  /**
   * Update user avatar choice: 'google' vs 'badge' vs 'mastery'
   */
  public async updateAvatarPreference(
    userId: string,
    avatarType: 'google' | 'badge' | 'mastery',
    selectedBadgeLevel: number = 1,
    equippedMasteryBadgeId?: string | null
  ): Promise<{ success: boolean; error?: string }> {
    const supabase = getSupabase();
    if (!supabase) return { success: false, error: 'Database unconfigured' };

    const payload: any = {
      avatar_type: avatarType,
      selected_badge_level: selectedBadgeLevel,
      updated_at: new Date().toISOString(),
    };

    if (avatarType === 'mastery') {
      payload.equipped_badge_id = equippedMasteryBadgeId || null;
      payload.equipped_badge_type = 'mastery';
    } else if (avatarType === 'badge') {
      payload.equipped_badge_id = String(selectedBadgeLevel);
      payload.equipped_badge_type = 'level';
    } else {
      payload.equipped_badge_id = null;
      payload.equipped_badge_type = 'google';
    }

    const { error } = await supabase
      .from('profiles')
      .update(payload)
      .eq('id', userId);

    if (error) return { success: false, error: error.message };
    return { success: true };
  }

  // =========================================================================
  // IN-WEB NOTIFICATIONS (Follow alerts, direct follow-back, etc.)
  // =========================================================================

  /**
   * Fetch recent notifications for user
   */
  public async fetchNotifications(userId: string, limit: number = 30): Promise<AppNotification[]> {
    const supabase = getSupabase();
    if (!supabase) return [];

    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error || !data) return [];
    return data.map((row: any) => ({
      id: row.id,
      userId: row.user_id,
      actorId: row.actor_id,
      type: row.type,
      title: row.title,
      message: row.message,
      metadata: row.metadata || {},
      isRead: Boolean(row.is_read),
      createdAt: row.created_at,
    }));
  }

  /**
   * Mark a single notification as read
   */
  public async markNotificationAsRead(notificationId: string): Promise<boolean> {
    const supabase = getSupabase();
    if (!supabase) return false;

    const { error } = await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('id', notificationId);

    return !error;
  }

  /**
   * Mark all notifications for user as read
   */
  public async markAllNotificationsAsRead(userId: string): Promise<boolean> {
    const supabase = getSupabase();
    if (!supabase) return false;

    const { error } = await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('user_id', userId)
      .eq('is_read', false);

    return !error;
  }

  /**
   * Subscribe to incoming notifications in realtime
   */
  public subscribeToNotifications(userId: string, callback: (notification: AppNotification) => void): () => void {
    const supabase = getSupabase();
    if (!supabase) return () => {};

    const channel = supabase
      .channel(`notifications_${userId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'notifications',
          filter: `user_id=eq.${userId}`,
        },
        (payload) => {
          const row = payload.new as any;
          if (row) {
            callback({
              id: row.id,
              userId: row.user_id,
              actorId: row.actor_id,
              type: row.type,
              title: row.title,
              message: row.message,
              metadata: row.metadata || {},
              isRead: Boolean(row.is_read),
              createdAt: row.created_at,
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }

  // =========================================================================
  // REALTIME 1v1 CHAT CONVERSATIONS
  // =========================================================================

  /**
   * Find or create direct 1v1 conversation with a friend
   */
  public async getOrCreateDirectConversation(userId1: string, userId2: string): Promise<string | null> {
    const supabase = getSupabase();
    if (!supabase) return null;

    // Find if a conversation exists containing both participants
    const { data: user1Convs } = await supabase
      .from('chat_participants')
      .select('conversation_id')
      .eq('user_id', userId1);

    if (user1Convs && user1Convs.length > 0) {
      const convIds = user1Convs.map((c) => c.conversation_id);
      const { data: shared } = await supabase
        .from('chat_participants')
        .select('conversation_id')
        .eq('user_id', userId2)
        .in('conversation_id', convIds)
        .maybeSingle();

      if (shared?.conversation_id) {
        return shared.conversation_id;
      }
    }

    // Otherwise create new conversation
    const { data: newConv, error: convErr } = await supabase
      .from('chat_conversations')
      .insert({ type: 'direct' })
      .select()
      .single();

    if (convErr || !newConv) {
      console.error('[SocialEngine] Error creating conversation:', convErr);
      return null;
    }

    // Insert participants
    await supabase.from('chat_participants').insert([
      { conversation_id: newConv.id, user_id: userId1 },
      { conversation_id: newConv.id, user_id: userId2 },
    ]);

    return newConv.id;
  }

  /**
   * Fetch messages for a conversation
   */
  public async fetchMessages(conversationId: string, limit: number = 50): Promise<ChatMessageItem[]> {
    const supabase = getSupabase();
    if (!supabase) return [];

    const { data } = await supabase
      .from('chat_messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true })
      .limit(limit);

    if (!data) return [];

    return data.map((msg) => ({
      id: msg.id,
      conversationId: msg.conversation_id,
      senderId: msg.sender_id,
      messageText: msg.message_text,
      metadata: msg.metadata || {},
      createdAt: msg.created_at,
    }));
  }

  /**
   * Send a chat message
   */
  public async sendMessage(
    conversationId: string,
    senderId: string,
    text: string,
    metadata: any = {}
  ): Promise<ChatMessageItem | null> {
    const supabase = getSupabase();
    if (!supabase || !text.trim()) return null;

    const { data, error } = await supabase
      .from('chat_messages')
      .insert({
        conversation_id: conversationId,
        sender_id: senderId,
        message_text: text.trim(),
        metadata,
      })
      .select()
      .single();

    if (error || !data) {
      console.error('[SocialEngine] Error sending message:', error);
      return null;
    }

    return {
      id: data.id,
      conversationId: data.conversation_id,
      senderId: data.sender_id,
      messageText: data.message_text,
      metadata: data.metadata || {},
      createdAt: data.created_at,
    };
  }
}

export const socialEngine = new SocialEngine();
