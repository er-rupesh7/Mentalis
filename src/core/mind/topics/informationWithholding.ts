import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 20: Information Withholding
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Ekman, P. (1985): Telling Lies: Clues to Deceit in the Marketplace, Politics, and Marriage (Concealment vs. Falsification)
 * - Connelly, C. E., et al. (2012): Knowledge Hiding in Organizations (Journal of Organizational Behavior)
 * - Simon, G. K. (2010): In Sheep's Clothing: Understanding and Dealing with Manipulative People (Lying by Omission)
 * - Stasser, G., & Titus, W. (1985): Pooling of Unshared Information in Group Decision Making (Information Asymmetry)
 */

export const TOPIC_INFO_WITHHOLDING_EN: MindTopicDetail = {
  id: 'information_withholding',
  categoryId: 'manipulation_awareness',
  slug: 'information-withholding',
  difficulty: 'advanced',
  estimatedReadingMinutes: 8,
  scientificConsensusTier: 'established',
  sortWeight: 20,
  viewCount: 8940,
  shareCount: 810,
  bookmarkCount: 1680,
  title: 'Information Withholding: Strategic Omission & Epistemic Gatekeeping',
  subtitle: 'Paul Ekman\'s concealment science and knowledge hiding: how manipulators control outcomes by deliberately starving you of critical facts.',
  shortDescription: 'The deliberate suppression, concealment, or selective filtering of critical information needed by another person to make informed choices, maintaining power through engineered ignorance.',
  oneLineExplanation: 'In simple terms: Keeping you in the dark about things you need to know, so you fail, stay dependent, or agree to things you would otherwise refuse.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'A colleague conveniently "forgets" to forward the updated client specification sheet, letting you deliver a flawed presentation before the board. A spouse neglects to mention taking out a heavy personal loan until debt collectors call the home. A manager conceals upcoming company restructuring so you don\'t interview elsewhere. Information withholding is often called "lying by omission"—the manipulator never tells an active, falsifiable lie, allowing them to hide behind plausible deniability: "I didn\'t know you needed that!"',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'In Dr. Paul Ekman\'s (1985) seminal taxonomy of deception, concealment is the most ubiquitous and defensible form of lying. Falsification requires actively inventing false facts (which risks cognitive slip-ups and physical evidence), whereas concealment merely requires staying silent. In organizational psychology, Connelly et al. (2012) formalized this as "Knowledge Hiding"—deliberately withholding requested knowledge to preserve positional power, handicap peers, or create artificial indispensability.',
  summary60s: 'Information is agency. When you know all the relevant facts, you have the autonomy to make choices aligned with your self-interest. By acting as an information filter or gatekeeper, the manipulator strips away your decision-making autonomy without ever raising their voice. You make bad decisions, not because your logic is flawed, but because the foundational premises fed to you were intentionally incomplete.',

  quickTakeaways: [
    'Lying by Omission: Concealing a material fact has the exact same moral and functional impact as speaking an active falsehood',
    'Plausible Deniability Shield: The withholder protects themselves with excuses: "I forgot," "I assumed you already knew," or "You never specifically asked"',
    'Manufactured Dependence: By hoarding knowledge, passwords, or processes, toxic employees make themselves impossible to replace or fire',
    'The Written Audit Trail: Defeat strategic omission by establishing public, written, and collaborative information repositories',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Trust defaults and cognitive heuristic reliance. Humans naturally operate under the "Truth-Default Theory" (Levine, 2014)—assuming others are communicating openly in good faith. We rarely suspect that an absence of information was engineered with hostile intent.',
  evolutionaryMechanism: 'Information asymmetry dominance: in ancestral hunting and warfare, the individual who controlled reconnaissance data held life-or-death leverage over clan decision-making.',

  // SECTION E — HOW DO MANIPULATORS USE IT?
  howItWorks: 'The 4 strategies of information withholding: (1) Playing Dumb (pretending not to know the requested data); (2) Evasive Hiding (providing partial, misleading, or delayed answers until deadlines pass); (3) Rationalized Gatekeeping (claiming the withheld data is "confidential" or "not your level"); (4) Selective CC-ing (excluding key stakeholders from email threads where critical pivots occur).',
  whereYouEncounterIt: 'Corporate knowledge monopolies, toxic romantic relationships (financial secrecy), joint family wills and inheritance concealment, and government bureaucratic stonewalling.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Legitimate Privacy vs. Manipulative Information Withholding',
    description: 'Distinguishing healthy personal boundaries from deceptive concealment.',
    analogySideA: {
      label: 'Legitimate Personal Privacy',
      detail: 'Keeping private your personal journal, childhood therapy memories, or personal hobbies. This information has zero bearing on the other person\'s rights, finances, or safety.',
    },
    analogySideB: {
      label: 'Manipulative Information Withholding',
      detail: 'Concealing a massive credit card debt, an STI diagnosis, or a project deadline change. This directly impacts the other person\'s well-being and prevents informed consent.',
    },
  },

  researchSummary: 'Paul Ekman (1985) classified concealment as the most cognitively efficient form of deception because it leaves no synthetic narrative trace. Connelly et al. (2012) proved in organizational behavior that knowledge hiding directly impairs coworker performance, damages trust, and is intentionally used as a political barrier to prevent peers from achieving parity.',
  limitationsAndControversies: 'Respecting confidential company IP, medical privacy laws (HIPAA), or not gossiping about another person\'s private struggles is legitimate privacy. Information withholding becomes manipulative when the concealed information is material to the other person\'s informed consent, safety, or work obligations.',

  howToRecognize: [
    'Chronic "selective amnesia": consistently forgetting to relay critical updates, messages, or calendar changes',
    'Exclusion from key communication loops: discovering decisions affecting your project after they were finalized',
    'Vague, evasive answers to direct, specific questions: answering a simple yes/no inquiry with a long philosophical diversion',
    'Single-point-of-failure bottlenecks: an individual who insists that all requests must pass exclusively through their desk',
    'Surprise liabilities: finding out about debts, penalties, or policy shifts only after you have been penalized',
  ],

  // SECTION F — REAL-WORLD SCENARIOS
  scenarios: [
    {
      id: 'scen_info_01',
      scenarioType: 'indian_context',
      title: 'The Ancestral Land Deed Secrecy & Startup Code Monopoly',
      vignette: 'In an arranged marriage in Delhi, a family deliberately conceals that their son has massive personal business debts and a pending fraud case, claiming after marriage: "You never specifically asked about his loan liabilities." Simultaneously in a Bengaluru tech firm, a senior tech lead refuses to write documentation for the payment gateway, hoarding production credentials on his private laptop so management can never replace or fire him.',
      breakdownAnalysis: 'Both scenarios demonstrate malicious information asymmetry. By gatekeeping critical data, the deceiver strips the target of their right to make informed choices, trapping them in emotional or organizational servitude.',
      recommendedAction: 'Transition to transparent verification protocols: in matrimonial negotiations, conduct independent background and legal checks; in organizations, enforce shared documentation wikis and multi-person administrative credentials.',
    },
  ],

  examples: [
    {
      id: 'ex_info_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The "Forgotten" Meeting Minutes',
      description: 'A peer attends an executive briefing where project requirements pivot, but intentionally avoids mentioning it to you. You spend 4 days building a deprecated feature and look incompetent at the review.',
      takeaway: 'Notice how plausible deniability ("I assumed you already knew!") shields the saboteur from direct accusations.',
    },
  ],

  // SECTION G & H — HOW TO RESPOND
  howToRespond: 'Apply Transparent Channel Protocol: (1) Transition from verbal handoffs to public, shared written channels (Jira, Slack, shared wikis); (2) Ask direct, binary questions instead of open-ended prompts; (3) Send written summary emails confirming disclosures: "Per our sync, you confirmed no further requirements exist"; (4) Treat repeated concealment as an active breach of trust.',
  psychologicalDefenses: [
    'The Informed Consent Standard: Any information that would reasonably alter your decision to stay, invest, or sign is information you have an absolute moral right to know.',
    'Truth-Default Override: In high-stakes financial, legal, or career negotiations, switch from default trust to empirical verification.',
    'Distributed Knowledge Architecture: Remove single points of failure by mandating pair programming, shared docs, and dual financial signatories.',
  ],

  commonMisconceptions: [
    {
      misconception: 'If someone didn\'t actively tell a falsehood, they did not lie.',
      correction: 'Lying by omission (Ekman, 1985) is scientifically classified as deception. Intentionally leading someone to a false belief by withholding key facts is functionally identical to lying.',
    },
    {
      misconception: 'Withholding bad news from a partner or child is just protecting them from stress.',
      correction: 'Paternalistic withholding denies the other person reality, autonomy, and the ability to prepare for impending hardship.',
    },
  ],

  reflectionPrompt: 'Have you ever discovered that crucial information was withheld from you "for your own good"? How did that omission impact your trust and autonomy?',

  // INTERACTIVE SCENARIOS & QUIZ
  interactiveScenario: {
    id: 'interactive_info_01',
    topicId: 'information_withholding',
    scenarioTitle: 'The "Forgotten" Executive Pivot',
    scenarioDescription: 'You are presenting a quarterly marketing strategy to executive leadership. Your peer, who attended an executive pre-briefing yesterday, said nothing to you about the CEO\'s pivot in priority: "Didn\'t I explain yesterday that we are cutting ad spend by 40%?" Your peer smiles: "Yes, sir, I tried to mention it, but our colleague went with the old presentation anyway."',
    vignetteSourceType: 'workplace',
    options: [
      {
        id: 'opt_1',
        text: 'Burst into tears and apologize profusely for not being smart enough to anticipate the cut.',
        isCorrect: false,
        cognitiveTakeaway: 'This validates the peer\'s trap and ruins your executive reputation.',
      },
      {
        id: 'opt_2',
        text: 'Respond calmly and factually: "Thank you for the update, CEO. The written briefing notes shared with me did not include yesterday\'s budget pivot. Let us spend the next 15 minutes aligning on the new 40% reduction scenario directly."',
        isCorrect: true,
        cognitiveTakeaway: 'Optimal move! You professionally clarify the information gap without losing composure, signal that you rely on documented briefings, and steer directly to real-time problem solving.',
      },
      {
        id: 'opt_3',
        text: 'Scream at your peer in front of the CEO: "You never told me, you liar!"',
        isCorrect: false,
        cognitiveTakeaway: 'A hostile outburst derails the executive meeting and makes you appear emotionally volatile.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'pq_info_1',
      questionType: 'multiple_choice',
      prompt: 'Why do deceptive actors frequently prefer "concealment" (omission) over "falsification" (active lies)?',
      options: [
        { id: 'opt_a', text: 'Because concealment requires less cognitive effort and provides an easy defense ("I simply forgot")', isCorrect: true, feedbackText: 'Correct! Paul Ekman proved that concealment leaves no synthetic narrative trace and enables plausible deniability.' },
        { id: 'opt_b', text: 'Because active lies are punished by law but omission is always legally encouraged', isCorrect: false },
        { id: 'opt_c', text: 'Because concealment makes other people happier', isCorrect: false },
      ],
      cognitiveTakeaway: 'Concealment minimizes cognitive load and maximizes plausible deniability.',
    },
    {
      id: 'pq_info_2',
      questionType: 'multiple_choice',
      prompt: 'In organizational psychology, what did Connelly et al. (2012) define as "Knowledge Hiding"?',
      options: [
        { id: 'opt_a', text: 'Encrypting company hard drives against external cyber threats', isCorrect: false },
        { id: 'opt_b', text: 'An intentional attempt to withhold or conceal knowledge that has been requested by another person', isCorrect: true, feedbackText: 'Correct! Knowledge hiding is a conscious, active strategy to preserve positional power by denying others access.' },
        { id: 'opt_c', text: 'Forgetting a computer password due to age-related memory decline', isCorrect: false },
      ],
      cognitiveTakeaway: 'Knowledge hiding is intentional concealment to maintain positional advantage.',
    },
    {
      id: 'pq_info_3',
      questionType: 'multiple_choice',
      prompt: 'What distinguishes legitimate personal privacy from manipulative information withholding?',
      options: [
        { id: 'opt_a', text: 'Privacy protects personal internal life without harming others; withholding conceals facts directly needed by the other person to make informed choices affecting their well-being', isCorrect: true, feedbackText: 'Correct! Withholding becomes manipulative when the concealed information is material to the other person\'s agency or safety.' },
        { id: 'opt_b', text: 'There is no difference; all secrets are equally manipulative', isCorrect: false },
        { id: 'opt_c', text: 'Privacy is only for married couples', isCorrect: false },
      ],
      cognitiveTakeaway: 'Material impact on another\'s agency separates secrecy from healthy privacy.',
    },
  ],

  references: [
    {
      citation: 'Ekman, P. (1985). Telling lies: Clues to deceit in the marketplace, politics, and marriage. W. W. Norton & Company.',
      doiOrUrl: 'https://doi.org/10.1037/027005',
      relevance: 'Foundational framework classifying concealment as the most pervasive and defensible form of deception.',
      displayOrder: 1,
    },
    {
      citation: 'Connelly, C. E., Zweig, D., Webster, J., & Trougakos, J. P. (2012). Knowledge hiding in organizations. Journal of Organizational Behavior, 33(1), 64–88.',
      doiOrUrl: 'https://doi.org/10.1002/job.737',
      relevance: 'Empirical demonstration of how intentional knowledge hiding damages peer trust and performance.',
      displayOrder: 2,
    },
  ],

  tags: ['Manipulation Awareness', 'Information Withholding', 'Knowledge Hiding', 'Gatekeeping', 'Lying by Omission', 'Workplace Politics'],
  relatedTopics: [
    { topicId: 'gaslighting_dynamics', slug: 'gaslighting-dynamics', title: 'Gaslighting Dynamics', relationshipType: 'amplified_by' },
    { topicId: 'playing_people_against_each_other', slug: 'playing-people-against-each-other', title: 'Playing People Against Each Other', relationshipType: 'foundational_to' },
    { topicId: 'healthy_boundaries', slug: 'healthy-boundaries', title: 'Healthy Boundaries', relationshipType: 'counteracted_by' },
  ],
  seoTitle: 'Information Withholding: Strategic Omission & Gatekeeping | Mentalab Mind',
  seoDescription: 'Master the psychology of knowledge hiding, strategic omission, and epistemic gatekeeping. Learn how to counter information asymmetry with open verification.',
  canonicalUrl: '/mind/manipulation-awareness/information-withholding',
  ogImageUrl: '/images/mind/information-withholding.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Information withholding weaponizes knowledge asymmetry, stripping targets of decision-making autonomy through engineered ignorance and plausible deniability.',
};

export const TOPIC_INFO_WITHHOLDING_HINGLISH: MindTopicDetail = {
  ...TOPIC_INFO_WITHHOLDING_EN,
  title: 'Information Withholding: Zaroori Baatein Chhupaane Ka Khel (Omission & Gatekeeping)',
  subtitle: 'Paul Ekman ki concealment research aur knowledge hiding: kaise zaroori baatein na bata kar log aapke decisions aur career ko control karte hain.',
  shortDescription: 'Ek aisi chaal jahan saamne wala jaanboojh kar zaroori information, updates ya documents chhupa leta hai taaki aap galat decision lein aur unpar dependent bane rahein.',
  oneLineExplanation: 'Simple shabdon me: Jhooth na bolkar bas sach ko chhupa lena, taaki aap andhere me rahein aur unki marzi ke mutabik faisla karein.',
  summary30s: 'Ek co-worker project ki updated requirement aapse chhupa leta hai taaki client meeting me aapki beizzati ho. Ek partner 10 lakh ka loan le leta hai par tab tak nahi batata jab tak recovery agents ghar par na aa jayein. Jab pakde jate hain toh bahaana banate hain: "Tumne poocha hi kab tha!" Isko bolte hain Lying by Omission—bina jhooth bole dhoka dena.',
  coreConcept: 'Dr. Paul Ekman (1985) ke mutabik, jhooth bolne ka sabse aasan tareeka hota hai "Concealment" yaani baat ko dabana. Jhooth banane me dimaag lagta hai aur pakde jaane ka darr hota hai, lekin chup rehne me "Main bhool gaya tha" bol kar bach nikalna aasan hota hai.',
  quickTakeaways: [
    'Lying by Omission: Zaroori baat chhupaana bhi bol kar bole gaye jhooth ke barabar hi hota hai',
    '"Main bhool gaya" ka bahaana: Withholders hamesha bahaana banate hain ki "mujhe laga tumhe pata hoga"',
    'Knowledge Hiding se control: Office me code ya processes ki documentation na banana taaki company unpar dependent rahe',
    'Written confirmation: Zaroori baaton ko hamesha email ya shared documents par record karo taaki koi baad me palat na sake',
  ],
  warningSigns: [
    'Important emails me aapko CC na karna',
    'Poochhne par gol-mol ya adhoora jawab dena',
    'Ghar ke zaroori legal ya financial papers aapse chhupa kar rakhna',
    'Baad me yeh kehna ki "Mujhe laga tumhe pehle se pata tha"',
  ],
};

function createLocalizedInfoWithholdingRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  whyItHappens: string,
  howToRespond: string,
  tags: string[]
): MindTopicDetail {
  return {
    ...TOPIC_INFO_WITHHOLDING_EN,
    title,
    subtitle,
    oneLineExplanation: oneLine,
    whyItHappens,
    howToRespond,
    tags,
  };
}

export const TOPIC_INFORMATION_WITHHOLDING: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_INFO_WITHHOLDING_EN,
  hinglish: TOPIC_INFO_WITHHOLDING_HINGLISH,
  hi: createLocalizedInfoWithholdingRecord(
    'hi',
    'जानकारी छुपाना: सच को दबाकर नियंत्रण करने का खेल (Information Withholding)',
    'पॉल एकमैन का शोध: कैसे महत्वपूर्ण तथ्यों को छुपाकर और अधूरा सच बताकर निर्णयों को प्रभावित किया जाता है।',
    'सरल शब्दों में: झूठ बोले बिना केवल जरूरी जानकारी छुपा लेना ताकि आप अंधेरे में रहें और गलत फैसला लें।',
    'दूसरों को अपने नियंत्रण में रखने और अपनी गलतियों पर पर्दा डालने के लिए सूचना को रोका जाता है।',
    'मौखिक बातों पर निर्भर न रहकर महत्वपूर्ण बातों को हमेशा लिखित और साझा रिकॉर्ड में दर्ज करवाएं।',
    ['जानकारी छुपाना', 'अपूर्ण सत्य', 'लिखित प्रमाण']
  ),
  gu: createLocalizedInfoWithholdingRecord(
    'gu',
    'માહિતી છુપાવવી: સત્ય દબાવીને નિયંત્રણ મેળવવાની કુટિલ રીત (Information Withholding)',
    'પોલ એકમેનનું સંશોધન: નિર્ણયોને પ્રભાવિત કરવા માટે મહત્ત્વની હકીકતો જાણીજોઈને છુપાવવી.',
    'સરળ શબ્દોમાં: ખુલ્લું જૂઠ ન બોલવું પણ સાચી હકીકત છુપાવીને સામેવાળાને અંધારામાં રાખવા.',
    'સત્તા જાળવી રાખવા અને પોતાની નિર્ભરતા ઊભી કરવા માટે જરૂરી માહિતી છુપાવવામાં આવે છે.',
    'મોંઢેથી થતી વાતોને બદલે દરેક મહત્ત્વની વિગત લેખિત સ્વરૂપમાં સાચવવાની ટેવ પાડો.',
    ['માહિતી છુપાવવી', 'અપૂર્ણ સત્ય', 'લેખિત દસ્તાવેજ']
  ),
  mr: createLocalizedInfoWithholdingRecord(
    'mr',
    'माहिती लपवून ठेवणे: सत्य दडपून नियंत्रण मिळवण्याची चाल (Information Withholding)',
    'पॉल एकमनचे संशोधन: निर्णय प्रक्रियेवर ताबा मिळवण्यासाठी आवश्यक सत्य जाणूनबुजून दडवणे.',
    'सोप्या भाषेत: खोटे न बोलता केवळ खरी माहिती लपवून समोरच्याला अंधारात ठेवण्याचा प्रकार.',
    'स्वतःचे महत्त्व वाढवण्यासाठी आणि इतरांना परावलंबी ठेवण्यासाठी माहिती दडवली जाते.',
    'केवळ तोंडी चर्चेवर विश्वास न ठेवता सर्व महत्त्वाच्या गोष्टी लेखी स्वरूपात नोंदवून ठेवा.',
    ['माहिती लपवणे', 'अपूर्ण सत्य', 'लेखी पुरावा']
  ),
  bn: createLocalizedInfoWithholdingRecord(
    'bn',
    'তথ্য গোপন করা: সত্য চেপে রেখে নিয়ন্ত্রণের কৌশল (Information Withholding)',
    'পল একম্যানের গবেষণা: অন্যের সিদ্ধান্তকে প্রভাবিত করতে গুরুত্বপূর্ণ তথ্য উদ্দেশ্যপ্রণোদিতভাবে চেপে রাখা।',
    'সহজ কথায়: সরাসরি মিথ্যা না বলে সঠিক তথ্য লুকিয়ে অপরকে অন্ধকারে রেখে বিপদে ফেলা।',
    'ক্ষমতা ও নিয়ন্ত্রণ টিকিয়ে রাখতে এবং নিজের গুরুত্ব বাড়াতে তথ্য আটকে রাখা হয়।',
    'মৌখিক তথ্যের ওপর নির্ভর না করে প্রতিটি জরুরি সিদ্ধান্ত লিখিত ও যৌথ নথিতে সংরক্ষণ করুন।',
    ['তথ্য গোপন', 'অর্ধসত্য', 'লিখিত প্রমাণ']
  ),
  ta: createLocalizedInfoWithholdingRecord(
    'ta',
    'தகவல்களை மறைத்தல்: உண்மையை மறைத்து ஆதிக்கம் செலுத்தும் தந்திரம் (Information Withholding)',
    'பால் எக்மேன் ஆய்வு: முடிவுகளைத் தங்கள் விருப்பப்படி மாற்ற முக்கியமான உண்மைகளைத் திட்டமிட்டு மறைப்பது.',
    'எளிய முறையில்: பொய் சொல்லாமல் ஆனால் தேவையான உண்மையைச் சொல்லாமல் பிறரை இருட்டில் வைப்பது.',
    'தனது அதிகாரத்தைத் தக்கவைக்கவும் மற்றவர்களைத் தன் கட்டுப்பாட்டில் வைத்திருக்கவும் தகவல் மறைக்கப்படுகிறது.',
    'வாய்மொழி வார்த்தைகளை நம்பாமல் முக்கியமான விபரங்களை எப்போதும் எழுத்துப்பூர்வமாகப் பதிவு செய்யுங்கள்.',
    ['தகவல் மறைப்பு', 'முழுமையற்ற உண்மை', 'எழுத்துப்பூர்வ சான்று']
  ),
  te: createLocalizedInfoWithholdingRecord(
    'te',
    'సమాచారాన్ని దాచడం: నిజాన్ని తొక్కిపెట్టి నియంత్రించే కుతంత్రం (Information Withholding)',
    'పాల్ ఎక్‌మాన్ పరిశోధన: నిర్ణయాలను ప్రభావితం చేయడానికి కీలకమైన వాస్తవాలను ఉద్దేశపూర్వకంగా దాచడం.',
    'సరళంగా చెప్పాలంటే: నేరుగా అబద్ధం చెప్పకుండా నిజాన్ని దాచిపెట్టి ఇతరులను అయోమయంలో నెట్టడం.',
    'అధికారాన్ని నిలుపుకోవడానికి మరియు ఇతరులు తమపై ఆధారపడేలా చేయడానికి సమాచారాన్ని దాస్తారు.',
    'నోటి మాటలపై ఆధారపడకుండా కీలక సమాచారాన్ని ఎల్లప్పుడూ లిఖితపూర్వకంగా రికార్డ్ చేసుకోండి.',
    ['సమాచార గోప్యత', 'అసంపూర్ణ సత్యం', 'లిఖితపూర్వక రుజువు']
  ),
  kn: createLocalizedInfoWithholdingRecord(
    'kn',
    'ಮಾಹಿತಿ ಮುಚ್ಚಿಡುವುದು: ಸತ್ಯವನ್ನು ಮರೆಮಾಚಿ ನಿಯಂತ್ರಿಸುವ ಕುತಂತ್ರ (Information Withholding)',
    'ಪಾಲ್ ಎಕ್‌ಮನ್ ಸಂಶೋಧನೆ: ನಿರ್ಧಾರಗಳನ್ನು ತಮ್ಮ ಪರವಾಗಿ ತಿರುಗಿಸಲು ಪ್ರಮುಖ ಸತ್ಯಗಳನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಮುಚ್ಚಿಡುವುದು.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಸುಳ್ಳು ಹೇಳದೆ ಕೇವಲ ಸತ್ಯವನ್ನು ಮುಚ್ಚಿಟ್ಟು ಇತರರನ್ನು ಕತ್ತಲಲ್ಲಿಡುವುದು.',
    'ತಮ್ಮ ಪ್ರಭಾವ ಉಳಿಸಿಕೊಳ್ಳಲು ಮತ್ತು ಇತರರನ್ನು ತಮ್ಮ ಮೇಲೆ ಅವಲಂಬಿತರನ್ನಾಗಿ ಮಾಡಲು ಮಾಹಿತಿ ಬಚ್ಚಿಡುತ್ತಾರೆ.',
    'ಬಾಯ್ಮಾತಿನ ಮೇಲೆ ನಂಬಿಕೆ ಇಡದೆ ಎಲ್ಲ ಪ್ರಮುಖ ವಿಷಯಗಳನ್ನು ಲಿಖಿತ ರೂಪದಲ್ಲಿ ದಾಖಲಿಸಿಕೊಳ್ಳಿ.',
    ['ಮಾಹಿತಿ ಮುಚ್ಚಿಡುವುದು', 'ಅಪೂರ್ಣ ಸತ್ಯ', 'ಲಿಖಿತ ದಾಖಲೆ']
  ),
  ml: createLocalizedInfoWithholdingRecord(
    'ml',
    'വിവരങ്ങൾ മറച്ചുവെക്കൽ: സത്യം മൂടിവെച്ച് വരുതിയിലാക്കുന്ന രീതി (Information Withholding)',
    'പോൾ എക്മാന്റെ പഠനം: തീരുമാനങ്ങളെ സ്വാധീനിക്കാൻ നിർണായക വിവരങ്ങൾ മനപ്പൂർവ്വം ഒളിച്ചുവെക്കുക.',
    'ലളിതമായി പറഞ്ഞാൽ: കള്ളം പറയാതെ എന്നാൽ സത്യം മുഴുവൻ വെളിപ്പെടുത്താതെ ആളുകളെ തെറ്റിദ്ധരിപ്പിക്കുക.',
    'ആധിപത്യം ഉറപ്പിക്കാനും തങ്ങളെ അത്യന്താപേക്ഷിതമാക്കാനും ആളുകൾ വിവരങ്ങൾ പങ്കുവെക്കാതിരിക്കുന്നു.',
    'വാക്കാലുള്ള കാര്യങ്ങളെ ആശ്രയിക്കാതെ പ്രധാന വിവരങ്ങൾ എപ്പോഴും രേഖാമൂലം സൂക്ഷിക്കുക.',
    ['വിവരം മറച്ചുവെക്കൽ', 'അപൂർണ്ണ സത്യം', 'രേഖാമൂലമുള്ള തെളിവ്']
  ),
  pa: createLocalizedInfoWithholdingRecord(
    'pa',
    'ਜਾਣਕਾਰੀ ਛੁਪਾਉਣਾ: ਸੱਚ ਨੂੰ ਦਬਾ ਕੇ ਕੰਟਰੋਲ ਕਰਨ ਦੀ ਚਾਲ (Information Withholding)',
    'ਪੌਲ ਏਕਮੈਨ ਦੀ ਰਿਸਰਚ: ਫੈਸਲਿਆਂ ਨੂੰ ਆਪਣੇ ਹੱਕ ਵਿੱਚ ਕਰਨ ਲਈ ਜ਼ਰੂਰੀ ਜਾਣਕਾਰੀ ਨੂੰ ਜਾਣਬੁੱਝ ਕੇ ਲੁਕਾਉਣਾ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਝੂਠ ਨਾ ਬੋਲ ਕੇ ਸਿਰਫ਼ ਸੱਚ ਛੁਪਾਉਣਾ ਤਾਂ ਜੋ ਦੂਜਾ ਅੰਧੇਰੇ ਵਿੱਚ ਰਹੇ।',
    'ਆਪਣਾ ਦਬਦਬਾ ਬਣਾਉਣ ਅਤੇ ਆਪਣੀ ਨਿਰਭਰਤਾ ਕਾਇਮ ਰੱਖਣ ਲਈ ਜਾਣਕਾਰੀ ਨੂੰ ਰੋਕਿਆ ਜਾਂਦਾ ਹੈ।',
    'ਜ਼ੁਬਾਨੀ ਗੱਲਾਂ ਦੀ ਬਜਾਏ ਹਰ ਜ਼ਰੂਰੀ ਜਾਣਕਾਰੀ ਨੂੰ ਲਿਖਤੀ ਰੂਪ ਵਿੱਚ ਦਰਜ ਕਰਨ ਦੀ ਆਦਤ ਪਾਓ।',
    ['ਜਾਣਕਾਰੀ ਛੁਪਾਉਣਾ', 'ਅਧੂਰਾ ਸੱਚ', 'ਲਿਖਤੀ ਰਿਕਾਰਡ']
  ),
  ur: createLocalizedInfoWithholdingRecord(
    'ur',
    'معلومات چھپانا: سچ کو دبا کر قابو پانے کی سازش (Information Withholding)',
    'پال ایکمین کی تحقیق: فیصلوں پر اثر انداز ہونے کے لیے اہم حقائق کو دانستہ طور پر پوشیدہ رکھنا۔',
    'آسان الفاظ میں: صریح جھوٹ بولے بغیر اہم معلومات چھپا کر دوسروں کو تاریکی میں رکھنا۔',
    'اپنا اثر و رسوخ قائم رکھنے اور دوسروں کو محتاج بنانے کے لیے حقائق چھپائے جاتے ہیں۔',
    'زبانی باتوں پر تکیہ کرنے کے بجائے تمام اہم فیصلوں کو تحریری شکل میں محفوظ کریں۔',
    ['معلومات چھپانا', 'ادھورا سچ', 'تحریری ثبوت']
  ),
  or: createLocalizedInfoWithholdingRecord(
    'or',
    'ତଥ୍ୟ ଲୁଚାଇବା: ସତ୍ୟକୁ ଦବାଇ ନିୟନ୍ତ୍ରଣ କରିବାର କଳା (Information Withholding)',
    'ପଲ୍ ଏକମ୍ୟାନ୍ ଗବେଷଣା: ଅନ୍ୟର ନିଷ୍ପତ୍ତିକୁ ପ୍ରଭାବିତ କରିବା ପାଇଁ ଜାଣିଶୁଣି ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ତଥ୍ୟ ଗୋପନ ରଖିବା।',
    'ସହଜ ଭାଷାରେ: ମିଛ ନ କହି କେବଳ ସତ୍ୟକୁ ଲୁଚାଇ ରଖି ଅନ୍ୟମାନଙ୍କୁ ଅନ୍ଧାରରେ ରଖିବା।',
    'ନିଜର ପ୍ରଭାବ ବିସ୍ତାର କରିବା ଏବଂ ଅନ୍ୟମାନଙ୍କୁ ନିର୍ଭରଶୀଳ କରିବା ପାଇଁ ତଥ୍ୟ ରୋକାଯାଏ।',
    'ମୌଖିକ କଥା ଉପରେ ବିଶ୍ୱାସ ନ କରି ସବୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ତଥ୍ୟକୁ ଲିଖିତ ଆକାରରେ ରଖନ୍ତୁ।',
    ['ତଥ୍ୟ ଲୁଚାଇବା', 'ଅସମ୍ପୂର୍ଣ୍ଣ ସତ୍ୟ', 'ଲିଖିତ ପ୍ରମାଣ']
  ),
  as: createLocalizedInfoWithholdingRecord(
    'as',
    'তথ্য লুকুওৱা: সত্যক গাপ দি নিয়ন্ত্ৰণ কৰাৰ কুঅভ্যাস (Information Withholding)',
    'পল একমেনৰ অধ্যয়ন: সিদ্ধান্তত প্ৰভাৱ পেলাবলৈ প্ৰয়োজনীয় তথ্য উদ্দেশ্যপ্ৰণোদিতভাৱে লুকুওৱা।',
    'সহজ কথাত: ফাঁকি নিদিয়াকৈ কেৱল সত্য লুকুৱাই ৰাখি আনক অন্ধকাৰত ৰখাৰ প্ৰৱণতা।',
    'নিজৰ প্ৰভাৱ বজাই ৰাখিবলৈ আৰু আনক নিজৰ ওপৰত নিৰ্ভৰশীল কৰিবলৈ তথ্য লুকুওৱা হয়।',
    'মৌখিক কথাত নিৰ্ভৰ নকৰি গুৰুত্বপূৰ্ণ কথাবোৰ সদায় লিখিতভাৱে সংৰক্ষণ কৰক।',
    ['তথ্য লুকুওৱা', 'অৰ্ধসত্য', 'লিখিত প্ৰমাণ']
  ),
};
