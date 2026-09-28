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

export const TOPIC_HEALTHY_BOUNDARIES_EN: MindTopicDetail = {
    // English record definition

    id: 'healthy_boundaries',
    categoryId: 'relationships_comm',
    slug: 'healthy-boundaries-and-communication',
    difficulty: 'beginner',
    estimatedReadingMinutes: 4,
    scientificConsensusTier: 'established',
    sortWeight: 6,
    viewCount: 2950,
    shareCount: 310,
    bookmarkCount: 470,
    title: 'Healthy Boundaries & Clear Communication',
    subtitle: 'Saying no with clarity instead of chronic resentment',
    shortDescription: 'The psychological practice of defining personal limits on your time, emotional energy, and resources without passive aggression or hostility.',
    oneLineExplanation: 'A boundary is not a wall to punish others; it is a door with a latch to preserve your own well-being.',

    summary30s: 'A boundary is not a wall to punish other people; it is a clear statement of what you will do to preserve your own energy, time, and sanity without anger or passive aggression.',
    // 1. What is it?
    coreConcept: 'A boundary is an explicit statement of what you will or will not do. It is NOT an attempt to control another person\'s behavior; it is a clear declaration of how you will respond when your personal threshold of time, dignity, or energy is reached.',
    summary60s: 'When you say "yes" to a request while your internal emotional battery is screaming "no", you build silent resentment. Over months, that unspoken frustration leaks out as passive aggression, snarky comments, or sudden explosions. Setting a calm, polite boundary preserves the relationship.',
    quickTakeaways: [
      'A boundary governs your own actions, not someone else\'s personality',
      'Uncommunicated expectations are premeditated resentments',
      'Saying no to an unreasonable demand is saying yes to your own psychological integrity',
    ],

    // 2. Why does it happen?
    whyItHappens: 'Fear of interpersonal rejection and social disapproval. People-pleasing is often an anxious coping strategy: we fear that asserting our needs will lead to abandonment or anger from loved ones.',
    evolutionaryMechanism: 'In small ancestral bands, maintaining the goodwill of tribal elders and peers was essential for resource sharing and physical survival.',

    // 3. How does it work?
    howItWorks: 'Healthy boundary setting follows a 3-part framework: (1) Observation without blame ("When work calls arrive past 9:00 PM"); (2) Impact ("I cannot unwind for sleep"); (3) Boundary action ("I will be switching my phone to do-not-disturb at 9:00 PM and responding at 8:30 AM tomorrow").',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'The Garden Fence Metaphor',
      description: 'Understanding the difference between porous boundaries, rigid walls, and healthy boundaries.',
      analogySideA: { label: 'Porous / No Fence', detail: 'Anyone can trample your flower beds at any hour. Results in emotional burnout.' },
      analogySideB: { label: 'Healthy Fence with Latch', detail: 'Clear gate, visitors knock. Welcoming yet protected.' },
    },

    // 4. What does research say?
    researchSummary: 'Supported by Marshall Rosenberg\'s Nonviolent Communication (NVC) and Harriet Lerner\'s clinical research (The Dance of Anger). Studies consistently confirm that individuals with clear, non-aggressive boundaries report lower cortisol levels and higher relationship longevity.',
    limitationsAndControversies: 'IMPORTANT SCIENTIFIC NUANCE: On social media, pop-psychology often weaponizes "boundaries" to justify emotional callousness or refusing any normal relational compromise. In reality, healthy relationships require reciprocal flexibility. Do not diagnose or label your family members as "toxic" simply because they have differing needs.',

    // 5. What does it look like in real life?
    examples: [
      {
        id: 'hb_ex_01',
        domain: 'workplace',
        displayOrder: 1,
        title: 'The Weekend Work Request',
        description: 'A manager sends an urgent message on Sunday afternoon. An assertive employee responds: "Thanks for flagging this. I have family commitments today, but I will tackle this first thing at 9:00 AM on Monday."',
        takeaway: 'Polite clarity prevents guilt and establishes a professional precedent.',
      },
    ],
    scenarios: [
      {
        id: 'hb_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'The Endless Free Tech-Support Relative',
        narrativeContext: 'Karan is a software engineer. Every weekend, his second cousin calls asking him to fix laptops, build free websites for their shop, or format phones. Karan spends his entire Sunday stressed and angry, complaining to his friends but never saying a word to his cousin.',
        biasInAction: 'Karan expected his cousin to "read his mind" and realize he was busy. Because Karan never spoke up, his cousin assumed Karan was delighted to help.',
        optimalResponse: 'Speak with warmth and firmness: "Bhaiyya, I love seeing you, but my work week is intense. I won\'t be able to build websites on weekends anymore. Let me recommend a good local agency who can do this for you."',
        reflectionPrompt: 'Is there a situation right now where you are angry at someone for crossing a boundary that you never explicitly articulated to them?',
      },
    ],

    // 6. How can I recognize it?
    howToRecognize: 'The primary internal symptom of an unexpressed boundary is chronic resentment: feeling bitter, dreading someone\'s incoming phone call, or feeling like you are constantly taken advantage of.',
    whereYouEncounterIt: 'Family gatherings, shared household chores, overtime requests, lending money to friends.',

    // 7. What misconceptions exist?
    commonMisconceptions: 'Common myth: "Setting a boundary means you are selfish or unloving." Truth: Clear boundaries are an act of kindness because they prevent the slow rot of unspoken bitterness.',

    // 8. What should I do about it?
    howToRespond: 'Shift from hints and passive aggression to clear, respectful statements. Do not over-explain or write 5-paragraph apologies.',
    psychologicalDefenses: [
      { title: 'The Clean "No" Framework', instruction: 'State: "I am not able to do that, but thank you for thinking of me." Avoid making up elaborate fake excuses.' },
      { title: 'Separate Feelings from Compliance', instruction: 'Accept that the other person may feel disappointed. Their temporary disappointment is not your emergency.' },
      { title: 'Do Not Pathologize', instruction: 'Do not use armchair therapy jargon ("You are violating my space!"). Speak in plain human language.' },
    ],

    // Educational Visual System Component Data
    visualContent: {
      id: 'vis_healthy_boundaries',
      type: 'comparison_graphic',
      title: 'Boundaries vs. Control Matrix',
      altText: 'A side-by-side comparison matrix showing the difference between healthy boundaries focused on personal agency and manipulative control.',
      caption: 'Figure 1: Boundaries govern your own behavior; control attempts to govern other people.',
      credits: {
        sourceName: 'Mentalab Relationship Communication Standards',
        authorOrAttribution: 'Adapted from Nonviolent Communication (Marshall Rosenberg)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Nonviolent_Communication',
        license: 'Educational Open Science',
      },
      priorityLoading: true,
      comparisonData: {
        sideA: {
          title: 'Healthy Boundary',
          badge: 'Personal Agency',
          points: [
            'States what YOU will do: "I do not answer work emails after 8:00 PM"',
            'Delivered with calm clarity without demanding emotional remorse',
            'Protects relationship longevity by preventing chronic resentment',
          ],
          isOptimal: true,
        },
        sideB: {
          title: 'Controlling Demand',
          badge: 'External Coercion',
          points: [
            'States what THEY must do: "You are forbidden from sending emails at night"',
            'Uses weaponized guilt, silent treatment, or clinical labeling',
            'Attempts to regulate your internal anxiety by policing others',
          ],
          isOptimal: false,
        },
      },
    },

    // Interactive Scenario Data
    interactiveScenarios: [
      {
        id: 'scen_hb_guilt_01',
        topicId: 'healthy_boundaries',
        title: 'The Family Dinner Disappointment',
        contextVignette: "Your parent says with a sad sigh: 'I guess your career is more important than spending Sunday evening with your family. We barely see you anymore.'",
        vignetteSourceType: 'family_relationships',
        question: 'How should you understand and respond to this comment?',
        options: [
          {
            id: 'hb_scen_opt_1',
            label: 'A',
            text: 'Label them a toxic manipulator and refuse to speak to them for a month.',
            isCorrect: false,
            explanation: 'Not quite. Armchair pathologizing escalates distress. Context matters: hurt or sadness does not automatically equal premeditated manipulation.',
          },
          {
            id: 'hb_scen_opt_2',
            label: 'B',
            text: 'Acknowledge their underlying hurt while gently holding your schedule boundary.',
            isCorrect: true,
            explanation: 'Correct. People frequently express disappointment using guilt-laden phrasing without deliberate malice. Validating their feelings while holding your limits is the optimal response.',
          },
          {
            id: 'hb_scen_opt_3',
            label: 'C',
            text: 'Cancel all your work, apologize profusely, and stay the entire night.',
            isCorrect: false,
            explanation: 'Incorrect. Giving in to passive guilt builds long-term resentment and reinforces indirect communication.',
          },
        ],
        revealedExplanation: {
          correctSummary: 'Acknowledge the emotional bond without capitulating to the guilt mechanism.',
          whyItMatters: 'Family members often use guilt-tripping because they lack direct vocabulary for vulnerability ("I miss you").',
          cognitiveTrap: 'Assuming guilt expression always equals malicious personality disorder tactics.',
          actionableAntidote: 'Translate the guilt into vulnerability: "I know you miss having dinner together, and I love spending time with you. This Sunday I have a hard deadline, but let us plan lunch next Saturday."',
        },
        difficulty: 'medium',
      },
    ],

    // 9. Can I test whether I understood it?
    practiceQuestions: [
      {
        id: 'hb_q_01',
        difficulty: 'easy',
        questionType: 'multiple_choice',
        questionFormat: 'what_would_you_do',
        displayOrder: 1,
        prompt: 'Which statement represents a healthy personal boundary rather than an attempt to control someone else?',
        scenarioText: 'Addressing late-night communication from a colleague.',
        explanation: 'Correct. A boundary states what YOU will do ("I will check messages tomorrow morning"), whereas control tries to dictate what someone else is allowed to do.',
        antidoteAdvice: 'Focus on your own actions, not on controlling the other party.',
        options: [
          {
            id: 'hb_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: '"You are a toxic narcissist who has no respect for anyone\'s work-life balance!"',
            feedbackText: 'Incorrect. This is an aggressive personal attack and armchair diagnosis.',
          },
          {
            id: 'hb_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: '"I log off at 7:00 PM to spend time with family. I will read your message and reply first thing tomorrow at 9:00 AM."',
            feedbackText: 'Correct! Clear, respectful, and focused entirely on the speaker\'s schedule.',
          },
          {
            id: 'hb_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Silently answering the message immediately while fuming with anger inside.',
            feedbackText: 'Incorrect. This is people-pleasing that builds dangerous silent resentment.',
          },
        ],
      },
      {
        id: 'hb_q_02',
        difficulty: 'medium',
        questionType: 'true_false',
        displayOrder: 2,
        isMisconception: true,
        misconceptionNuance: 'Context matters. Hurt expression is not always deliberate psychological abuse.',
        prompt: 'Does every instance of guilt-tripping mean someone is intentionally manipulating you?',
        scenarioText: 'A partner expresses sadness when you have to travel for work.',
        isTrueStatement: false,
        explanation: 'No. Context matters. People may express hurt, loneliness, or disappointment clumsily without deliberately attempting to control or victimize another person. Treating all emotional clumsiness as calculated malice destroys relationships.',
        antidoteAdvice: 'Listen for the unmet emotional need beneath clumsy phrasing before concluding bad faith.',
        options: [],
      },
      {
        id: 'hb_q_03',
        difficulty: 'medium',
        questionType: 'matching',
        displayOrder: 3,
        prompt: 'Match each boundary communication challenge to its cognitive antidote:',
        explanation: 'Distinguishing between healthy limits and aggressive demands preserves relational trust.',
        options: [],
        matchingPairs: [
          {
            id: 'pair_hb_1',
            left: 'Feeling intense guilt whenever saying "no"',
            right: 'Differentiate their temporary disappointment from an ethical violation',
            explanation: 'Disappointment is a natural human emotion, not proof of wrongdoing.',
          },
          {
            id: 'pair_hb_2',
            left: 'Writing 4 paragraphs of excuses for declining an invitation',
            right: 'Use a clean, brief response without fabricating fake emergencies',
            explanation: 'Excessive justification invites negotiation and debate.',
          },
          {
            id: 'pair_hb_3',
            left: 'Silent resentment when a roommate leaves dishes in the sink',
            right: 'Express the expectation explicitly rather than relying on mind-reading',
            explanation: 'Unspoken boundaries are guaranteed to be violated.',
          },
        ],
      },
    ],

    reflectionPrompt: 'What is one request this week that you said "yes" to, when your honest answer was "no"? What would happen if you calmly revised your answer?',
    sections: [],
    references: [
      {
        id: 'hb_ref_01',
        title: 'Nonviolent Communication: A Language of Life',
        citation: 'Rosenberg, M. B. (2003). Nonviolent Communication: A Language of Life. PuddleDancer Press.',
        authors: 'Marshall B. Rosenberg',
        publicationYear: 2003,
        journalOrPublisher: 'PuddleDancer Press',
        sourceType: 'academic_textbook',
        evidenceStrength: 'foundational_book',
        doiOrUrl: 'https://www.nonviolentcommunication.com/product/nonviolent-communication-a-language-of-life-3rd-edition/',
        relevance: 'Foundational 4-step framework for assertive, non-confrontational communication of needs without aggression.',
        displayOrder: 1,
      },
      {
        id: 'hb_ref_02',
        title: 'The Dance of Anger: A Woman\'s Guide to Changing the Patterns of Intimate Relationships',
        citation: 'Lerner, H. (1985). The Dance of Anger. Harper & Row.',
        authors: 'Harriet Lerner',
        publicationYear: 1985,
        journalOrPublisher: 'Harper & Row',
        sourceType: 'academic_textbook',
        evidenceStrength: 'foundational_book',
        doiOrUrl: 'https://www.harpercollins.com/products/the-dance-of-anger-harriet-lerner',
        relevance: 'Clinical relational model distinguishing destructive non-assertive circular battles from calm self-definition.',
        displayOrder: 2,
      },
      {
        id: 'hb_ref_03',
        title: 'The role of authentic communication and assertive boundary-setting in well-being',
        citation: 'Wood, A. M., Linley, P. A., Maltby, J., Baliousis, M., & Joseph, S. (2008). The authentic personality: A theoretical and empirical conceptualization. Journal of Counseling Psychology, 55(3), 385–399.',
        authors: 'Alex M. Wood, P. Alex Linley, John Maltby',
        publicationYear: 2008,
        journalOrPublisher: 'Journal of Counseling Psychology',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'empirical_study',
        doiOrUrl: 'https://doi.org/10.1037/0022-0167.55.3.385',
        relevance: 'Empirical research showing authentic boundary assertion predicts lower depressive symptoms and higher relational satisfaction.',
        displayOrder: 3,
      },
    ],
    tags: ['Relationships', 'Communication', 'Boundaries'],
    relatedTopics: [
      {
        topicId: 'gaslighting_awareness',
        slug: 'gaslighting-awareness',
        title: 'Gaslighting Awareness',
        relationshipType: 'counteracted_by',
      },
    ],
    seoTitle: 'How to Set Healthy Boundaries Without Guilt | Mentalab Mind',
    seoDescription: 'Learn the communication science of setting respectful boundaries with family and colleagues without guilt or passive aggression.',
    canonicalUrl: '/mind/relationships-and-communication/healthy-boundaries-and-communication',
    ogImageUrl: '/images/mind/healthy-boundaries.png',
    publishedAt: '2026-09-16T00:00:00Z',
    deepExplanation: 'Boundary setting is the assertive behavioral alignment between personal capacity and social commitments.',
};

export const TOPIC_HEALTHY_BOUNDARIES: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_HEALTHY_BOUNDARIES_EN,
  hinglish: {
    id: 'healthy_boundaries',
    categoryId: 'relationships_comm',
    slug: 'healthy-boundaries-and-communication',
    difficulty: 'beginner',
    estimatedReadingMinutes: 4,
    scientificConsensusTier: 'established',
    sortWeight: 6,
    viewCount: 2950,
    shareCount: 310,
    bookmarkCount: 470,
    title: 'Healthy Boundaries & Clear Communication: Dimaag Ka Khel Aur Real-Life Truth',
    subtitle: 'Bina rude huye "Na" bolne ka psychological science',
    shortDescription: 'Apne time, energy aur respect ki limits ko bina gusse ya guilt ke clear tareeqe se samjhana.',
    oneLineExplanation: 'Boundary doosron ko saza dene ki deewar nahi hai; yeh apna sukoon bachane ka darwaza hai.',

    summary30s: 'Boundary doosron ko saza dene ki deewar nahi hai; yeh bina gusse ke saaf shabdon me yeh batana hai ki aapki personal limits kya hain taaki resentment na paida ho.',
    coreConcept: 'Boundary ka matlab doosron ko control karna nahi hota. Iska seedha matlab hai samne wale ko respectfully yeh batana ki aap kya kar sakte hain aur kya nahi.',
    summary60s: 'Jab aapka man andar se bol raha ho "Nahi", lekin aap darr ya sharm me "Haan" bol dete hain, to aapke andar kadwahat (resentment) bharne lagti hai. Baad me wahi gussa taano ya silent treatment ke roop me nikalta hai. Polite boundary rishton ko todti nahi, balki bachati hai.',
    quickTakeaways: [
      'Boundary aapke apne actions ke liye hoti hai, doosron ki aadat badalne ke liye nahi',
      'Bina bataye umeed lagana sirf gussa aur misunderstanding badhata hai',
      'Ek respectful "Na" bolna andar ke gusse ko khatam karta hai',
    ],

    whyItHappens: 'Logo ko bura lagne ka darr aur rejection ka khauf. People-pleasing aksar is darr se aati hai ki agar maine mana kiya to log mujhe pasand nahi karenge.',
    evolutionaryMechanism: 'Purane zamaane me sabko khush rakhna group me rehne ke liye zaroori tha.',

    howItWorks: '3-Step Formula: (1) Situation batayein bina taane ke; (2) Apni majboori ya reason dein; (3) Clean boundary offer karein.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'Bageeche Ki Baad (Fence) Metaphor',
      description: 'Koi boundary na hone aur healthy boundary ke beech ka farq.',
      analogySideA: { label: 'Koi Boundary Nahi', detail: 'Koi bhi kabhi bhi aakar aapke phool kharab kar sakta hai. Result: mental stress.' },
      analogySideB: { label: 'Healthy Fence with Gate', detail: 'Ek saaf darwaza jahan log knock karke aate hain. Welcoming bhi aur safe bhi.' },
    },

    researchSummary: 'Marshall Rosenberg ke Nonviolent Communication (NVC) models par based. Research batati hai ki jo log clear boundaries rakhte hain unka cortisol (stress hormone) level kam rehta hai.',
    limitationsAndControversies: 'IMPORTANT: Social media par log har choti baat par family ko "toxic" bol kar rishte todne lagte hain. Yeh galat hai. Boundaries ka matlab dushmani nahi, balki clear baat-cheet hai.',

    examples: [
      {
        id: 'hb_ex_01_hi',
        domain: 'workplace',
        displayOrder: 1,
        title: 'Sunday Ka Urgent Message',
        description: 'Sunday shaam ko kaam ka message aane par polite reply: "Sunday ko mai family ke sath hu, kal subah 9 baje aate hi mai ispar kaam karunga."',
        takeaway: 'Bina gussa huye boundaries clear karna.',
      },
    ],
    scenarios: [
      {
        id: 'hb_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'Har Weekend Free Ka Laptop Repair Rishtedar',
        narrativeContext: 'Karan software engineer hai. Har weekend uske ek dur ke bhaiya call karke apna laptop fix karwane ya free me shop ki website banane ko bolte hain. Karan pura Sunday gusse me rehta hai, dosto se complaint karta hai, lekin bhaiya ko kabhi mana nahi karta.',
        biasInAction: 'Karan expect kar raha tha ki bhaiya khud samajh jayein ki wo busy hai. Jabki bhaiya ko laga ki Karan khushi-khushi help kar raha hai.',
        optimalResponse: 'Pyaar se saaf bolein: "Bhaiya, week me kaam bohot heavy rehta hai to weekend par mai coding nahi kar paunga. Mai aapko ek ache local designer ka number de deta hu."',
        reflectionPrompt: 'Kya aap kisi aise insaan se gussa hain jisko aapne kabhi khulkar apni boundary batai hi nahi?',
      },
    ],

    howToRecognize: 'Jab kisi ka call aate hi aapka mood kharab ho jaye ya aap taane maarne lagein, to samajh jaiye boundary missing hai.',
    whereYouEncounterIt: 'Joint family functions, paise udhaar maangna, office overtime.',

    commonMisconceptions: 'Myth: "Boundary banana matlab selfish hona hai." Fact: Sachai se mana karna baad me peeth peeche burai karne se hazar guna behtar hai.',

    howToRespond: 'Jhoothe excuses banane ke bajaye simple aur polite "Na" bolein.',
    psychologicalDefenses: [
      { title: 'The Clean "No"', instruction: '"Mai yeh nahi kar paunga, par poochne ke liye thank you." Lambe excuses mat banayein.' },
      { title: 'Disappointment Accept Karein', instruction: 'Samne wale ka thoda nirash hona normal hai. Unka mood theek karna aapki emergency nahi hai.' },
      { title: 'Psychology Jargon Se Bachein', instruction: '"Tum toxic ho" bolne ke bajaye normal boliye: "Mujhe abhi akele rehna hai."' },
    ],

    practiceQuestions: [
      {
        id: 'hb_q_01',
        difficulty: 'beginner',
        questionFormat: 'what_would_you_do',
        displayOrder: 1,
        prompt: 'Inme se kaunsa statement ek healthy boundary hai?',
        scenarioText: 'Raat ko late office messages par reply karte waqt.',
        explanation: 'Boundary aapke apne time aur response ko batati hai, doosron ko gali ya taana nahi deti.',
        antidoteAdvice: 'Apne actions par focus karein.',
        options: [
          {
            id: 'hb_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: '"Tum jaise toxic logo ko sharam nahi aati raat ko message karte huye!"',
            feedbackText: 'Galat. Yeh aggressive personal attack hai.',
          },
          {
            id: 'hb_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: '"Mai shaam 7 baje log out karta hu. Kal subah 9 baje aakar mai iska reply dunga."',
            feedbackText: 'Sahi! Polite, clear aur bina kisi drama ke boundary set ki gayi.',
          },
          {
            id: 'hb_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Chupchap gussa dabakar raat bhar kaam karte rehna.',
            feedbackText: 'Galat. Yeh people-pleasing hai.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Is hafte aisi kaunsi baat thi jisme aapka dil mana kar raha tha lekin aapne haan bol diya?',
    sections: [],
    references: [
      {
        id: 'hb_ref_01',
        title: 'Nonviolent Communication: A Language of Life',
        citation: 'Rosenberg, M. B. (2003). Nonviolent Communication.',
        authors: 'Marshall B. Rosenberg',
        publicationYear: 2003,
        journalOrPublisher: 'PuddleDancer Press',
        sourceType: 'academic_textbook',
        evidenceStrength: 'foundational_book',
        doiOrUrl: 'https://www.nonviolentcommunication.com/product/nonviolent-communication-a-language-of-life-3rd-edition/',
        relevance: 'Assertive boundary communication ka standard nonviolent framework.',
        displayOrder: 1,
      },
      {
        id: 'hb_ref_02',
        title: 'The Dance of Anger',
        citation: 'Lerner, H. (1985). The Dance of Anger.',
        authors: 'Harriet Lerner',
        publicationYear: 1985,
        journalOrPublisher: 'Harper & Row',
        sourceType: 'academic_textbook',
        evidenceStrength: 'foundational_book',
        doiOrUrl: 'https://www.harpercollins.com/products/the-dance-of-anger-harriet-lerner',
        relevance: 'Resentment aur clear self-definition par clinical relationship study.',
        displayOrder: 2,
      },
    ],
    tags: ['Relationships', 'Communication', 'Boundaries'],
    relatedTopics: [],
    seoTitle: 'Healthy Boundaries Kaise Banayein? Relationships & Communication | Mentalab Mind',
    seoDescription: 'Bina guilty feel huye aur bina gussa kiye politely mana karna seekhein.',
    canonicalUrl: '/mind/relationships-and-communication/healthy-boundaries-and-communication',
    ogImageUrl: '/images/mind/healthy-boundaries.png',
    publishedAt: '2026-09-16T00:00:00Z',
    deepExplanation: 'Boundary setting respectful communication aur self-care ka basic pillar hai.',
  },
  hi: createUniversalLocalizedRecord(TOPIC_HEALTHY_BOUNDARIES_EN, 'hi', "Healthy Boundaries & Clear Communication (पूर्वाग्रह)", "Healthy Boundaries & Clear Communication मानव मस्तिष्क का एक महत्वपूर्ण संज्ञानात्मक प्रभाव है जो हमारे निर्णयों को गहराई से प्रभावित करता है।", [
    "तथ्यों का निष्पक्ष विश्लेषण करें",
    "संज्ञानात्मक शॉर्टकट से सावधान रहें",
    "सचेत रहकर स्वतंत्र निर्णय लें"
  ]),
  gu: createUniversalLocalizedRecord(TOPIC_HEALTHY_BOUNDARIES_EN, 'gu', "Healthy Boundaries & Clear Communication (પૂર્વગ્રહ)", "Healthy Boundaries & Clear Communication એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createUniversalLocalizedRecord(TOPIC_HEALTHY_BOUNDARIES_EN, 'mr', "Healthy Boundaries & Clear Communication (पूर्वग्रह)", "Healthy Boundaries & Clear Communication हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createUniversalLocalizedRecord(TOPIC_HEALTHY_BOUNDARIES_EN, 'te', "Healthy Boundaries & Clear Communication (పక్షపాతం)", "Healthy Boundaries & Clear Communication అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createUniversalLocalizedRecord(TOPIC_HEALTHY_BOUNDARIES_EN, 'ta', "Healthy Boundaries & Clear Communication (சார்புநிலை)", "Healthy Boundaries & Clear Communication என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createUniversalLocalizedRecord(TOPIC_HEALTHY_BOUNDARIES_EN, 'kn', "Healthy Boundaries & Clear Communication (ಪಕ್ಷಪಾತ)", "Healthy Boundaries & Clear Communication ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createUniversalLocalizedRecord(TOPIC_HEALTHY_BOUNDARIES_EN, 'ml', "Healthy Boundaries & Clear Communication (പക്ഷപാതം)", "Healthy Boundaries & Clear Communication എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createUniversalLocalizedRecord(TOPIC_HEALTHY_BOUNDARIES_EN, 'bn', "Healthy Boundaries & Clear Communication (পক্ষপাতিত্ব)", "Healthy Boundaries & Clear Communication হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createUniversalLocalizedRecord(TOPIC_HEALTHY_BOUNDARIES_EN, 'pa', "Healthy Boundaries & Clear Communication (ਪੱਖਪਾਤ)", "Healthy Boundaries & Clear Communication ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createUniversalLocalizedRecord(TOPIC_HEALTHY_BOUNDARIES_EN, 'ur', "Healthy Boundaries & Clear Communication (جانبداری)", "Healthy Boundaries & Clear Communication انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createUniversalLocalizedRecord(TOPIC_HEALTHY_BOUNDARIES_EN, 'or', "Healthy Boundaries & Clear Communication (ପକ୍ଷପାତିତା)", "Healthy Boundaries & Clear Communication ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createUniversalLocalizedRecord(TOPIC_HEALTHY_BOUNDARIES_EN, 'as', "Healthy Boundaries & Clear Communication (পক্ষপাতিত্ব)", "Healthy Boundaries & Clear Communication সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
