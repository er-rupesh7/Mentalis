import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Emotions & Regulation Track
 * Topic: Emotional Contagion: The Invisible Transmission of Mood
 * Category: Emotions & Regulation (emotions)
 * 
 * Academic Grounding:
 * - Hatfield, Cacioppo & Rapson (1993): Emotional contagion
 * - Barsade (2002): The ripple effect: Emotional contagion and its influence on group behavior
 * - Fowler & Christakis (2008): Dynamic spread of happiness in a large social network
 */

export const TOPIC_EMOTIONAL_CONTAGION_EN: MindTopicDetail = {
  id: 'emotional_contagion',
  categoryId: 'emotions',
  slug: 'emotional-contagion',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 4,
  viewCount: 6890,
  shareCount: 540,
  bookmarkCount: 1220,
  title: 'Emotional Contagion: The Invisible Transmission of Mood',
  subtitle: 'We automatically and subconsciously mirror the postures, facial expressions, and emotional states of people around us.',
  shortDescription: 'The psychological and physiological process by which a person or group influences the emotions and affective behavior of another through conscious or unconscious induction.',
  oneLineExplanation: 'Walking into a room in a cheerful mood and leaving thirty minutes later feeling anxious and drained.',

  summary30s: 'Emotional contagion is our nervous system’s wireless Bluetooth network: through micro-mirroring of facial muscles, vocal cadence, and postures, humans continuously catch the feelings of people around them. Anxious managers breed anxious engineering teams; charismatic calm leaders stabilize panicked organizations.',

  coreConcept: 'Systematized by Elaine Hatfield, John Cacioppo, and Richard Rapson in 1993, emotional contagion occurs via a two-step neurological sequence: primitive motor mimicry followed by afferent feedback. When you look at someone whose eyebrows are furrowed in irritation, your own facial muscles unconsciously execute micro-contractions (motor mimicry) within 20 milliseconds. These muscular movements send afferent signals back into your own brain, triggering the actual biological experience of irritation.',
  summary60s: 'Have you ever spent an afternoon with a chronic complainer and felt physically exhausted, irritable, and cynical by evening? You were not merely hearing their words; your nervous system was absorbing their physiological state. Sigal Barsade (2002) at Wharton demonstrated that inserting a single cheerful, optimistic confederate into a workgroup measurably improved team cooperation, lowered conflict, and boosted task performance. Conversely, inserting a single cynical, depressive confederate tanked the entire team’s creative output.',

  quickTakeaways: [
    'The 20-Millisecond Mirror: Your facial muscles subconsciously mirror others\' emotional expressions before you are consciously aware',
    'Afferent Feedback Loop: Changing your physical facial posture directly shifts your subjective neurochemical state',
    'Leader Amplification: Leaders, parents, and teachers have an outsized emotional transmission radius; their anxiety spreads three times faster than peers',
    'Psychological Armor Antidote: Recognize that the sudden knot in your stomach may not be your anxiety, but an emotion you caught from someone else',
  ],

  whyItHappens: 'Social bonding and rapid group coordination. For ancestral hominids, verbal communication was minimal. Rapid non-verbal transmission of alarm (a terrified facial expression triggering instant group flight) saved lives from ambush predators.',
  evolutionaryMechanism: 'Mothers needed to detect and soothe infant distress before language existed. Mirror-neuron systems enabled hyper-sensitive emotional synchrony, facilitating maternal bonding and tribal cohesion.',

  howItWorks: 'The transmission cascade: (1) Observation: Scanning another person\'s gaze, facial tension, and vocal pitch; (2) Automatic Mimicry: Mirror neurons execute involuntary micro-movements in your body; (3) Physiological Induction: Heart rate, respiration, and cortisol shift to match the observed state; (4) Emotional Convergence: Experiencing the transmitted mood as your own.',
  whereYouEncounterIt: 'Toxic open-office spaces, funeral gatherings, sports stadiums (euphoric victory chants), parent-child anxiety loops, and emergency room waiting areas.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'The Transmission of Emotional States',
    description: 'How an individual’s internal emotional climate infects the surrounding environment.',
    analogySideA: {
      label: 'The Calm Anchor Leader',
      detail: 'Speaks slowly, maintains steady eye contact, and relaxes shoulder tension. -> Team\'s collective heart rate drops; analytical problem solving is restored.',
    },
    analogySideB: {
      label: 'The High-Anxiety Manager',
      detail: 'Speaks rapidly, paces erratically, and exhibits micro-grimaces. -> Triggers sympathetic nervous system fight-or-flight across the entire office floor.',
    },
  },

  researchSummary: 'Sigal Barsade\'s 2002 Wharton study placed business students into salary-negotiation groups with a trained actor who displayed one of four emotional conditions: cheerful enthusiasm, serene warmth, hostile irritability, or depressed sluggishness. The actor\'s emotional tone infected every member of the group, profoundly altering group cohesion, fairness ratings, and financial negotiation outcomes.',
  limitationsAndControversies: 'Individuals vary in their "contagion susceptibility" (Hatfield et al., 1994). Highly empathic individuals with high sensory processing sensitivity catch emotions almost instantly, whereas individuals with strong cognitive boundaries or narcissistic traits are relatively immune to the emotional states of others.',
  commonMisconceptions: 'Common myth: "Emotional contagion only happens in intense face-to-face conversations." Reality: Massive digital studies (e.g., Kramer et al., 2014) demonstrate that emotional tone cascades across digital text and social media feeds without any physical presence.',

  howToRecognize: [
    'Feeling a sudden wave of tension or gloom after entering a room, before anyone has even spoken a word',
    'Realizing you are adopting the rapid, frantic breathing pace of a stressed family member or colleague',
    'Leaving a lunch date with a friend feeling depleted, resentful, and pessimistic about your own life',
    'Noticing that when you smile warmly and speak in a calm baritone, an agitated customer immediately relaxes their shoulders',
  ],

  scenarios: [
    {
      id: 'scen_cont_01',
      scenarioType: 'indian_context',
      title: 'The Production Outage Contagion in Bengaluru',
      vignette: 'At a logistics software firm in Bengaluru, the production server crashes during peak Diwali delivery hours. The VP of Engineering bursts into the war room red-faced, sweating, and slamming his laptop onto the conference table: "Everything is ruined! We are losing ₹50 lakh a minute! Fix this right now!" Within two minutes, the four senior engineers—normally calm debugging masters—begin shaking, making careless CLI syntax errors, and shouting at each other in panic.',
      breakdownAnalysis: 'The engineering team was infected by the VP\'s acute panic via emotional contagion. The VP\'s high-arousal fight-or-flight signaling flooded the engineers\' amygdalas with adrenaline, crashing their working memory and technical problem-solving ability.',
      recommendedAction: 'Apply emotional grounding and physical regulation: The lead architect should step forward, lower his vocal pitch, take a visible deep exhalation, and say: "Everyone pause for 10 seconds. Breathe out. We have restored this cluster three times before. Step 1 is checking database connection pools."',
    },
  ],

  examples: [
    {
      id: 'ex_cont_01',
      domain: 'relationships',
      displayOrder: 1,
      title: 'The Nervous Mother and the Flight Departure',
      description: 'A mother with severe flight anxiety grips her armrest and gasps at minor bumps. Her 4-year-old child, who has no cognitive understanding of aerodynamics, bursts into hysterical tears because his nervous system mirrors his mother\'s sheer terror.',
      takeaway: 'Children absorb parental nervous system states like emotional sponges.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_cont_01',
      scenarioContext: 'A senior executive notices that her customer support team has developed a cynical, hostile attitude toward clients over the past three months, leading to plummeting customer satisfaction scores. Upon investigation, she discovers that one senior support agent on the floor constantly mocks customers on internal Slack channels and groans aloud after every phone call.',
      question: 'Based on Sigal Barsade\'s research on emotional contagion in organizations, what is the primary driver of this team-wide cultural decline?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Emotional contagion: the senior agent\'s continuous negative vocalizations and cynical messages acted as an emotional virus that infected the affective baseline of the entire floor',
          explanation: 'Accurate: negative emotional contagion spreads rapidly through micro-expressions and complaints, normalizing cynicism.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'The support agents need faster computer keyboards to reduce typing fatigue',
          explanation: 'Hardware tools do not explain the affective spread of cynical interpersonal hostility.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Customers became objectively 500% more rude over the last three months',
          explanation: 'Customer baselines remain steady across large sample cohorts; internal team culture was contaminated.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'A single emotionally toxic individual can poison the psychological climate of an entire department.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Practice emotional hygiene: recognize when you are absorbing other people\'s panic or irritation, and step back to ground yourself.',
  psychologicalDefenses: [
    {
      title: 'The "Is This Mine?" Diagnostic Question',
      instruction: 'Whenever you experience a sudden shift into irritability, panic, or melancholy, pause and ask: "Was I feeling this 15 minutes ago? Did I catch this mood from the person I was just speaking with?"',
    },
    {
      title: 'Maintain Non-Complementary Behavior',
      instruction: 'When someone approaches you with frantic agitation, intentionally respond with the opposite physiological posture: lower your voice, slow your speech cadence, and relax your shoulders.',
    },
    {
      title: 'Curate Your Emotional Diet',
      instruction: 'Limit exposure to chronic drama creators and outrage influencers. Moods are contagious; choose who you allow into your nervous system\'s Bluetooth range.',
    },
  ],

  reflectionPrompt: 'Did you enter a room in a good mood and leave feeling stressed simply because a colleague was venting their anxiety?',

  references: [
    {
      id: 'ref_hatfield_1993',
      authors: 'Hatfield, E., Cacioppo, J. T., & Rapson, R. L.',
      year: 1993,
      title: 'Emotional contagion',
      publicationName: 'Current Directions in Psychological Science',
      volumeIssue: '2(3), 96-100',
      doi: '10.1111/1467-8721.ep10770953',
      evidenceStrength: 'foundational_monograph',
    },
    {
      id: 'ref_barsade_2002',
      authors: 'Barsade, S. G.',
      year: 2002,
      title: 'The ripple effect: Emotional contagion and its influence on group behavior',
      publicationName: 'Administrative Science Quarterly',
      volumeIssue: '47(4), 644-675',
      doi: '10.2307/3094912',
      evidenceStrength: 'empirical_study',
    },
  ],

  relatedTopics: [
    {
      topicId: 'emotional_regulation',
      slug: 'emotional-regulation',
      title: 'Emotional Regulation',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'affect_heuristic',
      slug: 'affect-heuristic',
      title: 'The Affect Heuristic',
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
    ...TOPIC_EMOTIONAL_CONTAGION_EN,
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

export const TOPIC_EMOTIONAL_CONTAGION: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_EMOTIONAL_CONTAGION_EN,
  hinglish: {
    ...TOPIC_EMOTIONAL_CONTAGION_EN,
    title: 'Emotional Contagion: Mood Ka Adrishya Virus',
    subtitle: 'Kyu kisi gusse ya pareshan insaan ke paas baithne se hamara mood bhi achanak kharab ho jata hai.',
    shortDescription: 'Ek aisi biological process jisme hum doosron ke chehre ke expressions, aawaz aur body language ko copy karke unke emotions ko khud me mehsoos karne lagte hain.',
    oneLineExplanation: 'Khush mood me kisi room me jana aur 30 minute baad sar dard aur chidchidahat le kar lautna.',
    summary30s: 'Elaine Hatfield ne 1993 me prove kiya ki human nervous system ek wireless Bluetooth ki tarah doosro ke emotions ko absorb karta hai. Agar office me ek manager panic karta hai, toh pure floor ke engineers ka heart rate badh jata hai. Agar aap kisi negative complainer ke sath time bitate hain, toh aapka dimaag unka cortisol aur stress catch kar leta hai.',
  },
  hi: {
    ...TOPIC_EMOTIONAL_CONTAGION_EN,
    title: 'Emotional Contagion (भावनात्मक संक्रामकता)',
    subtitle: 'दूसरों की शारीरिक भाषा और मनोदशा का हमारे तंत्रिका तंत्र द्वारा स्वचालित अवशोषण।',
    shortDescription: 'वह मनोवैज्ञानिक और जैविक प्रक्रिया जिसके माध्यम से एक व्यक्ति की भावनाएं और तनाव अनजाने में दूसरे व्यक्ति में स्थानांतरित हो जाते हैं।',
    oneLineExplanation: 'किसी तनावग्रस्त व्यक्ति के संपर्क में आते ही स्वयं भी अशांत महसूस करना।',
    summary30s: 'भावनात्मक संक्रामकता (Emotional Contagion) के अनुसार मानव मस्तिष्क दूसरों के चेहरे की सूक्ष्म मांसपेशियों और आवाज़ के उतार-चढ़ाव की नकल करके 20 मिलीसेकंड के भीतर उनकी भावनात्मक स्थिति को आत्मसात कर लेता है। सिगल बारसेड के व्हार्टन स्कूल के प्रयोगों ने सिद्ध किया कि एक अकेला नकारात्मक व्यक्ति पूरी टीम की उत्पादकता को नष्ट कर सकता है।',
  },
  gu: createLocalizedRecord('gu', "Emotional Contagion: The Invisible Transmission of Mood (પૂર્વગ્રહ)", "Emotional Contagion: The Invisible Transmission of Mood એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "Emotional Contagion: The Invisible Transmission of Mood (पूर्वग्रह)", "Emotional Contagion: The Invisible Transmission of Mood हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "Emotional Contagion: The Invisible Transmission of Mood (పక్షపాతం)", "Emotional Contagion: The Invisible Transmission of Mood అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "Emotional Contagion: The Invisible Transmission of Mood (சார்புநிலை)", "Emotional Contagion: The Invisible Transmission of Mood என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "Emotional Contagion: The Invisible Transmission of Mood (ಪಕ್ಷಪಾತ)", "Emotional Contagion: The Invisible Transmission of Mood ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "Emotional Contagion: The Invisible Transmission of Mood (പക്ഷപാതം)", "Emotional Contagion: The Invisible Transmission of Mood എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "Emotional Contagion: The Invisible Transmission of Mood (পক্ষপাতিত্ব)", "Emotional Contagion: The Invisible Transmission of Mood হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "Emotional Contagion: The Invisible Transmission of Mood (ਪੱਖਪਾਤ)", "Emotional Contagion: The Invisible Transmission of Mood ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "Emotional Contagion: The Invisible Transmission of Mood (جانبداری)", "Emotional Contagion: The Invisible Transmission of Mood انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "Emotional Contagion: The Invisible Transmission of Mood (ପକ୍ଷପାତିତା)", "Emotional Contagion: The Invisible Transmission of Mood ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "Emotional Contagion: The Invisible Transmission of Mood (পক্ষপাতিত্ব)", "Emotional Contagion: The Invisible Transmission of Mood সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
