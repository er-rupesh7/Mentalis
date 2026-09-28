import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_INTERLEAVING_EFFECT_EN: MindTopicDetail = {
  id: 'interleaving_effect',
  categoryId: 'learning_psychology',
  slug: 'interleaving-effect',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 5,
  viewCount: 3400,
  shareCount: 255,
  bookmarkCount: 545,
  title: "The Interleaving Effect: Mixing Skills for Deep Mastery",
  subtitle: "Robert Bjork and Nate Kornell’s cognitive research on why blocked practice feels easier but interleaving wins the exam.",
  shortDescription: "A learning strategy where related topics, problem types, or motor skills are mixed together during study sessions rather than practiced in isolated blocks.",
  oneLineExplanation: "Stop practicing AAA-BBB-CCC; train ABC-CAB-BCA to teach your brain discrimination.",

  summary30s: "Discovered in motor learning by John Shea and expanded to cognitive education by UCLA psychologists Robert Bjork and Nate Kornell, interleaving challenges our intuition. When students practice one type of math problem or art style repeatedly (\"blocked practice\"), they feel confident. But on exams, interleaved learners outperform blocked learners by up to 43%!",
  coreConcept: "Blocked practice gives an illusion of mastery because working memory keeps the solution formula loaded in active cache. You don’t have to identify *which* formula to use; you just execute. Interleaving forces the brain to repeatedly retrieve different schemas, teaching the critical metacognitive skill of *discriminating* between problem categories.",
  summary60s: "While interleaving feels slower, clunky, and frustrating in the moment (a classic \"desirable difficulty\"), it builds durable synaptic pathways in long-term memory. It prepares students for real-world scenarios and high-stakes exams (like JEE, NEET, or UPSC) where problems never arrive in neatly labeled chapters.",
  quickTakeaways: ["Blocked practice creates an illusion of competence; interleaving produces actual mastery","Interleaving forces the brain to identify which rule to apply, not just execute it","Exams and real life are naturally interleaved, not segmented into neat chapters","Embrace the frustrating friction of mixing topics; that difficulty is where learning happens"],

  whyItHappens: "Discriminative contrast: juxtaposing different categories highlights subtle distinguishing features that isolated review obscures.",
  evolutionaryMechanism: "Hunters did not encounter tracks, weather changes, and predators in isolated blocks; ancestral survival demanded rapid shifting between perceptual categories.",

  howItWorks: "Study Topic A -> Switch to Topic B before comfort sets in -> Brain forced to reload Topic B schema -> Switch to Topic C -> Brain compares contrasts -> Deep generalizable neural representations form.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Blocked Practice (Illusion) vs. Interleaving (Real Mastery)",
    description: "Kornell & Bjork’s learning retention comparison.",
    analogySideA: {
      label: "Blocked Practice (AAA-BBB-CCC)",
      detail: "Feels smooth during practice; rapid performance decline during delayed testing (38% exam accuracy).",
    },
    analogySideB: {
      label: "Interleaved Practice (ABC-BCA-CAB)",
      detail: "Feels difficult and error-prone during study; massive long-term retention surge (77% exam accuracy).",
    },
  },

  researchSummary: "Kornell & Bjork (2008, Psychological Science) and Rohrer & Taylor (2007, Instructional Science) proved interleaved problem solving dramatically outperforms blocked problem solving on delayed tests.",
  references: [
    {
      id: 'ref_interleaving_effect_01',
      title: "Learning Concepts and Categories: Is Spacing the \"Enemy of Induction\"?",
      citation: "Kornell, N., & Bjork, R. A. (2008). Psychological Science, 19(6), 585–592.",
      authors: "Kornell, N. & Bjork, R. A.",
      publicationYear: 2008,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1111/j.1467-9280.2008.02127.x",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_interleaving_effect_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The JEE Physics Chapter Trap in Kota",
      narrativeContext: "Aniket spent 3 weeks in Kota solving 200 consecutive kinematics problems. He scored 95% on chapter tests. But during the full-syllabus mock exam where kinematics, thermodynamics, and electromagnetism appeared randomly, he froze, unable to identify which formulas applied.",
      biasInAction: "Aniket fell into the blocked practice trap: he mastered formula execution but never practiced formula discrimination.",
      optimalResponse: "Shuffle problem sets: combine 5 mechanics, 5 optics, and 5 electrodynamics problems on index cards and draw them at random.",
      reflectionPrompt: "When preparing for a presentation or test, do you repeatedly polish one section to perfection before moving to the next, or do you cycle through all areas?",
    },
  ],

  examples: [
    {
      id: 'ex_interleaving_effect_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The JEE Physics Chapter Trap in Kota",
      description: "Aniket spent 3 weeks in Kota solving 200 consecutive kinematics problems. He scored 95% on chapter tests. But during the full-syllabus mock exam where...",
      takeaway: "Blocked practice creates an illusion of competence; interleaving produces actual mastery",
    },
  ],

  howToRecognize: "Feeling very confident when doing 30 practice problems of the exact same type, followed by total confusion on cumulative practice exams.",
  whereYouEncounterIt: "Competitive entrance exam preparation (JEE/NEET/UPSC), coding interview prep (LeetCode), musical instrument practice, and sports training.",
  commonMisconceptions: "Myth: \"Interleaving confuses beginners and ruins fundamentals.\" Fact: Once basic conceptual definitions are grasped, immediate interleaving accelerates conceptual boundary mapping.",
  limitationsAndControversies: "When learning a completely novel motor skill from zero (e.g. holding a violin bow for the first time), brief blocked practice is necessary before interleaving can begin.",

  howToRespond: "The 3-Card Shuffle: Divide study time into 20-minute blocks covering three related but distinct subjects, alternating continuously.",
  psychologicalDefenses: [{"title":"The Problem Set Blender","instruction":"Never do 50 problems from the same textbook chapter in one sitting; mix 10 problems from Chapter 1, 10 from Chapter 3, and 10 from Chapter 6."},{"title":"The Flashcard Roulette","instruction":"Shuffle flashcards from different subjects or modules together so your brain never knows what category is coming next."}],

  practiceQuestions: [
    {
      id: 'pq_interleaving_effect_01',
      difficulty: 'intermediate',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A tennis coach wants a student to master forehands, backhands, and volleys for tournament play. Which practice schedule will produce the highest match performance?",
      scenarioText: "The student has 60 minutes of court practice available.",
      explanation: "Interleaved random practice simulates real match conditions, forcing motor program retrieval on every shot, which yields superior transfer compared to blocked drills.",
      antidoteAdvice: "Distribute practice across randomized shot sequences rather than repetitive blocks.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "20 minutes of forehands only, followed by 20 minutes of backhands, then 20 minutes of volleys.",
          text: "20 minutes of forehands only, followed by 20 minutes of backhands, then 20 minutes of volleys.",
          feedbackText: "Incorrect. This blocked practice produces poor in-game adaptation.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Randomly alternating forehands, backhands, and volleys with unpredictable ball feeds throughout the 60 minutes.",
          text: "Randomly alternating forehands, backhands, and volleys with unpredictable ball feeds throughout the 60 minutes.",
          feedbackText: "Correct! Interleaved motor training builds superior game-state retrieval.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "60 minutes of only forehands until the motion is completely robotic.",
          text: "60 minutes of only forehands until the motion is completely robotic.",
          feedbackText: "Incorrect. This creates rigid, fragile motor habits.",
        }
      ],
    },
  ],

  reflectionPrompt: "How can you redesign your current study or work routine to intentionally mix different categories of tasks instead of doing them in long monotonous blocks?",
  tags: ['Mentalab Mind', 'learning_psychology'],
  relatedTopics: [],
  seoTitle: `${"The Interleaving Effect: Mixing Skills for Deep Mastery"} | Mentalab Mind`,
  seoDescription: "A learning strategy where related topics, problem types, or motor skills are mixed together during study sessions rather than practiced in isolated blocks.",
  canonicalUrl: '/mind/learning-psychology/interleaving-effect',
  ogImageUrl: '/images/mind/interleaving-effect.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "While interleaving feels slower, clunky, and frustrating in the moment (a classic \"desirable difficulty\"), it builds durable synaptic pathways in long-term memory. It prepares students for real-world scenarios and high-stakes exams (like JEE, NEET, or UPSC) where problems never arrive in neatly labeled chapters.",
};

export const TOPIC_INTERLEAVING_EFFECT_HINGLISH: MindTopicDetail = {
  ...TOPIC_INTERLEAVING_EFFECT_EN,
  title: "The Interleaving Effect: Mix Karke Padhne Ka Jaadu",
  subtitle: "Robert Bjork ki research: Ek hi chapter ke 100 questions karne se exam me marks kyu nahi aate.",
  shortDescription: "Blocked vs Interleaved learning: Alag-alag topics aur problem types ko mix karke padhne se dimaag formula pehchanna seekhta hai.",
  oneLineExplanation: "AAA-BBB-CCC padhna asaan lagta hai, par exam me ABC-BCA-CAB padhne wala hi topper banta hai.",
  summary30s: "UCLA ke professor Robert Bjork ne dekha ki jab students ek hi type ke 50 math problems karte hain (Blocked Practice), to unhe lagta hai \"sab samajh aa gaya\". Par exam me mix questions aate hi wo blank ho jate hain! Interleaving ka matlab hai 3 alag chapters ke questions mix karke solve karna.",
  coreConcept: "Jab aap ek hi chapter ke questions karte ho, to dimaag ko sochna nahi padta ki kaunsa formula lagega; wo bina soche bas calculate karta hai. Jab questions mixed hote hain, to dimaag ko pehle \"category pehchanni\" padti hai. Is friction se dimaag me deep learning hoti hai.",
  summary60s: "Kota me JEE aur NEET ke bacche yahi galti karte hain: Ek hafte tak sirf Kinematics karte hain aur test me 90% laate hain. Par jab full-syllabus mock exam hota hai to dimaag confuse ho jata hai. Interleaving shuru me mushkil aur irritating lagti hai, par exam ke din yahi rank dilati hai.",
  quickTakeaways: ["Ek hi topic baar-baar padhne se dimaag ko nakli confidence hota hai (Illusion of competence)","Interleaving dimaag ko formula chunna sikhati hai, sirf ratna nahi","Real exam aur real life hamesha mixed hoti hai, chapter-wise nahi","Padhte waqt aane wali thodi si pareshani hi sachhi learning ka saboot hai"],
  howItWorks: "Topic A padha -> Jaise hi easy laga, Topic B par switch kiya -> Dimaag ne zor lagaya -> Topic C par gaye -> Dimaag ne teeno ke difference samjhe -> Permanent retention hua.",
  howToRespond: "Shuffle karo: Homework karte waqt ek hi exercise ke 30 questions mat karo. Pichle 3 chapters ke 10-10 questions mix karke solve karo.",
  practiceQuestions: [
    {
      ...TOPIC_INTERLEAVING_EFFECT_EN.practiceQuestions[0],
      prompt: "Exam ke liye revision karna hai: Plan A hai roz ek subject poora padhna (Monday Physics, Tuesday Chemistry). Plan B hai roz teeno subjects ke 2-2 ghante mix karke padhna. Best kaunsa hai?",
      explanation: "Plan B (Interleaving) dimaag ko concepts ke beech switch karne ki aadat dalta hai, jisse exam me retention 40% badh jata hai.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Plan A, kyuki ek subject par focus karne se flow banta hai.",
          text: "Plan A, kyuki ek subject par focus karne se flow banta hai.",
          feedbackText: "Galat. Flow achha lagta hai par retention poor hota hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Plan B, kyuki subjects ko mix karne se dimaag ki discrimination ability aur retention dono badhte hain.",
          text: "Plan B, kyuki subjects ko mix karne se dimaag ki discrimination ability aur retention dono badhte hain.",
          feedbackText: "Sahi! Yahi Interleaving Effect ka scientific basis hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Padhai chhod kar sirf YouTube par strategy videos dekhna.",
          text: "Padhai chhod kar sirf YouTube par strategy videos dekhna.",
          feedbackText: "Galat. Yeh procrastination hai.",
        }
      ],
    },
  ],
  seoTitle: `${"The Interleaving Effect: Mix Karke Padhne Ka Jaadu"} | Mentalab Mind`,
  seoDescription: "Blocked vs Interleaved learning: Alag-alag topics aur problem types ko mix karke padhne se dimaag formula pehchanna seekhta hai.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_INTERLEAVING_EFFECT_EN,
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

export const TOPIC_INTERLEAVING_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_INTERLEAVING_EFFECT_EN,
  hinglish: TOPIC_INTERLEAVING_EFFECT_HINGLISH,
  hi: createLocalizedRecord('hi', "मिश्रित अभ्यास प्रभाव (The Interleaving Effect)", "एक ही विषय का लगातार अभ्यास करने के बजाय विभिन्न विषयों या समस्याओं को मिलाकर अध्ययन करने से होने वाली दीर्घकालिक स्मृति वृद्धि।", ["एकल विषय अभ्यास सीखने का झूठा आत्मविश्वास पैदा करता है","मिश्रित अभ्यास मस्तिष्क को सही नियम और सूत्र पहचानना सिखाता है","परीक्षा और वास्तविक जीवन स्वाभाविक रूप से मिश्रित होते हैं"]),
  gu: createLocalizedRecord('gu', "ઇન્ટરલીવિંગ અસર (મિશ્રિત અભ્યાસનો પ્રભાવ)", "એક જ વિષયને બદલે જુદા જુદા પ્રકરણો ભેગા કરીને અભ્યાસ કરવાની વૈજ્ઞાનિક પદ્ધતિ.", ["મિશ્રિત પ્રશ્નો સોલ્વ કરો","ખોટા આત્મવિશ્વાસથી બચો","વાસ્તવિક પરીક્ષા માટે તૈયાર થાઓ"]),
  mr: createLocalizedRecord('mr', "मिश्रित सराव प्रभाव (Interleaving Effect)", "एकाच प्रकारच्या अभ्यासाऐवजी विविध विषयांचे प्रश्न एकत्र सोडवून मेंदूची आकलन क्षमता वाढवणे.", ["मिश्रित अभ्यास दीर्घकालीन फायद्याचा ठरतो","सूत्रांमधील फरक ओळखायला शिका","परीक्षेसाठी सर्वोत्तम पद्धत"]),
  te: createLocalizedRecord('te', "ఇంటర్‌లీవింగ్ ప్రభావం (మిశ్రమ అభ్యాసం)", "ఒకే అంశాన్ని కాకుండా విభిన్న పాఠ్యాంశాలను కలిపి చదవడం వల్ల కలిగే దీర్ఘకాలిక జ్ఞాపకశక్తి.", ["విభిన్న అంశాలను కలిపి సాధన చేయండి","తప్పుడు ఆత్మవిశ్వాసంలో పడవద్దు","పరీక్షలలో మెరుగైన ఫలితాలు పొందండి"]),
  ta: createLocalizedRecord('ta', "கலப்பு பயிற்சி விளைவு (Interleaving Effect)", "ஒரே பாடத்தை தொடர்ந்து படிக்காமல் வெவ்வேறு பாடங்களை கலந்து படிப்பதால் ஏற்படும் ஆழமான புரிதல்.", ["பாடங்களை கலந்து படியுங்கள்","போலி நம்பிக்கையை தவிருங்கள்","தேர்வுகளில் அதிக மதிப்பெண் பெறுங்கள்"]),
  kn: createLocalizedRecord('kn', "ಮಿಶ್ರಿತ ಕಲಿಕೆಯ ಪರಿಣಾಮ (Interleaving Effect)", "ಒಂದೇ ವಿಷಯವನ್ನು ನಿರಂತರವಾಗಿ ಕಲಿಯುವ ಬದಲು ವಿಭಿನ್ನ ಅಧ್ಯಾಯಗಳನ್ನು ಬೆರೆಸಿ ಅಭ್ಯಾಸ ಮಾಡುವ ತಂತ್ರ.", ["ಮಿಶ್ರಿತ ಪ್ರಶ್ನೆಗಳನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ","ನಕಲಿ ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ದೂರವಿರಿ","ದೀರ್ಘಕಾಲಿಕ ನೆನಪಿಗೆ ಸಹಕಾರಿ"]),
  ml: createLocalizedRecord('ml', "ഇന്റർലീവിംഗ് പ്രഭാവം (മിശ്രിത പഠന രീതി)", "ഒറ്റ വിഷയത്തിന് പകരം വ്യത്യസ്ത വിഷയങ്ങൾ ഇടകലർത്തി പഠിക്കുന്നതിലൂടെ ലഭിക്കുന്ന ദീർഘകാല ഓർമ്മശക്തി.", ["വിഷയങ്ങൾ ഇടകലർത്തി പഠിക്കുക","തെറ്റായ ആത്മവിശ്വാസം ഒഴിവാക്കുക","പരീക്ഷകളിൽ മികച്ച വിജയം നേടുക"]),
  bn: createLocalizedRecord('bn', "মিশ্রিত অনুশীলন প্রভাব (Interleaving Effect)", "একটি নির্দিষ্ট বিষয় একনাগাড়ে না পড়ে বিভিন্ন অধ্যায় বা ধারণার সংমিশ্রণে অনুশীলনের বৈজ্ঞানিক সুফল।", ["অধ্যায় মিশিয়ে অনুশীলন করুন","ভ্রান্ত আত্মবিশ্বাস এড়িয়ে চলুন","পরীক্ষার জন্য আদর্শ প্রস্তুতি নিন"]),
  pa: createLocalizedRecord('pa', "ਰਲਵਾਂ ਅਭਿਆਸ ਪ੍ਰਭਾਵ (Interleaving Effect)", "ਇੱਕੋ ਵਿਸ਼ੇ ਨੂੰ ਲਗਾਤਾਰ ਪੜ੍ਹਨ ਦੀ ਬਜਾਏ ਵੱਖ-ਵੱਖ ਪਾਠਾਂ ਨੂੰ ਮਿਲਾ ਕੇ ਪੜ੍ਹਨ ਦੀ ਵਿਗਿਆਨਕ ਵਿਧੀ।", ["ਵੱਖ-ਵੱਖ ਵਿਸ਼ਿਆਂ ਦਾ ਰਲਵਾਂ ਅਭਿਆਸ ਕਰੋ","ਝੂਠੇ ਆਤਮਵਿਸ਼ਵਾਸ ਤੋਂ ਬਚੋ","ਇਮਤਿਹਾਨ ਲਈ ਬਿਹਤਰੀਨ ਢੰਗ"]),
  ur: createLocalizedRecord('ur', "مخلوط مشق کا اثر (Interleaving Effect)", "ایک ہی سبق کو بار بار پڑھنے کے بجائے مختلف اسباق کو ملا کر مشق کرنے سے ذہن کا گہرا فہم۔", ["اسباق کو ملا کر مشق کریں","جھوٹے اعتماد کے فریب سے بچیں","امتحانات میں دیرپا کامیابی پائیں"]),
  or: createLocalizedRecord('or', "ମିଶ୍ରିତ ଅଭ୍ୟାସ ପ୍ରଭାବ (Interleaving Effect)", "ଗୋଟିଏ ବିଷୟ ଲଗାତାର ନପଢ଼ି ବିଭିନ୍ନ ଅଧ୍ୟାୟକୁ ମିଶାଇ ଅଭ୍ୟାସ କରିବାର ବୈଜ୍ଞାନିକ ଉପକାରିତା।", ["ବିଭିନ୍ନ ବିଷୟ ମିଶାଇ ଅଭ୍ୟାସ କରନ୍ତୁ","ମିଥ୍ୟା ଆତ୍ମବିଶ୍ୱାସରୁ ଦୂରେଇ ରୁହନ୍ତୁ","ଦୀର୍ଘକାଳୀନ ସ୍ମୃତି ବୃଦ୍ଧି କରନ୍ତୁ"]),
  as: createLocalizedRecord('as', "মিশ্ৰিত অনুশীলনৰ প্ৰভাৱ (Interleaving Effect)", "এটা বিষয় একেৰাহে নপঢ়ি বিভিন্ন বিষয় বা পাঠ মিহলাই অনুশীলন কৰাৰ বৈজ্ঞানিক ফলপ্ৰসূতা।", ["বিষয়বোৰ মিহলাই পঢ়ক","ভ্ৰান্ত আত্মবিশ্বাস পৰিহাৰ কৰক","পৰীক্ষাৰ বাবে উপযুক্ত প্ৰস্তুতি লওক"]),
};
