'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Sparkles,
  Zap,
  Target,
  Percent,
  PlusCircle,
  XCircle,
  Flame,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Clock,
  ArrowRight,
  ChevronRight,
  RotateCcw,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Trophy,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import {
  TechniqueModuleCategory,
  CalculationTechniqueId,
  GeneratedTechniqueProblem,
  TechniqueMasteryState,
} from '../core/types';
import {
  MODULE_METADATA,
  TECHNIQUE_CURRICULUM,
} from '../core/techniques/techniqueCurriculum';
import { useTranslations } from 'next-intl';
import { generateTechniqueProblem } from '../core/techniques/techniqueGenerators';
import { soundEngine } from '../core/soundEngine';
import {
  getLocalizedModule,
  getLocalizedTechnique,
} from '../i18n/techniqueTranslations';

type ActiveTab = 'secret' | 'mind_odometer' | 'practice';
type PracticeMode = 'guided' | 'speed';

export const TechniquesCurriculumView: React.FC = () => {
  const tTech = useTranslations('techniques');
  const tCommon = useTranslations('common');
  const tPractice = useTranslations('practice');
  const {
    techniqueMasteryMap,
    recordTechniquePracticeResult,
    soundEnabled,
    toggleSound,
    setViewMode,
    locale,
  } = useQuizStore();

  const [selectedModule, setSelectedModule] =
    useState<TechniqueModuleCategory>('fundamental_operations');
  const [selectedTechniqueId, setSelectedTechniqueId] =
    useState<CalculationTechniqueId>('add_l2r_place_value');
  const [activeTab, setActiveTab] = useState<ActiveTab>('secret');
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('guided');

  // Practice State
  const [currentProblem, setCurrentProblem] =
    useState<GeneratedTechniqueProblem | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isCorrectFeedback, setIsCorrectFeedback] = useState<boolean | null>(null);
  const [showGhostHelper, setShowGhostHelper] = useState(false);
  const [manualGhostOverride, setManualGhostOverride] = useState(false);
  const [hesitationSeconds, setHesitationSeconds] = useState(0);

  // Gamification State
  const [comboStreak, setComboStreak] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [screenShake, setScreenShake] = useState(false);
  const [difficultyTier, setDifficultyTier] = useState<1 | 2 | 3 | 4 | 5>(2);
  const [problemStartTime, setProblemStartTime] = useState(Date.now());

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const activeLesson = TECHNIQUE_CURRICULUM[selectedTechniqueId];
  const localizedActive = getLocalizedTechnique(
    selectedTechniqueId,
    locale,
    activeLesson?.title,
    activeLesson?.subtitle
  );
  const activeMastery: TechniqueMasteryState = techniqueMasteryMap[
    selectedTechniqueId
  ] || {
    techniqueId: selectedTechniqueId,
    title: localizedActive.title || selectedTechniqueId,
    consecutiveCorrect: 0,
    averageLatencyMs: 0,
    totalExposures: 0,
    isMastered: false,
  };

  // Switch technique and load initial problem
  const loadNewProblem = useCallback(
    (techId: CalculationTechniqueId, tier: 1 | 2 | 3 | 4 | 5) => {
      const prob = generateTechniqueProblem(techId, tier);
      setCurrentProblem(prob);
      setCurrentStepIndex(0);
      setInputValue('');
      setIsCorrectFeedback(null);
      setShowGhostHelper(false);
      setHesitationSeconds(0);
      setProblemStartTime(Date.now());
    },
    []
  );

  useEffect(() => {
    loadNewProblem(selectedTechniqueId, difficultyTier);
  }, [selectedTechniqueId, difficultyTier, loadNewProblem]);

  // Hesitation countdown tracker for Visual Ghost Helper (> 3s trigger)
  useEffect(() => {
    if (activeTab !== 'practice' || !currentProblem) return;

    timerRef.current = setInterval(() => {
      setHesitationSeconds((prev) => {
        const next = prev + 1;
        if (next >= 3) {
          setShowGhostHelper(true);
        }
        return next;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeTab, currentProblem, currentStepIndex]);

  const inputValueRef = useRef(inputValue);
  inputValueRef.current = inputValue;

  // Calculate dynamic streak multiplier
  useEffect(() => {
    if (comboStreak >= 10) setMultiplier(3);
    else if (comboStreak >= 5) setMultiplier(2);
    else if (comboStreak >= 3) setMultiplier(1.5);
    else setMultiplier(1);

    if (comboStreak > bestCombo) setBestCombo(comboStreak);
  }, [comboStreak, bestCombo]);

  const handleSubmitAnswer = useCallback(async () => {
    const currentVal = inputValueRef.current.trim();
    if (!currentProblem || !currentVal) return;

    const latencyMs = Date.now() - problemStartTime;
    const cleanedInput = currentVal.toLowerCase();

    if (practiceMode === 'guided') {
      const step = currentProblem.steps[currentStepIndex];
      const expectedStr = step.expectedValue.toString().toLowerCase();
      const isStepCorrect = cleanedInput === expectedStr;

      if (isStepCorrect) {
        soundEngine.playSuccess();
        if (currentStepIndex + 1 < currentProblem.steps.length) {
          setCurrentStepIndex((prev) => prev + 1);
          setInputValue('');
          setHesitationSeconds(0);
          setShowGhostHelper(false);
          setIsCorrectFeedback(null);
        } else {
          // All steps conquered for this problem
          setIsCorrectFeedback(true);
          setComboStreak((prev) => prev + 1);
          await recordTechniquePracticeResult(
            selectedTechniqueId,
            true,
            latencyMs
          );

          setTimeout(() => {
            loadNewProblem(selectedTechniqueId, difficultyTier);
          }, 600);
        }
      } else {
        soundEngine.playError();
        setIsCorrectFeedback(false);
        setComboStreak(0);
        setScreenShake(true);
        setTimeout(() => setScreenShake(false), 500);
        setTimeout(() => setIsCorrectFeedback(null), 1000);
        await recordTechniquePracticeResult(
          selectedTechniqueId,
          false,
          latencyMs
        );
      }
    } else {
      // Direct Speed Mode
      const expectedAnswerStr = currentProblem.correctAnswer
        .toString()
        .toLowerCase();
      const isSpeedCorrect = cleanedInput === expectedAnswerStr;

      if (isSpeedCorrect) {
        soundEngine.playSuccess();
        if (comboStreak >= 4) {
          soundEngine.playStreak(comboStreak + 1);
        }
        setIsCorrectFeedback(true);
        setComboStreak((prev) => prev + 1);
        await recordTechniquePracticeResult(
          selectedTechniqueId,
          true,
          latencyMs
        );

        setTimeout(() => {
          loadNewProblem(selectedTechniqueId, difficultyTier);
        }, 500);
      } else {
        soundEngine.playError();
        setIsCorrectFeedback(false);
        setComboStreak(0);
        setScreenShake(true);
        setTimeout(() => setScreenShake(false), 500);
        setTimeout(() => setIsCorrectFeedback(null), 1000);
        await recordTechniquePracticeResult(
          selectedTechniqueId,
          false,
          latencyMs
        );
      }
    }
  }, [
    currentProblem,
    problemStartTime,
    practiceMode,
    currentStepIndex,
    selectedTechniqueId,
    difficultyTier,
    comboStreak,
    loadNewProblem,
    recordTechniquePracticeResult,
  ]);

  // Dual Input Mechanism: Physical Keyboard Listener (with single-dispatch guarantee)
  useEffect(() => {
    if (activeTab !== 'practice') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // If user is typing inside an input/textarea, delegate character typing to native input
      const isInputFocused =
        document.activeElement === inputRef.current ||
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA' ||
        (e.target as HTMLElement)?.tagName === 'INPUT';

      if (isInputFocused) {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleSubmitAnswer();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          setInputValue('');
          setIsCorrectFeedback(null);
        }
        // Early return prevents characters from appending twice
        return;
      }

      // If user is typing outside the input on desktop
      if (e.key >= '0' && e.key <= '9') {
        e.preventDefault();
        setInputValue((prev) => prev + e.key);
        setIsCorrectFeedback(null);
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        setInputValue((prev) => prev.slice(0, -1));
        setIsCorrectFeedback(null);
      } else if (e.key === '.' || e.key === '-') {
        e.preventDefault();
        setInputValue((prev) => (prev.includes(e.key) ? prev : prev + e.key));
        setIsCorrectFeedback(null);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        handleSubmitAnswer();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setInputValue('');
        setIsCorrectFeedback(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, handleSubmitAnswer]);

  const handleNumpadPress = (digit: string) => {
    setIsCorrectFeedback(null);
    if (digit === 'backspace') {
      setInputValue((prev) => prev.slice(0, -1));
    } else if (digit === 'clear') {
      setInputValue('');
    } else if (digit === 'enter') {
      handleSubmitAnswer();
    } else {
      setInputValue((prev) => prev + digit);
    }
  };

  return (
    <div
      className={`flex-1 flex flex-col max-w-6xl mx-auto px-4 py-6 w-full ${
        screenShake ? 'animate-shake' : ''
      }`}
    >
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Competitive Mental Math Mastery Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Curriculum Techniques Studio
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            35 high-velocity algebraic shortcuts, memory anchors & Vedic procedural engines.
          </p>
        </div>

        {/* Global Stats HUD */}
        <div className="flex items-center flex-wrap gap-2 bg-slate-900/90 border border-slate-800 p-2 sm:p-2.5 rounded-2xl">
          {/* Combo Multiplier */}
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-violet-950/60 border border-violet-800/60 text-violet-300 font-mono text-xs font-bold">
            <Zap className="w-3.5 h-3.5 text-violet-400" />
            <span>{multiplier}x MULTIPLIER</span>
          </div>

          {/* Current Combo Streak */}
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-950/60 border border-amber-800/60 text-amber-300 font-mono text-xs font-bold">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>{comboStreak} STREAK</span>
          </div>

          {/* Audio Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
            title={soundEnabled ? 'Mute Audio' : 'Unmute Audio'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>
        </div>
      </div>

      {/* Module Categorization Tabs (Touch-scrollable on mobile, grid on sm+) */}
      <div className="flex sm:grid sm:grid-cols-5 gap-2 py-3 sm:py-4 overflow-x-auto scrollbar-none pb-2" style={{ WebkitOverflowScrolling: 'touch' }}>
        {(Object.keys(MODULE_METADATA) as TechniqueModuleCategory[]).map(
          (modKey) => {
            const meta = MODULE_METADATA[modKey];
            const locModule = getLocalizedModule(modKey, locale);
            const isSelected = selectedModule === modKey;

            return (
              <button
                key={modKey}
                onClick={() => {
                  setSelectedModule(modKey);
                  setSelectedTechniqueId(meta.techniqueIds[0]);
                }}
                className={`flex-shrink-0 w-44 sm:w-auto flex flex-col items-start p-3 sm:p-3.5 rounded-2xl border text-left transition-all min-h-[64px] ${
                  isSelected
                    ? 'bg-slate-900 border-violet-500 shadow-lg shadow-violet-500/10'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span
                    className={`text-xs font-bold truncate ${
                      isSelected ? 'text-violet-300' : 'text-slate-300'
                    }`}
                  >
                    {locModule.title}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                  )}
                </div>
                <span className="text-[10px] text-slate-500 line-clamp-1">
                  {locModule.subtitle}
                </span>
              </button>
            );
          }
        )}
      </div>

      {/* Techniques Selector Carousel / Pills */}
      <div className="flex items-center gap-2 overflow-x-auto py-2 pb-4 scrollbar-none">
        {MODULE_METADATA[selectedModule].techniqueIds.map((tId) => {
          const lesson = TECHNIQUE_CURRICULUM[tId];
          const locTech = getLocalizedTechnique(tId, locale, lesson?.title);
          const mastery = techniqueMasteryMap[tId];
          const isSelected = selectedTechniqueId === tId;

          return (
            <button
              key={tId}
              onClick={() => setSelectedTechniqueId(tId)}
              className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                isSelected
                  ? 'bg-violet-600 text-white border-violet-500 shadow-md shadow-violet-600/25'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {mastery?.isMastered ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              )}
              <span>{locTech.title}</span>
              {mastery?.isMastered && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-800 font-mono">
                  {tTech('mastered')}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Studio Card */}
      <div className="flex-1 bg-slate-900/60 border border-slate-800 rounded-3xl p-5 sm:p-7 flex flex-col gap-6 backdrop-blur-xl">
        {/* Technique Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-white">
                {localizedActive.title}
              </h2>
              {activeMastery.isMastered && (
                <span className="flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <Trophy className="w-3 h-3 text-emerald-400" />
                  {tTech('conquered')}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {localizedActive.subtitle}
            </p>
          </div>

          {/* 3-Part Architecture Navigation Tabs (Responsive labels for mobile) */}
          <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-2xl border border-slate-800 text-xs font-bold w-full sm:w-auto overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('secret')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl transition-all min-h-[44px] whitespace-nowrap ${
                activeTab === 'secret'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 shrink-0" />
              <span>{tTech('secretTab')}</span>
            </button>

            <button
              onClick={() => setActiveTab('mind_odometer')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl transition-all min-h-[44px] whitespace-nowrap ${
                activeTab === 'mind_odometer'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Brain className="w-3.5 h-3.5 shrink-0" />
              <span>{tTech('mindOdometerTab')}</span>
            </button>

            <button
              onClick={() => setActiveTab('practice')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl transition-all min-h-[44px] whitespace-nowrap ${
                activeTab === 'practice'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-emerald-400 hover:text-emerald-300'
              }`}
            >
              <Target className="w-3.5 h-3.5 shrink-0" />
              <span>{tTech('practiceTab')}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: The Math Secret */}
        {activeTab === 'secret' && activeLesson && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Algebraic Rationale Card */}
              <div className="bg-slate-950/60 border border-slate-800/90 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-400">
                  <Sparkles className="w-4 h-4" />
                  <span>{tTech('algebraicFormula')}</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-violet-900/40 text-violet-200 font-mono text-base font-bold text-center">
                  {activeLesson.algebraicFormula}
                </div>
                <h4 className="text-sm font-bold text-white pt-2">
                  {localizedActive.mathSecretTitle || activeLesson.mathSecret.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {localizedActive.mathSecretDesc || activeLesson.mathSecret.description}
                </p>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 font-mono">
                  <span className="text-slate-500 font-semibold block mb-1">
                    {tTech('algebraicProof')}
                  </span>
                  {activeLesson.mathSecret.algebraicProof}
                </div>
              </div>

              {/* Conditions & Worked Example */}
              <div className="bg-slate-950/60 border border-slate-800/90 rounded-2xl p-5 space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                    {tTech('preconditions')}
                  </div>
                  <p className="text-xs text-slate-300">
                    {activeLesson.mathSecret.conditions}
                  </p>
                </div>

                <div className="border-t border-slate-800 pt-4">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                    <span>{tTech('workedExample')}</span>
                    <span className="font-mono text-white text-sm">
                      {activeLesson.workedExample.problem}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {activeLesson.workedExample.steps.map((st) => (
                      <div
                        key={st.step}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs"
                      >
                        <span className="text-slate-300">{st.action}</span>
                        <span className="font-mono text-emerald-400 font-bold">
                          {st.echo}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-3 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs font-bold text-emerald-300 font-mono">
                    <span>{tTech('finalResult')}</span>
                    <span className="text-base font-extrabold text-white">
                      {activeLesson.workedExample.finalResult}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Jump to Guided Practice CTA */}
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveTab('practice')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition-all shadow-lg shadow-violet-600/30"
              >
                <span>{tTech('launchPractice')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Tab 2: The Mind-Odometer Trick */}
        {activeTab === 'mind_odometer' && activeLesson && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-slate-950/60 border border-slate-800/90 rounded-2xl p-6 space-y-5">
              <div className="flex items-center gap-2.5 text-violet-400">
                <Brain className="w-5 h-5" />
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {localizedActive.mindOdometerTitle || activeLesson.mindOdometer.trickTitle}
                </h3>
              </div>

              {/* Subvocal instruction banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-950/40 to-indigo-950/40 border border-violet-800/50">
                <div className="text-xs font-bold uppercase tracking-wider text-violet-300 mb-1">
                  {tTech('innerEchoRule')}
                </div>
                <p className="text-sm text-slate-200 leading-relaxed font-medium">
                  {localizedActive.subvocalInstruction || activeLesson.mindOdometer.subvocalInstruction}
                </p>
              </div>

              {/* Carry Elimination Rule */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                    {tTech('carryElimination')}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeLesson.mindOdometer.carryEliminationRule}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    {tTech('accumulatorState')}
                  </span>
                  <p className="text-xs font-mono text-slate-300 leading-relaxed">
                    {activeLesson.mindOdometer.visualAccumulatorExample}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveTab('practice')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition-all shadow-lg shadow-violet-600/30"
              >
                <span>{tTech('launchPractice')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Interactive Practice & Speed Drill Studio */}
        {activeTab === 'practice' && currentProblem && (
          <div className="space-y-4 sm:space-y-6">
            {/* Practice Mode & Tier Controls Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl bg-slate-950/90 border border-slate-800 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 w-full sm:w-auto">
                <button
                  onClick={() => setPracticeMode('guided')}
                  className={`flex-1 sm:flex-none px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    practiceMode === 'guided'
                      ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Target className="w-3.5 h-3.5" />
                  <span>{tPractice('guidedMode')}</span>
                </button>
                <button
                  onClick={() => setPracticeMode('speed')}
                  className={`flex-1 sm:flex-none px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    practiceMode === 'speed'
                      ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>{tPractice('speedMode')}</span>
                </button>
              </div>

              {/* Difficulty Tier Selector */}
              <div className="flex items-center justify-between sm:justify-end gap-1.5 w-full sm:w-auto">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mr-1">
                  Difficulty:
                </span>
                {[1, 2, 3, 4, 5].map((tier) => (
                  <button
                    key={tier}
                    onClick={() =>
                      setDifficultyTier(tier as 1 | 2 | 3 | 4 | 5)
                    }
                    className={`w-8 h-8 rounded-xl text-xs font-bold font-mono transition-all flex items-center justify-center ${
                      difficultyTier === tier
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 ring-2 ring-emerald-500/30'
                        : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    L{tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Problem Arena Card */}
            <div className="bg-slate-950/90 border border-slate-800/90 shadow-2xl rounded-3xl p-5 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-xl">
              {/* Ambient radial gradient glow */}
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-violet-600/10 via-transparent to-transparent pointer-events-none" />

              {/* Hesitation Visual Ghost Helper Banner */}
              <AnimatePresence>
                {(showGhostHelper || manualGhostOverride) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="w-full max-w-md mb-4 p-3 rounded-2xl bg-indigo-950/70 border border-indigo-500/40 text-indigo-200 text-xs font-mono flex items-center justify-between shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-indigo-400 animate-pulse shrink-0" />
                      <span className="font-bold text-indigo-300">Ghost Helper:</span>
                      <span className="text-white font-bold">{currentProblem.ghostAccumulator}</span>
                    </div>
                    <span className="text-[10px] text-indigo-400 uppercase font-sans font-semibold px-2 py-0.5 rounded-full bg-indigo-900/60 border border-indigo-700/50">
                      Active Hint
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Math Prompt Display */}
              <div className="text-center py-2 sm:py-3 px-2">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-widest mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping" />
                  <span>{tCommon('calculateMentally')}</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProblem.id}
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.12 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight font-mono break-words select-none"
                  >
                    {currentProblem.prompt}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Guided Step Prompter */}
              {practiceMode === 'guided' &&
                currentProblem.steps[currentStepIndex] && (
                  <div className="w-full max-w-md my-3 p-4 rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-violet-500/30 text-center space-y-2 shadow-inner">
                    {/* Step pills progress indicator */}
                    <div className="flex items-center justify-between px-1">
                      <div className="flex items-center gap-1">
                        {currentProblem.steps.map((_, sIdx) => (
                          <div
                            key={sIdx}
                            className={`h-1.5 rounded-full transition-all ${
                              sIdx < currentStepIndex
                                ? 'w-5 bg-emerald-500'
                                : sIdx === currentStepIndex
                                ? 'w-7 bg-violet-500 shadow-sm shadow-violet-500/50'
                                : 'w-3 bg-slate-700'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-violet-400">
                        {tTech('step')} {currentStepIndex + 1} {tTech('of')} {currentProblem.steps.length}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {currentProblem.steps[currentStepIndex].prompt}
                    </p>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/40 text-[11px] text-violet-300 font-mono">
                      <span className="text-violet-400 font-sans font-medium text-[10px] uppercase">
                        {tTech('innerEchoRule')}:
                      </span>
                      <span>&ldquo;{currentProblem.steps[currentStepIndex].subVocalization}&rdquo;</span>
                    </div>
                  </div>
                )}

              {/* Centered Glowing Answer Display Box & Underlying Clean Input */}
              <div className="w-full max-w-xs sm:max-w-sm my-2">
                <div
                  onClick={() => inputRef.current?.focus()}
                  className={`w-full h-14 sm:h-16 rounded-2xl bg-slate-950 border-2 flex items-center justify-center px-4 relative overflow-hidden shadow-inner cursor-text transition-all ${
                    isCorrectFeedback === true
                      ? 'border-emerald-500 bg-emerald-950/30 text-emerald-400 shadow-emerald-500/20'
                      : isCorrectFeedback === false
                      ? 'border-rose-500 bg-rose-950/30 text-rose-400 shadow-rose-500/20'
                      : 'border-slate-700/80 hover:border-slate-600 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20'
                  }`}
                >
                  {/* Clean Numeric Input (accessible, with sanitized change) */}
                  <input
                    ref={inputRef}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9.-]*"
                    value={inputValue}
                    onChange={(e) => {
                      const clean = e.target.value.replace(/[^0-9.-]/g, '');
                      setInputValue(clean);
                      if (isCorrectFeedback === false) setIsCorrectFeedback(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleSubmitAnswer();
                      }
                    }}
                    className="absolute inset-0 opacity-0 cursor-text w-full h-full"
                    aria-label="Type your answer"
                  />

                  <span
                    className={`text-3xl sm:text-4xl font-mono font-bold tracking-widest select-none transition-colors ${
                      isCorrectFeedback === true
                        ? 'text-emerald-400'
                        : isCorrectFeedback === false
                        ? 'text-rose-400'
                        : 'text-white'
                    }`}
                  >
                    {inputValue || (
                      <span className="text-slate-600 text-lg sm:text-xl font-normal tracking-normal font-sans select-none">
                        {tPractice('typeAnswer')}
                      </span>
                    )}
                  </span>

                  {/* Pulsing Cursor */}
                  {isCorrectFeedback === null && (
                    <span className="w-0.5 h-6 sm:h-7 bg-violet-400 ml-1.5 animate-pulse select-none" />
                  )}

                  {/* Micro Feedback Badges */}
                  <AnimatePresence>
                    {isCorrectFeedback === true && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute right-3.5 text-emerald-400"
                      >
                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      </motion.div>
                    )}
                    {isCorrectFeedback === false && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute right-3.5 text-rose-400"
                      >
                        <XCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Auxiliary Controls: Ghost Toggle, Clear, Next Problem */}
              <div className="flex items-center justify-between w-full max-w-xs sm:max-w-sm px-1 my-2 text-xs">
                <button
                  onClick={() => setManualGhostOverride((prev) => !prev)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors font-medium"
                >
                  {manualGhostOverride ? (
                    <EyeOff className="w-3.5 h-3.5 text-violet-400" />
                  ) : (
                    <Eye className="w-3.5 h-3.5" />
                  )}
                  <span>{manualGhostOverride ? tPractice('hideGhost') : tPractice('showGhost')}</span>
                </button>

                <button
                  onClick={() => {
                    setInputValue('');
                    setIsCorrectFeedback(null);
                  }}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-rose-400 border border-slate-800 transition-colors font-medium"
                >
                  <span>{tCommon('clear')} (Esc)</span>
                </button>

                <button
                  onClick={() =>
                    loadNewProblem(selectedTechniqueId, difficultyTier)
                  }
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-800 transition-colors font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{tCommon('next')}</span>
                </button>
              </div>

              {/* Responsive Tactile Virtual Numpad & Submit Action */}
              <div className="w-full max-w-xs sm:max-w-sm space-y-2 mt-2 pt-3 border-t border-slate-800/80">
                <div className="grid grid-cols-3 gap-2">
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'clear', '0', 'backspace'].map(
                    (btn) => (
                      <button
                        key={btn}
                        type="button"
                        onClick={() => handleNumpadPress(btn)}
                        className={`h-12 sm:h-13 min-h-[48px] rounded-2xl text-lg sm:text-xl font-bold font-mono transition-all active:scale-95 flex items-center justify-center border shadow-sm ${
                          btn === 'clear'
                            ? 'bg-slate-900/90 border-slate-800 text-rose-400 hover:bg-rose-950/30 hover:border-rose-800/60 text-xs font-sans uppercase font-bold tracking-wider'
                            : btn === 'backspace'
                            ? 'bg-slate-900/90 border-slate-800 text-amber-400 hover:bg-amber-950/30 hover:border-amber-800/60 text-base'
                            : 'bg-slate-900/90 border-slate-800 text-white hover:bg-slate-800 hover:border-slate-700 active:bg-violet-600'
                        }`}
                      >
                        {btn === 'clear' ? 'CLR' : btn === 'backspace' ? '⌫' : btn}
                      </button>
                    )
                  )}
                </div>

                {/* Primary Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmitAnswer}
                  disabled={!inputValue.trim()}
                  className="w-full h-12 sm:h-13 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 text-white font-bold text-sm sm:text-base shadow-lg shadow-violet-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>{tPractice('submitAnswer')} (↵)</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
