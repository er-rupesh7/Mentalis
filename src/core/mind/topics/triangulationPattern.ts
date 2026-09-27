import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 16: Triangulation Pattern
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Bowen (1978): Family Therapy in Clinical Practice (Family Systems Theory & Triangles)
 * - Karpman (1968): Fairy Tales and Script Drama Analysis (The Karpman Drama Triangle: Persecutor, Rescuer, Victim)
 * - Simon (2010): In Sheep's Clothing: Understanding and Dealing with Manipulative People
 */

export const TOPIC_TRIANGULATION_PATTERN_EN: MindTopicDetail = {
  id: 'triangulation_pattern',
  categoryId: 'manipulation_awareness',
  slug: 'triangulation-pattern',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 7,
  scientificConsensusTier: 'established',
  sortWeight: 16,
  viewCount: 7820,
  shareCount: 650,
  bookmarkCount: 1340,
  title: 'Triangulation: The Divide-and-Control Relational Game',
  subtitle: 'Bowen Family Systems and the Karpman Drama Triangle: how manipulators pull third parties in to disempower you.',
  shortDescription: 'A manipulation tactic where a person uses a third party to communicate, validate their stance, manufacture jealousy, or undermine another relationship.',
  oneLineExplanation: 'In simple terms: Dragging a third person into a conflict between two people to outnumber, isolate, or control you.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'Instead of speaking to you directly, a partner, manager, or parent pulls in a third party: "Even your sister agrees you are selfish," or "My ex never complained about this," or "The CEO told me privately that he doesn’t think you\'re ready." Triangulation is the calculated weaponization of a third voice to manufacture insecurity, divide loyalties, and prevent direct, honest communication.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Pioneered by family systems theorist Dr. Murray Bowen (1978), a two-person dyad is inherently vulnerable to tension. When anxiety rises between two people, a "triangle" is formed by pulling in a third party to dilute tension or consolidate power. In manipulative contexts (Simon, 2010), the manipulator operates as the exclusive information hub: they feed tailored, conflicting stories to Person A and Person B so that A and B distrust each other, leaving the manipulator as the sole powerful puppet-master in the center.',
  summary60s: 'Stephen Karpman’s Drama Triangle (1968) maps this dynamic across three shifting archetypes: The Victim, The Persecutor, and The Rescuer. A manipulative mother or boss will cast you as the Persecutor ("You are so cruel and ungrateful!"), cast themselves as the helpless Victim, and recruit a sibling or coworker as the Rescuer to attack you on their behalf. The third party believes they are defending an innocent victim, completely blind to the fact that they are being used as an emotional weapon.',

  quickTakeaways: [
    'The Puppet Master Hub: The triangulator keeps the other two parties from talking directly to prevent their lies from being exposed',
    'Manufactured Competition: Comparing you to an ex-partner, sibling, or rival coworker is designed to make you compete desperately for approval',
    'The "Everyone Agrees" Illusion: Using phantom crowds ("Everyone in the family thinks you have changed") to make you feel isolated',
    'The Direct Contact Rule: Cut the manipulator out of the loop and speak directly to the third party to verify facts',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Fear of social ostracism and manufactured jealousy. When a partner compares you to an attractive colleague or former lover, it triggers intense evolutionary mating anxiety and fear of replacement, driving you to accommodate unreasonable demands.',
  evolutionaryMechanism: 'Tribal coalition politics: forming a 2-against-1 alliance was the most effective method for individuals to win disputes and resource control within the clan.',

  // SECTION E — HOW DO MANIPULATORS USE IT?
  howItWorks: 'Triangulation takes three common forms: (1) Romantic Triangulation (bringing an ex or flirtatious friend into conversation to induce jealousy); (2) Familial Triangulation (a parent complaining to child A about child B); (3) Workplace Triangulation (a manager telling employee X that employee Y criticized their work behind closed doors).',
  whereYouEncounterIt: 'Joint family conflicts (mother-in-law, son, daughter-in-law), corporate office politics, romantic infidelity dynamics, and friend-group factions.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Direct Communication vs. Manipulative Triangulation',
    description: 'How bringing a third party warps resolution.',
    analogySideA: {
      label: 'Direct Communication (Dyad)',
      detail: 'Person A speaks directly to Person B: "I felt hurt when you forgot our dinner." -> Direct apology, clarity, mutual resolution.',
    },
    analogySideB: {
      label: 'Triangulation (The Toxic Triangle)',
      detail: 'Person A tells Person C: "Person B treats me horribly." Person C attacks Person B: "How dare you hurt Person A!" Person A watches comfortably from the sidelines.',
    },
  },

  researchSummary: 'Bowen (1978) established that triangulation is the basic building block of any emotional system. In high-anxiety families, triangles become rigid and chronic, preventing individuals from developing differentiated emotional autonomy and causing generational trauma transmission.',
  limitationsAndControversies: 'Consulting a neutral mediator, marriage counselor, or HR ombudsman is NOT toxic triangulation. Healthy third-party involvement brings everyone into the SAME room with full transparency to foster direct resolution; manipulative triangulation keeps parties separated and suspicious.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Phrases like: "Even my mother said you don\'t respect me," or "The whole office is talking about how difficult you are"',
    'A partner casually mentioning how attractive, brilliant, or attentive an ex or coworker is whenever you express a boundary',
    'Finding out that someone has been complaining about you to friends or family for months without ever speaking to you directly',
    'Being drawn into a conflict between two family members or coworkers where you are pressured to "take a side"',
    'A manager who tells you private gossip and criticisms about your teammates while telling your teammates similar gossip about you',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_triang_01',
      scenarioType: 'indian_context',
      title: 'The Mother-Son-Wife Relational Triangle',
      vignette: 'Priya and Amit live in Bengaluru. Amit\'s mother, Sarita, visits for a month. If Sarita dislikes Priya\'s cooking or schedule, she never speaks to Priya. Instead, when Amit returns from office, Sarita weeps quietly on the sofa: "Beta, your wife didn\'t offer me tea at 4 PM. She hates having me here. I am an old burden." Amit becomes furious, storms into the kitchen, and reprimands Priya: "Why can\'t you treat my mother with respect?" Priya is stunned and defensive. Sarita sits peacefully in the living room while Amit and Priya have an exhausting 2-hour argument.',
      breakdownAnalysis: 'Sarita executed clinical family triangulation. By channeling her grievances through Amit rather than speaking directly to Priya, Sarita created a 2-against-1 coalition. Amit was recruited as the "Rescuer" to attack the supposed "Persecutor" (Priya), completely shielding Sarita from direct dialogue.',
      recommendedAction: 'Amit must de-triangulate: "Maa, Priya is in the kitchen right now. Let us sit together with her and ask for tea directly. I will not be a messenger for household friction." Unifying the channels collapses the toxic triangle.',
    },
  ],

  examples: [
    {
      id: 'ex_triang_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Whispering Project Lead',
      description: 'A project lead tells Developer A: "Developer B thinks your code is sloppy," and tells Developer B: "Developer A wants to take over your module." The two developers stop talking, become paranoid, and rely solely on the project lead for direction.',
      takeaway: 'Triangulation prevents lateral collaboration and solidifies the manipulator\'s monopoly on power.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'To destroy triangulation, close the triangle. Connect the two disconnected nodes directly. If someone says "Person C said X about you," respond: "Thank you for letting me know; I will message Person C right now on a group chat with both of us so we can clear this up." Watch how fast the triangulator panics.',
  psychologicalDefenses: [
    'Close the Triangle: Always verify third-party claims directly with the named individual: "Let us get on a 3-way call right now"',
    'Refuse Phantom Feedback: If someone says "Everyone thinks you are difficult," respond: "I cannot address vague crowd opinions. If a specific individual has feedback for me, please ask them to speak to me directly"',
    'Decline the Messenger Role: When someone complains about a third party, say: "That sounds like something you should discuss directly with them"',
    'Refuse Manufactured Jealousy: If a partner brings up an ex or rival to make you insecure, refuse to compete: "If they are so wonderful, you are welcome to spend your time with them. I do not compete for basic respect"',
  ],

  commonMisconceptions: [
    {
      misconception: 'If my partner mentions someone else, they are just being honest and sharing their thoughts.',
      reality: 'Context and pattern determine intent. If another person is repeatedly introduced during moments when you are asserting a boundary or asking for intimacy, it is a calculated triangulation weapon.',
    },
  ],

  reflectionPrompt: 'Has anyone ever cited "what others are saying about you" to make you back down from a valid boundary? Did you verify whether those "others" actually said it?',

  interactiveScenario: {
    id: 'interactive_triang_01',
    topicId: 'triangulation_pattern',
    scenarioTitle: 'The Workplace Gossip Whisperer',
    scenarioDescription: 'A colleague leans over your cubicle and whispers: "Just between us, during the leadership sync yesterday, Rahul told the director that your sprint estimates are totally unreliable. I thought you should know so you can watch your back."',
    vignetteSourceType: 'workplace',
    options: [
      {
        id: 'opt_1',
        text: 'Become furious, send an angry Slack message to Rahul calling him a backstabber, and report him to your manager.',
        isCorrect: false,
        cognitiveTakeaway: 'You take the bait! The triangulator successfully turned you and Rahul into enemies while keeping their own hands clean.',
      },
      {
        id: 'opt_2',
        text: 'Close the triangle calmly: "Thanks for sharing. I believe in direct communication, so I am going to walk over to Rahul\'s desk right now and ask him what concerns he had about my sprint estimates."',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of de-triangulation! Direct verification immediately disarms manufactured workplace paranoia.',
      },
      {
        id: 'opt_3',
        text: 'Start secretly sabotaging Rahul\'s code reviews to get revenge.',
        isCorrect: false,
        cognitiveTakeaway: 'Passive-aggressive retaliation that validates unverified third-party gossip and damages professional integrity.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_triang_01',
      questionType: 'multiple_choice',
      prompt: 'According to Murray Bowen\'s Family Systems Theory, what is the core structural function of triangulation?',
      options: [
        { id: 'opt_a', text: 'To improve mathematical problem-solving speed in school children', isCorrect: false },
        { id: 'opt_b', text: 'To divert or dilute unbearable tension between two individuals by pulling in a third party, often creating an unbalanced 2-against-1 coalition', isCorrect: true, feedbackText: 'Correct! Bowen proved that dyads naturally stabilize anxiety by recruiting a third person into a relational triangle.' },
        { id: 'opt_c', text: 'To organize democratic voting procedures in civic organizations', isCorrect: false },
      ],
      cognitiveTakeaway: 'Triangulation redistributes relational anxiety by manufacturing coalitions.',
    },
  ],

  references: [
    {
      citation: 'Bowen, M. (1978). Family therapy in clinical practice. Jason Aronson.',
      doiOrUrl: 'https://doi.org/10.1007/978-1-4684-2520-8',
      relevance: 'The foundational seminal text defining family emotional systems, differentiation of self, and triangulation.',
      displayOrder: 1,
    },
    {
      citation: 'Karpman, S. (1968). Fairy tales and script drama analysis. Transactional Analysis Bulletin, 7(26), 39–43.',
      doiOrUrl: 'https://doi.org/10.1177/036215376800702602',
      relevance: 'Introduced the Karpman Drama Triangle (Persecutor, Rescuer, Victim) explaining relational roles in triangulation.',
      displayOrder: 2,
    },
  ],

  tags: ['Manipulation Awareness', 'Triangulation', 'Bowen Theory', 'Drama Triangle', 'Family Systems', 'Workplace Politics'],
  relatedTopics: [
    { topicId: 'playing_people_against_each_other', slug: 'playing-people-against-each-other', title: 'Playing People Against Each Other', relationshipType: 'amplified_by' },
    { topicId: 'scapegoating_pattern', slug: 'scapegoating-pattern', title: 'Scapegoating Pattern', relationshipType: 'foundational_to' },
    { topicId: 'healthy_boundaries', slug: 'healthy-boundaries', title: 'Healthy Boundaries', relationshipType: 'counteracted_by' },
  ],
  seoTitle: 'Triangulation in Relationships: Bowen Theory & Karpman Drama Triangle | Mentalab Mind',
  seoDescription: 'Master the psychology of Triangulation. Learn how manipulators use third parties to divide and control, and how to close the triangle with direct communication.',
  canonicalUrl: '/mind/manipulation-awareness/triangulation-pattern',
  ogImageUrl: '/images/mind/triangulation-pattern.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Triangulation stabilizes dyadic tension by externalizing anxiety onto an intermediary third party to manipulate power asymmetries.',
};

export const TOPIC_TRIANGULATION_PATTERN_HINGLISH: MindTopicDetail = {
  ...TOPIC_TRIANGULATION_PATTERN_EN,
  title: 'Triangulation: Teesre Insaan Ko Beech Me Laakar Ladwana Aur Control Karna',
  subtitle: 'Bowen Family Systems aur Drama Triangle: Manipulator aapse akele me baat kyu nahi karta?',
  shortDescription: 'Ek aisi manipulation tactic jisme ek insaan do logon ke beech ki baat me kisi teesre person ko ghaseet leta hai taaki aapko insecure, isolated aur galat saabit kiya ja sake.',
  oneLineExplanation: 'Simple shabdon me: Aapse aamne-saamne baat karne ke bajaye teesre insaan ko beech me laakar aapko dabana.',

  summary30s: 'Aapne notice kiya hoga ki kuch log aapse seedhe baat nahi karte. Wo bolte hain: "Tumhari behen bhi bol rahi thi ki tum kitni selfish ho," ya "Office me sab keh rahe hain ki tumhara kaam kharab hai," ya ex-partner ki tareef karke aapko jealous feel karwate hain. Isko bolte hain Triangulation. Manipulator teesre insaan ka naam use karta hai taaki aap akela aur powerless feel karein aur unke aage jhuk jayein.',
  coreConcept: 'Dr. Murray Bowen (1978) ne Family Systems Theory me discover kiya tha ki jab do logon ke beech me tension hoti hai, toh wo teesre insaan ko pakad kar "Triangle" bana lete hain. Karpman Drama Triangle (1968) batata hai ki manipulator khud ko "Victim" banata hai, aapko "Persecutor" (villain), aur kisi teesre ko "Rescuer" (hero) banakar aap par attack karwata hai.',
  summary60s: 'Ghar me saas ko bahu se koi shikayat hoti hai, toh wo bahu se baat nahi karti. Wo bete ke aate hi rone lagti hai: "Bahu ne mujhe 4 baje chai nahi di, main bohot dukhi hoon." Beta gusse me kitchen me jaakar wife par chillane lagta hai. Saas aaram se drawing room me baithti hai jabki husband-wife ka 2 ghante jhagda hota hai. Isko bolte hain Toxic Triangulation.',

  quickTakeaways: [
    'Teesre ka Sahara: Manipulator akela aapse ladne ki himmat nahi rakhta, isliye doosro ka naam leta hai',
    'Divide and Rule: Dono parties ko aapas me baat nahi karne diya jata taaki unka jhooth na pakda jaye',
    'Ex-partner ki Tareef: Aapko jealous aur insecure karke unke nakhre uthane par majboor karna',
    'Triangle ko Todna: Manipulator ko hataiye aur seedha teesre insaan se aamne-saamne baat karke sach pata kijiye',
  ],

  whyItHappens: 'Insaan ko group se bahar nikal diye jane ka darr rehta hai. Jab koi bolta hai "Sab log yahi sochte hain," toh dimaag darr kar surrender kar deta hai.',
  evolutionaryMechanism: 'Aadimanav ke zamaane me 2 log milkar 1 akele par attack karte the toh jeet jaate the.',

  howItWorks: 'Colleague bolta hai: "Rahul ne meeting me bola ki tumhara kaam bekaar hai." Solution: Gusse me ladne ke bajaye seedha Rahul ke desk par jaiye aur shanti se puchiye.',
  howToRespond: 'Triangle band kijiye: "Agar Sharma ji ko mujhse koi problem hai, toh unhe kahiye seedha mujhse baat karein. Main unki taraf se tumhari baat nahi sununga."',

  reflectionPrompt: 'Kya aapke partner ya family member ne kabhi kisi teesre person ki tareef karke aapko chhota aur insecure feel karwaya hai?',
  seoTitle: 'Triangulation Kya Hai? Relational Manipulation & Drama Triangle | Mentalab Mind',
  seoDescription: 'Janiye Triangulation ki psychology. Murray Bowen Family Systems aur teesre insaan ke zariye hone wale manipulation ko neutralize karne ke tareeqe.',
  canonicalUrl: '/mind/manipulation-awareness/triangulation-pattern',
};

function createLocalizedTriangRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_TRIANGULATION_PATTERN_EN,
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

export const TOPIC_TRIANGULATION_PATTERN: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_TRIANGULATION_PATTERN_EN,
  hinglish: TOPIC_TRIANGULATION_PATTERN_HINGLISH,
  hi: createLocalizedTriangRecord(
    'hi',
    'त्रिभुजीकरण (Triangulation): तीसरे व्यक्ति को बीच में लाकर बांटने और नियंत्रित करने का खेल',
    'बोवेन फैमिली सिस्टम्स और ड्रामा ट्रायंगल: जोड़-तोड़ करने वाले आपसे अकेले में बात करने से क्यों बचते हैं।',
    'सरल शब्दों में: दो लोगों के आपसी विवाद में किसी तीसरे को घसीटकर सामने वाले को अकेला और कमजोर करना।',
    'त्रिभुजीकरण तब होता है जब कोई व्यक्ति सीधे संवाद करने के बजाय किसी तीसरे व्यक्ति का सहारा लेकर ईर्ष्या, असुरक्षा या दबाव पैदा करता है।',
    'मरे बोवेन (1978) और स्टीफन कार्पमैन (1968) के अनुसार, यह तनाव को टालने और दूसरों पर अपना प्रभुत्व स्थापित करने का एक विषाक्त तरीका है।',
    [
      'कठपुतली संचालक: दोनों पक्षों को आपस में सीधे बात न करने देना ताकि झूठ न पकड़ा जाए',
      'कृत्रिम ईर्ष्या: पूर्व-साथी या सहकर्मी से तुलना करके आपको असुरक्षित महसूस कराना',
      'भीड़ का भ्रम: "सब लोग ऐसा ही सोचते हैं" कहकर आपको अलग-थलग करना',
      'सीधे संवाद का नियम: मध्यस्थ को हटाकर तीसरे व्यक्ति से सीधे सच्चाई की पुष्टि करें',
    ]
  ),
  gu: createLocalizedTriangRecord(
    'gu',
    'ટ્રાયેંગ્યુલેશન: ત્રીજી વ્યક્તિને વચ્ચે લાવીને ઝઘડો કરાવવાની અને કાબૂ રાખવાની યુક્તિ',
    'બોવેન ફેમિલી સિસ્ટમ્સનું સંશોધન: સીધી વાત કરવાને બદલે ત્રીજાનો સહારો લેવાનું મનોવિજ્ઞાન.',
    'સરળ શબ્દોમાં: બે વ્યક્તિ વચ્ચેના વિવાદમાં ત્રીજી વ્યક્તિને લાવીને સામેવાળાને એકલા પાડી દેવા.',
    'ટ્રાયેંગ્યુલેશન દ્વારા સંબંધોમાં અસલામતી અને ઈર્ષ્યા પેદા કરીને પોતાનો કાબૂ જાળવી રખાય છે.',
    'વચેટિયાની વાત પર વિશ્વાસ કરવાને બદલે સીધો સંવાદ કરવો એ જ સાચો ઉપાય છે.',
    ['જાળ ઓળખો', 'સીધી વાત કરો', 'ઈર્ષ્યાથી બચો']
  ),
  mr: createLocalizedTriangRecord(
    'mr',
    'ट्रायँग्युलेशन: तिसऱ्या व्यक्तीला मधे आणून दुफळी पाडण्याचे आणि नियंत्रण करण्याचे तंत्र',
    'बोवेन फॅमिली सिस्टीम्स: समोरासमोर चर्चा न करता तिसऱ्याचा वापर करून दबाव आणण्याचे शास्त्र.',
    'सोप्या भाषेत: दोघांच्या वादात तिसऱ्याला ओढून समोरच्याला एकाकी पाडणे आणि कमी लेखणे.',
    'या पद्धतीमुळे परस्पर अविश्वास निर्माण होतो आणि मूळ सूत्रधार नामानिराळा राहतो.',
    'मध्यस्थावर अवलंबून न राहता थेट संवाद साधणे हाच यावरील सर्वात प्रभावी तोडगा आहे.',
    ['दुफळी टाळा', 'थेट संवाद साधा', 'असुरक्षितता बाळगू नका']
  ),
  bn: createLocalizedTriangRecord(
    'bn',
    'ট্রায়াঙ্গুলেশন: তৃতীয় ব্যক্তিকে টেনে এনে বিরোধ বাধানো ও নিয়ন্ত্রণের কৌশল',
    'বোয়েন ফ্যামিলি সিস্টেমস ও ড্রামা ট্রায়াঙ্গেল: মুখোমুখি কথা না বলে তৃতীয় পক্ষকে ব্যবহারের রহস্য।',
    'সহজ কথায়: দুই ব্যক্তির মাঝে তৃতীয় কাউকে টেনে এনে অপরকে একঘরে ও দুর্বল করে ফেলা।',
    'এই কৌশলে ঈর্ষা ও নিরাপত্তাহীনতা তৈরি করে নিজের কর্তৃত্ব বজায় রাখা হয়।',
    'মধ্যস্থতাকারীর প্ররোচনায় পা না দিয়ে সরাসরি যোগাযোগ করাই বুদ্ধিমানের কাজ।',
    ['ষড়যন্ত্র চিনুন', 'সরাসরি কথা বলুন', 'বিভ্রান্ত হবেন না']
  ),
  ta: createLocalizedTriangRecord(
    'ta',
    'முக்கோணப்படுத்துதல்: மூன்றாம் நபரை இழுத்து பிளவுபடுத்தி கட்டுப்படுத்தும் தந்திரம்',
    'போவன் குடும்ப அமைப்பு கோட்பாடு: நேருக்கு நேர் பேசாமல் மூன்றாம் நபரை வைத்து ஆதிக்கம் செலுத்துவது.',
    'எளிய சொற்களில்: இருவருக்கு இடையேயான சிக்கலில் மூன்றாம் நபரை இழுத்து ஒருவரை தனிமைப்படுத்துவது.',
    'பொறாமையையும் பாதுகாப்பற்ற உணர்வையும் தூண்டிவிட்டு ஆதிக்கம் செலுத்த இந்த உத்தி பயன்படுகிறது.',
    'இடைத்தரகர்களைத் தவிர்த்து நேரடியாகப் பேசி உண்மையை அறிந்துகொள்ளுங்கள்.',
    ['சூழ்ச்சியை உணருங்கள்', 'நேரடியாகப் பேசுங்கள்', 'சுயநம்பிக்கை வேண்டும்']
  ),
  te: createLocalizedTriangRecord(
    'te',
    'ట్రయాంగ్యులేషన్: మూడవ వ్యక్తిని మధ్యలోకి తెచ్చి విభజించి పాలించే కుట్ర',
    'బోవెన్ ఫ్యామిలీ సిస్టమ్స్ పరిశోధన: నేరుగా మాట్లాడకుండా ఇతరుల ద్వారా ఒత్తిడి తెచ్చే మనస్తత్వం.',
    'సులభమైన మాటల్లో: ఇద్దరి మధ్య గొడవలో మూడవ వ్యక్తిని లాగి ఒకరిని ఒంటరిని చేయడం.',
    'అభద్రతాభావాన్ని మరియు ఈర్ష్యను సృష్టించి తమ నియంత్రణలో ఉంచుకునే తంత్రమిది.',
    'మధ్యవర్తుల మాటలను నమ్మకుండా నేరుగా మాట్లాడి సమస్యను పరిష్కరించుకోండి.',
    ['కుట్రను గుర్తించండి', 'నేరుగా మాట్లాడండి', 'ఈర్ష్యకు తావివ్వకండి']
  ),
  kn: createLocalizedTriangRecord(
    'kn',
    'ಟ್ರಯಾಂಗ್ಯುಲೇಶನ್: ಮೂರನೇ ವ್ಯಕ್ತಿಯನ್ನು ಮಧ್ಯ ತಂದು ಒಡಕು ಮೂಡಿಸಿ ನಿಯಂತ್ರಿಸುವ ತಂತ್ರ',
    'ಬೋವೆನ್ ಫ್ಯಾಮಿಲಿ ಸಿಸ್ಟಮ್ಸ್ ವಿಜ್ಞಾನ: ಮುಖಾಮುಖಿ ಮಾತನಾಡದೆ ಮೂರನೆಯವರ ಮೂಲಕ ಪಿತೂರಿ ನಡೆಸುವುದು.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಇಬ್ಬರ ನಡುವಿನ ಮಾತಿನಲ್ಲಿ ಮೂರನೆಯವರನ್ನು ತಂದು ಒಬ್ಬರನ್ನು ಒಂಟಿ ಮಾಡುವುದು.',
    'ಅಸುರಕ್ಷತೆ ಮತ್ತು ಅಸೂಯೆಯನ್ನು ಹುಟ್ಟುಹಾಕಿ ತಮ್ಮ ಹಿಡಿತದಲ್ಲಿಟ್ಟುಕೊಳ್ಳುವ ತಂತ್ರವಿದು.',
    'ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ನೇರವಾಗಿ ಮಾತನಾಡಿ ಸತ್ಯವನ್ನು ಕಂಡುಕೊಳ್ಳಿ.',
    ['ಪಿತೂರಿ ಗುರುತಿಸಿ', 'ನೇರ ಸಂವಹನ ನಡೆಸಿ', 'ಅಸುರಕ್ಷತೆ ಬಿಡಿ']
  ),
  ml: createLocalizedTriangRecord(
    'ml',
    'ട്രയാങ്കുലേഷൻ: മൂന്നാമതൊരാളെ കൊണ്ടുവന്ന് ഭിന്നിപ്പിച്ചു ഭരിക്കുന്ന കുതന്ത്രം',
    'ബോവൻ ഫാമിലി സിസ്റ്റംസ് പഠനങ്ങൾ: നേർക്കുനേർ സംസാരിക്കാതെ മൂന്നാം കക്ഷിയെ ഉപയോഗിച്ച് നിയന്ത്രിക്കുക.',
    'ലളിതമായി പറഞ്ഞാൽ: രണ്ടുപേരുടെ തർക്കത്തിൽ മൂന്നാമതൊരാളെ വലിച്ചിഴച്ച് ഒരാളെ ഒറ്റപ്പെടുത്തുക.',
    'അസൂയയും അരക്ഷിതാവസ്ഥയും ഉണ്ടാക്കി ആളുകളെ വരുതിയിലാക്കുന്ന രീതിയാണിത്.',
    'ഇടനിലക്കാരെ ഒഴിവാക്കി നേരിട്ട് സംസാരിച്ച് തെറ്റിദ്ധാരണകൾ മാറ്റുക.',
    ['ചതി തിരിച്ചറിയുക', 'നേരിട്ട് സംസാരിക്കുക', 'അരക്ഷിതത്വം ഒഴിവാക്കുക']
  ),
  pa: createLocalizedTriangRecord(
    'pa',
    'ਟ੍ਰਾਈਐਂਗੁਲੇਸ਼ਨ: ਤੀਜੇ ਵਿਅਕਤੀ ਨੂੰ ਵਿਚਾਲੇ ਲਿਆ ਕੇ ਲੜਾਉਣ ਅਤੇ ਕਾਬੂ ਕਰਨ ਦਾ ਢੰਗ',
    'ਬੋਵੇਨ ਫੈਮਿਲੀ ਸਿਸਟਮਜ਼ ਦੀ ਰਿਸਰਚ: ਆਹਮੋ-ਸਾਹਮਣੇ ਗੱਲ ਕਰਨ ਦੀ ਬਜਾਏ ਤੀਜੇ ਦਾ ਸਹਾਰਾ ਲੈਣਾ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਦੋ ਲੋਕਾਂ ਦੇ ਝਗੜੇ ਵਿੱਚ ਤੀਜੇ ਨੂੰ ਘਸੀਟ ਕੇ ਸਾਹਮਣੇ ਵਾਲੇ ਨੂੰ ਇਕੱਲਾ ਕਰਨਾ।',
    'ਇਸ ਨਾਲ ਅਸੁਰੱਖਿਆ ਅਤੇ ਈਰਖਾ ਪੈਦਾ ਕਰਕੇ ਆਪਣਾ ਕੰਟਰੋਲ ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ।',
    'ਵਿਚੋਲਿਆਂ ਦੀ ਗੱਲ ਸੁਣਨ ਦੀ ਥਾਂ ਸਿੱਧੀ ਗੱਲਬਾਤ ਕਰਕੇ ਸੱਚ ਜਾਣੋ।',
    ['ਚਾਲ ਪਛਾਣੋ', 'ਸਿੱਧੀ ਗੱਲ ਕਰੋ', 'ਈਰਖਾ ਤੋਂ ਬਚੋ']
  ),
  ur: createLocalizedTriangRecord(
    'ur',
    'مثلث سازی: تیسرے شخص کو درمیان میں لا کر لڑانے اور قابو پانے کا کھیل',
    'بوون فیملی سسٹمز کی تحقیق: آمنے سامنے بات کرنے کے بجائے تیسرے فریق کو استعمال کرنے کا فریب۔',
    'آسان الفاظ میں: دو افراد کے تنازع میں تیسرے کو گھسیٹ کر ایک کو تنہا اور کمزور کر دینا۔',
    'حسد اور عدم تحفظ کا احساس پیدا کر کے اپنا تسلط قائم کرنے کا غیر اخلاقی طریقہ۔',
    'درمیانی افراد کی باتوں پر کان دھرنے کے بجائے براہ راست بات چیت کریں۔',
    ['چال سمجھیں', 'براہ راست بات کریں', 'عدم تحفظ سے بچیں']
  ),
  or: createLocalizedTriangRecord(
    'or',
    'ଟ୍ରାଏଙ୍ଗୁଲେସନ୍: ତୃତୀୟ ବ୍ୟକ୍ତିଙ୍କୁ ମଝିକୁ ଆଣି ଭେଦଭାବ ସୃଷ୍ଟି କରି ନିୟନ୍ତ୍ରଣ କରିବାର କଳା',
    'ବୋୱେନ୍ ଫ୍ୟାମିଲି ସିଷ୍ଟମ୍ସ ଥିଓରୀ: ସାମ୍ନାସାମ୍ନି କଥା ନ ହୋଇ ତୃତୀୟ ପକ୍ଷର ଦୁରୁପଯୋଗ କରିବା।',
    'ସହଜ ଭାଷାରେ: ଦୁଇଜଣଙ୍କ ଝଗଡ଼ାରେ ତୃତୀୟ ବ୍ୟକ୍ତିଙ୍କୁ ଟାଣି ଆଣି ଜଣକୁ ଏକାକୀ କରିବା।',
    'ଅସୁରକ୍ଷିତତା ଏବଂ ଈର୍ଷା ସୃଷ୍ଟି କରି ନିଜର ପ୍ରଭାବ ବିସ୍ତାର କରିବା ଏହାର ଲକ୍ଷ୍ୟ।',
    'ମଧ୍ୟସ୍ଥଙ୍କ ଉପରେ ଭରସା ନ କରି ସିଧାସଳଖ ଆଲୋଚନା କରନ୍ତୁ।',
    ['କୁଚକ୍ର ଚିହ୍ନନ୍ତୁ', 'ସିଧାସଳଖ କଥା ହୁଅନ୍ତୁ', 'ସ୍ୱାଭିମାନ ରକ୍ଷା କରନ୍ତୁ']
  ),
  as: createLocalizedTriangRecord(
    'as',
    'ট্ৰায়েংগুলেশ্বন: তৃতীয় ব্যক্তিক মাজলৈ আনি সংঘাত সৃষ্টি কৰি নিয়ন্ত্ৰণ কৰাৰ কৌশল',
    'বোৱেন ফেমিলি চিষ্টেমছৰ অধ্যয়ন: মুখামুখি কথা নপাতি তৃতীয় পক্ষক ব্যৱহাৰ কৰাৰ বিজ্ঞান।',
    'সহজ কথাত: দুজনৰ মাজৰ কথাত তৃতীয় ব্যক্তিক টানি আনি এজনক অকলশৰীয়া কৰা।',
    'ঈৰ্ষা আৰু নিৰাপত্তাহীনতাৰ সৃষ্টি কৰি নিজৰ আধিপত্য বজাই ৰখাৰ কৌশল।',
    'মধ্যভোগীৰ ওপৰত নিৰ্ভৰ নকৰি পোনে পোনে কথা পাতি সত্য জানক।',
    ['কৌশল চিনাক্ত কৰক', 'সরাসৰি কথা পাতক', 'আত্মবিশ্বাস ৰাখক']
  ),
};
