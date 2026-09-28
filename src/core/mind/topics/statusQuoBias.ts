import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Decision Making Track
 * Topic: Status Quo Bias: The Gravitational Pull of the Familiar
 * Category: Decision Making (decision_making)
 * 
 * Academic Grounding:
 * - Samuelson & Zeckhauser (1988): Status quo bias in decision making
 * - Kahneman, Knetsch & Thaler (1991): Anomalies: The endowment effect, loss aversion, and status quo bias
 * - Johnson & Goldstein (2003): Do defaults save lives?
 */

export const TOPIC_STATUS_QUO_EN: MindTopicDetail = {
  id: 'status_quo_bias',
  categoryId: 'decision_making',
  slug: 'status-quo-bias',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 3,
  viewCount: 6420,
  shareCount: 460,
  bookmarkCount: 1080,
  title: 'Status Quo Bias: The Gravitational Pull of the Familiar',
  subtitle: 'The irrational emotional preference for the current state of affairs, treating any change as a presumed loss.',
  shortDescription: 'A cognitive bias where people disproportionately stick with their current situation or default choices, even when alternative options offer superior economic and psychological benefits.',
  oneLineExplanation: 'Staying in a bad job, mediocre bank, or miserable subscription because changing feels exhausting.',

  summary30s: 'Status quo bias is the psychological gravitational pull that keeps humans stuck in familiar ruts. Whenever we face a choice between maintaining the current state or switching to an objectively better alternative, our brain treats the potential losses of changing as far more acute than the potential gains, making inertia our default setting.',

  coreConcept: 'Formally identified by William Samuelson and Richard Zeckhauser in 1988, status quo bias is powered by a confluence of loss aversion, sunk cost commitment, and regret avoidance. When an individual takes an action that leads to a negative outcome, they feel acute self-blame and regret. However, when an inaction (remaining in the status quo) leads to a bad outcome, it is rationalized as bad luck. Hence, we stick with inferior defaults to dodge the psychological sting of proactive responsibility.',
  summary60s: 'Consider employee retirement plans. When companies require employees to actively opt in to a 401(k) retirement plan by checking a box, enrollment hovers around 35%. When companies automatically enroll employees by default and allow them to opt out if they wish, enrollment surges to over 85%. The human participants did not suddenly become 50% more financially responsible; their status quo bias was redirected. Sticking with the pre-set default is the path of least cognitive resistance.',

  quickTakeaways: [
    'The Power of Defaults: Whoever controls the default choice effectively controls 80%+ of human behavior',
    'Omission vs. Commission: We dread the regret of taking a bad action far more than the chronic cost of doing nothing',
    'Switching Friction: Small administrative frictions (calling a hotline, filling a 2-page form) lock people into bad financial contracts for decades',
    'The Blank-Slate Antidote: Ask "If I were starting from scratch today with zero history, would I actively choose this exact setup?"',
  ],

  whyItHappens: 'Cognitive conservation and risk aversion. Evaluating novel choices consumes significant metabolic glucose in the prefrontal cortex. The status quo has already passed the baseline survival test—it hasn’t killed you yet—making it computationally safe.',
  evolutionaryMechanism: 'In dangerous ancestral environments, unverified changes in territory, diet, or clan alliances carried fatal risks. "Better the devil you know than the devil you don\'t" was a hardwired biological survival strategy.',

  howItWorks: 'The inertia loop: (1) Choice Presented: Opportunity to change career, software, investment, or habit; (2) Loss Magnification: Weighing the potential downsides of change at 2x the value of benefits; (3) Anticipated Regret: Fearing looking foolish if the change stumbles; (4) Paralysis: Defaulting to the existing baseline.',
  whereYouEncounterIt: 'Bank accounts (paying exorbitant fees for 20 years without switching), default browser settings, telecom data plans, organ donation registries, and unhappy long-term careers.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Active Opt-In vs. Default Opt-Out',
    description: 'How status quo inertia determines massive national policy outcomes.',
    analogySideA: {
      label: 'Opt-In Country (e.g., Germany: Default = Non-Donor)',
      detail: 'Citizens must actively sign a card to become an organ donor. Result: 12% donor consent rate.',
    },
    analogySideB: {
      label: 'Opt-Out Country (e.g., Austria: Default = Donor)',
      detail: 'Citizens are automatically donors unless they actively check a box. Result: 99% donor consent rate.',
    },
  },

  researchSummary: 'Samuelson & Zeckhauser (1988) tested decision makers with hypothetical resource allocation tasks (investments, healthcare options). When a specific option was framed as the existing historical status quo ("this is how the university pension has historically been allocated"), participants chose it significantly more often than when all options were presented neutrally from a clean slate.',
  limitationsAndControversies: 'Johnson & Goldstein\'s (2003) famous Science study demonstrated that status quo bias in organ donation is not merely laziness, but an implicit trust signal: people interpret default choices as tacit recommendations from expert policymakers.',
  commonMisconceptions: 'Common myth: "Doing nothing carries zero risk." Reality: Maintaining the status quo in a changing economic or social environment often carries far greater catastrophic downside than taking calculated proactive action.',

  howToRecognize: [
    'Paying for an unused gym membership or streaming subscription for six months because canceling requires making a phone call',
    'Remaining in an unfulfilling job for five years because job hunting feels psychologically overwhelming',
    'Keeping your savings in a traditional bank account earning 2.5% when insured liquid alternatives offer 7%',
    'Refusing to update your workflow software because "the old system works fine enough," despite losing 5 hours a week to manual bugs',
  ],

  scenarios: [
    {
      id: 'scen_sq_01',
      scenarioType: 'indian_context',
      title: 'The Inactive Bank Account Inertia in Chennai',
      vignette: 'Karthik in Chennai has maintained his primary salary account with a legacy public-sector bank for 14 years. The bank charges him quarterly maintenance fees, requires physical branch visits for basic address changes, and pays 2.7% annual interest. His tech-savvy colleague shows him that switching to a modern digital banking account takes 4 minutes via Aadhaar verification, eliminates all fees, and yields 6.5% interest. Karthik sighs: "Yes, I know I should switch, but I’ve been with my current bank since college. It feels like such a headache to change my direct deposit details."',
      breakdownAnalysis: 'Karthik is paralyzed by status quo bias and loss aversion. The minor switching friction of updating direct deposit feels acute today, while the chronic bleed of losing ₹45,000 every year in compound interest is psychologically invisible.',
      recommendedAction: 'Apply the Zero-Based Opportunity Cost calculation: "Remaining with the legacy bank is not free; it costs you ₹3,750 every single month in lost interest. Treat your monthly inaction as an active check you are writing to the bank."',
    },
  ],

  examples: [
    {
      id: 'ex_sq_01',
      domain: 'general',
      displayOrder: 1,
      title: 'The Default Browser Monopoly',
      description: 'Google pays Apple over $20 billion annually simply to remain the default search engine on Safari. They know that 80%+ of users will never open settings to switch search engines, proving the billions in default status quo value.',
      takeaway: 'Controlling default settings is the most valuable commercial real estate in the world.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_sq_01',
      scenarioContext: 'An enterprise software company wants to transition customers from their legacy on-premise license to their modern cloud subscription. Over 70% of enterprise customers refuse to migrate, citing satisfaction with the old software despite high maintenance costs.',
      question: 'Which strategy most effectively leverages behavioral economics to overcome the customer\'s status quo bias?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Send them longer PDF brochures highlighting 40 new features of the cloud software',
          explanation: 'More feature choices increase decision fatigue, driving customers deeper into the status quo.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Make cloud the default upgrade at contract renewal with zero migration friction, while making retention of the legacy system require an active opt-out and surcharge',
          explanation: 'Accurate: flipping the default architecture turns status quo inertia in favor of the desired transition.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Publicly mock customers on social media for using outdated legacy technology',
          explanation: 'Insulting customers triggers defensive psychological reactance and guarantees client defection.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'To change entrenched behavior, redesign the default architecture rather than arguing against inertia.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Perform a reverse default test: "If we were not currently doing this, would we actively invest time and resources to start doing it today?"',
  psychologicalDefenses: [
    {
      title: 'The Blank-Slate (Tabula Rasa) Question',
      instruction: 'Ask yourself: "If I woke up this morning and this job, software, or relationship did not exist in my life, would I actively go out of my way to acquire it today?" If not, initiate an exit plan.',
    },
    {
      title: 'Calculate the Inaction Tax',
      instruction: 'Calculate the mathematical dollar cost of maintaining the status quo over 5 years. Inaction is not neutral; it is an active financial bleed.',
    },
    {
      title: 'Audit Your Defaults Annually',
      instruction: 'Schedule a "Default Purge Day" every January to review subscriptions, insurance policies, bank accounts, and phone carriers.',
    },
  ],

  reflectionPrompt: 'What inefficient tool, habit, or subscription are you keeping purely because changing it feels mildly inconvenient?',

  references: [
    {
      id: 'ref_samuelson_1988',
      authors: 'Samuelson, W., & Zeckhauser, R.',
      year: 1988,
      title: 'Status quo bias in decision making',
      publicationName: 'Journal of Risk and Uncertainty',
      volumeIssue: '1(1), 7-59',
      doi: '10.1007/BF00055564',
      evidenceStrength: 'foundational_monograph',
    },
    {
      id: 'ref_johnson_2003',
      authors: 'Johnson, E. J., & Goldstein, D.',
      year: 2003,
      title: 'Do defaults save lives?',
      publicationName: 'Science',
      volumeIssue: '302(5649), 1338-1339',
      doi: '10.1126/science.1091721',
      evidenceStrength: 'landmark_paper',
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
      topicId: 'loss_aversion',
      slug: 'loss-aversion',
      title: 'Loss Aversion',
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
    ...TOPIC_STATUS_QUO_EN,
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

export const TOPIC_STATUS_QUO: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_STATUS_QUO_EN,
  hinglish: {
    ...TOPIC_STATUS_QUO_EN,
    title: 'Status Quo Bias: Purani Aadat Aur Default Ka Daldal',
    subtitle: 'Nayi aur behtar cheez ke samne hone par bhi purani kharab situation me phanse rehna.',
    shortDescription: 'Ek aisa psychological bias jisme log change ke darr se wahi purani kharab service, job ya subscription chalate rehte hain.',
    oneLineExplanation: 'Kharab bank ya bekaar job me sirf isliye tike rehna kyunki switch karna bohot bada jhanjhat lagta hai.',
    summary30s: 'Samuelson & Zeckhauser ne 1988 me prove kiya ki insaan ka dimaag change ko hamesha nuksan (loss) ki tarah dekhta hai. Agar company me retirement plan automatic default ho jaye, toh 85% log participate karte hain; agar unhe form bharna pade, toh sirf 35% log aage aate hain. Jo default set hota hai, dimaag wahi follow karta hai.',
  },
  hi: {
    ...TOPIC_STATUS_QUO_EN,
    title: 'Status Quo Bias (यथास्थिति पूर्वाग्रह)',
    subtitle: 'परिवर्तन से बचने और पुरानी, जानी-पहचानी परिस्थितियों में बने रहने की अतार्किक प्रवृत्ति।',
    shortDescription: 'बेहतर विकल्प उपलब्ध होने पर भी अपनी वर्तमान स्थिति या डिफ़ॉल्ट विकल्पों के साथ बने रहने का संज्ञानात्मक पूर्वाग्रह।',
    oneLineExplanation: 'परिवर्तन के डर से पुरानी खराब व्यवस्था को ढोते रहना।',
    summary30s: 'यथास्थिति पूर्वाग्रह (Status Quo Bias) के अनुसार मानव मस्तिष्क परिवर्तन से जुड़े संभावित नुकसान को उसके फायदों से दोगुना बड़ा मानता है। 2003 के प्रसिद्ध शोध में पाया गया कि जिन देशों में अंगदान स्वचालित डिफ़ॉल्ट था, वहां 99% लोगों ने सहमति दी, जबकि फॉर्म भरने की आवश्यकता वाले देशों में यह दर केवल 12% थी।',
  },
  gu: createLocalizedRecord('gu', "Status Quo Bias: The Gravitational Pull of the Familiar (પૂર્વગ્રહ)", "Status Quo Bias: The Gravitational Pull of the Familiar એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "Status Quo Bias: The Gravitational Pull of the Familiar (पूर्वग्रह)", "Status Quo Bias: The Gravitational Pull of the Familiar हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "Status Quo Bias: The Gravitational Pull of the Familiar (పక్షపాతం)", "Status Quo Bias: The Gravitational Pull of the Familiar అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "Status Quo Bias: The Gravitational Pull of the Familiar (சார்புநிலை)", "Status Quo Bias: The Gravitational Pull of the Familiar என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "Status Quo Bias: The Gravitational Pull of the Familiar (ಪಕ್ಷಪಾತ)", "Status Quo Bias: The Gravitational Pull of the Familiar ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "Status Quo Bias: The Gravitational Pull of the Familiar (പക്ഷപാതം)", "Status Quo Bias: The Gravitational Pull of the Familiar എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "Status Quo Bias: The Gravitational Pull of the Familiar (পক্ষপাতিত্ব)", "Status Quo Bias: The Gravitational Pull of the Familiar হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "Status Quo Bias: The Gravitational Pull of the Familiar (ਪੱਖਪਾਤ)", "Status Quo Bias: The Gravitational Pull of the Familiar ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "Status Quo Bias: The Gravitational Pull of the Familiar (جانبداری)", "Status Quo Bias: The Gravitational Pull of the Familiar انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "Status Quo Bias: The Gravitational Pull of the Familiar (ପକ୍ଷପାତିତା)", "Status Quo Bias: The Gravitational Pull of the Familiar ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "Status Quo Bias: The Gravitational Pull of the Familiar (পক্ষপাতিত্ব)", "Status Quo Bias: The Gravitational Pull of the Familiar সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
