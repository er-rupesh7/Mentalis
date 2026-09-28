import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_DUAL_CODING_THEORY_EN: MindTopicDetail = {
  id: 'dual_coding_theory',
  categoryId: 'learning_psychology',
  slug: 'dual-coding-theory',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 7,
  viewCount: 3640,
  shareCount: 285,
  bookmarkCount: 595,
  title: "Dual Coding Theory: Double-Barreled Memory Storage",
  subtitle: "Allan Paivio’s cognitive architecture on why combining words with visual imagery doubles recall capacity.",
  shortDescription: "A cognitive theory positing that human memory operates via two separate, interconnected systems: a linguistic/verbal system and a non-verbal visual/spatial system.",
  oneLineExplanation: "Store it with a word and an image; if one cognitive pathway fails, the other retrieves it.",

  summary30s: "Proposed by Canadian psychologist Allan Paivio in 1971, Dual Coding Theory asserts that memory performance is dramatically enhanced when information is encoded through both verbal and non-verbal symbolic systems. Words and visual diagrams utilize independent cognitive working memory buffers, doubling the associative pathways available for retrieval.",
  coreConcept: "The verbal system processes sequential linguistic input (text, spoken words, formulas), creating \"logogens\". The non-verbal system processes continuous spatial information (drawings, mental models, spatial maps), creating \"imagens\". When a concept is encoded with both a logogen and an imagen, you create a redundant neuro-associative bridge: activating either representation reactivates the other.",
  summary60s: "Dual coding debunked the myth of rigid \"visual vs. verbal learners\". Every human brain (barring severe sensory impairment) possesses both processing channels. Text-heavy slides and monotonous monologues overload the verbal phonological loop while leaving the visuospatial sketchpad completely idle. Integrating concise diagrams, timelines, and spatial metaphors unlocks latent cognitive bandwidth.",
  quickTakeaways: ["The brain processes verbal text and visual imagery through two independent parallel systems","Dual encoding creates two separate retrieval cues for every concept learned","Combining simple sketches with concise labels outperforms dense text paragraphs by 2x","Do not decorate slides with irrelevant photos; use meaningful explanatory diagrams"],

  whyItHappens: "Evolutionary cortical architecture: the visual cortex and auditory language centers evolved as distinct processing modules that synergize via associative cortices.",
  evolutionaryMechanism: "Hunters tracked prey by combining spoken tribal terminology with spatial visual footprints and terrain geometry.",

  howItWorks: "New concept encountered -> Processed as verbal explanation (Logogen) -> Simultaneously drawn as visual flow diagram (Imagen) -> Cross-linking associative pathways established -> Dual retrieval redundancy secured.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Single Verbal Encoding vs. Dual-Coded Redundancy",
    description: "Allan Paivio’s dual cognitive architecture in working memory.",
    analogySideA: {
      label: "Single Verbal Encoding",
      detail: "300-word paragraph describing photosynthesis -> Phonological loop strained; 28% delayed recall.",
    },
    analogySideB: {
      label: "Dual-Coded Architecture",
      detail: "Simple flowchart diagram + 3 key bullet labels -> Verbal & visual systems active; 65% recall!",
    },
  },

  researchSummary: "Paivio (1971, 1986, Oxford University Press) and Mayer & Anderson (1991, Journal of Educational Psychology) established that multimedia instruction presenting coordinated text and animation significantly boosts problem-solving transfer.",
  references: [
    {
      id: 'ref_dual_coding_theory_01',
      title: "Imagery and Verbal Processes",
      citation: "Paivio, A. (1971). Holt, Rinehart & Winston.",
      authors: "Paivio, A.",
      publicationYear: 1971,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1037/h0032955",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_dual_coding_theory_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Medical Anatomy Struggle in Chennai",
      narrativeContext: "Divya, a first-year medical student in Chennai, spent 4 weeks reading a dense 40-page textbook chapter on the renal nephron countercurrent multiplier system. On her viva exam, she struggled to explain the sodium gradient. Her peer, who sketched a simple cartoon diagram with arrows while studying, explained it flawlessly in 90 seconds.",
      biasInAction: "Divya relied strictly on single-channel verbal memorization, whereas her peer built a dual-coded spatial mental model.",
      optimalResponse: "Whenever learning a complex process, take a sketchpad and convert every paragraph into a sequential flowchart, labeled cross-section, or spatial coordinate map.",
      reflectionPrompt: "When you take notes in meetings or classes, do your pages consist entirely of words, or do you integrate arrows, boxes, and structural diagrams?",
    },
  ],

  examples: [
    {
      id: 'ex_dual_coding_theory_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Medical Anatomy Struggle in Chennai",
      description: "Divya, a first-year medical student in Chennai, spent 4 weeks reading a dense 40-page textbook chapter on the renal nephron countercurrent multiplier ...",
      takeaway: "The brain processes verbal text and visual imagery through two independent parallel systems",
    },
  ],

  howToRecognize: "Memorizing long paragraphs of text by rote repetition, followed by feeling completely stuck the moment you forget a single transitional word.",
  whereYouEncounterIt: "STEM education (physics, biology, engineering), corporate presentation design, workflow SOP documentation, and architecture.",
  commonMisconceptions: "Myth: \"Dual coding means putting decorative clip-art or memes on every slide.\" Fact: Decorative visuals cause cognitive split-attention overload. Visuals must be strictly explanatory and structurally aligned with the verbal content.",
  limitationsAndControversies: "For highly abstract metaphysical philosophy (e.g. existentialism, symbolic logic), spatial visual representations can sometimes oversimplify subtle nuances.",

  howToRespond: "The Sketchnote Rule: For every major concept you write down, accompany it with a visual box-and-arrow schema, timeline, or conceptual icon.",
  psychologicalDefenses: [{"title":"The Concept Map Conversion","instruction":"Never leave notes as pure bullet points; convert relationships between ideas into spatial concept maps."},{"title":"The Pictionary Self-Test","instruction":"Can you draw the mechanism you just learned on a whiteboard without writing any full sentences?"}],

  practiceQuestions: [
    {
      id: 'pq_dual_coding_theory_01',
      difficulty: 'beginner',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A company wants employees to memorize safety protocol steps for chemical spills. Which training format will lead to the fastest, most error-free emergency execution?",
      scenarioText: "Employees must remember a 5-step sequence under high-stress conditions.",
      explanation: "Dual coding (pairing concise verbal steps with a sequential spatial flowchart) engages both cognitive channels, accelerating emergency retrieval.",
      antidoteAdvice: "Integrate clear visual schematics alongside concise verbal directives.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "A 10-page text-only handbook outlining the safety regulations in dense legal paragraphs.",
          text: "A 10-page text-only handbook outlining the safety regulations in dense legal paragraphs.",
          feedbackText: "Incorrect. Single-channel verbal overload causes memory failure under stress.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "A visual sequence diagram with numbered action boxes and 5-word directive labels placed at eye level.",
          text: "A visual sequence diagram with numbered action boxes and 5-word directive labels placed at eye level.",
          feedbackText: "Correct! Dual coding ensures high-speed, dual-channel recognition.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "An audio podcast explaining the history of chemical safety.",
          text: "An audio podcast explaining the history of chemical safety.",
          feedbackText: "Incorrect. Audio-only lacks spatial orientation.",
        }
      ],
    },
  ],

  reflectionPrompt: "Look at your last page of written notes. What percentage of that page is visual versus pure text, and how can you add a diagram right now?",
  tags: ['Mentalab Mind', 'learning_psychology'],
  relatedTopics: [],
  seoTitle: `${"Dual Coding Theory: Double-Barreled Memory Storage"} | Mentalab Mind`,
  seoDescription: "A cognitive theory positing that human memory operates via two separate, interconnected systems: a linguistic/verbal system and a non-verbal visual/spatial system.",
  canonicalUrl: '/mind/learning-psychology/dual-coding-theory',
  ogImageUrl: '/images/mind/dual-coding-theory.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Dual coding debunked the myth of rigid \"visual vs. verbal learners\". Every human brain (barring severe sensory impairment) possesses both processing channels. Text-heavy slides and monotonous monologues overload the verbal phonological loop while leaving the visuospatial sketchpad completely idle. Integrating concise diagrams, timelines, and spatial metaphors unlocks latent cognitive bandwidth.",
};

export const TOPIC_DUAL_CODING_THEORY_HINGLISH: MindTopicDetail = {
  ...TOPIC_DUAL_CODING_THEORY_EN,
  title: "Dual Coding Theory: Words Aur Picture Ki Double Power",
  subtitle: "Allan Paivio ki research: Sirf text padhne ke bajaye diagram ke sath padhne se dimaag 2 guna tez kyu yaad rakhta hai.",
  shortDescription: "Logogens aur Imagens: Dimaag ke verbal aur visual channels ko ek sath activate karke memory ko double-lock karna.",
  oneLineExplanation: "Ek word aur ek drawing: Agar dimaag ek bhool bhi jaye, to doosra rasta yaad dila deta hai.",
  summary30s: "1971 me psychologist Allan Paivio ne prove kiya ki dimaag me do alag-alag memory systems hote hain: Ek shabdo (words) ke liye aur doosra tasveeron (visuals) ke liye. Jab aap kisi concept ko padhne ke sath-sath uska ek chota sa rough diagram ya flowchart bana lete hain, to retention double ho jata hai.",
  coreConcept: "Agar aap sirf 500 words ka paragraph ratoge, to dimaag ka sirf verbal hissa thak jayega aur visual hissa so raha hoga. Jab aap ek flowchart ya concept map banate ho, to dimaag me do alag-alag chabiya (keys) ban jati hain. Exam me agar shabd bhool gaye, to diagram ka visual memory aapko bacha leta hai.",
  summary60s: "Yeh galatfehmi door karo ki \"main to visual learner hu, main padh nahi sakta\". Har insaan ka dimaag dono channels use karta hai. Boring PowerPoint presentations me log sirf bullet points bhar dete hain, jisse dimaag confuse ho jata hai. Ek simple sketch aur 3 bullet points poore paragraph se zyada asardaar hote hain.",
  quickTakeaways: ["Dimaag me shabdo aur visuals ke do alag-alag processing units hote hain","Dono channels ko use karne se yaad rakhne ki capacity 2x ho jati hai","Text ke sath relevant diagram banao, faltu stock photos lagane se bacho","Jab bhi koi mushkil process padho, use turant ek flowchart me badal do"],
  howItWorks: "Concept padha -> Verbal memory me gaya -> Hath se rough flowchart banaya -> Visual memory me gaya -> Dono connect ho gaye -> Exam me bullet-proof recall mila.",
  howToRespond: "Rough Sketch banao: Notes banate waqt har page par kam se kam ek box-and-arrow diagram ya graph zaroor banao.",
  practiceQuestions: [
    {
      ...TOPIC_DUAL_CODING_THEORY_EN.practiceQuestions[0],
      prompt: "Chemical spill se bachne ke 5 steps sikhane hain. Kaunsa tareeqa emergency me sabse fast yaad aayega?",
      explanation: "Numbered visual flowchart ke sath 3-3 shabdo ke steps (Dual Coding) dimaag me turant trigger hote hain.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "10 page ka lamba English essay padhana.",
          text: "10 page ka lamba English essay padhana.",
          feedbackText: "Galat. Emergency me lamba text dimaag block kar deta hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Ek simple visual flowchart jisme step-by-step cartoon aur short labels ho.",
          text: "Ek simple visual flowchart jisme step-by-step cartoon aur short labels ho.",
          feedbackText: "Sahi! Dual coding emergency situations me best perform karti hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Employees ko phone par audio sunana.",
          text: "Employees ko phone par audio sunana.",
          feedbackText: "Galat. Audio spatial steps nahi dikha sakta.",
        }
      ],
    },
  ],
  seoTitle: `${"Dual Coding Theory: Words Aur Picture Ki Double Power"} | Mentalab Mind`,
  seoDescription: "Logogens aur Imagens: Dimaag ke verbal aur visual channels ko ek sath activate karke memory ko double-lock karna.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_DUAL_CODING_THEORY_EN,
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

export const TOPIC_DUAL_CODING_THEORY: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_DUAL_CODING_THEORY_EN,
  hinglish: TOPIC_DUAL_CODING_THEORY_HINGLISH,
  hi: createLocalizedRecord('hi', "द्वि-कोडिंग सिद्धांत (Dual Coding Theory)", "शाब्दिक भाषा और दृश्य छवियों के दोहरे संयोजन से स्मृति और समझ को दोगुना करने का संज्ञानात्मक सिद्धांत।", ["मस्तिष्क शब्दों और छवियों को दो स्वतंत्र समानांतर प्रणालियों में संसाधित करता है","द्वि-कोडिंग प्रत्येक अवधारणा के लिए दो स्वतंत्र पुनर्प्राप्ति मार्ग बनाती है","घने पैराग्राफ को हमेशा फ्लोचार्ट और रेखाचित्रों में बदलें"]),
  gu: createLocalizedRecord('gu', "ડ્યુઅલ કોડિંગ થિયરી (દ્વિ-કોડિંગ સિદ્ધાંત)", "શબ્દો અને ચિત્રોના સંયોજન દ્વારા યાદશક્તિને બમણી કરવાની મનોવૈજ્ઞાનિક પદ્ધતિ.", ["શબ્દો અને આકૃતિઓ સાથે શીખો","નોટ્સમાં ફ્લોચાર્ટ બનાવો","ડબલ મેમરી પાથવે બનાવો"]),
  mr: createLocalizedRecord('mr', "दुहेरी संकेतन सिद्धांत (Dual Coding Theory)", "शब्द आणि दृश्य चित्रांच्या संयोगातून स्मरणशक्ती दुप्पट करण्याचे संज्ञानात्मक मानसशास्त्र.", ["शब्द आणि चित्रे एकत्र वापरा","अभ्यासात आकृत्यांचा समावेश करा","स्मरणशक्ती दुप्पट करा"]),
  te: createLocalizedRecord('te', "డ్యూయల్ కోడింగ్ సిద్ధాంతం (ద్విముఖ సంకేతీకరణ)", "పదాలు మరియు దృశ్య చిత్రాల కలయికతో జ్ఞాపకశక్తిని రెట్టింపు చేసుకునే విజ్ఞానశాస్త్రం.", ["పదాలు మరియు బొమ్మలను కలపండి","ఫ్లోచార్ట్‌లు గీయండి","జ్ఞాపకశక్తిని పెంచుకోండి"]),
  ta: createLocalizedRecord('ta', "இருவழி குறியீட்டு கோட்பாடு (Dual Coding Theory)", "சொற்கள் மற்றும் காட்சிப் படங்களை இணைத்து நினைவாற்றலை இரட்டிப்பாக்கும் அறிவாற்றல் முறை.", ["சொற்களையும் படங்களையும் இணையுங்கள்","வரைபடங்களை பயன்படுத்துங்கள்","நினைவாற்றலை இரட்டிப்பாக்குங்கள்"]),
  kn: createLocalizedRecord('kn', "ದ್ವಿಮುಖ ಕೋಡಿಂಗ್ ಸಿದ್ಧಾಂತ (Dual Coding Theory)", "ಪದಗಳು ಮತ್ತು ದೃಶ್ಯ ಚಿತ್ರಗಳನ್ನು ಸಂಯೋಜಿಸಿ ನೆನಪಿನ ಶಕ್ತಿಯನ್ನು ದ್ವಿಗುಣಗೊಳಿಸುವ ಜ್ಞಾನಗ್ರಹಣ ತಂತ್ರ.", ["ಪದಗಳು ಮತ್ತು ಚಿತ್ರಗಳನ್ನು ಒಟ್ಟಿಗೆ ಬಳಸಿ","ರೇಖಾಚಿತ್ರಗಳನ್ನು ರಚಿಸಿ","ನೆನಪಿನ ಶಕ್ತಿ ಹೆಚ್ಚಿಸಿಕೊಳ್ಳಿ"]),
  ml: createLocalizedRecord('ml', "ഡ്യുവൽ കോഡിംഗ് സിദ്ധാന്തം (ഇരട്ട കോഡിംഗ് രീതി)", "വാക്കുകളും ദൃശ്യ ചിത്രങ്ങളും സംയോജിപ്പിച്ച് ഓർമ്മശക്തി ഇരട്ടിയാക്കുന്ന മനശാസ്ത്ര തത്വം.", ["വാക്കുകളും ചിത്രങ്ങളും ഒരുമിച്ച് ഉപയോഗിക്കുക","ഫ്ലോചാർട്ടുകൾ വരയ്ക്കുക","ഓർമ്മശക്തി ഇരട്ടിയാക്കുക"]),
  bn: createLocalizedRecord('bn', "দ্বৈত কোডিং তত্ত্ব (Dual Coding Theory)", "শব্দ ও দৃশ্যমান ছবির যুগলবন্দিতে স্মৃতিশক্তি ও ধারণক্ষমতা দ্বিগুণ করার মনস্তাত্ত্বিক কাঠামো।", ["শব্দ ও ছবি একসাথে ব্যবহার করুন","নোটের সাথে ফ্লোচার্ট আঁকুন","দ্বিগুণ মেমরি পাথওয়ে তৈরি করুন"]),
  pa: createLocalizedRecord('pa', "ਦੋਹਰੀ ਕੋਡਿੰਗ ਥਿਊਰੀ (Dual Coding Theory)", "ਸ਼ਬਦਾਂ ਅਤੇ ਤਸਵੀਰਾਂ ਦੇ ਸੁਮੇਲ ਨਾਲ ਯਾਦਦਾਸ਼ਤ ਨੂੰ ਦੁੱਗਣਾ ਕਰਨ ਦਾ ਵਿਗਿਆਨਕ ਸਿਧਾਂਤ।", ["ਸ਼ਬਦ ਅਤੇ ਚਿੱਤਰ ਇਕੱਠੇ ਵਰਤੋ","ਨੋਟਸ ਵਿੱਚ ਡਾਇਗ੍ਰਾਮ ਬਣਾਓ","ਯਾਦਦਾਸ਼ਤ ਦੁੱਗਣੀ ਕਰੋ"]),
  ur: createLocalizedRecord('ur', "دوہری کوڈنگ کا نظریہ (Dual Coding Theory)", "الفاظ اور بصری تصاویر کے اشتراک سے یادداشت کی صلاحیت کو دوگنا کرنے کا علمی طریقہ۔", ["الفاظ اور خاکوں کا ملاپ کریں","نوٹس میں فلو چارٹ بنائیں","یادداشت کو دوگنا مضبوط کریں"]),
  or: createLocalizedRecord('or', "ଦ୍ୱି-କୋଡିଂ ତତ୍ତ୍ୱ (Dual Coding Theory)", "ଶବ୍ଦ ଓ ଚିତ୍ରର ସମନ୍ୱୟରେ ସ୍ମରଣ ଶକ୍ତିକୁ ଦ୍ୱିଗୁଣିତ କରିବାର ମାନସିକ ବିଜ୍ଞାନ।", ["ଶବ୍ଦ ଓ ଚିତ୍ର ଏକାଠି ବ୍ୟବହାର କରନ୍ତୁ","ଫ୍ଲୋଚାର୍ଟ ତିଆରି କରନ୍ତୁ","ସ୍ମୃତି ଶକ୍ତି ଦୃଢ଼ କରନ୍ତୁ"]),
  as: createLocalizedRecord('as', "দ্বৈত কোডিং তত্ত্ব (Dual Coding Theory)", "শব্দ আৰু দৃশ্যমান চিত্ৰৰ সংমিশ্ৰণেৰে স্মৃতিশক্তি দুগুণ কৰাৰ জ্ঞানমূলক বৈজ্ঞানিক তত্ত্ব।", ["শব্দ আৰু ছবি একেলগে ব্যৱহাৰ কৰক","নোটৰ লগত চিত্ৰ আঁকক","স্মৃতিশক্তি দুগুণ বৃদ্ধি কৰক"]),
};
