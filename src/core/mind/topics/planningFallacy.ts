import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Decision Making Track
 * Topic: The Planning Fallacy: Why Projects Are Always Late and Over Budget
 * Category: Decision Making (decision_making)
 * 
 * Academic Grounding:
 * - Kahneman & Tversky (1979): Intuitive prediction: Biases and fallacious beliefs
 * - Buehler, Griffin & Ross (1994): Exploring the "planning fallacy": Why people underestimate their task completion times
 * - Flyvbjerg (2009): Survival of the unfittest: Why the worst infrastructure gets built
 */

export const TOPIC_PLANNING_FALLACY_EN: MindTopicDetail = {
  id: 'planning_fallacy',
  categoryId: 'decision_making',
  slug: 'planning-fallacy',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 4,
  viewCount: 7120,
  shareCount: 520,
  bookmarkCount: 1240,
  title: 'The Planning Fallacy: Why Projects Are Always Late and Over Budget',
  subtitle: 'The systemic cognitive optimism that causes individuals and governments to underestimate task duration, costs, and risks.',
  shortDescription: 'The tendency to underestimate the time, costs, and risks of future actions while overestimating their benefits and ease of completion.',
  oneLineExplanation: '"This home renovation will take 3 weeks and cost $10,000." (Reality: 8 months, $32,000).',

  summary30s: 'The planning fallacy is an incurable psychological optimism bias: when forecasting future endeavors (writing a thesis, remodeling a kitchen, building an airport, launching a software feature), humans envision the best-case scenario with zero delays, equipment failures, or illnesses. Consequently, almost every project in human history exceeds its budget and deadline by 50% to 300%.',

  coreConcept: 'Coined by Daniel Kahneman and Amos Tversky in 1979, the planning fallacy stems from adopting an "Inside View" rather than an "Outside View." When taking the inside view, we focus intimately on our specific project, constructing a sequential story where every step succeeds flawlessly. We completely ignore historical distribution tables (the outside view), which show that similar projects conducted by similar experts almost always face compounding, chaotic delays.',
  summary60s: 'Consider the iconic Sydney Opera House. In 1957, architects and government officials projected it would open in 1963 at a total cost of $7 million. It finally opened ten years late in 1973, with a scaled-back design, at a staggering final cost of $102 million—over 14 times its original budget. From kitchen remodels to national mega-infrastructure, humans treat past delays as unique anomalies ("that was because of that freak rainstorm") while believing their next project will experience zero friction.',

  quickTakeaways: [
    'The Best-Case Trap: Forecasts assume an uninterrupted sequence where nothing ever breaks or stalls',
    'Inside vs. Outside View: Focusing on your specific plans produces delusion; looking at base rates produces accuracy',
    'Hofstadter’s Law: "It always takes longer than you expect, even when you take into account Hofstadter’s Law"',
    'Reference Class Forecasting Antidote: Never estimate from your own plan; find 10 similar past projects and take their average duration',
  ],

  whyItHappens: 'Evolutionary drive for ambition and initiative. If ancestral humans realistically estimated the agonizing difficulty, injury risk, and failure rate of major ventures, humanity would never have migrated across continents, built pyramids, or founded enterprises. Delusional optimism drives action.',
  evolutionaryMechanism: 'A cautious hunter who dwelled on every potential delay or snakebite stayed in the cave and starved. Overconfident individuals initiated bold hunts and expeditions, occasionally achieving high-payoff breakthroughs that won mates and prestige.',

  howItWorks: 'The forecasting distortion loop: (1) Goal Formulated: New project announced; (2) Scenario Construction: The mind visualizes the happy path of sequential milestones; (3) Anchoring: The deadline becomes emotionally anchored; (4) Stochastic Reality: Unforeseen friction, sickness, supply delays, and scope creep multiply duration by 2x.',
  whereYouEncounterIt: 'Software sprint deadlines, kitchen renovations, student thesis writing, tax filing, and mega-infrastructure projects (highways, nuclear plants, metro rails).',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'The Inside View vs. The Outside View',
    description: 'How perspective dictates accuracy in forecasting.',
    analogySideA: {
      label: 'The Inside View (Subjective Optimism)',
      detail: '"We have a clear roadmap and senior engineers. This mobile app redesign will ship cleanly in 6 weeks."',
    },
    analogySideB: {
      label: 'The Outside View (Reference Class Data)',
      detail: '"Across the industry, 82% of mobile app redesigns take at least 16 weeks and encounter major API rewrites."',
    },
  },

  researchSummary: 'Buehler, Griffin & Ross (1994) asked college seniors to estimate when they would submit their honors theses under "best-case" and "worst-case" scenarios. On average, students finished in 55 days. Their best-case estimate was 27 days, and their "worst-case, absolute disaster scenario" estimate was 48 days. In reality, less than half of students finished even within their supposed worst-case disaster deadline.',
  limitationsAndControversies: 'Bent Flyvbjerg (2009) argues that in large public works, planning fallacy is often coupled with "strategic misrepresentation"—deliberate lying by politicians and contractors who intentionally lowball costs to get projects approved before the true price tag becomes apparent.',
  commonMisconceptions: 'Common myth: "We will finish faster this time because we learned our lesson from the last delay." Reality: Kahneman proved that internal optimistic forecasting reliably repeats itself unless planners explicitly adopt an outside view based on historical reference classes.',

  howToRecognize: [
    'Promising a client that a complex task will take 48 hours without checking your calendar for meetings, errands, or fatigue',
    'Budgeting a home repair or vacation down to the exact dollar without a 30% unallocated contingency fund',
    'Believing your next study or fitness schedule will be followed 100% with zero missed days',
    'Hearing a team leader say: "This time is different because we learned all our lessons from last year\'s disaster"',
  ],

  scenarios: [
    {
      id: 'scen_plan_01',
      scenarioType: 'indian_context',
      title: 'The "Simple" ERP Migration in Pune',
      vignette: 'The Chief Financial Officer of an auto parts manufacturer in Pune tells the board: "We are migrating to a modern cloud ERP system. The vendor promised 90 days for deployment and a fee of ₹40 lakh. We will be live by October 1st." The senior IT database administrator raises his hand and notes: "In our industry, 75% of ERP migrations take over 18 months due to legacy database corruption and vendor customization delays." The CFO waves him away: "That happens to poorly managed firms. We have a dedicated task force; 90 days is final."',
      breakdownAnalysis: 'The CFO is blinded by the inside view planning fallacy. He assumes his internal project management competence can eliminate the objective, empirical base rate of data schema chaos and training resistance.',
      recommendedAction: 'Adopt Bent Flyvbjerg\'s Reference Class Forecasting: "Base the project timeline on the actual median completion time of the last 20 peer manufacturing ERP migrations in India, which is 14 months and ₹1.2 crore."',
    },
  ],

  examples: [
    {
      id: 'ex_plan_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'George R. R. Martin and "The Winds of Winter"',
      description: 'The famous fantasy author originally estimated in 2011 that the sixth novel would take roughly two to three years to complete. Over fourteen years later, the novel remains unfinished, demonstrating how creative complexity expands exponentially.',
      takeaway: 'Creative and intellectual projects resist linear time estimation.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_plan_01',
      scenarioContext: 'A startup founder is pitching venture capitalists. Her financial deck projects that her team of 4 engineers will build a fully compliant, multi-currency international payments gateway in 3 months on a budget of $50,000.',
      question: 'Why will experienced venture capitalists immediately discount this projection as a victim of the planning fallacy?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Because the founder is using an inside view scenario that assumes zero regulatory delays, zero API rejections, and zero debugging cycles, ignoring historical fintech base rates',
          explanation: 'Accurate: financial compliance engineering is notoriously bottlenecked by external banking partner audits that cannot be accelerated.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Because startups are legally forbidden from building payment gateways in less than 24 months',
          explanation: 'There is no statutory minimum time limit; the barrier is empirical complexity and regulatory approvals.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Because payment software can only be built using assembly code language',
          explanation: 'Modern fintech infrastructure uses contemporary high-level languages and frameworks.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Always replace your optimistic inside plan with empirical historical reference class distribution data.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Use reference class forecasting: look up how long similar projects actually took other people, and add a 40% contingency buffer.',
  psychologicalDefenses: [
    {
      title: 'Adopt Reference Class Forecasting (Flyvbjerg)',
      instruction: 'Before setting a budget or deadline, identify a class of 5 to 10 similar past projects. Look up their actual average completion time and cost, and make that your baseline anchor.',
    },
    {
      title: 'Apply the 1.5x / 2x Multiplier Rule',
      instruction: 'Whenever you calculate how long a personal project or essay will take, immediately multiply your final estimated time by at least 1.5x to account for friction and cognitive fatigue.',
    },
    {
      title: 'Conduct an Ex-Ante Pre-Mortem',
      instruction: 'Gather your team and say: "It is six months from now, and we missed our launch deadline by 90 days. What went wrong?" List all friction points and schedule them into the timeline.',
    },
  ],

  reflectionPrompt: 'When you estimate how long a report or task will take, do you assume a frictionless perfect day where nothing goes wrong?',

  references: [
    {
      id: 'ref_kahneman_1979',
      authors: 'Kahneman, D., & Tversky, A.',
      year: 1979,
      title: 'Intuitive prediction: Biases and fallacious beliefs',
      publicationName: 'TIMS Studies in Management Science',
      volumeIssue: '12, 313-327',
      doi: '10.1037/e683322011-021',
      evidenceStrength: 'foundational_monograph',
    },
    {
      id: 'ref_buehler_1994',
      authors: 'Buehler, R., Griffin, D., & Ross, M.',
      year: 1994,
      title: 'Exploring the "planning fallacy": Why people underestimate their task completion times',
      publicationName: 'Journal of Personality and Social Psychology',
      volumeIssue: '67(3), 366-381',
      doi: '10.1037/0022-3514.67.3.366',
      evidenceStrength: 'empirical_study',
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
      topicId: 'sunk_cost_fallacy',
      slug: 'sunk-cost-fallacy',
      title: 'The Sunk Cost Fallacy',
      relationshipType: 'amplified_by',
    },
  ],
};

export const TOPIC_PLANNING_FALLACY: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_PLANNING_FALLACY_EN,
  hinglish: {
    ...TOPIC_PLANNING_FALLACY_EN,
    title: 'The Planning Fallacy: Har Kaam Late Aur Mehenga Kyu Hota Hai?',
    subtitle: 'Waqt aur budget ka wo andha andaaza jo har insaan aur sarkari project ko fail karta hai.',
    shortDescription: 'Ek aisi aadat jisme hum kisi kaam ko pura karne ka time aur paisa bohot kam aak lete hain, bina aane wali rukawaton ko soche.',
    oneLineExplanation: '"Ghar ka renovation 3 hafte me ho jayega." (Reality: 8 mahine aur 3 guna kharcha).',
    summary30s: 'Kahneman aur Tversky ne prove kiya ki jab insaan kisi project ki planning karta hai, toh wo sirf Best-Case Scenario sochta hai ki sab kuch perfect chalega. Lekin reality me equipment kharab hota hai, log bimar padte hain aur paperwork fas jata hai. Isliye 90% projects double time aur budget lete hain.',
  },
  hi: {
    ...TOPIC_PLANNING_FALLACY_EN,
    title: 'The Planning Fallacy (योजना भ्रम)',
    subtitle: 'कार्यों की अवधि और लागत को कम आंकने की प्रणालीगत मानवीय आशावादिता।',
    shortDescription: 'भविष्य की परियोजनाओं में लगने वाले समय, खर्च और जोखिमों को कम आंकने और लाभों को बढ़ा-चढ़ाकर देखने का संज्ञानात्मक पूर्वाग्रह।',
    oneLineExplanation: '"यह प्रोजेक्ट 2 महीने में पूरा हो जाएगा।" (वास्तविकता: 6 महीने और दोगुना बजट)।',
    summary30s: 'योजना भ्रम (Planning Fallacy) के तहत मनुष्य किसी कार्य की योजना बनाते समय केवल आदर्श स्थिति (Best-case scenario) की कल्पना करता है। 1994 के विश्वविद्यालय प्रयोग में पाया गया कि छात्रों ने अपने थीसिस को पूरा करने के सबसे खराब संभावित परिदृश्य (Worst-case scenario) से भी अधिक समय लिया।',
  },
  gu: TOPIC_PLANNING_FALLACY_EN,
  mr: TOPIC_PLANNING_FALLACY_EN,
  te: TOPIC_PLANNING_FALLACY_EN,
  ta: TOPIC_PLANNING_FALLACY_EN,
  kn: TOPIC_PLANNING_FALLACY_EN,
  ml: TOPIC_PLANNING_FALLACY_EN,
  bn: TOPIC_PLANNING_FALLACY_EN,
  pa: TOPIC_PLANNING_FALLACY_EN,
  ur: TOPIC_PLANNING_FALLACY_EN,
  or: TOPIC_PLANNING_FALLACY_EN,
  as: TOPIC_PLANNING_FALLACY_EN,
  };
