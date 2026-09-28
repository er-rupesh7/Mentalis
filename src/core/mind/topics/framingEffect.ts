import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: The Framing Effect: How Presentation Alters Reality
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Tversky & Kahneman (1981): The framing of decisions and the psychology of choice
 * - Levin, Schneider & Gaeth (1998): All frames are not created equal
 * - Kahneman (2011): Thinking, Fast and Slow (Part 4: Choices)
 */

export const TOPIC_FRAMING_EFFECT_EN: MindTopicDetail = {
  id: 'framing_effect',
  categoryId: 'cognitive_biases',
  slug: 'framing-effect',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 6,
  viewCount: 7890,
  shareCount: 610,
  bookmarkCount: 1350,
  title: 'The Framing Effect: How Presentation Alters Reality',
  subtitle: 'The same objective facts provoke opposite human reactions depending purely on whether they are framed as gains or losses.',
  shortDescription: 'A cognitive bias where people decide on options based on whether they are presented with positive (gains) or negative (losses) connotations.',
  oneLineExplanation: '90% fat-free sounds like health food; 10% fat sounds like clogged arteries.',

  summary30s: 'The framing effect proves that human rationality is context-dependent. When the exact same factual information is presented in terms of gains ("90% survival rate"), people become risk-averse and seek security. When presented in terms of losses ("10% mortality rate"), people become reckless gamblers to avoid the pain of a loss.',

  coreConcept: 'Demonstrated in 1981 by Amos Tversky and Daniel Kahneman, the framing effect derives directly from Prospect Theory. Humans do not process information in an abstract, mathematical vacuum; we process it through emotional reference points. Because losses loom roughly twice as large psychologically as equivalent gains (loss aversion), shifting the linguistic frame from "lives saved" to "lives lost" completely reverses majority human preferences.',
  summary60s: 'Imagine a physician presenting a surgical option to you. In Scenario A, she says: "The one-month survival rate for this surgery is 90%." Most patients agree immediately. In Scenario B, she says: "There is a 10% mortality rate within the first month." The mathematical probabilities are mathematically identical. Yet in Scenario B, rejection rates more than double. The word "mortality" activates the amygdala\'s threat circuitry, while "survival" activates relief. Marketers, politicians, and media networks exploit this constantly.',

  quickTakeaways: [
    'Gain Frames Promote Caution: When thinking about gains (lives saved, money made), humans avoid risky gambles',
    'Loss Frames Trigger Desperation: When facing guaranteed losses, humans take irrational, high-variance risks to escape the pain',
    'Linguistic Packaging: Words like "discount", "surcharge", "survival", and "casualty" steer decisions before logical analysis begins',
    'The Inversion Antidote: Always invert the frame (calculate the opposite mathematical percentage) before signing or agreeing',
  ],

  whyItHappens: 'Neurobiological integration of emotion and reason. Language triggers visceral emotional reactions before our prefrontal cortex can compute mathematical equivalencies. Words with survival implications bypass analytical skepticism.',
  evolutionaryMechanism: 'Ancestral organisms operating near subsistence thresholds could not afford losses; losing 50% of winter food supplies was fatal, whereas gaining 50% extra was merely beneficial. Hence, threats and losses received preferential neural processing.',

  howItWorks: 'The brain establishes a reference point: (1) Frame Input: Information enters as a gain or a loss relative to a baseline; (2) Emotional Valence: Positive wording activates reward expectation; negative wording triggers loss aversion; (3) Choice Shift: Risk avoidance under gain frames; risk-seeking under loss frames.',
  whereYouEncounterIt: 'Supermarket labels ("80% lean meat" vs "20% fat"), credit card processing ("cash discount" vs "card surcharge"), medical consent forms, political ballot initiatives, and climate change communications.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Gain Frame vs. Loss Frame',
    description: 'How identical underlying math produces diametrically opposed psychological actions.',
    analogySideA: {
      label: 'Gain Frame (Risk-Averse)',
      detail: '"Option A guarantees 200 out of 600 people will be saved." -> 72% choose this safe option.',
    },
    analogySideB: {
      label: 'Loss Frame (Risk-Seeking)',
      detail: '"Option B guarantees 400 out of 600 people will die." -> 78% gamble on an all-or-nothing alternative.',
    },
  },

  researchSummary: 'In Tversky & Kahneman\'s famous "Asian Disease Problem" (1981), participants were asked to choose between two treatments for an epidemic expected to kill 600 people. When formulated in terms of lives saved, 72% chose the certain option (200 saved) over the probabilistic gamble. When formulated in terms of deaths, 78% rejected the certain option (400 die) and gambled on the risky alternative.',
  limitationsAndControversies: 'Levin, Schneider & Gaeth (1998) categorized framing into three distinct empirical types: risky choice framing (Asian disease problem), attribute framing (beef fat content), and goal framing (mammography detection benefits vs costs). Each relies on distinct cognitive mechanisms and varies in magnitude.',
  commonMisconceptions: 'Common myth: "Framing is just a cosmetic wording preference that intelligent decision-makers easily ignore." Reality: Controlled fMRI studies demonstrate that emotional framing activates amygdala pathways directly before analytical prefrontal cortex reasoning can engage.',

  howToRecognize: [
    'Feeling an immediate sense of relief or panic based on how a percentage or statistic is phrased in a headline',
    'Preferring a product labeled "sugar-free" while ignoring the 400 calories of fat and chemical binders listed in the ingredients',
    'Agreeing to a "free 30-day trial with automatic renewal" because the word "free" masks the future negative recurring subscription liability',
    'Noticing that a sales representative describes costs as "only $3 a day" instead of "$1,100 per year"',
  ],

  scenarios: [
    {
      id: 'scen_frame_01',
      scenarioType: 'indian_context',
      title: 'The Health Food Packaging Mirage in Pune',
      vignette: 'Anand is shopping in a Pune supermarket and sees two packages of frozen chicken breast. Brand A proudly displays a bright green banner: "95% FAT FREE!" Brand B has a plain label: "CONTAINS 5% ANIMAL FAT." Anand immediately puts Brand A in his basket, remarking to his gym partner: "Brand A is so much cleaner and healthier." His partner points out that both brands have identical fat content, but Brand A costs ₹180 more per kilogram.',
      breakdownAnalysis: 'Anand was influenced by attribute framing. The term "fat-free" directs mental spotlighting toward fitness and wellness, completely suppressing the reality that both products are chemically identical.',
      recommendedAction: 'Always re-frame the numbers mathematically: "95% fat-free equals 5% pure fat. Look at the absolute nutritional breakdown per 100 grams, not the packaging adjectives."',
    },
  ],

  examples: [
    {
      id: 'ex_frame_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'Gas Station Cash Discount vs Credit Surcharge',
      description: 'A petrol pump owner who charges a "credit card surcharge of ₹2" enrages customers. When they instead list the higher price as standard and offer a "₹2 cash discount," customers feel rewarded and delighted, despite the identical net prices.',
      takeaway: 'People hate paying penalties (losses), but love receiving discounts (gains).',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_frame_01',
      scenarioContext: 'A chief technology officer is evaluating two database backup systems. Vendor A pitches: "Our system guarantees 99.9% uptime per quarter." Vendor B pitches: "Our system has less than 8.7 hours of downtime per year." The underlying uptime mathematics are practically identical.',
      question: 'Why might the CTO prefer Vendor A over Vendor B purely due to the framing effect?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Because Vendor A emphasizes reliability (a gain frame), whereas Vendor B explicitly mentions hours of downtime (a loss frame)',
          explanation: 'Accurate: the word "downtime" triggers loss aversion and imagery of outages, while "uptime" evokes safety.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Because Vendor A’s technology is inherently faster due to proprietary algorithmic compression',
          explanation: 'This assumes unstated technical superiority when the question stipulated mathematical equivalence.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Because enterprise software buyers never experience cognitive biases when evaluating numerical contracts',
          explanation: 'Empirical studies prove senior executives are equally vulnerable to framing manipulations.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Always convert both gain and loss frames into a standardized, neutral objective unit before comparing options.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Actively reframe proposals into their mathematical complement (e.g. translate 90% survival into 10% mortality) before deciding.',
  psychologicalDefenses: [
    {
      title: 'The Dual-Frame Audit',
      instruction: 'Whenever you see a statistic, mentally force yourself to state the exact complement. If someone says "92% satisfaction," immediately say out loud: "8% of users were dissatisfied."',
    },
    {
      title: 'Standardize Units of Measurement',
      instruction: 'Convert fragmented frames ("$2 a day", "per week", "micro-installments") into total annual cost figures to evaluate the real expenditure.',
    },
    {
      title: 'Neutral Baseline Translation',
      instruction: 'Strip adjectives and emotional framing words out of contracts or proposals; represent the choice in a plain two-column table of numbers.',
    },
  ],

  reflectionPrompt: 'Recall a sales pitch or news headline that swayed you. How does the choice look when you reframe the numbers in reverse?',

  references: [
    {
      id: 'ref_tversky_1981',
      authors: 'Tversky, A., & Kahneman, D.',
      year: 1981,
      title: 'The framing of decisions and the psychology of choice',
      publicationName: 'Science',
      volumeIssue: '211(4481), 453-458',
      doi: '10.1126/science.7455683',
      evidenceStrength: 'landmark_paper',
    },
    {
      id: 'ref_levin_1998',
      authors: 'Levin, I. P., Schneider, S. L., & Gaeth, G. J.',
      year: 1998,
      title: 'All frames are not created equal: A typology and critical analysis of framing effects',
      publicationName: 'Organizational Behavior and Human Decision Processes',
      volumeIssue: '76(2), 149-188',
      doi: '10.1006/obhd.1998.2804',
      evidenceStrength: 'systematic_review',
    },
  ],

  relatedTopics: [
    {
      topicId: 'loss_aversion',
      slug: 'loss-aversion',
      title: 'Loss Aversion',
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
    ...TOPIC_FRAMING_EFFECT_EN,
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

export const TOPIC_FRAMING_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_FRAMING_EFFECT_EN,
  hinglish: {
    ...TOPIC_FRAMING_EFFECT_EN,
    title: 'The Framing Effect: Baatchit Ka Tareeqa Decision Kaise Badal Deta Hai',
    subtitle: 'Wahi facts alag shabdon me pesh karne se logon ki soch 180 degree ghoom jati hai.',
    shortDescription: 'Ek aisa cognitive bias jisme log wahi decision badal dete hain agar baat ko fayde (gain) ya nuksan (loss) ke frame me bola jaye.',
    oneLineExplanation: '90% fat-free bolne par healthy lagta hai, jabki 10% fat bolne par bimari lagti hai.',
    summary30s: 'Framing Effect batata hai ki insaan ka dimaag sirf facts nahi dekhta, balki yeh dekhta hai ki facts ko kis packaging me pesh kiya gaya hai. Jab doctor bolta hai "90% survival rate", toh log khush hote hain. Lekin jab bolta hai "10% mortality risk", toh log darr jate hain, jabki dono ka matlab bilkul ek hi hai.',
  },
  hi: {
    ...TOPIC_FRAMING_EFFECT_EN,
    title: 'The Framing Effect (फ्रेमिंग प्रभाव)',
    subtitle: 'प्रस्तुति का तरीका कैसे वास्तविकता और निर्णयों को बदल देता है।',
    shortDescription: 'समान तथ्यों को लाभ (gains) या हानि (losses) के रूप में प्रस्तुत करने पर लोगों के निर्णयों में आने वाला नाटकीय बदलाव।',
    oneLineExplanation: '90% वसा-मुक्त पौष्टिक लगता है; 10% वसा अस्वास्थ्यकर लगती है।',
    summary30s: 'फ्रेमिंग प्रभाव (Framing Effect) के अनुसार हमारे निर्णय इस बात से प्रभावित होते हैं कि जानकारी को सकारात्मक दृष्टिकोण से प्रस्तुत किया गया है या नकारात्मक से। उदाहरण के लिए "90% जीवित रहने की दर" और "10% मृत्यु दर" सांख्यिकीय रूप से समान होने पर भी लोगों से विपरीत प्रतिक्रियाएँ प्राप्त करते हैं।',
  },
  gu: createLocalizedRecord('gu', "The Framing Effect: How Presentation Alters Reality (પ્રભાવ)", "The Framing Effect: How Presentation Alters Reality એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "The Framing Effect: How Presentation Alters Reality (प्रभाव)", "The Framing Effect: How Presentation Alters Reality हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "The Framing Effect: How Presentation Alters Reality (ప్రభావం)", "The Framing Effect: How Presentation Alters Reality అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "The Framing Effect: How Presentation Alters Reality (விளைவு)", "The Framing Effect: How Presentation Alters Reality என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "The Framing Effect: How Presentation Alters Reality (ಪರಿಣಾಮ)", "The Framing Effect: How Presentation Alters Reality ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "The Framing Effect: How Presentation Alters Reality (സ്വാധീനം)", "The Framing Effect: How Presentation Alters Reality എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "The Framing Effect: How Presentation Alters Reality (প্রভাব)", "The Framing Effect: How Presentation Alters Reality হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "The Framing Effect: How Presentation Alters Reality (ਪ੍ਰਭਾਵ)", "The Framing Effect: How Presentation Alters Reality ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "The Framing Effect: How Presentation Alters Reality (اثر)", "The Framing Effect: How Presentation Alters Reality انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "The Framing Effect: How Presentation Alters Reality (ପ୍ରଭାବ)", "The Framing Effect: How Presentation Alters Reality ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "The Framing Effect: How Presentation Alters Reality (প্ৰভাৱ)", "The Framing Effect: How Presentation Alters Reality সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
