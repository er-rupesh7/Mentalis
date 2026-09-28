import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_SOMATIC_MARKER_HYPOTHESIS_EN: MindTopicDetail = {
  id: 'somatic_marker_hypothesis',
  categoryId: 'emotions',
  slug: 'somatic-marker-hypothesis',
  difficulty: 'advanced',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 6,
  viewCount: 3520,
  shareCount: 270,
  bookmarkCount: 570,
  title: "The Somatic Marker Hypothesis: How Bodily Signals Guide Reasoning",
  subtitle: "Antonio Damasio’s discovery that rational choices depend fundamentally on subconscious gut sensations.",
  shortDescription: "Neurobiological theory showing that bodily sensations associated with past outcomes unconsciously filter choices before conscious logic begins.",
  oneLineExplanation: "Your gut and heart acting as subconscious data summaries of all your past experiences.",

  summary30s: "Neuroscientist Antonio Damasio found that patients with damage to the ventromedial prefrontal cortex—who could not feel bodily emotional signals—could calculate probabilities endlessly but were completely paralyzed when making simple everyday choices.",
  coreConcept: "Somatic markers are emotional bioreactions (shifts in heart rate, gut contraction, skin conductance) linked to past experiences. When facing multiple complex choices, somatic markers rapidly mark certain options with an internal \"danger\" or \"reward\" tag, pruning the decision tree so rational logic is not overloaded.",
  summary60s: "We often think pure logic is best, but pure abstract logic without bodily feelings leads to decision paralysis. When you negotiate a deal or meet someone, your body reacts milliseconds before your conscious mind articulates reasons. Somatic markers are not mystical instincts; they are compressed neural memories stored across the insular cortex and ventromedial prefrontal cortex.",
  quickTakeaways: ["Emotions are not the enemy of reason; they are biological prerequisites for decisive action","Patients without emotional gut markers can analyze options but cannot choose between two pens","Somatic signals rapidly eliminate terrible options before working memory is overwhelmed","Effective decision making pairs bodily intuition with rigorous factual verification"],

  whyItHappens: "Working memory can only hold 4–7 bits of data; without rapid bodily value-tagging, evaluating complex outcomes would crash mental bandwidth.",
  evolutionaryMechanism: "Fast assessment of habitat danger or social deceit required immediate visceral alerts rather than mathematical probability calculation.",

  howItWorks: "Scenario encountered -> Brain retrieves past emotional associations -> Autonomic signals alter heart rate and gut tension -> Sensation reported to insula -> Consciousness feels a \"gut feeling\" -> Logic confirms or refutes.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Analytical Paralysis vs. Somatic Pruning",
    description: "How bodily signals make complex decision making cognitively manageable.",
    analogySideA: {
      label: "Pure Detached Logic (Paralysis)",
      detail: "Endlessly calculating 142 probabilities for a minor choice, trapped in infinite analysis.",
    },
    analogySideB: {
      label: "Somatic Pruned Choice (Effective)",
      detail: "Gut feeling instantly cuts 140 weak options, letting focused logic deeply evaluate the top 2.",
    },
  },

  researchSummary: "Damasio (1994, Descartes’ Error) and Bechara et al. (1997, Science) used the Iowa Gambling Task to prove normal subjects register skin conductance sweat responses to risky decks long before conscious awareness.",
  references: [
    {
      id: 'ref_somatic_marker_hypothesis_01',
      title: "The Somatic Marker Hypothesis: A Neural Theory of Decision Making",
      citation: "Damasio, A. R. (1996). Philosophical Transactions of the Royal Society of London. Series B: Biological Sciences, 351(1346), 1413–1420.",
      authors: "Damasio, A. R. & Bechara, A.",
      publicationYear: 1996,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1098/rstb.1996.0125",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_somatic_marker_hypothesis_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Suspicious Warehouse Lease in Bhiwandi",
      narrativeContext: "Vikram was offered an unusually cheap warehouse rental near Mumbai. On paper, the title was pristine. However, during the walkthrough, Vikram experienced persistent nausea and an unexplained heaviness in his chest, despite the landlord’s smooth charm.",
      biasInAction: "Vikram’s somatic markers detected subtle micro-inconsistencies (evasive eye contact, freshly painted water damage) before his conscious mind could document them.",
      optimalResponse: "Do not dismiss the bodily discomfort as superstition. Use it as an investigative prompt: hire a structural engineer and conduct a municipal audit, which revealed pending demolition.",
      reflectionPrompt: "Have you ever had a strong physiological gut feeling about a deal or person that proved completely accurate weeks later?",
    },
  ],

  examples: [
    {
      id: 'ex_somatic_marker_hypothesis_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Suspicious Warehouse Lease in Bhiwandi",
      description: "Vikram was offered an unusually cheap warehouse rental near Mumbai. On paper, the title was pristine. However, during the walkthrough, Vikram experien...",
      takeaway: "Emotions are not the enemy of reason; they are biological prerequisites for decisive action",
    },
  ],

  howToRecognize: "Visceral bodily sensations (tight throat, stomach knot, sudden calm) emerging before logical pros-and-cons lists.",
  whereYouEncounterIt: "High-stakes investments, partnership agreements, ethical dilemmas, and medical diagnoses.",
  commonMisconceptions: "Myth: \"Gut feeling is 100% infallible intuition.\" Fact: Somatic markers are based on past training; if you are in a brand new domain, your gut can be completely wrong.",
  limitationsAndControversies: "In novel environments where you lack domain expertise (e.g. quantum physics or crypto trading), somatic markers reflect random anxiety rather than wise intuition.",

  howToRespond: "Treat somatic markers as internal smoke alarms: let them flag concerns, but demand documented evidence before making the final decision.",
  psychologicalDefenses: [{"title":"The Interoceptive Scan","instruction":"Before signing or agreeing, pause and scan your stomach and chest for tension or constriction."},{"title":"Intuition-Then-Audit Protocol","instruction":"Never execute purely on gut alone; treat a gut feeling as a warrant to conduct deeper factual due diligence."}],

  practiceQuestions: [
    {
      id: 'pq_somatic_marker_hypothesis_01',
      difficulty: 'advanced',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A senior investor feels a sharp, unexplained stomach tightness during an otherwise flawless financial presentation. What should they do?",
      scenarioText: "The spreadsheets look mathematically sound, but an internal visceral unease persists throughout the founder’s speech.",
      explanation: "Somatic markers synthesize micro-cues faster than conscious logic. The investor should use the gut signal to investigate unstated assumptions without making rash decisions.",
      antidoteAdvice: "Leverage the bodily alert to ask forensic questions rather than dismissing the feeling or accepting the deal blindly.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Dismiss the feeling as silly irrational anxiety and wire the funds immediately.",
          text: "Dismiss the feeling as silly irrational anxiety and wire the funds immediately.",
          feedbackText: "Incorrect. Emotional numbness ignores valuable subconscious pattern recognition.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Treat the visceral sensation as a prompt to conduct deeper forensic audits into hidden liabilities.",
          text: "Treat the visceral sensation as a prompt to conduct deeper forensic audits into hidden liabilities.",
          feedbackText: "Correct! Somatic markers should guide deeper rational investigation.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Accuse the founder of fraud instantly based solely on the stomach knot.",
          text: "Accuse the founder of fraud instantly based solely on the stomach knot.",
          feedbackText: "Incorrect. Bodily signals are alerts, not legal proof.",
        }
      ],
    },
  ],

  reflectionPrompt: "In your career, have you made better choices by ignoring bodily signals or by using them to guide your research?",
  tags: ['Mentalab Mind', 'emotions'],
  relatedTopics: [],
  seoTitle: `${"The Somatic Marker Hypothesis: How Bodily Signals Guide Reasoning"} | Mentalab Mind`,
  seoDescription: "Neurobiological theory showing that bodily sensations associated with past outcomes unconsciously filter choices before conscious logic begins.",
  canonicalUrl: '/mind/emotions/somatic-marker-hypothesis',
  ogImageUrl: '/images/mind/somatic-marker-hypothesis.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "We often think pure logic is best, but pure abstract logic without bodily feelings leads to decision paralysis. When you negotiate a deal or meet someone, your body reacts milliseconds before your conscious mind articulates reasons. Somatic markers are not mystical instincts; they are compressed neural memories stored across the insular cortex and ventromedial prefrontal cortex.",
};

export const TOPIC_SOMATIC_MARKER_HYPOTHESIS_HINGLISH: MindTopicDetail = {
  ...TOPIC_SOMATIC_MARKER_HYPOTHESIS_EN,
  title: "Somatic Marker Hypothesis: Gut Feeling Aur Dimaag Ka Rishta",
  subtitle: "Kyu hamara pet aur dil kisi faisle se pehle hi signal de dete hain ki kuch gadbad hai.",
  shortDescription: "Antonio Damasio ki scientific research: sharir ki physical sensations decisions lene me dimaag ki madad karti hain.",
  oneLineExplanation: "Hamari gut feeling hamare dimaag ka compressed past experience hoti hai.",
  summary30s: "Neuroscientist Antonio Damasio ne dikhaya ki jinke dimaag ka emotional center damage ho jata hai, wo pure logical hone ke bawajood chote chote decisions me ghanto atak jate hain. Gut feeling options ko filter karne ke liye zaroori hai.",
  coreConcept: "Somatic markers purane tajurbon ke physical signals hote hain (pet me ajeeb lagna, dil ki dhadkan tezi hona). Jab hum naye faisle lete hain, to hamara sharir pehle hi warning de deta hai.",
  summary60s: "Hume lagta hai ki best decision sirf thandi logic se hota hai. Lekin bina bodily feelings ke dimaag calculation paralysis me fas jata hai. Gut feeling koi jaadu nahi hai, balki past experience ka subconscious data backup hai.",
  quickTakeaways: ["Gut feeling magic nahi, balki past data ka subconscious summary hai","Bina emotion ke insaan super-smart nahi, balki faisla lene me bekaar ho jata hai","Sharir ke physical signals ko ignore mat karo, unhe deeper investigation ka signal mano","Domain me agar experience naya hai to gut feeling galat bhi ho sakti hai"],
  howItWorks: "Situation aati hai -> Dimaag purane tajurbe match karta hai -> Sharir me physical sensation bhejta hai -> Hume lagta hai \"kuch galat hai\" -> Hum logic se cross-check karte hain.",
  howToRespond: "Gut feeling ko smoke alarm samjhein: jab pet me ajeeb lage, to deal cancel mat karo, balki paperwork aur background check double karo.",
  practiceQuestions: [
    {
      ...TOPIC_SOMATIC_MARKER_HYPOTHESIS_EN.practiceQuestions[0],
      prompt: "Ek naye business partner ke sath contract sign karte waqt aapke pet me ajeeb si ghabrahat ho rahi hai, jabki paper theek lag rahe hain. Kya karein?",
      explanation: "Sharir ka signal alert karta hai ki shayad subconscious mind ne kuch notice kiya hai. Use investigate karne ka mauka samjhein.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Ghabrahat ko ignore karein aur bina dekhe sign kar dein.",
          text: "Ghabrahat ko ignore karein aur bina dekhe sign kar dein.",
          feedbackText: "Galat. Subconscious warning ko ignore mat karein.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Is signal ko warning maan kar lawyer aur references se double verification karein.",
          text: "Is signal ko warning maan kar lawyer aur references se double verification karein.",
          feedbackText: "Sahi! Gut feeling ko facts se verify karna hi best decision banata hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Bina kisi proof ke partner par fraud ka case kar dein.",
          text: "Bina kisi proof ke partner par fraud ka case kar dein.",
          feedbackText: "Galat. Gut feeling alert hai, court ka faisla nahi.",
        }
      ],
    },
  ],
  seoTitle: `${"Somatic Marker Hypothesis: Gut Feeling Aur Dimaag Ka Rishta"} | Mentalab Mind`,
  seoDescription: "Antonio Damasio ki scientific research: sharir ki physical sensations decisions lene me dimaag ki madad karti hain.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_SOMATIC_MARKER_HYPOTHESIS_EN,
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

export const TOPIC_SOMATIC_MARKER_HYPOTHESIS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SOMATIC_MARKER_HYPOTHESIS_EN,
  hinglish: TOPIC_SOMATIC_MARKER_HYPOTHESIS_HINGLISH,
  hi: createLocalizedRecord('hi', "शारीरिक संकेत परिकल्पना (Somatic Marker)", "शारीरिक अनुभूतियां और अंतर्ज्ञान कैसे जटिल निर्णयों को सरल और सटीक बनाने में मस्तिष्क का मार्गदर्शन करते हैं।", ["शारीरिक संवेदनाएं अतीत के अनुभवों का संक्षिप्त रूप हैं","भावनाओं के बिना निर्णय लेना असंभव हो जाता है","आंतरिक अनुभूतियों को तार्किक जांच से जोड़ें"]),
  gu: createLocalizedRecord('gu', "સોમેટિક માર્કર પૂર્વધારણા", "શરીરના સંકેતો અને આંતરિક લાગણીઓ નિર્ણય લેવાની ક્ષમતાને માર્ગદર્શન આપે છે.", ["શરીરના સંકેતો સમજો","સત્યની તપાસ કરો","સંતુલિત નિર્ણય લો"]),
  mr: createLocalizedRecord('mr', "सोमॅटिक मार्कर सिद्धांत", "शारीरिक संवेदना आणि अंतःप्रेरणा कशा प्रकारे जटिल निर्णयांमध्ये मेंदूला मदत करतात.", ["शारीरिक संकेत ओळखा","तथ्ये पडताळून पहा","योग्य निर्णय घ्या"]),
  te: createLocalizedRecord('te', "సోమాటిక్ మార్కర్ సిద్ధాంతం", "శరీర సంకేతాలు మరియు సహజ అంతర్దృష్టి సరైన నిర్ణయాలు తీసుకోవడంలో ఎలా సహాయపడతాయి.", ["అంతర్దృష్టిని విశ్లేషించండి","ఆధారాలు సరిచూడండి","స్పష్టమైన నిర్ణయం తీసుకోండి"]),
  ta: createLocalizedRecord('ta', "உடல் உணர்வு கோட்பாடு (Somatic Marker)", "உடலின் உள்ளுணர்வு சமிக்ஞைகள் எவ்வாறு பகுத்தறிவு முடிவுகளை வழிநடத்துகின்றன.", ["உடல் சமிக்ஞைகளை கவனியுங்கள்","உண்மைகளை ஆராயுங்கள்","சரியான முடிவெடுங்கள்"]),
  kn: createLocalizedRecord('kn', "ಸೊಮ್ಯಾಟಿಕ್ ಮಾರ್ಕರ್ ಸಿದ್ಧಾಂತ", "ದೇಹದ ಆಂತರಿಕ ಸಂವೇದನೆಗಳು ನಿರ್ಧಾರ ಕೈಗೊಳ್ಳುವಲ್ಲಿ ಮೆದುಳಿಗೆ ಹೇಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತವೆ.", ["ಆಂತರಿಕ ಸಂವೇದನೆಗಳನ್ನು ಗಮನಿಸಿ","ದಾಖಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ","ಬುದ್ಧಿವಂತ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಿ"]),
  ml: createLocalizedRecord('ml', "സൊമാറ്റിക് മാർക്കർ സിദ്ധാന്തം", "ശരീരത്തിൻ്റെ ആന്തരിക പ്രതികരണങ്ങൾ ശരിയായ തീരുമാനങ്ങളിലേക്ക് നയിക്കുന്നു.", ["ഉള്ളുണർവുകൾ തിരിച്ചറിയുക","വസ്തുതകൾ പരിശോധിക്കുക","യുക്തിയോടെ തീരുമാനിക്കുക"]),
  bn: createLocalizedRecord('bn', "সোমাটিক মার্কার হাইপোথিসিস", "শারীরিক অনুভূতি এবং অবচেতন সংকেত কীভাবে সঠিক সিদ্ধান্ত নিতে সাহায্য করে।", ["শারীরিক অনুভূতি বুঝুন","তথ্য যাচাই করুন","সঠিক সিদ্ধান্ত নিন"]),
  pa: createLocalizedRecord('pa', "ਸੋਮੈਟਿਕ ਮਾਰਕਰ ਸਿਧਾਂਤ", "ਸਰੀਰਕ ਸੰਕੇਤ ਅਤੇ ਅੰਦਰੂਨੀ ਆਵਾਜ਼ ਫੈਸਲਾ ਲੈਣ ਵਿੱਚ ਦਿਮਾਗ ਨੂੰ ਕਿਵੇਂ ਰਾਹ ਦਿਖਾਉਂਦੇ ਹਨ।", ["ਅੰਦਰੂਨੀ ਆਵਾਜ਼ ਸੁਣੋ","ਤੱਥਾਂ ਦੀ ਜਾਂਚ ਕਰੋ","ਸਹੀ ਫੈਸਲਾ ਲਓ"]),
  ur: createLocalizedRecord('ur', "سوماتی نشاناتی مفروضہ (Somatic Marker)", "جسمانی کیفیات اور دل کی دھڑکن کس طرح عقلی فیصلوں کی رہنمائی کرتی ہے۔", ["جسمانی اشاروں کو سمجھیں","حقائق کی تصدیق کریں","متوازن فیصلہ کریں"]),
  or: createLocalizedRecord('or', "ସୋମାଟିକ୍ ମାର୍କର୍ ଅନୁମାନ", "ଶରୀରର ଆଭ୍ୟନ୍ତରୀଣ ସଙ୍କେତ କିପରି ନିଷ୍ପତ୍ତି ନେବାରେ ସାହାଯ୍ୟ କରେ।", ["ଅନ୍ତର୍ନିହିତ ସଙ୍କେତ ବୁଝନ୍ତୁ","ତଥ୍ୟ ପ୍ରମାଣ ଦେଖନ୍ତୁ","ଠିକ୍ ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"]),
  as: createLocalizedRecord('as', "সোমেটিক মাৰ্কাৰ অনুমান", "শাৰীৰিক সংবেদনাই জটিল সিদ্ধান্ত গ্ৰহণত কেনেকৈ মগজুক বাট দেখুৱায়।", ["শাৰীৰিক সংকেত বুজি লওক","তথ্য পৰীক্ষা কৰক","সচেতন সিদ্ধান্ত লওক"]),
};
