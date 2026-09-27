import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: The Base Rate Fallacy: Blindness to Statistical Backgrounds
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Kahneman & Tversky (1973): On the psychology of prediction. Psychological Review
 * - Bar-Hillel (1980): The base-rate fallacy in probability judgments. Acta Psychologica
 * - Gigerenzer & Hoffrage (1995): How to improve Bayesian reasoning without instruction
 */

export const TOPIC_BASE_RATE_FALLACY_EN: MindTopicDetail = {
  id: 'base_rate_fallacy',
  categoryId: 'cognitive_biases',
  slug: 'base-rate-fallacy',
  difficulty: 'advanced',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 21,
  viewCount: 7640,
  shareCount: 630,
  bookmarkCount: 1390,
  title: 'The Base Rate Fallacy: Blindness to Statistical Backgrounds',
  subtitle: 'The cognitive error of evaluating specific case details while ignoring overall statistical probabilities.',
  shortDescription: 'The tendency to ignore general base rate statistics in favor of specific, individualized information, leading to catastrophic miscalculations in medical tests, law, and business.',
  oneLineExplanation: 'Assuming a 99% accurate test means you are 99% likely to be sick, ignoring that the disease affects only 1 in 10,000 people.',

  summary30s: 'The base rate fallacy occurs when the human mind is presented with general background statistics (base rates) and vivid specific evidence (a positive test, a witness description), and proceeds to ignore the base rates completely. We naturally think in narratives, not Bayesian probability distributions. Consequently, people routinely mistake rare events for common realities.',

  coreConcept: 'Formulated by Daniel Kahneman and Amos Tversky in 1973 and systematized by Maya Bar-Hillel in 1980, the base rate fallacy violates Bayes theorem. When evaluating the probability that an event belongs to a class, human judgment fixates on how closely the individual instance resembles the prototype (representativeness), disregarding how common or rare that class is in the broader population.',
  summary60s: 'Imagine a rare disease that affects 1 in 1,000 people (a base rate of 0.1%). A medical diagnostic test is 99% accurate (both sensitivity and specificity). If a random person tests positive, what is the probability they actually have the disease? Most people, including seasoned doctors, guess 99%. In reality, the true probability is only roughly 9%! Out of 100,000 people, 100 have the disease (99 test positive), while 99,900 are healthy (and 1%, or 999 people, receive false positives). Total positives = 1,098; true positives = 99. Without calculating the base rate, intuition fails by a factor of 10.',

  quickTakeaways: [
    'Narrative vs. Math: Vivid case descriptions hypnotize the brain into ignoring statistical prevalence',
    'The False Positive Paradox: Highly accurate tests for rare conditions produce far more false alarms than true cases',
    'Bayesian Updating: Always start with the baseline prior probability before updating with new evidence',
    'Natural Frequencies Tool: Convert abstract percentages into "X out of 1,000 people" to make base rates visible',
  ],

  whyItHappens: 'Representativeness heuristic. The brain seeks cognitive shortcuts. Evaluating whether a description matches a mental image requires minimal energy; calculating conditional Bayesian odds requires slow, deliberate System 2 processing.',
  evolutionaryMechanism: 'Ancestral humans lived in small bands of 50-150 people where macro-statistics did not exist. Every observed animal or track was an immediate, local signal. The brain evolved to react to immediate clues, not abstract percentages.',

  howItWorks: 'When given descriptive details, the brain replaces the complex probability question ("What are the prior odds?") with a simpler similarity question ("Does this person look like an engineer?"). The base rate is dropped from working memory.',
  whereYouEncounterIt: 'Medical screenings and laboratory diagnostics, judicial trials (prosecutor fallacy), startup success forecasting, terrorism threat detection, and hiring interviews.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Intuitive Guess vs. Bayesian Reality',
    description: 'How a 99% accurate test for a rare disease actually performs in a large population.',
    analogySideA: {
      label: 'Intuitive Belief',
      detail: '"The test is 99% accurate, so my positive result means I am 99% certain to have the condition."',
    },
    analogySideB: {
      label: 'Bayesian Reality (Base Rate 0.1%)',
      detail: 'Out of 100,000 people: 99 true positives vs 999 false positives. True probability is only ~9%.',
    },
  },

  researchSummary: 'Gerd Gigerenzer and Ulrich Hoffrage (1995) proved that presenting probabilistic data in "natural frequencies" (e.g., "10 out of 1,000") rather than conditional probabilities ("99% accuracy given a 1% base rate") increases the diagnostic accuracy of physicians from 15% to over 65%.',
  limitationsAndControversies: 'When base rates are given causal relevance (e.g., "90% of cabs on this street are green because the city owns them"), people incorporate base rates much more effectively into their judgment.',
  commonMisconceptions: 'Common myth: "Experienced physicians and forensic scientists intuitively understand Bayes rule." Reality: Over 80% of practicing medical doctors fail basic conditional probability tests involving mammogram and biopsy screenings.',

  howToRecognize: [
    'Panicking over a preliminary positive lab screen for a condition that affects 1 in 100,000 people',
    'Believing a student with high math scores is definitely a philosophy major rather than a commerce major, ignoring that commerce students outnumber philosophy students 50 to 1',
    'Investing in a startup because the founder "looks and talks just like Steve Jobs," ignoring the 90% startup failure base rate',
    'Assuming a rare adverse medical side effect will happen to you because you read an emotional anecdote on Reddit',
  ],

  scenarios: [
    {
      id: 'scen_brf_01',
      scenarioType: 'indian_context',
      title: 'The AI Screening Panic in a Gurugram Health Clinic',
      vignette: 'Rajesh, a 32-year-old software architect in Gurugram, underwent an executive annual health checkup that included an experimental AI blood screen for a rare pancreatic enzyme condition. The disease affects only 1 in 50,000 healthy adults. The clinic lab technician informed Rajesh that the AI model had a 98% accuracy rate, and Rajesh test came back positive. In a state of intense panic, Rajesh began drafting a will and making funeral arrangements, convinced he had a 98% chance of terminal illness. His specialist physician sat him down and explained: "In a cohort of 500,000 people, only 10 have the disease. But the 2% error rate produces 10,000 false positives. Your odds of being healthy are still greater than 99%."',
      breakdownAnalysis: 'Rajesh succumbed to the base rate fallacy. He confused test specificity with posterior probability, completely disregarding the microscopic base rate of the disease.',
      recommendedAction: 'Always request the absolute prevalence and natural frequency breakdown before interpreting any diagnostic test.',
    },
  ],

  examples: [
    {
      id: 'ex_brf_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'Venture Capital Startup Evaluation',
      description: 'An angel investor funds a company because the founders are charismatic ex-McKinsey consultants who present brilliantly. The investor ignores the base rate: in that specific sector, 94% of startups fail within 24 months regardless of pedigree.',
      takeaway: 'Vivid founder impressions should never override macro-industry failure base rates.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_brf_01',
      scenarioContext: 'A security scanner at an airport has a 99% accuracy rate at detecting contraband weapons. Only 1 in 100,000 passengers carries a weapon. The alarm rings for a passenger.',
      question: 'What is the most accurate assessment of the passenger probability of carrying a weapon?',
      prompt: 'What is the most accurate assessment of the passenger probability of carrying a weapon?',
      scenarioText: 'A security scanner at an airport has a 99% accuracy rate at detecting contraband weapons. Only 1 in 100,000 passengers carries a weapon. The alarm rings for a passenger.',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'The passenger is 99% likely to be armed because the machine has a 99% accuracy rating',
          explanation: 'This ignores the base rate completely; false alarms vastly outnumber true positives for ultra-rare events.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'The passenger is still overwhelmingly likely to be innocent because the 1% false alarm rate produces hundreds of false positives for every single true weapon',
          explanation: 'Accurate: Out of 100,000 travelers, 1 is armed (detected), but 1,000 innocent travelers trigger false alarms.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'The accuracy of the machine is irrelevant because airport security relies on facial recognition',
          explanation: 'Irrelevant to the probabilistic mechanics of base rate calculations.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'For extremely rare occurrences, even high-precision detectors generate far more false alarms than genuine hits.',
      difficulty: 'hard',
    },
  ],

  howToRespond: 'Always demand the base rate first and translate probabilities into natural frequencies.',
  psychologicalDefenses: [
    {
      title: 'Translate into Natural Frequencies',
      instruction: 'Whenever someone gives you a percentage or test accuracy, convert it: "Out of 10,000 people, how many actually have it, and how many will test positive falsely?"',
    },
    {
      title: 'Check the Prior Probability First',
      instruction: 'Before looking at individual traits, look up the industry base rate. What percentage of people succeed or fail at this by default?',
    },
  ],

  reflectionPrompt: 'When making a major decision (career change, investment, health scare), did you look at the macro base rate statistics, or did you rely entirely on an inspiring or frightening personal story?',
  references: [
    {
      id: 'ref_brf_01',
      title: 'On the psychology of prediction',
      citation: 'Kahneman, D., & Tversky, A. (1973). Psychological Review, 80(4), 237–251.',
      authors: 'Daniel Kahneman, Amos Tversky',
      publicationYear: 1973,
      journalOrPublisher: 'Psychological Review',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1037/h0034747',
      relevance: 'Foundational study proving that people ignore prior probabilities when individual descriptive information is provided.',
      displayOrder: 1,
    },
    {
      id: 'ref_brf_02',
      title: 'How to improve Bayesian reasoning without instruction: Frequency formats',
      citation: 'Gigerenzer, G., & Hoffrage, U. (1995). Psychological Review, 102(4), 684–704.',
      authors: 'Gerd Gigerenzer, Ulrich Hoffrage',
      publicationYear: 1995,
      journalOrPublisher: 'Psychological Review',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1037/0033-295X.102.4.684',
      relevance: 'Showed that presenting data as natural frequencies cures the base rate fallacy in clinical diagnostics.',
      displayOrder: 2,
    },
  ],
  tags: ['Cognitive Biases', 'Probability', 'Bayesian Reasoning', 'Decision Making'],
  relatedTopics: [
    { topicId: 'availability_heuristic', slug: 'availability-heuristic', title: 'Availability Heuristic', relationshipType: 'amplified_by' },
    { topicId: 'overconfidence_effect', slug: 'overconfidence-effect', title: 'Overconfidence Effect', relationshipType: 'amplified_by' },
  ],
  seoTitle: 'Base Rate Fallacy Explained: Bayesian Probability & Diagnostics | Mentalab Mind',
  seoDescription: 'Why we ignore background statistics. Learn how a 99% accurate test can be wrong 90% of the time and how natural frequencies solve it.',
  canonicalUrl: '/mind/cognitive-biases/base-rate-fallacy',
  ogImageUrl: '/images/mind/base-rate-fallacy.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: 'The base rate fallacy is the failure to integrate prior probability into conditional probability estimates.',
};

export const TOPIC_BASE_RATE_FALLACY_HINGLISH: MindTopicDetail = {
  ...TOPIC_BASE_RATE_FALLACY_EN,
  title: 'Base Rate Fallacy: Background Statistics Ko Ignore Karne Ki Galti',
  subtitle: 'Jab dimaag ek specific kahani sunkar aam aabadi ki actual percentage ko bhool jata hai.',
  shortDescription: 'Ek aisi cognitive bias jisme insaan overall statistical probability (base rate) ko ignore karke sirf specific detail par faisla le leta hai.',
  oneLineExplanation: '99% accurate test ka positive aane par sochna ki 99% bimari hai, jabki bimari 10,000 me se sirf 1 ko hoti hai.',

  summary30s: 'Base Rate Fallacy tab hoti hai jab hamara dimaag overall population statistics ko ignore karke kisi exciting ya darawni detail par focus kar leta hai. Agar koi bimari 1 lakh logon me se 1 ko hoti hai, aur test 99% accurate hai, tab bhi positive test aane par bimari hone ka chance 10% se bhi kam hota hai. Hamara dimaag stories me sochta hai, mathematics me nahi.',
  coreConcept: 'Kahneman aur Tversky (1973) ne dikhaya ki jab logon ko kisi shakhs ki personality batayi jati hai, toh wo base rate bhool jate hain. Agar bola jaye ki ek kamre me 70 engineers aur 30 lawyers hain, aur kisi ek aadmi ko debate pasand hai, toh log bolte hain "yeh 90% lawyer hai", jabki base rate me engineers zyada hain.',
  summary60s: 'Ek medical example dekhiye: Maano ek rare bimari 1,000 me se 1 insaan ko hoti hai (0.1%). Ek test 99% accurate hai. Agar aapka test positive aata hai, toh kitna chance hai ki aapko sach me bimari hai? Zyadatar log aur 80% doctors bolte hain 99%. Asliyat me yeh sirf 9% hai! Kyunki 99,900 healthy logon me se bhi 1% false positive aayenge (999 log). Base rate na dekhne se dimaag 10 guna galat andaza lagata hai.',

  quickTakeaways: [
    'Narrative vs. Maths: Hamara dimaag descriptive kahani sunkar background numbers ko bhool jata hai',
    'False Alarm Paradox: Rare conditions ke liye accurate tests me bhi false alarms sach se zyada hote hain',
    'Bayesian Soch: Nayi information dekhne se pehle hamesha base rate (background average) dekhein',
    'Natural Frequencies: Percentages ko "1,000 me se X log" me convert karne se sachai saaf dikhti hai',
  ],

  whyItHappens: 'Representativeness heuristic: Dimaag shortcut dhoondhta hai. Kisi cheez ka prototype se match check karna aasan hai, Bayesian calculation karna muskhil.',
  evolutionaryMechanism: 'Jungli zamaane me statistics ka koi wajood nahi tha. Aakho ke samne jo shikar ya sher dikha wahi sach tha, isliye dimaag instant local signals par react karta hai.',

  howItWorks: 'Dimaag kathin sawal ("Is cheez ke hone ka background chance kitna hai?") ko aasan sawal ("Kya yeh dikhne me waisa lagta hai?") se replace kar deta hai.',
  whereYouEncounterIt: 'Medical tests ke reports me, court trials me, startup investments me, aur hiring interviews me.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Dimaag Ka Andaza vs. Bayesian Ganit',
    description: 'Kaise 99% accurate test rare bimari me sirf 9% reliable hota hai.',
    analogySideA: {
      label: 'Dimaag Ka Quick Andaza',
      detail: '"Report 99% accurate hai aur test positive aaya hai, matlab mujhe pakka bimari hai."',
    },
    analogySideB: {
      label: 'Bayesian Base Rate Reality',
      detail: '1 Lakh me se: 99 true cases vs 999 false alarms. Bimari ka actual chance sirf ~9% hai.',
    },
  },

  researchSummary: 'Gerd Gigerenzer (1995) ne prove kiya ki jab doctors ko percentages ke bajaye "1,000 me se 10 log" ke form me data diya gaya, toh unki accuracy 15% se badhkar 65% ho gayi.',
  limitationsAndControversies: 'Agar base rate ka direct causal connection samjhaya jaye (jaise "is sadak par 90% cabs green hain"), toh log base rate ko ignore nahi karte.',
  commonMisconceptions: 'Mithak: "Specialist doctors probability acche se samajhte hain." Reality: 80% se zyada doctors basic conditional probability tests me fail hote hain.',

  howToRecognize: [
    'Kisi ultra-rare bimari ke preliminary lab test par ghabra kar behosh ho jana',
    'Ek startup founder ka energetic bol-chal dekh kar paisa laga dena, bina us sector ke 90% failure rate ko dekhe',
    'Social media par ek ajeeb case study dekh kar sochna ki ab har jagah aisa hi ho raha hai',
    'Background numbers ko dekhe bina sirf individual traits par judge karna',
  ],

  scenarios: [
    {
      id: 'scen_brf_hi_01',
      scenarioType: 'indian_context',
      title: 'Gurugram Me AI Blood Screen Ka Panic',
      vignette: 'Gurugram ke 32 saal ke software engineer Rajesh ne ek executive health checkup karwaya jisme ek rare pancreatic enzyme ka AI screen test tha. Yeh bimari 50,000 adults me se sirf 1 ko hoti hai. Lab wale ne bola test 98% accurate hai, aur Rajesh ka test positive aa gaya. Rajesh shock me chala gaya aur will banane laga. Uske senior doctor ne use samjhaya: "5 lakh logon me se sirf 10 ko bimari hogi, lekin 2% error rate se 10,000 healthy logon ka test galat positive aayega. Aapke bilkul theek hone ke chances abhi bhi 99% se zyada hain."',
      breakdownAnalysis: 'Rajesh base rate fallacy ka shikar hua. Usne test accuracy ko absolute probability samajh liya aur microscopic base rate ko bhool gaya.',
      recommendedAction: 'Kisi bhi rare test report par panic karne se pehle absolute frequency numbers maangein.',
    },
  ],

  examples: [
    {
      id: 'ex_brf_hi_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'Startup Investment Illusion',
      description: 'Ek investor charismatic IIT-IIM founder ko dekh kar 1 crore laga deta hai. Wo us sector ka 95% 3-year mortality rate dekhna bhool jata hai.',
      takeaway: 'Founder ki personality industry ke base failure rate ko override nahi kar sakti.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_brf_hi_01',
      scenarioContext: 'Airport par ek scanner machine hai jo 99% accurate hai. 1 lakh passengers me se sirf 1 shakhs ke paas illegal weapon hota hai. Scanner ka alarm baj jata hai.',
      question: 'Passenger ke paas weapon hone ka sabse accurate assessment kya hai?',
      prompt: 'Passenger ke paas weapon hone ka sabse accurate assessment kya hai?',
      scenarioText: 'Airport par ek scanner machine hai jo 99% accurate hai. 1 lakh passengers me se sirf 1 shakhs ke paas illegal weapon hota hai. Scanner ka alarm baj jata hai.',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Passenger ke paas 99% chance hai weapon hone ka kyunki machine 99% accurate hai',
          explanation: 'Yeh base rate ko ignore karta hai; rare events me false alarm sach se zyada hote hain.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Passenger ke innocent hone ka chance abhi bhi bahut zyada hai kyunki 1% false alarm rate se saikdo be-kasoor logon ka alarm bajega',
          explanation: 'Sahi: 1 lakh me 1 weapon pakda jayega par 1,000 innocent logo par galat alarm bajega.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Machine kharab hai aur security ko manually check karna chahiye',
          explanation: 'Machine ke algorithm ko samjhein, mathematics par focus karein.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Rare events me high-precision detectors bhi true cases se zyada false alarms generate karte hain.',
      difficulty: 'hard',
    },
  ],

  howToRespond: 'Hamesha pehle base rate maangein aur data ko natural frequency me convert karein.',
  psychologicalDefenses: [
    {
      title: 'Natural Frequency Formula',
      instruction: 'Percentage ke bajaye puchiye: "10,000 logon me se actual kitno ko yeh hota hai, aur kitne false alarms aate hain?"',
    },
    {
      title: 'Prior Probability Check',
      instruction: 'Kisi bhi individual ki kahani sunne se pehle industry ya field ka standard average rate check karein.',
    },
  ],

  reflectionPrompt: 'Aapne aakhri baar kab kisi medical report ya frightening khabar ko sunkar panic kiya tha? Kya aapne us event ki actual baseline probability check ki thi?',
  seoTitle: 'Base Rate Fallacy Kya Hai? Statistics Ko Ignore Karne Ka Trap | Mentalab Mind',
  seoDescription: 'Janiye kyu 99% accurate test bhi aksar galat hota hai. Seekhein Bayes theorem aur natural frequency ke practical tools.',
  canonicalUrl: '/mind/cognitive-biases/base-rate-fallacy',
};

export const TOPIC_BASE_RATE_FALLACY_HI: MindTopicDetail = {
  ...TOPIC_BASE_RATE_FALLACY_EN,
  title: 'Base Rate Fallacy (मूल दर भ्रम)',
  subtitle: 'विशिष्ट विवरणों के प्रभाव में आकर समग्र सांख्यिकीय संभावनाओं की अनदेखी करना।',
  shortDescription: 'एक ऐसा संज्ञानात्मक पूर्वाग्रह जहाँ व्यक्ति सामान्य सांख्यिकीय आँकड़ों (बेस रेट) को नजरअंदाज करके केवल विशिष्ट मामलों पर आधारित निर्णय लेता है।',
  oneLineExplanation: 'दुर्लभ घटनाओं में सांख्यिकीय पृष्ठभूमि को भूल जाना।',
  summary30s: 'मूल दर भ्रम (Base Rate Fallacy) तब होता है जब हम किसी विशिष्ट परीक्षण या आकर्षक कहानी के आधार पर निर्णय लेते हैं, परंतु समाज या जनसंख्या में उस घटना की वास्तविक व्यापकता को अनदेखा कर देते हैं। इससे चिकित्सा निदान, कानूनी निर्णयों और व्यावसायिक अनुमानों में भारी गलतियाँ होती हैं।',
};

export const TOPIC_BASE_RATE_FALLACY: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_BASE_RATE_FALLACY_EN,
  hinglish: TOPIC_BASE_RATE_FALLACY_HINGLISH,
  hi: TOPIC_BASE_RATE_FALLACY_HI,
  gu: TOPIC_BASE_RATE_FALLACY_EN,
  mr: TOPIC_BASE_RATE_FALLACY_EN,
  te: TOPIC_BASE_RATE_FALLACY_EN,
  ta: TOPIC_BASE_RATE_FALLACY_EN,
  kn: TOPIC_BASE_RATE_FALLACY_EN,
  ml: TOPIC_BASE_RATE_FALLACY_EN,
  bn: TOPIC_BASE_RATE_FALLACY_EN,
  pa: TOPIC_BASE_RATE_FALLACY_EN,
  ur: TOPIC_BASE_RATE_FALLACY_EN,
  or: TOPIC_BASE_RATE_FALLACY_EN,
  as: TOPIC_BASE_RATE_FALLACY_EN,
};
