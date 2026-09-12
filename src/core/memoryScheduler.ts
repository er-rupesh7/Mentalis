/**
 * Adaptive Memory Scheduler & Pedagogical Remediation Engine for Mentalis
 * Implements deterministic SM-2 / Half-Life spaced retrieval prioritization,
 * error confusion diagnostics, repair card construction, and session queue mixing.
 */

import {
  FactKey,
  FactMemory,
  FactMemoryState,
  FactErrorPatternType,
  parseFactKey,
  formatFactKey,
  getFactCorrectAnswer,
  calculateForgettingRisk,
  createInitialFactMemoryState,
} from './factModel';
import { getBestStrategyForFact, StrategyDefinition } from './strategyCatalog';
import { FatigueSignal } from './learnerModel';

export interface RepairCard {
  factKey: FactKey;
  prompt: string;
  userAnswer: number;
  correctAnswer: number;
  detectedPattern: FactErrorPatternType;
  patternExplanation: string;
  bestStrategy: StrategyDefinition;
  anchorFact: {
    factKey: FactKey;
    prompt: string;
    correctAnswer: number;
    relationship: string;
  };
  contrastFact: {
    factKey: FactKey;
    prompt: string;
    correctAnswer: number;
    preventConfusionTip: string;
  };
  bridgeQuestionPrompt?: string;
  scheduledDelayedReviewIndex: number; // item count offset in session (e.g. 4 items later)
}

export interface CandidateScore {
  factKey: FactKey;
  score: number;
  category: 'weak_or_due' | 'consolidation' | 'interleaved_strong' | 'new_fact';
  reason: string;
  breakdown?: {
    dueWeight: number;
    repeatedErrorWeight: number;
    skipWeight: number;
    slowRecallWeight: number;
    forgettingRiskWeight: number;
    prerequisiteGapWeight: number;
    confusionWeight: number;
    fatigueAdjustment: number;
    varietyAdjustment: number;
  };
}

/**
 * Detects specific deterministic cognitive error patterns from a submitted user answer.
 * Covers Multiplication, Squares, Cubes, and Addition/Subtraction.
 */
export function detectErrorPattern(
  factKey: FactKey,
  userAnswer: number,
  correctAnswer: number,
  latencyMs: number
): FactErrorPatternType {
  if (userAnswer === correctAnswer) return 'calculation_slip';

  // 1. Rapid careless guessing (< 500ms)
  if (latencyMs < 500) {
    return 'rapid_guess';
  }

  const parsed = parseFactKey(factKey);

  // 2. Digit Transposition (e.g. 54 -> 45, 63 -> 36, 128 -> 182)
  const userStr = Math.abs(userAnswer).toString();
  const correctStr = Math.abs(correctAnswer).toString();
  if (
    userStr.length === correctStr.length &&
    userStr.length >= 2 &&
    userStr !== correctStr &&
    userStr.split('').sort().join('') === correctStr.split('').sort().join('')
  ) {
    return 'digit_transposition';
  }

  // 3. Multiplication specific patterns
  if (parsed.type === 'multiplication') {
    const table = parsed.operandA;
    const mult = parsed.operandB || 1;

    // Missed decade zero (e.g. 30 x 7 = 210 answered as 21)
    if (correctAnswer % 10 === 0 && userAnswer === correctAnswer / 10) {
      return 'decade_zero_omission';
    }

    // Adjacent table confusion (e.g. user answered (table ± 1) * mult, like 7x8 answered 63 = 7x9 or 48 = 6x8)
    if (userAnswer === (table + 1) * mult || userAnswer === (table - 1) * mult) {
      return 'adjacent_table_confusion';
    }

    // Adjacent multiplier confusion (off-by-one multiplier: e.g. 7x8 answered 7x7=49 or 7x9=63)
    if (userAnswer === table * (mult + 1) || userAnswer === table * (mult - 1)) {
      return 'adjacent_multiplier_confusion';
    }

    // Half/Double error (e.g. 18x6 answered as 36x6 or doubled instead of halved)
    if (table % 2 === 0 && mult % 2 === 0) {
      const halfDoubleA = (table / 2) * (mult * 2);
      const wrongHalfDouble = (table * 2) * (mult * 2);
      if (userAnswer === wrongHalfDouble || userAnswer === halfDoubleA * 2) {
        return 'half_double_error';
      }
    }

    // Compensation direction error (e.g. 49x6 = 50x6 + 6 = 306 instead of 294)
    if (table % 10 === 9 || table % 10 === 8) {
      const rounded = Math.ceil(table / 10) * 10;
      const deficit = rounded - table;
      const wrongAddition = rounded * mult + deficit * mult;
      if (userAnswer === wrongAddition) {
        return 'compensation_direction_error';
      }
    }
  }

  // 4. Square specific patterns
  if (parsed.type === 'square') {
    const n = parsed.operandA;

    // Ending in 5 concatenation mistake: e.g. 35² = 3x4|25 = 1225. User answers 3²|5² = 925 or 1205
    if (n % 10 === 5) {
      const tens = Math.floor(n / 10);
      const wrongNaive = tens * tens * 100 + 25;
      if (userAnswer === wrongNaive || userAnswer === (tens * (tens + 1)) * 100 + 5) {
        return 'square_ending_5_error';
      }
    }

    // Near-50 offset mistake: (50 - d)² = 25 - d | d². User adds d instead of subtracting: 25 + d | d²
    if (n >= 40 && n <= 59 && n !== 50) {
      const d = n - 50;
      const wrongOffset = (25 - d) * 100 + d * d;
      if (userAnswer === wrongOffset) {
        return 'square_near_50_error';
      }
    }

    // Near-100 deficit mistake: (100 - d)² = 100 - 2d | d². User computes 100 - d | d²
    if (n >= 85 && n <= 99) {
      const d = 100 - n;
      const wrongBase = (100 - d) * 100 + d * d;
      if (userAnswer === wrongBase) {
        return 'square_near_100_error';
      }
    }

    // Square padding mistake: e.g. 48^2 = 25 - 2 | 2^2 -> written as 234 instead of 2304
    if (n >= 40 && n <= 60) {
      const diff = Math.abs(n - 50);
      if (diff < 10 && diff * diff < 10) {
        const leading = 25 + (n - 50);
        const unpadded = parseInt(`${leading}${diff * diff}`, 10);
        if (userAnswer === unpadded) {
          return 'square_padding_mistake';
        }
      }
    }

    // Duplex / Cross-term omission: e.g. (a + b)² = a² + b² (missing 2ab)
    const tens = Math.floor(n / 10);
    const units = n % 10;
    const missingCrossTerm = (tens * 10) * (tens * 10) + units * units;
    if (userAnswer === missingCrossTerm) {
      return 'square_duplex_error';
    }
  }

  // 5. Cube specific patterns
  if (parsed.type === 'cube') {
    const n = parsed.operandA;
    const expectedLastDigit = (n * n * n) % 10;
    const userLastDigit = Math.abs(userAnswer) % 10;

    if (n <= 12 && userAnswer !== correctAnswer) {
      return 'cube_anchor_forgotten';
    }

    if (expectedLastDigit !== userLastDigit) {
      return 'cube_last_digit_error';
    }

    return 'cube_expansion_mistake';
  }

  // 6. Addition & Subtraction patterns
  if (parsed.type === 'add_sub') {
    const diff = Math.abs(userAnswer - correctAnswer);
    if (diff === 10) {
      return parsed.subType === 'subtraction_borrowing'
        ? 'add_sub_borrow_omission'
        : 'add_sub_missed_carry';
    }
    if (diff === 100 || diff === 20) {
      return 'add_sub_decade_overshoot';
    }
    if (parsed.subType === 'complements') {
      return 'add_sub_complement_confusion';
    }
  }

  // 7. Hesitant calculation (> 4500ms)
  if (latencyMs > 4500) {
    return 'hesitant_calculation';
  }

  return 'calculation_slip';
}

/**
 * Builds an actionable, pedagogical Repair Card after an error.
 */
export function generateRepairCard(
  factKey: FactKey,
  userAnswer: number,
  latencyMs: number = 2000
): RepairCard {
  const correctAnswer = getFactCorrectAnswer(factKey);
  const pattern = detectErrorPattern(factKey, userAnswer, correctAnswer, latencyMs);
  const bestStrategy = getBestStrategyForFact(factKey);
  const parsed = parseFactKey(factKey);

  let prompt = '';
  let patternExplanation = '';
  let anchorFactKey: FactKey = factKey;
  let anchorPrompt = '';
  let anchorAnswer = 0;
  let anchorRelationship = '';

  let contrastFactKey: FactKey = factKey;
  let contrastPrompt = '';
  let contrastAnswer = 0;
  let contrastTip = '';

  if (parsed.type === 'multiplication') {
    const table = parsed.operandA;
    const mult = parsed.operandB || 1;
    prompt = `${table} × ${mult}`;

    if (pattern === 'adjacent_multiplier_confusion' && userAnswer === table * (mult + 1)) {
      patternExplanation = `You answered ${userAnswer}, which is ${table} × ${mult + 1}, instead of ${table} × ${mult}.`;
    } else if (pattern === 'adjacent_multiplier_confusion' && userAnswer === table * (mult - 1)) {
      patternExplanation = `You answered ${userAnswer}, which is ${table} × ${mult - 1}, instead of ${table} × ${mult}.`;
    } else if (pattern === 'adjacent_table_confusion') {
      patternExplanation = `Table confusion: you calculated an adjacent table multiple (${userAnswer}).`;
    } else if (pattern === 'digit_transposition') {
      patternExplanation = `Digit transposition slip: you reversed digits (${userAnswer} vs ${correctAnswer}).`;
    } else if (pattern === 'decade_zero_omission') {
      patternExplanation = 'Decade zero omitted: remember to append the trailing zero after multiplying.';
    } else if (pattern === 'compensation_direction_error') {
      patternExplanation = `Compensation direction slip: subtract the deficit instead of adding it.`;
    } else {
      patternExplanation = `Calculated ${userAnswer} instead of correct answer ${correctAnswer}.`;
    }

    const anchorMult = mult <= 5 ? 2 : mult <= 10 ? 5 : 10;
    anchorFactKey = formatFactKey('multiplication', table, anchorMult);
    anchorAnswer = table * anchorMult;
    anchorPrompt = `${table} × ${anchorMult}`;
    anchorRelationship = `Known anchor: ${table} × ${anchorMult} = ${anchorAnswer}. Step from here!`;

    const contrastMult = mult === 8 ? 9 : mult === 9 ? 8 : mult + 1;
    contrastFactKey = formatFactKey('multiplication', table, contrastMult);
    contrastAnswer = table * contrastMult;
    contrastPrompt = `${table} × ${contrastMult}`;
    contrastTip = `Contrast: ${table} × ${contrastMult} = ${contrastAnswer}. Keep these distinct!`;
  } else if (parsed.type === 'square') {
    const n = parsed.operandA;
    prompt = `${n}²`;
    patternExplanation = `Submitted ${userAnswer} for ${n}² = ${correctAnswer}.`;

    const nearestDecade = Math.round(n / 10) * 10;
    anchorFactKey = formatFactKey('square', nearestDecade);
    anchorAnswer = nearestDecade * nearestDecade;
    anchorPrompt = `${nearestDecade}²`;
    anchorRelationship = `Decade anchor: ${nearestDecade}² = ${anchorAnswer}.`;

    const contrastN = n % 10 === 5 ? n - 1 : n + 1;
    contrastFactKey = formatFactKey('square', contrastN);
    contrastAnswer = contrastN * contrastN;
    contrastPrompt = `${contrastN}²`;
    contrastTip = `Contrast: ${contrastN}² = ${contrastAnswer}.`;
  } else if (parsed.type === 'cube') {
    const n = parsed.operandA;
    prompt = `${n}³`;
    patternExplanation = `Submitted ${userAnswer} for ${n}³ = ${correctAnswer.toLocaleString()}.`;

    const nearestDecade = Math.max(10, Math.round(n / 10) * 10);
    anchorFactKey = formatFactKey('cube', nearestDecade);
    anchorAnswer = nearestDecade * nearestDecade * nearestDecade;
    anchorPrompt = `${nearestDecade}³`;
    anchorRelationship = `Decade benchmark: ${nearestDecade}³ = ${anchorAnswer.toLocaleString()}.`;

    contrastFactKey = formatFactKey('cube', Math.max(1, n - 1));
    contrastAnswer = (n - 1) * (n - 1) * (n - 1);
    contrastPrompt = `${n - 1}³`;
    contrastTip = `Contrast: ${n - 1}³ = ${contrastAnswer.toLocaleString()}.`;
  } else {
    prompt = `Add/Sub Probe`;
    patternExplanation = `Submitted ${userAnswer} for correct answer ${correctAnswer}.`;
    anchorPrompt = `Base 10 / 100 anchor`;
    anchorAnswer = 100;
    anchorRelationship = 'Look for clean decade complements.';
    contrastPrompt = `Check carries and borrows`;
    contrastAnswer = correctAnswer;
    contrastTip = 'Decompose left-to-right to prevent carry/borrow slips.';
  }

  return {
    factKey,
    prompt,
    userAnswer,
    correctAnswer,
    detectedPattern: pattern,
    patternExplanation,
    bestStrategy,
    anchorFact: {
      factKey: anchorFactKey,
      prompt: anchorPrompt,
      correctAnswer: anchorAnswer,
      relationship: anchorRelationship,
    },
    contrastFact: {
      factKey: contrastFactKey,
      prompt: contrastPrompt,
      correctAnswer: contrastAnswer,
      preventConfusionTip: contrastTip,
    },
    bridgeQuestionPrompt: anchorPrompt,
    scheduledDelayedReviewIndex: 4, // re-test after 4 questions
  };
}

/**
 * Calculates priority score for a candidate fact based on the full deterministic formula:
 * priority = dueForReviewWeight + repeatedErrorWeight + skipWeight + slowRecallWeight +
 *            forgettingRiskWeight + prerequisiteGapWeight + confusionWeight +
 *            fatigueAdjustment + varietyAdjustment;
 */
export function calculateFactPriority(
  fact: FactMemory,
  nowMs: number = Date.now(),
  fatigue?: FatigueSignal,
  recentAskedKeys: FactKey[] = []
): CandidateScore {
  const attempts = Math.max(fact.attempts || 0, fact.totalAttempts || 0);
  const skipCount = Math.max(fact.skippedAttempts || 0, fact.skipCount || 0);
  const consecutiveErrors = Math.max(fact.consecutiveIncorrect || 0, fact.consecutiveErrors || 0);
  const stability = fact.stabilityScore !== undefined ? fact.stabilityScore : (fact.stabilityDays ? fact.stabilityDays * 10 : 0);
  const lastSeen = fact.lastSeen || fact.lastSeenAt || 0;
  const nextReview = fact.nextReviewTimestamp || fact.nextReviewAt || 0;

  if (attempts === 0 && skipCount === 0) {
    const score = 40;
    return {
      factKey: (fact.key || fact.factKey) as FactKey,
      score,
      category: 'new_fact',
      reason: 'Unseen curriculum fact ready for introduction.',
    };
  }

  // 1. Skip Weight: Highest priority (user explicitly signaled lack of knowledge)
  let skipWeight = 0;
  if (skipCount > 0) {
    const lastSkippedTime = fact.lastSkipped || fact.lastSkippedAt || 0;
    const isRecentSkip = lastSkippedTime > 0 && (nowMs - lastSkippedTime < 24 * 60 * 60 * 1000);
    skipWeight = isRecentSkip ? 200 + skipCount * 30 : 180 + skipCount * 15;
  }

  // 2. Repeated Error Weight
  let repeatedErrorWeight = 0;
  if (consecutiveErrors >= 2) {
    repeatedErrorWeight = 160 + consecutiveErrors * 40;
  } else if (consecutiveErrors === 1) {
    repeatedErrorWeight = 100;
  }

  // 3. Forgetting Risk Weight
  const forgettingRisk = calculateForgettingRisk(lastSeen, stability, nowMs);
  const forgettingRiskWeight = Math.round(forgettingRisk * 70);

  // 4. Due for Review Weight
  const isOverdue = nextReview > 0 && nowMs >= nextReview;
  const dueForReviewWeight = isOverdue ? 90 : 0;

  // 5. Slow Recall Weight (known but slow recall)
  const slowRecallWeight = fact.medianLatencyMs > 3500 ? 40 : 0;

  // 6. Prerequisite Gap Weight
  const prerequisiteGapWeight = fact.learningPhase === 'teach' || fact.learningPhase === 'guided' ? 45 : 0;

  // 7. Confusion Weight
  const confusionWeight = fact.errorPatterns && fact.errorPatterns.length > 0 ? 30 : 0;

  // 8. Fatigue Adjustment: when user is fatigued, down-weight difficult multi-digit facts
  let fatigueAdjustment = 0;
  if (fatigue && (fatigue.level === 'mild_fatigue' || fatigue.level === 'high_fatigue')) {
    if (stability >= 75 || fact.category === 'add_sub') {
      fatigueAdjustment += 40; // prioritize familiar anchor/review facts
    } else if (consecutiveErrors > 2 || (fact.operandA > 20 && (fact.operandB || 1) > 12)) {
      fatigueAdjustment -= 50; // prevent cognitive exhaustion on heavy facts
    }
  }

  // 9. Variety Adjustment & Recency Suppression: never repeat the same fact immediately
  let varietyAdjustment = 0;
  const factKey = (fact.key || fact.factKey) as FactKey;
  if (lastSeen > 0 && (nowMs - lastSeen) < 90000 && skipCount === 0) {
    varietyAdjustment -= 80;
  }
  if (recentAskedKeys.length > 0) {
    const lastKey = recentAskedKeys[recentAskedKeys.length - 1];
    const secondLastKey = recentAskedKeys.length > 1 ? recentAskedKeys[recentAskedKeys.length - 2] : null;
    const thirdLastKey = recentAskedKeys.length > 2 ? recentAskedKeys[recentAskedKeys.length - 3] : null;

    if (factKey === lastKey) {
      varietyAdjustment -= 200; // strictly suppress immediate repetition
    } else if (factKey === secondLastKey) {
      varietyAdjustment -= 120;
    } else if (factKey === thirdLastKey) {
      varietyAdjustment -= 60;
    }
  }

  // 10. Anti-Overtraining filter: if fact is already Automatic (level 5+ or automaticity >= 90%), down-weight unless overdue
  if (((fact as any).speedLadderLevel && (fact as any).speedLadderLevel >= 5) || ((fact as any).automaticityScore && (fact as any).automaticityScore >= 90)) {
    if (!isOverdue) {
      varietyAdjustment -= 150;
    }
  }

  const totalScore = Math.max(
    0,
    skipWeight +
      repeatedErrorWeight +
      dueForReviewWeight +
      forgettingRiskWeight +
      slowRecallWeight +
      prerequisiteGapWeight +
      confusionWeight +
      fatigueAdjustment +
      varietyAdjustment
  );

  let category: CandidateScore['category'] = 'new_fact';
  let reason = '';

  if (skipWeight > 0) {
    category = 'weak_or_due';
    reason = `Skipped fact (${skipCount} skip${skipCount > 1 ? 's' : ''}). Priority strategy instruction.`;
  } else if (repeatedErrorWeight > 0) {
    category = 'weak_or_due';
    reason = `Repeated errors (${consecutiveErrors} consecutive). High urgency repair.`;
  } else if (dueForReviewWeight > 0 || forgettingRisk > 0.45) {
    category = 'weak_or_due';
    reason = `Spaced review due (forgetting risk: ${Math.round(forgettingRisk * 100)}%).`;
  } else if (stability < 70) {
    category = 'consolidation';
    reason = 'Developing fact requiring memory consolidation.';
  } else {
    category = 'interleaved_strong';
    reason = 'Mastered anchor fact for retention interleaving.';
  }

  return {
    factKey,
    score: totalScore,
    category,
    reason,
    breakdown: {
      dueWeight: dueForReviewWeight,
      repeatedErrorWeight,
      skipWeight,
      slowRecallWeight,
      forgettingRiskWeight,
      prerequisiteGapWeight,
      confusionWeight,
      fatigueAdjustment,
      varietyAdjustment,
    },
  };
}

/**
 * Returns a bridge fact for an error to rebuild mental scaffolding before returning.
 */
export function getBridgeFactForError(factKey: FactKey): FactKey {
  const parsed = parseFactKey(factKey);
  if (!parsed.isValid) return factKey;

  if (parsed.type === 'multiplication') {
    const table = parsed.operandA;
    const mult = parsed.operandB || 1;
    // Step to primary anchor (e.g. x10, x5, or x2)
    const anchorMult = mult <= 5 ? 2 : mult <= 10 ? 5 : 10;
    return formatFactKey('multiplication', table, anchorMult);
  }

  if (parsed.type === 'square') {
    const n = parsed.operandA;
    const nearestDecade = Math.round(n / 10) * 10;
    return formatFactKey('square', nearestDecade);
  }

  if (parsed.type === 'cube') {
    const n = parsed.operandA;
    const nearestDecade = Math.max(10, Math.round(n / 10) * 10);
    return formatFactKey('cube', nearestDecade);
  }

  return 'add_sub:level_1';
}

/**
 * Selects the next fact to present according to target session mix ratios:
 * - 50% weak, skipped, or due facts;
 * - 25% recent learning facts;
 * - 15% strong facts for confidence and interleaving;
 * - 10% new facts.
 * Strictly guarantees no immediate repeats.
 */
export function selectNextFact(
  candidateFactKeys: FactKey[],
  factMemoryMap: Record<string, FactMemory>,
  recentAskedKeys: FactKey[] = [],
  fatigue?: FatigueSignal,
  delayedReviewQueue: { factKey: FactKey; dueAtCount: number }[] = [],
  currentSessionQuestionCount: number = 0
): { factKey: FactKey; selectionReason: string; category: CandidateScore['category'] } {
  // 1. Check if a delayed review repair item is due now
  const dueDelayed = delayedReviewQueue.find((item) => item.dueAtCount <= currentSessionQuestionCount);
  if (dueDelayed && !recentAskedKeys.slice(-2).includes(dueDelayed.factKey)) {
    return {
      factKey: dueDelayed.factKey,
      selectionReason: 'Delayed retrieval test following error repair (SM-2 spacing)',
      category: 'weak_or_due',
    };
  }

  const now = Date.now();
  const scoredCandidates: CandidateScore[] = [];

  for (const key of candidateFactKeys) {
    // Strictly prevent immediate repeat (never repeat same fact in last 2 questions)
    if (recentAskedKeys.slice(-2).includes(key)) continue;

    const state = factMemoryMap[key] || createInitialFactMemoryState(key);
    const scored = calculateFactPriority(state, now, fatigue, recentAskedKeys);
    scoredCandidates.push(scored);
  }

  if (scoredCandidates.length === 0) {
    const fallback = candidateFactKeys[0] || 'mul:7:8';
    return {
      factKey: fallback,
      selectionReason: 'Default candidate fallback',
      category: 'new_fact',
    };
  }

  // Group by category according to target pedagogical distribution
  const weakOrDue = scoredCandidates.filter((c) => c.category === 'weak_or_due').sort((a, b) => b.score - a.score);
  const consolidation = scoredCandidates.filter((c) => c.category === 'consolidation').sort((a, b) => b.score - a.score);
  const interleaved = scoredCandidates.filter((c) => c.category === 'interleaved_strong').sort((a, b) => b.score - a.score);
  const newFacts = scoredCandidates.filter((c) => c.category === 'new_fact').sort((a, b) => b.score - a.score);

  // Target mix: 50% weak/due/skipped, 25% consolidation, 15% interleaved, 10% new
  const roll = Math.random();

  if (roll < 0.50 && weakOrDue.length > 0) {
    const pick = weakOrDue[0];
    return { factKey: pick.factKey, selectionReason: pick.reason, category: 'weak_or_due' };
  } else if (roll < 0.75 && consolidation.length > 0) {
    const pick = consolidation[0];
    return { factKey: pick.factKey, selectionReason: pick.reason, category: 'consolidation' };
  } else if (roll < 0.90 && interleaved.length > 0) {
    const pick = interleaved[Math.floor(Math.random() * Math.min(3, interleaved.length))];
    return { factKey: pick.factKey, selectionReason: pick.reason, category: 'interleaved_strong' };
  } else if (newFacts.length > 0) {
    const pick = newFacts[0];
    return { factKey: pick.factKey, selectionReason: pick.reason, category: 'new_fact' };
  }

  // Fallback to highest scored candidate
  scoredCandidates.sort((a, b) => b.score - a.score);
  const top = scoredCandidates[0];
  return {
    factKey: top.factKey,
    selectionReason: top.reason,
    category: top.category,
  };
}

/**
 * Table Learning Bands (Band 1 to 5)
 */
export const TABLE_BANDS: Record<number, number[]> = {
  1: [2, 3, 4, 5],
  2: [6, 7, 8, 9, 10],
  3: [11, 12],
  4: [13, 14, 15],
  5: [16, 17, 18, 19, 20],
};

export function getTableBand(table: number): number {
  if (table <= 5) return 1;
  if (table <= 10) return 2;
  if (table <= 12) return 3;
  if (table <= 15) return 4;
  return 5;
}

export function getBandTables(band: number): number[] {
  return TABLE_BANDS[band] || TABLE_BANDS[1];
}

/**
 * Generates continuous maintenance table distribution:
 * - 60% focus table
 * - 20% previous band
 * - 10% earlier bands
 * - 10% random maintenance
 */
export function selectAdaptiveBandTable(focusTable: number): number {
  const currentBand = getTableBand(focusTable);
  const roll = Math.random();

  // 60% Focus Table
  if (roll < 0.60) {
    return focusTable;
  }

  // 20% Previous Band
  if (roll < 0.80 && currentBand > 1) {
    const prevBandTables = getBandTables(currentBand - 1);
    return prevBandTables[Math.floor(Math.random() * prevBandTables.length)];
  }

  // 10% Earlier Bands
  if (roll < 0.90 && currentBand > 2) {
    const earlierBand = Math.floor(Math.random() * (currentBand - 2)) + 1;
    const tables = getBandTables(earlierBand);
    return tables[Math.floor(Math.random() * tables.length)];
  }

  // 10% Random maintenance (Tables 2-20)
  const randomTable = Math.floor(Math.random() * 19) + 2;
  return randomTable;
}

/**
 * Schedules review for a weak or failed fact:
 * - 1st re-test: 2-4 items later
 * - 2nd re-test: 8-15 items later
 */
export function scheduleWeakFactReview(
  factKey: FactKey,
  currentSessionCount: number,
  retestCycle: number = 1
): { factKey: FactKey; dueAtCount: number } {
  const offset =
    retestCycle === 1
      ? Math.floor(Math.random() * 3) + 2 // 2, 3, or 4 items later
      : Math.floor(Math.random() * 8) + 8; // 8 to 15 items later
  return {
    factKey,
    dueAtCount: currentSessionCount + offset,
  };
}

export interface FrustrationSignal {
  isFrustrated: boolean;
  consecutiveErrors: number;
  slowCount: number;
  recommendation: 'step_down' | 'anchor_trick' | 'continue';
  message: string;
}

/**
 * Frustration Detector: checks rolling window of 5 attempts.
 * If >= 3 are errors or slow (> 6000ms), triggers difficulty step-down and anchor trick.
 */
export function detectFrustration(
  recentAttempts: { isCorrect: boolean; latencyMs: number }[]
): FrustrationSignal {
  if (recentAttempts.length < 3) {
    return {
      isFrustrated: false,
      consecutiveErrors: 0,
      slowCount: 0,
      recommendation: 'continue',
      message: 'Keep going! Rhythm is steady.',
    };
  }

  const rolling5 = recentAttempts.slice(-5);
  let errorCount = 0;
  let slowCount = 0;
  let consecutiveErrors = 0;
  let currentErrStreak = 0;

  for (const att of rolling5) {
    if (!att.isCorrect) {
      errorCount++;
      currentErrStreak++;
      consecutiveErrors = Math.max(consecutiveErrors, currentErrStreak);
    } else {
      currentErrStreak = 0;
      if (att.latencyMs > 6000) {
        slowCount++;
      }
    }
  }

  // If 3 out of 5 are errors or very slow, flag frustration
  const struggleCount = errorCount + slowCount;
  if (struggleCount >= 3 || consecutiveErrors >= 3) {
    return {
      isFrustrated: true,
      consecutiveErrors,
      slowCount,
      recommendation: errorCount >= 2 ? 'anchor_trick' : 'step_down',
      message:
        'Cognitive load detected. Stepping back to visual anchor landmarks to rebuild calculation momentum.',
    };
  }

  return {
    isFrustrated: false,
    consecutiveErrors,
    slowCount,
    recommendation: 'continue',
    message: 'Good pace and focus maintained.',
  };
}
