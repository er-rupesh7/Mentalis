import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Learning Psychology Track
 * Topic: Cognitive Load Theory: Respecting the Working Memory Bottleneck
 * Category: Learning Psychology (learning_psychology)
 * 
 * Academic Grounding:
 * - Sweller (1988): Cognitive load during problem solving: Effects on learning
 * - Paas, Renkl & Sweller (2003): Cognitive load theory and instructional design: Recent developments
 * - Miller (1956): The magical number seven, plus or minus two: Some limits on our capacity for processing information
 */

export const TOPIC_COGNITIVE_LOAD_EN: MindTopicDetail = {
  id: 'cognitive_load_theory',
  categoryId: 'learning_psychology',
  slug: 'cognitive-load-theory',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 4,
  viewCount: 7120,
  shareCount: 540,
  bookmarkCount: 1320,
  title: 'Cognitive Load Theory: Respecting the Working Memory Bottleneck',
  subtitle: 'Human working memory can hold only 3 to 4 elements at once. Overload it, and learning crashes to zero.',
  shortDescription: 'The cognitive architecture framework developed by John Sweller distinguishing between Intrinsic, Extraneous, and Germane mental load to optimize instructional design.',
  oneLineExplanation: 'Trying to pour a gallon of water into a 4-ounce glass and wondering why your desk is soaked.',

  summary30s: 'Cognitive Load Theory (CLT) is the fundamental physics of the human brain: while our long-term memory is essentially limitless, our conscious working memory is an excruciatingly narrow funnel that can hold only 3 to 4 novel chunks of information at a time. If study materials, user interfaces, or presentations contain visual clutter and confusing instructions (extraneous load), working memory crashes and zero learning occurs.',

  coreConcept: 'Formulated by Australian educational psychologist John Sweller in 1988, CLT breaks all mental processing into three distinct buckets: (1) Intrinsic Load: The irreducible complexity inherent to the concept itself; (2) Extraneous Load: Useless mental friction created by poor teaching, cluttered UI, bad slide design, and split-attention formatting; (3) Germane Load: The productive mental effort dedicated to integrating the concept into durable long-term schemas. The holy grail of learning is: Eliminate Extraneous Load, Manage Intrinsic Load, and Maximize Germane Load.',
  summary60s: 'Consider reading a complex biology diagram where the labels are placed in a legend at the bottom of the page, forcing your eyes to bounce back and forth between the picture and the numbers. This "Split-Attention Effect" burns up your working memory capacity just navigating the page layout, leaving zero cognitive capacity to understand the cellular biology. When labels are placed directly on the anatomical structures (integrated layout), student comprehension doubles instantly. Good instructional design is the art of cognitive hygiene.',

  quickTakeaways: [
    'The Working Memory Funnel: You can only consciously juggle 3 to 4 novel items simultaneously without cognitive breakdown',
    'The 3 Types of Load: Intrinsic (concept difficulty), Extraneous (bad layout waste), Germane (schema-building effort)',
    'The Split-Attention Effect: Separating text explanations from visual diagrams destroys learning efficiency',
    'Worked Example Effect: Novices learn significantly faster by studying step-by-step worked solutions than by struggling blindly through unguided problem-solving',
  ],

  whyItHappens: 'Evolutionary biological trade-offs. The prefrontal cortex is metabolically expensive, consuming 20% of resting glucose. A narrow working memory prevents neural circuits from overheating and ensures laser-focused conscious attention on immediate, sequential threats.',
  evolutionaryMechanism: 'Long-term memory stores vast amounts of automated behavioral scripts (walking, swimming, language syntax) that operate with zero conscious working memory load, freeing our narrow conscious bandwidth to handle immediate environmental novelty.',

  howItWorks: 'The cognitive architecture pathway: (1) Sensory Memory: Visual and auditory inputs enter for milliseconds; (2) Working Memory Bottleneck: Only 3-4 items processed at once; (3) Schema Automation: Chunking concepts into a single unit; (4) Long-Term Storage: Automated schemas are retrieved back into working memory as a single "chunk."',
  whereYouEncounterIt: 'Bloated PowerPoint presentations with 50 bullet points per slide, software user onboarding with confusing tooltips, mathematical problem solving, and aircraft cockpit instrumentation.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Sweller’s Three Types of Cognitive Load',
    description: 'How mental capacity is allocated during learning.',
    analogySideA: {
      label: 'Extraneous Load (The Enemy - Must Minimize)',
      detail: 'Cluttered fonts, hunting for definitions across pages, listening to a speaker read slides word-for-word, background noise.',
    },
    analogySideB: {
      label: 'Germane Load (The Goal - Must Maximize)',
      detail: 'Connecting the new concept to past knowledge, drawing a mental model, applying a formula to a novel scenario.',
    },
  },

  researchSummary: 'Sweller\'s 1988 experiments demonstrated that novice problem solvers who were given open-ended "means-ends" math problems spent all their working memory juggling subgoals and made minimal progress in building mental schemas. In contrast, students who studied paired "worked examples" (a fully solved problem followed by a similar problem) learned the underlying principles twice as fast with far fewer errors.',
  limitationsAndControversies: 'The "Expertise Reversal Effect" (Kalyuga et al., 2003): while worked examples and heavily guided step-by-step instructions are optimal for beginners, they become extraneous and counter-productive for advanced experts, who learn faster from open-ended problem solving and self-directed challenges.',
  commonMisconceptions: 'Common myth: "Giving students more details, animated effects, and background music enhances learning." Reality: Sweller showed that extraneous multimedia clutter floods limited working memory (3-5 chunks), causing cognitive overload and inhibiting long-term schema acquisition.',

  howToRecognize: [
    'Reading the same paragraph in a textbook five times in a row without retaining a single sentence (working memory saturation)',
    'A presenter talking rapidly while projecting a slide packed with 20 lines of dense text (redundancy effect: auditory and visual channels collide)',
    'Feeling mentally drained and irritable after using a clunky, poorly designed banking or tax software app',
    'Trying to learn 10 new programming syntax rules at the same time without practicing each one in isolation',
  ],

  scenarios: [
    {
      id: 'scen_cog_01',
      scenarioType: 'indian_context',
      title: 'The Overdesigned Physics Simulation App in Hyderabad',
      vignette: 'An EdTech startup in Hyderabad designs an interactive app to teach Newton\'s Second Law (F = ma) to 8th-grade students. The screen features a 3D animated rocket, floating neon particles, sound effects on every click, a scrolling leaderboard, an avatar selection tool, and a physics formula buried in a small corner. Testing reveals that students love the animations but score 28% on the physics concept test.',
      breakdownAnalysis: 'The app designer committed severe extraneous cognitive overload. The neon particles, sound effects, and avatar tools saturated the students\' 4-chunk working memory funnel, leaving zero mental bandwidth for germane schema consolidation of force and mass.',
      recommendedAction: 'Apply Sweller\'s Clean Architecture: Remove all decorative animations and sounds. Present a clean, minimalist slider controlling mass and force with instant numerical feedback, allowing 100% of working memory to process the mathematical relationship.',
    },
  ],

  examples: [
    {
      id: 'ex_cog_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Glass Cockpit Revolution in Aviation',
      description: 'Older aircraft cockpits had 120 separate dial instruments scattered across the dash, overwhelming pilots during emergencies. Modern glass cockpits synthesize flight path, altitude, and weather into a single intuitive Primary Flight Display, slashing pilot cognitive load by 80%.',
      takeaway: 'Information synthesis prevents operational cognitive collapse.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_cog_01',
      scenarioContext: 'An instructor is preparing a presentation on cardiovascular blood flow. What slide design principle is mandated by Cognitive Load Theory\'s "Modality Effect"?',
      question: 'Which presentation method minimizes extraneous cognitive load for students?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Displaying a clear anatomical diagram visually while explaining the blood flow spoken aloud verbally, utilizing both visual and auditory processing channels simultaneously',
          explanation: 'Accurate: the modality effect shows that splitting input across the visual and phonological channels effectively expands working memory capacity.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Placing 4 paragraphs of text on the slide and reading the exact text aloud word-for-word',
          explanation: 'This triggers the "Redundancy Effect," causing auditory-visual interference and cognitive overload.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Playing upbeat background rock music while students read the text silently',
          explanation: 'Background music consumes auditory working memory capacity, generating useless extraneous load.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Distribute inputs across visual and auditory channels to double your effective working memory capacity.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Strip presentations and documents down to essentials: eliminate redundant text, decorative clip-art, and background distractions.',
  psychologicalDefenses: [
    {
      title: 'The Rule of Four Chunks',
      instruction: 'Never attempt to absorb more than 3 to 4 novel concepts in a single study block. Master and automate those four into a durable schema before introducing the next set.',
    },
    {
      title: 'Leverage Worked Examples for Beginners',
      instruction: 'When learning a complex new skill (coding, accounting, physics), do not struggle blindly. Study 5 fully solved worked examples step-by-step before attempting unassisted problem sets.',
    },
    {
      title: 'Eliminate Split-Attention in Notes',
      instruction: 'When taking notes, embed annotations, formulas, and definitions directly inside your diagrams and sketches, rather than keeping separate legends or distant footnotes.',
    },
  ],

  reflectionPrompt: 'Have you ever tried to learn a complex software tool while listening to a podcast and having 20 browser tabs open? How much did you retain?',

  references: [
    {
      id: 'ref_sweller_1988',
      authors: 'Sweller, J.',
      year: 1988,
      title: 'Cognitive load during problem solving: Effects on learning',
      publicationName: 'Cognitive Science',
      volumeIssue: '12(2), 257-285',
      doi: '10.1207/s15516709cog1202_4',
      evidenceStrength: 'historical_classic',
    },
    {
      id: 'ref_paas_2003',
      authors: 'Paas, F., Renkl, A., & Sweller, J.',
      year: 2003,
      title: 'Cognitive load theory and instructional design: Recent developments',
      publicationName: 'Educational Psychologist',
      volumeIssue: '38(1), 1-4',
      doi: '10.1207/S15326985EP3801_1',
      evidenceStrength: 'systematic_review',
    },
  ],

  relatedTopics: [
    {
      topicId: 'spaced_repetition',
      slug: 'spaced-repetition',
      title: 'Spaced Repetition',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'interleaving_effect',
      slug: 'interleaving-effect-learning',
      title: 'The Interleaving Effect',
      relationshipType: 'amplified_by',
    },
  ],
};


function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_COGNITIVE_LOAD_EN,
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

export const TOPIC_COGNITIVE_LOAD: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_COGNITIVE_LOAD_EN,
  hinglish: {
    ...TOPIC_COGNITIVE_LOAD_EN,
    title: 'Cognitive Load Theory: Dimaag Ki 4-Item Limit Ka Science',
    subtitle: 'Human working memory ek waqt me sirf 3 se 4 naye concepts handle kar sakti hai. Usse zyada doge toh dimaag crash ho jayega.',
    shortDescription: 'John Sweller ki famous theory: Intrinsic, Extraneous aur Germane load ko balance karke mushkil concepts ko aasaani se seekhna.',
    oneLineExplanation: 'Ek 100ml ke glass me 1 litre paani daalne ki koshish karna aur sochna ki table kyu bheeg gayi.',
    summary30s: 'John Sweller ne 1988 me prove kiya ki insaan ka working memory ek chhota sa funnel hai jisme ek baar me sirf 3-4 cheezein aati hain. Agar padhane wale ki slide bekaar hai, font chhota hai aur background noise hai (Extraneous Load), toh dimaag wahi thak jata hai aur real concept (Germane Load) memory me save hi nahi hota.',
  },
  hi: {
    ...TOPIC_COGNITIVE_LOAD_EN,
    title: 'Cognitive Load Theory (संज्ञानात्मक भार सिद्धांत)',
    subtitle: 'मानव कार्यशील स्मृति की 4-इकाई सीमा और शिक्षण अभिकल्प का विज्ञान।',
    shortDescription: 'जॉन स्वेलर द्वारा विकसित सिद्धांत जो बताता है कि कार्यशील स्मृति (Working Memory) की सीमित क्षमता के कारण अनावश्यक मानसिक भार को हटाना क्यों अनिवार्य है।',
    oneLineExplanation: 'एक छोटे बर्तन में अत्यधिक सामग्री डालकर सब कुछ बिखेर देना।',
    summary30s: 'संज्ञानात्मक भार सिद्धांत (Cognitive Load Theory) यह दर्शाता है कि हमारी दीर्घकालिक स्मृति असीमित है, परंतु सचेतन कार्यशील स्मृति एक समय में केवल 3 से 4 नई सूचनाओं को ही संसाधित कर सकती है। यदि पाठ्य सामग्री में भटकाव और अव्यवस्थित संरचना (Extraneous Load) होगी, तो वास्तविक सीखने की प्रक्रिया अवरुद्ध हो जाएगी।',
  },
  gu: createLocalizedRecord('gu', "Cognitive Load Theory: Respecting the Working Memory Bottleneck (સિદ્ધાંત)", "Cognitive Load Theory: Respecting the Working Memory Bottleneck એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "Cognitive Load Theory: Respecting the Working Memory Bottleneck (सिद्धांत)", "Cognitive Load Theory: Respecting the Working Memory Bottleneck हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "Cognitive Load Theory: Respecting the Working Memory Bottleneck (సిద్ధాంతం)", "Cognitive Load Theory: Respecting the Working Memory Bottleneck అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "Cognitive Load Theory: Respecting the Working Memory Bottleneck (கோட்பாடு)", "Cognitive Load Theory: Respecting the Working Memory Bottleneck என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "Cognitive Load Theory: Respecting the Working Memory Bottleneck (ಸಿದ್ಧಾಂತ)", "Cognitive Load Theory: Respecting the Working Memory Bottleneck ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "Cognitive Load Theory: Respecting the Working Memory Bottleneck (സിദ്ധാന്തം)", "Cognitive Load Theory: Respecting the Working Memory Bottleneck എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "Cognitive Load Theory: Respecting the Working Memory Bottleneck (তত্ত্ব)", "Cognitive Load Theory: Respecting the Working Memory Bottleneck হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "Cognitive Load Theory: Respecting the Working Memory Bottleneck (ਸਿਧਾਂਤ)", "Cognitive Load Theory: Respecting the Working Memory Bottleneck ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "Cognitive Load Theory: Respecting the Working Memory Bottleneck (نظریہ)", "Cognitive Load Theory: Respecting the Working Memory Bottleneck انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "Cognitive Load Theory: Respecting the Working Memory Bottleneck (ସିଦ୍ଧାନ୍ତ)", "Cognitive Load Theory: Respecting the Working Memory Bottleneck ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "Cognitive Load Theory: Respecting the Working Memory Bottleneck (তত্ত্ব)", "Cognitive Load Theory: Respecting the Working Memory Bottleneck সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
