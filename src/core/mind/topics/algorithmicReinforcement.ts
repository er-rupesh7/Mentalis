import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_ALGORITHMIC_REINFORCEMENT: Record<MindLanguageCode, MindTopicDetail> = {
  en: {
    id: 'algorithmic_reinforcement',
    categoryId: 'social_media_tech',
    slug: 'algorithmic-reinforcement-and-outrage',
    difficulty: 'intermediate',
    estimatedReadingMinutes: 5,
    scientificConsensusTier: 'established',
    sortWeight: 7,
    viewCount: 3820,
    shareCount: 420,
    bookmarkCount: 610,
    title: 'Algorithmic Reinforcement & Outrage Traps',
    subtitle: 'How engagement loops monetize moral outrage and polarize minds',
    shortDescription: 'The algorithmic optimization of user feeds to maximize watch-time and comments by disproportionately serving emotionally provocative and outrage-inducing content.',
    oneLineExplanation: 'Algorithms do not show you the world as it is; they show you whatever keeps your thumb scrolling.',

    summary30s: 'Social media algorithms don\'t recommend what is true or calming—they recommend whatever makes your blood boil, because outrage maximizes screen time and advertising profits.',
    // 1. What is it?
    coreConcept: 'Algorithmic reinforcement occurs when recommendation systems detect that you linger on controversial or provocative posts, and subsequently flood your feed with increasingly extreme content of that exact flavor, creating a hyper-distorted illusion of consensus.',
    summary60s: 'If an app’s revenue depends on the number of ads shown per hour, its machine learning models will optimize for whatever keeps you on screen longest. Psychology proves that human beings cannot look away from perceived threats and moral indignation. The feed is engineered for outrage because outrage keeps you hooked.',
    quickTakeaways: [
      'Algorithms maximize time-on-app, not accuracy, nuance, or mental peace',
      'Moral outrage produces the highest share and comment velocity online',
      'Consuming extreme feeds convinces you that the opposing side is completely unhinged',
    ],

    // 2. Why does it happen?
    whyItHappens: 'Negativity bias and tribal threat detection. We evolved to pay urgent attention to gossip, conflict, and hostile threats to protect our tribe. Algorithms accidentally discovered this primal neural button.',
    evolutionaryMechanism: 'Paying attention to a saber-toothed tiger rumor kept you alive; paying attention to flowers did not. Our brain treats online arguments like saber-toothed tigers.',

    // 3. How does it work?
    howItWorks: 'The recommendation loop: (1) You slow down your scroll on an infuriating video; (2) The algorithm logs your 4-second dwell time; (3) The model infers "User is highly engaged by topic X"; (4) Tomorrow, 40% of your feed is topic X; (5) Your perception of reality shifts to believe the world is crumbling.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'flow_diagram',
      headline: 'The Echo Chamber Funnel',
      description: 'How innocent browsing spirals into algorithmic radicalization.',
      analogySideA: { label: 'Real World Baseline', detail: 'Most people are friendly, busy living daily life, and hold moderate opinions.' },
      analogySideB: { label: 'Algorithmic Feed', detail: 'Amplifies only the most extreme 1% of inflammatory behavior to harvest ad clicks.' },
    },

    // 4. What does research say?
    researchSummary: 'Documented in computational social science by Brady et al. (2017, PNAS), showing each moral-emotional word in a tweet increased retweet rate by 20%. Jonathan Haidt\'s research extensively connects algorithmically driven outrage to spikes in adolescent anxiety.',
    limitationsAndControversies: 'Users are not purely passive victims. Research also reveals that users voluntarily seek out tribal affirmation; algorithms simply act as frictionless accelerators of existing human tribalism.',

    // 5. What does it look like in real life?
    examples: [
      {
        id: 'ar_ex_01',
        domain: 'social_media',
        displayOrder: 1,
        title: 'The Infinite Rage Comment Section',
        description: 'A user spends 90 minutes arguing with an anonymous troll on X (Twitter) about a 15-second out-of-context video clip, going to bed with elevated heart rate and insomnia.',
        takeaway: 'Engaging with rage-bait trains the algorithm to deliver more rage-bait.',
      },
    ],
    scenarios: [
      {
        id: 'ar_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'The Heated Family WhatsApp & YouTube Spiral',
        narrativeContext: 'Sumit watched one sensationalist YouTube video about a political scandal during lunch. By evening, his YouTube recommendations consisted entirely of thumbnails with red arrows, siren emojis, and headlines screaming: "WAR IMMINENT! PROOF EXPOSED!" Sumit becomes irritable and anxious, picking fights with his father at dinner.',
        biasInAction: 'Sumit thought he was becoming "informed", when in reality an algorithm was simply gaming his stress response for watch-time metrics.',
        optimalResponse: 'Recognize the business model: "This thumbnail was engineered to trigger my cortisol so I watch two 15-second car insurance ads. I will not give it my peace of mind." Close the app.',
        reflectionPrompt: 'After spending 30 minutes scrolling social media today, did you feel energized and clear-headed, or drained and irritable?',
      },
    ],

    // 6. How can I recognize it?
    howToRecognize: 'Notice the physiological reaction: Your jaw is clenched, your heart rate is elevated, and you feel a compulsive desire to type a furious retort to someone you have never met.',
    whereYouEncounterIt: 'X/Twitter trending tabs, Instagram Reels explore page, YouTube recommendations, sensational news feeds.',

    // 7. What misconceptions exist?
    commonMisconceptions: 'Common myth: "The algorithm is intentionally trying to push political ideology X." Reality: The algorithm has no ideology; it is a mathematical function maximizing watch time. If kitten videos kept you glued for 4 hours, it would show only kittens.',

    // 8. What should I do about it?
    howToRespond: 'Starve the algorithm of attention data. Do not click, comment, quote-tweet, or even slow down your scroll on rage-bait.',
    psychologicalDefenses: [
      { title: 'The Scroll-Speed Rule', instruction: 'Flick past rage-bait in under 0.5 seconds so the recommendation engine registers zero dwell time.' },
      { title: 'Aggressive "Not Interested" Curation', instruction: 'Explicitly click "Don\'t recommend this channel" on sensationalist creators.' },
      { title: 'Information Diet Boundaries', instruction: 'Read long-form investigative journalism or physical books instead of algorithmic feeds for serious topics.' },
    ],

    // 9. Can I test whether I understood it?
    practiceQuestions: [
      {
        id: 'ar_q_01',
        difficulty: 'intermediate',
        questionFormat: 'scenario_analysis',
        displayOrder: 1,
        prompt: 'Why do social media recommendation algorithms prioritize controversial and outrage-inducing content?',
        scenarioText: 'Understanding the economic engine of attention algorithms.',
        explanation: 'Human negative-emotion loops maximize attention duration and comment count, directly increasing the ad revenue generated by the platform.',
        antidoteAdvice: 'Treat your attention as precious mental currency.',
        options: [
          {
            id: 'ar_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Because human software engineers hand-pick controversial posts to educate the public.',
            feedbackText: 'Incorrect. Algorithms are automated neural networks, not human editorial teams.',
          },
          {
            id: 'ar_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Because outrage and conflict trigger biological attention instincts, maximizing screen time and ad views.',
            feedbackText: 'Correct! Outrage is the highest-converting attention driver.',
          },
          {
            id: 'ar_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Because positive educational content is banned by app store policies.',
            feedbackText: 'Incorrect. Positive content is allowed; it simply gets lower automated engagement metrics.',
          },
        ],
      },
    ],

    reflectionPrompt: 'If you deleted your most frequently checked algorithmic app for 7 days, what would happen to your average stress levels?',
    sections: [],
    references: [
      {
        id: 'ar_ref_01',
        title: 'Emotion shapes the diffusion of moralized content in social networks',
        citation: 'Brady, W. J., Wills, J. A., Jost, J. T., Tucker, J. A., & Bavel, J. J. V. (2017). Emotion shapes the diffusion of moralized content in social networks. PNAS, 114(28), 7313–7318.',
        authors: 'William J. Brady et al.',
        publicationYear: 2017,
        journalOrPublisher: 'PNAS',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        doiOrUrl: 'https://doi.org/10.1073/pnas.1618923114',
        relevance: 'Empirical analysis of 563,000 tweets demonstrating that moral-emotional language increases virality by 20% per word.',
        displayOrder: 1,
      },
      {
        id: 'ar_ref_02',
        title: 'A systematic review of online misinformation and social media polarization',
        citation: 'Lorenz-Spreen, P., Oswald, L., Lewandowsky, S., & Hertwig, R. (2023). A systematic review of online misinformation and social media polarization. Nature Human Behaviour, 7(1), 19–35.',
        authors: 'Philipp Lorenz-Spreen, Lisa Oswald, Stephan Lewandowsky, Ralph Hertwig',
        publicationYear: 2023,
        journalOrPublisher: 'Nature Human Behaviour',
        sourceType: 'systematic_review',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        doiOrUrl: 'https://doi.org/10.1038/s41562-023-01608-2',
        relevance: 'Comprehensive systematic review of behavioral consequences of algorithmic feeds and echo chambers on political polarization.',
        displayOrder: 2,
      },
    ],
    tags: ['Social Media', 'Attention Economics', 'Algorithms'],
    relatedTopics: [
      {
        topicId: 'confirmation_bias',
        slug: 'confirmation-bias',
        title: 'Confirmation Bias',
        relationshipType: 'amplified_by',
      },
    ],
    seoTitle: 'How Social Media Algorithms Trap Your Brain in Outrage | Mentalab Mind',
    seoDescription: 'The cognitive psychology behind infinite scroll, outrage monetization, and how to reclaim your attention span.',
    canonicalUrl: '/mind/social-media-psychology/algorithmic-reinforcement-and-outrage',
    ogImageUrl: '/images/mind/algorithmic-reinforcement.png',
    publishedAt: '2026-09-18T00:00:00Z',
    deepExplanation: 'Algorithmic reinforcement monetizes biological threat responses through variable-ratio reinforcement schedules.',
  },
  hinglish: {
    id: 'algorithmic_reinforcement',
    categoryId: 'social_media_tech',
    slug: 'algorithmic-reinforcement-and-outrage',
    difficulty: 'intermediate',
    estimatedReadingMinutes: 5,
    scientificConsensusTier: 'established',
    sortWeight: 7,
    viewCount: 3820,
    shareCount: 420,
    bookmarkCount: 610,
    title: 'Algorithmic Reinforcement & Outrage Traps',
    subtitle: 'Social media apps gusse aur attention ko kaise cash karti hain',
    shortDescription: 'Social media algorithms ka user ko screen par roke rakhne ke liye gussa aur ladai-jhagde wala content serve karna.',
    oneLineExplanation: 'Algorithm sachai nahi dikhata; wo wahi dikhata hai jisse aapka angutha scroll karta rahe.',

    summary30s: 'Social media algorithms wo nahi dikhate jo sach ya shant hai—wo wo dikhate hain jisse aapko gussa aaye, kyunki outrage se aap screen par sabse zyada der tikte hain.',
    coreConcept: 'Jab aap kisi ladai ya controversy wale post par 3 second zyada rukte hain, to algorithm samajh jata hai ki aapko gussa dekhne me maza aa raha hai. Agle din aapka pura feed waisi hi ladaiyo se bhar jata hai.',
    summary60s: 'Social media companies paise tab kamati hain jab aap ghanton screen par ad dekhein. Human psychology ka sach hai ki hum shanti se zyada darr aur gusse ki taraf attract hote hain. Algorithms isi weakness ko monetize karte hain.',
    quickTakeaways: [
      'Algorithm ka goal aapka time churana hai, aapko smart banana nahi',
      'Gussa aur ladai wale posts par sabse zyada comments aate hain',
      'Roz aisa content dekhne se lagta hai ki duniya me sab log dushman hain',
    ],

    whyItHappens: 'Negativity bias. Hamare purkho ke liye khatre par dhyan dena zaroori tha taaki wo bach sakein. Algorithm isi instinct ka faida uthata hai.',
    evolutionaryMechanism: 'Jungli janwar ke aane ki khabar par dhyan dena zaroori tha; sukoon ki baatein survival nahi thi.',

    howItWorks: 'Cycle: (1) Aapne ek gusse wala video dekha; (2) Algorithm ne dwell time note kiya; (3) Usne 5 aur waisi videos bhej di; (4) Aapka blood pressure badha aur aap comment me ladne lage.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'flow_diagram',
      headline: 'Real Duniya vs Social Media Feed',
      description: 'Zameen ki sachai aur feed ke illusion ka farq.',
      analogySideA: { label: 'Real Life Baseline', detail: 'Zyadatar log normal hain, apna kaam kar rahe hain aur peaceful hain.' },
      analogySideB: { label: 'Algorithmic Feed', detail: 'Duniya ke sabse extreme 1% ladaku logo ko highlight karke dikhana.' },
    },

    researchSummary: 'PNAS ki 2017 research ne prove kiya ki jin posts me moral gussa hota hai, unke retweet hone ke chances 20% badh jate hain.',
    limitationsAndControversies: 'Sirf apps ko dosh dena kafi nahi; insaan khud bhi masala aur ladai dekhna chahta hai.',

    examples: [
      {
        id: 'ar_ex_01_hi',
        domain: 'social_media',
        displayOrder: 1,
        title: 'Comment Section Me 2 Ghante Ki Ladai',
        description: 'Ek unknown anonymous profile se ladte huye 2 ghante barbaad karna aur raat ko neend na aana.',
        takeaway: 'Gusse wale content par react karna algorithm ko aur invite karta hai.',
      },
    ],
    scenarios: [
      {
        id: 'ar_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'YouTube Shorts Ka Political Gussa Spiral',
        narrativeContext: 'Sumit ne lunch karte waqt ek political ladai ka YouTube Short dekha. Shaam tak uske pure feed par red arrows aur gusse wale thumbnails aane lage. Raat ke dinner table par Sumit apne papa se behes karne laga.',
        biasInAction: 'Sumit ko laga ki wo "news" dekh raha hai, jabki ek AI model uske cortisol aur gusse ko screen time me convert kar raha tha.',
        optimalResponse: 'Samjhein: "Yeh thumbnail mujhe gussa dilane ke liye design kiya gaya hai taaki mai 2 ads dekhu. Mai apna sukoon nahi bechunga." App band karein.',
        reflectionPrompt: 'Kya 30 minute Instagram ya X scroll karne ke baad aap fresh feel karte hain ya thaka hua aur irritable?',
      },
    ],

    howToRecognize: 'Jab phone chalate waqt daant pisne lagein, dil ki dhadkan tezz ho aur behes karne ka mann kare—to aap trap me hain.',
    whereYouEncounterIt: 'Twitter trends, Instagram Reels, YouTube Shorts, news channels.',

    commonMisconceptions: 'Myth: "Algorithm kisi specific party ko support kar raha hai." Fact: Algorithm ka koi dharam ya party nahi hai; uska ek hi bhagwan hai: "Watch Time".',

    howToRespond: 'Ladai wale post ko ignore karein aur turant aage scroll karein.',
    psychologicalDefenses: [
      { title: 'The Fast Flick Rule', instruction: 'Gusse wale video ko 0.5 second se pehle hata dein taaki view count na ho.' },
      { title: 'Not Interested Button', instruction: 'Sensational channels par "Don\'t recommend channel" dabayein.' },
      { title: 'Screen Time Boundaries', instruction: 'Raat ko 9 baje ke baad phone dusre kamre me rakh kar soyein.' },
    ],

    practiceQuestions: [
      {
        id: 'ar_q_01',
        difficulty: 'intermediate',
        questionFormat: 'scenario_analysis',
        displayOrder: 1,
        prompt: 'Social media apps gusse aur ladai wale content ko kyu promote karti hain?',
        scenarioText: 'Apps ke business model ko samjhein.',
        explanation: 'Gussa aur darr logo ko screen par roke rakhta hai, jisse company zyada ads bech kar revenue kama sake.',
        antidoteAdvice: 'Apne attention ko protect karein.',
        options: [
          {
            id: 'ar_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Taaki log educated banein.',
            feedbackText: 'Galat.',
          },
          {
            id: 'ar_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Kyunki gusse se screen time badhta hai aur companies zyada advertisements bech sakti hain.',
            feedbackText: 'Sahi! Outrage sabse profitable product hai.',
          },
          {
            id: 'ar_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Kyunki government aisa karne ko bolti hai.',
            feedbackText: 'Galat.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Agar aap agle 7 din ke liye algorithms wale apps band karke sirf kitabein padhein, to aapki mental health me kya farq aayega?',
    sections: [],
    references: [
      {
        id: 'ar_ref_01',
        title: 'Emotion shapes the diffusion of moralized content in social networks',
        citation: 'Brady et al. (2017). PNAS.',
        authors: 'William J. Brady et al.',
        publicationYear: 2017,
        journalOrPublisher: 'PNAS',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        doiOrUrl: 'https://doi.org/10.1073/pnas.1618923114',
        relevance: 'Moral-emotional words content viral hone ki probability 20% badha dete hain.',
        displayOrder: 1,
      },
      {
        id: 'ar_ref_02',
        title: 'A systematic review of online misinformation and social media polarization',
        citation: 'Lorenz-Spreen et al. (2023). Nature Human Behaviour.',
        authors: 'Philipp Lorenz-Spreen, Lisa Oswald, Stephan Lewandowsky, Ralph Hertwig',
        publicationYear: 2023,
        journalOrPublisher: 'Nature Human Behaviour',
        sourceType: 'systematic_review',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        doiOrUrl: 'https://doi.org/10.1038/s41562-023-01608-2',
        relevance: 'Social media algorithms kaise polarizing echo chambers banate hain iska systematic review.',
        displayOrder: 2,
      },
    ],
    tags: ['Social Media', 'Attention Economics', 'Algorithms'],
    relatedTopics: [],
    seoTitle: 'Social Media Algorithms Aur Gusse Ka Trap | Mentalab Mind',
    seoDescription: 'Samjhein kyu Instagram aur YouTube par ladai-jhagda zyada dikhta hai aur apne attention ko kaise bachayein.',
    canonicalUrl: '/mind/social-media-psychology/algorithmic-reinforcement-and-outrage',
    ogImageUrl: '/images/mind/algorithmic-reinforcement.png',
    publishedAt: '2026-09-18T00:00:00Z',
    deepExplanation: 'Algorithms human attention span aur threat perception ko monetize karte hain.',
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
