import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  CURRICULUM_CATALOG,
  getTopicBySlugOrId,
  PRIMARY_MIND_CATEGORIES,
} from '../../../../core/mind/mindCurriculum';
import {
  getMindSeoMetadata,
  generateCanonicalUrl,
  generateBreadcrumbSchema,
  generateTopicArticleSchema,
  generateTopicFaqSchema,
  DEFAULT_BASE_URL,
} from '../../../../core/mind/mindSeo';
import {
  MindLanguageCode,
  PrimaryMindCategoryKey,
} from '../../../../core/mind/types';
import { MindTopicPageView } from '../../../../components/mind/MindTopicPageView';

interface TopicPageProps {
  params: {
    category: string;
    slug: string;
  };
  searchParams?: {
    lang?: string;
  };
}

export function generateStaticParams() {
  const params: Array<{ category: string; slug: string }> = [];

  for (const [topicKey, record] of Object.entries(CURRICULUM_CATALOG)) {
    const topic = record.en || record.hinglish || Object.values(record)[0];
    if (topic && topic.categoryId) {
      const catKey = topic.categoryId as PrimaryMindCategoryKey;
      const categorySlug = PRIMARY_MIND_CATEGORIES[catKey]?.slug || 'cognitive-biases';
      const slug = topic.slug || topic.id || topicKey;

      params.push({ category: categorySlug, slug });

      if (topic.id && topic.id !== slug) {
        params.push({ category: categorySlug, slug: topic.id });
      }
    }
  }

  return params;
}

export function generateMetadata({ params, searchParams }: TopicPageProps): Metadata {
  const lang = (searchParams?.lang as MindLanguageCode) || 'en';
  const topic = getTopicBySlugOrId(params.slug, lang);

  if (!topic) {
    return {
      title: 'Psychology Concept Not Found | Mentalab Mind',
    };
  }

  const seo = getMindSeoMetadata(topic, lang);

  return {
    title: {
      absolute: seo.title,
    },
    description: seo.description,
    alternates: {
      canonical: seo.canonicalUrl,
      languages: Object.fromEntries(
        seo.hreflangLinks.map((l) => [l.hreflang, l.url])
      ),
    },
    openGraph: {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      url: seo.openGraph.url,
      type: 'article',
      locale: seo.openGraph.locale,
      images: seo.openGraph.images,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.twitter?.title,
      description: seo.twitter?.description,
      images: seo.twitter?.images,
    },
  };
}

export default function TopicPage({ params, searchParams }: TopicPageProps) {
  const lang = (searchParams?.lang as MindLanguageCode) || 'en';
  const topic = getTopicBySlugOrId(params.slug, lang);

  if (!topic) {
    notFound();
  }

  const categoryKey = topic.categoryId as PrimaryMindCategoryKey;
  const category = PRIMARY_MIND_CATEGORIES[categoryKey] || {
    slug: params.category,
    titleEn: 'Cognitive Science',
  };

  const canonicalUrl = generateCanonicalUrl(topic.slug || topic.id, DEFAULT_BASE_URL, category.slug);

  // Schema.org Structured Data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: DEFAULT_BASE_URL },
    { name: 'Mentalab Mind', url: `${DEFAULT_BASE_URL}/mind` },
    { name: category.titleEn, url: `${DEFAULT_BASE_URL}/mind/${category.slug}` },
    { name: topic.title, url: canonicalUrl },
  ]);

  const articleSchema = generateTopicArticleSchema(topic, canonicalUrl, DEFAULT_BASE_URL);
  const faqSchema = generateTopicFaqSchema(topic);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [breadcrumbSchema, articleSchema, ...(faqSchema ? [faqSchema] : [])],
  };

  return (
    <>
      {/* Schema.org Structured Data (Article, Breadcrumbs, Genuine FAQs) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Unified, Responsive, Multilingual Mind Topic Experience (Zero Duplication) */}
      <MindTopicPageView
        initialTopic={topic}
        initialCategory={{
          slug: category.slug,
          titleEn: category.titleEn,
        }}
        initialLanguage={lang}
        canonicalUrl={canonicalUrl}
      />
    </>
  );
}
