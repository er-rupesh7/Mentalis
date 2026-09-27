import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Decision Making Track
 * Topic: Mental Accounting: Why Money Isn't Fungible in the Brain
 * Category: decision_making
 * Academic Grounding: Richard H. Thaler (1999) (10.1002/(sici)1099-0771(199909)12:3<183::aid-bdm318>3.0.co;2-f)
 */

export const TOPIC_MENTAL_ACCOUNTING_EN: MindTopicDetail = {
  id: 'mental_accounting',
  categoryId: 'decision_making',
  slug: 'mental-accounting',
  difficulty: 'beginner',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 11,
  viewCount: 4410,
  shareCount: 364,
  bookmarkCount: 782,
  title: "Mental Accounting: Why Money Isn't Fungible in the Brain",
  subtitle: "The irrational cognitive tendency to divide, categorize, and value money into subjective psychological buckets rather than treating every rupee as interchangeable.",
  shortDescription: "A behavioral economics concept describing the cognitive operations used by individuals and households to organize, evaluate, and keep track of financial activities.",
  oneLineExplanation: "A rupee is a rupee, but our brains treat a ₹10,000 lottery win like confetti and a ₹10,000 hard-earned salary like sacred gold.",

  summary30s: "Pioneered by Nobel laureate Richard Thaler in 1985 and 1999, Mental Accounting violates the core economic axiom of fungibility (every unit of currency has identical value regardless of origin). Humans subconsciously place money into separate mental accounts based on where it came from (bonus, tax refund, regular salary) and how it is spent (necessities, entertainment, luxuries), leading to irrational balance-sheet sabotage.",
  coreConcept: "Mental accounting explains glaring personal finance paradoxes: people maintain ₹2,00,000 in a fixed deposit earning 6% interest for their \"house vacation fund,\" while concurrently carrying ₹1,00,000 in credit card debt charging 42% interest. Logically, paying off the debt yields an instant, guaranteed 42% risk-free return. Psychologically, touching the \"vacation account\" feels like a violation of an imaginary boundary.",
  summary60s: "Thaler demonstrated the theatre ticket experiment: Scenario A: You arrive at a cinema having lost a $100 ticket you previously purchased. Do you spend another $100 to buy a replacement ticket? 54% say No. Scenario B: You arrive at the cinema with $100 cash to buy a ticket, but discover you lost a $100 bill in the parking lot. Do you still spend your remaining $100 to buy the ticket? 88% say Yes. Financially, both scenarios are identical ($100 poorer). But in Scenario A, the $100 cost is posted to the \"movie entertainment account\", doubling its mental price.",
  quickTakeaways: [
    "Money is 100% Fungible: A rupee earned from freelancing, found on the street, or saved from groceries has identical purchasing power",
    "The Windfall Trap: Treat bonuses, tax refunds, and gifts with the same budgeting rigor as regular salary",
    "Eliminate High-Interest Debt First: Never hoard low-yield savings in arbitrary buckets while carrying predatory debt",
    "Consolidated Balance Sheets: Track your net worth holistically rather than maintaining artificial mental envelopes",
  ],

  whyItHappens: "Cognitive self-control mechanism. Humans lack disciplined impulse control, so they invent mental buckets as crude budgetary guardrails.",
  evolutionaryMechanism: "Ancestral humans managed concrete, specialized physical resources (meat for immediate eating, seeds for planting) that were truly non-fungible.",
  howItWorks: "Money received -> Brain tags it based on source (\"Free bonus money\") -> Allocates to hedonistic spending account -> Spent frivolously without guilt -> Real household net worth stagnates.",
  whereYouEncounterIt: "Diwali company bonuses, credit card reward points, casino gambling, lottery payouts, and retail discount vouchers.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Economic Fungibility vs. Psychological Buckets",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Mental Accounting Distortion",
      detail: "\"I have ₹3 lakhs in my emergency bank account at 4%, but I pay 36% APR interest on a ₹80,000 credit card balance to keep the account untouched.\"",
    },
    analogySideB: {
      label: "Rational Fungibility",
      detail: "\"Pay off the ₹80,000 balance immediately using the liquid cash, saving ₹28,800 annually in guaranteed compound interest.\"",
    },
  },

  researchSummary: "Richard Thaler (1985, 1999) published \"Mental Accounting Matters\" in the Journal of Behavioral Decision Making, earning the 2017 Nobel Prize.",
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
      id: 'scen_mental_accounting_01',
      scenarioType: 'indian_context',
      title: "The ₹50,000 Diwali Bonus in Ahmedabad",
      vignette: "Manish, an operations supervisor in Ahmedabad, receives a surprise ₹50,000 Diwali performance bonus. He immediately takes his cousins out for a lavish dinner at a five-star hotel and buys an imported designer watch, spending all ₹50,000 within four days: \"This is bonus money, so it's free cash to celebrate!\" Simultaneously, Manish has an active personal loan of ₹1,50,000 with a monthly interest rate of 16% that he has been struggling to pay off for two years.",
      breakdownAnalysis: "A textbook real-world case of Mental Accounting. Manish categorized his regular salary into the \"bills & survival\" bucket and his bonus into the \"play money\" bucket. Had he treated money as fungible, using the ₹50,000 to prepay the 16% loan would have delivered an instant risk-free return of ₹8,000.",
      recommendedAction: "Enforce the \"Fungibility Rule\": Any windfall, bonus, or refund must immediately be routed through the master debt-reduction and asset-building checklist.",
    },
  ],

  examples: [
    {
      id: 'ex_mental_accounting_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_mental_accounting_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_mental_accounting_01',
      scenarioContext: "A consumer refuses to spend ₹300 on an auto-rickshaw during heavy rain because \"travel budget is exhausted,\" but that same evening spends ₹3,000 at a lounge because \"weekend leisure budget still has funds.\"",
      question: "Which behavioral economic phenomenon explains this apparent contradiction in financial valuation?",
      prompt: "Which behavioral economic phenomenon explains this apparent contradiction in financial valuation?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'beginner',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Prospect Theory loss weighting",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Mental accounting segregating the same pool of wealth into arbitrary non-fungible categories",
          isCorrect: true,
          explanation: "Mental accounting causes individuals to treat money as non-fungible based on subjective labels (travel vs. leisure), leading to inconsistent choices.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Diffusion of responsibility across household finances",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "The Pygmalion effect inflating leisure value",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Money has no memory and no labels: every rupee deserves equal rational stewardship.",
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
      id: 'ref_mental_accounting_01',
      title: "Mental Accounting Matters",
      citation: "Thaler, R. H. (1999). Mental accounting matters. Journal of Behavioral Decision Making, 12(3), 183–206.",
      authors: "Richard H. Thaler",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1002/(sici)1099-0771(199909)12:3<183::aid-bdm318>3.0.co;2-f",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Decision Making', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'opportunity_cost_neglect', slug: 'opportunity-cost-neglect', title: 'Opportunity Cost Neglect', relationshipType: 'amplified_by' },
    { topicId: 'sunk_cost_fallacy', slug: 'sunk-cost-fallacy', title: 'Sunk Cost Fallacy', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Mental Accounting: Why Money Isn't Fungible in the Brain | Mentalab Mind",
  seoDescription: "A behavioral economics concept describing the cognitive operations used by individuals and households to organize, evaluate, and keep track of financial ac",
  canonicalUrl: '/mind/decision-making/mental-accounting',
  ogImageUrl: '/images/mind/mental-accounting.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Mental accounting explains glaring personal finance paradoxes: people maintain ₹2,00,000 in a fixed deposit earning 6% interest for their \"house vacation fund,\" while concurrently carrying ₹1,00,000 in credit card debt charging 42% interest. Logically, paying off the debt yields an instant, guaranteed 42% risk-free return. Psychologically, touching the \"vacation account\" feels like a violation of an imaginary boundary.",
};

export const TOPIC_MENTAL_ACCOUNTING_HINGLISH: MindTopicDetail = {
  ...TOPIC_MENTAL_ACCOUNTING_EN,
  title: "Mental Accounting: Har Paise Ki Value Alag Samajhne Ka Bhram",
  subtitle: "Diwali bonus ke ₹20,000 ko hum hawa me uda dete hain, par salary ke ₹20,000 ko bohot sambhal kar rakhte hain, jabki dono rupaye barabar hain.",
  shortDescription: "Ek aisi aadat jisme hum paise ko uske source ke hisaab se alag-alag dimaagi dabbon me baant dete hain aur bewakoofi bhare financial decisions lete hain.",
  oneLineExplanation: "Paise par koi thappa nahi hota; bonus ka rupaya bhi mehnat ke rupaye ke barabar hi hota hai.",

  summary30s: "Nobel prize winner Richard Thaler ne Mental Accounting discover kiya. Normal economics kehti hai ki ₹100 ka note har jagah barabar hai (Fungibility). Par hamara dimaag bonus, lottery ya gift ke paise ko \"free money\" maanta hai aur use bina soche uda deta hai, jabki credit card par 36% byaaj bharta rehta hai.",
  coreConcept: "Log savings account me 3% interest par ₹1 lakh rakhte hain \"chhuttiyon ke liye\", aur credit card par 40% interest dete hain. Logically unhe pehle debt khatam karna chahiye, par dimaag kehta hai \"wo toh vacation fund hai, use kaise chhoo sakte hain!\".",
  quickTakeaways: [
    "Money is Fungible: Har rupaye ki aukaat barabar hoti hai, chahe wo salary se aaye ya bonus se",
    "Windfall Trap Se Bachein: Bonus milne par sabse pehle mehenge karz chukayein",
    "Card Debt Pehle Khatam Karein: FD me 6% lene se pehle credit card ka 40% debt clear karein",
    "Total Wealth Dekhein: Dimaagi lifaafe banane ke bajaye poori financial health par dhyaan dein",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_MENTAL_ACCOUNTING_EN,
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

export const TOPIC_MENTAL_ACCOUNTING: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_MENTAL_ACCOUNTING_EN,
  hinglish: TOPIC_MENTAL_ACCOUNTING_HINGLISH,
  hi: createLocalizedRecord('hi', "मानसिक लेखांकन (Mental Accounting): धन की गैर-विनिमेयता का भ्रम", "रिचर्ड थैलर का नोबेल पुरस्कार विजेता सिद्धांत जो दर्शाता है कि मनुष्य धन को विनिमेय (Fungible) मानने के बजाय उसके स्रोत (वेतन, बोनस, उपहार) के आधार पर अलग-अलग मानसिक खातों में बाँट देता है और वित्तीय रूप से अतार्किक निर्णय लेता है।", [
    "धन की विनिमेयता (Fungibility) का सिद्धांत",
    "अप्रत्याशित लाभ (Windfall) के दुरुपयोग से बचाव",
    "उच्च-ब्याज वाले ऋणों का प्राथमिकता से भुगतान"
  ]),
  gu: createLocalizedRecord('gu', "મેન્ટલ એકાઉન્ટિંગ: પૈસાની કિંમત અલગ-અલગ ગણવાની ભૂલ", "બોનસ કે લોટરીના પૈસાને મફતના ગણીને ઉડાવી દેવા અને ક્રેડિટ કાર્ડનું ભારે વ્યાજ ભરતા રહેવાની માનસિક વિસંગતતા.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "मेंटल अकाउंटिंग: पैशांचे अवाजवी मानसिक वर्गीकरण करण्याची चूक", "पगाराचा पैसा आणि बोनसचा पैसा वेगवेगळा मानून बोनसचे पैसे उधळणे आणि कर्जाचे हप्ते भरत राहणे हा आर्थिक गैरसमज.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "మెంటల్ అకౌంటింగ్: డబ్బు విలువను వేర్వేరుగా విభజించే భ్రమ", "బోనస్ లేదా బహుమతిగా వచ్చిన డబ్బును ఉచితమైనదిగా భావించి వృధా చేస్తూ, ఎక్కువ వడ్డీ ఉండే అప్పులను తీర్చకపోవడం.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "மனக் கணக்கியல்: பணத்தை தனித்தனி பெட்டிகளாகப் பிரிக்கும் மாயை", "போனஸ் பணத்தை ஊதாரித்தனமாக செலவழித்துவிட்டு, அதிக வட்டி கொண்ட கடன்களை அடைக்காமல் வைத்திருக்கும் நிதி அறியாமை.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಮೆಂಟಲ್ ಅಕೌಂಟಿಂಗ್: ಹಣವನ್ನು ಮಾನಸಿಕವಾಗಿ ಬೇರೆಬೇರೆಯಾಗಿ ವರ್ಗೀಕರಿಸುವ ದೋಷ", "ಬೋನಸ್ ಬಂದ ಹಣವನ್ನು ಸುಲಭವಾಗಿ ಖರ್ಚು ಮಾಡಿ, ಹೆಚ್ಚಿನ ಬಡ್ಡಿ ದರದ ಸಾಲವನ್ನು ಹಾಗೆಯೇ ಉಳಿಸಿಕೊಳ್ಳುವ ಅವಿವೇಕತನ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "മെന്റൽ അക്കൗണ്ടിംഗ്: പണത്തിന് വെവ്വേറെ മൂല്യം കൽപ്പിക്കുന്ന അബദ്ധം", "ബോണസ് കിട്ടിയ പണം ആഘോഷങ്ങൾക്ക് തുലച്ചു കളയുകയും അതേസമയം ഉയർന്ന പലിശയുള്ള ക്രെഡിറ്റ് കാർഡ് കുടിശ്ശിക അടക്കാതിരിക്കുകയും ചെയ്യുന്ന പ്രവണത.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "মেন্টাল অ্যাকাউন্টিং: অর্থের উৎসভেদে মানসিক ভেদাভেদ সৃষ্টির বিভ্রান্তি", "বোনাসের টাকাকে আলাদা ভেবে অপচয় করা এবং চড়া সুদের ঋণ মেটাতে অবহেলা করার ভুল মানবীয় আচরণ।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਮੈਂਟਲ ਅਕਾਊਂਟਿੰਗ: ਪੈਸੇ ਦੀ ਵੱਖਰੀ-ਵੱਖਰੀ ਕੀਮਤ ਸਮਝਣ ਦਾ ਭਰਮ", "ਬੋਨਸ ਦੇ ਪੈਸੇ ਨੂੰ ਫਜ਼ੂਲ ਉਡਾ ਦੇਣਾ ਪਰ ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਦੇ ਭਾਰੀ ਵਿਆਜ ਨੂੰ ਨਾ ਚੁਕਾਉਣ ਦੀ ਅਜੀਬ ਆਦਤ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "ذہنی کھاتہ داری: رقم کو الگ الگ خانوں میں بانٹنے کی غلط فہمی", "تنخواہ اور بونس کی رقم کو مختلف سمجھ کر بونس اڑا دینا اور سودی قرضے قائم رکھنا۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ମେଣ୍ଟାଲ୍ ଆକାଉଣ୍ଟିଂ: ଟଙ୍କାକୁ ଭିନ୍ନ ଭିନ୍ନ ଖାତାରେ ବାଣ୍ଟିବାର ଭ୍ରମ", "ବୋନସ୍ ଟଙ୍କାକୁ ଅଯଥା ଖର୍ଚ୍ଚ କରିଦେବା କିନ୍ତୁ ଅଧିକ ସୁଧ ଥିବା ଋଣ ପରିଶୋଧ ନକରିବାର ଅର୍ଥନୈତିକ ଭୁଲ୍।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "মেণ্টেল একাউণ্টিং: ধনৰ উৎস অনুসৰি পৃথক মূল্য নিৰ্ধাৰণ কৰাৰ ভুল", "কষ্টোপাৰ্জিত ধন আৰু বোনাছৰ ধনক পৃথক চকুৰে চাই অনাহকত খৰচ কৰাৰ ক্ষতিকাৰক মনস্তত্ত্ব।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
