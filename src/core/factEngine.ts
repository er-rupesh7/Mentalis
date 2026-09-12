/**
 * Fact-Level Question Factory for Mentalis
 * Converts any canonical FactKey into a rich, interactive Question with
 * mathematically verified strategy steps and appropriate difficulty ratings.
 * Supports all 8 Table Learning Modes & Exam Quant Modules.
 */

import { Question, TableTrainingMode, ModuleId, ExamSubSkill, CalculationStep } from './types';
import { FactKey, parseFactKey, getFactCorrectAnswer } from './factModel';
import { getBestStrategyForFact } from './strategyCatalog';
import { generateAddSubQuestion } from './calcEngine';

function makeCalculationSteps(steps: (string | CalculationStep)[]): CalculationStep[] {
  return steps.map((s, idx) => {
    if (typeof s === 'string') {
      return {
        stepNumber: idx + 1,
        title: `Step ${idx + 1}`,
        subVocalization: s,
        intermediateValue: s,
        explanation: s,
      };
    }
    return s;
  });
}
import {
  generateSimplificationQuestion,
  generateApproximationQuestion,
  generatePercentageQuestion,
  generateRatioQuestion,
  generateAverageQuestion,
  generateProfitLossQuestion,
  generateInterestQuestion,
  generateDICalculationQuestion,
  generateNumberSeriesQuestion,
  generateFractionPercentageQuestion,
  BANK_FRACTION_PERCENTAGE_TABLE,
} from './examQuantGenerators';

/**
 * Generates 4 unique, mathematically plausible multiple-choice options.
 * Distractors use near-miss patterns: adjacent multiplier, decade mistake, transposition, near-square.
 */
export function createSmartDistractors(
  correctAnswer: number,
  table: number,
  multiplier: number
): number[] {
  const candidates = new Set<number>();

  // 1. Adjacent multipliers (table * (m ± 1), table * (m ± 2))
  if (multiplier > 1) candidates.add(table * (multiplier - 1));
  candidates.add(table * (multiplier + 1));
  if (multiplier > 2) candidates.add(table * (multiplier - 2));
  candidates.add(table * (multiplier + 2));

  // 2. Adjacent tables ((table ± 1) * multiplier)
  if (table > 1) candidates.add((table - 1) * multiplier);
  candidates.add((table + 1) * multiplier);

  // 3. Decade slips (± 10)
  if (correctAnswer - 10 > 0) candidates.add(correctAnswer - 10);
  candidates.add(correctAnswer + 10);

  // 4. Transposition error (e.g. 54 -> 45, 72 -> 27)
  const str = correctAnswer.toString();
  if (str.length === 2 && str[0] !== str[1]) {
    const transposed = parseInt(str[1] + str[0], 10);
    if (transposed !== correctAnswer && transposed > 0) {
      candidates.add(transposed);
    }
  }

  // 5. Small near-misses
  if (correctAnswer - 2 > 0) candidates.add(correctAnswer - 2);
  candidates.add(correctAnswer + 2);
  candidates.add(correctAnswer + 4);

  // Filter out correct answer and ensure positive values
  const filtered = Array.from(candidates).filter((c) => c > 0 && c !== correctAnswer);

  // Shuffle candidates
  const shuffled = filtered.sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 3);

  // Fallbacks if not enough unique candidates
  let fallbackDelta = 1;
  while (selected.length < 3) {
    const nextVal =
      correctAnswer + (fallbackDelta % 2 === 1 ? fallbackDelta * 3 : -fallbackDelta * 2);
    if (nextVal > 0 && nextVal !== correctAnswer && !selected.includes(nextVal)) {
      selected.push(nextVal);
    }
    fallbackDelta++;
  }

  // Combine correct answer and 3 distractors, then shuffle
  const all4 = [correctAnswer, ...selected];
  return all4.sort(() => Math.random() - 0.5);
}

/**
 * Generates an interactive Question for any of the 8 Table Training Modes.
 */
export function generateTableModeQuestion(
  table: number,
  multiplier: number,
  mode: TableTrainingMode,
  targetTimeSecondsOverride?: number
): Question {
  const factKey: FactKey = `mul:${table}:${multiplier}`;
  const correctAnswer = table * multiplier;
  const id = `q_tbl_${table}_${multiplier}_${mode}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const strategy = getBestStrategyForFact(factKey);
  const { strategyTitle, steps, mentalTip } = strategy.generateWorkedExample(table, multiplier);

  const baseTarget = table <= 12 && multiplier <= 12 ? 2.0 : 2.5;
  const difficulty = table <= 12 && multiplier <= 12 ? 2 : table <= 20 ? 4 : 7;

  switch (mode) {
    case 'recognition': {
      const options = createSmartDistractors(correctAnswer, table, multiplier);
      return {
        id,
        module: 'tables_bootcamp',
        operandA: table,
        operandB: multiplier,
        operator: '×',
        correctAnswer,
        prompt: `${table} × ${multiplier}`,
        strategyTitle,
        steps,
        mentalTip,
        targetTimeSeconds: targetTimeSecondsOverride || 1.8,
        difficultyRating: difficulty,
        subTrack: `table_${table}`,
        factKey,
        options,
        questionType: 'multiple_choice',
        tableMode: 'recognition',
      };
    }

    case 'recall': {
      return {
        id,
        module: 'tables_bootcamp',
        operandA: table,
        operandB: multiplier,
        operator: '×',
        correctAnswer,
        prompt: `${table} × ${multiplier}`,
        strategyTitle,
        steps,
        mentalTip,
        targetTimeSeconds: targetTimeSecondsOverride || baseTarget,
        difficultyRating: difficulty,
        subTrack: `table_${table}`,
        factKey,
        questionType: 'numeric',
        tableMode: 'recall',
      };
    }

    case 'reverse': {
      // Given product, find multiplier: e.g. "91 = 13 × ?"
      const multOptions = [
        multiplier,
        Math.max(1, multiplier - 1),
        multiplier + 1,
        multiplier + 2,
      ];
      // Ensure unique 4 options
      const uniqueMultOptions = Array.from(new Set(multOptions));
      while (uniqueMultOptions.length < 4) {
        uniqueMultOptions.push(uniqueMultOptions.length + 1);
      }
      uniqueMultOptions.sort(() => Math.random() - 0.5);

      return {
        id,
        module: 'tables_bootcamp',
        operandA: correctAnswer,
        operandB: table,
        operator: '÷',
        correctAnswer: multiplier,
        prompt: `${correctAnswer} = ${table} × ?`,
        strategyTitle: `${strategyTitle} (Inverse Factorization)`,
        steps: makeCalculationSteps([`${correctAnswer} ÷ ${table} = ${multiplier}`, ...steps]),
        mentalTip: `Think: What times ${table} gives ${correctAnswer}? Answer: ${multiplier}.`,
        targetTimeSeconds: targetTimeSecondsOverride || (baseTarget + 0.5),
        difficultyRating: difficulty + 1,
        subTrack: `table_${table}`,
        factKey,
        options: uniqueMultOptions,
        questionType: 'multiple_choice',
        tableMode: 'reverse',
      };
    }

    case 'missing_fact': {
      const missingTable = Math.random() < 0.5;
      const prompt = missingTable
        ? `? × ${multiplier} = ${correctAnswer}`
        : `${table} × ? = ${correctAnswer}`;
      const answer = missingTable ? table : multiplier;

      return {
        id,
        module: 'tables_bootcamp',
        operandA: table,
        operandB: multiplier,
        operator: '×',
        correctAnswer: answer,
        prompt,
        strategyTitle,
        steps,
        mentalTip,
        targetTimeSeconds: targetTimeSecondsOverride || (baseTarget + 0.5),
        difficultyRating: difficulty + 1,
        subTrack: `table_${table}`,
        factKey,
        questionType: 'numeric',
        tableMode: 'missing_fact',
      };
    }

    case 'related_fact': {
      // Anchor fact: 5x anchor if mult > 5, 2x anchor or 10x anchor
      let anchorMult = 5;
      if (multiplier <= 5) {
        anchorMult = multiplier <= 2 ? 1 : (multiplier <= 4 ? 2 : 5);
      } else if (multiplier === 9) {
        anchorMult = 10;
      }
      const anchorProd = table * anchorMult;
      const diff = multiplier - anchorMult;
      const sign = diff >= 0 ? '+' : '-';
      const absDiff = Math.abs(diff);

      const anchorFactPrompt = `Anchor: ${table} × ${anchorMult} = ${anchorProd}`;
      const prompt = `${anchorFactPrompt}\nWhat is ${table} × ${multiplier}?`;

      return {
        id,
        module: 'tables_bootcamp',
        operandA: table,
        operandB: multiplier,
        operator: '×',
        correctAnswer,
        prompt,
        strategyTitle: `Related Anchor (${table} × ${anchorMult})`,
        steps: makeCalculationSteps([
          `Base Anchor: ${table} × ${anchorMult} = ${anchorProd}`,
          `Adjustment: ${anchorProd} ${sign} (${table} × ${absDiff}) = ${anchorProd} ${sign} ${table * absDiff}`,
          `Final Result = ${correctAnswer}`,
        ]),
        mentalTip: `Anchor from ${table} × ${anchorMult} = ${anchorProd}, then adjust by ${sign}${table * absDiff}.`,
        targetTimeSeconds: targetTimeSecondsOverride || (baseTarget + 0.8),
        difficultyRating: difficulty,
        subTrack: `table_${table}`,
        factKey,
        anchorFactPrompt,
        questionType: 'numeric',
        tableMode: 'related_fact',
      };
    }

    case 'neighbour_fact': {
      // Adjacent table anchor (e.g. table - 1 or known decade 10 or 20)
      let neighbourTable = table - 1;
      if (table === 19) neighbourTable = 20;
      else if (table === 11) neighbourTable = 10;
      else if (table <= 2) neighbourTable = 1;

      const nProd = neighbourTable * multiplier;
      const isNeighborHigher = neighbourTable > table;
      const anchorFactPrompt = `Neighbor: ${neighbourTable} × ${multiplier} = ${nProd}`;
      const prompt = isNeighborHigher
        ? `${anchorFactPrompt}\nSubtract ${multiplier}: What is ${table} × ${multiplier}?`
        : `${anchorFactPrompt}\nAdd ${multiplier}: What is ${table} × ${multiplier}?`;

      return {
        id,
        module: 'tables_bootcamp',
        operandA: table,
        operandB: multiplier,
        operator: '×',
        correctAnswer,
        prompt,
        strategyTitle: `Neighbor Anchor (${neighbourTable} × ${multiplier})`,
        steps: makeCalculationSteps([
          `Known neighbor: ${neighbourTable} × ${multiplier} = ${nProd}`,
          isNeighborHigher
            ? `${nProd} - ${multiplier} = ${correctAnswer}`
            : `${nProd} + ${multiplier} = ${correctAnswer}`,
        ]),
        mentalTip: `Bridge from known table ${neighbourTable} × ${multiplier} = ${nProd}.`,
        targetTimeSeconds: targetTimeSecondsOverride || (baseTarget + 0.8),
        difficultyRating: difficulty,
        subTrack: `table_${table}`,
        factKey,
        anchorFactPrompt,
        questionType: 'numeric',
        tableMode: 'neighbour_fact',
      };
    }

    case 'decomposition': {
      const tens = Math.floor(table / 10) * 10;
      const units = table % 10;
      const tensPart = tens * multiplier;
      const unitsPart = units * multiplier;
      const anchorFactPrompt = `Decompose: (${tens} × ${multiplier}) + (${units} × ${multiplier})`;
      const prompt = `${anchorFactPrompt}\n${tensPart} + ${unitsPart} = ?`;

      return {
        id,
        module: 'tables_bootcamp',
        operandA: table,
        operandB: multiplier,
        operator: '×',
        correctAnswer,
        prompt,
        strategyTitle: `Tens & Units Decomposition`,
        steps: makeCalculationSteps([
          `Split ${table} into ${tens} + ${units}`,
          `${tens} × ${multiplier} = ${tensPart}`,
          `${units} × ${multiplier} = ${unitsPart}`,
          `${tensPart} + ${unitsPart} = ${correctAnswer}`,
        ]),
        mentalTip: `Always split teen/2-digit tables: ${tens}×${multiplier} + ${units}×${multiplier}.`,
        targetTimeSeconds: targetTimeSecondsOverride || (baseTarget + 1.2),
        difficultyRating: difficulty,
        subTrack: `table_${table}`,
        factKey,
        anchorFactPrompt,
        questionType: 'numeric',
        tableMode: 'decomposition',
      };
    }

    case 'bidirectional': {
      // Commutativity: "8 × 13 = ? (same as 13 × 8)"
      return {
        id,
        module: 'tables_bootcamp',
        operandA: multiplier,
        operandB: table,
        operator: '×',
        correctAnswer,
        prompt: `${multiplier} × ${table} = ?`,
        strategyTitle: `Commutative Property (${multiplier} × ${table} = ${table} × ${multiplier})`,
        steps: makeCalculationSteps([
          `Recognize commutative property: ${multiplier} × ${table} = ${table} × ${multiplier}`,
          `${table} × ${multiplier} = ${correctAnswer}`,
        ]),
        mentalTip: `Order doesn't matter: ${multiplier} × ${table} is identically ${table} × ${multiplier} = ${correctAnswer}.`,
        targetTimeSeconds: targetTimeSecondsOverride || baseTarget,
        difficultyRating: difficulty,
        subTrack: `table_${table}`,
        factKey,
        questionType: 'numeric',
        tableMode: 'bidirectional',
      };
    }

    default:
      return generateTableModeQuestion(table, multiplier, 'recall', targetTimeSecondsOverride);
  }
}

export function generateQuestionFromFact(
  factKey: FactKey,
  targetTimeSecondsOverride?: number
): Question {
  const parsed = parseFactKey(factKey);
  if (!parsed.isValid) {
    return generateAddSubQuestion(2);
  }

  // 1. Division facts (div:dividend:divisor)
  if (parsed.type === 'division') {
    const dividend = parsed.operandA;
    const divisor = parsed.operandB || 1;
    const quotient = getFactCorrectAnswer(factKey);

    return {
      id: `q_${factKey.replace(/:/g, '_')}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      module: 'multiplication',
      operandA: dividend,
      operandB: divisor,
      operator: '÷',
      correctAnswer: quotient,
      prompt: `${dividend} ÷ ${divisor}`,
      strategyTitle: 'Multiplication Inverse Division',
      steps: makeCalculationSteps([
        `Think: What number × ${divisor} = ${dividend}?`,
        `${quotient} × ${divisor} = ${dividend}`,
        `Therefore, ${dividend} ÷ ${divisor} = ${quotient}`,
      ]),
      mentalTip: `Reverse multiplication: ${quotient} × ${divisor} = ${dividend}.`,
      targetTimeSeconds: targetTimeSecondsOverride || (divisor <= 10 ? 2.0 : 3.5),
      difficultyRating: divisor <= 10 ? 2 : 4,
      subTrack: `div_by_${divisor <= 10 ? '1d' : '2d'}`,
      factKey,
    };
  }

  // 2. Complements (comp:10:val or comp:100:val)
  if (parsed.type === 'complements') {
    const base = parsed.operandA; // 10 or 100
    const val = parsed.operandB || 0;
    const compAnswer = getFactCorrectAnswer(factKey);

    return {
      id: `q_${factKey.replace(/:/g, '_')}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      module: 'add_sub',
      operandA: base,
      operandB: val,
      operator: '-',
      correctAnswer: compAnswer,
      prompt: `Complement to ${base}: ${val} + ? = ${base}`,
      strategyTitle: base === 10 ? 'Base-10 Complement' : 'Base-100 Complement (Tens to 9, Units to 10)',
      steps: makeCalculationSteps(
        base === 10
          ? [`${base} - ${val} = ${compAnswer}`]
          : [
              `Tens make 90: ${Math.floor(val / 10) * 10} + ${Math.floor(compAnswer / 10) * 10} = 90`,
              `Units make 10: ${val % 10} + ${compAnswer % 10} = 10`,
              `Combined complement = ${compAnswer}`,
            ]
      ),
      mentalTip: base === 10 ? 'Pair to 10.' : 'All from 9, last from 10.',
      targetTimeSeconds: targetTimeSecondsOverride || (base === 10 ? 1.5 : 2.5),
      difficultyRating: base === 10 ? 1 : 3,
      subTrack: `comp_${base}`,
      factKey,
    };
  }

  // 3. Fraction ↔ Percentage facts (frac:num:den)
  if (parsed.type === 'fraction_percentage') {
    return generateFractionPercentageQuestion();
  }

  // 4. Exam Quant Facts (exam:subSkill)
  if (parsed.type === 'exam_quant') {
    const sub = (parsed.subType || 'quant_simplification') as ExamSubSkill;
    switch (sub) {
      case 'quant_simplification': return generateSimplificationQuestion(2);
      case 'quant_approximation': return generateApproximationQuestion(2);
      case 'quant_percentage': return generatePercentageQuestion(2);
      case 'quant_ratio': return generateRatioQuestion(2);
      case 'quant_average': return generateAverageQuestion(2);
      case 'quant_profit_loss': return generateProfitLossQuestion(2);
      case 'quant_si_ci': return generateInterestQuestion(2);
      case 'quant_di_arithmetic': return generateDICalculationQuestion(2);
      case 'quant_number_series': return generateNumberSeriesQuestion(2);
      default: return generateSimplificationQuestion(2);
    }
  }

  // 5. Addition & Subtraction
  if (parsed.type === 'add_sub') {
    return generateAddSubQuestion(parsed.operandA);
  }

  const strategy = getBestStrategyForFact(factKey);
  const correctAnswer = getFactCorrectAnswer(factKey);

  // 6. Multiplication
  if (parsed.type === 'multiplication') {
    const table = parsed.operandA;
    const mult = parsed.operandB || 1;
    const { strategyTitle, steps, mentalTip } = strategy.generateWorkedExample(table, mult);

    const targetTime =
      targetTimeSecondsOverride ||
      (table <= 12 && mult <= 12 ? 1.5 : table <= 20 ? 2.5 : table <= 50 ? 3.5 : 4.5);

    const difficulty =
      table <= 12 && mult <= 12 ? 2 : table <= 20 ? 4 : table <= 50 ? 7 : 9;

    return {
      id: `q_${factKey.replace(/:/g, '_')}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      module: table >= 11 && table <= 20 ? 'tables_bootcamp' : 'multiplication',
      operandA: table,
      operandB: mult,
      operator: '×',
      correctAnswer,
      prompt: `${table} × ${mult}`,
      strategyTitle,
      steps,
      mentalTip,
      targetTimeSeconds: targetTime,
      difficultyRating: difficulty,
      subTrack: `table_${table}`,
      factKey,
    };
  }

  // 7. Squares
  if (parsed.type === 'square') {
    const n = parsed.operandA;
    const { strategyTitle, steps, mentalTip } = strategy.generateWorkedExample(n);

    const targetTime =
      targetTimeSecondsOverride ||
      (n <= 20 ? 1.8 : n % 10 === 5 || (n >= 40 && n <= 60) ? 2.8 : 4.0);

    const difficulty = n <= 20 ? 3 : n % 10 === 5 ? 4 : n <= 60 ? 6 : 8;

    return {
      id: `q_${factKey.replace(/:/g, '_')}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      module: 'squares_cubes',
      operandA: n,
      operandB: 2,
      operator: '^2',
      correctAnswer,
      prompt: `${n}²`,
      strategyTitle,
      steps,
      mentalTip,
      targetTimeSeconds: targetTime,
      difficultyRating: difficulty,
      subTrack: n % 10 === 5 ? 'ending_5' : n >= 40 && n <= 60 ? 'near_50' : 'general_duplex',
      factKey,
    };
  }

  // 8. Cubes
  if (parsed.type === 'cube') {
    const n = parsed.operandA;
    const { strategyTitle, steps, mentalTip } = strategy.generateWorkedExample(n);

    const targetTime =
      targetTimeSecondsOverride || (n <= 12 ? 2.0 : n % 10 === 0 ? 2.5 : 5.0);
    const difficulty = n <= 12 ? 4 : n % 10 === 0 ? 5 : 9;

    return {
      id: `q_${factKey.replace(/:/g, '_')}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      module: 'squares_cubes',
      operandA: n,
      operandB: 3,
      operator: '^3',
      correctAnswer,
      prompt: `${n}³`,
      strategyTitle,
      steps,
      mentalTip,
      targetTimeSeconds: targetTime,
      difficultyRating: difficulty,
      subTrack: n <= 12 ? 'cubes_anchor' : 'cubes_advanced',
      factKey,
    };
  }

  return generateAddSubQuestion(2);
}

/**
 * Returns canonical candidate fact keys for any training target.
 */
export function getCandidateFactKeysForTarget(
  module: ModuleId,
  activeTable?: number,
  activeSquareTrack?: string,
  examSubSkill?: ExamSubSkill
): FactKey[] {
  if (module === 'tables_bootcamp' || module === 'multiplication') {
    const table = activeTable && activeTable >= 1 && activeTable <= 100 ? activeTable : 13;
    const keys: FactKey[] = [];
    for (let m = 1; m <= 20; m++) {
      keys.push(`mul:${table}:${m}`);
    }
    return keys;
  }

  if (module === 'exam_quant') {
    if (examSubSkill) {
      return [`exam:${examSubSkill}`];
    }
    return [
      'exam:quant_simplification',
      'exam:quant_approximation',
      'exam:quant_percentage',
      'exam:quant_ratio',
      'exam:quant_average',
      'exam:quant_profit_loss',
      'exam:quant_si_ci',
      'exam:quant_di_arithmetic',
      'exam:quant_number_series',
    ];
  }

  if (module === 'fractions_percentages') {
    return BANK_FRACTION_PERCENTAGE_TABLE.map(
      (fp) => `frac:${fp.numerator}:${fp.denominator}` as FactKey
    );
  }

  if (module === 'squares_cubes') {
    const keys: FactKey[] = [];
    if (activeSquareTrack === 'ending_5') {
      for (let i = 1; i <= 9; i++) keys.push(`square:${i * 10 + 5}`);
    } else if (activeSquareTrack === 'near_50') {
      for (let i = 41; i <= 59; i++) if (i !== 50) keys.push(`square:${i}`);
    } else if (activeSquareTrack === 'near_100') {
      for (let i = 81; i <= 99; i++) keys.push(`square:${i}`);
    } else if (activeSquareTrack === 'cubes_anchor') {
      for (let i = 1; i <= 15; i++) keys.push(`cube:${i}`);
      for (let i = 2; i <= 10; i++) keys.push(`cube:${i * 10}`);
    } else {
      for (let i = 1; i <= 50; i++) keys.push(`square:${i}`);
    }
    return keys;
  }

  return ['add_sub:level_2'];
}
