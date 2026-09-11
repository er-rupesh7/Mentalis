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
  createDefaultLearnerProfile,
  updateSkillEstimate,
  detectFatigue,
  ALL_SKILL_DIMENSIONS,
} from '../learnerModel';
import {
  createAssessmentSession,
  recordAssessmentAnswer,
} from '../diagnosticEngine';
import {
  generateDailyTrainingPlan,
  adjustPlanForFatigue,
  getQuestionForTrainingBlock,
} from '../planEngine';
import { getDrillById } from '../catalog';

export function resolveActiveDimension(
  module: ModuleId,
  addSubLevel: number,
  table: number,
  squareTrack: SquareCubeSubTrack
): SkillDimension {
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

  // Settings & Accessibility
  soundEnabled: boolean;
  reducedMotion: boolean;
  timerVisible: boolean;
  anzanConfig: AnzanConfig;

  // Learner Profile & AI Coaching
  learnerProfile: LearnerProfile;
  activeAssessment: AssessmentSession | null;
  assessmentInputBuffer: string;
  activeTrainingPlan: TrainingPlan | null;
  activeTrainingBlockIndex: number;
  isPlanActive: boolean;
  aiCoachingEnabled: boolean;
  aiCoachInsight: CoachingInsight | null;
  isLoadingAiCoach: boolean;

  // Actions - Navigation & Module Selection
  setViewMode: (mode: ViewMode) => void;
  setActiveModule: (module: ModuleId) => void;
  setAddSubLevel: (level: number) => void;
  setActiveTable: (table: number) => void;
  setActiveSquareTrack: (track: SquareCubeSubTrack) => void;
  setActiveTableChartTab: (tab: TableChartTab) => void;

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
  submitAnswer: () => void;
  skipQuestion: () => void;

  toggleStrategy: (force?: boolean) => void;
  toggleSound: () => void;
  toggleReducedMotion: () => void;
  toggleTimerVisibility: () => void;
  updateAnzanConfig: (config: Partial<AnzanConfig>) => void;
  recordAnzanRun: (runData: Omit<AnzanRecord, 'id' | 'timestamp'>) => void;
  resetProgress: () => void;

  // Actions - Onboarding Assessment
  startAssessment: () => void;
  appendAssessmentDigit: (digit: string) => void;
  toggleAssessmentNegative: () => void;
  backspaceAssessment: () => void;
  clearAssessmentBuffer: () => void;
  submitAssessmentAnswer: () => void;
  skipAssessment: () => void;
  pauseAssessment: () => void;
  resumeAssessment: () => void;

  // Actions - Training Plans & AI Coach
  generateDailyPlan: (requestedMinutes?: number) => void;
  startTrainingBlock: (blockIndex: number) => void;
  advanceTrainingBlock: () => void;
  cancelActivePlan: () => void;
  requestAICoachFeedback: () => Promise<void>;
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
      activeTrainingPlan: null,
      activeTrainingBlockIndex: 0,
      isPlanActive: false,
      aiCoachingEnabled: true,
      aiCoachInsight: null,
      isLoadingAiCoach: false,

      setViewMode: (mode: ViewMode) => set({ viewMode: mode }),

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
              showStrategy: false,
              isPaused: false,
            });
            return;
          }
        }

        const modeToUse = forceMode || state.sessionConfig.mode;
        const q = getAdaptiveQuestion({
          module: state.activeModule,
          activeAddSubLevel: state.activeAddSubLevel,
          activeTable: state.activeTable,
          activeSquareTrack: state.activeSquareTrack,
          progressMap: state.progressMap,
          mode: modeToUse,
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

        soundEngine.playError();
        set({
          isEvaluating: true,
          lastResult: 'skipped',
          lastAnswerSubmitted: null,
          lastCorrectAnswer: state.currentQuestion.correctAnswer,
          showStrategy: true,
          streak: 0,
        });
      },

      submitAnswer: () => {
        const state = get();
        if (state.isEvaluating || !state.currentQuestion || state.isPaused) return;

        const trimmed = state.inputBuffer.trim();
        if (!trimmed || trimmed === '-') return;

        const userAnswer = parseInt(trimmed, 10);
        if (isNaN(userAnswer)) return;

        const responseTimeMs = Math.max(120, Date.now() - state.questionStartTime);
        const isCorrect = userAnswer === state.currentQuestion.correctAnswer;
        const targetSeconds = state.currentQuestion.targetTimeSeconds;

        // Progress Tracking Key
        let progressKey = '';
        if (state.activeModule === 'multiplication') {
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

        // Update Learner Model & Skill Estimate
        const activeDim = resolveActiveDimension(
          state.activeModule,
          state.activeAddSubLevel,
          state.activeTable,
          state.activeSquareTrack
        );

        const prevSkill = state.learnerProfile.skills[activeDim];
        const updatedSkill = updateSkillEstimate(
          prevSkill,
          isCorrect,
          responseTimeMs,
          targetSeconds * 1000
        );

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
          showStrategy: !isCorrect,
          progressMap: {
            ...state.progressMap,
            [progressKey]: updatedItem,
          },
          overallStats: newOverall,
          learnerProfile: {
            ...state.learnerProfile,
            updatedAt: Date.now(),
            skills: {
              ...state.learnerProfile.skills,
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

        // If correct, advance automatically
        if (isCorrect) {
          setTimeout(() => {
            get().loadNextQuestion();
          }, 350);
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
          viewMode: 'assessment',
        });
      },

      appendAssessmentDigit: (digit: string) => {
        const { assessmentInputBuffer, activeAssessment } = get();
        if (!activeAssessment || activeAssessment.status !== 'in_progress') return;
        if (assessmentInputBuffer.replace('-', '').length >= 8) return;
        set({ assessmentInputBuffer: assessmentInputBuffer + digit });
      },

      toggleAssessmentNegative: () => {
        const { assessmentInputBuffer, activeAssessment } = get();
        if (!activeAssessment || activeAssessment.status !== 'in_progress') return;
        if (assessmentInputBuffer.startsWith('-')) {
          set({ assessmentInputBuffer: assessmentInputBuffer.substring(1) });
        } else {
          set({ assessmentInputBuffer: '-' + assessmentInputBuffer });
        }
      },

      backspaceAssessment: () => {
        const { assessmentInputBuffer, activeAssessment } = get();
        if (!activeAssessment || activeAssessment.status !== 'in_progress') return;
        set({ assessmentInputBuffer: assessmentInputBuffer.slice(0, -1) });
      },

      clearAssessmentBuffer: () => {
        set({ assessmentInputBuffer: '' });
      },

      submitAssessmentAnswer: () => {
        const { activeAssessment, assessmentInputBuffer, learnerProfile } = get();
        if (!activeAssessment || activeAssessment.status !== 'in_progress') return;

        const trimmed = assessmentInputBuffer.trim();
        if (!trimmed || trimmed === '-') return;

        const val = parseInt(trimmed, 10);
        if (isNaN(val)) return;

        const latencyMs = Math.max(200, Date.now() - activeAssessment.startedAt);
        const result = recordAssessmentAnswer(activeAssessment, val, latencyMs, learnerProfile);

        if (result.isCorrect) {
          soundEngine.playSuccess();
        } else {
          soundEngine.playError();
        }

        set({
          activeAssessment: result.updatedSession,
          learnerProfile: result.updatedProfile,
          assessmentInputBuffer: '',
        });

        // Automatically generate daily plan once assessment completes
        if (result.isCompleted) {
          get().generateDailyPlan();
        }
      },

      skipAssessment: () => {
        const { activeAssessment, learnerProfile } = get();
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
        // Pauses assessment modal timer
      },

      resumeAssessment: () => {
        // Resumes assessment modal timer
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

        // Optionally request AI Coach insight
        if (get().aiCoachingEnabled) {
          get().requestAICoachFeedback();
        }
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

      requestAICoachFeedback: async () => {
        const state = get();
        set({ isLoadingAiCoach: true });

        try {
          const skillsPayload = ALL_SKILL_DIMENSIONS.map((dim) => {
            const s = state.learnerProfile.skills[dim];
            return {
              dimension: dim,
              theta: s.theta,
              accuracy: s.accuracy,
              attempts: s.totalAttempts,
              medianLatencyMs: s.medianLatencyMs,
              decayRisk: s.decayRisk,
            };
          });

          const res = await fetch('/api/ai-coach', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              skills: skillsPayload,
              fatigue: state.learnerProfile.fatigueState,
              currentStreak: state.overallStats.dailyActiveStreak,
              requestedMinutes: state.learnerProfile.preferredDailyMinutes,
            }),
          });

          if (!res.ok) throw new Error(`HTTP error ${res.status}`);
          const data = await res.json();

          if (data.success && data.insight) {
            set({ aiCoachInsight: data.insight });
          }
        } catch (err) {
          console.error('Failed to retrieve AI coach feedback:', err);
        } finally {
          set({ isLoadingAiCoach: false });
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
      name: 'mentalis_storage_v3',
      version: 3,
      storage: createJSONStorage(() =>
        typeof window !== 'undefined' ? window.localStorage : ({} as Storage)
      ),
      migrate: (persistedState: unknown, version: number) => {
        const old = (persistedState || {}) as Partial<QuizState>;
        const defaultProfile = createDefaultLearnerProfile();

        // Migrate existing progress into learnerProfile if upgrading from v1/v2
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

        return {
          ...old,
          progressMap: old.progressMap || {},
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
          activeTrainingPlan: null,
          activeTrainingBlockIndex: 0,
          isPlanActive: false,
          aiCoachingEnabled: old.aiCoachingEnabled ?? true,
          aiCoachInsight: null,
          isLoadingAiCoach: false,
        };
      },
      partialize: (state) => ({
        progressMap: state.progressMap,
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
      }),
    }
  )
);
