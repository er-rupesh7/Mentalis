'use client';

import React, { useState, useEffect } from 'react';
import {
  Brain,
  Shield,
  Eye,
  Scale,
  Compass,
  ArrowRight,
  ArrowLeft,
  Clock,
  Grid,
  Share2,
  Bookmark,
  CheckCircle2,
  Lightbulb,
  Radio,
  Layers,
  BookOpen,
  Award,
  Sparkles,
  Users,
  ShieldAlert,
  Heart,
  HeartHandshake,
  ShoppingBag,
  Search,
  AlertTriangle,
  Info,
  Check,
  Filter,
  Zap,
  ExternalLink,
  History,
  CheckSquare,
  BarChart2,
} from 'lucide-react';
import { useQuizStore } from '../../core/store/useQuizStore';
import {
  fetchMindCategories,
  fetchMindTopics,
  fetchMindTopicDetail,
  searchMindTopics,
  getTopicReactionCounts,
  setMindReaction,
  toggleMindBookmark,
  recordMindShare,
  updateMindUserProgress,
  recordPracticeAttempt,
  FALLBACK_TOPIC_CONFIRMATION_BIAS_EN,
  FALLBACK_TOPIC_CONFIRMATION_BIAS_HINGLISH,
} from '../../core/mind/mindDbEngine';
import {
  MindCategory,
  MindTopicSummary,
  MindTopicDetail,
  MindLanguageCode,
  MindReactionType,
  MindReactionCounts,
  MindDifficulty,
  TopicTranslationResolution,
} from '../../core/mind/types';
import {
  MENTALAB_RESEARCH_DISCLAIMER,
  formatAcademicCitation,
  CREDIBLE_SOURCE_TIERS,
} from '../../core/mind/researchWorkflow';
import { MindLanguageSwitcher } from './MindLanguageSwitcher';
import { TranslationFallbackBanner } from './TranslationFallbackBanner';
import { resolveTopicTranslation } from '../../core/mind/translationLoader';
import { syncMindUrl, parseMindUrlParams, applyMindSeoTagsToHead } from '../../core/mind/mindSeo';
import { EducationalVisual } from './EducationalVisual';
import { InteractiveScenarioCard } from './InteractiveScenarioCard';
import { PracticeQuestionCard } from './PracticeQuestionCard';
import { InteractiveLearningLoop } from './InteractiveLearningLoop';
import { PracticeAnalyticsModal } from './PracticeAnalyticsModal';
import {
  toggleTopicReaction,
  toggleTopicBookmark,
  checkIsTopicBookmarked,
  recordTopicView,
} from '../../core/mind/mindEngagementEngine';
import { ShareModal } from './ShareModal';
import { SavedTopicsView } from './SavedTopicsView';

export interface MentalabMindViewProps {
  initialTopicId?: string;
  initialCategoryId?: string;
  initialLanguage?: MindLanguageCode;
  onNavigateHome?: () => void;
}

export const MentalabMindView: React.FC<MentalabMindViewProps> = ({
  initialTopicId,
  initialCategoryId,
  initialLanguage,
  onNavigateHome,
}) => {
  const { setViewMode, currentUser } = useQuizStore();
  const userId = currentUser?.id;

  // Navigation & Taxonomy state
  const [categories, setCategories] = useState<MindCategory[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<string>(initialCategoryId || 'cognitive_biases');
  const [categoryTopics, setCategoryTopics] = useState<MindTopicSummary[]>([]);
  const [activeTopicId, setActiveTopicId] = useState<string>(initialTopicId || 'confirmation_bias');
  const [contentLanguage, setContentLanguage] = useState<MindLanguageCode>(initialLanguage || 'en');
  const [curriculumViewMode, setCurriculumViewMode] = useState<'catalog' | 'reader'>(
    initialTopicId ? 'reader' : 'catalog'
  );

  // Interactive Learning Experience Mode:
  // 'loop' = Guided step-by-step Interactive Learning Loop (READ -> UNDERSTAND -> EXAMPLE -> SCENARIO -> PRACTICE -> COMPLETE)
  // 'reference' = Comprehensive 4-layer epistemic reference document
  const [experienceMode, setExperienceMode] = useState<'loop' | 'reference'>('loop');
  const [showAnalyticsModal, setShowAnalyticsModal] = useState<boolean>(false);

  // Engagement System State
  const [showSavedView, setShowSavedView] = useState<boolean>(false);
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const [shareModalTopic, setShareModalTopic] = useState<{ slug: string; title: string }>({ slug: '', title: '' });

  // Translation Resolution state (ensuring zero silent pseudo-translations)
  const [translationResolution, setTranslationResolution] = useState<TopicTranslationResolution>({
    topic: FALLBACK_TOPIC_CONFIRMATION_BIAS_EN,
    requestedLanguage: 'en',
    actualLanguage: 'en',
    isFallback: false,
    fallbackReason: null,
    availableLanguages: ['en', 'hinglish', 'hi'],
  });

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<MindDifficulty | 'all'>('all');

  // Active Educational Layer Tab:
  // Layer 1: "Understand it in 30 seconds"
  // Layer 2: "Understand it" (with 6-domain examples & Indian context)
  // Layer 3: "Go deeper" (mechanism, research summary, limitations, visual matrix)
  // Layer 4: "Test yourself" (interactive practice & reflection)
  // Defenses: "Action & Defenses"
  // Sources: "Verified Research Sources & Versioning"
  const [activeLayer, setActiveLayer] = useState<
    'layer1' | 'layer2' | 'layer3' | 'layer4' | 'defenses' | 'sources'
  >('layer1');

  // Detailed Topic content
  const [topicDetail, setTopicDetail] = useState<MindTopicDetail>(FALLBACK_TOPIC_CONFIRMATION_BIAS_EN);
  const [isLoadingTopic, setIsLoadingTopic] = useState<boolean>(false);

  // User interactions
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

  // Quiz state
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const [hasAnsweredQuiz, setHasAnsweredQuiz] = useState<boolean>(false);

  // 1. Initial URL Hydration (Restore clean paths or ?topic=...&lang=... if visiting directly)
  useEffect(() => {
    if (initialTopicId) {
      setActiveTopicId(initialTopicId);
    }
    if (initialCategoryId) {
      setActiveCategoryId(initialCategoryId);
    }
    if (initialLanguage) {
      setContentLanguage(initialLanguage);
    }
    const urlParams = parseMindUrlParams();
    if (!initialTopicId && urlParams?.topicSlug) {
      setActiveTopicId(urlParams.topicSlug);
    }
    if (!initialLanguage && urlParams?.lang) {
      setContentLanguage(urlParams.lang);
    }
  }, [initialTopicId, initialCategoryId, initialLanguage]);

  // Load all categories on mount and language change
  useEffect(() => {
    let mounted = true;
    async function loadCategories() {
      const cats = await fetchMindCategories(contentLanguage);
      if (mounted) {
        setCategories(cats);
      }
    }
    loadCategories();
    return () => {
      mounted = false;
    };
  }, [contentLanguage]);

  // Load topics list for active category
  useEffect(() => {
    let mounted = true;
    async function loadCategoryTopics() {
      if (searchQuery.trim()) {
        const searched = await searchMindTopics(searchQuery, contentLanguage);
        if (mounted) setCategoryTopics(searched);
        return;
      }

      const topics = await fetchMindTopics(activeCategoryId, contentLanguage);
      const filtered = selectedDifficulty === 'all'
        ? topics
        : topics.filter((t) => t.difficulty === selectedDifficulty);

      if (mounted) {
        setCategoryTopics(filtered);
        if (filtered.length > 0 && !filtered.some((t) => t.id === activeTopicId)) {
          setActiveTopicId(filtered[0].id);
        }
      }
    }
    loadCategoryTopics();
    return () => {
      mounted = false;
    };
  }, [activeCategoryId, contentLanguage, selectedDifficulty, searchQuery, activeTopicId]);

  // Load active topic detail with graceful fallback resolution and SEO synchronization
  useEffect(() => {
    let mounted = true;
    async function loadTopic() {
      setIsLoadingTopic(true);
      const resolution = resolveTopicTranslation(activeTopicId, contentLanguage);
      if (mounted) {
        setTranslationResolution(resolution);
        setTopicDetail(resolution.topic);
        setIsLoadingTopic(false);
        // Reset quiz selection for new topic
        setSelectedQuizOption(null);
        setHasAnsweredQuiz(false);

        // Synchronize canonical URL and apply localized meta tags
        syncMindUrl(resolution.topic.slug || activeTopicId, contentLanguage);
        applyMindSeoTagsToHead(resolution.topic, contentLanguage);
      }

      // Record topic view (anti-spam atomic view increment)
      recordTopicView(activeTopicId);

      // Check current bookmark status
      const bookmarked = await checkIsTopicBookmarked(userId, activeTopicId);
      if (mounted) {
        setIsBookmarked(bookmarked);
      }

      const rx = await getTopicReactionCounts(activeTopicId, userId);
      if (mounted && rx.total > 0) {
        setReactions(rx);
      }
    }
    loadTopic();
    return () => {
      mounted = false;
    };
  }, [activeTopicId, contentLanguage, userId]);

  // Track progress when layer changes
  useEffect(() => {
    if (userId && topicDetail) {
      updateMindUserProgress(userId, topicDetail.id, {
        status: activeLayer === 'layer4' && hasAnsweredQuiz ? 'completed' : 'in_progress',
        sectionId: activeLayer,
        completionPercent: activeLayer === 'layer4' ? 100 : activeLayer === 'layer3' ? 75 : 35,
      });
    }
  }, [activeLayer, userId, topicDetail, hasAnsweredQuiz]);

  const handleQuizSubmit = (optionId: string, isCorrect: boolean) => {
    if (hasAnsweredQuiz) return;
    setSelectedQuizOption(optionId);
    setHasAnsweredQuiz(true);

    if (userId && topicDetail.practiceQuestions[0]) {
      recordPracticeAttempt(userId, topicDetail.practiceQuestions[0].id, optionId, isCorrect);
      updateMindUserProgress(userId, topicDetail.id, {
        practiceAttempted: true,
        practiceScore: isCorrect ? 100 : 0,
      });
    }
  };

  const handleReactionClick = async (type: MindReactionType) => {
    const res = await toggleTopicReaction(userId, topicDetail.id, type, reactions);
    setReactions(res.newCounts);
  };

  const handleBookmarkToggle = async () => {
    const res = await toggleTopicBookmark(userId, topicDetail, activeCategoryObj?.title);
    setIsBookmarked(res.isBookmarked);
  };

  const handleShare = () => {
    setShareModalTopic({
      slug: topicDetail.slug || activeTopicId,
      title: topicDetail.title,
    });
    setShowShareModal(true);
  };

  const handleOpenShareFromExternal = (topicSlug: string, topicTitle: string) => {
    setShareModalTopic({ slug: topicSlug, title: topicTitle });
    setShowShareModal(true);
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'Eye': return <Eye className="w-4 h-4" />;
      case 'ShieldAlert': return <ShieldAlert className="w-4 h-4" />;
      case 'Scale': return <Scale className="w-4 h-4" />;
      case 'Heart': return <Heart className="w-4 h-4" />;
      case 'HeartHandshake': return <HeartHandshake className="w-4 h-4" />;
      case 'Radio':
      case 'Smartphone': return <Radio className="w-4 h-4" />;
      case 'ShoppingBag': return <ShoppingBag className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Compass': return <Compass className="w-4 h-4" />;
      default: return <Brain className="w-4 h-4" />;
    }
  };

  const formatDomainLabel = (domain: string) => {
    switch (domain) {
      case 'personal_finance': return 'Personal Finance';
      case 'workplace': return 'Workplace & Career';
      case 'relationships': return 'Relationships & Family';
      case 'social_media': return 'Social Media & Tech';
      case 'consumer_advertising': return 'Consumer & Advertising';
      case 'education': return 'Education & Learning';
      default: return 'Everyday Life';
    }
  };

  const activeCategoryObj = categories.find((c) => c.id === activeCategoryId) || categories[0] || {
    id: 'cognitive_biases',
    title: 'Cognitive Biases',
    description: 'Systematic deviations from normative rationality, heuristics, and judgment shortcuts.',
    iconName: 'Brain',
  };
  const currentIndex = categoryTopics.findIndex(
    (t) => t.id === activeTopicId || t.slug === activeTopicId
  );
  const prevTopic = currentIndex > 0 ? categoryTopics[currentIndex - 1] : null;
  const nextTopic =
    currentIndex >= 0 && currentIndex < categoryTopics.length - 1
      ? categoryTopics[currentIndex + 1]
      : null;
  const scenario = topicDetail.scenarios?.[0];
  const question = topicDetail.practiceQuestions?.[0];

  return (
    <div className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8 animate-in fade-in duration-200">
      {/* Dynamic Header: Sleek Compact Header in Reader Mode vs Full Billboard in Catalog Mode */}
      {curriculumViewMode === 'reader' ? (
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <button
                onClick={() => setCurriculumViewMode('catalog')}
                className="hover:text-white flex items-center gap-1 transition-colors text-violet-400 font-semibold"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{activeCategoryObj?.title || 'Track Catalog'}</span>
              </button>
              <span>/</span>
              <span className="text-slate-300 font-medium truncate max-w-xs">{topicDetail.title}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2.5">
              <span>{topicDetail.title}</span>
              <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                topicDetail.difficulty === 'beginner'
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  : topicDetail.difficulty === 'intermediate'
                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
              }`}>
                {topicDetail.difficulty}
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setCurriculumViewMode('catalog')}
              className="px-3 py-1.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Browse {categoryTopics.length} Topics</span>
            </button>
            <button
              onClick={() => setShowSavedView(!showSavedView)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                showSavedView
                  ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{showSavedView ? 'Close Saved' : 'Saved'}</span>
            </button>
            <button
              onClick={() => setViewMode('dashboard')}
              className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700 transition-colors"
            >
              Dashboard
            </button>
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono font-semibold">
              <Brain className="w-3.5 h-3.5 text-violet-400" />
              <span>MENTALAB MIND • SYSTEMATIC COGNITIVE ARCHITECTURE</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Understand your mind.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">
                Recognize influence.
              </span>{' '}
              Think independently.
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Rigorous cognitive psychology across 11 systematic tracks and 69 curated concepts. Grounded in peer-reviewed meta-analyses, interactive scenarios, and practical debiasing techniques.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setShowSavedView(false);
                  setCurriculumViewMode('catalog');
                }}
                className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold shadow-lg shadow-violet-600/20 transition-all active:scale-95 flex items-center gap-1.5"
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Explore Track Catalog</span>
              </button>
              <button
                onClick={() => setShowSavedView(!showSavedView)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                  showSavedView
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>{showSavedView ? 'Back to Mind Tracks' : 'Saved Topics'}</span>
              </button>
              <button
                onClick={() => setViewMode('dashboard')}
                className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700 transition-all"
              >
                Back to Math Dashboard
              </button>
            </div>
          </div>
        </div>
      )}

      {showSavedView ? (
        <SavedTopicsView
          userId={userId}
          onSelectTopic={(topicId) => {
            setActiveTopicId(topicId);
            setCurriculumViewMode('reader');
            setShowSavedView(false);
          }}
          onClose={() => setShowSavedView(false)}
          onOpenShareModal={(slug, title) => handleOpenShareFromExternal(slug, title)}
        />
      ) : (
        <>
      {/* Search & Difficulty Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value.trim()) {
                setCurriculumViewMode('catalog');
              }
            }}
            placeholder={contentLanguage === 'hinglish' ? "Psychology topic ya bias search karein..." : "Search topics, cognitive biases, persuasion mechanics..."}
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Difficulty Filter Chips & Language Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider hidden sm:inline mr-1">
            Tier:
          </span>
          {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((tier) => (
            <button
              key={tier}
              onClick={() => setSelectedDifficulty(tier)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all whitespace-nowrap ${
                selectedDifficulty === tier
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800/80'
              }`}
            >
              {tier}
            </button>
          ))}

          <div className="h-4 w-px bg-slate-800 mx-1 hidden sm:block" />

          {/* Quick Psychology Language Switcher */}
          <MindLanguageSwitcher
            currentLanguage={contentLanguage}
            onLanguageChange={(lang) => setContentLanguage(lang)}
            activeTopicId={activeTopicId}
          />
        </div>
      </div>

      {/* Primary Content Areas Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <Layers className="w-4 h-4 text-violet-400" />
            <span>Primary Content Areas</span>
          </h2>
          <span className="text-xs text-slate-400 font-mono">{categories.length} Systematic Tracks</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {categories.map((cat) => {
            const isSelected = activeCategoryId === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategoryId(cat.id);
                  setSearchQuery('');
                  setCurriculumViewMode('catalog');
                }}
                className={`p-3 rounded-2xl border text-left transition-all group flex flex-col justify-between ${
                  isSelected
                    ? 'bg-violet-600/20 border-violet-500/50 shadow-md shadow-violet-600/10'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="w-7 h-7 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-violet-400 mb-2 group-hover:scale-105 transition-transform">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight line-clamp-1">{cat.title}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5 line-clamp-1">{cat.subtitle || 'Foundations'}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Track Header & Mode Switcher Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-md">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
              {getCategoryIcon(activeCategoryObj.iconName)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {searchQuery.trim() ? `Search Results: "${searchQuery}"` : activeCategoryObj.title}
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-[11px] font-mono font-semibold">
                  {categoryTopics.length} Topics
                </span>
              </div>
              {!searchQuery.trim() && activeCategoryObj.description && (
                <p className="text-xs text-slate-400 line-clamp-1 max-w-xl">
                  {activeCategoryObj.description}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
          <div className="inline-flex p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs">
            <button
              onClick={() => setCurriculumViewMode('catalog')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                curriculumViewMode === 'catalog'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Track Catalog ({categoryTopics.length})</span>
            </button>
            <button
              onClick={() => setCurriculumViewMode('reader')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                curriculumViewMode === 'reader'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="truncate max-w-[130px] sm:max-w-[180px]">Study: {topicDetail.title}</span>
            </button>
          </div>
        </div>
      </div>

      {curriculumViewMode === 'catalog' ? (
        /* Dedicated Track Catalog Grid */
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryTopics.map((topic, index) => {
              const isSelected = activeTopicId === topic.id;
              return (
                <div
                  key={topic.id}
                  className={`group rounded-2xl border p-5 transition-all flex flex-col justify-between hover:shadow-xl ${
                    isSelected
                      ? 'bg-gradient-to-br from-violet-950/40 via-slate-900 to-slate-950 border-violet-500/60 shadow-lg shadow-violet-950/30'
                      : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-slate-500 font-bold">
                          #{index + 1}
                        </span>
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                          topic.difficulty === 'beginner'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : topic.difficulty === 'intermediate'
                            ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                        }`}>
                          {topic.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                        <Clock className="w-3 h-3 text-slate-500" />
                        <span>{topic.estimatedReadingMinutes}m</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                        {topic.title}
                      </h4>
                      {topic.oneLineExplanation && (
                        <p className="text-xs text-violet-300/90 italic mt-1 line-clamp-2">
                          &ldquo;{topic.oneLineExplanation}&rdquo;
                        </p>
                      )}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {topic.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <span className="text-[10px] text-cyan-400 font-mono px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/20">
                      Tier: {topic.scientificConsensusTier || 'established'}
                    </span>

                    <button
                      onClick={() => {
                        setActiveTopicId(topic.id);
                        setCurriculumViewMode('reader');
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-violet-600/20 group-hover:scale-105 active:scale-95"
                    >
                      <span>Study Concept</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {categoryTopics.length === 0 && (
            <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
              <p className="text-slate-400 text-sm">No topics match your current filter or search criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDifficulty('all');
                }}
                className="px-4 py-2 rounded-xl bg-violet-600 text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Full Topic Reader Mode */
        <div className="space-y-6">
          {/* Track Sibling Navigator Strip */}
          {categoryTopics.length > 1 && (
            <div className="p-3 sm:p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-400 font-mono">
                <Layers className="w-3.5 h-3.5 text-violet-400" />
                <span>Track:</span>
                <button
                  onClick={() => setCurriculumViewMode('catalog')}
                  className="text-white font-bold hover:text-violet-300 transition-colors underline decoration-slate-700 underline-offset-2"
                >
                  {activeCategoryObj.title}
                </button>
                <span className="text-slate-500">
                  (Concept {currentIndex >= 0 ? currentIndex + 1 : 1} of {categoryTopics.length})
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
                {prevTopic && (
                  <button
                    onClick={() => {
                      setActiveTopicId(prevTopic.id);
                    }}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors whitespace-nowrap"
                    title={prevTopic.title}
                  >
                    <ArrowLeft className="w-3 h-3" />
                    <span className="truncate max-w-[130px]">Prev: {prevTopic.title}</span>
                  </button>
                )}

                {nextTopic && (
                  <button
                    onClick={() => {
                      setActiveTopicId(nextTopic.id);
                    }}
                    className="px-2.5 py-1.5 rounded-lg bg-violet-600/30 hover:bg-violet-600 text-violet-300 hover:text-white border border-violet-500/30 flex items-center gap-1.5 transition-colors whitespace-nowrap font-semibold"
                    title={nextTopic.title}
                  >
                    <span className="truncate max-w-[130px]">Next: {nextTopic.title}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}

                <button
                  onClick={() => setCurriculumViewMode('catalog')}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1 transition-colors whitespace-nowrap ml-1"
                  title="View all topics in this track"
                >
                  <Grid className="w-3 h-3" />
                  <span>All Topics</span>
                </button>
              </div>
            </div>
          )}

          {/* Quick horizontal topic selector inside reader mode */}
          {categoryTopics.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
              {categoryTopics.map((topic) => {
                const isSelected = activeTopicId === topic.id;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setActiveTopicId(topic.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border flex items-center gap-2 ${
                      isSelected
                        ? 'bg-violet-600 text-white border-violet-500 shadow-md shadow-violet-600/20'
                        : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${
                      topic.difficulty === 'beginner' ? 'bg-emerald-400' : topic.difficulty === 'intermediate' ? 'bg-amber-400' : 'bg-rose-400'
                    }`} />
                    <span>{topic.title}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Featured Educational Module Container */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl overflow-hidden">
        {/* Module Header Bar */}
        <div className="p-5 sm:p-6 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-950/40">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                topicDetail.difficulty === 'beginner'
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  : topicDetail.difficulty === 'intermediate'
                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
              }`}>
                {topicDetail.difficulty}
              </span>
              <span className="text-xs text-slate-500 font-mono">• {topicDetail.estimatedReadingMinutes} min read</span>
              <span className="text-[10px] text-cyan-400 font-mono px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/20 flex items-center gap-1">
                <Check className="w-3 h-3 text-cyan-400" />
                <span>Consensus: {topicDetail.scientificConsensusTier}</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/60 flex items-center gap-1">
                <History className="w-3 h-3 text-slate-400" />
                <span>Version 2.1 • Peer-Reviewed</span>
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {topicDetail.title}
            </h3>

            {topicDetail.oneLineExplanation && (
              <p className="text-xs sm:text-sm font-medium text-violet-300 mt-1 italic">
                &ldquo;{topicDetail.oneLineExplanation}&rdquo;
              </p>
            )}

            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {topicDetail.subtitle || topicDetail.shortDescription}
            </p>

            {/* Experience Mode Toggle & Analytics Button */}
            <div className="flex flex-wrap items-center gap-2 mt-3 pt-2 border-t border-slate-800/60">
              <div className="inline-flex p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs">
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
                  <span>Interactive Learning Loop</span>
                </button>
                <button
                  type="button"
                  onClick={() => setExperienceMode('reference')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                    experienceMode === 'reference'
                      ? 'bg-violet-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Full Reference</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setShowAnalyticsModal(true)}
                className="px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-violet-300 border border-violet-500/30 text-xs font-bold font-mono flex items-center gap-1.5 transition-colors"
                title="View anonymous practice accuracy, attempts, and difficulty distribution"
              >
                <BarChart2 className="w-3.5 h-3.5 text-violet-400" />
                <span>Practice Analytics</span>
              </button>
            </div>
          </div>

          {/* Accessible Psychology Language Switcher */}
          <div className="self-start sm:self-auto">
            <MindLanguageSwitcher
              currentLanguage={contentLanguage}
              onLanguageChange={(lang) => setContentLanguage(lang)}
              activeTopicId={activeTopicId}
            />
          </div>
        </div>

        {/* Translation Fallback Banner (Never silently pretends English is translated) */}
        {translationResolution.isFallback && (
          <div className="px-6 pt-5">
            <TranslationFallbackBanner
              requestedLanguage={translationResolution.requestedLanguage}
              actualLanguage={translationResolution.actualLanguage}
              onSwitchToHinglish={() => setContentLanguage('hinglish')}
              onSwitchToEnglish={() => setContentLanguage('en')}
            />
          </div>
        )}

        {/* Context Matters Callout for Manipulation Awareness */}
        {topicDetail.categoryId === 'manipulation_awareness' && (
          <div className="mx-6 mt-5 p-3.5 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold mb-0.5">Context Matters: Avoid Over-Pathologizing</strong>
              <span>
                Not every difficult interaction is manipulation. Crucially distinguish intentional reality-distortion from normal misunderstandings, poor communication, bad memory, or emotional distress.
              </span>
            </div>
          </div>
        )}

        {/* Non-Diagnostic Reminder for Relationships & Communication */}
        {topicDetail.categoryId === 'relationships_comm' && (
          <div className="mx-6 mt-5 p-3.5 rounded-2xl bg-pink-950/30 border border-pink-500/30 text-pink-200 text-xs flex items-start gap-2.5">
            <HeartHandshake className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold mb-0.5">Non-Diagnostic Communication Standards</strong>
              <span>
                We focus on observable behaviors, assertiveness, and healthy boundaries. We never diagnose partners, family members, or friends with clinical personality disorders.
              </span>
            </div>
          </div>
        )}

        {/* Bridge Callout for Learning Psychology to Mentalab Math */}
        {topicDetail.categoryId === 'learning_psychology' && (
          <div className="mx-6 mt-5 p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold mb-0.5">Connected to Mentalab Math Mastery</strong>
                <span>
                  Retrieval practice and spacing are the exact cognitive science engines behind Mentalab calculation speed sprints.
                </span>
              </div>
            </div>
            <button
              onClick={() => setViewMode('practice')}
              className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shrink-0 transition-all shadow-md shadow-emerald-600/20"
            >
              Practice in Math Drills
            </button>
          </div>
        )}

        {/* Dynamic Experience Mode Selection */}
        {experienceMode === 'loop' ? (
          <div className="p-5 sm:p-7">
            <InteractiveLearningLoop
              topic={topicDetail}
              onNavigateToTopic={(slug) => setActiveTopicId(slug)}
            />
          </div>
        ) : (
          <>
            {/* The 4 Layered Educational Tabs */}
            <div className="flex items-center gap-1 px-5 pt-3 overflow-x-auto border-b border-slate-800/80 scrollbar-none text-xs">
          {[
            { id: 'layer1', label: 'Layer 1: 30s Intuition' },
            { id: 'layer2', label: 'Layer 2: Understand It (Examples)' },
            { id: 'layer3', label: 'Layer 3: Go Deeper (Mechanism & Nuance)' },
            { id: 'layer4', label: 'Layer 4: Test Yourself (Practice)' },
            { id: 'defenses', label: 'Action & Defenses' },
            { id: 'sources', label: 'Verified Sources & Citations' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveLayer(tab.id as any)}
              className={`px-3.5 py-2.5 font-bold whitespace-nowrap transition-all border-b-2 -mb-[1px] ${
                activeLayer === tab.id
                  ? 'border-violet-500 text-violet-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* LAYER 1: "Understand it in 30 seconds" */}
        {activeLayer === 'layer1' && (
          <div className="p-6 space-y-6 text-sm text-slate-300 leading-relaxed animate-in fade-in">
            <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-950/40 via-indigo-950/20 to-slate-950 border border-violet-500/30 text-slate-200 space-y-3 shadow-lg">
              <div className="flex items-center gap-2 text-violet-300 font-bold text-xs font-mono uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>Layer 1 • Understand It in 30 Seconds</span>
              </div>
              <p className="text-base sm:text-lg font-semibold text-white leading-snug">
                {topicDetail.summary30s || topicDetail.oneLineExplanation || topicDetail.summary60s}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {topicDetail.summary60s}
              </p>
            </div>

            {topicDetail.quickTakeaways && topicDetail.quickTakeaways.length > 0 && (
              <div className="space-y-2 pt-1">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Key Intuitions to Keep in Mind
                </h4>
                <ul className="space-y-2">
                  {topicDetail.quickTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                      <span className="w-5 h-5 rounded-full bg-violet-500/10 text-violet-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-200">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-2 flex items-center justify-between border-t border-slate-800">
              <span className="text-xs text-slate-400">Ready for clear examples and real life context?</span>
              <button
                onClick={() => setActiveLayer('layer2')}
                className="px-3.5 py-1.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 font-bold text-xs flex items-center gap-1.5 transition-all"
              >
                <span>Go to Layer 2: Understand It</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* LAYER 2: "Understand it" (Core Concept, 6 Domains & Indian Context) */}
        {activeLayer === 'layer2' && (
          <div className="p-6 space-y-6 text-sm text-slate-300 leading-relaxed animate-in fade-in">
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400">
                Layer 2 • The Core Concept
              </div>
              <p className="text-sm sm:text-base text-slate-200">
                {topicDetail.coreConcept || topicDetail.deepExplanation}
              </p>
            </div>

            {/* Indian Context Relatable Narrative */}
            {scenario && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider font-mono">
                  <Sparkles className="w-4 h-4" />
                  <span>Culturally Grounded Indian Context Case Study</span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3.5 shadow-md">
                  <h4 className="text-base font-bold text-white">{scenario.title}</h4>

                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Context & Setting
                    </span>
                    <p className="text-slate-200">{scenario.narrativeContext || scenario.vignette}</p>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1">
                      The Psychological Bias in Action
                    </span>
                    <p className="text-rose-200/90">{scenario.biasInAction || scenario.breakdownAnalysis}</p>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                      Optimal Rational Response
                    </span>
                    <p className="text-emerald-200/90">{scenario.optimalResponse || scenario.recommendedAction}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Interactive Scenario Card System */}
            {topicDetail.interactiveScenarios && topicDetail.interactiveScenarios.length > 0 && (
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400">
                  Interactive Decision Scenario
                </div>
                <InteractiveScenarioCard scenario={topicDetail.interactiveScenarios[0]} />
              </div>
            )}

            {/* 6 Real-World Domains */}
            {topicDetail.examples && topicDetail.examples.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Everyday Domain Applications
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {topicDetail.examples.map((ex) => (
                    <div key={ex.id} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <strong className="text-white block text-sm font-bold">{ex.title}</strong>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {formatDomainLabel(ex.domain)}
                        </span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{ex.description}</p>
                      {ex.takeaway && (
                        <div className="text-violet-300 font-semibold pt-1.5 border-t border-slate-800/80">
                          Key Principle: {ex.takeaway}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-2 flex items-center justify-between border-t border-slate-800">
              <span className="text-xs text-slate-400">Want to inspect the cognitive machinery and research?</span>
              <button
                onClick={() => setActiveLayer('layer3')}
                className="px-3.5 py-1.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 font-bold text-xs flex items-center gap-1.5 transition-all"
              >
                <span>Go to Layer 3: Go Deeper</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* LAYER 3: "Go deeper" (Mechanism, Research, Visual Concept & Nuance) */}
        {activeLayer === 'layer3' && (
          <div className="p-6 space-y-6 text-sm text-slate-300 leading-relaxed animate-in fade-in">
            {/* Reusable Educational Visual System */}
            {topicDetail.visualContent && (
              <EducationalVisual visual={topicDetail.visualContent} />
            )}

            {/* Visual Concept Model */}
            {topicDetail.visualExplanation && !topicDetail.visualContent && (
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                    Visual Concept Model • {topicDetail.visualExplanation.conceptType || 'Comparison Matrix'}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">
                  {topicDetail.visualExplanation.headline}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400">
                  {topicDetail.visualExplanation.description}
                </p>

                {topicDetail.visualExplanation.analogySideA && topicDetail.visualExplanation.analogySideB && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                        {topicDetail.visualExplanation.analogySideA.label}
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {topicDetail.visualExplanation.analogySideA.detail}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                      <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider block">
                        {topicDetail.visualExplanation.analogySideB.label}
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {topicDetail.visualExplanation.analogySideB.detail}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Cognitive & Neurobiological Mechanism */}
            <div className="space-y-2">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>How Does It Work? (Cognitive Mechanism)</span>
              </h4>
              <p className="text-slate-300 leading-relaxed">
                {topicDetail.howItWorks || topicDetail.deepExplanation}
              </p>
            </div>

            {topicDetail.whyItHappens && (
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
                  Why Does It Happen? (Cognitive Conservation)
                </h5>
                <p className="text-xs sm:text-sm text-slate-300">{topicDetail.whyItHappens}</p>
              </div>
            )}

            {topicDetail.evolutionaryMechanism && (
              <div className="p-4 rounded-2xl bg-violet-950/10 border border-violet-500/20 space-y-1.5">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400">
                  Evolutionary Psychology & Prehistoric Roots
                </h5>
                <p className="text-xs sm:text-sm text-slate-300">{topicDetail.evolutionaryMechanism}</p>
              </div>
            )}

            {/* Research Summary with Calibrated Epistemic Language */}
            {topicDetail.researchSummary && (
              <div className="space-y-2 pt-1">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>What Does Empirical Research Say?</span>
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {topicDetail.researchSummary}
                </p>
              </div>
            )}

            {/* Limitations, Boundary Conditions & Controversies */}
            {topicDetail.limitationsAndControversies && (
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Limitations, Nuance & Boundary Conditions</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {topicDetail.limitationsAndControversies}
                </p>
              </div>
            )}

            {topicDetail.commonMisconceptions && (
              <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/20 text-amber-200 text-xs sm:text-sm space-y-1">
                <strong className="font-bold flex items-center gap-1.5 text-amber-300">
                  <Info className="w-4 h-4" />
                  <span>Common Pop-Psychology Misconceptions</span>
                </strong>
                {typeof topicDetail.commonMisconceptions === 'string' ? (
                  <p className="leading-relaxed">{topicDetail.commonMisconceptions}</p>
                ) : (
                  <div className="space-y-2 pt-1">
                    {topicDetail.commonMisconceptions.map((m, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <span className="font-semibold text-amber-300">Myth: &ldquo;{m.misconception}&rdquo;</span>
                        <p className="text-amber-100/90 pl-3 border-l border-amber-500/30">{m.reality || m.correction}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="pt-2 flex items-center justify-between border-t border-slate-800">
              <span className="text-xs text-slate-400">Ready to test whether you understood this concept?</span>
              <button
                onClick={() => setActiveLayer('layer4')}
                className="px-3.5 py-1.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 font-bold text-xs flex items-center gap-1.5 transition-all"
              >
                <span>Go to Layer 4: Test Yourself</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* LAYER 4: "Test yourself" (7 Practice Formats & Reflection) */}
        {activeLayer === 'layer4' && (
          <div className="p-6 space-y-6 text-sm text-slate-300 leading-relaxed animate-in fade-in">
            {topicDetail.practiceQuestions && topicDetail.practiceQuestions.length > 0 ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400 flex items-center gap-1.5">
                    <CheckSquare className="w-4 h-4" />
                    <span>Layer 4 Practice Engine ({topicDetail.practiceQuestions.length} Questions)</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowAnalyticsModal(true)}
                    className="text-xs text-violet-300 hover:text-violet-200 font-mono font-bold flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-violet-500/30 transition-colors"
                  >
                    <BarChart2 className="w-3.5 h-3.5 text-violet-400" />
                    <span>View Analytics</span>
                  </button>
                </div>

                <div className="space-y-5">
                  {topicDetail.practiceQuestions.map((q) => (
                    <PracticeQuestionCard
                      key={q.id}
                      question={q}
                      topicId={topicDetail.id}
                    />
                  ))}
                </div>
              </div>
            ) : question ? (
              <PracticeQuestionCard
                question={question}
                topicId={topicDetail.id}
              />
            ) : null}

            {topicDetail.reflectionPrompt && (
              <div className="p-4 sm:p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 block">
                  Introspective Reflection Prompt
                </span>
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  &ldquo;{topicDetail.reflectionPrompt}&rdquo;
                </p>
              </div>
            )}
          </div>
        )}

        {/* DEFENSES TAB: "Action & Defenses" */}
        {activeLayer === 'defenses' && (
          <div className="p-6 space-y-6 text-sm text-slate-300 leading-relaxed animate-in fade-in">
            {topicDetail.howToRecognize && (
              <div className="p-4 rounded-2xl bg-violet-950/10 border border-violet-500/20 space-y-2">
                <h4 className="text-sm font-bold text-violet-300 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-violet-400" />
                  <span>How Can I Recognize It? (Internal Biological & Emotional Signals)</span>
                </h4>
                <p className="text-slate-200 text-xs sm:text-sm">
                  {Array.isArray(topicDetail.howToRecognize)
                    ? topicDetail.howToRecognize.join(' • ')
                    : topicDetail.howToRecognize}
                </p>
                {topicDetail.whereYouEncounterIt && (
                  <div className="text-xs text-slate-400 pt-1">
                    <strong>Primary environments: </strong>{topicDetail.whereYouEncounterIt}
                  </div>
                )}
              </div>
            )}

            <div className="space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>What Should I Do About It? (3 Actionable Cognitive Shields)</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">{topicDetail.howToRespond}</p>

              <ul className="space-y-2.5 pt-2">
                {topicDetail.psychologicalDefenses.map((defense, idx) => {
                  const title = typeof defense === 'string'
                    ? (defense.includes(':') ? defense.split(':')[0].trim() : `Shield ${idx + 1}`)
                    : defense.title;
                  const instruction = typeof defense === 'string'
                    ? (defense.includes(':') ? defense.split(':').slice(1).join(':').trim() : defense)
                    : defense.instruction;
                  return (
                    <li key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-violet-600/20 text-violet-300 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">{title}</strong>
                        <span className="text-xs text-slate-400 mt-0.5 block">{instruction}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}

        {/* SOURCES TAB: "Verified Research Sources & Versioning" */}
        {activeLayer === 'sources' && (
          <div className="p-6 space-y-6 text-sm text-slate-300 leading-relaxed animate-in fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold font-mono">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Credible Academic Source Standard Verified</span>
              </div>
              <span className="text-slate-400 font-mono text-[11px]">
                Hierarchy: Systematic Reviews & Meta-Analyses Prioritized
              </span>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Peer-Reviewed Citations & Literature</span>
              </h4>

              <div className="space-y-3">
                {topicDetail.references.map((ref) => {
                  const formatted = formatAcademicCitation(ref);
                  return (
                    <div key={ref.id} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-2 py-0.5 rounded bg-violet-950/50 text-violet-300 font-bold font-mono text-[10px] border border-violet-500/20">
                          {formatted.sourceBadge}
                        </span>
                        {ref.publicationYear && (
                          <span className="text-slate-500 font-mono text-[10px]">Year: {ref.publicationYear}</span>
                        )}
                      </div>

                      {ref.title && (
                        <strong className="text-white block text-sm font-semibold">{ref.title}</strong>
                      )}

                      <p className="font-mono text-slate-300">{formatted.displayText}</p>

                      {ref.relevanceSummary && (
                        <p className="text-slate-400 text-[11px] italic pt-1 border-t border-slate-800/80">
                          Relevance: {ref.relevanceSummary}
                        </p>
                      )}

                      {formatted.doiLink && (
                        <div className="pt-1">
                          <a
                            href={formatted.doiLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 font-mono underline"
                          >
                            <span>Access Academic Source / DOI</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Content Versioning Metadata */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-1.5 font-mono text-slate-400">
              <div className="flex items-center gap-2 text-slate-300 font-bold">
                <History className="w-3.5 h-3.5 text-violet-400" />
                <span>Editorial Versioning & Review Record</span>
              </div>
              <div>Topic ID: {topicDetail.id} • Version: 2.1 • Review Status: Verified</div>
              <div>Published: {topicDetail.publishedAt ? new Date(topicDetail.publishedAt).toLocaleDateString() : 'September 2026'}</div>
              <div className="text-[11px] text-slate-500">
                Maintained under the Mentalab Mind Scientific Research Standard. Updates preserve revision history.
              </div>
            </div>
          </div>
        )}
        </>
      )}

        {/* Up Next in this Track Recommendation Card */}
        {nextTopic ? (
          <div className="mx-6 my-4 p-5 rounded-2xl bg-gradient-to-r from-violet-950/40 via-slate-900 to-indigo-950/20 border border-violet-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[11px] font-mono text-violet-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span>Up Next in {activeCategoryObj.title}</span>
                <span className="text-slate-500">•</span>
                <span>Concept {currentIndex + 2} of {categoryTopics.length}</span>
              </div>
              <h4 className="text-base font-bold text-white">{nextTopic.title}</h4>
              <p className="text-xs text-slate-400 line-clamp-1 max-w-xl">{nextTopic.shortDescription}</p>
            </div>

            <button
              onClick={() => {
                setActiveTopicId(nextTopic.id);
                window.scrollTo({ top: 250, behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition-all flex items-center gap-2 shrink-0 shadow-lg shadow-violet-600/20 active:scale-95"
            >
              <span>Continue to Next Concept</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="mx-6 my-4 p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                🎉 Track Complete
              </div>
              <h4 className="text-base font-bold text-white">You&apos;ve explored all concepts in {activeCategoryObj.title}</h4>
              <p className="text-xs text-slate-400">Return to the catalog to choose another track or test your debiasing skills.</p>
            </div>

            <button
              onClick={() => setCurriculumViewMode('catalog')}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all flex items-center gap-2 shrink-0 border border-slate-700"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>View Track Catalog</span>
            </button>
          </div>
        )}

        {/* Universal Educational Research Disclaimer Banner */}
        <div className="mx-6 my-4 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed flex items-start gap-2.5">
          <Info className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-300 block mb-0.5">Educational Platform Disclaimer</strong>
            <span>
              {contentLanguage === 'hinglish'
                ? MENTALAB_RESEARCH_DISCLAIMER.statementHinglish
                : MENTALAB_RESEARCH_DISCLAIMER.statementEn}
            </span>
          </div>
        </div>

        {/* Anti-Spam Single Reaction Bar */}
        <div className="px-6 py-3 border-t border-slate-800/80 bg-slate-950/50 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400 font-medium">Was this concept valuable?</div>
          <div className="flex items-center gap-1.5 flex-wrap">
            {[
              { type: 'helpful', emoji: '❤️', label: 'Helpful', count: reactions.helpful },
              { type: 'interesting', emoji: '🧠', label: 'Interesting', count: reactions.interesting },
              { type: 'surprising', emoji: '😮', label: 'Surprising', count: reactions.surprising },
              { type: 'learned', emoji: '💡', label: 'Learned something', count: reactions.learned },
              { type: 'thinking', emoji: '🤔', label: 'Made me think', count: reactions.thinking },
            ].map((btn) => {
              const isActive = reactions.userReaction === btn.type;
              return (
                <button
                  key={btn.type}
                  onClick={() => handleReactionClick(btn.type as MindReactionType)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all flex items-center gap-1 ${
                    isActive
                      ? 'bg-violet-600/20 border-violet-500 text-violet-200'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <span>{btn.emoji}</span>
                  <span className="hidden md:inline">{btn.label}</span>
                  <span className="text-[10px] font-mono text-slate-500 ml-0.5">{btn.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/70 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={handleBookmarkToggle}
              className={`p-2 rounded-xl border transition-colors flex items-center gap-1.5 text-xs font-semibold ${
                isBookmarked
                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isBookmarked ? 'Saved' : 'Bookmark'}</span>
            </button>
            {isBookmarked && (
              <button
                onClick={() => setShowSavedView(true)}
                className="text-[11px] text-amber-400/80 hover:text-amber-300 underline underline-offset-2 ml-1"
              >
                View Saved Topics
              </button>
            )}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>

          <button
            onClick={() => setViewMode('dashboard')}
            className="flex items-center gap-1 text-xs font-bold text-violet-400 hover:text-violet-300"
          >
            <span>Resume Math Practice</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )}
  </>
  )}

      {/* Share Modal */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        topic={{
          ...topicDetail,
          slug: shareModalTopic.slug || topicDetail.slug,
          title: shareModalTopic.title || topicDetail.title,
        }}
        languageCode={contentLanguage}
      />

      {/* Practice Analytics & Mastery Modal */}
      <PracticeAnalyticsModal
        isOpen={showAnalyticsModal}
        onClose={() => setShowAnalyticsModal(false)}
      />
    </div>
  );
};
