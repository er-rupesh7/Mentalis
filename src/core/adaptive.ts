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
  CustomDrillConfig,
  CalculationTechniqueId,
} from './types';
import {
  generateAddSubQuestion,
  generateMultiplicationQuestion,
  generateSquareCubeQuestion,
  generateArithmeticComboQuestion,
  generateCustomSquareQuestion,
  generateCustomCubeQuestion,
  SquareCubeSubTrack,
  randomInt,
} from './calcEngine';
import { SEVEN_DAYS_MS } from './mastery';
import {
  generateQuestionFromFact,
  generateTableModeQuestion,
} from './factEngine';
import {
  generateFractionPercentageQuestion,
} from './examQuantGenerators';

export interface TableAutomaticityResult {
  table: number;
  isMastered: boolean;
  accuracy: number;
  medianLatencyMs: number;
  testedMultiplesCount: number;
  unmasteredMultiples: number[];
}

export function checkTableAutomaticity(
  tableNum: number,
  factMap: Record<string, any> = {}
): TableAutomaticityResult {
  const tested: number[] = [];
  const unmastered: number[] = [];
  let totalAttempts = 0;
  let correctAttempts = 0;
  const latencies: number[] = [];

  // Check multiples 1 to 12 (primary automaticity band)
  for (let m = 1; m <= 12; m++) {
    const key = `mul:${tableNum}:${m}`;
    const mem = factMap[key];
    const attempts = mem ? (mem.totalAttempts ?? mem.attempts ?? 0) : 0;
    if (mem && attempts > 0) {
      tested.push(m);
      totalAttempts += attempts;
      const correct = mem.correctAttempts ?? (mem.totalAttempts !== undefined ? mem.totalAttempts - (mem.consecutiveErrors || 0) : attempts - (mem.errors || 0));
      correctAttempts += correct;
      if (mem.medianLatencyMs > 0) {
        latencies.push(mem.medianLatencyMs);
      }
      const factAcc = correct / Math.max(1, attempts);
      if (factAcc < 0.90 || mem.medianLatencyMs > 2200) {
        unmastered.push(m);
      }
    } else {
      unmastered.push(m);
    }
  }

  const accuracy = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;
  latencies.sort((a, b) => a - b);
  const medianLatencyMs =
    latencies.length > 0 ? latencies[Math.floor(latencies.length / 2)] : 0;

  // Mastered if at least 10 of 12 multiples tested, accuracy >= 95%, median latency <= 2200ms
  const isMastered =
    tested.length >= 10 && accuracy >= 95 && medianLatencyMs > 0 && medianLatencyMs <= 2200 && unmastered.length <= 1;

  return {
    table: tableNum,
    isMastered,
    accuracy,
    medianLatencyMs,
    testedMultiplesCount: tested.length,
    unmasteredMultiples: unmastered,
  };
}

export function evaluateTechniqueMastery(
  techniqueId: CalculationTechniqueId,
  consecutiveCorrect: number,
  averageLatencyMs: number,
  totalExposures: number
): { isMastered: boolean; nextTechnique?: CalculationTechniqueId } {
  const progression: CalculationTechniqueId[] = [
    'decade_bridging',
    'l2r_decade_striding',
    'century_crossing',
    'compensation_jump',
    'complements_100',
    'doubles_and_halves',
    'tens_units_decomposition',
    'decade_proximity_anchor',
    'sq_ending_5_ekadhikena',
    'sq_near_50_base',
    'sq_near_100_base',
    'sq_algebraic_duplex',
    'cube_unit_anchor',
  ];

  const isMastered = consecutiveCorrect >= 6 && averageLatencyMs <= 2600 && totalExposures >= 8;
  const currIdx = progression.indexOf(techniqueId);
  const nextTechnique =
    isMastered && currIdx >= 0 && currIdx < progression.length - 1
      ? progression[currIdx + 1]
      : undefined;

  return { isMastered, nextTechnique };
}

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
  customDrillConfig?: CustomDrillConfig;
  targetMasteryTable?: number;
  userLevel?: number;
  previousQuestion?: Question;
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
    customDrillConfig,
    userLevel = 1,
    previousQuestion,
  } = options;

  const isHighLevel = userLevel >= 15;
  const wasPrevSingleDigit = previousQuestion
    ? previousQuestion.operandA < 10 && (previousQuestion.operandB || 1) < 10
    : false;

  // 1. Custom Drill Mode (multi-select tables, squares, arithmetic combos, target mastery table)
  if (module === 'custom_drill' && customDrillConfig) {
    const cfg = customDrillConfig;

    // Single Table Mastery Mode (e.g. Table 18 or 19)
    if (cfg.targetMasteryTable) {
      const t = cfg.targetMasteryTable;
      const roll = Math.random();

      // 65% of the time: pick a multiple for this table (preferring unmastered multiples if factMemoryMap exists)
      if (roll < 0.65 || !cfg.interleavePreviousLearned || t <= 2) {
        const auto = checkTableAutomaticity(t, factMemoryMap);
        let m = randomInt(1, 12);
        if (auto.unmasteredMultiples.length > 0 && Math.random() < 0.8) {
          m = auto.unmasteredMultiples[Math.floor(Math.random() * auto.unmasteredMultiples.length)];
        }
        return generateTableModeQuestion(t, m, tableMode);
      }

      // 25% of the time: interleave previously learned tables (e.g. 2 to t - 1) to retain automaticity!
      if (roll < 0.90) {
        const prevTable = randomInt(2, Math.max(2, t - 1));
        const prevMult = randomInt(1, 12);
        const q = generateMultiplicationQuestion(prevTable, prevMult);
        q.selectionReason = `Interleaved retention review of Table ${prevTable}`;
        return q;
      }

      // 10% of the time: practice related / decomposition anchors
      const anchorMult = randomInt(1, 12);
      const q = generateTableModeQuestion(t, anchorMult, 'decomposition');
      q.selectionReason = `Decomposition accumulator practice for Table ${t}`;
      return q;
    }

    // General Multi-Select Workout Builder
    type PoolKind = 'table' | 'square' | 'cube' | 'arithmetic' | 'exam';
    const activePools: PoolKind[] = [];
    if (cfg.selectedTables && cfg.selectedTables.length > 0) activePools.push('table');
    if (cfg.selectedSquareRanges && cfg.selectedSquareRanges.length > 0) activePools.push('square');
    if (cfg.selectedCubeRanges && cfg.selectedCubeRanges.length > 0) activePools.push('cube');
    if (cfg.selectedArithmeticCombos && cfg.selectedArithmeticCombos.length > 0) activePools.push('arithmetic');
    if (cfg.selectedExamSkills && cfg.selectedExamSkills.length > 0) activePools.push('exam');

    if (activePools.length > 0) {
      const chosenPool = activePools[Math.floor(Math.random() * activePools.length)];

      if (chosenPool === 'table') {
        const t = cfg.selectedTables[Math.floor(Math.random() * cfg.selectedTables.length)];
        const m = randomInt(1, 12);
        return generateTableModeQuestion(t, m, tableMode);
      }

      if (chosenPool === 'square') {
        const range = cfg.selectedSquareRanges[Math.floor(Math.random() * cfg.selectedSquareRanges.length)];
        return generateCustomSquareQuestion(range.min, range.max);
      }

      if (chosenPool === 'cube') {
        const range = cfg.selectedCubeRanges[Math.floor(Math.random() * cfg.selectedCubeRanges.length)];
        return generateCustomCubeQuestion(range.min, range.max);
      }

      if (chosenPool === 'arithmetic') {
        const combo = cfg.selectedArithmeticCombos[Math.floor(Math.random() * cfg.selectedArithmeticCombos.length)];
        const op = cfg.operatorPreference === 'mixed' ? undefined : (cfg.operatorPreference as '+' | '-');
        return generateArithmeticComboQuestion(combo, { forceOperator: op });
      }

      if (chosenPool === 'exam') {
        const skill = cfg.selectedExamSkills[Math.floor(Math.random() * cfg.selectedExamSkills.length)];
        return generateQuestionFromFact(`exam:${skill}` as any);
      }
    }

    // Safety fallback for custom drill: if pools was somehow empty, respect any selected tables
    if (cfg.selectedTables && cfg.selectedTables.length > 0) {
      const t = cfg.selectedTables[Math.floor(Math.random() * cfg.selectedTables.length)];
      return generateTableModeQuestion(t, randomInt(1, 12), tableMode);
    }
    return generateTableModeQuestion(13, randomInt(1, 12), tableMode);
  }

  const analysis = analyzeProgress(progressMap);

  // If factMemoryMap provided, look for target facts matching the active module
  if (factMemoryMap && Object.keys(factMemoryMap).length > 0) {
    const keys = Object.keys(factMemoryMap);
    const candidateKeys = keys.filter((k) => {
      if (module === 'tables_bootcamp' || module === 'multiplication') {
        return activeTable ? k.startsWith(`mul:${activeTable}:`) : k.startsWith('mul:');
      }
      if (module === 'exam_quant') return k.startsWith('exam:');
      if (module === 'fractions_percentages') return k.startsWith('frac:');
      if (module === 'squares_cubes') return k.startsWith('square:') || k.startsWith('cube:');
      if (module === 'add_sub') return k.startsWith('add_sub:') || k.startsWith('comp:');
      return false;
    });

    if (candidateKeys.length > 0) {
      // Pick a random candidate among matching module facts to prevent back-to-back duplicate questions
      const matchedKey = candidateKeys[Math.floor(Math.random() * candidateKeys.length)];

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
      q = isHighLevel && activeAddSubLevel <= 2
        ? generateArithmeticComboQuestion('add_sub_3d_2d')
        : generateAddSubQuestion(activeAddSubLevel);
      break;
    case 'multiplication':
      q = generateMultiplicationQuestion(activeTable, undefined, {
        forbidSingleDigit: wasPrevSingleDigit,
        userLevel,
      });
      break;
    case 'tables_bootcamp': {
      const m = isHighLevel && wasPrevSingleDigit ? Math.floor(Math.random() * 8) + 12 : Math.floor(Math.random() * 12) + 1;
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
      q = isHighLevel
        ? generateArithmeticComboQuestion('add_sub_3d_2d')
        : generateAddSubQuestion(2);
      break;
  }

  if (mode === 'speed') {
    q.targetTimeSeconds = Math.min(q.targetTimeSeconds || 3, 2.0);
  }

  return q;
}
