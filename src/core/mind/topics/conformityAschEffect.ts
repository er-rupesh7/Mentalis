import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd
 * Category: Social Psychology (social_psychology)
 * 
 * Academic Grounding:
 * - Asch (1951): Effects of group pressure upon the modification and distortion of judgments
 * - Deutsch & Gerard (1955): A study of normative and informational social influences upon individual judgment
 * - Bond & Smith (1996): Culture and conformity: A meta-analysis of studies using Asch's line judgment task
 */

export const TOPIC_CONFORMITY_ASCH_EN: MindTopicDetail = {
  id: 'conformity_asch_effect',
  categoryId: 'social_psychology',
  slug: 'conformity-and-asch-effect',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 3,
  viewCount: 6540,
  shareCount: 490,
  bookmarkCount: 1180,
  title: 'Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd',
  subtitle: 'The terrifying social pressure that compels people to agree with an obviously false consensus rather than stand alone.',
  shortDescription: 'The phenomenon where an individual alters their overt judgment or behavior to match the unanimous consensus of a group, even when the group is glaringly incorrect.',
  oneLineExplanation: 'Agreeing that Line A equals Line C because five strangers before you said so.',

  summary30s: 'Solomon Asch\'s classic 1951 experiments revealed a chilling truth: when surrounded by unanimous peers who confidently assert an obvious falsehood, 75% of participants conform at least once, denying what their own eyes clearly see. The biological fear of social ostracization is powerful enough to override basic visual perception.',

  coreConcept: 'Conformity operates through two distinct psychological mechanisms identified by Morton Deutsch and Harold Gerard (1955): Informational Social Influence (assuming the group possesses superior knowledge or secret context) and Normative Social Influence (knowing the group is completely wrong, but publicly agreeing to avoid ridicule, exclusion, or conflict). When a group is unanimous, the cognitive pain of isolation lights up the exact same dorsal anterior cingulate cortex circuits as physical injury.',
  summary60s: 'Imagine sitting in an executive board meeting. The CEO presents a new strategy that is obviously flawed and mathematically unworkable. The first three senior directors eagerly praise the plan. When it is your turn to speak, your palms sweat and your throat tightens. Do you voice your mathematical objection, or do you nod and say: "Yes, I agree, exciting direction"? Asch proved that even when there are zero financial penalties or physical threats, the sheer weight of unanimous social consensus causes humans to suppress their independent rationality.',

  quickTakeaways: [
    'The 75% Conformity Baseline: 3 out of 4 humans will cave to an obvious group error at least once when consensus is unanimous',
    'The "Lone Dissenter" Power: If even ONE person in the room disagrees with the group, conformity drops by over 80%',
    'Perceptual Distortion: Brain scans (fMRI) show that high social pressure actually alters visual cortex processing, not just verbal answers',
    'Anonymous Ballot Antidote: High-stakes voting in organizations must always be conducted through private, blind ballots',
  ],

  whyItHappens: 'Evolutionary survival mechanics. To ancestral hominids, banishment from the tribe was a literal death sentence. Survival depended upon harmony and collective alignment. Standing out as a stubborn dissenter triggered dangerous tribal friction.',
  evolutionaryMechanism: 'A solitary human in the Pleistocene era could not hunt mammoth or defend against rival clans. Natural selection embedded intense neurological distress into social rejection, prioritizing group belonging over objective individual accuracy.',

  howItWorks: 'The conformity loop: (1) Ambiguity or Social Stare: Facing a decision under group surveillance; (2) Neurological Alarm: Disagreement registers as social threat in the amygdala; (3) Rationalization: Concluding either "maybe they know something I don\'t" or "it\'s not worth fighting this"; (4) Compliance: Publicly endorsing the consensus.',
  whereYouEncounterIt: 'Corporate budget meetings, standing ovations at concerts, jury deliberations, college fraternity hazing rituals, and political echo chambers.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Solomon Asch’s 1951 Line Experiment',
    description: 'What happened when a participant was asked to match line lengths with 7 actors who lied.',
    analogySideA: {
      label: 'Solitary Testing (Control Condition)',
      detail: 'When tested alone with no actors in the room, participants were accurate 99% of the time.',
    },
    analogySideB: {
      label: 'Unanimous Group Pressure (Experimental Condition)',
      detail: 'When 7 actors unanimously chose the wrong line, 75% of participants agreed with the wrong answer at least once.',
    },
  },

  researchSummary: 'In Asch\'s 1951 study, male college students were placed in a room with 7 confederates (actors). They were shown a card with a reference line, and a second card with three comparison lines. On 12 critical trials, all 7 actors confidently picked a line that was blatantly shorter or longer. Over one-third (36.8%) of all responses in the critical trials conformed to the incorrect group choice.',
  limitationsAndControversies: 'Bond & Smith\'s 1996 meta-analysis across 17 countries revealed that conformity levels are significantly higher in collectivist cultures (e.g., East Asia, parts of South Asia and Africa) than individualistic Western cultures, and that conformity in the US declined moderately between the 1950s and 1990s.',
  commonMisconceptions: 'Common myth: "People conform only because they are weak-willed or scared of conflict." Reality: Asch discovered informational conformity as well: many participants genuinely began to question the accuracy of their own sensory perception under group pressure.',

  howToRecognize: [
    'Staying silent in a meeting when you know a strategic plan has a fatal flaw, simply because everyone else seemed enthusiastic',
    'Laughing at an offensive or unfunny joke because the rest of the group is laughing loudly',
    'Purchasing clothing or adopting slang that you privately dislike because "everyone in my peer group is doing it"',
    'Changing your political or philosophical stance after entering a new social group to avoid friction',
  ],

  scenarios: [
    {
      id: 'scen_asch_01',
      scenarioType: 'indian_context',
      title: 'The Silent Architecture Review in Bangalore',
      vignette: 'During a software architecture review at a tech unicorn in Bangalore, the Chief Architect proposes migrating their entire database cluster to an untested, trendy new database engine. Six lead engineers, eager to impress the Chief Architect, immediately praise the idea as "cutting-edge and visionary." Deepa, the staff database reliability engineer, knows from benchmark data that this new engine will corrupt transaction integrity under high write load. Yet seeing the unanimous nodding in the room, Deepa swallows her objection and says: "Looks like a great move, looking forward to testing."',
      breakdownAnalysis: 'Deepa fell victim to normative conformity under Asch pressure. Even though she possessed empirical evidence that the consensus was disastrous, the fear of being seen as "uncooperative" or "the only negative person in the room" suppressed her technical integrity.',
      recommendedAction: 'Appoint an institutional Devil\'s Advocate or require written anonymous objections before live discussion: "Let’s do a silent 5-minute write-up where everyone must list 2 fatal failure modes before we verbally discuss."',
    },
  ],

  examples: [
    {
      id: 'ex_asch_01',
      domain: 'general',
      displayOrder: 1,
      title: 'The Standing Ovation Cascade',
      description: 'At the end of a mediocre theater performance, five enthusiastic people in the front row stand up. Within 15 seconds, the entire 800-person auditorium is standing and clapping, even though 70% of attendees privately thought the play was boring.',
      takeaway: 'Social proof and normative conformity combine to create artificial unanimous consensus.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_asch_01',
      scenarioContext: 'A jury of twelve citizens is deliberating a criminal trial. Eleven jurors vote "Guilty" within five minutes. The twelfth juror, an accountant, has serious reasonable doubts about an unverified fingerprint timeline, but notices that the other eleven jurors are visibly annoyed at the prospect of a prolonged deliberation.',
      question: 'According to Asch\'s research, what intervention would most effectively empower the twelfth juror to express their true judgment?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Requiring that all votes be conducted by secret written ballot rather than a public show of hands',
          explanation: 'Accurate: eliminating public surveillance removes normative social influence and restores independent judgment.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Giving the jury a 10-minute break so the majority can privately persuade the twelfth juror',
          explanation: 'This merely increases social intimidation and conformity pressure.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Having the judge order the twelfth juror to respect the wisdom of the majority',
          explanation: 'This adds authority bias on top of conformity, destroying the constitutional right to an independent jury.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'When independence of thought is critical, eliminate public surveillance through secret ballots.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Privately write down your independent evaluation before listening to the consensus of a meeting or social group.',
  psychologicalDefenses: [
    {
      title: 'Be the First Dissenter (Break Unanimity)',
      instruction: 'If you see an error in a group, speak up immediately. Asch proved that even a single dissenter reduces group conformity from 37% down to below 6%, freeing others to speak their truth.',
    },
    {
      title: 'Normalize "Pre-Mortem" Secret Balloting',
      instruction: 'Before any major group decision, require all participants to write down their concerns and vote anonymously before any verbal debate begins.',
    },
    {
      title: 'Rotate the Designated Skeptic Role',
      instruction: 'In teams, formally designate one person whose explicit job is to find the flaws in the consensus. This removes the social stigma of being "difficult."',
    },
  ],

  reflectionPrompt: 'Have you ever stayed silent in a group discussion even though you knew the consensus was factually incorrect? What held you back?',

  references: [
    {
      id: 'ref_asch_1951',
      authors: 'Asch, S. E.',
      year: 1951,
      title: 'Effects of group pressure upon the modification and distortion of judgments',
      publicationName: 'Groups, Leadership, and Men',
      volumeIssue: '222-236',
      doi: '10.1037/10003-000',
      evidenceStrength: 'historical_classic',
    },
    {
      id: 'ref_deutsch_1955',
      authors: 'Deutsch, M., & Gerard, H. B.',
      year: 1955,
      title: 'A study of normative and informational social influences upon individual judgment',
      publicationName: 'The Journal of Abnormal and Social Psychology',
      volumeIssue: '51(3), 629-636',
      doi: '10.1037/h0046408',
      evidenceStrength: 'empirical_study',
    },
  ],

  relatedTopics: [
    {
      topicId: 'social_proof',
      slug: 'social-proof-and-bandwagon',
      title: 'Social Proof & The Bandwagon Effect',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'bystander_effect',
      slug: 'bystander-effect',
      title: 'The Bystander Effect',
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
    ...TOPIC_CONFORMITY_ASCH_EN,
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

export const TOPIC_CONFORMITY_ASCH: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_CONFORMITY_ASCH_EN,
  hinglish: {
    ...TOPIC_CONFORMITY_ASCH_EN,
    title: 'Conformity & The Asch Effect: Bheed Ke Darr Se Aankhon Par Shak Karna',
    subtitle: 'Jab char log galat ko sahi bolein, toh hum chupchap unki baat maan kar haan me haan milane lagte hain.',
    shortDescription: 'Ek aisa psychological experiment jisme 75% logon ne apni aankhon se dekh kar bhi group ke galat faisle ko sahi man liya.',
    oneLineExplanation: 'Saari line chhoti dikhte huye bhi sabke kehne par badi bol dena.',
    summary30s: 'Solomon Asch ne 1951 me prove kiya tha ki jab koi group milkar ek obvious jhooth bolta hai, toh 75% log akela padne ke darr se apna sach chhod dete hain aur bheed ke sath ho lete hain. Hamara dimaag akele alag khade hone ko physically dardnaak samajhta hai.',
  },
  hi: {
    ...TOPIC_CONFORMITY_ASCH_EN,
    title: 'Conformity & Asch Effect (अनुरूपता और ऐश प्रभाव)',
    subtitle: 'समूह के दबाव में अपनी ही आँखों से देखे गए सत्य को नकार देने की मनोवैज्ञानिक विवशता।',
    shortDescription: 'सुलैमान ऐश का प्रसिद्ध प्रयोग जिसने दर्शाया कि बहुमत के विरोध का डर लोगों को स्पष्ट झूठ स्वीकार करने पर मजबूर कर देता है।',
    oneLineExplanation: 'सभी के गलत उत्तर देने पर स्वयं भी गलत उत्तर चुन लेना।',
    summary30s: 'अनुरूपता (Conformity) और ऐश प्रभाव यह दर्शाता है कि 75% लोग जीवन में कम से कम एक बार समूह के सर्वसम्मत दबाव के आगे झुक जाते हैं, भले ही समूह का निर्णय आँखों के सामने गलत क्यों न हो। सामाजिक बहिष्कार का भय मस्तिष्क में शारीरिक दर्द जैसी प्रतिक्रिया उत्पन्न करता है।',
  },
  gu: createLocalizedRecord('gu', "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd (પ્રભાવ)", "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd (प्रभाव)", "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd (ప్రభావం)", "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd (விளைவு)", "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd (ಪರಿಣಾಮ)", "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd (സ്വാധീനം)", "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd (প্রভাব)", "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd (ਪ੍ਰਭਾਵ)", "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd (اثر)", "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd (ପ୍ରଭାବ)", "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd (প্ৰভাৱ)", "Conformity & The Asch Effect: Why We Deny Our Eyes to Fit the Crowd সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
