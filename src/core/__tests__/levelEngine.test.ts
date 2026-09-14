import { describe, it, expect } from 'vitest';
import {
  MAX_LEVEL,
  TIERS,
  getCumulativeXPForLevel,
  getLevelFromXP,
  getTierForLevel,
  getBadgeForLevel,
  getLevelProgress,
  calculatePointsEarned,
} from '../levelEngine';

describe('Level Engine - 1000 Level Progression System', () => {
  it('has a maximum level of 1000', () => {
    expect(MAX_LEVEL).toBe(1000);
  });

  it('level 1 requires 0 cumulative XP', () => {
    expect(getCumulativeXPForLevel(1)).toBe(0);
    expect(getLevelFromXP(0)).toBe(1);
    expect(getLevelFromXP(-50)).toBe(1);
  });

  it('cumulative XP increases monotonically for all 1000 levels', () => {
    let previousXP = -1;
    for (let lvl = 1; lvl <= MAX_LEVEL; lvl++) {
      const xp = getCumulativeXPForLevel(lvl);
      expect(xp).toBeGreaterThan(previousXP);
      previousXP = xp;
    }
  });

  it('calculates expected XP thresholds for key milestones', () => {
    const lvl10XP = getCumulativeXPForLevel(10);
    const lvl100XP = getCumulativeXPForLevel(100);
    const lvl500XP = getCumulativeXPForLevel(500);
    const lvl1000XP = getCumulativeXPForLevel(1000);

    expect(lvl10XP).toBeGreaterThan(0);
    expect(lvl100XP).toBeGreaterThan(lvl10XP);
    expect(lvl500XP).toBeGreaterThan(lvl100XP);
    expect(lvl1000XP).toBeGreaterThan(20_000_000); // Scales smoothly to ~21M XP
  });

  it('resolves exact level from XP using binary search', () => {
    for (const testLevel of [1, 5, 25, 100, 250, 500, 750, 999, 1000]) {
      const thresholdXP = getCumulativeXPForLevel(testLevel);
      expect(getLevelFromXP(thresholdXP)).toBe(testLevel);

      // Just 1 XP below should be testLevel - 1 (for testLevel > 1)
      if (testLevel > 1) {
        expect(getLevelFromXP(thresholdXP - 1)).toBe(testLevel - 1);
      }
    }
  });

  it('caps at level 1000 even if XP exceeds level 1000 threshold', () => {
    const maxXP = getCumulativeXPForLevel(1000);
    expect(getLevelFromXP(maxXP + 50_000_000)).toBe(1000);
  });

  it('covers all 10 PUBG-style competitive tiers without gaps', () => {
    expect(TIERS).toHaveLength(10);

    const tierIds = TIERS.map((t) => t.id);
    expect(tierIds).toEqual([
      'bronze',
      'silver',
      'gold',
      'platinum',
      'diamond',
      'crown',
      'ace',
      'master',
      'grandmaster',
      'conqueror',
    ]);

    // Verify continuous level ranges [1-100, 101-200, ..., 901-1000]
    expect(TIERS[0].minLevel).toBe(1);
    expect(TIERS[0].maxLevel).toBe(100);

    for (let i = 1; i < TIERS.length; i++) {
      expect(TIERS[i].minLevel).toBe(TIERS[i - 1].maxLevel + 1);
    }
    expect(TIERS[9].maxLevel).toBe(1000);
  });

  it('maps any level 1-1000 to the correct tier', () => {
    expect(getTierForLevel(1).id).toBe('bronze');
    expect(getTierForLevel(100).id).toBe('bronze');
    expect(getTierForLevel(101).id).toBe('silver');
    expect(getTierForLevel(250).id).toBe('gold');
    expect(getTierForLevel(350).id).toBe('platinum');
    expect(getTierForLevel(450).id).toBe('diamond');
    expect(getTierForLevel(550).id).toBe('crown');
    expect(getTierForLevel(650).id).toBe('ace');
    expect(getTierForLevel(750).id).toBe('master');
    expect(getTierForLevel(850).id).toBe('grandmaster');
    expect(getTierForLevel(950).id).toBe('conqueror');
    expect(getTierForLevel(1000).id).toBe('conqueror');
  });

  it('generates distinct badge metadata, sub-ranks, and star counts', () => {
    // Level 1: Bronze V with 1 star
    const badge1 = getBadgeForLevel(1);
    expect(badge1.subRank).toBe('V');
    expect(badge1.stars).toBe(1);
    expect(badge1.tier.id).toBe('bronze');

    // Level 95: Bronze I with 5 stars
    const badge95 = getBadgeForLevel(95);
    expect(badge95.subRank).toBe('I');
    expect(badge95.stars).toBe(5);

    // Level 1000: Supreme Conqueror
    const badge1000 = getBadgeForLevel(1000);
    expect(badge1000.tier.id).toBe('conqueror');
    expect(badge1000.stars).toBe(5);
    expect(badge1000.title).toContain('God of Mentalab');
  });

  it('computes comprehensive level progression percentage', () => {
    const progressLvl1 = getLevelProgress(0);
    expect(progressLvl1.level).toBe(1);
    expect(progressLvl1.progressPercent).toBe(0);
    expect(progressLvl1.isMaxLevel).toBe(false);

    // Mid level progression
    const threshold10 = getCumulativeXPForLevel(10);
    const threshold11 = getCumulativeXPForLevel(11);
    const halfwayXP = threshold10 + Math.floor((threshold11 - threshold10) / 2);
    const progressMid = getLevelProgress(halfwayXP);
    expect(progressMid.level).toBe(10);
    expect(progressMid.progressPercent).toBeGreaterThanOrEqual(45);
    expect(progressMid.progressPercent).toBeLessThanOrEqual(55);
  });

  describe('calculatePointsEarned', () => {
    it('returns 0 points for incorrect answers', () => {
      const res = calculatePointsEarned({
        isCorrect: false,
        responseTimeMs: 800,
        module: 'multiplication',
        streak: 10,
      });
      expect(res.totalXP).toBe(0);
    });

    it('awards base points plus lightning speed bonuses', () => {
      // Very fast response (<1200ms)
      const fast = calculatePointsEarned({
        isCorrect: true,
        responseTimeMs: 850,
        module: 'multiplication',
        streak: 1,
      });

      // Normal response (3000ms)
      const normal = calculatePointsEarned({
        isCorrect: true,
        responseTimeMs: 3000,
        module: 'multiplication',
        streak: 1,
      });

      expect(fast.speedBonus).toBe(15);
      expect(fast.totalXP).toBeGreaterThan(normal.totalXP);
    });

    it('applies streak multipliers for hot streaks', () => {
      const streak1 = calculatePointsEarned({
        isCorrect: true,
        responseTimeMs: 2500,
        module: 'multiplication',
        streak: 1,
      });

      const streak10 = calculatePointsEarned({
        isCorrect: true,
        responseTimeMs: 2500,
        module: 'multiplication',
        streak: 10,
      });

      const streak50 = calculatePointsEarned({
        isCorrect: true,
        responseTimeMs: 2500,
        module: 'multiplication',
        streak: 50,
      });

      expect(streak10.streakMultiplier).toBe(1.5);
      expect(streak50.streakMultiplier).toBe(3.0);
      expect(streak50.totalXP).toBeGreaterThan(streak10.totalXP);
      expect(streak10.totalXP).toBeGreaterThan(streak1.totalXP);
    });
  });
});
