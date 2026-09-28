import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_SECOND_ORDER_THINKING_EN: MindTopicDetail = {
  id: 'second_order_thinking',
  categoryId: 'critical_thinking',
  slug: 'second-order-thinking',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 5,
  viewCount: 3400,
  shareCount: 255,
  bookmarkCount: 545,
  title: "Second-Order Thinking: And Then What?",
  subtitle: "Howard Marks and Garrett Hardin on anticipating downstream consequences that blind immediate thinkers.",
  shortDescription: "A mental model that looks past the immediate, obvious effects of an action to predict the subsequent second, third, and fourth-order systemic consequences over time.",
  oneLineExplanation: "First-order thinkers look for immediate gratification; second-order thinkers ask: \"And then what?\"",

  summary30s: "Popularized by legendary investor Howard Marks and ecologist Garrett Hardin, Second-Order Thinking separates amateur problem solvers from strategic masters. First-order thinking is simple, fast, and seductive: \"I am hungry, so I will eat a box of doughnuts.\" Second-order thinking asks: \"And then what happens 2 hours later to my blood sugar, mood, and fat storage?\"",
  coreConcept: "Complex adaptive systems always push back. Every intervention produces ripples of unintended consequences. In first-order thinking, solving a problem creates an immediate apparent win; in second-order reality, the feedback loops, human counter-reactions, and equilibrium shifts often make the ultimate outcome far worse than the original problem.",
  summary60s: "Historical examples abound: the British government in colonial Delhi offered a bounty for dead cobras to eradicate snakes (First Order). Citizens began breeding cobras in secret to collect cash (Second Order). When the bounty was canceled, breeders released thousands of cobras into Delhi streets, multiplying the snake population (Third Order). This is the famous Cobra Effect.",
  quickTakeaways: ["First-order thinking solves for the immediate moment; second-order thinking solves for systemic stability","The Cobra Effect: well-intentioned short-term policies frequently exacerbate the core problem","Always ask the golden question: \"And then what?\" across 10 minutes, 10 months, and 10 years","Discount immediate dopamine in exchange for long-term compounding systemic advantages"],

  whyItHappens: "Hyperbolic discounting and cognitive ease: the human brain evolved to prioritize immediate caloric and safety rewards over distant probabilistic outcomes.",
  evolutionaryMechanism: "In ancestral foraging environments, food spoiled within hours and life expectancy was short; long-term second-order calculations offered low evolutionary return.",

  howItWorks: "Problem encountered -> First-order solution applied -> Immediate relief felt -> System reacts to new incentive -> Unintended downstream consequence strikes -> Situation worsens.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "First-Order Shortcut vs. Second-Order Loop",
    description: "Garrett Hardin’s systemic consequence cascade.",
    analogySideA: {
      label: "First-Order Thinking (Fast & Blind)",
      detail: "\"Rent is too expensive in Mumbai! Let's cap rent at ₹15,000!\" -> Immediate tenant cheers; zero long-term analysis.",
    },
    analogySideB: {
      label: "Second-Order Thinking (Systemic)",
      detail: "\"Landlords stop maintaining buildings -> Developers stop building new housing -> Extreme housing shortage & black market emerge!\"",
    },
  },

  researchSummary: "Hardin (1968, Science) and Marks (2011, The Most Important Thing) detailed the mathematical and systemic failures that occur when dynamic human reactions are ignored in policy and capital allocation.",
  references: [
    {
      id: 'ref_second_order_thinking_01',
      title: "The Most Important Thing: Uncommon Sense for the Thoughtful Investor",
      citation: "Marks, H. (2011). Columbia University Press.",
      authors: "Marks, H. & Hardin, G.",
      publicationYear: 2011,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.7312/mark15360",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_second_order_thinking_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Bengaluru Traffic Flyover Paradox",
      narrativeContext: "To solve traffic jams at a major Silk Board junction in Bengaluru, authorities spent ₹400 Crores building a 4-lane elevated flyover. Within 18 months, induced demand caused 80,000 additional cars to enter the corridor, making gridlock worse than before the flyover was constructed.",
      biasInAction: "City planners used first-order thinking (more asphalt = less traffic), completely ignoring the second-order reality of induced traffic demand.",
      optimalResponse: "Run a 3-step systemic projection: \"If we build this, who changes their commute? Does it incentivize car ownership or public transit usage over a 5-year horizon?\"",
      reflectionPrompt: "What is a quick-fix solution you applied to your schedule, health, or finances that ended up creating three bigger problems later?",
    },
  ],

  examples: [
    {
      id: 'ex_second_order_thinking_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Bengaluru Traffic Flyover Paradox",
      description: "To solve traffic jams at a major Silk Board junction in Bengaluru, authorities spent ₹400 Crores building a 4-lane elevated flyover. Within 18 months,...",
      takeaway: "First-order thinking solves for the immediate moment; second-order thinking solves for systemic stability",
    },
  ],

  howToRecognize: "Celebrating a quick victory without asking how other people or systems will adapt to your new rule or decision.",
  whereYouEncounterIt: "Public policy design, corporate incentive structures, parenting discipline, software architecture, and personal investing.",
  commonMisconceptions: "Myth: \"Second-order thinking causes analysis paralysis.\" Fact: It takes only 90 seconds to ask \"And then what?\" three consecutive times before executing an irreversible decision.",
  limitationsAndControversies: "In genuine life-threatening emergencies (e.g. a house fire or cardiac arrest), first-order immediate action is mandatory; second-order analysis must wait.",

  howToRespond: "The 10/10/10 Rule: Before finalizing any major decision, ask: How will I feel about this in 10 minutes? In 10 months? In 10 years?",
  psychologicalDefenses: [{"title":"The \"And Then What?\" Cadence","instruction":"Whenever proposing a solution, force yourself to write three sequential answers to \"And then what happens next?\""},{"title":"Perverse Incentive Simulation","instruction":"Assume people will exploit your new policy or rule in the most selfish way possible; how will they game it?"}],

  practiceQuestions: [
    {
      id: 'pq_second_order_thinking_01',
      difficulty: 'intermediate',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A manager notices team members are skipping unit tests to meet deadlines. She introduces a new policy: \"Developers will receive a ₹5,000 cash bonus for every 100 bug-free unit tests committed.\" What is the predicted second-order consequence?",
      scenarioText: "The manager expects test coverage to improve and software quality to skyrocket.",
      explanation: "First-order thinking expects more tests. Second-order thinking predicts engineers will game the incentive by writing hundreds of trivial, meaningless tests (e.g. testing `1 == 1`) to maximize cash bonuses, degrading real quality.",
      antidoteAdvice: "Incentivize holistic outcomes (e.g. production uptime and customer satisfaction) rather than easily manipulated activity metrics.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Software defects will drop to zero and the company will save millions.",
          text: "Software defects will drop to zero and the company will save millions.",
          feedbackText: "Incorrect. This is naive first-order wishful thinking.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Engineers will write hundreds of superficial, trivial tests to collect cash bonuses without improving actual code safety.",
          text: "Engineers will write hundreds of superficial, trivial tests to collect cash bonuses without improving actual code safety.",
          feedbackText: "Correct! Campbell’s Law and second-order thinking predict incentive gaming.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "All engineers will immediately resign in anger.",
          text: "All engineers will immediately resign in anger.",
          feedbackText: "Incorrect. They will happily accept the free money.",
        }
      ],
    },
  ],

  reflectionPrompt: "What shortcut are you currently taking in your daily work that is quietly creating massive technical or emotional debt for your future self?",
  tags: ['Mentalab Mind', 'critical_thinking'],
  relatedTopics: [],
  seoTitle: `${"Second-Order Thinking: And Then What?"} | Mentalab Mind`,
  seoDescription: "A mental model that looks past the immediate, obvious effects of an action to predict the subsequent second, third, and fourth-order systemic consequences over time.",
  canonicalUrl: '/mind/critical-thinking/second-order-thinking',
  ogImageUrl: '/images/mind/second-order-thinking.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Historical examples abound: the British government in colonial Delhi offered a bounty for dead cobras to eradicate snakes (First Order). Citizens began breeding cobras in secret to collect cash (Second Order). When the bounty was canceled, breeders released thousands of cobras into Delhi streets, multiplying the snake population (Third Order). This is the famous Cobra Effect.",
};

export const TOPIC_SECOND_ORDER_THINKING_HINGLISH: MindTopicDetail = {
  ...TOPIC_SECOND_ORDER_THINKING_EN,
  title: "Second-Order Thinking: \"Uske Baad Kya?\" Sochna Seekhein",
  subtitle: "Howard Marks ki strategy: Aam log sirf turant ka fayda dekhte hain, par genius log agle 3 kadam aage sochte hain.",
  shortDescription: "First vs Second-Order Thinking: Short-term solution kaise long-term me bada sir-dard ban jata hai (The Cobra Effect).",
  oneLineExplanation: "Pehle kadam par sab khush hote hain, par teesre kadam par asli toofan aata hai.",
  summary30s: "Wall Street ke legendary investor Howard Marks ne kaha ki aam log First-Order Thinking karte hain: \"Mujhe bhookh lagi hai, main chocolate kha leta hu.\" Second-Order thinker poochta hai: \"Iske baad kya? 2 ghante baad sugar crash hoga, neend aayegi aur weight badhega!\"",
  coreConcept: "Angrezon ke zamane me Delhi me saanp bohot the. Sarkar ne ailan kiya: \"Jo mara hua cobra layega use inaam milega\" (First Order). Logo ne ghar me cobra paalna shuru kar diya taaki inaam le sakein (Second Order)! Sarkar ne scheme band ki to logo ne saare saanp sadak par chhod diye (Third Order)! Saanp pehle se double ho gaye. Ise kehte hain Cobra Effect.",
  summary60s: "Life me har quick-fix ka ek reaction hota hai. Agar aap thakawat door karne ke liye roz 5 cup coffee peete ho (First order: energy badhi), to raat ko neend nahi aayegi, agle din double thakawat hogi aur cortisol badhega (Second order). Genius log hamesha poochte hain: \"And then what?\"",
  quickTakeaways: ["First-order thinking aam hoti hai, second-order thinking hi strategic master banati hai","Cobra Effect: Bina soche banaye gaye rules problem ko 10 guna bada kar dete hain","Hamesha ek golden question poocho: \"Uske baad kya hoga?\"","Short-term sukoon ke peeche mat bhago, long-term stability dekho"],
  howItWorks: "Problem aayi -> Quick shortcut lagaya -> 5 minute ka relief mila -> System ne ulta react kiya -> 6 mahine baad pehle se badi museebat ban gayi.",
  howToRespond: "10/10/10 Rule: Koi bhi bada faisla lene se pehle socho: 10 minute baad kaisa lagega? 10 mahine baad kya asar hoga? Aur 10 saal baad iska kya anjaam hoga?",
  practiceQuestions: [
    {
      ...TOPIC_SECOND_ORDER_THINKING_EN.practiceQuestions[0],
      prompt: "Company ne rule banaya: \"Jo developer jitne zyada unit tests likhega, use ₹5,000 bonus milega.\" Second-order thinking ke mutabiq kya hoga?",
      explanation: "Developers bonus ke chakkar me faltu aur bekaar tests likhne lagenge jisse code ki quality improve nahi hogi balki time waste hoga.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Software ke saare bugs hamesha ke liye khatam ho jayenge.",
          text: "Software ke saare bugs hamesha ke liye khatam ho jayenge.",
          feedbackText: "Galat. Yeh naive first-order soch hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Engineers bonus lene ke liye bekaar aur easy tests ki bheed laga denge (Incentive gaming).",
          text: "Engineers bonus lene ke liye bekaar aur easy tests ki bheed laga denge (Incentive gaming).",
          feedbackText: "Sahi! Yahi second-order consequence ka textbook example hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Company ke saare computers crash ho jayenge.",
          text: "Company ke saare computers crash ho jayenge.",
          feedbackText: "Galat.",
        }
      ],
    },
  ],
  seoTitle: `${"Second-Order Thinking: \"Uske Baad Kya?\" Sochna Seekhein"} | Mentalab Mind`,
  seoDescription: "First vs Second-Order Thinking: Short-term solution kaise long-term me bada sir-dard ban jata hai (The Cobra Effect).",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_SECOND_ORDER_THINKING_EN,
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

export const TOPIC_SECOND_ORDER_THINKING: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SECOND_ORDER_THINKING_EN,
  hinglish: TOPIC_SECOND_ORDER_THINKING_HINGLISH,
  hi: createLocalizedRecord('hi', "द्वितीय-क्रम चिंतन (Second-Order Thinking)", "किसी निर्णय के केवल तात्कालिक परिणामों को देखने के बजाय उसके दीर्घकालिक, अप्रत्यक्ष और प्रणालीगत प्रभावों का विश्लेषण करने का मॉडल।", ["तात्कालिक लाभ अक्सर दीर्घकालिक संकटों को जन्म देते हैं","कोबरा प्रभाव (Cobra Effect) से सीखें और प्रोत्साहन संरचनाओं को समझें","हमेशा स्वर्णिम प्रश्न पूछें: \"और फिर उसके बाद क्या?\""]),
  gu: createLocalizedRecord('gu', "સેકન્ડ-ઓર્ડર થિંકિંગ (દૂરંદેશી વિચારસરણી)", "માત્ર તાત્કાલિક ફાયદો જોવાને બદલે ભવિષ્યના દૂરગામી પરિણામો વિચારવાની કળા.", ["તાત્કાલિક ફાયદાની લાલચ છોડો","કોબ્રા ઇફેક્ટ સમજો","હંમેશા પૂછો: \"આના પછી શું થશે?\""]),
  mr: createLocalizedRecord('mr', "द्वितीय-स्तरीय विचार (Second-Order Thinking)", "फक्त तात्काळ फायद्याचा विचार न करता भविष्यातील दूरगामी परिणामांचा अंदाज घेण्याची विचारसरणी.", ["तात्पुरत्या फायद्याला भुलू नका","कोब्रा इफेक्ट लक्षात ठेवा","\"यानंतर काय?\" हा प्रश्न विचारा"]),
  te: createLocalizedRecord('te', "రెండవ-స్థాయి ఆలోచన (Second-Order Thinking)", "కేవలం తక్షణ ప్రయోజనాలను మాత్రమే కాకుండా దీర్ఘకాలిక పర్యవసానాలను అంచనా వేసే విధానం.", ["తక్షణ లాభాల కోసం వెంపర్లాడవద్దు","కోబ్రా ఎఫెక్ట్ గ్రహించండి","\"ఆ తర్వాత ఏమిటి?\" అని ప్రశ్నించండి"]),
  ta: createLocalizedRecord('ta', "இரண்டாம் நிலை சிந்தனை (Second-Order Thinking)", "உடனடி நன்மைகளை மட்டும் பார்க்காமல் எதிர்கால பின்விளைவுகளை கணிக்கும் ஆழமான சிந்தனை முறை.", ["உடனடி லாபத்தை மட்டும் பார்க்காதீர்கள்","கோப்ரா விளைவை புரிந்து கொள்ளுங்கள்","\"அதன் பிறகு என்ன?\" என்று கேளுங்கள்"]),
  kn: createLocalizedRecord('kn', "ದ್ವಿತೀಯ-ಹಂತದ ಚಿಂತನೆ (Second-Order Thinking)", "ಕೇವಲ ತಕ್ಷಣದ ಲಾಭವನ್ನು ನೋಡದೆ ಭವಿಷ್ಯದ ದೀರ್ಘಕಾಲಿಕ ಪರಿಣಾಮಗಳನ್ನು ಊಹಿಸುವ ವಿವೇಚನಾಶೀಲ ಕಲೆ.", ["ತಕ್ಷಣದ ಆಕರ್ಷಣೆಗೆ ಒಳಗಾಗಬೇಡಿ","ಕೋಬ್ರಾ ಎಫೆಕ್ಟ್ ಅರಿಯಿರಿ","\"ಆಮೇಲೆ ಏನಾಗುತ್ತದೆ?\" ಎಂದು ಪ್ರಶ್ನಿಸಿ"]),
  ml: createLocalizedRecord('ml', "രണ്ടാം ഘട്ട ചിന്ത (Second-Order Thinking)", "ഉടനടിയുള്ള ഗുണങ്ങൾക്കപ്പുറം ഭാവിലുണ്ടാകുന്ന ദൂരവ്യാപകമായ പ്രത്യാഘാതങ്ങൾ മുൻകൂട്ടി കാണുന്ന രീതി.", ["ക്ഷണിക ലാഭം മാത്രം നോക്കരുത്","കോബ്ര ഇഫക്റ്റ് മനസ്സിലാക്കുക","\"അതിനുശേഷം എന്ത്?\" എന്ന് ചോദിക്കുക"]),
  bn: createLocalizedRecord('bn', "দ্বিতীয়-ক্রম চিন্তা (Second-Order Thinking)", "কেবল তাৎক্ষণিক ফলাফলের ওপর নির্ভর না করে দীর্ঘমেয়াদী সামগ্রিক প্রতিক্রিয়া বিশ্লেষণের মানসিক মডেল।", ["তাৎক্ষণিক লাভের ফাঁদ এড়িয়ে চলুন","কোবরা ইফেক্ট সম্পর্কে সচেতন থাকুন","সবসময় জিজ্ঞেস করুন: \"তারপর কী?\""]),
  pa: createLocalizedRecord('pa', "ਦੂਜੇ-ਦਰਜੇ ਦੀ ਸੋਚ (Second-Order Thinking)", "ਸਿਰਫ਼ ਤੁਰੰਤ ਦੇ ਫ਼ਾਇਦੇ ਦੀ ਬਜਾਏ ਭਵਿੱਖ ਵਿੱਚ ਨਿਕਲਣ ਵਾਲੇ ਅਸਲ ਨਤੀਜਿਆਂ ਦਾ ਅੰਦਾਜ਼ਾ ਲਾਉਣ ਦੀ ਵਿਧੀ।", ["ਤੁਰੰਤ ਦੇ ਫ਼ਾਇਦੇ ਪਿੱਛੇ ਨਾ ਭੱਜੋ","ਕੋਬਰਾ ਇਫੈਕਟ ਤੋਂ ਸਿੱਖੋ","ਹਮੇਸ਼ਾ ਪੁੱਛੋ: \"ਇਸ ਤੋਂ ਬਾਅਦ ਕੀ?\""]),
  ur: createLocalizedRecord('ur', "دوسرے درجے کی سوچ (Second-Order Thinking)", "محض فوری نتائج دیکھنے کے بجائے طویل المدتی اور دور رس اثرات کا جائزہ لینے کا ذہنی ماڈل۔", ["فوری فائدے کے فریب سے بچیں","کوبرا اثر سے سبق لیں","ہمیشہ پوچھیں: \"اس کے بعد کیا ہوگا؟\""]),
  or: createLocalizedRecord('or', "ଦ୍ୱିତୀୟ-ସ୍ତରୀୟ ଚିନ୍ତାଧାରା (Second-Order Thinking)", "କେବଳ ତତକ୍ଷଣାତ୍ ଲାଭ ନଦେଖି ଭବିଷ୍ୟତର ଦୂରଗାମୀ ପ୍ରଭାବ ଆକଳନ କରିବାର ମାନସିକ କଳା।", ["ତତକ୍ଷଣାତ୍ ଫାଇଦା ପଛରେ ଗୋଡ଼ାନ୍ତୁ ନାହିଁ","କୋବ୍ରା ପ୍ରଭାବ ବୁଝନ୍ତୁ","\"ଏହା ପରେ କ'ଣ?\" ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ"]),
  as: createLocalizedRecord('as', "দ্বিতীয়-স্তৰীয় চিন্তা (Second-Order Thinking)", "কেৱল তাৎক্ষণিক ফলাফলৰ ওপৰত নিৰ্ভৰ নকৰি ভৱিষ্যতৰ সুদূৰপ্ৰসাৰী প্ৰভাৱ বিশ্লেষণ কৰাৰ মানসিক কৌশল।", ["তাৎক্ষণিক লাভৰ মোহ ত্যাগ কৰক","কোব্ৰা ইফেক্টৰ বিষয়ে জানক","সদায় সোধক: \"তাৰ পিছত কি?\""]),
};
