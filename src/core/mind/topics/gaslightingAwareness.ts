import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_GASLIGHTING_AWARENESS_EN: MindTopicDetail = {
    id: 'gaslighting_awareness',
    categoryId: 'manipulation_awareness',
    slug: 'gaslighting-awareness',
    difficulty: 'intermediate',
    estimatedReadingMinutes: 5,
    scientificConsensusTier: 'established',
    sortWeight: 2,
    viewCount: 2410,
    shareCount: 310,
    bookmarkCount: 420,
    title: 'Gaslighting & Reality Distortion',
    subtitle: 'Recognizing psychological manipulation vs. honest conflict',
    shortDescription: 'A covert pattern where one party repeatedly undermines another person\'s perception of reality, memory, or sanity to maintain relational control.',
    oneLineExplanation: 'Making someone doubt their own senses, memory, or sanity through chronic denial and narrative rewrites.',

    summary30s: 'Gaslighting is not just a disagreement or someone forgetting details. It is a chronic pattern where someone repeatedly makes you question your own memory, perception, and sanity to escape accountability.',
    coreConcept: 'Gaslighting is not a single heated argument or someone disagreeing with your memory. It is a persistent, chronic pattern of communication designed to erode a person\'s confidence in their own perceptions so they become dependent on the manipulator\'s version of reality.',
    summary60s: 'If someone genuinely forgot a conversation, that is human fallibility. But if someone routinely tells you "That never happened, you are imagining things, you are crazy," whenever you address broken agreements, reality is being actively distorted to escape accountability.',
    quickTakeaways: [
      'Disagreement is NOT gaslighting: two people can genuinely remember an event differently',
      'Gaslighting requires a persistent power dynamic and systematic reality denial',
      'The antidote is grounded documentation and external reality checks, not endless debates',
    ],

    whyItHappens: 'Defense against accountability, profound fear of vulnerability, or a desire for relational dominance. When admitting fault would shatter a person\'s fragile self-image, rewriting the history of the event is their psychological defense mechanism.',
    evolutionaryMechanism: 'Social deception and coalition manipulation have long existed as high-risk, high-reward strategies to avoid tribal sanctions while preserving status.',

    howItWorks: 'It typically unfolds in stages: (1) Subtle denial ("I never said that"); (2) Pathologizing emotion ("You are overreacting because you are too sensitive"); (3) Isolation ("Everyone else agrees with me, nobody believes you"); (4) Self-doubt—the victim begins questioning their own sanity.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'Honest Disagreement vs. Systematic Gaslighting',
      description: 'Understanding the crucial boundary between normal relationship conflict and manipulative reality erosion.',
      analogySideA: { label: 'Normal Conflict', detail: '"I remember it differently. Here is what I recall, but let\'s check notes."' },
      analogySideB: { label: 'Gaslighting Pattern', detail: '"You are crazy, you always make up stories. No wonder nobody trusts your memory."' },
    },

    researchSummary: 'First clinically documented in communication studies by Barton & Whitehead (1969), and popularized in relational psychology by Dr. Robin Stern (The Gaslight Effect, 2007). Research emphasizes that it operates through gradual attrition rather than sudden shocks.',
    limitationsAndControversies: 'CRITICAL LIMITATION: On modern social media, the term "gaslighting" has suffered severe concept creep. People frequently label any simple disagreement or memory discrepancy as "abuse". Clinical psychology stresses: poor communication, defensiveness, and accidental misremembering are NOT gaslighting. Context and systematic intent matter.',

    examples: [
      {
        id: 'gl_ex_01',
        domain: 'workplace',
        displayOrder: 1,
        title: 'The Shifted Project Scope',
        description: 'A manager verbally promises an employee a promotion if they finish a project by Friday. On Monday, the manager claims: "I never said that. You completely misunderstood. You have an overactive imagination."',
        takeaway: 'Verbal ambiguity enables reality rewrites. Documenting key agreements via follow-up email neutralizes the tactic.',
      },
    ],
    scenarios: [
      {
        id: 'gl_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'The Joint Family Expense Dispute',
        narrativeContext: 'Pooja agreed to contribute ₹30,000 for a family celebration on the explicit condition that it was a one-time emergency. Two months later, her sister-in-law demands another ₹30,000. When Pooja politely reminds her of the boundary, the family responds: "Nobody ever said it was one-time! You are making things up to create drama. Why do you always divide the family?"',
        biasInAction: 'The family rewrites the recorded verbal pact and attacks Pooja\'s character rather than honoring the financial agreement.',
        optimalResponse: 'Do not enter into a circular debate over your sanity. Calmly state: "I know what I agreed to. My boundary stands, and I will not be financing further events." Disengage from the argument.',
        reflectionPrompt: 'Have you ever started doubting what you saw or heard with your own eyes just because a dominant person repeated with confidence that you were mistaken?',
      },
    ],

    howToRecognize: 'The telltale internal feeling is "second-guessing vertigo": You find yourself apologizing constantly, feeling like you can no longer trust your own memory, or recording audio notes secretly just to verify you aren\'t losing your mind.',
    whereYouEncounterIt: 'High-conflict domestic relationships, predatory sales setups, authoritarian management hierarchies.',

    commonMisconceptions: 'Misconception: "If someone disagrees with my feeling, they are gaslighting me." Fact: People are allowed to disagree with your interpretation of events without being manipulative.',

    howToRespond: 'Exit the circular courtroom. Stop trying to convince the manipulator to acknowledge reality. Anchor yourself with third-party verification, contemporaneous written notes, and emotional distance.',
    psychologicalDefenses: [
      { title: 'The Memo Strategy', instruction: 'After verbal agreements, send a polite summary email: "As discussed today, our agreement is X." Creates an objective paper trail.' },
      { title: 'Disengage from the Sanity Debate', instruction: 'Refuse to argue about whether you are "too sensitive". Respond: "You can disagree with my memory, but my decision remains."' },
      { title: 'Reality Anchor Support', instruction: 'Keep a trusted, grounded friend outside the relationship to reality-test confusing interactions.' },
    ],

    practiceQuestions: [
      {
        id: 'gl_q_01',
        difficulty: 'intermediate',
        questionFormat: 'misconception_detection',
        displayOrder: 1,
        prompt: 'Which scenario represents genuine Gaslighting rather than a normal communication mistake?',
        scenarioText: 'Compare the following two interpersonal friction incidents.',
        explanation: 'Chronic reality denial coupled with attacks on the victim\'s sanity ("you are crazy, you always imagine things") to escape accountability is the hallmark of gaslighting.',
        antidoteAdvice: 'Distinguish between someone defending their memory vs. someone systematically demolishing yours.',
        options: [
          {
            id: 'gl_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'A partner says: "I honestly thought you said 7:00 PM, not 6:00 PM. I am sorry, my mistake."',
            feedbackText: 'Incorrect. This is an honest, normal human memory discrepancy with accountability.',
          },
          {
            id: 'gl_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'A colleague breaks a verbal commitment and repeatedly tells you: "You are paranoid and mentally unstable, nobody can work with your delusions."',
            feedbackText: 'Correct! This pathologizes the victim\'s sanity to deflect legitimate accountability.',
          },
          {
            id: 'gl_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Two friends disagree strongly over which movie had the better ending.',
            feedbackText: 'Incorrect. Subjective aesthetic debate is not manipulation.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Can you recall a conflict where someone genuinely misremembered something versus a time someone aggressively made you feel crazy for noticing the truth?',
    sections: [],
    references: [
      {
        id: 'gl_ref_01',
        title: 'The Gaslight Effect: How to Spot and Survive the Hidden Manipulation Others Use to Control Your Life',
        citation: 'Stern, R. (2007). The Gaslight Effect: How to Spot and Survive the Hidden Manipulation Others Use to Control Your Life. Harmony Books.',
        authors: 'Robin Stern',
        publicationYear: 2007,
        journalOrPublisher: 'Harmony Books',
        sourceType: 'academic_textbook',
        evidenceStrength: 'foundational_book',
        doiOrUrl: 'https://www.penguinrandomhouse.com/books/173003/the-gaslight-effect-by-dr-robin-stern/',
        relevance: 'Clinical and relational framework identifying the 3 stages of gaslighting and reality erosion.',
        displayOrder: 1,
      },
      {
        id: 'gl_ref_02',
        title: 'The sociology of gaslighting',
        citation: 'Sweet, P. L. (2019). The sociology of gaslighting. American Sociological Review, 84(5), 851–875.',
        authors: 'Paige L. Sweet',
        publicationYear: 2019,
        journalOrPublisher: 'American Sociological Review',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'empirical_study',
        doiOrUrl: 'https://doi.org/10.1177/0003122419874843',
        relevance: 'Peer-reviewed sociological study on structural inequalities and micro-level interpersonal reality distortion.',
        displayOrder: 2,
      },
    ],
    tags: ['Manipulation Awareness', 'Communication', 'Boundaries'],
    relatedTopics: [
      {
        topicId: 'healthy_boundaries',
        slug: 'healthy-boundaries',
        title: 'Healthy Boundaries',
        relationshipType: 'counteracted_by',
      },
    ],
    seoTitle: 'What is Gaslighting? Psychological Mechanisms vs Normal Conflict | Mentalab Mind',
    seoDescription: 'Learn the scientific definition of gaslighting, how to differentiate it from normal disagreement, and 3 communication shields.',
    canonicalUrl: '/mind/manipulation-awareness/gaslighting-awareness',
    ogImageUrl: '/images/mind/gaslighting-awareness.png',
    publishedAt: '2026-09-05T00:00:00Z',
    deepExplanation: 'Gaslighting operates through insidious power dynamics where memory, perception, and emotional sanity are eroded systematically.',
  };

export const TOPIC_GASLIGHTING_AWARENESS_HINGLISH: MindTopicDetail = {
    id: 'gaslighting_awareness',
    categoryId: 'manipulation_awareness',
    slug: 'gaslighting-awareness',
    difficulty: 'intermediate',
    estimatedReadingMinutes: 5,
    scientificConsensusTier: 'established',
    sortWeight: 2,
    viewCount: 2410,
    shareCount: 310,
    bookmarkCount: 420,
    title: 'Gaslighting & Reality Distortion',
    subtitle: 'Psychological manipulation aur normal disagreement me farq samjhein',
    shortDescription: 'Ek aisa manipulation pattern jisme doosra insaan aapki memory, perception ya sanity par baar-baar shak karwata hai taaki accountability se bach sake.',
    oneLineExplanation: 'Aapko yeh feel karwana ki aap pagal hain ya sab kuch imagine kar rahe hain.',

    summary30s: 'Gaslighting sirf ek ladai ya baat bhool jana nahi hai. Yeh ek lagataar pattern hai jisme koi aapko baar-baar jhootha ya "paagal" keh kar aapki apni memory aur reality par shaq karwata hai.',
    coreConcept: 'Gaslighting koi chhota argument ya bhool jana nahi hai. Yeh ek deliberate aur repetitive tareeqa hai jisme samne wala aapko galat prove karne ke liye events ki reality ko hi badal deta hai.',
    summary60s: 'Agar koi baat bhool gaya, to yeh insani fitrat hai. Lekin agar koi har baar bole: "Maine aisa kabhi nahi bola, tum pagal ho, tumhara dimag kharab ho gaya hai," to yeh manipulation hai taaki unhe apni galti na manni pade.',
    quickTakeaways: [
      'Normal disagreement gaslighting nahi hota: do log ek baat ko alag tareeqe se yaad rakh sakte hain',
      'Gaslighting me samne wala aapki mental sanity par attack karta hai',
      'Iska solution behes karna nahi, balki written documentation aur calm boundaries hain',
    ],

    whyItHappens: 'Apni galti accept na karne ka darr aur ego preservation. Jab kisi insaan ki self-image itni kamzor ho ki wo galti nahi maan sakta, to wo puri situation ko hi jhooth bana deta hai.',
    evolutionaryMechanism: 'Social deception aur status bachane ke purane psychological patterns.',

    howItWorks: 'Yeh step-by-step hota hai: Pehle direct inkar ("Maine aisa nahi bola"), phir emotion ko mock karna ("Tum zyada hi sensitive ho"), aur aakhir me self-doubt create karna.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'Normal Disagreement vs. Gaslighting',
      description: 'Misunderstanding aur reality manipulation ke beech ka farq.',
      analogySideA: { label: 'Normal Conflict', detail: '"Mujhe lagta hai baat kuch aur thi. Chalo milkar clarify karte hain."' },
      analogySideB: { label: 'Gaslighting Pattern', detail: '"Tum hamesha kisse banate ho. Koi tumhari baat par vishwas nahi karta."' },
    },

    researchSummary: 'Dr. Robin Stern ki 2007 ki landmark research "The Gaslight Effect" ne dikhaya ki kaise log reality distortion ke chalte clinical depression aur self-doubt me chale jate hain.',
    limitationsAndControversies: 'IMPORTANT: Social media par har choti ladai ko log "gaslighting" bol dete hain. Clinical psychology bolti hai ki agar koi genuinely bhool gaya ya uska point of view alag hai, to use gaslighting mat bolo. Context aur intent sabse zaroori hai.',

    examples: [
      {
        id: 'gl_ex_01_hi',
        domain: 'workplace',
        displayOrder: 1,
        title: 'Office Ka Mukra Hua Wada',
        description: 'Boss ne bola tha ki project khatam hone par bonus milega. Baad me bolte hain: "Maine to aisa kabhi nahi kaha, tum sapne dekh rahe the."',
        takeaway: 'Verbal batoon ke bajaye hamesha email par written confirmation rakhein.',
      },
    ],
    scenarios: [
      {
        id: 'gl_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'Joint Family Kharcha Dispute',
        narrativeContext: 'Pooja ne family function ke liye ₹30,000 is shart par diye the ki yeh aakhri baar hai. Do mahine baad jab fir paise maange gaye aur usne mana kiya, to sabne bola: "Aisa kisne kaha tha? Tum family ko todna chahti ho!"',
        biasInAction: 'Purane verbal commitment ko jhootha bol kar Pooja ko guilty feel karwaya ja raha hai.',
        optimalResponse: 'Behes mat karein. Calmly bolein: "Mujhe pata hai maine kya bola tha. Mera decision final hai."',
        reflectionPrompt: 'Kya kabhi kisi ne itne confidence se jhooth bola ki aapko laga ki shayad aap hi galat the?',
      },
    ],

    howToRecognize: 'Agar aap har baat par samne wale se maafi maangne lagein aur har decision me lagne lage ki aapki hi memory kharab hai, to alert ho jaiye.',
    whereYouEncounterIt: 'Toxic relationships, passive-aggressive office dynamics aur family politics.',

    commonMisconceptions: 'Myth: "Agar koi meri baat se agree nahi karta to wo gaslighting kar raha hai." Fact: Logo ko aapke opinion se disagree karne ka pura haq hai.',

    howToRespond: 'Apni memory par trust karein. Samne wale ko yeh convince karne ki koshish chhod dein ki reality kya thi.',
    psychologicalDefenses: [
      { title: 'The Written Memo', instruction: 'Badi batoon ke baad message bhej dein: "Humne jo baat ki uske mutabiq yeh tay hua hai."' },
      { title: 'Don\'t Debate Sanity', instruction: '"Tum mujhe sensitive bol sakte ho, lekin mera decision change nahi hoga."' },
      { title: 'Reality Anchor Friend', instruction: 'Ek aisa dost rakhein jo aapko unbiased feedback de sake.' },
    ],

    practiceQuestions: [
      {
        id: 'gl_q_01',
        difficulty: 'intermediate',
        questionFormat: 'misconception_detection',
        displayOrder: 1,
        prompt: 'Inme se kaunsi situation genuine Gaslighting hai na ki ek aam misunderstanding?',
        scenarioText: 'Neeche diye gaye options ko dhyan se padhein.',
        explanation: 'Jab koi samne wale ke dimag aur sanity par attack kare ("tum pagal ho") taaki accountability se bache, to wo gaslighting hai.',
        antidoteAdvice: 'Normal bhool aur deliberate manipulation me farq samjhein.',
        options: [
          {
            id: 'gl_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Dost bolta hai: "Mujhe laga meeting 7 baje hai, sorry galti ho gayi."',
            feedbackText: 'Galat. Yeh ek normal human memory slip hai.',
          },
          {
            id: 'gl_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Colleague wada tod kar bolta hai: "Tumhara dimag kharab hai, tum hamesha man-ghadant baatein banate ho."',
            feedbackText: 'Sahi! Yeh accountability se bachne ke liye reality deny kar raha hai.',
          },
          {
            id: 'gl_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Do log is baat par debate karte hain ki kaunsa phone behtar hai.',
            feedbackText: 'Galat. Yeh subjective opinion hai, manipulation nahi.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Kya aapke sath kabhi aisa hua hai jab aapne written proof dekhkar realize kiya ki samne wala jhooth bol raha tha?',
    sections: [],
    references: [
      {
        id: 'gl_ref_01',
        title: 'The Gaslight Effect: How to Spot and Survive the Hidden Manipulation Others Use to Control Your Life',
        citation: 'Stern, R. (2007). The Gaslight Effect. Harmony Books.',
        authors: 'Robin Stern',
        publicationYear: 2007,
        journalOrPublisher: 'Harmony Books',
        sourceType: 'academic_textbook',
        evidenceStrength: 'foundational_book',
        doiOrUrl: 'https://www.penguinrandomhouse.com/books/173003/the-gaslight-effect-by-dr-robin-stern/',
        relevance: 'Gaslighting dynamics aur emotional sanity par clinical guide.',
        displayOrder: 1,
      },
    ],
    tags: ['Manipulation Awareness', 'Communication', 'Boundaries'],
    relatedTopics: [],
    seoTitle: 'Gaslighting Kya Hai? Manipulation vs Misunderstanding | Mentalab Mind',
    seoDescription: 'Gaslighting aur aam jhagde me farq samjhein aur seekhein 3 psychological defenses.',
    canonicalUrl: '/mind/manipulation-awareness/gaslighting-awareness',
    ogImageUrl: '/images/mind/gaslighting-awareness.png',
    publishedAt: '2026-09-05T00:00:00Z',
    deepExplanation: 'Gaslighting ek chronic psychological dynamic hai jisme victims apni memory aur sanity par doubt karne lagte hain.',
  };

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_GASLIGHTING_AWARENESS_EN,
    title,
    subtitle: summary.slice(0, 80) + '...',
    oneLineExplanation: summary.slice(0, 60),
    summary30s: summary,
    coreConcept: summary,
    quickTakeaways: takeaways,
    limitationsAndControversies: TOPIC_GASLIGHTING_AWARENESS_EN.limitationsAndControversies,
    seoTitle: `${title} | Mentalab Mind`,
    seoDescription: `${summary.slice(0, 150)}...`,
  };
}

export const TOPIC_GASLIGHTING_AWARENESS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_GASLIGHTING_AWARENESS_EN,
  hinglish: TOPIC_GASLIGHTING_AWARENESS_HINGLISH,
  hi: createLocalizedRecord('hi', 'गैसलाइटिंग (Gaslighting): वास्तविकता का विरूपण', 'एक ऐसा मनोवैज्ञानिक हेरफेर जहाँ पीड़ित को अपनी ही स्मृति और समझ पर संदेह होने लगता है।', ['अपनी स्मृति पर विश्वास रखें', 'बातचीत का लिखित रिकॉर्ड रखें', 'सीमाएं निर्धारित करें']),
  gu: createLocalizedRecord('gu', 'ગેસલાઇટિંગ: માનસિક છેતરપિંડી અને ભ્રમ', 'જ્યારે કોઈ વ્યક્તિ તમારી વાસ્તવિકતા અને યાદશક્તિ પર શંકા પેદા કરવાનો પ્રયાસ કરે છે.', ['પોતાના પર ભરોસો રાખો', 'વાતચીતની નોંધ રાખો', 'મજબૂત સીમાઓ બનાવો']),
  mr: createLocalizedRecord('mr', 'गॅसलाइटिंग: वास्तवाचा विपर्यास', 'समोरच्या व्यक्तीच्या स्मृती आणि बुद्धीवर संशय निर्माण करणारी विषारी मानसिक चाल.', ['स्वतःच्या स्मरणशक्तीवर विश्वास ठेवा', 'पुरावे सांभाळा', 'नात्यात मर्यादा ठेवा']),
  te: createLocalizedRecord('te', 'గ్యాస్‌లైటింగ్: వాస్తవాన్ని తారుమారు చేసే మనస్తత్వం', 'ఒక వ్యక్తి తన సొంత జ్ఞాపకశక్తిని మరియు భావాలను అనుమానించేలా చేసే మానసిక దాడి.', ['మీ అంతర్వాణిని నమ్మండి', 'లిఖితపూర్వక ఆధారాలు ఉంచండి', 'స్పష్టమైన సరిహద్దులు గీయండి']),
  ta: createLocalizedRecord('ta', 'கேஸ்லைட்டிங்: மனதை குழப்பும் தந்திரம்', 'ஒருவர் தனது சொந்த நினைவாற்றலையும் பகுத்தறிவையும் சந்தேகிக்க வைக்கும் உளவியல் கையாளுதல்.', ['உங்கள் உள்ளுணர்வை நம்புங்கள்', 'ஆதாரங்களை சேகரியுங்கள்', 'எல்லைகளை வகுத்துக்கொள்ளுங்கள்']),
  kn: createLocalizedRecord('kn', 'ಗ್ಯಾಸ್‌ಲೈಟಿಂಗ್: ಮಾನಸಿಕ ತಿರುಚುವಿಕೆ', 'ವ್ಯಕ್ತಿಯು ತನ್ನ ಸ್ವಂತ ನೆನಪು ಮತ್ತು ಗ್ರಹಿಕೆಯನ್ನು ಸಂಶಯಿಸುವಂತೆ ಮಾಡುವ ಕುತಂತ್ರದ ವರ್ತನೆ.', ['ನಿಮ್ಮ ಗ್ರಹಿಕೆಯನ್ನು ನಂಬಿ', 'ಸತ್ಯಾಂಶಗಳನ್ನು ದಾಖಲಿಸಿ', 'ದೃಢವಾದ ಗಡಿಗಳನ್ನು ನಿಗದಿಪಡಿಸಿ']),
  ml: createLocalizedRecord('ml', 'ഗ്യാസ്‌ലൈറ്റിംഗ്: മാനസിക കബളിപ്പിക്കൽ', 'ഒരു വ്യക്തിയെ സ്വന്തം ചിന്തകളിലും ഓർമ്മകളിലും സംശയം ജനിപ്പിക്കുന്ന തരത്തിലുള്ള കൈകടത്തൽ.', ['സ്വന്തം ഓർമ്മയിൽ ഉറച്ചുനിൽക്കുക', 'സത്യം രേഖപ്പെടുത്തുക', 'വ്യക്തിപരമായ അതിരുകൾ നിശ്ചയിക്കുക']),
  bn: createLocalizedRecord('bn', 'গ্যাসলাইটিং: বাস্তবতা বিকৃতির কৌশল', 'এমন একটি মনস্তাত্ত্বিক অপকৌশল যেখানে ভুক্তভোগী নিজের স্মৃতি এবং বিচারবুদ্ধি নিয়ে দ্বিধায় পড়ে।', ['নিজের ওপর বিশ্বাস রাখুন', 'কথাবার্তার লিখিত প্রমাণ রাখুন', 'স্পষ্ট সীমানা তৈরি করুন']),
  pa: createLocalizedRecord('pa', 'ਗੈਸਲਾਈਟਿੰਗ: ਮਾਨਸਿਕ ਭਰਮ ਪੈਦਾ ਕਰਨਾ', 'ਇੱਕ ਅਜਿਹਾ ਮਨੋਵਿਗਿਆਨਕ ਹਮਲਾ ਜਿਸ ਵਿੱਚ ਵਿਅਕਤੀ ਆਪਣੀ ਹੀ ਯਾਦਦਾਸ਼ਤ ਉੱਤੇ ਸ਼ੱਕ ਕਰਨ ਲੱਗਦਾ ਹੈ।', ['ਆਪਣੀ ਸੋਚ ਉੱਤੇ ਭਰੋਸਾ ਰੱਖੋ', 'ਗੱਲਬਾਤ ਦਾ ਰਿਕਾਰਡ ਰੱਖੋ', 'ਸਖ਼ਤ ਸੀਮਾਵਾਂ ਤੈਅ ਕਰੋ']),
  ur: createLocalizedRecord('ur', 'گیس لائٹنگ: حقیقت کو مسخ کرنے کی نفسیات', 'ایک ایسا نفسیاتی حربہ جس میں متاثرہ شخص کو اپنی ہی یادداشت اور عقل پر شک ہونے لگتا ہے۔', ['اپنی عقل پر بھروسہ رکھیں', 'تحریری ثبوت محفوظ رکھیں', 'ذاتی حدود قائم کریں']),
  or: createLocalizedRecord('or', 'ଗ୍ୟାସ୍‌ଲାଇଟିଂ: ବାସ୍ତବତାକୁ ବିକୃତ କରିବାର ମାନସିକତା', 'ଅନ୍ୟ ଜଣଙ୍କର ସ୍ମୃତି ଓ ବିବେକ ଉପରେ ସନ୍ଦେହ ସୃଷ୍ଟି କରୁଥିବା ବିଷାକ୍ତ କୌଶଳ।', ['ନିଜ ଉପରେ ବିଶ୍ୱାସ ରଖନ୍ତୁ', 'ଲିଖିତ ପ୍ରମାଣ ରଖନ୍ତୁ', 'ସୁରକ୍ଷିତ ସୀମା ନିର୍ଦ୍ଧାରଣ କରନ୍ତୁ']),
  as: createLocalizedRecord('as', 'গেছলাইটিং: মানসিক বিভ্ৰম সৃষ্টিৰ অপকৌশল', 'আন এজন ব্যক্তিক নিজৰ স্মৃতি আৰু ভাবমূর্তিক সন্দেহ কৰিবলৈ বাধ্য কৰোৱা মানসিক প্ৰৱঞ্চনা।', ['নিজৰ ওপৰত বিশ্বাস ৰাখক', 'প্ৰমাণ সংৰক্ষণ কৰক', 'দৃঢ় সীমা নিৰ্ধাৰণ কৰক']),
};
