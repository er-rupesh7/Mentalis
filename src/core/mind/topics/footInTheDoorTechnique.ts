import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Persuasion & Influence Track
 * Topic: Foot-in-the-Door Technique: The Power of Escalating Commitments
 * Category: Persuasion & Influence (persuasion_influence)
 * 
 * Academic Grounding:
 * - Freedman & Fraser (1966): Compliance without pressure: The foot-in-the-door technique
 * - Cialdini (2021): Influence: The Psychology of Persuasion (Chapter 3: Commitment and Consistency)
 * - Burger (1999): The foot-in-the-door compliance procedure: A meta-analysis of research
 */

export const TOPIC_FOOT_IN_THE_DOOR_EN: MindTopicDetail = {
  id: 'foot_in_the_door',
  categoryId: 'persuasion_influence',
  slug: 'foot-in-the-door-technique',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 5,
  viewCount: 6720,
  shareCount: 480,
  bookmarkCount: 1140,
  title: 'Foot-in-the-Door Technique: The Power of Escalating Commitments',
  subtitle: 'How securing agreement to a tiny, trivial request drastically increases compliance with a massive demand later.',
  shortDescription: 'A compliance tactic that involves getting a person to agree to a small initial request first, setting up psychological momentum for a much larger subsequent request.',
  oneLineExplanation: 'Ask for a glass of water today; ask to borrow the car tomorrow.',

  summary30s: 'The Foot-in-the-Door (FITD) technique is an insidious persuasion mechanism: by getting someone to agree to an insignificant, low-cost initial request (signing a tiny petition, answering a 1-question poll, trying a 7-day free trial), the persuader secretly alters the victim’s self-image. When a massive request arrives later, the victim agrees to maintain internal consistency.',

  coreConcept: 'Discovered in 1966 by Jonathan Freedman and Scott Fraser at Stanford University, FITD operates through Daryl Bem\'s Self-Perception Theory. When people agree to a minor favor or small ethical stance, they observe their own behavior and deduce: "I am the kind of person who cares about this cause and supports this initiative." When the larger, more expensive request arrives weeks later, refusing would create cognitive dissonance with that newly minted self-image.',
  summary60s: 'Consider a neighbor who knocks on your door and asks if you would mind signing a small petition advocating for safe residential driving. It takes 5 seconds, costs nothing, and seems completely harmless. Two weeks later, the same neighbor returns asking to erect a gigantic, ugly 6-foot wooden billboard on your front lawn that says "DRIVE SAFELY," blocking your driveway. In Freedman & Fraser’s experiments, homeowners who signed the tiny petition were four times more likely to allow the monstrous billboard than those who were asked for the billboard directly.',

  quickTakeaways: [
    'The 400% Compliance Surge: Agreeing to a tiny micro-action multiplies compliance with a major burden by 4x',
    'Self-Perception Shift: We deduce our own values by watching our past commitments',
    'Creeping Entrapment: High-control groups, cults, and corporate exploitation always start with trivial initial asks',
    'The Micro-Audit Antidote: Ask "Would I agree to this large request if the first small interaction had never occurred?"',
  ],

  whyItHappens: 'Cognitive consistency drive. Human beings experience psychological discomfort when their actions contradict their previous commitments. Once we say "Yes" once, saying "No" to the sequel feels hypocritical.',
  evolutionaryMechanism: 'Predictability was a cornerstone of ancestral social cohesion. Reliable allies followed through on commitments; erratic individuals who reversed course were untrustworthy liabilities during collective hunts or defense.',

  howItWorks: 'The four steps: (1) The Micro-Ask: Requesting something so small that refusal seems petty; (2) Compliance & Self-Tagging: The person complies and internally registers as an ally/supporter; (3) The Gap Interval: Time allows the new identity to crystallize; (4) The Target Ask: The real, heavy demand is delivered.',
  whereYouEncounterIt: 'Charity fundraising (asking you to wear a tiny ribbon before asking for monthly bank debits), SaaS software (free trials that require credit card numbers), romance (asking for small favors to test compliance), and sales funnels.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Direct Demand vs. Foot-in-the-Door Sequence',
    description: 'How a small preliminary commitment dismantles psychological resistance.',
    analogySideA: {
      label: 'Direct Request (No Small Step)',
      detail: '"Please donate $500 to our animal rescue charity today." -> 83% refuse immediately.',
    },
    analogySideB: {
      label: 'Foot-in-the-Door Sequence',
      detail: 'Step 1: "Will you wear this free dog-sticker?" (95% agree) -> Step 2: "Will you donate $500?" (Compliance surges to 53%).',
    },
  },

  researchSummary: 'In Freedman & Fraser\'s 1966 Stanford study, researchers asked Palo Alto residents to display a massive, poorly-lettered billboard reading "DRIVE CAREFULLY" on their front lawns. In the control group, only 17% agreed. In the experimental group who had signed a tiny 3-inch paper petition two weeks earlier, an astounding 76% agreed to have the huge billboard installed on their lawns.',
  limitationsAndControversies: 'Jerry Burger\'s 1999 meta-analysis showed that the FITD effect diminishes if the second request is made immediately with zero time delay (as it feels like an obvious bait-and-switch), or if the first request is paid for with money (which shifts attribution from internal identity to external financial reward).',
  commonMisconceptions: 'Common myth: "Agreeing to a small harmless favor has no influence on major future decisions." Reality: Committing to a small request subtly alters your self-identity ("I am the kind of person who supports this cause"), dramatically lowering resistance to huge future commitments.',

  howToRecognize: [
    'A salesperson asking you to "just hold this item" or "just sit in the driver\'s seat for 30 seconds"',
    'A software service offering a "100% free account with zero obligations" that gradually prompts for permissions, contacts, and billing data',
    'A romantic partner or friend who started with tiny favors (rides, small loans) and now demands your weekends and life savings',
    'A political campaign asking you to answer a 1-question survey before asking for recurring donations',
  ],

  scenarios: [
    {
      id: 'scen_fitd_01',
      scenarioType: 'indian_context',
      title: 'The Weekend Sprint Creep in Hyderabad',
      vignette: 'Priya joins a fintech startup as a product designer in Hyderabad. During her second week, her manager smiles and asks: "Priya, could you just review this 2-page slide deck on Saturday morning for 10 minutes? It would really help me out." Priya agrees gladly. Three weeks later, the manager asks: "Priya, can you run the customer testing sprint this Sunday from 9 AM to 6 PM?" Priya feels exhausted and wants to refuse, but hears a voice in her head: "I already agreed to work weekends before, I don\'t want to look uncommitted now."',
      breakdownAnalysis: 'Priya is trapped by the Foot-in-the-Door effect. The initial 10-minute Saturday review altered her perceived workplace self-image to "the team player who steps up on weekends." Refusing the 9-hour Sunday sprint now triggers cognitive dissonance.',
      recommendedAction: 'Sever the connection between the past micro-favor and the new demand: "I was happy to help with the 10-minute slide check last month as an exception, but I maintain strict boundaries on full weekend work to avoid design burnout."',
    },
  ],

  examples: [
    {
      id: 'ex_fitd_01',
      domain: 'consumer_advertising',
      displayOrder: 1,
      title: 'The "Just Enter Your Email" Onboarding Funnel',
      description: 'An app asks only for your email to start. Then it asks for your name. Then your industry. Then your phone number. By the time it asks for a $200 subscription, you feel so invested in the setup that abandoning feels like wasted effort.',
      takeaway: 'Micro-commitments build irresistible psychological inertia.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_fitd_01',
      scenarioContext: 'A telemarketer calls asking if you would answer three simple yes-or-no questions about renewable solar energy to support a university student research paper. You answer the questions. Two weeks later, a representative from a commercial solar panel installation firm calls your personal mobile offering a $15,000 rooftop solar installation.',
      question: 'Why did the solar installation firm start with the three simple questions?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'To leverage the Foot-in-the-Door effect: establishing you as a "supporter of clean energy" so that rejecting the commercial proposal feels hypocritical',
          explanation: 'Accurate: the student survey established a cognitive self-image of environmental concern that primes compliance with the sales pitch.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Because solar energy companies are legally required to conduct academic surveys before selling equipment',
          explanation: 'There is no legal requirement to conduct academic surveys prior to sales.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Because university research papers always generate high-converting commercial sales leads',
          explanation: 'The tactic is a psychological compliance architecture, not academic collaboration.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Small preliminary agreements alter your identity to prepare you for larger commercial exploitation.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Evaluate every request on its independent merits rather than feeling bound to escalate your commitment to maintain consistency.',
  psychologicalDefenses: [
    {
      title: 'The Zero-Moment Baseline Rule',
      instruction: 'Whenever you face a significant demand, isolate it completely from past favors. Ask: "If this person were a total stranger who just walked up to me right now with this demand, would I say yes?"',
    },
    {
      title: 'Beware of "Insignificant" Signatures',
      instruction: 'Never sign petitions, check consent boxes, or accept small branded tokens for causes or brands you do not actively intend to support financially or politically.',
    },
    {
      title: 'Recognize the Feeling of "Foolish Consistency"',
      instruction: 'Remind yourself of Ralph Waldo Emerson\'s maxim: "A foolish consistency is the hobgoblin of little minds." You have the absolute right to say "Yes" to Step 1 and an emphatic "No" to Step 2.',
    },
  ],

  reflectionPrompt: 'Looking back at a subscription or project you couldn\'t exit, did it start with a tiny "free trial" or small low-friction favor?',

  references: [
    {
      id: 'ref_freedman_1966',
      authors: 'Freedman, J. L., & Fraser, S. C.',
      year: 1966,
      title: 'Compliance without pressure: The foot-in-the-door technique',
      publicationName: 'Journal of Personality and Social Psychology',
      volumeIssue: '4(2), 195-202',
      doi: '10.1037/h0023552',
      evidenceStrength: 'historical_classic',
    },
    {
      id: 'ref_burger_1999',
      authors: 'Burger, J. M.',
      year: 1999,
      title: 'The foot-in-the-door compliance procedure: A meta-analysis of research on whether and how it works',
      publicationName: 'Personality and Social Psychology Review',
      volumeIssue: '3(4), 303-325',
      doi: '10.1207/s15327957pspr0304_2',
      evidenceStrength: 'meta_analysis',
    },
  ],

  relatedTopics: [
    {
      topicId: 'commitment_consistency',
      slug: 'commitment-and-consistency',
      title: 'Commitment & Consistency',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'reciprocity_principle',
      slug: 'reciprocity-principle',
      title: 'The Reciprocity Principle',
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
    ...TOPIC_FOOT_IN_THE_DOOR_EN,
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

export const TOPIC_FOOT_IN_THE_DOOR: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_FOOT_IN_THE_DOOR_EN,
  hinglish: {
    ...TOPIC_FOOT_IN_THE_DOOR_EN,
    title: 'Foot-in-the-Door: Chhoti Haan Se Badi Phansan Ka Jaal',
    subtitle: 'Pehle ek bohot chhota sa favour maangna, aur phir uski aadh me ek bohot bada kaam nikalwana.',
    shortDescription: 'Ek aisi persuasion technique jisme pehle aapse chhota sa "haan" karwaya jata hai, taaki baad me bade demand par "na" bolte huye sharm aaye.',
    oneLineExplanation: 'Pehle ek glass paani maangna, phir car ki chaabi maang lena.',
    summary30s: 'Freedman & Fraser ne 1966 me prove kiya ki jab log kisi chhoti si request par haan bol dete hain (jaise ek chhota sa form bharna), toh unka self-image badal jata hai. Baad me jab unse bohot bada favour maanga jata hai, toh compliance 400% badh jati hai kyunki insaan khud ko hypocrite dikhana nahi chahta.',
  },
  hi: {
    ...TOPIC_FOOT_IN_THE_DOOR_EN,
    title: 'Foot-in-the-Door Technique (चरण-दर-चरण सहमति तकनीक)',
    subtitle: 'पहले एक छोटे से अनुरोध पर सहमति प्राप्त करना और फिर बड़े भार के लिए मार्ग प्रशस्त करना।',
    shortDescription: 'अनुपालन की वह मनोवैज्ञानिक युक्ति जिसमें आरंभिक छोटी सहमति व्यक्ति के आत्म-बोध को बदलकर उसे भविष्य के बड़े अनुरोधों को स्वीकार करने पर विवश कर देती है।',
    oneLineExplanation: 'आज एक छोटे से हस्ताक्षर मांगना; कल बड़ा आर्थिक भार सौंपना।',
    summary30s: 'फुट-इन-द-डोर तकनीक (Foot-in-the-Door) के अनुसार मनुष्य अपनी पिछली क्रियाओं के साथ सुसंगत (Consistent) रहना चाहता है। स्टैनफोर्ड के प्रसिद्ध प्रयोग में पाया गया कि जिन नागरिकों ने सुरक्षित ड्राइविंग के एक छोटे से कागज पर हस्ताक्षर किए थे, वे दो सप्ताह बाद अपने लॉन में 6 फीट का विशाल बोर्ड लगाने के लिए 4 गुना अधिक सहमत हुए।',
  },
  gu: createLocalizedRecord('gu', "Foot-in-the-Door Technique: The Power of Escalating Commitments (પૂર્વગ્રહ)", "Foot-in-the-Door Technique: The Power of Escalating Commitments એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "Foot-in-the-Door Technique: The Power of Escalating Commitments (पूर्वग्रह)", "Foot-in-the-Door Technique: The Power of Escalating Commitments हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "Foot-in-the-Door Technique: The Power of Escalating Commitments (పక్షపాతం)", "Foot-in-the-Door Technique: The Power of Escalating Commitments అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "Foot-in-the-Door Technique: The Power of Escalating Commitments (சார்புநிலை)", "Foot-in-the-Door Technique: The Power of Escalating Commitments என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "Foot-in-the-Door Technique: The Power of Escalating Commitments (ಪಕ್ಷಪಾತ)", "Foot-in-the-Door Technique: The Power of Escalating Commitments ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "Foot-in-the-Door Technique: The Power of Escalating Commitments (പക്ഷപാതം)", "Foot-in-the-Door Technique: The Power of Escalating Commitments എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "Foot-in-the-Door Technique: The Power of Escalating Commitments (পক্ষপাতিত্ব)", "Foot-in-the-Door Technique: The Power of Escalating Commitments হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "Foot-in-the-Door Technique: The Power of Escalating Commitments (ਪੱਖਪਾਤ)", "Foot-in-the-Door Technique: The Power of Escalating Commitments ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "Foot-in-the-Door Technique: The Power of Escalating Commitments (جانبداری)", "Foot-in-the-Door Technique: The Power of Escalating Commitments انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "Foot-in-the-Door Technique: The Power of Escalating Commitments (ପକ୍ଷପାତିତା)", "Foot-in-the-Door Technique: The Power of Escalating Commitments ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "Foot-in-the-Door Technique: The Power of Escalating Commitments (পক্ষপাতিত্ব)", "Foot-in-the-Door Technique: The Power of Escalating Commitments সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
