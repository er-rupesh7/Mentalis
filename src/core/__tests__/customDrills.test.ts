import { describe, it, expect } from 'vitest';
import {
  generateArithmeticComboQuestion,
  generateCustomSquareQuestion,
  generateCustomCubeQuestion,
} from '../calcEngine';
import {
  checkTableAutomaticity,
  evaluateTechniqueMastery,
  getAdaptiveQuestion,
} from '../adaptive';
import { useQuizStore, INITIAL_TECHNIQUE_MASTERY_MAP } from '../store/useQuizStore';
import { ArithmeticCombination, CustomDrillConfig, BrainMatrix } from '../types';
import { createDefaultLearnerProfile } from '../learnerModel';

describe('Custom Workout & Granular Arithmetic Engine', () => {
  const combos: ArithmeticCombination[] = [
    'add_sub_2d_1d',
    'add_sub_2d_2d',
    'add_sub_3d_1d',
    'add_sub_3d_2d',
    'add_sub_3d_3d',
    'add_sub_4d_2d',
    'add_sub_4d_3d',
    'add_sub_4d_4d',
    'add_sub_chain_3',
  ];

  it('generates mathematically valid questions for all 9 arithmetic combinations with non-negative subtraction', () => {
    for (const combo of combos) {
      for (let i = 0; i < 20; i++) {
        const q = generateArithmeticComboQuestion(combo);
        expect(q).toBeDefined();
        expect(q.id).toBeTruthy();
        expect(q.prompt).toBeTruthy();
        expect(q.steps.length).toBeGreaterThan(0);
        expect(q.strategyTitle).toBeTruthy();

        // Mathematically verify correctness
        if (combo === 'add_sub_chain_3') {
          expect(q.prompt).toMatch(/\d+ \+ \d+ [+-] \d+/);
          expect(q.correctAnswer).toBeGreaterThan(0);
        } else if (q.operator === '+') {
          expect(q.correctAnswer).toBe(q.operandA + q.operandB);
        } else if (q.operator === '-') {
          expect(q.correctAnswer).toBe(q.operandA - q.operandB);
          // Invariant: Subtractions must NEVER result in negative values
          expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
          expect(q.operandA).toBeGreaterThanOrEqual(q.operandB);
        }

        // Target time should be reasonable for competitive prelims
        expect(q.targetTimeSeconds).toBeGreaterThanOrEqual(1.5);
        expect(q.targetTimeSeconds).toBeLessThanOrEqual(12.0);
      }
    }
  });

  it('respects operator preferences for addition only and subtraction only', () => {
    for (let i = 0; i < 15; i++) {
      const qAdd = generateArithmeticComboQuestion('add_sub_3d_2d', { forceOperator: '+' });
      expect(qAdd.operator).toBe('+');

      const qSub = generateArithmeticComboQuestion('add_sub_3d_2d', { forceOperator: '-' });
      expect(qSub.operator).toBe('-');
      expect(qSub.operandA).toBeGreaterThanOrEqual(qSub.operandB);
    }
  });

  it('generates custom square questions within specified min/max bounds', () => {
    for (let i = 0; i < 25; i++) {
      const q = generateCustomSquareQuestion(26, 50);
      expect(q.operandA).toBeGreaterThanOrEqual(26);
      expect(q.operandA).toBeLessThanOrEqual(50);
      expect(q.operator).toBe('^2');
      expect(q.correctAnswer).toBe(q.operandA * q.operandA);
      expect(q.factKey).toBe(`square:${q.operandA}`);
    }
  });

  it('generates custom cube questions within specified min/max bounds', () => {
    for (let i = 0; i < 25; i++) {
      const q = generateCustomCubeQuestion(1, 20);
      expect(q.operandA).toBeGreaterThanOrEqual(1);
      expect(q.operandA).toBeLessThanOrEqual(20);
      expect(q.operator).toBe('^3');
      expect(q.correctAnswer).toBe(q.operandA * q.operandA * q.operandA);
      expect(q.factKey).toBe(`cube:${q.operandA}`);
    }
  });
});

describe('Table Automaticity & Technique Mastery Evaluation', () => {
  it('correctly evaluates Table Automaticity requiring >= 95% accuracy and <= 2200ms latency across at least 10 multiples', () => {
    const unmasteredFactMap: Record<string, any> = {};
    // Only 4 multiples practiced
    for (let m = 1; m <= 4; m++) {
      unmasteredFactMap[`mul:19:${m}`] = {
        totalAttempts: 5,
        correctAttempts: 5,
        medianLatencyMs: 1600,
      };
    }
    const resultIncomplete = checkTableAutomaticity(19, unmasteredFactMap);
    expect(resultIncomplete.isMastered).toBe(false);
    expect(resultIncomplete.testedMultiplesCount).toBe(4);

    // Complete all 12 multiples with high accuracy and fast latency
    const masteredFactMap: Record<string, any> = {};
    for (let m = 1; m <= 12; m++) {
      masteredFactMap[`mul:19:${m}`] = {
        totalAttempts: 6,
        correctAttempts: 6,
        medianLatencyMs: 1800,
      };
    }
    const resultMastered = checkTableAutomaticity(19, masteredFactMap);
    expect(resultMastered.isMastered).toBe(true);
    expect(resultMastered.accuracy).toBe(100);
    expect(resultMastered.medianLatencyMs).toBeLessThanOrEqual(2200);
    expect(resultMastered.unmasteredMultiples).toHaveLength(0);
  });

  it('evaluates technique mastery and auto-switches to subsequent technique', () => {
    // Under threshold (only 3 consecutive correct)
    const resultDeveloping = evaluateTechniqueMastery('decade_bridging', 3, 2000, 5);
    expect(resultDeveloping.isMastered).toBe(false);
    expect(resultDeveloping.nextTechnique).toBeUndefined();

    // Mastery threshold reached (6 consecutive correct, <= 2600ms latency, >= 8 exposures)
    const resultMastered = evaluateTechniqueMastery('decade_bridging', 6, 2100, 8);
    expect(resultMastered.isMastered).toBe(true);
    expect(resultMastered.nextTechnique).toBe('l2r_decade_striding');
  });
});

describe('Adaptive Custom Drill Dispatcher', () => {
  it('generates adaptive questions for single-table mastery with 25% revision interleaving', () => {
    const config: CustomDrillConfig = {
      id: 'drill_table_19',
      name: 'Table 19 Mastery Sprint',
      selectedTables: [19],
      selectedSquareRanges: [],
      selectedCubeRanges: [],
      selectedArithmeticCombos: [],
      selectedExamSkills: [],
      operatorPreference: '×',
      interleavePreviousLearned: true,
      targetMasteryTable: 19,
    };

    let targetTable19Count = 0;
    let interleavedCount = 0;

    for (let i = 0; i < 50; i++) {
      const q = getAdaptiveQuestion({
        module: 'custom_drill',
        activeAddSubLevel: 1,
        activeTable: 19,
        activeSquareTrack: 'near_50',
        customDrillConfig: config,
        targetMasteryTable: 19,
      });

      expect(q).toBeDefined();
      if (q.operandA === 19) {
        targetTable19Count++;
      } else if (q.operandA < 19 && q.operandA >= 2) {
        interleavedCount++;
      }
    }

    // Target table 19 should comprise the vast majority of questions (~65-75%)
    expect(targetTable19Count).toBeGreaterThan(25);
    // Interleaved revision should be represented
    expect(interleavedCount).toBeGreaterThan(0);
  });

  it('dispatches across multi-select pool combining tables, squares, and multi-digit arithmetic', () => {
    const config: CustomDrillConfig = {
      id: 'mixed_pool',
      name: 'Mixed Multi-Select Drill',
      selectedTables: [17, 18],
      selectedSquareRanges: [{ min: 20, max: 40 }],
      selectedCubeRanges: [{ min: 1, max: 15 }],
      selectedArithmeticCombos: ['add_sub_2d_2d', 'add_sub_3d_2d'],
      selectedExamSkills: [],
      operatorPreference: 'mixed',
      interleavePreviousLearned: true,
    };

    const modulesSeen = new Set<string>();

    for (let i = 0; i < 40; i++) {
      const q = getAdaptiveQuestion({
        module: 'custom_drill',
        activeAddSubLevel: 1,
        activeTable: 18,
        activeSquareTrack: 'near_50',
        customDrillConfig: config,
      });

      if (q.operator === '×') modulesSeen.add('multiplication');
      if (q.operator === '^2') modulesSeen.add('squares');
      if (q.operator === '^3') modulesSeen.add('cubes');
      if (q.operator === '+' || q.operator === '-') modulesSeen.add('add_sub');
    }

    // Should sample from multiple domains in the pool
    expect(modulesSeen.size).toBeGreaterThanOrEqual(2);
  });
});

describe('Brain Matrix Cloud-Readiness & Portability', () => {
  it('successfully exports and imports Brain Matrix JSON round-trip', () => {
    const store = useQuizStore.getState();

    // Export current state
    const jsonStr = store.exportBrainMatrixJSON();
    expect(jsonStr).toBeTruthy();

    const parsed: BrainMatrix = JSON.parse(jsonStr);
    expect(parsed.schemaVersion).toBe(1);
    expect(parsed.learnerProfile).toBeDefined();
    expect(parsed.factMemoryMap).toBeDefined();
    expect(parsed.techniqueMasteryMap).toBeDefined();

    // Test importing
    const importRes = store.importBrainMatrixJSON(jsonStr);
    expect(importRes.success).toBe(true);

    // Test invalid import handling
    const invalidRes = store.importBrainMatrixJSON('not-json');
    expect(invalidRes.success).toBe(false);
    expect(invalidRes.error).toBeDefined();
  });
});
