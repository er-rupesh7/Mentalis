/**
 * Algorithmic Question Generation Engine for Mentalis
 * Pure functions: Deterministic or randomized mathematical generation with zero side-effects.
 */

import { Question, AnzanSequence, AnzanConfig, LevelDefinition, ArithmeticCombination } from './types';
import {
  getAdditionStrategy,
  getSubtractionStrategy,
  getMultiplicationStrategy,
  getSquareStrategy,
  getCubeStrategy,
} from './strategies';

/**
 * Generates an integer in range [min, max] inclusive.
 */
export function randomInt(min: number, max: number): number {
  const low = Math.ceil(min);
  const high = Math.floor(max);
  if (low > high) return low;
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

/**
 * Curated Level Definitions for Progressive Addition & Subtraction (Levels 1 to 6)
 */
export const ADD_SUB_LEVELS: LevelDefinition[] = [
  {
    id: 'add_sub_1',
    module: 'add_sub',
    levelNumber: 1,
    title: 'Level 1: Foundations',
    subtitle: '2-digit ± 1-digit',
    description: 'Decade bridging and direct unit adjustments using Left-to-Right mental steps.',
    targetTimeSeconds: 1.8,
    badgeName: 'Foundation Decadist',
  },
  {
    id: 'add_sub_2',
    module: 'add_sub',
    levelNumber: 2,
    title: 'Level 2: Decade Strides',
    subtitle: '2-digit ± 2-digit',
    description: 'Add tens first, hold the accumulator, then resolve units.',
    targetTimeSeconds: 2.5,
    badgeName: 'Decade Strider',
  },
  {
    id: 'add_sub_3',
    module: 'add_sub',
    levelNumber: 3,
    title: 'Level 3: Century Crossing',
    subtitle: '3-digit ± 2-digit',
    description: 'Hold hundreds stable while accumulating decades and units.',
    targetTimeSeconds: 3.2,
    badgeName: 'Century Navigator',
  },
  {
    id: 'add_sub_4',
    module: 'add_sub',
    levelNumber: 4,
    title: 'Level 4: Triple Digits',
    subtitle: '3-digit ± 3-digit',
    description: 'Full multi-stage Left-to-Right accumulator across hundreds, tens, and units.',
    targetTimeSeconds: 4.5,
    badgeName: 'Triple Digit Master',
  },
  {
    id: 'add_sub_5',
    module: 'add_sub',
    levelNumber: 5,
    title: 'Level 5: Quad Mastery',
    subtitle: '4-digit ± 3-digit & 4-digit',
    description: 'High working memory load: Thousands and hundreds accumulated dynamically.',
    targetTimeSeconds: 6.0,
    badgeName: 'Quad Specialist',
  },
  {
    id: 'add_sub_6',
    module: 'add_sub',
    levelNumber: 6,
    title: 'Master Level: Grandmaster Run',
    subtitle: '5-digit ± 5-digit',
    description: 'Elite mental arithmetic: 5 full accumulator steps without paper.',
    targetTimeSeconds: 8.0,
    badgeName: 'Mental Arithmetic Grandmaster',
  },
];

/**
 * Module A: Generates Left-to-Right Addition & Subtraction questions
 * - Handles Level 1 bridging vs. non-bridging rigorously
 * - Strictly guarantees non-negative results for subtraction drills
 */
export function generateAddSubQuestion(
  levelNumber: number = 2,
  options?: {
    forceBridging?: boolean;
    forceOperator?: '+' | '-';
  }
): Question {
  const isAddition = options?.forceOperator ? options.forceOperator === '+' : Math.random() > 0.45;
  let a = 0;
  let b = 0;
  let targetTime = 3.0;

  switch (levelNumber) {
    case 1: {
      // 2-digit ± 1-digit. a in [10, 99], b in [1, 9]
      targetTime = 1.8;
      const bridging = options?.forceBridging !== undefined ? options.forceBridging : Math.random() > 0.5;

      if (isAddition) {
        if (bridging) {
          // Bridging requires unitA + b >= 10. Since b in [1, 9], unitA must be in [1, 9]
          const unitA = randomInt(1, 9);
          const tensA = randomInt(1, 9) * 10;
          a = tensA + unitA; // [11, 99]
          b = randomInt(10 - unitA, 9); // b in [1, 9], unitA + b >= 10
        } else {
          // Non-bridging requires unitA + b < 10. Since b >= 1, unitA must be in [0, 8]
          const unitA = randomInt(0, 8);
          const tensA = randomInt(1, 9) * 10;
          a = tensA + unitA; // [10, 98]
          b = randomInt(1, 9 - unitA); // b in [1, 9 - unitA], unitA + b <= 9
        }
      } else {
        if (bridging) {
          // Subtraction bridging requires unitA - b < 0 (borrowing). Since b in [1, 9], unitA in [0, 8]
          const unitA = randomInt(0, 8);
          const tensA = randomInt(1, 9) * 10;
          a = tensA + unitA; // [10, 98]
          b = randomInt(unitA + 1, 9); // b in [unitA + 1, 9], unitA - b < 0
        } else {
          // Non-bridging requires unitA - b >= 0 (no borrowing). Since b >= 1, unitA must be in [1, 9]
          const unitA = randomInt(1, 9);
          const tensA = randomInt(1, 9) * 10;
          a = tensA + unitA; // [11, 99]
          b = randomInt(1, unitA); // b in [1, unitA], unitA - b >= 0
        }
      }
      break;
    }

    case 2: {
      targetTime = 2.5;
      a = randomInt(12, 99);
      b = randomInt(11, 99);
      break;
    }

    case 3: {
      targetTime = 3.2;
      a = randomInt(105, 995);
      b = randomInt(12, 99);
      break;
    }

    case 4: {
      targetTime = 4.5;
      a = randomInt(110, 990);
      b = randomInt(110, 990);
      break;
    }

    case 5: {
      targetTime = 6.0;
      a = randomInt(1100, 9900);
      b = Math.random() > 0.4 ? randomInt(120, 990) : randomInt(1100, 9900);
      break;
    }

    case 6:
    default: {
      targetTime = 8.0;
      a = randomInt(10500, 99500);
      b = randomInt(10500, 99500);
      break;
    }
  }

  // Ensure minuend > subtrahend so subtraction NEVER produces negative or zero results
  if (!isAddition) {
    if (a < b) {
      const temp = a;
      a = b;
      b = temp;
    } else if (a === b) {
      a += randomInt(1, 9);
    }
  }

  if (isAddition) {
    const sum = a + b;
    const { strategyTitle, steps, mentalTip } = getAdditionStrategy(a, b);
    return {
      id: `add_${a}_${b}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      module: 'add_sub',
      operandA: a,
      operandB: b,
      operator: '+',
      correctAnswer: sum,
      prompt: `${a} + ${b}`,
      strategyTitle,
      steps,
      mentalTip,
      targetTimeSeconds: targetTime,
      difficultyRating: levelNumber,
      subTrack: `level_${levelNumber}`,
    };
  } else {
    const diff = a - b;
    const { strategyTitle, steps, mentalTip } = getSubtractionStrategy(a, b);
    return {
      id: `sub_${a}_${b}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      module: 'add_sub',
      operandA: a,
      operandB: b,
      operator: '-',
      correctAnswer: diff,
      prompt: `${a} - ${b}`,
      strategyTitle,
      steps,
      mentalTip,
      targetTimeSeconds: targetTime,
      difficultyRating: levelNumber,
      subTrack: `level_${levelNumber}`,
    };
  }
}

/**
 * Detailed combinations for 2-digit, 3-digit, 4-digit addition and subtraction.
 * Perfectly handles:
 * - 2-digit ± 1-digit
 * - 2-digit ± 2-digit
 * - 3-digit ± 1-digit
 * - 3-digit ± 2-digit
 * - 3-digit ± 3-digit
 * - 4-digit ± 2-digit
 * - 4-digit ± 3-digit
 * - 4-digit ± 4-digit
 * - 3-number chain
 */
export function generateArithmeticComboQuestion(
  combo: ArithmeticCombination,
  options?: {
    forceOperator?: '+' | '-';
    forceBridging?: boolean;
  }
): Question {
  const isAddition = options?.forceOperator ? options.forceOperator === '+' : Math.random() > 0.45;
  let a = 0;
  let b = 0;
  let targetTime = 3.0;

  switch (combo) {
    case 'add_sub_2d_1d': {
      targetTime = 1.8;
      const bridging = options?.forceBridging !== undefined ? options.forceBridging : Math.random() > 0.5;
      if (isAddition) {
        if (bridging) {
          const unitA = randomInt(1, 9);
          const tensA = randomInt(1, 9) * 10;
          a = tensA + unitA;
          b = randomInt(10 - unitA, 9);
        } else {
          const unitA = randomInt(0, 8);
          const tensA = randomInt(1, 9) * 10;
          a = tensA + unitA;
          b = randomInt(1, 9 - unitA);
        }
      } else {
        if (bridging) {
          const unitA = randomInt(0, 8);
          const tensA = randomInt(1, 9) * 10;
          a = tensA + unitA;
          b = randomInt(unitA + 1, 9);
        } else {
          const unitA = randomInt(1, 9);
          const tensA = randomInt(1, 9) * 10;
          a = tensA + unitA;
          b = randomInt(1, unitA);
        }
      }
      break;
    }

    case 'add_sub_2d_2d': {
      targetTime = 2.5;
      a = randomInt(11, 99);
      b = randomInt(11, 99);
      break;
    }

    case 'add_sub_3d_1d': {
      targetTime = 2.2;
      a = randomInt(101, 999);
      b = randomInt(1, 9);
      break;
    }

    case 'add_sub_3d_2d': {
      targetTime = 3.2;
      a = randomInt(101, 999);
      b = randomInt(11, 99);
      break;
    }

    case 'add_sub_3d_3d': {
      targetTime = 4.2;
      a = randomInt(101, 999);
      b = randomInt(101, 999);
      break;
    }

    case 'add_sub_4d_2d': {
      targetTime = 4.0;
      a = randomInt(1001, 9999);
      b = randomInt(11, 99);
      break;
    }

    case 'add_sub_4d_3d': {
      targetTime = 5.0;
      a = randomInt(1001, 9999);
      b = randomInt(101, 999);
      break;
    }

    case 'add_sub_4d_4d': {
      targetTime = 6.0;
      a = randomInt(1001, 9999);
      b = randomInt(1001, 9999);
      break;
    }

    case 'add_sub_chain_3': {
      targetTime = 4.5;
      const n1 = randomInt(15, 60);
      const n2 = randomInt(15, 50);
      const n3 = randomInt(10, Math.min(40, n1 + n2 - 5));
      const isMinus = Math.random() > 0.5;
      const ans = isMinus ? n1 + n2 - n3 : n1 + n2 + n3;
      const op2 = isMinus ? '-' : '+';
      const promptStr = `${n1} + ${n2} ${op2} ${n3}`;

      return {
        id: `chain_${n1}_${n2}_${n3}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        module: 'add_sub',
        operandA: n1,
        operandB: n2,
        operator: '+',
        correctAnswer: ans,
        prompt: promptStr,
        strategyTitle: '3-Number Chain Accumulator',
        steps: [
          {
            stepNumber: 1,
            title: `Step 1: ${n1} + ${n2}`,
            subVocalization: `Running sum: ${n1 + n2}`,
            intermediateValue: n1 + n2,
            explanation: `Accumulate first pair: ${n1} + ${n2} = ${n1 + n2}.`,
          },
          {
            stepNumber: 2,
            title: `Step 2: ${n1 + n2} ${op2} ${n3}`,
            subVocalization: `Final: ${ans}`,
            intermediateValue: ans,
            explanation: `Apply final term: ${n1 + n2} ${op2} ${n3} = ${ans}.`,
          },
        ],
        mentalTip: 'Hold the intermediate accumulator in working memory before adjusting the final term.',
        targetTimeSeconds: targetTime,
        difficultyRating: 4,
        subTrack: 'chain_3',
      };
    }
  }

  // Ensure minuend > subtrahend so subtraction NEVER produces negative or zero results
  if (!isAddition) {
    if (a < b) {
      const temp = a;
      a = b;
      b = temp;
    } else if (a === b) {
      a += randomInt(1, 9);
    }
  }

  if (isAddition) {
    const sum = a + b;
    const { strategyTitle, steps, mentalTip } = getAdditionStrategy(a, b);
    return {
      id: `add_${combo}_${a}_${b}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      module: 'add_sub',
      operandA: a,
      operandB: b,
      operator: '+',
      correctAnswer: sum,
      prompt: `${a} + ${b}`,
      strategyTitle,
      steps,
      mentalTip,
      targetTimeSeconds: targetTime,
      difficultyRating: combo === 'add_sub_2d_1d' ? 1 : combo === 'add_sub_2d_2d' ? 2 : combo === 'add_sub_3d_3d' ? 4 : 5,
      subTrack: combo,
    };
  } else {
    const diff = a - b;
    const { strategyTitle, steps, mentalTip } = getSubtractionStrategy(a, b);
    return {
      id: `sub_${combo}_${a}_${b}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      module: 'add_sub',
      operandA: a,
      operandB: b,
      operator: '-',
      correctAnswer: diff,
      prompt: `${a} - ${b}`,
      strategyTitle,
      steps,
      mentalTip,
      targetTimeSeconds: targetTime,
      difficultyRating: combo === 'add_sub_2d_1d' ? 1 : combo === 'add_sub_2d_2d' ? 2 : combo === 'add_sub_3d_3d' ? 4 : 5,
      subTrack: combo,
    };
  }
}

/**
 * Generates custom square question for any range [min, max].
 */
export function generateCustomSquareQuestion(min: number = 1, max: number = 100): Question {
  const n = randomInt(Math.max(1, min), Math.min(100, max));
  const { strategyTitle, steps, mentalTip } = getSquareStrategy(n);
  const targetTime = n <= 25 ? 1.8 : n <= 50 ? 2.5 : 3.5;
  return {
    id: `sq_custom_${n}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    module: 'squares_cubes',
    operandA: n,
    operandB: 2,
    operator: '^2',
    correctAnswer: n * n,
    prompt: `${n}²`,
    strategyTitle,
    steps,
    mentalTip,
    targetTimeSeconds: targetTime,
    difficultyRating: n <= 25 ? 2 : n <= 50 ? 4 : 6,
    subTrack: 'general_duplex',
    factKey: `square:${n}`,
  };
}

/**
 * Generates custom cube question for any range [min, max].
 */
export function generateCustomCubeQuestion(min: number = 1, max: number = 30): Question {
  const n = randomInt(Math.max(1, min), Math.min(100, max));
  const { strategyTitle, steps, mentalTip } = getCubeStrategy(n);
  const targetTime = n <= 10 ? 2.0 : n <= 20 ? 3.5 : 5.0;
  return {
    id: `cube_custom_${n}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    module: 'squares_cubes',
    operandA: n,
    operandB: 3,
    operator: '^3',
    correctAnswer: n * n * n,
    prompt: `${n}³`,
    strategyTitle,
    steps,
    mentalTip,
    targetTimeSeconds: targetTime,
    difficultyRating: n <= 10 ? 3 : n <= 20 ? 5 : 8,
    subTrack: 'cubes_anchor',
    factKey: `cube:${n}`,
  };
}

/**
 * Module B: Generates Multiplication Table questions (Tables 1 to 100)
 * Supports level-aware operand scaling and strict single-digit anti-repetition guard.
 */
export function generateMultiplicationQuestion(
  targetTable?: number,
  targetMultiplier?: number,
  options?: {
    forbidSingleDigit?: boolean;
    userLevel?: number;
  }
): Question {
  const isHighLevel = (options?.userLevel || 1) >= 15;

  let table =
    targetTable && targetTable >= 1 && targetTable <= 100
      ? targetTable
      : isHighLevel
      ? Math.random() > 0.4
        ? randomInt(16, 29)
        : randomInt(31, 99)
      : Math.random() > 0.55
      ? randomInt(2, 20)
      : randomInt(21, 100);

  let multiplier =
    targetMultiplier && targetMultiplier >= 1 && targetMultiplier <= 20
      ? targetMultiplier
      : isHighLevel
      ? randomInt(7, 20)
      : randomInt(1, 20);

  // Single-digit anti-repetition guard:
  // If single digit is forbidden OR high-level user is practicing a table < 10 (e.g. Table 7),
  // force the multiplier to be a double-digit challenge (11 to 20)!
  if (options?.forbidSingleDigit || (isHighLevel && table < 10)) {
    if (multiplier < 10) {
      multiplier = randomInt(11, 20);
    }
  } else if (table < 10 && multiplier < 10 && isHighLevel) {
    multiplier = randomInt(11, 20);
  }

  const product = table * multiplier;
  const { strategyTitle, steps, mentalTip } = getMultiplicationStrategy(table, multiplier);

  // Target time based on documented pedagogy tiers
  const targetTime = table <= 12 ? 1.5 : table <= 20 ? 2.2 : table <= 50 ? 3.5 : 4.5;
  const difficulty = table <= 12 ? 2 : table <= 20 ? 4 : table <= 50 ? 7 : 9;

  return {
    id: `mul_${table}_${multiplier}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    module: 'multiplication',
    operandA: table,
    operandB: multiplier,
    operator: '×',
    correctAnswer: product,
    prompt: `${table} × ${multiplier}`,
    strategyTitle,
    steps,
    mentalTip,
    targetTimeSeconds: targetTime,
    difficultyRating: difficulty,
    subTrack: `table_${table}`,
  };
}

/**
 * Advanced Module: Generates 2-digit × 2-digit speed multiplication questions (e.g. 24 × 18, 36 × 25)
 * Solved via Vedic Criss-Cross (Urdhva Tiryagbhyam) or Base Method.
 */
export function generateTwoDigitMultiplicationQuestion(minVal: number = 14, maxVal: number = 99): Question {
  const a = randomInt(minVal, maxVal);
  const b = randomInt(minVal, maxVal);
  const product = a * b;
  const { strategyTitle, steps, mentalTip } = getMultiplicationStrategy(a, b);

  return {
    id: `mul_2d_${a}_${b}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    module: 'multiplication',
    operandA: a,
    operandB: b,
    operator: '×',
    correctAnswer: product,
    prompt: `${a} × ${b}`,
    strategyTitle: strategyTitle || 'Vedic Criss-Cross Multiplication',
    steps,
    mentalTip: mentalTip || 'Multiply units, cross-multiply diagonals and add, multiply tens.',
    targetTimeSeconds: 5.0,
    difficultyRating: 8,
    subTrack: 'two_digit_mult',
  };
}

export type SquareCubeSubTrack =
  | 'ending_5'
  | 'near_50'
  | 'near_100'
  | 'general_duplex'
  | 'cubes_anchor'
  | 'cubes_advanced';

/**
 * Module C: Generates Squares & Cubes questions (1 to 100)
 * Fully supports cubes from 1 through 100 with difficulty calibration.
 */
export function generateSquareCubeQuestion(
  subTrack?: SquareCubeSubTrack,
  specificOperand?: number
): Question {
  const tracks: SquareCubeSubTrack[] = [
    'ending_5',
    'near_50',
    'near_100',
    'general_duplex',
    'cubes_anchor',
    'cubes_advanced',
  ];
  const selectedTrack = subTrack || tracks[Math.floor(Math.random() * tracks.length)];

  switch (selectedTrack) {
    case 'ending_5': {
      // 5, 15, 25, 35, 45, 55, 65, 75, 85, 95
      const n =
        specificOperand !== undefined && specificOperand % 10 === 5
          ? specificOperand
          : randomInt(1, 9) * 10 + 5;
      const { strategyTitle, steps, mentalTip } = getSquareStrategy(n);
      return {
        id: `sq_end5_${n}_${Date.now()}`,
        module: 'squares_cubes',
        operandA: n,
        operandB: 2,
        operator: '^2',
        correctAnswer: n * n,
        prompt: `${n}²`,
        strategyTitle,
        steps,
        mentalTip,
        targetTimeSeconds: 2.0,
        difficultyRating: 3,
        subTrack: 'ending_5',
      };
    }
    case 'near_50': {
      // 41 to 59 excluding 50
      let n = specificOperand !== undefined ? specificOperand : randomInt(41, 59);
      if (n === 50) n = 51;
      const { strategyTitle, steps, mentalTip } = getSquareStrategy(n);
      return {
        id: `sq_near50_${n}_${Date.now()}`,
        module: 'squares_cubes',
        operandA: n,
        operandB: 2,
        operator: '^2',
        correctAnswer: n * n,
        prompt: `${n}²`,
        strategyTitle,
        steps,
        mentalTip,
        targetTimeSeconds: 2.8,
        difficultyRating: 4,
        subTrack: 'near_50',
      };
    }
    case 'near_100': {
      // 81 to 99
      const n = specificOperand !== undefined ? specificOperand : randomInt(81, 99);
      const { strategyTitle, steps, mentalTip } = getSquareStrategy(n);
      return {
        id: `sq_near100_${n}_${Date.now()}`,
        module: 'squares_cubes',
        operandA: n,
        operandB: 2,
        operator: '^2',
        correctAnswer: n * n,
        prompt: `${n}²`,
        strategyTitle,
        steps,
        mentalTip,
        targetTimeSeconds: 3.0,
        difficultyRating: 5,
        subTrack: 'near_100',
      };
    }
    case 'general_duplex': {
      // Any 2-digit number 11 to 99
      const n = specificOperand !== undefined ? specificOperand : randomInt(12, 98);
      const { strategyTitle, steps, mentalTip } = getSquareStrategy(n);
      return {
        id: `sq_duplex_${n}_${Date.now()}`,
        module: 'squares_cubes',
        operandA: n,
        operandB: 2,
        operator: '^2',
        correctAnswer: n * n,
        prompt: `${n}²`,
        strategyTitle,
        steps,
        mentalTip,
        targetTimeSeconds: 4.5,
        difficultyRating: 6,
        subTrack: 'general_duplex',
      };
    }
    case 'cubes_anchor': {
      // Cubes 1 to 20
      const n = specificOperand !== undefined ? specificOperand : randomInt(1, 20);
      const { strategyTitle, steps, mentalTip } = getCubeStrategy(n);
      return {
        id: `cube_anchor_${n}_${Date.now()}`,
        module: 'squares_cubes',
        operandA: n,
        operandB: 3,
        operator: '^3',
        correctAnswer: n * n * n,
        prompt: `${n}³`,
        strategyTitle,
        steps,
        mentalTip,
        targetTimeSeconds: 2.0,
        difficultyRating: 4,
        subTrack: 'cubes_anchor',
      };
    }
    case 'cubes_advanced':
    default: {
      // Cubes 21 to 100
      const n = specificOperand !== undefined ? specificOperand : randomInt(21, 100);
      const { strategyTitle, steps, mentalTip } = getCubeStrategy(n);
      const targetTime = n <= 30 ? 5.0 : n <= 60 ? 6.5 : 8.0;
      const difficulty = n <= 30 ? 7 : n <= 60 ? 8 : 10;
      return {
        id: `cube_adv_${n}_${Date.now()}`,
        module: 'squares_cubes',
        operandA: n,
        operandB: 3,
        operator: '^3',
        correctAnswer: n * n * n,
        prompt: `${n}³`,
        strategyTitle,
        steps,
        mentalTip,
        targetTimeSeconds: targetTime,
        difficultyRating: difficulty,
        subTrack: 'cubes_advanced',
      };
    }
  }
}

/**
 * Cognitive Working Memory / Anzan Sequence Generator
 * - Accurately models sequential mental accumulator hold.
 * - Supports optional negative numbers without ever allowing intermediate accumulator to fall below zero.
 */
export function generateAnzanSequence(config: AnzanConfig): AnzanSequence {
  const { count, digits, intervalMs, allowNegatives } = config;
  const numbers: number[] = [];

  const min = digits === 1 ? 1 : digits === 2 ? 10 : 100;
  const max = digits === 1 ? 9 : digits === 2 ? 99 : 999;

  // First number is always positive
  const first = randomInt(min, max);
  numbers.push(first);
  let runningSum = first;

  for (let i = 1; i < count; i++) {
    const shouldBeNegative = allowNegatives && Math.random() < 0.35;
    if (shouldBeNegative) {
      // Max possible subtraction must leave runningSum >= 1
      const maxSub = Math.min(max, runningSum - 1);
      if (maxSub >= min) {
        const subVal = randomInt(min, maxSub);
        numbers.push(-subVal);
        runningSum -= subVal;
      } else {
        const addVal = randomInt(min, max);
        numbers.push(addVal);
        runningSum += addVal;
      }
    } else {
      const addVal = randomInt(min, max);
      numbers.push(addVal);
      runningSum += addVal;
    }
  }

  return {
    id: `anzan_${Date.now()}_${count}_${digits}`,
    numbers,
    expectedSum: runningSum,
    intervalMs,
    digits,
    allowNegatives: !!allowNegatives,
  };
}
