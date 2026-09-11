import { describe, it, expect } from 'vitest';
import {
  createDefaultLearnerProfile,
  updateSkillEstimate,
  detectFatigue,
  evaluateMasteryTier,
  LearnerProfile,
} from '../learnerModel';
import { generateDailyTrainingPlan } from '../planEngine';

describe('Learner Persona Fixtures & Cognitive Behavioral Simulations', () => {
  it('Persona 1: Complete Beginner receives foundational warm-up and gentle daily plan', () => {
    const beginner = createDefaultLearnerProfile();
    const plan = generateDailyTrainingPlan(beginner, 10);

    expect(plan.totalEstimatedMinutes).toBe(10);
    expect(plan.blocks.length).toBe(5);
    // Beginner plan starts with foundations
    expect(plan.blocks[0].dimension).toBe('mult_foundations');
  });

  it('Persona 2: Fast but Careless Guessing Learner is penalized for rapid errors', () => {
    let skill = createDefaultLearnerProfile().skills['squares_near_50'];

    // 5 rapid careless guesses (< 450ms, all wrong)
    for (let i = 0; i < 5; i++) {
      skill = updateSkillEstimate(skill, false, 350, 3000);
    }

    expect(skill.theta).toBeLessThan(-1.0);
    expect(skill.accuracy).toBe(0);
    expect(skill.masteryTier).toBe('novice');
  });

  it('Persona 3: Accurate but Slow Learner achieves developing/proficient tier steadily', () => {
    let skill = createDefaultLearnerProfile().skills['mult_core_tables'];

    // 10 careful, accurate answers with 6000ms latency (longer than target)
    for (let i = 0; i < 10; i++) {
      skill = updateSkillEstimate(skill, true, 6000, 2500);
    }

    expect(skill.accuracy).toBe(100);
    expect(skill.theta).toBeGreaterThan(0.5);
    expect(['master', 'proficient', 'developing']).toContain(skill.masteryTier);
  });

  it('Persona 4: Asymmetric Ability (Strong Multiplication, Weak Subtraction) targets weakness', () => {
    const profile = createDefaultLearnerProfile();

    // Train multiplication to master level
    for (let i = 0; i < 12; i++) {
      profile.skills['mult_core_tables'] = updateSkillEstimate(
        profile.skills['mult_core_tables'],
        true,
        1500,
        2500
      );
    }

    // Attempt subtraction with errors
    for (let i = 0; i < 6; i++) {
      profile.skills['add_sub_bridging_decade'] = updateSkillEstimate(
        profile.skills['add_sub_bridging_decade'],
        false,
        3500,
        2500
      );
    }

    const plan = generateDailyTrainingPlan(profile, 15);
    const primaryWeaknessBlock = plan.blocks.find((b) => b.blockType === 'priority_weakness');

    expect(primaryWeaknessBlock?.dimension).toBe('add_sub_bridging_decade');
  });

  it('Persona 5: Advanced Anzan Learner scales to high working memory tier', () => {
    let anzanSkill = createDefaultLearnerProfile().skills['anzan_stream'];

    for (let i = 0; i < 16; i++) {
      anzanSkill = updateSkillEstimate(anzanSkill, true, 3200, 5000);
    }

    expect(anzanSkill.theta).toBeGreaterThan(1.5);
    expect(anzanSkill.accuracy).toBe(100);
    expect(['master', 'grandmaster']).toContain(anzanSkill.masteryTier);
  });

  it('Persona 6: Fatigued Learner triggers cognitive recovery break signal', () => {
    // Normal baseline: 1800ms. End-of-session fatigue: latencies climb to 4200ms with 4 misses
    const signal = detectFatigue([3800, 4100, 4300, 4500], 1800, 4);

    expect(signal.level).toBe('high_fatigue');
    expect(signal.recommendation).toBe('take_break');
    expect(signal.message).toContain('Cognitive fatigue detected');
  });
});
