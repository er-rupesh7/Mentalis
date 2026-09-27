import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 14: DARVO (Deny, Attack, and Reverse Victim and Offender)
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Freyd (1997): Violations of Power, Adaptive Blindness, and Betrayal Trauma Theory
 * - Harsey, Zurbriggen, & Freyd (2017): Design and Validation of the DARVO Measure: Exposing a Subtle Form of Manipulation
 * - Wakefield & Underwager (1991): Accusations and Defenses in High-Conflict Legal and Relational Settings
 */

export const TOPIC_DARVO_PATTERN_EN: MindTopicDetail = {
  id: 'darvo_pattern',
  categoryId: 'manipulation_awareness',
  slug: 'darvo-pattern',
  difficulty: 'advanced',
  estimatedReadingMinutes: 8,
  scientificConsensusTier: 'established',
  sortWeight: 14,
  viewCount: 8420,
  shareCount: 710,
  bookmarkCount: 1460,
  title: 'DARVO: Deny, Attack, and Reverse Victim & Offender',
  subtitle: 'The clinical anatomy of high-conflict defense: how abusers rebrand themselves as martyrs and paint victims as abusers.',
  shortDescription: 'An acronym coined by Dr. Jennifer Freyd describing a common institutional and interpersonal manipulation sequence: Deny the abuse, Attack the whistleblower, and Reverse the roles of Victim and Offender.',
  oneLineExplanation: 'In simple terms: Denying what happened, attacking you for bringing it up, and claiming they are the real victim.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'When an offender is held accountable for clear misconduct (harassment, betrayal, embezzlement, or emotional cruelty), they deploy DARVO. First, they flatly Deny it happened. Second, they Attack your credibility, sanity, or motives ("You are crazy, vindictive, and out to destroy me!"). Third, they Reverse the Victim and Offender roles—collapsing in tears, claiming to be the target of a witch hunt, and demanding public pity while the actual victim is silenced.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Formulated in 1997 by psychology professor Dr. Jennifer J. Freyd, DARVO is a predictable sequence of psychological maneuvers designed to escape institutional and interpersonal accountability. Harsey, Zurbriggen, and Freyd (2017) demonstrated that DARVO operates as a powerful cognitive smoke screen: observers exposed to DARVO tactics judge the perpetrator as significantly less blameworthy and the actual victim as significantly less credible, vindictive, and aggressive.',
  summary60s: 'The three stages of DARVO occur in rapid succession: (1) DENY: "I never said that; that document is fake; you are fabricating stories"; (2) ATTACK: "Why are you attacking me? You are a malicious, paranoid liar who hates seeing anyone succeed"; (3) REVERSE VICTIM AND OFFENDER: "Look at what you are doing to my health! I cannot sleep, my blood pressure is through the roof, you are abusing me!" The original offense is forgotten as the community rushes to comfort the weeping perpetrator.',

  quickTakeaways: [
    'The 3-Step Sequence: Deny the event -> Attack the confronter\'s character -> Reverse the victim and offender roles',
    'Cognitive Confusion: Observers and victims feel disoriented because the perpetrator screams louder and cries harder than the person who was harmed',
    'Institutional DARVO: Universities, corporations, and governments routinely use DARVO against whistleblowers to protect their brand',
    'Documentary Immunity: The only defense against DARVO is objective, third-party, chronological documentation (emails, timestamps, recordings)',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Social observation bias and moral inversion. Humans instinctively rush to comfort whoever displays the most visible, loud signs of acute distress. Perpetrators exploit this by staging theatrical meltdowns (hyperventilating, screaming, threatening self-harm) to hijack the empathy of onlookers.',
  evolutionaryMechanism: 'Tribal coalition warfare: when accused of betraying the clan, launching an immediate aggressive counter-smear rallied defensive allies before evidence could be evaluated.',

  // SECTION E — HOW DOES IT WORK?
  howItWorks: 'DARVO creates "Secondary Victimization." The victim suffers twice: first from the original transgression (infidelity, theft, bullying), and second from the public character assassination and false victimhood orchestrated by the perpetrator.',
  whereYouEncounterIt: 'Workplace HR investigations against toxic executives, messy divorce litigation, joint family inheritance disputes, and public PR scandals.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'The Mechanics of the DARVO Inversion',
    description: 'How an offender transforms an accusation into personal martyrdom.',
    analogySideA: {
      label: 'The Real Event (The Offense)',
      detail: 'Offender steals money or verbally abuses someone behind closed doors -> Victim calmly asks for an explanation.',
    },
    analogySideB: {
      label: 'The DARVO Inversion',
      detail: 'Offender: "I never stole anything (D)! You are a paranoid sociopath (A)! You are trying to ruin my life and kill my career, I am the real victim here (RVO)!"',
    },
  },

  researchSummary: 'Harsey, Zurbriggen, & Freyd (2017) published empirical research in the Journal of Aggression, Maltreatment & Trauma demonstrating that across multiple experiments, participants exposed to an accused person utilizing DARVO consistently rated the victim as less believable and more abusive compared to when the accused offered a simple factual denial.',
  limitationsAndControversies: 'False accusations do occur in human life. An innocent person falsely accused of a horrific crime will naturally experience shock, denial, and anger. The distinction lies in character: an innocent person seeks transparent facts, evidence, and polygraphs; a DARVO perpetrator attacks character, evades facts, and weaponizes dramatic self-victimization.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'The moment you bring up a documented grievance, they instantly accuse you of being abusive, controlling, or vindictive',
    'Flat denial of events despite screenshots, emails, or eyewitnesses standing in the room',
    'The perpetrator sobbing loudly, screaming about their ruined life, and demanding apologies from the person they injured',
    'Weaponizing their medical conditions ("You are going to give me a heart attack with your nagging!") to halt inquiries',
    'Family or colleagues contacting you to say: "Why are you being so hard on them? Look at how broken and upset they are!"',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_darvo_01',
      scenarioType: 'indian_context',
      title: 'The Dowry / Financial Extortion Inversion',
      vignette: 'Sunita in Lucknow discovers that her in-laws have been systematically taking her salary each month while secretly demanding an extra ₹10 Lakhs from her retired father for a luxury car. Sunita confronts her mother-in-law and husband. The mother-in-law immediately drops to the floor, beats her chest, and wails loudly so the neighbors can hear: "Look at this modern girl! We treated her like a queen and she accuses us of begging! She is a liar who wants to break our family and send my son to jail! Call the neighbors, see how this cruel girl is killing me!" The husband rushes to his mother, glares at Sunita, and yells: "Apologize to my mother right now! You are a monster!"',
      breakdownAnalysis: 'Textbook DARVO execution: Deny (claiming they treated her like a queen), Attack (calling Sunita a cruel, family-breaking liar), and Reverse Victim & Offender (staging a public medical/emotional emergency on the floor). Sunita is branded the abuser while the extortionists play martyrs.',
      recommendedAction: 'Sunita must refuse the theatrical trap. Do not scream or apologize. Secure all financial records, bank statements, and bank account logins immediately. Consult an independent legal counsel and establish safe physical boundaries away from the high-conflict residence.',
    },
  ],

  examples: [
    {
      id: 'ex_darvo_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Embezzling Finance Director',
      description: 'An auditor confronts a director with fraudulent invoice vouchers. The director immediately screams: "You are running a racist vendetta against me! You have always been jealous of my success! I am filing an HR grievance for workplace harassment against you today!"',
      takeaway: 'Attacking the investigator and filing retaliatory grievances is classic corporate DARVO.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'To survive DARVO, you must completely abandon the expectation of an honest confession. Stop engaging in bilateral verbal debates. Move all communication to writing, maintain a timestamped chronology, involve third-party authorities, and practice the "Gray Rock" method—do not feed their theatrical martyr show with emotional reactions.',
  psychologicalDefenses: [
    'Document Chronologically: Write down dates, times, quotes, and keep screenshot backups in a secure external cloud drive',
    'Do Not JADE (Justify, Argue, Defend, Explain): When they attack your character, do not write 10-paragraph defensive essays; say: "The documented facts speak for themselves"',
    'Recognize the Script: When they begin crying and claiming you are abusing them, label it mentally: "This is RVO (Reverse Victim and Offender). It is a calculated diversion"',
    'Maintain External Allies: Ensure at least two objective third parties (lawyers, HR professionals, mentors) have copies of the factual evidence',
  ],

  commonMisconceptions: [
    {
      misconception: 'The person who is crying and screaming the loudest must be the victim.',
      reality: 'High-conflict abusers routinely use theatrical weeping and screaming as an offensive smokescreen. True trauma often presents as frozen shock, numbness, and quiet exhaustion.',
    },
  ],

  reflectionPrompt: 'Have you ever confronted someone with clear evidence of wrongdoing, only to find yourself branded as the cruel, aggressive person by the end of the evening?',

  interactiveScenario: {
    id: 'interactive_darvo_01',
    topicId: 'darvo_pattern',
    scenarioTitle: 'Confronting the Plagiarist Colleague',
    scenarioDescription: 'You discover that a peer copied 80% of your technical design doc word-for-word and presented it to the VP as their sole work. When you confront them privately with git commit timestamps, they stand up, slam the desk, and yell: "You are a toxic, jealous snake! You have been trying to sabotage my career since day one! I am going straight to HR to report you for creating a hostile work environment!"',
    vignetteSourceType: 'workplace',
    options: [
      {
        id: 'opt_1',
        text: 'Panic, apologize, and promise you won\'t mention the doc again so they don\'t report you to HR.',
        isCorrect: false,
        cognitiveTakeaway: 'You surrender to DARVO! Their attack and victim-reversal successfully frightened you into silence.',
      },
      {
        id: 'opt_2',
        text: 'Remain calm, refuse to debate their character attack, and forward the timestamped git commits and side-by-side diff directly to the VP and HR lead: "Attached are the original commit logs from March 12th. I am requesting a formal attribution review."',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of DARVO defense! You ignore the verbal theatrical attack and rely strictly on objective, verifiable data with leadership.',
      },
      {
        id: 'opt_3',
        text: 'Start screaming back insults in the hallway and punch the office wall.',
        isCorrect: false,
        cognitiveTakeaway: 'You hand them the reactive abuse weapon! HR will fire you for physical aggression while ignoring the plagiarism.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_darvo_01',
      questionType: 'multiple_choice',
      prompt: 'What does the psychological acronym DARVO stand for, as coined by Dr. Jennifer Freyd?',
      options: [
        { id: 'opt_a', text: 'Demand, Argue, Retaliate, Validate, Overcome', isCorrect: false },
        { id: 'opt_b', text: 'Deny the behavior, Attack the confronter, and Reverse the roles of Victim and Offender', isCorrect: true, feedbackText: 'Correct! Dr. Freyd identified this 3-step sequence as the primary evasion maneuver of perpetrators.' },
        { id: 'opt_c', text: 'Distort Attention, Redirect Value, and Obliterate Opposition', isCorrect: false },
      ],
      cognitiveTakeaway: 'DARVO is the clinical acronym for Deny, Attack, and Reverse Victim & Offender.',
    },
  ],

  references: [
    {
      citation: 'Freyd, J. J. (1997). Violations of power, adaptive blindness, and betrayal trauma theory. Feminism & Psychology, 7(1), 22–32.',
      doiOrUrl: 'https://doi.org/10.1177/0959353597071004',
      relevance: 'The foundational academic paper introducing DARVO and institutional betrayal.',
      displayOrder: 1,
    },
    {
      citation: 'Harsey, S., Zurbriggen, E. L., & Freyd, J. J. (2017). Design and validation of the DARVO measure: Exposing a subtle form of manipulation. Journal of Aggression, Maltreatment & Trauma, 26(5), 517–535.',
      doiOrUrl: 'https://doi.org/10.1080/10926771.2017.1320777',
      relevance: 'Empirical verification and measurement of how DARVO manipulates third-party perceptions of guilt and victimhood.',
      displayOrder: 2,
    },
  ],

  tags: ['Manipulation Awareness', 'DARVO', 'Betrayal Trauma', 'Jennifer Freyd', 'Accountability', 'Covert Abuse'],
  relatedTopics: [
    { topicId: 'gaslighting_awareness', slug: 'gaslighting-awareness', title: 'Gaslighting Awareness', relationshipType: 'amplified_by' },
    { topicId: 'victim_playing', slug: 'victim-playing', title: 'Victim Playing', relationshipType: 'amplified_by' },
    { topicId: 'blame_shifting', slug: 'blame-shifting', title: 'Blame Shifting', relationshipType: 'frequently_confused_with' },
  ],
  seoTitle: 'DARVO Explained: Deny, Attack, and Reverse Victim & Offender | Mentalab Mind',
  seoDescription: 'Master the clinical psychology of DARVO by Dr. Jennifer Freyd. Learn how abusers rebrand as victims, attack whistleblowers, and how to defend with evidence.',
  canonicalUrl: '/mind/manipulation-awareness/darvo-pattern',
  ogImageUrl: '/images/mind/darvo-pattern.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'DARVO represents a tactical cognitive inversion designed to induce secondary victimization and derail accountability through theatrical moral reversal.',
};

export const TOPIC_DARVO_PATTERN_HINGLISH: MindTopicDetail = {
  ...TOPIC_DARVO_PATTERN_EN,
  title: 'DARVO: Deny, Attack, Reverse Victim & Offender — Asali Gunehgaar Ka Bechara Ban Jaana',
  subtitle: 'Dr. Jennifer Freyd ka research: Dhokhebaaz kaise pehle inkaar karta hai, fir hamla karta hai, aur aakhir me khud bechara ban jata hai.',
  shortDescription: 'Ek aisi khatarnak manipulation sequence jisme gunehgaar galti maanne ke bajaye: (1) Inkaar karta hai; (2) Aapke character par hamla karta hai; (3) Khud ko victim saabit kar deta hai.',
  oneLineExplanation: 'Simple shabdon me: Galti khud karna, pakde jaane par chillana, aur aakhir me ro-dhokar khud ko bura batane walo ka shikar saabit kar dena.',

  summary30s: 'DARVO ek psychological formula hai jo toxic log aur corrupt institutions use karte hain jab unki chori ya zulm pakda jata hai. Pehla step: **Deny** ("Maine kuch nahi kiya, yeh jhooth hai"). Doosra step: **Attack** ("Tum characterless ho, tum meri zindagi barbaad karna chahte ho!"). Teesra step: **Reverse Victim & Offender** (Offender zameen par baith kar rone lagta hai: "Meri tabiyat kharab ho gayi, dekho mujhe kitna torture kiya ja raha hai!"). Aakhir me asali victim chup ho jata hai aur log gunehgaar ko paani pila rahe hote hain.',
  coreConcept: 'Dr. Jennifer Freyd (1997) ne prove kiya tha ki DARVO ka sabse bada asar doosre logon par hota hai. Jo log bahar se dekh rahe hote hain, wo gunehgaar ka rona-dhona dekh kar confuse ho jaate hain aur sochte hain ki shayad asali gunehgaar wo insaan hai jo complaint le kar aaya tha.',
  summary60s: 'Sunita ne in-laws ko secret dowry maangte pakda. Saas ne turant DARVO chalaya: Pehle inkaar kiya ("Humne toh beti banaya"), fir hamla kiya ("Yeh ladki jhoothi hai, ghar todna chahti hai"), fir chhati peet kar rone lagi ("Mujhe heart attack aa jayega, dekho bahu mujhe maar rahi hai!"). Pati ne aakar Sunita par chilla diya. Asali extortion ka mudda dab gaya aur Sunita villain ban gayi.',

  quickTakeaways: [
    '3 Steps: Inkaar (Deny) -> Hamla (Attack) -> Role Reverse (Reverse Victim & Offender)',
    'Rone wale se confuse mat hoiye: Gunehgaar hamesha asali victim se 10 guna zyada tez rota aur chillata hai',
    'Proofs ki Taqat: DARVO ka ek hi tod hai—baaton me behes mat kijiye, screenshots aur written proof samne rakhiye',
    'Emotional Smoke Screen: Unka gussa aur aansu sirf accountability se bachne ka dhuan hain',
  ],

  whyItHappens: 'Insaan jab gehra dhokha deta hai toh wo jail ya samaj se bahaishkar hone se darta hai. Achanak victim ban jana public sympathy paane ka fastest tareeqa hota hai.',
  evolutionaryMechanism: 'Tribe me agar kisi par chori ka ilzaam lagta tha, toh wo counter-attack karke apni innocence ka drama karta tha taaki saza na mile.',

  howItWorks: 'Office me chor employee ko pakdo. Wo turant chillata hai: "Tum mujhse jalte ho! Main HR me harassment ki complaint darj karunga!"',
  howToRespond: 'Zaban se ladai mat kijiye. "Gray Rock" baniye aur saara proof email par senior management aur HR ko bhej dijiye. Unke drama me participate mat kijiye.',

  reflectionPrompt: 'Kya aapne kabhi kisi ki badi galti pakdi aur achanak aisi situation ban gayi jahan wo ro-ro kar sabko dikha raha tha ki aap unpar zulm kar rahe hain?',
  seoTitle: 'DARVO Kya Hai? Deny Attack Reverse Victim Offender Psychology | Mentalab Mind',
  seoDescription: 'Janiye DARVO manipulation technique ka sach. Dr. Jennifer Freyd ki research aur gunehgaar ke victim-card ko expose karne ke practical tareeqe.',
  canonicalUrl: '/mind/manipulation-awareness/darvo-pattern',
};

function createLocalizedDARVORecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_DARVO_PATTERN_EN,
    title,
    subtitle,
    oneLineExplanation: oneLine,
    summary30s,
    coreConcept,
    quickTakeaways: takeaways,
    seoTitle: `${title} | Mentalab Mind`,
    seoDescription: `${summary30s.slice(0, 150)}...`,
  };
}

export const TOPIC_DARVO_PATTERN: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_DARVO_PATTERN_EN,
  hinglish: TOPIC_DARVO_PATTERN_HINGLISH,
  hi: createLocalizedDARVORecord(
    'hi',
    'डार्वो (DARVO): इंकार, हमला और पीड़ित-अपराधी की भूमिका पलटना',
    'डॉ. जेनिफर फ्रेड का शोध: अपराधी कैसे अपनी गलती छुपाने के लिए स्वयं को पीड़ित साबित कर देता है।',
    'सरल शब्दों में: गलती से मुकर जाना, सवाल पूछने वाले पर हमला करना और खुद को पीड़ित बनाकर सहानुभूति बटोरना।',
    'डार्वो तब होता है जब कोई व्यक्ति अपने अपराध से बचने के लिए पहले सच्चाई से इंकार करता है, फिर शिकायतकर्ता के चरित्र पर हमला करता है, और अंत में स्वयं को पीड़ित घोषित कर देता है।',
    'हर्सी और फ्रेड (2017) के अनुसार, यह रणनीति देखने वालों के मन में भारी भ्रम पैदा करती है और वास्तविक पीड़ित को ही गलत ठहरा देती है।',
    [
      'तीन चरण: इंकार (Deny) -> हमला (Attack) -> भूमिका परिवर्तन (Reverse Victim & Offender)',
      'आंसुओं का नाटक: अपराधी सहानुभूति पाने के लिए अत्यधिक आक्रामक रोना-धोना शुरू कर देता है',
      'लिखित प्रमाण का महत्व: इस हेरफेर का एकमात्र तोड़ समयबद्ध और वस्तुनिष्ठ प्रमाण हैं',
      'बहस से बचें: चरित्र पर होने वाले हमलों का भावनात्मक उत्तर न दें',
    ]
  ),
  gu: createLocalizedDARVORecord(
    'gu',
    'ડાર્વો (DARVO): ઇનકાર, હુમલો અને પીડિત-ગુનેગારની ભૂમિકા બદલવી',
    'ડો. જેનિફર ફ્રેડનું સંશોધન: ગુનેગાર પોતે પીડિત બનીને સહાનુભૂતિ મેળવવાની યુક્તિ.',
    'સરળ શબ્દોમાં: ભૂલ સ્વીકારવાને બદલે સામાવાળા પર હુમલો કરવો અને પોતે બિચારો બની જવું.',
    'ડાર્વો યુક્તિનો ઉપયોગ કરીને વાસ્તવિક ગુનેગાર આખી પરિસ્થિતિને પોતાની તરફેણમાં ફેરવી લે છે.',
    'લેખિત પુરાવા અને શાંત સીમાઓ દ્વારા જ આનો સામનો કરી શકાય છે.',
    ['ત્રણ તબક્કા ઓળખો', 'નાટકથી સાવધ રહો', 'પુરાવા જાળવો']
  ),
  mr: createLocalizedDARVORecord(
    'mr',
    'डार्व्हो (DARVO): नकार, हल्ला आणि पीडित-गुन्हेगार भूमिकेची अदलाबदल',
    'डॉ. जेनिफर फ्रेड यांचे संशोधन: दोषी व्यक्ती स्वतःलाच बळी दाखवून कशी सहानुभूती मिळवते.',
    'सोप्या भाषेत: स्वतःची चूक नाकारणे, विचारणाऱ्यावर उलट हल्ला करणे आणि स्वतःच पीडित असल्याचा कांगावा करणे.',
    'या पद्धतीमुळे खरी पीडित व्यक्ती गोंधळात पडते आणि गुन्हेगाराला समाजाची सहानुभूती मिळते.',
    'पुराव्यांच्या आधारे आणि शांत डोक्याने अशा कांगाव्याला उघडे पाडणे आवश्यक आहे.',
    ['कांगावा ओळखा', 'पुराव्यांवर विश्वास ठेवा', 'शांत राहा']
  ),
  bn: createLocalizedDARVORecord(
    'bn',
    'ডারভো (DARVO): অস্বীকার, আক্রমণ এবং শিকার ও অপরাধীর ভূমিকা অদলবদল',
    'ড. জেনিফার ফ্রেডের গবেষণা: অপরাধী কীভাবে নিজের দোষ আড়াল করতে নিজেকে নির্দোষ দাবি করে।',
    'সহজ কথায়: অন্যায় অস্বীকার করা, প্রশ্নকর্তাকে আক্রমণ করা এবং নিজেকে আসল শিকার প্রমাণ করা।',
    'এই ধূর্ত মনস্তাত্ত্বিক কৌশলে প্রকৃত অপরাধী সহানুভূতি আদায় করে নেয়।',
    'বিতর্কে না জড়িয়ে লিখিত তথ্যপ্রমাণের ওপর নির্ভর করাই সঠিক পথ।',
    ['কৌশল চিনুন', 'প্রমাণ সংরক্ষণ করুন', 'বিভ্রান্ত হবেন না']
  ),
  ta: createLocalizedDARVORecord(
    'ta',
    'டார்வோ (DARVO): மறுத்தல், தாக்குதல் மற்றும் பாதிக்கப்பட்டவர்-குற்றவாளி பாத்திரத்தை மாற்றுதல்',
    'டாக்டர் ஜெனிஃபர் ஃப்ரேட் ஆராய்ச்சி: குற்றவாளி தன்னை தியாகியாகக் காட்டி அனுதாபம் பெறுவது எப்படி.',
    'எளிய சொற்களில்: தவறை மறுப்பது, கேள்வி கேட்பவரைத் தாக்குவது மற்றும் தன்னை உண்மையான பாதிக்கப்பட்டவராகக் காட்டுவது.',
    'குற்றவாளி தன் மீதான குற்றச்சாட்டைத் திசைதிருப்ப இந்த உத்தியைப் பயன்படுத்துகிறார்.',
    'உணர்ச்சிவசப்படாமல் எழுத்துப்பூர்வ ஆதாரங்களை முன்வைப்பதே இதற்குச் சிறந்த தீர்வு.',
    ['சூழ்ச்சியை உணருங்கள்', 'ஆதாரங்களை நம்புங்கள்', 'அமைதி காக்கவும்']
  ),
  te: createLocalizedDARVORecord(
    'te',
    'డార్వో (DARVO): నిరాకరణ, దాడి మరియు బాధితుడు-నేరస్థుడి పాత్రలను తారుమారు చేయడం',
    'డాక్టర్ జెన్నిఫర్ ఫ్రేడ్ పరిశోధన: అసలు నేరస్థుడు తానే బాధితుడిగా నటించే మనస్తత్వం.',
    'సులభమైన మాటల్లో: తప్పును అంగీకరించకుండా ఎదురుదాడి చేసి, తానే బాధితుడినని నిరూపించుకోవడం.',
    'ఈ తంత్రం ద్వారా నిజమైన బాధితుడిని దోషిగా నిలబెట్టే ప్రయత్నం చేస్తారు.',
    'ఆధారాలను భద్రపరుచుకుని భావోద్వేగాలకు లోనుకాకుండా ఉండటమే దీనికి మార్గం.',
    ['కుట్రను గుర్తించండి', 'ఆధారాలు ముఖ్యం', 'నిబ్బరంగా ఉండండి']
  ),
  kn: createLocalizedDARVORecord(
    'kn',
    'ಡಾರ್ವೋ (DARVO): ನಿರಾಕರಣೆ, ದಾಳಿ ಮತ್ತು ಸಂತ್ರಸ್ತ-ಅಪರಾಧಿ ಪಾತ್ರಗಳ ಅದಲು-ಬದಲು',
    'ಡಾ. ಜೆನ್ನಿಫರ್ ಫ್ರೇಡ್ ಸಂಶೋಧನೆ: ತಪ್ಪಿತಸ್ಥನು ತಾನೇ ಬಲಿಪಶುವೆಂದು ತೋರಿಸಿಕೊಳ್ಳುವ ತಂತ್ರ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ತಪ್ಪನ್ನು ನಿರಾಕರಿಸುವುದು, ಪ್ರಶ್ನಿಸಿದವರ ಮೇಲೆ ದಾಳಿ ಮಾಡುವುದು ಮತ್ತು ತಾನೇ ಸಂತ್ರಸ್ತನೆಂದು ಬಿಂಬಿಸುವುದು.',
    'ಈ ಜಾಣ್ಮೆಯಿಂದ ನಿಜವಾದ ಸಂತ್ರಸ್ತನೇ ತಪ್ಪಿತಸ್ಥನಾಗಿ ಕಾಣುವಂತೆ ಮಾಡಲಾಗುತ್ತದೆ.',
    'ದಾಖಲೆಗಳ ಆಧಾರದ ಮೇಲೆ ಶಾಂತವಾಗಿ ಎದುರಿಸುವುದು ಸೂಕ್ತ.',
    ['ತಂತ್ರ ಗುರುತಿಸಿ', 'ದಾಖಲೆಗಳಿಗೆ ಒತ್ತು ನೀಡಿ', 'ಸಂಯಮ ಕಾಪಾಡಿಕೊಳ್ಳಿ']
  ),
  ml: createLocalizedDARVORecord(
    'ml',
    'ഡാർവോ (DARVO): നിഷേധം, ആക്രമണം, ഇരയും വേട്ടക്കാരനും തമ്മിലുള്ള വേഷംമാറൽ',
    'ഡോ. ജെന്നിഫർ ഫ്രെയ്ഡ് പഠനങ്ങൾ: കുറ്റവാളി സ്വയം ഇരയായി നടിച്ച് സഹതാപം നേടുന്ന വിധം.',
    'ലളിതമായി പറഞ്ഞാൽ: കുറ്റം നിഷേധിക്കുക, ചോദിക്കുന്നയാളെ ആക്രമിക്കുക, സ്വയം ഇരയാണെന്ന് വരുത്തിത്തീർക്കുക.',
    'യഥാർത്ഥ ഇരയെ അക്രമിയാക്കി ചിത്രീകരിക്കാൻ ഉപയോഗിക്കുന്ന കൊടും ചതിയാണിത്.',
    'രേഖാമൂലമുള്ള തെളിവുകൾ വഴി ഇതിനെ പ്രതിരോധിക്കുക.',
    ['ചതിക്കുഴി തിരിച്ചറിയുക', 'തെളിവുകൾ ശേഖരിക്കുക', 'ശാന്തത പാലിക്കുക']
  ),
  pa: createLocalizedDARVORecord(
    'pa',
    'ਡਾਰਵੋ (DARVO): ਇਨਕਾਰ, ਹਮਲਾ ਅਤੇ ਪੀੜਤ-ਦੋਸ਼ੀ ਦੀ ਭੂਮਿਕਾ ਉਲਟਾਉਣਾ',
    'ਡਾ. ਜੈਨੀਫ਼ਰ ਫ਼ਰੇਡ ਦੀ ਰਿਸਰਚ: ਦੋਸ਼ੀ ਕਿਵੇਂ ਖ਼ੁਦ ਨੂੰ ਮਜ਼ਲੂਮ ਸਾਬਤ ਕਰਕੇ ਹਮਦਰਦੀ ਬਟੋਰਦਾ ਹੈ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਗਲਤੀ ਤੋਂ ਮੁੱਕਰਨਾ, ਪੁੱਛਣ ਵਾਲੇ ਤੇ ਹਮਲਾ ਕਰਨਾ ਅਤੇ ਖ਼ੁਦ ਨੂੰ ਪੀੜਤ ਬਣਾ ਕੇ ਪੇਸ਼ ਕਰਨਾ।',
    'ਇਹ ਚਾਲ ਅਸਲ ਪੀੜਤ ਨੂੰ ਹੀ ਕਟਹਿਰੇ ਵਿੱਚ ਖੜ੍ਹਾ ਕਰ ਦਿੰਦੀ ਹੈ।',
    'ਲਿਖਤੀ ਸਬੂਤਾਂ ਦੇ ਸਹਾਰੇ ਸ਼ਾਂਤੀ ਨਾਲ ਇਸ ਦਾ ਮੁਕਾਬਲਾ ਕਰੋ।',
    ['ਚਾਲ ਪਛਾਣੋ', 'ਸਬੂਤ ਸਾਂਭੋ', 'ਭਾਵੁਕ ਨਾ ਹੋਵੋ']
  ),
  ur: createLocalizedDARVORecord(
    'ur',
    'ڈاروو (DARVO): انکار، حملہ اور مظلوم و ظالم کا کردار الٹ دینا',
    'ڈاکٹر جینیفر فریڈ کی تحقیق: اصل مجرم کس طرح خود مظلوم بن کر ہمدردیاں سمیٹتا ہے۔',
    'آسان الفاظ میں: غلطی سے مکر جانا، سوال کرنے والے پر چڑھائی کرنا اور خود کو مظلوم ثابت کر دینا۔',
    'اس حربے کے ذریعے اصل ظالم خود کو بے بس ظاہر کر کے کارروائی سے بچ جاتا ہے۔',
    'جذبات میں آئے بغیر دستاویزی ثبوتوں کی بنیاد پر نمٹیں۔',
    ['حربہ پہچانیں', 'ثبوت محفوظ رکھیں', 'پرسکون رہیں']
  ),
  or: createLocalizedDARVORecord(
    'or',
    'ଡାର୍ଭୋ (DARVO): ଅସ୍ୱୀକାର, ଆକ୍ରମଣ ଏବଂ ପୀଡ଼ିତ-ଅପରାଧୀ ଭୂମିକାର ପରିବର୍ତ୍ତନ',
    'ଡ. ଜେନିଫର୍ ଫ୍ରେଡ୍‌ଙ୍କ ଗବେଷଣା: ଅପରାଧୀ କିପରି ନିଜକୁ ପୀଡ଼ିତ ସଜାଇ ସହାନୁଭୂତି ହାସଲ କରେ।',
    'ସହଜ ଭାଷାରେ: ଭୁଲ୍ ଅସ୍ୱୀକାର କରିବା, ପ୍ରଶ୍ନକର୍ତ୍ତାଙ୍କୁ ଆକ୍ରମଣ କରିବା ଏବଂ ନିଜେ ପୀଡ଼ିତ ବୋଲି ପ୍ରଚାର କରିବା।',
    'ଏହାଦ୍ୱାରା ପ୍ରକୃତ ପୀଡ଼ିତ ହିଁ ଅପରାଧୀ ଭଳି ଦଣ୍ଡ ପାଏ।',
    'ପ୍ରମାଣ ସଂଗ୍ରହ କରି ଶାନ୍ତ ଭାବରେ ଏହାର ମୁକାବିଲା କରନ୍ତୁ।',
    ['ଚାଲାକି ଚିହ୍ନନ୍ତୁ', 'ପ୍ରମାଣକୁ ଗୁରୁତ୍ୱ ଦିଅନ୍ତୁ', 'ଶାନ୍ତ ରୁହନ୍ତୁ']
  ),
  as: createLocalizedDARVORecord(
    'as',
    'ডাৰ্ভো (DARVO): অস্বীকাৰ, আক্ৰমণ আৰু ভুক্তভোগী-অপৰাধীৰ ভূমিকা ওলোটোৱা',
    'ড° জেনিফাৰ ফ্ৰেডৰ গৱেষণা: অপৰাধীয়ে কেনেকৈ নিজকে বলি সজাই সহানুভূতি আদায় কৰে।',
    'সহজ কথাত: দোষ অস্বীকাৰ কৰা, প্ৰশ্ন কৰোঁতাক আক্ৰমণ কৰা আৰু নিজকে প্ৰকৃত ভুক্তভোগী সজোৱা।',
    'এই চতুৰ কৌশলেৰে প্ৰকৃত ভুক্তভোগীক সমাজৰ চকুত দোষী সজোৱা হয়।',
    'তথ্য আৰু প্ৰমাণৰ ভিত্তিত শান্তভাৱে নিজৰ স্থিতি ৰক্ষা কৰক।',
    ['কৌশল বুজি লওক', 'প্ৰমাণ মজবুত কৰক', 'ধৈৰ্য্য ধৰক']
  ),
};
