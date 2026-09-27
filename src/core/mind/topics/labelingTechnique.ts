import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Persuasion & Influence Track
 * Topic: The Labeling Technique: Identity Attribution and Behavioral Conformance
 * Category: persuasion_influence
 * Academic Grounding: Richard L. Miller et al. (1975) (10.1037/h0076539)
 */

export const TOPIC_LABELING_TECHNIQUE_EN: MindTopicDetail = {
  id: 'labeling_technique',
  categoryId: 'persuasion_influence',
  slug: 'labeling-technique',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 14,
  viewCount: 4740,
  shareCount: 406,
  bookmarkCount: 848,
  title: "The Labeling Technique: Identity Attribution and Behavioral Conformance",
  subtitle: "The persuasion tactic where attributing a positive moral trait or identity to an individual compels them to act in alignment with that label.",
  shortDescription: "A compliance method that involves assigning a trait, attitude, or label to a person and then making a request that is consistent with that label.",
  oneLineExplanation: "Tell someone they are generous, honest, or brilliant—and their pride will compel them to prove you right.",

  summary30s: "Discovered in 1975 by Alice Miller, Philip Brickman, and David Bolen, the Labeling Technique weaponizes self-identity. Instead of telling someone what to do, you assign them a positive identity label (e.g., \"You are known as the most fair-minded leader in this department\"). Once the label is accepted, cognitive dissonance prevents them from acting contrary to that noble badge.",
  coreConcept: "Labeling operates through Self-Perception Theory and Identity Consistency. When individuals are labeled as having a specific trait, their self-concept momentarily updates to incorporate that attribute. To maintain cognitive harmony and protect self-esteem, they modify their subsequent behavioral choices to fulfill the expectations of the assigned identity.",
  summary60s: "In Miller, Brickman & Bolen's landmark study with elementary school children, researchers tested methods to stop classroom littering. Group 1 was lectured with persuasive warnings: \"You should keep the school clean; littering is bad.\" Littering dropped slightly, then rebounded. Group 2 was labeled: teachers repeatedly remarked: \"Our class is known for being extremely tidy and ecology-minded.\" The labeled students littered three times less than the lectured group, and the clean behavior persisted for months.",
  quickTakeaways: [
    "Label Identity, Not Action: Don't ask for honesty; label them as a person of high integrity",
    "The Self-Fulfilling Label: People strive to match the positive moral identity you gift them",
    "The Dark Side of Negative Labels: Labeling a child or employee as \"lazy\" or \"troublemaker\" locks them into that identity",
    "Strategic Resistance: When someone flatters you with an exaggerated label (\"You are too smart to care about small fees\"), reject the manipulative frame",
  ],

  whyItHappens: "Self-concept defense and reputation consistency. Violating an accepted positive social label triggers intense self-disappointment.",
  evolutionaryMechanism: "In ancestral tribes, social roles and honorary titles (e.g., \"The Brave Hunter,\" \"The Wise Elder\") enforced tribal norms through prestige.",
  howItWorks: "Persuader assigns positive label (\"You are a thoughtful negotiator\") -> Target feels flattered and internalizes identity -> Request presented -> Target complies to protect the label.",
  whereYouEncounterIt: "Parenting, executive leadership coaching, donor appeals (\"Champion Donors\"), and high-conflict legal arbitration.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Prescriptive Demands vs. Empowering Identity Labeling",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Direct Command (Triggers Pushback)",
      detail: "\"You must stop being rude and listen carefully to your team members in code reviews.\"",
    },
    analogySideB: {
      label: "Identity Labeling (Triggers Conformance)",
      detail: "\"You are one of our most empathetic and patient senior mentors; I know you will guide this junior engineer gently.\"",
    },
  },

  researchSummary: "Miller, Brickman & Bolen (1975) published \"Attribution versus persuasion as methods for modifying behavior\" in JPSP.",
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
      id: 'scen_labeling_technique_01',
      scenarioType: 'indian_context',
      title: "The Troubled Tenant Settlement in South Delhi",
      vignette: "Sunil owns a rental apartment in Greater Kailash, New Delhi. His tenant, an aggressive businessman, has delayed rent payments by 45 days and threatens legal action when asked to pay. Sunil's lawyer advises sending an aggressive police notice. Instead, Sunil calls the tenant directly and opens with a calm identity label: \"Mr. Sharma, over the last two years, I have always known you to be a cultured, honorable gentleman of your word who respects commitments. That is why I know this temporary delay is due to genuine banking hurdles and that you would never deliberately default on a family.\" Stunned by the unexpected respect and determined to live up to the label of an \"honorable gentleman,\" Mr. Sharma transfers the entire outstanding rent within 3 hours.",
      breakdownAnalysis: "A masterclass in the Labeling Technique. Sunil did not corner Sharma with insults; he gifted him a high-status moral label (\"honorable gentleman of your word\"), making default psychologically incompatible with Sharma's pride.",
      recommendedAction: "When managing a difficult person, assign them the exact virtue they are failing to exhibit, framing your request as a natural extension of their character.",
    },
  ],

  examples: [
    {
      id: 'ex_labeling_technique_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_labeling_technique_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_labeling_technique_01',
      scenarioContext: "A school principal notices high tardiness among high school seniors. She hangs a plaque outside their corridor naming them: \"Senior Class: Our School's Premier Role Models in Punctuality and Discipline,\" and praises their leadership in the morning assembly.",
      question: "Based on Miller, Brickman & Bolen's research, what empirical outcome will this identity labeling produce?",
      prompt: "Based on Miller, Brickman & Bolen's research, what empirical outcome will this identity labeling produce?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Seniors will immediately protest because teenagers hate any form of praise",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Seniors will significantly improve their on-time arrival to conform to the prestigious identity label",
          isCorrect: true,
          explanation: "Attributing a positive identity label motivates individuals to modify their behavior to conform to that assigned identity and maintain self-integrity.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Social loafing will cause tardiness to increase by 50%",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "The sleeper effect will make seniors forget the assembly",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Give people a reputation to uphold, and they will move mountains to protect it.",
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
      id: 'ref_labeling_technique_01',
      title: "Attribution versus Persuasion as Methods for Modifying Behavior",
      citation: "Miller, R. L., Brickman, P., & Bolen, D. (1975). Journal of Personality and Social Psychology, 31(3), 430–441.",
      authors: "Richard L. Miller et al.",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1037/h0076539",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Persuasion & Influence', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'pygmalion_effect', slug: 'pygmalion-effect', title: 'The Pygmalion Effect', relationshipType: 'amplified_by' },
    { topicId: 'commitment_consistency', slug: 'commitment-consistency', title: 'Commitment & Consistency', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "The Labeling Technique: Identity Attribution and Behavioral Conformance | Mentalab Mind",
  seoDescription: "A compliance method that involves assigning a trait, attitude, or label to a person and then making a request that is consistent with that label.",
  canonicalUrl: '/mind/persuasion-and-influence/labeling-technique',
  ogImageUrl: '/images/mind/labeling-technique.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Labeling operates through Self-Perception Theory and Identity Consistency. When individuals are labeled as having a specific trait, their self-concept momentarily updates to incorporate that attribute. To maintain cognitive harmony and protect self-esteem, they modify their subsequent behavioral choices to fulfill the expectations of the assigned identity.",
};

export const TOPIC_LABELING_TECHNIQUE_HINGLISH: MindTopicDetail = {
  ...TOPIC_LABELING_TECHNIQUE_EN,
  title: "The Labeling Technique: Achha Naam Dekar Sahi Kaam Karwana",
  subtitle: "Kisi ko hukum dene ke bajaye use bolo \"Aap toh bohot samajhdaar aur imandar insaan hain\", aur wo apni izzat bachane ke liye wahi karega.",
  shortDescription: "Ek aisi persuasion technique jisme kisi insaan ko koi positive pehchaan ya moral label dekar usse us label ke mutabiq kaam karwaya jata hai.",
  oneLineExplanation: "Kisi ko ek shaan-daar reputation do, aur wo use bachane ke liye jaan laga dega.",

  summary30s: "1975 me Miller aur Brickman ne Labeling Technique prove ki. Bacchon ko jab bola gaya \"Kachra mat phenko\", toh unhone nahi maana. Par jab unhe label diya gaya: \"Aapki class school ki sabse clean aur disciplined class hai\", toh unhone kachra phenkna 3 guna kam kar diya. Insaan ko jab ek accha title milta hai, toh uska ego use galat kaam karne se rokta hai.",
  coreConcept: "Parenting aur leadership me agar aap kisi ko \"kaamchor\" bologe toh wo sach me kaamchor ban jayega (Negative Labeling). Par agar aap bologe \"Tum hamare team ke sabse responsible insaan ho\", toh wo raat bhar jaag kar kaam poora karega.",
  quickTakeaways: [
    "Positive Identity: Hukum mat do; unki acchi identity ko jagao",
    "Negative Labels Se Bachein: Bacchon ko \"nalayak\" kehna unka bhavishya barbaad karta hai",
    "Pride Ka Istemaal: Log apni izzat bachane ke liye compromise karte hain",
    "Manipulation Alert: Jab koi bole \"Aap toh bohot bade dil wale hain\", toh check karein ki wo aapse kya maang raha hai",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_LABELING_TECHNIQUE_EN,
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

export const TOPIC_LABELING_TECHNIQUE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_LABELING_TECHNIQUE_EN,
  hinglish: TOPIC_LABELING_TECHNIQUE_HINGLISH,
  hi: createLocalizedRecord('hi', "लेबलिंग तकनीक (The Labeling Technique): पहचान आरोपण और आचरण अनुरूपता", "मिलर और ब्रिकमैन का अध्ययन जो स्पष्ट करता है कि किसी व्यक्ति को आदेश देने के बजाय जब उसे किसी सकारात्मक नैतिक गुण या पहचान का तमगा (जैसे \"ईमानदार\", \"उदार\") दिया जाता है, तो वह उस पहचान की रक्षा करने के लिए तदनुसार ही आचरण करता है।", [
    "सकारात्मक पहचान आरोपण का प्रभाव",
    "नकारात्मक तमगों (Negative Labels) के विनाशकारी परिणाम",
    "प्रतिष्ठा की रक्षा से आचरण परिवर्तन"
  ]),
  gu: createLocalizedRecord('gu', "ધ લેબલિંગ ટેકનિક: સારું બિરુદ આપીને સાચું કામ કરાવવાની કળા", "કોઈને આદેશ આપવા કરતાં તેને \"તમે ખૂબ પ્રામાણિક અને સમજદાર છો\" તેવું બિરુદ આપવાથી તે પોતાની આબરૂ બચાવવા યોગ્ય વર્તન કરે છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "द लेबलिंग तंत्र: सकारात्मक ओळख देऊन योग्य वर्तन घडवून आणणे", "लोकांना हुकूम देण्याऐवजी त्यांना चांगल्या मूल्यांची ओळख (उदा. प्रामाणिक, जबाबदार) दिल्यास ते ती प्रतिष्ठा जपण्यासाठी योग्य वागतात.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "ది లేబులింగ్ టెక్నిక్: మంచి గుర్తింపు ఇచ్చి సరైన పని చేయించడం", "ఆజ్ఞాపించే బదులు ఒక వ్యక్తికి \"మీరు చాలా బాధ్యతగలవారు\" అనే మంచి లేబుల్ ఇవ్వడం ద్వారా వారు ఆ గుర్తింపును నిలబెట్టుకోవడానికి సహకరిస్తారు.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "அடையாளமிடுதல் உத்தி: நற்பெயர் வழங்கி நற்செயல் செய்ய வைத்தல்", "மிரட்டுவதற்குப் பதிலாக, \"நீங்கள் மிகவும் நேர்மையானவர்\" என்ற நல்ல அடையாளத்தை ஒருவருக்கு வழங்குவதன் மூலம் அவரை நல்வழியில் வழிநடத்தும் கலை.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ದಿ ಲೇಬಲಿಂಗ್ ತಂತ್ರ: ಉತ್ತಮ ಬಿರುದು ನೀಡಿ ಸರಿಯಾದ ಕೆಲಸ ಮಾಡಿಸುವುದು", "ಆಜ್ಞೆ ಮಾಡುವ ಬದಲು ಒಬ್ಬರಿಗೆ \"ನೀವು ಅತ್ಯಂತ ಪ್ರಾಮಾಣಿಕ ವ್ಯಕ್ತಿ\" ಎಂದು ಗೌರವ ನೀಡಿದರೆ, ಅವರು ಆ ಘನತೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು ಸರಿಯಾಗಿ ವರ್ತಿಸುತ್ತಾರೆ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "ദി ലേബലിംഗ് ടെക്നിക്: നല്ല വ്യക്തിത്വം കൽപ്പിച്ച് ശരിയായ കാര്യം ചെയ്യിക്കൽ", "ആജ്ഞാപിക്കുന്നതിന് പകരം ഒരാൾക്ക് \"വളരെ ഉത്തരവാദിത്തമുള്ളയാൾ\" എന്ന നല്ല ലേബൽ നൽകിയാൽ അവർ ആ സൽപ്പേര് നിലനിർത്താൻ ശ്രമിക്കും.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "দ্য লেবেলিং টেকনিক: ভালো উপাধি দিয়ে কাঙ্ক্ষিত আচরণ আদায়", "আদেশ দেওয়ার চেয়ে কাউকে \"আপনি অত্যন্ত বিবেকবান ও সৎ\" এমন সম্মানজনক পরিচয় দিলে সে নিজের সেই সম্মান ধরে রাখতে সঠিক কাজটি করে।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਦ ਲੇਬਲਿੰਗ ਤਕਨੀਕ: ਚੰਗਾ ਨਾਮ ਦੇ ਕੇ ਸਹੀ ਕੰਮ ਕਰਵਾਉਣਾ", "ਹੁਕਮ ਚਲਾਉਣ ਦੀ ਬਜਾਏ ਕਿਸੇ ਨੂੰ \"ਤੁਸੀਂ ਬਹੁਤ ਇਮਾਨਦਾਰ ਹੋ\" ਕਹਿ ਕੇ ਵਡਿਆਈ ਦੇਣ ਨਾਲ ਉਹ ਆਪਣੀ ਇੱਜ਼ਤ ਬਚਾਉਣ ਲਈ ਸਹੀ ਫੈਸਲਾ ਲੈਂਦਾ ਹੈ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "لیبلنگ کی تکنیک: اچھا خطاب دے کر درست کام کروانا", "حکم چلانے کے بجائے کسی کو \"آپ بہت دیانت دار اور باوقار ہیں\" جیسا تعریفی لیبل دینا تاکہ وہ اپنی ساکھ بچانے کے لیے بات مان لے۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ଦି ଲେବଲିଂ କୌଶଳ: ଭଲ ପରିଚୟ ଦେଇ ସଠିକ୍ କାର୍ଯ୍ୟ କରାଇବା", "ନିର୍ଦ୍ଦେଶ ଦେବା ପରିବର୍ତ୍ତେ ଜଣକୁ \"ଆପଣ ବହୁତ ଦାୟିତ୍ୱବାନ\" ବୋଲି ସମ୍ମାନ ଦେଲେ ସେ ନିଜର ପ୍ରତିଷ୍ଠା ବଜାୟ ରଖିବାକୁ ଉଚିତ କାର୍ଯ୍ୟ କରେ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "দ্য লেবেলিং কৌশল: ভাল উপাধিৰে সজ আচৰণ গঢ়ি তোলাৰ উপায়", "হুকুম দিয়াৰ সলনি কোনো ব্যক্তিক \"আপুনি অতি সজ আৰু নিষ্ঠাবান\" বুলি প্ৰশংসা কৰিলে তেওঁ সেই মৰ্যাদা ৰক্ষাৰ বাবে সঠিক কাম কৰে।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
