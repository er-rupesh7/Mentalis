import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_MICHELANGELO_PHENOMENON_EN: MindTopicDetail = {
  id: 'michelangelo_phenomenon',
  categoryId: 'relationships_comm',
  slug: 'michelangelo-phenomenon',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 6,
  viewCount: 3520,
  shareCount: 270,
  bookmarkCount: 570,
  title: "The Michelangelo Phenomenon: How Partners Sculpt Each Other",
  subtitle: "Caryl Rusbult’s interpersonal model showing that close partners sculpt one another toward their ideal selves.",
  shortDescription: "The interpersonal process in which close romantic partners affirm and elicit each other’s ideal self-conceptions, much like Michelangelo carving the hidden angel out of marble.",
  oneLineExplanation: "A great partner does not try to change you; they help you become who you wish to be.",

  summary30s: "Named after Michelangelo’s famous assertion that the sculpture already exists inside the raw marble and the sculptor merely chips away the excess, Caryl Rusbult showed that loving partners who affirm your core aspirations physically help you unlock your ideal potential.",
  coreConcept: "Partner affirmation occurs when a partner views and treats you in ways that align with your ideal self (your core aspirational goals and virtues). Over years, behavioral confirmation leads individuals to actualize their latent aspirations, enhancing relationship vitality and personal self-esteem.",
  summary60s: "The opposite of the Michelangelo phenomenon is \"Pygmalion Sculpting\", where a partner attempts to mold you into who *they* want you to be according to their selfish preferences. Michelangelo sculpting is selfless: it mirrors back your own highest dreams and gently supports your growth toward them.",
  quickTakeaways: ["Michelangelo sculpting supports YOUR ideal self, not your partner's selfish demands","Partner affirmation acts as a daily biological incubator for personal growth and courage","Pygmalion manipulation breeds resentment; genuine affirmation breeds profound intimacy","Couples with high mutual sculpting experience significantly higher long-term marital satisfaction"],

  whyItHappens: "Humans are social organisms whose self-concepts are continually shaped by the reflected appraisals of their primary attachment figures.",
  evolutionaryMechanism: "Alliances where partners augmented each other’s competencies enhanced the overall resource acquisition and survivability of the family unit.",

  howItWorks: "Individual holds ideal self aspirational goals -> Partner observes and affirms these ideals -> Partner creates low-risk environments to practice new skills -> Individual internalizes competence -> Ideal self is realized.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Michelangelo Sculpting vs. Pygmalion Imposition",
    description: "The crucial difference between unlocking a partner's potential vs. forcing your own desires on them.",
    analogySideA: {
      label: "Michelangelo Sculpting (Healthy Intimacy)",
      detail: "\"I see your deep passion for writing; let me handle the errands on Saturday so you can work on your novel.\"",
    },
    analogySideB: {
      label: "Pygmalion Imposition (Toxic Control)",
      detail: "\"You need to dress differently and change careers because your choices embarrass me socially.\"",
    },
  },

  researchSummary: "Drigotas, Rusbult, Wieselquist & Whitton (1999, JPSP) proved that partner perceptual affirmation and partner behavioral affirmation directly predict personal growth and relationship durability.",
  references: [
    {
      id: 'ref_michelangelo_phenomenon_01',
      title: "The Michelangelo Phenomenon",
      citation: "Rusbult, C. E., et al. (2009). Current Directions in Psychological Science, 18(6), 305–309.",
      authors: "Rusbult, C. E., Finkel, E. J., & Kumashiro, M.",
      publicationYear: 2009,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1111/j.1467-8721.2009.01657.x",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_michelangelo_phenomenon_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Reluctant Entrepreneur in Hyderabad",
      narrativeContext: "Aditya had worked in IT support for 10 years in Hyderabad, secretly dreaming of opening an organic artisanal bakery. His family called it risky madness. His wife, Meera, remembered his passionate experiments with sourdough, bought him a professional oven for his birthday, and encouraged him to run weekend pop-ups.",
      biasInAction: "Meera practiced authentic Michelangelo sculpting: she affirmed Aditya's latent ideal self when he lacked the courage to claim it alone.",
      optimalResponse: "Celebrate and invest in your partner's authentic creative aspirations rather than imposing your own anxiety-driven safety demands.",
      reflectionPrompt: "Does your partner's presence make you feel closer to the person you genuinely want to become?",
    },
  ],

  examples: [
    {
      id: 'ex_michelangelo_phenomenon_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Reluctant Entrepreneur in Hyderabad",
      description: "Aditya had worked in IT support for 10 years in Hyderabad, secretly dreaming of opening an organic artisanal bakery. His family called it risky madnes...",
      takeaway: "Michelangelo sculpting supports YOUR ideal self, not your partner's selfish demands",
    },
  ],

  howToRecognize: "Feeling energized, supported, and courageous in pursuing your authentic passions when around your partner, rather than judged or diminished.",
  whereYouEncounterIt: "Marriage, creative partnerships, master-apprentice dynamics, and long-term friendships.",
  commonMisconceptions: "Myth: \"A good partner accepts you exactly as you are without wanting any change.\" Fact: Healthy partners accept you unconditionally, while actively helping you grow into your own chosen dreams.",
  limitationsAndControversies: "If a partner's \"ideal self\" is destructive (e.g., criminal aspirations or reckless gambles), unconditional affirmation is dangerous and boundary-setting is required.",

  howToRespond: "Conduct the Ideal Self Interview: ask your partner: \"What are two skills or virtues you want to cultivate this year, and how can I best support you in reaching them?\"",
  psychologicalDefenses: [{"title":"The Aspirational Mirror","instruction":"Verbally highlight moments when your partner demonstrates the virtues they aspire to: \"I love how patiently you handled that difficult client today.\""},{"title":"The Pygmalion Check","instruction":"Audit your criticisms: are you trying to help them achieve their goals, or trying to make your own life more convenient?"}],

  practiceQuestions: [
    {
      id: 'pq_michelangelo_phenomenon_01',
      difficulty: 'intermediate',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A spouse notices their partner wants to become healthier but struggles with gym consistency. What represents the Michelangelo Phenomenon?",
      scenarioText: "The partner often feels guilty and discouraged about their physical stamina.",
      explanation: "The Michelangelo Phenomenon involves creating affirmative, supportive structures that empower the partner’s chosen goal without shaming them.",
      antidoteAdvice: "Affirm their identity as a healthy person and offer practical collaborative support.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Shame them by pointing out their weight gain every time they reach for food.",
          text: "Shame them by pointing out their weight gain every time they reach for food.",
          feedbackText: "Incorrect. Shaming triggers defensiveness and resentment.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Offer to cook nutritious meals together and invite them for enjoyable weekend hiking trips.",
          text: "Offer to cook nutritious meals together and invite them for enjoyable weekend hiking trips.",
          feedbackText: "Correct! This behaviorally affirms and supports their own ideal aspiration.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Tell them they look fine and should give up on exercise completely.",
          text: "Tell them they look fine and should give up on exercise completely.",
          feedbackText: "Incorrect. This discourages their genuine personal goal.",
        }
      ],
    },
  ],

  reflectionPrompt: "How can you actively support the hidden potential of someone you love this week without being overbearing?",
  tags: ['Mentalab Mind', 'relationships_comm'],
  relatedTopics: [],
  seoTitle: `${"The Michelangelo Phenomenon: How Partners Sculpt Each Other"} | Mentalab Mind`,
  seoDescription: "The interpersonal process in which close romantic partners affirm and elicit each other’s ideal self-conceptions, much like Michelangelo carving the hidden angel out of marble.",
  canonicalUrl: '/mind/relationships-comm/michelangelo-phenomenon',
  ogImageUrl: '/images/mind/michelangelo-phenomenon.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "The opposite of the Michelangelo phenomenon is \"Pygmalion Sculpting\", where a partner attempts to mold you into who *they* want you to be according to their selfish preferences. Michelangelo sculpting is selfless: it mirrors back your own highest dreams and gently supports your growth toward them.",
};

export const TOPIC_MICHELANGELO_PHENOMENON_HINGLISH: MindTopicDetail = {
  ...TOPIC_MICHELANGELO_PHENOMENON_EN,
  title: "The Michelangelo Phenomenon: Partner Ka Best Version Nikaalna",
  subtitle: "Ek sachha partner aapko badalna nahi chahta, balki aapko wo banne me madad karta hai jo aap banna chahte hain.",
  shortDescription: "Caryl Rusbult ki research: Kaise achhe partners ek doosre ke hidden potential ko nikaal kar life badal dete hain.",
  oneLineExplanation: "Jaise shilpkaar patthar me se moorti nikaalta hai, waise partner aapka best version nikaalta hai.",
  summary30s: "Michelangelo ne kaha tha: \"Moorti patthar ke andar pehle se hoti hai, shilpkaar bas bekaar patthar ko hatata hai.\" Caryl Rusbult ne prove kiya ki loving partners wahi karte hain: wo aapke andar ke best potential ko pehchan kar use bahar nikaalte hain.",
  coreConcept: "Do tarah ke partners hote hain: Pygmalion partner jo aapko apni marzi ke hisab se zabardasti badalna chahta hai, aur Michelangelo partner jo aapke khud ke sapno ko support karta hai aur aapko himmat deta hai.",
  summary60s: "Agar aapka partner aapki drawing, coding ya business ke sapne ko seriously leta hai aur time nikaalne me madad karta hai, to wo Michelangelo sculpting kar raha hai. Aise rishte 10 guna zyada khushaal aur lambe chalte hain.",
  quickTakeaways: ["Sahi partner aapko control nahi karta, balki aapke sapno ka sabse bada supporter banta hai","Pygmalion partner apni ego ke liye aapko badalta hai, jabki Michelangelo partner aapke liye support karta hai","Partner ki choti-choti achievements ko celebrate karna unka confidence 10 guna badha deta hai","Pyaar ka matlab sirf sath rehna nahi, ek doosre ki growth ka reason banna hai"],
  howItWorks: "Aapka ek sapna hai -> Partner use respect karta hai -> Wo aapko practical help aur hosla deta hai -> Aapka confidence badhta hai -> Aap apna goal achieve kar lete hain.",
  howToRespond: "Apne partner se pucho: \"Tumhara is saal ka sabse bada sapna kya hai aur main usme tumhari kya madad kar sakta hu?\"",
  practiceQuestions: [
    {
      ...TOPIC_MICHELANGELO_PHENOMENON_EN.practiceQuestions[0],
      prompt: "Aapka partner apna naya YouTube channel shuru karna chahta hai par darr raha hai. Michelangelo Phenomenon ke hisab se aapko kya karna chahiye?",
      explanation: "Partner ke authentic goal ko support karna aur himmat dena hi Michelangelo sculpting hai.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Bolna ki yeh sab bekaar hai aur chup chap job par focus karo.",
          text: "Bolna ki yeh sab bekaar hai aur chup chap job par focus karo.",
          feedbackText: "Galat. Yeh unke sapne ko crush karna hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Unka pehla video record karne me madad karna aur unki presentation skills ki tareef karna.",
          text: "Unka pehla video record karne me madad karna aur unki presentation skills ki tareef karna.",
          feedbackText: "Sahi! Yeh unke ideal self ko realize karne me help karta hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Kaho ki jab 10 lakh subscribers ho jayenge tabhi main video dekhunga.",
          text: "Kaho ki jab 10 lakh subscribers ho jayenge tabhi main video dekhunga.",
          feedbackText: "Galat. Yeh unsupportive conditional attitude hai.",
        }
      ],
    },
  ],
  seoTitle: `${"The Michelangelo Phenomenon: Partner Ka Best Version Nikaalna"} | Mentalab Mind`,
  seoDescription: "Caryl Rusbult ki research: Kaise achhe partners ek doosre ke hidden potential ko nikaal kar life badal dete hain.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_MICHELANGELO_PHENOMENON_EN,
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

export const TOPIC_MICHELANGELO_PHENOMENON: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_MICHELANGELO_PHENOMENON_EN,
  hinglish: TOPIC_MICHELANGELO_PHENOMENON_HINGLISH,
  hi: createLocalizedRecord('hi', "माइकलएंजेलो परिघटना (Michelangelo Phenomenon)", "कैसे एक आदर्श जीवनसाथी व्यक्ति के भीतर छिपे सर्वश्रेष्ठ रूप और महत्वाकांक्षाओं को निखारने में मदद करता है।", ["सच्चा साथी आपके सपनों का समर्थन करता है","पारस्परिक प्रोत्साहन व्यक्तिगत विकास को गति देता है","नियंत्रण के बजाय सहयोग से संबंध मजबूत होते हैं"]),
  gu: createLocalizedRecord('gu', "માઇકલએન્જેલો ઘટના (સાથીદારનો વિકાસ)", "એક સારો સાથીદાર તમારી અંદર રહેલી શ્રેષ્ઠ પ્રતિભાને કેવી રીતે નિખારે છે.", ["સાથીદારના સપનાને ટેકો આપો","પ્રેરણા આપો, નિયંત્રણ નહીં","સાથે મળીને વિકાસ કરો"]),
  mr: createLocalizedRecord('mr', "मायकेलएंजेलो सिद्धांत (नात्यातील विकास)", "एक उत्तम जोडीदार आपल्यातील सुप्त गुणांना आणि ध्येयांना कशा प्रकारे आकार देतो.", ["जोडीदाराच्या स्वप्नांना पाठिंबा द्या","नियंत्रणाऐवजी सहकार्य करा","नात्यात परस्परांचा विकास साधा"]),
  te: createLocalizedRecord('te', "మైఖేలాంజెలో దృగ్విషయం", "ఒక ఆదర్శ భాగస్వామి మీలోని దాగివున్న ఉత్తమ ప్రతిభను మరియు ఆశయాలను ఎలా వెలికితీస్తారో వివరించే సిద్ధాంతం.", ["భాగస్వామి ఆశయాలను గౌరవించండి","నియంత్రణ వద్దు ప్రోత్సాహం ముద్దు","కలిసి ఎదగండి"]),
  ta: createLocalizedRecord('ta', "மைக்கேலேஞ்சலோ நிகழ்வு (துணையின் சிற்பம்)", "ஒரு நல்ல வாழ்க்கைத்துணை உங்கள் உள் திறமைகளை செதுக்கி சிறந்த மனிதராக எவ்வாறு மாற்றுகிறார்.", ["துணையின் கனவை ஆதரியுங்கள்","கட்டுப்படுத்தாமல் ஊக்கப்படுத்துங்கள்","இருவரும் இணைந்து முன்னேறுங்கள்"]),
  kn: createLocalizedRecord('kn', "ಮೈಕೆಲ್ಯಾಂಜೆಲೋ ವಿದ್ಯಮಾನ", "ಉತ್ತಮ ಸಂಗಾತಿಯು ನಿಮ್ಮೊಳಗಿನ ಸುಪ್ತ ಪ್ರತಿಭೆ ಮತ್ತು ಕನಸುಗಳನ್ನು ಹೇಗೆ ಹೊರತರುತ್ತಾರೆ ಎಂಬ ತತ್ವ.", ["ಸಂಗಾತಿಯ ಕನಸಿಗೆ ಬೆಂಬಲ ನೀಡಿ","ನಿಯಂತ್ರಿಸದೆ ಪ್ರೋತ್સાಹಿಸಿ","ಒಟ್ಟಾಗಿ ಬೆಳೆಯಿರಿ"]),
  ml: createLocalizedRecord('ml', "മൈക്കലാഞ്ചലോ പ്രതിഭാസം", "ഒരു നല്ല പങ്കാളി നിങ്ങളുടെ ഉള്ളിലെ മികച്ച വ്യക്തിത്വത്തെയും ലക്ഷ്യങ്ങളെയും എങ്ങനെ വളർത്തിയെടുക്കുന്നു.", ["പങ്കാളിയുടെ ലക്ഷ്യങ്ങളെ പിന്തുണയ്ക്കുക","നിയന്ത്രിക്കാതെ പ്രോത്സാഹിപ്പിക്കുക","ഒരുമിച്ച് വളരുക"]),
  bn: createLocalizedRecord('bn', "মাইকেলেঞ্জেলো ঘটনা (সঙ্গীর রূপান্তর)", "একজন আদর্শ জীবনসঙ্গী কীভাবে আপনার সুপ্ত প্রতিভা ও স্বপ্নকে বাস্তবে রূপ দিতে সাহায্য করে।", ["সঙ্গীর স্বপ্নকে সম্মান দিন","নিয়ন্ত্রণ নয় উৎসাহ দিন","একসাথে এগিয়ে চলুন"]),
  pa: createLocalizedRecord('pa', "ਮਾਈਕਲਐਂਜਲੋ ਵਰਤਾਰਾ (ਸਾਥੀ ਦਾ ਵਿਕਾਸ)", "ਇੱਕ ਚੰਗਾ ਜੀਵਨ ਸਾਥੀ ਤੁਹਾਡੇ ਅੰਦਰ ਛੁਪੇ ਹੁਨਰ ਅਤੇ ਸੁਪਨਿਆਂ ਨੂੰ ਕਿਵੇਂ ਨਿਖਾਰਦਾ ਹੈ।", ["ਸਾਥੀ ਦੇ ਸੁਪਨਿਆਂ ਦਾ ਸਾਥ ਦਿਓ","ਦਬਾਅ ਦੀ ਥਾਂ ਹੌਸਲਾ ਦਿਓ","ਮਿਲ ਕੇ ਤਰੱਕੀ ਕਰੋ"]),
  ur: createLocalizedRecord('ur', "مائیکل اینجلو کا نظریہ (ساتھی کا نکھار)", "ایک مخلص ساتھی کس طرح آپ کی چھپی ہوئی صلاحیتوں اور خوابوں کو نکھارنے میں مددگار بنتا ہے۔", ["ساتھی کے خوابوں کو سراہیں","کنٹرول کرنے کے بجائے حوصلہ دیں","باہمی ترقی کو فروغ دیں"]),
  or: createLocalizedRecord('or', "ମାଇକେଲ୍‌ଆଞ୍ଜେଲୋ ଘଟଣା (ସାଥୀର ବିକାଶ)", "ଜଣେ ଉତ୍ତମ ଜୀବନସାଥୀ କିପରି ଆପଣଙ୍କ ଭିତରେ ଥିବା ସୁପ୍ତ ପ୍ରତିଭାକୁ ଜାଗ୍ରତ କରନ୍ତି।", ["ସାଥୀଙ୍କ ସ୍ୱପ୍ନକୁ ସମର୍ଥନ କରନ୍ତୁ","ନିୟନ୍ତ୍ରଣ ବଦଳରେ ଉତ୍ସାହିତ କରନ୍ତୁ","ଏକାଠି ଆଗକୁ ବଢ଼ନ୍ତୁ"]),
  as: createLocalizedRecord('as', "মাইকেলেঞ্জেলো পৰিঘটনা (সঙ্গীৰ বিকাশ)", "এগৰাকী ভাল সংগীয়ে কেনেকৈ আপোনাৰ অন্তৰ্নিহিত প্ৰতিভা আৰু সপোনক বাস্তৱ ৰূপ দিয়ে।", ["সংগীৰ সপোনক উৎসাহিত কৰক","নিয়ন্ত্ৰণ নকৰি সহায় কৰক","একেসাথে আগবাঢ়ক"]),
};
