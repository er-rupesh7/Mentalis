'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  ArrowUpDown,
  MoveUp,
  MoveDown,
  RotateCcw,
  Sparkles,
  Link as LinkIcon,
  MessageSquare,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';
import {
  MindPracticeQuestion,
  MindQuestionType,
  MatchingPair,
  OrderingItem,
} from '../../core/mind/types';
import { recordPracticeAttempt, normalizeDifficulty } from '../../core/mind/practiceAnalytics';

interface PracticeQuestionCardProps {
  question: MindPracticeQuestion;
  topicId: string;
  onAnswerCompleted?: (isCorrect: boolean) => void;
  className?: string;
}

export const PracticeQuestionCard: React.FC<PracticeQuestionCardProps> = ({
  question,
  topicId,
  onAnswerCompleted,
  className = '',
}) => {
  // Infer question type if not explicitly set
  const inferredType: MindQuestionType =
    question.questionType ||
    (question.matchingPairs && question.matchingPairs.length > 0
      ? 'matching'
      : question.orderingItems && question.orderingItems.length > 0
      ? 'ordering'
      : question.isTrueStatement !== undefined
      ? 'true_false'
      : question.reflectionTips && question.reflectionTips.length > 0
      ? 'reflection'
      : 'multiple_choice');

  // State for multiple choice / identify pattern / scenario selection
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  // State for True / False
  const [selectedBoolean, setSelectedBoolean] = useState<boolean | null>(null);

  // State for Matching
  const [selectedLeftId, setSelectedLeftId] = useState<string | null>(null);
  const [userMatches, setUserMatches] = useState<Record<string, string>>({}); // leftId -> rightId

  // State for Ordering
  const [orderedItems, setOrderedItems] = useState<OrderingItem[]>(() => {
    if (!question.orderingItems) return [];
    // Start in randomized or reverse order for testing
    return [...question.orderingItems].sort(() => 0.5 - Math.random());
  });

  // State for Reflection
  const [reflectionNotes, setReflectionNotes] = useState<string>('');
  const [revealedInsight, setRevealedInsight] = useState<boolean>(false);

  // Generic submission & feedback state
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isUserCorrect, setIsUserCorrect] = useState<boolean>(false);

  const diffNormalized = normalizeDifficulty(question.difficulty);

  const getDifficultyBadge = (diff: string) => {
    switch (diff) {
      case 'easy':
        return 'text-emerald-400 bg-emerald-950/60 border-emerald-700/50';
      case 'medium':
        return 'text-amber-400 bg-amber-950/60 border-amber-700/50';
      case 'hard':
        return 'text-rose-400 bg-rose-950/60 border-rose-700/50';
      default:
        return 'text-slate-400 bg-slate-800 border-slate-700';
    }
  };

  const getQuestionTypeLabel = (type: MindQuestionType) => {
    switch (type) {
      case 'multiple_choice':
        return 'Multiple Choice';
      case 'true_false':
        return 'True / False';
      case 'identify_pattern':
        return 'Identify The Pattern';
      case 'scenario_selection':
        return 'Scenario Selection';
      case 'matching':
        return 'Concept Matching';
      case 'ordering':
        return 'Sequence Ordering';
      case 'reflection':
        return 'Introspective Reflection';
    }
  };

  // Submit handler for Multiple Choice / Scenario / Pattern
  const handleMultipleChoiceSubmit = (optionId: string) => {
    if (isAnswered) return;
    setSelectedOptionId(optionId);
    const chosen = question.options?.find((o) => o.id === optionId);
    const correct = chosen?.isCorrect ?? false;

    setIsAnswered(true);
    setIsUserCorrect(correct);

    recordPracticeAttempt({
      topicId,
      questionId: question.id,
      questionType: inferredType,
      difficulty: diffNormalized,
      isCorrect: correct,
      attemptNumber: 1,
    });

    if (onAnswerCompleted) {
      onAnswerCompleted(correct);
    }
  };

  // Submit handler for True / False
  const handleTrueFalseSubmit = (userChoice: boolean) => {
    if (isAnswered) return;
    setSelectedBoolean(userChoice);
    const correct = userChoice === question.isTrueStatement;

    setIsAnswered(true);
    setIsUserCorrect(correct);

    recordPracticeAttempt({
      topicId,
      questionId: question.id,
      questionType: 'true_false',
      difficulty: diffNormalized,
      isCorrect: correct,
      attemptNumber: 1,
    });

    if (onAnswerCompleted) {
      onAnswerCompleted(correct);
    }
  };

  // Matching interactions
  const handleSelectLeft = (leftId: string) => {
    if (isAnswered) return;
    setSelectedLeftId(leftId);
  };

  const handleSelectRight = (rightId: string) => {
    if (isAnswered || !selectedLeftId) return;
    setUserMatches((prev) => ({
      ...prev,
      [selectedLeftId]: rightId,
    }));
    setSelectedLeftId(null);
  };

  const handleCheckMatching = () => {
    if (!question.matchingPairs || isAnswered) return;
    const allPaired = question.matchingPairs.every((p) => userMatches[p.id] !== undefined);
    if (!allPaired) return;

    const allCorrect = question.matchingPairs.every((p) => userMatches[p.id] === p.id);

    setIsAnswered(true);
    setIsUserCorrect(allCorrect);

    recordPracticeAttempt({
      topicId,
      questionId: question.id,
      questionType: 'matching',
      difficulty: diffNormalized,
      isCorrect: allCorrect,
      attemptNumber: 1,
    });

    if (onAnswerCompleted) {
      onAnswerCompleted(allCorrect);
    }
  };

  // Ordering interactions
  const handleMoveItem = (index: number, direction: 'up' | 'down') => {
    if (isAnswered) return;
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= orderedItems.length) return;

    const updated = [...orderedItems];
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;
    setOrderedItems(updated);
  };

  const handleCheckOrdering = () => {
    if (isAnswered) return;
    const isCorrect = orderedItems.every((item, idx) => item.correctOrder === idx + 1);

    setIsAnswered(true);
    setIsUserCorrect(isCorrect);

    recordPracticeAttempt({
      topicId,
      questionId: question.id,
      questionType: 'ordering',
      difficulty: diffNormalized,
      isCorrect,
      attemptNumber: 1,
    });

    if (onAnswerCompleted) {
      onAnswerCompleted(isCorrect);
    }
  };

  // Reset handler
  const handleReset = () => {
    setSelectedOptionId(null);
    setSelectedBoolean(null);
    setSelectedLeftId(null);
    setUserMatches({});
    setIsAnswered(false);
    setIsUserCorrect(false);
    setRevealedInsight(false);
  };

  const chosenOption = question.options?.find((opt) => opt.id === selectedOptionId);

  return (
    <div
      className={`rounded-2xl border border-slate-800 bg-slate-950/80 shadow-lg overflow-hidden ${className}`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-violet-400 bg-violet-950/60 border border-violet-800/50 px-2 py-0.5 rounded">
            {getQuestionTypeLabel(inferredType)}
          </span>

          {question.isMisconception && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider text-amber-300 bg-amber-950/70 border border-amber-600/50 px-2 py-0.5 rounded">
              <ShieldAlert className="w-3 h-3 text-amber-400" />
              <span>Misconception Check</span>
            </span>
          )}
        </div>

        <span
          className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded border ${getDifficultyBadge(
            diffNormalized
          )}`}
        >
          {diffNormalized}
        </span>
      </div>

      {/* Main Card Body */}
      <div className="p-5 sm:p-6 space-y-4">
        {/* Scenario Text if present */}
        {(question.scenarioText || question.scenarioContext) && (
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/90 text-xs sm:text-sm text-slate-300 italic leading-relaxed">
            &ldquo;{question.scenarioText || question.scenarioContext}&rdquo;
          </div>
        )}

        {/* Prompt */}
        <div className="space-y-1">
          <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
            {question.prompt || question.question}
          </h4>
          {question.isMisconception && question.misconceptionNuance && (
            <p className="text-xs text-amber-300/90 font-medium">
              Note: Pay close attention to contextual boundaries and deliberate intent.
            </p>
          )}
        </div>

        {/* ================================================================= */}
        {/* 1. MULTIPLE CHOICE / IDENTIFY PATTERN / SCENARIO SELECTION */}
        {/* ================================================================= */}
        {(inferredType === 'multiple_choice' ||
          inferredType === 'identify_pattern' ||
          inferredType === 'scenario_selection') &&
          question.options && (
            <div className="space-y-2.5 pt-1">
              {question.options.map((option, optIdx) => {
                const isSelected = selectedOptionId === option.id;

                let optionClass =
                  'bg-slate-900/60 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-900';

                if (isAnswered) {
                  if (option.isCorrect) {
                    optionClass =
                      'bg-emerald-950/40 border-emerald-500/70 text-emerald-100 ring-1 ring-emerald-500/50';
                  } else if (isSelected && !option.isCorrect) {
                    optionClass =
                      'bg-rose-950/40 border-rose-500/70 text-rose-100 ring-1 ring-rose-500/50';
                  } else {
                    optionClass = 'bg-slate-950/30 border-slate-900 text-slate-500 opacity-60';
                  }
                }

                return (
                  <button
                    key={option.id}
                    type="button"
                    disabled={isAnswered}
                    onClick={() => handleMultipleChoiceSubmit(option.id)}
                    className={`w-full p-3.5 sm:p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 ${optionClass}`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 border mt-0.5 ${
                        isAnswered && option.isCorrect
                          ? 'bg-emerald-600 text-white border-emerald-500'
                          : isAnswered && isSelected && !option.isCorrect
                          ? 'bg-rose-600 text-white border-rose-500'
                          : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}
                    >
                      {option.label || (option.displayOrder !== undefined ? option.displayOrder : String.fromCharCode(65 + optIdx))}
                    </span>

                    <div className="flex-1">
                      <span className="font-medium">{option.optionText || option.text}</span>
                    </div>

                    {isAnswered && option.isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    {isAnswered && isSelected && !option.isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

        {/* ================================================================= */}
        {/* 2. TRUE / FALSE */}
        {/* ================================================================= */}
        {inferredType === 'true_false' && (
          <div className="grid grid-cols-2 gap-3 pt-2">
            {[true, false].map((val) => {
              const isSelected = selectedBoolean === val;
              const isCorrectVal = question.isTrueStatement === val;

              let btnClass =
                'bg-slate-900/60 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-900';

              if (isAnswered) {
                if (isCorrectVal) {
                  btnClass =
                    'bg-emerald-950/50 border-emerald-500/70 text-emerald-200 ring-1 ring-emerald-500/50 font-bold';
                } else if (isSelected && !isCorrectVal) {
                  btnClass =
                    'bg-rose-950/50 border-rose-500/70 text-rose-200 ring-1 ring-rose-500/50 font-bold';
                } else {
                  btnClass = 'bg-slate-950/40 border-slate-900 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={String(val)}
                  type="button"
                  disabled={isAnswered}
                  onClick={() => handleTrueFalseSubmit(val)}
                  className={`py-4 px-6 rounded-xl border font-mono uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2 ${btnClass}`}
                >
                  <span>{val ? 'TRUE' : 'FALSE'}</span>
                  {isAnswered && isCorrectVal && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  )}
                  {isAnswered && isSelected && !isCorrectVal && (
                    <XCircle className="w-4 h-4 text-rose-400" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* ================================================================= */}
        {/* 3. MATCHING PAIRS */}
        {/* ================================================================= */}
        {inferredType === 'matching' && question.matchingPairs && (
          <div className="space-y-3 pt-2">
            <p className="text-xs text-slate-400">
              Select an item on the left, then click its corresponding match on the right.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Left Column */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                  Concept / Situation
                </span>
                {question.matchingPairs.map((pair) => {
                  const isSelected = selectedLeftId === pair.id;
                  const isPaired = userMatches[pair.id] !== undefined;

                  return (
                    <button
                      key={pair.id}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleSelectLeft(pair.id)}
                      className={`w-full p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-violet-950/60 border-violet-500 text-violet-200 ring-1 ring-violet-500'
                          : isPaired
                          ? 'bg-slate-900 border-slate-700 text-slate-300'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span>{pair.left}</span>
                      {isPaired && (
                        <span className="block text-[10px] text-violet-400 font-mono mt-1">
                          → Matched
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Right Column */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                  Matching Definition / Antidote
                </span>
                {question.matchingPairs.map((pair) => {
                  const isPairedWithSomething = Object.values(userMatches).includes(pair.id);

                  return (
                    <button
                      key={pair.id}
                      type="button"
                      disabled={isAnswered || !selectedLeftId}
                      onClick={() => handleSelectRight(pair.id)}
                      className={`w-full p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                        isPairedWithSomething
                          ? 'bg-slate-900/80 border-slate-700 text-slate-300'
                          : selectedLeftId
                          ? 'bg-slate-950 border-violet-700/60 text-slate-200 hover:bg-violet-950/30'
                          : 'bg-slate-950 border-slate-800 text-slate-400 opacity-80'
                      }`}
                    >
                      {pair.right}
                    </button>
                  );
                })}
              </div>
            </div>

            {!isAnswered && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleCheckMatching}
                  disabled={
                    !question.matchingPairs.every((p) => userMatches[p.id] !== undefined)
                  }
                  className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold text-xs tracking-wide transition-all"
                >
                  Verify All Matches
                </button>
              </div>
            )}
          </div>
        )}

        {/* ================================================================= */}
        {/* 4. SEQUENCE ORDERING */}
        {/* ================================================================= */}
        {inferredType === 'ordering' && (
          <div className="space-y-3 pt-2">
            <p className="text-xs text-slate-400">
              Arrange these steps in chronological or psychological progression order:
            </p>

            <div className="space-y-2">
              {orderedItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-800 font-mono font-bold text-[11px] text-slate-300 flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-slate-200">{item.text}</span>
                  </div>

                  {!isAnswered && (
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        disabled={idx === 0}
                        onClick={() => handleMoveItem(idx, 'up')}
                        className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30"
                      >
                        <MoveUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        disabled={idx === orderedItems.length - 1}
                        onClick={() => handleMoveItem(idx, 'down')}
                        className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30"
                      >
                        <MoveDown className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {!isAnswered && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleCheckOrdering}
                  className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs tracking-wide transition-all"
                >
                  Verify Step Ordering
                </button>
              </div>
            )}
          </div>
        )}

        {/* ================================================================= */}
        {/* 5. REFLECTION QUESTIONS */}
        {/* ================================================================= */}
        {inferredType === 'reflection' && (
          <div className="space-y-4 pt-1">
            {question.reflectionTips && question.reflectionTips.length > 0 && (
              <div className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-indigo-200 text-xs space-y-1.5">
                <span className="font-mono font-bold uppercase tracking-wider block text-[10px] text-indigo-400">
                  Introspection Guide Tips
                </span>
                <ul className="list-disc pl-4 space-y-1">
                  {question.reflectionTips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                Your Personal Reflection (Private & Local Only)
              </label>
              <textarea
                value={reflectionNotes}
                onChange={(e) => setReflectionNotes(e.target.value)}
                placeholder="Write your honest observation here (e.g., when did you last encounter this in your life?)..."
                rows={3}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>

            {!revealedInsight ? (
              <button
                type="button"
                onClick={() => {
                  setRevealedInsight(true);
                  setIsAnswered(true);
                  recordPracticeAttempt({
                    topicId,
                    questionId: question.id,
                    questionType: 'reflection',
                    difficulty: diffNormalized,
                    isCorrect: true,
                    attemptNumber: 1,
                  });
                  if (onAnswerCompleted) onAnswerCompleted(true);
                }}
                className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs tracking-wide transition-all"
              >
                Reveal Cognitive Scientist&apos;s Perspective
              </button>
            ) : (
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/40 text-xs text-indigo-100 space-y-2 animate-in fade-in">
                <div className="flex items-center gap-1.5 font-bold font-mono uppercase tracking-wider text-indigo-300">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>Key Insight Takeaway</span>
                </div>
                <p className="leading-relaxed">
                  {question.sampleInsight || question.explanation}
                </p>
              </div>
            )}
          </div>
        )}

        {/* ================================================================= */}
        {/* COMPREHENSIVE EXPLANATION AFTER ANSWER (Never just "Correct.") */}
        {/* ================================================================= */}
        {isAnswered && inferredType !== 'reflection' && (
          <div className="space-y-3 pt-3 border-t border-slate-800 animate-in fade-in duration-300">
            {/* Direct Feedback banner */}
            <div
              className={`p-4 rounded-xl border flex items-start gap-3 ${
                isUserCorrect
                  ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200'
                  : 'bg-rose-950/30 border-rose-500/50 text-rose-200'
              }`}
            >
              {isUserCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1 text-xs sm:text-sm">
                <strong className="block font-bold">
                  {isUserCorrect
                    ? 'Correct reasoning.'
                    : 'Not quite. Let’s examine the distinction:'}
                </strong>
                <p className="leading-relaxed">
                  {chosenOption?.feedbackText || question.explanation}
                </p>
              </div>
            </div>

            {/* Antidote advice if provided */}
            {question.antidoteAdvice && (
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-cyan-300 font-bold block mb-0.5">
                    Antidote & Cognitive Defense:
                  </strong>
                  <span>{question.antidoteAdvice}</span>
                </div>
              </div>
            )}

            {/* Reset / Retry option */}
            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors border border-slate-800"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry Question</span>
              </button>

              <span className="text-[11px] text-slate-500 font-mono">
                Anonymous mastery tracking active
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
