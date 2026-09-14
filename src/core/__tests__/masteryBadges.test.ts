import { describe, it, expect } from 'vitest';
import {
  MASTERY_BADGES,
  getMasteryBadgeById,
  getEvaluatedMasteryBadges,
} from '../badges/masteryBadges';

describe('Mastery Badges Catalog & Unlock Engine', () => {
  it('contains exactly 16 curated mastery and combined badges', () => {
    expect(MASTERY_BADGES.length).toBe(16);
  });

  it('ensures every badge has required visual properties and criterion', () => {
    MASTERY_BADGES.forEach((b) => {
      expect(b.id).toBeDefined();
      expect(b.title.length).toBeGreaterThan(0);
      expect(b.category).toMatch(/^(squares|cubes|roots|tables|combined)$/);
      expect(b.primaryColor).toMatch(/^#[0-9a-fA-F]{6}$/);
      expect(b.criterionText.length).toBeGreaterThan(5);
      expect(typeof b.checkUnlocked).toBe('function');
    });
  });

  it('fetches badges by ID accurately', () => {
    const sq20 = getMasteryBadgeById('sq_20');
    expect(sq20).toBeDefined();
    expect(sq20?.title).toContain('Square Spark');

    const apex = getMasteryBadgeById('comb_apex');
    expect(apex).toBeDefined();
    expect(apex?.title).toBe('Omniscient Arithmetic Sovereign');
    expect(apex?.tier).toBe('mythic');

    expect(getMasteryBadgeById('non_existent')).toBeUndefined();
  });

  it('evaluates unlocked state dynamically from user state', () => {
    // Empty state - baseline
    const emptyResult = getEvaluatedMasteryBadges({
      overallStats: { totalCalculations: 0, totalCorrect: 0, totalTimeSpentSeconds: 0 },
      progressMap: {},
      factMemoryMap: {},
    });

    const apexBadgeEmpty = emptyResult.find((b) => b.id === 'comb_apex');
    expect(apexBadgeEmpty?.isUnlocked).toBe(false);

    // Advanced state with 450 calculations and mastered facts
    const mockFactMemory: Record<string, any> = {};
    for (let i = 1; i <= 20; i++) {
      mockFactMemory[`square:${i}`] = { masteryState: 'mastered' };
    }

    const advancedResult = getEvaluatedMasteryBadges({
      overallStats: {
        totalCalculations: 500,
        totalCorrect: 480,
        totalTimeSpentSeconds: 800, // CPM = 36
      },
      progressMap: {
        table_sprint_12: { correctCount: 30 },
      },
      factMemoryMap: mockFactMemory,
    });

    const sq20Evaluated = advancedResult.find((b) => b.id === 'sq_20');
    expect(sq20Evaluated?.isUnlocked).toBe(true);

    const apexEvaluated = advancedResult.find((b) => b.id === 'comb_apex');
    expect(apexEvaluated?.isUnlocked).toBe(true);
  });
});
