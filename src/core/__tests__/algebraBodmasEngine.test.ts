import { describe, it, expect } from 'vitest';
import {
  generateBodmasQuestion,
  adaptBodmasToUnifiedQuestion,
  BodmasCategory,
} from '../algebraBodmasEngine';

describe('Algebra & BODMAS Engine', () => {
  it('generates valid questions across all 4 categories', () => {
    const categories: BodmasCategory[] = [
      'basic_bodmas',
      'orders_powers',
      'shortcut_identities',
      'algebraic_balance',
    ];

    for (const cat of categories) {
      for (let i = 0; i < 5; i++) {
        const q = generateBodmasQuestion(cat, 2);
        expect(q.id).toBeDefined();
        expect(q.category).toBe(cat);
        expect(typeof q.answer).toBe('number');
        expect(Number.isFinite(q.answer)).toBe(true);
        expect(q.expression.length).toBeGreaterThan(0);
        expect(q.prompt).toContain('=');
        expect(q.steps.length).toBeGreaterThan(0);
        expect(q.bodmasRule.length).toBeGreaterThan(0);
        expect(q.mentalTip.length).toBeGreaterThan(0);
      }
    }
  });

  it('correctly adapts BodmasProblem to Unified Question interface', () => {
    const q = generateBodmasQuestion('shortcut_identities', 3);
    const unified = adaptBodmasToUnifiedQuestion(q);

    expect(unified.id).toBe(q.id);
    expect(unified.prompt).toBe(q.prompt);
    expect(unified.correctAnswer).toBe(q.answer);
    expect(unified.steps.length).toBe(q.steps.length);
    expect(unified.module).toBe('algebra_bodmas');
  });
});
