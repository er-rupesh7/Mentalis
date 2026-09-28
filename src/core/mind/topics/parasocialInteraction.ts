import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_PARASOCIAL_INTERACTION_EN: MindTopicDetail = {
  id: 'parasocial_interaction',
  categoryId: 'social_media_tech',
  slug: 'parasocial-interaction',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 7,
  viewCount: 3640,
  shareCount: 285,
  bookmarkCount: 595,
  title: "Parasocial Relationships: One-Sided Intimacy with Digital Creators",
  subtitle: "How daily vloggers, streamers, and influencers trigger real attachment neurochemistry without real reciprocation.",
  shortDescription: "A psychological relationship where a media consumer develops an illusion of friendship, intimacy, and mutual trust with a public media figure who does not know they exist.",
  oneLineExplanation: "Feeling like a YouTuber is your best friend while they don’t even know your name.",

  summary30s: "First identified in 1956 by Donald Horton and R. Richard Wohl during the rise of television, parasocial interaction has exploded with social media and podcasting. High-definition front-facing cameras and daily casual vlogging simulate close-proximity eye contact, tricking the social brain into feeling genuine familial warmth.",
  coreConcept: "The human brain evolved in small bands of 50 to 150 people where anyone you saw and listened to daily was an actual tribal member. Because our evolutionary social circuitry cannot distinguish between photons on a screen and a human sitting 2 feet away, hearing someone speak intimate details about their life triggers oxytocin and attachment security.",
  summary60s: "While parasocial bonds can provide comfort and combat loneliness, they become pathological when individuals prioritize defending their favorite creator over real-world relationships, buy unnecessary branded merchandise to feel \"seen\", or experience deep grief when an influencer changes their life direction.",
  quickTakeaways: ["Parasocial bonds exploit the brain’s inability to differentiate video from physical presence","Intimate camera angles and conversational podcasts simulate authentic tribal closeness","Creators use parasocial intimacy as commercial leverage to sell products and sponsorships","Healthy digital consumption treats creators as entertainers, not substitute real friends"],

  whyItHappens: "Ancestral brains never encountered one-way broadcasting; daily visual familiarity was 100% correlated with biological kinship or tribal alliance.",
  evolutionaryMechanism: "Recognizing faces and voices over repeated encounters cemented vital cooperative alliances in early hunter-gatherer bands.",

  howItWorks: "Creator posts daily intimate vlogs -> Direct eye contact into camera lens -> User listens on headphones (intimate acoustic space) -> Brain releases attachment neurochemicals -> User feels deep personal friendship -> Creator monetizes user trust.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Authentic Reciprocal Friendship vs. One-Sided Parasocial Bond",
    description: "The structural cognitive difference between genuine mutual intimacy and broadcast affection.",
    analogySideA: {
      label: "Real Reciprocal Friendship",
      detail: "Two-way vulnerability: they listen to your sorrows, hold you accountable, and show up when you are sick.",
    },
    analogySideB: {
      label: "Parasocial Dynamic (One-Way)",
      detail: "You know everything about their dog, wedding, and diet; they see you only as an anonymous view count metric.",
    },
  },

  researchSummary: "Horton & Wohl (1956, Psychiatry) and Giles (2002, Media Psychology) analyzed how direct address and conversational media simulate interpersonal interaction, demonstrating deep emotional distress upon relationship termination.",
  references: [
    {
      id: 'ref_parasocial_interaction_01',
      title: "Mass Communication and Para-Social Interaction",
      citation: "Horton, D., & Wohl, R. R. (1956). Psychiatry, 19(3), 215–229.",
      authors: "Horton, D. & Wohl, R. R.",
      publicationYear: 1956,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1080/00332747.1956.11023049",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_parasocial_interaction_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The YouTuber Defense Force in Bengaluru",
      narrativeContext: "Karthik spent 4 hours every night watching an Indian tech vlogger. When another creator published a mild critique of the vlogger’s sponsored review, Karthik felt an intense rage, spending 6 hours posting abusive comments to defend his \"friend's\" honor, missing his sister's birthday dinner.",
      biasInAction: "Karthik formed an intense parasocial attachment: his brain perceived the critique of a wealthy celebrity as an existential attack on his personal inner circle.",
      optimalResponse: "Remember that creators are commercial media enterprises, not personal friends. Reallocate emotional loyalty toward real human connections.",
      reflectionPrompt: "Is there a podcaster, streamer, or celebrity whose opinions you care about more than the people you physically live with?",
    },
  ],

  examples: [
    {
      id: 'ex_parasocial_interaction_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The YouTuber Defense Force in Bengaluru",
      description: "Karthik spent 4 hours every night watching an Indian tech vlogger. When another creator published a mild critique of the vlogger’s sponsored review, K...",
      takeaway: "Parasocial bonds exploit the brain’s inability to differentiate video from physical presence",
    },
  ],

  howToRecognize: "Defending an influencer online with intense emotional anger, buying products purely to support them, or dreaming about casual conversations with them.",
  whereYouEncounterIt: "Twitch streaming, YouTube vlogs, lifestyle podcasts, K-pop fandoms, and political punditry.",
  commonMisconceptions: "Myth: \"Parasocial relationships only happen to lonely losers.\" Fact: Highly social, intelligent individuals form parasocial bonds because our human brains are naturally wired for empathy and connection.",
  limitationsAndControversies: "Mild parasocial bonds can be positive: learning valuable habits from an inspiring educator or finding solace in tough times is healthy as long as it does not replace real friends.",

  howToRespond: "Conduct the Reality Anchor: Whenever you feel intense loyalty to a creator, remind yourself: \"If I passed them on the street right now, they would not know who I am, and that is okay.\"",
  psychologicalDefenses: [{"title":"The Commercial Separation Filter","instruction":"Remember that when creators say \"I love you guys!\", it is a broadcast marketing phrase designed to drive engagement, not personal affection."},{"title":"The Real-World Friendship Ratio","instruction":"Spend at least two hours in face-to-face or voice conversation with real friends for every hour spent listening to solo lifestyle podcasts."}],

  practiceQuestions: [
    {
      id: 'pq_parasocial_interaction_01',
      difficulty: 'beginner',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A young adult feels deeply devastated and weeps for days when an internet gaming streamer announces a temporary 1-month hiatus. What psychological concept best explains this intense grief?",
      scenarioText: "They have watched this streamer for 3 hours every day for three years straight from their bedroom.",
      explanation: "Daily exposure and perceived conversational intimacy build genuine neural attachment pathways (parasocial relationship), triggering grief upon separation.",
      antidoteAdvice: "Acknowledge the neural attachment, re-frame the creator as a broadcaster, and invest in reciprocal relationships.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "They are suffering from a rare dissociative identity disorder.",
          text: "They are suffering from a rare dissociative identity disorder.",
          feedbackText: "Incorrect. It is a very common parasocial attachment response.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Their brain formed an authentic parasocial attachment due to thousands of hours of simulated intimacy.",
          text: "Their brain formed an authentic parasocial attachment due to thousands of hours of simulated intimacy.",
          feedbackText: "Correct! The brain treated the creator as an intimate tribal companion.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "The streamer cast a psychic spell over the viewer.",
          text: "The streamer cast a psychic spell over the viewer.",
          feedbackText: "Incorrect. This is an irrational unscientific belief.",
        }
      ],
    },
  ],

  reflectionPrompt: "How much of your discretionary emotional energy is directed at people who will never know your name?",
  tags: ['Mentalab Mind', 'social_media_tech'],
  relatedTopics: [],
  seoTitle: `${"Parasocial Relationships: One-Sided Intimacy with Digital Creators"} | Mentalab Mind`,
  seoDescription: "A psychological relationship where a media consumer develops an illusion of friendship, intimacy, and mutual trust with a public media figure who does not know they exist.",
  canonicalUrl: '/mind/social-media-tech/parasocial-interaction',
  ogImageUrl: '/images/mind/parasocial-interaction.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "While parasocial bonds can provide comfort and combat loneliness, they become pathological when individuals prioritize defending their favorite creator over real-world relationships, buy unnecessary branded merchandise to feel \"seen\", or experience deep grief when an influencer changes their life direction.",
};

export const TOPIC_PARASOCIAL_INTERACTION_HINGLISH: MindTopicDetail = {
  ...TOPIC_PARASOCIAL_INTERACTION_EN,
  title: "Parasocial Relationships: Influencer Ko Dost Samajhne Ka Dhokha",
  subtitle: "Kyu hamara dimaag YouTubers aur vloggers ko apna jigri dost maan leta hai.",
  shortDescription: "One-sided digital intimacy: Jab screen par roz dekhne se dimaag samne wale ko parivaar jaisa feel karne lagta hai.",
  oneLineExplanation: "Aap unki zindagi ki har baat jante hain, par wo aapka naam tak nahi jante.",
  summary30s: "Donald Horton ne 1956 me Parasocial Interaction term diya tha. Hamara dimaag 1 lakh saal pehle jungle me bana tha, jahan jo chehra roz dikhta tha wo tribal dost hota tha. Dimaag screen aur real human me farq nahi kar pata, isliye roz vlogger ko dekh kar dosti jaisi feelings generate hoti hain.",
  coreConcept: "YouTuber camera ki lens me dekhta hai jaise aapse baat kar raha ho. Earphones lagane se unki awaaz aapke dimaag ke sabse intimate space me aati hai. Result: Oxytocin release hota hai aur aap unhe apna sachha dost maan kar unki ladai me online ladne lagte hain.",
  summary60s: "Problem tab hoti hai jab log apne real dosto ko chhod kar in vloggers ke liye time aur paisa lutate hain. Influencers ke liye \"I love you guys\" ek commercial dialogue hai taaki sponsorships sell ho sakein. Creators entertainer hain, aapke dost nahi.",
  quickTakeaways: ["Dimaag roz screen par aane wale chehre ko sachha dost samajhne ki galti karta hai","Headphones aur camera angle jan-bujhkar aisi intimacy simulate karne ke liye design kiye jate hain","Creators broadcast karte hain, wo personally aapse pyaar nahi karte","Apna time aur jazbaat real insaano par lagao jo musibat me aapke kaam aayenge"],
  howItWorks: "Roz vlogs dekhe -> Earphones me awaaz aayi -> Dimaag ne close friend ka tag lagaya -> Unki burai sun kar gussa aaya -> Unke kehne par faltu products khareede.",
  howToRespond: "Reality check karein: Jab bhi kisi creator par gussa ya pyaar aaye, khud ko yaad dilayein: \"Agar main raste me mila to wo mujhe pehchanega bhi nahi.\"",
  practiceQuestions: [
    {
      ...TOPIC_PARASOCIAL_INTERACTION_EN.practiceQuestions[0],
      prompt: "Ek streamer ke 1 mahine ke break lene par ek ladka 3 din tak depressed ho kar rota raha. Research ke mutabiq yeh kya hai?",
      explanation: "Yeh parasocial attachment hai, jisme roz dekhne ki wajah se dimaag use apna close companion maan chuka tha.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Usse koi ajeeb bimari ho gayi hai jiska koi ilaaj nahi.",
          text: "Usse koi ajeeb bimari ho gayi hai jiska koi ilaaj nahi.",
          feedbackText: "Galat. Yeh parasocial dynamic ka common side effect hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Uski attachment ek-tarfa parasocial bond par ban chuki thi jo achanak toot gayi.",
          text: "Uski attachment ek-tarfa parasocial bond par ban chuki thi jo achanak toot gayi.",
          feedbackText: "Sahi! Dimaag ne creator ko real-life attachment bana liya tha.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Wo ladka streamer ka business partner tha.",
          text: "Wo ladka streamer ka business partner tha.",
          feedbackText: "Galat. Yeh ek-tarfa relationship tha.",
        }
      ],
    },
  ],
  seoTitle: `${"Parasocial Relationships: Influencer Ko Dost Samajhne Ka Dhokha"} | Mentalab Mind`,
  seoDescription: "One-sided digital intimacy: Jab screen par roz dekhne se dimaag samne wale ko parivaar jaisa feel karne lagta hai.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_PARASOCIAL_INTERACTION_EN,
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

export const TOPIC_PARASOCIAL_INTERACTION: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_PARASOCIAL_INTERACTION_EN,
  hinglish: TOPIC_PARASOCIAL_INTERACTION_HINGLISH,
  hi: createLocalizedRecord('hi', "एकतरफा आभासी संबंध (Parasocial Interaction)", "सोशल मीडिया इन्फ्लुएंसर्स और रचनाकारों के साथ एकतरफा घनिष्ठता और मित्रता की मनोवैज्ञानिक अनुभूति।", ["मस्तिष्क वीडियो और वास्तविक उपस्थिति में अंतर नहीं कर पाता","यह संबंध पूर्णतः एकतरफा और व्यावसायिक होता है","वास्तविक सामाजिक रिश्तों को प्राथमिकता दें"]),
  gu: createLocalizedRecord('gu', "પેરાસોશિયલ સંબંધો (એકતરફી ડિજિટલ મિત્રતા)", "સોશિયલ મીડિયા કન્ટેન્ટ ક્રિએટર્સ સાથે એકતરફી નિકટતા અને મિત્રતાનો મનોવૈજ્ઞાનિક આભાસ.", ["એકતરફી મિત્રતાથી સાવધાન","વાસ્તવિક મિત્રોને સમય આપો","ક્રિએટર્સના વ્યવસાયને સમજો"]),
  mr: createLocalizedRecord('mr', "पॅरासोशल नातेसंबंध (एकतर्फी डिजिटल मैत्री)", "सोशल मीडियावरील व्यक्तींशी स्वतःहून घनिष्ठ आणि जवळचे नाते निर्माण झाल्याचा भास होणे.", ["एकतर्फी भावनिक गुंतवणूक टाळा","वास्तविक नातेसंबंधांना वेळ द्या","व्यावसायिक उद्देश ओळखा"]),
  te: createLocalizedRecord('te', "పారాసోషల్ ఇంటరాక్షన్ (ఏకపక్ష డిజిటల్ స్నేహం)", "సోషల్ మీడియా సృష్టికర్తలు మరియు సెలబ్రిటీలతో నిజమైన స్నేహం ఉందనే ఏకపక్ష మానసిక భ్రమ.", ["ఏకపక్ష అనుబంధాన్ని నియంత్రించండి","నిజమైన స్నేహాలకు ప్రాధాన్యత ఇవ్వండి","వాణిజ్య ఉద్దేశాలను గ్రహించండి"]),
  ta: createLocalizedRecord('ta', "பாரಾಸோஷியல் உறவுகள் (ஒருதலைப்பட்ச டிஜிட்டல் நட்பு)", "சமூக வலைத்தள பிரபலங்களை தங்களின் நெருங்கிய நண்பராக நினைக்கும் ஒருதலைப்பட்ச உளவியல் மாயை.", ["ஒருதலைப்பட்ச நட்பை தவிருங்கள்","நிஜ மனிதர்களுடன் பழகுங்கள்","வியாபார நோக்கத்தை புரிந்து கொள்ளுங்கள்"]),
  kn: createLocalizedRecord('kn', "ಪ್ಯಾರಾಸೋಶಿಯಲ್ ಸಂಬಂಧಗಳು (ಏಕಮುಖ ಡಿಜಿಟಲ್ ಸ್ನೇಹ)", "ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮದ ಸೃಷ್ಟಿಕರ್ತರೊಂದಿಗೆ ನಿಜವಾದ ಆಪ್ತತೆ ಇದೆ ಎಂದು ಭಾವಿಸುವ ಏಕಮುಖ ಮಾನಸಿಕ ಭ್ರಮೆ.", ["ಏಕಮುಖ ಸಂಬಂಧದಿಂದ ಹೊರಬನ್ನಿ","ನಿಜವಾದ ಸ್ನೇಹಿತರಿಗೆ ಸಮಯ ನೀಡಿ","ವಾಣಿಜ್ಯಿಕ ತಂತ್ರಗಳನ್ನು ಅರಿಯಿರಿ"]),
  ml: createLocalizedRecord('ml', "പാരാസോഷ്യൽ ബന്ധങ്ങൾ (ഏകപക്ഷീയ ഡിജിറ്റൽ സൗഹൃദം)", "സോഷ്യൽ മീഡിയ സെലിബ്രിറ്റികളുമായി യഥാർത്ഥ സൗഹൃദമുണ്ടെന്ന രീതിയിൽ മനസ്സ് ഉണ്ടാക്കുന്ന മിഥ്യാധാരണ.", ["ഏകപക്ഷീയ ആസക്തി കുറയ്ക്കുക","യഥാർത്ഥ സൗഹൃദങ്ങൾ വളർത്തുക","വ്യാവസായിക തന്ത്രങ്ങൾ തിരിച്ചറിയുക"]),
  bn: createLocalizedRecord('bn', "প্যারাসোশ্যাল মিথস্ক্রিয়া (একতরফা ডিজিটাল বন্ধুত্ব)", "সোশ্যাল মিডিয়া সেলিব্রিটি ও কনটেন্ট নির্মাতাদের সাথে কাল্পনিক ও একতরফা বন্ধুত্বের মনস্তাত্ত্বিক ভ্রান্তি।", ["একতরফা মোহ থেকে দূরে থাকুন","বাস্তব বন্ধুত্ব গড়ে তুলুন","বাণিজ্যিক স্বার্থ বুঝতে শিখুন"]),
  pa: createLocalizedRecord('pa', "ਪੈਰਾਸੋਸ਼ਲ ਰਿਸ਼ਤੇ (ਇਕਪਾਸੜ ਡਿਜੀਟਲ ਦੋਸਤੀ)", "ਸੋਸ਼ਲ ਮੀਡੀਆ ਇਨਫਲੂਐਂਸਰਾਂ ਨਾਲ ਅਸਲ ਦੋਸਤੀ ਹੋਣ ਦਾ ਇਕਪਾਸੜ ਅਤੇ ਝੂਠਾ ਮਨੋਵਿਗਿਆਨਕ ਅਹਿਸਾਸ।", ["ਇਕਪਾਸੜ ਲਗਾਓ ਤੋਂ ਬਚੋ","ਅਸਲ ਜ਼ਿੰਦਗੀ ਦੇ ਰਿਸ਼ਤੇ ਸੰਭਾਲੋ","ਵਪਾਰਕ ਚਾਲਾਂ ਨੂੰ ਸਮਝੋ"]),
  ur: createLocalizedRecord('ur', "پیراسوشل تعامل (یکطرفہ ڈیجیٹل دوستی)", "سوشل میڈیا اسٹارز اور یوٹیوبرز کے ساتھ ذاتی دوستی اور قربت کا یکطرفہ نفسیاتی احساس۔", ["یکطرفہ تعلق سے ہوشیار رہیں","حقیقی رشتوں کو ترجیح دیں","تجارتی پہلو کو سمجھیں"]),
  or: createLocalizedRecord('or', "ପାରାସୋସିଆଲ୍ ସମ୍ପର୍କ (ଏକତରଫା ଡିଜିଟାଲ୍ ବନ୍ଧୁତା)", "ସୋସିଆଲ୍ ମିଡ଼ିଆ କ୍ରିଏଟର୍ସଙ୍କ ସହ ବାସ୍ତବ ବନ୍ଧୁତା ଥିବାର ଏକତରଫା ମାନସିକ ଭ୍ରାନ୍ତି।", ["ଏକତରଫା ମୋହରୁ ଦୂରେଇ ରୁହନ୍ତୁ","ପ୍ରକୃତ ସମ୍ପର୍କକୁ ସମୟ ଦିଅନ୍ତୁ","ବାଣିଜ୍ୟିକ ଉଦ୍ଦେଶ୍ୟ ବୁଝନ୍ତୁ"]),
  as: createLocalizedRecord('as', "পেৰাছ’চিয়েল সম্পৰ্ক (একতৰফা ডিজিটেল বন্ধুত্ব)", "ছচিয়েল মিডিয়াৰ তাৰকা আৰু ক্ৰিয়েটৰসকলৰ লগত বাস্তৱ বন্ধুত্ব থকা বুলি ভবাৰ একপক্ষীয় মানসিকতা।", ["একতৰফা আসক্তি পৰিহাৰ কৰক","বাস্তৱ সম্পৰ্কক গুৰুত্ব দিয়ক","ব্যৱসায়িক স্বাৰ্থ বুজি লওক"]),
};
