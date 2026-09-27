'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import {
  Brain,
  Layers,
  Sparkles,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Shield,
  ArrowRight,
  Bookmark,
  Share2,
  BarChart2,
  Check,
  History,
  TrendingUp,
  ArrowLeft,
  Heart,
  Eye,
  Zap,
} from 'lucide-react';
import {
  MindTopicDetail,
  MindLanguageCode,
  EducationalVisualData,
  InteractiveScenarioData,
  MindReactionType,
  MindReactionCounts,
} from '../../core/mind/types';
import { resolveTopicTranslation } from '../../core/mind/translationLoader';
import {
  syncMindUrl,
  applyMindSeoTagsToHead,
  generateNaturalSeoTitle,
  getCategorySlugForTopic,
} from '../../core/mind/mindSeo';
import {
  toggleTopicReaction,
  toggleTopicBookmark,
  checkIsTopicBookmarked,
  recordTopicView,
} from '../../core/mind/mindEngagementEngine';
import { getTopicReactionCounts } from '../../core/mind/mindDbEngine';
import { useQuizStore } from '../../core/store/useQuizStore';
import { formatAcademicCitation } from '../../core/mind/researchWorkflow';
import { getTopicsByCategory } from '../../core/mind/mindCurriculum';

// Subcomponents
import { EducationalVisual } from './EducationalVisual';
import { InteractiveScenarioCard } from './InteractiveScenarioCard';
import { PracticeQuestionCard } from './PracticeQuestionCard';
import { InteractiveLearningLoop } from './InteractiveLearningLoop';
import { MindLanguageSwitcher } from './MindLanguageSwitcher';
import { TranslationFallbackBanner } from './TranslationFallbackBanner';
import { ShareModal } from './ShareModal';
import { PracticeAnalyticsModal } from './PracticeAnalyticsModal';

interface MindTopicPageViewProps {
  initialTopic: MindTopicDetail;
  initialCategory: {
    slug: string;
    titleEn: string;
  };
  initialLanguage?: MindLanguageCode;
  canonicalUrl: string;
}

const REACTION_CONFIG: Array<{ type: MindReactionType; label: string; icon: string }> = [
  { type: 'helpful', label: 'Helpful', icon: '❤️' },
  { type: 'interesting', label: 'Interesting', icon: '🧠' },
  { type: 'surprising', label: 'Surprising', icon: '😮' },
  { type: 'learned', label: 'Learned', icon: '💡' },
  { type: 'thinking', label: 'Made me think', icon: '🤔' },
];

export const MindTopicPageView: React.FC<MindTopicPageViewProps> = ({
  initialTopic,
  initialCategory,
  initialLanguage = 'en',
  canonicalUrl,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryLang = searchParams?.get('lang') as MindLanguageCode | null;

  // Active language state, initialized from URL query or server initialLanguage
  const [contentLanguage, setContentLanguage] = useState<MindLanguageCode>(
    queryLang || initialLanguage
  );

  // Sync state if user navigates back/forward externally via browser history
  const prevQueryLangRef = useRef<MindLanguageCode | null>(queryLang);
  useEffect(() => {
    if (queryLang !== prevQueryLangRef.current) {
      prevQueryLangRef.current = queryLang;
      if (queryLang) {
        setContentLanguage(queryLang);
      } else {
        setContentLanguage(initialLanguage || 'en');
      }
    }
  }, [queryLang, initialLanguage]);

  // Resolve localized topic content dynamically
  const translationResolution = useMemo(() => {
    return resolveTopicTranslation(initialTopic.id, contentLanguage);
  }, [initialTopic.id, contentLanguage]);

  const topic = translationResolution.topic;

  // Experience Mode: 'article' (Full interactive scannable article) vs 'loop' (Step-by-step 6-step loop)
  const [experienceMode, setExperienceMode] = useState<'article' | 'loop'>('article');

  // Engagement states
  const { currentUser } = useQuizStore();
  const userId = currentUser?.id || 'guest_user';

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [reactions, setReactions] = useState<MindReactionCounts>({
    helpful: 12,
    interesting: 24,
    surprising: 8,
    learned: 19,
    thinking: 15,
    total: 78,
    userReaction: null,
  });

  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isAnalyticsModalOpen, setIsAnalyticsModalOpen] = useState<boolean>(false);

  // Load user bookmarks and reactions on mount / language change
  useEffect(() => {
    let mounted = true;

    async function loadEngagementData() {
      try {
        const [bookmarked, reactionCounts] = await Promise.all([
          checkIsTopicBookmarked(userId, topic.id),
          getTopicReactionCounts(topic.id, userId),
        ]);
        if (mounted) {
          setIsBookmarked(bookmarked);
          if (reactionCounts.total > 0) {
            setReactions(reactionCounts);
          }
        }
      } catch {
        // Non-blocking fallback
      }
    }

    loadEngagementData();
    recordTopicView(topic.id);

    return () => {
      mounted = false;
    };
  }, [topic.id, userId]);

  // Handle language switch from header switcher
  const handleLanguageChange = (newLang: MindLanguageCode) => {
    prevQueryLangRef.current = newLang === 'en' ? null : newLang;
    setContentLanguage(newLang);
    const resolved = resolveTopicTranslation(initialTopic.id, newLang);
    syncMindUrl(resolved.topic.slug || initialTopic.id, newLang);
    applyMindSeoTagsToHead(resolved.topic, newLang);

    if (typeof window !== 'undefined') {
      try {
        const currentParams = new URLSearchParams(window.location.search);
        if (newLang === 'en') {
          currentParams.delete('lang');
        } else {
          currentParams.set('lang', newLang);
        }
        const qs = currentParams.toString();
        const newPath = qs ? `${pathname}?${qs}` : pathname;
        router.replace(newPath, { scroll: false });
      } catch {
        // Non-blocking fallback
      }
    }
  };

  // Handle reaction click
  const handleReactionClick = async (reactionType: MindReactionType) => {
    try {
      const res = await toggleTopicReaction(userId, topic.id, reactionType, reactions);
      setReactions(res.newCounts);
    } catch {
      // Non-blocking fallback
    }
  };

  // Handle bookmark toggle
  const handleBookmarkToggle = async () => {
    const nextState = !isBookmarked;
    setIsBookmarked(nextState);
    try {
      await toggleTopicBookmark(userId, topic, initialCategory.titleEn);
    } catch {
      setIsBookmarked(!nextState);
    }
  };

  // Derive visual content
  const activeVisual: EducationalVisualData = useMemo(() => {
    return (
      topic.visualContent || {
        id: `vis_${topic.id}`,
        type:
          topic.visualExplanation?.type === 'contrast_matrix'
            ? 'comparison_graphic'
            : 'diagram',
        title: topic.visualExplanation?.headline || topic.title,
        altText: `Educational visual representation of ${topic.title}`,
        caption:
          topic.visualExplanation?.description || topic.oneLineExplanation || '',
        comparisonData:
          topic.visualExplanation?.analogySideA && topic.visualExplanation?.analogySideB
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
      }
    );
  }, [topic]);

  // Derive interactive scenario
  const activeScenario: InteractiveScenarioData = useMemo(() => {
    if (topic.interactiveScenarios && topic.interactiveScenarios.length > 0) {
      return topic.interactiveScenarios[0];
    }
    if (topic.interactiveScenario) {
      const s = topic.interactiveScenario;
      return {
        id: s.id || `scen_${topic.id}`,
        topicId: s.topicId || topic.id,
        title: s.title || s.scenarioTitle || 'Real-World Recognition Scenario',
        contextVignette: s.contextVignette || s.scenarioDescription || '',
        vignetteSourceType: s.vignetteSourceType || 'interpersonal',
        question: s.question || 'What is the most effective approach?',
        options: s.options?.map((opt: any, idx: number) => ({
          id: opt.id || `opt_${idx}`,
          label: opt.label || (opt.displayOrder !== undefined ? String(opt.displayOrder) : String.fromCharCode(65 + idx)),
          text: opt.text || opt.optionText || '',
          explanation: opt.explanation || opt.cognitiveTakeaway || '',
          isCorrect: opt.isCorrect ?? false,
        })) || [],
        revealedExplanation: s.revealedExplanation || {
          correctSummary: 'Recognizing this dynamic allows you to respond effectively.',
          whyItMatters: 'Interpersonal dynamics require calm, measured clarity.',
          cognitiveTrap: 'Reacting defensively.',
          actionableAntidote: 'Stay grounded and seek direct communication.',
        },
        difficulty: s.difficulty || 'medium',
        culturalContext: s.culturalContext || 'indian_general',
      };
    }
    const fallbackScen = topic.scenarios?.[0];
    return {
      id: `scen_${topic.id}`,
      topicId: topic.id,
      title: fallbackScen?.title || 'Real-World Recognition Scenario',
      contextVignette:
        fallbackScen?.narrativeContext ||
        fallbackScen?.vignette ||
        "You see a viral social-media post claiming that a product is 'used by 95% of successful people.'",
      vignetteSourceType: 'social_media',
      question: 'What cognitive mechanism is operating here, and what should you be cautious about?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: fallbackScen?.biasInAction || fallbackScen?.breakdownAnalysis || 'Social proof shortcut',
          explanation: 'It exploits your brain’s instinct to assume that the crowd has already validated the evidence.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: fallbackScen?.optimalResponse || 'Both social proof and quality of evidence',
          explanation: 'Accurate recognition: identifying both the conformity pressure and evaluating the claim independently.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Neither, popular claims are always scientifically reliable',
          explanation: 'Popularity has zero correlation with empirical rigor.',
          isCorrect: false,
        },
      ],
      revealedExplanation: {
        correctSummary:
          fallbackScen?.optimalResponse ||
          'Both social proof and evidence quality demand scrutiny when evaluating claims.',
        whyItMatters:
          'Media and advertising frequently pair emotional bandwagon pressure with fabricated or unverifiable statistical claims.',
        cognitiveTrap:
          'Accepting that popularity equals product excellence without demanding objective data.',
        actionableAntidote:
          'Demand verifiable third-party benchmarks or peer-reviewed evidence before accepting a consensus claim.',
      },
      difficulty: 'medium',
    };
  }, [topic]);

  // Track Sibling Topics for rich intra-track navigation
  const categoryTopics = useMemo(() => {
    return getTopicsByCategory(initialCategory.slug, contentLanguage);
  }, [initialCategory.slug, contentLanguage]);

  const currentIndex = categoryTopics.findIndex(
    (t) => t.id === topic.id || t.slug === topic.slug
  );
  const prevTopic = currentIndex > 0 ? categoryTopics[currentIndex - 1] : null;
  const nextTopic =
    currentIndex >= 0 && currentIndex < categoryTopics.length - 1
      ? categoryTopics[currentIndex + 1]
      : null;

  return (
    <article className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8 animate-in fade-in duration-300">
      {/* 1. Clean Breadcrumb Navigation & Sibling Navigator */}
      <div className="space-y-3">
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/mind" className="hover:text-white flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Mind</span>
          </Link>
          <span>/</span>
          <Link
            href={`/mind/${initialCategory.slug}`}
            className="hover:text-white transition-colors"
          >
            {initialCategory.titleEn}
          </Link>
          <span>/</span>
          <span className="text-violet-400 font-semibold truncate max-w-xs">{topic.title}</span>
        </nav>

        {/* Track Sibling Navigator Strip */}
        {categoryTopics.length > 1 && (
          <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-400 font-mono">
              <Layers className="w-3.5 h-3.5 text-violet-400" />
              <span>Track:</span>
              <Link
                href={`/mind/${initialCategory.slug}`}
                className="text-white font-bold hover:text-violet-300 transition-colors underline decoration-slate-700 underline-offset-2"
              >
                {initialCategory.titleEn}
              </Link>
              <span className="text-slate-500">
                ({currentIndex >= 0 ? currentIndex + 1 : 1} of {categoryTopics.length})
              </span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
              {prevTopic && (
                <Link
                  href={`/mind/${initialCategory.slug}/${prevTopic.slug || prevTopic.id}${contentLanguage !== 'en' ? `?lang=${contentLanguage}` : ''}`}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1 transition-colors whitespace-nowrap"
                  title={prevTopic.title}
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span className="truncate max-w-[130px]">Prev: {prevTopic.title}</span>
                </Link>
              )}

              {nextTopic && (
                <Link
                  href={`/mind/${initialCategory.slug}/${nextTopic.slug || nextTopic.id}${contentLanguage !== 'en' ? `?lang=${contentLanguage}` : ''}`}
                  className="px-2.5 py-1 rounded-lg bg-violet-600/30 hover:bg-violet-600 text-violet-300 hover:text-white border border-violet-500/30 flex items-center gap-1 transition-colors whitespace-nowrap"
                  title={nextTopic.title}
                >
                  <span className="truncate max-w-[130px]">Next: {nextTopic.title}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 2. Unified Topic Header Bar */}
      <header className="space-y-4 pb-6 border-b border-slate-800/80">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-2">
            {/* Metadata Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <Link
                href={`/mind/${initialCategory.slug}`}
                className="px-2.5 py-0.5 rounded-full bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 border border-violet-500/20 transition-colors"
              >
                {initialCategory.titleEn}
              </Link>
              <span className="text-slate-500">•</span>
              <span className={`capitalize font-bold px-2 py-0.5 rounded border ${
                topic.difficulty === 'beginner'
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  : topic.difficulty === 'intermediate'
                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
              }`}>
                {topic.difficulty} Tier
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{topic.estimatedReadingMinutes || 4} min read</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-[10px] text-cyan-400 font-mono px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/20 hidden sm:inline-flex items-center gap-1">
                <Check className="w-3 h-3 text-cyan-400" />
                <span>Consensus: {topic.scientificConsensusTier || 'established'}</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/60 hidden sm:inline-flex items-center gap-1">
                <History className="w-3 h-3 text-slate-400" />
                <span>Version 2.1 • Peer-Reviewed</span>
              </span>
            </div>

            {/* Natural SEO-optimized H1 Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {topic.title}
            </h1>

            {/* One-Line Subtitle Intuition */}
            {topic.oneLineExplanation && (
              <p className="text-sm sm:text-base font-medium text-violet-300 italic">
                &ldquo;{topic.oneLineExplanation}&rdquo;
              </p>
            )}

            <p className="text-xs sm:text-sm text-slate-400 max-w-3xl leading-relaxed">
              {topic.subtitle || topic.shortDescription}
            </p>
          </div>

          {/* Prominent Accessible Language Switcher */}
          <div className="shrink-0 self-start lg:self-auto bg-slate-900/60 p-2 rounded-2xl border border-slate-800">
            <div className="text-[10px] font-mono uppercase text-slate-400 px-1 mb-1 font-semibold flex items-center justify-between">
              <span>Reading Language:</span>
              <span className="text-violet-400">{contentLanguage.toUpperCase()}</span>
            </div>
            <MindLanguageSwitcher
              currentLanguage={contentLanguage}
              onLanguageChange={handleLanguageChange}
              activeTopicId={topic.id}
            />
          </div>
        </div>

        {/* View Mode Switcher & Engagement Action Bar */}
        <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/60">
          {/* Mode Switcher */}
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <button
              type="button"
              onClick={() => setExperienceMode('article')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                experienceMode === 'article'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Full Interactive Article</span>
            </button>
            <button
              type="button"
              onClick={() => setExperienceMode('loop')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                experienceMode === 'loop'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>6-Step Learning Loop</span>
            </button>
          </div>

          {/* Engagement Actions: Reactions + Bookmark + Share */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Reaction Pill Buttons */}
            <div className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 rounded-xl p-1">
              {REACTION_CONFIG.map(({ type, icon, label }) => {
                const count = reactions[type] || 0;
                const isSelected = reactions.userReaction === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleReactionClick(type)}
                    className={`px-2 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1 ${
                      isSelected
                        ? 'bg-violet-600/30 text-violet-200 border border-violet-500/50 scale-105'
                        : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-transparent'
                    }`}
                    title={`${label} (${count})`}
                  >
                    <span>{icon}</span>
                    <span className="text-[11px] font-semibold">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Bookmark Button */}
            <button
              type="button"
              onClick={handleBookmarkToggle}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isBookmarked
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
              }`}
              title={isBookmarked ? 'Saved in bookmarks' : 'Bookmark this topic'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span className="hidden sm:inline">{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>

            {/* Share Button */}
            <button
              type="button"
              onClick={() => setIsShareModalOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-all"
              title="Share clean direct link"
            >
              <Share2 className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Share</span>
            </button>

            {/* Practice Analytics */}
            <button
              type="button"
              onClick={() => setIsAnalyticsModalOpen(true)}
              className="p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-violet-300 border border-slate-800 transition-colors"
              title="View Practice Analytics"
            >
              <BarChart2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Translation Fallback Banner (Informs user if a language falls back to Hinglish/English) */}
      {translationResolution.isFallback && (
        <TranslationFallbackBanner
          requestedLanguage={translationResolution.requestedLanguage}
          actualLanguage={translationResolution.actualLanguage}
          onSwitchToHinglish={() => handleLanguageChange('hinglish')}
          onSwitchToEnglish={() => handleLanguageChange('en')}
        />
      )}

      {/* Manipulation Awareness Caution Callout */}
      {topic.categoryId === 'manipulation_awareness' && (
        <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold mb-0.5">Context Matters: Avoid Over-Pathologizing</strong>
            <span>
              Not every difficult interaction is manipulation. Crucially distinguish intentional reality-distortion from normal misunderstandings, poor communication, bad memory, or emotional distress.
            </span>
          </div>
        </div>
      )}

      {/* Dynamic Content Display based on View Mode */}
      {experienceMode === 'loop' ? (
        /* 6-STEP INTERACTIVE LEARNING LOOP */
        <div className="p-4 sm:p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
          <InteractiveLearningLoop
            topic={topic}
            onNavigateToTopic={(slug) => {
              const cat = getCategorySlugForTopic(slug);
              window.location.href = `/mind/${cat}/${slug}`;
            }}
          />
        </div>
      ) : (
        /* FULL INTERACTIVE ARTICLE (SINGLE COHESIVE EXPERIENCE) */
        <div className="space-y-12">
          {/* Section 1: What is it? (30-Second Intuition & Key Takeaways) */}
          <section id="what-is-it" aria-label="What is it" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Brain className="w-5 h-5 text-violet-400" />
              <span>What is {topic.title}?</span>
            </h2>

            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 space-y-4 shadow-lg">
              <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed">
                {topic.summary30s || topic.coreConcept}
              </p>

              {topic.summary60s && (
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                  {topic.summary60s}
                </p>
              )}

              {topic.quickTakeaways && topic.quickTakeaways.length > 0 && (
                <div className="pt-3 border-t border-slate-800/80 space-y-2">
                  <span className="text-xs font-mono text-violet-400 uppercase font-semibold">
                    Key Takeaways:
                  </span>
                  <ul className="space-y-2">
                    {topic.quickTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* Section 2: Educational Visual & Mental Model Diagram */}
          <section id="visual-explanation" aria-label="Visual Model" className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Concept Illustration & Mental Architecture</span>
              </h2>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden p-2 sm:p-4">
              <EducationalVisual visual={activeVisual} showCaption={true} allowZoom={true} />
            </div>
          </section>

          {/* Section 3: How It Works — The Cognitive Mechanism */}
          <section id="mechanism" aria-label="How it works" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              <span>How It Works: The Cognitive Mechanism</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>The Mental Shortcut</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {topic.howItWorks || topic.coreConcept}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <History className="w-4 h-4 text-cyan-400" />
                  <span>Evolutionary Roots & Energy Conservation</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {topic.evolutionaryMechanism || topic.whyItHappens || topic.researchSummary}
                </p>
              </div>
            </div>

            {topic.limitationsAndControversies && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-300 block mb-1">Scientific Boundary & Nuance:</strong>
                {topic.limitationsAndControversies}
              </div>
            )}
          </section>

          {/* Section 4: Real-Life Examples & Culturally Grounded Scenarios */}
          {topic.examples && topic.examples.length > 0 && (
            <section id="examples" aria-label="Real-Life Scenarios" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span>Real-Life Examples & Scenarios</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topic.examples.map((ex) => (
                  <div
                    key={ex.id}
                    className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2.5 flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                        {ex.domain.replace('_', ' ')}
                      </span>
                      <h3 className="text-base font-bold text-white pt-1">{ex.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {ex.description}
                      </p>
                    </div>
                    {ex.takeaway && (
                      <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
                        <strong className="text-slate-200">Takeaway:</strong> {ex.takeaway}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Indian Context Case Study if present in scenarios */}
              {topic.scenarios && topic.scenarios[0] && (() => {
                const sc = topic.scenarios[0];
                const sit = sc.narrativeContext || sc.vignette || (sc as any).scenarioDescription || '';
                const trap = sc.biasInAction || (sc as any).breakdownAnalysis || '';
                const act = sc.optimalResponse || (sc as any).recommendedAction || '';
                if (!sit && !trap && !act) return null;
                return (
                  <div className="p-5 rounded-2xl bg-slate-900/40 border border-violet-500/20 space-y-2.5 mt-4">
                    <div className="flex items-center gap-2 text-violet-300 text-xs font-mono font-bold uppercase">
                      <Sparkles className="w-4 h-4 text-violet-400" />
                      <span>Culturally Grounded Real Scenario</span>
                    </div>
                    {sc.title && <h4 className="text-base font-bold text-white">{sc.title}</h4>}
                    {sit && (
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                        &ldquo;{sit}&rdquo;
                      </p>
                    )}
                    {trap && (
                      <p className="text-xs sm:text-sm text-rose-200/90 leading-relaxed">
                        <strong className="text-rose-400 font-bold">The Trap in Action: </strong>{trap}
                      </p>
                    )}
                    {act && (
                      <div className="pt-2 text-xs text-emerald-300 border-t border-slate-800">
                        <strong>De-biasing Action:</strong> {act}
                      </div>
                    )}
                  </div>
                );
              })()}
            </section>
          )}

          {/* Section 5: Interactive Scenario Lab */}
          <section id="interactive-scenario-lab" aria-label="Interactive Scenario Lab" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              <span>Interactive Scenario Challenge</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Put yourself in the decision-maker’s shoes. Test your intuition against this real-world vignette:
            </p>
            <InteractiveScenarioCard scenario={activeScenario} />
          </section>

          {/* Section 6: Actionable Cognitive Defenses */}
          {topic.psychologicalDefenses && topic.psychologicalDefenses.length > 0 && (
            <section id="defenses" aria-label="Cognitive Defenses" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span>Actionable Cognitive Defenses</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {topic.psychologicalDefenses.map((def, idx) => {
                  const title = typeof def === 'string'
                    ? (def.includes(':') ? def.split(':')[0].trim() : `Defense ${idx + 1}`)
                    : def.title;
                  const instruction = typeof def === 'string'
                    ? (def.includes(':') ? def.split(':').slice(1).join(':').trim() : def)
                    : def.instruction;
                  return (
                    <div
                      key={`def_${idx}`}
                      className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2 flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-sm font-bold text-emerald-400">{title}</h3>
                        <p className="text-xs text-slate-300 leading-relaxed mt-1">{instruction}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Section 7: Practice & Self-Test Questions */}
          {topic.practiceQuestions && topic.practiceQuestions.length > 0 && (
            <section id="practice-questions" aria-label="Practice Questions" className="space-y-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-400" />
                  <span>Practice & Self-Test Questions</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Active retrieval cements mental models in long-term memory. Test your understanding:
                </p>
              </div>

              <div className="space-y-4">
                {topic.practiceQuestions.map((q, idx) => (
                  <PracticeQuestionCard
                    key={q.id || `q_${idx}`}
                    question={q}
                    topicId={topic.id}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Section 8: Contextual Related Concepts (Internal Linking for Googlebot & Users) */}
          {topic.relatedTopics && topic.relatedTopics.length > 0 && (
            <section id="related-concepts" aria-label="Related Concepts" className="space-y-3 pt-6 border-t border-slate-800">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-violet-400" />
                <span>Related Concepts & Interconnected Mental Models</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {topic.relatedTopics.map((rel) => {
                  const targetCat = getCategorySlugForTopic(rel.slug || rel.topicId);
                  const cleanHref = `/mind/${targetCat}/${rel.slug || rel.topicId}${
                    contentLanguage !== 'en' ? `?lang=${contentLanguage}` : ''
                  }`;
                  return (
                    <Link
                      key={rel.topicId}
                      href={cleanHref}
                      className="p-4 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-violet-500/40 transition-all group flex flex-col justify-between"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-violet-400 uppercase tracking-wider block">
                          {rel.relationshipType ? rel.relationshipType.replace(/_/g, ' ') : 'Related Concept'}
                        </span>
                        <h3 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
                          {rel.title}
                        </h3>
                      </div>
                      <div className="pt-3 text-xs text-violet-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>Explore Concept</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Track Sibling Exploration Grid */}
          {categoryTopics.length > 1 && (
            <section aria-label="Track Curriculum" className="space-y-4 pt-8 border-t border-slate-800/80">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-violet-400 font-bold block">
                    Curriculum Track
                  </span>
                  <h2 className="text-lg font-bold text-white">
                    More Concepts in {initialCategory.titleEn} ({categoryTopics.length} Topics)
                  </h2>
                </div>
                <Link
                  href={`/mind/${initialCategory.slug}`}
                  className="text-xs text-violet-400 hover:text-violet-300 font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Explore Track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {categoryTopics
                  .filter((t) => t.id !== topic.id && t.slug !== topic.slug)
                  .map((sibling) => (
                    <Link
                      key={sibling.id}
                      href={`/mind/${initialCategory.slug}/${sibling.slug || sibling.id}${contentLanguage !== 'en' ? `?lang=${contentLanguage}` : ''}`}
                      className="p-4 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-violet-500/40 transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between gap-1 text-[10px] font-mono text-slate-500">
                          <span className="uppercase text-violet-400 font-bold">{sibling.difficulty}</span>
                          <span>{sibling.estimatedReadingMinutes}m read</span>
                        </div>
                        <h3 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors line-clamp-1">
                          {sibling.title}
                        </h3>
                        {sibling.oneLineExplanation && (
                          <p className="text-xs text-slate-400 italic line-clamp-2">
                            &ldquo;{sibling.oneLineExplanation}&rdquo;
                          </p>
                        )}
                      </div>
                      <div className="pt-3 text-xs text-violet-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>Study Topic</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          )}

          {/* Section 9: Verified Academic Citations & Literature */}
          {topic.references && topic.references.length > 0 && (
            <section id="references" aria-label="Research Citations" className="space-y-2 pt-6 border-t border-slate-800/60 text-xs text-slate-500">
              <h3 className="text-xs font-mono uppercase text-slate-400 font-bold">
                Verified Academic Citations & Literature
              </h3>
              <ul className="space-y-1.5 list-disc list-inside">
                {topic.references.map((ref) => {
                  const formatted = formatAcademicCitation(ref);
                  return (
                    <li key={ref.id} className="leading-relaxed">
                      <span className="font-semibold text-slate-300">
                        {ref.title ? `${ref.title} — ` : ''}
                      </span>
                      <span>{formatted.displayText}</span>
                      {formatted.doiLink && (
                        <a
                          href={formatted.doiLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-violet-400 hover:underline font-mono text-[11px]"
                        >
                          [DOI/Source]
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          )}
        </div>
      )}

      {/* Share Modal */}
      {isShareModalOpen && (
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
          topic={topic}
          languageCode={contentLanguage}
        />
      )}

      {/* Practice Analytics Modal */}
      {isAnalyticsModalOpen && (
        <PracticeAnalyticsModal
          isOpen={isAnalyticsModalOpen}
          onClose={() => setIsAnalyticsModalOpen(false)}
        />
      )}
    </article>
  );
};
