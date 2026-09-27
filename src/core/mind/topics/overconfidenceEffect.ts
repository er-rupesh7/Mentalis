import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: The Overconfidence Effect: The Calibration Gap Between Knowledge and Certainty
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Lichtenstein, Fischhoff & Phillips (1982): Calibration of probabilities: The state of the art to 1980
 * - Moore & Healy (2008): The trouble with overconfidence. Psychological Review
 * - Kahneman (2011): Thinking, Fast and Slow (Chapter on Engine of Capitalism: Overconfidence)
 */

export const TOPIC_OVERCONFIDENCE_EFFECT_EN: MindTopicDetail = {
  id: 'overconfidence_effect',
  categoryId: 'cognitive_biases',
  slug: 'overconfidence-effect',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 18,
  viewCount: 8420,
  shareCount: 680,
  bookmarkCount: 1450,
  title: 'The Overconfidence Effect: The Calibration Gap Between Knowledge and Certainty',
  subtitle: 'The systematic discrepancy between how accurate people believe their judgments are versus how accurate they actually are.',
  shortDescription: 'A well-documented cognitive bias in which a person subjective confidence in their judgments is reliably greater than the objective accuracy of those judgments.',
  oneLineExplanation: 'Being 99% certain about something you only have a 60% chance of getting right.',

  summary30s: 'The overconfidence effect is the fatal flaw in human risk assessment. Whether it is entrepreneurs forecasting startup revenue, drivers rating their road safety, or physicians diagnosing rare illnesses, people consistently assign subjective confidence intervals that are far too narrow. We confuse fluency of belief with depth of knowledge.',

  coreConcept: 'Synthesized by Sarah Lichtenstein and Baruch Fischhoff in 1982 and expanded by Don Moore and Paul Healy in 2008, overconfidence manifests in three distinct psychological forms: (1) Overestimation (believing your raw score or ability is higher than it is); (2) Overplacement (the "better-than-average" belief that you rank above your peers); and (3) Overprecision (an excessive certainty that your point estimates and confidence intervals are accurate).',
  summary60s: 'In a classic experiment by Lichtenstein and Fischhoff, subjects answered general knowledge questions and rated their confidence between 50% and 100%. When subjects stated they were "100% certain" of an answer, they were wrong roughly 20% of the time. In the financial sector, trading desks with the highest self-reported confidence underperform market indices because they trade excessively and fail to buy downside insurance. Overconfidence is the primary psychological driver of bankruptcy, unnecessary litigation, and catastrophic wars.',

  quickTakeaways: [
    'The 3 Dimensions: Overestimation (my score), Overplacement (I am better than others), and Overprecision (my range is too narrow)',
    'Fluency Illusion: Easy recall is unconsciously mistranslated into objective predictive accuracy',
    'Trading and Risk: Excessive confidence drives hyperactive trading and inadequate emergency capital buffers',
    'The 80% Confidence Interval Drill: Force yourself to give high-low ranges that capture reality 9 times out of 10',
  ],

  whyItHappens: 'Cognitive economies of certainty. The human nervous system finds ambiguity and probabilistic paralysis deeply uncomfortable. Evolution favored decisive leaders who acted quickly on partial information over ruminators who remained frozen in doubt.',
  evolutionaryMechanism: 'In hunter-gatherer environments, high confidence served as a powerful social signal. Individuals projecting supreme assurance attracted mates and allies, intimidated rivals, and galvanized group action during perilous hunts, even when their underlying factual estimates were inaccurate.',

  howItWorks: 'The brain relies on System 1 heuristic coherence. When constructing a narrative, the brain searches memory only for facts confirming the immediate hypothesis. Because counter-evidence is neglected, the internal narrative feels airtight. Confidence is determined by how coherent the story feels, not by how much external evidence supports it.',
  whereYouEncounterIt: 'Stock market speculative bubbles, business plan revenue projections, project completion deadlines, DIY home repairs, driving ability self-ratings, and political pundit forecasts.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Subjective Certainty vs. Objective Reality',
    description: 'How the brain inflates subjective confidence while true factual accuracy remains modest.',
    analogySideA: {
      label: 'Subjective Certainty (Ego Estimate)',
      detail: '"I am 95% confident our tech startup will reach $10 million ARR within 18 months."',
    },
    analogySideB: {
      label: 'Objective Reality (Base Rate)',
      detail: 'Fewer than 4% of seed-funded SaaS startups achieve $10M ARR in under 3 years.',
    },
  },

  researchSummary: 'Moore & Healy (2008) in Psychological Review unified decades of contradictory findings by separating overestimation, overplacement, and overprecision. They demonstrated that while people show overplacement on easy tasks (e.g., 90% of people rate themselves as above-average drivers), they often exhibit underplacement on notoriously difficult tasks (e.g., estimating one chance of juggling torches), yet overprecision remains pervasive across both easy and hard domains.',
  limitationsAndControversies: 'Depressive Realism: Alloy & Abramson (1979) found that depressed individuals often exhibit more calibrated probability estimates. A mild degree of overconfidence may be psychologically functional for resilience and venturing into uncertainty.',
  commonMisconceptions: 'Common myth: "Domain experts with 20 years of experience do not suffer from overconfidence." Reality: Philip Tetlock (2005) demonstrated in a 20-year study that expert political and economic forecasters were often more overconfident than generalists, because their specialized knowledge gave them more tools to rationalize flawed predictions.',

  howToRecognize: [
    'Saying "there is zero chance this deal falls through" without having signed legally binding escrow documents',
    'Providing point estimates ("this will cost exactly ₹2.5 Lakhs") instead of wide ranges ("₹2 Lakhs to ₹5 Lakhs")',
    'Assuming you can pick winning individual equities while acknowledging that 85% of professional fund managers fail to beat the index',
    'Starting a road trip without leaving buffer time because you believe you can drive faster than GPS estimates',
  ],

  scenarios: [
    {
      id: 'scen_oce_01',
      scenarioType: 'indian_context',
      title: 'The Cloud Kitchen Franchise Expansion in Bengaluru',
      vignette: 'Arjun ran a profitable biryani cloud kitchen in Koramangala. Emboldened by 12 months of high Zomato ratings, he decided to open 6 new outlets simultaneously across Bengaluru, Pune, and Hyderabad. When his chartered accountant advised him to open one outlet first to test logistics, Arjun dismissed him: "I have mastered the unit economics. We have a 99% guarantee of breaking even in 90 days." Within six months, supply chain mismatches and regional taste differences burned through his seed capital, forcing 4 kitchens to close.',
      breakdownAnalysis: 'Arjun suffered from extreme overprecision and overestimation. He treated success in a single hyper-local market as proof that he could replicate operations across diverse cities without unforeseen operational friction.',
      recommendedAction: 'Apply Kahneman Outside View: Look at the 5-year failure rate of multi-city restaurant expansions before assuming your brand is an exception.',
    },
  ],

  examples: [
    {
      id: 'ex_oce_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'Options Trading Account Calibration',
      description: 'A retail trader on Zerodha risks 40% of his portfolio on weekly out-of-the-money call options, expressing 95% certainty that an earnings beat will trigger a rally. The stock misses estimates and drops 12%, wiping out the position.',
      takeaway: 'Overconfidence in volatile markets leads to ruinous position sizing without stops or hedges.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_oce_01',
      scenarioContext: 'An engineering team lead is asked by the CTO to estimate the delivery date for a complex database migration. The team lead says: "We will finish on November 15th, 100% guaranteed."',
      question: 'Which adjustment represents superior cognitive calibration against overconfidence?',
      prompt: 'Which adjustment represents superior cognitive calibration against overconfidence?',
      scenarioText: 'An engineering team lead is asked by the CTO to estimate the delivery date for a complex database migration. The team lead says: "We will finish on November 15th, 100% guaranteed."',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Promising November 10th to motivate the team with artificial urgency',
          explanation: 'Compressing deadlines compounds stress and increases the probability of catastrophic software bugs.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Providing an 80% confidence interval: "If we encounter zero unexpected dependency breaks, November 15th; if legacy schema conflicts emerge, between December 1st and December 15th"',
          explanation: 'Accurate: Replacing a single point estimate with a calibrated confidence interval reflects real-world uncertainty.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Refusing to give any timeline whatsoever because software is inherently unpredictable',
          explanation: 'Abdication of forecasting is unhelpful; calibration requires probabilistic ranges, not avoidance.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Professional wisdom lies not in projecting fake certainty, but in calibrating honest confidence intervals.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Shift from single-point forecasts to wide confidence intervals, and seek disconfirming feedback.',
  psychologicalDefenses: [
    {
      title: 'The 80% Confidence Interval Drill',
      instruction: 'When predicting any metric (revenue, timeline, budget), give a low number and a high number where you are 80% confident the real number will land. If you test yourself on 10 tasks, 8 should fall within your boundaries.',
    },
    {
      title: 'Conduct a Gary Klein Pre-Mortem',
      instruction: 'Before launching any initiative, gather your team and say: "Imagine we are 12 months in the future, and this project was a total disaster. What caused it?" This breaks the illusion of certainty.',
    },
    {
      title: 'Keep a Probability Calibration Log',
      instruction: 'Whenever you say "I am 90% sure," log the claim in a notebook. Review your record quarterly to calculate your true hit rate.',
    },
  ],

  reflectionPrompt: 'When was the last time you were "100% certain" about an outcome that failed to materialize? What clue did your confidence cause you to ignore?',
  references: [
    {
      id: 'ref_oce_01',
      title: 'Calibration of probabilities: The state of the art to 1980',
      citation: 'Lichtenstein, S., Fischhoff, B., & Phillips, L. D. (1982). Judgment Under Uncertainty: Heuristics and Biases, 306–334.',
      authors: 'Sarah Lichtenstein, Baruch Fischhoff, Lawrence D. Phillips',
      publicationYear: 1982,
      journalOrPublisher: 'Cambridge University Press',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1017/CBO9780511809477.023',
      relevance: 'Seminal work establishing that people are routinely overconfident in general knowledge and probabilistic estimates.',
      displayOrder: 1,
    },
    {
      id: 'ref_oce_02',
      title: 'The trouble with overconfidence',
      citation: 'Moore, D. A., & Healy, P. J. (2008). Psychological Review, 115(2), 502–517.',
      authors: 'Don A. Moore, Paul J. Healy',
      publicationYear: 2008,
      journalOrPublisher: 'Psychological Review',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_meta_analysis',
      doiOrUrl: 'https://doi.org/10.1037/0033-295X.115.2.502',
      relevance: 'Reconciled decades of overconfidence research by delineating overestimation, overplacement, and overprecision.',
      displayOrder: 2,
    },
  ],
  tags: ['Cognitive Biases', 'Probability', 'Risk Management', 'Calibration'],
  relatedTopics: [
    { topicId: 'dunning_kruger_effect', slug: 'dunning-kruger-effect', title: 'Dunning-Kruger Effect', relationshipType: 'amplified_by' },
    { topicId: 'planning_fallacy', slug: 'planning-fallacy', title: 'Planning Fallacy', relationshipType: 'amplified_by' },
  ],
  seoTitle: 'The Overconfidence Effect Explained: Calibration & Certainty | Mentalab Mind',
  seoDescription: 'Why we are often 99% sure about things we get wrong. Understand overprecision, overplacement, and how to calibrate decision confidence.',
  canonicalUrl: '/mind/cognitive-biases/overconfidence-effect',
  ogImageUrl: '/images/mind/overconfidence-effect.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: 'The overconfidence effect is the systemic calibration error where subjective probability systematically exceeds historical frequency.',
};

export const TOPIC_OVERCONFIDENCE_EFFECT_HINGLISH: MindTopicDetail = {
  ...TOPIC_OVERCONFIDENCE_EFFECT_EN,
  title: 'Overconfidence Effect: Apne Gyaan Aur Certainty Ka Galat Andaaza',
  subtitle: 'Jab hume lagta hai ki hum 99% sahi hain, lekin reality me sirf 60% chance hota hai.',
  shortDescription: 'Ek aisi cognitive bias jisme insaan ka subjective confidence uski actual knowledge aur accuracy se kaafi zyada hota hai.',
  oneLineExplanation: 'Bina fact-check kiye bolna: "Yeh toh 100% guarantee ke sath hoga hi hoga."',

  summary30s: 'Overconfidence Effect insaan ke decision-making ki sabse badi kamzori hai. Chahe startup kholna ho ya stock market me trade karna, log apne judgments par zaroorat se zyada bharosa karte hain. Dimaag kisi kahani ki clarity ko sach maan leta hai, bina yeh dekhe ki ground reality kitni uncertain hai.',
  coreConcept: 'Sarah Lichtenstein aur Baruch Fischhoff (1982) ke experiments me dekha gaya ki jab log bolte hain "main 100% pakka hu", tab bhi wo 20% baar galat nikalte hain. Don Moore aur Paul Healy (2008) ne bataya ki overconfidence 3 tarike se hota hai: Overestimation (apne number badha kar batana), Overplacement (doosron se behtar samajhna), aur Overprecision (narrow prediction range dena).',
  summary60s: 'Sochiye ek stock market trader jo bolta hai ki "yeh company agle hafte 20% upar jayegi, 100% guarantee hai". Wo apna sara paisa ek hi share me laga deta hai. Reality me market me base rate risk hota hai. Overconfidence ki wajah se log safety margin aur insurance nahi rakhte, jisse unhe massive loss hota hai.',

  quickTakeaways: [
    '3 Dimensions: Overestimation (meri ability), Overplacement (main doosron se aage hu), aur Overprecision (mera range bilkul pakka hai)',
    'Fluency Illusion: Agar koi cheez dimaag me aasani se aa jaye, toh lagta hai wo sach hi hogi',
    'High Risk: Trading aur business me overconfidence ki wajah se log bina emergency fund ke bade bets lagate hain',
    '80% Range Tool: Ek exact number dene ke bajaye hamesha ek realistic low-high range set karein',
  ],

  whyItHappens: 'Hamara dimaag doubt aur uncertainty se ghabrata hai. Evolution ke dauran decisive aur confident leaders ko log zyada follow karte the, isliye dimaag quick confidence generate karta hai.',
  evolutionaryMechanism: 'Junglon me jo shikaari shaq me rehta tha wo piche chhoot jata tha. Overconfidence ne humans ko dangerous tasks karne ka hosla diya, chahe accuracy kam ho.',

  howItWorks: 'Dimaag ka System 1 sirf wahi evidence talaashta hai jo humare hypothesis ko support kare. Counter-evidence ko ignore karke dimaag ek perfect kahani bana leta hai aur lagta hai certainty 100% hai.',
  whereYouEncounterIt: 'Exam preparation predictions ("2 din me syllabus khatam"), business revenue targets, driving skills self-rating, aur crypto trading.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Subjective Confidence vs. Objective Reality',
    description: 'Kaise insaan ka dimaag overconfident rehta hai jabki base rate bilkul alag hota hai.',
    analogySideA: {
      label: 'Subjective Confidence (Overconfident Dimaag)',
      detail: '"Mujhe 99% pakka vishwas hai ki hamara naya restaurant pehle 3 mahine me hi break-even kar lega."',
    },
    analogySideB: {
      label: 'Objective Reality (Ground Facts)',
      detail: '80% se zyada naye restaurants pehle 2 saal me loss me rehte hain ya band ho jate hain.',
    },
  },

  researchSummary: 'Lichtenstein & Fischhoff (1982) ke meta-studies ne prove kiya ki general knowledge aur financial forecasting me insaan ki confidence rating uski factual hit rate se hamesha 15-25% zyada hoti hai.',
  limitationsAndControversies: 'Mild optimism aur confidence human resilience ke liye zaroori hai. Agar insaan 100% realistic ho jaye toh naye ventures shuru karna mushkil ho jata hai.',
  commonMisconceptions: 'Mithak: "20 saal ke experience wale experts overconfident nahi hote." Reality: Philip Tetlock ne dikhaya ki domain experts aksar aur zyada overconfident hote hain kyunki wo apni har galat prediction ka bahana bana lete hain.',

  howToRecognize: [
    'Kisi bhi prediction me "zero risk hai" ya "100% pakka hai" bolna',
    'Exact date ya budget batana bina kisi buffer ke',
    'Yeh sochna ki 90% drivers se behtar drive aap karte hain',
    'Trading me bina stop-loss ke full capital deploy karna',
  ],

  scenarios: [
    {
      id: 'scen_oce_hi_01',
      scenarioType: 'indian_context',
      title: 'Bengaluru Me Cloud Kitchen Expansion',
      vignette: 'Koramangala me ek cloud kitchen se achha profit kamane ke baad, Arjun ne bina market testing ke ek sath Pune aur Hyderabad me 6 naye kitchens khol diye. Uske CA ne samjhaya ki pehle ek kitchen test karo, par Arjun bola: "Maine poori unit economics master kar li hai, 99% guarantee hai ki 3 mahine me break-even hoga." 6 mahine baad logistics aur local taste issue ki wajah se uske 4 kitchens band ho gaye.',
      breakdownAnalysis: 'Arjun overprecision aur overestimation ka shikar hua. Usne ek local market ki kamyabi ko har jagah guaranteed maan liya bina base rates dekhe.',
      recommendedAction: 'Kahneman ka Outside View apnayein: Kisi bhi business expansion se pehle industry ka average failure rate dekhein aur safety margin banayein.',
    },
  ],

  examples: [
    {
      id: 'ex_oce_hi_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'Derivatives Trading Calibration',
      description: 'Ek trader 90% certainty ke sath call options khareedta hai bina kisi hedge ke. Results aate hi stock girta hai aur sara paisa doob jata hai.',
      takeaway: 'Certainty ki feeling market ke base risk ko kam nahi karti.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_oce_hi_01',
      scenarioContext: 'Ek engineering lead CTO ko bolta hai: "Yeh complex software migration 15 November ko 100% deliver ho jayega."',
      question: 'Kaunsa approach overconfidence effect se bachne ka sahi calibration dikhata hai?',
      prompt: 'Kaunsa approach overconfidence effect se bachne ka sahi calibration dikhata hai?',
      scenarioText: 'Ek engineering lead CTO ko bolta hai: "Yeh complex software migration 15 November ko 100% deliver ho jayega."',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Deadline ko 10 November bol dena taaki team par zyada pressure bane',
          explanation: 'Artificial pressure se software me critical bugs aane ka risk badhta hai.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: '80% confidence interval dena: "Agar koi unknown bug nahi aaya toh 15 November, aur agar purana code crash hua toh 1 se 15 December ke beech"',
          explanation: 'Sahi: Ek single date ke bajaye range dena realistic uncertainty ko accurately represent karta hai.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Koi bhi timeline dene se mana kar dena',
          explanation: 'Timeline na dena planning ko rokk deta hai; sahi tareeqa probabilistic range dena hai.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Asli samajhdari fake certainty dikhane me nahi, balki honest confidence range dene me hai.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Exact number ke bajaye range banayein aur project se pehle Pre-Mortem conduct karein.',
  psychologicalDefenses: [
    {
      title: '80% Confidence Range Drill',
      instruction: 'Kisi bhi estimate me ek minimum aur maximum number dein jisme 80% surety ho ki result usi ke andar aayega.',
    },
    {
      title: 'Pre-Mortem Technique',
      instruction: 'Kaam shuru karne se pehle sochiye: "Maano 1 saal baad yeh project bilkul fail ho gaya. Kya wajah thi?" Isse overconfidence toot-ta hai.',
    },
  ],

  reflectionPrompt: 'Aapne pichli baar kab kisi cheez par "100% certainty" jatayi thi jo baad me galat nikli? Us waqt aapne kis risk ko ignore kiya tha?',
  seoTitle: 'Overconfidence Effect Kya Hai? Dimaag Ki Over-Certainty | Mentalab Mind',
  seoDescription: 'Janiye kyu insaan apni knowledge par zaroorat se zyada bharosa karta hai. Seekhein probability calibration ke practical tareeqe.',
  canonicalUrl: '/mind/cognitive-biases/overconfidence-effect',
};

export const TOPIC_OVERCONFIDENCE_EFFECT_HI: MindTopicDetail = {
  ...TOPIC_OVERCONFIDENCE_EFFECT_EN,
  title: 'Overconfidence Effect (अति-विश्वास प्रभाव)',
  subtitle: 'व्यक्तिगत विश्वास और वास्तविक ज्ञान के बीच का खतरनाक अंतर।',
  shortDescription: 'एक ऐसा संज्ञानात्मक पूर्वाग्रह जिसमें किसी व्यक्ति का अपने निर्णयों पर विश्वास उनकी वास्तविक सटीकता से काफी अधिक होता है।',
  oneLineExplanation: 'जिस बात के सही होने की संभावना केवल 60% हो, उस पर 99% निश्चितता दिखाना।',
  summary30s: 'अति-विश्वास प्रभाव (Overconfidence Effect) मानव निर्णय लेने की सबसे बड़ी कमियों में से एक है। जब लोग कहते हैं कि वे किसी बात को लेकर "100% आश्वस्त" हैं, तब भी वे काफी बार गलत साबित होते हैं। यह प्रभाव वित्तीय नुकसान, गलत योजना और असफल परियोजनाओं का मुख्य कारण बनता है।',
};

export const TOPIC_OVERCONFIDENCE_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_OVERCONFIDENCE_EFFECT_EN,
  hinglish: TOPIC_OVERCONFIDENCE_EFFECT_HINGLISH,
  hi: TOPIC_OVERCONFIDENCE_EFFECT_HI,
  gu: TOPIC_OVERCONFIDENCE_EFFECT_EN,
  mr: TOPIC_OVERCONFIDENCE_EFFECT_EN,
  te: TOPIC_OVERCONFIDENCE_EFFECT_EN,
  ta: TOPIC_OVERCONFIDENCE_EFFECT_EN,
  kn: TOPIC_OVERCONFIDENCE_EFFECT_EN,
  ml: TOPIC_OVERCONFIDENCE_EFFECT_EN,
  bn: TOPIC_OVERCONFIDENCE_EFFECT_EN,
  pa: TOPIC_OVERCONFIDENCE_EFFECT_EN,
  ur: TOPIC_OVERCONFIDENCE_EFFECT_EN,
  or: TOPIC_OVERCONFIDENCE_EFFECT_EN,
  as: TOPIC_OVERCONFIDENCE_EFFECT_EN,
};
