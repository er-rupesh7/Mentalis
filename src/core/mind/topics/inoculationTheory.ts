import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Persuasion & Influence Track
 * Topic: Inoculation Theory: Psychological Resistance Against Manipulation
 * Category: persuasion_influence
 * Academic Grounding: William J. McGuire (1964) (10.1016/S0065-2601(08)60052-0)
 */

export const TOPIC_INOCULATION_THEORY_EN: MindTopicDetail = {
  id: 'inoculation_theory',
  categoryId: 'persuasion_influence',
  slug: 'inoculation-theory',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 12,
  viewCount: 4520,
  shareCount: 378,
  bookmarkCount: 804,
  title: "Inoculation Theory: Psychological Resistance Against Manipulation",
  subtitle: "How exposing individuals to weakened doses of counter-arguments alongside explicit refutations builds lasting immunity against hostile persuasion.",
  shortDescription: "A psychological model that produces resistance to persuasion by exposing individuals to a weak counter-argument, functioning like a biological vaccine.",
  oneLineExplanation: "Vaccinate your mind against manipulation by rehearsing weak versions of toxic arguments before they attack.",

  summary30s: "Developed in 1964 by William J. McGuire, Inoculation Theory applies medical vaccination principles to cognitive psychology. Just as a biological vaccine exposes your immune system to a weakened pathogen so it builds antibodies, psychological inoculation exposes your mind to a mild counter-argument alongside its logical refutation—building cognitive antibodies that protect your beliefs from future manipulation.",
  coreConcept: "Beliefs kept in an ideological incubator (\"germ-free environments\") are fragile and easily shattered when challenged by sophisticated manipulators. Inoculation requires two essential components: (1) Threat Perception (warning the person that their beliefs will be targeted by deceptive adversaries); (2) Pre-bunking / Refutational Pre-emption (providing weakened counter-arguments and showing exactly how to dismantle them).",
  summary60s: "In McGuire's classic experiments, students held cultural truisms that were never previously challenged (e.g., \"Everyone should brush their teeth after every meal\"). When hit with strong counter-arguments from deceptive sources, uncontested students completely collapsed. Students who received refutational inoculation beforehand resisted the deceptive attacks with overwhelming cognitive resilience.",
  quickTakeaways: [
    "The Cognitive Vaccine: Pre-bunking is infinitely more effective than post-hoc debunking",
    "The Fragility of the Bubble: Shielding yourself or your team from opposing arguments makes you vulnerable to propaganda",
    "Build Refutational Scripts: Practice identifying logical fallacies in mock debates before entering hostile negotiations",
    "Institutional Inoculation: Train employees on mock phishing and fake news tactics to build organizational immunity",
  ],

  whyItHappens: "Active cognitive defense generation. When warned of impending threat, the brain actively rehearses counter-arguments, strengthening neural conviction.",
  evolutionaryMechanism: "Hominid tribes trained youth through mock combat and storytelling to recognize deception and betrayal before encountering hostile outsiders.",
  howItWorks: "Forewarned of persuasive attack -> Exposed to weakened counter-claim -> Provided refutational counter-punch -> Mental antibodies synthesized -> Real attack defeated effortlessly.",
  whereYouEncounterIt: "Cybersecurity anti-phishing training, science communication (climate/vaccine denial defense), political campaigns, and parental guidance.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Fragile Isolation vs. Inoculated Resilience",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Uninoculated Belief (Fragile Bubble)",
      detail: "\"I have never heard anyone question our business model; the first competitor pitch completely shakes my confidence.\"",
    },
    analogySideB: {
      label: "Inoculated Belief (Refutation Ready)",
      detail: "\"We anticipated this pricing objection 3 months ago; here are the three empirical reasons our total cost of ownership is superior.\"",
    },
  },

  researchSummary: "William J. McGuire (1964) published \"Inducing resistance to persuasion: Some contemporary approaches\" in Advances in Experimental Social Psychology.",
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
      id: 'scen_inoculation_theory_01',
      scenarioType: 'indian_context',
      title: "The Campus Cybersecurity Inoculation at IIT Bombay",
      vignette: "The IT security team at an engineering campus in Mumbai is alarmed by students falling for UPI QR code phishing scams. Instead of sending boring PDF warning circulars, the team launches an active inoculation workshop. They send simulated phishing emails to 1,000 students featuring obvious grammatical mistakes and fake urgent deadlines (\"Your hostel fee has failed, scan this QR code immediately!\"). When students click, a simulation screen pops up: \"Notice these 3 red flags: (1) Urgent panic tone; (2) Unverified UPI handle; (3) Demanding PIN to receive money.\" Three weeks later, a real criminal phishing gang attacks the campus; 96% of inoculated students report the scam immediately, resulting in zero financial losses.",
      breakdownAnalysis: "A textbook real-world application of Inoculation Theory. The simulated attack served as a weakened pathogen, allowing students to develop cognitive antibodies and instant pattern recognition against real cyber manipulation.",
      recommendedAction: "Before launching any initiative, run a \"Pre-Bunking Drill\": list the three most brutal objections or attacks critics will launch, and train your team on exact counter-evidence.",
    },
  ],

  examples: [
    {
      id: 'ex_inoculation_theory_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_inoculation_theory_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_inoculation_theory_01',
      scenarioContext: "A healthcare NGO in rural Bihar prepares to introduce maternal iron supplements. Past programs failed because local rumors claimed the pills cause birth complications. The NGO director trains health workers to explicitly address the rumor before it spreads.",
      question: "Which strategy grounded in McGuire's Inoculation Theory will most effectively protect village mothers from the misinformation?",
      prompt: "Which strategy grounded in McGuire's Inoculation Theory will most effectively protect village mothers from the misinformation?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Never mentioning the rumor, hoping nobody in the village hears it",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Proactively warning mothers: \"Some vendors will claim these pills cause complications, but here is how the clinical tests prove they nourish the baby\"",
          isCorrect: true,
          explanation: "Inoculation theory proves that forewarning of a threat and pre-emptively refuting a weakened version of the false claim builds psychological resistance against future disinformation.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Threatening to cut government rations for anyone who listens to rumors",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Social loafing among community health workers",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Pre-bunking beats debunking: inoculate the mind before manipulation strikes.",
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
      id: 'ref_inoculation_theory_01',
      title: "Inducing Resistance to Persuasion: Some Contemporary Approaches",
      citation: "McGuire, W. J. (1964). Inducing resistance to persuasion: Some contemporary approaches. Advances in Experimental Social Psychology, 1, 191–229.",
      authors: "William J. McGuire",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1016/S0065-2601(08)60052-0",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Persuasion & Influence', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'critical_thinking', slug: 'critical-thinking', title: 'Critical Thinking', relationshipType: 'amplified_by' },
    { topicId: 'psychological_reactance', slug: 'psychological-reactance', title: 'Psychological Reactance', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Inoculation Theory: Psychological Resistance Against Manipulation | Mentalab Mind",
  seoDescription: "A psychological model that produces resistance to persuasion by exposing individuals to a weak counter-argument, functioning like a biological vaccine.",
  canonicalUrl: '/mind/persuasion-and-influence/inoculation-theory',
  ogImageUrl: '/images/mind/inoculation-theory.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Beliefs kept in an ideological incubator (\"germ-free environments\") are fragile and easily shattered when challenged by sophisticated manipulators. Inoculation requires two essential components: (1) Threat Perception (warning the person that their beliefs will be targeted by deceptive adversaries); (2) Pre-bunking / Refutational Pre-emption (providing weakened counter-arguments and showing exactly how to dismantle them).",
};

export const TOPIC_INOCULATION_THEORY_HINGLISH: MindTopicDetail = {
  ...TOPIC_INOCULATION_THEORY_EN,
  title: "Inoculation Theory: Dimaag Ki Vaccination Karwana",
  subtitle: "Jaise vaccine halka virus dekar body me antibodies banati hai, waise hi manipulative jhooth se pehle uska thoda dose dekar dimaag ko mazboot banaya jata hai.",
  shortDescription: "Ek aisi psychology technique jisme logo ko aane wale jhooth ya manipulation ke baare me pehle se aagah karke unhe bachne ke logic sikhaye jaate hain.",
  oneLineExplanation: "Debunking se behtar Pre-bunking hai; bimari lagne se pehle dimaag ka tika lagwayein.",

  summary30s: "1964 me William McGuire ne Inoculation Theory di. Agar aap kisi ko aisi cheez sikhate hain jiska kabhi virodh nahi hua, toh wo pehli baar me hi manipulate ho jayega. Lekin agar aap use pehle hi bata dein: \"Samne wala aakar tumse yeh jhooth bolega, aur uska sach yeh hai\", toh uska dimaag pehle se taiyyar rehta hai aur wo kisi ke jhaanse me nahi aata.",
  coreConcept: "Cybersecurity me fake phishing emails bhejkar employees ko train karna Inoculation ka example hai. Jab real scammer email bhejta hai, toh employee turant red flags pehchan leta hai. Apne baccho ya team ko galat baaton se chhupane ke bajaye unhe pehle se reality check dein.",
  quickTakeaways: [
    "Pre-Bunking Rules: Attack aane se pehle dimaag ko antibodies do",
    "Bubble Se Bahar Niklo: Apne ideas ko bina challenge kiye rakhna kamzori hai",
    "Red Flags Pehchano: Phishing aur propaganda ke patterns ko identify karna seekhein",
    "Mock Debates: Mushkil meetings se pehle opposing arguments par practice karein",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_INOCULATION_THEORY_EN,
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

export const TOPIC_INOCULATION_THEORY: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_INOCULATION_THEORY_EN,
  hinglish: TOPIC_INOCULATION_THEORY_HINGLISH,
  hi: createLocalizedRecord('hi', "टीकाकरण सिद्धांत (Inoculation Theory): मानसिक हेरफेर के विरुद्ध प्रतिरक्षा", "विलियम मैगुइरे का सिद्धांत जो स्पष्ट करता है कि जैसे जैविक टीका शरीर में कमजोर रोगाणु प्रविष्ट कराकर प्रतिरक्षा विकसित करता है, वैसे ही व्यक्ति को विरोधी तर्कों की हल्की खुराक और उनके खंडन से परिचित कराकर उसे भविष्य के दुष्प्रचार और हेरफेर के विरुद्ध मानसिक रूप से प्रतिरक्षित किया जा सकता है।", [
    "पूर्व-सचेतता और पूर्व-खंडन (Pre-bunking)",
    "वैचारिक एकांत की कमजोरी",
    "मानसिक हेरफेर के विरुद्ध प्रतिरक्षी तंत्र"
  ]),
  gu: createLocalizedRecord('gu', "ઇનોક્યુલેશન થિયરી: માનસિક મેનીપ્યુલેશન સામે રસીકરણ", "જેમ રસી રોગ સામે રક્ષણ આપે છે, તેમ આવનારી ખોટી દલીલો અને તેના જવાબો અગાઉથી શીખવીને વ્યક્તિને અફવાઓથી સુરક્ષિત બનાવવાની પદ્ધતિ.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "इनॉक्युलेशन थिअरी: मानसिक फसवणुकीविरुद्ध रोगप्रतिकारक शक्ती निर्माण करणे", "जैविक लसीप्रमाणेच खोट्या प्रचाराची पूर्वकल्पना देऊन आणि त्याचे खंडन शिकवून माणसाला भावनिक व वैचारिक हेरफेरीपासून वाचवणे.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "ఇనాక్యులేషన్ థియరీ: మానసిక మోసాలపై ముందస్తు రోగనిరోధక శక్తి", "శరీరానికి టీకా వేసినట్లుగానే, ఎదుటివారి మోసపూరిత వాదనలను ముందుగానే పరిచయం చేసి వాటిని తిప్పికొట్టేలా మెదడును సిద్ధం చేసే సిద్ధాంతం.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "தடுப்பூசிக் கோட்பாடு: உளவியல் கையாளுதலுக்கு எதிரான தடுப்பாற்றல்", "உடலுக்கு தடுப்பூசி போடுவது போல, எதிர்காலத்தில் வரக்கூடிய தவறான பிரச்சாரங்களை முன்கூட்டியே எதிர்கொள்ள மூளைக்கு பயிற்சி அளிக்கும் முறை.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಇನಾಕ್ಯುಲೇಶನ್ ಥಿಯರಿ: ಮಾನಸಿಕ ಕುತಂತ್ರಗಳ ವಿರುದ್ಧ ರೋಗನಿರೋಧಕ ಶಕ್ತಿ", "ದೇಹಕ್ಕೆ ಲಸಿಕೆ ಹಾಕುವಂತೆ, ಎದುರಾಗಬಹುದಾದ ಸುಳ್ಳು ಪ್ರಚಾರ ಮತ್ತು ಕುತಂತ್ರಗಳನ್ನು ಮೊದಲೇ ತಿಳಿಸಿ ಅವುಗಳನ್ನು ಎದುರಿಸಲು ಮನಸ್ಸನ್ನು ಸಜ್ಜುಗೊಳಿಸುವ ತಂತ್ರ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "ഇനോക്കുലേഷൻ തിയറി: മാനസിക കൃത്രിമത്വങ്ങൾക്കെതിരെയുള്ള പ്രതിരോധ കുത്തിവെയ്പ്പ്", "ശരീരത്തിന് വാക്സിൻ നൽകുന്നതുപോലെ, വരാനിരിക്കുന്ന വ്യാജപ്രചാരണങ്ങളെക്കുറിച്ച് മുൻകൂട്ടി ബോധവൽക്കരിച്ച് മനസ്സിനെ പ്രതിരോധസജ്ജമാക്കൽ.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "ইনোকিউলেশন থিওরি: মনস্তাত্ত্বিক কারসাজির বিরুদ্ধে মানসিক টিকাদান", "দেহে টিকার মতো কাজ করে—ভবিষ্যতে আসতে পারে এমন মিথ্যা যুক্তির সাথে আগেই পরিচয় করিয়ে দিয়ে তার প্রতিকার শিখিয়ে মানসিক সুরক্ষা তৈরি করা।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਇਨੋਕਿਊਲੇਸ਼ਨ ਥਿਊਰੀ: ਮਾਨਸਿਕ ਧੋਖੇ ਵਿਰੁੱਧ ਰੋਗ-ਪ੍ਰਤੀਰੋਧਕ ਟੀਕਾਕਰਨ", "ਜਿਵੇਂ ਟੀਕਾ ਸਰੀਰ ਨੂੰ ਬਚਾਉਂਦਾ ਹੈ, ਉਵੇਂ ਹੀ ਆਉਣ ਵਾਲੇ ਝੂਠੇ ਪ੍ਰਚਾਰ ਦਾ ਪਹਿਲਾਂ ਹੀ ਕਮਜ਼ੋਰ ਰੂਪ ਦਿਖਾ ਕੇ ਦਿਮਾਗ ਨੂੰ ਸੱਚ ਲਈ ਤਿਆਰ ਕਰਨਾ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "حفاظتی ٹیکہ کاری کا نظریہ: نفسیاتی ہیرا پھیری کے خلاف ذہنی مدافعت", "جسمانی ویکسین کی طرح، مستقبل کے جھوٹے پروپیگنڈے کا کمزور نمونہ پہلے ہی دکھا کر اس کا رد سکھانا تاکہ ذہن مدافعت حاصل کر سکے۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ଇନୋକ୍ୟୁଲେସନ୍ ଥିଓରୀ: ମାନସିକ ପ୍ରତାରଣା ବିରୁଦ୍ଧରେ ପ୍ରତିଷେଧକ", "ଶରୀରକୁ ଟୀକା ଦେବା ପରି ଆଗକୁ ଆସିବାକୁ ଥିବା କପଟପୂର୍ଣ୍ଣ ପ୍ରଚାର ବିଷୟରେ ପୂର୍ବରୁ ସଚେତନ କରାଇ ମନକୁ ସୁରକ୍ଷିତ ରଖିବାର ବୈଜ୍ଞାନିକ ଉପାୟ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "ইনোকিউলেশ্যন থিয়ৰী: মানসিক প্ৰবঞ্চনাৰ বিৰুদ্ধে প্ৰতিষেধক টিকাকৰণ", "ভৱিষ্যতে আহিব পৰা অপপ্ৰচাৰৰ সৰু নমুনা আগতীয়াকৈ দেখুৱাই তাৰ সঠিক যুক্তিৰে মগজুক প্ৰস্তুত কৰি তোলাৰ ব্যৱস্থা।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
