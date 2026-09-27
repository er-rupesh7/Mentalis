import { describe, it, expect } from 'vitest';
import {
  getCategorySlugForTopic,
  getCategoryKeyFromSlug,
  generateCanonicalUrl,
  generateCategoryUrl,
  generateCleanTopicUrl,
  generateNaturalSeoTitle,
  generateNaturalSeoDescription,
  generateHreflangLinks,
  generateTopicArticleSchema,
  generateBreadcrumbSchema,
  generateTopicFaqSchema,
  generateCategoryCollectionSchema,
  getMindSeoMetadata,
  DEFAULT_BASE_URL,
} from '../mind/mindSeo';
import { FALLBACK_TOPIC_CONFIRMATION_BIAS_EN } from '../mind/mindDbEngine';
import { getCurriculumCategories, getTopicsByCategory } from '../mind/mindCurriculum';

describe('Mentalab Mind SEO & Structured Data Architecture', () => {
  describe('Clean URL Structure & Category Resolution', () => {
    it('resolves correct category slug for cognitive biases and decision making', () => {
      expect(getCategorySlugForTopic('confirmation_bias')).toBe('cognitive-biases');
      expect(getCategorySlugForTopic('confirmation-bias')).toBe('cognitive-biases');
      expect(getCategorySlugForTopic('sunk_cost_fallacy')).toBe('decision-making');
      expect(getCategorySlugForTopic('anchoring_effect')).toBe('consumer-and-advertising-psychology');
    });

    it('resolves correct category slug for social psychology and influence', () => {
      expect(getCategorySlugForTopic('social_proof')).toBe('social-psychology');
      expect(getCategorySlugForTopic('reciprocity_principle')).toBe('persuasion-and-influence');
    });

    it('resolves category key from URL category slug', () => {
      expect(getCategoryKeyFromSlug('cognitive-biases')).toBe('cognitive_biases');
      expect(getCategoryKeyFromSlug('social-psychology')).toBe('social_psychology');
      expect(getCategoryKeyFromSlug('unknown-slug')).toBeNull();
    });

    it('generates clean canonical URLs matching /mind/[category]/[slug]', () => {
      const canonical = generateCanonicalUrl('confirmation-bias');
      expect(canonical).toBe('https://mentalab.in/mind/cognitive-biases/confirmation-bias');
    });

    it('generates clean category landing URLs matching /mind/[category]', () => {
      const catUrl = generateCategoryUrl('cognitive-biases');
      expect(catUrl).toBe('https://mentalab.in/mind/cognitive-biases');
    });

    it('generates clean localized URLs with query parameter when non-English', () => {
      const hinglishUrl = generateCleanTopicUrl('confirmation-bias', undefined, 'hinglish');
      expect(hinglishUrl).toBe('https://mentalab.in/mind/cognitive-biases/confirmation-bias?lang=hinglish');
    });
  });

  describe('Natural Title Strategy (Intent-Driven, No Rigid Templating)', () => {
    it('generates intent-driven titles answering actual educational search intent', () => {
      const title = generateNaturalSeoTitle(FALLBACK_TOPIC_CONFIRMATION_BIAS_EN);
      expect(title).toContain('Confirmation Bias');
      expect(title).toContain('What It Is');
      expect(title).toContain('Examples');
      expect(title).not.toBe('Confirmation Bias | Mentalab');
    });

    it('generates compelling meta descriptions with real-world context', () => {
      const desc = generateNaturalSeoDescription(FALLBACK_TOPIC_CONFIRMATION_BIAS_EN);
      expect(desc).toContain('Confirmation Bias');
      expect(desc).toContain('defense lawyer');
      expect(desc).toContain('peer-reviewed');
    });
  });

  describe('Hreflang Alternates (All 13 Indic Languages + Hinglish + x-default)', () => {
    it('generates accurate hreflang alternates for all supported languages', () => {
      const links = generateHreflangLinks('confirmation-bias');
      // 14 languages + 1 x-default = 15 links
      expect(links.length).toBe(15);

      const hinglish = links.find((l) => l.hreflang === 'hi-Latn');
      expect(hinglish).toBeDefined();
      expect(hinglish?.url).toContain('lang=hinglish');

      const hindi = links.find((l) => l.hreflang === 'hi');
      expect(hindi).toBeDefined();
      expect(hindi?.url).toContain('lang=hi');

      const xDefault = links.find((l) => l.hreflang === 'x-default');
      expect(xDefault).toBeDefined();
    });
  });

  describe('Genuine Schema.org Structured Data', () => {
    const canonical = 'https://mentalab.in/mind/cognitive-biases/confirmation-bias';

    it('generates valid Article schema without fake metadata', () => {
      const article = generateTopicArticleSchema(FALLBACK_TOPIC_CONFIRMATION_BIAS_EN, canonical);
      expect(article['@type']).toBe('Article');
      expect(article.headline).toBeDefined();
      expect(article.author.name).toBe('Mentalab Cognitive Science Team');
      expect(article.publisher.name).toBe('Mentalab');
      expect(article.mainEntityOfPage['@id']).toBe(canonical);
    });

    it('generates valid BreadcrumbList schema with 1-based hierarchy', () => {
      const breadcrumbs = [
        { name: 'Home', url: 'https://mentalab.in' },
        { name: 'Mentalab Mind', url: 'https://mentalab.in/mind' },
        { name: 'Cognitive Biases', url: 'https://mentalab.in/mind/cognitive-biases' },
        { name: 'Confirmation Bias', url: canonical },
      ];
      const schema = generateBreadcrumbSchema(breadcrumbs);
      expect(schema['@type']).toBe('BreadcrumbList');
      expect(schema.itemListElement.length).toBe(4);
      expect(schema.itemListElement[0].position).toBe(1);
      expect(schema.itemListElement[3].position).toBe(4);
      expect(schema.itemListElement[3].name).toBe('Confirmation Bias');
    });

    it('generates FAQPage schema from authentic practice & core concept questions', () => {
      const faq = generateTopicFaqSchema(FALLBACK_TOPIC_CONFIRMATION_BIAS_EN);
      expect(faq).not.toBeNull();
      expect(faq?.['@type']).toBe('FAQPage');
      expect(Array.isArray(faq?.mainEntity)).toBe(true);
      expect(faq?.mainEntity.length).toBeGreaterThan(0);

      const firstQ = faq?.mainEntity[0];
      expect(firstQ['@type']).toBe('Question');
      expect(firstQ.name).toContain('Confirmation Bias');
      expect(firstQ.acceptedAnswer['@type']).toBe('Answer');
    });

    it('generates CollectionPage schema for category landing tracks', () => {
      const categories = getCurriculumCategories('en');
      const cat = categories[0];
      const topics = getTopicsByCategory(cat.id, 'en');
      const schema = generateCategoryCollectionSchema(cat, topics, 'https://mentalab.in/mind/cognitive-biases');

      expect(schema['@type']).toBe('CollectionPage');
      expect(schema.name).toContain(cat.title);
      expect(Array.isArray(schema.hasPart)).toBe(true);
      expect(schema.hasPart.length).toBe(topics.length);
    });
  });

  describe('Comprehensive Topic Metadata Bundle', () => {
    it('bundles titles, descriptions, canonicals, hreflangs, and schemas', () => {
      const meta = getMindSeoMetadata(FALLBACK_TOPIC_CONFIRMATION_BIAS_EN, 'en');
      expect(meta.title).toBeDefined();
      expect(meta.description).toBeDefined();
      expect(meta.canonicalUrl).toContain('/mind/cognitive-biases/');
      expect(meta.openGraph.type).toBe('article');
      expect(meta.structuredData?.articleSchema).toBeDefined();
      expect(meta.structuredData?.breadcrumbSchema).toBeDefined();
    });
  });
});
