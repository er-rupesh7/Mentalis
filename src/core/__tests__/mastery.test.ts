import { describe, it, expect } from 'vitest';
import {
  calculateMedian,
  evaluateMasteryStatus,
  updateDailyStreak,
  calculateUserRank,
  calculateCPM,
  SEVEN_DAYS_MS,
} from '../mastery';
import { UserProgressItem, OverallStats } from '../types';

describe('mastery: Metrics, Decay, Streaks & Ranks', () => {
  describe('calculateMedian', () => {
    it('handles empty arrays', () => {
      expect(calculateMedian([])).toBe(0);
    });

    it('calculates median for odd-length arrays', () => {
      expect(calculateMedian([1200, 800, 2400])).toBe(1200);
    });

    it('calculates rounded average for even-length arrays', () => {
      expect(calculateMedian([1000, 1400, 2000, 3000])).toBe(1700);
    });
  });

  describe('evaluateMasteryStatus & 7-Day Decay', () => {
    const baseItem: UserProgressItem = {
      itemId: 'table_7',
      module: 'multiplication',
      totalAttempts: 10,
      correctCount: 10,
      streak: 10,
      bestStreak: 10,
      responseTimesMs: [1200, 1100, 1300, 1000, 1250],
      medianResponseTimeMs: 1200,
      recentAccuracy: 100,
      lastPracticed: Date.now(),
      masteryStatus: 'untrained',
      masteryScore: 0,
    };

    it('marks as mastered when accuracy >= 95% and speed <= target', () => {
      const result = evaluateMasteryStatus(baseItem, 1.5);
      expect(result.status).toBe('mastered');
      expect(result.score).toBe(100);
    });

    it('transitions to needs_refresh when practiced > 7 days ago', () => {
      const staleItem: UserProgressItem = {
        ...baseItem,
        lastPracticed: Date.now() - (SEVEN_DAYS_MS + 10000),
      };
      const result = evaluateMasteryStatus(staleItem, 1.5);
      expect(result.status).toBe('needs_refresh');
    });

    it('classifies low attempts as untrained regardless of accuracy', () => {
      const fewAttempts: UserProgressItem = {
        ...baseItem,
        totalAttempts: 3,
        correctCount: 3,
      };
      const result = evaluateMasteryStatus(fewAttempts, 1.5);
      expect(result.status).toBe('untrained');
    });

    it('classifies accuracy between 70% and 94% as learning', () => {
      const learningItem: UserProgressItem = {
        ...baseItem,
        totalAttempts: 10,
        correctCount: 8, // 80%
      };
      const result = evaluateMasteryStatus(learningItem, 1.5);
      expect(result.status).toBe('learning');
    });
  });

  describe('updateDailyStreak Calendar Calculation', () => {
    it('initializes streak to 1 on first active date', () => {
      const res = updateDailyStreak('', 0, '2026-09-10');
      expect(res.dailyActiveStreak).toBe(1);
      expect(res.lastActiveDate).toBe('2026-09-10');
      expect(res.isNewDay).toBe(true);
    });

    it('preserves streak when practicing multiple times on the same calendar day', () => {
      const res = updateDailyStreak('2026-09-10', 4, '2026-09-10');
      expect(res.dailyActiveStreak).toBe(4);
      expect(res.isNewDay).toBe(false);
    });

    it('increments streak by 1 on consecutive calendar days', () => {
      const res = updateDailyStreak('2026-09-09', 4, '2026-09-10');
      expect(res.dailyActiveStreak).toBe(5);
      expect(res.isNewDay).toBe(true);
    });

    it('resets streak to 1 after missing 1 or more calendar days', () => {
      // Missed 2026-09-08 and 2026-09-09
      const res = updateDailyStreak('2026-09-07', 8, '2026-09-10');
      expect(res.dailyActiveStreak).toBe(1);
      expect(res.isNewDay).toBe(true);
    });
  });

  describe('calculateUserRank', () => {
    it('awards Initiate Decadist for new accounts', () => {
      const stats: OverallStats = {
        totalCalculations: 5,
        totalCorrect: 4,
        currentStreak: 2,
        bestStreak: 3,
        lastActiveDate: '2026-09-10',
        dailyActiveStreak: 1,
        totalTimeSpentSeconds: 15,
      };
      const rank = calculateUserRank({}, stats);
      expect(rank.title).toBe('Initiate Decadist');
      expect(rank.tierLevel).toBe(0);
    });

    it('awards Grade 12 Anchor Master when 11+ tables are mastered', () => {
      const progress: Record<string, UserProgressItem> = {};
      for (let t = 2; t <= 12; t++) {
        progress[`table_${t}`] = {
          itemId: `table_${t}`,
          module: 'multiplication',
          totalAttempts: 15,
          correctCount: 15,
          streak: 15,
          bestStreak: 15,
          responseTimesMs: [1000],
          medianResponseTimeMs: 1000,
          recentAccuracy: 100,
          lastPracticed: Date.now(),
          masteryStatus: 'mastered',
          masteryScore: 100,
        };
      }
      const stats: OverallStats = {
        totalCalculations: 150,
        totalCorrect: 145,
        currentStreak: 15,
        bestStreak: 25,
        lastActiveDate: '2026-09-10',
        dailyActiveStreak: 3,
        totalTimeSpentSeconds: 200,
      };
      const rank = calculateUserRank(progress, stats);
      expect(rank.title).toBe('Grade 12 Anchor Master');
      expect(rank.masteredTablesCount).toBe(11);
    });
  });

  describe('calculateCPM', () => {
    it('computes correct calculations per minute', () => {
      // 30 correct answers in 60 seconds = 30.0 CPM
      expect(calculateCPM(30, 60)).toBe(30.0);
      // 15 correct answers in 45 seconds = (15 / 0.75) = 20.0 CPM
      expect(calculateCPM(15, 45)).toBe(20.0);
      expect(calculateCPM(0, 50)).toBe(0);
    });
  });
});
