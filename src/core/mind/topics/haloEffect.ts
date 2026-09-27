import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: The Halo Effect: How One Positive Trait Blinds Judgment
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Thorndike, E. L. (1920): A constant error in psychological ratings. Journal of Applied Psychology.
 * - Nisbett, R. E., & Wilson, T. D. (1977): The halo effect: Evidence for unconscious alteration of judgments. Journal of Personality and Social Psychology.
 * - Dion, Berscheid & Walster (1972): What is beautiful is good. Journal of Personality and Social Psychology.
 */

export const TOPIC_HALO_EFFECT_EN: MindTopicDetail = {
  id: 'halo_effect',
  categoryId: 'cognitive_biases',
  slug: 'halo-effect',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 10,
  viewCount: 7120,
  shareCount: 580,
  bookmarkCount: 1240,
  title: 'The Halo Effect: How One Positive Trait Blinds Judgment',
  subtitle: 'Our tendency to generalize a single positive impression (such as physical attractiveness or charisma) into global competence.',
  shortDescription: 'A cognitive bias where our overall positive impression of a person in one domain influences our feelings and thoughts about their character or competence in unrelated domains.',
  oneLineExplanation: 'Assuming someone is ethical and wise simply because they are well-spoken and handsome.',

  summary30s: 'First identified by Edward Thorndike in 1920, the Halo Effect occurs when one striking positive characteristic (like beauty, eloquence, or athletic skill) casts a golden glow over everything else a person does. Because the human brain craves simple, coherent judgments, we unconsciously assume that attractive people are also trustworthy, intelligent, and fair.',

  coreConcept: 'The Halo Effect demonstrates the brain\'s hunger for cognitive consistency. Evaluating someone as "exceptionally articulate but ethically questionable and mediocre at arithmetic" requires holding complex, conflicting nuances in working memory. The brain resolves this tension by flattening the person into a single evaluative category: all good (Halo) or all bad (Horns effect).',
  summary60s: 'In a landmark 1977 experiment at the University of Michigan, psychologists Richard Nisbett and Timothy Wilson showed two groups of students videotapes of the same college lecturer. In one video, he spoke with warm, agreeable body language; in the other, he spoke coldly and stiffly. Students who watched the warm lecturer rated his physical appearance, accent, and teaching style as overwhelmingly attractive and pleasant. Students who watched the cold lecturer rated his exact same accent and appearance as irritating and bizarre. His warmth created a halo that rewritten perception of unrelated physical traits.',

  quickTakeaways: [
    'Radiating Halo: Physical attractiveness and charisma unfairly inflate perceived intelligence and honesty',
    'The Horns Effect: Conversely, one awkward or unpleasant trait causes observers to assume total incompetence',
    'Interview Blindspots: Hiring managers frequently hire the candidate with the firmest handshake rather than the strongest data skills',
    'Blind Audition Antidote: Remove superficial cues (names, faces, accents) during initial evaluations to neutralize the halo',
  ],

  whyItHappens: 'Cognitive coherence and the affect heuristic. The brain avoids cognitive dissonance by constructing a simple, emotionally consistent story about people rather than tracking multi-dimensional trade-offs.',
  evolutionaryMechanism: 'Rapid social evaluation in ancestral hunter-gatherer bands required instant heuristics. Symmetrical facial features and vibrant physical health signaled low pathogen load and genetic fitness, which our ancestors generalized into overall trustworthiness.',

  howItWorks: 'The mechanism unfolds in three steps: (1) Salience Spotlight: An observer notices a high-status trait (e.g. height, articulate speech, tailored attire); (2) Emotional Valence: The observer feels immediate warmth or admiration; (3) Evaluative Spillover: That positive emotional feeling unconsciously biases ratings across unrelated domains (integrity, technical skill, financial discipline).',
  whereYouEncounterIt: 'Job interviews, courtroom sentencing (attractive defendants receive shorter sentences), celebrity endorsements, school grading, and startup investor pitches.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Halo Effect vs. Objective Evaluation',
    description: 'How a single superficial strength rewrites evaluation across unrelated technical domains.',
    analogySideA: {
      label: 'Objective Multi-Trait Review',
      detail: 'Evaluates public speaking, coding ability, and punctuality as distinct, independent skill vectors.',
    },
    analogySideB: {
      label: 'The Halo Distortion',
      detail: 'Observes charismatic presentation and assumes: "He must also write clean code and manage budgets perfectly."',
    },
  },

  researchSummary: 'Dion, Berscheid, and Walster (1972) published the foundational paper "What is beautiful is good." Participants who were shown photographs of attractive individuals automatically projected that they possessed higher marital happiness, professional success, and social morality, despite having zero biographical data.',
  limitationsAndControversies: 'The "Beauty Penalty" / Reverse Halo: Attractive individuals can suffer negative biases when applying for roles perceived as purely intellectual or when perceived as manipulative in corporate politics.',
  commonMisconceptions: 'Common myth: "Experienced professionals can tell the difference between charm and skill without structured scorecards." Reality: Controlled double-blind auditions in major symphony orchestras proved that blind auditions increased female musician acceptance by 50%, proving implicit visual halos heavily corrupt expert panels.',

  howToRecognize: [
    'Catching yourself assuming a new acquaintance is brilliant just because they have a posh accent or fashionable clothes',
    'Dismissing a technical expert\'s rigorous data because they stuttered or dressed casually in a board meeting',
    'Buying a consumer product because an Olympic athlete or Bollywood star smiled while holding it',
    'Assuming a successful software founder is qualified to lecture on geopolitics or immunology',
  ],

  scenarios: [
    {
      id: 'scen_halo_01',
      scenarioType: 'indian_context',
      title: 'The Tech Startup Pitch in Bengaluru',
      vignette: 'An angel investment panel in Bengaluru is evaluating two AI startups. Founder A is an articulate, charismatic Stanford graduate with impeccable stage presence and sleek designer slides. Founder B is an awkward engineer from a regional college who speaks in hesitant English and presents dense terminal benchmarks. The investors rave about Founder A: "He has the aura of a generational founder! His technical architecture must be world-class." Two years later, Founder A\'s product fails to work, while Founder B\'s open-source tool is adopted by thousands of developers.',
      breakdownAnalysis: 'The investors fell into the Halo Effect trap. Founder A\'s presentation polish and credentials created an emotional halo that blinded the investors from auditing his actual software code.',
      recommendedAction: 'Mandate structured rubrics and blind code reviews: Evaluate presentation charisma and technical architecture on two completely separate, non-overlapping evaluation sheets.',
    },
  ],

  examples: [
    {
      id: 'ex_halo_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Charismatic Job Interviewee',
      description: 'A candidate with warm humor and fluent English gets hired over an applicant who scored 30% higher on the practical programming challenge.',
      takeaway: 'Interpersonal charm is an indicator of sociability, not domain competence.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_halo_01',
      scenarioContext: 'A school principal is reviewing disciplinary reports. Student X is the polite, handsome captain of the cricket team from an affluent family. Student Y is quiet, poorly dressed, and struggles with social anxiety. Both students were caught skipping class together.',
      question: 'How would the Halo Effect manifest in the principal\'s response?',
      prompt: 'How would the Halo Effect manifest in the principal\'s response?',
      scenarioText: 'A school principal is reviewing disciplinary reports. Student X is the polite, handsome captain of the cricket team from an affluent family. Student Y is quiet, poorly dressed, and struggles with social anxiety. Both students were caught skipping class together.',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Assuming Student X made a harmless mistake under peer pressure, while assuming Student Y is a chronic troublemaker with bad character',
          explanation: 'Accurate: Student X\'s athletic and social halo gives him the benefit of the doubt, while Student Y suffers the Horns effect.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Applying the exact same detention policy to both students based strictly on school rulebooks',
          explanation: 'This represents objective procedural fairness, the opposite of the halo effect.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Expelling Student X because high-achieving students should be held to superhuman standards',
          explanation: 'This describes hyper-punitive expectation, not the classic halo effect.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'The halo effect grants unearned moral leniency to high-status individuals while penalizing low-status peers for identical infractions.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Deconstruct evaluations into independent, blind rubric scores to prevent one positive attribute from bleeding into unrelated ratings.',
  psychologicalDefenses: [
    {
      title: 'Blind Evaluation Protocols',
      instruction: 'Remove photos, names, and college logos from initial resumes. Conduct skills assessments before meeting candidates in person.',
    },
    {
      title: 'Decouple Trait Ratings',
      instruction: 'Evaluate charisma, technical accuracy, and work ethic on separate dates or assign different panel members to rate single, specific traits independently.',
    },
    {
      title: 'The Counter-Halo Check',
      instruction: 'Whenever someone impresses you immediately, ask yourself: "What is one domain where this person is probably completely incompetent?"',
    },
  ],

  reflectionPrompt: 'Whom in your personal life do you admire so much that you find it difficult to believe they could make a serious moral or financial mistake?',
  references: [
    {
      id: 'ref_halo_01',
      title: 'A constant error in psychological ratings',
      citation: 'Thorndike, E. L. (1920). Journal of Applied Psychology, 4(1), 25–29.',
      authors: 'Edward L. Thorndike',
      publicationYear: 1920,
      journalOrPublisher: 'Journal of Applied Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1037/h0071663',
      relevance: 'Original historical study coining and measuring the halo effect in military officer evaluations.',
      displayOrder: 1,
    },
    {
      id: 'ref_halo_02',
      title: 'The halo effect: Evidence for unconscious alteration of judgments',
      citation: 'Nisbett, R. E., & Wilson, T. D. (1977). Journal of Personality and Social Psychology, 35(4), 250–256.',
      authors: 'Richard E. Nisbett, Timothy D. Wilson',
      publicationYear: 1977,
      journalOrPublisher: 'Journal of Personality and Social Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1037/0022-3514.35.4.250',
      relevance: 'Landmark experiment proving participants are unconscious of how warmth distorts perception of physical appearance.',
      displayOrder: 2,
    },
  ],
  tags: ['Cognitive Biases', 'Social Perception', 'Judgment', 'Halo Effect'],
  relatedTopics: [
    { topicId: 'confirmation_bias', slug: 'confirmation-bias', title: 'Confirmation Bias', relationshipType: 'amplified_by' },
    { topicId: 'fundamental_attribution_error', slug: 'fundamental-attribution-error', title: 'Fundamental Attribution Error', relationshipType: 'amplified_by' },
  ],
  seoTitle: 'The Halo Effect: How First Impressions Blind Judgment | Mentalab Mind',
  seoDescription: 'Why attractive and charming people are assumed to be smarter and more moral. Learn the science of the Halo Effect and blind audition defenses.',
  canonicalUrl: '/mind/cognitive-biases/halo-effect',
  ogImageUrl: '/images/mind/halo-effect.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: 'The halo effect is a cognitive coherence distortion where global affective evaluation overrides independent dimensional appraisal.',
};

export const TOPIC_HALO_EFFECT_HINGLISH: MindTopicDetail = {
  ...TOPIC_HALO_EFFECT_EN,
  title: 'The Halo Effect: Ek Achhi Khasiyat Dekhkar Poore Insaan Ko Mahan Maan Lena',
  subtitle: 'Handsome dikhne ya achhi English bolne se log samne wale ko imaandar aur genius maan lete hain.',
  shortDescription: 'Ek aisi cognitive bias jisme kisi insaan ka ek impressive feature (jaise good looks ya charm) hume uski saari baaton ko sahi aur trustworthy samajhne par majboor kar deta hai.',
  oneLineExplanation: 'Jo dikhne me sundar aur bolne me meetha hai, dimaag use automatically imaandar maan leta hai.',

  summary30s: 'Halo Effect 1920 me Edward Thorndike ne discover kiya tha. Jab koi insaan dikhne me attractive hota hai ya bohot achhi presentation deta hai, toh humara dimaag uske baaki traits (jaise coding, honesty, financial discipline) ko bhi bina check kiye 5-star rating de deta hai. Iska ulta hota hai "Horns Effect", jahan ek buri aadat dekhkar hum insaan ko poori tarah bekaar samajh lete hain.',
  coreConcept: 'Dimaag ko simple aur coherent kahaniyan pasand hain. Kisi insaan ko "speaking me 10/10 par technical me 3/10 aur integrity me 4/10" rate karna dimaag ke liye thakaau hota hai. Isliye dimaag shortcut leta hai: ya toh sab achha (Halo) ya sab bekaar (Horns).',
  summary60s: 'Job interviews me yeh roz hota hai. Ek candidate tailored suit pehenkar confident smile ke sath aata hai aur fluently English bolta hai. Interviewer uski personality se impress hokar maan leta hai ki wo project management bhi kamaal ka karega. Jabki doosra candidate jo nervous tha par jiska technical score 40% zyada tha, reject ho jata hai.',

  quickTakeaways: [
    'Radiating Halo: Good looks aur confidence se log aapko bina wajah intelligent aur honest maan lete hain',
    'Horns Effect: Ek choti si awkwardness dekhkar log aapki saari abilities par shak karne lagte hain',
    'Interview Trap: Fluent bolna communication ka symbol hai, domain expertise ka nahi',
    'Blind Evaluation: Naam aur chehra chupakar kaam evaluate karne se halo effect khatam ho jata hai',
  ],

  whyItHappens: 'Cognitive coherence aur affect heuristic. Hamara dimaag conflicting signals handle karne se bachta hai aur instant positive vibe par sab sahi maan leta hai.',
  evolutionaryMechanism: 'Prachin kal me health aur symmetrical features genetic fitness ke signals the, jisse dimaag unhe safe aur trustworthy maanta tha.',

  howItWorks: 'Teen steps: (1) Attractive Trait: Koi impressive quality saamne aati hai; (2) Instant Admiration: Andar se achhi feeling aati hai; (3) Spillover: Wo achhi feeling uske character aur skills par bhi apply ho jati hai.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Halo Effect vs Objective Evaluation',
    description: 'Kaise ek quality poore evaluation ko corrupt kar deti hai.',
    analogySideA: {
      label: 'Objective Multi-Trait Review',
      detail: 'Public speaking, coding ability aur punctuality ko alag-alag assess karna.',
    },
    analogySideB: {
      label: 'Halo Distortion',
      detail: '"Yeh kitna smart dikhta hai, iska software code bhi perfect hoga."',
    },
  },

  examples: [
    {
      id: 'ex_halo_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Charismatic Interviewee',
      description: 'Ek confident aur charming candidate ko job mil gayi jabki practical coding test me dusre shant candidate ke marks 30% zyada the.',
      takeaway: 'Personality charm social skill hai, technical capability nahi.',
    },
  ],

  scenarios: [
    {
      id: 'scen_halo_01',
      scenarioType: 'indian_context',
      title: 'Bengaluru Me Startup Pitch',
      vignette: 'Bengaluru me do founders pitch karte hain. Founder A Stanford passout hai, fluent English bolta hai aur designer slides laya hai. Founder B tier-3 college se hai, thoda stammer karta hai par actual working code dikhata hai. Investors Founder A ko fund kar dete hain yeh bolkar ki "iski aura kamaal ki hai." 2 saal baad Founder A ka product flop ho jata hai jabki Founder B ka open-source tool hazaron developers use karne lagte hain.',
      breakdownAnalysis: 'Investors Founder A ke charm aur credential ke halo effect me phas gaye aur unhone uske actual backend code ka audit hi nahi kiya.',
      recommendedAction: 'Blind code review kijiye: Presentation alag dekhein aur technical performance ko bina chehra dekhe evaluate karein.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_halo_01',
      scenarioContext: 'School principal ke paas do students aate hain jinhone class bunk ki thi. Student X cricket team ka handsome captain hai jo polite hai. Student Y quiet hai, simple kapde pehanta hai aur thoda awkward hai.',
      question: 'Halo Effect ke mutabik principal ka reaction kaisa hoga?',
      prompt: 'Halo Effect ke mutabik principal ka reaction kaisa hoga?',
      scenarioText: 'School principal ke paas do students aate hain jinhone class bunk ki thi. Student X cricket team ka handsome captain hai jo polite hai. Student Y quiet hai, simple kapde pehanta hai aur thoda awkward hai.',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Student X ko bolna ki "tumse galti se ho gaya hoga", aur Student Y ko bad-character troublemaker maan lena',
          explanation: 'Sahi: Student X ka athletic charm use unearned mercy dilata hai, jabki Student Y ko Horns effect ka shikaar hona padta hai.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Dono par rulebook ke hisaab se identical fine lagana',
          explanation: 'Yeh fair procedural justice hai, halo effect nahi.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Student X ko zyada saza dena kyunki wo sports captain hai',
          explanation: 'Yeh hyper-expectation hai, halo effect nahi.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Halo effect privileged logon ko galat chhoot dilata hai aur doosron ko bina wajah blame karta hai.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Har trait ko independent rubric par evaluate karein taaki charm technical judgment ko corrupt na kare.',
  psychologicalDefenses: [
    {
      title: 'Blind Evaluation',
      instruction: 'Initial resume screening me photo aur naam hide karein; practical skill test pehle lein.',
    },
    {
      title: 'Counter-Halo Check',
      instruction: 'Jab kisi se turant impress hon, toh khud se poochein: "Aisa kaunsa kaam hai jo is insaan ko bilkul nahi aata hoga?"',
    },
  ],

  reflectionPrompt: 'Aapki life me aisa kaun hai jise aap itna pasand karte hain ki lagta hai wo kabhi koi galti kar hi nahi sakta?',
  seoTitle: 'Halo Effect Kya Hai? First Impression Ka Dimaagi Khel | Mentalab Mind',
  seoDescription: 'Janiye kyu hum good-looking aur charismatic logon ko intelligent aur honest maan lete hain. Seekhein blind evaluation ke tareeqe.',
  canonicalUrl: '/mind/cognitive-biases/halo-effect',
};

export const TOPIC_HALO_EFFECT_HI: MindTopicDetail = {
  ...TOPIC_HALO_EFFECT_EN,
  title: 'Halo Effect (परिवेश प्रभाव)',
  subtitle: 'किसी व्यक्ति के एक सकारात्मक गुण को देखकर उसके पूरे व्यक्तित्व को श्रेष्ठ मान लेना।',
  shortDescription: 'एक संज्ञानात्मक पूर्वाग्रह जहाँ किसी व्यक्ति का आकर्षण या वाकपटुता हमें उसके चरित्र और बौद्धिक योग्यता के प्रति अंधा बना देती है।',
  oneLineExplanation: 'सुंदरता और आकर्षण को बुद्धिमत्ता और ईमानदारी का प्रमाण मान लेना।',
  summary30s: 'परिवेश प्रभाव (Halo Effect) 1920 में एडवर्ड थार्नडाइक द्वारा पहचाना गया था। जब कोई व्यक्ति आकर्षक या मिलनसार होता है, तो हमारा दिमाग स्वतः मान लेता है कि वह बुद्धिमान, ईमानदार और सक्षम भी होगा।',
};

export const TOPIC_HALO_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_HALO_EFFECT_EN,
  hinglish: TOPIC_HALO_EFFECT_HINGLISH,
  hi: TOPIC_HALO_EFFECT_HI,
  gu: TOPIC_HALO_EFFECT_EN,
  mr: TOPIC_HALO_EFFECT_EN,
  te: TOPIC_HALO_EFFECT_EN,
  ta: TOPIC_HALO_EFFECT_EN,
  kn: TOPIC_HALO_EFFECT_EN,
  ml: TOPIC_HALO_EFFECT_EN,
  bn: TOPIC_HALO_EFFECT_EN,
  pa: TOPIC_HALO_EFFECT_EN,
  ur: TOPIC_HALO_EFFECT_EN,
  or: TOPIC_HALO_EFFECT_EN,
  as: TOPIC_HALO_EFFECT_EN,
};
