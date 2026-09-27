import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: Social Facilitation & Inhibition: Performance Under the Gaze of Others
 * Category: social_psychology
 * Academic Grounding: Robert B. Zajonc (1965) (10.1126/science.149.3681.269)
 */

export const TOPIC_SOCIAL_FACILITATION_EN: MindTopicDetail = {
  id: 'social_facilitation',
  categoryId: 'social_psychology',
  slug: 'social-facilitation',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 10,
  viewCount: 4300,
  shareCount: 350,
  bookmarkCount: 760,
  title: "Social Facilitation & Inhibition: Performance Under the Gaze of Others",
  subtitle: "Why having an audience supercharges simple, well-rehearsed tasks but cripples novel, complex problem-solving.",
  shortDescription: "The tendency for the presence of others to improve a person's performance on an easy or well-learned task, but impair performance on a difficult or unmastered task.",
  oneLineExplanation: "Audiences energize your habits, but paralyze your thinking.",

  summary30s: "First observed in cyclists by Norman Triplett in 1898 and unlocked theoretically by Robert Zajonc in 1965, Social Facilitation demonstrates that the mere presence of other people triggers physiological arousal. This arousal sharpens \"dominant responses\": if a skill is pure muscle memory (running, typing), you excel; if a skill requires creative calculation (coding, chess), you freeze.",
  coreConcept: "Zajonc's Drive Theory integrates social presence with Yerkes-Dodson arousal laws: (1) Mere presence triggers autonomic nervous system alertness; (2) Heightened drive enhances the likelihood of the dominant response; (3) For simple, overlearned tasks, the dominant response is correct (Facilitation); (4) For complex, unfamiliar tasks, the dominant response is error-prone trial-and-error (Social Inhibition).",
  summary60s: "Zajonc famously tested this even in cockroaches. When running through a simple straight-line tube to escape light, roaches ran faster when other roaches were watching from transparent plastic \"bleachers.\" But when running through a complex multi-turn maze, the audience of roaches caused the runner to make significantly more mistakes and slow down. The effect is hardwired into animal physiology.",
  quickTakeaways: [
    "The Audience Multiplier: Spectators boost motor habits and stamina, but crush complex working memory",
    "Evaluation Apprehension: Performance anxiety spikes when observers are seen as judgmental evaluators",
    "The Open-Office Trap: Open-plan offices facilitate routine busywork while severely degrading deep architecture work",
    "Solitude for Synthesis: Master complex algorithms and difficult writing alone; perform public speeches with an audience",
  ],

  whyItHappens: "Involuntary autonomic arousal. The presence of conspecifics activates evolutionary threat/opportunity appraisal systems, narrowing attentional focus.",
  evolutionaryMechanism: "In ancestral environments, having other eyes upon you meant you were either being evaluated by dominant group members or stalked by competitors, demanding high physical alertness.",
  howItWorks: "Observers present -> Heart rate and cortisol increase -> Attentional spotlight narrows -> Habitual dominant responses fire automatically -> Simple tasks speed up -> Complex creative tasks suffer cognitive bottlenecks.",
  whereYouEncounterIt: "Public speaking, athletic sprints, coding interviews under live screen-sharing, open-plan office desk environments, and musical recitals.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Simple Motor Tasks vs. Complex Creative Tasks",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Well-Learned Habit (Facilitated)",
      detail: "\"A marathon runner running 10% faster because thousands of cheering fans line the Mumbai streets.\"",
    },
    analogySideB: {
      label: "Novel Complex Synthesis (Inhibited)",
      detail: "\"A software engineer choking on a novel dynamic-programming problem while three interviewers stare at his cursor.\"",
    },
  },

  researchSummary: "Robert Zajonc (1965) resolved decades of conflicting experimental literature by formulating Drive Theory: presence enhances dominant responses and impairs subordinate responses.",
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
      id: 'scen_social_facilitation_01',
      scenarioType: 'indian_context',
      title: "The Live Screen-Share Coding Interview in Bengaluru",
      vignette: "Kavita is a senior software engineer in Bengaluru who writes flawless distributed systems code in private. During an interview for a top tech firm, two senior staff engineers watch her screen live over Zoom, saying \"Talk through your thoughts in real time.\" Faced with a graph-traversal problem she has never seen, Kavita's heart pounds, her hands shake, and she cannot even remember basic Python dictionary syntax. Later that evening alone in her room, she solves the exact same problem in 12 minutes.",
      breakdownAnalysis: "Severe Social Inhibition. The complex novel task required extensive working memory, which was throttled by the intense physiological arousal of having two evaluators staring at her screen.",
      recommendedAction: "De-escalate arousal during complex synthesis: take 2 minutes of silent scratchpad thinking without talking, or request take-home asynchronous assessments.",
    },
  ],

  examples: [
    {
      id: 'ex_social_facilitation_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_social_facilitation_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_social_facilitation_01',
      scenarioContext: "A tech startup in Gurgaon transitions its software developers and data scientists from private quiet booths into a bustling open-plan bench layout to \"improve creative energy.\"",
      question: "Based on Zajonc's Social Facilitation Theory, what will be the empirical outcome of this office reorganization?",
      prompt: "Based on Zajonc's Social Facilitation Theory, what will be the empirical outcome of this office reorganization?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Engineers will solve novel machine-learning mathematical architectures significantly faster",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Routine administrative tasks (replying to emails, ticketing) will speed up, while deep novel architectural problem-solving will decline",
          isCorrect: true,
          explanation: "Social presence facilitates overlearned, routine tasks (emails, tickets) but creates cognitive interference that inhibits novel, high-load cognitive synthesis.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Both routine and complex creative tasks will improve equally across all employees",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Social loafing will completely disappear because everyone can see each other's monitors",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Work alone to think; work together to execute: match the task complexity to the social setting.",
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
      id: 'ref_social_facilitation_01',
      title: "Social facilitation: A solution is suggested for an old unsolved social psychological problem",
      citation: "Zajonc, R. B. (1965). Science, 149(3681), 269–274.",
      authors: "Robert B. Zajonc",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1126/science.149.3681.269",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Social Psychology', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'social_loafing', slug: 'social-loafing', title: 'Social Loafing', relationshipType: 'amplified_by' },
    { topicId: 'spotlight_effect', slug: 'spotlight-effect', title: 'The Spotlight Effect', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Social Facilitation & Inhibition: Performance Under the Gaze of Others | Mentalab Mind",
  seoDescription: "The tendency for the presence of others to improve a person's performance on an easy or well-learned task, but impair performance on a difficult or unmaste",
  canonicalUrl: '/mind/social-psychology/social-facilitation',
  ogImageUrl: '/images/mind/social-facilitation.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Zajonc's Drive Theory integrates social presence with Yerkes-Dodson arousal laws: (1) Mere presence triggers autonomic nervous system alertness; (2) Heightened drive enhances the likelihood of the dominant response; (3) For simple, overlearned tasks, the dominant response is correct (Facilitation); (4) For complex, unfamiliar tasks, the dominant response is error-prone trial-and-error (Social Inhibition).",
};

export const TOPIC_SOCIAL_FACILITATION_HINGLISH: MindTopicDetail = {
  ...TOPIC_SOCIAL_FACILITATION_EN,
  title: "Social Facilitation: Doosro Ke Saamne Performance Achhi Ya Kharab Kyu Hoti Hai?",
  subtitle: "Aasaan kaam logo ke saamne tez ho jata hai, par mushkil kaam me dimaag kyu freeze ho jata hai?",
  shortDescription: "Bheed ki presence me aasaan kaam behtar hona par naye aur mushkil kaam me dimaag ka blank ho jana.",
  oneLineExplanation: "Bheed aadat ko taqat deti hai, par nayi soch ko paralyze kar deti hai.",

  summary30s: "1965 me Robert Zajonc ne prove kiya ki jab log hume dekh rahe hote hain, toh hamare sharir me adrenaline aur heartbeat badh jati hai. Agar kaam aasan hai ya aapki aadat ban chuka hai (jaise cycling, gyming), toh aap bheed ke saamne kamaal karte hain. Par agar kaam mushkil hai (jaise live coding interview), toh dimaag freeze ho jata hai.",
  coreConcept: "Ise Zajonc Drive Theory kehte hain. Arousal hamare \"dominant response\" (purani aadato) ko trigger karta hai. Simple tasks me aadat sahi hoti hai, isliye performance badhti hai. Complex tasks me fresh thinking chahiye hoti hai, jo bheed ke dar se ruk jati hai.",
  quickTakeaways: [
    "Audience Effect: Routine kaam bheed me fast hota hai, creative kaam slow",
    "Screen-Share Anxiety: Live coding me dimaag ka blank hona ek natural physiological response hai",
    "Open Office Reality: Open office me log busy dikhte hain, par gehra kaam nahi kar paate",
    "Strategy: Mushkil coding aur study akele me karein; speech aur performance bheed me",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_SOCIAL_FACILITATION_EN,
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

export const TOPIC_SOCIAL_FACILITATION: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SOCIAL_FACILITATION_EN,
  hinglish: TOPIC_SOCIAL_FACILITATION_HINGLISH,
  hi: createLocalizedRecord('hi', "सामाजिक सुगमीकरण एवं अवरोध (Social Facilitation): दर्शकों की उपस्थिति का प्रदर्शन पर प्रभाव", "दूसरों की उपस्थिति सरल या अभ्यस्त कार्यों में प्रदर्शन को सुधारती है, लेकिन जटिल या नए बौद्धिक कार्यों में बाधा उत्पन्न करती है। इसे जायॉन्क का ड्राइव सिद्धांत कहते हैं।", [
    "सरल कार्यों में सुगमीकरण",
    "जटिल चिंतन में अवरोध",
    "गहन कार्य के लिए एकांत अनिवार्य"
  ]),
  gu: createLocalizedRecord('gu', "સોશિયલ ફેસિલિટેશન: લોકોની હાજરીમાં કામગીરી પર પડતો પ્રભાવ", "સરળ કામ લોકોની સામે ઝડપી બને છે, પરંતુ નવા અને જટિલ કાર્યોમાં લોકોનું ધ્યાન ભટકે છે અને કાર્યક્ષમતા ઘટે છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "सोशल फॅसिलिटेशन: इतरांच्या उपस्थितीचा कामावर होणारा परिणाम", "सोपी कामे लोकांसमोर उत्तम होतात, पण गुंतागुंतीच्या बौद्धिक कामांमध्ये लोकांची उपस्थिती अडथळा ठरते.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "సోషల్ ఫెసిలిటేషన్: ఇతరుల సమక్షంలో పనితీరు మారే విధానం", "సులభమైన పనులు నలుగురిలో వేగంగా జరుగుతాయి, కానీ సంక్లిష్టమైన విశ్లేషణ పనులకు ఏకాంతం అవసరం.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "சமூக வசதிப்பாடு (Social Facilitation): பிறர் முன்னிலையில் வெளிப்படும் செயல்திறன்", "பழகிய எளிய பணிகளை பிறர் பார்க்கும்போது விரைவாகச் செய்வோம், ஆனால் சிக்கலான பணிகளில் தயக்கம் ஏற்படும்.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಸಾಮಾಜಿಕ ಸುಗಮೀಕರಣ: ಇತರರ ಸಮ್ಮುಖದಲ್ಲಿ ಕಾರ್ಯಕ್ಷಮತೆ ಬದಲಾಗುವ ವಿಧಾನ", "ಸುಲಭವಾದ ಅಭ್ಯಾಸದ ಕೆಲಸಗಳು ಜನರ ಮುಂದೆ ಉತ್ತಮಗೊಳ್ಳುತ್ತವೆ, ಆದರೆ ಹೊಸ ಸಂಕೀರ್ಣ ಕೆಲಸಗಳು ಕುಂಠಿತಗೊಳ್ಳುತ್ತವೆ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "സോഷ്യൽ ഫെസിലിറ്റേഷൻ: മറ്റുള്ളവരുടെ സാന്നിധ്യം പ്രകടനത്തെ ബാധിക്കുന്ന വിധം", "പരിചിതമായ കാര്യങ്ങൾ ജനക്കൂട്ടത്തിന് മുന്നിൽ മികച്ച രീതിയിൽ ചെയ്യാനും പുതിയ സങ്കീർണ്ണ കാര്യങ്ങളിൽ പതറാനും ഇടയാക്കുന്നു.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "সোশ্যাল ফ্যাসিলিটেশন: অন্যের উপস্থিতিতে কাজের দক্ষতার পরিবর্তন", "সহজ বা অভ্যস্ত কাজ মানুষের সামনে দ্রুত হয়, কিন্তু জটিল বুদ্ধিবৃত্তিক কাজের ক্ষেত্রে দর্শকের উপস্থিতি বাধার সৃষ্টি করে।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਸੋਸ਼ਲ ਫੈਸੀਲੀਟੇਸ਼ਨ: ਦੂਜਿਆਂ ਦੀ ਮੌਜੂਦਗੀ ਵਿੱਚ ਕਾਰਗੁਜ਼ਾਰੀ ਦਾ ਬਦਲਣਾ", "ਸੌਖੇ ਕੰਮ ਭੀੜ ਦੇ ਸਾਹਮਣੇ ਬਿਹਤਰ ਹੁੰਦੇ ਹਨ, ਪਰ ਗੁੰਝਲਦਾਰ ਕੰਮਾਂ ਵਿੱਚ ਲੋਕਾਂ ਦੀ ਨਿਗਰਾਨੀ ਕਾਰਨ ਦਿਮਾਗ ਫ੍ਰੀਜ਼ ਹੋ ਜਾਂਦਾ ਹੈ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "سوشل فیسیلیٹیشن: دوسروں کی موجودگی میں کارکردگی کا ردعمل", "آسان اور روزمرہ کے کام ہجوم کے سامنے تیز تر ہو جاتے ہیں لیکن پیچیدہ اور فکری کاموں میں رکاوٹ پیدا ہوتی ہے۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ସୋସିଆଲ୍ ଫାସିଲିଟେସନ୍: ଅନ୍ୟମାନଙ୍କ ଉପସ୍ଥିତିରେ କାର୍ଯ୍ୟଦକ୍ଷତା ବଦଳିବା", "ସହଜ କାମ ଲୋକଙ୍କ ଆଗରେ ଶୀଘ୍ର ହୋଇଥାଏ, ମାତ୍ର ଜଟିଳ ନିଷ୍ପତ୍ତି ନେବା ସମୟରେ ଲୋକଙ୍କ ଉପସ୍ଥିତି ବାଧା ସୃଷ୍ଟି କରେ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "ছচিয়েল ফেচিলিটেচন: লোকৰ উপস্থিতিত প্ৰদৰ্শনৰ তাৰতম্য", "সহজ আৰু অভ্যস্ত কাম আনৰ উপস্থিতিত দ্ৰুত হয়, কিন্তু জটিল বিশ্লেষণাত্মক কামত মনোযোগ বিঘ্নিত হয়।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
