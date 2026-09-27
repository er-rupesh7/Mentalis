import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 08: Love Bombing
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Cult Indoctrination & Accelerated Compliance (Singer, 1995)
 * - Attachment Hyperactivation & Boundary Dissolution (Mikulincer & Shaver, 2007)
 * - Courtship Intensity & Narcissistic Entrapment (Strutzenberg et al., 2017)
 * - Idealization-Devaluation-Discard Cycle Dynamics
 */

export const TOPIC_LOVE_BOMBING_EN: MindTopicDetail = {
  id: 'love_bombing',
  categoryId: 'manipulation_awareness',
  slug: 'love-bombing',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 8,
  scientificConsensusTier: 'established',
  sortWeight: 8,
  viewCount: 7890,
  shareCount: 680,
  bookmarkCount: 1240,
  title: 'Love Bombing: Idealization, Accelerated Intimacy & Emotional Entrapment',
  subtitle: 'Recognizing predatory affection, unearned soulmate declarations, and distinguishing infatuation from boundary dissolution.',
  shortDescription: 'An overwhelming barrage of affection, grand promises, and constant contact designed to disarm boundaries and create premature emotional dependency.',
  oneLineExplanation: 'In simple terms: Showering someone with intense, non-stop affection and gifts early on so they become emotionally dependent before seeing red flags.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'Love bombing is the strategic deployment of overwhelming affection, extravagant praise, expensive gifts, and urgent future plans at the very start of a relationship. It feels flattering and magical, like a fairy tale. But the underlying intent is not authentic intimacy; it is an aggressive takeover of your emotional bandwidth. By manufacturing instant intimacy, the love bomber bypasses your normal vetting defenses, isolates you from friends, and traps you in rapid dependency.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Originally identified in sociological research on cult recruitment (Singer, 1995), love bombing creates a neurochemical dopamine and oxytocin high that mimics genuine bonding. The manipulator declares you their "soulmate" within days, demands constant texting, and rushes lifelong commitments. Because the affection is unearned and disproportionate to how long they have actually known you, it is an unstable idealization that inevitably collapses into control, guilt, and devaluation once you assert an independent boundary.',
  summary60s: 'Healthy romantic bonding develops gradually as two people observe each other’s reliability, integrity, and flaws across varying seasons. Love bombing compresses this timeline artificially. Within two weeks, a love bomber is talking about marriage, introducing you to their entire family, buying expensive jewelry, and texting you 80 times a day. If you request space or slow things down, the mask slips: affection turns into cold sulking, accusatory guilt ("After all I’ve done for you, you don’t love me"), or rage. The grand affection was never a gift; it was a psychological loan with exorbitant interest.',

  quickTakeaways: [
    'Intensity vs. Intimacy: Real intimacy takes time and mutual vulnerability; love bombing is high-voltage drama and instant claims',
    'The Rush to Lock In: Manipulators accelerate milestones (moving in, marriage, exclusivity) before you can observe their actual character',
    'Genuine Infatuation vs. Love Bombing: Infatuation respects your boundaries when you ask to slow down; love bombing retaliates with guilt or fury',
    'The Pacing Rule: Never match intensity with commitment; slow the pace down deliberately to see if their affection survives a boundary',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Love bombing floods the ventral tegmental area (VTA) and nucleus accumbens with dopamine and phenylethylamine. This creates an addictive euphoria similar to high-potency stimulants. In individuals with anxious attachment styles (Mikulincer & Shaver, 2007) or those emerging from painful breakups, the intense validation soothes deep-seated unworthiness, blinding them to red flags.',
  evolutionaryMechanism: 'Human survival relies on pair bonding and social acceptance. High-investment courtship signals (protection, resources, devotion) naturally activate evolutionary trust circuits. Love bombers exploit these innate mating heuristics through deceptive, accelerated signaling.',

  // SECTION E — WHY MIGHT SOMEONE USE THIS PATTERN?
  howItWorks: 'Some love bombers are deliberate predators seeking financial, sexual, or social control. However, many operate subconsciously: individuals with narcissistic, histrionic, or borderline traits often crave the intoxicating fantasy of finding an "ideal savior". When the target inevitably reveals normal human flaws, the love bomber feels betrayed and shifts into harsh devaluation.',
  whereYouEncounterIt: 'Dating and matrimonial apps, high-pressure religious cults, multi-level marketing (MLM) recruitments, and toxic fast-paced startup cultures.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Premature declarations of eternal love or "soulmate" status within days or weeks of meeting',
    'Smothering communication volume: expecting immediate replies to dozens of messages daily and panicking if you are unavailable',
    'Disproportionate gifts, vacations, or grand gestures that make you feel indebted early on',
    'Pressuring you to isolate from friends and family ("It’s you and me against the world; they don’t understand our connection")',
    'Severe emotional punishment (sulking, rage, withdrawing affection) the moment you establish a minor boundary or ask to slow down',
  ],

  // SECTION G — NORMAL BEHAVIOR VS UNHEALTHY PATTERN
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Authentic Romantic Chemistry vs. Manipulative Love Bombing',
    description: 'The vital psychological difference between genuine excitement and predatory emotional overwhelm.',
    analogySideA: {
      label: 'Authentic Romantic Chemistry (Paced & Respectful)',
      detail: '"I really enjoy getting to know you. If you need this weekend to study or catch up with your friends, I completely understand. Let’s plan for next Tuesday." (Respects pace, honors existing life).',
    },
    analogySideB: {
      label: 'Manipulative Love Bombing (Smothering & Coercive)',
      detail: '"I’ve never felt this way about anyone in my entire life. Cancel your weekend plans with your friends; you are my destiny, and if you truly cared about us, you’d want to spend every second together." (Demands isolation, weaponizes feelings).',
    },
  },

  // SECTION H, I, J — REAL-LIFE EXAMPLES & INDIAN CONTEXT
  examples: [
    {
      id: 'lb_ex_01',
      domain: 'relationships',
      displayOrder: 1,
      title: 'The Three-Week Engagement Rush',
      description: 'After three weeks of dating, a partner books an international vacation, buys an expensive designer watch, and insists on meeting each other\'s parents immediately: "Why wait? When you know, you know. Anyone who tells you to slow down is just jealous of what we have."',
      takeaway: 'Notice how legitimate third-party warnings are preemptively framed as "jealousy" to isolate the partner.',
    },
    {
      id: 'lb_ex_02',
      domain: 'workplace',
      displayOrder: 2,
      title: 'The Startup "Rockstar" Seduction',
      description: 'A startup founder tells a new hire: "You are the single most brilliant engineer I have ever met. You are going to be my co-founder and change the world with me." Two weeks later, the founder expects 80-hour workweeks with zero equity, screaming that the hire "betrayed the family dream" when asking for rest.',
      takeaway: 'Grand corporate flattery used to extract uncompensated labor before reality sets in.',
    },
  ],

  scenarios: [
    {
      id: 'lb_scen_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'The Matrimonial App Whirlwind',
      narrativeContext: 'Pooja, a 27-year-old financial analyst in Mumbai, matches with a charismatic prospective groom on a matrimonial platform. After two phone calls, he sends 50 red roses to her corporate office, orders expensive gourmet food to her apartment, and calls her "the future mother of my children." By day five, he demands: "Delete your profile on the app right now. I have already told my parents we are locking the roka date next week. Why do you need more dates to decide? If you need time, it means you don’t have pure faith in our connection."',
      biasInAction: 'The groom deploys rapid romantic flooding + public office spectacle + manufactured religious destiny to bulldoze Pooja’s normal background verification period.',
      optimalResponse: 'De-escalate the manufactured urgency firmly: "I appreciate that you feel strongly about our conversations. However, building a lifelong marriage requires time, observing each other across normal situations, and mutual vetting. I will not delete my profile or agree to a roka date in five days. If you cannot respect a calm, steady pace of getting to know each other, then we are not compatible."',
      reflectionPrompt: 'Have you ever felt uncomfortable with how fast someone pushed a relationship forward, but silenced your gut feeling because you thought you should be flattered?',
    },
  ],

  // SECTION K — SPOT THE PATTERN (Interactive Scenario)
  interactiveScenarios: [
    {
      id: 'scen_lb_01',
      topicId: 'love_bombing',
      title: 'Spot the Pattern: The Weekend Boundary Test',
      contextVignette: 'You have been dating someone for ten days. They have already given you a spare key to their apartment, sent flowers daily, and called you their "twin flame." When you tell them you cannot hang out on Saturday night because you promised to help your sister move apartments, they immediately stop smiling, look deeply wounded, and text: "I guess I was wrong about you. I thought I was your priority. My ex used to make up family excuses to avoid me too."',
      vignetteSourceType: 'family_relationships',
      question: 'What does this dramatic reaction reveal about the early romantic grandiosity?',
      options: [
        {
          id: 'opt_lb_a',
          label: 'A',
          text: 'It proves they love you so intensely that being away from you for one evening causes genuine heartbreak.',
          explanation: 'Dangerous cultural myth. Entitled rage over normal boundaries is a signature of control, not love.',
          isCorrect: false,
        },
        {
          id: 'opt_lb_b',
          label: 'B',
          text: 'It reveals that the early affection was a control mechanism; the moment an autonomous boundary is set, the love bomber punishes you with guilt, comparison, and withdrawal.',
          explanation: 'Correct. The true test of love bombing is the first boundary: authentic love respects your limits; love bombing attacks you for having them.',
          isCorrect: true,
        },
        {
          id: 'opt_lb_c',
          label: 'C',
          text: 'You should cancel your plans with your sister to prove that you are different from their ex.',
          explanation: 'Capitulating teaches the manipulator that guilt trips successfully dismantle your family ties.',
          isCorrect: false,
        },
      ],
      revealedExplanation: {
        correctSummary: 'The Boundary Acid Test: Authentic affection respects pace; love bombing collapses into guilt and punishment.',
        whyItMatters: 'Love bombing cannot survive boundary setting. Testing a suitor’s reaction to a polite "no" early on saves years of trauma.',
        cognitiveTrap: 'The "Fairy Tale" Bias: Mistaking overwhelming intensity and boundary invasion for passionate soulmate connection.',
        actionableAntidote: 'The "Brake-Check" Rule: Intentionally set a small, healthy boundary early in dating to observe how they handle frustration.',
      },
      difficulty: 'medium',
      culturalContext: 'indian_general',
    },
  ],

  // SECTION L & Q — "BUT BE CAREFUL" & LIMITATIONS
  limitationsAndControversies: 'Caution: Do not pathologize genuine romantic excitement. In the early stages of a healthy relationship, people naturally feel passionate, text frequently, and express enthusiasm. The critical scientific differences are: (1) Does the person respect your boundaries when you say no? (2) Do they encourage your friendships and hobbies, or try to monopolize you? (3) Is their affection steady, or does it vanish into cold punishment when challenged?',

  // SECTION M & N — HOW TO RESPOND & SCRIPTS
  howToRespond: 'Apply the "PACING & BOUNDARY TEST" Protocol: (1) Slow the Velocity: Deliberately decline same-day invites and insist on spaced dates; (2) Protect Your Orbit: Keep seeing your friends, pursuing hobbies, and maintaining financial boundaries; (3) The Acid Test: Say "no" to a small request and watch their reaction with scientific detachment.',
  psychologicalDefenses: [
    {
      title: 'The Pacing Anchor Script',
      instruction: 'Say: "I am enjoying our time together, but I have a personal rule of taking new relationships slowly. Let’s keep this weekend for our own friends and catch up next week."',
    },
    {
      title: 'The Gift Refusal with Dignity',
      instruction: 'Say: "This is a very generous gift, but it is too extravagant for how long we have known each other. I would feel much more comfortable if we kept things simple right now."',
    },
    {
      title: 'The Anti-Isolation Script',
      instruction: 'Say: "My friendships and family relationships are essential parts of my life. A healthy partnership supports those bonds rather than competing with them."',
    },
    {
      title: 'The Reality Check Pivot',
      instruction: 'When declared a "soulmate" after a week: "We have had wonderful conversations, but we don’t truly know each other yet. Let’s enjoy getting to know who we actually are over time."',
    },
  ],

  // SECTION P — RESEARCH & CITATIONS
  researchSummary: 'Margaret Singer’s (1995) seminal study on coercive persuasion documented how cults use "love bombing" to dismantle individual skepticism and foster total group dependency. Strutzenberg, Niemiec, & Segrin (2017) conducted empirical studies on adult romantic relationships, finding that high-level love bombing is significantly correlated with narcissistic personality traits, low self-esteem, and insecure attachment styles. Mikulincer & Shaver (2007) proved that rapid unearned affection triggers hyperactivated attachment systems, making targets vulnerable to traumatic bonding.',

  references: [
    {
      id: 'lb_ref_01',
      title: 'Cults in Our Midst: The Hidden Menace in Our Everyday Lives',
      citation: 'Singer, M. T., & Lalich, J. (1995). Jossey-Bass Publishers.',
      authors: 'Margaret Thaler Singer, Janja Lalich',
      publicationYear: 1995,
      journalOrPublisher: 'Jossey-Bass',
      sourceType: 'academic_textbook',
      evidenceStrength: 'foundational_book',
      doiOrUrl: 'https://archive.org/details/cultsinourmidsth00sing',
      relevance: 'Foundational sociological work identifying love bombing as a systematic compliance extraction tactic.',
      displayOrder: 1,
    },
    {
      id: 'lb_ref_02',
      title: 'Love-bombing: a narcissistic approach to relationship formation',
      citation: 'Strutzenberg, C. C., Niemiec, M. A., & Segrin, C. (2017). Human Communication Research, 43(4), 478–498.',
      authors: 'Claire C. Strutzenberg, Mary A. Niemiec, Chris Segrin',
      publicationYear: 2017,
      journalOrPublisher: 'Human Communication Research',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: 'https://doi.org/10.1111/hcre.12118',
      relevance: 'First comprehensive empirical study validating the connection between love bombing, narcissism, and rapid relationship pacing.',
      displayOrder: 2,
    },
    {
      id: 'lb_ref_03',
      title: 'Attachment in Adulthood: Structure, Dynamics, and Change',
      citation: 'Mikulincer, M., & Shaver, P. R. (2007). Guilford Press.',
      authors: 'Mario Mikulincer, Phillip R. Shaver',
      publicationYear: 2007,
      journalOrPublisher: 'Guilford Press',
      sourceType: 'academic_textbook',
      evidenceStrength: 'foundational_book',
      doiOrUrl: 'https://doi.org/10.1037/0022-3514.85.2.321',
      relevance: 'Demonstrates how attachment hyperactivation creates susceptibility to predatory romantic idealization.',
      displayOrder: 3,
    },
  ],

  // SECTION R — COMMON MYTHS
  commonMisconceptions: 'Myth: "Love at first sight is always healthy and romantic; slowing down ruins the magic." Reality: Research shows that relationships built on slow-burn mutual respect, shared values, and observed conflict resolution have vastly higher stability and satisfaction than relationships founded on rapid romantic obsession.',

  // SECTION S — REFLECTION PROMPT
  reflectionPrompt: 'Can you recall a relationship or friendship that started with dizzying intensity, only to crash into guilt, control, and criticism the moment you asserted yourself?',

  // SECTION T — PRACTICE QUESTIONS (6 Distinct Questions)
  practiceQuestions: [
    {
      id: 'lb_pq_01',
      questionType: 'identify_influence_principle',
      question: 'What is the primary psychological purpose of "Love Bombing" in the early phase of a predatory relationship?',
      options: [
        {
          id: 'opt_1',
          optionText: 'To flood the target with neurochemical euphoria and premature obligation, effectively blinding them to red flags and accelerating dependency.',
          isCorrect: true,
          feedbackText: 'Correct. Overwhelming affection bypasses rational cognitive appraisal and vetting.',
        },
        {
          id: 'opt_2',
          optionText: 'To practice public speaking skills.',
          isCorrect: false,
          feedbackText: 'Love bombing is an interpersonal control tactic, not oratory practice.',
        },
        {
          id: 'opt_3',
          optionText: 'To help the target make more independent decisions.',
          isCorrect: false,
          feedbackText: 'Love bombing systematically destroys independent decision-making.',
        },
      ],
      cognitiveTakeaway: 'Love bombing creates an overwhelming chemical and emotional high to disable critical boundaries.',
    },
    {
      id: 'lb_pq_02',
      questionType: 'distinction',
      question: 'What is the single most reliable way to distinguish authentic romantic excitement from manipulative love bombing?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Set a healthy, polite boundary (e.g., asking to slow down or declining an invitation): authentic interest respects your pace; love bombing reacts with guilt, panic, or rage.',
          isCorrect: true,
          feedbackText: 'Correct. The reaction to a boundary is the definitive diagnostic differentiator.',
        },
        {
          id: 'opt_2',
          optionText: 'Count the number of letters in their first name.',
          isCorrect: false,
          feedbackText: 'Irrelevant superstition.',
        },
        {
          id: 'opt_3',
          optionText: 'Wait five years before ever going on a date.',
          isCorrect: false,
          feedbackText: 'Impractical; testing boundaries in real time provides clear evidence within weeks.',
        },
      ],
      cognitiveTakeaway: 'The boundary test reveals whether affection is genuine care or an instrument of control.',
    },
    {
      id: 'lb_pq_03',
      questionType: 'scenario_analysis',
      question: 'A new romantic partner texts you: "I told my mother all about you, and she already considers you her daughter-in-law. You are my soulmate. I don’t want you hanging out with your college friends anymore because they don’t understand how special we are." What phase of manipulation is this?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Accelerated idealization combined with deliberate relational isolation.',
          isCorrect: true,
          feedbackText: 'Correct. Premature marital claims paired with demanding friendship severance is classic coercive entrapment.',
        },
        {
          id: 'opt_2',
          optionText: 'Healthy cultural matchmaking.',
          isCorrect: false,
          feedbackText: 'Healthy matchmaking involves mutual consent and transparent family vetting, not isolating demands.',
        },
        {
          id: 'opt_3',
          optionText: 'Passive-aggressive conflict resolution.',
          isCorrect: false,
          feedbackText: 'This is active romantic engulfment, not passive conflict.',
        },
      ],
      cognitiveTakeaway: 'Isolating demands disguised as romantic devotion are major warning signs of future abuse.',
    },
    {
      id: 'lb_pq_04',
      questionType: 'best_response',
      question: 'After one week of dating, a suitor buys you an expensive designer handbag worth three months of your salary. How should you respond to preserve your boundaries?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Decline with calm grace: "This is very kind, but it is far too extravagant for where we are in our relationship. I want to keep our focus on getting to know each other simply."',
          isCorrect: true,
          feedbackText: 'Correct. Refusing disproportionate gifts protects you from unearned emotional indebtedness.',
        },
        {
          id: 'opt_2',
          optionText: 'Accept it, sell it online immediately, and block their number.',
          isCorrect: false,
          feedbackText: 'Unethical behavior that escalates interpersonal hostility.',
        },
        {
          id: 'opt_3',
          optionText: 'Accept it and immediately agree to move into their apartment to show gratitude.',
          isCorrect: false,
          feedbackText: 'Falls directly into the dependency trap.',
        },
      ],
      cognitiveTakeaway: 'Refusing disproportionate early gifts prevents manufactured emotional indebtedness.',
    },
    {
      id: 'lb_pq_05',
      questionType: 'what_would_you_do',
      question: 'A friend who just joined an exciting new "wealth-building community" tells you: "You are the chosen few! Everyone in our group loves you already without even meeting you. Sign this $2,000 membership today!" How should you evaluate this?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Recognize organizational love bombing (Singer, 1995): unearned instant group validation deployed to extract high financial commitments before due diligence.',
          isCorrect: true,
          feedbackText: 'Correct. Cults and pyramid schemes use collective love bombing as an indoctrination tool.',
        },
        {
          id: 'opt_2',
          optionText: 'Transfer the money immediately because true friends never give bad advice.',
          isCorrect: false,
          feedbackText: 'Financial entrapment thrives on unverified trust.',
        },
        {
          id: 'opt_3',
          optionText: 'Assume you have become a global celebrity overnight.',
          isCorrect: false,
          feedbackText: 'Narcissistic fantasy that blinds targets to financial exploitation.',
        },
      ],
      cognitiveTakeaway: 'Group love bombing is a hallmark tactic of financial scams and high-control groups.',
    },
    {
      id: 'lb_pq_06',
      questionType: 'misconception_detection',
      question: 'Why do romantic relationships founded on rapid love bombing almost invariably collapse into devaluation and hostility?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Because the love bomber fell in love with a fantasy of perfection, not a real human; when normal flaws or boundaries inevitably emerge, they feel entitled to punish the partner.',
          isCorrect: true,
          feedbackText: 'Correct. Idealization is inherently fragile and inevitably curdles into resentment when reality intrudes.',
        },
        {
          id: 'opt_2',
          optionText: 'Because romantic love has an automatic 30-day expiration timer in human biology.',
          isCorrect: false,
          feedbackText: 'Authentic love and attachment can deepen over decades.',
        },
        {
          id: 'opt_3',
          optionText: 'Because partners are secretly trying to fail on purpose.',
          isCorrect: false,
          feedbackText: 'Victims genuinely desire love; the structural failure is built into the predatory dynamic.',
        },
      ],
      cognitiveTakeaway: 'Pedestal idealization is a setup: the higher the fantasy pedestal, the harder the inevitable fall.',
    },
  ],

  // VISUAL CONTENT
  visualContent: {
    id: 'vis_love_bombing',
    type: 'flowchart',
    title: 'The Idealization-Devaluation-Discard Cycle',
    altText: 'A circular flowchart showing the 4 stages of predatory attachment: Phase 1: Love Bombing (Flattery, Gifts, Future-Faking) → Phase 2: Boundary Violation → Phase 3: Devaluation (Withdrawal, Criticism, Guilt) → Phase 4: Intermittent Reinforcement / Discard.',
    caption: 'Figure 1: The Narcissistic Cycle: How premature idealization sets the stage for chronic emotional devaluation and intermittent control.',
    interactiveExplanation: 'When affection is used as a loan rather than a gift, the first boundary you set immediately triggers the transition from Phase 1 to Phase 3.',
  },

  // TAGS & RELATED TOPICS
  tags: ['Manipulation Awareness', 'Love Bombing', 'Attachment Theory', 'Narcissistic Cycle', 'Healthy Dating', 'Boundaries'],
  relatedTopics: [
    {
      topicId: 'emotional_blackmail',
      slug: 'emotional-blackmail',
      title: 'Emotional Blackmail',
      relationshipType: 'progresses_to',
    },
    {
      topicId: 'guilt_tripping',
      slug: 'guilt-tripping',
      title: 'Guilt-Tripping',
      relationshipType: 'amplified_by',
    },
    {
      topicId: 'intimidation',
      slug: 'intimidation',
      title: 'Intimidation',
      relationshipType: 'progresses_to',
    },
    {
      topicId: 'healthy_boundaries',
      slug: 'healthy-boundaries',
      title: 'Healthy Boundaries',
      relationshipType: 'counteracted_by',
    },
  ],

  // SEO METADATA
  seoTitle: 'Love Bombing: Meaning, Warning Signs, Psychology & Boundary Scripts | Mentalab Mind',
  seoDescription: 'Discover what love bombing is and how to distinguish authentic romantic chemistry from predatory idealization. Learn the boundary acid test and healthy dating scripts.',
  canonicalUrl: '/mind/manipulation-awareness/love-bombing',
  ogImageUrl: '/images/mind/love-bombing.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Love bombing accelerates neurochemical attachment to dismantle critical boundaries and establish premature psychological dependency.',
};

/**
 * High-Quality Hinglish Translation
 */
export const TOPIC_LOVE_BOMBING_HINGLISH: MindTopicDetail = {
  ...TOPIC_LOVE_BOMBING_EN,
  title: 'Love Bombing: Hadh Se Zyada Pyaar Aur "Soulmate" Ka Maya-Jaal',
  subtitle: 'Jaaniye shuruat ke over-the-top romance, gifts aur future promises ke peeche ka psychology, aur asli pyaar ko kaise pehchanein.',
  shortDescription: 'Shuruat me itna zyada pyaar, taareefein aur gifts barsana ki samne wala apna dimaag lagana band kar de aur dependent ho jaye.',
  oneLineExplanation: 'In simple terms: Rishte ke shuruat me hi "soulmate" bolkar itna pyaar aur attention dena ki aap unke control me aa jayein.',

  summary30s: 'Love bombing tab hoti hai jab koi naya insaan milte hi aap par taareefon, mehnge gifts aur 24 ghante texting ki baarish kar deta hai. Wo bolta hai: "Tum meri zindagi ka sabse bada sach ho, humara milna bhagwan ne tay kiya tha." Yeh sunne me filmi aur romantic lagta hai, lekin iska asli maqsad aapke dimaag aur time par kabza karna hota hai taaki aap unki buraiyan dekh hi na sakein aur unpar emotionally depend ho jayein.',

  coreConcept: 'Research ke mutabiq, love bombing shuruat me dimaag me dopamine aur oxytocin ka nasha create karti hai. Manipulator milte hi shaadi, bachon aur future ke bade-bade plans banane lagta hai. Kyunki yeh pyaar naturally build nahi hua hota, isliye jaise hi aap thoda time maangte hain ya "no" bolte hain, unka pyaar achanak gusse, taano aur ignore karne me badal jata hai.',
  summary60s: 'Asli rishta dheere-dheere banta hai. Dono log ek doosre ki achhi aur buri baatein dekhte hain. Lekin love bomber aapse milne ke 10 din ke andar hi shaadi ya sath rehne ki zid karne lagta hai. Wo chahta hai ki aap apne doston aur family ko chhodkar sirf unke sath rahein: "Mujhe tumhare alawa koi nahi chahiye, aur tumhe bhi sirf meri zaroorat honi chahiye." Yeh pyaar nahi, balki aapko emotionally qaid karne ka tareeqa hai.',

  quickTakeaways: [
    'Speed vs Depth: Asli pyaar waqt leta hai; love bombing 10 din me poori zindagi decide karna chahti hai',
    'Isolation Trap: "Sirf hum dono hi kaafi hain" bolkar aapko family aur friends se kaatna',
    'The Boundary Acid Test: Asli partner aapke "mujhe thoda time chahiye" ki izzat karega; love bomber gussa ho jayega',
    'Pacing Rule: Unke romance ki speed se apne decisions ki speed mat badhaiye; aaram se evaluate karein',
  ],

  whyItHappens: 'Love bombing dimaag me reward system ko hijack karti hai. Achanak itni validation aur attention milne par insaan ko lagta hai ki use duniya ka sabse perfect insaan mil gaya hai, aur wo red flags ko ignore kar deta hai.',
  evolutionaryMechanism: 'Insaan companionship chahta hai. Jab koi dikhata hai ki wo aap par sab kuch kurbaan karne ko tayyar hai, toh humare trust circuits aasaani se surrender kar dete hain.',

  howItWorks: 'Iska use toxic relationships me, matrimonial fraud me, aur cults/multi-level marketing schemes me logon ko trap karne ke liye hota hai.',
  whereYouEncounterIt: 'Dating apps, arranged marriage ke shuruati chats, aur high-pressure startups me.',

  howToRecognize: [
    'Milne ke ek-do hafte me hi "tum meri soulmate ho" ya "hum shaadi karenge" bolna',
    'Din me 50 baar call/text karna aur reply na aane par gussa hona ya bechain ho jana',
    'Shuruat me hi bohot mehnge gifts dena jisse aap par ehsaan ka bojh ban jaye',
    'Aapke doston ya parivar se milne par naraz hona: "Tumhe meri fikar nahi hai, bas doston ki padi hai"',
    'Agar aap bolein ki "dheere chalte hain", toh achanak rona, gussa hona ya taane maarna',
  ],

  examples: [
    {
      id: 'lb_ex_hi_01',
      domain: 'relationships',
      displayOrder: 1,
      title: 'Do Hafte Me Roka Ki Zid',
      description: 'Dating ke 14 din baad partner diamond ring le aata hai aur bolta hai: "Wait kyu karna? Jab pyaar sachha hai toh kal hi parents ko batate hain. Jo log rok rahe hain wo humse jalte hain."',
      takeaway: 'Notice karein ki natural vetting process ko bypass karne ke liye "pyaar ki sachhai" ka natak kiya gaya.',
    },
  ],

  scenarios: [
    {
      id: 'lb_scen_hi_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'Matrimonial App Par Roka Ka Pressure',
      narrativeContext: 'Pooja (27, Mumbai me finance analyst) ek matrimonial app par prospective groom se connect hoti hai. 3 din baat karne ke baad ladka uske office me 50 gulab bhejta hai aur uske parents ko bolta hai: "Hum agle hafte roka karenge. Pooja ko app se profile turant delete karni hogi. Agar wo aur time maang rahi hai toh iska matlab use mujhpar bharosa nahi hai."',
      biasInAction: 'Groom ne grand public gesture aur shaadi ka pressure banakar Pooja ko background verify karne ka mauka hi nahi diya.',
      optimalResponse: 'Urgency ko thanda karein: "Aapke feelings ke liye thank you. Lekin shaadi zindagibhar ka faisla hai aur main bina ache se jaane 5 din me roka nahi kar sakti. Agar aap calm pace ki respect nahi kar sakte, toh hum aage nahi badh sakte."',
      reflectionPrompt: 'Kya aapko kabhi kisi ne rishte me itna tezi se aage badhne ko kaha ki aapka dil ghabra raha tha par aapne sharm me haan bol diya?',
    },
  ],

  limitationsAndControversies: 'Caution: Har excitement love bombing nahi hoti. Naye rishte me dono taraf se excitement hona normal hai. Farq yeh hai ki agar aap bolein "Aaj main busy hu", toh normal insaan bolega "Koi baat nahi, kal baat karte hain". Lekin love bomber gusse me aa kar guilt-trip shuru kar dega.',

  howToRespond: 'PACING & BOUNDARY TEST: (1) Speed Slow Karein: Har roz milne ke bajaye gap rakhein; (2) Doston Se Milte Rahein: Apni normal life ko hold par mat daalein; (3) Ek Baar "No" Bolkar Dekhein: Dekhein ki kya wo aapki "no" ko aaram se handle kar paata hai.',
  psychologicalDefenses: [
    {
      title: 'Speed Control Script',
      instruction: 'Bolein: "Mujhe aapse baat karke achha lag raha hai, lekin main naye rishton me aaram se aage badhna pasand karta hu."',
    },
    {
      title: 'Expensive Gift Refusal',
      instruction: 'Bolein: "Yeh gift bohot pyara hai, lekin abhi humare rishte ke stage ke hisab se bohot zyada hai. Hum simple rakhein toh main zyada comfortable rahunga."',
    },
    {
      title: 'Anti-Isolation Boundary',
      instruction: 'Bolein: "Mere dost aur meri family meri zindagi ka zaroori hissa hain. Ek achha relationship in sabke sath chalta hai."',
    },
    {
      title: 'Soulmate Reframe',
      instruction: 'Bolein: "Filhal hum ek doosre ko seekh rahe hain. Soulmate banne me waqt aur mehnat lagti hai."',
    },
  ],

  researchSummary: 'Margaret Singer (1995) ne cults me love bombing ka study kiya tha. Strutzenberg et al. (2017) ne dikhaya ki love bombing karne wale logon me narcissism aur insecurity bohot high hoti hai. Mikulincer & Shaver (2007) ke mutabiq yeh anxious attachment ko exploit karta hai.',

  references: TOPIC_LOVE_BOMBING_EN.references,
  commonMisconceptions: 'Myth: "Pehli nazar ka pyaar aisa hi toofani hota hai." Reality: Research dikhati hai ki jo rishte shaanti, dosti aur mutual respect se bante hain wo lambe chalte hain, toofani romance aksar toofani ladai par khatam hota hai.',

  reflectionPrompt: 'Kya aapke sath kabhi hua hai ki kisi ne shuru me aapko aasmaan par bithaya aur fir thode din baad zameen par patak diya?',

  practiceQuestions: TOPIC_LOVE_BOMBING_EN.practiceQuestions,
  visualContent: TOPIC_LOVE_BOMBING_EN.visualContent,
  tags: TOPIC_LOVE_BOMBING_EN.tags,
  relatedTopics: TOPIC_LOVE_BOMBING_EN.relatedTopics,
  seoTitle: 'Love Bombing Kya Hai? Meaning, Warning Signs & Reality | Mentalab Mind',
  seoDescription: 'Love bombing ki psychology samjhein: shuruat me hadh se zyada pyaar aur gifts dekar control karna. Janiye boundary test aur healthy dating ke niyam.',
  canonicalUrl: '/mind/manipulation-awareness/love-bombing',
  ogImageUrl: '/images/mind/love-bombing.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Love bombing attachment hyperactivation aur premature intimacy ka use karke boundary dissolve karti hai.',
};

/**
 * Localized Helper
 */
function createLocalizedLoveBombingRecord(
  langCode: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_LOVE_BOMBING_EN,
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

export const TOPIC_LOVE_BOMBING: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_LOVE_BOMBING_EN,
  hinglish: TOPIC_LOVE_BOMBING_HINGLISH,
  hi: createLocalizedLoveBombingRecord(
    'hi',
    'लव बॉम्बिंग (Love Bombing): अत्यधिक प्रशंसा, जल्दबाजी का प्रेम और भावनात्मक जाल',
    'शुरुआती अति-रोमांस, भारी उपहारों और जल्दबाजी के वादों के पीछे के मनोविज्ञान को समझें और स्वस्थ गति बनाए रखें।',
    'सरल शब्दों में: रिश्ते की शुरुआत में ही अत्यधिक प्रशंसा और उपहारों की बौछार करना ताकि सामने वाला भावनात्मक रूप से निर्भर हो जाए।',
    'लव बॉम्बिंग तब होती है जब कोई व्यक्ति मिलते ही आपको अपनी "सोलमेट" घोषित कर देता है और भारी ध्यान, उपहार और शादी के वादों से घेर लेता है। यह सुनने में जादुई लगता है, लेकिन इसका उद्देश्य आपकी व्यक्तिगत सीमाओं को मिटाकर आपको तेजी से अपने नियंत्रण में लेना होता है।',
    'मार्गरेट सिंगर (1995) और स्ट्रट्जनबर्ग (2017) के अनुसार, यह रणनीति अत्यधिक डोपामाइन प्रवाह पैदा करके तार्किक सोच और सतर्कता को पंगु बना देती है।',
    [
      'तीव्रता बनाम आत्मीयता: सच्चा प्रेम समय और आपसी समझ से बनता है; लव बॉम्बिंग जल्दबाजी का नाटक है',
      'सीमा की परीक्षा: सीमा तय करने पर यदि सामने वाला नाराज हो जाए, तो समझें कि वह प्रेम नहीं बल्कि नियंत्रण था',
      'अलगाव का जाल: केवल एक-दूसरे में सिमट जाने के नाम पर दोस्तों और परिवार से दूर करना खतरे की घंटी है',
      'गति को धीमा करने का नियम: कभी भी जल्दबाजी में निर्णय न लें; रिश्ते को सामान्य गति से परखें',
    ]
  ),
  gu: createLocalizedLoveBombingRecord(
    'gu',
    'લવ બોમ્બિંગ: વધુ પડતો પ્રેમ, ઉતાવળા વચનો અને લાગણીઓની જાળ',
    'શરૂઆતમાં જ વધુ પડતા વખાણ અને ગિફ્ટ્સ આપીને કંટ્રોલ કરવાની યુક્તિઓ સામે સાવધાન રહો.',
    'સરળ શબ્દોમાં: સંબંધની શરૂઆતમાં જ અતિશય સ્નેહ દર્શાવીને વ્યક્તિને માનસિક રીતે નિર્ભર બનાવી દેવી.',
    'જ્યારે કોઈ વ્યક્તિ મળ્યાના થોડા જ દિવસોમાં અતિશય પ્રેમ અને લગ્નના વચનો આપીને તમારી સીમાઓ તોડવાનો પ્રયત્ન કરે છે, ત્યારે તેને લવ બોમ્બિંગ કહે છે.',
    'સંબંધોને ધીમી અને કુદરતી ગતિએ વિકસવા દેવા જરૂરી છે.',
    [
      'અતિશય ઉતાવળથી સાવધાન રહો',
      'સીમાઓ બનાવીને સામેવાળાની પ્રતિક્રિયા તપાસો',
      'મિત્રો અને પરિવાર સાથેના સંબંધો જાળવી રાખો',
    ]
  ),
  mr: createLocalizedLoveBombingRecord(
    'mr',
    'लव्ह बॉम्बिंग: अतिरेकी प्रेम, घाईघाईचे निर्णय आणि भावनिक सापळा',
    'सुरुवातीलाच भरभरून प्रेम आणि भेटवस्तू देऊन स्वतःवर अवलंबून ठेवण्याच्या वृत्तीला ओळखा.',
    'सोप्या भाषेत: सुरुवातीलाच इतके प्रेम आणि लक्ष देणे की समोरच्याला विचार करण्याची संधीच मिळू नये.',
    'लव्ह बॉम्बिंगमध्ये व्यक्ती सुरुवातीलाच तुम्हाला सर्वस्व मानण्याचे नाटक करते आणि नंतर नियंत्रण मिळवण्याचा प्रयत्न करते.',
    'नात्याची खरी परीक्षा तेव्हा होते जेव्हा तुम्ही नकार देता आणि समोरचा तो स्वीकारू शकत नाही.',
    [
      'अतिउत्साही प्रेमाचे धोके ओळखा',
      'नात्यात घाईघाईने मोठे निर्णय घेऊ नका',
      'आपल्या वैयक्तिक मर्यादा स्पष्ट ठेवा',
    ]
  ),
  bn: createLocalizedLoveBombingRecord(
    'bn',
    'লাভ বম্বিং: অতিমাত্রায় ভালোবাসা, দ্রুত প্রতিজ্ঞা ও মানসিক ফাঁদ',
    'শুরুতেই অতিরিক্ত প্রশংসা ও উপহারের মাধ্যমে কাবু করে নির্ভরতা তৈরি করার মনস্তত্ত্ব।',
    'সহজ কথায়: পরিচয়ের শুরুতেই বাঁধভাঙা ভালোবাসা দেখিয়ে কাউকে মানসিকভাবে অন্ধ করে ফেলা।',
    'লাভ বম্বিং হলো এমন এক কৌশল যেখানে অতিমাত্রায় মনোযোগ দিয়ে অন্য ব্যক্তির স্বাধীন বিচারবুদ্ধি স্তব্ধ করে দেওয়া হয়।',
    'কোনো সুস্থ সম্পর্ক রাতারাতি গড়ে ওঠে না; সময় নিয়ে মানুষকে যাচাই করাই আত্মরক্ষার উপায়।',
    [
      'অতিদ্রুত ঘনিষ্ঠতার ফাঁদ চিনুন',
      'সীমানা নির্ধারণ করে প্রতিক্রিয়া পর্যবেক্ষণ করুন',
      'পরিবার ও বন্ধুদের থেকে বিচ্ছিন্ন হবেন না',
    ]
  ),
  ta: createLocalizedLoveBombingRecord(
    'ta',
    'லவ் பாம்பிங்: அதிகப்படியான அன்பு, அவசர வாக்குறுதிகள் மற்றும் உணர்ச்சி வலை',
    'ஆரம்பத்திலேயே அளவுக்கு மீறிய அன்பையும் பரிசுகளையும் கொடுத்து அடிபணிய வைக்கும் உளவியல்.',
    'எளிய சொற்களில்: ஆரம்பத்திலேயே அதிகப்படியான அன்பு காட்டி தங்களைச் சார்ந்து இருக்க வைப்பது.',
    'லவ் பாம்பிங் என்பது ஒருவரை உணர்ச்சிவசப்பட வைத்து, யோசிக்க நேரம் தராமல் தங்கள் கட்டுப்பாட்டிற்குள் கொண்டுவரும் தந்திரமாகும்.',
    'உண்மையான அன்பு நிதானமானது; அவசரப்படும் உறவுகளில் எச்சரிக்கையாக இருக்க வேண்டும்.',
    [
      'அளவுக்கு மீறிய அவசரத்தை சந்தேகியுங்கள்',
      'எல்லைகளை வகுத்து அவர்களின் நடத்தையைக் கவனியுங்கள்',
      'சுயமரியாதையை விட்டுக்கொடுக்காதீர்கள்',
    ]
  ),
  te: createLocalizedLoveBombingRecord(
    'te',
    'లవ్ బాంబింగ్: మితిమీరిన ప్రేమ, తొందరపాటు వాగ్దానాలు మరియు భావోద్వేగ ఉచ్చు',
    'మొదట్లోనే అతిగా పొగడటం, కానుకలు ఇవ్వడం ద్వారా మానసికంగా లొంగదీసుకునే పద్ధతుల నుండి రక్షణ.',
    'సరళమైన మాటల్లో: ప్రారంభంలోనే తీవ్రమైన ప్రేమను కురిపించి తమపై ఆధారపడేలా చేసుకోవడం.',
    'లవ్ బాంబింగ్‌లో కొద్ది రోజుల్లోనే పెళ్లి, జీవితం అంటూ హద్దులను తొలగించి నియంత్రణలోకి తెచ్చుకుంటారు.',
    'సంబంధాలు పరిపక్వం చెందడానికి సమయం ఇవ్వడం చాలా ముఖ్యం.',
    [
      'అతివేగంగా సాగే ప్రేమను గమనించండి',
      'హద్దులను ఏర్పాటు చేసి పరీక్షించండి',
      'స్నేహితులు మరియు కుటుంబానికి దూరమవ్వకండి',
    ]
  ),
  kn: createLocalizedLoveBombingRecord(
    'kn',
    'ಲವ್ ಬಾಂಬಿಂಗ್: ಅತಿಯಾದ ಪ್ರೀತಿ, ಅವಸರದ ಮಾತುಗಳು ಮತ್ತು ಭಾವನಾತ್ಮಕ ಬಲೆ',
    'ಆರಂಭದಲ್ಲೇ ಮಿತಿಮೀರಿದ ಪ್ರೀತಿ ಮತ್ತು ಉಡುಗೊರೆಗಳನ್ನು ನೀಡಿ ನಿಯಂತ್ರಿಸುವ ತಂತ್ರಗಳ ಪ್ರತಿರೋಧ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಆರಂಭದಲ್ಲೇ ಅತಿಯಾದ ಪ್ರೀತಿಯನ್ನು ತೋರಿಸಿ ತಮ್ಮ ಮೇಲೆ ಅವಲಂಬಿತರಾಗುವಂತೆ ಮಾಡುವುದು.',
    'ಲವ್ ಬಾಂಬಿಂಗ್‌ನಲ್ಲಿ ವ್ಯಕ್ತಿಯನ್ನು ಭಾವನಾತ್ಮಕವಾಗಿ ಕಟ್ಟಿಹಾಕಿ ಅವರ ಆಲೋಚನಾ ಸಾಮರ್ಥ್ಯವನ್ನು ಕುಂಠಿತಗೊಳಿಸಲಾಗುತ್ತದೆ.',
    'ಸಂಬಂಧಗಳಲ್ಲಿ ನಿಧಾನಗತಿಯ ಬೆಳವಣಿಗೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳುವುದು ಕ್ಷೇಮಕರ.',
    [
      'ಅತಿಯಾದ ಆತುರಕ್ಕೆ ಮಣಿಯಬೇಡಿ',
      'ಗಡಿಗಳನ್ನು ನಿಗದಿಪಡಿಸಿ ಪರೀಕ್ಷಿಸಿ',
      'ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಉಳಿಸಿಕೊಳ್ಳಿ',
    ]
  ),
  ml: createLocalizedLoveBombingRecord(
    'ml',
    'ലവ് ബോംബിംഗ്: അമിതമായ സ്നേഹം, ധൃതിപിടിച്ച വാഗ്ദാനങ്ങൾ, വൈകാരിക കെണി',
    'തുടക്കത്തിൽ തന്നെ അമിതമായ വാത്സല്യം കാണിച്ച് ആശ്രിതത്വം ഉണ്ടാക്കുന്ന രീതികളെ പ്രതിരോധിക്കുക.',
    'ലളിതമായി പറഞ്ഞാൽ: തുടക്കത്തിൽ തന്നെ അതിരുകടന്ന സ്നേഹം കാണിച്ച് നിയന്ത്രണത്തിലാക്കുക.',
    'ഒരു വ്യക്തിയെ പെട്ടെന്ന് സ്വാധീനിച്ച് അവരുടെ യുക്തിസഹമായ ചിന്തയെ തടസ്സപ്പെടുത്തുന്നതാണ് ലവ് ബോംബിംഗ്.',
    'യഥാർത്ഥ സ്നേഹം സമയമെടുത്ത് വളരുന്നതാണ്; അതിവേഗ അടുപ്പങ്ങളിൽ ജാഗ്രത പാലിക്കുക.',
    [
      'അമിതമായ ധൃതിയെ തിരിച്ചറിയുക',
      'വ്യക്തിഗത അതിരുകൾ നിലനിർത്തുക',
      'ബന്ധങ്ങളിൽ സാവധാനം മുന്നോട്ട് പോവുക',
    ]
  ),
  pa: createLocalizedLoveBombingRecord(
    'pa',
    'ਲਵ ਬੌਂਬਿੰਗ: ਹੱਦੋਂ ਵੱਧ ਪਿਆਰ, ਜਲਦਬਾਜ਼ੀ ਦੇ ਵਾਅਦੇ ਅਤੇ ਜਜ਼ਬਾਤੀ ਜਾਲ',
    'ਸ਼ੁਰੂ ਵਿੱਚ ਹੀ ਤੋਹਫ਼ਿਆਂ ਅਤੇ ਤਾਰੀਫ਼ਾਂ ਦੇ ਢੇਰ ਲਗਾ ਕੇ ਕੰਟਰੋਲ ਕਰਨ ਦੀ ਚਾਲ ਨੂੰ ਸਮਝੋ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਰਿਸ਼ਤੇ ਦੇ ਸ਼ੁਰੂ ਵਿੱਚ ਹੀ ਬਹੁਤ ਜ਼ਿਆਦਾ ਪਿਆਰ ਦਿਖਾ ਕੇ ਨਿਰਭਰ ਬਣਾ ਲੈਣਾ।',
    'ਲਵ ਬੌਂਬਿੰਗ ਵਿੱਚ ਵਿਅਕਤੀ ਮਿਲਦੇ ਹੀ ਵੱਡੇ-ਵੱਡੇ ਸੁਪਨੇ ਦਿਖਾ ਕੇ ਸਾਹਮਣੇ ਵਾਲੇ ਦੀ ਸੋਚਣ ਸ਼ਕਤੀ ਨੂੰ ਕਾਬੂ ਕਰ ਲੈਂਦਾ ਹੈ।',
    'ਸੱਚਾ ਰਿਸ਼ਤਾ ਹੌਲੀ-ਹੌਲੀ ਸਮਝ ਨਾਲ ਬਣਦਾ ਹੈ; ਜਲਦਬਾਜ਼ੀ ਤੋਂ ਬਚਣਾ ਜ਼ਰੂਰੀ ਹੈ।',
    [
      'ਹੱਦੋਂ ਵੱਧ ਪਿਆਰ ਦੇ ਖ਼ਤਰੇ ਨੂੰ ਪਛਾਣੋ',
      'ਸੀਮਾਵਾਂ ਬਣਾ ਕੇ ਪਰਖੋ',
      'ਆਪਣੇ ਫ਼ੈਸਲਿਆਂ ਵਿੱਚ ਸੁਤੰਤਰ ਰਹੋ',
    ]
  ),
  ur: createLocalizedLoveBombingRecord(
    'ur',
    'لو بومبنگ (Love Bombing): حد سے زیادہ محبت اور جذباتی جال',
    'شروعات میں ہی تعریفوں، تحائف اور جلد بازی کے وعدوں کے ذریعے قابو پانے کی نفسیات۔',
    'آسان الفاظ میں: تعلق کے آغاز میں ہی اتنی محبت نچھاور کرنا کہ انسان جذباتی طور پر مفلوج اور محتاج ہو جائے۔',
    'لو بومبنگ میں انسان کو پلک جھپکتے ہی اپنی جان اور روح قرار دے کر اس کی ذاتی حدود سلب کر لی جاتی ہیں۔',
    'حقیقی محبت وقت مانگتی ہے؛ غیر معمولی عجلت سے ہوشیار رہنا چاہیے۔',
    [
      'غیر معمولی جلدی اور دعووں کو پرکھیں',
      'اپنی حدود قائم کر کے ردِ عمل دیکھیں',
      'خاندان اور دوستوں سے لاتعلق نہ ہوں',
    ]
  ),
  or: createLocalizedLoveBombingRecord(
    'or',
    'ଲଭ୍ ବମ୍ବିଂ: ଅତ୍ୟଧିକ ପ୍ରେମ, ତରବରିଆ ପ୍ରତିଶ୍ରୁତି ଓ ଭାବପ୍ରବଣତାର ଜାଲ',
    'ପ୍ରାରମ୍ଭରେ ପ୍ରଚୁର ପ୍ରଶଂସା ଓ ଉପହାର ଦେଇ ନିଜ ଅଧୀନରେ ରଖିବାର କୌଶଳର ପ୍ରତିରୋଧ।',
    'ସରଳ ଭାଷାରେ: ସମ୍ପର୍କର ଆରମ୍ଭରେ ଅତ୍ୟଧିକ ଭଲପାଇବା ଦେଖାଇ ଅନ୍ୟକୁ ନିଜ ଉପରେ ନିର୍ଭରଶୀଳ କରାଇବା।',
    'ଲଭ୍ ବମ୍ବିଂରେ ବ୍ୟକ୍ତି ତୁରନ୍ତ ସବୁ ସୀମା ଭାଙ୍ଗି ନିଜ ନିୟନ୍ତ୍ରଣ ବିସ୍ତାର କରିବାକୁ ଚେଷ୍ଟା କରେ।',
    'ସମ୍ପର୍କକୁ ସ୍ୱାଭାବିକ ଗତିରେ ଗଢ଼ି ଉଠିବାକୁ ସମୟ ଦେବା ଆବଶ୍ୟକ।',
    [
      'ଅତ୍ୟଧିକ ତରବରିଆ ପ୍ରେମରୁ ସାବଧାନ ରୁହନ୍ତୁ',
      'ନିଜ ସୀମା ନିର୍ଦ୍ଧାରଣ କରି ପରୀକ୍ଷା କରନ୍ତୁ',
      'ସ୍ୱାଧୀନ ଭାବରେ ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ',
    ]
  ),
  as: createLocalizedLoveBombingRecord(
    'as',
    'লাভ বম্বিং: অতিমাত্ৰা প্ৰেম, খৰখেদাৰ প্ৰতিশ্ৰুতি আৰু আৱেগিক জাল',
    'আৰম্ভণিতেই প্ৰচুৰ প্ৰশংসা আৰু উপহাৰ দি মানসিকভাৱে বশ কৰোৱাৰ কৌশল প্ৰতিৰোধ।',
    'সহজ ভাষাত: সম্পৰ্কৰ আৰম্ভণিতেই অপৰিসীম মৰম দেখুৱাই মানুহক সম্পূৰ্ণভাৱে নিজৰ ওপৰত নিৰ্ভৰশীল কৰা।',
    'লাভ বম্বিঙত ব্যক্তিয়ে অতি সোনকালে সকলো সিদ্ধান্ত ল’বলৈ হেঁচা প্ৰয়োগ কৰে।',
    'প্ৰকৃত প্ৰেম সময়ৰ লগত বিকশিত হয়; গতিকে খৰখেদাৰ পৰা সাৱধান হওক।',
    [
      'অত্যধিক খৰখেদাৰ প্ৰতি সজাগ হওক',
      'ব্যক্তিগত সীমা ৰক্ষা কৰি পৰীক্ষা কৰক',
      'সচেতনভাৱে সিদ্ধান্ত গ্ৰহণ কৰক',
    ]
  ),
};
