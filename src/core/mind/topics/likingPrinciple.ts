import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Persuasion & Influence Track
 * Topic: The Liking Principle: Similarity, Praise, and Cooperation
 * Category: persuasion_influence
 * Academic Grounding: Robert B. Cialdini (1984) (10.1086/209040)
 */

export const TOPIC_LIKING_PRINCIPLE_EN: MindTopicDetail = {
  id: 'liking_principle',
  categoryId: 'persuasion_influence',
  slug: 'liking-principle',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 10,
  viewCount: 4300,
  shareCount: 350,
  bookmarkCount: 760,
  title: "The Liking Principle: Similarity, Praise, and Cooperation",
  subtitle: "The human tendency to say yes to people we know, admire, or find similar to ourselves, mediated by compliments, physical attractiveness, and common goals.",
  shortDescription: "A universal rule of human influence demonstrating that people are significantly more compliant and cooperative with those they personally like and perceive as similar.",
  oneLineExplanation: "People don't buy what you sell; they buy the person selling it, and they buy themselves in you.",

  summary30s: "Codified by Robert Cialdini in 1984 and backed by Donn Byrne's classic similarity research, the Liking Principle explains why Tupperware parties and modern influencer marketing generate billions. We overwhelmingly prefer to say yes to people we like. Liking is systematically triggered by three empirical levers: (1) Similarity (shared backgrounds, hometowns, or hobbies); (2) Genuine compliments and praise; (3) Cooperative alliance toward a shared objective.",
  coreConcept: "The liking heuristic bypasses analytical skepticism. When we like someone, the Halo Effect automatically attributes positive virtues to their proposals (e.g., \"She is warm and went to my college, so this investment deal must be safe and honest\"). Master persuaders establish instant liking through mirroring posture, researching shared connections, and offering disarming, non-transactional compliments.",
  summary60s: "In landmark negotiation experiments at Northwestern University, MBA students conducting transactional business negotiations reached agreement only 55% of the time, with 30% ending in costly impasse. But when students were instructed to exchange brief personal biographical information first and identify a single shared similarity (e.g., both grew up in the same region, love football), agreement skyrocketed to 90%, and total joint deal value grew by 18%.",
  quickTakeaways: [
    "The Similarity Accelerator: Genuine shared connections dissolve defensive skepticism in minutes",
    "The Power of Sincere Praise: Compliments generate positive social affect even when people know the speaker has an agenda",
    "The Cooperative Frame: Transform adversarial meetings by emphasizing: \"We are on the same side of the table tackling this problem\"",
    "The Salesperson Quarantine: Separate your affection for the charismatic salesperson from the cold economic merits of the contract",
  ],

  whyItHappens: "Evolutionary ingroup safety and reciprocity. In ancestral times, people who looked, talked, and acted like you were blood relatives who protected your survival.",
  evolutionaryMechanism: "Hominid survival depended on rapid alliance formation; liking and mirroring reinforced tribal bonds and mutual grooming rituals.",
  howItWorks: "Persuader uncovers shared trait -> Expresses warmth/compliment -> Target experiences positive dopamine -> Liking heuristic activates -> Critical guard drops -> Target complies.",
  whereYouEncounterIt: "Matrimonial meetings, car sales, college admissions interviews, job hiring committees, and Instagram influencer endorsements.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Cold Transactional Approach vs. Warm Similarity Connection",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Pure Transactional Logic (High Impasse)",
      detail: "\"Here is the contract clause. Our price is non-negotiable; review lines 40 to 60 and sign by Friday.\"",
    },
    analogySideB: {
      label: "Liking & Commonality Alignment (High Agreement)",
      detail: "\"I noticed you graduated from BITS Pilani too! Let us collaborate on solving this timeline puzzle together.\"",
    },
  },

  researchSummary: "Cialdini (1984) and Byrne (1971) established that interpersonal attraction and perceived similarity dramatically elevate behavioral compliance.",
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
      id: 'scen_liking_principle_01',
      scenarioType: 'indian_context',
      title: "The Automobile Showroom Negotiation in Jaipur",
      vignette: "Manav walks into a car dealership in Jaipur looking at compact SUVs. Salesman Vikram notices a small sticker on Manav's motorcycle helmet from a cricket academy in Ajmer. Vikram exclaims warmly: \"Sir, did you train at Mayo College grounds in Ajmer? My younger brother played Ranji trophy trials there!\" For the next 20 minutes, they swap nostalgic stories about Ajmer kachoris and cricket rivalries. When Vikram recommends adding ₹45,000 worth of optional ceramic paint coating and extended warranties, Manav agrees without negotiating: \"Vikram is a great guy, he wouldn't steer me wrong.\"",
      breakdownAnalysis: "A textbook real-world demonstration of the Liking Principle. Vikram established immediate similarity and warm social rapport, activating the Halo Effect and disarming Manav's natural consumer skepticism.",
      recommendedAction: "Before signing any agreement, step outside the showroom, take a 15-minute walk, and evaluate the contract purely on paper without the charming salesperson present.",
    },
  ],

  examples: [
    {
      id: 'ex_liking_principle_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_liking_principle_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_liking_principle_01',
      scenarioContext: "An HR interview panel is hiring a senior financial analyst. Candidate A has superior econometric modeling scores but is formal and aloof. Candidate B has slightly lower technical scores but discovered a shared passion for Himalayan trekking with the hiring director and spent 10 minutes bonding over mountain trails.",
      question: "Which empirical influence dynamic explains why the hiring director is likely to rank Candidate B higher despite lower technical test metrics?",
      prompt: "Which empirical influence dynamic explains why the hiring director is likely to rank Candidate B higher despite lower technical test metrics?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'beginner',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Social loafing in financial analysis",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "The Liking Principle triggering the Halo Effect, where perceived similarity and warmth inflate the candidate's perceived overall competence",
          isCorrect: true,
          explanation: "The Liking Principle proves that interpersonal similarity and warmth trigger the Halo Effect, leading evaluators to overlook objective gaps and favor people they like.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Diffusion of responsibility across the interview panel",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "The Dunning-Kruger effect regarding mountain trekking",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Distinguish between who you like and what is true: charisma is not competence.",
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
      id: 'ref_liking_principle_01',
      title: "Influence: The Psychology of Persuasion",
      citation: "Cialdini, R. B. (1984). Influence: The Psychology of Persuasion. New York: William Morrow & Company.",
      authors: "Robert B. Cialdini",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1086/209040",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Persuasion & Influence', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'halo_effect', slug: 'halo-effect', title: 'The Halo Effect', relationshipType: 'amplified_by' },
    { topicId: 'ingroup_outgroup_bias', slug: 'ingroup-outgroup-bias', title: 'Ingroup-Outgroup Bias', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "The Liking Principle: Similarity, Praise, and Cooperation | Mentalab Mind",
  seoDescription: "A universal rule of human influence demonstrating that people are significantly more compliant and cooperative with those they personally like and perceive",
  canonicalUrl: '/mind/persuasion-and-influence/liking-principle',
  ogImageUrl: '/images/mind/liking-principle.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "The liking heuristic bypasses analytical skepticism. When we like someone, the Halo Effect automatically attributes positive virtues to their proposals (e.g., \"She is warm and went to my college, so this investment deal must be safe and honest\"). Master persuaders establish instant liking through mirroring posture, researching shared connections, and offering disarming, non-transactional compliments.",
};

export const TOPIC_LIKING_PRINCIPLE_HINGLISH: MindTopicDetail = {
  ...TOPIC_LIKING_PRINCIPLE_EN,
  title: "The Liking Principle: Jo Pasand Aata Hai, Uske Har Kaam Me Haan Hoti Hai",
  subtitle: "Hum un logo ko mana nahi kar paate jinhe hum pasand karte hain, jo hamari tareef karte hain ya jo hamare jaise dikhte hain.",
  shortDescription: "Ek aisi human tendency jisme insaan un logo ki baat zyada maanta hai jo use attractive lagte hain ya jinse uska koi common background milta hai.",
  oneLineExplanation: "Log product nahi khareedte; log bechne wale ko khareedte hain.",

  summary30s: "1984 me Robert Cialdini ne Liking Principle explain kiya. Tupperware parties aur modern Instagram influencers isi par chalte hain. Hume jo insaan accha lagta hai, hum uske logic ko check karna band kar dete hain. Similarity (jaise same hometown ya college), genuine tareef aur dosti se kisi bhi deal par haan bulwana 10 guna aasan ho jata hai.",
  coreConcept: "Interview me ya sales me jab koi bolta hai \"Arey aap bhi Lucknow se hain? Main bhi Hazratganj me rehta tha!\", toh hamara defense turant toot jata hai. Hume lagta hai ki yeh insaan hamara apna hai, aur hum uski mehengi shartein bhi maan lete hain.",
  quickTakeaways: [
    "Similarity Magic: Choti si common cheez bhi dushmani ko dosti me badal deti hai",
    "Tareef Ka Asar: Sachchi tareef sunna har insaan ko pasand hai, isse barriers girte hain",
    "Charisma vs Quality: Dukan ke sales person se impress hokar kharab product mat khareedo",
    "The 15-Minute Rule: Faisla lene se pehle room se bahar niklo aur paper par numbers dekho",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_LIKING_PRINCIPLE_EN,
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

export const TOPIC_LIKING_PRINCIPLE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_LIKING_PRINCIPLE_EN,
  hinglish: TOPIC_LIKING_PRINCIPLE_HINGLISH,
  hi: createLocalizedRecord('hi', "पसंदगी का सिद्धांत (The Liking Principle): समानता, प्रशंसा और सहयोग की शक्ति", "रॉबर्ट सियालडिनी का प्रमुख सिद्धांत जो दर्शाता है कि मनुष्य उन लोगों की बातों, प्रस्तावों और अनुरोधों को आसानी से स्वीकार कर लेता है जिन्हें वह व्यक्तिगत रूप से पसंद करता है, जो उसके जैसे पृष्ठभूमि साझा करते हैं या जो उसकी प्रशंसा करते हैं।", [
    "समानता और साझा अनुभव का प्रभाव (Similarity)",
    "सच्ची प्रशंसा की शक्ति",
    "व्यक्तिगत पसंद और अनुबंध की गुणवत्ता में अंतर करना"
  ]),
  gu: createLocalizedRecord('gu', "ધ લાઇકિંગ પ્રિન્સિપલ: સમાનતા, પ્રશંસા અને સ્નેહનો પ્રભાવ", "જે લોકો આપણને ગમે છે, જે આપણા જેવા છે અથવા જે આપણી પ્રશંસા કરે છે તેમની વાતો અને શરતો આપણે સરળતાથી સ્વીકારી લઈએ છીએ.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "द लायकिंग प्रिन्सिपल: साम्य, स्तुती आणि स्नेहाचा निर्णयप्रक्रियेवरील प्रभाव", "आपल्याला आवडणाऱ्या किंवा आपल्यासारख्या पार्श्वभूमी असलेल्या लोकांच्या मागण्यांना आपण सहज होकार देतो हा मानवी प्रभाव नियम.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "ది లైకింగ్ ప్రిన్సిపల్: సామీప్యత, ప్రశంస మరియు సహకారంతో ఒప్పించడం", "మనకు నచ్చిన వ్యక్తులు, మనలాంటి ఆలోచనలు ఉన్నవారు లేదా మనల్ని మెచ్చుకునే వారి మాటలకు మనం సులభంగా లోబడిపోతాం.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "விருப்பக் கோட்பாடு: ஒற்றுமை, பாராட்டு மற்றும் நட்பின் செல்வாக்கு", "நமக்கு பிடித்தவர்கள், நம்மைப் போன்ற பின்னணி கொண்டவர்கள் அல்லது நம்மைப் பாராட்டுபவர்களின் கோரிக்கைகளுக்கு நாம் எளிதில் சம்மதிக்கிறோம்.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ದಿ ಲೈಕಿಂಗ್ ಪ್ರಿನ್ಸಿಪಲ್: ಸಾಮ್ಯತೆ, ಹೊಗಳಿಕೆ ಮತ್ತು ಸೌಹಾರ್ದತೆಯ ಪ್ರಭಾವ", "ನಮಗೆ ಇಷ್ಟವಾಗುವ, ನಮ್ಮಂತೆಯೇ ಇರುವ ಅಥವಾ ನಮ್ಮನ್ನು ಹೊಗಳುವ ವ್ಯಕ್ತಿಗಳ ಮಾತುಗಳಿಗೆ ನಾವು ತಕ್ಷಣ ಒಪ್ಪಿಗೆ ನೀಡುವ ಮಾನಸಿಕ ಪ್ರವೃತ್ತಿ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "ദി ലൈക്കിംഗ് പ്രിൻസിപ്പിൾ: സാമ്യത, പ്രശംസ, സൗഹൃദം എന്നിവയുടെ സ്വാധീനം", "നമുക്ക് ഇഷ്ടമുള്ളവരുടെയും നമ്മോട് സമാനതയുള്ളവരുടെയും പ്രശംസിക്കുന്നവരുടെയും ആവശ്യങ്ങൾക്ക് നാം എളുപ്പത്തിൽ വഴങ്ങുന്നു.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "দ্য লাইকিং প্রিন্সিপল: সাদৃশ্য, প্রশংসা এবং সখ্যতার মনস্তাত্ত্বিক প্রভাব", "আমরা যাদের পছন্দ করি বা যাদের সাথে আমাদের মিল খুঁজে পাই, তাদের অযৌক্তিক প্রস্তাবেও আমরা সহজে না বলতে পারি না।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਦ ਲਾਈਕਿੰਗ ਪ੍ਰਿੰਸੀਪਲ: ਪਸੰਦ, ਤਾਰੀਫ਼ ਅਤੇ ਸਾਂਝ ਦੀ ਤਾਕਤ", "ਲੋਕ ਉਹਨਾਂ ਦੀ ਗੱਲ ਬਹੁਤ ਆਸਾਨੀ ਨਾਲ ਮੰਨ ਲੈਂਦੇ ਹਨ ਜਿਨ੍ਹਾਂ ਨੂੰ ਉਹ ਪਸੰਦ ਕਰਦੇ ਹਨ ਜਾਂ ਜਿਨ੍ਹਾਂ ਦਾ ਪਿਛੋਕੜ ਉਹਨਾਂ ਵਰਗਾ ਹੁੰਦਾ ਹੈ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "پسندیدگی کا اصول: مماثلت، تعریف اور باہمی تعلق کا اثر", "انسان ان لوگوں کے مطالبات کو باآسانی تسلیم کر لیتا ہے جنہیں وہ پسند کرتا ہے، جو اس کی تعریف کرتے ہیں یا اس کے ہم مزاج ہوتے ہیں۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ଦି ଲାଇକିଂ ପ୍ରିନ୍ସିପଲ୍: ସାମଞ୍ଜସ୍ୟ, ପ୍ରଶଂସା ଏବଂ ବନ୍ଧୁତାର ପ୍ରଭାବ", "ଯେଉଁ ଲୋକଙ୍କୁ ଆମେ ପସନ୍ଦ କରୁ ବା ଯେଉଁମାନେ ଆମର ପ୍ରଶଂସା କରନ୍ତି, ସେମାନଙ୍କ କଥା ଆମେ ବିନା ବିଚାରରେ ମାନିନେବାର ପ୍ରବୃତ୍ତି।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "দ্য লাইকিং প্ৰিন্সিপল: সাদৃশ্য, প্ৰশংসা আৰু আন্তৰিকতাৰ প্ৰভাৱ", "যাক আমি ভাল পাওঁ বা যিয়ে আমাক প্ৰশংসা কৰে, তেওঁলোকৰ অনুৰোধত আমি অতি সহজে সন্মতি জনোৱাৰ মনস্তাত্ত্বিক স্বভাৱ।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
