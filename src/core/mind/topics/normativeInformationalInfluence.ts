import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: Normative vs. Informational Social Influence: Fitting In vs. Being Right
 * Category: social_psychology
 * Academic Grounding: Morton Deutsch & Harold B. Gerard (1955) (10.1037/h0046408)
 */

export const TOPIC_NORMATIVE_INFORMATIONAL_INFLUENCE_EN: MindTopicDetail = {
  id: 'normative_informational_influence',
  categoryId: 'social_psychology',
  slug: 'normative-informational-influence',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 19,
  viewCount: 5290,
  shareCount: 476,
  bookmarkCount: 958,
  title: "Normative vs. Informational Social Influence: Fitting In vs. Being Right",
  subtitle: "Distinguishing between conforming to gain social approval (normative) versus conforming because you trust others' knowledge (informational).",
  shortDescription: "The two foundational social forces governing conformity: the desire to be liked and accepted versus the desire to be accurate and correct.",
  oneLineExplanation: "Normative influence is going along to get along; informational influence is following the crowd because you don't know the way.",

  summary30s: "Disentangled in 1955 by Morton Deutsch and Harold Gerard, conformity is split into two completely distinct cognitive pathways. Normative Social Influence occurs when you know the crowd is wrong, but you conform anyway to avoid social rejection or awkwardness. Informational Social Influence occurs when reality is ambiguous, and you genuinely assume the crowd has superior knowledge.",
  coreConcept: "Understanding the split is critical for intellectual sovereignty. Normative conformity changes overt public compliance without changing private belief (e.g., clapping for a boring speech). Informational conformity causes true private acceptance and cognitive internalization (e.g., following locals during an earthquake evacuation because you assume they know the safest exit route).",
  summary60s: "Deutsch and Gerard modified Solomon Asch's line experiment. When participants gave their line judgments in private without social exposure, conformity dropped by more than 50%—proving that the majority of Asch's original conformity was normative (fear of standing out), rather than informational (genuine perceptual confusion). When stakes are high and accuracy is incentivized, normative conformity collapses, but informational conformity rises if uncertainty remains.",
  quickTakeaways: [
    "The Two Conformity Engines: Ask yourself: \"Am I doing this to be liked, or because I believe they know better?\"",
    "Public Compliance vs. Private Acceptance: Normative influence shapes polite words; informational influence rewires your world model",
    "The Ambiguity Vulnerability: In unfamiliar environments (new jobs, new cities), informational influence makes you mimic anyone with confidence",
    "The Fear of Rejection Shield: Train yourself to endure 10 seconds of awkwardness rather than endorse a disastrous consensus",
  ],

  whyItHappens: "Dual human evolutionary imperatives: (1) The need to belong to avoid tribal exile; (2) The need to acquire accurate navigational data about the environment.",
  evolutionaryMechanism: "Ostracism from ancestral hunter bands meant certain starvation; simultaneously, copying tribal elders' foraging routes saved calories and prevented poisoning.",
  howItWorks: "Social situation encountered -> Check ambiguity level -> If high ambiguity, use Informational route (trust crowd data) -> If low ambiguity but high social scrutiny, use Normative route (comply to avoid rejection).",
  whereYouEncounterIt: "Office dress codes, clapping at conferences, investing in trending meme stocks, fine dining etiquette, and voting behavior.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Fear of Disapproval vs. Quest for Accuracy",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Normative Influence (Compliance)",
      detail: "\"I know this slide deck has false metrics, but challenging the VP right now will get me branded as non-collaborative.\"",
    },
    analogySideB: {
      label: "Informational Influence (Acceptance)",
      detail: "\"I have never visited this Mumbai metro interchange before; everyone is running toward Platform 3, so that must be the correct train.\"",
    },
  },

  researchSummary: "Deutsch & Gerard (1955) published \"A study of normative and informational social influences upon individual judgment,\" establishing modern conformity taxonomy.",
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
      id: 'scen_normative_informational_influence_01',
      scenarioType: 'indian_context',
      title: "The Startup Pitch Meeting in Indiranagar",
      vignette: "Aarav joins a hot Bangalore artificial intelligence startup as a junior product designer. During a design sprint, the charismatic CEO proposes a user onboarding flow that requires users to upload their Aadhaar card before seeing the homepage. Aarav immediately recognizes this will cause an 80% drop-off rate and violates basic UX principles. However, all three senior directors nod and say: \"Brilliant, this demonstrates trust.\" Aarav remains silent and votes in favor. At night, he texts his friend: \"The idea is terrible, but I didn't want to look like a troublemaker on day 4.\"",
      breakdownAnalysis: "Pure Normative Social Influence. Aarav had zero informational doubt (he knew the UX science), but succumbed to normative pressure to preserve social capital and avoid being ostracized.",
      recommendedAction: "Implement anonymous voting mechanisms or designated \"Devil's Advocate\" roles in product reviews to neutralize normative social pressure.",
    },
  ],

  examples: [
    {
      id: 'ex_normative_informational_influence_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_normative_informational_influence_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_normative_informational_influence_01',
      scenarioContext: "An American tourist and a local resident are dining at a traditional thali restaurant in Varanasi. The tourist watches the surrounding 20 diners eat with their right hand and immediately adopts the practice, believing it is the hygienically and culturally proper method.",
      question: "Which type of social influence did the tourist experience, and what was the internal cognitive outcome?",
      prompt: "Which type of social influence did the tourist experience, and what was the internal cognitive outcome?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Normative influence resulting in superficial public compliance without belief",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Informational social influence resulting in genuine private acceptance of correct behavior",
          isCorrect: true,
          explanation: "The tourist faced an ambiguous situation, looked to others as a credible source of accurate information, and internalized the behavior (informational influence with private acceptance).",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Diffusion of responsibility leading to ethical lapse",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Psychological reactance driving rebellion against cultural norms",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Distinguish between learning from others (informational) and cowardly surrendering your judgment (normative).",
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
      id: 'ref_normative_informational_influence_01',
      title: "A study of normative and informational social influences upon individual judgment",
      citation: "Deutsch, M., & Gerard, H. B. (1955). Journal of Abnormal and Social Psychology, 51(3), 629–636.",
      authors: "Morton Deutsch & Harold B. Gerard",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1037/h0046408",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Social Psychology', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'conformity_asch_effect', slug: 'conformity-asch-effect', title: 'Conformity (Asch Effect)', relationshipType: 'amplified_by' },
    { topicId: 'pluralistic_ignorance', slug: 'pluralistic-ignorance', title: 'Pluralistic Ignorance', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Normative vs. Informational Social Influence: Fitting In vs. Being Right | Mentalab Mind",
  seoDescription: "The two foundational social forces governing conformity: the desire to be liked and accepted versus the desire to be accurate and correct.",
  canonicalUrl: '/mind/social-psychology/normative-informational-influence',
  ogImageUrl: '/images/mind/normative-informational-influence.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Understanding the split is critical for intellectual sovereignty. Normative conformity changes overt public compliance without changing private belief (e.g., clapping for a boring speech). Informational conformity causes true private acceptance and cognitive internalization (e.g., following locals during an earthquake evacuation because you assume they know the safest exit route).",
};

export const TOPIC_NORMATIVE_INFORMATIONAL_INFLUENCE_HINGLISH: MindTopicDetail = {
  ...TOPIC_NORMATIVE_INFORMATIONAL_INFLUENCE_EN,
  title: "Normative vs Informational Influence: Logo Ki Pasand Banna Ya Sahi Hona",
  subtitle: "Kuch baatein hum isliye maante hain kyunki hume logo se validation chahiye (Normative), aur kuch isliye kyunki hume lagta hai unhe sach pata hai (Informational).",
  shortDescription: "Samajik prabhav ke do mukhya roop: ek jisme hum dosti banaye rakhne ke liye haan me haan milate hain, aur doosra jisme hum bheed ki samajh par bharosa karte hain.",
  oneLineExplanation: "Normative matlab rejection se bachna; Informational matlab anjaan raste par bheed ke peeche chalna.",

  summary30s: "1955 me Deutsch aur Gerard ne bataya ki log do alag-alag wajah se bheed ki baat maante hain. Pehla hai Normative Influence—jab aapko pata hota hai ki bheed galat hai, par aap akele alag nahi dikhna chahte isliye haan keh dete hain. Doosra hai Informational Influence—jab aapko khud koi jaankari nahi hoti aur aap sochte hain ki bheed ko sab pata hoga.",
  coreConcept: "Office meetings me jab sab boss ki bekaar baat par taali bajate hain, wo Normative influence hai. Par jab nayi city me jaakar aap sabse bheed wali chaat ki dukaan par khade hote hain, wo Informational influence hai.",
  quickTakeaways: [
    "Khud Se Puchhein: \"Kya main darr ke maare haan bol raha hoon ya sach me yeh sahi hai?\"",
    "Validation vs Reality: Rejection ke darr se apni sahi baat ko chupana band karein",
    "Unfamiliar Territory: Nayi jagah par informational influence ka asar sabse zyada hota hai",
    "Psychological Safety: Teams me anonymous feedback rakhne se normative pressure khatam hota hai",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_NORMATIVE_INFORMATIONAL_INFLUENCE_EN,
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

export const TOPIC_NORMATIVE_INFORMATIONAL_INFLUENCE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_NORMATIVE_INFORMATIONAL_INFLUENCE_EN,
  hinglish: TOPIC_NORMATIVE_INFORMATIONAL_INFLUENCE_HINGLISH,
  hi: createLocalizedRecord('hi', "मानक बनाम सूचनात्मक सामाजिक प्रभाव (Normative vs. Informational Social Influence)", "अनुरूपता के दो मूलभूत स्रोत: अस्वीकृति के डर से केवल समूह में फिट होने के लिए सहमत होना (मानक प्रभाव) बनाम दूसरों के ज्ञान को अधिक सटीक मानकर उसका अनुसरण करना (सूचनात्मक प्रभाव)।", [
    "स्वीकृति की इच्छा बनाम सत्य की खोज",
    "सार्वजनिक सहमति और आंतरिक विश्वास का अंतर",
    "सामाजिक दबाव में स्वतंत्र सोच का संरक्षण"
  ]),
  gu: createLocalizedRecord('gu', "નોર્મેટિવ વિ. ઇન્ફોર્મેશનલ સોશિયલ ઇન્ફ્લુઅન્સ: સ્વીકૃતિ કે સત્યની શોધ", "જૂથમાં ભળવા માટે સંમત થવું (નોર્મેટિવ) અને લોકો પાસે સાચી માહિતી છે એમ માનીને તેમનું અનુકરણ કરવું (ઇન્ફોર્મેશનલ) વચ્ચેનો મનોવૈજ્ઞાનિક તફાવત.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "नॉर्मेटिव्ह विरुद्ध इन्फॉर्मेशनल प्रभाव: गटात सामावून घेणे की सत्य शोधणे", "लोकांच्या पसंतीस उतरायचे म्हणून होकार देणे (नॉर्मेटिव्ह) आणि लोकांना जास्त माहिती आहे असे समजून त्यांचे अनुकरण करणे (इन्फॉर्मेशनल) यातील फरक.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "నార్మేటివ్ వర్సెస్ ఇన్ఫర్మేషనల్ సోషల్ ఇన్‌ఫ్లుయెన్స్: మెప్పు కోసమా లేక సత్యం కోసమా", "ఇతరుల ఆమోదం పొందడం కోసం అంగీకరించడం (నార్మేటివ్) మరియు ఇతరుల వద్ద సరైన సమాచారం ఉందని నమ్మి అనుసరించడం (ఇన్ఫర్మేషనల్) మధ్య తేడా.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "நெறிமுறை மற்றும் தகவல் சமூக செல்வாக்கு: ஏற்புக்காகவா அல்லது உண்மைக்காகவா", "மற்றவர்களின் ஏற்பைப் பெறுவதற்காக இணங்கிப்போதல் (நெறிமுறை) மற்றும் மற்றவர்களுக்கு அதிகம் தெரியும் என நம்பிப் பின்பற்றுதல் (தகவல்) இடையேயான வேறுபாடு.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ನಾರ್ಮೇಟಿವ್ ವರ್ಸಸ್ ಇನ್ಫಾರ್ಮೇಷನಲ್ ಪ್ರಭಾವ: ಒಪ್ಪಿಗೆಗಾಗಿ ಅಥವಾ ಸತ್ಯಕ್ಕಾಗಿ", "ಇತರರ ಮೆಚ್ಚುಗೆಗಾಗಿ ಒಪ್ಪಿಕೊಳ್ಳುವುದು (ನಾರ್ಮೇಟಿವ್) ಮತ್ತು ಇತರರಿಗೆ ಹೆಚ್ಚು ತಿಳಿದಿದೆ ಎಂದು ಭಾವಿಸಿ ಅನುಸರಿಸುವುದು (ಇನ್ಫಾರ್ಮೇಷನಲ್) ನಡುವಿನ ವ್ಯತ್ಯಾಸ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "നോർമേറ്റീവ് വേഴ്സസ് ഇൻഫർമേഷണൽ സോഷ്യൽ ഇൻഫ്ലുവൻസ്: സ്വീകാര്യതയോ സത്യമോ", "മറ്റുള്ളവരുടെ അംഗീകാരം നേടാനായി വഴങ്ങുന്നതും (നോർമേറ്റീവ്) മറ്റുള്ളവർക്ക് കൂടുതൽ അറിയാമെന്ന് കരുതി അനുസരിക്കുന്നതും (ഇൻഫർമേഷണൽ) തമ്മിലുള്ള അന്തരം.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "নর্মেটিভ বনাম ইনফরমেশনাল সামাজিক প্রভাব: গ্রহণযোগ্যতা নাকি সত্যের অনুসন্ধান", "দলের অংশ হতে ভুল জেনেও সম্মতি দেওয়া (নর্মেটিভ) এবং সঠিক পথ জানার জন্য ভিড়ের ভরসায় চলা (ইনফরমেশনাল)—এই দুই প্রভাবের পার্থক্য।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਨੋਰਮੇਟਿਵ ਬਨਾਮ ਇਨਫਾਰਮੇਸ਼ਨਲ ਪ੍ਰਭਾਵ: ਸਵੀਕ੍ਰਿਤੀ ਜਾਂ ਸੱਚ ਦੀ ਭਾਲ", "ਲੋਕਾਂ ਵਿੱਚ ਫਿੱਟ ਹੋਣ ਲਈ ਹਾਮੀ ਭਰਨਾ (ਨੋਰਮੇਟਿਵ) ਅਤੇ ਦੂਜਿਆਂ ਨੂੰ ਵੱਧ ਗਿਆਨਵਾਨ ਸਮਝ ਕੇ ਉਹਨਾਂ ਦਾ ਪਿੱਛਾ ਕਰਨਾ (ਇਨਫਾਰਮੇਸ਼ਨਲ) ਦੇ ਵਿਚਕਾਰ ਅੰਤਰ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "معیاری بمقابلہ معلوماتی سماجی اثر: منظوری کی خواہش یا حق کی تلاش", "لوگوں میں شامل ہونے کے لیے سر ہلا دینا (معیاری) اور دوسروں کو زیادہ باخبر سمجھ کر ان کی تقلید کرنا (معلوماتی) کے درمیان فرق۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ନର୍ମେଟିଭ୍ ବନାମ ଇନଫରମେସନାଲ୍ ସାମାଜିକ ପ୍ରଭାବ: ଗ୍ରହଣୀୟତା ନା ସତ୍ୟର ସନ୍ଧାନ", "ଅନ୍ୟମାନଙ୍କ ପସନ୍ଦ ହେବା ପାଇଁ ସହମତ ହେବା (ନର୍ମେଟିଭ୍) ଏବଂ ଲୋକଙ୍କ ପାଖରେ ସଠିକ୍ ତଥ୍ୟ ଅଛି ଭାବି ଅନୁକରଣ କରିବା (ଇନଫରମେସନାଲ୍) ମଧ୍ୟରେ ପାର୍ଥକ୍ୟ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "নৰ্মেটিভ বনাম ইনফৰ্মেচনেল সামাজিক প্ৰভাৱ: সন্মতি নে সত্যৰ সন্ধান", "দলত স্থান পাবলৈ সন্মতি প্ৰকাশ কৰা (নৰ্মেটিভ) আৰু আনৰ জ্ঞানক শ্ৰেষ্ঠ বুলি ভাবি অনুসৰণ কৰা (ইনফৰ্মেচনেল)ৰ মাজৰ মনোবৈজ্ঞানিক পাৰ্থক্য।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
