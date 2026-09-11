import { describe, it, expect } from 'vitest';
import {
  createDefaultLearnerProfile,
  createDefaultSkillEstimate,
  updateSkillEstimate,
  detectFatigue,
  calculateDecayRisk,
  evaluateMasteryTier,
  ALL_SKILL_DIMENSIONS,
} from '../learnerModel';

describe('Learner Model & Cognitive Profile', () => {
  it('initializes all 16 curriculum skill dimensions', () => {
    const profile = createDefaultLearnerProfile();
    expect(ALL_SKILL_DIMENSIONS.length).toBe(16);
    for (const dim of ALL_SKILL_DIMENSIONS) {
      expect(profile.skills[dim]).toBeDefined();
      expect(profile.skills[dim].dimension).toBe(dim);
      expect(profile.skills[dim].theta).toBe(0.0);
      expect(profile.skills[dim].confidence).toBe(0.0);
      expect(profile.skills[dim].decayRisk).toBe('critical');
    }
  });

  describe('updateSkillEstimate', () => {
    it('increases theta and confidence on accurate answers', () => {
      const initial = createDefaultSkillEstimate('mult_core_tables');
      const updated = updateSkillEstimate(initial, true, 2000, 3000);

      expect(updated.theta).toBeGreaterThan(initial.theta);
      expect(updated.confidence).toBeGreaterThan(0.0);
      expect(updated.totalAttempts).toBe(1);
      expect(updated.correctCount).toBe(1);
      expect(updated.accuracy).toBe(100);
    });

    it('awards bonus for swift responses under target latency', () => {
      const initial = createDefaultSkillEstimate('mult_core_tables');
      const standard = updateSkillEstimate(initial, true, 3000, 3000);
      const swift = updateSkillEstimate(initial, true, 1000, 3000);

      expect(swift.theta).toBeGreaterThan(standard.theta);
    });

    it('decreases theta on incorrect answers', () => {
      const initial = createDefaultSkillEstimate('add_sub_bridging_decade');
      const updated = updateSkillEstimate(initial, false, 2500, 3000);

      expect(updated.theta).toBeLessThan(0.0);
      expect(updated.accuracy).toBe(0);
      expect(updated.correctCount).toBe(0);
    });

    it('applies penalty for rapid careless guessing (< 500ms with error)', () => {
      const initial = createDefaultSkillEstimate('squares_near_50');
      const thoughtfulError = updateSkillEstimate(initial, false, 2000, 3500);
      const rapidGuessError = updateSkillEstimate(initial, false, 320, 3500);

      expect(rapidGuessError.theta).toBeLessThan(thoughtfulError.theta);
    });

    it('bounds theta within [-3.0, +3.0]', () => {
      let skill = createDefaultSkillEstimate('mult_foundations');
      for (let i = 0; i < 30; i++) {
        skill = updateSkillEstimate(skill, true, 800, 2000);
      }
      expect(skill.theta).toBeLessThanOrEqual(3.0);

      for (let i = 0; i < 60; i++) {
        skill = updateSkillEstimate(skill, false, 3000, 2000);
      }
      expect(skill.theta).toBeGreaterThanOrEqual(-3.0);
    });
  });

  describe('evaluateMasteryTier', () => {
    it('correctly maps ability and attempts to mastery tiers', () => {
      expect(evaluateMasteryTier(0.0, 50, 2)).toBe('novice');
      expect(evaluateMasteryTier(0.0, 65, 5)).toBe('developing');
      expect(evaluateMasteryTier(0.8, 80, 8)).toBe('proficient');
      expect(evaluateMasteryTier(1.6, 90, 12)).toBe('master');
      expect(evaluateMasteryTier(2.4, 95, 20)).toBe('grandmaster');
    });
  });

  describe('detectFatigue', () => {
    it('reports fresh state when error rate is zero and latencies are steady', () => {
      const signal = detectFatigue([2000, 2100, 1950, 2050], 2000, 0);
      expect(signal.level).toBe('optimal');
      expect(signal.recommendation).toBe('continue');
    });

    it('flags mild fatigue on multiple consecutive errors', () => {
      const signal = detectFatigue([2000, 2100, 2200], 2000, 2);
      expect(signal.level).toBe('mild_fatigue');
      expect(signal.recommendation).toBe('switch_to_easier');
    });

    it('detects high fatigue and recommends break when latency doubles', () => {
      const signal = detectFatigue([4200, 4500, 4800, 5000], 2000, 1);
      expect(signal.level).toBe('high_fatigue');
      expect(signal.recommendation).toBe('take_break');
    });
  });

  describe('calculateDecayRisk', () => {
    const oneDay = 1000 * 60 * 60 * 24;
    const now = 1700000000000;

    it('returns low risk for practice within 3 days', () => {
      expect(calculateDecayRisk(now - oneDay * 2, now)).toBe('low');
    });

    it('returns moderate risk between 3 and 7 days', () => {
      expect(calculateDecayRisk(now - oneDay * 5, now)).toBe('moderate');
    });

    it('returns high risk between 7 and 14 days', () => {
      expect(calculateDecayRisk(now - oneDay * 10, now)).toBe('high');
    });

    it('returns critical risk for > 14 days or never practiced', () => {
      expect(calculateDecayRisk(now - oneDay * 20, now)).toBe('critical');
      expect(calculateDecayRisk(0, now)).toBe('critical');
    });
  });
});
