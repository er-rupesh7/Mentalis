import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Decision Making Track
 * Topic: Present Bias & Precommitment: Defeating the Impulsive Present Self
 * Category: decision_making
 * Academic Grounding: Ted O'Donoghue & Matthew Rabin (1999) (10.1257/aer.89.1.103)
 */

export const TOPIC_PRESENT_BIAS_COMMITMENT_EN: MindTopicDetail = {
  id: 'present_bias_commitment',
  categoryId: 'decision_making',
  slug: 'present-bias-commitment',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 15,
  viewCount: 4850,
  shareCount: 420,
  bookmarkCount: 870,
  title: "Present Bias & Precommitment: Defeating the Impulsive Present Self",
  subtitle: "How asymmetric preference for immediate gratification sabotages long-term rational plans—and how binding Ulysses contracts enforce self-control.",
  shortDescription: "A cognitive bias where people place disproportionately higher weight on rewards that happen right now compared to rewards in the future, solved through precommitment devices.",
  oneLineExplanation: "Your future self wants six-pack abs and a retirement fund; your present self wants warm gulab jamuns and doomscrolling right now.",

  summary30s: "Analyzed by Ted O'Donoghue & Matthew Rabin in 1999 and rooted in Thomas Schelling's work on precommitment, Present Bias proves that humans suffer from a temporal split personality. When planning for tomorrow, we are completely rational (\"I will wake up at 5:30 AM and study\"). But when tomorrow becomes today, our present self hijacks control, prioritizing immediate dopamine over long-term flourishing.",
  coreConcept: "Willpower is a depletable cognitive muscle that routinely fails against visceral temptation. The only reliable empirical solution is a \"Ulysses Contract\" (Precommitment Device): a voluntary, binding arrangement made by your rational present self that locks your future choices, making self-sabotage either physically impossible or prohibitively expensive (e.g., tying oneself to the mast like Odysseus hearing the Sirens).",
  summary60s: "In landmark behavioral experiments by Esther Duflo and colleagues with agricultural farmers, farmers consistently spent their harvest revenues rather than buying fertilizer for the next season, even though fertilizer tripled crop yield. When offered a precommitment mechanism—purchasing fertilizer vouchers immediately upon harvest when cash was in hand—fertilizer usage skyrocketed by over 40%, generating lasting prosperity.",
  quickTakeaways: [
    "The Temporal Split: You are two people: the rational Planner and the impulsive Doer",
    "Stop Relying on Willpower: Willpower fails at 11 PM; rely on structural environmental constraints instead",
    "The Ulysses Contract: Lock your future actions using locked SIP mutual funds, website blockers, and public accountability",
    "Automate Good Habits: Route money into investments on the exact hour your salary hits your account",
  ],

  whyItHappens: "Dual-system neurobiology. Immediate rewards trigger the ancient limbic dopamine system; future rewards are processed by the cooler, weaker prefrontal cortex.",
  evolutionaryMechanism: "In ancestral wilderness, immediate calorie consumption and resting preserved survival; planning 30 years ahead had zero survival value.",
  howItWorks: "Rational self makes tomorrow's plan -> Next morning arrives -> Visceral temptation appears -> Limbic system discounts future benefits -> Procrastination occurs -> Regret follows.",
  whereYouEncounterIt: "Gym attendance, retirement savings, exam cramming, junk food bingeing, and smartphone addiction.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Fickle Willpower vs. Binding Ulysses Contract",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Willpower Reliance (Fails)",
      detail: "\"I will keep the chocolate tub on my desk and simply use mental willpower not to eat it while working.\"",
    },
    analogySideB: {
      label: "Binding Precommitment (Succeeds)",
      detail: "\"I never buy chocolates into the house; if I crave sugar, I must walk 2 kilometers to the market to buy a single piece.\"",
    },
  },

  researchSummary: "O'Donoghue & Rabin (1999) published \"Doing It Now or Later\" in the American Economic Review, formalizing present-biased preferences.",
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
      id: 'scen_present_bias_commitment_01',
      scenarioType: 'indian_context',
      title: "The Automated SIP Shield in Noida",
      vignette: "Neha is a 26-year-old software engineer in Noida. For two years, she promised herself: \"Whatever money is left at the end of the month, I will invest in equity mutual funds.\" Every single month, by day 25, her salary had vanished on weekend brunches, Swiggy orders, and flash sales. Frustrated with zero savings, Neha sets up an automated Systematic Investment Plan (SIP) scheduled for the 2nd of every month—the exact day her salary deposits. The bank automatically debits ₹25,000 into index funds before she can spend it. Within 18 months, Neha saves ₹4,50,000 effortlessly, without feeling any deprivation.",
      breakdownAnalysis: "A textbook real-world application of Precommitment defeating Present Bias. Neha removed the fickle \"Doer\" from the decision loop by letting the rational \"Planner\" automate the commitment ahead of time.",
      recommendedAction: "Precommit immediately: automate savings, use app blockers with randomized passwords stored with a friend, and purge temptations from your physical environment.",
    },
  ],

  examples: [
    {
      id: 'ex_present_bias_commitment_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_present_bias_commitment_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_present_bias_commitment_01',
      scenarioContext: "A college student preparing for the CAT management entrance exam routinely gets distracted by Instagram reels. He downloads an app blocker, has his roommate set a secret 6-digit passcode for 90 days, and hands his phone to the roommate during study hours.",
      question: "Which empirical behavioral mechanism is the student utilizing to overcome his present bias?",
      prompt: "Which empirical behavioral mechanism is the student utilizing to overcome his present bias?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "A Ulysses contract (precommitment device) physically binding his future self against temptation",
          isCorrect: true,
          explanation: "By setting an external barrier that removes temptation beforehand, the student uses a Ulysses contract to defeat present bias.",
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Social loafing in exam preparation",
          isCorrect: false,
          explanation: 'Incorrect. This does not address the core underlying psychological mechanism.',
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Diffusion of responsibility across study partners",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "The Asch conformity effect",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Outsmart your future impulsive self: lock the door before the temptation arrives.",
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
      id: 'ref_present_bias_commitment_01',
      title: "Doing It Now or Later",
      citation: "O'Donoghue, T., & Rabin, M. (1999). Doing It Now or Later. American Economic Review, 89(1), 103–124.",
      authors: "Ted O'Donoghue & Matthew Rabin",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1257/aer.89.1.103",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Decision Making', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'hyperbolic_discounting', slug: 'hyperbolic-discounting', title: 'Hyperbolic Discounting', relationshipType: 'amplified_by' },
    { topicId: 'planning_fallacy', slug: 'planning-fallacy', title: 'Planning Fallacy', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Present Bias & Precommitment: Defeating the Impulsive Present Self | Mentalab Mind",
  seoDescription: "A cognitive bias where people place disproportionately higher weight on rewards that happen right now compared to rewards in the future, solved through pre",
  canonicalUrl: '/mind/decision-making/present-bias-commitment',
  ogImageUrl: '/images/mind/present-bias-commitment.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Willpower is a depletable cognitive muscle that routinely fails against visceral temptation. The only reliable empirical solution is a \"Ulysses Contract\" (Precommitment Device): a voluntary, binding arrangement made by your rational present self that locks your future choices, making self-sabotage either physically impossible or prohibitively expensive (e.g., tying oneself to the mast like Odysseus hearing the Sirens).",
};

export const TOPIC_PRESENT_BIAS_COMMITMENT_HINGLISH: MindTopicDetail = {
  ...TOPIC_PRESENT_BIAS_COMMITMENT_EN,
  title: "Present Bias & Precommitment: Aaj Ki Mauj Ke Aage Kal Ka Sapna Bhool Jana",
  subtitle: "Raat ko hum 5 baje uthne ka plan banate hain, par subah aate hi dimaag snooze button daba deta hai. Is aadat ko todne ka ek hi tareeqa hai: Precommitment.",
  shortDescription: "Ek aisi aadat jisme hum future ke bade faayde ko chhod kar aaj ke chote maze (social media, junk food) ke peeche bhaagte hain.",
  oneLineExplanation: "Kal ka Neha fit hona chahta hai, par aaj ka Neha chocolate khana chahta hai.",

  summary30s: "1999 me O'Donoghue aur Rabin ne Present Bias explain kiya. Hum jab kal ki planning karte hain, toh hum bohot akalmand hote hain (\"Kal se gym pakka\"). Lekin jab wo pal aata hai, toh hamara dimaag instant dopamine ke aage surrender kar deta hai. Isse ladne ke liye Ulysses Contract zaroori hai—yaani pehle se hi aisa system bana dena jisse cheating karna impossible ho jaye.",
  coreConcept: "Willpower par bharosa karna band karein. Salary aate hi 2nd date ko SIP katwana Precommitment hai. Phone me app locker lagakar password dost ko de dena Precommitment hai. Jab vikalp hi nahi bachega, tabhi insaan disciplined banega.",
  quickTakeaways: [
    "Two Personalities: Ek rational Planner hai aur ek lalach me aane wala Doer",
    "Willpower Dhokha Hai: Raat ko 11 baje willpower kaam nahi aati; system aur environment kaam aate hain",
    "Ulysses Contract: Apne aane wale kal ko baandh kar rakhein (jaise auto-debit SIP)",
    "Automate Everything: Acche kaamo ko automatic karein aur buri aadat ke raste me patthar daalein",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_PRESENT_BIAS_COMMITMENT_EN,
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

export const TOPIC_PRESENT_BIAS_COMMITMENT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_PRESENT_BIAS_COMMITMENT_EN,
  hinglish: TOPIC_PRESENT_BIAS_COMMITMENT_HINGLISH,
  hi: createLocalizedRecord('hi', "वर्तमान पूर्वाग्रह और पूर्व-प्रतिबद्धता (Present Bias & Precommitment)", "ओ’डोनोह्यू और राबिन का सिद्धांत जो स्पष्ट करता है कि मनुष्य भविष्य के दीर्घकालिक लाभों की तुलना में तात्कालिक सुख (Instant Gratification) को अत्यधिक प्राथमिकता देता है; इससे बचने का एकमात्र प्रभावी उपाय पूर्व-प्रतिबद्धता उपकरण (Ulysses Contracts) हैं जो भविष्य के विकल्पों को बाध्यकारी बना देते हैं।", [
    "तात्कालिक सुख बनाम दीर्घकालिक लक्ष्य",
    "इच्छाशक्ति की सीमाएं और तंत्र की आवश्यकता",
    "यूलिसिस अनुबंध (Ulysses Contracts) द्वारा आत्म-नियंत्रण"
  ]),
  gu: createLocalizedRecord('gu', "પ્રેઝન્ટ બાયસ અને પ્રી-કમિટમેન્ટ: તત્કાલ સુખના મોહ સામે લાંબાગાળાનું આયોજન", "જ્યારે વ્યક્તિ લાંબાગાળાના મોટા લક્ષ્યોને બદલે ક્ષણિક આનંદ પાછળ દોડે છે; આ આદતને તોડવા માટે ઓટોમેટેડ સિસ્ટમ અને પ્રી-કમિટમેન્ટ જરૂરી છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "प्रेझेंट बायस आणि प्री-कमिटमेंट: तात्कालिक सुखाचा मोह आणि पूर्वनियोजनाची ताकद", "भविष्यातील मोठे ध्येय सोडून वर्तमानातील तात्पुरत्या मोहामध्ये वाहून जाण्याची सवय; यावर मात करण्यासाठी युलीसिस करारासारख्या बंधनांचा वापर केला जातो.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "ప్రెజెంట్ బయాస్ & ప్రీ-కమిట్‌మెంట్: తక్షణ ఆనందం కోసం భవిష్యత్తును బలివ్వడం", "తక్షణ సుఖాలకు లొంగిపోయి దీర్ఘకాలిక లక్ష్యాలను విస్మరించే మానసిక బలహీనత; దీనిని అధిగమించడానికి ముందుగానే కఠినమైన నిబంధనలు పెట్టుకోవడం అవసరం.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "தற்காலிக ஒருதலைப்பட்சம் & முன்கூட்டிய உறுதிப்பாடு: உடனடி இன்பத்திற்கு அடிமையாதல்", "எதிர்கால நன்மைகளை விட தற்போதைய உடனடி சுகத்திற்கு முன்னுரிமை கொடுக்கும் பலவீனம்; முன்கூட்டியே சுய கட்டுப்பாட்டு விதிகளை உருவாக்குவதன் மூலம் மட்டுமே இதை வெல்ல முடியும்.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಪ್ರೆಸೆಂಟ್ ಬಯಾಸ್ & ಪ್ರೀ-ಕಮಿಟ್‌ಮೆಂಟ್: ತಕ್ಷಣದ ಸುಖಕ್ಕಾಗಿ ಭವಿష్యತ್ತನ್ನು ಮರೆಯುವುದು", "ದೀರ್ಘಕಾಲದ ಯಶಸ್ಸಿನ ಬದಲಿಗೆ ತಾತ್ಕಾಲಿಕ ಮೋಜು-ಮಸ್ತಿಗೆ ಮಾರುಹೋಗುವ ಪ್ರವೃತ್ತಿ; ಇದನ್ನು ಜಯಿಸಲು ಮುಂಚಿತವಾಗಿಯೇ ಕಟ್ಟುನಿಟ್ಟಿನ ನಿಯಮಗಳನ್ನು ರೂಪಿಸಿಕೊಳ್ಳಬೇಕು.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "പ്രസന്റ് ബയസ് & പ്രീ-കമ്മിറ്റ്‌മെന്റ്: താൽക്കാലിക സുഖത്തിന് വേണ്ടിയുള്ള പാച്ചിൽ", "ഭാവിയിലെ വലിയ ലക്ഷ്യങ്ങൾക്ക് പകരം ഇപ്പോഴത്തെ ചെറിയ സന്തോഷങ്ങൾക്ക് മുൻഗണന നൽകുന്ന അവസ്ഥ; മുൻകൂട്ടിയുള്ള സ്വയം നിയന്ത്രണ കരാറുകളിലൂടെ മാത്രമേ ഇതിനെ തോൽപ്പിക്കാനാവൂ.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "প্রেজেন্ট বায়াস এবং প্রি-কমিটমেন্ট: তাৎক্ষণিক মোহের ফাঁদে ভবিষ্যতের ক্ষতি", "ভবিষ্যতের দীর্ঘমেয়াদী সফলতার চেয়ে বর্তমানের ক্ষণিক আনন্দকে বেশি গুরুত্ব দেওয়ার মানসিক ত্রুটি; যা ইউলিসিস চুক্তির মতো বাধ্যবাধকতার মাধ্যমে জয় করা সম্ভব।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਪ੍ਰੈਜ਼ੈਂਟ ਬਾਇਸ ਅਤੇ ਪ੍ਰੀ-ਕਮਿਟਮੈਂਟ: ਤੁਰੰਤ ਮੌਜ ਲਈ ਭਵਿੱਖ ਦਾ ਨੁਕਸਾਨ", "ਲੰਬੇ ਸਮੇਂ ਦੇ ਟੀਚਿਆਂ ਨੂੰ ਛੱਡ ਕੇ ਅੱਜ ਦੇ ਸਸਤੇ ਮਨੋਰੰਜਨ ਵਿੱਚ ਫਸ ਜਾਣ ਦੀ ਆਦਤ, ਜਿਸਨੂੰ ਸਿਰਫ਼ ਸਵੈ-ਬੰਧਨ ਪ੍ਰਣਾਲੀ ਨਾਲ ਹੀ ਸੁਧਾਰਿਆ ਜਾ ਸਕਦਾ ਹੈ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "حالیہ تعصب اور پیشگی عہد: فوری لذت کے لیے مستقبل کی قربانی", "مستقبل کے بڑے مقاصد پر موجودہ لمحے کے وقتی لطف کو ترجیح دینا، جس کا واحد حل پیشگی سخت ضابطے اور خود کار طریقے ہیں۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ପ୍ରେଜେଣ୍ଟ ବାୟାସ୍ ଓ ପ୍ରି-କମିଟମେଣ୍ଟ: ତତ୍କାଳ ଆନନ୍ଦ ପାଇଁ ଭବିଷ୍ୟତକୁ ବଳିଦାନ", "ଦୀର୍ଘକାଳୀନ ଉନ୍ନତି ବଦଳରେ ବର୍ତ୍ତମାନର ସାମୟିକ ଖୁସି ପଛରେ ଗୋଡ଼ାଇବାର ଦୁର୍ବଳତା; ପୂର୍ବ-ନିର୍ଦ୍ଧାରିତ କଠୋର ନିୟମ ହିଁ ଏହାର ସମାଧାନ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "প্ৰেজেণ্ট বায়াস আৰু প্ৰি-কমিটমেণ্ট: ক্ষণিক আনন্দৰ বাবে ভৱিষ্যত পাহৰাৰ ভুল", "ভৱিষ্যতৰ ডাঙৰ লক্ষ্য বাদ দি বৰ্তমানৰ ক্ষণিক সুখত ডুব যোৱাৰ অভ্যাস, যাক আত্ম-নিয়ন্ত্ৰণৰ আগতীয়া ব্যৱস্থাৰেহে জয় কৰিব পাৰি।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
