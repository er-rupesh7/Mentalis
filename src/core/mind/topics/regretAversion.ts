import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Decision Making Track
 * Topic: Regret Aversion: Making Suboptimal Choices to Avoid Counterfactual Pain
 * Category: decision_making
 * Academic Grounding: David E. Bell (1982) (10.1287/opre.30.5.961)
 */

export const TOPIC_REGRET_AVERSION_EN: MindTopicDetail = {
  id: 'regret_aversion',
  categoryId: 'decision_making',
  slug: 'regret-aversion',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 13,
  viewCount: 4630,
  shareCount: 392,
  bookmarkCount: 826,
  title: "Regret Aversion: Making Suboptimal Choices to Avoid Counterfactual Pain",
  subtitle: "The tendency to choose overly conservative, consensus-driven options to protect ourselves from the future agony of thinking \"if only I had chosen differently.\"",
  shortDescription: "A psychological theory proposing that decision-makers anticipate regret and choose alternatives that minimize future counterfactual emotional distress rather than maximizing utility.",
  oneLineExplanation: "We don't choose what is best; we choose whatever saves us from looking back and kicking ourselves.",

  summary30s: "Formalized independently in 1982 by David Bell and by Graham Loomes & Robert Sugden, Regret Theory proved that human decision-making is haunted by anticipated counterfactuals. When faced with a choice, our brains mentally simulate future scenarios: \"If I choose option A and it crashes, how intensely will I blame myself compared to choosing the safe, conventional option B?\"",
  coreConcept: "Regret is fundamentally asymmetrical: we experience dramatically more regret from an error of commission (taking an unconventional action that fails) than from an error of omission (doing nothing or sticking to the herd and failing). Consequently, individuals stay trapped in stagnant jobs, hold index-hugging conservative stocks, and maintain the status quo solely to insulate their future emotional state from self-blame.",
  summary60s: "Consider corporate technology purchasing: the famous industry adage \"Nobody ever got fired for buying IBM\" encapsulates pure regret aversion. An IT manager knows an agile startup offers a system that is 50% cheaper and twice as fast. However, if the startup glitches, the manager faces intense public blame and regret. If IBM glitches, everyone shrugs: \"Even IBM had an outage.\" The manager chooses the worse product to avoid personal regret.",
  quickTakeaways: [
    "The Omission Asymmetry: We punish ourselves more for active bold mistakes than for passive stagnation",
    "The \"Nobody Got Fired for IBM\" Trap: Playing it safe protects your ego while slowly asphyxiating innovation",
    "Jeff Bezos's Regret Minimization Framework: Project yourself to age 80 and ask: \"Will I regret trying and failing, or never trying?\"",
    "Process Over Outcome: Judge decisions by the quality of logic at the moment of choice, not by post-hoc luck",
  ],

  whyItHappens: "Counterfactual cognitive simulation. Humans possess unique mental machinery to imagine alternative realities; when an alternative reality looks superior, the emotional contrast produces acute mental anguish.",
  evolutionaryMechanism: "Regret was an emotional teaching signal to prevent primitive humans from repeating reckless behaviors (e.g., eating poisonous plants or provoking rival clans).",
  howItWorks: "Choice between bold opportunity vs. safe herd -> Brain imagines bold choice failing -> Experiences intense simulated shame -> Chooses safe, mediocre option -> Endures lifelong quiet dissatisfaction.",
  whereYouEncounterIt: "Career changes, investing in disruptive startups, asking someone out on a date, and enterprise software procurement.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Bold Asymmetrical Upside vs. Safe Conventional Mediocrity",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Regret-Averse Choice (Protective)",
      detail: "\"I will stay in this soul-crushing government clerical role for 30 years because leaving for a venture might cause acute failure regret.\"",
    },
    analogySideB: {
      label: "Expected Value Calculus",
      detail: "\"The startup offers 5x skill growth and asymmetric equity upside; even if it folds, the accumulated capability accelerates my career.\"",
    },
  },

  researchSummary: "David E. Bell (1982) and Loomes & Sugden (1982) established Regret Theory in decision-making, demonstrating that anticipated emotions warp rational choice.",
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
      id: 'scen_regret_aversion_01',
      scenarioType: 'indian_context',
      title: "The IT Campus Placement Dilemma in Chennai",
      vignette: "Karthik is a final-year computer science graduate in Chennai. He receives two job offers: Offer A is from a legacy IT outsourcing giant offering ₹3.8 LPA for maintenance work on a decade-old codebase. Offer B is from a cutting-edge deep-tech AI robotics startup offering ₹10 LPA with significant equity, but requiring intense 60-hour weeks in a fast-paced environment. Karthik's heart wants the AI startup. But his uncle warns him: \"What if the startup shuts down in 9 months? You will regret throwing away a permanent MNC job!\" Paralyzed by the thought of regretting a startup collapse, Karthik accepts the ₹3.8 LPA maintenance role.",
      breakdownAnalysis: "A textbook case of Regret Aversion. Karthik made a mathematically suboptimal decision (sacrificing nearly 3x salary and frontier tech skills) purely to eliminate the potential counterfactual pain of an active failure.",
      recommendedAction: "Apply the 80-year-old Regret Minimization Framework: realize that in old age, humans overwhelmingly regret the risks they never took rather than the bold swings that didn't pan out.",
    },
  ],

  examples: [
    {
      id: 'ex_regret_aversion_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_regret_aversion_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_regret_aversion_01',
      scenarioContext: "An investor holds ₹10 lakhs in cash during a market dip. She knows fundamentally that buying broad market index funds today offers strong long-term expected returns. However, she refuses to invest because: \"What if the market drops another 5% tomorrow? I couldn't live with the regret.\"",
      question: "Which psychological mechanism is preventing the investor from capturing long-term expected value?",
      prompt: "Which psychological mechanism is preventing the investor from capturing long-term expected value?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Social loafing among retail stockbrokers",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Regret aversion prioritizing the avoidance of short-term counterfactual pain over statistical expected value",
          isCorrect: true,
          explanation: "Regret aversion leads individuals to avoid making statistically favorable decisions because they preemptively dread the emotional sting of a temporary negative outcome.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Diffusion of responsibility across fund managers",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "The Pygmalion effect depressing equity prices",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Don't let fear of short-term regret cheat you out of long-term asymmetric upside.",
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
      id: 'ref_regret_aversion_01',
      title: "Regret in Decision Making under Uncertainty",
      citation: "Bell, D. E. (1982). Regret in decision making under uncertainty. Operations Research, 30(5), 961–981.",
      authors: "David E. Bell",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1287/opre.30.5.961",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Decision Making', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'status_quo_bias', slug: 'status-quo-bias', title: 'Status Quo Bias', relationshipType: 'amplified_by' },
    { topicId: 'loss_aversion', slug: 'loss-aversion', title: 'Loss Aversion', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Regret Aversion: Making Suboptimal Choices to Avoid Counterfactual Pain | Mentalab Mind",
  seoDescription: "A psychological theory proposing that decision-makers anticipate regret and choose alternatives that minimize future counterfactual emotional distress rath",
  canonicalUrl: '/mind/decision-making/regret-aversion',
  ogImageUrl: '/images/mind/regret-aversion.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Regret is fundamentally asymmetrical: we experience dramatically more regret from an error of commission (taking an unconventional action that fails) than from an error of omission (doing nothing or sticking to the herd and failing). Consequently, individuals stay trapped in stagnant jobs, hold index-hugging conservative stocks, and maintain the status quo solely to insulate their future emotional state from self-blame.",
};

export const TOPIC_REGRET_AVERSION_HINGLISH: MindTopicDetail = {
  ...TOPIC_REGRET_AVERSION_EN,
  title: "Regret Aversion: \"Kash Maine Aisa Na Kiya Hota\" Ka Darr",
  subtitle: "Log naye aur behtar raaste par isliye nahi chalte kyunki unhe darr hota hai ki agar wo fail ho gaye toh zindagi bhar khud ko kosenge.",
  shortDescription: "Ek aisi aadat jisme insaan behtar faisla lene ke bajaye wo option chunta hai jisme aage chal kar pachhtawe ka darr sabse kam ho.",
  oneLineExplanation: "Hum wo nahi chunte jo sabse accha hai; hum wo chunte hain jisme fail hone par sharmindagi sabse kam ho.",

  summary30s: "1982 me David Bell ne Regret Theory di. Insaan ka dimaag pehle hi sochne lagta hai: \"Agar maine risk liya aur fail ho gaya, toh kitna dard hoga?\". Is darr se log conventional aur boring raste chunte hain—jaise bekaar MNC job me 10 saal nikaal dena, sirf is darr se ki startup join karne par pachhtana na pade.",
  coreConcept: "Jeff Bezos ne Amazon shuru karne se pehle \"Regret Minimization Framework\" banaya tha. Unhone socha: \"Jab main 80 saal ka hunga, toh kya mujhe internet par try karne ka pachhtawa hoga? Nahi. Par agar maine try nahi kiya, toh zaroor hoga.\" Is soch ne unhe safe job chhodne ki taqat di.",
  quickTakeaways: [
    "Bold Steps Ka Darr: Hum active galti karne se zyada darrte hain, chahe chup baithne se kitna bhi nuksan ho",
    "80-Year Rule: 80 saal ki umar me log un kaamo par pachhtate hain jo unhone nahi kiye",
    "Herd Safety: \"Sab kar rahe hain isliye main bhi kar raha hoon\" kehna regret aversion ka symptom hai",
    "Process Par Focus Karein: Faisle ko logic se judge karein, sirf kismat ke outcome se nahi",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_REGRET_AVERSION_EN,
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

export const TOPIC_REGRET_AVERSION: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_REGRET_AVERSION_EN,
  hinglish: TOPIC_REGRET_AVERSION_HINGLISH,
  hi: createLocalizedRecord('hi', "पश्चाताप विमुखता (Regret Aversion): पछतावे के भय से उप-इष्टतम निर्णय", "डेविड बेल का सिद्धांत जो यह बताता है कि लोग भविष्य में \"काश मैंने ऐसा न किया होता\" के भावनात्मक दर्द से बचने के लिए अत्यधिक रूढ़िवादी, सुरक्षित और साधारण विकल्प चुनते हैं, भले ही उनमें विकास की संभावना शून्य हो।", [
    "अकर्मण्यता बनाम सक्रिय विफलता का पछतावा",
    "जोखिम लेने के डर से अवसरों का त्याग",
    "जेफ बेजोस का पश्चाताप न्यूनीकरण ढांचा (Regret Minimization)"
  ]),
  gu: createLocalizedRecord('gu', "રિગ્રેટ અવોર્ડન્સ: પસ્તાવાના ડરથી ખોટા નિર્ણયો લેવાની આદત", "ભવિષ્યમાં અફસોસ થશે તેવા ડરથી નવી તકો છોડીને સાધારણ અને પરંપરાગત રસ્તે જ ચાલ્યા કરવાની માનસિકતા.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "रिग्रेट अव्हर्जन: पश्चात्तापाच्या भीतीने घेतलेले दुय्यम निर्णय", "भविष्यात \"असे का केले\" म्हणून स्वतःला दोष द्यावा लागू नये यासाठी लोक जोखीम टाळतात आणि आयुष्यभर साचेबद्ध जगतात.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "రిგრెట్ అవెర్షన్: పశ్చాత్తాప భయంతో తక్కువ అవకాశాలను ఎంచుకోవడం", "భవిષ્યంలో తప్పు జరిగి బాధపడాల్సి వస్తుందేమోననే భయంతో మంచి అవకాశాలను వదులుకుని సాధారణ మార్గాలకే పరిమితం కావడం.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "வருத்தத் தவிர்ப்பு: குற்றவுணர்ச்சி பயத்தால் பாதுகாப்பான தேர்வுகளை நாடுதல்", "எதிர்காலத்தில் வருந்த நேரிடுமோ என்ற அச்சத்தில் சிறந்த வாய்ப்புகளைத் தவிர்த்து, மந்தமான பழைய பாதையிலேயே தொடரும் உளவியல்.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ರಿಗ್ರೆಟ್ ಅವರ್ಶನ್: ಪಶ್ಚಾತ್ತಾಪದ ಭಯದಿಂದ ಸಾಮಾನ್ಯ ಆಯ್ಕೆಗಳಿಗೇ ತೃಪ್ತಿಪಡುವುದು", "ಭವಿಷ್ಯದಲ್ಲಿ ಅಯ್ಯೋ ತಪ್ಪು ಮಾಡಿದೆ ಎಂದು ಕೊರಗಬೇಕಾದೀತು ಎಂಬ ಅಂಜಿಕೆಯಿಂದ ಹೊಸ ಸಾಧ್ಯತೆಗಳನ್ನು ಪ್ರಯತ್ನಿಸದೇ ಇರುವ ಪ್ರವೃತ್ತಿ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "റിഗ്രറ്റ് അവെർഷൻ: പശ്ചാത്താപ ഭയം മൂലം അവസരങ്ങൾ നഷ്ടപ്പെടുത്തൽ", "ഭാവിയിൽ തെറ്റുപറ്റിയാൽ വിഷമിക്കേണ്ടി വരുമെന്ന ഭയം കാരണം ധീരമായ തീരുമാനങ്ങൾ എടുക്കാതെ സുരക്ഷിതമായ വഴി മാത്രം തിരഞ്ഞെടുക്കൽ.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "রিগ্রেট অ্যাভারশন: ভবিষ্যতের অনুশোচনার ভয়ে পিছিয়ে থাকার মানসিকতা", "ভুল হলে চরম আফসোস হবে—এই কল্পিত ব্যথার ভয়ে বড় সম্ভাবনা ত্যাগ করে সাধারণ ও নিরাপদ গণ্ডিতে আটকে থাকার প্রবণতা।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਰਿਗ੍ਰੇਟ ਅਵਰਜ਼ਨ: ਪਛਤਾਵੇ ਦੇ ਡਰੋਂ ਰਿਸਕ ਨਾ ਲੈਣ ਦੀ ਕਮਜ਼ੋਰੀ", "ਇਹ ਸੋਚ ਕੇ ਡਰਦੇ ਰਹਿਣਾ ਕਿ ਜੇ ਫੇਲ੍ਹ ਹੋ ਗਏ ਤਾਂ ਪਛਤਾਉਣਾ ਪਵੇਗਾ, ਜਿਸ ਕਾਰਨ ਇਨਸਾਨ ਨਵੀਆਂ ਸੰਭਾਵਨਾਵਾਂ ਨੂੰ ਛੱਡ ਦਿੰਦਾ ਹੈ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "پچھتاوے سے گریز: احساس ندامت کے خوف سے مواقع گنوانا", "مستقبل میں خود کو کوسنے کے ڈر سے جرات مندانہ فیصلے چھوڑ کر فرسودہ اور محفوظ راستوں پر قناعت کر لینا۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ରିଗ୍ରେଟ୍ ଆଭର୍ସନ୍: ଅନୁତାପ ଭୟରୁ ସୁଯୋଗ ହାତଛଡ଼ା କରିବା", "ଭବିଷ୍ୟତରେ ପଶ୍ଚାତ୍ତାପ କରିବାକୁ ପଡ଼ିବ ବୋଲି ଭାବି ନୂତନ ସୁଯୋଗକୁ ତ୍ୟାଗ କରି ପାରମ୍ପରିକ ଅସନ୍ତୋଷଜନକ ରାସ୍ତାରେ ଚାଲିବାର ମନସ୍ତତ୍ତ୍ୱ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "ৰিগ্রেট এভাৰ্ছন: ভৱিষ্যতে অনুশোচনা হোৱাৰ ভয়ত সুযোগ ত্যাগ কৰা", "পাছত আক্ষেপ কৰিবলগা হ’ব পাৰে বুলি ভাবি নতুন সুযোগৰ সলনি নিৰাপদ কিন্তু গতানুগতিক পথ বাছি লোৱাৰ দুৰ্বলতা।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
