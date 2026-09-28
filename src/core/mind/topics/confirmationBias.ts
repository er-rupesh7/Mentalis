import { MindTopicDetail, MindLanguageCode } from '../types';

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_CONFIRMATION_BIAS_EN,
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

export const TOPIC_CONFIRMATION_BIAS_EN: MindTopicDetail = {
    id: 'confirmation_bias',
    categoryId: 'cognitive_biases',
    slug: 'confirmation-bias',
    difficulty: 'beginner',
    estimatedReadingMinutes: 4,
    scientificConsensusTier: 'established',
    sortWeight: 1,
    viewCount: 1840,
    shareCount: 124,
    bookmarkCount: 312,
    title: 'Confirmation Bias',
    subtitle: 'Why we seek what we already believe',
    shortDescription: 'The natural psychological tendency to search for, interpret, and recall information that confirms preexisting beliefs while dismissing contradictory evidence.',
    oneLineExplanation: 'The brain acting like a defense lawyer rather than an impartial judge.',

    summary30s: 'Your brain naturally acts like a defense lawyer instead of an impartial judge: it hunts for facts that confirm what you already believe, while ignoring or attacking facts that contradict you.',
    // 1. What is it?
    coreConcept: 'Confirmation bias is a universal cognitive shortcut where our minds give disproportionate weight to evidence that agrees with our existing opinions, while aggressively scrutinizing or ignoring counter-evidence.',
    summary60s: 'Imagine your brain acting like a defense lawyer rather than an impartial judge: when you form an opinion—about a stock, a diet, or a person—your brain feels emotional comfort when finding supportive proof. Counter-arguments trigger subtle anxiety (cognitive dissonance). Consequently, your search queries, news feeds, and memory select for affirmation rather than objective truth.',
    quickTakeaways: [
      'We search for supportive evidence and overlook disconfirming facts',
      'Neutral or ambiguous data is automatically interpreted in our favor',
      'Higher intelligence does not prevent it; it often makes rationalizations more sophisticated',
    ],

    // 2. Why does it happen?
    whyItHappens: 'Cognitive economy and identity preservation. Changing a core belief requires massive metabolic energy and destabilizes our sense of consistency. Accepting contradictory evidence feels threatening to the self.',
    evolutionaryMechanism: 'In prehistoric hunter-gatherer bands, tribal solidarity was vital for physical survival. Constantly questioning shared group beliefs risked social ostracization. Group consensus was prioritized over individual scientific accuracy.',

    // 3. How does it work?
    howItWorks: 'It operates across three distinct stages: (1) Selective Search—only typing queries that confirm your view; (2) Selective Interpretation—reading ambiguous data as conclusive proof; (3) Selective Recall—vividly remembering times your hypothesis worked while forgetting failures.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'The Mind as an Impartial Judge vs. Defense Lawyer',
      description: 'An objective thinker gathers all evidence before verdict; a biased mind begins with the verdict and gathers only supportive exhibits.',
      analogySideA: { label: 'Scientific Mind (Judge)', detail: 'Looks for evidence that could falsify the claim.' },
      analogySideB: { label: 'Biased Mind (Lawyer)', detail: 'Discredits opposing witnesses and highlights favorable anecdotes.' },
    },

    // 4. What does research say & limitations?
    researchSummary: 'First formally documented by British psychologist Peter Wason in 1960 through the 2-4-6 rule discovery task, where subjects repeatedly tested hypotheses that confirmed their guess instead of attempting falsification.',
    limitationsAndControversies: 'Confirmation bias is often exaggerated online as "deliberate malice" or "stupidity". In truth, it is an involuntary heuristic present in all humans. Under familiar, non-ego-driven circumstances, people do correct hypotheses when feedback is immediate and unambiguous.',

    // 5. What does it look like in real life?
    examples: [
      {
        id: 'cb_ex_01',
        domain: 'personal_finance',
        displayOrder: 1,
        title: 'The Sinking Stock Trap',
        description: 'An investor buys shares of a tech startup that drop 35%. Instead of reviewing quarterly revenue deficits, they search Reddit and YouTube for bullish hype videos to soothe their anxiety.',
        takeaway: 'Seeking reassurance rather than rigorous risk calculation leads to capital destruction.',
      },
      {
        id: 'cb_ex_02',
        domain: 'workplace',
        displayOrder: 2,
        title: 'Project Performance Evaluation',
        description: 'A manager convinced that an employee is lazy notices every 5-minute late arrival, but fails to register the late nights the employee worked to meet a deadline.',
        takeaway: 'Selective attention reinforces inaccurate team assessments.',
      },
    ],
    scenarios: [
      {
        id: 'cb_scenario_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'The WhatsApp Medical Miracle',
        narrativeContext: 'Ramesh uncle firmly believes that drinking hot water with lemon and turmeric at 5:00 AM completely cures hypertension. Whenever an unverified YouTube video or WhatsApp forward repeats this claim, he immediately forwards it to his family group with the caption: "See, modern doctors will never tell you this!"',
        biasInAction: 'When a consulting cardiologist presents clinical trials proving turmeric does not replace blood pressure medication, Ramesh dismisses the doctor as "a greedy agent of big pharma" while continuing to believe anonymous forwarded texts.',
        optimalResponse: 'Apply the principle of falsification: before trusting medical claims, check whether double-blind clinical trials corroborate the finding or if you are only welcoming the message because it offers an easy, comforting answer.',
        reflectionPrompt: 'Have you ever dismissed professional criticism of an idea simply because you liked the idea too much?',
      },
    ],

    // 6. How can I recognize it?
    howToRecognize: 'Notice internal emotional signs: A sudden surge of satisfaction when reading an article that attacks someone you dislike, or a sudden flare of annoyance and instinct to mock an article that challenges your viewpoint.',
    whereYouEncounterIt: 'Algorithmic feeds, WhatsApp forwarding chains, financial stock speculation, and political discourse.',

    // 7. What misconceptions exist?
    commonMisconceptions: 'Common myth: "Only gullible, uneducated people suffer from confirmation bias." Reality: Studies consistently show higher cognitive ability often equips individuals with more sophisticated tools to rationalize their preexisting biases.',

    // 8. What should I do about it?
    howToRespond: 'Shift from verification mindset to falsification mindset. Instead of asking "What proves I am right?", deliberately ask "What evidence would prove I am completely wrong?"',
    psychologicalDefenses: [
      { title: 'Red Teaming', instruction: 'Force yourself to write 3 strong, persuasive reasons why your current stance could be completely wrong.' },
      { title: 'Falsification Pre-Commitment', instruction: 'Specify in advance: "What specific metric or evidence would make me abandon this belief?"' },
      { title: 'Separate Ego from Hypotheses', instruction: 'Treat beliefs as testable prototypes rather than core parts of your identity.' },
    ],

    // 9. Can I test whether I understood it?
    practiceQuestions: [
      {
        id: 'cb_q_01',
        difficulty: 'beginner',
        questionFormat: 'identify_bias',
        displayOrder: 1,
        prompt: 'Which of the following investment behaviors is the clearest sign of Confirmation Bias?',
        scenarioText: 'A retail investor buys shares in Company Z after reading a positive article.',
        explanation: 'Actively seeking out only cheerleading groups while blocking or dismissing critics who highlight balance sheet debt is the textbook manifestation of confirmation bias.',
        antidoteAdvice: 'Before purchasing or holding an asset, read the strongest available bear case written by reputable analysts.',
        options: [
          {
            id: 'cb_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Reading both the bull-case and bear-case quarterly reports before committing capital.',
            feedbackText: 'Incorrect. This is an objective, balanced evaluation that counteracts confirmation bias.',
          },
          {
            id: 'cb_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Joining only social groups that praise Company Z, while unfollowing anyone who mentions company debt.',
            feedbackText: 'Correct! This actively filters out counter-evidence to protect the investor\'s preexisting optimism.',
          },
          {
            id: 'cb_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Setting an automated stop-loss order to sell if the price drops below a disciplined threshold.',
            feedbackText: 'Incorrect. A pre-committed automated stop-loss is a rational risk management tool.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Think of one strong belief you hold today. What single piece of evidence, if discovered tomorrow, would make you change your mind?',
    sections: [],
    references: [
      {
        id: 'cb_ref_01',
        citation: 'Wason, P. C. (1960). On the failure to eliminate hypotheses in a conceptual task. Quarterly Journal of Experimental Psychology, 12(3), 129–140.',
        authors: 'Peter C. Wason',
        publicationYear: 1960,
        journalOrPublisher: 'Quarterly Journal of Experimental Psychology',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        displayOrder: 1,
      },
      {
        id: 'cb_ref_02',
        citation: 'Nickerson, R. S. (1998). Confirmation bias: A ubiquitous phenomenon in many guises. Review of General Psychology, 2(2), 175–220.',
        authors: 'Raymond S. Nickerson',
        publicationYear: 1998,
        journalOrPublisher: 'Review of General Psychology',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        displayOrder: 2,
      },
      {
        id: 'cb_ref_03',
        citation: 'Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.',
        authors: 'Daniel Kahneman',
        publicationYear: 2011,
        journalOrPublisher: 'Farrar, Straus and Giroux',
        evidenceStrength: 'foundational_book',
        displayOrder: 3,
      },
    ],
    tags: ['Cognitive Bias', 'Decision Making', 'Critical Thinking'],
    relatedTopics: [
      {
        topicId: 'anchoring_effect',
        slug: 'anchoring-effect',
        title: 'Anchoring Effect',
        relationshipType: 'amplified_by',
      },
      {
        topicId: 'social_proof',
        slug: 'social-proof',
        title: 'Social Proof',
        relationshipType: 'general_related',
      },
    ],
    seoTitle: 'Confirmation Bias: What It Is, How It Works & Real-Life Examples | Mentalab Mind',
    seoDescription: 'Understand Confirmation Bias like a defense lawyer defending their client: how selective search distorts decisions and 3 peer-reviewed cognitive defenses to think independently.',
    canonicalUrl: '/mind/cognitive-biases/confirmation-bias',
    ogImageUrl: '/images/mind/confirmation-bias.png',
    publishedAt: '2026-09-01T00:00:00Z',
    deepExplanation: 'First formally identified in cognitive psychology by Peter Wason in 1960, confirmation bias occurs across three distinct cognitive dimensions: selective search, selective interpretation, and selective recall.',
};

export const TOPIC_CONFIRMATION_BIAS_HINGLISH: MindTopicDetail = {
    id: 'confirmation_bias',
    categoryId: 'cognitive_biases',
    slug: 'confirmation-bias',
    difficulty: 'beginner',
    estimatedReadingMinutes: 4,
    scientificConsensusTier: 'established',
    sortWeight: 1,
    viewCount: 1840,
    shareCount: 124,
    bookmarkCount: 312,
    title: 'Confirmation Bias',
    subtitle: 'Hum wahi kyu dhundte hain jo hum pehle se mante hain?',
    shortDescription: 'Apne pehle se bane vichaaron ko sahi sabit karne wali information ko chunna aur opposite proofs ko ignore kar dena.',
    oneLineExplanation: 'Dimaag ka impartial judge banne ke bajaye ek defense lawyer ki tarah act karna.',

    summary30s: 'Aapka dimaag ek impartial judge ki tarah nahi, balki ek defense lawyer (vakeel) ki tarah sochta hai: wo un baaton ko sach manta hai jo aapki purani soch se milti hain, aur ulti baaton ko ignore kar deta hai.',
    coreConcept: 'Confirmation bias hamare dimaag ki natural tendency hai jisme hum apne pasandeeda vicharon ke favour me data ikattha karte hain aur contrary facts ko dekhkar ignore kar dete hain.',
    summary60s: 'Dimaag ka impartial judge banne ke bajaye ek defense lawyer ki tarah act karna: Confirmation bias tab hota hai jab hamara dimaag sachai janne ke bajaye apne belief ko sahi sabit karne me lag jata hai. Hum wahi videos, articles aur WhatsApp forwards dekhte hain jo hamari baat ko support karein, jabki counter-evidence aate hi hum excuse dhundte hain.',
    quickTakeaways: [
      'Apne belief ko support karne wali baat par turant vishwas ho jata hai',
      'Opposite evidence dekhkar dimaag excuse ya kamiya dhundne lagta hai',
      'Social media algorithms hamari is aadat ko aur zyada amplify kar dete hain',
    ],

    whyItHappens: 'Dimaag ka energy bachane ka tareeqa aur cognitive dissonance (mental stress) se bachne ki koshish. Naye data ke sath core belief badalna dimaag ke liye bohot exhausting hota hai.',
    evolutionaryMechanism: 'Purane zamaane me tribal groups me sabke sath agree karna survival ke liye zaroori tha. Group se alag opinion rakhne par tribe se bahar nikal diye jane ka darr rehta tha.',

    howItWorks: 'Yeh teen levels par kaam karta hai: (1) Selective Search—sirf aise sawaal puchna jo aapki baat verify karein; (2) Selective Interpretation—neutral data ko bhi apne favour me dekhna; (3) Selective Memory—favourable results yaad rakhna aur fails bhool jana.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'Dimaag: Impartial Judge vs Defense Lawyer',
      description: 'Ek impartial judge pehle sare proofs dekhta hai; ek lawyer pehle verdict tay karta hai aur sirf supportive batoon ko court me pesh karta hai.',
      analogySideA: { label: 'Scientific Mind (Judge)', detail: 'Aise facts dhundta hai jo uski baat ko galat prove kar sakein.' },
      analogySideB: { label: 'Biased Mind (Lawyer)', detail: 'Opposite proof ko fake ya bikau bol kar dismiss karta hai.' },
    },

    researchSummary: '1960 me cognitive psychologist Peter Wason ne 2-4-6 rule experiment se prove kiya ki log hypothesis test karte waqt kabhi falsification nahi karte, sirf confirmation dhundte hain.',
    limitationsAndControversies: 'Online log ise sirf "bewakoofi" ya "malice" bolte hain, jabki research dikhati hai ki yeh har insaan ka automatic cognitive reflex hai. Clear feedback milne par log isse overcome kar sakte hain.',

    examples: [
      {
        id: 'cb_ex_01_hi',
        domain: 'personal_finance',
        displayOrder: 1,
        title: 'Doobte Huye Stock Me Hope',
        description: 'Ek investor ne ek stock liya jo 35% gir gaya. Loss cut karne ke bajaye wo YouTube par aise videos dhund raha hai jo stock ke 1000% jump karne ka daawa karein.',
        takeaway: 'Reality accept karne ke bajaye false reassurance dhundna financial loss karwata hai.',
      },
    ],
    scenarios: [
      {
        id: 'cb_scenario_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'WhatsApp Par Aayi "Desi Miracle" Dawa',
        narrativeContext: 'Ramesh Uncle ka manna hai ki subah 5 baje neem-haldi ka paani peene se high blood pressure 100% theek ho jata hai. Jab bhi unhe YouTube par koi video ya WhatsApp forward milta hai, wo turant family group me bhejte hain: "Dekho, sab doctors chhupa rahe the!"',
        biasInAction: 'Jab ek cardiologist unhe clinical research dikhate hain ki yeh blood pressure medication ka substitute nahi hai, to Ramesh Uncle bolte hain: "Doctor toh apna fayda dekhega hi", aur scientific research ko ignore kar dete hain.',
        optimalResponse: 'Pehle sochiye: Kya aap is information ko isliye maan rahe hain kyunki yeh sach hai, ya isliye kyunki yeh aasan aur comforting lagti hai? Medical decisions hamesha verified clinical trials par lijiye.',
        reflectionPrompt: 'Kya aapne kabhi kisi important decision me isliye opposite advice reject ki kyunki aap already man bana chuke the?',
      },
    ],

    howToRecognize: 'Apne andar ka emotion notice karein: Jab kisi aisi news ko dekhkar turant maza aaye jo aapke opposite party ko galat bataye, ya jab contrary data dekhkar gussa aaye, to samjhein confirmation bias active hai.',
    whereYouEncounterIt: 'WhatsApp family groups, stock trading groups, health remedies aur elections ke time.',

    commonMisconceptions: 'Galat faimi: "Yeh sirf kam padhe-likhe logo ke sath hota hai." Sachai: Research batati hai ki zyada padhe-likhe log apne biases ko aur zyada intelligent logic se justify kar lete hain.',

    howToRespond: 'Apne aap se poochein: "Aisa kaun sa proof hai jisko dekhkar mai accept karunga ki mai galat tha?"',
    psychologicalDefenses: [
      { title: 'Red Teaming', instruction: 'Bada decision lene se pehle 3 genuine reasons likhein ki aapki baat galat kyu ho sakti hai.' },
      { title: 'Falsification Metric', instruction: 'Pehle se decide karein ki kaunse data par aap apna opinion change karenge.' },
      { title: 'Identity ko Belief se Alag Rakho', instruction: 'Opinions ko experiments samjhein, apni shaan ya ego nahi.' },
    ],

    practiceQuestions: [
      {
        id: 'cb_q_01',
        difficulty: 'beginner',
        questionFormat: 'identify_bias',
        displayOrder: 1,
        prompt: 'Inme se kaunsa investor behavior Confirmation Bias ka sabse bada example hai?',
        scenarioText: 'Ek investor ne ek article padh kar Company Z ke shares buy kiye.',
        explanation: 'Sirf aisi communities me rehna jo company ki taareef karein aur debt warning dene walo ko block karna confirmation bias ka clearest symptom hai.',
        antidoteAdvice: 'Kisi bhi stock ya asset me invest karne se pehle uski sabse strong bear-case (risk) report padhein.',
        options: [
          {
            id: 'cb_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Invest karne se pehle company ke positive aur negative dono financial reports dhyan se padhna.',
            feedbackText: 'Galat. Yeh balanced thinking hai jo confirmation bias ko rokti hai.',
          },
          {
            id: 'cb_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Sirf un Telegram/YouTube channels me rehna jo Company Z ki tareef karte hain, aur loss ki baat karne walo ko unfollow karna.',
            feedbackText: 'Sahi! Yeh counter-evidence ko ignore karke apne belief ko force feed karna hai.',
          },
          {
            id: 'cb_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Pehle se ek stop-loss set karna taaki stock girne par automatic sell ho jaye.',
            feedbackText: 'Galat. Yeh ek rational risk management strategy hai.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Aapka koi aisa belief jisme aap 100% sure hain: agar kal subah koi scientific research use galat prove kare, kya aap apna mind badal payenge?',
    sections: [],
    references: [
      {
        id: 'cb_ref_01',
        citation: 'Wason, P. C. (1960). On the failure to eliminate hypotheses in a conceptual task. Quarterly Journal of Experimental Psychology, 12(3), 129–140.',
        authors: 'Peter C. Wason',
        publicationYear: 1960,
        journalOrPublisher: 'Quarterly Journal of Experimental Psychology',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        displayOrder: 1,
      },
    ],
    tags: ['Cognitive Bias', 'Decision Making', 'Critical Thinking'],
    relatedTopics: [
      {
        topicId: 'anchoring_effect',
        slug: 'anchoring-effect',
        title: 'Anchoring Effect',
        relationshipType: 'amplified_by',
      },
    ],
    seoTitle: 'Confirmation Bias Kya Hai? Scientific Explanation & Defenses | Mentalab Mind',
    seoDescription: 'Confirmation bias kyu hota hai aur kaise WhatsApp forwards aur social media par hum galat decisions lete hain. Seekhein 3 mental defenses.',
    canonicalUrl: '/mind/cognitive-biases/confirmation-bias',
    ogImageUrl: '/images/mind/confirmation-bias.png',
    publishedAt: '2026-09-01T00:00:00Z',
    deepExplanation: 'Confirmation bias teen tareeqo se kaam karta hai: Selective Search, Selective Interpretation, aur Selective Memory.',
};

export const TOPIC_CONFIRMATION_BIAS_HI: MindTopicDetail = {
    id: 'confirmation_bias',
    categoryId: 'cognitive_biases',
    slug: 'confirmation-bias',
    difficulty: 'beginner',
    estimatedReadingMinutes: 4,
    scientificConsensusTier: 'established',
    sortWeight: 1,
    viewCount: 1840,
    shareCount: 124,
    bookmarkCount: 312,
    title: 'Confirmation Bias (कन्फर्मेशन बायस)',
    subtitle: 'हम वही क्यों ढूँढते हैं जो हम पहले से मानते हैं?',
    shortDescription: 'अपने पहले से बने विचारों को सही साबित करने वाली जानकारी को चुनना और विपरीत प्रमाणों को अनदेखा कर देना।',
    oneLineExplanation: 'दिमाग का निष्पक्ष जज बनने के बजाय एक डिफेंस वकील की तरह काम करना।',

    summary30s: 'हमारा दिमाग निष्पक्ष जज बनने के बजाय एक डिफेंस वकील की तरह काम करता है: यह उन बातों को ढूँढता है जो आपके पहले से बने यकीन को सही ठहराएँ, और विरोधी सबूतों को खारिज कर देता है।',
    coreConcept: 'Confirmation bias एक स्वाभाविक कॉग्निटिव शॉर्टकट है जहाँ हमारा दिमाग उन तथ्यों को ज्यादा तवज्जो देता है जो हमारे मौजूदा विचारों से मेल खाते हैं, जबकि विपरीत प्रमाणों को या तो नजरअंदाज कर देता है या उन पर अत्यधिक संदेह करता है।',
    summary60s: 'सोचिए जब आप कोई राय बना लेते हैं—चाहे शेयर बाजार, डाइट या किसी व्यक्ति के बारे में—तो आपका दिमाग उसे सही साबित करने वाली बात सुनकर सुकून महसूस करता है। विरोधी बातें हल्का मानसिक तनाव (cognitive dissonance) पैदा करती हैं। इसलिए हमारी सर्च हिस्ट्री और बातचीत सच ढूँढने के बजाय खुद को सही साबित करने में लग जाती है।',
    quickTakeaways: [
      'हम अपने विचारों का समर्थन करने वाले सबूत ढूँढते हैं और विपरीत तथ्यों को अनदेखा करते हैं',
      'तटस्थ या अस्पष्ट जानकारी को भी हम अपने पक्ष में मान लेते हैं',
      'ज्यादा बुद्धिमान होना इससे नहीं बचाता; अक्सर समझदार लोग अपने पक्षपातों को और चालाकी से सही ठहराते हैं',
    ],

    whyItHappens: 'मानसिक ऊर्जा की बचत (cognitive economy) और पहचान की रक्षा (identity preservation)। किसी बुनियादी यकीन को बदलना दिमाग के लिए बहुत थकाऊ होता है।',
    evolutionaryMechanism: 'प्रागैतिहासिक काल में कबीले की सहमति शारीरिक सुरक्षा के लिए अनिवार्य थी। हर नए डेटा पर विश्वास बदलने से कबीले से अलग होने का खतरा रहता था।',

    howItWorks: 'यह तीन मानसिक स्तरों पर काम करता है: Selective Search (केवल अपने पक्ष की बातें खोजना), Selective Interpretation (अस्पष्ट डेटा को अपने पक्ष में मानना), और Selective Recall (अपनी सफलताओं को याद रखना और गलतियों को भूल जाना)।',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'निष्पक्ष जज बनाम डिफेंस वकील',
      description: 'सच्चाई खोजने वाले दिमाग और सिर्फ खुद को सही साबित करने वाले दिमाग का अंतर।',
      analogySideA: { label: 'वैज्ञानिक सोच (जज)', detail: 'पहले सारे सबूत जुटाता है, फिर फैसला लेता है।' },
      analogySideB: { label: 'बायस्ड सोच (वकील)', detail: 'फैसला पहले से तय होता है, केवल समर्थन वाले सबूत ढूँढता है।' },
    },

    researchSummary: 'पीटर वासन (1960) ने 2-4-6 रूल डिस्कवरी टास्क के जरिए इसे औपचारिक रूप से साबित किया। उन्होंने दिखाया कि लोग अपने नियम को गलत साबित करने के बजाय केवल उसे कन्फर्म करने वाले नंबर टेस्ट करते हैं।',
    limitationsAndControversies: 'रिसर्च यह भी बताती है कि जब गलत निर्णय लेने पर तत्काल व्यक्तिगत नुकसान होता है (जैसे मेडिकल सर्जरी या जोखिम भरी ड्राइविंग), तब लोग ज्यादा निष्पक्ष होकर सोचते हैं।',

    examples: [
      {
        id: 'cb_ex_01',
        domain: 'health',
        displayOrder: 1,
        title: 'अवैज्ञानिक डाइट और नुस्खे',
        description: 'किसी नई डाइट पर यकीन करने वाला व्यक्ति केवल उन 2 लोगों के अनुभव सुनता है जिनका वजन घटा, और उन 10 लोगों को नजरअंदाज कर देता है जिन्हें कोई फायदा नहीं हुआ।',
        takeaway: 'सकारात्मक नतीजों पर ध्यान केंद्रित करना और विफलता को छुपाना।',
      },
      {
        id: 'cb_ex_02',
        domain: 'personal_finance',
        displayOrder: 2,
        title: 'शेयर बाजार और इन्वेस्टमेंट',
        description: 'शेयर खरीदने के बाद केवल कंपनी की तारीफ करने वाले वीडियो देखना और कर्ज़ की चेतावनी देने वाले एनालिस्ट को ब्लॉक कर देना।',
        takeaway: 'पैसों के नुकसान से बचने के लिए बियर-केस (जोखिम) रिपोर्ट पढ़ना जरूरी है।',
      },
    ],

    scenarios: [
      {
        id: 'cb000000-0000-0000-0000-000000000001',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'व्हाट्सएप का "देसी चमत्कारिक इलाज"',
        narrativeContext: 'रमेश अंकल का मानना है कि सुबह 5 बजे हल्दी-नीम का पानी पीने से हाई ब्लड प्रेशर पूरी तरह ठीक हो जाता है। जब भी उन्हें कोई ऐसा व्हाट्सएप फॉरवर्ड मिलता है, वे तुरंत परिवार के ग्रुप में भेजते हैं: "देखिए, डॉक्टर यह कभी नहीं बताएंगे!"',
        biasInAction: 'जब एक हृदय रोग विशेषज्ञ (cardiologist) उन्हें बताते हैं कि यह दवा का विकल्प नहीं है, तो रमेश अंकल कहते हैं कि "डॉक्टर तो अपनी कमाई सोचेंगे", और वैज्ञानिक रिसर्च को ठुकरा देते हैं।',
        optimalResponse: 'सोचिए: क्या आप इस बात पर इसलिए यकीन कर रहे हैं क्योंकि यह सच है, या इसलिए क्योंकि यह सुनने में आसान और सुकून देने वाली लगती है? मेडिकल फैसले हमेशा क्लिनिकल ट्रायल्स पर आधारित होने चाहिए।',
        reflectionPrompt: 'क्या आपने कभी किसी महत्वपूर्ण विषय में विरोधी सलाह इसलिए ठुकरा दी क्योंकि आपका मन पहले से बना हुआ था?',
      },
    ],

    howToRecognize: [
      'जब आप किसी खबर को देखते ही बिना चेक किए आगे शेयर कर देते हैं',
      'जब विरोधी विचार सुनते ही आपको अंदर से गुस्सा या चिढ़ होने लगती है',
      'जब आप केवल अपने जैसे विचार रखने वाले लोगों से ही बातचीत करते हैं',
    ],
    whereYouEncounterIt: 'सोशल मीडिया फीड्स, व्हाट्सएप फैमिली ग्रुप्स, निवेश के फैसले, और चुनाव से जुड़ी बहस में।',

    commonMisconceptions: 'भ्रम: यह केवल अनपढ़ या कम पढ़े-लिखे लोगों के साथ होता है। हकीकत: शोध दिखाता है कि उच्च बुद्धि वाले लोग अपने पक्षपातों को और जटिल तर्कों के साथ सही ठहरा लेते हैं।',

    howToRespond: 'जब भी किसी मुद्दे पर पक्का यकीन हो, खुद से पूछें: "ऐसा कौन सा सबूत होगा जिसके मिलने पर मैं अपनी राय बदल लूँगा?" अगर कोई सबूत आपकी राय नहीं बदल सकता, तो आप सोच नहीं रहे, सिर्फ यकीन कर रहे हैं।',
    psychologicalDefenses: [
      {
        title: 'रेड टीमिंग (Red Teaming)',
        instruction: 'बड़ा फैसला लेने से पहले कागज पर 3 मजबूत कारण लिखें कि आपका फैसला पूरी तरह गलत क्यों हो सकता है।',
      },
      {
        title: 'अहंकार को विचारों से अलग रखें',
        instruction: 'अपने विचारों को वैज्ञानिक परिकल्पना (hypotheses) समझें जिन्हें नए सबूत मिलने पर बदला जा सकता है।',
      },
      {
        title: 'गलत साबित होने का टेस्ट',
        instruction: 'खुद से पूछें: ऐसा कौन सा सबूत होगा जिसके मिलने पर मैं अपनी राय बदल लूँगा? यदि कोई सबूत राय नहीं बदल सकता, तो आप सोच नहीं रहे।',
      },
    ],

    practiceQuestions: [
      {
        id: 'cb000000-0000-0000-0000-000000000010',
        difficulty: 'intermediate',
        questionFormat: 'scenario_analysis',
        displayOrder: 1,
        prompt: 'इनमें से कौन सा निवेशक व्यवहार Confirmation Bias का सबसे स्पष्ट उदाहरण है?',
        scenarioText: 'एक खुदरा निवेशक किसी कंपनी के शेयर खरीदने के बाद रिसर्च कर रहा है।',
        explanation: 'केवल प्रशंसा करने वाले ग्रुप्स में रहना और चेतावनी देने वालों को ब्लॉक करना कन्फर्मेशन बायस का क्लासिक लक्षण है।',
        antidoteAdvice: 'निवेश करने से पहले हमेशा उस कंपनी की सबसे मजबूत जोखिम रिपोर्ट (bear case) पढ़ें।',
        options: [
          {
            id: 'cb000000-0000-0000-0000-000000000021',
            displayOrder: 1,
            isCorrect: false,
            optionText: 'निवेश करने से पहले कंपनी की तिमाही रिपोर्ट में फायदे और नुकसान दोनों की निष्पक्ष जाँच करना।',
            feedbackText: 'गलत। यह एक संतुलित और निष्पक्ष तरीका है जो पक्षपात को रोकता है।',
          },
          {
            id: 'cb000000-0000-0000-0000-000000000022',
            displayOrder: 2,
            isCorrect: true,
            optionText: 'केवल उन सोशल मीडिया ग्रुप्स में शामिल होना जो कंपनी की तारीफ करते हैं, और कर्ज की बात करने वालों को ब्लॉक करना।',
            feedbackText: 'सही! यह विरोधी सबूतों को जानबूझकर नजरअंदाज करके अपने पहले से बने विश्वास को बनाए रखने का प्रयास है।',
          },
          {
            id: 'cb000000-0000-0000-0000-000000000023',
            displayOrder: 3,
            isCorrect: false,
            optionText: 'कीमत गिरने पर नुकसान सीमित करने के लिए पहले से स्टॉप-लॉस ऑर्डर सेट करना।',
            feedbackText: 'गलत। यह एक अनुशासित जोखिम प्रबंधन रणनीति है।',
          },
        ],
      },
    ],

    reflectionPrompt: 'क्या आपने कभी किसी महत्वपूर्ण निर्णय में विरोधी सलाह इसलिए ठुकरा दी क्योंकि आपका मन पहले से बना हुआ था?',

    sections: [],
    references: [
      {
        id: 'cb_ref_01',
        title: 'On the failure to eliminate hypotheses in a conceptual task',
        authors: 'Wason, P. C.',
        publicationYear: 1960,
        journalOrPublisher: 'Quarterly Journal of Experimental Psychology',
        citation: 'Wason, P. C. (1960). On the failure to eliminate hypotheses in a conceptual task. Quarterly Journal of Experimental Psychology, 12(3), 129–140.',
        doiOrUrl: 'https://doi.org/10.1080/17470216008416717',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        consensusStatus: 'established',
        relevance: 'Confirmation bias का पहला औपचारिक प्रायोगिक प्रदर्शन।',
        displayOrder: 1,
      },
    ],
    tags: ['Cognitive Bias', 'Decision Making', 'Critical Thinking'],
    relatedTopics: [
      {
        topicId: 'anchoring_effect',
        slug: 'anchoring-effect',
        title: 'Anchoring Effect',
        relationshipType: 'amplified_by',
      },
    ],
    seoTitle: 'Confirmation Bias Kya Hai? Hindi Guide | Mentalab Mind',
    seoDescription: 'Confirmation bias ki scientific jankari aur 3 practical cognitive defenses Hindi me.',
    canonicalUrl: '/mind/cognitive-biases/confirmation-bias',
    ogImageUrl: '/images/mind/confirmation-bias.png',
    publishedAt: '2026-09-01T00:00:00Z',
    deepExplanation: 'कन्फर्मेशन बायस मानव मस्तिष्क का एक प्राकृतिक झुकाव है।',
};

export const TOPIC_CONFIRMATION_BIAS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_CONFIRMATION_BIAS_EN,
  hinglish: TOPIC_CONFIRMATION_BIAS_HINGLISH,
  hi: TOPIC_CONFIRMATION_BIAS_HI,
  gu: createLocalizedRecord('gu', 'કન્ફર્મેશન બાયસ (પૂર્વગ્રહ)', 'આપણને જે પહેલાંથી ગમે છે તે જ માનવાની માનવીય વૃત્તિ.', ['પૂર્વગ્રહથી સાવધાન રહો', 'વિરોધી તથ્યો પણ તપાસો', 'નિષ્પક્ષ બનો']),
  mr: createLocalizedRecord('mr', 'कन्फर्मेशन बायस (पूर्वग्रह)', 'आपल्या जुन्या विचारांना अनुकूल पुरावेच शोधण्याची मानवी मेंदूची सवय.', ['तथ्यांची योग्य पडताळणी करा', 'पूर्वग्रह बाजूला ठेवा', 'सत्य स्वीकारा']),
  te: createLocalizedRecord('te', 'కన్ఫర్మేషన్ బయాస్ (పక్షపాతం)', 'మనం ముందుగా నమ్మిన విషయాలకే ప్రాధాన్యతనిచ్చే మానసిక వైఖరి.', ['వాస్తవాలను పరిశీలించండి', 'పక్షపాతాన్ని అధిగమించండి', 'స్వతంత్రంగా ఆలోచించండి']),
  ta: createLocalizedRecord('ta', 'உறுதிப்படுத்தல் சார்பு (Confirmation Bias)', 'நாம் ஏற்கனவே நம்புவதை மட்டுமே தேடும் மனித உளவியல்.', ['உண்மைகளை நடுநிலையோடு ஆராயுங்கள்', 'சார்புநிலையைத் தவிருங்கள்', 'சுயாதீனமாக முடிவெடுங்கள்']),
  kn: createLocalizedRecord('kn', 'ದೃಢೀಕರಣ ಪಕ್ಷಪಾತ (Confirmation Bias)', 'ನಾವು ಮೊದಲೇ ನಂಬಿರುವ ವಿಷಯಗಳನ್ನೇ ಪುಷ್ಟೀಕರಿಸುವ ಮಾನಸಿಕ ಪ್ರವೃತ್ತಿ.', ['ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ', 'ಪೂರ್ವಗ್ರಹ ಬಿಟ್ಟು ಯೋಚಿಸಿ', 'ಸ್ವತಂತ್ರ ನಿರ್ಧಾರ ಕೈಗೊಳ್ಳಿ']),
  ml: createLocalizedRecord('ml', 'കൺഫർമേഷൻ ബയസ് (പക്ഷപാതം)', 'നമ്മുടെ പഴയ വിശ്വാസങ്ങളെ മാത്രം ശരിവെയ്ക്കുന്ന കാര്യങ്ങൾ തേടുന്ന മനശാസ്ത്രം.', ['വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക', 'പക്ഷപാതം ഒഴിവാക്കുക', 'സ്വതന്ത്രമായി ചിന്തിക്കുക']),
  bn: createLocalizedRecord('bn', 'কনফার্মেশন বায়াস (পক্ষপাতিত্ব)', 'আগে থেকে বিশ্বাস করা বিষয়গুলোকেই সত্য বলে ধরে নেওয়ার মনস্তাত্ত্বিক প্রবণতা।', ['তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন', 'পক্ষপাত এড়িয়ে চলুন', 'স্বাধীনভাবে সিদ্ধান্ত নিন']),
  pa: createLocalizedRecord('pa', 'ਪੁਸ਼ਟੀ ਪੱਖਪਾਤ (Confirmation Bias)', 'ਆਪਣੇ ਪਹਿਲਾਂ ਤੋਂ ਬਣੇ ਵਿਚਾਰਾਂ ਨੂੰ ਹੀ ਸਹੀ ਸਾਬਤ ਕਰਨ ਦੀ ਦਿਮਾਗੀ ਆਦਤ।', ['ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ', 'ਪੱਖਪਾਤ ਤੋਂ ਬਚੋ', 'ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ']),
  ur: createLocalizedRecord('ur', 'تصدیقی جانبداری (Confirmation Bias)', 'اپنے پہلے سے طے شدہ عقائد کو درست ثابت کرنے والے دلائل تلاش کرنے کی عادت۔', ['حقائق کا غیر جانبدارانہ تجزیہ کریں', 'جانبداری سے دور رہیں', 'آزادانہ فیصلے کریں']),
  or: createLocalizedRecord('or', 'ନିଶ୍ଚିତକରଣ ପକ୍ଷପାତିତା (Confirmation Bias)', 'ନିଜର ପୂର୍ବ ବିଶ୍ୱାସକୁ ସମର୍ଥନ କରୁଥିବା ତଥ୍ୟ ଖୋଜିବାର ମାନସିକତା।', ['ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ', 'ପକ୍ଷପାତ ତ୍ୟାଗ କରନ୍ତୁ', 'ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ']),
  as: createLocalizedRecord('as', 'নিশ্চিতকৰণ পক্ষপাতিত্ব (Confirmation Bias)', 'নিজে বিশ্বাস কৰা কথাবোৰকেই সত্য বুলি ভবাৰ মানসিক প্ৰৱণতা।', ['তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক', 'পক্ষপাত এৰাই চলক', 'স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক']),
};
