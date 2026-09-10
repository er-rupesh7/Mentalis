/**
 * Adaptive Spaced Repetition & Question Selection System
 * Prioritizes weak, decayed, slow, and unmastered skills while maintaining variety.
 */

import { ModuleId, Question, UserProgressItem } from './types';
import {
  generateAddSubQuestion,
  generateMultiplicationQuestion,
  generateSquareCubeQuestion,
  SquareCubeSubTrack,
} from './calcEngine';
import { SEVEN_DAYS_MS } from './mastery';

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
  mode?: 'standard' | 'targeted_refresh' | 'weak_spots';
}

/**
 * Generates an adaptive question taking user performance and spaced repetition into account.
 */
export function getAdaptiveQuestion(options: AdaptiveQuestionOptions): Question {
  const {
    module,
    activeAddSubLevel,
    activeTable,
    activeSquareTrack,
    progressMap,
    mode = 'standard',
  } = options;

  const analysis = analyzeProgress(progressMap);

  // If in targeted refresh mode and decayed skills exist for this module, target that skill
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

  // If in weak spots mode and weak skills exist, target candidate
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

  // In standard mode, 80% focus on active selection, 20% interleave weak or decayed
  if (mode === 'standard' && Math.random() < 0.2) {
    if (analysis.weakSkills.length > 0 && Math.random() < 0.5) {
      const weakItem = analysis.weakSkills[Math.floor(Math.random() * analysis.weakSkills.length)];
      if (weakItem.module === module) {
        if (module === 'multiplication') {
          const t = parseInt(weakItem.itemId.replace('table_', ''), 10);
          if (!isNaN(t)) return generateMultiplicationQuestion(t);
        } else if (module === 'add_sub') {
          const lvl = parseInt(weakItem.itemId.replace('add_sub_level_', ''), 10);
          if (!isNaN(lvl)) return generateAddSubQuestion(lvl);
        }
      }
    }
  }

  // Standard generation
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
