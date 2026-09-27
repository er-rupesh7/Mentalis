import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: Fundamental Attribution Error: Blaming Character Instead of Context
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Ross (1977): The intuitive psychologist and his shortcomings
 * - Jones & Harris (1967): The attribution of attitudes
 * - Gilbert & Malone (1995): The correspondence bias
 */

export const TOPIC_FAE_EN: MindTopicDetail = {
  id: 'fundamental_attribution_error',
  categoryId: 'cognitive_biases',
  slug: 'fundamental-attribution-error',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 5,
  viewCount: 7120,
  shareCount: 510,
  bookmarkCount: 1290,
  title: 'Fundamental Attribution Error: Blaming Character Instead of Context',
  subtitle: 'We judge others by their internal personality flaws, but excuse ourselves through external situational context.',
  shortDescription: 'The systematic tendency to overemphasize personal characteristics and ignore situational, environmental factors when judging other people\'s behavior.',
  oneLineExplanation: 'When I am late, there was heavy traffic; when you are late, you are lazy and disorganized.',

  summary30s: 'The Fundamental Attribution Error (FAE) is our reflex to judge other people by their perceived character ("he was rude because he is an arrogant person"), while judging ourselves by external context ("I was sharp with him because I had a splitting migraine and slept 3 hours"). This asymmetry poisons relationships, teams, and public discourse.',

  coreConcept: 'Coined by social psychologist Lee Ross in 1977 following Edward Jones and Victor Harris\'s (1967) classic experiments, FAE reveals how the brain constructs explanations for human behavior. When observing another person, their physical presence is perceptual figure (salient and colorful), while their environment is background (invisible). We effortlessly assign causal blame to their stable personality traits and neglect hidden systemic pressures.',
  summary60s: 'Imagine a colleague fails to respond to your email for three days. Your immediate cognitive attribution is character-based: "She doesn\'t care about this project, she has poor work ethic, or she is actively undermining me." You assign zero probability to situational context: perhaps her child is hospitalized, her laptop motherboard fried, or her team is handling an acute production outage. Yet when you fail to reply to an email, you immediately rationalize: "I was overwhelmed by 400 messages today." FAE creates chronic resentment because we attribute malice to what is almost always external overload.',

  quickTakeaways: [
    'Asymmetrical Attribution: Others have flawed character; we simply have bad circumstances',
    'Salience Asymmetry: The person is physically visible; their hidden stressors and background pressures are invisible',
    'Hanlon\'s Razor Intersection: Never attribute to malice or bad character that which is adequately explained by situational stress',
    'The Situational Inquiry Antidote: Ask "What invisible external pressures might be forcing this person to act this way?"',
  ],

  whyItHappens: 'Perceptual salience and cognitive efficiency. Observing a person requires minimal cognitive effort; deducing their unseen biological, social, and structural environment requires intense, effortful mental simulation.',
  evolutionaryMechanism: 'In small ancestral hunter-gatherer bands, rapid character assessment was vital. Evaluating whether a stranger was trustworthy or treacherous based on swift behavioral cues prevented ambushes, even if occasional situational nuances were missed.',

  howItWorks: 'Daniel Gilbert\'s two-stage model: (1) Automatic Characterization: The brain instantly attributes behavior to internal traits with zero cognitive effort; (2) Controlled Correction: Only if we have deliberate time, energy, and empathy do we actively adjust for situational context. Under stress or fatigue, the correction step never runs.',
  whereYouEncounterIt: 'Road rage (assuming a driver who cut you off is an evil sociopath rather than rushing an injured child to hospital), performance reviews (labeling underperforming employees as "unmotivated" rather than examining broken workflows), and customer service interactions.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Actor vs. Observer Attribution',
    description: 'How our explanatory framework shifts depending on who committed the error.',
    analogySideA: {
      label: 'When Observing Others (Observer Bias)',
      detail: '"They missed the project deadline because they are undisciplined, careless, and uncommitted."',
    },
    analogySideB: {
      label: 'When Explaining Self (Actor Bias)',
      detail: '"I missed the deadline because two team members were out sick and client requirements changed twice."',
    },
  },

  researchSummary: 'In Jones & Harris\'s 1967 study, participants read essays supporting Fidel Castro in Cuba. Even when participants were explicitly informed that the essay authors had zero choice and were mandated by their debate coach to write pro-Castro arguments, participants still rated the authors\' personal attitudes as genuinely pro-Castro, completely disregarding the overwhelming situational constraint.',
  limitationsAndControversies: 'Cross-cultural psychology (e.g., Nisbett et al., 2001) shows that FAE is significantly more pronounced in individualistic Western cultures (which emphasize personal agency) than in collectivist East Asian or South Asian cultures (which naturally pay higher attention to relational and contextual dynamics).',
  commonMisconceptions: 'Common myth: "We always judge others purely on character and ourselves purely on circumstances." Reality: In collective or family contexts, the self-serving bias can flip, but the core error remains: drastically underestimating the power of external environmental constraints on other people\'s actions.',

  howToRecognize: [
    'Rushing to label someone as "toxic", "narcissistic", or "lazy" after observing a single awkward or tense interaction',
    'Assuming someone who seems quiet or unresponsive in a large meeting is unintelligent or arrogant',
    'Explaining your own shortcomings with extensive environmental excuses while rejecting similar excuses from colleagues',
    'Becoming furious in traffic or customer service lines because you assume other people\'s mistakes are deliberate personal attacks',
  ],

  scenarios: [
    {
      id: 'scen_fae_01',
      scenarioType: 'indian_context',
      title: 'The Tense Engineering Standup in Mumbai',
      vignette: 'During a morning engineering standup at an e-commerce firm in Mumbai, senior developer Vikram snaps irritably at a junior engineer who asks a question about code deployment: "Read the documentation before wasting team time!" The junior engineer walks away devastated, complaining to peers: "Vikram is an arrogant, hostile bully who enjoys humiliating people." Later that evening, the engineering manager discovers Vikram had spent the preceding 14 hours in the ICU with his father, who had suffered a sudden cardiac arrest.',
      breakdownAnalysis: 'The junior engineer fell directly into the Fundamental Attribution Error. Vikram\'s sharp tone was perceptual figure, leading to an instant personality verdict ("arrogant bully"). The extreme, invisible situational crisis (14 hours in hospital ICU) was invisible context.',
      recommendedAction: 'Apply situational generosity before character judgment: "Vikram is normally supportive. A sudden burst of irritability almost always indicates severe external stress rather than malevolent personality."',
    },
  ],

  examples: [
    {
      id: 'ex_fae_01',
      domain: 'relationships',
      displayOrder: 1,
      title: 'The Road Rage Attribution',
      description: 'A car suddenly swerves into your lane. You instantly scream: "What an arrogant maniac!" If you were the one swerving because you suddenly realized you were about to miss your hospital exit, you would think: "I am being careful, I just made an honest mistake under pressure."',
      takeaway: 'We give ourselves the benefit of context, but deny that same context to strangers.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_fae_01',
      scenarioContext: 'A manager notices that two new customer support representatives have identical drop-offs in call quality ratings during their third week on the job. The manager immediately assumes both representatives lack resilience and dedication.',
      question: 'What step should the manager take to avoid the Fundamental Attribution Error?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Fire both representatives immediately to preserve the high standards of company culture',
          explanation: 'This doubles down on the attribution error by punishing individuals without investigating systemic causes.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Investigate situational factors, such as whether third-week software updates or call routing algorithms changed',
          explanation: 'Accurate: examining systemic, technical, and workflow conditions before jumping to character-based deficiency.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Give them personality assessments to verify if their psychological traits match customer service profiles',
          explanation: 'Trait testing under acute stress reinforces dispositional fallacies rather than addressing operational roadblocks.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Always audit the structural environment before diagnosing individual character flaws.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Practice situational attribution by asking: "What invisible environmental pressures, exhaustion, or panic might explain this person\'s behavior?"',
  psychologicalDefenses: [
    {
      title: 'Practice the Situational Pivot',
      instruction: 'Whenever you find yourself angry at someone\'s behavior, pause and force yourself to generate three plausible external explanations (e.g., grief, burnout, faulty tools) before judging their character.',
    },
    {
      title: 'Invert the Actor-Observer Camera',
      instruction: 'Ask yourself: "If I acted in this exact same manner today, what circumstances in my life would I use to explain my behavior?"',
    },
    {
      title: 'Focus on Systemic Architecture',
      instruction: 'In organizations, treat widespread human errors as symptoms of broken processes, unclear communication, or unrealistic incentives rather than moral failings.',
    },
  ],

  reflectionPrompt: 'When someone recently cut you off or made a mistake, did you immediately assume bad character? How would you explain it if you did the same thing?',

  references: [
    {
      id: 'ref_ross_1977',
      authors: 'Ross, L.',
      year: 1977,
      title: 'The intuitive psychologist and his shortcomings: Distortions in the attribution process',
      publicationName: 'Advances in Experimental Social Psychology',
      volumeIssue: '10, 173-220',
      doi: '10.1016/S0065-2601(08)60357-3',
      evidenceStrength: 'foundational_monograph',
    },
    {
      id: 'ref_jones_1967',
      authors: 'Jones, E. E., & Harris, V. A.',
      year: 1967,
      title: 'The attribution of attitudes',
      publicationName: 'Journal of Experimental Social Psychology',
      volumeIssue: '3(1), 1-24',
      doi: '10.1016/0022-1031(67)90034-0',
      evidenceStrength: 'empirical_study',
    },
  ],

  relatedTopics: [
    {
      topicId: 'confirmation_bias',
      slug: 'confirmation-bias',
      title: 'Confirmation Bias',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'blame_shifting',
      slug: 'blame-shifting',
      title: 'Blame Shifting',
      relationshipType: 'amplified_by',
    },
  ],
};

export const TOPIC_FAE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_FAE_EN,
  hinglish: {
    ...TOPIC_FAE_EN,
    title: 'Fundamental Attribution Error: Doosro Ke Character Par Shak, Khud Ke Halat Ka Bahana',
    subtitle: 'Hum doosro ko unke character se judge karte hain, jabki apni galtiyo ko circumstances ka bahana banate hain.',
    shortDescription: 'Doosro ki galtiyo ke piche unki niyat ya kharab character dekhna, jabki unke hidden pressures aur environment ko ignore kar dena.',
    oneLineExplanation: 'Agar main late hu toh traffic tha; agar tum late ho toh tum careless ho.',
    summary30s: 'Fundamental Attribution Error hamari wo aadat hai jisme hum doosro ki galti dekhkar foran bolte hain: "Yeh aadmi hi battameez ya lazy hai." Lekin jab wahi galti humse hoti hai, toh hum kehte hain: "Mere paas bohot pressure tha aur tabiyat kharab thi." Yeh aadat relationships aur teams ko barbaad karti hai.',
  },
  hi: {
    ...TOPIC_FAE_EN,
    title: 'Fundamental Attribution Error (मौलिक गुणारोपण त्रुटि)',
    subtitle: 'दूसरों के व्यवहार को उनके चरित्र का दोष मानना, और अपनी गलतियों के लिए परिस्थितियों को दोष देना।',
    shortDescription: 'दूसरों के आचरण का मूल्यांकन करते समय व्यक्तिगत विशेषताओं को बढ़ा-चढ़ाकर पेश करने और परिस्थितियों को नजरअंदाज करने की प्रवृत्ति।',
    oneLineExplanation: 'यदि मैं देर से आया तो ट्रैफिक था; यदि आप देर से आए तो आप लापरवाह हैं।',
    summary30s: 'मौलिक गुणारोपण त्रुटि (Fundamental Attribution Error) के तहत हम दूसरों की गलतियों को उनके बुरे चरित्र या आलस से जोड़ते हैं, जबकि अपनी गलतियों के पीछे छिपे तनाव और मजबूरियों को कारण बताते हैं। दूसरों के अदृश्य संदर्भ (context) को समझना इस त्रुटि का समाधान है।',
  },
  gu: TOPIC_FAE_EN,
  mr: TOPIC_FAE_EN,
  te: TOPIC_FAE_EN,
  ta: TOPIC_FAE_EN,
  kn: TOPIC_FAE_EN,
  ml: TOPIC_FAE_EN,
  bn: TOPIC_FAE_EN,
  pa: TOPIC_FAE_EN,
  ur: TOPIC_FAE_EN,
  or: TOPIC_FAE_EN,
  as: TOPIC_FAE_EN,
  };
