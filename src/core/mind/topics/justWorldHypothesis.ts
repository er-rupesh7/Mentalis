import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: The Just-World Hypothesis: The Urge to Believe Life is Fair
 * Category: social_psychology
 * Academic Grounding: Melvin J. Lerner (1980) (10.1007/978-1-4899-0448-5)
 */

export const TOPIC_JUST_WORLD_HYPOTHESIS_EN: MindTopicDetail = {
  id: 'just_world_hypothesis',
  categoryId: 'social_psychology',
  slug: 'just-world-hypothesis',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 16,
  viewCount: 4960,
  shareCount: 434,
  bookmarkCount: 892,
  title: "The Just-World Hypothesis: The Urge to Believe Life is Fair",
  subtitle: "The cognitive necessity to believe that noble actions are rewarded and evil is punished, frequently leading to victim-blaming.",
  shortDescription: "A cognitive bias wherein people assume that a person's actions inherently bring morally fair and fitting consequences to that person.",
  oneLineExplanation: "Assuming people get what they deserve, and deserve what they get.",

  summary30s: "First formulated by Melvin Lerner in 1965, the Just-World Hypothesis is our psychological defense against the terror of random misfortune. To feel safe in an unpredictable world, humans convince themselves that the universe operates on cosmic justice: good things happen to good people, and tragedy only befalls those who made foolish or immoral choices.",
  coreConcept: "The belief in a just world creates a powerful psychological delusion: if bad things can happen completely at random to innocent people, then disaster could strike us at any second. To ward off this existential dread, observers subconsciously blame the victim (e.g., \"They shouldn't have walked alone,\" \"They must have been careless\"), reassuring themselves that careful people remain immune to catastrophe.",
  summary60s: "Lerner's foundational experiments showed students observing an innocent victim receiving painful electrical shocks during a learning task. When observers were completely powerless to stop the suffering or compensate the victim, they began derogating the victim's character, viewing her as unintelligent, careless, or morally flawed. Their minds invented moral culpability to maintain the illusion of cosmic fairness.",
  quickTakeaways: [
    "The Illusion of Universal Fairness: The universe is indifferent; randomness affects good and bad alike",
    "The Roots of Victim-Blaming: Blaming victims is a defensive mechanism to soothe our own vulnerability",
    "The Karma Misapplication: Conflating personal moral responsibility with arbitrary systemic accidents",
    "Empathetic Recalibration: Separate someone's tragic outcome from assumptions about their moral worth",
  ],

  whyItHappens: "Existential anxiety reduction. Acknowledging that cruel tragedies can strike completely innocent people creates intense psychological vulnerability.",
  evolutionaryMechanism: "Promoted cooperation and rule-following in ancestral tribes by fostering faith that prosocial deeds would ultimately be rewarded.",
  howItWorks: "Tragedy strikes an innocent person -> Observer feels existential dread -> \"If it happened to them, it could happen to me\" -> Search for victim flaws -> Conclude victim deserved it -> Sense of safety restored.",
  whereYouEncounterIt: "Accident reporting, medical disease judgments, financial bankruptcy commentary, poverty discussions, and judicial courtrooms.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Cosmic Fairness Illusion vs. Statistical Reality",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Just-World Fallacy",
      detail: "\"He got laid off after 15 years; he must have been secretly lazy or incompetent in his duties.\"",
    },
    analogySideB: {
      label: "Objective Reality",
      detail: "\"The entire industry faced macro-economic headwinds; layoffs impacted top and bottom performers indiscriminately.\"",
    },
  },

  researchSummary: "Lerner (1965, 1980) documented across decades of empirical testing that when people cannot rectify suffering, they cognitively re-evaluate victims as deserving their fate.",
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
      id: 'scen_just_world_hypothesis_01',
      scenarioType: 'indian_context',
      title: "The Highway Accident on the Delhi-Jaipur Expressway",
      vignette: "During heavy monsoon rains, an auto-rickshaw carrying a daily-wage worker, Ramesh, is struck by a speeding truck whose brakes failed. Ramesh suffers severe fractures. At the local tea stall, onlookers discuss the news: \"Why was he traveling in an auto in the rain? He should have taken a bus. Poor people take unnecessary risks.\" None of them check if the truck driver was speeding or the road was poorly lit.",
      breakdownAnalysis: "Classic Just-World Hypothesis. The tea-stall onlookers rationalize Ramesh's catastrophe by inventing personal flaws in his travel choice, soothing their own fear that an errant truck could crush any of them on that same road.",
      recommendedAction: "Counter victim-blaming with systemic causality: examine engineering, road safety policies, and vehicle mechanics rather than attacking the victim's character.",
    },
  ],

  examples: [
    {
      id: 'ex_just_world_hypothesis_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_just_world_hypothesis_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_just_world_hypothesis_01',
      scenarioContext: "Following a sudden data breach at an ed-tech startup caused by a zero-day vulnerability, several board members remark: \"The IT head must have been incompetent or corrupt to let this happen, even though all security audits were green.\"",
      question: "Which psychological mechanism explains the board's urge to blame the IT head rather than accept that zero-day exploits carry unavoidable systemic risk?",
      prompt: "Which psychological mechanism explains the board's urge to blame the IT head rather than accept that zero-day exploits carry unavoidable systemic risk?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Group polarization toward cyber-security funding",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "The Just-World Hypothesis comforting the board by attributing bad outcomes to individual moral/competence flaws",
          isCorrect: true,
          explanation: "The Just-World Hypothesis drives people to attribute catastrophic events to individual fault rather than accept that unpredictability and random threats exist.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Social loafing among the development engineers",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "The Pygmalion effect elevating the attackers' performance",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Resist the urge to blame victims: randomness does not consult anyone's moral ledger.",
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
      id: 'ref_just_world_hypothesis_01',
      title: "The Belief in a Just World: A Fundamental Delusion",
      citation: "Lerner, M. J. (1980). The Belief in a Just World: A Fundamental Delusion. Plenum Press, New York.",
      authors: "Melvin J. Lerner",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1007/978-1-4899-0448-5",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Social Psychology', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'fundamental_attribution_error', slug: 'fundamental-attribution-error', title: 'Fundamental Attribution Error', relationshipType: 'amplified_by' },
    { topicId: 'hindsight_bias', slug: 'hindsight-bias', title: 'Hindsight Bias', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "The Just-World Hypothesis: The Urge to Believe Life is Fair | Mentalab Mind",
  seoDescription: "A cognitive bias wherein people assume that a person's actions inherently bring morally fair and fitting consequences to that person.",
  canonicalUrl: '/mind/social-psychology/just-world-hypothesis',
  ogImageUrl: '/images/mind/just-world-hypothesis.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "The belief in a just world creates a powerful psychological delusion: if bad things can happen completely at random to innocent people, then disaster could strike us at any second. To ward off this existential dread, observers subconsciously blame the victim (e.g., \"They shouldn't have walked alone,\" \"They must have been careless\"), reassuring themselves that careful people remain immune to catastrophe.",
};

export const TOPIC_JUST_WORLD_HYPOTHESIS_HINGLISH: MindTopicDetail = {
  ...TOPIC_JUST_WORLD_HYPOTHESIS_EN,
  title: "The Just-World Hypothesis: Duniya Hamesha Fair Hoti Hai Ka Bhram",
  subtitle: "Hume lagta hai ache logo ke sath acha aur bure ke sath bura hota hai, isliye hum accident ke victim ko hi dosh dene lagte hain.",
  shortDescription: "Ek aisi soch jisme hum maan lete hain ki jo jaisa karega waisa bharega, aur haadse ka shikaar insaan khud hi apni musibat ka zimmedar hai.",
  oneLineExplanation: "Yeh sochna ki kismat hamesha insaaf karti hai, aur victim me hi koi kami thi.",

  summary30s: "1965 me Melvin Lerner ne Just-World Hypothesis discover kiya. Jab kisi masoom ke sath koi bura haadsa hota hai, toh hume darr lagta hai ki yeh hamare sath bhi ho sakta hai. Is darr se bachne ke liye hamara dimaag victim me hi galtiyan dhoondhne lagta hai—jaise \"use wahan jaana hi nahi chahiye tha\"—taaki hume lage ki hum safe hain.",
  coreConcept: "Duniya me bohot si cheezein random hoti hain. Lekin insaan ka dimaag randomness accept nahi kar pata. Hum karma ko galat tareeqe se apply karte hain aur bimaari, poverty ya accident ke victims ko judge karne lagte hain.",
  quickTakeaways: [
    "Victim-Blaming Ka Sach: Hum victim ko isliye blame karte hain taaki khud ko surakshit mehsoos kara sakein",
    "Randomness Ki Haqeeqat: Bura haadsa kisi ke sath bhi bina kisi galti ke ho sakta hai",
    "False Sense of Security: \"Main aisi galti nahi karunga\" sochna bas ek jhoothi tasalli hai",
    "Compassion First: Haadse ke waqt moral lecture dene ke bajaye madad par dhyaan dein",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_JUST_WORLD_HYPOTHESIS_EN,
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

export const TOPIC_JUST_WORLD_HYPOTHESIS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_JUST_WORLD_HYPOTHESIS_EN,
  hinglish: TOPIC_JUST_WORLD_HYPOTHESIS_HINGLISH,
  hi: createLocalizedRecord('hi', "न्यायपूर्ण विश्व परिकल्पना (Just-World Hypothesis): न्यायसंगत दुनिया का भ्रम", "यह विश्वास कि दुनिया मूलतः निष्पक्ष है जहाँ लोगों को उनके कर्मों के अनुसार ही फल मिलता है; इसके कारण लोग अक्सर निर्दोष पीड़ितों को ही उनके दुर्भाग्य का दोषी ठहराने लगते हैं।", [
    "पीड़ित को दोष देने की मनोवैज्ञानिक प्रवृत्ति",
    "अनिश्चितता और भय से बचने की रक्षा-प्रणाली",
    "संयोग और दुर्भाग्य की वास्तविकता को स्वीकारना"
  ]),
  gu: createLocalizedRecord('gu', "જસ્ટ-વર્લ્ડ હાયપોથિસિસ: દુનિયા હંમેશા ન્યાયી છે તેવો ભ્રમ", "જ્યારે લોકો માને છે કે દરેક વ્યક્તિ સાથે તેના કર્મો મુજબ જ થાય છે, જેના પરિણામે અકસ્માત કે આફતના ભોગ બનેલા નિર્દોષને જ દોષી ગણવામાં આવે છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "जस्ट-वर्ल्ड हायपोथिसिस: जग पूर्णतः न्याय्य असल्याचा गैरसमज", "चांगल्या लोकांसोबत चांगलेच घडते आणि वाईटांसोबत वाईट हा हट्ट धरल्यामुळे पीडित व्यक्तीलाच तिच्या दुर्दैवासाठी जबाबदार धरण्याची विकृती निर्माण होते.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "జస్ట్-వరల్డ్ హైపోథీసిస్: ప్రపంచం ఎల్లప్పుడూ న్యాయబద్ధంగా ఉంటుందనే భ్రమ", "మంచివారికి మంచే జరుగుతుందని భావించి, అనుకోని ప్రమాదాల్లో చిక్కుకున్న బాధితులనే నిందించే అహేతుక ఆలోచనా విధానం.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "நியாயமான உலகக் கோட்பாடு: உலகம் எப்போதும் நியாயமானது என்ற மாயை", "நல்லவர்களுக்கு நன்மையே நடக்கும் என குருட்டுத்தனமாக நம்பி, எதிர்பாராத விபத்தில் பாதிக்கப்பட்டவர்களையே குற்றம் சாட்டும் மனித உளவியல்.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಜಸ್ಟ್-ವರ್ಲ್ಡ್ ಹೈಪೋಥಿಸಿಸ್: ಜಗತ್ತು ಸದಾ ನ್ಯಾಯಯುತವಾಗಿದೆ ಎಂಬ ಭ್ರಮೆ", "ಒಳ್ಳೆಯವರಿಗೆ ಒಳ್ಳೆಯದೇ ಆಗುತ್ತದೆ ಎಂದು ಭಾವಿಸಿ, ಅನಿರೀಕ್ಷಿತ ದುರಂತಕ್ಕೀಡಾದ ಸಂತ್ರಸ್ತರನ್ನೇ ದೂಷಿಸುವ ಮಾನಸಿಕ ದೋಷ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "ജസ്റ്റ്-വേൾഡ് ഹൈപ്പോതെസിസ്: ലോകം തികച്ചും നീതിയുക്തമാണെന്ന മിഥ്യാധാരണ", "നല്ലവർക്ക് നല്ലതേ വരൂ എന്ന് വിശ്വസിച്ച്, അപ്രതീക്ഷിത ദുരന്തങ്ങളിൽ പെടുന്ന നിരപരാധികളെത്തന്നെ കുറ്റപ്പെടുത്തുന്ന മനോഭാവം.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "জাস্ট-ওয়ার্ল্ড হাইপোথিসিস: পৃথিবী সর্বদা ন্যায়সঙ্গত—এই অন্ধ বিশ্বাস", "মানুষ তার কর্মফলেই কষ্ট পায়—এই বিশ্বাস আঁকড়ে ধরে কোনো দুর্ঘটনার শিকার নিরপরাধ ব্যক্তিকেই দোষারোপ করার অদ্ভুত প্রবণতা।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਜਸਟ-ਵਰਲਡ ਹਾਈਪੋਥਿਸਿਸ: ਦੁਨੀਆ ਹਮੇਸ਼ਾ ਇਨਸਾਫ਼-ਪਸੰਦ ਹੈ ਦਾ ਭੁਲੇਖਾ", "ਇਹ ਮੰਨਣਾ ਕਿ ਮਾੜਾ ਸਿਰਫ਼ ਮਾੜੇ ਲੋਕਾਂ ਨਾਲ ਹੀ ਹੁੰਦਾ ਹੈ, ਜਿਸ ਕਰਕੇ ਪੀੜਤ ਵਿਅਕତି ਨੂੰ ਹੀ ਉਸਦੇ ਦੁੱਖਾਂ ਦਾ ਕਸੂਰਵਾਰ ਠਹਿਰਾਇਆ ਜਾਂਦਾ ਹੈ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "منصفانہ دنیا کا مغالطہ: ہر انجام کو ذاتی عمل کا نتیجہ سمجھنا", "یہ یقین رکھنا کہ دنیا ہمیشہ انصاف پر چلتی ہے، جس کی وجہ سے حادثات کے شکار معصوم افراد کو ہی ان کی بدقسمتی کا ذمہ دار ٹھہرایا جاتا ہے۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ଜଷ୍ଟ-ୱାର୍ଲ୍ଡ ହାଇପୋଥିସିସ୍: ଦୁନିଆ ସର୍ବଦା ନ୍ୟାୟପୂର୍ଣ୍ଣ ବୋଲି ଭ୍ରମ", "ଭଲ ଲୋକଙ୍କ ସହ କେବଳ ଭଲ ହିଁ ଘଟେ ବୋଲି ବିଶ୍ୱାସ କରି ବିପଦରେ ପଡ଼ିଥିବା ନିରୀହ ପୀଡ଼ିତଙ୍କୁ ହିଁ ଦୋଷ ଦେବାର ମନସ୍ତାତ୍ତ୍ୱିକ ଦୁର୍ବଳତା।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "জাস্ট-ৱাৰ্ল্ড হাইপ’থিছিছ: পৃথিৱীখন সদায় ন্যায়সঙ্গত বুলি ভবাৰ ভুল", "ভাল মানুহৰ লগত বেয়া নহয় বুলি ভাবি কোনো দুৰ্ঘটনাত পতিত নিৰীহ ব্যক্তিক নিজেই দোষী সাব্যস্ত কৰাৰ মানসিক বিকৃতি।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
