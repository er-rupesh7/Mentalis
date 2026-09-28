import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_HEDONIC_TREADMILL_EN: MindTopicDetail = {
  id: 'hedonic_treadmill',
  categoryId: 'emotions',
  slug: 'hedonic-treadmill',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 7,
  viewCount: 3640,
  shareCount: 285,
  bookmarkCount: 595,
  title: "The Hedonic Treadmill: The Rapid Adaptation to Life Upgrades",
  subtitle: "Why luxury, promotions, and wealth spikes quickly become the new baseline of normal.",
  shortDescription: "The observed psychological tendency of humans to quickly return to a relatively stable level of happiness despite major positive or negative life events.",
  oneLineExplanation: "Running endlessly on the treadmill of desire, always ending up where you started.",

  summary30s: "First identified by Brickman and Campbell in 1971, the hedonic treadmill describes how humans rapidly habituate to material windfalls, salary hikes, and luxuries. Within months, what once felt extraordinary becomes the invisible default, leaving baseline happiness unchanged.",
  coreConcept: "Neural sensory adaptation applies directly to emotional rewards: neurons fire vigorously in response to novel positive stimuli, but reduce their firing rates as the stimulus persists. As expectations rise in tandem with accomplishments, happiness resets to the individual’s genetic and cognitive set point.",
  summary60s: "In a famous 1978 study comparing lottery winners and paraplegic accident survivors, Brickman found that after one year, both groups returned remarkably close to their pre-event happiness baselines. While life circumstances account for roughly 10% of subjective well-being, the treadmill tricks us into believing that the next milestone will permanently fix our dissatisfaction.",
  quickTakeaways: ["Material upgrades produce temporary dopamine spikes followed by permanent sensory adaptation","The \"arrival fallacy\" creates the false belief that hitting a future goal guarantees lasting joy","Experiences, deep social bonds, and autonomy resist hedonic adaptation far longer than possessions","Intentional gratitude and voluntary discomfort reset hedonic tolerance levels"],

  whyItHappens: "Evolutionary survival required constant striving; animals that stayed permanently satisfied after finding one fruit tree lacked motivation to seek future sustenance.",
  evolutionaryMechanism: "A perpetually satisfied human would not prepare for winter or defend against competitors.",

  howItWorks: "Major goal achieved -> Massive dopamine high -> Sensory habituation occurs -> Expectations recalibrate upwards -> New state feels ordinary -> Urge for next achievement begins.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "The Hedonic Adaptation Reset Cycle",
    description: "How luxury upgrades become the invisible baseline over 90 days.",
    analogySideA: {
      label: "Perceived Future State",
      detail: "\"Once I buy this luxury apartment and car, I will never feel stressed or unhappy again.\"",
    },
    analogySideB: {
      label: "Actual Neurological Reality",
      detail: "Day 1: Ecstatic joy; Day 30: Pleasant satisfaction; Day 90: It is just where you sleep, stress returns.",
    },
  },

  researchSummary: "Brickman, Coates & Janoff-Bulman (1978) in JPSP tracked lottery winners and control groups, finding that lottery winners took no more pleasure in mundane everyday events than ordinary citizens.",
  references: [
    {
      id: 'ref_hedonic_treadmill_01',
      title: "Hedonic Relativism and Planning the Good Society",
      citation: "Brickman, P., & Campbell, D. T. (1971). Adaptation-level theory: A symposium, 287–305.",
      authors: "Brickman, P. & Campbell, D. T.",
      publicationYear: 1971,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1037/h0037340",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_hedonic_treadmill_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Bengaluru Tech Promotion Reset",
      narrativeContext: "Neha worked 70 hours a week for two years in Bengaluru to reach Senior Engineering Director, assuming a ₹60 LPA salary would erase all anxiety. Within three months of buying a luxury German sedan, the excitement evaporated and she was consumed by envy for peers making ₹1 Crore.",
      biasInAction: "Neha fell victim to the hedonic treadmill: her material baseline adapted instantly, resetting her dopamine threshold without changing her internal relationship to work.",
      optimalResponse: "Anchor satisfaction in intrinsic craft and meaningful connections, using intermittent digital sabbaths and voluntary frugality to preserve emotional appreciation.",
      reflectionPrompt: "Think of something you desperately wanted three years ago that you now own. How often do you actively feel intense joy about it today?",
    },
  ],

  examples: [
    {
      id: 'ex_hedonic_treadmill_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Bengaluru Tech Promotion Reset",
      description: "Neha worked 70 hours a week for two years in Bengaluru to reach Senior Engineering Director, assuming a ₹60 LPA salary would erase all anxiety. Within...",
      takeaway: "Material upgrades produce temporary dopamine spikes followed by permanent sensory adaptation",
    },
  ],

  howToRecognize: "The persistent thought: \"I will finally be happy once X happens,\" followed by hollow indifference weeks after achieving X.",
  whereYouEncounterIt: "Luxury consumer goods, salary increments, tech device upgrades, and social status competition.",
  commonMisconceptions: "Myth: \"The hedonic treadmill means you should never pursue goals.\" Fact: Goals provide purpose and direction; the trap is assuming they will permanently solve your internal state.",
  limitationsAndControversies: "Chronic severe stressors (chronic pain, severe poverty, toxic abuse) do not adapt fully and permanently lower baseline well-being.",

  howToRespond: "Practice Voluntary Hedonic Resetting: take periodic cold showers, fast, camping trips, or gratitude journaling to recalibrate the brain’s dopamine sensitivity.",
  psychologicalDefenses: [{"title":"The 30-Day Delay Rule","instruction":"Wait 30 days before buying any non-essential luxury item to allow the initial hedonic craving spike to cool."},{"title":"Negative Visualization (Stoic Practice)","instruction":"Spend 2 minutes imagining life without your current health, home, or loved ones to re-sensitize appreciation."}],

  practiceQuestions: [
    {
      id: 'pq_hedonic_treadmill_01',
      difficulty: 'beginner',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A professional receives a 40% salary hike and buys their dream sports car. According to hedonic adaptation research, what will their emotional state be 9 months later?",
      scenarioText: "They initially feel ecstatic and show the car to everyone in their social circle.",
      explanation: "Hedonic adaptation ensures that neurological habituation returns subjective well-being close to the baseline level within months.",
      antidoteAdvice: "Anticipate adaptation and invest in growth and relationships rather than endless material upgrades.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "They will maintain a permanently elevated 40% higher level of daily happiness.",
          text: "They will maintain a permanently elevated 40% higher level of daily happiness.",
          feedbackText: "Incorrect. Sensory adaptation prevents permanent joy spikes from material goods.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Their daily happiness will return close to baseline as the car becomes the new normal.",
          text: "Their daily happiness will return close to baseline as the car becomes the new normal.",
          feedbackText: "Correct! The hedonic treadmill resets the baseline of satisfaction.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "They will plunge into clinical depression solely due to having the car.",
          text: "They will plunge into clinical depression solely due to having the car.",
          feedbackText: "Incorrect. Baseline returns to normal, not pathological depression.",
        }
      ],
    },
  ],

  reflectionPrompt: "What daily habit or relationship in your life provides enduring satisfaction that never seems to fade with time?",
  tags: ['Mentalab Mind', 'emotions'],
  relatedTopics: [],
  seoTitle: `${"The Hedonic Treadmill: The Rapid Adaptation to Life Upgrades"} | Mentalab Mind`,
  seoDescription: "The observed psychological tendency of humans to quickly return to a relatively stable level of happiness despite major positive or negative life events.",
  canonicalUrl: '/mind/emotions/hedonic-treadmill',
  ogImageUrl: '/images/mind/hedonic-treadmill.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "In a famous 1978 study comparing lottery winners and paraplegic accident survivors, Brickman found that after one year, both groups returned remarkably close to their pre-event happiness baselines. While life circumstances account for roughly 10% of subjective well-being, the treadmill tricks us into believing that the next milestone will permanently fix our dissatisfaction.",
};

export const TOPIC_HEDONIC_TREADMILL_HINGLISH: MindTopicDetail = {
  ...TOPIC_HEDONIC_TREADMILL_EN,
  title: "The Hedonic Treadmill: Har Khushi Ka Normal Ban Jana",
  subtitle: "Kyu nayi gaadi, salary hike aur promotions ka maza kuch hi mahino me gayab ho jata hai.",
  shortDescription: "Dimaag ka psychological habituation mechanism jo har nayi luxury ko normal default bana deta hai.",
  oneLineExplanation: "Khushi ki treadmill par daudte rehna par hamesha wahi khade rehna.",
  summary30s: "Brickman aur Campbell ne prove kiya ki insaan kitni bhi badi lottery jeet le ya luxury khareed le, 6 mahine me dimaag use aam baat maan leta hai aur khushi wapas purane level par aa jati hai.",
  coreConcept: "Hamare neurons nayi cheezon par dopamine chhodte hain, lekin jab wahi cheez roz rehti hai to dimaag adapt kar leta hai. Expectations badh jati hain aur hum wapas nayi cheez ki talaash me lag jate hain.",
  summary60s: "Aapne jo phone ya bike 3 saal pehle mar-mar ke khareedi thi, aaj wo bas ek aam cheez lagti hai. Ise kehte hain Hedonic Treadmill. Agar hum is mechanism ko nahi samjhenge to hum hamesha consumerism ke jaal me phase rahenge.",
  quickTakeaways: ["Nayi cheezon ki khushi temporary hoti hai, dimaag use jaldi hi normal bana deta hai","\"Bas yeh mil jaye to sab theek ho jayega\" dimaag ka sabse bada dhokha hai (Arrival Fallacy)","Cheezon ke bajaye anubhav aur rishte lamba sukoon dete hain","Kabhi kabhi simplicity aur gratitude se baseline reset karna zaroori hai"],
  howItWorks: "Naya goal achieve hua -> Dopamine spike mila -> Kuch dino me adaptation ho gayi -> Nayi luxury normal lagne lagi -> Agle goal ke peeche bhaagna shuru.",
  howToRespond: "Negative visualization karein: Sochein agar yeh suvidhayein na hoti to kaisa hota. Aur voluntary fasting ya simplicity se dopamine baseline reset karein.",
  practiceQuestions: [
    {
      ...TOPIC_HEDONIC_TREADMILL_EN.practiceQuestions[0],
      prompt: "Ek dost ko badi company me 50% hike mila. 6 mahine baad uski mental state research ke mutabiq kaisi hogi?",
      explanation: "Hedonic adaptation ke chalte nayi salary jaldi hi standard kharche aur baseline me badal jati hai.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Wo hamesha ke liye 50% zyada khush rahega aur kabhi tension nahi lega.",
          text: "Wo hamesha ke liye 50% zyada khush rahega aur kabhi tension nahi lega.",
          feedbackText: "Galat. Dimaag jaldi adapt kar leta hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Uski khushi wapas purane level par aa jayegi aur naye kharche normal lagne lagenge.",
          text: "Uski khushi wapas purane level par aa jayegi aur naye kharche normal lagne lagenge.",
          feedbackText: "Sahi! Hedonic treadmill baseline ko reset kar deti hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Wo turant salary wapas karne ki koshish karega.",
          text: "Wo turant salary wapas karne ki koshish karega.",
          feedbackText: "Galat. Yeh unrealistic hai.",
        }
      ],
    },
  ],
  seoTitle: `${"The Hedonic Treadmill: Har Khushi Ka Normal Ban Jana"} | Mentalab Mind`,
  seoDescription: "Dimaag ka psychological habituation mechanism jo har nayi luxury ko normal default bana deta hai.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_HEDONIC_TREADMILL_EN,
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

export const TOPIC_HEDONIC_TREADMILL: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_HEDONIC_TREADMILL_EN,
  hinglish: TOPIC_HEDONIC_TREADMILL_HINGLISH,
  hi: createLocalizedRecord('hi', "सुखवादी ट्रेडमिल (Hedonic Treadmill)", "जीवन में बड़ी उपलब्धियों और भौतिक सुख-सुविधाओं के बाद भी मानव मस्तिष्क का अपनी सामान्य स्थिति में वापस लौट आना।", ["भौतिक सुखों का प्रभाव अल्पकालिक होता है","मस्तिष्क नई परिस्थितियों को शीघ्र सामान्य मान लेता है","संतुष्टि आंतरिक दृष्टिकोण से आती है"]),
  gu: createLocalizedRecord('gu', "હેડોનિક ટ્રેડમિલ (સુખનું અનુકૂલન)", "જીવનમાં ગમે તેટલી પ્રગતિ થાય તો પણ સુખનું સ્તર થોડા સમયમાં સામાન્ય થઈ જાય છે.", ["ભૌતિક સુખ ક્ષણિક છે","મન નવી સ્થિતિ સ્વીકારી લે છે","આંતરિક શાંતિ કેળવો"]),
  mr: createLocalizedRecord('mr', "सुखवादी ट्रेडमिल (Hedonic Treadmill)", "भौतिक प्रगती आणि सुखसोयींनंतरही मानवी आनंदाची पातळी पुन्हा पूर्ववत होण्याची मानसिक प्रवृत्ती.", ["भौतिक सुखाचे आकर्षण तात्पुरते असते","मेंदू नव्या सुखांना सरावतो","समाधान आंतरिक असते"]),
  te: createLocalizedRecord('te', "హెడోనిక్ ట్రెడ్‌మిల్ (సుఖానికి అలవాటుపడటం)", "ఎంత పెద్ద విజయం సాధించినా కొంత కాలానికి ఆనందం సాధారణ స్థాయికి చేరే సహజ మానసిక లక్షణం.", ["భౌతిక ఆనందం తాత్కాలికం","మనస్సు కొత్త స్థితిని స్వీకరిస్తుంది","శాశ్వత తృప్తి అంతర్గతం"]),
  ta: createLocalizedRecord('ta', "இன்ப நடைவண்டி கோட்பாடு (Hedonic Treadmill)", "எவ்வளவு பெரிய மகிழ்ச்சியான நிகழ்வு நடந்தாலும் மனித மனம் மீண்டும் இயல்பு நிலைக்குத் திரும்பும் உளவியல்.", ["பொருளாதார மகிழ்ச்சி தற்காலிகமானது","மனம் புதிய நிலைக்கு பழகிவிடும்","உள் அமைதியே நிலையானது"]),
  kn: createLocalizedRecord('kn', "ಹೆಡೋನಿಕ್ ಟ್ರೆಡ್‌ಮಿಲ್ (ಸುಖದ ಹೊಂದಾಣಿಕೆ)", "ಎಷ್ಟೇ ದೊಡ್ಡ ಯಶಸ್ಸು ಸಿಕ್ಕರೂ ಸಂತೋಷದ ಮಟ್ಟವು ಶೀಘ್ರದಲ್ಲೇ ಸಾಮಾನ್ಯ ಸ್ಥಿತಿಗೆ ಮರಳುವ ವಿದ್ಯಮಾನ.", ["ಭೌತಿಕ ಸಂತೋಷ ಕ್ಷಣಿಕ","ಮನಸ್ಸು ಸುಖಕ್ಕೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ","ಆಂತರಿಕ ತೃಪ್ತಿ ಮುಖ್ಯ"]),
  ml: createLocalizedRecord('ml', "ഹെഡോണിക് ട്രെഡ്മിൽ (സുഖാനുഭവത്തിന്റെ വേഗത)", "വലിയ നേട്ടങ്ങൾ കൈവരിച്ചാലും സന്തോഷം വേഗത്തിൽ സാധാരണ നിലയിലേക്ക് മടങ്ങുന്ന സ്വഭാവം.", ["ഭൗതിക സുഖം താൽക്കാലികമാണ്","മനസ്സ് പുതിയ സാഹചര്യങ്ങളുമായി പൊരുത്തപ്പെടുന്നു","ശാശ്വത സമാധാനം ഉള്ളിലാണ്"]),
  bn: createLocalizedRecord('bn', "হেডোনিক ট্রেডমিল (সুখের অভিযোজন)", "বড় প্রাপ্তি বা বিলাসিতার পরও মানুষের সুখের মাত্রা দ্রুত পূর্বের স্বাভাবিক অবস্থায় ফিরে আসার নিয়ম।", ["বস্তুগত সুখ ক্ষণস্থায়ী","মন নতুন অবস্থাকে স্বাভাবিক ধরে নেয়","অভ্যন্তরীণ তৃপ্তি স্থায়ী"]),
  pa: createLocalizedRecord('pa', "ਹੈਡੋਨਿਕ ਟ੍ਰੈਡਮਿਲ (ਸੁੱਖ ਦਾ ਆਦੀ ਹੋਣਾ)", "ਕੋਈ ਵੱਡੀ ਸਫਲਤਾ ਜਾਂ ਖੁਸ਼ੀ ਮਿਲਣ ਦੇ ਬਾਵਜੂਦ ਇਨਸਾਨੀ ਮਨ ਦਾ ਮੁੜ ਆਮ ਪੱਧਰ ਤੇ ਆ ਜਾਣ ਦੀ ਆਦਤ।", ["ਭੌਤਿਕ ਸੁੱਖ ਆਰਜ਼ੀ ਹੈ","ਦਿਮਾਗ ਨਵੀਂ ਹਾਲਤ ਦਾ ਆਦੀ ਹੋ ਜਾਂਦਾ ਹੈ","ਅਸਲ ਸੰਤੁਸ਼ਟੀ ਅੰਦਰੂਨੀ ਹੈ"]),
  ur: createLocalizedRecord('ur', "ہیڈونک ٹریڈمل (خوشی کا معمول بن جانا)", "کسی بڑی کامیابی یا آسائش کے بعد بھی انسانی خوشی کی سطح کا جلد ہی معمول پر لوٹ آنا۔", ["مادی خوشی عارضی ہوتی ہے","دماغ نئی آسائشوں کا عادی ہو جاتا ہے","حقیقی سکون اندرونی ہوتا ہے"]),
  or: createLocalizedRecord('or', "ହେଡୋନିକ୍ ଟ୍ରେଡ୍‌ମିଲ୍ (ସୁଖର ଅନୁକୂଳନ)", "ବଡ଼ ସଫଳତା ପରେ ମଧ୍ୟ ମଣିଷର ଆନନ୍ଦ ପୁନର୍ବାର ସ୍ୱାଭାବିକ ସ୍ତରକୁ ଫେରିଆସିବାର ନିୟମ।", ["ଭୌତିକ ସୁଖ କ୍ଷଣସ୍ଥାୟୀ","ମନ ନୂଆ ପରିସ୍ଥିତିକୁ ଗ୍ରହଣ କରେ","ଆତ୍ମସନ୍ତୋଷ ସବୁଠୁ ବଡ଼"]),
  as: createLocalizedRecord('as', "হেডনিক ট্রেডমিল (সুখৰ অভিযোজন)", "ডাঙৰ সফলতা লাভৰ পিছতো মানুহৰ আনন্দৰ মাত্ৰা পুনৰ স্বাভাৱিক অৱস্থালৈ ঘূৰি অহাৰ মানসিকতা।", ["বস্তুগত আনন্দ ক্ষণস্থায়ী","মগজুৱে নতুন অৱস্থাক স্বাভাৱিক বুলি গ্ৰহণ কৰে","আভ্যন্তৰীণ সন্তুষ্টিয়েই স্থায়ী"]),
};
