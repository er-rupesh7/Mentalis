import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_DRAMA_TRIANGLE_EN: MindTopicDetail = {
  id: 'drama_triangle',
  categoryId: 'relationships_comm',
  slug: 'karpman-drama-triangle',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 8,
  viewCount: 3760,
  shareCount: 300,
  bookmarkCount: 620,
  title: "The Karpman Drama Triangle: Victim, Rescuer, and Persecutor",
  subtitle: "Stephen Karpman’s social model of recurring relational dysfunctions and the shift to the Empowerment Dynamic.",
  shortDescription: "A recurring transactional psychological game where individuals cycle between three dysfunctional roles: the helpless Victim, the righteous Persecutor, and the enabling Rescuer.",
  oneLineExplanation: "A toxic interpersonal game where everyone switches roles but nobody solves the problem.",

  summary30s: "Conceived by Dr. Stephen Karpman in 1968 within Transactional Analysis, the Drama Triangle shows how chronic relational conflicts trap participants in three scripted roles. The Rescuer helps to feel needed, which keeps the Victim helpless, until the Rescuer grows resentful and turns into the Persecutor.",
  coreConcept: "The triangle operates through unconscious psychological payoffs: The Victim avoids responsibility (\"Poor me!\"); the Rescuer gains self-worth by fixing others (\"Let me save you!\"); the Persecutor vents hostility under the guise of justice (\"It is all your fault!\"). Roles are fluid: participants frequently rotate across all three points during a single argument.",
  summary60s: "In joint families and teams, the Drama Triangle generates endless gossip, alliances, and dramatic confrontations without ever solving underlying issues. To exit the triangle, David Emerald proposed The Empowerment Dynamic (TED): The Victim becomes a Creator (focusing on solutions); the Persecutor becomes a Challenger (holding accountable with love); the Rescuer becomes a Coach (asking questions rather than doing the work).",
  quickTakeaways: ["The Rescuer role is not altruism; it is codependent control that disempowers the Victim","The Victim role abdicates personal agency in exchange for sympathy and guilt-tripping","Participants constantly rotate roles: today’s Rescuer becomes tomorrow’s Persecutor","The exit route (The Empowerment Dynamic) transforms Victims into Creators and Rescuers into Coaches"],

  whyItHappens: "Childhood families where drama was the primary vehicle for intimacy and connection conditioned individuals to equate conflict loops with feeling alive and valued.",
  evolutionaryMechanism: "Coalition politics in ancestral groups involved playing the wounded party or noble defender to win tribal sympathy and resource redistribution.",

  howItWorks: "Person A plays Victim -> Person B jumps in as Rescuer -> Rescuer overextends and exhausts self -> Rescuer attacks Victim as Persecutor -> Person A attacks back -> Chaos repeats indefinitely.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "The Drama Triangle vs. The Empowerment Dynamic",
    description: "Karpman's dysfunctional game mapped against Emerald's constructive transformation.",
    analogySideA: {
      label: "Dysfunctional Drama Triangle",
      detail: "Victim (helpless) <-> Rescuer (enabling) <-> Persecutor (blaming). Endless drama, zero growth.",
    },
    analogySideB: {
      label: "Constructive Empowerment Dynamic",
      detail: "Creator (owns power) <-> Coach (asks empowering questions) <-> Challenger (inspires accountability).",
    },
  },

  researchSummary: "Karpman (1968, Transactional Analysis Bulletin) and Emerald (2009, The Power of TED) detailed the unconscious scripts that perpetuate codependent relationship cycles across couples and organizations.",
  references: [
    {
      id: 'ref_drama_triangle_01',
      title: "Fairy Tales and Script Drama Analysis",
      citation: "Karpman, S. (1968). Transactional Analysis Bulletin, 7(26), 39–43.",
      authors: "Karpman, S. & Emerald, D.",
      publicationYear: 1968,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1177/036215376800702603",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_drama_triangle_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Family Loan Drama in Jaipur",
      narrativeContext: "In Jaipur, Rahul constantly lost money in day-trading and came to his elder brother Aman crying that he couldn't pay his rent (Victim). Aman repeatedly paid his debts (Rescuer). When Aman finally asked Rahul for a budget plan, Rahul shouted: \"You think you are God just because you have a corporate job!\" and Aman snapped: \"You are a parasite!\" (Aman became Persecutor, Rahul became Victim again).",
      biasInAction: "Both brothers were trapped in the Karpman Drama Triangle: Aman enabled Rahul's irresponsibility to feel like a noble elder brother, while Rahul used helplessness to extract funds.",
      optimalResponse: "Aman shifts to Coach: \"Rahul, I love you, but I will not pay your rent. I am happy to sit with you for 2 hours to help you write a debt repayment plan with a financial advisor.\"",
      reflectionPrompt: "In your close relationships, do you tend to jump in as the exhausted Rescuer, or do you sometimes adopt the helpless Victim stance?",
    },
  ],

  examples: [
    {
      id: 'ex_drama_triangle_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Family Loan Drama in Jaipur",
      description: "In Jaipur, Rahul constantly lost money in day-trading and came to his elder brother Aman crying that he couldn't pay his rent (Victim). Aman repeatedl...",
      takeaway: "The Rescuer role is not altruism; it is codependent control that disempowers the Victim",
    },
  ],

  howToRecognize: "Feeling exhausted and unappreciated after \"saving\" someone, or feeling like life is always unfairly targeting you and nobody understands your suffering.",
  whereYouEncounterIt: "In-law relationships, codependent marriages, startup founder disputes, and HR complaints.",
  commonMisconceptions: "Myth: \"Helping someone in need is always good.\" Fact: If your help prevents them from learning necessary skills or suffering natural consequences, you are an enabling Rescuer, not a helper.",
  limitationsAndControversies: "In genuine emergencies (medical crises, natural disasters), rescuing is vital and appropriate; the triangle applies to psychological and repetitive chronic patterns.",

  howToRespond: "Refuse the script: If someone approaches as a Victim, ask: \"What do you think is the best next step you can take?\" If you feel the urge to rescue, sit on your hands and offer coaching instead of cash or labor.",
  psychologicalDefenses: [{"title":"The Coaching Pivot","instruction":"Never do for an adult what they can do for themselves; ask empowering open questions: \"What options have you considered?\""},{"title":"Decline the Persecutor Hook","instruction":"When accused of being cruel for setting boundaries, respond: \"I understand you are upset, but my boundary stands.\""}],

  practiceQuestions: [
    {
      id: 'pq_drama_triangle_01',
      difficulty: 'intermediate',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A coworker repeatedly complains that the manager hates them and that they are doomed to fail their review (Victim). They ask you to write their summary report for them. How do you respond to stay out of the Drama Triangle?",
      scenarioText: "They look tearful and say: \"You are the only person in this company who cares about me!\"",
      explanation: "Taking over their report is entering the Rescuer trap, which keeps them helpless and burns you out. Offering guidance while leaving responsibility with them is the Coach stance.",
      antidoteAdvice: "Decline to do their work while offering 15 minutes of coaching on how they can structure it themselves.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Write the report for them late at night to save them from getting fired.",
          text: "Write the report for them late at night to save them from getting fired.",
          feedbackText: "Incorrect. This is classic enabling Rescuer behavior that perpetuates helplessness.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Say: \"I believe you are capable of writing this. I can spare 15 minutes to review an outline you write, but the drafting is yours.\"",
          text: "Say: \"I believe you are capable of writing this. I can spare 15 minutes to review an outline you write, but the drafting is yours.\"",
          feedbackText: "Correct! This adopts the Coach stance in the Empowerment Dynamic.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Go scream at the manager on the coworker’s behalf.",
          text: "Go scream at the manager on the coworker’s behalf.",
          feedbackText: "Incorrect. This escalates you into the aggressive Persecutor role.",
        }
      ],
    },
  ],

  reflectionPrompt: "Where in your life are you currently \"rescuing\" someone who needs to experience the consequences of their own choices?",
  tags: ['Mentalab Mind', 'relationships_comm'],
  relatedTopics: [],
  seoTitle: `${"The Karpman Drama Triangle: Victim, Rescuer, and Persecutor"} | Mentalab Mind`,
  seoDescription: "A recurring transactional psychological game where individuals cycle between three dysfunctional roles: the helpless Victim, the righteous Persecutor, and the enabling Rescuer.",
  canonicalUrl: '/mind/relationships-comm/karpman-drama-triangle',
  ogImageUrl: '/images/mind/karpman-drama-triangle.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "In joint families and teams, the Drama Triangle generates endless gossip, alliances, and dramatic confrontations without ever solving underlying issues. To exit the triangle, David Emerald proposed The Empowerment Dynamic (TED): The Victim becomes a Creator (focusing on solutions); the Persecutor becomes a Challenger (holding accountable with love); the Rescuer becomes a Coach (asking questions rather than doing the work).",
};

export const TOPIC_DRAMA_TRIANGLE_HINGLISH: MindTopicDetail = {
  ...TOPIC_DRAMA_TRIANGLE_EN,
  title: "Karpman Drama Triangle: Victim, Rescuer Aur Villain Ka Khel",
  subtitle: "Kyu parivaro aur dosti me hamesha wahi purani ladai repeat hoti rehti hai bina kisi solution ke.",
  shortDescription: "Stephen Karpman ka psychological model: Hum kaise Victim, Rescuer aur Persecutor ke toxic chakravyuh me phas jate hain.",
  oneLineExplanation: "Ek aisa khel jisme har koi role badalta hai par problem kabhi solve nahi hoti.",
  summary30s: "Drama Triangle me teen roles hote hain: Bechaara (Victim) jo zimmedari nahi leta, Masiha (Rescuer) jo sabko bachane nikalta hai taaki mahan ban sake, aur Villain (Persecutor) jo gussa nikaalta hai. Yeh teeno log aapas me ladte rehte hain par situation kabhi theek nahi hoti.",
  coreConcept: "Rescuer banna koi bhalai nahi hai, balki doosre ko kamzor rakhne ka tareeqa hai. Jab Rescuer thak jata hai to wo gusse me Villain ban jata hai aur Victim par chilla padta hai. Ise todne ke liye Victim ko Creator aur Rescuer ko Coach banna padta hai.",
  summary60s: "Indian joint families me yeh bohot common hai: Ek bhai hamesha karze me dooba rehta hai (Victim), doosra bhai use baar-baar paise dekar bachata hai (Rescuer). Phir jab Rescuer hisaab maangta hai to sab use zalim bolne lagte hain (Persecutor). Is toxic cycle se bahar nikalna zaroori hai.",
  quickTakeaways: ["Doosro ki zimmedari apne sar lena bhalai nahi, balki unhe apahij banana hai","Aaj ka Rescuer kal ka Persecutor ban jata hai jab wo thak jata hai","Victim banne se sympathy to milti hai par insaan apni life ka control kho deta hai","Coach bano: Advice aur sawal pucho, par unka bojh khud mat uthao"],
  howItWorks: "Victim rota hai -> Rescuer use bachane daudta hai -> Victim sudharta nahi -> Rescuer gusse me use daantta hai -> Victim kehta hai \"tum kitne zaalim ho\" -> Chakravyuh chalta rehta hai.",
  howToRespond: "Rescuer banna band karein: Kisi ka kaam khud mat karo, balki pucho: \"Tum is problem ko solve karne ke liye kya steps lene wale ho?\"",
  practiceQuestions: [
    {
      ...TOPIC_DRAMA_TRIANGLE_EN.practiceQuestions[0],
      prompt: "Aapka dost roz aakar rota hai ki boss bohot ganda hai aur bolta hai \"Meri jagah tum hi email likh do.\" Aapko kya karna chahiye?",
      explanation: "Uska email khud likhna Rescuer trap hai. Usse khud likhne ke liye encourage karna Coach banna hai.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Uska email khud likh dena taaki wo bechaara daant na khaye.",
          text: "Uska email khud likh dena taaki wo bechaara daant na khaye.",
          feedbackText: "Galat. Isse wo hamesha aap par dependent ho jayega.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Bolo: \"Main email nahi likhunga, lekin tum likhkar dikhao main 5 minute me review kar dunga.\"",
          text: "Bolo: \"Main email nahi likhunga, lekin tum likhkar dikhao main 5 minute me review kar dunga.\"",
          feedbackText: "Sahi! Yeh usse empowered banata hai aur drama todta hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Dost par gussa ho kar dosti tod lena.",
          text: "Dost par gussa ho kar dosti tod lena.",
          feedbackText: "Galat. Yeh Persecutor banna hai.",
        }
      ],
    },
  ],
  seoTitle: `${"Karpman Drama Triangle: Victim, Rescuer Aur Villain Ka Khel"} | Mentalab Mind`,
  seoDescription: "Stephen Karpman ka psychological model: Hum kaise Victim, Rescuer aur Persecutor ke toxic chakravyuh me phas jate hain.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_DRAMA_TRIANGLE_EN,
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

export const TOPIC_DRAMA_TRIANGLE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_DRAMA_TRIANGLE_EN,
  hinglish: TOPIC_DRAMA_TRIANGLE_HINGLISH,
  hi: createLocalizedRecord('hi', "कार्पमैन ड्रामा त्रिकोण (Karpman Drama Triangle)", "संबंधों में पीड़ित, रक्षक और उत्पीड़क के बीच चलने वाले अस्वस्थ और अंतहीन मनोवैज्ञानिक चक्र का विश्लेषण।", ["रक्षक बनना अक्सर निर्भरता को बढ़ावा देता है","पीड़ित की भूमिका में व्यक्ति अपनी शक्ति खो देता है","सहानुभूतिपूर्ण सशक्तिकरण से ही समाधान संभव है"]),
  gu: createLocalizedRecord('gu', "કાર્પમેન ડ્રામા ત્રિકોણ", "સંબંધોમાં પીડિત, રક્ષક અને વિરોધી વચ્ચે ચાલતા ઝેરી માનસિક ચક્રને કેવી રીતે તોડવું.", ["નિરર્થક રક્ષક ન બનો","પોતાની જવાબદારી સ્વીકારો","સહયોગથી આગળ વધો"]),
  mr: createLocalizedRecord('mr', "कार्पमन ड्रामा त्रिकोण (नात्यातील चक्रव्यूह)", "नात्यांमध्ये पीडित, तारणहार आणि छळवादी यांच्यात फिरणाऱ्या अस्वस्थ मानसिक चक्राचे विश्लेषण.", ["अति-मदत करणे टाळा","प्रत्येकाला स्वावलंबी बनवा","नात्यातील नाटक संपवा"]),
  te: createLocalizedRecord('te', "కార్ప్‌మన్ డ్రామా త్రిభుజం", "సంబంధాలలో బాధితుడు, రక్షకుడు మరియు నిందించే వ్యక్తి మధ్య సాగే విషపూరిత మానసిక చక్రం.", ["అనవసర రక్షకుడిగా మారకండి","బాధ్యతను గుర్తించండి","సాధికారత వైపు నడవండి"]),
  ta: createLocalizedRecord('ta', "கார்ப்மேன் நாடக முக்கோணம் (Drama Triangle)", "உறவுகளில் பாதிக்கப்பட்டவர், காப்பாற்றுபவர் மற்றும் கொடுமைப்படுத்துபவர் இடையே சுழலும் நச்சு வட்டம்.", ["அளவுக்கு மீறி உதவாதீர்கள்","சுயசார்பை ஊக்குவியுங்கள்","நாடக வட்டத்திலிருந்து வெளியேறுங்கள்"]),
  kn: createLocalizedRecord('kn', "ಕಾರ್ಪ್‌ಮನ್ ಡ್ರಾಮಾ ತ್ರಿಕೋನ", "ಸಂಬಂಧಗಳಲ್ಲಿ ಸಂತ್ರಸ್ತ, ರಕ್ಷಕ ಮತ್ತು ನಿಂದಕನ ನಡುವೆ ಸುತ್ತುವ ವಿಷಕಾರಿ ಮಾನಸಿಕ ಚಕ್ರದ ವಿಶ್ಲೇಷಣೆ.", ["ಅನಗತ್ಯ ರಕ್ಷಕರಾಗಬೇಡಿ","ಸ್ವಾವಲಂಬನೆಗೆ ಪ್ರೋತ್ಸಾಹಿಸಿ","ಸಮಸ್ಯೆಗೆ ನಿಜವಾದ ಪರಿಹಾರ ಕಂಡುಕೊಳ್ಳಿ"]),
  ml: createLocalizedRecord('ml', "കാർപ്മാൻ ഡ്രാമ ട്രയാംഗിൾ", "ബന്ധങ്ങളിൽ ഇര, രക്ഷകൻ, വേട്ടക്കാരൻ എന്നിവർക്കിടയിൽ ആവർത്തിക്കുന്ന വിഷലിപ്തമായ മാനസിക ചക്രം.", ["അമിതമായി സംരക്ഷിക്കരുത്","സ്വയംപര്യാപ്തത വളർത്തുക","യഥാർത്ഥ പ്രശ്നപരിഹാരം കണ്ടെത്തുക"]),
  bn: createLocalizedRecord('bn', "কার্পম্যান ড্রামা ট্রায়াঙ্গেল (সম্পর্কের বিষাক্ত চক্র)", "সম্পর্কের মধ্যে ভুক্তভোগী, উদ্ধারকর্তা এবং নিপীড়কের মধ্যে আবর্তিত অস্বাস্থ্যকর মানসিক চক্র।", ["অহেতুক ত্রাণকর্তা হবেন না","স্বাবলম্বী হতে সাহায্য করুন","নাটকীয়তা পরিহার করুন"]),
  pa: createLocalizedRecord('pa', "ਕਾਰਪਮੈਨ ਡਰਾਮਾ ਤਿਕੋਣ (ਰਿਸ਼ਤਿਆਂ ਦਾ ਚੱਕਰਵਿਊ)", "ਰਿਸ਼ਤਿਆਂ ਵਿੱਚ ਪੀੜਤ, ਬਚਾਉਣ ਵਾਲੇ ਅਤੇ ਦੋਸ਼ੀ ਵਿਚਕਾਰ ਚੱਲਣ ਵਾਲੇ ਜ਼ਹਿਰੀਲੇ ਮਨੋਵਿਗਿਆਨਕ ਚੱਕਰ ਦੀ ਪਛਾਣ।", ["ਲੋੜ ਤੋਂ ਵੱਧ ਮਦਦ ਨਾ ਕਰੋ","ਸਭ ਨੂੰ ਆਤਮਨਿਰਭਰ ਬਣਾਓ","ਡਰਾਮੇ ਤੋਂ ਬਾਹਰ ਨਿਕਲੋ"]),
  ur: createLocalizedRecord('ur', "کارپ مین ڈراما تکون (Drama Triangle)", "رشتوں میں مظلوم، نجات دہندہ اور ظالم کے درمیان گھومنے والے زہریلے نفسیاتی چکر کا حل۔", ["ہر بار نجات دہندہ نہ بنیں","خود انحصاری کو فروغ دیں","صحیح رہنمائی فراہم کریں"]),
  or: createLocalizedRecord('or', "କାର୍ପମ୍ୟାନ୍ ଡ୍ରାମା ତ୍ରିକୋଣ", "ସମ୍ପର୍କରେ ପୀଡ଼ିତ, ରକ୍ଷକ ଓ ଅତ୍ୟାଚାରୀ ମଧ୍ୟରେ ଘୁରୁଥିବା ବିଷାକ୍ତ ମାନସିକ ଚକ୍ର।", ["ଅଯଥା ରକ୍ଷକ ସାଜନ୍ତୁ ନାହିଁ","ସ୍ୱାବଲମ୍ବୀ ହେବାକୁ ପ୍ରେରଣା ଦିଅନ୍ତୁ","ସମସ୍ୟାର ସଠିକ୍ ସମାଧାନ କରନ୍ତୁ"]),
  as: createLocalizedRecord('as', "কাৰ্পমেন ড্ৰামা ত্ৰিকোণ", "সম্পৰ্কত ভুক্তভোগী, ৰক্ষক আৰু অত্যাচাৰীৰ মাজত ঘূৰি থকা বিষাক্ত মানসিক চক্ৰৰ বিশ্লেষণ।", ["অযথা ত্ৰাণকৰ্তা নহ’ব","স্বাৱলম্বনক প্ৰাধান্য দিয়ক","নাটকীয়তাৰ পৰা আঁতৰি থাকক"]),
};
