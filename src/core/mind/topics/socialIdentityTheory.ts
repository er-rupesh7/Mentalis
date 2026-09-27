import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: Social Identity Theory: Self-Worth Through Group Belonging
 * Category: social_psychology
 * Academic Grounding: Henri Tajfel & John Turner (1979) (10.1002/ejsp.2420010202)
 */

export const TOPIC_SOCIAL_IDENTITY_THEORY_EN: MindTopicDetail = {
  id: 'social_identity_theory',
  categoryId: 'social_psychology',
  slug: 'social-identity-theory',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 18,
  viewCount: 5180,
  shareCount: 462,
  bookmarkCount: 936,
  title: "Social Identity Theory: Self-Worth Through Group Belonging",
  subtitle: "How identifying with social categories shapes self-esteem, driving in-group favoritism and out-group derogation even on arbitrary grounds.",
  shortDescription: "A theory proposing that a person's sense of who they are is based on their group memberships, creating a cognitive imperative to elevate the in-group.",
  oneLineExplanation: "We don't just belong to a group; our self-esteem becomes hostage to our team's status.",

  summary30s: "Formulated in 1979 by Henri Tajfel and John Turner, Social Identity Theory explains why human beings passionately defend their sports teams, alma maters, and political tribes. Part of our self-worth is derived from the social categories we belong to. Consequently, making our \"in-group\" look superior makes us feel personally accomplished, while belittling the \"out-group\" protects our ego.",
  coreConcept: "Tajfel demonstrated the Minimal Group Paradigm: even when test subjects are divided into groups based on completely trivial criteria (like guessing the number of dots on a screen or flipping a coin), they immediately discriminate against out-group members, distributing more money to anonymous in-group peers while sacrificing total collective profit just to maximize the gap between the two groups.",
  summary60s: "Social identity operates through three cognitive stages: (1) Social Categorization (labeling people into us vs. them); (2) Social Identification (absorbing the norms, badges, and pride of the chosen tribe); (3) Social Comparison (comparing our group against rivals to ensure perceived dominance). This explains why fans feel personal euphoria when their team wins a championship without having played a single minute.",
  quickTakeaways: [
    "The Basking in Reflected Glory (BIRGing) Effect: We wear our team's jersey when they win to absorb social status",
    "The Minimal Group Trap: Arbitrary labels (e.g., Mac vs. PC, frontend vs. backend) trigger instinctive bias in minutes",
    "Ego-Driven Tribalism: Belittling another group is often an unconscious attempt to bolster fragile self-esteem",
    "Decoupling Self-Worth: Build an internal locus of identity rather than outsourcing pride to corporate or political badges",
  ],

  whyItHappens: "Self-esteem maintenance and cognitive efficiency. Affiliating with high-status groups provides ready-made dignity, belonging, and social safety.",
  evolutionaryMechanism: "Survival in ancestral hunter-gatherer bands depended 100% on intense in-group cohesion and hyper-vigilance against unfamiliar nomadic outsiders.",
  howItWorks: "Category assigned -> Identity internalized -> Group victory becomes personal victory -> In-group favoritism emerges -> Out-group is devalued to maintain relative status superiority.",
  whereYouEncounterIt: "Cricket fan wars (CSK vs. MI), smartphone fanboys (Apple vs. Android), college rivalries (IIT vs. BITS), and corporate brand loyalty.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Individual Merits vs. Reflected Tribal Glory",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Tribal Identity Fusion",
      detail: "\"We crushed their team 4-0! Our city is fundamentally superior to their pathetic town.\"",
    },
    analogySideB: {
      label: "Objective Individuality",
      detail: "\"Eleven professional athletes won a sporting match; my personal competence and life remain entirely unchanged.\"",
    },
  },

  researchSummary: "Tajfel & Turner (1979) established Social Identity Theory in \"An Integrative Theory of Intergroup Conflict,\" proving that group categorization alone suffices to trigger bias.",
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
      id: 'scen_social_identity_theory_01',
      scenarioType: 'indian_context',
      title: "The College Tech-Fest Tribalism in Delhi",
      vignette: "Kabir is a second-year engineering student in Delhi. At an inter-college robotics competition, students from his college wear matching navy hoodies and chant insults whenever the rival college's robot steps onto the arena. When Kabir's robot wins, Kabir feels a rush of supreme intellectual pride, shouting: \"We proved our college has the greatest engineers in northern India!\" In reality, Kabir only watched from the bleachers and didn't write a single line of the robot's code.",
      breakdownAnalysis: "Tajfel's Social Identity Theory in action. Kabir underwent Social Categorization and Social Identification, experiencing \"Basking in Reflected Glory\" (BIRGing) to elevate his personal self-esteem.",
      recommendedAction: "Recognize when your emotional highs and lows are being outsourced to external group symbols; anchor your self-worth on tangible personal contributions.",
    },
  ],

  examples: [
    {
      id: 'ex_social_identity_theory_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_social_identity_theory_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_social_identity_theory_01',
      scenarioContext: "A company randomly divides 100 new management trainees into \"Alpha Pod\" and \"Beta Pod\" using a colored lanyard lottery on day one. By week three, Alpha trainees openly mock Beta trainees in the cafeteria and refuse to share lunch tables.",
      question: "Which empirical finding from Tajfel's Minimal Group Paradigm explains this rapid onset of tribal animosity?",
      prompt: "Which empirical finding from Tajfel's Minimal Group Paradigm explains this rapid onset of tribal animosity?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Group hostility only develops after decades of economic resource inequality",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Merely categorizing humans into arbitrary distinct groups is sufficient to trigger in-group favoritism and out-group derogation",
          isCorrect: true,
          explanation: "Tajfel proved that arbitrary categorization alone—with no prior history, competition, or interaction—sparks immediate in-group favoritism and tribal discrimination.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "The trainees were experiencing severe cognitive dissonance regarding their salaries",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Social loafing caused the Beta Pod to lose motivation",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Be vigilant when identifying with labels: the human brain can turn a colored lanyard into an ideological crusade in days.",
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
      id: 'ref_social_identity_theory_01',
      title: "An Integrative Theory of Intergroup Conflict",
      citation: "Tajfel, H., & Turner, J. C. (1979). An integrative theory of intergroup conflict. The Social Psychology of Intergroup Relations, 33(47), 74.",
      authors: "Henri Tajfel & John Turner",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1002/ejsp.2420010202",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Social Psychology', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'ingroup_outgroup_bias', slug: 'ingroup-outgroup-bias', title: 'Ingroup-Outgroup Bias', relationshipType: 'amplified_by' },
    { topicId: 'realistic_conflict_theory', slug: 'realistic-conflict-theory', title: 'Realistic Conflict Theory', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Social Identity Theory: Self-Worth Through Group Belonging | Mentalab Mind",
  seoDescription: "A theory proposing that a person's sense of who they are is based on their group memberships, creating a cognitive imperative to elevate the in-group.",
  canonicalUrl: '/mind/social-psychology/social-identity-theory',
  ogImageUrl: '/images/mind/social-identity-theory.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Tajfel demonstrated the Minimal Group Paradigm: even when test subjects are divided into groups based on completely trivial criteria (like guessing the number of dots on a screen or flipping a coin), they immediately discriminate against out-group members, distributing more money to anonymous in-group peers while sacrificing total collective profit just to maximize the gap between the two groups.",
};

export const TOPIC_SOCIAL_IDENTITY_THEORY_HINGLISH: MindTopicDetail = {
  ...TOPIC_SOCIAL_IDENTITY_THEORY_EN,
  title: "Social Identity Theory: Group Se Judkar Apni Value Badhana",
  subtitle: "Hum kisi college, cricket team ya company se judkar uski jeet ko apni personal jeet samajhne lagte hain.",
  shortDescription: "Ek aisi psychological theory jisme insaan ka aatmavishwas uske group ki status par depend karta hai, jisse out-group ke prati nafrat paida hoti hai.",
  oneLineExplanation: "Jab team jeet-ti hai toh hum kehte hain \"Hum jeet gaye\", aur jab haarti hai toh \"Wo haar gaye\".",

  summary30s: "1979 me Henri Tajfel ne Social Identity Theory di. Insaan ko apna samman badhana hota hai, isliye wo kisi group ka hissa banta hai—jaise IITian, Royal Challengers Bengaluru fan, ya Apple user. Jab hamara group accha perform karta hai, toh hume lagta hai ki hum personally superior hain, aur hum doosre groups ko neecha dikhane lagte hain.",
  coreConcept: "Tajfel ke experiment me logo ko bas coin flip karke do groups me baant diya gaya. Sirf itne se arbitrary division se logo ne apne group walo ko zyada paise diye aur doosre group ko discriminate kiya. Isse pata chalta hai ki tribal thinking hamare dimaag me kitni gehri hai.",
  quickTakeaways: [
    "BIRGing Effect: Team ki jeet par garv mehsoos karna bina kisi mehnat ke",
    "Minimal Group Bias: Sirf ek alag badge lagane se log doosro ko dushman maan lete hain",
    "True Self-Worth: Apni pehchaan apne kaam se banayein, kisi brand ya group ke naam par nahi",
    "Tribal Trap: \"Us vs Them\" ki baatein sunte hi satark ho jayein",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_SOCIAL_IDENTITY_THEORY_EN,
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

export const TOPIC_SOCIAL_IDENTITY_THEORY: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SOCIAL_IDENTITY_THEORY_EN,
  hinglish: TOPIC_SOCIAL_IDENTITY_THEORY_HINGLISH,
  hi: createLocalizedRecord('hi', "सामाजिक पहचान सिद्धांत (Social Identity Theory): समूह से आत्मसम्मान का निर्माण", "यह सिद्धांत बताता है कि व्यक्ति का आत्म-सम्मान उसके समूह (जाति, कॉलेज, खेल टीम, धर्म) की स्थिति से गहराई से जुड़ा होता है, जिससे अपने समूह के प्रति पक्षपात और बाहरी समूह के प्रति उपेक्षा जन्म लेती है।", [
    "समूह के माध्यम से आत्मसम्मान की खोज (BIRGing)",
    "न्यूनतम समूह प्रतिमान (Minimal Group Paradigm)",
    "पहचान के आधार पर पक्षपात की पहचान"
  ]),
  gu: createLocalizedRecord('gu', "સોશિયલ આઇડેન્ટિટી થિયરી: જૂથના આધારે આત્મસન્માન ઊભું કરવું", "જ્યારે વ્યક્તિ પોતાની કિંમત પોતાની ટીમ કે સંસ્થાની સ્થિતિ સાથે જોડી દે છે, જેનાથી પોતાના જૂથ પ્રત્યે પક્ષપાત અને અન્ય જૂથ પ્રત્યે પૂર્વગ્રહ વધે છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "सोशल आयडेंटिटी थिअरी: गटाच्या माध्यमातून आत्मसन्मान मिळवणे", "आपला स्वाभिमान आपण ज्या गटात (कॉलेज, संघ, जात) आहोत त्याच्या यशावर अवलंबून ठेवणे आणि इतर गटांना तुच्छ लेखण्याची प्रवृत्ती.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "సోషల్ ఐడెంటిటీ థియరీ: సమూహం ద్వారా ఆత్మగౌరవాన్ని పొందడం", "వ్యక్తి తన గుర్తింపును మరియు ఆత్మగౌరవాన్ని తను ఉన్న గ్రూపుతో ముడిపెట్టి, ఇతర గ్రూపులను చిన్నచూపు చూసే మానసిక ప్రవర్తన.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "சமூக அடையாளக் கோட்பாடு: குழுவின் மூலம் சுயமரியாதையை தேடுதல்", "ஒருவர் தனது சுயமரியாதையை தான் சார்ந்த குழுவின் வெற்றியோடு இணைத்துக்கொண்டு, பிற குழுக்களை இழிவாகக் கருதும் உளவியல் போக்கு.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಸೋಷಿಯಲ್ ಐಡೆಂಟಿಟಿ ಥಿಯರಿ: ಗುಂಪಿನ ಮೂಲಕ ಸ್ವಾಭಿಮಾನವನ್ನು ಕಂಡುಕೊಳ್ಳುವುದು", "ವ್ಯಕ್ತಿಯು ತನ್ನ ಸ್ವಾಭಿಮಾನವನ್ನು ತನ್ನ ತಂಡ ಅಥವಾ ಜಾತಿ/ಧರ್ಮದ ಯಶಸ್ಸಿನೊಂದಿಗೆ ಜೋಡಿಸಿಕೊಂಡು, ಇತರ ಗುಂపుಗಳನ್ನು ಕೀಳಾಗಿ ಕಾಣುವ ಪ್ರವೃತ್ತಿ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "സോഷ്യൽ ഐഡന്റിറ്റി തിയറി: ഗ്രൂപ്പിലൂടെ ആത്മാഭിമാനം കണ്ടെത്തൽ", "നമ്മുടെ സ്വന്തം മൂല്യം നാം ഉൾപ്പെടുന്ന കൂട്ടായ്മയുടെ വിജയവുമായി ബന്ധിപ്പിക്കുകയും മറ്റ് ഗ്രൂപ്പുകളെ താഴ്ത്തിക്കെട്ടുകയും ചെയ്യുന്ന സ്വഭാവം.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "সোশ্যাল আইডেন্টিটি থিওরি: দলের মাধ্যমে আত্মমর্যাদা বৃদ্ধির মোহ", "নিজের পরিচয় ও সম্মান কোনো বিশেষ গোষ্ঠীর সাথে জুড়ে দিয়ে অন্য দলকে হেয় প্রতিপন্ন করার প্রাচীন সামাজিক মানসিকতা।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਸੋਸ਼ਲ ਆਈਡੈਂਟਿਟੀ ਥਿਊਰੀ: ਗਰੁੱਪ ਰਾਹੀਂ ਸਵੈ-ਮਾਣ ਬਣਾਉਣਾ", "ਆਪਣੀ ਇੱਜ਼ਤ ਨੂੰ ਆਪਣੀ ਟੀਮ ਜਾਂ ਸੰਸਥਾ ਦੀ ਸਫਲਤਾ ਨਾਲ ਜੋੜ ਕੇ ਦੂਜੇ ਗਰੁੱਪਾਂ ਨੂੰ ਨੀਵਾਂ ਦਿਖਾਉਣ ਦੀ ਮਨੋਵਿਗਿਆਨਕ ਆਦਤ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "سماجی شناخت کا نظریہ: گروہ کی کامیابی سے عزت نفس کشید کرنا", "اپنی عزت نفس کو کسی خاص گروہ کی کامیابی سے وابستہ کر لینا اور دوسرے گروہوں کو حقارت کی نگاہ سے دیکھنا۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ସୋସିଆଲ୍ ଆଇଡେଣ୍ଟିଟି ଥିଓରୀ: ଗୋଷ୍ଠୀ ମାଧ୍ୟମରେ ଆତ୍ମସମ୍ମାନ ହାସଲ", "ବ୍ୟକ୍ତି ନିଜର ମୂଲ୍ୟ ନିଜ ଦଳ ବା ସଙ୍ଗଠନର ସଫଳତା ସହ ଯୋଡ଼ି ଅନ୍ୟ ଗୋଷ୍ଠୀକୁ ହେୟଜ୍ଞାନ କରିବାର ସାମାଜିକ ପ୍ରବୃତ୍ତି।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "ছচিয়েল আইডেণ্টিটি থিয়ৰী: দলৰ জৰিয়তে আত্মসন্মান প্ৰতিষ্ঠাৰ প্ৰয়াস", "নিজৰ সন্মান কোনো দল বা সংঘৰ সফলতাৰ লগত সাঙুৰি আন দলক উপলুঙা কৰাৰ মনস্তাত্ত্বিক প্ৰৱণতা।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
