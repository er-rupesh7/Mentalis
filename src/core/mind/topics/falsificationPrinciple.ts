import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Critical Thinking Track
 * Topic: The Falsification Principle: Looking for Disproof
 * Category: Critical Thinking (critical_thinking)
 * 
 * Academic Grounding:
 * - Popper (1934, 1959): The Logic of Scientific Discovery
 * - Taleb (2007): The Black Swan: The Impact of the Highly Improbable
 * - Wason (1960): On the Failure to Eliminate Hypotheses in a Conceptual Task (2-4-6 task)
 */

export const TOPIC_FALSIFICATION_PRINCIPLE_EN: MindTopicDetail = {
  id: 'falsification_principle',
  categoryId: 'critical_thinking',
  slug: 'falsification-principle',
  difficulty: 'advanced',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 2,
  viewCount: 5890,
  shareCount: 490,
  bookmarkCount: 1060,
  title: 'The Falsification Principle: Why Looking for Disproof is Real Thinking',
  subtitle: 'Karl Popper and the Black Swan: why a million white swans cannot prove a theory, but a single black swan destroys it.',
  shortDescription: 'The philosophical and scientific principle that a hypothesis must be inherently disprovable to be considered scientific and rationally meaningful.',
  oneLineExplanation: 'In simple terms: You don\'t test an idea by trying to prove it right; you test it by trying your hardest to prove it wrong.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'If you believe "All swans are white," observing 100,000 white swans does not prove your rule—it only means you haven\'t seen a black swan yet. But spotting just ONE single black swan shatters the theory instantly. Philosopher Karl Popper established that true scientific and critical thinking is not about collecting supportive evidence (which confirmation bias does effortlessly); it is about actively searching for the single disconfirming fact that would prove you wrong.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Karl Popper formulated the Falsification Principle as the solution to the "Problem of Induction" in epistemology. Inductive verification can never establish universal truth because future observations remain infinite. Therefore, Popper argued that science advances through deduction and falsification: we propose bold hypotheses and subject them to ruthless attempts at refutation. Hypotheses that survive rigorous falsification tests are temporarily accepted as "corroborated," never "proven."',
  summary60s: 'In Peter Wason’s famous 1960 "2-4-6" experiment, participants were given the sequence 2, 4, 6 and told it conformed to a secret mathematical rule. They were invited to test their own triples. Most people immediately guessed "6, 8, 10" or "20, 22, 24" (testing the hypothesis "even numbers increasing by two"). The experimenter said "Yes." They announced their rule with supreme confidence. But the secret rule was simply "any three ascending numbers." They failed because they only tested triples that would CONFIRM their guess, never testing a triple like "1, 2, 3" or "5, 7, 9" that could DISPROVE it.',

  quickTakeaways: [
    'Asymmetry of Proof: No amount of confirmations can definitively prove a theory; a single counter-example can refute it',
    'Unfalsifiable Ideas are Unscientific: If an idea cannot produce a scenario that would prove it wrong (like astrology or unfalsifiable conspiracy theories), it is faith, not science',
    'Red Teaming Your Mind: The fastest way to stress-test your business strategy or worldview is to deliberately ask: "What fact, if true, would completely ruin my plan?"',
    'The Black Swan Reality: High-impact outliers exist; preparing for disconfirmation protects against catastrophic blind spots',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Positive test strategy bias. Human pattern-recognition is naturally built to find coherence and affirmative matches rather than negative contradictions. Searching for disproof requires high cognitive effort and induces ego distress because finding disproof means admitting error.',
  evolutionaryMechanism: 'Tribal cohesion rewarded sharing unifying cultural dogmas that were impossible to disprove, shielding the clan from internal conflict.',

  // SECTION E — HOW DOES IT WORK?
  howItWorks: 'Distinguishing Science from Pseudoscience: If an astrologer says "You are a quiet person, but you sometimes have explosive energy," ANY behavior you exhibit confirms it. It is unfalsifiable. In contrast, Einstein\'s General Theory of Relativity predicted that gravity bends starlight by an exact degree during a solar eclipse; if Arthur Eddington’s 1919 observations showed no deflection, Einstein’s entire theory was dead. That vulnerability makes it genuine science.',
  whereYouEncounterIt: 'Medical drug clinical trials (placebo falsification), venture capital startup thesis validation, engineering stress-testing, courtroom cross-examination, and scientific peer review.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Verification Thinking vs. Falsification Thinking',
    description: 'The difference between hunting for validation and hunting for truth.',
    analogySideA: {
      label: 'Verification (Amateur Mindset)',
      detail: 'Has a theory -> Hunts for 5 articles and 3 anecdotes that agree with it -> Concludes: "I am definitely right!"',
    },
    analogySideB: {
      label: 'Falsification (Scientific Mindset)',
      detail: 'Has a theory -> Asks: "What piece of data would destroy this?" -> Actively hunts for that data -> Holds belief lightly.',
    },
  },

  researchSummary: 'Wason (1960) documented in the Quarterly Journal of Experimental Psychology that only 21% of intelligent participants discovered the true rule on their first attempt, because over 80% persisted exclusively in testing instances that confirmed their initial hypothesis rather than attempting to falsify it.',
  limitationsAndControversies: 'Philosopher Thomas Kuhn pointed out that in real-world science, scientists do not instantly abandon a great paradigm after a single anomalous data point. Sometimes the anomaly is due to faulty lab equipment or measurement error (the Duhem-Quine thesis). Falsification is an ideal regulatory principle rather than a robotic switch.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Holding a personal belief or business plan where you cannot name a single hypothetical discovery that would make you change your mind',
    'Explaining away every contradiction with an ad-hoc excuse ("The medicine worked, but negative energy in the room blocked it")',
    'Only reading news sources, subreddits, or newsletters that agree with your existing political and economic convictions',
    'Reacting with hostility when someone asks: "What would have to happen for you to admit you were wrong?"',
    'Confusing an absence of contradictory evidence with positive proof of truth',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_falsify_01',
      scenarioType: 'indian_context',
      title: 'The Unfalsifiable Startup Pitch',
      vignette: 'An aspiring founder in Bengaluru pitches a new hyper-local grocery delivery app to angel investors. He claims: "Every Indian household will switch to our platform within 6 months because everyone loves fast delivery." A seasoned partner asks: "What metric or user behavior over the next 90 days would prove to you that this model is unviable in tier-2 cities?" The founder looks offended: "Nothing can prove it unviable; fast delivery is the future. If people don\'t buy, it just means we need to spend more on digital ads." The investor quietly passes on the deal.',
      breakdownAnalysis: 'The founder’s hypothesis is completely unfalsifiable in his own mind. Any outcome—success or failure—is interpreted as a reason to continue. This is religious dogma, not an entrepreneurial hypothesis.',
      recommendedAction: 'The founder must establish explicit falsification criteria: "If our customer acquisition cost exceeds ₹350 and 30-day retention drops below 18% in our Kanpur pilot, our core hypothesis is falsified and we will pivot."',
    },
  ],

  examples: [
    {
      id: 'ex_falsify_01',
      domain: 'health',
      displayOrder: 1,
      title: 'Double-Blind Clinical Trials',
      description: 'Medical science does not prove a drug works by giving it to 100 sick people and seeing if they get better. It gives 50 people the drug and 50 people a sugar pill (placebo) under blind conditions, specifically attempting to falsify the claim that the drug is superior to the human body\'s natural recovery.',
      takeaway: 'Controlled placebos are formalized falsification instruments.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'To integrate the falsification principle into your decisions, use the "Kill the Idea Protocol." Whenever you or your team propose a strategy, schedule a 30-minute "Pre-Mortem" meeting dedicated exclusively to answering: "Imagine it is two years in the future and this venture has failed catastrophically. What exact events caused the collapse?"',
  psychologicalDefenses: [
    'Define the Kill-Condition: Before launching any project, write down in advance: "I will stop if X metric falls below Y by date Z"',
    'The Popper Question: In every debate, ask the other person (and yourself): "What specific evidence would convince you that your stance is incorrect?" If the answer is "Nothing," stop debating',
    'Seek the Black Swan: Actively search for the edge cases, dissatisfied customers, and anomalous bugs that threaten your neat theory',
    'Celebrate Being Proven Wrong: Reframe disproof as saving yourself five years of wasted life on a false path',
  ],

  commonMisconceptions: [
    {
      misconception: 'If an idea is falsified, it means you were stupid or wasted your time.',
      reality: 'Falsifying a hypothesis is a major scientific victory. Thomas Edison famously said: "I have not failed. I\'ve just found 10,000 ways that won\'t work."',
    },
  ],

  reflectionPrompt: 'Name one core belief you currently hold about work, success, or relationships. What specific discovery would force you to abandon that belief?',

  interactiveScenario: {
    id: 'interactive_falsify_01',
    topicId: 'falsification_principle',
    scenarioTitle: 'Stress-Testing the Marketing Campaign',
    scenarioDescription: 'Your marketing lead presents a new advertising campaign and states: "This campaign is guaranteed to increase revenue by 30%. There is zero risk of failure."',
    vignetteSourceType: 'workplace',
    options: [
      {
        id: 'opt_1',
        text: 'Applaud their confidence, release the entire ₹50 Lakh budget immediately, and tell the team to start executing.',
        isCorrect: false,
        cognitiveTakeaway: 'Blind verification thinking that invites catastrophic financial disaster.',
      },
      {
        id: 'opt_2',
        text: 'Ask the Popper falsification question: "What is our small-scale pilot test, and what exact conversion numbers over the next 14 days will tell us that this campaign is failing so we can pull the plug before burning our budget?"',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of critical thinking! You mandate explicit disconfirmation metrics to protect capital and discover truth.',
      },
      {
        id: 'opt_3',
        text: 'Fire the marketing lead on the spot for being optimistic.',
        isCorrect: false,
        cognitiveTakeaway: 'Hostile reactivity that destroys psychological safety and prevents collaborative hypothesis testing.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_falsify_01',
      questionType: 'multiple_choice',
      prompt: 'According to philosopher Karl Popper, what distinguishing characteristic separates genuine scientific theories from pseudoscience and dogma?',
      options: [
        { id: 'opt_a', text: 'The theory must be supported by at least 1,000 published laboratory studies', isCorrect: false },
        { id: 'opt_b', text: 'The theory must make specific, testable predictions that are capable of being proven false by empirical observation', isCorrect: true, feedbackText: 'Correct! Popper’s criterion of demarcation is falsifiability: a scientific theory must take risks and be vulnerable to disproof.' },
        { id: 'opt_c', text: 'The theory must be so broad that it can explain every possible human behavior', isCorrect: false },
      ],
      cognitiveTakeaway: 'Falsifiability is the boundary line separating empirical science from unfalsifiable belief systems.',
    },
  ],

  references: [
    {
      citation: 'Popper, K. (1959). The logic of scientific discovery. Routledge.',
      doiOrUrl: 'https://doi.org/10.4324/9780203713068',
      relevance: 'The foundational philosophy of science masterpiece introducing the criterion of falsifiability.',
      displayOrder: 1,
    },
    {
      citation: 'Wason, P. C. (1960). On the failure to eliminate hypotheses in a conceptual task. Quarterly Journal of Experimental Psychology, 12(3), 129–140.',
      doiOrUrl: 'https://doi.org/10.1080/17470216008416717',
      relevance: 'The classic 2-4-6 empirical experiment proving human reluctance to seek disconfirming evidence.',
      displayOrder: 2,
    },
  ],

  tags: ['Critical Thinking', 'Falsification', 'Karl Popper', 'Scientific Method', 'Mental Models', 'Black Swan'],
  relatedTopics: [
    { topicId: 'first_principles_thinking', slug: 'first-principles-thinking', title: 'First-Principles Thinking', relationshipType: 'amplified_by' },
    { topicId: 'confirmation_bias', slug: 'confirmation-bias', title: 'Confirmation Bias', relationshipType: 'counteracted_by' },
  ],
  seoTitle: 'The Falsification Principle: Why Looking for Disproof is Real Thinking | Mentalab Mind',
  seoDescription: 'Master the Falsification Principle by Karl Popper. Learn why hunting for black swans stress-tests decisions, destroys confirmation bias, and sharpens intellect.',
  canonicalUrl: '/mind/critical-thinking/falsification-principle',
  ogImageUrl: '/images/mind/falsification-principle.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'The falsification principle resolves the problem of induction by requiring hypotheses to be empirically refutable through deductive asymmetry.',
};

export const TOPIC_FALSIFICATION_PRINCIPLE_HINGLISH: MindTopicDetail = {
  ...TOPIC_FALSIFICATION_PRINCIPLE_EN,
  title: 'Falsification Principle: Apni Baat Ko Galat Saabit Karne Ki Koshish Karna Hi Asali Samajhdari Kyun Hai?',
  subtitle: 'Karl Popper aur Black Swan logic: 1 lakh safed hans milkar bhi sachai prove nahi kar sakte, lekin ek kaala hans sab badal deta hai.',
  shortDescription: 'Ek aisi philosophical aur critical thinking technique jisme hum kisi vichaar ko sahi saabit karne ke saboot dhundne ke bajaye use galat saabit karne wale facts dhundte hain.',
  oneLineExplanation: 'Simple shabdon me: Apne idea ko tab tak test kijiye jab tak aapko wo ek kami na mil jaye jo use fail kar sakti hai.',

  summary30s: 'Agar aapka belief hai ki "Duniya ke saare hans safed hote hain," toh 1 lakh safed hans dekhna yeh prove nahi karta ki aap sahi hain—iska matlab bas itna hai ki aapne abhi tak kaala hans nahi dekha. Lekin jaise hi EK kaala hans saamne aata hai, aapki saalon purani theory ek second me toot jaati hai. Philosopher Karl Popper ne kaha tha ki asali critical thinking supportive proofs ikattha karne me nahi, balki us ek kaale hans (kamzori) ko dhundne me hai jo aapko galat saabit kar sake.',
  coreConcept: 'Popper ne bataya ki science aur andhavishwas me farq "Falsifiability" ka hota hai. Astrology ya conspiracy theories me har cheez ko justify kar liya jata hai (unhe galat saabit karna impossible hota hai). Lekin real science wahi hai jisme yeh saaf pata ho ki "Agar X ghatna hui, toh meri theory galat maan li jayegi."',
  summary60s: 'Peter Wason ke 1960 ke experiment me logon ko "2, 4, 6" sequence dekar secret rule guess karne ko kaha gaya. Zyadatar logon ne "6, 8, 10" try kiya aur socha rule hai "even numbers + 2." Sab galat the! Secret rule tha "any ascending numbers." Log isliye haar gaye kyunki wo sirf wahi numbers bol rahe the jo unki soch ko confirm karein, unhone kabhi "1, 2, 3" bolkar apni soch ko galat saabit karne ka risk hi nahi liya.',

  quickTakeaways: [
    'Suboot ki Asymmetry: Hazaron confirmations theory prove nahi kar sakte, ek disproof use tod deta hai',
    'Unfalsifiable baatein bekaar hain: Agar kisi baat ko galat prove karne ka koi rasta hi na ho, toh wo science nahi andhavishwas hai',
    'Pre-Mortem Thinking: Kisi naye business me pehle sochiye: "Kaunsi aisi ek cheez hai jo is project ko dooba sakti hai?"',
    'Galat hona victory hai: Kisi galat raaste se jaldi pichhe hatna aapke saalon ka waqt bachata hai',
  ],

  whyItHappens: 'Positive test strategy: Dimaag ko confirm hone me maza aata hai aur galti maanne me dukh hota hai. Isliye dimaag counter-evidence se aankhein chura leta hai.',
  evolutionaryMechanism: 'Tribe ke purane beliefs par sawaal uthane par tribe se bahar nikal diye jane ka darr rehta tha.',

  howItWorks: 'Startup founder kehta hai: "Mera idea fail ho hi nahi sakta." Critical investor poochta hai: "Agle 30 din me kaunsa data dekh kar aap maanoge ki yeh idea tier-2 cities me nahi chalega?"',
  howToRespond: 'Har debate me khud se aur doosro se puchiye: "Aisa kaunsa fact ya data dekh kar aap maanenge ki aapki baat galat thi?" Agar jawab "Kuch bhi nahi" hai, toh aage baat karna bekaar hai.',

  reflectionPrompt: 'Apni kisi aisi pakki soch ke baare me sochiye jisme aap 100% sure hain. Kaunsa aisa sach hoga jo aapko apni soch badalne par majboor kar dega?',
  seoTitle: 'Falsification Principle Kya Hai? Karl Popper Critical Thinking | Mentalab Mind',
  seoDescription: 'Janiye Karl Popper ka Falsification Principle. Black swan logic, scientific method aur confirmation bias ko todne ke practical mental models.',
  canonicalUrl: '/mind/critical-thinking/falsification-principle',
};

function createLocalizedFalsifyRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_FALSIFICATION_PRINCIPLE_EN,
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

export const TOPIC_FALSIFICATION_PRINCIPLE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_FALSIFICATION_PRINCIPLE_EN,
  hinglish: TOPIC_FALSIFICATION_PRINCIPLE_HINGLISH,
  hi: createLocalizedFalsifyRecord(
    'hi',
    'मिथ्यापनीयता का सिद्धांत (Falsification Principle): असत्य सिद्ध करने की खोज ही वास्तविक चिंतन है',
    'कार्ल पॉपर और ब्लैक स्वान तर्क: लाखों सफेद हंस नियम साबित नहीं कर सकते, पर एक काला हंस उसे ध्वस्त कर देता है।',
    'सरल शब्दों में: किसी विचार को सही सिद्ध करने के बजाय उसे गलत साबित करने वाले प्रमाणों की खोज करना।',
    'मिथ्यापनीयता का सिद्धांत वैज्ञानिक चिंतन की रीढ़ है, जो कहता है कि कोई भी सिद्धांत तभी वैज्ञानिक है जब उसे गलत साबित करने की संभावना मौजूद हो।',
    'कार्ल पॉपर (1959) के अनुसार, विज्ञान सत्यापन से नहीं, बल्कि निरंतर खंडन और सुधार से आगे बढ़ता है।',
    [
      'प्रमाण की विषमता: लाखों पुष्टि भी सिद्धांत सिद्ध नहीं कर सकतीं, पर एक अपवाद उसे तोड़ देता है',
      'अखंडनीय विचार अंधविश्वास हैं: जिस विचार को गलत साबित न किया जा सके, वह विज्ञान नहीं है',
      'कमियों की खोज: अपनी रणनीतियों को मजबूत करने के लिए उनकी संभावित कमजोरियों को खोजें',
      'गलती का स्वागत: अपनी भूल पहचानना समय और संसाधनों की बचत करता है',
    ]
  ),
  gu: createLocalizedFalsifyRecord(
    'gu',
    'મિથ્યાપનીયતાનો સિદ્ધાંત: ખોટું સાબિત કરવાની શોધ એ જ સાચું ચિંતન છે',
    'કાર્લ પોપર અને બ્લેક સ્વાન તર્ક: માત્ર સમર્થન શોધવાને બદલે ભૂલો શોધવાની વૈજ્ઞાનિક પદ્ધતિ.',
    'સરળ શબ્દોમાં: પોતાના વિચારને સાચો સાબિત કરવાને બદલે તેને ખોટો પાડી શકે તેવા પુરાવા શોધવા.',
    'કોઈપણ વિચાર ત્યારે જ વૈજ્ઞાનિક બને છે જ્યારે તેને પડકારી શકાય અને ખોટો સાબિત કરી શકાય.',
    'પોતાની ભૂલો સ્વીકારીને વિચાર સુધારવો એ જ બુદ્ધિમાની છે.',
    ['વિરોધાભાસ શોધો', 'અંધશ્રદ્ધાથી બચો', 'તાર્કિક વિચાર કરો']
  ),
  mr: createLocalizedFalsifyRecord(
    'mr',
    'फॉल्सिफिकेशन प्रिन्सिपल: चूक शोधणे हेच खरे वैज्ञानिक विचारसरणीचे लक्षण',
    'कार्ल पॉपर यांचा ब्लॅक स्वान सिद्धांत: केवळ समर्थन गोळा करण्याऐवजी मर्यादा तपासणे.',
    'सोप्या भाषेत: स्वतःचा विचार खरा ठरवण्यापेक्षा त्याला चुकीचे सिद्ध करणारा पुरावा शोधणे.',
    'कार्ल पॉपर यांच्या मते, जो सिद्धांत खोडून काढता येत नाही तो वैज्ञानिक नसतो.',
    'आपल्या मतातील त्रुटी मान्य करून सत्य स्वीकारणे हेच ज्ञानाचे लक्षण आहे.',
    ['त्रुटी शोधा', 'अंधश्रद्धा टाळा', 'वैज्ञानिक विचार करा']
  ),
  bn: createLocalizedFalsifyRecord(
    'bn',
    'ফলসিফিকেশন তত্ত্ব: ভুল প্রমাণ করার চেষ্টাই প্রকৃত চিন্তাশক্তি',
    'কার্ল পপারের ব্ল্যাক সোয়ান যুক্তি: অন্ধ সমর্থন না খুঁজে সীমাবদ্ধতা যাচাইয়ের বিজ্ঞান।',
    'সহজ কথায়: নিজের ধারণাকে সত্য প্রমাণের বদলে তা ভুল প্রমাণ করতে পারে এমন তথ্য খোঁজা।',
    'যে তত্ত্বকে ভুল প্রমাণের কোনো সুযোগ নেই তা বিজ্ঞান নয়, অন্ধবিশ্বাস।',
    'যুক্তিনির্ভর চিন্তা মানুষকে ভুলের হাত থেকে রক্ষা করে।',
    ['সীমাবদ্ধতা খুঁজুন', 'অন্ধবিশ্বাস ত্যাগ করুন', 'যুক্তি দিয়ে ভাবুন']
  ),
  ta: createLocalizedFalsifyRecord(
    'ta',
    'பொய்ப்பித்தல் கோட்பாடு: தவறைத் தேடுவதே உண்மையான சிந்தனை',
    'கார்ல் பாப்பர் மற்றும் பிளாக் ஸ்வான் தர்க்கம்: ஆதாரங்களைத் தேடாமல் எல்லைகளைச் சோதித்தல்.',
    'எளிய சொற்களில்: ஒரு யோசனையை சரியென நிரூபிப்பதை விட, அதை தவறு என நிரூபிக்கும் ஆதாரங்களைத் தேடுவது.',
    'பொய்ப்பிக்க முடியாத எந்தவொரு கருத்தும் அறிவியல் ஆகாது, அது வெறும் நம்பிக்கை மட்டுமே.',
    'தவறுகளை உணர்ந்து திருத்திக்கொள்வதே அறிவுடைமை.',
    ['தவறுகளைத் தேடுங்கள்', 'நம்பிக்கையை சோதியுங்கள்', 'அறிவியல் பார்வை']
  ),
  te: createLocalizedFalsifyRecord(
    'te',
    'ఫాల్సిఫికేషన్ సిద్ధాంతం: తప్పును కనుగొనడమే నిజమైన ఆలోచన',
    'కార్ల్ పాప్పర్ మరియు బ్లాక్ స్వాన్ లాజిక్: కేవలం రుజువులను వెతకకుండా పరిమితులను పరీక్షించడం.',
    'సులభమైన మాటల్లో: ఒక ఆలోచనను సరైనదని నిరూపించడానికి కాకుండా, అది తప్పని నిరూపించే సాక్ష్యాలను వెతకడం.',
    'తప్పు అని నిరూపించలేని సిద్ధాంతం సైన్స్ కాదు, మూఢనమ్మకం మాత్రమే.',
    'పరిమితులను గుర్తించి సరైన నిర్ణయాలు తీసుకోండి.',
    ['లోపాలను గుర్తించండి', 'నిజాన్ని శోధించండి', 'శాస్త్రీయ దృక్పథం']
  ),
  kn: createLocalizedFalsifyRecord(
    'kn',
    'ಫಾಲ್ಸಿಫಿಕೇಶನ್ ತತ್ವ: ತಪ್ಪನ್ನು ಹುಡುಕುವುದೇ ನಿಜವಾದ ಆಲೋಚನೆ',
    'ಕಾರ್ಲ್ ಪಾಪರ್ ಮತ್ತು ಬ್ಲ್ಯಾಕ್ ಸ್ವಾನ್ ತರ್ಕ: ಕೇವಲ ಸಮರ್ಥನೆ ಹುಡುಕದೆ ಮಿತಿಗಳನ್ನು ಪರೀಕ್ಷಿಸುವ ವಿಜ್ಞಾನ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಸ್ವಂತ ಕಲ್ಪನೆಯನ್ನು ಸರಿ ಎಂದು ಸಾಬೀತುಪಡಿಸುವ ಬದಲು ತಪ್ಪು ಎಂದು ಸಾಬೀತುಪಡಿಸುವ ಪುರಾವೆ ಹುಡುಕುವುದು.',
    'ತಪ್ಪು ಎಂದು ಸಾಬೀತುಪಡಿಸಲು ಸಾಧ್ಯವಾಗದ ವಿಷಯವು ವಿಜ್ಞಾನವಾಗಲು ಸಾಧ್ಯವಿಲ್ಲ.',
    'ತಪ್ಪುಗಳನ್ನು ತಿದ್ದಿಕೊಳ್ಳುವುದೇ ಜ್ಞಾನದ ವಿಕಾಸ.',
    ['ಮಿತಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ', 'ಮೂಢನಂಬಿಕೆ ಬೇಡ', 'ವೈಜ್ಞಾನಿಕವಾಗಿ ಯೋಚಿಸಿ']
  ),
  ml: createLocalizedFalsifyRecord(
    'ml',
    'ഫാൾസിഫിക്കേഷൻ തത്വം: തെറ്റുകൾ കണ്ടെത്തലാണ് യഥാർത്ഥ ചിന്ത',
    'കാൾ പോപ്പറും ബ്ലാക്ക് സ്വാൻ യുക്തിയും: കേവലം തെളിവുകൾ തേടാതെ പരിമിതികൾ പരിശോധിക്കുക.',
    'ലളിതമായി പറഞ്ഞാൽ: സ്വന്തം വാദം ശരിയാണെന്ന് തെളിയിക്കുന്നതിന് പകരം അത് തെറ്റാണെന്ന് തെളിയിക്കാൻ ശ്രമിക്കുക.',
    'തെറ്റാണെന്ന് തെളിയിക്കാൻ കഴിയാത്ത ഒരു ആശയവും ശാസ്ത്രീയമല്ല.',
    'വിമർശനാത്മകമായ ചിന്ത സത്യത്തിലേക്ക് നയിക്കുന്നു.',
    ['പരിമിതികൾ കണ്ടെത്തുക', 'അന്ധവിശ്വാസം ഒഴിവാക്കുക', 'ശാസ്ത്രീയ ചിന്ത']
  ),
  pa: createLocalizedFalsifyRecord(
    'pa',
    'ਫਾਲਸੀਫਿਕੇਸ਼ਨ ਸਿਧਾਂਤ: ਗਲਤੀ ਲੱਭਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਹੀ ਅਸਲੀ ਸੋਚ ਹੈ',
    'ਕਾਰਲ ਪੌਪਰ ਅਤੇ ਬਲੈਕ ਸਵਾਨ ਤਰਕ: ਸਿਰਫ਼ ਸਮਰਥਨ ਲੱਭਣ ਦੀ ਥਾਂ ਕਮੀਆਂ ਪਰਖਣ ਦਾ ਵਿਗਿਆਨ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਆਪਣੇ ਵਿਚਾਰ ਨੂੰ ਸਹੀ ਸਾਬਤ ਕਰਨ ਦੀ ਬਜਾਏ ਉਸ ਨੂੰ ਗਲਤ ਸਾਬਤ ਕਰਨ ਵਾਲੇ ਸਬੂਤ ਲੱਭਣਾ।',
    'ਜਿਸ ਵਿਚਾਰ ਨੂੰ ਗਲਤ ਸਾਬਤ ਨਾ ਕੀਤਾ ਜਾ ਸਕੇ, ਉਹ ਵਿਗਿਆਨ ਨਹੀਂ ਬਲਕਿ ਅੰਧਵਿਸ਼ਵਾਸ ਹੈ।',
    'ਆਪਣੀਆਂ ਕਮੀਆਂ ਲੱਭ ਕੇ ਸੁਧਾਰ ਕਰਨਾ ਹੀ ਸਿਆਣਪ ਹੈ।',
    ['ਕਮੀਆਂ ਪਛਾਣੋ', 'ਅੰਧਵਿਸ਼ਵਾਸ ਤਿਆਗੋ', 'ਵਿਗਿਆਨਕ ਸੋਚ ਰੱਖੋ']
  ),
  ur: createLocalizedFalsifyRecord(
    'ur',
    'نظریہ ابطال پذیری: غلطی کی تلاش ہی حقیقی دانشمندی ہے',
    'کارل پاپر اور بلیک سوان لاجک: اندھی حمایت کے بجائے خامیوں کو پرکھنے کا سائنسی طریقہ۔',
    'آسان الفاظ میں: اپنے نظریے کو صحیح ثابت کرنے کے بجائے اسے غلط ثابت کرنے والے شواہد تلاش کرنا۔',
    'جس نظریے کو غلط ثابت کرنے کا کوئی طریقہ نہ ہو وہ سائنس نہیں بلکہ توہم پرستی ہے۔',
    'تنقیدی سوچ انسان کو مغالطوں اور بڑے نقصانات سے بچاتی ہے۔',
    ['خامیاں تلاش کریں', 'توہم پرستی سے بچیں', 'سائنسی فکر اپنائیں']
  ),
  or: createLocalizedFalsifyRecord(
    'or',
    'ଫାଲ୍ସିଫିକେସନ୍ ନୀତି: ଭୁଲ୍ ପ୍ରମାଣିତ କରିବାର ଅନ୍ୱେଷଣ ହିଁ ପ୍ରକୃତ ଚିନ୍ତନ',
    'କାର୍ଲ ପପର ଏବଂ ବ୍ଲାକ୍ ସ୍ୱାନ୍ ଯୁକ୍ତି: କେବଳ ସମର୍ଥନ ନ ଖୋଜି ସୀମା ପରଖିବାର ବିଜ୍ଞାନ।',
    'ସହଜ ଭାଷାରେ: ନିଜ ଧାରଣାକୁ ଠିକ୍ ପ୍ରମାଣିତ କରିବା ବଦଳରେ ଭୁଲ୍ ପ୍ରମାଣିତ କରିବା ଭଳି ତଥ୍ୟ ଖୋଜିବା।',
    'ଯେଉଁ ତତ୍ତ୍ୱକୁ ଭୁଲ୍ ପ୍ରମାଣିତ କରିବା ଅସମ୍ଭବ, ତାହା ବିଜ୍ଞାନ ନୁହେଁ।',
    'ତ୍ରୁଟି ସ୍ୱୀକାର କରି ଆଗକୁ ବଢ଼ିବା ହିଁ ବୁଦ୍ଧିମାନର ଲକ୍ଷଣ।',
    ['ତ୍ରୁଟି ଖୋଜନ୍ତୁ', 'ଅନ୍ଧବିଶ୍ୱାସ ତ୍ୟାଗ କରନ୍ତୁ', 'ବୈଜ୍ଞାନିକ ଦୃଷ୍ଟିକୋଣ']
  ),
  as: createLocalizedFalsifyRecord(
    'as',
    'ফলচিফিকেশ্যন নীতি: ভুল প্ৰমাণ কৰাৰ চেষ্টাই প্ৰকৃত চিন্তা',
    'কাৰ্ল পপাৰ আৰু ব্লেক শ্বোৱান যুক্তি: কেৱল সমৰ্থন নিবিচাৰি সীমা পৰীক্ষা কৰাৰ বিজ্ঞান।',
    'সহজ কথাত: নিজৰ ধাৰণাক শুদ্ধ প্ৰমাণ কৰাৰ সলনি ভুল প্ৰমাণিত কৰিব পৰা তথ্য বিচৰা।',
    'যি তত্ত্বক ভুল প্ৰমাণ কৰিব নোৱাৰি সেয়া বিজ্ঞান নহয়।',
    'যুক্তিবাদী চিন্তাই ভুলৰ পৰা ৰক্ষা কৰে।',
    ['সীমাবদ্ধতা বিচাৰক', 'অন্ধবিশ্বাস ত্যাগ কৰক', 'যুক্তিবাদী হওক']
  ),
};
