import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Decision Making Track
 * Topic: Loss Aversion: Why Pain of Loss Dwarfs Joy of Gain
 * Category: Decision Making (decision_making)
 * 
 * Academic Grounding:
 * - Kahneman & Tversky (1979): Prospect Theory: An Analysis of Decision under Risk
 * - Kahneman, Knetsch, & Thaler (1990): Experimental Tests of the Endowment Effect and the Coase Theorem
 * - Novemsky & Kahneman (2005): The Boundaries of Loss Aversion
 */

export const TOPIC_LOSS_AVERSION_EN: MindTopicDetail = {
  id: 'loss_aversion',
  categoryId: 'decision_making',
  slug: 'loss-aversion',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 2,
  viewCount: 6720,
  shareCount: 560,
  bookmarkCount: 1180,
  title: 'Loss Aversion: Why the Pain of Loss Dwarfs the Joy of Gain',
  subtitle: 'Prospect Theory and the 2:1 psychological asymmetry: why humans make irrational gambles to avoid booking a loss.',
  shortDescription: 'The cognitive bias where losses feel psychologically twice as painful as equivalent gains feel pleasurable, driving risk-seeking behavior in negative domains.',
  oneLineExplanation: 'In simple terms: Losing ₹500 hurts roughly twice as much as finding ₹500 feels good.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'If someone offers you a coin flip where Heads wins ₹1,000 and Tails loses ₹1,000, mathematically it is a fair 50/50 bet. Yet, 90% of people reject it with a knot in their stomach. Daniel Kahneman and Amos Tversky discovered that human brains are not neutral calculators: losses loom roughly 2 to 2.5 times larger than equivalent gains. This profound asymmetry causes people to cling to falling stocks, stay in miserable situations, or take reckless gambles just to break even.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Formulated in Kahneman and Tversky\'s Nobel Prize-winning Prospect Theory (1979), the psychological value function is S-shaped and asymmetrical: it is concave for gains and convex for losses, with a steeper slope in the loss domain. This creates two distinct behavioral distortions: (1) Risk Aversion in choices involving sure gains (people grab a guaranteed ₹5,000 rather than an 80% chance at ₹7,000); (2) Risk Seeking in choices involving sure losses (people take wild, reckless risks to avoid accepting a certain loss).',
  summary60s: 'Consider the Endowment Effect (Thaler, 1980): the moment an object comes into your possession—whether a coffee mug, a used car, or a company stock—your brain automatically marks it as part of your baseline. Giving it up feels like an acute loss rather than an exchange. Sellers routinely demand twice as much to give up an item as buyers are willing to pay to acquire it, gumming up rational market transactions.',

  quickTakeaways: [
    'The 2:1 Asymmetry: It takes an expected gain of ₹2,000 to ₹2,500 to psychologically balance the terror of losing ₹1,000',
    'Reckless Gambles to Break Even: When facing a sure loss, people double down on bad bets hoping for a miracle',
    'The Endowment Effect: You overvalue things simply because you own them (your house, car, or ideas)',
    'The Neutral Frame Protocol: Ask: "If I didn\'t already own this asset or job, would I buy into it today at market price?"',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Neuroimaging studies show that the threat of loss triggers immediate activation in the amygdala and anterior insula (the brain\'s physical pain and disgust centers). A financial or social loss is processed by the brain as an existential wound rather than an abstract ledger subtraction.',
  evolutionaryMechanism: 'Survival asymmetry. In a hunter-gatherer tribe living at caloric subsistence level, gaining an extra day\'s worth of food made you slightly more comfortable, but losing a day\'s worth of food meant death. Evolution selected for organisms that fought desperately to avoid loss.',

  // SECTION E — HOW DOES IT WORK?
  howItWorks: 'Loss aversion distorts decision-making across three phases: (1) Reference Point Anchoring: Establishing what is "mine"; (2) Pain Avoidance: Refusing to sell an asset that has dropped below purchase price; (3) Desperate Escalation: Taking on extreme downside risk (e.g., doubling down on volatile crypto) just to claw back to the original baseline.',
  whereYouEncounterIt: 'Stock market investing (holding losers and selling winners too early), free trial cancellations, real estate negotiations, insurance purchasing (overpaying for low-deductible policies), and career transitions.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'The Asymmetric Loss-Gain Value Curve',
    description: 'How the human nervous system weighs emotional wins versus losses.',
    analogySideA: {
      label: 'Gaining ₹10,000 (Pleasure Level +10)',
      detail: 'You smile, feel pleased for an hour, and buy dinner. A moderate, plateauing emotional lift.',
    },
    analogySideB: {
      label: 'Losing ₹10,000 (Pain Level -25)',
      detail: 'You feel a gut-punch of panic, lose sleep for two nights, re-run the scenario obsessively, and experience acute grief.',
    },
  },

  researchSummary: 'Kahneman, Knetsch, & Thaler (1990) conducted the famous Cornell coffee mug experiment. Students randomly given university mugs refused to sell them for less than $7.12 on average, while students without mugs were only willing to pay $2.87 to buy one. Physical ownership for just 5 minutes more than doubled the perceived value of the object.',
  limitationsAndControversies: 'Loss aversion diminishes significantly among experienced professional traders, institutional asset managers, and individuals who make high-frequency decisions under algorithmic checklists. Professional training dampens the emotional amygdala response to ledger drawdowns.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Refusing to sell a falling stock or real estate property because "It is not a real loss until I sell"',
    'Overpaying expensive monthly premiums for low-deductible insurance on minor household gadgets',
    'Staying in an unhappy job because the fear of losing current salary stability completely paralyzes the upside of a new career',
    'Hoarding old, unused physical belongings because "I might need this someday and throwing it away feels like a waste"',
    'Refusing to cancel subscription services during a "free trial" because giving up the service feels like losing an entitlement',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_loss_01',
      scenarioType: 'indian_context',
      title: 'The Plummeting Penny Stock Trap',
      vignette: 'Rajesh, an accountant in Pune, invested ₹2 Lakhs in a small-cap textile stock at ₹100 per share. Over six months, the company’s main factory caught fire and financial audits revealed irregularities; the stock plummeted to ₹35. A financial advisor tells Rajesh: "The company’s fundamentals are destroyed. Sell at ₹35, recover your ₹70,000, and invest it in a steady blue-chip index fund." Rajesh refuses furiously: "I cannot book a ₹1,30,000 loss! I will wait until it gets back to ₹100, then I will exit even." Over the next year, the stock goes to zero.',
      breakdownAnalysis: 'Rajesh is paralyzed by loss aversion. Booking a ₹1,30,000 paper loss forces his ego to admit error. To avoid the acute pain of that loss, he engages in irrational risk-seeking—holding an objectively bankrupt asset hoping for a miracle.',
      recommendedAction: 'Apply the Neutral Frame: Ask: "If someone handed me ₹70,000 in cash right now, would I spend it buying shares of this failing textile company?" If the answer is no, sell immediately and deploy the capital where it actually grows.',
    },
  ],

  examples: [
    {
      id: 'ex_loss_01',
      domain: 'consumer_advertising',
      displayOrder: 1,
      title: 'Free 30-Day Home Trial Nudges',
      description: 'Mattress and sofa companies offer "100-night risk-free trial in your home." Once the mattress is in your bedroom, the Endowment Effect and Loss Aversion take over. Returning it feels like losing your personal bed; fewer than 3% ever return it.',
      takeaway: 'Free trials leverage loss aversion by making cancellation feel like parting with something you already own.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'To counteract loss aversion in investments and major decisions, establish pre-committed "Stop-Loss" rules before entering any transaction. When your emotions are calm, write down the exact exit threshold. Frame potential changes in terms of "Opportunity Cost" (what you lose by staying) rather than "Risk of Departure."',
  psychologicalDefenses: [
    'The Pre-Committed Stop-Loss: Decide the exit price or time limit before buying or agreeing to a project',
    'The Opportunity Cost Reframe: Instead of thinking: "What might I lose by leaving this job?", ask: "What massive earnings, health, and peace am I actively losing every day by staying?"',
    'Broad Framing: Don\'t evaluate every single decision or investment in isolation; view your decisions as a 20-year portfolio where individual losses are guaranteed and statistically healthy',
    'The Outsider Protocol: Ask: "If my successor took over my desk tomorrow with zero emotional attachment, what would their very first move be?"',
  ],

  commonMisconceptions: [
    {
      misconception: 'Loss aversion means people are always timid and avoid risks.',
      reality: 'Loss aversion makes people risk-averse when protecting gains, but wildly and recklessly risk-seeking when trying to escape or recoup a sure loss.',
    },
  ],

  reflectionPrompt: 'What is something you currently own or participate in (an investment, an object, a role) that you only hold onto because losing it feels too painful to face?',

  interactiveScenario: {
    id: 'interactive_loss_01',
    topicId: 'loss_aversion',
    scenarioTitle: 'The Cryptocurrency Dilemma',
    scenarioDescription: 'You bought ₹50,000 of a speculative cryptocurrency. It dropped to ₹15,000. Independent analysts confirm the founder has abandoned the project and there is zero development activity.',
    vignetteSourceType: 'personal_finance',
    options: [
      {
        id: 'opt_1',
        text: 'Hold it indefinitely because "I haven\'t actually lost money until I sell, and it might miraculously pump back to ₹50,000."',
        isCorrect: false,
        cognitiveTakeaway: 'Classic loss aversion trap! You risk the remaining ₹15,000 to avoid facing the reality of a dead investment.',
      },
      {
        id: 'opt_2',
        text: 'Sell the remaining ₹15,000 immediately, take the tax-loss harvest, and reallocate the capital into a productive asset.',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of Prospect Theory! You overcome loss aversion, stop emotional bleeding, and optimize capital for future growth.',
      },
      {
        id: 'opt_3',
        text: 'Borrow another ₹50,000 to "double down" at the bottom to bring your average purchase price down.',
        isCorrect: false,
        cognitiveTakeaway: 'Catastrophic risk-seeking in the loss domain! Escalating into an abandoned scam multiplies financial devastation.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_loss_01',
      questionType: 'multiple_choice',
      prompt: 'According to Kahneman & Tversky\'s Prospect Theory, what is the approximate psychological ratio between the pain of a loss and the pleasure of an equivalent gain?',
      options: [
        { id: 'opt_a', text: '1:1 (losses and gains feel exactly equal)', isCorrect: false },
        { id: 'opt_b', text: 'Approximately 2:1 to 2.5:1 (losses feel twice as painful as gains feel pleasurable)', isCorrect: true, feedbackText: 'Correct! Human beings require an upside of roughly ₹2,000 to willingly accept a 50% risk of losing ₹1,000.' },
        { id: 'opt_c', text: '10:1 (gains are ten times more powerful than losses)', isCorrect: false },
      ],
      cognitiveTakeaway: 'Loss aversion is a fundamental 2:1 neurological asymmetry in human decision architecture.',
    },
  ],

  references: [
    {
      citation: 'Kahneman, D., & Tversky, A. (1979). Prospect theory: An analysis of decision under risk. Econometrica, 47(2), 263–291.',
      doiOrUrl: 'https://doi.org/10.2307/1914185',
      relevance: 'The foundational Nobel Prize-winning paper introducing loss aversion and the asymmetric value function.',
      displayOrder: 1,
    },
    {
      citation: 'Kahneman, D., Knetsch, J. L., & Thaler, R. H. (1990). Experimental tests of the endowment effect and the Coase theorem. Journal of Political Economy, 98(6), 1325–1348.',
      doiOrUrl: 'https://doi.org/10.1086/261737',
      relevance: 'The famous coffee mug experiment demonstrating how loss aversion powers the endowment effect.',
      displayOrder: 2,
    },
  ],

  tags: ['Decision Making', 'Loss Aversion', 'Prospect Theory', 'Kahneman', 'Endowment Effect', 'Behavioral Economics'],
  relatedTopics: [
    { topicId: 'sunk_cost_fallacy', slug: 'sunk-cost-fallacy', title: 'Sunk Cost Fallacy', relationshipType: 'amplified_by' },
    { topicId: 'anchoring_effect', slug: 'anchoring-effect', title: 'Anchoring Effect', relationshipType: 'general_related' },
  ],
  seoTitle: 'Loss Aversion: Why the Pain of Loss Dwarfs the Joy of Gain | Mentalab Mind',
  seoDescription: 'Master Loss Aversion and Prospect Theory by Kahneman & Tversky. Learn why losses hurt 2x more than gains and how to eliminate fear-based decision traps.',
  canonicalUrl: '/mind/decision-making/loss-aversion',
  ogImageUrl: '/images/mind/loss-aversion.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Loss aversion operates through the asymmetric slope of the prospect theory value function mediated by insular and amygdaloid distress pathways.',
};

export const TOPIC_LOSS_AVERSION_HINGLISH: MindTopicDetail = {
  ...TOPIC_LOSS_AVERSION_EN,
  title: 'Loss Aversion: Nuksaan Ka Darr Munafay Ki Khushi Se 2 Guna Bada Kyun Hota Hai?',
  subtitle: 'Kahneman & Tversky ki Prospect Theory: Log loss accept karne se bachne ke liye aur bade gambles kyu lete hain?',
  shortDescription: 'Ek aisi cognitive bias jisme kisi cheez ko khone ka dukh, uske barabar cheez paane ki khushi se 2 se 2.5 guna zyada gehra hota hai.',
  oneLineExplanation: 'Simple shabdon me: ₹500 gir jaane ka dukh, sadak par ₹500 milne ki khushi se bohot zyada hota hai.',

  summary30s: 'Agar koi aapse kahe ki coin uchhalte hain: Heads aaya toh ₹1,000 aapke, Tails aaya toh ₹1,000 mere. Yeh 50/50 fair game hai, lekin 90% log mana kar dete hain kyunki ₹1,000 khone ka darr ₹1,000 jeetne ki khushi se 2 guna bada hota hai. Daniel Kahneman aur Amos Tversky ne prove kiya ki humara dimaag neutral calculator nahi hai; nuksaan ka darr humse bohot bekaar aur risky decisions karwata hai.',
  coreConcept: 'Prospect Theory (1979) batati hai ki humans gains ke time par safe khelte hain (risk averse), lekin jab nuksaan ho raha hota hai toh nuksaan chupane ke liye pagalpan ki hadd tak risk lene lagte hain (risk seeking). Log girte huye shares ko sirf isliye nahi bechte kyunki "Jab tak becha nahi, tab tak loss kaisa?"',
  summary60s: 'Endowment Effect bhi isi se nikalta hai: jaise hi koi cheez hamari hoti hai (purani car, purana sofa, company ke shares), humari dimaagi nazron me uski value double ho jaati hai. 100-Day Free Trial wali companies isi psychology par chalti hain—ek baar product ghar aa jaye toh use wapas karna ek "nuksaan" jaisa lagta hai.',

  quickTakeaways: [
    '2:1 ka Asymmetry Rule: ₹1,000 ke loss ke dard ko mitane ke liye kam se kam ₹2,000 ka profit chahiye hota hai',
    'Loss chupane ke liye andha risk: Doobte huye paise ko wapas laane ke chakkar me log double nuksaan karwa lete hain',
    'Endowment Effect: Apni cheez ko bina kisi logic ke doosro se zyada keemti samajhna',
    'Neutral Frame Test: "Agar aaj mere paas yeh cheez ya share na hota, toh kya main cash dekar ise khareedta?"',
  ],

  whyItHappens: 'Brain scans me dekha gaya hai ki financial loss dimaag ke insula aur amygdala ko activate karta hai—wahi hissa jo physical pain aur ulti aane par active hota hai.',
  evolutionaryMechanism: 'Aadimanav ke liye thoda zyada khana milna theek tha, lekin thoda sa bhi khana chhin jana mout ka paigam tha.',

  howItWorks: 'Rajesh ne ₹100 ka share khareeda jo gir kar ₹35 ho gaya. Usne advice par bhi nahi becha: "Jab tak ₹100 wapas nahi aayega, nahi bechunga." Aakhir me company band ho gayi aur ₹35 bhi zero ho gaye.',
  howToRespond: 'Pre-committed Stop-Loss lagaiye. Investment karte waqt hi likh lijiye: "Agar 15% drop hua toh main bina emotion ke exit kar dunga."',

  reflectionPrompt: 'Kya aapke paas koi aisi cheez ya share hai jise aap sirf isliye nahi bech rahe kyunki aapko loss accept karte huye bura lag raha hai?',
  seoTitle: 'Loss Aversion Kya Hai? Prospect Theory & Financial Psychology | Mentalab Mind',
  seoDescription: 'Janiye kyu nuksaan ka darr humse galat decisions karwata hai. Kahneman aur Tversky ki Prospect Theory aur loss aversion ko master karne ke tareeqe.',
  canonicalUrl: '/mind/decision-making/loss-aversion',
};

function createLocalizedLossRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_LOSS_AVERSION_EN,
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

export const TOPIC_LOSS_AVERSION: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_LOSS_AVERSION_EN,
  hinglish: TOPIC_LOSS_AVERSION_HINGLISH,
  hi: createLocalizedLossRecord(
    'hi',
    'हानि से विमुखता (Loss Aversion): नुकसान का दर्द लाभ के सुख से दोगुना क्यों होता है?',
    'काहनेमैन और टवर्सकी का प्रॉस्पेक्ट थ्योरी: नुकसान स्वीकार करने से बचने के लिए लोग बड़ा जोखिम क्यों लेते हैं।',
    'सरल शब्दों में: किसी वस्तु को खोने का दुख, उतनी ही वस्तु पाने के सुख से दोगुना भारी होता है।',
    'हानि से विमुखता तब होती है जब लोग समान मूल्य के लाभ की तुलना में नुकसान से बचने को अत्यधिक प्राथमिकता देते हैं।',
    'काहनेमैन (1979) के अनुसार, मानव मस्तिष्क 2:1 के अनुपात में नुकसान को अधिक महसूस करता है, जिससे शेयर बाजार और जीवन में गलत फैसले होते हैं।',
    [
      '2:1 का अनुपात: नुकसान का मनोवैज्ञानिक दर्द लाभ की तुलना में दोगुना होता है',
      'नुकसान से बचने का जोखिम: घाटा छुपाने के चक्कर में लोग और बड़ा जुआ खेलते हैं',
      'स्वामित्व का प्रभाव: अपनी वस्तु को अस्वाभाविक रूप से अधिक मूल्यवान समझना',
      'तटस्थ दृष्टिकोण: यदि आज यह वस्तु आपके पास न होती, तो क्या आप इसे खरीदते?',
    ]
  ),
  gu: createLocalizedLossRecord(
    'gu',
    'લોસ એવર્ઝન: નુકસાનનું દુઃખ નફાના આનંદ કરતાં બમણું કેમ હોય છે?',
    'કાહનેમેન અને ટ્વર્સ્કીની પ્રોસ્પેક્ટ થિયરી: નુકસાનથી બચવા માટે લોકો મોટો જુગાર કેમ રમે છે.',
    'સરળ શબ્દોમાં: કોઈ વસ્તુ ગુમાવવાનું દુઃખ તેટલી જ વસ્તુ મેળવવાના આનંદ કરતાં બમણું હોય છે.',
    'નુકસાન ટાળવાની માનસિકતા ઘણીવાર અયોગ્ય આર્થિક નિર્ણયો તરફ દોરી જાય છે.',
    'વાસ્તવિકતા સ્વીકારીને સમયસર ખોટ સ્વીકારી લેવી એ જ સાચી સમજદારી છે.',
    ['નુકસાનનો ડર ઓળખો', 'ખોટો મોહ ટાળો', 'તાર્કિક બનો']
  ),
  mr: createLocalizedLossRecord(
    'mr',
    'लॉस अव्हर्जन: नुकसानीचे दुःख फायद्याच्या आनंदापेक्षा दुप्पट का असते?',
    'प्रॉस्पेक्ट थिअरी: नुकसान टाळण्यासाठी लोक आणखी मोठा धोका का पत्करतात.',
    'सोप्या भाषेत: एखादी गोष्ट गमावण्याचे दुःख तितकीच गोष्ट मिळवण्याच्या आनंदापेक्षा दुप्पट तीव्र असते.',
    'नुकसानीच्या भीतीने लोक अनेकदा पडत्या समभागांना धरून ठेवतात आणि मोठे नुकसान ओढवून घेतात.',
    'वेळेवर तोटा मान्य करून योग्य ठिकाणी गुंतवणूक करणे हाच शहाणपणा आहे.',
    ['तोत्याची भीती टाळा', 'वस्तुनिष्ठ विचार करा', 'भावनिक गुंतवणूक नको']
  ),
  bn: createLocalizedLossRecord(
    'bn',
    'লস অ্যাভার্সন: ক্ষতির কষ্ট লাভের আনন্দের চেয়ে দ্বিগুণ কেন?',
    'কাহনেম্যান ও টারস্কির প্রসপেক্ট থিওরি: ক্ষতি এড়াতে মানুষ কেন আরও বড় ঝুঁকি নেয়।',
    'সহজ কথায়: কোনো কিছু হারানোর কষ্ট একই মূল্যের কিছু পাওয়ার আনন্দের চেয়ে দ্বিগুণ গভীর।',
    'ক্ষতিগ্রস্ত সম্পত্তি আঁকড়ে থাকার পেছনে কাজ করে এই মনস্তাত্ত্বিক ভ্রান্তি।',
    'সময় থাকতে ক্ষতি মেনে নিয়ে নতুন সুযোগ গ্রহণ করাই বুদ্ধিমানের কাজ।',
    ['ক্ষতির ভয় দূর করুন', 'বাস্তববাদী সিদ্ধান্ত নিন', 'অন্ধ বিশ্বাস ত্যাগ করুন']
  ),
  ta: createLocalizedLossRecord(
    'ta',
    'இழப்பு தவிர்ப்பு: இழப்பின் வலி லாபத்தின் மகிழ்ச்சியை விட இருமடங்காக இருப்பது ஏன்?',
    'கஹ்னேமன் & ட்வெர்ஸ்கி பிராஸ்பெக்ட் கோட்பாடு: இழப்பை ஏற்காமல் மக்கள் தவறான முடிவெடுப்பது ஏன்.',
    'எளிய சொற்களில்: ஒரு பொருளை இழக்கும் வேதனை, அதே அளவு பொருளைப் பெறுவதன் மகிழ்ச்சியை விட இரண்டு மடங்கு அதிகமாக இருக்கும்.',
    'இழப்பைத் தவிர்ப்பதற்கான பயம் மனிதர்களை அபாயகரமான முடிவுகளை எடுக்க வைக்கிறது.',
    'யதார்த்தத்தை உணர்ந்து இழப்பை சரியான நேரத்தில் ஏற்பதே நலம்.',
    ['இழப்பு பயம் தவறு', 'தர்க்கரீதியான முடிவு', 'சரியான முதலீடு']
  ),
  te: createLocalizedLossRecord(
    'te',
    'లాస్ అవెర్షన్: నష్టపు బాధ లాభపు ఆనందం కంటే రెట్టింపుగా ఎందుకు ఉంటుంది?',
    'ప్రాస్పెక్ట్ సిద్ధాంతం: నష్టాన్ని అంగీకరించకుండా ప్రజలు మరిన్ని తప్పుడు నిర్ణయాలు తీసుకోవడం వెనుక ఉన్న రహస్యం.',
    'సులభమైన మాటల్లో: ఒక వస్తువును కోల్పోవడం వల్ల కలిగే బాధ, అంతే వస్తువును పొందినప్పుడు కలిగే ఆనందం కంటే రెండింతలు ఎక్కువగా ఉండటం.',
    'నష్ట భయం వల్ల ప్రజలు ప్రమాదకరమైన నిర్ణయాలలో చిక్కుకుంటారు.',
    'నిజాయితీగా నష్టాన్ని అంగీకరించి ముందుకు సాగడమే మేలు.',
    ['నష్ట భయాన్ని జయించండి', 'హేతుబద్ధమైన ఆలోచన', 'సరైన నిర్ణయం']
  ),
  kn: createLocalizedLossRecord(
    'kn',
    'ಲಾಸ್ ಅವರ್ಷನ್: ನಷ್ಟದ ನೋವು ಲಾಭದ ಸಂತೋಷಕ್ಕಿಂತ ದುಪ್ಪಟ್ಟಾಗಿರುವುದೇಕೆ?',
    'ಪ್ರಾಸ್ಪೆಕ್ಟ್ ಸಿದ್ಧಾಂತ: ನಷ್ಟವನ್ನು ಒಪ್ಪಿಕೊಳ್ಳದೆ ಜನರು ಇನ್ನಷ್ಟು ದೊಡ್ಡ ತಪ್ಪು ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವುದೇಕೆ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಕಳೆದುಕೊಳ್ಳುವ ನೋವು ಪಡೆಯುವ ಸಂತೋಷಕ್ಕಿಂತ ಎರಡು ಪಟ್ಟು ಹೆಚ್ಚಿರುವುದು.',
    'ನಷ್ಟದ ಭಯದಿಂದ ಜನರು ತಪ್ಪು ಹೂಡಿಕೆಗಳಲ್ಲಿ ಸಿಲುಕಿ ಮತ್ತಷ್ಟು ಹಾನಿ ಅನುಭವಿಸುತ್ತಾರೆ.',
    'ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ನಷ್ಟವನ್ನು ಒಪ್ಪಿಕೊಂಡು ಹೊಸ ದಾರಿಯನ್ನು ಹುಡುಕುವುದು ಜಾಣತನ.',
    ['ನಷ್ಟದ ಭಯ ಬೇಡ', 'ವಾಸ್ತವವನ್ನು ಒಪ್ಪಿಕೊಳ್ಳಿ', 'ಸರಿಯಾದ ಆಯ್ಕೆ']
  ),
  ml: createLocalizedLossRecord(
    'ml',
    'ലോസ് അവേർഷൻ: നഷ്ടത്തിന്റെ വേദന നേട്ടത്തിന്റെ സന്തോഷത്തേക്കാൾ ഇരട്ടിയാകുന്നത് എന്തുകൊണ്ട്?',
    'പ്രോസ്പെക്റ്റ് തിയറി: നഷ്ടം അംഗീകരിക്കാതെ ആളുകൾ കൂടുതൽ തെറ്റായ തീരുമാനങ്ങൾ എടുക്കുന്നത് എന്തുകൊണ്ട്.',
    'ലളിതമായി പറഞ്ഞാൽ: നഷ്ടപ്പെടുമ്പോഴുള്ള വേദന ലഭിക്കുമ്പോഴുള്ള സന്തോഷത്തേക്കാൾ ഇരട്ടിയായി തോന്നുന്നത്.',
    'നഷ്ടഭയം കാരണം ആളുകൾ തെറ്റായ നിക്ഷേപങ്ങളിൽ തുടർന്ന് വൻനഷ്ടം വരുത്തിവെക്കുന്നു.',
    'സമയത്തിന് നഷ്ടം സമ്മതിച്ച് പിന്മാറുന്നതാണ് ബുദ്ധിപരമായ നീക്കം.',
    ['നഷ്ടഭയം തിരിച്ചറിയുക', 'യുക്തിപൂർവ്വമായ തീരുമാനം', 'നഷ്ടം ഒഴിവാക്കുക']
  ),
  pa: createLocalizedLossRecord(
    'pa',
    'ਲਾਸ ਅਵਰਜ਼ਨ: ਨੁਕਸਾਨ ਦਾ ਦੁੱਖ ਮੁਨਾਫ਼ੇ ਦੀ ਖੁਸ਼ੀ ਨਾਲੋਂ ਦੁੱਗਣਾ ਕਿਉਂ ਹੁੰਦਾ ਹੈ?',
    'ਪ੍ਰੌਸਪੈਕਟ ਥਿਊਰੀ: ਨੁਕਸਾਨ ਮੰਨਣ ਤੋਂ ਬਚਣ ਲਈ ਲੋਕ ਹੋਰ ਵੱਡਾ ਜ਼ੋਖ਼ਮ ਕਿਉਂ ਲੈਂਦੇ ਹਨ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਕਿਸੇ ਚੀਜ਼ ਨੂੰ ਗਵਾਉਣ ਦਾ ਦਰਦ ਉਸੇ ਚੀਜ਼ ਨੂੰ ਹਾਸਲ ਕਰਨ ਦੀ ਖੁਸ਼ੀ ਨਾਲੋਂ ਦੁੱਗਣਾ ਹੁੰਦਾ ਹੈ।',
    'ਨੁਕਸਾਨ ਦੇ ਡਰੋਂ ਲੋਕ ਗਲਤ ਸੌਦਿਆਂ ਵਿੱਚ ਫਸੇ ਰਹਿੰਦੇ ਹਨ।',
    'ਸਹੀ ਸਮੇਂ ਤੇ ਘਾਟਾ ਸਵੀਕਾਰ ਕਰਕੇ ਨਵਾਂ ਰਾਹ ਚੁਣਨਾ ਹੀ ਅਕਲਮੰਦੀ ਹੈ।',
    ['ਨੁਕਸਾਨ ਦਾ ਡਰ ਤਿਆਗੋ', 'ਤਸੱਲੀਬਖ਼ਸ਼ ਫੈਸਲਾ', 'ਅੱਗੇ ਵਧੋ']
  ),
  ur: createLocalizedLossRecord(
    'ur',
    'نقصان سے گریز: نقصان کی تکلیف نفع کی خوشی سے دوگنی کیوں ہوتی ہے؟',
    'پراس Monthly تھیوری: نقصان تسلیم کرنے کے خوف سے لوگ مزید بڑے خطرات مول کیوں لیتے ہیں۔',
    'آسان الفاظ میں: کسی چیز کے کھو جانے کا غم اسی چیز کے ملنے کی خوشی سے دوگنا ہوتا ہے۔',
    'نقصان کے خوف سے لوگ گرتے ہوئے اثاثوں کو پکڑے رکھتے ہیں اور مزید برباد ہو جاتے ہیں۔',
    'حقیقت کو تسلیم کر کے وقت پر نقصان کا اعتراف کرنا ہی دانشمندی ہے۔',
    ['خوف کا خاتمہ', 'حقیقت پسندی', 'درست منصوبہ بندی']
  ),
  or: createLocalizedLossRecord(
    'or',
    'କ୍ଷତିରୁ ବିମୁଖତା (Loss Aversion): କ୍ଷତିର କଷ୍ଟ ଲାଭର ଆନନ୍ଦଠାରୁ ଦୁଇଗୁଣ କାହିଁକି ହୁଏ?',
    'ପ୍ରୋସ୍ପେକ୍ଟ ଥିଓରୀ: କ୍ଷତି ସ୍ୱୀକାର ନ କରି ଲୋକେ ଆହୁରି ବଡ଼ ବିପଦ ମୁଣ୍ଡାଇବାର ରହସ୍ୟ।',
    'ସହଜ ଭାଷାରେ: କିଛି ହରାଇବାର ଦୁଃଖ ସେତିକି ପାଇବାର ସୁଖଠାରୁ ଦୁଇଗୁଣ ଅଧିକ ହେବା।',
    'କ୍ଷତିର ଭୟରେ ଲୋକେ ଭୁଲ୍ ନିଷ୍ପତ୍ତି ନେଇ ଅଧିକ ନଷ୍ଟ ହୁଅନ୍ତି।',
    'ଠିକ୍ ସମୟରେ କ୍ଷତି ସ୍ୱୀକାର କରି ଆଗକୁ ବଢ଼ିବା ହିଁ ବୁଦ୍ଧିମାନର କାମ।',
    ['ଭୟ ତ୍ୟାଗ କରନ୍ତୁ', 'ସଠିକ୍ ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ', 'ବୁଦ୍ଧିମାନ ହୁଅନ୍ତୁ']
  ),
  as: createLocalizedLossRecord(
    'as',
    'ক্ষতিৰ পৰা বিমুখতা: ক্ষতিৰ বেদনা লাভৰ আনন্দতকৈ দুগুণ কিয় হয়?',
    'প্ৰস্পেক্ট থিয়ৰী: লোকচান মানি নলৈ মানুহে আৰু ডাঙৰ বিপদ চপাই লোৱাৰ কাৰণ।',
    'সহজ কথাত: কিবা হেৰুৱাৰ দুখ একে মূল্যৰ বস্তু পোৱাৰ আনন্দতকৈ দুগুণ হয়।',
    'লোকচানৰ ভয়ত মানুহে ভুল সিদ্ধান্তত আঁকোৰগোজ হৈ থাকে।',
    'সময় থাকোঁতে ক্ষতি স্বীকাৰ কৰি সঠিক পথ লোৱাটোৱেই জ্ঞানৰ চিন।',
    ['ভয় পৰিহাৰ কৰক', 'বাস্তৱিক সিদ্ধান্ত লওক', 'জ্ঞানৰ বিকাশ কৰক']
  ),
};
