/**
 * Mathematical tables data generators for Mentalis Table Charts.
 * Provides high-precision calculation, perfect root classification,
 * mental math pattern indicators, and fast lookup structures.
 */

export interface MultipleItem {
  multiplier: number;
  result: number;
}

export interface SquareItem {
  n: number;
  square: number;
  isEndingIn5: boolean;
  isDecade: boolean;
  mentalTip?: string;
}

export interface CubeItem {
  n: number;
  cube: number;
  formattedCube: string;
  unitDigit: number;
  lastDigitPatternTip?: string;
}

export interface SquareRootItem {
  n: number;
  root: number;
  formattedRoot: string;
  isPerfect: boolean;
  integerRoot?: number;
}

export interface CubeRootItem {
  n: number;
  root: number;
  formattedRoot: string;
  isPerfect: boolean;
  integerRoot?: number;
}

/**
 * Generate multiplication table for `n` up to `maxMultiple` (default 20).
 */
export function getMultiplicationTable(n: number, maxMultiple: number = 20): MultipleItem[] {
  const safeN = Math.max(1, Math.min(100, Math.round(n)));
  const items: MultipleItem[] = [];
  for (let i = 1; i <= maxMultiple; i++) {
    items.push({
      multiplier: i,
      result: safeN * i,
    });
  }
  return items;
}

/**
 * Generate squares table from 1 up to `max` (default 100).
 */
export function getSquaresTable(max: number = 100): SquareItem[] {
  const items: SquareItem[] = [];
  for (let i = 1; i <= max; i++) {
    const isEndingIn5 = i % 10 === 5;
    const isDecade = i % 10 === 0;
    let tip: string | undefined;

    if (isEndingIn5) {
      const ten = Math.floor(i / 10);
      tip = `${ten} × ${ten + 1} = ${ten * (ten + 1)} followed by 25 → ${ten * (ten + 1)}25`;
    } else if (isDecade) {
      const ten = i / 10;
      tip = `${ten}² × 100 = ${ten * ten * 100}`;
    }

    items.push({
      n: i,
      square: i * i,
      isEndingIn5,
      isDecade,
      mentalTip: tip,
    });
  }
  return items;
}

/**
 * Generate cubes table from 1 up to `max` (default 100).
 */
export function getCubesTable(max: number = 100): CubeItem[] {
  const items: CubeItem[] = [];
  for (let i = 1; i <= max; i++) {
    const cube = i * i * i;
    const unitDigit = cube % 10;
    let tip: string | undefined;

    // Unit digit recurrence tips
    if ([0, 1, 4, 5, 6, 9].includes(i % 10)) {
      tip = `Unit digit preserves: ${i % 10}³ ends in ${unitDigit}`;
    } else if (i % 10 === 2) {
      tip = 'Vedic complement pair: 2³ ends in 8';
    } else if (i % 10 === 8) {
      tip = 'Vedic complement pair: 8³ ends in 2';
    } else if (i % 10 === 3) {
      tip = 'Vedic complement pair: 3³ ends in 7';
    } else if (i % 10 === 7) {
      tip = 'Vedic complement pair: 7³ ends in 3';
    }

    items.push({
      n: i,
      cube,
      formattedCube: cube.toLocaleString(),
      unitDigit,
      lastDigitPatternTip: tip,
    });
  }
  return items;
}

/**
 * Generate square roots table from 1 up to `max` (default 100).
 */
export function getSquareRootTable(max: number = 100, precision: number = 5): SquareRootItem[] {
  const items: SquareRootItem[] = [];
  for (let i = 1; i <= max; i++) {
    const root = Math.sqrt(i);
    const roundedInt = Math.round(root);
    const isPerfect = roundedInt * roundedInt === i;

    items.push({
      n: i,
      root,
      formattedRoot: isPerfect ? roundedInt.toString() : root.toFixed(precision),
      isPerfect,
      integerRoot: isPerfect ? roundedInt : undefined,
    });
  }
  return items;
}

/**
 * Generate cube roots table from 1 up to `max` (default 100).
 */
export function getCubeRootTable(max: number = 100, precision: number = 5): CubeRootItem[] {
  const items: CubeRootItem[] = [];
  for (let i = 1; i <= max; i++) {
    const root = Math.cbrt(i);
    const roundedInt = Math.round(root);
    const isPerfect = roundedInt * roundedInt * roundedInt === i;

    items.push({
      n: i,
      root,
      formattedRoot: isPerfect ? roundedInt.toString() : root.toFixed(precision),
      isPerfect,
      integerRoot: isPerfect ? roundedInt : undefined,
    });
  }
  return items;
}
