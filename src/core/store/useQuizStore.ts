/**
 * Zustand State Store for Mentalis
 * Headless, decoupled state machine that can be ported 1:1 to React Native.
 * Features backward-compatible migration, adaptive question loading,
 * session tracking, Anzan persistence, and calendar-based streaks.
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
  SessionDrillConfig,
  SessionSummary,
} from '../types';
import { SquareCubeSubTrack } from '../calcEngine';
import { evaluateMasteryStatus, updateDailyStreak, calculateMedian, calculateCPM } from '../mastery';
import { getAdaptiveQuestion, getRecommendedNextDrill, analyzeProgress } from '../adaptive';
import { soundEngine } from '../soundEngine';

interface QuizState {
  // Navigation & View
  viewMode: ViewMode;
  activeModule: ModuleId;
  activeAddSubLevel: number;
  activeTable: number;
  activeSquareTrack: SquareCubeSubTrack;

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

  // Actions
  setViewMode: (mode: ViewMode) => void;
  setActiveModule: (module: ModuleId) => void;
  setAddSubLevel: (level: number) => void;
  setActiveTable: (table: number) => void;
  setActiveSquareTrack: (track: SquareCubeSubTrack) => void;

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
        const state = get();
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

        const nextAnswered = state.sessionAnswered + 1;
        const nextCorrect = state.sessionCorrect + (isCorrect ? 1 : 0);
        const nextTimes = [...state.sessionResponseTimes, responseTimeMs];

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
          showStrategy: !isCorrect, // Auto-open strategy breakdown on error
          progressMap: {
            ...state.progressMap,
            [progressKey]: updatedItem,
          },
          overallStats: newOverall,
        });

        // Check if session goal reached
        if (!state.sessionConfig.isEndless && nextAnswered >= state.sessionConfig.goalCount) {
          setTimeout(() => {
            get().endSession();
          }, isCorrect ? 400 : 1500);
          return;
        }

        // If correct, automatically advance after brief pleasant pulse
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

        set({
          anzanStats: {
            totalRuns: newRuns,
            totalCorrect: newCorrect,
            currentStreak: newStreak,
            bestStreak: newBestStreak,
            records: [record, ...state.anzanStats.records.slice(0, 49)],
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
        });
      },
    }),
    {
      name: 'mentalis_storage_v2',
      version: 2,
      storage: createJSONStorage(() =>
        typeof window !== 'undefined' ? window.localStorage : ({} as Storage)
      ),
      migrate: (persistedState: unknown, version: number) => {
        // Backward-compatible migration from v1 (or unversioned) to v2
        const old = (persistedState || {}) as Partial<QuizState>;
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
      }),
    }
  )
);
