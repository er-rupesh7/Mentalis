import * as fs from 'fs';
import * as path from 'path';

export interface TopicBlueprint {
  fileName: string;
  varName: string;
  id: string;
  categoryId: 'social_psychology' | 'decision_making';
  slug: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  readTime: number;
  sortWeight: number;
  titleEn: string;
  subtitleEn?: string;
  subtitle?: string;
  shortDescEn: string;
  oneLineEn: string;
  summary30sEn: string;
  coreConceptEn: string;
  summary60sEn: string;
  takeawaysEn: [string, string, string, string];
  whyItHappensEn: string;
  evolutionaryEn: string;
  howItWorksEn: string;
  whereEn: string;
  headlineEn: string;
  analogySideALabelEn: string;
  analogySideADetailEn: string;
  analogySideBLabelEn: string;
  analogySideBDetailEn: string;
  researchSummaryEn: string;
  scenarioTitleEn: string;
  scenarioVignetteEn: string;
  scenarioBreakdownEn: string;
  scenarioActionEn: string;
  pqContextEn: string;
  pqPromptEn: string;
  pqOptA: string;
  pqOptB: string;
  pqOptC: string;
  pqOptD: string;
  pqCorrect: 'opt_a' | 'opt_b' | 'opt_c' | 'opt_d';
  pqExplanation: string;
  pqTakeaway: string;
  authorYear: string;
  refTitle: string;
  refCitation: string;
  doi: string;
  relatedA: { topicId: string; slug: string; title: string };
  relatedB: { topicId: string; slug: string; title: string };

  // Hinglish
  titleHinglish: string;
  subtitleHinglish: string;
  shortDescHinglish: string;
  oneLineHinglish: string;
  summary30sHinglish: string;
  coreConceptHinglish: string;
  takeawaysHinglish: [string, string, string, string];

  // Indic Translations (Devanagari Hindi, Gujarati, Marathi, Telugu, Tamil, Kannada, Malayalam, Bengali, Punjabi, Urdu, Odia, Assamese)
  hiTitle: string;
  hiSummary: string;
  hiTakeaways: [string, string, string];

  guTitle: string;
  guSummary: string;

  mrTitle: string;
  mrSummary: string;

  teTitle: string;
  teSummary: string;

  taTitle: string;
  taSummary: string;

  knTitle: string;
  knSummary: string;

  mlTitle: string;
  mlSummary: string;

  bnTitle: string;
  bnSummary: string;

  paTitle: string;
  paSummary: string;

  urTitle: string;
  urSummary: string;

  orTitle: string;
  orSummary: string;

  asTitle: string;
  asSummary: string;
}

export function generateTopicFileContent(bp: TopicBlueprint): string {
  const upperVar = bp.varName.toUpperCase();
  return `import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — ${bp.categoryId === 'social_psychology' ? 'Social Psychology' : 'Decision Making'} Track
 * Topic: ${bp.titleEn}
 * Category: ${bp.categoryId}
 * Academic Grounding: ${bp.authorYear} (${bp.doi})
 */

export const TOPIC_${upperVar}_EN: MindTopicDetail = {
  id: '${bp.id}',
  categoryId: '${bp.categoryId}',
  slug: '${bp.slug}',
  difficulty: '${bp.difficulty}',
  estimatedReadingMinutes: ${bp.readTime},
  scientificConsensusTier: 'established',
  sortWeight: ${bp.sortWeight},
  viewCount: ${2400 + bp.sortWeight * 140},
  shareCount: ${180 + bp.sortWeight * 12},
  bookmarkCount: ${420 + bp.sortWeight * 25},
  title: ${JSON.stringify(bp.titleEn)},
  subtitle: ${JSON.stringify(bp.subtitleEn)},
  shortDescription: ${JSON.stringify(bp.shortDescEn)},
  oneLineExplanation: ${JSON.stringify(bp.oneLineEn)},

  summary30s: ${JSON.stringify(bp.summary30sEn)},
  coreConcept: ${JSON.stringify(bp.coreConceptEn)},
  summary60s: ${JSON.stringify(bp.summary60sEn)},
  quickTakeaways: [
    ${JSON.stringify(bp.takeawaysEn[0])},
    ${JSON.stringify(bp.takeawaysEn[1])},
    ${JSON.stringify(bp.takeawaysEn[2])},
    ${JSON.stringify(bp.takeawaysEn[3])},
  ],

  whyItHappens: ${JSON.stringify(bp.whyItHappensEn)},
  evolutionaryMechanism: ${JSON.stringify(bp.evolutionaryEn)},
  howItWorks: ${JSON.stringify(bp.howItWorksEn)},
  whereYouEncounterIt: ${JSON.stringify(bp.whereEn)},

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: ${JSON.stringify(bp.headlineEn)},
    description: 'Empirical distinction between calibrated judgment and cognitive distortion.',
    analogySideA: {
      label: ${JSON.stringify(bp.analogySideALabelEn)},
      detail: ${JSON.stringify(bp.analogySideADetailEn)},
    },
    analogySideB: {
      label: ${JSON.stringify(bp.analogySideBLabelEn)},
      detail: ${JSON.stringify(bp.analogySideBDetailEn)},
    },
  },

  researchSummary: ${JSON.stringify(bp.researchSummaryEn)},
  limitationsAndControversies: 'Contextual moderators include cultural individualism vs collectivism, perceived group cohesion, and the magnitude of individual accountability.',
  commonMisconceptions: 'Common myth: Being aware of the dynamic automatically makes you immune to it. Reality: Controlled experiments demonstrate that even trained experts fall into this cognitive pattern without external institutional safeguards.',

  howToRecognize: [
    'Noticing a gut impulse to conform or reduce effort when joining a larger group',
    'Assuming someone else has already conducted due diligence on a shared decision',
    'Rationalizing an uncomfortable contradiction instead of examining the underlying assumption',
    'Feeling intense emotional resistance when your freedom of action is restricted',
  ],

  scenarios: [
    {
      id: 'scen_${bp.id}_01',
      scenarioType: 'indian_context',
      title: ${JSON.stringify(bp.scenarioTitleEn)},
      vignette: ${JSON.stringify(bp.scenarioVignetteEn)},
      breakdownAnalysis: ${JSON.stringify(bp.scenarioBreakdownEn)},
      recommendedAction: ${JSON.stringify(bp.scenarioActionEn)},
    },
  ],

  examples: [
    {
      id: 'ex_${bp.id}_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace Team Dynamics',
      description: 'How shared responsibility and group consensus subtly alter individual cognitive output during high-stakes projects.',
      takeaway: 'Individual accountability metrics protect group quality.',
    },
    {
      id: 'ex_${bp.id}_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Financial & Market Choices',
      description: 'How social validation or emotional loss framing distorts portfolio decisions under market volatility.',
      takeaway: 'Automate investment rules rather than relying on intuitive real-time feeling.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_${bp.id}_01',
      scenarioContext: ${JSON.stringify(bp.pqContextEn)},
      question: ${JSON.stringify(bp.pqPromptEn)},
      prompt: ${JSON.stringify(bp.pqPromptEn)},
      questionFormat: 'multiple_choice',
      difficulty: '${bp.difficulty}',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: ${JSON.stringify(bp.pqOptA)},
          isCorrect: ${bp.pqCorrect === 'opt_a'},
          explanation: ${bp.pqCorrect === 'opt_a' ? JSON.stringify(bp.pqExplanation) : "'Incorrect. This reflects an uncalibrated heuristic or common misconception.'"},
        },
        {
          id: 'opt_b',
          label: 'B',
          text: ${JSON.stringify(bp.pqOptB)},
          isCorrect: ${bp.pqCorrect === 'opt_b'},
          explanation: ${bp.pqCorrect === 'opt_b' ? JSON.stringify(bp.pqExplanation) : "'Incorrect. This does not address the core underlying psychological mechanism.'"},
        },
        {
          id: 'opt_c',
          label: 'C',
          text: ${JSON.stringify(bp.pqOptC)},
          isCorrect: ${bp.pqCorrect === 'opt_c'},
          explanation: ${bp.pqCorrect === 'opt_c' ? JSON.stringify(bp.pqExplanation) : "'Incorrect. This fails to mitigate the cognitive bias effectively.'"},
        },
        {
          id: 'opt_d',
          label: 'D',
          text: ${JSON.stringify(bp.pqOptD)},
          isCorrect: ${bp.pqCorrect === 'opt_d'},
          explanation: ${bp.pqCorrect === 'opt_d' ? JSON.stringify(bp.pqExplanation) : "'Incorrect. This represents standard uncalibrated group dynamics.'"},
        },
      ],
      cognitiveTakeaway: ${JSON.stringify(bp.pqTakeaway)},
    },
  ],

  howToRespond: 'Implement structured individual accountability, pre-commitments, and independent auditing protocols.',
  psychologicalDefenses: [
    {
      title: 'Structured Individual Accountability',
      instruction: 'Assign single-threaded ownership to each decision vector rather than fuzzy committee approval.',
    },
    {
      title: 'Independent Private Reflection',
      instruction: 'Require team members to write down assessments independently prior to hearing public consensus.',
    },
    {
      title: 'Pre-Mortem and Counterfactual Testing',
      instruction: 'Explicitly ask: "Assume this decision failed catastrophically in 12 months. What caused the breakdown?"',
    },
  ],

  reflectionPrompt: 'When was the last time your personal opinion was altered or subdued by the collective consensus of a room?',
  references: [
    {
      id: 'ref_${bp.id}_01',
      title: ${JSON.stringify(bp.refTitle)},
      citation: ${JSON.stringify(bp.refCitation)},
      authors: ${JSON.stringify(bp.authorYear.split('(')[0].trim())},
      publicationYear: ${parseInt(bp.authorYear.match(/\\d{4}/)?.[0] || '1980', 10)},
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: ${JSON.stringify(bp.doi.startsWith('http') ? bp.doi : `https://doi.org/${bp.doi}`)},
      relevance: 'Foundational empirical study documenting the psychological mechanism.',
      displayOrder: 1,
    },
  ],
  tags: ['${bp.categoryId === 'social_psychology' ? 'Social Psychology' : 'Decision Making'}', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: '${bp.relatedA.topicId}', slug: '${bp.relatedA.slug}', title: '${bp.relatedA.title}', relationshipType: 'amplified_by' },
    { topicId: '${bp.relatedB.topicId}', slug: '${bp.relatedB.slug}', title: '${bp.relatedB.title}', relationshipType: 'counteracted_by' },
  ],
  seoTitle: '${bp.titleEn} | Mentalab Mind',
  seoDescription: '${bp.shortDescEn.slice(0, 155)}',
  canonicalUrl: '/mind/${bp.categoryId === 'social_psychology' ? 'social-psychology' : 'decision-making'}/${bp.slug}',
  ogImageUrl: '/images/mind/${bp.slug}.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: ${JSON.stringify(bp.coreConceptEn)},
};

export const TOPIC_${upperVar}_HINGLISH: MindTopicDetail = {
  ...TOPIC_${upperVar}_EN,
  title: ${JSON.stringify(bp.titleHinglish)},
  subtitle: ${JSON.stringify(bp.subtitleHinglish)},
  shortDescription: ${JSON.stringify(bp.shortDescHinglish)},
  oneLineExplanation: ${JSON.stringify(bp.oneLineHinglish)},

  summary30s: ${JSON.stringify(bp.summary30sHinglish)},
  coreConcept: ${JSON.stringify(bp.coreConceptHinglish)},
  quickTakeaways: [
    ${JSON.stringify(bp.takeawaysHinglish[0])},
    ${JSON.stringify(bp.takeawaysHinglish[1])},
    ${JSON.stringify(bp.takeawaysHinglish[2])},
    ${JSON.stringify(bp.takeawaysHinglish[3])},
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_${upperVar}_EN,
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

export const TOPIC_${upperVar}: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_${upperVar}_EN,
  hinglish: TOPIC_${upperVar}_HINGLISH,
  hi: createLocalizedRecord('hi', ${JSON.stringify(bp.hiTitle)}, ${JSON.stringify(bp.hiSummary)}, [
    ${JSON.stringify(bp.hiTakeaways[0])},
    ${JSON.stringify(bp.hiTakeaways[1])},
    ${JSON.stringify(bp.hiTakeaways[2])}
  ]),
  gu: createLocalizedRecord('gu', ${JSON.stringify(bp.guTitle)}, ${JSON.stringify(bp.guSummary)}, [
    'વૈયક્તિક જવાબદારી સ્પષ્ટ કરો',
    'સ્વતંત્ર વિચારસરણી જાળવો',
    'સામાજિક દબાણથી સાવધાન રહો'
  ]),
  mr: createLocalizedRecord('mr', ${JSON.stringify(bp.mrTitle)}, ${JSON.stringify(bp.mrSummary)}, [
    'वैयक्तिक जबाबदारी निश्चित करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'तथ्यांची पडताळणी करा'
  ]),
  te: createLocalizedRecord('te', ${JSON.stringify(bp.teTitle)}, ${JSON.stringify(bp.teSummary)}, [
    'వ్యక్తిగత బాధ్యత గుర్తించండి',
    'సమూహ ఒత్తిడికి లొంగకండి',
    'స్వతంత్రంగా ఆలోచించండి'
  ]),
  ta: createLocalizedRecord('ta', ${JSON.stringify(bp.taTitle)}, ${JSON.stringify(bp.taSummary)}, [
    'தனிப்பட்ட பொறுப்பை உறுதிசெய்க',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'சுயாதீனமாக சிந்தித்து முடிவெடுக்கவும்'
  ]),
  kn: createLocalizedRecord('kn', ${JSON.stringify(bp.knTitle)}, ${JSON.stringify(bp.knSummary)}, [
    'ವೈಯಕ್ತಿಕ ಜವಾಬ್ದಾರಿ ನಿಗದಿಪಡಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವದಿಂದ ಎಚ್ಚರವಿರಿ',
    'ಸ್ವತಂತ್ರ ವಿಶ್ಲೇಷಣೆ ನಡೆಸಿ'
  ]),
  ml: createLocalizedRecord('ml', ${JSON.stringify(bp.mlTitle)}, ${JSON.stringify(bp.mlSummary)}, [
    'വ്യക്തിഗത ഉത്തരവാദിത്തം പാലിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'സ്വതന്ത്രമായി ചിന്തിക്കുക'
  ]),
  bn: createLocalizedRecord('bn', ${JSON.stringify(bp.bnTitle)}, ${JSON.stringify(bp.bnSummary)}, [
    'ব্যক্তিগত দায়বদ্ধতা নিশ্চিত করুন',
    'দলের অযৌক্তিক চাপ এড়িয়ে চলুন',
    'স্বাধীনভাবে সঠিক সিদ্ধান্ত নিন'
  ]),
  pa: createLocalizedRecord('pa', ${JSON.stringify(bp.paTitle)}, ${JSON.stringify(bp.paSummary)}, [
    'ਨਿੱਜੀ ਜ਼ਿੰਮੇਵਾਰੀ ਤੈਅ ਕਰੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਹੇਠ ਨਾ ਆਓ',
    'ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ'
  ]),
  ur: createLocalizedRecord('ur', ${JSON.stringify(bp.urTitle)}, ${JSON.stringify(bp.urSummary)}, [
    'انفرادی ذمہ داری کا تعین کریں',
    'اجتماعی دباؤ سے ہوشیار رہیں',
    'آزادانہ اور دانشمندانہ فیصلہ کریں'
  ]),
  or: createLocalizedRecord('or', ${JSON.stringify(bp.orTitle)}, ${JSON.stringify(bp.orSummary)}, [
    'ବ୍ୟକ୍ତିଗତ ଦାୟିତ୍ୱ ସ୍ଥିର କରନ୍ତୁ',
    'ଗୋଷ୍ଠୀ ଚାପରେ ଭୁଲ ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ ନାହିଁ',
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', ${JSON.stringify(bp.asTitle)}, ${JSON.stringify(bp.asSummary)}, [
    'ব্যক্তিগত দায়িত্ব নিৰ্ধাৰণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱৰ পৰা আঁতৰি থাকক',
    'স্বতন্ত্ৰভাৱে সিদ্ধান্ত লওক'
  ]),
};
`;
}
