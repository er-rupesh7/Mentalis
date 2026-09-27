import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: The Illusion of Transparency: Overestimating How Well Others Read You
 * Category: social_psychology
 * Academic Grounding: Thomas Gilovich et al. (1998) (10.1037/0022-3514.75.2.332)
 */

export const TOPIC_ILLUSION_OF_TRANSPARENCY_EN: MindTopicDetail = {
  id: 'illusion_of_transparency',
  categoryId: 'social_psychology',
  slug: 'illusion-of-transparency',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 20,
  viewCount: 5400,
  shareCount: 490,
  bookmarkCount: 980,
  title: "The Illusion of Transparency: Overestimating How Well Others Read You",
  subtitle: "The tendency to overestimate the degree to which our internal mental, emotional, and nervous states leak out and are detected by observers.",
  shortDescription: "A cognitive bias where people overestimate others' ability to know their internal mental state, believing their nervousness, lies, or feelings are obvious.",
  oneLineExplanation: "You feel your heart pounding in your throat, but to the audience, you look as calm as still water.",

  summary30s: "Discovered in 1998 by Thomas Gilovich, Kenneth Savitsky, and Victoria Medvec, the Illusion of Transparency explains why public speakers and negotiators suffer immense performance anxiety. Because we experience our own internal physiological sensations (sweaty palms, racing pulse, dry throat) so vividly, we mistakenly assume that external observers can see straight through our poker face.",
  coreConcept: "The illusion operates through egocentric anchoring. We are acutely aware of our internal physiological arousal, so we anchor heavily on that visceral experience. When attempting to infer what observers see from the outside, we make an insufficient adjustment, drastically overestimating how much of our nervousness, deception, or disgust is broadcasting onto our face.",
  summary60s: "In Cornell experiments, speakers were asked to rate how nervous they appeared to an audience, while audience members rated the speakers' actual perceived nervousness. Speakers consistently predicted their terror was completely obvious, rating their visible anxiety at nearly double what the audience actually detected. In truth, audiences perceived the speakers as poised, confident, and professional.",
  quickTakeaways: [
    "The Opaque Shield: Your internal bodily sensations are virtually invisible to the external world",
    "The Public Speaking Antidote: Remembering that you look far calmer than you feel immediately lowers stage fright",
    "Lie-Detector Paranoia: Liars overestimate how guilty they look; honesty doesn't need to prove itself",
    "Communication Clarity: Don't assume your partner or manager knows you are frustrated—express it verbally",
  ],

  whyItHappens: "Egocentric sensory anchoring. Internal visceral sensations (adrenalin, gut feelings) are so overwhelming that we assume they project outwardly like a billboard.",
  evolutionaryMechanism: "Evolutionary benefit of rapid social signaling: in small groups, subtle facial cues signaled threats or emotions, leading humans to err on the side of assuming visibility.",
  howItWorks: "Nervousness or secret felt internally -> Heart rate spikes -> Person anchors on physical sensations -> Assumes face is beaming the anxiety -> Over-apologizes or freezes -> Real audience saw nothing.",
  whereYouEncounterIt: "Salary negotiations, first dates, public speeches, job interviews, and when telling white lies.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Felt Internal Chaos vs. Observed External Composure",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Your Internal Sensation",
      detail: "\"My voice is trembling, my hands are shaking, and the board definitely knows I am having a panic attack.\"",
    },
    analogySideB: {
      label: "Audience Observation",
      detail: "\"The presenter spoke clearly, maintained great posture, and delivered an exceptionally composed deck.\"",
    },
  },

  researchSummary: "Gilovich, Savitsky & Medvec (1998) published \"The illusion of transparency: Biased assessments of others' ability to read one's emotional states\" in JPSP.",
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
      id: 'scen_illusion_of_transparency_01',
      scenarioType: 'indian_context',
      title: "The High-Stakes Investor Pitch in Koramangala",
      vignette: "Priya is pitching her climate-tech startup to marquee venture capitalists in Bangalore. As she stands at the podium, her throat goes bone dry, her knees shake inside her trousers, and her heart hammers at 140 BPM. Priya is convinced the lead partner can see through her: \"He knows I am terrified; they are going to reject our round because of my nervous breakdown!\" Distracted by this fear, she rushes through her slides. Afterward, when she apologizes to the lead investor for being visibly shaking, the partner blinks in surprise: \"Shaking? Priya, you were the most commanding, poised founder we've seen all quarter. We're putting together a term sheet.\"",
      breakdownAnalysis: "A textbook manifestation of the Illusion of Transparency. Priya anchored on her internal adrenaline storm and assumed it was broadcasting on her face, when in reality her external presentation was completely solid.",
      recommendedAction: "Leverage the Savitsky Intervention: Before any speech, remind yourself: \"Audience members cannot see my heartbeat. Even if I feel anxious, I appear calm and authoritative to them.\"",
    },
  ],

  examples: [
    {
      id: 'ex_illusion_of_transparency_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_illusion_of_transparency_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_illusion_of_transparency_01',
      scenarioContext: "A software engineer in Hyderabad attends his annual appraisal with his director to ask for a 30% raise. During the conversation, his stomach churns and he feels intensely awkward.",
      question: "Applying the empirical research on the Illusion of Transparency, what should the engineer remind himself to stay grounded?",
      prompt: "Applying the empirical research on the Illusion of Transparency, what should the engineer remind himself to stay grounded?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'beginner',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "The director can accurately detect every micro-expression and pulse change",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Internal physical discomfort does not project visibly; to the director, he appears composed and professional",
          isCorrect: true,
          explanation: "Research proves that internal nervous sensations are largely invisible to external observers; we drastically overestimate how transparent we are.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "He should confess his acute nausea immediately to gain sympathy",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Social loafing will make the director ignore the raise request anyway",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "You look infinitely calmer than you feel: trust your external composure.",
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
      id: 'ref_illusion_of_transparency_01',
      title: "The illusion of transparency: Biased assessments of others' ability to read one's emotional states",
      citation: "Gilovich, T., Savitsky, K., & Medvec, V. H. (1998). Journal of Personality and Social Psychology, 75(2), 332–346.",
      authors: "Thomas Gilovich et al.",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1037/0022-3514.75.2.332",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Social Psychology', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'spotlight_effect', slug: 'spotlight-effect', title: 'The Spotlight Effect', relationshipType: 'amplified_by' },
    { topicId: 'social_facilitation', slug: 'social-facilitation', title: 'Social Facilitation', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "The Illusion of Transparency: Overestimating How Well Others Read You | Mentalab Mind",
  seoDescription: "A cognitive bias where people overestimate others' ability to know their internal mental state, believing their nervousness, lies, or feelings are obvious.",
  canonicalUrl: '/mind/social-psychology/illusion-of-transparency',
  ogImageUrl: '/images/mind/illusion-of-transparency.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "The illusion operates through egocentric anchoring. We are acutely aware of our internal physiological arousal, so we anchor heavily on that visceral experience. When attempting to infer what observers see from the outside, we make an insufficient adjustment, drastically overestimating how much of our nervousness, deception, or disgust is broadcasting onto our face.",
};

export const TOPIC_ILLUSION_OF_TRANSPARENCY_HINGLISH: MindTopicDetail = {
  ...TOPIC_ILLUSION_OF_TRANSPARENCY_EN,
  title: "The Illusion of Transparency: Hum Kitne Transparent Hain Ka Bhram",
  subtitle: "Presentation me andar se dil dhak-dhak kar raha hota hai, par samne walo ko lagta hai hum bilkul calm hain.",
  shortDescription: "Ek aisi soch jisme hume lagta hai ki hamari ghabrahat, jhooth ya darr samne wale ke saamne saaf-saaf dikh raha hai, jabki aisa bilkul nahi hota.",
  oneLineExplanation: "Aapko lagta hai sab aapka darr padh sakte hain, jabki bahar se aap bilkul normal dikhte hain.",

  summary30s: "1998 me Gilovich ne Illusion of Transparency discover kiya. Jab hum stage par bolte hain ya salary negotiate karte hain, toh hamare gale me sookha pad jata hai aur haath kaanpne lagte hain. Hume lagta hai sabko hamari ghabrahat saaf dikh rahi hai. Sachai yeh hai ki log hamara dimaag ya heartbeat nahi padh sakte; bahar se hum bilkul confident nazar aate hain.",
  coreConcept: "Hamari body ke andar jo adrenaline daudta hai, wo hume bohot tezi se mehsoos hota hai. Lekin chehre par uska 10% bhi nahi dikhta. Is baat ko yaad rakhne se public speaking ka darr aadha ho jata hai.",
  quickTakeaways: [
    "Poker Face Sach: Aap jitna nervous feel karte hain, uska 10% bhi samne nahi dikhta",
    "Stage Fright Ka Ilaj: Apne aap ko yaad dilayein: \"Duniya meri heartbeat nahi dekh sakti\"",
    "Clear Communication: Apne partner se expect mat karein ki wo bina bole aapka mood samajh jaye",
    "Fake It Till You Make It: Bahar se calm dikhna shuru karein, andar ka darr apne aap shaant ho jayega",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_ILLUSION_OF_TRANSPARENCY_EN,
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

export const TOPIC_ILLUSION_OF_TRANSPARENCY: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_ILLUSION_OF_TRANSPARENCY_EN,
  hinglish: TOPIC_ILLUSION_OF_TRANSPARENCY_HINGLISH,
  hi: createLocalizedRecord('hi', "पारदर्शिता का भ्रम (Illusion of Transparency): आंतरिक भावों के उजागर होने का भ्रम", "यह अत्यधिक अनुमान लगाने की प्रवृत्ति कि हमारी आंतरिक घबराहट, भय, मनोदशा या झूठ दूसरों को स्पष्ट रूप से दिखाई दे रहे हैं, जबकि वास्तव में लोग हमारे चेहरे से इसे आसानी से नहीं पढ़ सकते।", [
    "आंतरिक घबराहट का अदृश्य होना",
    "सार्वजनिक भाषण में आत्मविश्वास की रक्षा",
    "स्पष्ट मौखिक संवाद का महत्व"
  ]),
  gu: createLocalizedRecord('gu', "ઇલ્યુઝન ઓફ ટ્રાન્સપરન્સી: આપણી નર્વસનેસ દેખાઈ આવે છે તેવો ભ્રમ", "સ્ટેજ પર બોલતી વખતે કે ઇન્ટરવ્યુમાં આપણી અંદરની ગભરામણ બહારના લોકોને સ્પષ્ટ દેખાઈ રહી છે તેવો ખોટો ડર.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "इल्युजन ऑफ ट्रान्सपरन्सी: अंतर्गत भावना इतरांना स्पष्ट दिसतात हा गैरसमज", "आपली भीती, अस्वस्थता किंवा खोटे बोलणे समोरच्याला सहज समजते हा निव्वळ भ्रम असतो; प्रत्यक्षात आपण शांतच दिसत असतो.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "ఇల్యూజన్ ఆఫ్ ట్రాన్స్‌పరెన్సీ: మన ఆందోళన అందరికీ తెలిసిపోతుందనే భ్రమ", "వేదికపై మాట్లాడేటప్పుడు మన గుండె చప్పుడు మరియు భయం ఇతరులకు స్పష్టంగా తెలిసిపోతోందని అతిగా భయపడే మానసిక స్థితి.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "வெளிப்படைத்தன்மையின் மாயை: நமது பதற்றம் வெளியில் தெரிகிறது என்ற அச்சம்", "நமது உள்மனப் பயமும் படபடப்பும் மற்றவர்களுக்கு அப்பட்டமாகத் தெரிகிறது என்று நாம் தவறாகக் கருதி அஞ்சுவது.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಇಲ್ಯೂಷನ್ ಆಫ್ ಟ್ರಾನ್ಸ್‌ಪರೆನ್ಸಿ: ನಮ್ಮ ಆತಂಕ ಎಲ್ಲರಿಗೂ ಕಾಣಿಸುತ್ತಿದೆ ಎಂಬ ಭ್ರಮೆ", "ನಮ್ಮ ಆಂತರಿಕ ನಡುಕ ಮತ್ತು ಭಯ ಇತರರಿಗೆ ಸ್ಪಷ್ಟವಾಗಿ ಗೋಚರಿಸುತ್ತದೆ ಎಂದು ಅತಿಯಾಗಿ ಯೋಚಿಸಿ ಗಾಬರಿಯಾಗುವ ಪ್ರವೃತ್ತಿ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "ഇല്യൂഷൻ ഓഫ് ട്രാൻസ്പരൻസി: നമ്മുടെ ഭയം മറ്റുള്ളവർ തിരിച്ചറിയുന്നു എന്ന മിഥ്യാധാരണ", "നമ്മുടെ ഉള്ളിലെ പരിഭ്രാന്തിയും ടെൻഷനും മറ്റുള്ളവർക്ക് വ്യക്തമായി കാണാൻ കഴിയുമെന്ന് അനാവശ്യമായി ഭയപ്പെടുന്ന അവസ്ഥ.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "ইল্যুশন অব ট্রান্সপারেন্সি: নিজের মানসিক অবস্থা প্রকাশ্যে ধরা পড়ার অমূলক ভয়", "নিজের অভ্যন্তরীণ নার্ভাসনেস বা ভয় বাইরে থেকে সবাই সহজে বুঝতে পারছে ভেবে অহেতুক আতঙ্কিত হওয়ার মানসিক বিভ্রম।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਇਲਿਊਜ਼ਨ ਆਫ਼ ਟਰਾਂਸਪੇਰੈਂਸੀ: ਮੇਰੀ ਘਬਰਾਹਟ ਸਭ ਨੂੰ ਦਿਖ ਰਹੀ ਹੈ ਦਾ ਡਰ", "ਇਹ ਸੋਚ ਕੇ ਡਰਨਾ ਕਿ ਮੇਰੇ ਅੰਦਰਲਾ ਡਰ ਅਤੇ ਕੰਬਣੀ ਬਾਹਰ ਬੈਠੇ ਲੋਕਾਂ ਨੂੰ ਸਾਫ਼ ਦਿਖ ਰਹੀ ਹੈ, ਜਦਕਿ ਬਾਹਰੋਂ ਵਿਅਕਤੀ ਬਿਲਕੁਲ ਸ਼ਾਂਤ ਦਿਖਦਾ ਹੈ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "شفافیت کا مغالطہ: اپنے اندرونی خوف کے عیاں ہونے کا وہم", "یہ سمجھنا کہ ہماری گھبراہٹ اور بے چینی سب پر واضح ہے، حالانکہ بیرونی مشاہدہ کار کے لیے ہم بالکل پُرسکون نظر آتے ہیں۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ଇଲ୍ୟୁଜନ୍ ଅଫ୍ ଟ୍ରାନ୍ସପରେନ୍ସି: ମନର ଡର ସମସ୍ତେ ଜାଣିପାରୁଛନ୍ତି ବୋଲି ଭ୍ରମ", "ଷ୍ଟେଜ୍ ଉପରେ ଥିବାବେଳେ ନିଜର ଆଭ୍ୟନ୍ତରୀଣ ଉତ୍ତେଜନା ଓ ଭୟ ବାହାର ଲୋକଙ୍କୁ ସ୍ପଷ୍ଟ ଦିଶୁଛି ବୋଲି ଭାବି ଅଧିକ ବିଚଳିତ ହେବା।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "ইলিউজন অৱ ট্ৰান্সপাৰেঞ্চি: নিজৰ ভয়-উদ্বেগ আনৰ চকুত ধৰা পৰাৰ বিভ্ৰম", "মঞ্চত বক্তব্য ৰখাৰ সময়ত নিজৰ কম্পন আৰু ভয় আন সকলোৱে বুজি পাইছে বুলি ভাবি অহেতুক হতাশ হোৱাৰ মানসিকতা।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
