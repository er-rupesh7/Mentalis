import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: The Actor-Observer Bias: Situational Mercy for Myself, Character Judgment for You
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Jones & Nisbett (1971): The actor and the observer: Divergent perceptions of the causes of behavior. General Learning Press
 * - Malle (2006): The actor-observer asymmetry in attribution: A (surprising) meta-analysis. Psychological Bulletin
 * - Watson (1982): The actor and the observer: How are their perceptions of causality divergent? Psychological Bulletin
 */

export const TOPIC_ACTOR_OBSERVER_BIAS_EN: MindTopicDetail = {
  id: 'actor_observer_bias',
  categoryId: 'cognitive_biases',
  slug: 'actor-observer-bias',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 20,
  viewCount: 7890,
  shareCount: 610,
  bookmarkCount: 1340,
  title: 'The Actor-Observer Bias: Situational Mercy for Myself, Character Judgment for You',
  subtitle: 'The attribution asymmetry where we blame our own missteps on external pressure, but blame others on internal flaws.',
  shortDescription: 'The tendency to attribute one own actions to external situational factors while attributing other people behaviors to their internal disposition or personality.',
  oneLineExplanation: 'When I am snappy, I am sleep-deprived and stressed; when you are snappy, you are an unkind, toxic person.',

  summary30s: 'The actor-observer bias is the perceptual asymmetry at the heart of interpersonal conflict. When we act, our eyes look outward at the environment—we feel the pounding headache, the pressing client deadline, and the oppressive humidity. When we observe another person, our eyes focus entirely on their physical body—we do not feel their invisible pressures, so we assume their behavior reflects their permanent moral character.',

  coreConcept: 'First formulated by Edward Jones and Richard Nisbett in 1971, the actor-observer asymmetry expands on attribution theory. As an "Actor," your conscious attention is focused on situational constraints. As an "Observer," your perceptual field is dominated by the person in front of you. This visual divergence causes us to extend profound contextual empathy to ourselves while treating others as cartoon caricatures driven entirely by internal malice or laziness.',
  summary60s: 'Consider highway driving. If you abruptly swerve across two lanes without signaling, you know that your GPS just warned you of a sudden exit closure and your infant child was crying in the backseat—you view your driving as a regrettable necessity forced by the situation. Five minutes later, when another driver cuts you off in the exact same manner, you do not wonder what emergency they are managing; you honk furiously and brand them an aggressive, reckless maniac. The actor-observer bias makes hypocrites of us all.',

  quickTakeaways: [
    'Perceptual Focus: We look outward at the situation; when watching others, we look inward at their person',
    'Asymmetry: "My mistakes are caused by stress and bad luck; your mistakes reveal who you really are"',
    'Fuel for Resentment: The primary driver of chronic marital and organizational grudges',
    'Perspective-Taking Drill: Actively ask: "What invisible environmental pressure would make a rational person act this way?"',
  ],

  whyItHappens: 'Differential availability of information. You have continuous internal access to your own private thoughts, somatic sensations, intentions, and historical context. You have zero direct access to another person internal monologue, so your brain defaults to simple dispositional labeling.',
  evolutionaryMechanism: 'Rapid social categorization kept ancestral humans safe. Assessing an outsider character quickly ("is he hostile or trustworthy?") was life-or-death; calculating his complex daily stress was computationally wasteful and dangerous.',

  howItWorks: 'Visual salience drives attribution. In any interaction, whatever dominates your visual field is assigned causal responsibility. For an observer, the other person is the brightest, most dynamic element in the room, making them the natural target for blame.',
  whereYouEncounterIt: 'Road rage incidents, workplace performance reviews, marital disputes about chores, roommate arguments about unwashed dishes, and political polarization.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Actor vs. Observer Attribution',
    description: 'How the exact same behavior is judged depending on whether you did it or observed it.',
    analogySideA: {
      label: 'When I Miss a Deadline (Actor)',
      detail: '"My internet was throttled, the requirements changed midway, and I had food poisoning."',
    },
    analogySideB: {
      label: 'When You Miss a Deadline (Observer)',
      detail: '"You lack work ethic, have poor time management, and do not care about the team."',
    },
  },

  researchSummary: 'Bertram Malle (2006) conducted a landmark meta-analysis across 173 studies in Psychological Bulletin. He refined Jones & Nisbett original theory, discovering that the asymmetry is strongest for negative events. When bad things happen, people aggressively blame external circumstance for their own faults while blaming internal character for others faults.',
  limitationsAndControversies: 'For highly positive events, the pattern often reverses due to the self-serving bias: people credit their own internal character for success while attributing others success to luck.',
  commonMisconceptions: 'Common myth: "If I am generally an empathetic person, I do not exhibit the actor-observer bias." Reality: Because the bias is rooted in raw sensory salience, even professional therapists and psychologists must actively exert deliberate effort to override it in their personal relationships.',

  howToRecognize: [
    'Labeling someone as "lazy" when they arrive late, but citing "unprecedented traffic" when you arrive late',
    'Assuming a colleague asked for an extension because they procrastinated, while asking for your own extension due to "unavoidable complexities"',
    'Feeling misunderstood when others judge your harsh tone, but immediately writing off someone else who uses a harsh tone',
    'Describing yourself in personality tests using phrases like "it depends on the situation," while describing friends using rigid labels like "he is neurotic"',
  ],

  scenarios: [
    {
      id: 'scen_aob_01',
      scenarioType: 'indian_context',
      title: 'The Flatmate Dispute in Marathahalli, Bengaluru',
      vignette: 'Divya and Priya shared a flat in Marathahalli. On Wednesday evening, Divya noticed a pile of unwashed utensils in the sink and snapped at Priya: "You are so irresponsible and inconsiderate; you always leave chores for others." Priya responded defensively. Two days later, Divya herself left her lunch tiffin unwashed on the counter and rushed out to catch an office cab. When Priya pointed it out, Divya replied: "I had an emergency standup meeting and the cab driver was canceling the ride! You can not compare that to your laziness."',
      breakdownAnalysis: 'Divya exhibited textbook actor-observer bias. She attributed Priya unwashed dishes to a permanent character flaw (irresponsibility), but attributed her own identical behavior to pressing situational demands (emergency meeting, cab cancellation).',
      recommendedAction: 'Practice Hanlon Razor and situational re-framing: Before labeling a colleague or roommate character, brainstorm two realistic situational explanations for their behavior.',
    },
  ],

  examples: [
    {
      id: 'ex_aob_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Performance Review Asymmetry',
      description: 'A manager judges a junior developer who missed a sprint target as "lacking commitment and attention to detail." When the manager misses his own quarterly departmental budget forecast, he blames "erratic financial market shifts."',
      takeaway: 'Holding others to character audits while granting oneself situational pardons ruins managerial psychological safety.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_aob_01',
      scenarioContext: 'During an intense product roadmap meeting, a product designer snaps impatiently at an engineer. A team observer says: "He is just an arrogant, toxic guy who can not work with engineers."',
      question: 'Which cognitive reframing corrects for the actor-observer bias?',
      prompt: 'Which cognitive reframing corrects for the actor-observer bias?',
      scenarioText: 'During an intense product roadmap meeting, a product designer snaps impatiently at an engineer. A team observer says: "He is just an arrogant, toxic guy who can not work with engineers."',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Agreeing that anyone who loses patience in a meeting has fundamentally defective leadership qualities',
          explanation: 'This doubles down on the dispositional fallacy, ignoring hidden environmental stressors.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Investigating situational pressures: "Let us find out if the designer is dealing with conflicting executive mandates, tight release deadlines, or personal emergencies before labeling his character"',
          explanation: 'Accurate: This extends the same situational curiosity to the colleague that we automatically grant ourselves.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Assuming the engineer intentionally provoked the designer to make him look bad',
          explanation: 'Inventing malicious conspiracies avoids understanding situational friction.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Extend the same situational empathy to others that you naturally grant to yourself when stressed.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Pause before judging character and actively brainstorm situational causes for the other person actions.',
  psychologicalDefenses: [
    {
      title: 'The "Assume Equal Pressure" Rule',
      instruction: 'When someone acts irritatingly or makes a mistake, assume they are enduring at least as much hidden stress as you are experiencing today.',
    },
    {
      title: 'Video Reversal Visualization',
      instruction: 'Visualize the scene with a camera placed behind the other person, looking at the chaotic environment they are facing, rather than staring at their face.',
    },
  ],

  reflectionPrompt: 'Whom in your life have you labeled as "stubborn," "lazy," or "arrogant"? What situational pressures in their daily life might explain their behavior without invoking character flaws?',
  references: [
    {
      id: 'ref_aob_01',
      title: 'The actor and the observer: Divergent perceptions of the causes of behavior',
      citation: 'Jones, E. E., & Nisbett, R. E. (1971). Attribution: Perceiving the Causes of Behavior, 79–94.',
      authors: 'Edward E. Jones, Richard E. Nisbett',
      publicationYear: 1971,
      journalOrPublisher: 'General Learning Press',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1016/B978-0-12-386860-2.50007-9',
      relevance: 'Original formulation of the fundamental asymmetry between actors and observers in causal attribution.',
      displayOrder: 1,
    },
    {
      id: 'ref_aob_02',
      title: 'The actor-observer asymmetry in attribution: A (surprising) meta-analysis',
      citation: 'Malle, B. F. (2006). Psychological Bulletin, 132(6), 895–919.',
      authors: 'Bertram F. Malle',
      publicationYear: 2006,
      journalOrPublisher: 'Psychological Bulletin',
      sourceType: 'systematic_review',
      evidenceStrength: 'peer_reviewed_meta_analysis',
      doiOrUrl: 'https://doi.org/10.1037/0033-2909.132.6.895',
      relevance: 'Comprehensive meta-analysis clarifying when and why actor-observer asymmetries emerge, especially in negative events.',
      displayOrder: 2,
    },
  ],
  tags: ['Cognitive Biases', 'Social Psychology', 'Attribution Theory', 'Relationships'],
  relatedTopics: [
    { topicId: 'fundamental_attribution_error', slug: 'fundamental-attribution-error', title: 'Fundamental Attribution Error', relationshipType: 'amplified_by' },
    { topicId: 'self_serving_bias', slug: 'self-serving-bias', title: 'Self-Serving Bias', relationshipType: 'amplified_by' },
  ],
  seoTitle: 'Actor-Observer Bias Explained: Situational vs Character Attribution | Mentalab Mind',
  seoDescription: 'Why we excuse our own mistakes as situational while blaming others character. Discover the actor-observer asymmetry and how to build empathy.',
  canonicalUrl: '/mind/cognitive-biases/actor-observer-bias',
  ogImageUrl: '/images/mind/actor-observer-bias.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: 'The actor-observer bias is an attribution asymmetry where actors explain behavior situationally, while observers explain it dispositionally.',
};

export const TOPIC_ACTOR_OBSERVER_BIAS_HINGLISH: MindTopicDetail = {
  ...TOPIC_ACTOR_OBSERVER_BIAS_EN,
  title: 'Actor-Observer Bias: Apni Galti Par Halat Ka Dosh, Doosre Ki Galti Par Uski Fitrat',
  subtitle: 'Jab hum late hote hain toh traffic tha; jab saamne wala late hota hai toh wo careless hai.',
  shortDescription: 'Ek aisi cognitive bias jisme hum apne behavior ko circumstances par daal dete hain, lekin doosro ke behavior ko unke character ka dosh maan lete hain.',
  oneLineExplanation: 'Jab main chidchida hu toh main thaka hua hu; jab aap chidchide hain toh aapka nature hi kharab hai.',

  summary30s: 'Actor-Observer Bias dosti, rishton aur office ke jhagdo ki sabse badi wajah hai. Jab hum koi galti karte hain, toh hume apne sir ka dard, deadline ka pressure aur majboori dikhai deti hai. Lekin jab doosra banda wahi galti karta hai, toh hume uski majboori nahi dikhti—hume lagta hai wo insaan hi galat hai.',
  coreConcept: 'Edward Jones aur Richard Nisbett (1971) ne bataya ki humari aakhein jahan dekhti hain, dimaag wahan dosh daal deta hai. Jab hum "Actor" hote hain toh hum bahar halaat dekhte hain; jab hum "Observer" hote hain toh humara focus samne wale ke chehre par hota hai. Is visual difference se hum khud ko hamesha maafi dete hain aur doosron par permanent thappa laga dete hain.',
  summary60s: 'Gaadi chalate waqt dekhiye: Agar aapne bina indicator ke achanak car mod li, toh aapko pata hai ki GPS ne achanak route badal diya tha aur peeche baccha ro raha tha—aap sochte hain "meri majboori thi". 5 minute baad koi doosra banda bina indicator ke gadi mod de, toh aap bina soche gaali dete hain aur bolte hain "yeh bewakoof pagal driver hai". Dono jagah galti ek hi thi, par judgment bilkul ulta.',

  quickTakeaways: [
    'Attribution Asymmetry: Meri galti halaat ki wajah se hui; aapki galti aapke kharab character ka saboot hai',
    'Visual Focus: Hum khud ko situation me dekhte hain; doosro ko unke body actions me dekhte hain',
    'Rishton Me Zeher: Yeh bias pati-patni, dosto aur colleagues ke beech purani ranjish create karta hai',
    'Perspective Tool: Socho: "Aisa kaunsa invisible pressure hoga jiski wajah se is bande ne aisa kiya?"',
  ],

  whyItHappens: 'Information availability: Hume apne dimag ke har stress, dard aur situation ka pata hota hai. Saamne wale ke dimaag me kya chal raha hai hume nahi pata, toh dimaag shortcut me use "kharab insaan" ghoshit kar deta hai.',
  evolutionaryMechanism: 'Jungli zamaane me anjaan shakhs ko jaldi judge karna ("yeh dushman hai ya dost") survive karne ke liye zaroori tha. Uski personal majboori samajhne me time waste nahi kiya ja sakta tha.',

  howItWorks: 'Visual salience rule: Jo cheez aakho ke samne sabse dynamic ho, dimaag usi ko cause maan leta hai. Samne wale ka shareer dikhta hai, halaat invisible hote hain.',
  whereYouEncounterIt: 'Road rage, office performance appraisals, roommate ke sath bartan dhone par ladayi, aur family arguments.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Apna Judgment vs. Doosre Ka Judgment',
    description: 'Kaise ek hi galti ko hum alag-alag nazariye se dekhte hain.',
    analogySideA: {
      label: 'Jab Mujhse Galti Hui (Actor)',
      detail: '"Traffic bahut zyada tha aur achanak emergency client call aa gayi thi."',
    },
    analogySideB: {
      label: 'Jab Doosre Se Galti Hui (Observer)',
      detail: '"Wo irresponsible hai, uske paas koi time management nahi hai aur wo careless hai."',
    },
  },

  researchSummary: 'Bertram Malle (2006) ke Psychological Bulletin meta-analysis (173 studies) ne prove kiya ki negative events me log apne faults ko external bolte hain aur doosro ke faults ko internal personality flaws.',
  limitationsAndControversies: 'Positive events me pattern ulta ho jata hai (Self-Serving Bias): Kamyabi me log bolte hain "yeh meri mehnat hai" aur doosre ki kamyabi me bolte hain "iski kismat achhi thi".',
  commonMisconceptions: 'Mithak: "Agar main empathetic hu toh main yeh bias nahi karta." Reality: Yeh visual salience par based automatic reflex hai, isse bachne ke liye conscious practice chahiye.',

  howToRecognize: [
    'Jab aap late ho toh traffic ko dosh dena, par junior late ho toh use lazy bolna',
    'Apne gusse ko "justified reaction" aur doosre ke gusse ko "toxic ego" samajhna',
    'Roommate ke unwashed plate ko uski "gandi aadat" aur apni unwashed plate ko "urgent meeting" bolna',
    'Khud ko describe karte waqt "halaat par depend karta hai" bolna, par doosron par permanent label lagana',
  ],

  scenarios: [
    {
      id: 'scen_aob_hi_01',
      scenarioType: 'indian_context',
      title: 'Bengaluru Flatmates Ki Bartan Par Ladayi',
      vignette: 'Marathahalli me Divya aur Priya flat share karti thi. Ek din sink me gande bartan dekh kar Divya Priya par chillayi: "Tum kitni careless ho, hamesha kaam chhod deti ho." Do din baad Divya ne khud apna tiffin sink me chhod diya aur office cab pakadne daud gayi. Priya ne toka toh Divya boli: "Meri emergency standup meeting thi aur cab driver cancel kar raha tha, tum meri majboori ko apni aalas se compare nahi kar sakti!"',
      breakdownAnalysis: 'Divya ne classic actor-observer bias dikhaya. Usne Priya ki galti ko character defect (careless) maana, lekin apni wahi galti ko valid emergency situation maana.',
      recommendedAction: 'Doosro ko bhi wahi benefit of doubt dein jo aap khud ko emergency me dete hain.',
    },
  ],

  examples: [
    {
      id: 'ex_aob_hi_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Sprint Deadline Attribution',
      description: 'Ek manager developer ko "incompetent" bolta hai jab feature me delay hota hai. Jab manager ka quarterly plan delay hota hai toh wo bolta hai "market conditions unfavorable thi".',
      takeaway: 'Khud ko mercy aur doosro ko harsh character audit dena team me trust khatam kar deta hai.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_aob_hi_01',
      scenarioContext: 'Meeting me ek designer engineer par chidchida ho jata hai. Ek team member bolta hai: "Yeh designer ghamandi hai aur isko baat karne ki tameez nahi hai."',
      question: 'Kaunsa thought actor-observer bias ko theek karta hai?',
      prompt: 'Kaunsa thought actor-observer bias ko theek karta hai?',
      scenarioText: 'Meeting me ek designer engineer par chidchida ho jata hai. Ek team member bolta hai: "Yeh designer ghamandi hai aur isko baat karne ki tameez nahi hai."',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Maan lena ki jo meeting me gussa karta hai wo bekaar insaan hai',
          explanation: 'Yeh dispositional bias ko aur badhata hai.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Pehle situation check karna: "Pata karte hain ki designer par management ka kitna pressure hai ya koi family emergency hai, bina label lagaye"',
          explanation: 'Sahi: Yeh wahi situational empathy hai jo hum khud ke gusse ke waqt expect karte hain.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Yeh sochna ki engineer ne jaanbujhkar designer ko irritate kiya hoga',
          explanation: 'Conspiracy theories banana problem ko solve nahi karta.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Doosron ko bhi wahi situational empathy dein jo aap apne stressful dino me khud ko dete hain.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Judge karne se pehle sochiye ki samne wale par kya invisible pressure ho sakta hai.',
  psychologicalDefenses: [
    {
      title: 'Equal Pressure Principle',
      instruction: 'Jab koi rude ya late ho, assume kijiye ki wo bhi utne hi hidden stress se guzar raha hai jitna aap kisi bure din par guzarte hain.',
    },
    {
      title: 'Reverse Camera Visualization',
      instruction: 'Apne dimaag ka camera samne wale ke chehre ke bajaye uske peeche rakhein aur uske difficult circumstances ko imagine karein.',
    },
  ],

  reflectionPrompt: 'Aapne apne parivaar ya office me kis shakhs ko "gussewala" ya "careless" ka thappa lagaya hai? Unki daily life ke kaunse stress unke is behavior ki wajah ho sakte hain?',
  seoTitle: 'Actor-Observer Bias Kya Hai? Halat vs Character Ka Dosh | Mentalab Mind',
  seoDescription: 'Janiye kyu hum apni galtiyon ko majboori aur doosro ki galtiyon ko unka kharab character maante hain. Seekhein empathy ke practical steps.',
  canonicalUrl: '/mind/cognitive-biases/actor-observer-bias',
};

export const TOPIC_ACTOR_OBSERVER_BIAS_HI: MindTopicDetail = {
  ...TOPIC_ACTOR_OBSERVER_BIAS_EN,
  title: 'Actor-Observer Bias (कर्ता-दर्शक पूर्वाग्रह)',
  subtitle: 'अपनी गलतियों के लिए परिस्थितियों को दोष देना और दूसरों की गलतियों को उनका चरित्र मानना।',
  shortDescription: 'एक ऐसा संज्ञानात्मक पूर्वाग्रह जिसमें व्यक्ति अपने कार्यों को बाहरी परिस्थितियों का परिणाम मानता है, परंतु दूसरों के व्यवहार को उनके आंतरिक व्यक्तित्व या चरित्र की कमी ठहराता है।',
  oneLineExplanation: 'जब मैं गलत हूँ तो मजबूरी थी; जब आप गलत हैं तो आपका स्वभाव ही खराब है।',
  summary30s: 'कर्ता-दर्शक पूर्वाग्रह (Actor-Observer Bias) मानवीय संबंधों में गलतफहमियों का सबसे बड़ा स्रोत है। जब हम कोई भूल करते हैं, तो हमें अपना तनाव, थकान और दबाव दिखाई देता है। परंतु जब कोई अन्य व्यक्ति वही भूल करता है, तो हम उसकी परिस्थितियों को जाने बिना उसे गैर-जिम्मेदार या अनुचित करार दे देते हैं।',
};

export const TOPIC_ACTOR_OBSERVER_BIAS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_ACTOR_OBSERVER_BIAS_EN,
  hinglish: TOPIC_ACTOR_OBSERVER_BIAS_HINGLISH,
  hi: TOPIC_ACTOR_OBSERVER_BIAS_HI,
  gu: TOPIC_ACTOR_OBSERVER_BIAS_EN,
  mr: TOPIC_ACTOR_OBSERVER_BIAS_EN,
  te: TOPIC_ACTOR_OBSERVER_BIAS_EN,
  ta: TOPIC_ACTOR_OBSERVER_BIAS_EN,
  kn: TOPIC_ACTOR_OBSERVER_BIAS_EN,
  ml: TOPIC_ACTOR_OBSERVER_BIAS_EN,
  bn: TOPIC_ACTOR_OBSERVER_BIAS_EN,
  pa: TOPIC_ACTOR_OBSERVER_BIAS_EN,
  ur: TOPIC_ACTOR_OBSERVER_BIAS_EN,
  or: TOPIC_ACTOR_OBSERVER_BIAS_EN,
  as: TOPIC_ACTOR_OBSERVER_BIAS_EN,
};
