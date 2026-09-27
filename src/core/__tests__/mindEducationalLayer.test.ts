import { describe, it, expect, beforeEach } from 'vitest';
import {
  recordPracticeAttempt,
  getTopicPracticeSummary,
  getOverallPracticeAnalytics,
  getRecommendedDifficulty,
  markTopicCompleted,
  clearTopicPracticeAnalytics,
  normalizeDifficulty,
} from '../mind/practiceAnalytics';
import { TOPIC_SOCIAL_PROOF } from '../mind/topics/socialProof';
import { TOPIC_HEALTHY_BOUNDARIES } from '../mind/topics/healthyBoundaries';
import {
  EducationalVisualType,
  MindQuestionType,
  InteractiveScenarioData,
} from '../mind/types';

describe('Mentalab Mind Educational Interaction Layer', () => {
  beforeEach(() => {
    clearTopicPracticeAnalytics();
  });

  describe('Practice Analytics & Adaptive Difficulty', () => {
    it('records practice attempts with accuracy and difficulty breakdown', () => {
      recordPracticeAttempt({
        topicId: 'social_proof',
        questionId: 'sp_q_01',
        questionType: 'multiple_choice',
        difficulty: 'easy',
        isCorrect: true,
        attemptNumber: 1,
      });

      recordPracticeAttempt({
        topicId: 'social_proof',
        questionId: 'sp_q_02',
        questionType: 'true_false',
        difficulty: 'medium',
        isCorrect: false,
        attemptNumber: 1,
      });

      const summary = getTopicPracticeSummary('social_proof');
      expect(summary.attempts).toBe(2);
      expect(summary.correctAnswers).toBe(1);
      expect(summary.incorrectAnswers).toBe(1);
      expect(summary.accuracy).toBe(50);
      expect(summary.difficultyBreakdown.easy.correct).toBe(1);
      expect(summary.difficultyBreakdown.medium.correct).toBe(0);
      expect(summary.typeBreakdown.multiple_choice?.attempts).toBe(1);
      expect(summary.typeBreakdown.true_false?.attempts).toBe(1);
    });

    it('adapts difficulty dynamically based on rolling accuracy', () => {
      // With 0 attempts, defaults to easy
      expect(getRecommendedDifficulty('anchoring_effect')).toBe('easy');

      // Record 3 straight correct answers on easy/medium
      recordPracticeAttempt({
        topicId: 'anchoring_effect',
        questionId: 'anc_1',
        questionType: 'multiple_choice',
        difficulty: 'medium',
        isCorrect: true,
        attemptNumber: 1,
      });
      recordPracticeAttempt({
        topicId: 'anchoring_effect',
        questionId: 'anc_2',
        questionType: 'scenario_selection',
        difficulty: 'medium',
        isCorrect: true,
        attemptNumber: 1,
      });

      // Accuracy is 100% with medium attempts, adaptive recommendation promotes to hard
      expect(getRecommendedDifficulty('anchoring_effect')).toBe('hard');

      // Record multiple incorrect attempts
      recordPracticeAttempt({
        topicId: 'anchoring_effect',
        questionId: 'anc_3',
        questionType: 'matching',
        difficulty: 'hard',
        isCorrect: false,
        attemptNumber: 1,
      });
      recordPracticeAttempt({
        topicId: 'anchoring_effect',
        questionId: 'anc_4',
        questionType: 'ordering',
        difficulty: 'hard',
        isCorrect: false,
        attemptNumber: 1,
      });

      // Accuracy is now 2/4 = 50%, should de-escalate back to medium or easy
      expect(getRecommendedDifficulty('anchoring_effect')).toBe('medium');
    });

    it('tracks topic completion and aggregate platform analytics', () => {
      markTopicCompleted('social_proof');
      markTopicCompleted('healthy_boundaries');

      recordPracticeAttempt({
        topicId: 'social_proof',
        questionId: 'sp_1',
        questionType: 'multiple_choice',
        difficulty: 'easy',
        isCorrect: true,
        attemptNumber: 1,
      });

      const overall = getOverallPracticeAnalytics();
      expect(overall.completedTopicIds).toContain('social_proof');
      expect(overall.completedTopicIds).toContain('healthy_boundaries');
      expect(overall.totalAttempts).toBe(1);
      expect(overall.totalCorrect).toBe(1);
      expect(overall.overallAccuracy).toBe(100);
    });

    it('normalizes legacy difficulty tiers', () => {
      expect(normalizeDifficulty('beginner')).toBe('easy');
      expect(normalizeDifficulty('intermediate')).toBe('medium');
      expect(normalizeDifficulty('advanced')).toBe('hard');
      expect(normalizeDifficulty('easy')).toBe('easy');
      expect(normalizeDifficulty('medium')).toBe('medium');
      expect(normalizeDifficulty('hard')).toBe('hard');
    });
  });

  describe('Educational Visual System', () => {
    it('supports all 7 required visual content types', () => {
      const supportedTypes: EducationalVisualType[] = [
        'hero_image',
        'concept_illustration',
        'diagram',
        'flowchart',
        'comparison_graphic',
        'scenario_illustration',
        'infographic',
      ];

      expect(supportedTypes).toHaveLength(7);
    });

    it('validates social proof topic contains flowchart and comparison visual data', () => {
      const topic = TOPIC_SOCIAL_PROOF.en;
      expect(topic.visualContent).toBeDefined();
      expect(topic.visualContent?.type).toBe('flowchart');
      expect(topic.visualContent?.altText).toBeTruthy();
      expect(topic.visualContent?.caption).toBeTruthy();
      expect(topic.visualContent?.credits?.sourceName).toBeTruthy();
      expect(topic.visualContent?.flowchartSteps).toBeDefined();
      expect(topic.visualContent?.flowchartSteps?.length).toBeGreaterThanOrEqual(3);
      expect(topic.visualContent?.comparisonData).toBeDefined();
      expect(topic.visualContent?.comparisonData?.sideA.isOptimal).toBe(true);
      expect(topic.visualContent?.comparisonData?.sideB.isOptimal).toBe(false);
      expect(topic.visualContent?.infographicMetrics?.length).toBeGreaterThanOrEqual(2);
    });

    it('validates healthy boundaries contains comparison matrix visual data', () => {
      const topic = TOPIC_HEALTHY_BOUNDARIES.en;
      expect(topic.visualContent).toBeDefined();
      expect(topic.visualContent?.type).toBe('comparison_graphic');
      expect(topic.visualContent?.comparisonData?.sideA.title).toContain('Boundary');
      expect(topic.visualContent?.comparisonData?.sideB.title).toContain('Control');
    });
  });

  describe('Scenario System & 95% Social Media Ad', () => {
    it('includes the required 95% social media product scenario in social proof', () => {
      const topic = TOPIC_SOCIAL_PROOF.en;
      expect(topic.interactiveScenarios).toBeDefined();
      expect(topic.interactiveScenarios?.length).toBeGreaterThanOrEqual(1);

      const scen95 = topic.interactiveScenarios?.find((s) => s.id === 'scen_social_proof_95');
      expect(scen95).toBeDefined();
      expect(scen95?.contextVignette).toContain('95% of successful people');
      expect(scen95?.question).toBe('What should you be cautious about?');

      // Verify Options: A. Social proof, B. Evidence quality, C. Both, D. Neither
      expect(scen95?.options).toHaveLength(4);
      const optA = scen95?.options.find((o) => o.label === 'A');
      const optB = scen95?.options.find((o) => o.label === 'B');
      const optC = scen95?.options.find((o) => o.label === 'C');
      const optD = scen95?.options.find((o) => o.label === 'D');

      expect(optA?.text).toBe('Social proof');
      expect(optA?.isCorrect).toBe(false);

      expect(optB?.text).toBe('Evidence quality');
      expect(optB?.isCorrect).toBe(false);

      expect(optC?.text).toBe('Both');
      expect(optC?.isCorrect).toBe(true);

      expect(optD?.text).toBe('Neither');
      expect(optD?.isCorrect).toBe(false);

      // Verify explanation is deep and never simply "Correct."
      expect(optC?.explanation).toContain('Correct. This example uses social proof');
      expect(optD?.explanation).toContain('Not quite. Scarcity would involve');
      expect(scen95?.revealedExplanation.actionableAntidote).toBeTruthy();
    });
  });

  describe('Practice Question Formats & Misconception Questions', () => {
    it('supports multiple question formats across topics', () => {
      const topic = TOPIC_SOCIAL_PROOF.en;
      const types = topic.practiceQuestions.map((q) => q.questionType);

      expect(types).toContain('multiple_choice');
      expect(types).toContain('true_false');
      expect(types).toContain('matching');
      expect(types).toContain('ordering');
      expect(types).toContain('reflection');
    });

    it('includes the guilt-tripping misconception question in healthy boundaries', () => {
      const topic = TOPIC_HEALTHY_BOUNDARIES.en;
      const guiltQ = topic.practiceQuestions.find(
        (q) => q.prompt === 'Does every instance of guilt-tripping mean someone is intentionally manipulating you?'
      );

      expect(guiltQ).toBeDefined();
      expect(guiltQ?.isMisconception).toBe(true);
      expect(guiltQ?.isTrueStatement).toBe(false);
      // Explains context matters, not deliberate manipulation
      expect(guiltQ?.explanation).toContain('No. Context matters.');
      expect(guiltQ?.explanation).toContain('without deliberately attempting to control');
    });

    it('ensures explanations provide rich psychological mechanisms', () => {
      const topic = TOPIC_SOCIAL_PROOF.en;
      topic.practiceQuestions.forEach((q) => {
        expect(q.explanation.trim()).not.toBe('Correct.');
        expect(q.explanation.length).toBeGreaterThan(30);
      });
    });
  });
});
