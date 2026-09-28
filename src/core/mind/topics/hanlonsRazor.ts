import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_HANLONS_RAZOR_EN: MindTopicDetail = {
  id: 'hanlons_razor',
  categoryId: 'critical_thinking',
  slug: 'hanlons-razor',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 7,
  viewCount: 3640,
  shareCount: 285,
  bookmarkCount: 595,
  title: "Hanlon’s Razor: Never Attribute to Malice What Stupidity Explains",
  subtitle: "Robert J. Hanlon on cutting through paranoia, grievance, and fabricated conspiracies in human conflict.",
  shortDescription: "A philosophical razor suggesting that when someone does something that causes harm or inconvenience, it is far more likely due to negligence, ignorance, or incompetence than deliberate malevolence.",
  oneLineExplanation: "Stop inventing evil conspiracies when plain exhaustion, rushing, or clumsiness is the real culprit.",

  summary30s: "Coined by Robert J. Hanlon in 1980 (and echoed by Goethe and Napoleon Bonaparte), Hanlon’s Razor is an indispensable cognitive tool for mental peace and interpersonal sanity. When an email goes unanswered, a driver cuts you off, or a coworker drops a project file, your brain instinctively invents an intentional personal attack. Hanlon’s razor slices away paranoia.",
  coreConcept: "The human brain is an hyperactive agency-detection device. When we experience pain or frustration, we instinctively hallucinate an intentional villain behind the misfortune. In reality, human beings are chronically tired, distracted, overwhelmed, and misinformed. True deliberate malice is statistically rare; simple incompetence, cognitive overload, and careless oversight account for 95% of social friction.",
  summary60s: "Applying Hanlon’s Razor defuses rage in corporate workplaces, romantic relationships, and customer service disputes. Instead of retaliating against an imagined enemy (which sparks an escalating vendetta), you approach the situation with curiosity, empathy, and constructive clarification, saving immense emotional energy.",
  quickTakeaways: ["Assume incompetence, distraction, or fatigue before assuming deliberate malice","The brain is biologically wired to over-detect intentional threats (Hostile Attribution Bias)","Escalating retaliation against innocent blunders creates real enemies out of thin air","Asking curious clarifying questions resolves issues faster than accusatory confrontations"],

  whyItHappens: "Hostile Attribution Bias: evolutionary threat detection biased early humans to assume rustling leaves were a predator rather than the wind.",
  evolutionaryMechanism: "Assuming hostility kept ancestors alive in warring tribal skirmishes; in modern cooperative society, it ruins partnerships and creates chronic paranoia.",

  howItWorks: "Frustrating event occurs -> Amygdala triggers anger -> Default assumption: \"They did this deliberately to hurt me!\" -> Apply Hanlon's Razor -> Realize: \"They were probably just overwhelmed or forgot\" -> Calm communication initiated.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Paranoid Attribution vs. Hanlon’s Reality Filter",
    description: "Robert Hanlon’s interpersonal explanatory filter.",
    analogySideA: {
      label: "Paranoid Mindset (Default)",
      detail: "\"My boss didn’t reply to my WhatsApp message for 8 hours because she hates me and plans to fire me!\" -> Panic and passive aggression.",
    },
    analogySideB: {
      label: "Hanlon’s Razor (Rational)",
      detail: "\"My boss had 14 meetings, a crying toddler at home, and accidentally swiped the notification away.\" -> Zero emotional distress.",
    },
  },

  researchSummary: "Crick & Dodge (1994, Psychological Bulletin) documented the mechanics of Hostile Attribution Bias and how cognitive reframing via heuristic razors eliminates retaliatory aggression.",
  references: [
    {
      id: 'ref_hanlons_razor_01',
      title: "Murphy’s Law Book Two: More Reasons Why Things Go Wrong!",
      citation: "Hanlon, R. J. (1980). Arthur Bloch (Ed.), Price Stern Sloan.",
      authors: "Hanlon, R. J. & Crick, N. R.",
      publicationYear: 1980,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1037/0033-2909.115.1.74",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_hanlons_razor_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Delayed WhatsApp Blue Tick Drama in Delhi",
      narrativeContext: "Neha sent her project proposal to her teammate Rahul at 10 AM in Gurugram. By 4 PM, she saw two blue ticks on WhatsApp but no reply. Her mind spiraled: \"He is stealing my idea! He thinks I am incompetent!\" She drafted a scathing email to their VP. Before clicking send, she walked to his desk and saw Rahul frantically troubleshooting a crashed client server with sweat on his forehead.",
      biasInAction: "Neha fell into the Hostile Attribution trap, constructing a villainous conspiracy around a simple case of priority overload.",
      optimalResponse: "Apply Hanlon's Razor: send a polite, neutral follow-up: \"Hey Rahul, hope you're having a good day! Whenever you get a breathing moment, let me know your thoughts on the proposal.\"",
      reflectionPrompt: "When someone doesn’t reply to your text or forgets a promise, is your first instinct to feel hurt and angry, or to wonder what crisis they are managing?",
    },
  ],

  examples: [
    {
      id: 'ex_hanlons_razor_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Delayed WhatsApp Blue Tick Drama in Delhi",
      description: "Neha sent her project proposal to her teammate Rahul at 10 AM in Gurugram. By 4 PM, she saw two blue ticks on WhatsApp but no reply. Her mind spiraled...",
      takeaway: "Assume incompetence, distraction, or fatigue before assuming deliberate malice",
    },
  ],

  howToRecognize: "Feeling a sudden surge of righteous indignation and believing someone is orchestrating a subtle campaign against you.",
  whereYouEncounterIt: "Remote work communication (Slack/Email), marital misunderstandings, highway driving, and customer support disputes.",
  commonMisconceptions: "Myth: \"Hanlon’s Razor means being a naive doormat who lets malicious people walk over them.\" Fact: Hanlon’s Razor applies to first-time blunders; repeated, documented patterns of harmful behavior should be dealt with strictly.",
  limitationsAndControversies: "When dealing with geopolitical state espionage, corporate corporate fraud, or toxic narcissists, deliberate malice must be actively evaluated.",

  howToRespond: "The 24-Hour Benevolence Pause: When feeling offended by someone's action, wait 24 hours and force yourself to find three benign explanations (busy, tired, sick) before reacting.",
  psychologicalDefenses: [{"title":"The Generous Interpretation Reflex","instruction":"Force yourself to state the most charitable possible motive for the other person’s blunder out loud."},{"title":"The Direct Clarification Query","instruction":"Replace accusations with questions: \"Hey, I noticed X happened; was that intentional or did something slip through the cracks?\""}],

  practiceQuestions: [
    {
      id: 'pq_hanlons_razor_01',
      difficulty: 'beginner',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A driver cuts abruptly into your lane on the Mumbai-Pune Expressway without using an indicator, forcing you to tap your brakes. According to Hanlon’s Razor, what is the most statistically probable explanation?",
      scenarioText: "Your immediate emotional reaction is to honk furiously and assume the driver is an aggressive sociopath.",
      explanation: "Statistically, drivers make lane errors because they are distracted, missed an exit, or have a crying child in the backseat, not because they targeted you personally.",
      antidoteAdvice: "Remind yourself: \"Never attribute to malice what is easily explained by human distraction or poor driving skill.\"",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "The driver specifically targeted you to ruin your day and assert dominance.",
          text: "The driver specifically targeted you to ruin your day and assert dominance.",
          feedbackText: "Incorrect. Egocentric hostile attribution.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "The driver was distracted, inexperienced, or panicked about an upcoming highway exit.",
          text: "The driver was distracted, inexperienced, or panicked about an upcoming highway exit.",
          feedbackText: "Correct! Hanlon’s Razor recognizes incompetence and distraction over malice.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "The driver is an undercover agent in a high-speed chase.",
          text: "The driver is an undercover agent in a high-speed chase.",
          feedbackText: "Incorrect. Hollywood fantasy.",
        }
      ],
    },
  ],

  reflectionPrompt: "Who in your life are you currently assuming has malicious intentions toward you, and what innocent blunder might actually explain their behavior?",
  tags: ['Mentalab Mind', 'critical_thinking'],
  relatedTopics: [],
  seoTitle: `${"Hanlon’s Razor: Never Attribute to Malice What Stupidity Explains"} | Mentalab Mind`,
  seoDescription: "A philosophical razor suggesting that when someone does something that causes harm or inconvenience, it is far more likely due to negligence, ignorance, or incompetence than deliberate malevolence.",
  canonicalUrl: '/mind/critical-thinking/hanlons-razor',
  ogImageUrl: '/images/mind/hanlons-razor.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Applying Hanlon’s Razor defuses rage in corporate workplaces, romantic relationships, and customer service disputes. Instead of retaliating against an imagined enemy (which sparks an escalating vendetta), you approach the situation with curiosity, empathy, and constructive clarification, saving immense emotional energy.",
};

export const TOPIC_HANLONS_RAZOR_HINGLISH: MindTopicDetail = {
  ...TOPIC_HANLONS_RAZOR_EN,
  title: "Hanlon’s Razor: Har Baat Par Dushmani Mat Dhoondo",
  subtitle: "Robert Hanlon ka rule: Jis cheez ki wajah aam galti, thakawat ya aalas ho sakti hai, use saazish mat samjho.",
  shortDescription: "Hostile Attribution Bias: Kisi ne reply nahi kiya to dushman mat maano; ho sakta hai wo busy ho ya bhool gaya ho.",
  oneLineExplanation: "Har galti ke peeche villain nahi hota, aksar log bas thake huye aur distracted hote hain.",
  summary30s: "1980 me Robert Hanlon ne ek golden rule diya: \"Kabhi bhi us baat ke peeche buri neeyat mat maano jise aam bewakoofi ya laparwahi se explain kiya ja sake.\" Agar kisi ne aapka message dekh kar reply nahi kiya, ya traffic me aage gaadi daal di, to wo aapse dushmani nahi nikaal raha, bas thaka hua ya distracted hai.",
  coreConcept: "Insaan ka dimaag hamesha saazish dhoondhta hai. Office me boss ne thoda rude baat ki to hum sochte hain \"Yeh mujhe nikaalne ki planning kar raha hai\". Par reality yeh hoti hai ki boss ki biwi bimaar thi ya client ne use daanta tha. Asli buri neeyat 5% hoti hai, 95% mamle me log bas confused aur overworked hote hain.",
  summary60s: "Hanlon's Razor apnaane se dimaag ka 90% gussa aur stress gayab ho jata hai. WhatsApp par blue tick aane ke baad overthink karna band karo. Ladai karne ke bajaye kindly poocho: \"Sab theek hai na bhai?\" Dushmani create karne se bacho.",
  quickTakeaways: ["Har buri cheez ke peeche saazish dhoondhna band karo","Log aksar bure nahi hote, bas careless, thake huye aur confuse hote hain","Galti ko dushmani samajh kar ladna naye dushman paida karta hai","Shanti se clarify karo: \"Bhai kya hua, sab theek hai na?\""],
  howItWorks: "Kisi ne galti ki -> Gussa aaya (\"Usne jaanboojh kar kiya!\") -> Hanlon's Razor lagaya -> \"Nahi, wo busy hoga ya bhool gaya\" -> Shanti se baat ki -> Rishta bach gaya.",
  howToRespond: "24-Hour Rule: Jab kisi ki baat se bura lage, to turant ladne mat lago. 24 ghante ruko aur socho: \"Kya wo thaka hua tha? Kya use koi tension thi?\"",
  practiceQuestions: [
    {
      ...TOPIC_HANLONS_RAZOR_EN.practiceQuestions[0],
      prompt: "Colleague ne 6 ghante tak important email ka reply nahi kiya. Hanlon's Razor ke hisaab se sabse likely wajah kya hai?",
      explanation: "Hanlon's razor kehta hai ki wo dushmani nikaalne ke bajaye meetings me fasa hoga ya reply karna bhool gaya hoga.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Wo aapke khilaf office politics kar raha hai aur career barbad karna chahta hai.",
          text: "Wo aapke khilaf office politics kar raha hai aur career barbad karna chahta hai.",
          feedbackText: "Galat. Yeh unnecessary paranoia hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Wo kisi urgent meeting me busy hoga ya uska dhyan bhatak gaya hoga.",
          text: "Wo kisi urgent meeting me busy hoga ya uska dhyan bhatak gaya hoga.",
          feedbackText: "Sahi! Yahi Hanlon’s Razor ka practical application hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Uska laptop hack ho gaya hai.",
          text: "Uska laptop hack ho gaya hai.",
          feedbackText: "Galat.",
        }
      ],
    },
  ],
  seoTitle: `${"Hanlon’s Razor: Har Baat Par Dushmani Mat Dhoondo"} | Mentalab Mind`,
  seoDescription: "Hostile Attribution Bias: Kisi ne reply nahi kiya to dushman mat maano; ho sakta hai wo busy ho ya bhool gaya ho.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_HANLONS_RAZOR_EN,
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

export const TOPIC_HANLONS_RAZOR: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_HANLONS_RAZOR_EN,
  hinglish: TOPIC_HANLONS_RAZOR_HINGLISH,
  hi: createLocalizedRecord('hi', "हैनलॉन का उस्तरा (Hanlon’s Razor)", "किसी भी कार्य के पीछे दुर्भावना या षड्यंत्र मानने से बचने का सिद्धांत, जिसे मानवीय भूल, अज्ञानता या थकावट द्वारा आसानी से समझाया जा सके।", ["दुर्भावना मानने से पहले मानवीय भूल, व्याकुलता या लापरवाही की संभावना देखें","शत्रुतापूर्ण आरोपण पूर्वाग्रह (Hostile Attribution Bias) से बचें","क्रोधित होने के बजाय विनम्रतापूर्वक स्पष्टीकरण मांगें"]),
  gu: createLocalizedRecord('gu', "હેનલોનનું રેઝર (Hanlon’s Razor)", "કોઈની ભૂલ પાછળ દ્વેષભાવ શોધવાને બદલે અજ્ઞાનતા કે થાકને કારણ ગણવાનો બુદ્ધિગમ્ય સિદ્ધાંત.", ["દરેક વાતમાં ષડયંત્ર ન શોધો","લોકો ઘણીવાર માત્ર થાકેલા હોય છે","શાંતિથી સ્પષ્ટતા માંગો"]),
  mr: createLocalizedRecord('mr', "हॅनलॉन्स रेझर (Hanlon’s Razor)", "एखाद्या कृतीमागे वाईट हेतू शोधण्यापेक्षा मानवी निष्काळजीपणा किंवा अज्ञानाला कारण मानण्याची विचारसरणी.", ["षड्यंत्राचा संशय घेणे टाळा","माणसे अनेकदा व्यस्त किंवा थकलेली असतात","शांततेने चर्चा करा"]),
  te: createLocalizedRecord('te', "హాన్లాన్స్ రేజర్ (Hanlon’s Razor)", "ఎవరి చర్యల వెనుకా కుట్ర లేదా దురుద్దేశం ఆపాదించకుండా, పొరపాటు లేదా అలసటగా భావించే విధానం.", ["దురుద్దేశాన్ని ఊహించవద్దు","అజాగ్రత్త లేదా ఒత్తిడి కారణం కావచ్చు","శాంతియుతంగా వివరణ కోరండి"]),
  ta: createLocalizedRecord('ta', "ஹான்லானின் ரேஸர் (Hanlon’s Razor)", "ஒருவரின் தவறை வேண்டுமென்றே செய்த சதியாக பார்க்காமல், கவனக்குறைவு அல்லது அறியாமையாக பார்க்கும் அறிவார்ந்த அணுகுமுறை.", ["சதித்திட்டங்களை கற்பனை செய்யாதீர்கள்","மக்களின் சோர்வை புரிந்து கொள்ளுங்கள்","அமைதியாக விளக்கம் கேளுங்கள்"]),
  kn: createLocalizedRecord('kn', "ಹ್ಯಾನ್ಲಾನ್‌ನ ರೇಜರ್ (Hanlon’s Razor)", "ಯಾರಾದರೂ ತಪ್ಪು ಮಾಡಿದಾಗ ಅದರಲ್ಲಿ ದುರುದ್ದೇಶ ಹುಡುಕುವ ಬದಲು ಅಜ್ಞಾನ ಅಥವಾ ಆಯಾಸ ಕಾರಣವೆಂದು ತಿಳಿಯುವ ತತ್ವ.", ["ದುರುದ್ದೇಶವನ್ನು ಊಹಿಸಬೇಡಿ","ಜನರು ಸುಸ್ತಾಗಿರಬಹುದು ಅಥವಾ ಮರೆತಿರಬಹುದು","ಶಾಂತವಾಗಿ ಸ್ಪಷ್ಟೀಕರಣ ಕೇಳಿ"]),
  ml: createLocalizedRecord('ml', "ഹാൻലൺസ് റേസർ (Hanlon’s Razor)", "മറ്റുള്ളവരുടെ തെറ്റുകൾക്ക് പിന്നിൽ ദുരുദ്ദേശ്യം കാണാതെ, അശ്രദ്ധയോ അറിവില്ലായ്മയോ ആയി കാണുന്ന രീതി.", ["ദുരുദ്ദേശ്യം ആരോപിക്കരുത്","മനുഷ്യസഹജമായ തെറ്റുകൾ മനസ്സിലാക്കുക","സമാധാനപരമായി കാര്യം തിരക്കുക"]),
  bn: createLocalizedRecord('bn', "হ্যানলনের রেজর (Hanlon’s Razor)", "কারো কোনো ভুল বা ক্ষতিকারক আচরণের পেছনে শত্রুতা না খুঁজে মানুষের অজ্ঞতা বা অসচেতনতাকে কারণ হিসেবে দেখার মানসিক নিয়ম।", ["সবকিছুতে শত্রুতা বা ষড়যন্ত্র খুঁজবেন না","মানুষ প্রায়শই কেবল ক্লান্ত বা বিভ্রান্ত থাকে","রাগ করার আগে শান্তভাবে জেনে নিন"]),
  pa: createLocalizedRecord('pa', "ਹੈਨਲਨ ਦਾ ਰੇਜ਼ਰ (Hanlon’s Razor)", "ਕਿਸੇ ਦੀ ਗ਼ਲਤੀ ਪਿੱਛੇ ਦੁਸ਼ਮਣੀ ਜਾਂ ਸਾਜ਼ਿਸ਼ ਲੱਭਣ ਦੀ ਬਜਾਏ ਉਸਨੂੰ ਆਮ ਭੁੱਲ ਜਾਂ ਲਾਪਰਵਾਹੀ ਸਮਝਣ ਦਾ ਸਿਧਾਂਤ।", ["ਹਰ ਗੱਲ ਪਿੱਛੇ ਸਾਜ਼ਿਸ਼ ਨਾ ਦੇਖੋ","ਲੋਕ ਅਕਸਰ ਸਿਰਫ਼ ਥੱਕੇ ਜਾਂ ਪਰੇਸ਼ਾਨ ਹੁੰਦੇ ਹਨ","ਸ਼ਾਂਤੀ ਨਾਲ ਗੱਲਬਾਤ ਕਰੋ"]),
  ur: createLocalizedRecord('ur', "ہینلون کا استرا (Hanlon’s Razor)", "کسی کے عمل کے پیچھے بدنیتی تلاش کرنے کے بجائے اسے محض غفلت، نادانی یا تھکن سمجھنے کا اصول۔", ["ہر بات کے پیچھے سازش نہ تلاش کریں","لوگ اکثر محض غافل یا تھکے ہوتے ہیں","غصے کے بجائے پرسکون انداز میں معلوم کریں"]),
  or: createLocalizedRecord('or', "ହାନଲନଙ୍କ ରେଜର (Hanlon’s Razor)", "କାହାର ଭୁଲ୍ ପଛରେ ଶତ୍ରୁତା ବା ଷଡ଼ଯନ୍ତ୍ର ନଖୋଜି ତାହାକୁ ଅଜ୍ଞତା ବା କ୍ଳାନ୍ତି ବୋଲି ବୁଝିବାର ବୈଜ୍ଞାନିକ ନିୟମ।", ["ଷଡ଼ଯନ୍ତ୍ର ସନ୍ଦେହ କରନ୍ତୁ ନାହିଁ","ଲୋକେ ପ୍ରାୟତଃ ବ୍ୟସ୍ତ ବା ଅସାବଧାନ ଥାଆନ୍ତି","ଶାନ୍ତିପୂର୍ଣ୍ଣ ଭାବେ ବୁଝନ୍ତୁ"]),
  as: createLocalizedRecord('as', "হেনলনৰ ৰেজৰ (Hanlon’s Razor)", "কাৰোবাৰ ভুলৰ আঁৰত শত্ৰুতা বা কু-অভিপ্ৰায় নিবিচাৰি মানুহৰ অজ্ঞতা বা ভাগৰক কাৰণ বুলি ধৰি লোৱাৰ যুক্তিপূৰ্ণ নীতি।", ["সকলোতে ষড়যন্ত্ৰ নেদেখিব","মানুহ প্ৰায়েই কেৱল ব্যস্ত বা পাহৰণিৰ চিকাৰ হয়","শান্তভাৱে স্পষ্টীকৰণ বিচাৰক"]),
};
