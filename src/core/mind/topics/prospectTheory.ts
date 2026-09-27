import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Decision Making Track
 * Topic: Prospect Theory: Value Functions, Probability Weighting & Risk Asymmetry
 * Category: decision_making
 * Academic Grounding: Daniel Kahneman & Amos Tversky (1979) (10.2307/1914185)
 */

export const TOPIC_PROSPECT_THEORY_EN: MindTopicDetail = {
  id: 'prospect_theory',
  categoryId: 'decision_making',
  slug: 'prospect-theory',
  difficulty: 'advanced',
  estimatedReadingMinutes: 7,
  scientificConsensusTier: 'established',
  sortWeight: 6,
  viewCount: 3860,
  shareCount: 294,
  bookmarkCount: 672,
  title: "Prospect Theory: Value Functions, Probability Weighting & Risk Asymmetry",
  subtitle: "The Nobel Prize-winning framework proving human beings evaluate choices based on perceived relative gains and losses rather than final absolute wealth.",
  shortDescription: "A behavioral economic model demonstrating that humans are risk-averse toward gains but risk-seeking toward losses, evaluating outcomes against a subjective reference point.",
  oneLineExplanation: "Losing ₹1,000 hurts more than winning ₹1,000 feels good, leading us into irrational gambles to escape defeat.",

  summary30s: "Introduced in 1979 by Daniel Kahneman and Amos Tversky, Prospect Theory overturned classical expected utility economics. It proved that humans do not calculate rational statistical expected value. Instead, our choices are governed by an S-shaped value curve that is steeper for losses than gains, and a probability weighting function where we overweight extreme low-probability risks and underweight moderate probabilities.",
  coreConcept: "Prospect Theory demonstrates three foundational principles: (1) Reference Dependence (outcomes are perceived relative to a psychological status-quo baseline, not absolute wealth); (2) Diminishing Sensitivity (the subjective difference between ₹100 and ₹200 feels vast, while the difference between ₹10,100 and ₹10,200 feels negligible); (3) Loss Aversion (losses loom roughly 2 to 2.5 times larger than equivalent gains, causing people to take reckless risks to break even).",
  summary60s: "In Kahneman and Tversky's classic experiments, given a choice between a sure win of $900 or a 90% chance to win $1,000, most participants choose the sure $900 (risk aversion in gains). But when facing a sure loss of $900 versus a 90% chance to lose $1,000, participants choose the risky gamble (risk-seeking in losses). People gamble recklessly to avoid accepting a certain defeat.",
  quickTakeaways: [
    "The S-Shaped Value Curve: Losses generate twice the emotional intensity of equal gains",
    "The Break-Even Trap: Traders and gamblers double down on catastrophic bets just to claw back to zero",
    "Nonlinear Probability Weighting: People buy lottery tickets and overpriced insurance due to overweighting rare odds",
    "Reference Point Reset: Reset your cognitive baseline to today's actual portfolio value, not yesterday's peak",
  ],

  whyItHappens: "Evolutionary survival asymmetry. In ancestral environments, gaining surplus food provided modest utility, but losing one day's food could cause death.",
  evolutionaryMechanism: "Early hominids who fought aggressively to avoid fatal resource deficits survived, hard-wiring asymmetric risk sensitivity into neural architecture.",
  howItWorks: "Option presented -> Brain anchors on current reference point -> Brain assesses relative gain/loss -> Loss aversion triggers emotional alarm -> Overweights rare odds -> Suboptimal decision made.",
  whereYouEncounterIt: "Stock trading, retail investment portfolios, insurance marketing, real estate negotiations, and legal settlement disputes.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Risk Aversion in Gains vs. Risk Seeking in Losses",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Gain Domain (Locks in Small Sure Wins)",
      detail: "\"My equity stock is up 8%; let me sell immediately to lock in the profit, ignoring future growth potential.\"",
    },
    analogySideB: {
      label: "Loss Domain (Gambles Recklessly)",
      detail: "\"My speculative crypto asset is down 65%; I refuse to sell and will invest more to gamble on a turnaround.\"",
    },
  },

  researchSummary: "Kahneman & Tversky (1979) published \"Prospect Theory: An Analysis of Decision under Risk\" in Econometrica, earning the 2002 Nobel Memorial Prize in Economic Sciences.",
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
      id: 'scen_prospect_theory_01',
      scenarioType: 'indian_context',
      title: "The Dalal Street Equity Trap",
      vignette: "Vikram is an IT architect in Pune who trades stocks on Zerodha. Last year, he bought shares of a renewable energy firm at ₹500. The stock climbs to ₹550 (+10%), and Vikram frantically sells his entire holding within two hours to \"lock in the guaranteed green profit.\" Later that month, he buys shares in an infrastructure firm at ₹800. The infrastructure firm gets embroiled in regulatory audits, and the price crashes to ₹400 (-50%). Instead of cutting his loss on this broken thesis, Vikram refuses to sell: \"It's not a loss until I sell!\" He even borrows money to average down at ₹350, hoping for a miracle rebound to break even.",
      breakdownAnalysis: "A textbook real-world case of Prospect Theory's reflection effect. Vikram exhibits risk aversion in gains (selling winners too early) and extreme risk-seeking in losses (doubling down on losers to avoid realizing pain).",
      recommendedAction: "Implement pre-set stop-loss orders and re-evaluate holdings on forward prospective return rather than historical purchase price.",
    },
  ],

  examples: [
    {
      id: 'ex_prospect_theory_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_prospect_theory_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_prospect_theory_01',
      scenarioContext: "A portfolio manager evaluates two clients. Client A sells a high-performing IT mutual fund the minute it hits a 12% return. Client B holds onto a failed airline stock that has lost 70% of its market value, insisting that selling would be admiting failure.",
      question: "Which core insight from Prospect Theory explains the psychological asymmetry governing both clients?",
      prompt: "Which core insight from Prospect Theory explains the psychological asymmetry governing both clients?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'advanced',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "People are uniformly risk-seeking across both positive and negative financial scenarios",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "People are risk-averse in the domain of gains (cashing out early) but risk-seeking in the domain of losses (gambling to break even)",
          isCorrect: true,
          explanation: "Prospect Theory's reflection effect proves that people become risk-averse when protecting gains, but become dangerously risk-seeking when trying to escape losses.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Social loafing prevented Client B from conducting quarterly portfolio reviews",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "The Pygmalion effect caused Client A to overperform market averages",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Cut your losses without ego; let your winners run without premature panic.",
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
      id: 'ref_prospect_theory_01',
      title: "Prospect Theory: An Analysis of Decision under Risk",
      citation: "Kahneman, D., & Tversky, A. (1979). Prospect Theory: An Analysis of Decision under Risk. Econometrica, 47(2), 263–291.",
      authors: "Daniel Kahneman & Amos Tversky",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.2307/1914185",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Decision Making', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'loss_aversion', slug: 'loss-aversion', title: 'Loss Aversion', relationshipType: 'amplified_by' },
    { topicId: 'sunk_cost_fallacy', slug: 'sunk-cost-fallacy', title: 'Sunk Cost Fallacy', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Prospect Theory: Value Functions, Probability Weighting & Risk Asymmetry | Mentalab Mind",
  seoDescription: "A behavioral economic model demonstrating that humans are risk-averse toward gains but risk-seeking toward losses, evaluating outcomes against a subjective",
  canonicalUrl: '/mind/decision-making/prospect-theory',
  ogImageUrl: '/images/mind/prospect-theory.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Prospect Theory demonstrates three foundational principles: (1) Reference Dependence (outcomes are perceived relative to a psychological status-quo baseline, not absolute wealth); (2) Diminishing Sensitivity (the subjective difference between ₹100 and ₹200 feels vast, while the difference between ₹10,100 and ₹10,200 feels negligible); (3) Loss Aversion (losses loom roughly 2 to 2.5 times larger than equivalent gains, causing people to take reckless risks to break even).",
};

export const TOPIC_PROSPECT_THEORY_HINGLISH: MindTopicDetail = {
  ...TOPIC_PROSPECT_THEORY_EN,
  title: "Prospect Theory: Munafa Chota Chahiye, Par Nuksan Se Bachne Ke Liye Andha Risk",
  subtitle: "Share market me log 10% profit dekh kar turant bech dete hain, par 50% loss hone par aur paisa laga dete hain break-even ke chakkar me.",
  shortDescription: "Ek aisi Nobel Prize winning theory jo batati hai ki insaan faayde me darrpok ban jata hai aur nuksan me recklessly bada jua khelne lagta hai.",
  oneLineExplanation: "₹1,000 jeetne ki khushi se double ₹1,000 khone ka dard hota hai, jisse log galat faaisle lete hain.",

  summary30s: "1979 me Kahneman aur Tversky ne Prospect Theory di. Inhone dikhaya ki jab hume thoda sa profit mil raha hota hai, toh hum safe ho jaate hain aur turant exit kar lete hain. Lekin jab loss ho raha hota hai, toh hum us loss ko accept nahi kar paate aur break-even karne ke liye andha risk lene lagte hain.",
  coreConcept: "Share market me 90% retail traders isliye barbaad hote hain kyunki wo profitable shares jaldi bech dete hain (risk averse in gains) aur doobti hui companies ko hold karke rakhte hain (risk seeking in losses).",
  quickTakeaways: [
    "Loss Aversion Asymmetry: ₹500 ka loss jhelna ₹500 jeetne se bohot zyada painful hota hai",
    "Break-Even Ki Zid: \"Jab tak becha nahi tab tak loss nahi hua\" kehna sabse bada jhooth hai",
    "Stop-Loss Lagayein: Emotions ko hatane ke liye pehle se rule set karein",
    "Winners Ko Run Karne Dein: Acche assets ko jaldi bechne ki galti na karein",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_PROSPECT_THEORY_EN,
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

export const TOPIC_PROSPECT_THEORY: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_PROSPECT_THEORY_EN,
  hinglish: TOPIC_PROSPECT_THEORY_HINGLISH,
  hi: createLocalizedRecord('hi', "प्रॉस्पेक्ट सिद्धांत (Prospect Theory): मूल्य फलन और जोखिम विषमता", "नोबेल पुरस्कार विजेता सिद्धांत जो दर्शाता है कि मनुष्य पूर्ण लाभ के बजाय संदर्भ बिंदु के सापेक्ष लाभ और हानि का मूल्यांकन करता है; लोग लाभ में जोखिम से बचते हैं किंतु हानि टालने के लिए अत्यधिक खतरनाक जुआ खेलते हैं।", [
    "लाभ में जोखिम से बचना और हानि में अंधा जोखिम लेना",
    "हानि की पीड़ा का लाभ के सुख से दोगुना होना",
    "संदर्भ बिंदु (Reference Point) का प्रभाव"
  ]),
  gu: createLocalizedRecord('gu', "પ્રોસ્પેક્ટ થિયરી: નફા અને નુકસાનમાં અસમાન જોખમ લેવાની વૃત્તિ", "જ્યારે લોકો નાના નફાથી સંતોષ માનીને તરત સોદો કાપી નાખે છે, પરંતુ નુકસાન સ્વીકારવાથી બચવા માટે મોટો જુગાર રમવા તૈયાર થઈ જાય છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "प्रॉस्पेक्ट थिअरी: नफा आणि तोट्यातील मानवी निर्णयप्रक्रियेची विषमता", "माणूस नफ्यात सुरक्षित पर्याय निवडतो, पण तोट्यातून बाहेर पडण्यासाठी जास्त धोके पत्करतो हा नोबेल पारितोषिक विजेता आर्थिक सिद्धांत.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "ప్రాస్పెక్ట్ థియరీ: లాభనష్టాలలో అసమాన రిస్క్ తీసుకునే మానసికత", "వ్యక్తులు లాభాలలో ఉన్నప్పుడు రిస్క్ తీసుకోకుండా తొందరపడతారు, కానీ నష్టాలు వచ్చినప్పుడు వాటిని తప్పించుకోవడానికి మరింత ప్రమాదకరమైన రిస్క్ చేస్తారు.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "எதிர்பார்ப்புக் கோட்பாடு: லாபத்திலும் நஷ்டத்திலும் மனித முடிவுகளின் முரண்பாடு", "மக்கள் லாபத்தை உடனே பெற அவசரப்படுகிறார்கள், ஆனால் நஷ்டத்தை ஏற்க மறுத்து அதை மறைக்க பெரும் சூதாட்டத்தில் ஈடுபடுகிறார்கள்.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಪ್ರಾಸ್ಪೆಕ್ಟ್ ಥಿಯರಿ: ಲಾಭ ಮತ್ತು ನಷ್ಟದಲ್ಲಿ ಅಸಮತೋಲಿತ ರಿಸ್ಕ್ ತೆಗೆದುಕೊಳ್ಳುವ ಪ್ರವೃತ್ತಿ", "ಲಾಭ ಬಂದಾಗ ಜನ ಸುರಕ್ಷಿತವಾಗಿರಲು ಬಯಸುತ್ತಾರೆ, ಆದರೆ ನಷ್ಟವಾದಾಗ ಅದನ್ನು ಸರಿಪಡಿಸಲು ಇನ್ನಷ್ಟು ದೊಡ್ಡ ತಪ್ಪು ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳುತ್ತಾರೆ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "പ്രോസ്പെക്റ്റ് തിയറി: നേട്ടങ്ങളിലും നഷ്ടങ്ങളിലും മനുഷ്യൻ എടുക്കുന്ന വികലമായ തീരുമാനങ്ങൾ", "ലാഭം കിട്ടുമ്പോൾ സുരക്ഷിതത്വം തേടുകയും എന്നാൽ നഷ്ടം വരുമ്പോൾ അത് വീണ്ടെടുക്കാൻ കൂടുതൽ അപകടകരമായ റിസ്ക് എടുക്കുകയും ചെയ്യുന്ന മനോഭാവം.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "প্রসপেক্ট থিওরি: লাভ এবং ক্ষতির মুখে মানুষের অসম ঝুঁকিপূর্ণ সিদ্ধান্ত", "মানুষ লাভ দেখে দ্রুত সরে আসে, কিন্তু ক্ষতি মেনে না নেওয়ার জেদে আরও বড় জুয়া খেলে নিজেকে ধ্বংস করে—এই নোবেলজয়ী তত্ত্ব।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਪ੍ਰਾਸਪੈਕਟ ਥਿਊਰੀ: ਮੁਨਾਫ਼ੇ ਅਤੇ ਨੁਕਸਾਨ ਵਿੱਚ ਗਲਤ ਫੈਸਲੇ ਲੈਣ ਦੀ ਆਦਤ", "ਲੋਕ ਥੋੜ੍ਹਾ ਜਿਹਾ ਮੁਨਾਫ਼ਾ ਦੇਖ ਕੇ ਖੁਸ਼ ਹੋ ਜਾਂਦੇ ਹਨ, ਪਰ ਨੁਕਸਾਨ ਤੋਂ ਬਚਣ ਲਈ ਅੰਨ੍ਹਾ ਜੋਖਮ ਉਠਾ ਕੇ ਹੋਰ ਡੁੱਬ ਜਾਂਦੇ ਹਨ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "امکاناتی نظریہ: نفع و نقصان میں فیصلے کا غیر متوازن توازن", "نوبل انعام یافتہ نظریہ جو بتاتا ہے کہ انسان فائدے میں ڈرپوک بن جاتا ہے اور نقصان سے بچنے کے لیے اندھا جوا کھیلنے پر تیار ہو جاتا ہے۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ପ୍ରୋସ୍ପେକ୍ଟ ଥିଓରୀ: ଲାଭ ଏବଂ କ୍ଷତିରେ ବିପଦ ନେବାର ଅସମାନ ମନସ୍ତତ୍ତ୍ୱ", "ଲାଭ ମିଳିଲେ ଲୋକେ ତୁରନ୍ତ ଛାଡ଼ିଦିଅନ୍ତି, କିନ୍ତୁ କ୍ଷତି ସହି ନପାରି ଅଧିକ ବିପଜ୍ଜନକ ନିଷ୍ପତ୍ତି ନେଇ ସର୍ବସ୍ୱ ହରାନ୍ତି।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "প্ৰস্পেক্ট থিয়ৰী: লাভ আৰু লোকচানত বিপদ লোৱাৰ মনস্তাত্ত্বিক বৈষম্য", "লাভে মানুহক সহজে সন্তুষ্ট কৰে কিন্তু লোকচানৰ পৰা হাত সাৰিবলৈ মানুহে ভয়ংকৰ বিপদৰ মাজত জাপ দিয়ে—এই অৰ্থনৈতিক নীতি।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
