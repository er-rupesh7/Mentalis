import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 03: Emotional Blackmail
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - The FOG Model: Fear, Obligation, and Guilt (Forward & Frazier, 1997)
 * - Traumatic Bonding and Intermittent Coercion (Dutton & Painter, 1993)
 * - Coercive Relational Control and Interpersonal Hostage-Taking (Stark, 2007)
 */

export const TOPIC_EMOTIONAL_BLACKMAIL_EN: MindTopicDetail = {
  id: 'emotional_blackmail',
  categoryId: 'manipulation_awareness',
  slug: 'emotional-blackmail',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 7,
  scientificConsensusTier: 'established',
  sortWeight: 3,
  viewCount: 6340,
  shareCount: 520,
  bookmarkCount: 980,
  title: 'Emotional Blackmail: Navigating Fear, Obligation & Guilt (The FOG System)',
  subtitle: 'Understanding the FOG dynamic, distinguishing ultimatums from boundaries, and responding with emotional sovereignty.',
  shortDescription: 'A coercive dynamic where someone directly or indirectly threatens punishment, relational severance, or emotional devastation unless you surrender to their demands.',
  oneLineExplanation: 'In simple terms: Using fear, obligation, or guilt (FOG) as a weapon to force someone to submit to emotional demands.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'Emotional blackmail is a severe interpersonal pressure tactic where someone weaponizes your attachment, love, or vulnerabilities to control your choices. The blackmailer makes it clear that if you do not comply, you will be punished: they might threaten to end the relationship, cause a scene, withhold affection, or even threaten self-harm. You surrender not because you want to, but to stop the emotional terror.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Formulated by Dr. Susan Forward, emotional blackmail operates through "FOG": Fear (of conflict or abandonment), Obligation (moral or relational debt), and Guilt (believing you caused their suffering). It follows a predictable six-step cycle: Demand → Resistance → Pressure → Threat → Compliance → Repetition.',
  summary60s: 'Unlike ordinary disagreement where two adults negotiate compromises, emotional blackmail is non-negotiable hostage-taking. A blackmailer knows your specific trigger points—such as your fear of anger or your commitment to family duty—and applies targeted pressure until you break. For instance, if you establish a boundary around your personal finances, a blackmailer responds not with a counter-offer, but with an existential threat: "If you do not give me access to your account, you clearly do not trust me, and this relationship is over." The message is binary: total compliance or relational destruction.',

  quickTakeaways: [
    'The FOG Trap: It functions through the systematic induction of Fear, Obligation, and Guilt',
    'The Six-Step Cycle: Demand, Resistance, Pressure, Threat, Compliance, and Repetition',
    'Boundary vs. Blackmail: A boundary defines what *you* will do for your safety; blackmail dictates what *the other person* must do',
    'Never Pacify Extortion: Complying with emotional threats temporarily relieves tension but guarantees escalating demands in the future',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'High-attachment relationships activate fundamental neurobiological safety systems. When an intimate partner or parent threatens to abandon, despise, or punish us, our autonomic nervous system perceives an acute survival threat. The terror of relational exile overrides cognitive boundary defense, compelling immediate appeasement.',
  evolutionaryMechanism: 'Mammalian infants depend entirely on caregiver proximity for physical survival. Threat of relational severance taps into ancient primal panic pathways (Panksepp, 1998 on the PANIC/GRIEF system), triggering compliance to preserve attachment bonds at any cost.',

  // SECTION E — WHY MIGHT SOMEONE USE THIS PATTERN?
  howItWorks: 'Emotional blackmailers rarely consider themselves evil villains; they often act out of intense insecurity, terror of abandonment, or unmanaged emotional dysregulation. Having never learned assertive negotiation, they treat relational surrender as the only proof of love.',
  whereYouEncounterIt: 'Intimate relationships, parent-child dynamics, close friendships, and toxic small-business workplaces.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Catastrophic relational threats whenever minor disagreements arise ("If you do this, we are through")',
    'Self-punishment or self-harm threats used to stop you from leaving or setting boundaries',
    'Using your deepest shared secrets or insecurities as ammunition during arguments',
    'Constant shifting of the goalposts: yesterday’s compliance becomes tomorrow’s baseline expectation',
    'A pervasive feeling that you are walking on eggshells around emotional landmines',
  ],

  // SECTION G — NORMAL BEHAVIOR VS UNHEALTHY PATTERN
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Setting a Personal Boundary vs. Emotional Blackmail',
    description: 'The critical psychological distinction between owning your limits and coercing another person.',
    analogySideA: {
      label: 'Setting a Boundary (Autonomous)',
      detail: '"If you continue shouting and insulting me, I will hang up the phone." (Focuses on own behavior and physical/emotional safety).',
    },
    analogySideB: {
      label: 'Emotional Blackmail (Coercive)',
      detail: '"If you hang up this phone, I will swallow pills / I will make sure your friends hate you." (Dictates the other person\'s actions through terror).',
    },
  },

  // SECTION H, I, J — REAL-LIFE EXAMPLES & INDIAN CONTEXT
  examples: [
    {
      id: 'eb_ex_01',
      domain: 'relationships',
      displayOrder: 1,
      title: 'The Social Severance Threat',
      description: 'Partner A plans to attend a college reunion. Partner B: "If you go to that event without me, do not bother coming home. I will pack your bags and leave them on the curb. You are choosing strangers over our future."',
      takeaway: 'Notice the absolute ultimatum: an ordinary social evening is elevated into a threat of immediate eviction and abandonment.',
    },
    {
      id: 'eb_ex_02',
      domain: 'workplace',
      displayOrder: 2,
      title: 'The Career Ruin Threat',
      description: 'Senior Partner: "If you report this safety violation to the board, I will make sure you never work in this industry again in this city. Think about your family’s mortgage before you get righteous."',
      takeaway: 'Fear of economic devastation is leveraged to force ethical complicity.',
    },
  ],

  scenarios: [
    {
      id: 'eb_scen_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'The Arranged Marriage Ultimatum',
      narrativeContext: 'Ananya, a 26-year-old software architect in Pune, politely declines a matrimonial alliance arranged by her family because their life values are incompatible. Her parents lock themselves in the bedroom. Her father refuses his diabetic insulin, declaring: "If you do not agree to marry this boy, I will stop taking my medication. You can cremate me and then do whatever you want with your career. Your stubbornness will kill me, and you will carry that sin forever."',
      biasInAction: 'The father places his own medical health and life as an emotional hostage, weaponizing filial guilt (Karmic sin) to override Ananya’s fundamental life partnership autonomy.',
      optimalResponse: 'Refuse to negotiate with medical hostage-taking while mobilizing safe family support: "Papa, I love you and I care about your health. I am calling the doctor right now to ensure your insulin is administered. But my life partnership is my personal decision, and I cannot marry someone I do not align with under duress."',
      reflectionPrompt: 'Have you ever had someone close to you threaten their own well-being or the collapse of the family to force you to abandon your core boundaries?',
    },
  ],

  // SECTION K — SPOT THE PATTERN (Interactive Scenario)
  interactiveScenarios: [
    {
      id: 'scen_eb_01',
      topicId: 'emotional_blackmail',
      title: 'Spot the Pattern: Self-Harm Coercion during Breakup',
      contextVignette: 'You sit down with your dating partner of six months to end the relationship respectfully due to chronic incompatibility. Your partner begins crying hysterically, grabs their car keys, and screams: "If you walk out that door right now, I am driving straight off the highway bridge. My life is in your hands!"',
      vignetteSourceType: 'family_relationships',
      question: 'What is the most scientifically and ethically sound protocol for handling this emergency?',
      options: [
        {
          id: 'opt_eb_a',
          label: 'A',
          text: 'Agree to stay in the relationship and promise never to leave, sacrificing your autonomy to keep them alive.',
          explanation: 'This reinforces extreme emotional hostage-taking and traps you in an escalating, dangerous abuse dynamic.',
          isCorrect: false,
        },
        {
          id: 'opt_eb_b',
          label: 'B',
          text: 'Take the threat seriously by calling emergency services or their close family, while refusing to resume the relationship.',
          explanation: 'Correct. You are not a qualified suicide intervention counselor or hostage negotiator. Call professionals (emergency helplines/family) for their physical safety while holding your relational boundary firmly.',
          isCorrect: true,
        },
        {
          id: 'opt_eb_c',
          label: 'C',
          text: 'Laugh in their face and tell them they are completely bluffing.',
          explanation: 'Extremely dangerous. Threats of self-harm must always be handed over to medical professionals or crisis lines, never provoked or mocked.',
          isCorrect: false,
        },
      ],
      revealedExplanation: {
        correctSummary: 'Treat self-harm threats with professional emergency referral, never relational capitulation.',
        whyItMatters: 'Yielding to self-harm extortion guarantees that self-harm threats will become the permanent control tool whenever you set boundaries.',
        cognitiveTrap: 'Believing that you are solely responsible for another adult’s mental health or self-preservation.',
        actionableAntidote: 'The "Safety Protocol Separation": Call emergency services/family for their health; hold your exit boundary for your own.',
      },
      difficulty: 'hard',
      culturalContext: 'indian_general',
    },
  ],

  // SECTION L & Q — "BUT BE CAREFUL" & LIMITATIONS
  limitationsAndControversies: 'Caution: Distinguish authentic relationship boundary-setting from blackmail. If someone says, "I cannot remain in a monogamous relationship if there is infidelity," that is an honest declaration of personal terms of engagement, not blackmail. Emotional blackmail requires extortion: using threats of punishment or harm to coerce the other person into doing something against their will.',

  // SECTION M, N & O — HOW TO RESPOND, SCRIPTS & WHEN TO SEEK HELP
  howToRespond: 'Apply Dr. Susan Forward\'s S.O.S. Framework: (1) STOP: Never respond or negotiate in the heat of panic; buy time; (2) OBSERVE: Step back as an objective third-party observer; identify the FOG element (Is it Fear? Obligation? Guilt?); (3) SHIFT: Place the responsibility back on the speaker with calm, non-defensive language. When to Seek Professional Support: If self-harm or physical threats are voiced, contact national emergency services immediately (e.g. Tele-MANAS 14416 or KIRAN 1800-599-0019 in India; 988 in North America). Seek a licensed clinical psychologist or family therapist when FOG patterns are chronic.',
  psychologicalDefenses: [
    {
      title: 'The Time-Out Buffer',
      instruction: 'Say: "I understand you feel strongly about this. However, I do not make important decisions under ultimatums. I need 24 hours to think, and we can speak tomorrow."',
    },
    {
      title: 'The Non-Defensive Pivot',
      instruction: 'Say: "You are free to make whatever decision you need to for yourself. But my decision on this issue is final."',
    },
    {
      title: 'Disarm the Catastrophe Script',
      instruction: 'When accused: "If you loved me you would do this," reply: "I do love you, but love does not require surrendering my fundamental judgment."',
    },
    {
      title: 'The Emergency Helplines Protocol',
      instruction: 'If self-harm or violence is threatened, do not negotiate relational terms. Immediately call Tele-MANAS (14416) or emergency services and notify their family.',
    },
  ],

  // SECTION P — RESEARCH & CITATIONS
  researchSummary: 'Dr. Susan Forward and Donna Frazier (1997) formally developed the FOG diagnostic framework in "Emotional Blackmail: When the People in Your Life Use Fear, Obligation, and Guilt to Manipulate You". Longitudinal clinical research by Dutton & Painter (1993) on traumatic bonding showed that alternating between intense warmth and catastrophic threats creates powerful biochemical trauma bonds (dopamine-cortisol cycles) that make it extremely difficult for targets to leave without professional support.',

  references: [
    {
      id: 'eb_ref_01',
      title: 'Emotional Blackmail: When the People in Your Life Use Fear, Obligation, and Guilt to Manipulate You',
      citation: 'Forward, S., & Frazier, D. (1997). Emotional Blackmail. HarperCollins Publishers.',
      authors: 'Susan Forward, Donna Frazier',
      publicationYear: 1997,
      journalOrPublisher: 'HarperCollins',
      sourceType: 'academic_textbook',
      evidenceStrength: 'foundational_book',
      doiOrUrl: 'https://www.harpercollins.com/products/emotional-blackmail-susan-forward',
      relevance: 'Foundational clinical taxonomy of FOG dynamics and the six stages of emotional extortion.',
      displayOrder: 1,
    },
    {
      id: 'eb_ref_02',
      title: 'Emotional attachments in abusive relationships: A test of traumatic bonding theory',
      citation: 'Dutton, D. G., & Painter, S. (1993). Violence and Victims, 8(2), 105–120.',
      authors: 'Donald G. Dutton, Susan Painter',
      publicationYear: 1993,
      journalOrPublisher: 'Violence and Victims',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: 'https://doi.org/10.1891/0886-6708.8.2.105',
      relevance: 'Empirical verification of intermittent threat-and-affection cycles in coercive relationships.',
      displayOrder: 2,
    },
  ],

  // SECTION R — COMMON MYTHS
  commonMisconceptions: 'Myth: "If I just give in to this one demand, they will finally be satisfied and stop threatening me." Reality: Appeasing emotional blackmail teaches the blackmailer that threats work, guaranteeing that higher-stakes ultimatums will follow.',

  // SECTION S — REFLECTION PROMPT
  reflectionPrompt: 'Have you ever had someone close to you threaten their own well-being or the collapse of the family to force you to abandon your core boundaries?',

  // SECTION T — PRACTICE QUESTIONS (6 Distinct Questions)
  practiceQuestions: [
    {
      id: 'eb_pq_01',
      questionType: 'identify_influence_principle',
      question: 'What does the acronym "FOG" stand for in the context of emotional blackmail (Forward & Frazier, 1997)?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Fear, Obligation, and Guilt',
          isCorrect: true,
          feedbackText: 'Correct. These are the three emotional levers manipulated to bypass rational boundary enforcement.',
        },
        {
          id: 'opt_2',
          optionText: 'Focus, Organization, and Growth',
          isCorrect: false,
          feedbackText: 'Incorrect. FOG describes the emotional fog of manipulation.',
        },
        {
          id: 'opt_3',
          optionText: 'Fixation, Obsession, and Gaslighting',
          isCorrect: false,
          feedbackText: 'Incorrect terminology.',
        },
      ],
      cognitiveTakeaway: 'FOG represents the core trio of emotional levers used in interpersonal extortion.',
    },
    {
      id: 'eb_pq_02',
      questionType: 'distinction',
      question: 'How do you distinguish a legitimate relationship boundary from emotional blackmail?',
      options: [
        {
          id: 'opt_1',
          optionText: 'A boundary defines what you yourself will do to protect your safety; blackmail dictates what the other person must do by threatening punishment.',
          isCorrect: true,
          feedbackText: 'Correct. Boundaries preserve personal autonomy; blackmail attempts to control another person’s behavior.',
        },
        {
          id: 'opt_2',
          optionText: 'Boundaries are always spoken quietly, while blackmail is always shouted.',
          isCorrect: false,
          feedbackText: 'Emotional blackmail is frequently delivered in a quiet, chilling, or passive-aggressive tone.',
        },
        {
          id: 'opt_3',
          optionText: 'There is no difference; any condition placed on a relationship is blackmail.',
          isCorrect: false,
          feedbackText: 'Healthy boundaries are essential for safety and trust in all relationships.',
        },
      ],
      cognitiveTakeaway: 'Boundaries manage your own participation; blackmail attempts to control another person.',
    },
    {
      id: 'eb_pq_03',
      questionType: 'scenario_analysis',
      question: 'A partner states: "If you attend that networking conference this weekend, you are proving that your career matters more than our love, and I will pack my bags and leave." Which stage of the blackmail cycle is this?',
      options: [
        {
          id: 'opt_1',
          optionText: 'The Threat stage: invoking the existential end of the relationship to coerce compliance.',
          isCorrect: true,
          feedbackText: 'Correct. Escalating from resistance to an explicit threat of relational destruction.',
        },
        {
          id: 'opt_2',
          optionText: 'The Healthy Compromise stage.',
          isCorrect: false,
          feedbackText: 'Ultimatums are the exact opposite of healthy compromise.',
        },
        {
          id: 'opt_3',
          optionText: 'The Post-Conflict Resolution stage.',
          isCorrect: false,
          feedbackText: 'This is peak coercion, not resolution.',
        },
      ],
      cognitiveTakeaway: 'Recognizing the threat phase prevents you from misinterpreting coercion as love.',
    },
    {
      id: 'eb_pq_04',
      questionType: 'best_response',
      question: 'What is the recommended first step in Susan Forward’s S.O.S. framework when facing an intense emotional ultimatum?',
      options: [
        {
          id: 'opt_1',
          optionText: 'STOP: Refuse to make any immediate decision in the heat of panic; buy time to clear the emotional fog.',
          isCorrect: true,
          feedbackText: 'Correct. Breaking the manufactured urgency is the single most powerful initial counter-move.',
        },
        {
          id: 'opt_2',
          optionText: 'SUBMIT: Agree immediately to calm the partner down, and secretly plan to disobey later.',
          isCorrect: false,
          feedbackText: 'Submission deepens the blackmail dynamic and compromises your integrity.',
        },
        {
          id: 'opt_3',
          optionText: 'SCREAM: Retaliate with an even more terrifying threat.',
          isCorrect: false,
          feedbackText: 'Counter-threats create dangerous escalation and psychological trauma.',
        },
      ],
      cognitiveTakeaway: 'The "STOP" step breaks the adrenaline-fueled panic loop.',
    },
    {
      id: 'eb_pq_05',
      questionType: 'what_would_you_do',
      question: 'A parent says: "If you don’t give me half your salary every month, I will tell the entire extended family on WhatsApp that you are an ungrateful child who starved their parents." How should you respond?',
      options: [
        {
          id: 'opt_1',
          optionText: 'State calmly: "I am happy to contribute a fair, budgeted amount for household groceries. But I will not negotiate under threats of public slander."',
          isCorrect: true,
          feedbackText: 'Correct. Clear, factual, reasonable contribution offered while firmly rejecting extortion.',
        },
        {
          id: 'opt_2',
          optionText: 'Give your entire paycheck to ensure the WhatsApp group remains quiet.',
          isCorrect: false,
          feedbackText: 'Yielding to slander threats guarantees lifelong financial exploitation.',
        },
        {
          id: 'opt_3',
          optionText: 'Post embarrassing childhood stories about your parents online in revenge.',
          isCorrect: false,
          feedbackText: 'Revenge escalation harms family safety and solves nothing.',
        },
      ],
      cognitiveTakeaway: 'Separate legitimate support from compliance with extortion.',
    },
    {
      id: 'eb_pq_06',
      questionType: 'misconception_detection',
      question: 'Why does intermittent warmth (alternating between intense affection and catastrophic threats) create such a strong psychological grip on victims?',
      options: [
        {
          id: 'opt_1',
          optionText: 'It induces traumatic bonding, where the brain becomes biochemically hooked on the relief of returning warmth after terrifying stress.',
          isCorrect: true,
          feedbackText: 'Correct. Dutton & Painter (1993) demonstrated that variable relief reinforces attachment bonds far more powerfully than constant kindness.',
        },
        {
          id: 'opt_2',
          optionText: 'Because people enjoy being threatened.',
          isCorrect: false,
          feedbackText: 'Victims do not enjoy threats; they are caught in a powerful neurobiological survival loop.',
        },
        {
          id: 'opt_3',
          optionText: 'Because threats are proof of deep, passionate love.',
          isCorrect: false,
          feedbackText: 'Dangerous cultural myth: coercion and control are the opposite of authentic love.',
        },
      ],
      cognitiveTakeaway: 'Traumatic bonding thrives on the unpredictable oscillation between terror and relief.',
    },
  ],

  // VISUAL CONTENT
  visualContent: {
    id: 'vis_emotional_blackmail',
    type: 'flowchart',
    title: 'The FOG Blackmail Cycle',
    altText: 'A detailed diagram of the 6-step emotional blackmail cycle: Demand, Resistance, Pressure, Threat, Compliance, Repetition.',
    caption: 'Figure 1: The FOG Cycle: How fear, obligation, and guilt turn relationship resistance into coerced compliance.',
    interactiveExplanation: 'Once compliance is granted, the relief is only temporary. The cycle resets, with the blackmailer learning that higher-stakes threats produce faster obedience.',
  },

  // TAGS & RELATED TOPICS
  tags: ['Manipulation Awareness', 'Emotional Blackmail', 'FOG', 'Boundaries', 'Coercive Control'],
  relatedTopics: [
    {
      topicId: 'guilt_tripping',
      slug: 'guilt-tripping',
      title: 'Guilt-Tripping',
      relationshipType: 'foundational_to',
    },
    {
      topicId: 'victim_playing',
      slug: 'victim-card-patterns',
      title: 'Victim Playing Patterns',
      relationshipType: 'amplified_by',
    },
    {
      topicId: 'healthy_boundaries',
      slug: 'healthy-boundaries',
      title: 'Healthy Boundaries',
      relationshipType: 'counteracted_by',
    },
  ],

  // SEO METADATA
  seoTitle: 'Emotional Blackmail: Meaning, FOG Signs & Boundary Responses | Mentalab Mind',
  seoDescription: 'Discover what emotional blackmail is, the FOG cycle (Fear, Obligation, Guilt), real-life examples, and how to respond safely without submitting to ultimatums.',
  canonicalUrl: '/mind/manipulation-awareness/emotional-blackmail',
  ogImageUrl: '/images/mind/emotional-blackmail.png',
  publishedAt: '2026-09-22T00:00:00Z',
  deepExplanation: 'Emotional blackmail leverages relational hostage-taking through the systematic manipulation of fear, obligation, and guilt.',
};

/**
 * High-Quality Hinglish Translation
 */
export const TOPIC_EMOTIONAL_BLACKMAIL_HINGLISH: MindTopicDetail = {
  ...TOPIC_EMOTIONAL_BLACKMAIL_EN,
  title: 'Emotional Blackmail: FOG (Fear, Obligation & Guilt) Ko Samjhein',
  subtitle: 'Janiye emotional blackmail kaise kaam karta hai, ultimatums se kaise bachein, aur healthy boundaries kaise banayein.',
  shortDescription: 'Ek aisa coercive pattern jisme saamne wala darr, zimmedari ya guilt ka use karke aapko dhamki deta hai taaki aap unki shartein maan lein.',
  oneLineExplanation: 'In simple terms: Apni baat manwane ke liye darr (Fear), farz (Obligation) aur guilt ka hathiyar banana.',

  summary30s: 'Emotional blackmail tab hoti hai jab koi apna haq jatane ke bajaye aapko dhamki deta hai ki agar aapne unki baat nahi mani toh wo rishta tod denge, tamasha khada karenge, ya khud ko nuqsan pahunchayenge. Yeh insaan aapki kamzori aur pyaar ko aapke khilaaf use karta hai taaki aap darr ke maare unke aage jhuk jayein.',

  coreConcept: 'Dr. Susan Forward ke mutabiq, emotional blackmail FOG par chalti hai: Fear (ladai ya akelapan ka darr), Obligation (ehsaan ya farz ka bojh), aur Guilt (yeh lagna ki main unhe dukh de raha hu). Yeh 6 stages me ghumta hai: Demand → Resistance → Pressure → Threat → Compliance → Repetition.',
  summary60s: 'Normal ladai me do log aapas me baat karke hal nikalte hain. Lekin emotional blackmail me saamne wala aapko "emotional hostage" bana leta hai. Agar aap kehte hain ki mujhe apne doston ke sath jana hai, toh wo kehte hain: "Agar tum gaye toh wapis mat aana, humara rishta khatam." Yaha do hi raste diye jaate hain: ya toh poori tarah jhuk jao ya fir sab kuch barbaad hote dekho.',

  quickTakeaways: [
    'The FOG Trap: Darr, ehsaan aur guilt ke zariye dimaag ko confuse karna',
    'Ultimatum vs Boundary: Boundary apni safety ke liye hoti hai, blackmail doosre ko control karne ke liye',
    'Blackmail Ko Feed Na Karein: Ek baar jhukne par unki himmat aur badh jati hai',
    'Self-Harm Threats Me Help Lein: Agar koi jaan lene ki dhamki de toh turant helpline ya family ko inform karein',
  ],

  whyItHappens: 'Insaan ko sabse zyada darr apne qareebi rishton ke tootne ka hota hai. Jab koi kehta hai ki "tumhari wajah se main mar jaunga" ya "main tumhe chhod dunga", toh humare dimaag me survival panic trigger ho jata hai aur hum boundary bhool jaate hain.',
  evolutionaryMechanism: 'Aadimanav ke survival me group ka saath zaroori tha. Group se nikaale jaane ka darr itna gehra hai ki insaan blackmail ke aage aasaani se ghutne tek deta hai.',

  howItWorks: 'Yeh 6 steps me chalta hai: Demand aati hai, aap mana karte hain, pressure badhta hai, fir dhamki aati hai, aap darr kar maan jaate hain, aur fir wahi cycle agle hafte dobara repeat hota hai.',
  whereYouEncounterIt: 'Toxic relationships, family arranged marriage pressure me, aur controlling friendships me.',

  howToRecognize: [
    'Choti si baat par breakup ya rishta todne ki dhamki milna',
    '"Agar tumne yeh kiya toh main zeher kha lunga" jaise extreme statements',
    'Aapke personal secrets ko ladai ke waqt weapon ki tarah use karna',
    'Har roz unke mood ke darr se eggshells par chalna',
  ],

  examples: [
    {
      id: 'eb_ex_hi_01',
      domain: 'relationships',
      displayOrder: 1,
      title: 'College Reunion Ki Dhamki',
      description: 'Partner: "Agar tum is reunion me gaye toh wapis aane ki zaroorat nahi hai. Tumhe meri fikar nahi hai, bas apne doston ki padi hai."',
      takeaway: 'Notice karein ki normal social meeting ko seedha rishta khatam karne ki dhamki se jod diya gaya.',
    },
  ],

  scenarios: [
    {
      id: 'eb_scen_hi_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'Shaadi Ka Emotional Ultimatum',
      narrativeContext: 'Ananya ek software engineer hai aur family ke bataye rishte ke liye politely mana karti hai kyunki unke vichaar match nahi karte. Uske papa room me band hokar kehte hain: "Agar tune is ladke se shaadi nahi ki toh main apni insulin nahi lunga. Mujhe marne de, fir jo man kare wo karna. Teri wajah se khandaan me naak kat gayi."',
      biasInAction: 'Papa ne apni health aur jaan ko emotional hostage bana liya taaki Ananya darr aur guilt me shaadi ke liye haan bol de.',
      optimalResponse: 'Medical safety ensure karein par blackmail me shaadi na karein: "Papa, main aapse pyaar karti hu aur doctor ko call kar rahi hu insulin ke liye. Lekin shaadi mera personal decision hai aur main darr me decision nahi le sakti."',
      reflectionPrompt: 'Kya aapke sath kabhi hua hai ki kisi ne apni health ya jaan ka darr dikhakar aapse zabardasti kuch karwaya ho?',
    },
  ],

  limitationsAndControversies: 'Caution: Har boundary ko blackmail na kahein. Agar koi kehta hai: "Agar tum cheat karoge toh main divorce dunga," yeh unki personal boundary hai. Blackmail tab hota hai jab aapki personal life ko control karne ke liye dhamki di jaye.',

  howToRespond: 'Dr. Susan Forward ka S.O.S. Formula apnayein: (1) STOP (Turant decision na lein, time maangein); (2) OBSERVE (Samjhein ki yeh Fear hai, Obligation hai ya Guilt); (3) SHIFT (Calmly boundary par tike rahein).',
  psychologicalDefenses: [
    {
      title: 'Time-Out Buffer',
      instruction: 'Bolein: "Main ultimatums me decision nahi leta. Mujhe 24 ghante ka time chahiye sochne ke liye."',
    },
    {
      title: 'Responsibility Wapis Dein',
      instruction: 'Bolein: "Aap apne decisions lene ke liye azaad hain, lekin mera faisla wahi rahega."',
    },
    {
      title: 'Self-Harm Threat Me Help Lein',
      instruction: 'Agar koi jaan lene ki dhamki de, toh seedha Tele-MANAS (14416) ya family ko involve karein, akele deal na karein.',
    },
  ],

  researchSummary: 'Forward & Frazier (1997) ne FOG model banaya tha. Dutton & Painter (1993) ki research dikhati hai ki achanak pyaar aur achanak dhamki ke beech ghumne se traumatic bonding ban jati hai.',

  references: TOPIC_EMOTIONAL_BLACKMAIL_EN.references,
  commonMisconceptions: 'Myth: "Agar main unki baat maan lu toh wo shant ho jayenge." Reality: Blackmail me surrender karne se samne wale ko pata chal jata hai ki dhamki kaam karti hai, isliye agli baar wo aur badi dhamki dete hain.',

  reflectionPrompt: 'Kya aapke sath kabhi hua hai ki kisi ne apni health ya jaan ka darr dikhakar aapse zabardasti kuch karwaya ho?',

  practiceQuestions: TOPIC_EMOTIONAL_BLACKMAIL_EN.practiceQuestions,
  visualContent: TOPIC_EMOTIONAL_BLACKMAIL_EN.visualContent,
  tags: TOPIC_EMOTIONAL_BLACKMAIL_EN.tags,
  relatedTopics: TOPIC_EMOTIONAL_BLACKMAIL_EN.relatedTopics,
  seoTitle: 'Emotional Blackmail Kya Hai? FOG Model & Boundary Responses | Mentalab Mind',
  seoDescription: 'Emotional blackmail (Fear, Obligation, Guilt) ko kaise pehchanein aur ultimatums ka samna bina lade kaise karein. Seekhein practical boundary steps.',
  canonicalUrl: '/mind/manipulation-awareness/emotional-blackmail',
  ogImageUrl: '/images/mind/emotional-blackmail.png',
  publishedAt: '2026-09-22T00:00:00Z',
  deepExplanation: 'Emotional blackmail ek coercive control tactic hai jo attachment insecurity aur FOG ko exploit karta hai.',
};

/**
 * Localized Helper
 */
function createLocalizedEmotionalBlackmailRecord(
  langCode: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_EMOTIONAL_BLACKMAIL_EN,
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

export const TOPIC_EMOTIONAL_BLACKMAIL: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_EMOTIONAL_BLACKMAIL_EN,
  hinglish: TOPIC_EMOTIONAL_BLACKMAIL_HINGLISH,
  hi: createLocalizedEmotionalBlackmailRecord(
    'hi',
    'इमोशनल ब्लैकमेल: डर, कर्तव्य और अपराधबोध (FOG मॉडल) से बचाव',
    'धमकी, अलगाव और भावनात्मक बंधक बनाने की रणनीति को समझें और मानसिक संप्रभुता हासिल करें।',
    'सरल शब्दों में: डर (Fear), कर्तव्य (Obligation) और अपराधबोध (Guilt) का हथियार बनाकर किसी को अपनी मांगें मानने पर मजबूर करना।',
    'इमोशनल ब्लैकमेल तब होता है जब कोई व्यक्ति आपकी बात मनवाने के लिए यह धमकी देता है कि अगर आपने उनकी बात नहीं मानी तो वे रिश्ता तोड़ देंगे, खुद को नुकसान पहुंचाएंगे या तमाशा करेंगे। आप अपनी इच्छा से नहीं, बल्कि भावनात्मक आतंक से बचने के लिए झुकते हैं।',
    'डॉ. सुसान फॉरवर्ड द्वारा विकसित FOG मॉडल (डर, दायित्व और अपराधबोध) यह समझाता है कि कैसे करीबी रिश्तों में अधिकार छीनने के लिए भावनात्मक बंधक बनाया जाता है।',
    [
      'FOG का जाल: डर, कर्तव्य और अपराधबोध के जरिए निर्णय क्षमता को पंगु बनाना',
      'सीमा बनाम ब्लैकमेल: अपनी सुरक्षा के लिए सीमा तय करना सामान्य है; दूसरे को नियंत्रित करने के लिए धमकी देना ब्लैकमेल है',
      'धमकियों के आगे न झुकें: ब्लैकमेल स्वीकार करने से मांगें हमेशा बढ़ती हैं',
      'आत्म-नुकसान की धमकियों पर पेशेवर मदद: यदि कोई जान देने की धमकी दे, तो तुरंत आपातकालीन सेवाओं (14416) से संपर्क करें',
    ]
  ),
  gu: createLocalizedEmotionalBlackmailRecord(
    'gu',
    'ઇમોશનલ બ્લેકમેઇલ: ડર, ફરજ અને અપરાધભાવ (FOG મોડેલ) થી રક્ષણ',
    'લાગણીઓનો દુરુપયોગ કરીને કરવામાં આવતી બળજબરીને ઓળખો અને સીમાઓ બનાવો.',
    'સરળ શબ્દોમાં: પોતાની જીદ પૂરી કરવા માટે ડર, ફરજ અને અપરાધભાવનો હથિયાર તરીકે ઉપયોગ કરવો.',
    'જ્યારે કોઈ સંબંધ તોડવાની કે પોતાને નુકસાન પહોંચાડવાની ધમકી આપીને પોતાની વાત મનાવે છે, ત્યારે તેને ઇમોશનલ બ્લેકમેઇલ કહે છે.',
    'આ પદ્ધતિમાં વ્યક્તિ સામેવાળાની સંવેદનશીલતા અને સ્નેહનો ઉપયોગ પોતાના ફાયદા માટે કરે છે.',
    [
      'FOG મોડેલને સમજો: ડર, ફરજ અને અપરાધભાવનું ચક્ર',
      'ધમકીઓ આગળ ઝૂકવાનું બંધ કરો',
      'ગંભીર પરિસ્થિતિમાં વ્યાવસાયિક કાઉન્સેલરની મદદ લો',
    ]
  ),
  mr: createLocalizedEmotionalBlackmailRecord(
    'mr',
    'इमोशनल ब्लॅकमेल: भीती, कर्तव्य आणि अपराधीपणाच्या (FOG) विळख्यातून सुटका',
    'भावनिक दबावाचा वापर करून स्वतःच्या अटी लादण्याच्या वृत्तीला ओळखा.',
    'सोप्या भाषेत: भीती, कर्तव्य आणि अपराधीपणाचा गैरवापर करून निर्णय बदलण्यास भाग पाडणे.',
    'जेव्हा एखादी व्यक्ती स्वतःचे नुकसान करण्याची किंवा नाते तोडण्याची धमकी देऊन आपली गोष्ट मान्य करून घेते, तेव्हा त्याला इमोशनल ब्लॅकमेल म्हणतात.',
    'इमोशनल ब्लॅकमेलमध्ये शरण आल्याने समोरच्याची हिंमत आणखी वाढते.',
    [
      'भावनिक दबावाखाली कोणताही मोठा निर्णय घेऊ नका',
      'स्वतःची सीमा आणि ब्लॅकमेल यातील फरक ओळखा',
      'आत्महत्येची धमकी असल्यास तात्काळ हेल्पलाईनशी संपर्क साधा',
    ]
  ),
  bn: createLocalizedEmotionalBlackmailRecord(
    'bn',
    'ইমোশনাল ব্ল্যাকমেইল: ভয়, বাধ্যবাধকতা ও অপরাধবোধ (FOG মডেল) প্রতিরোধ',
    'সম্পর্ক ছিন্ন করার হুমকি ও মানসিক চাপের মাধ্যমে নিয়ন্ত্রণ করার অপকৌশল।',
    'সহজ কথায়: ভয়, দায়িত্ববোধ এবং অপরাধবোধকে অস্ত্র বানিয়ে কাউকে দাবি মানতে বাধ্য করা।',
    'ইমোশনাল ব্ল্যাকমেইল এমন একটি জবরদস্তিমূলক আচরণ যেখানে অন্য ব্যক্তি নিজের ইচ্ছা চাপিয়ে দিতে চরম হুমকি বা সম্পর্ক শেষ করার ভয় দেখায়।',
    'এটি মানুষের ভালোবাসাকে জিম্মি করে ব্যক্তিগত স্বাধীনতা কেড়ে নেওয়ার একটি কৌশল।',
    [
      'ভয়, বাধ্যবাধকতা ও অপরাধবোধের ত্রিভুজকে চিনুন',
      'হুমকির মুখে আত্মসমর্পণ করবেন না',
      'প্রয়োজনে মানসিক স্বাস্থ্য বিশেষজ্ঞ বা হেল্পলাইনের সাহায্য নিন',
    ]
  ),
  ta: createLocalizedEmotionalBlackmailRecord(
    'ta',
    'எமோஷனல் பிளாக்மெயில்: பயம், கடமை, குற்ற உணர்ச்சியை (FOG) கையாளுதல்',
    'உறவை முறிப்பதாக மிரட்டி அடிபணிய வைக்கும் உளவியல் வன்முறையை எதிர்கொள்ளுதல்.',
    'எளிய சொற்களில்: பயம், கடமை மற்றும் குற்ற உணர்வை ஆயுதமாகப் பயன்படுத்தி காரியம் சாதிப்பது.',
    'ஒருவர் தனது பேச்சை கேட்கவில்லை என்றால் தன்னைத்தானே காயப்படுத்திக் கொள்வதாகவோ அல்லது உறவை முறிப்பதாகவோ மிரட்டுவதே எமோஷனல் பிளாக்மெயில்.',
    'இது ஒருவரை மனரீதியாக பணயக்கைதியாக மாற்றி அவர்களின் சுதந்திரத்தைப் பறிக்கும் செயலாகும்.',
    [
      'பயம் மற்றும் குற்ற உணர்ச்சிக்கு அடிபணியாதீர்கள்',
      'மிரட்டல்களுக்குப் பணியாமல் தெளிவான எல்லைகளை வகுக்கவும்',
      'உயிருக்கு ஆபத்தான மிரட்டல்கள் வந்தால் அவசர உதவி எண்களைத் தொடர்பு கொள்ளவும்',
    ]
  ),
  te: createLocalizedEmotionalBlackmailRecord(
    'te',
    'ఎమోషనల్ బ్లాక్‌మెయిల్: భయం, బాధ్యత, అపరాధ భావన (FOG) నుండి రక్షణ',
    'సంబంధాలను తెంచుకుంటామని బెదిరించి లొంగదీసుకునే మనస్తత్వాన్ని ఎదుర్కొనే విధానం.',
    'సరళమైన మాటల్లో: భయం, బాధ్యత మరియు గిల్ట్‌లను అస్త్రాలుగా చేసుకుని బలవంతంగా తమ మాట వినేలా చేయడం.',
    'ఎదుటివారు తమ మాట వినకపోతే తమ ప్రాణాలకు హాని చేసుకుంటామని లేదా బంధాన్ని తెంచుకుంటామని బెదిరించడమే ఎమోషనల్ బ్లాక్‌మెయిల్.',
    'ఇలాంటి బెదిరింపులకు తలొగ్గడం వల్ల సమస్య మరింత జటిలమవుతుంది.',
    [
      'భయంతో నిర్ణయాలు తీసుకోకండి',
      'హద్దులను స్పష్టంగా కాపాడుకోండి',
      'తీవ్రమైన బెదిరింపులు ఎదురైనప్పుడు ప్రొఫెషనల్ సహాయం తీసుకోండి',
    ]
  ),
  kn: createLocalizedEmotionalBlackmailRecord(
    'kn',
    'ಎಮೋಷನಲ್ ಬ್ಲಾಕ್‌ಮೇಲ್: ಭಯ, ಕರ್ತವ್ಯ ಮತ್ತು ತಪ್ಪಿತಸ್ಥ ಭಾವನೆಯಿಂದ ಮುಕ್ತಿ',
    'ಭಾವನಾತ್ಮಕ ಬೆದರಿಕೆಗಳ ಮೂಲಕ ತಮ್ಮಿಷ್ಟದಂತೆ ನಡೆದುಕೊಳ್ಳಲು ಒತ್ತಾಯಿಸುವ ತಂತ್ರವನ್ನು ಎದುರಿಸಿ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಭಯ, ಬಾಧ್ಯತೆ ಮತ್ತು ಅಪರಾಧಿ ಭಾವನೆಯನ್ನು ಅಸ್ತ್ರವಾಗಿ ಬಳಸಿ ನಿಯಂತ್ರಿಸುವುದು.',
    'ತಮ್ಮ ಮಾತು ಕೇಳದಿದ್ದರೆ ಸಂಬಂಧ ಮುರಿಯುವುದಾಗಿ ಅಥವಾ ಜೀವಕ್ಕೆ ಅಪಾಯ ತಂದುಕೊಳ್ಳುವುದಾಗಿ ಹೆದರಿಸುವುದೇ ಎಮೋಷನಲ್ ಬ್ಲಾಕ್‌ಮೇಲ್.',
    'ಇಂತಹ ಒತ್ತಡಗಳಿಗೆ ಮಣಿಯುವುದರಿಂದ ಬ್ಲಾಕ್‌ಮೇಲ್ ಮಾಡುವವರ ವರ್ತನೆ ಮತ್ತಷ್ಟು ಹೆಚ್ಚುತ್ತದೆ.',
    [
      'ಭಾವನಾತ್ಮಕ ಬೆದರಿಕೆಗಳಿಗೆ ಬಲಿಯಾಗಬೇಡಿ',
      'ಗಡಿಗಳನ್ನು ದೃಢವಾಗಿ ಕಾಪಾಡಿಕೊಳ್ಳಿ',
      'ತುರ್ತು ಸಂದರ್ಭಗಳಲ್ಲಿ ವೃತ್ತಿಪರ ಸಹಾಯವಾಣಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ',
    ]
  ),
  ml: createLocalizedEmotionalBlackmailRecord(
    'ml',
    'ഇമോഷണൽ ബ്ലാക്ക്‌മെയിൽ: ഭയം, ബാധ്യത, കുറ്റബോധം (FOG) എന്നിവയെ മറികടക്കാം',
    'ബന്ധങ്ങൾ തകർക്കുമെന്ന് ഭീഷണിപ്പെടുത്തി സ്വാധീനം ചെലുത്തുന്ന രീതിയെ പ്രതിരോധിക്കുക.',
    'ലളിതമായി പറഞ്ഞാൽ: ഭയം, ബാധ്യത, കുറ്റബോധം എന്നിവ ഉപയോഗിച്ച് ഒരാളെ തങ്ങളുടെ ചൊൽപ്പടിക്ക് നിർത്തുക.',
    'തങ്ങളുടെ ആഗ്രഹം സാധിച്ചില്ലെങ്കിൽ ആത്മഹത്യ ചെയ്യുമെന്നോ ബന്ധം ഉപേക്ഷിക്കുമെന്നോ ഭീഷണിപ്പെടുത്തുന്നതാണ് ഇമോഷണൽ ബ്ലാക്ക്‌മെയിൽ.',
    'വൈകാരിക ഭീഷണികൾക്ക് വഴങ്ങുന്നത് ദീർഘകാല മാനസിക സംഘർഷങ്ങൾക്ക് കാരണമാകും.',
    [
      'ഭയത്തിന് അടിപ്പെടാതിരിക്കുക',
      'വ്യക്തിഗത സ്വാതന്ത്ര്യവും പരിധികളും സംരക്ഷിക്കുക',
      'ആവശ്യഘട്ടങ്ങളിൽ ഹെൽപ്പ്‌ലൈൻ സഹായം തേടുക',
    ]
  ),
  pa: createLocalizedEmotionalBlackmailRecord(
    'pa',
    'ਇਮੋਸ਼ਨਲ ਬਲੈਕਮੇਲ: ਡਰ, ਫ਼ਰਜ਼ ਅਤੇ ਅਹਿਸਾਸ-ਏ-ਜੁਰਮ (FOG) ਦਾ ਟਾਕਰਾ',
    'ਜਜ਼ਬਾਤੀ ਧਮਕੀਆਂ ਦੇ ਕੇ ਆਪਣੀ ਗੱਲ ਮਨਵਾਉਣ ਦੇ ਪੈਟਰਨ ਨੂੰ ਸਮਝੋ ਅਤੇ ਸੀਮਾਵਾਂ ਬਣਾਓ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਡਰ, ਫ਼ਰਜ਼ ਅਤੇ ਗਿਲਟ ਨੂੰ ਹਥਿਆਰ ਬਣਾ ਕੇ ਕਿਸੇ ਨੂੰ ਮਜਬੂਰ ਕਰਨਾ।',
    'ਜਦੋਂ ਕੋਈ ਵਿਅਕਤੀ ਰਿਸ਼ਤਾ ਤੋੜਨ ਜਾਂ ਖ਼ੁਦ ਨੂੰ ਨੁਕਸਾਨ ਪਹੁੰਚਾਉਣ ਦਾ ਡਰ ਦਿਖਾ ਕੇ ਆਪਣੀ ਜ਼ਿੱਦ ਪੂਰੀ ਕਰਵਾਏ, ਤਾਂ ਇਸਨੂੰ ਇਮੋਸ਼ਨਲ ਬਲੈਕਮੇਲ ਕਹਿੰਦੇ ਹਨ।',
    'ਇਸ ਦਬਾਅ ਅੱਗੇ ਝੁਕਣ ਨਾਲ ਅਜਿਹੀਆਂ ਧਮਕੀਆਂ ਦਾ ਸਿਲਸਿਲਾ ਹੋਰ ਵਧ ਜਾਂਦਾ ਹੈ।',
    [
      'ਡਰ ਅਤੇ ਗਿਲਟ ਦੇ ਜਾਲ ਨੂੰ ਪਛਾਣੋ',
      'ਧਮਕੀਆਂ ਅੱਗੇ ਸਮਝੌਤਾ ਨਾ ਕਰੋ',
      'ਗੰਭੀਰ ਸਥਿਤੀ ਵਿੱਚ ਮਾਹਿਰਾਂ ਦੀ ਸਹਾਇਤਾ ਲਓ',
    ]
  ),
  ur: createLocalizedEmotionalBlackmailRecord(
    'ur',
    'ایموشنل بلیک میل: خوف، ذمہ داری اور احساسِ جرم (FOG ماڈل) سے بچاؤ',
    'تعلق توڑنے یا خود کو نقصان پہنچانے کی دھمکیوں کے ذریعے مجبور کرنے کی نفسیات۔',
    'آسان الفاظ میں: خوف، فرض اور احساسِ ندامت کو ہتھیار بنا کر کسی کو اپنی مرضی پر چلانا۔',
    'جب کوئی شخص اپنی بات منوانے کے لیے یہ دھمکی دے کہ اگر تم نے میری بات نہ مانی تو میں اپنی جان لے لوں گا یا تم سے قطع تعلق کر لوں گا، تو یہ ایموشنل بلیک میل ہے۔',
    'یہ کسی کو جذباتی طور پر یرغمال بنا کر اس کی خودمختاری سلب کرنے کا خطرناک عمل ہے۔',
    [
      'خوف اور بلیک میلنگ کے آگے مت جھکیں',
      'اپنی حدود اور وقار کا تحفظ کریں',
      'انتہائی صورت حال میں فوری ہیلپ لائن سے رجوع کریں',
    ]
  ),
  or: createLocalizedEmotionalBlackmailRecord(
    'or',
    'ଇମୋସନାଲ୍ ବ୍ଲାକମେଲ୍: ଭୟ, କର୍ତ୍ତବ୍ୟ ଓ ଅପରାଧବୋଧ (FOG) ରୁ ମୁକ୍ତି',
    'ଭାବପ୍ରବଣତାର ଫାଇଦା ଉଠାଇ ଧମକ ଦେବାର ମାନସିକତାକୁ ପ୍ରତିରୋଧ କରନ୍ତୁ।',
    'ସରଳ ଭାଷାରେ: ଭୟ, ଦାୟିତ୍ୱବୋଧ ଏବଂ ଅପରାଧବୋଧକୁ ଅସ୍ତ୍ର କରି ନିଜ କଥା ମନାଇବା।',
    'ଯେତେବେଳେ ଜଣେ ବ୍ୟକ୍ତି ସମ୍ପର୍କ ଭାଙ୍ଗିବା କିମ୍ବା ନିଜକୁ କ୍ଷତି ପହଞ୍ଚାଇବା ଭଳି ଧମକ ଦେଇ ନିଜ ଦାବି ପୂରଣ କରାଏ, ତାହା ଇମୋସନାଲ୍ ବ୍ଲାକମେଲ୍ ଅଟେ।',
    'ଏହି ଚାପ ଆଗରେ ମୁଣ୍ଡ ନୁଆଁଇବା ଦ୍ୱାରା ଶୋଷଣ ଆହୁରି ବଢ଼ିଥାଏ।',
    [
      'ଭାବନାତ୍ମକ ବ୍ଲାକମେଲ୍ ଆଗରେ ହାର ମାନନ୍ତୁ ନାହିଁ',
      'ନିଜ ସୀମାକୁ ସ୍ପଷ୍ଟ ଏବଂ ଦୃଢ଼ ରଖନ୍ତୁ',
      'ଆବଶ୍ୟକ ସ୍ଥଳେ ବିଶେଷଜ୍ଞଙ୍କ ପରାମର୍ଶ ନିଅନ୍ତୁ',
    ]
  ),
  as: createLocalizedEmotionalBlackmailRecord(
    'as',
    'ইমোচনেল ব্লেকমেইল: ভয়, দায়িত্ব আৰু অপৰাধবোধৰ (FOG) চক্ৰান্ত প্ৰতিৰোধ',
    'সম্পৰ্ক শেষ কৰাৰ ভাবুকি দি ব্যক্তিগত স্বাধীনতা কাঢ়ি লোৱাৰ মানসিক কৌশল।',
    'সহজ ভাষাত: ভয়, কৰ্তব্য আৰু অপৰাধবোধক অস্ত্ৰ হিচাপে ব্যৱহাৰ কৰি নিজৰ কথা মনাব বিচৰা।',
    'যেতিয়া কোনো ব্যক্তিয়ে নিজৰ কথা নুশুনিলে সম্পৰ্ক শেষ কৰাৰ বা নিজকে ক্ষতি কৰাৰ ভাবুকি দিয়ে, তেতিয়া তাক ইমোচনেল ব্লেকমেইল বোলা হয়।',
    'এই ধৰণৰ ব্লেকমেইলিঙৰ ওচৰত আত্মসমৰ্পণ কৰিলে সমস্যাৰ কেতিয়াও স্থায়ী সমাধান নহয়।',
    [
      'ভয় আৰু মানসিক চাপৰ বিৰুদ্ধে থিয় দিয়ক',
      'স্পষ্ট সীমাৰেখা নিৰ্ধাৰণ কৰক',
      'প্ৰয়োজনবোধে মানসিক স্বাস্থ্য বিশেষজ্ঞৰ কাষ চাপক',
    ]
  ),
};
