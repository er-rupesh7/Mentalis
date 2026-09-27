import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 11: Intermittent Reinforcement
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Skinner (1953): Operant Conditioning & Variable Ratio Schedules
 * - Carnes (1997): The Betrayal Bond: Breaking Free of Exploitive Relationships (Trauma Bonding)
 * - Dutton & Painter (1981): Traumatic Bonding: The Development of Emotional Attachments in Battered Relationships
 * - Fisher et al. (2010): Reward, Addiction, and Emotion Regulation Systems in Romance
 */

export const TOPIC_INTERMITTENT_REINFORCEMENT_EN: MindTopicDetail = {
  id: 'intermittent_reinforcement',
  categoryId: 'manipulation_awareness',
  slug: 'intermittent-reinforcement',
  difficulty: 'advanced',
  estimatedReadingMinutes: 8,
  scientificConsensusTier: 'established',
  sortWeight: 11,
  viewCount: 7890,
  shareCount: 670,
  bookmarkCount: 1320,
  title: 'Intermittent Reinforcement: The Biochemistry of Trauma Bonding',
  subtitle: 'Why unpredictable cycles of warmth and cruelty create biological addictions to toxic relationships.',
  shortDescription: 'The delivery of rewards (warmth, affection, approval) at unpredictable intervals interspersed with punishment or coldness, generating an addictive neurochemical bond.',
  oneLineExplanation: 'In simple terms: Being warm one day and cruel the next, keeping someone desperately chasing the high of your approval.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'If a partner or manager treats you terribly 100% of the time, leaving is psychologically simple. But if they are cruel for six days and then suddenly shower you with intense tenderness, gifts, and apologies on the seventh, your brain enters an addictive neurochemical state. Intermittent reinforcement floods the nervous system with dopamine and adrenaline, creating a biochemical "Trauma Bond" identical to severe gambling addiction.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'First documented by B.F. Skinner and applied to human relationships by Dutton and Painter (1981) and Dr. Patrick Carnes (1997), intermittent reinforcement is the most powerful psychological mechanism of behavioral entrapment known to science. The victim does not stay because they are weak or enjoy suffering; they stay because the unpredictable transition from terror/abandonment to sudden relief and affection triggers an explosive surge of endogenous opioids and dopamine in the brain’s mesolimbic reward system.',
  summary60s: 'In a healthy relationship, safety is predictable, steady, and reliable. In an intermittently abusive relationship, safety is rationed like bread during a famine. The victim spends all their cognitive energy monitoring the abuser’s mood ("Is today a good day or an explosion day?"). When the abuser finally smiles or expresses warmth, the victim’s nervous system experiences euphoric relief. The victim bonds not despite the cruelty, but BECAUSE of the contrast created by the intermittent relief.',

  quickTakeaways: [
    'The Contrast Effect: Warmth feels intoxicating only because it was preceded by coldness and fear',
    'Biochemical Addiction: Cortisol (stress) spikes during cruelty, followed by a dopamine/oxytocin flood during reunion, forging a trauma bond',
    'Why Leaving Feels Like Drug Withdrawal: Breaking away causes physical shaking, nausea, insomnia, and obsessive cravings for the person',
    'Consistency is the Test: Real love and healthy leadership are consistent, boring, and emotionally safe; volatility is not passion',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Dopamine prediction error and the endogenous opioid system. As Helen Fisher’s fMRI research (2010) demonstrated, romantic rejection and unpredictable attachment activate the exact same nucleus accumbens circuits as cocaine addiction. The brain becomes biochemically hooked on the high of the "reconciliation honeymoon."',
  evolutionaryMechanism: 'Attachment survival. In infancy, a caregiver who alternates between neglect and sudden warmth compels the infant to cling with desperate, hyper-vigilant intensity to avoid abandonment.',

  // SECTION E — WHY DO MANIPULATORS USE IT?
  howItWorks: 'The cycle operates in 4 stages: (1) Tension Building & Coldness; (2) The Incident / Cruelty / Discard; (3) The Reconciliation / Love-Bomb / "Good Day"; (4) Calm & Hope. The unpredictability ensures the target never feels completely secure, keeping them compliant, self-doubting, and eager to please.',
  whereYouEncounterIt: 'High-conflict romantic relationships, toxic family dynamics (a parent who oscillates between fury and excessive praise), startup founders who swing between berating employees and promising millions in equity, and cult leadership.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Consistent Healthy Safety vs. Intermittent Trauma Bond',
    description: 'The difference between authentic emotional stability and biochemical entrapment.',
    analogySideA: {
      label: 'Healthy Relationship (Predictable)',
      detail: 'Affection is steady. Disagreements are handled without cruelty. No walking on eggshells. Baseline cortisol remains low.',
    },
    analogySideB: {
      label: 'Intermittent Reinforcement (The Rollercoaster)',
      detail: 'Mon-Thu: Icy stares, insults, silent treatment. Fri: "I love you so much, baby, let\'s go to dinner!" Victim feels euphoric high.',
    },
  },

  researchSummary: 'Dutton & Painter (1981) demonstrated that the power imbalance combined with the intermittency of the abuse directly predicts the strength of the emotional bond to the abuser. The greater the oscillation between fear and relief, the stronger the psychological entrapment.',
  limitationsAndControversies: 'Every human has bad days. An occasional mood swing due to illness, grief, or financial stress is normal human variability. Intermittent reinforcement becomes manipulative when mood volatility is used systematically to maintain power, escape accountability, and enforce subservience.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Waking up every morning scanning their tone, facial expression, and footsteps to determine: "What mood am I dealing with today?"',
    'Excusing days of verbal cruelty because "When things are good, they are the most magical, amazing person on earth"',
    'Feeling like you are on an emotional rollercoaster of ecstatic highs and gut-wrenching lows',
    'A boss who publicly screams at you on Wednesday and invites you to an exclusive dinner praising your brilliance on Friday',
    'Feeling physically sick, shaky, and unable to function during their cold phases, and instantly restored the second they send a warm text',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_intermit_01',
      scenarioType: 'indian_context',
      title: 'The Volatile Romance and Emotional Rollercoaster',
      vignette: 'Simran is dating Karan in Delhi. On Monday and Tuesday, Karan is cold, criticizes her clothes, ignores her calls, and tells her she is too needy. Simran spends those days crying and questioning her self-worth. On Wednesday evening, Karan arrives at her apartment with flowers, weeps, tells her she is the love of his life, and cooks dinner for her. Simran feels an overwhelming rush of love and thinks: "See, his true soul loves me; he just gets stressed." By Saturday, the cold silence resumes.',
      breakdownAnalysis: 'Simran is caught in a severe biochemical trauma bond generated by intermittent reinforcement. The Wednesday "honeymoon" feels so intoxicating precisely because it is the sudden relief from Monday\'s agony. Her brain interprets relief as deep love.',
      recommendedAction: 'Simran must evaluate the baseline, not the peak: "A relationship is defined by its average daily treatment, not its ecstatic peaks." Track the days objectively on a calendar. When 25 out of 30 days are miserable, the 5 magical days are the bait, not the truth.',
    },
  ],

  examples: [
    {
      id: 'ex_intermit_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Tyrant Startup CEO',
      description: 'A tech CEO humiliates a director in an all-hands meeting, then sends them a midnight Slack message: "You are the only person at this company I truly trust to run this division." The director works 90 hours that week to chase that validation.',
      takeaway: 'Intermittent praise after humiliation creates workplace trauma bonds that extract extreme labor.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'To break an intermittent reinforcement bond, recognize that you are dealing with a chemical withdrawal process. You cannot "talk them" into consistency. You must establish radical behavioral tracking: write down the facts of how they treat you every day. Seek professional trauma-informed therapy, cut contact or gray-rock completely, and expect 30 to 90 days of intense physical withdrawal symptoms.',
  psychologicalDefenses: [
    'The Calendar Reality Check: Mark good days with green and abusive days with red on a private calendar; seeing 80% red shatters the illusion of "the good times"',
    'Treat Volatility as the Dealbreaker: Teach your nervous system that unpredictability is danger, not chemistry or passion',
    'Expect Biochemical Withdrawal: Acknowledge that the intense yearning you feel after separation is neurochemical withdrawal (dopamine/opioid craving), not proof of a soulmate',
    'Strict No-Contact: Any single warm text or call resets the intermittent reward schedule and restarts the addiction loop',
  ],

  commonMisconceptions: [
    {
      misconception: 'The victim stays because they have low self-esteem or enjoy the drama.',
      reality: 'Victims stay because intermittent reinforcement alters the physical neurobiology of the brain. Strong, highly successful, intelligent people get trapped in trauma bonds every day.',
    },
  ],

  reflectionPrompt: 'Are you currently tolerating chronic disrespect from someone because you are addicted to the occasional magical moments when they are warm and loving?',

  interactiveScenario: {
    id: 'interactive_intermit_01',
    topicId: 'intermittent_reinforcement',
    scenarioTitle: 'The Midnight Reconciliaton',
    scenarioDescription: 'Your partner has ignored you for 5 days, refused to look at you, and called you selfish. Tonight, they suddenly crawl into bed, hold you tightly, kiss your forehead, and whisper: "I am so sorry, I love you more than life itself."',
    vignetteSourceType: 'family_relationships',
    options: [
      {
        id: 'opt_1',
        text: 'Melt with relief, cuddle them, and erase the memory of the past 5 days of cruelty because "their love is real."',
        isCorrect: false,
        cognitiveTakeaway: 'This cements the trauma bond! You reward intermittent cruelty with immediate surrender, ensuring the cycle repeats.',
      },
      {
        id: 'opt_2',
        text: 'Maintain your grounded boundary: "I hear your words, but you froze me out and degraded me for 5 days. A sudden hug does not erase 5 days of emotional punishment. We need to talk about your pattern tomorrow in the daylight."',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of trauma bond defense! You refuse to let momentary warmth sweep away systematic accountability.',
      },
      {
        id: 'opt_3',
        text: 'Scream at them, throw pillows, and pack your bags in a blind fury at 2:00 AM.',
        isCorrect: false,
        cognitiveTakeaway: 'Emotional flooding that keeps the drama loop spinning rather than asserting calm, grounded boundaries.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_intermit_01',
      questionType: 'multiple_choice',
      prompt: 'Why does intermittent reinforcement create an emotional bond that is significantly stronger than continuous kindness?',
      options: [
        { id: 'opt_a', text: 'Because humans naturally prefer being mistreated', isCorrect: false },
        { id: 'opt_b', text: 'Because the unpredictable alternation between fear/cortisol and relief/dopamine mimics the neurochemistry of severe addictive gambling', isCorrect: true, feedbackText: 'Correct! The intense contrast between distress and sudden relief hijacks the brain’s endogenous opioid and dopamine reward systems.' },
        { id: 'opt_c', text: 'Because unpredictable people are mathematically more intelligent', isCorrect: false },
      ],
      cognitiveTakeaway: 'Trauma bonds are neurobiologically forged through the contrast of unpredictable relief.',
    },
  ],

  references: [
    {
      citation: 'Carnes, P. (1997). The betrayal bond: Breaking free of exploitive relationships. Health Communications, Inc.',
      doiOrUrl: 'https://doi.org/10.1037/e612342011-001',
      relevance: 'The foundational clinical text explaining trauma bonding and the addiction to intermittent relational cycles.',
      displayOrder: 1,
    },
    {
      citation: 'Dutton, D. G., & Painter, S. L. (1981). Traumatic bonding: The development of emotional attachments in battered relationships. Victimology: An International Journal, 6(1-4), 139–155.',
      doiOrUrl: 'https://doi.org/10.1037/h0080854',
      relevance: 'The seminal academic paper proving how power imbalances and intermittent abuse generate powerful trauma bonds.',
      displayOrder: 2,
    },
  ],

  tags: ['Manipulation Awareness', 'Trauma Bonding', 'Intermittent Reinforcement', 'Skinner', 'Addiction', 'Relationships'],
  relatedTopics: [
    { topicId: 'love_bombing', slug: 'love-bombing', title: 'Love Bombing', relationshipType: 'amplified_by' },
    { topicId: 'silent_treatment', slug: 'silent-treatment', title: 'Silent Treatment', relationshipType: 'amplified_by' },
    { topicId: 'healthy_boundaries', slug: 'healthy-boundaries', title: 'Healthy Boundaries', relationshipType: 'counteracted_by' },
  ],
  seoTitle: 'Intermittent Reinforcement: The Biochemistry of Trauma Bonding | Mentalab Mind',
  seoDescription: 'Master the psychology of Intermittent Reinforcement and Trauma Bonding. Learn why unpredictable warmth hooks the brain like gambling and how to break free.',
  canonicalUrl: '/mind/manipulation-awareness/intermittent-reinforcement',
  ogImageUrl: '/images/mind/intermittent-reinforcement.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Intermittent reinforcement generates compulsive attachment via variable ratio operant conditioning that activates dopamine prediction error circuits.',
};

export const TOPIC_INTERMITTENT_REINFORCEMENT_HINGLISH: MindTopicDetail = {
  ...TOPIC_INTERMITTENT_REINFORCEMENT_EN,
  title: 'Intermittent Reinforcement: Kabhi Pyaar Kabhi Nafrat Ka Nasha Aur Trauma Bonding',
  subtitle: 'Unpredictable pyaar ka zeher: Hum toxic logon ko chhod kyu nahi paate?',
  shortDescription: 'Jab koi insaan lagatar bura behave karne ke baad achaanak bohot zyada pyaar aur attention deta hai, jisse samne wale ke dimaag me ek addictive trauma bond ban jata hai.',
  oneLineExplanation: 'Simple shabdon me: 6 din dard dena aur 7ve din phool dekar pehle ke saare dukh bhulwa dena.',

  summary30s: 'Agar koi aapse roz 100% bura behave kare, toh aap us rishte ko aaram se chhod denge. Lekin agar koi 6 din chup rahe, beizzati kare aur 7ve din achaanak gale lagakar bole "Tum meri jaan ho," toh dimaag me dopamine aur adrenaline ka blast hota hai. Isko bolte hain Intermittent Reinforcement. Yeh bilkul Las Vegas ke juve (gambling) jaisa nasha banata hai jise psychology me "Trauma Bond" kehte hain.',
  coreConcept: 'Dr. Patrick Carnes (1997) ne prove kiya tha ki log toxic rishte me kamzori ki wajah se nahi rukte; wo chemical addiction me phase hote hain. Jab darr aur coldness ke baad achaanak relief milta hai, toh brain ke andar opioids release hote hain. Insaan us thode se pyaar (crumbs) ke liye saara zulm sehne lagta hai.',
  summary60s: 'Healthy relationship me pyaar predictable aur steady hota hai. Toxic relationship me pyaar ka roller coaster hota hai: kabhi aasmaan par, kabhi zameen par. Insaan roz subah uthkar partner ka mood scan karta hai: "Aaj achha din hoga ya jhagda hoga?" Jis din achha hota hai, us din relief itna tagda milta hai ki pichle saare gunah maaf ho jaate hain.',

  quickTakeaways: [
    'Contrast Effect: Pyaar isliye itna meetha lagta hai kyunki uske pehle gehra dard diya gaya tha',
    'Chemical Nasha: Cortisol (stress) aur dopamine (pleasure) ka cycle dimaag ko cocaine ki tarah jakad leta hai',
    'Withdrawal ka Dard: Aise rishte ko chhodne par shareer me drug withdrawal jaise symptoms hote hain (shaking, rona, bechaini)',
    'Consistency ka Test: Asali pyaar shant aur consistent hota hai; drama aur roller coaster pyaar nahi manipulation hai',
  ],

  whyItHappens: 'Dopamine prediction error: Unpredictable reward milne par dimaag use pane ke liye pagal ho jata hai.',
  evolutionaryMechanism: 'Bachpan me agar maa-baap ka pyaar unpredictable ho, toh bachha unse chipakne ki koshish karta hai taaki zinda reh sake.',

  howItWorks: 'Simran ke sath Karan 5 din baat nahi karta. 6the din sorry bolkar dinner par le jata hai. Simran sochti hai: "Dekho dil ka kitna achha hai." Reality yeh hai ki Karan ne manipulation ka cycle poora kiya.',
  howToRespond: 'Calendar test kijiye: Din ko Red aur Green mark kijiye. Agar 30 me se 24 din Red hain, toh wo 6 Green din pyaar nahi, balki jaal hain. No-contact kijiye aur therapy lijiye.',

  reflectionPrompt: 'Kya aap kisi aise rishte ya boss ke sath hain jahan aapko kabhi nahi pata hota ki unka agla reaction pyaar bhara hoga ya gusse bhara?',
  seoTitle: 'Intermittent Reinforcement Kya Hai? Trauma Bonding Ki Psychology | Mentalab Mind',
  seoDescription: 'Janiye kyu log toxic rishto me phase rehte hain. Intermittent reinforcement, dopamine addiction aur trauma bond todne ke practical tareeqe.',
  canonicalUrl: '/mind/manipulation-awareness/intermittent-reinforcement',
};

function createLocalizedIntermitRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_INTERMITTENT_REINFORCEMENT_EN,
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

export const TOPIC_INTERMITTENT_REINFORCEMENT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_INTERMITTENT_REINFORCEMENT_EN,
  hinglish: TOPIC_INTERMITTENT_REINFORCEMENT_HINGLISH,
  hi: createLocalizedIntermitRecord(
    'hi',
    'आंतरायिक सुदृढ़ीकरण (Intermittent Reinforcement): कभी प्यार कभी उपेक्षा का नशा और ट्रॉमा बॉन्डिंग',
    'अनिश्चित स्नेह का जाल: हम विषाक्त संबंधों और अप्रत्याशित व्यवहार के आदी क्यों हो जाते हैं।',
    'सरल शब्दों में: कई दिन उपेक्षा और कठोरता के बाद अचानक अत्यधिक स्नेह देकर सामने वाले को अपनी प्रशंसा का आदी बना देना।',
    'आंतरायिक सुदृढ़ीकरण तब होता है जब कोई व्यक्ति अप्रत्याशित रूप से स्नेह और दुर्व्यवहार के बीच झूलता रहता है, जिससे मस्तिष्क में जुए जैसी लत बन जाती है।',
    'पैट्रिक कार्नेस (1997) और डटन (1981) के अनुसार, यह चक्र एक गहरा भावनात्मक ट्रॉमा बॉन्ड बनाता है जिसे तोड़ना अत्यंत कठिन होता है।',
    [
      'तीव्र राहत का प्रभाव: लगातार उपेक्षा के बाद मिलने वाला स्नेह मस्तिष्क में अत्यधिक डोपामाइन छोड़ता है',
      'जैविक लत: कोर्टिसोल और डोपामाइन का चक्र नशीली दवाओं जैसा प्रभाव पैदा करता है',
      'स्थिरता का अभाव: अप्रत्याशित व्यवहार वास्तविक प्रेम नहीं बल्कि नियंत्रण का साधन है',
      'कैलेंडर परीक्षण: अच्छे और बुरे दिनों का वस्तुनिष्ठ लेखा-जोखा रखें',
    ]
  ),
  gu: createLocalizedIntermitRecord(
    'gu',
    'ઇન્ટરમિટન્ટ રિઇન્ફોર્સમેન્ટ: ક્યારેક પ્રેમ ક્યારેક ઉપેક્ષાની લત અને ટ્રોમા બોન્ડિંગ',
    'અનિશ્ચિત વર્તનનું રહસ્ય: ઝેરી સંબંધોમાંથી બહાર નીકળવું કેમ મુશ્કેલ બને છે.',
    'સરળ શબ્દોમાં: થોડા દિવસ ખરાબ વર્તન કર્યા પછી અચાનક ખૂબ પ્રેમ બતાવીને સામેવાળાને વશમાં રાખવો.',
    'આ ચક્ર વ્યક્તિના મગજમાં જુગાર જેવી લત પેદા કરે છે, જેનાથી તે સંબંધ છોડી શકતી નથી.',
    'સાચો પ્રેમ હંમેશાં સ્થિર અને સુરક્ષિત હોય છે, ભાવનાત્મક રોલરકોસ્ટર નહીં.',
    ['વિષચક્ર ઓળખો', 'માનસિક લતથી બચો', 'સ્થિરતા શોધો']
  ),
  mr: createLocalizedIntermitRecord(
    'mr',
    'इंटरमिटंट रिइन्फोर्समेंट: कधी प्रेम तर कधी उपेक्षा आणि ट्रॉमा बाँडिंगची नशा',
    'अनपेक्षित वागणुकीचे शास्त्र: विषारी नात्यांमध्ये अडकून पडण्यामागचे जैविक कारण.',
    'सोप्या भाषेत: काही दिवस वाईट वागवून अचानक अफाट प्रेम दाखवणे आणि समोरच्याला आपल्या प्रेमाचा भुकेला ठेवणे.',
    'पॅट्रिक कार्नेस यांच्या मते, हे चक्र मेंदूमध्ये जुगारासारखे व्यसन निर्माण करते.',
    'खरे प्रेम हे शांत आणि स्थिर असते; भावनिक चढउतार म्हणजे प्रेम नाही.',
    ['भावनिक चक्र ओळखा', 'व्यसन मोडून काढा', 'स्वतःची सुटका करा']
  ),
  bn: createLocalizedIntermitRecord(
    'bn',
    'ইন্টারমিটেন্ট রিইনফোর্সমেন্ট: কখনো ভালোবাসা কখনো অবহেলার আসক্তি ও ট্রমা বন্ডিং',
    'অনিশ্চিত আচরণের মনস্তত্ত্ব: বিষাক্ত সম্পর্ক থেকে বের হতে না পারার বৈজ্ঞানিক ব্যাখ্যা।',
    'সহজ কথায়: কয়েক দিন দুর্ব্যবহারের পর হঠাৎ অতিরিক্ত ভালোবাসা দেখিয়ে কাউকে বশীভূত রাখা।',
    'ভয় এবং স্বস্তির এই পর্যায়ক্রমিক আবর্তন মস্তিষ্কে জুয়ার মতো আসক্তি তৈরি করে।',
    'প্রকৃত ভালোবাসা সবসময় শান্ত এবং নির্ভরযোগ্য হয়।',
    ['আসক্তি চিনুন', 'সীমানা নির্ধারণ করুন', 'স্থির সম্পর্ক খুঁজুন']
  ),
  ta: createLocalizedIntermitRecord(
    'ta',
    'விட்டுவிட்டு வலுவூட்டல்: அன்பு மற்றும் புறக்கணிப்பின் போதை மற்றும் ட்ராமா பாண்டிங்',
    'நிலையற்ற நடத்தையின் உளவியல்: நச்சு உறவுகளில் மக்கள் சிக்குவதற்கான காரணம்.',
    'எளிய சொற்களில்: சில நாட்கள் கொடுமைப்படுத்தி, திடீரென அதீத அன்பைக் காட்டி ஒருவரை அடிமையாக்குவது.',
    'அச்சமும் நிம்மதியும் மாறி மாறி வருவது மூளையில் சூதாட்டத்தைப் போன்ற தீவிர பழக்கத்தை உண்டாக்குகிறது.',
    'உண்மையான அன்பு எப்போதுமே நிலையானது மற்றும் பாதுகாப்பானது.',
    ['சுழற்சியை உணருங்கள்', 'மன அடிமைத்தனத்தை விடுங்கள்', 'நிலையான அன்பு']
  ),
  te: createLocalizedIntermitRecord(
    'te',
    'ఇంటర్‌మిట్టెంట్ రీఇన్‌ఫోర్స్‌మెంట్: ఎప్పుడో ప్రేమ ఎప్పుడో నిర్లక్ష్యం మరియు ట్రామా బాండింగ్',
    'అనిశ్చిత ప్రవర్తన వెనుక ఉన్న విజ్ఞానం: విషపూరిత సంబంధాల నుండి బయటపడలేకపోవడానికి కారణం.',
    'సులభమైన మాటల్లో: కొన్ని రోజులు బాధపెట్టి, అకస్మాత్తుగా అమితమైన ప్రేమను చూపిస్తూ లొంగదీసుకోవడం.',
    'ఈ చక్రం మెదడులో జూదం లాంటి వ్యసనాన్ని సృష్టిస్తుంది.',
    'నిజమైన ప్రేమ ఎల్లప్పుడూ నిలకడగా మరియు సురక్షితంగా ఉంటుంది.',
    ['విష వలయాన్ని గుర్తించండి', 'మానసిక బంధాన్ని తెంచండి', 'స్థిరత్వాన్ని కోరుకోండి']
  ),
  kn: createLocalizedIntermitRecord(
    'kn',
    'ಇಂಟರ್‌ಮಿಟೆಂಟ್ ರಿಇನ್‌ಫೋರ್ಸ್‌ಮೆಂಟ್: ಒಮ್ಮೆ ಪ್ರೀತಿ ಒಮ್ಮೆ ನಿರ್ಲಕ್ಷ್ಯ ಮತ್ತು ಟ್ರಾಮಾ ಬಾಂಡಿಂಗ್',
    'ಅನಿಶ್ಚಿತ ನಡವಳಿಕೆಯ ವಿಜ್ಞಾನ: ವಿಷಕಾರಿ ಸಂಬಂಧಗಳಿಂದ ಹೊರಬರಲಾಗದಿರಲು ಜೈವಿಕ ಕಾರಣ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಕೆಲ ದಿನ ನೋಯಿಸಿ ಹಠಾತ್ತಾಗಿ ಅಪಾರ ಪ್ರೀತಿ ತೋರಿ ನಿಯಂತ್ರಣದಲ್ಲಿಟ್ಟುಕೊಳ್ಳುವುದು.',
    'ಭಯ ಮತ್ತು ನೆಮ್ಮದಿಯ ಈ ತಿರುವು ಮೆದುಳಿನಲ್ಲಿ ಜೂಜಾಟದಂತಹ ಚಟವನ್ನು ಹುಟ್ಟುಹಾಕುತ್ತದೆ.',
    'ನಿಜವಾದ ಪ್ರೀತಿ ಯಾವಾಗಲೂ ಸ್ಥಿರ ಮತ್ತು ಸುರಕ್ಷಿತವಾಗಿರುತ್ತದೆ.',
    ['ದುಷ್ಚಕ್ರ ಗುರುತಿಸಿ', 'ಮಾನಸಿಕ ಚಟದಿಂದ ಹೊರಬನ್ನಿ', 'ಸ್ಥಿರ ಪ್ರೀತಿ ಮುಖ್ಯ']
  ),
  ml: createLocalizedIntermitRecord(
    'ml',
    'ഇന്റർമിറ്റന്റ് റീഇൻഫോഴ്സ്മെന്റ്: സ്നേഹവും അവഗണനയും മാറിമാറി വരുന്ന ട്രോമ ബോണ്ടിംഗ്',
    'അപ്രതീക്ഷിത പെരുമാറ്റത്തിന്റെ മനഃശാസ്ത്രം: വിഷലിപ്തമായ ബന്ധങ്ങളിൽ കുടുങ്ങിപ്പോകുന്നതിന്റെ കാരണം.',
    'ലളിതമായി പറഞ്ഞാൽ: കുറച്ചു ദിവസം ക്രൂരമായി പെരുമാറിയ ശേഷം പെട്ടെന്ന് അമിതസ്നേഹം കാണിച്ച് അടിമയാക്കുക.',
    'ഭയവും ആശ്വാസവും മാറിമാറി വരുന്നത് മസ്തിഷ്കത്തിൽ ചൂതാട്ടം പോലെയുള്ള ആസക്തി ഉണ്ടാക്കുന്നു.',
    'യഥാർത്ഥ സ്നേഹം എപ്പോഴും സ്ഥിരവും സമാധാനപരവുമാണ്.',
    ['ചതിക്കുഴി തിരിച്ചറിയുക', 'ആസക്തിയിൽ നിന്ന് മുക്തി', 'സ്ഥിരത ഉറപ്പാക്കുക']
  ),
  pa: createLocalizedIntermitRecord(
    'pa',
    'ਇੰਟਰਮਿਟੈਂਟ ਰੀਇਨਫੋਰਸਮੈਂਟ: ਕਦੇ ਪਿਆਰ ਕਦੇ ਨਫ਼ਰਤ ਦਾ ਨਸ਼ਾ ਅਤੇ ਟ੍ਰੌਮਾ ਬੌਂਡਿੰਗ',
    'ਅਣਕਿਆਸੇ ਵਤੀਰੇ ਦਾ ਵਿਗਿਆਨ: ਜ਼ਹਿਰੀਲੇ ਰਿਸ਼ਤਿਆਂ ਵਿੱਚੋਂ ਨਿਕਲਣਾ ਔਖਾ ਕਿਉਂ ਹੁੰਦਾ ਹੈ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਕੁਝ ਦਿਨ ਬੁਰਾ ਸਲੂਕ ਕਰਕੇ ਅਚਾਨਕ ਬਹੁਤ ਪਿਆਰ ਦਿਖਾਉਣਾ ਅਤੇ ਸਾਹਮਣੇ ਵਾਲੇ ਨੂੰ ਆਪਣੇ ਅਧੀਨ ਕਰਨਾ।',
    'ਇਹ ਚੱਕਰ ਦਿਮਾਗ ਵਿੱਚ ਜੂਏ ਵਰਗਾ ਨਸ਼ਾ ਪੈਦਾ ਕਰਦਾ ਹੈ।',
    'ਸੱਚਾ ਪਿਆਰ ਹਮੇਸ਼ਾ ਸ਼ਾਂਤ ਅਤੇ ਇੱਕੋ ਜਿਹਾ ਹੁੰਦਾ ਹੈ।',
    ['ਚੱਕਰਵਿਊ ਪਛਾਣੋ', 'ਨਸ਼ਾ ਤੋੜੋ', 'ਸਥਿਰਤਾ ਚੁਣੋ']
  ),
  ur: createLocalizedIntermitRecord(
    'ur',
    'وقفاتی تقویت: کبھی محبت کبھی بے رخی کا نشہ اور ٹراما بانڈنگ',
    'غیر متوقع رویوں کی نفسیات: زہریلے تعلقات سے جان چھڑانا ناممکن کیوں لگتا ہے۔',
    'آسان الفاظ میں: کئی دن تک تذلیل کے بعد اچانک والہانہ محبت کا اظہار کر کے سامنے والے کو محتاج رکھنا۔',
    'خوف اور اچانک سکون کا یہ چکر دماغ میں جوئے کی طرح نشہ آور لت بن جاتا ہے۔',
    'حقیقی محبت ہمیشہ پرسکون، مستحکم اور محفوظ ہوتی ہے۔',
    ['جال پہچانیں', 'لت سے آزاد ہوں', 'مستحکم رویہ اپنائیں']
  ),
  or: createLocalizedIntermitRecord(
    'or',
    'ଇଣ୍ଟରମିଟାଣ୍ଟ ରିଇନଫୋର୍ସମେଣ୍ଟ: କେବେ ପ୍ରେମ କେବେ ଅବହେଳାର ନିଶା ଏବଂ ଟ୍ରମା ବଣ୍ଡିଂ',
    'ଅନିଶ୍ଚିତ ବ୍ୟବହାରର ମନସ୍ତତ୍ତ୍ୱ: ବିଷାକ୍ତ ସମ୍ପର୍କରୁ ମୁକୁଳି ନ ପାରିବାର କାରଣ।',
    'ସହଜ ଭାଷାରେ: କିଛି ଦିନ ଖରାପ ବ୍ୟବହାର କରି ହଠାତ୍ ପ୍ରଚୁର ପ୍ରେମ ଦେଖାଇ ନିଜ ନିୟନ୍ତ୍ରଣରେ ରଖିବା।',
    'ଏହି ଚକ୍ର ମସ୍ତିଷ୍କରେ ଜୁଆ ଭଳି ଏକ ନିଶା ସୃଷ୍ଟି କରେ।',
    'ପ୍ରକୃତ ପ୍ରେମ ସର୍ବଦା ଶାନ୍ତ ଏବଂ ସ୍ଥିର ଅଟେ।',
    ['ଜାଲ ଚିହ୍ନନ୍ତୁ', 'ମାନସିକ ମୁକ୍ତି ଖୋଜନ୍ତୁ', 'ସ୍ଥିରତା ବାଛନ୍ତୁ']
  ),
  as: createLocalizedIntermitRecord(
    'as',
    'ইণ্টাৰমিটেণ্ট ৰিইনফৰ্চমেণ্ট: কেতিয়াবা মৰম কেতিয়াবা অৱহেলাৰ নিচা আৰু ট্ৰমা বণ্ডিং',
    'অনিশ্চিত আচৰণৰ বিজ্ঞান: বিষাক্ত সম্পৰ্কৰ পৰা ওলাই আহিব নোৱৰাৰ ৰহস্য।',
    'সহজ কথাত: কেইবাদিনো অবহেলা কৰি হঠাৎ অতিমাত্ৰা মৰম দেখুৱাই আনক বশ কৰি ৰখা।',
    'ভয় আৰু হঠাৎ সকাহৰ এই চক্ৰই মগজুত জুৱাৰ দৰে আসক্তিৰ সৃষ্টি কৰে।',
    'প্ৰকৃত মৰম সদায় শান্ত আৰু নিৰ্ভৰযোগ্য হয়।',
    ['জাল চিনাক্ত কৰক', 'আসক্তিৰ পৰা মুক্ত হওক', 'স্থিৰতা বিচাৰক']
  ),
};
