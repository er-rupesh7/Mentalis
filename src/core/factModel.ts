/**
 * Fact-Level Memory Model & Adaptive State for Mentalis
 * Tracks memory stability, forgetting curves, error patterns, and spaced retrieval
 * schedules for individual arithmetic facts (multiplication 1-100 x 1-20, squares 1-100, cubes 1-100).
 */

import { SkillDimension, SkillEstimate, MasteryTier } from './learnerModel';

export type FactType = 'multiplication' | 'square' | 'cube' | 'add_sub';

export type FactKey =
  | `mul:${number}:${number}`
  | `square:${number}`
  | `cube:${number}`
  | `add_sub:level_${number}`;

export type MasteryState = 'unseen' | 'learning' | 'review_due' | 'weak' | 'mastered';

export type LearningPhase = 'introduced' | 'guided' | 'recall' | 'speed' | 'maintenance';

export type FactErrorPatternType =
  | 'adjacent_table_confusion'     // e.g. 7x8 answered with 7x9=63
  | 'adjacent_multiplier_confusion'// e.g. 7x8 answered with 7x7=49
  | 'digit_transposition'          // e.g. 54 answered as 45, 63 as 36
  | 'decade_zero_omission'         // e.g. 30x7 answered as 21 instead of 210
  | 'compensation_direction_error' // e.g. 49x6 = 50x6 + 6 instead of - 6
  | 'square_padding_mistake'       // e.g. 48^2 = 234 instead of 2304
  | 'cube_expansion_mistake'       // e.g. wrong binomial term sign or decade
  | 'rapid_guess'                  // < 500ms with incorrect answer
  | 'hesitant_calculation'         // > 4500ms latency on recall
  | 'calculation_slip';            // minor arithmetic calculation offset

export interface FactAttempt {
  timestamp: number;
  userAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
  latencyMs: number;
  usedHint: boolean;
  wasShownStrategy: boolean;
  isSkipped?: boolean;
  errorType?: FactErrorPatternType;
}

export interface FactMemoryState {
  factKey: FactKey;
  factType: FactType;
  familyId: string;
  operandA: number;
  operandB?: number;
  correctAnswer: number;

  totalAttempts: number;
  correctAttempts: number;
  skipCount: number;
  recentAccuracy: number; // 0 - 100 percentage over recent window
  medianLatencyMs: number;
  recentLatencyMs: number;

  firstSeen: number; // UNIX timestamp ms
  lastSeen: number;
  lastCorrect: number | null;
  lastIncorrect: number | null;
  lastSkipped: number | null;
  consecutiveCorrect: number;
  consecutiveErrors: number;

  stabilityScore: number; // 0.0 to 100.0 (retrieval strength & fluency)
  forgettingRisk: number; // 0.0 to 1.0 (estimated probability of forgetting now)
  nextReviewTimestamp: number; // when spaced retrieval is due
  intervalDays: number; // current spaced review interval in days
  easeFactor: number; // default 2.5 (SM-2 ease)

  masteryState: MasteryState;
  learningPhase: LearningPhase;
  usedHintOrStrategyCount: number;
  isDirectMemory: boolean;
  lastTrickId?: string;
  errorHistory: FactAttempt[];
  commonMistake?: number;
  identifiedErrorPattern?: FactErrorPatternType;
}

export interface FactFamily {
  id: string;
  name: string;
  factType: FactType;
  description: string;
  canonicalStrategyId: string;
  factKeys: FactKey[];
}

export interface PersonalizedQuestionPolicy {
  focusRatio: number;      // e.g. 0.55 weak / due facts
  reviewRatio: number;     // e.g. 0.25 recently learned consolidation
  interleaveRatio: number; // e.g. 0.20 stronger facts
  difficultyAdjustment: 'step_down' | 'hold' | 'step_up';
  recommendedLearningMode: LearningPhase | 'teach_then_recall';
  priorityFactKeys: FactKey[];
  recommendedStrategyIds: string[];
}

/**
 * Parses any string into a valid FactKey and its numeric components.
 */
export function parseFactKey(key: string): {
  isValid: boolean;
  type: FactType | null;
  operandA: number;
  operandB?: number;
} {
  if (key.startsWith('mul:')) {
    const parts = key.split(':');
    if (parts.length === 3) {
      const table = parseInt(parts[1], 10);
      const multiplier = parseInt(parts[2], 10);
      if (!isNaN(table) && !isNaN(multiplier) && table >= 1 && table <= 100 && multiplier >= 1 && multiplier <= 20) {
        return { isValid: true, type: 'multiplication', operandA: table, operandB: multiplier };
      }
    }
  } else if (key.startsWith('square:')) {
    const parts = key.split(':');
    if (parts.length === 2) {
      const n = parseInt(parts[1], 10);
      if (!isNaN(n) && n >= 1 && n <= 100) {
        return { isValid: true, type: 'square', operandA: n };
      }
    }
  } else if (key.startsWith('cube:')) {
    const parts = key.split(':');
    if (parts.length === 2) {
      const n = parseInt(parts[1], 10);
      if (!isNaN(n) && n >= 1 && n <= 100) {
        return { isValid: true, type: 'cube', operandA: n };
      }
    }
  } else if (key.startsWith('add_sub:level_')) {
    const lvl = parseInt(key.replace('add_sub:level_', ''), 10);
    if (!isNaN(lvl) && lvl >= 1 && lvl <= 6) {
      return { isValid: true, type: 'add_sub', operandA: lvl };
    }
  }
  return { isValid: false, type: null, operandA: 0 };
}

export function formatFactKey(type: FactType, operandA: number, operandB?: number): FactKey {
  if (type === 'multiplication') {
    return `mul:${operandA}:${operandB || 1}`;
  }
  if (type === 'square') {
    return `square:${operandA}`;
  }
  if (type === 'cube') {
    return `cube:${operandA}`;
  }
  return `add_sub:level_${operandA}`;
}

export function isValidFactKey(key: string): key is FactKey {
  return parseFactKey(key).isValid;
}

export function getFactCorrectAnswer(factKey: FactKey): number {
  const parsed = parseFactKey(factKey);
  if (!parsed.isValid) return 0;
  if (parsed.type === 'multiplication') {
    return parsed.operandA * (parsed.operandB || 1);
  }
  if (parsed.type === 'square') {
    return parsed.operandA * parsed.operandA;
  }
  if (parsed.type === 'cube') {
    return parsed.operandA * parsed.operandA * parsed.operandA;
  }
  return 0;
}

export function getFactFamilyId(factKey: FactKey): string {
  const parsed = parseFactKey(factKey);
  if (!parsed.isValid) return 'unknown';

  if (parsed.type === 'multiplication') {
    const table = parsed.operandA;
    const mult = parsed.operandB || 1;
    if (mult === 0 || mult === 1 || mult === 2 || mult === 5 || mult === 10) return 'mul_anchor_primary';
    if (mult === 9) return 'mul_anchor_nines';
    if (mult === 11) return 'mul_anchor_elevens';
    if (mult === 12) return 'mul_anchor_twelves';
    if (mult === 15) return 'mul_anchor_fifteens';
    if (mult === 20) return 'mul_anchor_twenties';
    if (table <= 12) return `mul_table_foundations_${table}`;
    if (table <= 20) return `mul_table_teens_${table}`;
    if (table % 10 === 0) return 'mul_table_decades';
    if (table === 25 || table === 50 || table === 75) return 'mul_table_quarters';
    return `mul_table_advanced_${Math.floor(table / 10) * 10}`;
  }

  if (parsed.type === 'square') {
    const n = parsed.operandA;
    if (n <= 20) return 'square_anchors';
    if (n % 10 === 0) return 'square_decades';
    if (n % 10 === 5) return 'square_ending_5';
    if (n >= 41 && n <= 59) return 'square_near_50';
    if (n >= 81 && n <= 99) return 'square_near_100';
    return 'square_general_2digit';
  }

  if (parsed.type === 'cube') {
    const n = parsed.operandA;
    if (n <= 20) return 'cube_anchors';
    if (n % 10 === 0) return 'cube_decades';
    if (Math.abs(n - Math.round(n / 10) * 10) <= 2) return 'cube_near_decade';
    return 'cube_advanced';
  }

  return 'add_sub_general';
}

/**
 * Determines whether a fact is expected to be direct retrieval or strategy calculation.
 */
export function isDirectFactKey(factKey: FactKey): boolean {
  const parsed = parseFactKey(factKey);
  if (!parsed.isValid) return false;
  if (parsed.type === 'multiplication') {
    return parsed.operandA <= 12 && (parsed.operandB || 1) <= 12;
  }
  if (parsed.type === 'square') {
    return parsed.operandA <= 20;
  }
  if (parsed.type === 'cube') {
    return parsed.operandA <= 12 || parsed.operandA % 10 === 0;
  }
  return true;
}

/**
 * Creates initial clean memory state for a given fact.
 */
export function createInitialFactMemoryState(factKey: FactKey): FactMemoryState {
  const parsed = parseFactKey(factKey);
  const type = parsed.type || 'multiplication';
  const correctAnswer = getFactCorrectAnswer(factKey);
  const now = Date.now();

  return {
    factKey,
    factType: type,
    familyId: getFactFamilyId(factKey),
    operandA: parsed.operandA,
    operandB: parsed.operandB,
    correctAnswer,
    totalAttempts: 0,
    correctAttempts: 0,
    skipCount: 0,
    recentAccuracy: 0,
    medianLatencyMs: 0,
    recentLatencyMs: 0,
    firstSeen: now,
    lastSeen: now,
    lastCorrect: null,
    lastIncorrect: null,
    lastSkipped: null,
    consecutiveCorrect: 0,
    consecutiveErrors: 0,
    stabilityScore: 0,
    forgettingRisk: 1.0, // unseen facts have 100% forgetting risk if untested
    nextReviewTimestamp: now,
    intervalDays: 0,
    easeFactor: 2.5,
    masteryState: 'unseen',
    learningPhase: 'introduced',
    usedHintOrStrategyCount: 0,
    isDirectMemory: isDirectFactKey(factKey),
    errorHistory: [],
  };
}

/**
 * Calculates SM-2 and half-life forgetting risk.
 * R = 1 - exp(-ln(2) * deltaT / halfLife)
 */
export function calculateForgettingRisk(lastPracticedMs: number, stabilityScore: number, nowMs: number = Date.now()): number {
  if (lastPracticedMs <= 0) return 1.0;
  const elapsedMinutes = Math.max(0, (nowMs - lastPracticedMs) / 60000);
  // Half-life in minutes proportional to stability (10 to 40,000 minutes ~ 28 days)
  const halfLifeMinutes = Math.max(10, Math.pow(stabilityScore, 1.8) * 15);
  const exponent = (-Math.LN2 * elapsedMinutes) / halfLifeMinutes;
  const retention = Math.exp(exponent);
  return Math.max(0, Math.min(1, 1 - retention));
}

/**
 * Updates a fact memory state after a practice attempt using adaptive spaced retrieval principles.
 */
export function updateFactMemoryStateWithAttempt(
  current: FactMemoryState,
  attempt: FactAttempt
): FactMemoryState {
  const isCorrect = attempt.isCorrect;
  const isSkipped = !!attempt.isSkipped;
  const now = attempt.timestamp;
  const updatedTotal = current.totalAttempts + 1;
  const updatedCorrect = current.correctAttempts + (isCorrect ? 1 : 0);
  const updatedSkips = (current.skipCount || 0) + (isSkipped ? 1 : 0);

  const updatedErrors = isCorrect ? 0 : current.consecutiveErrors + 1;
  const updatedStreak = isCorrect ? current.consecutiveCorrect + 1 : 0;

  // Recent accuracy window (weighted latest)
  const prevAcc = current.recentAccuracy;
  const recentAccuracy = current.totalAttempts === 0
    ? (isCorrect ? 100 : 0)
    : Math.round(prevAcc * 0.7 + (isCorrect ? 100 : 0) * 0.3);

  // Latency tracking
  const recentLatency = current.recentLatencyMs === 0
    ? attempt.latencyMs
    : Math.round(current.recentLatencyMs * 0.6 + attempt.latencyMs * 0.4);
  const medianLatency = current.medianLatencyMs === 0
    ? attempt.latencyMs
    : Math.round((current.medianLatencyMs + attempt.latencyMs) / 2);

  // SM-2 quality score (0 to 5)
  let q = 0;
  if (isSkipped) {
    q = 0; // Skip receives strongest signal for remediation
  } else if (!isCorrect) {
    if (attempt.errorType === 'rapid_guess') q = 1;
    else if (attempt.errorType === 'adjacent_table_confusion' || attempt.errorType === 'digit_transposition') q = 2;
    else q = 1;
  } else {
    if (attempt.usedHint || attempt.wasShownStrategy) q = 3;
    else if (attempt.latencyMs < 2000) q = 5;
    else if (attempt.latencyMs < 3800) q = 4;
    else q = 3;
  }

  // Ease Factor calculation (SM-2)
  let newEase = current.easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  if (newEase < 1.3) newEase = 1.3;
  if (newEase > 3.0) newEase = 3.0;

  // Spaced interval update
  let newIntervalDays = current.intervalDays;
  if (isSkipped) {
    newIntervalDays = 0.02; // ~30 minutes, prompt priority re-test
  } else if (!isCorrect) {
    newIntervalDays = 0.05; // ~1.2 hours, immediate within-session review
  } else {
    if (current.intervalDays === 0) newIntervalDays = 1;
    else if (current.intervalDays <= 1) newIntervalDays = 3;
    else newIntervalDays = Math.round(current.intervalDays * newEase * 10) / 10;
  }

  const nextReviewTimestamp = now + Math.round(newIntervalDays * 24 * 60 * 60 * 1000);

  // Stability Score (0 to 100)
  let stability = current.stabilityScore;
  if (isCorrect) {
    const boost = q === 5 ? 18 : q === 4 ? 12 : 6;
    stability = Math.min(100, stability + boost);
  } else if (isSkipped) {
    stability = Math.max(5, stability - 30);
  } else {
    const penalty = updatedErrors > 1 ? 25 : 15;
    stability = Math.max(5, stability - penalty);
  }

  const forgettingRisk = isSkipped ? 0.95 : calculateForgettingRisk(now, stability, now);

  // Error history and common mistake
  const errorHistory = isCorrect
    ? current.errorHistory
    : [...current.errorHistory.slice(-9), attempt];

  let commonMistake = current.commonMistake;
  if (!isCorrect && !isSkipped) {
    const mistakes = errorHistory.filter((e) => !e.isSkipped).map((e) => e.userAnswer);
    const counts: Record<number, number> = {};
    for (const m of mistakes) counts[m] = (counts[m] || 0) + 1;
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    if (sorted.length > 0 && sorted[0][1] >= 2) {
      commonMistake = parseInt(sorted[0][0], 10);
    }
  }

  // Determine Mastery State
  let masteryState: MasteryState = current.masteryState;
  if (isSkipped || updatedErrors >= 2) {
    masteryState = 'weak';
  } else if (stability >= 80 && updatedStreak >= 3 && medianLatency < 2500) {
    masteryState = 'mastered';
  } else if (updatedTotal >= 1) {
    masteryState = 'learning';
  }

  // Determine Learning Phase
  let learningPhase: LearningPhase = current.learningPhase;
  if (isSkipped || attempt.wasShownStrategy || attempt.usedHint) {
    learningPhase = 'guided';
  } else if (masteryState === 'mastered') {
    learningPhase = medianLatency < 1800 ? 'maintenance' : 'speed';
  } else if (updatedStreak >= 2) {
    learningPhase = 'recall';
  }

  return {
    ...current,
    totalAttempts: updatedTotal,
    correctAttempts: updatedCorrect,
    skipCount: updatedSkips,
    recentAccuracy,
    medianLatencyMs: medianLatency,
    recentLatencyMs: recentLatency,
    lastSeen: now,
    lastCorrect: isCorrect ? now : current.lastCorrect,
    lastIncorrect: isCorrect ? current.lastIncorrect : (!isSkipped ? now : current.lastIncorrect),
    lastSkipped: isSkipped ? now : (current.lastSkipped || null),
    consecutiveCorrect: updatedStreak,
    consecutiveErrors: updatedErrors,
    stabilityScore: Math.round(stability),
    forgettingRisk,
    nextReviewTimestamp,
    intervalDays: newIntervalDays,
    easeFactor: Number(newEase.toFixed(2)),
    masteryState,
    learningPhase,
    usedHintOrStrategyCount: current.usedHintOrStrategyCount + (attempt.usedHint || attempt.wasShownStrategy ? 1 : 0),
    isDirectMemory: current.isDirectMemory ?? isDirectFactKey(current.factKey),
    errorHistory,
    commonMistake,
    identifiedErrorPattern: attempt.errorType || current.identifiedErrorPattern,
  };
}

/**
 * Derives aggregate high-level SkillEstimate objects from the granular FactMemoryMap.
 * Keeps broad learner model views cleanly synchronized with fact reality.
 */
export function deriveAggregateSkillsFromFacts(
  facts: Record<string, FactMemoryState>
): Record<SkillDimension, SkillEstimate> {
  const allFactStates = Object.values(facts);

  // Group facts by corresponding SkillDimension
  const dimBuckets: Record<SkillDimension, FactMemoryState[]> = {
    add_sub_non_bridging: [],
    add_sub_bridging_decade: [],
    add_sub_complements_100: [],
    add_sub_multidigit_l2r: [],
    add_sub_mixed_chain: [],
    mult_foundations: [],
    mult_core_tables: [],
    mult_teen_tables: [],
    mult_decade_ext: [],
    squares_ending_5: [],
    squares_near_50: [],
    squares_near_100: [],
    squares_duplex_general: [],
    cubes_anchors: [],
    cubes_advanced: [],
    anzan_stream: [],
  };

  for (const f of allFactStates) {
    if (f.factType === 'multiplication') {
      const t = f.operandA;
      if ([2, 3, 4, 5, 10].includes(t)) dimBuckets.mult_foundations.push(f);
      else if ([6, 7, 8, 9, 11, 12].includes(t)) dimBuckets.mult_core_tables.push(f);
      else if (t >= 13 && t <= 19) dimBuckets.mult_teen_tables.push(f);
      else dimBuckets.mult_decade_ext.push(f);
    } else if (f.factType === 'square') {
      const n = f.operandA;
      if (n % 10 === 5) dimBuckets.squares_ending_5.push(f);
      else if (n >= 40 && n <= 60) dimBuckets.squares_near_50.push(f);
      else if (n >= 80 && n <= 100) dimBuckets.squares_near_100.push(f);
      else dimBuckets.squares_duplex_general.push(f);
    } else if (f.factType === 'cube') {
      const n = f.operandA;
      if (n <= 12 || n % 10 === 0) dimBuckets.cubes_anchors.push(f);
      else dimBuckets.cubes_advanced.push(f);
    }
  }

  const result: Record<SkillDimension, SkillEstimate> = {} as any;

  (Object.keys(dimBuckets) as SkillDimension[]).forEach((dim) => {
    const bucket = dimBuckets[dim];
    if (bucket.length === 0) {
      result[dim] = {
        dimension: dim,
        theta: 0.0,
        confidence: 0.0,
        totalAttempts: 0,
        correctCount: 0,
        accuracy: 0,
        medianLatencyMs: 2500,
        lastPracticed: 0,
        decayRisk: 'low',
        masteryTier: 'novice',
      };
      return;
    }

    const totalAttempts = bucket.reduce((sum, f) => sum + f.totalAttempts, 0);
    const correctCount = bucket.reduce((sum, f) => sum + f.correctAttempts, 0);
    const accuracy = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;
    const latencies = bucket.filter((f) => f.medianLatencyMs > 0).map((f) => f.medianLatencyMs);
    const medianLatencyMs = latencies.length > 0
      ? Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length)
      : 2500;
    const lastPracticed = Math.max(...bucket.map((f) => f.lastSeen || 0));

    // Calculate aggregate theta (-3.0 to +3.0)
    const accuracyWeight = (accuracy - 50) / 25; // -2.0 to +2.0
    const speedBonus = medianLatencyMs < 1800 ? 0.8 : medianLatencyMs < 2500 ? 0.4 : -0.5;
    const theta = Math.max(-3.0, Math.min(3.0, Number((accuracyWeight + speedBonus).toFixed(2))));

    const confidence = Math.min(1.0, Number((totalAttempts / (bucket.length * 3)).toFixed(2)));

    // Decay risk
    const maxRisk = Math.max(...bucket.map((f) => f.forgettingRisk));
    const decayRisk = maxRisk > 0.6 ? 'critical' : maxRisk > 0.4 ? 'high' : maxRisk > 0.2 ? 'moderate' : 'low';

    // Mastery tier
    let masteryTier: MasteryTier = 'novice';
    if (theta >= 2.0 && accuracy >= 90) masteryTier = 'grandmaster';
    else if (theta >= 1.2 && accuracy >= 85) masteryTier = 'master';
    else if (theta >= 0.4 && accuracy >= 75) masteryTier = 'proficient';
    else if (totalAttempts >= 5) masteryTier = 'developing';

    result[dim] = {
      dimension: dim,
      theta,
      confidence,
      totalAttempts,
      correctCount,
      accuracy,
      medianLatencyMs,
      lastPracticed,
      decayRisk,
      masteryTier,
    };
  });

  return result;
}
