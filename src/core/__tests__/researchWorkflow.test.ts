import { describe, it, expect } from 'vitest';
import {
  CREDIBLE_SOURCE_TIERS,
  BANNED_SOURCE_PATTERNS,
  MENTALAB_RESEARCH_DISCLAIMER,
  auditTopicResearchStandards,
  createContentVersionRecord,
  formatAcademicCitation,
} from '../mind/researchWorkflow';
import { TOPIC_CONFIRMATION_BIAS } from '../mind/mindCurriculum';

describe('Mentalab Mind Research & Content Workflow', () => {
  it('defines the credible research source hierarchy', () => {
    expect(CREDIBLE_SOURCE_TIERS.systematic_review.tier).toBe(1);
    expect(CREDIBLE_SOURCE_TIERS.meta_analysis.tier).toBe(1);
    expect(CREDIBLE_SOURCE_TIERS.peer_reviewed_journal.tier).toBe(2);
    expect(CREDIBLE_SOURCE_TIERS.academic_textbook.tier).toBe(4);
    expect(CREDIBLE_SOURCE_TIERS.scientific_institution.tier).toBe(3);
  });

  it('rejects banned pop-psychology and dark psychology patterns', () => {
    const isBanned1 = BANNED_SOURCE_PATTERNS.some((p) => p.test('https://darkpsychologytricks.com'));
    const isBanned2 = BANNED_SOURCE_PATTERNS.some((p) => p.test('https://secretmanipulation.org'));
    const isBanned3 = BANNED_SOURCE_PATTERNS.some((p) => p.test('https://reddit.com/r/psychology_tricks'));

    expect(isBanned1).toBe(true);
    expect(isBanned2).toBe(true);
    expect(isBanned3).toBe(true);

    const isAllowed = BANNED_SOURCE_PATTERNS.some((p) => p.test('https://doi.org/10.1037/1089-2680.2.2.175'));
    expect(isAllowed).toBe(false);
  });

  it('audits a verified curriculum topic successfully', () => {
    const topic = TOPIC_CONFIRMATION_BIAS.en;
    const audit = auditTopicResearchStandards(topic);

    expect(audit.isValid).toBe(true);
    expect(audit.score).toBeGreaterThanOrEqual(90);
    expect(audit.errors.length).toBe(0);
    expect(audit.passedChecks.some((c) => c.includes('formal academic references'))).toBe(true);
    expect(audit.passedChecks.some((c) => c.includes('Indian Context'))).toBe(true);
    expect(audit.passedChecks.some((c) => c.includes('limitations and controversies'))).toBe(true);
  });

  it('detects and flags sensationalist fake certainty phrases', () => {
    const flawedTopic = {
      ...TOPIC_CONFIRMATION_BIAS.en,
      coreConcept: 'Science has 100% proven that anyone who disagrees with you is delusional.',
    };

    const audit = auditTopicResearchStandards(flawedTopic);
    expect(audit.isValid).toBe(false);
    expect(audit.errors.some((e) => e.includes('sensationalist phrase'))).toBe(true);
  });

  it('provides a legally sound, educational non-diagnostic research disclaimer', () => {
    expect(MENTALAB_RESEARCH_DISCLAIMER.isEducationalOnly).toBe(true);
    expect(MENTALAB_RESEARCH_DISCLAIMER.avoidsMedicalDiagnosis).toBe(true);
    expect(MENTALAB_RESEARCH_DISCLAIMER.statementEn).toContain('does not constitute psychotherapy');
    expect(MENTALAB_RESEARCH_DISCLAIMER.statementHinglish).toContain('medical diagnosis');
  });

  it('creates an immutable content version record for editorial review', () => {
    const topic = TOPIC_CONFIRMATION_BIAS.en;
    const record = createContentVersionRecord(
      topic,
      2,
      'Updated Nickerson 1998 systematic review synthesis and added Indian context scenario'
    );

    expect(record.topicId).toBe('confirmation_bias');
    expect(record.versionNumber).toBe(2);
    expect(record.reviewStatus).toBe('verified');
    expect(record.sources.length).toBeGreaterThanOrEqual(1);
    expect(record.changeSummary).toContain('Updated Nickerson');
  });

  it('formats academic citations cleanly with badge labels and DOI links', () => {
    const ref = {
      id: 'ref_1',
      title: 'Confirmation bias: A ubiquitous phenomenon in many guises',
      citation: 'Nickerson, R. S. (1998). Review of General Psychology.',
      authors: 'Raymond S. Nickerson',
      publicationYear: 1998,
      journalOrPublisher: 'Review of General Psychology',
      doiOrUrl: 'https://doi.org/10.1037/1089-2680.2.2.175',
      sourceType: 'meta_analysis' as const,
      evidenceStrength: 'peer_reviewed_meta_analysis' as const,
      displayOrder: 1,
    };

    const formatted = formatAcademicCitation(ref);
    expect(formatted.sourceBadge).toBe('Meta-Analysis');
    expect(formatted.doiLink).toBe('https://doi.org/10.1037/1089-2680.2.2.175');
    expect(formatted.displayText).toContain('Nickerson, R. S.');
  });

  it('verifies that all topics in the curriculum catalog satisfy research standards', async () => {
    const { CURRICULUM_CATALOG } = await import('../mind/mindCurriculum');
    const topicKeys = Object.keys(CURRICULUM_CATALOG);
    expect(topicKeys.length).toBeGreaterThanOrEqual(10);

    for (const key of topicKeys) {
      const topicEn = CURRICULUM_CATALOG[key].en;
      expect(topicEn).toBeDefined();

      const audit = auditTopicResearchStandards(topicEn);
      expect(audit.isValid).toBe(true);
      expect(audit.score).toBeGreaterThanOrEqual(80);
      expect(audit.errors).toHaveLength(0);
      expect(topicEn.summary30s).toBeDefined();
      expect(topicEn.summary30s?.length).toBeGreaterThan(20);
      expect(topicEn.references.length).toBeGreaterThanOrEqual(1);
      expect(topicEn.practiceQuestions.length).toBeGreaterThanOrEqual(1);
    }
  });
});

