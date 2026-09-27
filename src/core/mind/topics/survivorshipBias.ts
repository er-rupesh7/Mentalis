import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: Survivorship Bias: The Hidden Cemetery of Failures
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Wald (1943/1980): A method of estimating plane vulnerability based on damage of returning aircraft
 * - Brown et al. (1992): Survivorship bias in performance studies
 * - Taleb (2001): Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets
 */

export const TOPIC_SURVIVORSHIP_BIAS_EN: MindTopicDetail = {
  id: 'survivorship_bias',
  categoryId: 'cognitive_biases',
  slug: 'survivorship-bias',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 7,
  viewCount: 9240,
  shareCount: 890,
  bookmarkCount: 1840,
  title: 'Survivorship Bias: The Hidden Cemetery of Failures',
  subtitle: 'Focusing exclusively on the winners who survived while ignoring the invisible graveyard of those who failed.',
  shortDescription: 'The logical error of concentrating on the people or things that made it through some selection process and overlooking those that did not, leading to false conclusions.',
  oneLineExplanation: 'Studying only successful college dropouts and concluding that dropping out makes you a billionaire.',

  summary30s: 'Survivorship bias occurs when we study only the visible "survivors" of a high-risk process (billionaires, viral pop stars, bestselling authors) and mistakenly believe their shared habits caused their success. Because the tens of thousands of people who worked just as hard and failed are completely invisible, we mistake lottery-ticket luck for replicable strategy.',

  coreConcept: 'Famously illustrated by mathematician Abraham Wald during World War II, survivorship bias is a systematic sampling error. When the military analyzed bullet holes in returning combat bombers to determine where to add armor, they noticed damage concentrated in the wings and fuselage. The military proposed armoring the bullet-riddled wings. Wald pointed out the profound error: the planes were hit uniformly all over; planes hit in the engine never returned to be counted. The armor belonged on the engine, where returning planes had zero bullet holes.',
  summary60s: 'Open any business bookstore or social media feed: you will find endless guides analyzing the "7 Habits of Highly Successful Tech CEOs"—waking up at 4:30 AM, drinking cold-brew coffee, or dropping out of Stanford. What the author fails to investigate is the invisible graveyard: how many thousands of people woke up at 4:30 AM, drank cold-brew coffee, dropped out of university, and went bankrupt? When a habit is shared equally by both survivors and casualties, that habit has zero causal power over success.',

  quickTakeaways: [
    'The Invisible Denominator: Success stories are loud and published; failures are silent and buried',
    'False Causality: Copying the traits of winners without checking if losers had the same traits is intellectual folly',
    'Mutual Fund Illusion: Investment fund marketing advertises 15-year beating averages by quietly merging or closing funds that went to zero',
    'The Cemetery Audit Antidote: Always ask: "What did the people who did this exact same thing and failed look like?"',
  ],

  whyItHappens: 'Visibility asymmetry. Human perception can only evaluate what is physically accessible. Deceased startups, out-of-print books, and bankrupted retail traders leave no visible trace on social feeds or store shelves.',
  evolutionaryMechanism: 'Emulating the victorious alpha hunter or tribal chief was an effective survival heuristic when environments were relatively simple and repeatable. Transferring that heuristic to complex, hyper-stochastic modern systems fails catastrophically.',

  howItWorks: 'The process operates in four stages: (1) Filter: A high-attrition filter eliminates 95%+ of participants; (2) Erasure: The eliminated participants disappear from public data; (3) Clustering: Observers examine the remaining 5% of survivors for common traits; (4) Mythmaking: Those common traits are marketed as the golden formula for achievement.',
  whereYouEncounterIt: 'Self-help literature, venture capital case studies, fitness influencer routines, mutual fund track records, and advice from lottery winners.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Abraham Wald’s WWII Bomber Problem',
    description: 'How looking at survivors leads to exactly the wrong engineering conclusions.',
    analogySideA: {
      label: 'The Naive Military Observation',
      detail: '"Returning planes have heavy bullet holes in the wings. We should add armor to the wings!"',
    },
    analogySideB: {
      label: 'Abraham Wald’s Actuarial Insight',
      detail: '"Planes hit in the engine crashed in the ocean. Put armor where there are NO bullet holes on returning planes!"',
    },
  },

  researchSummary: 'Brown, Goetzmann, Ibbotson & Ross (1992) demonstrated that standard mutual fund performance databases overstated annual fund manager performance by nearly 1.5% to 3% annually due to survivorship bias. Underperforming funds were systematically dissolved or merged into sister funds, leaving only the lucky survivors in historical tracking databases.',
  limitationsAndControversies: 'While survivorship bias explains why many success recipes are illusory, it does not mean all success is pure luck. Systematic skills (such as capital allocation, mathematical risk management, and rigorous quality control) still create measurable differences when evaluated across both surviving and non-surviving cohorts.',
  commonMisconceptions: 'Common myth: "Studying the habits of ultra-successful billionaires is the best way to guarantee success." Reality: For every college-dropout billionaire, thousands of identical college dropouts went bankrupt. Copying only survivors without analyzing the graveyard creates dangerous cargo-cult strategies.',

  howToRecognize: [
    'Reading an autobiography of a billionaire and believing that copying their eccentric sleep schedule will guarantee your entrepreneurial success',
    'Concluding that "music was so much better in the 1970s" because we only replay the top 0.1% masterpiece classics while forgetting the millions of terrible songs',
    'Believing architecture in ancient Rome was superior because only majestic marble structures survived 2,000 years of earthquakes while all poor mud huts collapsed',
    'Investing in an actively managed mutual fund purely because its 10-year chart looks flawless, unaware that the fund family closed its 8 losing funds',
  ],

  scenarios: [
    {
      id: 'scen_surv_01',
      scenarioType: 'indian_context',
      title: 'The College Dropout Myth in Bengaluru',
      vignette: 'Rahul, a 20-year-old engineering student in Bengaluru, decides to drop out in his final year to launch a quick-commerce delivery app. He tells his shocked parents: "Look at Steve Jobs, Bill Gates, and Mark Zuckerberg! None of them finished college, and they created the biggest companies on Earth. College degrees are a waste of time for real visionaries."',
      breakdownAnalysis: 'Rahul is blinded by survivorship bias. For every Gates or Zuckerberg who dropped out of elite institutions with immense family safety nets and generational genius, there are hundreds of thousands of college dropouts who ended up underemployed and saddled with debt.',
      recommendedAction: 'Inspect the denominator: "For every 1 billionaire dropout, there are 50,000 dropouts who struggle in the job market without credentials. Gates and Zuckerberg were the exception, not the rule."',
    },
  ],

  examples: [
    {
      id: 'ex_surv_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The "They Don\'t Build Things Like They Used To" Fallacy',
      description: 'People marvel at 300-year-old European stone cathedrals and conclude that old construction was universally superior to modern building, forgetting that 99.9% of shoddily constructed 18th-century houses collapsed and were demolished centuries ago.',
      takeaway: 'Time is the ultimate survivorship filter: only the strongest outliers endure.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_surv_01',
      scenarioContext: 'An investment consultant publishes a book analyzing the 50 best-performing companies on the stock market over the last 30 years. The author claims that all 50 companies had decentralized management structures, proving decentralization is the master key to corporate longevity.',
      question: 'What fundamental research flaw renders this book’s conclusion untrustworthy?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'The author failed to study the companies with decentralized management that went completely bankrupt over the same 30-year period',
          explanation: 'Accurate: without auditing the non-survivors, it is impossible to determine whether decentralization is a driver of success or an irrelevant trait.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Thirty years is too short a time horizon to evaluate any corporate business model',
          explanation: 'Thirty years is a robust sample timeframe; the fatal error is the selection bias of only examining survivors.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Decentralized management was only invented in the year 2010 by Silicon Valley startups',
          explanation: 'Decentralized management structures have been documented in organizational theory since the early 20th century.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Any study that samples only the victors is an exercise in fiction, not science.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Demand data on the invisible graveyard of failures before replicating the habits or strategies of visible winners.',
  psychologicalDefenses: [
    {
      title: 'Always Audit the Graveyard',
      instruction: 'Before adopting a strategy because a successful entity used it, ask: "Did the entities that went bankrupt do this exact same thing?" If yes, discard it as non-causal.',
    },
    {
      title: 'Inspect Base-Rate Survival Probabilities',
      instruction: 'Look up industry-wide failure rates (e.g., 90% of restaurants close in 5 years) before calculating personal risk or taking on unhedged leverage.',
    },
    {
      title: 'Look for Inverted Evidence (Wald’s Armor Test)',
      instruction: 'When analyzing feedback or survey data, ask: "Who is unable or unwilling to answer this survey?" Non-respondents often hold the critical missing data.',
    },
  ],

  reflectionPrompt: 'Are you copying the lifestyle or advice of an exceptional outlier while ignoring the hundreds who did the exact same thing and failed?',

  references: [
    {
      id: 'ref_wald_1943',
      authors: 'Wald, A.',
      year: 1943,
      title: 'A Method of Estimating Plane Vulnerability Based on Damage of Returning Aircraft',
      publicationName: 'Statistical Research Group, Columbia University (Reprinted 1980, Center for Naval Analyses)',
      volumeIssue: 'CRC 432',
      doi: '10.21236/ADA091073',
      evidenceStrength: 'historical_classic',
    },
    {
      id: 'ref_brown_1992',
      authors: 'Brown, S. J., Goetzmann, W., Ibbotson, R. G., & Ross, S. A.',
      year: 1992,
      title: 'Survivorship bias in performance studies',
      publicationName: 'The Review of Financial Studies',
      volumeIssue: '5(4), 553-580',
      doi: '10.1093/rfs/5.4.553',
      evidenceStrength: 'peer_reviewed_journal',
    },
  ],

  relatedTopics: [
    {
      topicId: 'confirmation_bias',
      slug: 'confirmation-bias',
      title: 'Confirmation Bias',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'availability_heuristic',
      slug: 'availability-heuristic',
      title: 'Availability Heuristic',
      relationshipType: 'amplified_by',
    },
  ],
};

export const TOPIC_SURVIVORSHIP_BIAS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SURVIVORSHIP_BIAS_EN,
  hinglish: {
    ...TOPIC_SURVIVORSHIP_BIAS_EN,
    title: 'Survivorship Bias: Jeetne Walo Ki Kahani, Haarne Walo Ka Qabristan',
    subtitle: 'Sirf un logon ko dekhkar conclusion nikalna jo bach gaye, aur un hazaron ko bhool jana jo barbaad ho gaye.',
    shortDescription: 'Ek aisi logical galti jisme hum sirf kamyab logo ki aadat ko copy karte hain, bina yeh jane ki wahi aadat rakhne wale kitne log fail huye.',
    oneLineExplanation: 'Bill Gates aur Zuckerberg ka dropout hona dekhkar college chhod dena.',
    summary30s: 'Survivorship Bias ka matlab hai sirf un logon ya cheezon ko dekhna jo mushkil daur se bachkar nikal gayi. World War II me jab fauj ne returning fighter planes par bullet holes dekhe, toh unhone wings ko armor lagane ki sochi. Lekin mathematician Abraham Wald ne bataya ki jinke engine par goli lagi thi wo laut kar hi nahi aaye! Unka engine safe karo.',
  },
  hi: {
    ...TOPIC_SURVIVORSHIP_BIAS_EN,
    title: 'Survivorship Bias (उत्तरजीविता पूर्वाग्रह)',
    subtitle: 'केवल सफल होने वालों पर ध्यान केंद्रित करना और असफल होने वालों के अदृश्य कब्रिस्तान की अनदेखी करना।',
    shortDescription: 'किसी प्रक्रिया में केवल बचे हुए लोगों या वस्तुओं का विश्लेषण करके निष्कर्ष निकालना और असफलताओं को अनदेखा करने की तार्किक त्रुटि।',
    oneLineExplanation: 'केवल सफल कॉलेज ड्रॉपआउट्स को देखकर यह निष्कर्ष निकालना कि कॉलेज छोड़ना सफलता की कुंजी है।',
    summary30s: 'उत्तरजीविता पूर्वाग्रह (Survivorship Bias) तब होता है जब हम केवल सफलता की कहानियों का अध्ययन करते हैं और उस प्रक्रिया में विफल होने वाले लाखों लोगों को भूल जाते हैं। द्वितीय विश्व युद्ध में अब्राहम वाल्ड ने सिद्ध किया कि सुरक्षित लौटने वाले विमानों के आधार पर निर्णय लेना घातक हो सकता है क्योंकि नष्ट हो चुके विमानों का डेटा उपलब्ध नहीं होता।',
  },
  gu: TOPIC_SURVIVORSHIP_BIAS_EN,
  mr: TOPIC_SURVIVORSHIP_BIAS_EN,
  te: TOPIC_SURVIVORSHIP_BIAS_EN,
  ta: TOPIC_SURVIVORSHIP_BIAS_EN,
  kn: TOPIC_SURVIVORSHIP_BIAS_EN,
  ml: TOPIC_SURVIVORSHIP_BIAS_EN,
  bn: TOPIC_SURVIVORSHIP_BIAS_EN,
  pa: TOPIC_SURVIVORSHIP_BIAS_EN,
  ur: TOPIC_SURVIVORSHIP_BIAS_EN,
  or: TOPIC_SURVIVORSHIP_BIAS_EN,
  as: TOPIC_SURVIVORSHIP_BIAS_EN,
  };
