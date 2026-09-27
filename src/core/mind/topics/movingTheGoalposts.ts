import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 12: Moving the Goalposts
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Simon (2010): In Sheep's Clothing: Understanding and Dealing with Manipulative People
 * - Walton (1999): The Appeal to Ignorance: Pragmatic and Epistemic Arguments (Informal Fallacies)
 * - Braiker (2004): Who's Pulling Your Strings? How to Break the Cycle of Manipulation
 */

export const TOPIC_MOVING_GOALPOSTS_EN: MindTopicDetail = {
  id: 'moving_the_goalposts',
  categoryId: 'manipulation_awareness',
  slug: 'moving-the-goalposts',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 7,
  scientificConsensusTier: 'established',
  sortWeight: 12,
  viewCount: 7120,
  shareCount: 590,
  bookmarkCount: 1210,
  title: 'Moving the Goalposts: The Perpetual Deficit Trap',
  subtitle: 'Recognizing moving-target manipulation: why nothing you achieve is ever considered good enough.',
  shortDescription: 'A covert control tactic where criteria for success, approval, or resolution are continuously altered the moment the original standard is achieved.',
  oneLineExplanation: 'In simple terms: Promising you approval if you meet a target, and then changing the rules the second you reach it.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'Have you ever strained yourself to meet someone’s explicit requirement—scoring 95%, staying late to deliver a project, or accommodating an unreasonable family request—only to have them dismiss it instantly and demand something even higher? "Well, yes, you got 95%, but why didn’t you get 99%?" Moving the Goalposts is a calculated tactic designed to ensure you remain in a permanent state of perceived inadequacy, forever seeking approval that will never arrive.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Originally identified in informal logic as a shifting evidentiary burden, Moving the Goalposts in relational psychology (Simon, 2010) is a covert aggression tactic. The manipulator uses performance standards not as objective benchmarks, but as weapons of subordination. By never allowing the target to celebrate a completed milestone or experience closure, the manipulator maintains perpetual psychological dominance and keeps the target working endlessly to appease them.',
  summary60s: 'In healthy interactions, goals are static and agreements are honored: "If you accomplish X, the conflict is resolved and the reward is granted." In manipulative dynamics, the standard is a moving illusion. If you hit the target, the manipulator responds: "That was the bare minimum," or "You did it, but with the wrong attitude," or "Now you need to do Y and Z before I can trust you." The underlying objective is to prevent parity: as long as you are "in deficit," you cannot hold them accountable for their own behavior.',

  quickTakeaways: [
    'The Illusion of Satiation: The goalpost is not moving because your performance is lacking; it moves because their goal is your subservience',
    'The "Yes, But" Reflex: Notice when every achievement is met with immediate minimization followed by a new condition',
    'Deficit Positioning: Keeping you feeling flawed prevents you from questioning their cruelty or lack of contribution',
    'The Fixed Contract Defense: Never begin striving for a goal without written, immutable, objective criteria for completion',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Exploitation of the "Zeigarnik Effect" (uncompleted tasks occupy working memory) and the human desire for closure and parental/authority validation. When approval is dangled just out of reach, the brain enters a chronic striving state.',
  evolutionaryMechanism: 'Social hierarchy policing. Dominant alpha members maintained status by perpetually reminding subordinates of their junior status and imperfections.',

  // SECTION E — WHY DO MANIPULATORS USE IT?
  howItWorks: 'The cycle unfolds: (1) Setting the condition ("If you just do this, I will be happy"); (2) Exhausting compliance by the target; (3) The Shift: Invalidating the victory upon arrival; (4) The New Hurdle: Fabricating a new prerequisite; (5) Blame: Accusing the target of complaining or being selfish when they express frustration.',
  whereYouEncounterIt: 'Performance review cycles in toxic corporate environments, perfectionist Indian parenting expectations, high-conflict marriages, and political debates.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Static Objective Goals vs. Moving Goalposts',
    description: 'How manipulators keep you running on an endless treadmill.',
    analogySideA: {
      label: 'Objective Milestone (Fair Agreement)',
      detail: '"Submit the report by 5 PM Friday with zero audit errors." -> Target achieves it -> Genuine celebration, bonus, and closure.',
    },
    analogySideB: {
      label: 'Moving Goalposts (Manipulative)',
      detail: '"Submit by 5 PM Friday." -> Achieved at 4:30 PM -> "Well, why didn\'t you also build the client presentation slides and translate it into German?"',
    },
  },

  researchSummary: 'George Simon Jr. (2010) documented that covert-aggressive personalities systematically move relational goalposts to avoid being placed in a position of owing reciprocity or acknowledging the legitimacy of their partner’s needs.',
  limitationsAndControversies: 'In dynamic business environments, requirements do genuinely change due to market conditions, customer pivots, or budget cuts. Legitimate goal shifts involve transparent communication, shared regret, and resetting timelines; manipulative goal shifts involve retroactive blame and denying that the original agreement ever existed.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Every time you satisfy a grievance, a completely new and unexpected grievance is immediately substituted',
    'Achieving a major milestone is met with cold indifference or an instant: "Yes, but what about..."',
    'The rules of approval are never clearly stated in writing, or they are worded so vaguely that compliance can always be denied',
    'Being told: "You did what I asked, but you didn\'t do it with the right heart or enthusiasm"',
    'Feeling like you are perpetually running a marathon where the finish line is loaded onto the back of a speeding truck',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_goalpost_01',
      scenarioType: 'indian_context',
      title: 'The Perpetual Board Exam / College Admission Trap',
      vignette: 'Aryan in Jaipur works 14 hours a day to crack his 12th board exams. His father promised: "Score 90% in boards, and you can pick your own design college in Pune." Aryan works to exhaustion and achieves 94.2%. On results day, Aryan proudly shows his marksheet. His father glances at it and scoffs: "Sharma ji\'s son got 97%. What is 94% nowadays? Design is for dropouts; now you must clear the JEE Advanced entrance exam with top 1000 rank before I respect your career choices." Aryan feels crushed, numb, and hopeless.',
      breakdownAnalysis: 'Aryan’s father executed a classic moving goalpost. The 90% benchmark was never an honest agreement; it was a compliance carrot dangled to extract maximum academic labor while preserving unilateral parental control.',
      recommendedAction: 'Aryan must recognize that his father’s goalpost will move forever (from JEE to campus placements to marriage to grandchildren). Aryan must decouple his self-worth from his father\'s moving target and build his independent educational roadmap.',
    },
  ],

  examples: [
    {
      id: 'ex_goalpost_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Elusive Vice President Promotion',
      description: 'A manager is told: "Deliver ₹10 Crores in ARR and the VP seat is yours." They deliver ₹11 Crores. The executive board says: "Now you need to demonstrate global cross-functional leadership in Europe for two years before we can discuss title changes."',
      takeaway: 'Moving goalposts in corporate compensation is often used to extract high-value executive labor at junior pay grades.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'To disarm moving goalposts, stop chasing the new requirement. Stand firmly on the original agreed line. Call out the shift explicitly: "We agreed that achieving X would resolve this. I have completed X. I will not be taking on Y until our original agreement is acknowledged and honored."',
  psychologicalDefenses: [
    'Lock in Written Criteria: Never agree to vague goals like "show more commitment" or "improve your attitude"; demand observable, measurable deliverables',
    'Refuse the New Hurdle: When they move the line, stop running: "I see that you are introducing requirement Y. That was not our agreement. Let us close X first"',
    'Celebrate Yourself Independently: Do not wait for a moving-target manipulator to validate your win; celebrate your own excellence',
    'Exit the Treadmill: Accept the liberating truth: You can never satisfy someone whose goal is to keep you unsatisfied',
  ],

  commonMisconceptions: [
    {
      misconception: 'If I just try a little harder and hit this next target, they will finally be happy with me.',
      reality: 'They will never be happy because their happiness is not the objective. Their objective is keeping you subordinate and striving. The only winning move is to step off the treadmill.',
    },
  ],

  reflectionPrompt: 'Is there someone in your life whose approval finish-line keeps moving every time you get close? What would happen if you simply stopped running?',

  interactiveScenario: {
    id: 'interactive_goalpost_01',
    topicId: 'moving_the_goalposts',
    scenarioTitle: 'The Shifting Cleanliness Standard',
    scenarioDescription: 'Your partner complains that you never help with chores and says: "If you just clean the bathrooms and do the laundry this weekend, I will feel supported and we can have a peaceful date night." You spend 4 hours scrubbing both bathrooms and folding all laundry. On Sunday evening, your partner walks in, ignores the sparkling bathrooms, opens a kitchen cabinet, and snaps: "The spice jars are unorganized. You see? You never do anything properly. Date night is off."',
    vignetteSourceType: 'family_relationships',
    options: [
      {
        id: 'opt_1',
        text: 'Apologize profusely, grab a rag, and spend the next two hours organizing the spice jars hoping to win back the date night.',
        isCorrect: false,
        cognitiveTakeaway: 'You accept the moving goalpost! You validate their tactic and teach them that moving the rules will always extract more unpaid subservience.',
      },
      {
        id: 'opt_2',
        text: 'Stand your ground calmly on the original agreement: "Our agreement was the bathrooms and the laundry, which are both completed. Canceling date night over spice jars is moving the goalpost. I will not be organizing spice jars tonight."',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of goalpost defense! You hold the original agreement firm and refuse to dance to retroactive demands.',
      },
      {
        id: 'opt_3',
        text: 'Scream, kick the laundry basket across the floor, and leave the house.',
        isCorrect: false,
        cognitiveTakeaway: 'Emotional explosion that gives them ammunition to label you aggressive and avoid accountability for their goalpost shifting.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_goalpost_01',
      questionType: 'multiple_choice',
      prompt: 'What is the primary psychological objective of a manipulator who systematically moves the goalposts?',
      options: [
        { id: 'opt_a', text: 'To inspire their partner or employee to reach their maximum human potential', isCorrect: false },
        { id: 'opt_b', text: 'To maintain psychological dominance by keeping the other person in a perpetual state of perceived deficit and striving', isCorrect: true, feedbackText: 'Correct! Keeping the target in a state of perceived inadequacy ensures they can never demand reciprocity or assert their own needs.' },
        { id: 'opt_c', text: 'To adhere strictly to corporate quality assurance guidelines', isCorrect: false },
      ],
      cognitiveTakeaway: 'Moving goalposts is an instrument of dominance, not an instrument of excellence.',
    },
  ],

  references: [
    {
      citation: 'Simon, G. K. (2010). In sheep\'s clothing: Understanding and dealing with manipulative people. Parkhurst Brothers Publishers.',
      doiOrUrl: 'https://doi.org/10.1037/e612342011-002',
      relevance: 'Documents covert-aggressive tactics including shifting criteria and performance manipulation.',
      displayOrder: 1,
    },
    {
      citation: 'Walton, D. (1999). The appeal to ignorance: Pragmatic and epistemic arguments. State University of New York Press.',
      doiOrUrl: 'https://doi.org/10.1080/00028533.2001.11951676',
      relevance: 'Examines the informal logic and argumentation dynamics of moving the goalposts and shifting burdens.',
      displayOrder: 2,
    },
  ],

  tags: ['Manipulation Awareness', 'Moving the Goalposts', 'Covert Aggression', 'Boundaries', 'Workplace Culture', 'Perfectionism'],
  relatedTopics: [
    { topicId: 'guilt_tripping', slug: 'guilt-tripping', title: 'Guilt-Tripping', relationshipType: 'amplified_by' },
    { topicId: 'healthy_boundaries', slug: 'healthy-boundaries', title: 'Healthy Boundaries', relationshipType: 'counteracted_by' },
  ],
  seoTitle: 'Moving the Goalposts: How to Spot and Disarm Shifting Expectations | Mentalab Mind',
  seoDescription: 'Master the psychology of Moving the Goalposts. Learn why perfectionist manipulators change the rules when you succeed and how to stand your ground.',
  canonicalUrl: '/mind/manipulation-awareness/moving-the-goalposts',
  ogImageUrl: '/images/mind/moving-the-goalposts.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Moving the goalposts leverages the Zeigarnik effect and deficit-positioning to prevent emotional closure and assert ongoing control.',
};

export const TOPIC_MOVING_GOALPOSTS_HINGLISH: MindTopicDetail = {
  ...TOPIC_MOVING_GOALPOSTS_EN,
  title: 'Moving the Goalposts: Target Par Pahunchte Hi Naya Niyam Thop Dena',
  subtitle: 'Shifting criteria ka psychological trap: Chahe kuch bhi kar lo, unke liye kabhi kaafi kyu nahi hota?',
  shortDescription: 'Ek aisi manipulation tactic jisme aapke target achieve karte hi samne wala shart badal deta hai taaki aap hamesha unke saamne chhota aur adhoora feel karein.',
  oneLineExplanation: 'Simple shabdon me: Shart jeetne ke theek baad naya niyam bana dena taaki aap kabhi jeet na sakein.',

  summary30s: 'Kya aapke sath kabhi aisa hua hai ki kisi ne kaha ho: "Bas yeh ek kaam kardo, fir sab theek ho jayega." Aapne din-raat ek karke wo kaam kar diya, aur samne wale ne bina appreciate kiye turant keh diya: "Haan wo toh theek hai, lekin tumne yeh doosra kaam kyu nahi kiya?" Isko bolte hain Moving the Goalposts. Iska maqsad yeh ensure karna hota hai ki aap hamesha unke samne dab kar rahein aur kabhi apni self-respect claim na kar sakein.',
  coreConcept: 'Dr. George Simon Jr. (2010) ke mutabiq yeh ek covert-aggressive tactic hai. Manipulator target isliye nahi badalta kyunki aapka kaam kamzor tha; wo isliye badalta hai kyunki agar usne aapki jeet maan li, toh use aapki baatein sunni padengi aur power barabar ho jayegi.',
  summary60s: 'Aryan ne board exams me 94% score kiya kyunki father ne kaha tha ki 90% aane par manpasand design college me admission milega. Marks aate hi father ne kaha: "94% me kya teer maar liya? Sharma ji ke bete ke 97% aaye hain. Ab pehle IIT JEE clear karo fir baat karenge." Aryan ko samajh nahi aaya ki finish line koi fixed line nahi thi, balki ek aisi gaadi thi jo uske bhaagne ke sath-sath aage bhaagti rehti thi.',

  quickTakeaways: [
    'Kabhi na khatam hone wali daud: Goalpost isliye aage khisak raha hai kyunki wo aapko hamesha adhoora dikhana chahte hain',
    '"Haan, Lekin" ki aadat: Har achievement par taali bajane ke bajaye kamiya nikalna',
    'Deficit Trap: Jab tak aap khud ko guilty ya imperfect samjhenge, tab tak aap unke kharab behaviour par sawaal nahi utha payenge',
    'Treadmill se utariye: Uss insaan ko khush karna impossible hai jiska maqsad hi aapko unfulfilled rakhna hai',
  ],

  whyItHappens: 'Insaan approval aur validation ka bhookha hota hai. Jab reward thoda sa aage khiska diya jata hai, toh dimaag aur zyada josh me koshish karne lagta hai.',
  evolutionaryMechanism: 'Tribe ke dominant leaders subordinates ko control me rakhne ke liye unhe kabhi poori tarah satisfied feel nahi hone dete the.',

  howItWorks: 'Wife/Husband kehta hai: "Bas ghar saaf kardo toh hum shaam ko date par chalenge." Ghar saaf hote hi: "Masale ke dabbe sahi jagah kyu nahi rakhe? Tum kuch theek nahi karte, date cancel!"',
  howToRespond: 'Nayi demand par mat daudiye. Kahiye: "Hamari baat bathroom aur laundry ki hui thi jo poori ho chuki hai. Naye rules banana band kijiye, main aur kaam nahi karunga."',

  reflectionPrompt: 'Kya aapki zindagi me koi aisa person hai jiske standards aap kitni bhi koshish kar lein kabhi poore nahi hote? Agar aap koshish karna band kar dein toh kya hoga?',
  seoTitle: 'Moving the Goalposts Kya Hai? Manipulative Expectations Se Kaise Bachein | Mentalab Mind',
  seoDescription: 'Janiye kyu kuch log aapki jeet par bhi niyam badal dete hain. Moving the goalposts manipulation aur toxic expectations ko handle karne ke tareeqe.',
  canonicalUrl: '/mind/manipulation-awareness/moving-the-goalposts',
};

function createLocalizedGoalpostRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_MOVING_GOALPOSTS_EN,
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

export const TOPIC_MOVING_GOALPOSTS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_MOVING_GOALPOSTS_EN,
  hinglish: TOPIC_MOVING_GOALPOSTS_HINGLISH,
  hi: createLocalizedGoalpostRecord(
    'hi',
    'लक्ष्य बदलते रहना (Moving the Goalposts): कभी पूरा न होने वाला अपेक्षाओं का जाल',
    'नियम बदलने का मनोविज्ञान: लक्ष्य प्राप्त होते ही नई शर्तें थोपने की हेरफेर को समझें।',
    'सरल शब्दों में: किसी शर्त को पूरा करते ही सामने वाले द्वारा नए और कठिन नियम बना देना ताकि आप कभी सफल न लगें।',
    'लक्ष्य बदलना तब होता है जब कोई व्यक्ति आपकी सफलता या संतुष्टि को स्वीकार करने से बचने के लिए लगातार अपेक्षाओं के मानकों को आगे खिसकाता रहता है।',
    'जॉर्ज साइमन (2010) के अनुसार, यह नियंत्रण बनाए रखने और कभी समानता न देने की एक गुप्त आक्रामक चाल है।',
    [
      'अंतहीन दौड़: लक्ष्य इसलिए बदलता है ताकि आप हमेशा अपूर्ण और ऋणी महसूस करें',
      'कमियों पर ध्यान: सफलता की सराहना करने के बजाय तुरंत नई मांग रख देना',
      'अधूरी संतुष्टि: इस जाल में फंसे लोग कभी भी आत्म-सम्मान का अनुभव नहीं कर पाते',
      'नियम पर अड़े रहें: नई मांगों के पीछे भागने के बजाय मूल समझौते पर डटे रहें',
    ]
  ),
  gu: createLocalizedGoalpostRecord(
    'gu',
    'ધ્યેય બદલતા રહેવું: ક્યારેય સંતોષ ન પામવાની અપેક્ષાઓની જાળ',
    'નિયમો બદલવાની યુક્તિ: સફળતા મળતાં જ નવી શરતો લાદવાની મેનિપ્યુલેશન.',
    'સરળ શબ્દોમાં: શરત પૂરી થતાં જ નવી શરત મૂકી દેવી જેથી સામેવાળો ક્યારેય જીતી ન શકે.',
    'ધ્યેય બદલવાની આદત વ્યક્તિને હંમેશાં અધૂરાપણાની ભાવનામાં રાખે છે.',
    'નવા નિયમો પાછળ દોડવાને બદલે મૂળ શરત પર અડગ રહેવું જોઈએ.',
    ['જાળ ઓળખો', 'અધૂરાપણાથી બચો', 'મૂળ નિયમ પર રહો']
  ),
  mr: createLocalizedGoalpostRecord(
    'mr',
    'नियम बदलत राहणे: कधीही पूर्ण न होणाऱ्या अपेक्षांचे दुष्टचक्र',
    'मूव्हिंग द गोलपोस्ट्स: यश मिळताच नवीन अटी लादण्याच्या प्रवृत्तीचा प्रतिकार.',
    'सोप्या भाषेत: एक अट पूर्ण केली की लगेच दुसरी नवी आणि कठीण अट लादणे.',
    'जॉर्ज सायमन यांच्या मते, हे समोरच्याला नेहमी आपल्या नियंत्रणात ठेवण्याचे तंत्र आहे.',
    'नवीन अटींच्या मागे न धावता आधीच्या करारावर ठाम राहणे हाच योग्य उपाय आहे.',
    ['दुष्टचक्र ओळखा', 'ठाम भूमिका घ्या', 'स्वतःचे समाधान जपा']
  ),
  bn: createLocalizedGoalpostRecord(
    'bn',
    'লক্ষ্য পরিবর্তন করা: অন্তহীন প্রত্যাশার ফাঁদ ও মানসিক নিয়ন্ত্রণ',
    'মুভিং দ্য গোলপোস্টস: সাফল্য অর্জিত হলেই নতুন শর্ত চাপিয়ে দেওয়ার কৌশল।',
    'সহজ কথায়: একটি শর্ত পূরণ করার সাথে সাথেই নতুন শর্ত তৈরি করে সাফল্য অস্বীকার করা।',
    'এই কৌশলের উদ্দেশ্য হলো আপনাকে সবসময় অপূর্ণ ও অনুগত রাখা।',
    'নতুন শর্তের পেছনে না ছুটে মূল চুক্তিতে অটল থাকুন।',
    ['ফাঁদ চিনুন', 'অনড় থাকুন', 'আত্মবিশ্বাস বজায় রাখুন']
  ),
  ta: createLocalizedGoalpostRecord(
    'ta',
    'இலக்குகளை மாற்றிக்கொண்டே இருத்தல்: ஒருபோதும் திருப்தியடையாத எதிர்பார்ப்புகளின் பொறி',
    'விதிமுறைகளை மாற்றும் தந்திரம்: இலக்கை அடைந்தவுடன் புதிய நிபந்தனைகளை விதிப்பது.',
    'எளிய சொற்களில்: ஒரு நிபந்தனையை நிறைவேற்றியவுடன், வெற்றி பெறவிடாமல் புதிய விதிகளை உருவாக்குவது.',
    'உங்களை எப்போதும் பற்றாக்குறையான நிலையில் வைத்திருக்க இந்த தந்திரம் பயன்படுத்தப்படுகிறது.',
    'புதிய கோரிக்கைகளை ஏற்காமல் முந்தைய ஒப்பந்தத்தில் உறுதியாக நில்லுங்கள்.',
    ['பொறியை உணருங்கள்', 'உறுதியாக இருங்கள்', 'சுயமரியாதை காக்கவும்']
  ),
  te: createLocalizedGoalpostRecord(
    'te',
    'లక్ష్యాలను మారుస్తూ ఉండటం: ఎప్పటికీ తీరని అంచనాల ఉచ్చు',
    'నియమాలను మార్చే తంత్రం: ఒక పని పూర్తి కాగానే మరొక కొత్త షరతును విధించడం.',
    'సులభమైన మాటల్లో: ఒక షరతును నెరవేర్చిన వెంటనే మరో కష్టమైన షరతు పెట్టి తక్కువగా చూపించడం.',
    'మిమ్మల్ని ఎల్లప్పుడూ లోపభూయిష్టంగా ఉంచడానికి ఈ తంత్రం ఉపయోగించబడుతుంది.',
    'కొత్త షరతుల వెనుక పరిగెత్తకుండా అసలు ఒప్పందానికి కట్టుబడి ఉండండి.',
    ['ఉచ్చును గుర్తించండి', 'స్పష్టంగా తిరస్కరించండి', 'ఆత్మగౌరవం కాపాడుకోండి']
  ),
  kn: createLocalizedGoalpostRecord(
    'kn',
    'ಗುರಿಗಳನ್ನು ಬದಲಾಯಿಸುತ್ತಿರುವುದು: ಎಂದಿಗೂ ಮುಗಿಯದ ನಿರೀಕ್ಷೆಗಳ ಬಲೆ',
    'ನಿಯಮಗಳನ್ನು ಬದಲಿಸುವ ತಂತ್ರ: ಒಂದು ಷರತ್ತು ಪೂರೈಸಿದ ತಕ್ಷಣ ಹೊಸ ಷರತ್ತುಗಳನ್ನು ಹೇರುವುದು.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಗೆಲುವಿನ ಸಮೀಪ ಬಂದಾಗ ಹೊಸ ನಿಯಮಗಳನ್ನು ಸೃಷ್ಟಿಸಿ ನಿರಾಶೆಗೊಳಿಸುವುದು.',
    'ನಿಮ್ಮನ್ನು ಸದಾ ಅಪೂರ್ಣರೆಂದು ಭಾವಿಸುವಂತೆ ಮಾಡಲು ಈ ತಂತ್ರವನ್ನು ಬಳಸಲಾಗುತ್ತದೆ.',
    'ಹೊಸ ಬೇಡಿಕೆಗಳ ಬೆನ್ನತ್ತದೆ ಮೂಲ ಒಪ್ಪಂದಕ್ಕೆ ಬದ್ಧರಾಗಿರಿ.',
    ['ಬಲೆಯನ್ನು ಗುರುತಿಸಿ', 'ದೃಢವಾಗಿ ನಿಲ್ಲಿ', 'ಆತ್ಮವಿಶ್ವಾಸ ಕಳೆದುಕೊಳ್ಳದಿರಿ']
  ),
  ml: createLocalizedGoalpostRecord(
    'ml',
    'ലക്ഷ്യങ്ങൾ മാറ്റിക്കൊണ്ടിരിക്കുക: ഒരിക്കലും അവസാനിക്കാത്ത ആവശ്യങ്ങളുടെ കെണി',
    'നിയമങ്ങൾ മാറ്റുന്ന തന്ത്രം: ഒരു കാര്യം ചെയ്തുതീർക്കുമ്പോൾ അടുത്ത നിബന്ധന മുന്നോട്ട് വെക്കുക.',
    'ലളിതമായി പറഞ്ഞാൽ: നിബന്ധന പാലിക്കുമ്പോൾ തന്നെ പുതിയ നിയമങ്ങൾ ഉണ്ടാക്കി വിജയം നിഷേധിക്കുക.',
    'മറ്റുള്ളവരെ എപ്പോഴും അപൂർണ്ണരായി നിലനിർത്താൻ ഉപയോഗിക്കുന്ന തന്ത്രമാണിത്.',
    'പുതിയ ആവശ്യങ്ങൾക്ക് വഴങ്ങാതെ ആദ്യ തീരുമാനത്തിൽ ഉറച്ചുനിൽക്കുക.',
    ['ചതി തിരിച്ചറിയുക', 'ഉറച്ച നിലപാട്', 'ആത്മാഭിമാനം നിലനിർത്തുക']
  ),
  pa: createLocalizedGoalpostRecord(
    'pa',
    'ਨਿਯਮ ਬਦਲਦੇ ਰਹਿਣਾ: ਕਦੇ ਨਾ ਪੂਰੀਆਂ ਹੋਣ ਵਾਲੀਆਂ ਉਮੀਦਾਂ ਦਾ ਜਾਲ',
    'ਮੂਵਿੰਗ ਦ ਗੋਲਪੋਸਟਸ: ਇੱਕ ਸ਼ਰਤ ਪੂਰੀ ਹੁੰਦਿਆਂ ਹੀ ਨਵੀਆਂ ਸ਼ਰਤਾਂ ਥੋਪਣ ਦੀ ਚਾਲ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਕੰਮ ਪੂਰਾ ਹੁੰਦੇ ਹੀ ਨਵਾਂ ਨਿਯਮ ਬਣਾ ਦੇਣਾ ਤਾਂ ਜੋ ਤੁਸੀਂ ਕਦੇ ਜਿੱਤ ਨਾ ਸਕੋ।',
    'ਇਸ ਦਾ ਮਕਸਦ ਤੁਹਾਨੂੰ ਹਮੇਸ਼ਾ ਦਬਾਅ ਹੇਠ ਅਤੇ ਅਧੂਰਾ ਰੱਖਣਾ ਹੁੰਦਾ ਹੈ।',
    'ਨਵੀਆਂ ਸ਼ਰਤਾਂ ਪਿੱਛੇ ਭੱਜਣ ਦੀ ਥਾਂ ਪੁਰਾਣੀ ਗੱਲ ਤੇ ਅੜੇ ਰਹੋ।',
    ['ਚਾਲ ਪਛਾਣੋ', 'ਅਸਲ ਗੱਲ ਤੇ ਰਹੋ', 'ਸਵੈ-ਮਾਣ ਬਚਾਓ']
  ),
  ur: createLocalizedGoalpostRecord(
    'ur',
    'اہداف بدلتے رہنا: کبھی پوری نہ ہونے والی توقعات کا فریب',
    'قواعد بدلنے کی نفسیات: ایک شرط پوری ہوتے ہی نئی شرط مسلط کرنے کی ہیرا پھیری۔',
    'آسان الفاظ میں: کسی مطالبے کو پورا کرتے ہی نیا اور مشکل مطالبہ سامنے لانا تاکہ آپ کبھی مطمئن نہ ہوں۔',
    'اس حربے کا مقصد انسان کو ہمیشہ ادھورا اور دباؤ کا شکار رکھنا ہوتا ہے۔',
    'نئے مطالبات کے پیچھے بھاگنے کے بجائے بنیادی معاہدے پر قائم رہیں۔',
    ['فریب سمجھیں', 'ثابت قدم رہیں', 'خود اعتمادی بحال رکھیں']
  ),
  or: createLocalizedGoalpostRecord(
    'or',
    'ଲକ୍ଷ୍ୟ ବଦଳାଇ ଚାଲିବା: କେବେ ସନ୍ତୁଷ୍ଟ ନ ହେବାର ଆଶାର ଫାନ୍ଦ',
    'ନିୟମ ବଦଳାଇବାର କୌଶଳ: ଗୋଟିଏ ସର୍ତ୍ତ ପୂରଣ ହେବା ମାତ୍ରେ ନୂଆ ସର୍ତ୍ତ ଲଦି ଦେବା।',
    'ସହଜ ଭାଷାରେ: ସଫଳତା ମିଳିବା କ୍ଷଣି ନୂଆ ନିୟମ ତିଆରି କରି ସଫଳତାକୁ ଅସ୍ୱୀକାର କରିବା।',
    'ଏହି କୌଶଳ ବ୍ୟକ୍ତିକୁ ସର୍ବଦା ଅସମ୍ପୂର୍ଣ୍ଣ ରଖିବା ପାଇଁ ବ୍ୟବହାର କରାଯାଏ।',
    'ନୂଆ ସର୍ତ୍ତ ପଛରେ ନ ଦୌଡ଼ି ପୂର୍ବ ନିଷ୍ପତ୍ତିରେ ଦୃଢ଼ ରୁହନ୍ତୁ।',
    ['ଫାନ୍ଦ ଚିହ୍ନନ୍ତୁ', 'ଦୃଢ଼ ଭାବରେ ମନା କରନ୍ତୁ', 'ଆତ୍ମସମ୍ମାନ ବଜାୟ ରଖନ୍ତୁ']
  ),
  as: createLocalizedGoalpostRecord(
    'as',
    'লক্ষ্য সলনি কৰি থকা: কেতিয়াও শেষ নোহোৱা প্ৰত্যাশাৰ জাল',
    'নিয়ম সলনিৰ কৌশল: এটা চৰ্ত পূৰণ হোৱাৰ লগে লগে নতুন চৰ্ত জাপি দিয়াৰ ফাঁকি।',
    'সহজ কথাত: চৰ্ত পূৰণ কৰাৰ পিছতো নতুন নিয়ম বনাই সফলতা অস্বীকাৰ কৰা।',
    'আপোনাক সদায় অপূৰ্ণ আৰু বশীভূত কৰি ৰাখিবলৈ এই কৌশল লোৱা হয়।',
    'নতুন চৰ্তৰ পিছত নোঘূৰি মূল সিদ্ধান্তত অটল থাকক।',
    ['ফাঁকি বুজি লওক', 'অটল থাকক', 'আত্মসন্মান ৰক্ষা কৰক']
  ),
};
