'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Brain,
  Zap,
  CheckCircle2,
  ChevronRight,
  Trophy,
  ArrowRight,
  Target,
  ShieldCheck,
  Activity,
  Flame,
  SkipForward,
  Gauge,
  Check,
  HelpCircle,
  AlertTriangle,
} from 'lucide-react';
import { useQuizStore } from '../../core/store/useQuizStore';
import {
  generateCognitiveMindQuestions,
  evaluateCognitiveMindReport,
  CognitiveQuestion,
  CognitiveQuestionAttempt,
  CognitiveMindReport,
} from '../../core/assessment/cognitiveAssessmentEngine';
import { detectTypingSlip } from '../../core/typingSlipDetector';
import { playClickSound, playCorrectSound, playErrorSound, playLevelUpFanfare } from '../../core/soundEffects';

const TABLE_OPTIONS = [
  {
    limit: 10,
    title: 'Tables 1 to 10',
    subtitle: 'Foundational arithmetic & single-digit multiplication',
    emoji: '🌱',
    badge: 'Beginner',
    tagColor: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
  },
  {
    limit: 12,
    title: 'Tables 1 to 12',
    subtitle: 'Elementary & middle-school curriculum standard',
    emoji: '⚡',
    badge: 'Standard',
    tagColor: 'from-sky-500/20 to-cyan-500/20 text-sky-400 border-sky-500/30',
  },
  {
    limit: 20,
    title: 'Tables 1 to 20',
    subtitle: 'Competitive exams (SSC, Banking, CAT) & Vedic speed math',
    emoji: '🚀',
    badge: 'Recommended',
    tagColor: 'from-violet-500/20 to-fuchsia-500/20 text-violet-400 border-violet-500/30',
  },
  {
    limit: 30,
    title: 'Tables 1 to 30',
    subtitle: 'Advanced speed calculations & high mental automaticity',
    emoji: '🔥',
    badge: 'Advanced',
    tagColor: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
  },
  {
    limit: 50,
    title: 'Tables 50+',
    subtitle: 'Grandmaster level mental arithmetic & memory athlete',
    emoji: '👑',
    badge: 'Master',
    tagColor: 'from-rose-500/20 to-red-500/20 text-rose-400 border-rose-500/30',
  },
];

export function InitialAssessmentFlow() {
  const { completeInitialOnboarding } = useQuizStore();

  const [step, setStep] = useState<'declaration' | 'quiz' | 'completed'>('declaration');
  const [selectedLimit, setSelectedLimit] = useState<number>(20);
  const [targetQuestionCount, setTargetQuestionCount] = useState<number>(25);

  // Diagnostic Assessment State (25 non-trivial questions across 4 phases)
  const [questions, setQuestions] = useState<CognitiveQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [inputVal, setInputVal] = useState<string>('');
  const [attempts, setAttempts] = useState<CognitiveQuestionAttempt[]>([]);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  const [isAnswerWrong, setIsAnswerWrong] = useState<boolean>(false);
  const [lastSlipMessage, setLastSlipMessage] = useState<string | null>(null);

  // Final Computed Report
  const [report, setReport] = useState<CognitiveMindReport | null>(null);

  // Initialize and start the diagnostic quiz
  const handleStartQuiz = () => {
    playClickSound();
    const qs = generateCognitiveMindQuestions(selectedLimit, targetQuestionCount);
    setQuestions(qs);
    setCurrentIdx(0);
    setAttempts([]);
    setInputVal('');
    setLastSlipMessage(null);
    setQuestionStartTime(Date.now());
    setStep('quiz');
  };

  const advanceToNext = useCallback(
    (attempt: CognitiveQuestionAttempt) => {
      const nextAttempts = [...attempts, attempt];
      setAttempts(nextAttempts);

      if (currentIdx + 1 < questions.length) {
        setCurrentIdx((idx) => idx + 1);
        setInputVal('');
        setLastSlipMessage(null);
        setQuestionStartTime(Date.now());
      } else {
        // Complete Assessment & Generate Psychological Mind Report
        playLevelUpFanfare();
        const finalReport = evaluateCognitiveMindReport(nextAttempts, selectedLimit);
        setReport(finalReport);
        setStep('completed');
      }
    },
    [attempts, currentIdx, questions.length, selectedLimit]
  );

  const checkAnswer = useCallback(
    (val: string) => {
      const currentQ = questions[currentIdx];
      if (!currentQ) return;

      const parsed = parseInt(val, 10);
      if (isNaN(parsed)) return;

      const elapsed = Date.now() - questionStartTime;
      const expected = currentQ.answer;

      if (parsed === expected) {
        playCorrectSound();
        advanceToNext({
          question: currentQ,
          userAnswer: parsed,
          isCorrect: true,
          latencyMs: elapsed,
          isSkipped: false,
          isTypingSlip: false,
        });
      } else if (val.length >= String(expected).length) {
        // Check for typing slip (e.g. adjacent numpad fat-finger or digit transposition)
        const parsedAnswer = parseInt(val, 10);
        const slipDiagnosis = isNaN(parsedAnswer)
          ? { isSlip: false, explanation: '' }
          : detectTypingSlip(parsedAnswer, expected, currentQ.num1, currentQ.num2);
        if (slipDiagnosis.isSlip) {
          playClickSound();
          setLastSlipMessage(`Keypad slip detected (${slipDiagnosis.explanation || 'adjacent key'}). Try again!`);
          setTimeout(() => {
            setInputVal('');
            setLastSlipMessage(null);
          }, 650);
          return;
        }

        // Genuine calculation error
        playErrorSound();
        setIsAnswerWrong(true);
        setTimeout(() => {
          setIsAnswerWrong(false);
          advanceToNext({
            question: currentQ,
            userAnswer: parsed,
            isCorrect: false,
            latencyMs: elapsed,
            isSkipped: false,
            isTypingSlip: false,
          });
        }, 450);
      }
    },
    [questions, currentIdx, questionStartTime, advanceToNext]
  );

  const handleSkipQuestion = useCallback(() => {
    if (step !== 'quiz' || questions.length === 0) return;
    playClickSound();
    const currentQ = questions[currentIdx];
    if (!currentQ) return;

    const elapsed = Date.now() - questionStartTime;
    advanceToNext({
      question: currentQ,
      userAnswer: 'pass',
      isCorrect: false,
      latencyMs: elapsed,
      isSkipped: true,
      isTypingSlip: false,
    });
  }, [step, questions, currentIdx, questionStartTime, advanceToNext]);

  const handleDigitInput = useCallback(
    (digit: string) => {
      if (step !== 'quiz' || questions.length === 0 || isAnswerWrong) return;
      playClickSound();
      setInputVal((prev) => {
        const next = prev + digit;
        checkAnswer(next);
        return next;
      });
    },
    [step, questions.length, isAnswerWrong, checkAnswer]
  );

  const handleBackspace = useCallback(() => {
    if (step !== 'quiz' || isAnswerWrong) return;
    playClickSound();
    setInputVal((prev) => prev.slice(0, -1));
  }, [step, isAnswerWrong]);

  // Physical keyboard support
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (step !== 'quiz') return;
      if (e.key >= '0' && e.key <= '9') {
        e.preventDefault();
        handleDigitInput(e.key);
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        handleBackspace();
      } else if (e.key === ' ' || e.key === 'Escape') {
        e.preventDefault();
        handleSkipQuestion();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [step, handleDigitInput, handleBackspace, handleSkipQuestion]);

  // Finish onboarding and save results into user profile
  const handleFinishOnboarding = () => {
    playClickSound();
    const baselineScore = report ? report.accuracyRate : 80;
    completeInitialOnboarding(selectedLimit, baselineScore);
  };

  const currentQ = questions[currentIdx];

  const phaseTagStyles = useMemo(() => {
    if (!currentQ) return { bg: 'bg-violet-500/10 text-violet-400 border-violet-500/20', icon: '🧠' };
    switch (currentQ.phase) {
      case 'automaticity':
        return { bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', icon: '⚡' };
      case 'domain_mastery':
        return { bg: 'bg-violet-500/10 text-violet-400 border-violet-500/20', icon: '🎯' };
      case 'decomposition':
        return { bg: 'bg-amber-500/10 text-amber-400 border-amber-500/20', icon: '🧠' };
      case 'speed_stamina':
        return { bg: 'bg-rose-500/10 text-rose-400 border-rose-500/20', icon: '🔥' };
      default:
        return { bg: 'bg-violet-500/10 text-violet-400 border-violet-500/20', icon: '✨' };
    }
  }, [currentQ]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/95 backdrop-blur-xl overflow-y-auto">
      {/* Flutter style elevated dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="w-full max-w-xl bg-slate-900/90 border border-slate-800/80 rounded-3xl p-5 sm:p-8 shadow-2xl shadow-indigo-950/40 relative overflow-hidden my-auto max-h-[92vh] overflow-y-auto"
      >
        {/* Subtle decorative background gradient orbs */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

        <AnimatePresence mode="wait">
          {/* ========================================================================= */}
          {/* STEP 1: SELF DECLARATION & TEST CALIBRATION                               */}
          {/* ========================================================================= */}
          {step === 'declaration' && (
            <motion.div
              key="declaration"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              {/* Header */}
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold">
                  <Brain className="w-3.5 h-3.5 text-violet-400" />
                  <span>Mental Capability Assessment</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  How many tables have you learned?
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                  We dynamically calibrate a 25-question mental arithmetic diagnostic benchmark (excluding trivial multiples like ×1) to judge your genuine baseline.
                </p>
              </div>

              {/* Table Options Selection */}
              <div className="space-y-2.5">
                {TABLE_OPTIONS.map((opt) => {
                  const isSelected = selectedLimit === opt.limit;
                  return (
                    <motion.button
                      key={opt.limit}
                      type="button"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => {
                        playClickSound();
                        setSelectedLimit(opt.limit);
                      }}
                      className={`w-full p-3.5 sm:p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-violet-950/40 border-violet-500/70 shadow-lg shadow-violet-950/40 ring-1 ring-violet-500/40'
                          : 'bg-slate-950/50 border-slate-800/80 hover:bg-slate-800/40 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{opt.emoji}</span>
                        <div>
                          <div className="text-sm font-bold text-white flex items-center gap-2">
                            <span>{opt.title}</span>
                            <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border ${opt.tagColor}`}>
                              {opt.badge}
                            </span>
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">{opt.subtitle}</div>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-violet-400 bg-violet-600' : 'border-slate-700'
                      }`}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Diagnostic Depth Selector (20Q or 25Q) */}
              <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <Activity className="w-4 h-4 text-violet-400" />
                  <span>Cognitive Diagnostic Questions</span>
                </div>
                <div className="flex items-center p-0.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono font-semibold">
                  {[20, 25, 30].map((cnt) => (
                    <button
                      key={cnt}
                      type="button"
                      onClick={() => {
                        playClickSound();
                        setTargetQuestionCount(cnt);
                      }}
                      className={`px-2.5 py-1 rounded-lg transition-colors ${
                        targetQuestionCount === cnt ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {cnt}Q
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Launch CTA */}
              <button
                type="button"
                onClick={handleStartQuiz}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-violet-600/30 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <span>Begin Mental Capability Assessment</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* STEP 2: HIGH-PRECISION 25-QUESTION MENTAL ARITHMETIC DIAGNOSTIC TEST     */}
          {/* ========================================================================= */}
          {step === 'quiz' && currentQ && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4 sm:space-y-5"
            >
              {/* Header: Progress Bar & Phase Badge */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-400 font-semibold">
                    Question <span className="text-white">{currentIdx + 1}</span> of {questions.length}
                  </span>
                  <div className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border flex items-center gap-1.5 ${phaseTagStyles.bg}`}>
                    <span>{phaseTagStyles.icon}</span>
                    <span>{currentQ.phaseTitle}</span>
                  </div>
                </div>

                {/* Smooth Progress Track */}
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-emerald-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIdx) / questions.length) * 100}%` }}
                    transition={{ ease: 'easeOut', duration: 0.2 }}
                  />
                </div>
              </div>

              {/* Arithmetic Question Card */}
              <div
                className={`py-8 sm:py-10 px-4 rounded-3xl border transition-all text-center space-y-3 relative overflow-hidden ${
                  isAnswerWrong
                    ? 'bg-rose-950/30 border-rose-500/70 shadow-lg shadow-rose-950/50'
                    : 'bg-slate-950/80 border-slate-800 shadow-xl'
                }`}
              >
                <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                  {currentQ.cognitiveFocus}
                </div>

                <div className="text-4xl sm:text-6xl font-black font-mono text-white tracking-wide flex items-center justify-center gap-3">
                  <span>{currentQ.num1}</span>
                  <span className="text-violet-400">{currentQ.operator}</span>
                  <span>{currentQ.num2}</span>
                  <span className="text-slate-600">=</span>
                  <div className={`min-w-[80px] h-14 border-b-2 flex items-center justify-center font-mono text-3xl sm:text-5xl ${
                    isAnswerWrong ? 'border-rose-500 text-rose-400' : 'border-emerald-400 text-emerald-400'
                  }`}>
                    {inputVal || <span className="text-slate-700 animate-pulse">?</span>}
                  </div>
                </div>

                {/* Slip notification alert */}
                {lastSlipMessage && (
                  <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full animate-bounce">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{lastSlipMessage}</span>
                  </div>
                )}
              </div>

              {/* Tactile On-Screen Numpad */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5 max-w-xs mx-auto">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '⌫'].map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => {
                      if (k === 'C') {
                        playClickSound();
                        setInputVal('');
                      } else if (k === '⌫') {
                        handleBackspace();
                      } else {
                        handleDigitInput(k);
                      }
                    }}
                    className={`py-3.5 sm:py-4 rounded-2xl font-mono text-lg font-bold transition-all active:scale-95 ${
                      k === '⌫' || k === 'C'
                        ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        : 'bg-slate-800/80 hover:bg-violet-600/20 text-white border border-slate-700/60'
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>

              {/* Pass / Skip Button */}
              <div className="flex justify-center pt-1">
                <button
                  type="button"
                  onClick={handleSkipQuestion}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5 rounded-xl hover:bg-slate-800/60 transition-colors"
                >
                  <SkipForward className="w-3.5 h-3.5" />
                  <span>Don&apos;t know? Pass to next question</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* STEP 3: PSYCHOMETRIC REPORT, BRAIN ARCHETYPE & PROGRESSIVE UNLOCKS       */}
          {/* ========================================================================= */}
          {step === 'completed' && report && (
            <motion.div
              key="completed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6 text-center"
            >
              {/* Brain Archetype Emblem */}
              <div className="inline-flex p-4 rounded-3xl bg-gradient-to-tr from-violet-600/20 to-emerald-500/20 border border-violet-500/30 text-emerald-400 shadow-xl shadow-emerald-500/10">
                <span className="text-4xl">{report.brainArchetype.icon}</span>
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold font-mono px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300">
                  <span>MAQ {report.maqScore} • Top {100 - report.speedPercentile}% National Speed</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {report.brainArchetype.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                  {report.brainArchetype.description}
                </p>
              </div>

              {/* Primary Diagnostic Metrics */}
              <div className="grid grid-cols-3 gap-2.5 text-center font-mono">
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Median Speed</div>
                  <div className="text-lg sm:text-xl font-bold text-sky-400 mt-0.5">
                    {(report.medianLatencyMs / 1000).toFixed(1)}s
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Precision</div>
                  <div className="text-lg sm:text-xl font-bold text-emerald-400 mt-0.5">
                    {report.accuracyRate}%
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Automaticity</div>
                  <div className="text-lg sm:text-xl font-bold text-amber-400 mt-0.5">
                    {report.synapticAutomaticityRate}%
                  </div>
                </div>
              </div>

              {/* 4-Dimension Cognitive Radar Bars */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-left space-y-3">
                <div className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-violet-400" />
                    <span>Cognitive Dimension Breakdown</span>
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Calibrated via 25 Questions</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <div className="flex justify-between text-slate-400 mb-1">
                      <span>Synaptic Speed</span>
                      <span className="font-mono text-white">{report.dimensionScores.synapticSpeed}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-sky-400" style={{ width: `${report.dimensionScores.synapticSpeed}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-400 mb-1">
                      <span>Working Memory Capacity</span>
                      <span className="font-mono text-white">{report.dimensionScores.workingMemory}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-violet-400" style={{ width: `${report.dimensionScores.workingMemory}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-400 mb-1">
                      <span>Calculation Stamina</span>
                      <span className="font-mono text-white">{report.dimensionScores.stamina}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-emerald-400" style={{ width: `${report.dimensionScores.stamina}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottlenecks / Hesitation Facts (if any) */}
              {report.hesitationFacts.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-left space-y-2">
                  <div className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Friction Points Diagnosed</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                    {report.hesitationFacts.map((hf, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300"
                      >
                        {hf.prompt} = {hf.answer} ({(hf.latencyMs / 1000).toFixed(1)}s)
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Progressive Feature Unlocks */}
              <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 text-left space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Personalized Roadmap Unlocked</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                    <span className="flex items-center gap-2 font-medium">
                      <Check className="w-3.5 h-3.5" />
                      Table ×{report.prescribedRoadmap.initialTableFocus} Associative Learning Studio
                    </span>
                    <span className="text-[10px] font-bold uppercase bg-emerald-500/20 px-2 py-0.5 rounded-full">
                      Ready
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-300">
                    <span className="flex items-center gap-2 font-medium">
                      <Check className="w-3.5 h-3.5" />
                      Calculation Techniques (Learn • Practice • Exercise)
                    </span>
                    <span className="text-[10px] font-bold uppercase bg-violet-500/20 px-2 py-0.5 rounded-full">
                      Ready
                    </span>
                  </div>
                </div>
              </div>

              {/* Primary CTA */}
              <button
                type="button"
                onClick={handleFinishOnboarding}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <span>Enter Personalized Learning Studio (+100 XP)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
