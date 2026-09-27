import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: The Gambler’s Fallacy: Expecting Luck to Correct Itself
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Laplace, P. S. (1820): A Philosophical Essay on Probabilities.
 * - Tversky, A., & Kahneman, D. (1971): Belief in the law of small numbers. Psychological Bulletin.
 * - Croson, R., & Sundali, J. (2005): The gambler’s fallacy and the hot hand: An empirical analysis of casinos. Journal of Risk and Uncertainty.
 */

export const TOPIC_GAMBLERS_FALLACY_EN: MindTopicDetail = {
  id: 'gamblers_fallacy',
  categoryId: 'cognitive_biases',
  slug: 'gamblers-fallacy',
  difficulty: 'beginner',
  estimatedReadingMinutes: 4,
  scientificConsensusTier: 'established',
  sortWeight: 18,
  viewCount: 6510,
  shareCount: 490,
  bookmarkCount: 1080,
  title: 'The Gambler’s Fallacy: Expecting Luck to Correct Itself',
  subtitle: 'The erroneous belief that past independent random events alter the probability of future random events.',
  shortDescription: 'A cognitive bias where an individual believes that if a particular event occurred more frequently than normal during the past, it is less likely to happen in the future (or vice versa).',
  oneLineExplanation: 'Flipping tails five times in a row and betting your savings that the next flip must be heads.',

  summary30s: 'First mathematically dissected by Pierre-Simon Laplace in 1820 and given psychological foundations by Tversky & Kahneman in 1971, the Gambler\'s Fallacy occurs when we believe random processes have a memory. If a fair coin lands on Heads six times, our intuition screams that "Tails is due." But the coin has no memory; each flip remains strictly 50/50.',

  coreConcept: 'The Gambler\'s Fallacy originates from the "representativeness heuristic" and "Belief in the Law of Small Numbers." People expect short sequences of random events to reflect the global, long-term statistical properties of the parent distribution. When a sequence appears lopsided (e.g., Red on roulette 10 times in a row), we treat the universe as a self-correcting organism that must restore balance immediately.',
  summary60s: 'The most famous historical demonstration occurred at the Monte Carlo Casino on August 18, 1913. A roulette ball landed on black 10 times, then 15 times, then 20 times. Crowds panicked and poured millions of francs onto red, convinced that the laws of nature could not allow black to continue. The ball landed on black 26 consecutive times. The casino extracted astronomical fortunes from gamblers who forgot that the wheel has no memory.',

  quickTakeaways: [
    'Independence Principle: In genuine random systems (roulette, coin flips, fair dice), every event is mathematically independent',
    'Small Number Illusion: Expecting short streaks to balance out violates probability theory',
    'Market Timing Trap: Believing a stock or index that dropped 5 days in a row "must bounce back tomorrow"',
    'Independent Audit Antidote: Ask: "Does the current trial possess any physical or biological memory of the previous trial?"',
  ],

  whyItHappens: 'Pattern-recognition overdrive and teleological intuition. The human brain was built to detect patterns and natural equilibrium, leading us to project purpose and balancing forces onto inanimate randomness.',
  evolutionaryMechanism: 'In biological nature, resource depletion is real: if a berry bush produced berries 5 seasons in a row, its soil might deplete. Applying this finite-depletion logic to infinite mathematical probability generates the gambler\'s fallacy.',

  howItWorks: 'Three cognitive phases: (1) Streak Perception: Noticing a cluster of identical random outcomes (e.g. 4 daughters born in a row); (2) Balance Expectation: Feeling that nature owes a compensatory outcome (a son); (3) Reckless Commitment: Increasing financial or personal stakes on the expected correction.',
  whereYouEncounterIt: 'Casino roulette and slot machines, lottery ticket number selection, trading desks, flight safety perceptions, and baby gender predictions.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Memoryless Probability vs. Intuitive Equilibrium',
    description: 'Why independent mathematical trials never balance out in the short term.',
    analogySideA: {
      label: 'True Probability (Mathematical)',
      detail: 'Coin Flip #7 has exactly a 50.0% chance of landing on Heads, regardless of whether Flips 1-6 were Heads.',
    },
    analogySideB: {
      label: 'The Gambler\'s Illusion',
      detail: '"Heads has happened six times in a row; Tails is statistically overdue and guaranteed to hit now."',
    },
  },

  researchSummary: 'Croson & Sundali (2005) analyzed video surveillance data from casino roulette tables in Reno, Nevada. They proved that as streaks of a single color grew longer (from 3 up to 7 consecutive rounds), casino patrons bet significantly more money on the opposite color, mathematically documenting the gambler\'s fallacy in real-stakes field settings.',
  limitationsAndControversies: 'Conditional vs Independent Probabilities: The fallacy applies only to statistically independent events. In systems with memory (such as blackjack dealing from a shoe without replacement, or mechanical wear-and-tear), past outcomes DO change future probabilities.',
  commonMisconceptions: 'Common myth: "The Law of Large Numbers means the streak must correct itself soon." Reality: The Law of Large Numbers works by dilution over millions of trials, not by compensatory self-correction.',

  howToRecognize: [
    'Saying "My luck is bound to change today" after losing multiple rounds in a row',
    'Refusing to pick the lottery numbers 1-2-3-4-5-6 because they seem "too improbable", while picking random numbers with the exact same 1-in-14-million chance',
    'Expecting a mutual fund that fell for 4 consecutive months to bounce back simply because it fell',
    'Assuming that having three daughters in a row increases the likelihood that your fourth child will be a boy',
  ],

  scenarios: [
    {
      id: 'scen_gamb_01',
      scenarioType: 'indian_context',
      title: 'The Intraday Options Trading Desk in Mumbai',
      vignette: 'Arjun is an intraday derivatives trader in Mumbai. On a volatile expiry Thursday, the Nifty index falls 100 points, then another 100 points, and then another 80 points. Arjun watches his screen and thinks: "The market has fallen 5 hours in a row without a single green candle! A sharp bounce-back is 100% overdue." He enters a massive call option position with 10x leverage. Minutes later, unexpected macroeconomic inflation data breaks, and the market crashes another 250 points, wiping out his entire trading margin.',
      breakdownAnalysis: 'Arjun committed the Gambler\'s Fallacy. He treated market momentum as a self-correcting pendulum that "owed" him a green candle. In reality, aggressive institutional selling and algorithmic stop-losses do not care about past hourly streaks.',
      recommendedAction: 'Enforce strict quantitative stop-losses: Never buy an asset solely because it has dropped repeatedly. Independent catalysts, not past candle counts, drive future direction.',
    },
  ],

  examples: [
    {
      id: 'ex_gamb_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'The Monte Carlo Casino Incident (1913)',
      description: 'Roulette players lost tens of millions of francs betting on red after black came up 15 times in a row. The ball landed on black 26 consecutive times.',
      takeaway: 'Random machines do not have memory, emotions, or obligations to balance out.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_gamb_01',
      scenarioContext: 'A married couple in Pune has three daughters. They are planning to have a fourth child, and the grandfather tells them: "After three daughters, the probability of having a son on the fourth pregnancy is over 80% because nature balances the family."',
      question: 'Which statement accurately describes the scientific genetics of this situation?',
      prompt: 'Which statement accurately describes the scientific genetics of this situation?',
      scenarioText: 'A married couple in Pune has three daughters. They are planning to have a fourth child, and the grandfather tells them: "After three daughters, the probability of having a son on the fourth pregnancy is over 80% because nature balances the family."',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'The grandfather is succumbing to the Gambler\'s Fallacy; each independent conception has an approximate 50% probability of being male or female regardless of past births',
          explanation: 'Accurate: human sperm fertilization does not maintain a biological memory of previous sibling births.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'The grandfather is correct because the biological Law of Large Numbers forces gender ratios to balance within single nuclear families',
          explanation: 'The law of large numbers applies to global populations over millions of births, not a sample size of four.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'The probability of having a boy is now 100% because four consecutive daughters is statistically impossible',
          explanation: 'Four consecutive daughters occurs in approximately 1 out of 16 families (6.25%), which is entirely common.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Independent biological and mathematical trials never balance out past history in individual families or small samples.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Verify whether trials are independent. If memoryless, ignore past streaks completely and treat the next trial as trial number one.',
  psychologicalDefenses: [
    {
      title: 'The Independence Verification Test',
      instruction: 'Ask: "Does physical mechanism A remember what happened in trial B?" If a coin, die, or market participant does not have memory of prior flips, streak length is irrelevant.',
    },
    {
      title: 'Dilution, Not Correction',
      instruction: 'Remember that the Law of Large Numbers works by drowning out old streaks across millions of future trials, never by magically reversing short-term runs.',
    },
  ],

  reflectionPrompt: 'When playing games of chance or investing, have you ever caught yourself betting that a streak "must" end simply because it lasted so long?',
  references: [
    {
      id: 'ref_gamb_01',
      title: 'Belief in the law of small numbers',
      citation: 'Tversky, A., & Kahneman, D. (1971). Psychological Bulletin, 76(2), 105–110.',
      authors: 'Amos Tversky, Daniel Kahneman',
      publicationYear: 1971,
      journalOrPublisher: 'Psychological Bulletin',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1037/h0031322',
      relevance: 'Foundational paper demonstrating that even trained research psychologists misapply statistical probability to small samples.',
      displayOrder: 1,
    },
  ],
  tags: ['Cognitive Biases', 'Probability', 'Gambler\'s Fallacy', 'Decision Making'],
  relatedTopics: [
    { topicId: 'availability_heuristic', slug: 'availability-heuristic', title: 'Availability Heuristic', relationshipType: 'amplified_by' },
    { topicId: 'sunk_cost_fallacy', slug: 'sunk-cost-fallacy', title: 'Sunk Cost Fallacy', relationshipType: 'amplified_by' },
  ],
  seoTitle: 'The Gambler’s Fallacy: Expecting Luck to Correct Itself | Mentalab Mind',
  seoDescription: 'Why coin flips and roulette wheels have no memory. Discover the math behind the Monte Carlo fallacy and how to avoid costly probability traps.',
  canonicalUrl: '/mind/cognitive-biases/gamblers-fallacy',
  ogImageUrl: '/images/mind/gamblers-fallacy.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: 'The gambler’s fallacy is a failure to recognize event independence caused by the representativeness heuristic.',
};

export const TOPIC_GAMBLERS_FALLACY_HINGLISH: MindTopicDetail = {
  ...TOPIC_GAMBLERS_FALLACY_EN,
  title: 'The Gambler\'s Fallacy: "Itni Baar Haar Gaya, Ab Toh Jeetna Pakka Hai"',
  subtitle: 'Yeh galat bharosa ki agar koi random cheez baar-baar ho rahi hai, toh ab uska ulta hona zaroori hai.',
  shortDescription: 'Ek aisi cognitive bias jisme log sochte hain ki coin toss ya roulette wheel ko purana record yaad rehta hai aur wo agle round me "balance" karne ke liye result badal dega.',
  oneLineExplanation: 'Paanch baar lagatar tails aane par yeh maan lena ki agla toss 100% heads hi aayega.',

  summary30s: 'Gambler\'s Fallacy 1913 me Monte Carlo casino me mashhoor hui thi jab roulette wheel par lagatar 26 baar Black aaya. Logon ne socha ki "ab toh Red aana hi padega" aur hazaron francs haar gaye. Sikka ya roulette wheel ke paas dimaag ya memory nahi hoti; har naya toss pehle ke result se bilkul independent hota hai (50/50).',
  coreConcept: 'Amos Tversky aur Daniel Kahneman (1971) ne bataya ki dimaag "Law of Small Numbers" me vishwas karta hai. Hume lagta hai ki agar 4 baar beti hui hai toh 5th baar beta hona "nature ka balance" hai, jabki biology me har conception ka chance independent 50% hota hai.',
  summary60s: 'Stock market trading me yeh trap bohot logon ko dubaata hai. Jab koi stock 5 din lagatar girta hai, toh trader bina data dekhe call option khareed leta hai yeh sochkar ki "ab toh bounce-back banta hai." Lekin agar company ke fundamentals kharab hain ya selling institutional hai, toh stock agle 5 din aur gir sakta hai.',

  quickTakeaways: [
    'Independence Principle: Har coin flip ya random round bilkul azaad hota hai; pichle round se uska koi lena dena nahi',
    'Nature Ka Koi Hisaab Nahi: Kudrat choti streaks ko balance karne ki koi zimmedari nahi leti',
    'Trading Trap: "Bohot gir gaya ab badhega" bol kar paise lagana gambling hai, technical analysis nahi',
    'Memory Check: Khud se poochein: "Kya is machine ya coin ke paas purane rounds ki memory hai?"',
  ],

  whyItHappens: 'Pattern-recognition overdrive. Hamara dimaag har cheez me order aur justice dhoondhta hai aur inanimate randomness par balance thopta hai.',
  evolutionaryMechanism: 'Ped par agar 5 baar fal tode gaye toh 6th baar fal kam hone ka real biological chance hota tha. Dimaag ne wahi logic coin toss par laga diya.',

  howItWorks: 'Teen steps: (1) Streak: Lagatar 4 baar ek hi result aana; (2) Expectation: Lagna ki nature par "udhaar" chad gaya hai; (3) Reckless Bet: Reverse result par double paisa laga dena.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Real Probability vs Dimaagi Illusion',
    description: 'Kyu har naya round bilkul azaad hota hai.',
    analogySideA: {
      label: 'Real Mathematics',
      detail: 'Coin Toss #7 par Heads aane ka chance exactly 50% hai, chahe pichle 6 toss Heads rahe hon.',
    },
    analogySideB: {
      label: 'Gambler Ka Illusion',
      detail: '"Lagatar 6 baar Heads aa gaya, ab Tails aana compulsory hai."',
    },
  },

  examples: [
    {
      id: 'ex_gamb_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'Monte Carlo 1913 Incident',
      description: 'Roulette par lagatar 26 baar Black aaya. Hazaron logon ne Red par bet lagayi aur road par aa gaye.',
      takeaway: 'Wheel ke paas na memory hoti hai, na use Red aane ki koi jaldi hoti hai.',
    },
  ],

  scenarios: [
    {
      id: 'scen_gamb_01',
      scenarioType: 'indian_context',
      title: 'Mumbai Intraday Derivatives Desk',
      vignette: 'Arjun Mumbai me intraday options trading kar raha tha. Nifty 100 point gira, fir 100 point aur gira. Arjun ne socha: "Market lagatar 4 ghante se gir raha hai, ab toh ek green candle banna pakka hai!" Usne 10x leverage par Call option khareed liya. 10 minute baad US inflation data aaya aur market 250 point aur crash ho gaya, jisse uska poora margin saaf ho gaya.',
      breakdownAnalysis: 'Arjun ne Gambler\'s Fallacy me phas kar yeh maan liya ki market ko bounce karna nature ka farz hai. Institutional selling ko purani candles se koi farak nahi padta.',
      recommendedAction: 'Strict Stop-Loss rakhein: Kabhi bhi kisi asset ko sirf isliye mat khareedo kyunki wo bohot gir chuka hai.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_gamb_01',
      scenarioContext: 'Pune me ek family me 3 betiyan hain. Grandfather bolte hain: "3 betiyon ke baad 4th child beta hone ka chance 80% se zyada hai kyunki nature balance karti hai."',
      question: 'Genetics ke mutabik kaunsa statement sach hai?',
      prompt: 'Genetics ke mutabik kaunsa statement sach hai?',
      scenarioText: 'Pune me ek family me 3 betiyan hain. Grandfather bolte hain: "3 betiyon ke baad 4th child beta hone ka chance 80% se zyada hai kyunki nature balance karti hai."',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Grandfather Gambler\'s Fallacy ka shikaar hain; har conception bilkul independent hoti hai aur boy/girl ka chance approximately 50/50 hi rehta hai',
          explanation: 'Sahi: Human biological conception me pichle bachhon ki koi memory nahi hoti.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Grandfather sahi hain kyunki nature ek family me ratio balance karti hai',
          explanation: 'Law of large numbers lakho logon ke population par kaam karta hai, ek single family par nahi.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Chauthi baar beti hona mathematically impossible hai',
          explanation: 'Lagatar 4 betiyan hona lagbhag 6.25% families me hota hai jo ki bohot aam hai.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Independent trials me pichla history agle result par zero asar daalta hai.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Har trial ko fresh shuruat maanein aur streaks par paise na lagayein.',
  psychologicalDefenses: [
    {
      title: 'Memory Check',
      instruction: 'Khud se poochein: "Kya is machine ya coin ke paas memory hai?" Agar nahi, toh streak ka koi matlab nahi hai.',
    },
    {
      title: 'Dilution Principle',
      instruction: 'Yaad rakhein ki law of large numbers lakho trials me purani streak ko dilute karta hai, use achanak reverse nahi karta.',
    },
  ],

  reflectionPrompt: 'Kabhi trading ya kisi game me aapne yeh soch kar bet lagayi hai ki "ab toh kismat ko badalna hi padega"?',
  seoTitle: 'Gambler’s Fallacy Kya Hai? Monte Carlo Casino Trap | Mentalab Mind',
  seoDescription: 'Janiye kyu sikke aur roulette wheel ko purana record yaad nahi rehta. Seekhein probability aur trading ke 3 rules.',
  canonicalUrl: '/mind/cognitive-biases/gamblers-fallacy',
};

export const TOPIC_GAMBLERS_FALLACY_HI: MindTopicDetail = {
  ...TOPIC_GAMBLERS_FALLACY_EN,
  title: 'Gambler’s Fallacy (जुआरी का भ्रम)',
  subtitle: 'यह मिथ्या विश्वास कि अतीत की स्वतंत्र यादृच्छिक घटनाएं भविष्य की संभावना को प्रभावित करती हैं।',
  shortDescription: 'एक ऐसा संज्ञानात्मक पूर्वाग्रह जहाँ व्यक्ति यह मानता है कि यदि कोई स्वतंत्र यादृच्छिक घटना अतीत में बार-बार घटी है, तो भविष्य में उसके उलटे परिणाम की संभावना बढ़ जाती है।',
  oneLineExplanation: 'सिक्के को अतीत याद नहीं रहता; हर उछाल निष्पक्ष और स्वतंत्र होता है।',
  summary30s: '1820 में लाप्लास और 1971 में काह्नमैन-ट्वर्स्की द्वारा समझाया गया जुआरी का भ्रम (Gambler’s Fallacy) यह स्पष्ट करता है कि प्रकृति किसी छोटी श्रृंखला को संतुलित करने के लिए बाध्य नहीं है। प्रत्येक स्वतंत्र घटना की प्रायिकता सदैव समान रहती है।',
};

export const TOPIC_GAMBLERS_FALLACY: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_GAMBLERS_FALLACY_EN,
  hinglish: TOPIC_GAMBLERS_FALLACY_HINGLISH,
  hi: TOPIC_GAMBLERS_FALLACY_HI,
  gu: TOPIC_GAMBLERS_FALLACY_EN,
  mr: TOPIC_GAMBLERS_FALLACY_EN,
  te: TOPIC_GAMBLERS_FALLACY_EN,
  ta: TOPIC_GAMBLERS_FALLACY_EN,
  kn: TOPIC_GAMBLERS_FALLACY_EN,
  ml: TOPIC_GAMBLERS_FALLACY_EN,
  bn: TOPIC_GAMBLERS_FALLACY_EN,
  pa: TOPIC_GAMBLERS_FALLACY_EN,
  ur: TOPIC_GAMBLERS_FALLACY_EN,
  or: TOPIC_GAMBLERS_FALLACY_EN,
  as: TOPIC_GAMBLERS_FALLACY_EN,
};
