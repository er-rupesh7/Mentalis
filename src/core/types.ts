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
  | 'fractions_percentages';

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
}

export type LearningMode = 'learn' | 'recall' | 'speed' | 'repair' | 'review';

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

export interface UserRank {
  title: string;
  tier: 'apprentice' | 'practitioner' | 'navigator' | 'centurion' | 'grandmaster';
  tierLevel: number;
  progressPercent: number;
  nextRankTitle: string;
  masteredTablesCount: number;
  masteredAddSubCount: number;
  masteredSquaresCount: number;
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
  | 'exam_quant';

export interface ExamTransferScores {
  calculationAutomaticity: number; // 0 - 100
  examSpeed: number;              // 0 - 100
  examAccuracy: number;           // 0 - 100
  foundationScore: number;        // 0 - 100
  retentionScore: number;         // 0 - 100
  rrbReadiness: number;           // 0 - 100
}


