/**
 * Adaptive Spaced Repetition & Question Selection System for Mentalis
 * Prioritizes weak, decayed, slow, and unmastered skills while maintaining variety.
 * Fully supports Tables 11-20 Bootcamp, Exam Quant, Fractions/Percentages, and Core Modules.
 */

import {
  ModuleId,
  Question,
  UserProgressItem,
  TableTrainingMode,
  ExamSubSkill,
} from './types';
import {
  generateAddSubQuestion,
  generateMultiplicationQuestion,
  generateSquareCubeQuestion,
  SquareCubeSubTrack,
} from './calcEngine';
import { SEVEN_DAYS_MS } from './mastery';
import {
  generateQuestionFromFact,
  generateTableModeQuestion,
} from './factEngine';
import {
  generateFractionPercentageQuestion,
} from './examQuantGenerators';

export interface AdaptiveAnalysis {
  decayedSkills: UserProgressItem[];
  weakSkills: UserProgressItem[];
  slowSkills: UserProgressItem[];
  masteredCount: number;
}

/**
 * Analyzes progress map and classifies skills by pedagogical urgency.
 */
export function analyzeProgress(progressMap?: Record<string, UserProgressItem>): AdaptiveAnalysis {
  const safeMap = progressMap || {};
  const now = Date.now();
  const decayedSkills: UserProgressItem[] = [];
  const weakSkills: UserProgressItem[] = [];
  const slowSkills: UserProgressItem[] = [];
  let masteredCount = 0;

  Object.values(safeMap).forEach((item) => {
    if (!item) return;
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
    if (item.module === 'tables_bootcamp' || item.module === 'multiplication') {
      const tableMatch = item.itemId.match(/table_(\d+)/);
      const tableNum = tableMatch ? parseInt(tableMatch[1], 10) : currentTable;
      return {
        module: item.module,
        targetId: item.itemId,
        targetTable: tableNum,
        title: item.module === 'tables_bootcamp' ? `Table ×${tableNum} Refresher` : `Table ${tableNum} Refresher`,
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
    } else if (item.module === 'exam_quant') {
      return {
        module: 'exam_quant',
        targetId: item.itemId,
        title: 'Banking Quant Calculation Refresher',
        reason: 'Speed and calculation accuracy degrade without regular spaced retrieval.',
      };
    } else if (item.module === 'fractions_percentages') {
      return {
        module: 'fractions_percentages',
        targetId: item.itemId,
        title: 'Fraction ↔ Percentage Refresher',
        reason: 'Maintain instant automaticity on benchmark fraction-to-percentage conversions.',
      };
    } else if (item.module === 'squares_cubes') {
      return {
        module: 'squares_cubes',
        targetId: item.itemId,
        title: 'Squares & Cubes Refresher',
        reason: 'Revisit algebraic mental patterns to maintain peak recall speed.',
      };
    }
  }

  // 2. Weak skill priority (accuracy < 75%)
  if (analysis.weakSkills.length > 0) {
    const item = analysis.weakSkills[0];
    if (item.module === 'tables_bootcamp' || item.module === 'multiplication') {
      const tableMatch = item.itemId.match(/table_(\d+)/);
      const tableNum = tableMatch ? parseInt(tableMatch[1], 10) : currentTable;
      return {
        module: item.module,
        targetId: item.itemId,
        targetTable: tableNum,
        title: item.module === 'tables_bootcamp' ? `Table ×${tableNum} Reinforcement` : `Table ${tableNum} Reinforcement`,
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
    } else if (item.module === 'exam_quant') {
      return {
        module: 'exam_quant',
        targetId: item.itemId,
        title: 'Exam Quant Speed Repair',
        reason: 'Targeted drill on calculation shortcuts to eliminate time leaks in RRB PO Prelims.',
      };
    } else if (item.module === 'fractions_percentages') {
      return {
        module: 'fractions_percentages',
        targetId: item.itemId,
        title: 'Fraction-Percentage Memory Builder',
        reason: 'Solidify your mental conversion table (1/2 to 1/40) for rapid simplification.',
      };
    } else if (item.module === 'squares_cubes') {
      let title = 'Squares & Cubes Reinforcement';
      if (item.itemId.includes('near_50')) {
        title = 'Near 50 Reinforcement';
      } else if (item.itemId.includes('near_100')) {
        title = 'Near 100 Reinforcement';
      } else if (item.itemId.includes('ending_5')) {
        title = 'Ending in 5 Reinforcement';
      }
      return {
        module: 'squares_cubes',
        targetId: item.itemId,
        title,
        reason: 'Targeted drill on algebraic squaring patterns to solidify mental shortcut precision.',
      };
    } else if (item.module === 'working_memory') {
      return {
        module: 'working_memory',
        targetId: item.itemId,
        title: 'Anzan Working Memory Drill',
        reason: 'Rapid serial mental calculation to expand working memory buffer.',
      };
    }
  }

  // 3. Steady Curriculum Progression
  if (currentModule === 'tables_bootcamp') {
    return {
      module: 'tables_bootcamp',
      targetId: `table_${currentTable}`,
      targetTable: currentTable,
      title: `Table ×${currentTable} Bootcamp`,
      reason: 'Achieve sub-2.0s automaticity through bidirectional, decomposition, and missing-fact training.',
    };
  }

  if (currentModule === 'exam_quant') {
    return {
      module: 'exam_quant',
      targetId: 'quant_simplification',
      title: 'RRB PO / IBPS Quant Drills',
      reason: 'Rapid speed-math, approximation, and BODMAS calculation mastery for preliminary banking exams.',
    };
  }

  if (currentModule === 'fractions_percentages') {
    return {
      module: 'fractions_percentages',
      targetId: 'frac_perc_table',
      title: 'Fraction ↔ Percentage Mastery',
      reason: 'Master instant recall of 1/2 to 1/40 fraction-percentage pairs for banking simplification.',
    };
  }

  if (currentModule === 'multiplication') {
    return {
      module: 'multiplication',
      targetId: `table_${currentTable}`,
      targetTable: currentTable,
      title: `Table ${currentTable} Mastery`,
      reason: 'Continue progressive matrix drills toward the 100-table grandmaster target.',
    };
  }

  if (currentModule === 'squares_cubes') {
    return {
      module: 'squares_cubes',
      targetId: 'sq_cube_precision',
      title: 'Squares & Cubes Precision',
      reason: 'Master lightning-fast squaring and cubing with algebraic mental shortcuts.',
    };
  }

  if (currentModule === 'working_memory') {
    return {
      module: 'working_memory',
      targetId: 'anzan_flash',
      title: 'Anzan Flash Training',
      reason: 'Rapid-fire serial visual arithmetic to stretch mental calculation bandwidth.',
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
  progressMap?: Record<string, UserProgressItem>;
  factMemoryMap?: Record<string, any>;
  mode?: 'standard' | 'targeted_refresh' | 'weak_spots' | 'speed';
  tableMode?: TableTrainingMode;
  examSubSkill?: ExamSubSkill;
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
    factMemoryMap,
    mode = 'standard',
    tableMode = 'recall',
    examSubSkill,
  } = options;

  const analysis = analyzeProgress(progressMap);

  // If factMemoryMap provided, look for target fact
  if (factMemoryMap && Object.keys(factMemoryMap).length > 0) {
    const keys = Object.keys(factMemoryMap);
    const matchedKey =
      keys.find((k) => {
        if (module === 'tables_bootcamp' || module === 'multiplication') {
          return k.startsWith(`mul:${activeTable}:`) || k.startsWith('mul:');
        }
        if (module === 'exam_quant') return k.startsWith('exam:');
        if (module === 'fractions_percentages') return k.startsWith('frac:');
        if (module === 'squares_cubes') return k.startsWith('square:') || k.startsWith('cube:');
        if (module === 'add_sub') return k.startsWith('add_sub:') || k.startsWith('comp:');
        return false;
      }) || keys[0];

    // If it's a tables_bootcamp fact and tableMode is specified, generate with that mode
    if (module === 'tables_bootcamp' && matchedKey.startsWith('mul:')) {
      const parts = matchedKey.split(':');
      const tbl = parseInt(parts[1], 10) || activeTable || 13;
      const m = parseInt(parts[2], 10) || Math.floor(Math.random() * 12) + 1;
      const q = generateTableModeQuestion(tbl, m, tableMode);
      if (mode === 'speed') {
        q.targetTimeSeconds = Math.min(q.targetTimeSeconds || 3, 2.0);
      }
      return q;
    }

    const q = generateQuestionFromFact(matchedKey as any);
    q.factKey = matchedKey;
    if (mode === 'speed') {
      q.targetTimeSeconds = Math.min(q.targetTimeSeconds || 3, 2.0);
    }
    return q;
  }

  // If in targeted refresh mode and decayed skills exist for this module, target that skill
  if (mode === 'targeted_refresh' && analysis.decayedSkills.length > 0) {
    const candidate =
      analysis.decayedSkills.find((s) => s.module === module) || analysis.decayedSkills[0];
    if (candidate.module === 'tables_bootcamp') {
      const t = parseInt(candidate.itemId.replace('table_', ''), 10) || activeTable || 13;
      const m = Math.floor(Math.random() * 12) + 1;
      return generateTableModeQuestion(t, m, tableMode);
    } else if (candidate.module === 'multiplication') {
      const t = parseInt(candidate.itemId.replace('table_', ''), 10);
      if (!isNaN(t)) return generateMultiplicationQuestion(t);
    } else if (candidate.module === 'add_sub') {
      const lvl = parseInt(candidate.itemId.replace('add_sub_level_', ''), 10);
      if (!isNaN(lvl)) return generateAddSubQuestion(lvl);
    }
  }

  // If in weak spots mode and weak skills exist, target candidate
  if (mode === 'weak_spots' && analysis.weakSkills.length > 0) {
    const candidate =
      analysis.weakSkills.find((s) => s.module === module) || analysis.weakSkills[0];
    if (candidate.module === 'tables_bootcamp') {
      const t = parseInt(candidate.itemId.replace('table_', ''), 10) || activeTable || 13;
      const m = Math.floor(Math.random() * 12) + 1;
      return generateTableModeQuestion(t, m, tableMode);
    } else if (candidate.module === 'multiplication') {
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
        if (module === 'tables_bootcamp') {
          const t = parseInt(weakItem.itemId.replace('table_', ''), 10) || activeTable || 13;
          const m = Math.floor(Math.random() * 12) + 1;
          return generateTableModeQuestion(t, m, tableMode);
        } else if (module === 'multiplication') {
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
  let q: Question;
  switch (module) {
    case 'add_sub':
      q = generateAddSubQuestion(activeAddSubLevel);
      break;
    case 'multiplication':
      q = generateMultiplicationQuestion(activeTable);
      break;
    case 'tables_bootcamp': {
      const m = Math.floor(Math.random() * 12) + 1;
      q = generateTableModeQuestion(activeTable || 13, m, tableMode);
      break;
    }
    case 'exam_quant': {
      const sub = examSubSkill || 'quant_simplification';
      q = generateQuestionFromFact(`exam:${sub}`);
      break;
    }
    case 'fractions_percentages':
      q = generateFractionPercentageQuestion();
      break;
    case 'squares_cubes':
      q = generateSquareCubeQuestion(activeSquareTrack);
      break;
    default:
      q = generateAddSubQuestion(2);
      break;
  }

  if (mode === 'speed') {
    q.targetTimeSeconds = Math.min(q.targetTimeSeconds || 3, 2.0);
  }

  return q;
}
