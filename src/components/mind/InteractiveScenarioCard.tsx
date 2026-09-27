'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  HelpCircle,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ShieldCheck,
  RotateCcw,
  Share2,
  TrendingUp,
  Briefcase,
  Smartphone,
  CreditCard,
  Heart,
  Newspaper,
  ArrowRight,
} from 'lucide-react';
import { InteractiveScenarioData, InteractiveScenarioOption } from '../../core/mind/types';
import { recordPracticeAttempt } from '../../core/mind/practiceAnalytics';

interface InteractiveScenarioCardProps {
  scenario: InteractiveScenarioData;
  onAnswerComplete?: (isCorrect: boolean, optionId: string) => void;
  className?: string;
}

export const InteractiveScenarioCard: React.FC<InteractiveScenarioCardProps> = ({
  scenario,
  onAnswerComplete,
  className = '',
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const getSourceIcon = (type?: string) => {
    switch (type) {
      case 'social_media':
        return Smartphone;
      case 'workplace':
        return Briefcase;
      case 'personal_finance':
        return CreditCard;
      case 'family_relationships':
        return Heart;
      case 'news':
        return Newspaper;
      default:
        return TrendingUp;
    }
  };

  const SourceIcon = getSourceIcon(scenario.vignetteSourceType);

  const handleSelectOption = (optionId: string) => {
    if (isSubmitted) return;
    setSelectedOptionId(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOptionId || isSubmitted) return;

    const chosenOption = scenario.options.find((opt) => opt.id === selectedOptionId);
    const isCorrect = chosenOption ? chosenOption.isCorrect : false;

    setIsSubmitted(true);

    // Record anonymous practice telemetry
    recordPracticeAttempt({
      topicId: scenario.topicId || 'general_psychology',
      questionId: scenario.id,
      questionType: 'scenario_selection',
      difficulty: scenario.difficulty,
      isCorrect,
      attemptNumber: 1,
    });

    if (onAnswerComplete) {
      onAnswerComplete(isCorrect, selectedOptionId);
    }
  };

  const handleReset = () => {
    setSelectedOptionId(null);
    setIsSubmitted(false);
  };

  const chosenOption = scenario.options.find((opt) => opt.id === selectedOptionId);
  const correctOption = scenario.options.find((opt) => opt.isCorrect);

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

  return (
    <div
      className={`rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-950/90 to-slate-950 shadow-xl overflow-hidden ${className}`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-slate-900/80 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded-lg bg-violet-950/80 text-violet-400 border border-violet-700/40">
            <SourceIcon className="w-4 h-4" />
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            Interactive Scenario
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded border ${getDifficultyBadge(
              scenario.difficulty
            )}`}
          >
            {scenario.difficulty}
          </span>
        </div>
      </div>

      {/* Narrative Vignette Box */}
      <div className="p-5 sm:p-6 space-y-5">
        <div className="space-y-2">
          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {scenario.title}
          </h4>

          {/* Social media / real world mock vignette */}
          {(() => {
            const vignetteText = scenario.contextVignette || (scenario as any).narrativeContext || (scenario as any).vignette;
            if (!vignetteText) return null;
            return (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 shadow-inner relative group">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span>Observable Situation</span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed italic">
                  &ldquo;{vignetteText}&rdquo;
                </p>
              </div>
            );
          })()}
        </div>

        {/* Question Prompt */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-violet-400 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-violet-400" />
            <span>Question</span>
          </div>
          <p className="text-sm sm:text-base font-semibold text-white">
            {scenario.question}
          </p>

          {/* Options Grid */}
          <div className="space-y-2.5 pt-1">
            {scenario.options.map((option, optIdx) => {
              const isSelected = selectedOptionId === option.id;

              let optionStyle =
                'bg-slate-950/70 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-900/50';

              if (isSelected && !isSubmitted) {
                optionStyle = 'bg-violet-950/40 border-violet-500/80 text-violet-100 ring-1 ring-violet-500/50';
              } else if (isSubmitted) {
                if (option.isCorrect) {
                  optionStyle =
                    'bg-emerald-950/50 border-emerald-500/80 text-emerald-100 ring-1 ring-emerald-500/50';
                } else if (isSelected && !option.isCorrect) {
                  optionStyle =
                    'bg-rose-950/50 border-rose-500/80 text-rose-100 ring-1 ring-rose-500/50';
                } else {
                  optionStyle = 'bg-slate-950/40 border-slate-900 text-slate-500 opacity-60';
                }
              }

              const badgeLabel =
                option.label ||
                ((option as any).displayOrder !== undefined
                  ? String((option as any).displayOrder)
                  : String.fromCharCode(65 + optIdx));
              const optionDisplayText = option.text || (option as any).optionText || '';

              return (
                <button
                  key={option.id}
                  type="button"
                  disabled={isSubmitted}
                  onClick={() => handleSelectOption(option.id)}
                  className={`w-full p-3.5 sm:p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 relative ${optionStyle}`}
                >
                  <span
                    className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 border mt-0.5 ${
                      isSelected && !isSubmitted
                        ? 'bg-violet-600 text-white border-violet-500'
                        : isSubmitted && option.isCorrect
                        ? 'bg-emerald-600 text-white border-emerald-500'
                        : isSubmitted && isSelected && !option.isCorrect
                        ? 'bg-rose-600 text-white border-rose-500'
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    {badgeLabel}
                  </span>

                  <div className="flex-1">
                    <span className="font-medium">{optionDisplayText}</span>
                  </div>

                  {isSubmitted && option.isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  )}
                  {isSubmitted && isSelected && !option.isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        {!isSubmitted ? (
          <div className="pt-2">
            <button
              type="button"
              disabled={!selectedOptionId}
              onClick={handleSubmit}
              className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2 ${
                selectedOptionId
                  ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/30'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <span>Submit & Reveal Analysis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Detailed Nuanced Explanation Reveal */
          <div className="space-y-4 pt-2 animate-in fade-in duration-300">
            {/* Feedback on the specific answer */}
            <div
              className={`p-4 rounded-xl border flex items-start gap-3 ${
                chosenOption?.isCorrect
                  ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                  : 'bg-amber-950/30 border-amber-500/40 text-amber-200'
              }`}
            >
              {chosenOption?.isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1 text-xs sm:text-sm">
                <strong className="block font-bold">
                  {chosenOption?.isCorrect
                    ? 'Nuanced Assessment: Correct reasoning'
                    : 'Nuanced Assessment: Not quite accurate'}
                </strong>
                <p className="leading-relaxed">
                  {chosenOption?.explanation ||
                    (chosenOption?.isCorrect
                      ? scenario.revealedExplanation.correctSummary
                      : `The optimal answer is ${correctOption?.label}: ${correctOption?.text}.`)}
                </p>
              </div>
            </div>

            {/* Cognitive Trap & Antidote Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-800/30 space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Cognitive Trap
                </span>
                <p className="text-xs text-rose-200/90 leading-relaxed">
                  {scenario.revealedExplanation.cognitiveTrap}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-800/30 space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Actionable Antidote
                </span>
                <p className="text-xs text-emerald-200/90 leading-relaxed">
                  {scenario.revealedExplanation.actionableAntidote}
                </p>
              </div>
            </div>

            {/* Try Again / Next */}
            <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
              <button
                type="button"
                onClick={handleReset}
                className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Scenario</span>
              </button>

              <span className="text-[11px] text-slate-400 font-mono">
                Analytics updated anonymously
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
