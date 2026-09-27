import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Persuasion & Influence Track
 * Topic: The Mere Exposure Effect: Familiarity Breeds Affection
 * Category: persuasion_influence
 * Academic Grounding: Robert B. Zajonc (1968) (10.1037/h0025848)
 */

export const TOPIC_MERE_EXPOSURE_EFFECT_EN: MindTopicDetail = {
  id: 'mere_exposure_effect',
  categoryId: 'persuasion_influence',
  slug: 'mere-exposure-effect',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 13,
  viewCount: 4630,
  shareCount: 392,
  bookmarkCount: 826,
  title: "The Mere Exposure Effect: Familiarity Breeds Affection",
  subtitle: "The psychological phenomenon by which people tend to develop a preference for things merely because they are familiar with them.",
  shortDescription: "A cognitive bias whereby people display a marked preference for objects, ideas, or individuals simply because they have been exposed to them repeatedly.",
  oneLineExplanation: "Familiarity doesn't breed contempt; it breeds trust, preference, and love.",

  summary30s: "Discovered in 1968 by Robert Zajonc, the Mere Exposure Effect demonstrates that repeated, unreinforced exposure to a stimulus is sufficient to enhance an individual's positive attitude toward it. Whether it is a song on the radio, an unfamiliar corporate logo, or a new coworker, the more times your brain processes it without negative consequences, the more you instinctively like it.",
  coreConcept: "The effect is powered by Perceptual Fluency. When a stimulus has been encountered before, the brain processes it with greater ease and lower metabolic expenditure. The mind mistakes this effortless neurological processing for safety, quality, and aesthetic beauty. Crucially, the effect operates even below conscious awareness: subliminal flashes of shapes produce elevated liking in test subjects who cannot even recall seeing the shape.",
  summary60s: "Zajonc showed participants arbitrary Chinese-like ideographs or nonsense words like \"lokoma\" and \"kadirga\" at varied frequencies (some 1 time, some 25 times). Participants were then asked to guess whether the symbols meant something good or bad. Consistently, characters shown 25 times were rated as significantly more positive and benevolent than characters shown once. Frequency alone manufactured affection.",
  quickTakeaways: [
    "The Fluency Trap: Easy-to-process ideas feel true and trustworthy simply because they are familiar",
    "The Advertising Engine: Billboard and banner ads don't need you to click; they just need to build subconscious familiarity",
    "Consistent Visibility: In corporate careers, regular presence in meetings builds trust faster than sporadic brilliant work",
    "The Satiation Ceiling: Excessive over-exposure causes irritation; calibrate exposure with novelty intervals",
  ],

  whyItHappens: "Evolutionary caution toward the unknown. Unfamiliar stimuli represent potential predators or poisons; familiar stimuli are proven to be safe.",
  evolutionaryMechanism: "Hominids who favored familiar plants, watering holes, and faces avoided lethal toxicity and tribal conflict.",
  howItWorks: "Stimulus encountered repeatedly -> Neural pathways process it faster (perceptual fluency) -> Brain associates ease with safety -> Liking and trust surge automatically.",
  whereYouEncounterIt: "Pop music radio rotations, political billboard branding, repetitive TV commercials, and office workplace familiarity.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Unfamiliar Novelty vs. Repeated Familiar Exposure",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Single Exposure (Cold Neutrality)",
      detail: "\"I heard this indie song once on Spotify; it sounded disjointed and forgettable.\"",
    },
    analogySideB: {
      label: "Repeated Exposure (Warm Affection)",
      detail: "\"After hearing it 10 times in cafes and reels, it sounds brilliant and I added it to my daily playlist.\"",
    },
  },

  researchSummary: "Robert B. Zajonc (1968) published \"Attitudinal effects of mere exposure\" in the Journal of Personality and Social Psychology.",
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
      id: 'scen_mere_exposure_effect_01',
      scenarioType: 'indian_context',
      title: "The Startup Billboard on the Outer Ring Road in Bangalore",
      vignette: "Kunal drives down the Outer Ring Road in Bangalore every morning for work. For three months, he passes a massive purple billboard with a minimalist logo for \"Kredio: Automated Vendor Payments.\" Kunal never visits the website or reads an article about it. Six months later, Kunal's company needs a vendor payment gateway. During a procurement review between four bids, Kunal immediately recommends Kredio: \"Kredio is a well-established, solid platform; let's go with them.\" He is completely unaware that his confidence was manufactured purely by 90 days of passive billboard exposure.",
      breakdownAnalysis: "A textbook real-world case of the Mere Exposure Effect. Kunal's brain processed the Kredio logo repeatedly, creating perceptual fluency that his conscious mind misinterpreted as institutional credibility.",
      recommendedAction: "When evaluating service providers or job applicants, audit tangible track records and metrics rather than trusting the warm feeling of name recognition.",
    },
  ],

  examples: [
    {
      id: 'ex_mere_exposure_effect_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_mere_exposure_effect_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_mere_exposure_effect_01',
      scenarioContext: "A voter is deciding between two candidates for municipal councillor. Candidate A has a comprehensive 40-page infrastructure plan but few posters. Candidate B has no published policy plan, but his smiling face and name appeared on 500 banners across the neighborhood for six months.",
      question: "How does Zajonc's Mere Exposure research predict the average voter's intuitive preference?",
      prompt: "How does Zajonc's Mere Exposure research predict the average voter's intuitive preference?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'beginner',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Voters will naturally prefer Candidate A because policies are more informative",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Candidate B's massive visual exposure will create perceptual fluency, causing voters to feel intuitive warmth, familiarity, and trust toward him at the ballot box",
          isCorrect: true,
          explanation: "Repeated visual exposure elevates perceptual fluency, which the brain unconsciously translates into familiarity, safety, and positive voting preference.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Voters will experience social loafing and boycott the election",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "The Dunning-Kruger effect will eliminate candidate preference",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Familiarity is not competence: never mistake a famous face for a wise choice.",
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
      id: 'ref_mere_exposure_effect_01',
      title: "Attitudinal Effects of Mere Exposure",
      citation: "Zajonc, R. B. (1968). Attitudinal effects of mere exposure. Journal of Personality and Social Psychology, 9(2, Pt.2), 1–27.",
      authors: "Robert B. Zajonc",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1037/h0025848",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Persuasion & Influence', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'availability_heuristic', slug: 'availability-heuristic', title: 'The Availability Heuristic', relationshipType: 'amplified_by' },
    { topicId: 'liking_principle', slug: 'liking-principle', title: 'The Liking Principle', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "The Mere Exposure Effect: Familiarity Breeds Affection | Mentalab Mind",
  seoDescription: "A cognitive bias whereby people display a marked preference for objects, ideas, or individuals simply because they have been exposed to them repeatedly.",
  canonicalUrl: '/mind/persuasion-and-influence/mere-exposure-effect',
  ogImageUrl: '/images/mind/mere-exposure-effect.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "The effect is powered by Perceptual Fluency. When a stimulus has been encountered before, the brain processes it with greater ease and lower metabolic expenditure. The mind mistakes this effortless neurological processing for safety, quality, and aesthetic beauty. Crucially, the effect operates even below conscious awareness: subliminal flashes of shapes produce elevated liking in test subjects who cannot even recall seeing the shape.",
};

export const TOPIC_MERE_EXPOSURE_EFFECT_HINGLISH: MindTopicDetail = {
  ...TOPIC_MERE_EXPOSURE_EFFECT_EN,
  title: "Mere Exposure Effect: Jo Bar-Bar Dikhta Hai, Wo Accha Lagne Lagta Hai",
  subtitle: "Gaana pehli baar sunne par bekaar lagta hai, par jab radio aur reels par 10 baar bajta hai toh favourite ban jata hai.",
  shortDescription: "Ek aisi psychological tendency jisme kisi cheez ko bar-bar dekhne se hamara dimaag use naturally pasand karne lagta hai.",
  oneLineExplanation: "Dimaag jise pehchanta hai, use surakshit aur accha maan leta hai.",

  summary30s: "1968 me Robert Zajonc ne Mere Exposure Effect discover kiya. Advertising companies isi par zinda hain. Agar aap road par kisi brand ka board har roz dekhte hain, toh bina uska review padhe bhi aapke dimaag me uske liye trust ban jata hai. Insaan ka dimaag nayi cheezo se darta hai, par jo cheez bar-bar samne aati hai use safe maan leta hai.",
  coreConcept: "Perceptual Fluency kehta hai ki jab dimaag kisi cheez ko aasani se pehchan leta hai, toh use accha lagta hai. Election ke poster har chowk par isliye lagaye jaate hain taaki EVM par wahi naam dekh kar aapka haath bina soche button daba de.",
  quickTakeaways: [
    "Fluency Trap: Jo cheez jaani-pehchani hai, zaroori nahi ki wo acchi ya sachhi ho",
    "Billboard Ka Jaadu: Ads ka maksad aapko turant bechna nahi, aapke dimaag me jagah banana hota hai",
    "Career Consistency: Office me regular present rehna akele baith kar kaam karne se zyada trust banata hai",
    "Quality Check: Kisi cheez ko sirf isliye mat chuno kyunki uska naam har jagah dikhta hai",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_MERE_EXPOSURE_EFFECT_EN,
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

export const TOPIC_MERE_EXPOSURE_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_MERE_EXPOSURE_EFFECT_EN,
  hinglish: TOPIC_MERE_EXPOSURE_EFFECT_HINGLISH,
  hi: createLocalizedRecord('hi', "मात्र संपर्क प्रभाव (Mere Exposure Effect): बारंबारता से उत्पन्न आकर्षण", "रॉबर्ट ज़ायोंक का अध्ययन जो यह सिद्ध करता है कि किसी वस्तु, व्यक्ति या विचार के प्रति केवल बार-बार अहानिकर संपर्क में आने से ही उसके प्रति स्वाभाविक आकर्षण, पसंदगी और विश्वास में वृद्धि हो जाती है।", [
    "संज्ञानात्मक सुगमता (Perceptual Fluency) का प्रभाव",
    "विज्ञापन और ब्रांडिंग में बारंबारता का महत्व",
    "पहचान और वास्तविक गुणवत्ता के मध्य भेद"
  ]),
  gu: createLocalizedRecord('gu', "મિઅર એક્સપોઝર ઇફેક્ટ: વારંવાર જોવા મળતી વસ્તુ આપોઆપ ગમવા લાગવી", "કોઈપણ વસ્તુ કે ચહેરો વારંવાર સામે આવવાથી મગજ તેને આપોઆપ સલામત અને સારો માની લે છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "मिअर एक्सपोजर इफेक्ट: वारंवार दिसणाऱ्या गोष्टींबद्दल वाटणारे अकारण आकर्षण", "एखादी गोष्ट किंवा व्यक्ती वारंवार नजरेस पडल्याने तिच्याबद्दल आपोआप विश्वास आणि आवड निर्माण होण्याची मानवी प्रवृत्ती.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "మియర్ ఎక్స్‌పోజర్ ఎఫెక్ట్: పదే పదే చూడటం వల్ల కలిగే ఆకర్షణ", "ఏదైనా వస్తువు లేదా వ్యక్తిని పదే పదే చూడటం వల్ల మెదడు దానిని సురక్షితమైనదిగా భావించి ఇష్టపడే మానసిక ధోరణి.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "தொடர் காட்சி விளைவு: திரும்பத் திரும்பப் பார்ப்பதால் ஏற்படும் விருப்பம்", "ஒரு பொருள் அல்லது நபரை மீண்டும் மீண்டும் பார்ப்பதன் மூலமே மூளை அதை பாதுகாப்பானது என நம்பி விரும்பத் தொடங்குகிறது.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಮಿಯರ್ ಎಕ್ಸ್‌ಪೋಸರ್ ಎಫೆಕ್ಟ್: ಪದೇಪದೇ ಕಂಡ ವಸ್ತು ತಾನಾಗಿಯೇ ಇಷ್ಟವಾಗುವುದು", "ಯಾವುದೇ ವಿಷಯ ಅಥವಾ ವ್ಯಕ್ತಿಯನ್ನು ಪುನರಾವರ್ತಿತವಾಗಿ ನೋಡುವುದರಿಂದಲೇ ಮನಸ್ಸಿನಲ್ಲಿ ನಂಬಿಕೆ ಮತ್ತು ಪ್ರೀತಿ ಮೂಡುವ ವಿದ್ಯಮಾನ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "മിയർ എക്സ്പോഷർ ഇഫക്റ്റ്: ആവർത്തിച്ചു കാണുമ്പോൾ ഇഷ്ടം കൂടുന്ന മനശാസ്ത്രം", "ഒരു വസ്തുവിനെയോ വ്യക്തിയെയോ തുടർച്ചയായി കാണുമ്പോൾ തലച്ചോറ് അതിനെ സ്വാഭാവികമായി വിശ്വസിക്കുകയും ഇഷ്ടപ്പെടുകയും ചെയ്യുന്നു.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "মিয়ার এক্সপোজার ইফেক্ট: বারবার দেখার ফলে জন্ম নেওয়া ভালোবাসা", "কোনো জিনিস বারবার চোখের সামনে এলে মস্তিষ্ক তাকে সহজ ও নিরাপদ মনে করে স্বাভাবিকভাবেই পছন্দ করতে শুরু করে।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਮੀਅਰ ਐਕਸਪੋਜ਼ਰ ਇਫੈਕਟ: ਵਾਰ-ਵਾਰ ਦੇਖਣ ਨਾਲ ਪਸੰਦ ਵਧਣ ਦੀ ਆਦਤ", "ਕਿਸੇ ਚੀਜ਼ ਜਾਂ ਚਿਹਰੇ ਨੂੰ ਵਾਰ-ਵਾਰ ਦੇਖਣ ਨਾਲ ਦਿਮਾਗ ਉਸਨੂੰ ਸੁਰੱਖਿਅਤ ਅਤੇ ਵਧੀਆ ਸਮਝ ਕੇ ਪਸੰਦ ਕਰਨ ਲੱਗ ਪੈਂਦਾ ਹੈ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "محض روبرو ہونے کا اثر: بار بار دیکھنے سے پسندیدگی پیدا ہونا", "کسی چیز یا شخص کو بار بار دیکھنے سے ہی انسان کا ذہن اسے محفوظ اور قابل بھروسہ سمجھ کر پسند کرنے لگتا ہے۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ମିଅର୍ ଏକ୍ସପୋଜର୍ ପ୍ରଭାବ: ବାରମ୍ବାର ଦେଖିବା ଦ୍ୱାରା ପସନ୍ଦ ବୃଦ୍ଧି ପାଇବା", "କୌଣସି ଜିନିଷ ବା ଚେହେରା ବାରମ୍ବାର ନଜର ଆସିଲେ ମସ୍ତିଷ୍କ ତାହାକୁ ନିଜର ଓ ଭଲ ବୋଲି ମାନିନେବାର ପ୍ରବୃତ୍ତି।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "মিয়াৰ এক্সপোজ্বাৰ প্ৰভাৱ: বাৰে বাৰে দেখা বস্তু আপোনা-আপুনি ভাল লগাৰ মনস্তত্ত্ব", "কোনো বস্তু বা ব্যক্তিক বাৰে বাৰে দেখাৰ ফলতেই মনত তাৰ প্ৰতি বিশ্বাস আৰু পছন্দ গঢ় লৈ উঠাৰ মানসিক নিয়ম।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
