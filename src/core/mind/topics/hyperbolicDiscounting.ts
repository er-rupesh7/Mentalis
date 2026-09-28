import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Decision Making Track
 * Topic: Hyperbolic Discounting: The Tyranny of the Present Self
 * Category: Decision Making (decision_making)
 * 
 * Academic Grounding:
 * - Ainslie (1975): Specious reward: A behavioral theory of impulsiveness and impulse control
 * - Laibson (1997): Golden eggs and hyperbolic discounting
 * - O'Donoghue & Rabin (1999): Doing it now or later
 */

export const TOPIC_HYPERBOLIC_DISCOUNTING_EN: MindTopicDetail = {
  id: 'hyperbolic_discounting',
  categoryId: 'decision_making',
  slug: 'hyperbolic-discounting-present-bias',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 5,
  viewCount: 6980,
  shareCount: 510,
  bookmarkCount: 1190,
  title: 'Hyperbolic Discounting: The Tyranny of the Present Self',
  subtitle: 'Why we choose small immediate rewards over massive future payoffs, sabotaging our future wealth, health, and goals.',
  shortDescription: 'The cognitive tendency to disproportionately value immediate rewards over delayed rewards, with the rate of valuation falling rapidly for very small delays but falling slowly for longer delays.',
  oneLineExplanation: 'Eating the chocolate cake today and promising your future self will diet tomorrow.',

  summary30s: 'Hyperbolic discounting is the neurobiological engine of procrastination, debt, and addiction: human beings value $100 right now far more than $110 tomorrow, yet we treat $100 in 365 days and $110 in 366 days as practically identical. Our present self treats our future self as an indifferent stranger, recklessly spending future wealth and health on short-term dopamine.',

  coreConcept: 'Formulated by George Ainslie (1975) and modeled mathematically in modern economics by David Laibson (1997), hyperbolic discounting contrasts with standard exponential economic discounting. In classical economic models, discounting rates are constant over time. In real human biology, the discounting curve plunges steeply for the immediate "Now"—governed by the dopamine-rich limbic system—before flattening out into a gentle slope for all future time horizons—governed by the rational prefrontal cortex.',
  summary60s: 'Ask someone: "Would you rather have 1 slice of pizza right now, or 2 slices in 10 minutes?" Most will impatiently demand the immediate slice. Now ask the same person: "Would you rather have 1 slice in 365 days, or 2 slices in 365 days and 10 minutes?" Everyone chooses the 2 slices. Mathematically, the 10-minute waiting interval is identical in both scenarios. Yet when a reward crosses the event horizon into the physical "Right Now," our primal reward circuitry demands instant gratification.',

  quickTakeaways: [
    'The "Now" Premium: The human brain places an irrational, non-linear surcharge on rewards delivered today',
    'Future Self Disconnection: Brain fMRI scans show that thinking about your future self activates the exact same neural patterns as thinking about an unfamiliar stranger',
    'Pre-Commitment Antidote: The only reliable way to beat present bias is binding your hands in advance (Ulysses Contracts)',
    'Automated Friction: Setting up automatic investment debits the day your salary arrives bypasses the temptation circuit completely',
  ],

  whyItHappens: 'Evolutionary survival volatility. In ancestral foraging bands, a bird in the hand was literally worth ten in the bush. Food spoiled rapidly, competitors stole caches, and life expectancy was uncertain. Postponing consumption for years carried significant evolutionary risk.',
  evolutionaryMechanism: 'Consuming high-calorie fats and sugars immediately upon discovery provided immediate adipose energy storage. Natural selection rewarded organisms with hyper-urgent appetites for immediate consumption.',

  howItWorks: 'The dual-system conflict: (1) Opportunity Appears: Reward available immediately or delayed; (2) Limbic Activation: The immediate option triggers immediate ventral striatum dopamine spikes; (3) Prefrontal Struggle: The lateral prefrontal cortex attempts to calculate long-term compound value; (4) Discount Collapse: Under stress or fatigue, the limbic system seizes control.',
  whereYouEncounterIt: 'Credit card debt (instant consumer purchases financed by 36% annual interest), doomscrolling vs. sleeping, skipping the gym to watch Netflix, and delaying retirement savings.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Exponential Discounting vs. Hyperbolic Discounting',
    description: 'How human impatience breaks classical rational economic models.',
    analogySideA: {
      label: 'Exponential (Rational Economic Model)',
      detail: 'Consistent time-preference: 10% annual discount applied smoothly across days, months, and decades.',
    },
    analogySideB: {
      label: 'Hyperbolic (Actual Human Biology)',
      detail: 'Catastrophic discount plunge between "Today" and "Tomorrow," followed by nearly flat discounting between Year 1 and Year 2.',
    },
  },

  researchSummary: 'In classic behavioral experiments reviewed by O\'Donoghue & Rabin (1999), participants offered $100 today vs. $110 tomorrow overwhelmingly chose $100 today. But when offered $100 in 30 days vs. $110 in 31 days, the vast majority waited the extra day for $110. The biological present bias corrupts time consistency.',
  limitationsAndControversies: 'Hal Hershfield (2011) demonstrated that showing people digitally aged avatar photographs of their own face at age 70 dramatically increased their retirement savings contributions, proving that increasing empathy for the future self can mitigate hyperbolic discounting.',
  commonMisconceptions: 'Common myth: "Procrastination and overspending are simple moral failures of willpower." Reality: Hyperbolic discounting is an evolutionary hardwired discounting curve that heavily depreciates rewards that are even slightly delayed into the future.',

  howToRecognize: [
    'Telling yourself "I will start studying / dieting / coding on Monday" every single Friday afternoon',
    'Financing consumer electronics or vacations on high-interest credit cards or Buy-Now-Pay-Later (BNPL) schemes',
    'Staying up past 1:00 AM watching short-form reels despite knowing you have an important 8:00 AM presentation',
    'Failing to invest in high-yield compound index funds because "retirement is 30 years away, I need cash for clothes today"',
  ],

  scenarios: [
    {
      id: 'scen_hyp_01',
      scenarioType: 'indian_context',
      title: 'The Buy-Now-Pay-Later (BNPL) Trap in Kolkata',
      vignette: 'Amit, a 26-year-old software tester in Kolkata, earns ₹55,000 a month. While browsing a shopping portal, he sees a premium mechanical gaming keyboard priced at ₹14,000. He hesitates, knowing he has only ₹8,000 in savings. The checkout screen shows a bright button: "Take it home for ₹0 today! Pay 4 easy monthly installments of ₹3,750 starting next month." Amit clicks the button with a sigh of relief: "It doesn\'t hurt at all today."',
      breakdownAnalysis: 'Amit is manipulated by hyperbolic discounting engineered into modern BNPL fintech apps. By decoupling the immediate pleasure of unboxing the keyboard from the future pain of bill payments, the financial platform neutralizes the brain\'s natural loss-aversion friction.',
      recommendedAction: 'Apply the 72-Hour Waiting Rule and forced friction: "If you cannot pay for a discretionary consumer item in full cash today, you cannot afford it. Never decouple acquisition pleasure from payment consequence."',
    },
  ],

  examples: [
    {
      id: 'ex_hyp_01',
      domain: 'health',
      displayOrder: 1,
      title: 'The Late-Night Netflix "One More Episode" Loop',
      description: 'At 11:30 PM, your brain chooses the immediate 45 minutes of narrative entertainment over the abstract benefit of waking up refreshed at 7:00 AM. In the morning, your future self suffers exhaustion and self-loathing.',
      takeaway: 'The present self steals energy and wellbeing from the future self.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_hyp_01',
      scenarioContext: 'An employee receives an annual bonus of $5,000 in cash. He genuinely intends to invest $4,000 of it into his retirement fund. However, on Friday evening after work, he stops by an electronics boutique and impulsively buys a $3,500 home theater system.',
      question: 'Which behavioral design strategy (known as a Ulysses Contract) would have prevented this hyperbolic discounting lapse?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Relying on stronger willpower and writing motivational sticky notes on his bathroom mirror',
          explanation: 'Willpower is an exhaustible resource that consistently collapses under limbic stimulation.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Pre-committing the bonus through payroll: having his employer automatically route 80% of any bonus directly into an illiquid retirement fund before hitting his checking account',
          explanation: 'Accurate: removing the cash from the reach of the impulsive present self is the gold standard Ulysses Contract.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Reading three financial economics textbooks about compound interest',
          explanation: 'Intellectual knowledge does not alter subcortical dopamine cravings during shopping.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Do not negotiate with your future self in the heat of the moment; lock your choices in advance.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Create binding pre-commitments and automate savings or task progress before present-bias temptation can intervene.',
  psychologicalDefenses: [
    {
      title: 'Automate the Future (The Ulysses Contract)',
      instruction: 'Automate all savings, investments, and health routines. Route money into investment accounts the minute your paycheck lands so your present self never sees it.',
    },
    {
      title: 'Visualize the Aging Avatar',
      instruction: 'When making a financial or health decision, mentally visualize yourself at age 75 with frail joints and grey hair. Ask: "Am I helping or robbing this older version of myself?"',
    },
    {
      title: 'The "Now-Tax" Friction Rule',
      instruction: 'Whenever you want to buy an impulse luxury, force yourself to match it 1:1 with an instant transfer to your retirement investment fund. If you buy a ₹5,000 dinner, invest ₹5,000 into an index fund.',
    },
  ],

  reflectionPrompt: 'Why does "future you" always plan to diet, exercise, and save, while "present you" chooses immediate dopamine?',

  references: [
    {
      id: 'ref_laibson_1997',
      authors: 'Laibson, D.',
      year: 1997,
      title: 'Golden eggs and hyperbolic discounting',
      publicationName: 'The Quarterly Journal of Economics',
      volumeIssue: '112(2), 443-478',
      doi: '10.1162/003355397555253',
      evidenceStrength: 'landmark_paper',
    },
    {
      id: 'ref_ainslie_1975',
      authors: 'Ainslie, G.',
      year: 1975,
      title: 'Specious reward: A behavioral theory of impulsiveness and impulse control',
      publicationName: 'Psychological Bulletin',
      volumeIssue: '82(4), 463-496',
      doi: '10.1037/h0076860',
      evidenceStrength: 'theoretical_framework',
    },
  ],

  relatedTopics: [
    {
      topicId: 'sunk_cost_fallacy',
      slug: 'sunk-cost-fallacy',
      title: 'The Sunk Cost Fallacy',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'variable_reward_schedules',
      slug: 'variable-reward-schedules',
      title: 'Variable Reward Schedules',
      relationshipType: 'amplified_by',
    },
  ],
};


function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_HYPERBOLIC_DISCOUNTING_EN,
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

export const TOPIC_HYPERBOLIC_DISCOUNTING: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_HYPERBOLIC_DISCOUNTING_EN,
  hinglish: {
    ...TOPIC_HYPERBOLIC_DISCOUNTING_EN,
    title: 'Hyperbolic Discounting: "Aaj Maze Karlo, Kal Dekhenge" Ka Shraap',
    subtitle: 'Kyu hamara dimaag aaj ke 5 minute ke dopamine ke liye pure bhavishya ki savings aur health kurbaan kar deta hai.',
    shortDescription: 'Ek aisa cognitive bias jisme hum aaj ke chhotey fayde ko bohot bada samajhte hain aur kal ke bade fayde ko bekaar.',
    oneLineExplanation: 'Aaj chocolate cake khana aur bolna ki kal se pakka diet karenge.',
    summary30s: 'David Laibson ne 1997 me prove kiya ki human brain "Abhi (Now)" ko leke pagal ho jata hai. Agar aapse kahein ki aaj ₹1000 le lo ya kal ₹1100, toh log bolte hain abhi ₹1000 de do. Lekin agar 1 saal baad ki baat ho, toh log wait kar lete hain. Humara aaj ka self hamare future self ko ek anjaan dushman ki tarah treat karta hai.',
  },
  hi: {
    ...TOPIC_HYPERBOLIC_DISCOUNTING_EN,
    title: 'Hyperbolic Discounting (अतिशयोक्तिपूर्ण छूट और तात्कालिकता पूर्वाग्रह)',
    subtitle: 'दीर्घकालिक लाभों की कीमत पर तात्कालिक सुख को प्राथमिकता देने की जैविक मानवीय दुर्बलता।',
    shortDescription: 'तात्कालिक पुरस्कारों को अत्यधिक महत्व देने और भविष्य के बड़े पुरस्कारों का अवमूल्यन करने का संज्ञानात्मक पूर्वाग्रह।',
    oneLineExplanation: 'आज के सुख के लिए कल के स्वास्थ्य और धन का बलिदान।',
    summary30s: 'अतिशयोक्तिपूर्ण छूट (Hyperbolic Discounting) यह बताती है कि मस्तिष्क का डोपामाइन तंत्र "अभी" मिलने वाले पुरस्कारों के सामने भविष्य के बड़े लाभों की उपेक्षा करता है। मस्तिष्क के स्कैन दर्शाते हैं कि जब हम अपने 20 वर्ष बाद के भविष्य के स्वरूप के बारे में सोचते हैं, तो मस्तिष्क किसी अपरिचित व्यक्ति जैसी प्रतिक्रिया करता है।',
  },
  gu: createLocalizedRecord('gu', "Hyperbolic Discounting: The Tyranny of the Present Self (પૂર્વગ્રહ)", "Hyperbolic Discounting: The Tyranny of the Present Self એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "Hyperbolic Discounting: The Tyranny of the Present Self (पूर्वग्रह)", "Hyperbolic Discounting: The Tyranny of the Present Self हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "Hyperbolic Discounting: The Tyranny of the Present Self (పక్షపాతం)", "Hyperbolic Discounting: The Tyranny of the Present Self అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "Hyperbolic Discounting: The Tyranny of the Present Self (சார்புநிலை)", "Hyperbolic Discounting: The Tyranny of the Present Self என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "Hyperbolic Discounting: The Tyranny of the Present Self (ಪಕ್ಷಪಾತ)", "Hyperbolic Discounting: The Tyranny of the Present Self ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "Hyperbolic Discounting: The Tyranny of the Present Self (പക്ഷപാതം)", "Hyperbolic Discounting: The Tyranny of the Present Self എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "Hyperbolic Discounting: The Tyranny of the Present Self (পক্ষপাতিত্ব)", "Hyperbolic Discounting: The Tyranny of the Present Self হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "Hyperbolic Discounting: The Tyranny of the Present Self (ਪੱਖਪਾਤ)", "Hyperbolic Discounting: The Tyranny of the Present Self ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "Hyperbolic Discounting: The Tyranny of the Present Self (جانبداری)", "Hyperbolic Discounting: The Tyranny of the Present Self انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "Hyperbolic Discounting: The Tyranny of the Present Self (ପକ୍ଷପାତିତା)", "Hyperbolic Discounting: The Tyranny of the Present Self ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "Hyperbolic Discounting: The Tyranny of the Present Self (পক্ষপাতিত্ব)", "Hyperbolic Discounting: The Tyranny of the Present Self সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
