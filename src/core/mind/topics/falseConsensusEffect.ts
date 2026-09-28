import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: The False Consensus Effect: The Egocentric Projection of Beliefs
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Ross, Greene & House (1977): The "false consensus effect": An egocentric bias in social perception and attribution processes. Journal of Experimental Social Psychology
 * - Marks & Miller (1987): Ten years of research on the false-consensus effect: An empirical and theoretical review. Psychological Bulletin
 * - Krueger & Clement (1994): The truly false consensus effect: An ineradicable and egocentric bias in social perception
 */

export const TOPIC_FALSE_CONSENSUS_EFFECT_EN: MindTopicDetail = {
  id: 'false_consensus_effect',
  categoryId: 'cognitive_biases',
  slug: 'false-consensus-effect',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 19,
  viewCount: 7350,
  shareCount: 590,
  bookmarkCount: 1210,
  title: 'The False Consensus Effect: The Egocentric Projection of Beliefs',
  subtitle: 'The pervasive cognitive illusion that other people share your personal beliefs, habits, and preferences far more than they actually do.',
  shortDescription: 'A cognitive bias where people perceive their own behavioral choices, moral stances, and personal values as relatively common and appropriate to existing circumstances.',
  oneLineExplanation: '"Everyone agrees with me, and anyone who disagrees is misinformed or irrational."',

  summary30s: 'The false consensus effect is the brain natural tendency to use the self as the default benchmark for humanity. If you love spicy street food, work late into the night, or hold a specific political philosophy, your subconscious assumes that the vast majority of ordinary citizens share those inclinations. When you encounter someone with opposite tastes, you view them as a bizarre anomaly rather than a representative member of society.',

  coreConcept: 'Documented empirically by Lee Ross, David Greene, and Pamela House in 1977, the false consensus effect demonstrates that people project their internal judgments outward onto the general population. In their famous "Eat at Joe" sandwich-board experiment, students who agreed to walk around campus wearing the sign estimated that 65% of their peers would also agree; students who refused estimated that only 31% would agree. Both groups believed their personal choice was the social majority.',
  summary60s: 'The false consensus effect is supercharged in the modern era by social media algorithmic filter bubbles. Because our online networks and friend groups consist of people with similar education, socioeconomic status, and tastes, we rarely encounter authentic dissenting perspectives. This creates a dangerous optical illusion where startup founders build products only their friends want, political parties believe their victory is guaranteed, and executives mistake their personal intuition for universal customer demand.',

  quickTakeaways: [
    'Egocentric Projection: We treat our personal preferences as the standard baseline for all sensible humans',
    'Dissent Pathologization: Those who disagree with our beliefs are viewed as either uninformed, biased, or malicious',
    'Echo Chamber Amplification: Digital social networks artificially validate our belief that our perspective is ubiquitous',
    'Empirical Polling Antidote: Never assume market consensus without blind, randomized quantitative surveys',
  ],

  whyItHappens: 'Availability heuristic and selective exposure. We spend most of our time with friends and media sources that mirror our values. Because examples of agreement are immediately available in memory, the brain calculates high social prevalence.',
  evolutionaryMechanism: 'Believing that the tribe shared one core values fostered cohesion, cooperative hunting, and lowered interpersonal paranoia. Assuming consensus helped tribal members act with united conviction.',

  howItWorks: 'The brain relies on cognitive availability: our own thoughts and preferences are constantly active in conscious awareness. When asked to estimate what others think, the brain anchors on its own state and makes only insufficient adjustments, assuming others possess identical information and emotional reactions.',
  whereYouEncounterIt: 'Product design meetings ("no one uses desktop anymore"), political debates, family gatherings, workplace culture assumptions, and consumer habit forecasting.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Projected Consensus vs. Actual Distribution',
    description: 'How individual preference warps perceived public opinion.',
    analogySideA: {
      label: 'Your Perspective (Proposer)',
      detail: '"Obviously everyone prefers remote work and finds office commuting completely obsolete."',
    },
    analogySideB: {
      label: 'General Population (Reality)',
      detail: 'Surveys show roughly 40% of workers actively prefer working in a physical office for social interaction.',
    },
  },

  researchSummary: 'Marks & Miller (1987) reviewed 10 years of false consensus experiments across multiple domains (politics, ethics, pop culture, consumer habits). They found the effect is robust across cultures and ages, driven primarily by selective exposure and cognitive availability rather than mere wishful thinking.',
  limitationsAndControversies: 'False Uniqueness Effect: In domains of rare talent, athletic skill, or high moral virtue, people sometimes exhibit the opposite bias (false uniqueness), underestimating how many others share their positive traits to feel uniquely special.',
  commonMisconceptions: 'Common myth: "Traveling and having many friends eliminates the false consensus effect." Reality: People naturally select friends who validate their worldview, reinforcing their false sense of consensus.',

  howToRecognize: [
    'Catching yourself starting sentences with "Everyone knows that..." or "Obviously nobody believes that..."',
    'Feeling genuine shock when an election result or customer feedback survey contradicts your personal expectation',
    'Assuming your team members enjoy the same communication style or social activities that you do',
    'Building a product feature based solely on what you and your co-founder personally prefer',
  ],

  scenarios: [
    {
      id: 'scen_fce_01',
      scenarioType: 'indian_context',
      title: 'The Organic Grocery Startup in South Delhi',
      vignette: 'Rohan and Ananya, two software engineers in Greater Kailash, decided to launch an artisanal, zero-plastic subscription grocery service. In their friend circle, everyone bought imported almond milk and gluten-free millets. Rohan was convinced: "Everyone in Delhi is sick of conventional supermarket produce; we will easily reach 50,000 paid subscribers in year one." When they expanded beyond their immediate neighborhood to West Delhi and Noida, they discovered that over 90% of shoppers prioritized price and reliable local kirana credit, resulting in dismal customer retention.',
      breakdownAnalysis: 'Rohan and Ananya fell victim to the false consensus effect amplified by their socioeconomic bubble. They assumed that their peer group consumption choices represented the broader middle-class consumer.',
      recommendedAction: 'Conduct blind customer discovery interviews across diverse zip codes and economic brackets before committing capital.',
    },
  ],

  examples: [
    {
      id: 'ex_fce_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Camera-On Remote Work Policy',
      description: 'An extroverted team manager assumes that keeping cameras on for 8 hours daily makes everyone feel connected. An anonymous survey reveals that 75% of developers feel severe camera fatigue and resentment.',
      takeaway: 'Projecting personal energizers onto team members breeds systemic disengagement.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_fce_01',
      scenarioContext: 'A founder pitching an angel investor says: "Nobody carries physical cash in tier-2 Indian cities anymore; UPI has replaced 100% of offline cash transactions."',
      question: 'Which cognitive bias is most evident in the founder statement, and how should it be evaluated?',
      prompt: 'Which cognitive bias is most evident in the founder statement, and how should it be evaluated?',
      scenarioText: 'A founder pitching an angel investor says: "Nobody carries physical cash in tier-2 Indian cities anymore; UPI has replaced 100% of offline cash transactions."',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'The founder is demonstrating vision and bold conviction necessary for venture-scale execution',
          explanation: 'Bold conviction is not a substitute for accurate market data; uncalibrated assumptions lead to bankruptcy.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'False consensus effect: The founder is projecting their tech-savvy metropolitan habits onto diverse populations without verifying RBI cash-in-circulation base rates',
          explanation: 'Accurate: The founder mistake their personal peer circle cashless habits for universal adoption.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Anchoring effect: The founder is anchored on the demonetization announcement of 2016',
          explanation: 'The primary error is social projection of habits, not numeric anchoring on a specific benchmark.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Your habits are a sample size of one. Never mistake personal lifestyle for aggregate market reality.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Actively survey representative groups outside your immediate circle and demand blind empirical data.',
  psychologicalDefenses: [
    {
      title: 'The Diverse Sample Size Audit',
      instruction: 'Before concluding that "everybody thinks X," ask yourself: "How many people outside my tax bracket, age group, and geographic city have I actually spoken with?"',
    },
    {
      title: 'Red-Teaming Assumptions',
      instruction: 'Assign a designated team member to argue the exact opposite preference in design and strategy meetings.',
    },
  ],

  reflectionPrompt: 'What is one strong moral, lifestyle, or consumer preference you hold that you secretly believe "all rational people" should agree with? What does the opposing side actually care about?',
  references: [
    {
      id: 'ref_fce_01',
      title: 'The "false consensus effect": An egocentric bias in social perception and attribution processes',
      citation: 'Ross, L., Greene, D., & House, P. (1977). Journal of Experimental Social Psychology, 13(3), 279–301.',
      authors: 'Lee Ross, David Greene, Pamela House',
      publicationYear: 1977,
      journalOrPublisher: 'Journal of Experimental Social Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1016/0022-1031(77)90049-X',
      relevance: 'Original empirical demonstration that people overestimate the degree to which others share their choices.',
      displayOrder: 1,
    },
    {
      id: 'ref_fce_02',
      title: 'Ten years of research on the false-consensus effect: An empirical and theoretical review',
      citation: 'Marks, G., & Miller, N. (1987). Psychological Bulletin, 102(1), 72–90.',
      authors: 'Gary Marks, Norman Miller',
      publicationYear: 1987,
      journalOrPublisher: 'Psychological Bulletin',
      sourceType: 'systematic_review',
      evidenceStrength: 'peer_reviewed_meta_analysis',
      doiOrUrl: 'https://doi.org/10.1037/0033-2909.102.1.72',
      relevance: 'Comprehensive meta-analysis of theoretical mechanisms underlying false consensus projections.',
      displayOrder: 2,
    },
  ],
  tags: ['Cognitive Biases', 'Social Perception', 'Echo Chambers', 'Decision Making'],
  relatedTopics: [
    { topicId: 'confirmation_bias', slug: 'confirmation-bias', title: 'Confirmation Bias', relationshipType: 'amplified_by' },
    { topicId: 'bias_blind_spot', slug: 'bias-blind-spot', title: 'Bias Blind Spot', relationshipType: 'amplified_by' },
  ],
  seoTitle: 'False Consensus Effect Explained: Why We Project Our Beliefs | Mentalab Mind',
  seoDescription: 'Why we assume everyone agrees with us. Understand egocentric projection, echo chambers, and how to objectively measure social reality.',
  canonicalUrl: '/mind/cognitive-biases/false-consensus-effect',
  ogImageUrl: '/images/mind/false-consensus-effect.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: 'False consensus effect is an egocentric projection bias where individuals overestimate the social prevalence of their own traits.',
};

export const TOPIC_FALSE_CONSENSUS_EFFECT_HINGLISH: MindTopicDetail = {
  ...TOPIC_FALSE_CONSENSUS_EFFECT_EN,
  title: 'False Consensus Effect: "Sab Meri Hi Tarah Sochte Hain" Ka Illusion',
  subtitle: 'Yeh maan lena ki jo hume pasand hai ya jo hamari soch hai, wahi poori duniya ki soch hai.',
  shortDescription: 'Ek aisi cognitive bias jisme insaan ko lagta hai ki uske vichar, aadat aur pasand-napasand aam logon me bahut common hain.',
  oneLineExplanation: '"Sabko pata hai ki meri baat sahi hai, aur jo nahi manta wo bewakoof hai."',

  summary30s: 'False Consensus Effect hamare dimaag ka ek default chashma hai. Agar hume late night kaam karna pasand hai ya koi specific political soch pasand hai, toh dimaag sochta hai ki aam janta bhi wahi sochti hai. Jab koi humse bilkul alag raye rakhta hai, toh hume lagta hai wo pagal hai ya use samajh nahi hai, jabki reality me hamari soch sirf ek choti si percentage hoti hai.',
  coreConcept: 'Lee Ross aur unke sathiyo (1977) ne prove kiya ki log apni choice ko hi majority choice maan lete hain. Unke sandwich-board experiment me jinhone board pehna unhe laga 65% log pehnenge, aur jinhone mana kiya unhe laga 70% log mana karenge. Dono ko laga unka faisla hi sabse normal hai.',
  summary60s: 'Aaj ke social media era me yeh bias aur khatarnak ho gaya hai. Hamare Instagram aur Twitter par wahi log hote hain jo hamare jaisa sochte hain. Isse ek echo chamber ban jata hai. Founders aisi apps banate hain jo sirf unke dosto ko pasand aati hai, aur political partiyan sochtin hain ki unki jeet 100% tay hai, jabki ground reality bilkul alag hoti hai.',

  quickTakeaways: [
    'Egocentric Soch: Hum apni pasand ko hi har samajhdar insaan ka standard maan lete hain',
    'Doosron ko Galat Samajhna: Jo humse disagree kare use uninformed ya bewakoof ghoshit kar dena',
    'Echo Chamber Trap: Hamara friend circle hamare beliefs ko hi repeat karta rehta hai',
    'Data-Driven Antidote: Kabhi bhi assumptions par nahi, randomized surveys aur real field research par bharosa karein',
  ],

  whyItHappens: 'Availability heuristic: Hum din bhar un logo ke sath rehte hain jo hamare jaise hain. Memory me support ke examples aasani se mil jate hain toh dimaag sochta hai consensus 90% hai.',
  evolutionaryMechanism: 'Purane zamaane me tribe ke andar ek jaisi soch rakhne se jhagde kam hote the aur shikaar ke waqt unity bani rehti thi.',

  howItWorks: 'Dimaag apni soch ko center me rakhta hai. Jab doosro ke vichar ka andaza lagana hota hai toh dimaag apne vichar se shuru karta hai aur adjust hi nahi karta.',
  whereYouEncounterIt: 'Product design meetings, parivaar ke debates, voting predictions, aur startup ideas.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Apna Andaza vs. Ground Reality',
    description: 'Kaise hamari personal choice public opinion ke andaze ko distort karti hai.',
    analogySideA: {
      label: 'Hamari Personal Soch',
      detail: '"Obviously har koi remote work pasand karta hai, office jana bilkul bekaar hai."',
    },
    analogySideB: {
      label: 'Asli Public Data',
      detail: 'Surveys dikhate hain ki 40% se zyada log social interaction ke liye office jana prefer karte hain.',
    },
  },

  researchSummary: 'Marks & Miller (1987) ke 10 saal ke research review ne confirm kiya ki false consensus effect har age group aur culture me consistent hai.',
  limitationsAndControversies: 'False Uniqueness: Kuch cases me (jaise koi khaas talent ya moral goodness me) log sochte hain "main akela hi itna achha hu", jahan false uniqueness kaam karta hai.',
  commonMisconceptions: 'Mithak: "Travel karne se yeh bias khatam ho jata hai." Reality: Log travel me bhi apne type ke logon se hi milte hain aur bubble intact rehta hai.',

  howToRecognize: [
    'Baat-baat par bolna: "Yeh toh sabko pata hai..." ya "Koi bhi samajhdar aadmi aisa nahi karega"',
    'Election results ya market feedback aane par shocked reh jana',
    'Yeh sochna ki team ke sabhi log aapke jaisa hi communicate karna chahte hain',
    'Bina customer research ke sirf apne opinion par naya feature launch kar dena',
  ],

  scenarios: [
    {
      id: 'scen_fce_hi_01',
      scenarioType: 'indian_context',
      title: 'South Delhi Me Organic Grocery Startup',
      vignette: 'Greater Kailash ke Rohan aur Ananya ne ek zero-plastic organic grocery service shuru ki. Unke friend circle me sab log imported almond milk peete the. Rohan bola: "Delhi ka har banda supermarket ke chemicals se pareshan hai, hume pehle saal me hi 50,000 paid subscribers milenge." Jab unhone West Delhi aur Noida me expand kiya, toh 90% customers ne price aur local kirana udhaar ko priority di, aur startup struggle karne laga.',
      breakdownAnalysis: 'Rohan aur Ananya false consensus effect ke shikar huye. Unhone apne posh friend circle ki aadat ko poore Delhi ki aadat samajh liya.',
      recommendedAction: 'Diverse economic background ke 100 logon se blind interviews karein capital lagane se pehle.',
    },
  ],

  examples: [
    {
      id: 'ex_fce_hi_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Camera On Remote Work Policy',
      description: 'Ek extroverted manager manta hai ki 8 ghante camera on rakhne se team bonding badhti hai. Anonymous survey me 75% engineers bolte hain ki unhe severe exhaustion hoti hai.',
      takeaway: 'Apni personal preference ko poori team par thopna engagement ko khatam karta hai.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_fce_hi_01',
      scenarioContext: 'Ek founder pitch me bolta hai: "Tier-2 shehron me ab koi cash nahi chalta; UPI ne 100% cash transactions ko replace kar diya hai."',
      question: 'Is statement me kaunsi cognitive bias hai aur ise kaise evaluate karein?',
      prompt: 'Is statement me kaunsi cognitive bias hai aur ise kaise evaluate karein?',
      scenarioText: 'Ek founder pitch me bolta hai: "Tier-2 shehron me ab koi cash nahi chalta; UPI ne 100% cash transactions ko replace kar diya hai."',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Founder venture capital ke liye zaroori conviction dikha raha hai',
          explanation: 'Conviction galat facts ka replacement nahi ho sakta; ungrounded assumptions se startup doobte hain.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'False consensus effect: Founder apni metro tech habits ko poore desh par project kar raha hai bina RBI data check kiye',
          explanation: 'Sahi: Founder ne apne dosto ki aadat ko universal ground reality maan liya.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Anchoring effect: Founder 2016 ki demonetization par atka hua hai',
          explanation: 'Yeh social projection ka case hai, numeric anchoring ka nahi.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Aapki aadat sirf aapki aadat hai, use aggregate market reality samajhne ki bhool mat kijiye.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Apne circle se bahar nikalkar real field data dekhein aur contrary opinions ko suniye.',
  psychologicalDefenses: [
    {
      title: 'Sample Diversity Audit',
      instruction: 'Jab bhi dimaag bole "sab log aisa hi sochte hain," puchiye: "Maine apni income aur shehar se bahar ke kitne logon se sach me baat ki hai?"',
    },
    {
      title: 'Red-Teaming Strategy',
      instruction: 'Meetings me ek member ko compulsory role dein aapke assumption ke khilaaf bolne ka.',
    },
  ],

  reflectionPrompt: 'Aapka kaunsa aisa decision ya aadat hai jise aap "sabse sensible aur standard" maante hain? Sochiyega jo log isse disagree karte hain unka valid reason kya hai.',
  seoTitle: 'False Consensus Effect Kya Hai? Dimaag Ka Egocentric Illusion | Mentalab Mind',
  seoDescription: 'Janiye kyu hume lagta hai ki sab log hamari tarah sochte hain. Seekhein kaise echo chambers se bahar nikalkar real public reality samjhein.',
  canonicalUrl: '/mind/cognitive-biases/false-consensus-effect',
};

export const TOPIC_FALSE_CONSENSUS_EFFECT_HI: MindTopicDetail = {
  ...TOPIC_FALSE_CONSENSUS_EFFECT_EN,
  title: 'False Consensus Effect (मिथ्या सहमति प्रभाव)',
  subtitle: 'यह मान लेना कि अधिकांश लोग आपके विचारों और प्राथमिकताओं से सहमत हैं।',
  shortDescription: 'एक ऐसा संज्ञानात्मक पूर्वाग्रह जहाँ लोग अपने व्यवहार, मान्यताओं और मूल्यों को समाज में वास्तव में होने की तुलना में कहीं अधिक सामान्य और उचित मानते हैं।',
  oneLineExplanation: 'अपनी व्यक्तिगत सोच को सार्वभौमिक सत्य मान लेना।',
  summary30s: 'मिथ्या सहमति प्रभाव (False Consensus Effect) हमें यह विश्वास दिलाता है कि हमारी पसंद, जीवनशैली और दृष्टिकोण सामान्य जनता का प्रतिनिधित्व करते हैं। जब कोई हमसे भिन्न राय रखता है, तो हम उसे अपवाद या नासमझ मान लेते हैं, जबकि वास्तव में हमारी राय केवल एक सीमित वर्ग का दृष्टिकोण हो सकती है।',
};


function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_FALSE_CONSENSUS_EFFECT_EN,
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

export const TOPIC_FALSE_CONSENSUS_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_FALSE_CONSENSUS_EFFECT_EN,
  hinglish: TOPIC_FALSE_CONSENSUS_EFFECT_HINGLISH,
  hi: TOPIC_FALSE_CONSENSUS_EFFECT_HI,
  gu: createLocalizedRecord('gu', "The False Consensus Effect: The Egocentric Projection of Beliefs (પ્રભાવ)", "The False Consensus Effect: The Egocentric Projection of Beliefs એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "The False Consensus Effect: The Egocentric Projection of Beliefs (प्रभाव)", "The False Consensus Effect: The Egocentric Projection of Beliefs हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "The False Consensus Effect: The Egocentric Projection of Beliefs (ప్రభావం)", "The False Consensus Effect: The Egocentric Projection of Beliefs అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "The False Consensus Effect: The Egocentric Projection of Beliefs (விளைவு)", "The False Consensus Effect: The Egocentric Projection of Beliefs என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "The False Consensus Effect: The Egocentric Projection of Beliefs (ಪರಿಣಾಮ)", "The False Consensus Effect: The Egocentric Projection of Beliefs ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "The False Consensus Effect: The Egocentric Projection of Beliefs (സ്വാധീനം)", "The False Consensus Effect: The Egocentric Projection of Beliefs എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "The False Consensus Effect: The Egocentric Projection of Beliefs (প্রভাব)", "The False Consensus Effect: The Egocentric Projection of Beliefs হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "The False Consensus Effect: The Egocentric Projection of Beliefs (ਪ੍ਰਭਾਵ)", "The False Consensus Effect: The Egocentric Projection of Beliefs ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "The False Consensus Effect: The Egocentric Projection of Beliefs (اثر)", "The False Consensus Effect: The Egocentric Projection of Beliefs انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "The False Consensus Effect: The Egocentric Projection of Beliefs (ପ୍ରଭାବ)", "The False Consensus Effect: The Egocentric Projection of Beliefs ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "The False Consensus Effect: The Egocentric Projection of Beliefs (প্ৰভাৱ)", "The False Consensus Effect: The Egocentric Projection of Beliefs সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
