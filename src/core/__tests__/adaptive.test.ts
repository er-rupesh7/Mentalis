import { describe, it, expect } from 'vitest';
import { analyzeProgress, getRecommendedNextDrill, getAdaptiveQuestion } from '../adaptive';
import { UserProgressItem } from '../types';
import { SEVEN_DAYS_MS } from '../mastery';
import { FactMemoryState, formatFactKey } from '../factModel';

describe('adaptive: Spaced Repetition Analysis & Question Scheduling', () => {
  it('safely handles empty or undefined progress maps in analyzeProgress', () => {
    const analysisEmpty = analyzeProgress({});
    expect(analysisEmpty.decayedSkills).toEqual([]);
    expect(analysisEmpty.weakSkills).toEqual([]);
    expect(analysisEmpty.slowSkills).toEqual([]);
    expect(analysisEmpty.masteredCount).toBe(0);

    const analysisUndefined = analyzeProgress(undefined as any);
    expect(analysisUndefined.decayedSkills).toEqual([]);
    expect(analysisUndefined.masteredCount).toBe(0);
  });

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

  it('recommends squares_cubes and working_memory in getRecommendedNextDrill', () => {
    const progressMap: Record<string, UserProgressItem> = {
      sq_cube_near_50: {
        itemId: 'sq_cube_near_50',
        module: 'squares_cubes',
        totalAttempts: 10,
        correctCount: 5,
        streak: 0,
        bestStreak: 2,
        responseTimesMs: [4500],
        medianResponseTimeMs: 4500,
        recentAccuracy: 50,
        lastPracticed: Date.now(),
        masteryStatus: 'learning',
        masteryScore: 40,
      },
    };

    const recWeak = getRecommendedNextDrill(progressMap, 'squares_cubes', 1, 1);
    expect(recWeak.module).toBe('squares_cubes');
    expect(recWeak.title).toContain('Near 50 Reinforcement');

    // Steady progression for squares_cubes without weakness
    const recProgression = getRecommendedNextDrill({}, 'squares_cubes', 1, 1);
    expect(recProgression.module).toBe('squares_cubes');
    expect(recProgression.title).toContain('Squares & Cubes Precision');

    // Steady progression for working_memory
    const recAnzan = getRecommendedNextDrill({}, 'working_memory', 1, 1);
    expect(recAnzan.module).toBe('working_memory');
    expect(recAnzan.title).toContain('Anzan Flash');
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

  it('selects fact-level questions preserving factKey and adjusting targetTime in speed mode', () => {
    const now = Date.now();
    const mockFactMemoryMap: Record<string, FactMemoryState> = {
      'mul:17:8': {
        factKey: 'mul:17:8',
        factType: 'multiplication',
        familyId: 'multiplication:17',
        operandA: 17,
        operandB: 8,
        masteryState: 'weak',
        learningPhase: 'guided',
        totalAttempts: 2,
        correctAttempts: 0,
        consecutiveErrors: 2,
        consecutiveCorrect: 0,
        skipCount: 1,
        firstSeen: now - 100000,
        lastSeen: now,
        lastCorrect: null,
        lastIncorrect: now,
        lastSkipped: now,
        intervalDays: 0,
        easeFactor: 2.5,
        stabilityScore: 20,
        nextReviewTimestamp: now,
        forgettingRisk: 0.9,
        medianLatencyMs: 4000,
        recentLatencyMs: 4000,
        errorHistory: [],
        usedHintOrStrategyCount: 0,
        recentAccuracy: 0,
        isDirectMemory: false,
        correctAnswer: 136,
      } as unknown as FactMemoryState,
    };

    const q = getAdaptiveQuestion({
      module: 'multiplication',
      activeAddSubLevel: 2,
      activeTable: 17,
      activeSquareTrack: 'near_50',
      factMemoryMap: mockFactMemoryMap,
      mode: 'speed',
    });

    expect(q.factKey).toBeDefined();
    expect(q.subTrack).toBeDefined();
    // In speed mode, target time is reduced
    expect(q.targetTimeSeconds).toBeLessThanOrEqual(2.5);
  });
});
