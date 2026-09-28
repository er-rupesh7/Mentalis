import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_BROADEN_AND_BUILD_EN: MindTopicDetail = {
  id: 'broaden_and_build',
  categoryId: 'emotions',
  slug: 'broaden-and-build-theory',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 8,
  viewCount: 3760,
  shareCount: 300,
  bookmarkCount: 620,
  title: "The Broaden-and-Build Theory: How Positive Emotions Expand Cognition",
  subtitle: "Barbara Fredrickson’s empirical model demonstrating that joy and curiosity expand peripheral vision and problem-solving bandwidth.",
  shortDescription: "Positive emotions broaden an individual’s momentary thought-action repertoire and build enduring personal resources including resilience and social capital.",
  oneLineExplanation: "Negative emotions narrow focus for survival; positive emotions broaden vision for growth.",

  summary30s: "While negative emotions (fear, anger) narrow our cognitive focus to fight or flee, psychologist Barbara Fredrickson proved that positive emotions (joy, curiosity, awe) physically widen visual attention and psychological flexibility, building lasting intellectual and social reserves.",
  coreConcept: "The evolutionary function of positive emotions is not just to feel good; it is to broaden our momentary cognitive horizon. Eye-tracking and fMRI studies prove that people in positive states perceive more peripheral information, generate creative divergent solutions, and build durable social alliances.",
  summary60s: "Under acute threat, tunnel vision saves your life. But in everyday life, chronic stress keeps you trapped in narrow, defensive problem-solving. Experiencing micro-moments of authentic positive emotion expands attention, allowing you to connect previously unrelated ideas and discover novel paths out of dilemmas.",
  quickTakeaways: ["Negative emotions narrow our perspective down to immediate survival threats","Positive emotions broaden visual field and creative cognitive associations","Broadened mindsets accumulate into enduring psychological resilience and social alliances","Cultivating micro-moments of genuine gratitude accelerates cognitive problem-solving"],

  whyItHappens: "Ancestors who explored, played, and bonded during safe times built alliances and tools that saved them when winter or drought struck.",
  evolutionaryMechanism: "Play in young mammals builds motor coordination and social coalitions vital for adult survival.",

  howItWorks: "Positive emotion felt -> Visual attention widens -> Cognitive associations expand -> Creative solutions discovered -> Enduring coping skills and social ties accumulated.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Tunnel Vision vs. Panoramic Cognitive Expansion",
    description: "How affective valence directly regulates attentional bandwidth.",
    analogySideA: {
      label: "Threat State (Narrow Focus)",
      detail: "Visual field shrinks, fixates on defects, rejects novel ideas, defaults to rigid defense.",
    },
    analogySideB: {
      label: "Positive State (Broadened Focus)",
      detail: "Notices peripheral opportunities, embraces creative divergence, forms cooperative networks.",
    },
  },

  researchSummary: "Fredrickson (2001, American Psychologist) and Fredrickson & Branigan (2005) experimentally proved that induced positive affect significantly increases visual attention scope and global cognitive processing.",
  references: [
    {
      id: 'ref_broaden_and_build_01',
      title: "The Role of Positive Emotions in Positive Psychology",
      citation: "Fredrickson, B. L. (2001). American Psychologist, 56(3), 218–226.",
      authors: "Fredrickson, B. L.",
      publicationYear: 2001,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1037/0003-066X.56.3.218",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_broaden_and_build_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Stuck Product Brainstorm in Pune",
      narrativeContext: "An automotive design team in Pune was stuck for three weeks on a battery cooling problem. Tension was high, with the lead engineer threatening layoffs. Everyone suggested the same incremental tweaks. A new lead arranged a casual team lunch with humorous storytelling; within 2 hours of laughing and relaxing, the team cracked an innovative heat-sink design.",
      biasInAction: "Fear and anxiety had narrowed the engineers' cognitive repertoires to conservative, defensive suggestions; positive levity broadened their conceptual search space.",
      optimalResponse: "When teams face intractable complex challenges, disengage from high-pressure grinding and deliberately introduce psychological safety and playful exploration.",
      reflectionPrompt: "When was the last time a lighthearted walk or laugh with a friend sparked the solution to a problem you had been struggling with for days?",
    },
  ],

  examples: [
    {
      id: 'ex_broaden_and_build_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Stuck Product Brainstorm in Pune",
      description: "An automotive design team in Pune was stuck for three weeks on a battery cooling problem. Tension was high, with the lead engineer threatening layoffs...",
      takeaway: "Negative emotions narrow our perspective down to immediate survival threats",
    },
  ],

  howToRecognize: "Feeling mentally expansive, open to other viewpoints, and eager to explore experimental solutions rather than defending your turf.",
  whereYouEncounterIt: "Scientific research, product design, high-stakes crisis leadership, and personal conflict resolution.",
  commonMisconceptions: "Myth: \"Toxic positivity means pretending bad things do not exist.\" Fact: Broaden-and-build is about micro-moments of authentic positive emotion, not ignoring realistic risks.",
  limitationsAndControversies: "When immediate precision and error detection are vital (e.g., surgical procedures or flight-control audits), a narrower critical focus is functional.",

  howToRespond: "Before tackling a thorny complex dilemma, prime your brain with 3 minutes of humor, gratitude, or aesthetic awe (like looking at a sunset or complex architecture).",
  psychologicalDefenses: [{"title":"The Positivity Priming Ritual","instruction":"Before intense creative work, watch a 2-minute inspiring video or recall a moment of profound gratitude to broaden attentional scope."},{"title":"The Playful Reframe","instruction":"Reframe obstacles as puzzles rather than verdicts on your worth to keep prefrontal exploratory circuits open."}],

  practiceQuestions: [
    {
      id: 'pq_broaden_and_build_01',
      difficulty: 'intermediate',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A software engineering team is completely blocked on an architectural bug for 5 days. What leadership action best leverages the Broaden-and-Build theory?",
      scenarioText: "Team morale is low, exhaustion is palpable, and developers are snapping at each other in standup meetings.",
      explanation: "Positive affect physically broadens associative cognitive search, enabling engineers to connect disparate concepts that stress-induced tunnel vision conceals.",
      antidoteAdvice: "De-escalate panic, inject psychological safety and humor, and allow playfulness to reset cognitive scope.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Demand mandatory weekend overtime and threaten performance warnings for delay.",
          text: "Demand mandatory weekend overtime and threaten performance warnings for delay.",
          feedbackText: "Incorrect. Threat narrows cognitive focus further, guaranteeing more tunnel vision.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Host a relaxed team break with humor, psychological safety, and open-ended lateral brainstorming.",
          text: "Host a relaxed team break with humor, psychological safety, and open-ended lateral brainstorming.",
          feedbackText: "Correct! Broadening affective state widens problem-solving bandwidth.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Fire the junior developer to shock the remaining engineers into working faster.",
          text: "Fire the junior developer to shock the remaining engineers into working faster.",
          feedbackText: "Incorrect. Fear paralyzes creative thinking.",
        }
      ],
    },
  ],

  reflectionPrompt: "How can you deliberately integrate 5 minutes of genuine curiosity or awe into your daily morning routine?",
  tags: ['Mentalab Mind', 'emotions'],
  relatedTopics: [],
  seoTitle: `${"The Broaden-and-Build Theory: How Positive Emotions Expand Cognition"} | Mentalab Mind`,
  seoDescription: "Positive emotions broaden an individual’s momentary thought-action repertoire and build enduring personal resources including resilience and social capital.",
  canonicalUrl: '/mind/emotions/broaden-and-build-theory',
  ogImageUrl: '/images/mind/broaden-and-build-theory.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Under acute threat, tunnel vision saves your life. But in everyday life, chronic stress keeps you trapped in narrow, defensive problem-solving. Experiencing micro-moments of authentic positive emotion expands attention, allowing you to connect previously unrelated ideas and discover novel paths out of dilemmas.",
};

export const TOPIC_BROADEN_AND_BUILD_HINGLISH: MindTopicDetail = {
  ...TOPIC_BROADEN_AND_BUILD_EN,
  title: "Broaden-and-Build Theory: Positivity Kaise Dimaag Kholti Hai",
  subtitle: "Kyu muskurane aur halke-phulke rehne se problems ke behtar solutions milte hain.",
  shortDescription: "Barbara Fredrickson ki research: Positive emotions dimaag ka vision aur creative thinking badhate hain.",
  oneLineExplanation: "Darr dimaag ko narrow karta hai, khushi dimaag ka daayra badhati hai.",
  summary30s: "Jab hum darr ya gusse me hote hain, dimaag sirf ladne ya bhaagne ki sochta hai (tunnel vision). Lekin jab hum khush ya curious hote hain, to aankhon ka dekhne ka daayra aur dimaag ki creativity dono exponentially expand ho jate hain.",
  coreConcept: "Positive emotions sirf achha feel karne ke liye nahi hain, balki wo dimaag ki problem-solving capacity badhane ka biological tool hain. Hasne aur relax karne se dimaag nayi possibilities dekh pata hai.",
  summary60s: "Agar aap kisi mushkil problem me ghanto se fase hain, to gusse me computer screen ko ghoorne se kuch nahi hoga. 10 minute kisi dost se has kar baat karein ya chai piyein. Jaise hi mood positive hoga, dimaag naye angles dekhne lagega.",
  quickTakeaways: ["Stress dimaag ko narrow tunnel me daal deta hai, jisme creative ideas nahi aate","Positive emotions dimaag ki thinking aur vision dono ko physically broaden karte hain","Mushkil problems solve karne se pehle 5 minute ka positive mood reset zaroori hai","Rozana gratitude aur curiosity practice karne se long-term mental resilience banti hai"],
  howItWorks: "Khushi ya curiosity aati hai -> Dimaag relax hota hai -> Peripheral vision aur ideas widen hote hain -> Naye solutions dikhte hain -> Long-term confidence banta hai.",
  howToRespond: "Jab bhi dimaag block ho, kaam rok kar 5 minute kuch aisa karein jisse mann khush ho—chai peena, gana sunna, ya walk karna.",
  practiceQuestions: [
    {
      ...TOPIC_BROADEN_AND_BUILD_EN.practiceQuestions[0],
      prompt: "Team ek mushkil coding bug me 3 din se fasi hui hai aur sab gusse me hain. Best leadership step kya hoga?",
      explanation: "Stress aur gusse se dimaag narrow ho jata hai. Halki-phulki positivity dimaag ka scope wapas khol deti hai.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Sabko daantna aur raat bhar baith kar kaam karne ka order dena.",
          text: "Sabko daantna aur raat bhar baith kar kaam karne ka order dena.",
          feedbackText: "Galat. Isse tunnel vision aur ghaltiyan badhengi.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Team ko 20 minute ka chai break dena, mahol halka karna aur naye nazariye se sochna.",
          text: "Team ko 20 minute ka chai break dena, mahol halka karna aur naye nazariye se sochna.",
          feedbackText: "Sahi! Positivity dimaag ke creative connections ko open karti hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Project ko cancel kar dena.",
          text: "Project ko cancel kar dena.",
          feedbackText: "Galat. Yeh defeatism hai.",
        }
      ],
    },
  ],
  seoTitle: `${"Broaden-and-Build Theory: Positivity Kaise Dimaag Kholti Hai"} | Mentalab Mind`,
  seoDescription: "Barbara Fredrickson ki research: Positive emotions dimaag ka vision aur creative thinking badhate hain.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_BROADEN_AND_BUILD_EN,
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

export const TOPIC_BROADEN_AND_BUILD: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_BROADEN_AND_BUILD_EN,
  hinglish: TOPIC_BROADEN_AND_BUILD_HINGLISH,
  hi: createLocalizedRecord('hi', "विस्तार और निर्माण सिद्धांत (Broaden-and-Build)", "सकारात्मक भावनाएं कैसे संज्ञानात्मक लचीलेपन, रचनात्मकता और स्थायी मानसिक संसाधनों का निर्माण करती हैं।", ["सकारात्मकता दृष्टि और सोच का दायरा बढ़ाती है","तनाव मस्तिष्क को संकुचित कर देता है","आनंद स्थायी आंतरिक शक्ति का निर्माण करता है"]),
  gu: createLocalizedRecord('gu', "બ્રોડન એન્ડ બિલ્ડ સિદ્ધાંત", "હકારાત્મક લાગણીઓ કેવી રીતે વિચારવાની ક્ષમતા અને સર્જનાત્મકતામાં વધારો કરે છે.", ["હકારાત્મકતા દ્રષ્ટિકોણ વિસ્તારે છે","તણાવ વિચારશક્તિ ઘટાડે છે","આનંદ નવી ક્ષમતા બનાવે છે"]),
  mr: createLocalizedRecord('mr', "विस्तार आणि निर्मिती सिद्धांत", "सकारात्मक भावनांमुळे कशा प्रकारे माणसाची विचारशक्ती आणि नवनिर्मितीची क्षमता विस्तारते.", ["सकारात्मकता विचारांची कक्षा रुंदावते","ताणतणाव विचार संकुचित करतो","आनंदातून नवी ऊर्जा मिळते"]),
  te: createLocalizedRecord('te', "విస్తరణ మరియు నిర్మాణ సిద్ధాంతం", "సానుకూల భావోద్వేగాలు సృజనాత్మకతను మరియు ఆలోచనా పరిధిని ఎలా విస్తరిస్తాయి.", ["సానుకూలత దృష్టిని పెంచుతుంది","ఒత్తిడి ఆలోచనలను తగ్గిస్తుంది","ఆనందం స్థిరమైన బలాన్ని ఇస్తుంది"]),
  ta: createLocalizedRecord('ta', "விரிவுபடுத்து மற்றும் உருவாக்கு கோட்பாடு", "நேர்மறை உணர்ச்சிகள் எவ்வாறு சிந்தனைத் திறனையும் படைப்பாற்றலையும் விரிவுபடுத்துகின்றன.", ["நேர்மறை எண்ணம் பார்வையை விரிக்கும்","மன அழுத்தம் சிந்தனையை சுருக்கும்","மகிழ்ச்சி புதிய வழிகளைத் திறக்கும்"]),
  kn: createLocalizedRecord('kn', "ವಿಸ್ತರಣೆ ಮತ್ತು ನಿರ್ಮಾಣ ಸಿದ್ಧಾಂತ", "ಧನಾತ್ಮಕ ಭಾವನೆಗಳು ಸೃಜನಶೀಲತೆ ಮತ್ತು ಆಲೋಚನಾ ಶಕ್ತಿಯನ್ನು ಹೇಗೆ ವಿಸ್ತರಿಸುತ್ತವೆ.", ["ಧನಾತ್ಮಕತೆ ಚಿಂತನೆಯನ್ನು ವಿಸ್ತರಿಸುತ್ತದೆ","ಒತ್ತಡ ಆಲೋಚನೆಯನ್ನು ಕುಗ್ಗಿಸುತ್ತದೆ","ಸಂತೋಷವು ಸಾಮರ್ಥ್ಯ ಹೆಚ್ಚಿಸುತ್ತದೆ"]),
  ml: createLocalizedRecord('ml', "ബ്രോഡൻ ആൻഡ് ബിൽഡ് സിദ്ധാന്തം", "സകാരാത്മക വികാരങ്ങൾ സർഗ്ഗാത്മകതയും ചിന്താശേഷിയും എങ്ങനെ വികസിപ്പിക്കുന്നു.", ["പോസിറ്റീവ് ചിന്ത കാഴ്ചപ്പാട് വികസിപ്പിക്കുന്നു","സമ്മർദ്ദം ചിന്തയെ ഇടുങ്ങിയതാക്കുന്നു","സന്തോഷം പുതിയ സാധ്യതകൾ തുറക്കുന്നു"]),
  bn: createLocalizedRecord('bn', "ব্রডন অ্যান্ড বিল্ড তত্ত্ব", "ইতিবাচক আবেগ কীভাবে মানুষের দৃষ্টিভঙ্গি প্রসারিত করে এবং সৃজনশীলতা বাড়ায়।", ["ইতিবাচকতা চিন্তা বাড়ায়","মানসিক চাপ দৃষ্টিভঙ্গি সংকীর্ণ করে","আনন্দ নতুন শক্তি জোগায়"]),
  pa: createLocalizedRecord('pa', "ਵਿਸਤਾਰ ਅਤੇ ਨਿਰਮਾਣ ਸਿਧਾਂਤ", "ਸਕਾਰਾਤਮਕ ਭਾਵਨਾਵਾਂ ਕਿਵੇਂ ਸੋਚਣ ਦੇ ਦਾਇਰੇ ਅਤੇ ਰਚਨਾਤਮਕਤਾ ਵਿੱਚ ਵਾਧਾ ਕਰਦੀਆਂ ਹਨ।", ["ਸਕਾਰਾਤਮਕਤਾ ਸੋਚ ਨੂੰ ਖੁੱਲ੍ਹਾ ਕਰਦੀ ਹੈ","ਤਣਾਅ ਸੋਚ ਨੂੰ ਤੰਗ ਕਰਦਾ ਹੈ","ਖੁਸ਼ੀ ਨਵੇਂ ਰਾਹ ਖੋਲ੍ਹਦੀ ਹੈ"]),
  ur: createLocalizedRecord('ur', "وسعت اور تعمیر کا نظریہ (Broaden-and-Build)", "مثبت جذبات کس طرح سوچ کی وسعت اور تخلیقی صلاحیتوں کو پروان چڑھاتے ہیں۔", ["مثبت سوچ دائرہ کار وسیع کرتی ہے","تناؤ سوچ کو محدود کرتا ہے","خوشی نئی صلاحیتوں کو جنم دیتی ہے"]),
  or: createLocalizedRecord('or', "ବିସ୍ତାର ଓ ନିର୍ମାଣ ତତ୍ତ୍ୱ", "ସକାରାତ୍ମକ ଭାବନା କିପରି ଚିନ୍ତାଧାରା ଓ ସୃଜନଶୀଳତାକୁ ପ୍ରସାରିତ କରେ।", ["ସକାରାତ୍ମକତା ଦୃଷ୍ଟିକୋଣ ବଢ଼ାଏ","ଚାପ ଚିନ୍ତାକୁ ସୀମିତ କରେ","ଆନନ୍ଦ ନୂଆ ସାମର୍ଥ୍ୟ ଗଢ଼େ"]),
  as: createLocalizedRecord('as', "সম্প্ৰসাৰণ আৰু নিৰ্মাণ তত্ত্ব", "ইতিবাচক আৱেগে কেনেকৈ মানুহৰ চিন্তাৰ পৰিসৰ আৰু সৃষ্টিশীলতা বৃদ্ধি কৰে।", ["ইতিবাচকতাই দৃষ্টি বহল কৰে","উদ্বেগে চিন্তাক সীমিত কৰে","আনন্দে নতুন শক্তি যোগায়"]),
};
