/**
 * Adaptive Spaced Retrieval & Fact-Level Question Selection System for Mentalis
 * Prioritizes weak, decayed, slow, and unmastered facts based on demonstrated accuracy,
 * latency, error confusion patterns, forgetting risk, and session fatigue.
 */

import { ModuleId, Question, UserProgressItem } from './types';
import {
  generateAddSubQuestion,
  generateMultiplicationQuestion,
  generateSquareCubeQuestion,
  SquareCubeSubTrack,
} from './calcEngine';
import { SEVEN_DAYS_MS } from './mastery';
import { FactKey, FactMemoryState } from './factModel';
import { selectNextFact } from './memoryScheduler';
import { generateQuestionFromFact, getCandidateFactKeysForTarget } from './factEngine';
import { FatigueSignal } from './learnerModel';

export interface AdaptiveAnalysis {
  decayedSkills: UserProgressItem[];
  weakSkills: UserProgressItem[];
  slowSkills: UserProgressItem[];
  masteredCount: number;
}

/**
 * Analyzes progress map and classifies skills by pedagogical urgency.
 */
export function analyzeProgress(progressMap: Record<string, UserProgressItem>): AdaptiveAnalysis {
  const now = Date.now();
  const decayedSkills: UserProgressItem[] = [];
  const weakSkills: UserProgressItem[] = [];
  const slowSkills: UserProgressItem[] = [];
  let masteredCount = 0;

  Object.values(progressMap).forEach((item) => {
    if (item.masteryStatus === 'mastered') {
      masteredCount++;
      if (now - item.lastPracticed > SEVEN_DAYS_MS) {
        decayedSkills.push(item);
      }
    } else if (item.masteryStatus === 'needs_refresh') {
      decayedSkills.push(item);
    } else if (item.totalAttempts >= 3) {
      const acc = item.correctCount / item.totalAttempts;
      if (acc < 0.75 || item.lastResult === 'incorrect') {
        weakSkills.push(item);
      } else if (item.medianResponseTimeMs > 4000) {
        slowSkills.push(item);
      }
    }
  });

  return {
    decayedSkills,
    weakSkills,
    slowSkills,
    masteredCount,
  };
}

/**
 * Recommends today's high-priority drill based on decay or weakness.
 */
export function getRecommendedNextDrill(
  progressMap: Record<string, UserProgressItem>,
  currentModule: ModuleId,
  currentLevel: number,
  currentTable: number
): {
  module: ModuleId;
  targetId: string;
  targetLevel?: number;
  targetTable?: number;
  title: string;
  reason: string;
} {
  const analysis = analyzeProgress(progressMap);

  // 1. Stale / Decayed skill priority (> 7 days)
  if (analysis.decayedSkills.length > 0) {
    const item = analysis.decayedSkills[0];
    if (item.module === 'multiplication') {
      const tableMatch = item.itemId.match(/table_(\d+)/);
      const tableNum = tableMatch ? parseInt(tableMatch[1], 10) : currentTable;
      return {
        module: 'multiplication',
        targetId: item.itemId,
        targetTable: tableNum,
        title: `Table ${tableNum} Refresher`,
        reason: 'Skill hasn’t been practiced in over 7 days. A quick drill will restore full green status.',
      };
    } else if (item.module === 'add_sub') {
      const lvlMatch = item.itemId.match(/add_sub_level_(\d+)/);
      const lvlNum = lvlMatch ? parseInt(lvlMatch[1], 10) : currentLevel;
      return {
        module: 'add_sub',
        targetId: item.itemId,
        targetLevel: lvlNum,
        title: `Level ${lvlNum} Decadist Refresher`,
        reason: 'Mastery is decaying due to elapsed time. Refresh your Left-to-Right accumulator.',
      };
    }
  }

  // 2. Weak skill priority (accuracy < 75%)
  if (analysis.weakSkills.length > 0) {
    const item = analysis.weakSkills[0];
    if (item.module === 'multiplication') {
      const tableMatch = item.itemId.match(/table_(\d+)/);
      const tableNum = tableMatch ? parseInt(tableMatch[1], 10) : currentTable;
      return {
        module: 'multiplication',
        targetId: item.itemId,
        targetTable: tableNum,
        title: `Table ${tableNum} Reinforcement`,
        reason: 'Accuracy is currently below target. Focused repetition will rebuild mental anchors.',
      };
    } else if (item.module === 'add_sub') {
      const lvlMatch = item.itemId.match(/add_sub_level_(\d+)/);
      const lvlNum = lvlMatch ? parseInt(lvlMatch[1], 10) : currentLevel;
      return {
        module: 'add_sub',
        targetId: item.itemId,
        targetLevel: lvlNum,
        title: `Level ${lvlNum} Remediation`,
        reason: 'Previous session had slips in place-value accumulation. Reinforce your mental steps.',
      };
    }
  }

  // 3. Steady Curriculum Progression
  if (currentModule === 'multiplication') {
    return {
      module: 'multiplication',
      targetId: `table_${currentTable}`,
      targetTable: currentTable,
      title: `Table ${currentTable} Mastery`,
      reason: 'Continue progressive matrix drills toward the 100-table grandmaster target.',
    };
  }

  return {
    module: 'add_sub',
    targetId: `add_sub_level_${currentLevel}`,
    targetLevel: currentLevel,
    title: `Level ${currentLevel} Progression`,
    reason: 'Advance your Left-to-Right Most Significant Digit mental arithmetic speed.',
  };
}

export interface AdaptiveQuestionOptions {
  module: ModuleId;
  activeAddSubLevel: number;
  activeTable: number;
  activeSquareTrack: SquareCubeSubTrack;
  progressMap: Record<string, UserProgressItem>;
  factMemoryMap?: Record<string, FactMemoryState>;
  recentAskedKeys?: FactKey[];
  fatigue?: FatigueSignal;
  delayedReviewQueue?: { factKey: FactKey; dueAtCount: number }[];
  currentSessionQuestionCount?: number;
  mode?: 'standard' | 'targeted_refresh' | 'weak_spots' | 'review' | 'repair' | 'speed';
}

/**
 * Generates an adaptive question taking individual fact-level memory,
 * forgetting curves, and error confusion into account.
 */
export function getAdaptiveQuestion(options: AdaptiveQuestionOptions): Question {
  const {
    module,
    activeAddSubLevel,
    activeTable,
    activeSquareTrack,
    progressMap,
    factMemoryMap,
    recentAskedKeys = [],
    fatigue,
    delayedReviewQueue = [],
    currentSessionQuestionCount = 0,
    mode = 'standard',
  } = options;

  // If factMemoryMap is available, perform fact-level adaptive selection
  if (factMemoryMap && (module === 'multiplication' || module === 'squares_cubes')) {
    const candidateKeys = getCandidateFactKeysForTarget(
      module,
      activeTable,
      activeSquareTrack
    );

    if (candidateKeys.length > 0) {
      const selection = selectNextFact(
        candidateKeys,
        factMemoryMap,
        recentAskedKeys,
        fatigue,
        delayedReviewQueue,
        currentSessionQuestionCount
      );

      const q = generateQuestionFromFact(selection.factKey);
      // Attach factKey to question id or custom property for easy tracking
      return {
        ...q,
        subTrack: selection.factKey,
      };
    }
  }

  // Fallback to progressive generation
  const analysis = analyzeProgress(progressMap);

  if (mode === 'targeted_refresh' && analysis.decayedSkills.length > 0) {
    const candidate = analysis.decayedSkills.find((s) => s.module === module) || analysis.decayedSkills[0];
    if (candidate.module === 'multiplication') {
      const t = parseInt(candidate.itemId.replace('table_', ''), 10);
      if (!isNaN(t)) return generateMultiplicationQuestion(t);
    } else if (candidate.module === 'add_sub') {
      const lvl = parseInt(candidate.itemId.replace('add_sub_level_', ''), 10);
      if (!isNaN(lvl)) return generateAddSubQuestion(lvl);
    }
  }

  if (mode === 'weak_spots' && analysis.weakSkills.length > 0) {
    const candidate = analysis.weakSkills.find((s) => s.module === module) || analysis.weakSkills[0];
    if (candidate.module === 'multiplication') {
      const t = parseInt(candidate.itemId.replace('table_', ''), 10);
      if (!isNaN(t)) return generateMultiplicationQuestion(t);
    } else if (candidate.module === 'add_sub') {
      const lvl = parseInt(candidate.itemId.replace('add_sub_level_', ''), 10);
      if (!isNaN(lvl)) return generateAddSubQuestion(lvl);
    }
  }

  switch (module) {
    case 'add_sub':
      return generateAddSubQuestion(activeAddSubLevel);
    case 'multiplication':
      return generateMultiplicationQuestion(activeTable);
    case 'squares_cubes':
      return generateSquareCubeQuestion(activeSquareTrack);
    default:
      return generateAddSubQuestion(2);
  }
}
