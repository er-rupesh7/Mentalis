import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_PASSIVE_AGGRESSIVE_PATTERNS_EN: MindTopicDetail = {
  id: 'passive_aggressive_patterns',
  categoryId: 'relationships_comm',
  slug: 'passive-aggressive-patterns',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 7,
  viewCount: 3640,
  shareCount: 285,
  bookmarkCount: 595,
  title: "Passive-Aggression: Indirect Hostility and Covert Resistance",
  subtitle: "The psychology of disguised anger, weaponized compliance, and chronic procrastination in relationships.",
  shortDescription: "A pattern of indirectly expressing negative feelings instead of openly addressing them, creating emotional erosion while maintaining plausible deniability.",
  oneLineExplanation: "Saying \"yes\" with words while screaming \"no\" through delays, eye-rolls, and sulking.",

  summary30s: "First identified clinically by the US War Department in 1945, passive-aggression is covert hostility. When people fear direct conflict or lack assertive communication skills, they express resentment through subtle sabotage: chronic lateness, weaponized incompetence, and sarcastic backhanded compliments.",
  coreConcept: "Passive-aggression preserves \"plausible deniability\": the perpetrator can inflict emotional frustration on their target while claiming: \"What are you talking about? I was just joking!\" or \"I forgot, why are you always so paranoid?\" It shifts the burden of emotional dysregulation onto the victim.",
  summary60s: "Underneath passive-aggressive behavior is a profound fear of vulnerability and powerlessness. The individual feels entitled to anger but terrified of direct confrontation. In families and workplaces, chronic passive-aggression is far more toxic than open conflict because open conflict can be resolved with facts, while covert hostility denies its own existence.",
  quickTakeaways: ["Passive-aggression stems from the dual desire to retaliate while evading accountability","Plausible deniability (\"I was only joking\") is the primary psychological shield","Calling out the underlying hostility directly forces covert dynamics into the light","Never respond with counter passive-aggression; enforce calm, clear boundaries"],

  whyItHappens: "Childhood environments where direct anger was severely punished or forbidden taught individuals that indirect resistance was the only safe form of self-defense.",
  evolutionaryMechanism: "Subordinate primates use covert sabotage and food-withholding to weaken despotic alpha leaders without risking direct lethal combat.",

  howItWorks: "Resentment experienced -> Direct assertion avoided out of fear -> Covert sabotage planned (deliberate mistake or delay) -> Target reacts with anger -> Passive-aggressive acts innocent -> Target appears unstable.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Direct Assertive Communication vs. Covert Passive Sabotage",
    description: "Comparing the emotional clarity of honest conflict against the toxic ambiguity of indirect hostility.",
    analogySideA: {
      label: "Direct Assertion (Healthy)",
      detail: "\"I disagree with this project deadline; let’s negotiate realistic deliverables openly.\"",
    },
    analogySideB: {
      label: "Passive-Aggression (Toxic Ambiguity)",
      detail: "Nods enthusiastically in the meeting, then deliberately submits incomplete work 3 days late with excuses.",
    },
  },

  researchSummary: "Kantor (2002, Passive-Aggression) and Millon (1993, Disorders of Personality) analyzed covert negativism and its clinical manifestation in interpersonal erosion and organizational paralysis.",
  references: [
    {
      id: 'ref_passive_aggressive_patterns_01',
      title: "Passive-Aggression: A Guide for the Clinician, the Patient, and the Sufferer",
      citation: "Kantor, M. (2002). Passive-Aggression. Praeger Publishers.",
      authors: "Kantor, M.",
      publicationYear: 2002,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.5860/choice.40-1854",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_passive_aggressive_patterns_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Sarcastic \"Fine\" in a Bangalore Flat",
      narrativeContext: "Pooja asked her flatmate Rhea to clean her dishes before leaving for work. Rhea said \"Fine, if you are that obsessed,\" washed three plates while slamming cabinets violently, and left one greasy pan directly on Pooja's laptop bag.",
      biasInAction: "Rhea used weaponized compliance and covert sabotage: she complied outwardly while inflicting acoustic and physical retaliation.",
      optimalResponse: "Address the covert pattern neutrally: \"Rhea, when you slam cupboards and leave grease on my bag, it feels like you are angry about my request. Can we talk about household chores honestly?\"",
      reflectionPrompt: "Have you ever agreed to a request with a sweet smile while deliberately dragging your feet or making subtle mistakes to punish the requester?",
    },
  ],

  examples: [
    {
      id: 'ex_passive_aggressive_patterns_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Sarcastic \"Fine\" in a Bangalore Flat",
      description: "Pooja asked her flatmate Rhea to clean her dishes before leaving for work. Rhea said \"Fine, if you are that obsessed,\" washed three plates while slamm...",
      takeaway: "Passive-aggression stems from the dual desire to retaliate while evading accountability",
    },
  ],

  howToRecognize: "Chronic sighing, sarcastic jokes followed by \"relax, don't take everything so seriously,\" and deliberate \"forgetting\" of key commitments.",
  whereYouEncounterIt: "Shared apartments, corporate email threads, extended family WhatsApp groups, and marital disputes.",
  commonMisconceptions: "Myth: \"Passive-aggressive people are evil masterminds.\" Fact: Most are deeply conflict-averse and terrified of rejection, resorting to covert tactics out of perceived helplessness.",
  limitationsAndControversies: "When living under tyrannical authoritarian regimes or physically abusive domestic situations, passive resistance can be a necessary survival tactic.",

  howToRespond: "Name the Game: Point out the discrepancy between words and actions without anger: \"You say everything is fine, but your body language and delayed emails suggest you are upset. What is really on your mind?\"",
  psychologicalDefenses: [{"title":"The Reality Discrepancy Callout","instruction":"Gently highlight the mismatch: \"Your words said yes, but your tone felt angry. I want to hear your real opinion.\""},{"title":"Refuse Plausible Deniability","instruction":"Never accept sarcastic digs; respond with calm neutrality: \"I don't understand the joke, could you explain what you meant?\""}],

  practiceQuestions: [
    {
      id: 'pq_passive_aggressive_patterns_01',
      difficulty: 'intermediate',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A project teammate agrees to review your slides, but \"forgets\" three days in a row, then says: \"Oops, sorry, I guess some of us have actual work to do! Just kidding!\" What is the most effective response?",
      scenarioText: "The teammate smiles sweetly while delivering the passive-aggressive dig.",
      explanation: "Calling out the covert aggression calmly removes plausible deniability without escalating into a screaming match.",
      antidoteAdvice: "Address the pattern directly: ask for an explanation of the joke and re-establish the professional boundary.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Laugh nervously and apologize for asking for help.",
          text: "Laugh nervously and apologize for asking for help.",
          feedbackText: "Incorrect. This rewards the passive-aggressive tactic and invites further disrespect.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Calmly look at them and ask: \"What did you mean by actual work? If you are too busy, just tell me directly so I can find another reviewer.\"",
          text: "Calmly look at them and ask: \"What did you mean by actual work? If you are too busy, just tell me directly so I can find another reviewer.\"",
          feedbackText: "Correct! This disarms the sarcasm and demands honest communication.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Secretly delete their files from the shared drive to get even.",
          text: "Secretly delete their files from the shared drive to get even.",
          feedbackText: "Incorrect. Counter-passive aggression creates a toxic workplace spiral.",
        }
      ],
    },
  ],

  reflectionPrompt: "When you are angry at someone, what stops you from expressing it clearly and assertively in that moment?",
  tags: ['Mentalab Mind', 'relationships_comm'],
  relatedTopics: [],
  seoTitle: `${"Passive-Aggression: Indirect Hostility and Covert Resistance"} | Mentalab Mind`,
  seoDescription: "A pattern of indirectly expressing negative feelings instead of openly addressing them, creating emotional erosion while maintaining plausible deniability.",
  canonicalUrl: '/mind/relationships-comm/passive-aggressive-patterns',
  ogImageUrl: '/images/mind/passive-aggressive-patterns.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Underneath passive-aggressive behavior is a profound fear of vulnerability and powerlessness. The individual feels entitled to anger but terrified of direct confrontation. In families and workplaces, chronic passive-aggression is far more toxic than open conflict because open conflict can be resolved with facts, while covert hostility denies its own existence.",
};

export const TOPIC_PASSIVE_AGGRESSIVE_PATTERNS_HINGLISH: MindTopicDetail = {
  ...TOPIC_PASSIVE_AGGRESSIVE_PATTERNS_EN,
  title: "Passive-Aggressive Behavior: Taano Aur Khamoshi Ka Khel",
  subtitle: "Kyu log seedha bolne ke bajaye sarcasm, late aana aur muh banana choose karte hain.",
  shortDescription: "Indirect hostility: Jab insaan gussa seedha nahi nikal pata to wo taane maarta hai aur kaam me delay karta hai.",
  oneLineExplanation: "Muh se \"Haan\" bolna par harkaton se badla lena.",
  summary30s: "Passive-aggression me log ladai se darrte hain, isliye seedha bolne ke bajaye indirect gussa dikhate hain: Bartan patakna, jaan-boojh kar der se aana, aur taana maar kar bolna: \"Mazaak kar raha tha, tum to bura maan gaye!\"",
  coreConcept: "Iska sabse bada hathiyar hota hai \"Plausible Deniability\"—yani aise acting karna jaise kuch hua hi nahi. Samne wale ko pareshan bhi kar diya aur masoom bhi ban gaye.",
  summary60s: "Bachpan me jin logo ko gussa express karne par daant padti thi, wo bade hokar passive-aggressive ban jate hain. Wo khul kar lad nahi sakte, isliye wo silent treatment dete hain ya kaam kharab karte hain. Iska ilaj hai unke taane ko shanti se call out karna.",
  quickTakeaways: ["Passive-aggression darr aur kamzori se aati hai, taaki zimmedari na leni pade","\"Mazaak kar raha tha\" passive-aggressive logo ka sabse bada shield hota hai","Unke jaisa bankar badla mat lo, balki shanti se unki harkat ko samne lao","Direct aur respectful baat karna hi is bimaari ka ek-matra ilaaj hai"],
  howItWorks: "Gussa aaya -> Direct bolne me darr laga -> Chupchap badla liya (kaam delay kiya) -> Target gussa hua -> Innocent bankar bola \"Aap to hamesha gussa rehte ho\".",
  howToRespond: "Taane par gussa mat karo, seedha pucho: \"Tum keh rahe ho sab theek hai, par tumhara chehra bol raha hai ki tum naraz ho. Asal baat kya hai?\"",
  practiceQuestions: [
    {
      ...TOPIC_PASSIVE_AGGRESSIVE_PATTERNS_EN.practiceQuestions[0],
      prompt: "Office me colleague ne aapke kaam par taana maara: \"Wah! Kuch log kitni aish karte hain!\" Aur fir bola \"Mazaak tha yaar!\" Kya response best hoga?",
      explanation: "Mazaak ke peeche chhipe taane ko seedhe sawal se neutralise kiya jata hai.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Jhoothi smile karke chup ho jana.",
          text: "Jhoothi smile karke chup ho jana.",
          feedbackText: "Galat. Isse samne wale ki himmat badhti hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Shanti se dekh kar poochna: \"Mujhe mazaak samajh nahi aaya, kya aap explain karenge ki aish se aapka kya matlab tha?\"",
          text: "Shanti se dekh kar poochna: \"Mujhe mazaak samajh nahi aaya, kya aap explain karenge ki aish se aapka kya matlab tha?\"",
          feedbackText: "Sahi! Yeh taane ko expose kar deta hai bina ladai kiye.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Uska lunch box chupa dena.",
          text: "Uska lunch box chupa dena.",
          feedbackText: "Galat. Yeh childish hai.",
        }
      ],
    },
  ],
  seoTitle: `${"Passive-Aggressive Behavior: Taano Aur Khamoshi Ka Khel"} | Mentalab Mind`,
  seoDescription: "Indirect hostility: Jab insaan gussa seedha nahi nikal pata to wo taane maarta hai aur kaam me delay karta hai.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_PASSIVE_AGGRESSIVE_PATTERNS_EN,
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

export const TOPIC_PASSIVE_AGGRESSIVE_PATTERNS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_PASSIVE_AGGRESSIVE_PATTERNS_EN,
  hinglish: TOPIC_PASSIVE_AGGRESSIVE_PATTERNS_HINGLISH,
  hi: createLocalizedRecord('hi', "परोक्ष आक्रामकता (Passive-Aggression)", "प्रत्यक्ष संवाद से बचते हुए अप्रत्यक्ष कटाक्ष, विलंब और व्यंग्य के माध्यम से क्रोध व्यक्त करने की मनोवैज्ञानिक प्रवृत्ति।", ["परोक्ष आक्रामकता भय और कमजोरी से उत्पन्न होती है","कटाक्ष और बहानेबाजी इसका मुख्य लक्षण है","स्पष्ट और शांत संवाद से इसे समाप्त करें"]),
  gu: createLocalizedRecord('gu', "પરોક્ષ આક્રમકતા (Passive-Aggression)", "સીધી વાત કરવાને બદલે કટાક્ષ, વિલંબ અને નારાજગી દ્વારા ગુસ્સો દર્શાવવાની વૃત્તિ.", ["પરોક્ષ ગુસ્સો ઓળખો","કટાક્ષનો શાંતિથી સામનો કરો","સ્પષ્ટ વાતચીત કરો"]),
  mr: createLocalizedRecord('mr', "अप्रत्यक्ष आक्रमकता (Passive-Aggression)", "थेट न बोलता टोमणे, टाळाटाळ आणि सुप्त नाराजीच्या माध्यमातून राग व्यक्त करण्याची सवय.", ["अप्रत्यक्ष राग ओळखा","टोमण्यांना शांतपणे आव्हान द्या","थेट संवादाला प्रोत्साहन द्या"]),
  te: createLocalizedRecord('te', "పరోక్ష దూకుడు (Passive-Aggression)", "ప్రత్యక్షంగా చెప్పకుండా వ్యంగ్యం, ఆలస్యం మరియు అలక ద్వారా కోపాన్ని వ్యక్తపరిచే మానసిక వైఖరి.", ["పరోక్ష కోపాన్ని గుర్తించండి","వ్యంగ్యాన్ని ధైర్యంగా ఎదుర్కోండి","స్పష్టమైన సంభాషణ ముఖ్యం"]),
  ta: createLocalizedRecord('ta', "மறைமுக ஆக்கிரமிப்பு (Passive-Aggression)", "நேரடியாக பேசாமல் நக்கல், தாமதம் மற்றும் மௌனத்தின் மூலம் கோபத்தை வெளிப்படுத்தும் தந்திரம்.", ["மறைமுக கோபத்தை தவிருங்கள்","நக்கலான பேச்சை எதிர்கொள்ளுங்கள்","நேர்மையான உரையாடல் நன்று"]),
  kn: createLocalizedRecord('kn', "ಪರೋಕ್ಷ ಆಕ್ರಮಣಶೀಲತೆ (Passive-Aggression)", "ನೇರವಾಗಿ ಹೇಳದೆ ವ್ಯಂಗ್ಯ, ವಿಳಂಬ ಮತ್ತು ಮೌನದ ಮೂಲಕ ಅಸಮಾಧಾನ ತೋರ್ಪಡಿಸುವ ವರ್ತನೆ.", ["ಪರೋಕ್ಷ ಸಿಟ್ಟನ್ನು ಗುರುತಿಸಿ","ವ್ಯಂಗ್ಯಕ್ಕೆ ಬಲಿಯಾಗಬೇಡಿ","ನೇರ ಸಂವಾದ ನಡೆಸಿ"]),
  ml: createLocalizedRecord('ml', "പരോക്ഷ ആക്രമണോത്സുകത (Passive-Aggression)", "നേരിട്ട് പറയാതെ പരിഹാസം, കാലതാമസം എന്നിവയിലൂടെ ദേഷ്യം പ്രകടിപ്പിക്കുന്ന രീതി.", ["പരോക്ഷ ദേഷ്യം തിരിച്ചറിയുക","പരിഹാസങ്ങളെ നേരിടുക","തുറന്ന ചർച്ച നടത്തുക"]),
  bn: createLocalizedRecord('bn', "পরোক্ষ আক্রমণাত্মক আচরণ (Passive-Aggression)", "সরাসরি বিরোধ না করে ব্যঙ্গ, অবহেলা এবং ইচ্ছাকৃত বিলম্বের মাধ্যমে রাগ প্রকাশের প্রবণতা।", ["পরোক্ষ রাগ শনাক্ত করুন","ব্যঙ্গের মুখোমুখি হোন","খোলামেলা কথা বলুন"]),
  pa: createLocalizedRecord('pa', "ਅਸਿੱਧੀ ਹਮਲਾਵਰਤਾ (Passive-Aggression)", "ਸਿੱਧੀ ਗੱਲ ਕਰਨ ਦੀ ਥਾਂ ਵਿਅੰਗ, ਦੇਰੀ ਅਤੇ ਗੁੱਸੇ ਨਾਲ ਆਪਣੀ ਨਾਰਾਜ਼ਗੀ ਦਿਖਾਉਣ ਦੀ ਆਦਤ।", ["ਅਸਿੱਧੇ ਗੁੱਸੇ ਨੂੰ ਪਛਾਣੋ","ਵਿਅੰਗ ਦਾ ਸ਼ਾਂਤੀ ਨਾਲ ਜਵਾਬ ਦਿਓ","ਸਾਫ਼ ਗੱਲ ਕਰੋ"]),
  ur: createLocalizedRecord('ur', "بالواسطہ جارحیت (Passive-Aggression)", "براہ راست بات کرنے کے بجائے طنز، سستی اور خاموشی کے ذریعے غصہ نکالنے کی عادت۔", ["بالواسطہ غصے کو پہچانیں","طنز کا پرسکون جواب دیں","کھل کر بات کریں"]),
  or: createLocalizedRecord('or', "ପରୋକ୍ଷ ଆକ୍ରମଣଶୀଳତା", "ସିଧାସଳଖ ନକହି ବ୍ୟଙ୍ଗ, ବିଳମ୍ବ ଓ ଅସହଯୋଗ ମାଧ୍ୟମରେ କ୍ରୋଧ ପ୍ରକାଶ କରିବା।", ["ପରୋକ୍ଷ କ୍ରୋଧ ବୁଝନ୍ତୁ","ବ୍ୟଙ୍ଗକୁ ସାମ୍ନା କରନ୍ତୁ","ସ୍ପଷ୍ଟ ଆଲୋଚନା କରନ୍ତୁ"]),
  as: createLocalizedRecord('as', "পৰোক্ষ আক্ৰমণাত্মকতা (Passive-Aggression)", "মুখ খুলি নকৈ ব্যংগ, অযথা পলম আৰু মৌনতাৰে খং প্ৰকাশ কৰাৰ মানসিকতা।", ["পৰোক্ষ খং চিনাক্ত কৰক","ব্যংগৰ সঠিক প্ৰত্যুত্তৰ দিয়ক","খোলাখুলিকৈ আলোচনা কৰক"]),
};
