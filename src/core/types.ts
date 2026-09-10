/**
 * Core Data Models and Domain Interfaces for Mentalis
 * Strictly platform-agnostic (can be imported in Web, React Native, or Node).
 */

export type ModuleId = 'add_sub' | 'multiplication' | 'squares_cubes' | 'working_memory';

export type Operator = '+' | '-' | '×' | '^2' | '^3';

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
}

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

export type ViewMode = 'dashboard' | 'practice' | 'anzan' | 'heatmap';
