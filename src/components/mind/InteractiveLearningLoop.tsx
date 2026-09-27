'use client';

import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Eye,
  Sparkles,
  PlayCircle,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Award,
  Layers,
  Share2,
  Compass,
  Lightbulb,
} from 'lucide-react';
import {
  MindTopicDetail,
  InteractiveScenarioData,
  EducationalVisualData,
  MindRelatedTopic,
} from '../../core/mind/types';
import { EducationalVisual } from './EducationalVisual';
import { InteractiveScenarioCard } from './InteractiveScenarioCard';
import { PracticeQuestionCard } from './PracticeQuestionCard';
import {
  getTopicPracticeSummary,
  markTopicCompleted,
  type TopicPracticeSummary,
} from '../../core/mind/practiceAnalytics';

export type LearningLoopStep =
  | 'read'
  | 'understand'
  | 'see_example'
  | 'try_scenario'
  | 'practice'
  | 'complete';

interface InteractiveLearningLoopProps {
  topic: MindTopicDetail;
  onNavigateToTopic?: (topicSlug: string) => void;
  className?: string;
}

export const InteractiveLearningLoop: React.FC<InteractiveLearningLoopProps> = ({
  topic,
  onNavigateToTopic,
  className = '',
}) => {
  const [currentStep, setCurrentStep] = useState<LearningLoopStep>('read');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [practiceSummary, setPracticeSummary] = useState<TopicPracticeSummary | null>(null);

  // Sync practice summary on mount & when step changes
  useEffect(() => {
    setPracticeSummary(getTopicPracticeSummary(topic.id));
  }, [topic.id, currentStep]);

  // Construct a fallback visual if topic doesn't have custom visualContent
  const activeVisual: EducationalVisualData = topic.visualContent || {
    id: `vis_${topic.id}`,
    type: topic.visualExplanation?.type === 'contrast_matrix' ? 'comparison_graphic' : 'diagram',
    title: topic.visualExplanation?.headline || topic.title,
    altText: `Educational visual representation of ${topic.title}`,
    caption: topic.visualExplanation?.description || topic.oneLineExplanation || '',
    comparisonData: topic.visualExplanation?.analogySideA && topic.visualExplanation?.analogySideB
      ? {
          sideA: {
            title: topic.visualExplanation.analogySideA.label,
            badge: 'Empirical Baseline',
            points: [topic.visualExplanation.analogySideA.detail],
            isOptimal: true,
          },
          sideB: {
            title: topic.visualExplanation.analogySideB.label,
            badge: 'Cognitive Shortcut',
            points: [topic.visualExplanation.analogySideB.detail],
            isOptimal: false,
          },
        }
      : undefined,
    interactiveExplanation: topic.howItWorks || topic.deepExplanation,
  };

  // Derive interactive scenario
  const singleScenario = (topic as any).interactiveScenario;
  const activeScenario: InteractiveScenarioData = (topic.interactiveScenarios &&
    topic.interactiveScenarios.length > 0)
    ? topic.interactiveScenarios[0]
    : singleScenario
    ? {
        id: singleScenario.id || `scen_${topic.id}`,
        topicId: singleScenario.topicId || topic.id,
        title: singleScenario.scenarioTitle || singleScenario.title || 'Interactive Scenario',
        contextVignette:
          singleScenario.scenarioDescription ||
          singleScenario.contextVignette ||
          singleScenario.vignette ||
          topic.scenarios?.[0]?.vignette ||
          topic.scenarios?.[0]?.narrativeContext ||
          '',
        vignetteSourceType: singleScenario.vignetteSourceType || 'social_media',
        question: singleScenario.question || 'What is the most cognitively calibrated response?',
        options: singleScenario.options || [],
        revealedExplanation: {
          correctSummary: singleScenario.revealedExplanation?.correctSummary || singleScenario.explanation || 'Optimal calibrated judgment.',
          whyItMatters: singleScenario.revealedExplanation?.whyItMatters || topic.howItWorks || topic.summary30s || '',
          cognitiveTrap: singleScenario.revealedExplanation?.cognitiveTrap || 'Falling into uncalibrated intuitive heuristics.',
          actionableAntidote: singleScenario.revealedExplanation?.actionableAntidote || topic.howToRespond || 'Apply deliberate cognitive reflection.',
        },
        difficulty: (singleScenario.difficulty as any) || 'medium',
      }
    : {
        id: `scen_${topic.id}`,
        topicId: topic.id,
        title: topic.scenarios?.[0]?.title || 'Real-World Recognition Scenario',
        contextVignette:
          topic.scenarios?.[0]?.vignette ||
          topic.scenarios?.[0]?.narrativeContext ||
          "You see a social-media post claiming that a product is 'used by 95% of successful people.'",
        vignetteSourceType: 'social_media',
        question: 'What should you be cautious about?',
        options: [
          {
            id: 'opt_sp_a',
            label: 'A',
            text: 'Social proof',
            isCorrect: false,
            explanation:
              'Social proof is definitely present here because popularity is being cited, but evidence quality is also a major concern.',
          },
          {
            id: 'opt_sp_b',
            label: 'B',
            text: 'Evidence quality',
            isCorrect: false,
            explanation:
              'Evidence quality is certainly questionable, but the mechanism specifically leverages social proof as well.',
          },
          {
            id: 'opt_sp_c',
            label: 'C',
            text: 'Both',
            isCorrect: true,
            explanation:
              'Correct. This example uses social proof because the popularity claim is being used as evidence that the product is valuable, while the evidence quality is unverifiable marketing jargon.',
          },
          {
            id: 'opt_sp_d',
            label: 'D',
            text: 'Neither',
            isCorrect: false,
            explanation:
              'Not quite. Scarcity would involve limited availability. Here the message is using popularity as evidence, which is social proof, combined with dubious evidence quality.',
          },
        ],
        revealedExplanation: {
          correctSummary:
            'Both social proof and evidence quality demand scrutiny when evaluating claims.',
          whyItMatters:
            'Advertising frequently pairs emotional bandwagon pressure with fabricated or unverifiable statistical claims.',
          cognitiveTrap:
            'Accepting that popularity equals product excellence without demanding objective data.',
          actionableAntidote:
            'Demand verifiable third-party clinical or independent review benchmarks before acting.',
        },
        difficulty: 'medium',
      };

  const stepsList: Array<{ id: LearningLoopStep; label: string; number: number }> = [
    { id: 'read', label: 'Read', number: 1 },
    { id: 'understand', label: 'Understand', number: 2 },
    { id: 'see_example', label: 'See Example', number: 3 },
    { id: 'try_scenario', label: 'Try Scenario', number: 4 },
    { id: 'practice', label: 'Practice', number: 5 },
    { id: 'complete', label: 'Complete', number: 6 },
  ];

  const handleStepComplete = (nextStep: LearningLoopStep) => {
    if (nextStep === 'complete') {
      markTopicCompleted(topic.id);
      setPracticeSummary(getTopicPracticeSummary(topic.id));
    }
    setCurrentStep(nextStep);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentStepObj = stepsList.find((s) => s.id === currentStep);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Top Learning Loop Progress Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg">
        <div className="flex items-center justify-between mb-3 text-xs">
          <div className="flex items-center gap-2 font-mono">
            <span className="w-5 h-5 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center text-[10px]">
              {currentStepObj?.number}
            </span>
            <span className="font-bold text-slate-200 uppercase tracking-wider">
              Learning Loop: {currentStepObj?.label}
            </span>
          </div>

          <span className="text-[11px] font-mono text-slate-400">
            Step {currentStepObj?.number} of {stepsList.length}
          </span>
        </div>

        {/* Horizontal Step Indicator */}
        <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
          {stepsList.map((step) => {
            const isCompleted = step.number < (currentStepObj?.number || 1);
            const isCurrent = step.id === currentStep;

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setCurrentStep(step.id)}
                className={`h-2 sm:h-2.5 rounded-full transition-all relative group ${
                  isCurrent
                    ? 'bg-violet-500 shadow-md shadow-violet-500/50'
                    : isCompleted
                    ? 'bg-emerald-500'
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
                title={`Jump to ${step.label}`}
              />
            );
          })}
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 font-mono">
          <span>READ</span>
          <span>UNDERSTAND</span>
          <span>EXAMPLE</span>
          <span>SCENARIO</span>
          <span>PRACTICE</span>
          <span>COMPLETE</span>
        </div>
      </div>

      {/* =================================================================== */}
      {/* STEP 1: READ */}
      {/* =================================================================== */}
      {currentStep === 'read' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-violet-950/40 via-indigo-950/20 to-slate-950 border border-violet-500/30 text-slate-200 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-violet-300 font-mono text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-violet-400" />
              <span>Step 1 • Initial Reading & Core Intuition</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {topic.title}
            </h3>

            {topic.oneLineExplanation && (
              <div className="p-3.5 rounded-xl bg-violet-950/60 border border-violet-700/50 text-violet-200 text-sm sm:text-base font-medium italic">
                &ldquo;{topic.oneLineExplanation}&rdquo;
              </div>
            )}

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {topic.summary30s || topic.shortDescription}
            </p>
          </div>

          {topic.quickTakeaways && topic.quickTakeaways.length > 0 && (
            <div className="space-y-3 p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Core Takeaways
              </h4>
              <ul className="space-y-2.5">
                {topic.quickTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-violet-500/10 text-violet-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-violet-500/20">
                      {idx + 1}
                    </span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={() => handleStepComplete('understand')}
              className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-violet-600/30 transition-all"
            >
              <span>Next: Understand the Concept</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* STEP 2: UNDERSTAND */}
      {/* =================================================================== */}
      {currentStep === 'understand' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Reusable Educational Visual Content */}
          <EducationalVisual visual={activeVisual} />

          {/* Deep Concept Mechanism */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Eye className="w-4 h-4 text-indigo-400" />
              <span>Step 2 • Cognitive Mechanism & Why It Happens</span>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-bold text-white">How Does It Work?</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {topic.howItWorks || topic.deepExplanation}
              </p>
            </div>

            {topic.whyItHappens && (
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <span className="text-xs font-mono font-bold uppercase text-indigo-400 block">
                  Evolutionary & Cognitive Rationale
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {topic.whyItHappens}
                </p>
              </div>
            )}
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setCurrentStep('read')}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors border border-slate-800"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Read</span>
            </button>

            <button
              type="button"
              onClick={() => handleStepComplete('see_example')}
              className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-violet-600/30 transition-all"
            >
              <span>Next: See Real-Life Examples</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* STEP 3: SEE EXAMPLE */}
      {/* =================================================================== */}
      {currentStep === 'see_example' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider px-1">
            <Sparkles className="w-4 h-4" />
            <span>Step 3 • Real-Life Everyday Contexts</span>
          </div>

          {/* Culturally Grounded Indian Context Scenario */}
          {topic.scenarios && topic.scenarios.length > 0 && (() => {
            const sc = topic.scenarios[0];
            const situation = sc.narrativeContext || sc.vignette || '';
            const trap = sc.biasInAction || sc.breakdownAnalysis || '';
            const response = sc.optimalResponse || sc.recommendedAction || '';

            if (!situation && !trap && !response) return null;

            return (
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-950/20 via-slate-950 to-slate-950 border border-emerald-500/30 space-y-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase text-emerald-400">
                    Featured Case Study • {sc.title}
                  </span>
                </div>

                {situation && (
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                      The Situation
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                      &ldquo;{situation}&rdquo;
                    </p>
                  </div>
                )}

                {trap && (
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono text-rose-400 uppercase tracking-wider block font-bold">
                      The Trap in Action
                    </span>
                    <p className="text-xs sm:text-sm text-rose-200/90 leading-relaxed">
                      {trap}
                    </p>
                  </div>
                )}

                {response && (
                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block font-bold">
                      Optimal Rational Response
                    </span>
                    <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                      {response}
                    </p>
                  </div>
                )}
              </div>
            );
          })()}

          {/* Everyday Domain Cards */}
          {topic.examples && topic.examples.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 px-1">
                Domain Applications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {topic.examples.map((ex) => (
                  <div
                    key={ex.id}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs"
                  >
                    <strong className="text-white block text-sm font-bold">{ex.title}</strong>
                    <p className="text-slate-300 leading-relaxed">{ex.description}</p>
                    {ex.takeaway && (
                      <div className="text-violet-300 font-semibold pt-1 border-t border-slate-800">
                        Takeaway: {ex.takeaway}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-2 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setCurrentStep('understand')}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors border border-slate-800"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Understand</span>
            </button>

            <button
              type="button"
              onClick={() => handleStepComplete('try_scenario')}
              className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-violet-600/30 transition-all"
            >
              <span>Next: Try Interactive Scenario</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* STEP 4: TRY SCENARIO */}
      {/* =================================================================== */}
      {currentStep === 'try_scenario' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Reusable Interactive Scenario Card */}
          <InteractiveScenarioCard
            scenario={activeScenario}
            onAnswerComplete={() => {
              // User answered scenario
            }}
          />

          <div className="pt-2 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setCurrentStep('see_example')}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors border border-slate-800"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Examples</span>
            </button>

            <button
              type="button"
              onClick={() => handleStepComplete('practice')}
              className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-violet-600/30 transition-all"
            >
              <span>Next: Practice Questions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* STEP 5: PRACTICE */}
      {/* =================================================================== */}
      {currentStep === 'practice' && (
        <div className="space-y-6 animate-in fade-in">
          {topic.practiceQuestions && topic.practiceQuestions.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
                <span>
                  Question {currentQuestionIndex + 1} of {topic.practiceQuestions.length}
                </span>
                <span>
                  Accuracy: {practiceSummary?.accuracy ?? 0}% ({practiceSummary?.correctAnswers ?? 0}
                  /{practiceSummary?.attempts ?? 0})
                </span>
              </div>

              {/* Render current question card */}
              <PracticeQuestionCard
                question={topic.practiceQuestions[currentQuestionIndex]}
                topicId={topic.id}
                onAnswerCompleted={() => {
                  setPracticeSummary(getTopicPracticeSummary(topic.id));
                }}
              />

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors border border-slate-800"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Question</span>
                </button>

                {currentQuestionIndex < topic.practiceQuestions.length - 1 ? (
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentQuestionIndex((prev) =>
                        Math.min(topic.practiceQuestions.length - 1, prev + 1)
                      )
                    }
                    className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-violet-600/20"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleStepComplete('complete')}
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all"
                  >
                    <span>Complete Learning Loop</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-4">
              <p className="text-slate-300 text-sm">
                No extra practice questions found for this topic.
              </p>
              <button
                type="button"
                onClick={() => handleStepComplete('complete')}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm"
              >
                Mark Complete
              </button>
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* STEP 6: COMPLETE */}
      {/* =================================================================== */}
      {currentStep === 'complete' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-teal-950/20 to-slate-950 border border-emerald-500/40 text-center space-y-4 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
              <Award className="w-7 h-7" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Topic Loop Completed!
            </h3>

            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              You’ve read the core intuition, inspected the visual mechanism, worked through a real-world scenario, and completed cognitive practice.
            </p>

            {/* Practice Performance Metrics */}
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto pt-2">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="block text-2xl font-black text-emerald-400 font-mono">
                  {practiceSummary?.accuracy ?? 100}%
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Accuracy
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="block text-2xl font-black text-white font-mono">
                  {practiceSummary?.correctAnswers ?? 0}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Correct
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="block text-2xl font-black text-violet-400 font-mono">
                  {practiceSummary?.attempts ?? 0}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Attempts
                </span>
              </div>
            </div>
          </div>

          {/* Introspective Reflection Prompt */}
          {topic.reflectionPrompt && (
            <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>Final Introspective Reflection</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                &ldquo;{topic.reflectionPrompt}&rdquo;
              </p>
            </div>
          )}

          {/* Related Topics - SEE RELATED TOPIC */}
          {topic.relatedTopics && topic.relatedTopics.length > 0 && (
            <div className="space-y-3 p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                <Compass className="w-4 h-4 text-violet-400" />
                <span>Next Recommended Psychology Topics to Explore</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topic.relatedTopics.map((rel) => (
                  <button
                    key={rel.slug}
                    type="button"
                    onClick={() => onNavigateToTopic && onNavigateToTopic(rel.slug)}
                    className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-violet-500/60 text-left transition-all flex items-center justify-between group"
                  >
                    <div>
                      <strong className="block text-xs sm:text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
                        {rel.title}
                      </strong>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        {rel.relationshipType.replace(/_/g, ' ')}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-violet-400 transition-colors shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Restart Loop */}
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={() => {
                setCurrentStep('read');
                setCurrentQuestionIndex(0);
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-medium flex items-center gap-2 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Review Learning Loop Again</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
