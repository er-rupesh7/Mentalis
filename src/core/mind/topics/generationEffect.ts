import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_GENERATION_EFFECT_EN: MindTopicDetail = {
  id: 'generation_effect',
  categoryId: 'learning_psychology',
  slug: 'generation-effect',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 6,
  viewCount: 3520,
  shareCount: 270,
  bookmarkCount: 570,
  title: "The Generation Effect: Active Production vs. Passive Consumption",
  subtitle: "Norman Slamecka’s discovery on why generating answers produces vastly superior memory to reading them.",
  shortDescription: "The robust cognitive phenomenon where information is significantly better remembered if it is generated from one's own mind rather than simply read or heard.",
  oneLineExplanation: "Your brain remembers what it builds, not what it passively looks at.",

  summary30s: "Discovered in 1978 by Norman Slamecka and Peter Graf, the Generation Effect proves that reading a textbook, highlighting notes, and watching lecture videos are among the least effective ways to learn. In Slamecka’s experiments, subjects who had to fill in missing letters or generate antonyms recalled 300% more information than those who simply read the pairs.",
  coreConcept: "Passive reading requires minimal cognitive depth; photons hit your retinas, your semantic parser recognizes the words, and working memory discards them. When you *generate* an answer, your brain activates semantic networks, forms relational associations, and exercises motor and lexical retrieval circuits, embedding rich multi-modal memory traces.",
  summary60s: "Modern students spend 80% of their study time re-reading notes and highlighting paragraphs—activities that produce an illusion of familiarity without durable encoding. Shifting to generation techniques (summarizing from memory, flashcard recall, teaching out loud, completing partial problem steps) drastically cuts study time while multiplying retention.",
  quickTakeaways: ["Generating an answer produces up to 3x stronger memory traces than reading it","Highlighting and re-reading create familiarity, not durable comprehension","When your brain struggles to pull information out of memory, neural encoding cements","The antidote to passive study is closing the book and writing a blank-sheet summary"],

  whyItHappens: "Depth of processing: self-generation requires semantic searching, associative retrieval, and motor execution, creating multifaceted memory anchors.",
  evolutionaryMechanism: "Hunters learned which plants were poisonous by trial and active problem-solving, not by listening to abstract passive lectures.",

  howItWorks: "Prompt given -> Book closed -> Brain initiates search across hippocampal networks -> Partial associations linked -> Answer formulated internally -> Answer written down -> Memory trace consolidated.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Passive Recognition vs. Active Self-Generation",
    description: "Slamecka & Graf’s experimental recall comparison.",
    analogySideA: {
      label: "Read Condition (Passive)",
      detail: "Read word pair: \"Hot - Cold\". Takes 1 second; zero cognitive strain; 22% delayed recall.",
    },
    analogySideB: {
      label: "Generate Condition (Active)",
      detail: "Generate word pair: \"Hot - C___\" (Opposite). Brain solves puzzle; 68% delayed recall! (3x increase).",
    },
  },

  researchSummary: "Slamecka & Graf (1978, Journal of Verbal Learning and Verbal Behavior) and Karpicke & Roediger (2008, Science) demonstrated that active generation and testing produce exponentially superior retention to repeated studying.",
  references: [
    {
      id: 'ref_generation_effect_01',
      title: "The Generation Effect: Delineation of a Phenomenon",
      citation: "Slamecka, N. J., & Graf, P. (1978). J. of Verbal Learning and Verbal Behavior, 17(5), 592–604.",
      authors: "Slamecka, N. J. & Graf, P.",
      publicationYear: 1978,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1016/S0022-5371(78)90353-6",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_generation_effect_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The UPSC Highlighter Delusion in Mukherjee Nagar",
      narrativeContext: "Rohan studied Indian Polity in Mukherjee Nagar, Delhi, for 10 hours a day, covering his Laxmikanth book in yellow and green highlighters. When asked a basic constitutional question during a peer mock interview, he stuttered, remembering that the answer was on a left-hand page in green ink, but unable to generate the facts.",
      biasInAction: "Rohan mistook visual recognition for retrieval mastery: highlighting created cognitive fluency without forcing self-generation.",
      optimalResponse: "Close the textbook after reading a chapter. Take a blank A4 sheet of paper and generate the constitutional framework, articles, and case laws entirely from memory.",
      reflectionPrompt: "When you study or read an important article, do you immediately test your recall, or do you nod along thinking \"yes, that makes sense\"?",
    },
  ],

  examples: [
    {
      id: 'ex_generation_effect_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The UPSC Highlighter Delusion in Mukherjee Nagar",
      description: "Rohan studied Indian Polity in Mukherjee Nagar, Delhi, for 10 hours a day, covering his Laxmikanth book in yellow and green highlighters. When asked a...",
      takeaway: "Generating an answer produces up to 3x stronger memory traces than reading it",
    },
  ],

  howToRecognize: "Looking at your notes and thinking \"I know this\", but finding yourself completely unable to explain the concept without looking at the page.",
  whereYouEncounterIt: "College exam revision, language vocabulary acquisition, software code memorization, and executive public speaking preparation.",
  commonMisconceptions: "Myth: \"I learn best by reading and absorbing quietly.\" Fact: While reading is the first input, generation is neurologically mandatory for memory consolidation across all human brains.",
  limitationsAndControversies: "Generation cannot occur if the learner has zero baseline knowledge; you must comprehend the foundational idea before you can generate answers from it.",

  howToRespond: "The Blank-Page Protocol: After reading any chapter or research paper, immediately close it and write down everything you remember on a blank sheet for 5 uninterrupted minutes.",
  psychologicalDefenses: [{"title":"The Fill-in-the-Blank Transformation","instruction":"Turn textbook notes into self-test questions with blanks instead of full highlighted sentences."},{"title":"The Rubber Duck Teach-Out","instruction":"Explain the concept aloud to an inanimate object without consulting your notes, forcing verbal generation of every logical step."}],

  practiceQuestions: [
    {
      id: 'pq_generation_effect_01',
      difficulty: 'beginner',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "Which student will retain the most historical facts 3 months after their final examination?",
      scenarioText: "Both students invest exactly 10 hours of study time.",
      explanation: "Generating information through flashcards and practice essays forces active memory retrieval and consolidation, outperforming passive re-reading.",
      antidoteAdvice: "Replace re-reading study time with active generation and self-testing.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Student A, who re-read the textbook 4 times and highlighted the key dates with neon pens.",
          text: "Student A, who re-read the textbook 4 times and highlighted the key dates with neon pens.",
          feedbackText: "Incorrect. Re-reading creates shallow familiarity that fades in days.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Student B, who read the text once, closed the book, and spent the remaining time writing summary essays from memory.",
          text: "Student B, who read the text once, closed the book, and spent the remaining time writing summary essays from memory.",
          feedbackText: "Correct! The Generation Effect produces durable long-term storage.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Both will retain the exact same amount because both studied for 10 hours.",
          text: "Both will retain the exact same amount because both studied for 10 hours.",
          feedbackText: "Incorrect. The cognitive mechanism of study matters vastly more than raw time.",
        }
      ],
    },
  ],

  reflectionPrompt: "If you threw away your highlighters today, what active generation technique would you replace them with?",
  tags: ['Mentalab Mind', 'learning_psychology'],
  relatedTopics: [],
  seoTitle: `${"The Generation Effect: Active Production vs. Passive Consumption"} | Mentalab Mind`,
  seoDescription: "The robust cognitive phenomenon where information is significantly better remembered if it is generated from one's own mind rather than simply read or heard.",
  canonicalUrl: '/mind/learning-psychology/generation-effect',
  ogImageUrl: '/images/mind/generation-effect.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Modern students spend 80% of their study time re-reading notes and highlighting paragraphs—activities that produce an illusion of familiarity without durable encoding. Shifting to generation techniques (summarizing from memory, flashcard recall, teaching out loud, completing partial problem steps) drastically cuts study time while multiplying retention.",
};

export const TOPIC_GENERATION_EFFECT_HINGLISH: MindTopicDetail = {
  ...TOPIC_GENERATION_EFFECT_EN,
  title: "The Generation Effect: Khud Banane Se Hi Yaad Rehta Hai",
  subtitle: "Norman Slamecka ki research: Notes ko baar-baar padhne aur highlight karne se kuch yaad kyu nahi rehta.",
  shortDescription: "Passive reading vs Active generation: Dimaag wahi yaad rakhta hai jo wo khud generate karta hai, na ki jo wo sirf dekhta hai.",
  oneLineExplanation: "Kitab kholi to sab aata hai, kitab band ki to dimaag khali.",
  summary30s: "1978 me Norman Slamecka ne prove kiya ki jab log sirf information padhte hain, to unhe 20% yaad rehta hai. Par jab unhe fill-in-the-blanks diya jata hai aur wo khud answer sochte hain, to unka recall 300% badh jata hai! Dimaag read karne se nahi, generate karne se seekhta hai.",
  coreConcept: "Jab aap kitab par highlighter chalate ho, to dimaag ko lagta hai \"arre yeh to bohot easy hai\". Par yeh samajh nahi, balki sirf pehchan (Recognition) hoti hai. Jab aap kitab band karke khud answer likhne ki koshish karte ho, to dimaag ke connections majboot hote hain.",
  summary60s: "UPSC aur college ke students 80% time sirf notes ko baar-baar padhte rehte hain. Yeh sabse bada time-waste hai. Sabse powerful tareeqa hai: Ek chapter padho, kitab band karo, ek blank white paper lo aur jo yaad hai wo sab bina dekhe likho. Shuru me dimag thakega, par yahi asli padhai hai.",
  quickTakeaways: ["Highlight karna aur baar-baar padhna dimaag ka sabse bada dhokha hai","Jab dimaag ko andar se answer dhoondhna padta hai, tabhi permanent memory banti hai","Kitab band karke likhne se 3 guna zyada retention hota hai","Padhte waqt dimaag par jitna zor padega, exam me utna sukoon milega"],
  howItWorks: "Chapter padha -> Kitab band ki -> Blank page par likha -> Jahan ruke wahan dimaag ne zor lagaya -> Kitab khol kar gap check kiya -> Permanent memory ban gayi.",
  howToRespond: "Blank Paper Test: Padhte waqt highlighter phek do. Har 30 minute baad kitab band karo aur 5 minute me summary khud likho.",
  practiceQuestions: [
    {
      ...TOPIC_GENERATION_EFFECT_EN.practiceQuestions[0],
      prompt: "Do students hain: A ne notes ko 4 baar highlight karke padha. B ne 1 baar padh kar kitab band ki aur dosto ko bina dekhe explain kiya. Exam me kaun top karega?",
      explanation: "B ne Generation Effect use kiya: bina dekhe explain karne se dimaag ne concepts ko khud formulate kiya.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Student A, kyuki colorful highlighters se photographic memory banti hai.",
          text: "Student A, kyuki colorful highlighters se photographic memory banti hai.",
          feedbackText: "Galat. Photographic memory ek myth hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Student B, kyuki khud bolne aur generate karne se neural pathways 300% majboot hote hain.",
          text: "Student B, kyuki khud bolne aur generate karne se neural pathways 300% majboot hote hain.",
          feedbackText: "Sahi! Generation Effect active recall ko trigger karta hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Dono fail ho jayenge.",
          text: "Dono fail ho jayenge.",
          feedbackText: "Galat.",
        }
      ],
    },
  ],
  seoTitle: `${"The Generation Effect: Khud Banane Se Hi Yaad Rehta Hai"} | Mentalab Mind`,
  seoDescription: "Passive reading vs Active generation: Dimaag wahi yaad rakhta hai jo wo khud generate karta hai, na ki jo wo sirf dekhta hai.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_GENERATION_EFFECT_EN,
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

export const TOPIC_GENERATION_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_GENERATION_EFFECT_EN,
  hinglish: TOPIC_GENERATION_EFFECT_HINGLISH,
  hi: createLocalizedRecord('hi', "सृजन प्रभाव (The Generation Effect)", "केवल निष्क्रिय रूप से पढ़ने के बजाय स्वयं उत्तर या जानकारी उत्पन्न करने से स्मृति और समझ में होने वाली 3 गुना वृद्धि का वैज्ञानिक सिद्धांत।", ["हाइलाइट करना और बार-बार पढ़ना निष्क्रिय और अप्रभावी है","किताब बंद करके स्वयं लिखने से वास्तविक समझ विकसित होती है","मस्तिष्क वही याद रखता है जिसे वह स्वयं बनाता है"]),
  gu: createLocalizedRecord('gu', "જનરેશન અસર (સ્વ-સર્જનનો પ્રભાવ)", "માત્ર વાંચવા કરતાં પોતાના મગજમાંથી જવાબો ઉત્પન્ન કરીને શીખવાની શ્રેષ્ઠ પદ્ધતિ.", ["વાંચવા કરતાં લખીને યાદ રાખો","હાઇલાઇટર્સનો મોહ છોડો","પુસ્તક બંધ કરીને રિવિઝન કરો"]),
  mr: createLocalizedRecord('mr', "उत्पादन प्रभाव (Generation Effect)", "फक्त वाचण्यापेक्षा स्वतः माहिती तयार करून किंवा आठवून शिकल्यामुळे स्मरणशक्तीत होणारी प्रचंड वाढ.", ["फक्त वाचणे निरुपयोगी ठरते","पुस्तके बंद करून आठवण्याचा प्रयत्न करा","स्वतःच्या भाषेत नोट्स लिहा"]),
  te: createLocalizedRecord('te', "సృష్టి ప్రభావం (Generation Effect)", "కేవలం చదవడం కంటే స్వయంగా సమాచారాన్ని గుర్తుచేసుకుని రాయడం వల్ల కలిగే అద్భుతమైన జ్ఞాపకశక్తి.", ["నిష్క్రియంగా చదవవద్దు","పుస్తకం మూసివేసి గుర్తుచేసుకోండి","సొంతంగా రాసి ప్రాక్టీస్ చేయండి"]),
  ta: createLocalizedRecord('ta', "சுய உருவாக்க விளைவு (Generation Effect)", "வெறுமனே படிப்பதற்கு பதிலாக சுயமாக பதில்களை சிந்தித்து உருவாக்குவதால் நினைவாற்றல் அதிகரிக்கும் அறிவியல் உண்மை.", ["வெறுமனே வாசிப்பதை தவிருங்கள்","புத்தகத்தை மூடிவிட்டு எழுதிப் பாருங்கள்","சுயமாக உருவாக்குவதே நிலைத்து நிற்கும்"]),
  kn: createLocalizedRecord('kn', "ಸ್ವಯಂ ಸೃಷ್ಟಿಯ ಪರಿಣಾಮ (Generation Effect)", "ಕೇವಲ ಓದುವುದಕ್ಕಿಂತ ಸ್ವಂತವಾಗಿ ಉತ್ತರಗಳನ್ನು ನೆನಪಿಸಿಕೊಂಡು ಬರೆಯುವುದರಿಂದ ನೆನಪಿನ ಶಕ್ತಿ 3 ಪಟ್ಟು ಹೆಚ್ಚಾಗುತ್ತದೆ.", ["ನಿಷ್ಕ್ರಿಯ ಓದುವಿಕೆಯನ್ನು ಬಿಡಿ","ಪುಸ್ತಕ ಮುಚ್ಚಿ ಬರೆದು ನೋಡಿ","ಸ್ವಯಂ ಸೃಷ್ಟಿಯೇ ಶಾಶ್ವತ ನೆನಪು"]),
  ml: createLocalizedRecord('ml', "സ്വയം നിർമ്മാണ പ്രഭാവം (Generation Effect)", "വെറുതെ വായിച്ചു പോകുന്നതിനേക്കാൾ സ്വന്തം മനസ്സിൽ നിന്ന് ഉത്തരങ്ങൾ രൂപപ്പെടുത്തി പഠിക്കുമ്പോഴുള്ള അറിവ്.", ["നിഷ്ക്രിയ വായന ഒഴിവാക്കുക","പുസ്തകം അടച്ചുവെച്ച് എഴുതി നോക്കുക","സ്വന്തമായി നിർമ്മിക്കുന്നത് ഓർമ്മയിൽ നിൽക്കും"]),
  bn: createLocalizedRecord('bn', "সৃজন প্রভাব (Generation Effect)", "নিষ্ক্রিয়ভাবে পড়ার চেয়ে নিজের মেধা খাটিয়ে উত্তর বের করার মাধ্যমে স্মৃতিশক্তি বহুগুণ বৃদ্ধির মনস্তত্ত্ব।", ["প্যাসিভ রিডিং এড়িয়ে চলুন","বই বন্ধ করে লেখার অভ্যাস করুন","মস্তিষ্ক নিজে যা তৈরি করে তা-ই মনে রাখে"]),
  pa: createLocalizedRecord('pa', "ਖ਼ੁਦ-ਸਿਰਜਣਾ ਪ੍ਰਭਾਵ (Generation Effect)", "ਸਿਰਫ਼ ਕਿਤਾਬ ਪੜ੍ਹਨ ਨਾਲੋਂ ਆਪਣੇ ਦਿਮਾਗ ਵਿੱਚੋਂ ਜਵਾਬ ਕੱਢ ਕੇ ਲਿਖਣ ਨਾਲ ਯਾਦਦਾਸ਼ਤ ਵਿੱਚ ਹੋਣ ਵਾਲਾ ਵਾਧਾ।", ["ਸਿਰਫ਼ ਕਿਤਾਬ ਪੜ੍ਹਨ ਤੋਂ ਬਚੋ","ਕਿਤਾਬ ਬੰਦ ਕਰਕੇ ਲਿਖਣ ਦੀ ਆਦਤ ਪਾਓ","ਖ਼ੁਦ ਬਣਾਏ ਨੋਟਸ ਹੀ ਕੰਮ ਆਉਂਦੇ ਹਨ"]),
  ur: createLocalizedRecord('ur', "تخلیقی اثر (Generation Effect)", "محض کتاب پڑھنے کے بجائے اپنے ذہن سے جوابات سوچ کر لکھنے سے یادداشت میں 3 گنا اضافہ۔", ["محض مطالعے کے فریب سے بچیں","کتاب بند کر کے خود لکھنے کی مشق کریں","ذہن خود بنائی ہوئی چیز یاد رکھتا ہے"]),
  or: createLocalizedRecord('or', "ସୃଜନ ପ୍ରଭାବ (Generation Effect)", "କେବଳ ପଢ଼ିବା ଅପେକ୍ଷା ନିଜେ ଉତ୍ତର ତିଆରି କରି ଲେଖିବା ଦ୍ୱାରା ସ୍ମରଣ ଶକ୍ତି ବୃଦ୍ଧି ପାଇବାର ବୈଜ୍ଞାନିକ ତଥ୍ୟ।", ["କେବଳ ପଢ଼ିବା ଛାଡ଼ନ୍ତୁ","ବହି ବନ୍ଦ କରି ମନେପକାଇ ଲେଖନ୍ତୁ","ନିଜେ ତିଆରି କଲେ ମନେରହେ"]),
  as: createLocalizedRecord('as', "সৃষ্টিশীল প্ৰভাৱ (Generation Effect)", "কেৱল কিতাপ পঢ়াৰ বিপৰীতে নিজৰ মগজু খটুৱাই উত্তৰ সৃষ্টি কৰি শিকাৰ অপৰিসীম সুফল।", ["নিষ্ক্ৰিয় পঠন পৰিহাৰ কৰক","কিতাপ বন্ধ কৰি মনত পেলাই লিখক","মগজুৱে নিজে গঢ়া বস্তুটোহে মনত ৰাখে"]),
};
