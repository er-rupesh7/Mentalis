/**
 * Mastery & Spaced Repetition Engine
 * Handles micro-grading, accuracy/speed matrix evaluation, 7-day skill decay, and CPM scoring.
 */

import { MasteryStatus, UserProgressItem } from './types';

export const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

/**
 * Checks and updates mastery status taking 7-day spaced repetition decay into account.
 */
export function evaluateMasteryStatus(progress: UserProgressItem, targetTimeSeconds: number): {
  status: MasteryStatus;
  score: number;
} {
  const { totalAttempts, correctCount, responseTimesMs, lastPracticed } = progress;

  if (totalAttempts < 5) {
    return { status: 'untrained', score: Math.round((correctCount / Math.max(1, totalAttempts)) * 40) };
  }

  const accuracy = correctCount / totalAttempts;
  const recentTimes = responseTimesMs.slice(-10);
  const avgTimeSeconds =
    recentTimes.length > 0
      ? recentTimes.reduce((acc, t) => acc + t, 0) / (recentTimes.length * 1000)
      : 999;

  // Check 7-day decay
  const isDecayed = Date.now() - lastPracticed > SEVEN_DAYS_MS;

  const meetsAccuracy = accuracy >= 0.95;
  const meetsSpeed = avgTimeSeconds <= targetTimeSeconds;

  // Base score 0 to 100
  let score = Math.round(accuracy * 70 + Math.max(0, Math.min(30, (targetTimeSeconds / Math.max(0.5, avgTimeSeconds)) * 30)));
  score = Math.min(100, Math.max(0, score));

  if (meetsAccuracy && meetsSpeed) {
    if (isDecayed) {
      return { status: 'needs_refresh', score };
    }
    return { status: 'mastered', score: 100 };
  }

  if (accuracy >= 0.7) {
    return { status: 'learning', score };
  }

  return { status: 'untrained', score };
}

/**
 * Computes micro-grade title for a given table or level
 */
export function getGradeTitle(tableNumber: number, isMastered: boolean): string {
  if (!isMastered) return `Grade ${tableNumber} Student`;
  if (tableNumber === 100) return 'Grade 100 Grandmaster';
  if (tableNumber >= 50) return `Grade ${tableNumber} Centurion Master`;
  if (tableNumber >= 20) return `Grade ${tableNumber} Advanced Master`;
  if (tableNumber >= 12) return `Grade ${tableNumber} Master`;
  return `Grade ${tableNumber} Table Master`;
}

/**
 * Calculates Calculations Per Minute (CPM)
 */
export function calculateCPM(totalCorrect: number, totalTimeSpentSeconds: number): number {
  if (totalTimeSpentSeconds <= 0 || totalCorrect <= 0) return 0;
  const minutes = totalTimeSpentSeconds / 60;
  return Math.round((totalCorrect / minutes) * 10) / 10;
}
