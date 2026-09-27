import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: Cognitive Dissonance: The Mental Discomfort of Contradictory Beliefs
 * Category: social_psychology
 * Academic Grounding: Festinger & Carlsmith (1959) (10.1037/h0041593)
 */

export const TOPIC_COGNITIVE_DISSONANCE_EN: MindTopicDetail = {
  id: 'cognitive_dissonance',
  categoryId: 'social_psychology',
  slug: 'cognitive-dissonance',
  difficulty: 'beginner',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 9,
  viewCount: 4190,
  shareCount: 336,
  bookmarkCount: 738,
  title: "Cognitive Dissonance: The Mental Discomfort of Contradictory Beliefs",
  subtitle: "The psychological distress experienced when actions clash with values, driving people to rationalize mistakes rather than admit them.",
  shortDescription: "A state of mental tension that occurs when a person holds two contradictory beliefs, values, or ideas, or when their behavior conflicts with their core beliefs.",
  oneLineExplanation: "Changing your beliefs to match your actions when you cannot change the past.",

  summary30s: "Formulated by Leon Festinger in 1957, Cognitive Dissonance is the sharp emotional irritation that occurs when you do something that violates your view of yourself as smart, ethical, or rational. Because humans cannot rewrite history, the brain frantically rewrites its beliefs, memories, and attitudes to justify what just happened.",
  coreConcept: "When behavior clashes with belief (e.g., \"I value honesty\" vs. \"I just lied to my client\"), a high-arousal negative affective state is triggered in the anterior insula and anterior cingulate cortex. To escape this stress, people have three choices: (1) Change behavior (difficult); (2) Acquire new information (rare); (3) Rationalize and trivialize the contradiction (effortless and common).",
  summary60s: "In Festinger & Carlsmith's famous 1959 experiment, students performed a mind-numbing task turning wooden pegs for an hour. Afterwards, they were paid either $1 or $20 to tell the next participant the task was thrilling. Students paid $20 felt no dissonance (\"I did it for the money\"). But students paid only $1 experienced severe dissonance (\"I wouldn't lie for a mere dollar, so the task must have actually been quite fascinating!\"). They unconsciously altered their genuine attitude.",
  quickTakeaways: [
    "The Rationalization Engine: Humans are not rational animals; we are rationalizing animals",
    "Effort Justification: The more pain, time, or hazing an initiation requires, the more we value the club",
    "Post-Decision Spreading: Immediately after buying a car or house, we fiercely praise our choice and mock alternatives",
    "Humility Antidote: Treat dissonance as a dashboard warning light; say: \"My ego is hurt because I made a mistake\"",
  ],

  whyItHappens: "Self-integrity preservation. Humans have a fundamental psychological need to view themselves as coherent, competent, and morally upright.",
  evolutionaryMechanism: "A fractured sense of internal agency leads to behavioral hesitation. Resolving dissonance quickly allowed ancestral humans to act decisively without being paralyzed by self-doubt.",
  howItWorks: "Action violates core value -> Acute emotional dissonance felt -> Ego seeks psychological comfort -> Brain invents a post-hoc rationalization -> Belief shifts -> Action feels justified.",
  whereYouEncounterIt: "Smoking while knowing the health risks, staying in toxic relationships, defending bad financial investments, religious cults after failed prophecies, and political party loyalty.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Admitting a Flaw vs. Cognitive Rationalization",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Calibrated Self-Correction",
      detail: "\"I spent ₹50,000 on an impulse gadget that I do not need. I made an emotional mistake; I will return it.\"",
    },
    analogySideB: {
      label: "Dissonance Rationalization",
      detail: "\"Actually, this luxury watch is an investment for my personal brand that will boost my networking income.\"",
    },
  },

  researchSummary: "Festinger & Carlsmith (1959) demonstrated that insufficient external justification forces individuals to internally shift their genuine beliefs to resolve psychological inconsistency.",
  limitationsAndControversies: 'Contextual variables include individual cognitive reflection, cultural collectivism, stake size, and institutional transparency.',
  commonMisconceptions: 'Common myth: Intellectual intelligence or domain expertise protects individuals from this dynamic. Reality: Controlled empirical trials prove that cognitive reflection tests and structured institutional rubrics are necessary to prevent distortion.',

  howToRecognize: [
    'Noticing an immediate emotional reluctance to question an emerging collective consensus',
    'Feeling personal accountability evaporate when responsibility is diffused into a committee',
    'Justifying an inconsistent action through creative rationalization rather than behavioral adjustment',
    'Experiencing decision paralysis when presented with an uncurated set of alternatives',
  ],

  scenarios: [
    {
      id: 'scen_cognitive_dissonance_01',
      scenarioType: 'indian_context',
      title: "The Delhi Green Activist's Diesel SUV",
      vignette: "Arjun is a prominent corporate sustainability manager in Delhi who gives keynote talks on air pollution and decarbonization. For his 40th birthday, he purchases a massive 3.0-liter diesel SUV to impress his extended family. When his colleagues express surprise, Arjun's face flushes. Instead of admitting he wanted the luxury status symbol, he vigorously argues: \"Actually, modern clean-diesel engines produce less lifetime carbon than lithium battery manufacturing, so my purchase is technically more ecological.\" He spends the next month sharing fringe articles debunking EV batteries.",
      breakdownAnalysis: "Classic cognitive dissonance. The conflict between his identity (\"Green Climate Champion\") and his action (driving a diesel monster) created severe anxiety. Rather than admitting vanity, his brain rationalized the contradiction by attacking EVs.",
      recommendedAction: "Recognize the uncomfortable emotional flush as cognitive dissonance. Separate ego from behavior by acknowledging: \"I wanted luxury status; it contradicts my environmental ideals. I will not pretend it is green.\"",
    },
  ],

  examples: [
    {
      id: 'ex_cognitive_dissonance_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_cognitive_dissonance_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_cognitive_dissonance_01',
      scenarioContext: "A high-performing software architect invests ₹10 lakhs into a high-risk crypto altcoin token. Two weeks later, the token crashes 80% following a smart-contract hack.",
      question: "Which behavior indicates that the architect is trapped in severe Cognitive Dissonance rather than rational Bayesian updating?",
      prompt: "Which behavior indicates that the architect is trapped in severe Cognitive Dissonance rather than rational Bayesian updating?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'beginner',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Auditing the hack post-mortem report and selling the remaining balance at a loss",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Publicly posting that \"the crash is a blessing in disguise because it flushes out paper hands, proving the technology is revolutionary\"",
          isCorrect: true,
          explanation: "Severe cognitive dissonance triggers defensive rationalization where an objectively disastrous failure is reframed as a secret victory or brilliant long-term test.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Updating his portfolio risk-management allocation rules to prevent concentrated altcoin exposure in the future",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Reflecting on his lack of technical due diligence and consulting an independent financial advisor",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "When belief and behavior collide, our minds usually bend the belief: learn to sit with the discomfort of admitting an error.",
    },
  ],

  howToRespond: 'Implement structured individual accountability, pre-commitments, and independent auditing protocols.',
  psychologicalDefenses: [
    {
      title: 'Independent Analytical Separation',
      instruction: 'Formulate your assessment and write down confidence intervals privately before hearing the group consensus or market narrative.',
    },
    {
      title: 'Counterfactual Inversion',
      instruction: 'Explicitly invert the proposition: "If the exact opposite hypothesis were true, what tangible evidence would we expect to observe today?"',
    },
    {
      title: 'Binding Ulysses Pre-Commitments',
      instruction: 'Lock in objective exit points, decision rules, and resource ceilings in advance when your mind is calm and uncompromised.',
    },
  ],

  reflectionPrompt: 'Where in your daily professional or personal life are you quietly conforming to an unspoken norm that you privately recognize as irrational?',
  references: [
    {
      id: 'ref_cognitive_dissonance_01',
      title: "Cognitive consequences of forced compliance",
      citation: "Festinger, L., & Carlsmith, J. M. (1959). Journal of Abnormal and Social Psychology, 58(2), 203–210.",
      authors: "Festinger & Carlsmith",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1037/h0041593",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Social Psychology', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'confirmation_bias', slug: 'confirmation-bias', title: 'Confirmation Bias', relationshipType: 'amplified_by' },
    { topicId: 'self_serving_bias', slug: 'self-serving-bias', title: 'Self-Serving Bias', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Cognitive Dissonance: The Mental Discomfort of Contradictory Beliefs | Mentalab Mind",
  seoDescription: "A state of mental tension that occurs when a person holds two contradictory beliefs, values, or ideas, or when their behavior conflicts with their core bel",
  canonicalUrl: '/mind/social-psychology/cognitive-dissonance',
  ogImageUrl: '/images/mind/cognitive-dissonance.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "When behavior clashes with belief (e.g., \"I value honesty\" vs. \"I just lied to my client\"), a high-arousal negative affective state is triggered in the anterior insula and anterior cingulate cortex. To escape this stress, people have three choices: (1) Change behavior (difficult); (2) Acquire new information (rare); (3) Rationalize and trivialize the contradiction (effortless and common).",
};

export const TOPIC_COGNITIVE_DISSONANCE_HINGLISH: MindTopicDetail = {
  ...TOPIC_COGNITIVE_DISSONANCE_EN,
  title: "Cognitive Dissonance: Jab Dimaag Galti Maanne Ke Bajaye Bahane Banata Hai",
  subtitle: "Apne hi vichaaro ke ult kaam karke dimaag me jo bechaini hoti hai, use chupane ke liye hum jhooth bolte hain.",
  shortDescription: "Jab hamara action hamare values se match nahi karta, toh hum sharminda hone ke bajaye illogical bahane banate hain.",
  oneLineExplanation: "Galti qubool karne ke bajaye apne dimaag ko convince karna ki \"jo hua achhe ke liye hua.\"",

  summary30s: "1957 me Leon Festinger ne Cognitive Dissonance discover kiya. Jab aap koi aisa kaam karte hain jo aapke principles ke khilaf hai (jaise cigarette peena jabki aapko pata hai cancer hota hai), toh andar ek ajeeb bechaini hoti hai. Us bechaini ko mitane ke liye dimaag sachai badal leta hai: \"Mere dada ji bhi 90 saal tak peete the, kuch nahi hota.\"",
  coreConcept: "Insaan rational nahi hota, balki \"rationalizing\" animal hota hai. Jab humse koi blunder hota hai, toh hum use admit karne ke bajaye aisi kahani bana lete hain jisse hume khud ki nazro me bura na lage.",
  quickTakeaways: [
    "Galti accept karna ego ke liye dardnaak hota hai, isliye dimaag bahane dhundta hai",
    "Effort Justification: Jis cheez me jitna dard aur paisa lagta hai, hum use utna hi mahan maante hain",
    "Post-Purchase Rationalization: Mehengi bekaar cheez khareedne ke baad log uski tareef karte hain",
    "Antidote: Jab andar ghabrahat ho, toh maano: \"Mujhse galti hui hai, main perfect nahi hoon.\"",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_COGNITIVE_DISSONANCE_EN,
    title,
    subtitle: summary.slice(0, 80) + '...',
    oneLineExplanation: summary.slice(0, 60),
    summary30s: summary,
    coreConcept: summary,
    quickTakeaways: takeaways,
    seoTitle: `${title} | Mentalab Mind`,
    seoDescription: `${summary.slice(0, 150)}...`,
  };
}

export const TOPIC_COGNITIVE_DISSONANCE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_COGNITIVE_DISSONANCE_EN,
  hinglish: TOPIC_COGNITIVE_DISSONANCE_HINGLISH,
  hi: createLocalizedRecord('hi', "संज्ञानात्मक विसंवाद (Cognitive Dissonance): परस्पर विरोधी विचारों का मानसिक तनाव", "जब किसी व्यक्ति के कार्य उसके सिद्धांतों या मूल्यों के विपरीत होते हैं, तो वह तीव्र मानसिक असहजता महसूस करता है। इस तनाव से बचने के लिए लोग तर्कहीन बहाने बनाते हैं।", [
    "व्यवहार और विचार का टकराव",
    "गलती न मानने की प्रवृत्ति",
    "आत्म-निरीक्षण और विनम्रता आवश्यक"
  ]),
  gu: createLocalizedRecord('gu', "કોગ્નિટિવ ડિસોનન્સ: વિરોધાભાસી વિચારો વચ્ચેનો માનસિક તણાવ", "જ્યારે આપણું વર્તન આપણા મૂલ્યો સાથે મેળ ખાતું નથી, ત્યારે મગજ પોતાની ભૂલ સ્વીકારવાને બદલે બહાના શોધે છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "कॉग्निटिव्ह डिसोनन्स: परस्परविरोधी विचारांमधील मानसिक अस्वस्थता", "जेव्हा आपली कृती आपल्या तत्वांच्या विरुद्ध असते, तेव्हा होणारा मानसिक ताण कमी करण्यासाठी लोक स्वतःचीच दिशाभूल करतात.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "కాగ్నిటివ్ డిస్సొనెన్స్: పరస్పర విరుద్ధ ఆలోచనల వల్ల కలిగే మానసిక అసౌకర్యం", "వ్యక్తి ప్రవర్తన వారి నమ్మకాలకు విరుద్ధంగా ఉన్నప్పుడు కలిగే అంతర్గత ఒత్తిడిని సమర్థించుకునే ప్రవృత్తి.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "அறிவாற்றல் முரண்பாடு: முரண்பட்ட கருத்துகளால் ஏற்படும் மன அழுத்தம்", "நமது செயல்கள் நமது நம்பிக்கைகளுக்கு முரணாக இருக்கும் போது ஏற்படும் அசௌகரியத்தை மறைக்க காரணங்களை அடுக்கும் உளவியல்.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಕಾಗ್ನಿಟಿವ್ ಡಿಸೋನೆನ್ಸ್: ಪರಸ್ಪರ ವಿರುದ್ಧ ಆಲೋಚನೆಗಳಿಂದ ಉಂಟಾಗುವ ಮಾನಸಿಕ ಅಸ್ವಸ್ಥತೆ", "ತಮ್ಮ ನಡವಳಿಕೆ ತಮ್ಮ ಸಿದ್ಧಾಂತಕ್ಕೆ ವಿರುದ್ಧವಾದಾಗ ತಪ್ಪನ್ನು ಒಪ್ಪಿಕೊಳ್ಳದೆ ಸಮರ್ಥಿಸಿಕೊಳ್ಳುವ ಮಾನಸಿಕ ತುಮುಲ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "കോഗ്നിറ്റീവ് ഡിസ്സൊണൻസ്: വിരുദ്ധ ചിന്തകൾ ഉണ്ടാക്കുന്ന മാനസിക സംഘർഷം", "നമ്മുടെ പ്രവൃത്തികൾ നമ്മുടെ മൂല്യങ്ങൾക്ക് വിരുദ്ധമാകുമ്പോൾ ഉണ്ടാകുന്ന മാനസിക ബുദ്ധിമുട്ട് ഒഴിവാക്കാൻ സ്വയം ന്യായീകരിക്കുന്ന അവസ്ഥ.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "কগনিটিভ ডিসোনেন্স: পরস্পরবিরোধী চিন্তাভাবনার মানসিক অস্বস্তি", "নিজের কাজের সাথে বিশ্বাসের অমিল হলে ভুল স্বীকার না করে অযৌক্তিক সাফাই দেওয়ার মানসিক প্রবণতা।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਕਾਗਨੀਟਿਵ ਡਿਸੋਨੈਂਸ: ਵਿਰੋਧੀ ਵਿਚਾਰਾਂ ਦਾ ਮਾਨਸਿਕ ਤਣਾਅ", "ਜਦੋਂ ਤੁਹਾਡੀ ਕਰਨੀ ਤੁਹਾਡੇ ਸਿਧਾਂਤਾਂ ਦੇ ਉਲਟ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਗਲਤੀ ਮੰਨਣ ਦੀ ਬਜਾਏ ਝੂਠੇ ਬਹਾਨੇ ਬਣਾਉਣ ਦੀ ਮਨੋਵਿਗਿਆਨਕ ਸਥਿਤੀ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "علمی عدم مطابقت: متضاد خیالات کی وجہ سے پیدا ہونے والی ذہنی الجھن", "جب انسان کا عمل اس کے نظریات کے خلاف ہوتا ہے تو وہ اپنی غلطی تسلیم کرنے کے بجائے بے بنیاد تاویلیں تراشتا ہے۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "କଗ୍ନିଟିଭ୍ ଡିସୋନାନ୍ସ: ପରସ୍ପର ବିରୋଧୀ ଚିନ୍ତାଧାରାର ମାନସିକ ଅସ୍ଥିରତା", "ଯେତେବେଳେ ନିଜର କାର୍ଯ୍ୟ ନିଜର ଆଦର୍ଶ ସହିତ ମେଳ ଖାଏ ନାହିଁ, ସେତେବେଳେ ଭୁଲ୍ ସ୍ୱୀକାର ନ କରି ଯୁକ୍ତି ବାଢ଼ିବାର ମାନସିକତା।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "কগনিটিভ ডিচনেঞ্চ: পৰস্পৰ বিৰোধী চিন্তাৰ ফলত হোৱা মানসিক অস্বস্তি", "যেতিয়া কাৰ্য আৰু বিশ্বাসৰ মাজত সংঘাত হয়, ভুল স্বীকাৰ নকৰি অদ্ভুত যুক্তিৰে নিজকে সান্ত্বনা দিয়াৰ প্ৰক্ৰিয়া।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
