import { describe, it, expect } from 'vitest';
import {
  STRATEGY_CATALOG,
  getBestStrategyForFact,
} from '../strategyCatalog';

describe('Strategy Catalog & Mathematically Verified Mental Steps', () => {
  it('contains valid strategy definitions with non-empty mental scripts and steps', () => {
    const strategies = Object.values(STRATEGY_CATALOG);
    expect(strategies.length).toBeGreaterThanOrEqual(15);

    for (const strat of strategies) {
      expect(strat.id).toBeDefined();
      expect(strat.name).toBeDefined();
      expect(strat.mentalScript.length).toBeGreaterThan(10);
      expect(strat.prerequisites.length).toBeGreaterThanOrEqual(1);
    }
  });

  describe('Multiplication Strategies Verification', () => {
    it('Split-and-Add Teen Tables: 14 × 6 = (10 × 6) + (4 × 6) = 60 + 24 = 84', () => {
      const strat = STRATEGY_CATALOG.multiplication_split_add;
      expect(strat.isApplicable(14, 6)).toBe(true);

      const ex = strat.generateWorkedExample(14, 6);
      expect(ex.verifiedResult).toBe(84);
      expect(ex.steps.length).toBeGreaterThanOrEqual(2);
      expect(ex.mentalTip).toBeDefined();
    });

    it('Near-Decade Compensation: 49 × 6 = (50 × 6) - (1 × 6) = 300 - 6 = 294', () => {
      const strat = STRATEGY_CATALOG.rounding_compensation_over;
      expect(strat.isApplicable(49, 6)).toBe(true);

      const ex = strat.generateWorkedExample(49, 6);
      expect(ex.verifiedResult).toBe(294);
      expect(ex.steps.length).toBeGreaterThanOrEqual(2);
    });

    it('Half-and-Double: 16 × 15 = 8 × 30 = 240', () => {
      const strat = STRATEGY_CATALOG.half_and_double;
      expect(strat.isApplicable(16, 15)).toBe(true);

      const ex = strat.generateWorkedExample(16, 15);
      expect(ex.verifiedResult).toBe(240);
    });

    it('Quarter-and-Hundred (x25): 44 × 25 = (44 / 4) × 100 = 1100', () => {
      const strat = STRATEGY_CATALOG.twenty_fives_quarter_hundred;
      expect(strat.isApplicable(44, 25)).toBe(true);

      const ex = strat.generateWorkedExample(44, 25);
      expect(ex.verifiedResult).toBe(1100);
    });

    it('Nines Compensation: 9 × 7 = (10 × 7) - 7 = 63', () => {
      const strat = STRATEGY_CATALOG.nines_compensation;
      expect(strat.isApplicable(9, 7)).toBe(true);

      const ex = strat.generateWorkedExample(9, 7);
      expect(ex.verifiedResult).toBe(63);
    });

    it('Zero and Identity: 17 × 0 = 0 and 42 × 1 = 42', () => {
      const strat = STRATEGY_CATALOG.zeros_ones_foundations;
      expect(strat.isApplicable(17, 0)).toBe(true);
      expect(strat.generateWorkedExample(17, 0).verifiedResult).toBe(0);
      expect(strat.isApplicable(42, 1)).toBe(true);
      expect(strat.generateWorkedExample(42, 1).verifiedResult).toBe(42);
    });

    it('Doubling (x2): 18 × 2 = 36', () => {
      const strat = STRATEGY_CATALOG.twos_doubling;
      expect(strat.isApplicable(18, 2)).toBe(true);
      expect(strat.generateWorkedExample(18, 2).verifiedResult).toBe(36);
    });

    it('Fives Half-Decade: 14 × 5 = 70', () => {
      const strat = STRATEGY_CATALOG.fives_half_decade;
      expect(strat.isApplicable(14, 5)).toBe(true);
      expect(strat.generateWorkedExample(14, 5).verifiedResult).toBe(70);
    });

    it('Double Decade (x20): 16 × 20 = 320', () => {
      const strat = STRATEGY_CATALOG.twenties_double_decade;
      expect(strat.isApplicable(16, 20)).toBe(true);
      expect(strat.generateWorkedExample(16, 20).verifiedResult).toBe(320);
    });

    it('Half of Hundred (x50): 14 × 50 = 700', () => {
      const strat = STRATEGY_CATALOG.fifties_half_hundred;
      expect(strat.isApplicable(14, 50)).toBe(true);
      expect(strat.generateWorkedExample(14, 50).verifiedResult).toBe(700);
    });

    it('Three-Quarters (x75): 12 × 75 = 900', () => {
      const strat = STRATEGY_CATALOG.seventy_fives_three_quarters;
      expect(strat.isApplicable(12, 75)).toBe(true);
      expect(strat.generateWorkedExample(12, 75).verifiedResult).toBe(900);
    });

    it('Centennial Zero Appending (x100): 37 × 100 = 3700', () => {
      const strat = STRATEGY_CATALOG.hundreds_double_zero;
      expect(strat.isApplicable(37, 100)).toBe(true);
      expect(strat.generateWorkedExample(37, 100).verifiedResult).toBe(3700);
    });

    it('Base 100 Deficiency (Nikhilam): 96 × 97 = 9312', () => {
      const strat = STRATEGY_CATALOG.near_hundred_multiplication;
      expect(strat.isApplicable(96, 97)).toBe(true);
      const ex = strat.generateWorkedExample(96, 97);
      expect(ex.verifiedResult).toBe(9312);
      expect(ex.steps.length).toBe(4);
    });
  });

  describe('Squares Strategies Verification', () => {
    it('Ending in 5: 65² = (6 × 7) hundred + 25 = 4225', () => {
      const strat = STRATEGY_CATALOG.square_ending_5;
      expect(strat.isApplicable(65)).toBe(true);

      const ex = strat.generateWorkedExample(65);
      expect(ex.verifiedResult).toBe(4225);
    });

    it('Near 50: 47² = 25 - 3 | 3² = 2209', () => {
      const strat = STRATEGY_CATALOG.square_near_50;
      expect(strat.isApplicable(47)).toBe(true);

      const ex = strat.generateWorkedExample(47);
      expect(ex.verifiedResult).toBe(2209);
    });

    it('Near 100: 96² = (96 - 4) | 4² = 9216', () => {
      const strat = STRATEGY_CATALOG.square_near_100;
      expect(strat.isApplicable(96)).toBe(true);

      const ex = strat.generateWorkedExample(96);
      expect(ex.verifiedResult).toBe(9216);
    });

    it('Duplex Decomposition: 34² = (30 + 4)² = 900 + 240 + 16 = 1156', () => {
      const strat = STRATEGY_CATALOG.square_duplex_decomposition;
      expect(strat.isApplicable(34)).toBe(true);

      const ex = strat.generateWorkedExample(34);
      expect(ex.verifiedResult).toBe(1156);
    });
  });

  describe('Cubes Strategies Verification', () => {
    it('Cube Anchors: 12³ = 1728', () => {
      const strat = STRATEGY_CATALOG.cube_anchor_recall;
      expect(strat.isApplicable(12)).toBe(true);

      const ex = strat.generateWorkedExample(12);
      expect(ex.verifiedResult).toBe(1728);
    });

    it('Near-Decade Cube Binomial: 21³ = 9261', () => {
      const strat = STRATEGY_CATALOG.cube_near_decade_binomial;
      expect(strat.isApplicable(21)).toBe(true);

      const ex = strat.generateWorkedExample(21);
      expect(ex.verifiedResult).toBe(9261);
    });
  });

  it('selects best strategy automatically for any valid FactKey', () => {
    const s1 = getBestStrategyForFact('mul:17:6');
    expect(s1.id).toBe('multiplication_split_add');

    const s2 = getBestStrategyForFact('square:75');
    expect(s2.id).toBe('square_ending_5');

    const s3 = getBestStrategyForFact('square:48');
    expect(s3.id).toBe('square_near_50');

    const s4 = getBestStrategyForFact('cube:10');
    expect(s4.id).toBe('cube_decade');
  });
});
