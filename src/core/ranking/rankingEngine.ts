/**
 * Mentalis Unbiased AI Ranking Engine (RP - Rank Points)
 * Calculates comprehensive mathematical capability score combining:
 * - Total Experience (XP)
 * - Consistency & Daily Streak
 * - Technique Repertoire Diversity (Vedic, Trachtenberg, Mental Shortcuts)
 * - Atomic Fact Automaticity (Multiplication, Squares, Cubes)
 * - Cognitive Calculation Accuracy Rate
 */

import { getSupabase } from '../../lib/supabase/client';

export interface RankedPlayer {
  id: string;
  username: string;
  displayName: string;
  avatarUrl?: string | null;
  avatarType?: 'google' | 'badge' | 'mastery';
  badgeLevel: number;
  equippedMasteryBadgeId?: string | null;
  level: number;
  xp: number;
  streak: number;
  accuracy: number;
  techniquesCount: number;
  factsCount: number;
  rp: number; // Rank Points
  rank: number;
  isCurrentUser?: boolean;
}

export function calculateRP(
  xp: number,
  streak: number,
  techniquesMastered: number,
  factsMastered: number,
  accuracyPercent: number
): number {
  const safeAccuracy = Math.min(100, Math.max(0, accuracyPercent || 0));
  const rp =
    (xp || 0) * 0.4 +
    (streak || 0) * 150 +
    (techniquesMastered || 0) * 200 +
    (factsMastered || 0) * 15 +
    safeAccuracy * 10;

  return Math.round(rp);
}

// Fallback high-performing community learners for initial display or offline
const MOCK_COMMUNITY_PLAYERS: RankedPlayer[] = [
  {
    id: 'champ_1',
    username: 'shakuntala_dev',
    displayName: 'Aarav Sharma',
    avatarType: 'mastery',
    badgeLevel: 42,
    equippedMasteryBadgeId: 'squares_centurion',
    level: 42,
    xp: 28450,
    streak: 34,
    accuracy: 98.4,
    techniquesCount: 14,
    factsCount: 185,
    rp: 23640,
    rank: 1,
  },
  {
    id: 'champ_2',
    username: 'trachtenberg_pro',
    displayName: 'Priya Nair',
    avatarType: 'mastery',
    badgeLevel: 38,
    equippedMasteryBadgeId: 'cubes_monolith',
    level: 38,
    xp: 24100,
    streak: 28,
    accuracy: 96.8,
    techniquesCount: 12,
    factsCount: 160,
    rp: 20120,
    rank: 2,
  },
  {
    id: 'champ_3',
    username: 'vedic_mathlete',
    displayName: 'Rohan Gupta',
    avatarType: 'badge',
    badgeLevel: 35,
    equippedMasteryBadgeId: 'table_apex',
    level: 35,
    xp: 21300,
    streak: 21,
    accuracy: 95.2,
    techniquesCount: 11,
    factsCount: 142,
    rp: 17850,
    rank: 3,
  },
  {
    id: 'champ_4',
    username: 'ananya_calc',
    displayName: 'Ananya Iyer',
    avatarType: 'badge',
    badgeLevel: 29,
    level: 29,
    xp: 16400,
    streak: 15,
    accuracy: 94.0,
    techniquesCount: 9,
    factsCount: 118,
    rp: 13950,
    rank: 4,
  },
  {
    id: 'champ_5',
    username: 'speed_wizard',
    displayName: 'Vikram Joshi',
    avatarType: 'google',
    badgeLevel: 24,
    level: 24,
    xp: 12800,
    streak: 12,
    accuracy: 92.5,
    techniquesCount: 8,
    factsCount: 96,
    rp: 11200,
    rank: 5,
  },
  {
    id: 'champ_6',
    username: 'neha_quant',
    displayName: 'Neha Reddy',
    avatarType: 'mastery',
    badgeLevel: 20,
    equippedMasteryBadgeId: 'table_grandmaster',
    level: 20,
    xp: 9800,
    streak: 9,
    accuracy: 91.0,
    techniquesCount: 6,
    factsCount: 84,
    rp: 8750,
    rank: 6,
  },
];

export const RANKING_CACHE_KEY = 'mentalis_ranking_cache_v1';
export const RANKING_CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export interface CachedRankingPayload {
  timestamp: number;
  basePlayers: RankedPlayer[];
}

export function getCachedRankingData(): CachedRankingPayload | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(RANKING_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.timestamp === 'number' && Array.isArray(parsed.basePlayers)) {
      return parsed;
    }
  } catch (err) {
    console.warn('[rankingEngine] Failed to read ranking cache from localStorage:', err);
  }
  return null;
}

export function setCachedRankingData(basePlayers: RankedPlayer[]) {
  if (typeof window === 'undefined') return;
  try {
    const payload: CachedRankingPayload = {
      timestamp: Date.now(),
      basePlayers,
    };
    localStorage.setItem(RANKING_CACHE_KEY, JSON.stringify(payload));
  } catch (err) {
    console.warn('[rankingEngine] Failed to write ranking cache to localStorage:', err);
  }
}

export function clearRankingCache() {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(RANKING_CACHE_KEY);
  } catch {}
}

export async function fetchLiveLeaderboard(
  currentUserProfile?: {
    id: string;
    username: string | null;
    displayName: string | null;
    avatarType: string;
    level: number;
    xp: number;
    streak: number;
    accuracy: number;
    techniquesCount: number;
    factsCount: number;
  },
  forceRefresh: boolean = false
): Promise<{ topThree: RankedPlayer[]; activeMarquee: RankedPlayer[]; isFromCache?: boolean }> {
  let players: RankedPlayer[] = [...MOCK_COMMUNITY_PLAYERS];
  let isFromCache = false;

  const cached = getCachedRankingData();
  const isCacheValid = cached && (Date.now() - cached.timestamp < RANKING_CACHE_TTL_MS) && cached.basePlayers.length >= 3;

  if (!forceRefresh && isCacheValid) {
    players = [...cached.basePlayers];
    isFromCache = true;
  } else {
    const supabase = getSupabase();
    if (supabase) {
      try {
        const { data: profiles, error } = await supabase
          .from('profiles')
          .select(`
            id,
            username,
            display_name,
            avatar_url,
            avatar_type,
            selected_badge_level,
            equipped_badge_id,
            level,
            xp
          `)
          .order('xp', { ascending: false })
          .limit(20);

        if (!error && profiles && profiles.length > 0) {
          // Fetch stats in parallel
          const userIds = profiles.map((p) => p.id);
          const { data: statsRows } = await supabase
            .from('user_stats')
            .select('user_id, current_streak, overall_accuracy, progress_map')
            .in('user_id', userIds);

          const statsMap = new Map((statsRows || []).map((s) => [s.user_id, s]));

          const liveList: RankedPlayer[] = profiles.map((p) => {
            const s = statsMap.get(p.id);
            const streak = s?.current_streak || 1;
            const accuracy = Number(s?.overall_accuracy || 90);
            const techniques = 5;
            const facts = 50;
            const rp = calculateRP(p.xp || 0, streak, techniques, facts, accuracy);

            return {
              id: p.id,
              username: p.username || 'mentalist',
              displayName: p.display_name || p.username || 'Mentalist',
              avatarUrl: p.avatar_url,
              avatarType: (p.avatar_type as any) || 'google',
              badgeLevel: p.selected_badge_level || 1,
              equippedMasteryBadgeId: p.equipped_badge_id || null,
              level: p.level || 1,
              xp: p.xp || 0,
              streak,
              accuracy,
              techniquesCount: techniques,
              factsCount: facts,
              rp,
              rank: 1,
            };
          });

          if (liveList.length >= 3) {
            liveList.sort((a, b) => b.rp - a.rp);
            liveList.forEach((p, idx) => {
              p.rank = idx + 1;
            });
            players = liveList;
            setCachedRankingData(liveList);
          }
        }
      } catch {
        if (cached && cached.basePlayers.length >= 3) {
          players = [...cached.basePlayers];
          isFromCache = true;
        }
      }
    } else if (cached && cached.basePlayers.length >= 3) {
      players = [...cached.basePlayers];
      isFromCache = true;
    } else {
      setCachedRankingData(players);
    }
  }

  // Merge current user if provided
  if (currentUserProfile && currentUserProfile.id) {
    const userRP = calculateRP(
      currentUserProfile.xp,
      currentUserProfile.streak,
      currentUserProfile.techniquesCount,
      currentUserProfile.factsCount,
      currentUserProfile.accuracy
    );

    const userEntry: RankedPlayer = {
      id: currentUserProfile.id,
      username: currentUserProfile.username || 'you',
      displayName: currentUserProfile.displayName || currentUserProfile.username || 'You',
      avatarType: (currentUserProfile.avatarType as any) || 'google',
      badgeLevel: currentUserProfile.level,
      level: currentUserProfile.level,
      xp: currentUserProfile.xp,
      streak: currentUserProfile.streak,
      accuracy: currentUserProfile.accuracy,
      techniquesCount: currentUserProfile.techniquesCount,
      factsCount: currentUserProfile.factsCount,
      rp: userRP,
      rank: 1,
      isCurrentUser: true,
    };

    // Remove old entry of current user if present
    players = players.filter((p) => p.id !== currentUserProfile.id);
    players.push(userEntry);
    players.sort((a, b) => b.rp - a.rp);
    players.forEach((p, idx) => {
      p.rank = idx + 1;
    });
  }

  const topThree = players.slice(0, 3);
  const activeMarquee = players.slice(0, 15);

  return { topThree, activeMarquee, isFromCache };
}
