/**
 * Explicit Mental Math Strategy Catalog for Mentalis
 * Standardized pedagogical strategies for multiplication (1-100 x 1-20),
 * squares (1-100), and cubes (1-100).
 * Every worked example mathematically guarantees exact validation.
 */

import { CalculationStep } from './types';
import { FactKey, parseFactKey } from './factModel';

export interface StrategyDefinition {
  id: string;
  name: string;
  category: 'multiplication' | 'square' | 'cube';
  mentalScript: string;
  prerequisites: string[];
  contraindications?: string;
  verificationMethod?: string;
  isApplicable: (a: number, b?: number) => boolean;
  generateWorkedExample: (a: number, b?: number) => {
    strategyTitle: string;
    steps: CalculationStep[];
    mentalTip: string;
    verifiedResult: number;
  };
}

export const STRATEGY_CATALOG: Record<string, StrategyDefinition> = {
  // -------------------------------------------------------------
  // MULTIPLICATION STRATEGIES
  // -------------------------------------------------------------
  zeros_ones_foundations: {
    id: 'zeros_ones_foundations',
    name: 'Zero and Identity Foundations',
    category: 'multiplication',
    mentalScript: 'Any number multiplied by 0 is 0. Any number multiplied by 1 is itself.',
    prerequisites: ['Basic number sense'],
    verificationMethod: 'Identity property',
    isApplicable: (a, b) => a === 0 || b === 0 || a === 1 || b === 1,
    generateWorkedExample: (a, b = 1) => {
      const prod = a * b;
      return {
        strategyTitle: 'Zero & Identity Strategy',
        steps: [
          {
            stepNumber: 1,
            title: a === 0 || b === 0 ? 'Zero Property' : 'Identity Property',
            subVocalization: `${a} × ${b} = ${prod}`,
            intermediateValue: prod,
            explanation: a === 0 || b === 0 ? 'Multiplying by 0 results in 0.' : `Multiplying by 1 preserves identity: ${prod}.`,
          },
        ],
        mentalTip: a === 0 || b === 0 ? 'Zero nullifies everything: result is 0.' : 'Multiplying by 1 never changes the value.',
        verifiedResult: prod,
      };
    },
  },

  twos_doubling: {
    id: 'twos_doubling',
    name: 'Doubling (×2)',
    category: 'multiplication',
    mentalScript: 'Multiply by 2 by adding the number to itself (n + n).',
    prerequisites: ['Single-digit addition'],
    verificationMethod: 'Result must be even.',
    isApplicable: (a, b) => a === 2 || b === 2,
    generateWorkedExample: (a, b = 1) => {
      const n = a === 2 ? b : a;
      const prod = 2 * n;
      return {
        strategyTitle: 'Doubling Strategy (×2)',
        steps: [
          {
            stepNumber: 1,
            title: `Double ${n} (${n} + ${n} = ${prod})`,
            subVocalization: `Double: "${prod}"`,
            intermediateValue: prod,
            explanation: `Multiply by 2 by taking ${n} + ${n} = ${prod}.`,
          },
        ],
        mentalTip: 'Think of doubling: 2 × n is simply n + n.',
        verifiedResult: prod,
      };
    },
  },

  fives_half_decade: {
    id: 'fives_half_decade',
    name: 'Half of Decade (×5)',
    category: 'multiplication',
    mentalScript: 'Multiply by 10 and divide by 2: (10n) ÷ 2.',
    prerequisites: ['Decade scaling', 'Halving even numbers'],
    verificationMethod: 'Last digit must be 0 or 5.',
    isApplicable: (a, b) => a === 5 || b === 5,
    generateWorkedExample: (a, b = 1) => {
      const n = a === 5 ? b : a;
      const decade = n * 10;
      const prod = decade / 2;
      return {
        strategyTitle: 'Half of Decade Strategy (×5)',
        steps: [
          {
            stepNumber: 1,
            title: `Multiply by 10 (${n} × 10 = ${decade})`,
            subVocalization: `Decade: "${decade}"`,
            intermediateValue: decade,
            explanation: `Scale ${n} to the decade: ${n} × 10 = ${decade}.`,
          },
          {
            stepNumber: 2,
            title: `Halve the result (${decade} ÷ 2 = ${prod})`,
            subVocalization: `Halve: "${prod}"`,
            intermediateValue: prod,
            explanation: `Divide ${decade} by 2 to get ${prod}.`,
          },
        ],
        mentalTip: '5 is half of 10. Append zero and cut in half.',
        verifiedResult: prod,
      };
    },
  },

  twenties_double_decade: {
    id: 'twenties_double_decade',
    name: 'Double Decade (×20)',
    category: 'multiplication',
    mentalScript: 'Double the number, then append a zero: 2n × 10.',
    prerequisites: ['Doubling', 'Decade scaling'],
    verificationMethod: 'Ends in 0 and is divisible by 4.',
    isApplicable: (a, b) => a === 20 || b === 20,
    generateWorkedExample: (a, b = 1) => {
      const n = a === 20 ? b : a;
      const doubled = n * 2;
      const prod = doubled * 10;
      return {
        strategyTitle: 'Double Decade Strategy (×20)',
        steps: [
          {
            stepNumber: 1,
            title: `Double ${n} (${n} × 2 = ${doubled})`,
            subVocalization: `Double: "${doubled}"`,
            intermediateValue: doubled,
            explanation: `Double ${n} to get ${doubled}.`,
          },
          {
            stepNumber: 2,
            title: `Append zero (${doubled} × 10 = ${prod})`,
            subVocalization: `Scale: "${prod}"`,
            intermediateValue: prod,
            explanation: `Multiply ${doubled} by 10 = ${prod}.`,
          },
        ],
        mentalTip: 'Double the number first, then tack on the decade zero.',
        verifiedResult: prod,
      };
    },
  },

  fifties_half_hundred: {
    id: 'fifties_half_hundred',
    name: 'Half of Hundred (×50)',
    category: 'multiplication',
    mentalScript: 'Append two zeroes and cut in half: (100n) ÷ 2.',
    prerequisites: ['Halving', 'Hundred scaling'],
    verificationMethod: 'Ends in 00 or 50.',
    isApplicable: (a, b) => a === 50 || b === 50,
    generateWorkedExample: (a, b = 1) => {
      const n = a === 50 ? b : a;
      const hundred = n * 100;
      const prod = hundred / 2;
      return {
        strategyTitle: 'Half of Hundred Strategy (×50)',
        steps: [
          {
            stepNumber: 1,
            title: `Scale to 100 (${n} × 100 = ${hundred})`,
            subVocalization: `Century: "${hundred}"`,
            intermediateValue: hundred,
            explanation: `Append two zeroes: ${n} × 100 = ${hundred}.`,
          },
          {
            stepNumber: 2,
            title: `Halve (${hundred} ÷ 2 = ${prod})`,
            subVocalization: `Halve: "${prod}"`,
            intermediateValue: prod,
            explanation: `Half of ${hundred} is ${prod}.`,
          },
        ],
        mentalTip: '50 is half of 100. Multiply by 100 and cut in half.',
        verifiedResult: prod,
      };
    },
  },

  seventy_fives_three_quarters: {
    id: 'seventy_fives_three_quarters',
    name: 'Three Quarters of Hundred (×75)',
    category: 'multiplication',
    mentalScript: 'Multiply by 100, divide by 4, then triple: (100n ÷ 4) × 3.',
    prerequisites: ['Quartering', 'Multiplication by 3'],
    verificationMethod: 'Ends in 00, 25, 50, or 75.',
    isApplicable: (a, b) => a === 75 || b === 75,
    generateWorkedExample: (a, b = 1) => {
      const n = a === 75 ? b : a;
      const quarterHundred = (n * 100) / 4;
      const prod = quarterHundred * 3;
      return {
        strategyTitle: 'Three-Quarters Strategy (×75)',
        steps: [
          {
            stepNumber: 1,
            title: `Quarter of 100 (${n} × 25 = ${quarterHundred})`,
            subVocalization: `Quarter: "${quarterHundred}"`,
            intermediateValue: quarterHundred,
            explanation: `Find one quarter of 100 × ${n}: ${quarterHundred}.`,
          },
          {
            stepNumber: 2,
            title: `Triple the quarter (${quarterHundred} × 3 = ${prod})`,
            subVocalization: `Triple: "${prod}"`,
            intermediateValue: prod,
            explanation: `Multiply ${quarterHundred} by 3 to reach ${prod}.`,
          },
        ],
        mentalTip: '75% is 3/4. Find 25 × n first, then triple it.',
        verifiedResult: prod,
      };
    },
  },

  hundreds_double_zero: {
    id: 'hundreds_double_zero',
    name: 'Centennial Zero Appending (×100)',
    category: 'multiplication',
    mentalScript: 'Multiply by 100 by shifting two decimal places: n × 100 = n00.',
    prerequisites: ['Place value shift'],
    verificationMethod: 'Ends in two zeroes.',
    isApplicable: (a, b) => a === 100 || b === 100,
    generateWorkedExample: (a, b = 1) => {
      const n = a === 100 ? b : a;
      const prod = n * 100;
      return {
        strategyTitle: 'Centennial Scaling (×100)',
        steps: [
          {
            stepNumber: 1,
            title: `Append 00 (${n} × 100 = ${prod})`,
            subVocalization: `Hundred: "${prod}"`,
            intermediateValue: prod,
            explanation: `Shift place value two places to the right: ${n} becomes ${prod}.`,
          },
        ],
        mentalTip: 'Multiplying by 100 appends two trailing zeroes.',
        verifiedResult: prod,
      };
    },
  },

  near_hundred_multiplication: {
    id: 'near_hundred_multiplication',
    name: 'Base 100 Deficiency Multiplication (Nikhilam)',
    category: 'multiplication',
    mentalScript: 'For numbers near 100, find deficiencies d1 and d2. Result = (100 - d1 - d2) × 100 + (d1 × d2).',
    prerequisites: ['Base 100 complements', 'Single digit multiplication'],
    verificationMethod: 'Check last 2 digits against d1 * d2.',
    isApplicable: (a, b) => a >= 88 && a <= 99 && b !== undefined && b >= 88 && b <= 99,
    generateWorkedExample: (a, b = 90) => {
      const d1 = 100 - a;
      const d2 = 100 - b;
      const leftPart = a - d2;
      const rightPart = d1 * d2;
      const prod = leftPart * 100 + rightPart;
      return {
        strategyTitle: 'Base 100 Deficiency (Nikhilam)',
        steps: [
          {
            stepNumber: 1,
            title: `Calculate Deficiencies from 100`,
            subVocalization: `Deficiencies: "-${d1}" and "-${d2}"`,
            intermediateValue: d1,
            explanation: `100 - ${a} = ${d1}, and 100 - ${b} = ${d2}.`,
          },
          {
            stepNumber: 2,
            title: `Cross-Subtract for Leading Part (${a} - ${d2} = ${leftPart})`,
            subVocalization: `Leading: "${leftPart} hundred"`,
            intermediateValue: leftPart,
            explanation: `Subtract opposite deficiency: ${a} - ${d2} = ${leftPart}.`,
          },
          {
            stepNumber: 3,
            title: `Multiply Deficiencies (${d1} × ${d2} = ${rightPart})`,
            subVocalization: `Trailing: "${rightPart}"`,
            intermediateValue: rightPart,
            explanation: `Multiply the two deficits: ${d1} × ${d2} = ${rightPart}.`,
          },
          {
            stepNumber: 4,
            title: `Combine Parts (${leftPart}00 + ${rightPart} = ${prod})`,
            subVocalization: `Total: "${prod}"`,
            intermediateValue: prod,
            explanation: `Assemble final product: ${leftPart} | ${rightPart.toString().padStart(2, '0')} = ${prod}.`,
          },
        ],
        mentalTip: `Cross-subtract deficits for the front (${leftPart}), multiply deficits for the back (${rightPart}).`,
        verifiedResult: prod,
      };
    },
  },

  direct_recall_anchor: {
    id: 'direct_recall_anchor',
    name: 'Direct Associative Anchor Recall',
    category: 'multiplication',
    mentalScript: 'Direct phonological retrieval. Say the prompt, hear the anchor answer.',
    prerequisites: ['Basic 1-12 multiplication tables'],
    verificationMethod: 'Check parity (even x anything is even) and last digit.',
    isApplicable: (a, b) => a <= 12 && (b === undefined || b <= 12),
    generateWorkedExample: (a, b = 1) => {
      const prod = a * b;
      return {
        strategyTitle: 'Direct Associative Recall',
        steps: [
          {
            stepNumber: 1,
            title: `Instant Retrieval (${a} × ${b} = ${prod})`,
            subVocalization: `Anchor echo: "${prod}"`,
            intermediateValue: prod,
            explanation: `${a} × ${b} is a fundamental foundation anchor. Retrieve instantly from long-term memory.`,
          },
        ],
        mentalTip: 'Avoid calculating on paper. Trigger instantaneous phonological recall.',
        verifiedResult: prod,
      };
    },
  },

  decade_scaling: {
    id: 'decade_scaling',
    name: 'Decade Scaling & Zero Placement',
    category: 'multiplication',
    mentalScript: 'Drop trailing zeroes, multiply base digits, append zeroes to the end.',
    prerequisites: ['Single digit multiplication', 'Place value shift'],
    contraindications: 'Do not use when neither operand has trailing zeroes.',
    verificationMethod: 'Count trailing zeroes in operands; result must have at least that many.',
    isApplicable: (a, b) => a % 10 === 0 || (b !== undefined && b % 10 === 0),
    generateWorkedExample: (a, b = 1) => {
      const dec = a % 10 === 0 ? a : b;
      const other = a % 10 === 0 ? b : a;
      const baseA = dec / 10;
      const baseProduct = baseA * other;
      const finalProduct = baseProduct * 10;
      return {
        strategyTitle: 'Decade Scale Strategy',
        steps: [
          {
            stepNumber: 1,
            title: `Scale Down Decade (${dec} ÷ 10 = ${baseA})`,
            subVocalization: `Base digits: "${baseA} × ${other}"`,
            intermediateValue: baseA,
            explanation: `Remove the zero from ${dec} to leave ${baseA}.`,
          },
          {
            stepNumber: 2,
            title: `Multiply Base Digits (${baseA} × ${other} = ${baseProduct})`,
            subVocalization: `Base product: "${baseProduct}"`,
            intermediateValue: baseProduct,
            explanation: `Multiply core non-zero digits: ${baseA} × ${other} = ${baseProduct}.`,
          },
          {
            stepNumber: 3,
            title: `Append Zero (${baseProduct} × 10 = ${finalProduct})`,
            subVocalization: `Final product: "${finalProduct}"`,
            intermediateValue: finalProduct,
            explanation: `Shift place value one decade to the right: ${baseProduct} × 10 = ${finalProduct}.`,
          },
        ],
        mentalTip: 'Always isolate the non-zero core first, then slide the decade zero into place.',
        verifiedResult: finalProduct,
      };
    },
  },

  nines_compensation: {
    id: 'nines_compensation',
    name: 'Nines Compensation (10n - n)',
    category: 'multiplication',
    mentalScript: 'Multiply by 10, then subtract the single multiplier.',
    prerequisites: ['Decade scaling (x10)', 'Single digit subtraction'],
    isApplicable: (a, b) => a === 9 || b === 9,
    generateWorkedExample: (a, b = 1) => {
      const other = a === 9 ? b : a;
      const tenStep = other * 10;
      const finalProd = tenStep - other;
      return {
        strategyTitle: 'Nines Compensation Method',
        steps: [
          {
            stepNumber: 1,
            title: `Multiply by 10 (${other} × 10 = ${tenStep})`,
            subVocalization: `Ten base: "${tenStep}"`,
            intermediateValue: tenStep,
            explanation: `Scale to nearest decade: ${other} × 10 = ${tenStep}.`,
          },
          {
            stepNumber: 2,
            title: `Subtract One Part (${tenStep} - ${other} = ${finalProd})`,
            subVocalization: `Take away ${other} -> "${finalProd}"`,
            intermediateValue: finalProd,
            explanation: `Subtract one copy of ${other}: ${tenStep} - ${other} = ${finalProd}.`,
          },
        ],
        mentalTip: '9 is always (10 - 1). Never struggle with 9s—multiply by 10 and subtract the number once.',
        verifiedResult: finalProd,
      };
    },
  },

  elevens_pattern: {
    id: 'elevens_pattern',
    name: 'Elevens Expansion (10n + n)',
    category: 'multiplication',
    mentalScript: 'Multiply by 10, then add the number itself once.',
    prerequisites: ['Decade scaling (x10)', 'Addition'],
    isApplicable: (a, b) => a === 11 || b === 11,
    generateWorkedExample: (a, b = 1) => {
      const other = a === 11 ? b : a;
      const tenStep = other * 10;
      const finalProd = tenStep + other;
      return {
        strategyTitle: 'Elevens Expansion Pattern',
        steps: [
          {
            stepNumber: 1,
            title: `Multiply by 10 (${other} × 10 = ${tenStep})`,
            subVocalization: `Ten base: "${tenStep}"`,
            intermediateValue: tenStep,
            explanation: `Scale to decade: ${other} × 10 = ${tenStep}.`,
          },
          {
            stepNumber: 2,
            title: `Add One Part (${tenStep} + ${other} = ${finalProd})`,
            subVocalization: `Add ${other} -> "${finalProd}"`,
            intermediateValue: finalProd,
            explanation: `Add back one copy: ${tenStep} + ${other} = ${finalProd}.`,
          },
        ],
        mentalTip: '11 is (10 + 1). Add one decade shift to the number itself.',
        verifiedResult: finalProd,
      };
    },
  },

  twelves_partition: {
    id: 'twelves_partition',
    name: 'Twelves Partition (10n + 2n)',
    category: 'multiplication',
    mentalScript: 'Multiply by 10, double the number, then add both parts together.',
    prerequisites: ['Multiplication by 10', 'Doubling (x2)', 'Left-to-Right addition'],
    isApplicable: (a, b) => a === 12 || b === 12,
    generateWorkedExample: (a, b = 1) => {
      const other = a === 12 ? b : a;
      const part10 = other * 10;
      const part2 = other * 2;
      const finalProd = part10 + part2;
      return {
        strategyTitle: 'Twelves Partitioning (10n + 2n)',
        steps: [
          {
            stepNumber: 1,
            title: `Ten Part: ${other} × 10 = ${part10}`,
            subVocalization: `Hold ten: "${part10}"`,
            intermediateValue: part10,
            explanation: `${other} × 10 = ${part10}. Hold this in working memory.`,
          },
          {
            stepNumber: 2,
            title: `Double Part: ${other} × 2 = ${part2}`,
            subVocalization: `Double is: "${part2}"`,
            intermediateValue: part2,
            explanation: `${other} × 2 = ${part2}.`,
          },
          {
            stepNumber: 3,
            title: `Sum Parts: ${part10} + ${part2} = ${finalProd}`,
            subVocalization: `Sum: "${finalProd}"`,
            intermediateValue: finalProd,
            explanation: `Combine decade and double: ${part10} + ${part2} = ${finalProd}.`,
          },
        ],
        mentalTip: 'Think of 12 as 10 + 2. A decade plus a double is painless to compute mentally.',
        verifiedResult: finalProd,
      };
    },
  },

  fifteens_half_ten: {
    id: 'fifteens_half_ten',
    name: 'Fifteens Method (10n + 5n)',
    category: 'multiplication',
    mentalScript: 'Multiply by 10, take half of that value, and sum them.',
    prerequisites: ['Multiply by 10', 'Halving (÷2)'],
    isApplicable: (a, b) => a === 15 || b === 15,
    generateWorkedExample: (a, b = 1) => {
      const other = a === 15 ? b : a;
      const tenPart = other * 10;
      const halfPart = tenPart / 2;
      const finalProd = tenPart + halfPart;
      return {
        strategyTitle: 'Fifteens Method (10n + half)',
        steps: [
          {
            stepNumber: 1,
            title: `Multiply by 10 (${other} × 10 = ${tenPart})`,
            subVocalization: `Ten base: "${tenPart}"`,
            intermediateValue: tenPart,
            explanation: `${other} × 10 = ${tenPart}.`,
          },
          {
            stepNumber: 2,
            title: `Halve Decade Result (${tenPart} ÷ 2 = ${halfPart})`,
            subVocalization: `Half is: "${halfPart}"`,
            intermediateValue: halfPart,
            explanation: `Half of ${tenPart} is ${halfPart}.`,
          },
          {
            stepNumber: 3,
            title: `Add Parts (${tenPart} + ${halfPart} = ${finalProd})`,
            subVocalization: `Total: "${finalProd}"`,
            intermediateValue: finalProd,
            explanation: `${tenPart} + ${halfPart} = ${finalProd}.`,
          },
        ],
        mentalTip: '15 is 10 plus half of 10. Once you have the 10x value, simply add its half.',
        verifiedResult: finalProd,
      };
    },
  },

  twenty_fives_quarter_hundred: {
    id: 'twenty_fives_quarter_hundred',
    name: 'Quarter-Hundred Method (×25 = ×100 ÷ 4)',
    category: 'multiplication',
    mentalScript: 'Multiply by 100 (append 00), then divide by 4 (halve twice).',
    prerequisites: ['Halving twice (÷4)', 'Hundreds scaling'],
    isApplicable: (a, b) => a === 25 || b === 25,
    generateWorkedExample: (a, b = 1) => {
      const other = a === 25 ? b : a;
      const hundredPart = other * 100;
      const finalProd = hundredPart / 4;
      return {
        strategyTitle: 'Quarter-Hundred Method (×100 ÷ 4)',
        steps: [
          {
            stepNumber: 1,
            title: `Append 00 (${other} × 100 = ${hundredPart})`,
            subVocalization: `Hundreds: "${hundredPart}"`,
            intermediateValue: hundredPart,
            explanation: `${other} × 100 = ${hundredPart}.`,
          },
          {
            stepNumber: 2,
            title: `Divide by 4 (${hundredPart} ÷ 4 = ${finalProd})`,
            subVocalization: `Halve twice: "${finalProd}"`,
            intermediateValue: finalProd,
            explanation: `Half of ${hundredPart} is ${hundredPart / 2}, and half again is ${finalProd}.`,
          },
        ],
        mentalTip: 'Never multiply by 25 directly. Halve twice and scale by 100.',
        verifiedResult: finalProd,
      };
    },
  },

  half_and_double: {
    id: 'half_and_double',
    name: 'Half-and-Double Transformation',
    category: 'multiplication',
    mentalScript: 'Halve the even number, double the 5-ending number, multiply the simpler pair.',
    prerequisites: ['Halving even numbers', 'Doubling 5-ending numbers'],
    contraindications: 'Do not use unless one operand is even and the other ends in 5.',
    verificationMethod: 'Parity check and simplified base comparison.',
    isApplicable: (a, b) => (a % 2 === 0 && b !== undefined && b % 5 === 0) || (b !== undefined && b % 2 === 0 && a % 5 === 0),
    generateWorkedExample: (a, b = 1) => {
      const even = a % 2 === 0 ? a : b;
      const five = a % 2 === 0 ? b : a;
      const halved = even / 2;
      const doubled = five * 2;
      const finalProd = halved * doubled;
      return {
        strategyTitle: 'Half-and-Double Strategy',
        steps: [
          {
            stepNumber: 1,
            title: `Halve Even (${even} ÷ 2 = ${halved}) & Double 5 (${five} × 2 = ${doubled})`,
            subVocalization: `New pair: "${halved} × ${doubled}"`,
            intermediateValue: `${halved} × ${doubled}`,
            explanation: `Halve ${even} to ${halved}. Double ${five} to ${doubled}. Total product is invariant.`,
          },
          {
            stepNumber: 2,
            title: `Calculate Simplified Product (${halved} × ${doubled} = ${finalProd})`,
            subVocalization: `Product: "${finalProd}"`,
            intermediateValue: finalProd,
            explanation: `${halved} × ${doubled} = ${finalProd}.`,
          },
        ],
        mentalTip: 'Anytime you see a 5-ending number paired with an even number, double and halve immediately.',
        verifiedResult: finalProd,
      };
    },
  },

  multiplication_split_add: {
    id: 'multiplication_split_add',
    name: 'Split-and-Add Distributive Decomposition',
    category: 'multiplication',
    mentalScript: 'Break into tens and units: multiply tens chunk, multiply units chunk, sum left-to-right.',
    prerequisites: ['Decade multiplication', 'Single digit multiplication', 'Left-to-Right addition'],
    verificationMethod: 'Units digit must equal (unitA × unitB) % 10.',
    isApplicable: (a, b) => (a > 12 && b !== undefined && b <= 20) || (b !== undefined && b > 12 && a <= 20),
    generateWorkedExample: (a, b = 1) => {
      const big = Math.max(a, b);
      const small = Math.min(a, b);
      const tens = Math.floor(big / 10) * 10;
      const units = big % 10;
      const part1 = tens * small;
      const part2 = units * small;
      const finalProd = part1 + part2;
      return {
        strategyTitle: 'Split-and-Add Distributive Method',
        steps: [
          {
            stepNumber: 1,
            title: `Multiply Tens Chunk (${tens} × ${small} = ${part1})`,
            subVocalization: `Hold tens part: "${part1}"`,
            intermediateValue: part1,
            explanation: `Decompose ${big} into ${tens} + ${units}. First chunk: ${tens} × ${small} = ${part1}.`,
          },
          {
            stepNumber: 2,
            title: `Multiply Units Chunk (${units} × ${small} = ${part2})`,
            subVocalization: `Units part: "${part2}"`,
            intermediateValue: part2,
            explanation: `Second chunk: ${units} × ${small} = ${part2}.`,
          },
          {
            stepNumber: 3,
            title: `Accumulate Left-to-Right (${part1} + ${part2} = ${finalProd})`,
            subVocalization: `Accumulate: "${finalProd}"`,
            intermediateValue: finalProd,
            explanation: `Combine: ${part1} + ${part2} = ${finalProd}.`,
          },
        ],
        mentalTip: `Decompose into (${tens} × ${small}) + (${units} × ${small}). Always accumulate left-to-right.`,
        verifiedResult: finalProd,
      };
    },
  },

  rounding_compensation_over: {
    id: 'rounding_compensation_over',
    name: 'Rounding Up & Subtractive Compensation',
    category: 'multiplication',
    mentalScript: 'Round operand ending in 8 or 9 up to next decade, multiply, subtract the overhang.',
    prerequisites: ['Decade scaling', 'Single-digit multiplication', 'Subtraction'],
    isApplicable: (a, b) => a % 10 === 8 || a % 10 === 9 || (b !== undefined && (b % 10 === 8 || b % 10 === 9)),
    generateWorkedExample: (a, b = 1) => {
      const target = a % 10 === 8 || a % 10 === 9 ? a : b;
      const other = target === a ? b : a;
      const rounded = Math.ceil(target / 10) * 10;
      const deficit = rounded - target;
      const baseProd = rounded * other;
      const compVal = deficit * other;
      const finalProd = baseProd - compVal;
      return {
        strategyTitle: 'Rounding & Overhang Compensation',
        steps: [
          {
            stepNumber: 1,
            title: `Round Up (${target} -> ${rounded}) & Multiply (${rounded} × ${other} = ${baseProd})`,
            subVocalization: `Base product: "${baseProd}"`,
            intermediateValue: baseProd,
            explanation: `Round ${target} up by ${deficit} to ${rounded}. Base: ${rounded} × ${other} = ${baseProd}.`,
          },
          {
            stepNumber: 2,
            title: `Subtract Overhang (${deficit} × ${other} = ${compVal})`,
            subVocalization: `Take away ${compVal} -> "${finalProd}"`,
            intermediateValue: finalProd,
            explanation: `${baseProd} - ${compVal} = ${finalProd}.`,
          },
        ],
        mentalTip: `Numbers ending in 8 or 9 are close to a decade. Calculate (${rounded} × ${other}) - (${deficit} × ${other}).`,
        verifiedResult: finalProd,
      };
    },
  },

  // -------------------------------------------------------------
  // SQUARES STRATEGIES
  // -------------------------------------------------------------
  square_anchor_recall: {
    id: 'square_anchor_recall',
    name: 'Square Foundation Anchor Recall',
    category: 'square',
    mentalScript: 'Direct square recall for foundations 1² to 20².',
    prerequisites: ['Square table 1-20'],
    verificationMethod: 'Units digit must match base unit square.',
    isApplicable: (n) => n <= 20,
    generateWorkedExample: (n) => {
      const sq = n * n;
      return {
        strategyTitle: 'Direct Square Anchor Recall',
        steps: [
          {
            stepNumber: 1,
            title: `Square Anchor (${n}² = ${sq})`,
            subVocalization: `Anchor: "${sq}"`,
            intermediateValue: sq,
            explanation: `${n}² is a core benchmark square. Internalize through rapid direct retrieval.`,
          },
        ],
        mentalTip: 'Memorize 1² through 20² as bedrock anchors for the entire square curriculum.',
        verifiedResult: sq,
      };
    },
  },

  square_ending_5: {
    id: 'square_ending_5',
    name: 'Ekadhikena Rule (Numbers Ending in 5)',
    category: 'square',
    mentalScript: 'Multiply leading tens by (tens + 1), append 25.',
    prerequisites: ['Single digit multiplication', 'Decade recognition'],
    verificationMethod: 'Result must always terminate in 25.',
    isApplicable: (n) => n % 10 === 5,
    generateWorkedExample: (n) => {
      const tens = Math.floor(n / 10);
      const prefix = tens * (tens + 1);
      const sq = n * n;
      return {
        strategyTitle: 'Ekadhikena Rule: n5² = n(n+1) | 25',
        steps: [
          {
            stepNumber: 1,
            title: `Multiply Leading Prefix: ${tens} × (${tens} + 1) = ${prefix}`,
            subVocalization: `Leading chunk: "${prefix}"`,
            intermediateValue: prefix,
            explanation: `Take the leading digit(s) ${tens}. Multiply by the next integer (${tens + 1}): ${tens} × ${tens + 1} = ${prefix}.`,
          },
          {
            stepNumber: 2,
            title: 'Append Constant 25',
            subVocalization: `Join: "${prefix}" and "25" -> "${sq}"`,
            intermediateValue: sq,
            explanation: `Every number ending in 5 squares to end in 25. Combine ${prefix} and 25 to get ${sq}.`,
          },
        ],
        mentalTip: `For ${n}², multiply ${tens} × ${tens + 1} = ${prefix}, then attach 25 at the end.`,
        verifiedResult: sq,
      };
    },
  },

  square_near_50: {
    id: 'square_near_50',
    name: 'Base-50 Offset Pattern: (50 ± d)² = (25 ± d) | d²',
    category: 'square',
    mentalScript: 'Find distance d from 50. Leading part is 25 ± d, trailing part is d² (2 digits).',
    prerequisites: ['Base-50 distance', 'Single digit squares', 'Two-digit padding'],
    verificationMethod: 'Estimate against 50² = 2500.',
    isApplicable: (n) => n >= 40 && n <= 60 && n !== 50,
    generateWorkedExample: (n) => {
      const diff = n - 50;
      const basePart = 25 + diff;
      const sqPart = diff * diff;
      const strSq = sqPart < 10 ? `0${sqPart}` : `${sqPart}`;
      const sq = n * n;
      return {
        strategyTitle: 'Base-50 Offset Shortcut: (25 ± d) | d²',
        steps: [
          {
            stepNumber: 1,
            title: `Determine Distance from 50: ${n} - 50 = ${diff >= 0 ? '+' : ''}${diff}`,
            subVocalization: `Distance d: "${diff}"`,
            intermediateValue: diff,
            explanation: `${n} is ${diff >= 0 ? '+' : ''}${diff} away from benchmark 50.`,
          },
          {
            stepNumber: 2,
            title: `Leading Chunk (25 ${diff >= 0 ? '+' : '-'} ${Math.abs(diff)} = ${basePart})`,
            subVocalization: `Leading digits: "${basePart}"`,
            intermediateValue: basePart,
            explanation: `Add distance to 25: 25 + (${diff}) = ${basePart}.`,
          },
          {
            stepNumber: 3,
            title: `Square Distance ((${diff})² = ${strSq}) & Concatenate`,
            subVocalization: `Combine "${basePart}" + "${strSq}" -> "${sq}"`,
            intermediateValue: sq,
            explanation: `Square the difference: (${diff})² = ${sqPart}. Pad to 2 digits: ${strSq}. Final = ${sq}.`,
          },
        ],
        mentalTip: `Distance from 50 is ${diff}. 25 + ${diff} = ${basePart}, followed by ${strSq} gives ${sq}.`,
        verifiedResult: sq,
      };
    },
  },

  square_near_100: {
    id: 'square_near_100',
    name: 'Base-100 Deficiency Pattern: (100 - d)² = (100 - 2d) | d²',
    category: 'square',
    mentalScript: 'Find deficit d from 100. Subtract d from the number, append d² (2 digits).',
    prerequisites: ['Base-100 complement', 'Single digit squares', 'Two-digit padding'],
    isApplicable: (n) => n >= 80 && n <= 99,
    generateWorkedExample: (n) => {
      const d = 100 - n;
      const leadingPart = n - d;
      const dSq = d * d;
      const strDSq = dSq < 10 ? `0${dSq}` : `${dSq}`;
      const sq = n * n;
      return {
        strategyTitle: 'Base-100 Deficiency Shortcut: (n - d) | d²',
        steps: [
          {
            stepNumber: 1,
            title: `Calculate Deficit from 100: 100 - ${n} = ${d}`,
            subVocalization: `Deficit: "${d}"`,
            intermediateValue: d,
            explanation: `${n} is ${d} below 100.`,
          },
          {
            stepNumber: 2,
            title: `Leading Chunk: ${n} - ${d} = ${leadingPart}`,
            subVocalization: `Leading: "${leadingPart}"`,
            intermediateValue: leadingPart,
            explanation: `Subtract the deficit from the number: ${n} - ${d} = ${leadingPart}.`,
          },
          {
            stepNumber: 3,
            title: `Square Deficit (${d}² = ${strDSq}) & Concatenate`,
            subVocalization: `Combine: "${leadingPart}" + "${strDSq}" -> "${sq}"`,
            intermediateValue: sq,
            explanation: `Square the deficit: ${d}² = ${dSq}. Pad to 2 digits: ${strDSq}. Final = ${sq}.`,
          },
        ],
        mentalTip: `${n} is ${d} away from 100. (${n} - ${d} = ${leadingPart}) followed by ${d}² (${strDSq}) gives ${sq}.`,
        verifiedResult: sq,
      };
    },
  },

  square_decade: {
    id: 'square_decade',
    name: 'Decade Square Anchor: (10k)² = k² × 100',
    category: 'square',
    mentalScript: 'Square the leading digit, append two zeroes.',
    prerequisites: ['Single-digit squares', 'Decade scaling'],
    isApplicable: (n) => n % 10 === 0,
    generateWorkedExample: (n) => {
      const k = n / 10;
      const kSq = k * k;
      const sq = n * n;
      return {
        strategyTitle: 'Decade Square Anchor',
        steps: [
          {
            stepNumber: 1,
            title: `Square Leading Digit: ${k}² = ${kSq}`,
            subVocalization: `Base square: "${kSq}"`,
            intermediateValue: kSq,
            explanation: `Square the non-zero leading digit: ${k}² = ${kSq}.`,
          },
          {
            stepNumber: 2,
            title: `Append Two Zeroes (× 100): ${kSq} × 100 = ${sq}`,
            subVocalization: `Append 00 -> "${sq}"`,
            intermediateValue: sq,
            explanation: `Multiplying by 100 appends two zeroes: ${kSq}00 = ${sq}.`,
          },
        ],
        mentalTip: 'Square the leading digit and append two zeros.',
        verifiedResult: sq,
      };
    },
  },

  square_duplex_decomposition: {
    id: 'square_duplex_decomposition',
    name: 'Algebraic Duplex Decomposition: (a + b)² = a² + 2ab + b²',
    category: 'square',
    mentalScript: 'Split into tens and units: tens², plus 2 × tens × units, plus units².',
    prerequisites: ['Decade squares', 'Multiplication', 'Left-to-Right addition'],
    isApplicable: (n) => n > 20 && n % 10 !== 0 && n % 10 !== 5,
    generateWorkedExample: (n) => {
      const a = Math.floor(n / 10) * 10;
      const b = n % 10;
      const aSq = a * a;
      const cross = 2 * a * b;
      const bSq = b * b;
      const step1 = aSq + cross;
      const sq = n * n;
      return {
        strategyTitle: 'Algebraic Binomial Decomposition: (a+b)²',
        steps: [
          {
            stepNumber: 1,
            title: `Tens Square: ${a}² = ${aSq}`,
            subVocalization: `Tens base: "${aSq}"`,
            intermediateValue: aSq,
            explanation: `Square the tens component: (${a})² = ${aSq}.`,
          },
          {
            stepNumber: 2,
            title: `Cross-Product: 2 × ${a} × ${b} = ${cross}`,
            subVocalization: `Cross: "${cross}"`,
            intermediateValue: cross,
            explanation: `Double product: 2 × ${a} × ${b} = ${cross}.`,
          },
          {
            stepNumber: 3,
            title: `Accumulate Tens + Cross: ${aSq} + ${cross} = ${step1}`,
            subVocalization: `Accumulator: "${step1}"`,
            intermediateValue: step1,
            explanation: `Add the first two terms: ${aSq} + ${cross} = ${step1}.`,
          },
          {
            stepNumber: 4,
            title: `Add Units Square: ${step1} + ${b}² = ${sq}`,
            subVocalization: `Final: "${sq}"`,
            intermediateValue: sq,
            explanation: `Units squared: ${b}² = ${bSq}. Final sum: ${step1} + ${bSq} = ${sq}.`,
          },
        ],
        mentalTip: `Split ${n} into ${a} + ${b}. Accumulate ${aSq} + ${cross} + ${bSq} = ${sq}.`,
        verifiedResult: sq,
      };
    },
  },

  // -------------------------------------------------------------
  // CUBES STRATEGIES
  // -------------------------------------------------------------
  cube_anchor_recall: {
    id: 'cube_anchor_recall',
    name: 'Cube Core Anchor Recall',
    category: 'cube',
    mentalScript: 'Direct cube anchor recall for benchmarks 1³ to 20³.',
    prerequisites: ['Cube anchor benchmarks'],
    verificationMethod: 'Last digit recurrence rule check.',
    isApplicable: (n) => n <= 20,
    generateWorkedExample: (n) => {
      const cb = n * n * n;
      return {
        strategyTitle: 'Core Cube Anchor Recall',
        steps: [
          {
            stepNumber: 1,
            title: `Retrieve Cube Anchor: ${n}³ = ${cb.toLocaleString()}`,
            subVocalization: `Cube anchor: "${cb}"`,
            intermediateValue: cb,
            explanation: `${n}³ = ${cb.toLocaleString()} is an essential anchor cube. Commit to rapid memory.`,
          },
        ],
        mentalTip: `Memorize ${n}³ = ${cb.toLocaleString()} as a high-frequency benchmark.`,
        verifiedResult: cb,
      };
    },
  },

  cube_decade: {
    id: 'cube_decade',
    name: 'Decade Cube Anchor: (10k)³ = k³ × 1000',
    category: 'cube',
    mentalScript: 'Cube the leading digit, append three zeroes.',
    prerequisites: ['Single-digit cubes', 'Thousands scaling'],
    isApplicable: (n) => n % 10 === 0,
    generateWorkedExample: (n) => {
      const k = n / 10;
      const kCb = k * k * k;
      const cb = n * n * n;
      return {
        strategyTitle: 'Decade Cube Anchor',
        steps: [
          {
            stepNumber: 1,
            title: `Cube Leading Digit: ${k}³ = ${kCb}`,
            subVocalization: `Base cube: "${kCb}"`,
            intermediateValue: kCb,
            explanation: `Cube the non-zero leading digit: ${k}³ = ${kCb}.`,
          },
          {
            stepNumber: 2,
            title: `Append Three Zeroes (× 1000): ${kCb} × 1000 = ${cb.toLocaleString()}`,
            subVocalization: `Append 000 -> "${cb}"`,
            intermediateValue: cb,
            explanation: `Scaling by 1000 appends three zeroes: ${kCb}000 = ${cb.toLocaleString()}.`,
          },
        ],
        mentalTip: 'Cube the leading digit and append three zeroes.',
        verifiedResult: cb,
      };
    },
  },

  cube_near_decade_binomial: {
    id: 'cube_near_decade_binomial',
    name: 'Near-Decade Binomial Expansion: (a ± b)³',
    category: 'cube',
    mentalScript: 'Expand around nearest decade a: a³ ± 3a²b + 3ab² ± b³.',
    prerequisites: ['Decade cubes', 'Multiplication', 'Stepwise accumulation'],
    isApplicable: (n) => n > 20 && Math.abs(n - Math.round(n / 10) * 10) <= 2,
    generateWorkedExample: (n) => {
      const nearestDecade = Math.round(n / 10) * 10;
      const b = n - nearestDecade; // can be +1, +2, -1, -2
      const a = nearestDecade;
      const a3 = a * a * a;
      const term2 = 3 * a * a * b;
      const term3 = 3 * a * b * b;
      const term4 = b * b * b;
      const cb = n * n * n;
      return {
        strategyTitle: 'Near-Decade Binomial Cube Expansion',
        steps: [
          {
            stepNumber: 1,
            title: `Decade Anchor: ${a}³ = ${a3.toLocaleString()}`,
            subVocalization: `Anchor: "${a3}"`,
            intermediateValue: a3,
            explanation: `Base decade: ${a}³ = ${a3.toLocaleString()}.`,
          },
          {
            stepNumber: 2,
            title: `First Linear Term: 3a²b = 3 × ${a * a} × (${b}) = ${term2.toLocaleString()}`,
            subVocalization: `Term 2: "${term2}"`,
            intermediateValue: term2,
            explanation: `3 × (${a})² × (${b}) = ${term2.toLocaleString()}.`,
          },
          {
            stepNumber: 3,
            title: `Second Term + Unit Cube: 3ab² + b³ = ${(term3 + term4).toLocaleString()}`,
            subVocalization: `Adjustment: "${term3 + term4}"`,
            intermediateValue: term3 + term4,
            explanation: `3 × ${a} × (${b})² + (${b})³ = ${term3} + ${term4} = ${term3 + term4}.`,
          },
          {
            stepNumber: 4,
            title: `Accumulate Total: ${a3} + ${term2} + ${term3 + term4} = ${cb.toLocaleString()}`,
            subVocalization: `Final cube: "${cb}"`,
            intermediateValue: cb,
            explanation: `Sum all binomial components: ${a3} + (${term2}) + (${term3 + term4}) = ${cb.toLocaleString()}.`,
          },
        ],
        mentalTip: `Expand around ${a}: ${a}³ (${a3.toLocaleString()}) plus linear slope ${term2.toLocaleString()} gives ${cb.toLocaleString()}.`,
        verifiedResult: cb,
      };
    },
  },
};

/**
 * Resolves the optimal mental math strategy definition for any given fact key.
 */
export function getBestStrategyForFact(factKey: FactKey): StrategyDefinition {
  const parsed = parseFactKey(factKey);
  if (!parsed.isValid) return STRATEGY_CATALOG.direct_recall_anchor;

  const a = parsed.operandA;
  const b = parsed.operandB || 1;

  if (parsed.type === 'multiplication') {
    if (a === 0 || b === 0 || a === 1 || b === 1) return STRATEGY_CATALOG.zeros_ones_foundations;
    if (a === 100 || b === 100) return STRATEGY_CATALOG.hundreds_double_zero;
    if (a === 75 || b === 75) return STRATEGY_CATALOG.seventy_fives_three_quarters;
    if (a === 50 || b === 50) return STRATEGY_CATALOG.fifties_half_hundred;
    if (a === 20 || b === 20) return STRATEGY_CATALOG.twenties_double_decade;
    if (a === 25 || b === 25) return STRATEGY_CATALOG.twenty_fives_quarter_hundred;
    if (a >= 88 && a <= 99 && b >= 88 && b <= 99) return STRATEGY_CATALOG.near_hundred_multiplication;
    if (a === 15 || b === 15) return STRATEGY_CATALOG.fifteens_half_ten;
    if (a === 12 || b === 12) return STRATEGY_CATALOG.twelves_partition;
    if (a === 11 || b === 11) return STRATEGY_CATALOG.elevens_pattern;
    if (a === 9 || b === 9) return STRATEGY_CATALOG.nines_compensation;
    if (a === 5 || b === 5) return STRATEGY_CATALOG.fives_half_decade;
    if (a === 2 || b === 2) return STRATEGY_CATALOG.twos_doubling;
    if (a % 10 === 0 || b % 10 === 0) return STRATEGY_CATALOG.decade_scaling;
    if ((a % 2 === 0 && b % 5 === 0) || (b % 2 === 0 && a % 5 === 0)) return STRATEGY_CATALOG.half_and_double;
    if (a % 10 === 8 || a % 10 === 9 || b % 10 === 8 || b % 10 === 9) return STRATEGY_CATALOG.rounding_compensation_over;
    if (a <= 12 && b <= 12) return STRATEGY_CATALOG.direct_recall_anchor;
    return STRATEGY_CATALOG.multiplication_split_add;
  }

  if (parsed.type === 'square') {
    if (a % 10 === 0) return STRATEGY_CATALOG.square_decade;
    if (a % 10 === 5) return STRATEGY_CATALOG.square_ending_5;
    if (a <= 20) return STRATEGY_CATALOG.square_anchor_recall;
    if (a >= 41 && a <= 59) return STRATEGY_CATALOG.square_near_50;
    if (a >= 81 && a <= 99) return STRATEGY_CATALOG.square_near_100;
    return STRATEGY_CATALOG.square_duplex_decomposition;
  }

  if (parsed.type === 'cube') {
    if (a % 10 === 0) return STRATEGY_CATALOG.cube_decade;
    if (a <= 20) return STRATEGY_CATALOG.cube_anchor_recall;
    if (Math.abs(a - Math.round(a / 10) * 10) <= 2) return STRATEGY_CATALOG.cube_near_decade_binomial;
    return STRATEGY_CATALOG.cube_anchor_recall;
  }

  return STRATEGY_CATALOG.direct_recall_anchor;
}
