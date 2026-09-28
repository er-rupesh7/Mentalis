import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Media Psychology Track
 * Topic: Social Comparison Theory: The Agony of the Curated Feed
 * Category: Social Media Psychology (social_media_tech)
 * 
 * Academic Grounding:
 * - Festinger (1954): A theory of social comparison processes
 * - Vogel et al. (2014): Social network sites and social comparison
 * - Twenge et al. (2018): Decreases in psychological well-being among American adolescents after 2012
 */

export const TOPIC_SOCIAL_COMPARISON_EN: MindTopicDetail = {
  id: 'social_comparison_theory',
  categoryId: 'social_media_tech',
  slug: 'social-comparison-theory-feeds',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 3,
  viewCount: 7650,
  shareCount: 620,
  bookmarkCount: 1450,
  title: 'Social Comparison Theory: The Agony of the Curated Feed',
  subtitle: 'How comparing your messy internal reality to other people\'s edited highlight reels drives chronic inadequacy and depression.',
  shortDescription: 'The biological drive to evaluate our personal worth, appearance, and success relative to others, massively hijacked by algorithmic social media feeds.',
  oneLineExplanation: 'Comparing your unedited backstage footage to everyone else\'s polished highlight reel.',

  summary30s: 'Formulated by Leon Festinger in 1954, Social Comparison Theory explains why scrolling Instagram, LinkedIn, or TikTok induces subtle self-loathing: human self-worth is fundamentally comparative, not absolute. When social algorithms serve you the top 0.01% of wealth, beauty, and career victories 24 hours a day, your brain concludes that everyone else is thriving while you alone are falling behind.',

  coreConcept: 'Festinger posited that in the absence of objective physical benchmarks, humans evaluate their abilities and opinions by comparing themselves to others. This occurs in two directions: Upward Social Comparison (comparing yourself to those who seem superior, triggering envy, inadequacy, and inspiration) and Downward Social Comparison (comparing yourself to those worse off, triggering relief and superiority). Modern social platforms weaponize upward social comparison: they aggregate the peak celebratory moments of 500 acquaintances into an endless, artificial montage that no single human life could ever match.',
  summary60s: 'Before smartphones, an individual compared themselves to roughly 50 to 100 people in their physical village or workplace. If you were the best carpenter or musician in town, you felt accomplished and secure. Today, an aspiring designer or musician opens Instagram and compares their practice sketches to the top 10 designers on the planet. Worse, LinkedIn transforms peer updates into an anxiety engine: every peer is "honored and thrilled to announce" a new promotion, funding round, or award. We observe our own mundane daily struggles (exhaustion, doubts, dirty dishes) and contrast them with other people\'s public relations releases.',

  quickTakeaways: [
    'The Backstage vs. Highlight Reel Fallacy: You know all your personal flaws and doubts, but you only see others\' staged triumphs',
    'Upward Comparison Spiral: Prolonged passive scrolling directly correlates with depressive symptoms and lower self-esteem (Vogel et al., 2014)',
    'Relative Deprivation: A person earning $200,000 in Silicon Valley can feel miserable and impoverished if their neighbors earn $2,000,000',
    'The Passive-to-Active Antidote: Never passively scroll; use social platforms exclusively as direct messaging tools or creative publishing conduits',
  ],

  whyItHappens: 'Evolutionary status tracking. In ancestral bands, social hierarchy determined access to food, shelter, and mates. Monitoring where you stood in the tribe was essential to avoid fatal challenges or status demotion.',
  evolutionaryMechanism: 'A hunter who did not notice that younger rivals were becoming faster and stronger risked being pushed down the dominance ladder. Anxiety over status drop was an evolutionary adaptation designed to motivate skill refinement.',

  howItWorks: 'The social feed comparison loop: (1) Passive Scroll: Encountering an acquaintance’s luxury vacation photo or job promotion; (2) Involuntary Upward Contrast: Instantaneous micro-pang of envy or inadequacy in the anterior insula; (3) Rumination: Scanning your own life and cataloging all personal deficiencies; (4) Compensatory Post: Posting your own filtered achievement to regain relative status.',
  whereYouEncounterIt: 'LinkedIn ("humbled and excited" announcements), Instagram vacation and fitness photos, real estate envy in affluent neighborhoods, and college alumni magazines.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Internal Reality vs. Algorithmic Highlight Reel',
    description: 'The profound distortion at the heart of modern social comparison.',
    analogySideA: {
      label: 'Your Personal Lived Reality (The Full Story)',
      detail: 'Self-doubt, tax bills, bad skin days, relationship arguments, boring laundry, and creative blocks (100% visible to you).',
    },
    analogySideB: {
      label: 'Other People’s Social Media Feed (The Filtered 1%)',
      detail: 'Golden-hour beach sunsets, promotion certificates, smiling anniversary photos, and exotic restaurant tables (0% of the struggle visible).',
    },
  },

  researchSummary: 'Vogel et al. (2014) conducted both correlational and experimental studies on Facebook users. Participants forced to view upward comparison profiles (successful peers with many friends and exciting travel) reported significantly poorer self-evaluations and lower self-esteem compared to participants exposed to downward comparison profiles or control conditions.',
  limitationsAndControversies: 'Jean Twenge and Jonathan Haidt argue that the collapse in adolescent mental health after 2012 correlates directly with the introduction of the front-facing camera, algorithmic feed sorting, and ubiquitous smartphone penetration. However, active creators who use platforms for peer collaboration and skill learning report positive social support rather than depressive envy.',
  commonMisconceptions: 'Common myth: "Successful people don\'t compare themselves to others." Reality: Festinger showed that social comparison is an involuntary benchmark system; Olympic bronze medalists are measurably happier than silver medalists because of differing counterfactual comparison directions.',

  howToRecognize: [
    'Opening an app feeling perfectly content, and closing it 15 minutes later feeling anxious, behind in life, and physically unattractive',
    'Feeling an involuntary spike of bitterness or irritation when a friend shares good news about their career or relationship',
    'Staging photos on vacation or at dinners primarily to show others that you are having an amazing time, rather than enjoying the moment',
    'Obsessively checking the likes, views, and comments on your post every 4 minutes to calibrate your social approval',
  ],

  scenarios: [
    {
      id: 'scen_comp_01',
      scenarioType: 'indian_context',
      title: 'The Sunday Night LinkedIn Spiral in Gurugram',
      vignette: 'Aditya, a 28-year-old product manager in Gurugram, has worked hard all week and is relaxing in his living room on Sunday evening. He opens LinkedIn to check a connection request. His feed displays: (1) his college batchmate being named to \'Forbes 30 Under 30\', (2) a former colleague announcing $10 million in seed funding for her AI startup, and (3) an acquaintance celebrating a luxury European sabbatical. Aditya’s stomach clenches. He feels a wave of nausea, closes his laptop, and thinks: "I am a total failure. I am 28 and just managing sprint tickets while everyone else is changing the world."',
      breakdownAnalysis: 'Aditya is overwhelmed by uncalibrated upward social comparison. Algorithms aggregate the top 0.001% of positive career anomalies from thousands of contacts. Aditya contrasts his real, messy, normal life with a hyper-compressed montage of institutional PR announcements.',
      recommendedAction: 'Apply the Backstage Rule and implement feed friction: "Never compare your unedited backstage footage to someone else’s promotional movie trailer. Delete the mobile app and log in only on desktop for specific outreach."',
    },
  ],

  examples: [
    {
      id: 'ex_comp_01',
      domain: 'health',
      displayOrder: 1,
      title: 'The Fitness Influencer Lighting Illusion',
      description: 'A teenager looks at fitness influencers with 4% body fat and feels disgust at their own healthy body, unaware that the influencer uses dehydrated water-cuts, professional studio rim-lighting, flattering camera angles, and digital photo retouching.',
      takeaway: 'Comparing biological reality to digital artifice creates body dysmorphia.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_comp_01',
      scenarioContext: 'A young software developer notices that every time she scrolls technical social feeds, she experiences intense impostor syndrome and dread, leading to procrastination on her own coding projects.',
      question: 'Which behavioral intervention most directly targets the psychological mechanism of upward social comparison?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Shift from passive algorithmic consumption to strict active creation: benchmark progress solely against her own code repository from 6 months ago',
          explanation: 'Accurate: replacing external upward social comparison with temporal intra-individual comparison restores autonomy and mastery.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Buy a more expensive laptop to match the aesthetic hardware featured in influencers\' workspace photos',
          explanation: 'Chasing consumer props feeds the status trap without addressing the comparative cognitive vulnerability.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Post negative critiques on other people’s project announcements to pull them down',
          explanation: 'Hostile downward social comparison breeds toxicity and deepens underlying insecurity.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'The only psychologically sustainable baseline of comparison is who you were yesterday.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Compare yourself only to your past baseline performance and curate your media feeds to eliminate toxic idealized lifestyle broadcasts.',
  psychologicalDefenses: [
    {
      title: 'Shift from Social to Temporal Comparison',
      instruction: 'Stop comparing yourself to other people today; compare yourself exclusively to who you were 12 months ago. Are your skills, calm, and health better than your past self?',
    },
    {
      title: 'The "Staged Trailer" Reality Check',
      instruction: 'Whenever you see a glamorous social media post, repeat the mantra: "This is a carefully staged movie trailer. I have no idea what private miseries, debts, or marital tears exist behind that photo."',
    },
    {
      title: 'Convert Envy into Information',
      instruction: 'When you feel a pang of envy toward someone, ask: "What specific skill or habit do they have that I admire?" If it is genuine, study their method; if it is just vanity, discard it.',
    },
  ],

  reflectionPrompt: 'Does scrolling through social media leave you feeling inspired, or quietly inadequate about your lifestyle, income, and body?',

  references: [
    {
      id: 'ref_festinger_1954',
      authors: 'Festinger, L.',
      year: 1954,
      title: 'A theory of social comparison processes',
      publicationName: 'Human Relations',
      volumeIssue: '7(2), 117-140',
      doi: '10.1177/001872675400700202',
      evidenceStrength: 'historical_classic',
    },
    {
      id: 'ref_vogel_2014',
      authors: 'Vogel, E. A., Rose, J. P., Roberts, L. R., & Eckles, K.',
      year: 2014,
      title: 'Social network sites and social comparison: The dark side of social photos and status updates',
      publicationName: 'Psychology of Popular Media Culture',
      volumeIssue: '3(4), 206-222',
      doi: '10.1037/ppm0000047',
      evidenceStrength: 'empirical_study',
    },
  ],

  relatedTopics: [
    {
      topicId: 'algorithmic_reinforcement',
      slug: 'algorithmic-reinforcement',
      title: 'Algorithmic Reinforcement',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'variable_reward_schedules',
      slug: 'variable-reward-schedules',
      title: 'Variable Reward Schedules',
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
    ...TOPIC_SOCIAL_COMPARISON_EN,
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

export const TOPIC_SOCIAL_COMPARISON: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SOCIAL_COMPARISON_EN,
  hinglish: {
    ...TOPIC_SOCIAL_COMPARISON_EN,
    title: 'Social Comparison: Instagram Aur LinkedIn Ka Depression Trap',
    subtitle: 'Apni messy real life ko doosro ke edited aur filter lagaye huye highlight reel se compare karke dukhi hona.',
    shortDescription: 'Leon Festinger ki theory: jab hum doosron ki dikhawati kamyabi dekhkar khud ko bekaar aur pichhda hua samajhne lagte hain.',
    oneLineExplanation: 'Apne unedited backstage ko doosro ke glamorous trailer se compare karna.',
    summary30s: 'Leon Festinger ne 1954 me bataya ki insaan apni value doosro ko dekhkar tay karta hai. Aaj social media par algorithms hume har waqt top 0.01% ameer aur khoobsurat log dikhate hain. Insaan apni roz ki thakan aur pareshaniyon ko doosro ki vacation photos aur LinkedIn promotions se compare karta hai, jisse dimagi bechaini aur self-doubt paida hota hai.',
  },
  hi: {
    ...TOPIC_SOCIAL_COMPARISON_EN,
    title: 'Social Comparison Theory (सामाजिक तुलना सिद्धांत)',
    subtitle: 'अपने वास्तविक संघर्षों की तुलना दूसरों के सजाए गए आभासी प्रदर्शन से करने की पीड़ा।',
    shortDescription: 'दूसरों के संदर्भ में अपने आत्म-मूल्य और सफलताओं का आकलन करने की मनोवैज्ञानिक प्रवृत्ति, जिसे सोशल मीडिया एल्गोरिदम द्वारा अत्यधिक विकृत कर दिया गया है।',
    oneLineExplanation: 'अपने जीवन के पर्दे के पीछे के संघर्ष की तुलना दूसरों के मंच के प्रदर्शन से करना।',
    summary30s: 'सामाजिक तुलना सिद्धांत (Social Comparison Theory) के अनुसार मनुष्य का आत्म-सम्मान तुलनात्मक होता है। 1954 में लियोन फेस्टिंगर द्वारा प्रतिपादित यह सिद्धांत बताता है कि सोशल मीडिया पर दूसरों की चयनित सफलताओं और छुट्टियों की तस्वीरों को देखकर मस्तिष्क यह मान लेता है कि बाकी सभी खुशहाल हैं और केवल वही पीछे छूट गया है।',
  },
  gu: createLocalizedRecord('gu', "Social Comparison Theory: The Agony of the Curated Feed (સિદ્ધાંત)", "Social Comparison Theory: The Agony of the Curated Feed એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "Social Comparison Theory: The Agony of the Curated Feed (सिद्धांत)", "Social Comparison Theory: The Agony of the Curated Feed हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "Social Comparison Theory: The Agony of the Curated Feed (సిద్ధాంతం)", "Social Comparison Theory: The Agony of the Curated Feed అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "Social Comparison Theory: The Agony of the Curated Feed (கோட்பாடு)", "Social Comparison Theory: The Agony of the Curated Feed என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "Social Comparison Theory: The Agony of the Curated Feed (ಸಿದ್ಧಾಂತ)", "Social Comparison Theory: The Agony of the Curated Feed ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "Social Comparison Theory: The Agony of the Curated Feed (സിദ്ധാന്തം)", "Social Comparison Theory: The Agony of the Curated Feed എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "Social Comparison Theory: The Agony of the Curated Feed (তত্ত্ব)", "Social Comparison Theory: The Agony of the Curated Feed হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "Social Comparison Theory: The Agony of the Curated Feed (ਸਿਧਾਂਤ)", "Social Comparison Theory: The Agony of the Curated Feed ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "Social Comparison Theory: The Agony of the Curated Feed (نظریہ)", "Social Comparison Theory: The Agony of the Curated Feed انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "Social Comparison Theory: The Agony of the Curated Feed (ସିଦ୍ଧାନ୍ତ)", "Social Comparison Theory: The Agony of the Curated Feed ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "Social Comparison Theory: The Agony of the Curated Feed (তত্ত্ব)", "Social Comparison Theory: The Agony of the Curated Feed সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
