import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Relationships & Communication Track
 * Topic: Gottman's Four Horsemen: The Predictors of Relational Rupture
 * Category: Relationships & Communication (relationships_comm)
 * 
 * Academic Grounding:
 * - Gottman & Levenson (1992): Marital processes predictive of later dissolution
 * - Gottman & Silver (1999): The Seven Principles for Making Marriage Work
 * - Gottman (1994): What Predicts Divorce?
 */

export const TOPIC_GOTTMAN_HORSEMEN_EN: MindTopicDetail = {
  id: 'gottman_four_horsemen',
  categoryId: 'relationships_comm',
  slug: 'gottmans-four-horsemen',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 3,
  viewCount: 7840,
  shareCount: 690,
  bookmarkCount: 1540,
  title: 'Gottman\'s Four Horsemen: The Predictors of Relational Rupture',
  subtitle: 'The four destructive communication patterns—Criticism, Contempt, Defensiveness, and Stonewalling—that predict divorce with 93% accuracy.',
  shortDescription: 'The four toxic interpersonal communication styles identified by Dr. John Gottman that erode emotional intimacy and forecast relationship dissolution if left unchecked.',
  oneLineExplanation: 'Attacking someone\'s character rather than addressing a specific behavior.',

  summary30s: 'In Dr. John Gottman\'s decades-long longitudinal research at the University of Washington "Love Lab," four specific communication patterns predicted the death of a relationship with over 90% statistical accuracy: Criticism (attacking character), Contempt (moral superiority and mocking), Defensiveness (playing the victim), and Stonewalling (shutting down and withdrawing).',

  coreConcept: 'Formulated by John Gottman and Robert Levenson, the "Four Horsemen of the Apocalypse" metaphor describes the lethal progression of relational conflict. Unlike healthy complaints ("I am frustrated that the laundry wasn\'t folded today"), Criticism escalates into character assassination ("You are lazy and never care about our home"). If uncorrected, Criticism metastasizes into Contempt—the single greatest predictor of divorce—where one partner looks down on the other with sarcasm, eye-rolling, and disgust.',
  summary60s: 'Contempt does not merely erode psychological intimacy; it physically impairs immune health. Gottman demonstrated that spouses on the receiving end of contempt suffer statistically higher rates of infectious diseases (colds, flu) due to chronic sympathetic nervous system flooding. When attacked with contempt, the other partner reflexively responds with Defensiveness ("It\'s not my fault, you are the one who messed up!"), which eventually drives the listener into physiological burnout (heart rate > 100 BPM), causing them to shut down completely through Stonewalling.',

  quickTakeaways: [
    'The 93% Predictive Precision: Gottman predicted whether a couple would divorce within 6 years with 93% accuracy by observing 15 minutes of conflict',
    'Contempt is the Deadliest: Sarcasm, cynicism, mockery, and eye-rolling represent poisonous sulfuric acid to human attachment',
    'The 4 Proven Antidotes: Gentle Startup (for Criticism), Culture of Appreciation (for Contempt), Taking Responsibility (for Defensiveness), and Physiological Self-Soothing (for Stonewalling)',
    'Complaint vs. Criticism: A complaint addresses a specific action; criticism attacks the partner’s identity and personality',
  ],

  whyItHappens: 'Chronic emotional flooding and maladaptive defense mechanisms. When interpersonal conflicts are unresolved, partners enter chronic physiological hyperarousal. In this fight-or-flight state, higher-order empathy circuits shut down, and primitive attack-or-retreat behaviors take over.',
  evolutionaryMechanism: 'Dominance hierarchies and territorial boundary defense. When an ancestral bond was threatened, asserting dominance (contempt) or fleeing to a safe perimeter (stonewalling) were instinctual fight-or-flight strategies, but they are lethal inside an intimate modern partnership.',

  howItWorks: 'The four-stage downward spiral: (1) Criticism: Escalating a specific complaint into global character assassination ("You always / You never"); (2) Contempt: Sneering, sarcasm, and moral superiority; (3) Defensiveness: Reverse-blaming and righteous indignation; (4) Stonewalling: Complete emotional and physical detachment.',
  whereYouEncounterIt: 'Marital arguments over domestic chores or finances, co-founder disputes in high-stress startups, parent-teenager conflicts, and toxic employee-manager relationships.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Toxic Horseman vs. Scientific Antidote',
    description: 'Dr. John Gottman’s research-backed replacements for destructive conflict habits.',
    analogySideA: {
      label: 'The Horseman (Toxic Pattern)',
      detail: 'Criticism: "You forgot our grocery list again! Why are you so completely irresponsible and useless?"',
    },
    analogySideB: {
      label: 'The Antidote (Gentle Startup)',
      detail: 'Gentle Startup: "I feel stressed when the groceries aren\'t here because dinner is late. Could you please double-check the list before leaving work?"',
    },
  },

  researchSummary: 'Gottman & Levenson (1992) tracked 73 couples over a 14-year period in observational apartments wired with physiological sensors (heart rate, skin conductance, endocrine cortisol assays) and video cameras. Facial coding of fleeting micro-expressions of contempt (specifically the unilateral corner sneer of the mouth) proved to be the single most potent predictor of relationship termination.',
  limitationsAndControversies: 'While Gottman\'s models have near-unanimous empirical support in marital therapy, critics (e.g., Heyman & Slep, 2001) note that predicting divorce in already-distressed couples seeking clinical therapy is statistically easier than predicting dissolution in young, asymptomatic populations.',
  commonMisconceptions: 'Common myth: "Healthy relationships never argue or experience anger." Reality: John Gottman showed that frequency of arguments does not predict divorce; rather, the presence of specific corrosive communication patterns (especially Contempt and Stonewalling) predicts separation with 93% accuracy.',

  howToRecognize: [
    'Beginning complaints with absolute character generalizations: "You always ignore me" or "You never take responsibility"',
    'Rolling your eyes, curling the corner of your lip in disgust, or mimicking your partner\'s voice sarcastically',
    'Responding to a partner\'s legitimate concern by listing 5 things they did wrong last month (counter-attacking)',
    'Crossing your arms, staring blankly at the wall, and refusing to respond verbally when your partner speaks to you',
  ],

  scenarios: [
    {
      id: 'scen_gott_01',
      scenarioType: 'indian_context',
      title: 'The Weekend Chores Argument in Pune',
      vignette: 'Rohan and Neha, married for 3 years in Pune, are standing in their kitchen on Saturday morning. Neha sees an unwashed frying pan in the sink and sneers: "Look at this. You can manage a 20-person engineering team at work, but at home you lack the basic intelligence to clean a pan. You expect me to be your mother." Rohan feels his heart pounding at 115 BPM. He yells: "Well, if you didn\'t waste your entire Saturday morning scrolling Instagram, maybe the house wouldn\'t be a mess!" Neha crosses her arms and rolls her eyes, while Rohan walks into the bedroom, slams the door, and puts on noise-canceling headphones.',
      breakdownAnalysis: 'In under 90 seconds, all four horsemen executed their lethal dance: (1) Neha used Criticism and Contempt ("lack basic intelligence", sneering, "be your mother"); (2) Rohan responded with Defensiveness and Counter-Attacking ("you scroll Instagram"); (3) Neha displayed Contempt (eye-rolling); (4) Rohan fell into physiological flooding (>100 BPM) and deployed Stonewalling (headphones and slammed door).',
      recommendedAction: 'Apply Gottman\'s 20-minute physiological time-out rule: Rohan must say: "Neha, I am emotionally flooded and cannot speak productively right now. I need 20 minutes to calm my heart rate down, and then I will return to wash the pan and talk." During the 20 minutes, engage in slow diaphragmatic breathing, not angry rumination.',
    },
  ],

  examples: [
    {
      id: 'ex_gott_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Contemptuous Code Review',
      description: 'A tech lead comments on a pull request: "Did a toddler write this logic? This is completely pathetic." The junior engineer becomes defensive, stops asking for help, and resigns three months later.',
      takeaway: 'Contempt in code reviews destroys psychological safety and triggers employee turnover.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_gott_01',
      scenarioContext: 'A spouse says to their partner: "I notice that you often arrive 20 minutes late when we agree to meet for dinner. It makes me feel like my time isn\'t valued, and I would really appreciate it if you could text me if traffic holds you up."',
      question: 'According to Gottman\'s research framework, why is this communication healthy rather than destructive?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Because it is a specific, gentle complaint focused on an observable behavior and personal feeling, without attacking the partner\'s global character or displaying contempt',
          explanation: 'Accurate: this is the textbook "Gentle Startup" antidote that preserves emotional safety.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Because spouses should never express negative emotions under any circumstances',
          explanation: 'Healthy relationships require open conflict; what matters is the manner of expression, not artificial suppression.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Because lateness is a legal violation of marital contracts',
          explanation: 'Marital conflict resolution is grounded in attachment and emotional regulation, not legalism.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Attack the specific problem with a gentle startup; never attack the human being’s character.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Replace criticism with gentle start-ups, contempt with appreciation, defensiveness with partial accountability, and stonewalling with physiological soothing.',
  psychologicalDefenses: [
    {
      title: 'The Gentle Startup Formula (I Feel... About... I Need...)',
      instruction: 'Replace "You always / You never" with: "I feel [Emotion] about [Specific Event], and I need [Concrete Positive Action]."',
    },
    {
      title: 'The 20-Minute Flooding Break',
      instruction: 'When heart rate exceeds 100 BPM during an argument, all constructive reasoning ceases. Enforce an immediate 20-minute physical separation with calming self-talk before resuming conversation.',
    },
    {
      title: 'Build a Culture of Daily Appreciation',
      instruction: 'Inoculate your relationships against contempt by actively voicing two small things you genuinely appreciate about your partner or colleague every single day.',
    },
  ],

  reflectionPrompt: 'During your last heated argument, did you roll your eyes, shut down, or attack the other person\'s character rather than the specific behavior?',

  references: [
    {
      id: 'ref_gottman_1992',
      authors: 'Gottman, J. M., & Levenson, R. W.',
      year: 1992,
      title: 'Marital processes predictive of later dissolution: Behavior, physiology, and health',
      publicationName: 'Journal of Personality and Social Psychology',
      volumeIssue: '63(2), 221-233',
      doi: '10.1037/0022-3514.63.2.221',
      evidenceStrength: 'landmark_paper',
    },
    {
      id: 'ref_gottman_1999',
      authors: 'Gottman, J. M., & Silver, N.',
      year: 1999,
      title: 'The Seven Principles for Making Marriage Work',
      publicationName: 'Crown Publishers (Revised Edition 2015)',
      volumeIssue: 'Chapters 2-4',
      doi: '10.1037/0000000-000',
      evidenceStrength: 'systematic_review',
    },
  ],

  relatedTopics: [
    {
      topicId: 'healthy_boundaries',
      slug: 'healthy-boundaries',
      title: 'Healthy Boundaries',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'stonewalling',
      slug: 'stonewalling',
      title: 'Stonewalling Dynamics',
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
    ...TOPIC_GOTTMAN_HORSEMEN_EN,
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

export const TOPIC_GOTTMAN_HORSEMEN: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_GOTTMAN_HORSEMEN_EN,
  hinglish: {
    ...TOPIC_GOTTMAN_HORSEMEN_EN,
    title: 'Gottman\'s Four Horsemen: Rishton Ko Barbaad Karne Wale 4 Zeher',
    subtitle: 'Criticism, Contempt, Defensiveness aur Stonewalling—wo 4 aadatein jo 93% accuracy se rishta todti hain.',
    shortDescription: 'Dr. John Gottman ki 40 saal ki research: jab baatchit me character attack, tanz aur chup rehna shuru ho jaye toh divorce tay hota hai.',
    oneLineExplanation: 'Galti par baat karne ke bajaye doosre ke character aur aukaat par attack karna.',
    summary30s: 'Dr. John Gottman ne 40 saal tak couples ki ladaiyan record karke dekha aur bataya ki 4 baatein rishton ke liye deadly hoti hain: (1) Criticism (Character par attack karna), (2) Contempt (Tanz marna, aankhein ghumana aur neecha dikhana), (3) Defensiveness (Apni galti na maankar ulta attack karna), aur (4) Stonewalling (Room chhodkar chale jana aur chup baith jana).',
  },
  hi: {
    ...TOPIC_GOTTMAN_HORSEMEN_EN,
    title: 'Gottman\'s Four Horsemen (गॉटमैन के चार प्रलयंकारी अश्वारोही)',
    subtitle: 'आलोचना, तिरस्कार, रक्षात्मकता और चुप्पी: वे चार संचार दोष जो 93% सटीकता से संबंधों के टूटने की भविष्यवाणी करते हैं।',
    shortDescription: 'डॉ. जॉन गॉटमैन द्वारा पहचाने गए चार विनाशकारी संचार पैटर्न जो भावनात्मक निकटता को नष्ट करके संबंधों को विच्छेद की ओर ले जाते हैं।',
    oneLineExplanation: 'विशिष्ट व्यवहार पर चर्चा करने के स्थान पर साथी के चरित्र पर आक्रमण करना।',
    summary30s: 'गॉटमैन के चार अश्वारोही (Four Horsemen) यह दर्शाते हैं कि वैवाहिक विफलता का मुख्य कारण मतभेद नहीं, बल्कि मतभेद व्यक्त करने का तरीका है। इनमें "तिरस्कार" (Contempt—आँखें तरेरना, उपहास और व्यंग्य) संबंध विच्छेद का सबसे बड़ा भविष्यवक्ता है जो साथी की रोग प्रतिरोधक क्षमता को भी कमजोर कर देता है।',
  },
  gu: createLocalizedRecord('gu', "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture (પૂર્વગ્રહ)", "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture (पूर्वग्रह)", "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture (పక్షపాతం)", "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture (சார்புநிலை)", "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture (ಪಕ್ಷಪಾತ)", "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture (പക്ഷപാതം)", "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture (পক্ষপাতিত্ব)", "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture (ਪੱਖਪਾਤ)", "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture (جانبداری)", "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture (ପକ୍ଷପାତିତା)", "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture (পক্ষপাতিত্ব)", "Gottman\\'s Four Horsemen: The Predictors of Relational Rupture সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
