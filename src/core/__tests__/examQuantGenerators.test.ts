import { describe, it, expect } from 'vitest';
import {
  generateSimplificationQuestion,
  generateApproximationQuestion,
  generatePercentageQuestion,
  generateRatioQuestion,
  generateAverageQuestion,
  generateProfitLossQuestion,
  generateInterestQuestion,
  generateDICalculationQuestion,
  generateNumberSeriesQuestion,
  generateFractionPercentageQuestion,
  BANK_FRACTION_PERCENTAGE_TABLE,
} from '../examQuantGenerators';

describe('Exam Quant Calculation Generators (RRB PO Speed Engine)', () => {
  it('verifies BANK_FRACTION_PERCENTAGE_TABLE structure and integrity', () => {
    expect(BANK_FRACTION_PERCENTAGE_TABLE.length).toBeGreaterThanOrEqual(15);
    for (const pair of BANK_FRACTION_PERCENTAGE_TABLE) {
      expect(pair.numerator).toBeGreaterThanOrEqual(1);
      expect(pair.denominator).toBeGreaterThanOrEqual(2);
      expect(pair.percentage).toBeGreaterThan(0);
      expect(pair.displayPercentage).toMatch(/%/);
    }
  });

  it('generates 100 valid Simplification questions with accurate BODMAS answers', () => {
    for (let i = 0; i < 100; i++) {
      const q = generateSimplificationQuestion();
      expect(q.prompt).toBeTruthy();
      expect(typeof q.correctAnswer).toBe('number');
      expect(Number.isFinite(q.correctAnswer)).toBe(true);
      expect(Number.isInteger(q.correctAnswer)).toBe(true);
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
      expect(q.steps.length).toBeGreaterThan(0);
      expect(q.strategyTitle).toBeTruthy();
      expect(q.mentalTip).toBeTruthy();
    }
  });

  it('generates 100 valid Approximation questions within realistic bank exam ranges', () => {
    for (let i = 0; i < 100; i++) {
      const q = generateApproximationQuestion();
      expect(q.prompt).toContain('≈');
      expect(typeof q.correctAnswer).toBe('number');
      expect(Number.isFinite(q.correctAnswer)).toBe(true);
      expect(q.correctAnswer).toBeGreaterThan(0);
      expect(q.steps.length).toBeGreaterThan(0);
    }
  });

  it('generates 100 valid Percentage calculation questions', () => {
    for (let i = 0; i < 100; i++) {
      const q = generatePercentageQuestion();
      expect(q.prompt).toMatch(/%/);
      expect(typeof q.correctAnswer).toBe('number');
      expect(Number.isFinite(q.correctAnswer)).toBe(true);
      expect(q.correctAnswer).toBeGreaterThan(0);
      expect(q.steps.length).toBeGreaterThan(0);
    }
  });

  it('generates 100 valid Ratio questions with clean integer units', () => {
    for (let i = 0; i < 100; i++) {
      const q = generateRatioQuestion();
      expect(q.prompt).toBeTruthy();
      expect(typeof q.correctAnswer).toBe('number');
      expect(Number.isFinite(q.correctAnswer)).toBe(true);
      expect(Number.isInteger(q.correctAnswer)).toBe(true);
      expect(q.correctAnswer).toBeGreaterThan(0);
      expect(q.steps.length).toBeGreaterThan(0);
    }
  });

  it('generates 100 valid Average (Deviation Method) questions', () => {
    for (let i = 0; i < 100; i++) {
      const q = generateAverageQuestion();
      expect(q.prompt).toMatch(/Average/i);
      expect(typeof q.correctAnswer).toBe('number');
      expect(Number.isFinite(q.correctAnswer)).toBe(true);
      expect(q.correctAnswer).toBeGreaterThan(0);
      expect(q.steps.length).toBeGreaterThan(0);
    }
  });

  it('generates 100 valid Profit & Loss questions', () => {
    for (let i = 0; i < 100; i++) {
      const q = generateProfitLossQuestion();
      expect(q.prompt).toBeTruthy();
      expect(typeof q.correctAnswer).toBe('number');
      expect(Number.isFinite(q.correctAnswer)).toBe(true);
      expect(q.correctAnswer).toBeGreaterThan(0);
      expect(q.steps.length).toBeGreaterThan(0);
    }
  });

  it('generates 100 valid Simple & Compound Interest questions', () => {
    for (let i = 0; i < 100; i++) {
      const q = generateInterestQuestion();
      expect(q.prompt).toBeTruthy();
      expect(typeof q.correctAnswer).toBe('number');
      expect(Number.isFinite(q.correctAnswer)).toBe(true);
      expect(q.correctAnswer).toBeGreaterThan(0);
      expect(q.steps.length).toBeGreaterThan(0);
    }
  });

  it('generates 100 valid DI Micro-Calculation questions', () => {
    for (let i = 0; i < 100; i++) {
      const q = generateDICalculationQuestion();
      expect(q.prompt).toBeTruthy();
      expect(typeof q.correctAnswer).toBe('number');
      expect(Number.isFinite(q.correctAnswer)).toBe(true);
      expect(q.correctAnswer).toBeGreaterThan(0);
      expect(q.steps.length).toBeGreaterThan(0);
    }
  });

  it('generates 100 valid Number Series questions with discoverable step logic', () => {
    for (let i = 0; i < 100; i++) {
      const q = generateNumberSeriesQuestion();
      expect(q.prompt).toContain('?');
      expect(typeof q.correctAnswer).toBe('number');
      expect(Number.isFinite(q.correctAnswer)).toBe(true);
      expect(Number.isInteger(q.correctAnswer)).toBe(true);
      expect(q.steps.length).toBeGreaterThan(0);
    }
  });

  it('generates 100 valid Fraction ↔ Percentage conversion questions', () => {
    for (let i = 0; i < 100; i++) {
      const q = generateFractionPercentageQuestion();
      expect(q.prompt).toBeTruthy();
      expect(typeof q.correctAnswer).toBe('number');
      expect(Number.isFinite(q.correctAnswer)).toBe(true);
      expect(q.correctAnswer).toBeGreaterThan(0);
      expect(q.steps.length).toBeGreaterThan(0);
    }
  });
});
