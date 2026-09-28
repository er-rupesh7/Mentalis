import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_INFINITE_SCROLL_CESSATION_EN: MindTopicDetail = {
  id: 'infinite_scroll_cessation',
  categoryId: 'social_media_tech',
  slug: 'infinite-scroll-and-cessation-deficit',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 10,
  viewCount: 4000,
  shareCount: 330,
  bookmarkCount: 670,
  title: "Infinite Scroll & The Cessation Deficit: The Bottomless Bowl",
  subtitle: "Aza Raskin’s engineering regret and Brian Wansink’s bottomless soup bowl experiment applied to digital feeds.",
  shortDescription: "The UI/UX architecture that eliminates natural stopping cues, causing the brain to consume media indefinitely without registering cognitive satiety.",
  oneLineExplanation: "When the page never ends, your brain never gets the biological signal to stop.",

  summary30s: "Invented in 2006 by engineer Aza Raskin (who later publicly apologized for its societal impact), Infinite Scroll replaced pagination with an auto-loading feed. By deleting natural \"stopping cues\" (like the end of a page or chapter), platforms bypass the brain's executive pause mechanism, trapping users in multi-hour trance states.",
  coreConcept: "The psychology mirrors Brian Wansink’s famous Cornell University \"Bottomless Soup Bowl\" experiment: participants fed from bowls that imperceptibly refilled from beneath the table ate 73% more soup without feeling any fuller. In the digital realm, infinite scroll, auto-play videos, and pull-to-refresh create an artificial sensory loop where the brain never encounters a boundary to trigger self-reflection.",
  summary60s: "Executive self-control is metabolically expensive. In the real world, physical stopping cues (the last page of a newspaper, the closing credits of a movie) externalize the decision to stop. Infinite scroll systematically strips away every external stopping cue, forcing your exhausted prefrontal cortex to generate an internal interruption while submerged in dopamine-rich stimuli.",
  quickTakeaways: ["Infinite scroll deletes the natural stopping cues that trigger human self-reflection","The brain relies on external boundaries; without them, consumption increases 70%+","The feature was engineered to maximize screen time, not user satisfaction","Artificial stopping cues (app timers, greyscale mode, friction apps) restore cognitive control"],

  whyItHappens: "Evolutionary foraging mechanisms assume physical limits; our biology has no innate stopping reflex for an infinite, zero-friction resource.",
  evolutionaryMechanism: "Ancestral foragers stopped eating or searching when the berry bush was bare or the sun set; an endless bush never existed in evolutionary history.",

  howItWorks: "User reaches bottom of screen -> Script pre-loads 10 more items -> No pause or click required -> Working memory stays engrossed -> Dopamine loop continues -> 3 hours vanish unconsciously.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Book Pagination vs. Bottomless Algorithmic Feed",
    description: "How natural stopping boundaries protect executive cognitive resources.",
    analogySideA: {
      label: "Paginated Media (Stopping Cues)",
      detail: "End of Chapter 4 -> White space -> Visual pause -> Prefrontal cortex asks: \"Should I keep reading or go to bed?\"",
    },
    analogySideB: {
      label: "Infinite Scroll (Bottomless Feed)",
      detail: "Post 49 blends into Post 50 -> Zero interruption -> Brain remains in passive hypnotic consumption loop.",
    },
  },

  researchSummary: "Wansink, Painter & North (2005, Obesity Research) proved bottomless eating leads to massive unconscious overconsumption; Alter (2017, Irresistible) applied this directly to digital infinite-scroll mechanics.",
  references: [
    {
      id: 'ref_infinite_scroll_cessation_01',
      title: "Bottomless Bowls: Why Visual Cues of Quality May Influence Intake",
      citation: "Wansink, B., et al. (2005). Obesity Research, 13(1), 93–100.",
      authors: "Wansink, B., Painter, J. E., & North, J.",
      publicationYear: 2005,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1038/oby.2005.12",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_infinite_scroll_cessation_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Midnight Instagram Trance in Hyderabad",
      narrativeContext: "Zoya opened Instagram in Hyderabad at 11:00 PM to check a message from her cousin. At 1:45 AM, she was still flicking her thumb downward, watching random wedding dance reels and street food clips, with bloodshot eyes and dry contact lenses, feeling completely numb.",
      biasInAction: "Zoya was trapped by the cessation deficit: because Instagram never presented a stopping boundary or \"End of Content\" signpost, her tired brain never woke up from the auto-play trance.",
      optimalResponse: "Install a physical stopping cue: set a daily 20-minute app timer that locks the application, or turn the smartphone display to greyscale to strip visual dopamine rewards.",
      reflectionPrompt: "When was the last time you reached the \"end\" of an app and consciously decided you had consumed enough?",
    },
  ],

  examples: [
    {
      id: 'ex_infinite_scroll_cessation_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Midnight Instagram Trance in Hyderabad",
      description: "Zoya opened Instagram in Hyderabad at 11:00 PM to check a message from her cousin. At 1:45 AM, she was still flicking her thumb downward, watching ran...",
      takeaway: "Infinite scroll deletes the natural stopping cues that trigger human self-reflection",
    },
  ],

  howToRecognize: "The zombie flick: rapidly sliding your thumb upward on a glass screen with an open mouth and unfocused eyes, unable to recall the last 5 posts you just saw.",
  whereYouEncounterIt: "TikTok, Instagram Reels, YouTube Shorts, Twitter timelines, and online shopping endless grids.",
  commonMisconceptions: "Myth: \"I just lack personal willpower and self-discipline.\" Fact: Infinite scroll was specifically designed by behavioral scientists to defeat human willpower by removing cognitive choice-points.",
  limitationsAndControversies: "For brief reference searches or large photo libraries, continuous scroll is functionally convenient; the pathology is using it for entertainment discovery feeds.",

  howToRespond: "Construct Artificial Friction: Delete social apps from your phone and access them only through mobile web browsers (which reload slowly and lack auto-play), or enable Greyscale Mode.",
  psychologicalDefenses: [{"title":"The Greyscale Disenchantment","instruction":"Turn your phone screen to black-and-white (Greyscale). Without bright neon colors, infinite scrolling loses 60% of its hypnotic dopamine appeal."},{"title":"The 1-Scroll Rule","instruction":"Decide in advance: \"I will open this app, check notifications, scroll 5 posts, and close it immediately regardless of what appears next.\""}],

  practiceQuestions: [
    {
      id: 'pq_infinite_scroll_cessation_01',
      difficulty: 'beginner',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "Why do people routinely watch 40 short video clips in a row on social media when they would never watch a single 40-minute movie?",
      scenarioText: "The individual planned to check their phone for 2 minutes before bed.",
      explanation: "The cessation deficit eliminates natural stopping points, whereas a 40-minute movie requires a deliberate conscious choice to begin and continues without micro-reward variability.",
      antidoteAdvice: "Create external stopping points using hard hardware timers or grayscale screen filters.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Short clips have superior cinematic and artistic value compared to movies.",
          text: "Short clips have superior cinematic and artistic value compared to movies.",
          feedbackText: "Incorrect. The dynamic is driven by friction-free auto-play and variable reward mechanics, not art.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "The elimination of stopping cues and continuous variable micro-dopamine rewards bypass executive decision-making.",
          text: "The elimination of stopping cues and continuous variable micro-dopamine rewards bypass executive decision-making.",
          feedbackText: "Correct! This is the precise psychological engine of the Cessation Deficit.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Human brains can no longer comprehend stories longer than 60 seconds.",
          text: "Human brains can no longer comprehend stories longer than 60 seconds.",
          feedbackText: "Incorrect. Attention span is context-dependent, not fundamentally destroyed.",
        }
      ],
    },
  ],

  reflectionPrompt: "If every social media platform reintroduced a mandatory \"Click here for Page 2\" button, how would your daily screen time change?",
  tags: ['Mentalab Mind', 'social_media_tech'],
  relatedTopics: [],
  seoTitle: `${"Infinite Scroll & The Cessation Deficit: The Bottomless Bowl"} | Mentalab Mind`,
  seoDescription: "The UI/UX architecture that eliminates natural stopping cues, causing the brain to consume media indefinitely without registering cognitive satiety.",
  canonicalUrl: '/mind/social-media-tech/infinite-scroll-and-cessation-deficit',
  ogImageUrl: '/images/mind/infinite-scroll-and-cessation-deficit.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Executive self-control is metabolically expensive. In the real world, physical stopping cues (the last page of a newspaper, the closing credits of a movie) externalize the decision to stop. Infinite scroll systematically strips away every external stopping cue, forcing your exhausted prefrontal cortex to generate an internal interruption while submerged in dopamine-rich stimuli.",
};

export const TOPIC_INFINITE_SCROLL_CESSATION_HINGLISH: MindTopicDetail = {
  ...TOPIC_INFINITE_SCROLL_CESSATION_EN,
  title: "Infinite Scroll: Kabhi Na Khatam Hone Wali Thali",
  subtitle: "Kyu Reels aur Shorts dekhte waqt pata hi nahi chalta ki kab 2 ghante beet gaye.",
  shortDescription: "Aza Raskin ka UI design: Stopping cues ko khatam karke dimaag ko bina ruke content consume karne par majboor karna.",
  oneLineExplanation: "Jab page ka koi ant hi nahi hota, to dimaag ko rukne ka signal kabhi nahi milta.",
  summary30s: "2006 me Aza Raskin ne Infinite Scroll banaya tha, jiske liye unhone baad me maafi maangi. Pehle websites par page 1, page 2 hota tha, jisse dimaag ko rukne ka mauka milta tha (Stopping cue). Infinite scroll ne is rukne ke signal ko hamesha ke liye mita diya.",
  coreConcept: "Cornell University ka ek famous experiment tha: \"Bottomless Soup Bowl\". Unhone ek aisi soup ki thali banayi jo table ke neeche se chupke se refill hoti rehti thi. Logo ne 73% zyada soup pi liya aur unhe pata bhi nahi chala! Reels aur Shorts wahi bottomless soup bowl hain.",
  summary60s: "Insaan ka dimaag thakne ke baad faisla nahi le sakta. Agar movie khatam hoti hai to credits aate hain, jisse dimaag kehta hai \"chalo ab so jao\". Lekin Reels me ek video ke baad doosra automatically chalu ho jata hai. Dimaag ko rukne ka koi bahana nahi milta.",
  quickTakeaways: ["Infinite scroll aapki kamzori nahi, balki engineers ka banaya gaya deliberate trap hai","Stopping cues ke bina dimaag unconscious robot ki tarah scroll karta rehta hai","Phone ko Greyscale (Black & White) karne se reels ka nasha turant toot jata hai","App timers aur web browser use karna hi is endless feed ka tod hai"],
  howItWorks: "Video khatam hone se pehle doosra load hua -> Koi button nahi dabana pada -> Dimaag hypnosis me chala gaya -> Pata chala raat ke 2 baj gaye.",
  howToRespond: "Phone ko Black & White (Greyscale) mode par daal do. Jab colorful reels feeki dikhengi, to dimaag ka dopamine spike 70% gir jayega aur phone rakhne ka mann karega.",
  practiceQuestions: [
    {
      ...TOPIC_INFINITE_SCROLL_CESSATION_EN.practiceQuestions[0],
      prompt: "Aap 5 minute ke liye Insta kholte hain aur 1 ghante tak Reels scroll karte reh jate hain. Psychology ke mutabiq asal wajah kya hai?",
      explanation: "Stopping cue na hone ki wajah se dimaag ko rukne ka biological signal nahi milta.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Aapke andar will-power bilkul zero ho chuki hai.",
          text: "Aapke andar will-power bilkul zero ho chuki hai.",
          feedbackText: "Galat. Yeh design specifically will-power ko bypass karne ke liye banaya gaya hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Infinite scroll ne rukne ke natural signals (Stopping cues) ko mita diya hai.",
          text: "Infinite scroll ne rukne ke natural signals (Stopping cues) ko mita diya hai.",
          feedbackText: "Sahi! Bottomless design dimaag ko trance me daal deta hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Phone aapko hypnotise karne wali radiation chhod raha tha.",
          text: "Phone aapko hypnotise karne wali radiation chhod raha tha.",
          feedbackText: "Galat. Yeh psychological engineering hai, radiation nahi.",
        }
      ],
    },
  ],
  seoTitle: `${"Infinite Scroll: Kabhi Na Khatam Hone Wali Thali"} | Mentalab Mind`,
  seoDescription: "Aza Raskin ka UI design: Stopping cues ko khatam karke dimaag ko bina ruke content consume karne par majboor karna.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_INFINITE_SCROLL_CESSATION_EN,
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

export const TOPIC_INFINITE_SCROLL_CESSATION: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_INFINITE_SCROLL_CESSATION_EN,
  hinglish: TOPIC_INFINITE_SCROLL_CESSATION_HINGLISH,
  hi: createLocalizedRecord('hi', "अनंत स्क्रॉल और विराम शून्यता (Infinite Scroll)", "स्वाभाविक ठहराव और पृष्ठ सीमाओं को समाप्त करके मस्तिष्क को अंतहीन सामग्री उपभोग में फंसाने वाली डिजिटल संरचना।", ["अनंत स्क्रॉल स्वाभाविक विराम संकेतों को मिटा देता है","यह अनपेक्षित अत्यधिक उपभोग को 70% तक बढ़ा देता है","ग्रेस्केल मोड और स्क्रीन टाइमर प्रभावी समाधान हैं"]),
  gu: createLocalizedRecord('gu', "અનંત સ્ક્રોલ અને વિરામનો અભાવ (Infinite Scroll)", "અંતહીન ફીડ દ્વારા વપરાશકર્તાઓને સતત સ્ક્રોલિંગમાં ફસાવી રાખતી ડિજિટલ યુક્તિ.", ["વિરામના સંકેતો ગાયબ છે","સમયની બરબાદી અટકાવો","સ્ક્રીન ટાઇમ મર્યાદિત કરો"]),
  mr: createLocalizedRecord('mr', "अनंत स्क्रोल आणि थांबण्याचा अभाव (Infinite Scroll)", "थांबण्याचे नैसर्गिक संकेत नष्ट करून मेंदूला सतत मोबाईल वापरण्यात अडकवून ठेवणारी रचना.", ["थांबण्याचे संकेत नष्ट झाले आहेत","वेळेचा अपव्यय टाळा","मोबाईलचा वापर मर्यादित ठेवा"]),
  te: createLocalizedRecord('te', "అనంతమైన స్క్రోల్ మరియు విరామ రాహిత్యం", "సహజమైన విరామాలను తొలగించి వినియోగదారులను నిరంతరం స్క్రోలింగ్‌లో బంధించే డిజిటల్ వ్యూహం.", ["సహజ విరామాలు లేకపోవడం ప్రమాదం","సమయాన్ని వృథా చేయవద్దు","గ్రేస్కేల్ మోడ్ ఉపయోగించండి"]),
  ta: createLocalizedRecord('ta', "முடிவில்லா உருளல் மற்றும் நிறுத்தக் குறைபாடு (Infinite Scroll)", "இயற்கையான நிறுத்தங்களை அழித்து மனித மனதை தொடர்ச்சியான பயன்பாட்டில் அடிமையாக்கும் டிஜிட்டல் வடிவமைப்பு.", ["இயற்கை நிறுத்தங்கள் அழிக்கப்படுகின்றன","நேரத்தை வீணாக்காதீர்கள்","திரை நேரத்தை கட்டுப்படுத்துங்கள்"]),
  kn: createLocalizedRecord('kn', "ಅನಂತ ಸ್ಕ್ರೋಲ್ ಮತ್ತು ನಿಲುಗಡೆಯ ಕೊರತೆ", "ನೈಸರ್ಗಿಕ ನಿಲುಗಡೆಗಳನ್ನು ಅಳಿಸಿಹಾಕಿ ಮೆದುಳನ್ನು ನಿರಂತರ ಬಳಕೆಯಲ್ಲಿ ಸಿಲುಕಿಸುವ ಡಿಜಿಟಲ್ ತಂತ್ರಜ್ಞಾನ.", ["ನೈಸರ್ಗಿಕ ನಿಲುಗಡೆಗಳಿಲ್ಲ","ಸಮಯ ವ್ಯರ್ಥ ಮಾಡಬೇಡಿ","ಗ್ರೇಸ್ಕೇಲ್ ಮೋಡ್ ಬಳಸಿ"]),
  ml: createLocalizedRecord('ml', "അനന്തമായ സ്ക്രോളിംഗും വിരാമമില്ലായ്മയും", "സ്വാഭാവിക വിരാമങ്ങളെ ഇല്ലാതാക്കി ഉപയോക്താക്കളെ നിരന്തരം സ്ക്രീനിൽ തളച്ചിടുന്ന ഡിജിറ്റൽ രൂപകൽപ്പന.", ["വിരാമ സൂചനകൾ അപ്രത്യക്ഷമാകുന്നു","സമയം പാഴാക്കരുത്","ആപ്പ് ടൈമറുകൾ ഉപയോഗിക്കുക"]),
  bn: createLocalizedRecord('bn', "অনন্ত স্ক্রোল এবং বিরতিহীনতা (Infinite Scroll)", "স্বাভাবিক বিরতি ও সীমানা মুছে ফেলে মানুষকে অন্তহীন স্ক্রোলিংয়ে আটকে রাখার প্রযুক্তিগত নকশা।", ["বিরতির সংকেত মুছে ফেলা হয়েছে","সময়ের অপচয় রোধ করুন","স্ক্রিন টাইম নিয়ন্ত্রণ করুন"]),
  pa: createLocalizedRecord('pa', "ਬੇਅੰਤ ਸਕ੍ਰੋਲ ਅਤੇ ਠਹਿਰਾਅ ਦੀ ਘਾਟ (Infinite Scroll)", "ਕੁਦਰਤੀ ਠਹਿਰਾਅ ਨੂੰ ਖ਼ਤਮ ਕਰਕੇ ਦਿਮਾਗ ਨੂੰ ਲਗਾਤਾਰ ਮੋਬਾਈਲ ਵਰਤੋਂ ਵਿੱਚ ਉਲਝਾ ਕੇ ਰੱਖਣ ਵਾਲੀ ਚਾਲ।", ["ਰੁਕਣ ਦੇ ਸੰਕੇਤ ਗਾਇਬ ਹਨ","ਸਮਾਂ ਬਰਬਾਦ ਨਾ ਕਰੋ","ਸਕ੍ਰੀਨ ਸਮਾਂ ਸੀਮਤ ਕਰੋ"]),
  ur: createLocalizedRecord('ur', "لامحدود اسکرول اور وقفے کا فقدان (Infinite Scroll)", "قدرتی رکاوٹوں کو ختم کر کے صارفین کو مسلسل اسکرولنگ میں جکڑے رکھنے کا ڈیجیٹل ڈیزائن۔", ["رکنے کے اشارے مٹا دیے گئے ہیں","وقت کا ضیاع روکیں","اسکرین کا وقت محدود کریں"]),
  or: createLocalizedRecord('or', "ଅସୀମିତ ସ୍କ୍ରୋଲ୍ ଓ ବିରାମହୀନତା (Infinite Scroll)", "ସ୍ୱାଭାବିକ ବିରାମକୁ ନଷ୍ଟ କରି ବ୍ୟବହାରକାରୀଙ୍କୁ ଅନବରତ ମୋବାଇଲ୍ ବ୍ୟବହାରରେ ବାନ୍ଧି ରଖିବାର କୌଶଳ।", ["ବିରାମ ସଙ୍କେତ ନାହିଁ","ସମୟ ନଷ୍ଟ କରନ୍ତୁ ନାହିଁ","ସ୍କ୍ରିନ୍ ସମୟ ସୀମିତ କରନ୍ତୁ"]),
  as: createLocalizedRecord('as', "অনন্ত স্ক্ৰ’ল আৰু বিৰতিহীনতা (Infinite Scroll)", "স্বাভাৱিক বিৰতি নোহোৱা কৰি মানুহক অহৰহ স্ক্ৰ’লিঙত আৱদ্ধ কৰি ৰখাৰ ডিজিটেল কৌশল।", ["বিৰতিৰ সংকেত নাইকিয়া কৰা হৈছে","সময়ৰ অপচয় ৰোধ কৰক","স্ক্ৰীণ টাইম নিয়ন্ত্ৰণ কৰক"]),
};
