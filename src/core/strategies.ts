/**
 * Pedagogy & Mental Strategy Decomposition Engine
 * Generates plain-English and step-by-step algorithms explaining how to calculate each problem mentally.
 */

import { CalculationStep } from './types';

/**
 * Decomposes Addition using Left-to-Right Accumulator
 */
export function getAdditionStrategy(a: number, b: number): {
  strategyTitle: string;
  steps: CalculationStep[];
  mentalTip: string;
} {
  const steps: CalculationStep[] = [];
  const sum = a + b;

  if (a < 100 && b < 10) {
    // 2-digit + 1-digit
    const unitsA = a % 10;
    const tensA = Math.floor(a / 10) * 10;
    const bridges = unitsA + b >= 10;

    if (bridges) {
      const neededForDecade = 10 - unitsA;
      const remainder = b - neededForDecade;
      const targetDecade = tensA + 10;

      steps.push({
        stepNumber: 1,
        title: `Bridge to Next Decade (${a} + ${neededForDecade} -> ${targetDecade})`,
        subVocalization: `Target decade: "${targetDecade}"`,
        intermediateValue: targetDecade,
        explanation: `${a} needs ${neededForDecade} to reach ${targetDecade}. Split ${b} into ${neededForDecade} and ${remainder}.`,
      });
      steps.push({
        stepNumber: 2,
        title: `Add Remaining Units (${targetDecade} + ${remainder})`,
        subVocalization: `Resolve to: "${sum}"`,
        intermediateValue: sum,
        explanation: `${targetDecade} + ${remainder} = ${sum}.`,
      });
    } else {
      steps.push({
        stepNumber: 1,
        title: 'Direct Unit Addition (No Bridging)',
        subVocalization: `Hold ${tensA}, add units (${unitsA} + ${b} = ${unitsA + b})`,
        intermediateValue: sum,
        explanation: `Tens remain unchanged (${tensA}). Add units directly: ${unitsA} + ${b} = ${unitsA + b}. Final sum = ${sum}.`,
      });
    }
    return {
      strategyTitle: bridges ? 'Decade Bridging Method' : 'Direct Unit Addition',
      steps,
      mentalTip: 'Always anchor the decade first. Step forward along the mental number line instead of paper carries.',
    };
  }

  // General Left-to-Right Accumulator for 2-digit, 3-digit, 4-digit, 5-digit
  const strA = a.toString();
  const strB = b.toString();
  const maxLen = Math.max(strA.length, strB.length);
  const padA = strA.padStart(maxLen, '0');
  const padB = strB.padStart(maxLen, '0');

  let accumulator = 0;
  let stepCount = 1;

  for (let i = 0; i < maxLen; i++) {
    const power = Math.pow(10, maxLen - 1 - i);
    const digitA = parseInt(padA[i], 10);
    const digitB = parseInt(padB[i], 10);
    const valPart = (digitA + digitB) * power;
    accumulator += valPart;

    const placeName =
      power === 10000
        ? 'Ten-Thousands'
        : power === 1000
        ? 'Thousands'
        : power === 100
        ? 'Hundreds'
        : power === 10
        ? 'Tens'
        : 'Units';

    steps.push({
      stepNumber: stepCount++,
      title: `Accumulate ${placeName} (${digitA * power} + ${digitB * power})`,
      subVocalization: `Hold echo: "${accumulator}"`,
      intermediateValue: accumulator,
      explanation: `Add place values: ${digitA * power} + ${digitB * power} = ${valPart}. Running accumulator becomes ${accumulator}.`,
    });
  }

  return {
    strategyTitle: 'Left-to-Right Accumulator Method',
    steps,
    mentalTip: 'Maintain the running sum in your auditory phonological loop. Never carry right-to-left.',
  };
}

/**
 * Decomposes Subtraction using Left-to-Right & Complements
 */
export function getSubtractionStrategy(a: number, b: number): {
  strategyTitle: string;
  steps: CalculationStep[];
  mentalTip: string;
} {
  const steps: CalculationStep[] = [];
  const diff = a - b;

  // Level 1: 2-digit - 1-digit
  if (a < 100 && b < 10) {
    const unitA = a % 10;
    const tensA = Math.floor(a / 10) * 10;

    if (unitA >= b) {
      // Direct unit subtraction (no borrow)
      steps.push({
        stepNumber: 1,
        title: 'Direct Unit Subtraction (No Borrowing)',
        subVocalization: `Hold ${tensA}, units are ${unitA} - ${b} = ${unitA - b}`,
        intermediateValue: diff,
        explanation: `Keep tens unchanged (${tensA}). Subtract units directly: ${unitA} - ${b} = ${unitA - b}. Final diff = ${diff}.`,
      });
      return {
        strategyTitle: 'Direct Unit Subtraction',
        steps,
        mentalTip: 'When units digit is larger than subtrahend, subtract units directly without altering tens.',
      };
    } else {
      // Borrowing across decade
      const stepDown = a - unitA; // reaches tensA
      const remainingSub = b - unitA;
      steps.push({
        stepNumber: 1,
        title: `Step Down to Base Decade (${a} - ${unitA} = ${stepDown})`,
        subVocalization: `Anchor decade: "${stepDown}"`,
        intermediateValue: stepDown,
        explanation: `Drop units to reach decade base ${stepDown}. Remaining to subtract: ${b} - ${unitA} = ${remainingSub}.`,
      });
      steps.push({
        stepNumber: 2,
        title: `Subtract Remaining (${stepDown} - ${remainingSub} = ${diff})`,
        subVocalization: `Resolve to: "${diff}"`,
        intermediateValue: diff,
        explanation: `${stepDown} - ${remainingSub} = ${diff}.`,
      });
      return {
        strategyTitle: 'Decade Step-Down Subtraction',
        steps,
        mentalTip: 'Step down to the clean decade first, then subtract the remaining units from 10.',
      };
    }
  }

  // Complements method for numbers ending in 7, 8, 9 with 2 or more digits
  const lastDigitB = b % 10;
  if (lastDigitB >= 7 && b >= 17) {
    const nearestDecade = Math.ceil(b / 10) * 10;
    const complement = nearestDecade - b;
    const intermediate = a - nearestDecade;

    steps.push({
      stepNumber: 1,
      title: `Round Subtrahend to Decade (${b} -> ${nearestDecade})`,
      subVocalization: `Overshot by +${complement}`,
      intermediateValue: nearestDecade,
      explanation: `It is much simpler to subtract clean ${nearestDecade} than ${b}. Complement is ${nearestDecade} - ${b} = ${complement}.`,
    });
    steps.push({
      stepNumber: 2,
      title: `Subtract Decade (${a} - ${nearestDecade})`,
      subVocalization: `Hold intermediate: "${intermediate}"`,
      intermediateValue: intermediate,
      explanation: `${a} - ${nearestDecade} = ${intermediate}.`,
    });
    steps.push({
      stepNumber: 3,
      title: `Refund Complement (${intermediate} + ${complement})`,
      subVocalization: `Resolve to: "${diff}"`,
      intermediateValue: diff,
      explanation: `Because we subtracted ${complement} too much, add it back: ${intermediate} + ${complement} = ${diff}.`,
    });

    return {
      strategyTitle: 'Complements & Compensation Method',
      steps,
      mentalTip: `Round ${b} up to ${nearestDecade}, subtract cleanly, then refund the +${complement}. Eliminates all column borrowing.`,
    };
  }

  // General Left-to-Right Step Subtraction
  const tensB = Math.floor(b / 10) * 10;
  const unitsB = b % 10;
  const step1 = a - tensB;

  steps.push({
    stepNumber: 1,
    title: `Subtract Higher Place Values (${a} - ${tensB})`,
    subVocalization: `Hold: "${step1}"`,
    intermediateValue: step1,
    explanation: `Subtract largest chunk first: ${a} - ${tensB} = ${step1}.`,
  });
  steps.push({
    stepNumber: 2,
    title: `Subtract Remaining Units (${step1} - ${unitsB})`,
    subVocalization: `Resolve to: "${diff}"`,
    intermediateValue: diff,
    explanation: `Subtract units from running total: ${step1} - ${unitsB} = ${diff}.`,
  });

  return {
    strategyTitle: 'Left-to-Right Step Subtraction',
    steps,
    mentalTip: 'Subtract the largest place values first so your estimate is immediately anchored.',
  };
}

/**
 * Decomposes Multiplication (1 to 100 Tables)
 */
export function getMultiplicationStrategy(a: number, b: number): {
  strategyTitle: string;
  steps: CalculationStep[];
  mentalTip: string;
} {
  const steps: CalculationStep[] = [];
  const prod = a * b;

  // Tables 1 to 12
  if (a <= 12 && b <= 12) {
    steps.push({
      stepNumber: 1,
      title: 'Associative Reflex Anchor',
      subVocalization: `Instant recall: "${prod}"`,
      intermediateValue: prod,
      explanation: `${a} × ${b} is a fundamental associative anchor fact. Internalize through rapid flash rhythm.`,
    });
    return {
      strategyTitle: 'Direct Associative Recall',
      steps,
      mentalTip: 'Trigger direct phonological recall without intermediate computation.',
    };
  }

  // Decade multiplier (e.g., 30 × 7, 70 × 6)
  if (a % 10 === 0 || b % 10 === 0) {
    const dec = a % 10 === 0 ? a : b;
    const other = a % 10 === 0 ? b : a;
    const baseMult = (dec / 10) * other;
    steps.push({
      stepNumber: 1,
      title: `Multiply Base Digits (${dec / 10} × ${other} = ${baseMult})`,
      subVocalization: `Base product: "${baseMult}"`,
      intermediateValue: baseMult,
      explanation: `Multiply core non-zero digits: ${dec / 10} × ${other} = ${baseMult}.`,
    });
    steps.push({
      stepNumber: 2,
      title: 'Append Decade Zero (× 10)',
      subVocalization: `Append zero: "${prod}"`,
      intermediateValue: prod,
      explanation: `${baseMult} × 10 = ${prod}.`,
    });
    return {
      strategyTitle: 'Decade Scale Strategy',
      steps,
      mentalTip: 'Scale down by 10, calculate base multiplication, then append the trailing zero.',
    };
  }

  // Half and Double technique: one is even and other ends in 5
  if ((a % 5 === 0 && b % 2 === 0) || (b % 5 === 0 && a % 2 === 0)) {
    const fiveNum = a % 5 === 0 ? a : b;
    const evenNum = a % 5 === 0 ? b : a;
    const doubled = fiveNum * 2;
    const halved = evenNum / 2;

    steps.push({
      stepNumber: 1,
      title: 'Half-and-Double Transformation',
      subVocalization: `${doubled} × ${halved}`,
      intermediateValue: `${doubled} × ${halved}`,
      explanation: `Double ${fiveNum} -> ${doubled}. Halve ${evenNum} -> ${halved}. The product remains identical.`,
    });
    steps.push({
      stepNumber: 2,
      title: 'Execute Simplified Multiplication',
      subVocalization: `Say: "${prod}"`,
      intermediateValue: prod,
      explanation: `${doubled} × ${halved} = ${prod}.`,
    });

    return {
      strategyTitle: 'Half-and-Double Strategy',
      steps,
      mentalTip: 'Anytime you see a 5-ending number paired with an even number, double and halve immediately.',
    };
  }

  // Rounding & Compensation for numbers ending in 8 or 9 (e.g., 29 x 7 or 48 x 6)
  const lastDigitA = a % 10;
  if (lastDigitA === 8 || lastDigitA === 9) {
    const rounded = Math.ceil(a / 10) * 10;
    const deficit = rounded - a;
    const baseProd = rounded * b;
    const compVal = deficit * b;

    steps.push({
      stepNumber: 1,
      title: `Round ${a} to ${rounded} and Multiply (${rounded} × ${b})`,
      subVocalization: `Base: "${baseProd}"`,
      intermediateValue: baseProd,
      explanation: `${rounded} × ${b} = ${baseProd}.`,
    });
    steps.push({
      stepNumber: 2,
      title: `Subtract Overhang (${deficit} × ${b} = ${compVal})`,
      subVocalization: `Resolve to: "${prod}"`,
      intermediateValue: prod,
      explanation: `${baseProd} - ${compVal} = ${prod}.`,
    });

    return {
      strategyTitle: 'Rounding & Compensation',
      steps,
      mentalTip: `Calculate (${rounded} × ${b}) - (${deficit} × ${b}). Much faster than multiplying by ${a}.`,
    };
  }

  // Split-and-Add (e.g., 17 x 6 = 10 x 6 + 7 x 6 = 60 + 42 = 102)
  const bigNum = Math.max(a, b);
  const smallNum = Math.min(a, b);
  const tens = Math.floor(bigNum / 10) * 10;
  const units = bigNum % 10;
  const part1 = tens * smallNum;
  const part2 = units * smallNum;

  steps.push({
    stepNumber: 1,
    title: `Multiply Tens Chunk (${tens} × ${smallNum})`,
    subVocalization: `Hold: "${part1}"`,
    intermediateValue: part1,
    explanation: `${tens} × ${smallNum} = ${part1}.`,
  });
  steps.push({
    stepNumber: 2,
    title: `Multiply Units Chunk (${units} × ${smallNum})`,
    subVocalization: `Units product: "${part2}"`,
    intermediateValue: part2,
    explanation: `${units} × ${smallNum} = ${part2}.`,
  });
  steps.push({
    stepNumber: 3,
    title: `Accumulate Left-to-Right (${part1} + ${part2})`,
    subVocalization: `Say: "${prod}"`,
    intermediateValue: prod,
    explanation: `${part1} + ${part2} = ${prod}.`,
  });

  return {
    strategyTitle: 'Split-and-Add Decomposition',
    steps,
    mentalTip: `Decompose into (${tens} × ${smallNum}) + (${units} × ${smallNum}). Add left-to-right.`,
  };
}

/**
 * Decomposes Squares (1 to 100)
 */
export function getSquareStrategy(n: number): {
  strategyTitle: string;
  steps: CalculationStep[];
  mentalTip: string;
} {
  const steps: CalculationStep[] = [];
  const sq = n * n;

  // Decade square anchor (10, 20, ..., 100)
  if (n % 10 === 0) {
    const base = n / 10;
    const baseSq = base * base;
    steps.push({
      stepNumber: 1,
      title: `Square Base Leading Digit (${base}² = ${baseSq})`,
      subVocalization: `Base square: "${baseSq}"`,
      intermediateValue: baseSq,
      explanation: `${base}² = ${baseSq}.`,
    });
    steps.push({
      stepNumber: 2,
      title: 'Append Two Zeros (× 100)',
      subVocalization: `Append 00: "${sq}"`,
      intermediateValue: sq,
      explanation: `${baseSq} × 100 = ${sq}.`,
    });
    return {
      strategyTitle: 'Decade Square Anchor',
      steps,
      mentalTip: 'Square the non-zero leading digit and append two zeros.',
    };
  }

  // Ending in 5: N5^2 = N * (N + 1) | 25
  if (n % 10 === 5) {
    const prefix = Math.floor(n / 10);
    const mult = prefix * (prefix + 1);

    steps.push({
      stepNumber: 1,
      title: `Multiply Leading Prefix by (Prefix + 1): ${prefix} × ${prefix + 1}`,
      subVocalization: `${prefix} × ${prefix + 1} = ${mult}`,
      intermediateValue: mult,
      explanation: `${prefix} × (${prefix} + 1) = ${mult}. This forms the leading portion of the answer.`,
    });
    steps.push({
      stepNumber: 2,
      title: 'Append Constant 25',
      subVocalization: `Combine "${mult}" and "25" -> "${sq}"`,
      intermediateValue: sq,
      explanation: `Every square of a number ending in 5 terminates in 25. Combine: ${mult} and 25 = ${sq}.`,
    });

    return {
      strategyTitle: 'Vedic Ekadhikena Rule (Ending in 5)',
      steps,
      mentalTip: `For any number ending in 5, multiply the leading tens by the next integer and append 25.`,
    };
  }

  // Numbers near 50 (40 to 60)
  if (n >= 40 && n <= 60 && n !== 50) {
    const diff = n - 50;
    const basePart = 25 + diff;
    const sqPart = diff * diff;
    const strSq = sqPart < 10 ? `0${sqPart}` : `${sqPart}`;

    steps.push({
      stepNumber: 1,
      title: `Base 25 Offset (25 ${diff >= 0 ? '+' : '-'} ${Math.abs(diff)})`,
      subVocalization: `Leading digits: "${basePart}"`,
      intermediateValue: basePart,
      explanation: `${n} is ${diff >= 0 ? '+' : ''}${diff} away from 50. Leading part is 25 + (${diff}) = ${basePart}.`,
    });
    steps.push({
      stepNumber: 2,
      title: `Square Offset (${Math.abs(diff)}²)`,
      subVocalization: `Trailing digits: "${strSq}"`,
      intermediateValue: strSq,
      explanation: `(${diff})² = ${sqPart}. Pad to two digits: "${strSq}".`,
    });
    steps.push({
      stepNumber: 3,
      title: 'Merge Parts',
      subVocalization: `Say: "${sq}"`,
      intermediateValue: sq,
      explanation: `Combine: ${basePart}${strSq} = ${sq}.`,
    });

    return {
      strategyTitle: 'Base 50 Shortcut',
      steps,
      mentalTip: `Anchor to 25: (25 ± distance) | (distance)². 2-digit pad the square if under 10.`,
    };
  }

  // Numbers near 100 (80 to 99)
  if (n >= 80 && n <= 99) {
    const deficit = 100 - n;
    const leading = n - deficit;
    const sqDeficit = deficit * deficit;
    const strDeficit = sqDeficit < 10 ? `0${sqDeficit}` : `${sqDeficit}`;

    steps.push({
      stepNumber: 1,
      title: `Subtract Deficit from Number (${n} - ${deficit})`,
      subVocalization: `Leading digits: "${leading}"`,
      intermediateValue: leading,
      explanation: `${n} is ${deficit} away from 100. Leading digits: ${n} - ${deficit} = ${leading}.`,
    });
    steps.push({
      stepNumber: 2,
      title: `Square the Deficit (${deficit}²)`,
      subVocalization: `Trailing digits: "${strDeficit}"`,
      intermediateValue: strDeficit,
      explanation: `${deficit}² = ${sqDeficit}. Pad to 2 digits: "${strDeficit}".`,
    });
    steps.push({
      stepNumber: 3,
      title: 'Assemble Number',
      subVocalization: `Say: "${sq}"`,
      intermediateValue: sq,
      explanation: `Combine: ${leading}${strDeficit} = ${sq}.`,
    });

    return {
      strategyTitle: 'Base 100 Deficit Method',
      steps,
      mentalTip: `Subtract deficit from base number, then append the squared deficit as 2 digits.`,
    };
  }

  // General Duplex Method: (a + b)^2 = a^2 + 2ab + b^2
  const tensA = Math.floor(n / 10);
  const unitsB = n % 10;
  const a2 = tensA * tensA * 100;
  const twoAB = 2 * tensA * unitsB * 10;
  const b2 = unitsB * unitsB;

  steps.push({
    stepNumber: 1,
    title: `Square the Tens (${tensA}0² = ${a2})`,
    subVocalization: `Hold: "${a2}"`,
    intermediateValue: a2,
    explanation: `(${tensA} × 10)² = ${a2}.`,
  });
  steps.push({
    stepNumber: 2,
    title: `Add Cross-Product (2 × ${tensA}0 × ${unitsB} = ${twoAB})`,
    subVocalization: `Accumulator: "${a2 + twoAB}"`,
    intermediateValue: a2 + twoAB,
    explanation: `${a2} + ${twoAB} = ${a2 + twoAB}.`,
  });
  steps.push({
    stepNumber: 3,
    title: `Add Units Squared (${unitsB}² = ${b2})`,
    subVocalization: `Say: "${sq}"`,
    intermediateValue: sq,
    explanation: `${a2 + twoAB} + ${b2} = ${sq}.`,
  });

  return {
    strategyTitle: 'Algebraic Duplex: (a + b)²',
    steps,
    mentalTip: `Calculate a² (hundreds), add 2ab (tens), then add b² (units).`,
  };
}

/**
 * Decomposes Cubes (1 to 100)
 */
export function getCubeStrategy(n: number): {
  strategyTitle: string;
  steps: CalculationStep[];
  mentalTip: string;
} {
  const steps: CalculationStep[] = [];
  const cube = n * n * n;
  const unitEnding = n % 10;

  // Unit ending bijection in decimal arithmetic
  const endingPatternMap: Record<number, number> = {
    0: 0,
    1: 1,
    2: 8,
    3: 7,
    4: 4,
    5: 5,
    6: 6,
    7: 3,
    8: 2,
    9: 9,
  };
  const expectedLastDigit = endingPatternMap[unitEnding];

  // Decade Cube Anchor (10, 20, 30, ..., 100)
  if (n % 10 === 0) {
    const base = n / 10;
    const baseCube = base * base * base;
    steps.push({
      stepNumber: 1,
      title: `Cube Leading Base Digit (${base}³ = ${baseCube})`,
      subVocalization: `Base cube: "${baseCube}"`,
      intermediateValue: baseCube,
      explanation: `${base}³ = ${baseCube}.`,
    });
    steps.push({
      stepNumber: 2,
      title: 'Append Three Zeros (× 1000)',
      subVocalization: `Append 000: "${cube}"`,
      intermediateValue: cube,
      explanation: `${baseCube} × 1000 = ${cube}.`,
    });
    return {
      strategyTitle: 'Decade Cube Anchor',
      steps,
      mentalTip: 'Cube the non-zero leading digit and append three zeros.',
    };
  }

  // Foundation cubes 1 to 20
  if (n <= 20) {
    steps.push({
      stepNumber: 1,
      title: 'Foundation Cube Anchor',
      subVocalization: `Instant anchor: "${cube}"`,
      intermediateValue: cube,
      explanation: `${n}³ = ${cube}. Internalize as an instant mental anchor.`,
    });
    steps.push({
      stepNumber: 2,
      title: 'Unit-Digit Consistency Check',
      subVocalization: `Last digit must be ${expectedLastDigit}`,
      intermediateValue: expectedLastDigit,
      explanation: `In base 10, cubing a number ending in ${unitEnding} always terminates in ${expectedLastDigit}.`,
    });

    return {
      strategyTitle: 'Anchor Memorization & Unit Pattern',
      steps,
      mentalTip: `Memorize cubes 1–20 as anchor pegs. Note the unique 1-to-1 last-digit bijection.`,
    };
  }

  // Binomial Expansion (a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3
  const tens = Math.floor(n / 10) * 10;
  const units = n % 10;
  const a3 = tens * tens * tens;
  const step2Part = 3 * tens * tens * units;
  const step3Part = 3 * tens * units * units;
  const b3 = units * units * units;

  steps.push({
    stepNumber: 1,
    title: `Base Decade Cube (${tens}³ = ${a3})`,
    subVocalization: `Hold base: "${a3}"`,
    intermediateValue: a3,
    explanation: `${tens}³ = ${a3}.`,
  });
  steps.push({
    stepNumber: 2,
    title: `First Binomial Cross: 3a²b (3 × ${tens}² × ${units} = ${step2Part})`,
    subVocalization: `Accumulator: "${a3 + step2Part}"`,
    intermediateValue: a3 + step2Part,
    explanation: `3 × (${tens})² × ${units} = ${step2Part}. Running accumulator = ${a3 + step2Part}.`,
  });
  steps.push({
    stepNumber: 3,
    title: `Second Cross & Units: 3ab² + b³ (${step3Part} + ${b3} = ${step3Part + b3})`,
    subVocalization: `Resolve to: "${cube}"`,
    intermediateValue: cube,
    explanation: `Add 3 × ${tens} × ${units}² (${step3Part}) + ${units}³ (${b3}) = ${cube}.`,
  });

  return {
    strategyTitle: 'Binomial Expansion: (a + b)³',
    steps,
    mentalTip: `Decompose into decade + units. Check your result against the last digit: must end in ${expectedLastDigit}.`,
  };
}
