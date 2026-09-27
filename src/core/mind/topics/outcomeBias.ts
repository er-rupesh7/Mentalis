import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: The Outcome Bias: Judging Decisions by Results Rather Than Quality
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Baron, J., & Hershey, J. C. (1988): Outcome bias in decision evaluation. Journal of Personality and Social Psychology.
 * - Kahneman, D. (2011): Thinking, Fast and Slow (Chapter 19: The Illusion of Understanding).
 * - Hershey, J. C., & Baron, J. (1992): Judgment by outcomes: When is it justified? Organizational Behavior and Human Decision Processes.
 */

export const TOPIC_OUTCOME_BIAS_EN: MindTopicDetail = {
  id: 'outcome_bias',
  categoryId: 'cognitive_biases',
  slug: 'outcome-bias',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 19,
  viewCount: 6320,
  shareCount: 470,
  bookmarkCount: 1040,
  title: 'The Outcome Bias: Judging Decisions by Results Rather Than Quality',
  subtitle: 'The error of evaluating the quality of a past decision based solely on its eventual outcome rather than the information available at the time.',
  shortDescription: 'A cognitive bias where a decision is judged as good or bad based on its eventual result, completely ignoring whether the decision-maker followed rigorous logic under uncertainty.',
  oneLineExplanation: 'Driving home drunk without crashing and concluding that driving drunk is perfectly safe.',

  summary30s: 'Formulated by Jonathan Baron and John Hershey in 1988, the Outcome Bias reveals that humans judge decisions retrospectively. If a surgeon takes a reckless 50/50 gamble and the patient survives, the surgeon is praised as a bold genius. If the exact same gamble results in death, the surgeon is sued for negligence. The decision logic was identical, but our evaluation is held hostage by the outcome.',

  coreConcept: 'The Outcome Bias conflates decision quality with outcome quality. In a probabilistic world governed by randomness, high-quality decisions can produce disastrous outcomes (bad luck), while terrible, reckless decisions can produce spectacular outcomes (dumb luck). When organizations reward dumb luck and punish bad luck, they destroy operational excellence and encourage reckless gambling.',
  summary60s: 'Imagine a financial fund manager who puts 90% of her clients\' retirement funds into a single penny stock on an unverified tip. By sheer luck, the penny stock gets acquired, and the fund returns 400%. The board promotes her and awards her a record bonus. Under the outcome bias, everyone celebrates her "visionary courage." In reality, she committed fiduciary malpractice. When she repeats the same reckless gambling next year, the fund will go to zero.',

  quickTakeaways: [
    'Process vs. Outcome: A sound decision process can still lead to a loss; a reckless gamble can still lead to a win',
    'Rewarding Dumb Luck: When managers reward lucky outcomes instead of sound processes, they incentivize future catastrophic risks',
    'Punishing Good Bets: Blaming professionals for calculated, probabilistic losses causes institutional paralysis and risk aversion',
    'Decision Journal Antidote: Evaluate choices based on the information, expected value, and logic available BEFORE the result was known',
  ],

  whyItHappens: 'Hindsight bias and the cognitive demand for narrative coherence. Once an outcome happens, our brain reconstructs the past as if that outcome was inevitable and predictable.',
  evolutionaryMechanism: 'In ancestral environments with simple cause-and-effect relationships (e.g. hunting or gathering), tracking complex probabilistic trees was unnecessary; survival rewarded reacting directly to tangible results (meat on the table vs. starvation).',

  howItWorks: 'Three cognitive steps: (1) Result Revelation: An outcome occurs (triumph or tragedy); (2) Hindsight Projection: The brain views the result as obvious in advance; (3) Moral Judgment: The decision-maker is retroactively judged as brilliant or negligent based purely on the random coin-flip.',
  whereYouEncounterIt: 'Medical malpractice litigation, executive hiring and firing, sports coaching decisions (calling a pass on 4th-and-goal), and venture capital investments.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Decision Quality vs. Outcome Quality Matrix',
    description: 'The 4 possible combinations of process and result.',
    analogySideA: {
      label: 'Good Process + Bad Outcome (Bad Break)',
      detail: 'Taking a 95% favorable calculated bet and hitting the 5% unlucky edge. A sound decision that deserves respect.',
    },
    analogySideB: {
      label: 'Bad Process + Good Outcome (Dumb Luck)',
      detail: 'Driving drunk without an accident. A catastrophic, reckless decision that was bailed out by pure random chance.',
    },
  },

  researchSummary: 'Baron & Hershey (1988) presented participants with identical medical cases: a physician had to decide whether to perform a risky surgery with an 8% mortality risk. When told the surgery succeeded, participants rated the decision as highly competent. When told the exact same surgery failed, participants rated the decision as incompetent, proving outcome knowledge corrupted ethical and professional judgment.',
  limitationsAndControversies: 'Accountability Systems: While outcome bias is irrational, pure process-only evaluation is vulnerable to bureaucratic box-ticking where employees follow rules but deliver zero results. A balanced framework evaluates both process adherence and long-term aggregated outcomes.',
  commonMisconceptions: 'Common myth: "In the end, results are all that matter in business." Reality: Over a single trial, luck dominates; over 1,000 trials, decision process dominates. Relying on results over small sample sizes leads to corporate ruin.',

  howToRecognize: [
    'Calling an executive a "visionary" simply because a high-risk bet paid off, without examining their risk-adjusted mathematical model',
    'Firing a team leader whose project failed due to an unprecedented natural disaster, despite their flawless execution',
    'Believing you made a smart stock investment because the price doubled in two weeks, even though you had no fundamental thesis',
    'Judging a doctor\'s clinical competence solely on whether a critically ill terminal patient survived',
  ],

  scenarios: [
    {
      id: 'scen_out_01',
      scenarioType: 'indian_context',
      title: 'The Cricket Captain\'s Bowling Change in Kolkata',
      vignette: 'In the final over of a tournament match at Eden Gardens, the opposing team needs 12 runs with 2 wickets in hand. The captain gives the ball to an inexperienced net-bowler who has poor control, while benching his experienced international death-bowler who has bowled 100 successful final overs. On the second delivery, the batsman slips on the wet turf and hits a gentle catch to short midwicket. The team wins. The media and commentary box erupt: "A masterstroke by the captain! Unbelievable tactical genius!"',
      breakdownAnalysis: 'The commentators committed severe Outcome Bias. Giving the ball to an unproven bowler was an objectively terrible probabilistic decision with high variance. The batsman slipping was an act of pure random luck. Had the bowler conceded two sixes, the same media would have demanded the captain\'s immediate resignation.',
      recommendedAction: 'Separate the decision audit from the celebration: Celebrate the victory, but conduct a rigorous private post-mortem acknowledging that the bowling choice was probabilistically unsound.',
    },
  ],

  examples: [
    {
      id: 'ex_out_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Drunk Driving Fallacy',
      description: 'A person drives home while heavily intoxicated and arrives safely in their garage. Concluding "I drive fine after 4 drinks" confuses dumb luck with safe judgment.',
      takeaway: 'Survival in a single dangerous trial does not validate the decision process.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_out_01',
      scenarioContext: 'An investment committee evaluates two portfolio managers over a 6-month period. Manager A strictly adheres to risk-managed index arbitrage and generates a steady +6% return. Manager B violates all internal risk limits, borrows maximum leverage to buy out-of-the-money call options on a single biotech stock, and makes +120% when an unexpected FDA approval occurs.',
      question: 'How should a rational Chief Risk Officer evaluate Manager B?',
      prompt: 'How should a rational Chief Risk Officer evaluate Manager B?',
      scenarioText: 'An investment committee evaluates two portfolio managers over a 6-month period. Manager A strictly adheres to risk-managed index arbitrage and generates a steady +6% return. Manager B violates all internal risk limits, borrows maximum leverage to buy out-of-the-money call options on a single biotech stock, and makes +120% when an unexpected FDA approval occurs.',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Promote Manager B and grant them more capital because 120% profit proves superior investment genius',
          explanation: 'This is the catastrophic outcome bias trap: rewarding dumb luck and reckless risk violation.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Discipline or terminate Manager B for catastrophic risk protocol violations, recognizing that the 120% gain was pure stochastic luck that could have bankrupted the firm',
          explanation: 'Accurate: evaluating the reckless decision process independently from the lucky outcome protects the institution from future bankruptcy.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Fire Manager A because steady 6% returns are unacceptable during bull markets',
          explanation: 'Disciplining sound risk management discourages institutional prudence.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Rewarding reckless rule-breaking because it happened to produce a lucky win ensures future institutional disaster.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Evaluate decision quality using Decision Journals documented prior to outcome knowledge.',
  psychologicalDefenses: [
    {
      title: 'Pre-Outcome Process Auditing',
      instruction: 'Grade the logic of proposals and bets before the dice are rolled. Once the outcome is known, evaluate whether the process was followed, not whether luck was kind.',
    },
    {
      title: 'Celebrate Process, Not Just Wins',
      instruction: 'Praise colleagues when they make sound expected-value bets that suffer bad luck; openly critique reckless bets that stumble into lucky wins.',
    },
  ],

  reflectionPrompt: 'Can you think of a terrible, reckless decision you made in the past that turned out fine purely because of lucky coincidence?',
  references: [
    {
      id: 'ref_out_01',
      title: 'Outcome bias in decision evaluation',
      citation: 'Baron, J., & Hershey, J. C. (1988). Journal of Personality and Social Psychology, 54(4), 569–579.',
      authors: 'Jonathan Baron, John C. Hershey',
      publicationYear: 1988,
      journalOrPublisher: 'Journal of Personality and Social Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1037/0022-3514.54.4.569',
      relevance: 'The foundational empirical paper introducing the outcome bias across medical and financial scenarios.',
      displayOrder: 1,
    },
  ],
  tags: ['Cognitive Biases', 'Decision Quality', 'Outcome Bias', 'Risk Management'],
  relatedTopics: [
    { topicId: 'hindsight_bias', slug: 'hindsight-bias', title: 'Hindsight Bias', relationshipType: 'amplified_by' },
    { topicId: 'self_serving_bias', slug: 'self-serving-bias', title: 'Self-Serving Bias', relationshipType: 'amplified_by' },
  ],
  seoTitle: 'The Outcome Bias: Judging Decisions by Results | Mentalab Mind',
  seoDescription: 'Why rewarding dumb luck and punishing bad luck destroys decision-making. Learn how to decouple process quality from random outcomes.',
  canonicalUrl: '/mind/cognitive-biases/outcome-bias',
  ogImageUrl: '/images/mind/outcome-bias.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: 'The outcome bias is a retrospective evaluation error where outcome valence retroactively distorts the perceived quality of prior probabilistic choice.',
};

export const TOPIC_OUTCOME_BIAS_HINGLISH: MindTopicDetail = {
  ...TOPIC_OUTCOME_BIAS_EN,
  title: 'The Outcome Bias: Faisle Ki Quality Ko Sirf Natije Se Judge Karna',
  subtitle: 'Galat decision par luck chal jaye toh "genius" bolna, aur sahi decision par bad luck ho toh "bewakoof" kehna.',
  shortDescription: 'Ek aisi cognitive bias jisme log kisi decision ki samajhdari ko us waqt ke data se nahi, balki baad me nikle random result se naapte hain.',
  oneLineExplanation: 'Sharab peekar car chalana aur bina accident ghar pahunch kar bolna: "Drunk driving bilkul safe hai."',

  summary30s: '1988 me Jonathan Baron aur John Hershey ne Outcome Bias discover kiya tha. Agar ek doctor 95% safe operation karta hai par kismat se 5% wala patient mar jata hai, toh log use laparwah bolte hain. Par agar koi doctor bina check kiye andha risk leta hai aur patient bach jata hai, toh use bhagwan maan lete hain. Natija dekhkar faisle ko judge karna sabse bada dimaagi dhokha hai.',
  coreConcept: 'Probabilistic duniya me achhe decisions ka bhi bura result aa sakta hai (Bad Luck), aur bilkul ghatiya decisions ka bhi lottery jaisa bumper result aa sakta hai (Dumb Luck). Jab companies dumb luck ko reward karti hain, toh wo aage chalkar massive disaster create karti hain.',
  summary60s: 'Cricket me yeh roz hota hai. Match ke aakhri over me captain apne sabse bekaar bowler ko ball deta hai. Batsman pitch par fisal jata hai aur catch out ho jata hai. Media bolti hai: "Captain ka masterstroke!" Lekin agar batsman do chhakke maar deta toh wahi media bolti: "Captain ko team se nikaalo." Faisla wahi tha, par media ka opinion batsman ke pair fisalne par depend kar raha tha.',

  quickTakeaways: [
    'Process vs Result: Sahi process se bhi haar ho sakti hai, aur ghatiya risk se bhi jeet mil sakti hai',
    'Dumb Luck Ka Danger: Tukke ki jeet ko celebrate karne se agle round me sab kuch barbaad ho jata hai',
    'Bad Luck Par Saza: Sahi calculated risk lene wale ko saza dene se log naye ideas try karna band kar dete hain',
    'Decision Journal Rule: Faisla lene se pehle dekhein ki us waqt available facts ke mutabik kya sahi tha',
  ],

  whyItHappens: 'Hindsight bias aur simple story-building. Result aane ke baad dimaag ko lagta hai ki yeh toh pehle se pata hona chahiye tha.',
  evolutionaryMechanism: 'Jungle me process matter nahi karta tha; agar shikar mil gaya toh khana milega, nahi mila toh bhookhe maroge. Dimaag ne wahi direct connection modern finance par laga diya.',

  howItWorks: 'Teen steps: (1) Result: Jeet ya haar hoti hai; (2) Projection: Dimaag assume karta hai ki outcome obvious tha; (3) Retroactive Label: Decision maker ko "Hero" ya "Villain" declare kar diya jata hai.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Decision Process vs Result Matrix',
    description: 'Process aur outcome ke 4 combinations.',
    analogySideA: {
      label: 'Good Process + Bad Outcome (Bad Luck)',
      detail: '95% favorable calculated bet lagana aur 5% unlucky chance hit ho jana. Ek solid faisla jiska respect hona chahiye.',
    },
    analogySideB: {
      label: 'Bad Process + Good Outcome (Dumb Luck)',
      detail: 'Bina helmet 120kmph par bike chalakar sahi-salamat ghar aana. Ek jaanleva galti jo sirf kismat se bachi.',
    },
  },

  examples: [
    {
      id: 'ex_out_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Drunk Driving Fallacy',
      description: 'Ek insaan nashe me car chala kar ghar pahunch jata hai aur kehta hai: "Mera steering par poora control tha." Yeh dumb luck ko skill samajhna hai.',
      takeaway: 'Ek baar bach jana risk ke khatam hone ka saboot nahi hai.',
    },
  ],

  scenarios: [
    {
      id: 'scen_out_01',
      scenarioType: 'indian_context',
      title: 'Eden Gardens Me Aakhri Over Ka Faisla',
      vignette: 'Eden Gardens me final over me 12 run chahiye the. Captain ne apne experienced international bowler ko rok kar ek naye net-bowler ko ball de di jiska control kharab tha. Doosri ball par batsman wet pitch par fisal gaya aur aasan catch de baitha. Team jeet gayi. Commentary box me shor mach gaya: "Captain ka tactical masterstroke!"',
      breakdownAnalysis: 'Commentators Outcome Bias ke shikaar the. Unproven bowler ko ball dena mathematically ek ghatiya decision tha. Batsman ka fisalna pure random luck tha. Agar do chhakke lag jaate toh wahi log captain ko gaaliyan de rahe hote.',
      recommendedAction: 'Process Audit karein: Jeet celebrate kijiye, par internal meeting me accept kijiye ki bowling choice mathematically galat thi aur aage aisi galti nahi karenge.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_out_01',
      scenarioContext: 'Ek company me do fund managers hain. Manager A risk limits follow karke steady 6% return banata hai. Manager B saare risk rules tod kar poora fund ek single penny stock par laga deta hai aur achanak 120% profit bana leta hai.',
      question: 'Chief Risk Officer ko Manager B ke sath kya karna chahiye?',
      prompt: 'Chief Risk Officer ko Manager B ke sath kya karna chahiye?',
      scenarioText: 'Ek company me do fund managers hain. Manager A risk limits follow karke steady 6% return banata hai. Manager B saare risk rules tod kar poora fund ek single penny stock par laga deta hai aur achanak 120% profit bana leta hai.',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Manager B ko promote karna kyunki 120% profit genius ka saboot hai',
          explanation: 'Yeh outcome bias ka sabse dangerous roop hai: tukke ki jeet par reckless rule-breaking ko reward karna.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Manager B par strict action lena ya use suspend karna, kyunki uska decision firm ko 100% bankrupt kar sakta tha aur uska profit sirf pure dumb luck tha',
          explanation: 'Sahi: Risk process ko outcome se alag karke evaluate karna hi institution ko zinda rakhta hai.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Manager A ko nikaal dena kyunki uska return kam tha',
          explanation: 'Disciplined manager ko punish karne se baaki log bhi reckless gambling shuru kar denge.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Tukke se jeetne wale rule-breaker ko reward karna institution ko bankruptcy ki taraf dhakelta hai.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Decision quality ko hamesha result aane se pehle ke data se judge karein.',
  psychologicalDefenses: [
    {
      title: 'Pre-Outcome Process Review',
      instruction: 'Faisla lene ke waqt hi likhein ki logic kya tha. Baad me result chahe jo nikle, logic ki quality par score karein.',
    },
    {
      title: 'Praise Sound Bets Even in Losses',
      instruction: 'Agar kisi team member ne achha calculated risk liya aur bad luck se loss hua, toh uski mehnat ko appreciate karein taaki wo darr na jaye.',
    },
  ],

  reflectionPrompt: 'Kya aapne kabhi koi aisi careless galti ki thi jo sirf kismat ki wajah se bach gayi aur aapne socha "mujhe kuch nahi hoga"?',
  seoTitle: 'Outcome Bias Kya Hai? Natija vs Process Ka Farq | Mentalab Mind',
  seoDescription: 'Janiye kyu dumb luck ko genius aur bad luck ko laparwahi maanna galti hai. Seekhein decision evaluation ke 3 rules.',
  canonicalUrl: '/mind/cognitive-biases/outcome-bias',
};

export const TOPIC_OUTCOME_BIAS_HI: MindTopicDetail = {
  ...TOPIC_OUTCOME_BIAS_EN,
  title: 'Outcome Bias (परिणाम पूर्वाग्रह)',
  subtitle: 'किसी निर्णय की गुणवत्ता का मूल्यांकन उस समय की तर्कसंगतता के बजाय केवल अंतिम परिणाम के आधार पर करना।',
  shortDescription: 'एक ऐसा संज्ञानात्मक पूर्वाग्रह जहाँ किसी निर्णय को अच्छा या बुरा केवल इसलिए माना जाता है क्योंकि उसका परिणाम अनुकूल या प्रतिकूल रहा, चाहे वह परिणाम शुद्ध भाग्य पर आधारित रहा हो।',
  oneLineExplanation: 'भाग्यशाली तुक्के को बुद्धिमत्ता और दुर्भाग्यपूर्ण दुर्घटना को अयोग्यता मान लेना।',
  summary30s: '1988 में जोनाथन बैरन और जॉन हर्शी द्वारा खोजा गया परिणाम पूर्वाग्रह (Outcome Bias) यह समझाता है कि अनिश्चितता की दुनिया में अच्छे निर्णय भी खराब परिणाम दे सकते हैं और लापरवाह निर्णय भी तुक्के से जीत सकते हैं।',
};

export const TOPIC_OUTCOME_BIAS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_OUTCOME_BIAS_EN,
  hinglish: TOPIC_OUTCOME_BIAS_HINGLISH,
  hi: TOPIC_OUTCOME_BIAS_HI,
  gu: TOPIC_OUTCOME_BIAS_EN,
  mr: TOPIC_OUTCOME_BIAS_EN,
  te: TOPIC_OUTCOME_BIAS_EN,
  ta: TOPIC_OUTCOME_BIAS_EN,
  kn: TOPIC_OUTCOME_BIAS_EN,
  ml: TOPIC_OUTCOME_BIAS_EN,
  bn: TOPIC_OUTCOME_BIAS_EN,
  pa: TOPIC_OUTCOME_BIAS_EN,
  ur: TOPIC_OUTCOME_BIAS_EN,
  or: TOPIC_OUTCOME_BIAS_EN,
  as: TOPIC_OUTCOME_BIAS_EN,
};
