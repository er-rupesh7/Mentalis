/**
 * Core Data Models and Domain Interfaces for Mentalis
 * Strictly platform-agnostic (can be imported in Web, React Native, or Node).
 */

export type ModuleId = 'add_sub' | 'multiplication' | 'squares_cubes' | 'working_memory';

export type Operator = '+' | '-' | '×' | '^2' | '^3';

export interface CalculationStep {
  stepNumber: number;
  title: string;
  subVocalization: string; // The auditory echo to whisper or hold in mind
  intermediateValue: number | string; // Running accumulator state
  explanation: string;
}

export interface Question {
  id: string;
  module: ModuleId;
  operandA: number;
  operandB: number;
  operator: Operator;
  correctAnswer: number;
  prompt: string; // e.g., "57 + 68" or "84 - 38" or "17 × 6" or "53²" or "21³"
  strategyTitle: string; // e.g. "Left-to-Right Accumulator", "Complements Method"
  steps: CalculationStep[];
  mentalTip: string;
  targetTimeSeconds: number;
  difficultyRating: number; // 1 - 10
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
  itemId: string; // e.g., "table_7", "add_sub_level_2", "square_near_50"
  module: ModuleId;
  totalAttempts: number;
  correctCount: number;
  streak: number;
  bestStreak: number;
  responseTimesMs: number[];
  lastPracticed: number; // UNIX epoch milliseconds
  masteryStatus: MasteryStatus;
  masteryScore: number; // 0 - 100 percentage
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
}

export interface AnzanConfig {
  count: number;
  digits: 1 | 2 | 3;
  intervalMs: number; // 300, 500, 800, 1200
}

export type ViewMode = 'dashboard' | 'practice' | 'anzan' | 'heatmap';
