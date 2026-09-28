import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_DESIRABLE_DIFFICULTIES_EN: MindTopicDetail = {
  id: 'desirable_difficulties',
  categoryId: 'learning_psychology',
  slug: 'desirable-difficulties',
  difficulty: 'advanced',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 9,
  viewCount: 3880,
  shareCount: 315,
  bookmarkCount: 645,
  title: "Desirable Difficulties: Why Effortful Friction Creates Mastery",
  subtitle: "Robert and Elizabeth Bjork’s framework on why short-term struggle creates long-term durability.",
  shortDescription: "Learning conditions that introduce cognitive friction, effort, and temporary setbacks, which slow down initial acquisition but dramatically optimize long-term retention and transfer.",
  oneLineExplanation: "If it feels easy and flowing, you aren’t learning; ease is the enemy of durability.",

  summary30s: "Introduced in 1994 by UCLA cognitive psychologist Robert Bjork, the concept of \"Desirable Difficulties\" revolutionized pedagogical science. Bjork distinguished between *performance* (what is measurable right now during study) and *learning* (permanent neurological modification). Techniques that maximize rapid immediate performance (cramming, re-reading) lead to catastrophic rapid forgetting.",
  coreConcept: "Memory storage operates under the \"New Theory of Disuse\": memories have both Retrieval Strength (accessibility in working memory) and Storage Strength (entrenched synaptic weight). When retrieval strength is high, studying does almost nothing to increase storage strength. Only when retrieval is difficult—forcing the brain to sweat and reconstruct traces—does storage strength multiply exponentially.",
  summary60s: "Desirable difficulties include: spaced retrieval across days (spacing effect), mixing problem categories (interleaving), testing instead of studying (retrieval practice), varying the physical study environment, and self-generating answers. The key word is *desirable*: difficulties must be challenges the learner can successfully overcome, not bewildering confusion.",
  quickTakeaways: ["High immediate study performance is often an illusion that conceals zero long-term learning","The harder it is to retrieve a memory, the more its permanent storage strength increases","Spacing, interleaving, and self-testing are the core trio of desirable difficulties","Welcome cognitive friction; smooth, effortless studying is a neurological dead end"],

  whyItHappens: "Synaptic consolidation requires biological stress: when retrieval is challenging, the hippocampus signals the cortex to allocate resources to reconstruct and reinforce pathways.",
  evolutionaryMechanism: "Survival skills were acquired through life-and-death struggle and physical resistance; painless absorption was biologically impossible.",

  howItWorks: "Memory allowed to partially decay -> Learner struggles to recall -> High cognitive effort expended -> Neural reconstructive circuits fire -> Storage strength surges -> Forgetting curve flattens.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Smooth Cramming vs. Desirable Difficulty Trajectory",
    description: "Robert Bjork’s performance vs. learning dichotomy.",
    analogySideA: {
      label: "Easy Cramming (Massed Review)",
      detail: "Day 1: 95% performance (feels amazing!). Day 7: 15% retention (catastrophic forgetting).",
    },
    analogySideB: {
      label: "Desirable Difficulty (Spaced Recall)",
      detail: "Day 1: 50% performance (feels like a failure!). Day 7: 82% retention! (true durability).",
    },
  },

  researchSummary: "Bjork, R. A. (1994, Metacognition: Knowing about Knowing) and Bjork & Bjork (2011, Psychology of Learning and Motivation) synthesized decades of experimental evidence separating immediate performance from durable learning.",
  references: [
    {
      id: 'ref_desirable_difficulties_01',
      title: "Making Things Hard on Yourself, But in a Good Way: Creating Desirable Difficulties to Enhance Learning",
      citation: "Bjork, E. L., & Bjork, R. A. (2011). Psych. of Learning and Motivation, 55, 59–68.",
      authors: "Bjork, R. A. & Bjork, E. L.",
      publicationYear: 2011,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1016/B978-0-12-387693-5.00002-5",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_desirable_difficulties_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The NEET Repeater Breakthrough in Hyderabad",
      narrativeContext: "Sai failed his first attempt at the NEET medical entrance exam in Hyderabad after spending 14 hours a day watching recorded online lectures and nodding along smoothly. In his second year, he completely stopped re-watching lectures; he forced himself to do closed-book question banks, getting 40% wrong daily, sweating with frustration. On the actual exam, he ranked in the top 0.5%.",
      biasInAction: "In Year 1, Sai mistook effortless lecture-watching for learning. In Year 2, he leveraged desirable difficulties: the painful struggle of testing forged permanent synaptic connections.",
      optimalResponse: "Embrace the feeling of struggle: if a study session feels relaxing and comfortable, stop immediately and test yourself with closed books.",
      reflectionPrompt: "When studying, do you prefer activities that make you feel smart (like re-reading highlighted notes) or activities that expose what you don’t know (like flashcards)?",
    },
  ],

  examples: [
    {
      id: 'ex_desirable_difficulties_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The NEET Repeater Breakthrough in Hyderabad",
      description: "Sai failed his first attempt at the NEET medical entrance exam in Hyderabad after spending 14 hours a day watching recorded online lectures and noddin...",
      takeaway: "High immediate study performance is often an illusion that conceals zero long-term learning",
    },
  ],

  howToRecognize: "Feeling mentally fatigued, slightly frustrated, and humbled during study, but realizing days later that the material is etched permanently in your mind.",
  whereYouEncounterIt: "High-stakes academic examinations, surgical residency training, flight simulator pilot certification, and foreign language fluency.",
  commonMisconceptions: "Myth: \"Effective studying should feel smooth, effortless, and fun.\" Fact: Effortless studying is largely an illusion of competence; real synaptic remodeling requires metabolic struggle.",
  limitationsAndControversies: "Difficulties are only \"desirable\" if the learner possesses the background knowledge and motivation to ultimately succeed; excessive difficulty without foundational scaffolding causes helplessness.",

  howToRespond: "The Friction Protocol: For every hour of study, ensure at least 35 minutes are spent in difficult, active retrieval (doing practice problems, explaining aloud, closed-book testing).",
  psychologicalDefenses: [{"title":"The Delayed Retrieval Rule","instruction":"Never test yourself on material immediately after reading it; wait at least 4 hours or sleep overnight so retrieval requires real cognitive work."},{"title":"The Deliberate Error Welcome","instruction":"Treat getting a practice question wrong not as a failure, but as the exact moment your brain triggers dopamine-driven memory updating."}],

  practiceQuestions: [
    {
      id: 'pq_desirable_difficulties_01',
      difficulty: 'advanced',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A student has a choice between two study methods for an anatomy exam next month. Method A: Re-reading the textbook until it feels completely fluent (takes 3 hours). Method B: Taking timed practice quizzes where they get 30% wrong and must look up the corrections (takes 3 hours). Which method produces higher retention?",
      scenarioText: "The student feels much more confident and relaxed using Method A during the session.",
      explanation: "Method B introduces desirable difficulties: struggling to retrieve answers and correcting errors cements neural storage strength far beyond passive fluent re-reading.",
      antidoteAdvice: "Choose effortful self-testing over passive familiarity, regardless of how stressful it feels in the moment.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Method A, because positive emotional confidence is the number one predictor of test performance.",
          text: "Method A, because positive emotional confidence is the number one predictor of test performance.",
          feedbackText: "Incorrect. Confidence is often a false signal of fluency.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Method B, because effortful retrieval and error correction trigger deep neuroplastic consolidation (Desirable Difficulties).",
          text: "Method B, because effortful retrieval and error correction trigger deep neuroplastic consolidation (Desirable Difficulties).",
          feedbackText: "Correct! The cognitive friction of Method B maximizes delayed test recall.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Both methods are equal because the total time spent (3 hours) was identical.",
          text: "Both methods are equal because the total time spent (3 hours) was identical.",
          feedbackText: "Incorrect. Cognitive engagement mechanisms matter far more than raw study hours.",
        }
      ],
    },
  ],

  reflectionPrompt: "What is one \"easy\" study habit you regularly rely on that you know in your heart is not creating durable memory?",
  tags: ['Mentalab Mind', 'learning_psychology'],
  relatedTopics: [],
  seoTitle: `${"Desirable Difficulties: Why Effortful Friction Creates Mastery"} | Mentalab Mind`,
  seoDescription: "Learning conditions that introduce cognitive friction, effort, and temporary setbacks, which slow down initial acquisition but dramatically optimize long-term retention and transfer.",
  canonicalUrl: '/mind/learning-psychology/desirable-difficulties',
  ogImageUrl: '/images/mind/desirable-difficulties.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Desirable difficulties include: spaced retrieval across days (spacing effect), mixing problem categories (interleaving), testing instead of studying (retrieval practice), varying the physical study environment, and self-generating answers. The key word is *desirable*: difficulties must be challenges the learner can successfully overcome, not bewildering confusion.",
};

export const TOPIC_DESIRABLE_DIFFICULTIES_HINGLISH: MindTopicDetail = {
  ...TOPIC_DESIRABLE_DIFFICULTIES_EN,
  title: "Desirable Difficulties: Mushkil Raaste Hi Manzil Tak Le Jate Hain",
  subtitle: "Robert Bjork ki groundbreaking research: Padhai me jitni takleef aur friction hoga, exam me utna hi solid result aayega.",
  shortDescription: "Performance vs Learning: Easy lagne wali padhai turant bhool jati hai, jabki dimaag ko nichodne wali struggle hi permanent memory banati hai.",
  oneLineExplanation: "Agar padhte waqt maza aa raha hai aur sab easy lag raha hai, to samajh lo dimaag kuch nahi seekh raha.",
  summary30s: "UCLA ke professor Robert Bjork ne dekha ki students do cheezon me confuse ho jate hain: Immediate Performance (padhte waqt kaisa lag raha hai) aur Long-term Learning (1 mahine baad kitna yaad hai). Videos dekhna aur notes padhna easy lagta hai, par exam ke din dimaag blank ho jata hai.",
  coreConcept: "Dimaag muscle ki tarah hai: Bina weight uthaye gym me body nahi banti. Jab aap kisi cheez ko dimaag se zabardasti bahar nikaalne ki koshish karte ho (Closed-book test, questions solve karna, galti karna), to dimaag par stress padta hai. Is friction ko Bjork ne \"Desirable Difficulty\" kaha hai.",
  summary60s: "Neet aur JEE ke toppers rote nahi hain jab unke mock test me questions galat hote hain; wo khush hote hain kyuki galti hone se dimaag us connection ko permanent lock kar deta hai. Easy tareeqo se padhna band karo. Spacing, Testing aur Interleaving ko apnao.",
  quickTakeaways: ["Padhte waqt aane wala confidence aksar jhootha hota hai (Illusion of fluency)","Dimaag jitna zor lagayega, memory utni hi pathar ki lakeer banegi","Galtiyan hona bura nahi hai, wahi dimaag ko update karne ka signal hai","Comfortable study band karo, testing aur active recall se dimaag ko challenge karo"],
  howItWorks: "Padhai shuru ki -> Closed-book questions lagaye -> Galtiyan hui -> Dimaag ne struggle kiya -> Correction check kiya -> Permanent neural pathways ban gaye.",
  howToRespond: "Friction dhoondo: Agar revision easy lag raha hai, to kitab band karo aur bina dekhe khud ko test karo. Jo question galat ho, wahi aapki असली learning hai.",
  practiceQuestions: [
    {
      ...TOPIC_DESIRABLE_DIFFICULTIES_EN.practiceQuestions[0],
      prompt: "Method A: Notes ko 3 baar aaram se padhna (sukoon milta hai). Method B: Practice quiz lagana jisme 30% questions galat ho jayein aur dimaag thak jaye. Exam ke liye kaunsa better hai?",
      explanation: "Method B (Desirable Difficulties) dimaag ko zor lagane par majboor karta hai jisse exam me retention 80% rehta hai.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Method A, kyuki padhte waqt tension nahi honi chahiye.",
          text: "Method A, kyuki padhte waqt tension nahi honi chahiye.",
          feedbackText: "Galat. Zero tension matlab zero retention.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Method B, kyuki dimaag ka struggle aur galtiyon ka correction hi permanent memory banata hai.",
          text: "Method B, kyuki dimaag ka struggle aur galtiyon ka correction hi permanent memory banata hai.",
          feedbackText: "Sahi! Yahi Desirable Difficulties ka core principle hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Dono bekaar hain.",
          text: "Dono bekaar hain.",
          feedbackText: "Galat.",
        }
      ],
    },
  ],
  seoTitle: `${"Desirable Difficulties: Mushkil Raaste Hi Manzil Tak Le Jate Hain"} | Mentalab Mind`,
  seoDescription: "Performance vs Learning: Easy lagne wali padhai turant bhool jati hai, jabki dimaag ko nichodne wali struggle hi permanent memory banati hai.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_DESIRABLE_DIFFICULTIES_EN,
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

export const TOPIC_DESIRABLE_DIFFICULTIES: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_DESIRABLE_DIFFICULTIES_EN,
  hinglish: TOPIC_DESIRABLE_DIFFICULTIES_HINGLISH,
  hi: createLocalizedRecord('hi', "वांछनीय कठिनाइयां (Desirable Difficulties)", "अध्ययन के दौरान मानसिक संघर्ष, त्रुटियों और प्रयास को शामिल करने से होने वाली दीर्घकालिक स्मृति सुदृढ़ीकरण का सिद्धांत।", ["सरल और सहज अध्ययन अक्सर सीखने का झूठा भ्रम होता है","जितना अधिक मानसिक प्रयास होगा, स्मृति उतनी ही स्थायी बनेगी","गलतियों को सीखने और सुधार के सबसे बड़े अवसर के रूप में अपनाएं"]),
  gu: createLocalizedRecord('gu', "વાંછનીય મુશ્કેલીઓ (Desirable Difficulties)", "અભ્યાસમાં મુશ્કેલી અને સંઘર્ષ દ્વારા લાંબા ગાળાની યાદશક્તિ પાકી કરવાની વૈજ્ઞાનિક રીત.", ["સરળ રસ્તો છોડો","મગજને કસરત કરાવો","ભૂલોમાંથી સાચું શીખો"]),
  mr: createLocalizedRecord('mr', "इच्छित अडचणी (Desirable Difficulties)", "अभ्यासात येणारा बौद्धिक ताण आणि संघर्ष दीर्घकालीन स्मरणशक्तीसाठी कसा आवश्यक असतो याचे मानसशास्त्र.", ["सोप्या पद्धतींचा मोह सोडा","मेंदूला आव्हाने द्या","चुका दुरुस्त करून शिका"]),
  te: createLocalizedRecord('te', "వాంఛనీయ కష్టాలు (Desirable Difficulties)", "చదివేటప్పుడు పడే మానసిక శ్రమ మరియు ఇబ్బందులే దీర్ఘకాలిక జ్ఞాపకశక్తికి బలమైన పునాది.", ["సులువైన పద్ధతులను వీడండి","మెదడుకు శ్రమ కలిగించండి","తప్పుల నుండి నేర్చుకోండి"]),
  ta: createLocalizedRecord('ta', "விரும்பத்தக்க கடினங்கள் (Desirable Difficulties)", "படிக்கும் போது ஏற்படும் மன சவால்களும் சிரமங்களுமே நீண்டகால நினைவாற்றலை உருவாக்கும் அறிவியல் உண்மை.", ["எளிதான வழிகளை தவிருங்கள்","மூளைக்கு சவால் விடுங்கள்","தவறுகளிலிருந்து கற்றுக் கொள்ளுங்கள்"]),
  kn: createLocalizedRecord('kn', "ಅಪೇಕ್ಷಣೀಯ ಕಷ್ಟಗಳು (Desirable Difficulties)", "ಕಲಿಯುವಾಗ ಎದುರಾಗುವ ಮಾನಸಿಕ ಸವಾಲುಗಳು ಮತ್ತು ಶ್ರಮವೇ ಶಾಶ್ವತ ನೆನಪಿಗೆ ಕಾರಣವಾಗುವ ಮನೋವಿಜ್ಞಾನ.", ["ಸುಲಭದ ಹಾದಿ ಬಿಡಿ","ಮೆದುಳಿಗೆ ಕಷ್ಟ ಕೊಡಿ","ತಪ್ಪುಗಳಿಂದ ಕಲಿಯಿರಿ"]),
  ml: createLocalizedRecord('ml', "ആവശ്യമായ ബുദ്ധിമുട്ടുകൾ (Desirable Difficulties)", "പഠനത്തിൽ ഉണ്ടാകുന്ന മാനസിക വെല്ലുവിളികളും പ്രയാസങ്ങളും ദീർഘകാല ഓർമ്മശക്തി വർദ്ധിപ്പിക്കുന്നു.", ["എളുപ്പവഴികൾ ഉപേക്ഷിക്കുക","മനസ്സിനെ പരിശീലിപ്പിക്കുക","തെറ്റുകൾ തിരുത്തി പഠിക്കുക"]),
  bn: createLocalizedRecord('bn', "বাঞ্ছনীয় প্রতিবন্ধকতা (Desirable Difficulties)", "পড়ার সময় মানসিক শ্রম ও বাধার সম্মুখীন হওয়াই দীর্ঘমেয়াদী স্মৃতির ভিত্তি গড়ে তোলার বৈজ্ঞানিক সত্য।", ["সহজ উপায়ের মোহ ত্যাগ করুন","মস্তিষ্ককে চ্যালেঞ্জ জানান","ভুল থেকে স্থায়ী শিক্ষা নিন"]),
  pa: createLocalizedRecord('pa', "ਲੋੜੀਂਦੀਆਂ ਮੁਸ਼ਕਿਲਾਂ (Desirable Difficulties)", "ਪੜ੍ਹਾਈ ਵਿੱਚ ਮਾਨਸਿਕ ਸੰਘਰਸ਼ ਅਤੇ ਔਖ ਹੀ ਲੰਬੇ ਸਮੇਂ ਦੀ ਪੱਕੀ ਯਾਦਦਾਸ਼ਤ ਬਣਾਉਣ ਦਾ ਅਸਲ ਤਰੀਕਾ ਹੈ।", ["ਸੌਖੇ ਰਾਹਾਂ ਤੋਂ ਬਚੋ","ਦਿਮਾਗ ਤੇ ਜ਼ੋਰ ਪਾਓ","ਗ਼ਲਤੀਆਂ ਸੁਧਾਰ ਕੇ ਸਿੱਖੋ"]),
  ur: createLocalizedRecord('ur', "پسندیدہ مشکلات (Desirable Difficulties)", "پڑھائی کے دوران ذہنی مشقت اور دشواری ہی دیرپا یادداشت اور مہارت پیدا کرنے کا ذریعہ ہے۔", ["آسان راستوں سے پرہیز کریں","ذہن کو چیلنج دیں","غلطیوں سے سبق سیکھیں"]),
  or: createLocalizedRecord('or', "ବାଞ୍ଛନୀୟ କଠିନତା (Desirable Difficulties)", "ପଢ଼ିବା ସମୟରେ ମାନସିକ ସଂଘର୍ଷ ଓ ପରିଶ୍ରମ ହିଁ ଦୀର୍ଘକାଳୀନ ସ୍ମୃତିର ପ୍ରକୃତ ଆଧାର।", ["ସହଜ ଉପାୟ ଛାଡ଼ନ୍ତୁ","ମସ୍ତିଷ୍କକୁ ଚ୍ୟାଲେଞ୍ଜ କରନ୍ତୁ","ଭୁଲ୍ ସଂଶୋଧନ କରି ଶିଖନ୍ତୁ"]),
  as: createLocalizedRecord('as', "বাঞ্ছনীয় জটিলতা (Desirable Difficulties)", "পঢ়াৰ সময়ত মানসিক সংগ্ৰাম আৰু প্ৰত্যাহ্বানেই স্থায়ী স্মৃতি গঢ়ি তোলাৰ প্ৰকৃত বৈজ্ঞানিক ভিত্তি।", ["সহজ পথ পৰিহাৰ কৰক","মগজুক কষ্ট কৰিবলৈ দিয়ক","ভুলৰ পৰা স্থায়ী শিক্ষা লওক"]),
};
