import { describe, it, expect } from 'vitest';
import { generateLevel0FoundationPlan, generateDailyTrainingPlan } from '../planEngine';
import { createDefaultLearnerProfile } from '../learnerModel';
import { FactMemoryState, formatFactKey, getFactCorrectAnswer } from '../factModel';

describe('Level 0 Foundation Plan (Offline)', () => {
  it('generates a 5-block foundational curriculum with offline source and isLevel0 flag', () => {
    const profile = createDefaultLearnerProfile();
    const plan = generateLevel0FoundationPlan(profile, 15);

    expect(plan.source).toBe('offline');
    expect(plan.isLevel0).toBe(true);
    expect(plan.blocks).toHaveLength(5);
    expect(plan.totalEstimatedMinutes).toBe(15);

    // Verify all 5 foundational curriculum areas in balanced order
    const block1 = plan.blocks[0];
    expect(block1.blockType).toBe('warmup');
    expect(block1.title).toContain('Addition & Subtraction');

    const block2 = plan.blocks[1];
    expect(block2.blockType).toBe('priority_weakness');
    expect(block2.title).toContain('Progressive Tables');

    const block3 = plan.blocks[2];
    expect(block3.blockType).toBe('mixed_retrieval');
    expect(block3.title).toContain('Multiplication Anchors & Shortcuts');

    const block4 = plan.blocks[3];
    expect(block4.blockType).toBe('strategy_refinement');
    expect(block4.title).toContain('Squares');

    const block5 = plan.blocks[4];
    expect(block5.blockType).toBe('anzan_working_memory');
    expect(block5.title).toContain('Working Memory Agility');
  });

  it('incorporates saved skips into rationale and targets the skipped table in repair block', () => {
    const profile = createDefaultLearnerProfile();
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
        skipCount: 3,
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

    const plan = generateLevel0FoundationPlan(profile, 20, mockFactMemoryMap);

    expect(plan.rationale).toContain('17×8');
    expect(plan.rationale).toContain('skipped 3 times');
    // Block 2 (priority_weakness) targets the skipped table (17)
    expect(plan.blocks[1].drillId).toBe('table_17');
    expect(plan.blocks[1].title).toContain('Table ×17');
  });

  it('incorporates near-50 squares weakness into personal rationale', () => {
    const profile = createDefaultLearnerProfile();
    const now = Date.now();

    const mockFactMemoryMap: Record<string, FactMemoryState> = {
      'square:48': {
        factKey: 'square:48',
        factType: 'square',
        familyId: 'square:48',
        operandA: 48,
        masteryState: 'weak',
        learningPhase: 'guided',
        totalAttempts: 3,
        correctAttempts: 1,
        consecutiveErrors: 1,
        consecutiveCorrect: 0,
        skipCount: 0,
        firstSeen: now - 100000,
        lastSeen: now,
        lastCorrect: now - 50000,
        lastIncorrect: now,
        lastSkipped: null,
        intervalDays: 0,
        easeFactor: 2.5,
        stabilityScore: 30,
        nextReviewTimestamp: now,
        forgettingRisk: 0.8,
        medianLatencyMs: 4500,
        recentLatencyMs: 4500,
        errorHistory: [],
        usedHintOrStrategyCount: 0,
        recentAccuracy: 33,
        isDirectMemory: false,
        correctAnswer: 2304,
      } as unknown as FactMemoryState,
    };

    const plan = generateLevel0FoundationPlan(profile, 15, mockFactMemoryMap);
    expect(plan.rationale).toContain('48² and 52² using the near-50 method');
  });

  it('automatically falls back to Level 0 plan when learner is uncalibrated with 0 attempts', () => {
    const profile = createDefaultLearnerProfile();
    expect(profile.baselineReport).toBeNull();

    const plan = generateDailyTrainingPlan(profile, 15, {});
    expect(plan.isLevel0).toBe(true);
    expect(plan.source).toBe('offline');
    expect(plan.blocks.length).toBe(5);
  });
});
