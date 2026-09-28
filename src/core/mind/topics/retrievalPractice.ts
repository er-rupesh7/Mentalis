import { MindTopicDetail, MindLanguageCode } from '../types';

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_RETRIEVAL_PRACTICE_EN,
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

export const TOPIC_RETRIEVAL_PRACTICE_EN: MindTopicDetail = {
  id: 'retrieval_practice',
  categoryId: 'learning_psychology',
  slug: 'retrieval-practice-and-spacing',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 3,
  viewCount: 4210,
  shareCount: 380,
  bookmarkCount: 890,
  title: 'Retrieval Practice & The Testing Effect',
  subtitle: 'Why actively recalling information from memory builds 4x stronger neural pathways than passive re-reading.',
  shortDescription: 'The cognitive learning strategy of actively recalling facts from memory, which alters synaptic strength far more effectively than passive study.',
  oneLineExplanation: 'Memory is built by pulling answers out of your brain, not shoving information in.',

  summary30s: 'Roediger and Karpicke (2006) proved that students who read a text once and took recall quizzes remembered 400% more after a week than students who repeatedly re-read the text. Pulling an answer from memory produces synaptic reconsolidation, transforming fragile short-term data into durable knowledge.',
  coreConcept: 'Passive re-reading creates an "illusion of competence" because the text feels familiar. But familiarity is not retrieval strength. When you close the book and struggle to recall the concept, that mental exertion signals your hippocampus to reinforce the neural trace.',
  summary60s: 'Imagine your memory as a path through a dense jungle: reading is like looking at a map of the path; actively recalling is actually walking the path. Every time you retrieve an answer, you clear more brush and pave the road. Self-testing, flashcards, and practice drills are the gold standard of cognitive learning.',
  quickTakeaways: [
    'Passive re-reading produces the illusion of competence without memory consolidation',
    'Mental effort spent retrieving an answer physically strengthens neural pathways',
    'Low-stakes self-testing is 4x more effective than highlighting or summarizing notes',
  ],

  whyItHappens: 'Synaptic reconsolidation. When memory circuits are activated without sensory input, the brain rewires and prioritizes those pathways for future retrieval.',
  evolutionaryMechanism: 'Ancestral survival depended on quickly recalling water holes and predator danger zones under stress, favoring organisms whose brains reinforced actively recalled memories.',
  howItWorks: 'Encounter information -> Close book -> Force mental retrieval -> Suffer desirable difficulty -> Neural trace strengthens permanently.',
  whereYouEncounterIt: 'Exam preparation, language vocabulary acquisition, Mentalab arithmetic speed drills, and musical instrument practice.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Passive Re-reading vs. Active Retrieval',
    description: 'Why familiarity feels like mastery but fails under pressure.',
    analogySideA: { label: 'Passive Study (Re-reading)', detail: 'High comfort, low retention; 80% forgotten within 7 days.' },
    analogySideB: { label: 'Active Retrieval (Testing)', detail: 'High mental effort, durable retention; 80% preserved over time.' },
  },

  researchSummary: 'Roediger & Karpicke (2006) in Psychological Science demonstrated that repeated testing produces large positive effects on long-term retention compared to repeated study.',
  limitationsAndControversies: 'Retrieval practice is less effective if students do not receive corrective feedback after incorrect recall, as errors can inadvertently be reinforced.',

  howToRecognize: 'If you look at an answer key and think "Oh yeah, I totally knew that!", you have fallen into the fluency trap. If you didn\'t retrieve it independently before looking, you did not know it.',
  commonMisconceptions: 'Common myth: "Tests are only useful for giving grades." Science: Tests are the most potent learning intervention discovered in 100 years of cognitive science.',
  howToRespond: 'Convert every study session into an active recall quiz. Use Leitner spaced flashcards or Mentalab arithmetic drills instead of re-reading charts.',
  psychologicalDefenses: [
    { title: 'The Blank Page Protocol', instruction: 'After reading any chapter, close it immediately and write 3 core takeaways from memory on a blank page.' },
    { title: 'Spaced Retrieval Schedules', instruction: 'Test yourself after 1 day, then 3 days, then 7 days, then 21 days to flatten the forgetting curve.' },
    { title: 'Immediate Error Diagnosis', instruction: 'Never skip reviewing errors. Misconceptions corrected within 10 seconds of recall produce the highest learning delta.' },
  ],

  scenarios: [
    {
      id: 'scen_rp_01',
      scenarioType: 'indian_context',
      title: 'The UPSC Aspirant in Delhi',
      vignette: 'Arjun spends 10 hours a day highlighting Indian Polity textbooks in neon yellow. After 4 months, he feels confident because every page looks familiar. Yet on mock tests, he forgets key constitutional articles. His friend Priya studies only 4 hours a day using active flashcards and blurting sheets, scoring in the top 2% of the test series.',
      breakdownAnalysis: 'Arjun fell into the illusion of competence generated by visual familiarity. Priya forced active synaptic retrieval, creating durable recall pathways.',
      recommendedAction: 'Close the textbook after every chapter and write down the core concepts from memory on a blank sheet of paper before checking your notes.',
    },
  ],

  examples: [
    {
      id: 'ex_rp_01',
      domain: 'education',
      displayOrder: 1,
      title: 'Vocabulary and Formula Memorization',
      description: 'Using flashcards with front-prompt and back-answer rather than reading a static list.',
      takeaway: 'Active retrieval cements formulas into instant working memory.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_rp_01',
      scenarioText: 'A student has 4 hours left before an important entrance exam.',
      prompt: 'According to cognitive psychology, which revision strategy will yield the highest retention?',
      options: [
        { id: 'opt_a', text: 'Re-reading highlighted textbook pages continuously', isCorrect: false },
        { id: 'opt_b', text: 'Taking timed practice quizzes and self-testing without notes', isCorrect: true },
        { id: 'opt_c', text: 'Listening to recorded lectures at 2x playback speed', isCorrect: false },
        { id: 'opt_d', text: 'Copying class notes into a fresh notebook', isCorrect: false },
      ],
      explanation: 'Practice testing (retrieval practice) forces active neural reconstruction, producing significantly higher retention than passive review.',
      antidoteAdvice: 'Always prioritize testing yourself over passive re-reading.',
    },
  ],

  reflectionPrompt: 'Are you currently studying by passively re-reading or actively testing your memory?',
  references: [
    {
      id: 'ref_rp_01',
      title: 'Test-enhanced learning: Taking memory tests improves long-term retention',
      citation: 'Roediger, H. L., & Karpicke, J. D. (2006). Psychological Science, 17(3), 249–255.',
      authors: 'Roediger, H. L., & Karpicke, J. D.',
      publicationYear: 2006,
      journalOrPublisher: 'Psychological Science',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: 'https://doi.org/10.1111/j.1467-9280.2006.01693.x',
      relevance: 'Foundational study proving active retrieval beats repeated study.',
      displayOrder: 1,
    },
  ],
  tags: ['Learning Psychology', 'Memory', 'Mentalab'],
  relatedTopics: [],
  seoTitle: 'Retrieval Practice & Testing Effect | Learning Psychology | Mentalab Mind',
  seoDescription: 'Discover why self-testing builds memory pathways 400% faster than passive re-reading.',
  canonicalUrl: '/mind/learning-psychology/retrieval-practice-and-spacing',
  ogImageUrl: '/images/mind/retrieval-practice.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: 'Retrieval practice exploits synaptic reconsolidation to turn temporary working memory into permanent cortical memory.',
};

export const TOPIC_RETRIEVAL_PRACTICE_HINGLISH: MindTopicDetail = {
  ...TOPIC_RETRIEVAL_PRACTICE_EN,
  title: 'Retrieval Practice: Padhne Se Zyada Yaad Karne Ka Khel',
  subtitle: 'Kyu baar-baar padhne se behtar hai khud ka test lena aur flashcards use karna.',
  shortDescription: 'Dimaag me information daalne se zyada, dimaag se information bahar nikalne se permanent memory banti hai.',
  summary30s: 'Roediger aur Karpicke ke world-famous experiment me dekha gaya ki jo log baar-baar book re-read karte hain, unhe lagta hai ki sab yaad ho gaya (illusion of competence). Lekin exam me wahi jeet te hain jinhone book band karke recall karne ki koshish ki thi.',
  quickTakeaways: [
    'Book re-read karne se comfort milta hai par exam me bhool jata hai',
    'Page padhne ke baad book band karke khud se recall karein',
    'Active recall se retention 4 guna badh jata hai',
  ],
};

export const TOPIC_RETRIEVAL_PRACTICE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_RETRIEVAL_PRACTICE_EN,
  hinglish: TOPIC_RETRIEVAL_PRACTICE_HINGLISH,
  hi: createLocalizedRecord('hi', 'सक्रिय स्मरण (Retrieval Practice): वैज्ञानिक अध्ययन पद्धति', 'बार-बार पढ़ने के बजाय सक्रिय रूप से स्मृति से ज्ञान को याद करने की शक्तिशाली संज्ञानात्मक तकनीक।', ['किताब बंद करके याद करने का प्रयास करें', 'फ्लैशकार्ड्स का उपयोग करें', 'नियमित स्व-मूल्यांकन करें']),
  gu: createLocalizedRecord('gu', 'રિટ્રાઇવલ પ્રેક્ટિસ (સક્રિય સ્મરણ)', 'વારંવાર વાંચવા કરતાં યાદશક્તિમાંથી માહિતી બહાર કાઢવાની વૈજ્ઞાનિક રીત.', ['પુસ્તક બંધ કરી પુનરાવર્તન કરો', 'ફ્લેશકાર્ડ્સ વાપરો', 'નિયમિત ક્વિઝ આપો']),
  mr: createLocalizedRecord('mr', 'अ‍ॅक्टिव्ह रिकॉल आणि स्पेसिंग (स्मरण पद्धती)', 'वारंवार वाचनापेक्षा स्मरणशक्तीतून उत्तरे आठवण्याचा सराव मेंदूला अधिक तीक्ष्ण करतो.', ['पुस्तक बंद करून आठवण्याचा प्रयत्न करा', 'फ्लॅशकार्ड वापरा', 'नियमित सराव करा']),
  te: createLocalizedRecord('te', 'రిట్రీవల్ ప్రాక్టీస్ (చురుకైన జ్ఞాపకశక్తి పద్ధతి)', 'పుస్తకం పదే పదే చదవడం కంటే జ్ఞాపకం నుంచి విషయాన్ని గుర్తుకు తెచ్చుకునే ఉత్తమ అభ్యాసం.', ['పుస్తకం మూసి గుర్తుచేసుకోండి', 'ఫ్లాష్ కార్డ్స్ ఉపయోగించండి', 'క్రమం తప్పకుండా పరీక్షలు రాయండి']),
  ta: createLocalizedRecord('ta', 'மீட்டெடுப்பு பயிற்சி (Retrieval Practice)', 'மீண்டும் மீண்டும் வாசிப்பதை விட நினைவிலிருந்து தகவலை மீட்டெடுக்கும் விஞ்ஞான முறை.', ['புத்தகத்தை மூடிவிட்டு நினைவு கூறுங்கள்', 'ஃபிளாஷ்கார்டுகளைப் பயன்படுத்துங்கள்', 'சுய தேர்வு எழுதுங்கள்']),
  kn: createLocalizedRecord('kn', 'ನೆನಪಿಸಿಕೊಳ್ಳುವ ಅಭ್ಯಾಸ (Retrieval Practice)', 'ಪುನರಾವರ್ತಿತ ಓದಿಗಿಂತ ನೆನಪಿನಿಂದ ಮಾಹಿತಿಯನ್ನು ಹೊರತೆಗೆಯುವ ವೈಜ್ಞಾನಿಕ ಕಲಿಕಾ ವಿಧಾನ.', ['ಪುಸ್ತಕ ಮುಚ್ಚಿ ನೆನಪಿಸಿಕೊಳ್ಳಿ', 'ಫ್ಲ್ಯಾಶ್ ಕಾರ್ಡ್ ಬಳಸಿ', 'ಆಗಾಗ ಪರೀಕ್ಷೆ ಬರೆಯಿರಿ']),
  ml: createLocalizedRecord('ml', 'റിട്രീവൽ പ്രാക്ടീസ് (സജീവ ഓർമ്മപ്പെടുത്തൽ)', 'പഠിച്ച കാര്യങ്ങൾ ഓർത്തെടുക്കാൻ ശ്രമിക്കുന്നത് വഴി തലച്ചോറിൻ്റെ ശേഷി വർദ്ധിപ്പിക്കുന്ന രീതി.', ['പുസ്തകം അടച്ചുവെച്ച് ഓർക്കുക', 'ഫ്ലാഷ് കാർഡുകൾ ഉപയോഗിക്കുക', 'പതിവായി പരീക്ഷകൾ എഴുതുക']),
  bn: createLocalizedRecord('bn', 'রিট্রিভাল প্র্যাকটিস (সক্রিয় স্মৃতিচর্চা)', 'বারবার না পড়ে স্মৃতি থেকে তথ্য মনে করার বৈজ্ঞানিক ও কার্যকর পদ্ধতি।', ['বই বন্ধ করে মনে করার চেষ্টা করুন', 'ফ্ল্যাশ কার্ড ব্যবহার করুন', 'নিয়মিত স্ব-মূল্যায়ন করুন']),
  pa: createLocalizedRecord('pa', 'ਸਰਗਰਮ ਯਾਦ ਅਭਿਆਸ (Retrieval Practice)', 'ਵਾਰ-ਵਾਰ ਪੜ੍ਹਨ ਨਾਲੋਂ ਦਿਮਾਗ ਵਿੱਚੋਂ ਜਾਣਕਾਰੀ ਨੂੰ ਯਾਦ ਕਰਨ ਦਾ ਵਿਗਿਆਨਕ ਢੰਗ।', ['ਕਿਤਾਬ ਬੰਦ ਕਰਕੇ ਯਾਦ ਕਰੋ', 'ਫਲੈਸ਼ ਕਾਰਡ ਵਰਤੋ', 'ਆਪਣਾ ਟੈਸਟ ਖੁਦ ਲਓ']),
  ur: createLocalizedRecord('ur', 'فعال بازیافت (Retrieval Practice)', 'بار بار پڑھنے کے بجائے ذہن پر زور دے کر معلومات یاد کرنے کا مؤثر طریقہ۔', ['کتاب بند کر کے دہرائیں', 'فلیش کارڈز کا استعمال کریں', 'باقاعدگی سے ٹیسٹ دیں']),
  or: createLocalizedRecord('or', 'ସକ୍ରିୟ ସ୍ମରଣ ଅଭ୍ୟାସ (Retrieval Practice)', 'ବାରମ୍ବାର ପଢ଼ିବା ଅପେକ୍ଷା ମନେ ପକାଇବାର ଚେଷ୍ଟା ଦ୍ୱାରା ସ୍ମୃତିଶକ୍ତି ବୃଦ୍ଧି କରିବାର ଉପାୟ।', ['ବହି ବନ୍ଦ କରି ମନେ ପକାନ୍ତୁ', 'ଫ୍ଲାସ୍ କାର୍ଡ ବ୍ୟବହାର କରନ୍ତୁ', 'ନିୟମିତ ନିଜର ପରୀକ୍ଷା ନିଅନ୍ତୁ']),
  as: createLocalizedRecord('as', 'সক্ৰিয় সোঁৱৰণ অভ্যাস (Retrieval Practice)', 'বাৰে বাৰে পঢ়াতকৈ মগজুৰ পৰা তথ্য মনত পেলাই শক্তিশালী স্মৃতিশক্তি গঢ়াৰ কৌশল।', ['কিতাপ বন্ধ কৰি মনত পেলাওক', 'ফ্লেছ কাৰ্ড ব্যৱহাৰ কৰক', 'নিয়মীয়াকৈ পৰীক্ষা দিয়ক']),
};
