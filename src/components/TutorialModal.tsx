'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Brain, Lightbulb, Volume2, Sparkles } from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { useTranslations } from 'next-intl';
import { getLocalizedTutorialLesson } from '../i18n/contentTranslations';

interface TutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic?: 'left_to_right' | 'complements' | 'split_add' | 'rounding' | 'squares_5' | 'near_50' | 'anzan';
}

interface TutorialLesson {
  id: string;
  title: string;
  subtitle: string;
  exampleProblem: string;
  description: string;
  steps: {
    title: string;
    subVocalization: string;
    bufferValue: string | number;
    explanation: string;
    formula?: string;
  }[];
  keyTakeaway: string;
}

const LESSONS: Record<string, TutorialLesson> = {
  left_to_right: {
    id: 'left_to_right',
    title: 'Left-to-Right Accumulator Method',
    subtitle: 'Eliminate school-style carry digits forever',
    exampleProblem: '57 + 68',
    description: 'School math forces you to add 7+8=15, write 5 and carry 1. Your working memory has to store ghost digits while calculating tens. Instead, always add from Most Significant Digit to Least Significant Digit.',
    steps: [
      {
        title: 'Step 1: Add the Tens (Leading Digits)',
        subVocalization: 'Echo in your mind: "110"',
        bufferValue: 110,
        explanation: 'Decompose: 50 + 60 = 110. Your mental accumulator is now 110. You instantly know the approximate answer is > 110.',
        formula: '50 + 60 = 110',
      },
      {
        title: 'Step 2: Add the First Units Digit',
        subVocalization: 'Echo: "117"',
        bufferValue: 117,
        explanation: 'Merge the 7 into your running accumulator: 110 + 7 = 117.',
        formula: '110 + 7 = 117',
      },
      {
        title: 'Step 3: Add the Final Units Digit',
        subVocalization: 'Resolve to: "125"',
        bufferValue: 125,
        explanation: 'Add the remaining 8: 117 + 8 = 125. The result is finished, with zero paper carries stored.',
        formula: '117 + 8 = 125',
      },
    ],
    keyTakeaway: 'Always update a single running sum. The auditory echo in your head holds the number so your visual cortex stays relaxed.',
  },
  complements: {
    id: 'complements',
    title: 'Complements & Compensation Subtraction',
    subtitle: 'Stop borrowing across columns',
    exampleProblem: '84 - 38',
    description: 'Borrowing 1 from 8 to make 14 is slow and prone to slips. Instead, round the subtrahend up to the nearest clean decade and refund the difference.',
    steps: [
      {
        title: 'Step 1: Round Subtrahend to Decade',
        subVocalization: 'Over-subtracted by +2',
        bufferValue: '40 (Overshot)',
        explanation: '38 is awkward. Round 38 up to 40. The complement (refund) is 40 - 38 = 2.',
        formula: '38 -> 40 (Deficit: +2)',
      },
      {
        title: 'Step 2: Subtract Clean Decade',
        subVocalization: 'Echo: "44"',
        bufferValue: 44,
        explanation: 'Clean mental subtraction: 84 - 40 = 44.',
        formula: '84 - 40 = 44',
      },
      {
        title: 'Step 3: Refund the Complement',
        subVocalization: 'Resolve to: "46"',
        bufferValue: 46,
        explanation: 'Since you subtracted 2 too much, add 2 back: 44 + 2 = 46.',
        formula: '44 + 2 = 46',
      },
    ],
    keyTakeaway: 'Whenever subtracting a number ending in 7, 8, or 9, round up to the decade and add the complement back.',
  },
  split_add: {
    id: 'split_add',
    title: 'Split-and-Add Multiplication',
    subtitle: 'Master Tables 13 through 20 effortlessly',
    exampleProblem: '17 × 6',
    description: 'Break 17 into (10 + 7) and multiply each part separately, then combine left-to-right.',
    steps: [
      {
        title: 'Step 1: Multiply the Tens Base',
        subVocalization: 'Base: "60"',
        bufferValue: 60,
        explanation: '10 × 6 = 60. Hold 60 in your mental buffer.',
        formula: '10 × 6 = 60',
      },
      {
        title: 'Step 2: Multiply the Units',
        subVocalization: 'Part 2: "42"',
        bufferValue: 42,
        explanation: '7 × 6 = 42.',
        formula: '7 × 6 = 42',
      },
      {
        title: 'Step 3: Combine Left-to-Right',
        subVocalization: 'Echo: "102"',
        bufferValue: 102,
        explanation: 'Add 60 + 42 = 102.',
        formula: '60 + 42 = 102',
      },
    ],
    keyTakeaway: 'Distribute multiplication across decade partitions: (10 × k) + (units × k).',
  },
  rounding: {
    id: 'rounding',
    title: 'Rounding & Compensation Multiplication',
    subtitle: 'Multiplying numbers near 30, 40, 50, etc.',
    exampleProblem: '29 × 7',
    description: 'When multiplying by 19, 29, 39, 49, round up to the decade (30) and subtract the overshot unit.',
    steps: [
      {
        title: 'Step 1: Round to Decade and Multiply',
        subVocalization: 'Base: "210"',
        bufferValue: 210,
        explanation: '29 is 30 - 1. Calculate 30 × 7 = 210.',
        formula: '30 × 7 = 210',
      },
      {
        title: 'Step 2: Calculate Overhang Deficit',
        subVocalization: 'Deficit: 1 × 7 = 7',
        bufferValue: '-7',
        explanation: 'We multiplied by 30 instead of 29, so we overshot by 1 × 7 = 7.',
        formula: '1 × 7 = 7',
      },
      {
        title: 'Step 3: Subtract Overhang',
        subVocalization: 'Resolve to: "203"',
        bufferValue: 203,
        explanation: '210 - 7 = 203.',
        formula: '210 - 7 = 203',
      },
    ],
    keyTakeaway: '(Decade × k) - (Deficit × k) takes 1 second instead of 8 seconds.',
  },
  squares_5: {
    id: 'squares_5',
    title: 'Vedic Ekadhikena Rule for Numbers Ending in 5',
    subtitle: 'Instant squaring of 15, 25, 35, 45, ..., 95',
    exampleProblem: '75²',
    description: 'Any number ending in 5 can be squared in under two seconds using the prefix rule: N × (N + 1) | 25.',
    steps: [
      {
        title: 'Step 1: Multiply Prefix by (Prefix + 1)',
        subVocalization: '7 × 8 = 56',
        bufferValue: 56,
        explanation: 'The tens digit is 7. Multiply 7 by the next integer (8): 7 × 8 = 56.',
        formula: '7 × (7 + 1) = 56',
      },
      {
        title: 'Step 2: Append 25 to the End',
        subVocalization: 'Combine: "5625"',
        bufferValue: 5625,
        explanation: '5² is always 25. Append 25 behind 56: 5625.',
        formula: '56 | 25 = 5625',
      },
    ],
    keyTakeaway: 'Always: Prefix × (Prefix + 1) followed by 25.',
  },
  near_50: {
    id: 'near_50',
    title: 'Base 50 Squaring Shortcut',
    subtitle: 'Squaring numbers between 41 and 59',
    exampleProblem: '53²',
    description: 'Anchor to Base 25: (25 ± distance) | (distance)²',
    steps: [
      {
        title: 'Step 1: Find Distance from 50',
        subVocalization: 'Offset: +3',
        bufferValue: '+3',
        explanation: '53 is 3 above 50 (x = 3).',
        formula: '53 - 50 = +3',
      },
      {
        title: 'Step 2: Add Offset to 25',
        subVocalization: 'Leading: "28"',
        bufferValue: 28,
        explanation: '25 + 3 = 28. These are the leading two digits.',
        formula: '25 + 3 = 28',
      },
      {
        title: 'Step 3: Append Offset Squared as 2 Digits',
        subVocalization: 'Trailing: "09" -> "2809"',
        bufferValue: 2809,
        explanation: '3² = 9 -> pad to two digits: "09". Combine: 2809.',
        formula: '28 | 09 = 2809',
      },
    ],
    keyTakeaway: '(25 ± x) | x². If x² < 10, write it as 0x.',
  },
  anzan: {
    id: 'anzan',
    title: 'Anzan Flash Working Memory Engine',
    subtitle: 'Auditory echo and subconscious accumulator',
    exampleProblem: 'Flash sequence: [14, 28, 35]',
    description: 'Numbers flash on screen and vanish after 800ms. Do not write or draw numbers in air. Speak the running accumulator inside your mind.',
    steps: [
      {
        title: 'Flash 1: 14',
        subVocalization: 'Hear: "14"',
        bufferValue: 14,
        explanation: 'Register 14 into the mental buffer. Screen blanks.',
      },
      {
        title: 'Flash 2: 28',
        subVocalization: 'Add tens: 14+20=34, units: 34+8=42. Hear: "42"',
        bufferValue: 42,
        explanation: 'Immediately fuse 28 into 14 using Left-to-Right addition. Overwrite buffer with 42.',
      },
      {
        title: 'Flash 3: 35',
        subVocalization: '42+30=72, 72+5=77. Hear: "77"',
        bufferValue: 77,
        explanation: 'Fuse 35 into 42. Output final held sum: 77.',
      },
    ],
    keyTakeaway: 'The screen will go dark. Trust your internal auditory loop and fuse numbers without pen and paper.',
  },
};

export const TutorialModal: React.FC<TutorialModalProps> = ({ isOpen, onClose, topic = 'left_to_right' }) => {
  const { locale } = useQuizStore();
  const tTutorial = useTranslations('tutorial');
  const tCommon = useTranslations('common');

  const [activeTopic, setActiveTopic] = useState<string>(topic);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  if (!isOpen) return null;

  const lesson = LESSONS[activeTopic] || LESSONS.left_to_right;
  const locLesson = getLocalizedTutorialLesson(
    lesson.id,
    locale,
    lesson.title,
    lesson.subtitle
  );
  const currentStep = lesson.steps[currentStepIndex] || lesson.steps[0];

  const handleNextStep = () => {
    if (currentStepIndex < lesson.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleSelectTopic = (key: string) => {
    setActiveTopic(key);
    setCurrentStepIndex(0);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  {tTutorial('modalTitle')}
                  <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 font-normal">
                    Interactive
                  </span>
                </h2>
                <p className="text-xs text-slate-400">{tTutorial('modalSubtitle')}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Topic Pills */}
          <div className="flex items-center gap-2 px-6 py-3 border-b border-slate-800/80 bg-slate-900/50 overflow-x-auto text-xs scrollbar-none">
            {Object.entries(LESSONS).map(([key, item]) => {
              const loc = getLocalizedTutorialLesson(item.id, locale, item.title, item.subtitle);
              return (
                <button
                  key={key}
                  onClick={() => handleSelectTopic(key)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
                    activeTopic === key
                      ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                      : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {loc.title.split(' ')[0]} {item.exampleProblem}
                </button>
              );
            })}
          </div>

          {/* Content Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Title & Overview */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white tracking-tight">{locLesson.title}</h3>
                <span className="text-sm font-mono font-semibold px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {lesson.exampleProblem}
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{locLesson.subtitle}</p>
            </div>

            {/* Interactive Step Slider / Stepper */}
            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>
                  {tTutorial('step')} {currentStepIndex + 1} / {lesson.steps.length}
                </span>
                <span className="text-violet-400 font-semibold">{currentStep.title}</span>
              </div>

              {/* Progress Track */}
              <div className="grid grid-cols-3 gap-2">
                {lesson.steps.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentStepIndex(idx)}
                    className={`h-2 rounded-full cursor-pointer transition-all ${
                      idx <= currentStepIndex ? 'bg-violet-500 shadow-sm shadow-violet-500/50' : 'bg-slate-800'
                    }`}
                  />
                ))}
              </div>

              {/* Step Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTopic}_${currentStepIndex}`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-4 pt-2"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Auditory Echo Box */}
                    <div className="p-4 rounded-lg bg-slate-900 border border-violet-500/30 flex flex-col justify-between">
                      <div className="flex items-center gap-2 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        <Volume2 className="w-4 h-4" />
                        {tTutorial('innerEcho')}
                      </div>
                      <div className="text-lg font-mono font-bold text-white bg-slate-950 p-3 rounded-md border border-slate-800">
                        {currentStep.subVocalization}
                      </div>
                      <p className="text-xs text-slate-400 mt-2">
                        Sub-vocalize this value in your mind to hold intermediate state.
                      </p>
                    </div>

                    {/* Running Buffer Box */}
                    <div className="p-4 rounded-lg bg-slate-900 border border-emerald-500/30 flex flex-col justify-between">
                      <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        <Sparkles className="w-4 h-4" />
                        Accumulator Buffer State
                      </div>
                      <div className="text-2xl font-mono font-black text-emerald-400 bg-slate-950 p-3 rounded-md border border-slate-800 flex items-center justify-between">
                        <span>{currentStep.bufferValue}</span>
                        {currentStep.formula && (
                          <span className="text-xs text-slate-500 font-normal">{currentStep.formula}</span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-2">
                        Zero paper carries. Value resides directly in the working accumulator.
                      </p>
                    </div>
                  </div>

                  {/* Step Explanation */}
                  <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-sm text-slate-300 flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{currentStep.explanation}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Step Navigation Controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handlePrevStep}
                  disabled={currentStepIndex === 0}
                  className="flex items-center gap-1 px-4 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-slate-200 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  {tTutorial('prevLesson')}
                </button>

                <button
                  onClick={handleNextStep}
                  disabled={currentStepIndex === lesson.steps.length - 1}
                  className="flex items-center gap-1 px-4 py-2 text-xs font-medium rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-30 disabled:pointer-events-none text-white transition-colors"
                >
                  {tTutorial('nextLesson')}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Key Pedagogical Takeaway */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-violet-950/40 to-slate-900 border border-violet-800/40 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-violet-300 uppercase tracking-wider">{tTutorial('keyTakeaway')}</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{lesson.keyTakeaway}</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 text-sm font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            >
              {tTutorial('closeLab')}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
