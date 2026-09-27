import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: The Curse of Knowledge: The Impossibility of Imagining Ignorance
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Camerer, Loewenstein & Weber (1989): The curse of knowledge in economic settings: An experimental analysis. Journal of Political Economy
 * - Newton (1990): The rocky road from actions to intentions (The Stanford Tappers & Listeners study)
 * - Heath & Heath (2007): Made to Stick: Why Some Ideas Survive and Others Die
 */

export const TOPIC_CURSE_OF_KNOWLEDGE_EN: MindTopicDetail = {
  id: 'curse_of_knowledge',
  categoryId: 'cognitive_biases',
  slug: 'curse-of-knowledge',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 22,
  viewCount: 8120,
  shareCount: 650,
  bookmarkCount: 1410,
  title: 'The Curse of Knowledge: The Impossibility of Imagining Ignorance',
  subtitle: 'Once you understand something deeply, you can no longer accurately reconstruct what it was like not to understand it.',
  shortDescription: 'A cognitive bias that occurs when an individual, communicating with other individuals, unknowingly assumes that the others have the background knowledge to understand.',
  oneLineExplanation: 'The expert forgets what was once baffling to the beginner.',

  summary30s: 'The curse of knowledge is the invisible barrier separating experts from novices, teachers from students, and software engineers from users. Once a concept, acronym, or process becomes second nature to your brain, your mind suffers from cognitive amnesia: you cannot imagine the confusion of someone encountering it for the first time. As a result, experts give impenetrable explanations and mistake novice confusion for stupidity.',

  coreConcept: 'Coined by Colin Camerer, George Loewenstein, and Martin Weber in 1989, and famously demonstrated by Elizabeth Newton at Stanford in 1990 with the "Tapper and Listener" experiment. Tappers were asked to tap out the rhythm of well-known songs (like "Happy Birthday") with their fingers on a table; listeners had to guess the song. Tappers predicted listeners would guess 50% of the songs. In reality, listeners guessed only 2.5% (3 out of 120)! While tapping, the tapper hears the full orchestral melody in their head; the listener hears only a bizarre, disconnected series of thuds.',
  summary60s: 'Consider an IT security specialist writing an internal corporate email: "Ensure all endpoints implement mTLS and rotate their RSA keys weekly via KMS." To the engineer, this sentence is elementary. To the human resources manager reading it, it reads like alien hieroglyphics. When the manager asks for clarification, the engineer feels exasperated: "How can anyone not know what KMS is?" The curse of knowledge turns deep expertise into communication friction, alienating customers and paralyzing teams.',

  quickTakeaways: [
    'The Tapper Syndrome: You hear the full melody in your head; your listener hears only random thuds',
    'Jargon Blindness: Technical vocabulary becomes so intuitive that you treat it as common conversational English',
    'The Beginner Mind: Mastery requires deliberately unlearning your fluency to explain things to an intelligent 10-year-old',
    'The Concrete Analogy Antidote: Never introduce an abstract system without anchoring it to a tangible physical metaphor',
  ],

  whyItHappens: 'Cognitive compression and chunking. As the brain masters a domain, complex trees of information are compressed into single conceptual chunks. Because the brain cannot easily unpack these compressed chunks on the fly, it assumes the listener possesses the same decompressed files.',
  evolutionaryMechanism: 'Information transmission in ancestral bands relied on shared physical environment and direct imitation. Complex abstract jargon did not exist; everyone in the band shared identical sensory reality, so cognitive perspective-taking did not need to decompress multi-layered abstractions.',

  howItWorks: 'When speaking, the speaker working memory automatically accesses the rich context and sensory imagery associated with the subject. Because this internal simulation is vivid and effortless, the speaker fails to realize that the words leaving their mouth lack the necessary background context for the listener to reconstruct the same simulation.',
  whereYouEncounterIt: 'Software user interfaces and onboarding flows, medical consultations, university lectures, legal contracts, and corporate documentation.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'The Tapper vs. The Listener',
    description: 'How internal mental accompaniment creates an illusion of clear communication.',
    analogySideA: {
      label: 'The Tapper (The Expert)',
      detail: 'Hears the entire symphony, vocals, and instruments playing vividly in their head while tapping on the desk.',
    },
    analogySideB: {
      label: 'The Listener (The Beginner)',
      detail: 'Hears only disjointed, rhythmic knocking sounds on wood, completely stripped of melody.',
    },
  },

  researchSummary: 'Camerer, Loewenstein & Weber (1989) demonstrated in economic bargaining experiments that better-informed market participants were systematically unable to ignore their privileged information, resulting in suboptimal pricing offers and missed trading opportunities.',
  limitationsAndControversies: 'While the curse of knowledge impedes beginner communication, expert-to-expert communication between peers benefits enormously from compressed terminology and shared shorthand.',
  commonMisconceptions: 'Common myth: "Smart people are naturally good communicators." Reality: The more specialized and intelligent an individual becomes in a narrow field, the more severe their curse of knowledge typically is.',

  howToRecognize: [
    'Using three-letter acronyms in company-wide presentations without expanding them once',
    'Feeling irritated when someone asks you to explain what you consider a "basic, obvious" concept',
    'Writing software documentation that explains how to configure an API without explaining what the API does or why it exists',
    'Saying "it is simple, all you have to do is..." followed by six complex, jargon-heavy instructions',
  ],

  scenarios: [
    {
      id: 'scen_cok_01',
      scenarioType: 'indian_context',
      title: 'The Mutual Fund Explainer in Pune',
      vignette: 'Anand, a seasoned chartered financial analyst in Pune, offered to help his 60-year-old retired schoolteacher uncle invest his retirement corpus. Anand said: "Uncle, we will split 60% into an equity index fund with low tracking error to capture beta, and 40% into a short-duration debt fund with Macaulay duration under 2 years to optimize your yield-to-maturity against inflation." His uncle nodded politely out of embarrassment, felt intimidated by the vocabulary, and quietly left all his money in a low-interest savings account.',
      breakdownAnalysis: 'Anand suffered from the curse of knowledge. He spoke in compressed professional shorthand that made complete sense to him, forgetting that terms like "beta" and "Macaulay duration" sound like a foreign language to a layperson.',
      recommendedAction: 'Use the "Feynman Technique": Explain financial concepts using everyday physical analogies (e.g., comparing an index fund to a fruit basket of India top 50 companies).',
    },
  ],

  examples: [
    {
      id: 'ex_cok_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Healthcare Discharge Instructions',
      description: 'A surgeon tells a patient: "Take this NSAID with meals BID and look out for signs of peripheral edema." The patient does not know what BID or edema means and misses doses.',
      takeaway: 'Medical jargon creates preventable compliance failures; plain language saves lives.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_cok_01',
      scenarioContext: 'A senior engineer is writing documentation for an internal tool used by non-technical marketing associates. She begins with: "Initialize your OAuth2 bearer token in the CLI before querying the GraphQL endpoint."',
      question: 'Which revision best overcomes the curse of knowledge?',
      prompt: 'Which revision best overcomes the curse of knowledge?',
      scenarioText: 'A senior engineer is writing documentation for an internal tool used by non-technical marketing associates. She begins with: "Initialize your OAuth2 bearer token in the CLI before querying the GraphQL endpoint."',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Adding an exclamation mark and bold text telling marketing associates they must learn terminal commands',
          explanation: 'Coercion does not fix comprehension barriers; it increases friction and errors.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Providing a visual, step-by-step walkthrough: "Step 1: Open the website link. Step 2: Click the green Sign In with Google button to get your digital access key"',
          explanation: 'Accurate: Decompressing technical steps into intuitive visual actions eliminates the curse of knowledge.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Linking to the official 50-page OAuth2 specification document so they can read the theory',
          explanation: 'Dumping technical specifications worsens cognitive overload for novices.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Great communicators do not showcase their vocabulary; they decompress complexity into crystal-clear actions.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Test explanations on true novices, eliminate acronyms, and use concrete sensory analogies.',
  psychologicalDefenses: [
    {
      title: 'The Feynman 10-Year-Old Test',
      instruction: 'Before finalizing any guide, email, or presentation, try explaining the core premise to someone completely outside your field. If they cannot repeat it back, simplify it.',
    },
    {
      title: 'The "Tapper" Self-Interruption',
      instruction: 'Whenever you find yourself thinking "how can they not know this?", stop immediately and remember Elizabeth Newton tappers. You are hearing the music; they are only hearing taps.',
    },
  ],

  reflectionPrompt: 'What is something you know so well that you struggle to teach it to beginners without feeling impatient? How can you deconstruct it into simple physical analogies?',
  references: [
    {
      id: 'ref_cok_01',
      title: 'The curse of knowledge in economic settings: An experimental analysis',
      citation: 'Camerer, C., Loewenstein, G., & Weber, M. (1989). Journal of Political Economy, 97(5), 1232–1254.',
      authors: 'Colin Camerer, George Loewenstein, Martin Weber',
      publicationYear: 1989,
      journalOrPublisher: 'Journal of Political Economy',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1086/261651',
      relevance: 'Seminal economic paper proving that informed agents cannot accurately model the decisions of uninformed agents.',
      displayOrder: 1,
    },
    {
      id: 'ref_cok_02',
      title: 'Made to Stick: Why Some Ideas Survive and Others Die',
      citation: 'Heath, C., & Heath, D. (2007). Random House, New York.',
      authors: 'Chip Heath, Dan Heath',
      publicationYear: 2007,
      journalOrPublisher: 'Random House',
      sourceType: 'systematic_review',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1111/j.1540-5885.2007.00282.x',
      relevance: 'Analyzed Elizabeth Newton tapper/listener study and popularized practical tools to beat the curse of knowledge.',
      displayOrder: 2,
    },
  ],
  tags: ['Cognitive Biases', 'Communication', 'Teaching', 'Empathy'],
  relatedTopics: [
    { topicId: 'dunning_kruger_effect', slug: 'dunning-kruger-effect', title: 'Dunning-Kruger Effect', relationshipType: 'amplified_by' },
    { topicId: 'false_consensus_effect', slug: 'false-consensus-effect', title: 'False Consensus Effect', relationshipType: 'amplified_by' },
  ],
  seoTitle: 'Curse of Knowledge Explained: Why Experts Struggle to Teach | Mentalab Mind',
  seoDescription: 'Why smart people give confusing explanations. Learn the Tapper and Listener experiment, cognitive compression, and the Feynman technique.',
  canonicalUrl: '/mind/cognitive-biases/curse-of-knowledge',
  ogImageUrl: '/images/mind/curse-of-knowledge.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: 'The curse of knowledge is an asymmetric information bias where experts cannot reconstruct the cognitive state of a novice.',
};

export const TOPIC_CURSE_OF_KNOWLEDGE_HINGLISH: MindTopicDetail = {
  ...TOPIC_CURSE_OF_KNOWLEDGE_EN,
  title: 'Curse of Knowledge: Gyaan Ka Shraap - Seekhne Ke Baad Na-Samajhi Bhool Jana',
  subtitle: 'Jab hum koi cheez achhe se seekh jaate hain, toh hume lagta hai yeh toh sabke liye aasan honi chahiye.',
  shortDescription: 'Ek aisi cognitive bias jisme ek expert yeh bhool jata hai ki beginner ke liye yeh concept kitna mushkil aur naya hai.',
  oneLineExplanation: 'Expert ke dimaag me poora gaana chal raha hota hai, lekin beginner ko sirf ajeeb aawazein sunayi deti hain.',

  summary30s: 'Curse of Knowledge wo deewar hai jo teachers ko students se aur technical logon ko non-technical logon se alag karti hai. Jab aap kisi cheez me master ban jaate hain, toh aapka dimaag purana din bhool jata hai jab aapko kuch nahi aata tha. Aap aisi technical bhasha aur jargon bolte hain jo samne wale ke sir ke upar se nikal jati hai, aur lagta hai samne wala hi slow hai.',
  coreConcept: 'Elizabeth Newton (1990) ne Stanford me Tappers aur Listeners experiment kiya. Tappers ko table par ungli se gaane ka rhythm tap karna tha (jaise "Happy Birthday"). Tappers ko laga ki 50% log gaana pehchan lenge. Asliyat me sirf 2.5% log pehchan paaye! Tap karte waqt tapper ke dimaag me poora gaana baj raha hota hai, jabki listener ko sirf be-matlab thap-thap sunayi deti hai.',
  summary60s: 'Sochiye ek IT engineer HR manager ko bolta hai: "Aap apne endpoint par mTLS configure karke weekly RSA keys rotate kar lijiye." Engineer ke liye yeh basic hai, par HR wale ke liye yeh kisi doosri bhasha jaisa hai. Jab HR wala dobara puchta hai, toh engineer chidchida ho jata hai. Gyaan ka shraap communication ko tod deta hai.',

  quickTakeaways: [
    'Tapper Syndrome: Aapke dimaag me poori dhun chal rahi hai; samne wale ko sirf thap-thap sunayi de rahi hai',
    'Jargon Blindness: Technical terms aapke liye itne aam ho jate hain ki aap normal English bhool jate hain',
    'Beginner Mind: Achha communicator wo hai jo complex cheez ko 10 saal ke bacche ko bhi samjha sake',
    'Feynman Technique: Har abstract concept ko ek daily life ki concrete analogy se connect karein',
  ],

  whyItHappens: 'Cognitive compression: Dimaag expert hone ke baad lambe-chaude concepts ko ek single word me compress kar leta hai. Wo compress file samne wale ke dimaag me open nahi hoti.',
  evolutionaryMechanism: 'Purane zamaane me log aamne-saamne physical kaam dekh kar seekhte the. Abstract jargon nahi tha, sabki sensory reality same thi.',

  howItWorks: 'Bolte waqt speaker ke dimaag me full sensory pictures aur context hota hai. Wo yeh bhool jata hai ki uske muh se nikalne wale shabdo me wo context gayab hai.',
  whereYouEncounterIt: 'App ke tutorials me, doctor ke prescriptions me, college lectures me, aur software documentation me.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Tapper (Expert) vs. Listener (Novice)',
    description: 'Kaise dimaag ke andar ka music clear communication ka jhootha ehsaas deta hai.',
    analogySideA: {
      label: 'The Tapper (Expert)',
      detail: 'Table par tap karte waqt uske dimaag me gaane ke bol, instruments aur poori melody bajti hai.',
    },
    analogySideB: {
      label: 'The Listener (Beginner)',
      detail: 'Usko sirf lakdi par be-matlab thap-thap ki awaaz aati hai, koi sur ya dhun nahi milti.',
    },
  },

  researchSummary: 'Camerer, Loewenstein & Weber (1989) ne economic negotiations me prove kiya ki jin logon ke paas extra insider information hoti hai, wo doosre party ke point of view ko imagine nahi kar paate.',
  limitationsAndControversies: 'Do experts ke beech me jargon time bachata hai aur efficient hota hai. Problem tab aati hai jab expert kisi novice se baat karta hai.',
  commonMisconceptions: 'Mithak: "Agar koi bohot intelligent hai toh wo achha teacher hoga." Reality: Zyadatar brilliant log bohot kharab teachers hote hain kyunki unhe beginner ki confusion samajh hi nahi aati.',

  howToRecognize: [
    'Meeting me bina explain kiye short forms (acronyms) bolte jana',
    'Kisi ke simple sawaal puchne par "yeh toh basic hai, sabko pata hota hai" bolna',
    'Software documentation me technical jargon bharna bina step-by-step screenshots ke',
    'Baccho ya parents ko computer sikhate waqt impatient aur chidchida ho jana',
  ],

  scenarios: [
    {
      id: 'scen_cok_hi_01',
      scenarioType: 'indian_context',
      title: 'Pune Me Mutual Fund Ki Jargon Bhari Advice',
      vignette: 'Pune ke ek CFA Anand ne apne 60 saal ke retired teacher uncle ko retirement ka paisa invest karne ki advice di. Anand bola: "Uncle, hum 60% paisa equity index fund me low tracking error ke sath daalenge taaki beta capture ho sake, aur 40% debt fund me jiska Macaulay duration 2 saal se kam ho taaki inflation ke against YTM optimize rahe." Uncle sharm ki wajah se chup rahe, unhe kuch samajh nahi aaya, aur unhone darr kar sara paisa low-interest savings account me hi chhod diya.',
      breakdownAnalysis: 'Anand curse of knowledge ka shikar hua. Usne technical shorthand me baat ki, bina yeh soche ki ek aam retired teacher ke liye "beta" aur "Macaulay duration" Greek bhasha jaise hain.',
      recommendedAction: 'Feynman Technique use karein: Index fund ko India ki top 50 companiyon ki fruit basket se compare karke samjhayein.',
    },
  ],

  examples: [
    {
      id: 'ex_cok_hi_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Doctor Ka Prescription Jargon',
      description: 'Ek doctor bolta hai: "Is NSAID ko BID khana hai aur peripheral edema check karte rehna." Patient ko BID aur edema ka matlab nahi pata aur wo dawai galat tarike se leta hai.',
      takeaway: 'Simple bhasha use karne se patient ki jaan bachti hai.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_cok_hi_01',
      scenarioContext: 'Ek senior software engineer marketing team ke liye guide likh rahi hai. Wo likhti hai: "GraphQL endpoint query karne se pehle terminal me CLI se OAuth2 token initialize karein."',
      question: 'Kaunsa change curse of knowledge ko overcome karke marketing team ki madad karega?',
      prompt: 'Kaunsa change curse of knowledge ko overcome karke marketing team ki madad karega?',
      scenarioText: 'Ek senior software engineer marketing team ke liye guide likh rahi hai. Wo likhti hai: "GraphQL endpoint query karne se pehle terminal me CLI se OAuth2 token initialize karein."',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Bold me likh dena ki terminal seekhna sabke liye compulsory hai',
          explanation: 'Dhamki dene se comprehension nahi badhta, frustration badhti hai.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Visual step-by-step guide dena: "Step 1: Website kholein. Step 2: Hare rang ke Sign In button par click karke access key generate karein"',
          explanation: 'Sahi: Technical complexity ko simple visual actions me todna curse of knowledge ko khatam karta hai.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: '50 page ka official documentation link attach kar dena',
          explanation: 'Zyada documentation se beginner aur zyada ghabra jata hai.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Achha communicator jargon nahi jhadta, balki mushkil baat ko asaan karke samjhata hai.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Non-expert se feedback lein, technical acronyms hatayein aur concrete metaphors use karein.',
  psychologicalDefenses: [
    {
      title: 'Feynman Test',
      instruction: 'Kisi bhi baat ko samjhane se pehle sochiye: "Kya ek 10 saal ka baccha meri bhasha samajh sakta hai?" Agar nahi, toh bhasha ko simple banayein.',
    },
    {
      title: 'Tapper Reminder',
      instruction: 'Jab bhi doosre par gussa aaye ki "isko itni si baat samajh kyu nahi aati", yaad karein ki gaana sirf aapke sir me baj raha hai.',
    },
  ],

  reflectionPrompt: 'Aapki aisi kaunsi skill hai jise samjhate waqt aap aksar impatient ho jaate hain? Use asaan banane ke liye aap kaunsi real-life analogy use kar sakte hain?',
  seoTitle: 'Curse of Knowledge Kya Hai? Gyaan Ka Shraap | Mentalab Mind',
  seoDescription: 'Janiye kyu experts achhe teachers nahi ban paate. Samjhein Stanford Tappers experiment aur Feynman communication technique.',
  canonicalUrl: '/mind/cognitive-biases/curse-of-knowledge',
};

export const TOPIC_CURSE_OF_KNOWLEDGE_HI: MindTopicDetail = {
  ...TOPIC_CURSE_OF_KNOWLEDGE_EN,
  title: 'Curse of Knowledge (ज्ञान का अभिशाप)',
  subtitle: 'किसी विषय को गहराई से जानने के बाद अज्ञानता की स्थिति की कल्पना करने में असमर्थ होना।',
  shortDescription: 'एक ऐसा संज्ञानात्मक पूर्वाग्रह जहाँ एक जानकार व्यक्ति यह मान लेता है कि दूसरों के पास भी विषय को समझने के लिए आवश्यक पृष्ठभूमि और समझ मौजूद है।',
  oneLineExplanation: 'विशेषज्ञ यह भूल जाता है कि शुरुआत में यह विषय कितना जटिल लगता था।',
  summary30s: 'ज्ञान का अभिशाप (Curse of Knowledge) शिक्षकों और विद्यार्थियों, विशेषज्ञों और आम जनता के बीच संवाद की सबसे बड़ी बाधा है। जब हम किसी क्षेत्र में महारत हासिल कर लेते हैं, तो हमारा मस्तिष्क उस समय की अनभिज्ञता को भूल जाता है जब हम नए थे। परिणामस्वरूप, हम ऐसी जटिल शब्दावली का उपयोग करते हैं जिसे समझना दूसरों के लिए कठिन हो जाता है।',
};

export const TOPIC_CURSE_OF_KNOWLEDGE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_CURSE_OF_KNOWLEDGE_EN,
  hinglish: TOPIC_CURSE_OF_KNOWLEDGE_HINGLISH,
  hi: TOPIC_CURSE_OF_KNOWLEDGE_HI,
  gu: TOPIC_CURSE_OF_KNOWLEDGE_EN,
  mr: TOPIC_CURSE_OF_KNOWLEDGE_EN,
  te: TOPIC_CURSE_OF_KNOWLEDGE_EN,
  ta: TOPIC_CURSE_OF_KNOWLEDGE_EN,
  kn: TOPIC_CURSE_OF_KNOWLEDGE_EN,
  ml: TOPIC_CURSE_OF_KNOWLEDGE_EN,
  bn: TOPIC_CURSE_OF_KNOWLEDGE_EN,
  pa: TOPIC_CURSE_OF_KNOWLEDGE_EN,
  ur: TOPIC_CURSE_OF_KNOWLEDGE_EN,
  or: TOPIC_CURSE_OF_KNOWLEDGE_EN,
  as: TOPIC_CURSE_OF_KNOWLEDGE_EN,
};
