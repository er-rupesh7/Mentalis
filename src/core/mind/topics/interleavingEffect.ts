import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Learning Psychology Track
 * Topic: The Interleaving Effect: Mixing Concepts for Robust Mastery
 * Category: Learning Psychology (learning_psychology)
 * 
 * Academic Grounding:
 * - Rohrer & Taylor (2007): The shuffling of mathematics problems improves learning
 * - Kornell & Bjork (2008): Learning concepts and categories: Is spacing the "enemy of induction"?
 * - Dunlosky et al. (2013): Improving students' learning with effective learning techniques
 */

export const TOPIC_INTERLEAVING_EN: MindTopicDetail = {
  id: 'interleaving_effect',
  categoryId: 'learning_psychology',
  slug: 'interleaving-effect-learning',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 3,
  viewCount: 6840,
  shareCount: 520,
  bookmarkCount: 1280,
  title: 'The Interleaving Effect: Mixing Concepts for Robust Mastery',
  subtitle: 'Alternating between different problem types beats repetitive "blocked" practice by training the brain to choose the right strategy.',
  shortDescription: 'A learning technique where a learner alternates or mixes different topics or problem types during a single study session, producing dramatically superior long-term retention and transfer.',
  oneLineExplanation: 'Practicing tennis serves, backhands, and volleys together instead of hitting 100 forehands in a row.',

  summary30s: 'Most people study via "blocked practice"—doing 20 geometry problems of Type A, then 20 of Type B. Blocked practice feels fluent and easy, but it produces brittle learning because you never practice identifying WHICH formula to use. The interleaving effect demonstrates that shuffling problem types (A-B-C-A-C-B) forces the brain to practice strategy selection, boosting test scores by over 70%.',

  coreConcept: 'Demonstrated in cognitive psychology by Doug Rohrer, Kelli Taylor, and Robert Bjork, interleaving introduces what Bjork terms a "Desirable Difficulty." When practice is blocked (AAAA BBBB CCCC), the brain simply applies the exact same formula on autopilot. In real exams and real life, problems do not arrive labeled with the chapter name. Interleaving forces the brain to discriminate between problem types, matching the actual retrieval conditions of professional practice.',
  summary60s: 'In Rohrer & Taylor\'s classic 2007 study with middle school mathematics students learning how to calculate the volumes of different geometric solids (wedges, spherical cones, spheroids), students trained via blocked practice solved problems in neat, single-formula clusters. Students trained via interleaved practice solved problems in randomized, mixed order. During initial practice, the blocked group felt much more confident and scored higher. But on the surprise final exam one week later, the interleaved group crushed the blocked group by an astonishing 77% to 38% margin—more than double the retention!',

  quickTakeaways: [
    'The 100% Exam Score Surge: Interleaved students retain over double the knowledge on delayed tests compared to blocked learners',
    'The Illusion of Competence: Blocked practice feels fluent and smooth, tricking learners into false overconfidence',
    'Category Discrimination: Interleaving trains the brain to answer the critical meta-question: "Which tool should I use here?"',
    'Mentalab Speed Drills Connection: Alternating mental math operations (addition -> percentage -> roots) builds true computational reflex',
  ],

  whyItHappens: 'Memory reactivation and contrastive learning. Each time a problem type switches, the brain must clear working memory, retrieve a new schema from long-term memory, and compare the contrasting features between the current problem and the previous one.',
  evolutionaryMechanism: 'In nature, predators and environmental challenges never arrived in tidy, repetitive blocks. A hunter had to instantly alternate between tracking footprints, evading venomous snakes, and throwing a spear. Multi-modal agility was selected for over narrow, repetitive specialization.',

  howItWorks: 'The interleaving process: (1) Mixed Session Design: Assembling problems from 3 to 4 related modules; (2) Contrastive Processing: Analyzing the subtle structural differences between Problem A and Problem B; (3) Strategy Retrieval: Choosing the correct mental algorithm without hints; (4) Flexible Consolidation: Neural pathways for diverse tools are cross-linked in memory.',
  whereYouEncounterIt: 'Athletic training (pitchers mixing fastballs, sliders, and changeups), musical instrument practice, medical differential diagnosis, and mental calculation drills.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Blocked Practice vs. Interleaved Practice',
    description: 'Why practicing in mixed order produces superior real-world mastery.',
    analogySideA: {
      label: 'Blocked Practice (The Easy Illusion)',
      detail: '[Problem A, A, A, A] -> [Problem B, B, B, B] -> Brain applies formula on autopilot with zero cognitive discrimination.',
    },
    analogySideB: {
      label: 'Interleaved Practice (The Desirable Difficulty)',
      detail: '[Problem A] -> [Problem C] -> [Problem B] -> [Problem A] -> Brain must actively deduce WHICH formula applies before calculating.',
    },
  },

  researchSummary: 'Kornell & Bjork (2008) tested whether subjects could learn the artistic styles of 12 landscape painters better through massed blocks (studying 6 paintings by Artist A, then 6 by Artist B) or interleaved sets (mixing paintings from all artists). Although 78% of participants believed massed blocks were better for their learning, actual classification test results showed interleaved learning was overwhelmingly superior.',
  limitationsAndControversies: 'Interleaving works best for related, easily confusable categories (e.g., distinguishing between different calculus integration rules or bird species). It does not work well if topics are completely unrelated (e.g., interleaving Japanese grammar with organic chemistry within the same 5-minute drill creates chaotic interference).',
  commonMisconceptions: 'Common myth: "Mastering one topic completely before moving to the next is the most effective way to learn." Reality: Blocked practice feels fluent but results in rapid forgetting, while interleaving forces the brain to practice discriminating between problem types, yielding 40%+ superior long-term retention.',

  howToRecognize: [
    'Doing 30 identical textbook exercises at the end of a chapter and feeling like a genius, only to blank out completely on the final cumulative exam',
    'Practicing only one piano song for 3 hours straight and struggling to play it smoothly in a live recital alongside other pieces',
    'Studying medical flashcards organized strictly by disease chapter rather than symptom presentation',
    'Feeling intense frustration during study because the problem types keep switching (this frustration is the precise biological signal of deep neuroplastic learning)',
  ],

  scenarios: [
    {
      id: 'scen_inter_01',
      scenarioType: 'indian_context',
      title: 'The JEE Physics Preparation Trap in Kota',
      vignette: 'Vikram, an engineering aspirant in Kota, spends Monday doing 50 consecutive problems on Rotational Inertia, Tuesday doing 50 problems on Electrostatics, and Wednesday doing 50 problems on Thermodynamics. On his weekly test, he scores 92% because he knows which chapter is being tested. But on the full-length mock exam at the end of the month—where problems from all 30 chapters appear in randomized order—Vikram’s score collapses to 41%. He breaks down in tears: "I practiced 150 problems, why couldn’t I recognize what formula to use?"',
      breakdownAnalysis: 'Vikram fell into the blocked practice trap. By doing 50 problems of the same type in a row, he never practiced problem identification—the single most critical skill tested on competitive exams. His brain only practiced the mechanical execution of a known formula.',
      recommendedAction: 'Adopt the Shuffled Practice Protocol: "Create daily 20-problem sets drawn randomly from past chapters: 3 rotational mechanics, 3 optics, 3 thermodynamics, 3 electromagnetism. Embrace the cognitive friction of having to identify the physics principle before writing the first equation."',
    },
  ],

  examples: [
    {
      id: 'ex_inter_01',
      domain: 'general',
      displayOrder: 1,
      title: 'The Batting Cage vs Live Pitching',
      description: 'A baseball hitter who takes 50 fastballs at 90 mph in a batting cage hits them easily because timing is locked. In a real game, the pitcher alternates between curveballs, fastballs, and sliders, rendering the blocked cage training useless.',
      takeaway: 'Practice must mirror the randomized unpredictability of real performance.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_inter_01',
      scenarioContext: 'A mathematics teacher is designing homework sets for quadratic equations, linear inequalities, and exponential functions. What homework architecture will produce the highest retention on the final exam three months later?',
      question: 'Which assignment structure leverages the interleaving effect?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Homework sets that shuffle problems across all three topics in randomized order, requiring students to first determine which algebraic structure applies',
          explanation: 'Accurate: interleaving forces students to discriminate between problem structures before applying algorithms.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Giving 30 quadratic equations on Monday, 30 linear inequalities on Tuesday, and 30 exponential functions on Wednesday',
          explanation: 'This is traditional blocked practice, which produces rapid temporary fluency but poor long-term retention.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Having students highlight textbook formulas in three different neon colors',
          explanation: 'Highlighting is a passive, low-utility study technique with zero discrimination training.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Mastery requires training both "how to calculate" and "knowing when to calculate what."',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Mix problem types, flashcard decks, and conceptual categories during study sessions rather than practicing the same problem type repeatedly.',
  psychologicalDefenses: [
    {
      title: 'The Shuffled Flashcard Protocol',
      instruction: 'Never review flashcards sorted neatly by chapter or topic. Shuffle cards from 4 different modules together so every card is an unexpected retrieval challenge.',
    },
    {
      title: 'Embrace the "Desirable Difficulty" Feeling',
      instruction: 'When study feels smooth and easy, you are rarely learning deeply. When switching between topics feels clunky, awkward, and demanding, celebrate: your brain is forging durable synaptic connections.',
    },
    {
      title: 'The 3-Track Rotation in Mentalab Calculation',
      instruction: 'In your daily math drills, alternate: 2 rapid additions -> 2 percentage approximations -> 2 square root extractions. Do not do 20 additions in a row.',
    },
  ],

  reflectionPrompt: 'Do you study one single chapter for 4 hours until it feels easy, only to forget everything on the exam when different topics are mixed together?',

  references: [
    {
      id: 'ref_rohrer_2007',
      authors: 'Rohrer, D., & Taylor, K.',
      year: 2007,
      title: 'The shuffling of mathematics problems improves learning',
      publicationName: 'Instructional Science',
      volumeIssue: '35(6), 481-498',
      doi: '10.1007/s11251-007-9015-8',
      evidenceStrength: 'landmark_paper',
    },
    {
      id: 'ref_kornell_2008',
      authors: 'Kornell, N., & Bjork, R. A.',
      year: 2008,
      title: 'Learning concepts and categories: Is spacing the "enemy of induction"?',
      publicationName: 'Psychological Science',
      volumeIssue: '19(6), 585-592',
      doi: '10.1111/j.1467-9280.2008.02127.x',
      evidenceStrength: 'empirical_study',
    },
  ],

  relatedTopics: [
    {
      topicId: 'spaced_repetition',
      slug: 'spaced-repetition',
      title: 'Spaced Repetition',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'retrieval_practice',
      slug: 'retrieval-practice',
      title: 'Retrieval Practice',
      relationshipType: 'amplified_by',
    },
  ],
};

export const TOPIC_INTERLEAVING: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_INTERLEAVING_EN,
  hinglish: {
    ...TOPIC_INTERLEAVING_EN,
    title: 'The Interleaving Effect: Topics Ko Mix Karke Padhne Ka Jaadu',
    subtitle: 'Ek hi tarah ke 50 sawaal lagane ke bajaye 3 alag-alag chapters ke sawaal mix karke lagana 2 guna zyada yaad rehta hai.',
    shortDescription: 'Ek aisi scientific study technique jisme padhai karte waqt alag-alag problem types ko mix kiya jata hai taaki dimaag formula pehchanna seekhe.',
    oneLineExplanation: 'Sirf forehand maarne ke bajaye tennis me backhand, volley aur serve ek sath practice karna.',
    summary30s: 'Doug Rohrer ne 2007 me maths ke students par experiment kiya: jin bacchon ne ek hi chapter ke sawaal lagataar kiye, unhe laga unhe sab aata hai. Lekin exam me unka score 38% aaya. Jin bacchon ne alag-alag chapters ke mixed sawaal solve kiye, unka score 77% aaya! Mixed padhai karne se dimaag autopilot chhodkar question pehchanna seekhta hai.',
  },
  hi: {
    ...TOPIC_INTERLEAVING_EN,
    title: 'The Interleaving Effect (विषय-मिश्रण प्रभाव)',
    subtitle: 'विभिन्न प्रकार की समस्याओं और विषयों को मिलाकर अभ्यास करने से प्राप्त होने वाली दीर्घकालिक दक्षता।',
    shortDescription: 'अध्ययन की वह पद्धति जिसमें एक ही विषय के निरंतर अभ्यास (Blocked practice) के स्थान पर विभिन्न अवधारणाओं को एक सत्र में मिलाकर अभ्यास किया जाता है।',
    oneLineExplanation: 'एक ही सूत्र के 50 प्रश्नों के बजाय विभिन्न अध्यायों के मिश्रित प्रश्नों का समाधान करना।',
    summary30s: 'इंटरलीविंग प्रभाव (Interleaving Effect) यह सिद्ध करता है कि विभिन्न प्रकार के प्रश्नों को मिलाकर हल करने से मस्तिष्क को यह पहचानने का अभ्यास होता है कि किस समस्या में कौन सा सूत्र लागू होगा। 2007 के शोध में मिश्रित अभ्यास करने वाले विद्यार्थियों ने एक सप्ताह बाद की परीक्षा में सामान्य विद्यार्थियों की तुलना में दोगुने से अधिक अंक प्राप्त किए।',
  },
  gu: TOPIC_INTERLEAVING_EN,
  mr: TOPIC_INTERLEAVING_EN,
  te: TOPIC_INTERLEAVING_EN,
  ta: TOPIC_INTERLEAVING_EN,
  kn: TOPIC_INTERLEAVING_EN,
  ml: TOPIC_INTERLEAVING_EN,
  bn: TOPIC_INTERLEAVING_EN,
  pa: TOPIC_INTERLEAVING_EN,
  ur: TOPIC_INTERLEAVING_EN,
  or: TOPIC_INTERLEAVING_EN,
  as: TOPIC_INTERLEAVING_EN,
  };
