import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Relationships & Communication Track
 * Topic: Active Listening: Listening to Understand, Not to Defend
 * Category: Relationships & Communication (relationships_comm)
 * 
 * Academic Grounding:
 * - Rogers & Farson (1957): Active Listening
 * - Gottman (2001): The Relationship Cure: A 5 Step Guide to Strengthening Your Marriage, Family, and Friendships
 * - Weger et al. (2014): The Relative Effectiveness of Active Listening in Initial Interactions
 */

export const TOPIC_ACTIVE_LISTENING_EN: MindTopicDetail = {
  id: 'active_listening',
  categoryId: 'relationships_comm',
  slug: 'active-listening',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 2,
  viewCount: 5410,
  shareCount: 470,
  bookmarkCount: 960,
  title: 'Active Listening: Listening to Understand, Not to Defend',
  subtitle: 'The psychology of empathetic attunement: paraphrasing, emotional validation, and silencing autobiographical listening.',
  shortDescription: 'A structured communication practice that requires the listener to fully concentrate, understand, respond, and remember what is being said.',
  oneLineExplanation: 'In simple terms: Shutting down your internal defense lawyer and actually hearing what the other person is experiencing.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'Most people do not listen to understand; they listen to reply. While the other person is speaking, our internal narrator is feverishly assembling rebuttals, excuses, or unsolicited advice: "That\'s not what happened!" or "Here is what you should do." Active Listening is the deliberate discipline of setting aside your defense attorney, mirroring the speaker’s emotional core, and validating their reality before proposing solutions.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Formulated by humanistic psychologists Carl Rogers and Richard Farson (1957), Active Listening posits that deep emotional validation is a prerequisite for psychological safety. When humans feel truly heard, their defensive nervous system down-regulates. Active listening requires three non-negotiable behaviors: (1) Non-verbal Attunement (eye contact, posture, nodding); (2) Paraphrasing (reflecting back content without distortion); (3) Emotional Reflection (naming the underlying feeling: "It sounds like you felt completely invisible in that meeting").',
  summary60s: 'Stephen Covey popularized this as "Seek first to understand, then to be understood." When someone expresses pain or frustration, offering immediate solutions ("Why don\'t you just call HR?") feels dismissive—it signals: "Your emotions are inconvenient; let us solve them so you stop crying." In contrast, saying: "I hear how exhausted and betrayed you feel. That sounds intensely painful" provides relational attunement. Once emotional connection is established, problem-solving becomes collaborative rather than combative.',

  quickTakeaways: [
    'Listen to Understand, Not Defend: Turn off your mental rehearsal of excuses while the other person speaks',
    'Validation is Not Agreement: You can validate someone\'s emotional reality ("I understand why that felt scary") without agreeing with their factual premise',
    'Resist the "Fix-It" Reflex: Offering instant advice feels like brush-off; people need connection before correction',
    'The Mirroring Test: You do not understand someone\'s point until you can summarize their grievance to their satisfaction',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Autobiographical listening. Our ego is naturally self-referential. When someone speaks, our brain maps their story onto our own memories: "Oh, that happened to me in 2018!" and we hijack the conversation. True listening requires the cognitive effort to suppress the default mode network and hold space for another mind.',
  evolutionaryMechanism: 'Social cohesion in small hunter-gatherer bands required rapid resolution of interpersonal tension to prevent tribal splits.',

  // SECTION E — HOW DOES IT WORK?
  howItWorks: 'Active listening operates in 4 steps: (1) Attend: Put down devices and face the person; (2) Reflect: Paraphrase their words ("What I am hearing is that you felt unsupported yesterday"); (3) Validate: Honor the emotion ("That makes complete sense given how hard you worked"); (4) Inquire: Ask open-ended questions ("What would feel most helpful right now?").',
  whereYouEncounterIt: 'Marital conflict, parent-child talks, workplace performance reviews, grief support, and customer service escalation.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Reactive Listening vs. Active Empathetic Listening',
    description: 'The difference between preparing an argument and building a bridge.',
    analogySideA: {
      label: 'Reactive Listening (The Defense Lawyer)',
      detail: '"You said I was late, but last Tuesday you were 20 minutes late! And besides, traffic on the flyover was terrible."',
    },
    analogySideB: {
      label: 'Active Listening (The Mirror)',
      detail: '"You felt anxious and disrespected when I arrived late because it disrupted our schedule. I hear you, and I am sorry."',
    },
  },

  researchSummary: 'Weger et al. (2014) published in the International Journal of Listening showed that participants who received active listening responses felt significantly more understood and reported greater relational satisfaction than those who received mere verbal acknowledgments or unsolicited advice.',
  limitationsAndControversies: 'Paraphrasing can feel robotic or patronizing if done mechanically without genuine warmth. Repeating someone\'s exact words like a tape recorder ("So you are saying you are sad") infuriates the speaker. Active listening requires authentic curiosity, not formulaic scripts.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Interrupting someone mid-sentence because you "already know what they are going to say"',
    'Checking your smartphone, smartwatch, or looking past the person\'s shoulder while they are confiding in you',
    'Offering instant solutions and unsolicited advice within 10 seconds of someone sharing emotional distress',
    'Hijacking their story: "Oh you think your boss is bad? Let me tell you about my manager!"',
    'Focusing entirely on defending your intentions while ignoring the actual impact of your actions',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_active_01',
      scenarioType: 'indian_context',
      title: 'The Stressed Daughter-in-Law and Exhausted Workday',
      vignette: 'Meera returns home after a grueling 10-hour shift at an IT consultancy in Pune. She collapses on the sofa and vents to her husband, Vikram: "My project manager dumped two new feature tickets on my desk at 6:30 PM. I am drowning, and my team lead took all the credit in the client demo." Vikram immediately responds: "You should set boundaries on Slack. Just log off at 6 PM. And tomorrow morning, email the director with the git commit history to prove you wrote the code." Meera feels irritated, snaps at Vikram, and locks herself in the bedroom. Vikram feels baffled: "I gave her the exact solution; why is she angry?"',
      breakdownAnalysis: 'Vikram fell into the classic "Fix-It Reflex." Meera did not need an immediate 2-point tactical plan; she needed her emotional exhaustion witnessed and validated. Offering instant operational advice signaled that her emotional distress was an irritating bug to be patched.',
      recommendedAction: 'Vikram should pause, put down his phone, sit next to her, and say: "Meera, that sounds exhausting and so unfair after how hard you worked this week. Come here, drink some water. Do you want to vent more, or do you want to brainstorm solutions later?"',
    },
  ],

  examples: [
    {
      id: 'ex_active_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The De-escalation Paraphrase',
      description: 'An angry client shouts: "Your software release broke our billing cycle and cost us ₹2 Lakhs!" The account lead responds: "I hear exactly how severe this issue is for your cash flow, and I understand why you are furious. Let us look directly at the billing logs together right now."',
      takeaway: 'Reflecting the customer\'s urgency and pain drains the emotional hostility from the conversation.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'To master active listening, adopt the "Wait 3 Seconds Rule": When someone finishes speaking, count silently to three before opening your mouth. This prevents interrupting and signals that you are processing their thoughts rather than waiting to launch your counter-attack.',
  psychologicalDefenses: [
    'The 3-Second Pause: Never speak the instant the other person stops; pause to ensure they have finished their thought',
    'The "Help or Vent" Question: When someone starts sharing, ask gently: "Do you want me to just listen and support you, or do you want to brainstorm solutions together?"',
    'Focus on Impact, Not Intent: Acknowledge the emotional impact your action had on them before explaining your intentions',
    'Paraphrase the Core: Use phrases like: "If I am hearing you right, what hurt the most was..."',
  ],

  commonMisconceptions: [
    {
      misconception: 'Validating someone\'s feelings means admitting that they are 100% factually right and you are wrong.',
      reality: 'Emotions are subjective experiences. You can validate that someone feels hurt without conceding that your intentions were malicious or that their factual recollection is flawless.',
    },
  ],

  reflectionPrompt: 'When was the last time you listened to someone for 5 whole minutes without interrupting, advising, or comparing their story to your own life?',

  interactiveScenario: {
    id: 'interactive_active_01',
    topicId: 'active_listening',
    scenarioTitle: 'The Hurt Friend\'s Confrontation',
    scenarioDescription: 'A close friend says to you: "When you canceled our dinner plans at the last minute on Friday, I felt really unimportant and discarded. It feels like you only make time for me when your other plans fall through."',
    vignetteSourceType: 'family_relationships',
    options: [
      {
        id: 'opt_1',
        text: 'Defend yourself immediately: "That is completely unfair! My boss made me work late! You know how busy I am; why are you guilt-tripping me?"',
        isCorrect: false,
        cognitiveTakeaway: 'Defensive escalation that ignores their emotional hurt and shifts into counter-attack.',
      },
      {
        id: 'opt_2',
        text: 'Practice active listening and validation: "I hear how hurtful and dismissive that felt to you, and I am truly sorry for making you feel unimportant. You matter to me deeply. Next time, I will give you plenty of advance notice."',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of active listening! You validate their felt experience without defensive deflection and reinforce relational safety.',
      },
      {
        id: 'opt_3',
        text: 'Roll your eyes, say "Fine, whatever, I won\'t make plans with you anymore," and walk away.',
        isCorrect: false,
        cognitiveTakeaway: 'Petulant stonewalling that destroys friendship trust.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_active_01',
      questionType: 'multiple_choice',
      prompt: 'According to Carl Rogers and communication research, what is the primary purpose of paraphrasing during active listening?',
      options: [
        { id: 'opt_a', text: 'To prove that your memory is superior to the speaker\'s', isCorrect: false },
        { id: 'opt_b', text: 'To demonstrate to the speaker that their message has been accurately received and understood at both factual and emotional levels', isCorrect: true, feedbackText: 'Correct! Paraphrasing checks understanding and provides powerful emotional validation.' },
        { id: 'opt_c', text: 'To subtly change the subject to something you prefer discussing', isCorrect: false },
      ],
      cognitiveTakeaway: 'Paraphrasing confirms attunement and dissolves defensive walls.',
    },
  ],

  references: [
    {
      citation: 'Rogers, C. R., & Farson, R. E. (1957). Active listening. Industrial Relations Center of the University of Chicago.',
      doiOrUrl: 'https://doi.org/10.1037/10041-000',
      relevance: 'The foundational seminal paper defining active listening as a therapeutic and communication discipline.',
      displayOrder: 1,
    },
    {
      citation: 'Weger, H., Castle Bell, G., Minei, E. M., & Robinson, M. C. (2014). The relative effectiveness of active listening in initial interactions. International Journal of Listening, 28(1), 13–31.',
      doiOrUrl: 'https://doi.org/10.1080/10904018.2013.811269',
      relevance: 'Empirical verification that active listening significantly enhances perceived understanding and trust.',
      displayOrder: 2,
    },
  ],

  tags: ['Relationships', 'Communication', 'Active Listening', 'Empathy', 'Conflict Resolution'],
  relatedTopics: [
    { topicId: 'healthy_boundaries', slug: 'healthy-boundaries', title: 'Healthy Boundaries', relationshipType: 'amplified_by' },
    { topicId: 'emotional_regulation', slug: 'emotional-regulation', title: 'Emotional Regulation', relationshipType: 'foundational_to' },
  ],
  seoTitle: 'Active Listening: How to Listen to Understand, Not Defend | Mentalab Mind',
  seoDescription: 'Master Active Listening through Rogers & Gottman psychology. Learn paraphrasing, emotional validation, and how to stop defensive interruptions.',
  canonicalUrl: '/mind/relationships-and-communication/active-listening',
  ogImageUrl: '/images/mind/active-listening.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Active listening requires suppressing self-referential cognitive rehearsal to accurately decode and validate another person\'s emotional state.',
};

export const TOPIC_ACTIVE_LISTENING_HINGLISH: MindTopicDetail = {
  ...TOPIC_ACTIVE_LISTENING_EN,
  title: 'Active Listening: Samjhane Ke Liye Sunna, Behes Jeetne Ke Liye Nahi',
  subtitle: 'Carl Rogers ka active listening science: Jawab taiyar karne ke bajaye samne wale ke dard ko samjhein.',
  shortDescription: 'Ek aisi communication practice jisme aap samne wale ki baat ko beech me kaate bina, uski feelings ko validate karke poori tarah sunte hain.',
  oneLineExplanation: 'Simple shabdon me: Apne andar ke vakeel ko chup karana aur samne wale ki baat sach me sunna.',

  summary30s: 'Zyadatar log samjhne ke liye nahi, balki jawab dene ke liye sunte hain. Jab samne wala bol raha hota hai, toh hamara dimaag excuses aur arguments assemble kar raha hota hai: "Isne meri galti kaise boli? Ab main isko batata hoon!" Active Listening ka matlab hai apne andar ke defense lawyer ko shant karna, samne wale ki baat ko mirror karna, aur unki feelings ko acknowledge karna.',
  coreConcept: 'Psychologist Carl Rogers (1957) ne discover kiya tha ki jab kisi insaan ko lagta hai ki uski baat sach me suni gayi hai, toh uska defensive system shant ho jata hai. Sirf "Main theek kar dunga" bolna samne wale ko invalidate karta hai; unhe pehle empathy chahiye hoti hai.',
  summary60s: 'Stephen Covey ne kaha tha: "Pehle samjho, fir samjhao." Jab koi pareshani me bolta hai, toh turant advice mat dijiye ("HR ko email kardo"). Puchiye: "Mujhe samajh aa raha hai ki aap bohot exhausted aur hurt feel kar rahe hain." Ek baar emotional connect ban jaye, uske baad solutions nikalna bohot aasan ho jata hai.',

  quickTakeaways: [
    'Sunna seekhein: Samne wala jab bol raha ho toh dimaag me counter-argument mat banaiye',
    'Validation ka matlab agreement nahi hai: Aap samne wale ke gusse ko samajh sakte hain bina unki saari baaton se agree kiye',
    'Turant advice mat dijiye: Log advice lene se pehle samajh aana chahte hain',
    '3-Second Rule: Samne wale ke chup hone ke baad 3 second rukiye, fir boliye',
  ],

  whyItHappens: 'Insaan ka ego self-centered hota hai. Hum har kahani me khud ko hero ya victim dekhne lagte hain.',
  evolutionaryMechanism: 'Tribe me misunderstandings solve karna survival ke liye zaroori tha.',

  howItWorks: 'Wife thak kar office se aati hai. Husband turant advice dene lagta hai. Wife gusse me room me chali jaati hai. Agar husband sirf sunta aur paani deta, toh jhagda hota hi nahi.',
  howToRespond: 'Ek golden question puchiye: "Kya aap chahte hain ki main sirf aapki baat sunun, ya fir hum milkar iska solution nikalein?"',

  reflectionPrompt: 'Kya aapne kabhi kisi ki baat poore 5 minute tak bina advice diye aur bina beech me toke suni hai?',
  seoTitle: 'Active Listening Kya Hai? Communication Skills Aur Empathy | Mentalab Mind',
  seoDescription: 'Janiye Active Listening ka scientific tareeqa. Carl Rogers aur Gottman research ke through seekhein bina jhagde ke rishto me gehri samajh banana.',
  canonicalUrl: '/mind/relationships-and-communication/active-listening',
};

function createLocalizedActiveListenRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_ACTIVE_LISTENING_EN,
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

export const TOPIC_ACTIVE_LISTENING: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_ACTIVE_LISTENING_EN,
  hinglish: TOPIC_ACTIVE_LISTENING_HINGLISH,
  hi: createLocalizedActiveListenRecord(
    'hi',
    'सक्रिय श्रवण (Active Listening): समझने के लिए सुनना, बहस जीतने के लिए नहीं',
    'कार्ल रोजर्स का मनोविज्ञान: अपने आंतरिक वकील को शांत कर दूसरों की भावनाओं को सच में सुनना।',
    'सरल शब्दों में: सामने वाले की बात का जवाब तैयार करने के बजाय उसकी भावना और अनुभव को ध्यान से समझना।',
    'सक्रिय श्रवण तब होता है जब हम बिना किसी पूर्वाग्रह या बीच में टोके सामने वाले की बात को पूरी तन्मयता से सुनते हैं।',
    'रोजर्स और फार्सन (1957) के अनुसार, जब व्यक्ति को महसूस होता है कि उसे समझा जा रहा है, तो उसका रक्षात्मक तनाव समाप्त हो जाता है।',
    [
      'समझने के लिए सुनें: उत्तर तैयार करने के बजाय सामने वाले की बात पर ध्यान दें',
      'सहानुभूतिपूर्ण पुष्टि: समाधान देने से पहले व्यक्ति की भावनाओं को स्वीकार करें',
      'तुरंत सलाह न दें: सलाह देने से पहले व्यक्ति को अपनी बात पूरी करने दें',
      '3-सेकंड का नियम: सामने वाले के रुकने के बाद 3 सेकंड ठहरकर ही बोलें',
    ]
  ),
  gu: createLocalizedActiveListenRecord(
    'gu',
    'સક્રિય શ્રવણ: સમજવા માટે સાંભળવું, દલીલ જીતવા માટે નહીં',
    'કાર્લ રોજર્સનું સંચાર વિજ્ઞાન: સામાવાળાની લાગણીઓને સમજીને સાંભળવાની કળા.',
    'સરળ શબ્દોમાં: સામેવાળાનો જવાબ આપવાને બદલે તેમની વાતને સાચા દિલથી સમજવી.',
    'જ્યારે આપણે પૂર્વગ્રહ વગર સાંભળીએ છીએ ત્યારે સંબંધો મજબૂત બને છે.',
    'તરત સલાહ આપવાને બદલે લાગણીઓને માન આપવું એ જ સાચું શ્રવણ છે.',
    ['ધ્યાનથી સાંભળો', 'વચ્ચે અટકાવશો નહીં', 'લાગણીઓ સમજો']
  ),
  mr: createLocalizedActiveListenRecord(
    'mr',
    'सक्रिय श्रवण: समजून घेण्यासाठी ऐकणे, वाद जिंकण्यासाठी नाही',
    'कार्ल रॉजर्सचे संभाषणशास्त्र: समोरच्या व्यक्तीच्या भावना समजून घेण्याची कला.',
    'सोप्या भाषेत: उत्तर देण्याची घाई न करता समोरच्याची व्यथा मनापासून ऐकणे.',
    'सक्रिय श्रवणामुळे परस्पर विश्वास वाढतो आणि विनाकारण होणारे वाद टळतात.',
    'सल्ला देण्याआधी समोरच्याला बोलू देणे आणि समजून घेणे गरजेचे आहे.',
    ['शांतपणे ऐका', 'सहानुभूती दाखवा', 'घाई करू नका']
  ),
  bn: createLocalizedActiveListenRecord(
    'bn',
    'সক্রিয় শ্রবণ: বোঝার জন্য শোনা, তর্ক জেতার জন্য নয়',
    'কার্ল রজার্সের যোগাযোগ বিজ্ঞান: অন্যের অনুভূতি মন দিয়ে উপলব্ধি করার কৌশল।',
    'সহজ কথায়: পাল্টা যুক্তি তৈরির বদলে অপর পক্ষের মনের কথা গভীর মনোযোগ দিয়ে শোনা।',
    'মন দিয়ে শুনলে অপর পক্ষ নিরাপদ বোধ করে এবং ভুল বোঝাবুঝি দূর হয়।',
    'তাড়াতাড়ি উপদেশ না দিয়ে আগে মন দিয়ে শুনুন।',
    ['মনোযোগ দিয়ে শুনুন', 'উপদেশ দেওয়া বন্ধ রাখুন', 'সহানুভূতি প্রকাশ করুন']
  ),
  ta: createLocalizedActiveListenRecord(
    'ta',
    'செயல்மிகு கேட்பல்: புரிந்து கொள்ளக் கேட்பது, வாதிட அல்ல',
    'கார்ல் ரோஜர்ஸ் தகவல்தொடர்பு உளவியல்: மற்றவர்களின் உணர்வுகளை மதிக்கும் கலை.',
    'எளிய சொற்களில்: பதில் சொல்லத் தயாராவதற்குப் பதிலாக மற்றவர்களின் உணர்வுகளைக் கூர்ந்து கவனிப்பது.',
    'முழு கவனத்துடன் கேட்கும்போது உறவுகளில் அமைதியும் புரிதலும் உண்டாகிறது.',
    'உடனடி ஆலோசனை வழங்குவதை விட உணர்வுகளைப் புரிந்துகொள்வது சிறந்தது.',
    ['முழுமையாகக் கேளுங்கள்', 'இடைமறிக்காதீர்கள்', 'உணர்வுகளை மதியுங்கள்']
  ),
  te: createLocalizedActiveListenRecord(
    'te',
    'చురుకైన వినికిడి: అర్థం చేసుకోవడానికి వినడం, వాదించడానికి కాదు',
    'కార్ల్ రోజర్స్ కమ్యూనికేషన్ సైన్స్: ఇతరుల భావాలను గౌరవిస్తూ వినే కళ.',
    'సులభమైన మాటల్లో: సమాధానం చెప్పాలనే తొందర లేకుండా ఎదుటివారి బాధను అర్థం చేసుకోవడం.',
    'శ్రద్ధగా వినడం వల్ల సంబంధాలు బలపడతాయి మరియు వివాదాలు తగ్గుతాయి.',
    'వెంటనే సలహాలు ఇవ్వకుండా ముందు వారి భావాలను అర్థం చేసుకోండి.',
    ['శ్రద్ధగా వినండి', 'మధ్యలో ఆపవద్దు', 'భావాలను గుర్తించండి']
  ),
  kn: createLocalizedActiveListenRecord(
    'kn',
    'ಸಕ್ರಿಯ ಆಲಿಸುವಿಕೆ: ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಆಲಿಸಿ, ವಾದಿಸಲು ಅಲ್ಲ',
    'ಕಾರ್ಲ್ ರೋಜರ್ಸ್ ಸಂವಹನ ವಿಜ್ಞಾನ: ಇತರರ ಭಾವನೆಗಳನ್ನು ಗ್ರಹಿಸುವ ಕಲೆ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಉತ್ತರಿಸುವ ಆತುರವಿಲ್ಲದೆ ಇನ್ನೊಬ್ಬರ ಮಾತನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು.',
    'ಗಮನವಿಟ್ಟು ಆಲಿಸುವುದರಿಂದ ಸಂಬಂಧಗಳಲ್ಲಿ ಆತ್ಮೀಯತೆ ಹೆಚ್ಚುತ್ತದೆ.',
    'ತಕ್ಷಣ ಸಲಹೆ ನೀಡುವ ಬದಲು ಭಾವನೆಗಳನ್ನು ಆಲಿಸಿ.',
    ['ಗಮನವಿಟ್ಟು ಆಲಿಸಿ', 'ತಡೆ ಮಾಡದಿರಿ', 'ಭಾವನೆಗಳನ್ನು ಗೌರವಿಸಿ']
  ),
  ml: createLocalizedActiveListenRecord(
    'ml',
    'ആക്ടീവ് ലിസണിംഗ്: മനസ്സിലാക്കാൻ കേൾക്കുക, വാദിക്കാൻ വേണ്ടിയല്ല',
    'കാൾ റോജേഴ്സ് ആശയവിനിമയ ശാസ്ത്രം: മറ്റുള്ളവരുടെ വികാരങ്ങളെ ഉൾക്കൊണ്ട് കേൾക്കുക.',
    'ലളിതമായി പറഞ്ഞാൽ: മറുപടി പറയാൻ ധൃതികൂട്ടാതെ മറ്റൊരാളുടെ പ്രശ്നം പൂർണ്ണമായി കേൾക്കുക.',
    'സൂക്ഷ്മമായി കേൾക്കുന്നത് പരസ്പര വിശ്വാസം വർദ്ധിപ്പിക്കുന്നു.',
    'ഉടനടി ഉപദേശം നൽകാതെ വികാരങ്ങളെ മനസ്സിലാക്കുക.',
    ['ശ്രദ്ധയോടെ കേൾക്കുക', 'തടസ്സപ്പെടുത്തരുത്', 'വികാരങ്ങളെ മാനിക്കുക']
  ),
  pa: createLocalizedActiveListenRecord(
    'pa',
    'ਸਰਗਰਮ ਸੁਣਨਾ: ਸਮਝਣ ਲਈ ਸੁਣਨਾ, ਬਹਿਸ ਜਿੱਤਣ ਲਈ ਨਹੀਂ',
    'ਕਾਰਲ ਰੋਜਰਸ ਸੰਚਾਰ ਵਿਗਿਆਨ: ਦੂਜਿਆਂ ਦੇ ਜਜ਼ਬਾਤਾਂ ਨੂੰ ਦਿਲੋਂ ਮਹਿਸੂਸ ਕਰਨ ਦਾ ਤਰੀਕਾ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਜਵਾਬ ਦੇਣ ਦੀ ਕਾਹਲ ਛੱਡ ਕੇ ਸਾਹਮਣੇ ਵਾਲੇ ਦੀ ਗੱਲ ਧਿਆਨ ਨਾਲ ਸੁਣਨਾ।',
    'ਧਿਆਨ ਨਾਲ ਸੁਣਨ ਨਾਲ ਰਿਸ਼ਤੇ ਮਜ਼ਬੂਤ ਹੁੰਦੇ ਹਨ ਅਤੇ ਗਲਤਫਹਿਮੀਆਂ ਦੂਰ ਹੁੰਦੀਆਂ ਹਨ।',
    'ਤੁਰੰਤ ਸਲਾਹ ਦੇਣ ਦੀ ਬਜਾਏ ਜਜ਼ਬਾਤਾਂ ਨੂੰ ਸਮਝੋ।',
    ['ਧਿਆਨ ਨਾਲ ਸੁਣੋ', 'ਵਿਚਾਲੇ ਨਾ ਟੋਕੋ', 'ਜਜ਼ਬਾਤ ਸਮਝੋ']
  ),
  ur: createLocalizedActiveListenRecord(
    'ur',
    'فعال سماعت: سمجھنے کے لیے سننا، بحث جیتنے کے لیے نہیں',
    'کارل راجرز کا ابلاغی علم: دوسرے کے جذبات کو کھلے دل سے سننے کا ہنر۔',
    'آسان الفاظ میں: جواب تیار کرنے کے بجائے سامنے والے کی بات کو غور اور ہمدردی سے سمجھنا۔',
    'توجہ سے سننا باہمی اعتماد اور تعلقات میں گہرائی پیدا کرتا ہے۔',
    'فوری مشورے دینے کے بجائے احساسات کی توثیق کریں۔',
    ['توجہ سے سنیں', 'بات نہ کاٹیں', 'ہمدردی کا مظاہرہ کریں']
  ),
  or: createLocalizedActiveListenRecord(
    'or',
    'ସକ୍ରିୟ ଶ୍ରବଣ: ବୁଝିବା ପାଇଁ ଶୁଣିବା, ଯୁକ୍ତି ଜିତିବା ପାଇଁ ନୁହେଁ',
    'କାର୍ଲ ରୋଜର୍ସଙ୍କ ଯୋଗାଯୋଗ ବିଜ୍ଞାନ: ଅନ୍ୟର ଭାବନାକୁ ହୃଦୟଙ୍ଗମ କରିବାର କଳା।',
    'ସହଜ ଭାଷାରେ: ଉତ୍ତର ଦେବା ପାଇଁ ବ୍ୟସ୍ତ ନ ହୋଇ ସାମ୍ନା ବ୍ୟକ୍ତିଙ୍କ କଥାକୁ ଧ୍ୟାନରେ ଶୁଣିବା।',
    'ଧ୍ୟାନ ସହକାରେ ଶୁଣିବା ଦ୍ୱାରା ସମ୍ପର୍କ ସୁଦୃଢ଼ ହୁଏ।',
    'ତୁରନ୍ତ ଉପଦେଶ ନ ଦେଇ ଆଗ ଭାବନାକୁ ବୁଝନ୍ତୁ।',
    ['ଧ୍ୟାନ ଦେଇ ଶୁଣନ୍ତୁ', 'ବାଧା ସୃଷ୍ଟି କରନ୍ତୁ ନାହିଁ', 'ଭାବନାକୁ ସମ୍ମାନ ଦିଅନ୍ତୁ']
  ),
  as: createLocalizedActiveListenRecord(
    'as',
    'সক্ৰিয় শ্ৰৱণ: বুজিবলৈ শুনা, তৰ্ক জিকিবলৈ নহয়',
    'কাৰ্ল ৰজাৰ্ছৰ যোগাযোগ বিজ্ঞান: আনৰ অনুভৱ হৃদয়ঙ্গম কৰাৰ কৌশল।',
    'সহজ কথাত: উত্তৰ দিয়াৰ খৰখেদা নকৰি আনৰ কথা মনোযোগেৰে শুনা।',
    'মনোযোগেৰে শুনিলে সম্পৰ্ক গাঢ় হয় আৰু ভুল বুজাবুজি দূৰ হয়।',
    'লগে লগে উপদেশ নিদি অনুভৱক গুৰুত্ব দিয়ক।',
    ['মনোযোগেৰে শুনক', 'মাজতে নাকাটিব', 'অনুভৱক সন্মান কৰক']
  ),
};
