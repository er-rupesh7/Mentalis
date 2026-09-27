/**
 * Mentalab Mind Psychology Knowledge Architecture & Curriculum Registry
 * 
 * Structured knowledge system answering the 9 Core Principles for every topic:
 * 1. What is it?
 * 2. Why does it happen?
 * 3. How does it work?
 * 4. What does research say?
 * 5. What does it look like in real life?
 * 6. How can I recognize it?
 * 7. What misconceptions exist?
 * 8. What should I do about it?
 * 9. Can I test whether I understood it?
 *
 * Covers the 10 Primary Content Areas + Critical Thinking across
 * Beginner, Intermediate, and Advanced conceptual difficulty tiers.
 */

import {
  MindCategory,
  MindTopicDetail,
  MindLanguageCode,
  MindDifficulty,
  PrimaryMindCategoryKey,
} from './types';

// ============================================================================
// 10 PRIMARY CONTENT AREAS (+ CRITICAL THINKING)
// ============================================================================

export const PRIMARY_MIND_CATEGORIES: Record<
  PrimaryMindCategoryKey,
  {
    slug: string;
    iconName: string;
    accentColor: string;
    displayOrder: number;
    titleEn: string;
    titleHinglish: string;
    subtitleEn: string;
    subtitleHinglish: string;
    descriptionEn: string;
    descriptionHinglish: string;
  }
> = {
  cognitive_biases: {
    slug: 'cognitive-biases',
    iconName: 'Brain',
    accentColor: 'violet',
    displayOrder: 1,
    titleEn: 'Cognitive Biases',
    titleHinglish: 'Cognitive Biases',
    subtitleEn: 'Systematic deviations from rationality in human judgment.',
    subtitleHinglish: 'Humara dimaag decisions lete waqt kaunse shortcuts leta hai.',
    descriptionEn: 'Learn how the brain takes mental shortcuts (heuristics) that lead to predictable perception errors.',
    descriptionHinglish: 'Janiye kaise dimaag ki natural tendencies hume galat conclusions aur judgments tak le jati hain.',
  },
  social_psychology: {
    slug: 'social-psychology',
    iconName: 'Users',
    accentColor: 'blue',
    displayOrder: 2,
    titleEn: 'Social Psychology',
    titleHinglish: 'Social Psychology',
    subtitleEn: 'How the presence of others shapes human thinking and action.',
    subtitleHinglish: 'Logon ki presence humari thinking aur actions ko kaise badalti hai.',
    descriptionEn: 'Explore conformity, social proof, bystander intervention, obedience, and collective group dynamics.',
    descriptionHinglish: 'Samjhein social proof, bheed ka asar (conformity), aur groups me decision lene ke scientific patterns.',
  },
  persuasion_influence: {
    slug: 'persuasion-and-influence',
    iconName: 'Eye',
    accentColor: 'indigo',
    displayOrder: 3,
    titleEn: 'Persuasion & Influence',
    titleHinglish: 'Persuasion & Influence',
    subtitleEn: 'The science of how attitudes and behaviors are shaped ethically.',
    subtitleHinglish: 'Log doosron ko kaise convince aur influence karte hain.',
    descriptionEn: 'Scientifically validated principles: reciprocity, scarcity, commitment, liking, and ethical framing.',
    descriptionHinglish: 'Cialdini ke core principles aur social influence ke scientific rules seekhein, ethical boundaries ke sath.',
  },
  manipulation_awareness: {
    slug: 'manipulation-awareness',
    iconName: 'ShieldAlert',
    accentColor: 'rose',
    displayOrder: 4,
    titleEn: 'Manipulation Awareness',
    titleHinglish: 'Manipulation Awareness',
    subtitleEn: 'Recognize emotional coercion while understanding context.',
    subtitleHinglish: 'Emotional manipulation aur pressure tactics ko pehchanein.',
    descriptionEn: 'Build psychological immunity against guilt-tripping and gaslighting, while distinguishing malice from normal misunderstanding.',
    descriptionHinglish: 'Seekhein kaise guilt-tripping aur gaslighting se bachein, aur samjhein ki kab baat sirf misunderstanding hai.',
  },
  decision_making: {
    slug: 'decision-making',
    iconName: 'Scale',
    accentColor: 'amber',
    displayOrder: 5,
    titleEn: 'Decision Making',
    titleHinglish: 'Decision Making',
    subtitleEn: 'Risk evaluation, uncertainty intuition, and choice architecture.',
    subtitleHinglish: 'Accurate aur rational decisions lene ki mental frameworks.',
    descriptionEn: 'Understand overconfidence, probability misjudgments, the planning fallacy, and sunk-cost traps.',
    descriptionHinglish: 'Risk, uncertainty, aur planning fallacy ko samjhkar bade decisions me expensive galtiyo se bachein.',
  },
  emotions: {
    slug: 'emotions-and-regulation',
    iconName: 'Heart',
    accentColor: 'red',
    displayOrder: 6,
    titleEn: 'Emotions & Regulation',
    titleHinglish: 'Emotions & Regulation',
    subtitleEn: 'Neurobiology of feelings, triggers, motivation, and regulation.',
    subtitleHinglish: 'Feelings, stress aur emotional triggers ka scientific control.',
    descriptionEn: 'Master cognitive reappraisal, understand amygdala activation, and build emotional resilience without toxic suppression.',
    descriptionHinglish: 'Gusse, darr aur motivation ke biological reasons samjhein aur seekhein unhe rationally regulate karna.',
  },
  relationships_comm: {
    slug: 'relationships-and-communication',
    iconName: 'HeartHandshake',
    accentColor: 'pink',
    displayOrder: 7,
    titleEn: 'Relationships & Communication',
    titleHinglish: 'Relationships & Communication',
    subtitleEn: 'Assertiveness, boundaries, active listening, and conflict resolution.',
    subtitleHinglish: 'Healthy boundaries aur effective communication ka science.',
    descriptionEn: 'Non-pathologizing, evidence-based frameworks to express boundaries and resolve interpersonal friction cleanly.',
    descriptionHinglish: 'Seekhein bina rude huye "Na" bolna, active listening, aur misunderstanding ko clear karne ke tareeqe.',
  },
  social_media_tech: {
    slug: 'social-media-psychology',
    iconName: 'Radio',
    accentColor: 'cyan',
    displayOrder: 8,
    titleEn: 'Social Media Psychology',
    titleHinglish: 'Social Media Psychology',
    subtitleEn: 'Algorithmic reinforcement, variable rewards, and attention economics.',
    subtitleHinglish: 'Apps aur algorithms hamare attention ko kaise capture karte hain.',
    descriptionEn: 'Understand how notification loops, moral outrage contagion, and infinite scrolls hijack neurochemical reward pathways.',
    descriptionHinglish: 'Dopamine reward loops, infinite scroll aur online outrage ke piche ki psychology samjhein.',
  },
  consumer_advertising: {
    slug: 'consumer-and-advertising-psychology',
    iconName: 'ShoppingBag',
    accentColor: 'orange',
    displayOrder: 9,
    titleEn: 'Consumer & Advertising Psychology',
    titleHinglish: 'Consumer & Advertising Psychology',
    subtitleEn: 'Anchoring, decoy effects, default biases, and retail nudges.',
    subtitleHinglish: 'Brands aur ads humse paise kharch karwane ke liye kya karte hain.',
    descriptionEn: 'Detect commercial persuasion tactics such as fake countdown timers, strike-through pricing, and decoy options.',
    descriptionHinglish: 'Pricing tricks, fake discount tags, aur decoy options ko pehchan kar smart consumer banein.',
  },
  learning_psychology: {
    slug: 'learning-psychology',
    iconName: 'Sparkles',
    accentColor: 'emerald',
    displayOrder: 10,
    titleEn: 'Learning Psychology',
    titleHinglish: 'Learning Psychology',
    subtitleEn: 'Retrieval practice, spacing, cognitive load, and deliberate training.',
    subtitleHinglish: 'Dimaag nayi cheezein kaise seekhta aur yaad rakhta hai.',
    descriptionEn: 'Directly connects with Mentalab calculation mastery: the cognitive science of memory consolidation and rapid skill acquisition.',
    descriptionHinglish: 'Retrieval practice, spaced repetition aur Mentalab speed drills ka scientific connection samjhein.',
  },
  critical_thinking: {
    slug: 'critical-thinking',
    iconName: 'Compass',
    accentColor: 'teal',
    displayOrder: 11,
    titleEn: 'Critical Thinking',
    titleHinglish: 'Critical Thinking',
    subtitleEn: 'First-principles reasoning, falsification, and mental models.',
    subtitleHinglish: 'Clear thinking, logic aur mental models ka practical guide.',
    descriptionEn: 'Learn to separate personal identity from hypotheses, detect logical fallacies, and stress-test assumptions.',
    descriptionHinglish: 'Har information ko blind trust karne ke bajaye scientific tareeqe se question karna seekhein.',
  },
};

// ============================================================================
// COMPREHENSIVE CURRICULUM TOPICS (Fully Answering the 9 Core Principles)
// ============================================================================

export const TOPIC_CONFIRMATION_BIAS: Record<MindLanguageCode, MindTopicDetail> = {
  en: {
    id: 'confirmation_bias',
    categoryId: 'cognitive_biases',
    slug: 'confirmation-bias',
    difficulty: 'beginner',
    estimatedReadingMinutes: 4,
    scientificConsensusTier: 'established',
    sortWeight: 1,
    viewCount: 1840,
    shareCount: 124,
    bookmarkCount: 312,
    title: 'Confirmation Bias',
    subtitle: 'Why we seek what we already believe',
    shortDescription: 'The natural psychological tendency to search for, interpret, and recall information that confirms preexisting beliefs while dismissing contradictory evidence.',
    oneLineExplanation: 'The brain acting like a defense lawyer rather than an impartial judge.',

    summary30s: 'Your brain naturally acts like a defense lawyer instead of an impartial judge: it hunts for facts that confirm what you already believe, while ignoring or attacking facts that contradict you.',
    // 1. What is it?
    coreConcept: 'Confirmation bias is a universal cognitive shortcut where our minds give disproportionate weight to evidence that agrees with our existing opinions, while aggressively scrutinizing or ignoring counter-evidence.',
    summary60s: 'Imagine your brain acting like a defense lawyer rather than an impartial judge: when you form an opinion—about a stock, a diet, or a person—your brain feels emotional comfort when finding supportive proof. Counter-arguments trigger subtle anxiety (cognitive dissonance). Consequently, your search queries, news feeds, and memory select for affirmation rather than objective truth.',
    quickTakeaways: [
      'We search for supportive evidence and overlook disconfirming facts',
      'Neutral or ambiguous data is automatically interpreted in our favor',
      'Higher intelligence does not prevent it; it often makes rationalizations more sophisticated',
    ],

    // 2. Why does it happen?
    whyItHappens: 'Cognitive economy and identity preservation. Changing a core belief requires massive metabolic energy and destabilizes our sense of consistency. Accepting contradictory evidence feels threatening to the self.',
    evolutionaryMechanism: 'In prehistoric hunter-gatherer bands, tribal solidarity was vital for physical survival. Constantly questioning shared group beliefs risked social ostracization. Group consensus was prioritized over individual scientific accuracy.',

    // 3. How does it work?
    howItWorks: 'It operates across three distinct stages: (1) Selective Search—only typing queries that confirm your view; (2) Selective Interpretation—reading ambiguous data as conclusive proof; (3) Selective Recall—vividly remembering times your hypothesis worked while forgetting failures.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'The Mind as an Impartial Judge vs. Defense Lawyer',
      description: 'An objective thinker gathers all evidence before verdict; a biased mind begins with the verdict and gathers only supportive exhibits.',
      analogySideA: { label: 'Scientific Mind (Judge)', detail: 'Looks for evidence that could falsify the claim.' },
      analogySideB: { label: 'Biased Mind (Lawyer)', detail: 'Discredits opposing witnesses and highlights favorable anecdotes.' },
    },

    // 4. What does research say & limitations?
    researchSummary: 'First formally documented by British psychologist Peter Wason in 1960 through the 2-4-6 rule discovery task, where subjects repeatedly tested hypotheses that confirmed their guess instead of attempting falsification.',
    limitationsAndControversies: 'Confirmation bias is often exaggerated online as "deliberate malice" or "stupidity". In truth, it is an involuntary heuristic present in all humans. Under familiar, non-ego-driven circumstances, people do correct hypotheses when feedback is immediate and unambiguous.',

    // 5. What does it look like in real life?
    examples: [
      {
        id: 'cb_ex_01',
        domain: 'personal_finance',
        displayOrder: 1,
        title: 'The Sinking Stock Trap',
        description: 'An investor buys shares of a tech startup that drop 35%. Instead of reviewing quarterly revenue deficits, they search Reddit and YouTube for bullish hype videos to soothe their anxiety.',
        takeaway: 'Seeking reassurance rather than rigorous risk calculation leads to capital destruction.',
      },
      {
        id: 'cb_ex_02',
        domain: 'workplace',
        displayOrder: 2,
        title: 'Project Performance Evaluation',
        description: 'A manager convinced that an employee is lazy notices every 5-minute late arrival, but fails to register the late nights the employee worked to meet a deadline.',
        takeaway: 'Selective attention reinforces inaccurate team assessments.',
      },
    ],
    scenarios: [
      {
        id: 'cb_scenario_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'The WhatsApp Medical Miracle',
        narrativeContext: 'Ramesh uncle firmly believes that drinking hot water with lemon and turmeric at 5:00 AM completely cures hypertension. Whenever an unverified YouTube video or WhatsApp forward repeats this claim, he immediately forwards it to his family group with the caption: "See, modern doctors will never tell you this!"',
        biasInAction: 'When a consulting cardiologist presents clinical trials proving turmeric does not replace blood pressure medication, Ramesh dismisses the doctor as "a greedy agent of big pharma" while continuing to believe anonymous forwarded texts.',
        optimalResponse: 'Apply the principle of falsification: before trusting medical claims, check whether double-blind clinical trials corroborate the finding or if you are only welcoming the message because it offers an easy, comforting answer.',
        reflectionPrompt: 'Have you ever dismissed professional criticism of an idea simply because you liked the idea too much?',
      },
    ],

    // 6. How can I recognize it?
    howToRecognize: 'Notice internal emotional signs: A sudden surge of satisfaction when reading an article that attacks someone you dislike, or a sudden flare of annoyance and instinct to mock an article that challenges your viewpoint.',
    whereYouEncounterIt: 'Algorithmic feeds, WhatsApp forwarding chains, financial stock speculation, and political discourse.',

    // 7. What misconceptions exist?
    commonMisconceptions: 'Common myth: "Only gullible, uneducated people suffer from confirmation bias." Reality: Studies consistently show higher cognitive ability often equips individuals with more sophisticated tools to rationalize their preexisting biases.',

    // 8. What should I do about it?
    howToRespond: 'Shift from verification mindset to falsification mindset. Instead of asking "What proves I am right?", deliberately ask "What evidence would prove I am completely wrong?"',
    psychologicalDefenses: [
      { title: 'Red Teaming', instruction: 'Force yourself to write 3 strong, persuasive reasons why your current stance could be completely wrong.' },
      { title: 'Falsification Pre-Commitment', instruction: 'Specify in advance: "What specific metric or evidence would make me abandon this belief?"' },
      { title: 'Separate Ego from Hypotheses', instruction: 'Treat beliefs as testable prototypes rather than core parts of your identity.' },
    ],

    // 9. Can I test whether I understood it?
    practiceQuestions: [
      {
        id: 'cb_q_01',
        difficulty: 'beginner',
        questionFormat: 'identify_bias',
        displayOrder: 1,
        prompt: 'Which of the following investment behaviors is the clearest sign of Confirmation Bias?',
        scenarioText: 'A retail investor buys shares in Company Z after reading a positive article.',
        explanation: 'Actively seeking out only cheerleading groups while blocking or dismissing critics who highlight balance sheet debt is the textbook manifestation of confirmation bias.',
        antidoteAdvice: 'Before purchasing or holding an asset, read the strongest available bear case written by reputable analysts.',
        options: [
          {
            id: 'cb_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Reading both the bull-case and bear-case quarterly reports before committing capital.',
            feedbackText: 'Incorrect. This is an objective, balanced evaluation that counteracts confirmation bias.',
          },
          {
            id: 'cb_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Joining only social groups that praise Company Z, while unfollowing anyone who mentions company debt.',
            feedbackText: 'Correct! This actively filters out counter-evidence to protect the investor\'s preexisting optimism.',
          },
          {
            id: 'cb_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Setting an automated stop-loss order to sell if the price drops below a disciplined threshold.',
            feedbackText: 'Incorrect. A pre-committed automated stop-loss is a rational risk management tool.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Think of one strong belief you hold today. What single piece of evidence, if discovered tomorrow, would make you change your mind?',
    sections: [],
    references: [
      {
        id: 'cb_ref_01',
        citation: 'Wason, P. C. (1960). On the failure to eliminate hypotheses in a conceptual task. Quarterly Journal of Experimental Psychology, 12(3), 129–140.',
        authors: 'Peter C. Wason',
        publicationYear: 1960,
        journalOrPublisher: 'Quarterly Journal of Experimental Psychology',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        displayOrder: 1,
      },
      {
        id: 'cb_ref_02',
        citation: 'Nickerson, R. S. (1998). Confirmation bias: A ubiquitous phenomenon in many guises. Review of General Psychology, 2(2), 175–220.',
        authors: 'Raymond S. Nickerson',
        publicationYear: 1998,
        journalOrPublisher: 'Review of General Psychology',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        displayOrder: 2,
      },
      {
        id: 'cb_ref_03',
        citation: 'Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.',
        authors: 'Daniel Kahneman',
        publicationYear: 2011,
        journalOrPublisher: 'Farrar, Straus and Giroux',
        evidenceStrength: 'foundational_book',
        displayOrder: 3,
      },
    ],
    tags: ['Cognitive Bias', 'Decision Making', 'Critical Thinking'],
    relatedTopics: [
      {
        topicId: 'anchoring_effect',
        slug: 'anchoring-effect',
        title: 'Anchoring Effect',
        relationshipType: 'amplified_by',
      },
      {
        topicId: 'social_proof',
        slug: 'social-proof',
        title: 'Social Proof',
        relationshipType: 'general_related',
      },
    ],
    seoTitle: 'Confirmation Bias: What It Is, How It Works & Real-Life Examples | Mentalab Mind',
    seoDescription: 'Understand Confirmation Bias like a defense lawyer defending their client: how selective search distorts decisions and 3 peer-reviewed cognitive defenses to think independently.',
    canonicalUrl: '/mind/cognitive-biases/confirmation-bias',
    ogImageUrl: '/images/mind/confirmation-bias.png',
    publishedAt: '2026-09-01T00:00:00Z',
    deepExplanation: 'First formally identified in cognitive psychology by Peter Wason in 1960, confirmation bias occurs across three distinct cognitive dimensions: selective search, selective interpretation, and selective recall.',
  },
  hinglish: {
    id: 'confirmation_bias',
    categoryId: 'cognitive_biases',
    slug: 'confirmation-bias',
    difficulty: 'beginner',
    estimatedReadingMinutes: 4,
    scientificConsensusTier: 'established',
    sortWeight: 1,
    viewCount: 1840,
    shareCount: 124,
    bookmarkCount: 312,
    title: 'Confirmation Bias',
    subtitle: 'Hum wahi kyu dhundte hain jo hum pehle se mante hain?',
    shortDescription: 'Apne pehle se bane vichaaron ko sahi sabit karne wali information ko chunna aur opposite proofs ko ignore kar dena.',
    oneLineExplanation: 'Dimaag ka impartial judge banne ke bajaye ek defense lawyer ki tarah act karna.',

    summary30s: 'Aapka dimaag ek impartial judge ki tarah nahi, balki ek defense lawyer (vakeel) ki tarah sochta hai: wo un baaton ko sach manta hai jo aapki purani soch se milti hain, aur ulti baaton ko ignore kar deta hai.',
    coreConcept: 'Confirmation bias hamare dimaag ki natural tendency hai jisme hum apne pasandeeda vicharon ke favour me data ikattha karte hain aur contrary facts ko dekhkar ignore kar dete hain.',
    summary60s: 'Dimaag ka impartial judge banne ke bajaye ek defense lawyer ki tarah act karna: Confirmation bias tab hota hai jab hamara dimaag sachai janne ke bajaye apne belief ko sahi sabit karne me lag jata hai. Hum wahi videos, articles aur WhatsApp forwards dekhte hain jo hamari baat ko support karein, jabki counter-evidence aate hi hum excuse dhundte hain.',
    quickTakeaways: [
      'Apne belief ko support karne wali baat par turant vishwas ho jata hai',
      'Opposite evidence dekhkar dimaag excuse ya kamiya dhundne lagta hai',
      'Social media algorithms hamari is aadat ko aur zyada amplify kar dete hain',
    ],

    whyItHappens: 'Dimaag ka energy bachane ka tareeqa aur cognitive dissonance (mental stress) se bachne ki koshish. Naye data ke sath core belief badalna dimaag ke liye bohot exhausting hota hai.',
    evolutionaryMechanism: 'Purane zamaane me tribal groups me sabke sath agree karna survival ke liye zaroori tha. Group se alag opinion rakhne par tribe se bahar nikal diye jane ka darr rehta tha.',

    howItWorks: 'Yeh teen levels par kaam karta hai: (1) Selective Search—sirf aise sawaal puchna jo aapki baat verify karein; (2) Selective Interpretation—neutral data ko bhi apne favour me dekhna; (3) Selective Memory—favourable results yaad rakhna aur fails bhool jana.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'Dimaag: Impartial Judge vs Defense Lawyer',
      description: 'Ek impartial judge pehle sare proofs dekhta hai; ek lawyer pehle verdict tay karta hai aur sirf supportive batoon ko court me pesh karta hai.',
      analogySideA: { label: 'Scientific Mind (Judge)', detail: 'Aise facts dhundta hai jo uski baat ko galat prove kar sakein.' },
      analogySideB: { label: 'Biased Mind (Lawyer)', detail: 'Opposite proof ko fake ya bikau bol kar dismiss karta hai.' },
    },

    researchSummary: '1960 me cognitive psychologist Peter Wason ne 2-4-6 rule experiment se prove kiya ki log hypothesis test karte waqt kabhi falsification nahi karte, sirf confirmation dhundte hain.',
    limitationsAndControversies: 'Online log ise sirf "bewakoofi" ya "malice" bolte hain, jabki research dikhati hai ki yeh har insaan ka automatic cognitive reflex hai. Clear feedback milne par log isse overcome kar sakte hain.',

    examples: [
      {
        id: 'cb_ex_01_hi',
        domain: 'personal_finance',
        displayOrder: 1,
        title: 'Doobte Huye Stock Me Hope',
        description: 'Ek investor ne ek stock liya jo 35% gir gaya. Loss cut karne ke bajaye wo YouTube par aise videos dhund raha hai jo stock ke 1000% jump karne ka daawa karein.',
        takeaway: 'Reality accept karne ke bajaye false reassurance dhundna financial loss karwata hai.',
      },
    ],
    scenarios: [
      {
        id: 'cb_scenario_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'WhatsApp Par Aayi "Desi Miracle" Dawa',
        narrativeContext: 'Ramesh Uncle ka manna hai ki subah 5 baje neem-haldi ka paani peene se high blood pressure 100% theek ho jata hai. Jab bhi unhe YouTube par koi video ya WhatsApp forward milta hai, wo turant family group me bhejte hain: "Dekho, sab doctors chhupa rahe the!"',
        biasInAction: 'Jab ek cardiologist unhe clinical research dikhate hain ki yeh blood pressure medication ka substitute nahi hai, to Ramesh Uncle bolte hain: "Doctor toh apna fayda dekhega hi", aur scientific research ko ignore kar dete hain.',
        optimalResponse: 'Pehle sochiye: Kya aap is information ko isliye maan rahe hain kyunki yeh sach hai, ya isliye kyunki yeh aasan aur comforting lagti hai? Medical decisions hamesha verified clinical trials par lijiye.',
        reflectionPrompt: 'Kya aapne kabhi kisi important decision me isliye opposite advice reject ki kyunki aap already man bana chuke the?',
      },
    ],

    howToRecognize: 'Apne andar ka emotion notice karein: Jab kisi aisi news ko dekhkar turant maza aaye jo aapke opposite party ko galat bataye, ya jab contrary data dekhkar gussa aaye, to samjhein confirmation bias active hai.',
    whereYouEncounterIt: 'WhatsApp family groups, stock trading groups, health remedies aur elections ke time.',

    commonMisconceptions: 'Galat faimi: "Yeh sirf kam padhe-likhe logo ke sath hota hai." Sachai: Research batati hai ki zyada padhe-likhe log apne biases ko aur zyada intelligent logic se justify kar lete hain.',

    howToRespond: 'Apne aap se poochein: "Aisa kaun sa proof hai jisko dekhkar mai accept karunga ki mai galat tha?"',
    psychologicalDefenses: [
      { title: 'Red Teaming', instruction: 'Bada decision lene se pehle 3 genuine reasons likhein ki aapki baat galat kyu ho sakti hai.' },
      { title: 'Falsification Metric', instruction: 'Pehle se decide karein ki kaunse data par aap apna opinion change karenge.' },
      { title: 'Identity ko Belief se Alag Rakho', instruction: 'Opinions ko experiments samjhein, apni shaan ya ego nahi.' },
    ],

    practiceQuestions: [
      {
        id: 'cb_q_01',
        difficulty: 'beginner',
        questionFormat: 'identify_bias',
        displayOrder: 1,
        prompt: 'Inme se kaunsa investor behavior Confirmation Bias ka sabse bada example hai?',
        scenarioText: 'Ek investor ne ek article padh kar Company Z ke shares buy kiye.',
        explanation: 'Sirf aisi communities me rehna jo company ki taareef karein aur debt warning dene walo ko block karna confirmation bias ka clearest symptom hai.',
        antidoteAdvice: 'Kisi bhi stock ya asset me invest karne se pehle uski sabse strong bear-case (risk) report padhein.',
        options: [
          {
            id: 'cb_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Invest karne se pehle company ke positive aur negative dono financial reports dhyan se padhna.',
            feedbackText: 'Galat. Yeh balanced thinking hai jo confirmation bias ko rokti hai.',
          },
          {
            id: 'cb_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Sirf un Telegram/YouTube channels me rehna jo Company Z ki tareef karte hain, aur loss ki baat karne walo ko unfollow karna.',
            feedbackText: 'Sahi! Yeh counter-evidence ko ignore karke apne belief ko force feed karna hai.',
          },
          {
            id: 'cb_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Pehle se ek stop-loss set karna taaki stock girne par automatic sell ho jaye.',
            feedbackText: 'Galat. Yeh ek rational risk management strategy hai.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Aapka koi aisa belief jisme aap 100% sure hain: agar kal subah koi scientific research use galat prove kare, kya aap apna mind badal payenge?',
    sections: [],
    references: [
      {
        id: 'cb_ref_01',
        citation: 'Wason, P. C. (1960). On the failure to eliminate hypotheses in a conceptual task. Quarterly Journal of Experimental Psychology, 12(3), 129–140.',
        authors: 'Peter C. Wason',
        publicationYear: 1960,
        journalOrPublisher: 'Quarterly Journal of Experimental Psychology',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        displayOrder: 1,
      },
    ],
    tags: ['Cognitive Bias', 'Decision Making', 'Critical Thinking'],
    relatedTopics: [
      {
        topicId: 'anchoring_effect',
        slug: 'anchoring-effect',
        title: 'Anchoring Effect',
        relationshipType: 'amplified_by',
      },
    ],
    seoTitle: 'Confirmation Bias Kya Hai? Scientific Explanation & Defenses | Mentalab Mind',
    seoDescription: 'Confirmation bias kyu hota hai aur kaise WhatsApp forwards aur social media par hum galat decisions lete hain. Seekhein 3 mental defenses.',
    canonicalUrl: '/mind/cognitive-biases/confirmation-bias',
    ogImageUrl: '/images/mind/confirmation-bias.png',
    publishedAt: '2026-09-01T00:00:00Z',
    deepExplanation: 'Confirmation bias teen tareeqo se kaam karta hai: Selective Search, Selective Interpretation, aur Selective Memory.',
  },
  hi: {
    id: 'confirmation_bias',
    categoryId: 'cognitive_biases',
    slug: 'confirmation-bias',
    difficulty: 'beginner',
    estimatedReadingMinutes: 4,
    scientificConsensusTier: 'established',
    sortWeight: 1,
    viewCount: 1840,
    shareCount: 124,
    bookmarkCount: 312,
    title: 'Confirmation Bias (कन्फर्मेशन बायस)',
    subtitle: 'हम वही क्यों ढूँढते हैं जो हम पहले से मानते हैं?',
    shortDescription: 'अपने पहले से बने विचारों को सही साबित करने वाली जानकारी को चुनना और विपरीत प्रमाणों को अनदेखा कर देना।',
    oneLineExplanation: 'दिमाग का निष्पक्ष जज बनने के बजाय एक डिफेंस वकील की तरह काम करना।',

    summary30s: 'हमारा दिमाग निष्पक्ष जज बनने के बजाय एक डिफेंस वकील की तरह काम करता है: यह उन बातों को ढूँढता है जो आपके पहले से बने यकीन को सही ठहराएँ, और विरोधी सबूतों को खारिज कर देता है।',
    coreConcept: 'Confirmation bias एक स्वाभाविक कॉग्निटिव शॉर्टकट है जहाँ हमारा दिमाग उन तथ्यों को ज्यादा तवज्जो देता है जो हमारे मौजूदा विचारों से मेल खाते हैं, जबकि विपरीत प्रमाणों को या तो नजरअंदाज कर देता है या उन पर अत्यधिक संदेह करता है।',
    summary60s: 'सोचिए जब आप कोई राय बना लेते हैं—चाहे शेयर बाजार, डाइट या किसी व्यक्ति के बारे में—तो आपका दिमाग उसे सही साबित करने वाली बात सुनकर सुकून महसूस करता है। विरोधी बातें हल्का मानसिक तनाव (cognitive dissonance) पैदा करती हैं। इसलिए हमारी सर्च हिस्ट्री और बातचीत सच ढूँढने के बजाय खुद को सही साबित करने में लग जाती है।',
    quickTakeaways: [
      'हम अपने विचारों का समर्थन करने वाले सबूत ढूँढते हैं और विपरीत तथ्यों को अनदेखा करते हैं',
      'तटस्थ या अस्पष्ट जानकारी को भी हम अपने पक्ष में मान लेते हैं',
      'ज्यादा बुद्धिमान होना इससे नहीं बचाता; अक्सर समझदार लोग अपने पक्षपातों को और चालाकी से सही ठहराते हैं',
    ],

    whyItHappens: 'मानसिक ऊर्जा की बचत (cognitive economy) और पहचान की रक्षा (identity preservation)। किसी बुनियादी यकीन को बदलना दिमाग के लिए बहुत थकाऊ होता है।',
    evolutionaryMechanism: 'प्रागैतिहासिक काल में कबीले की सहमति शारीरिक सुरक्षा के लिए अनिवार्य थी। हर नए डेटा पर विश्वास बदलने से कबीले से अलग होने का खतरा रहता था।',

    howItWorks: 'यह तीन मानसिक स्तरों पर काम करता है: Selective Search (केवल अपने पक्ष की बातें खोजना), Selective Interpretation (अस्पष्ट डेटा को अपने पक्ष में मानना), और Selective Recall (अपनी सफलताओं को याद रखना और गलतियों को भूल जाना)।',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'निष्पक्ष जज बनाम डिफेंस वकील',
      description: 'सच्चाई खोजने वाले दिमाग और सिर्फ खुद को सही साबित करने वाले दिमाग का अंतर।',
      analogySideA: { label: 'वैज्ञानिक सोच (जज)', detail: 'पहले सारे सबूत जुटाता है, फिर फैसला लेता है।' },
      analogySideB: { label: 'बायस्ड सोच (वकील)', detail: 'फैसला पहले से तय होता है, केवल समर्थन वाले सबूत ढूँढता है।' },
    },

    researchSummary: 'पीटर वासन (1960) ने 2-4-6 रूल डिस्कवरी टास्क के जरिए इसे औपचारिक रूप से साबित किया। उन्होंने दिखाया कि लोग अपने नियम को गलत साबित करने के बजाय केवल उसे कन्फर्म करने वाले नंबर टेस्ट करते हैं।',
    limitationsAndControversies: 'रिसर्च यह भी बताती है कि जब गलत निर्णय लेने पर तत्काल व्यक्तिगत नुकसान होता है (जैसे मेडिकल सर्जरी या जोखिम भरी ड्राइविंग), तब लोग ज्यादा निष्पक्ष होकर सोचते हैं।',

    examples: [
      {
        id: 'cb_ex_01',
        domain: 'health',
        displayOrder: 1,
        title: 'अवैज्ञानिक डाइट और नुस्खे',
        description: 'किसी नई डाइट पर यकीन करने वाला व्यक्ति केवल उन 2 लोगों के अनुभव सुनता है जिनका वजन घटा, और उन 10 लोगों को नजरअंदाज कर देता है जिन्हें कोई फायदा नहीं हुआ।',
        takeaway: 'सकारात्मक नतीजों पर ध्यान केंद्रित करना और विफलता को छुपाना।',
      },
      {
        id: 'cb_ex_02',
        domain: 'personal_finance',
        displayOrder: 2,
        title: 'शेयर बाजार और इन्वेस्टमेंट',
        description: 'शेयर खरीदने के बाद केवल कंपनी की तारीफ करने वाले वीडियो देखना और कर्ज़ की चेतावनी देने वाले एनालिस्ट को ब्लॉक कर देना।',
        takeaway: 'पैसों के नुकसान से बचने के लिए बियर-केस (जोखिम) रिपोर्ट पढ़ना जरूरी है।',
      },
    ],

    scenarios: [
      {
        id: 'cb000000-0000-0000-0000-000000000001',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'व्हाट्सएप का "देसी चमत्कारिक इलाज"',
        narrativeContext: 'रमेश अंकल का मानना है कि सुबह 5 बजे हल्दी-नीम का पानी पीने से हाई ब्लड प्रेशर पूरी तरह ठीक हो जाता है। जब भी उन्हें कोई ऐसा व्हाट्सएप फॉरवर्ड मिलता है, वे तुरंत परिवार के ग्रुप में भेजते हैं: "देखिए, डॉक्टर यह कभी नहीं बताएंगे!"',
        biasInAction: 'जब एक हृदय रोग विशेषज्ञ (cardiologist) उन्हें बताते हैं कि यह दवा का विकल्प नहीं है, तो रमेश अंकल कहते हैं कि "डॉक्टर तो अपनी कमाई सोचेंगे", और वैज्ञानिक रिसर्च को ठुकरा देते हैं।',
        optimalResponse: 'सोचिए: क्या आप इस बात पर इसलिए यकीन कर रहे हैं क्योंकि यह सच है, या इसलिए क्योंकि यह सुनने में आसान और सुकून देने वाली लगती है? मेडिकल फैसले हमेशा क्लिनिकल ट्रायल्स पर आधारित होने चाहिए।',
        reflectionPrompt: 'क्या आपने कभी किसी महत्वपूर्ण विषय में विरोधी सलाह इसलिए ठुकरा दी क्योंकि आपका मन पहले से बना हुआ था?',
      },
    ],

    howToRecognize: [
      'जब आप किसी खबर को देखते ही बिना चेक किए आगे शेयर कर देते हैं',
      'जब विरोधी विचार सुनते ही आपको अंदर से गुस्सा या चिढ़ होने लगती है',
      'जब आप केवल अपने जैसे विचार रखने वाले लोगों से ही बातचीत करते हैं',
    ],
    whereYouEncounterIt: 'सोशल मीडिया फीड्स, व्हाट्सएप फैमिली ग्रुप्स, निवेश के फैसले, और चुनाव से जुड़ी बहस में।',

    commonMisconceptions: 'भ्रम: यह केवल अनपढ़ या कम पढ़े-लिखे लोगों के साथ होता है। हकीकत: शोध दिखाता है कि उच्च बुद्धि वाले लोग अपने पक्षपातों को और जटिल तर्कों के साथ सही ठहरा लेते हैं।',

    howToRespond: 'जब भी किसी मुद्दे पर पक्का यकीन हो, खुद से पूछें: "ऐसा कौन सा सबूत होगा जिसके मिलने पर मैं अपनी राय बदल लूँगा?" अगर कोई सबूत आपकी राय नहीं बदल सकता, तो आप सोच नहीं रहे, सिर्फ यकीन कर रहे हैं।',
    psychologicalDefenses: [
      {
        title: 'रेड टीमिंग (Red Teaming)',
        instruction: 'बड़ा फैसला लेने से पहले कागज पर 3 मजबूत कारण लिखें कि आपका फैसला पूरी तरह गलत क्यों हो सकता है।',
      },
      {
        title: 'अहंकार को विचारों से अलग रखें',
        instruction: 'अपने विचारों को वैज्ञानिक परिकल्पना (hypotheses) समझें जिन्हें नए सबूत मिलने पर बदला जा सकता है।',
      },
      {
        title: 'गलत साबित होने का टेस्ट',
        instruction: 'खुद से पूछें: ऐसा कौन सा सबूत होगा जिसके मिलने पर मैं अपनी राय बदल लूँगा? यदि कोई सबूत राय नहीं बदल सकता, तो आप सोच नहीं रहे।',
      },
    ],

    practiceQuestions: [
      {
        id: 'cb000000-0000-0000-0000-000000000010',
        difficulty: 'intermediate',
        questionFormat: 'scenario_analysis',
        displayOrder: 1,
        prompt: 'इनमें से कौन सा निवेशक व्यवहार Confirmation Bias का सबसे स्पष्ट उदाहरण है?',
        scenarioText: 'एक खुदरा निवेशक किसी कंपनी के शेयर खरीदने के बाद रिसर्च कर रहा है।',
        explanation: 'केवल प्रशंसा करने वाले ग्रुप्स में रहना और चेतावनी देने वालों को ब्लॉक करना कन्फर्मेशन बायस का क्लासिक लक्षण है।',
        antidoteAdvice: 'निवेश करने से पहले हमेशा उस कंपनी की सबसे मजबूत जोखिम रिपोर्ट (bear case) पढ़ें।',
        options: [
          {
            id: 'cb000000-0000-0000-0000-000000000021',
            displayOrder: 1,
            isCorrect: false,
            optionText: 'निवेश करने से पहले कंपनी की तिमाही रिपोर्ट में फायदे और नुकसान दोनों की निष्पक्ष जाँच करना।',
            feedbackText: 'गलत। यह एक संतुलित और निष्पक्ष तरीका है जो पक्षपात को रोकता है।',
          },
          {
            id: 'cb000000-0000-0000-0000-000000000022',
            displayOrder: 2,
            isCorrect: true,
            optionText: 'केवल उन सोशल मीडिया ग्रुप्स में शामिल होना जो कंपनी की तारीफ करते हैं, और कर्ज की बात करने वालों को ब्लॉक करना।',
            feedbackText: 'सही! यह विरोधी सबूतों को जानबूझकर नजरअंदाज करके अपने पहले से बने विश्वास को बनाए रखने का प्रयास है।',
          },
          {
            id: 'cb000000-0000-0000-0000-000000000023',
            displayOrder: 3,
            isCorrect: false,
            optionText: 'कीमत गिरने पर नुकसान सीमित करने के लिए पहले से स्टॉप-लॉस ऑर्डर सेट करना।',
            feedbackText: 'गलत। यह एक अनुशासित जोखिम प्रबंधन रणनीति है।',
          },
        ],
      },
    ],

    reflectionPrompt: 'क्या आपने कभी किसी महत्वपूर्ण निर्णय में विरोधी सलाह इसलिए ठुकरा दी क्योंकि आपका मन पहले से बना हुआ था?',

    sections: [],
    references: [
      {
        id: 'cb_ref_01',
        title: 'On the failure to eliminate hypotheses in a conceptual task',
        authors: 'Wason, P. C.',
        publicationYear: 1960,
        journalOrPublisher: 'Quarterly Journal of Experimental Psychology',
        citation: 'Wason, P. C. (1960). On the failure to eliminate hypotheses in a conceptual task. Quarterly Journal of Experimental Psychology, 12(3), 129–140.',
        doiOrUrl: 'https://doi.org/10.1080/17470216008416717',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        consensusStatus: 'established',
        relevance: 'Confirmation bias का पहला औपचारिक प्रायोगिक प्रदर्शन।',
        displayOrder: 1,
      },
    ],
    tags: ['Cognitive Bias', 'Decision Making', 'Critical Thinking'],
    relatedTopics: [
      {
        topicId: 'anchoring_effect',
        slug: 'anchoring-effect',
        title: 'Anchoring Effect',
        relationshipType: 'amplified_by',
      },
    ],
    seoTitle: 'Confirmation Bias Kya Hai? Hindi Guide | Mentalab Mind',
    seoDescription: 'Confirmation bias ki scientific jankari aur 3 practical cognitive defenses Hindi me.',
    canonicalUrl: '/mind/cognitive-biases/confirmation-bias',
    ogImageUrl: '/images/mind/confirmation-bias.png',
    publishedAt: '2026-09-01T00:00:00Z',
    deepExplanation: 'कन्फर्मेशन बायस मानव मस्तिष्क का एक प्राकृतिक झुकाव है।',
  },
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

// ============================================================================
// TOPIC 2: GASLIGHTING & REALITY DISTORTION (Manipulation Awareness)
// Essential: "Context Matters" — distinguishing intentional malice from misunderstandings
// ============================================================================

export const TOPIC_GASLIGHTING_AWARENESS: Record<MindLanguageCode, MindTopicDetail> = {
  en: {
    id: 'gaslighting_awareness',
    categoryId: 'manipulation_awareness',
    slug: 'gaslighting-awareness',
    difficulty: 'intermediate',
    estimatedReadingMinutes: 5,
    scientificConsensusTier: 'established',
    sortWeight: 2,
    viewCount: 2410,
    shareCount: 310,
    bookmarkCount: 420,
    title: 'Gaslighting & Reality Distortion',
    subtitle: 'Recognizing psychological manipulation vs. honest conflict',
    shortDescription: 'A covert pattern where one party repeatedly undermines another person\'s perception of reality, memory, or sanity to maintain relational control.',
    oneLineExplanation: 'Making someone doubt their own senses, memory, or sanity through chronic denial and narrative rewrites.',

    summary30s: 'Gaslighting is not just a disagreement or someone forgetting details. It is a chronic pattern where someone repeatedly makes you question your own memory, perception, and sanity to escape accountability.',
    coreConcept: 'Gaslighting is not a single heated argument or someone disagreeing with your memory. It is a persistent, chronic pattern of communication designed to erode a person\'s confidence in their own perceptions so they become dependent on the manipulator\'s version of reality.',
    summary60s: 'If someone genuinely forgot a conversation, that is human fallibility. But if someone routinely tells you "That never happened, you are imagining things, you are crazy," whenever you address broken agreements, reality is being actively distorted to escape accountability.',
    quickTakeaways: [
      'Disagreement is NOT gaslighting: two people can genuinely remember an event differently',
      'Gaslighting requires a persistent power dynamic and systematic reality denial',
      'The antidote is grounded documentation and external reality checks, not endless debates',
    ],

    whyItHappens: 'Defense against accountability, profound fear of vulnerability, or a desire for relational dominance. When admitting fault would shatter a person\'s fragile self-image, rewriting the history of the event is their psychological defense mechanism.',
    evolutionaryMechanism: 'Social deception and coalition manipulation have long existed as high-risk, high-reward strategies to avoid tribal sanctions while preserving status.',

    howItWorks: 'It typically unfolds in stages: (1) Subtle denial ("I never said that"); (2) Pathologizing emotion ("You are overreacting because you are too sensitive"); (3) Isolation ("Everyone else agrees with me, nobody believes you"); (4) Self-doubt—the victim begins questioning their own sanity.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'Honest Disagreement vs. Systematic Gaslighting',
      description: 'Understanding the crucial boundary between normal relationship conflict and manipulative reality erosion.',
      analogySideA: { label: 'Normal Conflict', detail: '"I remember it differently. Here is what I recall, but let\'s check notes."' },
      analogySideB: { label: 'Gaslighting Pattern', detail: '"You are crazy, you always make up stories. No wonder nobody trusts your memory."' },
    },

    researchSummary: 'First clinically documented in communication studies by Barton & Whitehead (1969), and popularized in relational psychology by Dr. Robin Stern (The Gaslight Effect, 2007). Research emphasizes that it operates through gradual attrition rather than sudden shocks.',
    limitationsAndControversies: 'CRITICAL LIMITATION: On modern social media, the term "gaslighting" has suffered severe concept creep. People frequently label any simple disagreement or memory discrepancy as "abuse". Clinical psychology stresses: poor communication, defensiveness, and accidental misremembering are NOT gaslighting. Context and systematic intent matter.',

    examples: [
      {
        id: 'gl_ex_01',
        domain: 'workplace',
        displayOrder: 1,
        title: 'The Shifted Project Scope',
        description: 'A manager verbally promises an employee a promotion if they finish a project by Friday. On Monday, the manager claims: "I never said that. You completely misunderstood. You have an overactive imagination."',
        takeaway: 'Verbal ambiguity enables reality rewrites. Documenting key agreements via follow-up email neutralizes the tactic.',
      },
    ],
    scenarios: [
      {
        id: 'gl_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'The Joint Family Expense Dispute',
        narrativeContext: 'Pooja agreed to contribute ₹30,000 for a family celebration on the explicit condition that it was a one-time emergency. Two months later, her sister-in-law demands another ₹30,000. When Pooja politely reminds her of the boundary, the family responds: "Nobody ever said it was one-time! You are making things up to create drama. Why do you always divide the family?"',
        biasInAction: 'The family rewrites the recorded verbal pact and attacks Pooja\'s character rather than honoring the financial agreement.',
        optimalResponse: 'Do not enter into a circular debate over your sanity. Calmly state: "I know what I agreed to. My boundary stands, and I will not be financing further events." Disengage from the argument.',
        reflectionPrompt: 'Have you ever started doubting what you saw or heard with your own eyes just because a dominant person repeated with confidence that you were mistaken?',
      },
    ],

    howToRecognize: 'The telltale internal feeling is "second-guessing vertigo": You find yourself apologizing constantly, feeling like you can no longer trust your own memory, or recording audio notes secretly just to verify you aren\'t losing your mind.',
    whereYouEncounterIt: 'High-conflict domestic relationships, predatory sales setups, authoritarian management hierarchies.',

    commonMisconceptions: 'Misconception: "If someone disagrees with my feeling, they are gaslighting me." Fact: People are allowed to disagree with your interpretation of events without being manipulative.',

    howToRespond: 'Exit the circular courtroom. Stop trying to convince the manipulator to acknowledge reality. Anchor yourself with third-party verification, contemporaneous written notes, and emotional distance.',
    psychologicalDefenses: [
      { title: 'The Memo Strategy', instruction: 'After verbal agreements, send a polite summary email: "As discussed today, our agreement is X." Creates an objective paper trail.' },
      { title: 'Disengage from the Sanity Debate', instruction: 'Refuse to argue about whether you are "too sensitive". Respond: "You can disagree with my memory, but my decision remains."' },
      { title: 'Reality Anchor Support', instruction: 'Keep a trusted, grounded friend outside the relationship to reality-test confusing interactions.' },
    ],

    practiceQuestions: [
      {
        id: 'gl_q_01',
        difficulty: 'intermediate',
        questionFormat: 'misconception_detection',
        displayOrder: 1,
        prompt: 'Which scenario represents genuine Gaslighting rather than a normal communication mistake?',
        scenarioText: 'Compare the following two interpersonal friction incidents.',
        explanation: 'Chronic reality denial coupled with attacks on the victim\'s sanity ("you are crazy, you always imagine things") to escape accountability is the hallmark of gaslighting.',
        antidoteAdvice: 'Distinguish between someone defending their memory vs. someone systematically demolishing yours.',
        options: [
          {
            id: 'gl_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'A partner says: "I honestly thought you said 7:00 PM, not 6:00 PM. I am sorry, my mistake."',
            feedbackText: 'Incorrect. This is an honest, normal human memory discrepancy with accountability.',
          },
          {
            id: 'gl_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'A colleague breaks a verbal commitment and repeatedly tells you: "You are paranoid and mentally unstable, nobody can work with your delusions."',
            feedbackText: 'Correct! This pathologizes the victim\'s sanity to deflect legitimate accountability.',
          },
          {
            id: 'gl_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Two friends disagree strongly over which movie had the better ending.',
            feedbackText: 'Incorrect. Subjective aesthetic debate is not manipulation.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Can you recall a conflict where someone genuinely misremembered something versus a time someone aggressively made you feel crazy for noticing the truth?',
    sections: [],
    references: [
      {
        id: 'gl_ref_01',
        title: 'The Gaslight Effect: How to Spot and Survive the Hidden Manipulation Others Use to Control Your Life',
        citation: 'Stern, R. (2007). The Gaslight Effect: How to Spot and Survive the Hidden Manipulation Others Use to Control Your Life. Harmony Books.',
        authors: 'Robin Stern',
        publicationYear: 2007,
        journalOrPublisher: 'Harmony Books',
        sourceType: 'academic_textbook',
        evidenceStrength: 'foundational_book',
        doiOrUrl: 'https://www.penguinrandomhouse.com/books/173003/the-gaslight-effect-by-dr-robin-stern/',
        relevance: 'Clinical and relational framework identifying the 3 stages of gaslighting and reality erosion.',
        displayOrder: 1,
      },
      {
        id: 'gl_ref_02',
        title: 'The sociology of gaslighting',
        citation: 'Sweet, P. L. (2019). The sociology of gaslighting. American Sociological Review, 84(5), 851–875.',
        authors: 'Paige L. Sweet',
        publicationYear: 2019,
        journalOrPublisher: 'American Sociological Review',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'empirical_study',
        doiOrUrl: 'https://doi.org/10.1177/0003122419874843',
        relevance: 'Peer-reviewed sociological study on structural inequalities and micro-level interpersonal reality distortion.',
        displayOrder: 2,
      },
    ],
    tags: ['Manipulation Awareness', 'Communication', 'Boundaries'],
    relatedTopics: [
      {
        topicId: 'healthy_boundaries',
        slug: 'healthy-boundaries',
        title: 'Healthy Boundaries',
        relationshipType: 'counteracted_by',
      },
    ],
    seoTitle: 'What is Gaslighting? Psychological Mechanisms vs Normal Conflict | Mentalab Mind',
    seoDescription: 'Learn the scientific definition of gaslighting, how to differentiate it from normal disagreement, and 3 communication shields.',
    canonicalUrl: '/mind/manipulation-awareness/gaslighting-awareness',
    ogImageUrl: '/images/mind/gaslighting-awareness.png',
    publishedAt: '2026-09-05T00:00:00Z',
    deepExplanation: 'Gaslighting operates through insidious power dynamics where memory, perception, and emotional sanity are eroded systematically.',
  },
  hinglish: {
    id: 'gaslighting_awareness',
    categoryId: 'manipulation_awareness',
    slug: 'gaslighting-awareness',
    difficulty: 'intermediate',
    estimatedReadingMinutes: 5,
    scientificConsensusTier: 'established',
    sortWeight: 2,
    viewCount: 2410,
    shareCount: 310,
    bookmarkCount: 420,
    title: 'Gaslighting & Reality Distortion',
    subtitle: 'Psychological manipulation aur normal disagreement me farq samjhein',
    shortDescription: 'Ek aisa manipulation pattern jisme doosra insaan aapki memory, perception ya sanity par baar-baar shak karwata hai taaki accountability se bach sake.',
    oneLineExplanation: 'Aapko yeh feel karwana ki aap pagal hain ya sab kuch imagine kar rahe hain.',

    summary30s: 'Gaslighting sirf ek ladai ya baat bhool jana nahi hai. Yeh ek lagataar pattern hai jisme koi aapko baar-baar jhootha ya "paagal" keh kar aapki apni memory aur reality par shaq karwata hai.',
    coreConcept: 'Gaslighting koi chhota argument ya bhool jana nahi hai. Yeh ek deliberate aur repetitive tareeqa hai jisme samne wala aapko galat prove karne ke liye events ki reality ko hi badal deta hai.',
    summary60s: 'Agar koi baat bhool gaya, to yeh insani fitrat hai. Lekin agar koi har baar bole: "Maine aisa kabhi nahi bola, tum pagal ho, tumhara dimag kharab ho gaya hai," to yeh manipulation hai taaki unhe apni galti na manni pade.',
    quickTakeaways: [
      'Normal disagreement gaslighting nahi hota: do log ek baat ko alag tareeqe se yaad rakh sakte hain',
      'Gaslighting me samne wala aapki mental sanity par attack karta hai',
      'Iska solution behes karna nahi, balki written documentation aur calm boundaries hain',
    ],

    whyItHappens: 'Apni galti accept na karne ka darr aur ego preservation. Jab kisi insaan ki self-image itni kamzor ho ki wo galti nahi maan sakta, to wo puri situation ko hi jhooth bana deta hai.',
    evolutionaryMechanism: 'Social deception aur status bachane ke purane psychological patterns.',

    howItWorks: 'Yeh step-by-step hota hai: Pehle direct inkar ("Maine aisa nahi bola"), phir emotion ko mock karna ("Tum zyada hi sensitive ho"), aur aakhir me self-doubt create karna.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'Normal Disagreement vs. Gaslighting',
      description: 'Misunderstanding aur reality manipulation ke beech ka farq.',
      analogySideA: { label: 'Normal Conflict', detail: '"Mujhe lagta hai baat kuch aur thi. Chalo milkar clarify karte hain."' },
      analogySideB: { label: 'Gaslighting Pattern', detail: '"Tum hamesha kisse banate ho. Koi tumhari baat par vishwas nahi karta."' },
    },

    researchSummary: 'Dr. Robin Stern ki 2007 ki landmark research "The Gaslight Effect" ne dikhaya ki kaise log reality distortion ke chalte clinical depression aur self-doubt me chale jate hain.',
    limitationsAndControversies: 'IMPORTANT: Social media par har choti ladai ko log "gaslighting" bol dete hain. Clinical psychology bolti hai ki agar koi genuinely bhool gaya ya uska point of view alag hai, to use gaslighting mat bolo. Context aur intent sabse zaroori hai.',

    examples: [
      {
        id: 'gl_ex_01_hi',
        domain: 'workplace',
        displayOrder: 1,
        title: 'Office Ka Mukra Hua Wada',
        description: 'Boss ne bola tha ki project khatam hone par bonus milega. Baad me bolte hain: "Maine to aisa kabhi nahi kaha, tum sapne dekh rahe the."',
        takeaway: 'Verbal batoon ke bajaye hamesha email par written confirmation rakhein.',
      },
    ],
    scenarios: [
      {
        id: 'gl_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'Joint Family Kharcha Dispute',
        narrativeContext: 'Pooja ne family function ke liye ₹30,000 is shart par diye the ki yeh aakhri baar hai. Do mahine baad jab fir paise maange gaye aur usne mana kiya, to sabne bola: "Aisa kisne kaha tha? Tum family ko todna chahti ho!"',
        biasInAction: 'Purane verbal commitment ko jhootha bol kar Pooja ko guilty feel karwaya ja raha hai.',
        optimalResponse: 'Behes mat karein. Calmly bolein: "Mujhe pata hai maine kya bola tha. Mera decision final hai."',
        reflectionPrompt: 'Kya kabhi kisi ne itne confidence se jhooth bola ki aapko laga ki shayad aap hi galat the?',
      },
    ],

    howToRecognize: 'Agar aap har baat par samne wale se maafi maangne lagein aur har decision me lagne lage ki aapki hi memory kharab hai, to alert ho jaiye.',
    whereYouEncounterIt: 'Toxic relationships, passive-aggressive office dynamics aur family politics.',

    commonMisconceptions: 'Myth: "Agar koi meri baat se agree nahi karta to wo gaslighting kar raha hai." Fact: Logo ko aapke opinion se disagree karne ka pura haq hai.',

    howToRespond: 'Apni memory par trust karein. Samne wale ko yeh convince karne ki koshish chhod dein ki reality kya thi.',
    psychologicalDefenses: [
      { title: 'The Written Memo', instruction: 'Badi batoon ke baad message bhej dein: "Humne jo baat ki uske mutabiq yeh tay hua hai."' },
      { title: 'Don\'t Debate Sanity', instruction: '"Tum mujhe sensitive bol sakte ho, lekin mera decision change nahi hoga."' },
      { title: 'Reality Anchor Friend', instruction: 'Ek aisa dost rakhein jo aapko unbiased feedback de sake.' },
    ],

    practiceQuestions: [
      {
        id: 'gl_q_01',
        difficulty: 'intermediate',
        questionFormat: 'misconception_detection',
        displayOrder: 1,
        prompt: 'Inme se kaunsi situation genuine Gaslighting hai na ki ek aam misunderstanding?',
        scenarioText: 'Neeche diye gaye options ko dhyan se padhein.',
        explanation: 'Jab koi samne wale ke dimag aur sanity par attack kare ("tum pagal ho") taaki accountability se bache, to wo gaslighting hai.',
        antidoteAdvice: 'Normal bhool aur deliberate manipulation me farq samjhein.',
        options: [
          {
            id: 'gl_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Dost bolta hai: "Mujhe laga meeting 7 baje hai, sorry galti ho gayi."',
            feedbackText: 'Galat. Yeh ek normal human memory slip hai.',
          },
          {
            id: 'gl_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Colleague wada tod kar bolta hai: "Tumhara dimag kharab hai, tum hamesha man-ghadant baatein banate ho."',
            feedbackText: 'Sahi! Yeh accountability se bachne ke liye reality deny kar raha hai.',
          },
          {
            id: 'gl_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Do log is baat par debate karte hain ki kaunsa phone behtar hai.',
            feedbackText: 'Galat. Yeh subjective opinion hai, manipulation nahi.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Kya aapke sath kabhi aisa hua hai jab aapne written proof dekhkar realize kiya ki samne wala jhooth bol raha tha?',
    sections: [],
    references: [
      {
        id: 'gl_ref_01',
        title: 'The Gaslight Effect: How to Spot and Survive the Hidden Manipulation Others Use to Control Your Life',
        citation: 'Stern, R. (2007). The Gaslight Effect. Harmony Books.',
        authors: 'Robin Stern',
        publicationYear: 2007,
        journalOrPublisher: 'Harmony Books',
        sourceType: 'academic_textbook',
        evidenceStrength: 'foundational_book',
        doiOrUrl: 'https://www.penguinrandomhouse.com/books/173003/the-gaslight-effect-by-dr-robin-stern/',
        relevance: 'Gaslighting dynamics aur emotional sanity par clinical guide.',
        displayOrder: 1,
      },
    ],
    tags: ['Manipulation Awareness', 'Communication', 'Boundaries'],
    relatedTopics: [],
    seoTitle: 'Gaslighting Kya Hai? Manipulation vs Misunderstanding | Mentalab Mind',
    seoDescription: 'Gaslighting aur aam jhagde me farq samjhein aur seekhein 3 psychological defenses.',
    canonicalUrl: '/mind/manipulation-awareness/gaslighting-awareness',
    ogImageUrl: '/images/mind/gaslighting-awareness.png',
    publishedAt: '2026-09-05T00:00:00Z',
    deepExplanation: 'Gaslighting ek chronic psychological dynamic hai jisme victims apni memory aur sanity par doubt karne lagte hain.',
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

// ============================================================================
// TOPIC 3: RETRIEVAL PRACTICE & SPACING (Learning Psychology)
// Deep bridge with Mentalab calculation mastery
// ============================================================================

export const TOPIC_RETRIEVAL_PRACTICE: Record<MindLanguageCode, MindTopicDetail> = {
  en: {
    id: 'retrieval_practice',
    categoryId: 'learning_psychology',
    slug: 'retrieval-practice-and-spacing',
    difficulty: 'beginner',
    estimatedReadingMinutes: 4,
    scientificConsensusTier: 'established',
    sortWeight: 3,
    viewCount: 3120,
    shareCount: 450,
    bookmarkCount: 680,
    title: 'Retrieval Practice & The Testing Effect',
    subtitle: 'Why testing your memory builds stronger brain circuits than re-reading',
    shortDescription: 'The cognitive science of active memory retrieval: extracting information from your brain strengthens neural pathways far more than repeatedly reviewing notes.',
    oneLineExplanation: 'Testing is not a measurement of learning; testing IS the learning mechanism.',

    summary30s: 'Re-reading a page gives you the false illusion of knowing it. Pulling information out of your own memory through active recall is what actually builds durable brain connections.',
    coreConcept: 'Most students re-read textbooks and highlight notes, creating the "fluency illusion"—the false feeling that because something looks familiar on the page, it is mastered in memory. Cognitive psychology proves that the physical act of pulling an answer out of your head (retrieval) rewires synaptic connections for long-term retention.',
    summary60s: 'When you read 7 × 8 = 56, your brain is passive. But when you are shown 7 × 8 = ? and forced to retrieve 56 without looking, your hippocampus and prefrontal cortex construct durable neural traces. This is the exact scientific engine behind Mentalab speed calculations.',
    quickTakeaways: [
      'Re-reading produces the illusion of competence; self-testing creates actual mastery',
      'The harder the retrieval effort (desirable difficulty), the longer the memory lasts',
      'Spacing your recall intervals over days prevents the natural decay of the forgetting curve',
    ],

    whyItHappens: 'Synaptic plasticity. The brain is an evolutionary conservation machine: it discards data you merely look at, but preserves data you actively retrieve under pressure because retrieval signals survival relevance.',
    evolutionaryMechanism: 'Foraging and navigation required recall without cues (e.g., remembering which landmark led to clean water without looking at a map).',

    howItWorks: 'During retrieval, memory pathways are reactivated and reconsolidated. Each successful retrieval creates multiple association routes, making future retrieval faster and less metabolically expensive.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'Passive Re-reading vs. Active Retrieval Drill',
      description: 'Why highlighting gives an illusion of knowing, while flashcards and active recall build calculation speed.',
      analogySideA: { label: 'Passive Highlighting', detail: 'Like watching someone else lift weights at the gym. Feels familiar, builds zero muscle.' },
      analogySideB: { label: 'Active Mental Drill (Mentalab)', detail: 'Physically lifting the barbell yourself. Tough in the moment, produces permanent strength.' },
    },

    researchSummary: 'Roediger & Karpicke (2006, Psychological Science) proved that students who spent 80% of study time testing themselves retained 50% more material after one week than students who spent 100% of their time re-reading.',
    limitationsAndControversies: 'Retrieval practice without immediate feedback can cement erroneous answers. Testing must always be paired with error correction to prevent fossilized calculation mistakes.',

    examples: [
      {
        id: 'rp_ex_01',
        domain: 'general',
        displayOrder: 1,
        title: 'Math Flashcards vs. Staring at Tables',
        description: 'A student who stares at the 17s multiplication table for 20 minutes forgets it the next morning. A student who uses Mentalab rapid-fire flash drills for 5 minutes retains it for weeks.',
        takeaway: 'Active retrieval is 400% more time-efficient than passive review.',
      },
    ],
    scenarios: [
      {
        id: 'rp_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'The Kota/UPSC Highlighting Trap',
        narrativeContext: 'Aarav is preparing for a competitive exam in Kota. He sits for 12 hours daily with neon highlighters, turning his chemistry and physics textbooks fluorescent pink. In mock exams, his mind goes completely blank on basic formulas.',
        biasInAction: 'Aarav confused visual recognition with retrieval mastery. His eyes recognized the highlighted lines, but his brain had never practiced pulling formulas out of thin air under time pressure.',
        optimalResponse: 'Close the textbook completely. Take a blank sheet of paper and write down the 5 core derivation steps from memory. Then verify errors immediately.',
        reflectionPrompt: 'When studying or learning a skill, what percentage of your time is spent passively reading vs. actively solving problems with closed books?',
      },
    ],

    howToRecognize: 'If you look at an answer key and think "Oh yeah, I totally knew that!", you have fallen into the fluency trap. If you didn\'t retrieve it independently before looking, you did not know it.',
    whereYouEncounterIt: 'Exam preparation, language learning, competitive exams (CAT, JEE, UPSC), mental calculation training.',

    commonMisconceptions: 'Common myth: "Tests are only useful for giving grades." Science: Tests are the most potent learning intervention discovered in 100 years of cognitive science.',

    howToRespond: 'Convert every study session into an active recall quiz. Use Leitner spaced flashcards or Mentalab arithmetic drills instead of re-reading charts.',
    psychologicalDefenses: [
      { title: 'The Blank Page Protocol', instruction: 'After reading any chapter, close it immediately and write 3 core takeaways from memory on a blank page.' },
      { title: 'Spaced Retrieval Schedules', instruction: 'Test yourself after 1 day, then 3 days, then 7 days, then 21 days to flatten the forgetting curve.' },
      { title: 'Immediate Error Diagnosis', instruction: 'Never skip reviewing errors. Misconceptions corrected within 10 seconds of recall produce the highest learning delta.' },
    ],

    practiceQuestions: [
      {
        id: 'rp_q_01',
        difficulty: 'beginner',
        questionFormat: 'choose_best_explanation',
        displayOrder: 1,
        prompt: 'Which study strategy will produce the highest long-term retention according to cognitive psychology?',
        scenarioText: 'You have 4 hours to master multiplication tables from 12 to 19.',
        explanation: 'Testing yourself actively (retrieval) with immediate error correction builds long-term memory far more effectively than passive re-reading.',
        antidoteAdvice: 'Replace 80% of your reading time with self-quizzing.',
        options: [
          {
            id: 'rp_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Reading the printed tables 10 times in a row with colored highlighters.',
            feedbackText: 'Incorrect. This creates the fluency illusion with rapid forgetting.',
          },
          {
            id: 'rp_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Doing 5-minute timed recall sprints on Mentalab with closed charts and immediate feedback.',
            feedbackText: 'Correct! Active retrieval forces synaptic consolidation.',
          },
          {
            id: 'rp_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Listening to an audio recording of tables while sleeping.',
            feedbackText: 'Incorrect. Sleep learning is a debunked pop-psychology myth.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Think about the subjects you struggled with most in school. Were you testing yourself actively, or were you passively re-reading notes hoping they would stick?',
    sections: [],
    references: [
      {
        id: 'rp_ref_01',
        title: 'Test-enhanced learning: Taking memory tests improves long-term retention',
        citation: 'Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249–255.',
        authors: 'Henry L. Roediger III, Jeffrey D. Karpicke',
        publicationYear: 2006,
        journalOrPublisher: 'Psychological Science',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'empirical_study',
        doiOrUrl: 'https://doi.org/10.1111/j.1467-9280.2006.01693.x',
        relevance: 'Seminal experimental demonstration showing that active testing promotes long-term retention significantly more than repeated study.',
        displayOrder: 1,
      },
      {
        id: 'rp_ref_02',
        title: 'Improving students\' learning with effective learning techniques: Promising directions from cognitive and educational psychology',
        citation: 'Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students\' learning with effective learning techniques. Psychological Science in the Public Interest, 14(1), 4–58.',
        authors: 'John Dunlosky et al.',
        publicationYear: 2013,
        journalOrPublisher: 'Psychological Science in the Public Interest',
        sourceType: 'systematic_review',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        doiOrUrl: 'https://doi.org/10.1177/1529100612453266',
        relevance: 'Comprehensive systematic review of 10 learning strategies, finding practice testing and distributed practice offer the highest educational utility.',
        displayOrder: 2,
      },
    ],
    tags: ['Learning Psychology', 'Memory', 'Mentalab Method'],
    relatedTopics: [
      {
        topicId: 'confirmation_bias',
        slug: 'confirmation-bias',
        title: 'Confirmation Bias',
        relationshipType: 'general_related',
      },
    ],
    seoTitle: 'Retrieval Practice & Testing Effect | Learning Psychology | Mentalab Mind',
    seoDescription: 'Discover why self-testing and spaced recall build durable memory pathways 400% faster than passive re-reading.',
    canonicalUrl: '/mind/learning-psychology/retrieval-practice-and-spacing',
    ogImageUrl: '/images/mind/retrieval-practice.png',
    publishedAt: '2026-09-10T00:00:00Z',
    deepExplanation: 'Retrieval practice exploits synaptic reconsolidation to turn temporary working memory into permanent cortical memory.',
  },
  hinglish: {
    id: 'retrieval_practice',
    categoryId: 'learning_psychology',
    slug: 'retrieval-practice-and-spacing',
    difficulty: 'beginner',
    estimatedReadingMinutes: 4,
    scientificConsensusTier: 'established',
    sortWeight: 3,
    viewCount: 3120,
    shareCount: 450,
    bookmarkCount: 680,
    title: 'Retrieval Practice & Testing Effect',
    subtitle: 'Kyu baar-baar padhne se behtar hai khud ka test lena',
    shortDescription: 'Active memory retrieval ka science: Dimaag se answer bahar nikalne ki practice karne se neural pathways 400% zyada strong bante hain.',
    oneLineExplanation: 'Test sirf marks check karne ke liye nahi hota; testing khud seekhne ka sabse bada tareeqa hai.',

    summary30s: 'Notes ko baar-baar padhne se dimaag ko lagta hai ki yaad ho gaya, par asli learning tab hoti hai jab aap bina dekhe dimaag par zor dalkar answer nikaalte hain (Active Recall).',
    coreConcept: 'Zyadatar students kitabein baar-baar padhte hain aur highlighter chalate hain, jisse "fluency illusion" banta hai—lagta hai sab yaad hai, lekin exam me dimaag blank ho jata hai. Psychology dikhati hai ki jab aap dimaag par zor daalkar answer recall karte hain, tab actual learning hoti hai.',
    summary60s: 'Jab aap 17 × 8 = 136 padhte hain, dimaag lazy rehta hai. Lekin jab aap 17 × 8 = ? dekh kar bina dekhe 136 sochte hain, dimaag me permanent connections bante hain. Mentalab speed drills isi science par bane hain.',
    quickTakeaways: [
      'Baar-baar padhna "false confidence" deta hai; test lena actual mastery deta hai',
      'Jitna dimaag par recall karne me thoda zor padega, memory utni lambi chalegi',
      'Kuch dino ke gap me recall karne se forgetting curve khatam ho jata hai',
    ],

    whyItHappens: 'Synaptic plasticity. Dimaag un cheezon ko bhula deta hai jo aap sirf dekhte hain, lekin jinko baar-baar recall karte hain unhe "survival ke liye zaroori" samajh kar permanently store karta hai.',
    evolutionaryMechanism: 'Purane zamaane me bina map ke raste aur shikar ke thikane yaad rakhne ke liye bina dekhe recall zaroori tha.',

    howItWorks: 'Har bar jab aap answer yaad karne ki koshish karte hain, brain us memory path ko mazboot karta hai.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'Passive Highlighting vs. Mentalab Active Drill',
      description: 'Kitab ko color karne aur Mentalab speed drill ke beech ka biological farq.',
      analogySideA: { label: 'Passive Highlighting', detail: 'Kisi aur ko gym me exercise karte dekhna. Acha lagta hai, lekin body nahi banti.' },
      analogySideB: { label: 'Mentalab Speed Sprint', detail: 'Khud vajan uthana. Thoda zor padta hai, lekin real mental strength aati hai.' },
    },

    researchSummary: '2006 me Roediger & Karpicke ne prove kiya ki jo students 80% time self-test me lagate hain, unhe 1 hafte baad 50% zyada yaad rehta hai unke mukable jo sirf padhte rehte hain.',
    limitationsAndControversies: 'Test lene ke baad turant correct answer check karna zaroori hai, warna galat answer yaad reh sakta hai.',

    examples: [
      {
        id: 'rp_ex_01_hi',
        domain: 'general',
        displayOrder: 1,
        title: 'Tables Ko Dekhna vs. Mentalab Sprint',
        description: 'Ek student 17 ka table 20 minute dekhta hai aur agle din bhool jata hai. Dusra student Mentalab par 5 minute speed sprint karta hai aur saalon tak yaad rakhta hai.',
        takeaway: 'Active testing 400% zyada time-saving hai.',
      },
    ],
    scenarios: [
      {
        id: 'rp_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'Kota / UPSC Highlighter Trap',
        narrativeContext: 'Aarav Kota me 12 ghante padhta hai aur pure notes ko pink highlighter se rang deta hai. Lekin mock test aate hi formulas dimaag se gayab ho jate hain.',
        biasInAction: 'Aarav visual recognition ko memory samajh baitha. Kitab khuli thi to sab asaan lag raha tha, bina dekhe solve karne ki practice zero thi.',
        optimalResponse: 'Kitab band karein, blank paper lein aur bina dekhe 5 formulas likhein. Fir galti check karein.',
        reflectionPrompt: 'Kya aap padhte waqt zyada time kitabein dekhne me lagate hain ya bina dekhe recall karne me?',
      },
    ],

    howToRecognize: 'Agar answer dekh kar lage "Arrey yeh to mujhe pata hi tha!", to samajh jaiye aap illusion me hain. Agar bina dekhe recall nahi hua, to yaad nahi tha.',
    whereYouEncounterIt: 'Exam prep, calculation speed, coding interview questions, competitive tests.',

    commonMisconceptions: 'Myth: "Test sirf marks lene ke liye hota hai." Fact: Testing memory banane ka sabse powerful biological tool hai.',

    howToRespond: 'Padhai ka 80% hissa closed-book questions solve karne me lagayein.',
    psychologicalDefenses: [
      { title: 'The Blank Sheet Rule', instruction: 'Koi bhi topic padhne ke baad kitab band karein aur blank paper par 3 main points bina dekhe likhein.' },
      { title: 'Spaced Recall Schedule', instruction: '1 din, 3 din aur 7 din ke gap me dobara revise karein.' },
      { title: 'Immediate Error Diagnosis', instruction: 'Galat answer aate hi agle 10 second me sahi solution dekhein.' },
    ],

    practiceQuestions: [
      {
        id: 'rp_q_01',
        difficulty: 'beginner',
        questionFormat: 'choose_best_explanation',
        displayOrder: 1,
        prompt: '12 se 19 tak ke tables yaad karne ke liye sabse fast aur permanent tareeqa kaunsa hai?',
        scenarioText: 'Aapke paas 4 ghante hain.',
        explanation: 'Active retrieval practice se dimaag par zor padta hai aur permanent memory banti hai.',
        antidoteAdvice: 'Kitab band karke drill karein.',
        options: [
          {
            id: 'rp_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Tables ko 10 baar padhna aur highlight karna.',
            feedbackText: 'Galat. Yeh fake familiarity deta hai.',
          },
          {
            id: 'rp_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Mentalab speed drills me closed-chart practice karna aur immediate error feedback dekhna.',
            feedbackText: 'Sahi! Active recall se memory permanent hoti hai.',
          },
          {
            id: 'rp_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Raat ko sote waqt audio lagakar sona.',
            feedbackText: 'Galat. Yeh debunked myth hai.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Kya aapne notice kiya hai ki jo concepts aapne dusron ko samjhaye ya test me likhe, wo aaj tak yaad hain?',
    sections: [],
    references: [
      {
        id: 'rp_ref_01',
        title: 'Test-enhanced learning: Taking memory tests improves long-term retention',
        citation: 'Roediger & Karpicke (2006). Psychological Science.',
        authors: 'Henry L. Roediger III',
        publicationYear: 2006,
        journalOrPublisher: 'Psychological Science',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'empirical_study',
        doiOrUrl: 'https://doi.org/10.1111/j.1467-9280.2006.01693.x',
        relevance: 'Testing effect aur active memory recall par landmark study.',
        displayOrder: 1,
      },
    ],
    tags: ['Learning Psychology', 'Memory', 'Mentalab Method'],
    relatedTopics: [],
    seoTitle: 'Retrieval Practice Kya Hai? Testing Effect | Mentalab Mind',
    seoDescription: 'Seekhein kyu self-testing aur spaced recall se dimaag 400% zyada tezi se yaad rakhta hai.',
    canonicalUrl: '/mind/learning-psychology/retrieval-practice-and-spacing',
    ogImageUrl: '/images/mind/retrieval-practice.png',
    publishedAt: '2026-09-10T00:00:00Z',
    deepExplanation: 'Active recall dimaag ke synaptic connections ko permanently strengthen karta hai.',
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

import { TOPIC_SOCIAL_PROOF } from './topics/socialProof';
import { TOPIC_ANCHORING_EFFECT } from './topics/anchoringEffect';
import { TOPIC_HEALTHY_BOUNDARIES } from './topics/healthyBoundaries';
import { TOPIC_ALGORITHMIC_REINFORCEMENT } from './topics/algorithmicReinforcement';
import { TOPIC_RECIPROCITY_PRINCIPLE } from './topics/reciprocityPrinciple';
import { TOPIC_EMOTIONAL_REGULATION } from './topics/emotionalRegulation';
import { TOPIC_FIRST_PRINCIPLES } from './topics/firstPrinciplesThinking';
import { TOPIC_VICTIM_PLAYING } from './topics/victimPlaying';
import { TOPIC_GUILT_TRIPPING } from './topics/guiltTripping';
import { TOPIC_EMOTIONAL_BLACKMAIL } from './topics/emotionalBlackmail';
import { TOPIC_FEAR_BASED_PERSUASION } from './topics/fearBasedPersuasion';
import { TOPIC_INTIMIDATION } from './topics/intimidation';
import { TOPIC_THREATS_IMPLIED_CONSEQUENCES } from './topics/threatsImpliedConsequences';
import { TOPIC_SHAME_BASED_INFLUENCE } from './topics/shameBasedInfluence';
import { TOPIC_LOVE_BOMBING } from './topics/loveBombing';
import { TOPIC_SILENT_TREATMENT } from './topics/silentTreatment';
import { TOPIC_STONEWALLING } from './topics/stonewalling';
import { TOPIC_SUNK_COST_FALLACY } from './topics/sunkCostFallacy';
import { TOPIC_DUNNING_KRUGER } from './topics/dunningKrugerEffect';
import { TOPIC_BYSTANDER_EFFECT } from './topics/bystanderEffect';
import { TOPIC_COMMITMENT_CONSISTENCY } from './topics/commitmentConsistency';
import { TOPIC_LOSS_AVERSION } from './topics/lossAversion';
import { TOPIC_COGNITIVE_REAPPRAISAL } from './topics/cognitiveReappraisal';
import { TOPIC_ACTIVE_LISTENING } from './topics/activeListening';
import { TOPIC_VARIABLE_REWARD_SCHEDULES } from './topics/variableRewardSchedules';
import { TOPIC_DECOY_EFFECT } from './topics/decoyEffect';
import { TOPIC_SPACED_REPETITION } from './topics/spacedRepetition';
import { TOPIC_FALSIFICATION_PRINCIPLE } from './topics/falsificationPrinciple';
import { TOPIC_INTERMITTENT_REINFORCEMENT } from './topics/intermittentReinforcement';
import { TOPIC_MOVING_GOALPOSTS } from './topics/movingTheGoalposts';
import { TOPIC_BLAME_SHIFTING } from './topics/blameShifting';
import { TOPIC_DARVO_PATTERN } from './topics/darvoPattern';
import { TOPIC_GASLIGHTING_DYNAMICS } from './topics/gaslightingDeepDive';
import { TOPIC_TRIANGULATION_PATTERN } from './topics/triangulationPattern';
import { TOPIC_SCAPEGOATING_PATTERN } from './topics/scapegoatingPattern';
import { TOPIC_PLAYING_PEOPLE_AGAINST_EACH_OTHER } from './topics/playingPeopleAgainstEachOther';
import { TOPIC_BOUNDARY_TESTING } from './topics/boundaryTesting';
import { TOPIC_INFORMATION_WITHHOLDING } from './topics/informationWithholding';

// New Multi-Track Curriculum Topics
import { TOPIC_AVAILABILITY_HEURISTIC } from './topics/availabilityHeuristic';
import { TOPIC_HINDSIGHT_BIAS } from './topics/hindsightBias';
import { TOPIC_FAE } from './topics/fundamentalAttributionError';
import { TOPIC_FRAMING_EFFECT } from './topics/framingEffect';
import { TOPIC_SURVIVORSHIP_BIAS } from './topics/survivorshipBias';
import { TOPIC_NEGATIVITY_BIAS } from './topics/negativityBias';
import { TOPIC_CONFORMITY_ASCH } from './topics/conformityAschEffect';
import { TOPIC_INGROUP_OUTGROUP } from './topics/ingroupOutgroupBias';
import { TOPIC_DEINDIVIDUATION } from './topics/deindividuationMobPsychology';
import { TOPIC_SCARCITY } from './topics/scarcityHeuristic';
import { TOPIC_AUTHORITY_BIAS } from './topics/authorityBiasMilgram';
import { TOPIC_FOOT_IN_THE_DOOR } from './topics/footInTheDoorTechnique';
import { TOPIC_STATUS_QUO } from './topics/statusQuoBias';
import { TOPIC_PLANNING_FALLACY } from './topics/planningFallacy';
import { TOPIC_HYPERBOLIC_DISCOUNTING } from './topics/hyperbolicDiscounting';
import { TOPIC_AFFECT_HEURISTIC } from './topics/affectHeuristic';
import { TOPIC_EMOTIONAL_CONTAGION } from './topics/emotionalContagion';
import { TOPIC_GOTTMAN_HORSEMEN } from './topics/gottmanFourHorsemen';
import { TOPIC_NVC } from './topics/nonviolentCommunication';
import { TOPIC_SOCIAL_COMPARISON } from './topics/socialComparisonTheory';
import { TOPIC_FOMO_ATTENTION } from './topics/fomoAttentionCapture';
import { TOPIC_ENDOWMENT_EFFECT } from './topics/endowmentEffect';
import { TOPIC_PARADOX_OF_CHOICE } from './topics/paradoxOfChoice';
import { TOPIC_INTERLEAVING } from './topics/interleavingEffect';
import { TOPIC_COGNITIVE_LOAD } from './topics/cognitiveLoadTheory';
import { TOPIC_OCCAMS_RAZOR } from './topics/occamsRazor';
import { TOPIC_STEELMANNING } from './topics/steelmanningTechnique';
import { TOPIC_CORRELATION_CAUSATION } from './topics/correlationVsCausation';

// Additional Cognitive Biases Topics (24 Core Curriculum Topics)
import { TOPIC_SELF_SERVING_BIAS } from './topics/selfServingBias';
import { TOPIC_HALO_EFFECT } from './topics/haloEffect';
import { TOPIC_INATTENTIONAL_BLINDNESS } from './topics/inattentionalBlindness';
import { TOPIC_BANDWAGON_EFFECT } from './topics/bandwagonEffect';
import { TOPIC_OPTIMISM_BIAS } from './topics/optimismBias';
import { TOPIC_GAMBLERS_FALLACY } from './topics/gamblersFallacy';
import { TOPIC_OUTCOME_BIAS } from './topics/outcomeBias';
import { TOPIC_BIAS_BLIND_SPOT } from './topics/biasBlindSpot';
import { TOPIC_BELIEF_PERSEVERANCE } from './topics/beliefPerseverance';
import { TOPIC_OVERCONFIDENCE_EFFECT } from './topics/overconfidenceEffect';
import { TOPIC_FALSE_CONSENSUS_EFFECT } from './topics/falseConsensusEffect';
import { TOPIC_ACTOR_OBSERVER_BIAS } from './topics/actorObserverBias';
import { TOPIC_BASE_RATE_FALLACY } from './topics/baseRateFallacy';
import { TOPIC_CURSE_OF_KNOWLEDGE } from './topics/curseOfKnowledge';
import { TOPIC_REPRESENTATIVENESS_HEURISTIC } from './topics/representativenessHeuristic';
import { TOPIC_OMISSION_BIAS } from './topics/omissionBias';

// Social Psychology Expansion Topics
import { TOPIC_SOCIAL_LOAFING } from './topics/socialLoafing';
import { TOPIC_GROUPTHINK } from './topics/groupthink';
import { TOPIC_GROUP_POLARIZATION } from './topics/groupPolarization';
import { TOPIC_COGNITIVE_DISSONANCE } from './topics/cognitiveDissonance';
import { TOPIC_SOCIAL_FACILITATION } from './topics/socialFacilitation';
import { TOPIC_PLURALISTIC_IGNORANCE } from './topics/pluralisticIgnorance';
import { TOPIC_DIFFUSION_OF_RESPONSIBILITY } from './topics/diffusionOfResponsibility';
import { TOPIC_PYGMALION_EFFECT } from './topics/pygmalionEffect';
import { TOPIC_SPOTLIGHT_EFFECT } from './topics/spotlightEffect';
import { TOPIC_PSYCHOLOGICAL_REACTANCE } from './topics/psychologicalReactance';
import { TOPIC_JUST_WORLD_HYPOTHESIS } from './topics/justWorldHypothesis';
import { TOPIC_REALISTIC_CONFLICT_THEORY } from './topics/realisticConflictTheory';
import { TOPIC_SOCIAL_IDENTITY_THEORY } from './topics/socialIdentityTheory';
import { TOPIC_NORMATIVE_INFORMATIONAL_INFLUENCE } from './topics/normativeInformationalInfluence';
import { TOPIC_ILLUSION_OF_TRANSPARENCY } from './topics/illusionOfTransparency';

// Decision Making Expansion Topics
import { TOPIC_PROSPECT_THEORY } from './topics/prospectTheory';
import { TOPIC_SATISFICING_VS_MAXIMIZING } from './topics/satisficingVsMaximizing';
import { TOPIC_OPPORTUNITY_COST_NEGLECT } from './topics/opportunityCostNeglect';
import { TOPIC_CHOICE_OVERLOAD } from './topics/choiceOverload';
import { TOPIC_ESCALATION_OF_COMMITMENT } from './topics/escalationOfCommitment';
import { TOPIC_MENTAL_ACCOUNTING } from './topics/mentalAccounting';
import { TOPIC_BOUNDED_RATIONALITY } from './topics/boundedRationality';
import { TOPIC_REGRET_AVERSION } from './topics/regretAversion';
import { TOPIC_ZERO_SUM_BIAS } from './topics/zeroSumBias';
import { TOPIC_PRESENT_BIAS_COMMITMENT } from './topics/presentBiasCommitment';

// Persuasion & Influence Expansion Topics
import { TOPIC_DOOR_IN_THE_FACE } from './topics/doorInTheFaceTechnique';
import { TOPIC_LOW_BALL_TECHNIQUE } from './topics/lowBallTechnique';
import { TOPIC_ELABORATION_LIKELIHOOD_MODEL } from './topics/elaborationLikelihoodModel';
import { TOPIC_PRE_SUASION } from './topics/preSuasionTechnique';
import { TOPIC_LIKING_PRINCIPLE } from './topics/likingPrinciple';
import { TOPIC_SLEEPER_EFFECT } from './topics/sleeperEffect';
import { TOPIC_INOCULATION_THEORY } from './topics/inoculationTheory';
import { TOPIC_MERE_EXPOSURE_EFFECT } from './topics/mereExposureEffect';
import { TOPIC_LABELING_TECHNIQUE } from './topics/labelingTechnique';
import { TOPIC_THATS_NOT_ALL_TECHNIQUE } from './topics/thatsNotAllTechnique';

export {
  TOPIC_SOCIAL_PROOF,
  TOPIC_ANCHORING_EFFECT,
  TOPIC_HEALTHY_BOUNDARIES,
  TOPIC_ALGORITHMIC_REINFORCEMENT,
  TOPIC_RECIPROCITY_PRINCIPLE,
  TOPIC_EMOTIONAL_REGULATION,
  TOPIC_FIRST_PRINCIPLES,
  TOPIC_VICTIM_PLAYING,
  TOPIC_GUILT_TRIPPING,
  TOPIC_EMOTIONAL_BLACKMAIL,
  TOPIC_FEAR_BASED_PERSUASION,
  TOPIC_INTIMIDATION,
  TOPIC_THREATS_IMPLIED_CONSEQUENCES,
  TOPIC_SHAME_BASED_INFLUENCE,
  TOPIC_LOVE_BOMBING,
  TOPIC_SILENT_TREATMENT,
  TOPIC_STONEWALLING,
  TOPIC_INTERMITTENT_REINFORCEMENT,
  TOPIC_MOVING_GOALPOSTS,
  TOPIC_BLAME_SHIFTING,
  TOPIC_DARVO_PATTERN,
  TOPIC_GASLIGHTING_DYNAMICS,
  TOPIC_TRIANGULATION_PATTERN,
  TOPIC_SCAPEGOATING_PATTERN,
  TOPIC_PLAYING_PEOPLE_AGAINST_EACH_OTHER,
  TOPIC_BOUNDARY_TESTING,
  TOPIC_INFORMATION_WITHHOLDING,
  TOPIC_SUNK_COST_FALLACY,
  TOPIC_DUNNING_KRUGER,
  TOPIC_BYSTANDER_EFFECT,
  TOPIC_COMMITMENT_CONSISTENCY,
  TOPIC_LOSS_AVERSION,
  TOPIC_COGNITIVE_REAPPRAISAL,
  TOPIC_ACTIVE_LISTENING,
  TOPIC_VARIABLE_REWARD_SCHEDULES,
  TOPIC_DECOY_EFFECT,
  TOPIC_SPACED_REPETITION,
  TOPIC_FALSIFICATION_PRINCIPLE,
  TOPIC_AVAILABILITY_HEURISTIC,
  TOPIC_HINDSIGHT_BIAS,
  TOPIC_FAE,
  TOPIC_FRAMING_EFFECT,
  TOPIC_SURVIVORSHIP_BIAS,
  TOPIC_NEGATIVITY_BIAS,
  TOPIC_CONFORMITY_ASCH,
  TOPIC_INGROUP_OUTGROUP,
  TOPIC_DEINDIVIDUATION,
  TOPIC_SCARCITY,
  TOPIC_AUTHORITY_BIAS,
  TOPIC_FOOT_IN_THE_DOOR,
  TOPIC_STATUS_QUO,
  TOPIC_PLANNING_FALLACY,
  TOPIC_HYPERBOLIC_DISCOUNTING,
  TOPIC_AFFECT_HEURISTIC,
  TOPIC_EMOTIONAL_CONTAGION,
  TOPIC_GOTTMAN_HORSEMEN,
  TOPIC_NVC,
  TOPIC_SOCIAL_COMPARISON,
  TOPIC_FOMO_ATTENTION,
  TOPIC_ENDOWMENT_EFFECT,
  TOPIC_PARADOX_OF_CHOICE,
  TOPIC_INTERLEAVING,
  TOPIC_COGNITIVE_LOAD,
  TOPIC_OCCAMS_RAZOR,
  TOPIC_STEELMANNING,
  TOPIC_CORRELATION_CAUSATION,
  TOPIC_SELF_SERVING_BIAS,
  TOPIC_HALO_EFFECT,
  TOPIC_INATTENTIONAL_BLINDNESS,
  TOPIC_BANDWAGON_EFFECT,
  TOPIC_OPTIMISM_BIAS,
  TOPIC_GAMBLERS_FALLACY,
  TOPIC_OUTCOME_BIAS,
  TOPIC_BIAS_BLIND_SPOT,
  TOPIC_BELIEF_PERSEVERANCE,
  TOPIC_OVERCONFIDENCE_EFFECT,
  TOPIC_FALSE_CONSENSUS_EFFECT,
  TOPIC_ACTOR_OBSERVER_BIAS,
  TOPIC_BASE_RATE_FALLACY,
  TOPIC_CURSE_OF_KNOWLEDGE,
  TOPIC_REPRESENTATIVENESS_HEURISTIC,
  TOPIC_OMISSION_BIAS,
  // Social Psychology Exports
  TOPIC_SOCIAL_LOAFING,
  TOPIC_GROUPTHINK,
  TOPIC_GROUP_POLARIZATION,
  TOPIC_COGNITIVE_DISSONANCE,
  TOPIC_SOCIAL_FACILITATION,
  TOPIC_PLURALISTIC_IGNORANCE,
  TOPIC_DIFFUSION_OF_RESPONSIBILITY,
  TOPIC_PYGMALION_EFFECT,
  TOPIC_SPOTLIGHT_EFFECT,
  TOPIC_PSYCHOLOGICAL_REACTANCE,
  TOPIC_JUST_WORLD_HYPOTHESIS,
  TOPIC_REALISTIC_CONFLICT_THEORY,
  TOPIC_SOCIAL_IDENTITY_THEORY,
  TOPIC_NORMATIVE_INFORMATIONAL_INFLUENCE,
  TOPIC_ILLUSION_OF_TRANSPARENCY,
  // Decision Making Exports
  TOPIC_PROSPECT_THEORY,
  TOPIC_SATISFICING_VS_MAXIMIZING,
  TOPIC_OPPORTUNITY_COST_NEGLECT,
  TOPIC_CHOICE_OVERLOAD,
  TOPIC_ESCALATION_OF_COMMITMENT,
  TOPIC_MENTAL_ACCOUNTING,
  TOPIC_BOUNDED_RATIONALITY,
  TOPIC_REGRET_AVERSION,
  TOPIC_ZERO_SUM_BIAS,
  TOPIC_PRESENT_BIAS_COMMITMENT,
  // Persuasion & Influence Exports
  TOPIC_DOOR_IN_THE_FACE,
  TOPIC_LOW_BALL_TECHNIQUE,
  TOPIC_ELABORATION_LIKELIHOOD_MODEL,
  TOPIC_PRE_SUASION,
  TOPIC_LIKING_PRINCIPLE,
  TOPIC_SLEEPER_EFFECT,
  TOPIC_INOCULATION_THEORY,
  TOPIC_MERE_EXPOSURE_EFFECT,
  TOPIC_LABELING_TECHNIQUE,
  TOPIC_THATS_NOT_ALL_TECHNIQUE,
};

// ============================================================================
// CURRICULUM CATALOG REGISTRY
// ============================================================================

export const CURRICULUM_CATALOG: Record<string, Record<MindLanguageCode, MindTopicDetail>> = {
  // Track 1: Cognitive Biases (24 Core Empirical Topics)
  confirmation_bias: TOPIC_CONFIRMATION_BIAS,
  dunning_kruger_effect: TOPIC_DUNNING_KRUGER,
  availability_heuristic: TOPIC_AVAILABILITY_HEURISTIC,
  hindsight_bias: TOPIC_HINDSIGHT_BIAS,
  fundamental_attribution_error: TOPIC_FAE,
  framing_effect: TOPIC_FRAMING_EFFECT,
  survivorship_bias: TOPIC_SURVIVORSHIP_BIAS,
  negativity_bias: TOPIC_NEGATIVITY_BIAS,
  self_serving_bias: TOPIC_SELF_SERVING_BIAS,
  halo_effect: TOPIC_HALO_EFFECT,
  inattentional_blindness: TOPIC_INATTENTIONAL_BLINDNESS,
  bandwagon_effect: TOPIC_BANDWAGON_EFFECT,
  optimism_bias: TOPIC_OPTIMISM_BIAS,
  gamblers_fallacy: TOPIC_GAMBLERS_FALLACY,
  outcome_bias: TOPIC_OUTCOME_BIAS,
  bias_blind_spot: TOPIC_BIAS_BLIND_SPOT,
  belief_perseverance: TOPIC_BELIEF_PERSEVERANCE,
  overconfidence_effect: TOPIC_OVERCONFIDENCE_EFFECT,
  false_consensus_effect: TOPIC_FALSE_CONSENSUS_EFFECT,
  actor_observer_bias: TOPIC_ACTOR_OBSERVER_BIAS,
  base_rate_fallacy: TOPIC_BASE_RATE_FALLACY,
  curse_of_knowledge: TOPIC_CURSE_OF_KNOWLEDGE,
  representativeness_heuristic: TOPIC_REPRESENTATIVENESS_HEURISTIC,
  omission_bias: TOPIC_OMISSION_BIAS,

  // Track 2: Social Psychology (20 Core Foundational Topics)
  social_proof: TOPIC_SOCIAL_PROOF,
  bystander_effect: TOPIC_BYSTANDER_EFFECT,
  conformity_asch_effect: TOPIC_CONFORMITY_ASCH,
  ingroup_outgroup_bias: TOPIC_INGROUP_OUTGROUP,
  deindividuation_mob_psychology: TOPIC_DEINDIVIDUATION,
  social_loafing: TOPIC_SOCIAL_LOAFING,
  groupthink: TOPIC_GROUPTHINK,
  group_polarization: TOPIC_GROUP_POLARIZATION,
  cognitive_dissonance: TOPIC_COGNITIVE_DISSONANCE,
  social_facilitation: TOPIC_SOCIAL_FACILITATION,
  pluralistic_ignorance: TOPIC_PLURALISTIC_IGNORANCE,
  diffusion_of_responsibility: TOPIC_DIFFUSION_OF_RESPONSIBILITY,
  pygmalion_effect: TOPIC_PYGMALION_EFFECT,
  spotlight_effect: TOPIC_SPOTLIGHT_EFFECT,
  psychological_reactance: TOPIC_PSYCHOLOGICAL_REACTANCE,
  just_world_hypothesis: TOPIC_JUST_WORLD_HYPOTHESIS,
  realistic_conflict_theory: TOPIC_REALISTIC_CONFLICT_THEORY,
  social_identity_theory: TOPIC_SOCIAL_IDENTITY_THEORY,
  normative_informational_influence: TOPIC_NORMATIVE_INFORMATIONAL_INFLUENCE,
  illusion_of_transparency: TOPIC_ILLUSION_OF_TRANSPARENCY,

  // Track 3: Persuasion & Influence (15 Core Foundational Topics)
  reciprocity_principle: TOPIC_RECIPROCITY_PRINCIPLE,
  commitment_consistency: TOPIC_COMMITMENT_CONSISTENCY,
  scarcity_heuristic: TOPIC_SCARCITY,
  authority_bias_milgram: TOPIC_AUTHORITY_BIAS,
  foot_in_the_door: TOPIC_FOOT_IN_THE_DOOR,
  door_in_the_face: TOPIC_DOOR_IN_THE_FACE,
  low_ball_technique: TOPIC_LOW_BALL_TECHNIQUE,
  elaboration_likelihood_model: TOPIC_ELABORATION_LIKELIHOOD_MODEL,
  pre_suasion: TOPIC_PRE_SUASION,
  liking_principle: TOPIC_LIKING_PRINCIPLE,
  sleeper_effect: TOPIC_SLEEPER_EFFECT,
  inoculation_theory: TOPIC_INOCULATION_THEORY,
  mere_exposure_effect: TOPIC_MERE_EXPOSURE_EFFECT,
  labeling_technique: TOPIC_LABELING_TECHNIQUE,
  thats_not_all_technique: TOPIC_THATS_NOT_ALL_TECHNIQUE,

  // Track 4: Manipulation Awareness (21 Core Curated Topics)
  gaslighting_awareness: TOPIC_GASLIGHTING_AWARENESS,
  victim_playing: TOPIC_VICTIM_PLAYING,
  guilt_tripping: TOPIC_GUILT_TRIPPING,
  emotional_blackmail: TOPIC_EMOTIONAL_BLACKMAIL,
  fear_based_persuasion: TOPIC_FEAR_BASED_PERSUASION,
  intimidation: TOPIC_INTIMIDATION,
  threats_implied_consequences: TOPIC_THREATS_IMPLIED_CONSEQUENCES,
  shame_based_influence: TOPIC_SHAME_BASED_INFLUENCE,
  love_bombing: TOPIC_LOVE_BOMBING,
  silent_treatment: TOPIC_SILENT_TREATMENT,
  stonewalling: TOPIC_STONEWALLING,
  intermittent_reinforcement: TOPIC_INTERMITTENT_REINFORCEMENT,
  moving_the_goalposts: TOPIC_MOVING_GOALPOSTS,
  blame_shifting: TOPIC_BLAME_SHIFTING,
  darvo_pattern: TOPIC_DARVO_PATTERN,
  gaslighting_dynamics: TOPIC_GASLIGHTING_DYNAMICS,
  triangulation_pattern: TOPIC_TRIANGULATION_PATTERN,
  scapegoating_pattern: TOPIC_SCAPEGOATING_PATTERN,
  playing_people_against_each_other: TOPIC_PLAYING_PEOPLE_AGAINST_EACH_OTHER,
  boundary_testing: TOPIC_BOUNDARY_TESTING,
  information_withholding: TOPIC_INFORMATION_WITHHOLDING,

  // Track 5: Decision Making (15 Core Foundational Topics)
  sunk_cost_fallacy: TOPIC_SUNK_COST_FALLACY,
  loss_aversion: TOPIC_LOSS_AVERSION,
  status_quo_bias: TOPIC_STATUS_QUO,
  planning_fallacy: TOPIC_PLANNING_FALLACY,
  hyperbolic_discounting: TOPIC_HYPERBOLIC_DISCOUNTING,
  prospect_theory: TOPIC_PROSPECT_THEORY,
  satisficing_vs_maximizing: TOPIC_SATISFICING_VS_MAXIMIZING,
  opportunity_cost_neglect: TOPIC_OPPORTUNITY_COST_NEGLECT,
  choice_overload: TOPIC_CHOICE_OVERLOAD,
  escalation_of_commitment: TOPIC_ESCALATION_OF_COMMITMENT,
  mental_accounting: TOPIC_MENTAL_ACCOUNTING,
  bounded_rationality: TOPIC_BOUNDED_RATIONALITY,
  regret_aversion: TOPIC_REGRET_AVERSION,
  zero_sum_bias: TOPIC_ZERO_SUM_BIAS,
  present_bias_commitment: TOPIC_PRESENT_BIAS_COMMITMENT,

  // Track 6: Emotions & Regulation
  emotional_regulation: TOPIC_EMOTIONAL_REGULATION,
  cognitive_reappraisal: TOPIC_COGNITIVE_REAPPRAISAL,
  affect_heuristic: TOPIC_AFFECT_HEURISTIC,
  emotional_contagion: TOPIC_EMOTIONAL_CONTAGION,

  // Track 7: Relationships & Communication
  healthy_boundaries: TOPIC_HEALTHY_BOUNDARIES,
  active_listening: TOPIC_ACTIVE_LISTENING,
  gottman_four_horsemen: TOPIC_GOTTMAN_HORSEMEN,
  nonviolent_communication: TOPIC_NVC,

  // Track 8: Social Media Psychology
  algorithmic_reinforcement: TOPIC_ALGORITHMIC_REINFORCEMENT,
  variable_reward_schedules: TOPIC_VARIABLE_REWARD_SCHEDULES,
  social_comparison_theory: TOPIC_SOCIAL_COMPARISON,
  fomo_attention_capture: TOPIC_FOMO_ATTENTION,

  // Track 9: Consumer & Advertising Psychology
  anchoring_effect: TOPIC_ANCHORING_EFFECT,
  decoy_effect: TOPIC_DECOY_EFFECT,
  endowment_effect: TOPIC_ENDOWMENT_EFFECT,
  paradox_of_choice: TOPIC_PARADOX_OF_CHOICE,

  // Track 10: Learning Psychology
  retrieval_practice: TOPIC_RETRIEVAL_PRACTICE,
  spaced_repetition: TOPIC_SPACED_REPETITION,
  interleaving_effect: TOPIC_INTERLEAVING,
  cognitive_load_theory: TOPIC_COGNITIVE_LOAD,

  // Track 11: Critical Thinking
  first_principles_thinking: TOPIC_FIRST_PRINCIPLES,
  falsification_principle: TOPIC_FALSIFICATION_PRINCIPLE,
  occams_razor: TOPIC_OCCAMS_RAZOR,
  steelmanning_technique: TOPIC_STEELMANNING,
  correlation_vs_causation: TOPIC_CORRELATION_CAUSATION,
};

/**
 * Get all 10 Primary Categories + Critical Thinking localized
 */
export function getCurriculumCategories(lang: MindLanguageCode = 'en'): MindCategory[] {
  return Object.entries(PRIMARY_MIND_CATEGORIES).map(([id, cat]) => {
    const isHinglish = lang === 'hinglish';
    const topicsInCat = Object.values(CURRICULUM_CATALOG).filter(
      (topicRecord) => (topicRecord.en || topicRecord.hinglish)?.categoryId === id
    ).length;

    return {
      id,
      slug: cat.slug,
      iconName: cat.iconName,
      accentColor: cat.accentColor,
      displayOrder: cat.displayOrder,
      isActive: true,
      title: isHinglish ? cat.titleHinglish : cat.titleEn,
      subtitle: isHinglish ? cat.subtitleHinglish : cat.subtitleEn,
      description: isHinglish ? cat.descriptionHinglish : cat.descriptionEn,
      topicCount: topicsInCat,
    };
  });
}

/**
 * Helper to select the best available topic translation from a catalog entry
 */
function resolveTopicFromRecord(
  topicRecord: Record<MindLanguageCode, MindTopicDetail>,
  lang: MindLanguageCode
): MindTopicDetail {
  const candidate = (topicRecord as any)[lang];
  if (candidate && candidate.title && candidate.title.length > 0) {
    return candidate;
  }
  if (lang === 'hinglish' && topicRecord.hinglish) {
    return topicRecord.hinglish;
  }
  return topicRecord.en || topicRecord.hinglish;
}

/**
 * Get all topics in a given category localized
 */
export function getTopicsByCategory(
  categoryId: string,
  lang: MindLanguageCode = 'en'
): MindTopicDetail[] {
  // Normalize categoryId: match either category id ('cognitive_biases') or slug ('cognitive-biases')
  let resolvedCatId = categoryId;
  for (const [id, cat] of Object.entries(PRIMARY_MIND_CATEGORIES)) {
    if (id === categoryId || cat.slug === categoryId) {
      resolvedCatId = id;
      break;
    }
  }

  const list: MindTopicDetail[] = [];
  for (const topicRecord of Object.values(CURRICULUM_CATALOG)) {
    const topic = resolveTopicFromRecord(topicRecord, lang);
    if (topic && (topic.categoryId === resolvedCatId || topic.categoryId === categoryId)) {
      list.push(topic);
    }
  }
  return list.sort((a, b) => a.sortWeight - b.sortWeight);
}

/**
 * Find topic by slug or ID localized
 */
export function getTopicBySlugOrId(
  slugOrId: string,
  lang: MindLanguageCode = 'en'
): MindTopicDetail | null {
  for (const topicRecord of Object.values(CURRICULUM_CATALOG)) {
    const topic = resolveTopicFromRecord(topicRecord, lang);
    if (topic && (topic.slug === slugOrId || topic.id === slugOrId)) {
      return topic;
    }
  }
  return null;
}

/**
 * Search topics across titles, keywords, and descriptions
 */
export function searchCurriculum(
  query: string,
  lang: MindLanguageCode = 'en'
): MindTopicDetail[] {
  const cleanQ = query.toLowerCase().trim();
  if (!cleanQ) return [];

  const results: MindTopicDetail[] = [];
  for (const topicRecord of Object.values(CURRICULUM_CATALOG)) {
    const topic = resolveTopicFromRecord(topicRecord, lang);
    if (!topic) continue;

    const matchTitle = topic.title?.toLowerCase().includes(cleanQ) ?? false;
    const matchDesc = topic.shortDescription?.toLowerCase().includes(cleanQ) ?? false;
    const matchTags = (topic.tags || []).some((t) => t.toLowerCase().includes(cleanQ));

    if (matchTitle || matchDesc || matchTags) {
      results.push(topic);
    }
  }
  return results;
}

/**
 * Filter topics by conceptual difficulty tier (Beginner, Intermediate, Advanced)
 */
export function getTopicsByDifficulty(
  difficulty: MindDifficulty,
  lang: MindLanguageCode = 'en'
): MindTopicDetail[] {
  const list: MindTopicDetail[] = [];
  for (const topicRecord of Object.values(CURRICULUM_CATALOG)) {
    const topic = resolveTopicFromRecord(topicRecord, lang);
    if (topic && topic.difficulty === difficulty) {
      list.push(topic);
    }
  }
  return list;
}
