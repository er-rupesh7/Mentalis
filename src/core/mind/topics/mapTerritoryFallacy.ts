import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_MAP_TERRITORY_FALLACY_EN: MindTopicDetail = {
  id: 'map_territory_fallacy',
  categoryId: 'critical_thinking',
  slug: 'the-map-is-not-the-territory',
  difficulty: 'advanced',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 8,
  viewCount: 3760,
  shareCount: 300,
  bookmarkCount: 620,
  title: "The Map Is Not the Territory: Abstract Models vs. Raw Reality",
  subtitle: "Alfred Korzybski on why confusing our simplified mental diagrams with complex physical reality leads to catastrophic blunders.",
  shortDescription: "A foundational epistemological mental model stating that human perceptions, abstractions, and financial models are mere simplified representations of reality, not reality itself.",
  oneLineExplanation: "You cannot walk on the blueprint of a house, and the menu is not the meal.",

  summary30s: "Coined in 1931 by Polish-American philosopher Alfred Korzybski, \"The map is not the territory\" is the cornerstone of intellectual humility. Every theory, spreadsheet, medical chart, or political ideology is an abstraction that discards 99% of reality’s chaotic nuance to fit into human working memory. Catastrophe strikes when we fall in love with the map and ignore the jagged ground beneath our feet.",
  coreConcept: "Maps are necessary reductions; a 1:1 scale map containing every pebble, gust of wind, and blade of grass would be useless. But every reduction introduces blind spots. In the 2008 financial crash, Wall Street quant models mathematically proved that subprime mortgage default risks were diversified; the model was pristine, but the real-world housing market collapsed anyway.",
  summary60s: "Software engineers, corporate strategists, and government policymakers chronically mistake dashboard metrics for customer happiness. A KPI is just a map; user frustration is the territory. Whenever your metric says everything is green but users are furious, throw away the metric: the territory always wins.",
  quickTakeaways: ["Every model, dashboard, and mental framework is an imperfect simplification","Confusing the menu with the meal causes catastrophic strategic blindness","When your spreadsheet contradicts messy physical reality, the spreadsheet is wrong","Continuously update your mental maps by touching ground-truth physical reality"],

  whyItHappens: "Cognitive compression: the brain must aggressively compress sensory data into low-dimensional semantic symbols to prevent metabolic energy collapse.",
  evolutionaryMechanism: "Hominids survived by using coarse symbolic categories (\"predator\", \"edible\"); survival rewarded rapid heuristic maps over infinite sensory precision.",

  howItWorks: "Complex reality exists -> Model constructed -> Model simplifies reality -> People optimize for the model -> Reality shifts dynamically -> Model diverges -> Catastrophic crash.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Pristine Spreadsheet Model vs. Jagged Ground Reality",
    description: "Alfred Korzybski’s abstraction abstraction hierarchy.",
    analogySideA: {
      label: "The Map (Abstraction)",
      detail: "A financial model showing 0.001% risk of bank failure based on 5-year historical averages.",
    },
    analogySideB: {
      label: "The Territory (Reality)",
      detail: "A sudden panic triggers a digital bank run over Twitter/X in 4 hours, draining $42 Billion (Silicon Valley Bank, 2023).",
    },
  },

  researchSummary: "Korzybski (1933, Science and Sanity) and Box (1976, Journal of the American Statistical Association: \"All models are wrong, but some are useful\") demonstrated the fundamental limits of formal abstraction.",
  references: [
    {
      id: 'ref_map_territory_fallacy_01',
      title: "Science and Sanity: An Introduction to Non-Aristotelian Systems / Science and Statistics",
      citation: "Box, G. E. P. (1976). J. of the American Statistical Association, 71(356), 791–799.",
      authors: "Korzybski, A. & Box, G. E. P.",
      publicationYear: 1933,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1080/01621459.1976.10480949",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_map_territory_fallacy_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The GPS River Plunge in Kerala",
      narrativeContext: "During heavy monsoon rains in Kerala, three tourists blindly followed Google Maps directions at midnight. The navigation map showed a continuous blue line, completely unaware that a bridge had washed away hours earlier. The driver accelerated into a raging river, narrowly escaping drowning.",
      biasInAction: "The driver trusted the digital map over their physical eyes and local weather alerts, committing the classic Map-Territory fallacy.",
      optimalResponse: "Always treat models as advisory hints: verify current ground truth with physical observation before taking irreversible actions.",
      reflectionPrompt: "What dashboard metric or performance review score do you optimize for at work that doesn’t actually reflect the real quality of your contribution?",
    },
  ],

  examples: [
    {
      id: 'ex_map_territory_fallacy_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The GPS River Plunge in Kerala",
      description: "During heavy monsoon rains in Kerala, three tourists blindly followed Google Maps directions at midnight. The navigation map showed a continuous blue ...",
      takeaway: "Every model, dashboard, and mental framework is an imperfect simplification",
    },
  ],

  howToRecognize: "Arguing that reality \"must be wrong\" because your theory, policy document, or financial spreadsheet predicted otherwise.",
  whereYouEncounterIt: "Macroeconomic policy, algorithmic trading, corporate OKRs/KPIs, military combat operations, and AI prompt engineering.",
  commonMisconceptions: "Myth: \"Because maps are imperfect, we should discard all models and rely purely on gut instinct.\" Fact: Models are indispensable tools for navigation; we must simply remember their boundary conditions and margins of error.",
  limitationsAndControversies: "In purely closed mathematical systems (like Euclidean geometry or chess), the rules and axioms ARE the complete territory; the fallacy applies to physical and human systems.",

  howToRespond: "The Ground-Truth Audit: Step out of the boardroom or terminal and spend 4 hours observing actual customers using your product in the real world.",
  psychologicalDefenses: [{"title":"The Boundary Condition Check","instruction":"Explicitly state the exact assumptions under which your business model or plan will completely break down."},{"title":"Gemba Walk (Go and See)","instruction":"Adopt the Toyota lean manufacturing rule: never make a production decision from an office; walk the physical assembly line floor."}],

  practiceQuestions: [
    {
      id: 'pq_map_territory_fallacy_01',
      difficulty: 'advanced',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A hospital administrator is delighted because the computer dashboard shows that average patient wait times in the emergency room dropped from 45 minutes to 8 minutes. However, patient mortality rose by 15%. What explains this discrepancy?",
      scenarioText: "The hospital had instituted a policy penalizing doctors if patient check-in wait times exceeded 10 minutes on the computer.",
      explanation: "The staff optimized for the map (logging patients into rooms in the software within 8 minutes) while the territory (actual medical care delivery) degraded dangerously.",
      antidoteAdvice: "Remember: \"The metric is not the care; never sacrifice the territory to make the map look pretty.\"",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "The computer software had a virus that poisoned the medication dispensers.",
          text: "The computer software had a virus that poisoned the medication dispensers.",
          feedbackText: "Incorrect. Science fiction explanation.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Goodhart’s Law and Map-Territory Fallacy: staff gamed the computer metric by moving patients into unstaffed rooms without providing real medical care.",
          text: "Goodhart’s Law and Map-Territory Fallacy: staff gamed the computer metric by moving patients into unstaffed rooms without providing real medical care.",
          feedbackText: "Correct! The dashboard map diverged completely from clinical reality.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Patient mortality naturally spikes whenever wait times drop.",
          text: "Patient mortality naturally spikes whenever wait times drop.",
          feedbackText: "Incorrect. Causation is reversed by metric gaming.",
        }
      ],
    },
  ],

  reflectionPrompt: "Where in your personal life are you mistaking a symbolic label (like your job title, bank balance, or BMI) for your actual wellbeing and identity?",
  tags: ['Mentalab Mind', 'critical_thinking'],
  relatedTopics: [],
  seoTitle: `${"The Map Is Not the Territory: Abstract Models vs. Raw Reality"} | Mentalab Mind`,
  seoDescription: "A foundational epistemological mental model stating that human perceptions, abstractions, and financial models are mere simplified representations of reality, not reality itself.",
  canonicalUrl: '/mind/critical-thinking/the-map-is-not-the-territory',
  ogImageUrl: '/images/mind/the-map-is-not-the-territory.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Software engineers, corporate strategists, and government policymakers chronically mistake dashboard metrics for customer happiness. A KPI is just a map; user frustration is the territory. Whenever your metric says everything is green but users are furious, throw away the metric: the territory always wins.",
};

export const TOPIC_MAP_TERRITORY_FALLACY_HINGLISH: MindTopicDetail = {
  ...TOPIC_MAP_TERRITORY_FALLACY_EN,
  title: "The Map Is Not The Territory: Chart Aur Asliyat Ka Farq",
  subtitle: "Alfred Korzybski ka model: Spreadsheet, dashboard aur rules sirf tasveer hain, zameen ki asliyat nahi.",
  shortDescription: "Epistemological Humility: Restaurant ka menu dekhne se pet nahi bharta; theory aur ground reality me zameen-aasmaan ka farq hota hai.",
  oneLineExplanation: "Aap ghar ke naqshe (blueprint) par chal nahi sakte, aur menu card ko chaba kar bhookh nahi mit sakti.",
  summary30s: "1931 me philosopher Alfred Korzybski ne ek amar baat kahi: \"Map kabhi bhi zameen (territory) nahi hota.\" Har spreadsheet, theory aur corporate rulebook sirf ek choti si tasveer hoti hai. Asli duniya bohot complex, ulti-pulti aur unpredictable hoti hai. Jab log Excel sheet ko hi sach maan lete hain, to bohot bade nuksan hote hain.",
  coreConcept: "2008 ke US Financial Crisis me Wall Street ke bade-bade math models keh rahe the ki \"Zero risk hai\". Models paper par perfect the, par asli zameen par poora banking system doob gaya. Isi tarah corporate offices me baithe log dashboards par green indicators dekh kar khush hote rehte hain, jabki zameen par customer gaaliyan de raha hota hai.",
  summary60s: "Kerala me baarish ke time kuch tourists ne Google Maps par blind trust kiya. Map par seedhi road dikh rahi thi, par aage pul toot chuka tha aur gaadi seedhi nadi me gir gayi! Yeh Map-Territory fallacy ka sabse bada example hai: Hamesha apni aankho par aur ground reality par bharosa karo, sirf screen ke naqshe par nahi.",
  quickTakeaways: ["Koi bhi model ya spreadsheet poori reality ko capture nahi kar sakti","Menu aur khane me farq samjho; metrics real satisfaction nahi hote","Jab computer data aur ground reality me ladai ho, to hamesha ground reality jeetti hai","Apne cabin se bahar niklo aur zameen par jakar sach dekho"],
  howItWorks: "Idea aaya -> Paper par model banaya -> Model simple laga -> Model par blind trust kiya -> Asli duniya badal gayi -> Model crash ho gaya.",
  howToRespond: "Gemba Walk karo: Sirf laptop screen mat dekho. Zameen par jao, dukan par baitho, actual customer se baat karo aur reality check lo.",
  practiceQuestions: [
    {
      ...TOPIC_MAP_TERRITORY_FALLACY_EN.practiceQuestions[0],
      prompt: "Hospital ke software me dikh raha hai ki patient wait time 40 minute se ghat kar 5 minute ho gaya, par patients ki death rate badh gayi. Aisa kyu hua?",
      explanation: "Staff ne software ka number theek karne ke liye patients ko bina dekhe bed par daal diya. Map (Software metric) accha ho gaya, par Territory (Asli treatment) kharab ho gaya.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Software me technical error aa gaya tha.",
          text: "Software me technical error aa gaya tha.",
          feedbackText: "Galat. Problem human behavior ki thi.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Staff ne computer metric (Map) ko sundar banane ke liye treatment (Territory) ko nazarandaz kar diya.",
          text: "Staff ne computer metric (Map) ko sundar banane ke liye treatment (Territory) ko nazarandaz kar diya.",
          feedbackText: "Sahi! Yahi Map-Territory fallacy aur Goodhart’s law hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Patients ko jaldi theek hone ki aadat nahi thi.",
          text: "Patients ko jaldi theek hone ki aadat nahi thi.",
          feedbackText: "Galat.",
        }
      ],
    },
  ],
  seoTitle: `${"The Map Is Not The Territory: Chart Aur Asliyat Ka Farq"} | Mentalab Mind`,
  seoDescription: "Epistemological Humility: Restaurant ka menu dekhne se pet nahi bharta; theory aur ground reality me zameen-aasmaan ka farq hota hai.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_MAP_TERRITORY_FALLACY_EN,
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

export const TOPIC_MAP_TERRITORY_FALLACY: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_MAP_TERRITORY_FALLACY_EN,
  hinglish: TOPIC_MAP_TERRITORY_FALLACY_HINGLISH,
  hi: createLocalizedRecord('hi', "मानचित्र भूभाग नहीं है (The Map Is Not The Territory)", "सैद्धांतिक मॉडल, आंकड़ों और रूपरेखाओं को वास्तविक दुनिया की जटिल और अप्रत्याशित वास्तविकता समझने की भूल से बचने का सिद्धांत।", ["कोई भी मॉडल या स्प्रेडशीट वास्तविकता का केवल एक सरलीकृत रूप है","मेनू को भोजन समझने की भूल कभी न करें; जमीनी हकीकत हमेशा जीतती है","केवल कंप्यूटर स्क्रीन देखने के बजाय वास्तविक उपयोगकर्ताओं और परिस्थितियों का प्रत्यक्ष निरीक्षण करें"]),
  gu: createLocalizedRecord('gu', "નકશો એ જમીન નથી (The Map Is Not The Territory)", "કાગળ પરના મોડલ્સ અને વાસ્તવિક જમીની હકીકત વચ્ચેનો ભેગ પારખવાનો બુદ્ધિગમ્ય સિદ્ધાંત.", ["ડેશબોર્ડ પર આંધળો વિશ્વાસ ન કરો","મેનુ એ ભોજન નથી","જમીની હકીકત રૂબરૂ તપાસો"]),
  mr: createLocalizedRecord('mr', "नकाशा म्हणजे प्रत्यक्ष जमीन नव्हे (The Map Is Not The Territory)", "कागदावरील मॉडेल्स आणि प्रत्यक्ष जमिनीवरील वास्तव यातील फरक ओळखण्याचे तत्त्वज्ञान.", ["फक्त संगणकावरील आकडेवारीवर अवलंबून राहू नका","मेन्यू म्हणजे जेवण नव्हे","प्रत्यक्ष जमिनीवर जाऊन सत्य तपासा"]),
  te: createLocalizedRecord('te', "మ్యాప్ అసలైన భూభాగం కాదు (The Map Is Not The Territory)", "కాగితంపై లేదా కంప్యూటర్‌లోని నమూనాలు వాస్తవ ప్రపంచాన్ని పూర్తిగా ప్రతిబింబించలేవని గుర్తించే సిద్ధాంతం.", ["కంప్యూటర్ డాష్‌బోర్డులను గుడ్డిగా నమ్మవద్దు","మెనూ అంటే భోజనం కాదు","క్షేత్రస్థాయి వాస్తవాలను పరిశీలించండి"]),
  ta: createLocalizedRecord('ta', "வரைபடம் நிலப்பரப்பு அல்ல (The Map Is Not The Territory)", "காகிதத்தில் உள்ள வரைபடங்களும் கணினி மாதிரிகளும் நிஜ உலகத்தின் முழுமையான உண்மை அல்ல என்பதை உணர்த்தும் கோட்பாடு.", ["கணினி எண்களை கண்மூடித்தனமாக நம்பாதீர்கள்","மெனு என்பது உணவு அல்ல","கள யதார்த்தத்தை நேரில் பாருங்கள்"]),
  kn: createLocalizedRecord('kn', "ನಕ್ಷೆಯು ಭೂಭಾಗವಲ್ಲ (The Map Is Not The Territory)", "ಕಾಗದದ ಮೇಲಿನ ಮಾದರಿಗಳು ಮತ್ತು ನೈಜ ಜಗತ್ತಿನ ಕಠಿಣ ವಾಸ್ತವದ ನಡುವಿನ ವ್ಯತ್ಯಾಸವನ್ನು ಗುರುತಿಸುವ ಮಾನಸಿಕ ಮಾದರಿ.", ["ಕಂಪ್ಯೂಟರ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗಳನ್ನು ಕುರುಡಾಗಿ ನಂಬಬೇಡಿ","ಮೆನು ಎಂದರೆ ಊಟವಲ್ಲ","ಕ್ಷೇತ್ರ ಮಟ್ಟದ ಸತ್ಯಾಸತ್ಯತೆ ಪರೀಕ್ಷಿಸಿ"]),
  ml: createLocalizedRecord('ml', "ഭൂപടം യഥാർത്ഥ ഭൂമിയല്ല (The Map Is Not The Territory)", "സിദ്ധാന്തങ്ങളും കമ്പ്യൂട്ടർ മോഡലുകളും യഥാർത്ഥ ലോകത്തിലെ യാഥാർത്ഥ്യത്തിന് പകരമാകില്ലെന്ന് ഓർമ്മിപ്പിക്കുന്ന തത്വം.", ["കമ്പ്യൂട്ടർ ഡാറ്റയെ അന്ധമായി വിശ്വസിക്കരുത്","മെനു ഭക്ഷണത്തിന് പകരമാകില്ല","യാഥാർത്ഥ്യം നേരിട്ട് കണ്ട് ബോധ്യപ്പെടുക"]),
  bn: createLocalizedRecord('bn', "মানচিত্র কখনো ভূখণ্ড নয় (The Map Is Not The Territory)", "কাগজের মডেল বা স্প্রেডশিটের সরলীকৃত রূপকে বাস্তবের জটিল রূপ ভেবে ভুল না করার জ্ঞানতাত্ত্বিক নীতি।", ["কম্পিউটার ড্যাশবোর্ডে অন্ধ বিশ্বাস করবেন না","মেনু কখনো খাবার নয়","মাঠপর্যায়ের বাস্তবতাকে সর্বোচ্চ গুরুত্ব দিন"]),
  pa: createLocalizedRecord('pa', "ਨਕਸ਼ਾ ਅਸਲ ਜ਼ਮੀਨ ਨਹੀਂ ਹੁੰਦਾ (The Map Is Not The Territory)", "ਕਾਗਜ਼ਾਂ ਜਾਂ ਸਕਰੀਨਾਂ ਉੱਤੇ ਬਣੇ ਮਾਡਲਾਂ ਨੂੰ ਜ਼ਮੀਨੀ ਹਕੀਕਤ ਸਮਝਣ ਦੀ ਗ਼ਲਤੀ ਤੋਂ ਬਚਣ ਦਾ ਸਿਧਾਂਤ।", ["ਕੰਪਿਊਟਰ ਅੰਕੜਿਆਂ ਤੇ ਅੰਨ੍ਹਾ ਭਰੋਸਾ ਨਾ ਕਰੋ","ਮੈਨੂ ਅਸਲ ਖਾਣਾ ਨਹੀਂ ਹੁੰਦਾ","ਜ਼ਮੀਨੀ ਹਕੀਕਤ ਖ਼ੁਦ ਜਾ ਕੇ ਪਰਖੋ"]),
  ur: createLocalizedRecord('ur', "نقشہ اصل زمین نہیں ہوتا (The Map Is Not The Territory)", "کاغذ پر بنے ماڈلز یا کمپیوٹر ڈیٹا کو زمینی حقیقت سمجھنے کی فکری غلطی سے بچنے کا اصول۔", ["کمپیوٹر ڈیش بورڈ پر اندھا بھروسہ نہ کریں","مینو اصل کھانا نہیں ہوتا","زمینی حقائق کا خود مشاہدہ کریں"]),
  or: createLocalizedRecord('or', "ମାନଚିତ୍ର ପ୍ରକୃତ ଭୂଭାଗ ନୁହେଁ (The Map Is Not The Territory)", "କାଗଜର ମଡେଲ ବା ଡାଟାକୁ ପ୍ରକୃତ ଜଟିଳ ବାସ୍ତବତା ଭାବି ଭୁଲ୍ ନକରିବାର ବୈଜ୍ଞାନିକ ସତର୍କତା।", ["କମ୍ପ୍ୟୁଟର ଡ୍ୟାସବୋର୍ଡ଼ ଉପରେ ଅନ୍ଧବିଶ୍ୱାସ କରନ୍ତୁ ନାହିଁ","ମେନୁ କେବେ ଖାଦ୍ୟ ନୁହେଁ","କ୍ଷେତ୍ରସ୍ତରୀୟ ବାସ୍ତବତା ପରଖନ୍ତୁ"]),
  as: createLocalizedRecord('as', "মানচিত্ৰ প্ৰকৃত ভূমিখণ্ড নহয় (The Map Is Not The Territory)", "কাগজৰ আৰ্হি বা কম্পিউটাৰৰ তথ্যক বাস্তৱ পৃথিৱীৰ জটিল সত্য বুলি ভুল নকৰাৰ জ্ঞানমূলক নীতি।", ["কম্পিউটাৰৰ তথ্যত অন্ধবিশ্বাস নকৰিব","মেনু কেতিয়াও প্ৰকৃত খাদ্য নহয়","ক্ষেত্ৰভিত্তিক বাস্তৱতাক অগ্ৰাধিকাৰ দিয়ক"]),
};
