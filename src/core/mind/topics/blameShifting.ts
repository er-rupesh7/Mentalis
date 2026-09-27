import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 13: Blame Shifting
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Simon (2010): In Sheep's Clothing: Understanding and Dealing with Manipulative People (Deflection & Blame-Shifting)
 * - Braiker (2004): Who's Pulling Your Strings? How to Break the Cycle of Manipulation
 * - Rotter (1966): Generalized Expectancies for Internal Versus External Control of Reinforcement
 */

export const TOPIC_BLAME_SHIFTING_EN: MindTopicDetail = {
  id: 'blame_shifting',
  categoryId: 'manipulation_awareness',
  slug: 'blame-shifting',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 7,
  scientificConsensusTier: 'established',
  sortWeight: 13,
  viewCount: 7640,
  shareCount: 620,
  bookmarkCount: 1290,
  title: 'Blame Shifting: "Look What You Made Me Do"',
  subtitle: 'The psychology of deflection: how manipulators turn their transgressions into your fault.',
  shortDescription: 'A defensive manipulation tactic where an individual refuses to take responsibility for their mistakes or cruelty, redirecting fault onto the victim or external circumstances.',
  oneLineExplanation: 'In simple terms: Doing something wrong and convincing you that it was your fault they had to do it.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'You catch someone lying, cheating, breaking a clear agreement, or losing their temper. You calmly bring it to their attention. Within five minutes, the conversation flips: they are shouting about something you did three months ago, claiming your tone provoked them, and you find yourself apologizing to them. Blame Shifting is the systematic diversion of accountability—turning the offender into the victim and the victim into the accused.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'In clinical personality theory, Blame Shifting is an extreme manifestation of an External Locus of Control (Rotter, 1966) coupled with fragile ego defense. High-conflict and covert-aggressive personalities experience accountability as an intolerable existential threat. Admitting fault causes catastrophic shame. To protect their fragile self-image, their psychological defense mechanisms instantaneously externalize guilt by manufacturing a causal chain that blames the victim: "I only yelled because you provoked me; I only cheated because you were working late."',
  summary60s: 'There are two common forms of blame shifting: (1) Provocation Deflection ("You made me do this"); (2) History Dredging ("What about what you did last year?"). Both maneuvers share one tactical goal: derailing the current grievance. The moment you accept the premise and begin defending your tone, schedule, or past actions, the original transgression disappears into thin air. The spotlight moves permanently off their behavior and onto your defense.',

  quickTakeaways: [
    'The Provocation Mirage: No adult can "make" another adult yell, cheat, or break promises; actions are 100% individual choices',
    'The Bait and Switch: If a conversation about their mistake ends with you apologizing, you were blame-shifted',
    'The Broken Record Antidote: Refuse to defend yourself against dredged-up accusations; redirect like a laser to the original issue',
    'Self-Accountability Test: Healthy adults say: "I was wrong, I am sorry, here is how I will fix it." Manipulators say: "I did it because YOU..."',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'High empathy and conscientiousness in the victim. Conscientious people are naturally prone to self-reflection and asking: "Did I do something wrong?" Manipulators ruthlessly exploit this moral sensitivity by feeding the victim’s self-doubt.',
  evolutionaryMechanism: 'Avoiding tribal sanctions. In ancestral groups, members identified as untrustworthy or destructive faced banishment. Shifting blame onto another protected status and resources.',

  // SECTION E — HOW DOES IT WORK?
  howItWorks: 'The 3-stage reversal: (1) Denial / Minimization of the primary act; (2) The Pivot ("The real issue here is your attitude / your lack of trust / your nagging"); (3) The Counter-Accusation ("If you were a supportive partner/employee, I wouldn\'t have to act this way").',
  whereYouEncounterIt: 'Infidelity confrontations, corporate project failures, parenting disputes, and political press conferences.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Genuine Accountability vs. Manipulative Blame Shifting',
    description: 'How to spot the difference between an apology and a deflection.',
    analogySideA: {
      label: 'Genuine Accountability',
      detail: '"I forgot the deadline. That caused huge stress for the team, and I take full responsibility. I am working late tonight to deliver it."',
    },
    analogySideB: {
      label: 'Blame Shifting ("The Pivot")',
      detail: '"I missed the deadline because you sent me three Slack messages that broke my focus. If you didn\'t micromanage me, this wouldn\'t have happened."',
    },
  },

  researchSummary: 'George Simon Jr. (2010) demonstrated that blame shifting is the most frequently deployed tactic by covert-aggressive personalities because it simultaneously achieves two objectives: it keeps the manipulator from having to change, and it puts the conscientiousness partner on the psychological defensive.',
  limitationsAndControversies: 'Mutual causation is real. Interpersonal conflict often involves contributions from both sides. However, legitimate shared accountability addresses issues sequentially: "I apologize for being late. Now, let us also discuss how we communicate about scheduling." Blame shifting uses the second issue to erase the first.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Sentences that start with: "I wouldn\'t have done that if you hadn\'t..."',
    'Whenever you express hurt, the conversation instantly becomes about your "tone" or "timing" rather than their action',
    'Bringing up unrelated past mistakes you made years ago whenever you address a current broken agreement',
    'Finding yourself walking away from arguments feeling guilty and confused about how you ended up being the "bad guy"',
    'A complete, lifelong absence of simple, unqualified apologies ("I am sorry" without a "but...")',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_blame_01',
      scenarioType: 'indian_context',
      title: 'The Hidden Credit Card Debt Confrontation',
      vignette: 'Neha discovers that her husband, Kunal, has secretly racked up ₹3 Lakhs in credit card debt on luxury watches and restaurant bills without discussing it. When Neha presents the bank statement and asks why he hid it, Kunal slams his fist on the table: "Why were you snooping through my mail? You have zero respect for my privacy! You treat me like a criminal in my own house! If you weren\'t always so stingy about money, I wouldn\'t have to buy things in secret!" Neha begins crying, stammering apologies about opening the envelope, and forgets about the debt.',
      breakdownAnalysis: 'Kunal executed an aggressive blame-shift. The core crisis—unauthorized secret debt jeopardizing family solvency—was completely eclipsed by making Neha’s "envelope opening" the moral crime of the evening.',
      recommendedAction: 'Neha must deploy the Laser Refocus: "Opening the household mail is not the issue. We can discuss mail boundaries later. Right now, we are talking about ₹3 Lakhs in secret debt that impacts our family. How will this be repaid?"',
    },
  ],

  examples: [
    {
      id: 'ex_blame_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Botched Client Demo',
      description: 'A senior lead fails to prepare for a major sales demo and stumbles through the slides. In the post-mortem, they state: "The intern didn\'t format the font sizes properly, which threw off my entire presentation rhythm."',
      takeaway: 'Blame shifters always seek the lowest-status individual in the room to absorb their professional failure.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'To disarm blame shifting, use the "Laser Broken Record" technique. Never defend yourself against their counter-accusation in the moment. Acknowledge it in a single sentence and instantly redirect back to the original topic: "We can talk about my tone later. Right now, we are addressing the broken agreement."',
  psychologicalDefenses: [
    'The Laser Redirection: "Do not change the subject. We are discussing your behavior right now. Once this is resolved, you are welcome to raise your concerns"',
    'Reject the Provocation Trap: Remind yourself: "Their reaction is their responsibility. My boundary did not force them to act maliciously"',
    'Refuse False Equivalence: Do not allow a minor procedural mistake (like opening mail) to be equated with major ethical breaches (like secret debt or infidelity)',
    'End the Circular Argument: If they refuse to acknowledge their behavior after 3 redirections, end the meeting: "You are unwilling to discuss this right now. We will revisit this when you can take accountability"',
  ],

  commonMisconceptions: [
    {
      misconception: 'If they seem genuinely angry, maybe I really did cause their bad behavior.',
      reality: 'Anger in blame-shifters is often an emotional smoke grenade. Their fury is designed to frighten you into backing down so their wrongdoing remains untouched.',
    },
  ],

  reflectionPrompt: 'Think about a recent argument where you ended up apologizing. Did you apologize because you genuinely did something wrong, or because the other person skillfully shifted the blame onto you?',

  interactiveScenario: {
    id: 'interactive_blame_01',
    topicId: 'blame_shifting',
    scenarioTitle: 'The Broken Promise Confrontation',
    scenarioDescription: 'Your partner promised to pick up your elderly mother from the railway station at 4 PM. They forgot and went to play cricket with friends instead. Your mother waited alone in the heat for two hours. When you confront them, they yell: "Why didn\'t you remind me at 3 PM? You know I was busy! You set me up to fail!"',
    vignetteSourceType: 'family_relationships',
    options: [
      {
        id: 'opt_1',
        text: 'Apologize and say: "You\'re right, I should have sent you a reminder on WhatsApp. I\'m sorry for getting angry."',
        isCorrect: false,
        cognitiveTakeaway: 'You accept the blame shift! You teach them that they are not responsible for their own calendar or promises.',
      },
      {
        id: 'opt_2',
        text: 'Hold the laser boundary: "You are a grown adult who made a direct commitment to pick up my mother. It is not my job to manage your schedule. Your failure to show up was your choice, and blaming me for not reminding you is unacceptable."',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of blame-shift defense! You refuse the reminder trap, place accountability where it belongs, and label the deflection.',
      },
      {
        id: 'opt_3',
        text: 'Call their friends and shout at them for playing cricket.',
        isCorrect: false,
        cognitiveTakeaway: 'Triangulation that diffuses personal accountability from your partner onto external parties.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_blame_01',
      questionType: 'multiple_choice',
      prompt: 'When confronted with their own bad behavior, what is the defining characteristic of a blame shifter?',
      options: [
        { id: 'opt_a', text: 'They immediately take notes and hire an executive coach', isCorrect: false },
        { id: 'opt_b', text: 'They redirect fault onto the accuser, claiming the accuser\'s actions, tone, or lack of reminders provoked their transgression', isCorrect: true, feedbackText: 'Correct! Blame shifting deflects guilt outward to protect the fragile ego from experiencing accountability.' },
        { id: 'opt_c', text: 'They remain silent and calmly accept all consequences', isCorrect: false },
      ],
      cognitiveTakeaway: 'Blame shifting is an externalizing defense mechanism designed to evade accountability.',
    },
  ],

  references: [
    {
      citation: 'Simon, G. K. (2010). In sheep\'s clothing: Understanding and dealing with manipulative people. Parkhurst Brothers Publishers.',
      doiOrUrl: 'https://doi.org/10.1037/e612342011-003',
      relevance: 'Clinical analysis of deflection, projection, and externalizing tactics in high-conflict relationships.',
      displayOrder: 1,
    },
    {
      citation: 'Braiker, H. B. (2004). Who\'s pulling your strings? How to break the cycle of manipulation. McGraw-Hill.',
      doiOrUrl: 'https://doi.org/10.1036/0071449723',
      relevance: 'Provides actionable frameworks for identifying and disarming guilt-tripping and blame-shifting maneuvers.',
      displayOrder: 2,
    },
  ],

  tags: ['Manipulation Awareness', 'Blame Shifting', 'Deflection', 'Accountability', 'Relationships', 'Conflict Resolution'],
  relatedTopics: [
    { topicId: 'guilt_tripping', slug: 'guilt-tripping', title: 'Guilt-Tripping', relationshipType: 'amplified_by' },
    { topicId: 'victim_playing', slug: 'victim-playing', title: 'Victim Playing', relationshipType: 'frequently_confused_with' },
    { topicId: 'healthy_boundaries', slug: 'healthy-boundaries', title: 'Healthy Boundaries', relationshipType: 'counteracted_by' },
  ],
  seoTitle: 'Blame Shifting: "Look What You Made Me Do" & How to Disarm Deflection | Mentalab Mind',
  seoDescription: 'Master the psychology of Blame Shifting. Learn why manipulators turn their mistakes into your fault and how to use the Laser Broken Record defense.',
  canonicalUrl: '/mind/manipulation-awareness/blame-shifting',
  ogImageUrl: '/images/mind/blame-shifting.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Blame shifting operates via externalizing ego defenses that weaponize the victim\'s empathy and conscientiousness to derail accountability.',
};

export const TOPIC_BLAME_SHIFTING_HINGLISH: MindTopicDetail = {
  ...TOPIC_BLAME_SHIFTING_EN,
  title: 'Blame Shifting: "Dekho Tumne Mujhse Kya Karwa Diya" Aur Galti Doosro Par Daalna',
  subtitle: 'Deflection ki psychology: Galti khud karke samne wale ko mujrim kaise banaya jata hai?',
  shortDescription: 'Ek aisi manipulation technique jisme insaan apni galti ya dhokhe ki zimmedari lene ke bajaye ulta aap par ilzaam laga deta hai ki aapne use aisa karne par majboor kiya.',
  oneLineExplanation: 'Simple shabdon me: Galti khud karna aur behes me aisi palti maarna ki aakhir me aap hi sorry bol rahe hon.',

  summary30s: 'Aap kisi ko jhooth bolte huye ya waada todte huye pakadte hain. Aap shanti se poochte hain: "Aapne aisa kyu kiya?" Paanch minute ke andar behes ka rukh badal jata hai: wo chillane lagte hain ki aap unpar shaq kyu kar rahe hain, aapka bolne ka tareeqa kharab hai, aur aakhir me aap ro-ro kar unse maafi maangne lagte hain. Isko bolte hain Blame Shifting—asali mudde ko gayab karke samne wale ko accused bana dena.',
  coreConcept: 'Dr. George Simon Jr. (2010) ke mutabiq blame-shifters ka ego bohot kamzor hota hai. Galti accept karna unke liye maut jaisa lagta hai. Isliye unka dimaag turant do cheezein karta hai: (1) Provocation ka bahana: "Tumne mujhe provoke kiya isliye main chillaya"; (2) Purani baatein ukhadna: "Pichle saal tumne bhi toh aisa kiya tha!"',
  summary60s: 'Neha ne dekha ki pati Kunal ne bina bataye ₹3 Lakh ka credit card loan le liya luxury shopping ke liye. Jab Neha ne statement dikhaya, toh Kunal chilla pada: "Tumne meri personal mail kyu kholi? Tumhe meri privacy ki izzat nahi hai! Tum mujh par shaq karti ho!" Neha rone lagi aur loan ka mudda bilkul gayab ho gaya. Kunal ne successfully blame shift kar diya.',

  quickTakeaways: [
    'Provocation ek dhokha hai: Koi adult kisi doosre adult ko gali dene, cheat karne ya chillane par majboor nahi kar sakta',
    'Laser Focus Antidote: Mudda bhatakne mat dijiye. Kahiye: "Meri tone ki baat baad me karenge, pehle is galti ki baat hogi"',
    'Apology ka Test: Samajhdar log bolte hain "Mujhse galti hui, sorry." Manipulator bolta hai: "Maine kiya kyunki TUMNE..."',
    'Defensive mat baniye: Jab wo purani baatein nikalein toh safaiyan mat dijiye',
  ],

  whyItHappens: 'Manipulator aapke acche swabhaav aur guilt ka fayda uthata hai. Sensitive log turant sochte hain: "Kahi sach me meri galti toh nahi thi?"',
  evolutionaryMechanism: 'Tribe me galat sabit hone par group se nikal diye jane ka darr rehta tha, isliye dosh doosro par daalna survival strategy ban gaya.',

  howItWorks: 'Office me manager demo kharab hone par intern par chillata hai ki font chhota tha. Rishto me partner cheat karne par bolta hai ki tum time nahi dete the.',
  howToRespond: 'Laser Broken Record baniye: "Topic mat badlo. Hum abhi tumhari is galti par baat kar rahe hain. Iske baad tum apni shikayat rakh sakte ho."',

  reflectionPrompt: 'Kya aapke sath kabhi aisa hua hai ki aap kisi ki galti nikaalne gaye the aur aakhir me khud hi sorry bol kar wapas aaye?',
  seoTitle: 'Blame Shifting Kya Hai? Galti Doosro Par Daalne Ki Psychology | Mentalab Mind',
  seoDescription: 'Samjhein Blame Shifting ki manipulation. Kaise log apni galti ko aapka dosh bana dete hain aur Laser Refocus technique se isse kaise bachein.',
  canonicalUrl: '/mind/manipulation-awareness/blame-shifting',
};

function createLocalizedBlameRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_BLAME_SHIFTING_EN,
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

export const TOPIC_BLAME_SHIFTING: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_BLAME_SHIFTING_EN,
  hinglish: TOPIC_BLAME_SHIFTING_HINGLISH,
  hi: createLocalizedBlameRecord(
    'hi',
    'दोष मढ़ना (Blame Shifting): "देखो तुमने मुझसे क्या करवा दिया"',
    'ध्यान भटकाने का मनोविज्ञान: हेरफेर करने वाले अपनी गलतियों का दोष आप पर कैसे मढ़ते हैं।',
    'सरल शब्दों में: स्वयं कोई गलती करना और उल्टा यह साबित कर देना कि सामने वाले की वजह से ऐसा करना पड़ा।',
    'दोष मढ़ना तब होता है जब कोई व्यक्ति अपनी गलतियों की जिम्मेदारी लेने से बचने के लिए बातचीत का रुख मोड़कर पीड़ित को ही दोषी ठहरा देता है।',
    'जॉर्ज साइमन (2010) के अनुसार, यह अहंकार की रक्षा करने और जवाबदेही से बचने की एक आक्रामक रक्षात्मक युक्ति है।',
    [
      'उकसावे का भ्रम: कोई भी व्यक्ति किसी अन्य को गलत व्यवहार के लिए मजबूर नहीं कर सकता',
      'मुद्दे से भटकाव: अपनी गलती छुपाने के लिए पुरानी बातों या आपकी बात करने के तरीके पर विवाद खड़ा करना',
      'लेजर फोकस की तकनीक: विषय से भटके बिना मूल गलती पर ध्यान केंद्रित रखें',
      'सच्ची जिम्मेदारी: परिपक्व लोग बिना शर्त माफी मांगते हैं, बहाने नहीं बनाते',
    ]
  ),
  gu: createLocalizedBlameRecord(
    'gu',
    'દોષારોપણ: "જો તેં મારી પાસે શું કરાવ્યું" અને દોષનો ટોપલો ઢોળવો',
    'જવાબદારીમાંથી છટકવાની યુક્તિ: પોતાની ભૂલોનો દોષ સામાવાળા પર નાખવાનું મનોવિજ્ઞાન.',
    'સરળ શબ્દોમાં: પોતે ભૂલ કરવી અને સામાવાળાને લીધે કરવી પડી તેમ સાબિત કરવું.',
    'દોષારોપણ વ્યક્તિને તેની ભૂલોમાંથી મુક્ત કરી સામાવાળાને અપરાધી સાબિત કરે છે.',
    'મૂળ મુદ્દા પરથી ધ્યાન ભટકવા દીધા વગર સ્પષ્ટતાથી વાત કરવી જરૂરી છે.',
    ['દોષારોપણ ઓળખો', 'સફાઈ આપવાનું ટાળો', 'મૂળ વાત પર રહો']
  ),
  mr: createLocalizedBlameRecord(
    'mr',
    'दोष ढकलणे: "बघ तुझ्यामुळे मला काय करावे लागले" आणि जबाबदारी टाळणे',
    'लक्ष विचलित करण्याचे मानसशास्त्र: स्वतःच्या चुकांचे खापर दुसऱ्याच्या माथ्यावर फोडणे.',
    'सोप्या भाषेत: स्वतः चूक करणे आणि समोरच्याच्या वागणुकीमुळे चूक घडली असा कांगावा करणे.',
    'दोष ढकलणारे लोक स्वतःच्या अहंकाराचे रक्षण करण्यासाठी समोरच्याला अपराधी ठरवतात.',
    'मूळ मुद्द्यावर लक्ष केंद्रित ठेवून अशा कांगाव्याला बळी न पडणे हाच योग्य मार्ग आहे.',
    ['कांगावा ओळखा', 'मूळ मुद्द्यावर ठाम राहा', 'अकारण माफी मागू नका']
  ),
  bn: createLocalizedBlameRecord(
    'bn',
    'দোষ চাপানো: "দেখো তুমি আমাকে দিয়ে কী করালে" ও দায় এড়ানোর কৌশল',
    'বিষয় ঘোরানোর মনস্তত্ত্ব: নিজের অন্যায়ের দায় অন্যের ওপর চাপিয়ে দেওয়ার চালাকি।',
    'সহজ কথায়: নিজে ভুল করে উল্টো প্রমাণ করা যে অপর পক্ষের কারণেই তা করতে হয়েছে।',
    'নিজের ভুল আড়াল করতে অন্যের খুঁত ধরা এবং তর্কে বিভ্রান্তি সৃষ্টি করাই এর লক্ষ্য।',
    'মূল প্রসঙ্গে অনড় থেকে যুক্তিপূর্ণ উত্তর দেওয়া প্রয়োজন।',
    ['চালবাজি চিনুন', 'অনড় থাকুন', 'অযথা ক্ষমা চাইবেন না']
  ),
  ta: createLocalizedBlameRecord(
    'ta',
    'பழியை மாற்றுதல்: "பார் நீ என்னை என்ன செய்ய வைத்தாய்" என்ற தந்திரம்',
    'பொறுப்பைத் தவிர்க்கும் உளவியல்: தன் தவறுகளுக்கு மற்றவர்களைக் குற்றம் சாட்டுவது.',
    'எளிய சொற்களில்: தான் தவறு செய்துவிட்டு, மற்றவர்களால்தான் அப்படி செய்ய வேண்டியிருந்தது என்று வாதிடுவது.',
    'தவறுகளுக்கு பொறுப்பேற்காமல் தற்காத்துக் கொள்ள இந்த உத்தி பயன்படுத்தப்படுகிறது.',
    'மூலப் பிரச்சினையிலிருந்து திசைதிருப்பாமல் உறுதியாகப் பேசுங்கள்.',
    ['பழி மாற்றலை உணருங்கள்', 'உறுதியாகப் பேசுங்கள்', 'சுயமரியாதை காக்கவும்']
  ),
  te: createLocalizedBlameRecord(
    'te',
    'నిందను ఇతరులపైకి నెట్టడం: "చూడు నువ్వు నా చేత ఏం చేయించావో"',
    'బాధ్యత నుండి తప్పించుకునే తంత్రం: తమ తప్పులకు ఇతరులను నిందించే మనస్తత్వం.',
    'సులభమైన మాటల్లో: తాము తప్పు చేసి, ఎదుటివారి వల్లే అలా చేయాల్సి వచ్చిందని నిరూపించడం.',
    'తమ అహంకారాన్ని కాపాడుకోవడానికి తప్పులను ఇతరులపైకి నెట్టివేస్తారు.',
    'విషయం పక్కదారి పట్టకుండా అసలు సమస్యపై దృష్టి పెట్టండి.',
    ['నిందల తంత్రాన్ని గుర్తించండి', 'స్పష్టంగా ఉండండి', 'అనవసరంగా క్షమాపణ చెప్పకండి']
  ),
  kn: createLocalizedBlameRecord(
    'kn',
    'ದೋಷಾರೋಪಣೆ: "ನೋಡು ನೀನು ನನ್ನಿಂದ ಏನು ಮಾಡಿಸಿದೆ" ಎಂಬ ಜಾಣತನ',
    'ಜವಾಬ್ದಾರಿಯಿಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳುವ ತಂತ್ರ: ತಮ್ಮ ತಪ್ಪುಗಳಿಗೆ ಇತರರನ್ನು ದೂಷಿಸುವ ಪ್ರವೃತ್ತಿ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ತಾವೇ ತಪ್ಪು ಮಾಡಿ, ಇನ್ನೊಬ್ಬರ ಕಾರಣದಿಂದಲೇ ಆಯಿತೆಂದು ವಾದಿಸುವುದು.',
    'ತಮ್ಮ ತಪ್ಪನ್ನು ಮರೆಮಾಚಲು ಇತರರನ್ನು ಅಪರಾಧಿಗಳನ್ನಾಗಿ ಮಾಡುವುದು ಈ ತಂತ್ರದ ಮುಖ್ಯ ಲಕ್ಷಣ.',
    'ಮೂಲ ವಿಷಯದಿಂದ ವಿಚಲಿತರಾಗದೆ ನೇರವಾಗಿ ಮಾತನಾಡಿ.',
    ['ತಂತ್ರವನ್ನು ಗುರುತಿಸಿ', 'ಮೂಲ ವಿಷಯದಲ್ಲೇ ಇರಿ', 'ಅನಗತ್ಯ ಕ್ಷಮೆ ಬೇಡ']
  ),
  ml: createLocalizedBlameRecord(
    'ml',
    'കുറ്റം മറ്റുള്ളവരിൽ ചുമത്തുക: "നീ എന്നെക്കൊണ്ട് ചെയ്യിച്ചതാണ്" എന്ന പഴിചാരൽ',
    'ഉത്തരവാദിത്തത്തിൽ നിന്ന് ഒളിച്ചോടുന്ന മനഃശാസ്ത്രം: സ്വന്തം തെറ്റുകൾക്ക് മറ്റുള്ളവരെ കുറ്റപ്പെടുത്തുക.',
    'ലളിതമായി പറഞ്ഞാൽ: തെറ്റ് സ്വയം ചെയ്തിട്ട് മറ്റുള്ളവർ കാരണമാണ് ചെയ്തതെന്ന് വാദിക്കുക.',
    'സ്വന്തം ഈഗോ സംരക്ഷിക്കാൻ വേണ്ടി വിഷയം വഴിതിരിച്ചുവിടുന്ന രീതിയാണിത്.',
    'യഥാർത്ഥ വിഷയത്തിൽ ഉറച്ചുനിന്ന് സംസാരിക്കുക.',
    ['പഴിചാരൽ തിരിച്ചറിയുക', 'വിഷയം മാറ്റരുത്', 'ആത്മാഭിമാനം സംരക്ഷിക്കുക']
  ),
  pa: createLocalizedBlameRecord(
    'pa',
    'ਦੋਸ਼ ਮੜ੍ਹਨਾ: "ਵੇਖ ਤੂੰ ਮੇਰੇ ਤੋਂ ਕੀ ਕਰਵਾਇਆ" ਅਤੇ ਜ਼ਿੰਮੇਵਾਰੀ ਤੋਂ ਭੱਜਣਾ',
    'ਗੱਲ ਘੁਮਾਉਣ ਦਾ ਵਿਗਿਆਨ: ਆਪਣੀਆਂ ਗਲਤੀਆਂ ਦਾ ਦੋਸ਼ ਦੂਜਿਆਂ ਸਿਰ ਥੋਪਣ ਦੀ ਚਾਲ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਗਲਤੀ ਆਪ ਕਰਨੀ ਅਤੇ ਸਾਬਤ ਕਰਨਾ ਕਿ ਸਾਹਮਣੇ ਵਾਲੇ ਕਰਕੇ ਕਰਨੀ ਪਈ।',
    'ਇਹ ਲੋਕ ਆਪਣੀ ਗਲਤੀ ਮੰਨਣ ਦੀ ਬਜਾਏ ਉਲਟਾ ਤੁਹਾਨੂੰ ਹੀ ਮੁਜਰਿਮ ਬਣਾ ਦਿੰਦੇ ਹਨ।',
    'ਅਸਲ ਮੁੱਦੇ ਤੇ ਕਾਇਮ ਰਹਿ ਕੇ ਗੱਲ ਕਰਨਾ ਹੀ ਸਹੀ ਹੱਲ ਹੈ।',
    ['ਚਾਲ ਪਛਾਣੋ', 'ਅਸਲ ਗੱਲ ਤੇ ਰਹੋ', 'ਬਿਨਾਂ ਵਜ੍ਹਾ ਮਾਫੀ ਨਾ ਮੰਗੋ']
  ),
  ur: createLocalizedBlameRecord(
    'ur',
    'الزام تراشی: "دیکھو تم نے مجھ سے کیا کروا دیا" اور جوابدہی سے فرار',
    'توجہ ہٹانے کی نفسیات: اپنی غلطیوں کا ملبہ دوسروں پر ڈالنے کا طریقہ۔',
    'آسان الفاظ میں: خود غلطی کرنا اور الٹا ثابت کرنا کہ سامنے والے کی وجہ سے ایسا کرنا پڑا۔',
    'اپنی خامیوں کو چھپانے کے لیے بحث کا رخ موڑ کر مظلوم کو ہی مجرم بنا دینا۔',
    'اصل مسئلے پر توجہ مرکوز رکھ کر الزام تراشی کا سدباب کریں۔',
    ['حربہ سمجھیں', 'اصل بات پر ڈٹے رہیں', 'غیر ضروری معذرت نہ کریں']
  ),
  or: createLocalizedBlameRecord(
    'or',
    'ଦୋଷ ଲଦିବା: "ଦେଖ ତୁମେ ମୋତେ କ’ଣ କରାଇଲ" ଏବଂ ଦାୟିତ୍ୱରୁ ପଳାୟନ',
    'ଦୃଷ୍ଟି ଭ୍ରମ କରିବାର କଳା: ନିଜ ଭୁଲ୍ ପାଇଁ ଅନ୍ୟକୁ ଦୋଷୀ ସାବ୍ୟସ୍ତ କରିବା।',
    'ସହଜ ଭାଷାରେ: ନିଜେ ଭୁଲ୍ କରି ଅନ୍ୟ ପାଇଁ କରିବାକୁ ପଡ଼ିଲା ବୋଲି ଯୁକ୍ତି ବାଢ଼ିବା।',
    'ନିଜ ଅହଂକାର ରକ୍ଷା କରିବା ପାଇଁ ଏହି କୌଶଳ ବ୍ୟବହାର କରାଯାଏ।',
    'ମୂଳ ବିଷୟ ଉପରେ ଦୃଢ଼ ରହି ଯୁକ୍ତିସଙ୍ଗତ ଉତ୍ତର ଦିଅନ୍ତୁ।',
    ['କୌଶଳ ଚିହ୍ନନ୍ତୁ', 'ମୂଳ କଥାରେ ରୁହନ୍ତୁ', 'ଅଯଥା କ୍ଷମା ମାଗନ୍ତୁ ନାହିଁ']
  ),
  as: createLocalizedBlameRecord(
    'as',
    'দোষ জাপি দিয়া: "চোৱা তুমি মোক কি কৰালা" আৰু দায়িত্বৰ পৰা পলায়ন',
    'মনোযোগ আঁতৰোৱাৰ বিজ্ঞান: নিজৰ ভুলৰ বোজা আনৰ ওপৰত জাপি দিয়াৰ কৌশল।',
    'সহজ কথাত: নিজে ভুল কৰি আনৰ কাৰণেই কৰিব লগা হ’ল বুলি প্ৰমাণ কৰা।',
    'দায়িত্বৰ পৰা আঁতৰি থাকিবলৈ আলোচনাক মূল বিষয়ৰ পৰা আঁতৰাই নিয়া হয়।',
    'মূল কথাত স্থিৰ থাকি নিজৰ স্থিতি স্পষ্ট কৰক।',
    ['কৌশল চিনাক্ত কৰক', 'মূল কথাত থাকক', 'অযথা ক্ষমা নিবিচাৰিব']
  ),
};
