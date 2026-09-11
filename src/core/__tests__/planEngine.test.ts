import { describe, it, expect } from 'vitest';
import {
  generateDailyTrainingPlan,
  adjustPlanForFatigue,
  getQuestionForTrainingBlock,
} from '../planEngine';
import { createDefaultLearnerProfile, FatigueSignal } from '../learnerModel';

describe('Plan Engine', () => {
  it('generates a 5-block structured training plan scaled to requested minutes', () => {
    const profile = createDefaultLearnerProfile();
    const plan = generateDailyTrainingPlan(profile, 15);

    expect(plan.blocks.length).toBe(5);
    expect(plan.totalEstimatedMinutes).toBe(15);
    expect(plan.blocks[0].blockType).toBe('warmup');
    expect(plan.blocks[1].blockType).toBe('priority_weakness');
    expect(plan.blocks[2].blockType).toBe('mixed_retrieval');
    expect(plan.blocks[3].blockType).toBe('strategy_refinement');
    expect(plan.blocks[4].blockType).toBe('anzan_working_memory');

    const totalAllocated = plan.blocks.reduce((acc, b) => acc + b.allocatedMinutes, 0);
    expect(totalAllocated).toBe(15);
  });

  it('prioritizes decayed skills in the mixed retrieval block', () => {
    const profile = createDefaultLearnerProfile();
    const now = Date.now();
    const tenDaysAgo = now - 10 * 24 * 60 * 60 * 1000;

    // Simulate Table 7 as a decayed skill
    profile.skills['mult_core_tables'] = {
      ...profile.skills['mult_core_tables'],
      totalAttempts: 20,
      correctCount: 18,
      accuracy: 90,
      lastPracticed: tenDaysAgo,
      decayRisk: 'high',
    };

    const plan = generateDailyTrainingPlan(profile, 15);
    const mixedBlock = plan.blocks.find((b) => b.blockType === 'mixed_retrieval');
    expect(mixedBlock).toBeDefined();
    expect(mixedBlock?.dimension).toBe('mult_core_tables');
  });

  it('generates valid Question objects for each training block', () => {
    const profile = createDefaultLearnerProfile();
    const plan = generateDailyTrainingPlan(profile, 20);

    for (const block of plan.blocks) {
      const q = getQuestionForTrainingBlock(block);
      expect(q).toBeDefined();
      expect(q.prompt).toBeDefined();
      expect(typeof q.correctAnswer).toBe('number');
      expect(q.steps.length).toBeGreaterThan(0);
    }
  });

  it('adjusts remaining block target counts upon high cognitive fatigue', () => {
    const profile = createDefaultLearnerProfile();
    const plan = generateDailyTrainingPlan(profile, 20);
    const originalTargets = plan.blocks.map((b) => b.targetCount);

    const fatigueSignal: FatigueSignal = {
      level: 'high_fatigue',
      consecutiveErrors: 4,
      latencyDilationRatio: 2.2,
      recommendation: 'take_break',
      message: 'Fatigue detected',
    };

    const adjustedPlan = adjustPlanForFatigue(plan, fatigueSignal);

    for (let i = 0; i < adjustedPlan.blocks.length; i++) {
      expect(adjustedPlan.blocks[i].targetCount).toBeLessThan(originalTargets[i]);
    }
  });
});
