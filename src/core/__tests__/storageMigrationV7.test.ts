import { describe, it, expect } from 'vitest';
import { useQuizStore } from '../store/useQuizStore';
import { FactMemory } from '../factModel';

describe('Storage Migration to v7 (Mentalis Adaptive Memory Engine)', () => {
  it('migrates legacy fact memory items to the full FactMemory specification', () => {
    const persistOptions = (useQuizStore as any).persist;
    const migrateFn = persistOptions.getOptions().migrate;

    const legacyState = {
      progressMap: {
        table_7: {
          itemId: 'table_7',
          module: 'multiplication',
          totalAttempts: 15,
          correctCount: 15,
          streak: 15,
          bestStreak: 15,
          responseTimesMs: [1200],
          medianResponseTimeMs: 1200,
          recentAccuracy: 100,
          lastPracticed: Date.now(),
          masteryStatus: 'mastered',
          masteryScore: 100,
        },
      },
      factMemoryMap: {
        'mul:7:8': {
          factKey: 'mul:7:8',
          factType: 'multiplication',
          totalAttempts: 5,
          correctAttempts: 3,
          skipCount: 1,
          consecutiveErrors: 2,
          consecutiveCorrect: 0,
          recentAccuracy: 60,
          recentLatencyMs: 2500,
          stabilityScore: 35,
          intervalDays: 2.0,
        },
      },
      learningMode: 'recall',
    };

    const migrated = migrateFn(legacyState, 6);

    expect(migrated).toBeDefined();
    expect(migrated.factMemoryMap).toBeDefined();

    const migratedFact: FactMemory = migrated.factMemoryMap['mul:7:8'];
    expect(migratedFact).toBeDefined();
    expect(migratedFact.key).toBe('mul:7:8');
    expect(migratedFact.category).toBe('multiplication');
    expect(migratedFact.attempts).toBe(5);
    expect(migratedFact.skippedAttempts).toBe(1);
    expect(migratedFact.consecutiveIncorrect).toBe(2);
    expect(migratedFact.learningPhase).toBeDefined();
    expect(migratedFact.errorPatterns).toEqual([]);
    expect(migrated.aiCoachState.planSource).toBe('offline');
    expect(migrated.aiCoachState.providerStatus).toBe('ready');
  });

  it('safely initializes default state when migrating from empty or corrupted state', () => {
    const persistOptions = (useQuizStore as any).persist;
    const migrateFn = persistOptions.getOptions().migrate;

    const migrated = migrateFn({}, 1);

    expect(migrated).toBeDefined();
    expect(migrated.factMemoryMap).toEqual({});
    expect(migrated.learningMode).toBe('recall');
    expect(migrated.learnerProfile).toBeDefined();
    expect(migrated.aiCoachState.planSource).toBe('offline');
  });
});
