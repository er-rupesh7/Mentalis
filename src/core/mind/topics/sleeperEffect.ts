import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Persuasion & Influence Track
 * Topic: The Sleeper Effect: How Unreliable Claims Gain Power Over Time
 * Category: persuasion_influence
 * Academic Grounding: Carl I. Hovland et al. (1949) (10.1037/10049-000)
 */

export const TOPIC_SLEEPER_EFFECT_EN: MindTopicDetail = {
  id: 'sleeper_effect',
  categoryId: 'persuasion_influence',
  slug: 'sleeper-effect',
  difficulty: 'advanced',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 11,
  viewCount: 4410,
  shareCount: 364,
  bookmarkCount: 782,
  title: "The Sleeper Effect: How Unreliable Claims Gain Power Over Time",
  subtitle: "The delayed increase of the effect of a message that is accompanied by a discounting cue, caused by the brain decoupling source from content.",
  shortDescription: "A psychological phenomenon where a persuasive message from a low-credibility source initially has little impact, but increases in persuasiveness over time.",
  oneLineExplanation: "You forget who told you the rumor, but you remember the rumor as a fact.",

  summary30s: "Discovered in 1949 by Carl Hovland and colleagues studying WWII army propaganda, the Sleeper Effect explains how fake news, political slander, and supermarket tabloids poison public beliefs. When people initially hear an argument from an untrustworthy source, they discount it. However, over time, the brain forgets the source much faster than the content itself—leaving the bare claim standing as accepted truth.",
  coreConcept: "The sleeper effect occurs through Source-Decoupling and Disassociation. Memory for content (what was said) and memory for source (who said it and whether they were biased) are stored in separate neural pathways. Episodic source memory decays exponentially faster than semantic conceptual memory. Weeks later, the claim feels familiar, and cognitive fluency misinterprets familiarity as truth.",
  summary60s: "Hovland showed soldiers the orientation film \"Why We Fight\". Immediately after the film, soldiers discounted claims because they knew it was official Pentagon propaganda. However, when re-tested nine weeks later, the soldiers had forgotten the source, and their attitudes had shifted significantly in favor of the film's claims. The propaganda had \"slept\" and awakened with heightened power.",
  quickTakeaways: [
    "Source Decay Asymmetry: Humans forget the liar much faster than they forget the lie",
    "The Familiarity Trap: Repeated exposure to debunked claims makes them feel true because memory decouples the debunking",
    "The Counter-Inoculation Rule: When recording a fact, permanently bind the source: \"X claimed Y, and X is discredited because Z\"",
    "Do Not Repeat Falsehoods: When refuting rumors, avoid repeating the fake claim; reinforce the positive truth instead",
  ],

  whyItHappens: "Differential memory decay. Semantic content integrates into general world knowledge, while episodic source tags degrade quickly.",
  evolutionaryMechanism: "In ancestral oral traditions, information was shared across campfire stories; remembering useful survival advice mattered more than remembering who whispered it.",
  howItWorks: "Low-credibility source makes sensational claim -> Target discounts it -> Weeks pass -> Source forgotten -> Claim remains familiar in memory -> Target accepts claim as verified fact.",
  whereYouEncounterIt: "WhatsApp forwarded messages, election campaign smear ads, corporate whisper campaigns, health conspiracy theories, and celebrity gossip.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Immediate Discounting vs. Delayed Acceptance",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Day 1 (Immediate Discounting)",
      detail: "\"A shady anonymous YouTube channel claims this beverage causes bone decay; I reject it as sensationalist clickbait.\"",
    },
    analogySideB: {
      label: "Day 60 (Sleeper Effect Activation)",
      detail: "\"I vaguely recall reading somewhere that this beverage damages bones; I will stop buying it to be safe.\"",
    },
  },

  researchSummary: "Hovland, Lumsdaine & Sheffield (1949) documented the sleeper effect in \"Experiments on Mass Communication,\" confirmed by Cook et al. (1979).",
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
      id: 'scen_sleeper_effect_01',
      scenarioType: 'indian_context',
      title: "The WhatsApp Forward in a Lucknow Housing Society",
      vignette: "During a municipal election in Lucknow, a forwarded WhatsApp message claims that a respected local civil engineer running for ward corporator took bribes on a road construction project. When Alok first receives the forward, he notices it comes from an anonymous meme page with obvious spelling errors: \"This is fake political mudslinging.\" He deletes the message. Two months later, while discussing neighborhood candidates with fellow residents at the park, Alok remarks: \"I don't know the details, but I recall hearing that the engineer had some financial irregularity in road tenders.\" The smear has completely succeeded in Alok's subconscious.",
      breakdownAnalysis: "A textbook real-world case of the Sleeper Effect. Alok successfully discounted the message on Day 1 because of the low-credibility source. But over 60 days, his brain decoupled the source tag while preserving the semantic slander, converting a deleted rumor into personal memory.",
      recommendedAction: "When you encounter a debunked rumor, do not file it away as \"unimportant\"; actively overwrite it with verified facts from authoritative sources.",
    },
  ],

  examples: [
    {
      id: 'ex_sleeper_effect_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_sleeper_effect_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_sleeper_effect_01',
      scenarioContext: "A pharmaceutical competitor leaks an anonymous blog post claiming a leading Indian vaccine manufacturer has quality control problems. Health reporters initially dismiss the blog as unverified corporate sabotage. Four months later, several mainstream journalists write op-eds expressing vague concerns about the company's manufacturing standards.",
      question: "Which empirical cognitive phenomenon explains the journalists' shift in attitude?",
      prompt: "Which empirical cognitive phenomenon explains the journalists' shift in attitude?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'advanced',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Prospect Theory risk aversion",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "The Sleeper Effect: the journalists forgot the disreputable origin while the negative semantic claim persisted in memory",
          isCorrect: true,
          explanation: "The Sleeper Effect occurs when a message from a discounted source gains persuasive power over time because memory for the source fades faster than memory for the message content.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Social loafing among pharmaceutical journalists",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "The Pygmalion effect improving the blog's credibility",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Audit your memories: frequently ask yourself, \"Do I actually know this is true, or do I just remember hearing it somewhere?\"",
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
      id: 'ref_sleeper_effect_01',
      title: "Experiments on Mass Communication: The Sleeper Effect",
      citation: "Hovland, C. I., Lumsdaine, A. A., & Sheffield, F. D. (1949). Experiments on Mass Communication. Princeton University Press.",
      authors: "Carl I. Hovland et al.",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1037/10049-000",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Persuasion & Influence', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'availability_heuristic', slug: 'availability-heuristic', title: 'The Availability Heuristic', relationshipType: 'amplified_by' },
    { topicId: 'belief_perseverance', slug: 'belief-perseverance', title: 'Belief Perseverance', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "The Sleeper Effect: How Unreliable Claims Gain Power Over Time | Mentalab Mind",
  seoDescription: "A psychological phenomenon where a persuasive message from a low-credibility source initially has little impact, but increases in persuasiveness over time.",
  canonicalUrl: '/mind/persuasion-and-influence/sleeper-effect',
  ogImageUrl: '/images/mind/sleeper-effect.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "The sleeper effect occurs through Source-Decoupling and Disassociation. Memory for content (what was said) and memory for source (who said it and whether they were biased) are stored in separate neural pathways. Episodic source memory decays exponentially faster than semantic conceptual memory. Weeks later, the claim feels familiar, and cognitive fluency misinterprets familiarity as truth.",
};

export const TOPIC_SLEEPER_EFFECT_HINGLISH: MindTopicDetail = {
  ...TOPIC_SLEEPER_EFFECT_EN,
  title: "The Sleeper Effect: Jhoothi Khabar Ka Dheere Dheere Sach Ban Jana",
  subtitle: "Shuru me hum kisi bekaar source ki baat par vishwas nahi karte, par kuch mahino baad hum source bhool jaate hain aur jhooth sach lagne lagta hai.",
  shortDescription: "Ek aisi memory bias jisme kisi ghatiya ya biased source se mili information shuruat me reject ho jaati hai, par waqt ke sath dimaag me sach ki tarah baith jaati hai.",
  oneLineExplanation: "Aap yeh bhool jaate hain ki kisne bola tha, par baat yaad reh jaati hai.",

  summary30s: "1949 me Carl Hovland ne Sleeper Effect discover kiya. WhatsApp forwards aur political afwaahein isi par kaam karti hain. Jab hum koi ajeeb si khabar padhte hain, toh hum sochte hain \"yeh toh koi fake forward hai\". Lekin 2 mahine baad hamara dimaag yeh bhool jata hai ki source fake tha, aur hum dosto se bolne lagte hain \"maine kahin padha tha ki yeh sach hai\".",
  coreConcept: "Dimaag me information do alag jagah store hoti hai: \"Kya bola gaya\" aur \"Kisne bola\". \"Kisne bola\" bohot jaldi gayab ho jata hai, par \"kya bola\" reh jata hai. Baad me jab wo baat dimaag me aati hai, toh familiar lagti hai, aur familiarity ko dimaag sach samajh baithta hai.",
  quickTakeaways: [
    "Source Bhoolna Normal Hai: Hum afwah ka origin bohot jaldi bhool jaate hain",
    "Familiarity Trap: Bar-bar suni hui jhoothi baat bhi sach lagne lagti hai",
    "Fact-Check Ka Rule: Jab bhi dimaag me koi baat aaye, khud se pucho: \"Mujhe yeh kahan se pata chala?\"",
    "Afwah Mat Dohraayein: Galat baat ko cancel karne ke liye use bar-bar bolna band karein",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_SLEEPER_EFFECT_EN,
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

export const TOPIC_SLEEPER_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SLEEPER_EFFECT_EN,
  hinglish: TOPIC_SLEEPER_EFFECT_HINGLISH,
  hi: createLocalizedRecord('hi', "सुप्त प्रभाव (The Sleeper Effect): समय के साथ अविश्वसनीय दावों का प्रभावकारी होना", "कार्ल हॉवलैंड का सिद्धांत जो दर्शाता है कि किसी अविश्वसनीय या दुर्भावनापूर्ण स्रोत से प्राप्त संदेश को व्यक्ति प्रारंभ में तो अस्वीकार कर देता है, किंतु समय बीतने के साथ मस्तिष्क स्रोत को भूल जाता है और केवल संदेश को सत्य मानकर स्वीकार कर लेता है।", [
    "स्रोत और संदेश का विच्छेदन (Source-Decoupling)",
    "परिचितता को सत्य मान लेने का भ्रम",
    "अफवाहों और दुर्भावनापूर्ण प्रचार से आत्म-रक्षा"
  ]),
  gu: createLocalizedRecord('gu', "ધ સ્લીપર ઇફેક્ટ: સમય જતાં ખોટી અફવા સાચી લાગવા માંડવી", "શરૂઆતમાં નકારી કાઢેલી અવિશ્વસનીય માહિતી સમય જતાં મગજ સ્ત્રોત ભૂલી જવાને કારણે સાચી માની લે છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "द स्लीपर इफेक्ट: कालांतराने अफवा सत्य वाटू लागण्याचा मानसिक भ्रम", "सुरुवातीला अविश्वासार्ह स्त्रोतामुळे नाकारलेली बातमी काही काळानंतर तिचा स्त्रोत विसरल्यामुळे खरी वाटू लागते.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "ది స్లీపర్ ఎఫెక్ట్: సమయం గడిచేకొద్దీ అబద్ధం నిజమనిపించే భ్రమ", "మొదట్లో నమ్మశక్యం కాని మూలం నుండి వచ్చిన సమాచారాన్ని కొట్టిపారేసినప్పటికీ, కాలక్రమేణా మూలాన్ని మర్చిపోయి విషయాన్ని నిజమని నమ్మే పరిస్థితి.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "உறக்க நிலை விளைவு: காலப்போக்கில் வதந்திகள் உண்மையாக மாறும் மாயை", "ஆரம்பத்தில் நம்பகத்தன்மையற்றது என்று ஒதுக்கப்பட்ட தகவல், காலப்போக்கில் யார் சொன்னது என்பதை மறப்பதால் உண்மையாகிவிடும் உளவியல்.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ದಿ ಸ್ಲೀಪರ್ ಎಫೆಕ್ಟ್: ಕಾಲಕ್ರಮೇಣ ಸುಳ್ಳು ವದಂತಿ ನಿಜವೆನಿಸುವ ಭ್ರಮೆ", "ಆರಂಭದಲ್ಲಿ ತಿರಸ್ಕರಿಸಲ್ಪಟ್ಟ ಸುಳ್ಳು ಸುದ್ದಿ, ಕಾಲ ಕಳೆದಂತೆ ಮೂಲವನ್ನು ಮರೆತು ಕೇವಲ ವಿಷಯವನ್ನು ಸತ್ಯವೆಂದು ನಂಬುವ ಮಾನಸಿಕ ದೋಷ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "ദി സ്ലീപ്പർ ഇഫക്റ്റ്: കാലക്രമേണ വ്യാജവാർത്തകൾ സത്യമായി മാറുന്ന വിചിത്രത", "ആദ്യഘട്ടത്തിൽ തള്ളിക്കളഞ്ഞ അടിസ്ഥാനരഹിതമായ കാര്യങ്ങൾ, കാലം കഴിയുമ്പോൾ ആരാണ് പറഞ്ഞതെന്നത് മറന്ന് സത്യമാണെന്ന് വിശ്വസിക്കുന്ന അവസ്ഥ.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "দ্য স্লিপার ইফেক্ট: সময়ের ব্যবধানে মিথ্যা গুজবের সত্যে রূপান্তর", "শুরুতে অবিশ্বাস করে উড়িয়ে দেওয়া কোনো খবর কিছুদিন পর তথ্যের উৎস ভুলে গিয়ে মনের অজান্তেই সত্যি বলে বিশ্বাস করার মনস্তত্ত্ব।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਦ ਸਲੀਪਰ ਇਫੈਕਟ: ਸਮੇਂ ਦੇ ਨਾਲ ਝੂਠੀ ਅਫਵਾਹ ਸੱਚ ਲੱਗਣ ਲੱਗ ਪੈਣਾ", "ਸ਼ੁਰੂ ਵਿੱਚ ਕਿਸੇ ਘਟੀਆ ਸਰੋਤ ਦੀ ਖ਼ਬਰ ਨੂੰ ਨਕਾਰ ਦੇਣਾ, ਪਰ ਬਾਅਦ ਵਿੱਚ ਸਰੋਤ ਭੁੱਲ ਜਾਣ ਕਾਰਨ ਉਸਨੂੰ ਸੱਚ ਮੰਨ ਲੈਣ ਦੀ ਮਾਨਸਿਕ ਆਦਤ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "خوابیدہ اثر: وقت گزرنے کے ساتھ غلط افواہ کا سچ محسوس ہونا", "ابتداء میں غیر معتبر ذریعے کی وجہ سے مسترد کی گئی بات، وقت کے ساتھ ذریعے کو بھول جانے پر سچی لگنے لگتی ہے۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ଦି ସ୍ଲିପର୍ ଇଫେକ୍ଟ: ସମୟ କ୍ରମେ ମିଥ୍ୟା ଗୁଜବ ସତ୍ୟରେ ପରିଣତ ହେବା", "ପ୍ରଥମେ ଅବିଶ୍ୱାସନୀୟ ଭାବି ପ୍ରତ୍ୟାଖ୍ୟାନ କରାଯାଇଥିବା ଖବରକୁ ସମୟ ବିତିବା ପରେ ସୂତ୍ର ଭୁଲିଯାଇ ସତ୍ୟ ମାନିବାର ଭ୍ରମ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "দ্য শ্লিপাৰ ইফেক্ট: সময় বাগৰাৰ লগে লগে অসত্য কথা সত্য যেন লগাৰ ভুল", "প্ৰথমতে বিশ্বাস নকৰা কোনো অসত্য বাতৰি দিন বাগৰাৰ পিছত মূল উৎস পাহৰি যোৱাৰ বাবে সঁচা বুলি ধৰি লোৱাৰ মনস্তাত্ত্বিক ক্ৰিয়া।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
