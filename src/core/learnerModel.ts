/**
 * Learner Model & Cognitive Profile for Mentalis
 * Platform-agnostic, offline-first domain model tracking ability (theta),
 * confidence intervals, error patterns, fatigue signals, and training plans.
 */

import { ModuleId, Question, SpeedLadderLevel, CognitiveResponseState } from './types';

export type SkillDimension =
  // Addition & Subtraction Foundations
  | 'add_sub_non_bridging'      // Level 1: single digit & non-crossing sums/diffs
  | 'add_sub_bridging_decade'   // Level 2: crossing decade boundary (8+7, 52-7)
  | 'add_sub_complements_100'   // Level 3: base-100 complements and decade jumps
  | 'add_sub_multidigit_l2r'    // Level 4: 2-digit & 3-digit left-to-right accumulator
  | 'add_sub_mixed_chain'       // Level 5 & 6: multi-term running mental sums

  // Granular Tables 2 through 20 (tracked independently)
  | 'table_2'  | 'table_3'  | 'table_4'  | 'table_5'
  | 'table_6'  | 'table_7'  | 'table_8'  | 'table_9'  | 'table_10'
  | 'table_11' | 'table_12' | 'table_13' | 'table_14' | 'table_15'
  | 'table_16' | 'table_17' | 'table_18' | 'table_19' | 'table_20'

  // Backward-compatible table groupings
  | 'mult_foundations'          // Tables 2, 3, 4, 5, 10
  | 'mult_core_tables'          // Tables 6, 7, 8, 9, 11, 12
  | 'mult_teen_tables'          // Tables 13, 14, 15, 16, 17, 18, 19
  | 'mult_decade_ext'           // Tables 20, 25, 30, 40, 50, 60, 75

  // Number Facts
  | 'complements_10'            // Complements to 10
  | 'complements_100'           // Complements to 100
  | 'doubles_halves'            // Rapid doubling and halving
  | 'near_doubles'              // Near doubles (e.g. 36 + 37)
  | 'fraction_percentage_equiv' // 1/2 to 1/40 fraction-percentage pairs

  // Arithmetic Operations
  | 'add_1d_1d' | 'add_2d_1d' | 'add_2d_2d' | 'add_3d_2d'
  | 'sub_1d_1d' | 'sub_2d_1d' | 'sub_2d_2d' | 'sub_3d_2d'
  | 'mult_1d_1d' | 'mult_2d_1d' | 'mult_2d_2d'
  | 'div_by_1d' | 'div_by_2d'
  | 'mixed_operations'

  // Squares & Cubes
  | 'squares_1_20'
  | 'squares_ending_5'          // 15², 25², 35² ... 95²
  | 'squares_near_50'           // (50 ± d)² = 25 ± d | d²
  | 'squares_near_100'          // (100 ± d)² = 100 ± 2d | d²
  | 'squares_duplex_general'    // General 2-digit duplex method
  | 'cubes_anchors'             // Anchor cubes 1³–12³, 20³–100³
  | 'cubes_advanced'            // Advanced 2-digit cubes 13³–99³
  | 'shakuntala_cube_roots'     // Exact 6-digit cube roots in < 2s
  | 'shakuntala_square_roots'   // Exact 4/5-digit square roots
  | 'complements_10000'         // Vedic 10,000 complements (All from 9, last from 10)

  // Working Memory
  | 'anzan_stream'              // Sequential flashed working memory addition

  // Exam Calculation Skills (RRB PO / IBPS Quant)
  | 'quant_simplification'      // BODMAS arithmetic expressions
  | 'quant_approximation'       // Rounding and percent estimation
  | 'quant_percentage'          // % calculations (18% of 250, etc.)
  | 'quant_ratio'               // Ratio simplification & splitting
  | 'quant_average'             // Mean calculation via deviation method
  | 'quant_profit_loss'         // CP, SP, Profit %, markup/discount
  | 'quant_si_ci'               // Simple & Compound Interest arithmetic
  | 'quant_time_work'           // Unit work & efficiency arithmetic
  | 'quant_speed_distance'      // Relative speed & conversion arithmetic
  | 'quant_di_arithmetic'       // Rapid DI table sums, diffs, ratios
  | 'quant_number_series';      // Missing term pattern arithmetic

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

  // Extended metrics for RRB PO Quant & Automaticity
  masteryScore?: number;        // 0 - 100
  recentResponseTimeMs?: number;// Recent moving window latency
  consistency?: number;         // 0 - 100 (stability of response time)
  errorFrequency?: number;      // Recent error rate (0 - 1.0)
  streak?: number;              // Current streak
  bestStreak?: number;          // All-time best streak
  currentDifficulty?: number;   // 1 - 10
  numberExposures?: number;     // Independent exposures
  speedLadderLevel?: SpeedLadderLevel; // 1 to 6
  automaticityRate?: number;    // % of responses classified as 'recalled'
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

export interface DomainProficiencyAnalysis {
  domain: string;
  label: string;
  tierLevel: number; // 1 to 9
  tierName: string; // e.g. "Moderate", "Mastery (Shakuntala Devi)"
  accuracy: number; // 0 - 100
  avgLatencyMs: number;
  theta: number;
  recommendedTechnique?: string;
  techniqueExplanation?: string;
  status: 'champion' | 'proficient' | 'needs_strengthening';
}

export interface TableDecadeStat {
  decadeKey: 'decade1_10' | 'decade11_20' | 'decade21_30' | 'decade31_50' | 'decade51_100';
  label: string;
  totalAsked: number;
  correctCount: number;
  accuracyPercent: number;
  avgLatencyMs: number;
  status: 'mastered' | 'fluent' | 'learning' | 'struggling';
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
  domainProficiencies?: DomainProficiencyAnalysis[];
  tablesDecadeBreakdown?: TableDecadeStat[];
  recommendedTechniquesList?: {
    domain: string;
    techniqueName: string;
    description: string;
    drillRoute?: string;
  }[];
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
  source?: 'offline' | 'ai_enhanced';
  isLevel0?: boolean;
}

export type AIProviderStatus =
  | 'ready'
  | 'cooldown'
  | 'rate_limited'
  | 'missing_key'
  | 'network_error'
  | 'pending_sync';

export interface GroqPlanAdjustment {
  target: string;
  action: string;
  strategy_id: string;
  reason: string;
}

export interface GroqLessonCard {
  title: string;
  fact_or_family: string;
  trick: string;
  worked_example: string;
  practice_prompt: string;
}

export interface GroqCoachResponse {
  summary: string;
  priority_facts: string[];
  priority_skills: string[];
  recommended_plan_adjustments: GroqPlanAdjustment[];
  lesson_cards: GroqLessonCard[];
  coach_message: string;
  confidence: number;
}

export interface AICoachState {
  learnerId: string;
  cooldownMinutes: number; // 15 to 30, default 30
  lastSuccessfulRequestAt: number | null;
  nextEligibleRequestAt: number;
  providerStatus: AIProviderStatus;
  lastErrorType: string | null;
  retryAfterSeconds: number | null;
  pendingSync: boolean;
  lastAiLesson: GroqCoachResponse | null;
  planSource: 'offline' | 'ai_enhanced';
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
  lessonCards?: GroqLessonCard[];
  groqResponse?: GroqCoachResponse;
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

export const EXTENDED_SKILL_DIMENSIONS: SkillDimension[] = [
  'table_2',  'table_3',  'table_4',  'table_5',
  'table_6',  'table_7',  'table_8',  'table_9',  'table_10',
  'table_11', 'table_12', 'table_13', 'table_14', 'table_15',
  'table_16', 'table_17', 'table_18', 'table_19', 'table_20',
  'complements_10',
  'complements_100',
  'doubles_halves',
  'near_doubles',
  'fraction_percentage_equiv',
  'add_1d_1d', 'add_2d_1d', 'add_2d_2d', 'add_3d_2d',
  'sub_1d_1d', 'sub_2d_1d', 'sub_2d_2d', 'sub_3d_2d',
  'mult_1d_1d', 'mult_2d_1d', 'mult_2d_2d',
  'div_by_1d', 'div_by_2d',
  'mixed_operations',
  'squares_1_20',
  'quant_simplification',
  'quant_approximation',
  'quant_percentage',
  'quant_ratio',
  'quant_average',
  'quant_profit_loss',
  'quant_si_ci',
  'quant_time_work',
  'quant_speed_distance',
  'quant_di_arithmetic',
  'quant_number_series',
  'shakuntala_cube_roots',
  'shakuntala_square_roots',
  'complements_10000',
];

export const TOTAL_SKILL_DIMENSIONS: SkillDimension[] = [
  ...ALL_SKILL_DIMENSIONS,
  ...EXTENDED_SKILL_DIMENSIONS,
];

export function getDimensionLabel(dim: SkillDimension): string {
  if (dim.startsWith('table_')) {
    const t = dim.replace('table_', '');
    return `Table ×${t} Mastery`;
  }
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
    case 'complements_10': return 'Base-10 Complements';
    case 'complements_100': return 'Base-100 Complements';
    case 'complements_10000': return '10,000 Complements (All from 9, last from 10)';
    case 'doubles_halves': return 'Doubles & Halves';
    case 'near_doubles': return 'Near-Doubles Mental Step';
    case 'fraction_percentage_equiv': return 'Fraction ↔ Percentage Conversions';
    case 'add_1d_1d': return '1-Digit + 1-Digit';
    case 'add_2d_1d': return '2-Digit + 1-Digit';
    case 'add_2d_2d': return '2-Digit + 2-Digit';
    case 'add_3d_2d': return '3-Digit + 2-Digit';
    case 'sub_1d_1d': return '1-Digit - 1-Digit';
    case 'sub_2d_1d': return '2-Digit - 1-Digit';
    case 'sub_2d_2d': return '2-Digit - 2-Digit';
    case 'sub_3d_2d': return '3-Digit - 2-Digit';
    case 'mult_1d_1d': return 'Single-Digit Multiplication';
    case 'mult_2d_1d': return '2-Digit × 1-Digit';
    case 'mult_2d_2d': return '2-Digit × 2-Digit';
    case 'div_by_1d': return 'Division by 1-Digit';
    case 'div_by_2d': return 'Division by 2-Digit';
    case 'mixed_operations': return 'Mixed Operations';
    case 'squares_1_20': return 'Squares 1² to 20²';
    case 'squares_ending_5': return 'Squares Ending in 5';
    case 'squares_near_50': return 'Squares Base 50';
    case 'squares_near_100': return 'Squares Base 100';
    case 'squares_duplex_general': return 'Duplex Mental Squares';
    case 'cubes_anchors': return 'Anchor Cubes (1-12, Decades)';
    case 'cubes_advanced': return 'Advanced Cubes (13-100)';
    case 'shakuntala_cube_roots': return 'Shakuntala 6-Digit Cube Roots';
    case 'shakuntala_square_roots': return 'Instant Mental Square Roots';
    case 'anzan_stream': return 'Anzan Working Memory';
    case 'quant_simplification': return 'Simplification & BODMAS';
    case 'quant_approximation': return 'Approximation & Estimation';
    case 'quant_percentage': return 'Percentage Calculations';
    case 'quant_ratio': return 'Ratio Simplification & Splitting';
    case 'quant_average': return 'Average (Deviation Method)';
    case 'quant_profit_loss': return 'Profit & Loss Arithmetic';
    case 'quant_si_ci': return 'Simple & Compound Interest';
    case 'quant_time_work': return 'Time & Work Arithmetic';
    case 'quant_speed_distance': return 'Speed, Time & Distance';
    case 'quant_di_arithmetic': return 'Data Interpretation Arithmetic';
    case 'quant_number_series': return 'Number Series Patterns';
    default: return (dim as string).replace(/_/g, ' ');
  }
}

export function getDimensionModule(dim: SkillDimension): ModuleId {
  if (dim.startsWith('table_')) return 'tables_bootcamp';
  if (dim.startsWith('quant_')) return 'exam_quant';
  if (dim === 'fraction_percentage_equiv') return 'fractions_percentages';
  if (dim.startsWith('add_sub') || dim.startsWith('add_') || dim.startsWith('sub_') || dim.startsWith('comp')) return 'add_sub';
  if (dim.startsWith('mult') || dim === 'doubles_halves' || dim === 'near_doubles' || dim.startsWith('div_')) return 'multiplication';
  if (dim.startsWith('squares') || dim.startsWith('cubes')) return 'squares_cubes';
  return 'working_memory';
}

/**
 * Returns adaptive latency thresholds (ms) based on cognitive complexity.
 */
export function getAdaptiveLatencyThreshold(
  dim: SkillDimension,
  operandA?: number,
  operandB?: number
): number {
  if (dim.startsWith('table_')) {
    const tableNum = parseInt(dim.replace('table_', ''), 10) || 7;
    const mult = operandB || 1;
    if (tableNum <= 10 && mult <= 10) return 1500; // 1.5s for single digit
    if (tableNum <= 12) return 2000;              // 2.0s for tables up to 12
    return 2500;                                  // 2.5s for teen tables
  }
  if (dim === 'fraction_percentage_equiv') return 1800;
  if (dim === 'complements_10') return 1200;
  if (dim === 'complements_100') return 2000;
  if (dim === 'doubles_halves') return 1500;
  if (dim === 'add_1d_1d' || dim === 'sub_1d_1d') return 1200;
  if (dim === 'add_2d_1d' || dim === 'sub_2d_1d') return 1800;
  if (dim === 'add_2d_2d' || dim === 'sub_2d_2d') return 2800;
  if (dim === 'add_3d_2d' || dim === 'sub_3d_2d') return 3500;
  if (dim === 'mult_1d_1d') return 1500;
  if (dim === 'mult_2d_1d') return 2800;
  if (dim === 'mult_2d_2d') return 5500;
  if (dim === 'div_by_1d') return 2000;
  if (dim === 'div_by_2d') return 3800;
  if (dim === 'squares_1_20') return 2000;
  if (dim.startsWith('squares_')) return 3200;
  if (dim.startsWith('cubes_')) return 3500;
  if (dim === 'quant_simplification') return 6000;
  if (dim === 'quant_approximation') return 5000;
  if (dim === 'quant_percentage') return 4500;
  if (dim === 'quant_ratio') return 4500;
  if (dim === 'quant_average') return 5000;
  if (dim === 'quant_profit_loss' || dim === 'quant_si_ci') return 6000;
  if (dim === 'quant_di_arithmetic') return 6000;
  if (dim === 'quant_number_series') return 6500;
  return 3000;
}

/**
 * Classifies learner response into one of 5 cognitive states.
 */
export function classifyCognitiveResponse(
  isCorrect: boolean,
  latencyMs: number,
  targetLatencyMs: number,
  usedHintOrStrategy: boolean = false
): CognitiveResponseState {
  if (!isCorrect) return 'wrong';
  if (usedHintOrStrategy || latencyMs > 6500) return 'uncertain';
  if (latencyMs <= targetLatencyMs * 0.9) return 'recalled';
  if (latencyMs <= targetLatencyMs * 1.5) return 'calculated';
  return 'slow';
}

/**
 * Evaluates the earned speed ladder level (1 through 6) based on rigorous mastery criteria.
 * Difficulty must NEVER increase simply because questions were completed.
 */
export function evaluateSpeedLadderLevel(
  currentLevel: SpeedLadderLevel = 1,
  totalAttempts: number,
  accuracy: number,
  consecutiveAutomatic: number,
  recentLatencyMs: number,
  targetLatencyMs: number
): SpeedLadderLevel {
  if (totalAttempts < 3) return 1; // Level 1: Learn
  if (accuracy < 85) return 1;

  // Level 2: Accurate (>= 90% accuracy, >= 4 attempts)
  if (accuracy >= 90 && totalAttempts >= 4) {
    // Level 3: Stable (>= 95% accuracy, >= 8 attempts)
    if (accuracy >= 95 && totalAttempts >= 8) {
      // Level 4: Fast (recentLatencyMs <= targetLatencyMs * 1.2)
      if (recentLatencyMs > 0 && recentLatencyMs <= targetLatencyMs * 1.2) {
        // Level 5: Automatic (consecutiveAutomatic >= 4 and latency <= target)
        if (consecutiveAutomatic >= 4 && recentLatencyMs <= targetLatencyMs) {
          // Level 6: Exam Transfer
          if (currentLevel === 6 || totalAttempts >= 20) {
            return 6;
          }
          return 5;
        }
        return 4;
      }
      return 3;
    }
    return 2;
  }
  return 1;
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
  for (const dim of TOTAL_SKILL_DIMENSIONS) {
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

  const updatedStreak = isCorrect ? (existing.streak || 0) + 1 : 0;
  const bestStreak = Math.max(existing.bestStreak || 0, updatedStreak);

  // Classify response automaticity
  const responseState = classifyCognitiveResponse(isCorrect, latencyMs, targetLatencyMs);
  const isAutomatic = responseState === 'recalled';
  const consecutiveAutomatic = isAutomatic ? ((existing as any).consecutiveAutomatic || 0) + 1 : 0;

  const speedLadderLevel = evaluateSpeedLadderLevel(
    existing.speedLadderLevel || 1,
    newAttempts,
    newAccuracy,
    consecutiveAutomatic,
    updatedMedianLatency,
    targetLatencyMs
  );

  const masteryScore = Math.min(
    100,
    Math.max(
      0,
      Math.round(newAccuracy * 0.5 + Math.min(50, (speedLadderLevel - 1) * 10 + (isCorrect ? 5 : 0)))
    )
  );

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
    recentResponseTimeMs: latencyMs,
    lastPracticed: nowMs,
    decayRisk,
    masteryTier,
    streak: updatedStreak,
    bestStreak,
    masteryScore,
    errorFrequency: Number(((newAttempts - newCorrect) / newAttempts).toFixed(2)),
    numberExposures: newAttempts,
    speedLadderLevel,
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
