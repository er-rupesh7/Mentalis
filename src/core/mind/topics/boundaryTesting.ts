import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 19: Boundary Testing
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Cloud, H., & Townsend, J. (1992): Boundaries: When to Say Yes, How to Say No to Take Control of Your Life
 * - Freedman, J. L., & Fraser, S. C. (1966): Compliance Without Salience: The Foot-in-the-Door Technique
 * - Simon, G. K. (2010): In Sheep's Clothing: Understanding and Dealing with Manipulative People
 * - Linehan, M. M. (1993): Cognitive-Behavioral Treatment of Borderline Personality Disorder (DEAR MAN Assertiveness)
 */

export const TOPIC_BOUNDARY_TESTING_EN: MindTopicDetail = {
  id: 'boundary_testing',
  categoryId: 'manipulation_awareness',
  slug: 'boundary-testing',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 7,
  scientificConsensusTier: 'established',
  sortWeight: 19,
  viewCount: 8460,
  shareCount: 740,
  bookmarkCount: 1530,
  title: 'Boundary Testing: The Subtle Erosion of Personal Limits',
  subtitle: 'The boiling frog dynamic and compliance creep: how manipulators push small limits to prepare you for massive transgressions.',
  shortDescription: 'The calculated practice of committing minor violations of someone\'s boundaries to probe their resistance, conditioning them to tolerate increasing intrusion over time.',
  oneLineExplanation: 'In simple terms: Pushing past a small "no" to see if you will fight back, softening your defenses before asking for something much bigger.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'Predatory individuals and manipulative partners rarely begin with severe abuse or outrageous demands on day one. Instead, they begin with micro-transgressions: arriving 25 minutes late without an apology, borrowing a small item without asking, texting work tasks at 11:30 PM on a Sunday, or teasing you about a sensitive insecurity under the banner of "just joking." If you let the small transgression slide without pushback, the manipulator registers that your perimeter is porous—and moves the boundary forward.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Clinically conceptualized by Dr. Henry Cloud & Dr. John Townsend (1992) and behaviorally demonstrated in Freedman & Fraser\'s (1966) "Foot-in-the-Door" research, boundaries define where one individual ends and another begins. A manipulator uses boundary testing as a reconnaissance probe. Dr. George Simon (2010) notes that covert aggressors do not violate boundaries out of carelessness or ignorance; they intentionally encroach upon lines to gauge how easily the victim can be coerced into abandoning self-protection for the sake of politeness.',
  summary60s: 'This dynamic is frequently illustrated by the "Boiling Frog" metaphor. If a frog is dropped into boiling water, it jumps out immediately. But if placed in lukewarm water that is heated degree by degree, it stays until it boils. When a colleague or partner begins with tiny, subtle oversteps, your rational brain rationalizes: "It\'s too small to make a fuss about; I don\'t want to seem dramatic." Over months, your baseline of tolerated disrespect shifts until severe disrespect feels normal.',

  quickTakeaways: [
    'The Reconnaissance Probe: Micro-violations are not accidents; they are tests to see how comfortable you are enforcing consequences',
    'The "Just Kidding" Cover: Teasing and poking at sensitive topics allows the tester to retract if you push back or escalate if you laugh nervously',
    'Politeness Traps: Social conditioning trains people (especially women and junior employees) to prioritize being agreeable over being safe',
    'Consequences Over Reminders: A boundary without an enforced consequence is merely a polite suggestion that manipulators ignore',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Conflict avoidance and socialization into agreeable compliance. Humans dread social awkwardness. When someone tests a boundary, asserting it requires enduring immediate interpersonal friction, so victims choose temporary peace at the cost of long-term autonomy.',
  evolutionaryMechanism: 'Dominance hierarchy establishment: across mammalian social groups, dominant individuals systematically test subordinate physical and territorial limits to establish dominance without risking full-scale physical combat.',

  // SECTION E — HOW DO MANIPULATORS USE IT?
  howItWorks: 'The 4-stage boundary erosion sequence: (1) The Micro-Push (small encroachment: arriving unannounced, asking intrusive personal questions); (2) The Reaction Assessment (observes whether you object firmly, smile nervously, or apologize); (3) The Justification Defense (if challenged, frames you as "too sensitive" or "uptight"); (4) The Perimeter Expansion (repeats the transgression at a higher intensity until the old boundary is erased).',
  whereYouEncounterIt: 'Early dating relationships, corporate managers creeping into weekend personal hours, in-laws asserting authority over childcare, and predatory sales reps.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Healthy Boundary Negotiation vs. Manipulative Boundary Testing',
    description: 'How respectful people respond to a "No" compared to boundary testers.',
    analogySideA: {
      label: 'Healthy Respect for Boundaries',
      detail: '"I cannot work this Sunday." -> "Understood, thank you for letting me know. We will handle it on Monday." Line is respected permanently.',
    },
    analogySideB: {
      label: 'Manipulative Boundary Testing',
      detail: '"I cannot work this Sunday." -> "Come on, are you not a team player? It will only take 10 minutes!" Pushes, guilts, and tests again next weekend.',
    },
  },

  researchSummary: 'Freedman & Fraser (1966) empirically proved the "Foot-in-the-Door" dynamic: complying with an initial trivial request increases compliance with much larger intrusions by over 100%. Cloud & Townsend (1992) and Simon (2010) clinically demonstrated that manipulative actors actively use ambiguous social oversteps to map out which individuals lack defensive boundary enforcement.',
  limitationsAndControversies: 'Accidental misunderstandings and cultural differences in personal space do occur. An overstep is an honest mistake if the person apologizes and permanently alters their behavior once informed; it is manipulative boundary testing if they repeatedly push the exact same limit while labeling your discomfort as "oversensitivity."',

  howToRecognize: [
    'The "Just Joking" defense whenever you show discomfort at personal jabs or insults',
    'Repeated minor time infringements: consistently arriving late, overstaying visits, or calling during designated focus hours',
    'Borrowing possessions or money without prior permission: "I knew you wouldn\'t mind!"',
    'The "Slippery Slope" request: asking for 5 minutes, then taking 45 minutes; asking for a small favor, then multiplying demands',
    'Somatic internal alarms: a feeling of irritation, dread in the stomach, or jaw clenching when their message pops up',
  ],

  // SECTION F — REAL-WORLD SCENARIOS
  scenarios: [
    {
      id: 'scen_bound_01',
      scenarioType: 'indian_context',
      title: 'The Unannounced Joint Family Inspection & Weekend Overtime Creep',
      vignette: 'In Pune, Sunita sets a firm rule with her in-laws that visits require a quick heads-up so she can prepare. Her mother-in-law begins dropping by unannounced "just to drop off fresh laddoos." When Sunita opens the door in work clothes during a Zoom call, the mother-in-law walks in, reorganizes the kitchen shelves, and invites distant cousins over for dinner. Concurrently at her IT job, her project manager messages her on Saturday afternoon: "Just 2 minutes, check this spreadsheet." When Sunita answers, Sunday calls begin. Both the relative and manager use warmth and urgency to dismantle her privacy.',
      breakdownAnalysis: 'Both situations represent classic compliance creep. The boundary violator masks the initial intrusion in love ("just dropping laddoos") or urgency ("just 2 minutes"), conditioning Sunita to surrender autonomy to avoid appearing disrespectful or uncooperative.',
      recommendedAction: 'Enforce the consequence immediately: "Maa ji, thank you for the laddoos, but I am in a client meeting right now. I cannot host guests today; let us meet on Sunday." With the manager: put Slack on Do Not Disturb until Monday morning.',
    },
  ],

  examples: [
    {
      id: 'ex_bound_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The "Just 5 Minutes" Saturday Call',
      description: 'A manager calls on Saturday morning for "a quick question." When you answer, next weekend brings an hour-long sprint review. By month three, weekend availability is treated as mandatory.',
      takeaway: 'Notice how letting the first micro-violation slide resets your baseline of tolerated intrusion.',
    },
  ],

  // SECTION G & H — HOW TO RESPOND
  howToRespond: 'Apply Consequence-Driven Boundary Reinforcement: (1) Notice somatic cues (resentment and dread mean a boundary is being violated); (2) Halt compliance creep at step 1 with calm clarity; (3) State limits as declarative statements, not questions ("I do not take work calls after 8 PM"); (4) Enforce consequences without debating (silence the phone, close the door).',
  psychologicalDefenses: [
    'The Cloud & Townsend Rule: Boundaries are not walls to keep everyone out; they are fences with gates to let the healthy in and keep the toxic out.',
    'Tolerating Short-term Discomfort: Accept that enforcing boundaries creates immediate social awkwardness. That awkwardness is vastly cheaper than years of chronic resentment.',
    'Non-Defensive Refusal: State your boundary clearly without over-explaining, apologizing, or justifying (avoid the JADE trap: Justify, Argue, Defend, Explain).',
  ],

  commonMisconceptions: [
    {
      misconception: 'If I ignore a small boundary violation, the person will realize I disliked it and stop naturally.',
      correction: 'Boundary testers never interpret silence as disapproval; they interpret silence as consent and permission to push further.',
    },
    {
      misconception: 'Setting firm boundaries makes me selfish, unloving, or a bad team player.',
      correction: 'Boundaries preserve relationships. Without boundaries, resentment builds until the relationship explodes in hatred.',
    },
  ],

  reflectionPrompt: 'Can you recall a relationship where small oversteps eventually led to massive disrespect? Where was the first moment your gut warned you?',

  // INTERACTIVE SCENARIOS & QUIZ
  interactiveScenario: {
    id: 'interactive_bound_01',
    topicId: 'boundary_testing',
    scenarioTitle: 'The Late-Night Urgent Slack Ping',
    scenarioDescription: 'It is 10:15 PM on a Wednesday. You are getting ready for sleep after an exhausting 9-hour workday. Your phone buzzes with a high-priority Slack message from your manager: "Hey, really sorry to bother you so late, but could you just quickly look over slide 8 on the pitch deck and reply with thoughts? Should only take 2 minutes!"',
    vignetteSourceType: 'workplace',
    options: [
      {
        id: 'opt_1',
        text: 'Open your laptop, spend 35 minutes editing the slide, and reply with an anxious apology for taking so long.',
        isCorrect: false,
        cognitiveTakeaway: 'This confirms to the manager that your personal sleep boundary is nonexistent and can be violated anytime.',
      },
      {
        id: 'opt_2',
        text: 'Leave the message unread, put your phone on sleep focus, and respond at 9:02 AM tomorrow: "Good morning! Looking at slide 8 now and will send my feedback before standup."',
        isCorrect: true,
        cognitiveTakeaway: 'Optimal move! You protect your rest, establish your working hours non-defensively without starting a dramatic fight, and model professional reliability.',
      },
      {
        id: 'opt_3',
        text: 'Reply immediately with an angry rant: "Why are you harassing me at night? This company has zero work-life balance!"',
        isCorrect: false,
        cognitiveTakeaway: 'An explosive emotional reaction gives the manager leverage to label you "unprofessional," shifting focus away from their boundary breach.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'pq_bound_1',
      questionType: 'multiple_choice',
      prompt: 'What is the underlying purpose of "boundary testing" by a manipulative individual?',
      options: [
        { id: 'opt_a', text: 'To verify whether the other person understands corporate etiquette', isCorrect: false },
        { id: 'opt_b', text: 'To probe personal limits through small violations and gauge how easily the person can be coerced into compliance', isCorrect: true, feedbackText: 'Correct! Boundary testing acts as a reconnaissance probe to test resistance before escalating demands.' },
        { id: 'opt_c', text: 'To teach the other person how to be more resilient under stress', isCorrect: false },
      ],
      cognitiveTakeaway: 'Boundary testing probes resistance before escalating demands.',
    },
    {
      id: 'pq_bound_2',
      questionType: 'multiple_choice',
      prompt: 'Which social psychology experiment explains why letting small violations pass makes it harder to resist larger future demands?',
      options: [
        { id: 'opt_a', text: 'The Asch Conformity Experiment (1951)', isCorrect: false },
        { id: 'opt_b', text: 'Freedman & Fraser\'s "Foot-in-the-Door" Technique (1966)', isCorrect: true, feedbackText: 'Correct! Freedman & Fraser proved that agreeing to an initial small request doubles compliance with subsequent larger requests.' },
        { id: 'opt_c', text: 'The Stanford Prison Experiment (1971)', isCorrect: false },
      ],
      cognitiveTakeaway: 'Foot-in-the-door compliance creep conditions people to tolerate increasing intrusion.',
    },
    {
      id: 'pq_bound_3',
      questionType: 'multiple_choice',
      prompt: 'What distinguishes an effective personal boundary from a useless wish?',
      options: [
        { id: 'opt_a', text: 'A boundary is accompanied by an enforced consequence when violated, whereas a wish has no consequences', isCorrect: true, feedbackText: 'Correct! As Cloud & Townsend emphasized, a boundary without an enforced consequence is merely a suggestion.' },
        { id: 'opt_b', text: 'A boundary must be approved by a lawyer or human resources manager', isCorrect: false },
        { id: 'opt_c', text: 'A boundary must be shouted aggressively to be taken seriously', isCorrect: false },
      ],
      cognitiveTakeaway: 'Boundaries require enforced consequences to function.',
    },
  ],

  references: [
    {
      citation: 'Freedman, J. L., & Fraser, S. C. (1966). Compliance without salience: The foot-in-the-door technique. Journal of Personality and Social Psychology, 4(2), 195–202.',
      doiOrUrl: 'https://doi.org/10.1037/h0023552',
      relevance: 'Demonstrates how minor initial concessions create psychological commitment to accept escalating future demands.',
      displayOrder: 1,
    },
    {
      citation: 'Cloud, H., & Townsend, J. (1992). Boundaries: When to say yes, how to say no to take control of your life. Zondervan.',
      doiOrUrl: 'https://doi.org/10.1037/e527632012-001',
      relevance: 'Clinical foundation of personal boundaries and the necessity of enforcing relational consequences.',
      displayOrder: 2,
    },
  ],

  tags: ['Manipulation Awareness', 'Boundaries', 'Boundary Testing', 'Compliance Creep', 'Assertiveness', 'Workplace Limits'],
  relatedTopics: [
    { topicId: 'healthy_boundaries', slug: 'healthy-boundaries', title: 'Healthy Boundaries', relationshipType: 'counteracted_by' },
    { topicId: 'intermittent_reinforcement', slug: 'intermittent-reinforcement', title: 'Intermittent Reinforcement', relationshipType: 'amplified_by' },
    { topicId: 'intimidation', slug: 'intimidation', title: 'Intimidation Dynamics', relationshipType: 'foundational_to' },
  ],
  seoTitle: 'Boundary Testing: Recognizing Compliance Creep & Limits | Mentalab Mind',
  seoDescription: 'Master the psychology of boundary testing and the boiling frog effect. Learn how to identify micro-transgressions and enforce clear personal boundaries.',
  canonicalUrl: '/mind/manipulation-awareness/boundary-testing',
  ogImageUrl: '/images/mind/boundary-testing.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Boundary testing is covert reconnaissance where micro-violations probe resistance, shifting the baseline of tolerated disrespect over time.',
};

export const TOPIC_BOUNDARY_TESTING_HINGLISH: MindTopicDetail = {
  ...TOPIC_BOUNDARY_TESTING_EN,
  title: 'Boundary Testing: Dheere-Dheere Hadhein Paar Karne Ka Khel',
  subtitle: 'Boiling frog effect aur compliance creep: kaise manipulators choti-choti hadhein tod kar aapko badi badtameezi ke liye tayyar karte hain.',
  shortDescription: 'Ek aisi tactic jahan manipulator pehle choti-choti boundaries tod kar dekhta hai ki aap awaaz uthate hain ya chupchaap seh lete hain.',
  oneLineExplanation: 'Simple shabdon me: Aapki hadh ko thoda sa push karke test karna taaki dekhein ki aap react karte hain ya chup rehte hain, aur fir aage chalkar bada nuksaan pahunchana.',
  summary30s: 'Koi bhi manipulator pehle din hi badi badtameezi ya abusive demand nahi karta. Wo pehle choti cheezon se shuru karta hai: 15 minute late aana bina maafi maange, raat ko 11 baje faltu work call karna, ya doston ke saamne mazak udate hue kehna "Arre main toh bas joke kar raha tha!" Agar aap chup rehte hain, toh unhe pata chal jata hai ki aapki boundary kamzor hai.',
  coreConcept: 'Cloud & Townsend (1992) ke shodh ke mutabik, boundaries ka matlab hota hai ki aap kahan khatam hote hain aur doosra shuru hota hai. Freedman & Fraser (1966) ke "Foot-in-the-Door" experiment ne dikhaya ki jab hum pehli choti si demand maan lete hain, toh humara dimaag aage chalkar badi demand ko reject nahi kar pata.',
  quickTakeaways: [
    'Choti testing se shuruwat: Micro-violations galti se nahi hoti, wo test karne ke liye hoti hain ki aap bolte hain ya nahi',
    '"Bas joke tha" ka bahaana: Personal boundaries ko test karne ke baad back-off karne ka sabse purana tareeka',
    'Consequence ke bina boundary bekaar hai: Agar boundary tootne par koi consequence nahi hai, toh wo sirf ek advice ban kar reh jati hai',
    'Apne dimaag ki suno: Agar kisi ki baat se pet me bechaini ya gussa aaye, toh samajh jao boundary violate ho rahi hai',
  ],
  warningSigns: [
    'Har baar late aana aur aasan bahaane banana',
    'Aapki personal baaton par "mazak" banakar bolna "tum kitne sensitive ho"',
    'Aapka phone ya personal cheezein bina pooche utha lena',
    'Chutti ke din ya aadhi raat ko kaam ka message bhej kar reply expect karna',
  ],
};

function createLocalizedBoundaryRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  whyItHappens: string,
  howToRespond: string,
  tags: string[]
): MindTopicDetail {
  return {
    ...TOPIC_BOUNDARY_TESTING_EN,
    title,
    subtitle,
    oneLineExplanation: oneLine,
    whyItHappens,
    howToRespond,
    tags,
  };
}

export const TOPIC_BOUNDARY_TESTING: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_BOUNDARY_TESTING_EN,
  hinglish: TOPIC_BOUNDARY_TESTING_HINGLISH,
  hi: createLocalizedBoundaryRecord(
    'hi',
    'सीमाओं का परीक्षण: निजी दायरों का क्रमिक हनन (Boundary Testing)',
    'क्लाउड और टाउनसेंड का सिद्धांत: कैसे छोटी-छोटी सीमाओं का उल्लंघन करके बड़े अनुचित व्यवहार की जमीन तैयार की जाती है।',
    'सरल शब्दों में: यह परखने के लिए छोटी-छोटी सीमाएं तोड़ना कि आप विरोध करते हैं या चुपचाप बर्दाश्त कर लेते हैं।',
    'झिझक, सामाजिक संकोच और विनम्रता का फायदा उठाकर दूसरे व्यक्ति पर धीरे-धीरे नियंत्रण स्थापित करना।',
    'पहली ही छोटी गलती पर शांत और स्पष्ट रूप से अपनी सीमा बताएं और उस पर दृढ़ रहें।',
    ['सीमा परीक्षण', 'व्यक्तिगत सीमाएं', 'सख्त रवैया']
  ),
  gu: createLocalizedBoundaryRecord(
    'gu',
    'મર્યાદાઓનું પરીક્ષણ: વ્યક્તિગત હદોનું ધીમું અતિક્રમણ (Boundary Testing)',
    'બાઉન્ડ્રી ટેસ્ટિંગ મનોવિજ્ઞાન: શરૂઆતમાં નાની-નાની હદો તોડીને મોટી અપેક્ષાઓ માટે રસ્તો બનાવવાની ચાલ.',
    'સરળ શબ્દોમાં: સામેવાળી વ્યક્તિ કેટલું સહન કરી શકે છે તે ચકાસવા માટે ધીમે-ધીમે મર્યાદાઓ ઓળંગવી.',
    'સામાજિક શરમ અને વિનમ્રતાનો લાભ લઈને અન્યોના અંગત જીવન પર અધિકાર જમાવવો.',
    'શરૂઆતની પહેલી જ ક્ષણે નમ્રતાપૂર્વક સ્પષ્ટ શબ્દોમાં "ના" કહીને પોતાની હદ નક્કી કરો.',
    ['મર્યાદા પરીક્ષણ', 'અંગત હદો', 'સ્પષ્ટ સંવાદ']
  ),
  mr: createLocalizedBoundaryRecord(
    'mr',
    'सीमांची चाचपणी: वैयक्तिक मर्यादांचे हळूहळू होणारे उल्लंघन (Boundary Testing)',
    'क्लाऊड आणि टाउनसेंडचे तत्त्व: लहान गोष्टींपासून मर्यादा ओलांडून मोठ्या शोषणासाठी मार्ग मोकळा करणे.',
    'सोप्या भाषेत: समोरची व्यक्ती विरोध करते की गप्प बसते हे पाहण्यासाठी हळूहळू हक्कांवर गदा आणणे.',
    'लाज, सामाजिक दबाव आणि नम्रतेचा गैरफायदा घेऊन मानसिक ताबा मिळवणे.',
    'पहिल्याच वेळी शांतपणे आणि ठामपणे आपली सीमा स्पष्ट करा आणि परिणाम अंमलात आणा.',
    ['मर्यादा चाचणी', 'वैयक्तिक हक्क', 'ठाम नकार']
  ),
  bn: createLocalizedBoundaryRecord(
    'bn',
    'ব্যক্তিগত সীমানা পরীক্ষা: ক্রমশ অধিকার ক্ষুণ্ণ করার কৌশল (Boundary Testing)',
    'ক্লাউড ও টাউনসেন্ডের গবেষণা: প্রথমে ছোটখাটো সীমানা ভেঙে বড় অন্যায়ের জমি তৈরি করার মানসিক চাল।',
    'সহজ কথায়: আপনি প্রতিবাদ করেন নাকি নীরবে মেনে নেন তা যাচাই করতে ধীরে ধীরে সীমা লঙ্ঘন করা।',
    'ভদ্রতা ও সামাজিক লজ্জার সুযোগ নিয়ে অন্যের ব্যক্তিগত জীবনে অনধিকার প্রবেশ করা।',
    'প্রথম ক্ষুদ্র লঙ্ঘনেই শান্তভাবে নিজের সীমারেখা স্পষ্ট করুন এবং অনড় থাকুন।',
    ['সীমানা পরীক্ষা', 'ব্যক্তিগত মর্যাদা', 'দৃঢ় অবস্থান']
  ),
  ta: createLocalizedBoundaryRecord(
    'ta',
    'எல்லைகளை சோதித்தல்: தனிப்பட்ட வரம்புகளை மெல்ல மீறும் தந்திரம் (Boundary Testing)',
    'க்ளவுட் மற்றும் டவுன்செண்ட் கோட்பாடு: சிறிய வரம்புகளை மீறி பெரிய ஆதிக்கத்திற்கான அடித்தளம் அமைக்கும் முறை.',
    'எளிய முறையில்: நீங்கள் எதிர்க்கிறீர்களா அல்லது அமைதியாக சகித்துக் கொள்கிறீர்களா எனப் பார்க்க வரம்புகளை மீறுவது.',
    'தயக்கம் மற்றும் மரியாதையை பலவீனமாகப் பயன்படுத்தி ஆதிக்கம் செலுத்தும் மனோபாவம்.',
    'முதல் சிறு அத்துமீறலிலேயே அமைதியாகவும் உறுதியாகவும் உங்களது எல்லையை உணர்த்துங்கள்.',
    ['எல்லை சோதனை', 'தனிப்பட்ட உரிமை', 'உறுதியான மறுப்பு']
  ),
  te: createLocalizedBoundaryRecord(
    'te',
    'వ్యక్తిగత హద్దుల పరీక్ష: పరిమితులను క్రమంగా అధిగమించే కుతంత్రం (Boundary Testing)',
    'క్లౌడ్ మరియు టౌన్‌సెండ్ సిద్ధాంతం: చిన్న పరిమితులను ఉల్లంఘించి పెద్ద ఒత్తిళ్లకు అలవాటు చేసే విధానం.',
    'సరళంగా చెప్పాలంటే: మీరు ఎదురుతిరుగుతారో లేదో పరీక్షించడానికి చిన్నపాటి అగౌరవంతో మొదలుపెట్టడం.',
    'మర్యాద మరియు మొహమాటాన్ని ఆసరాగా చేసుకుని వ్యక్తిగత స్వేచ్ఛను హరించే ప్రయత్నం.',
    'మొదటి ఉల్లంఘన జరిగినప్పుడే సున్నితంగా కానీ నిర్మొహమాటంగా మీ పరిధిని స్పష్టం చేయండి.',
    ['హద్దుల పరీక్ష', 'వ్యక్తిగత పరిమితులు', 'స్పష్టమైన సమాధానం']
  ),
  kn: createLocalizedBoundaryRecord(
    'kn',
    'ವೈಯಕ್ತಿಕ ಗಡಿಗಳ ಪರೀಕ್ಷೆ: ಮಿತಿಗಳನ್ನು ನಿಧಾನವಾಗಿ ಮೀರಲು ಮಾಡುವ ಪಿತೂರಿ (Boundary Testing)',
    'ಕ್ಲೌಡ್ ಮತ್ತು ಟೌನ್‌ಸೆಂಡ್ ಸಿದ್ಧಾಂತ: ಸಣ್ಣ ಮಿತಿಗಳನ್ನು ಉಲ್ಲಂಘಿಸಿ ದೊಡ್ಡ ಶೋಷಣೆಗೆ ದಾರಿ ಮಾಡಿಕೊಡುವ ತಂತ್ರ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ನೀವು ಪ್ರತಿರೋಧಿಸುತ್ತೀರೋ ಅಥವಾ ಸಹಿಸಿಕೊಳ್ಳುತ್ತೀರೋ ಎಂದು ತಿಳಿಯಲು ಹಂತ-ಹಂತವಾಗಿ ಅತಿಕ್ರಮಿಸುವುದು.',
    'ಸೌಜನ್ಯ ಮತ್ತು ಸಂಕೋಚವನ್ನು ಬಂಡವಾಳ ಮಾಡಿಕೊಂಡು ಅಧಿಕಾರ ಚಲಾಯಿಸುವ ದುಷ್ಟ ಮನಸ್ಥಿತಿ.',
    'ಮೊದಲ ಸಣ್ಣ ಅತಿಕ್ರಮಣವಾದಾಗಲೇ ಶಾಂತವಾಗಿ ನಿಮ್ಮ ಗಡಿಯನ್ನು ಸ್ಪಷ್ಟಪಡಿಸಿ ದೃಢವಾಗಿರಿ.',
    ['ಗಡಿ ಪರೀಕ್ಷೆ', 'ವೈಯಕ್ತಿಕ ಹಕ್ಕು', 'ದೃಢ ನಿಲುವು']
  ),
  ml: createLocalizedBoundaryRecord(
    'ml',
    'വ്യക്തിഗത അതിർത്തികളുടെ പരീക്ഷണം: പരിധികൾ പതുക്കെ ലംഘിക്കുന്ന രീതി (Boundary Testing)',
    'ക്ലൗഡ് & ടൗൺസെൻഡ് സിദ്ധാന്തം: ചെറിയ പരിധികൾ ലംഘിച്ച് വലിയ ചൂഷണത്തിന് കളമൊരുക്കുന്ന തന്ത്രം.',
    'ലളിതമായി പറഞ്ഞാൽ: നിങ്ങൾ എതിർക്കുമോ അതോ നിശബ്ദമായി സഹിക്കുമോ എന്നറിയാൻ പരിധികൾ ലംഘിച്ചു നോക്കുക.',
    'മര്യാദയെയും മടിയെയും മുതലെടുത്ത് മറ്റുള്ളവരുടെ വ്യക്തിജീവിതത്തിലേക്ക് അതിക്രമിച്ചു കടക്കുന്നു.',
    'ആദ്യത്തെ ചെറിയ ലംഘനത്തിൽ തന്നെ ശാന്തമായും കർക്കശമായും നിങ്ങളുടെ നിലപാട് വ്യക്തമാക്കുക.',
    ['അതിർത്തി പരീക്ഷണം', 'വ്യക്തിഗത അവകാശം', 'ഉറച്ച നിലപാട്']
  ),
  pa: createLocalizedBoundaryRecord(
    'pa',
    'ਹੱਦਾਂ ਦੀ ਪਰਖ: ਨਿੱਜੀ ਦਾਇਰਿਆਂ ਦਾ ਹੌਲੀ-ਹੌਲੀ ਉਲੰਘਣ (Boundary Testing)',
    'ਕਲਾਊਡ ਅਤੇ ਟਾਊਨਸੈਂਡ ਦੀ ਰਿਸਰਚ: ਪਹਿਲਾਂ ਛੋਟੀਆਂ ਹੱਦਾਂ ਤੋੜ ਕੇ ਵੱਡੀ ਦਖਲਅੰਦਾਜ਼ੀ ਲਈ ਰਾਹ ਪੱਧਰਾ ਕਰਨਾ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਇਹ ਵੇਖਣ ਲਈ ਹੱਦਾਂ ਪਾਰ ਕਰਨਾ ਕਿ ਤੁਸੀਂ ਬੋਲਦੇ ਹੋ ਜਾਂ ਚੁੱਪਚਾਪ ਸਹਿ ਲੈਂਦੇ ਹੋ।',
    'ਸ਼ਰਮ ਅਤੇ ਲਿਹਾਜ਼ ਦਾ ਨਾਜਾਇਜ਼ ਫਾਇਦਾ ਉਠਾ ਕੇ ਹੌਲੀ-ਹੌਲੀ ਆਪਣਾ ਕੰਟਰੋਲ ਬਣਾਉਣਾ।',
    'ਪਹਿਲੀ ਹੀ ਵਾਰ ਸ਼ਾਂਤੀ ਨਾਲ ਆਪਣੀ ਹੱਦ ਸਾਫ਼ ਕਰੋ ਅਤੇ ਉਸ \'ਤੇ ਪੱਕੇ ਰਹੋ।',
    ['ਹੱਦਾਂ ਦੀ ਪਰਖ', 'ਨਿੱਜੀ ਅਧਿਕਾਰ', 'ਸਪਸ਼ਟ ਨਾਂਹ']
  ),
  ur: createLocalizedBoundaryRecord(
    'ur',
    'حدود کی آزمائش: ذاتی حدود کی بتدریج پامالی (Boundary Testing)',
    'کلاؤڈ اور ٹاؤن سینڈ کی تحقیق: چھوٹی چھوٹی حدود توڑ کر بڑی زیادتیوں کی راہ ہموار کرنے کا حربہ۔',
    'آسان الفاظ میں: یہ جانچنا کہ آپ مخالفت کرتے ہیں یا خاموشی سے برداشت کر لیتے ہیں۔',
    'مروت اور شرافت کا ناجائز فائدہ اٹھا کر دوسروں کے معاملات پر تسلط جمانا۔',
    'پہلی ہی چھوٹی پامالی پر پرسکون مگر دوٹوک انداز میں اپنی حد واضح کریں۔',
    ['حدود کی آزمائش', 'ذاتی خود مختاری', 'دو ٹوک انکار']
  ),
  or: createLocalizedBoundaryRecord(
    'or',
    'ସୀମାର ପରୀକ୍ଷଣ: ବ୍ୟକ୍ତିଗତ ପରିଧିର ଧୀରେ ଧୀରେ ଉଲ୍ଲଂଘନ (Boundary Testing)',
    'କ୍ଲାଉଡ୍ ଏବଂ ଟାଉନସେଣ୍ଡ ଥିଓରୀ: ପ୍ରଥମେ ଛୋଟ ଛୋଟ ସୀମା ଭାଙ୍ଗି ବଡ଼ ଧରଣର ଶୋଷଣ ପାଇଁ ବାଟ ଖୋଲିବା।',
    'ସହଜ ଭାଷାରେ: ଆପଣ ପ୍ରତିବାଦ କରୁଛନ୍ତି ନା ସହିଯାଉଛନ୍ତି ତାହା ପରଖିବା ପାଇଁ ଧୀରେ ଧୀରେ ନିୟମ ଭାଙ୍ଗିବା।',
    'ଭଦ୍ରତା ଓ ସାମାଜିକ ଲଜ୍ଜାର ଫାଇଦା ଉଠାଇ ଅନ୍ୟର ବ୍ୟକ୍ତିଗତ ଜୀବନକୁ ନିୟନ୍ତ୍ରଣ କରିବା।',
    'ପ୍ରଥମ ଭୁଲ୍ ସମୟରେ ହିଁ ଶାନ୍ତ ଭାବରେ ନିଜର ସୀମା ନିର୍ଦ୍ଧାରଣ କରନ୍ତୁ।',
    ['ସୀମା ପରୀକ୍ଷଣ', 'ବ୍ୟକ୍ତିଗତ ଅଧିକାର', 'ଦୃଢ଼ ମନୋଭାବ']
  ),
  as: createLocalizedBoundaryRecord(
    'as',
    'ব্যক্তিগত সীমাৰ পৰীক্ষা: পৰিধিসমূহ ক্ৰমান্বয়ে উলংঘন কৰা কৌশল (Boundary Testing)',
    'ক্লাউড আৰু টাউনচেণ্ডৰ তত্ত্ব: প্ৰথমে সৰু সীমা উলংঘন কৰি ডাঙৰ অন্যায়ৰ বাবে পথ প্ৰস্তুত কৰা।',
    'সহজ কথাত: আপুনি প্ৰতিবাদ কৰে নে নীৰৱে সহ্য কৰে তাক চাবলৈ লাহে লাহে অধিকাৰ খৰ্ব কৰা।',
    'ভদ্ৰতা আৰু সামাজিক সংকোচৰ সুযোগ লৈ আনৰ জীৱন নিয়ন্ত্ৰণ কৰাৰ কৌশল।',
    'প্ৰথম সৰু উলংঘনতেই শান্তভাৱে নিজৰ সীমা স্পষ্ট কৰি দিয়ক।',
    ['সীমাৰ পৰীক্ষা', 'ব্যক্তিগত মৰ্যাদা', 'দৃঢ় স্থিতি']
  ),
};
