/**
 * Canonical Allowed Drills Catalog for Mentalis
 * Single source of truth for all curriculum drill targets.
 * Used for deterministic plan generation and server-side AI validation.
 */

import { ModuleId } from './types';
import { SquareCubeSubTrack } from './calcEngine';
import { SkillDimension } from './learnerModel';

export interface DrillDefinition {
  id: string;
  module: ModuleId;
  dimension: SkillDimension;
  title: string;
  shortCode: string;
  description: string;
  difficulty: number; // 1 - 10
  targetTimeSeconds: number;
  params: {
    addSubLevel?: number;
    table?: number;
    squareTrack?: SquareCubeSubTrack;
    anzanDigits?: 1 | 2 | 3;
    anzanIntervalMs?: number;
    anzanCount?: number;
    anzanAllowNegatives?: boolean;
  };
}

const CATALOG_DRILLS: DrillDefinition[] = [
  // Addition & Subtraction Levels 1-6
  {
    id: 'add_sub_l1',
    module: 'add_sub',
    dimension: 'add_sub_non_bridging',
    title: 'Single-Digit & Non-Crossing (L1)',
    shortCode: 'AS-L1',
    description: 'Direct arithmetic without decade crossing (A mod 10 + B < 10).',
    difficulty: 1,
    targetTimeSeconds: 2.0,
    params: { addSubLevel: 1 },
  },
  {
    id: 'add_sub_l2',
    module: 'add_sub',
    dimension: 'add_sub_bridging_decade',
    title: 'Decade Bridging (L2)',
    shortCode: 'AS-L2',
    description: 'Addition & subtraction requiring bridging across decade boundaries.',
    difficulty: 2,
    targetTimeSeconds: 2.5,
    params: { addSubLevel: 2 },
  },
  {
    id: 'add_sub_l3',
    module: 'add_sub',
    dimension: 'add_sub_complements_100',
    title: 'Base-100 Complements & Jumps (L3)',
    shortCode: 'AS-L3',
    description: 'Complements to 100 and decade step additions (50-100).',
    difficulty: 3,
    targetTimeSeconds: 3.0,
    params: { addSubLevel: 3 },
  },
  {
    id: 'add_sub_l4',
    module: 'add_sub',
    dimension: 'add_sub_multidigit_l2r',
    title: 'Left-to-Right 2-Digit Accumulator (L4)',
    shortCode: 'AS-L4',
    description: 'Add and subtract two 2-digit numbers holding running state.',
    difficulty: 4,
    targetTimeSeconds: 3.5,
    params: { addSubLevel: 4 },
  },
  {
    id: 'add_sub_l5',
    module: 'add_sub',
    dimension: 'add_sub_mixed_chain',
    title: '3-Term Running Chain (L5)',
    shortCode: 'AS-L5',
    description: 'Sequential 3-number running sums and differences.',
    difficulty: 6,
    targetTimeSeconds: 5.0,
    params: { addSubLevel: 5 },
  },
  {
    id: 'add_sub_l6',
    module: 'add_sub',
    dimension: 'add_sub_mixed_chain',
    title: '4-Term High-Speed Chain (L6)',
    shortCode: 'AS-L6',
    description: 'Complex 4-term running accumulator chain.',
    difficulty: 7,
    targetTimeSeconds: 6.5,
    params: { addSubLevel: 6 },
  },

  // Multiplication Foundations (2, 3, 4, 5, 10)
  ...[2, 3, 4, 5, 10].map((tbl) => ({
    id: `table_${tbl}`,
    module: 'multiplication' as ModuleId,
    dimension: 'mult_foundations' as SkillDimension,
    title: `Table of ${tbl}`,
    shortCode: `M-${tbl}`,
    description: `Foundational multiplication factors for table of ${tbl}.`,
    difficulty: tbl === 10 ? 1 : tbl <= 4 ? 2 : 3,
    targetTimeSeconds: 2.0,
    params: { table: tbl },
  })),

  // Multiplication Core Tables (6, 7, 8, 9, 11, 12)
  ...[6, 7, 8, 9, 11, 12].map((tbl) => ({
    id: `table_${tbl}`,
    module: 'multiplication' as ModuleId,
    dimension: 'mult_core_tables' as SkillDimension,
    title: `Table of ${tbl}`,
    shortCode: `M-${tbl}`,
    description: `Core grade-school times table drill for ${tbl}.`,
    difficulty: tbl === 11 ? 3 : tbl >= 7 && tbl <= 9 ? 4 : 5,
    targetTimeSeconds: 2.5,
    params: { table: tbl },
  })),

  // Multiplication Teen Tables (13, 14, 15, 16, 17, 18, 19)
  ...[13, 14, 15, 16, 17, 18, 19].map((tbl) => ({
    id: `table_${tbl}`,
    module: 'multiplication' as ModuleId,
    dimension: 'mult_teen_tables' as SkillDimension,
    title: `Table of ${tbl}`,
    shortCode: `M-${tbl}`,
    description: `Advanced mental speed-math teen table for ${tbl}.`,
    difficulty: 6,
    targetTimeSeconds: 3.5,
    params: { table: tbl },
  })),

  // Multiplication Decade Extensions (20, 25, 30, 40, 50, 60, 75)
  ...[20, 25, 30, 40, 50, 60, 75].map((tbl) => ({
    id: `table_${tbl}`,
    module: 'multiplication' as ModuleId,
    dimension: 'mult_decade_ext' as SkillDimension,
    title: `Table of ${tbl}`,
    shortCode: `M-${tbl}`,
    description: `Extended anchor multiplication drill for ${tbl}.`,
    difficulty: tbl === 20 || tbl === 50 ? 4 : 6,
    targetTimeSeconds: 3.0,
    params: { table: tbl },
  })),

  // Squares & Cubes
  {
    id: 'sq_ending_5',
    module: 'squares_cubes',
    dimension: 'squares_ending_5',
    title: 'Squares Ending in 5',
    shortCode: 'SQ-5',
    description: 'Vedic n(n+1)*100 + 25 shortcut for 15² through 95².',
    difficulty: 3,
    targetTimeSeconds: 2.5,
    params: { squareTrack: 'ending_5' },
  },
  {
    id: 'sq_near_50',
    module: 'squares_cubes',
    dimension: 'squares_near_50',
    title: 'Squares Near 50 (Base 50)',
    shortCode: 'SQ-50',
    description: 'Anchor method (50±d)² = 25±d | d² for 41² to 59².',
    difficulty: 5,
    targetTimeSeconds: 3.5,
    params: { squareTrack: 'near_50' },
  },
  {
    id: 'sq_near_100',
    module: 'squares_cubes',
    dimension: 'squares_near_100',
    title: 'Squares Near 100 (Base 100)',
    shortCode: 'SQ-100',
    description: 'Anchor method (100±d)² = 100±2d | d² for 85² to 115².',
    difficulty: 6,
    targetTimeSeconds: 4.0,
    params: { squareTrack: 'near_100' },
  },
  {
    id: 'sq_general_2digit',
    module: 'squares_cubes',
    dimension: 'squares_duplex_general',
    title: 'General 2-Digit Duplex Squares',
    shortCode: 'SQ-DUP',
    description: 'Universal cross-multiplication duplex algorithm for all 2-digit squares.',
    difficulty: 8,
    targetTimeSeconds: 6.0,
    params: { squareTrack: 'general_duplex' },
  },
  {
    id: 'cubes_anchors',
    module: 'squares_cubes',
    dimension: 'cubes_anchors',
    title: 'Anchor Cubes (1-12 & Decades)',
    shortCode: 'CB-ANC',
    description: 'Instant recall of benchmark cubes 1³-12³ and decade cubes 20³-100³.',
    difficulty: 4,
    targetTimeSeconds: 2.5,
    params: { squareTrack: 'cubes_anchor' },
  },
  {
    id: 'cubes_advanced',
    module: 'squares_cubes',
    dimension: 'cubes_advanced',
    title: 'Advanced 2-Digit Cubes (13-99)',
    shortCode: 'CB-ADV',
    description: 'High-order mental cube estimation and expansion.',
    difficulty: 9,
    targetTimeSeconds: 8.0,
    params: { squareTrack: 'cubes_advanced' },
  },

  // Anzan Working Memory Stream Drills
  {
    id: 'anzan_novice',
    module: 'working_memory',
    dimension: 'anzan_stream',
    title: 'Anzan Novice Warmup',
    shortCode: 'ANZ-1',
    description: '5 single digits at 1200ms without negatives.',
    difficulty: 2,
    targetTimeSeconds: 8.0,
    params: { anzanDigits: 1, anzanIntervalMs: 1200, anzanCount: 5, anzanAllowNegatives: false },
  },
  {
    id: 'anzan_standard',
    module: 'working_memory',
    dimension: 'anzan_stream',
    title: 'Anzan Standard Flow',
    shortCode: 'ANZ-2',
    description: '5 single digits at 800ms with smooth rhythm.',
    difficulty: 4,
    targetTimeSeconds: 6.0,
    params: { anzanDigits: 1, anzanIntervalMs: 800, anzanCount: 5, anzanAllowNegatives: false },
  },
  {
    id: 'anzan_pro',
    module: 'working_memory',
    dimension: 'anzan_stream',
    title: 'Anzan Soroban Pro',
    shortCode: 'ANZ-3',
    description: '7 two-digit numbers at 500ms with bounded negatives.',
    difficulty: 7,
    targetTimeSeconds: 5.0,
    params: { anzanDigits: 2, anzanIntervalMs: 500, anzanCount: 7, anzanAllowNegatives: true },
  },
  {
    id: 'anzan_grandmaster',
    module: 'working_memory',
    dimension: 'anzan_stream',
    title: 'Anzan Grandmaster Flash',
    shortCode: 'ANZ-4',
    description: '10 two-digit numbers at 300ms ultra-fast flash.',
    difficulty: 9,
    targetTimeSeconds: 4.0,
    params: { anzanDigits: 2, anzanIntervalMs: 300, anzanCount: 10, anzanAllowNegatives: true },
  },
];

const DRILL_MAP = new Map<string, DrillDefinition>();
for (const drill of CATALOG_DRILLS) {
  DRILL_MAP.set(drill.id, drill);
}

export function getAllowedDrills(): DrillDefinition[] {
  return CATALOG_DRILLS;
}

export function isValidDrillId(id: string): boolean {
  return DRILL_MAP.has(id);
}

export function getDrillById(id: string): DrillDefinition | undefined {
  return DRILL_MAP.get(id);
}

export function getDrillsForDimension(dim: SkillDimension): DrillDefinition[] {
  return CATALOG_DRILLS.filter((d) => d.dimension === dim);
}

export function getDefaultDrillForDimension(dim: SkillDimension): DrillDefinition {
  const matching = getDrillsForDimension(dim);
  if (matching.length > 0) return matching[0];
  return CATALOG_DRILLS[0];
}
