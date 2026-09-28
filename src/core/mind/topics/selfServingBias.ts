import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Miller & Ross (1975): Self-serving biases in the attribution of causality: Fact or fiction? Psychological Bulletin.
 * - Campbell & Sedikides (1999): Self-threat magnifies the self-serving bias: A meta-analytic review. Review of General Psychology.
 * - Blaine & Crocker (1993): Self-esteem and self-serving biases in reactions to positive and negative events.
 */

export const TOPIC_SELF_SERVING_BIAS_EN: MindTopicDetail = {
  id: 'self_serving_bias',
  categoryId: 'cognitive_biases',
  slug: 'self-serving-bias',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 9,
  viewCount: 6540,
  shareCount: 520,
  bookmarkCount: 1120,
  title: 'The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure',
  subtitle: 'The universal psychological instinct to claim personal credit for positive outcomes while blaming external factors for mistakes.',
  shortDescription: 'A cognitive distortion where people attribute positive events to their internal character or talent, but blame negative outcomes on bad luck, unfair rules, or other people.',
  oneLineExplanation: 'When I pass the test, I am a genius; when I fail, the questions were unfair.',

  summary30s: 'The self-serving bias is an ego-defense mechanism. When our ventures succeed, we credit our exceptional intellect, foresight, and hard work. But when a project collapses or an investment tanks, we blame macroeconomic downturns, unreliable colleagues, or bad luck. This shields our self-esteem in the short term, but arrests learning in the long term.',

  coreConcept: 'Formalized by Dale Miller and Michael Ross in 1975, the self-serving bias represents an asymmetric causal attribution. The human mind is not an impartial accountant of its own track record. To maintain positive self-regard and social status, our working memory disproportionately spotlights internal strengths during triumphs and external scapegoats during failures.',
  summary60s: 'Consider an entrepreneur who launches two startups. Startup A succeeds and reaches profitability; the founder writes a memoir detailing his relentless discipline, market intuition, and visionary leadership. Startup B goes bankrupt; the same founder claims that interest rates rose unexpectedly, vendors breached contracts, and the government altered regulations. In both cases, the founder was the exact same decision-maker. The self-serving bias creates a distorted ledger that makes us blind to our own mistakes.',

  quickTakeaways: [
    'Asymmetric Attribution: Internal credit for victory ("I earned this"), external blame for defeat ("The system is rigged")',
    'Ego Defense vs. Growth: It protects emotional well-being today, but guarantees repeating the same error tomorrow',
    'Team Friction: When team leaders suffer from self-serving bias, they hoard accolades and scapegoat subordinates',
    'The Pre-Mortem Antidote: Define objective success/failure benchmarks before outcomes occur to prevent revisionist history',
  ],

  whyItHappens: 'Hedonic self-enhancement and cognitive dissonance reduction. Experiencing failure threatens our self-identity as competent individuals. Externalizing blame relieves the painful psychological friction between "I am capable" and "My project failed."',
  evolutionaryMechanism: 'In social tribes, projecting unshakable confidence and competence protected social rank and reproductive opportunities. Admitting personal incompetence invited loss of status, whereas framing failures as external anomalies maintained tribal prestige.',

  howItWorks: 'The process operates in three cognitive phases: (1) Outcome Evaluation: The brain classifies an event as positive or negative; (2) Attributional Search: In triumphs, search stops immediately at internal traits (intellect, work ethic); (3) Externalization in Failure: In losses, cognitive search actively scans the environment until it locates a plausible external culprit.',
  whereYouEncounterIt: 'Performance appraisals at work, post-match sports interviews ("The referee was biased"), driving test failures, academic exam reviews, and personal investment portfolios.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Victory vs. Defeat Attribution',
    description: 'How the same ego rewrites causation depending on whether the result is positive or negative.',
    analogySideA: {
      label: 'Positive Outcome (Success)',
      detail: '"My promotion was due to my superior strategy, work ethic, and sharp intelligence."',
    },
    analogySideB: {
      label: 'Negative Outcome (Failure)',
      detail: '"The project missed targets because the client was irrational and our software had bugs."',
    },
  },

  researchSummary: 'Campbell & Sedikides (1999) conducted a comprehensive meta-analysis of over 100 empirical studies. They demonstrated that the self-serving bias magnifies exponentially under conditions of self-threat (high public visibility, direct challenge to competence). When stakes are low and accountability is private, attribution becomes measurably more balanced.',
  limitationsAndControversies: 'Depressive Realism: Alloy & Abramson (1979) found that individuals experiencing mild clinical depression often exhibit less self-serving bias and provide more accurate causal attributions for their performance. Healthy psychological function usually requires a slight, calibrated degree of optimism.',
  commonMisconceptions: 'Common myth: "Confident, high-achieving executives do not suffer from self-serving bias." Reality: Senior executives frequently exhibit the strongest self-serving biases because their past track record has reinforced their narrative of personal infallibility.',

  howToRecognize: [
    'Catching yourself saying: "I knew exactly what I was doing" during wins, and "Nobody could have foreseen that" during losses',
    'Feeling resentful when a colleague receives praise for a joint project, but feeling relief when they get blamed for a mishap',
    'Blaming traffic when you are late for a meeting, but assuming a colleague was late because they are disorganized',
    'Crediting your trading skills when a stock rises 20%, but blaming market manipulation when it drops 20%',
  ],

  scenarios: [
    {
      id: 'scen_ssb_01',
      scenarioType: 'indian_context',
      title: 'The UPSC Exam Scorecard in Jaipur',
      vignette: 'Kabir and his cousin both appeared for the civil services preliminary examination in Jaipur. Kabir cleared the exam with high marks and announced at the family gathering: "Consistent 14-hour daily focus and my analytical answer-writing technique made this possible." The following year, Kabir missed the final interview cut-off by 8 marks. He immediately complained: "The interview board was completely biased toward candidates from Delhi universities, and the essay questions had no relevance to actual governance."',
      breakdownAnalysis: 'Kabir demonstrated classic self-serving bias. In Year 1, his success was entirely attributed to internal discipline and genius. In Year 2, his failure was attributed entirely to board prejudice and flawed question design, completely ignoring his weak preparation in optional papers.',
      recommendedAction: 'Keep a pre-recorded decision journal: Write down your preparation gaps, strategy, and expected risks before the exam results arrive. This prevents post-hoc self-serving rationalizations.',
    },
  ],

  examples: [
    {
      id: 'ex_ssb_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Sales Target Attributions',
      description: 'A sales director hits 120% of quota in Q1 and claims: "My visionary enterprise sales pipeline generated this." In Q2, sales drop to 60%, and he blames "unprecedented monsoon disruptions and supply-chain logistics delays."',
      takeaway: 'Separating macroeconomic tailwinds from genuine managerial competence requires comparing performance against industry benchmarks.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_ssb_01',
      scenarioContext: 'A product manager launches a new mobile payment feature. The launch achieves record adoption in week 1. In month 2, a major security vulnerability forces the app to go offline for 48 hours.',
      question: 'Which executive reflection demonstrates resistance to the self-serving bias?',
      prompt: 'Which executive reflection demonstrates resistance to the self-serving bias?',
      scenarioText: 'A product manager launches a new mobile payment feature. The launch achieves record adoption in week 1. In month 2, a major security vulnerability forces the app to go offline for 48 hours.',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Claiming the early adoption was due to product genius, while the security breach was an unavoidable third-party vendor library issue',
          explanation: 'This is the exact self-serving distortion: hoarding internal praise for user growth while externalizing architecture security failures.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Conducting an honest post-mortem: recognizing that aggressive marketing created adoption, while rushed QA deadlines set by the leadership team contributed directly to the security gap',
          explanation: 'Accurate: balancing both internal team contributions to success and internal systemic accountability for failures.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Assuming that all product failures are caused by bad luck and cannot be improved by process reforms',
          explanation: 'Fatalistic externalization guarantees that the same security oversights will happen again.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'True leadership requires owning the operational flaws of failure as transparently as the strategic wins of success.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Implement neutral post-mortems and decision journals where assumptions are recorded before outcomes are known.',
  psychologicalDefenses: [
    {
      title: 'The Pre-Commitment Attribution Log',
      instruction: 'Before executing any major project or trade, write down what factors will dictate success vs. failure. When results arrive, review your notes before speaking.',
    },
    {
      title: 'Blameless Post-Mortems',
      instruction: 'In teams, separate error identification from punishment. Analyze the systemic failure modes rather than hunting for convenient external scapegoats.',
    },
    {
      title: 'Invert Praise and Critique',
      instruction: 'When you succeed, actively find the external luck and team contributions that helped you. When you fail, actively search for your own personal mistakes.',
    },
  ],

  reflectionPrompt: 'Think of your greatest professional victory and your worst failure. How much of the win was truly your talent, and how much of the loss was truly bad luck?',
  references: [
    {
      id: 'ref_ssb_01',
      title: 'Self-serving biases in the attribution of causality: Fact or fiction?',
      citation: 'Miller, D. T., & Ross, M. (1975). Psychological Bulletin, 82(2), 213–225.',
      authors: 'Dale T. Miller, Michael Ross',
      publicationYear: 1975,
      journalOrPublisher: 'Psychological Bulletin',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1037/h0076486',
      relevance: 'Foundational paper defining the psychological mechanisms of self-serving causal attribution.',
      displayOrder: 1,
    },
    {
      id: 'ref_ssb_02',
      title: 'Self-threat magnifies the self-serving bias: A meta-analytic review',
      citation: 'Campbell, W. K., & Sedikides, C. (1999). Review of General Psychology, 3(1), 23–43.',
      authors: 'W. Keith Campbell, Constantine Sedikides',
      publicationYear: 1999,
      journalOrPublisher: 'Review of General Psychology',
      sourceType: 'systematic_review',
      evidenceStrength: 'peer_reviewed_meta_analysis',
      doiOrUrl: 'https://doi.org/10.1037/1089-2680.3.1.23',
      relevance: 'Comprehensive meta-analysis examining how threats to self-esteem trigger acute self-serving bias.',
      displayOrder: 2,
    },
  ],
  tags: ['Cognitive Biases', 'Ego Defense', 'Attribution Theory', 'Self-Awareness'],
  relatedTopics: [
    { topicId: 'fundamental_attribution_error', slug: 'fundamental-attribution-error', title: 'Fundamental Attribution Error', relationshipType: 'amplified_by' },
    { topicId: 'dunning_kruger_effect', slug: 'dunning-kruger-effect', title: 'Dunning-Kruger Effect', relationshipType: 'amplified_by' },
  ],
  seoTitle: 'The Self-Serving Bias: Crediting Skill, Blaming Luck | Mentalab Mind',
  seoDescription: 'Why we take credit for successes and blame luck for failures. Discover the psychology of causal attribution and the pre-mortem antidote.',
  canonicalUrl: '/mind/cognitive-biases/self-serving-bias',
  ogImageUrl: '/images/mind/self-serving-bias.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: 'Self-serving bias is an asymmetric attributional error maintaining ego stability at the cost of objective calibration.',
};

export const TOPIC_SELF_SERVING_BIAS_HINGLISH: MindTopicDetail = {
  ...TOPIC_SELF_SERVING_BIAS_EN,
  title: 'Self-Serving Bias: Jeet Ka Credit Khud Lena, Haar Ka Dosh Kismat Par Daalna',
  subtitle: 'Kamyabi me apni mehnat aur galti hone par bad luck ya doosron ko zimmedar thehrana.',
  shortDescription: 'Ek aisi cognitive bias jisme insaan apni safalta ka credit khud leta hai, lekin nakamyabi ka thikra kismat, referees ya halaat par phod deta hai.',
  oneLineExplanation: 'Jab main pass hua toh main genius tha; jab fail hua toh question paper hi bekaar tha.',

  summary30s: 'Self-Serving Bias hamare dimaag ka ego-defense mechanism hai. Jab hum jeet-te hain, toh lagta hai humari strategy aur hard work ne jeet dilayi. Lekin jab hum fail hote hain, toh dimaag bolta hai ki bazaar kharab tha, mausam bekaar tha, ya logo ne dhokha diya. Isse temporary ego toh bach jata hai, par real learning ruk jati hai.',
  coreConcept: 'Dale Miller aur Michael Ross (1975) ne prove kiya ki insaan apne track record ka fair judge nahi hota. Hamara dimaag apni image ko bachane ke liye jeet me sirf apni khoobiyan dekhta hai aur haar me doosron par blame daal deta hai.',
  summary60s: 'Sochiye ek businessman do dukanein kholta hai. Dukan A chal nikli toh wo bolta hai: "Meri market research aur leadership kamaal ki hai." Dukan B band ho gayi toh wo bolta hai: "Area ke log hi conservative hain aur sarkar ki policies galat hain." Dono jagah decision-maker wahi tha. Self-serving bias hume apni galtiyon se seekhne se rokta hai.',

  quickTakeaways: [
    'Asymmetric Attribution: Kamyabi me "Main", Nakamyabi me "Halaat"',
    'Ego vs Growth: Aaj ego bachta hai par kal wahi galti dubara repeat hoti hai',
    'Team Me Conflict: Jo manager khud credit leta hai aur subordinates par blame daalta hai wo team destroy kar deta hai',
    'Pre-Mortem Antidote: Faisla lene se pehle likhein ki kamyabi aur nakamyabi ke neutral criteria kya honge',
  ],

  whyItHappens: 'Ego preservation aur cognitive dissonance se bachav. Jab hum fail hote hain toh humari self-image ("Main samajhdar hoon") ko chot pahunchti hai. Halaat par blame daal kar dimaag sukoon paata hai.',
  evolutionaryMechanism: 'Tribal society me agar koi apni galti man-ta tha toh uski social rank gir sakti thi. Kismat ko dosh dekar log apni status barkarar rakhte the.',

  howItWorks: 'Teen stages me kaam karta hai: (1) Result Evaluation: Jeet hui ya haar; (2) Jeet me Internal Search: "Meri mehnat, mera dimaag"; (3) Haar me External Search: Dimaag tab tak dhoondhta rehta hai jab tak koi bahari bahana na mil jaye.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Jeet vs Haar Ka Dimaagi Asar',
    description: 'Kaise hamara dimaag result badalte hi causation ki kahani badal deta hai.',
    analogySideA: {
      label: 'Kamyabi (Success)',
      detail: '"Mera promotion meri mehnat, strategy aur sharp intellect ki wajah se hua."',
    },
    analogySideB: {
      label: 'Nakamyabi (Failure)',
      detail: '"Project target isliye miss hua kyunki client pagal tha aur team ne support nahi kiya."',
    },
  },

  examples: [
    {
      id: 'ex_ssb_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Sales Target Ka Bahana',
      description: 'Q1 me target hit hone par manager bolta hai: "Meri visionary strategy ne record tod diya." Q2 me target miss hone par: "Monsoon ki wajah se logistic delay ho gaya."',
      takeaway: 'Industry average se compare kiye bina personal skill ko credit dena self-serving trap hai.',
    },
  ],

  scenarios: [
    {
      id: 'scen_ssb_01',
      scenarioType: 'indian_context',
      title: 'Jaipur Me UPSC Prelims Ka Scorecard',
      narrativeContext: 'Kabir ne Jaipur me civil services prelims clear kiya aur poore khandan me bola: "Meri 14 ghante ki continuous padhai aur analytical skill ne yeh kiya." Agle saal jab wo final interview me 8 marks se reh gaya, toh bola: "Interview board Delhi walo ke favour me tha aur questions ka governance se koi lena dena nahi tha."',
      biasInAction: 'Kabir ne pehle saal apni mehnat ko 100% credit diya, par doosre saal apni weak optional subject preparation ko accept karne ke bajaye board ko biased bata diya.',
      optimalResponse: 'Faisla aane se pehle Decision Journal rakhein: Pehle se likhein ki kahan kami reh sakti hai, taaki baad me bahane na banayein.',
      vignette: 'Kabir ne Jaipur me civil services prelims clear kiya aur poore khandan me bola: "Meri 14 ghante ki continuous padhai aur analytical skill ne yeh kiya." Agle saal jab wo final interview me 8 marks se reh gaya, toh bola: "Interview board Delhi walo ke favour me tha aur questions ka governance se koi lena dena nahi tha."',
      breakdownAnalysis: 'Kabir ne pehle saal apni mehnat ko 100% credit diya, par doosre saal apni weak optional subject preparation ko accept karne ke bajaye board ko biased bata diya.',
      recommendedAction: 'Faisla aane se pehle Decision Journal rakhein: Pehle se likhein ki kahan kami reh sakti hai, taaki baad me bahane na banayein.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_ssb_01',
      scenarioContext: 'Ek product manager ek naya feature launch karta hai. Week 1 me bohot log app download karte hain. Month 2 me security vulnerability ki wajah se app 48 hours down ho jati hai.',
      question: 'Kaunsa reflection self-serving bias se bachav dikhata hai?',
      prompt: 'Kaunsa reflection self-serving bias se bachav dikhata hai?',
      scenarioText: 'Ek product manager ek naya feature launch karta hai. Week 1 me bohot log app download karte hain. Month 2 me security vulnerability ki wajah se app 48 hours down ho jati hai.',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Pehle week ki growth ko apna product genius batana, aur server down hone par third-party library ko dosh dena',
          explanation: 'Yeh exact self-serving bias hai: kamyabi ka credit khud lena aur flaw ka bahar dosh dena.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Accept karna ki aggressive marketing se users aaye the, lekin testing me jaldbazi karne ki wajah se security flaw reh gaya tha',
          explanation: 'Sahi: Dono pehluon ko objectively dekhna aur apni mistakes ki accountability lena.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Yeh sochna ki kismat kharab thi aur aage koi process change karne ki zaroorat nahi hai',
          explanation: 'Kismat par dosh daalne se agle release me fir wahi security problem aayegi.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Asli leader jeet ke credit ke sath haar ki accountability bhi transparently accept karta hai.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Blameless post-mortem karein aur jeet me bahari luck aur haar me apni kamiyon ko talaashe.',
  psychologicalDefenses: [
    {
      title: 'Pre-Commitment Decision Journal',
      instruction: 'Kisi bhi project se pehle likhein ki success aur failure kin cheezon par depend karegi. Result aane ke baad purana note padhein.',
    },
    {
      title: 'Invert Praise & Critique',
      instruction: 'Kamyabi me dekhein ki kismat aur team ne kahan madad ki; haar me dekhein ki aapne kahan galti ki.',
    },
  ],

  reflectionPrompt: 'Apni sabse badi jeet aur haar ko yaad kijiye. Jeet me kitna luck tha aur haar me kitni aapki apni galti thi?',
  seoTitle: 'Self-Serving Bias Kya Hai? Kamyabi Aur Haar Ka Psychology | Mentalab Mind',
  seoDescription: 'Janiye kyu hum jeet ka credit khud lete hain aur haar ka dosh kismat par daalte hain. Seekhein 3 debiasing tareeqe.',
  canonicalUrl: '/mind/cognitive-biases/self-serving-bias',
};

export const TOPIC_SELF_SERVING_BIAS_HI: MindTopicDetail = {
  ...TOPIC_SELF_SERVING_BIAS_EN,
  title: 'Self-Serving Bias (स्वार्थी पूर्वाग्रह)',
  subtitle: 'सफलता का श्रेय स्वयं को देना और असफलता का दोष परिस्थितियों पर मढ़ना।',
  shortDescription: 'एक ऐसा संज्ञानात्मक पूर्वाग्रह जहाँ व्यक्ति सकारात्मक परिणामों को अपनी योग्यता मानता है और नकारात्मक परिणामों के लिए दूसरों या भाग्य को दोषी ठहराता है।',
  oneLineExplanation: 'सफलता में मेरा हुनर, असफलता में परिस्थितियों की साज़िश।',
  summary30s: 'स्वार्थी पूर्वाग्रह (Self-Serving Bias) आत्म-सम्मान की रक्षा करने वाली एक स्वाभाविक मानवीय प्रवृत्ति है। जब हम सफल होते हैं तो इसे अपनी मेहनत और बुद्धिमत्ता मानते हैं, परंतु जब हम असफल होते हैं तो खराब किस्मत, अनुचित नियमों या दूसरों को दोषी ठहराते हैं।',
};


function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_SELF_SERVING_BIAS_EN,
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

export const TOPIC_SELF_SERVING_BIAS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SELF_SERVING_BIAS_EN,
  hinglish: TOPIC_SELF_SERVING_BIAS_HINGLISH,
  hi: TOPIC_SELF_SERVING_BIAS_HI,
  gu: createLocalizedRecord('gu', "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure (પૂર્વગ્રહ)", "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure (पूर्वग्रह)", "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure (పక్షపాతం)", "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure (சார்புநிலை)", "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure (ಪಕ್ಷಪಾತ)", "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure (പക്ഷപാതം)", "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure (পক্ষপাতিত্ব)", "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure (ਪੱਖਪਾਤ)", "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure (جانبداری)", "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure (ପକ୍ଷପାତିତା)", "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure (পক্ষপাতিত্ব)", "The Self-Serving Bias: Crediting Skill for Success, Blaming Luck for Failure সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
