import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: The Optimism Bias: Believing the Future Is Safer Than Statistics Prove
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Sharot, T. (2011): The optimism bias. Current Biology, 21(23), R941–R945.
 * - Weinstein, N. D. (1980): Unrealistic optimism about future life events. Journal of Personality and Social Psychology.
 * - Kahneman, D. (2011): Thinking, Fast and Slow (Chapter 24: The Engine of Capitalism).
 */

export const TOPIC_OPTIMISM_BIAS_EN: MindTopicDetail = {
  id: 'optimism_bias',
  categoryId: 'cognitive_biases',
  slug: 'optimism-bias',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 17,
  viewCount: 7420,
  shareCount: 610,
  bookmarkCount: 1320,
  title: 'The Optimism Bias: Believing the Future Is Safer Than Statistics Prove',
  subtitle: 'The systematic human tendency to overestimate the likelihood of experiencing positive events and underestimate negative risks.',
  shortDescription: 'A cognitive bias causing someone to believe that they themselves are less at risk of experiencing a negative event (cancer, divorce, financial ruin) compared to others.',
  oneLineExplanation: 'Smoking cigarettes while assuming lung disease only happens to other people.',

  summary30s: 'Discovered across dozens of cultures by Neil Weinstein in 1980 and mapped neurologically by Tali Sharot in 2011, the Optimism Bias reveals that roughly 80% of human beings possess an intrinsically rosy forecast of their own future. We know that 50% of marriages end in divorce and 90% of restaurants fail, yet every bride, groom, and restaurateur is convinced they are the exception.',

  coreConcept: 'The Optimism Bias is an asymmetry in belief updating. Neuroimaging studies demonstrate that when people receive unexpectedly good news about their future, their frontal cortex updates their beliefs efficiently. But when they receive statistical warnings about bad news (e.g. elevated cardiovascular or layoff risks), the right inferior frontal gyrus fails to code the error signal properly. We literally ignore negative warning signals.',
  summary60s: 'Consider financial planning. Millions of households carry zero health insurance or emergency cash reserves. If asked, they acknowledge that sudden medical crises bankrupt millions of families every year. Yet their internal narrative whispers: "Bad things happen to strangers, not to me." This unrealistic optimism drives human entrepreneurship and exploration, but also causes financial devastation, neglected health checks, and lack of risk hedging.',

  quickTakeaways: [
    'The "Not Me" Illusion: Acknowledging that bad outcomes happen to the general population, but feeling personally immune',
    'Asymmetric Updating: Brain circuits readily absorb good news, but actively resist updating after bad news',
    'The Engine of Capitalism: Optimism bias drives founders to start businesses that statistically should never succeed',
    'Premortem Inoculation: Force yourself to assume your project has already failed, and identify the causes backwards',
  ],

  whyItHappens: 'Frontal-subcortical asymmetry in belief revision. Optimism lowers acute stress, reduces cortisol, and increases physical longevity, creating a strong evolutionary incentive for positive illusions.',
  evolutionaryMechanism: 'Without optimistic delusions, ancestral humans facing extreme hardship, disease, and starvation would have succumbed to paralyzing depression. Believing the hunt would succeed tomorrow motivated continuous survival efforts.',

  howItWorks: 'Three cognitive steps: (1) Baseline Blindness: Ignoring population-level base rates; (2) Illusion of Control: Overestimating personal skill and agency over random events; (3) Selective Error Filtering: Discarding unfavorable warning signals as irrelevant anomalies.',
  whereYouEncounterIt: 'Starting a new business without runway, driving without wearing a seatbelt, delaying retirement savings in your twenties, and sunbathing without sunscreen.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Population Base Rate vs. Personal Forecast',
    description: 'How the optimism bias detaches personal expectations from empirical realities.',
    analogySideA: {
      label: 'Actuarial Statistics',
      detail: '"90% of tech startups fail within 3 years; 40% of adults develop lifestyle diseases by age 55."',
    },
    analogySideB: {
      label: 'Optimistic Self-Assessment',
      detail: '"Those statistics describe the average person, but my work ethic and genetics make me an outlier."',
    },
  },

  researchSummary: 'Tali Sharot et al. (2011) placed participants in fMRI scanners while presenting real-world risks (e.g., burglary, cancer). When presented with a risk lower than expected, participants easily adjusted their predictions. When presented with a risk higher than expected, participants barely shifted their estimate, demonstrating an anatomical neural bias against negative updating.',
  limitationsAndControversies: 'Depressive Realism: As noted in psychiatric literature, individuals suffering from depression often exhibit perfectly calibrated, realistic risk forecasts, lacking the protective optimism shield of neurotypical brains.',
  commonMisconceptions: 'Common myth: "Pessimists never suffer from optimism bias." Reality: Self-described pessimists frequently underestimate personal risks in specific domains (e.g. cybersecurity hygiene, health insurance) while worrying about unrelated global catastrophes.',

  howToRecognize: [
    'Saying "It won\'t happen to me" when hearing about a colleague\'s sudden medical emergency or house fire',
    'Budgeting for a project assuming zero delays, zero sick days, and zero supply chain problems',
    'Postponing term-life insurance or a will because you feel too young and healthy to die',
    'Investing your entire portfolio into high-risk equities without keeping a 6-month liquid cash cushion',
  ],

  scenarios: [
    {
      id: 'scen_opt_01',
      scenarioType: 'indian_context',
      title: 'The Restaurant Dream in Hyderabad',
      vignette: 'Sanjay, a software engineer in Hyderabad, decides to invest his entire life savings of ₹45,00,000 into opening a luxury biryani restaurant. His chartered accountant shows him municipal data showing that 82% of new restaurants in the neighborhood close within 14 months due to soaring commercial rent and chef attrition. Sanjay smiles dismissively: "Those 82% closed because their food had no soul. My grandmother\'s secret masala recipe and my passion will make us the most popular cafe in the city." Ten months later, chef walkouts and high rent consume his capital, forcing a distressed shutdown.',
      breakdownAnalysis: 'Sanjay fell into the classic Optimism Bias trap. He acknowledged the 82% failure rate as statistically valid for others, but believed his emotional passion granted him complete immunity from macroeconomic realities.',
      recommendedAction: 'Conduct a Gary Klein Pre-Mortem: Before signing the lease, gather your team and say: "Imagine it is one year from today and our restaurant has gone bankrupt. What specific financial and operational events destroyed us?" Plan buffers around those failure modes.',
    },
  ],

  examples: [
    {
      id: 'ex_opt_01',
      domain: 'health',
      displayOrder: 1,
      title: 'Smoking and Cardiovascular Risk',
      description: 'Surveys of chronic smokers show that while they accurately estimate that general smokers have an 80% higher cancer risk, they assess their own personal risk as equal to non-smokers.',
      takeaway: 'People accept statistical facts for the crowd, but carve out personal exemptions.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_opt_01',
      scenarioContext: 'A young freelance software consultant with a wife and infant child does not purchase term life insurance or comprehensive health coverage, saying: "I eat organic food, exercise daily, and nobody in my family has died young. Insurance is wasted money for someone with my lifestyle."',
      question: 'Which cognitive vulnerability is driving this financial decision?',
      prompt: 'Which cognitive vulnerability is driving this financial decision?',
      scenarioText: 'A young freelance software consultant with a wife and infant child does not purchase term life insurance or comprehensive health coverage, saying: "I eat organic food, exercise daily, and nobody in my family has died young. Insurance is wasted money for someone with my lifestyle."',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'The Optimism Bias: confusing personal lifestyle precautions with total immunity from random genetic or accidental life risks',
          explanation: 'Accurate: healthy habits reduce risk, but equating them to zero probability of random illness or traffic accidents leaves dependents financially exposed.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'The Sunk Cost Fallacy: continuing an investment due to prior emotional commitment',
          explanation: 'There is no past sunk expenditure being protected here.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Rational utility optimization based on mathematical certainty',
          explanation: 'Medical events and vehicular accidents contain irreducible stochastic randomness that cannot be reduced to zero.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Insurance exists precisely because life contains catastrophic outlier risks that healthy habits cannot control.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Anchor to objective actuarial tables and force pre-mortem stress tests on all major life plans.',
  psychologicalDefenses: [
    {
      title: 'The Base-Rate Anchor',
      instruction: 'Whenever starting a venture or evaluating health, look up the national statistical failure or illness rate first. Assume you are at baseline unless audited by third-party data.',
    },
    {
      title: 'Gary Klein\'s Pre-Mortem',
      instruction: 'Before launching any initiative, assume it failed catastrophically. Write down why. Build safeguards against those exact vulnerabilities.',
    },
    {
      title: 'Mandatory Asymmetric Insurance',
      instruction: 'Buy term insurance and health coverage precisely because catastrophic low-probability events happen regardless of your personal optimism.',
    },
  ],

  reflectionPrompt: 'In what area of your personal health or financial security are you assuming that bad luck will never happen to you?',
  references: [
    {
      id: 'ref_opt_01',
      title: 'The optimism bias',
      citation: 'Sharot, T. (2011). Current Biology, 21(23), R941–R945.',
      authors: 'Tali Sharot',
      publicationYear: 2011,
      journalOrPublisher: 'Current Biology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1016/j.cub.2011.10.030',
      relevance: 'Seminal neurobiological paper identifying the frontal cortex asymmetry in processing positive vs. negative predictions.',
      displayOrder: 1,
    },
  ],
  tags: ['Cognitive Biases', 'Risk Perception', 'Optimism Bias', 'Decision Making'],
  relatedTopics: [
    { topicId: 'planning_fallacy', slug: 'planning-fallacy', title: 'Planning Fallacy', relationshipType: 'amplified_by' },
    { topicId: 'dunning_kruger_effect', slug: 'dunning-kruger-effect', title: 'Dunning-Kruger Effect', relationshipType: 'amplified_by' },
  ],
  seoTitle: 'The Optimism Bias: Why We Underestimate Life Risks | Mentalab Mind',
  seoDescription: 'Why 80% of humans believe they are immune to accidents, divorce, and financial failure. Discover the neuroscience of the optimism bias.',
  canonicalUrl: '/mind/cognitive-biases/optimism-bias',
  ogImageUrl: '/images/mind/optimism-bias.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: 'The optimism bias is an asymmetric neurocomputational error in updating beliefs from negative valence evidence.',
};

export const TOPIC_OPTIMISM_BIAS_HINGLISH: MindTopicDetail = {
  ...TOPIC_OPTIMISM_BIAS_EN,
  title: 'The Optimism Bias: "Buri Cheezein Doosron Ke Sath Hoti Hain, Mere Sath Nahi"',
  subtitle: 'Dimaag ka wo ajeeb bharosa jisme hume lagta hai ki humare sath kabhi koi bimari ya nuksan nahi hoga.',
  shortDescription: 'Ek aisi cognitive bias jisme insaan maanta hai ki duniye bhar me divorce, bimari aur financial loss hota hai, par wo khud in sabse immune hai.',
  oneLineExplanation: 'Yeh jaante hue bhi cigarette peena ki lung cancer sirf doosron ko hota hai.',

  summary30s: 'Neil Weinstein aur Tali Sharot ki research ne prove kiya hai ki 80% insaan Optimism Bias ke shikaar hote hain. Hum sab jante hain ki 90% naye restaurants band ho jate hain aur lakho log road accidents me ghayal hote hain. Lekin jab humse poocha jata hai, toh humara dimaag kehta hai: "Main toh exception hoon, mere sath aisa nahi ho sakta."',
  coreConcept: 'Dimaag achhi khabron ko turant accept karta hai, lekin jab use koi negative data (jaise heart attack ya job loss ka risk) diya jata hai, toh frontal lobe ka wo hissa band ho jata hai jo error code karta hai. Hum negative reality ko deliberately filter out kar dete hain.',
  summary60s: 'Financial planning me yeh roz dekha jata hai. Lakhon log bina health insurance aur bina emergency fund ke ghoomte hain. Unhe lagta hai bimari ya hospital ka kharcha kisi aur par aayega. Is unrealistic optimism se log entrepreneurship shuru karte hain jo achhi baat hai, par jab contingency plan nahi hota toh ek jhatke me saari savings khatam ho jati hain.',

  quickTakeaways: [
    '"Mere Sath Nahi Hoga" Illusion: Data ko sach maanna par khud ko chhoot de dena',
    'Asymmetric Updating: Dimaag achhi news ko 100% maanta hai par warning signals ko ignore karta hai',
    'Zero Insurance Trap: Health aur term insurance na lena optimism bias ka sabse bada khatarnak natija hai',
    'Pre-Mortem Protocol: Maan lijiye ki project fail ho chuka hai, aur pehle se uske causes par planning karein',
  ],

  whyItHappens: 'Stress aur depression se bachav. Agar insaan har waqt maut aur bimari ke bare me sochega toh paralyzed ho jayega. Optimism hume kaam karne ki energy deta hai.',
  evolutionaryMechanism: 'Aadimanav ko roz shikaar par jaate waqt yeh sochna zaroori tha ki "aaj main zinda lautunga", warna wo darr ke maare gufa se bahar hi na nikalta.',

  howItWorks: 'Teen steps: (1) Baseline Blindness: Real stats ko ignore karna; (2) Control Illusion: Lagna ki meri driving ya fitness mujhe 100% safe rakhegi; (3) Negative Filter: Warning ko kisi aur ki problem samajh kar bhool jana.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Real Population Data vs Dimaagi Yakeen',
    description: 'Kaise optimism bias hume statistical reality se alag kar deta hai.',
    analogySideA: {
      label: 'Actuarial Data (Sach)',
      detail: '"90% startups 3 saal me fail hote hain; 40% logon ko lifestyle diseases hoti hain."',
    },
    analogySideB: {
      label: 'Optimistic Illusion',
      detail: '"Yeh average logo ke sath hota hai, meri mehnat aur diet mujhe outlier banati hai."',
    },
  },

  examples: [
    {
      id: 'ex_opt_01',
      domain: 'health',
      displayOrder: 1,
      title: 'Smokers Ka Dimaagi Trap',
      description: 'Smokers se survey me poocha gaya toh unhone mana ki smoking se cancer ka 80% risk hota hai, lekin jab unse apna risk poocha gaya toh unhone bola: "Mujhe kuch nahi hoga."',
      takeaway: 'Insaan doosron ke liye data accept karta hai par khud ko miraculous exception maanta hai.',
    },
  ],

  scenarios: [
    {
      id: 'scen_opt_01',
      scenarioType: 'indian_context',
      title: 'Hyderabad Me Biryani Restaurant Ka Sapna',
      vignette: 'Hyderabad me Sanjay ne apni poori life savings ₹45,00,000 lagakar ek luxury biryani restaurant kholne ka socha. Uske CA ne data dikhaya ki area me high rent aur staff attrition ki wajah se 82% restaurants 1 saal me band ho jate hain. Sanjay ne haste hue bola: "Wo isliye band hue kyunki unke khane me pyaar nahi tha. Meri nani ki secret recipe aur mera passion hume no.1 banayega." 10 mahine baad rent aur staff issues ne uska saara capital khatam kar diya aur dukan band ho gayi.',
      breakdownAnalysis: 'Sanjay ne 82% failure rate ko sach mana, par bina kisi financial buffer ke yeh maan liya ki uska passion use statistical reality se bacha lega.',
      recommendedAction: 'Gary Klein Pre-Mortem: Shuru karne se pehle sochein: "Maan lo 1 saal baad hum bankrupt ho gaye hain. Kin 3 wajahon se aisa hua hoga?" Un 3 wajahon ka financial buffer pehle banayein.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_opt_01',
      scenarioContext: 'Ek young freelancer jiski choti beti hai, health aur term insurance nahi leta yeh keh kar: "Main roz yoga karta hoon, healthy khata hoon aur mere khandan me koi jaldi nahi mara. Insurance fit logon ke liye paise ki barbadi hai."',
      question: 'Kaunsa cognitive bias is risky financial decision ke peeche hai?',
      prompt: 'Kaunsa cognitive bias is risky financial decision ke peeche hai?',
      scenarioText: 'Ek young freelancer jiski choti beti hai, health aur term insurance nahi leta yeh keh kar: "Main roz yoga karta hoon, healthy khata hoon aur mere khandan me koi jaldi nahi mara. Insurance fit logon ke liye paise ki barbadi hai."',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'The Optimism Bias: apni healthy lifestyle ko random accidents aur unexpected medical emergencies se 100% immunity samajh lena',
          explanation: 'Sahi: Healthy habit risk kam karti hai, par zero nahi karti. Road accident ya outlier disease se family ko protect karne ke liye insurance zaroori hai.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Sunk Cost Fallacy: purane kharche ko bachane ke chakkar me galat decision lena',
          explanation: 'Yahan koi purana kharcha involve nahi hai.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Rational utility optimization',
          explanation: 'Medical aur traffic accidents unpredictable hote hain; unhe zero probability manna irrational hai.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Insurance isliye hoti hai kyunki life me aise outlier risks hote hain jinhe healthy diet control nahi kar sakti.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Base-rate statistics ko anchor banayein aur Pre-Mortem stress testing karein.',
  psychologicalDefenses: [
    {
      title: 'Base-Rate Reality Check',
      instruction: 'Kisi bhi business ya health goal se pehle national failure/illness rate check karein aur khud ko average baseline par maan kar risk hedge karein.',
    },
    {
      title: 'Gary Klein Pre-Mortem',
      instruction: 'Pehle se maan lijiye ki venture fail ho gaya hai; failure ke causes likhein aur unka protection plan ready rakhein.',
    },
  ],

  reflectionPrompt: 'Apni life ke kis aspect me aap maan kar chal rahe hain ki koi buri ghatna aapke sath kabhi nahi ho sakti?',
  seoTitle: 'Optimism Bias Kya Hai? Unrealistic Optimism Ki Science | Mentalab Mind',
  seoDescription: 'Janiye kyu 80% log sochte hain ki unke sath kabhi koi bimari ya financial loss nahi hoga. Seekhein risk hedging aur pre-mortem.',
  canonicalUrl: '/mind/cognitive-biases/optimism-bias',
};

export const TOPIC_OPTIMISM_BIAS_HI: MindTopicDetail = {
  ...TOPIC_OPTIMISM_BIAS_EN,
  title: 'Optimism Bias (आशावाद पूर्वाग्रह)',
  subtitle: 'नकारात्मक जोखिमों को कम आंकना और स्वयं के लिए केवल सकारात्मक परिणामों की अपेक्षा करना।',
  shortDescription: 'एक संज्ञानात्मक पूर्वाग्रह जिसके कारण व्यक्ति यह मानने लगता है कि वह दूसरों की तुलना में किसी दुर्भाग्यपूर्ण घटना (रोग, दुर्घटना, वित्तीय हानि) के प्रति सुरक्षित है।',
  oneLineExplanation: 'आंकड़ों को स्वीकार करना, परंतु स्वयं को उनका अपवाद मान लेना।',
  summary30s: '2011 में ताली शारोत के न्यूरोसाइंस शोध ने दिखाया कि लगभग 80% मनुष्य आशावाद पूर्वाग्रह (Optimism Bias) से ग्रस्त होते हैं। हम जानते हैं कि बड़ी संख्या में व्यापार असफल होते हैं और लोग बीमार पड़ते हैं, फिर भी हमारा मस्तिष्क हमें विश्वास दिलाता है कि यह हमारे साथ नहीं होगा।',
};

export const TOPIC_OPTIMISM_BIAS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_OPTIMISM_BIAS_EN,
  hinglish: TOPIC_OPTIMISM_BIAS_HINGLISH,
  hi: TOPIC_OPTIMISM_BIAS_HI,
  gu: TOPIC_OPTIMISM_BIAS_EN,
  mr: TOPIC_OPTIMISM_BIAS_EN,
  te: TOPIC_OPTIMISM_BIAS_EN,
  ta: TOPIC_OPTIMISM_BIAS_EN,
  kn: TOPIC_OPTIMISM_BIAS_EN,
  ml: TOPIC_OPTIMISM_BIAS_EN,
  bn: TOPIC_OPTIMISM_BIAS_EN,
  pa: TOPIC_OPTIMISM_BIAS_EN,
  ur: TOPIC_OPTIMISM_BIAS_EN,
  or: TOPIC_OPTIMISM_BIAS_EN,
  as: TOPIC_OPTIMISM_BIAS_EN,
};
