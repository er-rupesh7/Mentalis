import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Consumer & Advertising Psychology Track
 * Topic: The Paradox of Choice: Why More Options Produce Less Happiness
 * Category: Consumer & Advertising Psychology (consumer_advertising)
 * 
 * Academic Grounding:
 * - Schwartz (2004): The Paradox of Choice: Why More Is Less
 * - Iyengar & Lepper (2000): When choice is demotivating: Can one desire too much of a good thing?
 * - Chernev, Böckenholt & Goodman (2015): Choice overload: A conceptual review and meta-analysis
 */

export const TOPIC_PARADOX_OF_CHOICE_EN: MindTopicDetail = {
  id: 'paradox_of_choice',
  categoryId: 'consumer_advertising',
  slug: 'paradox-of-choice-overload',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 4,
  viewCount: 8410,
  shareCount: 720,
  bookmarkCount: 1670,
  title: 'The Paradox of Choice: Why More Options Produce Less Happiness',
  subtitle: 'While some choice is liberating, an avalanche of choices leads to decision paralysis, cognitive exhaustion, and chronic regret.',
  shortDescription: 'The counterintuitive psychological reality where having too many options causes anxiety, lower purchase conversion, and reduced satisfaction with the chosen outcome.',
  oneLineExplanation: 'Staring at 140 varieties of salad dressing for twenty minutes and leaving the grocery store empty-handed.',

  summary30s: 'Classical economics claims that more choice always maximizes consumer freedom and welfare. Cognitive psychology proves the opposite: past a modest threshold, an abundance of options triggers "Choice Overload." Confronted with 50 pairs of jeans or 200 Netflix movies, people experience cognitive paralysis; when they finally choose, they feel less satisfied because they obsess over the attractive features of all the alternatives they surrendered.',

  coreConcept: 'Synthesized by psychologist Barry Schwartz in 2004 following Sheena Iyengar and Mark Lepper’s (2000) landmark Columbia "Jam Study," the paradox of choice operates through three psychological mechanisms: (1) Analysis Paralysis: The cognitive burden of comparing dozens of multidimensional options freezes action; (2) Escalation of Expectations: With so many options available, you expect absolute perfection; (3) Opportunity Cost Regret: Every choice requires rejecting 49 other options, diluting satisfaction with the winner.',
  summary60s: 'In Iyengar & Lepper\'s famous supermarket experiment, a tasting booth displayed either 24 gourmet exotic jams or only 6 jams. The 24-jam booth attracted more curious onlookers (60% vs. 40%). But when it came to actually buying a jar of jam, customers who saw 24 jams were 10 times less likely to purchase: only 3% bought, compared to an astounding 30% of customers at the 6-jam booth. Too much choice paralyzes the wallet and tires the mind.',

  quickTakeaways: [
    'The 10x Purchase Reversal: Reducing options from 24 to 6 multiplied actual retail sales by 1000%',
    'Maximizers vs. Satisficers: "Maximizers" exhaust themselves seeking the absolute best; "Satisficers" choose the first option that meets their "good enough" criteria and are vastly happier',
    'Post-Decision Regret: More alternatives mean more discarded features to ruminate over',
    'The "Rule of Three" Antidote: Deliberately restrict your final comparison set to a maximum of 3 options',
  ],

  whyItHappens: 'Working memory limitations. The human prefrontal cortex can hold roughly 4 chunks of information simultaneously in working memory (Cowan, 2001). Comparing 20 options across 5 attributes requires evaluating 100 data points, triggering acute cognitive overload.',
  evolutionaryMechanism: 'Ancestral foraging involved sparse choices: edible berries vs. toxic ones, freshwater vs. stagnant pool. Our evolutionary cognitive apparatus was never designed to navigate a supermarket aisle containing 300 breakfast cereals.',

  howItWorks: 'The choice paralysis loop: (1) Proliferation: Encountering dozens of options; (2) Evaluation Exhaustion: Prefrontal cortex strains to compare marginal trade-offs; (3) Deferral / Paralysis: Abandoning the decision or picking at random; (4) Buyer\'s Remorse: Questioning whether option #14 would have been superior.',
  whereYouEncounterIt: 'Streaming platforms (scrolling Netflix for 45 minutes without watching anything), online dating apps (swiping endlessly without committing to a date), investment portfolios, and retail menus.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'The Jam Experiment: Iyengar & Lepper (2000)',
    description: 'How option abundance attracts curiosity but paralyzes commercial action.',
    analogySideA: {
      label: 'The 24-Jam Table (Option Overload)',
      detail: 'Attracted 60% of foot traffic. -> Only 3% of customers actually purchased a jar.',
    },
    analogySideB: {
      label: 'The 6-Jam Table (Constrained Choice)',
      detail: 'Attracted 40% of foot traffic. -> An astounding 30% of customers bought a jar (10x higher conversion).',
    },
  },

  researchSummary: 'Chernev, Böckenholt & Goodman (2015) conducted a meta-analysis of 99 choice overload studies representing over 7,000 subjects. They established four conditions that guarantee choice paralysis: (1) high choice set complexity, (2) difficult decision tasks, (3) lack of clear prior consumer preferences, and (4) uncertainty regarding trade-offs.',
  limitationsAndControversies: 'Choice overload does not occur when consumers have clear, pre-existing brand loyalty or expert domain knowledge (e.g., a wine connoisseur enjoys browsing 200 vintage bottles because their mental schemas categorize the choices effortlessly).',
  commonMisconceptions: 'Common myth: "More choices always equal greater freedom and consumer satisfaction." Reality: Barry Schwartz proved that excessive choices generate decision paralysis, anxiety, and heightened post-purchase regret because of accumulated opportunity costs.',

  howToRecognize: [
    'Spending more time choosing what movie or series to watch on a Friday evening than actually watching the show',
    'Opening 42 browser tabs comparing different running shoes until you get a headache and close your laptop without buying',
    'Feeling chronic dissatisfaction with your newly purchased laptop because you keep wondering if the other model had a better keyboard',
    'Endless swiping on dating apps without ever meeting someone in person because "maybe someone 5% better is just one swipe away"',
  ],

  scenarios: [
    {
      id: 'scen_choice_01',
      scenarioType: 'indian_context',
      title: 'The Post-Graduation Job Paralysis in Mumbai',
      vignette: 'Sneha, a top-tier MBA graduate in Mumbai, receives four lucrative job offers in marketing, consulting, fintech, and venture capital. Instead of feeling overjoyed, Sneha experiences crippling insomnia, nausea, and anxiety for two weeks. She tells her mentor: "If I choose consulting, I give up the startup equity in fintech. If I choose venture capital, I miss the global travel of consulting. Whatever I choose, I am throwing away an incredible life." She misses the acceptance deadline for her top choice.',
      breakdownAnalysis: 'Sneha is paralyzed by the paradox of choice and opportunity cost regret. She is acting as a classic "Maximizer," believing there is a single, objectively perfect path. Every option’s unique advantages become painful losses when contemplating the alternatives.',
      recommendedAction: 'Adopt Herbert Simon\'s "Satisficing" strategy: "Establish non-negotiable threshold criteria (e.g., minimum salary, mentorship quality, work-life balance). Accept the first offer that clears those thresholds and permanently cease evaluating the other three."',
    },
  ],

  examples: [
    {
      id: 'ex_choice_01',
      domain: 'consumer_advertising',
      displayOrder: 1,
      title: 'The Cheesecake Factory 20-Page Menu',
      description: 'A 20-page restaurant menu with 250 items forces diners to spend 25 minutes debating between Thai chicken pasta and Mexican tacos, resulting in higher stress and lower meal satisfaction than a French bistro with 4 curated daily specials.',
      takeaway: 'Curated simplicity produces superior psychological satisfaction.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_choice_01',
      scenarioContext: 'An e-commerce website redesigns its checkout flow. Previously, it offered customers 18 different shipping and packaging combinations (e.g., eco-box, gift-wrapped, standard, expedited, weekend delivery, carbon-neutral offset). They reduce the options to 3 clear choices: Standard Free, Express 2-Day, and Eco-Wrap.',
      question: 'Based on the Paradox of Choice research, what is the most probable impact on customer behavior?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Cart abandonment will decrease and checkout conversion will increase because cognitive decision friction and trade-off anxiety are drastically reduced',
          explanation: 'Accurate: simplifying choice sets eliminates decision fatigue and boosts conversion rates.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Sales will collapse by 90% because consumers demand total granular control over every aspect of packaging',
          explanation: 'Granular choice overload is precisely what causes cart abandonment.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Delivery trucks will be unable to calculate GPS routing schedules',
          explanation: 'Shipping logistics operations are independent of the consumer choice architecture.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Less is more: eliminating superfluous options converts confusion into confident action.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Adopt a satisficing strategy: determine your "good enough" criteria in advance and commit to the first option that meets them.',
  psychologicalDefenses: [
    {
      title: 'Embrace Satisficing Over Maximizing',
      instruction: 'Define your "good enough" criteria in advance. Once an option meets those standards, choose it immediately and close the search. Perfection is the enemy of happiness.',
    },
    {
      title: 'The Rule of Three',
      instruction: 'When making a purchase or life decision, narrow the field to your top 3 finalists. Immediately close all other tabs or brochures and compare only those three.',
    },
    {
      title: 'Make Irreversible Decisions',
      instruction: 'Psychological research (Gilbert & Ebert, 2002) proves that when decisions are final and non-refundable, our brain’s psychological immune system rationalizes the choice and makes us love it. Reversible choices prolong anxiety.',
    },
  ],

  reflectionPrompt: 'Have you ever spent 45 minutes browsing streaming movies or food delivery apps until you lost your appetite and felt exhausted?',

  references: [
    {
      id: 'ref_schwartz_2004',
      authors: 'Schwartz, B.',
      year: 2004,
      title: 'The Paradox of Choice: Why More Is Less',
      publicationName: 'Ecco/HarperCollins',
      volumeIssue: 'Chapters 1-5',
      doi: '10.1037/0000000-003',
      evidenceStrength: 'foundational_monograph',
    },
    {
      id: 'ref_iyengar_2000',
      authors: 'Iyengar, S. S., & Lepper, M. R.',
      year: 2000,
      title: 'When choice is demotivating: Can one desire too much of a good thing?',
      publicationName: 'Journal of Personality and Social Psychology',
      volumeIssue: '79(6), 995-1006',
      doi: '10.1037/0022-3514.79.6.995',
      evidenceStrength: 'landmark_paper',
    },
  ],

  relatedTopics: [
    {
      topicId: 'status_quo_bias',
      slug: 'status-quo-bias',
      title: 'Status Quo Bias',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'decoy_effect',
      slug: 'decoy-effect',
      title: 'The Decoy Effect',
      relationshipType: 'amplified_by',
    },
  ],
};

export const TOPIC_PARADOX_OF_CHOICE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_PARADOX_OF_CHOICE_EN,
  hinglish: {
    ...TOPIC_PARADOX_OF_CHOICE_EN,
    title: 'The Paradox of Choice: Zyada Options, Kam Khushi',
    subtitle: 'Kyu 100 choices hone par insaan confuse hokar faisla lena chhod deta hai aur baad me pachtata hai.',
    shortDescription: 'Barry Schwartz ki famous research: jab options bohot zyada hote hain, toh dimaag paralyze ho jata hai aur khareedne ke baad bhi satisfaction kam milta hai.',
    oneLineExplanation: 'Netflix par 45 minute tak movie dhundte rehna aur bina kuch dekhe so jana.',
    summary30s: 'Sheena Iyengar ne 2000 ke famous Jam Experiment me prove kiya: jab dukan me 24 tarah ke jam rakhe gaye, toh sirf 3% logon ne khareeda. Lekin jab sirf 6 jam rakhe gaye, toh 30% logon ne khareeda (10 guna zyada sales)! Zyada options dimaag ko thaka dete hain aur insaan ko lagta hai ki usne jo chuna wo shayad doosre se kharab hai.',
  },
  hi: {
    ...TOPIC_PARADOX_OF_CHOICE_EN,
    title: 'The Paradox of Choice (पसंद का विरोधाभास)',
    subtitle: 'अत्यधिक विकल्पों की उपलब्धता से होने वाली निर्णय शून्यता, मानसिक थकान और असंतोष।',
    shortDescription: 'यह प्रति-सहज मनोवैज्ञानिक सत्य कि अधिक विकल्प स्वतंत्रता प्रदान करने के बजाय चिंता, अनिर्णय और पश्चाताप को बढ़ाते हैं।',
    oneLineExplanation: 'सैकड़ों विकल्पों के फेर में घंटों उलझे रहना और अंततः खाली हाथ लौट जाना।',
    summary30s: 'पसंद का विरोधाभास (Paradox of Choice) यह दर्शाता है कि असीमित विकल्प मानव मस्तिष्क की कार्यशील स्मृति (Working memory) को थका देते हैं। शीना अयंगर के प्रसिद्ध जैम अध्ययन में साबित हुआ कि 24 विकल्पों के मुकाबले केवल 6 विकल्प रखने पर बिक्री में 10 गुना वृद्धि हुई क्योंकि उपभोक्ताओं को निर्णय लेने में आसानी हुई।',
  },
  gu: TOPIC_PARADOX_OF_CHOICE_EN,
  mr: TOPIC_PARADOX_OF_CHOICE_EN,
  te: TOPIC_PARADOX_OF_CHOICE_EN,
  ta: TOPIC_PARADOX_OF_CHOICE_EN,
  kn: TOPIC_PARADOX_OF_CHOICE_EN,
  ml: TOPIC_PARADOX_OF_CHOICE_EN,
  bn: TOPIC_PARADOX_OF_CHOICE_EN,
  pa: TOPIC_PARADOX_OF_CHOICE_EN,
  ur: TOPIC_PARADOX_OF_CHOICE_EN,
  or: TOPIC_PARADOX_OF_CHOICE_EN,
  as: TOPIC_PARADOX_OF_CHOICE_EN,
  };
