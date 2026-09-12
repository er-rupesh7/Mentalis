/**
 * Zustand State Store for Mentalis
 * Headless, decoupled state machine that can be ported 1:1 to React Native.
 * Features backward-compatible migration (v1 -> v2 -> v3), adaptive question loading,
 * Bayesian learner modeling, cognitive fatigue monitoring, deterministic daily plans,
 * and secure AI Coach integration.
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
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
  TableTrainingMode,
  ExamSubSkill,
  ExamTransferScores,
} from '../types';
import { SquareCubeSubTrack } from '../calcEngine';
import { evaluateMasteryStatus, updateDailyStreak, calculateMedian, calculateCPM } from '../mastery';
import { getAdaptiveQuestion, getRecommendedNextDrill, analyzeProgress } from '../adaptive';
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
  return 'anzan_stream';
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
  overallStats: OverallStats;
  anzanStats: AnzanStats;

  // Fact-Level Memory & Spaced Retrieval
  factMemoryMap: Record<string, FactMemoryState>;
  learningMode: LearningMode;
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

  // Settings & Accessibility
  soundEnabled: boolean;
  reducedMotion: boolean;
  timerVisible: boolean;
  anzanConfig: AnzanConfig;

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
  updateAnzanConfig: (config: Partial<AnzanConfig>) => void;
  recordAnzanRun: (runData: Omit<AnzanRecord, 'id' | 'timestamp'>) => void;
  resetProgress: () => void;

  // Actions - Learning Mode & Fact Training
  setLearningMode: (mode: LearningMode) => void;
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
      overallStats: initialOverallStats,
      anzanStats: initialAnzanStats,

      // Fact-Level Memory & Spaced Retrieval State
      factMemoryMap: {},
      learningMode: 'recall',
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
        get().loadNextQuestion();
      },

      setActiveTable: (table: number) => {
        set({ activeTable: table, activeModule: 'multiplication', viewMode: 'practice' });
        get().loadNextQuestion();
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
        get().loadNextQuestion();
      },

      setActiveTableChartTab: (tab: TableChartTab) => {
        set({ activeTableChartTab: tab, viewMode: 'table_chart' });
      },

      startSession: (config?: Partial<SessionDrillConfig>) => {
        const newConfig = { ...get().sessionConfig, ...config };
        set({
          sessionConfig: newConfig,
          sessionAnswered: 0,
          sessionCorrect: 0,
          sessionStartTime: Date.now(),
          sessionResponseTimes: [],
          sessionSummary: null,
          isPaused: false,
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

      dismissSessionSummary: () => {
        set({ sessionSummary: null, viewMode: 'dashboard' });
      },

      loadNextQuestion: (forceMode?: 'standard' | 'targeted_refresh' | 'weak_spots') => {
        const state = get();

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
              showStrategy: state.learningMode === 'learn',
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
            showStrategy: state.currentTableMode === 'decomposition' || state.currentTableMode === 'related_fact',
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
            showStrategy: state.learningMode === 'learn',
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
          showStrategy: state.learningMode === 'learn',
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
          showStrategy: true,
          streak: 0,
          factMemoryMap: updatedFactMemoryMap,
          delayedReviewQueue,
        });
      },

      submitAnswer: (overrideAnswer?: number) => {
        const state = get();
        if (state.isEvaluating || !state.currentQuestion || state.isPaused) return;

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
        } else if (state.activeModule === 'multiplication' || state.activeModule === 'tables_bootcamp') {
          factKey = `mul:${state.currentQuestion.operandA}:${state.currentQuestion.operandB}`;
        } else if (state.activeModule === 'squares_cubes') {
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

        // Mark pending AI sync if practiced during cooldown or offline
        get().markPendingAISync();
        const nextBatchCount = (state.batchAnswerCount || 0) + 1;

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
          showStrategy: !isCorrect || state.learningMode === 'learn',
          progressMap: {
            ...state.progressMap,
            [progressKey]: updatedItem,
          },
          factMemoryMap: updatedFactMap,
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

      setLearningMode: (mode: LearningMode) => {
        set({ learningMode: mode });
        get().loadNextQuestion();
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
          activeAssessment: null,
          assessmentInputBuffer: '',
          assessmentQuestionStartTime: 0,
          activeTrainingPlan: null,
          activeTrainingBlockIndex: 0,
          isPlanActive: false,
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
        factMemoryMap: state.factMemoryMap,
        learningMode: state.learningMode,
        overallStats: state.overallStats,
        anzanStats: state.anzanStats,
        soundEnabled: state.soundEnabled,
        reducedMotion: state.reducedMotion,
        timerVisible: state.timerVisible,
        anzanConfig: state.anzanConfig,
        activeAddSubLevel: state.activeAddSubLevel,
        activeTable: state.activeTable,
        activeSquareTrack: state.activeSquareTrack,
        learnerProfile: state.learnerProfile,
        aiCoachingEnabled: state.aiCoachingEnabled,
        aiCoachState: state.aiCoachState,
      }),
    }
  )
);
