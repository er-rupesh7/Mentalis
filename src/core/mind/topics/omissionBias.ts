import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: The Omission Bias: Inaction As Absolution
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Spranca, Minsk & Baron (1991): Omission and commission in judgment and choice. Journal of Experimental Social Psychology
 * - Ritov & Baron (1990): Reluctance to vaccinate: Omission bias and ambiguity. Journal of Behavioral Decision Making
 * - Baron & Ritov (2004): Omission bias, individual differences, and normality. Organizational Behavior and Human Decision Processes
 */

export const TOPIC_OMISSION_BIAS_EN: MindTopicDetail = {
  id: 'omission_bias',
  categoryId: 'cognitive_biases',
  slug: 'omission-bias',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 24,
  viewCount: 7520,
  shareCount: 580,
  bookmarkCount: 1290,
  title: 'The Omission Bias: Inaction As Absolution',
  subtitle: 'The moral and cognitive tendency to judge harmful actions far more severely than equally harmful inactions.',
  shortDescription: 'A cognitive bias where harmful actions (commissions) are perceived as significantly worse and more morally culpable than equally harmful inactions (omissions).',
  oneLineExplanation: 'Allowing the boat to sink through negligence feels less blameworthy than poking a hole in the bottom.',

  summary30s: 'The omission bias explains why humans dread making active mistakes far more than passive blunders. If taking a proactive step carries a 1% risk of harm, people will often refuse to take it, even if doing nothing guarantees a 20% risk of total disaster. We unconsciously believe that doing nothing absolves us of moral guilt, treating inaction as innocence.',

  coreConcept: 'Formally isolated by Mark Spranca, Elisa Minsk, and Jonathan Baron in 1991, the omission bias shows that people judge active harm (commission) as vastly more reprehensible than passive harm (omission), even when the actor intentions, knowledge, and final consequences are completely identical. In classic vaccine dilemmas, parents often refuse a vaccine that has a 1-in-100,000 risk of severe side effects, even when skipping the vaccine exposes the child to a 1-in-1,000 risk of death from the disease itself.',
  summary60s: 'Consider corporate leadership. An executive who makes a bold acquisition that loses $5 million is pilloried by the board, stripped of bonuses, and fired. Another executive who fails to acquire a promising competitor, causing the company to slowly lose $50 million in market value over five years, faces zero public rebuke. In traditional moral accounting, an error of commission leaves bloody fingerprints; an error of omission leaves an invisible grave. The omission bias paralyzes innovation and rewards institutional cowardice.',

  quickTakeaways: [
    'The Asymmetry of Guilt: Harm from an action feels like guilt; harm from doing nothing feels like "fate"',
    'The Invisible Cost: Organizations suffer far greater financial losses from missed opportunities than from failed experiments',
    'Status Quo Protection: People refuse calculated, beneficial risks to avoid the psychological pain of regret',
    'Opportunity Cost Ledger Antidote: Calculate the explicit cost of doing nothing alongside the cost of acting',
  ],

  whyItHappens: 'Anticipated regret and causal agency. When you take an active action and it fails, you can easily imagine the counterfactual: "If only I had done nothing!" Inaction obscures causal agency, allowing the brain to blame bad outcomes on external circumstance or nature.',
  evolutionaryMechanism: 'In early tribes, an individual who actively caused harm (poisoned food, broken spear) was punished or ostracized. An individual who simply failed to notice or act could plead ignorance or bad luck, surviving tribal judgment.',

  howItWorks: 'The brain weighs moral responsibility by intentional agency. Physical motion and deliberate intervention trigger active causal attribution in the observer. Inaction creates perceptual ambiguity: did the person fail to act intentionally, or were they merely unaware?',
  whereYouEncounterIt: 'Public health vaccination policies, corporate merger and innovation decisions, legal jurisprudence, medical malpractice dilemmas, and investment portfolio inertia.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Action Harm vs. Inaction Harm',
    description: 'How identical or worse outcomes are judged unequally based on physical agency.',
    analogySideA: {
      label: 'Harm by Action (Commission)',
      detail: 'Administering a life-saving medication that causes a fatal reaction in 1 out of 100,000 patients. (Judged as reckless homicide).',
    },
    analogySideB: {
      label: 'Harm by Inaction (Omission)',
      detail: 'Withholding the medication, allowing 2,000 out of 100,000 patients to die of the untreated disease. (Judged as a tragic act of nature).',
    },
  },

  researchSummary: 'Baron & Ritov (2004) proved that omission bias is strongly tied to whether the status quo outcome is perceived as "normal." When subjects are forced to evaluate both choices from a neutral third-party perspective with explicit mathematical trade-offs, omission bias drops significantly, confirming it is an emotional heuristic rather than a rational ethical philosophy.',
  limitationsAndControversies: 'In certain professional duties (e.g., lifeguards, air traffic controllers), the law explicitly criminalizes omission (gross negligence), counteracting the natural cognitive bias.',
  commonMisconceptions: 'Common myth: "Doing nothing is always the safe, prudent choice." Reality: In dynamic systems (health, software, financial markets), doing nothing is an active decision with massive compounding decay.',

  howToRecognize: [
    'Refusing to invest cash during inflation because you dread picking a stock that drops 5%, while inflation steadily erodes 7% annually',
    'Keeping an underperforming employee for 2 years because firing someone feels cruel, ignoring that their mediocrity demoralizes the entire team',
    "Failing to speak up when you notice a fatal bug in a peer project, feeling relief that 'at least I didn't write the bug'",
  ],

  scenarios: [
    {
      id: 'scen_omb_01',
      scenarioType: 'indian_context',
      title: 'The Manufacturing Factory Automation in Chennai',
      vignette: 'Vikram managed an auto-parts manufacturing facility in the Oragadam corridor near Chennai. A German robotic welding system was presented to the board that would reduce component defect rates from 4% to 0.1%. However, the vendor contract noted that during the 3-week calibration period, there was a 2% chance of a minor electrical calibration fault that could stall the line for two days. Vikram rejected the upgrade, saying: "If the line stalls under my watch because I bought this machine, my career is finished." Over the next 3 years, the plant lost ₹12 Crores in scrap materials and lost its Tier-1 supply contract to a modernized rival in Pune.',
      breakdownAnalysis: 'Vikram prioritized avoiding an error of commission (a visible line stall due to new machinery) over mitigating a massive, continuous error of omission (₹12 Crores lost to high defect rates).',
      recommendedAction: 'Mandate "Cost of Inaction" reporting: Every capital proposal must explicitly calculate the cumulative financial and competitive loss of maintaining the status quo.',
    },
  ],

  examples: [
    {
      id: 'ex_omb_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'Cash Drag in Personal Finance',
      description: 'An investor keeps ₹50 Lakhs in a zero-interest current account for 10 years because they dread market volatility. They avoid the pain of a market dip, but silently lose 45% of their purchasing power to compound inflation.',
      takeaway: 'Inaction does not protect capital; it merely renders the loss invisible and gradual.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_omb_01',
      scenarioContext: 'A hospital committee must decide between two protocols for a surgical procedure: Protocol A has a 5% baseline mortality rate. Protocol B introduces a new antiseptic wash that lowers mortality to 1%, but carries a 0.1% risk of a fatal allergic reaction.',
      question: 'Which decision reflects the omission bias, and why is it flawed?',
      prompt: 'Which decision reflects the omission bias, and why is it flawed?',
      scenarioText: 'A hospital committee must decide between two protocols for a surgical procedure: Protocol A has a 5% baseline mortality rate. Protocol B introduces a new antiseptic wash that lowers mortality to 1%, but carries a 0.1% risk of a fatal allergic reaction.',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Rejecting Protocol B because the committee refuses to be directly responsible for an allergic death, accepting 50 deaths per 1,000 to avoid causing 1',
          explanation: 'Accurate: This is classic omission bias, trading 40 net saved lives to avoid the emotional guilt of an active mistake.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Adopting Protocol B because a 1.1% total risk is vastly superior to a 5.0% baseline mortality risk',
          explanation: 'This is the rational, debiased decision that maximizes net lives saved.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Delaying the decision for 10 years to conduct theoretical research while continuing with Protocol A',
          explanation: 'This is another passive omission error, allowing patients to die while avoiding accountability.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Inaction is not neutrality. Allowing preventable harm is morally and mathematically identical to causing harm.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Explicitly calculate the Cost of Inaction and treat passive blunders as active choices.',
  psychologicalDefenses: [
    {
      title: 'The Opportunity Cost Ledger',
      instruction: 'Whenever you decide NOT to make a move, write down: "I am choosing to lose X in exchange for avoiding Y." Make the cost of inaction visible.',
    },
    {
      title: 'Counterfactual Guilt Reversal',
      instruction: 'Ask yourself: "If another person suffers because I remained silent or inactive, will I honestly be able to say I bore zero responsibility?"',
    },
  ],

  reflectionPrompt: 'Where in your life or career are you currently choosing painful inaction over decisive action because you fear the guilt of making a mistake? What is that inaction costing you?',
  references: [
    {
      id: 'ref_omb_01',
      title: 'Omission and commission in judgment and choice',
      citation: 'Spranca, M., Minsk, E., & Baron, J. (1991). Journal of Experimental Social Psychology, 27(1), 76–105.',
      authors: 'Mark Spranca, Elisa Minsk, Jonathan Baron',
      publicationYear: 1991,
      journalOrPublisher: 'Journal of Experimental Social Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1016/0022-1031(91)90011-T',
      relevance: 'Foundational experiment proving people judge active harm more harshly than identical passive harm.',
      displayOrder: 1,
    },
    {
      id: 'ref_omb_02',
      title: 'Omission bias, individual differences, and normality',
      citation: 'Baron, J., & Ritov, I. (2004). Organizational Behavior and Human Decision Processes, 94(2), 74–85.',
      authors: 'Jonathan Baron, Ilana Ritov',
      publicationYear: 2004,
      journalOrPublisher: 'Organizational Behavior and Human Decision Processes',
      sourceType: 'systematic_review',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1016/j.obhdp.2004.03.003',
      relevance: 'Demonstrated how status quo norms and anticipated regret drive systemic omission bias.',
      displayOrder: 2,
    },
  ],
  tags: ['Cognitive Biases', 'Decision Making', 'Ethics', 'Risk Management'],
  relatedTopics: [
    { topicId: 'status_quo_bias', slug: 'status-quo-bias', title: 'Status Quo Bias', relationshipType: 'amplified_by' },
    { topicId: 'loss_aversion', slug: 'loss-aversion', title: 'Loss Aversion', relationshipType: 'amplified_by' },
  ],
  seoTitle: 'Omission Bias Explained: Inaction vs Action in Psychology | Mentalab Mind',
  seoDescription: 'Why we excuse doing nothing over taking calculated risks. Learn the psychology of omission bias, vaccine dilemmas, and the Cost of Inaction.',
  canonicalUrl: '/mind/cognitive-biases/omission-bias',
  ogImageUrl: '/images/mind/omission-bias.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: 'The omission bias is the cognitive tendency to judge harmful actions as more morally culpable than equally harmful inactions.',
};

export const TOPIC_OMISSION_BIAS_HINGLISH: MindTopicDetail = {
  ...TOPIC_OMISSION_BIAS_EN,
  title: 'Omission Bias: Kuch Na Karke Khud Ko Bekasoor Samajhna',
  subtitle: 'Galat kadam uthane ke darr se chup baithna, chahe chup baithne se 10 guna bada nuksan ho jaye.',
  shortDescription: 'Ek aisi cognitive bias jisme dimaag active action se huye chote nuksan ko gunah maanta hai, par chup rehne se huye bade nuksan ko "kismat" maan leta hai.',
  oneLineExplanation: 'Boat me chhed karne par guilt hota hai, par doobti boat ko dekh kar ignore karna aasan lagta hai.',

  summary30s: 'Omission Bias batata hai kyu log koi action lene se ghabrate hain. Agar kisi naye kadam me 1% risk ho, toh log use chhod dete hain, chahe kuch na karne par 20% nuksan guaranteed ho. Dimaag sochta hai: "Agar maine kuch kiya aur gadbad hui toh blame mujhpar aayega. Agar maine kuch nahi kiya aur nuksan hua, toh wo kismat ya halaat the."',
  coreConcept: 'Mark Spranca aur Jonathan Baron (1991) ne prove kiya ki log action se huye nuksan ko bohot bura maante hain aur inaction se huye nuksan ko forgive kar dete hain. Vaccine ka example dekhiye: Log aisi vaccine lene se darte hain jisme 1 lakh me se 1 ko side effect ho, par bina vaccine ke bimari se 1,000 me se 1 ki maut hone ka risk chupchap seh lete hain.',
  summary60s: 'Corporate life me dekhiye: Ek manager jo naya software buy karta hai aur 10 lakh ka loss hota hai, use company nikaal deti hai. Doosra manager jo purani slow machine chalata rehta hai aur 5 saal me 5 crore ka business loss karwata hai, use koi kuch nahi bolta. Action lene wale ki galti dikhti hai; inaction wale ka nuksan silent hota hai. Omission bias innovation aur progress ko rokk deta hai.',

  quickTakeaways: [
    'Guilt Ka Asymmetry: Action se nuksan hone par regret hota hai; inaction se nuksan hone par lagta hai "honi ko kaun taal sakta hai"',
    'Invisible Nuksan: Companies ko failed experiments se kam, balki opportunities miss karne se sabse zyada nuksan hota hai',
    'Status Quo Trap: Insaan regret se bachne ke liye zaroori risk lene se peeche hat jata hai',
    'Cost of Inaction Tool: Hamesha likhein ki "chupchap baithe rehne se kitna nuksan ho raha hai"',
  ],

  whyItHappens: 'Anticipated regret: Action lene par dimaag bolta hai "kaash maine yeh na kiya hota". Kuch na karne par dimaag bolta hai "halaat hi aise the".',
  evolutionaryMechanism: 'Aadim zamaane me agar kisi ne active galti ki toh kabeela use saza deta tha. Jo chupchap baitha raha wo safe rehta tha.',

  howItWorks: 'Dimaag moral blame physical movement aur deliberate action se jodta hai. Inaction me intention invisible rehti hai.',
  whereYouEncounterIt: 'Medical decisions me, stock market me cash holding, rishton me break up na karna, aur career transitions me.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Action Ka Nuksan vs. Inaction Ka Nuksan',
    description: 'Kaise ek jaisa ya bada nuksan hone par bhi action lene wale ko zyada blame milta hai.',
    analogySideA: {
      label: 'Action Se Nuksan (Commission)',
      detail: 'Dawai dene se 1 lakh me 1 patient ki allergy se maut hona. (Log doctor ko murderer bolte hain).',
    },
    analogySideB: {
      label: 'Inaction Se Nuksan (Omission)',
      detail: 'Dawai na dene se bimari ki wajah se 2,000 patients ki maut hona. (Log bolte hain kismat kharab thi).',
    },
  },

  researchSummary: 'Baron & Ritov (2004) ne dikhaya ki jab logon ko numerical trade-offs neutral tarike se dikhaye jaate hain, toh omission bias kam ho jata hai.',
  limitationsAndControversies: 'Emergency services me (jaise lifeguards ya air traffic controllers) kanoon inaction ko bhi jurm maanta hai.',
  commonMisconceptions: 'Mithak: "Kuch na karna sabse safe choice hai." Reality: Inflation, health aur technology me kuch na karna guaranteed slow destruction hai.',

  howToRecognize: [
    'Stock market ke 5% dip ke darr se 10 saal tak cash bank me rakhna, jabki inflation 7% har saal paisa khaa raha hai',
    'Ek underperforming employee ko 2 saal tak na nikaalna kyunki fire karna cruel lagta hai, chahe poori team demoralize ho rahi ho',
    'Stagnant career ya toxic relationship me saalo tak rehna kyunki naya step lene me himmat chahiye',
    'Colleague ke code me bug dekh kar chup rehna taaki "mera naam na aaye"',
  ],

  scenarios: [
    {
      id: 'scen_omb_hi_01',
      scenarioType: 'indian_context',
      title: 'Chennai Auto Plant Me Automation Se Inkaar',
      vignette: 'Chennai ke paas Oragadam factory ke manager Vikram ko ek German robotic welding machine ka proposal mila jo defect rate ko 4% se ghata kar 0.1% kar deti. Vendor ne bataya ki testing me 2% chance hai ki 2 din ke liye line stall ho sakti hai. Vikram ne mana kar diya: "Agar nayi machine lene se meri shift me plant ruka toh meri naukri chali jayegi." Agle 3 saal me plant ne kharab parts ki wajah se 12 crore ka loss uthaya aur major contract haath se nikal gaya.',
      breakdownAnalysis: 'Vikram ne action ke chote risk se bachne ke liye chup rehna chuna, aur plant ko 12 crore ka continuous nuksan karwaya.',
      recommendedAction: 'Cost of Inaction report compulsory karein: Har meeting me puchiye ki purana system chalane se har mahine kitna nuksan ho raha hai.',
    },
  ],

  examples: [
    {
      id: 'ex_omb_hi_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'Cash Drag Ka Nuksan',
      description: 'Ek shakhs stock market ke darr se 50 lakh savings account me rakhta hai. 10 saal me uske paise ki purchasing power inflation ki wajah se aadhi reh jati hai.',
      takeaway: 'Chup baithna capital ko bachaata nahi hai, nuksan ko invisible bana deta hai.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_omb_hi_01',
      scenarioContext: 'Hospital committee ko do protocols me se choose karna hai: Protocol A me baseline 5% mortality hai. Protocol B se mortality 1% ho jayegi, lekin naye wash se 0.1% fatal allergy ka risk hai.',
      question: 'Kaunsa decision omission bias dikhata hai aur wo galat kyu hai?',
      prompt: 'Kaunsa decision omission bias dikhata hai aur wo galat kyu hai?',
      scenarioText: 'Hospital committee ko do protocols me se choose karna hai: Protocol A me baseline 5% mortality hai. Protocol B se mortality 1% ho jayegi, lekin naye wash se 0.1% fatal allergy ka risk hai.',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Protocol B ko reject kar dena taaki allergy death ka dosh committee par na aaye, aur 50 logon ko marne dena taaki 1 ka guilt na ho',
          explanation: 'Sahi: Yeh classic omission bias hai, 40 zindagiyan bachane ke bajaye apne guilt se bachna.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Protocol B apnana kyunki 1.1% total risk 5.0% se bohot behtar hai',
          explanation: 'Yeh rational debiased decision hai jo zyada logon ki jaan bachaata hai.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Decision ko 10 saal ke liye taall dena',
          explanation: 'Yeh bhi ek aur omission error hai.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Inaction koi neutrality nahi hai. Rokne layak nuksan ko hone dena bhi nuksan pahunchane ke barabar hai.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Cost of Inaction calculate karein aur passive nuksan ko active choice ki tarah treat karein.',
  psychologicalDefenses: [
    {
      title: 'Cost of Inaction Ledger',
      instruction: 'Jab bhi koi faisla taal rahe ho, likhein: "Main chup rehkar kitna paisa, time aur growth gawa raha hu."',
    },
    {
      title: 'Counterfactual Responsibility',
      instruction: 'Sochiye: "Agar meri khamoshi ki wajah se samne wale ka nuksan hua, toh kya main sach me bekasoor hu?"',
    },
  ],

  reflectionPrompt: 'Aap apni life me kis zaroori kadam ko uthane se bach rahe hain sirf is darr se ki agar galti hui toh guilt hoga? Us kadam ko na lene ki daily cost kya hai?',
  seoTitle: 'Omission Bias Kya Hai? Action vs Inaction Ka Psychology Trap | Mentalab Mind',
  seoDescription: 'Janiye kyu hum kuch na karke khud ko bekasoor maante hain. Samjhein vaccine dilemmas, corporate inertia aur Cost of Inaction ka framework.',
  canonicalUrl: '/mind/cognitive-biases/omission-bias',
};

export const TOPIC_OMISSION_BIAS_HI: MindTopicDetail = {
  ...TOPIC_OMISSION_BIAS_EN,
  title: 'Omission Bias (चूक पूर्वाग्रह)',
  subtitle: 'हानिकारक निष्क्रियता को सक्रिय गलतियों की तुलना में कम दोषी मानना।',
  shortDescription: 'एक ऐसा संज्ञानात्मक पूर्वाग्रह जहाँ लोग किसी सक्रिय कदम से होने वाले नुकसान को निष्क्रिय रहकर होने वाले बहुत बड़े नुकसान की तुलना में अधिक गंभीर और गलत मानते हैं।',
  oneLineExplanation: 'गलत कदम के डर से कुछ न करना, भले ही निष्क्रियता भारी विनाश का कारण बने।',
  summary30s: 'चूक पूर्वाग्रह (Omission Bias) हमें यह विश्वास दिलाता है कि कुछ न करने से हम नैतिक जिम्मेदारी से बच जाते हैं। यदि कोई नया कदम उठाने में 1% जोखिम हो, तो लोग उसे टाल देते हैं, भले ही यथास्थिति बनाए रखने से 20% नुकसान निश्चित हो। यह पूर्वाग्रह नवाचार को रोकता है और संस्थानों में कायरता को बढ़ावा देता है।',
};


function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_OMISSION_BIAS_EN,
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

export const TOPIC_OMISSION_BIAS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_OMISSION_BIAS_EN,
  hinglish: TOPIC_OMISSION_BIAS_HINGLISH,
  hi: TOPIC_OMISSION_BIAS_HI,
  gu: createLocalizedRecord('gu', "The Omission Bias: Inaction As Absolution (પૂર્વગ્રહ)", "The Omission Bias: Inaction As Absolution એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "The Omission Bias: Inaction As Absolution (पूर्वग्रह)", "The Omission Bias: Inaction As Absolution हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "The Omission Bias: Inaction As Absolution (పక్షపాతం)", "The Omission Bias: Inaction As Absolution అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "The Omission Bias: Inaction As Absolution (சார்புநிலை)", "The Omission Bias: Inaction As Absolution என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "The Omission Bias: Inaction As Absolution (ಪಕ್ಷಪಾತ)", "The Omission Bias: Inaction As Absolution ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "The Omission Bias: Inaction As Absolution (പക്ഷപാതം)", "The Omission Bias: Inaction As Absolution എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "The Omission Bias: Inaction As Absolution (পক্ষপাতিত্ব)", "The Omission Bias: Inaction As Absolution হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "The Omission Bias: Inaction As Absolution (ਪੱਖਪਾਤ)", "The Omission Bias: Inaction As Absolution ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "The Omission Bias: Inaction As Absolution (جانبداری)", "The Omission Bias: Inaction As Absolution انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "The Omission Bias: Inaction As Absolution (ପକ୍ଷପାତିତା)", "The Omission Bias: Inaction As Absolution ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "The Omission Bias: Inaction As Absolution (পক্ষপাতিত্ব)", "The Omission Bias: Inaction As Absolution সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
