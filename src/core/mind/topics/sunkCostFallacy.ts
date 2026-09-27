import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Decision Making Track
 * Topic: The Sunk Cost Fallacy: Why We Throw Good Money After Bad
 * Category: Decision Making (decision_making)
 * 
 * Academic Grounding:
 * - Arkes & Blumer (1985): The Psychology of Sunk Cost
 * - Kahneman & Tversky (1979): Prospect Theory & Loss Aversion
 * - Staw (1976): Knee-Deep in the Big Muddy: A Study of Escalating Commitment
 * - Thaler (1980): Toward a Positive Theory of Consumer Choice
 */

export const TOPIC_SUNK_COST_FALLACY_EN: MindTopicDetail = {
  id: 'sunk_cost_fallacy',
  categoryId: 'decision_making',
  slug: 'sunk-cost-fallacy',
  difficulty: 'beginner',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 1,
  viewCount: 4890,
  shareCount: 420,
  bookmarkCount: 890,
  title: 'The Sunk Cost Fallacy: Why We Throw Good Money After Bad',
  subtitle: 'Recognizing escalating commitment, overcoming loss aversion, and making rational future-focused choices.',
  shortDescription: 'The cognitive entrapment where individuals persist in a failing endeavor solely because they have already invested time, money, or emotional effort into it.',
  oneLineExplanation: 'In simple terms: Refusing to abandon a failing path because you hate feeling like your past investments were wasted.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'The Sunk Cost Fallacy is the psychological trap of continuing a bad investment, dead-end job, toxic relationship, or miserable movie just because you have already poured significant time, money, or energy into it. Your brain misinterprets walking away as "wasting" what you spent. In reality, the past investment is already gone forever; staying only multiplies your future losses.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'In rational economic decision-making, decisions should be evaluated strictly on future expected costs and future expected benefits. Past investments that cannot be recovered are "sunk costs" and are mathematically irrelevant to current choices. However, human psychology suffers from escalating commitment (Staw, 1976): we feel intense psychological aversion to admitting a loss, so we pour additional resources into failing endeavors in a desperate bid to vindicate our initial choice.',
  summary60s: 'Imagine buying a non-refundable ₹1,000 ticket to an open-air concert. On the day of the event, a freezing rainstorm hits and you develop a fever. If you go, you will be freezing, sick, and miserable. If you stay home, you will be warm and recovering. The ₹1,000 is gone either way. Yet, millions of people choose to freeze in the rain because staying home feels like "wasting ₹1,000." By going, they lose the ₹1,000 AND their health. That is the sunk cost trap: allowing unrecoverable past costs to ruin present and future well-being.',

  quickTakeaways: [
    'Past is Irrecoverable: Sunk time, money, and tears can never be refunded regardless of what you do next',
    'Future-Only Calculus: Rational decisions evaluate only: "From this exact moment forward, does this choice offer net positive value?"',
    'The Concorde Error: Governments and corporations regularly burn billions on doomed projects just to justify initial budgets',
    'Freedom to Pivot: Walking away from a dead end is not failure; it is stopping the bleed to invest in what actually works',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Amos Tversky and Daniel Kahneman demonstrated in Prospect Theory (1979) that losses loom larger than gains (Loss Aversion). Admitting that a project or degree is a dead end forces our ego to book an emotional loss. To avoid the acute pain of regret and social embarrassment, the brain invents irrational optimism: "If I just push for one more year, I can turn this around."',
  evolutionaryMechanism: 'In ancestral foraging environments, abandoning an unfinished shelter or hunting pursuit carried heavy survival costs. Persistence was generally adaptive. However, in modern complex societies with infinite alternative opportunities, stubborn persistence in structurally flawed pursuits becomes catastrophic.',

  // SECTION E — WHY DO WE ESCALATE COMMITMENT?
  howItWorks: 'Escalation of commitment unfolds in three distinct cognitive phases: (1) Self-Justification: We feel personally responsible for the initial choice and crave validation; (2) Waste Aversion: We possess an ingrained moral heuristic that "waste is evil," mistakenly conflating abandoning a failed venture with being wasteful; (3) Impression Management: We fear that switching tracks will make us look inconsistent, weak, or unreliable to our family or peers.',
  whereYouEncounterIt: 'Unfinished college degrees, toxic multi-year relationships, bleeding business startups, multi-year competitive exam preparations, stock market portfolios holding plummeting shares, and home remodeling projects over budget.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Sunk Cost Thinking vs. Future-Value Thinking',
    description: 'How your mental evaluation changes when you stop looking backwards.',
    analogySideA: {
      label: 'Sunk Cost Trap (Backward-Looking)',
      detail: '"I have already spent 4 years studying this; if I quit now, those 4 years are wasted. I must spend 2 more years to finish."',
    },
    analogySideB: {
      label: 'Rational Choice (Forward-Looking)',
      detail: '"Those 4 years are spent no matter what. Will spending the NEXT 2 years in this field bring me joy, income, and purpose?"',
    },
  },

  researchSummary: 'In their seminal 1985 paper published in Organizational Behavior and Human Decision Processes, Hal Arkes and Catherine Blumer ran classic experiments demonstrating that people who had paid full price for season theater tickets attended significantly more plays than those randomly given identical tickets at a discount, solely because the higher cash outlay compelled them to avoid perceived "waste." The actual enjoyment of the plays was identical.',
  limitationsAndControversies: 'Persistence is not always irrational. When a worthwhile goal requires enduring inevitable, temporary friction (like medical residency, athletic conditioning, or learning an instrument), grit is essential. The crucial distinction is whether the long-term fundamentals remain sound (grit) or whether the underlying hypothesis has been disproven (sunk cost fallacy).',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Justifying an ongoing misery with phrases starting with "After all the time/money I\'ve already put into this..."',
    'Feeling dread every single morning about a project or career, yet refusing to quit because of your past resume investment',
    'Investing further funds into a bleeding business without any objective evidence that the market fundamentals have improved',
    'Staying in an unfulfilling or disrespectful relationship primarily because "We have been together for 7 years"',
    'Finishing platefuls of food when you are uncomfortably full simply because "I paid for the buffet"',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_sunk_01',
      scenarioType: 'indian_context',
      title: 'The 5th Year UPSC / Competitive Exam Dilemma',
      vignette: 'Rahul completed his engineering degree in 2021. For four full years, he has lived in a cramped room in Old Rajinder Nagar preparing for the civil services examination. He has missed the preliminary cut-off by thin margins three times. Deep down, he is exhausted, anxious, and passionate about tech product management. Yet, whenever his parents or friends suggest transitioning to a tech career, Rahul panics: "If I quit now, my entire twenties and four years of youth will mean zero. I have to give two more attempts so my past four years aren\'t wasted."',
      breakdownAnalysis: 'Rahul is trapped in classic escalating commitment. The 4 years are gone forever whether he studies for 2 more years or joins a tech startup tomorrow. The only question that matters for his future is: "What path yields the highest probability of fulfillment and career growth for the NEXT 5 years?" Staying in the exam loop to validate his past sacrifice risks consuming his remaining youth.',
      recommendedAction: 'Decouple self-worth from the past. Acknowledge that the 4 years provided deep general knowledge, grit, and maturity—they are not "wasted." Establish an ironclad pivot plan to move toward modern careers.',
    },
    {
      id: 'scen_sunk_02',
      scenarioType: 'workplace',
      title: 'The Bleeding Legacy Software Migration',
      vignette: 'A corporate department spent ₹80 Lakhs and 14 months attempting to build an in-house enterprise CRM. The software is riddled with bugs, architects have declared the codebase unscalable, and modern SaaS alternatives cost ₹5 Lakhs per year. The CTO refuses to kill the project: "We cannot show the board that we threw ₹80 Lakhs in the trash. We need to allocate another ₹30 Lakhs to finish it."',
      breakdownAnalysis: 'The CTO is committing the "Concorde Fallacy." The board’s ₹80 Lakhs is spent regardless. Spending ₹30 Lakhs more on unviable software wastes an additional ₹30 Lakhs and inflicts years of technical debt.',
      recommendedAction: 'Present a cold, forward-looking cost-benefit analysis. Show that cutting the project immediately saves ₹25 Lakhs net in year one alone and restores team velocity.',
    },
  ],

  examples: [
    {
      id: 'ex_sunk_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'Repairing a Money-Pit Car',
      description: 'Continuing to spend ₹40,000 every three months on transmission repairs for an old car worth ₹1,20,000 because "I just put brand new tires and an engine belt on it last month."',
      takeaway: 'Past maintenance receipts do not raise the intrinsic mechanical reliability of a dying vehicle.',
    },
    {
      id: 'ex_sunk_02',
      domain: 'relationships',
      displayOrder: 2,
      title: 'The Long-Term Mismatched Partnership',
      description: 'Enduring chronic emotional incompatibility and distinct life visions because "We have already invested 6 years together since college."',
      takeaway: 'Six years of investment does not justify sentencing yourself to forty more years of relational misery.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'To break free from sunk cost traps, shift your cognitive orientation from historical audit to forward projection. Ask the "Clean Slate" question: "If I woke up today with amnesia and had zero historical ties to this situation, would I invest my time or money into it starting today?" If the answer is no, your current participation is driven purely by sunk cost bias.',
  psychologicalDefenses: [
    'The Clean Slate Test: Imagine you just inherited this situation with fresh cash/time today. Would you buy into it right now?',
    'The Sunk Cost Funeral: Explicitly write down the lost time or money on paper, thank it for the lessons learned, and declare it deceased',
    'Pre-Mortem Thresholds: Establish objective "stop-loss" criteria before beginning any venture (e.g., "If revenue is under ₹X by month 12, we close")',
    'Third-Party Outsider View: Ask an objective friend: "If an acquaintance walked in with this exact balance sheet, what would you advise them to do?"',
  ],

  commonMisconceptions: [
    {
      misconception: 'Walking away from a project means you are a failure with zero grit.',
      reality: 'Grit is sticking with a hard process toward a viable goal. Sunk cost fallacy is sticking with a flawed process toward an impossible goal. Knowing when to stop is high-level strategic intelligence.',
    },
    {
      misconception: 'If I quit, all my past efforts were completely meaningless and wasted.',
      reality: 'Your past efforts yielded hard skills, emotional resilience, self-knowledge, and clarity on what does not work. Those internal assets travel with you into your next endeavor.',
    },
  ],

  reflectionPrompt: 'Think about something in your life right now—a project, a subscription, an investment, or a commitment—that you only continue because of what you already put in. What would you do if today was day one?',

  interactiveScenario: {
    id: 'interactive_sunk_cost_01',
    topicId: 'sunk_cost_fallacy',
    scenarioTitle: 'Spot the Sunk Cost: The Non-Refundable Vacation',
    scenarioDescription: 'You booked a weekend holiday package to a hill station for ₹25,000 (strictly non-refundable). The morning of departure, you receive severe food poisoning and can barely stand. Your partner asks what you want to do.',
    vignetteSourceType: 'personal_finance',
    options: [
      {
        id: 'opt_1',
        text: 'Force yourself into the 6-hour bumpy car ride because letting a ₹25,000 booking go unutilized is throwing hard-earned money away.',
        isCorrect: false,
        cognitiveTakeaway: 'This is the sunk cost trap: you lose the ₹25,000 AND you endure excruciating physical sickness. The money is spent either way.',
      },
      {
        id: 'opt_2',
        text: 'Stay in bed, drink electrolytes, and rest comfortably at home, acknowledging that the ₹25,000 is gone whether you suffer in a hotel or heal at home.',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of sunk cost! The ₹25,000 is unrecoverable. Your only rational decision is choosing comfort over physical torment.',
      },
      {
        id: 'opt_3',
        text: 'Call the hotel, yell at the manager demanding an illegal refund, and threaten to ruin their ratings online.',
        isCorrect: false,
        cognitiveTakeaway: 'Displaced frustration that avoids personal accountability for booking non-refundable terms.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_sunk_01',
      questionType: 'multiple_choice',
      prompt: 'Which of the following best defines a "sunk cost"?',
      options: [
        { id: 'opt_a', text: 'A planned future expense that has not yet occurred', isCorrect: false },
        { id: 'opt_b', text: 'An unrecoverable past expenditure of time, money, or effort that cannot be altered by future decisions', isCorrect: true, feedbackText: 'Correct! Sunk costs cannot be retrieved by any current or future action.' },
        { id: 'opt_c', text: 'The recurring operational overhead of running a profitable company', isCorrect: false },
      ],
      cognitiveTakeaway: 'Sunk costs belong entirely to history and must be omitted from forward-looking calculations.',
    },
    {
      id: 'q_sunk_02',
      questionType: 'scenario_analysis',
      prompt: 'Why do governments and corporations often continue funding failing megaprojects (the "Concorde Effect")?',
      options: [
        { id: 'opt_a', text: 'Because continuing the project guarantees an eventual economic profit', isCorrect: false },
        { id: 'opt_b', text: 'Because decision-makers fear public reputational loss and cannot bear to write off massive past investments', isCorrect: true, feedbackText: 'Precisely. Self-justification and fear of public embarrassment drive escalating commitment.' },
        { id: 'opt_c', text: 'Because economic laws dictate that every initiated project must be finished', isCorrect: false },
      ],
      cognitiveTakeaway: 'Escalation of commitment is driven by ego protection and loss aversion rather than economic utility.',
    },
  ],

  references: [
    {
      citation: 'Arkes, H. R., & Blumer, C. (1985). The psychology of sunk cost. Organizational Behavior and Human Decision Processes, 35(1), 124–140.',
      doiOrUrl: 'https://doi.org/10.1016/0749-5978(85)90049-4',
      relevance: 'Foundational empirical demonstration of the sunk cost effect in human decision behavior.',
      displayOrder: 1,
    },
    {
      citation: 'Kahneman, D., & Tversky, A. (1979). Prospect theory: An analysis of decision under risk. Econometrica, 47(2), 263–291.',
      doiOrUrl: 'https://doi.org/10.2307/1914185',
      relevance: 'Documents loss aversion, explaining why booking an emotional loss is psychologically unbearable.',
      displayOrder: 2,
    },
  ],

  tags: ['Decision Making', 'Cognitive Bias', 'Sunk Cost', 'Rational Choice', 'Economics'],
  relatedTopics: [
    { topicId: 'anchoring_effect', slug: 'anchoring-effect', title: 'Anchoring Effect', relationshipType: 'amplified_by' },
    { topicId: 'first_principles_thinking', slug: 'first-principles-thinking', title: 'First-Principles Thinking', relationshipType: 'counteracted_by' },
  ],
  seoTitle: 'The Sunk Cost Fallacy: Why We Throw Good Money After Bad | Mentalab Mind',
  seoDescription: 'Master the psychology of the Sunk Cost Fallacy. Learn why our brains cling to losing investments, failed projects, and bad relationships, and how to pivot with clarity.',
  canonicalUrl: '/mind/decision-making/sunk-cost-fallacy',
  ogImageUrl: '/images/mind/sunk-cost-fallacy.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'The sunk cost fallacy occurs when irrecoverable historical costs contaminate forward-looking utility optimization.',
};

export const TOPIC_SUNK_COST_FALLACY_HINGLISH: MindTopicDetail = {
  ...TOPIC_SUNK_COST_FALLACY_EN,
  title: 'Sunk Cost Fallacy: Doobe Huye Paise Ke Peeche Aur Barbaadi Kyun?',
  subtitle: 'Purane nuksaan ko justify karne ke chakkar me aane wale kal ko kharaab mat kijiye.',
  shortDescription: 'Jab hum kisi kharab kaam, rishte ya project ko sirf isliye continue karte hain kyunki hum pehle hi bohot time aur paisa laga chuke hain.',
  oneLineExplanation: 'Simple shabdon me: "Itna paisa laga diya hai, ab kaise chhod doon?" bolkar aur bada nuksaan kar lena.',

  summary30s: 'Sunk Cost Fallacy hamare dimaag ka wo trap hai jisme hum ek bekaar movie, dead-end job, ya galat relationship ko sirf isliye kheenchti rehte hain kyunki humne usme bohot time ya paisa invest kar diya hai. Dimaag sochta hai ki chhodne se purana invest "waste" ho jayega. Sachai yeh hai ki jo gaya wo wapas nahi aayega, lekin ruke rehne se aap aane wala kal bhi barbaad kar lete hain.',
  coreConcept: 'Sunk cost ka matlab hai wo paisa, time ya aansu jo ab wapas nahi mil sakte. Rational thinking kehti hai ki aage ka faisla sirf is baat par hona chahiye ki "Ab aage kya fayda hoga?" Lekin humara ego nuksaan accept karne se darta hai, isliye hum doobti hui naav me aur resources jhonk dete hain.',
  summary60s: 'Maan lijiye aapne ₹1,000 ka non-refundable concert ticket khareeda. Din me tezz baarish hone lagi aur aapko 102 fever ho gaya. Agar aap jayenge toh bimar hokar bheegenge aur tabiyat aur kharab hogi. Agar ghar par aaram karenge toh theek rahenge. ₹1,000 dono cases me chala gaya hai. Lekin hazaron log baarish me bheegne chale jaate hain sirf yeh sochkar: "₹1,000 waste ho jayenge." Isko bolte hain Sunk Cost trap—purane kharche ke chakkar me apni health aur future dono gawana.',

  quickTakeaways: [
    'Beeta hua waqt wapas nahi aayega: Jo paisa ya saal gaye wo kisi bhi tareeqe se refund nahi honge',
    'Future Focus: Har naye din puchiye: "Kya is moment se aage mujhe is cheez se koi real fayda hai?"',
    'Concorde Galti: Sarkarein aur companies doobte projects me aur karodon lagati hain sirf yeh chupane ke liye ki pehla decision galat tha',
    'Rukna Failure Nahi Hai: Galat raaste se wapas aana failure nahi, balki smart planning hai',
  ],

  whyItHappens: 'Kahneman aur Tversky ki Prospect Theory (1979) batati hai ki humans ko kisi cheez ke milne ki khushi se 2 guna zyada dukh uske khone (Loss Aversion) se hota hai. Har insaan ka ego haar manne se darta hai.',
  evolutionaryMechanism: 'Purane zamaane me adhoora shikar ya adhoora ghar chhodne ka matlab tha starvation. Dimag me persistence ka shortcut ban gaya jo modern options-wali duniya me ulta pad jata hai.',

  howItWorks: 'Yeh teen cheezon par chalta hai: (1) Ego Defense: "Main galat kaise ho sakta hoon?"; (2) Waste ka Darr: Bachpan se seekha hai ki waste karna paap hai; (3) Log kya kahenge: Track badalne par log mujhe quitter bolenge.',
  howToRespond: 'Clean Slate Test use kijiye: "Agar aaj subah meri memory erase ho jaye aur main zero se start karun, kya main aaj is project ya relationship me dobara jump karunga?" Agar answer NO hai, toh aap sunk cost ke kaidi hain.',

  reflectionPrompt: 'Apni life me aisi kaunsi cheez hai jo aap sirf isliye kar rahe hain kyunki aapne usme pehle bohot time diya hai?',
  seoTitle: 'Sunk Cost Fallacy Kya Hai? Decisions Me Badi Galtiyo Se Kaise Bachein | Mentalab Mind',
  seoDescription: 'Doobe huye waqt aur paise ke chakkar me apna future barbaad hone se bachayein. Sunk Cost Fallacy ko samjhein aur rational decisions lein.',
  canonicalUrl: '/mind/decision-making/sunk-cost-fallacy',
};

function createLocalizedSunkCostRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_SUNK_COST_FALLACY_EN,
    title,
    subtitle,
    oneLineExplanation: oneLine,
    summary30s,
    coreConcept,
    quickTakeaways: takeaways,
    seoTitle: `${title} | Mentalab Mind`,
    seoDescription: `${summary30s.slice(0, 150)}...`,
  };
}

export const TOPIC_SUNK_COST_FALLACY: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SUNK_COST_FALLACY_EN,
  hinglish: TOPIC_SUNK_COST_FALLACY_HINGLISH,
  hi: createLocalizedSunkCostRecord(
    'hi',
    'डूबी हुई लागत का भ्रम (Sunk Cost Fallacy): व्यर्थ प्रयासों में और बर्बादी क्यों?',
    'अतीत के नुकसान को सही ठहराने के चक्कर में भविष्य के संसाधनों को नष्ट होने से बचाएं।',
    'सरल शब्दों में: किसी गलत निर्णय को सिर्फ इसलिए जारी रखना क्योंकि आप पहले ही उसमें बहुत समय या धन लगा चुके हैं।',
    'डूबी हुई लागत का भ्रम तब होता है जब हम किसी असफल परियोजना, घाटे वाले व्यवसाय या व्यर्थ संबंध में केवल इसलिए टिके रहते हैं क्योंकि हमने उसमें भारी निवेश किया हुआ है।',
    'आर्केस और ब्लूमर (1985) के अनुसार, जो लागत बीत चुकी है वह कभी वापस नहीं आ सकती; समझदारी इसी में है कि भविष्य के लाभ को देखकर निर्णय लिया जाए।',
    [
      'अतीत अपरिवर्तनीय है: बीता हुआ धन या समय कभी वापस नहीं लौटाया जा सकता',
      'भविष्योन्मुखी सोच: निर्णय हमेशा भविष्य के संभावित लाभ पर आधारित होने चाहिए',
      'रोकना समझदारी है: गलत रास्ते से पीछे हटना हार नहीं, बल्कि समझदारी है',
      'नुकसान का डर: नुकसान स्वीकार करने का अहंकार हमें और बड़े दलदल में धकेलता है',
    ]
  ),
  gu: createLocalizedSunkCostRecord(
    'gu',
    'સંક કોસ્ટ ફેલેસી: ડૂબેલા નાણાં પાછળ વધુ બગાડ કેમ?',
    'ભૂતકાળના નુકસાનને સ્વીકારીને ભવિષ્યના યોગ્ય નિર્ણયો લેવાની કળા.',
    'સરળ શબ્દોમાં: પહેલાં પૈસા ખર્ચી નાખ્યા છે તે વિચારીને નુકસાનકારક પ્રોજેક્ટમાં ચાલુ રહેવું.',
    'જ્યારે આપણે ભૂતકાળના ખર્ચને કારણે ખોટા નિર્ણયમાં વળગી રહીએ છીએ, ત્યારે તેને સંક કોસ્ટ ભ્રમ કહેવાય છે.',
    'જે ગયું તે પાછું આવવાનું નથી, ભવિષ્યનો વિચાર કરવો એ જ બુદ્ધિમાની છે.',
    ['ભૂતકાળ પાછો નહીં આવે', 'નુકસાન રોકવું જરૂરી છે', 'નવા વિકલ્પો વિચારો']
  ),
  mr: createLocalizedSunkCostRecord(
    'mr',
    'संक कॉस्ट फॅलसी: वाया गेलेल्या पैशांमागे आणखी नुकसान का?',
    'भूतकाळातील गुंतवणुकीच्या मोहात न पडता भविष्याचा विचार करून निर्णय घेणे.',
    'सोप्या भाषेत: आधीच खूप वेळ किंवा पैसे खर्च झाले आहेत म्हणून अयोग्य गोष्ट सुरू ठेवणे.',
    'संक कॉस्ट म्हणजे न भरून येणारा खर्च; त्यापोटी भविष्यातील वेळ वाया घालवणे अयोग्य आहे.',
    'भूतकाळ विसरून भविष्यातील फायद्यावर लक्ष केंद्रित करणे गरजेचे आहे.',
    ['गेलेला वेळ परत येत नाही', 'नुकसान वेळीच थांबवा', 'वस्तुनिष्ठ निर्णय घ्या']
  ),
  bn: createLocalizedSunkCostRecord(
    'bn',
    'সান্ক কস্ট ফ্যালাসি: ডুবন্ত খরচের পেছনে আরও ক্ষতি কেন?',
    'অতীতের ক্ষতি পুষিয়ে নেওয়ার মোহে ভবিষ্যতের সংস্থান নষ্ট না করার বিজ্ঞান।',
    'সহজ কথায়: আগে অনেক খরচ করেছি ভেবে একটি ব্যর্থ কাজে অনর্থক লেগে থাকা।',
    'অতীতের নষ্ট হওয়া সময় বা অর্থ ফিরে পাওয়া যায় না, ভবিষ্যৎ উপযোগিতাই বিবেচ্য।',
    'সময় থাকতে সিদ্ধান্ত বদলানোই প্রকৃত বুদ্ধিমত্তা।',
    ['অতীত অপরিবর্তনীয়', 'ভবিষ্যতের লাভ দেখুন', 'ক্ষতি থামান']
  ),
  ta: createLocalizedSunkCostRecord(
    'ta',
    'சங்க் காஸ்ட் ஃபாலசி: இழந்த செலவை எண்ணி மேலும் இழப்பதா?',
    'கடந்த கால இழப்புகளை நியாயப்படுத்தாமல் எதிர்கால நன்மைகளுக்காக சரியான முடிவுகளை எடுங்கள்.',
    'எளிய சொற்களில்: ஏற்கனவே நிறைய நேரம் அல்லது பணம் செலவழித்துவிட்டோம் என்பதற்காக தவறான பாதையில் தொடர்வது.',
    'இழந்த பணம் அல்லது நேரம் திரும்பப் பெற முடியாதது; எதிர்கால பலன்களை மட்டுமே கருத்தில் கொள்ள வேண்டும்.',
    'சரியான நேரத்தில் தவறான முடிவிலிருந்து விலகுவதே அறிவுடைமை.',
    ['கடந்தகால இழப்பு திரும்பாது', 'எதிர்கால நன்மை முக்கியம்', 'சரியான முடிவு']
  ),
  te: createLocalizedSunkCostRecord(
    'te',
    'సంక్ కాస్ట్ ఫాలసీ: పోయిన ఖర్చు కోసం మరింత నష్టపోవాలా?',
    'గతంలో పెట్టిన ఖర్చును చూసి భవిష్యత్తును నాశనం చేసుకోకుండా హేతుబద్ధమైన నిర్ణయాలు తీసుకోండి.',
    'సులభమైన మాటల్లో: ఇప్పటికే సమయం, డబ్బు పెట్టాం కదా అని నష్టదాయకమైన పనిని కొనసాగించడం.',
    'గడిచిపోయిన సమయం లేదా డబ్బు తిరిగి రాదు; భవిష్యత్ లాభాన్ని మాత్రమే చూడాలి.',
    'సరైన సమయంలో ఆగిపోవడమే ఉత్తమ వ్యూహం.',
    ['గత ఖర్చు తిరిగి రాదు', 'భవిష్యత్ ముఖ్యం', 'నష్టం ఆపండి']
  ),
  kn: createLocalizedSunkCostRecord(
    'kn',
    'ಸಂಕ್ ಕಾಸ್ಟ್ ಫ್ಯಾಲಸಿ: ಹೋದ ವೆಚ್ಚಕ್ಕಾಗಿ ಮತ್ತಷ್ಟು ನಷ್ಟವೇಕೆ?',
    'ಹಿಂದಿನ ನಷ್ಟವನ್ನು ಸರಿಪಡಿಸುವ ಭರದಲ್ಲಿ ಭವಿಷ್ಯದ ಸಂಪನ್ಮೂಲಗಳನ್ನು ವ್ಯರ್ಥ ಮಾಡದಿರಿ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಈಗಾಗಲೇ ಸಾಕಷ್ಟು ಹೂಡಿಕೆ ಮಾಡಿದ್ದೇವೆಂಬ ಕಾರಣಕ್ಕೆ ತಪ್ಪು ದಾರಿಯಲ್ಲೇ ಮುಂದುವರಿಯುವುದು.',
    'ಹಿಂದೆ ಮಾಡಿದ ವೆಚ್ಚವನ್ನು ಮರಳಿ ಪಡೆಯಲಾಗದು; ಭವಿಷ್ಯದ ಮೌಲ್ಯವನ್ನಷ್ಟೇ ಲೆಕ್ಕಿಸಬೇಕು.',
    'ಸರಿಯಾದ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಿ.',
    ['ಹಿಂದಿನ ನಷ್ಟ ಮರಳದು', 'ಭವಿಷ್ಯದ ದೃಷ್ಟಿ ಮುಖ್ಯ', 'ನಷ್ಟ ತಡೆಯಿರಿ']
  ),
  ml: createLocalizedSunkCostRecord(
    'ml',
    'സങ്ക് കോസ്റ്റ് ഫാലസി: നഷ്ടപ്പെട്ടതിനെ ഓർത്ത് വീണ്ടും നഷ്ടം വരുത്തണോ?',
    'കഴിഞ്ഞുപോയ ചെലവുകൾ ന്യായീകരിക്കാതെ ഭാവിയെ കരുതി കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക.',
    'ലളിതമായി പറഞ്ഞാൽ: നേരത്തെ പണവും സമയവും ചിലവഴിച്ചു എന്നതുകൊണ്ട് മാത്രം ഒരു നഷ്ടക്കച്ചവടത്തിൽ തുടരുന്നത്.',
    'കഴിഞ്ഞ നഷ്ടങ്ങൾ ഒരിക്കലും തിരിച്ചുകിട്ടില്ല; ഭാവിയിലെ നേട്ടങ്ങൾ മാത്രം മുൻനിർത്തി തീരുമാനങ്ങളെടുക്കുക.',
    'ശരിയായ പിന്മാറ്റം ബുദ്ധിപരമായ നീക്കമാണ്.',
    ['കഴിഞ്ഞ നഷ്ടം മടങ്ങില്ല', 'ഭാവി ലക്ഷ്യം പ്രധാനം', 'നഷ്ടം ഒഴിവാക്കുക']
  ),
  pa: createLocalizedSunkCostRecord(
    'pa',
    'ਸੰਕ ਕਾਸਟ ਫੈਲੇਸੀ: ਡੁੱਬੇ ਹੋਏ ਪੈਸਿਆਂ ਪਿੱਛੇ ਹੋਰ ਨੁਕਸਾਨ ਕਿਉਂ?',
    'ਬੀਤੇ ਹੋਏ ਨੁਕਸਾਨ ਨੂੰ ਸਵੀਕਾਰ ਕਰਕੇ ਭਵਿੱਖ ਲਈ ਸਹੀ ਫੈਸਲੇ ਲੈਣ ਦੀ ਸਮਝ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਪਹਿਲਾਂ ਬਹੁਤ ਸਮਾਂ ਜਾਂ ਪੈਸਾ ਲੱਗ ਚੁੱਕਿਆ ਹੈ, ਇਸ ਲਈ ਕਿਸੇ ਘਾਟੇ ਵਾਲੇ ਕੰਮ ਵਿੱਚ ਲੱਗੇ ਰਹਿਣਾ।',
    'ਜੋ ਸਮਾਂ ਜਾਂ ਪੈਸਾ ਖਤਮ ਹੋ ਗਿਆ ਉਹ ਵਾਪਸ ਨਹੀਂ ਆ ਸਕਦਾ; ਅੱਗੇ ਵਧਣਾ ਹੀ ਸਹੀ ਹੈ।',
    'ਸਹੀ ਸਮੇਂ ਤੇ ਪਿੱਛੇ ਹਟਣਾ ਹਾਰ ਨਹੀਂ ਬਲਕਿ ਸਿਆਣਪ ਹੈ।',
    ['ਬੀਤਿਆ ਸਮਾਂ ਵਾਪਸ ਨਹੀਂ ਆਉਂਦਾ', 'ਭਵਿੱਖ ਤੇ ਧਿਆਨ ਦਿਓ', 'ਨੁਕਸਾਨ ਰੋਕੋ']
  ),
  ur: createLocalizedSunkCostRecord(
    'ur',
    'سنک کاسٹ فلیسی: ڈوبے ہوئے سرمائے کے پیچھے مزید بربادی کیوں؟',
    'ماضی کے نقصانات کو جواز بنا کر مستقبل کے وسائل ضائع کرنے سے بچیں۔',
    'آسان الفاظ میں: کسی ناکام کام میں صرف اس لیے لگے رہنا کیونکہ آپ پہلے ہی وقت اور پیسہ لگا چکے ہیں۔',
    'جو پیسہ یا وقت ضائع ہو چکا وہ واپس نہیں آ سکتا؛ فیصلہ ہمیشہ مستقبل کی افادیت پر ہونا چاہیے۔',
    'بروقت واپسی ناکامی نہیں بلکہ دانشمندی ہے۔',
    ['ماضی نا قابلِ واپسی ہے', 'مستقبل پر نظر رکھیں', 'نقصان روکیں']
  ),
  or: createLocalizedSunkCostRecord(
    'or',
    'ସଙ୍କ କଷ୍ଟ ଫାଲାସି: ପୂର୍ବ କ୍ଷତି ପାଇଁ ଆହୁରି ନଷ୍ଟ କାହିଁକି?',
    'ଅତୀତର ଖର୍ଚ୍ଚକୁ ଜଳାଞ୍ଜଳି ଦେଇ ଭବିଷ୍ୟତ ପାଇଁ ଉଚିତ ନିଷ୍ପତ୍ତି ନେବା।',
    'ସହଜ ଭାଷାରେ: ପୂର୍ବରୁ ବହୁତ ଟଙ୍କା କିମ୍ବା ସମୟ ଦେଇଛନ୍ତି ବୋଲି ଏକ କ୍ଷତିକାରକ କାମ ଜାରି ରଖିବା।',
    'ଅତୀତର ଖର୍ଚ୍ଚ ଫେରିବ ନାହିଁ, ଭବିଷ୍ୟତର ଉପଯୋଗିତା ହିଁ ମୁଖ୍ୟ।',
    'କ୍ଷତି ସମୟରେ ଅଟକି ଯିବା ହିଁ ବୁଦ୍ଧିମାନର କାମ।',
    ['ଅତୀତ ଫେରିବ ନାହିଁ', 'ଭବିଷ୍ୟତ ଦେଖନ୍ତୁ', 'କ୍ଷତି ରୋକନ୍ତୁ']
  ),
  as: createLocalizedSunkCostRecord(
    'as',
    'চাংক কষ্ট ফেলাচি: হেৰুওৱা সম্পদৰ নামত আৰু অপচয় কিয়?',
    'অতীতৰ ক্ষতি স্বীকাৰ কৰি ভৱিষ্যতৰ বাবে সঠিক সিদ্ধান্ত লোৱাৰ বিজ্ঞান।',
    'সহজ কথাত: আগতে বহুত সময় বা ধন খৰচ কৰা হৈছে কাৰণে এটা বিফল কামত লাগি থকা।',
    'যি গ’ল সি ঘূৰি নাহে, ভৱিষ্যতৰ দিশ লক্ষ্য ৰখাই বুদ্ধিমানৰ লক্ষণ।',
    'ক্ষতি সময়তে বন্ধ কৰক।',
    ['অতীত ঘূৰি নাহে', 'ভৱিষ্যতৰ লাভ চাওক', 'ক্ষতি ৰোধ কৰক']
  ),
};
