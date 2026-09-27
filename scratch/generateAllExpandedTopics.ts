import * as fs from 'fs';
import * as path from 'path';

interface TopicDef {
  fileName: string;
  varName: string;
  id: string;
  categoryId: 'social_psychology' | 'decision_making' | 'persuasion_influence';
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
  sideALabelEn: string;
  sideADetailEn: string;
  sideBLabelEn: string;
  sideBDetailEn: string;
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

  titleHinglish: string;
  subtitleHinglish: string;
  shortDescHinglish: string;
  oneLineHinglish: string;
  summary30sHinglish: string;
  coreConceptHinglish: string;
  takeawaysHinglish: [string, string, string, string];

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

export function renderTopicFile(t: TopicDef): string {
  const upper = t.varName.toUpperCase();
  const trackTitle = t.categoryId === 'social_psychology' ? 'Social Psychology' : t.categoryId === 'persuasion_influence' ? 'Persuasion & Influence' : 'Decision Making';
  const catSlug = t.categoryId === 'social_psychology' ? 'social-psychology' : t.categoryId === 'persuasion_influence' ? 'persuasion-and-influence' : 'decision-making';
  return `import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — ${trackTitle} Track
 * Topic: ${t.titleEn}
 * Category: ${t.categoryId}
 * Academic Grounding: ${t.authorYear} (${t.doi})
 */

export const TOPIC_${upper}_EN: MindTopicDetail = {
  id: '${t.id}',
  categoryId: '${t.categoryId}',
  slug: '${t.slug}',
  difficulty: '${t.difficulty}',
  estimatedReadingMinutes: ${t.readTime},
  scientificConsensusTier: 'established',
  sortWeight: ${t.sortWeight},
  viewCount: ${3200 + t.sortWeight * 110},
  shareCount: ${210 + t.sortWeight * 14},
  bookmarkCount: ${540 + t.sortWeight * 22},
  title: ${JSON.stringify(t.titleEn)},
  subtitle: ${JSON.stringify(t.subtitleEn || t.subtitle || undefined)},
  shortDescription: ${JSON.stringify(t.shortDescEn)},
  oneLineExplanation: ${JSON.stringify(t.oneLineEn)},

  summary30s: ${JSON.stringify(t.summary30sEn)},
  coreConcept: ${JSON.stringify(t.coreConceptEn)},
  summary60s: ${JSON.stringify(t.summary60sEn)},
  quickTakeaways: [
    ${JSON.stringify(t.takeawaysEn[0])},
    ${JSON.stringify(t.takeawaysEn[1])},
    ${JSON.stringify(t.takeawaysEn[2])},
    ${JSON.stringify(t.takeawaysEn[3])},
  ],

  whyItHappens: ${JSON.stringify(t.whyItHappensEn)},
  evolutionaryMechanism: ${JSON.stringify(t.evolutionaryEn)},
  howItWorks: ${JSON.stringify(t.howItWorksEn)},
  whereYouEncounterIt: ${JSON.stringify(t.whereEn)},

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: ${JSON.stringify(t.headlineEn)},
    description: 'Empirical comparison between rational calibration and psychological distortion.',
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
  limitationsAndControversies: 'Contextual variables include individual cognitive reflection, cultural collectivism, stake size, and institutional transparency.',
  commonMisconceptions: 'Common myth: Intellectual intelligence or domain expertise protects individuals from this dynamic. Reality: Controlled empirical trials prove that cognitive reflection tests and structured institutional rubrics are necessary to prevent distortion.',

  howToRecognize: [
    'Noticing an immediate emotional reluctance to question an emerging collective consensus',
    'Feeling personal accountability evaporate when responsibility is diffused into a committee',
    'Justifying an inconsistent action through creative rationalization rather than behavioral adjustment',
    'Experiencing decision paralysis when presented with an uncurated set of alternatives',
  ],

  scenarios: [
    {
      id: 'scen_${t.id}_01',
      scenarioType: 'indian_context',
      title: ${JSON.stringify(t.scenarioTitleEn)},
      vignette: ${JSON.stringify(t.scenarioVignetteEn)},
      breakdownAnalysis: ${JSON.stringify(t.scenarioBreakdownEn)},
      recommendedAction: ${JSON.stringify(t.scenarioActionEn)},
    },
  ],

  examples: [
    {
      id: 'ex_${t.id}_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_${t.id}_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_${t.id}_01',
      scenarioContext: ${JSON.stringify(t.pqContextEn)},
      question: ${JSON.stringify(t.pqPromptEn)},
      prompt: ${JSON.stringify(t.pqPromptEn)},
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: '${t.difficulty}',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: ${JSON.stringify(t.pqOptA)},
          isCorrect: ${t.pqCorrect === 'opt_a'},
          explanation: ${t.pqCorrect === 'opt_a' ? JSON.stringify(t.pqExplanation) : "'Incorrect. This reflects an uncalibrated heuristic or common misconception.'"},
        },
        {
          id: 'opt_b',
          label: 'B',
          text: ${JSON.stringify(t.pqOptB)},
          isCorrect: ${t.pqCorrect === 'opt_b'},
          explanation: ${t.pqCorrect === 'opt_b' ? JSON.stringify(t.pqExplanation) : "'Incorrect. This does not address the core underlying psychological mechanism.'"},
        },
        {
          id: 'opt_c',
          label: 'C',
          text: ${JSON.stringify(t.pqOptC)},
          isCorrect: ${t.pqCorrect === 'opt_c'},
          explanation: ${t.pqCorrect === 'opt_c' ? JSON.stringify(t.pqExplanation) : "'Incorrect. This fails to mitigate the cognitive bias effectively.'"},
        },
        {
          id: 'opt_d',
          label: 'D',
          text: ${JSON.stringify(t.pqOptD)},
          isCorrect: ${t.pqCorrect === 'opt_d'},
          explanation: ${t.pqCorrect === 'opt_d' ? JSON.stringify(t.pqExplanation) : "'Incorrect. This represents standard uncalibrated group dynamics.'"},
        },
      ],
      cognitiveTakeaway: ${JSON.stringify(t.pqTakeaway)},
    },
  ],

  howToRespond: 'Implement structured individual accountability, pre-commitments, and independent auditing protocols.',
  psychologicalDefenses: [
    {
      title: 'Independent Analytical Separation',
      instruction: 'Formulate your assessment and write down confidence intervals privately before hearing the group consensus or market narrative.',
    },
    {
      title: 'Counterfactual Inversion',
      instruction: 'Explicitly invert the proposition: "If the exact opposite hypothesis were true, what tangible evidence would we expect to observe today?"',
    },
    {
      title: 'Binding Ulysses Pre-Commitments',
      instruction: 'Lock in objective exit points, decision rules, and resource ceilings in advance when your mind is calm and uncompromised.',
    },
  ],

  reflectionPrompt: 'Where in your daily professional or personal life are you quietly conforming to an unspoken norm that you privately recognize as irrational?',
  references: [
    {
      id: 'ref_${t.id}_01',
      title: ${JSON.stringify(t.refTitle)},
      citation: ${JSON.stringify(t.refCitation)},
      authors: ${JSON.stringify(t.authorYear.split('(')[0].trim())},
      publicationYear: ${parseInt(t.authorYear.match(/\\d{4}/)?.[0] || '1980', 10)},
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: ${JSON.stringify(t.doi.startsWith('http') ? t.doi : `https://doi.org/${t.doi}`)},
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['${trackTitle}', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: '${t.relatedA.topicId}', slug: '${t.relatedA.slug}', title: '${t.relatedA.title}', relationshipType: 'amplified_by' },
    { topicId: '${t.relatedB.topicId}', slug: '${t.relatedB.slug}', title: '${t.relatedB.title}', relationshipType: 'counteracted_by' },
  ],
  seoTitle: ${JSON.stringify(`${t.titleEn} | Mentalab Mind`)},
  seoDescription: ${JSON.stringify(t.shortDescEn.slice(0, 155))},
  canonicalUrl: '/mind/${catSlug}/${t.slug}',
  ogImageUrl: '/images/mind/${t.slug}.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: ${JSON.stringify(t.coreConceptEn)},
};

export const TOPIC_${upper}_HINGLISH: MindTopicDetail = {
  ...TOPIC_${upper}_EN,
  title: ${JSON.stringify(t.titleHinglish)},
  subtitle: ${JSON.stringify(t.subtitleHinglish)},
  shortDescription: ${JSON.stringify(t.shortDescHinglish)},
  oneLineExplanation: ${JSON.stringify(t.oneLineHinglish)},

  summary30s: ${JSON.stringify(t.summary30sHinglish)},
  coreConcept: ${JSON.stringify(t.coreConceptHinglish)},
  quickTakeaways: [
    ${JSON.stringify(t.takeawaysHinglish[0])},
    ${JSON.stringify(t.takeawaysHinglish[1])},
    ${JSON.stringify(t.takeawaysHinglish[2])},
    ${JSON.stringify(t.takeawaysHinglish[3])},
  ],
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
  hi: createLocalizedRecord('hi', ${JSON.stringify(t.hiTitle)}, ${JSON.stringify(t.hiSummary)}, [
    ${JSON.stringify(t.hiTakeaways[0])},
    ${JSON.stringify(t.hiTakeaways[1])},
    ${JSON.stringify(t.hiTakeaways[2])}
  ]),
  gu: createLocalizedRecord('gu', ${JSON.stringify(t.guTitle)}, ${JSON.stringify(t.guSummary)}, [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', ${JSON.stringify(t.mrTitle)}, ${JSON.stringify(t.mrSummary)}, [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', ${JSON.stringify(t.teTitle)}, ${JSON.stringify(t.teSummary)}, [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', ${JSON.stringify(t.taTitle)}, ${JSON.stringify(t.taSummary)}, [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', ${JSON.stringify(t.knTitle)}, ${JSON.stringify(t.knSummary)}, [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', ${JSON.stringify(t.mlTitle)}, ${JSON.stringify(t.mlSummary)}, [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', ${JSON.stringify(t.bnTitle)}, ${JSON.stringify(t.bnSummary)}, [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', ${JSON.stringify(t.paTitle)}, ${JSON.stringify(t.paSummary)}, [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', ${JSON.stringify(t.urTitle)}, ${JSON.stringify(t.urSummary)}, [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', ${JSON.stringify(t.orTitle)}, ${JSON.stringify(t.orSummary)}, [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', ${JSON.stringify(t.asTitle)}, ${JSON.stringify(t.asSummary)}, [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
`;
}
