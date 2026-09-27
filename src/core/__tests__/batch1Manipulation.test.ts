import {
  CURRICULUM_CATALOG,
  getTopicBySlugOrId,
  getTopicsByCategory,
} from '../mind/mindCurriculum';
import { resolveTopicTranslation, getAvailableLanguagesForTopic } from '../mind/translationLoader';
import { getCategorySlugForTopic, generateCanonicalUrl } from '../mind/mindSeo';
import { MindLanguageCode } from '../mind/types';

describe('Mentalab Mind — Batch 1: Manipulation & Influence Patterns Validation', () => {
  const BATCH_1_TOPIC_KEYS = [
    'victim_playing',
    'guilt_tripping',
    'emotional_blackmail',
    'fear_based_persuasion',
    'intimidation',
  ];

  const BATCH_1_SLUGS = [
    'victim-card-patterns',
    'guilt-tripping',
    'emotional-blackmail',
    'fear-based-persuasion',
    'intimidation',
  ];

  const ALL_14_LANGUAGES: MindLanguageCode[] = [
    'en',
    'hinglish',
    'hi',
    'gu',
    'mr',
    'bn',
    'ta',
    'te',
    'kn',
    'ml',
    'pa',
    'ur',
    'or',
    'as',
  ];

  test('All 5 Batch 1 topics are registered in CURRICULUM_CATALOG', () => {
    for (const key of BATCH_1_TOPIC_KEYS) {
      expect(CURRICULUM_CATALOG[key]).toBeDefined();
    }
  });

  test('All 5 Batch 1 topics belong to manipulation_awareness and map to manipulation-awareness slug', () => {
    for (const key of BATCH_1_TOPIC_KEYS) {
      const topicEn = CURRICULUM_CATALOG[key].en;
      expect(topicEn.categoryId).toBe('manipulation_awareness');

      const catSlug = getCategorySlugForTopic(topicEn.slug);
      expect(catSlug).toBe('manipulation-awareness');

      const canonicalUrl = generateCanonicalUrl(topicEn.slug);
      expect(canonicalUrl).toContain(`/mind/manipulation-awareness/${topicEn.slug}`);
    }
  });

  test('Each of the 5 topics has complete content across all 14 languages with zero fallback', () => {
    for (const key of BATCH_1_TOPIC_KEYS) {
      const topicRecord = CURRICULUM_CATALOG[key];

      for (const lang of ALL_14_LANGUAGES) {
        const resolution = resolveTopicTranslation(key, lang);
        expect(resolution.isFallback).toBe(false);
        expect(resolution.actualLanguage).toBe(lang);

        const topic = resolution.topic;
        expect(topic.title).toBeTruthy();
        expect(topic.title.trim().length).toBeGreaterThan(5);
        expect(topic.summary30s).toBeTruthy();
        expect(topic.summary30s.trim().length).toBeGreaterThan(20);
        expect(topic.oneLineExplanation).toBeTruthy();
        if (lang === 'en' || lang === 'hinglish') {
          expect(topic.oneLineExplanation).toContain('In simple terms:');
        } else {
          expect(topic.oneLineExplanation!.length).toBeGreaterThan(10);
        }
        expect(topic.coreConcept).toBeTruthy();
        expect(topic.quickTakeaways.length).toBeGreaterThanOrEqual(3);
      }
    }
  });

  test('Each of the 5 topics satisfies the 30-Section scientific learning architecture', () => {
    for (const key of BATCH_1_TOPIC_KEYS) {
      const topic = CURRICULUM_CATALOG[key].en;

      // Section A: 30-second summary
      expect(topic.summary30s.length).toBeGreaterThan(50);

      // Section B: One-sentence definition
      expect(topic.oneLineExplanation).toMatch(/^In simple terms:/);

      // Section C: What exactly is happening
      expect(topic.coreConcept.length).toBeGreaterThan(50);
      expect(topic.summary60s.length).toBeGreaterThan(100);

      // Section D: Psychological mechanisms
      expect(topic.whyItHappens.length).toBeGreaterThan(50);
      expect(topic.evolutionaryMechanism).toBeDefined();

      // Section F: Warning signs checklist
      expect(topic.howToRecognize.length).toBeGreaterThanOrEqual(4);

      // Section G: Normal behavior vs unhealthy pattern comparison
      expect(topic.visualExplanation).toBeDefined();
      expect(topic.visualExplanation?.analogySideA?.label).toBeDefined();
      expect(topic.visualExplanation?.analogySideB?.label).toBeDefined();

      // Section H & I: Real-life examples
      expect(topic.examples.length).toBeGreaterThanOrEqual(1);
      expect(topic.examples[0].description).toBeDefined();
      expect(topic.examples[0].takeaway).toBeDefined();

      // Section J: Indian context scenario
      expect(topic.scenarios.length).toBeGreaterThanOrEqual(1);
      const indianScenario = topic.scenarios.find((s) => s.scenarioType === 'indian_context');
      expect(indianScenario).toBeDefined();
      expect(indianScenario?.narrativeContext.length).toBeGreaterThan(50);
      expect(indianScenario?.optimalResponse.length).toBeGreaterThan(30);

      // Section K: Interactive Scenario (Spot the Pattern)
      expect(topic.interactiveScenarios).toBeDefined();
      expect(topic.interactiveScenarios!.length).toBeGreaterThanOrEqual(1);
      const scen = topic.interactiveScenarios![0];
      expect(scen.options.length).toBeGreaterThanOrEqual(3);
      const correctOptions = scen.options.filter((o) => o.isCorrect);
      expect(correctOptions.length).toBe(1); // exactly one correct option
      expect(scen.revealedExplanation.actionableAntidote).toBeDefined();

      // Section L: "But Be Careful" Nuance & Limitations
      expect(topic.limitationsAndControversies).toBeDefined();
      expect(topic.limitationsAndControversies!.length).toBeGreaterThan(50);

      // Section M & N: How to respond & Concrete Scripts
      expect(topic.howToRespond.length).toBeGreaterThan(50);
      expect(topic.psychologicalDefenses.length).toBeGreaterThanOrEqual(3);
      for (const def of topic.psychologicalDefenses) {
        expect(def.title).toBeTruthy();
        expect(def.instruction).toBeTruthy();
      }

      // Section P: Academic Research and References with citations & DOIs
      expect(topic.researchSummary.length).toBeGreaterThan(100);
      expect(topic.references.length).toBeGreaterThanOrEqual(2);
      for (const ref of topic.references) {
        expect(ref.citation).toBeTruthy();
        expect(ref.authors).toBeTruthy();
        expect(ref.publicationYear).toBeGreaterThan(1900);
      }

      // Section R: Common myths
      expect(topic.commonMisconceptions).toContain('Myth:');
      expect(topic.commonMisconceptions).toContain('Reality:');

      // Section T: 5+ Practice Questions
      expect(topic.practiceQuestions.length).toBeGreaterThanOrEqual(5);
      for (const q of topic.practiceQuestions) {
        expect(q.question).toBeTruthy();
        expect(q.options.length).toBeGreaterThanOrEqual(3);
        const correctAnswers = q.options.filter((o) => o.isCorrect);
        expect(correctAnswers.length).toBe(1); // strictly one single correct answer
        expect(q.cognitiveTakeaway).toBeTruthy();
      }

      // Visual Content
      expect(topic.visualContent).toBeDefined();
      expect(topic.visualContent?.title).toBeTruthy();
      expect(topic.visualContent?.altText).toBeTruthy();
      expect(topic.visualContent?.altText.length).toBeGreaterThan(20);

      // Related Topics
      expect(topic.relatedTopics.length).toBeGreaterThanOrEqual(2);
      for (const rel of topic.relatedTopics) {
        expect(rel.topicId).toBeTruthy();
        expect(rel.slug).toBeTruthy();
        expect(rel.relationshipType).toBeTruthy();
      }

      // SEO
      expect(topic.seoTitle).toBeTruthy();
      expect(topic.seoDescription).toBeTruthy();
      expect(topic.canonicalUrl).toBeTruthy();
    }
  });

  test('Hinglish content uses conversational Roman script without formal Hindi transliteration', () => {
    for (const key of BATCH_1_TOPIC_KEYS) {
      const topicHinglish = CURRICULUM_CATALOG[key].hinglish;
      expect(topicHinglish).toBeDefined();
      expect(topicHinglish.title).toBeTruthy();
      expect(topicHinglish.summary30s).toBeTruthy();
      // Verifies Hinglish conversational words
      const text = `${topicHinglish.title} ${topicHinglish.summary30s} ${topicHinglish.coreConcept}`.toLowerCase();
      const hasHinglishMarkers =
        text.includes('ko') ||
        text.includes('aur') ||
        text.includes('hai') ||
        text.includes('karein') ||
        text.includes('samjhein') ||
        text.includes('nahi') ||
        text.includes('karta');
      expect(hasHinglishMarkers).toBe(true);
    }
  });

  test('getTopicsByCategory returns all 5 Batch 1 topics for manipulation_awareness', () => {
    const list = getTopicsByCategory('manipulation_awareness', 'en');
    const ids = list.map((t) => t.id);
    for (const key of BATCH_1_TOPIC_KEYS) {
      expect(ids).toContain(key);
    }
  });

  test('Batch 1 topics support the full engagement layer: sharing, reactions, and bookmarks', async () => {
    const {
      generateDirectTopicUrl,
      generateShareText,
      toggleTopicReaction,
      toggleTopicBookmark,
      checkIsTopicBookmarked,
    } = await import('../mind/mindEngagementEngine');

    for (const key of BATCH_1_TOPIC_KEYS) {
      const topic = CURRICULUM_CATALOG[key].en;

      // 1. Sharing
      const directUrl = generateDirectTopicUrl(topic.slug, 'hinglish');
      expect(directUrl).toContain(`/mind/manipulation-awareness/${topic.slug}?lang=hinglish`);

      const shareText = generateShareText(topic.title);
      expect(shareText).toContain('I just learned why');
      expect(shareText).toContain(topic.title);

      // 2. Reactions
      const reactionResult = await toggleTopicReaction('user_test_batch1', topic.id, 'helpful', {
        helpful: 5,
        interesting: 3,
        surprising: 2,
        learned: 4,
        thinking: 1,
        total: 15,
        userReaction: null,
      });
      expect(reactionResult.activeReaction).toBe('helpful');
      expect(reactionResult.newCounts.helpful).toBe(6);

      // 3. Bookmarking
      const bookmarkResult = await toggleTopicBookmark('user_test_batch1', topic, 'Manipulation Awareness');
      expect(bookmarkResult.isBookmarked).toBe(true);
      expect(await checkIsTopicBookmarked('user_test_batch1', topic.id)).toBe(true);

      // Remove bookmark
      const unbookmarkResult = await toggleTopicBookmark('user_test_batch1', topic, 'Manipulation Awareness');
      expect(unbookmarkResult.isBookmarked).toBe(false);
      expect(await checkIsTopicBookmarked('user_test_batch1', topic.id)).toBe(false);
    }
  });

  test('Batch 1 practice questions integrate seamlessly with the Practice Analytics Engine', async () => {
    const {
      recordPracticeAttempt,
      getTopicPracticeSummary,
      clearTopicPracticeAnalytics,
    } = await import('../mind/practiceAnalytics');

    clearTopicPracticeAnalytics();

    for (const key of BATCH_1_TOPIC_KEYS) {
      const topic = CURRICULUM_CATALOG[key].en;
      const question = topic.practiceQuestions[0];
      const correctOption = question.options.find((o) => o.isCorrect)!;

      recordPracticeAttempt({
        topicId: topic.id,
        questionId: question.id,
        questionType: (question.questionType as any) || 'multiple_choice',
        difficulty: (question.difficulty as any) || 'intermediate',
        isCorrect: true,
        attemptNumber: 1,
      });

      const summary = getTopicPracticeSummary(topic.id);
      expect(summary.attempts).toBe(1);
      expect(summary.correctAnswers).toBe(1);
      expect(summary.accuracy).toBe(100);
    }
  });
});
