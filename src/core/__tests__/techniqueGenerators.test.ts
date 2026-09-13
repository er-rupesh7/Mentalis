import { describe, it, expect } from 'vitest';
import { generateTechniqueProblem } from '../techniques/techniqueGenerators';
import { MODULE_METADATA } from '../techniques/techniqueCurriculum';
import { CalculationTechniqueId } from '../types';

describe('Technique Generators & Mathematical Preconditions', () => {
  const allTechniqueIds: CalculationTechniqueId[] = Object.values(
    MODULE_METADATA
  ).flatMap((m) => m.techniqueIds);

  it('generates valid problems for every technique in the curriculum', () => {
    for (const techId of allTechniqueIds) {
      for (let level = 1; level <= 5; level++) {
        const problem = generateTechniqueProblem(techId, level as any);
        expect(problem).toBeDefined();
        expect(problem.id).toContain(techId);
        expect(problem.prompt.length).toBeGreaterThan(0);
        expect(problem.correctAnswer).toBeDefined();
        expect(problem.ghostAccumulator.length).toBeGreaterThan(0);
        expect(problem.steps.length).toBeGreaterThan(0);
      }
    }
  });

  describe('Module 1: Fundamental Operations Preconditions', () => {
    it('enforces non-negative subtraction and non-zero units for Nikhilam', () => {
      for (let i = 0; i < 50; i++) {
        const p = generateTechniqueProblem('sub_nikhilam_all_from_9', 3);
        expect(p.operandA).toBeGreaterThan(p.operandB!);
        // operandA is 10^k
        expect([1000, 10000, 100000]).toContain(p.operandA);
        expect(p.correctAnswer).toBe(p.operandA - p.operandB!);
      }
    });

    it('enforces base-10 bridging where units sum across 10', () => {
      for (let i = 0; i < 50; i++) {
        const p = generateTechniqueProblem('add_bridging_base10', 2);
        const uA = p.operandA % 10;
        const uB = p.operandB! % 10;
        expect(uA + uB).toBeGreaterThanOrEqual(10);
        expect(p.correctAnswer).toBe(p.operandA + p.operandB!);
      }
    });
  });

  describe('Module 2: Multiplication Preconditions', () => {
    it('enforces Antyayor Dasakepi: units sum to 10 and tens match', () => {
      for (let i = 0; i < 50; i++) {
        const p = generateTechniqueProblem('mult_pattern_antyayor_dasakepi', 3);
        const tA = Math.floor(p.operandA / 10);
        const tB = Math.floor(p.operandB! / 10);
        const uA = p.operandA % 10;
        const uB = p.operandB! % 10;

        expect(tA).toBe(tB);
        expect(uA + uB).toBe(10);
        expect(p.correctAnswer).toBe(p.operandA * p.operandB!);
      }
    });

    it('enforces Reverse Antyayor: tens sum to 10 and units match', () => {
      for (let i = 0; i < 50; i++) {
        const p = generateTechniqueProblem('mult_pattern_reverse_antyayor', 3);
        const tA = Math.floor(p.operandA / 10);
        const tB = Math.floor(p.operandB! / 10);
        const uA = p.operandA % 10;
        const uB = p.operandB! % 10;

        expect(tA + tB).toBe(10);
        expect(uA).toBe(uB);
        expect(p.correctAnswer).toBe(p.operandA * p.operandB!);
      }
    });

    it('enforces consecutive integers: B = A + 1', () => {
      for (let i = 0; i < 30; i++) {
        const p = generateTechniqueProblem('mult_pattern_consecutive_int', 2);
        expect(p.operandB).toBe(p.operandA + 1);
        expect(p.correctAnswer).toBe(p.operandA * (p.operandA + 1));
      }
    });

    it('enforces consecutive gap 2: B = A + 2', () => {
      for (let i = 0; i < 30; i++) {
        const p = generateTechniqueProblem('mult_pattern_consecutive_gap2', 2);
        expect(p.operandB).toBe(p.operandA + 2);
        expect(p.correctAnswer).toBe(p.operandA * (p.operandA + 2));
      }
    });
  });

  describe('Module 3: Squares & Cubes Preconditions', () => {
    it('enforces ending in 5 squaring termination in 25', () => {
      for (let i = 0; i < 30; i++) {
        const p = generateTechniqueProblem('sq_ending_5', 2);
        expect(p.operandA % 10).toBe(5);
        expect((p.correctAnswer as number) % 100).toBe(25);
        expect(p.correctAnswer).toBe(p.operandA * p.operandA);
      }
    });

    it('enforces ending in 25 squaring termination in 625', () => {
      for (let i = 0; i < 30; i++) {
        const p = generateTechniqueProblem('sq_ending_25', 2);
        expect(p.operandA % 100).toBe(25);
        expect((p.correctAnswer as number) % 1000).toBe(625);
        expect(p.correctAnswer).toBe(p.operandA * p.operandA);
      }
    });

    it('enforces cube tables 1 to 25 range', () => {
      for (let i = 0; i < 30; i++) {
        const p = generateTechniqueProblem('cube_tables_1_25', 2);
        expect(p.operandA).toBeGreaterThanOrEqual(1);
        expect(p.operandA).toBeLessThanOrEqual(25);
        expect(p.correctAnswer).toBe(p.operandA ** 3);
      }
    });
  });

  describe('Module 4: Roots Preconditions', () => {
    it('generates exact integer roots for perfect squares', () => {
      for (let i = 0; i < 30; i++) {
        const p = generateTechniqueProblem('root_sqrt_perfect_6d', 2);
        const root = p.correctAnswer as number;
        expect(root * root).toBe(p.operandA);
      }
    });

    it('generates exact integer roots for perfect cubes', () => {
      for (let i = 0; i < 30; i++) {
        const p = generateTechniqueProblem('root_cbrt_perfect_6d', 2);
        const root = p.correctAnswer as number;
        expect(root * root * root).toBe(p.operandA);
      }
    });
  });

  describe('Module 5: Fast Division & Percentages Preconditions', () => {
    it('generates valid flag division with zero remainder integer quotients', () => {
      for (let i = 0; i < 30; i++) {
        const p = generateTechniqueProblem('div_vedic_flag_dhvajanka', 2);
        expect((p.correctAnswer as number) * p.operandB!).toBe(p.operandA);
      }
    });

    it('generates valid reversible percentages', () => {
      for (let i = 0; i < 30; i++) {
        const p = generateTechniqueProblem('pct_reversible_law', 2);
        expect(typeof p.correctAnswer).toBe('number');
      }
    });
  });
});
