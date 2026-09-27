import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Critical Thinking Track
 * Topic: Occam's Razor: The Discipline of Ontological Parsimony
 * Category: Critical Thinking (critical_thinking)
 * 
 * Academic Grounding:
 * - Thorburn (1918): The myth of Occam's razor
 * - Baker (2007): Simplicity (Stanford Encyclopedia of Philosophy)
 * - Sober (2015): Ockham's Razors: A User's Guide
 */

export const TOPIC_OCCAMS_RAZOR_EN: MindTopicDetail = {
  id: 'occams_razor',
  categoryId: 'critical_thinking',
  slug: 'occams-razor-parsimony',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 3,
  viewCount: 7890,
  shareCount: 610,
  bookmarkCount: 1480,
  title: 'Occam\'s Razor: The Discipline of Ontological Parsimony',
  subtitle: 'When competing explanations make identical predictions, the one requiring the fewest unproven assumptions is superior.',
  shortDescription: 'The problem-solving principle attributed to William of Ockham stating that "entities should not be multiplied beyond necessity" (pluralitas non est ponenda sine necessitate).',
  oneLineExplanation: 'When you hear hoofbeats, think horses, not zebras or invisible extraterrestrial unicorns.',

  summary30s: 'Occam\'s Razor is scientific thinking’s sharpest cutting blade: when faced with multiple competing hypotheses for an observation, choose the simplest explanation that accounts for all the facts without inventing unverified entities, conspiracy networks, or magical mechanics. It does not guarantee truth, but it mathematically protects against overfitted delusion.',

  coreConcept: 'Formulated by 14th-century Franciscan friar and philosopher William of Ockham, the principle of parsimony is deeply grounded in modern Bayesian probability and Information Theory (Kolmogorov Complexity). If Hypothesis A requires two proven baseline assumptions to explain an outcome, while Hypothesis B requires those same two assumptions PLUS four secret conspiratorial cover-ups and a time-travel anomaly, the joint probability of Hypothesis B is exponentially lower.',
  summary60s: 'Imagine you wake up in the morning and notice your front garden fence is broken and trash cans are knocked over. Hypothesis A: Stray street dogs or a sudden wind gust knocked them down. Hypothesis B: Russian intelligence operatives in stealth helicopters conducted an undercover night raid looking for a secret microchip buried by your neighbor. Both hypotheses technically account for the broken fence. But Hypothesis B requires multiplying unproven assumptions to infinity. Occam’s Razor cuts away the fantastical baggage.',

  quickTakeaways: [
    'The Parsimony Rule: Do not invent complex hidden entities when known, simple mechanisms fully explain the observation',
    'Bayesian Multiplication: Every extra unverified assumption you add multiplies the probability of your hypothesis downward',
    'Conspiracy Inversion: Conspiracy theories routinely violate Occam\'s Razor by requiring hundreds of thousands of people to keep flawless secrets for decades',
    'Einstein’s Razor Caveat: "Everything should be made as simple as possible, but not simpler"',
  ],

  whyItHappens: 'Pattern-seeking hyperactive agency. The human brain evolved to detect intentional agents (faces in the clouds, enemies in the bushes). Our narrative circuits naturally prefer dramatic, theatrical stories involving villains and complex plots over dull, chaotic physical accidents.',
  evolutionaryMechanism: 'Assuming a broken branch was caused by an intentional predator kept ancestors alive, even if 9 times out of 10 it was merely the wind. This Hyperactive Agency Detection Device (HADD) makes humans naturally allergic to simple, random physical explanations.',

  howItWorks: 'The Occam’s Razor audit: (1) Identify Observations: List only verified empirical facts; (2) Enumerate Hypotheses: Identify competing explanations; (3) Count Hidden Assumptions: Explicitly count every unverified premise required by each hypothesis; (4) Shave the Fluff: Select the model that minimizes unverified assumptions while fitting all the data.',
  whereYouEncounterIt: 'Medical differential diagnosis ("common things are common"), bug tracking in software architecture, legal evidence evaluation, and scientific theory selection.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Conspiracy Multiplication vs. Parsimonious Baseline',
    description: 'How adding unverified assumptions degrades mathematical probability.',
    analogySideA: {
      label: 'Parsimonious Hypothesis (Occam’s Choice)',
      detail: '"The website went down because a developer pushed a faulty config file without testing on staging." (Assumptions: 1)',
    },
    analogySideB: {
      label: 'Multiplied Conspiracy Hypothesis',
      detail: '"Rival competitor hired rogue hackers who bribed the cloud provider’s senior director to sabotage our launch." (Assumptions: 7)',
    },
  },

  researchSummary: 'Elliott Sober’s (2015) mathematical analysis of parsimony demonstrated that simpler models not only avoid overfitting noisy data, but statistically provide superior predictive accuracy when tested on novel out-of-sample data sets. Occam\'s Razor is mathematically formal in modern machine learning via the Akaike Information Criterion (AIC) and Bayesian Information Criterion (BIC).',
  limitationsAndControversies: 'Occam\'s Razor is an epistemic heuristic, not an infallible law of the universe. Reality is occasionally genuinely complex, messy, and multi-causal. As Louis Pasteur demonstrated, the "simplest" explanation for disease in 1850 was "bad air" (miasma); the true explanation—invisible microscopic bacteria and viruses—initially seemed absurdly complex.',
  commonMisconceptions: 'Common myth: "Occam\'s Razor states that the simplest explanation is always guaranteed to be true." Reality: Occam\'s Razor is a heuristic of parsimony, not a physical law; it advises against multiplying unnecessary assumptions when empirical evidence already explains the phenomenon.',

  howToRecognize: [
    'Explaining a minor workplace miscommunication by inventing a massive, Machiavellian conspiracy among three departments',
    'Assuming a celebrity\'s death or an unexpected election result was orchestrated by a secret global cabal rather than sudden heart failure or polling errors',
    'Debugging software by assuming compiler bugs or operating system kernel corruption before checking for a missing semicolon in your own code',
    'Believing a partner was late for dinner because they were secretly meeting an ex, rather than being stuck on the notoriously jammed outer ring road',
  ],

  scenarios: [
    {
      id: 'scen_occam_01',
      scenarioType: 'indian_context',
      title: 'The Database Outage Paranoia in Bengaluru',
      vignette: 'At a fintech firm in Bengaluru, the production database cluster crashes on Friday afternoon right before the weekly executive report. The founder storms into the engineering bay: "This was corporate sabotage! Our rival who launched a competing app yesterday must have paid a disgruntled junior contractor to inject a DDoS attack from a proxy server!" The Staff Site Reliability Engineer pulls up the system logs, points to the console, and says: "Sir, our daily log-rotation cron job filled the root disk to 100% capacity at 2:01 PM because no one set up disk alerts."',
      breakdownAnalysis: 'The founder fell into theatrical agency detection, violating Occam\'s Razor. He invented an elaborate corporate espionage conspiracy requiring multiple unproven actors, when the mundane, zero-assumption mechanical explanation (a full disk drive) explained 100% of the symptoms.',
      recommendedAction: 'Apply the Diagnostic Razor: "Always check the simplest, most mundane physical error first before investigating external malice. Software crashes are almost always unhandled exceptions or capacity limits, not foreign intelligence strikes."',
    },
  ],

  examples: [
    {
      id: 'ex_occam_01',
      domain: 'health',
      displayOrder: 1,
      title: 'The Medical "Zebra" Admonition',
      description: 'Medical residents are famously taught: "When you hear hoofbeats in Texas, think horses, not zebras." If a patient has a cough and fever, diagnose influenza or bronchitis first, not an exotic tropical parasite found only in Madagascar.',
      takeaway: 'Anchor to high base-rate probabilities before hunting exotic anomalies.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_occam_01',
      scenarioContext: 'A scientist observes that an orbital space satellite deviated slightly from its projected gravitational trajectory by 0.002 seconds over six months. Two peer groups propose competing theories: Group 1 proposes that thermal radiation pressure from solar photons gently pushed against the satellite\'s solar panels. Group 2 proposes that an invisible, undiscovered dark-matter micro-wormhole passed through the solar system.',
      question: 'Why does Occam’s Razor unequivocally favor Group 1’s hypothesis?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Because Group 1 relies on established physical laws (thermal photon pressure) without inventing unverified exotic cosmic phenomena (dark-matter wormholes)',
          explanation: 'Accurate: ontological parsimony prefers explanations that do not invent unproven entities when known physics is sufficient.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Because Group 1 published their research paper in a journal with a more colorful cover',
          explanation: 'Publication aesthetics have zero epistemic standing.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Because satellites never experience any gravitational fluctuations in deep space',
          explanation: 'Satellites continuously experience subtle gravitational and non-gravitational perturbations.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Explanations grounded in verified mechanisms always supersede theories that invent novel entities.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Prioritize hypotheses that require the fewest unproven entities or conspiratorial coordination, testing them first before adding complexity.',
  psychologicalDefenses: [
    {
      title: 'The Unverified Assumption Tally',
      instruction: 'Whenever you hear or invent a complex explanation, write down the word "Assumes:" and number every single point that is not proven by hard physical evidence. The explanation with the lowest count is your working baseline.',
    },
    {
      title: 'Apply Hanlon\'s Razor in Interpersonal Conflict',
      instruction: 'A direct corollary of Occam’s Razor: "Never attribute to malice that which is adequately explained by carelessness, incompetence, or exhaustion."',
    },
    {
      title: 'Check the Root Disk First',
      instruction: 'In engineering and business troubles, always audit the simplest operational dependencies (passwords, disk space, Wi-Fi cables, typos) before rewriting core algorithms.',
    },
  ],

  reflectionPrompt: 'When an unexpected glitch or delayed reply happens, do you jump to elaborate theories of malice, or the simpler explanation of fatigue or error?',

  references: [
    {
      id: 'ref_sober_2015',
      authors: 'Sober, E.',
      year: 2015,
      title: 'Ockham\'s Razors: A User\'s Guide',
      publicationName: 'Cambridge University Press',
      volumeIssue: 'Chapters 1-3',
      doi: '10.1017/CBO9781107705937',
      evidenceStrength: 'foundational_monograph',
    },
    {
      id: 'ref_baker_2007',
      authors: 'Baker, A.',
      year: 2007,
      title: 'Simplicity',
      publicationName: 'Stanford Encyclopedia of Philosophy',
      volumeIssue: 'Fall 2016 Edition',
      doi: '10.1007/s11229-007-9159-2',
      evidenceStrength: 'systematic_review',
    },
  ],

  relatedTopics: [
    {
      topicId: 'first_principles_thinking',
      slug: 'first-principles-thinking',
      title: 'First Principles Thinking',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'falsification_principle',
      slug: 'falsification-principle',
      title: 'The Falsification Principle',
      relationshipType: 'amplified_by',
    },
  ],
};

export const TOPIC_OCCAMS_RAZOR: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_OCCAMS_RAZOR_EN,
  hinglish: {
    ...TOPIC_OCCAMS_RAZOR_EN,
    title: 'Occam\'s Razor: Sabse Seedha Aur Simple Jawab Hi Sahi Kyu Hota Hai?',
    subtitle: 'Jab kisi baat ke do explanations hon, toh bina wajah complex conspiracies banane ke bajaye sabse simple explanation chuno.',
    shortDescription: '14th-century philosopher William of Ockham ka principle: "Entities should not be multiplied beyond necessity" — jhoothi kahaniyan mat banao.',
    oneLineExplanation: 'Jab ghode ke daudne ki aawaz aaye, toh zebra ya uddne wale ghode ke baare me mat socho.',
    summary30s: 'Occam\'s Razor science ka sabse sharp dhaar wala hathiyar hai: agar do theories ek hi cheez explain karti hain, toh jisme sabse kam jhoothe assumptions aur shartien hain, wahi sahi hoti hai. Agar office me website down ho gayi, toh pehle yeh socho ki developer ne galat code daal diya, yeh mat socho ki CIA ne satellite se attack kar diya.',
  },
  hi: {
    ...TOPIC_OCCAMS_RAZOR_EN,
    title: 'Occam\'s Razor (ओखम का उस्तरा - मितव्ययिता का सिद्धांत)',
    subtitle: 'जब समान परिणामों के लिए कई व्याख्याएं उपलब्ध हों, तो न्यूनतम मान्यताओं वाली सरलतम व्याख्या ही श्रेष्ठ होती है।',
    shortDescription: 'विलियम ऑफ ओखम द्वारा प्रतिपादित समस्या-समाधान सिद्धांत जिसके अनुसार "आवश्यकता से अधिक तत्वों की कल्पना नहीं की जानी चाहिए"।',
    oneLineExplanation: 'जब टापों की आवाज सुनाई दे, तो घोड़ों के बारे में सोचें, काल्पनिक ज़ेबरा के बारे में नहीं।',
    summary30s: 'ओखम का उस्तरा (Occam\'s Razor) वैज्ञानिक चिंतन का आधारभूत नियम है। यदि किसी घटना के दो स्पष्टीकरण हैं, तो जिस स्पष्टीकरण में कम से कम अप्रमाणित धारणाओं (Assumptions) की आवश्यकता होती है, सांख्यिकीय रूप से उसकी सत्यता की संभावना सर्वाधिक होती है। यह सिद्धांत अनावश्यक षड्यंत्र सिद्धांतों को काट देता है।',
  },
  gu: TOPIC_OCCAMS_RAZOR_EN,
  mr: TOPIC_OCCAMS_RAZOR_EN,
  te: TOPIC_OCCAMS_RAZOR_EN,
  ta: TOPIC_OCCAMS_RAZOR_EN,
  kn: TOPIC_OCCAMS_RAZOR_EN,
  ml: TOPIC_OCCAMS_RAZOR_EN,
  bn: TOPIC_OCCAMS_RAZOR_EN,
  pa: TOPIC_OCCAMS_RAZOR_EN,
  ur: TOPIC_OCCAMS_RAZOR_EN,
  or: TOPIC_OCCAMS_RAZOR_EN,
  as: TOPIC_OCCAMS_RAZOR_EN,
  };
