import { describe, it, expect } from 'vitest';
import {
  getMindSupportedLanguages,
  getMindLanguageMeta,
  isValidMindLanguage,
  HINGLISH_LANGUAGE_META,
  MIND_HREFLANG_MAP,
} from '../mind/mindLanguages';
import {
  generateCanonicalUrl,
  generateHreflangLinks,
  getMindSeoMetadata,
} from '../mind/mindSeo';
import {
  resolveTopicTranslation,
  getAvailableLanguagesForTopic,
  isTopicFullyTranslated,
} from '../mind/translationLoader';
import { TOPIC_CONFIRMATION_BIAS } from '../mind/mindCurriculum';
import { SUPPORTED_LANGUAGES } from '../../i18n/config';

describe('Mentalab Mind Multilingual Architecture & Hinglish Reading Mode', () => {
  describe('Dynamic Language Registry & Hinglish Dedication', () => {
    it('synchronizes dynamically with the existing 13 supported Indian/international languages', () => {
      const languages = getMindSupportedLanguages();
      // Must contain all 13 base languages PLUS Hinglish = 14 total
      expect(languages.length).toBe(SUPPORTED_LANGUAGES.length + 1);

      SUPPORTED_LANGUAGES.forEach((baseLang) => {
        const found = languages.find((l) => l.code === baseLang.code);
        expect(found).toBeDefined();
        expect(found?.nativeName).toBe(baseLang.nativeName);
        expect(found?.englishName).toBe(baseLang.englishName);
      });
    });

    it('designates Hinglish as a first-class dedicated reading mode', () => {
      const languages = getMindSupportedLanguages();
      const hinglish = languages.find((l) => l.code === 'hinglish');
      expect(hinglish).toBeDefined();
      expect(hinglish?.isDedicatedReadingMode).toBe(true);
      expect(hinglish?.nativeName).toBe('Hinglish');
      expect(hinglish?.script).toBe('Latin');
      expect(hinglish?.hreflang).toBe('hi-Latn');
    });

    it('validates mind language codes strictly and rejects arbitrary strings', () => {
      expect(isValidMindLanguage('en')).toBe(true);
      expect(isValidMindLanguage('hinglish')).toBe(true);
      expect(isValidMindLanguage('hi')).toBe(true);
      expect(isValidMindLanguage('ta')).toBe(true);
      expect(isValidMindLanguage('mr')).toBe(true);
      expect(isValidMindLanguage('es')).toBe(false);
      expect(isValidMindLanguage('random_gibberish')).toBe(false);
    });

    it('retrieves language meta safely with English fallback for unknown codes', () => {
      const ta = getMindLanguageMeta('ta');
      expect(ta.nativeName).toBe('தமிழ்');
      expect(ta.englishName).toBe('Tamil');

      const hinglish = getMindLanguageMeta('hinglish');
      expect(hinglish.nativeName).toBe('Hinglish');
      expect(hinglish.isDedicatedReadingMode).toBe(true);

      const unknown = getMindLanguageMeta('xyz');
      expect(unknown.code).toBe('en');
    });
  });

  describe('SEO & Canonical URL Strategy', () => {
    it('generates canonical URL for psychology topic preventing query duplication', () => {
      const canonical = generateCanonicalUrl('confirmation-bias');
      expect(canonical).toBe('https://mentalab.in/mind/cognitive-biases/confirmation-bias');
    });

    it('generates accurate hreflang alternates for all supported languages plus x-default', () => {
      const links = generateHreflangLinks('confirmation-bias');
      // 14 languages + 1 x-default = 15 links
      expect(links.length).toBe(15);

      const enLink = links.find((l) => l.hreflang === 'en');
      expect(enLink).toBeDefined();
      expect(enLink?.url).toContain('lang=en');

      const hinglishLink = links.find((l) => l.hreflang === 'hi-Latn');
      expect(hinglishLink).toBeDefined();
      expect(hinglishLink?.url).toContain('lang=hinglish');

      const xDefaultLink = links.find((l) => l.hreflang === 'x-default');
      expect(xDefaultLink).toBeDefined();
      expect(xDefaultLink?.url).toContain('lang=en');
    });

    it('generates comprehensive SEO metadata for topics', () => {
      const topic = TOPIC_CONFIRMATION_BIAS.en;
      const seo = getMindSeoMetadata(topic, 'en');

      expect(seo.title).toBe(topic.seoTitle);
      expect(seo.canonicalUrl).toContain('confirmation-bias');
      expect(seo.hreflangLinks.length).toBeGreaterThanOrEqual(14);
      expect(seo.openGraph.type).toBe('article');
    });
  });

  describe('Translation UX & Graceful Fallback Guarantee', () => {
    it('returns exact translation when available without fallback', () => {
      const enRes = resolveTopicTranslation('confirmation_bias', 'en');
      expect(enRes.isFallback).toBe(false);
      expect(enRes.actualLanguage).toBe('en');
      expect(enRes.fallbackReason).toBeNull();
      expect(enRes.topic.title).toContain('Confirmation Bias');

      const hinglishRes = resolveTopicTranslation('confirmation_bias', 'hinglish');
      expect(hinglishRes.isFallback).toBe(false);
      expect(hinglishRes.actualLanguage).toBe('hinglish');
      expect(hinglishRes.fallbackReason).toBeNull();
      expect(hinglishRes.topic.summary30s).toContain('defense lawyer');

      const hiRes = resolveTopicTranslation('confirmation_bias', 'hi');
      expect(hiRes.isFallback).toBe(false);
      expect(hiRes.actualLanguage).toBe('hi');
      expect(hiRes.topic.title).toContain('कन्फर्मेशन बायस');
    });

    it('never silently pretends English is translated when an Indic language is in review', () => {
      const tamilRes = resolveTopicTranslation('confirmation_bias', 'ta');
      expect(tamilRes.isFallback).toBe(true);
      expect(tamilRes.requestedLanguage).toBe('ta');
      expect(tamilRes.actualLanguage).toBe('en');
      expect(tamilRes.fallbackReason).toBe('translation_in_review');
      // Content is complete and valid, not an empty or broken object
      expect(tamilRes.topic.title).toBeDefined();
      expect(tamilRes.topic.coreConcept.length).toBeGreaterThan(20);
    });

    it('lists available verified languages per topic truthfully', () => {
      const available = getAvailableLanguagesForTopic('confirmation_bias');
      expect(available).toContain('en');
      expect(available).toContain('hinglish');
      expect(available).toContain('hi');
    });

    it('correctly validates topic completeness with isTopicFullyTranslated', () => {
      expect(isTopicFullyTranslated(TOPIC_CONFIRMATION_BIAS.en)).toBe(true);
      expect(isTopicFullyTranslated(TOPIC_CONFIRMATION_BIAS.hinglish)).toBe(true);
      expect(isTopicFullyTranslated(TOPIC_CONFIRMATION_BIAS.hi)).toBe(true);
      expect(isTopicFullyTranslated({} as any)).toBe(false);
      expect(isTopicFullyTranslated(null)).toBe(false);
    });
  });

  describe('Hinglish Quality & Conversational Natural Flow', () => {
    it('ensures Hinglish topic uses Roman script and conversational Hindi with standard terms', () => {
      const topic = TOPIC_CONFIRMATION_BIAS.hinglish;
      expect(topic.summary30s).toContain('dimaag');
      expect(topic.summary30s).toContain('defense lawyer');
      expect(topic.summary30s).toContain('impartial judge');

      // Check real-life Indian scenario
      const indianScenario = topic.scenarios.find((s) => s.scenarioType === 'indian_context');
      expect(indianScenario).toBeDefined();
      expect(indianScenario?.title).toContain('WhatsApp');
      expect(indianScenario?.optimalResponse).toContain('clinical trials');

      // Check practice question options
      const question = topic.practiceQuestions[0];
      expect(question).toBeDefined();
      expect(question.prompt).toContain('Confirmation Bias');
      const correctOpt = question.options.find((o) => o.isCorrect);
      expect(correctOpt?.feedbackText).toContain('Sahi!');
    });
  });
});
