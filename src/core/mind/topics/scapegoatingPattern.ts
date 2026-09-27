import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 17: Scapegoating Pattern
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Girard (1982): The Scapegoat (Mimetic Theory & Collective Violence)
 * - Allport (1954): The Nature of Prejudice (Frustration-Aggression Displacement)
 * - Bowen (1978): Family Systems Theory (The Identified Patient)
 */

export const TOPIC_SCAPEGOATING_PATTERN_EN: MindTopicDetail = {
  id: 'scapegoating_pattern',
  categoryId: 'manipulation_awareness',
  slug: 'scapegoating-pattern',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 7,
  scientificConsensusTier: 'established',
  sortWeight: 17,
  viewCount: 7540,
  shareCount: 630,
  bookmarkCount: 1280,
  title: 'Scapegoating: The Projection of Collective Blame',
  subtitle: 'René Girard\'s mimetic theory and the Identified Patient: how dysfunctional groups unite by sacrificing a single member.',
  shortDescription: 'The systematic singling out of an individual or minority group for unmerited negative treatment, hostility, and blame to preserve group unity and discharge collective anxiety.',
  oneLineExplanation: 'In simple terms: Blaming one person for everything that goes wrong so everyone else can avoid looking at their own failures.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'In ancient rituals, a literal goat was burdened with the sins of the community and chased into the wilderness to cleanse the tribe. In modern families, offices, and societies, human scapegoating serves the exact same psychological purpose: when a system is dysfunctional, anxious, or failing, the group designates one person as the "problem child" or "toxic employee." Dumping all collective anxiety onto this one person allows the rest of the group to feel bonded, righteous, and innocent.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Philosopher René Girard (1982) formulated that human desire is mimetic (imitative). When rivalry and stress threaten to tear a community apart from within, the group achieves artificial peace through the "Scapegoat Mechanism"—uniting against a common victim. In clinical family therapy (Bowen, 1978), this individual is called the "Identified Patient" (IP). The IP is almost always the most perceptive, honest, or emotionally vulnerable member of the system—the one who refuses to pretend that the family\'s secrets or alcoholism are normal.',
  summary60s: 'Scapegoating is deeply convenient for a dysfunctional system. If the family admits that the parents are abusive, the whole family must restructure, face shame, and change. But if the family claims "Everything is fine; our only problem is that our youngest daughter is mentally unstable and rebellious," the parents never have to change. The scapegoat carries the sins of the entire house so the house can preserve its fragile facade.',

  quickTakeaways: [
    'Systemic Displacement: The scapegoat is chosen not because they are flawed, but because the system needs a sponge to absorb collective dysfunction',
    'The Truthteller Target: Scapegoats are frequently the most honest, authentic people who refuse to participate in group denial',
    'Artificial Group Harmony: A family or team often feels bonded and peaceful only when they have a common scapegoat to gossip about and attack',
    'The Exit Antidote: You cannot heal a scapegoating family or toxic team from within; you must physically and emotionally remove yourself from the dumping ground',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Frustration-Aggression Displacement (Allport, 1954). When people experience chronic internal shame, financial dread, or marital misery that they cannot resolve, that pent-up hostility must find an outlet. The scapegoat provides a socially sanctioned, defenseless target.',
  evolutionaryMechanism: 'Tribal preservation: sacrificing one perceived non-conformist prevented widespread internal civil war and preserved clan solidarity.',

  // SECTION E — HOW DOES IT WORK?
  howItWorks: 'The 4-step scapegoating architecture: (1) Systemic Dysfunction (financial crisis, parental alcoholism, corporate failure); (2) Target Selection (the non-conforming or sensitive person); (3) Projection & Amplification (every mistake in the household or department is blamed on them); (4) Ostracism / Expulsion (the group unites in righteous condemnation).',
  whereYouEncounterIt: 'Narcissistic family structures (the "Golden Child" vs. the "Scapegoat"), corporate layoffs where a junior PM takes the blame for executive failure, and societal xenophobia.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Individual Responsibility vs. Collective Scapegoating',
    description: 'How a dysfunctional group offloads guilt onto a single target.',
    analogySideA: {
      label: 'Healthy Accountability (Distributed)',
      detail: 'Mom examines her temper, Dad addresses his drinking, Boss examines his poor strategy. Everyone owns their percentage.',
    },
    analogySideB: {
      label: 'Systemic Scapegoating (Concentrated)',
      detail: '"If only Rohit weren\'t so disrespectful and troubled, our family would be completely happy and perfect!"',
    },
  },

  researchSummary: 'René Girard’s cross-cultural historical analysis across ancient mythologies, medieval witch trials, and modern political purges demonstrated that the scapegoat mechanism is the foundational anthropological pillar of collective human crisis management.',
  limitationsAndControversies: 'Sometimes an individual genuinely DOES engage in destructive, unethical, or incompetent behavior that harms a team or family. Holding someone accountable for specific, documented, individual actions with proportional consequences is healthy justice; scapegoating occurs when one person is blamed for systemic failures far beyond their scope.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Being blamed for problems that occurred when you weren\'t even in the room or before you joined the project',
    'A sibling or coworker (the "Golden Child") who can do no wrong, while every microscopic mistake you make is treated as a moral catastrophe',
    'Family gatherings where conversations inevitably revolve around gossiping about your life choices, appearance, or personality',
    'Realizing that whenever you leave the room or household, the group immediately descends into internal fighting because their sponge is gone',
    'Feeling an overwhelming, lifelong sense of toxic shame—believing deep down that you are fundamentally "defective" or a "curse" to your family',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_scape_01',
      scenarioType: 'indian_context',
      title: 'The Non-Conforming Daughter in the Patriarchal Household',
      vignette: 'In a conservative household in Varanasi, the eldest son loses his job due to gambling debts, and the parents fight bitterly every night over finances. Their 22-year-old daughter, Ritu, speaks up: "Bhaiya needs to stop gambling, and Papa needs to stop giving him his pension money." Immediately, the entire family turns on Ritu. The mother cries: "Ritu is bringing bad luck into this house! She is shameless, disrespectful, and westernized! Because of her arrogance, her brother is stressed and unable to find work!" Whenever anything goes wrong—a spoiled pot of milk, a delayed tax filing—the family blames Ritu\'s "negative energy."',
      breakdownAnalysis: 'Ritu is the clinical "Identified Patient." Her honest truth-telling shattered the family\'s collective denial about the son\'s addiction and the parents\' enmeshment. To avoid confronting the catastrophic reality of gambling and financial ruin, the family unified by making Ritu the designated scapegoat.',
      recommendedAction: 'Ritu must realize she cannot cure the family by being "better" or apologizing. She must protect her mental health, secure her own employment, move into her own accommodation, and build external, healthy community bonds.',
    },
  ],

  examples: [
    {
      id: 'ex_scape_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Post-Mortem Fall Guy',
      description: 'A company loses a ₹10 Crore client because the CEO slashed engineering headcount and refused to upgrade legacy infrastructure. In the all-hands post-mortem, the CEO publicly fires a mid-level QA engineer: "This failure was due to sloppy quality checks by one rogue employee."',
      takeaway: 'Scapegoating in corporate leadership protects executive bonuses by sacrificing junior personnel.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'If you are the designated scapegoat, stop trying to prove your innocence to the tribunal. The tribunal needs you to be guilty; your guilt is the glue holding their sanity together. Step off the sacrificial altar. Minimize contact, establish radical emotional detachment, and realize that their attacks are projections of their internal rot, not reflections of your character.',
  psychologicalDefenses: [
    'Reject the Projection: When they attack you, remind yourself internally: "This is not my shame. This is their unresolved anxiety, and I return it to them"',
    'Stop Auditioning for Approval: Accept that you will never receive a fair trial from a jury made up of people who need you to be the criminal',
    'Physically Step Out of the System: Scapegoating requires physical or emotional proximity; creating geographical distance collapses their dumping mechanism',
    'Reparent Your Self-Worth: Work with a trauma therapist to untangle the toxic belief that you are "flawed, dirty, or cursed"',
  ],

  commonMisconceptions: [
    {
      misconception: 'If the entire family or team agrees that I am the problem, they must be right.',
      reality: 'Collective consensus is frequently a sign of shared delusion, not truth. Throughout history, entire mobs and communities have united in unanimous agreement to burn innocent people.',
    },
  ],

  reflectionPrompt: 'Were you the family or workplace "truthteller" who was punished, isolated, or blamed simply because you refused to pretend that dysfunction was normal?',

  interactiveScenario: {
    id: 'interactive_scape_01',
    topicId: 'scapegoating_pattern',
    scenarioTitle: 'The Family Festival Scapegoat Trap',
    scenarioDescription: 'During a Diwali family dinner, your uncle\'s business venture is failing, your cousin failed his college exams, and your parents are on the verge of divorce. At the dinner table, your mother suddenly points at you and loudly complains: "Look at your hair and clothes! You are so rebellious and selfish! You never smile, you ruin the festival energy for everyone, and you make this entire family miserable!"',
    vignetteSourceType: 'family_relationships',
    options: [
      {
        id: 'opt_1',
        text: 'Break down in tears, apologize to everyone at the table, change your clothes, and spend the evening trying to make everyone laugh.',
        isCorrect: false,
        cognitiveTakeaway: 'You accept the scapegoat mantle! You validate their projection and absorb the family\'s unspoken shame onto your shoulders.',
      },
      {
        id: 'opt_2',
        text: 'Refuse the sacrificial role with calm detachment: "I am dressed fine and I am having dinner peacefully. I will not be the punching bag for everyone\'s bad mood tonight." Finish your plate calmly or excuse yourself to leave.',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of scapegoat immunity! You refuse to absorb the systemic anxiety, label the projection, and set a dignified physical boundary.',
      },
      {
        id: 'opt_3',
        text: 'Flip the dinner table over, scream at your cousin for failing college, and announce your parents\' divorce to the entire extended family.',
        isCorrect: false,
        cognitiveTakeaway: 'Explosive escalation that gives the family the exact "crazy person" theatrical proof they need to justify scapegoating you forever.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_scape_01',
      questionType: 'multiple_choice',
      prompt: 'In family systems theory, what is the term for the individual who is unconsciously targeted to absorb the anxiety and dysfunction of the entire family unit?',
      options: [
        { id: 'opt_a', text: 'The Golden Child', isCorrect: false },
        { id: 'opt_b', text: 'The Identified Patient (or Scapegoat)', isCorrect: true, feedbackText: 'Correct! Dr. Murray Bowen termed this individual the Identified Patient—the symptom-bearer of the dysfunctional system.' },
        { id: 'opt_c', text: 'The Enabler', isCorrect: false },
      ],
      cognitiveTakeaway: 'The Identified Patient bears the symptoms of the wider systemic pathology.',
    },
  ],

  references: [
    {
      citation: 'Girard, R. (1982). The scapegoat. Johns Hopkins University Press.',
      doiOrUrl: 'https://doi.org/10.56021/9780801833151',
      relevance: 'The foundational philosophical masterpiece on the anthropological scapegoat mechanism and collective violence.',
      displayOrder: 1,
    },
    {
      citation: 'Bowen, M. (1978). Family therapy in clinical practice. Jason Aronson.',
      doiOrUrl: 'https://doi.org/10.1007/978-1-4684-2520-8',
      relevance: 'Establishes the clinical role of the Identified Patient as the target of family projection processes.',
      displayOrder: 2,
    },
  ],

  tags: ['Manipulation Awareness', 'Scapegoating', 'René Girard', 'Family Systems', 'Identified Patient', 'Systemic Abuse'],
  relatedTopics: [
    { topicId: 'triangulation_pattern', slug: 'triangulation-pattern', title: 'Triangulation Pattern', relationshipType: 'amplified_by' },
    { topicId: 'blame_shifting', slug: 'blame-shifting', title: 'Blame Shifting', relationshipType: 'amplified_by' },
    { topicId: 'healthy_boundaries', slug: 'healthy-boundaries', title: 'Healthy Boundaries', relationshipType: 'counteracted_by' },
  ],
  seoTitle: 'Scapegoating in Families & Workplaces: René Girard & Bowen Theory | Mentalab Mind',
  seoDescription: 'Master the psychology of Scapegoating. Learn why dysfunctional families sacrifice the truthteller, how the Identified Patient works, and how to step off the altar.',
  canonicalUrl: '/mind/manipulation-awareness/scapegoating-pattern',
  ogImageUrl: '/images/mind/scapegoating-pattern.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Scapegoating represents systemic projective identification where collective dysfunction is displaced onto an individual to stabilize group equilibrium.',
};

export const TOPIC_SCAPEGOATING_PATTERN_HINGLISH: MindTopicDetail = {
  ...TOPIC_SCAPEGOATING_PATTERN_EN,
  title: 'Scapegoating: Ghar Ya Team Ki Saari Gandagi Ek Insaan Par Daal Dena (Bakra Banana)',
  subtitle: 'René Girard aur Bowen Theory: Poora parivaar apni kamiya chupane ke liye kisi ek ko villain kyu banata hai?',
  shortDescription: 'Ek aisi systemic manipulation jisme poore parivaar ya team ki nakami, jhagdo aur frustration ka zimmedar kisi ek masoom ya sach bolne wale insaan ko bana diya jata hai.',
  oneLineExplanation: 'Simple shabdon me: Ghar me kuch bhi galat ho, uska dosh hamesha ek hi insaan ke sir par phod dena.',

  summary30s: 'Puraane zamaane me poore gaon ke paap ek bakre ke sir par daal kar use jungle me bhej diya jata tha taaki baki sab pavitra feel karein. Aaj kal ke dysfunctional parivaaro aur offices me yahi insano ke sath hota hai. Jab ghar me jhagde, karze ya sharaab ki aadat hoti hai, toh poora parivaar kisi ek bachhe (aksar jo sabse sach bolta hai) ko "Bakra" (Scapegoat) bana deta hai: "Hamare ghar me koi kami nahi hai; bas yeh ladki hi badtameez aur pagal hai."',
  coreConcept: 'Philosopher René Girard (1982) aur Dr. Murray Bowen (1978) ne bataya ki Scapegoat aksar parivaar ka sabse samajhdar aur sach bolne wala insaan hota hai (Identified Patient). Wo jhooth bolne se inkaar karta hai, isliye poora parivaar uspar toot padta hai taaki unka jhootha parda na phate.',
  summary60s: 'Ritu ke ghar me bhai juve me paise har gaya aur maa-baap roz ladte the. Ritu ne bola: "Bhaiya ko juva band karna chahiye." Poora parivaar Ritu par chilla pada: "Yeh ladki manhoos hai, ghar me negative energy laati hai!" Dudh phat jaye toh Ritu ki galti, light chali jaye toh Ritu ki galti. Ritu ko bakra banakar baki sab log khud ko pavitra samajhte rahe.',

  quickTakeaways: [
    'System ki bimari: Scapegoat me kami nahi hoti; poora parivaar bimaar hota hai aur apna keechad uspar fekta hai',
    'Sach bolne wale ki saza: Jo insaan parivaar ke jhooth par parda daalne se inkaar karta hai, use target banaya jata hai',
    'Nakli Ekta: Baki sab log aapas me tabhi khush hote hain jab wo milkar scapegoat ki burai kar rahe hote hain',
    'Ilaaj: Aise parivaar me khud ko sahi saabit karne ki koshish mat kijiye; door nikal jaiye aur apni nayi duniya banaiye',
  ],

  whyItHappens: 'Insaan apni nakami aur sharam ko face nahi kar pata. Kisi aur ko villain bana kar dimaag ko shanti milti hai.',
  evolutionaryMechanism: 'Tribe me aapas ki ladai rokne ke liye kisi ek kamzor par saara gussa nikaal kar baki group me shanti banayi jaati thi.',

  howItWorks: 'Diwali par sab lad rahe the. Achanak maa ne Ritu ko bola: "Tumhare kapde kharab hain, tumne poora festival kharab kar diya!" Saara gussa Ritu par nikal gaya.',
  howToRespond: 'Unki sharam ko accept mat kijiye. Kahiye: "Main shanti se baitha hoon. Apne gusse aur pareshani ka zimmedar mujhe banana band kijiye." Aur wahan se nikal jaiye.',

  reflectionPrompt: 'Kya aapke parivaar ya school me kisi ek insaan ko hamesha har baat ke liye blame kiya jata tha? Kya wo sach me galat the ya sirf aasan target the?',
  seoTitle: 'Scapegoating Kya Hai? Identified Patient & Family Manipulation | Mentalab Mind',
  seoDescription: 'Janiye Scapegoating (Bakra banana) ki psychology. René Girard aur Murray Bowen research ke mutabiq dysfunctional families se khud ko bachane ke tareeqe.',
  canonicalUrl: '/mind/manipulation-awareness/scapegoating-pattern',
};

function createLocalizedScapeRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_SCAPEGOATING_PATTERN_EN,
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

export const TOPIC_SCAPEGOATING_PATTERN: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SCAPEGOATING_PATTERN_EN,
  hinglish: TOPIC_SCAPEGOATING_PATTERN_HINGLISH,
  hi: createLocalizedScapeRecord(
    'hi',
    'बलि का बकरा बनाना (Scapegoating): सामूहिक दोष का एक व्यक्ति पर प्रक्षेपण',
    'रेने गिरार्ड का सिद्धांत और आइडेंटिफाइड पेशेंट: पूरा समूह अपनी विफलताएं छुपाने के लिए किसी एक को निशाना क्यों बनाता है।',
    'सरल शब्दों में: पूरे परिवार या टीम की विफलताओं और तनाव का ठीकरा किसी एक व्यक्ति के सिर पर फोड़ देना।',
    'बलि का बकरा बनाना तब होता है जब कोई विकृत समूह अपनी आंतरिक कमियों का सामना करने से बचने के लिए किसी एक सदस्य को सभी समस्याओं का कारण घोषित कर देता है।',
    'रेने गिरार्ड (1982) और मरे बोवेन (1978) के अनुसार, यह समूह की झूठी शांति बनाए रखने की एक आदिम और क्रूर रक्षात्मक रणनीति है।',
    [
      'व्यवस्थागत दोष: बलि का बकरा इसलिए नहीं चुना जाता कि वह गलत है, बल्कि इसलिए कि व्यवस्था को दोषारोपण की आवश्यकता है',
      'सत्यवादी का दमन: अक्सर परिवार का सबसे ईमानदार व्यक्ति ही बलि का बकरा बनता है',
      'झूठी एकता: समूह आपस में तभी एकजुट महसूस करता है जब उसके पास बुराई करने के लिए एक सामान्य शिकार हो',
      'मुक्ति का मार्ग: स्वयं को सही साबित करने के बजाय उस विषाक्त वातावरण से बाहर निकलें',
    ]
  ),
  gu: createLocalizedScapeRecord(
    'gu',
    'બલિનો બકરો બનાવવો: આખા જૂથના દોષનો એક વ્યક્તિ પર બોજ',
    'રેને ગિરાર્ડનું સંશોધન: સમગ્ર પરિવારની નિષ્ફળતા માટે એક વ્યક્તિને જવાબદાર ઠેરવવાની યુક્તિ.',
    'સરળ શબ્દોમાં: આખા ઘર કે ઓફિસની ભૂલોનો દોષ એક જ નિર્દોષ વ્યક્તિ પર ઢોળી દેવો.',
    'આ વિષચક્ર આખા જૂથને પોતાની ભૂલો છુપાવવા અને જૂઠી એકતા જાળવવામાં મદદ કરે છે.',
    'પોતાને નિર્દોષ સાબિત કરવા પાછળ શક્તિ વેડફવાને બદલે તે પરિવેશમાંથી મુક્ત થવું જરૂરી છે.',
    ['બલિનો બકરો ન બનો', 'પોતાની કિંમત સમજો', 'વિષચક્રમાંથી મુક્ત થાઓ']
  ),
  mr: createLocalizedScapeRecord(
    'mr',
    'बळीचा बकरा बनवणे: सामूहिक दोषांचे एका व्यक्तीवर खापर फोडणे',
    'रेने गिरार्ड यांचे सिद्धांत: समूहातील तणाव दूर करण्यासाठी एका व्यक्तीला लक्ष्य करण्याचे शास्त्र.',
    'सोप्या भाषेत: कुटुंबातील किंवा कार्यालयातील सर्व समस्यांसाठी एकाच व्यक्तीला जबाबदार धरणे.',
    'बळीचा बकरा बनवून इतर लोक स्वतःच्या चुका आणि जबाबदाऱ्यांपासून पळ काढतात.',
    'अशा विषारी वातावरणातून स्वतःला भावनिकदृष्ट्या दूर ठेवणे हाच योग्य मार्ग आहे.',
    ['खापर फोडणे ओळखा', 'स्वतःला दोष देऊ नका', 'योग्य अंतर ठेवा']
  ),
  bn: createLocalizedScapeRecord(
    'bn',
    'বলির পাঁঠা বানানো: সমষ্টিগত ব্যর্থতার দায় এক ব্যক্তির ওপর চাপানো',
    'রেনে জিরার্ডের মনস্তত্ত্ব: নিজেদের ত্রুটি ঢাকতে একটি নির্দিষ্ট ব্যক্তিকে লক্ষ্যবস্তু বানানোর কৌশল।',
    'সহজ কথায়: পুরো পরিবার বা দলের সব ব্যর্থতার জন্য একজনকে অপরাধী সাব্যস্ত করা।',
    'দলের কৃত্রিম শান্তি রক্ষা করতে এবং নিজেদের অন্যায় লুকোতে একজন দুর্বল বা স্পষ্টভাষীকে বেছে নেওয়া হয়।',
    'নিজেকে নির্দোষ প্রমাণের চেষ্টা ছেড়ে এই বিষাক্ত বলয় থেকে বেরিয়ে আসাই যুক্তিযুক্ত।',
    ['ষড়যন্ত্র চিনুন', 'অন্যায় দায় নেবেন না', 'মুক্ত থাকুন']
  ),
  ta: createLocalizedScapeRecord(
    'ta',
    'பலியாடு ஆக்குதல்: குழுவின் ஒட்டுமொத்தப் பழியையும் ஒருவர் மீது சுமத்துதல்',
    'ரெனே ஜிரார்ட் கோட்பாடு: குடும்பம் அல்லது குழுவின் தோல்விகளுக்கு ஒருவரை பலிகடா ஆக்கும் உளவியல்.',
    'எளிய சொற்களில்: அமைப்பில் உள்ள அனைவரின் தவறுகளுக்கும் ஒருவரை மட்டுமே குற்றவாளியாக்குவது.',
    'குழுவின் ஒற்றுமையை போலியாகக் காப்பாற்ற ஒருவரை இலக்காக மாற்றி கொடுமைப்படுத்துகிறார்கள்.',
    'அவர்களின் பழியை ஏற்காமல் அந்த நச்சுச் சூழலில் இருந்து வெளியேறுவதே தீர்வு.',
    ['பலியாகாதீர்கள்', 'சுயமரியாதை முக்கியம்', 'சரியான எல்லை']
  ),
  te: createLocalizedScapeRecord(
    'te',
    'బలిపశువును చేయడం: సమూహం యొక్క సమష్టి తప్పులను ఒకరిపై మోపడం',
    'రెనే గిరార్డ్ పరిశోధన: తమ లోపాలను కప్పిపుచ్చుకోవడానికి ఒకరిని టార్గెట్ చేసే వికృత మనస్తత్వం.',
    'సులభమైన మాటల్లో: కుటుంబంలో లేదా ఆఫీసులో జరిగే అన్ని తప్పులకు ఒకరినే బాధ్యుడిని చేయడం.',
    'తమ వైఫల్యాల నుండి దృష్టి మళ్లించడానికి ఈ తంత్రాన్ని ఉపయోగిస్తారు.',
    'మిమ్మల్ని మీరు నిరూపించుకునే ప్రయత్నం మానుకుని ఆ విష వాతావరణం నుండి బయటపడండి.',
    ['బలిపశువు కావద్దు', 'నిజాన్ని గ్రహించండి', 'దూరంగా ఉండండి']
  ),
  kn: createLocalizedScapeRecord(
    'kn',
    'ಬಲಿಪಶು ಮಾಡುವುದು: ಗುಂಪಿನ ಒಟ್ಟಾರೆ ದೋಷಗಳನ್ನು ಒಬ್ಬರ ಮೇಲೆ ಹೊರಿಸುವುದು',
    'ರೆನೆ ಗಿರಾರ್ಡ್ ಸಿದ್ಧಾಂತ: ಕುಟುಂಬದ ವೈಫಲ್ಯಗಳನ್ನು ಮರೆಮಾಚಲು ಒಬ್ಬರನ್ನು ಗುರಿಮಾಡುವ ತಂತ್ರ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಇಡೀ ಕುಟುಂಬ ಅಥವಾ ತಂಡದ ಎಲ್ಲಾ ತಪ್ಪುಗಳಿಗೆ ಒಬ್ಬರನ್ನೇ ಹೊಣೆಗಾರರನ್ನಾಗಿ ಮಾಡುವುದು.',
    'ತಮ್ಮ ದೋಷಗಳನ್ನು ಮುಚ್ಚಿಡಲು ಸುಳ್ಳು ಏಕತೆಯನ್ನು ಪ್ರದರ್ಶಿಸಲು ಈ ತಂತ್ರ ಬಳಸುತ್ತಾರೆ.',
    'ಅನಗತ್ಯ ನಿಂದನೆಯನ್ನು ಸಹಿಸದೆ ಅಂತಹ ವಾತಾವರಣದಿಂದ ಹೊರಬರುವುದು ಸೂಕ್ತ.',
    ['ಬಲಿಯಾಗದಿರಿ', 'ನಿಮ್ಮ ಮೌಲ್ಯ ತಿಳಿಯಿರಿ', 'ದೂರವಿರಿ']
  ),
  ml: createLocalizedScapeRecord(
    'ml',
    'ബലിയാടാക്കൽ: കൂട്ടായ പരാജയങ്ങളുടെ പഴി ഒരാളുടെ മേൽ ചാർത്തുന്നത്',
    'റെനെ ജിറാർഡ് പഠനങ്ങൾ: സ്വന്തം പോരായ്മകൾ മറയ്ക്കാൻ ഒരാളെ ഇരയാക്കുന്ന മനഃശാസ്ത്രം.',
    'ലളിതമായി പറഞ്ഞാൽ: കുടുംബത്തിലെ അല്ലെങ്കിൽ ഓഫീസിലെ എല്ലാ പ്രശ്നങ്ങൾക്കും ഒരാളെ മാത്രം കുറ്റപ്പെടുത്തുക.',
    'തങ്ങളുടെ ആഭ്യന്തര പ്രശ്നങ്ങൾ പരിഹരിക്കാതെ മറ്റൊരാളെ പഴിചാരി സമാധാനം കണ്ടെത്തുന്ന രീതിയാണിത്.',
    'സ്വയം കുറ്റപ്പെടുത്താതെ ഇത്തരം വിഷലിപ്ത സാഹചര്യങ്ങളിൽ നിന്ന് അകന്നുനിൽക്കുക.',
    ['ബലിയാടാകരുത്', 'ആത്മാഭിമാനം സംരക്ഷിക്കുക', 'മാറിനിൽക്കുക']
  ),
  pa: createLocalizedScapeRecord(
    'pa',
    'ਬਲੀ ਦਾ ਬੱਕਰਾ ਬਣਾਉਣਾ: ਸਾਰੇ ਪਰਿਵਾਰ ਦਾ ਗੁੱਸਾ ਅਤੇ ਗਲਤੀਆਂ ਇੱਕ ਤੇ ਥੋਪਣਾ',
    'ਰੇਨੇ ਗਿਰਾਰਡ ਦਾ ਸਿਧਾਂਤ: ਆਪਣੀਆਂ ਕਮੀਆਂ ਛੁਪਾਉਣ ਲਈ ਕਿਸੇ ਇੱਕ ਨੂੰ ਨਿਸ਼ਾਨਾ ਬਣਾਉਣ ਦੀ ਮਾਨਸਿਕਤਾ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਘਰ ਜਾਂ ਆਫ਼ਿਸ ਦੀ ਹਰ ਗੜਬੜ ਲਈ ਇੱਕ ਹੀ ਬੰਦੇ ਨੂੰ ਦੋਸ਼ੀ ਠਹਿਰਾਉਣਾ।',
    'ਇਹ ਚਾਲ ਬਾਕੀ ਪਰਿਵਾਰ ਨੂੰ ਆਪਣੀਆਂ ਗਲਤੀਆਂ ਤੋਂ ਬਚਣ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ।',
    'ਖ਼ੁਦ ਨੂੰ ਸਹੀ ਸਾਬਤ ਕਰਨ ਦੀ ਬਜਾਏ ਅਜਿਹੇ ਮਾਹੌਲ ਤੋਂ ਦੂਰ ਹੋ ਜਾਓ।',
    ['ਬਲੀ ਦਾ ਬੱਕਰਾ ਨਾ ਬਣੋ', 'ਸੱਚਾਈ ਪਛਾਣੋ', 'ਦੂਰੀ ਬਣਾਓ']
  ),
  ur: createLocalizedScapeRecord(
    'ur',
    'قربانی کا بکرا بنانا: اجتماعی غلطیوں کا ملبہ کسی ایک فرد پر ڈال دینا',
    'رینے جیرارڈ کا نظریہ: اپنے عیب چھپانے کے لیے کسی ایک کو نشانہ بنانے کی چال۔',
    'آسان الفاظ میں: پورے خاندان یا ٹیم کی ناکامیوں اور پریشانیوں کا ذمہ دار کسی ایک کو ٹھہرا دینا۔',
    'اپنی خامیوں کو چھپا کر جھوٹا اتحاد قائم رکھنے کا یہ ایک غیر منصفانہ طریقہ ہے۔',
    'خود کو بے گناہ ثابت کرنے کے بجائے ایسے زہریلے ماحول سے کنارہ کشی اختیار کریں۔',
    ['نشانہ نہ بنیں', 'خود شناسی حاصل کریں', 'فاصلہ رکھیں']
  ),
  or: createLocalizedScapeRecord(
    'or',
    'ବଳିର ବୋଦା ବନାଇବା: ସମୂହର ସମସ୍ତ ଦୋଷକୁ ଜଣେ ବ୍ୟକ୍ତି ଉପରେ ଲଦିଦେବା',
    'ରେନେ ଗିରାର୍ଡଙ୍କ ତତ୍ତ୍ୱ: ନିଜ ବିଫଳତା ଲୁଚାଇବା ପାଇଁ ଜଣକୁ ଟାର୍ଗେଟ୍ କରିବାର କଳା।',
    'ସହଜ ଭାଷାରେ: ପରିବାର ବା ଅଫିସ୍‌ର ସମସ୍ତ ଅସୁବିଧା ପାଇଁ କେବଳ ଜଣକୁ ଦାୟୀ କରିବା।',
    'ନିଜ ଦୋଷ ଲୁଚାଇ ରଖିବା ପାଇଁ ଏକ ଦୁର୍ବଳ ବ୍ୟକ୍ତିକୁ ବଳି ଦିଆଯାଏ।',
    'ନିଜକୁ ଦୋଷ ନ ଦେଇ ସେହି ବିଷାକ୍ତ ପରିବେଶରୁ ନିଜକୁ ରକ୍ଷା କରନ୍ତୁ।',
    ['ବଳି ପଡ଼ନ୍ତୁ ନାହିଁ', 'ନିଜର ମୂଲ୍ୟ ବୁଝନ୍ତୁ', 'ଦୂରେଇ ରୁହନ୍ତୁ']
  ),
  as: createLocalizedScapeRecord(
    'as',
    'বলিৰ পঠা সজোৱা: সমূহীয়া ভুলৰ বোজা এজনৰ ওপৰত জাপি দিয়াৰ মানসিকতা',
    'ৰেনে গিৰাৰ্ডৰ অধ্যয়ন: নিজৰ দুৰ্বলতা ঢাকিবলৈ এজনক লক্ষ্য কৰি লোৱাৰ বিজ্ঞান।',
    'সহজ কথাত: পৰিয়াল বা দলৰ সকলো বিফলতাৰ বাবে এজন ব্যক্তিক জগৰীয়া কৰা।',
    'নিজৰ ত্রুটি লুকুৱাই ৰাখিবলৈ সততে সত্য কওঁতাজনক বলি সজোৱা হয়।',
    'নিজকে নিৰ্দোষ প্ৰমাণৰ বৃথা চেষ্টা নকৰি বিষাক্ত পৰিৱেশৰ পৰা আঁতৰি থাকক।',
    ['বলি নহ’ব', 'আত্মবিশ্বাস ৰাখক', 'আঁতৰি থাকক']
  ),
};
