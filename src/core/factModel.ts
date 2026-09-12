/**
 * Fact-Level Memory Model & Adaptive State for Mentalis
 * Tracks memory stability, forgetting curves, error patterns, and spaced retrieval
 * schedules for individual arithmetic facts (multiplication 1-100 x 1-20, squares 1-100, cubes 1-100, and add/sub).
 */

import { SkillDimension, SkillEstimate, MasteryTier, evaluateSpeedLadderLevel, TOTAL_SKILL_DIMENSIONS } from './learnerModel';
import { SpeedLadderLevel, CognitiveResponseState } from './types';

export type FactType =
  | 'multiplication'
  | 'square'
  | 'cube'
  | 'add_sub'
  | 'division'
  | 'complements'
  | 'fraction_percentage'
  | 'exam_quant';

export type FactKey =
  | `mul:${number}:${number}`
  | `square:${number}`
  | `cube:${number}`
  | `div:${number}:${number}`
  | `comp:${number}:${number}`
  | `double:${number}`
  | `half:${number}`
  | `frac_pct:${string}`
  | `pct_frac:${string}`
  | `exam:${string}:${string}`
  | `add_sub:level_${number}`
  | `add_sub:non_bridging:${number}:${number}`
  | `add_sub:bridging:${number}:${number}`
  | `add_sub:complements:${number}:${number}`
  | `add_sub:multi_digit_accumulator:${number}:${number}`
  | `add_sub:subtraction_borrowing:${number}:${number}`
  | `add_sub:chain_calculations:${number}:${number}`
  | string;

export type MasteryState = 'unseen' | 'introduced' | 'learning' | 'review' | 'mastered' | 'fragile' | 'weak';

export type LearningPhase = 'teach' | 'guided' | 'recall' | 'speed' | 'mixed_review';

export type FactErrorPatternType =
  | 'adjacent_table_confusion'     // e.g. 7x8 answered with 7x9=63
  | 'adjacent_multiplier_confusion'// e.g. 7x8 answered with 7x7=49
  | 'digit_transposition'          // e.g. 54 answered as 45, 63 as 36
  | 'decade_zero_omission'         // e.g. 30x7 answered as 21 instead of 210
  | 'compensation_direction_error' // e.g. 49x6 = 50x6 + 6 instead of - 6
  | 'half_double_error'            // incorrect halving/doubling step
  | 'square_ending_5_error'        // ending in 5 concatenation mistake
  | 'square_near_50_error'         // near 50 offset mistake
  | 'square_near_100_error'        // near 100 deficit mistake
  | 'square_padding_mistake'       // e.g. 48^2 = 234 instead of 2304
  | 'square_duplex_error'          // duplex / cross-term mistake
  | 'cube_anchor_forgotten'        // base anchor forgotten
  | 'cube_expansion_mistake'       // e.g. wrong binomial term sign or decade
  | 'cube_last_digit_error'        // incorrect last digit check
  | 'add_sub_missed_carry'         // missed carry in addition
  | 'add_sub_borrow_omission'      // borrow omitted in subtraction
  | 'add_sub_complement_confusion' // base complement calculation error
  | 'add_sub_decade_overshoot'     // jumped over decade boundary
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
  errorType?: FactErrorPatternType | string;
}

export interface FactErrorPattern {
  type: string;
  description: string;
  detectedAt: number;
  userAnswer?: number;
  correctAnswer?: number;
}

export interface FactMemory {
  key: string;
  category: FactType;
  attempts: number;
  correctAttempts: number;
  skippedAttempts: number;
  consecutiveCorrect: number;
  consecutiveIncorrect: number;
  averageLatencyMs: number;
  medianLatencyMs: number;
  recentLatenciesMs: number[];
  firstSeenAt: number;
  lastSeenAt: number;
  lastCorrectAt?: number;
  lastIncorrectAt?: number;
  lastSkippedAt?: number;
  nextReviewAt: number;
  stabilityDays: number;
  difficultyScore: number;
  masteryScore: number;
  masteryState: MasteryState;
  learningPhase: LearningPhase;
  errorPatterns: FactErrorPattern[];
  shownStrategies: string[];
  strategyConfidence: number;
  speedLadderLevel?: SpeedLadderLevel;
  responseClassification?: CognitiveResponseState;
  automaticityScore?: number;
  consecutiveAutomaticCount?: number;

  // Backward-compatible properties
  factKey: FactKey;
  factType: FactType;
  familyId: string;
  operandA: number;
  operandB?: number;
  correctAnswer: number;
  totalAttempts: number;
  skipCount: number;
  recentAccuracy: number;
  recentLatencyMs: number;
  firstSeen: number;
  lastSeen: number;
  lastCorrect: number | null;
  lastIncorrect: number | null;
  lastSkipped: number | null;
  consecutiveErrors: number;
  stabilityScore: number;
  forgettingRisk: number;
  nextReviewTimestamp: number;
  intervalDays: number;
  easeFactor: number;
  usedHintOrStrategyCount: number;
  isDirectMemory: boolean;
  lastTrickId?: string;
  errorHistory: FactAttempt[];
  commonMistake?: number;
  identifiedErrorPattern?: FactErrorPatternType;
}

export type FactMemoryState = FactMemory;

export interface FactFamily {
  id: string;
  name: string;
  factType: FactType;
  description: string;
  canonicalStrategyId: string;
  factKeys: FactKey[];
}

export interface PersonalizedQuestionPolicy {
  focusRatio: number;      // e.g. 0.50 weak / due / skipped facts
  reviewRatio: number;     // e.g. 0.25 recently learned consolidation
  interleaveRatio: number; // e.g. 0.15 stronger facts
  newFactRatio: number;    // e.g. 0.10 new facts
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
  subType?: string;
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
  } else if (key.startsWith('add_sub:')) {
    const parts = key.split(':');
    if (parts.length >= 2) {
      const subType = parts[1];
      const opA = parts.length >= 3 ? parseInt(parts[2], 10) : 1;
      const opB = parts.length >= 4 ? parseInt(parts[3], 10) : 1;
      return {
        isValid: true,
        type: 'add_sub',
        operandA: isNaN(opA) ? 1 : opA,
        operandB: isNaN(opB) ? 1 : opB,
        subType,
      };
    }
  } else if (key.startsWith('div:')) {
    const parts = key.split(':');
    if (parts.length === 3) {
      const dividend = parseInt(parts[1], 10);
      const divisor = parseInt(parts[2], 10);
      if (!isNaN(dividend) && !isNaN(divisor) && divisor > 0) {
        return { isValid: true, type: 'division', operandA: dividend, operandB: divisor };
      }
    }
  } else if (key.startsWith('comp:')) {
    const parts = key.split(':');
    if (parts.length === 3) {
      const base = parseInt(parts[1], 10);
      const val = parseInt(parts[2], 10);
      if (!isNaN(base) && !isNaN(val)) {
        return { isValid: true, type: 'complements', operandA: base, operandB: val };
      }
    }
  } else if (key.startsWith('double:')) {
    const n = parseInt(key.replace('double:', ''), 10);
    if (!isNaN(n)) return { isValid: true, type: 'multiplication', operandA: n, operandB: 2 };
  } else if (key.startsWith('half:')) {
    const n = parseInt(key.replace('half:', ''), 10);
    if (!isNaN(n)) return { isValid: true, type: 'division', operandA: n, operandB: 2 };
  } else if (key.startsWith('frac_pct:') || key.startsWith('pct_frac:') || key.startsWith('frac:')) {
    return { isValid: true, type: 'fraction_percentage', operandA: 1, subType: key };
  } else if (key.startsWith('exam:')) {
    const parts = key.split(':');
    return { isValid: true, type: 'exam_quant', operandA: 1, subType: parts[1] || 'simplification' };
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
  if (type === 'division') {
    return `div:${operandA}:${operandB || 1}`;
  }
  if (type === 'complements') {
    return `comp:${operandA}:${operandB || 0}`;
  }
  return `add_sub:level_${operandA}`;
}

export function formatAddSubFactKey(
  pattern: 'non_bridging' | 'bridging' | 'complements' | 'multi_digit_accumulator' | 'subtraction_borrowing' | 'chain_calculations',
  a: number,
  b: number
): FactKey {
  return `add_sub:${pattern}:${a}:${b}`;
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
  if (parsed.type === 'division') {
    return Math.round(parsed.operandA / (parsed.operandB || 1));
  }
  if (parsed.type === 'complements') {
    return parsed.operandA - (parsed.operandB || 0);
  }
  if (parsed.type === 'add_sub') {
    if (parsed.subType === 'subtraction_borrowing') {
      return parsed.operandA - (parsed.operandB || 0);
    }
    return parsed.operandA + (parsed.operandB || 0);
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
export function createInitialFactMemoryState(factKey: FactKey): FactMemory {
  const parsed = parseFactKey(factKey);
  const type = parsed.type || 'multiplication';
  const correctAnswer = getFactCorrectAnswer(factKey);
  const now = Date.now();

  const difficultyScore =
    type === 'multiplication'
      ? Math.min(10, Math.round((parsed.operandA * (parsed.operandB || 1)) / 100) + 1)
      : type === 'square'
      ? Math.min(10, Math.round(parsed.operandA / 10) + 1)
      : type === 'cube'
      ? Math.min(10, Math.round(parsed.operandA / 10) + 2)
      : 3;

  return {
    key: factKey,
    category: type,
    attempts: 0,
    correctAttempts: 0,
    skippedAttempts: 0,
    consecutiveCorrect: 0,
    consecutiveIncorrect: 0,
    averageLatencyMs: 0,
    medianLatencyMs: 0,
    recentLatenciesMs: [],
    firstSeenAt: 0,
    lastSeenAt: 0,
    lastCorrectAt: undefined,
    lastIncorrectAt: undefined,
    lastSkippedAt: undefined,
    nextReviewAt: 0,
    stabilityDays: 0,
    difficultyScore,
    masteryScore: 0,
    masteryState: 'unseen',
    learningPhase: 'teach',
    errorPatterns: [],
    shownStrategies: [],
    strategyConfidence: 0,

    // Backward compatibility
    factKey,
    factType: type,
    familyId: getFactFamilyId(factKey),
    operandA: parsed.operandA,
    operandB: parsed.operandB,
    correctAnswer,
    totalAttempts: 0,
    skipCount: 0,
    recentAccuracy: 0,
    recentLatencyMs: 0,
    firstSeen: 0,
    lastSeen: 0,
    lastCorrect: null,
    lastIncorrect: null,
    lastSkipped: null,
    consecutiveErrors: 0,
    stabilityScore: 0,
    forgettingRisk: 1.0,
    nextReviewTimestamp: 0,
    intervalDays: 0,
    easeFactor: 2.5,
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
  const halfLifeMinutes = Math.max(10, Math.pow(Math.max(5, stabilityScore), 1.8) * 15);
  const exponent = (-Math.LN2 * elapsedMinutes) / halfLifeMinutes;
  const retention = Math.exp(exponent);
  return Math.max(0, Math.min(1, 1 - retention));
}

/**
 * Deterministic Spaced Repetition Interval Scheduler
 * Exact thresholds requested:
 * - 1st correct recall: 10 minutes (~0.00694 days)
 * - 2nd correct recall: 1 day
 * - 3rd correct recall: 3 days
 * - 4th correct recall: 7 days
 * - Mastered recall: 14+ days
 * - Wrong answer: ~15-30 minutes (0.02 days)
 * - Skipped answer: ~5-10 minutes (0.005 days)
 * - Correct but slow (> 1.5x target): capped at <= 1 day, no fast leap
 */
export function calculateNextIntervalDays(
  consecutiveCorrect: number,
  isCorrect: boolean,
  isSkipped: boolean,
  isSlowRecall: boolean,
  currentIntervalDays: number,
  easeFactor: number
): { intervalDays: number; nextReviewDelayMs: number } {
  if (isSkipped) {
    return { intervalDays: 0.005, nextReviewDelayMs: 5 * 60 * 1000 }; // ~5 minutes
  }
  if (!isCorrect) {
    return { intervalDays: 0.02, nextReviewDelayMs: 20 * 60 * 1000 }; // ~20 minutes
  }

  // If correct but slow (> 1.5x target), learner knows but struggles with fluent recall
  if (isSlowRecall) {
    const days = Math.min(1.0, currentIntervalDays <= 0.01 ? 0.05 : Math.max(0.2, currentIntervalDays * 0.8));
    return { intervalDays: days, nextReviewDelayMs: Math.round(days * 24 * 60 * 60 * 1000) };
  }

  // Progressive deterministic intervals
  switch (consecutiveCorrect) {
    case 1:
      // First correct recall: 10 minutes next review, intervalDays 1
      return { intervalDays: 1.0, nextReviewDelayMs: 10 * 60 * 1000 };
    case 2:
      // Second correct recall: 1 day
      return { intervalDays: 1.0, nextReviewDelayMs: 1 * 24 * 60 * 60 * 1000 };
    case 3:
      // Third correct recall: 3 days
      return { intervalDays: 3.0, nextReviewDelayMs: 3 * 24 * 60 * 60 * 1000 };
    case 4:
      // Fourth correct recall: 7 days
      return { intervalDays: 7.0, nextReviewDelayMs: 7 * 24 * 60 * 60 * 1000 };
    default:
      // Mastered / extended recall: 14+ days scaled by ease
      const baseDays = Math.max(14.0, (currentIntervalDays || 7.0) * easeFactor);
      const roundedDays = Math.round(baseDays * 10) / 10;
      return { intervalDays: roundedDays, nextReviewDelayMs: Math.round(roundedDays * 24 * 60 * 60 * 1000) };
  }
}

/**
 * Updates a fact memory state after a practice attempt using adaptive spaced retrieval principles.
 */
export function updateFactMemoryStateWithAttempt(
  current: FactMemory,
  attempt: FactAttempt,
  targetLatencyMs: number = 3500
): FactMemory {
  const isCorrect = attempt.isCorrect;
  const isSkipped = !!attempt.isSkipped;
  const now = attempt.timestamp;
  const latency = attempt.latencyMs;

  const isSlowRecall = isCorrect && latency > targetLatencyMs * 1.5;
  const isFastRecall = isCorrect && latency <= targetLatencyMs * 0.75;
  const isRapidGuess = !isCorrect && latency < 500;

  const updatedTotal = Math.max(current.attempts || 0, current.totalAttempts || 0) + 1;
  const updatedCorrect = (current.correctAttempts || 0) + (isCorrect ? 1 : 0);
  const updatedSkips = Math.max(current.skippedAttempts || 0, current.skipCount || 0) + (isSkipped ? 1 : 0);

  const updatedConsecutiveCorrect = isCorrect ? (current.consecutiveCorrect || 0) + 1 : 0;
  const updatedConsecutiveIncorrect = isCorrect ? 0 : Math.max(current.consecutiveIncorrect || 0, current.consecutiveErrors || 0) + 1;

  // Latencies
  const recentLatenciesMs = [...(current.recentLatenciesMs || []), latency].slice(-10);
  const sumLatency = recentLatenciesMs.reduce((a, b) => a + b, 0);
  const averageLatencyMs = Math.round(sumLatency / recentLatenciesMs.length);
  const sortedLat = [...recentLatenciesMs].sort((a, b) => a - b);
  const medianLatencyMs = sortedLat[Math.floor(sortedLat.length / 2)] || latency;

  // Accuracy window
  const prevAcc = current.recentAccuracy ?? 0;
  const recentAccuracy = current.attempts === 0 && current.totalAttempts === 0
    ? (isCorrect ? 100 : 0)
    : Math.round(prevAcc * 0.7 + (isCorrect ? 100 : 0) * 0.3);

  // Quality score (0 to 5) for SM-2 ease adjustment
  let q = 0;
  if (isSkipped) {
    q = 0;
  } else if (!isCorrect) {
    q = isRapidGuess ? 1 : 2;
  } else {
    if (attempt.usedHint || attempt.wasShownStrategy) q = 3;
    else if (isFastRecall) q = 5;
    else if (isSlowRecall) q = 3;
    else q = 4;
  }

  // SM-2 Ease Factor calculation
  let newEase = (current.easeFactor || 2.5) + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  if (newEase < 1.3) newEase = 1.3;
  if (newEase > 3.0) newEase = 3.0;

  // New interval days and next review timestamp
  const intervalResult = calculateNextIntervalDays(
    updatedConsecutiveCorrect,
    isCorrect,
    isSkipped,
    isSlowRecall,
    current.stabilityDays || current.intervalDays || 0,
    newEase
  );

  const nextReviewAt = now + intervalResult.nextReviewDelayMs;
  const newIntervalDays = intervalResult.intervalDays;

  // Stability & Mastery Scores (0 to 100)
  let stability = current.stabilityScore !== undefined ? current.stabilityScore : (current.stabilityDays ? current.stabilityDays * 10 : 0);
  let masteryScore = current.masteryScore || 0;

  if (isCorrect) {
    const boost = isFastRecall ? 20 : isSlowRecall ? 6 : 14;
    stability = Math.min(100, stability + boost);
    masteryScore = Math.min(100, masteryScore + (isSlowRecall ? 8 : 16));
  } else if (isSkipped) {
    stability = Math.max(5, stability - 30);
    masteryScore = Math.max(0, masteryScore - 25);
  } else {
    const penalty = updatedConsecutiveIncorrect > 1 ? 25 : 15;
    stability = Math.max(5, stability - penalty);
    masteryScore = Math.max(0, masteryScore - 20);
  }

  // Mastery State Machine: 'unseen' | 'introduced' | 'learning' | 'review' | 'mastered' | 'fragile'
  let masteryState: MasteryState = current.masteryState;
  if (isSkipped || updatedConsecutiveIncorrect >= 2) {
    masteryState = 'fragile';
  } else if (masteryScore >= 85 && updatedConsecutiveCorrect >= 3 && medianLatencyMs < 2500) {
    masteryState = 'mastered';
  } else if (updatedConsecutiveCorrect >= 2) {
    masteryState = 'review';
  } else if (updatedTotal >= 1) {
    masteryState = 'learning';
  }

  // Learning Phase Machine: 'teach' | 'guided' | 'recall' | 'speed' | 'mixed_review'
  let learningPhase: LearningPhase = current.learningPhase;
  if (isSkipped || attempt.wasShownStrategy || attempt.usedHint) {
    learningPhase = 'teach';
  } else if (masteryState === 'fragile' || updatedConsecutiveIncorrect > 0) {
    learningPhase = 'guided';
  } else if (masteryState === 'mastered') {
    learningPhase = medianLatencyMs < 1800 ? 'mixed_review' : 'speed';
  } else if (updatedConsecutiveCorrect >= 2) {
    learningPhase = 'recall';
  }

  // Error pattern tracking
  const errorPatterns = [...(current.errorPatterns || [])];
  if (!isCorrect && !isSkipped && attempt.errorType) {
    errorPatterns.push({
      type: attempt.errorType,
      description: `User answered ${attempt.userAnswer} instead of ${attempt.correctAnswer}`,
      detectedAt: now,
      userAnswer: attempt.userAnswer,
      correctAnswer: attempt.correctAnswer,
    });
  }

  const shownStrategies = attempt.wasShownStrategy && current.lastTrickId
    ? Array.from(new Set([...(current.shownStrategies || []), current.lastTrickId]))
    : current.shownStrategies || [];

  const forgettingRisk = isSkipped ? 0.95 : calculateForgettingRisk(now, stability, now);

  const errorHistory = isCorrect
    ? current.errorHistory || []
    : [...(current.errorHistory || []).slice(-9), attempt];

  // Cognitive response classification (Recalled vs Calculated vs Slow vs Uncertain vs Wrong)
  let responseClassification: CognitiveResponseState = 'wrong';
  if (isSkipped || !isCorrect) {
    responseClassification = 'wrong';
  } else if (attempt.usedHint || attempt.wasShownStrategy || latency > 6500) {
    responseClassification = 'uncertain';
  } else if (latency <= targetLatencyMs * 0.9) {
    responseClassification = 'recalled';
  } else if (latency <= targetLatencyMs * 1.5) {
    responseClassification = 'calculated';
  } else {
    responseClassification = 'slow';
  }

  const isAutomatic = responseClassification === 'recalled';
  const consecutiveAutomaticCount = isAutomatic ? (current.consecutiveAutomaticCount || 0) + 1 : 0;

  const speedLadderLevel = evaluateSpeedLadderLevel(
    current.speedLadderLevel || 1,
    updatedTotal,
    recentAccuracy,
    consecutiveAutomaticCount,
    medianLatencyMs,
    targetLatencyMs
  );

  const automaticityScore = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        recentAccuracy * 0.4 +
        Math.min(40, consecutiveAutomaticCount * 10) +
        (medianLatencyMs <= targetLatencyMs ? 20 : 0)
      )
    )
  );

  return {
    ...current,
    key: current.key || current.factKey,
    category: current.category || current.factType,
    attempts: updatedTotal,
    correctAttempts: updatedCorrect,
    skippedAttempts: updatedSkips,
    consecutiveCorrect: updatedConsecutiveCorrect,
    consecutiveIncorrect: updatedConsecutiveIncorrect,
    averageLatencyMs,
    medianLatencyMs,
    recentLatenciesMs,
    lastSeenAt: now,
    lastCorrectAt: isCorrect ? now : current.lastCorrectAt,
    lastIncorrectAt: !isCorrect && !isSkipped ? now : current.lastIncorrectAt,
    lastSkippedAt: isSkipped ? now : current.lastSkippedAt,
    nextReviewAt,
    stabilityDays: Number(newIntervalDays.toFixed(3)),
    difficultyScore: current.difficultyScore || 3,
    masteryScore: Math.round(masteryScore),
    masteryState,
    learningPhase,
    errorPatterns,
    shownStrategies,
    strategyConfidence: Math.min(1.0, Number((updatedConsecutiveCorrect / 4).toFixed(2))),
    speedLadderLevel,
    responseClassification,
    consecutiveAutomaticCount,
    automaticityScore,

    // Backward compatibility
    factKey: current.factKey || (current.key as FactKey),
    factType: current.factType || current.category,
    familyId: current.familyId || getFactFamilyId((current.key || current.factKey) as FactKey),
    operandA: current.operandA,
    operandB: current.operandB,
    correctAnswer: current.correctAnswer,
    totalAttempts: updatedTotal,
    skipCount: updatedSkips,
    recentAccuracy,
    recentLatencyMs: latency,
    firstSeen: current.firstSeen || current.firstSeenAt || now,
    lastSeen: now,
    lastCorrect: isCorrect ? now : (current.lastCorrect || null),
    lastIncorrect: !isCorrect && !isSkipped ? now : (current.lastIncorrect || null),
    lastSkipped: isSkipped ? now : (current.lastSkipped || null),
    consecutiveErrors: updatedConsecutiveIncorrect,
    stabilityScore: Math.round(stability),
    forgettingRisk,
    nextReviewTimestamp: nextReviewAt,
    intervalDays: newIntervalDays,
    easeFactor: Number(newEase.toFixed(2)),
    usedHintOrStrategyCount: (current.usedHintOrStrategyCount || 0) + (attempt.usedHint || attempt.wasShownStrategy ? 1 : 0),
    isDirectMemory: current.isDirectMemory ?? isDirectFactKey((current.key || current.factKey) as FactKey),
    errorHistory,
    identifiedErrorPattern: (attempt.errorType as FactErrorPatternType) || current.identifiedErrorPattern,
  };
}

/**
 * Derives aggregate high-level SkillEstimate objects from the granular FactMemoryMap.
 */
export function deriveAggregateSkillsFromFacts(
  facts: Record<string, FactMemory>
): Record<SkillDimension, SkillEstimate> {
  const allFactStates = Object.values(facts);

  const dimBuckets = {} as Record<SkillDimension, FactMemory[]>;
  for (const dim of TOTAL_SKILL_DIMENSIONS) {
    dimBuckets[dim] = [];
  }

  for (const f of allFactStates) {
    const cat = f.category || f.factType;
    if (cat === 'multiplication') {
      const t = f.operandA;
      if ([2, 3, 4, 5, 10].includes(t)) dimBuckets.mult_foundations.push(f);
      else if ([6, 7, 8, 9, 11, 12].includes(t)) dimBuckets.mult_core_tables.push(f);
      else if (t >= 13 && t <= 19) dimBuckets.mult_teen_tables.push(f);
      else dimBuckets.mult_decade_ext.push(f);
    } else if (cat === 'square') {
      const n = f.operandA;
      if (n % 10 === 5) dimBuckets.squares_ending_5.push(f);
      else if (n >= 40 && n <= 60) dimBuckets.squares_near_50.push(f);
      else if (n >= 80 && n <= 100) dimBuckets.squares_near_100.push(f);
      else dimBuckets.squares_duplex_general.push(f);
    } else if (cat === 'cube') {
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

    const totalAttempts = bucket.reduce((sum, f) => sum + (f.attempts || f.totalAttempts || 0), 0);
    const correctCount = bucket.reduce((sum, f) => sum + (f.correctAttempts || 0), 0);
    const accuracy = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;
    const latencies = bucket.filter((f) => f.medianLatencyMs > 0).map((f) => f.medianLatencyMs);
    const medianLatencyMs = latencies.length > 0
      ? Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length)
      : 2500;
    const lastPracticed = Math.max(...bucket.map((f) => f.lastSeenAt || f.lastSeen || 0));

    const accuracyWeight = (accuracy - 50) / 25;
    const speedBonus = medianLatencyMs < 1800 ? 0.8 : medianLatencyMs < 2500 ? 0.4 : -0.5;
    const theta = Math.max(-3.0, Math.min(3.0, Number((accuracyWeight + speedBonus).toFixed(2))));

    const confidence = Math.min(1.0, Number((totalAttempts / (bucket.length * 3)).toFixed(2)));

    const maxRisk = Math.max(...bucket.map((f) => f.forgettingRisk || 0));
    const decayRisk = maxRisk > 0.6 ? 'critical' : maxRisk > 0.4 ? 'high' : maxRisk > 0.2 ? 'moderate' : 'low';

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
