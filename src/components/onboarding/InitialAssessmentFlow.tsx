'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain, Zap, CheckCircle2, ChevronRight, Award, Trophy, ArrowRight, Star, Target, ShieldCheck } from 'lucide-react';
import { useQuizStore } from '../../core/store/useQuizStore';
import { playClickSound, playCorrectSound, playErrorSound, playLevelUpFanfare } from '../../core/soundEffects';

interface AssessmentQuestion {
  num1: number;
  num2: number;
  operator: string;
  answer: number;
}

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
    subtitle: 'Competitive exams (SSC, Banking, CAT) & Vedic math',
    emoji: '🚀',
    badge: 'Recommended',
    tagColor: 'from-violet-500/20 to-fuchsia-500/20 text-violet-400 border-violet-500/30',
  },
  {
    limit: 30,
    title: 'Tables 1 to 30',
    subtitle: 'Advanced speed mental calculations & high automaticity',
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

  // Diagnostic Quiz State (5 questions)
  const [questions, setQuestions] = useState<AssessmentQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [inputVal, setInputVal] = useState<string>('');
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [responseTimes, setResponseTimes] = useState<number[]>([]);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  const [isAnswerWrong, setIsAnswerWrong] = useState<boolean>(false);

  const generateDiagnosticQuestions = useCallback((limit: number): AssessmentQuestion[] => {
    const list: AssessmentQuestion[] = [];
    const usedPairs = new Set<string>();

    while (list.length < 5) {
      let n1 = Math.floor(Math.random() * (limit - 2 + 1)) + 2;
      let n2 = Math.floor(Math.random() * 9) + 2;

      // If user selected up to 20 or higher, prioritize the 11-20 or 12-25 range for calibration
      if (limit >= 20 && Math.random() > 0.3) {
        n1 = Math.floor(Math.random() * (Math.min(limit, 20) - 12 + 1)) + 12;
      }

      const key = `${n1}x${n2}`;
      if (!usedPairs.has(key)) {
        usedPairs.add(key);
        list.push({
          num1: n1,
          num2: n2,
          operator: '×',
          answer: n1 * n2,
        });
      }
    }
    return list;
  }, []);

  const handleStartQuiz = () => {
    playClickSound();
    const qs = generateDiagnosticQuestions(selectedLimit);
    setQuestions(qs);
    setCurrentIdx(0);
    setCorrectCount(0);
    setResponseTimes([]);
    setInputVal('');
    setQuestionStartTime(Date.now());
    setStep('quiz');
  };

  const checkAnswer = useCallback((val: string) => {
    const currentQ = questions[currentIdx];
    if (!currentQ) return;

    const parsed = parseInt(val, 10);
    if (isNaN(parsed)) return;

    if (parsed === currentQ.answer) {
      playCorrectSound();
      const elapsed = Date.now() - questionStartTime;
      const nextCorrect = correctCount + 1;
      const nextTimes = [...responseTimes, elapsed];

      setCorrectCount(nextCorrect);
      setResponseTimes(nextTimes);

      if (currentIdx + 1 < questions.length) {
        setCurrentIdx((idx) => idx + 1);
        setInputVal('');
        setQuestionStartTime(Date.now());
      } else {
        // Completed
        playLevelUpFanfare();
        setStep('completed');
      }
    } else if (val.length >= String(currentQ.answer).length) {
      // Wrong answer
      playErrorSound();
      setIsAnswerWrong(true);
      setTimeout(() => {
        setIsAnswerWrong(false);
        setInputVal('');
      }, 500);
    }
  }, [questions, currentIdx, questionStartTime, correctCount, responseTimes]);

  const handleDigitInput = useCallback((digit: string) => {
    if (step !== 'quiz' || questions.length === 0) return;
    playClickSound();
    setInputVal((prev) => {
      const next = prev + digit;
      checkAnswer(next);
      return next;
    });
  }, [step, questions.length, checkAnswer]);

  const handleBackspace = useCallback(() => {
    if (step !== 'quiz') return;
    playClickSound();
    setInputVal((prev) => prev.slice(0, -1));
  }, [step]);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (step !== 'quiz') return;
      if (e.key >= '0' && e.key <= '9') {
        e.preventDefault();
        handleDigitInput(e.key);
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        handleBackspace();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [step, handleDigitInput, handleBackspace]);

  // Finish onboarding
  const handleFinishOnboarding = () => {
    playClickSound();
    const avgTime = responseTimes.length > 0 
      ? responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length 
      : 2500;
    const score = Math.round((correctCount / Math.max(1, questions.length)) * 100);
    completeInitialOnboarding(selectedLimit, score);
  };

  const avgSpeedSec = responseTimes.length > 0
    ? (responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length / 1000).toFixed(1)
    : '2.0';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl overflow-y-auto">
      {/* Flutter style elevated container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="w-full max-w-xl bg-slate-900/90 border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-indigo-950/40 relative overflow-hidden"
      >
        {/* Subtle decorative background gradient pill */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

        <AnimatePresence mode="wait">
          {/* STEP 1: SELF DECLARATION */}
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
                  <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                  <span>Welcome to Mentalis</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  How many tables have you learned?
                </h2>
                <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                  We customize your training roadmap, practice exercises, and shortcuts to match your current baseline.
                </p>
              </div>

              {/* Selection Cards */}
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
                      className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-violet-950/40 border-violet-500/70 shadow-lg shadow-violet-950/40 ring-1 ring-violet-500/40'
                          : 'bg-slate-950/50 border-slate-800/80 hover:bg-slate-800/40 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-2xl p-2 rounded-xl bg-slate-800/60 border border-slate-700/50">
                          {opt.emoji}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-base">
                              {opt.title}
                            </span>
                            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${opt.tagColor}`}>
                              {opt.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {opt.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSelected ? 'border-violet-400 bg-violet-500' : 'border-slate-700'
                      }`}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleStartQuiz}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-violet-600/30 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span>Start 5-Question Calibration Diagnostic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[11px] text-slate-500 mt-2">
                  Takes less than 30 seconds • Establishes your cognitive speed & accuracy baseline
                </p>
              </div>
            </motion.div>
          )}

          {/* STEP 2: 5-QUESTION RAPID DIAGNOSTIC */}
          {step === 'quiz' && questions.length > 0 && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6"
            >
              {/* Progress & Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-violet-300">
                    CALIBRATION TEST
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Question {currentIdx + 1} of {questions.length}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 to-emerald-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Question Card */}
              <div className="py-8 px-6 rounded-3xl bg-slate-950/80 border border-slate-800/80 text-center space-y-4 shadow-inner">
                <div className="text-slate-400 text-xs font-medium tracking-wide">
                  Calculate instantly without pen & paper
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-wider flex items-center justify-center gap-3">
                  <span>{questions[currentIdx].num1}</span>
                  <span className="text-violet-400 text-3xl font-light">×</span>
                  <span>{questions[currentIdx].num2}</span>
                  <span className="text-slate-500 text-3xl font-light">=</span>
                  <div className={`min-w-[70px] h-14 border-b-2 flex items-center justify-center font-mono ${
                    isAnswerWrong ? 'border-rose-500 text-rose-400 bg-rose-500/10' : 'border-violet-500 text-emerald-400'
                  }`}>
                    {inputVal || <span className="text-slate-700 animate-pulse">?</span>}
                  </div>
                </div>
              </div>

              {/* Mobile / Touch Numpad */}
              <div className="grid grid-cols-3 gap-2.5 max-w-xs mx-auto">
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
                    className={`py-3.5 rounded-2xl font-mono text-lg font-bold transition-all active:scale-95 ${
                      k === '⌫' || k === 'C'
                        ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        : 'bg-slate-800/80 hover:bg-violet-600/20 text-white border border-slate-700/60'
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: BASELINE COMPLETE & PROGRESSIVE UNLOCK */}
          {step === 'completed' && (
            <motion.div
              key="completed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6 text-center"
            >
              {/* Badge Icon */}
              <div className="inline-flex p-4 rounded-3xl bg-gradient-to-tr from-violet-600/20 to-emerald-500/20 border border-violet-500/30 text-emerald-400 shadow-xl shadow-emerald-500/10">
                <Trophy className="w-10 h-10 text-emerald-400" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Baseline Calibrated!
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Great job! Your cognitive speed and table foundation have been recorded.
                </p>
              </div>

              {/* Baseline Metrics */}
              <div className="grid grid-cols-3 gap-2.5 text-center font-mono">
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Speed</div>
                  <div className="text-xl font-bold text-sky-400 mt-0.5">{avgSpeedSec}s</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Accuracy</div>
                  <div className="text-xl font-bold text-emerald-400 mt-0.5">
                    {Math.round((correctCount / questions.length) * 100)}%
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Bonus XP</div>
                  <div className="text-xl font-bold text-amber-400 mt-0.5">+50 XP</div>
                </div>
              </div>

              {/* Progressive Unlocks Preview */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-left space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Curriculum & Features Unlocked</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                    <span className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Learn Tables Studio (Random Associative Mode)
                    </span>
                    <span className="text-[10px] font-bold uppercase bg-emerald-500/20 px-2 py-0.5 rounded-full">
                      Ready
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-300">
                    <span className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Automaticity Heatmap & Single Table Mastery
                    </span>
                    <span className="text-[10px] font-bold uppercase bg-violet-500/20 px-2 py-0.5 rounded-full">
                      Ready
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400">
                    <span className="flex items-center gap-2 font-medium">
                      <Target className="w-3.5 h-3.5 text-slate-500" />
                      Multiplication Shortcuts (Vedic & Trachtenberg)
                    </span>
                    <span className="text-[10px] font-bold uppercase bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">
                      Unlocking
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
                <span>Enter Table Learning Studio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
