import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Persuasion & Influence Track
 * Topic: The Scarcity Principle: How Perceived Deprivation Triggers Urgency
 * Category: Persuasion & Influence (persuasion_influence)
 * 
 * Academic Grounding:
 * - Cialdini (1984/2021): Influence: The Psychology of Persuasion (Chapter 7: Scarcity)
 * - Worchel, Lee & Adewole (1975): Effects of supply and demand on ratings of object value
 * - Brehm (1966): A theory of psychological reactance
 */

export const TOPIC_SCARCITY_EN: MindTopicDetail = {
  id: 'scarcity_heuristic',
  categoryId: 'persuasion_influence',
  slug: 'scarcity-heuristic-and-urgency',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 3,
  viewCount: 7920,
  shareCount: 630,
  bookmarkCount: 1410,
  title: 'The Scarcity Principle: How Perceived Deprivation Triggers Urgency',
  subtitle: 'Opportunities seem vastly more valuable to us when their availability is limited by quantity or time.',
  shortDescription: 'The cognitive vulnerability where people assign higher subjective value and experience intense panic-buying impulses toward items perceived as scarce or vanishing.',
  oneLineExplanation: '"Only 2 items left in stock — 14 people are viewing this right now!"',

  summary30s: 'The scarcity principle states that human beings desire things more when they believe they cannot have them or when access is rapidly vanishing. Marketers, negotiators, and romantic pursuers artificially restrict access, invent fake deadlines, or fabricate limited inventory because perceived scarcity short-circuits critical thinking and triggers panic acquisition.',

  coreConcept: 'Systematized by Robert Cialdini and rooted in Jack Brehm’s (1966) Theory of Psychological Reactance, the scarcity effect operates on a fundamental threat to human freedom. When an item or opportunity becomes scarce, our freedom to obtain it is threatened. Our brain reacts to this restriction of freedom by desiring the item exponentially more and assigning it superior craftsmanship, beauty, or financial value.',
  summary60s: 'Consider shopping on an airline or hotel booking portal. The moment you see a flashing red banner declaring: "Only 1 room left at this price! 9 other travelers are looking at this property," your heart rate quickens. You stop comparing prices, stop reading negative reviews, and hurry to enter your credit card details. The hotel room did not physically improve in luxury over the last 10 seconds; your loss aversion was hijacked by an artificial countdown timer. When scarcity is introduced, fear of missing out overrides price discipline.',

  quickTakeaways: [
    'Reactance Trigger: When our freedom of choice is constrained, we desire the restricted item with irrational intensity',
    'Newly Scarce vs Always Scarce: Items that suddenly become scarce due to sudden competition trigger far more aggression than items that were always scarce',
    'The Cookie Jar Experiment: Subjects rated chocolate chip cookies as significantly tastier and more expensive when taken from a jar of 2 than a jar of 10',
    'The 24-Hour Cooling Off Antidote: Never purchase any non-essential product under the pressure of a ticking countdown clock',
  ],

  whyItHappens: 'Evolutionary survival heuristic. In ancestral hunter-gatherer environments, resources (ripe fruit, freshwater, game meat) were genuinely fleeting. If you hesitated, competitors or predators consumed the resource and your clan starved. Fast acquisition under scarcity was an optimal survival trait.',
  evolutionaryMechanism: 'A physiological alarm system: scarcity signals potential deprivation. The brain releases a surge of adrenaline, narrowing attentional focus onto the immediate target and suppressing long-term analytical evaluation.',

  howItWorks: 'The scarcity persuasion sequence: (1) Restriction Cue: Introducing a limited quantity ("only 5 seats") or limited time ("offer ends midnight"); (2) Perceived Social Rivalry: Implying other competitors want the same thing; (3) Reactance Activation: The mind perceives a loss of freedom; (4) Compulsive Purchase: Buying to alleviate the anxiety of loss.',
  whereYouEncounterIt: 'E-commerce countdown timers, "Limited Edition" fashion sneakers, luxury handbag waiting lists, real estate bidding wars, and concert ticket queues.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Abundant Supply vs. Artificial Scarcity',
    description: 'How subjective valuation surges when supply is artificially restricted.',
    analogySideA: {
      label: 'Abundant State (Jar of 10 Cookies)',
      detail: '"Cookies are readily available. They taste good, but are ordinary and worth standard price."',
    },
    analogySideB: {
      label: 'Scarce State (Jar of 2 Cookies)',
      detail: '"Only 2 left! These must be exceptionally delicious, premium artisan cookies worth a 50% price markup."',
    },
  },

  researchSummary: 'In Stephen Worchel, Jerry Lee & Akanbi Adewole’s 1975 study at the University of Virginia, participants were given a chocolate chip cookie from one of two jars: one jar had 10 cookies, the other only 2 cookies. Although the cookies were identical in recipe and baking, participants rated the cookies from the jar of 2 as significantly more desirable, attractive, and costly to buy.',
  limitationsAndControversies: 'Overuse of fake scarcity creates "reactance against the seller." When consumers discover that an e-commerce countdown timer resets every 24 hours or that "limited stock" was a software fabrication, brand trust collapses permanently, leading to angry cancellations and reputational boycotts.',
  commonMisconceptions: 'Common myth: "If something is rare or hard to get, it must be higher quality." Reality: Scarcity only reflects supply constraints or artificial gating, having zero intrinsic correlation with durability, utility, or objective value.',

  howToRecognize: [
    'Feeling an urgent physical impulse to buy a product you didn’t want 10 minutes ago, purely because of a flashing countdown clock',
    'Entering a bidding war on real estate or eBay and bidding vastly higher than your predetermined maximum budget',
    'Believing a course or club is elite purely because they reject 90% of applicants, without inspecting the actual educational quality',
    'A salesperson telling you: "I have another buyer coming in 20 minutes with cash in hand, so you have to decide right now"',
  ],

  scenarios: [
    {
      id: 'scen_scarcity_01',
      scenarioType: 'indian_context',
      title: 'The Flash Sale Hype in Delhi',
      vignette: 'Sunil is browsing an online smartphone portal during a "Diwali Midnight Flash Sale." A new model is priced at ₹28,999. A live ticker blinks: "Sale ends in 03:42! 98% claimed!" Sunil’s fingers tremble as he hurriedly enters his UPI PIN, terrified of missing the deal. Two weeks later, he checks the same website and discovers the exact same smartphone is selling for ₹27,499 with free shipping and zero countdown tickers.',
      breakdownAnalysis: 'Sunil was manipulated by manufactured scarcity and simulated social rivalry. The ticker induced high-arousal panic, disabling his critical prefrontal evaluation of whether the price was actually an all-time low.',
      recommendedAction: 'Install price-history tracking extensions: "Never trust a retail countdown clock. Check 12-month camelcamelcamel or price-tracker historical graphs before believing any limited-time discount."',
    },
  ],

  examples: [
    {
      id: 'ex_scarcity_01',
      domain: 'consumer_advertising',
      displayOrder: 1,
      title: 'The Hermès Birkin Bag Waiting List',
      description: 'Hermès refuses to sell their Birkin bags directly off store shelves, forcing wealthy customers to spend tens of thousands on scarves and wait years on invitation lists. The manufactured friction makes the bag the ultimate global status obsession.',
      takeaway: 'Extreme friction and artificial restriction amplify irrational perceived value.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_scarcity_01',
      scenarioContext: 'A car dealership salesman tells an interested couple: "Another customer called an hour ago to verify their financing for this exact red sedan. If you don\'t put down a non-refundable deposit today, they will almost certainly buy it tomorrow."',
      question: 'Which cognitive defense strategy is most effective against this classic scarcity pressure tactic?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Put down the deposit immediately and negotiate the final purchase terms later',
          explanation: 'This capitulates directly to the trap, surrendering your financial leverage.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Acknowledge the fear of loss, physically leave the dealership for 24 hours, and evaluate the car\'s objective utility detached from the competing buyer',
          explanation: 'Accurate: cooling down emotional arousal and assessing the product on its standalone merits neutralizes scarcity reactance.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Offer 10% above the asking price to ensure the competing buyer cannot match your offer',
          explanation: 'This is the "winner\'s curse"—overpaying out of panic rather than market value.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'The joy of winning a scarce item is emotional; the pain of owning an overpaid, unnecessary item is permanent.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Pause and ask: "Would I want or need this item if there were an infinite supply in stock at regular price?"',
  psychologicalDefenses: [
    {
      title: 'The Standalone Value Test',
      instruction: 'Ask yourself: "If this item were infinitely available in every store on my street at this exact price, would I still want it today?" If not, you desire the scarcity, not the object.',
    },
    {
      title: 'The 24-Hour Scarcity Pause',
      instruction: 'Never make an impulse purchase when confronted with countdown clocks or "only X left" banners. If the item sells out, consider it a victory against psychological manipulation.',
    },
    {
      title: 'Call the Bluff on Manufactured Competition',
      instruction: 'When a vendor claims "someone else is about to buy it," politely say: "If that buyer takes it, that\'s totally fine. I will look for other options if this doesn\'t work out." Watch how fast they offer discounts.',
    },
  ],

  reflectionPrompt: 'Have you ever rushed to buy a course, flight, or product because of a countdown timer or "only 2 left" banner, only to regret it later?',

  references: [
    {
      id: 'ref_cialdini_1984',
      authors: 'Cialdini, R. B.',
      year: 1984,
      title: 'Influence: The Psychology of Persuasion',
      publicationName: 'Harper Business (Revised Edition 2021)',
      volumeIssue: 'Chapter 7',
      doi: '10.1002/mar.4220020409',
      evidenceStrength: 'foundational_monograph',
    },
    {
      id: 'ref_worchel_1975',
      authors: 'Worchel, S., Lee, J., & Adewole, A.',
      year: 1975,
      title: 'Effects of supply and demand on ratings of object value',
      publicationName: 'Journal of Personality and Social Psychology',
      volumeIssue: '32(5), 906-914',
      doi: '10.1037/0022-3514.32.5.906',
      evidenceStrength: 'empirical_study',
    },
  ],

  relatedTopics: [
    {
      topicId: 'reciprocity_principle',
      slug: 'reciprocity-principle',
      title: 'The Reciprocity Principle',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'decoy_effect',
      slug: 'decoy-effect',
      title: 'The Decoy Effect',
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
    ...TOPIC_SCARCITY_EN,
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

export const TOPIC_SCARCITY: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SCARCITY_EN,
  hinglish: {
    ...TOPIC_SCARCITY_EN,
    title: 'The Scarcity Principle: "Khatam Hone Wala Hai" Ka Manovigyan',
    subtitle: 'Jab hume lagta hai koi cheez haath se nikalne wali hai, tab hum uski qeemat se zyada uske piche bhaagne lagte hain.',
    shortDescription: 'Ek aisa psychological pattern jisme log "Only 2 left in stock" ya "Sale ends in 10 minutes" dekhkar achanak bechain ho jate hain.',
    oneLineExplanation: '"Sirf 2 piece bache hain — 15 log ise abhi dekh rahe hain!"',
    summary30s: 'Robert Cialdini ne apni research me bataya ki insaan ko jab lagta hai ki uski choice ya azaadi cheeni ja rahi hai (Scarcity), toh uska dimaag panic mode me aa jata hai. E-commerce sites aur marketers fake countdown timers isliye lagate hain taaki aapka dimaag logic chhodkar FOMO (Fear of Missing Out) me fas jaye.',
  },
  hi: {
    ...TOPIC_SCARCITY_EN,
    title: 'The Scarcity Principle (दुर्लभता का सिद्धांत)',
    subtitle: 'अवसर जितने कम सुलभ होते हैं, वे उतने ही अधिक मूल्यवान प्रतीत होते हैं।',
    shortDescription: 'जब किसी वस्तु की उपलब्धता सीमित होती है या समय की पाबंदी होती है, तो लोग उसे प्राप्त करने के लिए अतार्किक उतावली दिखाते हैं।',
    oneLineExplanation: '"केवल 2 वस्तुएं शेष हैं — 14 लोग अभी इसे देख रहे हैं!"',
    summary30s: 'दुर्लभता का सिद्धांत (Scarcity Principle) यह दर्शाता है कि किसी वस्तु के छिन जाने या समाप्त हो जाने की आशंका मनुष्य में मनोवैज्ञानिक प्रतिक्रिया (Psychological Reactance) उत्पन्न करती है। स्टीफन वॉरचेल के प्रयोग में साबित हुआ कि 10 कुकीज़ वाले जार की तुलना में 2 कुकीज़ वाले जार की कुकीज़ को लोगों ने अधिक स्वादिष्ट और महंगी आंका।',
  },
  gu: createLocalizedRecord('gu', "The Scarcity Principle: How Perceived Deprivation Triggers Urgency (પૂર્વગ્રહ)", "The Scarcity Principle: How Perceived Deprivation Triggers Urgency એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "The Scarcity Principle: How Perceived Deprivation Triggers Urgency (पूर्वग्रह)", "The Scarcity Principle: How Perceived Deprivation Triggers Urgency हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "The Scarcity Principle: How Perceived Deprivation Triggers Urgency (పక్షపాతం)", "The Scarcity Principle: How Perceived Deprivation Triggers Urgency అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "The Scarcity Principle: How Perceived Deprivation Triggers Urgency (சார்புநிலை)", "The Scarcity Principle: How Perceived Deprivation Triggers Urgency என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "The Scarcity Principle: How Perceived Deprivation Triggers Urgency (ಪಕ್ಷಪಾತ)", "The Scarcity Principle: How Perceived Deprivation Triggers Urgency ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "The Scarcity Principle: How Perceived Deprivation Triggers Urgency (പക്ഷപാതം)", "The Scarcity Principle: How Perceived Deprivation Triggers Urgency എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "The Scarcity Principle: How Perceived Deprivation Triggers Urgency (পক্ষপাতিত্ব)", "The Scarcity Principle: How Perceived Deprivation Triggers Urgency হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "The Scarcity Principle: How Perceived Deprivation Triggers Urgency (ਪੱਖਪਾਤ)", "The Scarcity Principle: How Perceived Deprivation Triggers Urgency ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "The Scarcity Principle: How Perceived Deprivation Triggers Urgency (جانبداری)", "The Scarcity Principle: How Perceived Deprivation Triggers Urgency انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "The Scarcity Principle: How Perceived Deprivation Triggers Urgency (ପକ୍ଷପାତିତା)", "The Scarcity Principle: How Perceived Deprivation Triggers Urgency ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "The Scarcity Principle: How Perceived Deprivation Triggers Urgency (পক্ষপাতিত্ব)", "The Scarcity Principle: How Perceived Deprivation Triggers Urgency সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
