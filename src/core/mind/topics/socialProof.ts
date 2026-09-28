import { MindTopicDetail, MindLanguageCode } from '../types';


function createUniversalLocalizedRecord(
  base: MindTopicDetail,
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...base,
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

export const TOPIC_SOCIAL_PROOF_EN: MindTopicDetail = {
    // English record definition

    id: 'social_proof',
    categoryId: 'social_psychology',
    slug: 'social-proof-and-bandwagon',
    difficulty: 'beginner',
    estimatedReadingMinutes: 4,
    scientificConsensusTier: 'established',
    sortWeight: 4,
    viewCount: 2890,
    shareCount: 198,
    bookmarkCount: 412,
    title: 'Social Proof & The Bandwagon Effect',
    subtitle: 'Why we look to others to decide what is correct',
    shortDescription: 'A psychological phenomenon where people mirror the actions and beliefs of others in an attempt to reflect correct behavior for a given situation.',
    oneLineExplanation: 'Assuming that if many people are doing something, it must be the right choice.',

    summary30s: 'When you are uncertain, you look around and copy the crowd. We unconsciously assume that if many people are doing something, they must know something we don\'t.',
    // 1. What is it?
    coreConcept: 'Social proof is a cognitive shortcut where we view a behavior as more correct in a given situation to the degree that we see others performing it. It becomes exceptionally potent under two conditions: uncertainty and perceived similarity.',
    summary60s: 'Imagine you arrive in a new city and see two adjacent restaurants: one is packed with people waiting outside, while the other is completely empty. Without inspecting the kitchen, your brain instantly concludes that the crowded restaurant serves delicious food. We outsource our risk assessment to the crowd.',
    quickTakeaways: [
      'We use the crowd as a proxy for truth, especially when we feel uncertain or uninformed',
      'The effect multiplies when we perceive the crowd to be similar to ourselves',
      'It can cause collective blindness: a crowd can walk in the wrong direction together',
    ],

    // 2. Why does it happen?
    whyItHappens: 'Information costs and risk minimization. Gathering complete data on every decision is cognitively impossible. Imitating the group provides a cheap, statistically decent guess in most everyday environments.',
    evolutionaryMechanism: 'In early hominid history, if the rest of your tribe suddenly sprinted away, stopping to analyze why meant getting eaten by a predator. Surviving meant running first and asking questions later.',

    // 3. How does it work?
    howItWorks: 'It works via pluralistic reinforcement: Person A is uncertain so looks at Person B; Person B is also uncertain but glances at Person C; Person C sees A and B looking and assumes they know what they are doing. Everyone conforms to an illusion of certainty.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'Independent Verification vs. Crowd Mirroring',
      description: 'The difference between checking empirical facts and relying on crowd momentum.',
      analogySideA: { label: 'Empirical Verification', detail: 'Reading ingredient labels, checking verified safety metrics, testing independently.' },
      analogySideB: { label: 'Social Proof Mirroring', detail: 'Buying a stock or gadget simply because it is trending on Twitter and friends bought it.' },
    },

    // 4. What does research say?
    researchSummary: 'Formally established in social psychology by Robert Cialdini (Influence, 1984), building on classic conformity studies by Muzafer Sherif (1936) and Solomon Asch (1951). Cialdini demonstrated that hotel guests reuse towels 26% more when told "75% of guests in this room reuse their towels".',
    limitationsAndControversies: 'Replication studies show social proof weakens dramatically when an individual has deep domain expertise or when an action carries immediate, irreversible personal liability (such as medical surgery choices).',

    // 5. What does it look like in real life?
    examples: [
      {
        id: 'sp_ex_01',
        domain: 'consumer_advertising',
        displayOrder: 1,
        title: 'Bestseller Badges & Tip Jars',
        description: 'Baristas seed a tip jar with a few 50-rupee notes at the start of a shift so customers assume everyone else tipped generously.',
        takeaway: 'Seeded social proof establishes an artificial behavioral norm.',
      },
    ],
    scenarios: [
      {
        id: 'sp_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'The Overcrowded Diwali Mithai Shop',
        narrativeContext: 'On Diwali evening, Vikas sees a massive line of 40 people spilling onto the road outside sweet shop A, while sweet shop B next door has zero wait. Vikas stands in line for 45 minutes at shop A, convinced their kaju katli must be superior.',
        biasInAction: 'Vikas ignored the fact that shop A simply had slower billing and a smaller counter. In reality, both shops sourced from the exact same wholesale distributor, but the visible queue acted as an irresistible social magnet.',
        optimalResponse: 'Pause and ask: "Is the crowd here because the quality is demonstrably superior, or simply because other people saw a crowd and joined it like I did?"',
        reflectionPrompt: 'Can you remember joining a trend, buying a course, or downloading an app solely because "everyone in my college was doing it"?',
      },
    ],

    // 6. How can I recognize it?
    howToRecognize: 'Notice when your primary reason for taking an action or accepting a belief is: "Well, so many people can\'t all be wrong." That exact phrase is the signature red flag of unexamined social proof.',
    whereYouEncounterIt: 'App store ratings, viral stock rallies, crypto frenzies, standing ovations, political rallies.',

    // 7. What misconceptions exist?
    commonMisconceptions: 'Common myth: "Social proof is always a manipulative trick." Reality: In 90% of non-adversarial situations, following the group (like driving on the correct side of the road or choosing a busy street at night) is a rational safety heuristic.',

    // 8. What should I do about it?
    howToRespond: 'Disconnect from the crowd current. Whenever you feel the urge to follow a popular craze, demand one piece of objective, empirical evidence that does not rely on popularity.',
    psychologicalDefenses: [
      { title: 'The Crowd Disconnect Test', instruction: 'Ask: "If nobody else was doing this and no one would ever know, would I still find this valuable on its own merits?"' },
      { title: 'Audit the Source of Momentum', instruction: 'Check if the crowd was manufactured (e.g., bot retweets, paid influencers, or artificial scarcity).' },
      { title: 'Deliberate Contrarian Pause', instruction: 'When everyone is rushing in one direction, step aside for 24 hours before committing resources.' },
    ],

    // Educational Visual System Component Data
    visualContent: {
      id: 'vis_social_proof',
      type: 'flowchart',
      title: 'The Social Proof Feedback Loop',
      altText: 'A cognitive flowchart detailing how uncertainty triggers observational scanning, leading to pluralistic mimicry and collective bias.',
      caption: 'Figure 1: How individual uncertainty multiplies through crowd observation into a collective illusion of consensus.',
      credits: {
        sourceName: 'Cialdini (1984) Influence / Mentalab Cognitive Architecture',
        authorOrAttribution: 'Robert Cialdini & Solomon Asch experimental synthesis',
        sourceUrl: 'https://en.wikipedia.org/wiki/Social_proof',
        license: 'Educational Open Science',
      },
      priorityLoading: true,
      flowchartSteps: [
        {
          stepNumber: 1,
          title: 'Uncertainty / Ambiguity',
          description: 'You enter a novel situation with incomplete information or high cognitive load.',
          decisionQuestion: 'Do I have enough empirical data to decide independently?',
        },
        {
          stepNumber: 2,
          title: 'Peripheral Social Scan',
          description: 'Your brain looks around at peers, customer reviews, or crowds to infer correct behavior.',
          cautionNotice: 'You unconsciously assume others possess private knowledge you lack.',
          decisionQuestion: 'Are others acting on knowledge, or are they also looking around?',
        },
        {
          stepNumber: 3,
          title: 'Pluralistic Conformance',
          description: 'You adopt the observed behavior, which in turn acts as social proof for the next observer.',
          cautionNotice: 'A feedback loop forms where an entire crowd walks off a cliff together.',
        },
      ],
      comparisonData: {
        sideA: {
          title: 'Empirical Verification',
          badge: 'Rational Grounding',
          points: [
            'Inspects ingredient labels, peer-reviewed tests, and return policies',
            'Evaluates utility based on personal needs and intrinsic value',
            'Immune to manufactured hype and bot follower counts',
          ],
          isOptimal: true,
        },
        sideB: {
          title: 'Social Proof Mirroring',
          badge: 'Heuristic Shortcut',
          points: [
            'Buys because an influencer or Telegram group claims it is viral',
            'Substitutes popularity metrics for safety or quality audits',
            'Vulnerable to speculative bubbles and staged retail queues',
          ],
          isOptimal: false,
        },
      },
      infographicMetrics: [
        {
          value: '26%',
          label: 'Towel Reuse Increase',
          context: 'Cialdini hotel study showing visitors conformed to social norm signage.',
        },
        {
          value: '74%',
          label: 'Conformity Rate',
          context: 'Classic Solomon Asch line test where participants gave obvious wrong answers to match the group.',
        },
        {
          value: '3.8x',
          label: 'Conversion Boost',
          context: 'E-commerce conversion increase when displaying live recent purchase notifications.',
        },
      ],
    },

    // Interactive Scenario System Data
    interactiveScenarios: [
      {
        id: 'scen_social_proof_95',
        topicId: 'social_proof',
        title: 'The Viral 95% Social Media Ad',
        contextVignette: "You see a social-media post claiming that a product is 'used by 95% of successful people.'",
        vignetteSourceType: 'social_media',
        question: 'What should you be cautious about?',
        options: [
          {
            id: 'sp_opt_a',
            label: 'A',
            text: 'Social proof',
            isCorrect: false,
            explanation:
              'Social proof is definitely in play because the post uses a crowd metric, but evidence quality is equally flawed here.',
          },
          {
            id: 'sp_opt_b',
            label: 'B',
            text: 'Evidence quality',
            isCorrect: false,
            explanation:
              'Evidence quality is undeniably weak (how is "successful" defined?), but the message specifically operates as social proof as well.',
          },
          {
            id: 'sp_opt_c',
            label: 'C',
            text: 'Both',
            isCorrect: true,
            explanation:
              'Correct. This example uses social proof because the popularity claim is being used as evidence that the product is valuable, combined with dubious, self-selected evidence quality.',
          },
          {
            id: 'sp_opt_d',
            label: 'D',
            text: 'Neither',
            isCorrect: false,
            explanation:
              'Not quite. Scarcity would involve limited availability. Here the message is using popularity as evidence, which is closer to social proof, coupled with suspect evidence quality.',
          },
        ],
        revealedExplanation: {
          correctSummary:
            'This example uses social proof because the popularity claim is being used as evidence that the product is valuable, while the underlying evidence quality is unsubstantiated.',
          whyItMatters:
            'Marketing campaigns routinely merge social proof with ambiguous statistics ("95% of successful people") to bypass critical scrutiny.',
          cognitiveTrap:
            'Assuming that claiming a high percentage is equivalent to providing verifiable clinical or performance evidence.',
          actionableAntidote:
            'Demand the denominator and source: "Who was polled, how was success measured, and does popularity correlate with efficacy?"',
        },
        difficulty: 'medium',
      },
    ],

    // 9. Can I test whether I understood it?
    practiceQuestions: [
      {
        id: 'sp_q_01',
        difficulty: 'easy',
        questionType: 'multiple_choice',
        questionFormat: 'identify_bias',
        displayOrder: 1,
        prompt: 'Which scenario demonstrates a dangerous reliance on Social Proof?',
        scenarioText: 'Evaluating investment decisions during a speculative market boom.',
        explanation: 'Correct. Buying an asset purely because others are excitedly buying it without reviewing financials is the quintessential social proof trap that inflates speculative bubbles.',
        antidoteAdvice: 'Never substitute popularity for independent balance sheet analysis.',
        options: [
          {
            id: 'sp_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Inspecting a company\'s annual revenue growth and debt ratios before buying.',
            feedbackText: 'Incorrect. This is objective fundamental research.',
          },
          {
            id: 'sp_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Investing your savings into a meme-coin because all your college friends and Telegram groups are bragging about it.',
            feedbackText: 'Correct. This example uses social proof because crowd popularity is being treated as proof of investment value.',
          },
          {
            id: 'sp_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Deciding to keep your savings in a fixed deposit because interest rates match your risk profile.',
            feedbackText: 'Incorrect. This is a disciplined, individual financial choice.',
          },
        ],
      },
      {
        id: 'sp_q_02',
        difficulty: 'medium',
        questionType: 'true_false',
        displayOrder: 2,
        isMisconception: true,
        misconceptionNuance: 'Social proof is an adaptive evolutionary heuristic, not solely an adversarial manipulation.',
        prompt: 'Does every instance of following the crowd mean you are falling victim to a manipulative psychological trick?',
        scenarioText: 'Choosing which side of the road to drive on, or following the crowd toward the stadium exit.',
        isTrueStatement: false,
        explanation: 'No. Context matters. In 90% of everyday non-adversarial environments, following the group (like evacuating an exit or following traffic flow) is an efficient, life-saving evolutionary heuristic. It only becomes a cognitive vulnerability when adversarial actors stage fake consensus.',
        antidoteAdvice: 'Distinguish benign navigational consensus from commercial or ideological persuasion.',
        options: [],
      },
      {
        id: 'sp_q_03',
        difficulty: 'medium',
        questionType: 'matching',
        displayOrder: 3,
        prompt: 'Match each real-world social proof cue to its underlying psychological mechanism:',
        explanation: 'Correct matching connects surface marketing tactics to evolutionary cognitive shortcuts.',
        antidoteAdvice: 'Recognize the specific lever being pulled to counteract it.',
        options: [],
        matchingPairs: [
          {
            id: 'pair_1',
            left: 'Seeded tip jars with high-denomination notes',
            right: 'Artificial behavioral norm establishment',
            explanation: 'Creates a false precedent of high generosity.',
          },
          {
            id: 'pair_2',
            left: '"Only 3 hotel rooms left at this price"',
            right: 'Synthetic competition & urgency amplification',
            explanation: 'Combines scarcity with social proof pressure.',
          },
          {
            id: 'pair_3',
            left: '"Used by 50,000+ engineers like you"',
            right: 'In-group perceived similarity leverage',
            explanation: 'Multiplies persuasion by targeting peer identity.',
          },
        ],
      },
      {
        id: 'sp_q_04',
        difficulty: 'hard',
        questionType: 'ordering',
        displayOrder: 4,
        prompt: 'Order the chronological stages of a Pluralistic Ignorance breakdown in an emergency:',
        explanation: 'Correct. In emergencies, bystanders look at each other for cues. Seeing others calm, each concludes nothing is wrong, leading to collective paralysis.',
        antidoteAdvice: 'Single out an individual: "You in the blue shirt, call an ambulance!"',
        options: [],
        orderingItems: [
          {
            id: 'ord_1',
            text: 'An ambiguous incident occurs (e.g., someone slumps on a bench).',
            correctOrder: 1,
          },
          {
            id: 'ord_2',
            text: 'Bystander A feels uncertain and looks at nearby bystanders for guidance.',
            correctOrder: 2,
          },
          {
            id: 'ord_3',
            text: 'Nearby bystanders maintain an outwardly calm facial expression to avoid embarrassment.',
            correctOrder: 3,
          },
          {
            id: 'ord_4',
            text: 'Bystander A misinterprets their calm expressions as proof that no emergency exists.',
            correctOrder: 4,
          },
        ],
      },
      {
        id: 'sp_q_05',
        difficulty: 'easy',
        questionType: 'reflection',
        displayOrder: 5,
        prompt: 'When was the last time you bought an item or joined an app primarily because "everyone else was using it"?',
        explanation: 'Introspection helps identify the specific moments we outsource our decision-making to the crowd.',
        options: [],
        reflectionTips: [
          'Did you independently evaluate the product specifications before purchasing?',
          'Did the crowd make you feel safe from making a bad choice?',
          'Would you still value that item if you were the only person on earth using it?',
        ],
        sampleInsight: 'Recognizing that the feeling of "safety in numbers" is often an illusion allows you to pause and conduct independent verification before committing money, time, or trust.',
      },
    ],

    reflectionPrompt: 'Think of one popular product or trend you recently participated in. Did you choose it because you independently researched it, or because you saw others doing it?',
    sections: [],
    references: [
      {
        id: 'sp_ref_01',
        title: 'Influence: The Psychology of Persuasion',
        citation: 'Cialdini, R. B. (1984). Influence: The Psychology of Persuasion. William Morrow.',
        authors: 'Robert B. Cialdini',
        publicationYear: 1984,
        journalOrPublisher: 'William Morrow',
        sourceType: 'academic_textbook',
        evidenceStrength: 'foundational_book',
        doiOrUrl: 'https://www.harpercollins.com/products/influence-new-and-expanded-robert-b-cialdini',
        relevance: 'Foundational framework classifying social proof as one of the six universal principles of human persuasion.',
        displayOrder: 1,
      },
      {
        id: 'sp_ref_02',
        title: 'Effects of group pressure upon the modification and distortion of judgments',
        citation: 'Asch, S. E. (1951). Effects of group pressure upon the modification and distortion of judgments. Groups, Leadership, and Men, 222–236.',
        authors: 'Solomon E. Asch',
        publicationYear: 1951,
        journalOrPublisher: 'Carnegie Press',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'empirical_study',
        doiOrUrl: 'https://psycnet.apa.org/record/1952-04332-001',
        relevance: 'Classic experimental proof showing that 75% of participants conformed to obviously incorrect line-length estimates under group pressure.',
        displayOrder: 2,
      },
      {
        id: 'sp_ref_03',
        title: 'Culture and conformity: A meta-analysis of studies using Asch\'s line judgment task',
        citation: 'Bond, R., & Smith, P. B. (1996). Culture and conformity: A meta-analysis of studies using Asch\'s line judgment task. Psychological Bulletin, 119(1), 111–137.',
        authors: 'Rod Bond, Peter B. Smith',
        publicationYear: 1996,
        journalOrPublisher: 'Psychological Bulletin',
        sourceType: 'meta_analysis',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        doiOrUrl: 'https://doi.org/10.1037/0033-2909.119.1.111',
        relevance: 'Meta-analysis of 133 conformity studies across 17 countries showing conformity rates are higher in collectivist cultures.',
        displayOrder: 3,
      },
    ],
    tags: ['Social Psychology', 'Social Proof', 'Critical Thinking'],
    relatedTopics: [
      {
        topicId: 'confirmation_bias',
        slug: 'confirmation-bias',
        title: 'Confirmation Bias',
        relationshipType: 'amplified_by',
      },
    ],
    seoTitle: 'What is Social Proof? Science of Conformity & Independent Thinking | Mentalab Mind',
    seoDescription: 'Understand how social proof shapes behavior, why crowds create illusions of truth, and how to make independent decisions.',
    canonicalUrl: '/mind/social-psychology/social-proof-and-bandwagon',
    ogImageUrl: '/images/mind/social-proof.png',
    publishedAt: '2026-09-12T00:00:00Z',
    deepExplanation: 'Social proof is a potent psychological mechanism driven by social information foraging and fear of ostracization.',
};

export const TOPIC_SOCIAL_PROOF: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SOCIAL_PROOF_EN,
  hinglish: {
    id: 'social_proof',
    categoryId: 'social_psychology',
    slug: 'social-proof-and-bandwagon',
    difficulty: 'beginner',
    estimatedReadingMinutes: 4,
    scientificConsensusTier: 'established',
    sortWeight: 4,
    viewCount: 2890,
    shareCount: 198,
    bookmarkCount: 412,
    title: 'Social Proof & Bheed Ka Asar',
    subtitle: 'Jab doubt ho to hum bheed ko kyu follow karte hain',
    shortDescription: 'Ek aisi psychological tendency jisme log faisla lene ke liye doosron ke actions aur choices ki copy karte hain.',
    oneLineExplanation: 'Yeh maan lena ki agar hazaron log kar rahe hain, to sahi hi hoga.',

    summary30s: 'Jab hum confused hote hain, to hum bheed ki nakal karne lagte hain. Hum bina soche maan lete hain ki agar itne saare log kar rahe hain to sahi hi hoga.',
    coreConcept: 'Social proof ka matlab hai ki jab hume kisi situation me samajh nahi aata ki kya karein, to hum doosro ko dekh kar wahi karne lagte hain jo baki log kar rahe hain. Uncertainty me yeh tendency 10 guna badh jati hai.',
    summary60s: 'Sochiye aap kisi naye shehar gaye aur wahan do restaurants hain: ek par 40 logo ki lambi line hai, aur doosra bilkul khaali hai. Bina khana taste kiye aapka dimag bolega: "Bheed wali jagah hi tasty khana hoga." Hum apna decision bheed par chhod dete hain.',
    quickTakeaways: [
      'Jab hum confused hote hain, hum sachai janchne ke bajaye bheed ko follow karte hain',
      'Agar hamare jaise log (dost, batchmates) kuch kar rahe hon to asar double ho jata hai',
      'Kayi baar puri bheed hi galat disha me ja rahi hoti hai',
    ],

    whyItHappens: 'Energy saving aur safety. Har ek product ya option par deep research karna impossible hai. Isliye dimaag shortcut leta hai: "Sab log pagal thodi honge!"',
    evolutionaryMechanism: 'Jungle me agar baki log bhag rahe the, to khade hokar sochna maut ka karan ban sakta tha. Saath bhagna survival rule tha.',

    howItWorks: 'Yeh ek chain reaction ki tarah kaam karta hai: A confuse tha isliye usne B ko dekha, B ne C ko dekha. Sab ek doosre ko dekh kar assume kar rahe hain ki samne wale ko pata hai.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'Apna Dimag vs Bheed Ka Picha',
      description: 'Fact-checking aur trending hone ke beech ka farq.',
      analogySideA: { label: 'Independent Thinking', detail: 'Khana, balance sheet ya course ki quality khud check karna.' },
      analogySideB: { label: 'Social Proof Trap', detail: 'Sirf isliye le lena kyunki Instagram reels aur dosto me trend chal raha hai.' },
    },

    researchSummary: 'Robert Cialdini ne 1984 ki book "Influence" me dikhaya ki hotel rooms me jab likha gaya ki "75% guests towel dobara use karte hain", to logo ne towel reuse 26% badha diya.',
    limitationsAndControversies: 'Jab kisi decision me aapka apna personal loss ya risk bohot bada ho, to social proof ka asar kam ho jata hai.',

    examples: [
      {
        id: 'sp_ex_01_hi',
        domain: 'consumer_advertising',
        displayOrder: 1,
        title: 'Tip Jar Me Pehle Se Dale Paise',
        description: 'Chai ya coffee counter par pehle se 50-100 ke note dale hote hain taaki naye log samjhein ki yahan sab tip dete hain.',
        takeaway: 'Artificial social proof create karke behavior influence kiya jata hai.',
      },
    ],
    scenarios: [
      {
        id: 'sp_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'Diwali Par Mithai Ki Dukaan Par Lambi Line',
        narrativeContext: 'Diwali ki shaam Vikas dekhta hai ki Mithai Shop A ke bahar 40 logo ki line hai, jabki Shop B bilkul khaali hai. Vikas 45 minute line me khada rehta hai yeh soch kar ki Shop A ki kaju katli sabse taazi hogi.',
        biasInAction: 'Vikas ne notice nahi kiya ki Shop A ka billing counter slow tha aur Shop B me 4 fast counter the. Dono ka supplier same tha, lekin line dekh kar Vikas attract ho gaya.',
        optimalResponse: 'Rukiye aur sochiye: "Kya bheed isliye hai kyunki quality achi hai, ya isliye kyunki meri tarah baki log bhi bheed dekh kar aakar khade ho gaye?"',
        reflectionPrompt: 'Kya aapne kabhi koi course ya phone sirf isliye liya kyunki aapke college me sab wahi le rahe the?',
      },
    ],

    howToRecognize: 'Jab aap kisi cheez ko justify karne ke liye bolein: "Itne sare log use kar rahe hain to acha hi hoga"—yeh social proof ka signal hai.',
    whereYouEncounterIt: 'App reviews, trending stocks, online courses, wedding trends, restaurant queues.',

    commonMisconceptions: 'Myth: "Social proof hamesha bura hota hai." Fact: Zyadatar normal mamlon me bheed ke rule follow karna safe rehta hai (jaise road ki sahi side par chalna).',

    howToRespond: 'Bheed se ek kadam peeche hatein aur objective data maangein.',
    psychologicalDefenses: [
      { title: 'The Solitary Test', instruction: 'Sochiye: "Agar koi aur yeh na kar raha hota, kya tab bhi mai yeh leta?"' },
      { title: 'Check Manufactured Hype', instruction: 'Dekhein ki kya reviews paid influencers ya bot accounts ke to nahi hain.' },
      { title: '24 Ghante Ka Break', instruction: 'Badi bheed wali scheme me jump karne se pehle 24 ghante rukiye.' },
    ],

    practiceQuestions: [
      {
        id: 'sp_q_01',
        difficulty: 'beginner',
        questionFormat: 'identify_bias',
        displayOrder: 1,
        prompt: 'Inme se kaunsa decision Social Proof ka sabse khatarnak example hai?',
        scenarioText: 'Market me paise invest karte waqt.',
        explanation: 'Sirf dosto ki baatein aur social media hype dekh kar bina balance sheet padhe paise lagana social proof ka trap hai.',
        antidoteAdvice: 'Popularity ko research ka substitute mat banayein.',
        options: [
          {
            id: 'sp_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Company ke revenue aur profit reports check karke invest karna.',
            feedbackText: 'Galat. Yeh objective research hai.',
          },
          {
            id: 'sp_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Meme-coin ya crypto me saari savings lagana kyunki Telegram group ke sab log bol rahe hain ki yeh 100x hoga.',
            feedbackText: 'Sahi! Yeh bina soche bheed ke piche bhagna hai.',
          },
          {
            id: 'sp_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Apni risk profile ke hisab se bank fixed deposit me paise rakhna.',
            feedbackText: 'Galat. Yeh ek rational personal decision hai.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Apne kisi recent decision ke bare me sochiye: Kya wo aapka apna tha ya bheed ko dekh kar liya gaya tha?',
    sections: [],
    references: [
      {
        id: 'sp_ref_01',
        title: 'Influence: The Psychology of Persuasion',
        citation: 'Cialdini, R. B. (1984). Influence: The Psychology of Persuasion.',
        authors: 'Robert B. Cialdini',
        publicationYear: 1984,
        journalOrPublisher: 'William Morrow',
        sourceType: 'academic_textbook',
        evidenceStrength: 'foundational_book',
        doiOrUrl: 'https://www.harpercollins.com/products/influence-new-and-expanded-robert-b-cialdini',
        relevance: 'Foundational framework classifying social proof as one of the six universal principles of human persuasion.',
        displayOrder: 1,
      },
      {
        id: 'sp_ref_02',
        title: 'Effects of group pressure upon the modification and distortion of judgments',
        citation: 'Asch, S. E. (1951). Effects of group pressure upon the modification and distortion of judgments.',
        authors: 'Solomon E. Asch',
        publicationYear: 1951,
        journalOrPublisher: 'Carnegie Press',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'empirical_study',
        doiOrUrl: 'https://psycnet.apa.org/record/1952-04332-001',
        relevance: 'Classic experimental proof showing that 75% of participants conformed to obviously incorrect line-length estimates under group pressure.',
        displayOrder: 2,
      },
    ],
    tags: ['Social Psychology', 'Social Proof', 'Critical Thinking'],
    relatedTopics: [],
    seoTitle: 'Social Proof Kya Hai? Bheed Ka Asar & Critical Thinking | Mentalab Mind',
    seoDescription: 'Samjhein social proof kaise kaam karta hai aur kyu hum aksar doosron ko dekh kar galat decisions lete hain.',
    canonicalUrl: '/mind/social-psychology/social-proof-and-bandwagon',
    ogImageUrl: '/images/mind/social-proof.png',
    publishedAt: '2026-09-12T00:00:00Z',
    deepExplanation: 'Social proof social information foraging aur herd behavior ka psychological manifestation hai.',
  },
  hi: createUniversalLocalizedRecord(TOPIC_SOCIAL_PROOF_EN, 'hi', "Social Proof & The Bandwagon Effect (प्रभाव)", "Social Proof & The Bandwagon Effect मानव मस्तिष्क का एक महत्वपूर्ण संज्ञानात्मक प्रभाव है जो हमारे निर्णयों को गहराई से प्रभावित करता है।", [
    "तथ्यों का निष्पक्ष विश्लेषण करें",
    "संज्ञानात्मक शॉर्टकट से सावधान रहें",
    "सचेत रहकर स्वतंत्र निर्णय लें"
  ]),
  gu: createUniversalLocalizedRecord(TOPIC_SOCIAL_PROOF_EN, 'gu', "Social Proof & The Bandwagon Effect (પ્રભાવ)", "Social Proof & The Bandwagon Effect એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createUniversalLocalizedRecord(TOPIC_SOCIAL_PROOF_EN, 'mr', "Social Proof & The Bandwagon Effect (प्रभाव)", "Social Proof & The Bandwagon Effect हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createUniversalLocalizedRecord(TOPIC_SOCIAL_PROOF_EN, 'te', "Social Proof & The Bandwagon Effect (ప్రభావం)", "Social Proof & The Bandwagon Effect అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createUniversalLocalizedRecord(TOPIC_SOCIAL_PROOF_EN, 'ta', "Social Proof & The Bandwagon Effect (விளைவு)", "Social Proof & The Bandwagon Effect என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createUniversalLocalizedRecord(TOPIC_SOCIAL_PROOF_EN, 'kn', "Social Proof & The Bandwagon Effect (ಪರಿಣಾಮ)", "Social Proof & The Bandwagon Effect ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createUniversalLocalizedRecord(TOPIC_SOCIAL_PROOF_EN, 'ml', "Social Proof & The Bandwagon Effect (സ്വാധീനം)", "Social Proof & The Bandwagon Effect എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createUniversalLocalizedRecord(TOPIC_SOCIAL_PROOF_EN, 'bn', "Social Proof & The Bandwagon Effect (প্রভাব)", "Social Proof & The Bandwagon Effect হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createUniversalLocalizedRecord(TOPIC_SOCIAL_PROOF_EN, 'pa', "Social Proof & The Bandwagon Effect (ਪ੍ਰਭਾਵ)", "Social Proof & The Bandwagon Effect ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createUniversalLocalizedRecord(TOPIC_SOCIAL_PROOF_EN, 'ur', "Social Proof & The Bandwagon Effect (اثر)", "Social Proof & The Bandwagon Effect انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createUniversalLocalizedRecord(TOPIC_SOCIAL_PROOF_EN, 'or', "Social Proof & The Bandwagon Effect (ପ୍ରଭାବ)", "Social Proof & The Bandwagon Effect ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createUniversalLocalizedRecord(TOPIC_SOCIAL_PROOF_EN, 'as', "Social Proof & The Bandwagon Effect (প্ৰভাৱ)", "Social Proof & The Bandwagon Effect সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
