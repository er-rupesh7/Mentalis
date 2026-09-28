import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_SCARCITY_COUNTDOWN_TRIGGERS_EN: MindTopicDetail = {
  id: 'scarcity_countdown_triggers',
  categoryId: 'consumer_advertising',
  slug: 'scarcity-and-countdown-triggers',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 10,
  viewCount: 4000,
  shareCount: 330,
  bookmarkCount: 670,
  title: "Scarcity & Countdown Triggers: Artificial Urgency & Loss Aversion",
  subtitle: "Robert Cialdini’s influence weapon on why \"Only 2 rooms left!\" and ticking timers suspend critical thinking.",
  shortDescription: "A ubiquitous behavioral marketing tactic that fabricates artificial limits on time or quantity (e.g. countdown clocks, low stock banners) to induce panic and force impulsive purchases.",
  oneLineExplanation: "Making you buy right now by triggering the evolutionary panic of missing out.",

  summary30s: "Documented in Dr. Robert Cialdini’s seminal work *Influence*, the Scarcity Principle states that opportunities seem vastly more valuable to us when their availability is limited. Modern e-commerce platforms weaponize this with dynamic countdown clocks (\"Sale ends in 04:12!\"), fabricated stock counters (\"Only 1 seat left at this price!\"), and concurrent viewer alerts (\"42 people are looking at this right now!\").",
  coreConcept: "Scarcity activates psychological reactance (Jack Brehm): when our freedom to obtain a resource is threatened by impending expiration, our desire to preserve that freedom skyrockets. Combined with Kahneman and Tversky’s Loss Aversion (losses hurt 2.5x more than equivalent gains feel good), the fear of *losing the deal* overrides the rational evaluation of whether you even need the product.",
  summary60s: "Regulatory investigations (like the UK Competition and Markets Authority and India’s Central Consumer Protection Authority) have repeatedly revealed that many countdown clocks are deceptive \"dark patterns\" engineered to reset automatically upon page refresh. The stock counters are often hardcoded random number generators designed solely to induce physiological panic in the consumer.",
  quickTakeaways: ["Scarcity manipulates loss aversion: the brain panics at the thought of losing an option","Countdown timers and stock counters are frequently fabricated algorithmic dark patterns","Urgency forces System 1 intuitive impulse buying, short-circuiting System 2 analysis","The antidote is closing the browser tab for 1 hour; real emergencies don’t happen on flash sales"],

  whyItHappens: "Ancestral survival: resources like fresh meat or ripe fruit spoiled rapidly; immediate seizure was vital for caloric survival.",
  evolutionaryMechanism: "Hominids who hesitated when encountering scarce seasonal berries or water holes lost them to competitors and perished.",

  howItWorks: "Item browsed -> Flashing red timer seen (\"Ends in 10 mins!\") -> Amygdala feels resource threat -> Cortisol and adrenaline rise -> Prefrontal cost analysis bypassed -> Checkout completed -> Immediate buyer regret.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Fabricated Panic (Dark Pattern) vs. Cold Rational Audit",
    description: "How artificial urgency manipulates the consumer purchase funnel.",
    analogySideA: {
      label: "Artificially Triggered Panic",
      detail: "\"Hurry! 17 people have this hotel in their cart! Only 1 left!\" -> Blood pressure rises; buys in 45 seconds without checking reviews.",
    },
    analogySideB: {
      label: "Rational Inspection Antidote",
      detail: "Refreshes page in incognito window -> Notice timer resets to 15:00 -> Closes tab -> Realizes hotel was overpriced anyway.",
    },
  },

  researchSummary: "Cialdini (1984, Influence) and Worchel, Lee & Adewole (1975, JPSP) demonstrated that identical cookies tasted significantly better and were rated as higher value when taken from a jar containing only 2 cookies versus a jar of 10.",
  references: [
    {
      id: 'ref_scarcity_countdown_triggers_01',
      title: "Influence: The Psychology of Persuasion",
      citation: "Cialdini, R. B. (1984). William Morrow & Company.",
      authors: "Cialdini, R. B.",
      publicationYear: 1984,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1080/08959285.2017.1350692",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_scarcity_countdown_triggers_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Midnight Flash Sale in Bengaluru",
      narrativeContext: "Sneha was browsing airfares from Bengaluru to Jaipur for a holiday 4 months away. The travel portal showed a pulsing red banner: \"Only 2 seats left at ₹4,200! 8 other travelers viewing now!\" Panicking, Sneha entered her card details in 90 seconds, accidentally booking the wrong return date and paying a ₹3,000 non-refundable change fee.",
      biasInAction: "Sneha was blinded by artificial scarcity: the ticking countdown induced an acute fight-or-flight panic that short-circuited her prefrontal attention to flight dates.",
      optimalResponse: "Recognize the dark pattern. Take a slow breath, open an incognito window, verify that seats are actually abundant, and double-check all booking details with zero hurry.",
      reflectionPrompt: "How many times have you rushed to buy an item because of a ticking countdown clock, only to find the exact same \"deal\" still available days later?",
    },
  ],

  examples: [
    {
      id: 'ex_scarcity_countdown_triggers_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Midnight Flash Sale in Bengaluru",
      description: "Sneha was browsing airfares from Bengaluru to Jaipur for a holiday 4 months away. The travel portal showed a pulsing red banner: \"Only 2 seats left at...",
      takeaway: "Scarcity manipulates loss aversion: the brain panics at the thought of losing an option",
    },
  ],

  howToRecognize: "Ticking digital clocks, flashing red text (\"Almost gone!\"), banners showing real-time visitor counts, and \"limited-edition\" flash sales.",
  whereYouEncounterIt: "Hotel booking portals, airline reservation engines, e-commerce flash sales, and online course landing pages.",
  commonMisconceptions: "Myth: \"The website is legally required to tell the truth about stock levels.\" Fact: E-commerce platforms regularly deploy deceptive dark patterns that simulate scarcity with client-side JavaScript.",
  limitationsAndControversies: "Genuine physical scarcity exists (e.g. concert tickets in a 5,000-seat stadium, seasonal mango harvests); the distinction is whether the limit is physically real or algorithmically generated.",

  howToRespond: "The Incognito Refresh Test: Open the product page in an incognito/private browser window. If the countdown timer resets back to its starting time or the \"Only 2 left\" count remains static, the urgency is completely fabricated.",
  psychologicalDefenses: [{"title":"The Incognito Dark-Pattern Check","instruction":"Whenever you see a countdown timer or \"Only X items left\", refresh the URL in an incognito tab to expose fake timers."},{"title":"The 2-Hour Walk-Away Rule","instruction":"Never buy anything triggered by a flash sale timer on the spot; close the browser for 2 hours. If it is truly meant for you, you will buy it rationally later."}],

  practiceQuestions: [
    {
      id: 'pq_scarcity_countdown_triggers_01',
      difficulty: 'beginner',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A hotel booking site shows: \"Only 1 room remaining at this price! 14 people are viewing this property right now!\" and a 10-minute timer counts down. What is the scientifically smartest first step?",
      scenarioText: "Your heart rate increases and you feel an urgent urge to click \"Book Now\" immediately.",
      explanation: "This combination of scarcity, social proof, and countdown timers is designed to induce physiological panic and bypass rational decision-making. Opening the page in an incognito window checks for client-side fake scarcity.",
      antidoteAdvice: "Pause, recognize the emotional panic, test the timer in an incognito window, and read customer reviews calmly.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Enter your credit card immediately before the other 14 people take the room.",
          text: "Enter your credit card immediately before the other 14 people take the room.",
          feedbackText: "Incorrect. This surrenders completely to the artificial urgency dark pattern.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Take a deep breath, open the URL in an incognito tab to see if the timer and stock change, and review the cancellation terms calmly.",
          text: "Take a deep breath, open the URL in an incognito tab to see if the timer and stock change, and review the cancellation terms calmly.",
          feedbackText: "Correct! This disarms the manipulation and protects your consumer agency.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Call 14 of your friends to tell them not to book the room.",
          text: "Call 14 of your friends to tell them not to book the room.",
          feedbackText: "Incorrect. The 14 people are often fabricated metrics.",
        }
      ],
    },
  ],

  reflectionPrompt: "What is the most expensive purchase you made in a rush that you would have avoided if you had waited just 24 hours?",
  tags: ['Mentalab Mind', 'consumer_advertising'],
  relatedTopics: [],
  seoTitle: `${"Scarcity & Countdown Triggers: Artificial Urgency & Loss Aversion"} | Mentalab Mind`,
  seoDescription: "A ubiquitous behavioral marketing tactic that fabricates artificial limits on time or quantity (e.g. countdown clocks, low stock banners) to induce panic and force impulsive purchases.",
  canonicalUrl: '/mind/consumer-advertising/scarcity-and-countdown-triggers',
  ogImageUrl: '/images/mind/scarcity-and-countdown-triggers.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Regulatory investigations (like the UK Competition and Markets Authority and India’s Central Consumer Protection Authority) have repeatedly revealed that many countdown clocks are deceptive \"dark patterns\" engineered to reset automatically upon page refresh. The stock counters are often hardcoded random number generators designed solely to induce physiological panic in the consumer.",
};

export const TOPIC_SCARCITY_COUNTDOWN_TRIGGERS_HINGLISH: MindTopicDetail = {
  ...TOPIC_SCARCITY_COUNTDOWN_TRIGGERS_EN,
  title: "Scarcity & Countdown Triggers: \"Sirf 2 Bache Hain\" Ka Darr",
  subtitle: "Robert Cialdini ki research: Kyu ticking timer aur \"Only 1 left\" dekh kar dimaag paagal ho jata hai.",
  shortDescription: "Artificial urgency aur FOMO: Websites kaise jhoothe timers aur limited stock dikha kar aapse turant payment karwati hain.",
  oneLineExplanation: "Aapko sochne ka waqt na mile, isliye ghadi ki sui tez chala di jati hai.",
  summary30s: "Dr. Robert Cialdini ne apni kitaab *Influence* me bataya ki jab koi cheez durlabh (scarce) hoti hai, to dimaag use 10 guna zyada keemti samajhne lagta hai. Websites is darr ka fayda uthati hain: \"Sale 5 minute me khatam!\", \"Sirf 1 seat bachi hai!\", aur \"20 log abhi dekh rahe hain!\"",
  coreConcept: "Ise kehte hain Loss Aversion. Insaan ko kuch paane ki khushi se 2.5 guna zyada chot kisi cheez ko khone par lagti hai. Jab timer chalta hai, to dimaag ko lagta hai \"deal chali jayegi\". Is ghabrahat me log galat date ki ticket book kar lete hain ya bekaar samaan khareed lete hain.",
  summary60s: "Government ki investigations me pata chala hai ki 90% websites par yeh countdown timers jhoothe hote hain (Dark Patterns). Page refresh karo to timer wapas 15 minute par chala jata hai! Yeh sab sirf customer ke dimaag me emergency create karne ke liye code kiya gaya hota hai.",
  quickTakeaways: ["Ticking timers dimaag ke logical hisse ko switch off karne ke liye banaye jate hain","\"Only 2 left\" aksar computer code ka jhooth hota hai (Dark Pattern)","Flash sale ke darr me aakar kabhi 2 minute me decision mat lo","Incognito mode me check karo, timer reset hote hi sach samne aa jayega"],
  howItWorks: "Product dekha -> Red color me timer dikha (\"Only 3 left!\") -> Dimaag me panic hua -> Bina reviews padhe jaldi se card swipe kiya -> Baad me pata chala cheez bekaar thi.",
  howToRespond: "Incognito Test: Page ko Incognito (Private) window me kholo. Agar timer wapas reset ho gaya, to samajh jao website jhooth bol rahi hai. Tab shanti se 2 ghante baad socho.",
  practiceQuestions: [
    {
      ...TOPIC_SCARCITY_COUNTDOWN_TRIGGERS_EN.practiceQuestions[0],
      prompt: "Flight book karte waqt screen par laal rang me likha aata hai: \"Sirf 1 seat bachi hai! 10 log dekh rahe hain!\" Kya karein?",
      explanation: "Ghabrane ke bajaye page ko private window me khol kar check karein aur date/time dhyan se verify karein.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Aankh band karke turant card details daal dena taaki koi aur na le le.",
          text: "Aankh band karke turant card details daal dena taaki koi aur na le le.",
          feedbackText: "Galat. Isse galat date book hone ka khatra hota hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Ek gehri saans lena, Incognito window me check karna aur dates dhyan se verify karke book karna.",
          text: "Ek gehri saans lena, Incognito window me check karna aur dates dhyan se verify karke book karna.",
          feedbackText: "Sahi! Yeh dark patterns ko neutralise karta hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Airline ko tweet karke daantna.",
          text: "Airline ko tweet karke daantna.",
          feedbackText: "Galat. Unproductive hai.",
        }
      ],
    },
  ],
  seoTitle: `${"Scarcity & Countdown Triggers: \"Sirf 2 Bache Hain\" Ka Darr"} | Mentalab Mind`,
  seoDescription: "Artificial urgency aur FOMO: Websites kaise jhoothe timers aur limited stock dikha kar aapse turant payment karwati hain.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_SCARCITY_COUNTDOWN_TRIGGERS_EN,
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

export const TOPIC_SCARCITY_COUNTDOWN_TRIGGERS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SCARCITY_COUNTDOWN_TRIGGERS_EN,
  hinglish: TOPIC_SCARCITY_COUNTDOWN_TRIGGERS_HINGLISH,
  hi: createLocalizedRecord('hi', "कृत्रिम अभाव और उलटी गिनती (Scarcity & Countdown Triggers)", "वेबसाइटों द्वारा कृत्रिम समय सीमा और कम स्टॉक दिखाकर उपभोक्ताओं में घबराहट उत्पन्न करने और त्वरित खरीदारी कराने की रणनीति।", ["अभाव का भय मस्तिष्क के तार्किक विश्लेषण को रोक देता है","उलटी गिनती वाले टाइमर अक्सर भ्रामक (Dark Patterns) होते हैं","निर्णय लेने से पहले इनकॉग्निटो मोड में टाइमर की सत्यता जांचें"]),
  gu: createLocalizedRecord('gu', "કૃત્રિમ અછત અને કાઉન્ટડાઉન (Scarcity Triggers)", "વેબસાઇટ્સ પર ટિકિંગ ટાઈમર અને ખોટો સ્ટોક બતાવીને ગ્રાહકોને ઉતાવળે ખરીદી કરાવવાની યુક્તિ.", ["ખોટી ઉતાવળથી બચો","કાઉન્ટડાઉન ટાઈમરની સત્યતા તપાસો","શાંતિથી નિર્ણય લો"]),
  mr: createLocalizedRecord('mr', "कृत्रिम टंचाई आणि काउंटडाऊन (Scarcity Triggers)", "वेबसाइट्सवर खोटे टायमर आणि मर्यादित साठा दाखवून ग्राहकांमध्ये भीती निर्माण करण्याचे विपणन तंत्र.", ["कृत्रिम टंचाईच्या जाळ्यात अडकू नका","खोट्या काउंटडाऊनपासून सावध रहा","घाईगडबडीत खरेदी टाळा"]),
  te: createLocalizedRecord('te', "కృత్రిమ కొరత మరియు కౌంట్‌డౌన్ ట్రిగ్గర్లు", "వెబ్‌సైట్లలో తప్పుడు టైమర్లు మరియు పరిమిత స్టాక్ చూపిస్తూ వినియోగదారులను భయపెట్టి కొనిపించే వ్యూహం.", ["కృత్రిమ అత్యవసరంలో పడవద్దు","కౌంట్‌డౌన్ టైమర్లను తనిఖీ చేయండి","ప్రశాంతంగా నిర్ణయం తీసుకోండి"]),
  ta: createLocalizedRecord('ta', "செயற்கை தட்டுப்பாடு மற்றும் கவுண்டவுன் (Scarcity Triggers)", "இணையதளங்களில் போலி டைமர்கள் மற்றும் குறைந்த இருப்பு காட்டி அவசர அவசரமாக வாங்க வைக்கும் உளவியல் தந்திரம்.", ["செயற்கை அவசரத்தை நம்பாதீர்கள்","டைமர்களின் உண்மைத்தன்மையை சோதிக்கவும்","அமைதியாக முடிவெடுங்கள்"]),
  kn: createLocalizedRecord('kn', "ಕೃತಕ ಕೊರತೆ ಮತ್ತು ಕೌಂಟ್‌ಡೌನ್ ತಂತ್ರಗಳು", "ವೆಬ್‌ಸೈಟ್‌ಗಳಲ್ಲಿ ಸುಳ್ಳು ಟೈಮರ್‌ಗಳು ಮತ್ತು ಸೀಮಿತ ಸ್ಟಾಕ್ ತೋರಿಸಿ ಗ್ರಾಹಕರನ್ನು ಆತುರದ ಖರೀದಿಗೆ ಪ್ರಚೋದಿಸುವ ತಂತ್ರ.", ["ಕೃತಕ ತುರ್ತುಸ್ಥಿತಿಗೆ ಒಳಗಾಗಬೇಡಿ","ಟೈಮರ್‌ಗಳ ಸತ್ಯಾಸತ್ಯತೆ ಪರೀಕ್ಷಿಸಿ","ಶಾಂತಚಿತ್ತದಿಂದ ಖರೀದಿಸಿ"]),
  ml: createLocalizedRecord('ml', "കൃത്രിമ ദൗർലഭ്യവും കൗണ്ട്ഡൗണും (Scarcity Triggers)", "വെബ്‌സൈറ്റുകളിൽ വ്യാജ ടൈമറുകളും പരിമിത സ്റ്റോക്കും കാണിച്ച് ഉപഭോക്താക്കളെ തിടുക്കത്തിൽ വാങ്ങിപ്പിക്കുന്ന രീതി.", ["കൃത്രിമ തിടുക്കത്തിൽ വീഴരുത്","കൗണ്ട്ഡൗൺ ടൈമറുകൾ പരിശോധിക്കുക","സമാധാനത്തോടെ തീരുമാനമെടുക്കുക"]),
  bn: createLocalizedRecord('bn', "কৃত্রিম সংকট এবং কাউন্টডাউন ফাঁদ (Scarcity Triggers)", "ওয়েবসাইটে ভুয়া টাইমার এবং সীমিত স্টকের ভীতি দেখিয়ে দ্রুত কেনাকাটা করতে বাধ্য করার চাতুরী।", ["কৃত্রিম তাড়াহুড়োয় পা দেবেন না","কাউন্টডাউন টাইমারের সত্যতা যাচাই করুন","ধৈর্য ধরে সিদ্ধান্ত নিন"]),
  pa: createLocalizedRecord('pa', "ਨਕਲੀ ਥੁੜ ਅਤੇ ਕਾਊਂਟਡਾਊਨ (Scarcity Triggers)", "ਵੈੱਬਸਾਈਟਾਂ ਤੇ ਝੂਠੇ ਟਾਈਮਰ ਅਤੇ ਘੱਟ ਸਟਾਕ ਦਿਖਾ ਕੇ ਗਾਹਕਾਂ ਵਿੱਚ ਘਬਰਾਹਟ ਪੈਦਾ ਕਰਕੇ ਖ਼ਰੀਦਦਾਰੀ ਕਰਵਾਉਣ ਦੀ ਚਾਲ।", ["ਨਕਲੀ ਕਾਹਲ ਤੋਂ ਬਚੋ","ਟਾਈਮਰਾਂ ਦੀ ਅਸਲੀਅਤ ਪਰਖੋ","ਸ਼ਾਂਤੀ ਨਾਲ ਫੈਸਲਾ ਲਓ"]),
  ur: createLocalizedRecord('ur', "مصنوعی قلت اور الٹی گنتی کے حربے (Scarcity Triggers)", "ویب سائٹس پر جھوٹے ٹائمرز اور محدود اسٹاک دکھا کر صارفین کو گھبراہٹ میں خریداری پر مجبور کرنے کا طریقہ۔", ["مصنوعی جلدی کے جال میں نہ آئیں","ٹائمر کی حقیقت چیک کریں","سکون سے فیصلہ کریں"]),
  or: createLocalizedRecord('or', "କୃତ୍ରିମ ଅଭାବ ଓ କାଉଣ୍ଟଡାଉନ୍ ଚକ୍ରାନ୍ତ (Scarcity Triggers)", "ୱେବସାଇଟ୍‌ରେ ନକଲି ଟାଇମର୍ ଓ ସୀମିତ ଷ୍ଟକ୍ ଦେଖାଇ ଗ୍ରାହକଙ୍କୁ ତରବରିଆ ଭାବେ କିଣିବାକୁ ବାଧ୍ୟ କରିବାର କୌଶଳ।", ["କୃତ୍ରିମ ବ୍ୟସ୍ତତାରୁ ଦୂରେଇ ରୁହନ୍ତୁ","ଟାଇମରର ସତ୍ୟତା ଯାଞ୍ଚ କରନ୍ତୁ","ଧୈର୍ଯ୍ୟର ସହ ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"]),
  as: createLocalizedRecord('as', "কৃত্ৰিম নাটনি আৰু কাউণ্টডাউনৰ জাল (Scarcity Triggers)", "ৱেবছাইটত ভুৱা টাইমাৰ আৰু সীমিত ষ্টক দেখুৱাই গ্ৰাহকক খৰখেদাকৈ ক্ৰয় কৰিবলৈ বাধ্য কৰোৱাৰ কৌশল।", ["কৃত্ৰিম খৰখেদাত নপৰিব","টাইমাৰৰ সত্যতা পৰীক্ষা কৰক","ধৈৰ্যৰে সিদ্ধান্ত লওক"]),
};
