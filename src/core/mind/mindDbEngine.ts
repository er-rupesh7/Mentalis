/**
 * Mentalab Mind Database & Content Engine
 * High-performance data-access layer interacting with Supabase for:
 * - 10 Primary Categories (+ Critical Thinking)
 * - 9 Core Principles answering topics
 * - 13 Indian languages + first-class Hinglish
 * - Anti-spam reactions, Bookmarks, Aggregate shares, and User learning progress
 * - Resilient offline fallback data when Supabase is offline or unconfigured
 */

import { getSupabase } from '@/lib/supabase/client';
import {
  MindCategory,
  MindTopicSummary,
  MindTopicDetail,
  MindLanguageCode,
  MindReactionType,
  MindSharePlatform,
  MindUserProgress,
  MindReactionCounts,
  MindDifficulty,
} from './types';
import {
  getCurriculumCategories,
  getTopicsByCategory,
  getTopicBySlugOrId,
  CURRICULUM_CATALOG,
  searchCurriculum,
  getTopicsByDifficulty,
  PRIMARY_MIND_CATEGORIES,
} from './mindCurriculum';

// ============================================================================
// BUILT-IN FALLBACK CONTENT (Derived directly from Curriculum Architecture)
// ============================================================================

export const FALLBACK_CATEGORIES: MindCategory[] = getCurriculumCategories('en');
export const FALLBACK_TOPIC_CONFIRMATION_BIAS_EN: MindTopicDetail = CURRICULUM_CATALOG.confirmation_bias.en;
export const FALLBACK_TOPIC_CONFIRMATION_BIAS_HINGLISH: MindTopicDetail = CURRICULUM_CATALOG.confirmation_bias.hinglish;

// ============================================================================
// DATA ACCESS FUNCTIONS
// ============================================================================

/**
 * Fetch all active categories with localized title and description
 */
export async function fetchMindCategories(lang: MindLanguageCode = 'en'): Promise<MindCategory[]> {
  const catalogCats = getCurriculumCategories(lang);
  const supabase = getSupabase();
  if (!supabase) {
    return catalogCats;
  }

  try {
    const { data: categories, error } = await (supabase as any)
      .from('psychology_categories')
      .select(`
        id,
        slug,
        icon_name,
        accent_color,
        display_order,
        is_active,
        psychology_category_translations (
          language_code,
          title,
          subtitle,
          description
        )
      `)
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error || !categories || categories.length === 0) {
      return catalogCats;
    }

    return categories.map((cat: any) => {
      const catalogMatch = catalogCats.find((c) => c.id === cat.id || c.slug === cat.slug);
      const translations: any[] = cat.psychology_category_translations || [];
      const match =
        translations.find((t) => t.language_code === lang) ||
        translations.find((t) => t.language_code === 'en') ||
        translations[0] ||
        {};

      return {
        id: cat.id,
        slug: cat.slug,
        iconName: cat.icon_name || catalogMatch?.iconName || 'Brain',
        accentColor: cat.accent_color || catalogMatch?.accentColor || 'violet',
        displayOrder: cat.display_order ?? catalogMatch?.displayOrder ?? 99,
        isActive: cat.is_active ?? true,
        title: match.title || catalogMatch?.title || cat.id,
        subtitle: match.subtitle || catalogMatch?.subtitle || null,
        description: match.description || catalogMatch?.description || null,
        topicCount: catalogMatch?.topicCount ?? 0,
      };
    });
  } catch (err) {
    console.error('[Mentalab Mind] Error loading categories from Supabase:', err);
    return catalogCats;
  }
}

/**
 * Fetch topic summaries belonging to a category
 */
export async function fetchMindTopics(
  categoryId?: string,
  lang: MindLanguageCode = 'en'
): Promise<MindTopicSummary[]> {
  const catalogTopics = categoryId
    ? getTopicsByCategory(categoryId, lang)
    : Object.values(CURRICULUM_CATALOG).map((entry) => (lang === 'hinglish' ? entry.hinglish : entry.en));

  const supabase = getSupabase();
  if (!supabase) {
    return catalogTopics;
  }

  try {
    let query = (supabase as any)
      .from('psychology_topics')
      .select(`
        id,
        category_id,
        slug,
        difficulty,
        estimated_reading_minutes,
        featured_image_url,
        scientific_consensus_tier,
        sort_weight,
        view_count,
        share_count,
        bookmark_count,
        psychology_topic_translations (
          language_code,
          title,
          subtitle,
          short_description,
          one_line_explanation
        )
      `)
      .eq('publication_status', 'published')
      .order('sort_weight', { ascending: true });

    if (categoryId) {
      // Support matching by either category_id ('cognitive_biases') or slug ('cognitive-biases')
      let resolvedDbCatId = categoryId;
      for (const [id, cat] of Object.entries(PRIMARY_MIND_CATEGORIES)) {
        if (id === categoryId || cat.slug === categoryId) {
          resolvedDbCatId = id;
          break;
        }
      }
      query = query.or(`category_id.eq.${resolvedDbCatId},category_id.eq.${categoryId}`);
    }

    const { data: dbTopics, error } = await query;
    if (error || !dbTopics || dbTopics.length === 0) {
      return catalogTopics;
    }

    // Index DB topics by id and slug for fast metric overlay
    const dbMap = new Map<string, any>();
    for (const t of dbTopics) {
      dbMap.set(t.id, t);
      if (t.slug) dbMap.set(t.slug, t);
    }

    // Overlay live metrics (viewCount, shareCount, bookmarkCount) from DB onto authoritative catalog topics
    const merged: MindTopicSummary[] = catalogTopics.map((catTopic) => {
      const dbMatch = dbMap.get(catTopic.id) || dbMap.get(catTopic.slug);
      if (!dbMatch) return catTopic;
      return {
        ...catTopic,
        viewCount: Number(dbMatch.view_count || catTopic.viewCount || 0),
        shareCount: Number(dbMatch.share_count || catTopic.shareCount || 0),
        bookmarkCount: Number(dbMatch.bookmark_count || catTopic.bookmarkCount || 0),
      };
    });

    // Also include any topics that exist in Supabase DB but not yet in memory catalog
    const catalogIds = new Set(catalogTopics.map((t) => t.id));
    for (const t of dbTopics) {
      if (!catalogIds.has(t.id)) {
        const transList: any[] = t.psychology_topic_translations || [];
        const match =
          transList.find((tr) => tr.language_code === lang) ||
          transList.find((tr) => tr.language_code === 'en') ||
          transList[0] ||
          {};
        merged.push({
          id: t.id,
          categoryId: t.category_id,
          slug: t.slug,
          difficulty: t.difficulty,
          estimatedReadingMinutes: t.estimated_reading_minutes,
          featuredImageUrl: t.featured_image_url,
          scientificConsensusTier: t.scientific_consensus_tier,
          sortWeight: t.sort_weight,
          viewCount: Number(t.view_count || 0),
          shareCount: Number(t.share_count || 0),
          bookmarkCount: Number(t.bookmark_count || 0),
          title: match.title || t.slug,
          subtitle: match.subtitle || null,
          shortDescription: match.short_description || '',
          oneLineExplanation: match.one_line_explanation || null,
        });
      }
    }

    return merged.sort((a, b) => a.sortWeight - b.sortWeight);
  } catch (err) {
    console.error('[Mentalab Mind] Error loading topics from Supabase:', err);
    return catalogTopics;
  }
}

/**
 * Fetch full topic detail with relational sections, scenarios, quizzes, and references
 */
export async function fetchMindTopicDetail(
  slugOrId: string,
  lang: MindLanguageCode = 'en'
): Promise<MindTopicDetail | null> {
  const supabase = getSupabase();
  if (!supabase) {
    const local = getTopicBySlugOrId(slugOrId, lang);
    return local || (lang === 'hinglish' ? FALLBACK_TOPIC_CONFIRMATION_BIAS_HINGLISH : FALLBACK_TOPIC_CONFIRMATION_BIAS_EN);
  }

  try {
    const { data: topic, error } = await (supabase as any)
      .from('psychology_topics')
      .select(`
        id,
        category_id,
        slug,
        difficulty,
        estimated_reading_minutes,
        featured_image_url,
        scientific_consensus_tier,
        publication_status,
        published_at,
        sort_weight,
        view_count,
        share_count,
        bookmark_count,
        psychology_topic_translations (
          language_code,
          title,
          subtitle,
          short_description,
          one_line_explanation,
          summary_60s,
          core_concept,
          how_it_works,
          why_it_happens,
          where_you_encounter_it,
          common_misconceptions,
          visual_explanation,
          research_summary,
          limitations_and_controversies,
          how_to_recognize,
          how_to_respond,
          psychological_defenses,
          reflection_prompt,
          quick_takeaways,
          deep_explanation,
          evolutionary_mechanism,
          seo_title,
          seo_description,
          canonical_url,
          og_image_url
        ),
        psychology_scenarios (
          id,
          scenario_type,
          display_order,
          is_featured,
          psychology_scenario_translations (
            language_code,
            title,
            narrative_context,
            bias_in_action,
            optimal_response,
            reflection_prompt
          )
        ),
        psychology_practice_questions (
          id,
          difficulty,
          display_order,
          psychology_question_translations (
            language_code,
            prompt,
            scenario_text,
            explanation,
            antidote_advice
          ),
          psychology_question_options (
            id,
            is_correct,
            display_order,
            psychology_option_translations (
              language_code,
              option_text,
              feedback_text
            )
          )
        ),
        psychology_references (
          id,
          citation,
          authors,
          publication_year,
          journal_or_publisher,
          doi_or_url,
          evidence_strength,
          display_order
        )
      `)
      .or(`slug.eq.${slugOrId},id.eq.${slugOrId}`)
      .eq('publication_status', 'published')
      .maybeSingle();

    if (error || !topic) {
      const local = getTopicBySlugOrId(slugOrId, lang);
      return local || (lang === 'hinglish' ? FALLBACK_TOPIC_CONFIRMATION_BIAS_HINGLISH : FALLBACK_TOPIC_CONFIRMATION_BIAS_EN);
    }

    const t: any = topic;

    // Pick topic translation
    const transList: any[] = t.psychology_topic_translations || [];
    const tMatch =
      transList.find((tr) => tr.language_code === lang) ||
      transList.find((tr) => tr.language_code === 'en') ||
      transList[0] ||
      {};

    // Parse scenarios
    const rawScenarios: any[] = t.psychology_scenarios || [];
    const scenarios = rawScenarios.map((s) => {
      const sTransList: any[] = s.psychology_scenario_translations || [];
      const sMatch =
        sTransList.find((tr) => tr.language_code === lang) ||
        sTransList.find((tr) => tr.language_code === 'en') ||
        sTransList[0] ||
        {};
      return {
        id: s.id,
        scenarioType: s.scenario_type,
        displayOrder: s.display_order,
        isFeatured: s.is_featured,
        title: sMatch.title || '',
        narrativeContext: sMatch.narrative_context || '',
        biasInAction: sMatch.bias_in_action || '',
        optimalResponse: sMatch.optimal_response || '',
        reflectionPrompt: sMatch.reflection_prompt || null,
      };
    });

    // Parse practice questions
    const rawQuestions: any[] = t.psychology_practice_questions || [];
    const practiceQuestions = rawQuestions.map((q) => {
      const qTransList: any[] = q.psychology_question_translations || [];
      const qMatch =
        qTransList.find((tr) => tr.language_code === lang) ||
        qTransList.find((tr) => tr.language_code === 'en') ||
        qTransList[0] ||
        {};

      const rawOptions: any[] = q.psychology_question_options || [];
      const options = rawOptions.map((opt) => {
        const optTransList: any[] = opt.psychology_option_translations || [];
        const optMatch =
          optTransList.find((tr) => tr.language_code === lang) ||
          optTransList.find((tr) => tr.language_code === 'en') ||
          optTransList[0] ||
          {};
        return {
          id: opt.id,
          isCorrect: opt.is_correct,
          displayOrder: opt.display_order,
          optionText: optMatch.option_text || '',
          feedbackText: optMatch.feedback_text || null,
        };
      });

      return {
        id: q.id,
        difficulty: q.difficulty,
        displayOrder: q.display_order,
        prompt: qMatch.prompt || '',
        scenarioText: qMatch.scenario_text || null,
        explanation: qMatch.explanation || '',
        antidoteAdvice: qMatch.antidote_advice || null,
        options,
      };
    });

    // Parse references
    const rawRefs: any[] = t.psychology_references || [];
    const references = rawRefs.map((r) => ({
      id: r.id,
      citation: r.citation,
      authors: r.authors || null,
      publicationYear: r.publication_year || null,
      journalOrPublisher: r.journal_or_publisher || null,
      doiOrUrl: r.doi_or_url || null,
      evidenceStrength: r.evidence_strength,
      displayOrder: r.display_order,
    }));

    return {
      id: t.id,
      categoryId: t.category_id,
      slug: t.slug,
      difficulty: t.difficulty,
      estimatedReadingMinutes: t.estimated_reading_minutes,
      featuredImageUrl: t.featured_image_url,
      scientificConsensusTier: t.scientific_consensus_tier,
      sortWeight: t.sort_weight,
      viewCount: Number(t.view_count || 0),
      shareCount: Number(t.share_count || 0),
      bookmarkCount: Number(t.bookmark_count || 0),
      title: tMatch.title || t.slug,
      subtitle: tMatch.subtitle || null,
      shortDescription: tMatch.short_description || '',
      oneLineExplanation: tMatch.one_line_explanation || tMatch.short_description || null,
      coreConcept: tMatch.core_concept || tMatch.deep_explanation || '',
      summary60s: tMatch.summary_60s || '',
      quickTakeaways: Array.isArray(tMatch.quick_takeaways) ? tMatch.quick_takeaways : [],
      howItWorks: tMatch.how_it_works || tMatch.deep_explanation || '',
      whyItHappens: tMatch.why_it_happens || '',
      evolutionaryMechanism: tMatch.evolutionary_mechanism || null,
      whereYouEncounterIt: tMatch.where_you_encounter_it || null,
      commonMisconceptions: tMatch.common_misconceptions || '',
      visualExplanation: tMatch.visual_explanation || null,
      researchSummary: tMatch.research_summary || '',
      limitationsAndControversies: tMatch.limitations_and_controversies || '',
      howToRecognize: tMatch.how_to_recognize || '',
      howToRespond: tMatch.how_to_respond || '',
      psychologicalDefenses: Array.isArray(tMatch.psychological_defenses) ? tMatch.psychological_defenses : [],
      reflectionPrompt: tMatch.reflection_prompt || null,
      seoTitle: tMatch.seo_title || null,
      seoDescription: tMatch.seo_description || null,
      canonicalUrl: tMatch.canonical_url || null,
      ogImageUrl: tMatch.og_image_url || null,
      publishedAt: t.published_at || null,
      sections: [],
      examples: [],
      scenarios,
      practiceQuestions,
      references,
      tags: ['Cognitive Bias', 'Decision Making', 'Critical Thinking'],
      relatedTopics: [],
      deepExplanation: tMatch.deep_explanation || '',
    };
  } catch (err) {
    console.error('[Mentalab Mind] Error loading topic detail:', err);
    const local = getTopicBySlugOrId(slugOrId, lang);
    return local || (lang === 'hinglish' ? FALLBACK_TOPIC_CONFIRMATION_BIAS_HINGLISH : FALLBACK_TOPIC_CONFIRMATION_BIAS_EN);
  }
}

/**
 * Search curriculum by search query
 */
export function searchMindTopics(query: string, lang: MindLanguageCode = 'en'): MindTopicDetail[] {
  return searchCurriculum(query, lang);
}

/**
 * Filter topics by conceptual difficulty tier
 */
export function filterMindTopicsByDifficulty(
  difficulty: MindDifficulty,
  lang: MindLanguageCode = 'en'
): MindTopicDetail[] {
  return getTopicsByDifficulty(difficulty, lang);
}

// ============================================================================
// USER ENGAGEMENT: BOOKMARKS & REACTIONS
// ============================================================================

/**
 * Toggle bookmark for a user on a topic
 */
export async function toggleMindBookmark(
  userId: string,
  topicId: string
): Promise<{ isBookmarked: boolean; error?: Error }> {
  const supabase = getSupabase();
  if (!supabase || !userId) {
    return { isBookmarked: false };
  }

  try {
    const { data: existing } = await (supabase as any)
      .from('psychology_bookmarks')
      .select('id')
      .eq('user_id', userId)
      .eq('topic_id', topicId)
      .maybeSingle();

    if (existing) {
      await (supabase as any)
        .from('psychology_bookmarks')
        .delete()
        .eq('user_id', userId)
        .eq('topic_id', topicId);
      return { isBookmarked: false };
    } else {
      await (supabase as any)
        .from('psychology_bookmarks')
        .insert({ user_id: userId, topic_id: topicId });
      return { isBookmarked: true };
    }
  } catch (err) {
    return { isBookmarked: false, error: err as Error };
  }
}

/**
 * Check if a user has bookmarked a topic
 */
export async function checkMindBookmark(userId: string, topicId: string): Promise<boolean> {
  const supabase = getSupabase();
  if (!supabase || !userId) return false;

  try {
    const { data } = await (supabase as any)
      .from('psychology_bookmarks')
      .select('id')
      .eq('user_id', userId)
      .eq('topic_id', topicId)
      .maybeSingle();
    return Boolean(data);
  } catch {
    return false;
  }
}

/**
 * Set or update a single active reaction per user per topic
 */
export async function setMindReaction(
  userId: string,
  topicId: string,
  reactionType: MindReactionType
): Promise<{ success: boolean; error?: Error }> {
  const supabase = getSupabase();
  if (!supabase || !userId) return { success: false };

  try {
    const { error } = await (supabase as any)
      .from('psychology_reactions')
      .upsert(
        {
          user_id: userId,
          topic_id: topicId,
          reaction_type: reactionType,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,topic_id' }
      );

    return { success: !error, error: error ? new Error(error.message) : undefined };
  } catch (err) {
    return { success: false, error: err as Error };
  }
}

/**
 * Remove an active reaction
 */
export async function removeMindReaction(userId: string, topicId: string): Promise<boolean> {
  const supabase = getSupabase();
  if (!supabase || !userId) return false;

  try {
    const { error } = await (supabase as any)
      .from('psychology_reactions')
      .delete()
      .eq('user_id', userId)
      .eq('topic_id', topicId);
    return !error;
  } catch {
    return false;
  }
}

/**
 * Fetch reaction counts for a topic
 */
export async function getTopicReactionCounts(
  topicId: string,
  currentUserId?: string
): Promise<MindReactionCounts> {
  const counts: MindReactionCounts = {
    helpful: 0,
    interesting: 0,
    surprising: 0,
    learned: 0,
    thinking: 0,
    total: 0,
    userReaction: null,
  };

  const supabase = getSupabase();
  if (!supabase) return counts;

  try {
    const { data: rows } = await (supabase as any)
      .from('psychology_reactions')
      .select('user_id, reaction_type')
      .eq('topic_id', topicId);

    if (rows) {
      for (const r of rows) {
        counts.total++;
        if (r.reaction_type in counts) {
          (counts as any)[r.reaction_type]++;
        }
        if (currentUserId && r.user_id === currentUserId) {
          counts.userReaction = r.reaction_type as MindReactionType;
        }
      }
    }
  } catch (err) {
    console.error('[Mentalab Mind] Error loading reactions:', err);
  }

  return counts;
}

// ============================================================================
// LOGGING & PROGRESS TRACKING
// ============================================================================

/**
 * Log privacy-preserving aggregate share event
 */
export async function recordMindShare(
  topicId: string,
  platform: MindSharePlatform,
  lang: string = 'en'
): Promise<void> {
  const supabase = getSupabase();
  if (!supabase) return;

  try {
    await (supabase as any).from('psychology_shares').insert({
      topic_id: topicId,
      platform,
      language_code: lang,
    });
  } catch (err) {
    console.error('[Mentalab Mind] Error logging share:', err);
  }
}

/**
 * Record practice question attempt
 */
export async function recordPracticeAttempt(
  userId: string,
  questionId: string,
  selectedOptionId: string,
  isCorrect: boolean,
  timeSpentMs?: number
): Promise<void> {
  const supabase = getSupabase();
  if (!supabase || !userId) return;

  try {
    await (supabase as any).from('psychology_practice_attempts').insert({
      user_id: userId,
      question_id: questionId,
      selected_option_id: selectedOptionId,
      is_correct: isCorrect,
      time_spent_ms: timeSpentMs || null,
    });
  } catch (err) {
    console.error('[Mentalab Mind] Error logging practice attempt:', err);
  }
}

/**
 * Upsert user learning progress
 */
export async function updateMindUserProgress(
  userId: string,
  topicId: string,
  updates: {
    status?: 'not_started' | 'in_progress' | 'completed';
    completionPercent?: number;
    sectionId?: string;
    practiceAttempted?: boolean;
    practiceScore?: number;
  }
): Promise<void> {
  const supabase = getSupabase();
  if (!supabase || !userId) return;

  try {
    const { data: existing } = await (supabase as any)
      .from('psychology_user_progress')
      .select('sections_viewed, status, completion_percent')
      .eq('user_id', userId)
      .eq('topic_id', topicId)
      .maybeSingle();

    const sectionsViewed = Array.isArray(existing?.sections_viewed) ? existing.sections_viewed : [];
    if (updates.sectionId && !sectionsViewed.includes(updates.sectionId)) {
      sectionsViewed.push(updates.sectionId);
    }

    const payload: any = {
      user_id: userId,
      topic_id: topicId,
      status: updates.status || existing?.status || 'in_progress',
      completion_percent: updates.completionPercent !== undefined ? updates.completionPercent : existing?.completion_percent || 0,
      sections_viewed: sectionsViewed,
      last_viewed_at: new Date().toISOString(),
    };

    if (updates.practiceAttempted !== undefined) {
      payload.practice_attempted = updates.practiceAttempted;
    }
    if (updates.practiceScore !== undefined) {
      payload.practice_score = updates.practiceScore;
    }
    if (payload.status === 'completed') {
      payload.completed_at = new Date().toISOString();
    }

    await (supabase as any)
      .from('psychology_user_progress')
      .upsert(payload, { onConflict: 'user_id,topic_id' });
  } catch (err) {
    console.error('[Mentalab Mind] Error updating user progress:', err);
  }
}
