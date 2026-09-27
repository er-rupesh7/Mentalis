import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: Groupthink: Why Highly Cohesive Teams Make Disastrous Decisions
 * Category: social_psychology
 * Academic Grounding: Irving L. Janis (1972) (10.1177/002216788302300412)
 */

export const TOPIC_GROUPTHINK_EN: MindTopicDetail = {
  id: 'groupthink',
  categoryId: 'social_psychology',
  slug: 'groupthink',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 7,
  viewCount: 3970,
  shareCount: 308,
  bookmarkCount: 694,
  title: "Groupthink: Why Highly Cohesive Teams Make Disastrous Decisions",
  subtitle: "The psychological drive for harmony and consensus that suppresses dissent, ignores risks, and leads to organizational catastrophe.",
  shortDescription: "A mode of thinking where the desire for harmony or conformity in a group results in irrational or dysfunctional decision-making outcomes.",
  oneLineExplanation: "Valuing peace in the room above the objective truth of the decision.",

  summary30s: "Coined by psychologist Irving Janis in 1972, Groupthink occurs when a team prioritizes politeness, unanimity, and mutual agreement over rigorous critical evaluation. Dissenting voices self-censor out of fear of social friction, creating an artificial illusion of invulnerability that leads to catastrophic failures like corporate bankruptcies and strategic disasters.",
  coreConcept: "Groupthink thrives in high-pressure, insular teams with charismatic leaders. Eight primary symptoms define it: (1) Illusion of invulnerability; (2) Collective rationalization; (3) Unquestioned belief in inherent morality; (4) Stereotyped outgroup views; (5) Direct pressure on dissenters; (6) Self-censorship; (7) Illusion of unanimity; (8) Self-appointed mindguards who shield the leader from contradictory information.",
  summary60s: "Janis analyzed historical catastrophes such as the Bay of Pigs invasion and the Challenger space shuttle launch. Engineers warned that the shuttle's O-rings would fail in freezing temperatures, but under intense NASA launch deadline pressure, managers demanded: \"Take off your engineering hat and put on your management hat.\" The pressure for collective consensus killed all seven astronauts.",
  quickTakeaways: [
    "Illusion of Unanimity: Silence in the room is falsely interpreted as 100% agreement",
    "Mindguards: Eager deputies who actively suppress negative data before it reaches the boss",
    "The Self-Censorship Spiral: Individuals swallow valid doubts to avoid being labeled \"unsupportive\"",
    "Designated Devil's Advocate: Formally assigning team members to attack every consensus proposal",
  ],

  whyItHappens: "Social cohesion protection and stress reduction. Challenging a dominant group consensus triggers amygdala activation and acute fear of social ostracization.",
  evolutionaryMechanism: "In ancestral tribes, maintaining united group solidarity against rival predators was often more critical for immediate survival than endless analytical deliberation.",
  howItWorks: "Charismatic leader announces preferred direction -> Team members nod agreeably -> Doubter A feels uneasy but stays silent -> Doubter B sees Doubter A's silence and suppresses their own concern -> The plan is approved unanimously -> Catastrophe strikes.",
  whereYouEncounterIt: "Corporate boardroom acquisitions, startup strategy pivots, political cabinets, medical surgical teams, and family council disputes.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Groupthink vs. Independent Red Teaming",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Groupthink Trap",
      detail: "\"Everyone seems to agree with the CEO's expansion plan; raising risks now will just brand me as negative.\"",
    },
    analogySideB: {
      label: "Cognitively Calibrated Team",
      detail: "\"Let's appoint a Red Team specifically incentivized to break this thesis before we invest capital.\"",
    },
  },

  researchSummary: "Irving Janis (1972, 1982) demonstrated that high group cohesiveness coupled with structural insulation and directive leadership consistently produces defective decision outcomes.",
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
      id: 'scen_groupthink_01',
      scenarioType: 'indian_context',
      title: "The Mumbai NBFC Lending Disaster",
      vignette: "The executive committee of a prominent non-banking financial company in Mumbai meets to approve an aggressive ₹2,000-crore commercial real estate loan. The Managing Director is visibly enthusiastic. A junior risk analyst notices that the builder has multiple shell companies and debt covenants are paper-thin. When he timidly clears his throat, a senior director snaps: \"Are you questioning our biggest promoter relationship?\" The analyst falls silent. The loan is approved unanimously. Eighteen months later, the builder defaults, wiping out 40% of the NBFC's equity.",
      breakdownAnalysis: "Textbook Groupthink. Directive leadership and fear of challenging authority created an environment where silence was treated as unanimous consensus, silencing crucial empirical risk data.",
      recommendedAction: "Implement anonymous written risk submissions and mandate a formal Pre-Mortem where the committee assumes default has already happened and analyzes causes.",
    },
  ],

  examples: [
    {
      id: 'ex_groupthink_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_groupthink_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_groupthink_01',
      scenarioContext: "A fintech executive team in Bangalore is voting on acquiring a competitor. The CEO is passionately in favor. Every department head nods and agrees during the round-robin discussion, despite multiple private misgivings.",
      question: "Which practice is most effective at preventing Groupthink from corrupting this acquisition vote?",
      prompt: "Which practice is most effective at preventing Groupthink from corrupting this acquisition vote?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Having the CEO speak first and passionately outline the vision so everyone understands the goal",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Mandating that the CEO speaks LAST, and requiring an independent Devil's Advocate team to present the failure case",
          isCorrect: true,
          explanation: "Having leadership state preferences last and formally institutionalizing dissent (Devil's Advocate) removes the social penalty for voicing critical concerns.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Taking a public show of hands at the very beginning of the meeting",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Encouraging everyone to maintain a positive, cooperative, and optimistic team spirit",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "When everyone thinks alike, nobody is thinking: formal dissent protocols save teams from disaster.",
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
      id: 'ref_groupthink_01',
      title: "Victims of Groupthink: A psychological study of foreign-policy decisions and fiascoes",
      citation: "Janis, I. L. (1972). Victims of Groupthink. Boston: Houghton Mifflin.",
      authors: "Irving L. Janis",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1177/002216788302300412",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Social Psychology', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'conformity_asch_effect', slug: 'conformity-asch-effect', title: 'Conformity (Asch Effect)', relationshipType: 'amplified_by' },
    { topicId: 'confirmation_bias', slug: 'confirmation-bias', title: 'Confirmation Bias', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Groupthink: Why Highly Cohesive Teams Make Disastrous Decisions | Mentalab Mind",
  seoDescription: "A mode of thinking where the desire for harmony or conformity in a group results in irrational or dysfunctional decision-making outcomes.",
  canonicalUrl: '/mind/social-psychology/groupthink',
  ogImageUrl: '/images/mind/groupthink.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Groupthink thrives in high-pressure, insular teams with charismatic leaders. Eight primary symptoms define it: (1) Illusion of invulnerability; (2) Collective rationalization; (3) Unquestioned belief in inherent morality; (4) Stereotyped outgroup views; (5) Direct pressure on dissenters; (6) Self-censorship; (7) Illusion of unanimity; (8) Self-appointed mindguards who shield the leader from contradictory information.",
};

export const TOPIC_GROUPTHINK_HINGLISH: MindTopicDetail = {
  ...TOPIC_GROUPTHINK_EN,
  title: "Groupthink: Intelligent Log Milkar Bewakoofi Bhare Faisle Kyu Lete Hain?",
  subtitle: "Meeting me sab ek doosre ki haan me haan milate hain, aur koi sach bolkar dushmani nahi lena chahta.",
  shortDescription: "Group me sabke sath agree karne aur ladai se bachne ki aisi aadat jo poori team ko galat faisla lene par majboor kar deti hai.",
  oneLineExplanation: "Meeting me shanti banaye rakhne ke chakkar me sachai ko dafan kar dena.",

  summary30s: "Irving Janis ne 1972 me Groupthink concept diya. Jab kisi team me boss bohot assertive hota hai aur log disagreement se darte hain, toh koi bhi khatra point out nahi karta. Har koi sochta hai: \"Baaki sab chup hain toh shayad main hi galat hoon.\" Is fake unity ke chakkar me lakho karodo ke loss ho jate hain.",
  coreConcept: "Groupthink tab hota hai jab unity aur politeness ko facts aur analysis ke upar rakh diya jata hai. Isme Mindguards hote hain jo boss tak buri khabar nahi pahunchne dete, aur log khud hi apne valid sawaalo ko pee jaate hain (Self-censorship).",
  quickTakeaways: [
    "Chuppi ka matlab agreement nahi hota: Log aksar dar ke maare chup rehte hain",
    "Boss ki pehle opinion aana dangerous hai: Leader ko hamesha aakhiri me bolna chahiye",
    "Devil's Advocate: Meeting me ek bande ka kaam officially flaws dhundna hona chahiye",
    "Anonymous Feedback: Sensitive matters par secret voting karwani chahiye",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_GROUPTHINK_EN,
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

export const TOPIC_GROUPTHINK: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_GROUPTHINK_EN,
  hinglish: TOPIC_GROUPTHINK_HINGLISH,
  hi: createLocalizedRecord('hi', "ग्रुपथिंक (Groupthink): अत्यधिक सामूहिकता से उपजे विनाशकारी निर्णय", "जब किसी समूह में मतभेदों से बचने और सहमति बनाए रखने की तीव्र इच्छा निष्पक्ष विश्लेषण और तार्किक सोच पर हावी हो जाती है, तो बड़े पैमाने पर गलत फैसले होते हैं।", [
    "सहमति का कृत्रिम भ्रम",
    "असहमति का दमन न करें",
    "डेविल्स एडवोकेट की भूमिका अनिवार्य"
  ]),
  gu: createLocalizedRecord('gu', "ગ્રુપથિંક: જૂથની એકરૂપતામાં ખોટા નિર્ણયો લેવાની ભૂલ", "સંવાદિતા અને સહમતિ જાળવવાના દબાણમાં જ્યારે ટીમ સાચા જોખમોની અવગણના કરે છે ત્યારે વિનાશક નિર્ણયો લેવાય છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "ग्रुपथिंक: समूहाच्या दबावातून होणारे चुकीचे निर्णय", "एकमत दाखवण्याच्या नादात जेव्हा लोक खरी वस्तुस्थिती सांगणे टाळतात, तेव्हा संस्थांचे प्रचंड नुकसान होते.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "గ్రూప్‌థింక్: సమూహ సామరస్యం కోసం తప్పుడు నిర్ణయాలు తీసుకోవడం", "విబేధాలను అణచివేసి అందరితో ఏకీభవించాలనే కోరిక వినాశకరమైన ఫలితాలకు దారితీస్తుంది.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "குழுச்சிந்தனை: சமரசத்தால் ஏற்படும் தவறான முடிவுகள்", "குழுவில் உள்ள அனைவருடனும் ஒத்துப்போக வேண்டும் என்ற கட்டாயத்தில் உண்மையான இடர்களை புறக்கணிக்கும் நிலை.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಗ್ರೂಪ್‌ಥಿಂಕ್: ಗುಂಪಿನ ಸಾಮರಸ್ಯಕ್ಕಾಗಿ ತಪ್ಪು ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳುವುದು", "ಭಿನ್ನಾಭಿಪ್ರಾಯಗಳನ್ನು ಮರೆಮಾಚಿ ಎಲ್ಲರೂ ಒಪ್ಪಿಕೊಂಡಂತೆ ನಟಿಸುವುದರಿಂದ ದುರಂತಮಯ ಫಲಿತಾಂಶಗಳು ಉಂಟಾಗುತ್ತವೆ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "ഗ്രൂപ്പ്തിങ്ക്: വിയോജിപ്പുകൾ ഒതുക്കിവെച്ച് കൂട്ടത്തോടെ തെറ്റായ തീരുമാനങ്ങൾ എടുക്കൽ", "ഗ്രൂപ്പിലെ സമാധാനം നിലനിർത്താൻ ശരിയായ സംശയങ്ങൾ പ്രകടിപ്പിക്കാതെ ഇരിക്കുന്നത് വൻ പരാജയങ്ങൾക്ക് വഴിവെക്കുന്നു.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "গ্রুপথিংক: দলের ঐকমত্য বজায় রাখতে গিয়ে ভুল সিদ্ধান্ত নেওয়ার ফাঁদ", "দলে বিরোধ এড়াতে গিয়ে যৌক্তিক সমালোচনা বন্ধ করে দিলে মারাত্মক বিপর্যয় ঘটে।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਗਰੁੱਪਥਿੰਕ: ਸਹਿਮਤੀ ਦੇ ਚੱਕਰ ਵਿੱਚ ਲਏ ਜਾਣ ਵਾਲੇ ਵਿਨਾਸ਼ਕਾਰੀ ਫੈਸਲੇ", "ਜਦੋਂ ਟੀਮ ਵਿੱਚ ਬਹਿਸ ਤੋਂ ਬਚਣ ਲਈ ਸਾਰੇ ਇੱਕੋ ਗੱਲ ਨਾਲ ਸਹਿਮਤ ਹੋ ਜਾਂਦੇ ਹਨ ਅਤੇ ਜੋਖਮਾਂ ਨੂੰ ਅਣਦੇਖਾ ਕਰ ਦਿੰਦੇ ਹਨ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "گروپ تھنک: اتحاد کے دباؤ میں اجتماعی غلط فیصلے", "جب کسی گروہ میں ہم آہنگی برقرار رکھنے کی خواہش آزادانہ اور تنقیدی سوچ پر غالب آ جاتی ہے تو تباہ کن نتائج برآمد ہوتے ہیں۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ଗ୍ରୁପ୍‌ଥିଙ୍କ୍: ଗୋଷ୍ଠୀ ସହମତି ପାଇଁ ଭୁଲ୍ ନିଷ୍ପତ୍ତି ନେବାର ମନସ୍ତତ୍ତ୍ୱ", "ଦଳରେ ବିବାଦ ଏଡ଼ାଇବା ପାଇଁ ସତ୍ୟ ତଥ୍ୟକୁ ଲୁଚାଇ ରଖି ସମସ୍ତେ ସହମତ ହେବାର ଭୟଙ୍କର ପରିଣାମ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "গ্ৰুপথিঙ্ক: দলীয় ঐক্য ৰক্ষাৰ স্বাৰ্থত ভুল সিদ্ধান্ত গ্ৰহণৰ প্ৰৱণতা", "দলত বিৰোধিতাৰ ভয়ত নিজৰ সঠিক সন্দেহ ব্যক্ত নকৰাৰ ফলত সৃষ্টি হোৱা ভুল সিদ্ধান্ত।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
