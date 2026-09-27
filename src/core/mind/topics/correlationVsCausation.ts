import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Critical Thinking Track
 * Topic: Correlation vs. Causation: The Statistical Illusion
 * Category: Critical Thinking (critical_thinking)
 * 
 * Academic Grounding:
 * - Pearl (2000): Causality: Models, Reasoning, and Inference
 * - Bradford Hill (1965): The environment and disease: Association or causation?
 * - Vigen (2015): Spurious Correlations
 */

export const TOPIC_CORRELATION_CAUSATION_EN: MindTopicDetail = {
  id: 'correlation_vs_causation',
  categoryId: 'critical_thinking',
  slug: 'correlation-vs-causation',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 5,
  viewCount: 7420,
  shareCount: 580,
  bookmarkCount: 1410,
  title: 'Correlation vs. Causation: The Statistical Illusion',
  subtitle: 'Just because two variables move together in tandem does not mean one causes the other.',
  shortDescription: 'The widespread logical fallacy of assuming that an observed statistical correlation between two variables proves a direct cause-and-effect relationship (cum hoc ergo propter hoc).',
  oneLineExplanation: 'Ice cream sales and shark attacks both spike in July; eating ice cream does not attract sharks.',

  summary30s: 'Correlation vs. Causation is the cardinal rule of empirical science: two events happening at the same time does not mean one caused the other. They may be driven by an unmeasured third factor (Confounding Variable), run in reverse (Reverse Causality), or represent pure mathematical coincidence (Spurious Correlation). Failing to distinguish the two leads to disastrous medical, financial, and policy choices.',

  coreConcept: 'Formalized mathematically by Judea Pearl through Causal Diagrams (Directed Acyclic Graphs) and epidemiologist Sir Austin Bradford Hill (1965), causal inference requires far more than statistical association. When Variable A correlates with Variable B, four mutually exclusive causal architectures are possible: (1) A causes B (True Causality); (2) B causes A (Reverse Causality); (3) C causes both A and B (Confounder / Lurking Variable); (4) Pure Random Chance (Spurious Correlation).',
  summary60s: 'Consider the famous finding that people who sleep with their shoes on frequently wake up with splitting headaches. Does sleeping with shoes cause migraines? Of course not. Both the shoes and the morning headache are caused by an unmeasured third confounding variable: going to bed severely intoxicated after drinking heavily. Without randomized controlled trials (RCTs) or counterfactual interventions (Pearl\'s "Do-Calculus"), observing two curves moving up together proves nothing about mechanism.',

  quickTakeaways: [
    'Cum Hoc Ergo Propter Hoc: "With this, therefore because of this"—the universal statistical trap',
    'The Third Variable (Confounder): Almost all viral health claims on social media are explained by hidden lifestyle confounders',
    'Reverse Causality: Depressed people may exercise less, but lack of exercise also induces depression (bidirectional loops)',
    'The Randomized Controlled Trial (RCT) Standard: The only definitive proof of causation is an intervention that changes A while holding all else constant',
  ],

  whyItHappens: 'Narrative hunger and pattern matching. The human brain hates statistical randomness and co-occurring noise; it craves neat, linear stories with heroes, villains, and causal triggers.',
  evolutionaryMechanism: 'Assuming causation saved lives. If eating red berries was correlated with stomach cramps, avoiding all red berries was an effective rule, regardless of whether the actual cause was a contaminated stream nearby.',

  howItWorks: 'The causal illusion sequence: (1) Observation: Noticing two variables X and Y rising together; (2) Narrative Construction: Imagining an intuitive causal story ("X obviously causes Y"); (3) Premature Intervention: Changing X expecting Y to change; (4) Frustration: Discovering that altering X had zero effect because the real driver was hidden variable Z.',
  whereYouEncounterIt: 'Dietary health studies ("coffee drinkers live 2 years longer" vs wealth/education confounders), tech growth metrics ("users who click 3 buttons stay 4x longer"), education policy, and crime statistics.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Correlation vs. Causation: The Ice Cream Shark Paradox',
    description: 'How an unobserved confounding variable creates false causal illusions.',
    analogySideA: {
      label: 'The False Causal Claim (Correlation Error)',
      detail: '"Ice cream sales correlate with drowning deaths (r = 0.89). We must ban ice cream to save lives!"',
    },
    analogySideB: {
      label: 'The True Causal Model (The Confounder)',
      detail: 'Confounder = Summer Heat. Extreme heat causes more swimming (leading to drownings) AND more ice cream purchases.',
    },
  },

  researchSummary: 'Tyler Vigen\'s (2015) landmark database of "Spurious Correlations" mathematically proved that with enough data, completely absurd correlations emerge by pure chance: the correlation between US spending on science/space and suicides by hanging is r = 0.9979. The correlation between per capita cheese consumption and deaths by tangled bedsheets is r = 0.947. Co-movement without mechanistic plausibility is noise.',
  limitationsAndControversies: 'In complex adaptive systems (macroeconomics, climate, human biology), ethical or physical constraints often prevent randomized controlled trials (e.g., you cannot ethically force 10,000 humans to smoke cigarettes for 30 years to prove lung cancer causality). In such cases, Bradford Hill\'s criteria (temporality, biological gradient, plausibility, coherence) provide rigorous alternative evidence.',
  commonMisconceptions: 'Common myth: "If two variables show an almost perfect statistical correlation, one must be driving the other." Reality: Confounding variables and reverse causality frequently produce spurious correlations (e.g., ice cream sales and shark attacks both correlate with summer weather).',

  howToRecognize: [
    'Reading a news article claiming "People who drink two glasses of red wine have 20% lower heart disease" without checking if wine drinkers are wealthier and have better healthcare',
    'Assuming that because successful startup founders wake up at 5:00 AM, waking up at 5:00 AM will make your startup successful',
    'A marketing team claiming that sending 5 emails a week caused sales to rise, when sales actually rose due to a national holiday shopping weekend',
    'Assuming someone is wealthy because they drive an expensive car (confusing an outward asset symbol with net worth)',
  ],

  scenarios: [
    {
      id: 'scen_corr_01',
      scenarioType: 'indian_context',
      title: 'The "Onboarding Tutorial" Illusion in a Bangalore SaaS Startup',
      vignette: 'The Head of Growth at a Bengaluru SaaS startup presents a chart to the executive board: "Users who complete our optional 8-step product tour have an 85% 90-day retention rate, whereas users who skip it have only a 15% retention rate. We should make the 8-step tour mandatory for all users!" The engineering team builds the mandatory tour. Three months later, overall user retention plummets to 9%.',
      breakdownAnalysis: 'The Head of Growth confused correlation with causation. Highly motivated, enterprise power-users were already naturally inclined to adopt the software and thus chose to complete the tour. Forcing a clunky 8-step tour on casual users created massive onboarding friction, alienating regular users.',
      recommendedAction: 'Run a true A/B Randomized Controlled Trial (RCT): "Split incoming traffic randomly into 50% who see the tour and 50% who do not. Measure the true marginal causal uplift, rather than observing self-selected correlation."',
    },
  ],

  examples: [
    {
      id: 'ex_corr_01',
      domain: 'education',
      displayOrder: 1,
      title: 'The Books in the Home Study',
      description: 'Studies repeatedly find that children whose parents own more than 500 books at home score higher on standardized tests. Buying 500 books and dumping them in the closet does not make a child smarter; the books are a proxy (confounder) for parental education level, income, and reading culture.',
      takeaway: 'Intervening on a correlated proxy variable does not produce the desired causal effect.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_corr_01',
      scenarioContext: 'An observational epidemiological study tracks 50,000 adults over 10 years and discovers that people who regularly take daily multivitamin supplements have significantly lower rates of cardiovascular disease than people who do not take multivitamins.',
      question: 'Why does this observational study fail to prove that multivitamins prevent cardiovascular disease?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Because "healthy user bias" acts as a massive confounder: people who consistently take vitamins also tend to exercise more, eat balanced diets, avoid smoking, and have higher healthcare access',
          explanation: 'Accurate: without randomized intervention, health-conscious lifestyle choices confound the correlation.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Because multivitamins are illegal to sell in medical pharmacies',
          explanation: 'Multivitamins are sold legally worldwide; the critique is methodological.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Because cardiovascular disease was only discovered in the 21st century',
          explanation: 'Cardiovascular disease has been documented in human history for millennia.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Always ask what hidden traits distinguish the group that adopts the behavior from the group that does not.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Never assume A caused B without controlled experimental isolation, counterfactual testing, and ruling out lurking confounding variables.',
  psychologicalDefenses: [
    {
      title: 'The "What Else Explains Both?" Test',
      instruction: 'Whenever you see an association between X and Y, immediately force yourself to brainstorm 3 plausible third factors (Z) that could independently cause both.',
    },
    {
      title: 'Demand the Mechanism (Pearl\'s Do-Calculus)',
      instruction: 'Ask: "If I physically force an intervention on X, through what exact biological or physical pathway does it alter Y?" If there is no plausible mechanism, assume correlation noise.',
    },
    {
      title: 'Beware of Self-Selection in Business Metrics',
      instruction: 'In product analytics, never assume features used by "top customers" are what made them top customers. Run randomized split-tests before mandating feature flows.',
    },
  ],

  reflectionPrompt: 'Did you ever start taking a supplement right before feeling better, and assume the pill cured you without considering sleep, time, and placebo?',

  references: [
    {
      id: 'ref_pearl_2000',
      authors: 'Pearl, J.',
      year: 2000,
      title: 'Causality: Models, Reasoning, and Inference',
      publicationName: 'Cambridge University Press (2nd Edition 2009)',
      volumeIssue: 'Chapters 1-3',
      doi: '10.1017/CBO9780511803161',
      evidenceStrength: 'foundational_monograph',
    },
    {
      id: 'ref_bradfordhill_1965',
      authors: 'Hill, A. B.',
      year: 1965,
      title: 'The environment and disease: Association or causation?',
      publicationName: 'Proceedings of the Royal Society of Medicine',
      volumeIssue: '58(5), 295-300',
      doi: '10.1177/003591576505800503',
      evidenceStrength: 'historical_classic',
    },
  ],

  relatedTopics: [
    {
      topicId: 'first_principles_thinking',
      slug: 'first-principles-thinking',
      title: 'First Principles Thinking',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'falsification_principle',
      slug: 'falsification-principle',
      title: 'The Falsification Principle',
      relationshipType: 'amplified_by',
    },
  ],
};

export const TOPIC_CORRELATION_CAUSATION: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_CORRELATION_CAUSATION_EN,
  hinglish: {
    ...TOPIC_CORRELATION_CAUSATION_EN,
    title: 'Correlation vs. Causation: Ek Sath Hone Aur Wajah Hone Ka Fark',
    subtitle: 'Do cheezein ek sath badh rahi hain iska matlab yeh bilkul nahi ki ek ki wajah se doosri ho rahi hai.',
    shortDescription: 'Science aur statistics ka sabse bada rule: do ghatnaon me correlation dekhkar kisi ek ko doosre ka kaaran maan lena bohot badi bewakoofi hai.',
    oneLineExplanation: 'Ice cream ki bikri badhne se shark attack nahi badhte; dono garmi ki wajah se badhte hain.',
    summary30s: 'Judea Pearl aur Sir Austin Bradford Hill ne samjhaya ki do baatein agar ek sath ho rahi hain, toh 4 possibilities hain: (1) Pehli ne doosri ko kiya, (2) Doosri ne pehli ko kiya, (3) Dono ke piche koi teesra hidden kaaran hai (Confounder), ya (4) Dono sirf aapas me ek ittefaq (Coincidence) hain. Correlation dekhkar foran result par mat pahocho.',
  },
  hi: {
    ...TOPIC_CORRELATION_CAUSATION_EN,
    title: 'Correlation vs. Causation (सहसंबंध बनाम कार्य-कारण संबंध)',
    subtitle: 'दो घटनाओं का एक साथ घटित होना उनके बीच प्रत्यक्ष कारण संबंध का प्रमाण नहीं है।',
    shortDescription: 'वैज्ञानिक सांख्यिकी का मौलिक नियम: केवल सहसंबंध (Correlation) के आधार पर कार्य-कारण संबंध (Causality) का अनुमान लगाने की तार्किक त्रुटि।',
    oneLineExplanation: 'आइसक्रीम की बिक्री और डूबने की घटनाओं का एक साथ बढ़ना गर्मी के कारण है, आइसक्रीम के कारण नहीं।',
    summary30s: 'सहसंबंध बनाम कार्य-कारण (Correlation vs. Causation) यह स्पष्ट करता है कि जब दो चर एक साथ बदलते हैं, तो अक्सर कोई तीसरा अनदेखा कारक (Confounder) दोनों को प्रभावित कर रहा होता है। 1965 में ब्रैडफोर्ड हिल ने कार्य-कारण संबंध स्थापित करने के लिए कड़े वैज्ञानिक मानदंड निर्धारित किए।',
  },
  gu: TOPIC_CORRELATION_CAUSATION_EN,
  mr: TOPIC_CORRELATION_CAUSATION_EN,
  te: TOPIC_CORRELATION_CAUSATION_EN,
  ta: TOPIC_CORRELATION_CAUSATION_EN,
  kn: TOPIC_CORRELATION_CAUSATION_EN,
  ml: TOPIC_CORRELATION_CAUSATION_EN,
  bn: TOPIC_CORRELATION_CAUSATION_EN,
  pa: TOPIC_CORRELATION_CAUSATION_EN,
  ur: TOPIC_CORRELATION_CAUSATION_EN,
  or: TOPIC_CORRELATION_CAUSATION_EN,
  as: TOPIC_CORRELATION_CAUSATION_EN,
  };
