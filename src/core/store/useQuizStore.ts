/**
 * Zustand State Store for Mentalis
 * Headless, decoupled state machine that can be ported 1:1 to React Native.
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import {
  ModuleId,
  Question,
  UserProgressItem,
  OverallStats,
  AnzanConfig,
  ViewMode,
} from '../types';
import {
  generateAddSubQuestion,
  generateMultiplicationQuestion,
  generateSquareCubeQuestion,
  SquareCubeSubTrack,
} from '../calcEngine';
import { evaluateMasteryStatus } from '../mastery';
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
  lastResult: 'correct' | 'incorrect' | null;
  showStrategy: boolean;

  // Real-time Session Metrics
  sessionAnswered: number;
  sessionCorrect: number;
  streak: number;
  bestStreak: number;

  // Persistent Progress Storage
  progressMap: Record<string, UserProgressItem>;
  overallStats: OverallStats;

  // Settings & Anzan
  soundEnabled: boolean;
  anzanConfig: AnzanConfig;

  // Actions
  setViewMode: (mode: ViewMode) => void;
  setActiveModule: (module: ModuleId) => void;
  setAddSubLevel: (level: number) => void;
  setActiveTable: (table: number) => void;
  setActiveSquareTrack: (track: SquareCubeSubTrack) => void;
  
  loadNextQuestion: () => void;
  appendDigit: (digit: string) => void;
  backspace: () => void;
  clearBuffer: () => void;
  submitAnswer: () => void;
  toggleStrategy: (force?: boolean) => void;
  toggleSound: () => void;
  updateAnzanConfig: (config: Partial<AnzanConfig>) => void;
  resetProgress: () => void;
}

const initialOverallStats: OverallStats = {
  totalCalculations: 0,
  totalCorrect: 0,
  currentStreak: 0,
  bestStreak: 0,
  lastActiveDate: new Date().toISOString().split('T')[0],
  dailyActiveStreak: 1,
  totalTimeSpentSeconds: 0,
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
      showStrategy: false,

      sessionAnswered: 0,
      sessionCorrect: 0,
      streak: 0,
      bestStreak: 0,

      progressMap: {},
      overallStats: initialOverallStats,

      soundEnabled: true,
      anzanConfig: {
        count: 5,
        digits: 1,
        intervalMs: 800,
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

      loadNextQuestion: () => {
        const state = get();
        let q: Question;

        switch (state.activeModule) {
          case 'add_sub':
            q = generateAddSubQuestion(state.activeAddSubLevel);
            break;
          case 'multiplication':
            q = generateMultiplicationQuestion(state.activeTable);
            break;
          case 'squares_cubes':
            q = generateSquareCubeQuestion(state.activeSquareTrack);
            break;
          default:
            q = generateAddSubQuestion(2);
        }

        set({
          currentQuestion: q,
          inputBuffer: '',
          questionStartTime: Date.now(),
          isEvaluating: false,
          lastResult: null,
          showStrategy: false,
        });
      },

      appendDigit: (digit: string) => {
        const { inputBuffer, isEvaluating } = get();
        if (isEvaluating) return;
        if (inputBuffer.length >= 8) return; // Prevent excessive buffer overflow
        set({ inputBuffer: inputBuffer + digit });
      },

      backspace: () => {
        const { inputBuffer, isEvaluating } = get();
        if (isEvaluating) return;
        set({ inputBuffer: inputBuffer.slice(0, -1) });
      },

      clearBuffer: () => {
        if (get().isEvaluating) return;
        set({ inputBuffer: '' });
      },

      submitAnswer: () => {
        const state = get();
        if (state.isEvaluating || !state.currentQuestion) return;

        const trimmed = state.inputBuffer.trim();
        if (!trimmed) return;

        const userAnswer = parseInt(trimmed, 10);
        if (isNaN(userAnswer)) return;

        const responseTimeMs = Math.max(150, Date.now() - state.questionStartTime);
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

        const existingProgress: UserProgressItem = state.progressMap[progressKey] || {
          itemId: progressKey,
          module: state.activeModule,
          totalAttempts: 0,
          correctCount: 0,
          streak: 0,
          bestStreak: 0,
          responseTimesMs: [],
          lastPracticed: Date.now(),
          masteryStatus: 'untrained',
          masteryScore: 0,
        };

        const updatedProgress: UserProgressItem = {
          ...existingProgress,
          totalAttempts: existingProgress.totalAttempts + 1,
          correctCount: existingProgress.correctCount + (isCorrect ? 1 : 0),
          streak: isCorrect ? existingProgress.streak + 1 : 0,
          bestStreak: isCorrect ? Math.max(existingProgress.bestStreak, existingProgress.streak + 1) : existingProgress.bestStreak,
          responseTimesMs: [...existingProgress.responseTimesMs.slice(-19), responseTimeMs],
          lastPracticed: Date.now(),
          masteryStatus: existingProgress.masteryStatus,
          masteryScore: existingProgress.masteryScore,
        };

        const { status: newStatus, score: newScore } = evaluateMasteryStatus(updatedProgress, targetSeconds);
        updatedProgress.masteryStatus = newStatus;
        updatedProgress.masteryScore = newScore;

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

        // Update overall stats
        const todayStr = new Date().toISOString().split('T')[0];
        const isNewDay = state.overallStats.lastActiveDate !== todayStr;
        const newOverall: OverallStats = {
          totalCalculations: state.overallStats.totalCalculations + 1,
          totalCorrect: state.overallStats.totalCorrect + (isCorrect ? 1 : 0),
          currentStreak: newStreak,
          bestStreak: Math.max(state.overallStats.bestStreak, newStreak),
          lastActiveDate: todayStr,
          dailyActiveStreak: isNewDay ? state.overallStats.dailyActiveStreak + 1 : state.overallStats.dailyActiveStreak,
          totalTimeSpentSeconds: state.overallStats.totalTimeSpentSeconds + Math.round(responseTimeMs / 1000),
        };

        set({
          isEvaluating: true,
          lastResult: isCorrect ? 'correct' : 'incorrect',
          sessionAnswered: state.sessionAnswered + 1,
          sessionCorrect: state.sessionCorrect + (isCorrect ? 1 : 0),
          streak: newStreak,
          bestStreak: newBestStreak,
          showStrategy: !isCorrect, // Automatically show mental breakdown on mistake!
          progressMap: {
            ...state.progressMap,
            [progressKey]: updatedProgress,
          },
          overallStats: newOverall,
        });

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

      updateAnzanConfig: (config: Partial<AnzanConfig>) => {
        set((s) => ({ anzanConfig: { ...s.anzanConfig, ...config } }));
      },

      resetProgress: () => {
        set({
          progressMap: {},
          overallStats: initialOverallStats,
          streak: 0,
          bestStreak: 0,
          sessionAnswered: 0,
          sessionCorrect: 0,
        });
      },
    }),
    {
      name: 'mentalis_storage_v1',
      storage: createJSONStorage(() => (typeof window !== 'undefined' ? window.localStorage : ({} as Storage))),
      partialize: (state) => ({
        progressMap: state.progressMap,
        overallStats: state.overallStats,
        soundEnabled: state.soundEnabled,
        anzanConfig: state.anzanConfig,
        activeAddSubLevel: state.activeAddSubLevel,
        activeTable: state.activeTable,
        activeSquareTrack: state.activeSquareTrack,
      }),
    }
  )
);
