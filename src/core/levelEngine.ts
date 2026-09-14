/**
 * Mentalis Gamification & 1000-Level Progression Engine
 * Inspired by competitive multiplayer systems (PUBG / E-Sports).
 * Supports levels 1 to 1000, XP calculation, progressive score thresholds,
 * and 1000 distinct tiered badges.
 */

export const MAX_LEVEL = 1000;

export interface TierConfig {
  id: string;
  name: string;
  minLevel: number;
  maxLevel: number;
  primaryColor: string;
  secondaryColor: string;
  glowColor: string;
  bgGradient: string;
  iconName: 'shield' | 'blades' | 'wreath' | 'crystal' | 'diamond' | 'crown' | 'ace' | 'dragon' | 'vortex' | 'solar';
  descriptor: string;
}

export const TIERS: TierConfig[] = [
  {
    id: 'bronze',
    name: 'Bronze Cadet',
    minLevel: 1,
    maxLevel: 100,
    primaryColor: '#cd7f32',
    secondaryColor: '#8c531b',
    glowColor: 'rgba(205, 127, 50, 0.4)',
    bgGradient: 'from-amber-900/40 via-amber-800/20 to-slate-900',
    iconName: 'shield',
    descriptor: 'Foundational Calculation',
  },
  {
    id: 'silver',
    name: 'Silver Scout',
    minLevel: 101,
    maxLevel: 200,
    primaryColor: '#c0c0c0',
    secondaryColor: '#708090',
    glowColor: 'rgba(192, 192, 192, 0.4)',
    bgGradient: 'from-slate-400/30 via-slate-500/10 to-slate-900',
    iconName: 'blades',
    descriptor: 'Agile Mental Speed',
  },
  {
    id: 'gold',
    name: 'Gold Striker',
    minLevel: 201,
    maxLevel: 300,
    primaryColor: '#ffd700',
    secondaryColor: '#b8860b',
    glowColor: 'rgba(255, 215, 0, 0.5)',
    bgGradient: 'from-amber-500/30 via-yellow-600/10 to-slate-900',
    iconName: 'wreath',
    descriptor: 'Table Automaticity',
  },
  {
    id: 'platinum',
    name: 'Platinum Operative',
    minLevel: 301,
    maxLevel: 400,
    primaryColor: '#00e5ff',
    secondaryColor: '#00838f',
    glowColor: 'rgba(0, 229, 255, 0.5)',
    bgGradient: 'from-cyan-500/30 via-teal-600/10 to-slate-900',
    iconName: 'crystal',
    descriptor: 'Precision & Complements',
  },
  {
    id: 'diamond',
    name: 'Diamond Strategist',
    minLevel: 401,
    maxLevel: 500,
    primaryColor: '#2979ff',
    secondaryColor: '#1565c0',
    glowColor: 'rgba(41, 121, 255, 0.6)',
    bgGradient: 'from-blue-600/30 via-indigo-600/10 to-slate-900',
    iconName: 'diamond',
    descriptor: 'Multi-Digit Master',
  },
  {
    id: 'crown',
    name: 'Crown Calculationist',
    minLevel: 501,
    maxLevel: 600,
    primaryColor: '#a855f7',
    secondaryColor: '#6b21a8',
    glowColor: 'rgba(168, 85, 247, 0.6)',
    bgGradient: 'from-purple-600/30 via-fuchsia-600/10 to-slate-900',
    iconName: 'crown',
    descriptor: 'Royal Brain Matrix',
  },
  {
    id: 'ace',
    name: 'Ace Arithmetician',
    minLevel: 601,
    maxLevel: 700,
    primaryColor: '#ef4444',
    secondaryColor: '#991b1b',
    glowColor: 'rgba(239, 68, 68, 0.6)',
    bgGradient: 'from-rose-600/30 via-red-600/10 to-slate-900',
    iconName: 'ace',
    descriptor: 'Supersonic Recall',
  },
  {
    id: 'master',
    name: 'Master Soroban',
    minLevel: 701,
    maxLevel: 800,
    primaryColor: '#10b981',
    secondaryColor: '#065f46',
    glowColor: 'rgba(16, 185, 129, 0.6)',
    bgGradient: 'from-emerald-600/30 via-teal-700/10 to-slate-900',
    iconName: 'dragon',
    descriptor: 'Anzan Visual Memory',
  },
  {
    id: 'grandmaster',
    name: 'Grandmaster Mind',
    minLevel: 801,
    maxLevel: 900,
    primaryColor: '#ec4899',
    secondaryColor: '#831843',
    glowColor: 'rgba(236, 72, 153, 0.7)',
    bgGradient: 'from-pink-600/30 via-purple-700/10 to-slate-900',
    iconName: 'vortex',
    descriptor: 'Cosmic Cognitive Flow',
  },
  {
    id: 'conqueror',
    name: 'Conqueror Mentalist',
    minLevel: 901,
    maxLevel: 1000,
    primaryColor: '#fbbf24',
    secondaryColor: '#d97706',
    glowColor: 'rgba(251, 191, 36, 0.85)',
    bgGradient: 'from-amber-400/40 via-yellow-500/20 to-purple-950',
    iconName: 'solar',
    descriptor: 'Supreme Divine Calculation',
  },
];

export interface BadgeInfo {
  level: number;
  tier: TierConfig;
  subRank: 'I' | 'II' | 'III' | 'IV' | 'V';
  stars: number; // 1 to 5
  title: string;
  badgeLevelName: string;
  unlockedAtXP: number;
}

export interface LevelProgress {
  level: number;
  totalXP: number;
  currentLevelXP: number;
  xpForNextLevel: number;
  progressPercent: number;
  isMaxLevel: boolean;
  badge: BadgeInfo;
}

/**
 * Calculate the cumulative XP required to reach level L (1-indexed).
 * Level 1 requires 0 XP.
 */
export function getCumulativeXPForLevel(level: number): number {
  if (level <= 1) return 0;
  if (level > MAX_LEVEL) level = MAX_LEVEL;
  // Formula: 60 * (L - 1)^1.85 + 100 * (L - 1)
  return Math.floor(60 * Math.pow(level - 1, 1.85) + 100 * (level - 1));
}

/**
 * Given cumulative XP, calculate the current level (1 to 1000) using binary search.
 */
export function getLevelFromXP(totalXP: number): number {
  if (totalXP <= 0) return 1;

  let low = 1;
  let high = MAX_LEVEL;
  let result = 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const xpNeeded = getCumulativeXPForLevel(mid);

    if (totalXP >= xpNeeded) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return Math.min(MAX_LEVEL, result);
}

/**
 * Get tier configuration for a given level.
 */
export function getTierForLevel(level: number): TierConfig {
  const clamped = Math.max(1, Math.min(MAX_LEVEL, level));
  for (const tier of TIERS) {
    if (clamped >= tier.minLevel && clamped <= tier.maxLevel) {
      return tier;
    }
  }
  return TIERS[TIERS.length - 1];
}

const SUB_RANK_TITLES: Record<string, string[]> = {
  bronze: ['Novice Spark', 'Quick Adder', 'Table Cadet', 'Shield Bearer', 'Bronze Master'],
  silver: ['Speed Striker', 'Decade Jumper', 'Sharp Mind', 'Silver Vanguard', 'Silver Champion'],
  gold: ['Golden Dynamo', 'Matrix Pioneer', 'Rapid Accruer', 'Auric Guardian', 'Gold Sovereign'],
  platinum: ['Crystal Core', 'Vedic Adept', 'Prism Thinker', 'Aegis Sentinel', 'Platinum Warlord'],
  diamond: ['Diamond Blade', 'Binaural Flow', 'Chrono Tactician', 'Prismatic Master', 'Diamond Deity'],
  crown: ['Imperial Mind', 'Crown Regent', 'Matrix Monarch', 'High Sovereign', 'Crown Emperor'],
  ace: ['Flame Speedster', 'Inferno Ace', 'Apex Prodigy', 'Ace Dreadnought', 'Ace Dominator'],
  master: ['Dragon Sensei', 'Jade Soroban', 'Zen Accumulator', 'Abacus Titan', 'Grand Soroban Master'],
  grandmaster: ['Cosmic Thinker', 'Nebula Sage', 'Vortex Overlord', 'Celestial Mind', 'Apex Grandmaster'],
  conqueror: ['Solar Conqueror', 'Divine Arithmetic', 'Eternal Prodigy', 'Transcendent Mind', 'God of Mentalab'],
};

/**
 * Generate full badge information for any level (1 to 1000)
 */
export function getBadgeForLevel(level: number): BadgeInfo {
  const clamped = Math.max(1, Math.min(MAX_LEVEL, level));
  const tier = getTierForLevel(clamped);

  // Position within the tier (0 to 99)
  const offsetInTier = clamped - tier.minLevel;
  // 5 Sub-Ranks: V (0-19), IV (20-39), III (40-59), II (60-79), I (80-99)
  const subRankIndex = Math.min(4, Math.floor(offsetInTier / 20));
  const subRanks: ('V' | 'IV' | 'III' | 'II' | 'I')[] = ['V', 'IV', 'III', 'II', 'I'];
  const subRank = subRanks[subRankIndex];
  const stars = subRankIndex + 1; // 1 to 5 stars

  // Unique procedural title for every level
  const specificTitles = SUB_RANK_TITLES[tier.id] || SUB_RANK_TITLES.bronze;
  const rankDescriptor = specificTitles[subRankIndex];

  let title = `${tier.name} ${subRank} • ${rankDescriptor}`;
  if (clamped === 1000) {
    title = 'God of Mentalab • Supreme Grand Conqueror';
  }

  const badgeLevelName = `Lvl ${clamped} ${tier.name} ${subRank}`;
  const unlockedAtXP = getCumulativeXPForLevel(clamped);

  return {
    level: clamped,
    tier,
    subRank,
    stars,
    title,
    badgeLevelName,
    unlockedAtXP,
  };
}

/**
 * Get comprehensive level progression details for the user's total XP
 */
export function getLevelProgress(totalXP: number): LevelProgress {
  const validXP = Math.max(0, totalXP || 0);
  const level = getLevelFromXP(validXP);
  const isMaxLevel = level >= MAX_LEVEL;

  const currentLevelThreshold = getCumulativeXPForLevel(level);
  const nextLevelThreshold = getCumulativeXPForLevel(level + 1);

  const xpInCurrentLevel = validXP - currentLevelThreshold;
  const xpNeededForThisLevel = Math.max(1, nextLevelThreshold - currentLevelThreshold);

  const progressPercent = isMaxLevel
    ? 100
    : Math.min(100, Math.max(0, Math.round((xpInCurrentLevel / xpNeededForThisLevel) * 100)));

  const badge = getBadgeForLevel(level);

  return {
    level,
    totalXP: validXP,
    currentLevelXP: isMaxLevel ? xpNeededForThisLevel : xpInCurrentLevel,
    xpForNextLevel: xpNeededForThisLevel,
    progressPercent,
    isMaxLevel,
    badge,
  };
}

/**
 * Calculate earned points (XP) for an answered question.
 * Rewards accuracy, speed, difficulty, and streaks.
 */
export function calculatePointsEarned(params: {
  isCorrect: boolean;
  responseTimeMs: number;
  module: string;
  streak: number;
  table?: number;
  level?: number;
  anzanDigits?: number;
}): {
  totalXP: number;
  baseXP: number;
  speedBonus: number;
  streakBonus: number;
  streakMultiplier: number;
} {
  if (!params.isCorrect) {
    return {
      totalXP: 0,
      baseXP: 0,
      speedBonus: 0,
      streakBonus: 0,
      streakMultiplier: 1,
    };
  }

  // 1. Base XP by module and difficulty
  let baseXP = 15;
  if (params.module === 'add_sub') {
    baseXP = 10 + (params.level || 1) * 4;
  } else if (params.module === 'multiplication' || params.module === 'tables_bootcamp') {
    baseXP = 15 + ((params.table && params.table > 10) ? 10 : 5);
  } else if (params.module === 'squares_cubes') {
    baseXP = 25;
  } else if (params.module === 'anzan') {
    baseXP = 30 + (params.anzanDigits || 1) * 10;
  } else if (params.module === 'exam_quant') {
    baseXP = 25;
  }

  // 2. Response time / speed bonus (Lightning fast mental math)
  let speedBonus = 0;
  if (params.responseTimeMs > 0) {
    if (params.responseTimeMs < 1200) {
      speedBonus = 15; // Godly speed (<1.2s)
    } else if (params.responseTimeMs < 2000) {
      speedBonus = 10; // Excellent speed (<2.0s)
    } else if (params.responseTimeMs < 3500) {
      speedBonus = 5; // Good speed (<3.5s)
    }
  }

  // 3. Streak Multiplier
  let streakMultiplier = 1.0;
  if (params.streak >= 50) {
    streakMultiplier = 3.0; // Godlike streak!
  } else if (params.streak >= 25) {
    streakMultiplier = 2.0;
  } else if (params.streak >= 10) {
    streakMultiplier = 1.5;
  } else if (params.streak >= 5) {
    streakMultiplier = 1.2;
  }

  const rawTotal = (baseXP + speedBonus) * streakMultiplier;
  const totalXP = Math.round(rawTotal);
  const streakBonus = totalXP - (baseXP + speedBonus);

  return {
    totalXP,
    baseXP,
    speedBonus,
    streakBonus,
    streakMultiplier,
  };
}
