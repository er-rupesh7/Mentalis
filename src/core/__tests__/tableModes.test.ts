import { describe, it, expect } from 'vitest';
import {
  generateTableModeQuestion,
  createSmartDistractors,
} from '../factEngine';
import { TableTrainingMode } from '../types';

describe('Table Training Modes & Smart Distractors (Automaticity Conditioning)', () => {
  const allModes: TableTrainingMode[] = [
    'recognition',
    'recall',
    'reverse',
    'missing_fact',
    'related_fact',
    'neighbour_fact',
    'decomposition',
    'bidirectional',
  ];

  it('generates 4 unique, plausible options in createSmartDistractors', () => {
    for (let t = 11; t <= 20; t++) {
      for (let m = 2; m <= 12; m++) {
        const correct = t * m;
        const options = createSmartDistractors(correct, t, m);
        expect(options).toHaveLength(4);
        expect(options).toContain(correct);
        // All options must be unique
        const unique = new Set(options);
        expect(unique.size).toBe(4);
        // All options must be positive integers
        for (const opt of options) {
          expect(Number.isInteger(opt)).toBe(true);
          expect(opt).toBeGreaterThan(0);
        }
      }
    }
  });

  it('generates valid questions across all 8 table modes for Teen Tables 11–20', () => {
    for (const mode of allModes) {
      for (let table = 11; table <= 20; table++) {
        const mult = 7;
        const q = generateTableModeQuestion(table, mult, mode);

        expect(q.id).toBeTruthy();
        expect(q.module).toBe('tables_bootcamp');
        expect(q.tableMode).toBe(mode);
        expect(q.prompt).toBeTruthy();
        expect(typeof q.correctAnswer).toBe('number');
        expect(q.steps.length).toBeGreaterThan(0);

        if (mode === 'recognition') {
          expect(q.questionType).toBe('multiple_choice');
          expect(q.options).toHaveLength(4);
          expect(q.options).toContain(q.correctAnswer);
        }

        if (mode === 'reverse') {
          expect(q.questionType).toBe('multiple_choice');
          expect(q.options).toHaveLength(4);
          expect(q.options).toContain(q.correctAnswer);
          expect(q.prompt).toContain('=');
        }

        if (['related_fact', 'neighbour_fact', 'decomposition'].includes(mode)) {
          expect(q.anchorFactPrompt).toBeTruthy();
        }
      }
    }
  });

  it('generates valid steps and explanations without undefined or NaN', () => {
    const q = generateTableModeQuestion(17, 8, 'decomposition');
    expect(q.correctAnswer).toBe(136);
    expect(q.anchorFactPrompt).toContain('Decompose');
    for (const step of q.steps) {
      expect(step.stepNumber).toBeGreaterThanOrEqual(1);
      expect(step.title).toBeTruthy();
      expect(step.intermediateValue).toBeDefined();
      expect(step.explanation).toBeTruthy();
    }
  });
});
