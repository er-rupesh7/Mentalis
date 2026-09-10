import { describe, it, expect } from 'vitest';
import { analyzeProgress, getRecommendedNextDrill, getAdaptiveQuestion } from '../adaptive';
import { UserProgressItem } from '../types';
import { SEVEN_DAYS_MS } from '../mastery';

describe('adaptive: Spaced Repetition Analysis & Question Scheduling', () => {
  it('detects decayed skills when time elapsed > 7 days', () => {
    const progressMap: Record<string, UserProgressItem> = {
      table_7: {
        itemId: 'table_7',
        module: 'multiplication',
        totalAttempts: 20,
        correctCount: 20,
        streak: 20,
        bestStreak: 20,
        responseTimesMs: [1100],
        medianResponseTimeMs: 1100,
        recentAccuracy: 100,
        lastPracticed: Date.now() - (SEVEN_DAYS_MS + 50000),
        masteryStatus: 'mastered',
        masteryScore: 100,
      },
    };

    const analysis = analyzeProgress(progressMap);
    expect(analysis.decayedSkills.length).toBe(1);
    expect(analysis.decayedSkills[0].itemId).toBe('table_7');

    const rec = getRecommendedNextDrill(progressMap, 'multiplication', 2, 7);
    expect(rec.title).toContain('Table 7 Refresher');
  });

  it('detects weak skills when accuracy < 75%', () => {
    const progressMap: Record<string, UserProgressItem> = {
      add_sub_level_2: {
        itemId: 'add_sub_level_2',
        module: 'add_sub',
        totalAttempts: 10,
        correctCount: 6, // 60%
        streak: 0,
        bestStreak: 3,
        responseTimesMs: [3500],
        medianResponseTimeMs: 3500,
        recentAccuracy: 60,
        lastPracticed: Date.now(),
        masteryStatus: 'learning',
        masteryScore: 50,
      },
    };

    const analysis = analyzeProgress(progressMap);
    expect(analysis.weakSkills.length).toBe(1);
    expect(analysis.weakSkills[0].itemId).toBe('add_sub_level_2');

    const rec = getRecommendedNextDrill(progressMap, 'add_sub', 2, 7);
    expect(rec.title).toContain('Level 2 Remediation');
  });

  it('generates targeted questions when requested in targeted_refresh mode', () => {
    const progressMap: Record<string, UserProgressItem> = {
      table_14: {
        itemId: 'table_14',
        module: 'multiplication',
        totalAttempts: 15,
        correctCount: 15,
        streak: 15,
        bestStreak: 15,
        responseTimesMs: [1800],
        medianResponseTimeMs: 1800,
        recentAccuracy: 100,
        lastPracticed: Date.now() - (SEVEN_DAYS_MS + 10000),
        masteryStatus: 'needs_refresh',
        masteryScore: 80,
      },
    };

    const q = getAdaptiveQuestion({
      module: 'multiplication',
      activeAddSubLevel: 2,
      activeTable: 3,
      activeSquareTrack: 'near_50',
      progressMap,
      mode: 'targeted_refresh',
    });

    expect(q.operandA).toBe(14);
    expect(q.module).toBe('multiplication');
  });
});
