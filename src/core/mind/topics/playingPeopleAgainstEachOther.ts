import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 18: Playing People Against Each Other (Divide and Conquer)
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Christie & Geis (1970): Studies in Machiavellianism (Interpersonal Manipulation & Exploitation of Social Cleavages)
 * - Tajfel & Turner (1979): Social Identity Theory (Manufactured In-Group vs. Out-Group Subgroups)
 * - Salancik & Pfeffer (1974): The Bases and Use of Power in Organizational Decision Making (Information Asymmetry)
 * - Machiavelli (1513): The Prince (Divide et Impera — Divide and Rule)
 */

export const TOPIC_PLAYING_PEOPLE_EN: MindTopicDetail = {
  id: 'playing_people_against_each_other',
  categoryId: 'manipulation_awareness',
  slug: 'playing-people-against-each-other',
  difficulty: 'advanced',
  estimatedReadingMinutes: 8,
  scientificConsensusTier: 'established',
  sortWeight: 18,
  viewCount: 8120,
  shareCount: 710,
  bookmarkCount: 1420,
  title: 'Playing People Against Each Other: The Art of Divide and Rule',
  subtitle: 'Machiavellian politics and manufactured rivalry: how leaders, parents, and partners orchestrate conflict between others to stay indispensable.',
  shortDescription: 'A classic Machiavellian tactic where an individual deliberately creates friction, competition, or distrust between two or more people to maintain control and prevent unified opposition.',
  oneLineExplanation: 'In simple terms: Secretly whispering conflicting stories to two people so they fight each other instead of seeing who is pulling the strings.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'A toxic founder tells the Head of Product that the Engineering Lead thinks their roadmap is amateurish, then walks into the engineering standup and whispers that Product is planning to outsource their jobs. Neither party knows what was whispered. They begin to despise each other, while the founder sits back as the indispensable peacemaker. Playing people against each other is the systematic manufacturing of interpersonal suspicion to prevent alliances that could hold the manipulator accountable.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Described historically as "Divide et Impera" (Divide and Conquer) and empirically validated in Christie & Geis\'s (1970) foundational research on Machiavellianism, this tactic exploits social fault lines. Manipulators with high Machiavellian traits instinctively realize that if their team, children, or peer group unite, their autocratic power, incompetence, or deception will be exposed. By keeping subordinates or peers locked in lateral combat, zero upward scrutiny ever reaches the leader.',
  summary60s: 'In social psychology (Tajfel & Turner, 1979), humans naturally categorize others into in-groups and out-groups. Manipulators exploit this by inventing scarcity—declaring there is only room for one successor, one favorite child, or one promotion. They then drip-feed half-truths, selective compliments, and confidential warnings to both sides ("I\'m telling you this as a friend; watch your back with Rahul"). As lateral trust collapses, both victims seek validation exclusively from the manipulator.',

  quickTakeaways: [
    'The Lateral Conflict Shield: People fighting each other never have the bandwidth or trust to question the person in charge',
    'Manufactured Scarcity: The manipulator frames love, budget, or promotions as a zero-sum deathmatch where only one can survive',
    'Selective Confidentiality: "Don\'t tell Priya I told you this..." is the hallmark warning phrase of manufactured suspicion',
    'The Cross-Check Antidote: When two people independently compare notes in the same room, the manipulator\'s empire collapses instantly',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Status anxiety and paranoia. When people are told that a peer is secretly threatening their livelihood, reputation, or parental approval, evolutionary alarm bells trigger hyper-vigilance, making them misinterpret innocent peer behaviors as malicious proof.',
  evolutionaryMechanism: 'Coalitional vigilance: in ancestral human tribes, betrayal within small hunting bands was fatal. Humans evolved intense sensitivity to signs of peer betrayal, which manipulators trigger through strategic rumors.',

  // SECTION E — HOW DO MANIPULATORS USE IT?
  howItWorks: 'The 4-stage divide-and-conquer playbook: (1) Isolate Communication Channels (ensure parties never talk one-on-one without the manipulator); (2) Plant Asymmetric Whispers (tell Party A that Party B is jealous, tell Party B that Party A is arrogant); (3) Stage Competitive Arenas (pit them against each other publicly for praise); (4) Position as the Benevolent Arbitrator (step in as the wise mediator while secretly fanning the flames).',
  whereYouEncounterIt: 'Multi-sibling families with narcissistic parents, corporate workplaces with insecure middle managers, political committees, and toxic romantic poly-dynamics or friend cliques.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Unified Lateral Team vs. Manipulated Lateral Rivalry',
    description: 'How Machiavellian managers weaponize lateral mistrust.',
    analogySideA: {
      label: 'Unified Team (Direct Trust)',
      detail: 'Engineer and Product Manager talk directly. "Hey, did you say my sprint was too slow?" "No, I said we need more QA support!" They solve it together; manager is held accountable.',
    },
    analogySideB: {
      label: 'Divided Team (Manipulated)',
      detail: 'Manager tells Engineer: "Product wants you fired." Manager tells Product: "Engineer refuses to code your feature." Both rage against each other; manager retains absolute control.',
    },
  },

  researchSummary: 'Empirical research in Machiavellianism (Christie & Geis, 1970) demonstrated that individuals with manipulative traits actively exploit social cleavages and information asymmetry to preserve control. Tajfel & Turner (1979) established that artificial intergroup conflict can be manufactured by framing resources as scarce zero-sum competitions, prompting peers to treat each other as adversaries.',
  limitationsAndControversies: 'Healthy corporate competition that is transparent, meritocratic, and based on objective performance data is NOT divide-and-conquer manipulation. Toxic manufactured rivalry relies on clandestine whispering, fabricated rumors, and deliberate prevention of direct peer communication.',

  howToRecognize: [
    'Third-party confidential whispers: "They didn\'t want me to tell you this, but Rahul said..."',
    'Manufactured zero-sum rewards where collaboration is forbidden or penalized',
    'Strict communication gatekeeping: the manipulator acts visibly anxious when you speak with your supposed rival one-on-one',
    'Shifting favoritism: one week Person A is the golden genius, the next week Person B is favored and Person A is trash',
    'Contradictory feedback given to different team members or siblings on the exact same matter',
  ],

  // SECTION F — REAL-WORLD SCENARIOS
  scenarios: [
    {
      id: 'scen_play_01',
      scenarioType: 'indian_context',
      title: 'Joint Family Bahu Comparison & Corporate Bell-Curve Weaponization',
      vignette: 'In a Bengaluru tech startup, a delivery manager tells two senior engineers in private that management only has budget to retain one of them on the onshore client account. He hints to each that the other is secretly petitioning the director. Meanwhile in the engineers\' joint-family household, a mother-in-law tells the elder bahu that the younger is complaining about her cooking, while telling the younger bahu that the elder is mocking her background. In both environments, direct lateral communication ceases and the manipulator reigns supreme.',
      breakdownAnalysis: 'The manipulator deliberately creates an information bottleneck. By feeding tailored suspicion to both sides, lateral trust is destroyed, leaving the manipulator as the only trusted communication hub.',
      recommendedAction: 'Break the isolation with a direct lateral sync: "Let us sit together in the same room and compare notes openly without middlemen."',
    },
  ],

  examples: [
    {
      id: 'ex_play_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The VP\'s Whisper Campaign',
      description: 'A VP of Engineering tells Team Lead Anand: "Management thinks Lead Rohit is the rising star, but I am fighting for you behind closed doors." The VP then visits Rohit and says: "Anand told the Director that your architecture is unscalable." Anand and Rohit stop sharing code and sabotage each other\'s releases.',
      takeaway: 'Notice how manufactured lateral conflict prevents subordinates from realizing that leadership is technically incompetent.',
    },
  ],

  // SECTION G & H — HOW TO RESPOND
  howToRespond: 'Apply the Direct Lateral Sync: (1) Notice the Hub-and-Spoke structure where all news about your peer flows through one person; (2) Break the isolation by inviting your supposed rival for a direct, private sync; (3) Agree on a "No Gossip" pact where both of you immediately cross-verify third-party claims before reacting; (4) Step off the podium and refuse to compete for manufactured zero-sum approval.',
  psychologicalDefenses: [
    'The Lateral Alliance Rule: In any hierarchy, your peers are your natural allies, not your enemies. Always maintain a direct lateral line of communication.',
    'Epistemic Verification: Never accept second-hand hearsay about what a colleague or family member supposedly said as actionable truth.',
    'Scarcity De-escalation: Recognize that manipulators invent artificial zero-sum contests to keep talented people from joining forces.',
  ],

  commonMisconceptions: [
    {
      misconception: 'Healthy workplace competition is the same as playing people against each other.',
      correction: 'Healthy competition is transparent, merit-based, and public. Playing people against each other relies on clandestine whispering, fabricated rumors, and asymmetric secrecy.',
    },
    {
      misconception: 'If my boss or elder tells me a peer criticized me in confidence, they are just trying to protect me.',
      correction: 'Genuine protectors arrange transparent feedback sessions or encourage direct resolution. Clandestine informants want you angry, insecure, and reliant on their patronage.',
    },
  ],

  reflectionPrompt: 'Have you ever had a manager, elder, or friend tell you "in confidence" that another person was plotting against you? Did you verify it directly before acting?',

  // INTERACTIVE SCENARIOS & QUIZ
  interactiveScenario: {
    id: 'interactive_play_01',
    topicId: 'playing_people_against_each_other',
    scenarioTitle: 'The Secret Whisper at the Water Cooler',
    scenarioDescription: 'Your department director pulls you aside into an empty conference room and speaks in a low, conspiratorial whisper: "Look, don\'t repeat this to anyone, but Vikram told the VP that your product roadmap was amateurish. I defended you, but you need to watch your back around him."',
    vignetteSourceType: 'workplace',
    options: [
      {
        id: 'opt_1',
        text: 'Immediately send an angry, aggressive email to Vikram calling him two-faced and copying the VP.',
        isCorrect: false,
        cognitiveTakeaway: 'This is exactly what the manipulator wants. You erupt in anger, validate the rumor, and deepen the hostility without ever verifying if Vikram actually said it.',
      },
      {
        id: 'opt_2',
        text: 'Walk over to Vikram for a private coffee: "Hey Vikram, there seem to be mixed rumors floating around the roadmap. Let\'s review the timeline together directly so we are completely aligned."',
        isCorrect: true,
        cognitiveTakeaway: 'Optimal move! You eliminate information asymmetry, refuse to accept hearsay as fact, and verify directly with your peer, disarming the manipulator\'s wedge.',
      },
      {
        id: 'opt_3',
        text: 'Praise the director profusely and start secretly digging into Vikram\'s project files to find flaws to report back.',
        isCorrect: false,
        cognitiveTakeaway: 'You have been successfully recruited into a destructive lateral proxy war, increasing your reliance on the toxic director.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'pq_play_1',
      questionType: 'multiple_choice',
      prompt: 'What is the primary psychological objective of a leader who plays two team members against each other?',
      options: [
        { id: 'opt_a', text: 'To inspire peak productivity through healthy meritocratic competition', isCorrect: false },
        { id: 'opt_b', text: 'To manufacture lateral conflict so the two members never unite to question the leader\'s authority or incompetence', isCorrect: true, feedbackText: 'Correct! Machiavellian divide-and-conquer prevents lateral cohesion so targets never question leadership.' },
        { id: 'opt_c', text: 'To train employees in corporate conflict management and negotiation skills', isCorrect: false },
      ],
      cognitiveTakeaway: 'Divide and conquer preserves autocratic authority by exhausting peers in horizontal warfare.',
    },
    {
      id: 'pq_play_2',
      questionType: 'multiple_choice',
      prompt: 'Which of the following phrases is the classic signature of an attempt to divide and conquer?',
      options: [
        { id: 'opt_a', text: '"Let us schedule a joint review meeting with both teams on Monday to discuss the budget openly."', isCorrect: false },
        { id: 'opt_b', text: '"I am speaking to you in strict confidence; do not tell Amit I told you this, but he questioned your dedication."', isCorrect: true, feedbackText: 'Correct! Secret whispers claiming third-party criticisms are designed to plant paranoia and isolate peers.' },
        { id: 'opt_c', text: '"I disagree with your proposal, but let us look at the empirical data together."', isCorrect: false },
      ],
      cognitiveTakeaway: 'Secretive third-party warnings are classic divide-and-conquer weapons.',
    },
    {
      id: 'pq_play_3',
      questionType: 'multiple_choice',
      prompt: 'Why does playing people against each other fail as soon as both targets communicate directly?',
      options: [
        { id: 'opt_a', text: 'Because the manipulator leaves the company immediately', isCorrect: false },
        { id: 'opt_b', text: 'Because direct lateral communication eliminates information asymmetry and exposes contradictory stories', isCorrect: true, feedbackText: 'Correct! Direct cross-verification exposes the false narratives and unites the targets.' },
        { id: 'opt_c', text: 'Because peer communication violates corporate confidentiality policies', isCorrect: false },
      ],
      cognitiveTakeaway: 'Direct verification dismantles information asymmetry.',
    },
  ],

  references: [
    {
      citation: 'Christie, R., & Geis, F. L. (1970). Studies in Machiavellianism. Academic Press.',
      doiOrUrl: 'https://doi.org/10.1016/C2013-0-07705-1',
      relevance: 'Foundational study proving that high-Mach manipulators thrive when direct communication between subordinates is blocked.',
      displayOrder: 1,
    },
    {
      citation: 'Tajfel, H., & Turner, J. C. (1979). An integrative theory of intergroup conflict. The Social Psychology of Intergroup Relations, 33(47), 74.',
      doiOrUrl: 'https://doi.org/10.1037/0022-3514.37.5.819',
      relevance: 'Demonstrates how artificial group divisions and manufactured scarcity trigger lateral hostility.',
      displayOrder: 2,
    },
  ],

  tags: ['Manipulation Awareness', 'Divide and Conquer', 'Machiavellianism', 'Workplace Politics', 'Family Dynamics', 'Manufactured Rivalry'],
  relatedTopics: [
    { topicId: 'triangulation_pattern', slug: 'triangulation-pattern', title: 'Triangulation Pattern', relationshipType: 'amplified_by' },
    { topicId: 'scapegoating_pattern', slug: 'scapegoating-pattern', title: 'Scapegoating Pattern', relationshipType: 'foundational_to' },
    { topicId: 'healthy_boundaries', slug: 'healthy-boundaries', title: 'Healthy Boundaries', relationshipType: 'counteracted_by' },
  ],
  seoTitle: 'Playing People Against Each Other: Divide and Conquer Psychology | Mentalab Mind',
  seoDescription: 'Master the psychology of manufactured rivalry and divide-and-rule tactics. Learn how to counter lateral manipulation with direct verification.',
  canonicalUrl: '/mind/manipulation-awareness/playing-people-against-each-other',
  ogImageUrl: '/images/mind/playing-people-against-each-other.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Manufactured interpersonal rivalry preserves autocratic leverage by exhausting targets in horizontal warfare so they never scrutinize leadership.',
};

export const TOPIC_PLAYING_PEOPLE_HINGLISH: MindTopicDetail = {
  ...TOPIC_PLAYING_PEOPLE_EN,
  title: 'Playing People Against Each Other: Aapas Me Ladwaane Ki Chaal (Divide and Rule)',
  subtitle: 'Machiavellian politics aur chhal-kapat: kaise toxic managers aur rishtedaar do logon ke beech dushmani karwa kar apna control banate hain.',
  shortDescription: 'Do ya do se zyada logon ke beech jaanboojh kar aapas me misunderstanding aur competition paida karna taaki wo aapas me ladte rahein aur manipulator unhe control kare.',
  oneLineExplanation: 'Simple shabdon me: Do logon ko secretly alag-alag baatein bolkar aapas me ladwaana taaki koi unke apne jhooth aur galtiyon par dhyan na de sake.',
  summary30s: 'Ek manager Team Lead A ko bolta hai ki Lead B uski burai kar raha tha, aur Lead B ko bolta hai ki Lead A uski job khana chahta hai. Dono aapas me baat nahi karte, ek doosre se nafrat karne lagte hain, aur manager beech me "hero" aur "peacemaker" ban kar baith jata hai. Yeh classic Divide and Rule strategy hai.',
  coreConcept: 'Christie & Geis (1970) ke Machiavellianism studies ke mutabik, manipulators ko sabse bada darr hota hai ki agar unke neeche ke log ya parivaar ke sadasya aapas me mil gaye, toh unka jhooth aur incompetence pakda jayega. Isliye wo aapas me ladai karwate rehte hain taaki unpar koi ungli na utha sake.',
  quickTakeaways: [
    'Divide and Rule ka fanda: Jab tak do log aapas me ladenge, wo kabhi upar baithe asli gunehgaar par dhyan nahi de payenge',
    'Secret whispering: "Kissi ko batana mat, par usne tumhare baare me yeh kaha..." yeh divide and rule ka sabse bada red flag hai',
    'Direct verification rule: Middleman ko bypass karke direct us insaan se baat karo jiske baare me afwah failayi gayi hai',
    'Aapsi gathbandhan: Apne peers ko competitor nahi, apna natural ally samjho',
  ],
  warningSigns: [
    'Kaan bharna: Secretly aakar doosre co-worker ya sibling ki burai karna',
    'Fake competition: Boss ka kehna ki "sirf ek hi insaan ko promotion milega, ab dekh lo"',
    'Aamne-saamne baat na hone dena: Jab bhi dono ek sath baithte hain, manipulator bechain ho jata hai',
    'Kabhi iski tareef, kabhi uski tareef karke jalan (jealousy) paida karna',
  ],
};

function createLocalizedPlayingPeopleRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  whyItHappens: string,
  howToRespond: string,
  tags: string[]
): MindTopicDetail {
  return {
    ...TOPIC_PLAYING_PEOPLE_EN,
    title,
    subtitle,
    oneLineExplanation: oneLine,
    whyItHappens,
    howToRespond,
    tags,
  };
}

export const TOPIC_PLAYING_PEOPLE_AGAINST_EACH_OTHER: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_PLAYING_PEOPLE_EN,
  hinglish: TOPIC_PLAYING_PEOPLE_HINGLISH,
  hi: createLocalizedPlayingPeopleRecord(
    'hi',
    'लोगों को आपस में लड़वाना: फूट डालो और राज करो की राजनीति (Divide and Rule)',
    'मैकियावेलियन रणनीति: कैसे एक व्यक्ति दूसरों के बीच अविश्वास और प्रतिद्वंद्विता पैदा करके अपना नियंत्रण बनाए रखता है।',
    'सरल शब्दों में: दो लोगों के बीच गलतफहमियां पैदा करके उन्हें आपस में भिड़ाना ताकि असली साजिशकर्ता पर किसी का ध्यान न जाए।',
    'अपनी सत्ता, नियंत्रण और गलतियों को छुपाने के लिए लोगों को आपस में लड़ाकर कमजोर करना।',
    'बिचौलियों की बातों पर विश्वास न करके सीधे संबंधित व्यक्ति से आमने-सामने बात करें और गलतफहमी दूर करें।',
    ['फूट डालो और राज करो', 'मैकियावेलियन राजनीति', 'सच्चाई की पुष्टि']
  ),
  gu: createLocalizedPlayingPeopleRecord(
    'gu',
    'લોકોને અંદરોઅંદર લડાવવા: ભાગલા પાડો અને રાજ કરોની કુટિલ નીતિ',
    'મેકિયાવેલિયન રાજકારણ: બે વ્યક્તિઓ વચ્ચે ગેરસમજ અને સ્પર્ધા ઊભી કરીને પોતાનો કાબૂ જાળવવો.',
    'સરળ શબ્દોમાં: બે વ્યક્તિઓને એકબીજા સામે ભડકાવીને પોતાનું વર્ચસ્વ કાયમ રાખવાની ચાલબાજી.',
    'પોતાની અસમર્થતા અને ખામીઓ છુપાવવા માટે સહકર્મચારીઓ કે ભાઈઓને અંદરોઅંદર લડાવવામાં આવે છે.',
    'ત્રીજી વ્યક્તિની કાનભંભેરણી પર ધ્યાન આપ્યા વગર સીધી જ વાતચીત કરીને સત્ય જાણી લો.',
    ['ભાગલા પાડો અને રાજ કરો', 'ગેરસમજ દૂર કરો', 'સીધો સંવાદ']
  ),
  mr: createLocalizedPlayingPeopleRecord(
    'mr',
    'लोकांमध्ये भांडणे लावून देणे: फोडा आणि झोडा नीती (Divide and Rule)',
    'मॅकियेव्हेलियन रणनीती: लोकांमध्ये आपापसात संशय निर्माण करून स्वतःचे नियंत्रण ठेवण्याची चाल.',
    'सोप्या भाषेत: दोन व्यक्तींमध्ये जाणीवपूर्वक अविश्वास निर्माण करून त्यांना एकमेकांशी भिडवणे.',
    'स्वतःच्या चुका आणि कमकुवतपणा लपवण्यासाठी इतरांमध्ये दुही माजवून स्वतःची खुर्ची वाचवणे.',
    'मध्यस्थांच्या खोट्या गोष्टींवर विश्वास न ठेवता थेट संबंधित व्यक्तीशी चर्चा करून संशय संपवा.',
    ['फोडा आणि झोडा', 'संवाद साधा', 'एकजूट राहा']
  ),
  bn: createLocalizedPlayingPeopleRecord(
    'bn',
    'মানুষকে পরস্পরের বিরুদ্ধে লড়িয়ে দেওয়া: বিভাজন ও শাসনের কুচক্র',
    'ম্যাকিয়াভেলিয়ান রাজনীতি: অন্যের মধ্যে শত্রুতা ও দ্বন্দ্ব তৈরি করে নিজের কর্তৃত্ব বজায় রাখার কৌশল।',
    'সহজ কথায়: দুজনের মধ্যে কানভাঙানি দিয়ে বিবাদ তৈরি করা যাতে মূল ষড়যন্ত্রকারীর ওপর কেউ আঙুল না তোলে।',
    'নিজের দুর্বলতা ও ক্ষমতা টিকিয়ে রাখতে অন্যদের মধ্যে ভুল বোঝাবুঝি সৃষ্টি করে রাখা হয়।',
    'তৃতীয় ব্যক্তির কথায় কান না দিয়ে সরাসরি অপর পক্ষের সাথে খোলামেলা আলোচনা করে সত্য জানুন।',
    ['বিভাজন নীতি', 'সরাসরি আলোচনা', 'ঐক্য বজায় রাখুন']
  ),
  ta: createLocalizedPlayingPeopleRecord(
    'ta',
    'மனிதர்களை தங்களுக்குள் மோதவிடுதல்: பிரித்தாளும் சூழ்ச்சி (Divide and Rule)',
    'மேக்கியாவெல்லிய தந்திரம்: மற்றவர்களிடையே பகையை வளர்த்து தனது அதிகாரத்தை நிலைநிறுத்தும் சூழ்ச்சி.',
    'எளிய முறையில்: இருவருக்கு இடையே தவறான தகவல்களைப் பரப்பி மோதலை உருவாக்கி தனது ஆதிக்கத்தைச் செலுத்துவது.',
    'தனது தவறுகளும் இயலாமையும் வெளிப்படாமல் இருக்க பிறரை தங்களுக்குள் சண்டையிட வைக்கும் உத்தி.',
    'மூன்றாம் நபரின் புறம்பேசுதலை நம்பாமல் நேரடியாக பேசி சந்தேகங்களை தீர்த்துக் கொள்ளுங்கள்.',
    ['பிரித்தாளும் சூழ்ச்சி', 'நேரடிப் பேச்சு', 'ஒற்றுமை']
  ),
  te: createLocalizedPlayingPeopleRecord(
    'te',
    'వ్యక్తులను ఒకరిపై ఒకరికి ఉసిగొల్పడం: విభజించి పాలించు కుతంత్రం',
    'మాకియవెల్లియన్ రాజకీయాలు: ఇతరుల మధ్య శత్రుత్వాన్ని పెంచి తమ ఆధిపత్యాన్ని కాపాడుకునే కుట్ర.',
    'సరళంగా చెప్పాలంటే: ఇద్దరి మధ్య అబద్ధపు మాటలు చెప్పి కలహాలు పెట్టి తమ పబ్బం గడుపుకోవడం.',
    'తమ బలహీనతలు బయటపడకుండా ఉండేందుకు ఇతరుల మధ్య అనుమానాలను రేకెత్తిస్తారు.',
    'మధ్యవర్తుల మాటలు నమ్మకుండా నేరుగా సంబంధిత వ్యక్తితో మాట్లాడి సమస్యను పరిష్కరించుకోండి.',
    ['విభజించి పాలించు', 'నేరుగా మాట్లాడండి', 'ఐక్యత']
  ),
  kn: createLocalizedPlayingPeopleRecord(
    'kn',
    'ಜನರನ್ನು ಪರಸ್ಪರ ಎತ್ತಿಕಟ್ಟುವುದು: ಒಡೆದು ಆಳುವ ಕುತಂತ್ರ (Divide and Rule)',
    'ಮ್ಯಾಕಿಯಾವೆಲಿಯನ್ ರಾಜಕೀಯ: ಇತರರ ನಡುವೆ ದ್ವೇಷ ಮತ್ತು ಪೈಪೋಟಿ ಸೃಷ್ಟಿಸಿ ತನ್ನ ಹಿಡಿತ ಸಾಧಿಸುವ ತಂತ್ರ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಇಬ್ಬರ ನಡುವೆ ಸುಳ್ಳು ಮಾತುಗಳನ್ನು ಹರಡಿ ಜಗಳ ಹಚ್ಚಿ ತಾನು ಲಾಭ ಪಡೆಯುವುದು.',
    'ತನ್ನ ಅಸಮರ್ಥತೆ ಬಯಲಾಗದಂತೆ ತಡೆಯಲು ಇತರರಲ್ಲಿ ಒಡಕು ಮೂಡಿಸಿ ತನ್ನ ಪ್ರಭಾವವನ್ನು ಉಳಿಸಿಕೊಳ್ಳುವುದು.',
    'ಮೂರನೆಯವರ ಮಾತನ್ನು ನಂಬದೆ ನೇರವಾಗಿ ಮುಖಾಮುಖಿ ಮಾತನಾಡಿ ಗೊಂದಲಗಳನ್ನು ಪರಿಹರಿಸಿಕೊಳ್ಳಿ.',
    ['ಒಡೆದು ಆಳು', 'ನೇರ ಸಂವಹನ', 'ಒಗ್ಗಟ್ಟು']
  ),
  ml: createLocalizedPlayingPeopleRecord(
    'ml',
    'ആളുകളെ പരസ്പരം തമ്മിലടിപ്പിക്കുക: ഭിന്നിപ്പിച്ചു ഭരിക്കൽ തന്ത്രം',
    'മാക്കിയവെല്ലിയൻ കുതന്ത്രം: മറ്റുള്ളവർക്കിടയിൽ ശത്രുതയുണ്ടാക്കി സ്വന്തം നിയന്ത്രണം നിലനിർത്തുക.',
    'ലളിതമായി പറഞ്ഞാൽ: രണ്ടുപേർക്കിടയിൽ തെറ്റിദ്ധാരണകൾ ഉണ്ടാക്കി തമ്മിലടിപ്പിച്ച് ലാഭം കൊയ്യുക.',
    'സ്വന്തം വീഴ്ചകൾ മറയ്ക്കാനും ആധിപത്യം നിലനിർത്താനും ആളുകളെ ഭിന്നിപ്പിച്ചു നിർത്തുന്നു.',
    'ഇടനിലക്കാരുടെ നുണകൾ വിശ്വസിക്കാതെ നേരിട്ട് സംസാരിച്ച് തെറ്റിദ്ധാരണകൾ തിരുത്തുക.',
    ['ഭിന്നിപ്പിച്ചു ഭരിക്കൽ', 'നേരിട്ട് സംസാരിക്കുക', 'ഐക്യം']
  ),
  pa: createLocalizedPlayingPeopleRecord(
    'pa',
    'ਲੋਕਾਂ ਨੂੰ ਆਪਸ ਵਿੱਚ ਲੜਾਉਣਾ: ਪਾੜੋ ਅਤੇ ਰਾਜ ਕਰੋ ਦੀ ਚਾਲ (Divide and Rule)',
    'ਮੈਕਿਆਵੇਲੀਅਨ ਚਾਲਬਾਜ਼ੀ: ਦੂਜਿਆਂ ਵਿੱਚ ਦੁਸ਼ਮਣੀ ਪੈਦਾ ਕਰਕੇ ਆਪਣਾ ਦਬਦਬਾ ਬਣਾਈ ਰੱਖਣ ਦਾ ਢੰਗ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਦੋ ਲੋਕਾਂ ਵਿੱਚ ਗਲਤਫਹਿਮੀਆਂ ਪੈਦਾ ਕਰਕੇ ਆਪਸ ਵਿੱਚ ਭਿੜਾਉਣਾ ਤਾਂ ਜੋ ਅਸਲੀ ਚਾਲਬਾਜ਼ ਬਚਿਆ ਰਹੇ।',
    'ਆਪਣੀਆਂ ਕਮਜ਼ੋਰੀਆਂ ਛੁਪਾਉਣ ਅਤੇ ਕੰਟਰੋਲ ਰੱਖਣ ਲਈ ਦੂਜਿਆਂ ਵਿੱਚ ਫੁੱਟ ਪਾਈ ਜਾਂਦੀ ਹੈ।',
    'ਕਿਸੇ ਤੀਜੇ ਦੀ ਗੱਲ ਸੁਣਨ ਦੀ ਬਜਾਏ ਆਹਮੋ-ਸਾਹਮਣੇ ਬੈਠ ਕੇ ਸੱਚ ਜਾਣੋ ਅਤੇ ਏਕਤਾ ਬਣਾਓ।',
    ['ਪਾੜੋ ਤੇ ਰਾਜ ਕਰੋ', 'ਸਿੱਧੀ ਗੱਲਬਾਤ', 'ਏਕਤਾ']
  ),
  ur: createLocalizedPlayingPeopleRecord(
    'ur',
    'لوگوں کو آپس میں لڑوانا: لڑاؤ اور حکومت کرو کی چال (Divide and Rule)',
    'میکیاولیائی سیاست: دوسروں کے درمیان دشمنی اور غلط فہمیاں پیدا کر کے اپنا تسلط برقرار رکھنے کا فریب۔',
    'آسان الفاظ میں: دو افراد کے درمیان سازش کر کے لڑائی کروانا تاکہ کوئی اصل حکمران پر انگلی نہ اٹھا سکے۔',
    'اپنی نااہلی اور گناہوں کو چھپانے کے لیے دوسروں کو آپس میں لڑا کر کمزور کرنا۔',
    'تیسرے شخص کی لگائی بجھائی پر دھیان دینے کے بجائے براہ راست متعلقہ فرد سے بات کریں۔',
    ['لڑاؤ اور حکومت کرو', 'براہ راست بات کریں', 'اتحاد']
  ),
  or: createLocalizedPlayingPeopleRecord(
    'or',
    'ଲୋକଙ୍କୁ ପରସ୍ପର ବିରୋଧରେ ଲଢ଼ାଇବା: ଭାଗ କର ଏବଂ ଶାସନ କର (Divide and Rule)',
    'ମାକିଆଭେଲିୟାନ୍ କୂଟନୀତି: ଅନ୍ୟମାନଙ୍କ ମଧ୍ୟରେ ଶତ୍ରୁତା ସୃଷ୍ଟି କରି ନିଜର ପ୍ରଭାବ ବଜାୟ ରଖିବା।',
    'ସହଜ ଭାଷାରେ: ଦୁଇଜଣଙ୍କ ଭିତରେ ମିଛ କଥା କହି କଳି ଲଗାଇବା ଯାହାଦ୍ୱାରା ନିଜର ସ୍ୱାର୍ଥ ସାଧନ ହୋଇପାରିବ।',
    'ନିଜର ଦୋଷ ଦୁର୍ବଳତା ଲୁଚାଇବା ପାଇଁ ଲୋକଙ୍କୁ ଆପୋଷ ଲଢ଼େଇରେ ବ୍ୟସ୍ତ ରଖାଯାଏ।',
    'ତୃତୀୟ ବ୍ୟକ୍ତିଙ୍କ କାନକୁହା କଥାରେ ନ ଭାସି ସିଧାସଳଖ ଆଲୋଚନା କରି ସତ୍ୟ ଜାଣନ୍ତୁ।',
    ['ଭାଗ କର ଶାସନ କର', 'ସିଧାସଳଖ କଥା', 'ଏକତା']
  ),
  as: createLocalizedPlayingPeopleRecord(
    'as',
    'মানুহক ইজনে সিজনৰ বিৰুদ্ধে লগোৱা: বিভাজন আৰু শাসনৰ কূটনীতি (Divide and Rule)',
    'মেকিয়াভেলিয়ান কৌশল: আনৰ মাজত শত্ৰুতা আৰু ভুল বুজাবুজি সৃষ্টি কৰি নিজৰ আধিপত্য বজাই ৰখা।',
    'সহজ কথাত: দুজনৰ মাজত সংঘাত সৃষ্টি কৰি নিজে লাভৱান হোৱাৰ কুৎসিত কৌশল।',
    'নিজৰ দুৰ্বলতা ঢাকিবলৈ আৰু ক্ষমতা বজাই ৰাখিবলৈ মানুহৰ মাজত বিভেদৰ বীজ ৰোপণ কৰা হয়।',
    'তৃতীয় পক্ষৰ কথাত ভোল নগৈ পোনপটীয়াকৈ আলোচনা কৰি ভুল বুজাবুজি দূৰ কৰক।',
    ['বিভাজন আৰু শাসন', 'পোনপটীয়া আলোচনা', 'একতা']
  ),
};
