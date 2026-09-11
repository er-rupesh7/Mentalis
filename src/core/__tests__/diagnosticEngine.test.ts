import { describe, it, expect } from 'vitest';
import {
  createAssessmentSession,
  recordAssessmentAnswer,
  generateBaselineReport,
} from '../diagnosticEngine';
import { createDefaultLearnerProfile } from '../learnerModel';

describe('Diagnostic Engine', () => {
  it('creates an assessment session with 16 calibrated probe questions', () => {
    const session = createAssessmentSession();
    expect(session.status).toBe('in_progress');
    expect(session.totalQuestions).toBe(16);
    expect(session.questions.length).toBe(16);
    expect(session.currentQuestionIndex).toBe(0);
    expect(session.responses.length).toBe(0);

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

    const assessedDim = q.subTrack as unknown as import('../learnerModel').SkillDimension;
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

  it('generates an actionable baseline report upon completion', () => {
    let session = createAssessmentSession();
    let profile = createDefaultLearnerProfile();

    for (let i = 0; i < session.totalQuestions; i++) {
      const q = session.questions[session.currentQuestionIndex];
      // Alternate correct and incorrect to test mixed profile
      const answer = i % 2 === 0 ? q.correctAnswer : q.correctAnswer + 1;
      const res = recordAssessmentAnswer(session, answer, 2500, profile);
      session = res.updatedSession;
      profile = res.updatedProfile;
    }

    expect(session.status).toBe('completed');
    expect(profile.baselineReport).not.toBeNull();
    const report = profile.baselineReport!;
    expect(report.strengths.length).toBeGreaterThanOrEqual(1);
    expect(report.priorityGaps.length).toBeGreaterThanOrEqual(1);
    expect([10, 15, 20]).toContain(report.recommendedDailyPaceMinutes);
    expect(report.firstWeekRoadmap.length).toBe(4);
  });
});
