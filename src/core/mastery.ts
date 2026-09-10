/**
 * Mastery & Spaced Repetition Engine
 * Handles micro-grading, accuracy/speed matrix evaluation, 7-day skill decay,
 * median response times, calendar-day daily streaks, and dynamic rank/badges.
 */

import { MasteryStatus, UserProgressItem, OverallStats, UserRank, Badge, AnzanStats } from './types';

export const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

/**
 * Computes exact median of an array of numbers.
 */
export function calculateMedian(numbers: number[]): number {
  if (!numbers || numbers.length === 0) return 0;
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return Math.round((sorted[mid - 1] + sorted[mid]) / 2);
  }
  return sorted[mid];
}

/**
 * Checks and updates mastery status taking 7-day spaced repetition decay into account.
 */
export function evaluateMasteryStatus(
  progress: UserProgressItem,
  targetTimeSeconds: number
): {
  status: MasteryStatus;
  score: number;
} {
  const { totalAttempts, correctCount, responseTimesMs, lastPracticed } = progress;

  if (totalAttempts < 5) {
    const preliminaryScore = Math.round((correctCount / Math.max(1, totalAttempts)) * 40);
    return { status: 'untrained', score: Math.min(40, preliminaryScore) };
  }

  const accuracy = correctCount / totalAttempts;
  const recentTimes = responseTimesMs.slice(-10);
  const medianMs = calculateMedian(recentTimes);
  const medianSeconds = medianMs > 0 ? medianMs / 1000 : 999;

  // Check 7-day decay
  const isDecayed = Date.now() - lastPracticed > SEVEN_DAYS_MS;

  const meetsAccuracy = accuracy >= 0.95;
  const meetsSpeed = medianSeconds <= targetTimeSeconds;

  // Composite mastery score (0 to 100)
  const speedBonus = Math.max(0, Math.min(30, (targetTimeSeconds / Math.max(0.4, medianSeconds)) * 30));
  let score = Math.round(accuracy * 70 + speedBonus);
  score = Math.min(100, Math.max(0, score));

  if (meetsAccuracy && meetsSpeed) {
    if (isDecayed) {
      return { status: 'needs_refresh', score: Math.min(85, score) };
    }
    return { status: 'mastered', score: 100 };
  }

  if (accuracy >= 0.7) {
    return { status: 'learning', score: Math.min(80, score) };
  }

  return { status: 'untrained', score: Math.min(50, score) };
}

/**
 * Calculates updated daily streak based on calendar days in local time.
 * Correctly increments on consecutive days, preserves on same day,
 * and resets to 1 after 1 or more missed days.
 */
export function updateDailyStreak(
  lastActiveDate: string,
  currentStreak: number,
  todayStrOverride?: string
): {
  dailyActiveStreak: number;
  lastActiveDate: string;
  isNewDay: boolean;
} {
  const now = new Date();
  const todayStr =
    todayStrOverride ||
    `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  if (!lastActiveDate) {
    return {
      dailyActiveStreak: 1,
      lastActiveDate: todayStr,
      isNewDay: true,
    };
  }

  if (lastActiveDate === todayStr) {
    return {
      dailyActiveStreak: Math.max(1, currentStreak),
      lastActiveDate: todayStr,
      isNewDay: false,
    };
  }

  // Parse YYYY-MM-DD calendar midnight UTC timestamps for clean whole-day diffing
  const [lYear, lMonth, lDay] = lastActiveDate.split('-').map(Number);
  const [tYear, tMonth, tDay] = todayStr.split('-').map(Number);

  const lastMidnight = Date.UTC(lYear, lMonth - 1, lDay);
  const todayMidnight = Date.UTC(tYear, tMonth - 1, tDay);

  const diffDays = Math.round((todayMidnight - lastMidnight) / (24 * 60 * 60 * 1000));

  if (diffDays === 1) {
    // Exact next consecutive calendar day
    return {
      dailyActiveStreak: currentStreak + 1,
      lastActiveDate: todayStr,
      isNewDay: true,
    };
  } else if (diffDays > 1) {
    // Missed 1 or more full calendar days
    return {
      dailyActiveStreak: 1,
      lastActiveDate: todayStr,
      isNewDay: true,
    };
  } else {
    // Clock anomaly or same day
    return {
      dailyActiveStreak: Math.max(1, currentStreak),
      lastActiveDate: todayStr,
      isNewDay: false,
    };
  }
}

/**
 * Computes dynamic user rank derived from verified mastered tracks and tables.
 */
export function calculateUserRank(
  progressMap: Record<string, UserProgressItem>,
  overallStats: OverallStats
): UserRank {
  let masteredTablesCount = 0;
  let masteredAddSubCount = 0;
  let masteredSquaresCount = 0;

  Object.values(progressMap).forEach((item) => {
    if (item.masteryStatus === 'mastered') {
      if (item.module === 'multiplication') masteredTablesCount++;
      if (item.module === 'add_sub') masteredAddSubCount++;
      if (item.module === 'squares_cubes') masteredSquaresCount++;
    }
  });

  const totalMastered = masteredTablesCount + masteredAddSubCount + masteredSquaresCount;

  if (masteredTablesCount >= 90 && masteredAddSubCount >= 6) {
    return {
      title: 'Mental Arithmetic Grandmaster',
      tier: 'grandmaster',
      tierLevel: 5,
      progressPercent: 100,
      nextRankTitle: 'Max Rank Achieved',
      masteredTablesCount,
      masteredAddSubCount,
      masteredSquaresCount,
    };
  }

  if (masteredTablesCount >= 45 || totalMastered >= 50) {
    const progress = Math.min(99, Math.round(((masteredTablesCount - 45) / 45) * 100));
    return {
      title: 'Grade 50 Centurion Master',
      tier: 'centurion',
      tierLevel: 4,
      progressPercent: Math.max(5, progress),
      nextRankTitle: 'Mental Arithmetic Grandmaster',
      masteredTablesCount,
      masteredAddSubCount,
      masteredSquaresCount,
    };
  }

  if (masteredTablesCount >= 19 || totalMastered >= 20) {
    const progress = Math.min(99, Math.round(((masteredTablesCount - 19) / 26) * 100));
    return {
      title: 'Grade 20 Advanced Master',
      tier: 'navigator',
      tierLevel: 3,
      progressPercent: Math.max(5, progress),
      nextRankTitle: 'Grade 50 Centurion Master',
      masteredTablesCount,
      masteredAddSubCount,
      masteredSquaresCount,
    };
  }

  if (masteredTablesCount >= 11 || totalMastered >= 10) {
    const progress = Math.min(99, Math.round(((masteredTablesCount - 11) / 8) * 100));
    return {
      title: 'Grade 12 Anchor Master',
      tier: 'practitioner',
      tierLevel: 2,
      progressPercent: Math.max(5, progress),
      nextRankTitle: 'Grade 20 Advanced Master',
      masteredTablesCount,
      masteredAddSubCount,
      masteredSquaresCount,
    };
  }

  if (totalMastered >= 3 || overallStats.totalCalculations >= 20) {
    const progress = Math.min(99, Math.round((totalMastered / 10) * 100));
    return {
      title: 'Decade Explorer',
      tier: 'apprentice',
      tierLevel: 1,
      progressPercent: Math.max(10, progress),
      nextRankTitle: 'Grade 12 Anchor Master',
      masteredTablesCount,
      masteredAddSubCount,
      masteredSquaresCount,
    };
  }

  return {
    title: 'Initiate Decadist',
    tier: 'apprentice',
    tierLevel: 0,
    progressPercent: Math.min(99, Math.round((overallStats.totalCalculations / 20) * 100)),
    nextRankTitle: 'Decade Explorer',
    masteredTablesCount,
    masteredAddSubCount,
    masteredSquaresCount,
  };
}

/**
 * Computes list of unlockable badges and evaluates status.
 */
export function getBadges(
  overallStats: OverallStats,
  progressMap: Record<string, UserProgressItem>,
  anzanStats?: AnzanStats
): Badge[] {
  const rank = calculateUserRank(progressMap, overallStats);
  const fastItems = Object.values(progressMap).filter(
    (item) => item.medianResponseTimeMs > 0 && item.medianResponseTimeMs <= 1500 && item.totalAttempts >= 5
  );

  return [
    {
      id: 'first_calc',
      name: 'First Spark',
      description: 'Solved your very first mental calculation in Mentalis.',
      category: 'mastery',
      unlocked: overallStats.totalCalculations >= 1,
    },
    {
      id: 'streak_10',
      name: 'Focus Flow',
      description: 'Maintained a consecutive 10-answer calculation streak.',
      category: 'streak',
      unlocked: overallStats.bestStreak >= 10,
    },
    {
      id: 'streak_25',
      name: 'Unshakable Mind',
      description: 'Reached a consecutive 25-answer streak without a slip.',
      category: 'streak',
      unlocked: overallStats.bestStreak >= 25,
    },
    {
      id: 'daily_3',
      name: 'Daily Discipline',
      description: 'Trained mental arithmetic 3 consecutive calendar days.',
      category: 'streak',
      unlocked: overallStats.dailyActiveStreak >= 3,
    },
    {
      id: 'daily_7',
      name: 'Seven Day Warrior',
      description: 'Completed a 7-day daily mental math streak.',
      category: 'streak',
      unlocked: overallStats.dailyActiveStreak >= 7,
    },
    {
      id: 'speed_demon',
      name: 'Sub-Second Reflex',
      description: 'Achieved a median response time under 1.5s on a skill.',
      category: 'speed',
      unlocked: fastItems.length >= 1,
    },
    {
      id: 'table_12_anchor',
      name: 'Anchor Sovereign',
      description: 'Mastered all Foundation multiplication tables 1 through 12.',
      category: 'mastery',
      unlocked: rank.masteredTablesCount >= 11,
    },
    {
      id: 'anzan_soroban',
      name: 'Phonological Master',
      description: 'Successfully cleared an Anzan Working Memory flash drill.',
      category: 'anzan',
      unlocked: (anzanStats?.totalCorrect || 0) >= 1,
    },
  ];
}

/**
 * Calculates Calculations Per Minute (CPM)
 */
export function calculateCPM(totalCorrect: number, totalTimeSpentSeconds: number): number {
  if (totalTimeSpentSeconds <= 0 || totalCorrect <= 0) return 0;
  const minutes = totalTimeSpentSeconds / 60;
  return Math.round((totalCorrect / minutes) * 10) / 10;
}
