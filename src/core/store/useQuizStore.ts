/**
 * Zustand State Store for Mentalis
 * Headless, decoupled state machine that can be ported 1:1 to React Native.
 * Features backward-compatible migration (v1 -> v2 -> v3), adaptive question loading,
 * Bayesian learner modeling, cognitive fatigue monitoring, deterministic daily plans,
 * and secure AI Coach integration.
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { SupportedLocale, defaultLocale } from '../../i18n/config';
import {
  ModuleId,
  Question,
  UserProgressItem,
  OverallStats,
  AnzanConfig,
  AnzanStats,
  AnzanRecord,
  ViewMode,
  TableChartTab,
  SessionDrillConfig,
  SessionSummary,
  LearningMode,
  WorkoutMode,
  TableTrainingMode,
  ExamSubSkill,
  ExamTransferScores,
  CustomDrillConfig,
  CalculationTechniqueId,
  TechniqueMasteryState,
  TableMasteryAlert,
  BrainMatrix,
} from '../types';
import { SquareCubeSubTrack } from '../calcEngine';
import { evaluateMasteryStatus, updateDailyStreak, calculateMedian, calculateCPM } from '../mastery';
import {
  getAdaptiveQuestion,
  getRecommendedNextDrill,
  analyzeProgress,
  checkTableAutomaticity,
  evaluateTechniqueMastery,
} from '../adaptive';
import { soundEngine } from '../soundEngine';
import {
  LearnerProfile,
  SkillDimension,
  AssessmentSession,
  TrainingPlan,
  CoachingInsight,
  AICoachState,
  AIProviderStatus,
  createDefaultLearnerProfile,
  createDefaultSkillEstimate,
  updateSkillEstimate,
  detectFatigue,
  ALL_SKILL_DIMENSIONS,
} from '../learnerModel';
import {
  FactKey,
  FactMemory,
  FactMemoryState,
  FactAttempt,
  createInitialFactMemoryState,
  updateFactMemoryStateWithAttempt,
  deriveAggregateSkillsFromFacts,
  parseFactKey,
} from '../factModel';
import {
  RepairCard,
  detectErrorPattern,
  generateRepairCard,
  selectNextFact,
  selectAdaptiveBandTable,
  scheduleWeakFactReview,
  detectFrustration,
} from '../memoryScheduler';
import {
  generateQuestionFromFact,
  getCandidateFactKeysForTarget,
  generateTableModeQuestion,
} from '../factEngine';
import {
  createAssessmentSession,
  recordAssessmentAnswer,
  recordAssessmentSkip,
} from '../diagnosticEngine';
import {
  generateDailyTrainingPlan,
  adjustPlanForFatigue,
  getQuestionForTrainingBlock,
} from '../planEngine';
import { getDrillById } from '../catalog';
import { consultLocalAdaptiveCoach } from '../localCoachEngine';
import { MICRO_SESSION_PRESETS } from '../curriculumEngine';
import { syncEngine, SyncStatus } from '../storage/supabaseSyncEngine';
import { signOutUser, getCurrentUser, getCurrentSession, onAuthStateChange, getSupabase } from '../../lib/supabase/client';
import { calculatePointsEarned, getLevelFromXP, getLevelProgress, MAX_LEVEL } from '../levelEngine';
import { presenceEngine } from '../social/presenceEngine';
import { socialEngine } from '../social/socialEngine';
import { getEvaluatedMasteryBadges } from '../badges/masteryBadges';
import { evaluateCognitiveState, AiCognitiveTrainingState } from '../aiCognitiveEngine';

export interface ThemeConfig {
  fontFamily: 'inter' | 'mono' | 'outfit' | 'roboto';
  accentColor: 'violet' | 'emerald' | 'amber' | 'cyan' | 'rose';
  fontSize: 'compact' | 'standard' | 'large' | 'xlarge';
  matrixRainEnabled: boolean;
}

export const initialThemeConfig: ThemeConfig = {
  fontFamily: 'inter',
  accentColor: 'violet',
  fontSize: 'standard',
  matrixRainEnabled: false,
};

let profileRealtimeUnsub: (() => void) | null = null;

export function resolveActiveDimension(
  module: ModuleId,
  addSubLevel: number,
  table: number,
  squareTrack: SquareCubeSubTrack,
  examSubSkill?: ExamSubSkill
): SkillDimension {
  if (module === 'tables_bootcamp') {
    return `table_${table}` as SkillDimension;
  }
  if (module === 'exam_quant') {
    return (examSubSkill || 'quant_simplification') as SkillDimension;
  }
  if (module === 'fractions_percentages') {
    return 'fraction_percentage_equiv';
  }
  if (module === 'add_sub') {
    if (addSubLevel === 1) return 'add_sub_non_bridging';
    if (addSubLevel === 2) return 'add_sub_bridging_decade';
    if (addSubLevel === 3) return 'add_sub_complements_100';
    if (addSubLevel === 4) return 'add_sub_multidigit_l2r';
    return 'add_sub_mixed_chain';
  }
  if (module === 'multiplication') {
    if ([2, 3, 4, 5, 10].includes(table)) return 'mult_foundations';
    if ([6, 7, 8, 9, 11, 12].includes(table)) return 'mult_core_tables';
    if (table >= 13 && table <= 19) return 'mult_teen_tables';
    return 'mult_decade_ext';
  }
  if (module === 'squares_cubes') {
    if (squareTrack === 'ending_5') return 'squares_ending_5';
    if (squareTrack === 'near_50') return 'squares_near_50';
    if (squareTrack === 'near_100') return 'squares_near_100';
    if (squareTrack === 'general_duplex') return 'squares_duplex_general';
    if (squareTrack === 'cubes_anchor') return 'cubes_anchors';
    return 'cubes_advanced';
  }
  if (module === 'custom_drill') {
    if (table && table >= 2 && table <= 20) return `table_${table}` as SkillDimension;
    return 'mult_core_tables';
  }
  return 'anzan_stream';
}

import { storageService } from '../storage/storageRepository';
import { TECHNIQUE_CURRICULUM } from '../techniques/techniqueCurriculum';

export const INITIAL_TECHNIQUE_MASTERY_MAP: Record<CalculationTechniqueId, TechniqueMasteryState> =
  Object.keys(TECHNIQUE_CURRICULUM).reduce((acc, key) => {
    const tId = key as CalculationTechniqueId;
    const lesson = TECHNIQUE_CURRICULUM[tId];
    acc[tId] = {
      techniqueId: tId,
      title: lesson?.title || tId,
      consecutiveCorrect: 0,
      averageLatencyMs: 0,
      totalExposures: 0,
      isMastered: false,
    };
    return acc;
  }, {} as Record<CalculationTechniqueId, TechniqueMasteryState>);

export function resolveTechniqueIdFromStrategy(strategyId?: string): CalculationTechniqueId | null {
  if (!strategyId) return null;
  if (strategyId in TECHNIQUE_CURRICULUM) {
    return strategyId as CalculationTechniqueId;
  }
  if (strategyId.includes('nikhilam')) return 'sub_nikhilam_all_from_9';
  if (strategyId.includes('shopkeeper') || strategyId.includes('count_up')) return 'sub_shopkeeper_count_up';
  if (strategyId.includes('decade_bridging')) return 'add_bridging_base10';
  if (strategyId.includes('l2r_decade_striding') || strategyId.includes('accumulator')) return 'add_l2r_place_value';
  if (strategyId.includes('century_crossing')) return 'century_crossing';
  if (strategyId.includes('triple_digit') || strategyId.includes('accumulation')) return 'add_l2r_place_value';
  if (strategyId.includes('compensation')) return 'add_compensation';
  if (strategyId.includes('complement')) return 'complements_100';
  if (strategyId.includes('half_and_double') || strategyId.includes('doubl')) return 'mult_pattern_half_double';
  if (strategyId.includes('decomposition') || strategyId.includes('tens_units')) return 'tens_units_decomposition';
  if (strategyId.includes('antyayor_dasakepi') || strategyId.includes('antyayor')) return 'mult_pattern_antyayor_dasakepi';
  if (strategyId.includes('reverse_antyayor')) return 'mult_pattern_reverse_antyayor';
  if (strategyId.includes('consecutive_int')) return 'mult_pattern_consecutive_int';
  if (strategyId.includes('consecutive_gap2')) return 'mult_pattern_consecutive_gap2';
  if (strategyId.includes('urdhva') || strategyId.includes('crosswise')) return 'mult_vedic_urdhva_tiryag';
  if (strategyId.includes('trachtenberg')) return 'mult_trachtenberg_rules';
  if (strategyId.includes('yavadunam') || strategyId.includes('base')) return 'mult_vedic_base_yavadunam';
  if (strategyId.includes('proximity') || strategyId.includes('nines_anchor') || strategyId.includes('teens')) return 'decade_proximity_anchor';
  if (strategyId.includes('ending_5') || strategyId.includes('ekadhikena')) return 'sq_ending_5';
  if (strategyId.includes('ending_25')) return 'sq_ending_25';
  if (strategyId.includes('near_50')) return 'sq_base_50';
  if (strategyId.includes('near_100')) return 'sq_base_100';
  if (strategyId.includes('duplex')) return 'sq_universal_duplex';
  if (strategyId.includes('cube_tables') || strategyId.includes('cube_anchor')) return 'cube_tables_1_25';
  if (strategyId.includes('binomial')) return 'cube_algebraic_binomial';
  if (strategyId.includes('root_sqrt_perfect')) return 'root_sqrt_perfect_6d';
  if (strategyId.includes('root_sqrt_approx')) return 'root_sqrt_approx_differential';
  if (strategyId.includes('root_cbrt')) return 'root_cbrt_perfect_6d';
  if (strategyId.includes('dhvajanka') || strategyId.includes('flag')) return 'div_vedic_flag_dhvajanka';
  if (strategyId.includes('osculator')) return 'div_vedic_osculators';
  if (strategyId.includes('reversible_law') || strategyId.includes('percent')) return 'pct_reversible_law';
  if (strategyId.includes('fraction_pivot')) return 'pct_fraction_pivots';
  return null;
}

export function computeExamTransferScores(
  profile: LearnerProfile,
  facts: Record<string, FactMemoryState | FactMemory>
): ExamTransferScores {
  const foundationDims: SkillDimension[] = [
    'table_11', 'table_12', 'table_13', 'table_14', 'table_15',
    'complements_10', 'complements_100', 'doubles_halves',
    'add_sub_bridging_decade', 'mult_foundations', 'mult_core_tables',
  ];
  let foundationSum = 0;
  let foundationCount = 0;
  for (const d of foundationDims) {
    const s = profile.skills[d];
    if (s && s.totalAttempts > 0) {
      foundationSum += Math.min(100, s.accuracy * 0.6 + (s.medianLatencyMs > 0 && s.medianLatencyMs <= 2500 ? 40 : 20));
      foundationCount++;
    }
  }
  const foundationScore = foundationCount > 0 ? Math.round(foundationSum / foundationCount) : 40;

  const allFacts = Object.values(facts);
  let automaticFacts = 0;
  let totalTrackedFacts = 0;
  for (const f of allFacts) {
    if ((f as any).totalAttempts >= 3 || (f as any).attempts >= 3) {
      totalTrackedFacts++;
      if (((f as any).speedLadderLevel && (f as any).speedLadderLevel >= 4) || ((f as any).automaticityScore && (f as any).automaticityScore >= 75)) {
        automaticFacts++;
      }
    }
  }
  const calculationAutomaticity = totalTrackedFacts > 0
    ? Math.round((automaticFacts / totalTrackedFacts) * 100)
    : 35;

  const examDims: SkillDimension[] = [
    'table_16', 'table_17', 'table_18', 'table_19', 'table_20',
    'fraction_percentage_equiv', 'quant_simplification', 'quant_approximation',
    'quant_percentage', 'quant_ratio', 'quant_average',
  ];
  let examAccSum = 0;
  let examAccCount = 0;
  for (const d of examDims) {
    const s = profile.skills[d];
    if (s && s.totalAttempts > 0) {
      examAccSum += s.accuracy;
      examAccCount++;
    }
  }
  const examAccuracy = examAccCount > 0 ? Math.round(examAccSum / examAccCount) : 50;

  let speedSum = 0;
  let speedCount = 0;
  for (const d of examDims) {
    const s = profile.skills[d];
    if (s && s.totalAttempts > 0 && s.medianLatencyMs > 0) {
      const speedPts = Math.max(10, Math.min(100, Math.round((3500 / s.medianLatencyMs) * 70)));
      speedSum += speedPts;
      speedCount++;
    }
  }
  const examSpeed = speedCount > 0 ? Math.round(speedSum / speedCount) : 45;

  let retainedCount = 0;
  let totalMastered = 0;
  for (const d of Object.values(profile.skills)) {
    if (d.totalAttempts >= 5 && d.accuracy >= 80) {
      totalMastered++;
      if (d.decayRisk === 'low' || d.decayRisk === 'moderate') {
        retainedCount++;
      }
    }
  }
  const retentionScore = totalMastered > 0 ? Math.round((retainedCount / totalMastered) * 100) : 60;

  const rrbReadiness = Math.round(
    foundationScore * 0.30 +
    calculationAutomaticity * 0.25 +
    examAccuracy * 0.20 +
    examSpeed * 0.15 +
    retentionScore * 0.10
  );

  return {
    calculationAutomaticity,
    examSpeed,
    examAccuracy,
    foundationScore,
    retentionScore,
    rrbReadiness,
  };
}

interface QuizState {
  // Navigation & View
  viewMode: ViewMode;
  activeModule: ModuleId;
  activeAddSubLevel: number;
  activeTable: number;
  activeSquareTrack: SquareCubeSubTrack;
  activeTableChartTab: TableChartTab;

  // Active Drill Session
  currentQuestion: Question | null;
  inputBuffer: string;
  questionStartTime: number;
  isEvaluating: boolean;
  lastResult: 'correct' | 'incorrect' | 'skipped' | null;
  lastAnswerSubmitted: number | null;
  lastCorrectAnswer: number | null;
  showStrategy: boolean;
  isPaused: boolean;

  // Session Drill Config & Summary
  sessionConfig: SessionDrillConfig;
  sessionAnswered: number;
  sessionCorrect: number;
  sessionStartTime: number;
  sessionResponseTimes: number[];
  sessionSummary: SessionSummary | null;

  // Real-time Streak & Metrics
  streak: number;
  bestStreak: number;

  // Persistent Progress Storage
  progressMap: Record<string, UserProgressItem>;
  dailyActivityMap: Record<string, number>;
  overallStats: OverallStats;
  anzanStats: AnzanStats;

  // Fact-Level Memory & Spaced Retrieval
  factMemoryMap: Record<string, FactMemoryState>;
  learningMode: LearningMode;
  workoutMode: WorkoutMode;
  activeRepairCard: RepairCard | null;
  delayedReviewQueue: { factKey: FactKey; dueAtCount: number }[];
  recentAskedKeys: FactKey[];
  batchAnswerCount: number;

  // Tables 11-20 Bootcamp & Exam Quant
  activeBootcampTable: number;
  isAdaptiveBootcampActive: boolean;
  currentTableMode: TableTrainingMode;
  activeExamSkill: ExamSubSkill;
  activeMicroSession: string | null;
  examTransferScores: ExamTransferScores | null;

  // Custom Drill, Single Table Mastery & Techniques
  customDrillConfig: CustomDrillConfig | null;
  targetMasteryTable: number | null;
  techniqueMasteryMap: Record<CalculationTechniqueId, TechniqueMasteryState>;
  tableMasteryAlert: TableMasteryAlert | null;
  isCustomDrillModalOpen: boolean;

  // Settings & Accessibility
  soundEnabled: boolean;
  reducedMotion: boolean;
  timerVisible: boolean;
  anzanConfig: AnzanConfig;
  locale: SupportedLocale;
  hasCompletedLanguageOnboarding: boolean;
  isSettingsModalOpen: boolean;

  // Auth & Cloud Sync
  currentUser: {
    id: string;
    email?: string;
    displayName?: string;
    avatarUrl?: string;
  } | null;
  isAuthModalOpen: boolean;
  syncStatus: SyncStatus;
  syncError: string | null;

  // Gamification & 1000-Level Progression
  xp: number;
  level: number;
  avatarType: 'google' | 'badge' | 'mastery';
  selectedBadgeLevel: number;
  selectedMasteryBadgeId: string | null;
  username: string | null;
  recentPointsEarned: number | null;
  newLevelUnlocked: number | null;
  isBadgePickerOpen: boolean;
  isChatDrawerOpen: boolean;

  // Learner Profile & AI Coaching
  learnerProfile: LearnerProfile;
  activeAssessment: AssessmentSession | null;
  assessmentInputBuffer: string;
  assessmentQuestionStartTime: number;
  activeTrainingPlan: TrainingPlan | null;
  activeTrainingBlockIndex: number;
  isPlanActive: boolean;
  aiCoachingEnabled: boolean;
  aiCoachInsight: CoachingInsight | null;
  isLoadingAiCoach: boolean;
  aiCoachState: AICoachState;

  // Actions - Navigation & Module Selection
  setViewMode: (mode: ViewMode) => void;
  setActiveModule: (module: ModuleId) => void;
  setAddSubLevel: (level: number) => void;
  setActiveTable: (table: number) => void;
  setActiveSquareTrack: (track: SquareCubeSubTrack) => void;
  setActiveTableChartTab: (tab: TableChartTab) => void;
  setBootcampTable: (table: number) => void;
  setTableMode: (mode: TableTrainingMode) => void;
  setExamSkill: (skill: ExamSubSkill) => void;
  startTablesBootcamp: (table?: number, mode?: TableTrainingMode, isAdaptive?: boolean) => void;
  startExamQuantDrill: (subSkill?: ExamSubSkill) => void;
  startMicroSession: (presetId: string) => void;
  selectMultipleChoiceOption: (option: number | string) => void;
  calculateExamTransferScores: () => ExamTransferScores;

  // Actions - Drill Practice
  startSession: (config?: Partial<SessionDrillConfig>) => void;
  restartCurrentSession: () => void;
  pauseSession: () => void;
  resumeSession: () => void;
  endSession: () => void;
  dismissSessionSummary: () => void;

  loadNextQuestion: (forceMode?: 'standard' | 'targeted_refresh' | 'weak_spots') => void;
  retrySimilarQuestion: () => void;
  appendDigit: (digit: string) => void;
  toggleNegative: () => void;
  backspace: () => void;
  clearBuffer: () => void;
  submitAnswer: (overrideAnswer?: number) => void;
  skipQuestion: () => void;

  toggleStrategy: (force?: boolean) => void;
  toggleSound: () => void;
  toggleReducedMotion: () => void;
  toggleTimerVisibility: () => void;
  setLocale: (locale: SupportedLocale) => void;
  setHasCompletedLanguageOnboarding: (val: boolean) => void;
  setIsSettingsModalOpen: (open: boolean) => void;
  updateAnzanConfig: (config: Partial<AnzanConfig>) => void;
  recordAnzanRun: (runData: Omit<AnzanRecord, 'id' | 'timestamp'>) => void;
  resetProgress: () => void;

  // Theme & Visual Customization
  themeConfig: ThemeConfig;
  setThemeConfig: (config: Partial<ThemeConfig>) => void;
  getCognitiveTrainingState: () => AiCognitiveTrainingState;

  // Actions - Learning Mode & Fact Training
  setLearningMode: (mode: LearningMode) => void;
  setWorkoutMode: (mode: WorkoutMode) => void;
  dismissRepairCard: () => void;
  practiceFact: (factKey: FactKey, mode?: LearningMode) => void;

  // Actions - Onboarding Assessment
  startAssessment: () => void;
  appendAssessmentDigit: (digit: string) => void;
  toggleAssessmentNegative: () => void;
  backspaceAssessment: () => void;
  clearAssessmentBuffer: () => void;
  submitAssessmentAnswer: () => void;
  skipAssessmentQuestion: () => void;
  skipAssessment: () => void;
  pauseAssessment: () => void;
  resumeAssessment: () => void;

  // Actions - Training Plans & AI Coach
  generateDailyPlan: (requestedMinutes?: number) => void;
  startTrainingBlock: (blockIndex: number) => void;
  advanceTrainingBlock: () => void;
  cancelActivePlan: () => void;
  requestAICoachFeedback: (force?: boolean) => Promise<void>;
  setAICooldownMinutes: (minutes: number) => void;
  markPendingAISync: () => void;
  toggleAICoaching: () => void;
  dismissAICoachInsight: () => void;

  // Actions - Custom Drill & Single Table Automaticity
  startCustomDrill: (config: CustomDrillConfig) => void;
  startSingleTableMastery: (tableNum: number) => void;
  advanceToNextTable: () => void;
  dismissTableMasteryAlert: () => void;
  setIsCustomDrillModalOpen: (open: boolean) => void;
  exportBrainMatrixJSON: () => string;
  importBrainMatrixJSON: (jsonStr: string) => { success: boolean; error?: string };
  recordTechniquePracticeResult: (
    techniqueId: CalculationTechniqueId,
    isCorrect: boolean,
    latencyMs: number
  ) => Promise<TechniqueMasteryState>;

  // Actions - Auth & Cloud Sync
  setAuthModalOpen: (open: boolean) => void;
  setAuthUser: (user: any) => void;
  setSyncStatus: (status: SyncStatus, error?: string) => void;
  initializeAuthAndSync: () => Promise<void>;
  signOut: () => Promise<void>;
  deleteAccount: () => Promise<{ success: boolean; error?: string }>;
  triggerSync: () => void;

  // Actions - Gamification & Social
  setAvatarPreference: (type: 'google' | 'badge' | 'mastery', badgeLevel?: number, masteryBadgeId?: string) => Promise<void>;
  updateDisplayName: (displayName: string) => Promise<{ success: boolean; error?: string }>;
  updateUsername: (username: string) => Promise<{ success: boolean; error?: string }>;
  setIsBadgePickerOpen: (open: boolean) => void;
  setIsChatDrawerOpen: (open: boolean) => void;
  dismissLevelUpCelebration: () => void;
}

const initialOverallStats: OverallStats = {
  totalCalculations: 0,
  totalCorrect: 0,
  currentStreak: 0,
  bestStreak: 0,
  lastActiveDate: '',
  dailyActiveStreak: 0,
  totalTimeSpentSeconds: 0,
};

const initialAnzanStats: AnzanStats = {
  totalRuns: 0,
  totalCorrect: 0,
  bestStreak: 0,
  currentStreak: 0,
  records: [],
};

const initialSessionConfig: SessionDrillConfig = {
  goalCount: 10,
  isEndless: false,
  mode: 'standard',
  workoutMode: 'exercise',
};

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      viewMode: 'dashboard',
      activeModule: 'add_sub',
      activeAddSubLevel: 2,
      activeTable: 7,
      activeSquareTrack: 'near_50',
      activeTableChartTab: 'mul',

      currentQuestion: null,
      inputBuffer: '',
      questionStartTime: Date.now(),
      isEvaluating: false,
      lastResult: null,
      lastAnswerSubmitted: null,
      lastCorrectAnswer: null,
      showStrategy: false,
      isPaused: false,

      sessionConfig: initialSessionConfig,
      sessionAnswered: 0,
      sessionCorrect: 0,
      sessionStartTime: Date.now(),
      sessionResponseTimes: [],
      sessionSummary: null,

      streak: 0,
      bestStreak: 0,

      progressMap: {},
      dailyActivityMap: {},
      overallStats: initialOverallStats,
      anzanStats: initialAnzanStats,

      // Fact-Level Memory & Spaced Retrieval State
      factMemoryMap: {},
      learningMode: 'recall',
      workoutMode: 'exercise',
      activeRepairCard: null,
      delayedReviewQueue: [],
      recentAskedKeys: [],
      batchAnswerCount: 0,

      // Tables 11-20 Bootcamp & Exam Quant
      activeBootcampTable: 13,
      isAdaptiveBootcampActive: true,
      currentTableMode: 'recall',
      activeExamSkill: 'quant_simplification',
      activeMicroSession: null,
      examTransferScores: null,

      // Custom Drill, Single Table Mastery & Techniques
      customDrillConfig: null,
      targetMasteryTable: null,
      techniqueMasteryMap: INITIAL_TECHNIQUE_MASTERY_MAP,
      tableMasteryAlert: null,
      isCustomDrillModalOpen: false,

      soundEnabled: true,
      reducedMotion: false,
      timerVisible: true,
      anzanConfig: {
        count: 5,
        digits: 1,
        intervalMs: 800,
        allowNegatives: false,
        presetName: 'Standard Flow',
      },
      locale: defaultLocale,
      hasCompletedLanguageOnboarding: false,
      isSettingsModalOpen: false,
      themeConfig: initialThemeConfig,

      // Auth & Cloud Sync
      currentUser: null,
      isAuthModalOpen: false,
      syncStatus: 'idle' as SyncStatus,
      syncError: null,

      // Gamification & 1000-Level Progression
      xp: 0,
      level: 1,
      avatarType: 'google',
      selectedBadgeLevel: 1,
      selectedMasteryBadgeId: null,
      username: null,
      recentPointsEarned: null,
      newLevelUnlocked: null,
      isBadgePickerOpen: false,
      isChatDrawerOpen: false,

      // AI & Cognitive Profile State
      learnerProfile: createDefaultLearnerProfile(),
      activeAssessment: null,
      assessmentInputBuffer: '',
      assessmentQuestionStartTime: 0,
      activeTrainingPlan: null,
      activeTrainingBlockIndex: 0,
      isPlanActive: false,
      aiCoachingEnabled: true,
      aiCoachInsight: null,
      isLoadingAiCoach: false,
      aiCoachState: {
        learnerId: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'learner_' + Math.random().toString(36).substring(2, 11),
        cooldownMinutes: 30,
        lastSuccessfulRequestAt: null,
        nextEligibleRequestAt: 0,
        providerStatus: 'ready',
        lastErrorType: null,
        retryAfterSeconds: null,
        pendingSync: false,
        lastAiLesson: null,
        planSource: 'offline',
      },

      setViewMode: (mode: ViewMode) => {
        if (mode === 'bootcamp_11_20') {
          set({ viewMode: mode, activeModule: 'tables_bootcamp' });
        } else if (mode === 'exam_quant') {
          set({ viewMode: mode, activeModule: 'exam_quant' });
        } else {
          set({ viewMode: mode });
        }
      },

      setActiveModule: (module: ModuleId) => {
        set({ activeModule: module });
        get().loadNextQuestion();
      },

      setAddSubLevel: (level: number) => {
        set({ activeAddSubLevel: level, activeModule: 'add_sub', viewMode: 'practice' });
        get().startSession({ goalCount: 10, mode: 'standard' });
      },

      setActiveTable: (table: number) => {
        set({ activeTable: table, activeModule: 'multiplication', viewMode: 'practice' });
        get().startSession({ goalCount: 10, mode: 'standard' });
      },

      setBootcampTable: (table: number) => {
        set({ activeBootcampTable: table, activeModule: 'tables_bootcamp' });
      },

      setTableMode: (mode: TableTrainingMode) => {
        set({ currentTableMode: mode });
      },

      setExamSkill: (skill: ExamSubSkill) => {
        set({ activeExamSkill: skill, activeModule: 'exam_quant' });
      },

      startTablesBootcamp: (table = 13, mode = 'recall', isAdaptive = true) => {
        set({
          activeModule: 'tables_bootcamp',
          activeBootcampTable: table,
          currentTableMode: mode,
          isAdaptiveBootcampActive: isAdaptive,
          viewMode: 'practice',
        });
        get().startSession({ goalCount: 20, isEndless: false, mode: 'standard' });
      },

      startExamQuantDrill: (subSkill = 'quant_simplification') => {
        set({
          activeModule: 'exam_quant',
          activeExamSkill: subSkill,
          viewMode: 'practice',
        });
        get().startSession({ goalCount: 15, isEndless: false, mode: 'standard' });
      },

      startMicroSession: (presetId: string) => {
        const preset = MICRO_SESSION_PRESETS.find((p) => p.id === presetId) || MICRO_SESSION_PRESETS[0];
        const goalCount =
          preset.durationMinutes === 2 ? 15 : preset.durationMinutes === 5 ? 25 : preset.durationMinutes === 10 ? 40 : 60;
        set({
          activeModule: preset.targetModule,
          activeMicroSession: preset.id,
          currentTableMode: preset.targetTableMode || 'recall',
          activeExamSkill: preset.examSubSkill || 'quant_simplification',
          viewMode: 'practice',
        });
        get().startSession({ goalCount, isEndless: false, mode: 'standard' });
      },

      selectMultipleChoiceOption: (option: number | string) => {
        const num = typeof option === 'number' ? option : parseFloat(option);
        if (!isNaN(num)) {
          get().submitAnswer(num);
        }
      },

      calculateExamTransferScores: () => {
        const state = get();
        const scores = computeExamTransferScores(state.learnerProfile, state.factMemoryMap);
        set({ examTransferScores: scores });
        return scores;
      },

      setActiveSquareTrack: (track: SquareCubeSubTrack) => {
        set({ activeSquareTrack: track, activeModule: 'squares_cubes', viewMode: 'practice' });
        get().startSession({ goalCount: 10, mode: 'standard' });
      },

      setActiveTableChartTab: (tab: TableChartTab) => {
        set({ activeTableChartTab: tab, viewMode: 'table_chart' });
      },

      startCustomDrill: (config: CustomDrillConfig) => {
        set({
          activeModule: 'custom_drill',
          customDrillConfig: config,
          targetMasteryTable: config.targetMasteryTable || null,
          tableMasteryAlert: null,
          isPlanActive: false,
          activeRepairCard: null,
          delayedReviewQueue: [],
          viewMode: 'practice',
          sessionConfig: {
            mode: 'standard',
            goalCount: config.goalCount || 25,
            timeLimitSeconds: config.timeLimitSeconds,
            isEndless: !config.goalCount && !config.timeLimitSeconds,
          },
          sessionAnswered: 0,
          sessionCorrect: 0,
          sessionStartTime: Date.now(),
          sessionResponseTimes: [],
          sessionSummary: null,
          isPaused: false,
        });
        get().loadNextQuestion();
      },

      startSingleTableMastery: (tableNum: number) => {
        const config: CustomDrillConfig = {
          id: `table_mastery_${tableNum}`,
          name: `Table ×${tableNum} Automaticity Sprint`,
          selectedTables: [tableNum],
          selectedSquareRanges: [],
          selectedCubeRanges: [],
          selectedArithmeticCombos: [],
          selectedExamSkills: [],
          operatorPreference: '×',
          timeLimitSeconds: 300,
          goalCount: 20,
          interleavePreviousLearned: true,
          targetMasteryTable: tableNum,
        };
        get().startCustomDrill(config);
      },

      advanceToNextTable: () => {
        const current = get().targetMasteryTable || get().activeTable || 12;
        const nextTable = current + 1;
        set({ tableMasteryAlert: null });
        get().startSingleTableMastery(nextTable);
      },

      dismissTableMasteryAlert: () => {
        set({ tableMasteryAlert: null });
      },

      setIsCustomDrillModalOpen: (open: boolean) => {
        set({ isCustomDrillModalOpen: open });
      },

      exportBrainMatrixJSON: () => {
        const state = get();
        const matrix: BrainMatrix = {
          schemaVersion: 1,
          userId: null,
          exportedAt: Date.now(),
          lastSyncedAt: Date.now(),
          learnerProfile: state.learnerProfile,
          factMemoryMap: state.factMemoryMap,
          techniqueMasteryMap: state.techniqueMasteryMap,
          progressMap: state.progressMap,
          overallStats: state.overallStats,
          customDrillPresets: state.customDrillConfig ? [state.customDrillConfig] : [],
          examTransferScores: state.examTransferScores,
        };
        return JSON.stringify(matrix, null, 2);
      },

      importBrainMatrixJSON: (jsonStr: string) => {
        try {
          const data = JSON.parse(jsonStr) as BrainMatrix;
          if (!data || typeof data !== 'object') {
            return { success: false, error: 'Invalid JSON payload' };
          }
          if (!data.schemaVersion || !data.learnerProfile) {
            return { success: false, error: 'Incompatible Brain Matrix schema' };
          }
          set({
            learnerProfile: data.learnerProfile,
            factMemoryMap: data.factMemoryMap || {},
            techniqueMasteryMap: data.techniqueMasteryMap || INITIAL_TECHNIQUE_MASTERY_MAP,
            progressMap: data.progressMap || {},
            overallStats: data.overallStats || initialOverallStats,
            examTransferScores: data.examTransferScores || null,
            customDrillConfig: data.customDrillPresets?.[0] || null,
          });
          return { success: true };
        } catch (err) {
          return { success: false, error: err instanceof Error ? err.message : 'Unknown JSON parse error' };
        }
      },

      recordTechniquePracticeResult: async (
        techniqueId: CalculationTechniqueId,
        isCorrect: boolean,
        latencyMs: number
      ) => {
        const lesson = TECHNIQUE_CURRICULUM[techniqueId];
        const title = lesson?.title || techniqueId;
        const updated = await storageService.recordTechniqueAttempt(
          techniqueId,
          title,
          isCorrect,
          latencyMs
        );
        set((state) => ({
          techniqueMasteryMap: {
            ...state.techniqueMasteryMap,
            [techniqueId]: updated,
          },
        }));
        return updated;
      },

      startSession: (config?: Partial<SessionDrillConfig>) => {
        const newConfig = { ...get().sessionConfig, ...config };
        set({
          sessionConfig: newConfig,
          workoutMode: config?.workoutMode || get().workoutMode || 'exercise',
          sessionAnswered: 0,
          sessionCorrect: 0,
          sessionStartTime: Date.now(),
          sessionResponseTimes: [],
          sessionSummary: null,
          isPaused: false,
          isPlanActive: false,
          activeRepairCard: null,
          delayedReviewQueue: [],
          showStrategy: false,
        });
        get().loadNextQuestion();
      },

      pauseSession: () => set({ isPaused: true }),
      resumeSession: () => set({ isPaused: false, questionStartTime: Date.now() }),

      endSession: () => {
        const state = get();
        if (state.sessionAnswered === 0) {
          set({ viewMode: 'dashboard' });
          return;
        }

        const totalSecs = Math.max(1, Math.round((Date.now() - state.sessionStartTime) / 1000));
        const cpm = calculateCPM(state.sessionCorrect, totalSecs);
        const accuracy = Math.round((state.sessionCorrect / state.sessionAnswered) * 100);
        const avgResponse =
          state.sessionResponseTimes.length > 0
            ? Math.round(
                state.sessionResponseTimes.reduce((a, b) => a + b, 0) /
                  state.sessionResponseTimes.length
              )
            : 0;

        const analysis = analyzeProgress(state.progressMap);
        const rec = getRecommendedNextDrill(
          state.progressMap,
          state.activeModule,
          state.activeAddSubLevel,
          state.activeTable
        );

        const summary: SessionSummary = {
          totalAnswered: state.sessionAnswered,
          correctCount: state.sessionCorrect,
          accuracy,
          avgResponseTimeMs: avgResponse,
          cpm,
          strongestSkill:
            state.activeModule === 'multiplication'
              ? `Table ${state.activeTable}`
              : state.activeModule === 'add_sub'
              ? `Level ${state.activeAddSubLevel}`
              : state.activeSquareTrack.replace('_', ' ').toUpperCase(),
          needsReviewSkills: analysis.decayedSkills
            .slice(0, 3)
            .map((s) => s.itemId.replace(/_/g, ' ')),
          recommendedNextDrill: rec,
        };

        set({ sessionSummary: summary });
      },

      restartCurrentSession: () => {
        const state = get();
        get().startSession({
          goalCount: state.sessionConfig.goalCount || 10,
          timeLimitSeconds: state.sessionConfig.timeLimitSeconds,
          mode: state.sessionConfig.mode,
        });
      },

      dismissSessionSummary: () => {
        set({ sessionSummary: null, viewMode: 'dashboard' });
      },

      loadNextQuestion: (forceMode?: 'standard' | 'targeted_refresh' | 'weak_spots') => {
        const state = get();

        // If in custom drill, NEVER allow plan blocks or other modules to intercept
        if (state.activeModule === 'custom_drill') {
          const q = getAdaptiveQuestion({
            module: 'custom_drill',
            activeAddSubLevel: state.activeAddSubLevel,
            activeTable: state.activeTable,
            activeSquareTrack: state.activeSquareTrack,
            progressMap: state.progressMap,
            mode: forceMode || state.sessionConfig.mode,
            tableMode: state.currentTableMode,
            customDrillConfig: state.customDrillConfig || undefined,
            targetMasteryTable: state.targetMasteryTable || undefined,
            factMemoryMap: state.factMemoryMap,
          });

          set({
            currentQuestion: q,
            inputBuffer: '',
            questionStartTime: Date.now(),
            isEvaluating: false,
            lastResult: null,
            lastAnswerSubmitted: null,
            lastCorrectAnswer: null,
            showStrategy: false,
            isPaused: false,
          });
          return;
        }

        // If practicing an active training plan block, load from the block
        if (state.isPlanActive && state.activeTrainingPlan) {
          const currentBlock = state.activeTrainingPlan.blocks[state.activeTrainingBlockIndex];
          if (currentBlock) {
            const q = getQuestionForTrainingBlock(currentBlock);
            set({
              currentQuestion: q,
              inputBuffer: '',
              questionStartTime: Date.now(),
              isEvaluating: false,
              lastResult: null,
              lastAnswerSubmitted: null,
              lastCorrectAnswer: null,
              showStrategy: false,
              isPaused: false,
            });
            return;
          }
        }

        // Tables 11-20 Bootcamp Adaptive Generation
        if (state.activeModule === 'tables_bootcamp') {
          const selectedTable = state.isAdaptiveBootcampActive
            ? selectAdaptiveBandTable(state.activeBootcampTable)
            : state.activeBootcampTable;
          const mult = Math.floor(Math.random() * 12) + 1;
          const q = generateTableModeQuestion(selectedTable, mult, state.currentTableMode);
          q.selectionReason = state.isAdaptiveBootcampActive
            ? `Adaptive Table ×${selectedTable} (${state.currentTableMode} mode)`
            : `Table ×${selectedTable} Bootcamp (${state.currentTableMode} mode)`;

          set({
            currentQuestion: q,
            inputBuffer: '',
            questionStartTime: Date.now(),
            isEvaluating: false,
            lastResult: null,
            lastAnswerSubmitted: null,
            lastCorrectAnswer: null,
            showStrategy: false,
            isPaused: false,
          });
          return;
        }

        // Exam Quant Calculation Drills
        if (state.activeModule === 'exam_quant') {
          const q = generateQuestionFromFact(`exam:${state.activeExamSkill}`);
          q.selectionReason = `RRB Quant Drill: ${state.activeExamSkill.replace('quant_', '').replace(/_/g, ' ')}`;

          set({
            currentQuestion: q,
            inputBuffer: '',
            questionStartTime: Date.now(),
            isEvaluating: false,
            lastResult: null,
            lastAnswerSubmitted: null,
            lastCorrectAnswer: null,
            showStrategy: false,
            isPaused: false,
          });
          return;
        }

        // Advanced Fact-Level Adaptive Selection for Multiplication & Squares/Cubes
        if (state.activeModule === 'multiplication' || state.activeModule === 'squares_cubes') {
          let candidates = getCandidateFactKeysForTarget(
            state.activeModule,
            state.activeTable,
            state.activeSquareTrack
          );

          // If in review mode, add overdue facts across the system
          if (state.learningMode === 'review') {
            const now = Date.now();
            const dueKeys = Object.values(state.factMemoryMap)
              .filter(
                (f) =>
                  f.factType === (state.activeModule === 'multiplication' ? 'multiplication' : 'square') ||
                  f.factType === 'cube'
              )
              .filter((f) => now >= f.nextReviewTimestamp || f.forgettingRisk > 0.4)
              .map((f) => f.factKey);
            if (dueKeys.length > 0) {
              candidates = Array.from(new Set([...dueKeys, ...candidates]));
            }
          }

          // If in repair mode, prioritize weak / error facts
          if (state.learningMode === 'repair') {
            const repairKeys = Object.values(state.factMemoryMap)
              .filter((f) => f.consecutiveErrors > 0 || f.masteryState === 'weak')
              .map((f) => f.factKey);
            if (repairKeys.length > 0) {
              candidates = Array.from(new Set([...repairKeys, ...candidates]));
            }
          }

          const selection = selectNextFact(
            candidates,
            state.factMemoryMap,
            state.recentAskedKeys,
            state.learnerProfile.fatigueState,
            state.delayedReviewQueue,
            state.sessionAnswered
          );

          // If consumed from delayedReviewQueue, remove it
          const updatedDelayedQueue = state.delayedReviewQueue.filter(
            (item) => item.factKey !== selection.factKey
          );

          const q = generateQuestionFromFact(selection.factKey);
          q.selectionReason = selection.selectionReason;
          if (state.learningMode === 'speed') {
            q.targetTimeSeconds = Math.max(1.0, Math.round(q.targetTimeSeconds * 0.75 * 10) / 10);
          }

          set({
            currentQuestion: q,
            inputBuffer: '',
            questionStartTime: Date.now(),
            isEvaluating: false,
            lastResult: null,
            lastAnswerSubmitted: null,
            lastCorrectAnswer: null,
            showStrategy: false,
            isPaused: false,
            delayedReviewQueue: updatedDelayedQueue,
            recentAskedKeys: [...state.recentAskedKeys.slice(-12), selection.factKey],
          });
          return;
        }

        const modeToUse = forceMode || state.sessionConfig.mode;
        const tableToUse = state.activeTable;

        const q = getAdaptiveQuestion({
          module: state.activeModule,
          activeAddSubLevel: state.activeAddSubLevel,
          activeTable: tableToUse,
          activeSquareTrack: state.activeSquareTrack,
          progressMap: state.progressMap,
          mode: modeToUse,
          tableMode: state.currentTableMode,
          examSubSkill: state.activeExamSkill,
          customDrillConfig: state.customDrillConfig || undefined,
          targetMasteryTable: state.targetMasteryTable || undefined,
          factMemoryMap: state.factMemoryMap,
        });
        if (!q.selectionReason) {
          q.selectionReason = 'Curriculum progression question';
        }

        set({
          currentQuestion: q,
          inputBuffer: '',
          questionStartTime: Date.now(),
          isEvaluating: false,
          lastResult: null,
          lastAnswerSubmitted: null,
          lastCorrectAnswer: null,
          showStrategy: false,
          isPaused: false,
        });
      },

      retrySimilarQuestion: () => {
        get().loadNextQuestion('weak_spots');
      },

      appendDigit: (digit: string) => {
        const { inputBuffer, isEvaluating, isPaused } = get();
        if (isEvaluating || isPaused) return;
        if (inputBuffer.replace('-', '').length >= 8) return;
        set({ inputBuffer: inputBuffer + digit });
      },

      toggleNegative: () => {
        const { inputBuffer, isEvaluating, isPaused } = get();
        if (isEvaluating || isPaused) return;
        if (inputBuffer.startsWith('-')) {
          set({ inputBuffer: inputBuffer.substring(1) });
        } else {
          set({ inputBuffer: '-' + inputBuffer });
        }
      },

      backspace: () => {
        const { inputBuffer, isEvaluating, isPaused } = get();
        if (isEvaluating || isPaused) return;
        set({ inputBuffer: inputBuffer.slice(0, -1) });
      },

      clearBuffer: () => {
        if (get().isEvaluating || get().isPaused) return;
        set({ inputBuffer: '' });
      },

      skipQuestion: () => {
        const state = get();
        if (state.isEvaluating || !state.currentQuestion || state.isPaused) return;

        soundEngine.playClick();
        const now = Date.now();
        const latencyMs = Math.max(120, now - state.questionStartTime);
        let updatedFactMemoryMap = state.factMemoryMap;
        let delayedReviewQueue = [...state.delayedReviewQueue];

        // Resolve fact key if question belongs to a tracked fact
        let factKey = state.currentQuestion.factKey;
        if (!factKey && state.currentQuestion.subTrack) {
          if (
            state.currentQuestion.subTrack.startsWith('mul:') ||
            state.currentQuestion.subTrack.startsWith('square:') ||
            state.currentQuestion.subTrack.startsWith('cube:')
          ) {
            factKey = state.currentQuestion.subTrack;
          }
        }

        if (factKey) {
          const currentFact = state.factMemoryMap[factKey] || createInitialFactMemoryState(factKey as FactKey);
          const updatedFact = updateFactMemoryStateWithAttempt(currentFact, {
            timestamp: now,
            userAnswer: -1,
            correctAnswer: state.currentQuestion.correctAnswer,
            isCorrect: false,
            latencyMs,
            usedHint: false,
            wasShownStrategy: true,
            isSkipped: true,
          });

          updatedFactMemoryMap = {
            ...state.factMemoryMap,
            [factKey]: updatedFact,
          };

          // Re-queue delayed review 4 questions later
          delayedReviewQueue = [
            ...delayedReviewQueue.filter((item) => item.factKey !== factKey),
            { factKey: factKey as FactKey, dueAtCount: state.sessionAnswered + 4 },
          ];
        }

        set({
          isEvaluating: true,
          lastResult: 'skipped',
          lastAnswerSubmitted: null,
          lastCorrectAnswer: state.currentQuestion.correctAnswer,
          showStrategy: false,
          streak: 0,
          factMemoryMap: updatedFactMemoryMap,
          delayedReviewQueue,
        });
      },

      submitAnswer: (overrideAnswer?: number) => {
        const state = get();
        if (state.isEvaluating || !state.currentQuestion || state.isPaused) return;
        if (!state.sessionConfig.isEndless && state.sessionAnswered >= state.sessionConfig.goalCount) return;

        const isNumOverride = typeof overrideAnswer === 'number' && !isNaN(overrideAnswer);
        const trimmed = state.inputBuffer.trim();
        if (!isNumOverride && (!trimmed || trimmed === '-')) return;

        const userAnswer = isNumOverride ? overrideAnswer : parseInt(trimmed, 10);
        if (isNaN(userAnswer)) return;

        const responseTimeMs = Math.max(120, Date.now() - state.questionStartTime);
        const isCorrect = userAnswer === state.currentQuestion.correctAnswer;
        const targetSeconds = state.currentQuestion.targetTimeSeconds;

        // Progress Tracking Key
        let progressKey = '';
        if (state.activeModule === 'tables_bootcamp') {
          progressKey = `table_${state.activeBootcampTable}`;
        } else if (state.activeModule === 'exam_quant') {
          progressKey = state.activeExamSkill;
        } else if (state.activeModule === 'fractions_percentages') {
          progressKey = 'fraction_percentage_equiv';
        } else if (state.activeModule === 'multiplication') {
          progressKey = `table_${state.activeTable}`;
        } else if (state.activeModule === 'add_sub') {
          progressKey = `add_sub_level_${state.activeAddSubLevel}`;
        } else {
          progressKey = `sq_cube_${state.activeSquareTrack}`;
        }

        const existing: UserProgressItem = state.progressMap[progressKey] || {
          itemId: progressKey,
          module: state.activeModule,
          totalAttempts: 0,
          correctCount: 0,
          streak: 0,
          bestStreak: 0,
          responseTimesMs: [],
          medianResponseTimeMs: 0,
          recentAccuracy: 0,
          lastPracticed: Date.now(),
          masteryStatus: 'untrained',
          masteryScore: 0,
        };

        const updatedAttempts = existing.totalAttempts + 1;
        const updatedCorrect = existing.correctCount + (isCorrect ? 1 : 0);
        const updatedStreak = isCorrect ? existing.streak + 1 : 0;
        const updatedTimes = [...existing.responseTimesMs.slice(-19), responseTimeMs];
        const medianMs = calculateMedian(updatedTimes);

        const updatedItem: UserProgressItem = {
          ...existing,
          totalAttempts: updatedAttempts,
          correctCount: updatedCorrect,
          streak: updatedStreak,
          bestStreak: Math.max(existing.bestStreak, updatedStreak),
          responseTimesMs: updatedTimes,
          medianResponseTimeMs: medianMs,
          recentAccuracy: Math.round((updatedCorrect / updatedAttempts) * 100),
          lastPracticed: Date.now(),
          lastResult: isCorrect ? 'correct' : 'incorrect',
        };

        const { status: newStatus, score: newScore } = evaluateMasteryStatus(
          updatedItem,
          targetSeconds
        );
        updatedItem.masteryStatus = newStatus;
        updatedItem.masteryScore = newScore;

        const newStreak = isCorrect ? state.streak + 1 : 0;
        const newBestStreak = Math.max(state.bestStreak, newStreak);

        // Sound triggers
        if (isCorrect) {
          if (newStreak > 0 && newStreak % 5 === 0) {
            soundEngine.playStreak(newStreak);
          } else {
            soundEngine.playSuccess();
          }
        } else {
          soundEngine.playError();
        }

        // Calendar-Day Daily Streak Calculation
        const streakResult = updateDailyStreak(
          state.overallStats.lastActiveDate,
          state.overallStats.dailyActiveStreak
        );

        const newOverall: OverallStats = {
          totalCalculations: state.overallStats.totalCalculations + 1,
          totalCorrect: state.overallStats.totalCorrect + (isCorrect ? 1 : 0),
          currentStreak: newStreak,
          bestStreak: Math.max(state.overallStats.bestStreak, newStreak),
          lastActiveDate: streakResult.lastActiveDate,
          dailyActiveStreak: streakResult.dailyActiveStreak,
          totalTimeSpentSeconds:
            state.overallStats.totalTimeSpentSeconds + Math.round(responseTimeMs / 1000),
        };

        // Fact-Level Memory Model Update
        let factKey: FactKey | null = null;
        if (state.currentQuestion.factKey) {
          factKey = state.currentQuestion.factKey as FactKey;
        } else if (state.activeModule === 'multiplication' || state.activeModule === 'tables_bootcamp' || (state.activeModule === 'custom_drill' && state.currentQuestion.operator === '×')) {
          factKey = `mul:${state.currentQuestion.operandA}:${state.currentQuestion.operandB}`;
        } else if (state.activeModule === 'squares_cubes' || (state.activeModule === 'custom_drill' && (state.currentQuestion.operator === '^2' || state.currentQuestion.operator === '^3'))) {
          factKey = state.currentQuestion.operator === '^3'
            ? `cube:${state.currentQuestion.operandA}`
            : `square:${state.currentQuestion.operandA}`;
        } else if (state.activeModule === 'exam_quant') {
          factKey = `exam:${state.activeExamSkill}`;
        } else if (state.activeModule === 'fractions_percentages') {
          factKey = 'frac_pct:table';
        }

        let updatedFactMap = state.factMemoryMap;
        let activeRepairCard: RepairCard | null = state.activeRepairCard;
        let updatedDelayedQueue = state.delayedReviewQueue;

        if (factKey) {
          const existingFact = state.factMemoryMap[factKey] || createInitialFactMemoryState(factKey);
          const errorType = !isCorrect
            ? detectErrorPattern(factKey, userAnswer, state.currentQuestion.correctAnswer, responseTimeMs)
            : undefined;

          const factAttempt: FactAttempt = {
            timestamp: Date.now(),
            userAnswer,
            correctAnswer: state.currentQuestion.correctAnswer,
            isCorrect,
            latencyMs: responseTimeMs,
            usedHint: state.showStrategy,
            wasShownStrategy: state.showStrategy || state.learningMode === 'learn',
            errorType,
          };

          const updatedFact = updateFactMemoryStateWithAttempt(existingFact, factAttempt);
          updatedFactMap = {
            ...state.factMemoryMap,
            [factKey]: updatedFact,
          };

          if (!isCorrect) {
            const card = generateRepairCard(factKey, userAnswer, responseTimeMs);
            activeRepairCard = card;
            const scheduled = scheduleWeakFactReview(factKey, state.sessionAnswered);
            updatedDelayedQueue = [
              ...state.delayedReviewQueue.filter((q) => q.factKey !== factKey),
              scheduled,
            ];
          }
        }

        // Update Learner Model & Skill Estimate
        const activeTableNum =
          state.activeModule === 'tables_bootcamp'
            ? state.activeBootcampTable
            : state.activeTable;

        const activeDim = resolveActiveDimension(
          state.activeModule,
          state.activeAddSubLevel,
          activeTableNum,
          state.activeSquareTrack,
          state.activeExamSkill
        );

        const prevSkill = state.learnerProfile.skills[activeDim] || createDefaultSkillEstimate(activeDim);
        const updatedSkill = updateSkillEstimate(
          prevSkill,
          isCorrect,
          responseTimeMs,
          targetSeconds * 1000
        );

        // Synchronize derived granular facts with high-level profile
        const derivedSkills = deriveAggregateSkillsFromFacts(updatedFactMap);

        // Check for cognitive fatigue
        const consecutiveErrors = isCorrect ? 0 : state.learnerProfile.fatigueState.consecutiveErrors + 1;
        const fatigue = detectFatigue(
          [...state.sessionResponseTimes, responseTimeMs],
          prevSkill.medianLatencyMs || 2500,
          consecutiveErrors
        );

        let updatedPlan = state.activeTrainingPlan;
        if (updatedPlan && (fatigue.level === 'mild_fatigue' || fatigue.level === 'high_fatigue')) {
          updatedPlan = adjustPlanForFatigue(updatedPlan, fatigue);
        }

        const nextAnswered = state.sessionAnswered + 1;
        const nextCorrect = state.sessionCorrect + (isCorrect ? 1 : 0);
        const nextTimes = [...state.sessionResponseTimes, responseTimeMs];

        // Handle Active Training Plan block completion
        if (state.isPlanActive && updatedPlan) {
          const currentBlock = updatedPlan.blocks[state.activeTrainingBlockIndex];
          if (currentBlock) {
            const blockCompletedCount = currentBlock.completedCount + 1;
            const isBlockDone = blockCompletedCount >= currentBlock.targetCount;
            const newBlocks = [...updatedPlan.blocks];
            newBlocks[state.activeTrainingBlockIndex] = {
              ...currentBlock,
              completedCount: blockCompletedCount,
              status: isBlockDone ? 'completed' : 'active',
            };

            const allDone = newBlocks.every((b) => b.status === 'completed');
            updatedPlan = {
              ...updatedPlan,
              blocks: newBlocks,
              isCompleted: allDone,
            };
          }
        }

        // Check single-table automaticity
        let tableMasteryAlert = state.tableMasteryAlert;
        const targetTable = state.targetMasteryTable || (state.activeModule === 'custom_drill' && state.customDrillConfig?.targetMasteryTable ? state.customDrillConfig.targetMasteryTable : null);
        if (targetTable && !tableMasteryAlert) {
          const autoCheck = checkTableAutomaticity(targetTable, updatedFactMap);
          if (autoCheck.isMastered) {
            tableMasteryAlert = {
              table: targetTable,
              nextTable: targetTable + 1,
              accuracy: autoCheck.accuracy,
              medianLatencyMs: autoCheck.medianLatencyMs,
            };
          }
        }

        // Update technique mastery map
        let updatedTechniqueMap = { ...state.techniqueMasteryMap };
        const techId = resolveTechniqueIdFromStrategy(state.currentQuestion.strategyId);
        if (techId && updatedTechniqueMap[techId]) {
          const prevTech = updatedTechniqueMap[techId];
          const consecutive = isCorrect ? prevTech.consecutiveCorrect + 1 : 0;
          const exposures = prevTech.totalExposures + 1;
          const avgLatency = prevTech.averageLatencyMs === 0 ? responseTimeMs : Math.round((prevTech.averageLatencyMs * prevTech.totalExposures + responseTimeMs) / exposures);
          const evalResult = evaluateTechniqueMastery(techId, consecutive, avgLatency, exposures);
          updatedTechniqueMap[techId] = {
            ...prevTech,
            consecutiveCorrect: consecutive,
            totalExposures: exposures,
            averageLatencyMs: avgLatency,
            isMastered: evalResult.isMastered,
            masteredAt: evalResult.isMastered && !prevTech.isMastered ? Date.now() : prevTech.masteredAt,
          };
        }

        // 1000-Level XP Calculation
        const pointsEarned = calculatePointsEarned({
          isCorrect,
          responseTimeMs,
          module: state.activeModule,
          streak: newStreak,
          table: activeTableNum,
          level: state.activeAddSubLevel,
        });

        // XP Calculation:
        // Exercise Mode = 100% normal XP (examination conditions)
        // Practice Mode = 1/20th of normal XP (study mode with hints accessible)
        const effectiveXP = !isCorrect
          ? 0
          : state.workoutMode === 'practice'
          ? Math.max(1, Math.round(pointsEarned.totalXP / 20))
          : pointsEarned.totalXP;

        const prevXP = state.xp || 0;
        const nextXP = prevXP + effectiveXP;
        const prevLevel = state.level || 1;
        const nextLevel = getLevelFromXP(nextXP);
        const leveledUp = nextLevel > prevLevel;

        if (leveledUp) {
          soundEngine.playStreak(10);
        }

        // Mark pending AI sync if practiced during cooldown or offline
        get().markPendingAISync();
        const nextBatchCount = (state.batchAnswerCount || 0) + 1;

        const todayKey = streakResult.lastActiveDate || new Date().toISOString().split('T')[0];
        const nextDailyActivity = { ...(state.dailyActivityMap || {}) };
        nextDailyActivity[todayKey] = (nextDailyActivity[todayKey] || 0) + 1;

        set({
          isEvaluating: true,
          lastResult: isCorrect ? 'correct' : 'incorrect',
          lastAnswerSubmitted: userAnswer,
          lastCorrectAnswer: state.currentQuestion.correctAnswer,
          sessionAnswered: nextAnswered,
          sessionCorrect: nextCorrect,
          sessionResponseTimes: nextTimes,
          streak: newStreak,
          bestStreak: newBestStreak,
          xp: nextXP,
          level: nextLevel,
          recentPointsEarned: effectiveXP,
          newLevelUnlocked: leveledUp ? nextLevel : state.newLevelUnlocked,
          showStrategy: false,
          progressMap: {
            ...state.progressMap,
            [progressKey]: updatedItem,
          },
          dailyActivityMap: nextDailyActivity,
          factMemoryMap: updatedFactMap,
          techniqueMasteryMap: updatedTechniqueMap,
          tableMasteryAlert,
          activeRepairCard,
          delayedReviewQueue: updatedDelayedQueue,
          batchAnswerCount: nextBatchCount >= 10 ? 0 : nextBatchCount,
          overallStats: newOverall,
          learnerProfile: {
            ...state.learnerProfile,
            updatedAt: Date.now(),
            skills: {
              ...state.learnerProfile.skills,
              ...derivedSkills,
              [activeDim]: updatedSkill,
            },
            fatigueState: fatigue,
          },
          activeTrainingPlan: updatedPlan,
        });

        const { currentUser } = get();
        if (currentUser) {
          syncEngine.debouncedSync(currentUser.id, get());
        }

        // If in plan mode and current block is done, advance block
        if (state.isPlanActive && updatedPlan) {
          const block = updatedPlan.blocks[state.activeTrainingBlockIndex];
          if (block && block.status === 'completed') {
            setTimeout(() => {
              get().advanceTrainingBlock();
            }, isCorrect ? 400 : 1500);
            return;
          }
        }

        // Check if session goal reached
        if (!state.sessionConfig.isEndless && nextAnswered >= state.sessionConfig.goalCount) {
          setTimeout(() => {
            get().endSession();
          }, isCorrect ? 400 : 1500);
          return;
        }

        // If correct, advance automatically (in learn mode give slight pause to review)
        if (isCorrect) {
          setTimeout(() => {
            get().loadNextQuestion();
          }, state.learningMode === 'learn' ? 600 : 350);
        }
      },

      toggleStrategy: (force?: boolean) => {
        const state = get();
        // In Exercise Mode (examination), hints and strategy guides are strictly disabled
        if (state.workoutMode === 'exercise') {
          set({ showStrategy: false });
          return;
        }
        set((s) => ({ showStrategy: force !== undefined ? force : !s.showStrategy }));
      },

      toggleSound: () => {
        const nextState = !get().soundEnabled;
        soundEngine.setEnabled(nextState);
        set({ soundEnabled: nextState });
      },

      toggleReducedMotion: () => {
        set((s) => ({ reducedMotion: !s.reducedMotion }));
      },

      setLocale: (locale: SupportedLocale) => {
        set({ locale });
      },

      setHasCompletedLanguageOnboarding: (hasCompletedLanguageOnboarding: boolean) => {
        set({ hasCompletedLanguageOnboarding });
      },

      setIsSettingsModalOpen: (isSettingsModalOpen: boolean) => {
        set({ isSettingsModalOpen });
      },

      setThemeConfig: (config: Partial<ThemeConfig>) => {
        const current = get().themeConfig || initialThemeConfig;
        const updated = { ...current, ...config };
        set({ themeConfig: updated });

        if (typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-theme-font', updated.fontFamily);
          document.documentElement.setAttribute('data-theme-accent', updated.accentColor);
          document.documentElement.setAttribute('data-theme-size', updated.fontSize);
        }

        if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
          try {
            const ch = new BroadcastChannel('mentalis_theme_sync');
            ch.postMessage({ type: 'THEME_SYNC', payload: updated });
            ch.close();
          } catch {}
        }

        get().triggerSync();
      },

      getCognitiveTrainingState: () => {
        const { learnerProfile, factMemoryMap, sessionResponseTimes, overallStats } = get();
        return evaluateCognitiveState(
          learnerProfile,
          factMemoryMap,
          sessionResponseTimes,
          0,
          overallStats
        );
      },

      setLearningMode: (mode: LearningMode) => {
        set({ learningMode: mode });
        get().loadNextQuestion();
      },

      setWorkoutMode: (mode: WorkoutMode) => {
        set({
          workoutMode: mode,
          showStrategy: mode === 'exercise' ? false : get().showStrategy,
        });
      },

      dismissRepairCard: () => {
        set({ activeRepairCard: null });
      },

      practiceFact: (factKey: FactKey, mode: LearningMode = 'learn') => {
        const parsed = parseFactKey(factKey);
        if (parsed.type === 'multiplication') {
          set({
            activeModule: 'multiplication',
            activeTable: parsed.operandA,
            learningMode: mode,
            viewMode: 'practice',
            activeRepairCard: null,
          });
        } else if (parsed.type === 'square' || parsed.type === 'cube') {
          set({
            activeModule: 'squares_cubes',
            learningMode: mode,
            viewMode: 'practice',
            activeRepairCard: null,
          });
        }
        const q = generateQuestionFromFact(factKey);
        set({
          currentQuestion: q,
          inputBuffer: '',
          questionStartTime: Date.now(),
          isEvaluating: false,
          lastResult: null,
          lastAnswerSubmitted: null,
          lastCorrectAnswer: null,
          showStrategy: mode === 'learn',
          isPaused: false,
        });
      },

      toggleTimerVisibility: () => {
        set((s) => ({ timerVisible: !s.timerVisible }));
      },

      updateAnzanConfig: (config: Partial<AnzanConfig>) => {
        set((s) => ({ anzanConfig: { ...s.anzanConfig, ...config } }));
      },

      recordAnzanRun: (runData: Omit<AnzanRecord, 'id' | 'timestamp'>) => {
        const state = get();
        const record: AnzanRecord = {
          ...runData,
          id: `anzan_run_${Date.now()}`,
          timestamp: Date.now(),
        };

        const newRuns = state.anzanStats.totalRuns + 1;
        const newCorrect = state.anzanStats.totalCorrect + (record.isCorrect ? 1 : 0);
        const newStreak = record.isCorrect ? state.anzanStats.currentStreak + 1 : 0;
        const newBestStreak = Math.max(state.anzanStats.bestStreak, newStreak);

        // Update working memory estimate in learner model
        const prevAnzan = state.learnerProfile.skills['anzan_stream'];
        const updatedAnzan = updateSkillEstimate(
          prevAnzan,
          record.isCorrect,
          record.durationMs,
          6000
        );

        set({
          anzanStats: {
            totalRuns: newRuns,
            totalCorrect: newCorrect,
            currentStreak: newStreak,
            bestStreak: newBestStreak,
            records: [record, ...state.anzanStats.records.slice(0, 49)],
          },
          learnerProfile: {
            ...state.learnerProfile,
            updatedAt: Date.now(),
            skills: {
              ...state.learnerProfile.skills,
              anzan_stream: updatedAnzan,
            },
          },
        });
      },

      resetProgress: () => {
        set({
          progressMap: {},
          dailyActivityMap: {},
          factMemoryMap: {},
          learningMode: 'recall',
          activeRepairCard: null,
          delayedReviewQueue: [],
          recentAskedKeys: [],
          batchAnswerCount: 0,
          overallStats: initialOverallStats,
          anzanStats: initialAnzanStats,
          streak: 0,
          bestStreak: 0,
          sessionAnswered: 0,
          sessionCorrect: 0,
          learnerProfile: createDefaultLearnerProfile(),
          activeAssessment: null,
          activeTrainingPlan: null,
          aiCoachInsight: null,
        });
      },

      // -------------------------------------------------------------
      // Onboarding Assessment Actions
      // -------------------------------------------------------------
      startAssessment: () => {
        const session = createAssessmentSession();
        set({
          activeAssessment: session,
          assessmentInputBuffer: '',
          assessmentQuestionStartTime: Date.now(),
          viewMode: 'assessment',
        });
      },

      appendAssessmentDigit: (digit: string) => {
        const { assessmentInputBuffer, activeAssessment } = get();
        if (!activeAssessment || activeAssessment.status !== 'in_progress' || activeAssessment.isPaused) return;
        if (assessmentInputBuffer.replace('-', '').length >= 8) return;
        set({ assessmentInputBuffer: assessmentInputBuffer + digit });
      },

      toggleAssessmentNegative: () => {
        const { assessmentInputBuffer, activeAssessment } = get();
        if (!activeAssessment || activeAssessment.status !== 'in_progress' || activeAssessment.isPaused) return;
        if (assessmentInputBuffer.startsWith('-')) {
          set({ assessmentInputBuffer: assessmentInputBuffer.substring(1) });
        } else {
          set({ assessmentInputBuffer: '-' + assessmentInputBuffer });
        }
      },

      backspaceAssessment: () => {
        const { assessmentInputBuffer, activeAssessment } = get();
        if (!activeAssessment || activeAssessment.status !== 'in_progress' || activeAssessment.isPaused) return;
        set({ assessmentInputBuffer: assessmentInputBuffer.slice(0, -1) });
      },

      clearAssessmentBuffer: () => {
        set({ assessmentInputBuffer: '' });
      },

      submitAssessmentAnswer: () => {
        const { activeAssessment, assessmentInputBuffer, assessmentQuestionStartTime, learnerProfile, factMemoryMap } = get();
        if (!activeAssessment || activeAssessment.status !== 'in_progress' || activeAssessment.isPaused) return;

        const trimmed = assessmentInputBuffer.trim();
        if (!trimmed || trimmed === '-') return;

        const val = parseInt(trimmed, 10);
        if (isNaN(val)) return;

        const now = Date.now();
        const latencyMs = Math.max(200, now - (assessmentQuestionStartTime || now));
        const result = recordAssessmentAnswer(activeAssessment, val, latencyMs, learnerProfile);

        if (result.isCorrect) {
          soundEngine.playSuccess();
        } else {
          soundEngine.playError();
        }

        let mergedFactMemory = { ...factMemoryMap };
        if (result.initialFactMemoryMap) {
          mergedFactMemory = {
            ...mergedFactMemory,
            ...result.initialFactMemoryMap,
          };
        }

        set({
          activeAssessment: result.updatedSession,
          learnerProfile: result.updatedProfile,
          assessmentInputBuffer: '',
          assessmentQuestionStartTime: Date.now(),
          factMemoryMap: mergedFactMemory,
        });

        // Automatically generate daily plan once assessment completes
        if (result.isCompleted) {
          get().generateDailyPlan();
        }
      },

      skipAssessmentQuestion: () => {
        const { activeAssessment, learnerProfile, factMemoryMap } = get();
        if (!activeAssessment || activeAssessment.status !== 'in_progress' || activeAssessment.isPaused) return;

        soundEngine.playClick();
        const result = recordAssessmentSkip(activeAssessment, learnerProfile);

        let mergedFactMemory = { ...factMemoryMap };
        if (result.initialFactMemoryMap) {
          mergedFactMemory = {
            ...mergedFactMemory,
            ...result.initialFactMemoryMap,
          };
        }

        set({
          activeAssessment: result.updatedSession,
          learnerProfile: result.updatedProfile,
          assessmentInputBuffer: '',
          assessmentQuestionStartTime: Date.now(),
          factMemoryMap: mergedFactMemory,
        });

        if (result.isCompleted) {
          get().generateDailyPlan();
        }
      },

      skipAssessment: () => {
        const { activeAssessment } = get();
        if (!activeAssessment) return;

        const updatedSession: AssessmentSession = {
          ...activeAssessment,
          status: 'skipped',
          completedAt: Date.now(),
        };

        set({
          activeAssessment: updatedSession,
          viewMode: 'dashboard',
        });

        get().generateDailyPlan();
      },

      pauseAssessment: () => {
        const { activeAssessment } = get();
        if (!activeAssessment || activeAssessment.status !== 'in_progress' || activeAssessment.isPaused) return;
        set({
          activeAssessment: {
            ...activeAssessment,
            isPaused: true,
            pausedAt: Date.now(),
          },
        });
      },

      resumeAssessment: () => {
        const { activeAssessment, assessmentQuestionStartTime } = get();
        if (!activeAssessment || !activeAssessment.isPaused) return;
        const now = Date.now();
        const pausedMs = activeAssessment.pausedAt ? now - activeAssessment.pausedAt : 0;
        set({
          activeAssessment: {
            ...activeAssessment,
            isPaused: false,
            pausedAt: undefined,
            totalPausedTimeMs: (activeAssessment.totalPausedTimeMs || 0) + pausedMs,
          },
          // Shift question start time forward by paused duration to keep latency accurate
          assessmentQuestionStartTime: assessmentQuestionStartTime + pausedMs,
        });
      },

      // -------------------------------------------------------------
      // Training Plan & AI Coach Actions
      // -------------------------------------------------------------
      generateDailyPlan: (requestedMinutes?: number) => {
        const { learnerProfile } = get();
        const plan = generateDailyTrainingPlan(
          learnerProfile,
          requestedMinutes || learnerProfile.preferredDailyMinutes
        );
        set({
          activeTrainingPlan: plan,
          activeTrainingBlockIndex: 0,
          isPlanActive: false,
        });
      },

      startTrainingBlock: (blockIndex: number) => {
        const state = get();
        if (!state.activeTrainingPlan) return;

        const block = state.activeTrainingPlan.blocks[blockIndex];
        if (!block) return;

        const drill = getDrillById(block.drillId);
        const moduleId = drill?.module || 'add_sub';

        // Configure active module targets
        if (drill?.params.addSubLevel) {
          set({ activeAddSubLevel: drill.params.addSubLevel, activeModule: 'add_sub' });
        } else if (drill?.params.table) {
          set({ activeTable: drill.params.table, activeModule: 'multiplication' });
        } else if (drill?.params.squareTrack) {
          set({ activeSquareTrack: drill.params.squareTrack, activeModule: 'squares_cubes' });
        }

        const updatedBlocks = [...state.activeTrainingPlan.blocks];
        updatedBlocks[blockIndex] = {
          ...block,
          status: 'active',
        };

        set({
          activeTrainingBlockIndex: blockIndex,
          isPlanActive: true,
          activeTrainingPlan: {
            ...state.activeTrainingPlan,
            blocks: updatedBlocks,
          },
          sessionConfig: {
            goalCount: block.targetCount,
            isEndless: false,
            mode: 'standard',
          },
          sessionAnswered: block.completedCount,
          sessionCorrect: 0,
          sessionResponseTimes: [],
          viewMode: moduleId === 'working_memory' ? 'anzan' : 'practice',
        });

        get().loadNextQuestion();
      },

      advanceTrainingBlock: () => {
        const state = get();
        if (!state.activeTrainingPlan) return;

        const nextIndex = state.activeTrainingBlockIndex + 1;
        if (nextIndex < state.activeTrainingPlan.blocks.length) {
          get().startTrainingBlock(nextIndex);
        } else {
          // Completed all blocks in plan
          soundEngine.playStreak(20);
          set({
            isPlanActive: false,
            activeTrainingPlan: {
              ...state.activeTrainingPlan,
              isCompleted: true,
            },
            viewMode: 'dashboard',
          });
        }
      },

      cancelActivePlan: () => {
        set({ isPlanActive: false });
      },

      requestAICoachFeedback: async (_force: boolean = false) => {
        const state = get();
        if (state.isLoadingAiCoach) return;

        set({ isLoadingAiCoach: true });

        try {
          const insight = consultLocalAdaptiveCoach(
            state.learnerProfile,
            state.factMemoryMap,
            state.learnerProfile.preferredDailyMinutes
          );

          const now = Date.now();
          set({
            aiCoachInsight: insight,
            aiCoachState: {
              ...state.aiCoachState,
              lastSuccessfulRequestAt: now,
              nextEligibleRequestAt: now,
              providerStatus: 'ready',
              lastErrorType: null,
              retryAfterSeconds: null,
              pendingSync: false,
              lastAiLesson: insight.groqResponse || null,
              planSource: 'offline',
            },
          });
        } catch (err) {
          const errorMsg = err instanceof Error ? err.message : String(err);
          set({
            aiCoachState: {
              ...state.aiCoachState,
              providerStatus: 'ready',
              lastErrorType: errorMsg,
              planSource: 'offline',
            },
          });
        } finally {
          set({ isLoadingAiCoach: false });
        }
      },

      setAICooldownMinutes: (minutes: number) => {
        const clamped = Math.max(15, Math.min(30, minutes));
        set((s) => ({
          aiCoachState: {
            ...s.aiCoachState,
            cooldownMinutes: clamped,
          },
        }));
      },

      markPendingAISync: () => {
        const state = get();
        const now = Date.now();
        if (now < state.aiCoachState.nextEligibleRequestAt || state.aiCoachState.providerStatus !== 'ready') {
          set((s) => ({
            aiCoachState: {
              ...s.aiCoachState,
              pendingSync: true,
            },
          }));
        }
      },

      toggleAICoaching: () => {
        set((s) => ({ aiCoachingEnabled: !s.aiCoachingEnabled }));
      },

      dismissAICoachInsight: () => {
        set({ aiCoachInsight: null });
      },

      setAuthModalOpen: (open: boolean) => set({ isAuthModalOpen: open }),

      setAuthUser: (user: any) => {
        syncEngine.setUserId(user ? user.id : null);
        set({ currentUser: user });
      },

      setSyncStatus: (status: SyncStatus, error?: string) => {
        set({ syncStatus: status, syncError: error || null });
      },

      initializeAuthAndSync: async () => {
        syncEngine.subscribe((status, error) => {
          set({ syncStatus: status, syncError: error || null });
        });

        // Instant cross-tab sync receiver
        if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
          try {
            const avatarBc = new BroadcastChannel('mentalis_avatar_sync');
            avatarBc.onmessage = (event) => {
              if (event.data?.type === 'AVATAR_EQUIPPED') {
                const cur = get();
                const updates: any = {};
                if (cur.avatarType !== event.data.avatarType) updates.avatarType = event.data.avatarType;
                if (cur.selectedBadgeLevel !== event.data.selectedBadgeLevel) updates.selectedBadgeLevel = event.data.selectedBadgeLevel;
                if (cur.selectedMasteryBadgeId !== event.data.selectedMasteryBadgeId) updates.selectedMasteryBadgeId = event.data.selectedMasteryBadgeId;
                if (Object.keys(updates).length > 0) {
                  set(updates);
                }
              }
            };
          } catch {
            // ignore
          }
        }

        const syncUser = async (user: any) => {
          if (!user) return;
          const googleFullName = user.user_metadata?.full_name
            || user.user_metadata?.name
            || (user.user_metadata?.given_name
                ? `${user.user_metadata.given_name} ${user.user_metadata?.family_name || ''}`.trim()
                : '');
          const cleanGoogleName = (googleFullName && googleFullName.toLowerCase() !== 'unknown' && googleFullName.trim().length > 0)
            ? googleFullName.trim()
            : 'Mentalist';

          const emailPrefix = user.email?.split('@')[0];
          const isEmailLike = (name?: string) =>
            !name ||
            name.toLowerCase() === 'unknown' ||
            name.toLowerCase() === 'learner' ||
            (emailPrefix && name.toLowerCase() === emailPrefix.toLowerCase());

          const prevDisplayName = get().currentUser?.displayName;
          const initialDisplayName = (prevDisplayName && !isEmailLike(prevDisplayName))
            ? prevDisplayName
            : cleanGoogleName;

          const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture || null;

          const authUser = {
            id: user.id,
            email: user.email,
            displayName: initialDisplayName,
            avatarUrl,
          };
          get().setAuthUser(authUser);

          const { hydratedState } = await syncEngine.initialSyncOnAuth(user.id, get(), {
            displayName: initialDisplayName,
            avatarUrl,
          });
          if (hydratedState) {
            set(hydratedState);
          }

          // Ensure primary user or insanrupesh preserves username 'boss'
          const curU = get().username;
          if (user.email?.toLowerCase().includes('insanrupesh') || user.id === 'e509a080-f745-405b-a9f8-663fc850ca12') {
            if (!curU || curU.toLowerCase() !== 'boss') {
              set({ username: 'boss' });
            }
          }

          let currentState = get();

          // 1. Retro-credit XP if user has solved calculations but 0 XP
          const totalCalcs = currentState.overallStats?.totalCalculations || 0;
          if ((!currentState.xp || currentState.xp === 0) && totalCalcs > 0) {
            const retroXP = totalCalcs * 25;
            const newLevel = getLevelFromXP(retroXP);
            set({ xp: retroXP, level: newLevel });
            currentState = get();
            get().triggerSync();
          }

          // 2. Ensure default username is assigned if missing (safely checks DB first)
          if (!currentState.username) {
            const defUser = await socialEngine.generateDefaultUsername(
              currentState.currentUser?.displayName || cleanGoogleName,
              user.id
            );
            if (defUser) {
              set({ username: defUser });
              currentState = get();
              get().triggerSync();
            }
          }

          // Realtime Presence Tracking
          presenceEngine.trackUser({
            id: user.id,
            username: currentState.username,
            displayName: currentState.currentUser?.displayName || cleanGoogleName,
            avatarUrl,
            avatarType: currentState.avatarType,
            level: currentState.level,
          });

          // Clean up any previous profile realtime listener before re-subscribing
          if (profileRealtimeUnsub) {
            profileRealtimeUnsub();
            profileRealtimeUnsub = null;
          }

          // Live database listener on public.profiles for dynamic cross-device sync
          profileRealtimeUnsub = syncEngine.subscribeToProfileChanges(user.id, (updatedProfile) => {
            if (!updatedProfile) return;
            const current = get();
            const newAvatarType = updatedProfile.avatar_type || 'google';
            const newBadgeLevel = updatedProfile.selected_badge_level || 1;
            const newMasteryId = newAvatarType === 'mastery' ? updatedProfile.equipped_badge_id : null;
            const newLevel = updatedProfile.level || current.level;
            const newXP = updatedProfile.xp ?? current.xp;
            const newDisplayName = updatedProfile.display_name;
            const newUsername = updatedProfile.username;

            const updates: any = {};
            if (current.avatarType !== newAvatarType) updates.avatarType = newAvatarType;
            if (current.selectedBadgeLevel !== newBadgeLevel) updates.selectedBadgeLevel = newBadgeLevel;
            if (current.selectedMasteryBadgeId !== newMasteryId) updates.selectedMasteryBadgeId = newMasteryId;
            if (current.level !== newLevel) updates.level = newLevel;
            if (current.xp !== newXP) updates.xp = newXP;
            if (newUsername && current.username !== newUsername) updates.username = newUsername;
            if (newDisplayName && current.currentUser && current.currentUser.displayName !== newDisplayName) {
              updates.currentUser = {
                ...current.currentUser,
                displayName: newDisplayName,
              };
            }

            if (Object.keys(updates).length > 0) {
              set(updates);
              const refreshed = get();
              if (refreshed.currentUser) {
                presenceEngine.trackUser({
                  id: refreshed.currentUser.id,
                  username: refreshed.username,
                  displayName: refreshed.currentUser.displayName,
                  avatarUrl: refreshed.currentUser.avatarUrl,
                  avatarType: refreshed.avatarType,
                  level: refreshed.level,
                });
              }
            }
          });
        };

        try {
          const session = await getCurrentSession();
          if (session?.user) {
            await syncUser(session.user);
          } else {
            const supabase = getSupabase();
            let refreshedSession: any = null;
            if (supabase) {
              const { data: refData } = await supabase.auth.refreshSession();
              refreshedSession = refData?.session;
            }
            if (refreshedSession?.user) {
              await syncUser(refreshedSession.user);
            } else {
              const user = await getCurrentUser();
              if (user) {
                await syncUser(user);
              }
            }
          }
        } catch (err) {
          console.error('[Mentalis] initializeAuthAndSync error:', err);
        }

        onAuthStateChange(async (event, session) => {
          if ((event === 'SIGNED_IN' || event === 'INITIAL_SESSION') && session?.user) {
            await syncUser(session.user);
          } else if (event === 'SIGNED_OUT') {
            if (profileRealtimeUnsub) {
              profileRealtimeUnsub();
              profileRealtimeUnsub = null;
            }
            presenceEngine.untrack();
            get().setAuthUser(null);
            set({ syncStatus: 'idle', syncError: null });
          }
        });
      },

      signOut: async () => {
        if (profileRealtimeUnsub) {
          profileRealtimeUnsub();
          profileRealtimeUnsub = null;
        }
        presenceEngine.untrack();
        await signOutUser();
        get().setAuthUser(null);
        set({ syncStatus: 'idle', syncError: null });
      },

      deleteAccount: async () => {
        const { currentUser } = get();
        if (!currentUser) return { success: false, error: 'Not logged in' };

        if (profileRealtimeUnsub) {
          profileRealtimeUnsub();
          profileRealtimeUnsub = null;
        }

        const res = await syncEngine.deleteUserAccount(currentUser.id);
        if (!res.success) {
          return res;
        }

        presenceEngine.untrack();
        await signOutUser();
        get().resetProgress();
        set({
          currentUser: null,
          username: null,
          avatarType: 'google',
          selectedBadgeLevel: 1,
          selectedMasteryBadgeId: null,
          syncStatus: 'idle',
          syncError: null,
        });

        if (typeof window !== 'undefined') {
          window.localStorage.removeItem('mentalis_storage_v8');
          window.localStorage.removeItem('mentalis_storage_v7');
          window.localStorage.removeItem('mentalis_landing_login_prompted');
        }

        return { success: true };
      },

      triggerSync: async () => {
        const { currentUser } = get();
        if (!currentUser) return;

        const supabase = getSupabase();
        if (supabase) {
          const { data } = await supabase.auth.getSession();
          let session = data?.session;
          if (!session || (session.expires_at && session.expires_at * 1000 < Date.now() + 60000)) {
            const { data: refData } = await supabase.auth.refreshSession();
            session = refData?.session;
          }
          if (!session) {
            set({
              syncStatus: 'error',
              syncError: 'Please sign in to sync cloud progress',
            });
            get().setAuthModalOpen(true);
            return;
          }
        }
        syncEngine.debouncedSync(currentUser.id, get(), 0);
      },

      setAvatarPreference: async (type: 'google' | 'badge' | 'mastery', badgeLevel?: number, masteryBadgeId?: string) => {
        const currentLevel = get().level || 1;
        let finalType = type;
        let finalBadgeLevel = badgeLevel ?? get().selectedBadgeLevel ?? 1;
        let finalMasteryId: string | null = null;

        if (type === 'badge') {
          // Strict lock enforcement: Can NEVER equip a badge level higher than current user level
          if (finalBadgeLevel > currentLevel) {
            console.warn(`[Store] Blocked attempt to equip locked badge level ${finalBadgeLevel} (user level: ${currentLevel})`);
            return;
          }
        } else if (type === 'mastery') {
          // Strict lock enforcement: Can NEVER equip a locked mastery badge
          const targetId = masteryBadgeId || get().selectedMasteryBadgeId;
          const evaluated = getEvaluatedMasteryBadges({
            overallStats: get().overallStats,
            progressMap: get().progressMap,
            factMemoryMap: get().factMemoryMap || {},
          });
          const badgeObj = evaluated.find((b) => b.id === targetId);
          if (!badgeObj || !badgeObj.isUnlocked) {
            console.warn(`[Store] Blocked attempt to equip locked mastery badge: ${targetId}`);
            return;
          }
          finalMasteryId = badgeObj.id;
        }

        set({
          avatarType: finalType,
          selectedBadgeLevel: finalBadgeLevel,
          selectedMasteryBadgeId: finalMasteryId,
        });

        // Instant cross-tab sync on same machine
        if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
          try {
            const bc = new BroadcastChannel('mentalis_avatar_sync');
            bc.postMessage({
              type: 'AVATAR_EQUIPPED',
              avatarType: finalType,
              selectedBadgeLevel: finalBadgeLevel,
              selectedMasteryBadgeId: finalMasteryId,
            });
            bc.close();
          } catch {
            // ignore
          }
        }

        const { currentUser, username, level } = get();
        if (currentUser) {
          await socialEngine.updateAvatarPreference(currentUser.id, finalType, finalBadgeLevel, finalMasteryId);
          presenceEngine.trackUser({
            id: currentUser.id,
            username,
            displayName: currentUser.displayName,
            avatarUrl: currentUser.avatarUrl,
            avatarType: finalType,
            level,
          });
          get().triggerSync();
        }
      },

      updateDisplayName: async (newDisplayName: string) => {
        const { currentUser, username, avatarType, level } = get();
        if (!currentUser) return { success: false, error: 'Please log in to update your display name.' };
        const res = await socialEngine.updateDisplayName(currentUser.id, newDisplayName);
        if (res.success) {
          const clean = newDisplayName.trim().replace(/\s+/g, ' ');
          set({
            currentUser: {
              ...currentUser,
              displayName: clean,
            },
          });
          presenceEngine.trackUser({
            id: currentUser.id,
            username,
            displayName: clean,
            avatarUrl: currentUser.avatarUrl,
            avatarType,
            level,
          });
          get().triggerSync();
        }
        return res;
      },

      updateUsername: async (newUsername: string) => {
        const { currentUser, avatarType, level } = get();
        if (!currentUser) return { success: false, error: 'Please log in to set a username.' };
        const res = await socialEngine.updateUsername(currentUser.id, newUsername);
        if (res.success) {
          const clean = newUsername.trim().toLowerCase();
          set({ username: clean });
          presenceEngine.trackUser({
            id: currentUser.id,
            username: clean,
            displayName: currentUser.displayName,
            avatarUrl: currentUser.avatarUrl,
            avatarType,
            level,
          });
          get().triggerSync();
        }
        return res;
      },

      setIsBadgePickerOpen: (open: boolean) => set({ isBadgePickerOpen: open }),
      setIsChatDrawerOpen: (open: boolean) => set({ isChatDrawerOpen: open }),
      dismissLevelUpCelebration: () => set({ newLevelUnlocked: null }),
    }),
    {
      name: 'mentalis_storage_v8',
      version: 8,
      storage: createJSONStorage(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
          if (!window.localStorage.getItem('mentalis_storage_v8') && window.localStorage.getItem('mentalis_storage_v7')) {
            const v7 = window.localStorage.getItem('mentalis_storage_v7');
            if (v7) window.localStorage.setItem('mentalis_storage_v8', v7);
          }
          return window.localStorage;
        }
        const memMap: Record<string, string> = {};
        return {
          getItem: (key: string) => memMap[key] || null,
          setItem: (key: string, value: string) => {
            memMap[key] = value;
          },
          removeItem: (key: string) => {
            delete memMap[key];
          },
          clear: () => {
            for (const k of Object.keys(memMap)) delete memMap[k];
          },
          key: (index: number) => Object.keys(memMap)[index] || null,
          length: Object.keys(memMap).length,
        } as Storage;
      }),
      migrate: (persistedState: unknown, version: number) => {
        const old = (persistedState || {}) as Partial<QuizState>;
        const defaultProfile = createDefaultLearnerProfile();

        // Migrate existing progress into learnerProfile if upgrading from earlier versions
        if (old.progressMap) {
          for (const [key, item] of Object.entries(old.progressMap)) {
            if (item.totalAttempts > 0) {
              let dim: SkillDimension = 'add_sub_non_bridging';
              if (key.startsWith('table_')) {
                const tbl = parseInt(key.replace('table_', ''), 10);
                dim = resolveActiveDimension('multiplication', 2, tbl, 'near_50');
              } else if (key.startsWith('add_sub_level_')) {
                const lvl = parseInt(key.replace('add_sub_level_', ''), 10);
                dim = resolveActiveDimension('add_sub', lvl, 7, 'near_50');
              } else if (key.startsWith('sq_cube_')) {
                const track = key.replace('sq_cube_', '') as SquareCubeSubTrack;
                dim = resolveActiveDimension('squares_cubes', 2, 7, track);
              }

              const targetMs = 3000;
              const thetaEst = Math.max(
                -2.0,
                Math.min(2.5, Number(((item.recentAccuracy - 60) / 20).toFixed(2)))
              );

              defaultProfile.skills[dim] = {
                dimension: dim,
                theta: thetaEst,
                confidence: Math.min(0.9, item.totalAttempts / 15),
                totalAttempts: item.totalAttempts,
                correctCount: item.correctCount,
                accuracy: item.recentAccuracy,
                medianLatencyMs: item.medianResponseTimeMs || targetMs,
                lastPracticed: item.lastPracticed || Date.now(),
                decayRisk: 'low',
                masteryTier: item.masteryStatus === 'mastered' ? 'master' : 'developing',
              };
            }
          }
        }

        // Migrate fact memory states to complete FactMemory model
        const migratedFactMemory: Record<string, FactMemory> = {};
        if (old.factMemoryMap) {
          for (const [key, fact] of Object.entries(old.factMemoryMap as Record<string, any>)) {
            const parsed = parseFactKey(fact.factKey || fact.key || key);
            migratedFactMemory[key] = {
              ...fact,
              key: fact.key || fact.factKey || key,
              category: fact.category || fact.factType || parsed.type || 'multiplication',
              attempts: fact.attempts ?? fact.totalAttempts ?? 0,
              correctAttempts: fact.correctAttempts ?? 0,
              skippedAttempts: fact.skippedAttempts ?? fact.skipCount ?? 0,
              consecutiveCorrect: fact.consecutiveCorrect ?? 0,
              consecutiveIncorrect: fact.consecutiveIncorrect ?? fact.consecutiveErrors ?? 0,
              averageLatencyMs: fact.averageLatencyMs ?? fact.recentLatencyMs ?? 0,
              medianLatencyMs: fact.medianLatencyMs ?? 0,
              recentLatenciesMs: fact.recentLatenciesMs || (fact.recentLatencyMs ? [fact.recentLatencyMs] : []),
              firstSeenAt: fact.firstSeenAt || fact.firstSeen || Date.now(),
              lastSeenAt: fact.lastSeenAt || fact.lastSeen || Date.now(),
              lastCorrectAt: fact.lastCorrectAt || fact.lastCorrect || undefined,
              lastIncorrectAt: fact.lastIncorrectAt || fact.lastIncorrect || undefined,
              lastSkippedAt: fact.lastSkippedAt || fact.lastSkipped || undefined,
              nextReviewAt: fact.nextReviewAt || fact.nextReviewTimestamp || Date.now(),
              stabilityDays: fact.stabilityDays || fact.intervalDays || 0,
              difficultyScore: fact.difficultyScore || 3,
              masteryScore: fact.masteryScore || fact.stabilityScore || 0,
              masteryState: fact.masteryState || 'unseen',
              learningPhase: fact.learningPhase || 'teach',
              errorPatterns: fact.errorPatterns || [],
              shownStrategies: fact.shownStrategies || [],
              strategyConfidence: fact.strategyConfidence || 0,
              factKey: fact.factKey || (fact.key as any) || key,
              factType: fact.factType || fact.category || parsed.type || 'multiplication',
              totalAttempts: fact.attempts ?? fact.totalAttempts ?? 0,
              skipCount: fact.skippedAttempts ?? fact.skipCount ?? 0,
              recentAccuracy: fact.recentAccuracy || 0,
              recentLatencyMs: fact.recentLatencyMs || 0,
              firstSeen: fact.firstSeen || fact.firstSeenAt || Date.now(),
              lastSeen: fact.lastSeen || fact.lastSeenAt || Date.now(),
              lastCorrect: fact.lastCorrect || null,
              lastIncorrect: fact.lastIncorrect || null,
              lastSkipped: fact.lastSkipped || null,
              consecutiveErrors: fact.consecutiveIncorrect ?? fact.consecutiveErrors ?? 0,
              stabilityScore: fact.stabilityScore || 0,
              forgettingRisk: fact.forgettingRisk || 0,
              nextReviewTimestamp: fact.nextReviewTimestamp || fact.nextReviewAt || Date.now(),
              intervalDays: fact.intervalDays || fact.stabilityDays || 0,
              easeFactor: fact.easeFactor || 2.5,
              usedHintOrStrategyCount: fact.usedHintOrStrategyCount || 0,
              isDirectMemory: fact.isDirectMemory ?? true,
              errorHistory: fact.errorHistory || [],
            };
          }
        }

        return {
          ...old,
          progressMap: old.progressMap || {},
          factMemoryMap: migratedFactMemory,
          learningMode: old.learningMode || 'recall',
          workoutMode: (old as any).workoutMode || 'exercise',
          activeRepairCard: null,
          delayedReviewQueue: [],
          recentAskedKeys: [],
          batchAnswerCount: 0,
          overallStats: {
            ...initialOverallStats,
            ...(old.overallStats || {}),
          },
          anzanStats: old.anzanStats || initialAnzanStats,
          soundEnabled: old.soundEnabled ?? true,
          reducedMotion: old.reducedMotion ?? false,
          timerVisible: old.timerVisible ?? true,
          anzanConfig: {
            count: 5,
            digits: 1,
            intervalMs: 800,
            allowNegatives: false,
            presetName: 'Standard Flow',
            ...(old.anzanConfig || {}),
          },
          sessionConfig: initialSessionConfig,
          learnerProfile: old.learnerProfile || defaultProfile,
          locale: (old as any).locale || defaultLocale,
          hasCompletedLanguageOnboarding: (old as any).hasCompletedLanguageOnboarding ?? false,
          isSettingsModalOpen: false,
          activeAssessment: null,
          assessmentInputBuffer: '',
          assessmentQuestionStartTime: 0,
          activeTrainingPlan: null,
          activeTrainingBlockIndex: 0,
          isPlanActive: false,
          techniqueMasteryMap: (old as any).techniqueMasteryMap || INITIAL_TECHNIQUE_MASTERY_MAP,
          customDrillConfig: (old as any).customDrillConfig || null,
          aiCoachingEnabled: old.aiCoachingEnabled ?? true,
          aiCoachInsight: null,
          isLoadingAiCoach: false,
          aiCoachState: {
            learnerId: (old as any).aiCoachState?.learnerId || 'offline_learner',
            cooldownMinutes: 15,
            lastSuccessfulRequestAt: null,
            nextEligibleRequestAt: 0,
            providerStatus: 'ready',
            lastErrorType: null,
            retryAfterSeconds: null,
            pendingSync: false,
            lastAiLesson: null,
            planSource: 'offline',
          },
        };
      },
      partialize: (state) => ({
        progressMap: state.progressMap,
        dailyActivityMap: state.dailyActivityMap,
        factMemoryMap: state.factMemoryMap,
        learningMode: state.learningMode,
        workoutMode: state.workoutMode,
        techniqueMasteryMap: state.techniqueMasteryMap,
        customDrillConfig: state.customDrillConfig,
        overallStats: state.overallStats,
        anzanStats: state.anzanStats,
        soundEnabled: state.soundEnabled,
        reducedMotion: state.reducedMotion,
        timerVisible: state.timerVisible,
        anzanConfig: state.anzanConfig,
        locale: state.locale,
        hasCompletedLanguageOnboarding: state.hasCompletedLanguageOnboarding,
        activeAddSubLevel: state.activeAddSubLevel,
        activeTable: state.activeTable,
        activeSquareTrack: state.activeSquareTrack,
        learnerProfile: state.learnerProfile,
        aiCoachingEnabled: state.aiCoachingEnabled,
        aiCoachState: state.aiCoachState,
        currentUser: state.currentUser,
        xp: state.xp,
        level: state.level,
        avatarType: state.avatarType,
        selectedBadgeLevel: state.selectedBadgeLevel,
        selectedMasteryBadgeId: state.selectedMasteryBadgeId,
        username: state.username,
        themeConfig: state.themeConfig,
      }),
    }
  )
);

// Cross-tab real-time theme synchronizer
if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
  try {
    const themeChannel = new BroadcastChannel('mentalis_theme_sync');
    themeChannel.onmessage = (e) => {
      if (e.data?.type === 'THEME_SYNC' && e.data.payload) {
        useQuizStore.setState({ themeConfig: e.data.payload });
        if (typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-theme-font', e.data.payload.fontFamily);
          document.documentElement.setAttribute('data-theme-accent', e.data.payload.accentColor);
          document.documentElement.setAttribute('data-theme-size', e.data.payload.fontSize);
        }
      }
    };
  } catch {}
}
