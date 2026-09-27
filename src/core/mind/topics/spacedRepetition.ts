import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Learning Psychology Track
 * Topic: Spaced Repetition: Defeating the Forgetting Curve
 * Category: Learning Psychology (learning_psychology)
 * 
 * Academic Grounding:
 * - Ebbinghaus (1885): Memory: A Contribution to Experimental Psychology (The Forgetting Curve)
 * - Cepeda et al. (2006): Distributed Practice in Verbal Recall Tasks: A Review and Quantitative Synthesis
 * - Roediger & Karpicke (2006): The Power of Testing Memory: Basic Research and Implications for Educational Practice
 * - Direct connection to Mentalab arithmetic speed training and long-term consolidation
 */

export const TOPIC_SPACED_REPETITION_EN: MindTopicDetail = {
  id: 'spaced_repetition',
  categoryId: 'learning_psychology',
  slug: 'spaced-repetition',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 4,
  viewCount: 6410,
  shareCount: 540,
  bookmarkCount: 1190,
  title: 'Spaced Repetition: How to Hack Memory and Remember Forever',
  subtitle: 'The neuroscience of the Ebbinghaus Forgetting Curve: why reviewing just before forgetting permanently consolidates neural pathways.',
  shortDescription: 'A learning technique where study sessions are spaced out over expanding intervals to maximize synaptic consolidation and defeat memory decay.',
  oneLineExplanation: 'In simple terms: Reviewing information right when you are about to forget it so your brain locks it into permanent storage.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'Cramming for 8 hours the night before an exam might get you through tomorrow\'s test, but within two weeks, 90% of that knowledge vanishes into thin air. Hermann Ebbinghaus proved that human memory decays along a steep mathematical curve. Spaced Repetition interrupts that decay: by reviewing material at expanding intervals (Day 1, Day 3, Day 7, Day 21), each review resets the curve and flattens it, transforming fragile short-term data into lifelong crystalized memory.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Memory is not a fixed hard drive; it is an active neurochemical consolidation process mediated by synaptic plasticity (Long-Term Potentiation). When you study material repeatedly in a single session (massed practice), your brain feels high fluency but expends minimal cognitive effort to retrieve it, producing zero structural synaptic reinforcement. Spaced Repetition forces "desirable difficulty" (Bjork, 1994): when you retrieve an idea that has begun to fade, your neural circuits must work hard to reconstruct the memory, which signals to the hippocampus that the information is critical for survival.',
  summary60s: 'In a massive meta-analysis spanning over 250 studies, Cepeda et al. (2006) proved that spacing out study sessions over time increases retention by up to 200% compared to spending the exact same total amount of time cramming in a single block. Ten hours of study distributed across four weeks will outperform ten hours of study crammed into a weekend every single time, with less mental fatigue.',

  quickTakeaways: [
    'The Forgetting Curve: Without spacing, humans forget roughly 70% of new information within 24 to 48 hours',
    'Desirable Difficulty: The harder your brain works to pull a fading memory back, the stronger the neural pathway becomes',
    'Expanding Intervals: Optimal review timing expands exponentially: 1 day -> 3 days -> 1 week -> 3 weeks -> 2 months',
    'Mentalab Connection: Spaced repetition is the computational engine behind Mentalab’s arithmetic and cognitive drills',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Synaptic pruning. The brain contains billions of neurons. To conserve metabolic energy, the brain aggressively prunes synaptic connections that are not actively recalled. Spaced retrieval acts as a biological "keep-alive" ping that prevents pruning.',
  evolutionaryMechanism: 'Information encountered repeatedly across multiple seasons and diverse contexts was vital for tribal survival (water sources, poisonous berries), whereas one-off events were biologically safe to discard.',

  // SECTION E — HOW DOES IT WORK?
  howItWorks: 'The Leitner System / Algorithmic Flashcards (Anki, SuperMemo): Cards answered correctly move to a box reviewed further in the future (Box 2: 3 days, Box 3: 1 week). Cards answered incorrectly immediately drop back to Box 1 for next-day review. Time is invested only in what is currently fragile.',
  whereYouEncounterIt: 'Medical board exams (USMLE), language learning (vocab mastery), coding syntax memorization, musical repertoire practice, and mental calculation drills in Mentalab.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Massed Cramming vs. Spaced Repetition',
    description: 'How memory retention behaves over 30 days.',
    analogySideA: {
      label: 'Cramming (8 Hours in 1 Night)',
      detail: 'Memory spikes to 95% on Day 1; plunges to 20% by Day 7; drops to 5% by Day 30. High stress, total knowledge loss.',
    },
    analogySideB: {
      label: 'Spaced Practice (20 Mins x 10 Days)',
      detail: 'Each spaced review catches the memory curve as it dips; by Day 30, retention remains above 85% with zero cramming stress.',
    },
  },

  researchSummary: 'Roediger & Karpicke (2006) published in Psychological Science demonstrated that students who studied once and took spaced retrieval tests retained 61% of material a week later, compared to only 40% for students who repeatedly re-read the material four times in a row.',
  limitationsAndControversies: 'Spaced repetition is exceptional for conceptual frameworks, facts, vocabulary, and operational procedures, but it does not replace deep synthesis, creative problem solving, or initial conceptual comprehension. You cannot space-repeat something you never fundamentally understood in the first place.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Pulling all-nighters before exams or presentations and feeling completely blank two weeks later',
    'Re-reading high-lighted textbook chapters over and over (the illusion of competence) without testing yourself',
    'Spending 6 continuous hours studying one subject on Sunday and never looking at it again until the next weekend',
    'Believing you "have a bad memory" when in reality you simply have no structured review cadence',
    'Reviewing flashcards you already know perfectly while avoiding the difficult cards that challenge your brain',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_spaced_01',
      scenarioType: 'indian_context',
      title: 'The CA / NEET Aspirant Revision Trap',
      vignette: 'Aniket is studying for his Chartered Accountancy (CA) inter exams in Ahmedabad. He spends three whole weeks reading Corporate Law for 10 hours a day. He feels confident and moves on to Tax and Auditing for the next month. When he returns to Corporate Law six weeks later, his mind is a total blank. He panics: "I spent 150 hours on Law and I remember nothing! My brain is failing." He is forced to re-read everything from page one.',
      breakdownAnalysis: 'Aniket fell into the massed practice trap. By dedicating 100% of his time to Law in a single block and leaving a 6-week silence interval, Ebbinghaus’s forgetting curve erased his synaptic pathways.',
      recommendedAction: 'Aniket should implement an expanding interval rotation: Spend 45 minutes every morning doing spaced active recall questions on previously completed subjects (Law, Tax) before starting new modules.',
    },
  ],

  examples: [
    {
      id: 'ex_spaced_01',
      domain: 'education',
      displayOrder: 1,
      title: 'Mental Arithmetic Speed Drills',
      description: 'Practicing 2-digit multiplication shortcuts in Mentalab for 10 minutes every day for two weeks builds subconscious automaticity that stays for years, whereas practicing for 3 hours once a month never builds fluency.',
      takeaway: 'Daily micro-spacing builds permanent procedural muscle memory.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'To integrate spaced repetition into your life, deploy the "2-2-2 Rule": When you learn a new concept or skill, schedule a 5-minute review 2 days later, 2 weeks later, and 2 months later. Combine each review with Active Recall (testing yourself from memory without looking at notes).',
  psychologicalDefenses: [
    'Embrace Retrieval Friction: When pulling a fact out of your mind feels hard and slow, that is the exact neurobiological moment the memory is strengthening',
    'Never Re-read Passively: Close your notes and write out the core concepts from memory on a blank sheet of paper (the Brain Dump)',
    'Automate the Intervals: Use spaced repetition tools (Leitner boxes, flashcard software) to calculate your review dates automatically',
    'Micro-Sessions Beat Marathons: Three 20-minute sessions across a week will always crush a single 60-minute marathon',
  ],

  commonMisconceptions: [
    {
      misconception: 'If remembering feels difficult during a review, it means your study session failed.',
      reality: 'Cognitive effort is the catalyst for memory consolidation. If a review is effortless, you learned almost nothing. Difficulty is proof of synaptic growth.',
    },
  ],

  reflectionPrompt: 'What is a topic or skill you learned last year that you have completely forgotten? How would a simple 10-minute monthly spaced review have changed that?',

  interactiveScenario: {
    id: 'interactive_spaced_01',
    topicId: 'spaced_repetition',
    scenarioTitle: 'Preparing for the Certification Exam',
    scenarioDescription: 'You have a professional cloud certification exam in 30 days. You have 20 hours of total study time available. How do you allocate your schedule for maximum retention?',
    vignetteSourceType: 'education',
    options: [
      {
        id: 'opt_1',
        text: 'Wait until the weekend before the exam, book a hotel room, and study for 10 hours Saturday and 10 hours Sunday.',
        isCorrect: false,
        cognitiveTakeaway: 'Massed cramming disaster! You will suffer high cognitive fatigue, poor sleep consolidation, and catastrophic forgetting.',
      },
      {
        id: 'opt_2',
        text: 'Study for 40 minutes every single day across the 30 days, using the first 10 minutes of each session to test yourself on material from 2 days, 1 week, and 3 weeks ago.',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of spaced repetition and retrieval practice! Synaptic consolidation occurs during sleep intervals, resulting in 85%+ permanent retention.',
      },
      {
        id: 'opt_3',
        text: 'Read the certification manual once slowly with a yellow highlighter and take no notes or practice tests.',
        isCorrect: false,
        cognitiveTakeaway: 'Passive reading creates the illusion of competence while leaving retrieval pathways unformed.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_spaced_01',
      questionType: 'multiple_choice',
      prompt: 'According to Hermann Ebbinghaus\'s research on the Forgetting Curve, what happens to memory retention if information is not reviewed?',
      options: [
        { id: 'opt_a', text: 'Memory remains 100% stable indefinitely as long as you understood it initially', isCorrect: false },
        { id: 'opt_b', text: 'Retention drops rapidly in the first 24 to 48 hours, losing up to 70% of new material unless reinforced', isCorrect: true, feedbackText: 'Correct! Ebbinghaus proved that memory decay is steepest immediately following the initial learning event.' },
        { id: 'opt_c', text: 'Memory increases over time without any review through unconscious dreaming', isCorrect: false },
      ],
      cognitiveTakeaway: 'The forgetting curve is naturally steep; spaced intervention is required to flatten it.',
    },
  ],

  references: [
    {
      citation: 'Ebbinghaus, H. (1885). Über das Gedächtnis: Untersuchungen zur experimentellen Psychologie. Duncker & Humblot.',
      doiOrUrl: 'https://doi.org/10.1037/10011-000',
      relevance: 'The foundational scientific investigation discovering the mathematical curve of forgetting and the spacing effect.',
      displayOrder: 1,
    },
    {
      citation: 'Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. Psychological Bulletin, 132(3), 354–380.',
      doiOrUrl: 'https://doi.org/10.1037/0033-2909.132.3.354',
      relevance: 'Comprehensive modern meta-analysis demonstrating the overwhelming superiority of spaced practice over massed cramming.',
      displayOrder: 2,
    },
  ],

  tags: ['Learning Psychology', 'Spaced Repetition', 'Memory Consolidation', 'Ebbinghaus', 'Deliberate Practice'],
  relatedTopics: [
    { topicId: 'retrieval_practice', slug: 'retrieval-practice', title: 'Retrieval Practice', relationshipType: 'amplified_by' },
    { topicId: 'first_principles_thinking', slug: 'first-principles-thinking', title: 'First-Principles Thinking', relationshipType: 'foundational_to' },
  ],
  seoTitle: 'Spaced Repetition: How to Defeat the Forgetting Curve & Learn Fast | Mentalab Mind',
  seoDescription: 'Master Spaced Repetition and the Ebbinghaus Forgetting Curve. Learn how expanding review intervals double memory retention and eliminate exam cramming.',
  canonicalUrl: '/mind/learning-psychology/spaced-repetition',
  ogImageUrl: '/images/mind/spaced-repetition.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Spaced repetition operates through synaptic long-term potentiation triggered by desirable difficulty during memory retrieval intervals.',
};

export const TOPIC_SPACED_REPETITION_HINGLISH: MindTopicDetail = {
  ...TOPIC_SPACED_REPETITION_EN,
  title: 'Spaced Repetition: Forgetting Curve Ko Harakar Zindagi Bhar Yaad Rakhne Ka Science',
  subtitle: 'Hermann Ebbinghaus ka memory science: Exam se pehle ratne ke bajaye intervals me revision kyu jeetta hai.',
  shortDescription: 'Ek aisi learning technique jisme information ko theek us waqt dobara recall kiya jata hai jab dimaag use bhoolne wala hota hai, jisse wo permanent memory ban jati hai.',
  oneLineExplanation: 'Simple shabdon me: Theek us waqt revise karna jab baat dimaag se nikalne wali ho, taaki wo hamesha ke liye pakki ho jaye.',

  summary30s: 'Exam se ek raat pehle 10 ghante lagatar ratna shayad kal ke exam me pass karwa de, lekin do hafte baad dimaag bilkul saaf ho jata hai. Psychologist Hermann Ebbinghaus ne prove kiya tha ki insani dimaag nayi information ko tezi se bhoolta hai (Forgetting Curve). Spaced Repetition is curve ko todti hai: Day 1, Day 3, Day 7 aur Day 21 par chhota sa revision karne se wahi memory hamesha ke liye permanent ban jaati hai.',
  coreConcept: 'Dimaag ek hard drive nahi hai; yeh muscles jaisa hai. Jab aap ek hi din me bohot saara padhte hain (cramming), toh dimaag ko koi effort nahi lagta aur wo connections nahi banata. Lekin jab aap 3 din baad kisi cheez ko yaad karne ki koshish karte hain (Desirable Difficulty), toh dimaag ke neural circuits majboot hote hain.',
  summary60s: 'Cepeda et al. (2006) ke 250 se zyada studies ke analysis ne prove kiya ki padhai ko intervals me divide karne se retention 200% badh jata hai. Agar aap 10 ghante ki padhai ko 4 hafton me 25-25 minute baant dein, toh aap us insaan se 3 guna zyada yaad rakh payenge jisne weekend par 10 ghante lagatar padha tha.',

  quickTakeaways: [
    'Forgetting Curve: Agar revise na karein, toh 48 ghante me 70% nayi information gayab ho jaati hai',
    'Desirable Difficulty: Yaad karne me jitna zor lagega, dimaag utna hi majboot banega',
    'Expanding Intervals: Revision ka time expand hota hai: 1 din -> 3 din -> 1 hafta -> 1 mahina',
    'Mentalab Drills: Spaced repetition hi Mentalab speed calculation aur brain training ka engine hai',
  ],

  whyItHappens: 'Synaptic Pruning: Dimaag energy bachane ke liye un memories ko delete kar deta hai jo bar-bar use nahi hoti. Spaced review dimaag ko signal deta hai ki yeh zaroori hai.',
  evolutionaryMechanism: 'Jungli janwaron aur mausam ke niyam jo roz kaam aate the unhe yaad rakhna survival tha.',

  howItWorks: 'Aniket ne Corporate Law 3 hafte lagatar padha aur agle 1 mahine touch nahi kiya. Ek mahine baad sab bhool gaya. Solution: Roz subah 30 minute purane topics ke sawaal solve kijiye.',
  howToRespond: '2-2-2 Rule lagaiye: Naya concept seekhne ke baad: 2 din baad 5 minute, 2 hafte baad 5 minute, aur 2 mahine baad 5 minute revise kijiye.',

  reflectionPrompt: 'Aapne pichle saal kaunsi aisi cheez seekhi thi jo aap aaj poori tarah bhool chuke hain? Kya 10 minute ka monthly revision use bacha sakta tha?',
  seoTitle: 'Spaced Repetition Kya Hai? Memory Aur Learning Psychology | Mentalab Mind',
  seoDescription: 'Janiye Forgetting Curve ko todne ka scientific tareeqa. Spaced Repetition aur active recall se exams aur skills me permanent memory banayein.',
  canonicalUrl: '/mind/learning-psychology/spaced-repetition',
};

function createLocalizedSpacedRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_SPACED_REPETITION_EN,
    title,
    subtitle,
    oneLineExplanation: oneLine,
    summary30s,
    coreConcept,
    quickTakeaways: takeaways,
    seoTitle: `${title} | Mentalab Mind`,
    seoDescription: `${summary30s.slice(0, 150)}...`,
  };
}

export const TOPIC_SPACED_REPETITION: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SPACED_REPETITION_EN,
  hinglish: TOPIC_SPACED_REPETITION_HINGLISH,
  hi: createLocalizedSpacedRecord(
    'hi',
    'अंतरालीय पुनरावृत्ति (Spaced Repetition): विस्मृति वक्र को हराकर स्थायी स्मृति का निर्माण',
    'हरमन एबिंगहॉस का स्मृति विज्ञान: भूलने से ठीक पहले दोहराकर ज्ञान को स्थायी बनाने की कला।',
    'सरल शब्दों में: ठीक उस समय दोहराना जब दिमाग बात भूलने वाला हो, ताकि वह हमेशा के लिए याद हो जाए।',
    'अंतरालीय पुनरावृत्ति तब काम करती है जब अध्ययन सत्रों को बढ़ते हुए समय अंतरालों (1 दिन, 3 दिन, 1 सप्ताह) में फैलाया जाता है।',
    'एबिंगहॉस (1885) और सेपेदा (2006) के अनुसार, अंतराल पर की गई पढ़ाई एक बार में रटने की तुलना में 200% अधिक स्मृति बनाए रखती है।',
    [
      'विस्मृति वक्र: बिना दोहराव के 48 घंटों में 70% ज्ञान नष्ट हो जाता है',
      'वांछनीय कठिनाई: याद करने में लगने वाला मानसिक प्रयास स्मृति को मजबूत बनाता है',
      'बढ़ते अंतराल: दोहराने का समय धीरे-धीरे बढ़ाया जाता है',
      'मेंटालैब कनेक्शन: यह मानसिक गणना और सीखने की दक्षता का आधार है',
    ]
  ),
  gu: createLocalizedSpacedRecord(
    'gu',
    'સ્પેસ્ડ રિપીટીશન: વિસ્મૃતિના નિયમને હરાવીને કાયમી યાદશક્તિ મેળવવાની કળા',
    'હરમન એબિંગહોસનું સ્મૃતિ વિજ્ઞાન: ભૂલી જતાં પહેલાં પુનરાવર્તન કરીને યાદ રાખવાની રીત.',
    'સરળ શબ્દોમાં: બરાબર જ્યારે ભૂલાવા લાગે ત્યારે યાદ કરી લેવું જેથી તે કાયમ માટે યાદ રહે.',
    'સમયના અંતરે કરેલું પુનરાવર્તન મગજમાં ન્યુરોનલ જોડાણોને મજબૂત બનાવે છે.',
    'પરીક્ષા સમયે ઉજાગરા કરવા કરતાં નિયમિત થોડું થોડું વાંચવું વધુ અસરકારક છે.',
    ['વિસ્મૃતિ રોકો', 'સમયસર પુનરાવર્તન', 'કાયમી યાદશક્તિ']
  ),
  mr: createLocalizedSpacedRecord(
    'mr',
    'स्पेस्ड रिपीटिशन: विस्मरण वक्र मोडून कायमस्वरूपी स्मरणशक्ती मिळवण्याचे शास्त्र',
    'हर्मन एबिंगहॉस यांचे स्मृती विज्ञान: विसरण्याच्या आधी उजळणी करून ज्ञान पक्के करण्याची कला.',
    'सोप्या भाषेत: गोष्ट विसरण्याच्या अगदी जवळ असताना तिची उजळणी करणे जेणेकरून ती कायमची लक्षात राहील.',
    'विशिष्ट अंतराने केलेली उजळणी घोकंपट्टीपेक्षा कित्येक पटीने जास्त परिणामकारक ठरते.',
    'सतत थोडे थोडे वाचून उजळणी करणे हाच यशाचा मार्ग आहे.',
    ['विस्मरण टाळा', 'वेळेवर उजळणी करा', 'स्मरणशक्ती वाढवा']
  ),
  bn: createLocalizedSpacedRecord(
    'bn',
    'স্পেসড রিপিটেশন: বিস্মৃতির রেখাকে হারিয়ে চিরতরে মনে রাখার বিজ্ঞান',
    'হারম্যান এবিংহাসের স্মৃতিবিজ্ঞান: ভুলে যাওয়ার ঠিক আগেই পুনরাবৃত্তির জাদু।',
    'সহজ কথায়: ঠিক যখন ভুলে যাওয়ার উপক্রম হয় তখন রিভিশন দিয়ে স্মৃতি স্থায়ী করা।',
    'নির্দিষ্ট সময়ের ব্যবধানে পড়লে মেধা ও ধারণক্ষমতা বহু গুণে বৃদ্ধি পায়।',
    'পরীক্ষার আগের রাতের মুখস্থবিদ্যার চেয়ে ধাপে ধাপে পড়া অনেক বেশি কার্যকর।',
    ['বিস্মৃতি রোধ করুন', 'নিয়মিত বিরতিতে রিভিশন', 'স্থায়ী স্মৃতি']
  ),
  ta: createLocalizedSpacedRecord(
    'ta',
    'இடைவெளி மறுபடியும் படித்தல்: மறதி வளைவை வென்று நிரந்தரமாக நினைவில் கொள்ளும் அறிவியல்',
    'ஹெர்மன் எபிங்ஹாஸ் நினைவாற்றல் அறிவியல்: மறக்கும் தருவாயில் நினைவுகூர்ந்து மூளையை கூர்மையாக்குங்கள்.',
    'எளிய சொற்களில்: ஒரு விஷயத்தை மறக்கத் தொடங்கும் போது அதை மீண்டும் நினைவுகூர்ந்து நிரந்தரமாக்குவது.',
    'கால இடைவெளியில் படிப்பது நீண்ட கால நினைவாற்றலை பலப்படுத்துகிறது.',
    'ஒரே நாளில் மனப்பாடம் செய்வதை விட இடைவெளி விட்டு படிப்பதே சிறந்தது.',
    ['மறதியைத் தடுத்தல்', 'சரியான இடைவெளி', 'நீண்ட கால நினைவாற்றல்']
  ),
  te: createLocalizedSpacedRecord(
    'te',
    'స్పేస్డ్ రిపిటీషన్: మతిమరుపు వక్రాన్ని ఓడించి శాశ్వతంగా గుర్తుంచుకునే విజ్ఞానం',
    'హెర్మన్ ఎబ్బింగ్‌హాస్ జ్ఞాపకశక్తి పరిశోధన: మరచిపోయే ముందు పునశ్చరణ చేయడం.',
    'సులభమైన మాటల్లో: విషయాన్ని మరచిపోయే సమయంలోనే మళ్ళీ గుర్తు చేసుకుని శాశ్వతం చేసుకోవడం.',
    'నిర్దిష్ట వ్యవధిలో చదవడం వల్ల మెదడులో సమాచారం శాశ్వతంగా నిలిచిపోతుంది.',
    'పరీక్ష ముందు బట్టీ పట్టడం కంటే క్రమబద్ధమైన అధ్యయనమే మేలు.',
    ['మతిమరుపును జయించండి', 'వ్యవధితో పునశ్చరణ', 'శాశ్వత జ్ఞాపకశక్తి']
  ),
  kn: createLocalizedSpacedRecord(
    'kn',
    'ಸ್ಪೇಸ್ಡ್ ರಿಪಿಟಿಷನ್: ಮರೆವಿನ ವಕ್ರರೇಖೆಯನ್ನು ಸೋಲಿಸಿ ಶಾಶ್ವತವಾಗಿ ನೆನಪಿನಲ್ಲಿಡುವ ವಿಜ್ಞಾನ',
    'ಹರ್ಮನ್ ಎಬ್ಬಿಂಗ್‌ಹಾಸ್ ಸ್ಮರಣಾ ವಿಜ್ಞಾನ: ಮರೆಯುವ ಮುನ್ನವೇ ಪುನರಾವರ್ತಿಸಿ ನೆನಪು ಗಟ್ಟಿಗೊಳಿಸಿ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಮರೆತುಹೋಗುವ ಹಂತದಲ್ಲೇ ಮತ್ತೊಮ್ಮೆ ನೆನಪಿಸಿಕೊಂಡು ಶಾಶ್ವತವಾಗಿಸುವುದು.',
    'ನಿರ್ದಿಷ್ಟ ಸಮಯದ ಅಂತರದಲ್ಲಿ ಅಭ್ಯಾಸ ಮಾಡುವುದು ಜ್ಞಾನವನ್ನು ಶಾಶ್ವತಗೊಳಿಸುತ್ತದೆ.',
    'ಕೊನೆ ಗಳಿಗೆಯಲ್ಲಿ ಓದುವುದಕ್ಕಿಂತ ಹಂತ ಹಂತವಾಗಿ ಓದುವುದು ಉತ್ತಮ.',
    ['ಮರೆವು ತಡೆಯಿರಿ', 'ಕಾಲಾವಧಿಯ ಅಭ್ಯಾಸ', 'ಶಾಶ್ವತ ಸ್ಮರಣೆ']
  ),
  ml: createLocalizedSpacedRecord(
    'ml',
    'സ്പേസ്ഡ് റിപ്പറ്റീഷൻ: മറവി വക്രതയെ തോൽപ്പിച്ച് കാര്യങ്ങൾ സ്ഥിരമായി ഓർമ്മയിൽ നിർത്താം',
    'ഹെർമൻ എബ്ബിംഗ്ഹോസ് ഓർമ്മ ശാസ്ത്രം: മറന്നുപോകുന്നതിന് തൊട്ടുമുമ്പ് പുനരവലോകനം ചെയ്യുക.',
    'ലളിതമായി പറഞ്ഞാൽ: മറക്കാൻ തുടങ്ങുമ്പോൾ തന്നെ വീണ്ടും ഓർത്തെടുത്ത് ശാശ്വതമാക്കുക.',
    'കൃത്യമായ ഇടവേളകളിലുള്ള പഠനം ദീർഘകാല ഓർമ്മശക്തി വർദ്ധിപ്പിക്കുന്നു.',
    'പരീക്ഷയ്ക്ക് തൊട്ടുമുമ്പ് കാണാപാഠം പഠിക്കുന്നതിനേക്കാൾ മികച്ചതാണ് ഇടവേളകളിലെ പഠനം.',
    ['മറവി തടയുക', 'കൃത്യമായ ഇടവേള', 'സ്ഥിരമായ ഓർമ്മ']
  ),
  pa: createLocalizedSpacedRecord(
    'pa',
    'ਸਪੇਸਡ ਰੀਪੀਟੀਸ਼ਨ: ਭੁੱਲਣ ਦੀ ਆਦਤ ਨੂੰ ਹਰਾ ਕੇ ਪੱਕੇ ਤੌਰ ਤੇ ਯਾਦ ਰੱਖਣ ਦਾ ਢੰਗ',
    'ਹਰਮਨ ਐਬਿੰਗਹਾਸ ਦਾ ਯਾਦਦਾਸ਼ਤ ਵਿਗਿਆਨ: ਭੁੱਲਣ ਤੋਂ ਠੀਕ ਪਹਿਲਾਂ ਦੁਹਰਾਈ ਕਰਨ ਦਾ ਕਮਾਲ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਠੀਕ ਉਸ ਵੇਲੇ ਦੁਹਰਾਉਣਾ ਜਦੋਂ ਦਿਮਾਗ ਗੱਲ ਭੁੱਲਣ ਲੱਗੇ, ਤਾਂ ਜੋ ਉਹ ਪੱਕੀ ਹੋ ਜਾਵੇ।',
    'ਵਕਫ਼ੇ ਨਾਲ ਕੀਤੀ ਪੜ੍ਹਾਈ ਲੰਬੇ ਸਮੇਂ ਤੱਕ ਯਾਦ ਰਹਿੰਦੀ ਹੈ।',
    'ਇੱਕੋ ਰਾਤ ਵਿੱਚ ਰੱਟਾ ਲਾਉਣ ਨਾਲੋਂ ਸਮੇਂ ਸਿਰ ਦੁਹਰਾਈ ਬਿਹਤਰ ਹੈ।',
    ['ਭੁੱਲਣ ਤੋਂ ਬਚੋ', 'ਸਮੇਂ ਸਿਰ ਦੁਹਰਾਈ', 'ਪੱਕੀ ਯਾਦਦਾਸ਼ਤ']
  ),
  ur: createLocalizedSpacedRecord(
    'ur',
    'وقفاتی دہرائی: بھولنے کے عمل کو شکست دے کر مستقل یادداشت حاصل کرنے کی سائنس',
    'ہرمن ایبنگہاس کی یادداشت کی تحقیق: بھولنے سے عین پہلے دہرا کر علم کو پختہ بنانا۔',
    'آسان الفاظ میں: ٹھیک اس وقت دہرانا جب ذہن بات بھولنے کے قریب ہو تاکہ وہ ہمیشہ یاد رہے۔',
    'مخصوص وقفوں سے کی گئی دہرائی رٹنے کے مقابلے میں کہیں زیادہ پائیدار نتائج دیتی ہے۔',
    'امتحان کی رات جاگنے کے بجائے باقاعدہ وقفوں سے پڑھنا مفید ہے۔',
    ['فراموشی کا خاتمہ', 'بروقت دہرائی', 'مستقل یادداشت']
  ),
  or: createLocalizedSpacedRecord(
    'or',
    'ସ୍ପେସ୍‌ଡ୍ ରିପିଟିସନ୍: ବିସ୍ମୃତିର ନିୟମକୁ ହରାଇ ସ୍ଥାୟୀ ସ୍ମୃତି ଗଠନ କରିବାର ବିଜ୍ଞାନ',
    'ହରମାନ୍ ଏବିଙ୍ଗହାଉସ୍‌ଙ୍କ ସ୍ମୃତି ବିଜ୍ଞାନ: ଭୁଲିଯିବା ଆଗରୁ ପୁନରାବୃତ୍ତି କରିବାର କଳା।',
    'ସହଜ ଭାଷାରେ: ଠିକ୍ ଭୁଲିଯିବା ସମୟରେ ପୁଣି ଥରେ ମନେ ପକାଇ ସ୍ଥାୟୀ କରିବା।',
    'ନିର୍ଦ୍ଦିଷ୍ଟ ବ୍ୟବଧାନରେ ପଢ଼ିବା ଦ୍ୱାରା ଜ୍ଞାନ ଦୀର୍ଘକାଳୀନ ହୁଏ।',
    'ଶେଷ ମୁହୂର୍ତ୍ତରେ ରଟିବା ଅପେକ୍ଷା କ୍ରମାନ୍ୱୟରେ ପଢ଼ିବା ଉତ୍ତମ।',
    ['ବିସ୍ମୃତି ରୋକନ୍ତୁ', 'ସମୟାନୁସାରେ ପୁନରାବୃତ୍ତି', 'ସ୍ଥାୟୀ ସ୍ମୃତି']
  ),
  as: createLocalizedSpacedRecord(
    'as',
    'স্পেচড ৰিপিটেশ্বন: বিস্মৃতিৰ ৰেখাক পৰাস্ত কৰি চিৰদিনলৈ মনত ৰখাৰ বিজ্ঞান',
    'হাৰমেন এবিংহাউছৰ স্মৃতিবিজ্ঞান: পাহৰি যোৱাৰ ঠিক আগে আগে পুনৰাবৃত্তি কৰাৰ কৌশল।',
    'সহজ কথাত: ঠিক পাহৰিবলৈ ধৰাৰ সময়তে মনত পেলাই স্মৃতিক স্থায়ী কৰা।',
    'নিৰ্দিষ্ট ব্যৱধানত কৰা অধ্যয়নে স্মৃতিশক্তি স্থায়ীভাৱে শক্তিশালী কৰে।',
    'পৰীক্ষাৰ আগমুহূৰ্তত মুখস্থ কৰাতকৈ ব্যৱধানযুক্ত অধ্যয়নহে সফল।',
    ['বিস্মৃতি ৰোধ কৰক', 'নিয়মীয়া ব্যৱধানত পুনৰাবৃত্তি', 'স্থায়ী স্মৃতিশক্তি']
  ),
};
