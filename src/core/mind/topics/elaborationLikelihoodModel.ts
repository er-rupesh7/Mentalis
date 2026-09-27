import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Persuasion & Influence Track
 * Topic: The Elaboration Likelihood Model: Central vs. Peripheral Persuasion
 * Category: persuasion_influence
 * Academic Grounding: Richard E. Petty & John T. Cacioppo (1986) (10.1016/S0065-2601(08)60214-2)
 */

export const TOPIC_ELABORATION_LIKELIHOOD_MODEL_EN: MindTopicDetail = {
  id: 'elaboration_likelihood_model',
  categoryId: 'persuasion_influence',
  slug: 'elaboration-likelihood-model',
  difficulty: 'advanced',
  estimatedReadingMinutes: 7,
  scientificConsensusTier: 'established',
  sortWeight: 8,
  viewCount: 4080,
  shareCount: 322,
  bookmarkCount: 716,
  title: "The Elaboration Likelihood Model: Central vs. Peripheral Persuasion",
  subtitle: "The dual-process theory explaining how humans process messages either through deep rational scrutiny or superficial cognitive heuristics.",
  shortDescription: "A dual process theory describing the change of attitudes: the central route (logic, data, argument strength) versus the peripheral route (cues, charisma, aesthetics).",
  oneLineExplanation: "Sell to the intellect with rock-solid data (Central), or sell to the instincts with celebrity sparkle and mood music (Peripheral).",

  summary30s: "Formulated in 1986 by Richard Petty and John Cacioppo, the Elaboration Likelihood Model (ELM) is the gold standard of attitude change. When people have both the motivation and ability to think, they take the Central Route—analyzing facts and argument logic. When motivation or ability is low (fatigue, lack of interest), they take the Peripheral Route—persuaded by superficial cues like a handsome model or catchy slogan.",
  coreConcept: "The crucial difference lies in attitude persistence and behavioral predictability. Central route persuasion requires cognitive effort; attitudes formed this way are deeply entrenched, enduring, and highly resistant to counter-persuasion. Peripheral route persuasion requires zero mental effort; however, the resulting attitude change is shallow, temporary, and vulnerable to competing shiny cues.",
  summary60s: "In Petty, Cacioppo & Goldman's classic 1981 experiment, students were told about a proposed comprehensive graduation exam. For students who faced the exam next year (high personal involvement / high motivation), only strong, logical arguments changed their minds; the speaker's prestige did not matter. For students whose graduation was years away (low involvement), they were persuaded entirely by whether the speaker had a prestigious title, ignoring argument logic.",
  quickTakeaways: [
    "The Dual Pathways: Recognize whether your audience is processing through the Central (logic) or Peripheral (cues) route",
    "Attitude Durability: Central route persuasion creates lifelong advocates; peripheral persuasion creates fickle buyers",
    "The Motivation & Ability Filter: Complex charts fail if the listener is tired, stressed, or lacks domain vocabulary",
    "Ethical Defense: When making major life decisions, deliberately force yourself into the Central route by ignoring charisma and auditing raw data",
  ],

  whyItHappens: "Cognitive miserliness. The human brain cannot afford to deeply analyze thousands of commercial and political messages encountered daily, defaulting to peripheral heuristics.",
  evolutionaryMechanism: "Early humans had to rapidly assess speaker trustworthiness and tribal status (peripheral cues) when time was too short to verify complex claims.",
  howItWorks: "Persuasive message received -> Brain evaluates motivation & cognitive capacity -> If high, Central Route (scrutinizes evidence) -> If low, Peripheral Route (judges tone, celebrity, attractiveness).",
  whereYouEncounterIt: "Political campaign advertising, enterprise B2B sales pitches, pharmaceutical commercials, luxury perfume ads, and investor roadshows.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Rigorous Empirical Scrutiny vs. Superficial Glamour",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Central Route (Logical Elaboration)",
      detail: "\"Peer-reviewed clinical trials with N=10,000 prove a 42% reduction in cardiovascular morbidity over 5 years.\"",
    },
    analogySideB: {
      label: "Peripheral Route (Heuristic Cues)",
      detail: "\"A famous Bollywood superstar wearing a doctor's white coat smiles warmly while holding the vitamin bottle.\"",
    },
  },

  researchSummary: "Petty & Cacioppo (1986) published \"The Elaboration Likelihood Model of Persuasion\" in Advances in Experimental Social Psychology.",
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
      id: 'scen_elaboration_likelihood_model_01',
      scenarioType: 'indian_context',
      title: "The Mutual Fund Ad Campaign in Mumbai",
      vignette: "An asset management company in Mumbai launches two concurrent ad campaigns. Ad A features an IPL cricket captain wearing a leather jacket, winking at the camera, saying: \"Winners never settle; invest in Zenith Mutual Fund today!\" Ad B is a 10-page whitepaper in the Economic Times detailing 15-year alpha generation, standard deviation risk, expense ratios, and cash-flow yields. Ad A generates 50,000 retail app downloads within 72 hours (Peripheral Route), but 80% of users churn after the first market dip. Ad B attracts 500 high-net-worth family offices (Central Route) who keep their capital locked for 10 years.",
      breakdownAnalysis: "A textbook real-world demonstration of the Elaboration Likelihood Model. Retail consumers used peripheral cues (celebrity status), yielding temporary, fragile attitudes. Institutional investors engaged in central route elaboration, yielding durable, resistant commitment.",
      recommendedAction: "When pitching high-stakes products, use peripheral cues to grab initial attention, but immediately transition to central route data to lock in enduring loyalty.",
    },
  ],

  examples: [
    {
      id: 'ex_elaboration_likelihood_model_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_elaboration_likelihood_model_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_elaboration_likelihood_model_01',
      scenarioContext: "A CFO is reviewing two enterprise cloud security proposals. Vendor 1 brings a famous tech keynote speaker who gives an inspiring talk with cinematic videos. Vendor 2 presents a benchmark spreadsheet detailing latency overhead, cryptographic penetration test scores, and SOC2 compliance rubrics.",
      question: "According to the Elaboration Likelihood Model, which route will the CFO take, and which vendor will prevail?",
      prompt: "According to the Elaboration Likelihood Model, which route will the CFO take, and which vendor will prevail?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'advanced',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "The CFO will take the peripheral route because executives love cinematic presentations",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Because the CFO has high motivation and high technical ability regarding corporate risk, she will process via the central route and favor Vendor 2's robust data",
          isCorrect: true,
          explanation: "High personal involvement and high ability trigger central route processing, where argument quality and empirical evidence dominate over peripheral showmanship.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Social facilitation will cause the CFO to reject both vendors",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "The sleeper effect will make Vendor 1's video become more logical over time",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Tailor your persuasion to the audience's bandwidth: experts require facts; distracted crowds look at the messenger.",
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
      id: 'ref_elaboration_likelihood_model_01',
      title: "The Elaboration Likelihood Model of Persuasion",
      citation: "Petty, R. E., & Cacioppo, J. T. (1986). The Elaboration Likelihood Model of persuasion. Advances in Experimental Social Psychology, 19, 123–205.",
      authors: "Richard E. Petty & John T. Cacioppo",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1016/S0065-2601(08)60214-2",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Persuasion & Influence', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'framing_effect', slug: 'framing-effect', title: 'The Framing Effect', relationshipType: 'amplified_by' },
    { topicId: 'halo_effect', slug: 'halo-effect', title: 'The Halo Effect', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "The Elaboration Likelihood Model: Central vs. Peripheral Persuasion | Mentalab Mind",
  seoDescription: "A dual process theory describing the change of attitudes: the central route (logic, data, argument strength) versus the peripheral route (cues, charisma, a",
  canonicalUrl: '/mind/persuasion-and-influence/elaboration-likelihood-model',
  ogImageUrl: '/images/mind/elaboration-likelihood-model.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "The crucial difference lies in attitude persistence and behavioral predictability. Central route persuasion requires cognitive effort; attitudes formed this way are deeply entrenched, enduring, and highly resistant to counter-persuasion. Peripheral route persuasion requires zero mental effort; however, the resulting attitude change is shallow, temporary, and vulnerable to competing shiny cues.",
};

export const TOPIC_ELABORATION_LIKELIHOOD_MODEL_HINGLISH: MindTopicDetail = {
  ...TOPIC_ELABORATION_LIKELIHOOD_MODEL_EN,
  title: "Elaboration Likelihood Model: Dimaag Se Samjhana Ya Dil Ko Behlaana",
  subtitle: "Log do tareeqe se convince hote hain: ya toh sach aur data dekh kar (Central Route), ya fir celebrity aur fancy packaging dekh kar (Peripheral Route).",
  shortDescription: "Ek aisi theory jo batati hai ki log deep logical arguments se kab convince hote hain aur superficial cues se kab influence hote hain.",
  oneLineExplanation: "Samajhdaar ko solid data chahiye; thake huye ko bas ek accha chehra aur music chahiye.",

  summary30s: "1986 me Petty aur Cacioppo ne Elaboration Likelihood Model banaya. Jab kisi insaan ke paas waqt, dimaag aur interest hota hai, toh wo Central Route leta hai—wo logic aur numbers check karta hai. Lekin jab wo thaka hota hai ya use jaldi hoti hai, toh wo Peripheral Route leta hai—jaise Shahrukh Khan ne bola toh shampoo accha hi hoga.",
  coreConcept: "Central route se jo soch banti hai wo saalo tak tikti hai aur koi use aasani se tod nahi sakta. Peripheral route se log turant khareed toh lete hain, par agle hi din brand badal lete hain. Business aur education me dono ka sahi balance hona zaroori hai.",
  quickTakeaways: [
    "Two Paths: Faisla lene ke do raste hain: Gehra analysis (Central) ya Superficial cues (Peripheral)",
    "Tikaau Soch: Logic aur facts se badli gayi aadat hamesha ke liye rehti hai",
    "Distraction Trap: Jab aap thake hote hain, brands aapko peripheral ads se fasate hain",
    "Critical Defense: Bada faisla lete waqt celebrity ko ignore karke balance sheet aur data padhein",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_ELABORATION_LIKELIHOOD_MODEL_EN,
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

export const TOPIC_ELABORATION_LIKELIHOOD_MODEL: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_ELABORATION_LIKELIHOOD_MODEL_EN,
  hinglish: TOPIC_ELABORATION_LIKELIHOOD_MODEL_HINGLISH,
  hi: createLocalizedRecord('hi', "विस्तार संभावना मॉडल (Elaboration Likelihood Model): केंद्रीय बनाम परिधीय अनुनय", "रिचर्ड पेटी और जॉन कैसियोपो का दोहरा-प्रक्रिया सिद्धांत जो स्पष्ट करता है कि दृष्टिकोण में परिवर्तन दो अलग मार्गों से होता है: केंद्रीय मार्ग (गहन तर्क, डेटा और तथ्य) अथवा परिधीय मार्ग (आकर्षक चेहरे, प्रसिद्धि और सतही संकेत)।", [
    "केंद्रीय मार्ग (Central Route) से स्थायी दृष्टिकोण परिवर्तन",
    "परिधीय मार्ग (Peripheral Route) का सतही और अस्थायी प्रभाव",
    "प्रेरणा और बौद्धिक क्षमता का निर्धारक होना"
  ]),
  gu: createLocalizedRecord('gu', "ઇલેબોરેશન લાઇકલીહૂડ મોડેલ: લોજિકલ દલીલ વિ. સપાટી પરનું આકર્ષણ", "લોકો ક્યારે ઊંડા તથ્યો અને ડેટા જોઈને માને છે (સેન્ટ્રલ) અને ક્યારે માત્ર સેલિબ્રિટી કે ગ્લેમર જોઈને પ્રભાવિત થઈ જાય છે (પેરિફેરલ) તેનું વિજ્ઞાન.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "इलाबोरेशन लाइकलीहूड मॉडेल: सखोल विचार विरुद्ध वरवरचे आकर्षण", "माणूस दोन प्रकारे प्रभावित होतो: एक म्हणजे तथ्यांचा सखोल अभ्यास करून (मध्यवर्ती मार्ग) आणि दुसरे म्हणजे दिखाऊ जाहिरात पाहून (परिधीय मार्ग).", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "ఇలాబొరేషన్ లైక్లీహుడ్ మోడల్: విశ్లేషణాత్మక ఆలోచన వర్సెస్ బాహ్య ఆకర్షణ", "వ్యక్తులు ఎప్పుడు సరైన గణాంకాలు మరియు లాజిక్‌తో ఒప్పించబడతారు (సెంట్రల్) మరియు ఎప్పుడు కేవలం ప్రకటనలు లేదా వ్యక్తుల ప్రాబల్యంతో ప్రభావితమవుతారు (పెరిఫెరల్) అనే సిద్ధాంతం.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "விரிவாக்க சாத்தியக்கூறு மாதிரி: ஆழமான பகுத்தறிவு மற்றும் மேலோட்டமான ஈர்ப்பு", "மக்கள் எப்போது ஆழ்ந்த தரவுகளை ஆராய்ந்து முடிவெடுக்கிறார்கள் மற்றும் எப்போது கவர்ச்சிகரமான விளம்பரங்களை மட்டுமே நம்பி மாறுகிறார்கள் என்பதை விளக்கும் உளவியல் கோட்பாடு.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಎಲಾಬೊರೇಶನ್ ಲೈಕ್ಲೀಹುಡ್ ಮಾಡೆಲ್: ತಾರ್ಕಿಕ ವಿಶ್ಲೇಷಣೆ ವರ್ಸಸ್ ಬಾಹ್ಯ ಆಕರ್ಷಣೆ", "ಜನರು ಯಾವಾಗ ಆಳವಾದ ಸತ್ಯಾಂಶಗಳನ್ನು ನೋಡಿ ತೀರ್ಮಾನಿಸುತ್ತಾರೆ ಮತ್ತು ಯಾವಾಗ ಕೇವಲ ಸೆಲೆಬ್ರಿಟಿಗಳ ಹೊಳಪಿಗೆ ಮರುಳಾಗುತ್ತಾರೆ ಎಂಬುದನ್ನು ವಿವರಿಸುವ ಸಿದ್ಧಾಂತ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "ഇലാബറേഷൻ ലൈക്‌ലിഹുഡ് മോഡൽ: യുക്തിചിന്തയും ബാഹ്യപ്രേരണകളും", "ആളുകൾ കാര്യങ്ങൾ ആഴത്തിൽ പഠിച്ച് ബോധ്യപ്പെടുന്നതും (സെൻട്രൽ) വെറും ബാഹ്യ ആകർഷണങ്ങളിൽ വീണുപോകുന്നതും (പെരിഫറൽ) തമ്മിലുള്ള വ്യത്യാസം.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "ইলাবোরেশন লাইকলিহুড মডেল: গভীর যুক্তি বনাম চটকদার বিজ্ঞাপন", "মানুষ কখন যুক্তিনির্ভর সত্য উদঘাটন করে সিদ্ধান্ত নেয় এবং কখন শুধুমাত্র সেলেব্রিটি বা চোখধাঁধানো রূপ দেখে প্রভাবিত হয়—তার বৈজ্ঞানিক মডেল।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਇਲੈਬੋਰੇਸ਼ਨ ਲਾਈਕਲੀਹੁੱਡ ਮਾਡਲ: ਡੂੰਘੀ ਸੋਚ ਬਨਾਮ ਉਪਰਲਾ ਪ੍ਰਭਾਵ", "ਲੋਕ ਦੋ ਤਰ੍ਹਾਂ ਨਾਲ ਪ੍ਰਭਾਵਿਤ ਹੁੰਦੇ ਹਨ: ਤੱਥਾਂ ਅਤੇ ਦਲੀਲਾਂ ਦੀ ਪੜਤਾਲ ਕਰਕੇ (ਸੈਂਟਰਲ) ਜਾਂ ਮਹਿਜ਼ ਮਸ਼ਹੂਰ ਚਿਹਰਿਆਂ ਅਤੇ ਸ਼ਾਨੋ-ਸ਼ੌਕਤ ਨੂੰ ਦੇਖ ਕੇ (ਪੈਰੀਫੇਰਲ)।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "تفصیلی امکان کا ماڈل: گہری عقلی جانچ بمقابلہ ظاہری کشش", "لوگ دو طریقوں سے قائل ہوتے ہیں: یا تو ٹھوس دلائل اور اعداد و شمار کی بنیاد پر یا محض ظاہری چمک دمک اور مشہور شخصیات سے مرعوب ہو کر۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ଇଲାବୋରେସନ୍ ଲାଇକ୍‌ଲିହୁଡ୍ ମଡେଲ୍: ଗଭୀର ଯୁକ୍ତି ବନାମ ବାହ୍ୟ ଚମକ", "ଲୋକେ କେତେବେଳେ ତଥ୍ୟ ଓ ପ୍ରମାଣ ଦେଖି ପ୍ରଭାବିତ ହୁଅନ୍ତି ଏବଂ କେତେବେଳେ କେବଳ ପ୍ରଚାର ବା ଚେହେରା ଦେଖି ବିଶ୍ୱାସ କରନ୍ତି ତାହାର ଦ୍ୱୈତ ମନସ୍ତତ୍ତ୍ୱ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "ইলাব’ৰেশ্যন লাইকলিহুড মডেল: গভীৰ যুক্তি বনাম বাহ্যিক মোহ", "মানুহে কেতিয়া যুক্তি আৰু তথ্য চালি-জাৰি সিদ্ধান্ত লয় আৰু কেতিয়া কেৱল বিজ্ঞাপন আৰু গ্লেমাৰৰ পিছত দৌৰে তাৰ মনস্তাত্ত্বিক আৰ্হি।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
