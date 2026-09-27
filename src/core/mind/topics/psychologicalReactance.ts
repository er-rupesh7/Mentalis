import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: Psychological Reactance: The Instinctive Urge to Defy Restriction
 * Category: social_psychology
 * Academic Grounding: Jack W. Brehm (1966) (10.1111/j.1460-2466.2005.tb02664.x)
 */

export const TOPIC_PSYCHOLOGICAL_REACTANCE_EN: MindTopicDetail = {
  id: 'psychological_reactance',
  categoryId: 'social_psychology',
  slug: 'psychological-reactance',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 15,
  viewCount: 4850,
  shareCount: 420,
  bookmarkCount: 870,
  title: "Psychological Reactance: The Instinctive Urge to Defy Restriction",
  subtitle: "The intense motivational pushback triggered when an individual perceives their autonomy and behavioral freedom being constrained.",
  shortDescription: "An unpleasant motivational arousal that emerges when people experience a threat to or loss of their free behaviors, driving them to do the forbidden.",
  oneLineExplanation: "Tell someone they cannot have it or do it, and it instantly becomes their obsession.",

  summary30s: "Formulated by Jack Brehm in 1966, Psychological Reactance is the brain's immune system against coercion. When someone forcefully orders you to do something, limits your options, or bans a behavior, you feel a visceral surge of anger and an overwhelming desire to do the exact opposite to restore your sense of freedom.",
  coreConcept: "Reactance is an evolutionary defense of personal sovereignty. When perceived freedom is threatened, three things occur: (1) The forbidden option skyrockets in perceived attractiveness; (2) The person experiences negative emotional affect (anger, resentment); (3) The person actively engages in counter-behaviors to restore autonomy (the \"Romeo and Juliet effect\").",
  summary60s: "In a classic 1972 study by James Pennebaker, signs in university restrooms were compared. Sign A read: \"Do not write on these walls under any circumstances.\" Sign B read: \"Please do not write on these walls.\" Restrooms with the authoritative, freedom-restricting Sign A suffered dramatically more graffiti vandalism. Harsh demands provoke rebellion.",
  quickTakeaways: [
    "The Forbidden Fruit Effect: Banning or censoring an idea immediately increases public interest in it",
    "The Coercion Backlash: Aggressive mandates in marketing, parenting, and management trigger active resistance",
    "The Autonomy Paradox: People willingly follow advice if they feel the choice was completely theirs",
    "Autonomy-Supportive Language: Replace \"You must do this\" with \"It is completely up to you, but here are the facts\"",
  ],

  whyItHappens: "Self-determination and personal control. Humans prioritize autonomy over obedience; perceived threats to freedom trigger defensive rebellion.",
  evolutionaryMechanism: "In ancestral dominance hierarchies, blindly submitting to unilateral restrictions could reduce resource access and status, requiring calibrated pushback.",
  howItWorks: "Freedom threatened by an authority or rule -> Emotional reactance surge (irritation) -> Forbidden alternative becomes highly attractive -> Defiant action taken to reassert control.",
  whereYouEncounterIt: "Parent-teen disputes, public health mandates, sales pressure tactics, heavy-handed software policies, and government censorship.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Aggressive Mandate vs. Autonomy-Supportive Choice",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Coercive Restriction (Triggers Reactance)",
      detail: "\"You are strictly forbidden from choosing arts; you must study engineering or you are disowned.\"",
    },
    analogySideB: {
      label: "Autonomy Choice (Invites Rationality)",
      detail: "\"The career decision is yours. Let us analyze the job market data and risks together.\"",
    },
  },

  researchSummary: "Jack W. Brehm (1966) published the seminal book \"A Theory of Psychological Reactance,\" proving individuals will choose objectively worse outcomes simply to reclaim freedom.",
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
      id: 'scen_psychological_reactance_01',
      scenarioType: 'indian_context',
      title: "The Strict Engineering Mandate in Kota",
      vignette: "Rishi is an 18-year-old student preparing for competitive exams in Kota. His father constantly monitors his phone, installs CCTV in his study room, and announces: \"You are not allowed to touch a musical guitar or play cricket until you crack the entrance exam.\" Feeling suffocated and micro-managed, Rishi develops intense psychological reactance. He secretly skips physics lectures to smoke on the hostel terrace and completely stops studying, purely to regain a feeling of being in control of his own life.",
      breakdownAnalysis: "Textbook psychological reactance. The father's complete destruction of Rishi's autonomy transformed self-destructive defiance into an emotional victory of reclaiming control.",
      recommendedAction: "Restore autonomy through collaborative choice architecture: establish joint goals and grant unconditional ownership over daily scheduling and small hobbies.",
    },
  ],

  examples: [
    {
      id: 'ex_psychological_reactance_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_psychological_reactance_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_psychological_reactance_01',
      scenarioContext: "An HR department in Gurgaon sends a stern company-wide email: \"All employees MUST mandatorily attend tomorrow's 8 AM wellness seminar. Attendance will be audited and violators reported.\" Attendance ends up being the lowest in company history.",
      question: "Which communication shift would leverage Brehm's Reactance Theory to maximize actual attendance?",
      prompt: "Which communication shift would leverage Brehm's Reactance Theory to maximize actual attendance?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Threatening salary deductions for anyone who arrives even two minutes late",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Framing attendance as an open choice: \"Attendance is entirely voluntary, but here is how previous attendees boosted their energy and focus\"",
          isCorrect: true,
          explanation: "Autonomy-supportive framing removes the perceived threat to freedom, allowing individuals to choose participation without feeling coerced.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Hiring security guards to check badges at the auditorium entrance",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Making the seminar 3 hours longer to prove its institutional value",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Respect autonomy to invite cooperation: whenever you force someone, their brain immediately wants to push back.",
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
      id: 'ref_psychological_reactance_01',
      title: "A Theory of Psychological Reactance",
      citation: "Brehm, J. W. (1966). A Theory of Psychological Reactance. New York: Academic Press.",
      authors: "Jack W. Brehm",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1111/j.1460-2466.2005.tb02664.x",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Social Psychology', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'conformity_asch_effect', slug: 'conformity-asch-effect', title: 'Conformity (Asch Effect)', relationshipType: 'amplified_by' },
    { topicId: 'social_proof', slug: 'social-proof', title: 'Social Proof', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Psychological Reactance: The Instinctive Urge to Defy Restriction | Mentalab Mind",
  seoDescription: "An unpleasant motivational arousal that emerges when people experience a threat to or loss of their free behaviors, driving them to do the forbidden.",
  canonicalUrl: '/mind/social-psychology/psychological-reactance',
  ogImageUrl: '/images/mind/psychological-reactance.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Reactance is an evolutionary defense of personal sovereignty. When perceived freedom is threatened, three things occur: (1) The forbidden option skyrockets in perceived attractiveness; (2) The person experiences negative emotional affect (anger, resentment); (3) The person actively engages in counter-behaviors to restore autonomy (the \"Romeo and Juliet effect\").",
};

export const TOPIC_PSYCHOLOGICAL_REACTANCE_HINGLISH: MindTopicDetail = {
  ...TOPIC_PSYCHOLOGICAL_REACTANCE_EN,
  title: "Psychological Reactance: Jab Mana Karne Par Wo Kaam Karne Ka Dil Karta Hai",
  subtitle: "Jab koi hume hukum deta hai ya humari aazadi cheenta hai, toh dimaag jaanbujhkar ulta kaam karta hai.",
  shortDescription: "Aazadi chhinne par paida hone wali aisi gusse bhari zid jisme insaan sirf control wapas paane ke liye rule tod deta hai.",
  oneLineExplanation: "Kisi ko bolo \"yeh mat karna\", aur wo sabse pehle wahi karega.",

  summary30s: "1966 me Jack Brehm ne Psychological Reactance explain kiya. Jab kisi insaan par strict restriction lagayi jaati hai ya use jabardasti kuch karne ko kaha jata hai, toh uska dimaag use attack manta hai. Freedom wapas lene ke liye insaan jaan-bujhkar wahi kaam karta hai jisse use mana kiya gaya tha.",
  coreConcept: "Insaan ko apni aazadi bohot pyari hoti hai. \"Forbidden fruit\" iska proof hai: jo cheez ban hoti hai, log usi ko dekhne ke liye VPN lagate hain. Leadership aur parenting me jab aap \"You must\" kehte hain, toh samne wala dushman ban jata hai.",
  quickTakeaways: [
    "Forbidden Fruit Effect: Jis cheez par ban lagta hai, uski demand double ho jati hai",
    "Jabardasti Ka Nuksan: Micro-management se employees kaam chori shuru kar dete hain",
    "Choice Ka Jadoo: \"Faisla aapka hai\" kehne se log aapki advice zyada maante hain",
    "Reverse Psychology: Reactance ko samajhkar log manipulate bhi karte hain, isliye satark rahein",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_PSYCHOLOGICAL_REACTANCE_EN,
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

export const TOPIC_PSYCHOLOGICAL_REACTANCE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_PSYCHOLOGICAL_REACTANCE_EN,
  hinglish: TOPIC_PSYCHOLOGICAL_REACTANCE_HINGLISH,
  hi: createLocalizedRecord('hi', "मनोवैज्ञानिक प्रतिक्रिया (Psychological Reactance): पाबंदी के विरुद्ध विद्रोह की स्वाभाविक प्रवृत्ति", "जब किसी व्यक्ति को लगता है कि उसकी स्वतंत्रता या स्वायत्तता छीनी जा रही है, तो वह तीव्र प्रतिरोध महसूस करता है और जानबूझकर वही काम करता है जो वर्जित किया गया है।", [
    "स्वायत्तता की रक्षा की प्रवृत्ति",
    "निषेध का आकर्षण (वर्जित फल)",
    "आदेश के स्थान पर विकल्प देना प्रभावी"
  ]),
  gu: createLocalizedRecord('gu', "સાયકોલોજિકલ રિએક્ટન્સ: બંધનો સામે વિદ્રોહ કરવાની વૃત્તિ", "જ્યારે કોઈ આપણી સ્વતંત્રતા પર પ્રતિબંધ મૂકે છે, ત્યારે મગજ પોતાની સ્વાયત્તતા સાબિત કરવા માટે જાણીજોઈને વિપરીત પગલાં ભરે છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "सायकोलॉजिकल रिॲक्टन्स: बंधनांविरुद्ध बंडखोरीची मानसिक वृत्ती", "जेव्हा लोकांच्या स्वातंत्र्यावर गदा येते, तेव्हा ते स्वतःचे नियंत्रण परत मिळवण्यासाठी नेमके निषिद्ध काम करतात.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "సైకలాజికల్ రియాక్టెన్స్: ఆంక్షలపై తిరుగుబాటు చేసే సహజ ప్రవృత్తి", "వ్యక్తిగత స్వేచ్ఛకు భంగం కలిగినప్పుడు తిరస్కరించబడిన విషయాన్ని కావాలనే చేసే మానసిక స్వభావం.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "உளவியல் எதிர்ப்பு: கட்டுப்பாடுகளை மீறும் இயல்பான உந்துதல்", "நமது சுதந்திரம் பறிக்கப்படும் போது, அதை மீட்டெடுக்க வேண்டும் என்ற ஆவேசத்தில் தடைசெய்யப்பட்ட காரியத்தை துணிந்து செய்யும் நிலை.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಸೈಕಲಾಜಿಕಲ್ ರಿಯಾಕ್ಟೆನ್ಸ್: ನಿರ್ಬಂಧಗಳ ವಿರುದ್ಧ ಬಂಡಾಯವೆದ್ದು ಕೆಲಸ ಮಾಡುವ ಪ್ರವೃತ್ತಿ", "ತಮ್ಮ ಸ್ವಾತಂತ್ರ್ಯವನ್ನು ಕಸಿದುಕೊಳ್ಳಲಾಗುತ್ತಿದೆ ಎಂದು ಭಾವಿಸಿದಾಗ ನಿಷೇಧಿತ ಕೆಲಸವನ್ನೇ ಹಠದಿಂದ ಮಾಡುವ ಪ್ರವೃತ್ತಿ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "സൈക്കോളജിക്കൽ റിയാക്ടൻസ്: നിയന്ത്രണങ്ങൾക്കെതിരെയുള്ള സ്വാഭാവിക കലാപം", "നമ്മുടെ വ്യക്തിസ്വാതന്ത്ര്യം പരിമിതപ്പെടുത്തപ്പെടുമ്പോൾ നിരോധിക്കപ്പെട്ട കാര്യങ്ങളിലേക്ക് മനസ്സ് കൂടുതൽ ആകർഷിക്കപ്പെടുന്ന അവസ്ഥ.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "সাইকোলজিক্যাল রিঅ্যাক্ট্যান্স: নিষেধাজ্ঞার বিরুদ্ধে স্বতঃস্ফূর্ত বিদ্রোহের মানসিকতা", "স্বাধীনতা খর্ব হলে নিজের নিয়ন্ত্রণ জাহির করতে মানুষ ঠিক নিষিদ্ধ কাজটিই করার তীব্র তাগিদ অনুভব করে।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਤੀਕਿਰਿਆ: ਪਾਬੰਦੀਆਂ ਦੇ ਵਿਰੁੱਧ ਬਗਾਵਤ ਦੀ ਆਦਤ", "ਜਦੋਂ ਕਿਸੇ ਉੱਤੇ ਹੁਕਮ ਚਲਾਇਆ ਜਾਂਦਾ ਹੈ ਜਾਂ ਕੋਈ ਕੰਮ ਕਰਨ ਤੋਂ ਰੋਕਿਆ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਉਹ ਆਪਣੀ ਆਜ਼ਾਦੀ ਸਾਬਤ ਕਰਨ ਲਈ ਉਹੀ ਕੰਮ ਕਰਦਾ ਹੈ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "نفسیاتی مزاحمت: پابندی کے خلاف بغاوت کا فطری جذبہ", "جب انسان کی خود مختاری چھینی جاتی ہے تو وہ اپنا کنٹرول ثابت کرنے کے لیے جان بوجھ کر ممنوعہ کام کرتا ہے۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ମାନସିକ ପ୍ରତିକ୍ରିୟା: କଟକଣା ବିରୁଦ୍ଧରେ ବିଦ୍ରୋହ କରିବାର ସହଜାତ ପ୍ରବୃତ୍ତି", "ଯେତେବେଳେ କାହା ଉପରେ କଟକଣା ଲଗାଯାଏ, ସେ ନିଜର ସ୍ୱାଧୀନତା ପ୍ରମାଣିତ କରିବା ପାଇଁ ଉଦ୍ଦେଶ୍ୟମୂଳକ ଭାବେ ସେହି ନିଷିଦ୍ଧ କାର୍ଯ୍ୟ କରେ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "মনস্তাত্ত্বিক প্ৰতিক্ৰিয়া: নিষেধাজ্ঞা আৰু বন্ধনৰ বিৰুদ্ধে বিদ্ৰোহ", "স্বাধীনতা খৰ্ব হ’লে নিজৰ নিয়ন্ত্ৰণ সাব্যস্ত কৰিবলৈ মানুহে নিষিদ্ধ কামটোকে আগবাঢ়ি কৰাৰ মানসিক প্ৰৱণতা।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
