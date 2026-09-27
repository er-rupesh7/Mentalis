import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Decision Making Track
 * Topic: Choice Overload: The Demotivating Paralysis of Excessive Options
 * Category: decision_making
 * Academic Grounding: Sheena S. Iyengar & Mark R. Lepper (2000) (10.1037/0022-3514.79.6.995)
 */

export const TOPIC_CHOICE_OVERLOAD_EN: MindTopicDetail = {
  id: 'choice_overload',
  categoryId: 'decision_making',
  slug: 'choice-overload',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 9,
  viewCount: 4190,
  shareCount: 336,
  bookmarkCount: 738,
  title: "Choice Overload: The Demotivating Paralysis of Excessive Options",
  subtitle: "While having choices is liberating, offering too many alternatives overwhelms cognitive bandwidth, spikes decision fatigue, and halts purchases completely.",
  shortDescription: "A cognitive impairment in decision making that occurs when faced with too many options, leading to delayed action, choice avoidance, and reduced satisfaction.",
  oneLineExplanation: "More options sound exciting, but they freeze our decisions and leave us dissatisfied.",

  summary30s: "Discovered in 2000 by Sheena Iyengar and Mark Lepper in their famous \"Jam Experiment,\" Choice Overload proved that more choice is not always better. When a grocery tasting booth offered 24 flavors of gourmet jam, 60% of shoppers stopped to look, but only 3% bought a jar. When the booth offered just 6 flavors, 40% stopped, but an astounding 30% bought a jar—a 10-fold increase in actual conversion.",
  coreConcept: "Human working memory can only handle roughly 4 to 7 items concurrently. When faced with dozens of choices, the cognitive cost of comparing trade-offs exceeds the perceived benefit of precision. Consumers experience cognitive overload, worry about choosing wrong (anticipated regret), and resolve the discomfort through choice deferral: walking away without choosing anything.",
  summary60s: "Choice overload extends far beyond supermarkets. In corporate retirement benefits, Iyengar and colleagues found that for every 10 additional mutual fund options added to a company's 401(k) / provident fund menu, employee participation dropped by 2%. Employees literally left free employer-matching money on the table because choosing between 50 funds triggered crippling decision paralysis.",
  quickTakeaways: [
    "The Paradox of Choice: Variety attracts attention, but simplicity drives action and closure",
    "The Rule of 3 to 5: When presenting options to clients, bosses, or yourself, restrict the menu to 3 curated choices",
    "Default Selection Power: Combat paralysis by establishing clear, high-quality default options",
    "Eliminate the Low Tier: Systematically remove the bottom 50% of mediocre alternatives before evaluating",
  ],

  whyItHappens: "Working memory bottleneck and fear of future regret. Comparing 30 multi-attribute items causes cognitive exhaustion.",
  evolutionaryMechanism: "Hominid brains evolved in environments with minimal choices; our neural architecture is ill-equipped to compute trade-offs across hundreds of commodities.",
  howItWorks: "Too many options presented -> Excitement attracts attention -> Trade-off comparison begins -> Mental bandwidth saturates -> Paralysis and anxiety set in -> Consumer abandons decision.",
  whereYouEncounterIt: "Streaming video platforms (Netflix/Hotstar), food delivery menus (Swiggy/Zomato), mutual fund portals, and e-commerce shopping.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "24 Choices vs. 6 Choices",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Overloaded Menu (24 Options)",
      detail: "\"60% of shoppers stopped to look at the tasting booth; only 3% purchased a jar due to comparison paralysis.\"",
    },
    analogySideB: {
      label: "Curated Menu (6 Options)",
      detail: "\"40% stopped to look; 30% completed a purchase—generating 10x higher actual revenue.\"",
    },
  },

  researchSummary: "Iyengar & Lepper (2000) published \"When Choice is Demotivating: Can One Desire Too Much of a Good Thing?\" in JPSP, establishing empirical choice overload.",
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
      id: 'scen_choice_overload_01',
      scenarioType: 'indian_context',
      title: "The Friday Night Dinner Paralysis on Zomato",
      vignette: "Karan and his wife sit on the couch in Mumbai at 8:30 PM to order dinner on Zomato. They open the app and find 120 restaurants nearby. They scroll through Chinese, Mughlai, South Indian, and Continental menus for 50 minutes, debating whether 4.2-star rated butter chicken is better than 4.4-star biryani with a longer delivery time. By 9:30 PM, their eyes hurt, hunger has turned to irritation, and they argue over minor delivery fees. In utter frustration, Karan locks his phone: \"Forget it, let's just boil two packets of instant Maggi noodles.\"",
      breakdownAnalysis: "A quintessential real-world demonstration of Choice Overload. The abundance of 120 restaurants depleted their cognitive willpower, leading to decision fatigue and choice deferral.",
      recommendedAction: "Curate choices beforehand: create a personal \"Friday Favorites\" list of exactly 3 restaurants and pick from that closed set only.",
    },
  ],

  examples: [
    {
      id: 'ex_choice_overload_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_choice_overload_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_choice_overload_01',
      scenarioContext: "An HR manager redesigns the health insurance portal for 5,000 employees. Previously, offering 45 complex customizable policy options resulted in 35% of eligible employees never enrolling. The HR manager reduces the options to 3 clear packages (Bronze, Silver, Gold).",
      question: "Based on Iyengar and Lepper's Choice Overload findings, what will be the empirical outcome of this change?",
      prompt: "Based on Iyengar and Lepper's Choice Overload findings, what will be the empirical outcome of this change?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'beginner',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Employee satisfaction will plummet because humans require unlimited micro-customization",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Enrollment rates will surge significantly because reducing cognitive friction eliminates decision paralysis",
          isCorrect: true,
          explanation: "Reducing choices from 45 to 3 eliminates cognitive overload, making comparison manageable and dramatically increasing enrollment completion.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Employees will experience social loafing and refuse to choose any package",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Employees will succumb to psychological reactance and buy private insurance outside",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Simplify choices to unleash action: when options multiply, decisions freeze.",
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
      id: 'ref_choice_overload_01',
      title: "When Choice is Demotivating: Can One Desire Too Much of a Good Thing?",
      citation: "Iyengar, S. S., & Lepper, M. R. (2000). Journal of Personality and Social Psychology, 79(6), 995–1006.",
      authors: "Sheena S. Iyengar & Mark R. Lepper",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1037/0022-3514.79.6.995",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Decision Making', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'paradox_of_choice', slug: 'paradox-of-choice', title: 'The Paradox of Choice', relationshipType: 'amplified_by' },
    { topicId: 'satisficing_vs_maximizing', slug: 'satisficing-vs-maximizing', title: 'Satisficing vs. Maximizing', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Choice Overload: The Demotivating Paralysis of Excessive Options | Mentalab Mind",
  seoDescription: "A cognitive impairment in decision making that occurs when faced with too many options, leading to delayed action, choice avoidance, and reduced satisfacti",
  canonicalUrl: '/mind/decision-making/choice-overload',
  ogImageUrl: '/images/mind/choice-overload.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Human working memory can only handle roughly 4 to 7 items concurrently. When faced with dozens of choices, the cognitive cost of comparing trade-offs exceeds the perceived benefit of precision. Consumers experience cognitive overload, worry about choosing wrong (anticipated regret), and resolve the discomfort through choice deferral: walking away without choosing anything.",
};

export const TOPIC_CHOICE_OVERLOAD_HINGLISH: MindTopicDetail = {
  ...TOPIC_CHOICE_OVERLOAD_EN,
  title: "Choice Overload: Zyada Options Se Dimaag Ka Hang Ho Jana",
  subtitle: "Jab menu par 100 cheezein hoti hain toh hum 1 ghante tak scroll karte rehte hain aur aakhiri me bina kuch khaye so jaate hain.",
  shortDescription: "Ek aisi sthiti jisme bohot zyada options hone ki wajah se dimaag thak jata hai aur insaan koi bhi faisla nahi le pata.",
  oneLineExplanation: "Options jitne zyada honge, faisla lena utna hi mushkil aur dukhdayi ho jayega.",

  summary30s: "2000 me Sheena Iyengar ne prasiddh \"Jam Experiment\" kiya. Jab dukaan par 24 tarah ke jam rakhe gaye, toh bohot log dekhne aaye par sirf 3% ne khareeda. Lekin jab sirf 6 jam rakhe gaye, toh 30% logo ne turant khareed liya. Jab insaan ko bohot options milte hain, toh uska dimaag confuse ho jata hai aur wo purchase cancel kar deta hai.",
  coreConcept: "Zomato, Netflix ya Amazon par jab hum ghanto scroll karte hain aur aakhir me kuch nahi dekhte, toh use Decision Paralysis kehte hain. Zyada options se hume lagta hai ki koi galat cheez na chuni jaye, isliye hum faisla taal dete hain.",
  quickTakeaways: [
    "Rule of 3: Kisi ko bhi option dete waqt sirf 3 best options samne rakhein",
    "Paralysis Se Bachna: 5 minute me faisla lene ka rule banayein",
    "Netflix Trap: List banane me 40 minute kharab na karein, pehli acchi movie laga dein",
    "Simplicity Wins: Simple system me log zyada perform karte hain",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_CHOICE_OVERLOAD_EN,
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

export const TOPIC_CHOICE_OVERLOAD: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_CHOICE_OVERLOAD_EN,
  hinglish: TOPIC_CHOICE_OVERLOAD_HINGLISH,
  hi: createLocalizedRecord('hi', "विकल्पों की अति (Choice Overload): अत्यधिक विकल्पों से उत्पन्न निर्णय-अक्षमता", "शीना अयंगर का प्रसिद्ध अध्ययन जो सिद्ध करता है कि यद्यपि विकल्प आकर्षित करते हैं, किंतु अत्यधिक विकल्प मनुष्य की कार्यशील स्मृति पर भारी पड़ते हैं, निर्णय की थकान पैदा करते हैं और अंततः व्यक्ति को कोई भी निर्णय न लेने (निर्णय पक्षाघात) की ओर धकेल देते हैं।", [
    "विकल्पों की अधिकता से निर्णय पक्षाघात",
    "3 से 5 विकल्पों की सीमा (Rule of 3 to 5)",
    "सरलीकरण से कार्य-संपादन में वृद्धि"
  ]),
  gu: createLocalizedRecord('gu', "ચોઇસ ઓવરલોડ: વધુ પડતા વિકલ્પોથી નિર્ણય લેવામાં અસમર્થતા", "જ્યારે આપણી સામે અસંખ્ય વિકલ્પો મૂકવામાં આવે છે ત્યારે મગજ થાકી જાય છે અને વ્યક્તિ કોઈ પણ નિર્ણય લીધા વગર પાછી ફરે છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "चॉईस ओव्हरलोड: अतिरिक्त पर्यायांमुळे होणारा निर्णय-पक्षाघात", "खूप जास्त पर्याय समोर आल्यावर तुलना करण्याचा ताण वाढतो आणि शेवटी माणूस कोणताही निर्णय न घेता कंटाळून माघार घेतो.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "ఛాయిస్ ఓవర్‌లోడ్: అధిక ఆప్షన్ల వల్ల నిర్ణయం తీసుకోలేకపోవడం", "ఎక్కువ ఆప్షన్లు ఉన్నప్పుడు మెదడు గందరగోళానికి గురై, నిర్ణయం తీసుకోకుండా వాయిదా వేసే మానసిక పరిస్థితి.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "அதிகப்படியான தேர்வுகள் சுமை: பல வாய்ப்புகளால் ஏற்படும் முடிவு முடக்கம்", "தேர்வுகளின் எண்ணிக்கை அதிகரிக்கும் போது மூளை சோர்வடைந்து, எதையுமே தேர்ந்தெடுக்க முடியாமல் தவிக்கும் நிலை.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಚಾಯ್ಸ್ ಓವರ್‌ಲೋಡ್: ಅತಿಯಾದ ಆಯ್ಕೆಗಳಿಂದ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಲಾಗದ ಸ್ಥಿತಿ", "ಮುಂದೆ ನೂರಾರು ಆಯ್ಕೆಗಳಿದ್ದಾಗ ಮೆದುಳು ಗೊಂದಲಕ್ಕೀಡಾಗಿ, ಕೊನೆಗೆ ಯಾವುದೇ ನಿರ್ಧಾರವನ್ನೂ ಕೈಗೊಳ್ಳಲಾಗದೆ ಕೈಚೆಲ್ಲುವ ವಿದ್ಯಮಾನ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "ചോയ്സ് ഓവർലോഡ്: കൂടുതൽ അവസരങ്ങൾ വരുത്തുന്ന തീരുമാന സ്തംഭനം", "ധാരാളം ഓപ്ഷനുകൾ മുന്നിൽ വരുമ്പോൾ താരതമ്യം ചെയ്ത് മടുത്ത് ഒടുവിൽ ഒരു തീരുമാനവും എടുക്കാതെ പോകുന്ന അവസ്ഥ.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "চয়েস ওভারলোড: অতিরিক্ত পছন্দের কারণে সিদ্ধান্তহীনতায় ভোগা", "বিকল্পের সংখ্যা অতিরিক্ত বেড়ে গেলে মানুষের মস্তিষ্ক ক্লান্ত হয়ে পড়ে এবং কোনো সিদ্ধান্তই গ্রহণ করতে পারে না—এই বিখ্যাত জ্যাম পরীক্ষা।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਚੁਆਇਸ ਓਵਰਲੋਡ: ਬਹੁਤੇ ਵਿਕਲਪਾਂ ਕਾਰਨ ਫੈਸਲਾ ਨਾ ਲੈ ਸਕਣ ਦੀ ਸਮੱਸਿਆ", "ਜਦੋਂ ਸਾਹਮਣੇ ਬਹੁਤ ਸਾਰੇ ਆਪਸ਼ਨ ਹੁੰਦੇ ਹਨ, ਤਾਂ ਦਿਮਾਗ ਥੱਕ ਜਾਂਦਾ ਹੈ ਅਤੇ ਵਿਅਕਤੀ ਕੋਈ ਵੀ ਚੋਣ ਕਰਨ ਤੋਂ ਅਸਮਰੱਥ ਹੋ ਜਾਂਦਾ ਹੈ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "انتخابات کا بوجھ: بے شمار راستوں سے فیصلے کی قوت مفلوج ہونا", "بہت زیادہ اختیارات سامنے آنے پر موازنے کی تھکن سوار ہو جاتی ہے اور انسان بالآخر کوئی فیصلہ لیے بغیر ہاتھ کھینچ لیتا ہے۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ଚଏସ୍ ଓଭରଲୋଡ୍: ଅତ୍ୟଧିକ ବିକଳ୍ପରୁ ଉପୁଜୁଥିବା ଦ୍ୱନ୍ଦ୍ୱ ଓ ନିଷ୍ପତ୍ତିହୀନତା", "ଯେତେବେଳେ ସାମ୍ନାରେ ବହୁତ ଗୁଡ଼ିଏ ବିକଳ୍ପ ଥାଏ, ମସ୍ତିଷ୍କ ଥକିପଡ଼େ ଏବଂ ଲୋକ କୌଣସି ବି ନିଷ୍ପତ୍ତି ନନେଇ ପଛଘୁଞ୍ଚା ଦିଏ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "চয়ছ অভাৰলোড: অত্যাধিক বিকল্পই সৃষ্টি কৰা সিদ্ধান্তহীনতা", "পছন্দ কৰিবলগীয়া বস্তুৰ সংখ্যা বাঢ়িলে মনত অনিশ্চয়তা বাঢ়ে আৰু শেষত মানুহে একো সিদ্ধান্ত ল’ব নোৱাৰা হৈ পৰে।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
