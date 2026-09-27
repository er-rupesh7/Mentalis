/**
 * Mentalab Mind — Search Engine Optimization & Structured Data Engine
 * 
 * Implements Google-compliant, human-centric SEO architecture:
 * 1. Clean URL generation (/mind/[category]/[slug])
 * 2. Natural, click-worthy titles answering user search intent (zero rigid templates)
 * 3. Specific, compelling meta descriptions with cognitive takeaways
 * 4. Genuine Schema.org Structured Data (Article, BreadcrumbList, FAQPage, CollectionPage)
 * 5. Complete Hreflang alternates across all 13 supported Indic languages + Hinglish (hi-Latn) + x-default
 * 6. Internal linking and contextual concept relationships
 */

import { MindLanguageCode, MindTopicDetail, MindCategory, PrimaryMindCategoryKey } from './types';
import { getMindSupportedLanguages, MIND_HREFLANG_MAP, isValidMindLanguage } from './mindLanguages';
import { PRIMARY_MIND_CATEGORIES, CURRICULUM_CATALOG } from './mindCurriculum';

export const DEFAULT_BASE_URL = 'https://mentalab.in';

export interface HreflangLink {
  hreflang: string;
  langCode: MindLanguageCode;
  url: string;
}

export interface MindSeoMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  hreflangLinks: HreflangLink[];
  openGraph: {
    title: string;
    description: string;
    url: string;
    type: string;
    locale: string;
    images?: Array<{ url: string; width: number; height: number; alt: string }>;
  };
  twitter?: {
    card: 'summary_large_image' | 'summary';
    title: string;
    description: string;
    images?: string[];
  };
  structuredData?: {
    articleSchema?: Record<string, any>;
    breadcrumbSchema?: Record<string, any>;
    faqSchema?: Record<string, any>;
  };
}

/**
 * Resolves the primary category slug for any given topic id or slug
 */
export function getCategorySlugForTopic(topicIdOrSlug: string): string {
  // Find in curriculum catalog
  for (const [topicKey, record] of Object.entries(CURRICULUM_CATALOG)) {
    const topic = record.en || record.hinglish || Object.values(record)[0];
    if (topic && (topic.id === topicIdOrSlug || topic.slug === topicIdOrSlug || topicKey === topicIdOrSlug)) {
      const catKey = topic.categoryId as PrimaryMindCategoryKey;
      if (PRIMARY_MIND_CATEGORIES[catKey]) {
        return PRIMARY_MIND_CATEGORIES[catKey].slug;
      }
    }
  }
  return 'cognitive-biases';
}

/**
 * Resolves category key from URL category slug
 */
export function getCategoryKeyFromSlug(categorySlug: string): PrimaryMindCategoryKey | null {
  for (const [key, cat] of Object.entries(PRIMARY_MIND_CATEGORIES)) {
    if (cat.slug === categorySlug || key === categorySlug) {
      return key as PrimaryMindCategoryKey;
    }
  }
  return null;
}

/**
 * Generates clean, SEO-optimized canonical URL for a psychology topic.
 * Form: /mind/[category-slug]/[topic-slug]
 */
export function generateCanonicalUrl(
  topicSlug: string,
  baseUrl: string = DEFAULT_BASE_URL,
  categorySlug?: string
): string {
  const cat = categorySlug || getCategorySlugForTopic(topicSlug);
  return `${baseUrl}/mind/${cat}/${encodeURIComponent(topicSlug)}`;
}

/**
 * Generates clean category landing URL.
 * Form: /mind/[category-slug]
 */
export function generateCategoryUrl(
  categorySlug: string,
  baseUrl: string = DEFAULT_BASE_URL
): string {
  return `${baseUrl}/mind/${encodeURIComponent(categorySlug)}`;
}

/**
 * Generates clean topic URL with optional language query parameter
 */
export function generateCleanTopicUrl(
  topicSlug: string,
  categorySlug?: string,
  langCode: MindLanguageCode = 'en',
  baseUrl: string = DEFAULT_BASE_URL
): string {
  const canonical = generateCanonicalUrl(topicSlug, baseUrl, categorySlug);
  return `${canonical}?lang=${encodeURIComponent(langCode)}`;
}

/**
 * NATURAL TITLE STRATEGY:
 * Generates organic, click-worthy, educational titles matched to genuine search intent.
 * Avoids rigid templating ("Confirmation Bias | Mentalab").
 */
export function generateNaturalSeoTitle(topic: MindTopicDetail): string {
  if (topic.seoTitle && topic.seoTitle.trim().length > 0) {
    return topic.seoTitle;
  }

  const category = topic.categoryId;

  switch (category) {
    case 'cognitive_biases':
      return `${topic.title}: What It Is, Why It Happens & Real-Life Examples | Mentalab Mind`;
    case 'manipulation_awareness':
      return `${topic.title}: Signs to Recognize, Real Scenarios & Psychological Defenses | Mentalab Mind`;
    case 'social_psychology':
    case 'persuasion_influence':
      return `${topic.title}: The Psychology, Mechanism & Everyday Decision Impact | Mentalab Mind`;
    case 'critical_thinking':
    case 'decision_making':
      return `${topic.title}: Mental Model, Core Principles & Practical Application | Mentalab Mind`;
    case 'self_regulation':
    case 'emotional_intelligence':
      return `${topic.title}: Psychological Mechanisms, Emotional Balance & Action Steps | Mentalab Mind`;
    case 'digital_psychology':
      return `${topic.title}: How Algorithms Shape Attention & Cognitive Defenses | Mentalab Mind`;
    case 'relationships_communication':
      return `${topic.title}: Psychological Dynamics, Real Scenarios & Healthy Boundaries | Mentalab Mind`;
    default:
      return `${topic.title}: What It Is, How It Works & Real-Life Examples | Mentalab Mind`;
  }
}

/**
 * SEARCH INTENT DESCRIPTION STRATEGY:
 * Summarizes the concept naturally, stating how it manifests and actionable insights.
 */
export function generateNaturalSeoDescription(topic: MindTopicDetail): string {
  if (topic.seoDescription && topic.seoDescription.trim().length > 0) {
    return topic.seoDescription;
  }

  const core = topic.oneLineExplanation || topic.summary30s || topic.shortDescription;
  return `Understand ${topic.title}: ${core} Explore real-life examples, cognitive mechanisms, peer-reviewed research, and actionable defenses on Mentalab Mind.`;
}

/**
 * Builds localized hreflang alternate links for all supported languages
 * PLUS Hinglish (hi-Latn) and x-default.
 */
export function generateHreflangLinks(
  topicSlug: string,
  baseUrl: string = DEFAULT_BASE_URL,
  categorySlug?: string
): HreflangLink[] {
  const cat = categorySlug || getCategorySlugForTopic(topicSlug);
  const languages = getMindSupportedLanguages();

  const links: HreflangLink[] = languages.map((lang) => {
    const hreflang = MIND_HREFLANG_MAP[lang.code] || lang.code;
    const url = generateCleanTopicUrl(topicSlug, cat, lang.code, baseUrl);
    return {
      hreflang,
      langCode: lang.code,
      url,
    };
  });

  // Add x-default pointing to the canonical English version
  links.push({
    hreflang: 'x-default',
    langCode: 'en',
    url: `${generateCanonicalUrl(topicSlug, baseUrl, cat)}?lang=en`,
  });

  return links;
}

/**
 * Schema.org Article Structured Data
 */
export function generateTopicArticleSchema(
  topic: MindTopicDetail,
  canonicalUrl: string,
  baseUrl: string = DEFAULT_BASE_URL
): Record<string, any> {
  const title = generateNaturalSeoTitle(topic);
  const description = generateNaturalSeoDescription(topic);
  const imageUrl = topic.ogImageUrl || `${baseUrl}/og-mind-default.png`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    headline: title,
    description,
    image: [imageUrl],
    author: {
      '@type': 'Organization',
      name: 'Mentalab Cognitive Science Team',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mentalab',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/icon.svg`,
      },
    },
    datePublished: topic.publishedAt || '2026-01-01T00:00:00+05:30',
    dateModified: new Date().toISOString(),
    about: {
      '@type': 'Thing',
      name: topic.title,
      description: topic.coreConcept,
    },
    educationalLevel: topic.difficulty,
    inLanguage: 'en',
  };
}

/**
 * Schema.org BreadcrumbList Structured Data
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Schema.org FAQPage Structured Data (GENUINE only)
 * Maps authentic scenario practice questions and explanations into Question/Answer pairs.
 */
export function generateTopicFaqSchema(topic: MindTopicDetail): Record<string, any> | null {
  const faqs: Array<{ question: string; answer: string }> = [];

  // 1. Definition / Core Concept Question
  if (topic.coreConcept) {
    faqs.push({
      question: `What is ${topic.title}?`,
      answer: topic.coreConcept + (topic.summary60s ? ` ${topic.summary60s}` : ''),
    });
  }

  // 2. Why does it happen?
  if (topic.whyItHappens) {
    faqs.push({
      question: `Why does ${topic.title} occur in the human brain?`,
      answer: topic.whyItHappens + (topic.evolutionaryMechanism ? ` ${topic.evolutionaryMechanism}` : ''),
    });
  }

  // 3. How to overcome it?
  if (topic.howToRespond) {
    faqs.push({
      question: `How can you recognize and overcome ${topic.title}?`,
      answer: topic.howToRespond,
    });
  }

  // 4. Genuine Practice Questions
  if (Array.isArray(topic.practiceQuestions)) {
    topic.practiceQuestions.slice(0, 2).forEach((pq) => {
      if (pq.prompt && pq.explanation) {
        faqs.push({
          question: pq.prompt,
          answer: pq.explanation,
        });
      }
    });
  }

  if (faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Schema.org CollectionPage for Categories
 */
export function generateCategoryCollectionSchema(
  category: MindCategory,
  topics: MindTopicDetail[],
  categoryUrl: string
): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Mentalab Mind — ${category.title}`,
    description: category.description || category.subtitle || '',
    url: categoryUrl,
    hasPart: topics.map((t) => ({
      '@type': 'Article',
      name: t.title,
      description: t.shortDescription,
      url: generateCanonicalUrl(t.slug || t.id, DEFAULT_BASE_URL, category.slug),
    })),
  };
}

/**
 * Constructs complete SEO metadata object for a topic in a specific language
 */
export function getMindSeoMetadata(
  topic: MindTopicDetail,
  langCode: MindLanguageCode = 'en',
  baseUrl: string = DEFAULT_BASE_URL
): MindSeoMetadata {
  const categorySlug = getCategorySlugForTopic(topic.slug || topic.id);
  const canonicalUrl = generateCanonicalUrl(topic.slug || topic.id, baseUrl, categorySlug);
  const localizedUrl = generateCleanTopicUrl(topic.slug || topic.id, categorySlug, langCode, baseUrl);
  const hreflangLinks = generateHreflangLinks(topic.slug || topic.id, baseUrl, categorySlug);

  const title = generateNaturalSeoTitle(topic);
  const description = generateNaturalSeoDescription(topic);
  const ogImage = topic.ogImageUrl || `${baseUrl}/og-mind-default.png`;

  const breadcrumbs = [
    { name: 'Home', url: baseUrl },
    { name: 'Mentalab Mind', url: `${baseUrl}/mind` },
    { name: PRIMARY_MIND_CATEGORIES[topic.categoryId as PrimaryMindCategoryKey]?.titleEn || 'Cognitive Track', url: `${baseUrl}/mind/${categorySlug}` },
    { name: topic.title, url: canonicalUrl },
  ];

  return {
    title,
    description,
    canonicalUrl,
    hreflangLinks,
    openGraph: {
      title,
      description,
      url: localizedUrl,
      type: 'article',
      locale: langCode === 'hinglish' ? 'hi_IN' : langCode,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${topic.title} Cognitive Concept Graphic`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    structuredData: {
      articleSchema: generateTopicArticleSchema(topic, canonicalUrl, baseUrl),
      breadcrumbSchema: generateBreadcrumbSchema(breadcrumbs),
      faqSchema: generateTopicFaqSchema(topic) || undefined,
    },
  };
}

/**
 * Synchronizes the browser URL bar with the active topic and language without reloading
 */
export function syncMindUrl(
  topicSlug: string,
  langCode: MindLanguageCode,
  replaceState = true
): void {
  if (typeof window === 'undefined') return;

  try {
    const categorySlug = getCategorySlugForTopic(topicSlug);
    const cleanPath = `/mind/${categorySlug}/${encodeURIComponent(topicSlug)}`;
    const url = new URL(window.location.origin + cleanPath);
    if (langCode !== 'en') {
      url.searchParams.set('lang', langCode);
    }

    if (replaceState) {
      window.history.replaceState({ topic: topicSlug, lang: langCode }, '', url.pathname + url.search);
    } else {
      window.history.pushState({ topic: topicSlug, lang: langCode }, '', url.pathname + url.search);
    }
  } catch (err) {
    // Non-blocking in restricted iframe / sandbox environments
  }
}

/**
 * Parses initial topic and language parameters from browser URL (supports both clean paths & query parameters)
 */
export function parseMindUrlParams(): { topicSlug?: string; lang?: MindLanguageCode; categorySlug?: string } | null {
  if (typeof window === 'undefined') return null;

  try {
    const pathname = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);

    // 1. Clean Path Check: /mind/[category]/[slug]
    const matchTopicPath = pathname.match(/^\/mind\/([^/]+)\/([^/]+)/);
    if (matchTopicPath) {
      const categorySlug = matchTopicPath[1];
      const topicSlug = matchTopicPath[2];
      const rawLang = searchParams.get('lang');
      const lang = rawLang && isValidMindLanguage(rawLang) ? rawLang : 'en';
      return { topicSlug, lang, categorySlug };
    }

    // 2. Category Landing Path: /mind/[category]
    const matchCatPath = pathname.match(/^\/mind\/([^/]+)/);
    if (matchCatPath && matchCatPath[1] !== 'page') {
      const categorySlug = matchCatPath[1];
      return { categorySlug, lang: 'en' };
    }

    // 3. Query string fallback: ?tab=mind&topic=<slug>&lang=<lang> or ?view=mind&...
    const topicSlug = searchParams.get('topic') || undefined;
    const rawLang = searchParams.get('lang');
    const lang = rawLang && isValidMindLanguage(rawLang) ? rawLang : undefined;
    const categorySlug = topicSlug ? getCategorySlugForTopic(topicSlug) : undefined;

    return { topicSlug, lang, categorySlug };
  } catch (err) {
    return null;
  }
}

/**
 * Injects or updates SEO tags in document head
 */
export function applyMindSeoTagsToHead(
  topic: MindTopicDetail,
  langCode: MindLanguageCode,
  baseUrl: string = DEFAULT_BASE_URL
): void {
  if (typeof document === 'undefined') return;

  const seo = getMindSeoMetadata(topic, langCode, baseUrl);

  // 1. Update Title
  document.title = seo.title;

  // 2. Update Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', seo.description);

  // 3. Update Canonical Tag
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', seo.canonicalUrl);

  // 4. Update Hreflang Alternates (clean previous mind hreflangs first)
  document.querySelectorAll('link[rel="alternate"][data-mind-hreflang]').forEach((el) => el.remove());
  seo.hreflangLinks.forEach((link) => {
    const altTag = document.createElement('link');
    altTag.setAttribute('rel', 'alternate');
    altTag.setAttribute('hreflang', link.hreflang);
    altTag.setAttribute('href', link.url);
    altTag.setAttribute('data-mind-hreflang', 'true');
    document.head.appendChild(altTag);
  });
}
