import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_ANCHORING_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: {
    id: 'anchoring_effect',
    categoryId: 'consumer_advertising',
    slug: 'anchoring-effect',
    difficulty: 'beginner',
    estimatedReadingMinutes: 4,
    scientificConsensusTier: 'established',
    sortWeight: 5,
    viewCount: 3410,
    shareCount: 280,
    bookmarkCount: 520,
    title: 'The Anchoring Effect',
    subtitle: 'How the first number you hear hijacks your judgment',
    shortDescription: 'The cognitive bias where an individual relies too heavily on an initial piece of information (the "anchor") when making subsequent estimates or decisions.',
    oneLineExplanation: 'Fixating on the first number presented and adjusting insufficiently from it.',

    summary30s: 'The first number or price you hear serves as a mental magnet. Even if it\'s completely arbitrary, your brain struggles to adjust far enough away from it when evaluating worth.',
    // 1. What is it?
    coreConcept: 'Anchoring is a cognitive bias where the first piece of information encountered disproportionately warps all subsequent estimates, even if that initial number is completely arbitrary, irrelevant, or extreme.',
    summary60s: 'If a seller asks ₹5,000 for a leather jacket and you bargain them down to ₹2,500, you feel proud of a 50% discount. But if the seller had originally asked ₹1,800, you might have settled for ₹1,200. The initial ₹5,000 anchored your sense of fair value.',
    quickTakeaways: [
      'The initial anchor sets the mental starting point for all negotiations',
      'People adjust away from the anchor, but the adjustment is almost always insufficient',
      'Even completely irrelevant numbers (like the last digits of your phone number) can anchor estimates',
    ],

    // 2. Why does it happen?
    whyItHappens: 'Anchoring and adjustment heuristic. The human mind seeks an immediate frame of reference. Once a reference point is established in working memory, our cognitive search for alternative values remains anchored to its neighborhood.',
    evolutionaryMechanism: 'Rapid estimation in resource-scarce environments favored using readily available reference points rather than starting every calculation from zero.',

    // 3. How does it work?
    howItWorks: 'It works through selective accessibility: exposure to the anchor primes your brain with reasons why the price or estimate could be near that number, suppressing reasons why it should be vastly different.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'The Ship Anchor Metaphor',
      description: 'Once the anchor drops to the ocean floor, the boat can only drift within the chain radius.',
      analogySideA: { label: 'First Number (Anchor)', detail: 'Drops into the mind: "Original Price: ₹4,999".' },
      analogySideB: { label: 'Insufficient Adjustment', detail: 'The mind negotiates or feels lucky paying ₹2,100, ignoring that manufacturing cost was ₹350.' },
    },

    // 4. What does research say?
    researchSummary: 'Documented by Amos Tversky & Daniel Kahneman (1974, Science). In a classic experiment, participants spun a rigged wheel of fortune stopping at 10 or 65, then estimated the percentage of African nations in the UN. Those who saw 65 guessed significantly higher (45%) than those who saw 10 (25%).',
    limitationsAndControversies: 'Anchoring effects decline when buyers have instant price comparison tools, strict predefined budgets, or objective knowledge of production costs.',

    // 5. What does it look like in real life?
    examples: [
      {
        id: 'anc_ex_01',
        domain: 'consumer_advertising',
        displayOrder: 1,
        title: 'Strike-Through Pricing on E-Commerce',
        description: 'An online marketplace shows "₹9,999 ₹2,999 (70% OFF)". The ₹9,999 anchor makes ₹2,999 feel like a stolen bargain, even if the item was never sold at ₹9,999.',
        takeaway: 'Artificial strikethrough anchors fabricate phantom savings.',
      },
    ],
    scenarios: [
      {
        id: 'anc_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'Sarojini Nagar / Colaba Street Bargaining',
        narrativeContext: 'Neha visits a street market in Delhi to buy an embroidered jacket. The vendor asks for ₹3,500. Neha is an experienced bargainer and counters with ₹1,200. After back-and-forth, they settle on ₹1,500. Neha leaves thrilled that she saved ₹2,000.',
        biasInAction: 'The vendor knew the wholesale cost was ₹400 and was happy to sell at ₹800. By throwing an anchor of ₹3,500, he ensured Neha would feel victorious at ₹1,500 while paying nearly double the true market rate.',
        optimalResponse: 'Anchor first, or reset the frame entirely. Determine the maximum price you are willing to pay based on objective utility before asking the seller for their quote.',
        reflectionPrompt: 'When was the last time you bought an item primarily because the discount percentage seemed huge rather than because you genuinely needed it?',
      },
    ],

    // 6. How can I recognize it?
    howToRecognize: 'Whenever you evaluate whether an offer is good by comparing it to the first stated price rather than the actual utility or intrinsic cost of the product, you are anchored.',
    whereYouEncounterIt: 'Salary negotiations, real estate listings, restaurant menus (the expensive decoy dish), sale banners.',

    // 7. What misconceptions exist?
    commonMisconceptions: 'Common myth: "Experienced negotiators and professionals are immune to anchoring." Kahneman\'s studies showed experienced real estate agents and judges were anchored almost as heavily as college students.',

    // 8. What should I do about it?
    howToRespond: 'Reject the anchor immediately. In negotiations, counter extreme anchors by explicitly stating: "That number is completely outside our parameters. Let us start fresh from baseline costs."',
    psychologicalDefenses: [
      { title: 'Pre-Commitment Price Ceiling', instruction: 'Decide your maximum acceptable price at home before entering a showroom or viewing a catalog.' },
      { title: 'Zero-Base Value Calculation', instruction: 'Ask: "What are the raw materials and labor actually worth?" instead of "How much discount am I getting?"' },
      { title: 'The Counter-Anchor Strike', instruction: 'If the other party opens with an aggressive anchor, do not accept it as the midpoint. Reset the frame with an equally grounded counter-anchor.' },
    ],

    // 9. Can I test whether I understood it?
    practiceQuestions: [
      {
        id: 'anc_q_01',
        difficulty: 'beginner',
        questionFormat: 'scenario_analysis',
        displayOrder: 1,
        prompt: 'How does an e-commerce platform use Anchoring to increase purchase conversion?',
        scenarioText: 'A website lists an earphone with the following graphic: "~~₹4,999~~ NOW ₹1,499".',
        explanation: 'By presenting ₹4,999 first, the brain anchors on a high luxury tier, making ₹1,499 feel like immense value even if the earphones are standard budget units.',
        antidoteAdvice: 'Ignore the crossed-out number; evaluate the current price against competitors.',
        options: [
          {
            id: 'anc_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'By forcing users to complete a survey before seeing the price.',
            feedbackText: 'Incorrect. That is friction, not anchoring.',
          },
          {
            id: 'anc_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'By showing an inflated crossed-out original price to set a high reference point.',
            feedbackText: 'Correct! The crossed-out number anchors your perception of worth.',
          },
          {
            id: 'anc_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'By offering free delivery on orders above ₹5,000.',
            feedbackText: 'Incorrect. That is a minimum spend threshold incentive.',
          },
        ],
      },
    ],

    reflectionPrompt: 'During your last salary or freelance negotiation, who set the first number? Did that number dictate where the final agreement landed?',
    sections: [],
    references: [
      {
        id: 'anc_ref_01',
        title: 'Judgment under uncertainty: Heuristics and biases',
        citation: 'Tversky, A., & Kahneman, D. (1974). Judgment under uncertainty: Heuristics and biases. Science, 185(4157), 1124–1131.',
        authors: 'Amos Tversky, Daniel Kahneman',
        publicationYear: 1974,
        journalOrPublisher: 'Science',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'foundational_book',
        doiOrUrl: 'https://doi.org/10.1126/science.185.4157.1124',
        relevance: 'Foundational experimental demonstration of the anchoring and adjustment heuristic in human judgment under uncertainty.',
        displayOrder: 1,
      },
      {
        id: 'anc_ref_02',
        title: 'A literature review of the anchoring effect',
        citation: 'Furnham, A., & Boo, H. C. (2011). A literature review of the anchoring effect. The Journal of Socio-Economics, 40(1), 35–42.',
        authors: 'Adrian Furnham, Hua Chu Boo',
        publicationYear: 2011,
        journalOrPublisher: 'The Journal of Socio-Economics',
        sourceType: 'systematic_review',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        doiOrUrl: 'https://doi.org/10.1016/j.socec.2010.10.008',
        relevance: 'Comprehensive systematic review of experimental studies documenting anchoring across legal decisions, real estate, and consumer pricing.',
        displayOrder: 2,
      },
    ],
    tags: ['Decision Making', 'Consumer Psychology', 'Anchoring'],
    relatedTopics: [
      {
        topicId: 'confirmation_bias',
        slug: 'confirmation-bias',
        title: 'Confirmation Bias',
        relationshipType: 'general_related',
      },
    ],
    seoTitle: 'What is the Anchoring Effect? Cognitive Bias & Bargaining Science | Mentalab Mind',
    seoDescription: 'Discover how the anchoring bias controls price perception, salary talks, and shopping discounts, plus 3 techniques to neutralize it.',
    canonicalUrl: '/mind/consumer-and-advertising-psychology/anchoring-effect',
    ogImageUrl: '/images/mind/anchoring-effect.png',
    publishedAt: '2026-09-14T00:00:00Z',
    deepExplanation: 'The anchoring heuristic operates through selective accessibility and insufficient adjustment from an initial reference point.',
  },
  hinglish: {
    id: 'anchoring_effect',
    categoryId: 'consumer_advertising',
    slug: 'anchoring-effect',
    difficulty: 'beginner',
    estimatedReadingMinutes: 4,
    scientificConsensusTier: 'established',
    sortWeight: 5,
    viewCount: 3410,
    shareCount: 280,
    bookmarkCount: 520,
    title: 'The Anchoring Effect',
    subtitle: 'Pehla number kaise dimaag ko fix kar deta hai',
    shortDescription: 'Ek aisi mental bias jisme pehli baar suna ya dekha gaya number hamare saare agle decisions aur andazo ko control karta hai.',
    oneLineExplanation: 'Pehle number par dimaag ka phas jana aur usse door na soch pana.',

    summary30s: 'Jo pehla number ya daam aap sunte hain, wo dimaag me langar (anchor) ban jata hai. Chahe wo number be-matlab ho, aapka dimaag usi ke daayre me sochne par majboor ho jata hai.',
    coreConcept: 'Anchoring ka matlab hai ki kisi cheez ki value tay karte waqt hamara dimaag sabse pehle dikhaye gaye number ko baseline maan leta hai, chahe wo number kitna bhi fake ya bematlab ho.',
    summary60s: 'Agar dukandar kisi jacket ka daam ₹5,000 bole aur aap bargaining karke ₹2,500 me le lein, to aapko lagta hai aapne 50% bacha liya. Lekin agar usne shuruat hi ₹1,800 se ki hoti to aap ₹1,200 me lete. Uska feka gaya pehla number ₹5,000 aapke dimaag me anchor ban gaya.',
    quickTakeaways: [
      'Pehla number negotiation ka mental centre-point ban jata hai',
      'Log bargaining karte hain, lekin us pehle number se bohot door nahi ja pate',
      'E-commerce websites iska use fake discounts dikhane ke liye karti hain',
    ],

    whyItHappens: 'Dimaag ki adjustment heuristic. Hamara dimaag kisi bhi cheez ki absolute value nahi janta; hum hamesha comparison se sochte hain. Pehla number reference ban jata hai.',
    evolutionaryMechanism: 'Unknown situations me turant ek starting point pakad kar andaza lagana dimaag ke liye energy-efficient tha.',

    howItWorks: 'Jab pehla number dimaag me aata hai, dimaag usi number ke aas-paas ke arguments sochne lagta hai aur extreme alternative ko dismiss kar deta hai.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'Jahaaz Ka Langar (Anchor) Metaphor',
      description: 'Ek baar samandar me langar gir jaye, to naav uske daayre se bahar nahi ja sakti.',
      analogySideA: { label: 'Pehla Number (Anchor)', detail: 'MRP Tag: "₹4,999 crossed out".' },
      analogySideB: { label: 'Kamzor Adjustment', detail: 'Aap ₹1,800 dekar khush ho jate hain, jabki banne ki cost sirf ₹300 thi.' },
    },

    researchSummary: 'Amos Tversky aur Daniel Kahneman ne 1974 me ek wheel of fortune experiment se prove kiya ki random numbers bhi logo ke scientific estimations ko 20-30% hilakar rakh dete hain.',
    limitationsAndControversies: 'Agar buyer ko product ki actual wholesale cost aur competitors ke rates pehle se pata hon, to anchoring fail ho jati hai.',

    examples: [
      {
        id: 'anc_ex_01_hi',
        domain: 'consumer_advertising',
        displayOrder: 1,
        title: 'Strike-Through Pricing Ka Khel',
        description: 'Online website par likha hota hai: "~~₹9,999~~ NOW ₹2,499". Wo 9,999 anchor hai taaki aapko 2,499 sasta lage.',
        takeaway: 'Kati hui MRP dekhkar confuse mat hoiye.',
      },
    ],
    scenarios: [
      {
        id: 'anc_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'Sarojini Nagar / Colaba Market Ki Bargaining',
        narrativeContext: 'Neha Delhi ke Sarojini Nagar market me jacket lene gayi. Dukandar ne daam bola ₹3,500. Neha ne badi bargaining karke ₹1,500 me le liya aur khush ho gayi ki usne ₹2,000 bacha liye.',
        biasInAction: 'Dukandar ki wholesale cost ₹400 thi aur wo ₹800 me bhi bechne ko taiyar tha. ₹3,500 ka anchor fenk kar usne ensure kiya ki Neha ₹1,500 dekar bhi khush rahegi.',
        optimalResponse: 'Dukandar se daam poochne se pehle khud tay karein ki is kapde ki quality aur aapke budget ke hisab se iski actual value kitni hai.',
        reflectionPrompt: 'Kya aapne kabhi koi cheez sirf isliye kharidi kyunki uspar "70% OFF" likha tha?',
      },
    ],

    howToRecognize: 'Jab aap kisi offer ko check karte waqt uski actual quality ke bajaye uske discount percentage ko dekh kar excite hote hain, to samajh jaiye aap anchored hain.',
    whereYouEncounterIt: 'Salary discussions, real estate deals, hotel bookings, clothes shopping.',

    commonMisconceptions: 'Myth: "Smart logo par anchoring ka asar nahi hota." Fact: Research dikhati hai ki experienced real estate agents aur judges par bhi iska utna hi asar hota hai.',

    howToRespond: 'Pehle number ko seedhe reject karein aur zero se valuation shuru karein.',
    psychologicalDefenses: [
      { title: 'Apni Price Limit Pehle Tay Karein', instruction: 'Shopping ya negotiation me jane se pehle ghar par hi decide karein ki aap maximum kitna denge.' },
      { title: 'Production Cost Ka Andaza Lagayein', instruction: 'Sochiye: "Ise banane me kitna kharcha aaya hoga?" na ki "Dukandar kitna chhod raha hai?"' },
      { title: 'Counter-Anchor Throw Karein', instruction: 'Agar samne wala unrealistic number bole, to use midpoint mat banne dein; apna counter-number bolein.' },
    ],

    practiceQuestions: [
      {
        id: 'anc_q_01',
        difficulty: 'beginner',
        questionFormat: 'scenario_analysis',
        displayOrder: 1,
        prompt: 'Shopping websites Anchoring ka istemaal karke sale kyu badhati hain?',
        scenarioText: 'Website par dikhta hai: "~~₹4,999~~ AB SIRF ₹1,499".',
        explanation: 'Kati hui MRP dimaag me premium value ka reference banati hai, jisse ₹1,499 ek bohot bada bargain lagta hai.',
        antidoteAdvice: 'Kati hui line ko ignore karein aur dusri websites par price compare karein.',
        options: [
          {
            id: 'anc_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Payment process ko lamba karke.',
            feedbackText: 'Galat.',
          },
          {
            id: 'anc_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Bada crossed-out price dikha kar dimaag me high reference point set karna.',
            feedbackText: 'Sahi! Yeh text-book anchoring hai.',
          },
          {
            id: 'anc_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Free shipping provide karna.',
            feedbackText: 'Galat.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Pichli baar jab aapne salary ya freelance work ke liye charge kiya tha, to pehla number kisne bola tha? Us number ne final deal ko kaise influence kiya?',
    sections: [],
    references: [
      {
        id: 'anc_ref_01',
        title: 'Judgment under uncertainty: Heuristics and biases',
        citation: 'Tversky & Kahneman (1974). Science.',
        authors: 'Amos Tversky, Daniel Kahneman',
        publicationYear: 1974,
        journalOrPublisher: 'Science',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'foundational_book',
        doiOrUrl: 'https://doi.org/10.1126/science.185.4157.1124',
        relevance: 'Foundational experimental demonstration of the anchoring and adjustment heuristic.',
        displayOrder: 1,
      },
      {
        id: 'anc_ref_02',
        title: 'A literature review of the anchoring effect',
        citation: 'Furnham, A., & Boo, H. C. (2011). The Journal of Socio-Economics.',
        authors: 'Adrian Furnham, Hua Chu Boo',
        publicationYear: 2011,
        journalOrPublisher: 'The Journal of Socio-Economics',
        sourceType: 'systematic_review',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        doiOrUrl: 'https://doi.org/10.1016/j.socec.2010.10.008',
        relevance: 'Systematic review of experimental studies documenting anchoring across legal and pricing domains.',
        displayOrder: 2,
      },
    ],
    tags: ['Decision Making', 'Consumer Psychology', 'Anchoring'],
    relatedTopics: [],
    seoTitle: 'Anchoring Effect Kya Hai? Bargaining & Pricing Psychology | Mentalab Mind',
    seoDescription: 'Pehla number kaise humare kharchon aur shopping decisions ko manipulate karta hai. Seekhein 3 practical defenses.',
    canonicalUrl: '/mind/consumer-and-advertising-psychology/anchoring-effect',
    ogImageUrl: '/images/mind/anchoring-effect.png',
    publishedAt: '2026-09-14T00:00:00Z',
    deepExplanation: 'Anchoring heuristic cognitive economics aur working memory accessibility par kaam karta hai.',
  },
  hi: {} as any,
  gu: {} as any,
  mr: {} as any,
  te: {} as any,
  ta: {} as any,
  kn: {} as any,
  ml: {} as any,
  bn: {} as any,
  pa: {} as any,
  ur: {} as any,
  or: {} as any,
  as: {} as any,
};
