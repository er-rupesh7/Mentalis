/**
 * Branching Adaptive Diagnostic Engine for Mentalis
 * Conducts dynamic 10-20 minute onboarding assessments across addition/subtraction,
 * multiplication (1-100 x 1-20), squares (1-100), cubes (1-100), and working memory.
 * Evaluates speed, accuracy, confusion patterns, hesitation, and cognitive archetypes.
 */

import { Question } from './types';
import {
  AssessmentSession,
  AssessmentResponse,
  BaselineReport,
  LearnerProfile,
  SkillDimension,
  updateSkillEstimate,
} from './learnerModel';
import {
  FactKey,
  FactMemoryState,
  createInitialFactMemoryState,
  updateFactMemoryStateWithAttempt,
} from './factModel';
import { generateQuestionFromFact } from './factEngine';

export type LearnerArchetype =
  | 'accurate_but_slow'
  | 'fast_but_careless'
  | 'missing_strategy'
  | 'missing_fact'
  | 'confuses_nearby_facts'
  | 'ready_for_advanced';

export type DiagnosticDomain =
  | 'add_sub'
  | 'multiplication'
  | 'squares'
  | 'cubes'
  | 'working_memory';

// Domain rotation to feel randomized while guaranteeing balanced internal distribution
const BALANCED_DOMAIN_SEQUENCE: DiagnosticDomain[] = [
  'add_sub',
  'multiplication',
  'squares',
  'multiplication',
  'cubes',
  'add_sub',
  'multiplication',
  'squares',
  'working_memory',
  'multiplication',
  'squares',
  'cubes',
  'multiplication',
  'add_sub',
  'multiplication',
  'squares',
  'cubes',
  'working_memory',
  'multiplication',
  'multiplication',
];

// Difficulty tiered fact pools
const POOL_ADD_SUB = {
  1: [
    { prompt: '4 + 5', answer: 9, dim: 'add_sub_non_bridging' as SkillDimension, subTrack: 'add_sub:level_1' },
    { prompt: '8 - 3', answer: 5, dim: 'add_sub_non_bridging' as SkillDimension, subTrack: 'add_sub:level_1' },
    { prompt: '6 + 3', answer: 9, dim: 'add_sub_non_bridging' as SkillDimension, subTrack: 'add_sub:level_1' },
  ],
  2: [
    { prompt: '15 + 8', answer: 23, dim: 'add_sub_bridging_decade' as SkillDimension, subTrack: 'add_sub:level_2' },
    { prompt: '34 - 7', answer: 27, dim: 'add_sub_bridging_decade' as SkillDimension, subTrack: 'add_sub:level_2' },
    { prompt: '100 - 36', answer: 64, dim: 'add_sub_complements_100' as SkillDimension, subTrack: 'add_sub:level_3' },
  ],
  3: [
    { prompt: '47 + 38', answer: 85, dim: 'add_sub_multidigit_l2r' as SkillDimension, subTrack: 'add_sub:level_4' },
    { prompt: '92 - 47', answer: 45, dim: 'add_sub_multidigit_l2r' as SkillDimension, subTrack: 'add_sub:level_4' },
    { prompt: '136 + 78', answer: 214, dim: 'add_sub_multidigit_l2r' as SkillDimension, subTrack: 'add_sub:level_4' },
  ],
};

const POOL_MULTIPLICATION: Record<number, FactKey[]> = {
  1: ['mul:4:6', 'mul:5:7', 'mul:3:8', 'mul:2:9', 'mul:10:8'],
  2: ['mul:7:8', 'mul:8:6', 'mul:9:7', 'mul:6:7', 'mul:12:8'],
  3: ['mul:14:6', 'mul:17:8', 'mul:18:7', 'mul:16:9', 'mul:25:6', 'mul:30:7'],
};

const POOL_SQUARES: Record<number, FactKey[]> = {
  1: ['square:4', 'square:5', 'square:8', 'square:10', 'square:12'],
  2: ['square:15', 'square:25', 'square:35', 'square:20'],
  3: ['square:48', 'square:52', 'square:96', 'square:47', 'square:34'],
};

const POOL_CUBES: Record<number, FactKey[]> = {
  1: ['cube:2', 'cube:3', 'cube:4', 'cube:5', 'cube:10'],
  2: ['cube:6', 'cube:8', 'cube:9', 'cube:12'],
  3: ['cube:11', 'cube:15', 'cube:20', 'cube:21'],
};

const POOL_WORKING_MEMORY = [
  { prompt: '3 + 6 + 4', answer: 13, dim: 'anzan_stream' as SkillDimension, subTrack: 'anzan_3_term' },
  { prompt: '7 + 8 + 6', answer: 21, dim: 'anzan_stream' as SkillDimension, subTrack: 'anzan_3_term' },
  { prompt: '15 + 9 + 8', answer: 32, dim: 'anzan_stream' as SkillDimension, subTrack: 'anzan_3_term' },
];

/**
 * Creates a helper Question object from an addition/subtraction probe.
 */
function createAddSubQuestion(id: string, prompt: string, answer: number, dim: SkillDimension, subTrack: string): Question {
  let operandA = answer;
  let operandB = 0;
  let operator: '+' | '-' = '+';

  if (prompt.includes('+')) {
    const parts = prompt.split('+');
    operandA = parseInt(parts[0].trim(), 10) || answer;
    operandB = parseInt(parts[1]?.trim(), 10) || 0;
    operator = '+';
  } else if (prompt.includes('-')) {
    const parts = prompt.split('-');
    operandA = parseInt(parts[0].trim(), 10) || answer;
    operandB = parseInt(parts[1]?.trim(), 10) || 0;
    operator = '-';
  }

  return {
    id,
    prompt,
    operandA,
    operandB,
    operator,
    correctAnswer: answer,
    targetTimeSeconds: 4,
    difficultyRating: 3,
    mentalTip: 'Decompose by place value and accumulate mentally from left to right.',
    steps: [
      {
        stepNumber: 1,
        title: 'Left-to-Right Mental Step',
        subVocalization: `${prompt} = ${answer}`,
        intermediateValue: answer,
        explanation: 'Decompose by place value and accumulate mentally.',
      },
    ],
    strategyTitle: 'Mental Addition / Subtraction',
    module: 'add_sub',
    subTrack,
  };
}

/**
 * Creates an approachable initial question for a given domain.
 */
function getInitialQuestionForDomain(domain: DiagnosticDomain, index: number): Question {
  const qId = `diag_${index + 1}_${domain}`;

  if (domain === 'add_sub') {
    const item = POOL_ADD_SUB[1][index % POOL_ADD_SUB[1].length];
    return createAddSubQuestion(qId, item.prompt, item.answer, item.dim, item.subTrack);
  }

  if (domain === 'working_memory') {
    const item = POOL_WORKING_MEMORY[index % POOL_WORKING_MEMORY.length];
    return createAddSubQuestion(qId, item.prompt, item.answer, item.dim, item.subTrack);
  }

  let factKey: FactKey = 'mul:4:6';
  if (domain === 'multiplication') {
    factKey = POOL_MULTIPLICATION[1][index % POOL_MULTIPLICATION[1].length];
  } else if (domain === 'squares') {
    factKey = POOL_SQUARES[1][index % POOL_SQUARES[1].length];
  } else if (domain === 'cubes') {
    factKey = POOL_CUBES[1][index % POOL_CUBES[1].length];
  }

  const q = generateQuestionFromFact(factKey);
  q.id = qId;
  q.subTrack = factKey;
  return q;
}

/**
 * Creates a dynamic, balanced 10-20 minute adaptive diagnostic session.
 */
export function createAssessmentSession(targetMinutes: number = 15): AssessmentSession {
  // Start with 4 approachable balanced probes
  const initialQuestions: Question[] = [
    getInitialQuestionForDomain('add_sub', 0),
    getInitialQuestionForDomain('multiplication', 1),
    getInitialQuestionForDomain('squares', 2),
    getInitialQuestionForDomain('cubes', 3),
  ];

  return {
    id: `assessment_${Date.now()}`,
    startedAt: Date.now(),
    status: 'in_progress',
    currentQuestionIndex: 0,
    totalQuestions: 20, // targeted dynamic count between 12 and 20
    questions: initialQuestions,
    responses: [],
    earlyStopped: false,
    isPaused: false,
    totalPausedTimeMs: 0,
    targetDurationMinutes: Math.max(10, Math.min(20, targetMinutes)),
  };
}

export interface AssessmentAnswerResult {
  updatedSession: AssessmentSession;
  updatedProfile: LearnerProfile;
  initialFactMemoryMap?: Record<string, FactMemoryState>;
  isCorrect: boolean;
  rapidGuess: boolean;
  isSkipped: boolean;
  isCompleted: boolean;
}

/**
 * Computes the domain level based on performance.
 */
function getDomainLevel(responses: AssessmentResponse[], domain: DiagnosticDomain): number {
  const domainResponses = responses.filter((r) => {
    if (domain === 'add_sub') return r.dimension.startsWith('add_sub');
    if (domain === 'multiplication') return r.dimension.startsWith('mult');
    if (domain === 'squares') return r.dimension.startsWith('squares');
    if (domain === 'cubes') return r.dimension.startsWith('cubes');
    return r.dimension === 'anzan_stream';
  });

  if (domainResponses.length === 0) return 1;

  const recent = domainResponses.slice(-2);
  const allCorrect = recent.every((r) => r.isCorrect && !r.isSkipped);
  const fast = recent.every((r) => r.latencyMs < 3000);
  const struggling = recent.some((r) => !r.isCorrect || r.isSkipped);

  if (allCorrect && fast && domainResponses.length >= 2) return 3;
  if (allCorrect || domainResponses.length >= 1) return 2;
  if (struggling) return 1;

  return 2;
}

/**
 * Checks if a domain has achieved high confidence to avoid redundant over-testing.
 */
function isDomainCalibrated(responses: AssessmentResponse[], domain: DiagnosticDomain): boolean {
  const domainResponses = responses.filter((r) => {
    if (domain === 'add_sub') return r.dimension.startsWith('add_sub');
    if (domain === 'multiplication') return r.dimension.startsWith('mult');
    if (domain === 'squares') return r.dimension.startsWith('squares');
    if (domain === 'cubes') return r.dimension.startsWith('cubes');
    return r.dimension === 'anzan_stream';
  });

  if (domainResponses.length >= 3) {
    const correctRatio = domainResponses.filter((r) => r.isCorrect).length / domainResponses.length;
    if (correctRatio >= 0.85 || correctRatio <= 0.25) return true;
  }
  return false;
}

/**
 * Generates the next adaptive question maintaining curriculum balance.
 */
function getNextAdaptiveQuestion(
  responses: AssessmentResponse[],
  existingQuestions: Question[],
  questionIndex: number
): Question {
  const askedSubTracks = new Set(existingQuestions.map((q) => q.subTrack));

  // Determine domain from sequence, skipping calibrated domains if possible
  let domain = BALANCED_DOMAIN_SEQUENCE[questionIndex % BALANCED_DOMAIN_SEQUENCE.length];
  if (isDomainCalibrated(responses, domain)) {
    const uncalibrated = BALANCED_DOMAIN_SEQUENCE.find((d) => !isDomainCalibrated(responses, d));
    if (uncalibrated) domain = uncalibrated;
  }

  const level = getDomainLevel(responses, domain);
  const qId = `diag_${existingQuestions.length + 1}_${domain}`;

  if (domain === 'add_sub') {
    const pool = POOL_ADD_SUB[level as 1 | 2 | 3];
    const candidate = pool.find((item) => !askedSubTracks.has(item.prompt)) || pool[0];
    return createAddSubQuestion(qId, candidate.prompt, candidate.answer, candidate.dim, candidate.prompt);
  }

  if (domain === 'working_memory') {
    const candidate = POOL_WORKING_MEMORY.find((item) => !askedSubTracks.has(item.prompt)) || POOL_WORKING_MEMORY[0];
    return createAddSubQuestion(qId, candidate.prompt, candidate.answer, candidate.dim, candidate.prompt);
  }

  let factKey: FactKey = 'mul:7:8';
  if (domain === 'multiplication') {
    const pool = POOL_MULTIPLICATION[level as 1 | 2 | 3] || POOL_MULTIPLICATION[2];
    factKey = pool.find((k) => !askedSubTracks.has(k)) || pool[0];
  } else if (domain === 'squares') {
    const pool = POOL_SQUARES[level as 1 | 2 | 3] || POOL_SQUARES[2];
    factKey = pool.find((k) => !askedSubTracks.has(k)) || pool[0];
  } else if (domain === 'cubes') {
    const pool = POOL_CUBES[level as 1 | 2 | 3] || POOL_CUBES[2];
    factKey = pool.find((k) => !askedSubTracks.has(k)) || pool[0];
  }

  const q = generateQuestionFromFact(factKey);
  q.id = qId;
  q.subTrack = factKey;
  return q;
}

/**
 * Classifies cognitive learner archetype from assessment telemetry.
 */
export function classifyLearnerArchetype(responses: AssessmentResponse[]): LearnerArchetype {
  if (responses.length === 0) return 'accurate_but_slow';

  const answered = responses.filter((r) => !r.isSkipped);
  const correctCount = answered.filter((r) => r.isCorrect).length;
  const accuracy = answered.length > 0 ? correctCount / answered.length : 0;
  const latencies = answered.map((r) => r.latencyMs);
  const avgLatency = latencies.length > 0 ? latencies.reduce((a, b) => a + b, 0) / latencies.length : 3000;
  const rapidGuesses = responses.filter((r) => r.rapidGuess).length;

  if (rapidGuesses >= 2 || (accuracy < 0.70 && avgLatency < 1800)) {
    return 'fast_but_careless';
  }

  // Check confusion with neighboring facts
  const confusedNearby = responses.some((r) => r.errorPattern === 'adjacent_table_confusion' || r.errorPattern === 'adjacent_multiplier_confusion');
  if (confusedNearby) {
    return 'confuses_nearby_facts';
  }

  if (accuracy >= 0.85 && avgLatency > 3500) {
    return 'accurate_but_slow';
  }

  // Check if failed strategic decomposition (teen tables or 2-digit squares)
  const strategicResponses = responses.filter(
    (r) => r.dimension === 'mult_teen_tables' || r.dimension === 'squares_near_50' || r.dimension === 'squares_ending_5'
  );
  if (strategicResponses.length >= 2 && strategicResponses.every((r) => !r.isCorrect)) {
    return 'missing_strategy';
  }

  if (accuracy < 0.75) {
    return 'missing_fact';
  }

  if (accuracy >= 0.88 && avgLatency <= 2400) {
    return 'ready_for_advanced';
  }

  return 'accurate_but_slow';
}

/**
 * Helper to resolve dimension from question subTrack.
 */
function resolveDimensionFromQuestion(q: Question): SkillDimension {
  if (q.module === 'add_sub') {
    if (q.prompt.includes('100 -')) return 'add_sub_complements_100';
    if (q.prompt.length >= 7) return 'add_sub_multidigit_l2r';
    return 'add_sub_non_bridging';
  }

  if (q.subTrack) {
    if (q.subTrack.startsWith('mul:')) {
      const p = q.subTrack.split(':');
      const tbl = parseInt(p[1], 10);
      const mult = parseInt(p[2], 10);
      if (tbl <= 5 && mult <= 5) return 'mult_foundations';
      if (mult > 12 || tbl > 12) return 'mult_teen_tables';
      return 'mult_core_tables';
    }
    if (q.subTrack.startsWith('square:')) {
      const n = parseInt(q.subTrack.replace('square:', ''), 10);
      if (n % 10 === 5) return 'squares_ending_5';
      if (n >= 40 && n <= 60) return 'squares_near_50';
      if (n >= 80 && n <= 99) return 'squares_near_100';
      return 'squares_ending_5';
    }
    if (q.subTrack.startsWith('cube:')) {
      return 'cubes_anchors';
    }
  }

  return 'mult_core_tables';
}

/**
 * Records an answer for the current diagnostic question with dynamic branching.
 */
export function recordAssessmentAnswer(
  session: AssessmentSession,
  userAnswer: number,
  latencyMs: number,
  profile: LearnerProfile,
  isSkipped: boolean = false
): AssessmentAnswerResult {
  if (session.status !== 'in_progress' || session.currentQuestionIndex >= session.questions.length) {
    return {
      updatedSession: session,
      updatedProfile: profile,
      isCorrect: false,
      rapidGuess: false,
      isSkipped: false,
      isCompleted: session.status === 'completed',
    };
  }

  const currentQ = session.questions[session.currentQuestionIndex];
  const isCorrect = !isSkipped && userAnswer === currentQ.correctAnswer;
  const rapidGuess = !isSkipped && latencyMs < 500 && !isCorrect;

  const dimension = resolveDimensionFromQuestion(currentQ);

  // Detect error pattern if wrong multiplication fact
  let errorPattern: string | undefined;
  if (!isCorrect && !isSkipped && currentQ.subTrack?.startsWith('mul:')) {
    const parts = currentQ.subTrack.split(':');
    const tbl = parseInt(parts[1], 10);
    const mult = parseInt(parts[2], 10);
    if (userAnswer === tbl * (mult + 1) || userAnswer === tbl * (mult - 1)) {
      errorPattern = 'adjacent_multiplier_confusion';
    } else if (userAnswer === (tbl + 1) * mult || userAnswer === (tbl - 1) * mult) {
      errorPattern = 'adjacent_table_confusion';
    }
  }

  const response: AssessmentResponse = {
    questionId: currentQ.id,
    dimension,
    userAnswer: isSkipped ? -1 : userAnswer,
    correctAnswer: currentQ.correctAnswer,
    isCorrect,
    latencyMs,
    rapidGuess,
    isSkipped,
    factKey: currentQ.subTrack,
    errorPattern,
  };

  const updatedResponses = [...session.responses, response];
  const nextIndex = session.currentQuestionIndex + 1;

  // Update learner profile estimate
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

  const currentQuestions = [...session.questions];
  let isCompleted = false;
  let earlyStopped = false;

  // Check early stopping criteria:
  // If answered >= 12 questions and all major domains show clear stabilization
  if (nextIndex >= 12) {
    const domainsToCheck: DiagnosticDomain[] = ['add_sub', 'multiplication', 'squares', 'cubes'];
    const allCalibrated = domainsToCheck.every((d) => isDomainCalibrated(updatedResponses, d));
    if (allCalibrated || nextIndex >= session.totalQuestions) {
      earlyStopped = true;
      isCompleted = true;
    }
  }

  if (nextIndex >= session.totalQuestions) {
    isCompleted = true;
  }

  // If not completed, dynamically generate and append next question
  if (!isCompleted && nextIndex >= currentQuestions.length) {
    const nextQ = getNextAdaptiveQuestion(updatedResponses, currentQuestions, nextIndex);
    currentQuestions.push(nextQ);
  }

  const updatedSession: AssessmentSession = {
    ...session,
    questions: currentQuestions,
    responses: updatedResponses,
    currentQuestionIndex: nextIndex,
    earlyStopped,
    status: isCompleted ? 'completed' : 'in_progress',
    completedAt: isCompleted ? Date.now() : undefined,
  };

  // Build fact memory map seed from assessment responses
  const initialFactMemoryMap: Record<string, FactMemoryState> = {};
  for (const resp of updatedResponses) {
    const q = session.questions.find((x) => x.id === resp.questionId);
    if (q && q.subTrack && (q.subTrack.startsWith('mul:') || q.subTrack.startsWith('square:') || q.subTrack.startsWith('cube:'))) {
      const factKey = q.subTrack as FactKey;
      const initial = createInitialFactMemoryState(factKey);
      initialFactMemoryMap[factKey] = updateFactMemoryStateWithAttempt(initial, {
        timestamp: Date.now(),
        userAnswer: resp.userAnswer,
        correctAnswer: resp.correctAnswer,
        isCorrect: resp.isCorrect,
        latencyMs: resp.latencyMs,
        usedHint: false,
        wasShownStrategy: false,
        isSkipped: resp.isSkipped,
        errorType: resp.rapidGuess ? 'rapid_guess' : resp.isCorrect ? undefined : 'calculation_slip',
      });
    }
  }

  let updatedProfile: LearnerProfile = {
    ...profile,
    updatedAt: Date.now(),
    skills: updatedSkills,
  };

  if (isCompleted) {
    const archetype = classifyLearnerArchetype(updatedResponses);
    const baselineReport = generateBaselineReport(updatedSession, updatedProfile, archetype);
    updatedProfile = {
      ...updatedProfile,
      baselineReport,
      assessmentHistory: [updatedSession, ...updatedProfile.assessmentHistory],
    };
  }

  return {
    updatedSession,
    updatedProfile,
    initialFactMemoryMap,
    isCorrect,
    rapidGuess,
    isSkipped,
    isCompleted,
  };
}

/**
 * Records a Skip action on the current assessment question.
 */
export function recordAssessmentSkip(
  session: AssessmentSession,
  profile: LearnerProfile
): AssessmentAnswerResult {
  const currentQ = session.questions[session.currentQuestionIndex];
  const latency = (currentQ?.targetTimeSeconds || 4) * 1000;
  return recordAssessmentAnswer(session, -1, latency, profile, true);
}

/**
 * Generates an actionable, learner-friendly BaselineReport with personalized fact breakdown.
 */
export function generateBaselineReport(
  session: AssessmentSession,
  profile: LearnerProfile,
  archetype?: LearnerArchetype
): BaselineReport {
  const testedDimensions = Array.from(new Set(session.responses.map((r) => r.dimension)));

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

  let overallTier = 'Apprentice';
  if (overallTheta >= 2.0) overallTier = 'Grandmaster Aspirant';
  else if (overallTheta >= 1.2) overallTier = 'Advanced Mentalist';
  else if (overallTheta >= 0.4) overallTier = 'Proficient Practitioner';
  else if (overallTheta >= -0.5) overallTier = 'Developing Explorer';

  const sortedByTheta = [...testedDimensions].sort(
    (a, b) => (profile.skills[b]?.theta || 0) - (profile.skills[a]?.theta || 0)
  );

  const strengths = sortedByTheta.slice(0, 2).map((dim) => {
    const skill = profile.skills[dim];
    return {
      dimension: dim,
      label: getFriendlyDimensionName(dim),
      theta: skill.theta,
      detail: `Consistent accuracy (${skill.accuracy}%) and solid mental fluency.`,
    };
  });

  const gaps = [...testedDimensions]
    .sort((a, b) => (profile.skills[a]?.theta || 0) - (profile.skills[b]?.theta || 0))
    .slice(0, 2)
    .map((dim) => {
      const skill = profile.skills[dim];
      return {
        dimension: dim,
        label: getFriendlyDimensionName(dim),
        theta: skill.theta,
        detail: `Priority focus: apply mental decomposition to strengthen recall.`,
      };
    });

  const arch = archetype || classifyLearnerArchetype(session.responses);

  // Extract specific facts for personalization
  const fastButCarelessFacts: string[] = [];
  const accurateButSlowFacts: string[] = [];
  const skippedFacts: string[] = [];
  const factsNeedingStrategy: string[] = [];

  for (const resp of session.responses) {
    const key = resp.factKey || resp.questionId;
    if (resp.isSkipped) {
      skippedFacts.push(key);
    } else if (resp.rapidGuess || (!resp.isCorrect && resp.latencyMs < 1800)) {
      fastButCarelessFacts.push(key);
    } else if (resp.isCorrect && resp.latencyMs > 3500) {
      accurateButSlowFacts.push(key);
    } else if (!resp.isCorrect && (resp.dimension === 'mult_teen_tables' || resp.dimension.startsWith('squares'))) {
      factsNeedingStrategy.push(key);
    }
  }

  let paceMinutes = 15;
  if (arch === 'accurate_but_slow') paceMinutes = 12;
  else if (arch === 'fast_but_careless') paceMinutes = 15;
  else if (arch === 'ready_for_advanced') paceMinutes = 20;

  const roadmap: string[] = [
    'Day 1–2: Lock in high-frequency multiplication anchor facts (tables 1–12 × 1–20).',
    'Day 3–4: Master split-and-add for teen tables and base-50 squares.',
    'Day 5–6: Introduce near-100 squares and core cube anchors.',
    'Day 7: Full mixed speed retrieval challenge and mastery check.',
  ];

  // Kind, encouraging personalized summary message (zero IQ/brain claims)
  let summaryMessage = 'You already recall core facts reliably. We will focus on building fast decomposition methods for teen multipliers and squares, followed by spaced retrieval.';
  if (arch === 'accurate_but_slow') {
    summaryMessage = 'Your arithmetic accuracy is high. Our training will focus on eliminating hesitation through rapid phonological anchors and split-and-add.';
  } else if (arch === 'fast_but_careless') {
    summaryMessage = 'You calculate with high velocity. We will add quick parity and magnitude verification checks so your speed translates into rock-solid accuracy.';
  } else if (arch === 'ready_for_advanced') {
    summaryMessage = 'Superb baseline recall across all tables. You are ready for advanced duplex squares, 3-digit mental chains, and rapid speed trials.';
  }

  return {
    assessedAt: Date.now(),
    overallTheta,
    overallTier: `${overallTier} (${arch.replace(/_/g, ' ')})`,
    archetype: arch,
    strengths,
    priorityGaps: gaps,
    fastButCarelessFacts: Array.from(new Set(fastButCarelessFacts)).slice(0, 5),
    accurateButSlowFacts: Array.from(new Set(accurateButSlowFacts)).slice(0, 5),
    skippedFacts: Array.from(new Set(skippedFacts)).slice(0, 5),
    factsNeedingStrategy: Array.from(new Set(factsNeedingStrategy)).slice(0, 5),
    recommendedDailyPaceMinutes: paceMinutes,
    firstWeekRoadmap: roadmap,
    summaryMessage,
  };
}

function getFriendlyDimensionName(dimension: SkillDimension): string {
  const map: Record<SkillDimension, string> = {
    add_sub_non_bridging: 'Foundational Add/Sub',
    add_sub_bridging_decade: 'Decade Crossing',
    add_sub_complements_100: 'Base-100 Complements',
    add_sub_multidigit_l2r: 'Left-to-Right Multi-Digit',
    add_sub_mixed_chain: 'Running Mental Chains',
    mult_foundations: 'Foundation Tables (2, 3, 4, 5, 10)',
    mult_core_tables: 'Core Times Tables (6, 7, 8, 9, 11, 12)',
    mult_teen_tables: 'Teen Multipliers (x13-x20)',
    mult_decade_ext: 'Decade & Quarter Scaling',
    squares_ending_5: 'Squares Ending in 5',
    squares_near_50: 'Squares Near 50',
    squares_near_100: 'Squares Near 100',
    squares_duplex_general: 'General 2-Digit Duplex Squares',
    cubes_anchors: 'Benchmark Anchor Cubes',
    cubes_advanced: 'Advanced Cubes',
    anzan_stream: 'Anzan Flash Working Memory',
  };
  return map[dimension] || dimension;
}
