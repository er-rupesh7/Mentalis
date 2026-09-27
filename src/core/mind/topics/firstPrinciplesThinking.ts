import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_FIRST_PRINCIPLES: Record<MindLanguageCode, MindTopicDetail> = {
  en: {
    id: 'first_principles_thinking',
    categoryId: 'critical_thinking',
    slug: 'first-principles-thinking-falsification',
    difficulty: 'advanced',
    estimatedReadingMinutes: 5,
    scientificConsensusTier: 'established',
    sortWeight: 10,
    viewCount: 4210,
    shareCount: 510,
    bookmarkCount: 790,
    title: 'First-Principles Thinking & Falsification',
    subtitle: 'Deconstructing assumptions down to undeniable fundamental truths',
    shortDescription: 'The cognitive mental model of boiling a problem down to its most fundamental, physical truths and reasoning up from there, rather than reasoning by analogy.',
    oneLineExplanation: 'Reasoning by bedrock physics rather than reasoning by conventional imitation.',

    summary30s: 'Instead of copying what everyone else is doing (reasoning by analogy), break a problem down to its most basic, undeniable physical and logical facts, then rebuild a solution from scratch.',
    // 1. What is it?
    coreConcept: 'First-principles thinking (reasoning from first principles) is the practice of actively questioning every assumption you think you know about a given problem, breaking it down into fundamental truths that cannot be deduced any further, and creating a new solution from scratch.',
    summary60s: 'Most people reason by analogy: "We do it this way because everyone else does it this way, or because it has always been done like this." A first-principles thinker asks: "What are the raw physical, mathematical, or empirical realities here, and what can be built from those basics?"',
    quickTakeaways: [
      'Reasoning by analogy copies what others do with slight variations; first principles invents from bedrock truths',
      'It requires ruthless questioning of inherited assumptions and conventional wisdom',
      'Paired with falsification (Karl Popper): always test what would prove your hypothesis false',
    ],

    // 2. Why does it happen?
    whyItHappens: 'Cognitive load reduction. Reasoning by analogy is computationally cheap for the brain: copy your neighbor and you rarely look foolish. First-principles thinking requires immense cognitive metabolism and the courage to look unconventional.',
    evolutionaryMechanism: 'Social imitation was safer for survival than attempting high-risk solo experiments in the wild.',

    // 3. How does it work?
    howItWorks: 'The 3-Step Socratic Protocol: (1) Clarify your thinking and explain the origins of your ideas; (2) Challenge assumptions—"How do I know this is true? What if the opposite were true?"; (3) Look for fundamental evidence: "What are the undeniable physics, costs, or data?"',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'decision_tree',
      headline: 'Analogy (Chef) vs First Principles (Cook)',
      description: 'The difference between following a hand-me-down recipe and understanding biochemical reactions.',
      analogySideA: { label: 'Reasoning by Analogy', detail: 'Buying ready-made battery packs for ₹45,000 because that is market rate.' },
      analogySideB: { label: 'First Principles', detail: 'Calculating cobalt, nickel, and lithium spot market material cost (₹6,000) and engineering the assembly.' },
    },

    // 4. What does research say?
    researchSummary: 'Originating in Aristotle\'s philosophy of primary causes, codified in modern science by René Descartes (Cartesian doubt) and Karl Popper\'s philosophy of empirical falsification (1934). Modern cognitive science links it to divergent thinking and structural schema abstraction.',
    limitationsAndControversies: 'First-principles thinking is time-consuming. Using it for trivial everyday decisions (like deciding which brand of salt to buy) causes decision fatigue. Reserve it for high-stakes, asymmetric, or stagnating problems.',

    // 5. What does it look like in real life?
    examples: [
      {
        id: 'fp_ex_01',
        domain: 'general',
        displayOrder: 1,
        title: 'Rocket Reusability (SpaceX)',
        description: 'Conventional aerospace claimed rockets cost $65M and must be discarded. Elon Musk calculated raw aerospace-grade aluminum, titanium, and fuel accounted for only ~2% of the price, leading to reusable vertical landing rockets.',
        takeaway: 'Bedrock material physics exposed a 50x pricing inefficiency.',
      },
    ],
    scenarios: [
      {
        id: 'fp_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'The "You Must Join an Expensive Coaching Institute" Dogma',
        narrativeContext: 'Priya is preparing for an engineering entrance exam in India. Her relatives tell her that unless she spends ₹3.5 Lakhs moving to a coaching hub, she cannot succeed because "that is what all toppers do."',
        biasInAction: 'Priya\'s family reasoned strictly by social analogy and herd tradition.',
        optimalResponse: 'Deconstruct the problem to first principles: What is the exam? 90 multiple-choice physics, chemistry, and math problems based on standard NCERT concepts. What builds problem-solving mastery? Active recall, solving 10,000 problems independently, and immediate error diagnosis. A physical classroom does not solve problems for your brain; disciplined neural practice does. Priya uses top textbooks, open lecture archives, and timed mock tests at home.',
        reflectionPrompt: 'What is one major belief in your career or education that you accepted simply because "that is the way it has always been done"?',
      },
    ],

    // 6. How can I recognize it?
    howToRecognize: 'Notice whenever someone defends an inefficient policy or belief with the phrase: "Well, that is just industry standard practice." That is your signal that a first-principles breakthrough is waiting to happen.',
    whereYouEncounterIt: 'Startup innovation, scientific breakthroughs, investment strategy, Mentalab rapid mental calculation methods.',

    // 7. What misconceptions exist?
    commonMisconceptions: 'Common myth: "First principles means ignoring all past human knowledge." Truth: It means building on verified bedrock facts rather than blindly trusting inherited rituals.',

    // 8. What should I do about it?
    howToRespond: 'When stuck on an expensive or painful obstacle, strip away the labels and analyze the underlying physics, numbers, and biology.',
    psychologicalDefenses: [
      { title: 'The Socratic Questioning Drill', instruction: 'Ask: "Why do I believe this? What happens if the exact opposite is done?"' },
      { title: 'Five Whys Deconstruction', instruction: 'Drill down through 5 layers of "Why?" until you hit a physical or mathematical bedrock fact.' },
      { title: 'The Clean Sheet Redesign', instruction: 'Design the ideal solution as if no legacy systems, software, or traditions existed.' },
    ],

    // 9. Can I test whether I understood it?
    practiceQuestions: [
      {
        id: 'fp_q_01',
        difficulty: 'advanced',
        questionFormat: 'scenario_analysis',
        displayOrder: 1,
        prompt: 'Which approach to learning speed calculations represents First-Principles Thinking?',
        scenarioText: 'Deciding how to master mental arithmetic.',
        explanation: 'Deconstructing numbers into base-10 modular structures and neuroplastic memory pathways is first-principles reasoning; memorizing tricks by rote is reasoning by analogy.',
        antidoteAdvice: 'Break problems into elementary structural units.',
        options: [
          {
            id: 'fp_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Memorizing 50 disconnected "shortcut tricks" from social media without understanding why they work.',
            feedbackText: 'Incorrect. This is brittle reasoning by imitation.',
          },
          {
            id: 'fp_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Deconstructing numbers into place-value base components and training working-memory retrieval circuits.',
            feedbackText: 'Correct! This builds mastery from fundamental mathematical axioms and cognitive science.',
          },
          {
            id: 'fp_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Giving up because your school teacher told you that you were born without a "math brain".',
            feedbackText: 'Incorrect. This surrenders to an unverified inherited myth.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Pick one chronic frustration in your daily routine. If you had to redesign it from absolute scratch with zero preexisting rules, what would it look like?',
    sections: [],
    references: [
      {
        id: 'fp_ref_01',
        title: 'The Logic of Scientific Discovery',
        citation: 'Popper, K. (1934). The Logic of Scientific Discovery. Routledge.',
        authors: 'Karl Popper',
        publicationYear: 1934,
        journalOrPublisher: 'Routledge',
        sourceType: 'academic_textbook',
        evidenceStrength: 'foundational_book',
        doiOrUrl: 'https://www.routledge.com/The-Logic-of-Scientific-Discovery/Popper/p/book/9780415278447',
        relevance: 'Foundational framework establishing falsification as the demarcation criterion of empirical science.',
        displayOrder: 1,
      },
      {
        id: 'fp_ref_02',
        title: 'Analogical problem solving',
        citation: 'Gick, M. L., & Holyoak, K. J. (1980). Analogical problem solving. Cognitive Psychology, 12(3), 306–355.',
        authors: 'Mary L. Gick, Keith J. Holyoak',
        publicationYear: 1980,
        journalOrPublisher: 'Cognitive Psychology',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'empirical_study',
        doiOrUrl: 'https://doi.org/10.1016/0010-0285(80)90013-4',
        relevance: 'Empirical cognitive research showing that humans default to analogy unless prompted to abstract structural first principles.',
        displayOrder: 2,
      },
    ],
    tags: ['Critical Thinking', 'First Principles', 'Mental Models'],
    relatedTopics: [
      {
        topicId: 'confirmation_bias',
        slug: 'confirmation-bias',
        title: 'Confirmation Bias',
        relationshipType: 'counteracted_by',
      },
    ],
    seoTitle: 'First-Principles Thinking & Critical Reasoning | Mentalab Mind',
    seoDescription: 'Learn how to deconstruct assumptions to fundamental bedrock truths and think from first principles like legendary scientists.',
    canonicalUrl: '/mind/critical-thinking/first-principles-thinking-falsification',
    ogImageUrl: '/images/mind/first-principles.png',
    publishedAt: '2026-09-24T00:00:00Z',
    deepExplanation: 'First-principles thinking deconstructs epistemological assumptions using foundational axioms and empirical falsification.',
  },
  hinglish: {
    id: 'first_principles_thinking',
    categoryId: 'critical_thinking',
    slug: 'first-principles-thinking-falsification',
    difficulty: 'advanced',
    estimatedReadingMinutes: 5,
    scientificConsensusTier: 'established',
    sortWeight: 10,
    viewCount: 4210,
    shareCount: 510,
    bookmarkCount: 790,
    title: 'First-Principles Thinking & Falsification',
    subtitle: 'Buniyaadi sachaiyo se sochna aur assumptions ko todna',
    shortDescription: 'Kisi bhi mushkil problem ko uske sabse basic sach tak todna aur fir wahan se naya solution banana, bina doosron ki copy kiye.',
    oneLineExplanation: 'Bheed ki copy karne ke bajaye buniyaadi science aur facts se sochna.',

    summary30s: 'Doosron ki dekha-dekhi copy karne ke bajaye kisi problem ko uske sabse buniyadi sach (facts) me todna aur wahan se naya solution banana First-Principles Thinking kehlata hai.',
    coreConcept: 'First-principles thinking ka matlab hai har maani hui baat par sawaal uthana, use basic physics, math ya verified data tak todna, aur wahan se naya tareeqa banana.',
    summary60s: 'Zyadatar log dusron ko dekh kar faisla lete hain: "Sab log aisa kar rahe hain to hum bhi yahi karenge." First-principles thinker puchta hai: "Iska basic material ya sach kya hai? Aur kya hum ise alag tareeqe se kar sakte hain?"',
    quickTakeaways: [
      'Copy karne me dimaag ka kam zor lagta hai, isliye log purane tareeqe follow karte hain',
      'First principles se sochne par 10x saste aur behtar solutions nikalte hain',
      'Karl Popper ki falsification: Apni theory ko khud galat prove karne ki koshish karein',
    ],

    whyItHappens: 'Dimaag energy bachata hai. Doosron ki copy karna aasan hai. Buniyaad se sochna mental energy maangta hai.',
    evolutionaryMechanism: 'Tribe ke purane tareeqo par chalna safe tha, nayi cheezein try karna risky tha.',

    howItWorks: '3 Steps: (1) Current assumption identify karein; (2) Use basic truths tak todein; (3) Scratch se naya solution build karein.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'decision_tree',
      headline: 'Cook vs Chef Metaphor',
      description: 'Dusro ki recipe copy karne aur khud naye ingredients samajhne ka farq.',
      analogySideA: { label: 'Reasoning by Analogy (Cook)', detail: 'Dusron ki purani recipe bina samjhe copy karte rehna.' },
      analogySideB: { label: 'First Principles (Chef)', detail: 'Chemical reactions aur swaad ke basic rules samajhkar nayi dish banana.' },
    },

    researchSummary: 'Aristotle aur René Descartes ke philosophy se lekar modern physics tak. Elon Musk ne SpaceX rockets ki cost 90% kam karne ke liye first principles ka use kiya.',
    limitationsAndControversies: 'Har choti baat me first principles lagane se dimaag thak jayega; ise sirf bade decisions me lagayein.',

    examples: [
      {
        id: 'fp_ex_01_hi',
        domain: 'general',
        displayOrder: 1,
        title: 'SpaceX Rocket Reusability',
        description: 'Puri duniya bolti thi rocket ek baar use hoke gir jata hai. Musk ne raw material ka cost nikala aur reusable rocket banaya.',
        takeaway: 'Bedrock physics me problem ka solution chupa hota hai.',
      },
    ],
    scenarios: [
      {
        id: 'fp_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'Kota / Expensive Coaching Ka Myth',
        narrativeContext: 'Priya JEE ki taiyari kar rahi hai. Rishtedaar bolte hain ki bina 3.5 Lakh ki coaching liye selection impossible hai kyunki sab log wahi ja rahe hain.',
        biasInAction: 'Priya ke parivar ne bheed ki copy ki bina problem ko analyze kiye.',
        optimalResponse: 'First principles se socho: Exam me kya aayega? NCERT ke Physics, Chemistry aur Math ke concepts. Dimag kaise seekhta hai? 10,000 questions khud solve karke aur galtiyan sudhar kar. Coaching room me baithna exam crack nahi karta; khud active problem-solving karna crack karta hai. Priya ne ghar par standard books aur self-testing se exam crack kiya.',
        reflectionPrompt: 'Aapke career ya padhai me aisi kaunsi baat hai jo aapne sirf isliye maan li kyunki "hamesha se sab yahi karte aaye hain"?',
      },
    ],

    howToRecognize: 'Jab koi bole: "Yeh to industry standard hai, yahi tareeqa chalta hai"—samajh jaiye wahan first-principles lagane ka mauka hai.',
    whereYouEncounterIt: 'Competitive exams, startup ideas, Mentalab speed calculation algorithms.',

    commonMisconceptions: 'Myth: "First principles matlab purane sab rules ko fek dena." Fact: Iska matlab facts ko verify karna hai, andha vishwas nahi.',

    howToRespond: 'Problem ko chote-chote verified components me divide karein.',
    psychologicalDefenses: [
      { title: 'The 5 Whys Technique', instruction: 'Tab tak "Kyu?" puchiye jab tak aap kisi physical ya mathematical truth tak na pahunch jayein.' },
      { title: 'Question Assumptions', instruction: '"Agar iska bilkul opposite kiya jaye to kya hoga?"' },
      { title: 'Clean Sheet Thinking', instruction: 'Agar koi purana software ya rule na hota, to aap ise kaise banate?' },
    ],

    practiceQuestions: [
      {
        id: 'fp_q_01',
        difficulty: 'advanced',
        questionFormat: 'scenario_analysis',
        displayOrder: 1,
        prompt: 'Mental calculation seekhte waqt inme se kaunsa approach First-Principles Thinking hai?',
        scenarioText: 'Tez calculation seekhne ka tareeqa.',
        explanation: 'Numbers ko unke base-10 structure me todna aur working-memory circuits train karna first-principles approach hai.',
        antidoteAdvice: 'Ratte maarne ke bajaye fundamental axioms samjhein.',
        options: [
          {
            id: 'fp_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Bina logic samjhe internet se 50 random shortcuts ratt lena.',
            feedbackText: 'Galat. Yeh copy-paste hai.',
          },
          {
            id: 'fp_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Numbers ko place-value base aur mental retrieval circuits me deconstruct karke master karna.',
            feedbackText: 'Sahi! Yeh mathematical aur biological buniyaad se seekhna hai.',
          },
          {
            id: 'fp_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Yeh maan lena ki aapka math dimag kharab hai.',
            feedbackText: 'Galat myth hai.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Apne kaam ya padhai ka koi ek aisa part sochiye jisko agar aap zero se dobara start karein to bilkul naye tareeqe se karenge?',
    sections: [],
    references: [
      {
        id: 'fp_ref_01',
        title: 'The Logic of Scientific Discovery',
        citation: 'Popper, K. (1934). The Logic of Scientific Discovery.',
        authors: 'Karl Popper',
        publicationYear: 1934,
        journalOrPublisher: 'Routledge',
        sourceType: 'academic_textbook',
        evidenceStrength: 'foundational_book',
        doiOrUrl: 'https://www.routledge.com/The-Logic-of-Scientific-Discovery/Popper/p/book/9780415278447',
        relevance: 'Falsification aur critical rationalism ka foundational framework.',
        displayOrder: 1,
      },
      {
        id: 'fp_ref_02',
        title: 'Analogical problem solving',
        citation: 'Gick & Holyoak (1980). Cognitive Psychology.',
        authors: 'Mary L. Gick, Keith J. Holyoak',
        publicationYear: 1980,
        journalOrPublisher: 'Cognitive Psychology',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'empirical_study',
        doiOrUrl: 'https://doi.org/10.1016/0010-0285(80)90013-4',
        relevance: 'Analogy aur schema abstraction par classic cognitive experiment.',
        displayOrder: 2,
      },
    ],
    tags: ['Critical Thinking', 'First Principles', 'Mental Models'],
    relatedTopics: [],
    seoTitle: 'First-Principles Thinking Kya Hai? Critical Thinking | Mentalab Mind',
    seoDescription: 'Buniyaadi sachaiyo se sochna seekhein aur purani assumptions ko tod kar naye solutions banayein.',
    canonicalUrl: '/mind/critical-thinking/first-principles-thinking-falsification',
    ogImageUrl: '/images/mind/first-principles.png',
    publishedAt: '2026-09-24T00:00:00Z',
    deepExplanation: 'First-principles thinking foundational axioms aur deductive reasoning par operate karta hai.',
  },
  hi: {} as any,
  gu: {} as any,
  mr: {} as any,
  te: {} as any,
  ta: {} as any,
  kn: {} as any,
  ml: {} as any,
  bn: {} as any,
  pa: {} as any,
  ur: {} as any,
  or: {} as any,
  as: {} as any,
};
