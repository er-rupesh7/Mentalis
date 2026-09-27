import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: Pluralistic Ignorance: Private Doubts and Public Silence
 * Category: social_psychology
 * Academic Grounding: Prentice & Miller (1993) (10.1037/0022-3514.64.2.243)
 */

export const TOPIC_PLURALISTIC_IGNORANCE_EN: MindTopicDetail = {
  id: 'pluralistic_ignorance',
  categoryId: 'social_psychology',
  slug: 'pluralistic-ignorance',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 11,
  viewCount: 4410,
  shareCount: 364,
  bookmarkCount: 782,
  title: "Pluralistic Ignorance: Private Doubts and Public Silence",
  subtitle: "The social paradox where a majority of individuals privately reject an uncomfortable norm, but falsely assume everyone else supports it.",
  shortDescription: "A psychological situation in which a majority of group members privately reject a norm, but incorrectly assume that most others accept it.",
  oneLineExplanation: "Nobody believes it, but everybody thinks everybody else believes it.",

  summary30s: "First identified by Daniel Katz and Floyd Allport in 1931, Pluralistic Ignorance occurs when individuals misjudge the private attitudes of their peers based on their outward public compliance. Because everyone masks their hesitation to avoid embarrassment, everyone falsely concludes that the group consensus is genuine, entrenching irrational customs.",
  coreConcept: "Pluralistic ignorance is created by asymmetric information: we have direct access to our own private doubts, but we only have access to others' external public behaviors. When others appear calm or conformist, we attribute their behavior to internal conviction rather than social pressure, locking the entire room in collective silence.",
  summary60s: "Prentice and Miller (1993) famously demonstrated pluralistic ignorance on university campuses regarding heavy binge drinking. Male students privately reported feeling uncomfortable with extreme alcohol consumption, but believed their peers were passionately enthusiastic about it. Because everyone hid their discomfort, the dangerous drinking culture persisted unopposed.",
  quickTakeaways: [
    "The Emperor's New Clothes Dynamic: Collective delusion maintained because no one wants to look foolish alone",
    "Misattributed Conformity: Assuming others' compliance stems from genuine belief rather than social fear",
    "The Power of One Voice: A single brave individual vocalizing private doubt shatters the illusion instantly",
    "Anonymous Polls Antidote: Real-time digital polling exposes the hidden gap between public faces and private beliefs",
  ],

  whyItHappens: "Fear of social non-conformity and the illusion of transparency. People fear that admitting doubt will expose them as incompetent or out-of-step.",
  evolutionaryMechanism: "Public disagreement in ancestral groups could provoke ostracization; masking reservations was a protective social strategy.",
  howItWorks: "Individual A has doubts -> Looks at Individual B -> Individual B is hiding doubts -> Individual A thinks: \"B is fine with this\" -> Individual A stays silent -> The group adopts a plan nobody privately wants.",
  whereYouEncounterIt: "College lecture halls, corporate all-hands meetings, lavish dowry demands in family weddings, hazing rituals, and toxic work hours.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Private Reality vs. Public Facade",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Private Internal Thought (Majority)",
      detail: "\"I have no idea what the professor just derived on the whiteboard and I feel totally lost.\"",
    },
    analogySideB: {
      label: "Public Conformist Mask",
      detail: "\"Everyone else is calmly taking notes without asking questions, so I must be the only slow person here.\"",
    },
  },

  researchSummary: "Prentice & Miller (1993) proved that students significantly overestimated peer approval of campus drinking norms, leading to pluralistic compliance.",
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
      id: 'scen_pluralistic_ignorance_01',
      scenarioType: 'indian_context',
      title: "The Silent IIT Lecture in Kanpur",
      vignette: "In an advanced thermodynamics lecture at an engineering institute in Kanpur, the professor writes a 40-step tensor equation on the board and asks: \"Is this derivation completely obvious to everyone, or does anyone need clarification?\" The entire lecture hall of 120 students remains dead silent. Many nod slightly. Vikram is completely baffled, but looking at his calm peers, he assumes he is the only student struggling. After class in the canteen, he discovers that every single one of his classmates was equally confused and prayed someone else would speak up.",
      breakdownAnalysis: "Classic pluralistic ignorance. The visible silence of the room was misinterpreted as intellectual comprehension, creating a false norm that silenced 120 students.",
      recommendedAction: "Use digital anonymous polling tools (like Slido or Kahoot) to ask conceptual check questions where real-time accuracy percentages are shown immediately.",
    },
  ],

  examples: [
    {
      id: 'ex_pluralistic_ignorance_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_pluralistic_ignorance_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_pluralistic_ignorance_01',
      scenarioContext: "At a management consulting firm in Mumbai, associates work 85 hours a week. In private anonymous HR exit surveys, 92% of associates state they hate the hours and want work-life boundaries, yet in team dinners, everyone brags about pulling all-nighters.",
      question: "Which phenomenon explains why this grueling work culture persists despite overwhelming majority dissatisfaction?",
      prompt: "Which phenomenon explains why this grueling work culture persists despite overwhelming majority dissatisfaction?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Pluralistic Ignorance: Each associate assumes all other colleagues genuinely love the grinding hours",
          isCorrect: true,
          explanation: "Pluralistic ignorance occurs when a silent majority privately rejects a cultural norm but falsely believes they are in the minority, perpetuating the norm.",
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Social Loafing: Associates are reducing their cognitive effort during late nights",
          isCorrect: false,
          explanation: 'Incorrect. This does not address the core underlying psychological mechanism.',
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "The Ringelmann Effect: The consulting firm is hiring too many associates",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Drive Theory: Having clients watch them speeds up their slide formatting",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "When everyone hides their doubt, bad norms survive: vocalizing questions liberates the silent majority.",
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
      id: 'ref_pluralistic_ignorance_01',
      title: "Pluralistic ignorance and alcohol use on campus: Some consequences of misperceiving the social norm",
      citation: "Prentice, D. A., & Miller, D. T. (1993). Journal of Personality and Social Psychology, 64(2), 243–256.",
      authors: "Prentice & Miller",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1037/0022-3514.64.2.243",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Social Psychology', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'bystander_effect', slug: 'bystander-effect', title: 'The Bystander Effect', relationshipType: 'amplified_by' },
    { topicId: 'conformity_asch_effect', slug: 'conformity-asch-effect', title: 'Conformity (Asch Effect)', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Pluralistic Ignorance: Private Doubts and Public Silence | Mentalab Mind",
  seoDescription: "A psychological situation in which a majority of group members privately reject a norm, but incorrectly assume that most others accept it.",
  canonicalUrl: '/mind/social-psychology/pluralistic-ignorance',
  ogImageUrl: '/images/mind/pluralistic-ignorance.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Pluralistic ignorance is created by asymmetric information: we have direct access to our own private doubts, but we only have access to others' external public behaviors. When others appear calm or conformist, we attribute their behavior to internal conviction rather than social pressure, locking the entire room in collective silence.",
};

export const TOPIC_PLURALISTIC_IGNORANCE_HINGLISH: MindTopicDetail = {
  ...TOPIC_PLURALISTIC_IGNORANCE_EN,
  title: "Pluralistic Ignorance: Dil Me Shak Par Sabke Saamne Chuppi",
  subtitle: "Koyi bhi us baat ko dil se nahi maanta, par har koi sochta hai ki baaki sab usse agree karte hain.",
  shortDescription: "Ek aisi ajeeb situation jisme majority log kisi bekaar riwaaz ya rule ke khilaf hote hain, par sab dar ke maare chup rehte hain.",
  oneLineExplanation: "Dil me sab mana kar rahe hain, par bheed me sab sar hila rahe hain.",

  summary30s: "1931 me Katz aur Allport ne dekha ki class me jab teacher puchta hai \"Kisi ko doubt hai?\", toh koi haath nahi uthata. Har student sochta hai: \"Agar main puchunga toh log mujhe bewakoof samjhenge, baaki sabko samajh aa gaya hai.\" Jabki sachai yeh hoti hai ki 100 me se 90 logo ko kuch samajh nahi aaya hota.",
  coreConcept: "Pluralistic Ignorance tab banti hai jab hum doosro ki bahar ki shanti dekhkar yeh maan lete hain ki wo andar se satisfied hain. Shadiyo me fizool-kharch, corporate me 14 ghante kaam, aur society ke faltu rules isi vajah se chalte rehte hain.",
  quickTakeaways: [
    "Emperor's New Clothes: Raja nanga hai par sharm ke maare koi bol nahi raha",
    "Silent Majority: Zyadatar log change chahte hain par pehla kadam uthane se darte hain",
    "Ek Awaaz Ki Taqat: Ek insaan ka bolna baaki 99 logo ko himmat deta hai",
    "Anonymous Polls: Real opinion janne ke liye secret ballot sabse best tareeqa hai",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_PLURALISTIC_IGNORANCE_EN,
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

export const TOPIC_PLURALISTIC_IGNORANCE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_PLURALISTIC_IGNORANCE_EN,
  hinglish: TOPIC_PLURALISTIC_IGNORANCE_HINGLISH,
  hi: createLocalizedRecord('hi', "बहुलवादी अज्ञान (Pluralistic Ignorance): निजी असहमति और सार्वजनिक मौन", "एक ऐसी मनोवैज्ञानिक स्थिति जहां समूह का अधिकांश भाग किसी नियम या प्रथा से असहमत होता है, लेकिन गलत अनुमान लगाता है कि बाकी सभी इसका समर्थन करते हैं।", [
    "निजी असहमति का दमन",
    "सामाजिक शर्म का भय",
    "गुमनाम मतदान समाधान"
  ]),
  gu: createLocalizedRecord('gu', "પ્લુરલિસ્ટિક ઇગ્નોરન્સ: ખાનગી શંકા અને જાહેર મૌન", "જ્યારે મોટાભાગના લોકો કોઈ બાબત સાથે સંમત ન હોવા છતાં એવું માને છે કે બાકીના બધા લોકો તેની સાથે સંમત છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "प्ल्युरॅलिस्टिक इग्नोरन्स: मनात असहमती आणि ओठांवर मौन", "बहुसंख्य लोकांना एखादी प्रथा चुकीची वाटत असूनही, इतर सर्वांना ती मान्य आहे या गैरसमजातून कोणीही विरोध करत नाही.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "ప్లూరలిస్టిక్ ఇగ్నోరెన్స్: అంతర్గత సందేహం మరియు బహిరంగ మౌనం", "మెజారిటీ ప్రజలు ఒక విషయాన్ని వ్యతిరేకిస్తున్నప్పటికీ, ఇతరులందరూ అంగీకరిస్తున్నారని భావించి మౌనంగా ఉండే పరిస్థితి.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "பன்முக அறியாமை: தனிப்பட்ட மறுப்பும் பொதுவான மௌனமும்", "பெரும்பான்மையான மக்கள் ஒரு நடைமுறையை தனிப்பட்ட முறையில் எதிர்த்தாலும், மற்றவர்கள் அதை ஏற்றுக்கொள்கிறார்கள் என்று தவறாக நினைத்து மௌனமாக இருத்தல்.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಪ್ಲೂರಲಿಸ್ಟಿಕ್ ಇಗ್ನೊರೆನ್ಸ್: ಖಾಸಗಿ ಸಂದೇಹ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಮೌನ", "ಬಹುತೇಕ ಜನರಿಗೆ ಒಂದು ನಿಯಮ ತಪ್ಪೆಂದು ತಿಳಿದಿದ್ದರೂ, ಇತರರೆಲ್ಲರೂ ಒಪ್ಪಿಕೊಂಡಿದ್ದಾರೆ ಎಂಬ ಭ್ರಮೆಯಿಂದ ಯಾರೂ ಧ್ವನಿ ಎತ್ತದಿರುವುದು.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "പ്ലൂറലിസ്റ്റിക് ഇഗ്നോറൻസ്: ഉള്ളിലെ എതിർപ്പും പുറമെയുള്ള മൗനവും", "ഭൂരിഭാഗം ആളുകൾക്കും ഒരു കാര്യത്തിൽ വിയോജിപ്പുണ്ടെങ്കിലും മറ്റുള്ളവർ അത് അംഗീകരിക്കുന്നു എന്ന് തെറ്റിദ്ധരിച്ച് മിണ്ടാതിരിക്കുന്ന അവസ്ഥ.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "প্লুরালিস্টিক ইগনোরেন্স: ব্যক্তিগত দ্বিধা এবং প্রকাশ্য নীরবতা", "অধিকাংশ মানুষ ব্যক্তিগতভাবে একটি নিয়মের বিরোধী হলেও সবাই তা মেনে নিয়েছে ভেবে চুপ থাকার বিভ্রান্তি।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਪਲੂਰਲਿਸਟਿਕ ਇਗਨੋਰੈਂਸ: ਮਨ ਵਿੱਚ ਅਸਹਿਮਤੀ ਅਤੇ ਬਾਹਰ ਚੁੱਪ", "ਜਦੋਂ ਬਹੁਤੇ ਲੋਕ ਕਿਸੇ ਗੱਲ ਨੂੰ ਗਲਤ ਮੰਨਦੇ ਹੋਏ ਵੀ ਇਹ ਸੋਚ ਕੇ ਚੁੱਪ ਰਹਿੰਦੇ ਹਨ ਕਿ ਬਾਕੀ ਸਾਰੇ ਇਸ ਨਾਲ ਸਹਿਮਤ ਹਨ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "کثرتی جہالت: نجی اختلاف اور عوامی خاموشی", "جب اکثریت نجی طور پر کسی رسم کے خلاف ہو لیکن یہ سمجھ کر خاموش رہے کہ باقی سب خوشی سے متفق ہیں۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ପ୍ଲୁରାଲିଷ୍ଟିକ୍ ଇଗ୍ନୋରାନ୍ସ: ମନରେ ସନ୍ଦେହ ଏବଂ ମୁହଁରେ ଚୁପ୍", "ଅଧିକାଂଶ ଲୋକ କୌଣସି ପ୍ରଥାକୁ ବିରୋଧ କରୁଥିଲେ ମଧ୍ୟ ଅନ୍ୟମାନେ ସହମତ ବୋଲି ଭାବି ନିରବ ରହିବାର ମନସ୍ତତ୍ତ୍ୱ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "প্লুৰেলিষ্টিক ইগনৰেন্স: ব্যক্তিগত দ্বিধা আৰু মুকলি মৌনতা", "অধিকাংশ মানুহে ব্যক্তিগতভাৱে নিয়ম এটা বেয়া পালেও আনে ভাল পাইছে বুলি ভাবি মৌন হৈ থকাৰ ভুল।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
