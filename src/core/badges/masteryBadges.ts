/**
 * Feats of Calculation & Mastery Badges Catalog
 * Distinct milestone badges for Squares (up to 20, 30, 50, 100), Cubes (up to 10, 20, 30),
 * Square/Cube roots, Tables, and Combined Grandmaster Feats.
 * All badges are equippable as user avatars/DPs.
 */

export type MasteryBadgeCategory = 'squares' | 'cubes' | 'roots' | 'tables' | 'combined';
export type MasteryBadgeTier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'mythic';

export interface MasteryBadge {
  id: string;
  title: string;
  category: MasteryBadgeCategory;
  tier: MasteryBadgeTier;
  description: string;
  criterionText: string;
  primaryColor: string;
  secondaryColor: string;
  glowColor: string;
  iconName: 'zap' | 'flame' | 'target' | 'sparkles' | 'award' | 'trophy' | 'shield' | 'crown';
  checkUnlocked: (context: {
    overallStats: { totalCalculations?: number; totalQuestions?: number; totalCorrect?: number; totalTimeSpentSeconds?: number };
    progressMap: Record<string, any>;
    factMemoryMap: Record<string, any>;
  }) => boolean;
}

export const MASTERY_BADGES: MasteryBadge[] = [
  // -------------------------------------------------------------
  // SQUARES MASTERY (Up to 20, 30, 50, 100)
  // -------------------------------------------------------------
  {
    id: 'sq_20',
    title: 'Square Spark (1–20²)',
    category: 'squares',
    tier: 'bronze',
    description: 'Mastered foundational squares from 1² to 20² (up to 400).',
    criterionText: 'Master squares 1 to 20 or answer 20+ square calculations',
    primaryColor: '#f97316',
    secondaryColor: '#9a3412',
    glowColor: 'rgba(249, 115, 22, 0.5)',
    iconName: 'flame',
    checkUnlocked: ({ factMemoryMap, progressMap }) => {
      let count = 0;
      for (let i = 1; i <= 20; i++) {
        const key = `square:${i}`;
        if (factMemoryMap[key]?.masteryState === 'mastered') count++;
      }
      return count >= 10 || (progressMap['squares_1_25']?.correctCount || 0) >= 15;
    },
  },
  {
    id: 'sq_30',
    title: 'Quartermaster of Squares (1–30²)',
    category: 'squares',
    tier: 'silver',
    description: 'Mastered working squares up to 30² (900) with direct recall.',
    criterionText: 'Master squares up to 30 or achieve high accuracy on 30+ squares',
    primaryColor: '#38bdf8',
    secondaryColor: '#0369a1',
    glowColor: 'rgba(56, 189, 248, 0.5)',
    iconName: 'zap',
    checkUnlocked: ({ factMemoryMap, progressMap }) => {
      let count = 0;
      for (let i = 1; i <= 30; i++) {
        if (factMemoryMap[`square:${i}`]?.masteryState === 'mastered') count++;
      }
      return count >= 15 || (progressMap['squares_1_30']?.correctCount || 0) >= 25;
    },
  },
  {
    id: 'sq_50',
    title: 'Centurion of Squares (1–50²)',
    category: 'squares',
    tier: 'gold',
    description: 'Fluency across 50 numbers up to 50² (2,500) utilizing Vedic base-50 complements.',
    criterionText: 'Master 25+ squares up to 50',
    primaryColor: '#eab308',
    secondaryColor: '#854d0e',
    glowColor: 'rgba(234, 179, 8, 0.6)',
    iconName: 'award',
    checkUnlocked: ({ factMemoryMap, progressMap }) => {
      let count = 0;
      for (let i = 1; i <= 50; i++) {
        if (factMemoryMap[`square:${i}`]?.masteryState === 'mastered') count++;
      }
      return count >= 25 || (progressMap['squares_31_50']?.correctCount || 0) >= 20;
    },
  },
  {
    id: 'sq_100',
    title: 'Century Titan (1–100²)',
    category: 'squares',
    tier: 'diamond',
    description: 'Supreme mastery of squares from 1² all the way to 100² (10,000).',
    criterionText: 'Master 50+ squares or complete 100 square drills',
    primaryColor: '#06b6d4',
    secondaryColor: '#0e7490',
    glowColor: 'rgba(6, 182, 212, 0.7)',
    iconName: 'crown',
    checkUnlocked: ({ factMemoryMap, progressMap }) => {
      let count = 0;
      for (let i = 1; i <= 100; i++) {
        if (factMemoryMap[`square:${i}`]?.masteryState === 'mastered') count++;
      }
      return count >= 45 || (progressMap['squares_51_100']?.correctCount || 0) >= 30;
    },
  },

  // -------------------------------------------------------------
  // CUBES MASTERY (Up to 10, 20, 30)
  // -------------------------------------------------------------
  {
    id: 'cb_10',
    title: 'Cube Initiate (1–10³)',
    category: 'cubes',
    tier: 'bronze',
    description: 'Solid direct memory of core cubes 1³ through 10³ (1,000).',
    criterionText: 'Master cubes 1 to 10',
    primaryColor: '#a855f7',
    secondaryColor: '#581c87',
    glowColor: 'rgba(168, 85, 247, 0.5)',
    iconName: 'sparkles',
    checkUnlocked: ({ factMemoryMap, progressMap }) => {
      let count = 0;
      for (let i = 1; i <= 10; i++) {
        if (factMemoryMap[`cube:${i}`]?.masteryState === 'mastered') count++;
      }
      return count >= 5 || (progressMap['cubes_1_15']?.correctCount || 0) >= 10;
    },
  },
  {
    id: 'cb_20',
    title: 'Cubic Alchemist (1–20³)',
    category: 'cubes',
    tier: 'silver',
    description: 'Expanded cubic capacity from 1³ to 20³ (8,000).',
    criterionText: 'Master 10+ cubes up to 20',
    primaryColor: '#ec4899',
    secondaryColor: '#831843',
    glowColor: 'rgba(236, 72, 153, 0.5)',
    iconName: 'target',
    checkUnlocked: ({ factMemoryMap, progressMap }) => {
      let count = 0;
      for (let i = 1; i <= 20; i++) {
        if (factMemoryMap[`cube:${i}`]?.masteryState === 'mastered') count++;
      }
      return count >= 10 || (progressMap['cubes_16_25']?.correctCount || 0) >= 15;
    },
  },
  {
    id: 'cb_30',
    title: 'Cubic Apex Sovereign (1–30³)',
    category: 'cubes',
    tier: 'gold',
    description: 'Unmatched 3D arithmetic intuition up to 30³ (27,000).',
    criterionText: 'Master 18+ cubes up to 30',
    primaryColor: '#8b5cf6',
    secondaryColor: '#4c1d95',
    glowColor: 'rgba(139, 92, 246, 0.6)',
    iconName: 'trophy',
    checkUnlocked: ({ factMemoryMap, progressMap }) => {
      let count = 0;
      for (let i = 1; i <= 30; i++) {
        if (factMemoryMap[`cube:${i}`]?.masteryState === 'mastered') count++;
      }
      return count >= 18 || (progressMap['cubes_26_35']?.correctCount || 0) >= 15;
    },
  },

  // -------------------------------------------------------------
  // ROOTS MASTERY (Square Roots & Cube Roots)
  // -------------------------------------------------------------
  {
    id: 'sqrt_100',
    title: 'Square Root Diviner (√1 to √100)',
    category: 'roots',
    tier: 'platinum',
    description: 'Rapid bidirectional extraction of square roots up to √100.',
    criterionText: 'Master square root drill patterns with high accuracy',
    primaryColor: '#10b981',
    secondaryColor: '#064e3b',
    glowColor: 'rgba(16, 185, 129, 0.6)',
    iconName: 'shield',
    checkUnlocked: ({ progressMap, overallStats }) => {
      return (
        (progressMap['sqrt_1_100']?.correctCount || 0) >= 15 ||
        (overallStats.totalCalculations || 0) >= 50
      );
    },
  },
  {
    id: 'cbrt_100',
    title: 'Cubic Root Specialist (∛1 to ∛100)',
    category: 'roots',
    tier: 'platinum',
    description: 'Mastered ending-digit parity heuristics to extract cube roots instantly.',
    criterionText: 'Solve 15+ cube root questions correctly',
    primaryColor: '#14b8a6',
    secondaryColor: '#134e4a',
    glowColor: 'rgba(20, 184, 166, 0.6)',
    iconName: 'zap',
    checkUnlocked: ({ progressMap, overallStats }) => {
      return (
        (progressMap['cbrt_1_100']?.correctCount || 0) >= 15 ||
        (overallStats.totalCalculations || 0) >= 60
      );
    },
  },

  // -------------------------------------------------------------
  // TABLES MASTERY (10, 20, 50, 100)
  // -------------------------------------------------------------
  {
    id: 'tab_10',
    title: 'Decade Foundations (Tables 1–10)',
    category: 'tables',
    tier: 'bronze',
    description: 'Sub-second fluency across all single-digit multiplication tables 1–10.',
    criterionText: 'Master tables 1 to 10',
    primaryColor: '#f59e0b',
    secondaryColor: '#78350f',
    glowColor: 'rgba(245, 158, 11, 0.5)',
    iconName: 'target',
    checkUnlocked: ({ progressMap }) => {
      let mastered = 0;
      for (let t = 1; t <= 10; t++) {
        if (progressMap[`table_${t}`]?.masteryStatus === 'mastered') mastered++;
      }
      return mastered >= 8;
    },
  },
  {
    id: 'tab_20',
    title: 'Vedic Vanguard (Tables 11–20)',
    category: 'tables',
    tier: 'silver',
    description: 'Competitive agility on tough speed tables 13, 14, 17, 18, and 19.',
    criterionText: 'Master 7+ tables in the 11 to 20 range',
    primaryColor: '#6366f1',
    secondaryColor: '#312e81',
    glowColor: 'rgba(99, 102, 241, 0.5)',
    iconName: 'flame',
    checkUnlocked: ({ progressMap }) => {
      let mastered = 0;
      for (let t = 11; t <= 20; t++) {
        if (progressMap[`table_${t}`]?.masteryStatus === 'mastered') mastered++;
      }
      return mastered >= 7;
    },
  },
  {
    id: 'tab_50',
    title: 'Centurion Half-Century (Tables 1–50)',
    category: 'tables',
    tier: 'gold',
    description: 'Exceptional automaticity spanning 50 multiplication tables.',
    criterionText: 'Master 30+ tables across 1 to 50',
    primaryColor: '#eab308',
    secondaryColor: '#713f12',
    glowColor: 'rgba(234, 179, 8, 0.6)',
    iconName: 'award',
    checkUnlocked: ({ progressMap }) => {
      let mastered = 0;
      for (let t = 1; t <= 50; t++) {
        if (progressMap[`table_${t}`]?.masteryStatus === 'mastered') mastered++;
      }
      return mastered >= 25;
    },
  },
  {
    id: 'tab_100',
    title: 'Centurion Supreme (Tables 1–100)',
    category: 'tables',
    tier: 'mythic',
    description: 'The pinnacle of table fluency: direct automaticity across all 100 tables!',
    criterionText: 'Master 75+ tables across 1 to 100',
    primaryColor: '#f43f5e',
    secondaryColor: '#881337',
    glowColor: 'rgba(244, 63, 94, 0.8)',
    iconName: 'crown',
    checkUnlocked: ({ progressMap }) => {
      let mastered = 0;
      for (let t = 1; t <= 100; t++) {
        if (progressMap[`table_${t}`]?.masteryStatus === 'mastered') mastered++;
      }
      return mastered >= 70;
    },
  },

  // -------------------------------------------------------------
  // COMBINED GRANDMASTER FEATS (Appealing Visual Badges)
  // -------------------------------------------------------------
  {
    id: 'comb_powers',
    title: 'Powers Dual Titan',
    category: 'combined',
    tier: 'platinum',
    description: 'Synergistic mastery: Squares up to 30² AND Cubes up to 20³.',
    criterionText: 'Unlock Quartermaster of Squares and Cubic Alchemist',
    primaryColor: '#0ea5e9',
    secondaryColor: '#7c3aed',
    glowColor: 'rgba(14, 165, 233, 0.7)',
    iconName: 'zap',
    checkUnlocked: (ctx) => {
      const hasSq = MASTERY_BADGES.find((b) => b.id === 'sq_30')?.checkUnlocked(ctx);
      const hasCb = MASTERY_BADGES.find((b) => b.id === 'cb_20')?.checkUnlocked(ctx);
      return Boolean(hasSq && hasCb);
    },
  },
  {
    id: 'comb_vedic',
    title: 'Vedic Calculation Emperor',
    category: 'combined',
    tier: 'diamond',
    description: 'Unstoppable arithmetic core: Tables 11–20 + Squares to 50 + 200+ solved drills.',
    criterionText: 'Master Tables 20, Squares 50, and 200+ calculations',
    primaryColor: '#f59e0b',
    secondaryColor: '#d97706',
    glowColor: 'rgba(245, 158, 11, 0.75)',
    iconName: 'trophy',
    checkUnlocked: (ctx) => {
      const hasTab = MASTERY_BADGES.find((b) => b.id === 'tab_20')?.checkUnlocked(ctx);
      const hasSq = MASTERY_BADGES.find((b) => b.id === 'sq_50')?.checkUnlocked(ctx);
      const calcs = (ctx.overallStats.totalCalculations || ctx.overallStats.totalQuestions || 0) >= 200;
      return Boolean((hasTab && hasSq) || calcs);
    },
  },
  {
    id: 'comb_apex',
    title: 'Omniscient Arithmetic Sovereign',
    category: 'combined',
    tier: 'mythic',
    description: 'The supreme badge in Mentalab: High volume, multi-digit automaticity, and mastery of powers.',
    criterionText: '500+ Calculations solved, CPM > 30, and multiple mastery tracks',
    primaryColor: '#ec4899',
    secondaryColor: '#3b82f6',
    glowColor: 'rgba(236, 72, 153, 0.85)',
    iconName: 'crown',
    checkUnlocked: ({ overallStats }) => {
      const calcs = overallStats.totalCalculations || overallStats.totalQuestions || 0;
      const timeSpent = overallStats.totalTimeSpentSeconds || 0;
      const cpm = timeSpent > 0 ? (overallStats.totalCorrect || 0) / (timeSpent / 60) : 0;
      return calcs >= 400 || (calcs >= 150 && cpm >= 28);
    },
  },
];

/**
 * Returns list of badges with their dynamic unlocked state.
 */
export function getEvaluatedMasteryBadges(context: {
  overallStats: any;
  progressMap: Record<string, any>;
  factMemoryMap: Record<string, any>;
}) {
  return MASTERY_BADGES.map((b) => ({
    ...b,
    isUnlocked: b.checkUnlocked(context),
  }));
}

export function getMasteryBadgeById(badgeId: string): MasteryBadge | undefined {
  return MASTERY_BADGES.find((b) => b.id === badgeId);
}
