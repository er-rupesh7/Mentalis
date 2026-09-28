import * as fs from 'fs';
import * as path from 'path';

export interface ComprehensiveTopicDef {
  fileName: string;
  varName: string;
  id: string;
  categoryId: string;
  slug: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  readTime: number;
  sortWeight: number;

  // 1. What is it
  titleEn: string;
  subtitleEn: string;
  shortDescEn: string;
  oneLineEn: string;
  summary30sEn: string;
  coreConceptEn: string;
  summary60sEn: string;
  takeawaysEn: [string, string, string, string];

  // 2. Why does it happen
  whyItHappensEn: string;
  evolutionaryEn: string;

  // 3. How does it work
  howItWorksEn: string;
  visualHeadlineEn: string;
  visualDescEn: string;
  sideALabelEn: string;
  sideADetailEn: string;
  sideBLabelEn: string;
  sideBDetailEn: string;

  // 4. Research & References
  researchSummaryEn: string;
  refAuthor: string;
  refYear: number;
  refTitle: string;
  refCitation: string;
  refDoi: string;

  // 5. Indian Real Life Context
  scenarioTitleEn: string;
  scenarioContextEn: string;
  scenarioBiasEn: string;
  scenarioOptimalEn: string;
  scenarioReflectionEn: string;

  // 6. How can I recognize it
  howToRecognizeEn: string;
  whereEn: string;

  // 7. Misconceptions & Limitations
  misconceptionsEn: string;
  limitationsEn: string;

  // 8. What should I do (Defenses)
  howToRespondEn: string;
  defensesEn: Array<{ title: string; instruction: string }>;

  // 9. Practice Questions & Reflection
  pqPromptEn: string;
  pqScenarioEn: string;
  pqExplanationEn: string;
  pqAntidoteEn: string;
  pqOptionsEn: Array<{ id: string; text: string; isCorrect: boolean; feedback: string }>;
  reflectionPromptEn: string;

  // Hinglish Version
  titleHinglish: string;
  subtitleHinglish: string;
  shortDescHinglish: string;
  oneLineHinglish: string;
  summary30sHinglish: string;
  coreConceptHinglish: string;
  summary60sHinglish: string;
  howItWorksHinglish: string;
  howToRespondHinglish: string;
  takeawaysHinglish: [string, string, string, string];
  pqPromptHinglish: string;
  pqExplanationHinglish: string;
  pqOptionsHinglish: Array<{ id: string; text: string; isCorrect: boolean; feedback: string }>;

  // Indic Translations
  hiTitle: string; hiSummary: string; hiTakeaways: [string, string, string];
  guTitle: string; guSummary: string; guTakeaways: [string, string, string];
  mrTitle: string; mrSummary: string; mrTakeaways: [string, string, string];
  teTitle: string; teSummary: string; teTakeaways: [string, string, string];
  taTitle: string; taSummary: string; taTakeaways: [string, string, string];
  knTitle: string; knSummary: string; knTakeaways: [string, string, string];
  mlTitle: string; mlSummary: string; mlTakeaways: [string, string, string];
  bnTitle: string; bnSummary: string; bnTakeaways: [string, string, string];
  paTitle: string; paSummary: string; paTakeaways: [string, string, string];
  urTitle: string; urSummary: string; urTakeaways: [string, string, string];
  orTitle: string; orSummary: string; orTakeaways: [string, string, string];
  asTitle: string; asSummary: string; asTakeaways: [string, string, string];
}

export function generateTopicTsCode(t: ComprehensiveTopicDef): string {
  const upper = t.varName.toUpperCase();
  return `import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_${upper}_EN: MindTopicDetail = {
  id: '${t.id}',
  categoryId: '${t.categoryId}',
  slug: '${t.slug}',
  difficulty: '${t.difficulty}',
  estimatedReadingMinutes: ${t.readTime},
  scientificConsensusTier: 'established',
  sortWeight: ${t.sortWeight},
  viewCount: ${2800 + t.sortWeight * 120},
  shareCount: ${180 + t.sortWeight * 15},
  bookmarkCount: ${420 + t.sortWeight * 25},
  title: ${JSON.stringify(t.titleEn)},
  subtitle: ${JSON.stringify(t.subtitleEn)},
  shortDescription: ${JSON.stringify(t.shortDescEn)},
  oneLineExplanation: ${JSON.stringify(t.oneLineEn)},

  summary30s: ${JSON.stringify(t.summary30sEn)},
  coreConcept: ${JSON.stringify(t.coreConceptEn)},
  summary60s: ${JSON.stringify(t.summary60sEn)},
  quickTakeaways: ${JSON.stringify(t.takeawaysEn)},

  whyItHappens: ${JSON.stringify(t.whyItHappensEn)},
  evolutionaryMechanism: ${JSON.stringify(t.evolutionaryEn)},

  howItWorks: ${JSON.stringify(t.howItWorksEn)},
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: ${JSON.stringify(t.visualHeadlineEn)},
    description: ${JSON.stringify(t.visualDescEn)},
    analogySideA: {
      label: ${JSON.stringify(t.sideALabelEn)},
      detail: ${JSON.stringify(t.sideADetailEn)},
    },
    analogySideB: {
      label: ${JSON.stringify(t.sideBLabelEn)},
      detail: ${JSON.stringify(t.sideBDetailEn)},
    },
  },

  researchSummary: ${JSON.stringify(t.researchSummaryEn)},
  references: [
    {
      id: 'ref_${t.id}_01',
      title: ${JSON.stringify(t.refTitle)},
      citation: ${JSON.stringify(t.refCitation)},
      authors: ${JSON.stringify(t.refAuthor)},
      publicationYear: ${t.refYear},
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: ${JSON.stringify(t.refDoi)},
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_${t.id}_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: ${JSON.stringify(t.scenarioTitleEn)},
      narrativeContext: ${JSON.stringify(t.scenarioContextEn)},
      biasInAction: ${JSON.stringify(t.scenarioBiasEn)},
      optimalResponse: ${JSON.stringify(t.scenarioOptimalEn)},
      reflectionPrompt: ${JSON.stringify(t.scenarioReflectionEn)},
    },
  ],

  examples: [
    {
      id: 'ex_${t.id}_01',
      domain: 'workplace',
      displayOrder: 1,
      title: ${JSON.stringify(t.scenarioTitleEn)},
      description: ${JSON.stringify(t.scenarioContextEn.slice(0, 150) + '...')},
      takeaway: ${JSON.stringify(t.takeawaysEn[0])},
    },
  ],

  howToRecognize: ${JSON.stringify(t.howToRecognizeEn)},
  whereYouEncounterIt: ${JSON.stringify(t.whereEn)},
  commonMisconceptions: ${JSON.stringify(t.misconceptionsEn)},
  limitationsAndControversies: ${JSON.stringify(t.limitationsEn)},

  howToRespond: ${JSON.stringify(t.howToRespondEn)},
  psychologicalDefenses: ${JSON.stringify(t.defensesEn)},

  practiceQuestions: [
    {
      id: 'pq_${t.id}_01',
      difficulty: '${t.difficulty}',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: ${JSON.stringify(t.pqPromptEn)},
      scenarioText: ${JSON.stringify(t.pqScenarioEn)},
      explanation: ${JSON.stringify(t.pqExplanationEn)},
      antidoteAdvice: ${JSON.stringify(t.pqAntidoteEn)},
      options: [
        ${t.pqOptionsEn.map((opt, i) => `{
          id: '${opt.id}',
          isCorrect: ${opt.isCorrect},
          displayOrder: ${i + 1},
          optionText: ${JSON.stringify(opt.text)},
          text: ${JSON.stringify(opt.text)},
          feedbackText: ${JSON.stringify(opt.feedback)},
        }`).join(',\n        ')}
      ],
    },
  ],

  reflectionPrompt: ${JSON.stringify(t.reflectionPromptEn)},
  tags: ['Mentalab Mind', '${t.categoryId}'],
  relatedTopics: [],
  seoTitle: \`\${${JSON.stringify(t.titleEn)}} | Mentalab Mind\`,
  seoDescription: ${JSON.stringify(t.shortDescEn)},
  canonicalUrl: '/mind/${t.categoryId.replace(/_/g, '-')}/${t.slug}',
  ogImageUrl: '/images/mind/${t.slug}.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: ${JSON.stringify(t.summary60sEn)},
};

export const TOPIC_${upper}_HINGLISH: MindTopicDetail = {
  ...TOPIC_${upper}_EN,
  title: ${JSON.stringify(t.titleHinglish)},
  subtitle: ${JSON.stringify(t.subtitleHinglish)},
  shortDescription: ${JSON.stringify(t.shortDescHinglish)},
  oneLineExplanation: ${JSON.stringify(t.oneLineHinglish)},
  summary30s: ${JSON.stringify(t.summary30sHinglish)},
  coreConcept: ${JSON.stringify(t.coreConceptHinglish)},
  summary60s: ${JSON.stringify(t.summary60sHinglish)},
  quickTakeaways: ${JSON.stringify(t.takeawaysHinglish)},
  howItWorks: ${JSON.stringify(t.howItWorksHinglish)},
  howToRespond: ${JSON.stringify(t.howToRespondHinglish)},
  practiceQuestions: [
    {
      ...TOPIC_${upper}_EN.practiceQuestions[0],
      prompt: ${JSON.stringify(t.pqPromptHinglish)},
      explanation: ${JSON.stringify(t.pqExplanationHinglish)},
      options: [
        ${t.pqOptionsHinglish.map((opt, i) => `{
          id: '${opt.id}',
          isCorrect: ${opt.isCorrect},
          displayOrder: ${i + 1},
          optionText: ${JSON.stringify(opt.text)},
          text: ${JSON.stringify(opt.text)},
          feedbackText: ${JSON.stringify(opt.feedback)},
        }`).join(',\n        ')}
      ],
    },
  ],
  seoTitle: \`\${${JSON.stringify(t.titleHinglish)}} | Mentalab Mind\`,
  seoDescription: ${JSON.stringify(t.shortDescHinglish)},
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_${upper}_EN,
    title,
    subtitle: summary.slice(0, 80) + '...',
    oneLineExplanation: summary.slice(0, 60),
    summary30s: summary,
    coreConcept: summary,
    quickTakeaways: takeaways,
    seoTitle: \`\${title} | Mentalab Mind\`,
    seoDescription: \`\${summary.slice(0, 150)}...\`,
  };
}

export const TOPIC_${upper}: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_${upper}_EN,
  hinglish: TOPIC_${upper}_HINGLISH,
  hi: createLocalizedRecord('hi', ${JSON.stringify(t.hiTitle)}, ${JSON.stringify(t.hiSummary)}, ${JSON.stringify(t.hiTakeaways)}),
  gu: createLocalizedRecord('gu', ${JSON.stringify(t.guTitle)}, ${JSON.stringify(t.guSummary)}, ${JSON.stringify(t.guTakeaways)}),
  mr: createLocalizedRecord('mr', ${JSON.stringify(t.mrTitle)}, ${JSON.stringify(t.mrSummary)}, ${JSON.stringify(t.mrTakeaways)}),
  te: createLocalizedRecord('te', ${JSON.stringify(t.teTitle)}, ${JSON.stringify(t.teSummary)}, ${JSON.stringify(t.teTakeaways)}),
  ta: createLocalizedRecord('ta', ${JSON.stringify(t.taTitle)}, ${JSON.stringify(t.taSummary)}, ${JSON.stringify(t.taTakeaways)}),
  kn: createLocalizedRecord('kn', ${JSON.stringify(t.knTitle)}, ${JSON.stringify(t.knSummary)}, ${JSON.stringify(t.knTakeaways)}),
  ml: createLocalizedRecord('ml', ${JSON.stringify(t.mlTitle)}, ${JSON.stringify(t.mlSummary)}, ${JSON.stringify(t.mlTakeaways)}),
  bn: createLocalizedRecord('bn', ${JSON.stringify(t.bnTitle)}, ${JSON.stringify(t.bnSummary)}, ${JSON.stringify(t.bnTakeaways)}),
  pa: createLocalizedRecord('pa', ${JSON.stringify(t.paTitle)}, ${JSON.stringify(t.paSummary)}, ${JSON.stringify(t.paTakeaways)}),
  ur: createLocalizedRecord('ur', ${JSON.stringify(t.urTitle)}, ${JSON.stringify(t.urSummary)}, ${JSON.stringify(t.urTakeaways)}),
  or: createLocalizedRecord('or', ${JSON.stringify(t.orTitle)}, ${JSON.stringify(t.orSummary)}, ${JSON.stringify(t.orTakeaways)}),
  as: createLocalizedRecord('as', ${JSON.stringify(t.asTitle)}, ${JSON.stringify(t.asSummary)}, ${JSON.stringify(t.asTakeaways)}),
};
`;
}
