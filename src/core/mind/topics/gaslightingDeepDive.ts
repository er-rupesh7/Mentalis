import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 15: Gaslighting Dynamics
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Stern (2007): The Gaslight Effect: How to Spot and Survive the Hidden Manipulation Others Use to Control Your Life
 * - Sweet (2019): The Sociology of Gaslighting. American Sociological Review, 84(5), 851–875.
 * - Hamilton (1938): Gas Light (The Original Psychological Stage Play)
 * - Stark (2007): Coercive Control: How Men Entrap Women in Personal Life
 */

export const TOPIC_GASLIGHTING_DYNAMICS_EN: MindTopicDetail = {
  id: 'gaslighting_dynamics',
  categoryId: 'manipulation_awareness',
  slug: 'gaslighting-dynamics',
  difficulty: 'advanced',
  estimatedReadingMinutes: 8,
  scientificConsensusTier: 'established',
  sortWeight: 15,
  viewCount: 9240,
  shareCount: 820,
  bookmarkCount: 1680,
  title: 'Gaslighting Dynamics: The Systematic Erosion of Reality',
  subtitle: 'Beyond pop psychology: Robin Stern\'s 3 stages, epistemic injustice, and reclaiming your cognitive sovereignty.',
  shortDescription: 'A covert form of psychological abuse where a perpetrator systematically undermines a victim\'s perception of reality, memory, or sanity to enforce total psychological dependence.',
  oneLineExplanation: 'In simple terms: Slowly making you doubt your own eyes, memory, and sanity until you rely on their version of reality.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'Gaslighting is not someone simply disagreeing with you or forgetting an anniversary. It is a slow, chronic campaign of reality alteration. The perpetrator repeatedly insists: "That conversation never happened," "You imagined it," or "You are losing your mind." Over months or years, the victim’s confidence in their own sensory perceptions, judgment, and memory is systematically dismantled, leaving them utterly dependent on the abuser to tell them what is real.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Dr. Robin Stern (2007) of the Yale Center for Emotional Intelligence identified that gaslighting is a relational dance that requires two participants: a "Gaslighter" who creates the narrative to establish dominance, and a "Gaslightee" who permits the distortion because they crave the gaslighter\'s approval and dread their disapproval. Sociologist Paige Sweet (2019) demonstrated that gaslighting is inherently structural: abusers weaponize gender stereotypes, mental health stigmas ("she is crazy and emotional"), and institutional power to invalidate the victim’s epistemic agency.',
  summary60s: 'Stern outlines 3 distinct clinical stages of the Gaslight Effect: (1) DISBELIEF: The victim notices bizarre contradictions ("Did you really say that?") but brushes them off as a misunderstanding; (2) DEFENSE: The victim spends hours obsessively debating, collecting text receipts, and trying to convince the gaslighter that they are not crazy; (3) DEPRESSION: The victim gives up entirely, accepts that their memory is defective, stops trusting their own senses, and consults the gaslighter before making even minor everyday decisions.',

  quickTakeaways: [
    'Disagreement is NOT Gaslighting: Two people remembering an event differently is human fallibility; gaslighting is systematic power-driven denial',
    'The 3 Stages: Disbelief -> Exhausting Defense -> Total Depressive Surrender',
    'Epistemic Invalidation: The goal is not winning the argument; the goal is destroying your confidence in your own ability to perceive reality',
    'The Reality Anchor Defense: Stop trying to convince the gaslighter to agree with you; write down your truth and anchor to objective external records',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Cognitive dissonance and epistemic vulnerability. When someone we love, admire, or depend upon for survival insists that our perception is wrong, our brain faces an agonizing choice: either believe that our intimate partner is lying/cruel, or believe that our own memory is faulty. Because admitting betrayal is terrifying, the brain chooses to doubt itself.',
  evolutionaryMechanism: 'Social consensus reality: humans evolved to rely heavily on tribal consensus to determine safety. When authority figures or intimate partners challenge our perceptions, our neural circuits default to social agreement to preserve tribal belonging.',

  // SECTION E — WHY DO GASLIGHTERS USE IT?
  howItWorks: 'The gaslighting toolkit includes: (1) Countering (questioning memory: "Your memory has always been terrible"); (2) Withholding (refusing to listen: "I am not listening to this nonsense again"); (3) Trivializing (invalidating feelings: "You are getting hysterical over nothing"); (4) Forgetting/Denial ("I never promised that, you dreamed it up"); (5) Discrediting (telling others: "Be gentle with her, she has been very unstable lately").',
  whereYouEncounterIt: 'Intimate relationships, corporate toxic management (denying agreed bonus terms), abusive family dynamics, and high-control religious groups.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Honest Memory Disagreement vs. Chronic Gaslighting',
    description: 'How to distinguish normal human memory limits from psychological reality control.',
    analogySideA: {
      label: 'Honest Memory Conflict (Mutual Respect)',
      detail: '"I honestly remember telling you 6 PM, but I might have made a mistake. Let me check my sent messages so we know for sure."',
    },
    analogySideB: {
      label: 'Chronic Gaslighting (Reality Destruction)',
      detail: '"You are delusional. You always invent these crazy stories. Everyone knows your memory is completely shot. You need professional help."',
    },
  },

  researchSummary: 'Paige Sweet’s qualitative sociological study (2019, American Sociological Review) of domestic abuse survivors proved that gaslighting works not just through interpersonal trickery, but by weaponizing social inequalities—such as convincing victims that their genuine trauma reactions are signs of psychiatric borderline personality or hysteria.',
  limitationsAndControversies: 'The term "gaslighting" has become dangerously overused in modern internet culture, where it is often incorrectly applied to any simple disagreement, difference in opinion, or someone having an inaccurate recollection. True clinical gaslighting requires a chronic power imbalance and an intentional erosion of another person\'s reality testing.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Constantly second-guessing yourself and asking: "Am I being way too sensitive or crazy?"',
    'Writing down voice notes or daily logs just to prove to yourself that an event actually took place',
    'Apologizing constantly throughout the day to your partner or boss without knowing what you did wrong',
    'Withholding simple relationship information from friends and family because you are embarrassed to explain their bizarre behavior',
    'Feeling like you used to be a confident, vibrant, decisive person, but now feel confused, weak, and intellectually incompetent',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_gaslight_01',
      scenarioType: 'indian_context',
      title: 'The Relocating Joint Family Promise',
      vignette: 'Before marriage, Rohit and his parents explicitly agreed with Divya that after one year of living in the joint family home in Pune, Rohit and Divya would move into their own apartment nearby so Divya could be close to her hospital residency. At the 14-month mark, Divya brings up apartment listings. Rohit stares at her with a look of bewildered concern: "Divya, what are you talking about? We never agreed to move out. Why would I abandon my parents? You are completely imagining this conversation. You always create these bizarre family dramas when you get stressed at work. My mother was right; your residency is making you mentally unstable."',
      breakdownAnalysis: 'Rohit executes clinical gaslighting: flat denial of a foundational agreement combined with pathologizing Divya\'s mental health ("you are imagining it, your job is making you unstable"). Divya begins searching her old diaries, weeping in the bathroom, wondering if she had a hallucination.',
      recommendedAction: 'Divya must recognize that she is not crazy; she was manipulated. Stop debating Rohit. Locate her pre-marital emails and WhatsApp chats where the move was discussed to confirm her reality for herself. Refuse to let him pathologize her competence, and seek an independent therapist.',
    },
  ],

  examples: [
    {
      id: 'ex_gaslight_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Phantom Promotion Promise',
      description: 'A manager verbally promises an analyst a 25% salary bump and senior title upon completing a major product migration. When the migration succeeds, the manager says: "I never promised a 25% raise; that is financially absurd. Why would you fabricate that? Your expectations are completely detached from reality."',
      takeaway: 'Verbal promises in corporate life are prime targets for gaslighting; always secure compensation terms in formal writing.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'To break the gaslighting trance, you must abandon the desire to make the gaslighter admit the truth. A gaslighter will NEVER say: "You caught me, my bad." The moment you stop needing their agreement, their power over your reality collapses. Stand in your truth: "I know what I experienced, I know what was agreed, and I will not be debating my sanity with you."',
  psychologicalDefenses: [
    'The "Opt-Out of Debate" Boundary: Never spend two hours arguing over what was said yesterday. State: "My memory of that event is clear. We remember it differently, and I am not debating it"',
    'Independent Reality Anchoring: Keep a private, password-protected journal where you record factual events, dates, and quotes immediately after they occur',
    'Break the Approval Addiction: Recognize that you only doubt yourself because you are desperately craving their approval; learn to validate your own senses',
    'Consult Outside Sanity Checks: Confide in a trusted friend or licensed therapist who has zero ties to the gaslighter',
  ],

  commonMisconceptions: [
    {
      misconception: 'If I just show them the text messages or proof, they will realize they were wrong and apologize.',
      reality: 'Showing proof to a dedicated gaslighter will only cause them to escalate into DARVO: they will accuse you of spying, invade your privacy, or claim the screenshot was doctored.',
    },
  ],

  reflectionPrompt: 'Are you currently questioning your own sanity, memory, or emotional reactions because someone in your life repeatedly insists that your reality is wrong?',

  interactiveScenario: {
    id: 'interactive_gaslight_01',
    topicId: 'gaslighting_dynamics',
    scenarioTitle: 'The Vanishing Agreement',
    scenarioDescription: 'You and your partner agreed on Sunday that they would handle the children\'s school tuition fee payment by Wednesday. On Thursday, the school calls you saying the fees are overdue. When you ask your partner why they didn\'t pay it, they look shocked and say: "What are you talking about? You specifically said YOU were going to pay it! You are always forgetting things and blaming me. You need to see a neurologist."',
    vignetteSourceType: 'family_relationships',
    options: [
      {
        id: 'opt_1',
        text: 'Panic, burst into tears, and make an appointment with a neurologist because maybe your memory really is deteriorating.',
        isCorrect: false,
        cognitiveTakeaway: 'Stage 3 gaslighting surrender! You accept their narrative and pathologize your own healthy cognitive functioning.',
      },
      {
        id: 'opt_2',
        text: 'Stand in your reality calmly: "I am not seeing a neurologist. We agreed on Sunday that you would pay it. I will pay the school fees right now so the kids are fine, but do not insult my memory or tell me I am losing my mind."',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of gaslighting defense! You protect your epistemic sovereignty, handle the operational task, and shut down their attempt to pathologize you.',
      },
      {
        id: 'opt_3',
        text: 'Argue with them for 4 hours until 3:00 AM demanding that they admit they agreed on Sunday.',
        isCorrect: false,
        cognitiveTakeaway: 'Stage 2 gaslighting trap! You waste immense cognitive energy seeking validation from someone dedicated to denying your reality.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_gaslight_01',
      questionType: 'multiple_choice',
      prompt: 'According to Dr. Robin Stern\'s clinical framework, what is the ultimate goal of chronic gaslighting in an interpersonal relationship?',
      options: [
        { id: 'opt_a', text: 'To improve the victim\'s analytical cognitive performance', isCorrect: false },
        { id: 'opt_b', text: 'To erode the victim\'s confidence in their own sensory perceptions, memory, and judgment, creating total psychological dependence on the abuser', isCorrect: true, feedbackText: 'Correct! Gaslighting dismantles the victim\'s epistemic agency so that the abuser becomes the sole arbiter of truth.' },
        { id: 'opt_c', text: 'To reach a mutual compromise in a difficult financial dispute', isCorrect: false },
      ],
      cognitiveTakeaway: 'Gaslighting is the systematic erosion of reality testing to enforce dependency.',
    },
  ],

  references: [
    {
      citation: 'Stern, R. (2007). The gaslight effect: How to spot and survive the hidden manipulation others use to control your life. Morgan Road Books.',
      doiOrUrl: 'https://doi.org/10.1037/e612342011-004',
      relevance: 'The foundational clinical psychology text outlining the three stages and relational dynamics of gaslighting.',
      displayOrder: 1,
    },
    {
      citation: 'Sweet, P. L. (2019). The sociology of gaslighting. American Sociological Review, 84(5), 851–875.',
      doiOrUrl: 'https://doi.org/10.1177/0003122419874843',
      relevance: 'Groundbreaking structural analysis of how gaslighting operates through social inequality, gender stereotypes, and epistemic injustice.',
      displayOrder: 2,
    },
  ],

  tags: ['Manipulation Awareness', 'Gaslighting', 'Robin Stern', 'Psychological Abuse', 'Reality Testing', 'Epistemic Injustice'],
  relatedTopics: [
    { topicId: 'darvo_pattern', slug: 'darvo-pattern', title: 'DARVO Pattern', relationshipType: 'amplified_by' },
    { topicId: 'blame_shifting', slug: 'blame-shifting', title: 'Blame Shifting', relationshipType: 'amplified_by' },
    { topicId: 'healthy_boundaries', slug: 'healthy-boundaries', title: 'Healthy Boundaries', relationshipType: 'counteracted_by' },
  ],
  seoTitle: 'Gaslighting Dynamics: The Psychology of Reality Erosion | Mentalab Mind',
  seoDescription: 'Master the clinical psychology of Gaslighting through Robin Stern & Paige Sweet. Learn the 3 stages, how to spot reality erosion, and reclaim your cognitive sovereignty.',
  canonicalUrl: '/mind/manipulation-awareness/gaslighting-dynamics',
  ogImageUrl: '/images/mind/gaslighting-dynamics.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Gaslighting represents a coercive control tactic aimed at dismantling the victim\'s epistemic agency and self-trust through persistent reality invalidation.',
};

export const TOPIC_GASLIGHTING_DYNAMICS_HINGLISH: MindTopicDetail = {
  ...TOPIC_GASLIGHTING_DYNAMICS_EN,
  title: 'Gaslighting Dynamics: Apni Hi Aankhon, Memory Aur Dimaag Par Shaq Karwane Ka Zeher',
  subtitle: 'Dr. Robin Stern ka Gaslight Effect: Sachai ko tod-marod kar insaan ko pagal saabit karne ki psychology.',
  shortDescription: 'Ek aisi khatarnak manipulation technique jisme samne wala aapki memory, soch aur reality ko itna challenge karta hai ki aakhir me aapko lagne lagta hai ki aap pagal ho rahe hain.',
  oneLineExplanation: 'Simple shabdon me: Aapko itna confuse kar dena ki aap apni hi memory aur sanity par bharosa karna band kar dein.',

  summary30s: 'Gaslighting sirf ek aam behes ya date bhool jana nahi hai. Yeh ek slow aur planned psychological humla hai. Manipulator bar-bar kehta hai: "Aisi koi baat hi nahi hui thi," "Tumhara dimaag kharab ho gaya hai," "Tum hallucinations dekh rahi ho." Dheere-dheere victim ko apni hi aankhon aur memory par shaq hone lagta hai, aur wo har chhota decision lene ke liye manipulator par depend ho jata hai.',
  coreConcept: 'Dr. Robin Stern (2007) ke mutabiq Gaslighting ke teen stages hote hain: (1) Disbelief—shuru me victim ko ajeeb lagta hai par wo sochta hai misunderstanding hai; (2) Defense—victim ghanton tak purane screenshots aur saboot dikha kar prove karta hai ki wo pagal nahi hai; (3) Depression—victim haar maan leta hai aur sochne lagta hai ki sach me uska dimaag kamzor hai.',
  summary60s: 'Sociologist Paige Sweet (2019) ne prove kiya ki gaslighting me log aksar bolte hain: "Tum bohot emotional aur pagal ho." Rohit ne Divya se shaadi se pehle alag flat lene ka waada kiya tha. 1 saal baad jab Divya ne flat ki baat nikali, toh Rohit bola: "Aisa koi waada nahi hua tha. Tumhara dimaag kharab hai, hospital ke kaam ne tumhe pagal bana diya hai." Divya bathroom me ro-ro kar apni diary check karne lagi ki kya sach me wo bimaar hai.',

  quickTakeaways: [
    'Normal Disagreement vs. Gaslighting: Galti bhool jana alag hai; jaanbujhkar samne wale ko pagal saabit karna gaslighting hai',
    '3 Stages: Hairani -> Safaiyan dena -> Haar maan kar khud par shaq karna',
    'Maafi ki umeed chhod dijiye: Gaslighter kabhi nahi manega ki wo jhooth bol raha tha',
    'Reality Anchor: Diary likhiye aur screenshots rakhiye; unse behes me energy barbaad mat kijiye',
  ],

  whyItHappens: 'Victim manipulator par trust karta hai. Dimaag kehta hai: "Mera partner mujhse jhooth kaise bol sakta hai? Shayad meri hi memory me koi problem hai."',
  evolutionaryMechanism: 'Group ke leaders aur elders ki baat par vishwas karna primitive humans ke survival ka rule tha.',

  howItWorks: 'School fees bharni thi. Partner bhool gaya aur ulta aap par chilla diya: "Tumne bola tha tum bharogi! Tumhara dimaag weak hai, kisi doctor ko dikhao."',
  howToRespond: 'Unse approval maangna band kijiye. Kahiye: "Mujhe pata hai ki hamari kya baat hui thi. Main tumse apni sanity par behes nahi karunga."',

  reflectionPrompt: 'Kya aapki life me koi aisa hai jisse baat karne ke baad aapko lagta hai ki aap overreact kar rahe hain ya aapka dimaag theek nahi hai?',
  seoTitle: 'Gaslighting Kya Hai? Reality Distortion Se Khud Ko Kaise Bachayein | Mentalab Mind',
  seoDescription: 'Janiye Gaslighting ki geheri psychology. Dr. Robin Stern ki research aur reality testing ko reclaim karne ke evidence-based tareeqe.',
  canonicalUrl: '/mind/manipulation-awareness/gaslighting-dynamics',
};

function createLocalizedGaslightRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_GASLIGHTING_DYNAMICS_EN,
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

export const TOPIC_GASLIGHTING_DYNAMICS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_GASLIGHTING_DYNAMICS_EN,
  hinglish: TOPIC_GASLIGHTING_DYNAMICS_HINGLISH,
  hi: createLocalizedGaslightRecord(
    'hi',
    'गैसलाइटिंग की वास्तविकता (Gaslighting Dynamics): सत्य और स्मृति पर संदेह का मनोवैज्ञानिक षड्यंत्र',
    'रॉबिन स्टर्न का गैसलाइट प्रभाव: व्यक्ति की वास्तविकता और मानसिक संतुलन को धीरे-धीरे नष्ट करने का विज्ञान।',
    'सरल शब्दों में: किसी को इतना भ्रमित कर देना कि वह अपनी ही आंखों, याददाश्त और मानसिक संतुलन पर अविश्वास करने लगे।',
    'गैसलाइटिंग तब होती है जब कोई व्यक्ति दूसरे की स्मृति, धारणा और विवेक पर लगातार सवाल उठाकर उसे पूरी तरह अपने नियंत्रण में कर लेता है।',
    'रॉबिन स्टर्न (2007) और पेज स्वीट (2019) के अनुसार, यह भावनात्मक प्रभुत्व स्थापित करने का सबसे खतरनाक साधन है।',
    [
      'मतभेद बनाम गैसलाइटिंग: भूलना मानवीय भूल है, लेकिन सच्चाई को मिटा देना गैसलाइटिंग है',
      'तीन चरण: अविश्वास -> अंतहीन बहस -> पूर्ण मानसिक समर्पण',
      'स्वीकृति का त्याग: हेरफेर करने वाले से सत्य स्वीकार कराने की कोशिश छोड़ दें',
      'वास्तविकता का संबल: अपनी सच्चाई को डायरी में दर्ज करें और अपने अनुभवों पर भरोसा रखें',
    ]
  ),
  gu: createLocalizedGaslightRecord(
    'gu',
    'ગેસલાઇટિંગ ડાયનેમિક્સ: પોતાની સ્મૃતિ અને સત્યતા પર શંકા કરાવવાની જાળ',
    'રોબિન સ્ટર્નનું સંશોધન: વ્યક્તિની માનસિક સ્થિરતાને ધીમે ધીમે ખતમ કરવાનું મનોવિજ્ઞાન.',
    'સરળ શબ્દોમાં: સામેવાળાને એટલો ભ્રમિત કરી દેવો કે તે પોતાની યાદશક્તિ પર શંકા કરવા લાગે.',
    'ગેસલાઇટિંગ દ્વારા વ્યક્તિ સામાવાળાને માનસિક રીતે અસ્થિર સાબિત કરીને સંપૂર્ણ કાબૂ મેળવે છે.',
    'પોતાના અનુભવ પર વિશ્વાસ રાખીને શાંતિથી સત્ય પર અડગ રહેવું જોઈએ.',
    ['ભ્રમણાથી બચો', 'પોતાના પર ભરોસો રાખો', 'સત્ય સ્વીકારો']
  ),
  mr: createLocalizedGaslightRecord(
    'mr',
    'गॅसलाइटिंग डायनॅमिक्स: स्वतःच्या स्मरणशक्ती आणि मानसिक संतुलनावर शंका घेण्यास भाग पाडणे',
    'रॉबिन स्टर्न यांचा गॅसलाइट इफेक्ट: वास्तवाचा विपर्यास करून समोरच्याला वेडे ठरवण्याचे शास्त्र.',
    'सोप्या भाषेत: समोरच्याला इतके गोंधळात टाकणे की त्याला स्वतःच्याच डोळ्यांवर आणि स्मरणशक्तीवर अविश्वास वाटू लागतो.',
    'गॅसलाइटिंगमध्ये सतत "असे काही घडलेच नाही" असे सांगून समोरच्याचा आत्मविश्वास खचवला जातो.',
    'स्वतःच्या वास्तवावर ठाम राहून अशा छळाला वेळीच पूर्णविराम देणे गरजेचे आहे.',
    ['गोंधळात पडू नका', 'स्वतःवर विश्वास ठेवा', 'पुरावे लक्षात ठेवा']
  ),
  bn: createLocalizedGaslightRecord(
    'bn',
    'গ্যাসলাইটিং ডায়নামিক্স: নিজের স্মৃতি ও মানসিক স্থিতিশীলতার ওপর সন্দেহের বিষবাষ্প',
    'রবিন স্টার্নের গ্যাসলাইট প্রভাব: বাস্তবতাকে অস্বীকার করে অপরকে মানসিক বিকারগ্রস্ত প্রমাণের কৌশল।',
    'সহজ কথায়: কাউকে এতটাই বিভ্রান্ত করা যে সে নিজের চোখ, কান ও স্মৃতির ওপর ভরসা হারিয়ে ফেলে।',
    'ধীরে ধীরে মানুষের নিজস্ব আত্মবিশ্বাস ভেঙে দিয়ে তাকে পরনির্ভরশীল করাই এর উদ্দেশ্য।',
    'তর্কে না জড়িয়ে নিজের অভিজ্ঞতার সত্যতায় অবিচল থাকুন।',
    ['বিভ্রান্তি দূর করুন', 'নিজের ওপর ভরসা রাখুন', 'মানসিক শক্তি বজায় রাখুন']
  ),
  ta: createLocalizedGaslightRecord(
    'ta',
    'கேஸ்லைட்டிங் இயக்கவியல்: தனது சொந்த நினைவாற்றல் மற்றும் யதார்த்தத்தை சந்தேகிக்க வைக்கும் பொறி',
    'ராபின் ஸ்டெர்ன் ஆராய்ச்சி: ஒருவரின் மன சமநிலையை சீர்குலைத்து அடிமையாக்கும் உளவியல்.',
    'எளிய சொற்களில்: ஒருவரை குழப்பி, தனது சொந்த நினைவாற்றலையும் புத்திசாலித்தனத்தையும் சந்தேகிக்க வைப்பது.',
    'யதார்த்தத்தை மறுப்பதன் மூலம் ஒருவரை முழுமையாகக் கட்டுப்படுத்த இந்த உத்தி பயன்படுகிறது.',
    'உண்மையை நிரூபிக்க வாதிடாமல் உங்கள் சுய அனுபவத்தில் உறுதியாக இருங்கள்.',
    ['குழப்பத்தை தவிருங்கள்', 'சுயநம்பிக்கை வேண்டும்', 'உறுதியாக இருங்கள்']
  ),
  te: createLocalizedGaslightRecord(
    'te',
    'గ్యాస్‌లైటింగ్ డైనమిక్స్: సొంత జ్ఞాపకశక్తి మరియు నిజాయితీపై అనుమానం కలిగించే కుట్ర',
    'రాబిన్ స్టెర్న్ పరిశోధన: వ్యక్తి మానసిక స్థిరత్వాన్ని నాశనం చేసి లొంగదీసుకునే క్రూరమైన తంత్రం.',
    'సులభమైన మాటల్లో: ఒకరిని ఎంతగానో గందరగోళపరిచి, వారి సొంత జ్ఞాపకాలపైనే వారికి అనుమానం కలిగించడం.',
    'నిజాన్ని దాచిపెట్టి ఎదుటివారిని పిచ్చివారిగా చిత్రీకరించే ప్రయత్నమిది.',
    'మీ అనుభవాలపై నమ్మకం ఉంచి ధైర్యంగా నిలబడండి.',
    ['గందరగోళాన్ని ఆపండి', 'మిమ్మల్ని మీరు నమ్మండి', 'స్థిరంగా ఉండండి']
  ),
  kn: createLocalizedGaslightRecord(
    'kn',
    'ಗ್ಯಾಸ್‌ಲೈಟಿಂಗ್ ಡೈನಾಮಿಕ್ಸ್: ಸ್ವಂತ ಸ್ಮರಣಶಕ್ತಿ ಮತ್ತು ವಾಸ್ತವದ ಮೇಲೆ ಅನುಮಾನ ಹುಟ್ಟಿಸುವ ತಂತ್ರ',
    'ರಾಬಿನ್ ಸ್ಟರ್ನ್ ಸಂಶೋಧನೆ: ವ್ಯಕ್ತಿಯ ಮಾನಸಿಕ ಸ್ಥಿರತೆಯನ್ನು ಕುಗ್ಗಿಸಿ ನಿಯಂತ್ರಣ ಸಾಧಿಸುವ ವಿಜ್ಞಾನ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಒಬ್ಬರನ್ನು ಅತಿಯಾಗಿ ಗೊಂದಲಕ್ಕೀಡುಮಾಡಿ ಅವರ ಸ್ವಂತ ನೆನಪಿನ ಮೇಲೆಯೇ ಅನುಮಾನ ಬರುವಂತೆ ಮಾಡುವುದು.',
    'ವಾಸ್ತವವನ್ನು ನಿರಾಕರಿಸಿ ಇನ್ನೊಬ್ಬರನ್ನು ನಿಷ್ಪ್ರಯೋಜಕರನ್ನಾಗಿ ಮಾಡುವುದೇ ಇದರ ಹುನ್ನಾರ.',
    'ನಿಮ್ಮ ಅನುಭವಗಳನ್ನು ನಂಬಿ ದೃಢವಾಗಿರಿ.',
    ['ಗೊಂದಲ ಬೇಡ', 'ಸ್ವಯಂ ನಂಬಿಕೆ ಇರಲಿ', 'ದೃಢವಾಗಿ ನಿಲ್ಲಿ']
  ),
  ml: createLocalizedGaslightRecord(
    'ml',
    'ഗ്യാസ്‌ലൈറ്റിംഗ് ഡൈനാമിക്സ്: സ്വന്തം ഓർമ്മയിലും മാനസികാരോഗ്യത്തിലും സംശയം ജനിപ്പിക്കുന്ന കെണി',
    'റോബിൻ സ്റ്റേൺ ഗവേഷണം: യാഥാർത്ഥ്യത്തെ ഇല്ലാതാക്കി മറ്റൊരാളെ പൂർണ്ണമായി നിയന്ത്രിക്കുന്ന രീതി.',
    'ലളിതമായി പറഞ്ഞാൽ: ഒരാളുടെ സ്വന്തം ഓർമ്മകളിലും വിവേകത്തിലും അവർക്ക് തന്നെ സംശയം തോന്നിപ്പിക്കുക.',
    'മറ്റുള്ളവരുടെ ആത്മവിശ്വാസം തകർത്ത് അടിമപ്പെടുത്തുന്ന രീതിയാണിത്.',
    'സ്വന്തം സത്യത്തിൽ വിശ്വസിച്ച് ഉറച്ചുനിൽക്കുക.',
    ['ആശയക്കുഴപ്പം ഒഴിവാക്കുക', 'സ്വയം വിശ്വസിക്കുക', 'യാഥാർത്ഥ്യം മുറുകെപ്പിടിക്കുക']
  ),
  pa: createLocalizedGaslightRecord(
    'pa',
    'ਗੈਸਲਾਈਟਿੰਗ ਡਾਇਨਾਮਿਕਸ: ਆਪਣੀ ਹੀ ਯਾਦਦਾਸ਼ਤ ਅਤੇ ਸੱਚਾਈ ਤੇ ਸ਼ੱਕ ਕਰਨ ਦਾ ਜਾਲ',
    'ਰੌਬਿਨ ਸਟਰਨ ਦਾ ਗੈਸਲਾਈਟ ਅਸਰ: ਇਨਸਾਨ ਨੂੰ ਪਾਗਲ ਸਾਬਤ ਕਰਕੇ ਕਾਬੂ ਕਰਨ ਦੀ ਮਾਨਸਿਕਤਾ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਸਾਹਮਣੇ ਵਾਲੇ ਨੂੰ ਇੰਨਾ ਉਲਝਾ ਦੇਣਾ ਕਿ ਉਹ ਆਪਣੀਆਂ ਅੱਖਾਂ ਅਤੇ ਦਿਮਾਗ ਤੇ ਵੀ ਭਰੋਸਾ ਕਰਨਾ ਛੱਡ ਦੇਵੇ।',
    'ਇਹ ਤਰੀਕਾ ਇਨਸਾਨ ਦੀ ਮਾਨਸਿਕ ਆਜ਼ਾਦੀ ਨੂੰ ਖੋਹ ਲੈਂਦਾ ਹੈ।',
    'ਆਪਣੇ ਅਨੁਭਵ ਤੇ ਭਰੋਸਾ ਰੱਖ ਕੇ ਦ੍ਰਿੜਤਾ ਨਾਲ ਸਾਹਮਣਾ ਕਰੋ।',
    ['ਭਰਮ ਤੋਂ ਬਚੋ', 'ਖ਼ੁਦ ਤੇ ਯਕੀਨ ਰੱਖੋ', 'ਡਟੇ ਰਹੋ']
  ),
  ur: createLocalizedGaslightRecord(
    'ur',
    'گیس لائٹنگ ڈائنامکس: اپنی ہی یادداشت اور عقل پر شک کرنے کا نفسیاتی زہر',
    'ڈاکٹر رابن سٹرن کی تحقیق: انسان کے فہم اور حقائق کو دھندلا کر محتاج بنانے کی چال۔',
    'آسان الفاظ میں: کسی کو اس قدر الجھا دینا کہ وہ اپنی ہی بصارت، یادداشت اور عقل پر شک کرنے لگے۔',
    'یہ حربہ مظلوم کے اعتماد کو کچل کر اسے مکمل طور پر ظالم کے رحم و کرم پر چھوڑ دیتا ہے۔',
    'اپنے فہم اور سچائی پر پختہ یقین رکھ کر اس جال سے باہر نکلیں۔',
    ['الجھاؤ سے نکلیں', 'خود پر اعتماد رکھیں', 'حقائق پر قائم رہیں']
  ),
  or: createLocalizedGaslightRecord(
    'or',
    'ଗ୍ୟାସ୍‌ଲାଇଟିଂ ଡାଇନାମିକ୍ସ: ନିଜ ସ୍ମୃତି ଏବଂ ବାସ୍ତବତା ଉପରେ ସନ୍ଦେହ ସୃଷ୍ଟି କରିବାର ଷଡ଼ଯନ୍ତ୍ର',
    'ରବିନ୍ ଷ୍ଟର୍ଣ୍ଣଙ୍କ ଗବେଷଣା: ବ୍ୟକ୍ତିର ମାନସିକ ସ୍ଥିରତାକୁ ଧୀରେ ଧୀରେ ନଷ୍ଟ କରିବାର ମନସ୍ତତ୍ତ୍ୱ।',
    'ସହଜ ଭାଷାରେ: କାହାକୁ ଏତେ ଭ୍ରମିତ କରିଦେବା ଯେ ସେ ନିଜ ସ୍ମୃତି ଏବଂ ମାନସିକ ସନ୍ତୁଳନ ଉପରେ ସନ୍ଦେହ କରିବାକୁ ଲାଗେ।',
    'ବାସ୍ତବତାକୁ ଅସ୍ୱୀକାର କରି ଅନ୍ୟକୁ ନିୟନ୍ତ୍ରଣ କରିବାର ଏହା ଏକ ଚତୁର କୌଶଳ।',
    'ନିଜ ଅନୁଭୂତି ଉପରେ ବିଶ୍ୱାସ ରଖି ଶାନ୍ତ ଭାବରେ ସତ୍ୟରେ ଅଟଳ ରୁହନ୍ତୁ।',
    ['ଭ୍ରମରୁ ମୁକ୍ତ ହୁଅନ୍ତୁ', 'ଆତ୍ମବିଶ୍ୱାସ ରଖନ୍ତୁ', 'ଦୃଢ଼ ରୁହନ୍ତୁ']
  ),
  as: createLocalizedGaslightRecord(
    'as',
    'গেছলাইটিং ডাইনামিক্স: নিজৰ স্মৃতি আৰু সুস্থতাৰ ওপৰত সন্দেহ জন্মোৱাৰ কৌশল',
    'ৰবিন ষ্টাৰ্নৰ গেছলাইট প্ৰভাৱ: মানুহৰ মানসিক স্থিতিশীলতাক খতম কৰি বশীভূত কৰাৰ বিজ্ঞান।',
    'সহজ কথাত: এজনক ইমানেই বিভ্ৰান্ত কৰা যে তেওঁ নিজৰ চকু আৰু স্মৃতিৰ ওপৰতেই বিশ্বাস হেৰুৱাই পেলায়।',
    'বাস্তৱক অস্বীকাৰ কৰি আনক মানসিকভাৱে অসুস্থ প্ৰমাণ কৰাৰ অভিসন্ধি।',
    'নিজৰ অনুভৱৰ ওপৰত বিশ্বাস ৰাখি সত্যত অটল থাকক।',
    ['বিভ্ৰান্তি দূৰ কৰক', 'নিজৰ ওপৰত বিশ্বাস ৰাখক', 'স্থিৰ থাকক']
  ),
};
