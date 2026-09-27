import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_RECIPROCITY_PRINCIPLE: Record<MindLanguageCode, MindTopicDetail> = {
  en: {
    id: 'reciprocity_principle',
    categoryId: 'persuasion_influence',
    slug: 'reciprocity-principle-influence',
    difficulty: 'beginner',
    estimatedReadingMinutes: 4,
    scientificConsensusTier: 'established',
    sortWeight: 8,
    viewCount: 3100,
    shareCount: 240,
    bookmarkCount: 490,
    title: 'The Reciprocity Principle',
    subtitle: 'The universal human drive to repay favors—and its commercial traps',
    shortDescription: 'A fundamental social norm dictating that when someone provides us with a gift, favor, or concession, we experience an urgent psychological need to repay them.',
    oneLineExplanation: 'The internal discomfort of feeling indebted until we give something back.',

    summary30s: 'When someone gives you a gift or does you a small favor, your brain feels an immediate psychological urge to give something back—a social instinct that marketers exploit using free samples.',
    // 1. What is it?
    coreConcept: 'The rule of reciprocity states that human beings feel intensely uncomfortable when they receive something without returning a proportional favor. This social contract is the bedrock of human cooperation, but can be weaponized into uninvited indebtedness.',
    summary60s: 'If an acquaintance buys you a ₹50 cup of coffee, you immediately feel a psychological burden to buy the next round. If a supermarket offers you a free bite-sized cheese sample, your brain feels an awkward tug of guilt walking away without buying the ₹600 box.',
    quickTakeaways: [
      'Reciprocity enabled human civilization: trading favors across time without instant barter',
      'Uninvited gifts still trigger the obligation to repay',
      'A small initial gift can often extract a disproportionately large return favor',
    ],

    // 2. Why does it happen?
    whyItHappens: 'Evolutionary survival. Groups whose members reciprocated food, shelter, and defense outcompeted selfish groups. Failure to repay a favor earned the deadly reputation of a "freeloader" or "moocher".',
    evolutionaryMechanism: 'Sharing excess meat from a hunt ensured that others shared with you when your hunt failed.',

    // 3. How does it work?
    howItWorks: 'It works through social indebtedness: An unsolicited gift generates an emotional debt. Because carrying social debt causes mild anxiety, we seek the fastest exit route—even if the return favor costs 5x more than the original gift.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'The Tilted Emotional Scale',
      description: 'How an unasked-for gift creates a psychological imbalance.',
      analogySideA: { label: 'Unsolicited Small Gift', detail: 'A free pen, mint, sample snack, or unsolicited compliment.' },
      analogySideB: { label: 'Extracted Big Concession', detail: 'Signing up for a ₹15,000 course or buying a high-margin product out of guilt.' },
    },

    // 4. What does research say?
    researchSummary: 'Documented by Dennis Regan (1971, Cornell). A researcher bought subjects a 10-cent bottle of Coca-Cola, then asked them to buy 25-cent raffle tickets. Subjects who received the unsolicited Coke bought twice as many raffle tickets as those who received nothing.',
    limitationsAndControversies: 'Reciprocity collapses if the recipient detects blatant manipulation early. When a gift feels like an obvious trap, suspicion replaces indebtedness.',

    // 5. What does it look like in real life?
    examples: [
      {
        id: 'rec_ex_01',
        domain: 'consumer_advertising',
        displayOrder: 1,
        title: 'Free Mints with the Restaurant Bill',
        description: 'Waitstaff who give customers two complimentary mints with the bill receive a 14% to 21% increase in tips compared to zero mints.',
        takeaway: 'Personalized unexpected gifts trigger reciprocal tipping.',
      },
    ],
    scenarios: [
      {
        id: 'rec_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'The "Free" Kundali / Numerology Reading at the Mall',
        narrativeContext: 'While walking through a mall, Rahul is approached by a consultant offering a "Complimentary 5-Minute Vedic Numerology Analysis". Rahul sits down. The consultant speaks warmly for 5 minutes, praises Rahul\'s intelligence, and gives him a free laminated chart. The consultant then offers a ₹3,500 crystal gemstone ring.',
        biasInAction: 'Rahul does not even believe in gemstones, but because the man gave him 5 minutes of personal time and a chart, Rahul feels intensely cheap and ungrateful walking away without buying the ring.',
        optimalResponse: 'Reframe the transaction: "A gift given with an ulterior motive is not a gift; it is a sales technique. I am under zero obligation to buy a ring simply because someone gave me a free flyer." Politely say thank you and walk away.',
        reflectionPrompt: 'Have you ever tipped or bought something you did not want simply because the salesperson was "too nice" to you?',
      },
    ],

    // 6. How can I recognize it?
    howToRecognize: 'Notice when you are about to buy or agree to something you do not want, and your primary motivation is: "I will feel bad or look rude if I don\'t say yes after what they gave me."',
    whereYouEncounterIt: 'Free software trials, nonprofit donation letters with free stickers, corporate gift bags, wedding invitations.',

    // 7. What misconceptions exist?
    commonMisconceptions: 'Common myth: "Reciprocity is inherently manipulative." Truth: Reciprocity is the foundational glue of friendships, healthy marriages, and professional trust. It only becomes manipulative when weaponized for asymmetrical extraction.',

    // 8. What should I do about it?
    howToRespond: 'Redefine the gift in your mind: If someone offers an unrequested favor to sell you something, reclassify it from a "friendly gesture" to a "promotional cost".',
    psychologicalDefenses: [
      { title: 'The Reclassification Mental Switch', instruction: 'Mentally declare: "This is a marketing tactic, not a personal debt." Once reclassified, the obligation vanishes.' },
      { title: 'The Advance Polite Refusal', instruction: 'If you suspect an uninvited gift comes with strings attached, decline it immediately: "No thank you, I prefer not to take samples today."' },
      { title: 'Equivalence Check', instruction: 'Never repay a 10-rupee favor with a 1,000-rupee commitment.' },
    ],

    // 9. Can I test whether I understood it?
    practiceQuestions: [
      {
        id: 'rec_q_01',
        difficulty: 'beginner',
        questionFormat: 'identify_influence_principle',
        displayOrder: 1,
        prompt: 'Why does offering a free sample at a grocery counter increase sales so effectively?',
        scenarioText: 'Consumer behavior analysis at retail counters.',
        explanation: 'Taking a free consumable item creates a subtle psychological debt, making the customer feel socially obligated to buy the product to balance the exchange.',
        antidoteAdvice: 'Remember that free samples are built into marketing budgets, not personal favors.',
        options: [
          {
            id: 'rec_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Because customers are physically starving when walking down the aisle.',
            feedbackText: 'Incorrect. Hunger is not the primary driver of the purchase.',
          },
          {
            id: 'rec_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Because the gift triggers the unconscious reciprocity norm, creating an urge to repay the vendor.',
            feedbackText: 'Correct! The reciprocity drive pushes people to alleviate social indebtedness.',
          },
          {
            id: 'rec_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Because grocery stores ban customers who do not purchase after sampling.',
            feedbackText: 'Incorrect. There is no legal or retail ban.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Can you think of a relationship in your life where favors have become one-sided, or where someone uses small gifts to demand large emotional favors?',
    sections: [],
    references: [
      {
        id: 'rec_ref_01',
        title: 'Effects of a favor and liking on compliance',
        citation: 'Regan, D. T. (1971). Effects of a favor and liking on compliance. Journal of Experimental Social Psychology, 7(6), 627–639.',
        authors: 'Dennis T. Regan',
        publicationYear: 1971,
        journalOrPublisher: 'Journal of Experimental Social Psychology',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'empirical_study',
        doiOrUrl: 'https://doi.org/10.1016/0022-1031(71)90025-4',
        relevance: 'Foundational laboratory experiment demonstrating that an uninvited favor doubled compliance with subsequent requests regardless of liking.',
        displayOrder: 1,
      },
      {
        id: 'rec_ref_02',
        title: 'Influence: The Psychology of Persuasion',
        citation: 'Cialdini, R. B. (1984). Influence: The Psychology of Persuasion. William Morrow.',
        authors: 'Robert B. Cialdini',
        publicationYear: 1984,
        journalOrPublisher: 'William Morrow',
        sourceType: 'academic_textbook',
        evidenceStrength: 'foundational_book',
        doiOrUrl: 'https://www.harpercollins.com/products/influence-new-and-expanded-robert-b-cialdini',
        relevance: 'Comprehensive taxonomy of reciprocity, concession-reciprocation, and door-in-the-face compliance protocols.',
        displayOrder: 2,
      },
      {
        id: 'rec_ref_03',
        title: 'Fairness and retaliation: The economics of reciprocity',
        citation: 'Fehr, E., & Gächter, S. (2000). Fairness and retaliation: The economics of reciprocity. Journal of Economic Perspectives, 14(3), 159–181.',
        authors: 'Ernst Fehr, Simon Gächter',
        publicationYear: 2000,
        journalOrPublisher: 'Journal of Economic Perspectives',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'empirical_study',
        doiOrUrl: 'https://doi.org/10.1257/jep.14.3.159',
        relevance: 'Behavioral economics evidence showing humans routinely pay personal costs to reciprocate kindness or punish unfairness across cultures.',
        displayOrder: 3,
      },
    ],
    tags: ['Persuasion', 'Influence', 'Reciprocity'],
    relatedTopics: [
      {
        topicId: 'social_proof',
        slug: 'social-proof-and-bandwagon',
        title: 'Social Proof',
        relationshipType: 'general_related',
      },
    ],
    seoTitle: 'The Reciprocity Principle Explained | Psychology of Influence | Mentalab Mind',
    seoDescription: 'Understand the evolutionary science of reciprocity, how free gifts trigger obligation, and how to decline commercial manipulation.',
    canonicalUrl: '/mind/persuasion-and-influence/reciprocity-principle-influence',
    ogImageUrl: '/images/mind/reciprocity.png',
    publishedAt: '2026-09-20T00:00:00Z',
    deepExplanation: 'Reciprocity is an evolutionary cooperation mechanism based on delayed social accounting.',
  },
  hinglish: {
    id: 'reciprocity_principle',
    categoryId: 'persuasion_influence',
    slug: 'reciprocity-principle-influence',
    difficulty: 'beginner',
    estimatedReadingMinutes: 4,
    scientificConsensusTier: 'established',
    sortWeight: 8,
    viewCount: 3100,
    shareCount: 240,
    bookmarkCount: 490,
    title: 'The Reciprocity Principle',
    subtitle: 'Ehsan chukane ki aadat aur sales tactics',
    shortDescription: 'Insaan ki wo fitrat jisme agar koi hume koi chota gift ya favor deta hai, to hum par ehsan chukane ka mental pressure aa jata hai.',
    oneLineExplanation: 'Ehsan dabaye rakhne ki bechaini jab tak hum kuch wapas na de dein.',

    summary30s: 'Jab koi hume koi gift deta hai ya chhota favor karta hai, to dimaag me turant badle me kuch dene ka dawab banta hai—ise hi sales aur marketing me "free sample" dekar use kiya jata hai.',
    coreConcept: 'Reciprocity ka niyam kehta hai ki jab koi hamare liye kuch karta hai, to hamara dimaag automatically unka karzdar feel karne lagta hai. Yeh dosti me acha hai, lekin sales wale iska faida uthate hain.',
    summary60s: 'Agar koi dost aapko ₹50 ki chai pila de, to aapke dimaag me chalta rehta hai ki agle round ke paise mujhe dene hain. Supermarket me jab koi free me biscuit ya mithai ka piece deta hai, to bina kharide nikalne me sharam aane lagti hai.',
    quickTakeaways: [
      'Bina maange mile gift se bhi dimaag par ehsan chukane ka pressure aata hai',
      'Ek chota sa free gift dekar log aapse bohot bada favor le lete hain',
      'Is pressure ko pehchan kar aap bina guilty huye "No" bol sakte hain',
    ],

    whyItHappens: 'Evolutionary survival. Purane zamaane me jo log ek doosre ki madad karte the wahi zinda bache. Ehsan na chukane wale ko selfish samajhkar nikal diya jata tha.',
    evolutionaryMechanism: 'Shikar me zyada meat milne par doosro ko khilana taaki kal ko jab aapka shikar na lage to wo aapko khilayein.',

    howItWorks: 'Chota free gift dimaag me social guilt trigger karta hai. Us guilt ko jaldi khatam karne ke liye hum mehenga sauda bhi accept kar lete hain.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'Jhuka Hua Tarazu Metaphor',
      description: 'Chota free gift kaise bada favor extract karta hai.',
      analogySideA: { label: 'Chota Free Gift', detail: 'Free sample, free consulting, free chai ya meethi baatein.' },
      analogySideB: { label: 'Nuksan Wala Return', detail: 'Guilt me aakar ₹2,000 ka useless product khareed lena.' },
    },

    researchSummary: 'Dennis Regan ne 1971 ke experiment me dikhaya ki jin logo ko experimenter ne 10-cent ki Coca-Cola pilai, unhone usse double raffle tickets khareedi unke mukable jinhe kuch nahi mila tha.',
    limitationsAndControversies: 'Agar samne wale ki chalaki pehle hi pakad me aa jaye, to guilt ke bajaye gussa aa jata hai.',

    examples: [
      {
        id: 'rec_ex_01_hi',
        domain: 'consumer_advertising',
        displayOrder: 1,
        title: 'Restaurant Bill Ke Sath Saunf Aur Mints',
        description: 'Waiter jab bill ke sath smile karke mints deta hai to tip 15-20% badh jati hai.',
        takeaway: 'Chota gift customer ko generous banne par majboor karta hai.',
      },
    ],
    scenarios: [
      {
        id: 'rec_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'Mall Me "Free" Kundali / Numerology Desk',
        narrativeContext: 'Rahul mall me ghoom raha tha. Ek astrologer ne bola: "Sir, 2 minute ka free hand reading le lijiye." Rahul baith gaya. Astrologer ne 5 minute tareef ki aur bola: "Aapka dimag bohot tez hai, par ek dosh hai. Yeh ₹2,500 ka stone lijiye."',
        biasInAction: 'Rahul stone me believe nahi karta tha, lekin usne socha "Bande ne 5 minute itne pyaar se samjhaya, bina kuch liye jaunga to kitna cheap lagega."',
        optimalResponse: 'Dimaag me frame badlein: "Yeh dosti nahi hai; yeh sales technique hai. Unhone jo free me diya wo unka marketing expense tha, mera personal ehsan nahi." Smile karke mana karein.',
        reflectionPrompt: 'Kya aapne kabhi kisi dukandar se sirf isliye kuch khareeda kyunki wo bohot zyada polite tha aur usne bohot saare kapde khol kar dikha diye the?',
      },
    ],

    howToRecognize: 'Jab aap kuch khareedne lagein sirf isliye ki "Agar ab mana kiya to samne wale ko bura lagega", to samajh jaiye reciprocity trap hai.',
    whereYouEncounterIt: 'Free demo classes, corporate gifts, wedding return gifts, roadside free checks.',

    commonMisconceptions: 'Myth: "Reciprocity hamesha bura hota hai." Fact: Dosti aur rishton me ek doosre ke kaam aana hi samaj ko jodta hai. Yeh sirf tab galat hai jab business faida uthaye.',

    howToRespond: 'Free gift ko ek advertisement ya marketing stunt samajhna shuru karein, dosti nahi.',
    psychologicalDefenses: [
      { title: 'Reframe as Marketing', instruction: 'Sochiye: "Yeh promotional sample hai, koi ehsan nahi."' },
      { title: 'Pehle Hi Mana Karein', instruction: 'Agar intention pehle hi samajh aaye, to sample haath me hi na lein.' },
      { title: 'Proportion Check', instruction: '10 rupaye ki chai ke badle 10,000 ka contract mat sign karein.' },
    ],

    practiceQuestions: [
      {
        id: 'rec_q_01',
        difficulty: 'beginner',
        questionFormat: 'identify_influence_principle',
        displayOrder: 1,
        prompt: 'Mall me free food sample khane ke baad log use khareed kyu lete hain?',
        scenarioText: 'Consumer behavior analysis.',
        explanation: 'Free cheez lene se unconscious social debt banta hai, jisko khatam karne ke liye customer packet khareed leta hai.',
        antidoteAdvice: 'Free sample business budget ka hissa hota hai.',
        options: [
          {
            id: 'rec_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Kyunki khana compulsory hota hai.',
            feedbackText: 'Galat.',
          },
          {
            id: 'rec_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Kyunki reciprocity rule ke chalte dimaag me ehsan chukane ka subconscious guilt banta hai.',
            feedbackText: 'Sahi! Reciprocity guilt sales drive karta hai.',
          },
          {
            id: 'rec_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Kyunki sample me addictive chemicals hote hain.',
            feedbackText: 'Galat conspiracy theory hai.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Kya aap kisi aise relationship me hain jahan samne wala choti gifts dekar aapse bohot bade-bade favours maangta hai?',
    sections: [],
    references: [
      {
        id: 'rec_ref_01',
        title: 'Effects of a favor and liking on compliance',
        citation: 'Regan, D. T. (1971). Journal of Experimental Social Psychology.',
        authors: 'Dennis T. Regan',
        publicationYear: 1971,
        journalOrPublisher: 'Journal of Experimental Social Psychology',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'empirical_study',
        doiOrUrl: 'https://doi.org/10.1016/0022-1031(71)90025-4',
        relevance: 'Favor and compliance par classic controlled experiment.',
        displayOrder: 1,
      },
      {
        id: 'rec_ref_02',
        title: 'Influence: The Psychology of Persuasion',
        citation: 'Cialdini, R. B. (1984). Influence.',
        authors: 'Robert B. Cialdini',
        publicationYear: 1984,
        journalOrPublisher: 'William Morrow',
        sourceType: 'academic_textbook',
        evidenceStrength: 'foundational_book',
        doiOrUrl: 'https://www.harpercollins.com/products/influence-new-and-expanded-robert-b-cialdini',
        relevance: 'Reciprocity rule aur persuasion strategies ka standard taxonomy.',
        displayOrder: 2,
      },
    ],
    tags: ['Persuasion', 'Influence', 'Reciprocity'],
    relatedTopics: [],
    seoTitle: 'Reciprocity Principle Kya Hai? Psychology of Influence | Mentalab Mind',
    seoDescription: 'Free gifts aur favours hume kaise manipulate karte hain. Seekhein Cialdini ke core principles aur mental defenses.',
    canonicalUrl: '/mind/persuasion-and-influence/reciprocity-principle-influence',
    ogImageUrl: '/images/mind/reciprocity.png',
    publishedAt: '2026-09-20T00:00:00Z',
    deepExplanation: 'Reciprocity ek universal biological cooperation mechanism hai jo social debt par operate karta hai.',
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
