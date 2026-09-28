import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Emotions & Regulation Track
 * Topic: The Affect Heuristic: How Gut Feelings Hijack Logic
 * Category: Emotions & Regulation (emotions)
 * 
 * Academic Grounding:
 * - Slovic et al. (2002): The affect heuristic
 * - Zajonc (1980): Feeling and thinking: Preferences need no inferences
 * - Alhakami & Slovic (1994): A psychological study of the inverse relationship between perceived risk and perceived benefit
 */

export const TOPIC_AFFECT_HEURISTIC_EN: MindTopicDetail = {
  id: 'affect_heuristic',
  categoryId: 'emotions',
  slug: 'affect-heuristic',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 3,
  viewCount: 6540,
  shareCount: 470,
  bookmarkCount: 1120,
  title: 'The Affect Heuristic: How Gut Feelings Hijack Logic',
  subtitle: 'We consult our instantaneous emotional state—"How do I feel about this?"—instead of analyzing risks and benefits.',
  shortDescription: 'A mental shortcut where people make decisions and evaluate risks based on rapid positive or negative emotional impressions rather than factual data.',
  oneLineExplanation: 'If it makes you feel good, you assume it has zero risk; if it makes you feel bad, you assume it has zero benefit.',

  summary30s: 'The affect heuristic proves that feelings precede and dominate thoughts. When evaluating a technology, medicine, or investment, our brain takes a fast emotional snapshot ("Do I like this?"). If the feeling is positive, we irrationally conclude that the benefits are enormous and the risks are negligible. If the feeling is negative, we conclude the risks are astronomical and the benefits are zero.',

  coreConcept: 'Pioneered by Paul Slovic, Melissa Finucane, Ellen Peters, and Donald MacGregor (2002), the affect heuristic demonstrates an inverse relationship between perceived risk and perceived benefit. In the objective physical world, risk and benefit are positively correlated (high payoff usually requires high risk). But in human psychology, they are negatively correlated: things we like are deemed low-risk and high-benefit; things we dislike are deemed high-risk and zero-benefit.',
  summary60s: 'Consider public perceptions of nuclear power versus solar energy. People who emotionally dislike nuclear power rate its risks as catastrophic and its benefits as negligible. People who love solar energy believe it has infinite clean benefits with zero ecological footprint (completely ignoring the toxic chemical mining required for photovoltaic cells and battery storage). The emotional valence ("affect pool") dictates the analytical conclusion. We do not use logic to arrive at an opinion; we use logic to justify an immediate visceral emotional response.',

  quickTakeaways: [
    'The Inverse Risk-Benefit Mirage: Things you love feel risk-free; things you dislike feel dangerous',
    'Feelings Over Facts: Robert Zajonc demonstrated that emotional preferences occur within milliseconds, long before cognitive processing kicks in',
    'Manipulative Imagery: Politicians and advertisers use smiling children or gloomy storm clouds to tint your affect pool before discussing policy',
    'Decoupled Matrix Antidote: Evaluate risks and benefits in two physically separate worksheets at two different times of day',
  ],

  whyItHappens: 'Computational efficiency. Calculating complex actuarial risk matrices requires extensive mathematical modeling. Looking inside your chest to see if your stomach clenches or your chest warms up takes 0.05 seconds.',
  evolutionaryMechanism: 'A hunter-gatherer encountering a rustling bush could not perform a probabilistic regression. A visceral flash of fear provoked immediate defensive flight, preserving life across millions of evolutionary trials.',

  howItWorks: 'The affect-substitution loop: (1) Prompt Encountered: Evaluating a new policy, medical drug, or person; (2) Affect Tagging: The emotional tag (positive or negative) surfaces instantly; (3) Attribute Alignment: Perceived benefits and risks are warped to match the emotional tag; (4) Firm Decision: Declaring certainty with absolute conviction.',
  whereYouEncounterIt: 'Attitudes toward cryptocurrency (enthusiasts see only wealth and zero volatility; critics see only crime and zero innovation), pesticide bans, political candidate evaluation, and dating.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Real-World Actuarial Reality vs. Psychological Affect',
    description: 'How emotion inverts the natural correlation between risk and benefit.',
    analogySideA: {
      label: 'Objective Economic Reality (Positive Correlation)',
      detail: 'High Expected Benefits are almost always paired with High Objective Risks (e.g., startup equity).',
    },
    analogySideB: {
      label: 'Psychological Affect Heuristic (Negative Correlation)',
      detail: '"If I like it, it has High Benefit and Low Risk. If I hate it, it has Low Benefit and High Risk."',
    },
  },

  researchSummary: 'Finucane et al. (2000) gave participants text arguing that a specific chemical technology had high benefits. Astonishingly, participants who read that the technology was high-benefit immediately reduced their estimation of its risks, even though the text provided zero information about safety. Changing the emotional valence shifted both sides of the equation.',
  limitationsAndControversies: 'While the affect heuristic can produce severe blind spots in financial and scientific analysis, emotional intuition (somatic markers) is also essential for rapid decision making in domain experts, such as experienced firefighters or emergency physicians.',
  commonMisconceptions: 'Common myth: "Logical pros-and-cons lists protect us from gut feelings." Reality: Paul Slovic showed that emotional affect dictates the pros-and-cons list itself: when we feel good about something, our brain automatically invents benefits and minimizes perceived risks.',

  howToRecognize: [
    'Believing an investment you love has "virtually no downside" while ignoring clear liquidity and regulatory risks',
    'Rejecting a scientifically proven medication or vaccine purely because "it feels unnatural or synthetic"',
    'Assuming a charismatic, handsome political candidate must have brilliant economic and foreign policies',
    'Becoming furious when someone presents data showing that your favorite hobby or habit carries medical risks',
  ],

  scenarios: [
    {
      id: 'scen_aff_01',
      scenarioType: 'indian_context',
      title: 'The "All-Natural" Herbal Supplement Trap in Jaipur',
      vignette: 'Meena in Jaipur suffers from mild arthritis. Her neighbor brings her an uncertified green bottle of imported "100% Forest Herb Joint Extract" costing ₹4,500. The label features picturesque snow-capped mountains and tranquil meditation gurus. When Meena\'s son points out that the product has no laboratory safety certification, no list of heavy metal testing, and could cause liver toxicity, Meena dismisses him angrily: "Look at the packaging! It is completely natural and spiritual. Nature cannot harm human biology; only Western chemical pills have side effects."',
      breakdownAnalysis: 'Meena is ruled by the affect heuristic. The warm, holistic, green imagery creates an intensely positive emotional feeling. Because she likes the concept of "natural forest herbs," her brain automatically concludes it carries zero risk and maximum benefit.',
      recommendedAction: 'Decouple emotional adjectives from biochemical pharmacology: "Poison ivy, snake venom, and arsenic are all 100% natural. Everything we ingest must be judged by independent mass-spectrometry chemical testing, not packaging aesthetics."',
    },
  ],

  examples: [
    {
      id: 'ex_aff_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'The Electric Vehicle Stock Mania',
      description: 'An investor who passionately cares about climate change buys stock in an unproven electric vehicle company with zero revenue at a $50 billion valuation, convinced it is a "guaranteed moneymaker" because "green energy is the future."',
      takeaway: 'Confusing moral admiration for a mission with the financial valuation of a business.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_aff_01',
      scenarioContext: 'A venture capital firm is evaluating a breakthrough medical diagnostics startup. The CEO is an articulate, charismatic, philanthropic founder who previously ran non-profit clinics in rural areas. The partner committee falls in love with the founder and writes a $10 million check after a single 45-minute pitch meeting.',
      question: 'Which cognitive vulnerability did the partner committee fall prey to?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'The affect heuristic: their warm emotional admiration for the founder caused them to assume the medical technology carried minimal technical and regulatory risk',
          explanation: 'Accurate: positive affective glow suppressed standard objective scientific due diligence and stress-testing.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'The bystander effect: waiting for other venture capital firms to lead the funding round',
          explanation: 'They did not wait; they invested impulsively based on affective resonance.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'The decoy effect: comparing the investment to a deliberately inferior candidate',
          explanation: 'The decision was driven by emotional halo and affective tagging, not choice architecture decoys.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Charisma and moral warmth create positive affect pools that blind evaluators to objective technical hazards.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Force a cooling-off period and build a structured scoring rubric before greenlighting any idea you feel euphoric about.',
  psychologicalDefenses: [
    {
      title: 'The Unbundled Risk/Benefit Audit',
      instruction: 'Whenever you evaluate a decision you feel passionately about, force yourself to write a list of 5 serious, plausible ways this venture could completely ruin you financially or reputationally.',
    },
    {
      title: 'The Cold-State Second Review',
      instruction: 'Never sign a contract or commit capital during or immediately after a high-energy pitch meeting. Wait until your emotional temperature has dropped back to neutral baseline.',
    },
    {
      title: 'Strip Emotional Adjectives from Proposals',
      instruction: 'When reviewing reports, mentally redact words like "revolutionary," "heartwarming," "disruptive," or "menacing," and evaluate only the underlying numerical equations.',
    },
  ],

  reflectionPrompt: 'Have you ever fallen in love with a gadget or investment and dismissed all warning signs because you "just had a good feeling"?',

  references: [
    {
      id: 'ref_slovic_2002',
      authors: 'Slovic, P., Finucane, M. L., Peters, E., & MacGregor, D. G.',
      year: 2002,
      title: 'The affect heuristic',
      publicationName: 'Heuristics and Biases: The Psychology of Intuitive Judgment',
      volumeIssue: '397-420',
      doi: '10.1017/CBO9780511808098.025',
      evidenceStrength: 'foundational_monograph',
    },
    {
      id: 'ref_zajonc_1980',
      authors: 'Zajonc, R. B.',
      year: 1980,
      title: 'Feeling and thinking: Preferences need no inferences',
      publicationName: 'American Psychologist',
      volumeIssue: '35(2), 151-175',
      doi: '10.1037/0003-066X.35.2.151',
      evidenceStrength: 'historical_classic',
    },
  ],

  relatedTopics: [
    {
      topicId: 'emotional_regulation',
      slug: 'emotional-regulation',
      title: 'Emotional Regulation',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'framing_effect',
      slug: 'framing-effect',
      title: 'The Framing Effect',
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
    ...TOPIC_AFFECT_HEURISTIC_EN,
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

export const TOPIC_AFFECT_HEURISTIC: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_AFFECT_HEURISTIC_EN,
  hinglish: {
    ...TOPIC_AFFECT_HEURISTIC_EN,
    title: 'The Affect Heuristic: Dil Ki Pasand Se Dimaag Ka Faisla Badalna',
    subtitle: 'Jab hum kisi cheez ko pasand karte hain, toh lagta hai usme zero risk hai; jab nafrat karte hain, toh lagta hai bekaar hai.',
    shortDescription: 'Ek aisa mental shortcut jisme insaan factual analysis ke bajaye apne instant emotional feeling ("How do I feel?") par faisla le leta hai.',
    oneLineExplanation: 'Agar dil ko acha laga toh safe hai; bura laga toh dangerous hai.',
    summary30s: 'Paul Slovic ne prove kiya ki insaan risk aur benefit ko mathematically calculate nahi karta, balki emotions se judge karta hai. Agar kisi ko solar energy pasand hai, toh use lagta hai isme koi risk nahi hai. Agar kisi ko nuclear energy se darr lagta hai, toh use lagta hai iska koi fayda nahi hai. Logic hamesha emotion ke peeche daudta hai.',
  },
  hi: {
    ...TOPIC_AFFECT_HEURISTIC_EN,
    title: 'The Affect Heuristic (भावानुभूति अनुमानी)',
    subtitle: 'तार्किक विश्लेषण के स्थान पर तात्कालिक भावनात्मक प्रतिक्रिया द्वारा जोखिम और लाभ का निर्णय।',
    shortDescription: 'तथ्यों और आंकड़ों के बजाय आंतरिक भावनात्मक अनुभूतियों ("मुझे कैसा महसूस हो रहा है?") के आधार पर निर्णय लेने का संज्ञानात्मक शॉर्टकट।',
    oneLineExplanation: 'यदि कोई वस्तु प्रिय लगती है, तो उसका जोखिम शून्य प्रतीत होता है।',
    summary30s: 'भावानुभूति अनुमानी (Affect Heuristic) के अनुसार मनुष्य किसी निर्णय के लाभ और जोखिम का आकलन अपनी तात्कालिक भावना के आधार पर करता है। पॉल स्लोविक के शोध से पता चलता है कि वास्तविक दुनिया में उच्च लाभ के साथ उच्च जोखिम जुड़ा होता है, परंतु मानवीय मनोविज्ञान में जिस वस्तु को हम पसंद करते हैं, उसे हम स्वतः कम जोखिम और उच्च लाभ वाली मान लेते हैं।',
  },
  gu: createLocalizedRecord('gu', "The Affect Heuristic: How Gut Feelings Hijack Logic (અનુમાની)", "The Affect Heuristic: How Gut Feelings Hijack Logic એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "The Affect Heuristic: How Gut Feelings Hijack Logic (अनुमानी)", "The Affect Heuristic: How Gut Feelings Hijack Logic हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "The Affect Heuristic: How Gut Feelings Hijack Logic (అనుమానం)", "The Affect Heuristic: How Gut Feelings Hijack Logic అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "The Affect Heuristic: How Gut Feelings Hijack Logic (உள்ளுணர்வு)", "The Affect Heuristic: How Gut Feelings Hijack Logic என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "The Affect Heuristic: How Gut Feelings Hijack Logic (ಅನುಮಾನಿಕ)", "The Affect Heuristic: How Gut Feelings Hijack Logic ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "The Affect Heuristic: How Gut Feelings Hijack Logic (അനുമാനം)", "The Affect Heuristic: How Gut Feelings Hijack Logic എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "The Affect Heuristic: How Gut Feelings Hijack Logic (অনুমান)", "The Affect Heuristic: How Gut Feelings Hijack Logic হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "The Affect Heuristic: How Gut Feelings Hijack Logic (ਅੰਦਾਜ਼ਾ)", "The Affect Heuristic: How Gut Feelings Hijack Logic ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "The Affect Heuristic: How Gut Feelings Hijack Logic (قیاس)", "The Affect Heuristic: How Gut Feelings Hijack Logic انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "The Affect Heuristic: How Gut Feelings Hijack Logic (ଅନୁମାନ)", "The Affect Heuristic: How Gut Feelings Hijack Logic ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "The Affect Heuristic: How Gut Feelings Hijack Logic (অনুমান)", "The Affect Heuristic: How Gut Feelings Hijack Logic সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
