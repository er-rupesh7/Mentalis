import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Consumer & Advertising Psychology Track
 * Topic: The Endowment Effect: Why We Overvalue What We Own
 * Category: Consumer & Advertising Psychology (consumer_advertising)
 * 
 * Academic Grounding:
 * - Thaler (1980): Toward a positive theory of consumer choice
 * - Kahneman, Knetsch & Thaler (1990): Experimental tests of the endowment effect and the Coase theorem
 * - Morewedge & Giblin (2015): Explanations of the endowment effect: An integrative review
 */

export const TOPIC_ENDOWMENT_EFFECT_EN: MindTopicDetail = {
  id: 'endowment_effect',
  categoryId: 'consumer_advertising',
  slug: 'endowment-effect',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 3,
  viewCount: 7120,
  shareCount: 580,
  bookmarkCount: 1390,
  title: 'The Endowment Effect: Why We Overvalue What We Own',
  subtitle: 'The moment an object enters our possession, our brain artificially inflates its perceived value by more than 2x.',
  shortDescription: 'The cognitive bias where individuals value things merely because they own them, demanding a much higher price to surrender an object than they would have been willing to pay to acquire it.',
  oneLineExplanation: 'My used junk is a cherished antique; your identical item is just garage trash.',

  summary30s: 'The endowment effect reveals that ownership alters neurochemistry: the moment you hold, touch, or buy an item, your self-identity fuses with it. When asked to sell it, parting with the object registers as a painful loss rather than a neutral transaction, causing people to demand more than double the price they would ever pay to buy it.',

  coreConcept: 'Formulated by Nobel laureate Richard Thaler in 1980 and proven in landmark experiments with Daniel Kahneman and Jack Knetsch in 1990, the endowment effect is a direct manifestation of loss aversion. In classic university experiments, students given a simple $5 university coffee mug refused to sell it for less than $7.12, while students without a mug were only willing to pay $2.87 to buy one. The exact same ceramic object instantly doubled in perceived value simply because it was placed in someone’s hands for three minutes.',
  summary60s: 'Marketers and retailers weaponize the endowment effect aggressively: "30-day risk-free home trial," test drives at car dealerships, and fitting rooms in clothing stores. When a dealership salesman says, "Take the new SUV home for the weekend and see how it fits in your driveway," he is not being generous; he is letting the endowment effect do the closing. Once the car is parked in your driveway and your kids play with the touchscreen, returning it feels like having your personal property stolen.',

  quickTakeaways: [
    'The 2x Valuation Gap: Owners routinely demand more than double the cash price buyers are willing to pay for the exact same item',
    'Tactile Ownership: Simply physically holding an item in a store creates "psychological ownership" before money changes hands',
    'Free Trial Trap: "30-day money-back guarantee" relies on the endowment effect: once an item enters your home, 85%+ of consumers never return it',
    'The Stranger Replacement Antidote: Ask "If I had the cash equivalent in my hand today, would I buy this item back?"',
  ],

  whyItHappens: 'Loss aversion and identity extension. Brain imaging reveals that when people view their personal belongings, the medial prefrontal cortex (the brain region responsible for the "Self") activates, indicating that our possessions become cognitive extensions of our own ego.',
  evolutionaryMechanism: 'In dangerous ancestral environments, resources held in hand were physically secure, whereas promises of future trade carried high counterparty risk. Surrendering an acquired tool or pelt was a dangerous gamble.',

  howItWorks: 'The endowment sequence: (1) Possession: Touching, holding, or taking home an item; (2) Identity Fusion: The object is incorporated into the mental representation of "Mine"; (3) Loss Aversion Trigger: Giving it up feels like a painful deficit; (4) Price Inflation: Demanding an exorbitant price or refusing to sell.',
  whereYouEncounterIt: 'Used car trade-ins, garage sales (pricing beat-up furniture at ridiculous prices), real estate home listings (sellers refusing market bids), and "free trial" subscriptions.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Buyer’s Willingness to Pay vs. Seller’s Willingness to Accept',
    description: 'Kahneman, Knetsch & Thaler’s (1990) Famous Cornell Mug Experiment.',
    analogySideA: {
      label: 'The Buyer (No Mug in Hand)',
      detail: '"It\'s just a standard ceramic mug with a college logo. I would pay at most $2.87 for it."',
    },
    analogySideB: {
      label: 'The Owner (Given Mug 5 Minutes Ago)',
      detail: '"This is MY personal mug. It is beautifully designed. I refuse to sell it for anything less than $7.12."',
    },
  },

  researchSummary: 'Kahneman, Knetsch & Thaler (1990) distributed identical university insignia mugs to half the students in a classroom and created an active trading market. Classical economic theory predicted that roughly 50% of the mugs would be traded based on genuine consumer preferences. In reality, less than 10% were traded: the sellers’ median price ($7.12) was more than double the buyers’ median price ($2.87), causing the market to freeze completely.',
  limitationsAndControversies: 'Morewedge & Giblin (2015) demonstrated that professional traders and dealers who buy items explicitly for resale (e.g., experienced eBay flippers, stock brokers, antique dealers) do not exhibit the endowment effect because they view goods as abstract store of value rather than personal possessions.',
  commonMisconceptions: 'Common myth: "People value their possessions more because of genuine sentimental memories." Reality: Daniel Kahneman showed the endowment effect occurs instantly within 30 seconds of ownership, even for arbitrary coffee mugs or pens with zero sentimental attachment.',

  howToRecognize: [
    'Refusing to sell an old car or piece of inherited furniture on OLX or Craigslist because buyers "don\'t appreciate its true worth"',
    'Signing up for a "free 30-day mattress or software trial" and ending up keeping it simply because repacking or canceling feels painful',
    'Holding onto a losing individual stock because "it’s my stock and it has to rebound to the price I bought it for"',
    'Overcrowding your closet with unworn clothes from five years ago that you refuse to donate because "they are still valuable to me"',
  ],

  scenarios: [
    {
      id: 'scen_endow_01',
      scenarioType: 'indian_context',
      title: 'The Used Car Trade-in Reality Check in Ahmedabad',
      vignette: 'Rajesh from Ahmedabad wants to buy a new electric car and brings his 8-year-old petrol hatchback to the dealership for a trade-in valuation. Rajesh spent ₹40,000 on custom leather seat covers and a sound system five years ago. When the dealership valuer runs algorithmic market pricing and offers ₹1,80,000, Rajesh is insulted and shouts: "Are you insane? This car runs like a dream, the seats are immaculate, and I cared for it like my own child. It is worth at least ₹3,50,000! You are insulting my intelligence."',
      breakdownAnalysis: 'Rajesh is gripped by the endowment effect. His personal memories, emotional attachment, and custom modifications fused with the vehicle\'s identity. The dealer sees cold, depreciated steel and a dated engine; Rajesh sees his own identity and past investments.',
      recommendedAction: 'Apply the Clean-Slate Market Cash test: "If someone offered you ₹1,80,000 in cash today, would you spend that exact ₹1,80,000 to buy an 8-year-old hatchback with 95,000 km on the odometer? If not, accept the market trade-in value."',
    },
  ],

  examples: [
    {
      id: 'ex_endow_01',
      domain: 'consumer_advertising',
      displayOrder: 1,
      title: 'The Apple Store Open-Table Design',
      description: 'Apple deliberately tilts laptop screens to 76 degrees in their stores so customers are physically forced to reach out, adjust the screen, and touch the aluminum body. Once tactile contact occurs, psychological ownership begins before purchase.',
      takeaway: 'Tactile interaction triggers premature psychological endowment.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_endow_01',
      scenarioContext: 'An enterprise software SaaS company offers a "14-day free trial" where prospective clients can import their real customer data and customize their operational dashboards. At day 14, client conversion to paid enterprise subscriptions is over 78%.',
      question: 'Why is this onboarding architecture so devastatingly effective according to behavioral economics?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Because importing real data and customizing dashboards creates powerful psychological endowment and switching pain: canceling now feels like ripping out their own operational infrastructure',
          explanation: 'Accurate: psychological ownership combined with sunk setup labor makes surrendering the product feel like a painful loss.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Because enterprise software buyers are legally bound to pay for free trials in international trade law',
          explanation: 'Free trials have zero legal obligation to purchase under commercial law.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Because 14 days is the biological cycle for human neurotransmitters to permanently reset',
          explanation: 'The mechanism is psychological ownership and loss aversion, not neurochemical resetting.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'The moment a customer customizes and populates a tool with their own data, ownership has already occurred.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Adopt the buyer\'s perspective: "If I didn\'t already own this item, how much cold cash would I actually be willing to pay to buy it today?"',
  psychologicalDefenses: [
    {
      title: 'The Stranger Cash Replacement Test',
      instruction: 'Whenever you hesitate to sell or donate an object in your home, ask: "If I didn\'t own this, and a stranger offered me this item or the cash market value, which would I pick?" If you’d pick the cash, sell it immediately.',
    },
    {
      title: 'Resist the Physical Touch Hook',
      instruction: 'In stores, avoid touching, carrying, or fondling items you have not decided to purchase. Physical contact triggers immediate neural endowment.',
    },
    {
      title: 'Treat All Subscriptions as Permanent Liabilities',
      instruction: 'Before clicking "30-day free trial," assume you will end up paying for a full year. If you wouldn\'t pay upfront for 12 months today, do not start the trial.',
    },
  ],

  reflectionPrompt: 'Have you ever refused to sell an old phone, car, or unused item because lowball offers felt like an insult to your personal attachment?',

  references: [
    {
      id: 'ref_thaler_1980',
      authors: 'Thaler, R.',
      year: 1980,
      title: 'Toward a positive theory of consumer choice',
      publicationName: 'Journal of Economic Behavior & Organization',
      volumeIssue: '1(1), 39-60',
      doi: '10.1016/0167-2681(80)90051-7',
      evidenceStrength: 'foundational_monograph',
    },
    {
      id: 'ref_kahneman_1990',
      authors: 'Kahneman, D., Knetsch, J. L., & Thaler, R. H.',
      year: 1990,
      title: 'Experimental tests of the endowment effect and the Coase theorem',
      publicationName: 'Journal of Political Economy',
      volumeIssue: '98(6), 1325-1348',
      doi: '10.1086/261737',
      evidenceStrength: 'landmark_paper',
    },
  ],

  relatedTopics: [
    {
      topicId: 'loss_aversion',
      slug: 'loss-aversion',
      title: 'Loss Aversion',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'status_quo_bias',
      slug: 'status-quo-bias',
      title: 'Status Quo Bias',
      relationshipType: 'amplified_by',
    },
  ],
};

export const TOPIC_ENDOWMENT_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_ENDOWMENT_EFFECT_EN,
  hinglish: {
    ...TOPIC_ENDOWMENT_EFFECT_EN,
    title: 'The Endowment Effect: Apni Cheez Ko Sona Samajhne Ka Dhokha',
    subtitle: 'Jaise hi koi cheez hamari ho jati hai, hum uski qeemat ko achanak 2 guna bada maan lete hain.',
    shortDescription: 'Ek aisa cognitive bias jisme log kisi cheez ko bechne ke liye bohot zyada paise maangte hain, jabki wahi cheez khareedne ke liye wo aadhe paise bhi na dein.',
    oneLineExplanation: 'Mera purana kabaad ek anmol khazana hai; tumhari wahi cheez raddi hai.',
    summary30s: 'Richard Thaler aur Daniel Kahneman ne 1990 ke famous Cornell Mug experiment me prove kiya: jin students ko $5 ka coffee mug muft diya gaya, unhone use $7 se kam me bechne se mana kar diya. Lekin jinke paas mug nahi tha, wo use $3 me bhi khareedne ko tayar nahi the. Cheez haath me aate hi dimaag use apne astitva ka hissa maan leta hai.',
  },
  hi: {
    ...TOPIC_ENDOWMENT_EFFECT_EN,
    title: 'The Endowment Effect (स्वामित्व प्रभाव)',
    subtitle: 'किसी वस्तु पर अधिकार होते ही उसके कथित मूल्य में होने वाली अतार्किक वृद्धि।',
    shortDescription: 'केवल स्वामित्व के कारण किसी वस्तु को अधिक मूल्यवान आंकने का संज्ञानात्मक पूर्वाग्रह, जहां विक्रेता उस वस्तु के लिए क्रेता की तुलना में दोगुने से अधिक मूल्य की मांग करता है।',
    oneLineExplanation: 'अपनी साधारण वस्तु को अनमोल समझना और दूसरों की समान वस्तु को तुच्छ मानना।',
    summary30s: 'स्वामित्व प्रभाव (Endowment Effect) यह दर्शाता है कि किसी वस्तु के हमारे पास आते ही हमारा आत्म-बोध (Self-identity) उससे जुड़ जाता है। 1990 के कॉर्नेल विश्वविद्यालय के प्रयोग में सिद्ध हुआ कि केवल 5 मिनट के लिए एक मग हाथ में दिए जाने पर भी छात्रों ने उसे बेचने के लिए बाजार मूल्य से दोगुने से अधिक कीमत की मांग की।',
  },
  gu: TOPIC_ENDOWMENT_EFFECT_EN,
  mr: TOPIC_ENDOWMENT_EFFECT_EN,
  te: TOPIC_ENDOWMENT_EFFECT_EN,
  ta: TOPIC_ENDOWMENT_EFFECT_EN,
  kn: TOPIC_ENDOWMENT_EFFECT_EN,
  ml: TOPIC_ENDOWMENT_EFFECT_EN,
  bn: TOPIC_ENDOWMENT_EFFECT_EN,
  pa: TOPIC_ENDOWMENT_EFFECT_EN,
  ur: TOPIC_ENDOWMENT_EFFECT_EN,
  or: TOPIC_ENDOWMENT_EFFECT_EN,
  as: TOPIC_ENDOWMENT_EFFECT_EN,
  };
