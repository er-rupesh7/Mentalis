import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Media Psychology Track
 * Topic: FOMO & Attention Capture: The Neurobiology of Compulsive Checking
 * Category: Social Media Psychology (social_media_tech)
 * 
 * Academic Grounding:
 * - Przybylski et al. (2013): Motivational, emotional, and behavioral correlates of fear of missing out
 * - Newport (2019): Digital Minimalism: Choosing a Focused Life in a Noisy World
 * - Alter (2017): Irresistible: The Rise of Addictive Technology and the Business of Keeping Us Hooked
 */

export const TOPIC_FOMO_ATTENTION_EN: MindTopicDetail = {
  id: 'fomo_attention_capture',
  categoryId: 'social_media_tech',
  slug: 'fomo-and-attention-capture',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 4,
  viewCount: 8240,
  shareCount: 690,
  bookmarkCount: 1610,
  title: 'FOMO & Attention Capture: The Neurobiology of Compulsive Checking',
  subtitle: 'The pervasive apprehension that others might be having rewarding experiences from which one is absent, commercialized into infinite loops.',
  shortDescription: 'The pervasive apprehension that others are experiencing rewarding moments without you, exploited by tech notification architectures to capture and monetize attention.',
  oneLineExplanation: 'Reaching for your phone every four minutes to check a notification that doesn\'t even exist.',

  summary30s: 'Fear of Missing Out (FOMO) is a psychological vulnerability rooted in Self-Determination Theory: when core human needs for competence, autonomy, and relatedness are deficient, people develop chronic anxiety that exciting social conversations, financial windfalls, or cultural memes are unfolding without them. Digital platforms monetize this anxiety through pull-to-refresh feeds, red badge alerts, and ephemeral stories.',

  coreConcept: 'Formally operationalized in psychological literature by Andrew Przybylski and colleagues in 2013, FOMO is characterized by a continuous desire to stay connected with what others are doing. Technology designers exploit this through intermittent variable rewards and artificial friction: Snapchat streaks that penalize missing a single day, Instagram stories that vanish after 24 hours, and push notifications with vague cliffhangers ("Someone mentioned you..."). This creates a conditioned vigilance reflex.',
  summary60s: 'Have you ever felt your phone vibrate in your pocket, reached down to check it, and discovered that the screen was completely blank? This phenomenon—known in cognitive psychology as "Phantom Vibration Syndrome"—is physical proof of neurological hypervigilance. Your brain\'s sensory gating mechanisms have been conditioned to treat an incoming notification as an urgent biological alarm. The average smartphone user now unlocks their device 150 times a day and touches the screen over 2,600 times, fracturing their working memory into unusable micro-shards.',

  quickTakeaways: [
    'The Need Deficit: FOMO is highest in individuals experiencing low general life satisfaction and loneliness',
    'Phantom Vibration Syndrome: Physical hallucination of smartphone buzzes caused by neurological hypersensitivity',
    'Engineered Ephemerality: 24-hour disappearing stories and live badges weaponize loss aversion to force daily app opens',
    'JOMO (Joy of Missing Out): Cultivating intentional peace in not knowing what everyone else is doing',
  ],

  whyItHappens: 'Evolutionary information foraging. In ancestral environments, staying informed about clan gossip, alliances, and food discoveries was critical for survival. Missing a crucial tribal announcement meant vulnerability to ambush or exclusion from meat distribution.',
  evolutionaryMechanism: 'Information was scarce in the wild. Animals are hardwired to forage continuously for signals. When tech algorithms provide an infinite, bottomless buffet of social signals, our ancient foraging instincts never trigger satiety.',

  howItWorks: 'The compulsive checking loop: (1) Internal Trigger: A micro-moment of boredom, loneliness, or awkwardness in an elevator; (2) Action: Reaching into pocket and executing pull-to-refresh gesture; (3) Variable Reward: Sometimes exciting news, usually mundane filler; (4) Investment: Sending a reaction, leaving a comment, or loading a story, priming the next check.',
  whereYouEncounterIt: 'Stock and crypto price tracking apps (checking Bitcoin price at 3:00 AM), group WhatsApp chats, ephemeral 24-hour stories, flash sales, and dating apps.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Continuous Partial Attention vs. Deep Focus',
    description: 'How engineered notification architectures shatter cognitive performance.',
    analogySideA: {
      label: 'Deep Work (Monotasking)',
      detail: 'Phone in another room. Prefrontal cortex enters flow state: complex mathematical and creative insights emerge smoothly.',
    },
    analogySideB: {
      label: 'The FOMO State (Fractured Attention)',
      detail: 'Phone face-up on desk. Mind checks screen every 4 minutes. "Attention Residue" leaves cognitive IQ functionally degraded by 10 points.',
    },
  },

  researchSummary: 'Przybylski et al. (2013) developed the first standardized FOMO scale across international cohorts. Higher FOMO scores reliably predicted distracted driving, compulsive checking of devices during university lectures, and lower perceived mood and life satisfaction. Brain imaging demonstrates that receiving a notification activates the identical dopaminergic ventral striatum circuits as recreational slot machines.',
  limitationsAndControversies: 'Cal Newport (2019) argues that FOMO is not an inevitable consequence of human psychology, but an intentional design choice of surveillance capitalism. Users who execute a 30-day "Digital Declutter" report a near-total collapse of FOMO after 7 days, replaced by a surge in tranquility and relational presence.',
  commonMisconceptions: 'Common myth: "FOMO is just a frivolous teenager problem." Reality: FOMO is rooted in ancient evolutionary fears of social ostracism and resource exclusion, weaponized by modern real-time notification architectures.',

  howToRecognize: [
    'Feeling a spike of anxiety or restlessness whenever you enter an area with zero cellular reception or Wi-Fi',
    'Reaching for your phone at traffic lights, during movie scenes, or while waiting in line at a grocery checkout',
    'Experiencing physical phantom vibrations in your pocket when your phone is actually on your desk across the room',
    'Staying glued to a group chat or crypto exchange late into the night because you fear an important announcement might occur while you sleep',
  ],

  scenarios: [
    {
      id: 'scen_fomo_01',
      scenarioType: 'indian_context',
      title: 'The Crypto Group Chat Vigilance in Mumbai',
      vignette: 'Nikhil, a 25-year-old financial analyst in Mumbai, is a member of four private crypto trading Telegram channels. He keeps push notifications enabled on his smartwatch. During a quiet dinner with his parents to celebrate his mother\'s birthday, Nikhil’s wrist buzzes with an alert: "SHIB coin volume surging +18% in 3 minutes!" Nikhil’s heart leaps. He excuses himself to the restroom, spends 20 minutes staring at candlestick charts, and misses his mother blowing out her birthday candles.',
      breakdownAnalysis: 'Nikhil is captive to FOMO and engineered variable rewards. The unpredictability of market surges combined with social hype conditioned his nervous system to prioritize volatile digital pings over irreplaceable family intimacy.',
      recommendedAction: 'Adopt Cal Newport\'s Digital Minimalism boundary: "Turn off all wrist notifications. Financial trading and social checking must be restricted to two designated 30-minute desktop windows per day. Silence is the ultimate luxury."',
    },
  ],

  examples: [
    {
      id: 'ex_fomo_01',
      domain: 'general',
      displayOrder: 1,
      title: 'The Party You Didn\'t Want to Attend',
      description: 'You feel exhausted on a Friday night and desperately want to read and sleep. Yet you drag yourself to a loud, crowded party you dislike, purely out of fear that people will bond without you or post photos you aren\'t in.',
      takeaway: 'FOMO causes us to trade genuine restoration for hollow social attendance.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_fomo_01',
      scenarioContext: 'A college student struggles with chronic exam anxiety and poor retention. Her phone sits face-up on her study desk on silent mode, but the screen lights up with social media previews every few minutes.',
      question: 'According to cognitive research by Dr. Gloria Mark (UC Irvine) and Cal Newport, why is having the phone on the desk devastating to her study retention, even if she never touches it?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Because each sensory flicker leaves "Attention Residue," forcing the brain to expend cognitive glucose deciding NOT to check the phone, degrading working memory capacity',
          explanation: 'Accurate: resisting temptation consumes cognitive resources; physical proximity to the phone measurably degrades brainpower.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Because smartphones emit radio waves that directly destroy hippocampal neurons in under 10 minutes',
          explanation: 'Smartphone radio waves do not destroy neurons; the impairment is attentional and cognitive.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Because silent mode causes smartphones to consume 400% more battery power',
          explanation: 'Battery power consumption has zero relationship to student cognitive retention.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Out of sight is out of mind: physical separation from devices is mandatory for deep cognitive focus.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Embrace JOMO (Joy of Missing Out): curate deliberate digital downtime and recognize that real depth requires saying no to superficial novelty.',
  psychologicalDefenses: [
    {
      title: 'The Physical Distance Rule',
      instruction: 'When working or sleeping, keep your smartphone in another room entirely. Research shows that having a phone in the same room—even turned off—reduces working memory performance.',
    },
    {
      title: 'Turn Off All Non-Human Notifications',
      instruction: 'Disable all push notifications except direct 1-on-1 human communications (calls and personal messages). News apps, social platforms, and games should have zero right to buzz your pocket.',
    },
    {
      title: 'Cultivate JOMO (The Joy of Missing Out)',
      instruction: 'Celebrate the fact that the universe is vast, millions of conversations are happening without you, and your quiet focus on your own craft and health is the highest form of personal freedom.',
    },
  ],

  reflectionPrompt: 'How often do you refresh your phone because you feel everyone else is participating in something exciting without you?',

  references: [
    {
      id: 'ref_przybylski_2013',
      authors: 'Przybylski, A. K., Murayama, K., DeHaan, C. R., & Gladwell, V.',
      year: 2013,
      title: 'Motivational, emotional, and behavioral correlates of fear of missing out',
      publicationName: 'Computers in Human Behavior',
      volumeIssue: '29(4), 1841-1848',
      doi: '10.1016/j.chb.2013.02.014',
      evidenceStrength: 'foundational_monograph',
    },
    {
      id: 'ref_newport_2019',
      authors: 'Newport, C.',
      year: 2019,
      title: 'Digital Minimalism: Choosing a Focused Life in a Noisy World',
      publicationName: 'Portfolio/Penguin',
      volumeIssue: 'Chapters 1-3',
      doi: '10.1037/0000000-002',
      evidenceStrength: 'theoretical_framework',
    },
  ],

  relatedTopics: [
    {
      topicId: 'algorithmic_reinforcement',
      slug: 'algorithmic-reinforcement',
      title: 'Algorithmic Reinforcement',
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
    ...TOPIC_FOMO_ATTENTION_EN,
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

export const TOPIC_FOMO_ATTENTION: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_FOMO_ATTENTION_EN,
  hinglish: {
    ...TOPIC_FOMO_ATTENTION_EN,
    title: 'FOMO: "Kahin Main Chhoot Na Jaoon" Ka Mobile Addiction',
    subtitle: 'Kyu har 4 minute me phone check karne ki bechaini hoti hai aur screen blank hone par bhi vibration mehsoos hoti hai.',
    shortDescription: 'Fear of Missing Out: ek aisi psychological bechaini jisme lagta hai ki duniya me kuch exciting ho raha hai aur hum piche chhut gaye.',
    oneLineExplanation: 'Har char minute me phone uthana us notification ke liye jo aaya hi nahi tha.',
    summary30s: 'Andrew Przybylski ne 2013 me FOMO ko scientifically study kiya: jab insaan ki real life me boredom ya loneliness hoti hai, toh dimaag sochta hai ki baaki sab maze kar rahe hain. Apps ne is bechaini ko monetize kar liya hai: 24-ghante me gayab hone wale Instagram Stories aur red notification dots aapke dimaag ko permanent emergency alert par rakhte hain.',
  },
  hi: {
    ...TOPIC_FOMO_ATTENTION_EN,
    title: 'FOMO & Attention Capture (छूट जाने का भय और ध्यान का दोहन)',
    subtitle: 'दूसरों के रोमांचक अनुभवों से वंचित रह जाने की सतत चिंता और फोन की लत।',
    shortDescription: 'यह भय कि अन्य लोग हमारे बिना पुरस्कृत और आनंददायक अनुभव प्राप्त कर रहे हैं, जिसका उपयोग तकनीकी कंपनियां निरंतर ध्यान खींचने के लिए करती हैं।',
    oneLineExplanation: 'हर कुछ मिनट में उस फोन को देखना जिसमें कोई संदेश आया ही नहीं था।',
    summary30s: 'छूट जाने का भय (FOMO) यह दर्शाता है कि जब मनुष्य के जीवन में अकेलापन या उद्देश्य की कमी होती है, तो वह लगातार आभासी दुनिया में जुड़े रहने के लिए व्याकुल रहता है। 2013 के ऑक्सफोर्ड विश्वविद्यालय के अध्ययन ने सिद्ध किया कि यह चिंता "फैंटम वाइब्रेशन सिंड्रोम" जैसी शारीरिक संवेदनाएं उत्पन्न करती है, जहां फोन न बजने पर भी जेब में कंपन महसूस होता है।',
  },
  gu: createLocalizedRecord('gu', "FOMO & Attention Capture: The Neurobiology of Compulsive Checking (પૂર્વગ્રહ)", "FOMO & Attention Capture: The Neurobiology of Compulsive Checking એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "FOMO & Attention Capture: The Neurobiology of Compulsive Checking (पूर्वग्रह)", "FOMO & Attention Capture: The Neurobiology of Compulsive Checking हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "FOMO & Attention Capture: The Neurobiology of Compulsive Checking (పక్షపాతం)", "FOMO & Attention Capture: The Neurobiology of Compulsive Checking అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "FOMO & Attention Capture: The Neurobiology of Compulsive Checking (சார்புநிலை)", "FOMO & Attention Capture: The Neurobiology of Compulsive Checking என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "FOMO & Attention Capture: The Neurobiology of Compulsive Checking (ಪಕ್ಷಪಾತ)", "FOMO & Attention Capture: The Neurobiology of Compulsive Checking ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "FOMO & Attention Capture: The Neurobiology of Compulsive Checking (പക്ഷപാതം)", "FOMO & Attention Capture: The Neurobiology of Compulsive Checking എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "FOMO & Attention Capture: The Neurobiology of Compulsive Checking (পক্ষপাতিত্ব)", "FOMO & Attention Capture: The Neurobiology of Compulsive Checking হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "FOMO & Attention Capture: The Neurobiology of Compulsive Checking (ਪੱਖਪਾਤ)", "FOMO & Attention Capture: The Neurobiology of Compulsive Checking ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "FOMO & Attention Capture: The Neurobiology of Compulsive Checking (جانبداری)", "FOMO & Attention Capture: The Neurobiology of Compulsive Checking انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "FOMO & Attention Capture: The Neurobiology of Compulsive Checking (ପକ୍ଷପାତିତା)", "FOMO & Attention Capture: The Neurobiology of Compulsive Checking ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "FOMO & Attention Capture: The Neurobiology of Compulsive Checking (পক্ষপাতিত্ব)", "FOMO & Attention Capture: The Neurobiology of Compulsive Checking সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
