import { describe, it, expect } from 'vitest';
import {
  generateAddSubQuestion,
  generateMultiplicationQuestion,
  generateSquareCubeQuestion,
  generateAnzanSequence,
  ADD_SUB_LEVELS,
} from '../calcEngine';

describe('calcEngine: Curriculum & Arithmetic Verification', () => {
  it('defines 6 progressive Add/Sub levels with increasing target times and ratings', () => {
    expect(ADD_SUB_LEVELS.length).toBe(6);
    expect(ADD_SUB_LEVELS[0].levelNumber).toBe(1);
    expect(ADD_SUB_LEVELS[5].levelNumber).toBe(6);
    for (let i = 0; i < ADD_SUB_LEVELS.length - 1; i++) {
      expect(ADD_SUB_LEVELS[i].targetTimeSeconds).toBeLessThan(
        ADD_SUB_LEVELS[i + 1].targetTimeSeconds
      );
    }
  });

  describe('Level 1: 2-digit ± 1-digit Addition & Subtraction', () => {
    it('generates strictly NON-BRIDGING addition where units never cross decade', () => {
      for (let i = 0; i < 50; i++) {
        const q = generateAddSubQuestion(1, { forceBridging: false, forceOperator: '+' });
        expect(q.operator).toBe('+');
        expect(q.operandA).toBeGreaterThanOrEqual(10);
        expect(q.operandA).toBeLessThanOrEqual(98);
        expect(q.operandB).toBeGreaterThanOrEqual(1);
        expect(q.operandB).toBeLessThanOrEqual(9);

        const unitA = q.operandA % 10;
        // Non-bridging must strictly have unitA + b < 10
        expect(unitA + q.operandB).toBeLessThan(10);
        expect(q.correctAnswer).toBe(q.operandA + q.operandB);
      }
    });

    it('generates strictly BRIDGING addition where units always cross decade', () => {
      for (let i = 0; i < 50; i++) {
        const q = generateAddSubQuestion(1, { forceBridging: true, forceOperator: '+' });
        expect(q.operator).toBe('+');
        expect(q.operandA).toBeGreaterThanOrEqual(10);
        expect(q.operandA).toBeLessThanOrEqual(99);
        expect(q.operandB).toBeGreaterThanOrEqual(1);
        expect(q.operandB).toBeLessThanOrEqual(9);

        const unitA = q.operandA % 10;
        // Bridging must strictly have unitA + b >= 10
        expect(unitA + q.operandB).toBeGreaterThanOrEqual(10);
        expect(q.correctAnswer).toBe(q.operandA + q.operandB);
      }
    });

    it('generates strictly NON-BRIDGING subtraction where units never borrow', () => {
      for (let i = 0; i < 50; i++) {
        const q = generateAddSubQuestion(1, { forceBridging: false, forceOperator: '-' });
        expect(q.operator).toBe('-');
        expect(q.operandA).toBeGreaterThanOrEqual(10);
        expect(q.operandA).toBeLessThanOrEqual(99);
        expect(q.operandB).toBeGreaterThanOrEqual(1);
        expect(q.operandB).toBeLessThanOrEqual(9);

        const unitA = q.operandA % 10;
        // Non-bridging must strictly have unitA - b >= 0
        expect(unitA).toBeGreaterThanOrEqual(q.operandB);
        expect(q.correctAnswer).toBe(q.operandA - q.operandB);
        expect(q.correctAnswer).toBeGreaterThan(0);
      }
    });

    it('generates strictly BRIDGING subtraction where borrowing always occurs and diff is positive', () => {
      for (let i = 0; i < 50; i++) {
        const q = generateAddSubQuestion(1, { forceBridging: true, forceOperator: '-' });
        expect(q.operator).toBe('-');
        expect(q.operandA).toBeGreaterThanOrEqual(10);
        expect(q.operandA).toBeLessThanOrEqual(99);
        expect(q.operandB).toBeGreaterThanOrEqual(1);
        expect(q.operandB).toBeLessThanOrEqual(9);

        const unitA = q.operandA % 10;
        // Bridging must strictly have unitA < b
        expect(unitA).toBeLessThan(q.operandB);
        expect(q.correctAnswer).toBe(q.operandA - q.operandB);
        expect(q.correctAnswer).toBeGreaterThan(0);
      }
    });
  });

  describe('Subtractions across all levels 1 to 6', () => {
    it('never produces negative or zero answers in any level', () => {
      for (let lvl = 1; lvl <= 6; lvl++) {
        for (let i = 0; i < 30; i++) {
          const q = generateAddSubQuestion(lvl, { forceOperator: '-' });
          expect(q.operandA).toBeGreaterThan(q.operandB);
          expect(q.correctAnswer).toBeGreaterThan(0);
          expect(q.correctAnswer).toBe(q.operandA - q.operandB);
        }
      }
    });
  });

  describe('Multiplication Table Generator (1 to 100)', () => {
    it('generates accurate products for specified target tables 1 through 100', () => {
      const sampleTables = [1, 2, 7, 12, 17, 25, 49, 75, 99, 100];
      for (const t of sampleTables) {
        const q = generateMultiplicationQuestion(t, 8);
        expect(q.operandA).toBe(t);
        expect(q.operandB).toBe(8);
        expect(q.correctAnswer).toBe(t * 8);
        expect(q.prompt).toBe(`${t} × 8`);
      }
    });

    it('clamps random multiplier to 2-12', () => {
      for (let i = 0; i < 50; i++) {
        const q = generateMultiplicationQuestion();
        expect(q.operandB).toBeGreaterThanOrEqual(2);
        expect(q.operandB).toBeLessThanOrEqual(12);
        expect(q.correctAnswer).toBe(q.operandA * q.operandB);
      }
    });
  });

  describe('Squares and Cubes (1 to 100)', () => {
    it('generates correct squares ending in 5', () => {
      for (let i = 0; i < 20; i++) {
        const q = generateSquareCubeQuestion('ending_5');
        expect(q.operandA % 10).toBe(5);
        expect(q.correctAnswer).toBe(q.operandA * q.operandA);
      }
    });

    it('generates correct squares near 50', () => {
      for (let i = 0; i < 20; i++) {
        const q = generateSquareCubeQuestion('near_50');
        expect(q.operandA).toBeGreaterThanOrEqual(41);
        expect(q.operandA).toBeLessThanOrEqual(59);
        expect(q.operandA).not.toBe(50);
        expect(q.correctAnswer).toBe(q.operandA * q.operandA);
      }
    });

    it('generates cubes anchor (1 to 20)', () => {
      for (let i = 0; i < 20; i++) {
        const q = generateSquareCubeQuestion('cubes_anchor');
        expect(q.operandA).toBeGreaterThanOrEqual(1);
        expect(q.operandA).toBeLessThanOrEqual(20);
        expect(q.correctAnswer).toBe(q.operandA * q.operandA * q.operandA);
      }
    });

    it('supports advanced cubes up to 100 with accurate calculations', () => {
      const edgeCubes = [21, 50, 75, 99, 100];
      for (const n of edgeCubes) {
        const q = generateSquareCubeQuestion('cubes_advanced', n);
        expect(q.operandA).toBe(n);
        expect(q.correctAnswer).toBe(n * n * n);
      }
    });
  });

  describe('Anzan Sequence Generator', () => {
    it('produces expected sum matching exact addition of sequence', () => {
      const seq = generateAnzanSequence({
        count: 8,
        digits: 2,
        intervalMs: 800,
        allowNegatives: false,
      });
      expect(seq.numbers.length).toBe(8);
      const actualSum = seq.numbers.reduce((sum, n) => sum + n, 0);
      expect(seq.expectedSum).toBe(actualSum);
      seq.numbers.forEach((n) => {
        expect(n).toBeGreaterThanOrEqual(10);
        expect(n).toBeLessThanOrEqual(99);
      });
    });

    it('never drops below 1 in running total when allowNegatives is enabled', () => {
      for (let trial = 0; trial < 30; trial++) {
        const seq = generateAnzanSequence({
          count: 10,
          digits: 1,
          intervalMs: 500,
          allowNegatives: true,
        });
        let accumulator = 0;
        seq.numbers.forEach((n) => {
          accumulator += n;
          expect(accumulator).toBeGreaterThanOrEqual(1);
        });
        expect(seq.expectedSum).toBe(accumulator);
      }
    });
  });
});
