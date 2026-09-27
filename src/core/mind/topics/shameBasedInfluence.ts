import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 07: Shame-Based Influence
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Shame vs. Guilt Distinct Emotional Systems (Tangney, Stuewig, & Mashek, 2007)
 * - Social Self-Preservation Theory & Cortisol Spikes (Dickerson & Kemeny, 2004)
 * - Public Humiliation, Honor Codes & Collectivist Compliance (Markus & Kitayama, 1991)
 * - The "Log Kya Kahenge?" Social Weaponization Dynamic
 */

export const TOPIC_SHAME_BASED_INFLUENCE_EN: MindTopicDetail = {
  id: 'shame_based_influence',
  categoryId: 'manipulation_awareness',
  slug: 'shame-based-influence',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 8,
  scientificConsensusTier: 'established',
  sortWeight: 7,
  viewCount: 6120,
  shareCount: 530,
  bookmarkCount: 940,
  title: 'Shame-Based Influence: Deconstructing Social Humiliation & Moral Coercion',
  subtitle: 'Understanding the neurobiology of shame, distinguishing behavior critiques from identity attacks, and breaking free from social condemnation.',
  shortDescription: 'The tactical weaponization of embarrassment, unworthiness, or social disgrace to force conformity by attacking a person’s fundamental identity.',
  oneLineExplanation: 'In simple terms: Making someone feel fundamentally defective, dirty, or socially disgraced so they will do anything to regain group acceptance.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'Shame-based influence targets your core identity rather than your actions. While guilt says "You made a mistake," shame says "You *are* a mistake." Manipulators use public mockery, moral superiority, family honor ("Log kya kahenge?"), or body-shaming to make you feel defective and unworthy of belonging. Because humans are wired to fear social expulsion like physical death, you surrender your autonomy just to make the burning humiliation stop.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Grounded in June Tangney’s emotional taxonomy (2007), guilt is reparative (focusing on an act that can be rectified), whereas shame is debilitating (focusing on global self-defectiveness). In shame-based influence, the influencer links your disagreement to an inherent moral or social flaw: "A decent daughter would never say that," or "Only an arrogant loser would question this policy." The goal is social self-shrinkage: forcing you into silent, desperate compliance.',
  summary60s: 'Unlike constructive feedback, which provides clear behavioral pathways for improvement, shame offers no redemption except complete submission. When an authority figure shames you in front of colleagues or family, your autonomic nervous system enters an acute Social Evaluative Threat (Dickerson & Kemeny, 2004). Blood rushes to your face, your posture collapses inward, and your gaze drops. In this flooded neurochemical state, rational debate becomes biologically impossible. The influencer uses your desperate need to erase this public humiliation as a lever to extract unearned apologies and behavioral obedience.',

  quickTakeaways: [
    'Guilt vs. Shame: Guilt targets behavior ("I did something bad"); shame targets identity ("I am fundamentally bad")',
    'The Social Death Terror: Shaming hijacks our ancient evolutionary fear of banishment from the safety of the tribe',
    'Behavioral Critique vs. Shame Attack: Healthy critique focuses on specific actions; shame attacks your character and worth',
    'The Self-Worth Shield: Disconnecting your intrinsic human dignity from another person’s moral judgment disarms shame instantly',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Dickerson & Kemeny’s meta-analysis (2004) proved that "Social Evaluative Threat" (situations where one’s core social status or esteem can be negatively judged by others) triggers the highest cortisol and proinflammatory cytokine releases of any psychological stressor. Shame activates the dorsal anterior cingulate cortex—the same brain region that registers physical burns and fractures. The pain of shame is neurochemically real physical pain.',
  evolutionaryMechanism: 'For ancestral hunter-gatherers, expulsion from the band meant guaranteed starvation or predator death. The shame response (curling inward, averting eyes, freezing) evolved as an appeasement ritual to signal total submission to dominant group members and prevent outright expulsion. Manipulators exploit this survival ritual.',

  // SECTION E — WHY MIGHT SOMEONE USE THIS PATTERN?
  howItWorks: 'Shame is an extraordinarily efficient weapon in patriarchal families, religious institutions, schools, and tightly knit social groups. It requires zero physical force and delegates enforcement to the victim\'s own conscience. The shamer often projects their own deep-seated self-loathing or anxiety onto the target to assert moral superiority.',
  whereYouEncounterIt: 'Family dynamics ("honor" and marriage coercion), toxic coaching academies, social media mobbing, body-shaming in relationships, and authoritarian workplaces.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Attacking your character rather than addressing the specific issue ("You are selfish, cold, and unnatural")',
    'Weaponizing public audiences (reprimanding or mocking you in front of family, peers, or WhatsApp groups)',
    'Invoking vague collective judgment ("Everyone in the community is talking about how you’ve disgraced us")',
    'Comparing you unfavorably to a "perfect" sibling or colleague to emphasize your defectiveness',
    'Using disgusted facial expressions, contemptuous sneers, or cold moral condescension',
  ],

  // SECTION G — NORMAL BEHAVIOR VS UNHEALTHY PATTERN
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Constructive Behavioral Feedback vs. Shame-Based Influence',
    description: 'The critical psychological distinction between addressing mistakes and assassinating character.',
    analogySideA: {
      label: 'Constructive Behavioral Feedback (Reparative & Objective)',
      detail: '"The numbers in this financial model are off by 12%. Let’s review where the calculation slipped so we can correct it before Monday." (Focuses on task, preserves dignity, offers clear solution).',
    },
    analogySideB: {
      label: 'Shame-Based Influence (Coercive & Identity-Attacking)',
      detail: '"How could you be so utterly incompetent? Any school child could do this. You have no brain, and you’re a complete embarrassment to this department." (Attacks identity, humiliates, induces despair).',
    },
  },

  // SECTION H, I, J — REAL-LIFE EXAMPLES & INDIAN CONTEXT
  examples: [
    {
      id: 'sbi_ex_01',
      domain: 'education',
      displayOrder: 1,
      title: 'The Classroom Black-Board Humiliation',
      description: 'A coaching class instructor makes a student who scored poorly on a test stand facing the wall for three hours, announcing to 120 peers: "Look at him. His parents spent their hard-earned money, and he produced zero. You are a parasite on your family. Don’t even bother showing your face here tomorrow."',
      takeaway: 'Notice how the educational deficit is converted into existential moral worthlessness in front of peers.',
    },
    {
      id: 'sbi_ex_02',
      domain: 'relationships',
      displayOrder: 2,
      title: 'The Social Graces Weapon',
      description: 'At a dinner party, Partner A shares an enthusiastic opinion. Partner B rolls their eyes, laughs derisively, and tells the table: "Please ignore him, everyone. He has no social awareness and always embarrasses me whenever we leave the house."',
      takeaway: 'Public humiliation designed to condition the partner into silence and domestic dependence.',
    },
  ],

  scenarios: [
    {
      id: 'sbi_scen_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'The "Log Kya Kahenge?" Career Coercion',
      narrativeContext: 'Neha, a 23-year-old in Lucknow, decides to decline a traditional government bank clerical post to join a Bangalore design startup. Her mother gathers the aunts and grandmothers in the living room, weeping openly: "After 25 years of sacrificing everything for your upbringing, this is the gratitude we get? Sharma ji asked yesterday why my daughter is running off to live alone like an uncultured girl. You are spitting on your father’s white hair. If you leave, we can never hold our heads high in this community again. People will say we failed as parents."',
      biasInAction: 'The mother mobilizes the ultimate collectivist shame weapon ("Log kya kahenge?" / Family Honor) to convert Neha’s career choice into a public crime of filial disrespect and parental ruin.',
      optimalResponse: 'Separate filial respect from collective shame coercion: "Mummy, I love you and Papa deeply, and I respect your sacrifices. But living in Bangalore for my design career is not a disgrace or a moral failure. Society will always find something to talk about. My dignity and love for this family are intact, and I will not decide my future out of fear of neighborhood gossip."',
      reflectionPrompt: 'Have you ever abandoned a healthy personal dream or boundary simply because someone threatened you with community shame and "naak katna"?',
    },
  ],

  // SECTION K — SPOT THE PATTERN (Interactive Scenario)
  interactiveScenarios: [
    {
      id: 'scen_sbi_01',
      topicId: 'shame_based_influence',
      title: 'Spot the Pattern: The "Moral Defect" Family Dinner',
      contextVignette: 'During a family festival, you politely decline to eat a heavy sweet dish due to medical dietary restrictions. A senior relative stands up, addresses the entire dining table with an exaggerated grimace, and announces: "Look at our modern intellectual! Too proud to eat our traditional food. You think you’re better than everyone here, don’t you? You have completely forgotten your roots and become shameless."',
      vignetteSourceType: 'family_relationships',
      question: 'What is the most accurate psychological deconstruction of this relative’s behavior?',
      options: [
        {
          id: 'opt_sbi_a',
          label: 'A',
          text: 'The relative is offering helpful, culturally sensitive nutritional advice.',
          explanation: 'Nutrition advice focuses on health, not public character assassination.',
          isCorrect: false,
        },
        {
          id: 'opt_sbi_b',
          label: 'B',
          text: 'The relative is using shame-based influence: escalating a neutral health boundary into a public charge of moral defectiveness and cultural betrayal to force compliance.',
          explanation: 'Correct. Converting a dietary limit into "arrogance and shamelessness" in front of an audience is classic shame manipulation.',
          isCorrect: true,
        },
        {
          id: 'opt_sbi_c',
          label: 'C',
          text: 'You should immediately eat three sweets and apologize to restore family harmony.',
          explanation: 'Compromising medical health to appease irrational shame-mongering creates toxic precedents.',
          isCorrect: false,
        },
      ],
      revealedExplanation: {
        correctSummary: 'Identify the shame escalation: Neutral boundary → Public accusation of character defect.',
        whyItMatters: 'Shame relies on audience amplification. When you recognize that the issue is their control need rather than your character, the emotional burn dissipates.',
        cognitiveTrap: 'Internalizing External Disgust: Believing that because someone acted disgusted with you, you must be disgusting.',
        actionableAntidote: 'The "Boundary Decoupling" script: "My dietary health is personal and has nothing to do with my respect for our culture."',
      },
      difficulty: 'medium',
      culturalContext: 'indian_general',
    },
  ],

  // SECTION L & Q — "BUT BE CAREFUL" & LIMITATIONS
  limitationsAndControversies: 'Caution: Do not confuse healthy ethical conscience with toxic shame. If a person feels remorse after lying, stealing, or cheating on a partner, that is adaptive guilt and pro-social conscience guiding restorative justice. Shame-based influence is pathological because it attacks the human being\'s fundamental worth, offers no restorative path, and is deployed over benign autonomy choices (clothes, career, personal boundaries).',

  // SECTION M & N — HOW TO RESPOND & SCRIPTS
  howToRespond: 'Apply the "DIGNITY ANCHOR & DEFLECT" Protocol: (1) Stand Upright: Counteract the somatic slump of shame by squaring shoulders and lifting your chin; (2) Separate Behavior from Worth: Tell yourself: "Their disgust is their opinion, not my reality"; (3) Pivot to Objective Facts: Refuse to defend your character; address only the concrete issue.',
  psychologicalDefenses: [
    {
      title: 'The Identity Shield Script',
      instruction: 'Say: "You are welcome to disagree with my decision, but I will not engage with attacks on my character or worth."',
    },
    {
      title: 'The Audience Defuser',
      instruction: 'When shamed in public: "This is a private personal matter. Let us not perform for an audience."',
    },
    {
      title: 'Disarm the "What Will People Say" Trap',
      instruction: 'Say: "People will talk regardless of what choices we make. I live my life by my values, not neighborhood gossip."',
    },
    {
      title: 'The Behavioral Reframe',
      instruction: 'Say: "I made a specific scheduling error, and I am correcting it. That does not make me an incompetent person."',
    },
  ],

  // SECTION P — RESEARCH & CITATIONS
  researchSummary: 'June Tangney’s landmark research (Tangney et al., 2007) across decades proved that while guilt fosters empathy, constructive apology, and restorative behavior, shame produces self-defensive rage, depression, and destructive withdrawal. Dickerson & Kemeny’s (2004) meta-analysis of 208 laboratory studies confirmed that Social-Evaluative Threat is the single most potent physiological trigger of human HPA-axis stress response (cortisol hyper-secretion). Brené Brown’s clinical research demonstrated that shame cannot survive being spoken with empathy and healthy boundary clarity.',

  references: [
    {
      id: 'sbi_ref_01',
      title: 'Moral emotions and moral behavior',
      citation: 'Tangney, J. P., Stuewig, J., & Mashek, D. J. (2007). Annual Review of Psychology, 58, 345–372.',
      authors: 'June P. Tangney, Jeffrey Stuewig, Debra J. Mashek',
      publicationYear: 2007,
      journalOrPublisher: 'Annual Review of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_meta_analysis',
      doiOrUrl: 'https://doi.org/10.1146/annurev.psych.56.091103.070145',
      relevance: 'Definitive empirical review distinguishing reparative guilt from corrosive, manipulative shame.',
      displayOrder: 1,
    },
    {
      id: 'sbi_ref_02',
      title: 'Acute stressors and cortisol responses: a theoretical integration and synthesis of laboratory research',
      citation: 'Dickerson, S. S., & Kemeny, M. E. (2004). Psychological Bulletin, 130(3), 355–391.',
      authors: 'Sally S. Dickerson, Margaret E. Kemeny',
      publicationYear: 2004,
      journalOrPublisher: 'Psychological Bulletin',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_meta_analysis',
      doiOrUrl: 'https://doi.org/10.1037/0033-2909.130.3.355',
      relevance: 'Proves social-evaluative threat and public shame induce the most severe neuroendocrine cortisol spikes in humans.',
      displayOrder: 2,
    },
    {
      id: 'sbi_ref_03',
      title: 'Culture and the self: Implications for cognition, emotion, and motivation',
      citation: 'Markus, H. R., & Kitayama, S. (1991). Psychological Review, 98(2), 224–253.',
      authors: 'Hazel R. Markus, Shinobu Kitayama',
      publicationYear: 1991,
      journalOrPublisher: 'Psychological Review',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'foundational_book',
      doiOrUrl: 'https://doi.org/10.1037/0033-295X.98.2.224',
      relevance: 'Explains how collectivist societies utilize face, family honor, and shame to enforce social conformity.',
      displayOrder: 3,
    },
  ],

  // SECTION R — COMMON MYTHS
  commonMisconceptions: 'Myth: "Shaming people is necessary to keep society moral and well-behaved." Reality: Psychological research (Tangney et al., 2007) shows that shame actually increases recidivism, secrecy, addiction, and aggression. Only empathy-based guilt and restorative accountability promote genuine moral behavior.',

  // SECTION S — REFLECTION PROMPT
  reflectionPrompt: 'Can you remember an instance where someone made you feel deeply ashamed of who you are, rather than simply discussing what you did?',

  // SECTION T — PRACTICE QUESTIONS (6 Distinct Questions)
  practiceQuestions: [
    {
      id: 'sbi_pq_01',
      questionType: 'identify_influence_principle',
      question: 'According to June Tangney\'s research, what is the core difference between "Guilt" and "Shame"?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Guilt focuses on evaluating a specific behavior ("I made a mistake"), whereas shame focuses on evaluating the entire self ("I am defective/worthless").',
          isCorrect: true,
          feedbackText: 'Correct. Guilt allows behavioral repair; shame attacks the core identity.',
        },
        {
          id: 'opt_2',
          optionText: 'Guilt is an emotion felt by children, while shame is only felt by adults.',
          isCorrect: false,
          feedbackText: 'Both emotions emerge early in childhood development.',
        },
        {
          id: 'opt_3',
          optionText: 'Guilt is always bad, and shame is always good.',
          isCorrect: false,
          feedbackText: 'Research shows the exact reverse: guilt is reparative, while shame is corrosive.',
        },
      ],
      cognitiveTakeaway: 'Guilt evaluates behavior; shame condemns the entire self.',
    },
    {
      id: 'sbi_pq_02',
      questionType: 'distinction',
      question: 'How do you tell the difference between constructive feedback and shame-based manipulation?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Constructive feedback focuses privately on specific modifiable actions; shame attacks character, often in front of an audience, and offers no path to redemption except submission.',
          isCorrect: true,
          feedbackText: 'Correct. Constructive feedback aims to build competence; shame aims to enforce subordination.',
        },
        {
          id: 'opt_2',
          optionText: 'Constructive feedback is always delivered via email.',
          isCorrect: false,
          feedbackText: 'Delivery medium does not define feedback quality; dignity and objective focus do.',
        },
        {
          id: 'opt_3',
          optionText: 'Constructive feedback never points out mistakes.',
          isCorrect: false,
          feedbackText: 'Constructive feedback points out mistakes clearly, but without demeaning the person.',
        },
      ],
      cognitiveTakeaway: 'Constructive feedback critiques tasks; shame demeans the person.',
    },
    {
      id: 'sbi_pq_03',
      questionType: 'scenario_analysis',
      question: 'In a company all-hands, the CEO singles out a project manager: "This team’s delayed launch is an absolute disgrace to our corporate values. You should be ashamed to show your face in the cafeteria today." What physiological and psychological effect does this trigger?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Social Evaluative Threat: massive cortisol elevation, cognitive narrowing, somatic postural collapse, and defensive withdrawal.',
          isCorrect: true,
          feedbackText: 'Correct. Dickerson & Kemeny (2004) proved public social-evaluative attacks produce peak physiological stress cascades.',
        },
        {
          id: 'opt_2',
          optionText: 'Sudden surge in creative productivity and motivation.',
          isCorrect: false,
          feedbackText: 'Public humiliation crushes innovation and triggers resignation.',
        },
        {
          id: 'opt_3',
          optionText: 'Deep psychological relaxation.',
          isCorrect: false,
          feedbackText: 'Shame activates autonomic panic, not relaxation.',
        },
      ],
      cognitiveTakeaway: 'Public shaming inflicts neurobiological trauma, destroying psychological safety.',
    },
    {
      id: 'sbi_pq_04',
      questionType: 'best_response',
      question: 'When an elder or in-law says, "What will society think of us if you don’t wear traditional clothes to this party? You have brought shame to this household," what is the best non-escalating boundary script?',
      options: [
        {
          id: 'opt_1',
          optionText: '"I understand you care deeply about neighborhood opinions. However, I dress respectfully according to my own values, and my clothing does not diminish my love or dignity for this family."',
          isCorrect: true,
          feedbackText: 'Correct. Acknowledges their social anxiety while cleanly refusing to accept identity shame.',
        },
        {
          id: 'opt_2',
          optionText: 'Scream at them that tradition is stupid and smash a plate on the floor.',
          isCorrect: false,
          feedbackText: 'Dramatic escalation fuels family conflict and invalidates your point.',
        },
        {
          id: 'opt_3',
          optionText: 'Lock yourself in the bathroom and cry for five hours.',
          isCorrect: false,
          feedbackText: 'Surrenders your emotional well-being to irrational external shame.',
        },
      ],
      cognitiveTakeaway: 'Separate their anxiety about external gossip from your intrinsic personal dignity.',
    },
    {
      id: 'sbi_pq_05',
      questionType: 'what_would_you_do',
      question: 'A romantic partner makes fun of your body or appearance whenever friends are around, saying "I’m just joking, you’re so sensitive!" when you object. How should you address this shame dynamic?',
      options: [
        {
          id: 'opt_1',
          optionText: 'State privately and firmly: "Mocking my body in front of others is not a joke; it is public humiliation. If this behavior continues, I will not attend social gatherings with you."',
          isCorrect: true,
          feedbackText: 'Correct. Clearly defines the behavior as humiliation and establishes a firm behavioral boundary with consequence.',
        },
        {
          id: 'opt_2',
          optionText: 'Laugh along with the jokes and make fun of yourself even more.',
          isCorrect: false,
          feedbackText: 'Self-deprecating appeasement invites further disrespect and damages self-esteem.',
        },
        {
          id: 'opt_3',
          optionText: 'Post an unflattering photo of your partner on Instagram as revenge.',
          isCorrect: false,
          feedbackText: 'Retaliatory shaming escalates into toxic abuse cycles.',
        },
      ],
      cognitiveTakeaway: 'Name public mockery as unacceptable and back it with a firm relational boundary.',
    },
    {
      id: 'sbi_pq_06',
      questionType: 'misconception_detection',
      question: 'Why does research (Tangney et al., 2007) show that shaming children or employees leads to higher rates of dishonesty and secrecy rather than improvement?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Because shame makes people feel irredeemably defective; to protect their ego from unbearable pain, they hide mistakes, lie, and shift blame.',
          isCorrect: true,
          feedbackText: 'Correct. Shame promotes concealment and defensiveness, whereas guilt encourages honest ownership and correction.',
        },
        {
          id: 'opt_2',
          optionText: 'Because human beings naturally love lying.',
          isCorrect: false,
          feedbackText: 'Dishonesty in shaming environments is a protective survival mechanism against severe social punishment.',
        },
        {
          id: 'opt_3',
          optionText: 'Because shaming is proven to make people 100% honest.',
          isCorrect: false,
          feedbackText: 'Empirical data conclusively refutes this common authoritarian myth.',
        },
      ],
      cognitiveTakeaway: 'Shame drives errors underground into secrecy, whereas psychological safety fosters honest accountability.',
    },
  ],

  // VISUAL CONTENT
  visualContent: {
    id: 'vis_shame_influence',
    type: 'comparison_graphic',
    title: 'The Psychological Divergence of Guilt vs. Shame',
    altText: 'A conceptual diagram contrasting Guilt (I did something bad, focus on behavior, reparative empathy, restorative justice) with Shame (I am bad, focus on self, global unworthiness, withdrawal and rage).',
    caption: 'Figure 1: Tangney’s Emotional Model: How guilt promotes constructive repair, while weaponized shame enforces compliance through existential unworthiness.',
    interactiveExplanation: 'When criticism targets your identity rather than a specific actionable task, it is weaponized shame designed to extract compliance.',
  },

  // TAGS & RELATED TOPICS
  tags: ['Manipulation Awareness', 'Shame-Based Influence', 'Guilt vs Shame', 'Social Evaluative Threat', 'Family Honor', 'Healthy Self-Worth'],
  relatedTopics: [
    {
      topicId: 'guilt_tripping',
      slug: 'guilt-tripping',
      title: 'Guilt-Tripping',
      relationshipType: 'frequently_confused_with',
    },
    {
      topicId: 'emotional_blackmail',
      slug: 'emotional-blackmail',
      title: 'Emotional Blackmail',
      relationshipType: 'amplified_by',
    },
    {
      topicId: 'intimidation',
      slug: 'intimidation',
      title: 'Intimidation',
      relationshipType: 'foundational_to',
    },
    {
      topicId: 'healthy_boundaries',
      slug: 'healthy-boundaries',
      title: 'Healthy Boundaries',
      relationshipType: 'counteracted_by',
    },
  ],

  // SEO METADATA
  seoTitle: 'Shame-Based Influence: Psychology, Warning Signs & Defense Scripts | Mentalab Mind',
  seoDescription: 'Discover how shame-based manipulation and "Log kya kahenge" pressure attack human self-worth. Learn the psychology of shame vs guilt and how to assert boundaries.',
  canonicalUrl: '/mind/manipulation-awareness/shame-based-influence',
  ogImageUrl: '/images/mind/shame-based-influence.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Shame-based influence leverages social-evaluative threat and identity unworthiness to induce submissive conformity.',
};

/**
 * High-Quality Hinglish Translation
 */
export const TOPIC_SHAME_BASED_INFLUENCE_HINGLISH: MindTopicDetail = {
  ...TOPIC_SHAME_BASED_INFLUENCE_EN,
  title: 'Shame-Based Influence: Sharm, Izzat Aur "Log Kya Kahenge" Ka Khel',
  subtitle: 'Jaaniye shaming aur guilt me kya farq hai, public humiliation se kaise bachein, aur self-worth ko kaise protect karein.',
  shortDescription: 'Kisi ko itna sharminda ya "defective" mehsoos karwana ki wo samaj ya parivar me accept hone ke liye apni marzi chhod de.',
  oneLineExplanation: 'In simple terms: Kisi ki galti batane ke bajaye uske astitva aur izzat par chot karna taaki wo sharm ke maare jhuk jaye.',

  summary30s: 'Shame-based influence aapke kaam par nahi, balki aapki identity par attack karta hai. Guilt bolta hai: "Aapne galti ki." Lekin shame bolti hai: "Aap khud ek galti ho." Manipulators char logon ke samne mazak udakar, parivar ki naak katne ka darr dikhakar ya "Log kya kahenge?" bolkar aapko beizzati ka ehsaas karate hain. Insaan ko bheed se nikaale jaane ka darr itna gehra hota hai ki wo beizzati se bachne ke liye apni boundary tod deta hai.',

  coreConcept: 'Psychologist June Tangney ke mutabiq, Guilt me insaan ko apni specific galti ka pachtawa hota hai aur wo use sudhar sakta hai. Lekin Shame me insaan ko lagta hai ki main andar se hi kharab hu. Shaming me samne wala kehta hai: "Ek achhi beti aisi baat kabhi nahi karti," ya "Tum bilkul be-sharm aur na-kaam insaan ho." Iska maqsad aapke self-respect ko tod kar aapko obedient banana hota hai.',
  summary60s: 'Constructive feedback me log akele me aapse baat karte hain aur batate hain ki problem kaise solve karni hai. Lekin shaming hamesha dramatic aur humiliating hoti hai. Jab koi 10 logon ke samne aapki beizzati karta hai, toh dimaag me cortisol hormone flood ho jata hai, chehra laal padta hai aur insaan freeze ho jata hai. Manipulator is public humiliation ka use karta hai taaki aap sharm ke maare unki har baat maan lein.',

  quickTakeaways: [
    'Guilt vs Shame: Guilt action par hoti hai ("maine galti ki"); Shame insaan par hoti hai ("main hi bekaar hu")',
    'Log Kya Kahenge Trap: Samajik darr ka use karke personal career aur boundaries ko dabana',
    'Feedback vs Shaming: Feedback sikhata hai; shaming insaan ko chota aur be-izzat feel karati hai',
    'Self-Worth Shield: Apni izzat ko kisi doosre ke opinion se alag rakhna shaming ka sabse bada tod hai',
  ],

  whyItHappens: 'Dickerson & Kemeny (2004) ki research prove karti hai ki jab kisi ki public image par attack hota hai ("Social Evaluative Threat"), toh dimaag me wahi pain receptors fire hote hain jo shareer par aag lagne par hote hain. Sharminda hone ka dard biological roop se sach me bohot gehra hota hai.',
  evolutionaryMechanism: 'Aadimanav ke samay qabeele se nikaale jaane ka matlab pakki maut thi. Sharm aane par gardan jhukana aur chota ban jana ek primitive surrender signal hai taaki group hume bahar na feke.',

  howItWorks: 'Iska use parivar me shaadi ya career par apni marzi thopne ke liye, coaching institutes me students par pressure banane ke liye, aur rishton me partner ko chup karwane ke liye hota hai.',
  whereYouEncounterIt: 'Family functions me, joint families me "naak katna" bolkar, aur WhatsApp family groups me public taane maarkar.',

  howToRecognize: [
    'Kaam ke bajaye aapke character par attack karna ("Tum to ho hi swarthi aur ghamandi")',
    'Char logon ke samne ya parivar ke samne beizzati karna',
    'Samaj ka darr dikhana ("Mohalle me sab humari thoo-thoo kar rahe hain")',
    'Doosre rishtedaar ke bache se insultingly compare karna ("Sharma ji ke bete ko dekho aur ek tum ho")',
    'Ghin (disgust) bhara chehra banana aur naak-bhow chadhana',
  ],

  examples: [
    {
      id: 'sbi_ex_hi_01',
      domain: 'education',
      displayOrder: 1,
      title: 'Coaching Class Me Public Humiliation',
      description: 'Teacher kam number aane par student ko 100 bacho ke samne khada karke bolta hai: "Iske maa-baap ne paise barbad kiye. Tum parivar par bojh ho, kal se apna chehra mat dikhana."',
      takeaway: 'Notice karein ki padhai ki kami ko seedha insaan ki aukaat aur izzat se jod diya gaya.',
    },
  ],

  scenarios: [
    {
      id: 'sbi_scen_hi_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'Lucknow Ki Neha Aur "Log Kya Kahenge?" Ka Pressure',
      narrativeContext: 'Neha (23, Lucknow) bank clerk ki job chhod kar Bangalore me design startup join karna chahti hai. Uski mummy sabhi rishtedaaro ke samne roti hain: "Puri zindagi tyaag kiya, aur aaj yeh din dekhne ko mila? Kal Sharma ji puch rahe the ki beti akeli sheher me kyun ghoom rahi hai. Tune baap ki pagdi dhoop me rol di. Agar tu gayi toh hum kisi ko munh dikhane ke layak nahi rahenge."',
      biasInAction: 'Mummy ne Neha ke genuine career decision ko parivar ki "izzat aur naak katne" se jod kar shaming weapon use kiya.',
      optimalResponse: 'Respect ke sath shaming ko reject karein: "Mummy, main aapse bohot pyaar karti hu. Lekin mere career se parivar ki naak nahi kat rahi. Log baatein karte hain, lekin unke darr se main apna future barbad nahi kar sakti. Meri izzat aur maryada bilkul intact hai."',
      reflectionPrompt: 'Kya aapne kabhi kisi rishtedaar ke "log kya kahenge" bolne par apna koi sapna ya boundary chhod di thi?',
    },
  ],

  limitationsAndControversies: 'Caution: Har pachtawa ya galti shaming nahi hoti. Agar kisi se galti hui aur use andar se bura lag raha hai (guilt), toh yeh achhi baat hai kyunki wo maafi maang kar sudhar sakta hai. Shaming tab hoti hai jab doosra insaan aapke astitva aur self-worth ko beizzati ke zariye control kare.',

  howToRespond: 'DIGNITY & DEFLECT Protocol: (1) Body Language Upright Rakhein: Kaandha seedha karein aur nazrein na churayein; (2) Character Defense Band Karein: "Main ghamandi hu ya nahi, yeh issue nahi hai"; (3) Real Issue Par Laayein: "Baat sirf is decision ki hai, pure khandaan ki izzat ki nahi."',
  psychologicalDefenses: [
    {
      title: 'Character Attack Block',
      instruction: 'Bolein: "Aapko decision pasand nahi ho sakta, lekin mere character par personal attack mat kijiye."',
    },
    {
      title: 'Audience Defuser',
      instruction: 'Bolein: "Yeh humari aapas ki baat hai, isme pure parivar ka tamasha banane ki zaroorat nahi hai."',
    },
    {
      title: 'Log Kya Kahenge Disarmer',
      instruction: 'Bolein: "Log kuch na kuch bolte hi hain. Main apne values par jeeta hu, logon ke opinions par nahi."',
    },
    {
      title: 'Action vs Identity Split',
      instruction: 'Apne dimaag me bolein: "Mujhse ek galti hui hai, main khud koi galti nahi hu."',
    },
  ],

  researchSummary: 'June Tangney (2007) ki studies dikhati hain ki shaming se insaan sudharta nahi, balki jhooth bolna aur baatein chupana shuru kar deta hai. Dickerson & Kemeny (2004) ne prove kiya ki public beizzati se shareer me sabse zyada stress hormone banta hai. Brené Brown ke mutabiq shaming se bachte wahi hain jo empathy aur clear boundaries rakhte hain.',

  references: TOPIC_SHAME_BASED_INFLUENCE_EN.references,
  commonMisconceptions: 'Myth: "Bacho ya bado ko be-izzat karne se wo sahi raste par aate hain." Reality: Research dikhati hai ki shaming se bache secretive ban jaate hain, depression me aate hain aur unka self-confidence khatam ho jata hai.',

  reflectionPrompt: 'Kya aapke sath kabhi hua hai ki kisi ne aapki choti si baat ko sabke samne parivar ki beizzati bana diya ho?',

  practiceQuestions: TOPIC_SHAME_BASED_INFLUENCE_EN.practiceQuestions,
  visualContent: TOPIC_SHAME_BASED_INFLUENCE_EN.visualContent,
  tags: TOPIC_SHAME_BASED_INFLUENCE_EN.tags,
  relatedTopics: TOPIC_SHAME_BASED_INFLUENCE_EN.relatedTopics,
  seoTitle: 'Shame-Based Influence Kya Hai? "Log Kya Kahenge" Ka Psychology | Mentalab Mind',
  seoDescription: 'Shame aur guilt ka farq samjhein. Janiye kaise log beizzati aur khandaan ki naak ka darr dikhakar control karte hain aur kaise boundary banayein.',
  canonicalUrl: '/mind/manipulation-awareness/shame-based-influence',
  ogImageUrl: '/images/mind/shame-based-influence.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Shame-based influence social-evaluative threat aur identity unworthiness ka use karke psychological compliance nikalta hai.',
};

/**
 * Localized Helper
 */
function createLocalizedShameRecord(
  langCode: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_SHAME_BASED_INFLUENCE_EN,
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

export const TOPIC_SHAME_BASED_INFLUENCE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SHAME_BASED_INFLUENCE_EN,
  hinglish: TOPIC_SHAME_BASED_INFLUENCE_HINGLISH,
  hi: createLocalizedShameRecord(
    'hi',
    'शर्म-आधारित प्रभाव: सामाजिक अपमान, "लोग क्या कहेंगे" और आत्मसम्मान की रक्षा',
    'सार्वजनिक अपमान, खानदान की इज्जत के दबाव और पहचान पर हमलों के मनोविज्ञान को समझें और गरिमा की रक्षा करें।',
    'सरल शब्दों में: किसी के काम पर बात करने के बजाय उसके पूरे अस्तित्व और चरित्र को अपमानित करना ताकि वह शर्म के मारे झुक जाए।',
    'शर्म-आधारित प्रभाव तब होता है जब कोई व्यक्ति आपकी किसी बात या निर्णय को लेकर आपके चरित्र और आत्मसम्मान पर सीधा प्रहार करता है। "तुम परिवार पर कलंक हो" या "लोग क्या कहेंगे" जैसे वाक्यों का उपयोग करके आपको यह महसूस कराया जाता है कि आप मूल रूप से ही खराब हैं।',
    'जून टैंगनी (2007) के अनुसार, अपराधबोध (Guilt) व्यवहार को सुधारने में मदद करता है, जबकि शर्म (Shame) व्यक्ति के आत्मसम्मान को नष्ट कर उसे आज्ञाकारी बनने पर मजबूर करती है।',
    [
      'अपराधबोध बनाम शर्म: अपराधबोध काम पर होता है ("मुझसे गलती हुई"); शर्म पहचान पर होती है ("मैं ही बुरा हूं")',
      'सामाजिक बहिष्कार का भय: शर्म हमारे समाज से निकाले जाने के आदिम भय का फायदा उठाती है',
      'तार्किक आलोचना बनाम चरित्र हनन: उचित आलोचना काम सुधारने पर केंद्रित होती है; शर्म व्यक्ति को छोटा महसूस कराती है',
      'आत्मसम्मान का कवच: अपने आत्मसम्मान को दूसरों के सामाजिक तानों से अलग रखना इसका सबसे मजबूत बचाव है',
    ]
  ),
  gu: createLocalizedShameRecord(
    'gu',
    'શરમ-આધારિત પ્રભાવ: સામાજિક અપમાન અને "લોકો શું કહેશે" થી મુક્તિ',
    'લાગણીઓ અને આત્મસન્માન પર પ્રહાર કરીને નિર્ણય બદલવાની યુક્તિઓ સામે રક્ષણ મેળવો.',
    'સરળ શબ્દોમાં: ભૂલ સુધારવાને બદલે વ્યક્તિના આખા ચરિત્રને નીચું બતાવીને શરમમાં નાખવું.',
    'જ્યારે કોઈ સમાજ કે પરિવારની આબરૂનો હવાલો આપીને તમને અપરાધી અનુભવ કરાવે છે, ત્યારે તેને શરમ-આધારિત પ્રભાવ કહે છે.',
    'પોતાના આત્મગૌરવને સમાજના ખોટા દબાણથી મુક્ત રાખીને દ્રઢતાપૂર્વક વર્તવું જરૂરી છે.',
    [
      'ગિલ્ટ અને શરમ વચ્ચેનો ભેદ સમજો',
      'સામાજિક અપમાન સામે શાંતિથી સીમાઓ નક્કી કરો',
      'પોતાના નિર્ણયોમાં આત્મવિશ્વાસ રાખો',
    ]
  ),
  mr: createLocalizedShameRecord(
    'mr',
    'लाजेवर आधारित प्रभाव: सामाजिक अपमान, "लोक काय म्हणतील" आणि आत्मसन्मान',
    'अपमानाचा वापर करून आणि कुटुंबाच्या प्रतिष्ठेचा धाक दाखवून स्वतःच्या अटी लादण्याविरुद्ध प्रतिकार.',
    'सोप्या भाषेत: कामातील त्रुटी दाखवण्याऐवजी व्यक्तीच्या संपूर्ण अस्तित्वाचा अपमान करणे.',
    'जेव्हा एखादी व्यक्ती लोकांसमोर किंवा कुटुंबात तुमचा अपमान करून तुम्हाला लाचार अनुभवू देते, तेव्हा त्याला लाजेवर आधारित प्रभाव म्हणतात.',
    'स्वतःचा आत्मसन्मान जपून अशा अपमानास्पद दबावाला शांतपणे नकार देणे आवश्यक आहे.',
    [
      'अपराधगंड आणि लाज यातील फरक ओळखा',
      'सार्वजनिक अपमानाला बळी पडू नका',
      'आपल्या आत्मसन्मानाचे रक्षण करा',
    ]
  ),
  bn: createLocalizedShameRecord(
    'bn',
    'লজ্জা-ভিত্তিক প্রভাব: সামাজিক অপমান, "লোকে কি বলবে" ও আত্মমর্যাদা রক্ষা',
    'ব্যক্তিসত্তাকে অপমান করে এবং সামাজিক মর্যাদার ভয় দেখিয়ে বশ্যতা আদায় করার অপকৌশল।',
    'সহজ কথায়: কাজের ভুল না শুধরে মানুষের পুরো অস্তিত্বকে অপমানিত করা যাতে সে লজ্জিত হয়ে নতি স্বীকার করে।',
    'লজ্জা-ভিত্তিক প্রভাবে ব্যক্তি বা পরিবারের সম্মানহানির ভয় দেখিয়ে স্বাধীনতা কেড়ে নেওয়ার চেষ্টা করা হয়।',
    'আত্মমর্যাদা অটুট রেখে শান্তভাবে নিজের অবস্থানে অনড় থাকাই এর সঠিক সমাধান।',
    [
      'অপরাধবোধ ও লজ্জার পার্থক্য বুঝুন',
      'সামাজিক অপমানের মুখে ভেঙে পড়বেন না',
      'নিজের আত্মমর্যাদা রক্ষা করুন',
    ]
  ),
  ta: createLocalizedShameRecord(
    'ta',
    'அவமானம் சார்ந்த தூண்டுதல்: சமூக அவமதிப்பு மற்றும் சுயமரியாதை பாதுகாப்பு',
    'குடும்ப கௌரவம் மற்றும் "ஊர் என்ன சொல்லும்" என்ற பயத்தை ஆயுதமாக்கும் உளவியல்.',
    'எளிய சொற்களில்: தவறை சுட்டிக்காட்டாமல் ஒருவரின் சுயமரியாதையை அவமதித்து பணிய வைப்பது.',
    'அவமானம் சார்ந்த தூண்டுதல் என்பது ஒருவரைப் பிறர் முன்னிலையில் சிறுமைப்படுத்தி, குற்றவாளியாக உணரவைத்து பணிய வைக்கும் செயலாகும்.',
    'பிறரின் விமர்சனங்களுக்குப் பயப்படாமல் சுயமரியாதையுடன் எல்லைகளை அமைப்பது அவசியம்.',
    [
      'குற்ற உணர்வுக்கும் அவமானத்திற்கும் உள்ள வேறுபாட்டை அறிதல்',
      'பொது அவமதிப்புகளுக்கு அஞ்சாதீர்கள்',
      'சுயமரியாதையை நிலைநிறுத்துங்கள்',
    ]
  ),
  te: createLocalizedShameRecord(
    'te',
    'అవమానం ఆధారిత ప్రభావం: సామాజిక అవమానం మరియు ఆత్మగౌరవ రక్షణ',
    'కుటుంబ పరువు మరియు "నలుగురూ ఏమనుకుంటారు" అనే భయంతో లొంగదీసుకునే పద్ధతుల నుండి రక్షణ.',
    'సరళమైన మాటల్లో: తప్పును సరిదిద్దడానికి బదులుగా వ్యక్తి యొక్క ఆత్మగౌరవాన్ని దెబ్బతీసి లొంగదీసుకోవడం.',
    'అవమానం ఆధారిత ప్రభావంలో సమాజం లేదా కుటుంబం పేరుతో వ్యక్తిని చిన్నబుచ్చి తమ మాటకు ఒప్పిస్తారు.',
    'ఆత్మవిశ్వాసంతో ఇటువంటి మానసిక దాడులను తిప్పికొట్టడం చాలా ముఖ్యం.',
    [
      'అపరాధ భావనకు, అవమానానికి గల తేడాను గుర్తించండి',
      'నలుగురి మాటలకు భయపడకండి',
      'మీ ఆత్మగౌరవాన్ని కాపాడుకోండి',
    ]
  ),
  kn: createLocalizedShameRecord(
    'kn',
    'ನಾಚಿಕೆ ಆಧಾರಿತ ಪ್ರಭಾವ: ಸಾಮಾಜಿಕ ಅವಮಾನ ಮತ್ತು ಆತ್ಮಗೌರವದ ರಕ್ಷಣೆ',
    'ಕುಟುಂಬದ ಮರ್ಯಾದೆ ಮತ್ತು "ಜನ ಏನೆಂದಾರು" ಎಂಬ ಭಯವನ್ನು ಅಸ್ತ್ರವಾಗಿಸುವ ತಂತ್ರಗಳ ಪ್ರತಿರೋಧ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಕೆಲಸದ ತಪ್ಪನ್ನು ತೋರಿಸುವ ಬದಲು ವ್ಯಕ್ತಿಯ ಇಡೀ ವ್ಯಕ್ತಿತ್ವವನ್ನು ಕೀಳಾಗಿ ಕಾಣುವುದು.',
    'ನಾಚಿಕೆ ಆಧಾರಿತ ಪ್ರಭಾವದಲ್ಲಿ ವ್ಯಕ್ತಿಯನ್ನು ಇತರರ ಮುಂದೆ ಕೀಳಾಗಿ ಕಾಣುವಂತೆ ಮಾಡಿ ನಿಯಂತ್ರಿಸಲಾಗುತ್ತದೆ.',
    'ಆತ್ಮಗೌರವವನ್ನು ಬಿಟ್ಟುಕೊಡದೆ ಇಂತಹ ಒತ್ತಡಗಳನ್ನು ಶಾಂತವಾಗಿ ಎದುರಿಸಬೇಕು.',
    [
      'ತಪ್ಪಿತಸ್ಥ ಭಾವನೆ ಮತ್ತು ನಾಚಿಕೆಯ ವ್ಯತ್ಯಾಸ ತಿಳಿಯಿರಿ',
      'ಸಾಮಾಜಿಕ ಅವಮಾನಕ್ಕೆ ಹೆದರಬೇಡಿ',
      'ದೃಢವಾದ ಆತ್ಮವಿಶ್ವಾಸ ಬೆಳೆಸಿಕೊಳ್ಳಿ',
    ]
  ),
  ml: createLocalizedShameRecord(
    'ml',
    'നാണക്കേട് അടിസ്ഥാനമാക്കിയുള്ള പ്രേരണ: സാമൂഹിക അപമാനവും ആത്മാഭിമാനവും',
    '"നാട്ടുകാർ എന്തു പറയും" എന്ന ഭയം കാട്ടി സ്വാധീനം ചെലുത്തുന്ന രീതികളെ പ്രതിരോധിക്കുക.',
    'ലളിതമായി പറഞ്ഞാൽ: തെറ്റുകൾ തിരുത്തുന്നതിന് പകരം വ്യക്തിയുടെ സ്വത്വത്തെത്തന്നെ അപമാനിക്കുക.',
    'മറ്റുള്ളവരുടെ മുന്നിൽ അപമാനിതനാകുമെന്ന ഭയം സൃഷ്ടിച്ച് വഴങ്ങാൻ പ്രേരിപ്പിക്കുന്നതാണ് ഈ രീതി.',
    'ആത്മാഭിമാനം മുറുകെപ്പിടിച്ച് വ്യക്തിപരമായ തീരുമാനങ്ങളിൽ ഉറച്ചുനിൽക്കുക.',
    [
      'കുറ്റബോധവും നാണക്കേടും തമ്മിലുള്ള വ്യത്യാസം അറിയുക',
      'പൊതു അപമാനത്തിന് വഴങ്ങാതിരിക്കുക',
      'വ്യക്തിത്വത്തെ സംരക്ഷിക്കുക',
    ]
  ),
  pa: createLocalizedShameRecord(
    'pa',
    'ਸ਼ਰਮ-ਅਧਾਰਿਤ ਪ੍ਰਭਾਵ: ਸਮਾਜਿਕ ਬੇਇੱਜ਼ਤੀ ਅਤੇ ਆਤਮ-ਸਨਮਾਨ ਦੀ ਰਾਖੀ',
    'ਖ਼ਾਨਦਾਨ ਦੀ ਇੱਜ਼ਤ ਅਤੇ "ਲੋਕ ਕੀ ਕਹਿਣਗੇ" ਦੇ ਦਬਾਅ ਹੇਠ ਆਪਣੀ ਮਰਜ਼ੀ ਥੋਪਣ ਦਾ ਟਾਕਰਾ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਗ਼ਲਤੀ ਸਮਝਾਉਣ ਦੀ ਬਜਾਏ ਇਨਸਾਨ ਦੀ ਹਸਤੀ ਅਤੇ ਇੱਜ਼ਤ ਨੂੰ ਢਾਹ ਲਾਉਣਾ।',
    'ਸ਼ਰਮ-ਅਧਾਰਿਤ ਪ੍ਰਭਾਵ ਵਿੱਚ ਵਿਅਕਤੀ ਨੂੰ ਸ਼ਰਮਸਾਰ ਕਰਕੇ ਉਸਦੀ ਆਜ਼ਾਦੀ ਖੋਹਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
    'ਆਪਣੇ ਆਤਮ-ਸਨਮਾਨ ਨੂੰ ਸਮਾਜਿਕ ਤਾਨਿਆਂ ਤੋਂ ਮੁਕਤ ਰੱਖ ਕੇ ਦ੍ਰਿੜ੍ਹ ਰਹਿਣਾ ਜ਼ਰੂਰੀ ਹੈ।',
    [
      'ਗਿਲਟ ਅਤੇ ਸ਼ਰਮ ਦੇ ਫ਼ਰਕ ਨੂੰ ਸਮਝੋ',
      'ਬੇਇੱਜ਼ਤੀ ਦੇ ਡਰ ਅੱਗੇ ਨਾ ਝੁਕੋ',
      'ਆਪਣੇ ਸਵੈ-ਮਾਣ ਦੀ ਰੱਖਿਆ ਕਰੋ',
    ]
  ),
  ur: createLocalizedShameRecord(
    'ur',
    'شرم پر مبنی اثر و رسوخ: سماجی تذلیل اور "لوگ کیا کہیں گے" سے نجات',
    'عزت اور رسوائی کا خوف دلا کر خودداری کو کچلنے اور تسلط قائم کرنے کی نفسیات۔',
    'آسان الفاظ میں: کام کی خامی دور کرنے کے بجائے انسان کے پورے وجود اور کردار کو ذلیل کرنا۔',
    'شرم پر مبنی ترغیب میں انسان کو دوسروں کے سامنے شرمندہ کر کے اس پر اپنی شرائط مسلط کی جاتی ہیں۔',
    'اپنی خودداری کو سماجی طعنوں سے محفوظ رکھ کر پُرسکون طریقے سے حدود قائم کرنا چاہیے۔',
    [
      'احساسِ ندامت اور شرمندگی کا فرق سمجھیں',
      'سماجی دباؤ اور تذلیل کے آگے مت جھکیں',
      'اپنی خودداری کا ہر حال میں تحفظ کریں',
    ]
  ),
  or: createLocalizedShameRecord(
    'or',
    'ଲଜ୍ଜା-ଆଧାରିତ ପ୍ରଭାବ: ସାମାଜିକ ଅପମାନ ଓ ଆତ୍ମସମ୍ମାନର ସୁରକ୍ଷା',
    'ପରିବାରର ସମ୍ମାନ ଓ "ଲୋକେ କ’ଣ କହିବେ" ର ଭୟ ଦେଖାଇ ନିଜ କଥା ମନାଇବାର ପ୍ରତିରୋଧ।',
    'ସରଳ ଭାଷାରେ: ଭୁଲ୍ ସୁଧାରିବା ପରିବର୍ତ୍ତେ ବ୍ୟକ୍ତିର ଆତ୍ମସମ୍ମାନ ଉପରେ ଆଘାତ କରି ଲଜ୍ଜିତ କରିବା।',
    'ଲଜ୍ଜା-ଆଧାରିତ ପ୍ରଭାବରେ ବ୍ୟକ୍ତିକୁ ଅନ୍ୟମାନଙ୍କ ଆଗରେ ଅପମାନିତ କରି ନିଜ ଦାବି ପୂରଣ କରାଯାଏ।',
    'ଆତ୍ମସମ୍ମାନ ବଜାୟ ରଖି ଦୃଢ଼ତାର ସହ ନିଜ ସୀମା ରକ୍ଷା କରିବା ଉଚିତ।',
    [
      'ଅପରାଧବୋଧ ଓ ଲଜ୍ଜା ମଧ୍ୟରେ ପାର୍ଥକ୍ୟ ବୁଝନ୍ତୁ',
      'ସାମାଜିକ ଅପମାନକୁ ଭୟ କରନ୍ତୁ ନାହିଁ',
      'ନିଜ ଆତ୍ମସମ୍ମାନକୁ ରକ୍ଷା କରନ୍ତୁ',
    ]
  ),
  as: createLocalizedShameRecord(
    'as',
    'লাজ-ভিত্তিক প্ৰভাৱ: সামাজিক অপমান আৰু আত্মসন্মানৰ সুৰক্ষা',
    'পৰিয়ালৰ সন্মান আৰু "মানুহে কি ক’ব" বুলি হেঁচা প্ৰয়োগ কৰাৰ মানসিকতা প্ৰতিৰোধ।',
    'সহজ ভাষাত: কামৰ ভুল আঙুলিয়াই দিয়াৰ পৰিৱৰ্তে মানুহজনক অপমানিত কৰি বশ কৰোৱা।',
    'লাজ-ভিত্তিক প্ৰভাৱত ব্যক্তিক ৰাজহুৱাভাৱে লজ্জিত কৰি তেওঁৰ সিদ্ধান্ত সলনি কৰিবলৈ বাধ্য কৰোৱা হয়।',
    'আত্মমৰ্যাদা অটুট ৰাখি এনে মানসিক হেঁচাৰ বিৰোধিতা কৰা উচিত।',
    [
      'অপৰাধবোধ আৰু লাজৰ পাৰ্থক্য বুজি উঠক',
      'ৰাজহুৱা অপমানৰ ওচৰত হাৰ নামানিব',
      'নিজৰ আত্মসন্মান ৰক্ষা কৰক',
    ]
  ),
};
