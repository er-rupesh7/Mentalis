/**
 * Learner Model & Cognitive Profile for Mentalis
 * Platform-agnostic, offline-first domain model tracking ability (theta),
 * confidence intervals, error patterns, fatigue signals, and training plans.
 */

import { ModuleId, Question } from './types';

export type SkillDimension =
  // Addition & Subtraction
  | 'add_sub_non_bridging'      // Level 1: single digit & non-crossing sums/diffs
  | 'add_sub_bridging_decade'   // Level 2: crossing decade boundary (8+7, 52-7)
  | 'add_sub_complements_100'   // Level 3: base-100 complements and decade jumps
  | 'add_sub_multidigit_l2r'    // Level 4: 2-digit & 3-digit left-to-right accumulator
  | 'add_sub_mixed_chain'       // Level 5 & 6: multi-term running mental sums
  // Multiplication
  | 'mult_foundations'          // Tables 2, 3, 4, 5, 10
  | 'mult_core_tables'          // Tables 6, 7, 8, 9, 11, 12
  | 'mult_teen_tables'          // Tables 13, 14, 15, 16, 17, 18, 19
  | 'mult_decade_ext'           // Tables 20, 25, 30, 40, 50, 60, 75
  // Squares & Cubes
  | 'squares_ending_5'          // 15², 25², 35² ... 95²
  | 'squares_near_50'           // (50 ± d)² = 25 ± d | d²
  | 'squares_near_100'          // (100 ± d)² = 100 ± 2d | d²
  | 'squares_duplex_general'    // General 2-digit duplex method
  | 'cubes_anchors'             // Anchor cubes 1³–12³, 20³–100³
  | 'cubes_advanced'            // Advanced 2-digit cubes 13³–99³
  // Working Memory
  | 'anzan_stream';             // Sequential flashed working memory addition

export type MasteryTier = 'novice' | 'developing' | 'proficient' | 'master' | 'grandmaster';
export type DecayRisk = 'low' | 'moderate' | 'high' | 'critical';

export interface SkillEstimate {
  dimension: SkillDimension;
  theta: number; // IRT ability rating: -3.0 (novice) to +3.0 (grandmaster), 0.0 = baseline
  confidence: number; // 0.0 (untested) to 1.0 (highly confident)
  totalAttempts: number;
  correctCount: number;
  accuracy: number; // 0 - 100%
  medianLatencyMs: number;
  lastPracticed: number; // UNIX timestamp ms
  decayRisk: DecayRisk;
  masteryTier: MasteryTier;
}

export type ErrorPatternType =
  | 'decade_overshoot'
  | 'borrow_omission'
  | 'complement_confusion'
  | 'table_hesitation'
  | 'rapid_guess'
  | 'fatigue_drift';

export interface ErrorPattern {
  id: string;
  dimension: SkillDimension;
  patternType: ErrorPatternType;
  count: number;
  lastObserved: number;
  description: string;
}

export type FatigueLevel = 'fresh' | 'optimal' | 'mild_fatigue' | 'high_fatigue';

export interface FatigueSignal {
  level: FatigueLevel;
  consecutiveErrors: number;
  latencyDilationRatio: number; // current session latency / baseline latency
  recommendation: 'continue' | 'slow_down' | 'switch_to_easier' | 'take_break';
  message: string;
}

export interface AssessmentResponse {
  questionId: string;
  dimension: SkillDimension;
  userAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
  latencyMs: number;
  rapidGuess: boolean;
  isSkipped?: boolean;
  factKey?: string;
  errorPattern?: string;
}

export interface BaselineStrengthOrGap {
  dimension: SkillDimension;
  label: string;
  theta: number;
  detail: string;
}

export interface BaselineReport {
  assessedAt: number;
  overallTheta: number;
  overallTier: string;
  archetype?: string;
  strengths: BaselineStrengthOrGap[];
  priorityGaps: BaselineStrengthOrGap[];
  fastButCarelessFacts?: string[];
  accurateButSlowFacts?: string[];
  skippedFacts?: string[];
  factsNeedingStrategy?: string[];
  recommendedDailyPaceMinutes: number;
  firstWeekRoadmap: string[];
  summaryMessage?: string;
}

export interface AssessmentSession {
  id: string;
  startedAt: number;
  completedAt?: number;
  status: 'not_started' | 'in_progress' | 'completed' | 'skipped';
  currentQuestionIndex: number;
  totalQuestions: number;
  questions: Question[];
  responses: AssessmentResponse[];
  earlyStopped: boolean;
  isPaused?: boolean;
  pausedAt?: number;
  totalPausedTimeMs?: number;
  targetDurationMinutes?: number;
}

export type TrainingBlockType =
  | 'warmup'
  | 'priority_weakness'
  | 'mixed_retrieval'
  | 'strategy_refinement'
  | 'anzan_working_memory'
  | 'cool_down';

export interface TrainingBlock {
  id: string;
  blockType: TrainingBlockType;
  title: string;
  description: string;
  dimension: SkillDimension;
  drillId: string;
  targetCount: number;
  allocatedMinutes: number;
  completedCount: number;
  status: 'pending' | 'active' | 'completed' | 'skipped';
}

export interface TrainingPlan {
  id: string;
  date: string; // YYYY-MM-DD
  createdAt: number;
  totalEstimatedMinutes: number;
  blocks: TrainingBlock[];
  rationale: string;
  focusDimensions: SkillDimension[];
  isCompleted: boolean;
}

export interface CoachingInsight {
  summary: string;
  learner_summary?: string;
  priority_fact_families?: string[];
  recommended_learning_mode?: string;
  recommended_strategies?: {
    strategy_id: string;
    applies_to: string[];
    reason: string;
  }[];
  next_queue_policy?: {
    focus_ratio: number;
    review_ratio: number;
    interleave_ratio: number;
    difficulty_adjustment: 'step_down' | 'hold' | 'step_up';
  };
  coach_message?: string;
  encouragement: string;
  observedStrengths: string[];
  priorityGaps: string[];
  recommendedFocus: string;
  suggestedCoachingMessage: string;
  planAdjustments?: {
    blockId?: string;
    suggestedDrillId?: string;
    reason: string;
  }[];
  confidence: number;
  generatedAt: number;
  source: 'ai' | 'deterministic';
}

export interface LearnerProfile {
  version: number;
  updatedAt: number;
  skills: Record<SkillDimension, SkillEstimate>;
  errorPatterns: Record<string, ErrorPattern>;
  fatigueState: FatigueSignal;
  preferredDailyMinutes: number;
  baselineReport: BaselineReport | null;
  assessmentHistory: AssessmentSession[];
}

export const ALL_SKILL_DIMENSIONS: SkillDimension[] = [
  'add_sub_non_bridging',
  'add_sub_bridging_decade',
  'add_sub_complements_100',
  'add_sub_multidigit_l2r',
  'add_sub_mixed_chain',
  'mult_foundations',
  'mult_core_tables',
  'mult_teen_tables',
  'mult_decade_ext',
  'squares_ending_5',
  'squares_near_50',
  'squares_near_100',
  'squares_duplex_general',
  'cubes_anchors',
  'cubes_advanced',
  'anzan_stream',
];

export function getDimensionLabel(dim: SkillDimension): string {
  switch (dim) {
    case 'add_sub_non_bridging': return 'Single-Digit & Non-Crossing (L1)';
    case 'add_sub_bridging_decade': return 'Decade Bridging (L2)';
    case 'add_sub_complements_100': return 'Complements & Jumps to 100 (L3)';
    case 'add_sub_multidigit_l2r': return 'Left-to-Right Multi-Digit (L4)';
    case 'add_sub_mixed_chain': return 'Multi-Term Running Sums (L5-6)';
    case 'mult_foundations': return 'Multiplication Foundations (2-5, 10)';
    case 'mult_core_tables': return 'Core Times Tables (6-9, 11-12)';
    case 'mult_teen_tables': return 'Teen Tables (13-19)';
    case 'mult_decade_ext': return 'Decade Multiplication (20-75)';
    case 'squares_ending_5': return 'Squares Ending in 5';
    case 'squares_near_50': return 'Squares Base 50';
    case 'squares_near_100': return 'Squares Base 100';
    case 'squares_duplex_general': return 'Duplex Mental Squares';
    case 'cubes_anchors': return 'Anchor Cubes (1-12, Decades)';
    case 'cubes_advanced': return 'Advanced Cubes (13-100)';
    case 'anzan_stream': return 'Anzan Working Memory';
  }
}

export function getDimensionModule(dim: SkillDimension): ModuleId {
  if (dim.startsWith('add_sub')) return 'add_sub';
  if (dim.startsWith('mult')) return 'multiplication';
  if (dim.startsWith('squares') || dim.startsWith('cubes')) return 'squares_cubes';
  return 'working_memory';
}

export function calculateDecayRisk(lastPracticedMs: number, nowMs: number = Date.now()): DecayRisk {
  if (!lastPracticedMs || lastPracticedMs <= 0) return 'critical';
  const days = (nowMs - lastPracticedMs) / (1000 * 60 * 60 * 24);
  if (days < 3) return 'low';
  if (days < 7) return 'moderate';
  if (days < 14) return 'high';
  return 'critical';
}

export function evaluateMasteryTier(theta: number, accuracy: number, attempts: number): MasteryTier {
  if (attempts < 3) return 'novice';
  if (theta >= 2.2 && accuracy >= 90 && attempts >= 15) return 'grandmaster';
  if (theta >= 1.4 && accuracy >= 85 && attempts >= 10) return 'master';
  if (theta >= 0.5 && accuracy >= 75 && attempts >= 6) return 'proficient';
  if (theta >= -0.5 && accuracy >= 60) return 'developing';
  return 'novice';
}

export function createDefaultSkillEstimate(dim: SkillDimension): SkillEstimate {
  return {
    dimension: dim,
    theta: 0.0,
    confidence: 0.0,
    totalAttempts: 0,
    correctCount: 0,
    accuracy: 0,
    medianLatencyMs: 0,
    lastPracticed: 0,
    decayRisk: 'critical',
    masteryTier: 'novice',
  };
}

export function createDefaultLearnerProfile(): LearnerProfile {
  const skills = {} as Record<SkillDimension, SkillEstimate>;
  for (const dim of ALL_SKILL_DIMENSIONS) {
    skills[dim] = createDefaultSkillEstimate(dim);
  }

  return {
    version: 3,
    updatedAt: Date.now(),
    skills,
    errorPatterns: {},
    fatigueState: {
      level: 'fresh',
      consecutiveErrors: 0,
      latencyDilationRatio: 1.0,
      recommendation: 'continue',
      message: 'Mind is fresh and focused.',
    },
    preferredDailyMinutes: 15,
    baselineReport: null,
    assessmentHistory: [],
  };
}

/**
 * Updates a skill estimate using an IRT (Item Response Theory) / Elo-inspired Bayesian update.
 * Fast, robust, and operates with zero external dependencies.
 */
export function updateSkillEstimate(
  existing: SkillEstimate,
  isCorrect: boolean,
  latencyMs: number,
  targetLatencyMs: number = 3500,
  nowMs: number = Date.now()
): SkillEstimate {
  const newAttempts = existing.totalAttempts + 1;
  const newCorrect = existing.correctCount + (isCorrect ? 1 : 0);
  const newAccuracy = Math.round((newCorrect / newAttempts) * 100);

  // Confidence asymptotic growth: 1 - exp(-attempts / 8)
  const confidence = Math.min(0.98, Number((1 - Math.exp(-newAttempts / 8)).toFixed(3)));

  // Dynamic learning step rate decaying with confidence
  const learningRate = Math.max(0.12, 0.45 * (1 - confidence * 0.6));

  // Rapid guess check: sub-500ms response that is incorrect indicates careless guessing
  const isRapidGuess = latencyMs < 500 && !isCorrect;

  let deltaTheta = 0;
  if (isCorrect) {
    // Reward based on latency: sub-target latency earns full credit + speed bonus
    const speedRatio = Math.min(2.0, targetLatencyMs / Math.max(latencyMs, 400));
    const speedBonus = speedRatio > 1.2 ? 0.08 : 0.0;
    deltaTheta = learningRate * (1.0 + speedBonus);
  } else {
    // Penalty for errors; extra penalty for careless rapid guessing
    const guessPenalty = isRapidGuess ? 1.5 : 1.0;
    deltaTheta = -learningRate * guessPenalty;
  }

  const updatedTheta = Math.max(-3.0, Math.min(3.0, Number((existing.theta + deltaTheta).toFixed(3))));

  // Update median latency estimate using exponential moving window
  const updatedMedianLatency =
    existing.medianLatencyMs > 0
      ? Math.round(existing.medianLatencyMs * 0.7 + latencyMs * 0.3)
      : latencyMs;

  const masteryTier = evaluateMasteryTier(updatedTheta, newAccuracy, newAttempts);
  const decayRisk = calculateDecayRisk(nowMs, nowMs);

  return {
    ...existing,
    theta: updatedTheta,
    confidence,
    totalAttempts: newAttempts,
    correctCount: newCorrect,
    accuracy: newAccuracy,
    medianLatencyMs: updatedMedianLatency,
    lastPracticed: nowMs,
    decayRisk,
    masteryTier,
  };
}

/**
 * Evaluates mental fatigue based on latency dilation and consecutive errors.
 */
export function detectFatigue(
  recentLatencies: number[],
  baselineMedianMs: number,
  consecutiveErrors: number
): FatigueSignal {
  if (recentLatencies.length < 3 || baselineMedianMs <= 0) {
    if (consecutiveErrors >= 3) {
      return {
        level: 'mild_fatigue',
        consecutiveErrors,
        latencyDilationRatio: 1.0,
        recommendation: 'slow_down',
        message: 'Multiple consecutive misses. Slow down and visualize the accumulator.',
      };
    }
    return {
      level: 'fresh',
      consecutiveErrors,
      latencyDilationRatio: 1.0,
      recommendation: 'continue',
      message: 'Mind is fresh and focused.',
    };
  }

  const recentAvg = recentLatencies.slice(-5).reduce((a, b) => a + b, 0) / Math.min(recentLatencies.length, 5);
  const dilation = Number((recentAvg / baselineMedianMs).toFixed(2));

  if (dilation >= 2.0 || consecutiveErrors >= 4) {
    return {
      level: 'high_fatigue',
      consecutiveErrors,
      latencyDilationRatio: dilation,
      recommendation: 'take_break',
      message: 'Cognitive fatigue detected. Latency has doubled. Time for a short water or breathing break!',
    };
  }

  if (dilation >= 1.45 || consecutiveErrors >= 2) {
    return {
      level: 'mild_fatigue',
      consecutiveErrors,
      latencyDilationRatio: dilation,
      recommendation: 'switch_to_easier',
      message: 'Mild strain detected. Switch to a foundational review block or pause briefly.',
    };
  }

  if (dilation <= 1.2 && consecutiveErrors === 0) {
    return {
      level: 'optimal',
      consecutiveErrors: 0,
      latencyDilationRatio: dilation,
      recommendation: 'continue',
      message: 'Optimal flow state! Clean recall and steady speed.',
    };
  }

  return {
    level: 'fresh',
    consecutiveErrors,
    latencyDilationRatio: dilation,
    recommendation: 'continue',
    message: 'Steady pace.',
  };
}
