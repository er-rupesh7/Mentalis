import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_ONLINE_DISINHIBITION_EFFECT_EN: MindTopicDetail = {
  id: 'online_disinhibition_effect',
  categoryId: 'social_media_tech',
  slug: 'online-disinhibition-effect',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 9,
  viewCount: 3880,
  shareCount: 315,
  bookmarkCount: 645,
  title: "The Online Disinhibition Effect: Toxic and Benign Cyber-Behavior",
  subtitle: "John Suler’s landmark cyberpsychology framework on why people say things online they would never say to someone's face.",
  shortDescription: "The psychological loosening of social inhibitions, behavioural constraints, and empathy when communicating through digital screens and internet channels.",
  oneLineExplanation: "Why polite, civilized humans become ruthless monsters or deeply vulnerable in online comment sections.",

  summary30s: "Coined by psychologist John Suler in 2004, the Online Disinhibition Effect explains how cyberspace dismantles normal psychological boundaries. Suler distinguished between toxic disinhibition (rude rants, cyberbullying, hate speech) and benign disinhibition (sharing deep personal trauma, unusual generosity, emotional honesty).",
  coreConcept: "Suler identified six specific psychological drivers of online disinhibition: Dissociative Anonymity (\"You don’t know who I am\"), Invisibility (\"You can’t see my face\"), Asynchronicity (\"I don’t have to deal with your immediate reaction\"), Solipsistic Introjection (\"It’s all in my head\"), Dissociative Imagination (\"It’s just a game\"), and Minimizing Authority (\"There are no real bosses here\").",
  summary60s: "In face-to-face dialogue, non-verbal feedback (facial micro-expressions, tears, posture) triggers our mirror-neuron empathy circuits, physically curbing our cruelty. Behind a glowing screen, the absence of real-time somatic feedback depersonalizes the other human into a cartoon villain, unleashing aggressive impulses that the prefrontal cortex would normally restrain.",
  quickTakeaways: ["Online anonymity and invisibility short-circuit the brain's empathy and inhibition circuits","Asynchronous delays disconnect people from the visceral emotional pain their words inflict","Benign disinhibition can facilitate deep therapeutic vulnerability and peer support","Toxic disinhibition is fueled by viewing internet platforms as a fictional game with no consequences"],

  whyItHappens: "Empathy requires real-time perceptual feedback; text-based digital screens strip away facial, vocal, and postural humanizing signals.",
  evolutionaryMechanism: "Humans evolved to regulate aggression through visible submissive displays, crying, and vocal tone; digital text completely deletes these pacification signals.",

  howItWorks: "Individual reads opposing view -> Anonymity/Invisibility active -> Mirror neurons receive zero facial distress cues -> Moral brakes disengage -> Vitriolic comment launched -> Real-world emotional devastation caused.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "In-Person Empathic Regulation vs. Digital Disinhibition",
    description: "How physical presence anchors prosocial behavior compared to digital detachment.",
    analogySideA: {
      label: "Face-to-Face Interaction",
      detail: "Sees the other person's flinch and tearful eyes; mirror neurons fire instantly; tone softens naturally.",
    },
    analogySideB: {
      label: "Anonymous Comment Box",
      detail: "Sees only pixels on a screen; perceives target as an abstract avatar; unleashes cruel vitriol without remorse.",
    },
  },

  researchSummary: "Suler (2004, CyberPsychology & Behavior) and Lapidot-Lefler & Barak (2012, Computers in Human Behavior) proved that lack of eye contact is the single most powerful contributor to online flaming and hostility.",
  references: [
    {
      id: 'ref_online_disinhibition_effect_01',
      title: "The Online Disinhibition Effect",
      citation: "Suler, J. (2004). CyberPsychology & Behavior, 7(3), 321–326.",
      authors: "Suler, J.",
      publicationYear: 2004,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1089/1094931041291295",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_online_disinhibition_effect_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The LinkedIn Trolling Scandal in Gurugram",
      narrativeContext: "Manish, a quiet, mild-mannered accountant in Gurugram who never raised his voice at home, created an anonymous Twitter handle. Over 6 months, he posted hundreds of vicious, threatening comments attacking female journalists, feeling an exhilarating rush of power and zero guilt until his identity was revealed.",
      biasInAction: "Manish suffered from extreme toxic online disinhibition: dissociative anonymity and invisibility detached his moral identity from his digital avatar.",
      optimalResponse: "Remember that an avatar is a living human being with a nervous system. Never type anything online that you wouldn't look someone in the eye and say in a crowded room.",
      reflectionPrompt: "Have you ever written a comment or message in an argument online that made you feel slightly ashamed when you re-read it the next morning?",
    },
  ],

  examples: [
    {
      id: 'ex_online_disinhibition_effect_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The LinkedIn Trolling Scandal in Gurugram",
      description: "Manish, a quiet, mild-mannered accountant in Gurugram who never raised his voice at home, created an anonymous Twitter handle. Over 6 months, he poste...",
      takeaway: "Online anonymity and invisibility short-circuit the brain's empathy and inhibition circuits",
    },
  ],

  howToRecognize: "Feeling a sudden reckless urge to type aggressive, cruel, or uncharacteristically vulnerable things while looking at a screen that you would hesitate to say in person.",
  whereYouEncounterIt: "Reddit threads, YouTube comments, anonymous work feedback portals (Blind), and multiplayer gaming chats.",
  commonMisconceptions: "Myth: \"Only bad, sadistic people become toxic online.\" Fact: The digital architecture itself structurally disinhibits ordinary, empathetic people by removing humanizing feedback loops.",
  limitationsAndControversies: "Benign disinhibition is heavily leveraged in tele-mental health and anonymous recovery groups (AA, trauma forums), enabling people to speak truth without social stigma.",

  howToRespond: "The Eye Contact Visualization Drill: Before pressing \"send\" or \"post\" on an angry critique, visualize yourself standing 1 foot away from the person, looking them in the eye, and saying the words aloud.",
  psychologicalDefenses: [{"title":"The Humanizing Avatar Overlay","instruction":"Force yourself to remember: behind every handle is an actual person who experiences heartbreak, stress, and family obligations."},{"title":"The 24-Hour Draft Rule","instruction":"Never post an angry rebuttal immediately; save it in your notes app for 24 hours. 95% of the time, you will delete it upon re-reading."}],

  practiceQuestions: [
    {
      id: 'pq_online_disinhibition_effect_01',
      difficulty: 'intermediate',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A user writes a vicious, insulting personal attack on an anonymous forum, but is known by all their neighbors as a gentle, polite community volunteer. What explains this discrepancy?",
      scenarioText: "The user experiences no guilt when typing online, but feels immediate empathy when meeting people in physical distress.",
      explanation: "The Online Disinhibition Effect removes visual eye contact and real-time social feedback, preventing mirror neurons from activating moral constraints.",
      antidoteAdvice: "Reinstate psychological accountability by deliberately humanizing the recipient before typing.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "The user has multiple personality disorder (Dissociative Identity Disorder).",
          text: "The user has multiple personality disorder (Dissociative Identity Disorder).",
          feedbackText: "Incorrect. This is a common sociological disinhibition phenomenon, not a dissociative psychiatric pathology.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Anonymity, invisibility, and lack of eye contact structurally disengage the brain’s social inhibition and empathy circuits.",
          text: "Anonymity, invisibility, and lack of eye contact structurally disengage the brain’s social inhibition and empathy circuits.",
          feedbackText: "Correct! This is Suler's foundational Online Disinhibition framework.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "The user was possessed by an external computer virus.",
          text: "The user was possessed by an external computer virus.",
          feedbackText: "Incorrect. Unscientific nonsense.",
        }
      ],
    },
  ],

  reflectionPrompt: "How would your online posting style change if your real name, photograph, and workplace were displayed next to every comment you made?",
  tags: ['Mentalab Mind', 'social_media_tech'],
  relatedTopics: [],
  seoTitle: `${"The Online Disinhibition Effect: Toxic and Benign Cyber-Behavior"} | Mentalab Mind`,
  seoDescription: "The psychological loosening of social inhibitions, behavioural constraints, and empathy when communicating through digital screens and internet channels.",
  canonicalUrl: '/mind/social-media-tech/online-disinhibition-effect',
  ogImageUrl: '/images/mind/online-disinhibition-effect.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "In face-to-face dialogue, non-verbal feedback (facial micro-expressions, tears, posture) triggers our mirror-neuron empathy circuits, physically curbing our cruelty. Behind a glowing screen, the absence of real-time somatic feedback depersonalizes the other human into a cartoon villain, unleashing aggressive impulses that the prefrontal cortex would normally restrain.",
};

export const TOPIC_ONLINE_DISINHIBITION_EFFECT_HINGLISH: MindTopicDetail = {
  ...TOPIC_ONLINE_DISINHIBITION_EFFECT_EN,
  title: "Online Disinhibition Effect: Screen Ke Peeche Ka Asli Chehra",
  subtitle: "Kyu shareef se shareef insaan bhi Twitter ya YouTube comments me ghatiya baatein likhne lagta hai.",
  shortDescription: "John Suler ki cyberpsychology research: Screen ke peeche aate hi insaan ka moral control aur sharam kaise gayab ho jati hai.",
  oneLineExplanation: "Jo baat samne bolne ki aukaat nahi hoti, wo log anonymous account se likh dete hain.",
  summary30s: "2004 me psychologist John Suler ne dekha ki internet par log do tarah se behave karte hain: Ya to wo achanak bohot zaalim aur gaali-galoch wale ban jate hain (Toxic Disinhibition), ya fir wo achanak bohot zyada emotional aur sach bolne lagte hain (Benign Disinhibition).",
  coreConcept: "Iske 6 reasons hain: Anonymity (\"Mujhe koi nahi janta\"), Invisibility (\"Koi mujhe dekh nahi sakta\"), aur Asynchronicity (\"Samne wale ka instant chehra nahi dikhta\"). Real life me samne wale ka dukhi chehra dekh kar hum shant ho jate hain, screen par wo chehra nahi hota to empathy mar jati hai.",
  summary60s: "Agar aap road par kisi se milte hain to aap tameez se baat karte hain kyuki mirror neurons active rehte hain. Par internet par dusra insaan sirf ek \"DP\" aur \"Text\" hota hai. Dimaag use insaan nahi balki game ka villain samajhta hai. Isliye troll karna asaan lagta hai.",
  quickTakeaways: ["Screen ke peeche se bolna asaan hota hai kyuki dimaag ko samne wale ka dard nahi dikhta","Anonymity insaan ke andar ke sabse kharab janwar ko bahar nikaal sakti hai","Gusse me likha comment 24 ghante draft me rakho, subah khud hi delete karne ka mann karega","Yaad rakho: Har handle ke peeche ek real insaan hai jisko chot lagti hai"],
  howItWorks: "Post dekha -> Gussa aaya -> Anonymous account khola -> Samne wale ka dard nahi dikha -> Ganda comment likha -> Real insaan ko mental trauma hua.",
  howToRespond: "Eye Contact Test: Koi bhi comment post karne se pehle socho: \"Kya main yahi line iske muh par sabke samne bol sakta hu?\" Agar nahi, to delete kar do.",
  practiceQuestions: [
    {
      ...TOPIC_ONLINE_DISINHIBITION_EFFECT_EN.practiceQuestions[0],
      prompt: "Ek seedha-saadha ladka anonymous handle se logo ko gaaliyan deta hai, par real life me kisi par chilla bhi nahi sakta. Kyu?",
      explanation: "Online anonymity aur face-to-face eye contact ka na hona dimaag ki empathy circuits ko switch off kar deta hai.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Uske andar bhoot aa gaya hai.",
          text: "Uske andar bhoot aa gaya hai.",
          feedbackText: "Galat. Yeh cyberpsychology ka well-known dynamic hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Online disinhibition ki wajah se screen ke peeche sharam aur empathy khatam ho jati hai.",
          text: "Online disinhibition ki wajah se screen ke peeche sharam aur empathy khatam ho jati hai.",
          feedbackText: "Sahi! Yeh Suler ka Online Disinhibition Effect hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Uska keyboard automatically gaaliyan type karta hai.",
          text: "Uska keyboard automatically gaaliyan type karta hai.",
          feedbackText: "Galat. Yeh childish excuse hai.",
        }
      ],
    },
  ],
  seoTitle: `${"Online Disinhibition Effect: Screen Ke Peeche Ka Asli Chehra"} | Mentalab Mind`,
  seoDescription: "John Suler ki cyberpsychology research: Screen ke peeche aate hi insaan ka moral control aur sharam kaise gayab ho jati hai.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_ONLINE_DISINHIBITION_EFFECT_EN,
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

export const TOPIC_ONLINE_DISINHIBITION_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_ONLINE_DISINHIBITION_EFFECT_EN,
  hinglish: TOPIC_ONLINE_DISINHIBITION_EFFECT_HINGLISH,
  hi: createLocalizedRecord('hi', "ऑनलाइन अनियंत्रण प्रभाव (Online Disinhibition)", "डिजिटल स्क्रीन और गुमनामी के पीछे सामाजिक संकोच, सहानुभूति और नैतिक सीमाओं के समाप्त होने का मनोवैज्ञानिक अध्ययन।", ["गुमनामी और अदृश्यता मस्तिष्क की सहानुभूति को सुन्न कर देती है","स्क्रीन के पीछे इंसान वास्तविक दर्द नहीं देख पाता","प्रत्यक्ष संवाद की मर्यादा को डिजिटल दुनिया में भी बनाए रखें"]),
  gu: createLocalizedRecord('gu', "ઓનલાઇન અનિયંત્રણ અસર (Online Disinhibition)", "ડિજિટલ સ્ક્રીન પાછળ અનામી બનીને સામાજિક મર્યાદાઓ અને સંવેદનશીલતા ભૂલી જવાની પ્રવૃત્તિ.", ["અનામી હોવાનો દુરુપયોગ ન કરો","સ્ક્રીન પાછળ પણ માનવતા રાખો","સંયમપૂર્વક કમેન્ટ કરો"]),
  mr: createLocalizedRecord('mr', "ऑनलाइन अनिर्बंधता प्रभाव (Online Disinhibition)", "डिजिटल पडद्याआड आणि अनामिकतेमुळे माणसाची सामाजिक बंधने आणि सहानुभूती नष्ट होण्याची मानसिक प्रवृत्ती.", ["अनामिकतेचा गैरवापर टाळा","डिजिटल जगातही संवेदनशीलता बाळगा","संयमाने व्यक्त व्हा"]),
  te: createLocalizedRecord('te', "ఆన్‌లైన్ నిరోధరాహిత్య ప్రభావం (Online Disinhibition)", "స్క్రీన్ వెనుక అజ్ఞాతంగా ఉన్నప్పుడు సామాజిక సంకోచాలు మరియు సానుభూతి నశించే మనస్తత్వం.", ["అజ్ఞాతత్వాన్ని దుర్వినియోగం చేయవద్దు","సానుభూతిని కోల్పోకండి","గౌరవప్రదంగా మాట్లాడండి"]),
  ta: createLocalizedRecord('ta', "இணையதள கட்டுப்பாடின்மை விளைவு (Online Disinhibition)", "டிஜிட்டல் திரைகளுக்குப் பின்னால் இருக்கும் போது மனிதநேயமும் சமூகக் கட்டுப்பாடுகளும் மறையும் உளவியல்.", ["முகமூடிக்கு பின்னால் ஒளியாதீர்கள்","மனிதநேயத்தை மறக்காதீர்கள்","கண்ணியமாக கருத்து தெரிவியுங்கள்"]),
  kn: createLocalizedRecord('kn', "ಆನ್‌ಲೈನ್ ಅಸಂಯಮ ಪರಿಣಾಮ (Online Disinhibition)", "ಡಿಜಿಟಲ್ ಪರದೆಯ ಹಿಂದೆ ಅನಾಮಧೇಯರಾಗಿದ್ದಾಗ ಸಾಮಾಜಿಕ ಕಟ್ಟುಪಾಡುಗಳು ಮತ್ತು ಸಹಾನುಭೂತಿ ಕಳೆದುಕೊಳ್ಳುವ ವರ್ತನೆ.", ["ಅನಾಮಧೇಯತೆಯನ್ನು ದುರುಪಯೋಗಪಡಿಸಿಕೊಳ್ಳಬೇಡಿ","ಮಾನವೀಯತೆಯನ್ನು ಮರೆಯಬೇಡಿ","ಸಂಯಮದಿಂದ ಪ್ರತಿಕ್ರಿಯಿಸಿ"]),
  ml: createLocalizedRecord('ml', "ഓൺലൈൻ നിയന്ത്രണമില്ലായ്മ (Online Disinhibition)", "ഡിജിറ്റൽ സ്ക്രീനുകൾക്ക് പിന്നിൽ മറഞ്ഞിരിക്കുമ്പോൾ സഹാനുഭൂതിയും സാമൂഹിക മര്യാദകളും നഷ്ടപ്പെടുന്ന അവസ്ഥ.", ["അജ്ഞാതത്വം ദുരുപയോഗം ചെയ്യരുത്","മനുഷ്യത്വത്തോടെ പെരുമാറുക","മാന്യമായി അഭിപ്രായം പറയുക"]),
  bn: createLocalizedRecord('bn', "অনলাইন অসংযম প্রভাব (Online Disinhibition)", "ডিজিটাল স্ক্রিনের আড়ালে ও বেনামী পরিচয়ে সহানুভূতি এবং সামাজিক দায়বদ্ধতা হারিয়ে ফেলার প্রবণতা।", ["বেনামী পরিচয়ের অপব্যবহার করবেন না","স্ক্রিনের পেছনেও বিবেক জাগ্রত রাখুন","শালীন আচরণ বজায় রাখুন"]),
  pa: createLocalizedRecord('pa', "ਔਨਲਾਈਨ ਬੇਲਗਾਮੀ ਪ੍ਰਭਾਵ (Online Disinhibition)", "ਡਿਜੀਟਲ ਪਰਦੇ ਪਿੱਛੇ ਗੁਮਨਾਮ ਹੋ ਕੇ ਸਮਾਜਿਕ ਮਰਿਆਦਾਵਾਂ ਅਤੇ ਹਮਦਰਦੀ ਗੁਆ ਬੈਠਣ ਦੀ ਮਾਨਸਿਕ ਆਦਤ।", ["ਗੁਮਨਾਮੀ ਦਾ ਨਾਜਾਇਜ਼ ਫਾਇਦਾ ਨਾ ਚੁੱਕੋ","ਸੰਵੇਦਨਸ਼ੀਲਤਾ ਬਣਾਈ ਰੱਖੋ","ਸਲੀਕੇ ਨਾਲ ਗੱਲ ਕਰੋ"]),
  ur: createLocalizedRecord('ur', "آن لائن بے لگامی کا اثر (Online Disinhibition)", "ڈیجیٹل اسکرین اور گمنامی کی آڑ میں سماجی اخلاقیات اور ہمدردی کے ختم ہونے کا نفسیاتی رجحان۔", ["گمنامی کا غلط فائدہ نہ اٹھائیں","انسانیت کو فراموش نہ کریں","شائستہ زبان استعمال کریں"]),
  or: createLocalizedRecord('or', "ଅନଲାଇନ୍ ଅସଂଯମ ପ୍ରଭାବ (Online Disinhibition)", "ଡିଜିଟାଲ୍ ସ୍କ୍ରିନ୍ ପଛରେ ଅଜ୍ଞାତ ରହି ସାମାଜିକ ଶିଷ୍ଟାଚାର ଓ ସହାନୁଭୂତି ହରାଇବାର ମାନସିକତା।", ["ଅଜ୍ଞାତତାର ଅପବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ","ମାନବିକତା ବଜାୟ ରଖନ୍ତୁ","ସଂଯମତାର ସହ ମତାମତ ଦିଅନ୍ତୁ"]),
  as: createLocalizedRecord('as', "অনলাইন নিয়ন্ত্ৰণহীনতাৰ প্ৰভাৱ (Online Disinhibition)", "ডিজিটেল পৰ্দাৰ আঁৰত বেনামী হৈ মানৱীয় সহানুভূতি আৰু সামাজিক শিষ্টাচাৰ পাহৰি যোৱাৰ প্ৰৱণতা।", ["বেনামী পৰিচয়ৰ অপব্যৱহাৰ নকৰিব","মানৱীয়তা বজাই ৰাখক","সংযমেৰে মন্তব্য কৰক"]),
};
