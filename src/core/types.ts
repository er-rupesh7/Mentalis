/**
 * Core Data Models and Domain Interfaces for Mentalis
 * Strictly platform-agnostic (can be imported in Web, React Native, or Node).
 */

export type ModuleId =
  | 'add_sub'
  | 'multiplication'
  | 'squares_cubes'
  | 'working_memory'
  | 'tables_bootcamp'
  | 'exam_quant'
  | 'fractions_percentages'
  | 'custom_drill';

export type Operator = '+' | '-' | '×' | '÷' | '^2' | '^3' | '%' | '≈' | ':';

export type TableTrainingMode =
  | 'recognition'      // Mode A: Multiple choice with smart distractors
  | 'recall'           // Mode B: Direct typed recall
  | 'reverse'          // Mode C: 91 = 13 × ?
  | 'missing_fact'     // Mode D: 13 × ? = 91
  | 'related_fact'     // Mode E: 13 × 7 = 91 -> 13 × 8 = ?
  | 'neighbour_fact'   // Mode F: 13 × 7 = 91 -> 13 × 9 = ?
  | 'decomposition'    // Mode G: (10 × 7) + (3 × 7) = 70 + 21 = 91
  | 'bidirectional';   // Mode H: 7 × 13, 13 × 7, 91 ÷ 13, 91 ÷ 7

export type ExamSubSkill =
  | 'quant_simplification'
  | 'quant_approximation'
  | 'quant_percentage'
  | 'quant_ratio'
  | 'quant_average'
  | 'quant_profit_loss'
  | 'quant_si_ci'
  | 'quant_time_work'
  | 'quant_speed_distance'
  | 'quant_di_arithmetic'
  | 'quant_number_series';

export type SpeedLadderLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type CognitiveResponseState =
  | 'recalled'    // High accuracy + low latency (within adaptive automaticity threshold)
  | 'calculated'  // Correct answer but deliberate mental steps (moderate latency)
  | 'slow'        // Correct answer but sluggish (> 1.5x target latency)
  | 'uncertain'   // Correct answer after hint or hesitant pause (> 5.0s)
  | 'wrong';      // Incorrect calculation or skip

export interface CalculationStep {
  stepNumber: number;
  title: string;
  subVocalization: string; // The auditory echo to hold in working memory
  intermediateValue: number | string; // Running accumulator state
  explanation: string;
  highlightDigits?: string;
}

export interface Question {
  id: string;
  module: ModuleId;
  operandA: number;
  operandB: number;
  operator: Operator;
  correctAnswer: number;
  prompt: string; // e.g., "57 + 68", "84 - 38", "17 × 6", "53²", "21³"
  strategyTitle: string; // e.g. "Left-to-Right Accumulator", "Complements Method"
  steps: CalculationStep[];
  mentalTip: string;
  targetTimeSeconds: number;
  difficultyRating: number; // 1 - 10
  subTrack?: string;
  factKey?: string;
  selectionReason?: string;
  options?: (number | string)[];
  questionType?: 'numeric' | 'multiple_choice';
  tableMode?: TableTrainingMode;
  examSubSkill?: string;
  anchorFactPrompt?: string;
  strategyId?: string;
}

export type LearningMode = 'learn' | 'recall' | 'speed' | 'repair' | 'review';
export type WorkoutMode = 'exercise' | 'practice';

export interface LevelDefinition {
  id: string;
  module: ModuleId;
  levelNumber: number;
  title: string;
  subtitle: string;
  description: string;
  targetTimeSeconds: number;
  badgeName: string;
}

export type MasteryStatus = 'untrained' | 'learning' | 'mastered' | 'needs_refresh';

export interface UserProgressItem {
  itemId: string; // e.g., "table_7", "add_sub_level_2", "sq_cube_near_50"
  module: ModuleId;
  totalAttempts: number;
  correctCount: number;
  streak: number;
  bestStreak: number;
  responseTimesMs: number[];
  medianResponseTimeMs: number;
  recentAccuracy: number; // 0 to 100 based on recent window
  lastPracticed: number; // UNIX epoch milliseconds
  masteryStatus: MasteryStatus;
  masteryScore: number; // 0 - 100 percentage
  lastResult?: 'correct' | 'incorrect';
}

export interface OverallStats {
  totalCalculations: number;
  totalCorrect: number;
  currentStreak: number;
  bestStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  dailyActiveStreak: number;
  totalTimeSpentSeconds: number;
}

export interface AnzanSequence {
  id: string;
  numbers: number[];
  expectedSum: number;
  intervalMs: number;
  digits: 1 | 2 | 3;
  allowNegatives: boolean;
}

export interface AnzanConfig {
  count: number;
  digits: 1 | 2 | 3;
  intervalMs: number; // 300, 500, 800, 1200
  allowNegatives: boolean;
  presetName?: string;
}

export interface AnzanRecord {
  id: string;
  timestamp: number;
  config: AnzanConfig;
  numbers: number[];
  expectedSum: number;
  userAnswer: number;
  isCorrect: boolean;
  durationMs: number;
}

export interface AnzanStats {
  totalRuns: number;
  totalCorrect: number;
  bestStreak: number;
  currentStreak: number;
  records: AnzanRecord[];
}

export interface SessionDrillConfig {
  goalCount: number; // e.g. 10, 20, 0 for endless
  isEndless: boolean;
  mode: 'standard' | 'targeted_refresh' | 'weak_spots';
  timeLimitSeconds?: number;
  workoutMode?: WorkoutMode;
}

export interface SessionSummary {
  totalAnswered: number;
  correctCount: number;
  accuracy: number;
  avgResponseTimeMs: number;
  cpm: number;
  strongestSkill: string;
  needsReviewSkills: string[];
  recommendedNextDrill: {
    module: ModuleId;
    targetId: string;
    targetLevel?: number;
    targetTable?: number;
    title: string;
    reason: string;
  };
}

export interface RatingTierDetails {
  tier: string;
  division: string;
  badgeTitle: string;
  color: string;
}

export interface UserRank {
  title: string;
  tier: 'apprentice' | 'practitioner' | 'navigator' | 'centurion' | 'grandmaster';
  tierLevel: number;
  progressPercent: number;
  nextRankTitle: string;
  masteredTablesCount: number;
  masteredAddSubCount: number;
  masteredSquaresCount: number;
  rating: number;
  ratingTier: string;
  ratingTierDetails?: RatingTierDetails;
  percentile: string;
  totalTimeSpentSeconds?: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  category: 'speed' | 'accuracy' | 'streak' | 'mastery' | 'anzan';
  unlocked: boolean;
  unlockedAt?: number;
}

export type TableChartTab = 'mul' | 'squares' | 'cubes' | 'sqrt' | 'cbrt';

export type ViewMode =
  | 'dashboard'
  | 'practice'
  | 'anzan'
  | 'heatmap'
  | 'table_chart'
  | 'assessment'
  | 'profile'
  | 'memory_map'
  | 'bootcamp_11_20'
  | 'exam_quant'
  | 'techniques';

export interface ExamTransferScores {
  calculationAutomaticity: number; // 0 - 100
  examSpeed: number;              // 0 - 100
  examAccuracy: number;           // 0 - 100
  foundationScore: number;        // 0 - 100
  retentionScore: number;         // 0 - 100
  rrbReadiness: number;           // 0 - 100
}

export type ArithmeticCombination =
  | 'add_sub_2d_1d'
  | 'add_sub_2d_2d'
  | 'add_sub_3d_1d'
  | 'add_sub_3d_2d'
  | 'add_sub_3d_3d'
  | 'add_sub_4d_2d'
  | 'add_sub_4d_3d'
  | 'add_sub_4d_4d'
  | 'add_sub_chain_3';

export interface CustomDrillConfig {
  id: string;
  name: string;
  selectedTables: number[];                             // e.g. [17, 18, 19]
  selectedSquareRanges: { min: number; max: number }[]; // e.g. [{ min: 11, max: 25 }]
  selectedCubeRanges: { min: number; max: number }[];   // e.g. [{ min: 1, max: 20 }]
  selectedArithmeticCombos: ArithmeticCombination[];
  selectedExamSkills: ExamSubSkill[];
  operatorPreference: '+' | '-' | '×' | 'mixed';
  timeLimitSeconds?: number;                            // e.g. 300 for 5 min
  goalCount?: number;                                   // e.g. 25 questions
  interleavePreviousLearned: boolean;                   // default true
  targetMasteryTable?: number;                          // if single-table mastery run
}

export type TechniqueModuleCategory =
  | 'fundamental_operations'
  | 'multiplication_engine'
  | 'squares_cubes_powers'
  | 'roots_approximations'
  | 'fast_division_percentages';

export type CalculationTechniqueId =
  // Module 1: Fundamental Operations
  | 'add_l2r_place_value'
  | 'add_bridging_base10'
  | 'add_compensation'
  | 'sub_l2r_step'
  | 'sub_shopkeeper_count_up'
  | 'sub_nikhilam_all_from_9'
  // Module 2: Multiplication Techniques
  | 'mult_power10_5'
  | 'mult_power10_25'
  | 'mult_power10_125'
  | 'mult_power10_625'
  | 'mult_repunit_11'
  | 'mult_repunit_teens_decade'
  | 'mult_repunit_9s_ekanyunena'
  | 'mult_pattern_consecutive_int'
  | 'mult_pattern_consecutive_gap2'
  | 'mult_pattern_antyayor_dasakepi'
  | 'mult_pattern_reverse_antyayor'
  | 'mult_pattern_half_double'
  | 'mult_vedic_urdhva_tiryag'
  | 'mult_trachtenberg_rules'
  | 'mult_vedic_base_yavadunam'
  // Module 3: Squares, Cubes & Powers
  | 'sq_base_50'
  | 'sq_base_100'
  | 'sq_ending_5'
  | 'sq_ending_25'
  | 'sq_universal_duplex'
  | 'cube_tables_1_25'
  | 'cube_algebraic_binomial'
  // Module 4: Root Extractions & Approximations
  | 'root_sqrt_perfect_6d'
  | 'root_sqrt_approx_differential'
  | 'root_cbrt_perfect_6d'
  // Module 5: Fast Division & Percentages
  | 'div_vedic_flag_dhvajanka'
  | 'div_vedic_osculators'
  | 'pct_reversible_law'
  | 'pct_fraction_pivots'
  // Backward compatibility alias tags
  | 'decade_bridging'
  | 'l2r_decade_striding'
  | 'century_crossing'
  | 'triple_digit_accumulation'
  | 'compensation_jump'
  | 'complements_100'
  | 'doubles_and_halves'
  | 'tens_units_decomposition'
  | 'decade_proximity_anchor'
  | 'sq_ending_5_ekadhikena'
  | 'sq_near_50_base'
  | 'sq_near_100_base'
  | 'sq_algebraic_duplex'
  | 'cube_unit_anchor';

export interface TechniqueMasteryState {
  techniqueId: CalculationTechniqueId;
  title: string;
  consecutiveCorrect: number;
  averageLatencyMs: number;
  totalExposures: number;
  isMastered: boolean;
  unlockedAt?: number;
  masteredAt?: number;
}

export interface GuidedStep {
  stepIndex: number;
  prompt: string;
  expectedValue: number | string;
  subVocalization: string;
  explanation: string;
  formula?: string;
  ghostHint?: string;
}

export interface GeneratedTechniqueProblem {
  id: string;
  techniqueId: CalculationTechniqueId;
  difficultyLevel: 1 | 2 | 3 | 4 | 5;
  operandA: number;
  operandB?: number;
  operator: Operator;
  prompt: string;
  correctAnswer: number | string;
  ghostAccumulator: string;
  mentalTip: string;
  steps: GuidedStep[];
}

export interface TechniqueLesson {
  id: CalculationTechniqueId;
  module: TechniqueModuleCategory;
  title: string;
  subtitle: string;
  difficultyTier: 1 | 2 | 3 | 4 | 5;
  algebraicFormula: string;
  mathSecret: {
    title: string;
    description: string;
    algebraicProof: string;
    conditions: string;
  };
  mindOdometer: {
    trickTitle: string;
    subvocalInstruction: string;
    carryEliminationRule: string;
    visualAccumulatorExample: string;
  };
  workedExample: {
    problem: string;
    steps: {
      step: number;
      action: string;
      echo: string;
      buffer: string | number;
    }[];
    finalResult: string | number;
  };
}

export interface TableMasteryAlert {
  table: number;
  nextTable: number;
  accuracy: number;
  medianLatencyMs: number;
}

export interface BrainMatrix {
  schemaVersion: number;
  userId: string | null;
  exportedAt: number;
  lastSyncedAt: number | null;
  learnerProfile: any;
  factMemoryMap: Record<string, any>;
  techniqueMasteryMap: Record<string, TechniqueMasteryState>;
  progressMap: Record<string, any>;
  overallStats: any;
  customDrillPresets: CustomDrillConfig[];
  examTransferScores: ExamTransferScores | null;
}



