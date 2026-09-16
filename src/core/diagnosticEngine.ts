/**
 * 7-Domain, 9-Tier CAT Adaptive Diagnostic Engine for Mentalis
 *
 * Implements Computerized Adaptive Testing (CAT) across 7 mathematical domains:
 * 1. Tables (1–100)
 * 2. Addition Abilities (single digit to multi-term chains)
 * 3. Subtraction & Complements (100, 1000, 10000 base complements)
 * 4. Multiplication Abilities (2x1, 2x2, Vedic Urdhva Tiryagbhyam)
 * 5. Division Abilities (clean quotients, 2-digit divisors)
 * 6. Squares & Cubes (up to 125² and 30³)
 * 7. Shakuntala Devi Feats (6-digit exact cube roots, instant square roots)
 *
 * Difficulty Tiers (1 to 9):
 * 1: Very Easy | 2: Easy | 3: Normal | 4: Medium | 5: Average
 * 6: Moderate | 7: Hard | 8: Very Hard | 9: Shakuntala Mastery
 */

import { Question, Operator } from './types';
import {
  AssessmentSession,
  AssessmentResponse,
  BaselineReport,
  LearnerProfile,
  SkillDimension,
  DomainProficiencyAnalysis,
  TableDecadeStat,
  updateSkillEstimate,
  getDimensionLabel,
} from './learnerModel';
import {
  FactKey,
  FactMemoryState,
  createInitialFactMemoryState,
  updateFactMemoryStateWithAttempt,
} from './factModel';
import { generateQuestionFromFact } from './factEngine';

export type LearnerArchetype =
  | 'accurate_but_slow'
  | 'fast_but_careless'
  | 'missing_strategy'
  | 'missing_fact'
  | 'confuses_nearby_facts'
  | 'ready_for_advanced';

export type DiagnosticDomain =
  | 'tables'
  | 'addition'
  | 'subtraction'
  | 'multiplication'
  | 'division'
  | 'squares_cubes'
  | 'shakuntala_feats'
  // Backwards compatibility aliases
  | 'add_sub'
  | 'squares'
  | 'cubes'
  | 'working_memory';

export const TIER_NAMES: Record<number, string> = {
  1: 'Very Easy',
  2: 'Easy',
  3: 'Normal',
  4: 'Medium',
  5: 'Average',
  6: 'Moderate',
  7: 'Hard',
  8: 'Very Hard',
  9: 'Shakuntala Mastery',
};

export const DOMAIN_LABELS: Record<string, string> = {
  tables: 'Times Tables 1–100',
  addition: 'Mental Addition Abilities',
  subtraction: 'Subtraction & Complements',
  multiplication: 'Multi-Digit Multiplication',
  division: 'Division & Quotient Finding',
  squares_cubes: 'Squares & Cubes Powers',
  shakuntala_feats: 'Shakuntala Devi Feats & Roots',
  // Aliases
  add_sub: 'Mental Addition & Subtraction',
  squares: 'Squares Powers',
  cubes: 'Cubes Powers',
  working_memory: 'Working Memory Chain',
};

// Balanced rotation of the 7 primary core domains
export const PRIMARY_DIAGNOSTIC_DOMAINS: DiagnosticDomain[] = [
  'tables',
  'addition',
  'subtraction',
  'multiplication',
  'division',
  'squares_cubes',
  'shakuntala_feats',
];

// 24-question sequence alternating tables deeply with all 6 core mental arithmetic domains
const BALANCED_DOMAIN_SEQUENCE: DiagnosticDomain[] = [
  'tables',
  'addition',
  'tables',
  'subtraction',
  'tables',
  'multiplication',
  'tables',
  'division',
  'tables',
  'squares_cubes',
  'tables',
  'shakuntala_feats',
  'tables',
  'addition',
  'tables',
  'subtraction',
  'tables',
  'multiplication',
  'tables',
  'division',
  'tables',
  'squares_cubes',
  'tables',
  'shakuntala_feats',
];

// Helper: Random integer in [min, max]
function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper: Pick random item from array
function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Procedural Question Generator for all 7 Domains × 9 Tiers.
 * Produces diverse, infinite questions with verified step-by-step solutions and mental tips.
 */
export function generateProceduralQuestion(
  domain: DiagnosticDomain,
  tier: number,
  qId: string
): Question {
  const normalizedDomain = normalizeDomain(domain);
  const clampedTier = Math.max(1, Math.min(9, Math.round(tier)));

  switch (normalizedDomain) {
    case 'tables':
      return generateTablesQuestion(clampedTier, qId);
    case 'addition':
      return generateAdditionQuestion(clampedTier, qId);
    case 'subtraction':
      return generateSubtractionQuestion(clampedTier, qId);
    case 'multiplication':
      return generateMultiplicationQuestion(clampedTier, qId);
    case 'division':
      return generateDivisionQuestion(clampedTier, qId);
    case 'squares_cubes':
      return generateSquaresCubesQuestion(clampedTier, qId);
    case 'shakuntala_feats':
      return generateShakuntalaQuestion(clampedTier, qId);
    default:
      return generateTablesQuestion(clampedTier, qId);
  }
}

function normalizeDomain(domain: DiagnosticDomain): 'tables' | 'addition' | 'subtraction' | 'multiplication' | 'division' | 'squares_cubes' | 'shakuntala_feats' {
  if (domain === 'add_sub') return 'addition';
  if (domain === 'squares' || domain === 'cubes') return 'squares_cubes';
  if (domain === 'working_memory') return 'addition';
  return domain as any;
}

// -------------------------------------------------------------
// DOMAIN 1: TABLES (1–100)
// -------------------------------------------------------------
function generateTablesQuestion(tier: number, qId: string): Question {
  let table = 5;
  let mult = 7;
  let mode: 'direct' | 'commutative' | 'missing_factor' | 'division' = 'direct';

  if (tier === 1) {
    // Single-digit foundations: 2, 3, 5, 10
    table = pickRandom([2, 3, 5, 10]);
    mult = randInt(2, 9);
    if (Math.random() > 0.6) mode = 'commutative';
  } else if (tier === 2) {
    // Single-digit core: 6, 7, 8, 9
    table = pickRandom([6, 7, 8, 9]);
    mult = randInt(6, 9);
    if (Math.random() > 0.5) mode = 'commutative';
  } else if (tier === 3) {
    // Foundation teen tables: 11, 12, 13, 14, 15 (lower multipliers)
    table = pickRandom([11, 12, 13, 14, 15]);
    mult = randInt(2, 6);
  } else if (tier === 4) {
    // Core teen tables: 12, 13, 14, 15, 16 (higher multipliers)
    table = pickRandom([12, 13, 14, 15, 16]);
    mult = randInt(6, 9);
  } else if (tier === 5) {
    // High teen tables: 16, 17, 18, 19
    table = pickRandom([16, 17, 18, 19]);
    mult = randInt(4, 9);
    // 40% chance of missing factor: 17 × ? = 119
    if (Math.random() > 0.6) mode = 'missing_factor';
  } else if (tier === 6) {
    // 20s decade tables: 21, 22, 23, 24, 25, 26, 28
    table = pickRandom([21, 22, 23, 24, 25, 26, 28]);
    mult = randInt(3, 8);
    if (Math.random() > 0.5) mode = 'commutative';
  } else if (tier === 7) {
    // 30s & 40s decade tables: 31, 32, 35, 36, 42, 45, 48
    table = pickRandom([31, 32, 35, 36, 42, 45, 48]);
    mult = randInt(3, 7);
  } else if (tier === 8) {
    // 50s–75 decade tables: 52, 54, 56, 64, 72, 75
    table = pickRandom([52, 54, 56, 64, 72, 75]);
    mult = randInt(4, 8);
    if (Math.random() > 0.6) mode = 'division';
  } else {
    // High tables (76–99) & rapid two-digit multiplication
    table = pickRandom([76, 82, 84, 88, 92, 95, 96, 98]);
    mult = randInt(6, 9);
  }

  const product = table * mult;
  const factKey: FactKey = `mul:${table}:${mult}`;

  let prompt = `${table} × ${mult}`;
  let correctAnswer = product;
  let opA = table;
  let opB = mult;
  let operator: Operator = '×';
  let tip = table > 12
    ? `Split-and-Add: ${table} × ${mult} = (${Math.floor(table / 10) * 10} × ${mult}) + (${table % 10} × ${mult}).`
    : `Anchor Fact: Recall ${table} × ${mult} directly without finger counting.`;
  let strategyTitle = table > 12 ? 'Split-and-Add Teen Table' : 'Core Table Memory';

  if (mode === 'commutative') {
    prompt = `${mult} × ${table}`;
    correctAnswer = product;
    opA = mult;
    opB = table;
    operator = '×';
    tip = `Commutative Reflex: ${mult} × ${table} = ${table} × ${mult} = ${product}.`;
    strategyTitle = 'Commutative Table Inversion';
  } else if (mode === 'missing_factor') {
    prompt = `${table} × ? = ${product}`;
    correctAnswer = mult;
    opA = table;
    opB = product;
    operator = '×';
    tip = `Missing Factor: Find the factor that multiplies with ${table} to reach ${product} → ${mult}.`;
    strategyTitle = 'Missing Factor Table Retrieval';
  } else if (mode === 'division') {
    prompt = `${product} ÷ ${table} = ?`;
    correctAnswer = mult;
    opA = product;
    opB = table;
    operator = '÷';
    tip = `Table Quotient: ${product} ÷ ${table} = ${mult} (since ${table} × ${mult} = ${product}).`;
    strategyTitle = 'Inverse Table Division';
  }

  return {
    id: qId,
    prompt,
    operandA: opA,
    operandB: opB,
    operator,
    correctAnswer,
    targetTimeSeconds: tier <= 3 ? 3 : tier <= 6 ? 4 : 5,
    difficultyRating: tier,
    mentalTip: tip,
    steps: [
      {
        stepNumber: 1,
        title: strategyTitle,
        subVocalization: `${prompt} → ${correctAnswer}`,
        intermediateValue: correctAnswer,
        explanation: tip,
      },
    ],
    strategyTitle,
    module: 'tables_bootcamp',
    subTrack: factKey,
  };
}

// -------------------------------------------------------------
// DOMAIN 2: ADDITION ABILITIES
// -------------------------------------------------------------
function generateAdditionQuestion(tier: number, qId: string): Question {
  let prompt = '';
  let answer = 0;
  let tip = '';
  let dim: SkillDimension = 'add_sub_non_bridging';

  if (tier === 1) {
    const a = randInt(3, 6);
    const b = randInt(2, 9 - a);
    answer = a + b;
    prompt = `${a} + ${b}`;
    tip = 'Direct single-digit non-crossing sum.';
    dim = 'add_sub_non_bridging';
  } else if (tier === 2) {
    const a = randInt(6, 9);
    const b = randInt(11 - a, 9);
    answer = a + b;
    prompt = `${a} + ${b}`;
    tip = 'Bridge 10: Complete to 10 first, then add leftover.';
    dim = 'add_sub_bridging_decade';
  } else if (tier === 3) {
    const a = randInt(21, 54);
    const b = randInt(11, 44);
    answer = a + b;
    prompt = `${a} + ${b}`;
    tip = 'Add tens first, then add units.';
    dim = 'add_2d_2d';
  } else if (tier === 4) {
    const a = randInt(37, 68);
    const b = randInt(26, 49);
    answer = a + b;
    prompt = `${a} + ${b}`;
    tip = `Left-to-Right: (${Math.floor(a / 10) * 10} + ${Math.floor(b / 10) * 10}) + (${a % 10} + ${b % 10}).`;
    dim = 'add_sub_multidigit_l2r';
  } else if (tier === 5) {
    const a = randInt(58, 89);
    const b = randInt(65, 95);
    answer = a + b;
    prompt = `${a} + ${b}`;
    tip = 'Century Jump: Cross 100 cleanly using left-to-right accumulation.';
    dim = 'add_sub_multidigit_l2r';
  } else if (tier === 6) {
    const a = randInt(125, 285);
    const b = randInt(47, 88);
    answer = a + b;
    prompt = `${a} + ${b}`;
    tip = 'Accumulate hundreds, tens, then units.';
    dim = 'add_3d_2d';
  } else if (tier === 7) {
    const a = randInt(245, 580);
    const b = randInt(175, 385);
    answer = a + b;
    prompt = `${a} + ${b}`;
    tip = 'Left-to-Right 3-digit mental accumulator.';
    dim = 'add_sub_multidigit_l2r';
  } else if (tier === 8) {
    const a = randInt(15, 38);
    const b = randInt(24, 49);
    const c = randInt(12, 35);
    answer = a + b + c;
    prompt = `${a} + ${b} + ${c}`;
    tip = 'Chain Addition: Add first two, then combine the third in working memory.';
    dim = 'add_sub_mixed_chain';
  } else {
    const a = randInt(145, 380);
    const b = randInt(120, 290);
    const c = randInt(110, 240);
    answer = a + b + c;
    prompt = `${a} + ${b} + ${c}`;
    tip = 'Mastery 3-Term 3-Digit Chain: Streamline left-to-right place accumulation.';
    dim = 'add_sub_mixed_chain';
  }

  return {
    id: qId,
    prompt,
    operandA: answer,
    operandB: 0,
    operator: '+',
    correctAnswer: answer,
    targetTimeSeconds: tier <= 3 ? 3 : tier <= 6 ? 4 : 6,
    difficultyRating: tier,
    mentalTip: tip,
    steps: [
      {
        stepNumber: 1,
        title: 'Left-to-Right Accumulator',
        subVocalization: `${prompt} = ${answer}`,
        intermediateValue: answer,
        explanation: tip,
      },
    ],
    strategyTitle: 'Left-to-Right Mental Addition',
    module: 'add_sub',
    subTrack: `add:${tier}`,
  };
}

// -------------------------------------------------------------
// DOMAIN 3: SUBTRACTION & COMPLEMENTS
// -------------------------------------------------------------
function generateSubtractionQuestion(tier: number, qId: string): Question {
  let prompt = '';
  let answer = 0;
  let tip = '';
  let dim: SkillDimension = 'sub_1d_1d';

  if (tier === 1) {
    const a = randInt(6, 9);
    const b = randInt(2, a - 2);
    answer = a - b;
    prompt = `${a} - ${b}`;
    tip = 'Direct single-digit difference.';
    dim = 'sub_1d_1d';
  } else if (tier === 2) {
    const a = randInt(12, 18);
    const b = randInt(a - 9, 9);
    answer = a - b;
    prompt = `${a} - ${b}`;
    tip = 'Bridge back through 10.';
    dim = 'add_sub_bridging_decade';
  } else if (tier === 3) {
    const tens = randInt(3, 8);
    const unitsA = randInt(4, 9);
    const unitsB = randInt(1, unitsA - 1);
    const a = tens * 10 + unitsA;
    const b = randInt(1, tens - 1) * 10 + unitsB;
    answer = a - b;
    prompt = `${a} - ${b}`;
    tip = 'Non-borrowing 2-digit difference: subtract tens, then subtract units.';
    dim = 'sub_2d_2d';
  } else if (tier === 4) {
    const a = randInt(42, 85);
    const b = randInt(16, a - 12);
    answer = a - b;
    prompt = `${a} - ${b}`;
    tip = 'Subtract tens first, then compensate or subtract units.';
    dim = 'sub_2d_2d';
  } else if (tier === 5) {
    const subtrahend = randInt(23, 87);
    answer = 100 - subtrahend;
    prompt = `100 - ${subtrahend}`;
    tip = '100 Complement: Tens add to 9, units add to 10 (Nikhilam).';
    dim = 'add_sub_complements_100';
  } else if (tier === 6) {
    const a = randInt(135, 245);
    const b = randInt(48, 89);
    answer = a - b;
    prompt = `${a} - ${b}`;
    tip = 'Subtract decade above (round up and add back difference).';
    dim = 'sub_3d_2d';
  } else if (tier === 7) {
    const a = randInt(425, 785);
    const b = randInt(180, a - 100);
    answer = a - b;
    prompt = `${a} - ${b}`;
    tip = '3-Digit Subtraction: Left-to-right progressive difference.';
    dim = 'add_sub_multidigit_l2r';
  } else if (tier === 8) {
    const subtrahend = randInt(125, 875);
    answer = 1000 - subtrahend;
    prompt = `1,000 - ${subtrahend}`;
    tip = '1,000 Complement (All from 9, last from 10).';
    dim = 'complements_100';
  } else {
    const subtrahend = randInt(1245, 8765);
    answer = 10000 - subtrahend;
    prompt = `10,000 - ${subtrahend}`;
    tip = '10,000 Vedic Complement: Every digit from 9, final non-zero from 10.';
    dim = 'complements_10000';
  }

  return {
    id: qId,
    prompt,
    operandA: answer,
    operandB: 0,
    operator: '-',
    correctAnswer: answer,
    targetTimeSeconds: tier <= 3 ? 3 : tier <= 6 ? 4 : 5,
    difficultyRating: tier,
    mentalTip: tip,
    steps: [
      {
        stepNumber: 1,
        title: 'Complement / Progressive Subtraction',
        subVocalization: `${prompt} = ${answer}`,
        intermediateValue: answer,
        explanation: tip,
      },
    ],
    strategyTitle: 'Mental Subtraction & Complements',
    module: 'add_sub',
    subTrack: `sub:${tier}`,
  };
}

// -------------------------------------------------------------
// DOMAIN 4: MULTIPLICATION ABILITIES
// -------------------------------------------------------------
function generateMultiplicationQuestion(tier: number, qId: string): Question {
  let a = 12;
  let b = 3;
  let tip = '';
  let strategy = 'Split-and-Multiply';

  if (tier === 1) {
    a = pickRandom([12, 15, 20, 25]);
    b = pickRandom([2, 3, 4]);
    tip = 'Decade scaling or doubling.';
    strategy = 'Doubling & Decade Scaling';
  } else if (tier === 2) {
    a = randInt(21, 43);
    b = pickRandom([2, 3]);
    tip = `Left-to-Right: (${Math.floor(a / 10) * 10} × ${b}) + (${a % 10} × ${b}).`;
    strategy = 'Left-to-Right Distribution';
  } else if (tier === 3) {
    a = randInt(24, 48);
    b = randInt(4, 6);
    tip = `Decompose: ${a} × ${b} = ${Math.floor(a / 10) * 10 * b} + ${a % 10 * b}.`;
    strategy = 'Left-to-Right Distribution';
  } else if (tier === 4) {
    a = randInt(53, 89);
    b = randInt(6, 8);
    tip = `High 2D×1D: (${Math.floor(a / 10) * 10} × ${b}) + (${a % 10} × ${b}).`;
    strategy = 'Left-to-Right Distribution';
  } else if (tier === 5) {
    a = randInt(12, 19);
    b = randInt(12, 18);
    tip = `Teen Multiplier: Base 10 Vedic: (${a} + ${b % 10}) × 10 + (${a % 10} × ${b % 10}).`;
    strategy = 'Base-10 Vedic Method';
  } else if (tier === 6) {
    a = randInt(21, 42);
    b = randInt(21, 32);
    tip = 'Vedic Criss-Cross (Urdhva Tiryagbhyam): Units, Cross-Sum, Tens.';
    strategy = 'Vedic Criss-Cross';
  } else if (tier === 7) {
    a = randInt(34, 68);
    b = randInt(24, 52);
    tip = 'Vedic 2x2: (tens product) | (cross sum) | (units product).';
    strategy = 'Vedic Urdhva Tiryagbhyam';
  } else if (tier === 8) {
    a = randInt(64, 89);
    b = randInt(43, 78);
    tip = 'Advanced 2x2 Criss-Cross with carries.';
    strategy = 'Vedic Urdhva Tiryagbhyam';
  } else {
    // Tier 9: Base 100 Vedic multiplication (e.g. 104 × 107)
    const da = randInt(3, 12);
    const db = randInt(4, 14);
    a = 100 + da;
    b = 100 + db;
    tip = `Base-100 Vedic: (100 + ${da} + ${db}) | (${da} × ${db}).`;
    strategy = 'Base-100 Nikhilam Navatashcaramam';
  }

  const answer = a * b;
  const prompt = `${a} × ${b}`;

  return {
    id: qId,
    prompt,
    operandA: a,
    operandB: b,
    operator: '×',
    correctAnswer: answer,
    targetTimeSeconds: tier <= 3 ? 3 : tier <= 6 ? 5 : 7,
    difficultyRating: tier,
    mentalTip: tip,
    steps: [
      {
        stepNumber: 1,
        title: strategy,
        subVocalization: `${prompt} = ${answer}`,
        intermediateValue: answer,
        explanation: tip,
      },
    ],
    strategyTitle: strategy,
    module: 'multiplication',
    subTrack: `mult:${tier}`,
  };
}

// -------------------------------------------------------------
// DOMAIN 5: DIVISION ABILITIES
// -------------------------------------------------------------
function generateDivisionQuestion(tier: number, qId: string): Question {
  let divisor = 4;
  let quotient = 6;
  let tip = '';

  if (tier === 1) {
    divisor = pickRandom([2, 3, 4, 5]);
    quotient = randInt(3, 8);
    tip = 'Direct inverse table recall.';
  } else if (tier === 2) {
    divisor = pickRandom([6, 7, 8, 9]);
    quotient = randInt(6, 9);
    tip = 'Single-digit table inverse.';
  } else if (tier === 3) {
    divisor = pickRandom([2, 3, 4]);
    quotient = randInt(12, 28);
    tip = 'Split into tens and units quotients.';
  } else if (tier === 4) {
    divisor = pickRandom([5, 6, 7]);
    quotient = randInt(14, 24);
    tip = 'Division with decade bridge.';
  } else if (tier === 5) {
    divisor = pickRandom([12, 13, 14, 15]);
    quotient = randInt(8, 16);
    tip = 'Teen table division: test multiples of divisor.';
  } else if (tier === 6) {
    divisor = pickRandom([7, 8, 9]);
    quotient = randInt(23, 45);
    tip = '3-Digit by 1-Digit: Progressive left-to-right division.';
  } else if (tier === 7) {
    divisor = pickRandom([16, 18, 24, 25]);
    quotient = randInt(14, 32);
    tip = 'Factor Method: Halve or factor the 2-digit divisor.';
  } else if (tier === 8) {
    divisor = pickRandom([28, 36, 45]);
    quotient = randInt(18, 35);
    tip = '2-Digit Divisor: Estimate leading quotient digit using leading tens.';
  } else {
    divisor = pickRandom([125, 144, 196]);
    quotient = randInt(12, 24);
    tip = 'High-order division: cancel common square/cube factors.';
  }

  const dividend = divisor * quotient;
  const prompt = `${dividend} ÷ ${divisor}`;

  return {
    id: qId,
    prompt,
    operandA: dividend,
    operandB: divisor,
    operator: '÷',
    correctAnswer: quotient,
    targetTimeSeconds: tier <= 3 ? 3 : tier <= 6 ? 5 : 7,
    difficultyRating: tier,
    mentalTip: tip,
    steps: [
      {
        stepNumber: 1,
        title: 'Quotient Resolution',
        subVocalization: `${prompt} = ${quotient}`,
        intermediateValue: quotient,
        explanation: tip,
      },
    ],
    strategyTitle: 'Mental Division & Factoring',
    module: 'multiplication',
    subTrack: `div:${tier}`,
  };
}

// -------------------------------------------------------------
// DOMAIN 6: SQUARES & CUBES POWERS
// -------------------------------------------------------------
function generateSquaresCubesQuestion(tier: number, qId: string): Question {
  let prompt = '';
  let answer = 0;
  let tip = '';
  let factKey: FactKey = 'square:12';

  if (tier === 1) {
    const n = pickRandom([3, 4, 5, 10]);
    answer = n * n;
    prompt = `${n}²`;
    tip = `Basic Square: ${n} × ${n} = ${answer}.`;
    factKey = `square:${n}` as FactKey;
  } else if (tier === 2) {
    const n = pickRandom([6, 7, 8, 9]);
    answer = n * n;
    prompt = `${n}²`;
    tip = `Single-Digit Square: ${n} × ${n} = ${answer}.`;
    factKey = `square:${n}` as FactKey;
  } else if (tier === 3) {
    const isCube = Math.random() < 0.5;
    if (isCube) {
      const n = pickRandom([2, 3]);
      answer = n * n * n;
      prompt = `${n}³`;
      tip = `Anchor Cube: ${n}³ = ${answer}.`;
      factKey = `cube:${n}` as FactKey;
    } else {
      const n = pickRandom([11, 12]);
      answer = n * n;
      prompt = `${n}²`;
      tip = `Core Square: ${n}² = ${answer}.`;
      factKey = `square:${n}` as FactKey;
    }
  } else if (tier === 4) {
    // Squares ending in 5: n5^2 = n(n+1) | 25
    const prefix = randInt(2, 8);
    const n = prefix * 10 + 5;
    answer = n * n;
    prompt = `${n}²`;
    tip = `Ends in 5: ${prefix} × ${prefix + 1} = ${prefix * (prefix + 1)}, attach 25 → ${answer}.`;
    factKey = `square:${n}` as FactKey;
  } else if (tier === 5) {
    const n = pickRandom([13, 14, 16, 4]);
    if (n === 4) {
      answer = 64;
      prompt = '4³';
      tip = 'Anchor Cube: 4³ = 64.';
      factKey = 'cube:4';
    } else {
      answer = n * n;
      prompt = `${n}²`;
      tip = `Teen Square: ${n}² = ${answer}.`;
      factKey = `square:${n}` as FactKey;
    }
  } else if (tier === 6) {
    // Squares near 50: (50 ± d)^2 = 25 ± d | d^2
    const d = pickRandom([-3, -2, -1, 1, 2, 3]);
    const n = 50 + d;
    answer = n * n;
    prompt = `${n}²`;
    const dAbs = Math.abs(d);
    const d2Str = dAbs * dAbs < 10 ? `0${dAbs * dAbs}` : `${dAbs * dAbs}`;
    tip = `Near 50: (25 ${d >= 0 ? '+' : '-'} ${dAbs}) = ${25 + d} and ${dAbs}² = ${d2Str} → ${answer}.`;
    factKey = `square:${n}` as FactKey;
  } else if (tier === 7) {
    const isCube = Math.random() < 0.5;
    if (isCube) {
      const n = pickRandom([5, 6]);
      answer = n * n * n;
      prompt = `${n}³`;
      tip = `Cube: ${n}³ = ${answer}.`;
      factKey = `cube:${n}` as FactKey;
    } else {
      const n = pickRandom([17, 18, 19]);
      answer = n * n;
      prompt = `${n}²`;
      tip = `High Teen Square: ${n}² = ${answer}.`;
      factKey = `square:${n}` as FactKey;
    }
  } else if (tier === 8) {
    // Squares near 100: (100 - d)^2 = (100 - 2d) | d^2
    const d = pickRandom([2, 3, 4, 6]);
    const n = 100 - d;
    answer = n * n;
    prompt = `${n}²`;
    const d2Str = d * d < 10 ? `0${d * d}` : `${d * d}`;
    tip = `Near 100: (${n} - ${d}) = ${n - d}, then attach ${d}² = ${d2Str} → ${answer}.`;
    factKey = `square:${n}` as FactKey;
  } else {
    // Tier 9: 7^3, 8^3, 9^3, 12^3
    const n = pickRandom([7, 8, 9, 12]);
    answer = n * n * n;
    prompt = `${n}³`;
    tip = `Mastery Cube: ${n}³ = ${answer}.`;
    factKey = `cube:${n}` as FactKey;
  }

  return {
    id: qId,
    prompt,
    operandA: answer,
    operandB: 0,
    operator: '²',
    correctAnswer: answer,
    targetTimeSeconds: tier <= 3 ? 3 : tier <= 6 ? 4 : 5,
    difficultyRating: tier,
    mentalTip: tip,
    steps: [
      {
        stepNumber: 1,
        title: 'Power Evaluation',
        subVocalization: `${prompt} = ${answer}`,
        intermediateValue: answer,
        explanation: tip,
      },
    ],
    strategyTitle: 'Mental Squares & Cubes',
    module: 'squares_cubes',
    subTrack: factKey,
  };
}

// -------------------------------------------------------------
// DOMAIN 7: SHAKUNTALA DEVI FEATS & INSTANT ROOTS
// -------------------------------------------------------------
/**
 * Shakuntala Devi 6-Digit Cube Root Algorithm:
 * For any 2-digit number N in [10, 99]:
 * - Last digit of N³ uniquely maps to units digit of N:
 *   0->0, 1->1, 4->4, 5->5, 6->6, 9->9 (identity)
 *   2<->8, 3<->7 (complements to 10!)
 * - Thousands part floor(N³ / 1000) falls between d³ and (d+1)³, directly revealing tens digit d.
 * Solvable in under 2 seconds mentally!
 */
function generateShakuntalaQuestion(tier: number, qId: string): Question {
  let prompt = '';
  let answer = 0;
  let tip = '';
  let strategy = 'Shakuntala Devi Root Extraction';

  if (tier === 1) {
    const root = pickRandom([7, 8, 9, 10]);
    answer = root;
    prompt = `√${root * root}`;
    tip = `Basic Root: √${root * root} = ${root}.`;
  } else if (tier === 2) {
    const root = pickRandom([12, 15, 20]);
    answer = root;
    prompt = `√${root * root}`;
    tip = `Anchor Root: √${root * root} = ${root}.`;
  } else if (tier === 3) {
    const root = pickRandom([10, 20, 30]);
    answer = root;
    prompt = `∛${root * root * root}`;
    tip = `Decade Cube Root: ∛${root * root * root} = ${root}.`;
  } else if (tier === 4) {
    // Lightning complement check: 100 - X
    const sub = randInt(28, 86);
    answer = 100 - sub;
    prompt = `100 - ${sub}`;
    tip = 'Instant Complement in < 1.5s: Tens add to 9, units add to 10.';
    strategy = 'Sub-Second Vedic Complement';
  } else if (tier === 5) {
    // Square roots of numbers ending in 25: sqrt(n(n+1)25) = n5
    const prefix = randInt(3, 7);
    answer = prefix * 10 + 5;
    const squareVal = answer * answer;
    prompt = `√${squareVal}`;
    tip = `Ends in 25: ${prefix * (prefix + 1)} is ${prefix} × ${prefix + 1}, so tens digit is ${prefix}, units is 5 → ${answer}.`;
    strategy = 'Vedic Square Root of 25';
  } else if (tier === 6) {
    // 5-digit exact cube root (N between 21 and 35)
    const n = randInt(21, 35);
    answer = n;
    const cubeVal = n * n * n;
    prompt = `∛${cubeVal.toLocaleString()}`;
    const lastDigit = cubeVal % 10;
    const unitsMap: Record<number, number> = { 0:0, 1:1, 2:8, 3:7, 4:4, 5:5, 6:6, 7:3, 8:2, 9:9 };
    const tensCube = Math.floor(cubeVal / 1000);
    tip = `Shakuntala Trick: Ends in ${lastDigit} → units is ${unitsMap[lastDigit]}. Thousands prefix ${tensCube} is between ${Math.floor(n/10)}³ and ${Math.floor(n/10)+1}³ → tens is ${Math.floor(n/10)}. Result = ${answer}!`;
  } else if (tier === 7) {
    // 5-digit exact cube root (N between 36 and 46)
    const n = randInt(36, 46);
    answer = n;
    const cubeVal = n * n * n;
    prompt = `∛${cubeVal.toLocaleString()}`;
    const lastDigit = cubeVal % 10;
    const unitsMap: Record<number, number> = { 0:0, 1:1, 2:8, 3:7, 4:4, 5:5, 6:6, 7:3, 8:2, 9:9 };
    tip = `Shakuntala Cube Root: Ends in ${lastDigit} → units is ${unitsMap[lastDigit]}. Prefix ${Math.floor(cubeVal/1000)} gives tens digit ${Math.floor(n/10)}. Result = ${answer}!`;
  } else if (tier === 8) {
    // 6-digit exact cube root (N between 51 and 75)
    const n = randInt(51, 75);
    answer = n;
    const cubeVal = n * n * n;
    prompt = `∛${cubeVal.toLocaleString()}`;
    const lastDigit = cubeVal % 10;
    const unitsMap: Record<number, number> = { 0:0, 1:1, 2:8, 3:7, 4:4, 5:5, 6:6, 7:3, 8:2, 9:9 };
    tip = `6-Digit Cube Root: Ends in ${lastDigit} → units is ${unitsMap[lastDigit]}. Thousands prefix ${Math.floor(cubeVal/1000)} is between ${Math.floor(n/10)}³ and ${Math.floor(n/10)+1}³ → ${answer}!`;
  } else {
    // Tier 9: Legendary 6-digit cube root (N between 76 and 99)
    const n = randInt(76, 99);
    answer = n;
    const cubeVal = n * n * n;
    prompt = `∛${cubeVal.toLocaleString()}`;
    const lastDigit = cubeVal % 10;
    const unitsMap: Record<number, number> = { 0:0, 1:1, 2:8, 3:7, 4:4, 5:5, 6:6, 7:3, 8:2, 9:9 };
    tip = `Shakuntala Devi Mastery: Instant 6-digit cube root. Units digit: ${lastDigit} → ${unitsMap[lastDigit]}. Tens: ∛(${Math.floor(cubeVal/1000)}) → ${Math.floor(n/10)}. Answer = ${answer} in < 2 seconds!`;
  }

  return {
    id: qId,
    prompt,
    operandA: answer,
    operandB: 0,
    operator: '∛',
    correctAnswer: answer,
    targetTimeSeconds: tier <= 3 ? 3 : tier <= 6 ? 4 : 5,
    difficultyRating: tier,
    mentalTip: tip,
    steps: [
      {
        stepNumber: 1,
        title: strategy,
        subVocalization: `${prompt} = ${answer}`,
        intermediateValue: answer,
        explanation: tip,
      },
    ],
    strategyTitle: strategy,
    module: 'squares_cubes',
    subTrack: `shakuntala:${tier}`,
  };
}

/**
 * Creates a dynamic, balanced 10-20 minute Computerized Adaptive Diagnostic session.
 * Always starts with diverse, approachable probes across the initial domains.
 */
export function createAssessmentSession(targetMinutes: number = 15): AssessmentSession {
  // Start with 6 curated initial probes across foundational domains, heavily grounding in Tables 1-100
  const initialQuestions: Question[] = [
    generateProceduralQuestion('tables', 2, 'diag_1_tables'),
    generateProceduralQuestion('addition', 3, 'diag_2_addition'),
    generateProceduralQuestion('tables', 3, 'diag_3_tables'),
    generateProceduralQuestion('subtraction', 3, 'diag_4_subtraction'),
    generateProceduralQuestion('tables', 4, 'diag_5_tables'),
    generateProceduralQuestion('multiplication', 3, 'diag_6_multiplication'),
  ];

  return {
    id: `assessment_${Date.now()}`,
    startedAt: Date.now(),
    status: 'in_progress',
    currentQuestionIndex: 0,
    totalQuestions: 24, // targeted 24-question deep cognitive CAT battery with 12 table probes
    questions: initialQuestions,
    responses: [],
    earlyStopped: false,
    isPaused: false,
    totalPausedTimeMs: 0,
    targetDurationMinutes: Math.max(10, Math.min(20, targetMinutes)),
  };
}

export interface AssessmentAnswerResult {
  updatedSession: AssessmentSession;
  updatedProfile: LearnerProfile;
  initialFactMemoryMap?: Record<string, FactMemoryState>;
  isCorrect: boolean;
  rapidGuess: boolean;
  isSkipped: boolean;
  isCompleted: boolean;
}

/**
 * Resolves which DiagnosticDomain a response belongs to.
 */
export function getDomainForResponse(resp: AssessmentResponse): DiagnosticDomain {
  const dim = resp.dimension;
  const qId = resp.questionId;

  if (qId.includes('tables')) return 'tables';
  if (qId.includes('addition')) return 'addition';
  if (qId.includes('subtraction')) return 'subtraction';
  if (qId.includes('multiplication')) return 'multiplication';
  if (qId.includes('division')) return 'division';
  if (qId.includes('squares_cubes') || qId.includes('squares') || qId.includes('cubes')) return 'squares_cubes';
  if (qId.includes('shakuntala')) return 'shakuntala_feats';

  if (dim.startsWith('table_') || dim === 'mult_core_tables' || dim === 'mult_teen_tables' || dim === 'mult_foundations') return 'tables';
  if (dim.startsWith('add_') || dim === 'add_sub_non_bridging' || dim === 'add_sub_bridging_decade' || dim === 'add_sub_multidigit_l2r' || dim === 'add_sub_mixed_chain') return 'addition';
  if (dim.startsWith('sub_') || dim === 'add_sub_complements_100' || dim === 'complements_10' || dim === 'complements_100' || dim === 'complements_10000') return 'subtraction';
  if (dim.startsWith('mult_') || dim === 'doubles_halves' || dim === 'near_doubles') return 'multiplication';
  if (dim.startsWith('div_')) return 'division';
  if (dim.startsWith('squares_') || dim.startsWith('cubes_')) return 'squares_cubes';
  if (dim === 'shakuntala_cube_roots' || dim === 'shakuntala_square_roots') return 'shakuntala_feats';

  return 'tables';
}

/**
 * Cognitive Frontier & Ceiling Tracking State.
 * Evaluates the user's Basal level (fully automated) and Ceiling level (where calculation breaks down).
 */
export interface DomainFrontierState {
  domain: DiagnosticDomain;
  basalTier: number; // Highest difficulty solved with 100% accuracy
  ceilingTier: number; // Strictest ceiling: once user fails at level X, ceiling is capped <= X - 1
  currentTier: number; // Active adaptive probe level (strictly <= ceilingTier)
  isCeilingLocked: boolean;
}

export function computeDomainFrontier(
  responses: AssessmentResponse[],
  domain: DiagnosticDomain,
  questions?: Question[]
): DomainFrontierState {
  const domainResponses = responses.filter((r) => getDomainForResponse(r) === domain);
  if (domainResponses.length === 0) {
    return {
      domain,
      basalTier: 1,
      ceilingTier: 9,
      currentTier: 3,
      isCeilingLocked: false,
    };
  }

  let basalTier = 1;
  let ceilingTier = 9;
  let currentTier = 3;
  let isCeilingLocked = false;

  for (const r of domainResponses) {
    const q = questions?.find((x) => x.id === r.questionId);
    const tier = q?.difficultyRating || currentTier;

    if (r.isCorrect && !r.isSkipped) {
      basalTier = Math.max(basalTier, tier);
      if (!isCeilingLocked) {
        // Fast correct (< 2500ms): +2 tiers, standard: +1 tier
        const step = r.latencyMs < 2500 ? 2 : 1;
        currentTier = Math.min(ceilingTier, currentTier + step);
      } else {
        // Ceiling was reached: clamp strictly <= ceilingTier
        currentTier = Math.min(ceilingTier, currentTier);
      }
    } else {
      // Failed or skipped question at difficulty level `tier`
      // COGNITIVE CEILING RULE: If user cannot answer level X, they must NEVER be asked harder than level X!
      ceilingTier = Math.min(ceilingTier, Math.max(1, tier - 1));
      isCeilingLocked = true;
      currentTier = Math.min(ceilingTier, Math.max(1, currentTier - 1));
    }
  }

  // Ensure currentTier is strictly bounded by [1, ceilingTier]
  currentTier = Math.min(ceilingTier, Math.max(1, currentTier));

  return {
    domain,
    basalTier,
    ceilingTier,
    currentTier,
    isCeilingLocked,
  };
}

/**
 * Computes the dynamic CAT tier (1-9) for a specific domain enforcing the Cognitive Ceiling rule.
 */
export function getDomainTier(
  responses: AssessmentResponse[],
  domain: DiagnosticDomain,
  questions?: Question[]
): number {
  return computeDomainFrontier(responses, domain, questions).currentTier;
}

/**
 * Checks if a domain has achieved statistical calibration confidence.
 */
function isDomainCalibrated(responses: AssessmentResponse[], domain: DiagnosticDomain): boolean {
  const domainResponses = responses.filter((r) => getDomainForResponse(r) === domain);
  if (domainResponses.length >= 3) {
    const correctRatio = domainResponses.filter((r) => r.isCorrect).length / domainResponses.length;
    if (correctRatio >= 0.85 || correctRatio <= 0.20) return true;
  }
  return false;
}

/**
 * Generates the next adaptive question in CAT sequence, strictly respecting cognitive ceilings.
 */
function getNextAdaptiveQuestion(
  responses: AssessmentResponse[],
  existingQuestions: Question[],
  questionIndex: number
): Question {
  // Cycle domains, picking uncalibrated domains first if possible
  let domain = BALANCED_DOMAIN_SEQUENCE[questionIndex % BALANCED_DOMAIN_SEQUENCE.length];
  if (isDomainCalibrated(responses, domain)) {
    const uncalibrated = PRIMARY_DIAGNOSTIC_DOMAINS.find((d) => !isDomainCalibrated(responses, d));
    if (uncalibrated) domain = uncalibrated;
  }

  const currentTier = getDomainTier(responses, domain, existingQuestions);
  const qId = `diag_${existingQuestions.length + 1}_${domain}`;
  return generateProceduralQuestion(domain, currentTier, qId);
}

/**
 * Classifies cognitive learner archetype from assessment telemetry.
 */
export function classifyLearnerArchetype(responses: AssessmentResponse[]): LearnerArchetype {
  if (responses.length === 0) return 'accurate_but_slow';

  const answered = responses.filter((r) => !r.isSkipped);
  const correctCount = answered.filter((r) => r.isCorrect).length;
  const accuracy = answered.length > 0 ? correctCount / answered.length : 0;
  const latencies = answered.map((r) => r.latencyMs);
  const avgLatency = latencies.length > 0 ? latencies.reduce((a, b) => a + b, 0) / latencies.length : 3000;
  const rapidGuesses = responses.filter((r) => r.rapidGuess).length;

  if (rapidGuesses >= 2 || (accuracy < 0.70 && avgLatency < 1800)) {
    return 'fast_but_careless';
  }

  const confusedNearby = responses.some(
    (r) => r.errorPattern === 'adjacent_table_confusion' || r.errorPattern === 'adjacent_multiplier_confusion'
  );
  if (confusedNearby) {
    return 'confuses_nearby_facts';
  }

  if (accuracy >= 0.85 && avgLatency > 3500) {
    return 'accurate_but_slow';
  }

  const strategicResponses = responses.filter(
    (r) => r.dimension === 'mult_teen_tables' || r.dimension === 'squares_near_50' || r.dimension === 'squares_ending_5'
  );
  if (strategicResponses.length >= 2 && strategicResponses.every((r) => !r.isCorrect)) {
    return 'missing_strategy';
  }

  if (accuracy < 0.75) {
    return 'missing_fact';
  }

  if (accuracy >= 0.88 && avgLatency <= 2500) {
    return 'ready_for_advanced';
  }

  return 'accurate_but_slow';
}

/**
 * Helper to resolve SkillDimension from Question.
 */
function resolveDimensionFromQuestion(q: Question): SkillDimension {
  if (q.subTrack?.startsWith('mul:')) {
    const parts = q.subTrack.split(':');
    const tbl = parseInt(parts[1], 10);
    const mult = parseInt(parts[2], 10);
    if (tbl <= 5 && mult <= 5) return 'mult_foundations';
    if (mult > 12 || tbl > 12) return 'mult_teen_tables';
    return 'mult_core_tables';
  }
  if (q.subTrack?.startsWith('square:')) {
    const n = parseInt(q.subTrack.replace('square:', ''), 10);
    if (n % 10 === 5) return 'squares_ending_5';
    if (n >= 40 && n <= 60) return 'squares_near_50';
    if (n >= 80 && n <= 110) return 'squares_near_100';
    return 'squares_1_20';
  }
  if (q.subTrack?.startsWith('cube:')) {
    return 'cubes_anchors';
  }
  if (q.subTrack?.startsWith('shakuntala:')) {
    return 'shakuntala_cube_roots';
  }
  if (q.prompt.includes('10,000 -')) return 'complements_10000';
  if (q.prompt.includes('100 -') || q.prompt.includes('1,000 -')) return 'add_sub_complements_100';
  if (q.operator === '+') {
    if (q.prompt.length >= 11) return 'add_sub_mixed_chain';
    if (q.prompt.length >= 7) return 'add_sub_multidigit_l2r';
    return 'add_sub_bridging_decade';
  }
  if (q.operator === '-') {
    if (q.prompt.length >= 7) return 'sub_3d_2d';
    return 'sub_2d_2d';
  }
  if (q.operator === '÷') {
    return 'div_by_1d';
  }
  return 'mult_core_tables';
}

/**
 * Records an answer for the current diagnostic question with CAT branching.
 */
export function recordAssessmentAnswer(
  session: AssessmentSession,
  userAnswer: number,
  latencyMs: number,
  profile: LearnerProfile,
  isSkipped: boolean = false
): AssessmentAnswerResult {
  if (session.status !== 'in_progress' || session.currentQuestionIndex >= session.questions.length) {
    return {
      updatedSession: session,
      updatedProfile: profile,
      isCorrect: false,
      rapidGuess: false,
      isSkipped: false,
      isCompleted: session.status === 'completed',
    };
  }

  const currentQ = session.questions[session.currentQuestionIndex];
  const isCorrect = !isSkipped && userAnswer === currentQ.correctAnswer;
  const rapidGuess = !isSkipped && latencyMs < 500 && !isCorrect;

  const dimension = resolveDimensionFromQuestion(currentQ);

  // Detect error pattern if wrong multiplication fact
  let errorPattern: string | undefined;
  if (!isCorrect && !isSkipped && currentQ.subTrack?.startsWith('mul:')) {
    const parts = currentQ.subTrack.split(':');
    const tbl = parseInt(parts[1], 10);
    const mult = parseInt(parts[2], 10);
    if (userAnswer === tbl * (mult + 1) || userAnswer === tbl * (mult - 1)) {
      errorPattern = 'adjacent_multiplier_confusion';
    } else if (userAnswer === (tbl + 1) * mult || userAnswer === (tbl - 1) * mult) {
      errorPattern = 'adjacent_table_confusion';
    }
  }

  const response: AssessmentResponse = {
    questionId: currentQ.id,
    dimension,
    userAnswer: isSkipped ? -1 : userAnswer,
    correctAnswer: currentQ.correctAnswer,
    isCorrect,
    latencyMs,
    rapidGuess,
    isSkipped,
    factKey: currentQ.subTrack,
    errorPattern,
  };

  const updatedResponses = [...session.responses, response];
  const nextIndex = session.currentQuestionIndex + 1;

  // Update learner profile IRT estimate
  const existingSkill = profile.skills[dimension];
  const updatedSkill = updateSkillEstimate(
    existingSkill,
    isCorrect,
    latencyMs,
    (currentQ.targetTimeSeconds || 4) * 1000
  );

  const updatedSkills = {
    ...profile.skills,
    [dimension]: updatedSkill,
  };

  const currentQuestions = [...session.questions];
  let isCompleted = false;
  let earlyStopped = false;

  // Early stopping criteria: answered >= 18 questions, all 7 core domains tested, and at least 7 tables tested
  if (nextIndex >= 18) {
    const testedDomains = new Set(updatedResponses.map((r) => getDomainForResponse(r)));
    const allDomainsTested = PRIMARY_DIAGNOSTIC_DOMAINS.every((d) => testedDomains.has(d));
    const tableResponses = updatedResponses.filter((r) => getDomainForResponse(r) === 'tables');
    if (allDomainsTested && tableResponses.length >= 7 && (nextIndex >= session.totalQuestions || PRIMARY_DIAGNOSTIC_DOMAINS.every((d) => isDomainCalibrated(updatedResponses, d)))) {
      earlyStopped = true;
      isCompleted = true;
    }
  }

  if (nextIndex >= session.totalQuestions) {
    isCompleted = true;
  }

  // If not completed, procedurally generate and append the next adaptive question
  if (!isCompleted && nextIndex >= currentQuestions.length) {
    const nextQ = getNextAdaptiveQuestion(updatedResponses, currentQuestions, nextIndex);
    currentQuestions.push(nextQ);
  } else if (!isCompleted) {
    // Check all upcoming pre-queued questions in currentQuestions to enforce cognitive ceiling
    const currentDomain = getDomainForResponse(response);
    const frontier = computeDomainFrontier(updatedResponses, currentDomain, currentQuestions);
    for (let i = nextIndex; i < currentQuestions.length; i++) {
      const futureQ = currentQuestions[i];
      const futureDomain = getDomainForResponse({ questionId: futureQ.id, dimension: resolveDimensionFromQuestion(futureQ) } as any);
      if (futureDomain === currentDomain && (futureQ.difficultyRating || 3) > frontier.ceilingTier) {
        currentQuestions[i] = generateProceduralQuestion(currentDomain, frontier.currentTier, futureQ.id);
      }
    }
  }

  const updatedSession: AssessmentSession = {
    ...session,
    questions: currentQuestions,
    responses: updatedResponses,
    currentQuestionIndex: nextIndex,
    earlyStopped,
    status: isCompleted ? 'completed' : 'in_progress',
    completedAt: isCompleted ? Date.now() : undefined,
  };

  // Seed fact memory map from assessment responses
  const initialFactMemoryMap: Record<string, FactMemoryState> = {};
  for (const resp of updatedResponses) {
    const q = session.questions.find((x) => x.id === resp.questionId);
    if (q && q.subTrack && (q.subTrack.startsWith('mul:') || q.subTrack.startsWith('square:') || q.subTrack.startsWith('cube:'))) {
      const factKey = q.subTrack as FactKey;
      const initial = createInitialFactMemoryState(factKey);
      initialFactMemoryMap[factKey] = updateFactMemoryStateWithAttempt(initial, {
        timestamp: Date.now(),
        userAnswer: resp.userAnswer,
        correctAnswer: resp.correctAnswer,
        isCorrect: resp.isCorrect,
        latencyMs: resp.latencyMs,
        usedHint: false,
        wasShownStrategy: false,
        isSkipped: resp.isSkipped,
        errorType: resp.rapidGuess ? 'rapid_guess' : resp.isCorrect ? undefined : 'calculation_slip',
      });
    }
  }

  let updatedProfile: LearnerProfile = {
    ...profile,
    updatedAt: Date.now(),
    skills: updatedSkills,
  };

  if (isCompleted) {
    const archetype = classifyLearnerArchetype(updatedResponses);
    const baselineReport = generateBaselineReport(updatedSession, updatedProfile, archetype);
    updatedProfile = {
      ...updatedProfile,
      baselineReport,
      assessmentHistory: [updatedSession, ...updatedProfile.assessmentHistory],
    };
  }

  return {
    updatedSession,
    updatedProfile,
    initialFactMemoryMap,
    isCorrect,
    rapidGuess,
    isSkipped,
    isCompleted,
  };
}

/**
 * Records a Skip action on the current assessment question.
 */
export function recordAssessmentSkip(
  session: AssessmentSession,
  profile: LearnerProfile
): AssessmentAnswerResult {
  const currentQ = session.questions[session.currentQuestionIndex];
  const latency = (currentQ?.targetTimeSeconds || 4) * 1000;
  return recordAssessmentAnswer(session, -1, latency, profile, true);
}

/**
 * Generates an actionable, comprehensive BaselineReport with Mind Analysis across all 7 Domains.
 */
export function generateBaselineReport(
  session: AssessmentSession,
  profile: LearnerProfile,
  archetype?: LearnerArchetype
): BaselineReport {
  const responses = session.responses;

  // Compute domain breakdown for the 7 primary domains
  const domainProficiencies: DomainProficiencyAnalysis[] = PRIMARY_DIAGNOSTIC_DOMAINS.map((domain) => {
    const domainResponses = responses.filter((r) => getDomainForResponse(r) === domain);
    const count = domainResponses.length;
    const correctCount = domainResponses.filter((r) => r.isCorrect).length;
    const accuracy = count > 0 ? Math.round((correctCount / count) * 100) : 0;
    const avgLatencyMs = count > 0
      ? Math.round(domainResponses.reduce((sum, r) => sum + r.latencyMs, 0) / count)
      : 3000;
    const tierLevel = getDomainTier(responses, domain);
    const tierName = TIER_NAMES[tierLevel] || 'Normal';

    // Calculate domain theta
    const domainDims = Array.from(new Set(domainResponses.map((r) => r.dimension)));
    let thetaSum = 0;
    let thetaCount = 0;
    for (const d of domainDims) {
      if (profile.skills[d] && profile.skills[d].totalAttempts > 0) {
        thetaSum += profile.skills[d].theta;
        thetaCount++;
      }
    }
    const theta = thetaCount > 0 ? Number((thetaSum / thetaCount).toFixed(2)) : Number(((tierLevel - 4) * 0.4).toFixed(2));

    const status: 'champion' | 'proficient' | 'needs_strengthening' =
      tierLevel >= 7 && accuracy >= 80 ? 'champion' : tierLevel >= 4 && accuracy >= 60 ? 'proficient' : 'needs_strengthening';

    const { recommendedTechnique, techniqueExplanation } = getRecommendedTechniqueForDomain(domain, tierLevel, accuracy);

    return {
      domain,
      label: DOMAIN_LABELS[domain] || domain,
      tierLevel,
      tierName,
      accuracy,
      avgLatencyMs,
      theta,
      recommendedTechnique,
      techniqueExplanation,
      status,
    };
  });

  // Calculate overall theta
  let totalTheta = 0;
  let validCounts = 0;
  for (const dp of domainProficiencies) {
    totalTheta += dp.theta;
    validCounts++;
  }
  const overallTheta = validCounts > 0 ? Number((totalTheta / validCounts).toFixed(2)) : 0.0;

  let overallTier = 'Apprentice';
  if (overallTheta >= 2.0) overallTier = 'Shakuntala Grandmaster';
  else if (overallTheta >= 1.2) overallTier = 'Apex Mentalist';
  else if (overallTheta >= 0.4) overallTier = 'Proficient Calculator';
  else if (overallTheta >= -0.5) overallTier = 'Developing Explorer';

  const arch = archetype || classifyLearnerArchetype(responses);

  // Identify strengths and gaps
  const sortedDomains = [...domainProficiencies].sort((a, b) => b.theta - a.theta);
  const strengths = sortedDomains.slice(0, 2).map((dp) => ({
    dimension: (dp.domain === 'tables' ? 'mult_core_tables' : dp.domain === 'addition' ? 'add_sub_multidigit_l2r' : 'squares_ending_5') as SkillDimension,
    label: dp.label,
    theta: dp.theta,
    detail: `Tier ${dp.tierLevel} (${dp.tierName}) with ${dp.accuracy}% accuracy. Strong calculation instinct.`,
  }));

  const gaps = [...domainProficiencies].sort((a, b) => a.theta - b.theta).slice(0, 2).map((dp) => ({
    dimension: (dp.domain === 'division' ? 'div_by_1d' : dp.domain === 'shakuntala_feats' ? 'shakuntala_cube_roots' : 'mult_teen_tables') as SkillDimension,
    label: dp.label,
    theta: dp.theta,
    detail: `Priority focus: master "${dp.recommendedTechnique}" to eliminate calculation bottlenecks.`,
  }));

  // Recommended techniques list
  const recommendedTechniquesList = domainProficiencies
    .filter((dp) => dp.status === 'needs_strengthening' || dp.tierLevel < 6)
    .slice(0, 3)
    .map((dp) => ({
      domain: dp.label,
      techniqueName: dp.recommendedTechnique || 'Split-and-Add',
      description: dp.techniqueExplanation || 'Decompose place values mentally.',
      drillRoute: `/practice?track=${dp.domain}`,
    }));

  // Granular facts categorization
  const fastButCarelessFacts: string[] = [];
  const accurateButSlowFacts: string[] = [];
  const skippedFacts: string[] = [];
  const factsNeedingStrategy: string[] = [];

  for (const resp of responses) {
    const key = resp.factKey || resp.questionId;
    if (resp.isSkipped) {
      skippedFacts.push(key);
    } else if (resp.rapidGuess || (!resp.isCorrect && resp.latencyMs < 1800)) {
      fastButCarelessFacts.push(key);
    } else if (resp.isCorrect && resp.latencyMs > 3500) {
      accurateButSlowFacts.push(key);
    } else if (!resp.isCorrect) {
      factsNeedingStrategy.push(key);
    }
  }

  let paceMinutes = 15;
  if (arch === 'accurate_but_slow') paceMinutes = 12;
  else if (arch === 'fast_but_careless') paceMinutes = 15;
  else if (arch === 'ready_for_advanced') paceMinutes = 20;

  const roadmap: string[] = [
    'Phase 1: Lock in core times tables (1–20) and base-100 complements.',
    'Phase 2: Master split-and-add for teen multipliers and base-50 squares.',
    'Phase 3: Introduce Vedic criss-cross multiplication and factor division.',
    'Phase 4: Unlock Shakuntala Devi 6-digit cube root extraction and mixed speed challenges.',
  ];

  let summaryMessage = 'Your mental arithmetic baseline has been mapped across all 7 operational domains. The curriculum engine has personalized your drills to turn your weak fields into championship strengths.';
  if (arch === 'ready_for_advanced') {
    summaryMessage = 'Phenomenal mental velocity and accuracy across tables, powers, and roots. You are ready for high-speed multi-digit duplex calculations and Shakuntala Devi mastery trials.';
  } else if (arch === 'accurate_but_slow') {
    summaryMessage = 'Outstanding mathematical accuracy with zero reckless guessing. Our drills will now focus on eliminating sub-vocalization latency to double your calculation speed.';
  } else if (arch === 'fast_but_careless') {
    summaryMessage = 'High cognitive calculation speed. We will equip you with quick parity and magnitude verification checks so your speed translates into 100% rock-solid accuracy.';
  }

  // Detailed Tables 1-100 Decade Breakdown
  const tableResponses = responses.filter((r) => getDomainForResponse(r) === 'tables');
  const decadeBuckets: Record<string, { label: string; responses: AssessmentResponse[] }> = {
    decade1_10: { label: 'Single Digits (1–10)', responses: [] },
    decade11_20: { label: 'Teen Tables (11–20)', responses: [] },
    decade21_30: { label: '20s Decade (21–30)', responses: [] },
    decade31_50: { label: '30s–50s Decade', responses: [] },
    decade51_100: { label: 'High Tables (51–100)', responses: [] },
  };

  for (const r of tableResponses) {
    let tbl = 5;
    if (r.factKey && r.factKey.startsWith('mul:')) {
      const parts = r.factKey.split(':');
      tbl = parseInt(parts[1], 10) || 5;
    } else {
      const q = session.questions.find((x) => x.id === r.questionId);
      tbl = q ? Math.max(q.operandA, q.operandB) : 5;
    }

    if (tbl <= 10) decadeBuckets.decade1_10.responses.push(r);
    else if (tbl <= 20) decadeBuckets.decade11_20.responses.push(r);
    else if (tbl <= 30) decadeBuckets.decade21_30.responses.push(r);
    else if (tbl <= 50) decadeBuckets.decade31_50.responses.push(r);
    else decadeBuckets.decade51_100.responses.push(r);
  }

  const tablesDecadeBreakdown: TableDecadeStat[] = Object.entries(decadeBuckets).map(
    ([decadeKey, bucket]) => {
      const asked = bucket.responses.length;
      const correct = bucket.responses.filter((x) => x.isCorrect).length;
      const accuracyPercent = asked > 0 ? Math.round((correct / asked) * 100) : 0;
      const avgLatencyMs = asked > 0
        ? Math.round(bucket.responses.reduce((sum, x) => sum + x.latencyMs, 0) / asked)
        : 2500;

      let status: 'mastered' | 'fluent' | 'learning' | 'struggling' = 'learning';
      if (asked === 0) status = 'learning';
      else if (accuracyPercent >= 90 && avgLatencyMs < 2000) status = 'mastered';
      else if (accuracyPercent >= 75) status = 'fluent';
      else if (accuracyPercent >= 50) status = 'learning';
      else status = 'struggling';

      return {
        decadeKey: decadeKey as TableDecadeStat['decadeKey'],
        label: bucket.label,
        totalAsked: asked,
        correctCount: correct,
        accuracyPercent,
        avgLatencyMs,
        status,
      };
    }
  );

  return {
    assessedAt: Date.now(),
    overallTheta,
    overallTier: `${overallTier} (${arch.replace(/_/g, ' ')})`,
    archetype: arch,
    strengths,
    priorityGaps: gaps,
    fastButCarelessFacts: Array.from(new Set(fastButCarelessFacts)).slice(0, 5),
    accurateButSlowFacts: Array.from(new Set(accurateButSlowFacts)).slice(0, 5),
    skippedFacts: Array.from(new Set(skippedFacts)).slice(0, 5),
    factsNeedingStrategy: Array.from(new Set(factsNeedingStrategy)).slice(0, 5),
    recommendedDailyPaceMinutes: paceMinutes,
    firstWeekRoadmap: roadmap,
    summaryMessage,
    domainProficiencies,
    tablesDecadeBreakdown,
    recommendedTechniquesList,
  };
}

/**
 * Maps each domain and tier to the optimal mental technique from the strategy catalog.
 */
function getRecommendedTechniqueForDomain(
  domain: DiagnosticDomain,
  tier: number,
  accuracy: number
): { recommendedTechnique: string; techniqueExplanation: string } {
  switch (domain) {
    case 'tables':
      return tier < 5
        ? {
            recommendedTechnique: 'Split-and-Add Teen Table Decoupling',
            techniqueExplanation: 'Break down 14 × 7 into (10 × 7) + (4 × 7) = 70 + 28 = 98.',
          }
        : {
            recommendedTechnique: 'Subitizing Anchor Recall (Tables 21–100)',
            techniqueExplanation: 'Treat numbers like 48 × 6 as (50 × 6) - (2 × 6) = 300 - 12 = 288.',
          };
    case 'addition':
      return {
        recommendedTechnique: 'Left-to-Right Place Value Accumulation',
        techniqueExplanation: 'Calculate hundreds and tens first before touching units to keep running mental sum.',
      };
    case 'subtraction':
      return {
        recommendedTechnique: 'Vedic All From 9, Last From 10',
        techniqueExplanation: 'To subtract from 1,000 or 10,000, subtract every digit from 9 and final non-zero from 10.',
      };
    case 'multiplication':
      return tier < 6
        ? {
            recommendedTechnique: 'Base-10 Teen Multiplication Formula',
            techniqueExplanation: 'For 13 × 14, take (13 + 4) × 10 = 170, plus 3 × 4 = 12 → 182.',
          }
        : {
            recommendedTechnique: 'Vedic Urdhva Tiryagbhyam (Criss-Cross)',
            techniqueExplanation: 'Multiply units, cross-multiply and add, then multiply tens in one fluid stroke.',
          };
    case 'division':
      return {
        recommendedTechnique: 'Factor Division & Proportion Halving',
        techniqueExplanation: 'Divide by 18 by dividing by 2 then 9; divide by 25 by quadrupling and shifting decimal.',
      };
    case 'squares_cubes':
      return tier < 5
        ? {
            recommendedTechnique: 'Square of Numbers Ending in 5 (Ekadhikena)',
            techniqueExplanation: 'For 35², multiply prefix 3 × 4 = 12 and attach 25 → 1,225.',
          }
        : {
            recommendedTechnique: 'Base-50 Deviation Squaring: (25 ± d | d²)',
            techniqueExplanation: 'For 54², take 25 + 4 = 29 and 4² = 16 → 2,916.',
          };
    case 'shakuntala_feats':
      return {
        recommendedTechnique: 'Shakuntala Devi 6-Digit Cube Root Secret',
        techniqueExplanation: 'Units digit maps directly (2↔8, 3↔7); thousands prefix boundaries reveal tens digit in 1 second.',
      };
    default:
      return {
        recommendedTechnique: 'Left-to-Right Mental Accumulator',
        techniqueExplanation: 'Process higher place values first for swift calculation.',
      };
  }
}
