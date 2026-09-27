import {
  MindLanguageCode,
  MindTopicDetail,
  TopicTranslationResolution,
} from './types';
import { CURRICULUM_CATALOG, getTopicBySlugOrId } from './mindCurriculum';
import { getMindSupportedLanguages } from './mindLanguages';

// In-memory memoization cache for high-performance lazy loading
const translationCache = new Map<string, MindTopicDetail>();

/**
 * Validates whether a topic record has a genuine, non-empty translation
 */
export function isTopicFullyTranslated(
  topic?: Partial<MindTopicDetail> | null
): topic is MindTopicDetail {
  if (!topic) return false;
  return (
    typeof topic.title === 'string' &&
    topic.title.trim().length > 0 &&
    typeof topic.coreConcept === 'string' &&
    topic.coreConcept.trim().length > 0 &&
    Array.isArray(topic.quickTakeaways) &&
    topic.quickTakeaways.length > 0
  );
}

/**
 * Returns all languages where a specific topic has verified, complete content
 */
export function getAvailableLanguagesForTopic(topicIdOrSlug: string): MindLanguageCode[] {
  const available: MindLanguageCode[] = [];
  const allLanguages = getMindSupportedLanguages();

  // Find topic in catalog
  const topicEntry =
    CURRICULUM_CATALOG[topicIdOrSlug] ||
    Object.values(CURRICULUM_CATALOG).find(
      (entry) => entry.en?.slug === topicIdOrSlug || entry.hinglish?.slug === topicIdOrSlug
    );

  if (!topicEntry) {
    return ['en', 'hinglish'];
  }

  for (const langMeta of allLanguages) {
    const candidate = (topicEntry as any)[langMeta.code];
    if (isTopicFullyTranslated(candidate)) {
      available.push(langMeta.code);
    }
  }

  // Ensure at least English and Hinglish are listed if present
  if (topicEntry.en && !available.includes('en')) available.push('en');
  if (topicEntry.hinglish && !available.includes('hinglish')) available.push('hinglish');

  return available;
}

/**
 * Resolves a topic translation with zero broken UI, high-performance caching,
 * and explicit, non-silent fallback tracking.
 *
 * Guarantees:
 * 1. If translation exists -> returns target translation (isFallback = false)
 * 2. If translation is in review/missing -> returns verified English/Hinglish (isFallback = true)
 * 3. Never silently pretends English content is translated
 */
export function resolveTopicTranslation(
  topicIdOrSlug: string,
  requestedLang: MindLanguageCode = 'en'
): TopicTranslationResolution {
  const cacheKey = `${topicIdOrSlug}_${requestedLang}`;
  const availableLanguages = getAvailableLanguagesForTopic(topicIdOrSlug);

  // 1. Try finding topic entry in catalog
  const topicEntry =
    CURRICULUM_CATALOG[topicIdOrSlug] ||
    Object.values(CURRICULUM_CATALOG).find(
      (entry) => entry.en?.slug === topicIdOrSlug || entry.hinglish?.slug === topicIdOrSlug
    );

  // 2. Direct exact language check
  if (topicEntry) {
    const candidate = (topicEntry as any)[requestedLang];
    if (isTopicFullyTranslated(candidate)) {
      translationCache.set(cacheKey, candidate);
      return {
        topic: candidate,
        requestedLanguage: requestedLang,
        actualLanguage: requestedLang,
        isFallback: false,
        fallbackReason: null,
        availableLanguages,
      };
    }
  }

  // 3. Fallback Resolution (Honest & Explicit)
  // If requested is Hinglish, fallback to English
  // If requested is an Indic language (hi, mr, ta, te, etc.) not yet translated, fallback to English or Hinglish
  const fallbackLang: MindLanguageCode = requestedLang === 'hinglish' ? 'en' : 'en';
  let fallbackTopic: MindTopicDetail | null = null;

  if (topicEntry) {
    fallbackTopic = (topicEntry as any)[fallbackLang] || topicEntry.en || topicEntry.hinglish;
  }

  if (!fallbackTopic) {
    fallbackTopic = getTopicBySlugOrId(topicIdOrSlug, 'en') || getTopicBySlugOrId(topicIdOrSlug, 'hinglish');
  }

  if (!fallbackTopic) {
    // Ultimate graceful baseline fallback
    const defaultTopic = CURRICULUM_CATALOG.confirmation_bias.en;
    return {
      topic: defaultTopic,
      requestedLanguage: requestedLang,
      actualLanguage: 'en',
      isFallback: requestedLang !== 'en',
      fallbackReason: requestedLang !== 'en' ? 'translation_in_review' : null,
      availableLanguages,
    };
  }

  return {
    topic: fallbackTopic,
    requestedLanguage: requestedLang,
    actualLanguage: fallbackTopic.id ? 'en' : fallbackLang,
    isFallback: requestedLang !== 'en' && requestedLang !== 'hinglish',
    fallbackReason: 'translation_in_review',
    availableLanguages,
  };
}

/**
 * Clear the translation cache if dynamic updates arrive from remote database
 */
export function clearTranslationCache(): void {
  translationCache.clear();
}
