/**
 * Algebra & BODMAS Rules Engine for Mentalis
 * 
 * Generates mathematically rigorous order-of-operations (BODMAS / PEMDAS)
 * and algebraic shortcut mental math problems.
 * 
 * Rules:
 * B: Brackets / Parentheses first
 * O: Orders / Exponents (Powers: Squares, Cubes, Roots)
 * D/M: Division and Multiplication (Left to Right)
 * A/S: Addition and Subtraction (Left to Right)
 * 
 * Integrated Mental Shortcuts:
 * 1. Difference of Squares: a² - b² = (a - b)(a + b)
 * 2. Distributive Factorization: a·b + a·c = a·(b + c)
 * 3. Binomial Expansions: (a + b)² - a² - b² = 2ab
 * 4. Linear Mental Balance Equations: ax + b = c
 */

import { Question, CalculationStep } from './types';

export type BodmasCategory =
  | 'basic_bodmas'
  | 'orders_powers'
  | 'shortcut_identities'
  | 'algebraic_balance';

export interface BodmasProblem {
  id: string;
  category: BodmasCategory;
  expression: string;
  prompt: string;
  answer: number;
  bodmasRule: string;
  steps: CalculationStep[];
  mentalTip: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
}

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Category 1: Foundational BODMAS (Brackets, Multiplication, Division Precedence)
 */
function generateBasicBodmas(difficulty: number = 1): BodmasProblem {
  const type = randInt(1, 4);

  if (type === 1) {
    // Expression: A + B × C or A - B × C
    const B = randInt(3, 9);
    const C = randInt(4, 12);
    const prod = B * C;
    const isAdd = Math.random() > 0.4;
    const A = isAdd ? randInt(10, 50) : randInt(prod + 5, prod + 50);
    const ans = isAdd ? A + prod : A - prod;
    const op = isAdd ? '+' : '-';

    return {
      id: `bodmas_basic_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      category: 'basic_bodmas',
      expression: `${A} ${op} ${B} × ${C}`,
      prompt: `${A} ${op} ${B} × ${C} = ?`,
      answer: ans,
      bodmasRule: 'Multiplication takes precedence over Addition/Subtraction (BODMAS: M before A/S)',
      steps: [
        {
          stepNumber: 1,
          title: 'Multiply First',
          subVocalization: `${B} times ${C} is ${prod}`,
          intermediateValue: prod,
          explanation: `In BODMAS, multiply ${B} × ${C} = ${prod} before doing ${op}.`,
        },
        {
          stepNumber: 2,
          title: isAdd ? 'Add Baseline' : 'Subtract from Baseline',
          subVocalization: `${A} ${op} ${prod} is ${ans}`,
          intermediateValue: ans,
          explanation: `Complete the expression: ${A} ${op} ${prod} = ${ans}.`,
        },
      ],
      mentalTip: `⚠️ Common Trap: Never do ${A} ${op} ${B} first! Multiplication binds tighter than ${op}.`,
      difficulty: difficulty as 1 | 2 | 3 | 4 | 5,
    };
  }

  if (type === 2) {
    // Expression: (A + B) × C or (A - B) × C
    const isAdd = Math.random() > 0.5;
    let A = 0;
    let B = 0;
    let bracketVal = 0;

    if (isAdd) {
      bracketVal = pickRandom([10, 12, 15, 20, 25]);
      A = randInt(2, bracketVal - 2);
      B = bracketVal - A;
    } else {
      bracketVal = pickRandom([6, 8, 10, 12, 15]);
      B = randInt(3, 15);
      A = bracketVal + B;
    }

    const C = randInt(3, 9);
    const ans = bracketVal * C;
    const op = isAdd ? '+' : '-';

    return {
      id: `bodmas_bracket_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      category: 'basic_bodmas',
      expression: `(${A} ${op} ${B}) × ${C}`,
      prompt: `(${A} ${op} ${B}) × ${C} = ?`,
      answer: ans,
      bodmasRule: 'Brackets ALWAYS evaluated first (BODMAS: B comes first)',
      steps: [
        {
          stepNumber: 1,
          title: 'Evaluate Brackets',
          subVocalization: `${A} ${op} ${B} is ${bracketVal}`,
          intermediateValue: bracketVal,
          explanation: `Parentheses dictate priority: (${A} ${op} ${B}) = ${bracketVal}.`,
        },
        {
          stepNumber: 2,
          title: 'Multiply by Outer Factor',
          subVocalization: `${bracketVal} times ${C} is ${ans}`,
          intermediateValue: ans,
          explanation: `Now multiply: ${bracketVal} × ${C} = ${ans}.`,
        },
      ],
      mentalTip: `💡 Brackets create an isolated mental envelope: resolve the interior first!`,
      difficulty: difficulty as 1 | 2 | 3 | 4 | 5,
    };
  }

  if (type === 3) {
    // Expression: A + B ÷ C × D
    const C = randInt(2, 6);
    const quotient = randInt(3, 9);
    const B = C * quotient;
    const D = randInt(2, 5);
    const multVal = quotient * D;
    const A = randInt(10, 40);
    const ans = A + multVal;

    return {
      id: `bodmas_divmult_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      category: 'basic_bodmas',
      expression: `${A} + ${B} ÷ ${C} × ${D}`,
      prompt: `${A} + ${B} ÷ ${C} × ${D} = ?`,
      answer: ans,
      bodmasRule: 'Division and Multiplication have equal precedence; evaluate Left-to-Right',
      steps: [
        {
          stepNumber: 1,
          title: 'Divide Left-to-Right',
          subVocalization: `${B} divided by ${C} is ${quotient}`,
          intermediateValue: quotient,
          explanation: `Evaluate division first in left-to-right flow: ${B} ÷ ${C} = ${quotient}.`,
        },
        {
          stepNumber: 2,
          title: 'Multiply Factor',
          subVocalization: `${quotient} times ${D} is ${multVal}`,
          intermediateValue: multVal,
          explanation: `Multiply the quotient: ${quotient} × ${D} = ${multVal}.`,
        },
        {
          stepNumber: 3,
          title: 'Add Baseline',
          subVocalization: `${A} plus ${multVal} is ${ans}`,
          intermediateValue: ans,
          explanation: `Final addition: ${A} + ${multVal} = ${ans}.`,
        },
      ],
      mentalTip: `💡 Left-to-Right Rule: When Division & Multiplication appear together, evaluate them as they appear from left to right.`,
      difficulty: difficulty as 1 | 2 | 3 | 4 | 5,
    };
  }

  // Type 4: Nested Expression e.g. A × (B + C ÷ D)
  const D = randInt(2, 5);
  const q = randInt(2, 6);
  const C = D * q;
  const B = randInt(3, 10);
  const bracketVal = B + q;
  const A = randInt(3, 8);
  const ans = A * bracketVal;

  return {
    id: `bodmas_nested_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    category: 'basic_bodmas',
    expression: `${A} × (${B} + ${C} ÷ ${D})`,
    prompt: `${A} × (${B} + ${C} ÷ ${D}) = ?`,
    answer: ans,
    bodmasRule: 'Inside Brackets, Division still precedes Addition',
    steps: [
      {
        stepNumber: 1,
        title: 'Divide Inside Bracket',
        subVocalization: `${C} divided by ${D} is ${q}`,
        intermediateValue: q,
        explanation: `Inside the bracket, BODMAS applies: ${C} ÷ ${D} = ${q}.`,
      },
      {
        stepNumber: 2,
        title: 'Sum Inside Bracket',
        subVocalization: `${B} plus ${q} is ${bracketVal}`,
        intermediateValue: bracketVal,
        explanation: `Add the terms: ${B} + ${q} = ${bracketVal}.`,
      },
      {
        stepNumber: 3,
        title: 'Multiply Outer Term',
        subVocalization: `${A} times ${bracketVal} is ${ans}`,
        intermediateValue: ans,
        explanation: `Multiply outer factor: ${A} × ${bracketVal} = ${ans}.`,
      },
    ],
    mentalTip: `🧠 Hierarchy inside hierarchy: Even inside parentheses, Division beats Addition.`,
    difficulty: difficulty as 1 | 2 | 3 | 4 | 5,
  };
}

/**
 * Category 2: Orders / Powers in BODMAS (Squares, Cubes & Roots)
 */
function generateOrdersPowers(difficulty: number = 2): BodmasProblem {
  const type = randInt(1, 3);

  if (type === 1) {
    // A² + B² or A² - B × C
    const A = randInt(4, 12);
    const sqA = A * A;
    const isSumOfSq = Math.random() > 0.5;

    if (isSumOfSq) {
      const B = randInt(3, 10);
      const sqB = B * B;
      const ans = sqA + sqB;
      return {
        id: `bodmas_orders_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        category: 'orders_powers',
        expression: `${A}² + ${B}²`,
        prompt: `${A}² + ${B}² = ?`,
        answer: ans,
        bodmasRule: 'Orders (Exponents) must be calculated before Addition (BODMAS: O before A)',
        steps: [
          {
            stepNumber: 1,
            title: `Compute ${A}²`,
            subVocalization: `${A} squared is ${sqA}`,
            intermediateValue: sqA,
            explanation: `First exponent: ${A}² = ${sqA}.`,
          },
          {
            stepNumber: 2,
            title: `Compute ${B}²`,
            subVocalization: `${B} squared is ${sqB}`,
            intermediateValue: sqB,
            explanation: `Second exponent: ${B}² = ${sqB}.`,
          },
          {
            stepNumber: 3,
            title: 'Sum the Powers',
            subVocalization: `${sqA} plus ${sqB} is ${ans}`,
            intermediateValue: ans,
            explanation: `${sqA} + ${sqB} = ${ans}.`,
          },
        ],
        mentalTip: `⚠️ Never do (${A} + ${B})²! Remember: ${A}² + ${B}² ≠ (${A} + ${B})². Orders always take precedence.`,
        difficulty: difficulty as 1 | 2 | 3 | 4 | 5,
      };
    } else {
      const B = randInt(2, 6);
      const C = randInt(3, 8);
      const prod = B * C;
      const ans = sqA - prod;
      return {
        id: `bodmas_orders_sub_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        category: 'orders_powers',
        expression: `${A}² - ${B} × ${C}`,
        prompt: `${A}² - ${B} × ${C} = ?`,
        answer: ans,
        bodmasRule: 'Orders (O) and Multiplications (M) resolve before Subtraction (S)',
        steps: [
          {
            stepNumber: 1,
            title: `Square ${A}`,
            subVocalization: `${A} squared is ${sqA}`,
            intermediateValue: sqA,
            explanation: `${A}² = ${sqA}.`,
          },
          {
            stepNumber: 2,
            title: `Multiply ${B} × ${C}`,
            subVocalization: `${B} times ${C} is ${prod}`,
            intermediateValue: prod,
            explanation: `${B} × ${C} = ${prod}.`,
          },
          {
            stepNumber: 3,
            title: 'Subtract Product from Square',
            subVocalization: `${sqA} minus ${prod} is ${ans}`,
            intermediateValue: ans,
            explanation: `${sqA} - ${prod} = ${ans}.`,
          },
        ],
        mentalTip: `💡 Both ${A}² and ${B}×${C} can be held in working memory and subtracted cleanly left-to-right.`,
        difficulty: difficulty as 1 | 2 | 3 | 4 | 5,
      };
    }
  }

  if (type === 2) {
    // Expression: (A + B)² ÷ C
    const bracketSum = pickRandom([6, 8, 10, 12, 14]);
    const A = randInt(2, bracketSum - 2);
    const B = bracketSum - A;
    const sqVal = bracketSum * bracketSum;

    // Pick C that divides sqVal evenly
    const validDivisors = [2, 4, 5, 8, 10, 16, 20].filter((d) => sqVal % d === 0);
    const C = validDivisors.length > 0 ? pickRandom(validDivisors) : 2;
    const ans = sqVal / C;

    return {
      id: `bodmas_bracket_power_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      category: 'orders_powers',
      expression: `(${A} + ${B})² ÷ ${C}`,
      prompt: `(${A} + ${B})² ÷ ${C} = ?`,
      answer: ans,
      bodmasRule: 'Brackets (B) then Order/Power (O) then Division (D)',
      steps: [
        {
          stepNumber: 1,
          title: 'Resolve Bracket First',
          subVocalization: `${A} plus ${B} is ${bracketSum}`,
          intermediateValue: bracketSum,
          explanation: `Bracket has top priority: (${A} + ${B}) = ${bracketSum}.`,
        },
        {
          stepNumber: 2,
          title: 'Apply Exponent',
          subVocalization: `${bracketSum} squared is ${sqVal}`,
          intermediateValue: sqVal,
          explanation: `Order/Power comes next: ${bracketSum}² = ${sqVal}.`,
        },
        {
          stepNumber: 3,
          title: 'Divide by Denominator',
          subVocalization: `${sqVal} divided by ${C} is ${ans}`,
          intermediateValue: ans,
          explanation: `Divide: ${sqVal} ÷ ${C} = ${ans}.`,
        },
      ],
      mentalTip: `🎯 Sequential pipeline: Brackets ➔ Exponents ➔ Division.`,
      difficulty: difficulty as 1 | 2 | 3 | 4 | 5,
    };
  }

  // Type 3: Cubes in BODMAS e.g. A³ - B × C
  const A = randInt(2, 5);
  const cubeA = A * A * A;
  const B = randInt(2, 6);
  const C = randInt(2, 5);
  const prod = B * C;
  const ans = cubeA - prod;

  return {
    id: `bodmas_cube_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    category: 'orders_powers',
    expression: `${A}³ - ${B} × ${C}`,
    prompt: `${A}³ - ${B} × ${C} = ?`,
    answer: ans,
    bodmasRule: 'Cubes (Order) evaluate before Subtraction',
    steps: [
      {
        stepNumber: 1,
        title: `Calculate ${A}³`,
        subVocalization: `${A} cubed is ${cubeA}`,
        intermediateValue: cubeA,
        explanation: `${A}³ = ${cubeA}.`,
      },
      {
        stepNumber: 2,
        title: `Multiply ${B} × ${C}`,
        subVocalization: `${B} times ${C} is ${prod}`,
        intermediateValue: prod,
        explanation: `${B} × ${C} = ${prod}.`,
      },
      {
        stepNumber: 3,
        title: 'Subtract Result',
        subVocalization: `${cubeA} minus ${prod} is ${ans}`,
        intermediateValue: ans,
        explanation: `${cubeA} - ${prod} = ${ans}.`,
      },
    ],
    mentalTip: `🧊 Recall cubes instantly: 2³=8, 3³=27, 4³=64, 5³=125.`,
    difficulty: difficulty as 1 | 2 | 3 | 4 | 5,
  };
}

/**
 * Category 3: Shortcut Algebraic Identities Integrated in BODMAS
 * (Difference of Squares, Distributive Law Factorization, Binomial Cancellations)
 */
function generateShortcutIdentities(difficulty: number = 3): BodmasProblem {
  const type = randInt(1, 3);

  if (type === 1) {
    // Identity: a² - b² = (a - b)(a + b) (Difference of Two Squares)
    // Select pairs that sum to a round base like 50, 100, or 200
    const basePairs = [
      { a: 53, b: 47, diff: 6, sum: 100 },
      { a: 56, b: 44, diff: 12, sum: 100 },
      { a: 58, b: 42, diff: 16, sum: 100 },
      { a: 62, b: 38, diff: 24, sum: 100 },
      { a: 75, b: 25, diff: 50, sum: 100 },
      { a: 28, b: 22, diff: 6, sum: 50 },
      { a: 34, b: 16, diff: 18, sum: 50 },
      { a: 105, b: 95, diff: 10, sum: 200 },
      { a: 112, b: 88, diff: 24, sum: 200 },
    ];

    const pair = pickRandom(basePairs);
    const ans = pair.diff * pair.sum;

    return {
      id: `bodmas_identity_diffsq_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      category: 'shortcut_identities',
      expression: `${pair.a}² - ${pair.b}²`,
      prompt: `${pair.a}² - ${pair.b}² = ?`,
      answer: ans,
      bodmasRule: 'Algebraic Shortcut: Difference of Squares a² - b² = (a - b)(a + b)',
      steps: [
        {
          stepNumber: 1,
          title: 'Find Difference (a - b)',
          subVocalization: `${pair.a} minus ${pair.b} is ${pair.diff}`,
          intermediateValue: pair.diff,
          explanation: `Factorize instead of brute squaring: (${pair.a} - ${pair.b}) = ${pair.diff}.`,
        },
        {
          stepNumber: 2,
          title: 'Find Sum (a + b)',
          subVocalization: `${pair.a} plus ${pair.b} is ${pair.sum}`,
          intermediateValue: pair.sum,
          explanation: `Add the two numbers: (${pair.a} + ${pair.b}) = ${pair.sum}.`,
        },
        {
          stepNumber: 3,
          title: 'Multiply Difference × Sum',
          subVocalization: `${pair.diff} times ${pair.sum} is ${ans}`,
          intermediateValue: ans,
          explanation: `Instant result: ${pair.diff} × ${pair.sum} = ${ans}!`,
        },
      ],
      mentalTip: `⚡ Pro Shortcut: NEVER calculate huge squares individually! Notice (${pair.a} + ${pair.b} = ${pair.sum}) and multiply difference × ${pair.sum} in 1 second!`,
      difficulty: difficulty as 1 | 2 | 3 | 4 | 5,
    };
  }

  if (type === 2) {
    // Identity: a·b + a·c = a·(b + c) (Distributive Property Factorization)
    const roundSums = [
      { b: 37, c: 63, sum: 100 },
      { b: 24, c: 76, sum: 100 },
      { b: 48, c: 52, sum: 100 },
      { b: 19, c: 81, sum: 100 },
      { b: 65, c: 35, sum: 100 },
      { b: 14, c: 36, sum: 50 },
      { b: 22, c: 28, sum: 50 },
    ];

    const pair = pickRandom(roundSums);
    const A = randInt(7, 45);
    const ans = A * pair.sum;

    return {
      id: `bodmas_distributive_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      category: 'shortcut_identities',
      expression: `${A} × ${pair.b} + ${A} × ${pair.c}`,
      prompt: `${A} × ${pair.b} + ${A} × ${pair.c} = ?`,
      answer: ans,
      bodmasRule: 'Algebraic Shortcut: Distributive Factorization a·b + a·c = a(b + c)',
      steps: [
        {
          stepNumber: 1,
          title: `Spot Common Factor ${A}`,
          subVocalization: `Factor out ${A}`,
          intermediateValue: A,
          explanation: `Notice ${A} is multiplied in both terms: ${A} × (${pair.b} + ${pair.c}).`,
        },
        {
          stepNumber: 2,
          title: `Sum the Complements (${pair.b} + ${pair.c})`,
          subVocalization: `${pair.b} plus ${pair.c} is ${pair.sum}`,
          intermediateValue: pair.sum,
          explanation: `The terms inside parentheses equal a clean base: ${pair.b} + ${pair.c} = ${pair.sum}.`,
        },
        {
          stepNumber: 3,
          title: `Multiply ${A} × ${pair.sum}`,
          subVocalization: `${A} times ${pair.sum} is ${ans}`,
          intermediateValue: ans,
          explanation: `${A} × ${pair.sum} = ${ans}. Solved without complex long multiplication!`,
        },
      ],
      mentalTip: `💡 Eye of the Grandmaster: When you see repeated multipliers (${A}), pull them out! ${pair.b} + ${pair.c} collapses into ${pair.sum}.`,
      difficulty: difficulty as 1 | 2 | 3 | 4 | 5,
    };
  }

  // Type 3: Binomial Cross-Cancellation e.g. (a + b)² - a² - b² = 2ab
  const A = pickRandom([20, 30, 40, 50]);
  const B = randInt(2, 8);
  const sum = A + B;
  const ans = 2 * A * B;

  return {
    id: `bodmas_binomial_cancel_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    category: 'shortcut_identities',
    expression: `(${A} + ${B})² - ${A}² - ${B}²`,
    prompt: `(${A} + ${B})² - ${A}² - ${B}² = ?`,
    answer: ans,
    bodmasRule: 'Binomial Identity: (a + b)² - a² - b² = 2·a·b',
    steps: [
      {
        stepNumber: 1,
        title: 'Recall Identity Expansion',
        subVocalization: `(a+b)² expands to a² + 2ab + b²`,
        intermediateValue: '2ab',
        explanation: `Expanding (${A} + ${B})² gives ${A}² + 2(${A})(${B}) + ${B}². Subtracting ${A}² and ${B}² leaves strictly 2 × ${A} × ${B}!`,
      },
      {
        stepNumber: 2,
        title: 'Calculate 2 × a × b',
        subVocalization: `2 times ${A} times ${B} is ${ans}`,
        intermediateValue: ans,
        explanation: `2 × ${A} × ${B} = ${2 * A} × ${B} = ${ans}.`,
      },
    ],
    mentalTip: `🚀 Pure Algebraic Magic: Don't compute ${sum}² (${sum * sum})! The a² and b² cancel completely out leaving 2ab!`,
    difficulty: difficulty as 1 | 2 | 3 | 4 | 5,
  };
}

/**
 * Category 4: Algebraic Mental Balance (Solve for x)
 */
function generateAlgebraicBalance(difficulty: number = 3): BodmasProblem {
  const type = randInt(1, 3);

  if (type === 1) {
    // Equation: A·x + B = C
    const A = randInt(2, 7);
    const x = randInt(4, 15);
    const B = randInt(5, 30);
    const C = A * x + B;

    return {
      id: `bodmas_alg_linear_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      category: 'algebraic_balance',
      expression: `${A}x + ${B} = ${C}`,
      prompt: `If ${A}x + ${B} = ${C}, what is x?`,
      answer: x,
      bodmasRule: 'Reverse BODMAS for Equation Solving: Undo Addition/Subtraction first, then Multiplication',
      steps: [
        {
          stepNumber: 1,
          title: `Undo Addition: Subtract ${B}`,
          subVocalization: `${C} minus ${B} is ${C - B}`,
          intermediateValue: C - B,
          explanation: `Isolate term: ${A}x = ${C} - ${B} = ${C - B}.`,
        },
        {
          stepNumber: 2,
          title: `Undo Multiplication: Divide by ${A}`,
          subVocalization: `${C - B} divided by ${A} is ${x}`,
          intermediateValue: x,
          explanation: `x = ${C - B} ÷ ${A} = ${x}.`,
        },
      ],
      mentalTip: `⚖️ Balance scale: When solving for x, reverse BODMAS operations from outside in!`,
      difficulty: difficulty as 1 | 2 | 3 | 4 | 5,
    };
  }

  if (type === 2) {
    // Equation: (x + A) × B = C
    const x = randInt(3, 12);
    const A = randInt(2, 8);
    const bracketVal = x + A;
    const B = randInt(3, 9);
    const C = bracketVal * B;

    return {
      id: `bodmas_alg_bracket_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      category: 'algebraic_balance',
      expression: `(x + ${A}) × ${B} = ${C}`,
      prompt: `If (x + ${A}) × ${B} = ${C}, what is x?`,
      answer: x,
      bodmasRule: 'Divide out the multiplier before opening the bracket',
      steps: [
        {
          stepNumber: 1,
          title: `Divide by ${B}`,
          subVocalization: `${C} divided by ${B} is ${bracketVal}`,
          intermediateValue: bracketVal,
          explanation: `Unwrap bracket: x + ${A} = ${C} ÷ ${B} = ${bracketVal}.`,
        },
        {
          stepNumber: 2,
          title: `Subtract ${A}`,
          subVocalization: `${bracketVal} minus ${A} is ${x}`,
          intermediateValue: x,
          explanation: `x = ${bracketVal} - ${A} = ${x}.`,
        },
      ],
      mentalTip: `💡 Don't distribute ${B}! Divide ${C} ÷ ${B} directly to expose x + ${A}.`,
      difficulty: difficulty as 1 | 2 | 3 | 4 | 5,
    };
  }

  // Type 3: Equation with Squares: x² + B = C
  const x = randInt(3, 12);
  const sqX = x * x;
  const B = randInt(5, 35);
  const C = sqX + B;

  return {
    id: `bodmas_alg_square_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    category: 'algebraic_balance',
    expression: `x² + ${B} = ${C}`,
    prompt: `If x² + ${B} = ${C} (where x > 0), what is x?`,
    answer: x,
    bodmasRule: 'Isolate the power x² then take square root',
    steps: [
      {
        stepNumber: 1,
        title: `Subtract ${B}`,
        subVocalization: `${C} minus ${B} is ${sqX}`,
        intermediateValue: sqX,
        explanation: `x² = ${C} - ${B} = ${sqX}.`,
      },
      {
        stepNumber: 2,
        title: `Square Root of ${sqX}`,
        subVocalization: `Square root of ${sqX} is ${x}`,
        intermediateValue: x,
        explanation: `x = √${sqX} = ${x}.`,
      },
    ],
    mentalTip: `🧠 Subtract first to find the clean square (${sqX}), then root it!`,
    difficulty: difficulty as 1 | 2 | 3 | 4 | 5,
  };
}

/**
 * Universal Generator for BODMAS & Mental Algebra Questions
 */
export function generateBodmasQuestion(
  category?: BodmasCategory,
  difficulty: number = 2
): BodmasProblem {
  const chosenCat =
    category ||
    pickRandom<BodmasCategory>([
      'basic_bodmas',
      'orders_powers',
      'shortcut_identities',
      'algebraic_balance',
    ]);

  switch (chosenCat) {
    case 'basic_bodmas':
      return generateBasicBodmas(difficulty);
    case 'orders_powers':
      return generateOrdersPowers(difficulty);
    case 'shortcut_identities':
      return generateShortcutIdentities(difficulty);
    case 'algebraic_balance':
      return generateAlgebraicBalance(difficulty);
    default:
      return generateBasicBodmas(difficulty);
  }
}

/**
 * Adapter converting BodmasProblem to the unified Question interface for standard practice
 */
export function adaptBodmasToUnifiedQuestion(problem: BodmasProblem): Question {
  return {
    id: problem.id,
    module: 'algebra_bodmas',
    operandA: problem.answer,
    operandB: 0,
    operator: '≈',
    prompt: problem.prompt,
    correctAnswer: problem.answer,
    strategyTitle: problem.bodmasRule,
    steps: problem.steps,
    mentalTip: problem.mentalTip,
    targetTimeSeconds: 4.5,
    difficultyRating: problem.difficulty,
  };
}
