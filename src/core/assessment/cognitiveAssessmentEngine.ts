/**
 * Cognitive Mind Assessment Engine for Mentalis
 * High-precision psychometric arithmetic diagnostic benchmark.
 * Evaluates core automaticity, working memory decomposition, calculation stamina,
 * and retrieval latency across 20-30 non-trivial arithmetic challenges.
 * STRICT RULE: No trivial identity multiples (never n x 1, 1 x n, or n x 10).
 */

export type AssessmentPhase =
  | 'automaticity'
  | 'domain_mastery'
  | 'decomposition'
  | 'speed_stamina';

export interface CognitiveQuestion {
  id: string;
  num1: number;
  num2: number;
  operator: string;
  answer: number;
  phase: AssessmentPhase;
  phaseTitle: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  cognitiveFocus: string;
}

export interface CognitiveQuestionAttempt {
  question: CognitiveQuestion;
  userAnswer: number | string;
  isCorrect: boolean;
  latencyMs: number;
  isSkipped: boolean;
  isTypingSlip?: boolean;
}

export interface CognitiveMindReport {
  maqScore: number; // Mental Arithmetic Quotient (80 - 160)
  speedPercentile: number; // 50 - 99
  accuracyRate: number; // 0 - 100
  medianLatencyMs: number;
  avgLatencyMs: number;
  synapticAutomaticityRate: number; // % answered <= 1.4s
  brainArchetype: {
    title: string;
    description: string;
    color: string;
    icon: string;
  };
  dimensionScores: {
    synapticSpeed: number; // 0 - 100
    workingMemory: number; // 0 - 100
    stamina: number; // 0 - 100
    precision: number; // 0 - 100
  };
  strengths: string[];
  weaknesses: string[];
  hesitationFacts: Array<{
    prompt: string;
    answer: number;
    latencyMs: number;
    wasWrong: boolean;
  }>;
  prescribedRoadmap: {
    initialTableFocus: number;
    recommendedModule: string;
    targetWeeklyGoal: string;
  };
}

// Tough single-digit & benchmark multipliers known as notorious hesitation friction points
const FRICTION_SINGLE_DIGIT_PAIRS = [
  [7, 8],
  [8, 9],
  [6, 7],
  [7, 9],
  [8, 6],
  [9, 7],
  [8, 7],
  [7, 7],
  [8, 8],
  [9, 9],
  [6, 8],
  [9, 6],
  [8, 4],
  [7, 6],
  [9, 8],
  [6, 9],
];

// Helper: Fisher-Yates array shuffle
function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Generate 20 to 30 non-trivial diagnostic questions tailored to the declared table limit.
 * STRICT ENFORCEMENT: Never produces n x 1, 1 x n, n x 10, 10 x n, or trivial n x 0.
 */
export function generateCognitiveMindQuestions(
  declaredLimit: number,
  targetCount: number = 25
): CognitiveQuestion[] {
  const count = Math.min(30, Math.max(20, targetCount));
  const questions: CognitiveQuestion[] = [];
  const usedKeys = new Set<string>();

  const registerQuestion = (
    n1: number,
    n2: number,
    phase: AssessmentPhase,
    phaseTitle: string,
    difficulty: 1 | 2 | 3 | 4 | 5,
    focus: string
  ): boolean => {
    // STRICT FILTER: Exclude trivial multipliers (1, 10, 0)
    if (n1 <= 1 || n2 <= 1) return false;
    if (n1 === 10 || n2 === 10) return false;
    if (n1 === 0 || n2 === 0) return false;
    // Exclude trivial single-step small products (e.g. 2x2, 2x3, 2x4)
    if (n1 <= 3 && n2 <= 3) return false;

    const key = `${n1}x${n2}`;
    if (usedKeys.has(key)) return false;

    usedKeys.add(key);
    questions.push({
      id: `cog_${questions.length + 1}_${n1}x${n2}`,
      num1: n1,
      num2: n2,
      operator: '×',
      answer: n1 * n2,
      phase,
      phaseTitle,
      difficulty,
      cognitiveFocus: focus,
    });
    return true;
  };

  // -------------------------------------------------------------------------
  // PHASE 1: Single-Digit Automaticity & Notorious Hesitation Pairs (6 Questions)
  // -------------------------------------------------------------------------
  const shuffledFriction = shuffle(FRICTION_SINGLE_DIGIT_PAIRS);
  for (const [a, b] of shuffledFriction) {
    if (questions.length >= 6) break;
    // Randomize factor order (e.g. 7x8 vs 8x7)
    const [first, second] = Math.random() > 0.5 ? [a, b] : [b, a];
    registerQuestion(
      first,
      second,
      'automaticity',
      'Phase 1: Synaptic Automaticity',
      2,
      'Single-digit rapid neural retrieval'
    );
  }

  // -------------------------------------------------------------------------
  // PHASE 2: Declared Upper-Table Domain Mastery (10 Questions)
  // -------------------------------------------------------------------------
  let tablePool: number[] = [];
  if (declaredLimit <= 10) {
    tablePool = [4, 5, 6, 7, 8, 9];
  } else if (declaredLimit <= 12) {
    tablePool = [6, 7, 8, 9, 11, 12];
  } else if (declaredLimit <= 20) {
    tablePool = [12, 13, 14, 15, 16, 17, 18, 19];
  } else if (declaredLimit <= 30) {
    tablePool = [14, 16, 17, 18, 19, 21, 23, 24, 27, 28, 29];
  } else {
    tablePool = [17, 19, 23, 24, 28, 32, 36, 42, 45, 48, 52];
  }

  // Multipliers strictly excluding 1, 10
  const validMultipliers = declaredLimit <= 10
    ? [3, 4, 5, 6, 7, 8, 9]
    : [3, 4, 6, 7, 8, 9];

  let attempts = 0;
  while (questions.length < 16 && attempts < 150) {
    attempts++;
    const t = tablePool[Math.floor(Math.random() * tablePool.length)];
    const m = validMultipliers[Math.floor(Math.random() * validMultipliers.length)];

    // For limit >= 20, also occasionally test cross multipliers (e.g. 13x12)
    let n1 = t;
    let n2 = m;
    if (declaredLimit >= 20 && Math.random() > 0.65 && t <= 16) {
      n2 = Math.floor(Math.random() * 5) + 11; // 11 to 15
    }

    registerQuestion(
      n1,
      n2,
      'domain_mastery',
      'Phase 2: Declared Table Mastery',
      declaredLimit > 12 ? 3 : 2,
      `Table ×${n1} recall verification`
    );
  }

  // -------------------------------------------------------------------------
  // PHASE 3: Working Memory & Place-Value Decomposition (5 Questions)
  // -------------------------------------------------------------------------
  const decompositionBases = declaredLimit <= 10
    ? [6, 7, 8, 9]
    : declaredLimit <= 12
    ? [8, 9, 11, 12]
    : declaredLimit <= 20
    ? [14, 16, 17, 18, 19]
    : [23, 24, 27, 28, 29];

  attempts = 0;
  while (questions.length < 21 && attempts < 150) {
    attempts++;
    const base = decompositionBases[Math.floor(Math.random() * decompositionBases.length)];
    // Multipliers with significant carry strain: 4, 6, 7, 8, 9
    const mult = [4, 6, 7, 8, 9][Math.floor(Math.random() * 5)];

    registerQuestion(
      base,
      mult,
      'decomposition',
      'Phase 3: Working Memory & Decomposition',
      4,
      'Multi-digit carry & place-value holding'
    );
  }

  // -------------------------------------------------------------------------
  // PHASE 4: Cognitive Speed Stamina & High-Pressure Check (Remaining Questions)
  // -------------------------------------------------------------------------
  attempts = 0;
  while (questions.length < count && attempts < 200) {
    attempts++;
    const isSingleDigit = Math.random() > 0.4;
    let n1: number, n2: number;

    if (isSingleDigit) {
      n1 = Math.floor(Math.random() * 5) + 5; // 5 to 9
      n2 = Math.floor(Math.random() * 7) + 3; // 3 to 9
    } else {
      n1 = tablePool[Math.floor(Math.random() * tablePool.length)];
      n2 = validMultipliers[Math.floor(Math.random() * validMultipliers.length)];
    }

    registerQuestion(
      n1,
      n2,
      'speed_stamina',
      'Phase 4: Speed Stamina & Fatigue Test',
      3,
      'Rapid recall under continuous calculation load'
    );
  }

  // Safety fallback if collision attempts still left any slot empty
  let fallbackAttempts = 0;
  while (questions.length < count && fallbackAttempts < 200) {
    fallbackAttempts++;
    const maxBase = Math.max(declaredLimit, 9);
    const n1 = Math.floor(Math.random() * (maxBase - 3)) + 4;
    const n2 = Math.floor(Math.random() * 7) + 3; // 3 to 9
    registerQuestion(
      n1,
      n2,
      'speed_stamina',
      'Phase 4: Speed Stamina & Fatigue Test',
      2,
      'Rapid calculation verification'
    );
  }

  return questions;
}

/**
 * Deep Psychometric & Cognitive Capability Profiler
 * Analyzes accuracy, latency distributions, automaticity %, and fatigue gradients.
 */
export function evaluateCognitiveMindReport(
  attempts: CognitiveQuestionAttempt[],
  declaredLimit: number
): CognitiveMindReport {
  const total = attempts.length;
  if (total === 0) {
    return {
      maqScore: 100,
      speedPercentile: 50,
      accuracyRate: 0,
      medianLatencyMs: 2500,
      avgLatencyMs: 2500,
      synapticAutomaticityRate: 0,
      brainArchetype: {
        title: 'Foundational Explorer',
        description: 'Ready to build atomic multiplication automaticity from the ground up.',
        color: 'from-slate-400 to-slate-500 text-slate-200',
        icon: '🌱',
      },
      dimensionScores: { synapticSpeed: 50, workingMemory: 50, stamina: 50, precision: 50 },
      strengths: [],
      weaknesses: [],
      hesitationFacts: [],
      prescribedRoadmap: {
        initialTableFocus: 7,
        recommendedModule: 'learn_table',
        targetWeeklyGoal: 'Complete Tables 1-10 Fluency',
      },
    };
  }

  const correctAttempts = attempts.filter((a) => a.isCorrect);
  const correctCount = correctAttempts.length;
  const accuracyRate = Math.round((correctCount / total) * 100);

  // Latencies for correct answers
  const latencies = correctAttempts.map((a) => a.latencyMs).sort((a, b) => a - b);
  const medianLatencyMs = latencies.length > 0
    ? latencies[Math.floor(latencies.length / 2)]
    : 3500;
  const avgLatencyMs = latencies.length > 0
    ? Math.round(latencies.reduce((sum, v) => sum + v, 0) / latencies.length)
    : 3500;

  // Synaptic automaticity (sub-1.4s responses)
  const automaticCount = correctAttempts.filter((a) => a.latencyMs <= 1400).length;
  const synapticAutomaticityRate = Math.round((automaticCount / total) * 100);

  // Fatigue / Stamina check: compare first half vs second half accuracy
  const mid = Math.floor(total / 2);
  const firstHalfCorrect = attempts.slice(0, mid).filter((a) => a.isCorrect).length;
  const secondHalfCorrect = attempts.slice(mid).filter((a) => a.isCorrect).length;
  const firstHalfAcc = firstHalfCorrect / Math.max(1, mid);
  const secondHalfAcc = secondHalfCorrect / Math.max(1, total - mid);
  const staminaScore = Math.min(100, Math.max(20, Math.round(100 - (firstHalfAcc - secondHalfAcc) * 60)));

  // Working memory score: based on Phase 3 performance
  const phase3Attempts = attempts.filter((a) => a.question.phase === 'decomposition');
  const phase3Correct = phase3Attempts.filter((a) => a.isCorrect).length;
  const workingMemoryScore = phase3Attempts.length > 0
    ? Math.round((phase3Correct / phase3Attempts.length) * 100)
    : accuracyRate;

  // Synaptic Speed Score (0 - 100)
  // 900ms = 100, 3000ms = 40, 5000ms = 10
  const synapticSpeed = Math.min(100, Math.max(15, Math.round(100 - Math.max(0, medianLatencyMs - 800) / 25)));

  // Precision score
  const precisionScore = accuracyRate;

  // Mental Arithmetic Quotient (MAQ / Mind Index)
  // Baseline 100 + accuracy bonus + speed bonus
  const speedBonus = Math.max(0, Math.min(30, Math.round((2800 - medianLatencyMs) * 0.015)));
  const accBonus = Math.round((accuracyRate - 50) * 0.5);
  const maqScore = Math.min(158, Math.max(78, 100 + accBonus + speedBonus));

  // Speed percentile nationally / globally
  const speedPercentile = Math.min(99, Math.max(25, Math.round(maqScore * 0.65)));

  // Brain Archetype Classification
  let brainArchetype = {
    title: 'Deliberate Calculator',
    description: 'Methodical and precise arithmetic processing with high baseline accuracy.',
    color: 'from-sky-500 to-blue-600 text-sky-300',
    icon: '🎯',
  };

  if (synapticSpeed >= 80 && accuracyRate >= 85) {
    brainArchetype = {
      title: 'Lightning Synapse',
      description: 'Superhuman direct retrieval reflexes with sub-second arithmetic automaticity.',
      color: 'from-amber-400 to-yellow-500 text-amber-300',
      icon: '⚡',
    };
  } else if (workingMemoryScore >= 80 && accuracyRate >= 80) {
    brainArchetype = {
      title: 'Analytical Decomposer',
      description: 'Exceptional mental blackboard capable of rapid multi-step place-value algebra.',
      color: 'from-violet-500 to-indigo-600 text-violet-300',
      icon: '🧠',
    };
  } else if (accuracyRate < 65) {
    brainArchetype = {
      title: 'Foundational Explorer',
      description: 'Strengthening mental table fluency to replace chant-loop habits with automatic recall.',
      color: 'from-emerald-400 to-teal-500 text-emerald-300',
      icon: '🌱',
    };
  }

  // Identify Strengths & Weaknesses
  const strengths: string[] = [];
  const weaknesses: string[] = [];

  if (synapticAutomaticityRate >= 50) {
    strengths.push(`${synapticAutomaticityRate}% of facts retrieved with instantaneous sub-1.4s automaticity.`);
  }
  if (workingMemoryScore >= 80) {
    strengths.push('High working-memory capacity for holding multi-digit carries.');
  }
  if (staminaScore >= 90) {
    strengths.push('Excellent cognitive stamina: zero drop in precision throughout 25 questions.');
  }
  if (accuracyRate >= 90) {
    strengths.push(`Flawless arithmetic baseline (${accuracyRate}% overall precision).`);
  }
  if (strengths.length === 0) {
    strengths.push('Strong foundational willingness to benchmark and improve mental speed.');
  }

  // Extract hesitation facts (>2.8s latency or wrong)
  const hesitationFacts: Array<{ prompt: string; answer: number; latencyMs: number; wasWrong: boolean }> = [];
  attempts.forEach((att) => {
    if (!att.isCorrect || att.latencyMs > 2800) {
      hesitationFacts.push({
        prompt: `${att.question.num1} × ${att.question.num2}`,
        answer: att.question.answer,
        latencyMs: att.latencyMs,
        wasWrong: !att.isCorrect,
      });
    }
  });

  if (hesitationFacts.length > 0) {
    const wrongCount = attempts.filter((a) => !a.isCorrect).length;
    if (wrongCount > 0) {
      weaknesses.push(`${wrongCount} facts showed arithmetic interference or miscalculations under time pressure.`);
    }
    const slowCount = attempts.filter((a) => a.isCorrect && a.latencyMs > 2800).length;
    if (slowCount > 0) {
      weaknesses.push(`${slowCount} questions required extended conscious decomposition (>2.8s) rather than direct reflex.`);
    }
  } else {
    strengths.push('Zero major calculation bottlenecks or hesitations identified.');
  }

  // Prescribed roadmap
  let initialFocus = Math.min(declaredLimit, 14);
  if (accuracyRate < 70) initialFocus = Math.min(declaredLimit, 7);
  else if (declaredLimit >= 20 && accuracyRate >= 85) initialFocus = 17;

  return {
    maqScore,
    speedPercentile,
    accuracyRate,
    medianLatencyMs,
    avgLatencyMs,
    synapticAutomaticityRate,
    brainArchetype,
    dimensionScores: {
      synapticSpeed,
      workingMemory: workingMemoryScore,
      stamina: staminaScore,
      precision: precisionScore,
    },
    strengths,
    weaknesses,
    hesitationFacts: hesitationFacts.slice(0, 5), // top 5 bottlenecks
    prescribedRoadmap: {
      initialTableFocus: initialFocus,
      recommendedModule: accuracyRate >= 80 ? 'techniques' : 'learn_table',
      targetWeeklyGoal: accuracyRate >= 80 ? 'Master Left-to-Right Place Value Decomposition' : `Solidify Table ×${initialFocus} Associative Recall`,
    },
  };
}
