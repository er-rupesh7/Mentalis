import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_CURSE_OF_KNOWLEDGE_EN: MindTopicDetail = {
  id: 'curse_of_knowledge',
  categoryId: 'cognitive_biases',
  slug: 'curse-of-knowledge',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 8,
  viewCount: 3760,
  shareCount: 300,
  bookmarkCount: 620,
  title: "The Curse of Knowledge: Expert Blindness in Teaching",
  subtitle: "Elizabeth Newton’s Stanford tapper-listener experiment on why knowing something makes it impossible to imagine not knowing it.",
  shortDescription: "A cognitive bias that occurs when an individual, communicating with other individuals, unknowingly assumes that the others have the background knowledge to understand.",
  oneLineExplanation: "Once you know something, you literally cannot imagine what it felt like to be ignorant of it.",

  summary30s: "First proven in 1990 by Stanford PhD student Elizabeth Newton, the Curse of Knowledge is the primary reason why brilliant professors, senior engineers, and executives are often terrible teachers. Newton had subjects tap out the rhythm of famous songs (like \"Happy Birthday\") with their knuckles while listeners guessed. Tappers predicted a 50% success rate; listeners guessed correctly only 2.5% of the time!",
  coreConcept: "When the tapper taps, they hear the rich melody, lyrics, and orchestra playing in their own mind. The listener hears only bizarre, disconnected tapping sounds on a table. In communication, an expert has rich schemas, contextual nuances, and acronyms playing in their brain, blinding them to the reality that their novice audience is hearing only incomprehensible static.",
  summary60s: "The Curse of Knowledge poisons onboarding manuals, corporate presentations, doctor-patient conversations, and software documentation. Experts use insider jargon and skip foundational logical steps not out of arrogance, but because their prefrontal cortex cannot physically reconstruct the naive mental model of a beginner.",
  quickTakeaways: ["Knowing a concept makes it neurologically difficult to simulate a beginner’s mind","The tapper-listener gap: you hear the symphony, the listener hears random knocks","Insiders chronically underestimate how confusing their jargon is to outsiders","The antidote is explaining concepts using tangible, concrete metaphors without acronyms"],

  whyItHappens: "Egocentric anchor heuristic: the brain uses its current knowledge state as the default baseline, failing to sufficiently adjust downward for others.",
  evolutionaryMechanism: "In ancestral tribes, shared knowledge was universally assumed because everyone lived in the exact same physical and cultural reality.",

  howItWorks: "Expert acquires mastery -> Mental models compress into abstract chunks -> Expert communicates chunks directly -> Novice lacks foundational primitives -> Confusion and alienation ensue -> Expert blames student.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Tapper’s Rich Symphony vs. Listener’s Random Thuds",
    description: "Elizabeth Newton’s Stanford finger-tapping experiment.",
    analogySideA: {
      label: "Tapper’s Perception (Expert)",
      detail: "Hears full orchestra, emotional lyrics, and harmony inside their skull. Predicts: \"50% will guess this easily!\"",
    },
    analogySideB: {
      label: "Listener’s Reality (Novice)",
      detail: "Hears disconnected, monotone knocks on wood: *tap... tap... tap-tap*. Actual success rate: 2.5%!",
    },
  },

  researchSummary: "Newton (1990, Stanford Doctoral Dissertation) and Camerer, Loewenstein & Weber (1989, Journal of Political Economy) proved that better-informed agents systematically fail to predict the choices of less-informed agents.",
  references: [
    {
      id: 'ref_curse_of_knowledge_01',
      title: "Overconfidence in the Communication of Intent: Heard and Unheard Melodies",
      citation: "Newton, E. (1990). PhD Dissertation, Stanford University.",
      authors: "Newton, E.",
      publicationYear: 1990,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1086/261651",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_curse_of_knowledge_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Senior Tech Lead Onboarding in Bengaluru",
      narrativeContext: "Vikram, a principal architect in Bengaluru, spent 20 minutes explaining the microservices architecture to a newly hired junior engineer, using terms like \"idempotent Kafka consumers\", \"gRPC backpressure\", and \"eventual consistency\". The junior engineer nodded politely, smiled, went to his desk, and stared at the terminal in paralyzed tears.",
      biasInAction: "Vikram was trapped by the Curse of Knowledge: he forgot that it took him 12 years of production fires to understand those abstractions.",
      optimalResponse: "Anchor to a physical real-world metaphor: \"Think of Kafka like a post office counter where letters wait in line so the clerks don't get overwhelmed.\"",
      reflectionPrompt: "Have you ever tried to teach a parent or grandparent how to use a smartphone feature and found yourself getting inexplicably irritated by their questions?",
    },
  ],

  examples: [
    {
      id: 'ex_curse_of_knowledge_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Senior Tech Lead Onboarding in Bengaluru",
      description: "Vikram, a principal architect in Bengaluru, spent 20 minutes explaining the microservices architecture to a newly hired junior engineer, using terms l...",
      takeaway: "Knowing a concept makes it neurologically difficult to simulate a beginner’s mind",
    },
  ],

  howToRecognize: "Saying phrases like \"It’s obvious that...\", \"Simply run this command...\", or feeling baffled when someone fails to understand your explanation.",
  whereYouEncounterIt: "Engineering documentation, university lectures, medical consultations, user interface design, and parent-child tutoring.",
  commonMisconceptions: "Myth: \"Great experts naturally make the best teachers.\" Fact: True experts often make the worst introductory teachers because their cognitive gap with beginners is the largest.",
  limitationsAndControversies: "When communicating exclusively among peers of identical seniority and specialization, dense domain jargon is highly efficient shorthand.",

  howToRespond: "The \"Explain Like I'm 12\" Protocol: Strip away every single acronym and explain the core mechanism using physical objects (water pipes, buckets, post offices, traffic lights).",
  psychologicalDefenses: [{"title":"The Beginner Test Group","instruction":"Never release documentation or curriculum without testing it on a complete novice who has permission to say \"I don’t get it.\""},{"title":"The Concrete Analogy Anchor","instruction":"Force yourself to explain the abstract concept using a tangible story from everyday life before introducing formal terminology."}],

  practiceQuestions: [
    {
      id: 'pq_curse_of_knowledge_01',
      difficulty: 'intermediate',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A senior cardiologist explains a heart condition to a nervous patient using medical terminology like \"idiopathic ventricular arrhythmia and ejection fraction deficit\". What cognitive bias explains why the doctor thinks this explanation was clear?",
      scenarioText: "The patient leaves the office terrified and with zero understanding of what medications to take.",
      explanation: "The Curse of Knowledge prevents the physician from recognizing that words obvious to medical professionals sound like an alien language to a layperson.",
      antidoteAdvice: "Use simple mechanical analogies (e.g. comparing the heart to a plumbing pump and electrical spark plug).",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "The doctor deliberately wanted to confuse the patient to show off superior intelligence.",
          text: "The doctor deliberately wanted to confuse the patient to show off superior intelligence.",
          feedbackText: "Incorrect. Most experts genuinely believe they are being helpful and clear.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "The Curse of Knowledge blinded the doctor to the huge cognitive gap between medical expertise and everyday comprehension.",
          text: "The Curse of Knowledge blinded the doctor to the huge cognitive gap between medical expertise and everyday comprehension.",
          feedbackText: "Correct! The doctor cannot un-know their medical vocabulary.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "The patient has an unusually low IQ.",
          text: "The patient has an unusually low IQ.",
          feedbackText: "Incorrect. Domain jargon confuses highly intelligent non-specialists.",
        }
      ],
    },
  ],

  reflectionPrompt: "What is a topic you know so well that you struggle to explain it to someone without getting impatient?",
  tags: ['Mentalab Mind', 'learning_psychology'],
  relatedTopics: [],
  seoTitle: `${"The Curse of Knowledge: Expert Blindness in Teaching"} | Mentalab Mind`,
  seoDescription: "A cognitive bias that occurs when an individual, communicating with other individuals, unknowingly assumes that the others have the background knowledge to understand.",
  canonicalUrl: '/mind/cognitive-biases/curse-of-knowledge',
  ogImageUrl: '/images/mind/curse-of-knowledge.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "The Curse of Knowledge poisons onboarding manuals, corporate presentations, doctor-patient conversations, and software documentation. Experts use insider jargon and skip foundational logical steps not out of arrogance, but because their prefrontal cortex cannot physically reconstruct the naive mental model of a beginner.",
};

export const TOPIC_CURSE_OF_KNOWLEDGE_HINGLISH: MindTopicDetail = {
  ...TOPIC_CURSE_OF_KNOWLEDGE_EN,
  title: "Curse of Knowledge: Expert Ka Andha-pan",
  subtitle: "Elizabeth Newton ki Stanford research: Jab hume koi cheez aati hai, to hum yeh imagine hi nahi kar sakte ki kisi ko yeh samajh kyu nahi aa rahi.",
  shortDescription: "Tapper-Listener Experiment: Senior engineers aur professors acche teacher kyu nahi ban pate kyuki wo basic level bhool chuke hote hain.",
  oneLineExplanation: "Aapke dimaag me poora gaana baj raha hai, par samne wale ko sirf table par ungli patakne ki ajeeb aawaaz sunai de rahi hai.",
  summary30s: "Stanford me ek famous experiment hua: Logo ko table par ungli maar kar \"Happy Birthday\" ka rhythm bajane ko bola gaya. Bajane wale ko laga 50% log gaana pehchan lenge. Par sunne walo me se sirf 2.5% log hi pehchan paye! Kyuki bajane wale ke dimaag me gaana baj raha tha, par sunne wale ko sirf bekaar thak-thak sunai de rahi thi.",
  coreConcept: "Ise kehte hain Curse of Knowledge. Jab aap kisi cheez ke master ban jate ho, to aapka dimaag bhool jata hai ki beginner hona kaisa lagta tha. College ke topper professors aur senior IT leads isiliye kharab padhate hain kyuki wo aisi bhaari jargon bolte hain jo aam insaan ke sir ke upar se nikal jati hai.",
  summary60s: "Jab aap kisi junior ko ya apne mummy-papa ko tech sikhate ho aur unhe samajh nahi aata, to aapko gussa aane lagta hai: \"Arre itna simple to hai!\" Par wo simple aapke liye hai, unke liye wo bilkul nayi duniya hai. Acche teacher wo hote hain jo technical shabdo ko aam zindagi ke real-world examples se samjhate hain.",
  quickTakeaways: ["Ek baar koi cheez seekh lo, to yeh bhoolna namumkin hota hai ki na aane par kaisa lagta tha","Aapke dimaag ka symphony doosre ko bekaar knock jaisa lagta hai","Jargon bolna intelligence nahi, balki communication failure ka saboot hai","Asli genius wahi hai jo sabse mushkil concept ko 10 saal ke bacche ko samjha sake"],
  howItWorks: "Expert ne 10 saal me seekha -> Wo concepts ko easy samajhne laga -> Beginner ko jargon me samjhaya -> Beginner blank ho gaya -> Expert ne bola \"Tum me dimaag nahi hai\".",
  howToRespond: "ELI5 (Explain Like I'm 5): Kisi bhi cheez ko aam bhasha me samjhao. Microservices ko samjhane ke liye restaurant ke kitchen aur waiter ka example do.",
  practiceQuestions: [
    {
      ...TOPIC_CURSE_OF_KNOWLEDGE_EN.practiceQuestions[0],
      prompt: "Ek senior doctor ne patient ko bola: \"Aapko idiopathic ventricular arrhythmia hai.\" Patient dar gaya aur kuch nahi samjha. Doctor ko kyu laga ki usne sahi samjhaya?",
      explanation: "Curse of knowledge ki wajah se doctor imagine hi nahi kar paya ki yeh medical words aam insaan ke liye kitne terrifying aur confusing hain.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Doctor patient se dushmani nikaal raha tha.",
          text: "Doctor patient se dushmani nikaal raha tha.",
          feedbackText: "Galat. Doctor sincerely explain kar raha tha.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Curse of Knowledge ki wajah se doctor bhool gaya ki aam insaan ko medical jargon samajh nahi aati.",
          text: "Curse of Knowledge ki wajah se doctor bhool gaya ki aam insaan ko medical jargon samajh nahi aati.",
          feedbackText: "Sahi! Expert blindness ki wajah se communication gap ban gaya.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Patient ko sunai kam deta tha.",
          text: "Patient ko sunai kam deta tha.",
          feedbackText: "Galat. Problem vocabulary ki thi, kaan ki nahi.",
        }
      ],
    },
  ],
  seoTitle: `${"Curse of Knowledge: Expert Ka Andha-pan"} | Mentalab Mind`,
  seoDescription: "Tapper-Listener Experiment: Senior engineers aur professors acche teacher kyu nahi ban pate kyuki wo basic level bhool chuke hote hain.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_CURSE_OF_KNOWLEDGE_EN,
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

export const TOPIC_CURSE_OF_KNOWLEDGE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_CURSE_OF_KNOWLEDGE_EN,
  hinglish: TOPIC_CURSE_OF_KNOWLEDGE_HINGLISH,
  hi: createLocalizedRecord('hi', "ज्ञान का अभिशाप (Curse of Knowledge)", "किसी विषय का गहन ज्ञान होने पर यह कल्पना करने में असमर्थ होना कि उस विषय से अनभिज्ञ व्यक्ति कैसा महसूस करता है।", ["विशेषज्ञ शुरुआती शिक्षार्थी की मानसिक स्थिति का अनुमान नहीं लगा पाते","जटिल शब्दावली के बजाय सरल वास्तविक उदाहरणों का उपयोग करें","उत्कृष्ट शिक्षण के लिए ज्ञान के अभिशाप को तोड़ना आवश्यक है"]),
  gu: createLocalizedRecord('gu', "જ્ઞાનનો અભિશાપ (Curse of Knowledge)", "એકવાર કંઈક શીખ્યા પછી અજાણ વ્યક્તિની સ્થિતિ સમજવામાં નિષ્ફળ જવાની માનસિક મર્યાદા.", ["ટેકનિકલ ભાષા સરળ કરો","નવા શીખનારની દ્રષ્ટિએ વિચારો","સરળ ઉદાહરણોથી સમજાવો"]),
  mr: createLocalizedRecord('mr', "ज्ञानाचा शाप (Curse of Knowledge)", "एखादी गोष्ट स्वतःला चांगल्या प्रकारे समजत असल्यामुळे इतरांना ती का समजत नाही हे न कळणे.", ["कठीण शब्द वापरणे टाळा","सुरुवातीच्या विद्यार्थ्याची मानसिकता ओळखा","सोप्या उदाहरणांनी शिकवा"]),
  te: createLocalizedRecord('te', "జ్ఞాన శాపం (Curse of Knowledge)", "ఒక విషయంపై పట్టు సాధించిన తర్వాత, ఏమీ తెలియని వ్యక్తి దృక్పథాన్ని అర్థం చేసుకోలేకపోవడం.", ["పరిభాషను సరళతరం చేయండి","కొత్తవారి కోణంలో ఆలోచించండి","ఉదాహరణలతో సులభంగా వివరించండి"]),
  ta: createLocalizedRecord('ta', "அறிவின் சாபம் (Curse of Knowledge)", "ஒரு விஷயம் நமக்கு தெரிந்த பிறகு, அது தெரியாதவர்களின் நிலையை புரிந்து கொள்ள முடியாத அறிவாற்றல் குறைபாடு.", ["கடினமான வார்த்தைகளை தவிருங்கள்","தொடக்க நிலையாளரின் கண்ணோட்டத்தில் பாருங்கள்","எளிய உதாரணங்களுடன் விளக்குங்கள்"]),
  kn: createLocalizedRecord('kn', "ಜ್ಞಾನದ ಶಾಪ (Curse of Knowledge)", "ಒಂದು ವಿಷಯ ನಮಗೆ ಚೆನ್ನಾಗಿ ತಿಳಿದ ಮೇಲೆ, ತಿಳಿಯದವರ ಮನಸ್ಥಿತಿಯನ್ನು ಊಹಿಸಲು ಸಾಧ್ಯವಾಗದಿರುವ ಸ್ಥಿತಿ.", ["ತಾಂತ್ರಿಕ ಪದಗಳನ್ನು ಸರಳಗೊಳಿಸಿ","ಹೊಸಬರ ದೃಷ್ಟಿಕೋನದಲ್ಲಿ ಯೋಚಿಸಿ","ಸರಳ ಉದಾಹરણೆಗಳಿಂದ ವಿವರಿಸಿ"]),
  ml: createLocalizedRecord('ml', "അറിവിന്റെ ശാപം (Curse of Knowledge)", "ഒരു കാര്യം നമുക്ക് അറിയാമെന്നതിനാൽ അത് മറ്റുള്ളവർക്ക് മനസ്സിലാകാൻ ബുദ്ധിമുട്ടാണെന്ന് തിരിച്ചറിയാത്ത അവസ്ഥ.", ["സാങ്കേതിക പദങ്ങൾ ലളിതമാക്കുക","തുടക്കക്കാരുടെ കണ്ണിലൂടെ കാണുക","ലളിതമായ ഉദാഹരണങ്ങളിലൂടെ പഠിപ്പിക്കുക"]),
  bn: createLocalizedRecord('bn', "জ্ঞানের অভিশাপ (Curse of Knowledge)", "কোনো বিষয়ে বিশেষজ্ঞ হওয়ার পর একজন শিক্ষানবিশের বোঝার অসুবিধা কল্পনা করতে না পারার মনস্তাত্ত্বিক অন্ধত্ব।", ["জটিল পারিভাষিক শব্দ এড়িয়ে চলুন","শিক্ষানবিশের দৃষ্টিভঙ্গি বুঝুন","বাস্তব জীবনের রূপক ব্যবহার করুন"]),
  pa: createLocalizedRecord('pa', "ਗਿਆਨ ਦਾ ਸਰਾਪ (Curse of Knowledge)", "ਕੋਈ ਗੱਲ ਖ਼ੁਦ ਨੂੰ ਸਮਝ ਆਉਣ ਮਗਰੋਂ ਇਹ ਨਾ ਸਮਝ ਸਕਣਾ ਕਿ ਨਵੇਂ ਬੰਦੇ ਨੂੰ ਇਹ ਔਖੀ ਕਿਉਂ ਲੱਗ ਰਹੀ ਹੈ।", ["ਔਖੀ ਸ਼ਬਦਾਵਲੀ ਛੱਡੋ","ਸਿੱਖਣ ਵਾਲੇ ਦੇ ਪੱਧਰ ਤੇ ਆਓ","ਸੌਖੀਆਂ ਉਦਾਹરણਾਂ ਨਾਲ ਸਮਝਾਓ"]),
  ur: createLocalizedRecord('ur', "علم کی نحوست (Curse of Knowledge)", "کسی موضوع کا ماہر بننے کے بعد اس بات کو سمجھنے سے قاصر رہنا کہ مبتدی کو یہ کیوں سمجھ نہیں آ رہا۔", ["تکنیکی اصطلاحات سے پرہیز کریں","اناڑی کے نقطہ نظر سے سوچیں","آسان مثالوں سے سمجھائیں"]),
  or: createLocalizedRecord('or', "ଜ୍ଞାନର ଅଭିଶାପ (Curse of Knowledge)", "ନିଜେ କୌଣସି ବିଷୟ ଜାଣିବା ପରେ, ଅଜ୍ଞ ବ୍ୟକ୍ତିର ମାନସିକ ସ୍ଥିତିକୁ ବୁଝିବାରେ ଅସମର୍ଥ ହେବାର ମନୋବୃତ୍ତି।", ["କଠିନ ଶବ୍ଦ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ","ନୂଆ ଶିଖୁଥିବା ଲୋକର ସ୍ତର ବୁଝନ୍ତୁ","ସରଳ ଉଦାହରଣ ଦିଅନ୍ତୁ"]),
  as: createLocalizedRecord('as', "জ্ঞানৰ অভিশাপ (Curse of Knowledge)", "কোনো কথা নিজে বুজি পোৱাৰ পিছত আনৰ বাবে সেইটো বুজি পোৱা কিয় টান সেয়া অনুভৱ কৰিব নোৱৰা মানসিকতা।", ["কঠিন পৰিভাষা পৰিহাৰ কৰক","নতুন শিকাৰুৰ দৃষ্টিৰে চাওক","সহজ উদাহৰণেৰে বুজাওক"]),
};
