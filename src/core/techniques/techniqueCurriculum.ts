/**
 * Comprehensive Mental Math Curriculum Catalog
 * Dedicated Theory Lessons, Algebraic Proofs, Mind-Odometer Memory Strategies,
 * and Worked Examples across all 5 core modules.
 */

import { TechniqueLesson, TechniqueModuleCategory, CalculationTechniqueId } from '../types';

export interface ModuleMetadata {
  id: TechniqueModuleCategory;
  title: string;
  subtitle: string;
  color: string;
  iconName: string;
  techniqueIds: CalculationTechniqueId[];
}

export const MODULE_METADATA: Record<TechniqueModuleCategory, ModuleMetadata> = {
  fundamental_operations: {
    id: 'fundamental_operations',
    title: '1. Fundamental Operations',
    subtitle: 'Left-to-Right Place-Value & Working-Memory Retainers',
    color: 'emerald',
    iconName: 'PlusCircle',
    techniqueIds: [
      'add_l2r_place_value',
      'add_bridging_base10',
      'add_compensation',
      'sub_l2r_step',
      'sub_shopkeeper_count_up',
      'sub_nikhilam_all_from_9',
    ],
  },
  multiplication_engine: {
    id: 'multiplication_engine',
    title: '2. Multiplication Techniques',
    subtitle: 'Global Powers-of-10, Repunits & Universal Vedic Crosswise',
    color: 'indigo',
    iconName: 'XCircle',
    techniqueIds: [
      'mult_power10_5',
      'mult_power10_25',
      'mult_power10_125',
      'mult_power10_625',
      'mult_repunit_11',
      'mult_repunit_teens_decade',
      'mult_repunit_9s_ekanyunena',
      'mult_pattern_consecutive_int',
      'mult_pattern_consecutive_gap2',
      'mult_pattern_antyayor_dasakepi',
      'mult_pattern_reverse_antyayor',
      'mult_pattern_half_double',
      'mult_vedic_urdhva_tiryag',
      'mult_trachtenberg_rules',
      'mult_vedic_base_yavadunam',
    ],
  },
  squares_cubes_powers: {
    id: 'squares_cubes_powers',
    title: '3. Squares, Cubes & Powers',
    subtitle: 'Base Deviations, Universal Duplex & Binomial Expansions',
    color: 'violet',
    iconName: 'Zap',
    techniqueIds: [
      'sq_base_50',
      'sq_base_100',
      'sq_ending_5',
      'sq_ending_25',
      'sq_universal_duplex',
      'cube_tables_1_25',
      'cube_algebraic_binomial',
    ],
  },
  roots_approximations: {
    id: 'roots_approximations',
    title: '4. Root Extractions & Approximations',
    subtitle: 'Unit Elimination Bounding & First-Order Differentials',
    color: 'amber',
    iconName: 'Target',
    techniqueIds: [
      'root_sqrt_perfect_6d',
      'root_sqrt_approx_differential',
      'root_cbrt_perfect_6d',
    ],
  },
  fast_division_percentages: {
    id: 'fast_division_percentages',
    title: '5. Fast Division & Percentages',
    subtitle: 'Vedic Flag Method, Ekadhika Osculators & Reversible Base Pivots',
    color: 'rose',
    iconName: 'Percent',
    techniqueIds: [
      'div_vedic_flag_dhvajanka',
      'div_vedic_osculators',
      'pct_reversible_law',
      'pct_fraction_pivots',
    ],
  },
};

export const TECHNIQUE_CURRICULUM: Record<CalculationTechniqueId, TechniqueLesson> = {
  // -------------------------------------------------------------
  // MODULE 1: FUNDAMENTAL OPERATIONS
  // -------------------------------------------------------------
  add_l2r_place_value: {
    id: 'add_l2r_place_value',
    module: 'fundamental_operations',
    title: 'Left-to-Right Place-Value Addition',
    subtitle: 'Add 2-digit to 5-digit numbers from largest place value to smallest',
    difficultyTier: 2,
    algebraicFormula: '(A_k \\cdot 10^k + \\dots) + (B_k \\cdot 10^k + \\dots) = \\sum (A_i + B_i)10^i',
    mathSecret: {
      title: 'The Most-Significant-Digit Priority Rule',
      description:
        'Standard school arithmetic computes right-to-left, which requires storing silent carry digits while calculating the tens or hundreds. By accumulating Left-to-Right, you immediately anchor the magnitude of the answer.',
      algebraicProof:
        'For two numbers A and B decomposed into place-values: A + B = (A_high + B_high) + (A_low + B_low). Maintaining a single running total ensures zero backward lookahead.',
      conditions: 'Universal: works for any addition of 2-digit, 3-digit, 4-digit, or 5-digit numbers.',
    },
    mindOdometer: {
      trickTitle: 'The Running Auditory Accumulator',
      subvocalInstruction:
        'Speak the running total into your inner ear at every step. For 456 + 278: "600" -> "720" -> "734".',
      carryEliminationRule:
        'Never write carry digits. Add the current place value to your accumulator immediately. If adding creates a decade carry, adjust the running total instantly.',
      visualAccumulatorExample: '456 + 278: [400+200=600] -> [600+50+70=720] -> [720+6+8=734]',
    },
    workedExample: {
      problem: '456 + 278',
      steps: [
        { step: 1, action: 'Add Hundreds', echo: 'Echo: "600"', buffer: 600 },
        { step: 2, action: 'Add Tens (50 + 70 = 120)', echo: 'Echo: "720"', buffer: 720 },
        { step: 3, action: 'Add Units (6 + 8 = 14)', echo: 'Resolve to: "734"', buffer: 734 },
      ],
      finalResult: 734,
    },
  },

  add_bridging_base10: {
    id: 'add_bridging_base10',
    module: 'fundamental_operations',
    title: 'Bridging & Chunking via Base-10 Anchors',
    subtitle: 'Hop to the clean decade before adding the remainder',
    difficultyTier: 1,
    algebraicFormula: 'A + B = (A + \\Delta_{10}) + (B - \\Delta_{10})',
    mathSecret: {
      title: 'Base-10 Decade Stepping',
      description:
        'Working memory easily steps forward along clean decade multiples (30, 40, 50). Split the second addend into two pieces: what is needed to hit the next decade, and whatever is left over.',
      algebraicProof:
        'Let D = \\lceil A/10 \\rceil \\times 10. Then A + B = D + (B - (D - A)). Both additions require zero column tracking.',
      conditions: 'Optimal when adding single or double digits across decade boundaries (e.g. 67 + 58).',
    },
    mindOdometer: {
      trickTitle: 'Decade Snap & Hop',
      subvocalInstruction:
        'Look at 67 + 58: First add the 50 -> "117". To add 8, snap +3 to reach "120", then hop +5 to "125".',
      carryEliminationRule: 'Divide the unit addition into a bridge component and a residual component.',
      visualAccumulatorExample: '67 + 58 = (67 + 50) + 8 = 117 + (3 + 5) = 120 + 5 = 125',
    },
    workedExample: {
      problem: '67 + 58',
      steps: [
        { step: 1, action: 'Add tens chunk (67 + 50)', echo: 'Echo: "117"', buffer: 117 },
        { step: 2, action: 'Bridge to clean decade (+3)', echo: 'Snap: "120"', buffer: 120 },
        { step: 3, action: 'Add remaining (+5)', echo: 'Resolve to: "125"', buffer: 125 },
      ],
      finalResult: 125,
    },
  },

  add_compensation: {
    id: 'add_compensation',
    module: 'fundamental_operations',
    title: 'Compensation Method (Over-Addition)',
    subtitle: 'Add a clean century or decade, then refund the excess',
    difficultyTier: 2,
    algebraicFormula: 'A + (10^k - d) = (A + 10^k) - d',
    mathSecret: {
      title: 'The Clean Overhang Principle',
      description:
        'Adding numbers ending in 7, 8, or 9 (such as 98, 49, 197) is messy. Instead, add the nearest clean power of 10 and subtract the small overhang.',
      algebraicProof: 'A + 98 = A + (100 - 2) = (A + 100) - 2.',
      conditions: 'Used when one addend is within 1 to 5 units of a clean decade, hundred, or thousand.',
    },
    mindOdometer: {
      trickTitle: 'The Elastic Refund',
      subvocalInstruction: 'Say: "Add 100, give back 2". For 465 + 98: 465 + 100 = 565; 565 - 2 = 563.',
      carryEliminationRule: 'Eliminates all multidigit carries by shifting computation to a 1-digit subtraction.',
      visualAccumulatorExample: '465 + 98 -> 465 + 100 = 565 -> 565 - 2 = 563',
    },
    workedExample: {
      problem: '465 + 98',
      steps: [
        { step: 1, action: 'Round 98 to 100 (Overhang: +2)', echo: 'Add 100: "565"', buffer: 565 },
        { step: 2, action: 'Refund the excess 2', echo: 'Resolve to: "563"', buffer: 563 },
      ],
      finalResult: 563,
    },
  },

  sub_l2r_step: {
    id: 'sub_l2r_step',
    module: 'fundamental_operations',
    title: 'Left-to-Right Step Subtraction',
    subtitle: 'Subtract higher place values first to anchor estimates',
    difficultyTier: 2,
    algebraicFormula: 'A - B = (A - B_{high}) - B_{low}',
    mathSecret: {
      title: 'Progressive Place Stripping',
      description:
        'Traditional column subtraction requires borrowing right-to-left. Left-to-Right subtraction strips tens first, then units, keeping the estimate anchored immediately.',
      algebraicProof: 'A - (T \\cdot 10 + U) = (A - T \\cdot 10) - U.',
      conditions: 'Universal for all 2-digit to 4-digit mental subtractions.',
    },
    mindOdometer: {
      trickTitle: 'Step-Down Echo',
      subvocalInstruction: 'For 84 - 36: First subtract 30 -> echo "54". Then 54 - 6 -> echo "48".',
      carryEliminationRule: 'No borrowing notation needed; step down into the lower decade seamlessly.',
      visualAccumulatorExample: '84 - 36 = (84 - 30) - 6 = 54 - 6 = 48',
    },
    workedExample: {
      problem: '84 - 36',
      steps: [
        { step: 1, action: 'Subtract Tens (84 - 30)', echo: 'Echo: "54"', buffer: 54 },
        { step: 2, action: 'Subtract Units (54 - 6)', echo: 'Resolve to: "48"', buffer: 48 },
      ],
      finalResult: 48,
    },
  },

  sub_shopkeeper_count_up: {
    id: 'sub_shopkeeper_count_up',
    module: 'fundamental_operations',
    title: "Shopkeeper's Additive Method (Counting Up)",
    subtitle: 'Convert hard subtractions into easy additions along landmark anchors',
    difficultyTier: 2,
    algebraicFormula: 'B - A = \\Delta_1 + \\Delta_2 + \\Delta_3 \\text{ where } A + \\sum \\Delta = B',
    mathSecret: {
      title: 'The Cash Register Making-Change Algorithm',
      description:
        'Human brains process addition significantly faster than subtraction. To calculate 100 - 38, count forward from 38 to 100 using landmark anchors (40, 100).',
      algebraicProof: '100 - 38: (38 + 2 = 40) + 60 = 100. Total added = 2 + 60 = 62.',
      conditions: 'Particularly effective when finding differences between close numbers or from clean anchors.',
    },
    mindOdometer: {
      trickTitle: 'The Cash Till Tally',
      subvocalInstruction: 'For 100 - 38: "38 plus 2 makes 40, plus 60 makes 100. Total: 62."',
      carryEliminationRule: 'Eliminates borrowing entirely by transforming difference into forward hops.',
      visualAccumulatorExample: '38 -> (+2) -> 40 -> (+60) -> 100 => 2 + 60 = 62',
    },
    workedExample: {
      problem: '100 - 38',
      steps: [
        { step: 1, action: 'Hop to nearest decade (+2 to 40)', echo: 'Tally: 2', buffer: 2 },
        { step: 2, action: 'Hop to target hundred (+60 to 100)', echo: 'Tally: 2 + 60', buffer: 62 },
      ],
      finalResult: 62,
    },
  },

  sub_nikhilam_all_from_9: {
    id: 'sub_nikhilam_all_from_9',
    module: 'fundamental_operations',
    title: 'Vedic Nikhilam: "All from 9 and Last from 10"',
    subtitle: 'Subtract any number from 1,000, 10,000, or 100,000 in one visual sweep',
    difficultyTier: 2,
    algebraicFormula: '10^k - N = \\sum_{i=1}^{k-1} (9 - d_i)10^{k-i} + (10 - d_k)',
    mathSecret: {
      title: 'Vedic Complement Sutra',
      description:
        'Subtracting a multi-digit number from a power of 10 (1000, 10000) causes cascading borrow chains. The Vedic sutra proves that subtracting every digit from 9, and only the final non-zero digit from 10, gives the exact answer instantly from left to right.',
      algebraicProof:
        '1000 - ABC = (999 + 1) - ABC = (9 - A)100 + (9 - B)10 + (10 - C).',
      conditions: 'Minuend must be a pure power of 10 (100, 1000, 10000, 100000).',
    },
    mindOdometer: {
      trickTitle: 'The 9s-Sweep and 10-Drop',
      subvocalInstruction:
        'For 10,000 - 4,738: Left-to-right: 9 - 4 = 5; 9 - 7 = 2; 9 - 3 = 6; last 10 - 8 = 2. Read directly: 5,262.',
      carryEliminationRule: 'Zero borrowing. Read left-to-right directly onto the display.',
      visualAccumulatorExample: '10000 - 4738: [9-4=5] [9-7=2] [9-3=6] [10-8=2] => 5262',
    },
    workedExample: {
      problem: '1000 - 347',
      steps: [
        { step: 1, action: 'First digit from 9: 9 - 3', echo: 'Hundreds: "6"', buffer: 6 },
        { step: 2, action: 'Middle digit from 9: 9 - 4', echo: 'Tens: "5"', buffer: 65 },
        { step: 3, action: 'Last digit from 10: 10 - 7', echo: 'Units: "3"', buffer: 653 },
      ],
      finalResult: 653,
    },
  },

  // -------------------------------------------------------------
  // MODULE 2: MULTIPLICATION TECHNIQUES
  // -------------------------------------------------------------
  mult_power10_5: {
    id: 'mult_power10_5',
    module: 'multiplication_engine',
    title: 'Base Conversion: Multiply by 5',
    subtitle: 'Multiply by 10 and divide by 2',
    difficultyTier: 1,
    algebraicFormula: 'N \\times 5 = \\frac{N \\times 10}{2} = \\frac{N}{2} \\times 10',
    mathSecret: {
      title: 'The Half-Decade Pivot',
      description: '5 is equal to 10 / 2. Multiplying by 10 is instantaneous (append zero), so simply cut the number in half.',
      algebraicProof: 'N \\times 5 = N \\times \\frac{10}{2} = \\frac{10N}{2}.',
      conditions: 'Universal for any integer.',
    },
    mindOdometer: {
      trickTitle: 'Halve and Shift',
      subvocalInstruction: 'For 48 × 5: Halve 48 -> 24; append zero -> 240.',
      carryEliminationRule: 'If N is odd, halve to .5 and shift: 47 / 2 = 23.5 -> 235.',
      visualAccumulatorExample: '64 × 5 -> 64 / 2 = 32 -> 320',
    },
    workedExample: {
      problem: '64 × 5',
      steps: [
        { step: 1, action: 'Halve the operand (64 ÷ 2)', echo: 'Half: "32"', buffer: 32 },
        { step: 2, action: 'Multiply by 10 (append 0)', echo: 'Resolve to: "320"', buffer: 320 },
      ],
      finalResult: 320,
    },
  },

  mult_power10_25: {
    id: 'mult_power10_25',
    module: 'multiplication_engine',
    title: 'Base Conversion: Multiply by 25',
    subtitle: 'Multiply by 100 and divide by 4',
    difficultyTier: 2,
    algebraicFormula: 'N \\times 25 = \\frac{N \\times 100}{4}',
    mathSecret: {
      title: 'The Quarter-Century Conversion',
      description: '25 is equal to 100 / 4. Dividing by 4 is merely halving twice.',
      algebraicProof: 'N \\times 25 = N \\times \\frac{100}{4} = \\frac{100N}{4}.',
      conditions: 'Universal. Remainders map cleanly: R1 -> 25, R2 -> 50, R3 -> 75.',
    },
    mindOdometer: {
      trickTitle: 'Double Halve & Century Append',
      subvocalInstruction: 'For 48 × 25: 48 -> 24 -> 12. Append 00 -> 1200.',
      carryEliminationRule: 'Quarter the number, append remainder quadrant: 0 -> 00, 1 -> 25, 2 -> 50, 3 -> 75.',
      visualAccumulatorExample: '48 × 25 = (48 / 4) × 100 = 12 × 100 = 1200',
    },
    workedExample: {
      problem: '48 × 25',
      steps: [
        { step: 1, action: 'Divide by 4 (halve twice: 48 -> 24 -> 12)', echo: 'Quotient: "12"', buffer: 12 },
        { step: 2, action: 'Append two zeros (× 100)', echo: 'Resolve to: "1200"', buffer: 1200 },
      ],
      finalResult: 1200,
    },
  },

  mult_power10_125: {
    id: 'mult_power10_125',
    module: 'multiplication_engine',
    title: 'Base Conversion: Multiply by 125',
    subtitle: 'Multiply by 1,000 and divide by 8',
    difficultyTier: 3,
    algebraicFormula: 'N \\times 125 = \\frac{N \\times 1000}{8}',
    mathSecret: {
      title: 'The Thousand-Eighths Rule',
      description: '125 is 1000 / 8. Halve the number three times in succession, then append three zeros.',
      algebraicProof: 'N \\times 125 = N \\times \\frac{1000}{8} = \\frac{1000N}{8}.',
      conditions: 'Extremely fast for multiples of 8, or with simple 1/8 decimal mappings (125 per unit remainder).',
    },
    mindOdometer: {
      trickTitle: 'Triple Halve & 1,000 Scale',
      subvocalInstruction: 'For 56 × 125: Halve thrice: 56 -> 28 -> 14 -> 7. Append 000 -> 7,000.',
      carryEliminationRule: 'Triple halving replaces 3 separate multiplication cycles with trivial binary shifts.',
      visualAccumulatorExample: '56 × 125 = (56 / 8) × 1000 = 7 × 1000 = 7000',
    },
    workedExample: {
      problem: '56 × 125',
      steps: [
        { step: 1, action: 'Divide by 8 (Halve 3 times: 56 -> 28 -> 14 -> 7)', echo: 'Quarter-half: "7"', buffer: 7 },
        { step: 2, action: 'Multiply by 1000', echo: 'Resolve to: "7000"', buffer: 7000 },
      ],
      finalResult: 7000,
    },
  },

  mult_power10_625: {
    id: 'mult_power10_625',
    module: 'multiplication_engine',
    title: 'Base Conversion: Multiply by 625',
    subtitle: 'Multiply by 10,000 and divide by 16',
    difficultyTier: 4,
    algebraicFormula: 'N \\times 625 = \\frac{N \\times 10000}{16}',
    mathSecret: {
      title: 'Ten-Thousand Sixteenths Rule',
      description: '625 = 10000 / 16 = 10000 / 2^4. Halve the number 4 times and append 4 zeros.',
      algebraicProof: 'N \\times 625 = N \\times \\frac{10000}{16} = \\frac{10000N}{16}.',
      conditions: 'Optimal for multiples of 16 (e.g. 32 × 625, 48 × 625).',
    },
    mindOdometer: {
      trickTitle: 'Quadruple Halve & 10,000 Scale',
      subvocalInstruction: 'For 32 × 625: Halve 4 times: 32 -> 16 -> 8 -> 4 -> 2. Append 0000 -> 20,000.',
      carryEliminationRule: 'Replace 4-digit multiplication by 4 successive halvings.',
      visualAccumulatorExample: '32 × 625 = (32 / 16) × 10000 = 2 × 10000 = 20000',
    },
    workedExample: {
      problem: '32 × 625',
      steps: [
        { step: 1, action: 'Divide by 16 (32 ÷ 16)', echo: 'Sixteenth: "2"', buffer: 2 },
        { step: 2, action: 'Multiply by 10,000', echo: 'Resolve to: "20000"', buffer: 20000 },
      ],
      finalResult: 20000,
    },
  },

  mult_repunit_11: {
    id: 'mult_repunit_11',
    module: 'multiplication_engine',
    title: 'Repunit: Multiply by 11 (Neighbor Sum Rule)',
    subtitle: 'Add adjacent neighbors with intermediate carry buffering',
    difficultyTier: 2,
    algebraicFormula: '(d_k \\dots d_0) \\times 11 = \\sum (d_i + d_{i-1})10^i',
    mathSecret: {
      title: 'The Neighbor Sum Algorithm',
      description:
        'Multiplying any number by 11 is equivalent to adding the number to 10 times itself. Each digit in the product is simply the sum of two adjacent neighbor digits plus any carry.',
      algebraicProof:
        'For 2-digit AB: AB × 11 = 10(AB) + AB = 100A + 10(A + B) + B. For multi-digit, each position i is (d_i + d_{i-1}).',
      conditions: 'Universal for any number multiplied by 11.',
    },
    mindOdometer: {
      trickTitle: 'The Sandwich & Sum',
      subvocalInstruction:
        'For 84 × 11: Sandwich 8 and 4. Middle is 8 + 4 = 12. Buffer carry 1 into 8 -> "924".',
      carryEliminationRule: 'If the neighbor sum is 10 or greater, push +1 to the preceding left digit.',
      visualAccumulatorExample: '84 × 11: 8 _ 4 -> 8 + 4 = 12 -> (8+1) | 2 | 4 = 924',
    },
    workedExample: {
      problem: '84 × 11',
      steps: [
        { step: 1, action: 'Rightmost units digit is 4', echo: 'Units: "4"', buffer: 4 },
        { step: 2, action: 'Add neighbor digits: 8 + 4 = 12', echo: 'Middle: 2 (carry 1)', buffer: 24 },
        { step: 3, action: 'Left digit plus carry: 8 + 1 = 9', echo: 'Resolve to: "924"', buffer: 924 },
      ],
      finalResult: 924,
    },
  },

  mult_repunit_teens_decade: {
    id: 'mult_repunit_teens_decade',
    module: 'multiplication_engine',
    title: 'Repunits: Multiply by 22, 33, ..., 99',
    subtitle: 'Factorize into single-digit multiplier then apply 11-rule',
    difficultyTier: 3,
    algebraicFormula: 'N \\times (k \\times 11) = (N \\times k) \\times 11',
    mathSecret: {
      title: 'Factorization Pivot',
      description:
        'Numbers like 33, 44, 77 are repunits. First multiply by the single digit k, then apply the lightning 11-neighbor rule to the result.',
      algebraicProof: 'N × 33 = N × (3 × 11) = (3N) × 11.',
      conditions: 'Applies to any multiplication where one multiplier is a multiple of 11 (22 to 99).',
    },
    mindOdometer: {
      trickTitle: 'Scalar Pre-Multiply then 11-Sweep',
      subvocalInstruction: 'For 24 × 33: 24 × 3 = 72. Now 72 × 11: 7 _ 2 with 7+2=9 -> 792.',
      carryEliminationRule: 'Perform single digit multiplication first to keep working memory light.',
      visualAccumulatorExample: '24 × 33 = (24 × 3) × 11 = 72 × 11 = 792',
    },
    workedExample: {
      problem: '24 × 33',
      steps: [
        { step: 1, action: 'Pre-multiply by 3: 24 × 3', echo: 'Base: "72"', buffer: 72 },
        { step: 2, action: 'Apply 11-neighbor rule: 7 _ 2 (7 + 2 = 9)', echo: 'Resolve to: "792"', buffer: 792 },
      ],
      finalResult: 792,
    },
  },

  mult_repunit_9s_ekanyunena: {
    id: 'mult_repunit_9s_ekanyunena',
    module: 'multiplication_engine',
    title: 'Vedic Ekanyunena Purvena (× 9, 99, 999, 9999)',
    subtitle: '"By One Less Than the Previous": instantaneous left-to-right writing',
    difficultyTier: 3,
    algebraicFormula: 'N \\times (10^k - 1) = (N - 1)10^k + (10^k - 1 - (N - 1))',
    mathSecret: {
      title: 'The Vedic Sub-Base Complements Rule',
      description:
        'When multiplying any number N by a block of 9s with equal digit length, the left part is simply N - 1, and the right part is the 9s-complement of the left part.',
      algebraicProof: 'N × 99 = N(100 - 1) = 100(N - 1) + (100 - N) = (N - 1) | (99 - (N - 1)).',
      conditions: 'Number of digits in N must be less than or equal to number of 9s.',
    },
    mindOdometer: {
      trickTitle: 'Minus-One and 9-Complement Pair',
      subvocalInstruction:
        'For 63 × 99: Left part is 63 - 1 = 62. Right part is complements from 9: 9-6=3, 9-2=7 -> "37". Answer: 6237.',
      carryEliminationRule: 'No mental carries. Write the left half, then complement each digit for the right half.',
      visualAccumulatorExample: '63 × 99: [63 - 1 = 62] | [99 - 62 = 37] => 6237',
    },
    workedExample: {
      problem: '63 × 99',
      steps: [
        { step: 1, action: 'Subtract 1 from operand: 63 - 1', echo: 'Left part: "62"', buffer: 62 },
        { step: 2, action: 'Take 9-complements of left part: (9-6, 9-2)', echo: 'Right part: "37"', buffer: 6237 },
      ],
      finalResult: 6237,
    },
  },

  mult_pattern_consecutive_int: {
    id: 'mult_pattern_consecutive_int',
    module: 'multiplication_engine',
    title: 'Consecutive Integers: N × (N + 1)',
    subtitle: 'Square the smaller number and add it: N² + N',
    difficultyTier: 2,
    algebraicFormula: 'N \\times (N + 1) = N^2 + N',
    mathSecret: {
      title: 'The Triangular Square Identity',
      description:
        'Multiplying consecutive numbers (e.g. 24 × 25 or 15 × 16) is computationally identical to squaring the base number and adding one more of itself.',
      algebraicProof: 'N(N + 1) = N^2 + N. Alternatively: (N + 1)^2 - (N + 1).',
      conditions: 'Factors have a difference of 1.',
    },
    mindOdometer: {
      trickTitle: 'Square & Append Anchor',
      subvocalInstruction: 'For 15 × 16: 15² is 225. Add 15 -> 225 + 15 = 240.',
      carryEliminationRule: 'Leverage instant square memory instead of double-digit multiplication.',
      visualAccumulatorExample: '15 × 16 = 15² + 15 = 225 + 15 = 240',
    },
    workedExample: {
      problem: '15 × 16',
      steps: [
        { step: 1, action: 'Square the smaller number: 15²', echo: 'Square: "225"', buffer: 225 },
        { step: 2, action: 'Add smaller number: 225 + 15', echo: 'Resolve to: "240"', buffer: 240 },
      ],
      finalResult: 240,
    },
  },

  mult_pattern_consecutive_gap2: {
    id: 'mult_pattern_consecutive_gap2',
    module: 'multiplication_engine',
    title: 'Consecutive Even/Odd (Gap of 2): N × (N + 2)',
    subtitle: 'Difference of squares: (Middle)² - 1',
    difficultyTier: 2,
    algebraicFormula: '(M - 1)(M + 1) = M^2 - 1',
    mathSecret: {
      title: 'Difference of Squares Identity',
      description:
        'When two numbers have an even gap of 2 (e.g. 19 × 21, 34 × 36), the product is simply the square of the central number minus 1.',
      algebraicProof: '(M - 1)(M + 1) = M^2 - 1^2 = M^2 - 1.',
      conditions: 'Numbers must differ by 2 (both even or both odd).',
    },
    mindOdometer: {
      trickTitle: 'Center Square Minus One',
      subvocalInstruction: 'For 19 × 21: Center is 20. 20² = 400. Subtract 1 -> 399.',
      carryEliminationRule: 'Direct 1-step calculation from memorized center square.',
      visualAccumulatorExample: '19 × 21 = 20² - 1 = 400 - 1 = 399',
    },
    workedExample: {
      problem: '19 × 21',
      steps: [
        { step: 1, action: 'Find center number and square it: 20²', echo: 'Center square: "400"', buffer: 400 },
        { step: 2, action: 'Subtract 1: 400 - 1', echo: 'Resolve to: "399"', buffer: 399 },
      ],
      finalResult: 399,
    },
  },

  mult_pattern_antyayor_dasakepi: {
    id: 'mult_pattern_antyayor_dasakepi',
    module: 'multiplication_engine',
    title: 'Vedic Antyayor Dasakepi (Units Sum to 10, Tens Match)',
    subtitle: 'N(N+1) | (U1 × U2) for instant 2-second multiplication',
    difficultyTier: 3,
    algebraicFormula: '(10T + U_1)(10T + U_2) = 100 T(T+1) + U_1 U_2 \\quad (U_1 + U_2 = 10)',
    mathSecret: {
      title: 'The Decade Complement Splitting Rule',
      description:
        'If the leading tens digits are identical and the unit digits sum to 10 (e.g. 43 × 47, 82 × 88), multiply the tens digit T by (T + 1) for the prefix, and multiply the units digits for the suffix.',
      algebraicProof:
        '(10T + U_1)(10T + U_2) = 100T^2 + 10T(U_1 + U_2) + U_1 U_2 = 100T^2 + 100T + U_1 U_2 = 100T(T+1) + U_1 U_2.',
      conditions: 'Tens digits match (T1 = T2) AND unit digits sum to 10 (U1 + U2 = 10).',
    },
    mindOdometer: {
      trickTitle: 'Next-Ten Prefix & Unit Snap',
      subvocalInstruction:
        'For 43 × 47: Tens is 4 -> 4 × 5 = 20. Units 3 × 7 = 21. Glue together: "2021".',
      carryEliminationRule: 'Pad unit product to 2 digits if < 10 (e.g. 91 × 99 -> 9 × 10 = 90 | 1 × 9 = 09 -> 9009).',
      visualAccumulatorExample: '43 × 47 = [4 × (4 + 1)] | [3 × 7] = 20 | 21 = 2021',
    },
    workedExample: {
      problem: '43 × 47',
      steps: [
        { step: 1, action: 'Multiply tens by next integer: 4 × (4 + 1)', echo: 'Prefix: "20"', buffer: 20 },
        { step: 2, action: 'Multiply units: 3 × 7', echo: 'Suffix: "21"', buffer: 2021 },
      ],
      finalResult: 2021,
    },
  },

  mult_pattern_reverse_antyayor: {
    id: 'mult_pattern_reverse_antyayor',
    module: 'multiplication_engine',
    title: 'Reverse Antyayor (Tens Sum to 10, Units Match)',
    subtitle: '(T1 × T2 + U) | U² for numbers like 37 × 77, 46 × 66',
    difficultyTier: 3,
    algebraicFormula: '(10T_1 + U)(10T_2 + U) = 100(T_1 T_2 + U) + U^2 \\quad (T_1 + T_2 = 10)',
    mathSecret: {
      title: 'The Dual Tens Complement Theorem',
      description:
        'When the unit digits are identical and tens digits sum to 10 (e.g. 37 × 77, 46 × 66), multiply the tens digits together, add the common unit digit for the prefix, and append the square of the unit digit.',
      algebraicProof:
        '(10T_1 + U)(10T_2 + U) = 100T_1 T_2 + 10U(T_1 + T_2) + U^2 = 100T_1 T_2 + 100U + U^2 = 100(T_1 T_2 + U) + U^2.',
      conditions: 'Tens digits sum to 10 (T1 + T2 = 10) AND units digits match (U1 = U2).',
    },
    mindOdometer: {
      trickTitle: 'Tens Cross plus Common Unit',
      subvocalInstruction:
        'For 37 × 77: Tens 3 × 7 = 21. Add unit 7 -> 28. Units squared: 7² = 49. Glue: 2849.',
      carryEliminationRule: 'Pad U² to 2 digits (e.g. U = 3 -> 09).',
      visualAccumulatorExample: '37 × 77 = (3 × 7 + 7) | 7² = 28 | 49 = 2849',
    },
    workedExample: {
      problem: '37 × 77',
      steps: [
        { step: 1, action: 'Multiply tens and add common unit: (3 × 7) + 7', echo: 'Prefix: "28"', buffer: 28 },
        { step: 2, action: 'Square common unit: 7²', echo: 'Suffix: "49"', buffer: 2849 },
      ],
      finalResult: 2849,
    },
  },

  mult_pattern_half_double: {
    id: 'mult_pattern_half_double',
    module: 'multiplication_engine',
    title: 'Halving and Doubling (Even × 5-ending)',
    subtitle: 'Shift factors to create instantaneous decade multiples',
    difficultyTier: 2,
    algebraicFormula: 'A \\times B = (A \\div 2) \\times (B \\times 2)',
    mathSecret: {
      title: 'Associative Invariance',
      description:
        'Multiplying an even number by a number ending in 5 (such as 36 × 35 or 44 × 15) is simplified instantly by cutting the even number in half and doubling the 5-ending number to a clean decade.',
      algebraicProof: 'A × B = (A / 2) × (2B). Because 2/2 = 1, product is strictly invariant.',
      conditions: 'One factor is even, the other factor ends in 5.',
    },
    mindOdometer: {
      trickTitle: 'The Binary Pivot',
      subvocalInstruction: 'For 36 × 35: Halve 36 -> 18; double 35 -> 70. 18 × 70: 18 × 7 = 126 -> 1260.',
      carryEliminationRule: 'Eliminates 2-digit by 2-digit multiplication in favor of 1-digit by decade multiplication.',
      visualAccumulatorExample: '36 × 35 = (36 / 2) × (35 × 2) = 18 × 70 = 1260',
    },
    workedExample: {
      problem: '36 × 35',
      steps: [
        { step: 1, action: 'Halve 36 and double 35', echo: 'Transformed: 18 × 70', buffer: 18 },
        { step: 2, action: 'Multiply 18 × 7', echo: 'Base: "126"', buffer: 126 },
        { step: 3, action: 'Append decade zero', echo: 'Resolve to: "1260"', buffer: 1260 },
      ],
      finalResult: 1260,
    },
  },

  mult_vedic_urdhva_tiryag: {
    id: 'mult_vedic_urdhva_tiryag',
    module: 'multiplication_engine',
    title: 'Vedic Urdhva-Tiryagbhyam (Vertical & Crosswise)',
    subtitle: 'The universal matrix multiplication engine for 2x2, 3x3, and 4x4',
    difficultyTier: 4,
    algebraicFormula: '(10a + b)(10c + d) = 100(ac) + 10(ad + bc) + bd',
    mathSecret: {
      title: 'Universal Cross-Product Matrix',
      description:
        'The primary crown jewel of Vedic mathematics. It calculates the product of any two numbers in a single mental line from right-to-left or left-to-right using symmetric cross-multiplication pairs.',
      algebraicProof:
        'For 2x2: Units = b·d; Tens = a·d + b·c; Hundreds = a·c. Carry digits stream naturally into the next column.',
      conditions: 'Universal for all numbers of arbitrary digit length.',
    },
    mindOdometer: {
      trickTitle: 'Vertical, Cross, Vertical Matrix',
      subvocalInstruction:
        'For 23 × 41: Step 1 (Units): 3×1 = 3. Step 2 (Cross): (2×1) + (3×4) = 2 + 12 = 14 (write 4, hold 1). Step 3 (Tens): 2×4 = 8 + 1 = 9. Answer: 943.',
      carryEliminationRule: 'Keep the carry in the phonological buffer as a single prefix digit.',
      visualAccumulatorExample: '23 × 41: [3×1=3] -> [(2×1)+(3×4)=14] -> [2×4+1=9] => 943',
    },
    workedExample: {
      problem: '23 × 41',
      steps: [
        { step: 1, action: 'Vertical units multiplication: 3 × 1', echo: 'Units: "3"', buffer: 3 },
        { step: 2, action: 'Crosswise multiplication: (2 × 1) + (3 × 4) = 14', echo: 'Tens: 4, Carry: 1', buffer: 43 },
        { step: 3, action: 'Vertical tens multiplication plus carry: (2 × 4) + 1 = 9', echo: 'Resolve to: "943"', buffer: 943 },
      ],
      finalResult: 943,
    },
  },

  mult_trachtenberg_rules: {
    id: 'mult_trachtenberg_rules',
    module: 'multiplication_engine',
    title: 'Trachtenberg System (Single-Pass Direct Multipliers)',
    subtitle: 'Direct digit-by-digit rules for 5, 6, 7, 8, 9, 11, 12 without multiplication tables',
    difficultyTier: 4,
    algebraicFormula: 'D_i = f(\\text{digit}, \\text{neighbor}) + \\text{carry}',
    mathSecret: {
      title: 'Trachtenberg Neighbor Shift Rules',
      description:
        'Jakow Trachtenberg developed a complete mental math system in a concentration camp. Rules use only addition and halving. Rule for 6: "Add half the neighbor to each digit, plus 5 if the digit is odd."',
      algebraicProof:
        '6 × d = 5d + d = 10(d/2) + d. Adding the neighbor accounts for the carried place values from the lower power of 10.',
      conditions: 'Universal for single-pass multiplication by 5, 6, 7, 8, 9, 11, 12.',
    },
    mindOdometer: {
      trickTitle: 'Digit + Half-the-Neighbor Scan',
      subvocalInstruction:
        'For 6 × 428: Units (8): 8 + 0 = 8. Tens (2): 2 + half of 8 (4) = 6. Hundreds (4): 4 + half of 2 (1) = 5. Lead: 0 + half of 4 (2) = 2. Read: 2568.',
      carryEliminationRule: 'Scan from right to left, immediately pairing each digit with its right-hand neighbor.',
      visualAccumulatorExample: '428 × 6: [8+0=8] [2+4=6] [4+1=5] [0+2=2] => 2568',
    },
    workedExample: {
      problem: '428 × 6',
      steps: [
        { step: 1, action: 'Units digit 8 + half neighbor 0', echo: 'Units: "8"', buffer: 8 },
        { step: 2, action: 'Tens digit 2 + half neighbor 8 (= 4)', echo: 'Tens: "6"', buffer: 68 },
        { step: 3, action: 'Hundreds digit 4 + half neighbor 2 (= 1)', echo: 'Hundreds: "5"', buffer: 568 },
        { step: 4, action: 'Leading 0 + half neighbor 4 (= 2)', echo: 'Resolve to: "2568"', buffer: 2568 },
      ],
      finalResult: 2568,
    },
  },

  mult_vedic_base_yavadunam: {
    id: 'mult_vedic_base_yavadunam',
    module: 'multiplication_engine',
    title: 'Vedic Yavadunam Base Multiplications (Bases 100, 50, 200, 1000)',
    subtitle: 'Cross-add deviations and multiply deviations: (Base ± d1 ± d2) | (d1 × d2)',
    difficultyTier: 3,
    algebraicFormula: '(B + d_1)(B + d_2) = B(B + d_1 + d_2) + d_1 d_2',
    mathSecret: {
      title: 'Deviational Sub-Base Sutra',
      description:
        'Numbers close to a clean base (100, 50, 200, 1000) can be represented as (Base + deviation). Cross-add the deviation of one number to the other, multiply by the base factor, and append the product of the deviations.',
      algebraicProof:
        '(B + d1)(B + d2) = B² + B(d1 + d2) + d1·d2 = B(B + d1 + d2) + d1·d2.',
      conditions: 'Both numbers are clustered near a common base anchor (e.g. 104 × 107, 96 × 92, 48 × 52).',
    },
    mindOdometer: {
      trickTitle: 'Cross-Add & Deviation Product',
      subvocalInstruction:
        'For 104 × 107 (Base 100): Deviations are +4 and +7. Cross-add: 104 + 7 = 111. Multiply deviations: 4 × 7 = 28. Combine: "11128".',
      carryEliminationRule: 'Pad deviation product to the number of zeros in the base (2 zeros for Base 100).',
      visualAccumulatorExample: '104 × 107 = (104 + 7) | (4 × 7) = 111 | 28 = 11128',
    },
    workedExample: {
      problem: '104 × 107',
      steps: [
        { step: 1, action: 'Identify deviations from 100: +4 and +7', echo: 'Deviations: +4, +7', buffer: 4 },
        { step: 2, action: 'Cross-add deviation: 104 + 7 = 111', echo: 'Prefix: "111"', buffer: 111 },
        { step: 3, action: 'Multiply deviations: 4 × 7 = 28', echo: 'Resolve to: "11128"', buffer: 11128 },
      ],
      finalResult: 11128,
    },
  },

  // -------------------------------------------------------------
  // MODULE 3: SQUARES, CUBES & POWERS
  // -------------------------------------------------------------
  sq_base_50: {
    id: 'sq_base_50',
    module: 'squares_cubes_powers',
    title: 'Base-50 Squares: (50 ± d)²',
    subtitle: '(25 ± d) | d² for instant squaring between 40 and 60',
    difficultyTier: 2,
    algebraicFormula: '(50 \\pm d)^2 = 100(25 \\pm d) + d^2',
    mathSecret: {
      title: 'The 25 Anchor Theorem',
      description:
        'For any number near 50, let d be the deviation from 50 (e.g. 54 has d = +4; 46 has d = -4). The leading digits are always 25 + d, and the trailing two digits are d².',
      algebraicProof: '(50 + d)^2 = 2500 + 100d + d^2 = 100(25 + d) + d^2.',
      conditions: 'Numbers between 40 and 60.',
    },
    mindOdometer: {
      trickTitle: 'Anchor to 25 and Append d²',
      subvocalInstruction: 'For 54²: d = +4. 25 + 4 = 29. 4² = 16. Say: "2916". For 47²: d = -3. 25 - 3 = 22. 3² = 09 -> "2209".',
      carryEliminationRule: 'Pad d² with a leading zero if d < 4 (e.g. 3² = 09).',
      visualAccumulatorExample: '54² = (25 + 4) | 4² = 29 | 16 = 2916',
    },
    workedExample: {
      problem: '54²',
      steps: [
        { step: 1, action: 'Deviation from 50 is +4. Add to 25: 25 + 4', echo: 'Prefix: "29"', buffer: 29 },
        { step: 2, action: 'Square deviation: 4² = 16', echo: 'Resolve to: "2916"', buffer: 2916 },
      ],
      finalResult: 2916,
    },
  },

  sq_base_100: {
    id: 'sq_base_100',
    module: 'squares_cubes_powers',
    title: 'Base-100 Squares: (100 ± d)²',
    subtitle: '(N ± d) | d² for instant squaring between 80 and 120',
    difficultyTier: 2,
    algebraicFormula: '(100 \\pm d)^2 = 100(N \\pm d) + d^2',
    mathSecret: {
      title: 'Self-Deviation Base-100 Sutra',
      description:
        'For numbers near 100, add or subtract the deviation d to the number itself to obtain the prefix, then append d² padded to 2 digits.',
      algebraicProof: '(100 + d)^2 = 10000 + 200d + d^2 = 100(100 + 2d) + d^2 = 100(N + d) + d^2.',
      conditions: 'Numbers between 80 and 120.',
    },
    mindOdometer: {
      trickTitle: 'Deficit Subtract & Deficit Square',
      subvocalInstruction:
        'For 96²: Deficit is -4. 96 - 4 = 92. Square deficit 4² = 16. Say: "9216". For 107²: 107 + 7 = 114 | 49 -> 11449.',
      carryEliminationRule: 'Always pad d² to 2 digits. If d² >= 100 (e.g. 12² = 144), add the 1 as a carry to the prefix.',
      visualAccumulatorExample: '96² = (96 - 4) | 4² = 92 | 16 = 9216',
    },
    workedExample: {
      problem: '96²',
      steps: [
        { step: 1, action: 'Subtract deficit 4 from 96: 96 - 4', echo: 'Prefix: "92"', buffer: 92 },
        { step: 2, action: 'Square deficit: 4²', echo: 'Resolve to: "9216"', buffer: 9216 },
      ],
      finalResult: 9216,
    },
  },

  sq_ending_5: {
    id: 'sq_ending_5',
    module: 'squares_cubes_powers',
    title: 'Squaring Numbers Ending in 5 (Ekadhikena Purvena)',
    subtitle: 'N(N+1) | 25 for instant 1-second squares',
    difficultyTier: 1,
    algebraicFormula: '(10N + 5)^2 = 100N(N+1) + 25',
    mathSecret: {
      title: 'The Universal 25 Termination Theorem',
      description:
        'Every square of a number ending in 5 ends in 25. The prefix is simply the tens portion multiplied by the consecutive integer (N × (N + 1)).',
      algebraicProof: '(10N + 5)^2 = 100N^2 + 100N + 25 = 100N(N + 1) + 25.',
      conditions: 'The number must end in 5.',
    },
    mindOdometer: {
      trickTitle: 'Prefix Times Next-Number & Append 25',
      subvocalInstruction: 'For 65²: Prefix is 6. 6 × 7 = 42. Append 25 -> "4225". For 85²: 8 × 9 = 72 | 25 -> "7225".',
      carryEliminationRule: 'Instant zero-carry visual composition.',
      visualAccumulatorExample: '65² = [6 × (6 + 1)] | 25 = 42 | 25 = 4225',
    },
    workedExample: {
      problem: '65²',
      steps: [
        { step: 1, action: 'Multiply tens prefix by (prefix + 1): 6 × 7', echo: 'Prefix: "42"', buffer: 42 },
        { step: 2, action: 'Append constant 25', echo: 'Resolve to: "4225"', buffer: 4225 },
      ],
      finalResult: 4225,
    },
  },

  sq_ending_25: {
    id: 'sq_ending_25',
    module: 'squares_cubes_powers',
    title: 'Squaring Numbers Ending in 25',
    subtitle: '(X² + X/2) × 10 | 625 for 3-digit and 4-digit numbers ending in 25',
    difficultyTier: 3,
    algebraicFormula: '(100X + 25)^2 = 10000X^2 + 5000X + 625 = 1000(10X^2 + 5X) + 625',
    mathSecret: {
      title: 'The 625 Suffix Decomposition',
      description:
        'Any number ending in 25 (e.g. 125, 225, 325, 625) squared always terminates in 625. The thousands prefix is given by X(X + 0.5) × 10 = X² × 10 + 5X.',
      algebraicProof:
        '(100X + 25)^2 = 10000X^2 + 2(100X)(25) + 625 = 10000X^2 + 5000X + 625 = 1000(10X^2 + 5X) + 625.',
      conditions: 'The number terminates in 25 (e.g. 125, 225, 325).',
    },
    mindOdometer: {
      trickTitle: 'X-Square plus Half-X, Append 625',
      subvocalInstruction: 'For 225²: X = 2. 10(2²) + 5(2) = 40 + 10 = 50. Append 625 -> 50,625.',
      carryEliminationRule: 'Saves computing a full 3-digit square by anchoring to 625.',
      visualAccumulatorExample: '225²: X = 2 -> [10(4) + 10 = 50] | 625 => 50625',
    },
    workedExample: {
      problem: '225²',
      steps: [
        { step: 1, action: 'Identify X (prefix before 25): X = 2', echo: 'X = 2', buffer: 2 },
        { step: 2, action: 'Compute 10X² + 5X: 10(4) + 10', echo: 'Prefix: "50"', buffer: 50 },
        { step: 3, action: 'Append constant 625', echo: 'Resolve to: "50625"', buffer: 50625 },
      ],
      finalResult: 50625,
    },
  },

  sq_universal_duplex: {
    id: 'sq_universal_duplex',
    module: 'squares_cubes_powers',
    title: 'Universal Duplex Method (Dwandwa Yoga)',
    subtitle: 'Mental squaring of ANY 2-digit, 3-digit, or 4-digit number',
    difficultyTier: 4,
    algebraicFormula: 'D(a) = a^2, \\quad D(ab) = 2ab, \\quad D(abc) = 2ac + b^2',
    mathSecret: {
      title: 'Vedic Duplex Theory (Dwandwa Yoga)',
      description:
        'The Duplex of a single digit is its square. The Duplex of two digits is twice their product. The Duplex of three digits is twice the outer product plus the middle squared. The square of any number is simply the sequence of its duplexes!',
      algebraicProof: '(a·10 + b)^2 = a^2·100 + 2ab·10 + b^2 = D(a)·100 + D(ab)·10 + D(b).',
      conditions: 'Universal for all integers.',
    },
    mindOdometer: {
      trickTitle: 'Duplex March Left-to-Right',
      subvocalInstruction:
        'For 73²: D(7) = 49 (hundreds). D(7,3) = 2×7×3 = 42 (tens). D(3) = 9 (units). Accumulate: 4900 + 420 + 9 = 5329.',
      carryEliminationRule: 'Accumulate each duplex directly into your auditory echo.',
      visualAccumulatorExample: '73² = D(7)|D(73)|D(3) = 4900 + 420 + 9 = 5329',
    },
    workedExample: {
      problem: '73²',
      steps: [
        { step: 1, action: 'Duplex of leading digit: D(7) = 7² = 49 (hundreds)', echo: 'Base: "4900"', buffer: 4900 },
        { step: 2, action: 'Duplex of pair: D(7,3) = 2 × 7 × 3 = 42 (tens = 420)', echo: 'Accumulator: "5320"', buffer: 5320 },
        { step: 3, action: 'Duplex of units: D(3) = 3² = 9', echo: 'Resolve to: "5329"', buffer: 5329 },
      ],
      finalResult: 5329,
    },
  },

  cube_tables_1_25: {
    id: 'cube_tables_1_25',
    module: 'squares_cubes_powers',
    title: 'Instant Cube Recall: 1³ through 25³',
    subtitle: 'Internalize cubes 1–25 and decimal unit bijection mappings',
    difficultyTier: 3,
    algebraicFormula: 'N^3 \\equiv U_N \\pmod{10} \\quad (1\\to 1, 2\\to 8, 3\\to 7, 7\\to 3, 8\\to 2)',
    mathSecret: {
      title: 'The Perfect 1-to-1 Cube Bijection',
      description:
        'Every digit from 0 to 9 has a unique, reversible unit ending when cubed: 1³->1, 2³->8, 3³->7, 4³->4, 5³->5, 6³->6, 7³->3, 8³->2, 9³->9, 0³->0. This bijection makes instant cube recall and root extraction instantaneous.',
      algebraicProof: 'The mapping x -> x³ mod 10 is a permutation on Z_10.',
      conditions: 'Numbers 1 through 25.',
    },
    mindOdometer: {
      trickTitle: 'Peg Anchors and Complements of 10',
      subvocalInstruction: 'Notice 2 and 8 swap (2³->8, 8³->...2), 3 and 7 swap (3³->27, 7³->...3). All other digits keep themselves!',
      carryEliminationRule: 'Direct phonological retrieval.',
      visualAccumulatorExample: '12³ = 1728; 13³ = 2197; 14³ = 2744; 15³ = 3375; 21³ = 9261; 25³ = 15625',
    },
    workedExample: {
      problem: '12³',
      steps: [
        { step: 1, action: 'Recall anchor peg: 12² = 144', echo: 'Square: "144"', buffer: 144 },
        { step: 2, action: 'Multiply 144 × 12 = 144 × 10 + 288', echo: 'Resolve to: "1728"', buffer: 1728 },
      ],
      finalResult: 1728,
    },
  },

  cube_algebraic_binomial: {
    id: 'cube_algebraic_binomial',
    module: 'squares_cubes_powers',
    title: 'Algebraic Binomial Cubing: (a + b)³',
    subtitle: 'a³ | 3a²b | 3ab² | b³ for mental cubing of any 2-digit number',
    difficultyTier: 4,
    algebraicFormula: '(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3',
    mathSecret: {
      title: 'Binomial Ratio Expansion',
      description:
        'Decompose any 2-digit number into tens a and units b. The 4 terms form a geometric progression with common ratio (b/a): Term 1 = a³; Term 2 = 3a²b; Term 3 = 3ab²; Term 4 = b³.',
      algebraicProof: '(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3.',
      conditions: 'Universal for 2-digit cubing.',
    },
    mindOdometer: {
      trickTitle: 'Four-Column Mental Ratio',
      subvocalInstruction:
        'For 21³: a=20, b=1. a³ = 8000. 3a²b = 3(400)(1) = 1200. 3ab² = 3(20)(1) = 60. b³ = 1. Add: 8000 + 1200 + 60 + 1 = 9261.',
      carryEliminationRule: 'Accumulate descending powers left-to-right.',
      visualAccumulatorExample: '21³ = 8000 + 1200 + 60 + 1 = 9261',
    },
    workedExample: {
      problem: '21³',
      steps: [
        { step: 1, action: 'Cube tens: 20³', echo: 'Base: "8000"', buffer: 8000 },
        { step: 2, action: 'Add 3a²b: 3 × (20)² × 1 = 1200', echo: 'Accumulator: "9200"', buffer: 9200 },
        { step: 3, action: 'Add 3ab²: 3 × 20 × 1² = 60', echo: 'Accumulator: "9260"', buffer: 9260 },
        { step: 4, action: 'Add b³: 1³ = 1', echo: 'Resolve to: "9261"', buffer: 9261 },
      ],
      finalResult: 9261,
    },
  },

  // -------------------------------------------------------------
  // MODULE 4: ROOT EXTRACTIONS & APPROXIMATIONS
  // -------------------------------------------------------------
  root_sqrt_perfect_6d: {
    id: 'root_sqrt_perfect_6d',
    module: 'roots_approximations',
    title: 'Perfect Square Roots (Up to 6 Digits)',
    subtitle: 'Extract exact roots in 3 seconds via Unit Elimination & Range Bounding',
    difficultyTier: 3,
    algebraicFormula: '\\sqrt{N} \\implies \\text{Prefix bounded by } k^2 \\le \\text{Prefix} < (k+1)^2, \\quad \\text{Unit from } U^2',
    mathSecret: {
      title: 'The Grouping & Unit Bounding Algorithm',
      description:
        'Group the number into pairs from the right (e.g. 70,56 -> 70 and 56). The highest square below 70 is 8² = 64, so the tens digit is 8. The last digit 6 means the unit must be 4 or 6. Since 70 is greater than 8 × 9 = 72? No, 70 < 72, so choose the smaller unit 4 -> 84!',
      algebraicProof:
        'If N = (10k + u)², then 100k² < N < 100(k+1)². The intermediate comparator is k(k+1). If prefix > k(k+1), choose larger unit; else smaller.',
      conditions: 'Applicable to any perfect square up to 6 digits.',
    },
    mindOdometer: {
      trickTitle: 'Prefix Bound & k(k+1) Comparator',
      subvocalInstruction:
        'For √7056: Group 70 | 56. 8² = 64 <= 70, so prefix is 8. Comparator: 8 × 9 = 72. 70 < 72, so pick smaller unit of 6 (4 vs 6) -> 84.',
      carryEliminationRule: 'Eliminates long division square root entirely.',
      visualAccumulatorExample: '√7056: 70 -> 8; compare 70 < (8×9=72) -> pick 4 => 84',
    },
    workedExample: {
      problem: '√7056',
      steps: [
        { step: 1, action: 'Group pairs: 70 | 56. Largest square <= 70 is 8² = 64', echo: 'Tens digit: "8"', buffer: 8 },
        { step: 2, action: 'Last digit is 6 -> possibilities are 4 or 6', echo: 'Candidates: 4 or 6', buffer: 8 },
        { step: 3, action: 'Compare prefix 70 to 8 × 9 = 72. Since 70 < 72, pick 4', echo: 'Resolve to: "84"', buffer: 84 },
      ],
      finalResult: 84,
    },
  },

  root_sqrt_approx_differential: {
    id: 'root_sqrt_approx_differential',
    module: 'roots_approximations',
    title: 'Non-Perfect Square Root Approximation (First-Order Differential)',
    subtitle: '√{x ± y} ≈ √x ± y / (2√x) for precision square root approximations',
    difficultyTier: 4,
    algebraicFormula: '\\sqrt{x \\pm y} \\approx \\sqrt{x} \\pm \\frac{y}{2\\sqrt{x}}',
    mathSecret: {
      title: 'First-Order Taylor Series Expansion',
      description:
        'Any non-perfect square can be partitioned into the nearest perfect square x and a small remainder y. The first derivative of √x is 1 / (2√x). This gives an extraordinarily accurate mental fraction approximation within 0.1% error.',
      algebraicProof: 'f(x + y) \\approx f(x) + f\'(x)y = \\sqrt{x} + \\frac{y}{2\\sqrt{x}}.',
      conditions: 'Universal for non-perfect square root estimation.',
    },
    mindOdometer: {
      trickTitle: 'Root plus Remainder over Double-Root',
      subvocalInstruction: 'For √53: Nearest square is 49 (x=49, y=4). √49 = 7. Correction is +4 / (2 × 7) = 4/14 = 2/7 ≈ 0.28. Answer: 7.28.',
      carryEliminationRule: 'Convert the correction into a rapid fractional speed pivot.',
      visualAccumulatorExample: '√53 ≈ √49 + 4/(2×7) = 7 + 4/14 = 7 + 2/7 ≈ 7.29',
    },
    workedExample: {
      problem: '√53 (to 2 decimal places)',
      steps: [
        { step: 1, action: 'Nearest perfect square is 49: √49 = 7', echo: 'Integer part: "7"', buffer: 7 },
        { step: 2, action: 'Remainder y = 53 - 49 = 4', echo: 'Remainder: +4', buffer: 4 },
        { step: 3, action: 'Differential correction: 4 / (2 × 7) = 4/14 ≈ 0.29', echo: 'Resolve to: "7.29"', buffer: 7.29 },
      ],
      finalResult: 7.29,
    },
  },

  root_cbrt_perfect_6d: {
    id: 'root_cbrt_perfect_6d',
    module: 'roots_approximations',
    title: 'Perfect Cube Roots (Up to 6 Digits)',
    subtitle: 'Extract 2-digit cube roots instantly using 1-to-1 unit mapping & prefix bounding',
    difficultyTier: 3,
    algebraicFormula: '\\sqrt[3]{N} \\implies \\text{Units } U \\text{ is unique 1-to-1}, \\quad \\text{Prefix bounded by } k^3 \\le \\text{Prefix} < (k+1)^3',
    mathSecret: {
      title: 'The Deterministic Cube Root Principle',
      description:
        'Because cubing in base 10 produces a strictly unique 1-to-1 mapping of the last digit, the units digit of a cube root has zero ambiguity! Strip the last 3 digits; the remaining prefix gives the tens digit directly from cube tables 1–9.',
      algebraicProof: 'Since x³ mod 10 is a bijection, every last digit uniquely determines the root units digit.',
      conditions: 'Applicable to any perfect cube up to 6 digits (numbers up to 1,000,000).',
    },
    mindOdometer: {
      trickTitle: 'Strip 3 Digits & Read Directly',
      subvocalInstruction:
        'For ∛175,616: Last digit 6 uniquely gives units 6. Strip 616 -> leaves prefix 175. 5³ = 125 <= 175 < 6³ = 216, so tens is 5. Answer: 56.',
      carryEliminationRule: 'Absolute zero guessing; two independent 1-second lookups.',
      visualAccumulatorExample: '∛175616: [175 -> 5] and [last digit 6 -> 6] => 56',
    },
    workedExample: {
      problem: '∛175616',
      steps: [
        { step: 1, action: 'Unit digit 6 maps uniquely to 6 in cube roots', echo: 'Units: "6"', buffer: 6 },
        { step: 2, action: 'Strip last 3 digits (616), inspect prefix: 175', echo: 'Prefix: 175', buffer: 175 },
        { step: 3, action: '5³ = 125 <= 175 < 6³ = 216 -> tens digit is 5', echo: 'Resolve to: "56"', buffer: 56 },
      ],
      finalResult: 56,
    },
  },

  // -------------------------------------------------------------
  // MODULE 5: FAST DIVISION & PERCENTAGES
  // -------------------------------------------------------------
  div_vedic_flag_dhvajanka: {
    id: 'div_vedic_flag_dhvajanka',
    module: 'fast_division_percentages',
    title: 'Vedic Flag Method (Dhvajanka Straight Division)',
    subtitle: 'Divide multi-digit numbers mentally in a single forward pass',
    difficultyTier: 5,
    algebraicFormula: '\\text{Gross Remainder} - (\\text{Quotient Digit} \\times \\text{Flag}) = \\text{Adjusted Dividend}',
    mathSecret: {
      title: 'The Flag and Main Divisor Partition',
      description:
        'Split the divisor into a Main Divisor (single digit) and a Flag (remaining digits). Divide by the single-digit main divisor, and deduct (Quotient × Flag) from the gross remainder to find the next dividend.',
      algebraicProof:
        'For divisor 43: Main divisor = 4, Flag = 3. Division by 4 generates simple 1-digit quotients, while Flag 3 systematically corrects the remainder.',
      conditions: 'Universal for dividing by 2-digit, 3-digit, or 4-digit divisors.',
    },
    mindOdometer: {
      trickTitle: 'Divide, Remainder-Drop, Flag-Deduct',
      subvocalInstruction:
        'Hold the single-digit quotient, multiply by flag, and subtract from the shifted remainder before the next divide step.',
      carryEliminationRule: 'Eliminates trial-and-error long division.',
      visualAccumulatorExample: 'Dividend 1892 ÷ 43: Main 4, Flag 3 -> yields Q=44 R=0 in forward sweep',
    },
    workedExample: {
      problem: '1892 ÷ 43',
      steps: [
        { step: 1, action: 'Main divisor 4, Flag 3. Divide 18 by 4: Q = 4, R = 2', echo: 'First Quotient: "4"', buffer: 4 },
        { step: 2, action: 'Shift remainder 2 before 9 = 29. Deduct Q × Flag: 29 - (4 × 3) = 17', echo: 'Adjusted: 17', buffer: 17 },
        { step: 3, action: 'Divide 17 by 4: Q = 4, R = 1. Shift before 2 = 12. Deduct 4 × 3 = 0', echo: 'Resolve to: "44"', buffer: 44 },
      ],
      finalResult: 44,
    },
  },

  div_vedic_osculators: {
    id: 'div_vedic_osculators',
    module: 'fast_division_percentages',
    title: 'Vedic Osculators (Ekadhika Divisibility Tests)',
    subtitle: 'Lightning divisibility testing for primes 7, 13, 17, 19, 23, 29',
    difficultyTier: 4,
    algebraicFormula: 'N = 10a + b \\implies a + P \\cdot b \\equiv 0 \\pmod{D}',
    mathSecret: {
      title: 'The Ekadhika Positive & Negative Osculators',
      description:
        'Every prime ending in 9 has a positive osculator P = (D + 1) / 10 (e.g. 19 -> P = +2; 29 -> P = +3). Primes ending in 1 or 7 have negative or scaled osculators (7 -> P = -2; 13 -> P = +4; 17 -> P = -5; 23 -> P = +7). Multiply the last digit by P and add/subtract to the remaining prefix.',
      algebraicProof: '10a + b = 10(a + Pb) - (10P - 1)b. If 10P - 1 is a multiple of D, divisibility is invariant.',
      conditions: 'Primes 7, 13, 17, 19, 23, 29.',
    },
    mindOdometer: {
      trickTitle: 'Multiply Last Digit by P & Add to Truncated Left',
      subvocalInstruction: 'For testing 19 on 361: P = +2. Drop 1, multiply by 2 = 2. 36 + 2 = 38. 38 is divisible by 19 -> YES!',
      carryEliminationRule: 'Reduces any large number down to a 2-digit multiple in seconds.',
      visualAccumulatorExample: '361 for 19 (P=+2): 36 + (1 × 2) = 38 (divisible by 19)',
    },
    workedExample: {
      problem: 'Is 361 divisible by 19?',
      steps: [
        { step: 1, action: 'Positive osculator for 19 is P = (19 + 1) / 10 = +2', echo: 'Osculator P = +2', buffer: 2 },
        { step: 2, action: 'Truncate units digit (1) and multiply by P: 1 × 2 = 2', echo: 'Product: 2', buffer: 2 },
        { step: 3, action: 'Add to truncated prefix: 36 + 2 = 38 (19 × 2)', echo: 'Resolve to: "Divisible (Yes)"', buffer: 'Yes' },
      ],
      finalResult: 'Yes',
    },
  },

  pct_reversible_law: {
    id: 'pct_reversible_law',
    module: 'fast_division_percentages',
    title: 'Reversible Percentage Law',
    subtitle: 'x% of y = y% of x for effortless mental flips',
    difficultyTier: 1,
    algebraicFormula: 'x\\% \\times y = \\frac{x \\cdot y}{100} = y\\% \\times x',
    mathSecret: {
      title: 'Commutativity of Percentage Multiplication',
      description:
        'Finding 16% of 75 looks intimidating. But by reversing the operands, 75% of 16 is trivial: 3/4 of 16 = 12! Because multiplication is commutative, x% of y is mathematically identical to y% of x.',
      algebraicProof: '(x / 100) × y = (x × y) / 100 = (y / 100) × x.',
      conditions: 'Universal for all percentage calculations.',
    },
    mindOdometer: {
      trickTitle: 'The Percentage Flip',
      subvocalInstruction: 'Whenever you see an awkward percentage paired with a friendly number (25, 50, 75), flip them immediately!',
      carryEliminationRule: 'Eliminates decimals by pivoting to simple fractions.',
      visualAccumulatorExample: '16% of 75 = 75% of 16 = (3/4) × 16 = 12',
    },
    workedExample: {
      problem: '16% of 75',
      steps: [
        { step: 1, action: 'Flip using reversible law: 75% of 16', echo: 'Flipped: 75% of 16', buffer: 75 },
        { step: 2, action: 'Convert 75% to fraction: 3/4', echo: 'Fraction: 3/4', buffer: 0.75 },
        { step: 3, action: 'Compute (3/4) × 16: 16 ÷ 4 = 4; 4 × 3 = 12', echo: 'Resolve to: "12"', buffer: 12 },
      ],
      finalResult: 12,
    },
  },

  pct_fraction_pivots: {
    id: 'pct_fraction_pivots',
    module: 'fast_division_percentages',
    title: 'Fractional Base Pivots (1/2 through 1/16)',
    subtitle: 'Instant speed recall for decimal, percentage, and fraction conversions',
    difficultyTier: 2,
    algebraicFormula: '\\frac{1}{n} \\iff \\text{Percentage equivalents } (1/8 = 12.5\\%, \\; 1/16 = 6.25\\%)',
    mathSecret: {
      title: 'The Competitive Fraction Matrix',
      description:
        'Competitive quant masters never calculate percentages directly; they substitute pre-memorized fractional pivots: 1/2=50%, 1/3=33.33%, 1/4=25%, 1/5=20%, 1/6=16.67%, 1/7=14.28%, 1/8=12.5%, 1/9=11.11%, 1/11=9.09%, 1/12=8.33%, 1/16=6.25%.',
      algebraicProof: 'Direct reciprocal mapping: N × (1/k) eliminates multi-digit percentage division.',
      conditions: 'Applicable whenever percentages match standard reciprocals.',
    },
    mindOdometer: {
      trickTitle: 'Reciprocal Substitution',
      subvocalInstruction: 'For 37.5% of 64: Recognize 37.5% = 3 × 12.5% = 3/8. 64 / 8 = 8; 8 × 3 = 24.',
      carryEliminationRule: 'Transform division into single-digit table facts.',
      visualAccumulatorExample: '37.5% of 64 = (3/8) × 64 = 24',
    },
    workedExample: {
      problem: '37.5% of 64',
      steps: [
        { step: 1, action: 'Recognize 37.5% is 3/8 (since 1/8 = 12.5%)', echo: 'Fraction: 3/8', buffer: 3 },
        { step: 2, action: 'Divide 64 by 8: 64 ÷ 8 = 8', echo: 'Eighth: "8"', buffer: 8 },
        { step: 3, action: 'Multiply by numerator 3: 8 × 3 = 24', echo: 'Resolve to: "24"', buffer: 24 },
      ],
      finalResult: 24,
    },
  },

  // -------------------------------------------------------------
  // LEGACY ALIAS BRIDGES
  // -------------------------------------------------------------
  decade_bridging: {
    id: 'decade_bridging',
    module: 'fundamental_operations',
    title: 'Decade Bridging (8+7 = 8+2+5)',
    subtitle: 'Bridge to the decade',
    difficultyTier: 1,
    algebraicFormula: 'A + B = (A + \\Delta) + (B - \\Delta)',
    mathSecret: {
      title: 'Decade Step',
      description: 'Step forward to the nearest decade.',
      algebraicProof: 'A + B = (A + c) + (B - c).',
      conditions: 'Adding across decade boundaries.',
    },
    mindOdometer: {
      trickTitle: 'Hop',
      subvocalInstruction: 'Hop to decade.',
      carryEliminationRule: 'No carry.',
      visualAccumulatorExample: '8 + 7 = 10 + 5 = 15',
    },
    workedExample: {
      problem: '8 + 7',
      steps: [{ step: 1, action: 'Bridge', echo: '15', buffer: 15 }],
      finalResult: 15,
    },
  },

  l2r_decade_striding: {
    id: 'l2r_decade_striding',
    module: 'fundamental_operations',
    title: 'L2R Decade Striding (47+38 = 77+8)',
    subtitle: 'Tens then units',
    difficultyTier: 2,
    algebraicFormula: 'A + B = (A + 10T) + U',
    mathSecret: {
      title: 'Striding',
      description: 'Add tens chunk first.',
      algebraicProof: 'A + B = (A + 10T) + U.',
      conditions: '2d addition.',
    },
    mindOdometer: {
      trickTitle: 'Stride',
      subvocalInstruction: 'Add tens then units.',
      carryEliminationRule: 'No carry.',
      visualAccumulatorExample: '47 + 38 = 77 + 8 = 85',
    },
    workedExample: {
      problem: '47 + 38',
      steps: [{ step: 1, action: 'Add tens', echo: '77', buffer: 77 }, { step: 2, action: 'Add units', echo: '85', buffer: 85 }],
      finalResult: 85,
    },
  },

  century_crossing: {
    id: 'century_crossing',
    module: 'fundamental_operations',
    title: 'Century Crossing (345+87 = 425+7)',
    subtitle: 'Cross hundreds',
    difficultyTier: 2,
    algebraicFormula: 'A + B',
    mathSecret: {
      title: 'Cross Century',
      description: 'Step across 100.',
      algebraicProof: 'A + B',
      conditions: '3d addition.',
    },
    mindOdometer: {
      trickTitle: 'Cross',
      subvocalInstruction: 'Cross 100.',
      carryEliminationRule: 'None',
      visualAccumulatorExample: '345 + 87 = 432',
    },
    workedExample: {
      problem: '345 + 87',
      steps: [{ step: 1, action: 'Cross', echo: '432', buffer: 432 }],
      finalResult: 432,
    },
  },

  triple_digit_accumulation: {
    id: 'triple_digit_accumulation',
    module: 'fundamental_operations',
    title: '3D Accumulation (H -> T -> U)',
    subtitle: 'L2R 3-digit',
    difficultyTier: 3,
    algebraicFormula: 'A + B',
    mathSecret: {
      title: 'Accumulate',
      description: 'Hundreds -> tens -> units.',
      algebraicProof: 'A + B',
      conditions: '3d.',
    },
    mindOdometer: {
      trickTitle: 'Accumulate',
      subvocalInstruction: 'Hold sum.',
      carryEliminationRule: 'None',
      visualAccumulatorExample: '456 + 278 = 734',
    },
    workedExample: {
      problem: '456 + 278',
      steps: [{ step: 1, action: 'Total', echo: '734', buffer: 734 }],
      finalResult: 734,
    },
  },

  compensation_jump: {
    id: 'compensation_jump',
    module: 'fundamental_operations',
    title: 'Compensation Jump (x - 29 = x - 30 + 1)',
    subtitle: 'Over-subtraction',
    difficultyTier: 2,
    algebraicFormula: 'x - (10k - 1) = x - 10k + 1',
    mathSecret: {
      title: 'Jump',
      description: 'Subtract decade, add 1.',
      algebraicProof: 'x - 29 = x - 30 + 1.',
      conditions: 'Subtracting 9-ending.',
    },
    mindOdometer: {
      trickTitle: 'Jump',
      subvocalInstruction: 'Subtract 30, refund 1.',
      carryEliminationRule: 'None',
      visualAccumulatorExample: '74 - 29 = 74 - 30 + 1 = 45',
    },
    workedExample: {
      problem: '74 - 29',
      steps: [{ step: 1, action: 'Jump', echo: '45', buffer: 45 }],
      finalResult: 45,
    },
  },

  complements_100: {
    id: 'complements_100',
    module: 'fundamental_operations',
    title: '100 Complements (100 - 37 = 63)',
    subtitle: 'Complements of 100',
    difficultyTier: 1,
    algebraicFormula: '100 - x = (9 - T)10 + (10 - U)',
    mathSecret: {
      title: 'Complements',
      description: 'Tens from 9, units from 10.',
      algebraicProof: '100 - AB = (9-A)10 + (10-B).',
      conditions: '100 - x.',
    },
    mindOdometer: {
      trickTitle: 'Complement',
      subvocalInstruction: '9 and 10.',
      carryEliminationRule: 'None',
      visualAccumulatorExample: '100 - 37 = 63',
    },
    workedExample: {
      problem: '100 - 37',
      steps: [{ step: 1, action: 'Complement', echo: '63', buffer: 63 }],
      finalResult: 63,
    },
  },

  doubles_and_halves: {
    id: 'doubles_and_halves',
    module: 'multiplication_engine',
    title: 'Doubling & Halving',
    subtitle: 'Double and halve',
    difficultyTier: 2,
    algebraicFormula: 'A × B = (A/2) × (2B)',
    mathSecret: {
      title: 'Double-Halve',
      description: 'Even × 5.',
      algebraicProof: 'A × B = (A/2)(2B).',
      conditions: 'Even × 5.',
    },
    mindOdometer: {
      trickTitle: 'Double Halve',
      subvocalInstruction: 'Cut and double.',
      carryEliminationRule: 'None',
      visualAccumulatorExample: '18 × 35 = 9 × 70 = 630',
    },
    workedExample: {
      problem: '18 × 35',
      steps: [{ step: 1, action: 'Pivot', echo: '630', buffer: 630 }],
      finalResult: 630,
    },
  },

  tens_units_decomposition: {
    id: 'tens_units_decomposition',
    module: 'multiplication_engine',
    title: 'Tens & Units Split',
    subtitle: 'Split and add',
    difficultyTier: 2,
    algebraicFormula: 'A × (T + U)',
    mathSecret: {
      title: 'Split',
      description: 'Multiply tens and units separately.',
      algebraicProof: 'A(T + U) = AT + AU.',
      conditions: 'Tables 13-19.',
    },
    mindOdometer: {
      trickTitle: 'Split',
      subvocalInstruction: 'Hold tens product.',
      carryEliminationRule: 'None',
      visualAccumulatorExample: '17 × 6 = 60 + 42 = 102',
    },
    workedExample: {
      problem: '17 × 6',
      steps: [{ step: 1, action: 'Split', echo: '102', buffer: 102 }],
      finalResult: 102,
    },
  },

  decade_proximity_anchor: {
    id: 'decade_proximity_anchor',
    module: 'multiplication_engine',
    title: 'Proximity Anchoring (19×n = 20n - n)',
    subtitle: 'Near decade multiplication',
    difficultyTier: 2,
    algebraicFormula: '(10k - 1)n = 10kn - n',
    mathSecret: {
      title: 'Anchor',
      description: 'Multiply by 20 and subtract n.',
      algebraicProof: '19n = 20n - n.',
      conditions: '19, 29, 39.',
    },
    mindOdometer: {
      trickTitle: 'Anchor',
      subvocalInstruction: 'Decade mult minus n.',
      carryEliminationRule: 'None',
      visualAccumulatorExample: '19 × 7 = 140 - 7 = 133',
    },
    workedExample: {
      problem: '19 × 7',
      steps: [{ step: 1, action: 'Anchor', echo: '133', buffer: 133 }],
      finalResult: 133,
    },
  },

  sq_ending_5_ekadhikena: {
    id: 'sq_ending_5_ekadhikena',
    module: 'squares_cubes_powers',
    title: 'Ekadhikena (65² = 6×7 | 25)',
    subtitle: 'Squares ending in 5',
    difficultyTier: 1,
    algebraicFormula: 'N(N+1) | 25',
    mathSecret: {
      title: 'Ekadhikena',
      description: 'Multiply prefix by next integer, append 25.',
      algebraicProof: 'N(N+1) | 25.',
      conditions: 'Ends in 5.',
    },
    mindOdometer: {
      trickTitle: 'Ekadhikena',
      subvocalInstruction: 'N × (N+1) append 25.',
      carryEliminationRule: 'None',
      visualAccumulatorExample: '65² = 4225',
    },
    workedExample: {
      problem: '65²',
      steps: [{ step: 1, action: 'Square', echo: '4225', buffer: 4225 }],
      finalResult: 4225,
    },
  },

  sq_near_50_base: {
    id: 'sq_near_50_base',
    module: 'squares_cubes_powers',
    title: 'Base-50 Squares (54² = 2916)',
    subtitle: 'Near 50',
    difficultyTier: 2,
    algebraicFormula: '(25 ± d) | d²',
    mathSecret: {
      title: 'Base 50',
      description: '25 ± d | d².',
      algebraicProof: '(50+d)² = 100(25+d) + d².',
      conditions: '40-60.',
    },
    mindOdometer: {
      trickTitle: 'Base 50',
      subvocalInstruction: '25 + d | d².',
      carryEliminationRule: 'None',
      visualAccumulatorExample: '54² = 2916',
    },
    workedExample: {
      problem: '54²',
      steps: [{ step: 1, action: 'Square', echo: '2916', buffer: 2916 }],
      finalResult: 2916,
    },
  },

  sq_near_100_base: {
    id: 'sq_near_100_base',
    module: 'squares_cubes_powers',
    title: 'Base-100 Squares (96² = 9216)',
    subtitle: 'Near 100',
    difficultyTier: 2,
    algebraicFormula: '(N ± d) | d²',
    mathSecret: {
      title: 'Base 100',
      description: 'N ± d | d².',
      algebraicProof: '(100+d)² = 100(N+d) + d².',
      conditions: '80-120.',
    },
    mindOdometer: {
      trickTitle: 'Base 100',
      subvocalInstruction: 'N - deficit | deficit².',
      carryEliminationRule: 'None',
      visualAccumulatorExample: '96² = 9216',
    },
    workedExample: {
      problem: '96²',
      steps: [{ step: 1, action: 'Square', echo: '9216', buffer: 9216 }],
      finalResult: 9216,
    },
  },

  sq_algebraic_duplex: {
    id: 'sq_algebraic_duplex',
    module: 'squares_cubes_powers',
    title: 'Algebraic Duplex Squares',
    subtitle: 'Universal duplex',
    difficultyTier: 4,
    algebraicFormula: 'D(a) | D(ab) | D(b)',
    mathSecret: {
      title: 'Duplex',
      description: 'Duplex method.',
      algebraicProof: '(a+b)² = a² + 2ab + b².',
      conditions: 'Universal.',
    },
    mindOdometer: {
      trickTitle: 'Duplex',
      subvocalInstruction: 'D(a) | D(ab) | D(b).',
      carryEliminationRule: 'None',
      visualAccumulatorExample: '73² = 5329',
    },
    workedExample: {
      problem: '73²',
      steps: [{ step: 1, action: 'Duplex', echo: '5329', buffer: 5329 }],
      finalResult: 5329,
    },
  },

  cube_unit_anchor: {
    id: 'cube_unit_anchor',
    module: 'squares_cubes_powers',
    title: 'Cube Unit & Magnitude Anchors',
    subtitle: 'Unit cube bijection',
    difficultyTier: 3,
    algebraicFormula: 'N³ mod 10',
    mathSecret: {
      title: 'Cube Units',
      description: '1-to-1 bijection of cube endings.',
      algebraicProof: 'Bijection in decimal.',
      conditions: 'Universal.',
    },
    mindOdometer: {
      trickTitle: 'Bijection',
      subvocalInstruction: 'Unit endings.',
      carryEliminationRule: 'None',
      visualAccumulatorExample: '12³ = 1728',
    },
    workedExample: {
      problem: '12³',
      steps: [{ step: 1, action: 'Cube', echo: '1728', buffer: 1728 }],
      finalResult: 1728,
    },
  },
};
