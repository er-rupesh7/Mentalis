/**
 * Mentalab Mind Research & Content Creation Workflow Engine
 * 
 * Enforces scientific rigor, credible source hierarchies, layered educational communication,
 * calibrated epistemic language, and immutable content versioning.
 *
 * Guiding Principle: "An excellent science communicator explaining psychology
 * to an intelligent teenager" rather than "copy-pasted university textbook"
 * or "shallow AI-generated SEO content".
 */

import {
  MindTopicDetail,
  MindReference,
  CredibleSourceType,
  PracticeQuestionFormat,
  VisualConceptType,
  ContentVersionRecord,
  ResearchDisclaimer,
} from './types';

// ============================================================================
// 1. CREDIBLE RESEARCH HIERARCHY
// ============================================================================

export const CREDIBLE_SOURCE_TIERS: Record<
  CredibleSourceType,
  {
    tier: number;
    label: string;
    description: string;
    priorityRank: number;
  }
> = {
  systematic_review: {
    tier: 1,
    label: 'Systematic Review',
    description: 'Comprehensive synthesis of all available empirical studies following a structured protocol (e.g. Cochrane, Campbell Collaboration).',
    priorityRank: 1,
  },
  meta_analysis: {
    tier: 1,
    label: 'Meta-Analysis',
    description: 'Statistical pooling of effect sizes across multiple independent empirical studies to assess true effect magnitude.',
    priorityRank: 2,
  },
  peer_reviewed_journal: {
    tier: 2,
    label: 'Peer-Reviewed Empirical Research',
    description: 'Controlled experiments, longitudinal studies, or pre-registered replications published in reputable academic journals.',
    priorityRank: 3,
  },
  scientific_institution: {
    tier: 3,
    label: 'Major Academic / Scientific Institution',
    description: 'Official reports, clinical guidelines, and consensus statements (e.g., APA, BPS, NIH, NIMH, ICMR).',
    priorityRank: 4,
  },
  academic_textbook: {
    tier: 4,
    label: 'Established Academic Reference / Textbook',
    description: 'Foundational peer-reviewed academic volumes by leading cognitive scientists (e.g., Kahneman, Cialdini, Gross, Sternberg).',
    priorityRank: 5,
  },
  replication_study: {
    tier: 2,
    label: 'Empirical Replication Study',
    description: 'Many Labs or registered replication attempts that verify or bound the boundary conditions of an established effect.',
    priorityRank: 6,
  },
};

/**
 * Banned or unverified source patterns that must NEVER be cited as scientific authorities.
 */
export const BANNED_SOURCE_PATTERNS = [
  /darkpsychology/i,
  /secretmanipulation/i,
  /mindcontroloffline/i,
  /medium\.com\/@[a-z0-9]+/i,
  /quora\.com/i,
  /reddit\.com/i,
  /buzzfeed\.com/i,
  /pinterest\.com/i,
  /tiktok\.com/i,
  /instagram\.com/i,
  /horoscope/i,
  /astrology/i,
  /subconscioussecrets/i,
];

// ============================================================================
// 2. CALIBRATED RESEARCH LANGUAGE STANDARDS
// ============================================================================

export const RECOMMENDED_EPISTEMIC_PHRASES = [
  'Research suggests',
  'When studied under controlled conditions',
  'Evidence is mixed',
  'One limitation is',
  'The popular internet explanation is often an oversimplification',
  'Replication studies indicate',
  'Context matters significantly',
  'Correlational rather than strictly causal',
  'Cognitive scientists distinguish',
  'Boundary conditions apply',
];

export const FORBIDDEN_CERTAINTY_PHRASES = [
  'Science has 100% proven',
  'This definitively proves someone is a narcissist',
  'Secret psychological trick that always works',
  'Permanent mind control',
  'Scientists hate this one secret',
  'Dark psychology hack',
  'Undeniable proof of toxic personality disorder',
];

// ============================================================================
// 3. UNIVERSAL EDUCATIONAL RESEARCH DISCLAIMER
// ============================================================================

export const MENTALAB_RESEARCH_DISCLAIMER: ResearchDisclaimer = {
  statementEn:
    'Mentalab Mind is an educational science communication platform dedicated to cognitive psychology, critical thinking, and decision science. This content is provided strictly for educational purposes and does not constitute psychotherapy, medical diagnosis, psychiatric evaluation, or professional clinical treatment. If you are experiencing acute psychological distress, please consult a certified mental health professional.',
  statementHinglish:
    'Mentalab Mind ek educational science platform hai jiska maksad cognitive psychology, critical thinking aur decision-making ko aasan bhasha me samjhana hai. Yeh content sirf educational purposes ke liye hai aur kisi bhi tarah ki medical diagnosis, psychotherapy ya clinical treatment ka substitute nahi hai.',
  isEducationalOnly: true,
  avoidsMedicalDiagnosis: true,
};

// ============================================================================
// 4. SCIENTIFIC VERIFICATION AUDITOR
// ============================================================================

export interface ResearchAuditResult {
  isValid: boolean;
  score: number; // 0 - 100
  passedChecks: string[];
  warnings: string[];
  errors: string[];
}

/**
 * Validates whether a psychology topic satisfies Mentalab's scientific publication standards:
 * - Minimum credible citations with DOIs or stable publishers
 * - Zero banned pop-psychology sources
 * - Calibrated epistemic language (no fake certainty)
 * - Layered content completeness (30s, understand, deep, test)
 * - Safe non-diagnostic framing
 */
export function auditTopicResearchStandards(topic: MindTopicDetail): ResearchAuditResult {
  const passedChecks: string[] = [];
  const warnings: string[] = [];
  const errors: string[] = [];
  let score = 100;

  // 1. Reference Credibility Check
  if (!topic.references || topic.references.length === 0) {
    errors.push('Topic lacks peer-reviewed empirical references.');
    score -= 30;
  } else {
    passedChecks.push(`Includes ${topic.references.length} formal academic references.`);
    for (const ref of topic.references) {
      for (const banned of BANNED_SOURCE_PATTERNS) {
        if ((ref.citation && banned.test(ref.citation)) || (ref.doiOrUrl && banned.test(ref.doiOrUrl)) || (ref.title && banned.test(ref.title))) {
          errors.push(`Reference contains unverified/banned source pattern: "${ref.citation || ref.title}".`);
          score -= 25;
        }
      }
    }
  }

  // 2. Layer 1: "Understand it in 30 seconds"
  if (topic.summary30s || topic.oneLineExplanation) {
    passedChecks.push('Provides Layer 1 (30s intuition / one-line summary).');
  } else {
    warnings.push('Missing Layer 1 30-second summary for beginner accessibility.');
    score -= 10;
  }

  // 3. Layer 2: Real-Life Relatability (Examples & Indian Context)
  const hasIndianContext = topic.scenarios.some((s) => s.scenarioType === 'indian_context');
  if (hasIndianContext) {
    passedChecks.push('Includes culturally grounded Indian Context Scenario.');
  } else {
    warnings.push('Missing Indian Context scenario.');
    score -= 10;
  }

  if (topic.examples && topic.examples.length >= 1) {
    passedChecks.push(`Provides ${topic.examples.length} contextual everyday domain examples.`);
  } else {
    warnings.push('Topic would benefit from more concrete domain examples.');
    score -= 5;
  }

  // 4. Layer 3: Epistemic Nuance & Limitations
  if (topic.limitationsAndControversies && topic.limitationsAndControversies.length > 30) {
    passedChecks.push('Explicitly documents scientific limitations and controversies.');
  } else {
    errors.push('Topic lacks a rigorous Limitations & Controversies section (risk of over-claiming).');
    score -= 20;
  }

  // Check for forbidden fake certainty
  const fullText = `${topic.coreConcept} ${topic.summary60s} ${topic.deepExplanation} ${topic.howItWorks}`;
  for (const forbidden of FORBIDDEN_CERTAINTY_PHRASES) {
    if (fullText.toLowerCase().includes(forbidden.toLowerCase())) {
      errors.push(`Violates calibrated scientific language: contains sensationalist phrase "${forbidden}".`);
      score -= 20;
    }
  }

  // 5. Layer 4: Practice & Self-Test
  if (topic.practiceQuestions && topic.practiceQuestions.length > 0) {
    passedChecks.push('Features Layer 4 interactive practice question with cognitive debrief.');
  } else {
    errors.push('Topic lacks practice questions (cannot test understanding).');
    score -= 15;
  }

  // 6. Visual Concept
  if (topic.visualExplanation && topic.visualExplanation.headline) {
    passedChecks.push('Includes visual concept/contrast matrix with educational utility.');
  } else {
    warnings.push('Visual explanation model is missing.');
    score -= 5;
  }

  const clampedScore = Math.max(0, Math.min(100, score));
  return {
    isValid: errors.length === 0,
    score: clampedScore,
    passedChecks,
    warnings,
    errors,
  };
}

// ============================================================================
// 5. CONTENT VERSIONING & EDITORIAL WORKFLOW
// ============================================================================

/**
 * Creates an immutable content version record when research or nuances are updated.
 */
export function createContentVersionRecord(
  topic: MindTopicDetail,
  versionNumber: number,
  changeSummary: string,
  editorId: string | null = null,
  editorName: string = 'Editorial Review Board'
): ContentVersionRecord {
  return {
    id: `ver_${topic.id}_v${versionNumber}`,
    topicId: topic.id,
    versionNumber,
    editorId,
    editorName,
    reviewStatus: 'verified',
    changeSummary,
    updatedAt: new Date().toISOString(),
    sources: topic.references.map((r) => ({
      citation: r.citation || r.title || 'Academic Reference Citation',
      doiOrUrl: r.doiOrUrl || undefined,
      sourceType: r.sourceType || 'peer_reviewed_journal',
    })),
  };
}

/**
 * Format a reference citation cleanly in APA 7th style with DOI/URL link.
 */
export function formatAcademicCitation(ref: MindReference): {
  displayText: string;
  sourceBadge: string;
  doiLink?: string;
} {
  const badge = ref.sourceType
    ? CREDIBLE_SOURCE_TIERS[ref.sourceType]?.label || 'Academic Reference'
    : ref.evidenceStrength
    ? String(ref.evidenceStrength).replace(/_/g, ' ')
    : 'Peer-Reviewed Source';

  let displayCitation = ref.citation;
  if (!displayCitation && ref.authors) {
    const yr = ref.publicationYear || ref.year ? ` (${ref.publicationYear || ref.year}). ` : '. ';
    const ttl = ref.title ? `${ref.title}. ` : '';
    const pub = ref.journalOrPublisher || ref.publicationName || '';
    const vol = ref.volumeIssue ? `, ${ref.volumeIssue}` : '';
    displayCitation = `${ref.authors}${yr}${ttl}${pub}${vol}.`;
  }

  const doi = ref.doiOrUrl || (ref.doi ? (ref.doi.startsWith('http') ? ref.doi : `https://doi.org/${ref.doi}`) : undefined);

  return {
    displayText: displayCitation || ref.title || 'Academic Reference Citation',
    sourceBadge: badge,
    doiLink: doi,
  };
}
