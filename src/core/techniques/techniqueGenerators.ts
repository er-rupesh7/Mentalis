/**
 * Pure Procedural Generators for Mental Math Techniques
 * Strictly deterministic algorithms enforcing exact mathematical preconditions.
 * ZERO hardcoded question banks. Supports dynamic difficulty tiers L1 to L5.
 */

import {
  CalculationTechniqueId,
  GeneratedTechniqueProblem,
  GuidedStep,
  Operator,
} from '../types';

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateTechniqueProblem(
  techniqueId: CalculationTechniqueId,
  difficultyLevel: 1 | 2 | 3 | 4 | 5 = 2
): GeneratedTechniqueProblem {
  const id = `prob_${techniqueId}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  switch (techniqueId) {
    // -------------------------------------------------------------
    // MODULE 1: FUNDAMENTAL OPERATIONS
    // -------------------------------------------------------------
    case 'add_l2r_place_value': {
      let a: number, b: number;
      if (difficultyLevel === 1) {
        a = randomInt(20, 99);
        b = randomInt(11, 99);
      } else if (difficultyLevel <= 3) {
        a = randomInt(100, 999);
        b = randomInt(100, 999);
      } else if (difficultyLevel === 4) {
        a = randomInt(1000, 9999);
        b = randomInt(1000, 9999);
      } else {
        a = randomInt(10000, 99999);
        b = randomInt(10000, 99999);
      }

      const sum = a + b;
      const strA = a.toString();
      const strB = b.toString();
      const maxLen = Math.max(strA.length, strB.length);
      const padA = strA.padStart(maxLen, '0');
      const padB = strB.padStart(maxLen, '0');

      let accum = 0;
      const steps: GuidedStep[] = [];
      const accumGhostParts: string[] = [];

      for (let i = 0; i < maxLen; i++) {
        const p = Math.pow(10, maxLen - 1 - i);
        const dA = parseInt(padA[i], 10);
        const dB = parseInt(padB[i], 10);
        const part = (dA + dB) * p;
        accum += part;
        accumGhostParts.push(`${accum}`);
        steps.push({
          stepIndex: i + 1,
          prompt: `Add place ${dA * p} + ${dB * p}`,
          expectedValue: accum,
          subVocalization: `Hold: "${accum}"`,
          explanation: `Running accumulator is ${accum}`,
        });
      }

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: b,
        operator: '+',
        prompt: `${a} + ${b}`,
        correctAnswer: sum,
        ghostAccumulator: accumGhostParts.join(' -> '),
        mentalTip: 'Accumulate left-to-right into your auditory loop. Never carry right-to-left.',
        steps,
      };
    }

    case 'add_bridging_base10': {
      const tensA = randomInt(2, 8) * 10;
      const unitA = randomInt(6, 9);
      const a = tensA + unitA;
      const unitB = randomInt(10 - unitA + 1, 9);
      const tensB = difficultyLevel > 1 ? randomInt(1, 5) * 10 : 0;
      const b = tensB + unitB;

      const sum = a + b;
      const intermediateTens = a + tensB;
      const neededForDecade = 10 - unitA;
      const decadeAnchor = intermediateTens + neededForDecade;
      const remainingUnits = unitB - neededForDecade;

      const steps: GuidedStep[] = [
        {
          stepIndex: 1,
          prompt: `Bridge ${intermediateTens} to decade (+${neededForDecade})`,
          expectedValue: decadeAnchor,
          subVocalization: `Snap: "${decadeAnchor}"`,
          explanation: `${intermediateTens} + ${neededForDecade} reaches ${decadeAnchor}`,
        },
        {
          stepIndex: 2,
          prompt: `Add remaining units (${decadeAnchor} + ${remainingUnits})`,
          expectedValue: sum,
          subVocalization: `Resolve: "${sum}"`,
          explanation: `${decadeAnchor} + ${remainingUnits} = ${sum}`,
        },
      ];

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: b,
        operator: '+',
        prompt: `${a} + ${b}`,
        correctAnswer: sum,
        ghostAccumulator: `${a} + ${neededForDecade} = ${decadeAnchor} -> + ${remainingUnits} = ${sum}`,
        mentalTip: 'Hop to the clean decade anchor first, then add the residual units.',
        steps,
      };
    }

    case 'add_compensation': {
      const a = randomInt(120, 850);
      const deficit = randomChoice([1, 2, 3]);
      const roundedBase = randomChoice([50, 100, 200]);
      const b = roundedBase - deficit;
      const sum = a + b;
      const intermediateSum = a + roundedBase;

      const steps: GuidedStep[] = [
        {
          stepIndex: 1,
          prompt: `Add rounded base ${a} + ${roundedBase}`,
          expectedValue: intermediateSum,
          subVocalization: `Hold: "${intermediateSum}"`,
          explanation: `Overshot by +${deficit}`,
        },
        {
          stepIndex: 2,
          prompt: `Refund deficit ${intermediateSum} - ${deficit}`,
          expectedValue: sum,
          subVocalization: `Resolve: "${sum}"`,
          explanation: `${intermediateSum} - ${deficit} = ${sum}`,
        },
      ];

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: b,
        operator: '+',
        prompt: `${a} + ${b}`,
        correctAnswer: sum,
        ghostAccumulator: `+${roundedBase} = ${intermediateSum} -> -${deficit} = ${sum}`,
        mentalTip: `Add clean ${roundedBase}, then refund the ${deficit}.`,
        steps,
      };
    }

    case 'sub_l2r_step': {
      const a = randomInt(45, 98);
      const b = randomInt(14, a - 5);
      const diff = a - b;
      const tensB = Math.floor(b / 10) * 10;
      const unitsB = b % 10;
      const step1 = a - tensB;

      const steps: GuidedStep[] = [
        {
          stepIndex: 1,
          prompt: `Subtract tens chunk ${a} - ${tensB}`,
          expectedValue: step1,
          subVocalization: `Hold: "${step1}"`,
          explanation: `${a} - ${tensB} = ${step1}`,
        },
        {
          stepIndex: 2,
          prompt: `Subtract units ${step1} - ${unitsB}`,
          expectedValue: diff,
          subVocalization: `Resolve: "${diff}"`,
          explanation: `${step1} - ${unitsB} = ${diff}`,
        },
      ];

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: b,
        operator: '-',
        prompt: `${a} - ${b}`,
        correctAnswer: diff,
        ghostAccumulator: `${a} - ${tensB} = ${step1} -> - ${unitsB} = ${diff}`,
        mentalTip: 'Strip tens first, then subtract remaining units.',
        steps,
      };
    }

    case 'sub_shopkeeper_count_up': {
      const anchor = difficultyLevel <= 2 ? 100 : 1000;
      const subtrahend =
        anchor === 100 ? randomInt(23, 87) : randomInt(245, 876);
      const diff = anchor - subtrahend;
      const nextDecade = Math.ceil(subtrahend / 10) * 10;
      const hop1 = nextDecade - subtrahend;
      const hop2 = anchor - nextDecade;

      const steps: GuidedStep[] = [
        {
          stepIndex: 1,
          prompt: `Hop from ${subtrahend} to decade ${nextDecade}`,
          expectedValue: hop1,
          subVocalization: `Tally 1: "+${hop1}"`,
          explanation: `${subtrahend} + ${hop1} = ${nextDecade}`,
        },
        {
          stepIndex: 2,
          prompt: `Hop from ${nextDecade} to target ${anchor}`,
          expectedValue: hop2,
          subVocalization: `Tally 2: "+${hop2}"`,
          explanation: `${nextDecade} + ${hop2} = ${anchor}`,
        },
        {
          stepIndex: 3,
          prompt: `Combine hops: ${hop1} + ${hop2}`,
          expectedValue: diff,
          subVocalization: `Resolve: "${diff}"`,
          explanation: `Total difference is ${diff}`,
        },
      ];

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: anchor,
        operandB: subtrahend,
        operator: '-',
        prompt: `${anchor} - ${subtrahend}`,
        correctAnswer: diff,
        ghostAccumulator: `${subtrahend} -> (+${hop1}) -> ${nextDecade} -> (+${hop2}) -> ${anchor} => ${diff}`,
        mentalTip: 'Count up forward like making change at a cash till.',
        steps,
      };
    }

    case 'sub_nikhilam_all_from_9': {
      const power = difficultyLevel <= 2 ? 3 : difficultyLevel <= 4 ? 4 : 5;
      const anchor = Math.pow(10, power);
      const minSub = Math.pow(10, power - 1) + 12;
      const maxSub = anchor - 15;
      let subtrahend = randomInt(minSub, maxSub);
      if (subtrahend % 10 === 0) subtrahend += randomInt(1, 9);

      const diff = anchor - subtrahend;
      const subStr = subtrahend.toString().padStart(power, '0');
      const ghostDigits: string[] = [];

      for (let i = 0; i < power - 1; i++) {
        ghostDigits.push(`${9 - parseInt(subStr[i], 10)}`);
      }
      ghostDigits.push(`${10 - parseInt(subStr[power - 1], 10)}`);

      const steps: GuidedStep[] = [
        {
          stepIndex: 1,
          prompt: `Subtract all leading digits from 9 and last digit from 10`,
          expectedValue: diff,
          subVocalization: `Direct sweep: "${diff}"`,
          explanation: `All from 9, last from 10 yields ${diff}`,
        },
      ];

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: anchor,
        operandB: subtrahend,
        operator: '-',
        prompt: `${anchor} - ${subtrahend}`,
        correctAnswer: diff,
        ghostAccumulator: `All from 9, Last from 10: [${ghostDigits.join('')}] = ${diff}`,
        mentalTip: 'Subtract every digit from 9, and the final unit digit from 10.',
        steps,
      };
    }

    // -------------------------------------------------------------
    // MODULE 2: MULTIPLICATION TECHNIQUES
    // -------------------------------------------------------------
    case 'mult_power10_5': {
      const a = randomInt(14, 98);
      const prod = a * 5;
      const half = a / 2;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: 5,
        operator: '×',
        prompt: `${a} × 5`,
        correctAnswer: prod,
        ghostAccumulator: `${a} ÷ 2 = ${half} -> × 10 = ${prod}`,
        mentalTip: 'Cut in half and append a zero (or shift decimal point).',
        steps: [
          {
            stepIndex: 1,
            prompt: `Halve ${a}`,
            expectedValue: half,
            subVocalization: `Half: "${half}"`,
            explanation: `${a} / 2 = ${half}`,
          },
          {
            stepIndex: 2,
            prompt: `Multiply ${half} by 10`,
            expectedValue: prod,
            subVocalization: `Resolve: "${prod}"`,
            explanation: `${half} × 10 = ${prod}`,
          },
        ],
      };
    }

    case 'mult_power10_25': {
      const a = randomInt(12, 64);
      const prod = a * 25;
      const quarter = a / 4;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: 25,
        operator: '×',
        prompt: `${a} × 25`,
        correctAnswer: prod,
        ghostAccumulator: `${a} ÷ 4 = ${quarter} -> × 100 = ${prod}`,
        mentalTip: 'Halve twice, then append 00 (or quadrant remainder).',
        steps: [
          {
            stepIndex: 1,
            prompt: `Divide ${a} by 4 (halve twice)`,
            expectedValue: quarter,
            subVocalization: `Quarter: "${quarter}"`,
            explanation: `${a} / 4 = ${quarter}`,
          },
          {
            stepIndex: 2,
            prompt: `Multiply ${quarter} by 100`,
            expectedValue: prod,
            subVocalization: `Resolve: "${prod}"`,
            explanation: `${quarter} × 100 = ${prod}`,
          },
        ],
      };
    }

    case 'mult_power10_125': {
      const mult = randomInt(2, 12);
      const a = mult * 8; // cleanly divisible by 8 for scaffolded mastery
      const prod = a * 125;
      const eighth = a / 8;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: 125,
        operator: '×',
        prompt: `${a} × 125`,
        correctAnswer: prod,
        ghostAccumulator: `${a} ÷ 8 = ${eighth} -> × 1000 = ${prod}`,
        mentalTip: 'Halve three times, then multiply by 1,000.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Divide ${a} by 8 (halve 3 times)`,
            expectedValue: eighth,
            subVocalization: `Eighth: "${eighth}"`,
            explanation: `${a} / 8 = ${eighth}`,
          },
          {
            stepIndex: 2,
            prompt: `Multiply by 1,000`,
            expectedValue: prod,
            subVocalization: `Resolve: "${prod}"`,
            explanation: `${eighth} × 1000 = ${prod}`,
          },
        ],
      };
    }

    case 'mult_power10_625': {
      const mult = randomInt(2, 8);
      const a = mult * 16;
      const prod = a * 625;
      const sixteenth = a / 16;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: 625,
        operator: '×',
        prompt: `${a} × 625`,
        correctAnswer: prod,
        ghostAccumulator: `${a} ÷ 16 = ${sixteenth} -> × 10000 = ${prod}`,
        mentalTip: 'Halve four times, then multiply by 10,000.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Divide ${a} by 16 (halve 4 times)`,
            expectedValue: sixteenth,
            subVocalization: `Sixteenth: "${sixteenth}"`,
            explanation: `${a} / 16 = ${sixteenth}`,
          },
          {
            stepIndex: 2,
            prompt: `Multiply by 10,000`,
            expectedValue: prod,
            subVocalization: `Resolve: "${prod}"`,
            explanation: `${sixteenth} × 10000 = ${prod}`,
          },
        ],
      };
    }

    case 'mult_repunit_11': {
      const a = difficultyLevel <= 2 ? randomInt(23, 98) : randomInt(123, 876);
      const prod = a * 11;
      const str = a.toString();
      const first = str[0];
      const last = str[str.length - 1];

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: 11,
        operator: '×',
        prompt: `${a} × 11`,
        correctAnswer: prod,
        ghostAccumulator: `${first} _ ${last} -> sum neighbors -> ${prod}`,
        mentalTip: 'Add adjacent neighbors right to left, buffering carries forward.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Rightmost units digit`,
            expectedValue: parseInt(last, 10),
            subVocalization: `Units: "${last}"`,
            explanation: `Units digit remains ${last}`,
          },
          {
            stepIndex: 2,
            prompt: `Apply neighbor sum rule to find full product`,
            expectedValue: prod,
            subVocalization: `Resolve: "${prod}"`,
            explanation: `Neighbor sum yields ${prod}`,
          },
        ],
      };
    }

    case 'mult_repunit_teens_decade': {
      const k = randomInt(2, 9);
      const multiplier = k * 11; // 22, 33, 44...
      const a = randomInt(12, 45);
      const prod = a * multiplier;
      const preMult = a * k;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: multiplier,
        operator: '×',
        prompt: `${a} × ${multiplier}`,
        correctAnswer: prod,
        ghostAccumulator: `(${a} × ${k} = ${preMult}) × 11 = ${prod}`,
        mentalTip: `Pre-multiply by ${k}, then apply the 11-rule.`,
        steps: [
          {
            stepIndex: 1,
            prompt: `Multiply ${a} × ${k}`,
            expectedValue: preMult,
            subVocalization: `Base: "${preMult}"`,
            explanation: `${a} × ${k} = ${preMult}`,
          },
          {
            stepIndex: 2,
            prompt: `Multiply ${preMult} × 11`,
            expectedValue: prod,
            subVocalization: `Resolve: "${prod}"`,
            explanation: `${preMult} × 11 = ${prod}`,
          },
        ],
      };
    }

    case 'mult_repunit_9s_ekanyunena': {
      const numDigits = difficultyLevel <= 2 ? 2 : difficultyLevel <= 4 ? 3 : 4;
      const nines = Math.pow(10, numDigits) - 1; // 99, 999, 9999
      const a = randomInt(
        Math.pow(10, numDigits - 1) + 5,
        Math.pow(10, numDigits) - 5
      );
      const prod = a * nines;
      const leftPart = a - 1;
      const rightPart = nines - leftPart;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: nines,
        operator: '×',
        prompt: `${a} × ${nines}`,
        correctAnswer: prod,
        ghostAccumulator: `[${a} - 1 = ${leftPart}] | [9-complements = ${rightPart}] => ${prod}`,
        mentalTip: 'Subtract 1 from the number for the left half, and 9-complement for the right.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Subtract 1: ${a} - 1`,
            expectedValue: leftPart,
            subVocalization: `Left: "${leftPart}"`,
            explanation: `Left portion is ${leftPart}`,
          },
          {
            stepIndex: 2,
            prompt: `Subtract ${leftPart} from 9s block`,
            expectedValue: rightPart,
            subVocalization: `Right: "${rightPart}"`,
            explanation: `Right portion is ${rightPart}`,
          },
          {
            stepIndex: 3,
            prompt: `Assemble full product`,
            expectedValue: prod,
            subVocalization: `Resolve: "${prod}"`,
            explanation: `Full product is ${prod}`,
          },
        ],
      };
    }

    case 'mult_pattern_consecutive_int': {
      const n = randomInt(12, 35);
      const prod = n * (n + 1);
      const nSq = n * n;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: n,
        operandB: n + 1,
        operator: '×',
        prompt: `${n} × ${n + 1}`,
        correctAnswer: prod,
        ghostAccumulator: `${n}² = ${nSq} -> + ${n} = ${prod}`,
        mentalTip: 'Square the smaller number and add it back.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Square ${n}`,
            expectedValue: nSq,
            subVocalization: `Square: "${nSq}"`,
            explanation: `${n}² = ${nSq}`,
          },
          {
            stepIndex: 2,
            prompt: `Add ${n}: ${nSq} + ${n}`,
            expectedValue: prod,
            subVocalization: `Resolve: "${prod}"`,
            explanation: `${nSq} + ${n} = ${prod}`,
          },
        ],
      };
    }

    case 'mult_pattern_consecutive_gap2': {
      const mid = randomInt(15, 50);
      const a = mid - 1;
      const b = mid + 1;
      const prod = a * b;
      const midSq = mid * mid;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: b,
        operator: '×',
        prompt: `${a} × ${b}`,
        correctAnswer: prod,
        ghostAccumulator: `${mid}² - 1 = ${midSq} - 1 = ${prod}`,
        mentalTip: 'Square the middle number and subtract 1.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Square middle number ${mid}`,
            expectedValue: midSq,
            subVocalization: `Middle square: "${midSq}"`,
            explanation: `${mid}² = ${midSq}`,
          },
          {
            stepIndex: 2,
            prompt: `Subtract 1: ${midSq} - 1`,
            expectedValue: prod,
            subVocalization: `Resolve: "${prod}"`,
            explanation: `${midSq} - 1 = ${prod}`,
          },
        ],
      };
    }

    case 'mult_pattern_antyayor_dasakepi': {
      const tens = randomInt(2, 9);
      const u1 = randomInt(1, 9);
      const u2 = 10 - u1;
      const a = tens * 10 + u1;
      const b = tens * 10 + u2;
      const prod = a * b;
      const prefix = tens * (tens + 1);
      const suffix = u1 * u2;
      const suffixStr = suffix < 10 ? `0${suffix}` : `${suffix}`;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: b,
        operator: '×',
        prompt: `${a} × ${b}`,
        correctAnswer: prod,
        ghostAccumulator: `[${tens} × ${tens + 1} = ${prefix}] | [${u1} × ${u2} = ${suffixStr}] => ${prod}`,
        mentalTip: 'Tens × (Tens + 1) for prefix, Units × Units for suffix.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Prefix: ${tens} × (${tens} + 1)`,
            expectedValue: prefix,
            subVocalization: `Prefix: "${prefix}"`,
            explanation: `${tens} × ${tens + 1} = ${prefix}`,
          },
          {
            stepIndex: 2,
            prompt: `Suffix: ${u1} × ${u2}`,
            expectedValue: suffix,
            subVocalization: `Suffix: "${suffixStr}"`,
            explanation: `${u1} × ${u2} = ${suffixStr}`,
          },
          {
            stepIndex: 3,
            prompt: `Combine prefix and suffix`,
            expectedValue: prod,
            subVocalization: `Resolve: "${prod}"`,
            explanation: `Result is ${prod}`,
          },
        ],
      };
    }

    case 'mult_pattern_reverse_antyayor': {
      const t1 = randomInt(1, 9);
      const t2 = 10 - t1;
      const u = randomInt(2, 9);
      const a = t1 * 10 + u;
      const b = t2 * 10 + u;
      const prod = a * b;
      const prefix = t1 * t2 + u;
      const suffix = u * u;
      const suffixStr = suffix < 10 ? `0${suffix}` : `${suffix}`;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: b,
        operator: '×',
        prompt: `${a} × ${b}`,
        correctAnswer: prod,
        ghostAccumulator: `[(${t1} × ${t2}) + ${u} = ${prefix}] | [${u}² = ${suffixStr}] => ${prod}`,
        mentalTip: '(T1 × T2 + U) | U² for matching units summing to 10 in tens.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Prefix: (${t1} × ${t2}) + ${u}`,
            expectedValue: prefix,
            subVocalization: `Prefix: "${prefix}"`,
            explanation: `(${t1} × ${t2}) + ${u} = ${prefix}`,
          },
          {
            stepIndex: 2,
            prompt: `Suffix: ${u}²`,
            expectedValue: suffix,
            subVocalization: `Suffix: "${suffixStr}"`,
            explanation: `${u}² = ${suffixStr}`,
          },
        ],
      };
    }

    case 'mult_pattern_half_double': {
      const even = randomInt(8, 24) * 2;
      const fiveEnd = randomChoice([15, 25, 35, 45]);
      const prod = even * fiveEnd;
      const halved = even / 2;
      const doubled = fiveEnd * 2;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: even,
        operandB: fiveEnd,
        operator: '×',
        prompt: `${even} × ${fiveEnd}`,
        correctAnswer: prod,
        ghostAccumulator: `(${even}/2 = ${halved}) × (${fiveEnd}×2 = ${doubled}) = ${prod}`,
        mentalTip: 'Halve the even factor, double the 5-ending factor.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Halve ${even}`,
            expectedValue: halved,
            subVocalization: `Halved: "${halved}"`,
            explanation: `${even} / 2 = ${halved}`,
          },
          {
            stepIndex: 2,
            prompt: `Double ${fiveEnd}`,
            expectedValue: doubled,
            subVocalization: `Doubled: "${doubled}"`,
            explanation: `${fiveEnd} × 2 = ${doubled}`,
          },
          {
            stepIndex: 3,
            prompt: `Multiply ${halved} × ${doubled}`,
            expectedValue: prod,
            subVocalization: `Resolve: "${prod}"`,
            explanation: `${halved} × ${doubled} = ${prod}`,
          },
        ],
      };
    }

    case 'mult_vedic_urdhva_tiryag': {
      const a = randomInt(21, 89);
      const b = randomInt(21, 89);
      const prod = a * b;
      const a1 = Math.floor(a / 10);
      const a0 = a % 10;
      const b1 = Math.floor(b / 10);
      const b0 = b % 10;
      const stepUnits = a0 * b0;
      const stepCross = a1 * b0 + a0 * b1;
      const stepTens = a1 * b1;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: b,
        operator: '×',
        prompt: `${a} × ${b}`,
        correctAnswer: prod,
        ghostAccumulator: `[${a0}×${b0}=${stepUnits}] -> [(${a1}×${b0})+(${a0}×${b1})=${stepCross}] -> [${a1}×${b1}=${stepTens}] => ${prod}`,
        mentalTip: 'Vertical units -> crosswise sum -> vertical tens.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Vertical units: ${a0} × ${b0}`,
            expectedValue: stepUnits,
            subVocalization: `Units product: "${stepUnits}"`,
            explanation: `${a0} × ${b0} = ${stepUnits}`,
          },
          {
            stepIndex: 2,
            prompt: `Crosswise sum: (${a1} × ${b0}) + (${a0} × ${b1})`,
            expectedValue: stepCross,
            subVocalization: `Cross sum: "${stepCross}"`,
            explanation: `(${a1} × ${b0}) + (${a0} × ${b1}) = ${stepCross}`,
          },
          {
            stepIndex: 3,
            prompt: `Vertical tens: ${a1} × ${b1}`,
            expectedValue: stepTens,
            subVocalization: `Tens product: "${stepTens}"`,
            explanation: `${a1} × ${b1} = ${stepTens}`,
          },
          {
            stepIndex: 4,
            prompt: `Resolve full product`,
            expectedValue: prod,
            subVocalization: `Resolve: "${prod}"`,
            explanation: `Total product is ${prod}`,
          },
        ],
      };
    }

    case 'mult_trachtenberg_rules': {
      const multiplier = randomChoice([6, 7, 11, 12]);
      const a = randomInt(134, 876);
      const prod = a * multiplier;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: multiplier,
        operator: '×',
        prompt: `${a} × ${multiplier}`,
        correctAnswer: prod,
        ghostAccumulator: `Trachtenberg rule for ${multiplier}: single-pass neighbor sweep => ${prod}`,
        mentalTip: `Apply direct single-pass rule for ${multiplier} with neighbor pairing.`,
        steps: [
          {
            stepIndex: 1,
            prompt: `Apply Trachtenberg single-pass rule for ${multiplier}`,
            expectedValue: prod,
            subVocalization: `Resolve: "${prod}"`,
            explanation: `${a} × ${multiplier} = ${prod}`,
          },
        ],
      };
    }

    case 'mult_vedic_base_yavadunam': {
      const base = randomChoice([50, 100, 200]);
      const d1 = randomInt(1, 8);
      const d2 = randomInt(1, 8);
      const a = base + d1;
      const b = base + d2;
      const prod = a * b;
      const crossSum = a + d2;
      const devProd = d1 * d2;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: b,
        operator: '×',
        prompt: `${a} × ${b}`,
        correctAnswer: prod,
        ghostAccumulator: `(${a} + ${d2} = ${crossSum}) | (${d1} × ${d2} = ${devProd}) => ${prod}`,
        mentalTip: 'Cross-add deviation to base, append deviation product.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Cross-add deviation: ${a} + ${d2}`,
            expectedValue: crossSum,
            subVocalization: `Cross-add: "${crossSum}"`,
            explanation: `${a} + ${d2} = ${crossSum}`,
          },
          {
            stepIndex: 2,
            prompt: `Multiply deviations: ${d1} × ${d2}`,
            expectedValue: devProd,
            subVocalization: `Deviation product: "${devProd}"`,
            explanation: `${d1} × ${d2} = ${devProd}`,
          },
          {
            stepIndex: 3,
            prompt: `Resolve full product`,
            expectedValue: prod,
            subVocalization: `Resolve: "${prod}"`,
            explanation: `Total product is ${prod}`,
          },
        ],
      };
    }

    // -------------------------------------------------------------
    // MODULE 3: SQUARES, CUBES & POWERS
    // -------------------------------------------------------------
    case 'sq_base_50': {
      const d = randomChoice([-8, -7, -6, -4, -3, -2, -1, 1, 2, 3, 4, 6, 7, 8]);
      const n = 50 + d;
      const sq = n * n;
      const prefix = 25 + d;
      const suffix = d * d;
      const suffixStr = suffix < 10 ? `0${suffix}` : `${suffix}`;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: n,
        operator: '^2',
        prompt: `${n}²`,
        correctAnswer: sq,
        ghostAccumulator: `(25 + (${d}) = ${prefix}) | (${d}² = ${suffixStr}) => ${sq}`,
        mentalTip: '25 ± distance for prefix, distance squared for suffix.',
        steps: [
          {
            stepIndex: 1,
            prompt: `25 + deviation: 25 + (${d})`,
            expectedValue: prefix,
            subVocalization: `Prefix: "${prefix}"`,
            explanation: `25 + (${d}) = ${prefix}`,
          },
          {
            stepIndex: 2,
            prompt: `Square deviation: (${d})²`,
            expectedValue: suffix,
            subVocalization: `Suffix: "${suffixStr}"`,
            explanation: `(${d})² = ${suffixStr}`,
          },
        ],
      };
    }

    case 'sq_base_100': {
      const d = randomChoice([-9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      const n = 100 + d;
      const sq = n * n;
      const prefix = n + d;
      const suffix = d * d;
      const suffixStr = suffix < 10 ? `0${suffix}` : `${suffix}`;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: n,
        operator: '^2',
        prompt: `${n}²`,
        correctAnswer: sq,
        ghostAccumulator: `(${n} + (${d}) = ${prefix}) | (${d}² = ${suffixStr}) => ${sq}`,
        mentalTip: 'Number ± deviation for prefix, deviation squared for suffix.',
        steps: [
          {
            stepIndex: 1,
            prompt: `${n} + deviation (${d})`,
            expectedValue: prefix,
            subVocalization: `Prefix: "${prefix}"`,
            explanation: `${n} + (${d}) = ${prefix}`,
          },
          {
            stepIndex: 2,
            prompt: `Square deviation: (${d})²`,
            expectedValue: suffix,
            subVocalization: `Suffix: "${suffixStr}"`,
            explanation: `(${d})² = ${suffixStr}`,
          },
        ],
      };
    }

    case 'sq_ending_5': {
      const tens = randomInt(2, 12);
      const n = tens * 10 + 5;
      const sq = n * n;
      const prefix = tens * (tens + 1);

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: n,
        operator: '^2',
        prompt: `${n}²`,
        correctAnswer: sq,
        ghostAccumulator: `[${tens} × ${tens + 1} = ${prefix}] | 25 => ${sq}`,
        mentalTip: 'Tens × (Tens + 1), append 25.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Multiply tens by next integer: ${tens} × ${tens + 1}`,
            expectedValue: prefix,
            subVocalization: `Prefix: "${prefix}"`,
            explanation: `${tens} × ${tens + 1} = ${prefix}`,
          },
          {
            stepIndex: 2,
            prompt: `Append 25`,
            expectedValue: sq,
            subVocalization: `Resolve: "${sq}"`,
            explanation: `Square ends in 25: ${sq}`,
          },
        ],
      };
    }

    case 'sq_ending_25': {
      const x = randomInt(1, 8);
      const n = x * 100 + 25;
      const sq = n * n;
      const prefix = 10 * x * x + 5 * x;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: n,
        operator: '^2',
        prompt: `${n}²`,
        correctAnswer: sq,
        ghostAccumulator: `10(${x}²) + 5(${x}) = ${prefix} | 625 => ${sq}`,
        mentalTip: '10X² + 5X for prefix, append 625.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Compute 10(${x}²) + 5(${x})`,
            expectedValue: prefix,
            subVocalization: `Prefix: "${prefix}"`,
            explanation: `10(${x}²) + 5(${x}) = ${prefix}`,
          },
          {
            stepIndex: 2,
            prompt: `Append 625`,
            expectedValue: sq,
            subVocalization: `Resolve: "${sq}"`,
            explanation: `Square is ${sq}`,
          },
        ],
      };
    }

    case 'sq_universal_duplex': {
      const n = difficultyLevel <= 2 ? randomInt(23, 89) : randomInt(112, 456);
      const sq = n * n;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: n,
        operator: '^2',
        prompt: `${n}²`,
        correctAnswer: sq,
        ghostAccumulator: `Dwandwa Yoga duplex sequence => ${sq}`,
        mentalTip: 'Compute duplex sequence D(a), D(ab), D(b) left-to-right.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Compute square using Duplex method`,
            expectedValue: sq,
            subVocalization: `Resolve: "${sq}"`,
            explanation: `Duplex accumulation yields ${sq}`,
          },
        ],
      };
    }

    case 'cube_tables_1_25': {
      const n = randomInt(1, 25);
      const cube = n * n * n;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: n,
        operator: '^3',
        prompt: `${n}³`,
        correctAnswer: cube,
        ghostAccumulator: `${n}³ = ${cube}`,
        mentalTip: 'Direct phonological recall from cube anchor tables.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Cube of ${n}`,
            expectedValue: cube,
            subVocalization: `Resolve: "${cube}"`,
            explanation: `${n}³ = ${cube}`,
          },
        ],
      };
    }

    case 'cube_algebraic_binomial': {
      const a = randomInt(1, 4) * 10;
      const b = randomInt(1, 5);
      const n = a + b;
      const cube = n * n * n;
      const term1 = a * a * a;
      const term2 = 3 * a * a * b;
      const term3 = 3 * a * b * b;
      const term4 = b * b * b;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: n,
        operator: '^3',
        prompt: `${n}³`,
        correctAnswer: cube,
        ghostAccumulator: `${term1} + ${term2} + ${term3} + ${term4} = ${cube}`,
        mentalTip: 'a³ + 3a²b + 3ab² + b³ expansion.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Cube tens: (${a})³`,
            expectedValue: term1,
            subVocalization: `Base: "${term1}"`,
            explanation: `(${a})³ = ${term1}`,
          },
          {
            stepIndex: 2,
            prompt: `Add 3a²b: 3 × (${a})² × ${b}`,
            expectedValue: term2,
            subVocalization: `Term 2: "${term2}"`,
            explanation: `3 × (${a})² × ${b} = ${term2}`,
          },
          {
            stepIndex: 3,
            prompt: `Add 3ab²: 3 × ${a} × (${b})²`,
            expectedValue: term3,
            subVocalization: `Term 3: "${term3}"`,
            explanation: `3 × ${a} × (${b})² = ${term3}`,
          },
          {
            stepIndex: 4,
            prompt: `Add units cubed: (${b})³`,
            expectedValue: term4,
            subVocalization: `Term 4: "${term4}"`,
            explanation: `(${b})³ = ${term4}`,
          },
        ],
      };
    }

    // -------------------------------------------------------------
    // MODULE 4: ROOT EXTRACTIONS & APPROXIMATIONS
    // -------------------------------------------------------------
    case 'root_sqrt_perfect_6d': {
      const root = randomInt(25, 99);
      const perfectSq = root * root;
      const tens = Math.floor(root / 10);
      const units = root % 10;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: perfectSq,
        operator: '≈',
        prompt: `√${perfectSq}`,
        correctAnswer: root,
        ghostAccumulator: `Tens = ${tens}, Units = ${units} => ${root}`,
        mentalTip: 'Bound the prefix by k², then eliminate the unit by k(k+1) comparator.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Identify tens digit of √${perfectSq}`,
            expectedValue: tens,
            subVocalization: `Tens: "${tens}"`,
            explanation: `Largest square below prefix is ${tens}² = ${tens * tens}`,
          },
          {
            stepIndex: 2,
            prompt: `Identify units digit`,
            expectedValue: units,
            subVocalization: `Units: "${units}"`,
            explanation: `Unit digit is ${units}`,
          },
        ],
      };
    }

    case 'root_sqrt_approx_differential': {
      const baseRoot = randomInt(4, 12);
      const baseSq = baseRoot * baseRoot;
      const diff = randomChoice([-3, -2, -1, 1, 2, 3]);
      const n = baseSq + diff;
      const approx = parseFloat((baseRoot + diff / (2 * baseRoot)).toFixed(2));

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: n,
        operator: '≈',
        prompt: `√${n} (to 2 decimal places)`,
        correctAnswer: approx,
        ghostAccumulator: `√${baseSq} + (${diff}) / (2 × ${baseRoot}) = ${baseRoot} + ${diff}/${2 * baseRoot} ≈ ${approx}`,
        mentalTip: '√{x ± y} ≈ √x ± y / (2√x)',
        steps: [
          {
            stepIndex: 1,
            prompt: `Nearest integer root: √${baseSq}`,
            expectedValue: baseRoot,
            subVocalization: `Integer part: "${baseRoot}"`,
            explanation: `√${baseSq} = ${baseRoot}`,
          },
          {
            stepIndex: 2,
            prompt: `Approximate total value`,
            expectedValue: approx,
            subVocalization: `Resolve: "${approx}"`,
            explanation: `Approximation yields ${approx}`,
          },
        ],
      };
    }

    case 'root_cbrt_perfect_6d': {
      const root = randomInt(11, 99);
      const perfectCube = root * root * root;
      const tens = Math.floor(root / 10);
      const units = root % 10;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: perfectCube,
        operator: '≈',
        prompt: `∛${perfectCube}`,
        correctAnswer: root,
        ghostAccumulator: `Unit bijection -> ${units}; Prefix bound -> ${tens} => ${root}`,
        mentalTip: 'Last digit gives units uniquely; prefix gives tens from cube table.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Units digit from 1-to-1 bijection`,
            expectedValue: units,
            subVocalization: `Units: "${units}"`,
            explanation: `Unit digit must be ${units}`,
          },
          {
            stepIndex: 2,
            prompt: `Tens digit from prefix bounding`,
            expectedValue: tens,
            subVocalization: `Tens: "${tens}"`,
            explanation: `Prefix maps to tens ${tens}`,
          },
        ],
      };
    }

    // -------------------------------------------------------------
    // MODULE 5: FAST DIVISION & PERCENTAGES
    // -------------------------------------------------------------
    case 'div_vedic_flag_dhvajanka': {
      const q = randomInt(12, 45);
      const divisor = randomInt(21, 65);
      const dividend = q * divisor;

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: dividend,
        operandB: divisor,
        operator: '÷',
        prompt: `${dividend} ÷ ${divisor}`,
        correctAnswer: q,
        ghostAccumulator: `Dhvajanka flag division => ${q}`,
        mentalTip: 'Partition divisor into Main and Flag; deduct flag product from remainder.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Divide ${dividend} by ${divisor}`,
            expectedValue: q,
            subVocalization: `Quotient: "${q}"`,
            explanation: `${dividend} / ${divisor} = ${q}`,
          },
        ],
      };
    }

    case 'div_vedic_osculators': {
      const prime = randomChoice([7, 13, 17, 19, 23, 29]);
      const osculators: Record<number, number> = {
        7: -2,
        13: 4,
        17: -5,
        19: 2,
        23: 7,
        29: 3,
      };
      const P = osculators[prime];
      const isDivisible = Math.random() > 0.4;
      const mult = randomInt(11, 45);
      const n = isDivisible ? mult * prime : mult * prime + randomInt(1, prime - 1);
      const answer = isDivisible ? 1 : 0; // 1 for Yes, 0 for No

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: n,
        operandB: prime,
        operator: ':',
        prompt: `Is ${n} divisible by ${prime}? (1=Yes, 0=No)`,
        correctAnswer: answer,
        ghostAccumulator: `Osculator P = ${P > 0 ? '+' : ''}${P} -> test yields ${isDivisible ? 'Divisible' : 'Not Divisible'}`,
        mentalTip: `Multiply last digit by osculator P (${P > 0 ? '+' : ''}${P}) and add to truncated prefix.`,
        steps: [
          {
            stepIndex: 1,
            prompt: `Osculator P for ${prime}`,
            expectedValue: P,
            subVocalization: `Osculator: "${P}"`,
            explanation: `P = ${P}`,
          },
          {
            stepIndex: 2,
            prompt: `Divisible? (1=Yes, 0=No)`,
            expectedValue: answer,
            subVocalization: isDivisible ? 'Yes' : 'No',
            explanation: `${n} ${isDivisible ? 'is' : 'is NOT'} divisible by ${prime}`,
          },
        ],
      };
    }

    case 'pct_reversible_law': {
      const friendly = randomChoice([25, 50, 75, 20]);
      const x = randomInt(8, 64);
      // prompt: friendly% of x or x% of friendly
      const isFlipped = Math.random() > 0.5;
      const p = isFlipped ? x : friendly;
      const target = isFlipped ? friendly : x;
      const ans = Math.round((friendly * x) / 100);

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: p,
        operandB: target,
        operator: '%',
        prompt: `${p}% of ${target}`,
        correctAnswer: ans,
        ghostAccumulator: `${p}% of ${target} = ${friendly}% of ${x} = ${ans}`,
        mentalTip: 'Flip operands: x% of y = y% of x.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Flip to friendly percentage: ${friendly}% of ${x}`,
            expectedValue: ans,
            subVocalization: `Resolve: "${ans}"`,
            explanation: `${friendly}% of ${x} = ${ans}`,
          },
        ],
      };
    }

    case 'pct_fraction_pivots': {
      const pivots = [
        { pct: 50, frac: 1 / 2, name: '1/2' },
        { pct: 25, frac: 1 / 4, name: '1/4' },
        { pct: 20, frac: 1 / 5, name: '1/5' },
        { pct: 12.5, frac: 1 / 8, name: '1/8' },
        { pct: 37.5, frac: 3 / 8, name: '3/8' },
        { pct: 62.5, frac: 5 / 8, name: '5/8' },
        { pct: 6.25, frac: 1 / 16, name: '1/16' },
      ];
      const chosen = randomChoice(pivots);
      const mult = randomInt(2, 10);
      const denom = Math.round(1 / chosen.frac) || 8;
      const target = mult * denom;
      const ans = Math.round(target * chosen.frac);

      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: chosen.pct,
        operandB: target,
        operator: '%',
        prompt: `${chosen.pct}% of ${target}`,
        correctAnswer: ans,
        ghostAccumulator: `${chosen.pct}% = ${chosen.name} -> ${chosen.name} × ${target} = ${ans}`,
        mentalTip: `Replace ${chosen.pct}% with ${chosen.name}.`,
        steps: [
          {
            stepIndex: 1,
            prompt: `Fraction equivalent of ${chosen.pct}% of ${target}`,
            expectedValue: ans,
            subVocalization: `Resolve: "${ans}"`,
            explanation: `(${chosen.name}) × ${target} = ${ans}`,
          },
        ],
      };
    }

    default: {
      // Fallback generator for legacy alias tags
      const a = randomInt(12, 98);
      const b = randomInt(12, 98);
      const sum = a + b;
      return {
        id,
        techniqueId,
        difficultyLevel,
        operandA: a,
        operandB: b,
        operator: '+',
        prompt: `${a} + ${b}`,
        correctAnswer: sum,
        ghostAccumulator: `${a} + ${b} = ${sum}`,
        mentalTip: 'Add left-to-right.',
        steps: [
          {
            stepIndex: 1,
            prompt: `Calculate ${a} + ${b}`,
            expectedValue: sum,
            subVocalization: `Resolve: "${sum}"`,
            explanation: `${a} + ${b} = ${sum}`,
          },
        ],
      };
    }
  }
}
