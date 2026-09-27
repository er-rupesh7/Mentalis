import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: Ingroup-Outgroup Bias: The Ancient Psychology of Tribalism
 * Category: Social Psychology (social_psychology)
 * 
 * Academic Grounding:
 * - Tajfel (1970): Experiments in intergroup discrimination
 * - Tajfel & Turner (1979): An integrative theory of intergroup conflict
 * - Brewer (1999): The psychology of prejudice: Ingroup love or outgroup hate?
 */

export const TOPIC_INGROUP_OUTGROUP_EN: MindTopicDetail = {
  id: 'ingroup_outgroup_bias',
  categoryId: 'social_psychology',
  slug: 'ingroup-outgroup-bias',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 4,
  viewCount: 7340,
  shareCount: 560,
  bookmarkCount: 1320,
  title: 'Ingroup-Outgroup Bias: The Ancient Psychology of Tribalism',
  subtitle: 'How our minds instantly divide humanity into "Us" vs. "Them," bestowing automatic empathy on our group and suspicion on outsiders.',
  shortDescription: 'The pattern of favoring members of one\'s own in-group over out-group members in evaluations, allocation of resources, and attribution of motives.',
  oneLineExplanation: 'Our mistakes are honest accidents; their mistakes are proof of an evil agenda.',

  summary30s: 'Ingroup-outgroup bias is humanity\'s oldest evolutionary algorithm: the moment we identify with a group—whether defined by nationality, religion, sports team, or political party—our brain automatically awards that group loyalty, moral charity, and resource favoritism, while viewing outgroup members as dishonest, homogeneous, and untrustworthy.',

  coreConcept: 'Pioneered by social psychologist Henri Tajfel in 1970 through the "Minimal Group Paradigm," this research revealed that human tribalism does not require centuries of religious or racial hatred to ignite. Tajfel showed that assigning teenage boys to arbitrary groups based purely on a coin flip or whether they guessed dots on a screen was enough to trigger immediate, aggressive resource discrimination in favor of their own group and against the other.',
  summary60s: 'Consider how we interpret news stories. When a member of our political party or favorite cricket team is accused of an infraction, our immediate instinct is defense: "The media is taking this out of context, innocent until proven guilty, they were under extreme stress." But when a member of the opposing rival party or team is accused of the identical infraction, our verdict is instant and unforgiving: "See? That proves what kind of corrupt monsters they all are!" We do not judge actions; we judge tribal uniforms.',

  quickTakeaways: [
    'Minimal Group Trigger: Tribes form in seconds over completely meaningless badges or labels',
    'Outgroup Homogeneity: "We are complex, nuanced individuals; they are all identical and brainwashed"',
    'Empathy Asymmetry: Brain scans reveal reduced mirror neuron activation when viewing outgroup members in physical pain',
    'Superordinate Goals Antidote: The only proven cure for tribal hostility is uniting competing groups around a common shared threat or mission',
  ],

  whyItHappens: 'Ancestral inter-tribal competition. For 99% of human history, strangers from an outside clan posed an existential threat of violence, resource theft, or disease transmission. Cohesive internal solidarity was mandatory for survival.',
  evolutionaryMechanism: 'A clan whose members shared food generously within their group while ruthlessly defending boundaries against external groups out-competed fragmented or overly trusting clans.',

  howItWorks: 'Three cognitive stages: (1) Social Categorization: Labeling people into "Us" vs "Them"; (2) Social Identification: Adopting the identity and norms of the ingroup to boost self-esteem; (3) Social Comparison: Derogating the outgroup to maintain subjective moral and intellectual superiority.',
  whereYouEncounterIt: 'Sports rivalries (CSK vs MI, India vs Pakistan), partisan politics, corporate department feuds (Engineering vs Sales), and geopolitical conflicts.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'The Dual Standard of Attribution',
    description: 'How the exact same action is judged depending on tribal membership.',
    analogySideA: {
      label: 'Ingroup Action ("One of Us")',
      detail: '"They bent the company policy because they are agile innovators who care about customer results."',
    },
    analogySideB: {
      label: 'Outgroup Action ("One of Them")',
      detail: '"They broke company policy because they have zero ethics and despise organizational discipline."',
    },
  },

  researchSummary: 'Tajfel’s 1971 Bristol experiments showed that British schoolboys allocated points (convertible to cash) to maximize the difference between groups rather than maximizing absolute profit for their own team. They actively chose an outcome where their group received 7 points and the outgroup received 1 point, over an alternative where their group received 13 points and the outgroup received 12 points.',
  limitationsAndControversies: 'Marilyn Brewer (1999) argued that ingroup favoritism does not necessarily require active outgroup hatred. Much of intergroup discrimination is driven by preferential warmth, trust, and mutual aid reserved for insiders, rather than direct hostility toward outsiders.',
  commonMisconceptions: 'Common myth: "Tribal bias requires centuries of deep cultural, religious, or racial hatred." Reality: Henri Tajfel\'s minimal group paradigm proved that flipping a coin or assigning people to "Team Blue" vs "Team Red" creates measurable in-group favoritism within 15 minutes.',

  howToRecognize: [
    'Assuming that everyone who votes for the opposing political party is either evil, stupid, or corrupt',
    'Describing opposing groups with sweeping generalizations ("they always do this") while insisting your group has diverse opinions',
    'Feeling a secret twinge of satisfaction when bad news hits a rival company, institution, or political faction',
    'Blaming an entire demographic for the violent or unethical actions of a single rogue individual',
  ],

  scenarios: [
    {
      id: 'scen_ingroup_01',
      scenarioType: 'indian_context',
      title: 'The Product vs. Sales Cold War in Gurugram',
      vignette: 'At a software company in Gurugram, the Product management team sits on the 4th floor, while the Enterprise Sales team sits on the 6th floor. During an all-hands meeting, a major enterprise deal falls through. The Head of Product tells her team: "Sales blew it again because they are greedy, lazy, and don’t understand how modern tech works." Meanwhile on the 6th floor, the VP of Sales tells his reps: "Product ruined our quarter because they are ivory-tower academics who have never worked a day in the real world."',
      breakdownAnalysis: 'Both departments are completely captive to ingroup-outgroup bias and outgroup homogeneity. Both teams view their own floor as hard-working professionals and the other floor as caricatures.',
      recommendedAction: 'Implement Muzafer Sherif\'s Robbers Cave Superordinate Goal intervention: Create cross-functional squads containing 1 product manager and 1 sales rep co-owning a single shared revenue-and-retention KPI.',
    },
  ],

  examples: [
    {
      id: 'ex_ingroup_01',
      domain: 'general',
      displayOrder: 1,
      title: 'The Referee Call Paradox',
      description: 'When an umpire makes an ambiguous LBW (leg-before-wicket) decision against your cricket team, you shout that the referee is biased and corrupt. When the exact same ambiguous call benefits your team, you praise the referee\'s eagle-eyed precision.',
      takeaway: 'Tribal allegiance dictates perceptual fairness.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_ingroup_01',
      scenarioContext: 'In Muzafer Sherif\'s classic "Robbers Cave" social psychology experiment, two groups of boys at a summer camp developed fierce, violent hostility toward each other after a week of competitive athletic tournaments. What single intervention successfully eliminated their hostility?',
      question: 'Which strategy restored cooperation and harmony between the two groups?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Bringing both groups together in a dining hall for lectures on peace and moral empathy',
          explanation: 'Mere contact without shared purpose actually intensified food fights and verbal brawls.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Introducing a common emergency (repairing the camp’s sole broken water supply line) that required joint physical effort',
          explanation: 'Accurate: superordinate goals that force mutual interdependence dismantle tribal outgroup hostility.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Disciplining the leaders of both groups with severe detention punishments',
          explanation: 'Punishment from external authority unified each tribe in deeper defiance.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Tribal barriers melt only when common, urgent survival goals require genuine interdependence.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Establish superordinate shared goals and actively humanize out-group members through one-on-one cross-boundary dialogue.',
  psychologicalDefenses: [
    {
      title: 'The Individual Disaggregation Rule',
      instruction: 'Whenever you catch yourself thinking "those people are all X," immediately force yourself to name 3 specific individuals from that outgroup who violate the stereotype.',
    },
    {
      title: 'Establish Superordinate Goals',
      instruction: 'To resolve bitter friction between rival teams or factions, define a higher-order objective that neither group can achieve without the other.',
    },
    {
      title: 'The Neutral Attribute Test',
      instruction: 'Before condemning an action by an opponent, ask: "If my closest friend or political idol did this exact same thing, would I still consider it wrong?" If not, you are playing tribal games.',
    },
  ],

  reflectionPrompt: 'Notice when you say "they always do this" about a rival department, political group, or culture. Are you treating them as a monolith?',

  references: [
    {
      id: 'ref_tajfel_1970',
      authors: 'Tajfel, H.',
      year: 1970,
      title: 'Experiments in intergroup discrimination',
      publicationName: 'Scientific American',
      volumeIssue: '223(5), 96-102',
      doi: '10.1038/scientificamerican1170-96',
      evidenceStrength: 'historical_classic',
    },
    {
      id: 'ref_brewer_1999',
      authors: 'Brewer, M. B.',
      year: 1999,
      title: 'The psychology of prejudice: Ingroup love or outgroup hate?',
      publicationName: 'Journal of Social Issues',
      volumeIssue: '55(3), 429-444',
      doi: '10.1111/0022-4537.00126',
      evidenceStrength: 'theoretical_framework',
    },
  ],

  relatedTopics: [
    {
      topicId: 'social_proof',
      slug: 'social-proof-and-bandwagon',
      title: 'Social Proof & The Bandwagon Effect',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'conformity_asch_effect',
      slug: 'conformity-and-asch-effect',
      title: 'Conformity & Asch Effect',
      relationshipType: 'amplified_by',
    },
  ],
};

export const TOPIC_INGROUP_OUTGROUP: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_INGROUP_OUTGROUP_EN,
  hinglish: {
    ...TOPIC_INGROUP_OUTGROUP_EN,
    title: 'Ingroup-Outgroup Bias: "Hum" Aur "Woh" Ka Tribal Dimaag',
    subtitle: 'Apne logon ki galti par parda daalna aur doosron ko bina wajah dushman samajhna.',
    shortDescription: 'Ek aisa biological pattern jisme hum apne group ke logon ko automatically acha aur bahar walo ko bura ya chalak mante hain.',
    oneLineExplanation: 'Humari galti halat ka asar hai; unki galti unki gandi niyat ka saboot hai.',
    summary30s: 'Henri Tajfel ne 1970 me prove kiya ki insaan ko do groups me baantne ke liye sirf ek coin toss kaafi hai. Coin toss ke 5 minute baad hi log apne group ko zyada paise dene lagte hain aur doosre group se nafrat karne lagte hain. Yeh tribalism politics, sports aur corporate departments me rozz hota hai.',
  },
  hi: {
    ...TOPIC_INGROUP_OUTGROUP_EN,
    title: 'Ingroup-Outgroup Bias (अंतःसमूह-बहिःसमूह पूर्वाग्रह)',
    subtitle: 'मानव मस्तिष्क का आदिम कबिलाई विभाजन: "हम" बनाम "वे"।',
    shortDescription: 'अपने समूह (in-group) के सदस्यों के प्रति स्वाभाविक सहानुभूति और बाहरी समूह (out-group) के प्रति संदेह और भेदभाव का पूर्वाग्रह।',
    oneLineExplanation: 'हमारे लोग ईमानदार हैं; उनके लोग कपटी हैं।',
    summary30s: 'अंतःसमूह-बहिःसमूह पूर्वाग्रह (Ingroup-Outgroup Bias) यह दर्शाता है कि किसी भी मनमाने आधार पर समूह बनते ही मनुष्य अपने समूह को नैतिक रूप से श्रेष्ठ मानने लगता है और दूसरे समूह के प्रति संवेदनहीन हो जाता है। हेनरी ताजफेल के प्रयोगों ने सिद्ध किया कि एक सिक्के की उछाल से भी कबिलाई विभाजन उत्पन्न हो सकता है।',
  },
  gu: TOPIC_INGROUP_OUTGROUP_EN,
  mr: TOPIC_INGROUP_OUTGROUP_EN,
  te: TOPIC_INGROUP_OUTGROUP_EN,
  ta: TOPIC_INGROUP_OUTGROUP_EN,
  kn: TOPIC_INGROUP_OUTGROUP_EN,
  ml: TOPIC_INGROUP_OUTGROUP_EN,
  bn: TOPIC_INGROUP_OUTGROUP_EN,
  pa: TOPIC_INGROUP_OUTGROUP_EN,
  ur: TOPIC_INGROUP_OUTGROUP_EN,
  or: TOPIC_INGROUP_OUTGROUP_EN,
  as: TOPIC_INGROUP_OUTGROUP_EN,
  };
