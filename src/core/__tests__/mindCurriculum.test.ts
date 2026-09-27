import { describe, it, expect } from 'vitest';
import {
  PRIMARY_MIND_CATEGORIES,
  CURRICULUM_CATALOG,
  getCurriculumCategories,
  getTopicsByCategory,
  getTopicBySlugOrId,
  searchCurriculum,
  getTopicsByDifficulty,
} from '../mind/mindCurriculum';

describe('Mentalab Mind Curriculum Architecture', () => {
  it('defines all 10 Primary Content Areas plus Critical Thinking', () => {
    const categoryKeys = Object.keys(PRIMARY_MIND_CATEGORIES);
    expect(categoryKeys).toContain('cognitive_biases');
    expect(categoryKeys).toContain('social_psychology');
    expect(categoryKeys).toContain('persuasion_influence');
    expect(categoryKeys).toContain('manipulation_awareness');
    expect(categoryKeys).toContain('decision_making');
    expect(categoryKeys).toContain('emotions');
    expect(categoryKeys).toContain('relationships_comm');
    expect(categoryKeys).toContain('social_media_tech');
    expect(categoryKeys).toContain('consumer_advertising');
    expect(categoryKeys).toContain('learning_psychology');
    expect(categoryKeys).toContain('critical_thinking');
    expect(categoryKeys.length).toBe(11);
  });

  it('provides bilingual localized category catalogs (English & Hinglish)', () => {
    const catsEn = getCurriculumCategories('en');
    const catsHi = getCurriculumCategories('hinglish');

    expect(catsEn.length).toBe(11);
    expect(catsHi.length).toBe(11);

    const learnCatEn = catsEn.find((c) => c.id === 'learning_psychology');
    const learnCatHi = catsHi.find((c) => c.id === 'learning_psychology');

    expect(learnCatEn?.title).toBe('Learning Psychology');
    expect(learnCatEn?.description).toContain('Mentalab calculation mastery');
    expect(learnCatHi?.subtitle).toContain('seekhta aur yaad');
  });

  it('verifies every topic strictly answers the 9 Core Principle questions', () => {
    const topicKeys = Object.keys(CURRICULUM_CATALOG);
    expect(topicKeys.length).toBeGreaterThanOrEqual(8);

    for (const key of topicKeys) {
      const topicRecord = CURRICULUM_CATALOG[key];
      const en = topicRecord.en;
      const hi = topicRecord.hinglish;

      // Check English version answers all 9 Core Questions
      // 1. What is it?
      expect(en.title).toBeTruthy();
      expect(en.oneLineExplanation).toBeTruthy();
      expect(en.coreConcept).toBeTruthy();
      expect(en.summary60s).toBeTruthy();

      // 2. Why does it happen?
      expect(en.whyItHappens).toBeTruthy();
      expect(en.evolutionaryMechanism).toBeTruthy();

      // 3. How does it work?
      expect(en.howItWorks).toBeTruthy();
      expect(en.visualExplanation).toBeDefined();

      // 4. What does research say?
      expect(en.researchSummary).toBeTruthy();
      expect(en.references.length).toBeGreaterThanOrEqual(1);

      // 5. What does it look like in real life?
      expect(en.scenarios.length).toBeGreaterThanOrEqual(1);
      const indianScen = en.scenarios.find((s) => s.scenarioType === 'indian_context');
      expect(indianScen).toBeDefined();

      // 6. How can I recognize it?
      expect(en.howToRecognize).toBeTruthy();

      // 7. What misconceptions exist?
      expect(en.commonMisconceptions).toBeTruthy();
      expect(en.limitationsAndControversies).toBeTruthy();

      // 8. What should I do about it?
      expect(en.howToRespond).toBeTruthy();
      expect(en.psychologicalDefenses.length).toBeGreaterThanOrEqual(2);

      // 9. Can I test whether I understood it?
      expect(en.practiceQuestions.length).toBeGreaterThanOrEqual(1);
      expect(en.practiceQuestions[0].options.length).toBeGreaterThanOrEqual(3);
      expect(en.reflectionPrompt).toBeTruthy();

      // Check Hinglish version is authentic and non-empty
      expect(hi.title).toBeTruthy();
      expect(hi.coreConcept).toBeTruthy();
      expect(hi.summary60s).toBeTruthy();
      expect(hi.howItWorks).toBeTruthy();
      expect(hi.howToRespond).toBeTruthy();
      expect(hi.practiceQuestions.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('searches topics across English and Hinglish seamlessly', () => {
    const resultsEn = searchCurriculum('bias', 'en');
    expect(resultsEn.length).toBeGreaterThan(0);
    expect(resultsEn.some((t) => t.id === 'confirmation_bias')).toBe(true);

    const resultsHi = searchCurriculum('dimaag', 'hinglish');
    expect(resultsHi.length).toBeGreaterThan(0);
  });

  it('filters topics by conceptual difficulty tiers (Beginner, Intermediate, Advanced)', () => {
    const beginnerTopics = getTopicsByDifficulty('beginner', 'en');
    const intermediateTopics = getTopicsByDifficulty('intermediate', 'en');
    const advancedTopics = getTopicsByDifficulty('advanced', 'en');

    expect(beginnerTopics.length).toBeGreaterThan(0);
    expect(intermediateTopics.length).toBeGreaterThan(0);
    expect(advancedTopics.length).toBeGreaterThan(0);

    expect(beginnerTopics.some((t) => t.id === 'confirmation_bias')).toBe(true);
    expect(intermediateTopics.some((t) => t.id === 'gaslighting_awareness')).toBe(true);
    expect(advancedTopics.some((t) => t.id === 'first_principles_thinking')).toBe(true);
  });

  it('retrieves topics by category and validates relationships', () => {
    const cogTopics = getTopicsByCategory('cognitive_biases', 'en');
    expect(cogTopics.length).toBe(24);
    expect(cogTopics[0].id).toBe('confirmation_bias');

    const socialTopics = getTopicsByCategory('social_psychology', 'en');
    expect(socialTopics.length).toBe(20);

    const persuasionTopics = getTopicsByCategory('persuasion_influence', 'en');
    expect(persuasionTopics.length).toBe(15);

    const decisionTopics = getTopicsByCategory('decision_making', 'en');
    expect(decisionTopics.length).toBe(15);

    const learnTopics = getTopicsByCategory('learning_psychology', 'en');
    expect(learnTopics.length).toBeGreaterThan(0);
    expect(learnTopics[0].id).toBe('retrieval_practice');
  });

  it('verifies Manipulation Awareness topic contains "Context Matters" distinction', () => {
    const gaslighting = getTopicBySlugOrId('gaslighting_awareness', 'en');
    expect(gaslighting).not.toBeNull();
    expect(gaslighting?.limitationsAndControversies).toContain('poor communication');
    expect(gaslighting?.quickTakeaways[0]).toContain('Disagreement is NOT gaslighting');
  });

  it('verifies Relationships & Communication topic maintains non-diagnostic tone', () => {
    const boundaries = getTopicBySlugOrId('healthy_boundaries', 'en');
    expect(boundaries).not.toBeNull();
    expect(boundaries?.limitationsAndControversies).toContain('Do not diagnose');
    expect(boundaries?.practiceQuestions[0].options[0].feedbackText).toContain('armchair diagnosis');
  });
});
