import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Persuasion & Influence Track
 * Topic: Pre-Suasion: Channeling Attention to Prime Receptivity
 * Category: persuasion_influence
 * Academic Grounding: Robert B. Cialdini (2016) (10.1002/mar.20986)
 */

export const TOPIC_PRE_SUASION_EN: MindTopicDetail = {
  id: 'pre_suasion',
  categoryId: 'persuasion_influence',
  slug: 'pre-suasion',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 9,
  viewCount: 4190,
  shareCount: 336,
  bookmarkCount: 738,
  title: "Pre-Suasion: Channeling Attention to Prime Receptivity",
  subtitle: "The art and science of capturing psychological attention immediately before delivering a message so the audience is already primed to agree.",
  shortDescription: "A persuasion framework showing that what is presented immediately before a message profoundly changes how that message is experienced and evaluated.",
  oneLineExplanation: "Persuasion is what you say; Pre-suasion is the fertile soil you prepare before you plant the seed.",

  summary30s: "Introduced in 2016 by Robert Cialdini in his groundbreaking work \"Pre-Suasion,\" this principle proves that the secret to persuasion does not lie inside the message itself. Instead, it lies in the privileged moment right before the message is presented. By directing a person's focus to an initial concept (trust, adventure, savings, comfort), you make any concept aligned with that focus feel overwhelmingly important.",
  coreConcept: "Pre-suasion operates via Focused Attention and the Focalism Bias: whatever is in the center of conscious awareness is automatically perceived as causal and important. If a web page background displays fluffy white clouds, consumers rate furniture comfort as their number one buying criterion and choose plush sofas. If the background displays coins, they rate price as their priority and choose the cheapest couch.",
  summary60s: "In a stunning experiment by Cialdini and colleagues, market researchers approached pedestrians asking them to test a new soft drink and share their email address. Only 33% agreed. However, when researchers opened with a pre-suasive question: \"Do you consider yourself an adventurous person who likes to try new things?\", 97% of people answered \"Yes!\" When asked for their email address immediately following that answer, agreement skyrocketed from 33% to 75.7%.",
  quickTakeaways: [
    "The Privileged Moment: The question or image you present first dictates the criteria used to evaluate everything that follows",
    "The \"What Is Focal Is Causal\" Bias: Whatever holds attention is perceived as having outsized importance",
    "Setting the Stage: In negotiations, start with shared values of long-term partnership before displaying financial numbers",
    "Counter-Priming Shield: Notice when an environment or salesperson is priming you with luxury symbols or fear cues, and deliberately pause",
  ],

  whyItHappens: "Associative memory networks and cognitive priming. Activating one neural node spreads excitation to related concepts, making them instantly accessible.",
  evolutionaryMechanism: "Hominid survival required rapid situational readiness; environmental cues primed physiological responses (e.g., rustling grass primed fight-or-flight).",
  howItWorks: "Pre-suasive prime presented (e.g., question, image, smell) -> Attention focuses on target concept -> Brain weights that concept as high priority -> Main request delivered -> Target evaluates request favorably.",
  whereYouEncounterIt: "Website design themes, retail sensory marketing, corporate pitch intros, courtroom opening statements, and political debates.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Unprimed Direct Pitch vs. Pre-Suasive Framing",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Direct Request (Unprimed)",
      detail: "\"Will you invest in our early-stage cybersecurity startup at a ₹50-crore valuation?\"",
    },
    analogySideB: {
      label: "Pre-Suasive Primer (Attention Channeled)",
      detail: "\"Did you know that 84% of Indian banks suffered severe ransomware breaches last quarter? Now, here is our defense solution.\"",
    },
  },

  researchSummary: "Robert B. Cialdini (2016) published \"Pre-Suasion: A Revolutionary Way to Influence and Persuade\" (Simon & Schuster).",
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
      id: 'scen_pre_suasion_01',
      scenarioType: 'indian_context',
      title: "The Fintech Loan Pitch in Cyber City, Gurgaon",
      vignette: "Kunal is pitching a corporate credit line to small business owners in Delhi NCR. Originally, his cold-call pitch was: \"We offer working capital credit at 14% annual interest.\" Conversion was a dismal 8%. Kunal changes his opening pre-suasive question: \"Namaste sir, as a business owner, how important is peace of mind to you when supplier cheques bounce on the 1st of the month?\" The business owners passionately respond: \"Peace of mind is everything!\" Kunal then immediately follows with: \"That is exactly why we created our automatic reserve credit.\" His client conversion rate jumps from 8% to 34%.",
      breakdownAnalysis: "A textbook real-world case of Pre-Suasion. Kunal didn't lower his interest rate or change his product; he simply channeled the owners' attention to the concept of \"peace of mind\" right before presenting the solution.",
      recommendedAction: "Before making any key request, ask an opening question that compels the other person to affirm the exact virtue (e.g., helpfulness, innovation, thrift) needed for your proposal.",
    },
  ],

  examples: [
    {
      id: 'ex_pre_suasion_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_pre_suasion_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_pre_suasion_01',
      scenarioContext: "An e-commerce furniture website tests two landing page backgrounds for its luxury mattress section. Background A shows currency notes and discount tags. Background B shows a sleeping person resting peacefully on soft cotton clouds.",
      question: "Based on Cialdini's Pre-Suasion research, how will visitors on Background B behave compared to Background A?",
      prompt: "Based on Cialdini's Pre-Suasion research, how will visitors on Background B behave compared to Background A?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Background B visitors will bounce immediately because money is the only thing shoppers care about",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Background B visitors will be primed toward comfort, will spend more time reading mattress ergonomics, and will purchase higher-margin plush mattresses",
          isCorrect: true,
          explanation: "Pre-suasive visual cues channel attention to specific attributes (comfort vs. price), biasing the criteria customers prioritize during evaluation.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Both visitor groups will behave identically due to bounded rationality",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Background B visitors will succumb to social loafing and not checkout",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "The frame creates the focus: what you show first determines how the rest is judged.",
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
      id: 'ref_pre_suasion_01',
      title: "Pre-Suasion: A Revolutionary Way to Influence and Persuade",
      citation: "Cialdini, R. B. (2016). Pre-Suasion: A Revolutionary Way to Influence and Persuade. New York: Simon & Schuster.",
      authors: "Robert B. Cialdini",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1002/mar.20986",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Persuasion & Influence', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'framing_effect', slug: 'framing-effect', title: 'The Framing Effect', relationshipType: 'amplified_by' },
    { topicId: 'anchoring_effect', slug: 'anchoring-effect', title: 'The Anchoring Effect', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Pre-Suasion: Channeling Attention to Prime Receptivity | Mentalab Mind",
  seoDescription: "A persuasion framework showing that what is presented immediately before a message profoundly changes how that message is experienced and evaluated.",
  canonicalUrl: '/mind/persuasion-and-influence/pre-suasion',
  ogImageUrl: '/images/mind/pre-suasion.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Pre-suasion operates via Focused Attention and the Focalism Bias: whatever is in the center of conscious awareness is automatically perceived as causal and important. If a web page background displays fluffy white clouds, consumers rate furniture comfort as their number one buying criterion and choose plush sofas. If the background displays coins, they rate price as their priority and choose the cheapest couch.",
};

export const TOPIC_PRE_SUASION_HINGLISH: MindTopicDetail = {
  ...TOPIC_PRE_SUASION_EN,
  title: "Pre-Suasion: Baat Bolne Se Pehle Hi Maahaul Banana",
  subtitle: "Asli persuasion message me nahi, balki us pal me hoti hai jo message dene se theek pehle aata hai.",
  shortDescription: "Ek aisi psychology technique jisme samne wale ka dhyaan pehle kisi khaas concept par focus karwaya jata hai taaki wo aage aane wali baat par turant raazi ho jaye.",
  oneLineExplanation: "Beej bone se pehle zameen tayyar karna hi Pre-suasion hai.",

  summary30s: "2016 me Robert Cialdini ne apni book \"Pre-Suasion\" me bataya ki log aapki baat tab maante hain jab aap unka dhyaan pehle se sahi direction me mod dete hain. Agar aap kisi se poochein \"Kya aap ek adventurous insaan hain?\", toh 97% log bolte hain \"Haan!\". Iske theek baad agar aap unhe koi naya product try karne ko bolein, toh 75% log turant raazi ho jaate hain.",
  coreConcept: "Website par badal aur soft takiye dikhane se log comfort par dhyaan dete hain aur mehenge sofa khareedte hain. Coins aur currency dikhane se log price conscious ho jaate hain aur sasta maal dhoondhte hain. Insaan ka dimaag us cheez ko sabse zaroori maanta hai jo uske samne sabse pehle aati hai.",
  quickTakeaways: [
    "The Privileged Moment: Baat shuru karne se pehle pucha gaya pehla sawaal sab decide karta hai",
    "Focus Means Important: Jis cheez par dhyaan jata hai, dimaag use sabse important samajh baithta hai",
    "Stage Set Karein: Price batane se pehle value aur peace of mind par baat karein",
    "Defense: Jab koi aapse emotional sawaal pooch kar shuruat kare, toh samajh jayein ki wo aapko prime kar raha hai",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_PRE_SUASION_EN,
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

export const TOPIC_PRE_SUASION: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_PRE_SUASION_EN,
  hinglish: TOPIC_PRE_SUASION_HINGLISH,
  hi: createLocalizedRecord('hi', "पूर्व-अनुनय (Pre-Suasion): संदेश से पूर्व ध्यान का प्रबंधन", "रॉबर्ट सियालडिनी का क्रांतिकारी सिद्धांत जो यह सिद्ध करता है कि अनुनय की वास्तविक शक्ति स्वयं संदेश में नहीं, बल्कि संदेश प्रस्तुत करने से ठीक पहले के उस विशेष क्षण में होती है जहाँ श्रोता का ध्यान अनुकूल विचारों (Priming) की ओर केंद्रित कर दिया जाता है।", [
    "विशेષાधिकार प्राप्त क्षण (Privileged Moment)",
    "ध्यान और कारणता का भ्रम (Focalism)",
    "सकारात्मक दृष्टिकोण की पूर्व-तैयारी (Priming)"
  ]),
  gu: createLocalizedRecord('gu', "પ્રી-સુએશન: વાત કરતા પહેલાં મન જીતી લેવાની કળા", "કોઈપણ રજૂઆત કરતાં પહેલાં સામેવાળાનું ધ્યાન યોગ્ય દિશામાં કેન્દ્રિત કરી દેવું જેથી તે આવનારી વાતને હકારાત્મક રીતે સ્વીકારી લે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "प्री-सुएशन: संदेश देण्यापूर्वीच अनुकूल वातावरण निर्माण करणे", "खरे मन वळवणे हे प्रत्यक्ष बोलण्यात नसून बोलण्याआधीच्या क्षणात असते; लोकांचे लक्ष आधीच योग्य मुद्द्यावर वळवून त्यांना अनुकूल बनवणे.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "ప్రీ-సుయేషన్: మాట్లాడకముందే అనుకూలమైన వాతావరణం సృష్టించడం", "ఒక ప్రతిపాదనను ఉంచడానికి ముందే ఎదుటివారి దృష్టిని సంబంధిత భావన వైపు మళ్లించి, వారు అంగీకరించేలా సిద్ధం చేసే కళ.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "முன்கூட்டியே சம்மதிக்க வைத்தல்: பேசத் தொடங்குமுன் கவனத்தைத் திருப்புதல்", "ஒரு செய்தியைச் சொல்வதற்கு முன்னரே, கேட்பவரின் கவனத்தை ஒரு குறிப்பிட்ட கருத்தில் நிலைநிறுத்தி அவரை முழுமையாக ஏற்கச் செய்யும் உளவியல்.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಪ್ರೀ-ಸುಯೇಶನ್: ಸಂದೇಶ ನೀಡುವ ಮುನ್ನವೇ ಸಕಾರಾತ್ಮಕ ಮನಸ್ಥಿತಿ ರೂಪಿಸುವುದು", "ಯಾವುದೇ ವಿಷಯವನ್ನು ಪ್ರಸ್ತಾಪಿಸುವ ಮುಂಚೆಯೇ ಜನರ ಗಮನವನ್ನು ಸೂಕ್ತ ವಿಷಯದತ್ತ ಸೆಳೆದು, ಅವರು ಸುಲಭವಾಗಿ ಒಪ್ಪಿಕೊಳ್ಳುವಂತೆ ಮಾಡುವ ತಂತ್ರ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "പ്രീ-സുവേഷൻ: സംസാരിക്കുന്നതിന് മുമ്പേ അനുകൂല മനസ്സ് രൂപപ്പെടുത്തൽ", "ഒരു ആശയം അവതരിപ്പിക്കുന്നതിന് തൊട്ടുമുമ്പ് തന്നെ ആളുകളുടെ ശ്രദ്ധ ശരിയായ ദിശയിലേക്ക് തിരിച്ച് അവരെ സ്വാധീനിക്കുന്ന ശാസ്ത്രം.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "প্রি-সুয়েশন: বার্তা দেওয়ার আগেই অনুকূল মানসিকতা তৈরি করা", "প্রস্তাব পেশ করার ঠিক পূর্বমুহূর্তে শ্রোতার মনোযোগ এমন একটি বিষয়ে নিবদ্ধ করা, যা তাকে মূল প্রস্তাবটি সহজেই মেনে নিতে বাধ্য করে।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਪ੍ਰੀ-ਸੂਏਸ਼ਨ: ਗੱਲ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਹੀ ਮਾਹੌਲ ਬਣਾਉਣ ਦੀ ਕਲਾ", "ਕੋਈ ਪ੍ਰਸਤਾਵ ਰੱਖਣ ਤੋਂ ਪਹਿਲਾਂ ਹੀ ਸੁਣਨ ਵਾਲੇ ਦਾ ਧਿਆਨ ਕਿਸੇ ਖਾਸ ਪੱਖ ਵੱਲ ਖਿੱਚ ਕੇ ਉਸਨੂੰ ਹਾਂ ਕਰਨ ਲਈ ਤਿਆਰ ਕਰ ਲੈਣਾ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "پیشگی قائل سازی: بات کرنے سے قبل ہی ذہن کو تیار کرنا", "اصل پیغام پیش کرنے سے پہلے کے لمحے میں توجہ کو کسی خاص نقطے پر مرتکز کر کے فریق کو پہلے ہی ماننے پر آمادہ کر لینا۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ପ୍ରି-ସୁଏସନ୍: କଥା କହିବା ପୂର୍ବରୁ ଅନୁକୂଳ ପରିବେଶ ସୃଷ୍ଟି କରିବା", "ପ୍ରସ୍ତାବ ରଖିବା ପୂର୍ବରୁ ଲୋକଙ୍କ ଧ୍ୟାନକୁ ନିର୍ଦ୍ଦିଷ୍ଟ ଦିଗରେ ଆକର୍ଷିତ କରି ସେମାନଙ୍କୁ ସହମତି ପାଇଁ ପ୍ରସ୍ତୁତ କରାଇବାର ଚତୁରତା।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "প্ৰি-চুৱেচন: বাৰ্তা দিয়াৰ পূৰ্বেই গ্ৰাহকৰ মন জয় কৰা", "মূল কথা কোৱাৰ ঠিক পূৰ্বমুহূৰ্ততে মানুহৰ মনোযোগ এনে এটা দিশত আৱদ্ধ কৰা যাৰ দ্বাৰা তেওঁ প্ৰস্তাৱটো সানন্দে মানি লয়।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
