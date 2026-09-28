import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_INVERSION_TECHNIQUE_EN: MindTopicDetail = {
  id: 'inversion_technique',
  categoryId: 'critical_thinking',
  slug: 'the-inversion-technique',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 6,
  viewCount: 3520,
  shareCount: 270,
  bookmarkCount: 570,
  title: "The Inversion Technique: Invert, Always Invert",
  subtitle: "Carl Jacobi and Charlie Munger on why avoiding stupidity is vastly easier than seeking brilliance.",
  shortDescription: "A powerful problem-solving framework where complex challenges are approached backwards by focusing on what you want to avoid rather than what you want to achieve.",
  oneLineExplanation: "Tell me where I’m going to die so I simply never go there.",

  summary30s: "Coined by 19th-century German mathematician Carl Gustav Jacob Jacobi (\"Man muss immer umkehren\" — Invert, always invert) and immortalized by Berkshire Hathaway’s Charlie Munger, inversion flips problems upside down. Instead of asking: \"How do I make my startup succeed?\", ask: \"What actions would guarantee my startup fails completely?\" Then systematically avoid them.",
  coreConcept: "Human beings are poorly equipped to predict brilliant breakthroughs, but exceptionally adept at recognizing catastrophic failure modes. Trying to be consistently brilliant produces high error rates, hubris, and fragile bets. In contrast, systematically eliminating unforced errors (laziness, debt, arrogance, toxic culture) guarantees robust, compounding survival.",
  summary60s: "Inversion forms the foundation of modern risk engineering: pre-mortems (imagining the project has died before launching), cybersecurity threat modeling (thinking like a malicious hacker), and personal health (eliminating smoking and junk sleep rather than hunting for exotic superfoods).",
  quickTakeaways: ["\"Invert, always invert\": Turn problems upside down to expose hidden blind spots","Avoiding stupidity consistently is vastly more profitable than trying to be brilliant","Pre-mortems anticipate catastrophic failure before a single dollar is spent","Success is often the simple byproduct of ruthlessly eliminating unforced errors"],

  whyItHappens: "Asymmetry of downside: single catastrophic errors destroy decades of accumulated success; avoiding ruin preserves the option to compound.",
  evolutionaryMechanism: "Ancestral survival favored hominids who prioritized not dying (avoiding cliffs, predators, and toxins) over those seeking marginal glory.",

  howItWorks: "Goal stated (\"Build a great marriage\") -> Invert goal (\"How do I guarantee a divorce?\") -> List toxic behaviors (nagging, contempt, dishonesty) -> Ruthlessly eliminate those behaviors -> Healthy relationship emerges naturally.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Forward Ambition vs. Inversion Risk Elimination",
    description: "Charlie Munger’s mental model of inverted engineering.",
    analogySideA: {
      label: "Forward Thinking (Fragile)",
      detail: "\"How do I become a billionaire in 3 years?\" -> High risk, excessive leverage, blindness to downside, frequent bankruptcy.",
    },
    analogySideB: {
      label: "Inversion Thinking (Antifragile)",
      detail: "\"What guarantees financial ruin?\" (Excess debt, gambling, zero emergency fund). Eliminates ruin -> Wealth compounds steadily.",
    },
  },

  researchSummary: "Munger (1995, Harvard University Address) and Klein (2007, Harvard Business Review) established the scientific efficacy of pre-mortems and inversion in reducing catastrophic operational errors by over 30%.",
  references: [
    {
      id: 'ref_inversion_technique_01',
      title: "The Psychology of Human Misjudgment / Performing a Project Premortem",
      citation: "Klein, G. (2007). Harvard Business Review, 85(9), 18–19.",
      authors: "Munger, C. T. & Klein, G.",
      publicationYear: 1995,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1225/R0709B",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_inversion_technique_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Startup Pre-Mortem in Koramangala",
      narrativeContext: "An ed-tech founding team in Koramangala, Bengaluru, gathered before launching their new mobile app. Instead of celebrating, the CEO said: \"Imagine it is 12 months from now, our startup is completely bankrupt, and we are shutting down. What specifically killed us?\"",
      biasInAction: "Standard forward-planning teams suffer from collective optimism bias, ignoring fatal flaws until it is too late.",
      optimalResponse: "By inverting, the team listed: 1) high customer acquisition cost, 2) slow Android load times, 3) lack of teacher retention. They re-engineered their app around these three vulnerabilities before launch.",
      reflectionPrompt: "If you wanted to guarantee that your physical health collapses over the next 5 years, what daily habits would you adopt? How many of those are you doing right now?",
    },
  ],

  examples: [
    {
      id: 'ex_inversion_technique_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Startup Pre-Mortem in Koramangala",
      description: "An ed-tech founding team in Koramangala, Bengaluru, gathered before launching their new mobile app. Instead of celebrating, the CEO said: \"Imagine it ...",
      takeaway: "\"Invert, always invert\": Turn problems upside down to expose hidden blind spots",
    },
  ],

  howToRecognize: "Struggling with a complex, ambiguous problem where forward solutions feel overwhelming or paralyzing.",
  whereYouEncounterIt: "Strategic corporate planning, personal financial independence, marital therapy, and aerospace safety engineering.",
  commonMisconceptions: "Myth: \"Inversion is pessimistic and negative thinking.\" Fact: Inversion is pragmatic realism; by securing the downside, it frees your mind to pursue upside with total confidence.",
  limitationsAndControversies: "Inversion eliminates bad paths, but creative breakthroughs (e.g. composing a symphony, inventing the iPhone) still require positive forward imagination.",

  howToRespond: "The Premortem Drill: Before starting any major initiative, convene your team and write the fictional autopsy of how the project ended in total disaster.",
  psychologicalDefenses: [{"title":"The Anti-Goal Checklist","instruction":"Alongside your yearly goals, maintain an \"Anti-Goal\" list: specific things you refuse to do, clients you refuse to work with, and habits you refuse to tolerate."},{"title":"The Inverted Budget","instruction":"Instead of trying to find the highest-risk stock to get rich quick, eliminate high-interest loans, unnecessary subscriptions, and speculative bets."}],

  practiceQuestions: [
    {
      id: 'pq_inversion_technique_01',
      difficulty: 'intermediate',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A high school principal wants to dramatically improve student academic performance. Using the Inversion Technique, what question should the principal ask first?",
      scenarioText: "The administration has limited budget and needs immediate, high-impact improvements.",
      explanation: "Inversion focuses on identifying and eliminating the primary drivers of student failure and distraction before introducing complex new programs.",
      antidoteAdvice: "Invert the objective: ask what forces guarantee student failure and eliminate them systematically.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "\"What expensive smartboards and virtual reality headsets can we buy for the classrooms?\"",
          text: "\"What expensive smartboards and virtual reality headsets can we buy for the classrooms?\"",
          feedbackText: "Incorrect. This is ungrounded forward spending.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "\"What factors currently guarantee that students fail, lose sleep, and get distracted—and how do we eliminate them?\"",
          text: "\"What factors currently guarantee that students fail, lose sleep, and get distracted—and how do we eliminate them?\"",
          feedbackText: "Correct! Inversion attacks failure modes directly to create success.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "\"How can we make exams 50% easier so everyone gets an A grade?\"",
          text: "\"How can we make exams 50% easier so everyone gets an A grade?\"",
          feedbackText: "Incorrect. Lowering standards destroys educational value.",
        }
      ],
    },
  ],

  reflectionPrompt: "What is one obvious bad habit you indulge in weekly that, if completely eliminated, would immediately improve your quality of life?",
  tags: ['Mentalab Mind', 'critical_thinking'],
  relatedTopics: [],
  seoTitle: `${"The Inversion Technique: Invert, Always Invert"} | Mentalab Mind`,
  seoDescription: "A powerful problem-solving framework where complex challenges are approached backwards by focusing on what you want to avoid rather than what you want to achieve.",
  canonicalUrl: '/mind/critical-thinking/the-inversion-technique',
  ogImageUrl: '/images/mind/the-inversion-technique.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Inversion forms the foundation of modern risk engineering: pre-mortems (imagining the project has died before launching), cybersecurity threat modeling (thinking like a malicious hacker), and personal health (eliminating smoking and junk sleep rather than hunting for exotic superfoods).",
};

export const TOPIC_INVERSION_TECHNIQUE_HINGLISH: MindTopicDetail = {
  ...TOPIC_INVERSION_TECHNIQUE_EN,
  title: "The Inversion Technique: Ulta Sochne Ka Kamaal",
  subtitle: "Charlie Munger ka formula: Genius banne ki koshish mat karo, bas bewakoofiyaan karna band kar do.",
  shortDescription: "Carl Jacobi & Charlie Munger: \"Invert, always invert\" — Safalta paane ke bajaye barbadi ke raasto ko pehchan kar unhe block karna.",
  oneLineExplanation: "Mujhe bas itna bata do ki meri maut kahan hogi, taaki main wahan kabhi na jau.",
  summary30s: "Warren Buffett ke partner Charlie Munger ne kaha ki log hamesha sochte hain \"Ameer kaise banein?\". Par asli sawal yeh hona chahiye: \"Garib aur barbad kaise bante hain?\" Agar aap karz, juwa, aalas aur ghamand se bach jao, to ameer banna automatic ho jata hai!",
  coreConcept: "Ise kehte hain Inversion Technique (\"Ulta Sochna\"). Jacobi ne kaha tha: \"Hamesha ulta socho\". Seedha sochna mushkil hota hai, par galti dhoondna asaan hota hai. Agar aapko ek acchi shaadi chahiye, to socho \"Ek shaadi kaise barbad hoti hai?\" (Dhokha, disrespect, jhooth). In cheezon ko zindgi se nikaal phek do, rishta khud behtar ho jayega.",
  summary60s: "Startups me is technique ko \"Pre-Mortem\" kehte hain. Project launch karne se pehle team baithti hai aur sochti hai: \"Maan lo 1 saal baad hamari company band ho gayi. Hum kyu barbad huye?\" Sab log kamzoriyan likhte hain aur launch se pehle hi unhe theek kar lete hain.",
  quickTakeaways: ["Galtiyon se bachna hero banne se zyada faydemand hota hai","\"Invert, always invert\": Problem ko ulta karke dekho, solution saaf dikhega","Pre-mortem se disaster hone se pehle hi kamzoriyan pakad me aa jati hain","Anti-Goals banao: Yeh tay karo ki zindgi me kya KABHI nahi karna hai"],
  howItWorks: "Goal banaya -> Goal ko ulta kiya (\"Barbad kaise hona hai?\") -> Barbadi ke 5 raaste likhe -> Un 5 raasto ko block kiya -> Safalta guaranteed ho gayi.",
  howToRespond: "Pre-Mortem lagao: Koi bhi naya kaam shuru karne se pehle socho: \"Agar yeh plan sabse bada disaster bana, to uski wajah kya hogi?\" Un galtiyo ko abhi theek karo.",
  practiceQuestions: [
    {
      ...TOPIC_INVERSION_TECHNIQUE_EN.practiceQuestions[0],
      prompt: "Agar ek student ko exam me top karna hai, to Inversion Technique ke mutabiq use pehle kya sochna chahiye?",
      explanation: "Inversion kehta hai ki pehle yeh dekho ki exam me fail hone ke kya guaranteed tareeqe hain (Phone addiction, procrastination, last night cramming) aur unhe band karo.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Yeh sochna ki topper ban kar interview me kya bolunga.",
          text: "Yeh sochna ki topper ban kar interview me kya bolunga.",
          feedbackText: "Galat. Yeh day-dreaming hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Yeh sochna ki ek student fail kaise hota hai (Phone addiction, notes na padhna) aur un aadtoko pehle khatam karna.",
          text: "Yeh sochna ki ek student fail kaise hota hai (Phone addiction, notes na padhna) aur un aadtoko pehle khatam karna.",
          feedbackText: "Sahi! Inversion failure modes ko eliminate karke success ensure karta hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Exam se ek raat pehle 10 Red Bull peena.",
          text: "Exam se ek raat pehle 10 Red Bull peena.",
          feedbackText: "Galat. Yeh guaranteed disaster hai.",
        }
      ],
    },
  ],
  seoTitle: `${"The Inversion Technique: Ulta Sochne Ka Kamaal"} | Mentalab Mind`,
  seoDescription: "Carl Jacobi & Charlie Munger: \"Invert, always invert\" — Safalta paane ke bajaye barbadi ke raasto ko pehchan kar unhe block karna.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_INVERSION_TECHNIQUE_EN,
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

export const TOPIC_INVERSION_TECHNIQUE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_INVERSION_TECHNIQUE_EN,
  hinglish: TOPIC_INVERSION_TECHNIQUE_HINGLISH,
  hi: createLocalizedRecord('hi', "उलटाव तकनीक (The Inversion Technique)", "सफलता के सीधे मार्ग खोजने के बजाय विफलता और बर्बादी के कारणों को पहचानकर उन्हें योजनाबद्ध रूप से समाप्त करने का मानसिक मॉडल।", ["\"उलटा सोचें, हमेशा उलटा सोचें\": समस्याओं को उलटकर नए समाधान खोजें","मूर्खतापूर्ण गलतियों से बचना अत्यधिक बुद्धिमानी दिखाने से अधिक लाभकारी है","परियोजना शुरू करने से पहले प्री-मॉर्टम (Pre-Mortem) विश्लेषण करें"]),
  gu: createLocalizedRecord('gu', "ઇન્વર્ઝન ટેકનિક (ઊંધું વિચારવાની કળા)", "સફળતા શોધવા કરતાં નિષ્ફળતાના કારણો જાણી તેને દૂર કરવાની ચાર્લી મંગરની અદભુત પદ્ધતિ.", ["હંમેશા ઊંધું વિચારો","ભૂલો ટાળવી એ જ સાચી બુદ્ધિ છે","પ્રી-મોર્ટમ વિશ્લેષણ કરો"]),
  mr: createLocalizedRecord('mr', "उलटे विचार तंत्र (Inversion Technique)", "यश मिळवण्यापेक्षा अपयशाची कारणे शोधून ती नष्ट करण्यावर भर देणारी चार्ली मंगर यांची विचारसरणी.", ["नेहमी उलटा विचार करा","चुका टाळणे म्हणजेच यश मिळवणे","प्री-मॉर्टेम तंत्राचा वापर करा"]),
  te: createLocalizedRecord('te', "విలోమ పద్ధతి (Inversion Technique)", "విజయాన్ని వెతకడం కంటే వైఫల్యానికి దారితీసే కారణాలను గుర్తించి వాటిని నివారించే మానసిక నమూనా.", ["ఎల్లప్పుడూ విలోమంగా ఆలోచించండి","మూర్ఖత్వాలను నివారించడమే అసలైన విజయం","ప్రీ-మార్టమ్ విశ్లేషణ చేయండి"]),
  ta: createLocalizedRecord('ta', "தலைகீழ் சிந்தனை நுட்பம் (Inversion Technique)", "வெற்றியைத் தேடுவதை விட தோல்விக்கான காரணங்களை அடையாளம் கண்டு அவற்றை அகற்றும் சக்திவாய்ந்த சிந்தனை முறை.", ["எப்போதும் தலைகீழாக சிந்தியுங்கள்","முட்டாள்தனங்களை தவிர்ப்பதே வெற்றி","ப்ரீ-மார்ட்டம் முறையை பின்பற்றுங்கள்"]),
  kn: createLocalizedRecord('kn', "ವಿಲೋಮ ಚಿಂತನಾ ತಂತ್ರ (Inversion Technique)", "ಗೆಲುವನ್ನು ಹುಡುಕುವ ಬದಲು ಸೋಲಿಗೆ ಕಾರಣವಾಗುವ ಅಂಶಗಳನ್ನು ಗುರುತಿಸಿ ಅವುಗಳನ್ನು ತಪ್ಪಿಸುವ ಮಾನಸಿಕ ಮಾದರಿ.", ["ಯಾವಾಗಲೂ ವಿಲೋಮವಾಗಿ ಯೋಚಿಸಿ","ತಪ್ಪುಗಳನ್ನು ತಪ್ಪಿಸುವುದೇ ಜಾಣ್ಮೆ","ಪ್ರೀ-ಮಾರ್ಟಮ್ ವಿಶ್ಲೇಷಣೆ ನಡೆಸಿ"]),
  ml: createLocalizedRecord('ml', "വിപരീത ചിന്താ രീതി (Inversion Technique)", "വിജയം തേടുന്നതിനേക്കാൾ പരാജയത്തിന്റെ കാരണങ്ങൾ കണ്ടെത്തി അവ ഒഴിവാക്കാൻ പഠിപ്പിക്കുന്ന ചിന്താരീതി.", ["എപ്പോഴും വിപരീതമായി ചിന്തിക്കുക","വിഡ്ഢിത്തങ്ങൾ ഒഴിവാക്കുക","പ്രീ-മോർട്ടം വിശകലനം നടത്തുക"]),
  bn: createLocalizedRecord('bn', "বিপরীতায়ন কৌশল (Inversion Technique)", "সরাসরি সাফল্যের পেছনে না ছুটে ব্যর্থতার সম্ভাব্য কারণগুলি চিহ্নিত করে তা নির্মূল করার মনস্তাত্ত্বিক পদ্ধতি।", ["সবসময় উল্টো করে ভাবুন","বোকামি এড়িয়ে চলাই আসল বুদ্ধিমত্তা","কাজের আগে প্রি-মর্টেম অ্যানালাইসিস করুন"]),
  pa: createLocalizedRecord('pa', "ਉਲਟ ਸੋਚਣ ਦੀ ਤਕਨੀਕ (Inversion Technique)", "ਕਾਮਯਾਬੀ ਲੱਭਣ ਨਾਲੋਂ ਨਾਕਾਮੀ ਦੇ ਕਾਰਨਾਂ ਨੂੰ ਪਛਾਣ ਕੇ ਉਨ੍ਹਾਂ ਨੂੰ ਖ਼ਤਮ ਕਰਨ ਦਾ ਮਾਨਸਿਕ ਫਾਰਮੂਲਾ।", ["ਹਮੇਸ਼ਾ ਉਲਟਾ ਸੋਚੋ","ਗ਼ਲਤੀਆਂ ਤੋਂ ਬਚਣਾ ਹੀ ਸਭ ਤੋਂ ਵੱਡੀ ਸਿਆਣਪ ਹੈ","ਪ੍ਰੀ-ਮਾਰਟਮ ਵਿਧੀ ਅਪਣਾਓ"]),
  ur: createLocalizedRecord('ur', "الٹ سوچ کی تکنیک (Inversion Technique)", "کامیابی کے راستے تلاش کرنے کے بجائے ناکامی کی وجوہات کو پہچان کر ان کا خاتمہ کرنے کا طریقہ۔", ["ہمیشہ الٹا سوچیں","بیوقوفیوں سے بچنا ہی اصل کامیابی ہے","کام سے پہلے پری مارٹم تجزیہ کریں"]),
  or: createLocalizedRecord('or', "ବିପରୀତ ଚିନ୍ତନ କୌଶଳ (Inversion Technique)", "ସଫଳତା ଖୋଜିବା ଅପେକ୍ଷା ବିଫଳତାର କାରଣଗୁଡ଼ିକୁ ଚିହ୍ନଟ କରି ସେଗୁଡ଼ିକୁ ଦୂର କରିବାର ମାନସିକ ପଦ୍ଧତି।", ["ସର୍ବଦା ଓଲଟା ଚିନ୍ତା କରନ୍ତୁ","ମୂର୍ଖାମୀରୁ ବଞ୍ଚିବା ହିଁ ବୁଦ୍ଧିମତା","ପ୍ରି-ମର୍ଟମ୍ ବିଶ୍ଳେଷଣ କରନ୍ତୁ"]),
  as: createLocalizedRecord('as', "বিপৰীত চিন্তাৰ কৌশল (Inversion Technique)", "সফলতাৰ সন্ধান কৰাৰ বিপৰীতে ব্যৰ্থতাৰ কাৰণসমূহ চিনাক্ত কৰি সেইবোৰ নিৰ্মূল কৰাৰ মানসিক আৰ্হি।", ["সদায় ওলোটাকৈ ভাবক","মূৰ্খামি পৰিহাৰ কৰাটোৱেই প্ৰকৃত বুদ্ধিমত্তা","কামৰ পূৰ্বে প্ৰি-মৰ্টেম বিশ্লেষণ কৰক"]),
};
