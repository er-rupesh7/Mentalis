import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 10: Stonewalling
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - John Gottman (1993, 1994): The Four Horsemen of the Apocalypse (Criticism, Contempt, Defensiveness, Stonewalling)
 * - Gottman & Levenson (1992): Marital processes predictive of dissolution (Diffuse Physiological Arousal / DPA)
 * - Christensen & Heavey (1990): Gender and social structure in the demand/withdraw pattern of marital conflict
 * - Distinguishing Acute Physiological Flooding from Chronic Hostile Disengagement
 */

export const TOPIC_STONEWALLING_EN: MindTopicDetail = {
  id: 'stonewalling',
  categoryId: 'manipulation_awareness',
  slug: 'stonewalling',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 8,
  scientificConsensusTier: 'established',
  sortWeight: 10,
  viewCount: 7920,
  shareCount: 640,
  bookmarkCount: 1240,
  title: 'Stonewalling: Emotional Flooding vs. Punitive Communication Shutdown',
  subtitle: 'Understanding the Four Horsemen, Diffuse Physiological Arousal (>100 BPM), and breaking the demand-withdraw deadlock.',
  shortDescription: 'The habitual total withdrawal from interaction, dialogue, and emotional responsiveness during conflict, leaving the other party talking to a psychological brick wall.',
  oneLineExplanation: 'In simple terms: Shutting down like a stone wall and refusing to engage, talk, or resolve issues when conflict arises.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'Stonewalling occurs when one person completely disconnects during a conversation—turning their body away, refusing eye contact, crossing their arms, and offering total silence or dismissive shrugs. Identified by Dr. John Gottman as one of the four greatest predictors of relationship dissolution, stonewalling leaves the other person feeling utterly abandoned and enraged. However, neuroscience reveals a critical nuance: stonewalling is frequently driven by biological panic (heart rate exceeding 100 BPM) rather than pure malice, though when used chronically and punitively, it acts as emotional coercion.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'In relational communication science, stonewalling is the fourth "Horseman of the Apocalypse" (Gottman, 1994). It represents the complete withdrawal of emotional and verbal cues. The stonewaller tunes out, looks away, and refuses to respond. Physiologically, Gottman and Levenson discovered that stonewallers are almost always in a state of Diffuse Physiological Arousal (DPA): their sympathetic nervous system is in overdrive, heart rates surpass 100 beats per minute, and adrenaline floods their bloodstream, rendering complex empathetic listening neurologically impossible.',
  summary60s: 'There is a critical distinction between a regulated boundary and stonewalling. An emotionally healthy person says: "My heart is racing, I feel flooded, and I cannot think clearly. I need a 20-minute break to calm down, and then I want to finish this conversation." That is healthy self-soothing with a reconnection pledge. In contrast, stonewalling is unilateral, abrupt, and indefinite. The person folds their arms, stares at their phone or the wall, grunts, or walks away without assuring reconnection, creating an unbearable communicative vacuum that drives the other person into frantic agitation.',

  quickTakeaways: [
    'The 100 BPM Rule: Stonewalling is frequently triggered by physiological flooding where rational listening biologically shuts down',
    'The Demand-Withdraw Trap: The more one partner demands connection and answers, the deeper the stonewaller retreats into their shell',
    'Taking a Time-Out vs. Stonewalling: Healthy time-outs have a clear time boundary ("Let us resume at 4:30 PM"); stonewalling is an open-ended wall',
    'Somatic Soothing: The only physiological cure for flooding is 20+ minutes of complete cardiovascular calming (deep diaphragmatic breathing)',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Diffuse Physiological Arousal (DPA). When an individual feels attacked by criticism or contempt, the amygdala signals an existential emergency. Blood rushes to large muscle groups, breathing becomes shallow, and the prefrontal cortex goes offline. The stonewaller shuts down as an instinctive defense mechanism to avoid exploding or suffering a complete emotional collapse.',
  evolutionaryMechanism: 'The "Freeze" response in the mammalian fight-or-flight repertoire. When fighting or fleeing is deemed socially or physically impossible, playing dead or becoming rigid and silent reduces immediate predatory confrontation.',

  // SECTION E — WHY DO PEOPLE USE STONEWALLING?
  howItWorks: 'While many individuals stonewall out of genuine biological overwhelm, in toxic or high-conflict relationships it becomes an instrument of unilateral dominance. By refusing to speak, the stonewaller dictates the exact rules of the house: nothing can be addressed, no problem can be solved, and accountability is permanently blocked. The other person is forced to carry 100% of the emotional labor.',
  whereYouEncounterIt: 'Marital arguments, high-pressure family discussions, workplace performance evaluations where an employee shuts down completely, and adult child-parent conflicts.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Healthy Timeout vs. Hostile Stonewalling',
    description: 'How to tell whether your partner is regulating their nervous system or punishing you with an emotional wall.',
    analogySideA: {
      label: 'Healthy De-escalation Timeout',
      detail: '"I care about this conversation, but my heart is racing and I feel overwhelmed. I am stepping outside for 25 minutes to breathe, and I will be back at 5:00 PM to talk."',
    },
    analogySideB: {
      label: 'Toxic Stonewalling',
      detail: 'Stares at the wall, rolls eyes, crosses arms, ignores questions, picks up phone, or walks out of the house slamming the door with zero indication of when they will speak.',
    },
  },

  researchSummary: 'Dr. John Gottman\'s longitudinal research at the University of Washington "Love Lab" tracked hundreds of couples over decades. Couples where stonewalling became chronic showed an 80%+ divorce rate over time. Crucially, 85% of stonewallers in heterosexual relationships were men—a finding Gottman attributed to biological differences in male cardiovascular reactivity to emotional conflict and slower return to physiological baseline.',
  limitationsAndControversies: 'Context is paramount. Labelling someone a "stonewaller" when they are being screamed at, insulted, or subjected to hours of relentless berating is unjust. In those cases, shutting down is a natural self-preservation response to verbal abuse rather than manipulative obstruction.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Total physical disengagement during active discussions: looking down, folding arms, blank expression, or staring into space',
    'Responding to urgent relationship issues with dead silence, dismissive grunts ("Whatever", "Fine"), or monosyllables',
    'Walking out of the room or house abruptly without acknowledging what the other person is saying or stating when they will return',
    'Flipping on the television or scrolling social media in the middle of a serious conversation as if the other person does not exist',
    'Persistent refusal to revisit unresolved conflicts days or weeks later ("I am not discussing this again")',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_stone_01',
      scenarioType: 'indian_context',
      title: 'The Silent Sunday: Joint Family Accommodation Dispute',
      vignette: 'Ananya and Rohan live in Mumbai. Ananya wants to discuss setting financial boundaries with Rohan\'s extended relatives regarding an ongoing house renovation. Rohan feels immense guilt and anxiety about confronting his family. Whenever Ananya brings up the budget sheets, Rohan goes completely rigid. He turns his back to her, looks at his laptop screen, and says nothing. When Ananya raises her voice in desperation—"Rohan, please talk to me, we are drowning in debt!"—Rohan turns off his phone, lies down, pulls a blanket over his head, and remains unresponsive until the next morning.',
      breakdownAnalysis: 'Rohan is caught in severe physiological flooding compounded by cultural guilt. Rather than vocalizing his helplessness, he retreats into an impenetrable wall. Ananya perceives this as cruel indifference and escalates her tone (the Demand-Withdraw cycle), which further petrifies Rohan.',
      recommendedAction: 'Ananya must de-escalate the physical atmosphere: "Rohan, we don\'t have to solve the whole budget right now. Put the sheets away. Let us sit quietly for half an hour, drink tea, and talk for just ten minutes about one small line item tomorrow."',
    },
    {
      id: 'scen_stone_02',
      scenarioType: 'workplace',
      title: 'The Glazed-Over Performance Review',
      vignette: 'A manager attempts to give constructive feedback to a senior engineer whose code reviews have been harsh and dismissive. Five minutes into the meeting, the engineer slumps into his chair, stares at the window, stops nodding, and answers every question with: "Whatever you say." When asked for his perspective, he stares blankly for ten seconds and mumbles: "Nothing. You\'re the manager."',
      breakdownAnalysis: 'The engineer has stonewalled to neutralize perceived threat and protect his professional ego. He has cognitively checked out to avoid feeling criticized.',
      recommendedAction: 'The manager should break the pattern by changing the posture and medium: "I notice you are disengaging right now. Let us pause. I don\'t want this to feel like an interrogation. Take 24 hours to read through these three pull request notes, and write down your own reflections for tomorrow morning."',
    },
  ],

  examples: [
    {
      id: 'ex_stone_01',
      domain: 'relationships',
      displayOrder: 1,
      title: 'The Phone Screen Barrier',
      description: 'Pulling out a smartphone and reading social media feeds while a partner is crying and expressing hurt feelings.',
      takeaway: 'Using a digital device as a physical shield signals that the other person\'s emotional pain is worthless.',
    },
    {
      id: 'ex_stone_02',
      domain: 'workplace',
      displayOrder: 2,
      title: 'The Ghosting Colleague',
      description: 'Ignoring Slack messages, emails, and calendar invites about a blocked sprint ticket because of interpersonal friction with the scrum master.',
      takeaway: 'Professional stonewalling paralyzes organizational velocity and transfers work onto peers.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'To break stonewalling, understand that escalating volume or cornering the person will ONLY deepen their neurological lockdown. If someone is stonewalling, their heart rate is likely 100+ BPM. You cannot reason with an overflowing nervous system. Pause the interaction immediately, mandate a 20-to-30 minute physical separation, engage in parasympathetic self-soothing (breathing, drinking water, walking), and strictly agree on an exact resume time.',
  psychologicalDefenses: [
    'Break the Demand-Withdraw Spiral: Stop chasing them from room to room; chasing guarantees they will build the wall higher',
    'The 20-Minute Biological Reset: Scientific studies show cortisol and adrenaline take a minimum of 20 minutes to return to resting baseline',
    'Soften the Startup: Gottman proves that 96% of conversations end the way they begin; initiate discussions with gentle "I" observations rather than accusatory "You"',
    'Acknowledge the Overwhelm: State out loud: "I see that you are flooded right now. We are pausing for 30 minutes, and we will resume at 6:00 PM"',
  ],

  commonMisconceptions: [
    {
      misconception: 'Stonewallers don\'t care about their partners and feel zero emotion.',
      reality: 'Neurological data reveals the exact opposite: stonewallers are often internally panicking, experiencing extreme emotional turmoil, and their silence is a desperate attempt to not say something destructive or completely break down.',
    },
    {
      misconception: 'The best way to get through a stone wall is to keep pressing until they finally talk.',
      reality: 'Pressing a flooded nervous system triggers a fight reaction (screaming, physical aggression) or deeper dissociation. Lowering the pressure is the only path to reconnection.',
    },
  ],

  reflectionPrompt: 'When conflict arises, do you feel an urge to build a wall and shut down, or do you become frantic and demand immediate resolution? How does your physiological state influence that choice?',

  interactiveScenario: {
    id: 'interactive_stonewalling_01',
    topicId: 'stonewalling',
    scenarioTitle: 'Navigating the Brick Wall: The Midnight Argument',
    scenarioDescription: 'It is 11:30 PM. You and your partner are arguing about holiday travel. Your partner suddenly goes silent, stares at the floor, folds their arms, and refuses to respond to your questions. You feel your blood boiling.',
    vignetteSourceType: 'family_relationships',
    options: [
      {
        id: 'opt_1',
        text: 'Stand in front of them, raise your voice, and demand: "Look at me when I am talking to you! You always do this! Answer me right now!"',
        isCorrect: false,
        cognitiveTakeaway: 'This intensifies their DPA flooding past 110 BPM and cements the demand-withdraw trap.',
      },
      {
        id: 'opt_2',
        text: 'Acknowledge the flooding, call a timeout, and set a morning reconnection: "I can see both of us are overwhelmed and exhausted. Let\'s stop talking for tonight, sleep, and discuss this tomorrow at 9:00 AM over breakfast."',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of Gottman de-escalation! Lowers cardiovascular arousal, eliminates night-time fatigue, and guarantees reconnection.',
      },
      {
        id: 'opt_3',
        text: 'Storm out of the house, turn off your phone, and check into a hotel without telling them where you are to teach them a lesson.',
        isCorrect: false,
        cognitiveTakeaway: 'Retaliatory silent treatment that escalates emotional hostility into relationship-threatening territory.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_stone_01',
      questionType: 'multiple_choice',
      prompt: 'According to Dr. John Gottman\'s research, what physiological marker typically accompanies stonewalling?',
      options: [
        { id: 'opt_a', text: 'An abnormally low heart rate below 50 BPM indicating profound boredom', isCorrect: false },
        { id: 'opt_b', text: 'Diffuse Physiological Arousal (DPA) with a heart rate exceeding 100 BPM and adrenaline surge', isCorrect: true, feedbackText: 'Correct! Stonewallers are almost always in physiological overdrive, not emotional apathy.' },
        { id: 'opt_c', text: 'Increased prefrontal cortex blood flow enabling rapid analytical problem solving', isCorrect: false },
      ],
      cognitiveTakeaway: 'Stonewalling is fundamentally rooted in nervous system flooding and threat defense.',
    },
    {
      id: 'q_stone_02',
      questionType: 'scenario_analysis',
      prompt: 'What is the primary difference between a healthy emotional timeout and toxic stonewalling?',
      options: [
        { id: 'opt_a', text: 'A healthy timeout is accompanied by a declared duration and a promise to resume ("Let us take 25 minutes and talk at 5:00 PM"); stonewalling is an open-ended refusal to communicate', isCorrect: true, feedbackText: 'Spot on! The reconnection pledge and clear boundary distinguish self-regulation from abandonment.' },
        { id: 'opt_b', text: 'A healthy timeout involves shouting your feelings first before walking away', isCorrect: false },
        { id: 'opt_c', text: 'There is no difference; all forms of silence during conflict are toxic', isCorrect: false },
      ],
      cognitiveTakeaway: 'Boundaries include commitment to resolution; stonewalling is unilateral avoidance.',
    },
  ],

  references: [
    {
      citation: 'Gottman, J. M. (1994). What predicts divorce? The relationship between marital processes and marital outcomes. Lawrence Erlbaum Associates.',
      doiOrUrl: 'https://doi.org/10.4324/9780203772843',
      relevance: 'Seminal documentation of the Four Horsemen of the Apocalypse and the predictive power of stonewalling.',
      displayOrder: 1,
    },
    {
      citation: 'Gottman, J. M., & Levenson, R. W. (1992). Marital processes predictive of dissolution: Expansion on analyzing interaction. Journal of Personality and Social Psychology, 63(2), 221–233.',
      doiOrUrl: 'https://doi.org/10.1037/0022-3514.63.2.221',
      relevance: 'Groundbreaking research on autonomic nervous system arousal (DPA) during couple conflict.',
      displayOrder: 2,
    },
  ],

  tags: ['Manipulation Awareness', 'Relationships', 'Stonewalling', 'Gottman', 'Communication', 'Emotional Flooding'],
  relatedTopics: [
    { topicId: 'silent_treatment', slug: 'silent-treatment', title: 'Silent Treatment', relationshipType: 'frequently_confused_with' },
    { topicId: 'healthy_boundaries', slug: 'healthy-boundaries', title: 'Healthy Boundaries', relationshipType: 'counteracted_by' },
    { topicId: 'emotional_regulation', slug: 'emotional-regulation', title: 'Emotional Regulation', relationshipType: 'foundational_to' },
  ],
  seoTitle: 'Stonewalling in Relationships: Why People Shut Down & How to Respond | Mentalab Mind',
  seoDescription: 'Understand stonewalling through Gottman psychology: physiological flooding (>100 BPM), the demand-withdraw trap, and 4 evidence-based ways to reconnect.',
  canonicalUrl: '/mind/manipulation-awareness/stonewalling',
  ogImageUrl: '/images/mind/stonewalling.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Stonewalling represents the complete cessation of verbal and non-verbal feedback during interpersonal conflict, driven by physiological flooding.',
};

export const TOPIC_STONEWALLING_HINGLISH: MindTopicDetail = {
  ...TOPIC_STONEWALLING_EN,
  title: 'Stonewalling: Jhagde Me Deewar Ban Jaana Aur Baat Karna Band Kar Dena',
  subtitle: 'Emotional Flooding vs. Saza Wala Silence: John Gottman ke 4 Horsemen aur 100 BPM rule ko samjhein.',
  shortDescription: 'Jab jhagde ke dauran koi insaan bilkul patthar ban jaye, aankhein chura le aur koi jawab na de, jisse saamne wala bilkul helpless mehsus kare.',
  oneLineExplanation: 'Simple shabdon me: Baat karte waqt dimaag aur mooh band karke patthar ki deewar ban jana.',

  summary30s: 'Stonewalling tab hoti hai jab jhagde ke dauran ek person poori tarah detach ho jata hai—na aankhein milata hai, na koi jawab deta hai, bas deewar ko dekhta rehta hai ya phone chalane lagta hai. Dr. John Gottman ke mutabiq yeh rishte tootne ka sabse bada kaaran hai. Lekin neuroscience batati hai ki aksar yeh jaanbujhkar nahi hota—insaan ka dil 100 BPM se tez dhadakne lagta hai (Emotional Flooding) aur uska dimaag freeze ho jata hai.',
  coreConcept: 'Gottman ke mutabiq stonewalling 4th Horseman hai. Insaan itna overwhelm ho jata hai ki uska sympathetic nervous system fight-or-flight freeze mode me chala jata hai. Lekin agar koi chronic tareeqe se accountability se bachne ke liye deewar banta hai, toh yeh samne wale ke liye torture ban jata hai.',
  summary60s: 'Ek healthy boundary aur stonewalling me bohot bada farq hai. Healthy partner kehta hai: "Mera dimaag abhi kaam nahi kar raha, main nervous ho raha hoon. Mujhe 20 minute ka break chahiye, phir hum 5 baje baat karenge." Yeh self-care hai. Lekin stonewalling me insaan bina kuch bole aadhi baat me uthkar chala jata hai ya bilkul chup hokar phone dekhne lagta hai, jisse saamne wale ka gussa aur badh jata hai (Demand-Withdraw cycle).',

  quickTakeaways: [
    '100 BPM Rule: Stonewalling aksar dimaag ke freeze hone ki wajah se hoti hai na ki laaparwahi se',
    'Demand-Withdraw Trap: Aap jitna gusse me chillayenge, saamne wala utna hi gehra deewar ke peeche chhipega',
    'Healthy Break vs. Stonewalling: Healthy break me time fix hota hai ("20 minute baad baat karenge"); stonewalling me samne wala laachar chhod diya jata hai',
    '20 Minute Rule: Flooded dimaag ko calm hone ke liye kam se kam 20 minute ka aaram chahiye',
  ],

  whyItHappens: 'Diffuse Physiological Arousal (DPA). Jab insaan ko lagta hai ki uspar attack ho raha hai, toh adrenaline aur cortisol release hota hai. Prefrontal cortex (thinking brain) band ho jata hai aur body freeze mode me chali jaati hai.',
  evolutionaryMechanism: 'Jungli janwaron ke saamne "Play Dead" ya freeze ho jana survival ka tareeqa tha. Jab na lad sakte the na bhaag sakte the, chup ho jana jaan bachata tha.',

  howItWorks: 'Ghar me kisi topic par debate hoti hai. Ek partner bolna chahta hai, doosra dar kar deewar ban jata hai. Pehla partner aur chillata hai, doosra aur chup ho jata hai. Aakhir me mudda kabhi solve nahi hota.',
  howToRespond: 'Chillana band kijiye. Pata kijiye ki saamne wala flooded hai. 20-30 minute ka break lijiye: "Main dekh raha hoon ki hum dono thak chuke hain. Hum 30 minute baad shaam 6 baje dubara baat karenge." Time fix karna zaroori hai.',

  reflectionPrompt: 'Jab aapka kisi se tezz jhagda hota hai, kya aap chup hokar patthar ban jaate hain ya zor-zor se bolne lagte hain? Aapki body us waqt kaisa feel karti hai?',
  seoTitle: 'Stonewalling Kya Hai? Rishto Me Chup Ho Jaane Ki Psychology | Mentalab Mind',
  seoDescription: 'Janiye kyu log jhagde me deewar ban jaate hain. Gottman research, emotional flooding aur demand-withdraw cycle ko todne ke practical tareeqe.',
  canonicalUrl: '/mind/manipulation-awareness/stonewalling',
};

function createLocalizedStonewallRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_STONEWALLING_EN,
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

export const TOPIC_STONEWALLING: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_STONEWALLING_EN,
  hinglish: TOPIC_STONEWALLING_HINGLISH,
  hi: createLocalizedStonewallRecord(
    'hi',
    'स्टोनवॉलिंग (Stonewalling): भावनात्मक अवरोध और बातचीत से पूर्ण पलायन',
    'जॉन गॉटमैन के फोर हॉर्समेन, शारीरिक अति-उत्तेजना (>100 BPM) और संवाद के गतिरोध को तोड़ना।',
    'सरल शब्दों में: विवाद के समय पूरी तरह पत्थर की दीवार बन जाना और बातचीत या समाधान से इंकार करना।',
    'स्टोनवॉलिंग तब होती है जब कोई व्यक्ति संघर्ष के दौरान पूरी तरह संवाद बंद कर देता है—नज़रें फेर लेना, हाथ बांधकर बैठ जाना या चुपचाप चले जाना। गॉटमैन के अनुसार यह रिश्ते टूटने का बहुत बड़ा संकेत है। कई बार यह अत्यधिक घबराहट (हार्ट रेट > 100) के कारण होता है।',
    'गॉटमैन (1994) के अनुसार, शारीरिक रूप से उत्तेजित व्यक्ति तार्किक रूप से सोचने में असमर्थ हो जाता है; इसे शांत करने के लिए 20 मिनट का ब्रेक आवश्यक है।',
    [
      '100 BPM का नियम: स्टोनवॉलिंग अक्सर जैविक घबराहट के कारण होती है',
      'मांग-पलायन का चक्र: जितना दबाव डालेंगे, सामने वाला उतना ही पीछे हटेगा',
      'स्वस्थ विराम बनाम स्टोनवॉलिंग: स्वस्थ विराम में लौटने का समय तय होता है',
      '20 मिनट का नियम: तंत्रिका तंत्र को शांत होने में कम से कम 20 मिनट लगते हैं',
    ]
  ),
  gu: createLocalizedStonewallRecord(
    'gu',
    'સ્ટોનવોલિંગ: વિવાદમાં પથ્થરની દીવાલ બની જવું અને સંવાદ બંધ કરવો',
    'ગૉટમેન સંશોધન, હૃદયના ધબકારા (>100 BPM) અને વાતચીત બંધ કરવાના મનોવિજ્ઞાનને સમજો.',
    'સરળ શબ્દોમાં: વાતચીત દરમિયાન સાવ ચૂપ થઈને પથ્થરની જેમ બેસી રહેવું.',
    'જ્યારે વ્યક્તિ ચર્ચામાંથી સાવ ખસી જાય છે અને કોઈ જવાબ આપતી નથી, ત્યારે તેને સ્ટોનવોલિંગ કહેવાય છે.',
    'શાંતિપૂર્ણ રીતે 20 મિનિટનો વિરામ લેવો એ જ આનો સાચો ઉપાય છે.',
    ['દીવાલ ન બનો', '20 મિનિટનો વિરામ લો', 'સંવાદ ચાલુ રાખો']
  ),
  mr: createLocalizedStonewallRecord(
    'mr',
    'स्टोनवॉलिंग: वादात भिंत बनणे आणि संवाद पूर्णपणे नाकारणे',
    'गॉटमनचे फोर हॉर्समेन, शारीरिक ताण (>100 BPM) आणि वादातील मौनाचा प्रतिकार.',
    'सोप्या भाषेत: चर्चेच्या वेळी पूर्णपणे गप्प बसून संवाद तोडणे.',
    'स्टोनवॉलिंगमध्ये व्यक्ती कोणत्याही चर्चेला प्रतिसाद न देता स्वतःभोवती मानसिक भिंत उभारते.',
    'शांत होण्यासाठी 20 मिनिटांचा वेळ देणे आणि नंतर पुन्हा चर्चा करणे हाच उपाय आहे.',
    ['शारीरिक ताण ओळखा', '20 मिनिटांचा ब्रेक घ्या', 'संवादाची दारे उघडी ठेवा']
  ),
  bn: createLocalizedStonewallRecord(
    'bn',
    'স্টোনওয়ালিং: বিরোধের সময় পাথরের দেয়াল হয়ে যাওয়া ও যোগাযোগ বন্ধ করা',
    'গটম্যানের গবেষণা, শারীরিক উদ্বেগ (>১০০ বিপিএম) এবং সম্পর্কের নীরবতার সমাধান।',
    'সহজ কথায়: ঝগড়ার সময় সম্পূর্ণ চুপ হয়ে গিয়ে পাথরের মতো প্রতিক্রিয়া না দেখানো।',
    'এটি ঘটে যখন একজন ব্যক্তি আলোচনায় সম্পূর্ণ অংশ নেওয়া বন্ধ করে দেয় এবং অপর পক্ষকে অসহায় ফেলে রাখে।',
    '২০ মিনিটের শান্ত বিরতি নিয়ে পুনরায় কথা বলাই বিজ্ঞানসম্মত সমাধান।',
    ['১০০ বিপিএম নিয়ম', 'চাপ প্রয়োগ করবেন না', 'সময় নির্দিষ্ট করে বিরতি নিন']
  ),
  ta: createLocalizedStonewallRecord(
    'ta',
    'ஸ்டோன்வாலிங்: வாக்குவாதத்தில் சுவராக மாறுதல் மற்றும் பேச்சை நிறுத்துதல்',
    'காட்மேன் ஆராய்ச்சி, இதயத் துடிப்பு (>100 BPM) மற்றும் உரையாடல் முடக்கத்தை சரிசெய்தல்.',
    'எளிய சொற்களில்: பிரச்சனையின் போது ஒரு கல் சுவரைப் போல எதற்கும் பதிலளிக்காமல் மௌனமாக இருப்பது.',
    'ஒருவர் பேச மறுத்து முகத்தைத் திருப்பிக் கொள்வது ஸ்டோன்வாலிங் ஆகும்.',
    '20 நிமிட அமைதியான இடைவெளி எடுத்து மீண்டும் பேசுவதே தீர்வு.',
    ['உடல் பதற்றத்தை உணருங்கள்', '20 நிமிட இடைவெளி', 'அமைதியான உரையாடல்']
  ),
  te: createLocalizedStonewallRecord(
    'te',
    'స్టోన్‌వాలింగ్: గొడవల్లో గోడలా మారి మాట్లాడటం మానేయడం',
    'గాట్‌మ్యాన్ పరిశోధన, గుండె వేగం (>100 BPM) మరియు సంభాషణ నిలిపివేతను అర్థం చేసుకోవడం.',
    'సులభమైన మాటల్లో: మాట్లాడేటప్పుడు స్పందించకుండా రాతి గోడలా ఉండిపోవడం.',
    'గొడవ జరుగుతున్నప్పుడు ఏమాత్రం స్పందించకుండా మౌనంగా ఉండటాన్ని స్టోన్‌వాలింగ్ అంటారు.',
    '20 నిమిషాల విరామం తీసుకుని ప్రశాంతంగా మళ్లీ మాట్లాడాలి.',
    ['శరీర ఒత్తిడిని గుర్తించండి', '20 నిమిషాల విరామం', 'సంభాషణను కొనసాగించండి']
  ),
  kn: createLocalizedStonewallRecord(
    'kn',
    'ಸ್ಟೋನ್ವಾಲಿಂಗ್: ಜಗಳದಲ್ಲಿ ಗೋಡೆಯಂತೆ ವರ್ತಿಸಿ ಸಂಭಾಷಣೆ ನಿಲ್ಲಿಸುವುದು',
    'ಗಾಟ್‌ಮನ್ ಸಂಶೋಧನೆ, ಹೃದಯ ಬಡಿತ (>100 BPM) ಮತ್ತು ಸಂವಹನ ಸ್ಥಗಿತದ ಪರಿಹಾರ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಸಮಸ್ಯೆಯ ಸಂದರ್ಭದಲ್ಲಿ ಕಲ್ಲಿನ ಗೋಡೆಯಂತೆ ಮೌನವಾಗಿ ಕೂರುವುದು.',
    'ಮಾತುಕತೆಯಲ್ಲಿ ಯಾವುದೇ ಪ್ರತಿಕ್ರಿಯೆ ನೀಡದೆ ದೂರ ಸರಿಯುವುದೇ ಸ್ಟೋನ್ವಾಲಿಂಗ್.',
    '20 ನಿಮಿಷಗಳ ವಿರಾಮ ತೆಗೆದುಕೊಂಡು ಮತ್ತೆ ಮಾತನಾಡುವುದು ಉತ್ತಮ.',
    ['ಒತ್ತಡ ಗುರುತಿಸಿ', '20 ನಿಮಿಷ ವಿರಾಮ', 'ಮತ್ತೆ ಮಾತನಾಡಿ']
  ),
  ml: createLocalizedStonewallRecord(
    'ml',
    'സ്റ്റോൺവാളിംഗ്: തർക്കങ്ങളിൽ മതിൽ പോലെ നിന്ന് സംസാരം ഒഴിവാക്കൽ',
    'ഗോട്ട്മാൻ പഠനങ്ങൾ, ഹൃദയമിടിപ്പ് (>100 BPM), നിശബ്ദതയുടെ മറ മറികടക്കൽ.',
    'ലളിതമായി പറഞ്ഞാൽ: പ്രശ്നമുണ്ടാകുമ്പോൾ യാതൊരു പ്രതികരണവുമില്ലാതെ കന്മതിൽ പോലെ മാറിയിരിക്കുക.',
    'സംഭാഷണങ്ങളിൽ നിന്ന് പൂർണ്ണമായി പിൻവാങ്ങുന്ന രീതിയാണിത്.',
    '20 മിനിറ്റ് സമയം എടുത്ത് ശാന്തമായി വീണ്ടും സംസാരിക്കുക.',
    ['ശാരീരിക സമ്മർദ്ദം തിരിച്ചറിയുക', '20 മിനിറ്റ് ഇടവേള', 'തുറന്ന സംസാരം']
  ),
  pa: createLocalizedStonewallRecord(
    'pa',
    'ਸਟੋਨਵਾਲਿੰਗ: ਝਗੜੇ ਦੌਰਾਨ ਕੰਧ ਬਣ ਜਾਣਾ ਅਤੇ ਗੱਲਬਾਤ ਬੰਦ ਕਰਨਾ',
    'ਗੌਟਮੈਨ ਰਿਸਰਚ, ਦਿਲ ਦੀ ਧੜਕਣ (>100 BPM) ਅਤੇ ਖਾਮੋਸ਼ੀ ਦੇ ਘੇਰੇ ਨੂੰ ਤੋੜਨਾ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਬਹਿਸ ਵੇਲੇ ਪੱਥਰ ਦੀ ਕੰਧ ਵਾਂਗ ਬੈਠ ਜਾਣਾ ਤੇ ਕੋਈ ਜਵਾਬ ਨਾ ਦੇਣਾ।',
    'ਸਟੋਨਵਾਲਿੰਗ ਵਿੱਚ ਵਿਅਕਤੀ ਗੱਲ ਕਰਨ ਤੋਂ ਪੂਰੀ ਤਰ੍ਹਾਂ ਇਨਕਾਰ ਕਰ ਦਿੰਦਾ ਹੈ।',
    '20 ਮਿੰਟ ਦਾ ਸ਼ਾਂਤ ਬ੍ਰੇਕ ਲੈ ਕੇ ਮੁੜ ਗੱਲਬਾਤ ਸ਼ੁਰੂ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ।',
    ['ਤਣਾਅ ਨੂੰ ਸਮਝੋ', '20 ਮਿੰਟ ਦਾ ਬ੍ਰੇਕ', 'ਸ਼ਾਂਤ ਗੱਲਬਾਤ']
  ),
  ur: createLocalizedStonewallRecord(
    'ur',
    'اسٹون والنگ: بحث میں دیوار بن جانا اور بات چیت سے مکمل فرار',
    'جان گاٹمین کی تحقیق، دل کی تیز دھڑکن اور تعلقات میں جمود کو توڑنے کا سائنسی طریقہ۔',
    'آسان الفاظ میں: اختلاف کے وقت پتھر کی دیوار کی طرح بے حس ہو جانا اور کوئی جواب نہ دینا۔',
    'اسٹون والنگ میں انسان گفتگو سے مکمل لاتعلق ہو کر سامنے والے کو اذیت میں مبتلا کر دیتا ہے۔',
    '20 منٹ کا وقفہ لے کر اعصاب پرسکون ہونے کے بعد بات کرنا بہترین حل ہے۔',
    ['اعصابی دباؤ پہچانیں', '20 منٹ کا وقفہ', 'دوبارہ پرامن بات چیت']
  ),
  or: createLocalizedStonewallRecord(
    'or',
    'ଷ୍ଟୋନୱାଲିଂ: କଳିଗୋଳ ସମୟରେ କାନ୍ଥ ଭଳି ନୀରବ ରହି କଥା ବନ୍ଦ କରିବା',
    'ଗଟମ୍ୟାନଙ୍କ ଗବେଷଣା, ହୃଦସ୍ପନ୍ଦନ (>୧୦୦ BPM) ଏବଂ ସମ୍ପର୍କର ସମସ୍ୟାର ସମାଧାନ।',
    'ସହଜ ଭାଷାରେ: କଥାବାର୍ତ୍ତା ବେଳେ କୌଣସି ଉତ୍ତର ନ ଦେଇ ନିର୍ବାକ ହୋଇ ରହିବା।',
    'ଏହି ସମୟରେ ବ୍ୟକ୍ତି ସମ୍ପୂର୍ଣ୍ଣ ଚୁପ୍ ହୋଇ ଅନ୍ୟକୁ ଅଣଦେଖା କରେ।',
    '୨୦ ମିନିଟର ବିରାମ ନେଇ ପୁନଃ କଥା ହେବା ଉଚିତ।',
    ['ଚାପ ଚିହ୍ନନ୍ତୁ', '୨୦ ମିନିଟ ବିରାମ', 'ଶାନ୍ତ କଥାବାର୍ତ୍ତା']
  ),
  as: createLocalizedStonewallRecord(
    'as',
    'ষ্টোনৱালিং: সংঘাতৰ সময়ত শিলৰ বেৰৰ দৰে মৌন হৈ যোগাযোগ বন্ধ কৰা',
    'গটমেনৰ গৱেষণা, শাৰীৰিক উত্তেজনা আৰু মৌনতাৰ গতিৰোধ ভঙাৰ কৌশল।',
    'সহজ কথাত: কাজিয়াৰ সময়ত শিলৰ দৰে হৈ একো উত্তৰ নিদিয়া।',
    'আলোচনাৰ পৰা সম্পূৰ্ণ আঁতৰি থকাটোৱেই ষ্টোনৱালিং।',
    '২০ মিনিটৰ বিৰতি লৈ পুনৰ শান্তভাৱে আলোচনা কৰক।',
    ['শাৰীৰিক চাপ চিনাক্ত কৰক', '২০ মিনিটৰ বিৰতি', 'পুনৰ সংযোগ']
  ),
};
