import { describe, it, expect } from 'vitest';
import {
  createAssessmentSession,
  recordAssessmentAnswer,
  recordAssessmentSkip,
  generateBaselineReport,
} from '../diagnosticEngine';
import { createDefaultLearnerProfile } from '../learnerModel';

describe('Diagnostic Engine', () => {
  it('creates an assessment session with calibrated balanced probe questions', () => {
    const session = createAssessmentSession(15);
    expect(session.status).toBe('in_progress');
    expect(session.totalQuestions).toBe(20);
    expect(session.questions.length).toBeGreaterThanOrEqual(4);
    expect(session.currentQuestionIndex).toBe(0);
    expect(session.responses.length).toBe(0);
    expect(session.isPaused).toBe(false);

    // Verify all probe questions have valid math
    for (const q of session.questions) {
      expect(q.prompt).toBeDefined();
      expect(typeof q.correctAnswer).toBe('number');
      expect(q.steps.length).toBeGreaterThan(0);
      expect(q.subTrack).toBeDefined();
    }
  });

  it('records correct answers and updates profile ability estimates', () => {
    let session = createAssessmentSession();
    let profile = createDefaultLearnerProfile();

    const q = session.questions[0];
    const result = recordAssessmentAnswer(session, q.correctAnswer, 1800, profile);

    expect(result.isCorrect).toBe(true);
    expect(result.rapidGuess).toBe(false);
    expect(result.updatedSession.currentQuestionIndex).toBe(1);
    expect(result.updatedSession.responses.length).toBe(1);

    const assessedDim = result.updatedSession.responses[0].dimension;
    expect(result.updatedProfile.skills[assessedDim].theta).toBeGreaterThan(0.0);
    expect(result.updatedProfile.skills[assessedDim].totalAttempts).toBe(1);
  });

  it('detects rapid guessing (< 500ms with incorrect answer)', () => {
    const session = createAssessmentSession();
    const profile = createDefaultLearnerProfile();
    const q = session.questions[0];

    const result = recordAssessmentAnswer(session, q.correctAnswer + 99, 250, profile);
    expect(result.isCorrect).toBe(false);
    expect(result.rapidGuess).toBe(true);
  });

  it('records question skip as a priority learning signal', () => {
    const session = createAssessmentSession();
    const profile = createDefaultLearnerProfile();

    const result = recordAssessmentSkip(session, profile);
    expect(result.isSkipped).toBe(true);
    expect(result.isCorrect).toBe(false);
    expect(result.updatedSession.responses[0].isSkipped).toBe(true);
    expect(result.updatedSession.currentQuestionIndex).toBe(1);

    // Check that fact memory map seeds skipped fact
    if (result.initialFactMemoryMap) {
      const keys = Object.keys(result.initialFactMemoryMap);
      if (keys.length > 0) {
        expect(result.initialFactMemoryMap[keys[0]].skipCount).toBe(1);
        expect(['weak', 'fragile']).toContain(result.initialFactMemoryMap[keys[0]].masteryState);
      }
    }
  });

  it('enforces cognitive ceiling: never asks harder questions in a domain once user fails at level X', () => {
    let session = createAssessmentSession();
    let profile = createDefaultLearnerProfile();

    // Answer first question (tables tier 3) incorrectly to trigger ceiling cap at <= 2
    const firstQ = session.questions[0];
    const initialDifficulty = firstQ.difficultyRating || 3;
    const res1 = recordAssessmentAnswer(session, firstQ.correctAnswer + 50, 3000, profile);
    session = res1.updatedSession;
    profile = res1.updatedProfile;

    // Simulate continuing through questions until another tables question is presented
    for (let i = 1; i < session.questions.length; i++) {
      const q = session.questions[i];
      if (q.module === 'tables_bootcamp' || q.subTrack?.startsWith('mul:')) {
        // Must NEVER exceed the failed difficulty (tier <= initialDifficulty - 1)
        expect(q.difficultyRating).toBeLessThan(initialDifficulty);
      }
    }
  });

  it('generates an actionable baseline report with personalized breakdown upon completion', () => {
    let session = createAssessmentSession();
    let profile = createDefaultLearnerProfile();

    // Answer questions to completion
    while (session.status === 'in_progress' && session.currentQuestionIndex < session.questions.length) {
      const q = session.questions[session.currentQuestionIndex];
      // Alternate correct and incorrect/skipped to test comprehensive breakdown
      if (session.currentQuestionIndex === 1) {
        const res = recordAssessmentSkip(session, profile);
        session = res.updatedSession;
        profile = res.updatedProfile;
      } else {
        const answer = session.currentQuestionIndex % 2 === 0 ? q.correctAnswer : q.correctAnswer + 1;
        const latency = session.currentQuestionIndex % 2 === 0 ? 4000 : 2500;
        const res = recordAssessmentAnswer(session, answer, latency, profile);
        session = res.updatedSession;
        profile = res.updatedProfile;
      }
    }

    expect(session.status).toBe('completed');
    expect(profile.baselineReport).not.toBeNull();
    const report = profile.baselineReport!;
    expect(report.strengths.length).toBeGreaterThanOrEqual(1);
    expect(report.priorityGaps.length).toBeGreaterThanOrEqual(1);
    expect(report.skippedFacts?.length).toBeGreaterThanOrEqual(1);
    expect([10, 12, 15, 20]).toContain(report.recommendedDailyPaceMinutes);
    expect(report.firstWeekRoadmap.length).toBe(4);
    expect(report.summaryMessage).toBeDefined();
    expect(report.summaryMessage?.length).toBeGreaterThan(15);
  });
});
