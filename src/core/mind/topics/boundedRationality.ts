import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Decision Making Track
 * Topic: Bounded Rationality: Decision-Making Within Cognitive Limits
 * Category: decision_making
 * Academic Grounding: Herbert A. Simon (1957) (10.1037/h0040440)
 */

export const TOPIC_BOUNDED_RATIONALITY_EN: MindTopicDetail = {
  id: 'bounded_rationality',
  categoryId: 'decision_making',
  slug: 'bounded-rationality',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 12,
  viewCount: 4520,
  shareCount: 378,
  bookmarkCount: 804,
  title: "Bounded Rationality: Decision-Making Within Cognitive Limits",
  subtitle: "The reality that human decision-making is strictly constrained by computational tractability, incomplete information, and finite time.",
  shortDescription: "The concept that rationality in decision-making is limited by the tractability of the problem, the cognitive limitations of the mind, and the time available.",
  oneLineExplanation: "We don't make optimal decisions; we make the most reasonable decisions possible within our brain's memory and time boundaries.",

  summary30s: "Introduced by Herbert Simon in 1957, Bounded Rationality demolished the myth of \"Homo Economicus\"—the fictional economic human who possesses perfect information, infinite computational power, and endless time to calculate flawless optimal decisions. In reality, human brains have strict working memory limits, imperfect data, and pressing deadlines, compelling us to use cognitive shortcuts and heuristics.",
  coreConcept: "Simon showed that human decision-making is shaped by \"scissors with two blades\": the cognitive limitations of the mind (blade one) and the structure of the surrounding environment (blade two). Because calculating the absolute mathematical optimum is impossible in complex systems (like playing chess or managing supply chains), the human brain uses heuristics that deliver satisficing solutions with minimal cognitive energy expenditure.",
  summary60s: "Consider chess: the number of possible legal board states exceeds the number of atoms in the observable universe. Even a supercomputer cannot calculate every path to the end. Human grandmasters operate within bounded rationality: instead of evaluating millions of moves, they use pattern recognition and chunking heuristics to evaluate only 3 or 4 candidate moves deeply, finding winning strategies within finite time.",
  quickTakeaways: [
    "The Fallacy of Perfect Optimization: Stop chasing impossible 100% information before acting",
    "The Heuristic Necessity: Mental models and rules of thumb are not bugs; they are evolutionary computational adaptations",
    "Environmental Architecture: Since our rationality is bounded, design checklists and software safeguards to prevent errors",
    "Calibrated Search: Know when additional data gathering yields diminishing returns and pull the trigger",
  ],

  whyItHappens: "Neurobiological constraints. The human brain consumes 20% of resting metabolic energy on just 2% of body mass; processing infinite data is biologically impossible.",
  evolutionaryMechanism: "A hominid trying to calculate the optimal statistical velocity of a charging predator died; the one using a fast, bounded heuristic survived.",
  howItWorks: "Complex problem encountered -> Complete data unavailable -> Cognitive bandwidth limited -> Heuristic rule of thumb applied -> Acceptable decision reached within time limit.",
  whereYouEncounterIt: "Emergency triage medicine, air traffic control, executive corporate strategy, and buying a house.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Fictional \"Homo Economicus\" vs. Real-World Bounded Mind",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Classical Optimization Myth",
      detail: "\"A rational CEO reviews all 2,000 global supplier bids across 50 variables before awarding a contract.\"",
    },
    analogySideB: {
      label: "Bounded Rationality Reality",
      detail: "\"The executive filters for 3 critical ISO certifications, interviews the top 3 vetted vendors, and decides in 48 hours.\"",
    },
  },

  researchSummary: "Herbert A. Simon (1957) formulated bounded rationality in \"Models of Man,\" leading to his 1978 Nobel Prize in Economics.",
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
      id: 'scen_bounded_rationality_01',
      scenarioType: 'indian_context',
      title: "The Factory Procurement Deadline in Pune",
      vignette: "Rajesh is the head of manufacturing operations for an automotive parts plant in Chakan, Pune. An unexpected breakdown in a stamping press threatens to shut down the assembly line, costing ₹10 lakhs every hour. There are over 150 spare parts suppliers across Maharashtra. A junior analyst suggests running a 3-week linear programming optimization to find the vendor with the absolute lowest cost. Rajesh overrides him immediately: he calls two pre-approved vendors with 4-hour delivery guarantees and awards the contract to the first one with stock, paying a 10% premium.",
      breakdownAnalysis: "A textbook example of healthy Bounded Rationality in action. Rajesh recognized the bounded constraints: time urgency and massive downtime costs rendered complete optimization irrational. He deployed a fast heuristic that saved crores in assembly downtime.",
      recommendedAction: "Implement clear decision heuristics and pre-approved supplier protocols so operational teams can act swiftly without analysis paralysis.",
    },
  ],

  examples: [
    {
      id: 'ex_bounded_rationality_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_bounded_rationality_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_bounded_rationality_01',
      scenarioContext: "An emergency room doctor in Mumbai has 60 seconds to treat a trauma patient whose blood pressure is collapsing. Rather than waiting 2 hours for a full genetic panel and comprehensive CT scans, she follows the ABC (Airway, Breathing, Circulation) emergency protocol.",
      question: "Which concept explains why the doctor's heuristic protocol represents superior practical rationality?",
      prompt: "Which concept explains why the doctor's heuristic protocol represents superior practical rationality?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
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
          text: "Bounded rationality recognizing that severe time limits make comprehensive optimization fatal",
          isCorrect: true,
          explanation: "Bounded rationality proves that in high-velocity, high-stakes environments, fast heuristics outperform impossible exhaustive optimization.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Social loafing among emergency room nurses",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "The illusion of transparency in medical diagnosis",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "In a world of limited time and imperfect data, a fast, good decision beats a late, perfect calculation every time.",
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
      id: 'ref_bounded_rationality_01',
      title: "Models of Man: Social and Rational",
      citation: "Simon, H. A. (1957). Models of Man: Social and Rational. John Wiley & Sons, New York.",
      authors: "Herbert A. Simon",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1037/h0040440",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Decision Making', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'satisficing_vs_maximizing', slug: 'satisficing-vs-maximizing', title: 'Satisficing vs. Maximizing', relationshipType: 'amplified_by' },
    { topicId: 'choice_overload', slug: 'choice-overload', title: 'Choice Overload', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Bounded Rationality: Decision-Making Within Cognitive Limits | Mentalab Mind",
  seoDescription: "The concept that rationality in decision-making is limited by the tractability of the problem, the cognitive limitations of the mind, and the time availabl",
  canonicalUrl: '/mind/decision-making/bounded-rationality',
  ogImageUrl: '/images/mind/bounded-rationality.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Simon showed that human decision-making is shaped by \"scissors with two blades\": the cognitive limitations of the mind (blade one) and the structure of the surrounding environment (blade two). Because calculating the absolute mathematical optimum is impossible in complex systems (like playing chess or managing supply chains), the human brain uses heuristics that deliver satisficing solutions with minimal cognitive energy expenditure.",
};

export const TOPIC_BOUNDED_RATIONALITY_HINGLISH: MindTopicDetail = {
  ...TOPIC_BOUNDED_RATIONALITY_EN,
  title: "Bounded Rationality: Dimaag Aur Waqt Ki Limitation Me Faisla Lena",
  subtitle: "Insaan koi supercomputer nahi hai jiske paas saari jaankari aur anant waqt ho; hum limited information me best possible decision lete hain.",
  shortDescription: "Ek aisi theory jo batati hai ki insaan ka dimaag, waqt aur data ki boundaries me bandha hota hai, isliye wo shortcuts aur heuristics use karta hai.",
  oneLineExplanation: "Perfect faisla lene ke chakkar me der karne se accha hai ki samay rehte practical faisla le liya jaye.",

  summary30s: "1957 me Herbert Simon ne Bounded Rationality ka concept diya. Classical economics maanti thi ki insaan bilkul logical computer ki tarah sab kuch calculate karta hai. Simon ne bataya ki yeh jhooth hai. Hamare dimaag ki ek limit hoti hai, waqt kam hota hai aur saara data kabhi nahi milta. Isliye hum rules of thumb use karke kaam chalate hain.",
  coreConcept: "Chess ka grandmaster har possible chaal calculate nahi karta, balki apne anubhav se 3-4 best chaalein chun kar unhi par dhyaan deta hai. ISI tarah business aur life me 100% data ka intezar karne wale piche chhoot jaate hain.",
  quickTakeaways: [
    "Stop Chasing 100% Info: 70% jaankari milte hi faisla lena shuru karein",
    "Heuristics Are Tools: Dimag ke rules of thumb galat nahi, balki survival ka tareeqa hain",
    "Checklists Banayein: Dimaag ki limit ko cover karne ke liye checklists aur systems use karein",
    "Speed Matters: Crisis me \"perfect\" solution dhundhte rehna sabse bada disaster hai",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_BOUNDED_RATIONALITY_EN,
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

export const TOPIC_BOUNDED_RATIONALITY: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_BOUNDED_RATIONALITY_EN,
  hinglish: TOPIC_BOUNDED_RATIONALITY_HINGLISH,
  hi: createLocalizedRecord('hi', "सीमित तार्किकता (Bounded Rationality): संज्ञानात्मक सीमाओं में निर्णय-प्रक्रिया", "हर्बर्ट साइमन का सिद्धांत जो यह स्थापित करता है कि मानव तर्कशीलता सूचना की अपूर्णता, समय की कमी और मस्तिष्क की सीमित प्रसंस्करण क्षमता से बंधी होती है; अतः मनुष्य पूर्ण अनुकूलन (optimization) के बजाय व्यावहारिक अनुभूतियों (heuristics) का उपयोग करता है।", [
    "मानव मस्तिष्क की प्रसंस्करण सीमाएं",
    "अनुभूतियों (Heuristics) की उपादेयता",
    "समय की कमी में त्वरित निर्णय का महत्व"
  ]),
  gu: createLocalizedRecord('gu', "બાઉન્ડેડ રેશનાલિટી: મર્યાદિત માહિતી અને સમયમાં શ્રેષ્ઠ નિર્ણય", "મનુષ્ય પાસે અનંત સમય કે બધી માહિતી હોતી નથી, તેથી મગજ પોતાની મર્યાદાઓમાં રહીને વ્યવહારુ નિયમો દ્વારા નિર્ણય લે છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "बाउंडेड रॅशनॅलिटी: मानवी क्षमतांच्या मर्यादांमधील निर्णयप्रक्रिया", "मानवी बुद्धीकडे सर्व माहिती आणि अमर्याद वेळ नसल्याने ती व्यावहारिक नियम (Heuristics) वापरून निर्णय घेते हा वास्तववादी सिद्धांत.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "బౌండెడ్ రేషనాలిటీ: మెదడు మరియు సమయ పరిమితులలో నిర్ణయాలు", "మనిషికి పూర్తి సమాచారం లేదా అనంతమైన సమయం ఉండదు కాబట్టి, అందుబాటులో ఉన్న వనరులతోనే తగిన నిర్ణయాలు తీసుకుంటాడు.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "வரையறுக்கப்பட்ட பகுத்தறிவு: மூளையின் எல்லைக்குள் முடிவெடுத்தல்", "மனிதனுக்கு எல்லையற்ற நேரமோ முழுமையான தகவலோ இல்லாததால், நடைமுறை அனுபவ அறிவைக் கொண்டு முடிவுகளை எடுக்கிறான்.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಬೌಂಡೆಡ್ ರ‍್ಯಾಷನಾಲಿಟಿ: ಮೆದುಳಿನ ಮಿತಿಗಳ ನಡುವೆ ನಿರ್ಧಾರ ಕೈಗೊಳ್ಳುವಿಕೆ", "ಮಾನವನಿಗೆ ಸಂಪೂರ್ಣ ಮಾಹಿತಿ ಅಥವಾ ಅಪರಿಮಿತ ಸಮಯ ಇರುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ಲಭ್ಯವಿರುವ ಮಿತಿಯಲ್ಲೇ ಅತ್ಯುತ್ತಮ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುತ್ತಾನೆ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "ബൗണ്ടഡ് റാഷണാലിറ്റി: ബുദ്ധിയുടെ പരിമിതികൾക്കുള്ളിലെ തീരുമാനങ്ങൾ", "മനുഷ്യന് എല്ലാ വിവരങ്ങളും അപരിമിതമായ സമയവും ലഭ്യമല്ലാത്തതിനാൽ ലഭ്യമായ വിവരങ്ങൾ വെച്ച് പ്രായോഗികമായി ചിന്തിക്കുന്നു.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "বাউন্ডেড র‍্যাশোনালিটি: সীমাবদ্ধ তথ্যে বাস্তবসম্মত সিদ্ধান্ত গ্রহণের বিজ্ঞান", "মানুষের স্মৃতিশক্তি, সময় ও তথ্যের সীমাবদ্ধতা রয়েছে; তাই নিখুঁত সিদ্ধান্তের আশায় বসে না থেকে কার্যকর নিয়ম প্রয়োগ করাই যুক্তিযুক্ত।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਬਾਊਂਡਡ ਰੈਸ਼ਨੈਲਿਟੀ: ਸੀਮਤ ਜਾਣਕਾਰੀ ਅਤੇ ਸਮੇਂ ਵਿੱਚ ਫੈਸਲਾ ਲੈਣਾ", "ਇਨਸਾਨ ਕੋਲ ਸਾਰੀ ਜਾਣਕਾਰੀ ਜਾਂ ਅਸੀਮ ਸਮਾਂ ਨਹੀਂ ਹੁੰਦਾ, ਇਸ ਲਈ ਉਹ ਆਪਣੇ ਤਜਰਬੇ ਅਤੇ ਅੰਦਾਜ਼ਿਆਂ ਨਾਲ ਵਧੀਆ ਫੈਸਲਾ ਲੈਂਦਾ ਹੈ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "محدود عقلانیت: وقت اور معلومات کی حدود میں فیصلہ سازی", "انسان کے پاس لامحدود وقت یا کامل معلومات نہیں ہوتیں، اس لیے وہ دستیاب حدود میں بہترین عملی فیصلہ کرتا ہے۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ବାଉଣ୍ଡେଡ୍ ରାସନାଲିଟି: ସୀମିତ ତଥ୍ୟ ଓ ସମୟ ମଧ୍ୟରେ ଉପଯୁକ୍ତ ନିଷ୍ପତ୍ତି", "ମଣିଷ ପାଖରେ ସବୁ ତଥ୍ୟ ବା ଅସୀମ ସମୟ ନଥାଏ, ତେଣୁ ସେ ନିଜର ସୀମା ମଧ୍ୟରେ ବ୍ୟବହାରିକ ନିୟମ ପ୍ରୟୋଗ କରି ନିଷ୍ପତ୍ତି ନିଏ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "বাউণ্ডেড ৰেচনেলিটি: সীমাবদ্ধ তথ্য আৰু সময়ৰ মাজত লোৱা সিদ্ধান্ত", "মানুহৰ সকলো তথ্য জনাৰ ক্ষমতা বা অসীম সময় নাথাকে, সেয়েহে বাস্তৱিক সীমাবদ্ধতাৰ মাজত থাকি সিদ্ধান্ত ল’ব লগা হয়।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
