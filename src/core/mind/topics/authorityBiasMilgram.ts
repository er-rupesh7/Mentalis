import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Persuasion & Influence Track
 * Topic: Authority Bias & The Milgram Effect: The Blind Obedience Reflex
 * Category: Persuasion & Influence (persuasion_influence)
 * 
 * Academic Grounding:
 * - Milgram (1963): Behavioral study of obedience
 * - Milgram (1974): Obedience to Authority: An Experimental View
 * - Bickman (1974): The social power of a uniform
 * - Cialdini (2021): Influence: The Psychology of Persuasion (Chapter 6: Authority)
 */

export const TOPIC_AUTHORITY_BIAS_EN: MindTopicDetail = {
  id: 'authority_bias_milgram',
  categoryId: 'persuasion_influence',
  slug: 'authority-bias-and-milgram-effect',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 4,
  viewCount: 8870,
  shareCount: 710,
  bookmarkCount: 1690,
  title: 'Authority Bias & The Milgram Effect: The Blind Obedience Reflex',
  subtitle: 'The alarming psychological tendency to surrender personal moral judgment to perceived symbols of authority.',
  shortDescription: 'The tendency to attribute greater accuracy to the opinion of an authority figure and be more influenced by that opinion, often leading to uncritical obedience.',
  oneLineExplanation: 'Doing what someone in a lab coat, business suit, or uniform tells you to do, even when it violates basic ethics.',

  summary30s: 'In Stanley Milgram’s harrowing 1963 Yale experiments, 65% of ordinary citizens administered what they believed were fatal, 450-volt electrical shocks to an innocent stranger simply because a calm experimenter in a grey lab coat repeatedly stated: "The experiment requires that you continue." Authority bias reveals how easily human beings outsource their conscience to perceived legitimate power.',

  coreConcept: 'Authority bias operates by bypassing analytical skepticism through superficial symbols of status: uniforms, academic titles (Dr., Professor), expensive suits, badges, and institutional letterheads. In what Milgram termed the "Agentic State," an individual no longer views themselves as personally responsible for their actions; instead, they define themselves as a mere instrument carrying out the wishes of a higher authority.',
  summary60s: 'When an authority figure issues an order, our prefrontal cortex relaxes its critical faculty. We assume: "They have credentials, they have institutional access, they know things I do not, and they will take the legal and moral blame if things go wrong." In modern life, this manifests in hospital nurses failing to question an obviously lethal dosage written by a tired doctor, bank clerks wiring funds based on an intimidating email from a "CEO," and citizens falling for financial frauds perpetrated by con artists wearing luxury watches and tailored suits.',

  quickTakeaways: [
    'The 65% Maximum Shock Baseline: Two-thirds of ordinary, compassionate humans obeyed orders to administer maximum 450-volt shocks',
    'The "Agentic Shift": Transferring personal moral responsibility to the authority figure ("I was just following orders")',
    'Symbols Over Substance: Con artists and charlatans rely on fake lab coats, luxury cars, and fraudulent diplomas to trigger immediate trust',
    'The Institutional Verification Antidote: Always verify the substance of the directive and separate the person\'s credentials from the specific request',
  ],

  whyItHappens: 'Social order and hierarchical coordination. Human civilization could not function if every citizen questioned every traffic light, surgeon’s scalpel, or courtroom decree. Deference to genuine expertise is an essential social coordination tool that becomes lethal when weaponized or followed blindly.',
  evolutionaryMechanism: 'Tribes with organized command hierarchies and disciplined execution under an experienced elder or war chief consistently defeated disorganized, egalitarian groups during inter-tribal warfare.',

  howItWorks: 'The obedience escalation ladder: (1) Credential Display: White coat, official uniform, or impressive title; (2) Incremental Demands: Starting with minor, routine tasks (15-volt shocks); (3) Transfer of Liability: The authority assures the subject: "I take full responsibility"; (4) Complete Deference: Moral distress is suppressed to maintain institutional compliance.',
  whereYouEncounterIt: 'Medical errors in hospitals (junior staff hesitating to correct senior surgeons), corporate fraud (Enron, Theranos employees signing off on fake tests), phishing scams ("urgent wire transfer from CEO"), and charismatic cults.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Autonomous Conscience vs. The Agentic State',
    description: 'Stanley Milgram’s psychological shift under authority commands.',
    analogySideA: {
      label: 'Autonomous State (Personal Responsibility)',
      detail: '"I am morally accountable for my choices. If this action harms another human being, the guilt is mine."',
    },
    analogySideB: {
      label: 'Agentic State (Surrendered Conscience)',
      detail: '"I am merely an instrument executing directives. The senior leader or institution is responsible, not me."',
    },
  },

  researchSummary: 'In Milgram\'s 1963 study at Yale, 40 adult men were instructed to shock a "learner" (an actor) for incorrect memory pairs, with switches increasing from 15 to 450 volts (labeled "Danger: Severe Shock" and "XXX"). Despite the actor screaming in agony, kicking the wall, and eventually falling dead silent, 26 out of 40 participants (65%) obeyed orders to deliver the maximum 450-volt shock all the way to the end.',
  limitationsAndControversies: 'Leonard Bickman (1974) demonstrated that obedience is triggered by superficial visual cues: pedestrians were three times more likely to obey a stranger demanding they give a dime for a parking meter when the stranger wore a security guard uniform than when he wore street clothes or a businessman\'s suit.',
  commonMisconceptions: 'Common myth: "Milgram\'s subjects complied because they were sadistic or uneducated." Reality: Across hundreds of trials with ordinary citizens, over 60% administered maximum shocks solely due to the perceived legitimacy of institutional authority.',

  howToRecognize: [
    'Agreeing to do something that violates your ethical intuition purely because your boss, doctor, or family elder told you to do so',
    'Believing an outlandish investment or medical claim simply because the person speaking has "Dr." in front of their name on YouTube',
    'Feeling intense embarrassment or hesitation when asking a senior professional to double-check their calculations',
    'Assuming an expensive private clinic, high-end office, or luxury car proves the owner is financially honest and competent',
  ],

  scenarios: [
    {
      id: 'scen_auth_01',
      scenarioType: 'indian_context',
      title: 'The Whistleblower Hesitation in Mumbai',
      vignette: 'Ananya is a 24-year-old financial analyst at a private wealth management firm in Mumbai. While reviewing audit spreadsheets, she notices that ₹12 crore of client deposits have been routed into an unregistered shell entity owned by the firm\'s Managing Director. When she brings the spreadsheet to the Senior Vice President, he frowns and says firmly: "Ananya, the MD has 35 years of banking experience, three degrees from prestigious universities, and sits on regulatory boards. Do not question his capital allocation strategy. Sign the clearance sheet immediately."',
      breakdownAnalysis: 'The Senior VP is deploying authority bias as an intimidation shield. He uses credentials and status to bypass substantive audit evidence. Ananya faces the exact Milgram dilemma: sign and enter the agentic state, or uphold her ethical duty.',
      recommendedAction: 'Anchor to written fiduciary rules and independent oversight: "With all respect to the MD’s credentials, auditing standards require explicit documentation for third-party capital transfers. I cannot sign without legal compliance sign-off in writing."',
    },
  ],

  examples: [
    {
      id: 'ex_auth_01',
      domain: 'health',
      displayOrder: 1,
      title: 'The "Doctor\'s Orders" Medication Error',
      description: 'In a classic 1966 study by Charles Hofling, 21 out of 22 hospital nurses were willing to administer a dangerous, lethal overdose of an unauthorized drug simply because an unknown voice over the telephone said: "This is Dr. Smith, give 20 milligrams of Astroten to patient in 204."',
      takeaway: 'Superficial authority cues can override professional training and safety protocols.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_auth_01',
      scenarioContext: 'An aircraft first officer notices that the senior captain is descending 500 feet below the minimum safe altitude in dense fog without having the runway in visual sight. The captain snaps: "I have 18,000 flight hours in this jet, keep your hands off the throttle."',
      question: 'In modern aviation safety (Crew Resource Management), how are first officers trained to counter authority bias in this exact life-or-death crisis?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Trust the captain’s 18,000 flight hours and assume their weather radar interpretation is superior',
          explanation: 'This deference caused dozens of catastrophic crashes in the 1970s and 1980s (e.g., Tenerife, Air Florida).',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Follow the mandatory "Two-Challenge Rule" and immediately seize flight controls if the captain does not respond to safety abort directives',
          explanation: 'Accurate: CRM mandates overriding authority hierarchy when objective safety instruments indicate imminent danger.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Wait for air traffic control to notice the altitude deviation on radar and contact the cockpit',
          explanation: 'Relying on external controllers during terminal descent is frequently too slow to prevent controlled flight into terrain.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Objective instruments and physical reality must always supersede social seniority and credentials.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Separate institutional prestige or professional titles from the empirical validity and ethics of specific instructions.',
  psychologicalDefenses: [
    {
      title: 'The "Substance vs. Uniform" Test',
      instruction: 'Ask yourself: "If this exact same instruction or claim came from a random stranger wearing gym shorts at a bus stop, would I still believe it was logical and safe?" If not, inspect the credentials.',
    },
    {
      title: 'Demand the Domain Relevance Check',
      instruction: 'Verify if the expert’s credentials actually match the topic at hand. A Nobel Prize in Chemistry provides zero authority in geopolitical strategy or cryptocurrency economics.',
    },
    {
      title: 'Adopt the Two-Challenge Protocol',
      instruction: 'Whenever you see an error by a senior person, voice your concern twice with escalating clarity: (1) Inquire ("Captain/Sir, are we clear on the minimum altitude?"), (2) Direct challenge ("We are below minimum altitude, we must go around now").',
    },
  ],

  reflectionPrompt: 'Have you ever accepted advice or carried out a questionable task simply because a senior manager or celebrity endorsed it?',

  references: [
    {
      id: 'ref_milgram_1963',
      authors: 'Milgram, S.',
      year: 1963,
      title: 'Behavioral study of obedience',
      publicationName: 'The Journal of Abnormal and Social Psychology',
      volumeIssue: '67(4), 371-378',
      doi: '10.1037/h0040525',
      evidenceStrength: 'historical_classic',
    },
    {
      id: 'ref_bickman_1974',
      authors: 'Bickman, L.',
      year: 1974,
      title: 'The social power of a uniform',
      publicationName: 'Journal of Applied Social Psychology',
      volumeIssue: '4(1), 47-61',
      doi: '10.1111/j.1559-1816.1974.tb02599.x',
      evidenceStrength: 'empirical_study',
    },
  ],

  relatedTopics: [
    {
      topicId: 'conformity_asch_effect',
      slug: 'conformity-and-asch-effect',
      title: 'Conformity & Asch Effect',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'intimidation',
      slug: 'intimidation',
      title: 'Intimidation Tactics',
      relationshipType: 'amplified_by',
    },
  ],
};


function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_AUTHORITY_BIAS_EN,
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

export const TOPIC_AUTHORITY_BIAS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_AUTHORITY_BIAS_EN,
  hinglish: {
    ...TOPIC_AUTHORITY_BIAS_EN,
    title: 'Authority Bias & Milgram Effect: Kursi Aur Uniform Ka Andha Vishwas',
    subtitle: 'Jab koi bada officer, doctor ya suit-boot wala aadmi bole, toh hum apna dimaag aur morals side me rakh dete hain.',
    shortDescription: 'Ek aisi psychological kamzori jisme log kisi "Authority" ke kehne par galat ya khatarnak kaam bhi chupchap kar dete hain.',
    oneLineExplanation: 'Lab coat ya uniform dekhkar kisi ki bhi baat ko bina soche-samjhe sach maan lena.',
    summary30s: 'Stanley Milgram ne 1963 me Yale University me ek shocking experiment kiya: 65% aam logon ne ek anjaan shakhs ko 450 volt ke janlewa bijli ke jhatke de diye sirf isliye kyunki lab coat pehne ek professor ne kaha: "Experiment ke liye zaroori hai ki aap aage badhein." Insaan authority ke aage apna zameer girvi rakh deta hai.',
  },
  hi: {
    ...TOPIC_AUTHORITY_BIAS_EN,
    title: 'Authority Bias & Milgram Effect (सत्ता पूर्वाग्रह और मिलग्राम प्रभाव)',
    subtitle: 'पद, वर्दी और सत्ता के प्रतीकों के सामने व्यक्तिगत विवेक और नैतिकता का आत्मसमर्पण।',
    shortDescription: 'स्टैनली मिलग्राम का ऐतिहासिक प्रयोग जिसने दर्शाया कि साधारण नागरिक भी सत्ता के आदेश पर अमानवीय कृत्य करने के लिए तैयार हो जाते हैं।',
    oneLineExplanation: 'अधिकार संपन्न व्यक्ति के आदेश पर अपनी अंतरात्मा को दरकिनार कर देना।',
    summary30s: 'सत्ता पूर्वाग्रह (Authority Bias) के अंतर्गत मनुष्य सत्ता के प्रतीकों (वर्दी, डिग्रियां, उच्च पद) के सम्मुख अपनी आलोचनात्मक सोच को बंद कर देता है। 1963 के येल विश्वविद्यालय के प्रयोग में 65% सामान्य लोगों ने एक अजनबी को जानलेवा बिजली के झटके दिए क्योंकि एक वैज्ञानिक ने उन्हें ऐसा करने का निर्देश दिया था।',
  },
  gu: createLocalizedRecord('gu', "Authority Bias & The Milgram Effect: The Blind Obedience Reflex (પ્રભાવ)", "Authority Bias & The Milgram Effect: The Blind Obedience Reflex એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "Authority Bias & The Milgram Effect: The Blind Obedience Reflex (प्रभाव)", "Authority Bias & The Milgram Effect: The Blind Obedience Reflex हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "Authority Bias & The Milgram Effect: The Blind Obedience Reflex (ప్రభావం)", "Authority Bias & The Milgram Effect: The Blind Obedience Reflex అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "Authority Bias & The Milgram Effect: The Blind Obedience Reflex (விளைவு)", "Authority Bias & The Milgram Effect: The Blind Obedience Reflex என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "Authority Bias & The Milgram Effect: The Blind Obedience Reflex (ಪರಿಣಾಮ)", "Authority Bias & The Milgram Effect: The Blind Obedience Reflex ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "Authority Bias & The Milgram Effect: The Blind Obedience Reflex (സ്വാധീനം)", "Authority Bias & The Milgram Effect: The Blind Obedience Reflex എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "Authority Bias & The Milgram Effect: The Blind Obedience Reflex (প্রভাব)", "Authority Bias & The Milgram Effect: The Blind Obedience Reflex হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "Authority Bias & The Milgram Effect: The Blind Obedience Reflex (ਪ੍ਰਭਾਵ)", "Authority Bias & The Milgram Effect: The Blind Obedience Reflex ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "Authority Bias & The Milgram Effect: The Blind Obedience Reflex (اثر)", "Authority Bias & The Milgram Effect: The Blind Obedience Reflex انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "Authority Bias & The Milgram Effect: The Blind Obedience Reflex (ପ୍ରଭାବ)", "Authority Bias & The Milgram Effect: The Blind Obedience Reflex ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "Authority Bias & The Milgram Effect: The Blind Obedience Reflex (প্ৰভাৱ)", "Authority Bias & The Milgram Effect: The Blind Obedience Reflex সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
