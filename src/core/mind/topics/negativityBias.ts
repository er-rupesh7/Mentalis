import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: The Negativity Bias: Why Pain Shouts While Pleasure Whispers
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Rozin & Royzman (2001): Negativity bias, negativity dominance, and contagion
 * - Baumeister et al. (2001): Bad is stronger than good
 * - Vaish, Grossmann & Woodward (2008): Not all emotions are created equal: The negativity bias in social-emotional development
 */

export const TOPIC_NEGATIVITY_BIAS_EN: MindTopicDetail = {
  id: 'negativity_bias',
  categoryId: 'cognitive_biases',
  slug: 'negativity-bias',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 8,
  viewCount: 8120,
  shareCount: 680,
  bookmarkCount: 1510,
  title: 'The Negativity Bias: Why Pain Shouts While Pleasure Whispers',
  subtitle: 'Our nervous system is biologically wired to register negative stimuli faster, deeper, and longer than positive ones.',
  shortDescription: 'The psychological phenomenon by which humans pay more attention to, learn from, and are influenced by negative experiences than positive ones.',
  oneLineExplanation: 'One insult stings longer and cuts deeper than ten genuine compliments.',

  summary30s: 'The negativity bias is a foundational biological survival feature: bad feedback, insults, threats, and losses have a far greater emotional impact on human psychology than equally intense compliments, gifts, or successes. Your brain is not wired for perpetual happiness; it is wired for survival, treating every threat as urgent and every reward as secondary.',

  coreConcept: 'Synthesized comprehensively by Paul Rozin and Edward Royzman (2001) and Roy Baumeister et al. (2001) in their landmark paper "Bad Is Stronger Than Good," the negativity bias manifests across four psychological dimensions: negative potency, steeper negative gradients, negativity dominance, and negative differentiation. A single drop of sewage contaminates an entire barrel of clean wine, but a drop of clean wine does nothing to purify a barrel of sewage.',
  summary60s: 'You could receive nine glowing, celebratory performance reviews praising your leadership and technical creativity, and one lukewarm review mentioning that your formatting was inconsistent. When you lie in bed that night, which review will your mind obsess over? The brain\'s threat detection center, the amygdala, uses roughly two-thirds of its neurons to scan for danger and negative cues. While positive emotions fade quickly, negative emotional events trigger cortisol and adrenaline cascades that etch themselves deeply into hippocampal memory.',

  quickTakeaways: [
    'The 5:1 Magic Ratio: John Gottman demonstrated that stable relationships require at least 5 positive interactions to counter 1 negative interaction',
    'Evolutionary Vigilance: An ancestor who ignored a predator died; an ancestor who missed a blueberry bush merely stayed hungry',
    'Media Cynicism Engine: News algorithms exploit negativity bias because outrage and panic generate 400% higher click-through engagement',
    'Deliberate Savoring Antidote: Positive experiences must be actively focused on for 20+ seconds to transfer from short-term to long-term memory',
  ],

  whyItHappens: 'Evolutionary survival asymmetry. In the wild, avoiding a deadly threat carries infinite consequence (life vs. death), whereas enjoying a positive opportunity carries finite consequence (a meal or mate). Evolution ruthlessly prioritized error-proofing against catastrophic downside.',
  evolutionaryMechanism: 'Natural selection favored paranoid ancestors. Those who assumed every rustle in the grass was a venomous serpent survived to reproduce; those who optimistically assumed it was the wind were eventually eliminated from the gene pool.',

  howItWorks: 'The neurological pathway: (1) Rapid Amygdala Activation: Negative sensory inputs are routed directly through the subcortical thalamus to the amygdala in milliseconds; (2) Hormonal Surge: Cortisol and epinephrine heighten arousal and narrow attentional focus; (3) Memory Consolidation: The hippocampus prioritizes the negative narrative for indefinite retention.',
  whereYouEncounterIt: 'Performance appraisals at work, marital disagreements, internet comment sections (where one hateful remark ruins a creator\'s entire day), financial loss aversion, and political smear campaigns.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Psychological Weight: 1 Bad vs. 1 Good',
    description: 'The inherent asymmetry of human emotional evaluation.',
    analogySideA: {
      label: 'Positive Event (+1 Unit)',
      detail: '"Earned a promotion and received a bonus." -> Mood increases moderately, then normalizes within 48 hours.',
    },
    analogySideB: {
      label: 'Negative Event (-1 Unit)',
      detail: '"Received a critical reprimand from senior leadership." -> Triggers rumination, insomnia, and hypervigilance for weeks.',
    },
  },

  researchSummary: 'Baumeister et al. (2001) reviewed hundreds of psychological studies across relationships, learning, memory, health, and consumer behavior. Across every single domain, bad events exhibited superior power: bad parenting damages more than good parenting repairs; traumatic events create permanent PTSD far more easily than peak joyful events create permanent euphoria.',
  limitationsAndControversies: 'In older adults, the "positivity effect" (Carstensen & Mikels, 2005) emerges: as humans age and perceive their remaining time horizon as limited, socioemotional selectivity theory shows they increasingly prioritize emotionally positive memories over negative ones.',
  commonMisconceptions: 'Common myth: "Negative focus is a sign of personal pessimism or depression." Reality: Negativity bias is a universal evolutionary adaptation shared across almost all animal species designed to prioritize immediate survival over pleasant rewards.',

  howToRecognize: [
    'Allowing a single sharp comment or critical review to erase the joy of an entire successful project or day',
    'Obsessively reading negative news threads ("doomscrolling") while feeling an inability to pull away',
    'Fixating exclusively on what your partner did wrong while taking their continuous daily support for granted',
    'Catastrophizing small setbacks into total life catastrophes',
  ],

  scenarios: [
    {
      id: 'scen_neg_01',
      scenarioType: 'indian_context',
      title: 'The YouTube Creator in Hyderabad',
      vignette: 'Arjun, a technology educator from Hyderabad, uploads an in-depth video tutorial on machine learning algorithms. The video receives 48,000 views, 3,200 likes, and 450 deeply grateful comments from engineering students. However, one anonymous commenter writes: "Your voice is unbearable and you explain basic concepts like an idiot." Arjun spends his entire weekend staring at that single comment, unable to eat or sleep, and tells his wife he wants to delete his entire YouTube channel.',
      breakdownAnalysis: 'Arjun is paralyzed by the negativity bias. 450 instances of profound positive social validation were instantly overridden by a single low-effort insult. His nervous system treated the single insult as an existential threat to his social standing.',
      recommendedAction: 'Implement the Gottman Ratio rule: "There are 450 positive testimonials against 1 troll comment. Mathematically, 450:1 is ninety times higher than the stability threshold. The brain wants to obsess over the 1; force your eyes back to the 450."',
    },
  ],

  examples: [
    {
      id: 'ex_neg_01',
      domain: 'relationships',
      displayOrder: 1,
      title: 'The Forgotten Anniversaries vs Daily Chores',
      description: 'A spouse who prepares dinner and handles household errands every day for a year makes one mistake by forgetting a minor anniversary dinner, leading to a massive fight where the other partner screams: "You never care about our marriage!"',
      takeaway: 'One negative rupture overshadows hundreds of quiet, positive domestic contributions.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_neg_01',
      scenarioContext: 'An organizational leader wants to build psychological safety on her engineering team. She delivers critical feedback once a week during 1-on-1s and compliments engineers roughly once a week when they ship good code.',
      question: 'Based on empirical research on the negativity bias (e.g., Baumeister, Gottman), why is this 1:1 balance insufficient?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Because negative feedback carries roughly three to five times more psychological weight than positive feedback, causing morale to steadily deteriorate',
          explanation: 'Accurate: because bad is stronger than good, a 1:1 ratio produces a net negative, hostile emotional environment.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Because engineers never care about verbal praise and only respond to stock options',
          explanation: 'Human psychological needs for recognition are universal regardless of compensation structures.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Because compliments should be completely eliminated in professional workplaces',
          explanation: 'Completely eliminating positive reinforcement leads to severe burnout and high employee turnover.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'To maintain neutral emotional balance, you need at least three to five positive affirmations for every one critique.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Deliberately log 3 positive or neutral facts for every negative incident, balancing the brain\'s instinctive threat-detection skew.',
  psychologicalDefenses: [
    {
      title: 'Practice 20-Second Savoring (Rick Hanson)',
      instruction: 'When something positive happens (a compliment, a beautiful sunset, a task completed), consciously hold your attention on the feeling for at least 20 seconds to allow neural wiring to occur.',
    },
    {
      title: 'The Written Evidence Log',
      instruction: 'Keep a "Win & Gratitude Folder" on your phone or desktop. When hit by a stinging critique, force yourself to review 5 positive entries before formulating a reply.',
    },
    {
      title: 'Enforce a "No-Doomscroll" Boundary',
      instruction: 'Cap passive news reading to 15 scheduled minutes per day. Media thrives on commercializing your biological fear reflex.',
    },
  ],

  reflectionPrompt: 'Think back to yesterday: did one minor criticism ruin your mood and overshadow ten positive compliments or achievements?',

  references: [
    {
      id: 'ref_baumeister_2001',
      authors: 'Baumeister, R. F., Bratslavsky, E., Finkenauer, C., & Vohs, K. D.',
      year: 2001,
      title: 'Bad is stronger than good',
      publicationName: 'Review of General Psychology',
      volumeIssue: '5(4), 323-370',
      doi: '10.1037/1089-2680.5.4.323',
      evidenceStrength: 'systematic_review',
    },
    {
      id: 'ref_rozin_2001',
      authors: 'Rozin, P., & Royzman, E. B.',
      year: 2001,
      title: 'Negativity bias, negativity dominance, and contagion',
      publicationName: 'Personality and Social Psychology Review',
      volumeIssue: '5(4), 296-320',
      doi: '10.1207/S15327957PSPR0504_2',
      evidenceStrength: 'theoretical_framework',
    },
  ],

  relatedTopics: [
    {
      topicId: 'confirmation_bias',
      slug: 'confirmation-bias',
      title: 'Confirmation Bias',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'algorithmic_reinforcement',
      slug: 'algorithmic-reinforcement',
      title: 'Algorithmic Reinforcement',
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
    ...TOPIC_NEGATIVITY_BIAS_EN,
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

export const TOPIC_NEGATIVITY_BIAS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_NEGATIVITY_BIAS_EN,
  hinglish: {
    ...TOPIC_NEGATIVITY_BIAS_EN,
    title: 'The Negativity Bias: Dard Cheekhta Hai, Khushi Fufkarti Hai',
    subtitle: 'Hamara nervous system achi baaton ke mukable buri baaton ko 5 guna zyada tez aur gehra mehsoos karta hai.',
    shortDescription: 'Ek aisa psychological rule jisme 10 tareefein milne ke baad bhi ek chota sa taana ya insult pure din dimaag me ghoomta rehta hai.',
    oneLineExplanation: 'Ek gali ya insult ki chubhan das tareefon par bhari padti hai.',
    summary30s: 'Negativity Bias hamari biological survival requirement hai. Purane zamane me agar sher ka aahat ignore kiya toh maut pakki thi, lekin aam ka ped chhut gaya toh agle din mil jata tha. Isliye dimaag khushi se zyada khatre aur buri khabron ko pakad kar baith jata hai.',
  },
  hi: {
    ...TOPIC_NEGATIVITY_BIAS_EN,
    title: 'The Negativity Bias (नकारात्मकता पूर्वाग्रह)',
    subtitle: 'हमारा तंत्रिका तंत्र सकारात्मक अनुभवों की तुलना में नकारात्मक अनुभवों को अधिक तीव्रता से दर्ज करता है।',
    shortDescription: 'सकारात्मक घटनाओं की तुलना में नकारात्मक घटनाओं, आलोचनाओं और खतरों को अधिक महत्व देने की स्वाभाविक मानवीय प्रवृत्ति।',
    oneLineExplanation: 'दस प्रशंसाओं की तुलना में एक आलोचना अधिक गहरी चुभती है।',
    summary30s: 'नकारात्मकता पूर्वाग्रह (Negativity Bias) के अनुसार मानव मस्तिष्क खतरों और नकारात्मक अनुभवों को प्राथमिकता देने के लिए जैविक रूप से अनुकूलित है। जॉन गॉटमैन और रॉय बॉमिस्टर के शोध से सिद्ध हुआ है कि एक नकारात्मक घटना के प्रभाव को निष्प्रभावी करने के लिए कम से कम 5 सकारात्मक घटनाओं की आवश्यकता होती है।',
  },
  gu: createLocalizedRecord('gu', "The Negativity Bias: Why Pain Shouts While Pleasure Whispers (પૂર્વગ્રહ)", "The Negativity Bias: Why Pain Shouts While Pleasure Whispers એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "The Negativity Bias: Why Pain Shouts While Pleasure Whispers (पूर्वग्रह)", "The Negativity Bias: Why Pain Shouts While Pleasure Whispers हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "The Negativity Bias: Why Pain Shouts While Pleasure Whispers (పక్షపాతం)", "The Negativity Bias: Why Pain Shouts While Pleasure Whispers అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "The Negativity Bias: Why Pain Shouts While Pleasure Whispers (சார்புநிலை)", "The Negativity Bias: Why Pain Shouts While Pleasure Whispers என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "The Negativity Bias: Why Pain Shouts While Pleasure Whispers (ಪಕ್ಷಪಾತ)", "The Negativity Bias: Why Pain Shouts While Pleasure Whispers ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "The Negativity Bias: Why Pain Shouts While Pleasure Whispers (പക്ഷപാതം)", "The Negativity Bias: Why Pain Shouts While Pleasure Whispers എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "The Negativity Bias: Why Pain Shouts While Pleasure Whispers (পক্ষপাতিত্ব)", "The Negativity Bias: Why Pain Shouts While Pleasure Whispers হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "The Negativity Bias: Why Pain Shouts While Pleasure Whispers (ਪੱਖਪਾਤ)", "The Negativity Bias: Why Pain Shouts While Pleasure Whispers ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "The Negativity Bias: Why Pain Shouts While Pleasure Whispers (جانبداری)", "The Negativity Bias: Why Pain Shouts While Pleasure Whispers انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "The Negativity Bias: Why Pain Shouts While Pleasure Whispers (ପକ୍ଷପାତିତା)", "The Negativity Bias: Why Pain Shouts While Pleasure Whispers ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "The Negativity Bias: Why Pain Shouts While Pleasure Whispers (পক্ষপাতিত্ব)", "The Negativity Bias: Why Pain Shouts While Pleasure Whispers সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
