import { describe, it, expect } from 'vitest';
import {
  generateCognitiveMindQuestions,
  evaluateCognitiveMindReport,
  CognitiveQuestionAttempt,
} from '../assessment/cognitiveAssessmentEngine';

describe('Cognitive Mind Assessment Engine', () => {
  it('generates 25 questions without ANY trivial multiples (no x1, no x10, no x0)', () => {
    const limits = [10, 12, 20, 30, 50];

    limits.forEach((limit) => {
      const questions = generateCognitiveMindQuestions(limit, 25);
      expect(questions.length).toBeGreaterThanOrEqual(20);
      expect(questions.length).toBeLessThanOrEqual(30);

      questions.forEach((q) => {
        // STRICT: Never ask n x 1 or 1 x n
        expect(q.num1).not.toBe(1);
        expect(q.num2).not.toBe(1);

        // STRICT: Never ask n x 10 or 10 x n
        expect(q.num1).not.toBe(10);
        expect(q.num2).not.toBe(10);

        // STRICT: Never ask 0
        expect(q.num1).not.toBe(0);
        expect(q.num2).not.toBe(0);

        // Correct answer check
        expect(q.answer).toBe(q.num1 * q.num2);

        // Valid phase
        expect(['automaticity', 'domain_mastery', 'decomposition', 'speed_stamina']).toContain(q.phase);
      });
    });
  });

  it('correctly categorizes phase distribution across questions', () => {
    const questions = generateCognitiveMindQuestions(20, 25);
    const phases = questions.map((q) => q.phase);

    expect(phases).toContain('automaticity');
    expect(phases).toContain('domain_mastery');
    expect(phases).toContain('decomposition');
    expect(phases).toContain('speed_stamina');
  });

  it('evaluates psychological mind report accurately for rapid accurate responses', () => {
    const questions = generateCognitiveMindQuestions(20, 25);
    const mockAttempts: CognitiveQuestionAttempt[] = questions.map((q) => ({
      question: q,
      userAnswer: q.answer,
      isCorrect: true,
      latencyMs: 1100, // fast recall
      isSkipped: false,
    }));

    const report = evaluateCognitiveMindReport(mockAttempts, 20);

    expect(report.accuracyRate).toBe(100);
    expect(report.medianLatencyMs).toBe(1100);
    expect(report.synapticAutomaticityRate).toBe(100);
    expect(report.maqScore).toBeGreaterThanOrEqual(130);
    expect(report.brainArchetype.title).toBe('Lightning Synapse');
    expect(report.strengths.length).toBeGreaterThan(0);
    expect(report.hesitationFacts).toHaveLength(0);
  });

  it('evaluates report for slow or hesitant responses with bottlenecks', () => {
    const questions = generateCognitiveMindQuestions(20, 25);
    const mockAttempts: CognitiveQuestionAttempt[] = questions.map((q, idx) => ({
      question: q,
      userAnswer: idx % 5 === 0 ? 999 : q.answer, // some errors
      isCorrect: idx % 5 !== 0,
      latencyMs: idx % 3 === 0 ? 3800 : 1800,
      isSkipped: false,
    }));

    const report = evaluateCognitiveMindReport(mockAttempts, 20);

    expect(report.accuracyRate).toBeLessThan(100);
    expect(report.hesitationFacts.length).toBeGreaterThan(0);
    expect(report.hesitationFacts[0].latencyMs).toBeGreaterThan(2800);
  });
});
