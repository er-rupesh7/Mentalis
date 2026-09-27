import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: The Bystander Effect & Diffusion of Responsibility
 * Category: Social Psychology (social_psychology)
 * 
 * Academic Grounding:
 * - Darley & Latané (1968): Bystander Intervention in Emergencies: Diffusion of Responsibility
 * - Latané & Rodin (1969): A Lady in Distress: Inhibiting Effects of Friends and Strangers on Bystander Intervention
 * - Fischer et al. (2011): The Bystander-Effect: A Meta-Analytic Review on Bystander Intervention in Dangerous and Non-Dangerous Emergencies
 */

export const TOPIC_BYSTANDER_EFFECT_EN: MindTopicDetail = {
  id: 'bystander_effect',
  categoryId: 'social_psychology',
  slug: 'bystander-effect',
  difficulty: 'beginner',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 2,
  viewCount: 6240,
  shareCount: 510,
  bookmarkCount: 1080,
  title: 'The Bystander Effect: Why Crowds Paralyze Action in Emergencies',
  subtitle: 'Diffusion of responsibility, pluralistic ignorance, and the critical skill of directing singular action.',
  shortDescription: 'The social psychological phenomenon in which individuals are less likely to offer help to a victim when other people are present.',
  oneLineExplanation: 'In simple terms: Assuming someone else will step up, so nobody ends up doing anything.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'If an accident occurs on an empty desert road, a lone passerby stops almost 100% of the time. But if someone collapses in a bustling railway station surrounded by 200 commuters, people stare, walk past, or film with their phones. The Bystander Effect reveals that human beings look to the crowd to interpret danger: when everyone acts calm, everyone concludes nothing is wrong. The responsibility to act is diluted across the crowd until it equals zero.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Following the 1964 murder of Kitty Genovese in New York, social psychologists Bibb Latané and John Darley formulated the cognitive model of bystander intervention. They demonstrated that bystanders must navigate a 5-step cognitive sequence to intervene: (1) Notice the event; (2) Interpret it as an emergency; (3) Assume personal responsibility; (4) Decide how to help; (5) Implement action. The presence of others derails Steps 2 and 3 through Pluralistic Ignorance and Diffusion of Responsibility.',
  summary60s: 'In a classic laboratory experiment (Darley & Latané, 1968), university students were placed in individual cubicles communicating over an intercom. When an actor staged a severe epileptic seizure over the audio feed, 85% of participants who believed they were the ONLY listener immediately rushed out to seek help. But when participants believed four other listeners were present on the call, only 31% responded. The presence of passive peers reduced emergency responsiveness by more than half.',

  quickTakeaways: [
    'Crowd Paralysis: The larger the crowd, the lower the probability that any individual will intervene',
    'Diffusion of Responsibility: Each person\'s felt moral duty decreases in proportion to group size ($1/N$ phenomenon)',
    'Pluralistic Ignorance: Looking at others\' calm exterior and falsely concluding: "If they aren\'t reacting, it must not be serious"',
    'The Singular Direct Command: In an emergency, point directly at ONE specific person and assign ONE specific task',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Three interlocking social forces drive the effect: (1) Diffusion of Responsibility: The moral guilt of inaction is divided among all present; (2) Pluralistic Ignorance: In ambiguous situations, we look at others for social proof; because everyone conceals panic to avoid social embarrassment, the group collective mimics apathy; (3) Evaluation Apprehension: Fear of making a social faux pas by intervening in something that turns out to be harmless.',
  evolutionaryMechanism: 'Social conformity and avoiding missteps within the tribal hierarchy. Jumping out aggressively in front of the group risked public ridicule or escalating conflict without group backing.',

  // SECTION E — HOW DOES IT WORK?
  howItWorks: 'An ambiguous crisis unfolds in public. Person A feels a pulse of alarm but looks around. Person B is also alarmed but suppresses their expression to look composed. Person A sees Person B\'s calm face and thinks: "I guess it\'s just a street performer or drunkard." The silence feeds on itself until the victim succumbs.',
  whereYouEncounterIt: 'Road accidents on busy city highways, workplace sexual harassment in open-plan offices, bullying in school hallways, group chat threads where a question is asked to 100 people and nobody answers, and corporate fraud where whole accounting departments assume compliance is someone else\'s job.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Alone vs. In a Crowd: The Psychology of Helping',
    description: 'How individual moral weight is divided across a group.',
    analogySideA: {
      label: 'Single Witness (100% Moral Weight)',
      detail: '"If I do not call for an ambulance or pull them out, this person will die, and it is 100% on my conscience."',
    },
    analogySideB: {
      label: 'Crowd of 50 (2% Moral Weight Each)',
      detail: '"Surely one of these doctors, police officers, or older people has already dialed the emergency services. I don\'t want to cause a scene."',
    },
  },

  researchSummary: 'A comprehensive meta-analysis of over 105 experimental studies conducted by Fischer et al. (2011) confirmed the robust existence of the bystander effect across diverse cultural contexts, while noting that when emergencies are unambiguous, dangerous, and require physical intervention, the effect decreases because the situation is undeniably acute.',
  limitationsAndControversies: 'Recent video analysis of real-world CCTV footage (Philpot et al., 2019) across the UK, Netherlands, and South Africa showed that in 90% of violent public conflicts, at least one bystander intervened. The bystander effect is strongest in ambiguous, non-violent medical emergencies rather than active assaults where someone is screaming for life.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Seeing someone unconscious, bleeding, or being verbally assaulted while dozens of onlookers stand in a circle taking photos or looking at their shoes',
    'Feeling an urge to assist someone, but stopping because "no one else seems worried"',
    'A Slack/Teams channel with 50 colleagues where a critical production bug is posted and zero people acknowledge it for 4 hours',
    'Telling yourself: "Someone more qualified or senior will handle this"',
    'Waiting for someone else to make the first move before stepping forward yourself',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_bystander_01',
      scenarioType: 'indian_context',
      title: 'The Busy Intersection Road Accident',
      vignette: 'On a humid evening in Delhi, a motorcycle skids at a busy roundabout, throwing the rider against a curb. The rider is bleeding from his knee and cannot stand. Over 40 motorists and pedestrians stop to watch. Some take out their phones to record video clips; others mutter about reckless driving, but nobody steps into the road to help the rider or hail an auto-rickshaw. A college student, Priya, notices the crowd staring.',
      breakdownAnalysis: 'Classic pluralistic ignorance and diffusion of responsibility. The crowd’s collective hesitation creates an illusion that someone else has called the police or that intervening will trap them in bureaucratic legal hassle.',
      recommendedAction: 'Break the spell immediately by singling out individuals: Priya steps forward, points directly at a shopkeeper, and says: "Uncle, aap inka haath pakadiye. Aur bhaiya, jo phone pakde hain, aap 108 par ambulance call kijiye abhi!" By converting an anonymous crowd into directed roles, compliance jumps to near 100%.',
    },
  ],

  examples: [
    {
      id: 'ex_bystander_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Unanswered Group Email',
      description: 'An executive sends an urgent email: "Can someone please update the client quarterly forecast deck by 5 PM?" Sent to 12 managers, nobody replies because everyone assumes their peers will pick it up.',
      takeaway: 'When everyone is responsible, nobody is responsible. Always assign a single named owner.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'If you are a victim needing help in a crowd, NEVER yell "Somebody help me!" The crowd will diffuse it. Instead, eliminate ambiguity and eliminate anonymity: Point your finger at ONE specific person, make eye contact, and give an explicit command: "You in the red jacket, call 112 right now!" If you are a bystander, remember: "If you feel the urge to act, assume NO ONE ELSE has acted."',
  psychologicalDefenses: [
    'The Singular Pointer Rule: Eliminate anonymity by pointing at one person, describing an identifying feature (jacket, glasses), and giving a specific task',
    'Assume You Are the Only One: Act under the operational hypothesis that zero people have dialed emergency services',
    'First Mover Courage: Research shows that as soon as ONE person steps forward to help, the social proof flips, and 5-10 others immediately join in',
    'Assign Named Ownership at Work: Never end a meeting with "We need to fix this." End with: "Kavita will deliver the fix by Thursday 2 PM"',
  ],

  commonMisconceptions: [
    {
      misconception: 'People who don\'t help in crowds are callous, selfish, and evil.',
      reality: 'Most bystanders are experiencing intense internal anxiety. Their inaction is governed by powerful neurological social-proof circuits and fear of doing the wrong thing, not sociopathy.',
    },
  ],

  reflectionPrompt: 'Have you ever walked past someone who looked lost, upset, or in distress because a dozen other people were walking past them too? What kept you from pausing?',

  interactiveScenario: {
    id: 'interactive_bystander_01',
    topicId: 'bystander_effect',
    scenarioTitle: 'Emergency on the Metro Platform',
    scenarioDescription: 'An elderly man collapses on a crowded metro platform during rush hour. Over thirty people form a circle around him, whispering and looking at each other, but no one is touching him or calling emergency services.',
    vignetteSourceType: 'family_relationships',
    options: [
      {
        id: 'opt_1',
        text: 'Stand with the crowd and shout into the air: "Somebody call a doctor or an ambulance!"',
        isCorrect: false,
        cognitiveTakeaway: 'This reinforces diffusion of responsibility. Everyone assumes someone else in the crowd will pull out their phone.',
      },
      {
        id: 'opt_2',
        text: 'Kneel by the man, point directly at a commuter holding a briefcase, and state clearly: "You in the grey suit, call metro security immediately. You in the black shirt, help me turn him on his side."',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of social psychology! Singling out individuals shatters diffusion of responsibility and activates immediate compliance.',
      },
      {
        id: 'opt_3',
        text: 'Walk away quickly so you are not questioned by the authorities as a witness.',
        isCorrect: false,
        cognitiveTakeaway: 'Avoidant fear that sacrifices human life to avoid minor procedural inconvenience.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_bystander_01',
      questionType: 'multiple_choice',
      prompt: 'What did Latané and Darley call the phenomenon where people look at others\' calm exterior and conclude that a situation is not an emergency?',
      options: [
        { id: 'opt_a', text: 'Cognitive Dissonance', isCorrect: false },
        { id: 'opt_b', text: 'Pluralistic Ignorance', isCorrect: true, feedbackText: 'Correct! Pluralistic ignorance occurs when each member of a group privately feels alarm but public composure makes everyone believe nothing is wrong.' },
        { id: 'opt_c', text: 'Confirmation Bias', isCorrect: false },
      ],
      cognitiveTakeaway: 'Pluralistic ignorance misinterprets group paralysis as safety.',
    },
  ],

  references: [
    {
      citation: 'Darley, J. M., & Latané, B. (1968). Bystander intervention in emergencies: Diffusion of responsibility. Journal of Personality and Social Psychology, 8(4), 377–383.',
      doiOrUrl: 'https://doi.org/10.1037/h0025589',
      relevance: 'The foundational experimental study introducing diffusion of responsibility.',
      displayOrder: 1,
    },
    {
      citation: 'Fischer, P., Krueger, J. I., Greitemeyer, T., Vogrincic, C., Kastenmüller, A., Frey, D., ... & Kainbacher, M. (2011). The bystander-effect: A meta-analytic review. Psychological Bulletin, 137(4), 517–537.',
      doiOrUrl: 'https://doi.org/10.1037/a0024563',
      relevance: 'Extensive modern meta-analysis across over 100 empirical studies confirming the bystander effect.',
      displayOrder: 2,
    },
  ],

  tags: ['Social Psychology', 'Bystander Effect', 'Diffusion of Responsibility', 'Altruism', 'Emergency Response'],
  relatedTopics: [
    { topicId: 'social_proof', slug: 'social-proof', title: 'Social Proof', relationshipType: 'amplified_by' },
    { topicId: 'healthy_boundaries', slug: 'healthy-boundaries', title: 'Healthy Boundaries', relationshipType: 'general_related' },
  ],
  seoTitle: 'The Bystander Effect: Why Crowds Paralyze Action in Emergencies | Mentalab Mind',
  seoDescription: 'Master the psychology of the Bystander Effect. Learn why crowds ignore emergencies, how diffusion of responsibility works, and how to direct action.',
  canonicalUrl: '/mind/social-psychology/bystander-effect',
  ogImageUrl: '/images/mind/bystander-effect.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'The bystander effect represents an inverse correlation between the number of observers and the probability of prosocial intervention.',
};

export const TOPIC_BYSTANDER_EFFECT_HINGLISH: MindTopicDetail = {
  ...TOPIC_BYSTANDER_EFFECT_EN,
  title: 'Bystander Effect: Bheed Me Log Kisi Ki Madad Kyun Nahi Karte?',
  subtitle: 'Diffusion of Responsibility: Har koi sochta hai ki koi doosra aage aayega, aur aakhir me koi nahi aata.',
  shortDescription: 'Ek aisi psychological tendency jisme kisi emergency me jitni zyada bheed hoti hai, kisi victim ko madad milne ke chances utne hi kam ho jaate hain.',
  oneLineExplanation: 'Simple shabdon me: "Koi na koi toh madad kar hi dega" sochkar sabka khade reh kar tamasha dekhna.',

  summary30s: 'Agar kisi sunsaan sadak par koi bike se gir jaye, toh akela insaan turant ruk kar madad karta hai. Lekin wahi haadsa agar 500 logon ki bheed ke saamne ho, toh log sirf video banate hain ya chupchap nikal jaate hain. Isko bolte hain Bystander Effect. Har insaan sochta hai ki doosra police ko call kar chuka hoga, aur is tarah responsibility 500 hisson me bat kar zero ho jaati hai.',
  coreConcept: 'Latané aur Darley (1968) ne prove kiya tha ki bheed me do cheezein hoti hain: (1) Diffusion of Responsibility—gunah ka bojh sabme bat jata hai; (2) Pluralistic Ignorance—sab ek doosre ke chehre ko dekhte hain aur sochte hain ki jab koi react nahi kar raha toh baat serious nahi hogi.',
  summary60s: 'Experiment me dekha gaya ki jab student ko lagta tha ki wo akele sun raha hai aur kisi ko heart attack aaya, toh 85% log daud kar bachane gaye. Lekin jab unhe bataya gaya ki 4 aur log bhi sun rahe hain, toh sirf 31% gaye! Bheed emergency responsiveness ko aadhi se kam kar deti hai. Ilaaj yeh hai ki hawa me chillane ke bajaye kisi ek specific insaan ko point karke command dijiye.',

  quickTakeaways: [
    'Bheed ka paralysis: Jitni badi bheed, utna kam chances ki koi madad karega',
    'Zimmedari ka batwara: Har insaan sochta hai koi aur aage aayega',
    'Pluralistic Ignorance: Doosro ke shant chehre dekh kar dimaag khatre ko halka samajh leta hai',
    'Singular Command Rule: Emergency me bheed se mat kahiye; kisi ek ko ungli dikha kar kaam assign kijiye',
  ],

  whyItHappens: 'Insaan akele me 100% guilty feel karta hai agar wo madad na kare. Bheed me wo sochta hai: "Baaqi log bhi toh khade the, main akela thodi na jimmedar hoon."',
  evolutionaryMechanism: 'Tribal psychology me bheed se alag hokar akele aage aana risk lagta tha jab tak baki tribe support na kare.',

  howItWorks: 'Sadak par accident hua. Priya ne dekha sab shant khade hain. Usne seedha ek uncle ko point kiya: "Uncle, aap inka sir pakadiye, aur bhaiya, aap 108 call kijiye abhi!" Turant log madad me lag gaye.',
  howToRespond: 'Kabhi mat boliye "Koi madad karo!" Bolna hoga: "Aap red t-shirt wale bhaiya, abhi 112 par call lagaiye!"',

  reflectionPrompt: 'Kya aapne kabhi sadak par kisi ko pareshan dekha aur isliye aage nahi gaye kyunki baaqi log aage nahi aa rahe the?',
  seoTitle: 'Bystander Effect Kya Hai? Bheed Ki Psychology Aur Madad Mangne Ka Sahi Tareeqa | Mentalab Mind',
  seoDescription: 'Janiye kyu bheed me log madad nahi karte. Latané aur Darley ki research aur emergency me bheed ko activate karne ka psychological tareeqa.',
  canonicalUrl: '/mind/social-psychology/bystander-effect',
};

function createLocalizedBystanderRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_BYSTANDER_EFFECT_EN,
    title,
    subtitle,
    oneLineExplanation: oneLine,
    summary30s,
    coreConcept,
    quickTakeaways: takeaways,
    seoTitle: `${title} | Mentalab Mind`,
    seoDescription: `${summary30s.slice(0, 150)}...`,
  };
}

export const TOPIC_BYSTANDER_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_BYSTANDER_EFFECT_EN,
  hinglish: TOPIC_BYSTANDER_EFFECT_HINGLISH,
  hi: createLocalizedBystanderRecord(
    'hi',
    'बाईस्टैंडर प्रभाव (Bystander Effect): आपातकाल में भीड़ की निष्क्रियता का मनोविज्ञान',
    'उत्तरदायित्व का विभाजन: जितनी अधिक भीड़, पीड़ित को सहायता मिलने की संभावना उतनी ही कम।',
    'सरल शब्दों में: यह सोचकर कोई कदम न उठाना कि कोई अन्य व्यक्ति मदद कर देगा।',
    'बाईस्टैंडर प्रभाव तब होता है जब आपातकालीन स्थिति में उपस्थित लोग दूसरों की उपस्थिति के कारण मदद करने के लिए आगे नहीं आते।',
    'लताने और डार्ले (1968) के अनुसार, जिम्मेदारी का बिखराव और सामाजिक अनिर्णय भीड़ को मूकदर्शक बना देता है।',
    [
      'भीड़ का संकोच: अधिक लोगों की उपस्थिति व्यक्तिगत जिम्मेदारी को घटा देती है',
      'उत्तरदायित्व का बिखराव: हर कोई दूसरे पर निर्भर रहता है',
      'मूक सहमति: दूसरों के शांत चेहरे देखकर लोग खतरे को अनदेखा करते हैं',
      'सटीक निर्देश का नियम: भीड़ के बजाय किसी एक व्यक्ति को स्पष्ट काम सौंपें',
    ]
  ),
  gu: createLocalizedBystanderRecord(
    'gu',
    'બાયસ્ટેન્ડર ઇફેક્ટ: ભીડમાં લોકો મદદ કેમ નથી કરતા?',
    'જવાબદારીની વહેંચણી: બીજા કોઈ મદદ કરશે તે વિચારીને તમાશો જોવાની માનસિકતા.',
    'સરળ શબ્દોમાં: કોઈ બીજું મદદ કરશે તે વિચારીને પોતે ચૂપચાપ ઊભા રહેવું.',
    'જ્યારે ભીડ વધારે હોય ત્યારે કોઈ એક વ્યક્તિ મદદ માટે આગળ આવતી નથી.',
    'કોઈ એક વ્યક્તિને સીધો નિર્દેશ આપીને મદદ માંગવી સૌથી અસરકારક છે.',
    ['જવાબદારી ઓળખો', 'સહાય માટે આગળ આવો', 'ચોક્કસ વ્યક્તિને કહો']
  ),
  mr: createLocalizedBystanderRecord(
    'mr',
    'बायस्टँडर इफेक्ट: गर्दीत लोक मदतीसाठी पुढे का येत नाहीत?',
    'जबाबदारीचे विकेंद्रीकरण: कोणीतरी मदत करेल या भ्रमात प्रत्येकाचे दुर्लक्ष.',
    'सोप्या भाषेत: कोणीतरी मदत करेल असे समजून संकटात सापडलेल्याकडे दुर्लक्ष करणे.',
    'गर्दी जास्त असेल तेव्हा मदतीची शक्यता कमी होते; वैयक्तिक जबाबदारी संपते.',
    'संकटाच्या वेळी एका विशिष्ट व्यक्तीला निर्देश देऊन मदत मागणे हाच उपाय आहे.',
    ['गर्दीवर अवलंबून राहू नका', 'मदतीसाठी पुढे व्हा', 'स्पष्ट सूचना द्या']
  ),
  bn: createLocalizedBystanderRecord(
    'bn',
    'বাইস্ট্যান্ডার এফেক্ট: ভিড়ের মধ্যে মানুষ কেন সাহায্য করে না?',
    'দায়িত্বের বিভাজন: অন্য কেউ সাহায্য করবে ভেবে দর্শকের ভূমিকা পালন করার মানসিকতা।',
    'সহজ কথায়: অন্য কেউ করবে ভেবে বিপদে কারও সাহায্যে এগিয়ে না আসা।',
    'ভিড়ের মাঝে ব্যক্তিগত নৈতিক দায়িত্ব কমে যায়, ফলে কেউ সাহায্য পায় না।',
    'নির্দিষ্ট কাউকে লক্ষ্য করে সাহায্যের নির্দেশ দেওয়া জরুরি।',
    ['দায়িত্ব স্বীকার করুন', 'সাহায্যে এগিয়ে আসুন', 'নির্দিষ্ট ব্যক্তিকে বলুন']
  ),
  ta: createLocalizedBystanderRecord(
    'ta',
    'பைஸ்டாண்டர் விளைவு: கூட்டத்தில் மக்கள் ஏன் உதவ முன்வருவதில்லை?',
    'பொறுப்புப் பகிர்வு: வேறொருவர் உதவுவார் என்று எண்ணி வேடிக்கை பார்க்கும் உளவியல்.',
    'எளிய சொற்களில்: வேறொருவர் உதவுவார் என்ற எண்ணத்தில் ஆபத்தில் இருப்பவருக்கு உதவாமல் இருப்பது.',
    'கூட்டம் அதிகமாக இருக்கும் போது தனிநபர் பொறுப்புணர்வு குறைந்துவிடுகிறது.',
    'ஒரு குறிப்பிட்ட நபரைச் சுட்டிக்காட்டி உதவி கேட்பதே சிறந்தது.',
    ['பொறுப்பை உணருங்கள்', 'உதவ முன்வாருங்கள்', 'குறிப்பிட்ட நபரிடம் கேளுங்கள்']
  ),
  te: createLocalizedBystanderRecord(
    'te',
    'బైస్టాండర్ ఎఫెక్ట్: సమూహంలో ఉన్నప్పుడు ప్రజలు ఎందుకు సహాయం చేయరు?',
    'బాధ్యత విస్తరణ: వేరొకరు సహాయం చేస్తారని భావించి ప్రేక్షకులుగా మిగిలిపోయే తత్వం.',
    'సులభమైన మాటల్లో: ఎవరో ఒకరు సహాయం చేస్తారులే అని అనుకుని ఎవరూ ముందుకు రాకపోవడం.',
    'జనం ఎక్కువగా ఉన్నప్పుడు సహాయం అందే అవకాశం తగ్గుతుంది.',
    'ఒక నిర్దిష్ట వ్యక్తిని పిలిచి సహాయం అడగడమే పరిష్కారం.',
    ['బాధ్యత తీసుకోండి', 'సహాయానికి ముందుకు రండి', 'వ్యక్తిగతంగా అడగండి']
  ),
  kn: createLocalizedBystanderRecord(
    'kn',
    'ಬೈಸ್ಟ್ಯಾಂಡರ್ ಎಫೆಕ್ಟ್: ಜನಸಂದಣಿಯಲ್ಲಿ ಜನರು ಸಹಾಯ ಮಾಡಲು ಏಕೆ ಹಿಂಜರಿಯುತ್ತಾರೆ?',
    'ಜವಾಬ್ದಾರಿಯ ಹಂಚಿಕೆ: ಬೇರೆಯವರು ಸಹಾಯ ಮಾಡುತ್ತಾರೆಂದು ಭಾವಿಸಿ ನೋಡುತ್ತಾ ನಿಲ್ಲುವ ಪ್ರವೃತ್ತಿ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಬೇರೊಬ್ಬರು ಸಹಾಯ ಮಾಡುತ್ತಾರೆಂದು ತಿಳಿದು ತಾವೇನೂ ಮಾಡದಿರುವುದು.',
    'ಗುಂಪಿನಲ್ಲಿ ವೈಯಕ್ತಿಕ ಜವಾಬ್ದಾರಿ ಕ್ಷೀಣಿಸಿ ಸಹಾಯ ಸಿಗುವ ಸಾಧ್ಯತೆ ಕಡಿಮೆಯಾಗುತ್ತದೆ.',
    'ನಿರ್ದಿಷ್ಟ ವ್ಯಕ್ತಿಯನ್ನು ಹೆಸರಿಸಿ ಸಹಾಯ ಕೇಳುವುದು ಸೂಕ್ತ.',
    ['ಜವಾಬ್ದಾರಿ ಮರೆಯದಿರಿ', 'ಮುಂದೆ ಬಂದು ಸಹಾಯ ಮಾಡಿ', 'ನೇರ ನಿರ್ದೇಶನ ನೀಡಿ']
  ),
  ml: createLocalizedBystanderRecord(
    'ml',
    'ബൈസ്റ്റാൻഡർ ഇഫക്റ്റ്: ആൾക്കൂട്ടത്തിൽ ആളുകൾ സഹായിക്കാൻ മടിക്കുന്നത് എന്തുകൊണ്ട്?',
    'ഉത്തരവാദിത്തത്തിന്റെ വിഭജനം: മറ്റാരെങ്കിലും സഹായിക്കുമെന്ന് കരുതി നോക്കിനിൽക്കുന്ന മാനസികാവസ്ഥ.',
    'ലളിതമായി പറഞ്ഞാൽ: വേറെ ആരെങ്കിലും ചെയ്യുമെന്ന് കരുതി ആരും ഒന്നും ചെയ്യാതിരിക്കുക.',
    'കൂട്ടത്തിൽ വ്യക്തിഗത ഉത്തരവാദിത്തം കുറയുന്നതാണ് ഈ പ്രതിഭാസം.',
    'ഒരാളെ നേരിട്ട് ചൂണ്ടിക്കാണിച്ച് സഹായം അഭ്യർത്ഥിക്കുക.',
    ['ഉത്തരവാദിത്തം മറക്കരുത്', 'സഹായിക്കാൻ തയ്യാറാവുക', 'നേരിട്ട് നിർദ്ദേശം നൽകുക']
  ),
  pa: createLocalizedBystanderRecord(
    'pa',
    'ਬਾਈਸਟੈਂਡਰ ਪ੍ਰਭਾਵ: ਭੀੜ ਵਿੱਚ ਲੋਕ ਮਦਦ ਲਈ ਅੱਗੇ ਕਿਉਂ ਨਹੀਂ ਆਉਂਦੇ?',
    'ਜ਼ਿੰਮੇਵਾਰੀ ਦੀ ਵੰਡ: ਕੋਈ ਹੋਰ ਮਦਦ ਕਰੇਗਾ ਸੋਚ ਕੇ ਤਮਾਸ਼ਬੀਨ ਬਣਨ ਦੀ ਮਾਨਸਿਕਤਾ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਕੋਈ ਹੋਰ ਮਦਦ ਕਰੇਗਾ ਸਮਝ ਕੇ ਮੁਸੀਬਤ ਵੇਲੇ ਚੁੱਪ ਖੜ੍ਹੇ ਰਹਿਣਾ।',
    'ਭੀੜ ਵਿੱਚ ਹਰ ਕੋਈ ਜ਼ਿੰਮੇਵਾਰੀ ਤੋਂ ਪੱਲਾ ਝਾੜ ਲੈਂਦਾ ਹੈ।',
    'ਕਿਸੇ ਇੱਕ ਵਿਅਕਤੀ ਨੂੰ ਇਸ਼ਾਰਾ ਕਰਕੇ ਕੰਮ ਸੌਂਪਣਾ ਹੀ ਸਹੀ ਤਰੀਕਾ ਹੈ।',
    ['ਜ਼ਿੰਮੇਵਾਰੀ ਪਛਾਣੋ', 'ਮਦਦ ਕਰੋ', 'ਸਪਸ਼ਟ ਹਦਾਇਤ ਦਿਓ']
  ),
  ur: createLocalizedBystanderRecord(
    'ur',
    'بائی اسٹینڈر اثر: ہجوم میں لوگ مدد کے لیے آگے کیوں نہیں آتے؟',
    'ذمہ داری کا پھیلاؤ: کوئی دوسرا مدد کر دے گا سوچ کر خاموش تماشائی بننے کی نفسیات۔',
    'آسان الفاظ میں: یہ سوچ کر مدد نہ کرنا کہ کوئی اور شخص آگے بڑھ کر مدد کر دے گا۔',
    'ہجوم میں انفرادی احساسِ ذمہ داری کم ہو کر صفر رہ جاتا ہے۔',
    'ہجوم کے بجائے کسی ایک مخصوص شخص کو پکار کر مدد طلب کریں۔',
    ['ذمہ داری سمجھیں', 'مدد کے لیے آگے بڑھیں', 'براہ راست ہدایت دیں']
  ),
  or: createLocalizedBystanderRecord(
    'or',
    'ବାଇଷ୍ଟାଣ୍ଡର ପ୍ରଭାବ: ଭିଡ଼ ଭିତରେ ଲୋକେ ସାହାଯ୍ୟ କାହିଁକି କରନ୍ତି ନାହିଁ?',
    'ଦାୟିତ୍ୱର ବିଭାଜନ: ଅନ୍ୟ କେହି ସାହାଯ୍ୟ କରିବ ଭାବି ଦର୍ଶକ ସାଜିବାର ମନସ୍ତତ୍ତ୍ୱ।',
    'ସହଜ ଭାଷାରେ: ଅନ୍ୟ କେହି କରିଦେବ ଭାବି ବିପଦ ସମୟରେ ନିଜେ କିଛି ନ କରିବା।',
    'ଭିଡ଼ ଅଧିକ ହେଲେ ବ୍ୟକ୍ତିଗତ ଦାୟିତ୍ୱବୋଧ ହ୍ରାସ ପାଏ।',
    'ଜଣେ ନିର୍ଦ୍ଦିଷ୍ଟ ବ୍ୟକ୍ତିଙ୍କୁ ନିର୍ଦ୍ଦେଶ ଦେଇ ସାହାଯ୍ୟ ମାଗିବା ସର୍ବୋତ୍ତମ।',
    ['ଦାୟିତ୍ୱ ବୁଝନ୍ତୁ', 'ସାହାଯ୍ୟ ପାଇଁ ଆଗକୁ ଆସନ୍ତୁ', 'ନିର୍ଦ୍ଦିଷ୍ଟ ବ୍ୟକ୍ତିଙ୍କୁ କୁହନ୍ତୁ']
  ),
  as: createLocalizedBystanderRecord(
    'as',
    'বাইষ্টেণ্ডাৰ প্ৰভাৱ: ভিৰৰ মাজত মানুহে সহায় কৰিবলৈ আগবাঢ়ি নাহে কিয়?',
    'দায়িত্বৰ বিভাজন: আনে সহায় কৰিব বুলি ভাবি নীৰৱ দৰ্শক হোৱাৰ মানসিকতা।',
    'সহজ কথাত: আনে কিবা কৰিব বুলি ভাবি বিপদৰ সময়ত কোনেও আগবাঢ়ি নহা।',
    'ভিৰত ব্যক্তিৰ নৈতিক দায়িত্ব ভাগ হৈ যায় আৰু কোনেও একো নকৰে।',
    'নিৰ্দিষ্ট এজন ব্যক্তিক উদ্দেশ্যি সহায়ৰ নিৰ্দেশ দিয়ক।',
    ['দায়িত্ব স্বীকাৰ কৰক', 'সহায়ৰ হাত আগবঢ়াওক', 'নিৰ্দিষ্ট ব্যক্তিক আহ্বান জনাওক']
  ),
};
