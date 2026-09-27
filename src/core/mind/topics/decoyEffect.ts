import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Consumer & Advertising Psychology Track
 * Topic: The Decoy Effect (Asymmetric Dominance)
 * Category: Consumer & Advertising Psychology (consumer_advertising)
 * 
 * Academic Grounding:
 * - Huber, Payne, & Puto (1982): Adding Asymmetrically Dominated Alternatives
 * - Ariely (2008): Predictably Irrational (The Economist Subscription Experiment)
 * - Simonson (1989): Choice Based on Reasons: The Case of Attraction and Compromise Effects
 */

export const TOPIC_DECOY_EFFECT_EN: MindTopicDetail = {
  id: 'decoy_effect',
  categoryId: 'consumer_advertising',
  slug: 'decoy-effect',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 2,
  viewCount: 5120,
  shareCount: 460,
  bookmarkCount: 920,
  title: 'The Decoy Effect: How Phantom Options Manipulate Your Choices',
  subtitle: 'The science of asymmetric dominance: why introducing an inferior third option nudges you toward the most expensive purchase.',
  shortDescription: 'A cognitive pricing bias where consumers change their preference between two options when presented with a third, strategically inferior "decoy" option.',
  oneLineExplanation: 'In simple terms: Making an expensive option look like a bargain by placing a terrible, overpriced option right next to it.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'When choosing between a small popcorn for ₹200 and a large for ₹450, you might hesitate and buy the small. But when cinema chains add a medium popcorn for ₹400, your brain does a double-take: "For just ₹50 more, I get the huge tub!" The medium popcorn was never meant to be bought; it is a "decoy"—an asymmetrically dominated option engineered solely to make the ₹450 option feel irresistible.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'First proven by Huber, Payne, and Puto (1982), the Decoy Effect (technically called the Asymmetric Dominance Effect) violates rational choice theory. Traditional economics assumes that if you prefer Option A over Option B, adding an irrelevant Option C should never make you flip to Option B. However, human evaluation is inherently relative. When Option C is strictly inferior to Option B in all dimensions but partially comparable to Option A, it provides an instant, cognitive heuristic that justifies picking Option B.',
  summary60s: 'In Dan Ariely’s famous MIT study, students were offered three subscription tiers for The Economist: (1) Web-only for $59; (2) Print-only for $125; (3) Print + Web for $125. Why would anyone offer Print-only for the exact same price as Print + Web? When all three were displayed, 84% chose the $125 bundle, and only 16% chose the $59 web version. When Ariely removed the "useless" $125 print-only decoy, choices flipped completely: 68% chose the $59 option, and only 32% chose the bundle. The decoy generated a 43% revenue surge by fabricating an illusion of free value.',

  quickTakeaways: [
    'The Phantom Option: The decoy is intentionally flawed and priced so nobody in their right mind buys it',
    'Cognitive Relief: Decoys eliminate decision fatigue by giving our brain an effortless comparison metric',
    'Pervasive in Tech & Retail: SaaS pricing tiers (Basic, Pro, Enterprise) and coffee cup sizing rely heavily on decoys',
    'The Isolation Defense: Evaluate each tier on whether you actually need the features, not on relative bargain comparison',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Human brains are terrible at calculating absolute intrinsic value. We do not know what a cup of coffee or a software suite is fundamentally "worth" in a vacuum. Therefore, our cognitive architecture relies on local contrast. The decoy provides an immediate, low-effort contrast anchor that makes our choice feel rational, smart, and safe.',
  evolutionaryMechanism: 'Rapid contextual comparison enabled quick assessments of food abundance and relative predator threat without wasting scarce computational energy on absolute mathematical optimization.',

  // SECTION E — HOW DOES IT WORK?
  howItWorks: 'Marketers introduce an "Asymmetrically Dominated" option. If Option A is cheap with few features, and Option B is premium with all features, deciding between them requires a difficult trade-off (money vs. features). The marketer introduces Decoy C, which costs almost as much as Option B but lacks its advantages. Suddenly, comparing Option B and Decoy C requires zero mental strain—Option B is obviously superior. The consumer picks Option B to feel competent.',
  whereYouEncounterIt: 'Movie theater concessions, streaming subscription packages, airline ticket upgrades, automobile trim packages, smartphone storage tiers, and coffee shop menu boards.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'The Decoy Pricing Architecture',
    description: 'How a dummy third option redirects consumer cash flows.',
    analogySideA: {
      label: 'Without Decoy (Tough Trade-Off)',
      detail: 'Option A: Small ₹150 vs. Option B: Large ₹350. Buyer hesitates: "Is the large really worth more than double?" (Most choose Small).',
    },
    analogySideB: {
      label: 'With Decoy (No-Brainer Trap)',
      detail: 'Option A: Small ₹150, Option C (Decoy): Medium ₹320, Option B: Large ₹350. Buyer thinks: "Why would I buy Medium for ₹320 when Large is just ₹30 more?" (Most choose Large).',
    },
  },

  researchSummary: 'Huber, Payne, & Puto (1982) demonstrated across beer, cars, and television sets that introducing an asymmetrically dominated decoy increased the market share of the dominating brand by up to 13 percentage points without changing the physical product or its price.',
  limitationsAndControversies: 'The decoy effect weakens when consumers have strict fixed spending caps, when product attributes cannot be easily mapped to a numerical scale, or when consumers are thoroughly educated on production cost realities.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'A middle tier that costs almost as much as the top tier but offers vastly fewer benefits',
    'A pricing table where one specific tier is highlighted with a bright badge: "BEST VALUE" or "MOST POPULAR"',
    'Coffee cups where the Medium is 350ml for ₹280 and the Large is 500ml for ₹300',
    'Smartphone storage upgrades where 128GB is ₹70,000, 256GB is ₹78,000, and 512GB is ₹80,000',
    'Feeling an urge to buy a larger size not because you are hungry/thirsty, but because "it is only ₹30 more"',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_decoy_01',
      scenarioType: 'indian_context',
      title: 'The Multiplex Samosa Combo Trap',
      vignette: 'Arjun visits a cinema in Bengaluru. He originally wanted a simple quick snack. At the food counter, the menu reads: Single Samosa: ₹120; Combo 1 (2 Samosas + Small Cold Drink): ₹290; Jumbo Combo (2 Samosas + Giant Refill Cold Drink + Popcorn): ₹320. Arjun looks at Combo 1 and says to himself: "₹290 for just two samosas and a tiny drink makes no sense when ₹30 more gives me the jumbo tub of popcorn!" He walks into the auditorium holding ₹320 worth of high-calorie food he never intended to consume.',
      breakdownAnalysis: 'Combo 1 was a classic asymmetric decoy. It was intentionally priced abnormally high (₹290) relative to its value so that Arjun would view the ₹320 Jumbo Combo as a triumph of frugality rather than an unneeded expenditure.',
      recommendedAction: 'Strip away the comparison. Ask: "When I walked up to this counter, was I craving giant popcorn and a half-liter soda?" If the answer is no, purchase only the single snack.',
    },
  ],

  examples: [
    {
      id: 'ex_decoy_01',
      domain: 'consumer_advertising',
      displayOrder: 1,
      title: 'SaaS Software Pricing Tables',
      description: 'Starter Plan: $15/mo (1 user). Team Plan: $45/mo (3 users). Enterprise Plan: $49/mo (Unlimited users + 24/7 phone support). The Team Plan exists exclusively to drive subscriptions to Enterprise.',
      takeaway: 'Middle tiers with poor price-to-feature ratios are decoys engineered to push customers to premium tiers.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'To disarm the decoy effect, use the "Need-Only Filter." Never ask "Which option gives the most stuff per rupee?" Instead ask: "What exact utility do I actually need right now?" If you only need 100GB of storage, paying extra for 512GB is a waste, even if the marginal cost per gigabyte is lower.',
  psychologicalDefenses: [
    'The Baseline Need Test: Decide what size or tier you want BEFORE looking at the menu or pricing chart',
    'Ignore Marginal Price Deltas: Stop thinking "It is only ₹40 more." Ask: "Would I pick ₹40 up off the ground and hand it to a stranger for food I will throw away?"',
    'Delete the Middle Option: In your mind, erase the middle tier completely and compare only the minimum viable option with the maximum option',
    'The Frugal Sanity Check: Unconsumed capacity (popcorn thrown in the trash, cloud storage unused) has zero economic value to you',
  ],

  commonMisconceptions: [
    {
      misconception: 'If the larger option gives more product per rupee, choosing it is always financially smart.',
      reality: 'Unit-price efficiency is a trap if you consume more than you need or discard the surplus. Paying ₹300 for unwanted volume is still spending ₹100 more than buying the ₹200 size you actually wanted.',
    },
  ],

  reflectionPrompt: 'Recall your last purchase at a fast-food counter, coffee shop, or software tool. Did you pick the larger or premium tier because you genuinely needed it, or because the middle option made it look like a bargain?',

  interactiveScenario: {
    id: 'interactive_decoy_01',
    topicId: 'decoy_effect',
    scenarioTitle: 'Spot the Decoy: Cloud Storage Upgrade',
    scenarioDescription: 'You need cloud backup for your phone photos (around 80GB). The service offers: Tier A (100GB) for ₹130/month; Tier B (1TB) for ₹650/month; Tier C (2TB) for ₹699/month.',
    vignetteSourceType: 'shopping',
    options: [
      {
        id: 'opt_1',
        text: 'Buy Tier C (2TB for ₹699) because getting double the storage of Tier B for just ₹49 more is an unbelievable bargain.',
        isCorrect: false,
        cognitiveTakeaway: 'You took the bait! Tier B is the decoy. You are spending ₹569 extra every month for 1,920GB of storage you will never use.',
      },
      {
        id: 'opt_2',
        text: 'Buy Tier A (100GB for ₹130) because it completely satisfies your actual 80GB requirement without paying for phantom capacity.',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of consumer psychology! You evaluated intrinsic personal need rather than relative pricing illusions.',
      },
      {
        id: 'opt_3',
        text: 'Refuse to back up your photos anywhere and risk losing all your family memories.',
        isCorrect: false,
        cognitiveTakeaway: 'Extreme avoidance that creates catastrophic data risk instead of rational decision making.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_decoy_01',
      questionType: 'multiple_choice',
      prompt: 'In consumer psychology, what is the specific role of a "decoy" option?',
      options: [
        { id: 'opt_a', text: 'To be the most popular product that generates the highest sales volume', isCorrect: false },
        { id: 'opt_b', text: 'To act as an inferior, strategically flawed alternative that makes the targeted expensive option look like an irresistible deal', isCorrect: true, feedbackText: 'Correct! Decoys are designed to be rejected in favor of the target option.' },
        { id: 'opt_c', text: 'To reduce the total number of choices available to the customer', isCorrect: false },
      ],
      cognitiveTakeaway: 'Decoys exist to steer preference, not to be consumed.',
    },
  ],

  references: [
    {
      citation: 'Huber, J., Payne, J. W., & Puto, C. (1982). Adding asymmetrically dominated alternatives: Violations of regularity and the similarity hypothesis. Journal of Consumer Research, 9(1), 90–98.',
      doiOrUrl: 'https://doi.org/10.1086/208899',
      relevance: 'The foundational academic paper discovering and proving the asymmetric dominance effect.',
      displayOrder: 1,
    },
    {
      citation: 'Ariely, D. (2008). Predictably irrational: The hidden forces that shape our decisions. HarperCollins.',
      doiOrUrl: 'https://doi.org/10.1086/595132',
      relevance: 'Demonstrated the Economist subscription experiment showing the dramatic power of decoys in modern pricing.',
      displayOrder: 2,
    },
  ],

  tags: ['Consumer Psychology', 'Decoy Effect', 'Pricing Strategy', 'Behavioral Economics', 'Advertising'],
  relatedTopics: [
    { topicId: 'anchoring_effect', slug: 'anchoring-effect', title: 'Anchoring Effect', relationshipType: 'amplified_by' },
    { topicId: 'sunk_cost_fallacy', slug: 'sunk-cost-fallacy', title: 'Sunk Cost Fallacy', relationshipType: 'general_related' },
  ],
  seoTitle: 'The Decoy Effect: How Phantom Pricing Controls What You Buy | Mentalab Mind',
  seoDescription: 'Master the science of the Decoy Effect (Asymmetric Dominance). Discover why cinemas, SaaS companies, and brands use dummy options to nudge you to spend more.',
  canonicalUrl: '/mind/consumer-and-advertising-psychology/decoy-effect',
  ogImageUrl: '/images/mind/decoy-effect.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'The decoy effect operates through asymmetric dominance, where an inferior third option shifts consumer preference toward the targeted premium option.',
};

export const TOPIC_DECOY_EFFECT_HINGLISH: MindTopicDetail = {
  ...TOPIC_DECOY_EFFECT_EN,
  title: 'The Decoy Effect: Faltu Option Dikha Kar Mehenga Sauda Kaise Becha Jata Hai',
  subtitle: 'Asymmetric Dominance ka jaadu: Movie hall ke popcorn se lekar software pricing tak ka commercial secret.',
  shortDescription: 'Ek aisi pricing trick jisme ek bekaar teesra option isliye rakha jata hai taaki aapko sabse mehenga option sasta aur faydemand lagne lage.',
  oneLineExplanation: 'Simple shabdon me: Ek aisa option banana jise koi na khareede, taaki mehenga option sasta aur smart lage.',

  summary30s: 'Jab cinema hall me small popcorn ₹200 ka hota hai aur large ₹450 ka, toh log sochte hain ki ₹450 bohot mehenga hai aur small le lete hain. Lekin tabhi wo beech me medium popcorn ₹400 ka add kar dete hain. Ab dimaag kehta hai: "Sirf ₹50 aur dekar poora bada dabba mil raha hai!" Medium popcorn kisi ko bechne ke liye banaya hi nahi gaya tha—wo ek "Decoy" tha, jiska kaam sirf aapke haath se ₹450 nikalwana tha.',
  coreConcept: 'Huber, Payne aur Puto (1982) ne prove kiya tha ki humans kisi cheez ki absolute value nahi nikal sakte. Hum hamesha aas-paas ke options se compare karte hain. Decoy option dono options ke beech ek fake comparison create karta hai jisse customer ko lagta hai ki usne dukaandar ko loot liya, jabki reality me usne zaroorat se zyada kharch kiya.',
  summary60s: 'Dan Ariely ke famous experiment me Economist magazine ke teen options the: Web subscription ₹5,000, Print subscription ₹10,000, Print + Web dono ₹10,000. Kisi ko sirf Print kyu lena tha jab same price me dono mil rahe the? Jab teenon dikhaye gaye toh 84% logon ne ₹10,000 wala combo liya. Lekin jab beech ka bekaar Print-only option hata diya gaya, toh 68% logon ne sasta ₹5,000 wala liya! Ek bekaar option ne company ki sales 43% badha di.',

  quickTakeaways: [
    'Dummy Option: Decoy option jaanbujhkar bekaar rakha jata hai taaki koi use na khareede',
    'Comparison Shortcut: Dimaag complex calculation se bachne ke liye aasani se compare hone wale option ko chun leta hai',
    'Har jagah maujood: Coffee shops, phone storage, flights aur SaaS software pricing me yahi chalta hai',
    'Zaroorat par dhyan dein: Option sasta lag raha hai isliye mat lijiye; dekhiye ki kya aapko sach me utni quantity chahiye',
  ],

  whyItHappens: 'Humara dimaag intrinsic value nahi janta. Coffee ya popcorn banana kitne ka padta hai hume nahi pata. Dimaag aasani se decide karne ke liye comparison dhundta hai, aur decoy usko wo ready-made comparison de deta hai.',
  evolutionaryMechanism: 'Survival ke time par contextually better cheez ko jaldi pehchan lena energy bachata tha.',

  howItWorks: 'Single Samosa ₹100, Samosa + Chhoti Chai ₹280, Samosa + Badi Cold Drink + Fries ₹310. Aadmi sochta hai ki ₹280 me sirf chai mil rahi hai, toh ₹30 aur dekar poora combo le leta hai.',
  howToRespond: 'Price difference mat dekhiye. Puchiye: "Agar main counter par aane se pehle sochta, toh kya mujhe jumbo combo chahiye tha?" Agar nahi, toh sirf wahi lijiye jo aapko chahiye.',

  reflectionPrompt: 'Aapne aakhri baar cinema hall ya restaurant me kya isliye bada size order kiya tha kyunki "sirf 30-40 rupaye ka farq tha"?',
  seoTitle: 'Decoy Effect Kya Hai? Pricing Tricks Se Kaise Bachein | Mentalab Mind',
  seoDescription: 'Samjhein Decoy Effect ki psychology. Brands kaise fake options dikha kar humse mehengi cheezein khareedwate hain aur isse kaise bachein.',
  canonicalUrl: '/mind/consumer-and-advertising-psychology/decoy-effect',
};

function createLocalizedDecoyRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_DECOY_EFFECT_EN,
    title,
    subtitle,
    oneLineExplanation: oneLine,
    summary30s,
    coreConcept,
    quickTakeaways: takeaways,
    seoTitle: `${title} | Mentalab Mind`,
    seoDescription: `${summary30s.slice(0, 150)}...`,
  };
}

export const TOPIC_DECOY_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_DECOY_EFFECT_EN,
  hinglish: TOPIC_DECOY_EFFECT_HINGLISH,
  hi: createLocalizedDecoyRecord(
    'hi',
    'डिकॉय इफेक्ट (Decoy Effect): कृत्रिम विकल्पों द्वारा ग्राहकों के निर्णयों का संचालन',
    'असममित प्रभुत्व का विज्ञान: सिनेमा के पॉपकॉर्न से लेकर सॉफ्टवेयर मूल्य निर्धारण तक की सच्चाई।',
    'सरल शब्दों में: एक जानबूझकर बेकार विकल्प सामने रखकर महंगे विकल्प को आकर्षक और सस्ता दिखाना।',
    'डिकॉय इफेक्ट तब होता है जब विक्रेता जानबूझकर एक ऐसा तीसरा विकल्प जोड़ते हैं जो लगभग बेकार और अधिक महंगा होता है, ताकि ग्राहक सबसे महंगे विकल्प को चुन ले।',
    'हूबर एट अल (1982) और डैन एरीली के अनुसार, लोग तुलनात्मक आधार पर निर्णय लेते हैं और डिकॉय उनके दिमाग को सबसे महंगे सौदे की ओर धकेल देता है।',
    [
      'कृत्रिम विकल्प: डिकॉय खरीदने के लिए नहीं, बल्कि तुलना को प्रभावित करने के लिए होता है',
      'तुलनात्मक भ्रम: यह महंगे विकल्प को समझदारी भरा सौदा साबित करता है',
      'विपणन रणनीति: कॉफी की दुकानों, मोबाइल स्टोरेज और मूवी हॉलों में इसका भारी उपयोग होता है',
      'मूल आवश्यकता: हमेशा अपनी वास्तविक आवश्यकता के अनुसार विकल्प चुनें, तुलना के आधार पर नहीं',
    ]
  ),
  gu: createLocalizedDecoyRecord(
    'gu',
    'ડીકોય ઇફેક્ટ: નકામો વિકલ્પ બતાવીને મોંઘી વસ્તુ વેચવાની કળા',
    'અસમપ્રમાણ પ્રભુત્વનું વિજ્ઞાન અને ગ્રાહક મનોવિજ્ઞાનની રસપ્રદ યુક્તિઓ.',
    'સરળ શબ્દોમાં: એક એવો વિકલ્પ રાખવો જેથી સૌથી મોંઘો વિકલ્પ સસ્તો લાગે.',
    'ડીકોય વિકલ્પ ગ્રાહકને વધુ ખર્ચ કરવા માટે લલચાવવા માટે રચાયેલ છે.',
    'ખરેખર જરૂરિયાત હોય તેટલું જ ખરીદો, સરખામણીની જાળમાં ન ફસાવો.',
    ['નકલી વિકલ્પ ઓળખો', 'વધારાનો ખર્ચ ટાળો', 'જરૂરિયાત મુજબ ખરીદો']
  ),
  mr: createLocalizedDecoyRecord(
    'mr',
    'डिकॉय इफेक्ट: दिखाऊ पर्यायांचा वापर करून महागडी खरेदी करवून घेणे',
    'ग्राहक मानसशास्त्रातील तुलनात्मक प्रभावाचे गुपित आणि त्यापासून संरक्षण.',
    'सोप्या भाषेत: एक मुद्दाम अयोग्य पर्याय दाखवून सर्वात महागडा पर्याय फायद्याचा वाटायला लावणे.',
    'डिकॉय इफेक्ट ग्राहकाला आवश्यकतेपेक्षा जास्त पैसे खर्च करायला लावतो.',
    'तुलनेच्या मोहात न पडता मूळ गरजेचा विचार करणे आवश्यक आहे.',
    ['दिखाऊ पर्याय ओळखा', 'अनावश्यक खर्च टाळा', 'गरजेनुसार निवडा']
  ),
  bn: createLocalizedDecoyRecord(
    'bn',
    'ডিকয় এফেক্ট: অপ্রয়োজনীয় বিকল্প দেখিয়ে দামি পণ্য বিক্রির কৌশল',
    'ভোক্তা মনোবিজ্ঞানের বিশেষ কৌশল: পপকর্ন থেকে মোবাইল স্টোরেজের মূল্য নির্ধারণের রহস্য।',
    'সহজ কথায়: একটি অকেজো বিকল্প সামনে রেখে সবচেয়ে দামি পণ্যটিকে আকর্ষণীয় করে তোলা।',
    'ক্রেতার মনস্তাত্ত্বিক তুলনার সুযোগ নিয়ে এই ফাঁদ তৈরি করা হয়।',
    'প্রয়োজনের অতিরিক্ত খরচ করা থেকে বিরত থাকুন।',
    ['নকল বিকল্প চিনুন', 'বাজেট বজায় রাখুন', 'প্রয়োজন অনুযায়ী কিনুন']
  ),
  ta: createLocalizedDecoyRecord(
    'ta',
    'டிகாய் எஃபெக்ட்: போலி விருப்பங்களைக் காட்டி அதிக விலைக்கு விற்கும் தந்திரம்',
    'நுகர்வோர் உளவியல்: தியேட்டர் பாப்கார்ன் முதல் சாப்ட்வேர் சந்தா வரை.',
    'எளிய சொற்களில்: மிகவும் விலையுயர்ந்த தேர்வை மலிவானதாகக் காட்ட ஒரு வீணான மூன்றாவது தேர்வை வைப்பது.',
    'ஒப்பீட்டு மயக்கத்தை உருவாக்கி வாடிக்கையாளர்களை அதிக பணம் செலவழிக்க வைக்கிறது.',
    'உங்களுக்கு தேவையானதை மட்டுமே வாங்குங்கள்.',
    ['போலி தேர்வை உணருங்கள்', 'அளவான செலவு', 'தேவைக்கு ஏற்ப தேர்வு']
  ),
  te: createLocalizedDecoyRecord(
    'te',
    'డికాయ్ ఎఫెక్ట్: నకిలీ ఎంపికలను చూపి ఖరీదైన వస్తువులను అమ్Protocol తంత్రం',
    'వినియోగదారు మనస్తత్వశాస్త్రం: సినిమా పాప్‌కార్న్ నుండి సాఫ్ట్‌వేర్ ప్లాన్‌ల వరకు.',
    'సులభమైన మాటల్లో: అత్యంత ఖరీదైన ఎంపికను చవకైనదిగా చూపించడానికి ఒక పనికిరాని మూడవ ఎంపికను ఉంచడం.',
    'పోలిక ద్వారా వినియోగదారులను అధికంగా ఖర్చు పెట్టించే మోసపూరిత వ్యూహం.',
    'మీ అవసరానికి తగినది మాత్రమే ఎంచుకోండి.',
    ['నకిలీ ఎంపికను గుర్తించండి', 'అదనపు ఖర్చు ఆపండి', 'అవసరమే ముఖ్యం']
  ),
  kn: createLocalizedDecoyRecord(
    'kn',
    'ಡಿಕಾಯ್ ಎಫೆಕ್ಟ್: ಅನಗತ್ಯ ಆಯ್ಕೆ ತೋರಿಸಿ ದುಬಾರಿ ಉತ್ಪನ್ನ ಮಾರುವ ತಂತ್ರ',
    'ಗ್ರಾಹಕ ಮನೋವಿಜ್ಞಾನ: ಚಲನಚಿತ್ರ ಪಾಪ್‌ಕಾರ್ನ್‌ನಿಂದ ಸಾಫ್ಟ್‌ವೇರ್ ಬೆಲೆಗಳವರೆಗೆ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ದುಬಾರಿ ಆಯ್ಕೆಯನ್ನು ಅಗ್ಗವಾಗಿ ಕಾಣಿಸಲು ಒಂದು ನಿಷ್ಪ್ರಯೋಜಕ ಆಯ್ಕೆಯನ್ನು ಮುಂದಿಡುವುದು.',
    'ಹೋಲಿಕೆಯ ಆಮಿಷವೊಡ್ಡಿ ಹೆಚ್ಚು ಹಣ ವ್ಯಯಿಸುವಂತೆ ಮಾಡುವ ತಂತ್ರವಿದು.',
    'ನಿಮ್ಮ ನೈಜ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ಮಾತ್ರ ಖರೀದಿಸಿ.',
    ['ಬೆಲೆ ತಂತ್ರ ಗುರುತಿಸಿ', 'ಅನಗತ್ಯ ವೆಚ್ಚ ತಪ್ಪಿಸಿ', 'ಅಗತ್ಯಕ್ಕೆ ಆದ್ಯತೆ ನೀಡಿ']
  ),
  ml: createLocalizedDecoyRecord(
    'ml',
    'ഡിക്കോയ് ഇഫക്റ്റ്: വ്യാജ തെരഞ്ഞെടുപ്പുകൾ കാട്ടി വിലകൂടിയവ വിൽക്കുന്ന തന്ത്രം',
    'ഉപഭോക്തൃ മനഃശാസ്ത്രം: തിയേറ്റർ പോപ്‌കോൺ മുതൽ സോഫ്റ്റ്‌വെയർ പ്ലാനുകൾ വരെ.',
    'ലളിതമായി പറഞ്ഞാൽ: ഏറ്റവും ചെലവേറിയത് ലാഭകരമാണെന്ന് തോന്നിപ്പിക്കാൻ ഉപയോഗശൂന്യമായ മൂന്നാമതൊരു ഓപ്ഷൻ നൽകുന്നത്.',
    'താരതമ്യത്തിലൂടെ കൂടുതൽ പണം ചിലവാക്കിക്കുന്ന മാർക്കറ്റിംഗ് തന്ത്രമാണിത്.',
    'നിങ്ങൾക്ക് ആവശ്യമുള്ളത് മാത്രം തിരഞ്ഞെടുക്കുക.',
    ['വ്യാജ ഓപ്ഷനുകൾ തിരിച്ചറിയുക', 'അനാവശ്യ ചെലവ് ഒഴിവാക്കുക', 'ആവശ്യം മുൻനിർത്തുക']
  ),
  pa: createLocalizedDecoyRecord(
    'pa',
    'ਡਿਕੌਏ ਇਫੈਕਟ: ਬੇਕਾਰ ਵਿਕਲਪ ਦਿਖਾ ਕੇ ਮਹਿੰਗੀ ਚੀਜ਼ ਵੇਚਣ ਦਾ ਢੰਗ',
    'ਖਪਤਕਾਰ ਮਨੋਵਿਗਿਆਨ: ਸਿਨੇਮਾ ਹਾਲਾਂ ਤੋਂ ਲੈ ਕੇ ਆਨਲਾਈਨ ਸ਼ਾਪਿੰਗ ਤੱਕ ਦੇ ਭੇਤ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਮਹਿੰਗੇ ਵਿਕਲਪ ਨੂੰ ਸਸਤਾ ਦਿਖਾਉਣ ਲਈ ਇੱਕ ਬੇਕਾਰ ਤੀਜਾ ਵਿਕਲਪ ਰੱਖਣਾ।',
    'ਤੁਲਨਾ ਦੇ ਚੱਕਰ ਵਿੱਚ ਪਾ ਕੇ ਗਾਹਕਾਂ ਤੋਂ ਵੱਧ ਪੈਸੇ ਖਰਚ ਕਰਵਾਏ ਜਾਂਦੇ ਹਨ।',
    'ਆਪਣੀ ਅਸਲ ਜ਼ਰੂਰਤ ਮੁਤਾਬਕ ਹੀ ਖਰੀਦਦਾਰੀ ਕਰੋ।',
    ['ਝਾਂਸਾ ਪਛਾਣੋ', 'ਫਜ਼ੂਲ ਖਰਚੀ ਤੋਂ ਬਚੋ', 'ਲੋੜ ਮੁਤਾਬਕ ਖਰੀਦੋ']
  ),
  ur: createLocalizedDecoyRecord(
    'ur',
    'ڈیکوائے ایفیکٹ: بیکار آپشن دکھا کر مہنگی چیز فروخت کرنے کا ہنر',
    'صارف کی نفسیات: سنیما کے پاپ کارن سے لے کر سافٹ ویئر کی قیمتوں تک۔',
    'آسان الفاظ میں: سب سے مہنگے آپشن کو سستا ثابت کرنے کے لیے ایک بیکار تیسرا آپشن سامنے رکھنا۔',
    'صارفین کا موازنہ کروا کر ان سے ضرورت سے زیادہ رقم خرچ کروانے کی چال۔',
    'ہمیشہ اپنی حقیقی ضرورت کے مطابق خریداری کریں۔',
    ['دھوکے کا آپشن پہچانیں', 'فضول خرچی سے بچیں', 'ضرورت کے مطابق خریدیں']
  ),
  or: createLocalizedDecoyRecord(
    'or',
    'ଡିକୟ ଇଫେକ୍ଟ: ଅଦରକାରୀ ବିକଳ୍ପ ଦେଖାଇ ଦାମୀ ଜିନିଷ ବିକ୍ରି କରିବାର କଳା',
    'ଗ୍ରାହକ ମନୋବିଜ୍ଞାନର ରହସ୍ୟ: ସିନେମା ହଲ୍‌ଠାରୁ ଆରମ୍ଭ କରି ସପିଂ ପର୍ଯ୍ୟନ୍ତ।',
    'ସହଜ ଭାଷାରେ: ଦାମୀ ବିକଳ୍ପକୁ ଶସ୍ତା ଦେଖାଇବା ପାଇଁ ଏକ ବେକାର ତୃତୀୟ ବିକଳ୍ପ ରଖିବା।',
    'ତୁଳନାତ୍ମକ ଭ୍ରମ ସୃଷ୍ଟି କରି ଅଧିକ ଖର୍ଚ୍ଚ କରାଯାଏ।',
    'ନିଜ ଆବଶ୍ୟକତା ଅନୁସାରେ ହିଁ କିଣନ୍ତୁ।',
    ['ମୂଲ୍ୟ ଜାଲ ଚିହ୍ନନ୍ତୁ', 'ଅନାବଶ୍ୟକ ଖର୍ଚ୍ଚ ରୋକନ୍ତୁ', 'ଆବଶ୍ୟକତା ଅନୁଯାୟୀ କାର୍ଯ୍ୟ କରନ୍ତୁ']
  ),
  as: createLocalizedDecoyRecord(
    'as',
    'ডিকয় ইফেক্ট: মূল্যহীন বিকল্প দেখুৱাই দামী বস্তু বিক্ৰী কৰাৰ কৌশল',
    'গ্ৰাহক মনোবিজ্ঞানৰ ৰহস্য: চিনেমা হলৰ পৰা অনলাইন ক্ৰয়লৈকে।',
    'সহজ কথাত: দামী বস্তুটো লাভজনক দেখুৱাবলৈ এটা মূল্যহীন বিকল্প আগবঢ়োৱা।',
    'তুলনাৰ জালত পেলাই গ্ৰাহকৰ পৰা অধিক ধন খৰচ কৰোৱা হয়।',
    'নিজৰ প্ৰয়োজন অনুসৰিহে ক্ৰয় কৰক।',
    ['মূল্যৰ ফাঁকি বুজি লওক', 'অপ্রয়োজনীয় খৰচ নকৰিব', 'প্ৰয়োজনক গুৰুত্ব দিয়ক']
  ),
};
