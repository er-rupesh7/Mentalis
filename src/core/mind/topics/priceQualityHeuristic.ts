import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_PRICE_QUALITY_HEURISTIC_EN: MindTopicDetail = {
  id: 'price_quality_heuristic',
  categoryId: 'consumer_advertising',
  slug: 'price-quality-heuristic',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 6,
  viewCount: 3520,
  shareCount: 270,
  bookmarkCount: 570,
  title: "The Price-Quality Heuristic: The Placebo Effect of Pricing",
  subtitle: "Baba Shiv’s Stanford experiment on why expensive painkillers literally work better than discounted ones.",
  shortDescription: "A mental shortcut where consumers infer the superior quality, effectiveness, or craftsmanship of a product solely based on its higher monetary price tag.",
  oneLineExplanation: "Assuming that if it is expensive, it must be better—and your brain actually making it so.",

  summary30s: "Studied by Rao, Monroe, and experimentally proven by Stanford professor Baba Shiv, the Price-Quality Heuristic is not just a cognitive bias; it triggers genuine biological placebos. In Shiv’s famous study, identical energy drinks and painkillers provided measurably superior cognitive focus and pain relief when participants were told they cost full price versus discounted price.",
  coreConcept: "When consumers face information asymmetry (they cannot personally verify wine chemistry, watch mechanics, or doctor expertise), price becomes the primary proxy for unobservable quality. The higher expectation physically alters sensory experience via dopamine activation in the orbitofrontal cortex: people genuinely taste expensive wine as richer and sweeter.",
  summary60s: "Luxury conglomerates (apparel, skincare, luxury dining) exploit this heuristic ruthlessly. Often, cutting a price reduces sales because consumers suspect the item is defective, while tripling the price dramatically boosts desirability. This is how generic chemical compounds (retinol, hyaluronic acid) are packaged in fancy bottles and sold for 50x markup.",
  quickTakeaways: ["Price alters physical sensory perception through prefrontal expectation placebo effects","Identical medications relieve more physical pain when labeled with expensive price tags","Marketers raise prices intentionally to create an aura of exclusivity and efficacy","The antidote is blind testing and inspecting raw active ingredient specifications"],

  whyItHappens: "Information asymmetry and risk aversion: verifying technical quality requires domain expertise; price serves as a convenient heuristic summary of market value.",
  evolutionaryMechanism: "In ancestral resource trading, high-cost items (obsidian blades, rare shells) genuinely required more labor and dangerous quarrying.",

  howItWorks: "High price seen -> Prefrontal expectation primed -> Dopamine released in reward anticipation -> Sensory experience altered -> Subjective quality confirmed -> Consumer justifies the premium.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Expectation Placebo vs. Chemical Reality",
    description: "How price tags modulate sensory and neurobiological responses.",
    analogySideA: {
      label: "Identical Energy Drink @ Discount (₹20)",
      detail: "Solved 6.8 word puzzles on average; reported feeling slightly energized.",
    },
    analogySideB: {
      label: "Identical Energy Drink @ Full Price (₹100)",
      detail: "Solved 9.9 word puzzles on average (30% increase!) purely driven by the price expectation placebo.",
    },
  },

  researchSummary: "Shiv, Carmon & Ariely (2005, Journal of Marketing Research) and Plassmann et al. (2008, PNAS) proved via fMRI that increasing the stated price of wine directly increases blood oxygenation in the medial orbitofrontal cortex during consumption.",
  references: [
    {
      id: 'ref_price_quality_heuristic_01',
      title: "Placebo Effects of Marketing Actions: Consumers May Get What They Pay For",
      citation: "Shiv, B., et al. (2005). Journal of Marketing Research, 42(4), 383–393.",
      authors: "Shiv, B., Carmon, Z., & Ariely, D.",
      publicationYear: 2005,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1509/jmkr.2005.42.4.383",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_price_quality_heuristic_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The ₹8,000 Ayurvedic Face Serum in South Bombay",
      narrativeContext: "Ananya bought an organic face oil in South Mumbai for ₹8,500, claiming it transformed her skin texture within 3 days. A cosmetic chemist friend analyzed the bottle: the formulation was 98% cold-pressed sesame oil and rose water, identical to a ₹150 bottle from the local chemist.",
      biasInAction: "Ananya experienced the price-quality placebo: the exorbitant price triggered psychological commitment, careful application, and expectation confirmation.",
      optimalResponse: "Ignore marketing packaging; turn the box around and read the active ingredients (INCI list) and their percentage concentrations.",
      reflectionPrompt: "Have you ever enjoyed a restaurant meal or bottle of wine noticeably more simply after discovering how outrageously expensive the bill was?",
    },
  ],

  examples: [
    {
      id: 'ex_price_quality_heuristic_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The ₹8,000 Ayurvedic Face Serum in South Bombay",
      description: "Ananya bought an organic face oil in South Mumbai for ₹8,500, claiming it transformed her skin texture within 3 days. A cosmetic chemist friend analyz...",
      takeaway: "Price alters physical sensory perception through prefrontal expectation placebo effects",
    },
  ],

  howToRecognize: "Assuming a service, consultant, or product is elite solely because their hourly rate or sticker price is exorbitant.",
  whereYouEncounterIt: "Cosmetics, designer fashion, boutique medical clinics, consulting firms, and fine dining.",
  commonMisconceptions: "Myth: \"Expensive things are always better made.\" Fact: While basic minimum quality requires investment, beyond a baseline threshold, price reflects brand status markup, not manufacturing cost.",
  limitationsAndControversies: "In complex engineered precision goods (e.g. Japanese kitchen knives, aircraft engines), higher prices frequently reflect genuinely superior alloys and tolerances.",

  howToRespond: "Conduct Blind Audits: whenever possible, evaluate products without knowing their brand or price tag, and compare generic active ingredients directly.",
  psychologicalDefenses: [{"title":"The Ingredient Specification Audit","instruction":"Never buy cosmetics, supplements, or generic electronics without verifying the raw chemical composition and technical specs against budget alternatives."},{"title":"Blind Taste/Trial Protocol","instruction":"Have a friend pour two different brands into unmarked cups before deciding which one tastes or works better."}],

  practiceQuestions: [
    {
      id: 'pq_price_quality_heuristic_01',
      difficulty: 'beginner',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "In a double-blind scientific trial, two groups are given identical placebo sugar pills for a headache. Group A is told the pill costs ₹200; Group B is told it costs ₹5. What are the clinical results?",
      scenarioText: "Neither pill contains any active pharmaceutical ingredient.",
      explanation: "Due to the price-quality heuristic and expectation placebo effect, Group A experiences statistically significant higher pain relief despite chemical equivalence.",
      antidoteAdvice: "Evaluate generic medications by their active pharmaceutical ingredient (API), not their commercial brand price.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Both groups report the exact same pain relief because sugar pills have zero chemical efficacy.",
          text: "Both groups report the exact same pain relief because sugar pills have zero chemical efficacy.",
          feedbackText: "Incorrect. Psychological expectations actively trigger endogenous endorphin release.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Group A (₹200 pill) reports significantly greater headache reduction than Group B.",
          text: "Group A (₹200 pill) reports significantly greater headache reduction than Group B.",
          feedbackText: "Correct! Higher price primes a stronger neurological placebo response.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Group B reports better results because they feel relief from saving money.",
          text: "Group B reports better results because they feel relief from saving money.",
          feedbackText: "Incorrect. Cheap pricing primes suspicion of poor efficacy.",
        }
      ],
    },
  ],

  reflectionPrompt: "What product in your life are you currently overpaying for purely because a cheaper alternative feels \"inferior\" without any factual proof?",
  tags: ['Mentalab Mind', 'consumer_advertising'],
  relatedTopics: [],
  seoTitle: `${"The Price-Quality Heuristic: The Placebo Effect of Pricing"} | Mentalab Mind`,
  seoDescription: "A mental shortcut where consumers infer the superior quality, effectiveness, or craftsmanship of a product solely based on its higher monetary price tag.",
  canonicalUrl: '/mind/consumer-advertising/price-quality-heuristic',
  ogImageUrl: '/images/mind/price-quality-heuristic.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Luxury conglomerates (apparel, skincare, luxury dining) exploit this heuristic ruthlessly. Often, cutting a price reduces sales because consumers suspect the item is defective, while tripling the price dramatically boosts desirability. This is how generic chemical compounds (retinol, hyaluronic acid) are packaged in fancy bottles and sold for 50x markup.",
};

export const TOPIC_PRICE_QUALITY_HEURISTIC_HINGLISH: MindTopicDetail = {
  ...TOPIC_PRICE_QUALITY_HEURISTIC_EN,
  title: "Price-Quality Heuristic: Mehenga Hai To Achha Hi Hoga",
  subtitle: "Kyu ₹8,000 ka cream aur ₹500 ka dard ka dawai hume saste se zyada asardaar lagta hai.",
  shortDescription: "Baba Shiv ki Stanford research: Zyada price tag dekh kar dimaag cheez ko sach me behtar feel karwane lagta hai (Placebo Effect).",
  oneLineExplanation: "Dimaag ka dhokha: Daam dekh kar quality ka andaza lagana.",
  summary30s: "Stanford ke professor Baba Shiv ne prove kiya ki jab logo ko ek hi painkiller di gayi—ek ko bola gaya ₹200 ki hai aur doosre ko bola gaya ₹5 ki hai—to ₹200 wali goli ne sir-dard sach me 50% zyada gayab kar diya! Dimaag mehnge daam par believe kar leta hai.",
  coreConcept: "Jab hume kisi cheez ka technical knowledge nahi hota (jaise skin care, wine, ya luxury ghadi), to hamara dimaag price ko hi quality ka saboot maan leta hai. Is chakkar me brands wahi sasta tel sundar bottle me daal kar 50 guna munafa kamate hain.",
  summary60s: "Companies janti hain ki agar wo price kam karengi to log sochenge \"kuch kharaab hoga\". Isliye wo jaan-boojh kar daam double kar deti hain taaki logo ko lage ki product premium hai. Dimaag ke fMRI scan me dikhta hai ki mehngi cheez consume karte waqt dimaag sach me zyada pleasure signals generate karta hai.",
  quickTakeaways: ["Mehnga price tag dimaag ke andar placebo effect trigger karta hai","Same dawai zyada asar karti hai agar patient ko lage ki wo bohot mehngi hai","Brands daam badha kar exclusivity aur premium image create karte hain","Packaging par mat jao, peeche chemical ingredients aur technical specs padho"],
  howItWorks: "Bada price tag dekha -> Dimaag ne bola \"Yeh to world-class hai\" -> Dopamine aur expectation badha -> Asli anubhav me sach me maza aaya -> Mehnga bill justify kiya.",
  howToRespond: "Ingredients check karein: Bottle ke peeche composition padho. 90% mehnge cosmetics aur generic medicines me wahi sasta formula hota hai jo generic brand me milta hai.",
  practiceQuestions: [
    {
      ...TOPIC_PRICE_QUALITY_HEURISTIC_EN.practiceQuestions[0],
      prompt: "Do identical energy drinks hain. Ek par ₹20 ka tag hai aur doosre par ₹150 ka. Research ke mutabiq log kaisa perform karenge?",
      explanation: "₹150 wale drink ka price expectation dimaag me placebo effect create karta hai jisse unka focus sach me badhta hai.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Dono ka performance bilkul barabar hoga kyuki drink andar se same hai.",
          text: "Dono ka performance bilkul barabar hoga kyuki drink andar se same hai.",
          feedbackText: "Galat. Human brain expectation se perform karta hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "₹150 wala drink peene wale puzzles me behtar perform karenge placebo effect ke chalte.",
          text: "₹150 wala drink peene wale puzzles me behtar perform karenge placebo effect ke chalte.",
          feedbackText: "Sahi! Baba Shiv ki Stanford study ne yahi prove kiya tha.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "₹20 wala behtar karega kyuki usme guilt kam hota hai.",
          text: "₹20 wala behtar karega kyuki usme guilt kam hota hai.",
          feedbackText: "Galat. Sasti cheez par low efficacy ka shak hota hai.",
        }
      ],
    },
  ],
  seoTitle: `${"Price-Quality Heuristic: Mehenga Hai To Achha Hi Hoga"} | Mentalab Mind`,
  seoDescription: "Baba Shiv ki Stanford research: Zyada price tag dekh kar dimaag cheez ko sach me behtar feel karwane lagta hai (Placebo Effect).",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_PRICE_QUALITY_HEURISTIC_EN,
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

export const TOPIC_PRICE_QUALITY_HEURISTIC: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_PRICE_QUALITY_HEURISTIC_EN,
  hinglish: TOPIC_PRICE_QUALITY_HEURISTIC_HINGLISH,
  hi: createLocalizedRecord('hi', "मूल्य-गुणवत्ता स्वयंसिद्ध (Price-Quality Heuristic)", "उच्च मूल्य को सीधे तौर पर श्रेष्ठ गुणवत्ता या प्रभावशीलता का प्रमाण मान लेने की संज्ञानात्मक प्रवृत्ति और उसका प्लेसबो प्रभाव।", ["मूल्य प्रत्याशा मस्तिष्क में वास्तविक जैविक प्रभाव उत्पन्न करती है","महंगी वस्तुएं अधिक प्रभावशीलता का भ्रम पैदा करती हैं","मूल्य के बजाय अवयवों (Ingredients) की सत्यता जांचें"]),
  gu: createLocalizedRecord('gu', "કિંમત-ગુણવત્તા પૂર્વગ્રહ (Price-Quality Heuristic)", "વધુ કિંમત જોઈને ગુણવત્તા શ્રેષ્ઠ જ હશે તેવું માની લેવાની ગ્રાહકની માનસિકતા.", ["વધુ કિંમત ઉત્કૃષ્ટતાની ગેરંટી નથી","પ્લેસિબો અસરથી સાવચેત રહો","ઘટકો અને ગુણવત્તા તપાસો"]),
  mr: createLocalizedRecord('mr', "किंमत-गुणवत्ता गृहीतक (Price-Quality Heuristic)", "जास्त किंमत म्हणजे उच्च दर्जा असे गृहीत धरण्याची आणि त्यातून प्लेसिबो अनुभव घेण्याची मानवी प्रवृत्ती.", ["किमतीवरून दर्जा ठरवू नका","प्लेसिबो इफेक्ट ओळखा","घटकांची पडताळणी करा"]),
  te: createLocalizedRecord('te', "ధర-నాణ్యత సహజ జ్ఞానం (Price-Quality Heuristic)", "ఎక్కువ ధర ఉంటే నాణ్యత కూడా అత్యున్నతంగా ఉంటుందని భావించే మానసిక అలవాటు.", ["ధర నాణ్యతకు కొలమానం కాదు","ప్లేసిబో ప్రభావాన్ని గుర్తించండి","విషయ సూచికను పరిశీలించండి"]),
  ta: createLocalizedRecord('ta', "விலை-தரம் சார்ந்த உளவியல் (Price-Quality Heuristic)", "அதிக விலை கொண்ட பொருட்கள் தரமானதாக இருக்கும் என்று தானாகவே நம்பும் மனப்பான்மை.", ["அதிக விலை தரத்தின் அடையாளம் அல்ல","நம்பிக்கை மாயையை உணருங்கள்","உண்மையான மூலப்பொருட்களை சோதிக்கவும்"]),
  kn: createLocalizedRecord('kn', "ಬೆಲೆ-ಗುಣಮಟ್ಟದ ಮಾನಸಿಕ ಪಕ್ಷಪಾತ", "ಹೆಚ್ಚಿನ ಬೆಲೆಯನ್ನು ಕಂಡಾಗ ಅದು ಉತ್ತಮ ಗುಣಮಟ್ಟದ್ದೇ ಎಂದು ನಂಬುವ ಸಾಮಾನ್ಯ ಗ್ರಾಹಕ ಪ್ರವೃತ್ತಿ.", ["ಬೆಲೆಯೇ ಗುಣಮಟ್ಟದ ಮಾನದಂಡವಲ್ಲ","ಪ್ಲೇಸಿಬೊ ಪರಿಣಾಮವನ್ನು ಅರಿಯಿರಿ","ಘಟಕಗಳನ್ನು ಪರಿಶೀಲಿಸಿ"]),
  ml: createLocalizedRecord('ml', "വില-ഗുണനിലവാര മിഥ്യാധാരണ (Price-Quality Heuristic)", "കൂടിയ വില ഉയർന്ന ഗുണനിലവാരത്തിന്റെ തെളിവാണെന്ന് സ്വയം വിശ്വസിക്കുന്ന ഉപഭോക്തൃ സ്വഭാവം.", ["വില ഗുണനിലവാരത്തിന്റെ മാനദണ്ഡമല്ല","പ്ലേസിബോ പ്രഭാവം തിരിച്ചറിയുക","ഉള്ളടക്കം പരിശോധിച്ച് വാങ്ങുക"]),
  bn: createLocalizedRecord('bn', "মূল্য-গুণমান মানসিক পক্ষপাত (Price-Quality Heuristic)", "উচ্চ মূল্য দেখে কোনো পণ্যের গুণমান স্বয়ংক্রিয়ভাবে ভালো বলে ধরে নেওয়ার মনস্তাত্ত্বিক ভ্রান্তি।", ["অধিক মূল্য মানেই ভালো গুণমান নয়","প্লাসিবো প্রভাব সম্পর্কে সচেতন থাকুন","উপাদান যাচাই করে কিনুন"]),
  pa: createLocalizedRecord('pa', "ਕੀਮਤ-ਗੁਣਵੱਤਾ ਦਾ ਭੁਲੇਖਾ (Price-Quality Heuristic)", "ਮਹਿੰਗੀ ਕੀਮਤ ਦੇਖ ਕੇ ਕਿਸੇ ਚੀਜ਼ ਨੂੰ ਆਪਣੇ-ਆਪ ਵਧੀਆ ਮੰਨ ਲੈਣ ਦੀ ਮਾਨਸਿਕ ਆਦਤ।", ["ਮਹਿੰਗੀ ਚੀਜ਼ ਹਮੇਸ਼ਾ ਚੰਗੀ ਨਹੀਂ ਹੁੰਦੀ","ਪਲੇਸੀਬੋ ਪ੍ਰਭਾਵ ਨੂੰ ਸਮਝੋ","ਅਸਲ ਗੁਣਾਂ ਦੀ ਜਾਂਚ ਕਰੋ"]),
  ur: createLocalizedRecord('ur', "قیمت اور معیار کا مغالطہ (Price-Quality Heuristic)", "زیادہ قیمت دیکھ کر کسی چیز کو لازمی طور پر اعلیٰ معیار کا سمجھنے کا نفسیاتی وہم۔", ["زیادہ قیمت اچھے معیار کی ضامن نہیں","پلاسیبو اثر کو سمجھیں","اجزاء کی جانچ کر کے خریدیں"]),
  or: createLocalizedRecord('or', "ମୂଲ୍ୟ-ଗୁଣବତ୍ତା ଭ୍ରାନ୍ତି (Price-Quality Heuristic)", "ଅଧିକ ମୂଲ୍ୟ ଦେଖି କୌଣସି ଜିନିଷକୁ ଶ୍ରେଷ୍ଠ ବୋଲି ମାନିନେବାର ମନସ୍ତାତ୍ତ୍ୱିକ ପ୍ରବୃତ୍ତି।", ["ଅଧିକ ଦାମ୍ ଗୁଣବତ୍ତାର ପ୍ରମାଣ ନୁହେଁ","ପ୍ଲେସିବୋ ପ୍ରଭାବ ବୁଝନ୍ତୁ","ସାମଗ୍ରୀର ଉପାଦାନ ଦେଖନ୍ତୁ"]),
  as: createLocalizedRecord('as', "মূল্য-গুণগত মানসিক ধাৰণা (Price-Quality Heuristic)", "অধিক মূল্য দেখিলেই বস্তু এটা উন্নত মানৰ বুলি ধৰি লোৱাৰ মানৱীয় মানসিকতা।", ["বেছি দাম মানেই ভাল গুণ নহয়","প্লেচীব’ প্ৰভাৱৰ বিষয়ে জানক","উপাদান পৰীক্ষা কৰি লওক"]),
};
