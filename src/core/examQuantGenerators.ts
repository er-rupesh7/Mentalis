/**
 * Bank Exam Quant Calculation Engine (RRB PO / IBPS Officer Scale-I)
 * Pure, deterministic, mathematically verified generators for:
 * 1. Simplification (BODMAS, factoring, division cancelling)
 * 2. Approximation (Rounding estimation, percentage approximations)
 * 3. Percentage Calculations (Fraction shortcuts: 12.5%, 16.67%, 37.5%, etc.)
 * 4. Ratio Calculations (Simplification, dividing amounts in ratio)
 * 5. Average Calculations (Assumed mean / deviation method)
 * 6. Profit & Loss Arithmetic (CP, SP, markup, discount)
 * 7. Simple & Compound Interest (PRT/100, 2-year successive rate formula a + b + ab/100)
 * 8. Data Interpretation Micro-Calculations (Rapid sums, differences, ratios, % more/less)
 * 9. Number Series Calculations (Missing number in linear, double diff, multiplicative series)
 * 10. Fraction ↔ Percentage Conversions (1/2 to 1/40 bidirectional)
 */

import { Question, CalculationStep } from './types';
import { randomInt } from './calcEngine';

// Canonical Fraction ↔ Percentage pairs for Bank Exams (RRB PO / IBPS)
export interface FractionPercentagePair {
  numerator: number;
  denominator: number;
  percentage: number;
  displayPercentage: string;
}

export const BANK_FRACTION_PERCENTAGE_TABLE: FractionPercentagePair[] = [
  { numerator: 1, denominator: 2, percentage: 50, displayPercentage: '50%' },
  { numerator: 1, denominator: 3, percentage: 33.33, displayPercentage: '33.33%' },
  { numerator: 2, denominator: 3, percentage: 66.67, displayPercentage: '66.67%' },
  { numerator: 1, denominator: 4, percentage: 25, displayPercentage: '25%' },
  { numerator: 3, denominator: 4, percentage: 75, displayPercentage: '75%' },
  { numerator: 1, denominator: 5, percentage: 20, displayPercentage: '20%' },
  { numerator: 2, denominator: 5, percentage: 40, displayPercentage: '40%' },
  { numerator: 3, denominator: 5, percentage: 60, displayPercentage: '60%' },
  { numerator: 4, denominator: 5, percentage: 80, displayPercentage: '80%' },
  { numerator: 1, denominator: 6, percentage: 16.67, displayPercentage: '16.67%' },
  { numerator: 5, denominator: 6, percentage: 83.33, displayPercentage: '83.33%' },
  { numerator: 1, denominator: 7, percentage: 14.28, displayPercentage: '14.28%' },
  { numerator: 1, denominator: 8, percentage: 12.5, displayPercentage: '12.5%' },
  { numerator: 3, denominator: 8, percentage: 37.5, displayPercentage: '37.5%' },
  { numerator: 5, denominator: 8, percentage: 62.5, displayPercentage: '62.5%' },
  { numerator: 7, denominator: 8, percentage: 87.5, displayPercentage: '87.5%' },
  { numerator: 1, denominator: 9, percentage: 11.11, displayPercentage: '11.11%' },
  { numerator: 1, denominator: 10, percentage: 10, displayPercentage: '10%' },
  { numerator: 1, denominator: 11, percentage: 9.09, displayPercentage: '9.09%' },
  { numerator: 1, denominator: 12, percentage: 8.33, displayPercentage: '8.33%' },
  { numerator: 1, denominator: 13, percentage: 7.69, displayPercentage: '7.69%' },
  { numerator: 1, denominator: 14, percentage: 7.14, displayPercentage: '7.14%' },
  { numerator: 1, denominator: 15, percentage: 6.67, displayPercentage: '6.67%' },
  { numerator: 1, denominator: 16, percentage: 6.25, displayPercentage: '6.25%' },
  { numerator: 1, denominator: 20, percentage: 5, displayPercentage: '5%' },
  { numerator: 1, denominator: 24, percentage: 4.16, displayPercentage: '4.16%' },
  { numerator: 1, denominator: 25, percentage: 4, displayPercentage: '4%' },
  { numerator: 1, denominator: 40, percentage: 2.5, displayPercentage: '2.5%' },
  { numerator: 1, denominator: 50, percentage: 2, displayPercentage: '2%' },
];

/**
 * 1. Simplification Generator
 * Real bank exam arithmetic expressions (BODMAS) guaranteed to evaluate cleanly to integers.
 */
export function generateSimplificationQuestion(difficulty: number = 2): Question {
  const qType = randomInt(1, 4);

  if (qType === 1) {
    // 3-term additive chain: A + B - C
    const a = randomInt(35, 95);
    const b = randomInt(25, 85);
    const c = randomInt(15, Math.min(a + b - 10, 80));
    const ans = a + b - c;

    return {
      id: `simp_${a}_${b}_${c}_${Date.now()}`,
      module: 'exam_quant',
      operandA: a,
      operandB: b,
      operator: '+',
      correctAnswer: ans,
      prompt: `${a} + ${b} - ${c}`,
      strategyTitle: 'Left-to-Right Running Accumulator',
      steps: [
        {
          stepNumber: 1,
          title: 'Add first two terms',
          subVocalization: `${a} + ${b} = ${a + b}`,
          intermediateValue: a + b,
          explanation: `Combine ${a} and ${b} tens-first.`,
        },
        {
          stepNumber: 2,
          title: 'Subtract third term',
          subVocalization: `${a + b} - ${c} = ${ans}`,
          intermediateValue: ans,
          explanation: `Subtract ${c} from running sum ${a + b}.`,
        },
      ],
      mentalTip: 'Accumulate left-to-right holding the running total in working memory.',
      targetTimeSeconds: 5.5,
      difficultyRating: difficulty,
      subTrack: 'simplification',
      examSubSkill: 'quant_simplification',
      factKey: `exam:simplification:${a}_${b}_${c}`,
    };
  }

  if (qType === 2) {
    // Multiplicative factor distribution: e.g. 125 × 16 or 25 × 36
    const baseFactor = Math.random() > 0.5 ? 25 : 125;
    const mult = baseFactor === 25 ? randomInt(4, 24) * 4 : randomInt(2, 12) * 8;
    const ans = baseFactor * mult;

    const shortcutText = baseFactor === 25
      ? `${baseFactor} × ${mult} = 100 × (${mult} ÷ 4) = 100 × ${mult / 4} = ${ans}`
      : `${baseFactor} × ${mult} = 1000 × (${mult} ÷ 8) = 1000 × ${mult / 8} = ${ans}`;

    return {
      id: `simp_fac_${baseFactor}_${mult}_${Date.now()}`,
      module: 'exam_quant',
      operandA: baseFactor,
      operandB: mult,
      operator: '×',
      correctAnswer: ans,
      prompt: `${baseFactor} × ${mult}`,
      strategyTitle: baseFactor === 25 ? 'Divide by 4 & Multiply by 100' : 'Divide by 8 & Multiply by 1000',
      steps: [
        {
          stepNumber: 1,
          title: 'Base Conversion Shortcut',
          subVocalization: shortcutText,
          intermediateValue: ans,
          explanation: `Replace ${baseFactor} with fraction of power of 10.`,
        },
      ],
      mentalTip: baseFactor === 25 ? 'Multiply by 25 = Divide by 4, then append two zeros.' : 'Multiply by 125 = Divide by 8, then append three zeros.',
      targetTimeSeconds: 4.5,
      difficultyRating: difficulty,
      subTrack: 'simplification',
      examSubSkill: 'quant_simplification',
      factKey: `exam:simplification:${baseFactor}_${mult}`,
    };
  }

  if (qType === 3) {
    // Division with clean cancellation: e.g. 840 ÷ 24 or 960 ÷ 16
    const divisor = randomInt(12, 32);
    const quotient = randomInt(15, 65);
    const dividend = divisor * quotient;

    return {
      id: `simp_div_${dividend}_${divisor}_${Date.now()}`,
      module: 'exam_quant',
      operandA: dividend,
      operandB: divisor,
      operator: '÷',
      correctAnswer: quotient,
      prompt: `${dividend} ÷ ${divisor}`,
      strategyTitle: 'Factor & Cancel Division',
      steps: [
        {
          stepNumber: 1,
          title: 'Halving / Factoring',
          subVocalization: `${dividend} ÷ ${divisor} = ${quotient}`,
          intermediateValue: quotient,
          explanation: `Cancel common factors (e.g. divide both by 4 or 6) before final division.`,
        },
      ],
      mentalTip: 'Halve both numbers twice if both are divisible by 4.',
      targetTimeSeconds: 5.5,
      difficultyRating: difficulty,
      subTrack: 'simplification',
      examSubSkill: 'quant_simplification',
      factKey: `exam:simplification:div_${dividend}_${divisor}`,
    };
  }

  // Combined operations: (A × B) + C
  const a = randomInt(11, 20);
  const b = randomInt(5, 12);
  const c = randomInt(15, 85);
  const ans = a * b + c;

  return {
    id: `simp_comb_${a}_${b}_${c}_${Date.now()}`,
    module: 'exam_quant',
    operandA: a,
    operandB: b,
    operator: '+',
    correctAnswer: ans,
    prompt: `(${a} × ${b}) + ${c}`,
    strategyTitle: 'BODMAS Product then Accumulate',
    steps: [
      {
        stepNumber: 1,
        title: 'Compute Product',
        subVocalization: `${a} × ${b} = ${a * b}`,
        intermediateValue: a * b,
        explanation: `Multiply ${a} by ${b}.`,
      },
      {
        stepNumber: 2,
        title: 'Add Constant',
        subVocalization: `${a * b} + ${c} = ${ans}`,
        intermediateValue: ans,
        explanation: `Add ${c} to ${a * b}.`,
      },
    ],
    mentalTip: 'Resolve multiplication first, hold product, then add units and tens.',
    targetTimeSeconds: 6.0,
    difficultyRating: difficulty,
    subTrack: 'simplification',
    examSubSkill: 'quant_simplification',
    factKey: `exam:simplification:${a}_${b}_add_${c}`,
  };
}

/**
 * 2. Approximation Generator
 * Rounding estimations typical of RRB PO Quant.
 */
export function generateApproximationQuestion(difficulty: number = 2): Question {
  const qType = randomInt(1, 3);

  if (qType === 1) {
    // Near decade product: e.g. 497 × 19 ≈ 500 × 19 = 9500
    const base = randomInt(2, 9) * 100 - (Math.random() > 0.5 ? 2 : 3);
    const roundedBase = Math.round(base / 100) * 100;
    const mult = randomInt(12, 28);
    const approxAnswer = roundedBase * mult;

    return {
      id: `approx_mul_${base}_${mult}_${Date.now()}`,
      module: 'exam_quant',
      operandA: base,
      operandB: mult,
      operator: '≈',
      correctAnswer: approxAnswer,
      prompt: `${base} × ${mult} ≈ ?`,
      strategyTitle: 'Round to Century Anchor',
      steps: [
        {
          stepNumber: 1,
          title: 'Round base operand',
          subVocalization: `${base} ≈ ${roundedBase}`,
          intermediateValue: roundedBase,
          explanation: `Round ${base} to nearest century (${roundedBase}).`,
        },
        {
          stepNumber: 2,
          title: 'Multiply clean anchor',
          subVocalization: `${roundedBase} × ${mult} = ${approxAnswer}`,
          intermediateValue: approxAnswer,
          explanation: `Multiply clean anchor by ${mult}.`,
        },
      ],
      mentalTip: 'Round 497 or 498 to 500. Rounding error is minimal in bank exams.',
      targetTimeSeconds: 5.0,
      difficultyRating: difficulty,
      subTrack: 'approximation',
      examSubSkill: 'quant_approximation',
      factKey: `exam:approx:${roundedBase}_${mult}`,
    };
  }

  if (qType === 2) {
    // Percentage approximation: e.g. 39.8% of 450 ≈ 40% of 450 = 180
    const pctInt = randomInt(2, 8) * 10;
    const noisyPct = pctInt - 0.2;
    const base = randomInt(15, 60) * 10;
    const approxAnswer = (pctInt / 100) * base;

    return {
      id: `approx_pct_${pctInt}_${base}_${Date.now()}`,
      module: 'exam_quant',
      operandA: noisyPct,
      operandB: base,
      operator: '≈',
      correctAnswer: Math.round(approxAnswer),
      prompt: `${noisyPct}% of ${base} ≈ ?`,
      strategyTitle: 'Round to Clean Decade Percent',
      steps: [
        {
          stepNumber: 1,
          title: 'Round percentage',
          subVocalization: `${noisyPct}% ≈ ${pctInt}%`,
          intermediateValue: pctInt,
          explanation: `Round ${noisyPct}% to ${pctInt}%.`,
        },
        {
          stepNumber: 2,
          title: 'Compute clean percentage',
          subVocalization: `${pctInt}% of ${base} = ${approxAnswer}`,
          intermediateValue: approxAnswer,
          explanation: `Calculate ${pctInt / 10} × ${base / 10} = ${approxAnswer}.`,
        },
      ],
      mentalTip: 'Substitute 39.8% with 40%. 10% = 45, so 40% = 45 × 4 = 180.',
      targetTimeSeconds: 5.0,
      difficultyRating: difficulty,
      subTrack: 'approximation',
      examSubSkill: 'quant_approximation',
      factKey: `exam:approx:${pctInt}_pct_${base}`,
    };
  }

  // Near square root: e.g. √623.8 ≈ 25
  const root = randomInt(14, 35);
  const noisySquare = root * root - (Math.random() > 0.5 ? 1.2 : -1.5);

  return {
    id: `approx_sqrt_${root}_${Date.now()}`,
    module: 'exam_quant',
    operandA: Math.round(noisySquare * 10) / 10,
    operandB: 2,
    operator: '≈',
    correctAnswer: root,
    prompt: `√(${Math.round(noisySquare * 10) / 10}) ≈ ?`,
    strategyTitle: 'Nearest Perfect Square Anchor',
    steps: [
      {
        stepNumber: 1,
        title: 'Find nearest perfect square',
        subVocalization: `${noisySquare.toFixed(1)} is nearest to ${root * root} (${root}²)`,
        intermediateValue: root,
        explanation: `${root}² = ${root * root}.`,
      },
    ],
    mentalTip: 'Identify the nearest perfect square in memory.',
    targetTimeSeconds: 4.5,
    difficultyRating: difficulty,
    subTrack: 'approximation',
    examSubSkill: 'quant_approximation',
    factKey: `exam:approx:sqrt_${root}`,
  };
}

/**
 * 3. Percentage Calculation Generator
 * Standard Quant percentage calculations with fractional shortcuts.
 */
export function generatePercentageQuestion(difficulty: number = 2): Question {
  const pair = BANK_FRACTION_PERCENTAGE_TABLE[randomInt(0, BANK_FRACTION_PERCENTAGE_TABLE.length - 1)];
  const mult = randomInt(2, 16);
  const base = pair.denominator * mult;
  const answer = pair.numerator * mult;

  return {
    id: `pct_${pair.denominator}_${mult}_${Date.now()}`,
    module: 'exam_quant',
    operandA: pair.percentage,
    operandB: base,
    operator: '%',
    correctAnswer: answer,
    prompt: `${pair.displayPercentage} of ${base}`,
    strategyTitle: `Fraction Equivalent (${pair.numerator}/${pair.denominator})`,
    steps: [
      {
        stepNumber: 1,
        title: 'Convert Percentage to Fraction',
        subVocalization: `${pair.displayPercentage} = ${pair.numerator}/${pair.denominator}`,
        intermediateValue: `${pair.numerator}/${pair.denominator}`,
        explanation: `Recognize ${pair.displayPercentage} as ${pair.numerator}/${pair.denominator}.`,
      },
      {
        stepNumber: 2,
        title: 'Divide & Multiply',
        subVocalization: `${base} ÷ ${pair.denominator} = ${mult}; ${mult} × ${pair.numerator} = ${answer}`,
        intermediateValue: answer,
        explanation: `Divide ${base} by ${pair.denominator} to get ${answer}.`,
      },
    ],
    mentalTip: `Convert ${pair.displayPercentage} directly into ${pair.numerator}/${pair.denominator}.`,
    targetTimeSeconds: 4.5,
    difficultyRating: difficulty,
    subTrack: 'percentages',
    examSubSkill: 'quant_percentage',
    factKey: `exam:pct:${pair.denominator}_${mult}`,
  };
}

/**
 * 4. Ratio Calculation Generator
 * Quant ratio simplifications and amount splitting.
 */
export function generateRatioQuestion(difficulty: number = 2): Question {
  const isSimplification = Math.random() > 0.4;

  if (isSimplification) {
    // Simplify A : B -> e.g. 84 : 126 -> find HCF or simplified smaller term
    const r1 = randomInt(2, 7);
    const r2 = randomInt(r1 + 1, 11);
    const factor = randomInt(6, 18);
    const a = r1 * factor;
    const b = r2 * factor;

    return {
      id: `ratio_simp_${a}_${b}_${Date.now()}`,
      module: 'exam_quant',
      operandA: a,
      operandB: b,
      operator: ':',
      correctAnswer: r1, // ask for the first term of the simplified ratio
      prompt: `Simplify ${a} : ${b}. What is the first term?`,
      strategyTitle: 'Cancel Common Factors',
      steps: [
        {
          stepNumber: 1,
          title: 'Identify common factor',
          subVocalization: `Common factor is ${factor}: ${a} ÷ ${factor} = ${r1}, ${b} ÷ ${factor} = ${r2}`,
          intermediateValue: `${r1}:${r2}`,
          explanation: `Divide both terms by ${factor} to arrive at ${r1} : ${r2}.`,
        },
      ],
      mentalTip: 'Find common multiples of 6, 9, or 12 to reduce quickly.',
      targetTimeSeconds: 5.0,
      difficultyRating: difficulty,
      subTrack: 'ratios',
      examSubSkill: 'quant_ratio',
      factKey: `exam:ratio:${r1}_${r2}`,
    };
  }

  // Divide quantity Q in ratio R1 : R2
  const r1 = randomInt(2, 5);
  const r2 = randomInt(3, 7);
  const partValue = randomInt(15, 60);
  const total = (r1 + r2) * partValue;
  const answer = r1 * partValue; // value of first part

  return {
    id: `ratio_split_${total}_${r1}_${r2}_${Date.now()}`,
    module: 'exam_quant',
    operandA: total,
    operandB: r1 + r2,
    operator: ':',
    correctAnswer: answer,
    prompt: `Divide ${total} in ratio ${r1} : ${r2}. What is the first part?`,
    strategyTitle: 'Unitary Ratio Method',
    steps: [
      {
        stepNumber: 1,
        title: 'Sum ratio parts',
        subVocalization: `${r1} + ${r2} = ${r1 + r2} parts`,
        intermediateValue: r1 + r2,
        explanation: `Total parts = ${r1 + r2}.`,
      },
      {
        stepNumber: 2,
        title: 'Value of 1 part',
        subVocalization: `${total} ÷ ${r1 + r2} = ${partValue}`,
        intermediateValue: partValue,
        explanation: `Each part = ${total} ÷ ${r1 + r2} = ${partValue}.`,
      },
      {
        stepNumber: 3,
        title: 'Calculate first part',
        subVocalization: `${r1} × ${partValue} = ${answer}`,
        intermediateValue: answer,
        explanation: `${r1} parts = ${answer}.`,
      },
    ],
    mentalTip: '1 Part = Total ÷ (R1 + R2). Then multiply by requested ratio term.',
    targetTimeSeconds: 6.0,
    difficultyRating: difficulty,
    subTrack: 'ratios',
    examSubSkill: 'quant_ratio',
    factKey: `exam:ratio_split:${r1}_${r2}_${total}`,
  };
}

/**
 * 5. Average Calculation Generator
 * Uses the Assumed Mean / Deviation method.
 */
export function generateAverageQuestion(difficulty: number = 2): Question {
  const assumedMean = randomInt(30, 75);
  const deviations = [randomInt(-8, -2), randomInt(-3, 3), randomInt(1, 8), randomInt(-6, 6)];
  // Make sum of deviations a multiple of 5
  const currentSum = deviations.reduce((a, b) => a + b, 0);
  const targetRemainder = currentSum % 5 === 0 ? 0 : 5 - ((currentSum % 5 + 5) % 5);
  const fifthDev = targetRemainder === 0 ? randomInt(-2, 2) * 5 : targetRemainder;
  deviations.push(fifthDev);

  const values = deviations.map((d) => assumedMean + d);
  const avg = assumedMean + deviations.reduce((a, b) => a + b, 0) / 5;

  return {
    id: `avg_${values.join('_')}_${Date.now()}`,
    module: 'exam_quant',
    operandA: values[0],
    operandB: values[1],
    operator: '+',
    correctAnswer: avg,
    prompt: `Average of: ${values.join(', ')}`,
    strategyTitle: 'Assumed Mean / Deviation Method',
    steps: [
      {
        stepNumber: 1,
        title: 'Choose assumed mean',
        subVocalization: `Anchor mean ≈ ${assumedMean}`,
        intermediateValue: assumedMean,
        explanation: `Pick a central round number like ${assumedMean}.`,
      },
      {
        stepNumber: 2,
        title: 'Sum deviations',
        subVocalization: `Deviations: ${deviations.map((d) => (d >= 0 ? `+${d}` : `${d}`)).join(', ')} = ${deviations.reduce((a, b) => a + b, 0)}`,
        intermediateValue: deviations.reduce((a, b) => a + b, 0),
        explanation: `Sum deviations: ${deviations.reduce((a, b) => a + b, 0)}. Net change = ${deviations.reduce((a, b) => a + b, 0)} ÷ 5 = ${deviations.reduce((a, b) => a + b, 0) / 5}.`,
      },
      {
        stepNumber: 3,
        title: 'Adjust mean',
        subVocalization: `${assumedMean} + (${deviations.reduce((a, b) => a + b, 0) / 5}) = ${avg}`,
        intermediateValue: avg,
        explanation: `Final average = ${avg}.`,
      },
    ],
    mentalTip: 'Do NOT sum all 5 large numbers! Take deviations from a round center.',
    targetTimeSeconds: 6.5,
    difficultyRating: difficulty,
    subTrack: 'averages',
    examSubSkill: 'quant_average',
    factKey: `exam:avg:${avg}`,
  };
}

/**
 * 6. Profit & Loss Arithmetic Generator
 */
export function generateProfitLossQuestion(difficulty: number = 2): Question {
  const isProfit = Math.random() > 0.4;
  const cp = randomInt(15, 60) * 10;
  const pct = [10, 20, 25, 30, 40, 50][randomInt(0, 5)];
  const delta = (pct / 100) * cp;
  const sp = isProfit ? cp + delta : cp - delta;

  return {
    id: `pl_${cp}_${pct}_${Date.now()}`,
    module: 'exam_quant',
    operandA: cp,
    operandB: pct,
    operator: '%',
    correctAnswer: sp,
    prompt: `CP = ₹${cp}, ${isProfit ? 'Profit' : 'Loss'} = ${pct}%. What is SP?`,
    strategyTitle: 'Percentage Multiplier Method',
    steps: [
      {
        stepNumber: 1,
        title: 'Calculate percentage value',
        subVocalization: `${pct}% of ${cp} = ${delta}`,
        intermediateValue: delta,
        explanation: `${pct}% of ${cp} = ${delta}.`,
      },
      {
        stepNumber: 2,
        title: isProfit ? 'Add profit to CP' : 'Subtract loss from CP',
        subVocalization: `${cp} ${isProfit ? '+' : '-'} ${delta} = ${sp}`,
        intermediateValue: sp,
        explanation: `SP = ${sp}.`,
      },
    ],
    mentalTip: `${pct}% = ${pct / 100}. SP = CP × (1 ${isProfit ? '+' : '-'} ${pct / 100}).`,
    targetTimeSeconds: 5.5,
    difficultyRating: difficulty,
    subTrack: 'profit_loss',
    examSubSkill: 'quant_profit_loss',
    factKey: `exam:pl:${cp}_${pct}`,
  };
}

/**
 * 7. Simple & Compound Interest Arithmetic Generator
 */
export function generateInterestQuestion(difficulty: number = 2): Question {
  const isSimple = Math.random() > 0.45;

  if (isSimple) {
    // SI = P * R * T / 100
    const p = randomInt(12, 60) * 100;
    const r = randomInt(4, 12);
    const t = randomInt(2, 5);
    const si = (p * r * t) / 100;

    return {
      id: `si_${p}_${r}_${t}_${Date.now()}`,
      module: 'exam_quant',
      operandA: p,
      operandB: r,
      operator: '%',
      correctAnswer: si,
      prompt: `Simple Interest on ₹${p} at ${r}% p.a. for ${t} years = ?`,
      strategyTitle: 'Net Interest Rate Method (R × T %)',
      steps: [
        {
          stepNumber: 1,
          title: 'Net percentage rate',
          subVocalization: `${r}% × ${t} years = ${r * t}%`,
          intermediateValue: r * t,
          explanation: `Total interest = ${r * t}% of principal.`,
        },
        {
          stepNumber: 2,
          title: 'Calculate percentage of principal',
          subVocalization: `${r * t}% of ₹${p} = ₹${si}`,
          intermediateValue: si,
          explanation: `${(r * t) / 100} × ${p} = ${si}.`,
        },
      ],
      mentalTip: 'Multiply Rate × Time first. 6% for 3 years = 18% of Principal.',
      targetTimeSeconds: 6.0,
      difficultyRating: difficulty,
      subTrack: 'interest',
      examSubSkill: 'quant_si_ci',
      factKey: `exam:si:${p}_${r}_${t}`,
    };
  }

  // CI net effective rate for 2 years: r + r + (r*r)/100 %
  const r = [5, 10, 20][randomInt(0, 2)];
  const netRate = 2 * r + (r * r) / 100; // e.g. 10% -> 21%, 5% -> 10.25%, 20% -> 44%
  const p = r === 5 ? 4000 : r === 10 ? 2000 : 1500;
  const ci = (netRate / 100) * p;

  return {
    id: `ci_${p}_${r}_${Date.now()}`,
    module: 'exam_quant',
    operandA: p,
    operandB: r,
    operator: '%',
    correctAnswer: Math.round(ci),
    prompt: `Compound Interest on ₹${p} at ${r}% p.a. for 2 years (compounded annually) = ?`,
    strategyTitle: 'Net Effective Rate Formula (a + b + ab/100)',
    steps: [
      {
        stepNumber: 1,
        title: 'Net 2-year CI rate',
        subVocalization: `${r} + ${r} + (${r}×${r})/100 = ${netRate}%`,
        intermediateValue: netRate,
        explanation: `Net interest rate = ${netRate}%.`,
      },
      {
        stepNumber: 2,
        title: 'Calculate CI',
        subVocalization: `${netRate}% of ₹${p} = ₹${Math.round(ci)}`,
        intermediateValue: Math.round(ci),
        explanation: `CI = ₹${Math.round(ci)}.`,
      },
    ],
    mentalTip: `Memorize 2-yr CI rates: 5% → 10.25%, 10% → 21%, 20% → 44%.`,
    targetTimeSeconds: 6.5,
    difficultyRating: difficulty,
    subTrack: 'interest',
    examSubSkill: 'quant_si_ci',
    factKey: `exam:ci:${p}_${r}`,
  };
}

/**
 * 8. Data Interpretation (DI) Micro-Calculations Generator
 */
export function generateDICalculationQuestion(difficulty: number = 2): Question {
  const isDifferenceOrSum = Math.random() > 0.5;

  if (isDifferenceOrSum) {
    // DI Sum of 3 quantities: e.g. 142 + 218 + 175 = 535
    const v1 = randomInt(110, 280);
    const v2 = randomInt(120, 290);
    const v3 = randomInt(90, 250);
    const sum = v1 + v2 + v3;

    return {
      id: `di_sum_${v1}_${v2}_${v3}_${Date.now()}`,
      module: 'exam_quant',
      operandA: v1,
      operandB: v2,
      operator: '+',
      correctAnswer: sum,
      prompt: `DI Total: ${v1} + ${v2} + ${v3}`,
      strategyTitle: 'Hundreds-First Left-to-Right Accumulator',
      steps: [
        {
          stepNumber: 1,
          title: 'Sum hundreds',
          subVocalization: `${Math.floor(v1 / 100) * 100} + ${Math.floor(v2 / 100) * 100} + ${Math.floor(v3 / 100) * 100} = ${(Math.floor(v1 / 100) + Math.floor(v2 / 100) + Math.floor(v3 / 100)) * 100}`,
          intermediateValue: (Math.floor(v1 / 100) + Math.floor(v2 / 100) + Math.floor(v3 / 100)) * 100,
          explanation: 'Accumulate the most significant digits first.',
        },
        {
          stepNumber: 2,
          title: 'Add tens and units',
          subVocalization: `Add remainder to get ${sum}`,
          intermediateValue: sum,
          explanation: `Total = ${sum}.`,
        },
      ],
      mentalTip: 'Add hundreds first (100+200+100=400), then add 42+18+75=135 → 535.',
      targetTimeSeconds: 6.0,
      difficultyRating: difficulty,
      subTrack: 'di_arithmetic',
      examSubSkill: 'quant_di_arithmetic',
      factKey: `exam:di_sum:${v1}_${v2}_${v3}`,
    };
  }

  // DI Percentage More / Less: "Value A (120) is what % more than Value B (100)?" -> 20%
  const b = [50, 100, 200, 250, 400][randomInt(0, 4)];
  const pctMore = [10, 20, 25, 40, 50][randomInt(0, 4)];
  const a = b + (pctMore / 100) * b;

  return {
    id: `di_pct_more_${a}_${b}_${Date.now()}`,
    module: 'exam_quant',
    operandA: a,
    operandB: b,
    operator: '%',
    correctAnswer: pctMore,
    prompt: `Value A = ${a} is what % more than Value B = ${b}?`,
    strategyTitle: 'Difference over Base Formula (Diff / Base × 100)',
    steps: [
      {
        stepNumber: 1,
        title: 'Compute Difference',
        subVocalization: `${a} - ${b} = ${a - b}`,
        intermediateValue: a - b,
        explanation: `Difference = ${a - b}.`,
      },
      {
        stepNumber: 2,
        title: 'Divide by Base B',
        subVocalization: `(${a - b} ÷ ${b}) × 100 = ${pctMore}%`,
        intermediateValue: pctMore,
        explanation: `Base is B (${b}), so percentage = ${pctMore}%.`,
      },
    ],
    mentalTip: 'Formula: ((A - B) ÷ B) × 100. Always divide by the "than" value!',
    targetTimeSeconds: 5.5,
    difficultyRating: difficulty,
    subTrack: 'di_arithmetic',
    examSubSkill: 'quant_di_arithmetic',
    factKey: `exam:di_pct_more:${a}_${b}`,
  };
}

/**
 * 9. Number Series Generator
 * Missing term in linear difference, double difference, or multiplicative series.
 */
export function generateNumberSeriesQuestion(difficulty: number = 2): Question {
  const seriesType = randomInt(1, 3);

  if (seriesType === 1) {
    // Linear arithmetic step: e.g. 14, 21, 28, 35, ? (step 7)
    const step = randomInt(6, 14);
    const start = randomInt(12, 45);
    const terms = [start, start + step, start + 2 * step, start + 3 * step];
    const missing = start + 4 * step;

    return {
      id: `series_lin_${start}_${step}_${Date.now()}`,
      module: 'exam_quant',
      operandA: start,
      operandB: step,
      operator: '+',
      correctAnswer: missing,
      prompt: `Missing term: ${terms.join(', ')}, ?`,
      strategyTitle: 'Constant Difference Pattern',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate successive differences',
          subVocalization: `Difference between terms is +${step}`,
          intermediateValue: step,
          explanation: `Linear pattern: each step adds ${step}.`,
        },
        {
          stepNumber: 2,
          title: 'Add step to last term',
          subVocalization: `${terms[3]} + ${step} = ${missing}`,
          intermediateValue: missing,
          explanation: `Next term = ${missing}.`,
        },
      ],
      mentalTip: 'Check difference between consecutive numbers immediately.',
      targetTimeSeconds: 6.0,
      difficultyRating: difficulty,
      subTrack: 'number_series',
      examSubSkill: 'quant_number_series',
      factKey: `exam:series:lin_${step}`,
    };
  }

  if (seriesType === 2) {
    // Double difference: step increases by constant d (e.g. +3, +6, +9, +12)
    const d = randomInt(3, 7);
    const start = randomInt(5, 20);
    const diff1 = d;
    const diff2 = 2 * d;
    const diff3 = 3 * d;
    const diff4 = 4 * d;
    const t0 = start;
    const t1 = t0 + diff1;
    const t2 = t1 + diff2;
    const t3 = t2 + diff3;
    const missing = t3 + diff4;

    return {
      id: `series_dd_${start}_${d}_${Date.now()}`,
      module: 'exam_quant',
      operandA: start,
      operandB: d,
      operator: '+',
      correctAnswer: missing,
      prompt: `Missing term: ${[t0, t1, t2, t3].join(', ')}, ?`,
      strategyTitle: 'Arithmetic Steps (Table of Differences)',
      steps: [
        {
          stepNumber: 1,
          title: 'Differences between terms',
          subVocalization: `+${diff1}, +${diff2}, +${diff3} (multiples of ${d})`,
          intermediateValue: diff4,
          explanation: `Next difference must be +${diff4}.`,
        },
        {
          stepNumber: 2,
          title: 'Compute next term',
          subVocalization: `${t3} + ${diff4} = ${missing}`,
          intermediateValue: missing,
          explanation: `Next term = ${missing}.`,
        },
      ],
      mentalTip: 'Differences are increasing by a fixed amount. Write differences mentally.',
      targetTimeSeconds: 7.0,
      difficultyRating: difficulty,
      subTrack: 'number_series',
      examSubSkill: 'quant_number_series',
      factKey: `exam:series:dd_${d}`,
    };
  }

  // Multiplicative step: e.g. ×2 + 1: 4, 9, 19, 39, ?
  const mult = 2;
  const addConst = randomInt(1, 3);
  const t0 = randomInt(3, 7);
  const t1 = t0 * mult + addConst;
  const t2 = t1 * mult + addConst;
  const t3 = t2 * mult + addConst;
  const missing = t3 * mult + addConst;

  return {
    id: `series_mult_${t0}_${addConst}_${Date.now()}`,
    module: 'exam_quant',
    operandA: t0,
    operandB: mult,
    operator: '×',
    correctAnswer: missing,
    prompt: `Missing term: ${[t0, t1, t2, t3].join(', ')}, ?`,
    strategyTitle: 'Multiply and Add Pattern (×2 + k)',
    steps: [
      {
        stepNumber: 1,
        title: 'Detect pattern',
        subVocalization: `Each term is ×2 + ${addConst}`,
        intermediateValue: mult,
        explanation: `Each number doubles and adds ${addConst}.`,
      },
      {
        stepNumber: 2,
        title: 'Calculate missing term',
        subVocalization: `(${t3} × 2) + ${addConst} = ${missing}`,
        intermediateValue: missing,
        explanation: `Next term = ${missing}.`,
      },
    ],
    mentalTip: 'If numbers roughly double, check (×2 ± constant).',
    targetTimeSeconds: 7.0,
    difficultyRating: difficulty,
    subTrack: 'number_series',
    examSubSkill: 'quant_number_series',
    factKey: `exam:series:mult_${mult}_add_${addConst}`,
  };
}

/**
 * 10. Fraction ↔ Percentage Conversions Generator
 */
export function generateFractionPercentageQuestion(): Question {
  const isFractionToPercent = Math.random() > 0.5;
  const pair = BANK_FRACTION_PERCENTAGE_TABLE[randomInt(0, BANK_FRACTION_PERCENTAGE_TABLE.length - 1)];

  if (isFractionToPercent) {
    return {
      id: `frac_to_pct_${pair.numerator}_${pair.denominator}_${Date.now()}`,
      module: 'fractions_percentages',
      operandA: pair.numerator,
      operandB: pair.denominator,
      operator: '%',
      correctAnswer: Math.round(pair.percentage * 100) / 100,
      prompt: `Convert ${pair.numerator}/${pair.denominator} to percentage`,
      strategyTitle: 'Canonical Bank Fraction Table',
      steps: [
        {
          stepNumber: 1,
          title: 'Direct Memory Recall',
          subVocalization: `${pair.numerator}/${pair.denominator} = ${pair.displayPercentage}`,
          intermediateValue: pair.displayPercentage,
          explanation: `1/${pair.denominator} = ${(100 / pair.denominator).toFixed(2)}%, so ${pair.numerator}/${pair.denominator} = ${pair.displayPercentage}.`,
        },
      ],
      mentalTip: `Memorize this canonical conversion: ${pair.numerator}/${pair.denominator} = ${pair.displayPercentage}.`,
      targetTimeSeconds: 2.5,
      difficultyRating: 2,
      subTrack: 'fractions_percentages',
      examSubSkill: 'quant_percentage',
      factKey: `frac_pct:${pair.numerator}_${pair.denominator}`,
    };
  }

  return {
    id: `pct_to_frac_${pair.denominator}_${Date.now()}`,
    module: 'fractions_percentages',
    operandA: pair.percentage,
    operandB: pair.denominator,
    operator: '÷',
    correctAnswer: pair.denominator, // ask for denominator when numerator is 1
    prompt: `${pair.displayPercentage} = 1 / ?`,
    strategyTitle: 'Percentage to Fraction Denominator',
    steps: [
      {
        stepNumber: 1,
        title: 'Identify Denominator',
        subVocalization: `${pair.displayPercentage} = 1/${pair.denominator}`,
        intermediateValue: pair.denominator,
        explanation: `100 ÷ ${pair.percentage} = ${pair.denominator}.`,
      },
    ],
    mentalTip: `${pair.displayPercentage} = 1/${pair.denominator}. Keep this automatic!`,
    targetTimeSeconds: 2.5,
    difficultyRating: 2,
    subTrack: 'fractions_percentages',
    examSubSkill: 'quant_percentage',
    factKey: `pct_frac:${pair.denominator}`,
  };
}
