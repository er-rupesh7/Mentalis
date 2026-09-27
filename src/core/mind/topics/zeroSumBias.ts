import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Decision Making Track
 * Topic: Zero-Sum Bias: Mistaking Win-Win Synergy for a Finite Pie
 * Category: decision_making
 * Academic Grounding: Richard Meegan (2010) (10.1080/1047840x.2010.504106)
 */

export const TOPIC_ZERO_SUM_BIAS_EN: MindTopicDetail = {
  id: 'zero_sum_bias',
  categoryId: 'decision_making',
  slug: 'zero-sum-bias',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 14,
  viewCount: 4740,
  shareCount: 406,
  bookmarkCount: 848,
  title: "Zero-Sum Bias: Mistaking Win-Win Synergy for a Finite Pie",
  subtitle: "The cognitive distortion that one party's gain must inherently come at the direct expense of another, blinding decision-makers to cooperative surplus.",
  shortDescription: "A cognitive bias that causes people to intuitively judge that a situation is zero-sum (what one gains, another loses) even when it is strictly positive-sum.",
  oneLineExplanation: "Assuming there is only one slice of cake, so if you get a bite, I must starve—ignoring that together we could bake a bakery.",

  summary30s: "Analyzed by Richard Meegan in 2010 and demonstrated across global cultures by Joanna Rozycka-Tran in 2015, Zero-Sum Bias causes humans to view voluntary transactions and negotiations as warfare. We reflexively assume that if another company, coworker, or nation is prospering, our own group is secretly being exploited, completely blinding us to positive-sum value creation.",
  coreConcept: "In a true zero-sum game (like poker or chess), points won equals points lost. In economics, free trade, and scientific collaboration, interactions are positive-sum: voluntary cooperation creates entirely new surplus wealth that did not previously exist. Zero-sum bias drives people into destructive protectionism, hostile price-wars, and toxic departmental infighting, actively destroying value for all participants.",
  summary60s: "In psychological experiments, participants were asked about international trade. When told that Country A had increased its exports to Country B by 20%, participants overwhelmingly inferred that Country B's economy had declined—even when explicitly presented with data showing that Country B's GDP had grown due to cheaper consumer goods and specialized machinery imports. The human brain struggles to conceptualize mutual economic growth.",
  quickTakeaways: [
    "The \"Fixed Pie\" Delusion: Negotiations are rarely about slicing an existing pie; they are about expanding the total pie",
    "Positive-Sum Thinking: Ask: \"What cooperative synergy creates new value that neither of us could build alone?\"",
    "The Co-Founder Trap: Fighting over 51% vs. 49% of a zero-revenue startup kills the 100x potential of the business",
    "Abundance vs. Scarcity Mindset: Recognize that another's success does not subtract from your talent or opportunity",
  ],

  whyItHappens: "Evolutionary resource scarcity. For 99% of human history, ancestral resources (land, hunted mammoths, cave shelter) were strictly physical and finite.",
  evolutionaryMechanism: "In ancient tribal hunter bands, if another tribe gained river territory, your tribe lost it. Modern cognitive architecture still carries this hunter-gatherer zero-sum wiring.",
  howItWorks: "Partner suggests win-win collaboration -> Brain defaults to finite pie model -> Suspects hidden trick (\"If they are profiting, I am losing\") -> Adopts adversarial hardball tactics -> Both parties walk away empty-handed.",
  whereYouEncounterIt: "Startup co-founder equity splits, salary negotiations, international trade tariffs, corporate joint ventures, and sibling inheritance disputes.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Adversarial Fixed-Pie vs. Collaborative Surplus",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Zero-Sum Fixed Pie (Destructive)",
      detail: "\"If my co-founder gets 50% equity, that is 50% less wealth for me; I must demand 70% to protect myself.\"",
    },
    analogySideB: {
      label: "Positive-Sum Value Creation",
      detail: "\"50% of a ₹100-crore company built with a motivated partner is worth infinitely more than 100% of a dead idea.\"",
    },
  },

  researchSummary: "Meegan (2010) and Rozycka-Tran et al. (2015) published extensive cross-cultural validation of the \"Belief in a Zero-Sum Game\" in JPSP.",
  limitationsAndControversies: 'Contextual variables include individual cognitive reflection, cultural collectivism, stake size, and institutional transparency.',
  commonMisconceptions: 'Common myth: Intellectual intelligence or domain expertise protects individuals from this dynamic. Reality: Controlled empirical trials prove that cognitive reflection tests and structured institutional rubrics are necessary to prevent distortion.',

  howToRecognize: [
    'Noticing an immediate emotional reluctance to question an emerging collective consensus',
    'Feeling personal accountability evaporate when responsibility is diffused into a committee',
    'Justifying an inconsistent action through creative rationalization rather than behavioral adjustment',
    'Experiencing decision paralysis when presented with an uncurated set of alternatives',
  ],

  scenarios: [
    {
      id: 'scen_zero_sum_bias_01',
      scenarioType: 'indian_context',
      title: "The Bitter Co-Founder Equity Fight in HSR Layout",
      vignette: "Arjun and Nikhil build a promising SaaS platform in Bangalore. Arjun is the technical wizard; Nikhil is the enterprise sales rainmaker. When incorporating the private limited entity, Arjun demands 65% equity, arguing: \"Code is everything; if I give you 50%, you are taking 15% out of my pocket.\" Nikhil is insulted and counters with demands for veto control. They spend four months arguing through corporate lawyers, burning their angel investment on legal fees while ignoring customer pilots. While they bicker over exact percentages of an unreleased product, a nimble rival launches, capturing the enterprise market. The startup goes bankrupt before shipping version 1.0.",
      breakdownAnalysis: "A textbook real-world tragedy driven by Zero-Sum Bias. Arjun and Nikhil treated the startup equity as a fixed, finite pie, completely forgetting that 50% of a thriving venture is worth exponentially more than 100% of a bankrupt shell.",
      recommendedAction: "Adopt the Harvard Negotiation Project framework: focus on mutual interests, create options for mutual gain, and separate relationship trust from structural equity vesting.",
    },
  ],

  examples: [
    {
      id: 'ex_zero_sum_bias_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_zero_sum_bias_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_zero_sum_bias_01',
      scenarioContext: "Two neighboring retail shopkeepers in Chandni Chowk, Delhi, sell spices. Shopkeeper A starts a joint delivery WhatsApp service with Shopkeeper B, allowing both to offer 30-minute delivery to customers. After one month, sales for both shops increase by 35%. However, Shopkeeper A cancels the service because: \"Shopkeeper B made ₹5,000 more than me this week!\"",
      question: "Which cognitive bias led Shopkeeper A to destroy a mutually profitable partnership?",
      prompt: "Which cognitive bias led Shopkeeper A to destroy a mutually profitable partnership?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Prospect Theory certainty effect",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Zero-sum bias causing him to view his partner's relative gain as his own personal loss despite positive-sum growth",
          isCorrect: true,
          explanation: "Zero-sum bias causes people to judge situations as win-lose; Shopkeeper A focused on relative inequality rather than the absolute 35% growth in his own business.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Social loafing in spice packing",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "The Dunning-Kruger effect regarding spices",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Focus on growing the total pie: celebrating a partner's gain is the secret to building enduring wealth.",
    },
  ],

  howToRespond: 'Implement structured individual accountability, pre-commitments, and independent auditing protocols.',
  psychologicalDefenses: [
    {
      title: 'Independent Analytical Separation',
      instruction: 'Formulate your assessment and write down confidence intervals privately before hearing the group consensus or market narrative.',
    },
    {
      title: 'Counterfactual Inversion',
      instruction: 'Explicitly invert the proposition: "If the exact opposite hypothesis were true, what tangible evidence would we expect to observe today?"',
    },
    {
      title: 'Binding Ulysses Pre-Commitments',
      instruction: 'Lock in objective exit points, decision rules, and resource ceilings in advance when your mind is calm and uncompromised.',
    },
  ],

  reflectionPrompt: 'Where in your daily professional or personal life are you quietly conforming to an unspoken norm that you privately recognize as irrational?',
  references: [
    {
      id: 'ref_zero_sum_bias_01',
      title: "Zero-sum bias: perceived competition where none exists",
      citation: "Meegan, R. (2010). Zero-sum bias: perceived competition where none exists. Journal of General Psychology, 137(3), 264–289.",
      authors: "Richard Meegan",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1080/1047840x.2010.504106",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Decision Making', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'realistic_conflict_theory', slug: 'realistic-conflict-theory', title: 'Realistic Conflict Theory', relationshipType: 'amplified_by' },
    { topicId: 'social_identity_theory', slug: 'social-identity-theory', title: 'Social Identity Theory', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Zero-Sum Bias: Mistaking Win-Win Synergy for a Finite Pie | Mentalab Mind",
  seoDescription: "A cognitive bias that causes people to intuitively judge that a situation is zero-sum (what one gains, another loses) even when it is strictly positive-sum",
  canonicalUrl: '/mind/decision-making/zero-sum-bias',
  ogImageUrl: '/images/mind/zero-sum-bias.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "In a true zero-sum game (like poker or chess), points won equals points lost. In economics, free trade, and scientific collaboration, interactions are positive-sum: voluntary cooperation creates entirely new surplus wealth that did not previously exist. Zero-sum bias drives people into destructive protectionism, hostile price-wars, and toxic departmental infighting, actively destroying value for all participants.",
};

export const TOPIC_ZERO_SUM_BIAS_HINGLISH: MindTopicDetail = {
  ...TOPIC_ZERO_SUM_BIAS_EN,
  title: "Zero-Sum Bias: \"Tera Faayda Matlab Mera Nuksan\" Ka Bhram",
  subtitle: "Log sochte hain ki agar doosra aage badh raha hai toh zaroor mera kuch cheen raha hai, jabki business aur dosti me dono saath me aage badh sakte hain.",
  shortDescription: "Ek aisi soch jisme insaan maanta hai ki kisaan aur grahak, ya do partners ke beech deal hamesha ek ki jeet aur doosre ki haar hoti hai.",
  oneLineExplanation: "Yeh sochna ki katori ek hi hai aur doosra kha lega toh main bhookha marunga, jabki milkar badi kheer banayi ja sakti thi.",

  summary30s: "2010 me Richard Meegan ne Zero-Sum Bias prove kiya. Poker me ek jeet-ta hai aur ek haarta hai (Zero Sum). Lekin zindgi, trade aur dosti aisi nahi hoti. Jab do log milkar kaam karte hain, toh naya value create hota hai jisse dono ka faayda hota hai (Positive Sum). Par hamara dimaag doosre ke profit ko dekh kar jealous ho jata hai aur partnership tod deta hai.",
  coreConcept: "Startups me co-founders 51% aur 49% equity par itna ladte hain ki company shuru hone se pehle hi band ho jaati hai. Wo yeh bhool jaate hain ki ₹100 crore ki company ka 50% ek zero company ke 100% se lakho guna behtar hai.",
  quickTakeaways: [
    "Bada Pie Banayein: Sirf tukda mat gino, milkar cake ka size bada karo",
    "Win-Win Thinking: Aisi deals banao jisme samne wale ka bhi bada faayda ho",
    "Doosre Ki Jeet Se Na Darein: Partner ki kamyabi se aapka share kam nahi hota",
    "Collaboration Over War: Ladai me dono ka nuksan hota hai, sahyog se dono ameer bante hain",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_ZERO_SUM_BIAS_EN,
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

export const TOPIC_ZERO_SUM_BIAS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_ZERO_SUM_BIAS_EN,
  hinglish: TOPIC_ZERO_SUM_BIAS_HINGLISH,
  hi: createLocalizedRecord('hi', "शून्य-योग पूर्वाग्रह (Zero-Sum Bias): सहयोग में भी लाभ-हानि का भ्रम", "यह संज्ञानात्मक पूर्वाग्रह जिसके कारण लोग स्वाभाविक रूप से यह मान लेते हैं कि एक पक्ष का लाभ अनिवार्य रूप से दूसरे पक्ष के नुकसान से ही होता है; यह सोच व्यापार, साझेदारी और रिश्तों में पारस्परिक लाभ (Win-Win) की संभावनाओं को नष्ट कर देती है।", [
    "सीमित पाई (Fixed Pie) का भ्रम",
    "पारस्परिक सकारात्मक-योग (Positive-Sum) सहयोग",
    "साझेदारी में ईर्ष्या से बचाव"
  ]),
  gu: createLocalizedRecord('gu', "ઝીરો-સમ બાયસ: એકનો નફો એટલે બીજાનું નુકસાન તેવો ભ્રમ", "જ્યારે લોકો માને છે કે સામેવાળાનો ફાયદો એ આપણું સીધું નુકસાન છે, જેનાથી વેપાર અને ભાગીદારીમાં બંનેને થતો મોટો ફાયદો અટકી જાય છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "झिरो-सम बायस: परस्पर सहकार्यातही हार-जीत पाहण्याची चूक", "समोरच्याचा फायदा झाला म्हणजे आपले नुकसानच झाले ही संकुचित वृत्ती; ज्यामुळे एकत्र मिळून मोठा फायदा निर्माण करण्याची संधी गमावली जाते.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "జీరో-సమ్ బయాస్: ఒకరి లాభం మరొకరి నష్టమనే సంకుచిత ఆలోచన", "ఇద్దరికీ లాభం చేకూరే పరిస్థితుల్లో కూడా, ఎదుటి వ్యక్తి ఎదుగుతుంటే మనకు నష్టం జరుగుతోందని భావించే మానసిక సంకుచితత్వం.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "பூஜ்ஜிய-கூட்டு ஒருதலைப்பட்சம்: ஒருவரின் வெற்றி மற்றவரின் இழப்பு என்ற மாயை", "இருவருக்கும் நன்மையளிக்கும் கூட்டுறவிலும் கூட, அடுத்தவரின் வளர்ச்சி நமது இழப்பு என்று குறுகிய மனப்பான்மையுடன் சிந்திக்கும் தவறு.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಜೀರೋ-ಸಮ್ ಬಯಾಸ್: ಒಬ್ಬರ ಲಾಭ ಇನ್ನೊಬ್ಬರ ನಷ್ಟವೆಂಬ ತಪ್ಪು ಕಲ್ಪನೆ", "ಪರಸ್ಪರ ಸಹಕಾರದಿಂದ ಇಬ್ಬರಿಗೂ ಲಾಭವಾಗುವ ಸನ್ನಿವೇಶದಲ್ಲೂ, ಎದುರಾಳಿಯ ಬೆಳವಣಿಗೆಯನ್ನು ತನ್ನ ನಷ್ಟವೆಂದು ಭಾವಿಸುವ ಸಂಕುಚಿತ ಮನೋಭಾವ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "സീറോ-സം ബയസ്: ഒരാളുടെ ലാഭം മറ്റൊരാളുടെ നഷ്ടമെന്ന തെറ്റിദ്ധാരണ", "പരസ്പര സഹകരണത്തിലൂടെ എല്ലാവർക്കും വിജയം നേടാൻ കഴിയുന്ന ഇടങ്ങളിലും, മറ്റൊരാളുടെ നേട്ടം സ്വന്തം നഷ്ടമാണെന്ന് ചിന്തിക്കുന്ന അവസ്ഥ.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "জিরো-সাম বায়াস: একজনের লাভ মানেই অন্যের ক্ষতি—এই সংকীর্ণ মানসিকতা", "পারস্পরিক সহযোগিতার মাধ্যমে নতুন সম্পদ সৃষ্টির সুযোগ থাকা সত্ত্বেও অন্যের উন্নতিকে নিজের লোকসান মনে করার অন্ধত্ব।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਜ਼ੀਰੋ-ਸਮ ਬਾਇਸ: ਦੂਜੇ ਦਾ ਲਾਭ ਆਪਣਾ ਨੁਕਸਾਨ ਸਮਝਣ ਦੀ ਭੁੱਲ", "ਇਹ ਸੋਚਣਾ ਕਿ ਜੇ ਦੂਜਾ ਅੱਗੇ ਵਧ ਰਿਹਾ ਹੈ ਤਾਂ ਮੇਰਾ ਹੱਕ ਖੋਹ ਰਿਹਾ ਹੈ, ਜਿਸ ਨਾਲ ਆਪਸੀ ਭਾਈਵਾਲੀ ਅਤੇ ਵੱਡੇ ਫਾਇਦੇ ਖਤਮ ਹੋ ਜਾਂਦੇ ਹਨ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "صفر حاصل کا تعصب: ایک کی کامیابی کو دوسرے کا نقصان سمجھنا", "باہمی فائدے اور شراکت داری کے ماحول میں بھی یہ سوچنا کہ فریق ثانی کا نفع لازماً ہمارے ہی نقصان سے حاصل ہوا ہے۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ଜିରୋ-ସମ୍ ବାୟାସ୍: ଅନ୍ୟର ଲାଭକୁ ନିଜର କ୍ଷତି ଭାବିବାର ଭ୍ରାନ୍ତ ଧାରଣା", "ପାରସ୍ପରିକ ସହଯୋଗରେ ଉଭୟଙ୍କର ବଡ଼ ଫାଇଦା ହୋଇପାରୁଥିବା ବେଳେ ଅନ୍ୟର ସଫଳତାକୁ ନିଜର ଅବନତି ବୋଲି ଭାବି ବିବାଦ କରିବା।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "জিৰ’–ছাম বায়াস: এজনৰ লাভ মানেই আনজনৰ লোকচান বুলি ভবাৰ সংকীৰ্ণতা", "যৌথ উদ্যোগত দুয়োৰে লাভ হোৱাৰ সম্ভাৱনা থকা সত্ত্বেও সংগীৰ সফলতাক নিজৰ ক্ষতি বুলি গণ্য কৰাৰ মনস্তাত্ত্বিক ভুল।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
