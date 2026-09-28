import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_DOOMSCROLLING_CYCLE_EN: MindTopicDetail = {
  id: 'doomscrolling_cycle',
  categoryId: 'social_media_tech',
  slug: 'doomscrolling-cycle',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 5,
  viewCount: 3400,
  shareCount: 255,
  bookmarkCount: 545,
  title: "The Doomscrolling Loop: Negativity Bias in the Algorithmic Era",
  subtitle: "Why the brain obsesses over catastrophic news feeds and how infinite scrolling traps attention.",
  shortDescription: "The compulsive habit of continuously scrolling through distressing, negative, and threatening news on social media despite feeling anxious and exhausted.",
  oneLineExplanation: "Searching for certainty in bad news, but only feeding your nervous system panic.",

  summary30s: "Coined during the 2020 pandemic and studied extensively by clinical psychologists, doomscrolling is driven by an ancient survival instinct: the brain seeks information to gain a sense of control during threats. However, algorithmic feeds curate an endless stream of crises, creating a toxic loop of hyperarousal and despair.",
  coreConcept: "Doomscrolling hijacks the evolutionary negativity bias. Ancestral brains treated negative information as a matter of immediate survival. On modern platforms, algorithmic recommendation models exploit this bias by prioritizing outrage and disaster content, tricking your amygdala into believing you are constantly surrounded by lethal threats.",
  summary60s: "Research shows doomscrolling triggers chronic sympathetic nervous system activation, flooding the body with cortisol. While users believe scrolling makes them \"informed\", cognitive testing shows it severely impairs working memory, sleep architecture, and rational risk assessment. The antidote is setting physical cessation boundaries.",
  quickTakeaways: ["Doomscrolling is an evolutionary survival reflex hijacked by engagement algorithms","Consuming negative news does not prepare you for danger; it paralyzes your agency","The brain treats digital headlines as local, immediate physical threats","Replacing infinite feeds with deliberate, bounded news consumption restores mental calm"],

  whyItHappens: "Negativity bias and the illusion of control: the brain subconsciously believes that gathering more disaster data will protect it from unforeseen calamity.",
  evolutionaryMechanism: "Early humans who hyper-focused on predator tracks or famine warnings survived; those who ignored negative cues perished.",

  howItWorks: "Stress or boredom -> Open app -> Negative headline encountered -> Amygdala feels threat -> Brain demands more data to feel safe -> Infinite scroll provides endless threats -> Cortisol spikes -> Insomnia and dread.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "The Illusion of Preparation vs. Algorithmic Paralysis",
    description: "How compulsive news consumption masquerades as awareness while eroding well-being.",
    analogySideA: {
      label: "Informed Awareness (Healthy)",
      detail: "Reads a 15-minute curated morning briefing, understands key geopolitical facts, takes constructive action.",
    },
    analogySideB: {
      label: "Doomscrolling Loop (Toxic)",
      detail: "Scrolls disaster threads for 90 minutes in bed at midnight; heart rate elevated, sleep destroyed.",
    },
  },

  researchSummary: "Sharma et al. (2022, Technology, Mind, and Behavior) and Buchanan et al. (2021, PLOS ONE) proved doomscrolling directly predicts elevated secondary traumatic stress, depressive symptoms, and cognitive fatigue.",
  references: [
    {
      id: 'ref_doomscrolling_cycle_01',
      title: "The Dark at the End of the Tunnel: Doomscrolling and Mental Health",
      citation: "Sharma, B., et al. (2022). Technology, Mind, and Behavior, 3(1).",
      authors: "Sharma, B., Lee, S. S., & Johnson, B. K.",
      publicationYear: 2022,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1037/tmb0000059",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_doomscrolling_cycle_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The 1 AM Twitter Spiral in Noida",
      narrativeContext: "Vikrant, a product manager in Noida, woke up at 1 AM to check a breaking geopolitical alert. Two hours later, he was 400 tweets deep into nuclear war commentary, climate collapse predictions, and layoffs, feeling trembling anxiety and a racing pulse.",
      biasInAction: "Vikrant fell into the doomscrolling trap: his brain sought cognitive reassurance, but the algorithm fed continuous threat stimuli.",
      optimalResponse: "Place the phone in another room overnight. When news curiosity strikes, check a trusted factual portal once at noon, not in the dark before sleep.",
      reflectionPrompt: "How often do you close a news app feeling genuinely empowered and calm versus feeling anxious, heavy, and drained?",
    },
  ],

  examples: [
    {
      id: 'ex_doomscrolling_cycle_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The 1 AM Twitter Spiral in Noida",
      description: "Vikrant, a product manager in Noida, woke up at 1 AM to check a breaking geopolitical alert. Two hours later, he was 400 tweets deep into nuclear war ...",
      takeaway: "Doomscrolling is an evolutionary survival reflex hijacked by engagement algorithms",
    },
  ],

  howToRecognize: "Losing track of time in bed while reading catastrophic headlines, feeling a tight chest, and an inability to put the phone down despite feeling exhausted.",
  whereYouEncounterIt: "Late-night phone use, election cycles, pandemic outbreaks, and geopolitical crises.",
  commonMisconceptions: "Myth: \"Doomscrolling keeps me informed and prepared for the real world.\" Fact: It skews your worldview toward extreme statistical outliers and induces learned helplessness.",
  limitationsAndControversies: "Staying aware of local emergencies (earthquakes, curfews) is necessary; the pathology is the compulsive, passive consumption of global unresolvable dread.",

  howToRespond: "The Digital Sunset: Charge your phone outside the bedroom and establish a hard rule of no news consumption after 9 PM.",
  psychologicalDefenses: [{"title":"The 15-Minute News Bounding","instruction":"Consume news only once a day from text-based editorial sources for 15 minutes, never from algorithmic endless-scroll feeds."},{"title":"Physical Phone Quarantine","instruction":"Buy an analog alarm clock and make the bedroom an absolute screen-free zone to eliminate midnight threat spirals."}],

  practiceQuestions: [
    {
      id: 'pq_doomscrolling_cycle_01',
      difficulty: 'beginner',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "You find yourself lying in bed at midnight feeling anxious while reading about a distant natural catastrophe for the 45th minute. What is the most psychologically sound intervention?",
      scenarioText: "Your chest feels tight and you tell yourself: \"Just one more tweet to make sure things are under control.\"",
      explanation: "The belief that reading more will provide reassurance is the cognitive trap of doomscrolling. Physical disconnection is required to break the loop.",
      antidoteAdvice: "Physically place the phone across the room, engage in slow diaphragmatic breathing, and ground your attention in your immediate physical environment.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Keep reading until you find an optimistic tweet that allows you to relax.",
          text: "Keep reading until you find an optimistic tweet that allows you to relax.",
          feedbackText: "Incorrect. The algorithm is engineered to keep showing outrage and disaster.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Put the phone face down in another room, take 5 slow belly breaths, and remind yourself: \"I am safe in this room right now.\"",
          text: "Put the phone face down in another room, take 5 slow belly breaths, and remind yourself: \"I am safe in this room right now.\"",
          feedbackText: "Correct! This interrupts the neurochemical threat loop and re-engages the parasympathetic system.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Comment on 10 political posts to vent your nervous energy.",
          text: "Comment on 10 political posts to vent your nervous energy.",
          feedbackText: "Incorrect. Active commenting escalates dopamine and adrenaline arousal.",
        }
      ],
    },
  ],

  reflectionPrompt: "What is one specific positive action or hobby that could replace your late-night scrolling habit?",
  tags: ['Mentalab Mind', 'social_media_tech'],
  relatedTopics: [],
  seoTitle: `${"The Doomscrolling Loop: Negativity Bias in the Algorithmic Era"} | Mentalab Mind`,
  seoDescription: "The compulsive habit of continuously scrolling through distressing, negative, and threatening news on social media despite feeling anxious and exhausted.",
  canonicalUrl: '/mind/social-media-tech/doomscrolling-cycle',
  ogImageUrl: '/images/mind/doomscrolling-cycle.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Research shows doomscrolling triggers chronic sympathetic nervous system activation, flooding the body with cortisol. While users believe scrolling makes them \"informed\", cognitive testing shows it severely impairs working memory, sleep architecture, and rational risk assessment. The antidote is setting physical cessation boundaries.",
};

export const TOPIC_DOOMSCROLLING_CYCLE_HINGLISH: MindTopicDetail = {
  ...TOPIC_DOOMSCROLLING_CYCLE_EN,
  title: "The Doomscrolling Loop: Buri Khabron Ka Nasha",
  subtitle: "Kyu hamara dimaag aadhi raat ko buri khabrein scroll karta rehta hai jabki andar se ghabrahat hoti hai.",
  shortDescription: "Compulsive negative news scrolling: Kaise social media algorithms hamari darr ki natural instinct ko trap karte hain.",
  oneLineExplanation: "Khatre ki khabrein padh kar sukoon dhoondna, par andar anxiety ka toofan khada karna.",
  summary30s: "Jab hum pareshan hote hain, to dimaag darr se bachne ke liye information dhoondta hai. Lekin Twitter aur Instagram ke algorithms sirf aag lagane wali aur disaster wali khabrein dikhate hain. Result: 2 ghante scroll karne ke baad insaan helpless aur depressed feel karta hai.",
  coreConcept: "Hamare purvaj jungle me sher ki aahat par focus karte the taaki bach sakein (Negativity Bias). Social media apps isi biological darr ka fayda uthati hain. Unhe pata hai ki bad news par log scroll karna band nahi karte.",
  summary60s: "Research dikhati hai ki aadhi raat ko buri khabrein padhne se cortisol spike hota hai aur neend ki quality khatam ho jati hai. Aapko lagta hai ki aap \"aware\" ho rahe hain, par actually aapka dimaag panic mode me freeze ho raha hai. Iska ek hi ilaaj hai: Phone ko bedroom se bahar nikalna.",
  quickTakeaways: ["Doomscrolling aapko smart nahi banata, balki aapko helpless aur anxious feel karata hai","Algorithms darr aur gusse par engagement kamate hain, unhe aapki mental peace se matlab nahi","Aadhi raat ko global problems solve karne ki koshish dimaag ka sabse bada trap hai","News din me sirf 15 minute padhein, text format me, endless scroll par nahi"],
  howItWorks: "Boredom hua -> App kholi -> Darr wali headline aayi -> Amygdala bola \"aur jaano\" -> Infinite scroll chalta raha -> Raat ke 2 baj gaye -> Anxiety aur insomnia hua.",
  howToRespond: "Digital Sunset apnayein: Raat 9 baje ke baad news band. Phone ko drawing room me charge karein aur ek ₹200 ki analog ghadi khareed lein.",
  practiceQuestions: [
    {
      ...TOPIC_DOOMSCROLLING_CYCLE_EN.practiceQuestions[0],
      prompt: "Aap bistar par lete huye 1 ghante se economic recession aur war ki tweets padh rahe hain aur dil tezi se dhadak raha hai. Sahi step kya hoga?",
      explanation: "Phone band karke physical environment me wapas aana nervous system ko reset karne ka ek-matra tareeqa hai.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Tab tak padhte rehna jab tak koi khushi wali tweet na mil jaye.",
          text: "Tab tak padhte rehna jab tak koi khushi wali tweet na mil jaye.",
          feedbackText: "Galat. Algorithm aisi feed me negative content hi dikhayega.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Phone ko doosre kamre me rakh aana, 5 gehri saans lena aur so jana.",
          text: "Phone ko doosre kamre me rakh aana, 5 gehri saans lena aur so jana.",
          feedbackText: "Sahi! Yeh doomscrolling cycle ko break karta hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Comments me logon se ladna shuru kar dena.",
          text: "Comments me logon se ladna shuru kar dena.",
          feedbackText: "Galat. Isse adrenaline aur badhega.",
        }
      ],
    },
  ],
  seoTitle: `${"The Doomscrolling Loop: Buri Khabron Ka Nasha"} | Mentalab Mind`,
  seoDescription: "Compulsive negative news scrolling: Kaise social media algorithms hamari darr ki natural instinct ko trap karte hain.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_DOOMSCROLLING_CYCLE_EN,
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

export const TOPIC_DOOMSCROLLING_CYCLE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_DOOMSCROLLING_CYCLE_EN,
  hinglish: TOPIC_DOOMSCROLLING_CYCLE_HINGLISH,
  hi: createLocalizedRecord('hi', "डूमस्क्रॉलिंग चक्र (Doomscrolling Loop)", "सोशल मीडिया पर नकारात्मक और विनाशकारी समाचारों को लगातार स्क्रॉल करने की बाध्यकारी लत और उसका मानसिक स्वास्थ्य पर प्रभाव।", ["डूमस्क्रॉलिंग मस्तिष्क के नकारात्मक पूर्वाग्रह का शोषण करती है","बुरी खबरें पढ़ने से चिंता और अनिद्रा बढ़ती है","डिजिटल सीमाएं और स्क्रीन-मुक्त शयनकक्ष आवश्यक हैं"]),
  gu: createLocalizedRecord('gu', "ડૂમસ્ક્રોલિંગ લૂપ (નકારાત્મક સમાચારોની લત)", "સોશિયલ મીડિયા પર સતત નકારાત્મક સમાચારો જોવાની ટેવ અને માનસિક શાંતિ પર તેની અસર.", ["નકારાત્મકતાથી દૂર રહો","રાત્રે ફોનનો ઉપયોગ ટાળો","મર્યાદિત સમાચાર વાંચો"]),
  mr: createLocalizedRecord('mr', "डूमस्क्रोलिंग लूप (नकारात्मक बातम्यांचे व्यसन)", "सोशल मीडियावर सतत संकट आणि भीतिदायक बातम्या वाचत राहण्याची घातक मानसिक सवय.", ["भीतीदायक बातम्यांचे व्यसन टाळा","रात्री मोबाईलचा वापर थांबवा","सकारात्मक गोष्टींवर लक्ष द्या"]),
  te: createLocalizedRecord('te', "డూమ్‌స్క్రోలింగ్ లూప్ (ప్రతికూల వార్తల వ్యసనం)", "సోషల్ మీడియాలో నిరంతరం ఆందోళనకరమైన వార్తలను చూస్తూ గడిపే మానసిక అలవాటు.", ["ప్రతికూల వార్తలను పరిమితం చేయండి","రాత్రి వేళ ఫోన్ పక్కన పెట్టండి","మానసిక ప్రశాంతతకు ప్రాధాన్యత ఇవ్వండి"]),
  ta: createLocalizedRecord('ta', "டூம்ஸ்க்ரோலிங் சுழற்சி (எதிர்மறை செய்தி அடிமைத்தனம்)", "சமூக வலைத்தளங்களில் தொடர்ந்து பதற்றமூட்டும் செய்திகளை பார்த்துக்கொண்டே இருக்கும் உளவியல் பழக்கம்.", ["எதிர்மறை செய்திகளை தவிருங்கள்","இரவில் போன் பார்க்காதீர்கள்","மன அமைதியை பாதுகாக்கவும்"]),
  kn: createLocalizedRecord('kn', "ಡೂಮ್‌ಸ್ಕ್ರೋಲಿಂಗ್ ಲೂಪ್ (ನಕಾರಾತ್ಮಕ ಸುದ್ದಿಗಳ ಚಟ)", "ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮಗಳಲ್ಲಿ ನಿರಂತರವಾಗಿ ಭಯಾನಕ ಮತ್ತು ಆತಂಕಕಾರಿ ಸುದ್ದಿಗಳನ್ನು ಓದುವ ಮಾನಸಿಕ ದಾಸ್ಯ.", ["ನಕಾರಾತ್ಮಕತೆಯನ್ನು ನಿಯಂತ್ರಿಸಿ","ರಾತ್ರಿ ಫೋನ್ ಮುಟ್ಟಬೇಡಿ","ಮನಸ್ಸಿನ ಶಾಂತಿಗೆ ಆದ್ಯತೆ ನೀಡಿ"]),
  ml: createLocalizedRecord('ml', "ഡൂംസ്ക്രോളിംഗ് ലൂപ്പ് (നെഗറ്റീവ് വാർത്താ ആസക്തി)", "സോഷ്യൽ മീഡിയയിൽ നിരന്തരം ഭയപ്പെടുത്തുന്ന വാർത്തകൾ വായിച്ചു കൂട്ടുന്ന അപകടകരമായ മാനസികാവസ്ഥ.", ["നെഗറ്റീവ് വാർത്തകൾ കുറയ്ക്കുക","രാത്രി ഫോൺ മാറ്റിവെക്കുക","മാനസികാരോഗ്യം സംരക്ഷിക്കുക"]),
  bn: createLocalizedRecord('bn', "ডুমস্ক্রোলিং লুপ (নেতিবাচক সংবাদের আসক্তি)", "সোশ্যাল মিডিয়ায় অনবরত বিপর্যয় ও আতঙ্কের খবর দেখার ক্ষতিকর মানসিক অভ্যাস।", ["নেতিবাচক খবর এড়িয়ে চলুন","রাতে ফোন দূরে রাখুন","সীমিত তথ্য গ্রহণ করুন"]),
  pa: createLocalizedRecord('pa', "ਡੂਮਸਕ੍ਰੋਲਿੰਗ ਲੂਪ (ਮਾੜੀਆਂ ਖ਼ਬਰਾਂ ਦੀ ਲਤ)", "ਸੋਸ਼ਲ ਮੀਡੀਆ ਤੇ ਲਗਾਤਾਰ ਡਰਾਉਣੀਆਂ ਅਤੇ ਮਾੜੀਆਂ ਖ਼ਬਰਾਂ ਪੜ੍ਹਦੇ ਰਹਿਣ ਦੀ ਮਾਨਸਿਕ ਆਦਤ।", ["ਮਾੜੀਆਂ ਖ਼ਬਰਾਂ ਤੋਂ ਬਚੋ","ਰਾਤ ਨੂੰ ਫ਼ੋਨ ਦੂਰ ਰੱਖੋ","ਮਨ ਦੀ ਸ਼ਾਂਤੀ ਬਣਾਈ ਰੱਖੋ"]),
  ur: createLocalizedRecord('ur', "ڈوم اسکرولنگ کا چکر (منفی خبروں کی لت)", "سوشل میڈیا پر مسلسل خوفناک اور مایوس کن خبریں دیکھتے رہنے کی نفسیاتی عادت۔", ["منفی خبروں سے پرہیز کریں","رات کو موبائل دور رکھیں","ذہنی سکون کو ترجیح دیں"]),
  or: createLocalizedRecord('or', "ଡୁମ୍‌ସ୍କ୍ରୋଲିଂ ଲୁପ୍ (ନକାରାତ୍ମକ ଖବରର ନିଶା)", "ସୋସିଆଲ ମିଡ଼ିଆରେ ନିରନ୍ତର ଭୟାନକ ଓ ଆତଙ୍କଜନକ ଖବର ଦେଖିବାର ବାଧ୍ୟତାମୂଳକ ଅଭ୍ୟାସ।", ["ନକାରାତ୍ମକ ଖବର ସୀମିତ କରନ୍ତୁ","ରାତିରେ ଫୋନ୍ ବନ୍ଦ ରଖନ୍ତୁ","ମାନସିକ ଶାନ୍ତି ରକ୍ଷା କରନ୍ତୁ"]),
  as: createLocalizedRecord('as', "ডুমস্ক্ৰ’লিং লুপ (নেতিবাচক বাতৰিৰ নিচা)", "ছচিয়েল মিডিয়াত অহৰহ ভয়ংকৰ আৰু হতাশাজনক বাতৰি পঢ়ি থকাৰ ক্ষতিকাৰক অভ্যাস।", ["নেতিবাচক বাতৰিৰ পৰা আঁতৰি থাকক","ৰাতি ফোন ব্যৱহাৰ নকৰিব","মানসিক স্বাস্থ্যৰ যত্ন লওক"]),
};
