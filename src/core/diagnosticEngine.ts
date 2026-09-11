/**
 * Diagnostic Engine for Mentalis
 * Conducts adaptive onboarding baseline assessments, estimates initial skill ability (theta),
 * identifies rapid guessing, and generates baseline diagnostic reports with zero external dependencies.
 */

import { Question } from './types';
import {
  generateAddSubQuestion,
  generateMultiplicationQuestion,
  generateSquareCubeQuestion,
} from './calcEngine';
import {
  AssessmentSession,
  BaselineReport,
  LearnerProfile,
  SkillDimension,
  updateSkillEstimate,
} from './learnerModel';

interface DiagnosticProbe {
  dimension: SkillDimension;
  generator: () => Question;
}

const DIAGNOSTIC_PROBES: DiagnosticProbe[] = [
  // 1. Addition & Subtraction Foundations
  {
    dimension: 'add_sub_non_bridging',
    generator: () => generateAddSubQuestion(1),
  },
  // 2. Decade Bridging
  {
    dimension: 'add_sub_bridging_decade',
    generator: () => generateAddSubQuestion(2),
  },
  // 3. Multiplication Foundations
  {
    dimension: 'mult_foundations',
    generator: () => generateMultiplicationQuestion(4),
  },
  // 4. Core Times Tables
  {
    dimension: 'mult_core_tables',
    generator: () => generateMultiplicationQuestion(7),
  },
  // 5. Complements to 100
  {
    dimension: 'add_sub_complements_100',
    generator: () => generateAddSubQuestion(3),
  },
  // 6. Core Times Tables (9 or 8)
  {
    dimension: 'mult_core_tables',
    generator: () => generateMultiplicationQuestion(9),
  },
  // 7. Squares Ending in 5
  {
    dimension: 'squares_ending_5',
    generator: () => generateSquareCubeQuestion('ending_5'),
  },
  // 8. Left-to-Right 2-Digit Addition
  {
    dimension: 'add_sub_multidigit_l2r',
    generator: () => generateAddSubQuestion(4),
  },
  // 9. Teen Times Tables
  {
    dimension: 'mult_teen_tables',
    generator: () => generateMultiplicationQuestion(14),
  },
  // 10. Squares Near 50
  {
    dimension: 'squares_near_50',
    generator: () => generateSquareCubeQuestion('near_50'),
  },
  // 11. Anchor Cubes
  {
    dimension: 'cubes_anchors',
    generator: () => generateSquareCubeQuestion('cubes_anchor'),
  },
  // 12. Squares Near 100
  {
    dimension: 'squares_near_100',
    generator: () => generateSquareCubeQuestion('near_100'),
  },
  // 13. Running Multi-Term Chain
  {
    dimension: 'add_sub_mixed_chain',
    generator: () => generateAddSubQuestion(5),
  },
  // 14. Decade Multiplication
  {
    dimension: 'mult_decade_ext',
    generator: () => generateMultiplicationQuestion(25),
  },
  // 15. General Duplex Squares
  {
    dimension: 'squares_duplex_general',
    generator: () => generateSquareCubeQuestion('general_duplex'),
  },
  // 16. Advanced Cubes
  {
    dimension: 'cubes_advanced',
    generator: () => generateSquareCubeQuestion('cubes_advanced'),
  },
];

/**
 * Creates a freshly initialized 16-question diagnostic assessment session.
 */
export function createAssessmentSession(): AssessmentSession {
  const questions: Question[] = [];

  for (let i = 0; i < DIAGNOSTIC_PROBES.length; i++) {
    const probe = DIAGNOSTIC_PROBES[i];
    const q = probe.generator();
    // Embed probe metadata into question
    q.id = `diag_${i + 1}_${probe.dimension}`;
    q.subTrack = probe.dimension;
    questions.push(q);
  }

  return {
    id: `assessment_${Date.now()}`,
    startedAt: Date.now(),
    status: 'in_progress',
    currentQuestionIndex: 0,
    totalQuestions: questions.length,
    questions,
    responses: [],
    earlyStopped: false,
  };
}

export interface AssessmentAnswerResult {
  updatedSession: AssessmentSession;
  updatedProfile: LearnerProfile;
  isCorrect: boolean;
  rapidGuess: boolean;
  isCompleted: boolean;
}

/**
 * Records an answer for the current diagnostic question, updates skill estimates,
 * evaluates rapid-guessing penalty, and checks early stopping condition.
 */
export function recordAssessmentAnswer(
  session: AssessmentSession,
  userAnswer: number,
  latencyMs: number,
  profile: LearnerProfile
): AssessmentAnswerResult {
  if (session.status !== 'in_progress' || session.currentQuestionIndex >= session.totalQuestions) {
    return {
      updatedSession: session,
      updatedProfile: profile,
      isCorrect: false,
      rapidGuess: false,
      isCompleted: session.status === 'completed',
    };
  }

  const currentQ = session.questions[session.currentQuestionIndex];
  const dimension = (currentQ.subTrack as SkillDimension) || 'add_sub_non_bridging';
  const isCorrect = userAnswer === currentQ.correctAnswer;
  const rapidGuess = latencyMs < 500 && !isCorrect;

  const response = {
    questionId: currentQ.id,
    dimension,
    userAnswer,
    correctAnswer: currentQ.correctAnswer,
    isCorrect,
    latencyMs,
    rapidGuess,
  };

  const updatedResponses = [...session.responses, response];
  const nextIndex = session.currentQuestionIndex + 1;

  // Update learner profile estimate for this dimension
  const existingSkill = profile.skills[dimension];
  const updatedSkill = updateSkillEstimate(
    existingSkill,
    isCorrect,
    latencyMs,
    currentQ.targetTimeSeconds * 1000
  );

  const updatedSkills = {
    ...profile.skills,
    [dimension]: updatedSkill,
  };

  // Check early stopping criterion:
  // Must have answered at least 8 questions.
  // If user has 8+ answers and >= 85% accuracy with average confidence > 0.82
  let earlyStopped = false;
  let isCompleted = false;

  if (nextIndex >= 8) {
    const correctCount = updatedResponses.filter((r) => r.isCorrect).length;
    const accuracy = correctCount / updatedResponses.length;
    
    // Check if tested skills have stabilized high confidence or consistent master performance
    const testedDimensions = Array.from(new Set(updatedResponses.map((r) => r.dimension)));
    const avgConfidence =
      testedDimensions.reduce((acc, dim) => acc + (updatedSkills[dim]?.confidence || 0), 0) /
      testedDimensions.length;

    if (accuracy >= 0.875 && avgConfidence >= 0.80 && nextIndex >= 10) {
      earlyStopped = true;
      isCompleted = true;
    }
  }

  if (nextIndex >= session.totalQuestions) {
    isCompleted = true;
  }

  const updatedSession: AssessmentSession = {
    ...session,
    responses: updatedResponses,
    currentQuestionIndex: nextIndex,
    earlyStopped,
    status: isCompleted ? 'completed' : 'in_progress',
    completedAt: isCompleted ? Date.now() : undefined,
  };

  let updatedProfile: LearnerProfile = {
    ...profile,
    updatedAt: Date.now(),
    skills: updatedSkills,
  };

  if (isCompleted) {
    const baselineReport = generateBaselineReport(updatedSession, updatedProfile);
    updatedProfile = {
      ...updatedProfile,
      baselineReport,
      assessmentHistory: [updatedSession, ...updatedProfile.assessmentHistory],
    };
  }

  return {
    updatedSession,
    updatedProfile,
    isCorrect,
    rapidGuess,
    isCompleted,
  };
}

/**
 * Generates an actionable BaselineReport from the assessment responses and skill ratings.
 */
export function generateBaselineReport(
  session: AssessmentSession,
  profile: LearnerProfile
): BaselineReport {
  const testedDimensions = Array.from(new Set(session.responses.map((r) => r.dimension)));

  // Calculate weighted overall theta
  let totalTheta = 0;
  let count = 0;
  for (const dim of testedDimensions) {
    const skill = profile.skills[dim];
    if (skill && skill.totalAttempts > 0) {
      totalTheta += skill.theta;
      count++;
    }
  }

  const overallTheta = count > 0 ? Number((totalTheta / count).toFixed(2)) : 0.0;

  // Determine overall tier
  let overallTier = 'Apprentice';
  if (overallTheta >= 2.0) overallTier = 'Grandmaster Aspirant';
  else if (overallTheta >= 1.2) overallTier = 'Advanced Mentalist';
  else if (overallTheta >= 0.4) overallTier = 'Proficient Practitioner';
  else if (overallTheta >= -0.5) overallTier = 'Developing Explorer';

  // Identify strengths: highest theta dimensions
  const sortedByTheta = [...testedDimensions].sort(
    (a, b) => (profile.skills[b]?.theta || 0) - (profile.skills[a]?.theta || 0)
  );

  const strengths = sortedByTheta.slice(0, 2).map((dim) => {
    const skill = profile.skills[dim];
    return {
      dimension: dim,
      label: getFriendlyDimensionName(dim),
      theta: skill.theta,
      detail: `Strong accuracy (${skill.accuracy}%) and solid mental fluency.`,
    };
  });

  // Identify priority gaps: lowest theta or lowest accuracy dimensions
  const gaps = [...testedDimensions]
    .sort((a, b) => (profile.skills[a]?.theta || 0) - (profile.skills[b]?.theta || 0))
    .filter((dim) => (profile.skills[dim]?.accuracy || 0) < 85 || (profile.skills[dim]?.theta || 0) < 0.8)
    .slice(0, 2)
    .map((dim) => {
      const skill = profile.skills[dim];
      return {
        dimension: dim,
        label: getFriendlyDimensionName(dim),
        theta: skill.theta,
        detail: `Accuracy at ${skill.accuracy}%, candidate for targeted spaced practice.`,
      };
    });

  // If no gaps below threshold, pick the two lowest relative skills
  if (gaps.length === 0 && sortedByTheta.length >= 2) {
    const lowest = sortedByTheta.slice(-2).reverse();
    for (const dim of lowest) {
      const skill = profile.skills[dim];
      gaps.push({
        dimension: dim,
        label: getFriendlyDimensionName(dim),
        theta: skill.theta,
        detail: 'Solid foundation, ready for higher-speed latency compression.',
      });
    }
  }

  // Recommended pace
  const avgLatency =
    session.responses.reduce((acc, r) => acc + r.latencyMs, 0) /
    Math.max(1, session.responses.length);

  let recommendedDailyPaceMinutes = 15;
  if (avgLatency > 5000 || overallTheta < -0.5) {
    recommendedDailyPaceMinutes = 10; // Gentle, low cognitive fatigue
  } else if (overallTheta > 1.5) {
    recommendedDailyPaceMinutes = 20; // Ambitious practice
  }

  // First week roadmap
  const roadmap: string[] = [
    `Day 1-2: Solidify foundations with warm-up review and ${gaps[0]?.label || 'core addition'}.`,
    `Day 3-4: Target gap ${gaps[1]?.label || gaps[0]?.label || 'times tables'} with strategy breakdown.`,
    `Day 5-6: Mixed retrieval drills interleaving strengths with decay prevention.`,
    `Day 7: First weekly Anzan working memory test and progress calibration.`,
  ];

  return {
    assessedAt: Date.now(),
    overallTheta,
    overallTier,
    strengths,
    priorityGaps: gaps,
    recommendedDailyPaceMinutes,
    firstWeekRoadmap: roadmap,
  };
}

function getFriendlyDimensionName(dim: SkillDimension): string {
  switch (dim) {
    case 'add_sub_non_bridging': return 'Single-Digit Add/Sub';
    case 'add_sub_bridging_decade': return 'Decade Bridging';
    case 'add_sub_complements_100': return 'Base-100 Complements';
    case 'add_sub_multidigit_l2r': return 'Left-to-Right Addition';
    case 'add_sub_mixed_chain': return 'Running Multi-Term Chains';
    case 'mult_foundations': return 'Basic Tables (2-5, 10)';
    case 'mult_core_tables': return 'Core Times Tables (6-9, 12)';
    case 'mult_teen_tables': return 'Teen Tables (13-19)';
    case 'mult_decade_ext': return 'Decade Multiplication';
    case 'squares_ending_5': return 'Squares Ending in 5';
    case 'squares_near_50': return 'Base 50 Squares';
    case 'squares_near_100': return 'Base 100 Squares';
    case 'squares_duplex_general': return 'Duplex Mental Squares';
    case 'cubes_anchors': return 'Anchor Cubes';
    case 'cubes_advanced': return 'Advanced Cubes';
    case 'anzan_stream': return 'Anzan Memory Stream';
  }
}
