/**
 * Algorithmic Question Generation Engine for Mentalis
 * Pure functions: Deterministic or randomized mathematical generation with zero side-effects.
 */

import { Question, AnzanSequence, AnzanConfig, LevelDefinition } from './types';
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
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Curated Level Definitions for Progressive Addition & Subtraction
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
 */
export function generateAddSubQuestion(levelNumber: number = 2): Question {
  const isAddition = Math.random() > 0.45; // 55% addition, 45% subtraction
  let a = 0;
  let b = 0;
  let targetTime = 3.0;

  switch (levelNumber) {
    case 1: {
      targetTime = 1.8;
      a = randomInt(11, 98);
      // 50% chance of non-bridging, 50% bridging
      const bridging = Math.random() > 0.5;
      const unitA = a % 10;
      if (isAddition) {
        b = bridging ? randomInt(10 - unitA, 9) : randomInt(1, Math.max(1, 9 - unitA));
      } else {
        b = bridging ? randomInt(unitA + 1, 9) : randomInt(1, Math.max(1, unitA));
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
      b = randomInt(12, 98);
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
      b = Math.random() > 0.5 ? randomInt(120, 990) : randomInt(1100, 9900);
      break;
    }
    case 6: // Master
    default: {
      targetTime = 8.0;
      a = randomInt(10500, 99500);
      b = randomInt(10500, 99500);
      break;
    }
  }

  // Ensure minuend >= subtrahend for clean subtraction drills
  if (!isAddition && a < b) {
    const temp = a;
    a = b;
    b = temp;
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
    };
  }
}

/**
 * Module B: Generates Multiplication Table questions (Tables 1 to 100)
 */
export function generateMultiplicationQuestion(targetTable?: number): Question {
  // If targetTable is provided, generate a question for that specific table.
  // Otherwise pick a random table weighted towards practical mastery.
  const table = targetTable && targetTable >= 2 && targetTable <= 100
    ? targetTable
    : Math.random() > 0.6
    ? randomInt(2, 20)
    : randomInt(21, 99);

  const multiplier = randomInt(2, 12);
  const product = table * multiplier;
  const { strategyTitle, steps, mentalTip } = getMultiplicationStrategy(table, multiplier);

  // Target time based on table tier
  const targetTime = table <= 12 ? 1.5 : table <= 20 ? 2.2 : table <= 50 ? 3.5 : 4.5;
  const difficulty = table <= 12 ? 1 : table <= 20 ? 3 : table <= 50 ? 6 : 8;

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
 */
export function generateSquareCubeQuestion(subTrack?: SquareCubeSubTrack): Question {
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
      const n = randomInt(1, 9) * 10 + 5;
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
      };
    }
    case 'near_50': {
      // 41 to 59 excluding 50
      let n = randomInt(41, 59);
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
      };
    }
    case 'near_100': {
      // 81 to 99
      const n = randomInt(81, 99);
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
      };
    }
    case 'general_duplex': {
      // Any 2-digit number 11 to 99
      const n = randomInt(12, 98);
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
      };
    }
    case 'cubes_anchor': {
      // Cubes 1 to 20
      const n = randomInt(2, 20);
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
        targetTimeSeconds: 2.5,
        difficultyRating: 4,
      };
    }
    case 'cubes_advanced':
    default: {
      // Cubes 21 to 99
      const n = randomInt(21, 50); // Keep in reachable cognitive range
      const { strategyTitle, steps, mentalTip } = getCubeStrategy(n);
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
        targetTimeSeconds: 6.5,
        difficultyRating: 9,
      };
    }
  }
}

/**
 * Cognitive Working Memory / Anzan Sequence Generator
 */
export function generateAnzanSequence(config: AnzanConfig): AnzanSequence {
  const { count, digits, intervalMs } = config;
  const numbers: number[] = [];
  let expectedSum = 0;

  const min = digits === 1 ? 1 : digits === 2 ? 10 : 100;
  const max = digits === 1 ? 9 : digits === 2 ? 99 : 999;

  for (let i = 0; i < count; i++) {
    const num = randomInt(min, max);
    numbers.push(num);
    expectedSum += num;
  }

  return {
    id: `anzan_${Date.now()}_${count}_${digits}`,
    numbers,
    expectedSum,
    intervalMs,
    digits,
  };
}
