/**
 * Fact-Level Question Factory for Mentalis
 * Converts any canonical FactKey into a rich, interactive Question with
 * mathematically verified strategy steps and appropriate difficulty ratings.
 */

import { Question } from './types';
import { FactKey, parseFactKey, getFactCorrectAnswer } from './factModel';
import { getBestStrategyForFact } from './strategyCatalog';
import { generateAddSubQuestion } from './calcEngine';

export function generateQuestionFromFact(
  factKey: FactKey,
  targetTimeSecondsOverride?: number
): Question {
  const parsed = parseFactKey(factKey);
  if (!parsed.isValid) {
    return generateAddSubQuestion(2);
  }

  if (parsed.type === 'add_sub') {
    return generateAddSubQuestion(parsed.operandA);
  }

  const strategy = getBestStrategyForFact(factKey);
  const correctAnswer = getFactCorrectAnswer(factKey);

  if (parsed.type === 'multiplication') {
    const table = parsed.operandA;
    const mult = parsed.operandB || 1;
    const { strategyTitle, steps, mentalTip } = strategy.generateWorkedExample(table, mult);

    const targetTime = targetTimeSecondsOverride || (
      table <= 12 && mult <= 12 ? 1.5 :
      table <= 20 ? 2.5 :
      table <= 50 ? 3.5 : 4.5
    );

    const difficulty = (
      table <= 12 && mult <= 12 ? 2 :
      table <= 20 ? 4 :
      table <= 50 ? 7 : 9
    );

    return {
      id: `q_${factKey.replace(/:/g, '_')}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      module: 'multiplication',
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

  if (parsed.type === 'square') {
    const n = parsed.operandA;
    const { strategyTitle, steps, mentalTip } = strategy.generateWorkedExample(n);

    const targetTime = targetTimeSecondsOverride || (
      n <= 20 ? 1.8 :
      n % 10 === 5 || (n >= 40 && n <= 60) ? 2.8 : 4.0
    );

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

  if (parsed.type === 'cube') {
    const n = parsed.operandA;
    const { strategyTitle, steps, mentalTip } = strategy.generateWorkedExample(n);

    const targetTime = targetTimeSecondsOverride || (n <= 12 ? 2.0 : n % 10 === 0 ? 2.5 : 5.0);
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
  module: 'multiplication' | 'squares_cubes' | 'add_sub',
  activeTable?: number,
  activeSquareTrack?: string
): FactKey[] {
  if (module === 'multiplication') {
    const table = activeTable && activeTable >= 1 && activeTable <= 100 ? activeTable : 7;
    const keys: FactKey[] = [];
    for (let m = 1; m <= 20; m++) {
      keys.push(`mul:${table}:${m}`);
    }
    return keys;
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
      // General squares 1-50
      for (let i = 1; i <= 50; i++) keys.push(`square:${i}`);
    }
    return keys;
  }

  return ['add_sub:level_2'];
}
