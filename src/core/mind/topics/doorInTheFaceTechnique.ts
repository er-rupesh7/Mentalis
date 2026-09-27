import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Persuasion & Influence Track
 * Topic: The Door-in-the-Face Technique: The Power of Reciprocal Concessions
 * Category: persuasion_influence
 * Academic Grounding: Robert B. Cialdini et al. (1975) (10.1037/h0076284)
 */

export const TOPIC_DOOR_IN_THE_FACE_EN: MindTopicDetail = {
  id: 'door_in_the_face',
  categoryId: 'persuasion_influence',
  slug: 'door-in-the-face',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 6,
  viewCount: 3860,
  shareCount: 294,
  bookmarkCount: 672,
  title: "The Door-in-the-Face Technique: The Power of Reciprocal Concessions",
  subtitle: "The sequential compliance tactic where a persuader starts with an extreme request sure to be rejected, making the subsequent target request feel modest and reasonable.",
  shortDescription: "A compliance method whereby the persuader attempts to convince the target by making a large request that will most likely be turned down, then offering a smaller concession.",
  oneLineExplanation: "Ask for the moon first, get rejected, then ask for a bicycle—and watch them happily say yes.",

  summary30s: "Discovered in 1975 by Robert Cialdini and colleagues, Door-in-the-Face operates on the rule of reciprocal concessions. When someone asks you for a massive favor and you say no, you feel a subtle social tension. When they immediately scale down to a smaller request, your brain interprets this retreat as a personal concession—compelling you to reciprocate by saying yes.",
  coreConcept: "The technique relies on two cognitive mechanisms: (1) The Perceptual Contrast Effect (the target request looks microscopic compared to the outrageous initial anchor); (2) Reciprocal Obligation (society teaches us that when someone makes a concession toward us, we are morally expected to make a concession in return). If the initial request is absurdly insulting rather than merely large, however, the dynamic breaks down.",
  summary60s: "In Cialdini's landmark study, researchers posed as youth counselors. When students were directly asked to volunteer 2 hours supervising juvenile delinquents on a zoo trip, only 17% agreed. But when another group was first asked to volunteer 2 hours every week for two years (100% rejected this extreme request) and then asked for the 2-hour zoo trip, agreement skyrocketed from 17% to 50%—a 300% increase.",
  quickTakeaways: [
    "The Reciprocal Concession Engine: A retreat from request A to request B feels like a personal gift to the target",
    "The Timing Imperative: The smaller concession must be offered immediately; waiting 24 hours destroys the reciprocity tension",
    "The Counter-Shield: Recognize the initial ask as a deliberate decoy anchor and evaluate the second ask in isolation",
    "Ethical Negotiation: Use reciprocal concessions transparently to find genuine middle ground rather than trapping people",
  ],

  whyItHappens: "Reciprocity norm and perceptual contrast. Society mandates compromise; refusing two requests in a row triggers intense social discomfort.",
  evolutionaryMechanism: "In ancestral hominid tribes, resolving inter-clan resource disputes required reciprocal concessions to avert lethal violence.",
  howItWorks: "Extreme request made -> Target rejects it (\"Slams door in face\") -> Persuader retreats to smaller real request -> Target feels moral debt -> Target complies with relief.",
  whereYouEncounterIt: "Salary negotiations, wedding bargaining, charity fundraising drives, software scope creep discussions, and sales pitches.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Extreme Initial Anchor vs. Immediate Concession",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Direct Single Request (17% Success)",
      detail: "\"Would you mind volunteering to chaperone juvenile delinquents for 2 hours this Saturday?\"",
    },
    analogySideB: {
      label: "Door-in-the-Face Sequence (50% Success)",
      detail: "\"Will you volunteer 2 hours/week for 2 years? No? Then would you consider chaperoning just this Saturday for 2 hours?\"",
    },
  },

  researchSummary: "Cialdini et al. (1975) published \"Reciprocal concessions procedure for inducing compliance: The door-in-the-face technique\" in JPSP.",
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
      id: 'scen_door_in_the_face_01',
      scenarioType: 'indian_context',
      title: "The Wedding Photographer Negotiation in Chandni Chowk",
      vignette: "Ankit is hiring a luxury candid wedding photographer in Delhi for his sister's wedding. The photographer opens with an opulent package: \"My signature Royal Marquee Package is ₹8,00,000 for 3 days.\" Ankit gasps and rejects it immediately: \"That is completely out of our family budget!\" Without missing a beat, the photographer smiles gracefully: \"I completely understand, Ankit. In that case, let me make a special family concession for you: I will cover the main reception and wedding rituals for just ₹2,50,000.\" Relieved that the photographer \"discounted\" ₹5.5 lakhs for him, Ankit happily signs the contract—unaware that ₹2,50,000 was the photographer's target standard price all along.",
      breakdownAnalysis: "A masterclass in the Door-in-the-Face technique. The photographer used the ₹8-lakh anchor to make ₹2.5 lakhs look like a humble, generous concession that Ankit felt socially obligated to accept.",
      recommendedAction: "Before entering negotiations, determine your absolute price ceiling based on independent market data and evaluate the final quote without anchoring on the first fictional number.",
    },
  ],

  examples: [
    {
      id: 'ex_door_in_the_face_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_door_in_the_face_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_door_in_the_face_01',
      scenarioContext: "An NGO fundraiser in Bengaluru knocks on doors asking residents to commit to an ongoing ₹10,000 monthly donation to support rural schools. When homeowners politely refuse, the canvasser immediately asks: \"Would you at least be willing to make a one-time ₹500 donation for a student textbook?\" Over 65% of residents donate ₹500.",
      question: "Which psychological mechanism is primarily responsible for the high donation rate to the second request?",
      prompt: "Which psychological mechanism is primarily responsible for the high donation rate to the second request?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Social loafing among community residents",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Door-in-the-face technique leveraging perceptual contrast and the normative pressure for reciprocal concession",
          isCorrect: true,
          explanation: "By asking for ₹10,000 first and then retreating to ₹500, the fundraiser created perceptual contrast and prompted the resident to match the concession by saying yes.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Diffusion of responsibility across neighborhood blocks",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "The Pygmalion effect elevating the canvasser's charisma",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "When someone suddenly lowers their demand, ask yourself: \"Would I say yes to this if they had asked for it first?\"",
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
      id: 'ref_door_in_the_face_01',
      title: "Reciprocal concessions procedure for inducing compliance: The door-in-the-face technique",
      citation: "Cialdini, R. B., Vincent, J. E., Lewis, S. K., Catalan, J., Wheeler, D., & Darby, B. L. (1975). Journal of Personality and Social Psychology, 31(2), 206–215.",
      authors: "Robert B. Cialdini et al.",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1037/h0076284",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Persuasion & Influence', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'reciprocity_principle', slug: 'reciprocity-principle', title: 'The Reciprocity Principle', relationshipType: 'amplified_by' },
    { topicId: 'foot_in_the_door', slug: 'foot-in-the-door', title: 'Foot-in-the-Door Technique', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "The Door-in-the-Face Technique: The Power of Reciprocal Concessions | Mentalab Mind",
  seoDescription: "A compliance method whereby the persuader attempts to convince the target by making a large request that will most likely be turned down, then offering a s",
  canonicalUrl: '/mind/persuasion-and-influence/door-in-the-face',
  ogImageUrl: '/images/mind/door-in-the-face.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "The technique relies on two cognitive mechanisms: (1) The Perceptual Contrast Effect (the target request looks microscopic compared to the outrageous initial anchor); (2) Reciprocal Obligation (society teaches us that when someone makes a concession toward us, we are morally expected to make a concession in return). If the initial request is absurdly insulting rather than merely large, however, the dynamic breaks down.",
};

export const TOPIC_DOOR_IN_THE_FACE_HINGLISH: MindTopicDetail = {
  ...TOPIC_DOOR_IN_THE_FACE_EN,
  title: "Door-in-the-Face Technique: Bada Maang Kar Chote Par Haan Bulwana",
  subtitle: "Pehle itna bada favour maango ki samne wala mana kar de, fir turant choti demand rakho taaki wo sharmindagi me haan bol de.",
  shortDescription: "Ek aisi negotiation technique jisme pehle ek asambhav demand ki jaati hai, aur fir concession dekar asli demand manwayi jaati hai.",
  oneLineExplanation: "Pehle ₹10,000 maango, mana hone par ₹1,000 maango—log khushi-khushi de denge.",

  summary30s: "1975 me Robert Cialdini ne Door-in-the-Face technique prove ki. Jab hum kisi se koi bohot bada favour maangte hain aur wo mana karta hai, toh use thoda guilty feel hota hai. Agar hum turant apni demand choti kar lein, toh samne wale ko lagta hai ki humne uske liye compromise kiya hai, aur wo reciprocate karne ke liye chote kaam par turant raazi ho jata hai.",
  coreConcept: "Dukaandaar hamesha pehle ₹5,000 bolte hain, aur jab aap mana karke jaane lagte hain toh bolte hain \"Chalo sir aapke liye ₹1,500 me laga deta hoon\". Asal me wo cheez ₹1,200 ki hi hoti hai, par aapko lagta hai ki aapne bohot badi jeet haasil kar li.",
  quickTakeaways: [
    "Reciprocal Concession: Aapka peeche hatna samne wale ko ehsaan lagta hai",
    "Timing Ka Khel: Chota offer turant 5 second ke andar aana chahiye",
    "Decoy Anchor: Pehli demand sirf anchor hoti hai, asli game doosri demand hai",
    "Shield: Faisla lene se pehle sochein: \"Agar yeh shuru me ₹1,500 maangta toh kya main deta?\"",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_DOOR_IN_THE_FACE_EN,
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

export const TOPIC_DOOR_IN_THE_FACE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_DOOR_IN_THE_FACE_EN,
  hinglish: TOPIC_DOOR_IN_THE_FACE_HINGLISH,
  hi: createLocalizedRecord('hi', "द्वार-पर-तिरस्कार तकनीक (Door-in-the-Face Technique): पारस्परिक रियायत का प्रभाव", "रॉबर्ट सियालडिनी द्वारा खोजी गई अनुपालन रणनीति जिसमें पहले एक अत्यधिक बड़ी और अस्वीकार्य मांग की जाती है, और उसके अस्वीकार होते ही तुरंत अपनी मूल (छोटी) मांग रखी जाती है, जिसे व्यक्ति रियायत मानकर सहर्ष स्वीकार कर लेता है।", [
    "पारस्परिक रियायत (Reciprocal Concession) का दबाव",
    "दृश्य तुलना प्रभाव (Perceptual Contrast)",
    "प्रारंभिक लंगर (Anchor) के प्रभाव से बचाव"
  ]),
  gu: createLocalizedRecord('gu', "ડોર-ઇન-ધ-ફેસ ટેકનિક: મોટી માંગ ફગાવીને નાની વાત મનાવવાની કળા", "પહેલાં એવી મોટી માંગણી કરવી જે સામેવાળો તરત નકારે, અને પછી તરત નાની વાસ્તવિક માંગણી કરીને સહમતિ મેળવવાની મનોવૈજ્ઞાનિક પદ્ધતિ.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "डोअर-इन-द-फेस तंत्र: आधी मोठी मागणी करून नंतर खरी गोष्ट मान्य करून घेणे", "सुरुवातीला अवाजवी मागणी करून नकार पत्करायचा आणि लगेच तडजोड केल्याचे भासवून मूळ उद्देश साध्य करून घेण्याची मानसोपचार युक्ती.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "డోర్-ఇన్-ది-ఫేస్ టెక్నిక్: పెద్ద కోరిక తిరస్కరించిన వెంటనే చిన్నదానికి ఒప్పించడం", "మొదట ఎవరూ ఒప్పుకోని పెద్ద సహాయం అడిగి, అది తిరస్కరణకు గురైన వెంటనే అసలైన చిన్న కోరికను అడిగి ఆమోదం పొందే ఉపాయం.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "முகத்திலடித்தாற்போல் மறுப்பு உத்தி: சமரச சலுகை மூலம் சம்மதிக்க வைத்தல்", "முதலில் யாரும் ஏற்காத பெரிய கோரிக்கையை வைத்து, அது மறுக்கப்பட்டவுடன் உடனடியாக சிறிய நிஜக் கோரிக்கையை முன்வைத்து வெற்றி காணும் உத்தி.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಡೋರ್-ಇನ್-ದಿ-ಫೇಸ್ ತಂತ್ರ: ದೊಡ್ಡ ಬೇಡಿಕೆ ತಿರಸ್ಕರಿಸಿದ ಮೇಲೆ ಸಣ್ಣದಕ್ಕೆ ಒಪ್ಪಿಸುವುದು", "ಮೊದಲು ಅಸಾಧ್ಯವಾದ ದೊಡ್ಡ ಸಹಾಯವನ್ನು ಕೇಳಿ ತಿರಸ್ಕಾರ ಪಡೆದು, ನಂತರ ತಕ್ಷಣವೇ ಸಣ್ಣ ನೈಜ ಸಹಾಯವನ್ನು ಕೇಳಿ ಒಪ್ಪಿಗೆ ಪಡೆಯುವ ಚಾಣಾಕ್ಷತನ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "ഡോർ-ഇൻ-ദി-ഫേസ് ടെക്നിക്: വലിയ ആവശ്യം നിരസിപ്പിച്ച് ചെറിയതിൽ സമ്മതിപ്പിക്കൽ", "ആദ്യം നിരസിക്കപ്പെടുമെന്ന് ഉറപ്പുള്ള വലിയൊരു ആവശ്യം മുന്നോട്ട് വെക്കുകയും, ഉടൻ തന്നെ വിട്ടുവീഴ്ചയെന്നോണം ചെറിയ ആവശ്യം അംഗീകരിപ്പിക്കുകയും ചെയ്യുന്ന രീതി.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "ডোর-ইন-দ্য-ফেস টেকনিক: বড় দাবি নাকচ করিয়ে ছোট দাবিতে সম্মতি আদায়", "প্রথমে মাত্রাতিরিক্ত বড় প্রস্তাব দিয়ে ফিরিয়ে দেওয়ার পর আপসের ভান করে আসল ছোট প্রস্তাবটিতে সহজেই রাজি করানোর কৌশল।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਡੋਰ-ਇਨ-ਦ-ਫੇਸ ਤਕਨੀਕ: ਵੱਡੀ ਮੰਗ ਰੱਦ ਕਰਵਾ ਕੇ ਛੋਟੀ ਗੱਲ ਮਨਵਾਉਣਾ", "ਪਹਿਲਾਂ ਬਹੁਤ ਵੱਡੀ ਮੰਗ ਰੱਖਣੀ ਜਿਸਦਾ ਇਨਕਾਰ ਹੋਣਾ ਤੈਅ ਹੋਵੇ, ਫਿਰ ਤੁਰੰਤ ਛੋਟੀ ਮੰਗ ਰੱਖ ਕੇ ਅਹਿਸਾਨ ਜਤਾ ਕੇ ਹਾਂ ਕਰਵਾ ਲੈਣਾ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "منہ پر دروازہ بند تکنیک: پہلے بڑا مطالبہ مسترد کروا کے اصل بات منوانا", "پہلے ایسا غیر معمولی مطالبہ کرنا جو رد ہو جائے، پھر فریق کو احساس دلا کر چھوٹا مطالبہ پیش کرنا تاکہ وہ احسان مندی میں مان جائے۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ଡୋର୍-ଇନ୍-ଦି-ଫେସ୍ କୌଶଳ: ବଡ଼ ଦାବି ପ୍ରତ୍ୟାଖ୍ୟାନ କରାଇ ସାମାନ୍ୟ କାର୍ଯ୍ୟ ହାସଲ କରିବା", "ପ୍ରଥମେ ଏକ ଅସମ୍ଭବ ଦାବି କରି ମନା ଶୁଣିବା, ଏବଂ ତୁରନ୍ତ ରିହାତି ଦେବାର ଛଳନା କରି ନିଜର ପ୍ରକୃତ କାର୍ଯ୍ୟ ହାସଲ କରିବାର ମନସ୍ତତ୍ତ୍ୱ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "ড’ৰ-ইন-দা-ফেচ কৌশল: প্ৰথমে ডাঙৰ দাবী নাকচ কৰাই পিছত মূল কাম আদায় কৰা", "প্ৰথমে অগ্ৰাহ্য হ’ব পৰা এটা ডাঙৰ অনুৰোধ কৰি পিছত ত্যাগত বুলি ভবাৰ সুযোগ দি মূল সৰু অনুৰোধটো মানি ল’বলৈ বাধ্য কৰোৱা।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
