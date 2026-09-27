import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: The Representativeness Heuristic: Stereotypes Masquerading as Probability
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Kahneman & Tversky (1972): Subjective probability: A judgment of representativeness. Cognitive Psychology
 * - Tversky & Kahneman (1983): Extensional versus intuitive reasoning: The conjunction fallacy in probability judgment (The Linda Problem)
 * - Gilovich, Griffin & Kahneman (2002): Heuristics and Biases: The Psychology of Intuitive Judgment
 */

export const TOPIC_REPRESENTATIVENESS_HEURISTIC_EN: MindTopicDetail = {
  id: 'representativeness_heuristic',
  categoryId: 'cognitive_biases',
  slug: 'representativeness-heuristic',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 23,
  viewCount: 8940,
  shareCount: 710,
  bookmarkCount: 1520,
  title: 'The Representativeness Heuristic: Stereotypes Masquerading as Probability',
  subtitle: 'How our brains judge likelihood by similarity to a mental prototype rather than mathematical odds.',
  shortDescription: 'A mental shortcut where people assess the probability of an uncertain event by how much it resembles typical prototypes, often violating basic laws of logic and statistics.',
  oneLineExplanation: 'Assuming an introverted guy who wears glasses and reads poetry must be a librarian rather than a farmer.',

  summary30s: 'The representativeness heuristic is the psychological mechanism behind stereotyping and probabilistic errors. When trying to decide whether an object, person, or company belongs to a particular category, the brain asks: "How much does this look like my mental picture of that category?" If the similarity is high, the brain concludes the probability is high, completely ignoring sample size, base rates, and logical rules.',

  coreConcept: 'Formalized by Amos Tversky and Daniel Kahneman in 1972 and 1983, the representativeness heuristic was epitomized by the famous "Linda Problem." Subjects read a description of Linda: 31, single, outspoken, deeply concerned with discrimination and social justice. They were asked which was more probable: (1) Linda is a bank teller, or (2) Linda is a bank teller and active in the feminist movement. In repeated trials, 85% of subjects chose Option 2, committing the "conjunction fallacy"—the logical impossibility that a compound condition (A and B) can ever be more likely than a single condition (A).',
  summary60s: 'Representativeness governs daily human interactions. If an entrepreneur speaks rapidly, wears a black turtleneck, and quotes Steve Jobs, angel investors instinctively evaluate the startup as likely to succeed because the founder matches their "visionary tech founder" prototype. In reality, superficial resemblance to past winners has near-zero correlation with software engineering rigor, unit economics, or market demand. The brain swaps a hard question ("What are the objective financial odds?") with an easy question ("How much does this look like my prototype?").',

  quickTakeaways: [
    'Prototype Matching: Probability judgments are hijacked by visual and behavioral similarity',
    'The Conjunction Fallacy: Believing that a specific, detailed story is more likely than a general category',
    'Insensitivity to Sample Size: Assuming small samples will look just like large population averages',
    'Statistical Calibration Tool: Force yourself to calculate mathematical base rates before evaluating surface resemblance',
  ],

  whyItHappens: 'Cognitive pattern recognition. The brain is an extraordinarily fast analog pattern matcher. Evaluating similarity requires instant neural firing in visual and associative memory; calculating probability requires deliberate, laborious calculations in the prefrontal cortex.',
  evolutionaryMechanism: 'In prehistoric nature, if an animal looked like a venomous snake, treating it immediately as a venomous snake saved your life. Hesitating to calculate exact statistical base rates meant death. Stereotyping nature was an evolutionary imperative.',

  howItWorks: 'The brain automatically constructs prototypes—idealized composite images of categories (e.g., "banker", "athlete", "scam artist"). When evaluating an individual case, working memory compares the case to the prototype. The degree of fit is substituted for probability.',
  whereYouEncounterIt: 'Hiring interviews, venture capital pitches, criminal trials, medical diagnoses, stock picking, and personality profiling.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Representativeness vs. Mathematical Reality',
    description: 'The famous Linda Problem showing how prototype resemblance causes the Conjunction Fallacy.',
    analogySideA: {
      label: 'Intuitive Guess (Prototype Fit)',
      detail: '"Linda resembles a feminist activist far more than a conventional bank teller, so Option 2 feels more likely."',
    },
    analogySideB: {
      label: 'Mathematical Logic (Set Theory)',
      detail: 'The set of "Bank Tellers" completely contains the subset of "Feminist Bank Tellers". Option 1 is strictly more probable.',
    },
  },

  researchSummary: 'Tversky & Kahneman (1983) tested the conjunction fallacy across multiple participant groups, including graduate students in statistics and doctoral candidates in decision science. Even individuals with advanced statistical training chose the conjunction roughly 80% of the time, proving how deeply ingrained prototype substitution is.',
  limitationsAndControversies: 'Gerd Gigerenzer argued that the Linda problem is a linguistic misunderstanding: in natural human discourse, people interpret "probable" as "plausible or narrative-coherent" rather than strict mathematical frequency.',
  commonMisconceptions: 'Common myth: "Representativeness only affects uneducated people." Reality: Highly experienced medical doctors frequently misdiagnose common diseases as exotic syndromes if a patient presentation happens to fit an exotic textbook prototype.',

  howToRecognize: [
    'Believing a well-dressed, polite man cannot be a financial fraudster because he does not look like a criminal',
    'Assuming a rough-looking person in an auto-rickshaw cannot be an angel investor or senior executive',
    'Falling in love with a startup idea because the founder "sounds just like a young Mark Zuckerberg"',
    'Believing a detailed, dramatic narrative is more likely to happen than a simple, generic outcome',
  ],

  scenarios: [
    {
      id: 'scen_rph_01',
      scenarioType: 'indian_context',
      title: 'The "IIT Founder" Pitch in Indiranagar',
      vignette: 'Sunil, an angel investor in Indiranagar, was pitched by two different founders on the same day. Founder A was an extroverted 23-year-old IIT Delhi graduate who wore branded startup hoodies, dropped silicon valley buzzwords, and presented 50 fast-paced pitch slides. Founder B was a quiet 38-year-old manufacturing veteran from Coimbatore who showed messy Excel spreadsheets detailing supply chain margins. Sunil invested ₹50 Lakhs in Founder A within 48 hours because "he looked and felt exactly like the next unicorn founder." 18 months later, Founder A startup went bust due to zero customer traction, while Founder B bootstrapped company reached ₹15 Crores in profitable revenue.',
      breakdownAnalysis: 'Sunil fell directly into the representativeness heuristic. He substituted superficial prototype matching (IIT degree, hoodie, buzzwords) for rigorous due diligence on business fundamentals.',
      recommendedAction: 'Create objective, blinded scorecard criteria: Evaluate financial metrics, customer retention, and unit margins before meeting founders in person.',
    },
  ],

  examples: [
    {
      id: 'ex_rph_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'Hot Stock Pattern Matching',
      description: 'A retail investor buys shares in an unprofitable green energy penny stock because its website uses sleek design elements similar to Tesla. The company has zero operational patents and goes into liquidation.',
      takeaway: 'Sleek visual branding does not equal technological capability or financial health.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_rph_01',
      scenarioContext: 'An interviewer meets a candidate for a data analyst position. The candidate is quiet, wears thick glasses, loves playing chess, and reads science fiction.',
      question: 'Which statement is mathematically more probable regarding the candidate current occupation?',
      prompt: 'Which statement is mathematically more probable regarding the candidate current occupation?',
      scenarioText: 'An interviewer meets a candidate for a data analyst position. The candidate is quiet, wears thick glasses, loves playing chess, and reads science fiction.',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'The candidate is an accountant at a bank',
          explanation: 'Accurate: The single category (accountant) has a far larger base rate and is mathematically more probable than any compound subset.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'The candidate is an accountant at a bank and a competitive chess club champion',
          explanation: 'Conjunction fallacy: A compound condition (A and B) can never be more probable than condition A alone.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Both statements are equally probable because they both involve the candidate being an accountant',
          explanation: 'Incorrect: Adding an additional specific constraint strictly lowers mathematical probability.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Never mistake a vivid, detailed narrative for high mathematical probability.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Separate surface similarity from base rate odds, and watch out for the conjunction fallacy.',
  psychologicalDefenses: [
    {
      title: 'Strip the Stereotype Details',
      instruction: 'When evaluating an investment or hire, remove descriptive adjectives (clothing, pedigree, personality) and evaluate only verifiable metrics and work samples.',
    },
    {
      title: 'The Conjunction Check',
      instruction: 'Whenever someone tells you a complex, multi-stage story of how the future will unfold, remember: every extra detail added makes the story LESS probable, not more.',
    },
  ],

  reflectionPrompt: 'When was the last time you misjudged someone abilities because their appearance did not match your mental picture of that profession? What did that cost you?',
  references: [
    {
      id: 'ref_rph_01',
      title: 'Subjective probability: A judgment of representativeness',
      citation: 'Kahneman, D., & Tversky, A. (1972). Cognitive Psychology, 3(3), 430–454.',
      authors: 'Daniel Kahneman, Amos Tversky',
      publicationYear: 1972,
      journalOrPublisher: 'Cognitive Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1016/0010-0285(72)90016-3',
      relevance: 'Foundational paper introducing the representativeness heuristic in probability evaluation.',
      displayOrder: 1,
    },
    {
      id: 'ref_rph_02',
      title: 'Extensional versus intuitive reasoning: The conjunction fallacy in probability judgment',
      citation: 'Tversky, A., & Kahneman, D. (1983). Psychological Review, 90(4), 293–315.',
      authors: 'Amos Tversky, Daniel Kahneman',
      publicationYear: 1983,
      journalOrPublisher: 'Psychological Review',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1037/0033-295X.90.4.293',
      relevance: 'Introduced the iconic Linda Problem and demonstrated the conjunction fallacy.',
      displayOrder: 2,
    },
  ],
  tags: ['Cognitive Biases', 'Probability', 'Heuristics', 'Decision Making'],
  relatedTopics: [
    { topicId: 'base_rate_fallacy', slug: 'base-rate-fallacy', title: 'Base Rate Fallacy', relationshipType: 'amplified_by' },
    { topicId: 'availability_heuristic', slug: 'availability-heuristic', title: 'Availability Heuristic', relationshipType: 'amplified_by' },
  ],
  seoTitle: 'Representativeness Heuristic Explained: The Linda Problem | Mentalab Mind',
  seoDescription: 'Why we judge probability by stereotypes. Learn the conjunction fallacy, prototype matching, and how to evaluate real odds objectively.',
  canonicalUrl: '/mind/cognitive-biases/representativeness-heuristic',
  ogImageUrl: '/images/mind/representativeness-heuristic.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: 'The representativeness heuristic is a judgment shortcut substituting similarity to a prototype for probability.',
};

export const TOPIC_REPRESENTATIVENESS_HEURISTIC_HINGLISH: MindTopicDetail = {
  ...TOPIC_REPRESENTATIVENESS_HEURISTIC_EN,
  title: 'Representativeness Heuristic: Stereotype Ko Probability Samajhne Ka Dhokha',
  subtitle: 'Jab dimaag yeh dekhta hai ki koi cheez kis jaisi lagti hai, aur maths ke rules bhool jata hai.',
  shortDescription: 'Ek aisi cognitive bias jisme dimaag kisi event ya shakhs ke hone ki probability ko uske prototype se match karke judge karta hai.',
  oneLineExplanation: 'Chashma pehne shant ladke ko dekh kar sochna ki wo zaroor librarian hoga, farmer nahi.',

  summary30s: 'Representativeness Heuristic stereotypes aur galat judgments ki sabse badi wajah hai. Jab hume yeh faisla lena hota hai ki koi insaan kaisa hai ya koi company chalegi ya nahi, dimaag puchte hai: "Kya yeh mere dimaag ki image se match karta hai?" Agar koi founder Steve Jobs jaisa bolta hai, toh dimaag bolta hai "yeh pakka kamyab hoga", bina financials ya ground reality check kiye.',
  coreConcept: 'Amos Tversky aur Daniel Kahneman (1983) ne mashhoor "Linda Problem" ke zariye ise prove kiya. Linda ke baare me bataya gaya ki wo outspoken hai aur social justice me active rehti hai. Logon se pucha gaya: Linda bank teller hai, ya Linda bank teller hone ke sath feminist movement me active hai? 85% logon ne second option chuna, jo mathematics ke hisaab se impossible hai (Conjunction Fallacy).',
  summary60s: 'Sochiye ek angel investor ke paas do founders aate hain. Ek founder branded hoodie pehnta hai, tezi se English bolta hai aur tech buzzwords use karta hai. Doosra founder simple kapdo me Excel sheet dikhata hai. Investor pehle founder ko paisa de deta hai kyunki wo "unicorn founder jaisa dikhta hai". Baad me pehla founder doob jata hai aur doosra profitable business khada karta hai. Dimaag visual prototype ko sach samajh leta hai.',

  quickTakeaways: [
    'Prototype Matching: Dimaag mathematical odds ke bajaye surface look ko priority deta hai',
    'Conjunction Fallacy: Ek detailed aur interesting kahani ko simple fact se zyada probable maan lena',
    'Small Sample Error: Chote data ko poori aabadi ka sach samajh lena',
    'Objective Scoring Tool: Appearance aur buzzwords ko hata kar sirf numbers aur facts par faisla karein',
  ],

  whyItHappens: 'Pattern recognition shortcut: Dimaag similarity ko microsecond me match kar leta hai. Probability calculate karne me System 2 ko mehnat karni padti hai.',
  evolutionaryMechanism: 'Junglon me jo saanp jaisa dikha use turant zehreela saanp maan lene se jaan bachti thi. Wahan statistics calculate karne ka time nahi hota tha.',

  howItWorks: 'Dimaag har category ka ek "ideal prototype" banata hai. Naya case aate hi use prototype se compare karta hai. Fit jitna high ho, dimaag utna high probability assign kar deta hai.',
  whereYouEncounterIt: 'Hiring interviews, startup pitches, court trials, medical diagnoses, aur stock investments.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Dimaag Ka Prototype vs. Maths Ka Set Theory',
    description: 'Linda Problem se samjhein kaise dimaag logical error karta hai.',
    analogySideA: {
      label: 'Dimaag Ka Andaza',
      detail: '"Linda feminist activist jaisi zyada lagti hai, isliye Option 2 hone ka chance zyada hai."',
    },
    analogySideB: {
      label: 'Mathematics Ka Niyam',
      detail: '"Bank Teller" ka circle bada hai, uske andar "Feminist Bank Teller" ek chota hissa hai. Single condition hamesha zyada probable hoti hai.',
    },
  },

  researchSummary: 'Tversky & Kahneman (1983) ne dikhaya ki statistics ke PhD students bhi Linda problem me 80% baar Conjunction Fallacy commit karte hain.',
  limitationsAndControversies: 'Gerd Gigerenzer ne kaha ki normal bhasha me log "probable" ka matlab "plausible kahani" samajhte hain, isliye error hota hai.',
  commonMisconceptions: 'Mithak: "Sirf unpadh log stereotype me phaste hain." Reality: Experienced doctors aur VC investors sabse zyada prototype matching me phas kar galat decisions lete hain.',

  howToRecognize: [
    'Kisi well-dressed aur meethi baat karne wale par blind trust kar lena kyunki wo "thug jaisa nahi dikhta"',
    'Auto me baithe simple shakhs ko kamzor samajh lena',
    'Kisi founder ki body language dekh kar sochna ki company 100% chalegi',
    'Ek lambi detailed kahani ko simple sach se zyada vishwasniya maan lena',
  ],

  scenarios: [
    {
      id: 'scen_rph_hi_01',
      scenarioType: 'indian_context',
      title: 'Indiranagar Me "IIT Founder" Pitch Ka Trap',
      vignette: 'Indiranagar ke angel investor Sunil ke paas do pitches aayin. Ek 23 saal ke IIT passout ki jisme fancy tech buzzwords aur branded hoodie thi. Doosri Coimbatore ke ek manufacturing veteran ki jo simple kapdo me Excel sheet dikha raha tha. Sunil ne 48 ghante me IIT wale ladke ko 50 lakh de diye kyunki "wo agla unicorn founder lag raha tha". 18 mahine me pehla startup band ho gaya jabki Coimbatore wale founder ne 15 crore ka profitable business banaya.',
      breakdownAnalysis: 'Sunil representativeness heuristic ka shikar hua. Usne business fundamentals ke bajaye superficial appearance aur prototype matching par paisa lagaya.',
      recommendedAction: 'Blinded scorecards use karein: Pehle unit economics aur revenue dekhein, founder se milne se pehle.',
    },
  ],

  examples: [
    {
      id: 'ex_rph_hi_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'Website Design Se Stock Pick Karna',
      description: 'Ek retail investor ek penny stock khareedta hai kyunki uski website Tesla jaisi modern lagti hai. Company ke paas koi revenue nahi hota aur stock zero ho jata hai.',
      takeaway: 'Acchi branding ka matlab company ka financially strong hona nahi hota.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_rph_hi_01',
      scenarioContext: 'Ek interviewer ek data analyst candidate se milta hai. Candidate shant hai, chashma pehnta hai, chess khelta hai aur science fiction padhta hai.',
      question: 'Candidate ke current job ke baare me mathematically kaunsa statement zyada probable hai?',
      prompt: 'Candidate ke current job ke baare me mathematically kaunsa statement zyada probable hai?',
      scenarioText: 'Ek interviewer ek data analyst candidate se milta hai. Candidate shant hai, chashma pehnta hai, chess khelta hai aur science fiction padhta hai.',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Candidate bank me accountant hai',
          explanation: 'Sahi: Single condition (accountant) ka base rate bada hai aur mathematically yeh zyada probable hai.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Candidate bank me accountant hai aur state chess champion bhi hai',
          explanation: 'Conjunction fallacy: Do conditions (A aur B) ek akeli condition A se kabhi zyada probable nahi ho sakti.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Dono statements barabar probable hain',
          explanation: 'Galat: Extra condition jodne se probability hamesha kam hoti hai.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Kisi detailed exciting kahani ko kabhi bhi mathematically zyada probable samajhne ki galti mat kijiye.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Appearance ko side me karein, base rate check karein aur conjunction fallacy se bachein.',
  psychologicalDefenses: [
    {
      title: 'Strip Descriptive Adjectives',
      instruction: 'Kisi candidate ya investment ko evaluate karte waqt unke kapde, baat-cheet aur styling ko ignore karke sirf numbers aur past work track dekhein.',
    },
    {
      title: 'Conjunction Check Rule',
      instruction: 'Yaad rakhein: Kahani me jitni zyada details judengi, uske sach hone ka chance utna hi kam hota jata hai.',
    },
  ],

  reflectionPrompt: 'Aapne pichli baar kab kisi shakhs ki appearance dekh kar uske talent ka galat andaza lagaya tha? Us judgment se aapko kya seekh mili?',
  seoTitle: 'Representativeness Heuristic Kya Hai? Prototype Ka Dhokha | Mentalab Mind',
  seoDescription: 'Janiye kyu hum stereotypes ko probability maan lete hain. Samjhein Linda Problem aur Conjunction Fallacy ka scientific breakdown.',
  canonicalUrl: '/mind/cognitive-biases/representativeness-heuristic',
};

export const TOPIC_REPRESENTATIVENESS_HEURISTIC_HI: MindTopicDetail = {
  ...TOPIC_REPRESENTATIVENESS_HEURISTIC_EN,
  title: 'Representativeness Heuristic (प्रतिनिधित्व अनुमान)',
  subtitle: 'गणितीय संभावनाओं के बजाय मानसिक प्रोटोटाइप और रूढ़िवादिता के आधार पर निर्णय लेना।',
  shortDescription: 'एक ऐसा मानसिक शॉर्टकट जहाँ लोग किसी घटना की संभावना का आकलन इस बात से करते हैं कि वह किसी विशिष्ट श्रेणी या छवि से कितनी मेल खाती है, बजाय इसके कि उसके होने की वास्तविक संभावना क्या है।',
  oneLineExplanation: 'दिखावे और समानता को वास्तविकता का प्रमाण मान लेना।',
  summary30s: 'प्रतिनिधित्व अनुमान (Representativeness Heuristic) हमारे निर्णयों में रूढ़िवादिता का कारण बनता है। जब कोई व्यक्ति या घटना हमारी किसी पूर्व-कल्पित छवि से मेल खाती है, तो हमारा मस्तिष्क तुरंत मान लेता है कि वह उसी श्रेणी का हिस्सा है, भले ही सांख्यिकी और तर्क इसके विपरीत हों। प्रसिद्ध लिंडा समस्या (Linda Problem) इसका सबसे बड़ा उदाहरण है।',
};

export const TOPIC_REPRESENTATIVENESS_HEURISTIC: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_REPRESENTATIVENESS_HEURISTIC_EN,
  hinglish: TOPIC_REPRESENTATIVENESS_HEURISTIC_HINGLISH,
  hi: TOPIC_REPRESENTATIVENESS_HEURISTIC_HI,
  gu: TOPIC_REPRESENTATIVENESS_HEURISTIC_EN,
  mr: TOPIC_REPRESENTATIVENESS_HEURISTIC_EN,
  te: TOPIC_REPRESENTATIVENESS_HEURISTIC_EN,
  ta: TOPIC_REPRESENTATIVENESS_HEURISTIC_EN,
  kn: TOPIC_REPRESENTATIVENESS_HEURISTIC_EN,
  ml: TOPIC_REPRESENTATIVENESS_HEURISTIC_EN,
  bn: TOPIC_REPRESENTATIVENESS_HEURISTIC_EN,
  pa: TOPIC_REPRESENTATIVENESS_HEURISTIC_EN,
  ur: TOPIC_REPRESENTATIVENESS_HEURISTIC_EN,
  or: TOPIC_REPRESENTATIVENESS_HEURISTIC_EN,
  as: TOPIC_REPRESENTATIVENESS_HEURISTIC_EN,
};
