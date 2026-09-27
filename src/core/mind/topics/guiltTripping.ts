import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 02: Guilt-Tripping
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Interpersonal Guilt as a Social Influence Mechanism (Baumeister, Stillwell, & Heatherton, 1994)
 * - Guilt-Inducing Communication in Close Relationships (Vangelisti, Daly, & Rudnick, 1991)
 * - Cognitive and Moral Dynamics of Induced Guilt (Miceli & Castelfranchi, 2018)
 */

export const TOPIC_GUILT_TRIPPING_EN: MindTopicDetail = {
  id: 'guilt_tripping',
  categoryId: 'manipulation_awareness',
  slug: 'guilt-tripping',
  difficulty: 'beginner',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 2,
  viewCount: 5120,
  shareCount: 460,
  bookmarkCount: 890,
  title: 'Guilt-Tripping: How Emotional Debt is Used to Force Compliance',
  subtitle: 'Recognizing induced guilt, understanding its psychological grip, and responding with healthy boundaries.',
  shortDescription: 'A covert communication pattern where someone deliberately emphasizes their own suffering or sacrifices to induce moral discomfort in another person, compelling them to yield to demands.',
  oneLineExplanation: 'In simple terms: Making someone feel morally responsible for your unhappiness so they feel forced to do what you want.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'Guilt-tripping happens when someone uses your empathy and conscience against you. Instead of directly asking for what they want or accepting your boundary, they drop heavy emotional hints, sigh dramatically, or list past sacrifices. This triggers an uncomfortable internal moral ache ("I am a bad person if I say no"), forcing you to comply just to relieve the guilt.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Guilt-tripping is an interpersonal compliance tactic that leverages social debt and moral obligation. By framing their disappointment as evidence of your moral defect or lack of love, the influencer creates acute emotional discomfort that can only be relieved by submission.',
  summary60s: 'Consider the difference between authentic communication and guilt-tripping: If a friend says, "I was really hoping you could come to my party tonight, but I understand you need to study for your exam," they are expressing authentic sadness while respecting your autonomy. If they instead say, "Go ahead, study. I guess my birthday does not matter. I will just celebrate alone like always," they are using guilt-tripping. They transform your reasonable choice into an act of cruelty, pressuring you to abandon your study plans to appease their distress.',

  quickTakeaways: [
    'Empathy Hijacking: It relies on high-conscience targets who instinctively hate causing pain to others',
    'Unstated Demands: Instead of clear, adult requests, communication is coated in martyrdom and passive-aggressive sighs',
    'Separating Care from Compliance: You can care deeply about someone\'s feelings without obeying their every demand',
    'Distinguish Expressing Hurt: Expressing genuine sadness is healthy; implying moral failure to force obedience is guilt-tripping',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Humans evolved as intensely cooperative social primates. Internal guilt evolved as a cognitive alarm mechanism to prevent us from damaging valuable social relationships. When someone implies we have violated relational loyalty or hurt a tribe member, our amygdala and anterior insula trigger visceral moral discomfort, motivating immediate appeasement.',
  evolutionaryMechanism: 'In prehistoric groups, being judged as an ungrateful or selfish band member risked social ostracization—a death sentence in harsh environments. Guilt-tripping hijacks this survival mechanism by weaponizing social rejection fear.',

  // SECTION E — WHY MIGHT SOMEONE USE THIS PATTERN?
  howItWorks: 'It typically stems from learned communication patterns in families of origin where direct conflict was forbidden. Individuals who lack assertiveness or fear direct vulnerability resort to guilt-tripping because asking directly risks hearing an outright "no", whereas guilt-tripping forces the other person to volunteer compliance.',
  whereYouEncounterIt: 'Family commitments, romantic partnerships, workplace overtime requests, fundraising campaigns, and close friendships.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Phrases highlighting martyrdom: "After everything I sacrificed for you..."',
    'Passive-aggressive sighs and dramatic victim statements ("Do not worry about me, I am used to being ignored")',
    'Bringing up unrelated past favors to demand present compliance',
    'Equating disagreement with lack of love or moral cruelty',
    'Feeling a persistent pit in your stomach whenever you want to say "no"',
  ],

  // SECTION G — NORMAL BEHAVIOR VS UNHEALTHY PATTERN
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Expressing Authentic Hurt vs. Guilt-Tripping',
    description: 'Understanding the crucial boundary between honest emotional sharing and coercive manipulation.',
    analogySideA: {
      label: 'Expressing Authentic Hurt',
      detail: '"I felt sad when you canceled our plans. I was looking forward to seeing you." (Owns own feelings; leaves the other person free to respond).',
    },
    analogySideB: {
      label: 'Guilt-Tripping Compliance',
      detail: '"If you actually cared about this relationship, you would never cancel. Enjoy your evening while I sit here crying." (Weaponizes feelings to coerce).',
    },
  },

  // SECTION H, I, J — REAL-LIFE EXAMPLES & INDIAN CONTEXT
  examples: [
    {
      id: 'gt_ex_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Weekend Overtime Pressure',
      description: 'Manager: "Everyone else on the engineering team has agreed to work on Sunday. If the project slips because one person wanted a weekend off, the whole department’s bonus is on the line. But sure, go enjoy your weekend if you feel that is fair to your teammates."',
      takeaway: 'Notice how personal boundary setting is reframed as selfish sabotage of the entire team.',
    },
    {
      id: 'gt_ex_02',
      domain: 'relationships',
      displayOrder: 2,
      title: 'The Hobby Restriction',
      description: 'Partner A wants to attend a Saturday morning badminton club. Partner B: "I guess you would rather hit a shuttlecock with strangers than spend time with me. It is fine, I will just clean the whole apartment by myself while you have fun."',
      takeaway: 'Normal individual autonomy is penalized by framing it as relational abandonment.',
    },
  ],

  scenarios: [
    {
      id: 'gt_scen_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'The Diwali Holiday Relocation Dilemma',
      narrativeContext: 'Rohan works in Bangalore and has two days of official holiday for Diwali. His mother expects him to take 5 days of unpaid leave and travel 20 hours by train to his hometown. When Rohan explains that he cannot take unpaid leave due to an urgent client deployment, his mother starts weeping on the phone: "Your cousin came all the way from Canada for his mother. We spent our entire provident fund on your engineering degree, and now your computer screen is more important than your aging parents. The neighbors are already asking why our son has abandoned us."',
      biasInAction: 'The mother invokes educational sacrifices, social gossip, and moral filial duty to manufacture overwhelming guilt, bypassing Rohan’s practical employment reality.',
      optimalResponse: 'Validate the love without absorbing the manufactured guilt: "Mummy, I love you and I want to celebrate with you. My job does not permit leave this week, and that is a professional constraint, not a lack of love. I am booking tickets for the first weekend of next month instead."',
      reflectionPrompt: 'Have you ever agreed to an exhausting obligation purely because someone made you feel that saying "no" proved you were an ungrateful or bad person?',
    },
  ],

  // SECTION K — SPOT THE PATTERN (Interactive Scenario)
  interactiveScenarios: [
    {
      id: 'scen_gt_01',
      topicId: 'guilt_tripping',
      title: 'Spot the Pattern: Group Vacation Budget Pressure',
      contextVignette: 'Your college friend group is booking an expensive luxury villa for a weekend trip. You explain that it is beyond your monthly budget and propose a more affordable resort nearby. One friend replies in the WhatsApp group: "We have been planning this for six months. If you back out now, our per-person cost goes up and the whole trip is ruined for everyone. Thanks a lot for being a buzzkill."',
      vignetteSourceType: 'social_media',
      question: 'What is the most psychologically sound way to interpret and respond to this message?',
      options: [
        {
          id: 'opt_gt_a',
          label: 'A',
          text: 'Borrow money on an emergency credit card so that nobody in the friend group is disappointed with you.',
          explanation: 'Violating your financial health to relieve manufactured social guilt creates long-term resentment and poor boundaries.',
          isCorrect: false,
        },
        {
          id: 'opt_gt_b',
          label: 'B',
          text: 'Recognize the guilt-trip: they are blaming your financial boundary for their booking math, rather than planning an inclusive trip.',
          explanation: 'Correct. Clear boundaries distinguish between your personal financial responsibility and their collective choice of luxury accommodation.',
          isCorrect: true,
        },
        {
          id: 'opt_gt_c',
          label: 'C',
          text: 'Leave the group permanently without a word and block all their phone numbers.',
          explanation: 'Ghosting escalates emotional drama. A firm, calm statement of boundaries is far more empowering.',
          isCorrect: false,
        },
      ],
      revealedExplanation: {
        correctSummary: 'Recognize the guilt lever and stand firm in your personal boundaries.',
        whyItMatters: 'Guilt-trippers make you feel responsible for their disappointment so they do not have to compromise.',
        cognitiveTrap: 'Assuming that because someone feels upset, you must have committed a moral wrong.',
        actionableAntidote: 'The "Two-Column Separation": Column A is their emotional preference; Column B is your legitimate personal limit.',
      },
      difficulty: 'medium',
      culturalContext: 'indian_general',
    },
  ],

  // SECTION L & Q — "BUT BE CAREFUL" & LIMITATIONS
  limitationsAndControversies: 'Caution: Never treat every expression of sadness or hurt as manipulation. When people care about each other, letting a partner or friend know when their behavior caused pain is vital for intimacy. The scientific dividing line is whether the speaker accepts your boundary or continues to escalate moral condemnation until you capitulate.',

  // SECTION M & N — HOW TO RESPOND & SCRIPTS
  howToRespond: 'The key is to de-couple your empathy from your compliance. You can offer warm emotional understanding while maintaining an iron-clad behavioral boundary.',
  psychologicalDefenses: [
    {
      title: 'The Clarifying Question ("Direct Request Test")',
      instruction: 'When someone sighs and drops guilt hints, ask directly: "It sounds like you are disappointed. Are you asking me to change my schedule, or did you just want to share how you feel?"',
    },
    {
      title: 'The "Compassionate No" Script',
      instruction: 'Say: "I understand how important this is to you, and I hear your frustration. However, my answer is still no."',
    },
    {
      title: 'Disarm the Past Sacrifice Lever',
      instruction: 'Say: "I am genuinely grateful for what you did in the past. But I cannot make this specific decision today based on that."',
    },
  ],

  // SECTION P — RESEARCH & CITATIONS
  researchSummary: 'In their seminal paper "Guilt: An interpersonal approach" (Psychological Bulletin, 1994), Roy Baumeister, Arlene Stillwell, and Todd Heatherton showed that guilt functions primarily as an interpersonal influence mechanism rather than an intrapsychic one. Guilt redistributes emotional distress from the transgressor to the partner, creating an emotional leverage balance that compels compliance. Vangelisti et al. (1991) categorized guilt-inducing messages, demonstrating that appeals to relationship obligations and self-inflicted martyrdom evoke the highest compliance rates but simultaneously foster chronic underlying resentment.',

  references: [
    {
      id: 'gt_ref_01',
      title: 'Guilt: An interpersonal approach',
      citation: 'Baumeister, R. F., Stillwell, A. M., & Heatherton, T. F. (1994). Psychological Bulletin, 115(2), 243–267.',
      authors: 'Roy F. Baumeister, Arlene M. Stillwell, Todd F. Heatherton',
      publicationYear: 1994,
      journalOrPublisher: 'Psychological Bulletin',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_meta_analysis',
      doiOrUrl: 'https://doi.org/10.1037/0033-2909.115.2.243',
      relevance: 'Foundational empirical synthesis on how guilt is generated and leveraged across human relationships.',
      displayOrder: 1,
    },
    {
      id: 'gt_ref_02',
      title: 'Guilt-eliciting messages in interpersonal relationships',
      citation: 'Vangelisti, A. L., Daly, J. A., & Rudnick, J. R. (1991). Human Communication Research, 18(1), 3–39.',
      authors: 'Anita L. Vangelisti, John A. Daly, Janine R. Rudnick',
      publicationYear: 1991,
      journalOrPublisher: 'Human Communication Research',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: 'https://doi.org/10.1111/j.1468-2958.1991.tb00527.x',
      relevance: 'Taxonomy of guilt messages and their relational costs over longitudinal interactions.',
      displayOrder: 2,
    },
  ],

  // SECTION R — COMMON MYTHS
  commonMisconceptions: 'Myth: "If I feel guilty after saying no, it means I made the wrong choice." Reality: Guilt is often a conditioned habit from childhood. Feeling guilt simply means your empathy is active, not that your boundary was unethical.',

  // SECTION S — REFLECTION PROMPT
  reflectionPrompt: 'Have you ever agreed to an exhausting obligation purely because someone made you feel that saying "no" proved you were an ungrateful or bad person?',

  // SECTION T — PRACTICE QUESTIONS (6 Distinct Questions)
  practiceQuestions: [
    {
      id: 'gt_pq_01',
      questionType: 'identify_influence_principle',
      question: 'Which of the following statements is the clearest example of guilt-tripping rather than honest communication?',
      options: [
        {
          id: 'opt_1',
          optionText: '"I am frustrated that we have not spent time together this week. Can we schedule a dinner on Friday?"',
          isCorrect: false,
          feedbackText: 'This is a direct, assertive request expressing feelings cleanly.',
        },
        {
          id: 'opt_2',
          optionText: '"Go enjoy your evening out with your friends. I will just sit here in the dark wondering why I am never enough for you."',
          isCorrect: true,
          feedbackText: 'Correct. This uses dramatic martyrdom and moral shaming to compel the partner to abandon their plans.',
        },
        {
          id: 'opt_3',
          optionText: '"I had a really difficult day at work and would love some quiet time tonight."',
          isCorrect: false,
          feedbackText: 'This is transparent communication of personal capacity.',
        },
      ],
      cognitiveTakeaway: 'Guilt-trips weaponize emotional martyrdom rather than requesting concrete action.',
    },
    {
      id: 'gt_pq_02',
      questionType: 'scenario_analysis',
      question: 'According to Baumeister et al. (1994), why does guilt-tripping work so effectively on high-conscience individuals?',
      options: [
        {
          id: 'opt_1',
          optionText: 'It activates social pain circuits in the brain, creating an urgent desire to restore perceived relational equity.',
          isCorrect: true,
          feedbackText: 'Correct. High-empathy individuals experience acute discomfort when perceived as causing suffering to someone they care about.',
        },
        {
          id: 'opt_2',
          optionText: 'It increases physical dopamine production, making compliance feel euphoric.',
          isCorrect: false,
          feedbackText: 'Guilt compliance is motivated by negative reinforcement (relieving discomfort), not euphoria.',
        },
        {
          id: 'opt_3',
          optionText: 'It makes the listener lose all capacity for critical reasoning permanently.',
          isCorrect: false,
          feedbackText: 'Guilt affects emotional decision-making, not overall intelligence.',
        },
      ],
      cognitiveTakeaway: 'Guilt operates via negative reinforcement: people submit to turn off the painful emotional alarm.',
    },
    {
      id: 'gt_pq_03',
      questionType: 'best_response',
      question: 'When a coworker sighs loudly and remarks: "It must be nice to leave at 5 PM while the rest of us work our fingers to the bone," what is the most assertive, healthy response?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Apologize, sit back down at your desk, and work an extra two unpaid hours.',
          isCorrect: false,
          feedbackText: 'This reinforces that passive-aggressive remarks dictate your work boundaries.',
        },
        {
          id: 'opt_2',
          optionText: 'Say calmly: "I have finished my scheduled tasks for today. Good luck with the remainder of your shift, see you tomorrow."',
          isCorrect: true,
          feedbackText: 'Correct. Non-defensive, polite, and refuses to accept the unearned guilt projection.',
        },
        {
          id: 'opt_3',
          optionText: 'Insult their work ethic and accuse them of being incompetent.',
          isCorrect: false,
          feedbackText: 'Hostility escalates conflict and shifts focus away from healthy professionalism.',
        },
      ],
      cognitiveTakeaway: 'Respond with polite neutrality; do not defend a boundary that needs no defense.',
    },
    {
      id: 'gt_pq_04',
      questionType: 'misconception_detection',
      question: 'What is the primary danger of repeatedly complying with guilt-tripping in a long-term relationship?',
      options: [
        {
          id: 'opt_1',
          optionText: 'It builds chronic unspoken resentment and erodes authentic emotional intimacy over time.',
          isCorrect: true,
          feedbackText: 'Correct. Submitting out of guilt creates emotional distance and secret anger toward the guilt-inducer.',
        },
        {
          id: 'opt_2',
          optionText: 'It causes the guilt-tripper to stop making demands forever.',
          isCorrect: false,
          feedbackText: 'Submitting rewards and reinforces the behavior, guaranteeing it will happen again.',
        },
        {
          id: 'opt_3',
          optionText: 'It has no psychological consequences as long as both partners love each other.',
          isCorrect: false,
          feedbackText: 'Research (Vangelisti et al.) confirms guilt compliance significantly degrades relationship satisfaction.',
        },
      ],
      cognitiveTakeaway: 'Guilt-bought compliance always comes at the cost of authentic intimacy.',
    },
    {
      id: 'gt_pq_05',
      questionType: 'what_would_you_do',
      question: 'A relative says: "After everything your mother sacrificed to raise you, you can’t even lend your cousin ₹50,000 for his crypto trading?" How should you handle this moral equation?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Decouple the two issues: "I love my mother and honor her sacrifices. However, my financial policy is not to lend money for speculative investments."',
          isCorrect: true,
          feedbackText: 'Correct. Explicitly separate the emotional loyalty card from the unrelated financial request.',
        },
        {
          id: 'opt_2',
          optionText: 'Give the money immediately to avoid being talked about in family gatherings.',
          isCorrect: false,
          feedbackText: 'This enables financial risk and reinforces toxic familial guilt-tripping.',
        },
        {
          id: 'opt_3',
          optionText: 'Tell the relative that your mother was actually a terrible parent.',
          isCorrect: false,
          feedbackText: 'This is reactive, hurtful, and completely unnecessary.',
        },
      ],
      cognitiveTakeaway: 'Disarm false moral equivalencies: gratitude for one person does not obligate compliance to another.',
    },
    {
      id: 'gt_pq_06',
      questionType: 'compare_situations',
      question: 'What is the core difference between a "healthy request" and a "guilt-trip"?',
      options: [
        {
          id: 'opt_1',
          optionText: 'A healthy request accepts a "no" with grace; a guilt-trip treats a "no" as proof of moral or emotional failure.',
          isCorrect: true,
          feedbackText: 'Correct. Autonomy is respected in healthy communication; guilt-trips punish autonomy with moral censure.',
        },
        {
          id: 'opt_2',
          optionText: 'A healthy request is always spoken loudly; guilt-trips are always whispered.',
          isCorrect: false,
          feedbackText: 'Volume has nothing to do with the psychological structure of guilt induction.',
        },
        {
          id: 'opt_3',
          optionText: 'There is no difference; all requests in relationships are forms of manipulation.',
          isCorrect: false,
          feedbackText: 'Cynical false equivalence. Open, direct requests are the foundation of healthy relationships.',
        },
      ],
      cognitiveTakeaway: 'True communication allows the other person the emotional freedom to say no.',
    },
  ],

  // VISUAL CONTENT
  visualContent: {
    id: 'vis_guilt_tripping',
    type: 'diagram',
    title: 'The Guilt-Trip Leverage Circuit',
    altText: 'Diagram illustrating how unstated demands and manufactured moral debt trigger empathic alarm and forced submission.',
    caption: 'Figure 1: The Guilt Loop: Unstated Request → Moral Martyrdom → Empathic Discomfort → Compliance Relief.',
    interactiveExplanation: 'When moral discomfort spikes, the human brain seeks the fastest pathway to resolve the tension, which is often yielding to the unstated demand.',
  },

  // TAGS & RELATED TOPICS
  tags: ['Manipulation Awareness', 'Guilt-Tripping', 'Boundaries', 'Emotional Blackmail', 'Communication'],
  relatedTopics: [
    {
      topicId: 'victim_playing',
      slug: 'victim-card-patterns',
      title: 'Victim Playing Patterns',
      relationshipType: 'amplified_by',
    },
    {
      topicId: 'emotional_blackmail',
      slug: 'emotional-blackmail',
      title: 'Emotional Blackmail',
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
  seoTitle: 'Guilt-Tripping: Meaning, Signs, Examples & Healthy Boundaries | Mentalab Mind',
  seoDescription: 'Learn what guilt-tripping is, why it triggers emotional compliance, real-life family and workplace examples, and how to respond without guilt.',
  canonicalUrl: '/mind/manipulation-awareness/guilt-tripping',
  ogImageUrl: '/images/mind/guilt-tripping.png',
  publishedAt: '2026-09-21T00:00:00Z',
  deepExplanation: 'Guilt-tripping converts empathetic sensitivity into interpersonal leverage via anticipated moral failure.',
};

/**
 * High-Quality Hinglish Translation (Conversational Indian Roman Script)
 */
export const TOPIC_GUILT_TRIPPING_HINGLISH: MindTopicDetail = {
  ...TOPIC_GUILT_TRIPPING_EN,
  title: 'Guilt-Tripping: Emotional Pressure Ko Pehchano & Boundary Banao',
  subtitle: 'Guilt me daalkar apni baat manwana: samjhein yeh psychology kaise kaam karti hai aur kaise calmly deal karein.',
  shortDescription: 'Ek aisa communication pattern jisme saamne wala apne dukh, ehsaan ya sacrifices gina kar aapke dil me guilt paida karta hai taaki aap uski baat maan lein.',
  oneLineExplanation: 'In simple terms: Apni baat manwane ke liye saamne wale ko guilty feel karwana ki wo ek bura insaan hai agar usne na bola.',

  summary30s: 'Guilt-tripping tab hoti hai jab koi direct request karne ke bajaye emotional taane, ahein bharna, ya purane ehsaan ginana shuru kar deta hai. Isse aapke andar ek bechaini hone lagti hai ki "Agar maine mana kiya toh main kitna selfish lagunga." Isi guilt ke bojh se bachne ke liye aap unwillingly haan bol dete hain.',

  coreConcept: 'Guilt-tripping ek psychological manipulation hai jo insaan ke empathy aur conscience ka faayda uthati hai. Saamne wala apne dukh ko aapki galti bana deta hai, taaki aap guilt se dhar-kar unki baat maan lein.',
  summary60s: 'Imagine karein ki aapka weekend par zaroori kaam hai. Ek dost aapse kehta hai: "Main chahta tha tum mere sath chalo, par tumhara kaam zaroori hai, no problem." Yeh healthy communication hai. Par agar wo kahe: "Haan haan, jao apna kaam karo. Meri toh koi value hi nahi hai. Main akela hi sadunga, mere dukh se kisko kya farq padta hai." Yeh guilt-tripping hai. Yaha aapki legitimate boundary ko "bewafai ya berukhi" ka roop de diya gaya hai.',

  quickTakeaways: [
    'Empathy Ka Misuse: Acche aur sensitive log iska shikar sabse jaldi hote hain',
    'Passive-Aggressive Drama: Saaf baat karne ke bajaye taane aur martyr (qurbaani) banna',
    'Care vs Majboori: Kisi ki parwah karne ka matlab yeh nahi ki aap unki har zid maanein',
    'Dukh Jatana vs Guilt-Trip: Apni feelings share karna normal hai, par guilt daalkar force karna manipulation hai',
  ],

  whyItHappens: 'Insaan ek social biological creature hai. Humare dimaag me darr hota hai ki agar humne kisi ko hurt kiya toh hume society se nikaal diya jayega. Guilt-tripper isi darr ka faayda uthata hai.',
  evolutionaryMechanism: 'Tribe me agar kisi ko lagta tha ki wo ungrateful hai, toh use akele chhod diya jata tha. Isliye dimaag guilt me aakar turant agree kar leta hai.',

  howItWorks: 'Yeh 3 steps me hota hai: (1) Direct request na karke taana marna; (2) Purane ehsaan ya sacrifices yaad dilana; (3) Saamne wale ko guilty feel karwake compromise karwana.',
  whereYouEncounterIt: 'Family expectations, rishton me, doston ke udhaar me, aur office me overtime karwane ke liye.',

  howToRecognize: [
    '"Humne tumhare liye itna kuch kiya..." jaise dialogues sunna',
    'Aapke "No" bolte hi unka achanak rone lagna ya chup ho jana',
    'Saal purane chote-mote favours ginwana jab aap ek kaam ke liye mana karein',
    'Har baar unke sath rehne par pet me ajeeb si anxiety aur guilt feel hona',
  ],

  examples: [
    {
      id: 'gt_ex_hi_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Sunday Overtime Ka Pressure',
      description: 'Manager: "Baki sab log Sunday ko aa rahe hain. Agar tumne chutti le li aur client chala gaya, toh sabka bonus ruk jayega. Par theek hai, agar tumhe team ki fikar nahi hai toh aish karo weekend par."',
      takeaway: 'Notice karein ki management ki galti ko employee ke "selfish hone" ka tag de diya gaya.',
    },
  ],

  scenarios: [
    {
      id: 'gt_scen_hi_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'Diwali Ki Chutti Aur Emotional Taana',
      narrativeContext: 'Rohan Bangalore me job karta hai aur Diwali par sirf 2 din ki leave mil rahi hai. Uski mummy phone par rone lagti hain: "Sharma ji ka beta Canada se 15 din ke liye aaya hai. Humne apni saari savings tumhari B.Tech me laga di, aur aaj tumhare paas apne maa-baap ke liye 2 din ka time nahi hai? Rishtedaar puchte hain toh sharam aati hai."',
      biasInAction: 'Mummy ne career ki practical reality ko emotional loyalty aur sacrifice se jod kar guilt ka pahad bana diya.',
      optimalResponse: 'Pyaar se samjhayein par guilt na lein: "Mummy, main aapse bohot pyaar karta hu aur aapse milna chahta hu. Company me leave policy strict hai isliye main is week nahi aa pa raha. Main next month weekend par pakka aaunga."',
      reflectionPrompt: 'Kya aapne kabhi kisi function me sirf isliye haan bola kyunki mana karne par aapko "ungrateful" bola jata?',
    },
  ],

  limitationsAndControversies: 'Caution: Har sadness ya rone ko guilt-tripping na samjhein. Jab koi sach me hurt hota hai toh batana zaroori hai. Farq yeh hai ki samne wala aapki boundary sunkar samajhta hai ya aapko force karta hai.',

  howToRespond: 'Empathy aur Compliance ko alag karein. Unki baat ko pyaar se sunein, lekin apna "No" clear rakhein.',
  psychologicalDefenses: [
    {
      title: 'Direct Question Technique',
      instruction: 'Bolein: "Lagta hai aap pareshan hain. Kya aap mujhse direct kuch help chahte hain ya bas apni feeling share kar rahe hain?"',
    },
    {
      title: 'Compassionate No',
      instruction: 'Bolein: "Main samajhta hu aapko bura laga, lekin mera decision wahi rahega."',
    },
    {
      title: 'Purane Ehsaan Ka Counter',
      instruction: 'Bolein: "Aapne pehle jo help ki uske liye main dil se shukrguzaar hu, lekin is particular decision me main agree nahi kar sakta."',
    },
  ],

  researchSummary: 'Baumeister et al. (1994) ke mutabiq, guilt ek interpersonal influence tool hai jo emotional distress ko transfer karta hai. Compliance mil jati hai lekin rishte me lamba resentment build hota hai.',

  references: TOPIC_GUILT_TRIPPING_EN.references,
  commonMisconceptions: 'Myth: "Agar mujhe mana karke bura lag raha hai, toh matlab meri hi galti hai." Reality: Guilt ek natural feeling hai. Bura lagne ka matlab yeh nahi ki aapka boundary banana galat tha.',

  reflectionPrompt: 'Kya aapne kabhi kisi function me sirf isliye haan bola kyunki mana karne par aapko "ungrateful" bola jata?',

  practiceQuestions: TOPIC_GUILT_TRIPPING_EN.practiceQuestions,
  visualContent: TOPIC_GUILT_TRIPPING_EN.visualContent,
  tags: TOPIC_GUILT_TRIPPING_EN.tags,
  relatedTopics: TOPIC_GUILT_TRIPPING_EN.relatedTopics,
  seoTitle: 'Guilt-Tripping Kya Hai? Signs, Examples & Boundary Responses | Mentalab Mind',
  seoDescription: 'Guilt-tripping ki psychology samjhein: log kaise ehsaan gina kar apni baat manwate hain aur kaise bina ladai kiye apni boundary bachayein.',
  canonicalUrl: '/mind/manipulation-awareness/guilt-tripping',
  ogImageUrl: '/images/mind/guilt-tripping.png',
  publishedAt: '2026-09-21T00:00:00Z',
  deepExplanation: 'Guilt-tripping empathy ko target karke compliance nikalne ka ek passive coercive method hai.',
};

/**
 * Localized Helper
 */
function createLocalizedGuiltTrippingRecord(
  langCode: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_GUILT_TRIPPING_EN,
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

export const TOPIC_GUILT_TRIPPING: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_GUILT_TRIPPING_EN,
  hinglish: TOPIC_GUILT_TRIPPING_HINGLISH,
  hi: createLocalizedGuiltTrippingRecord(
    'hi',
    'गिल्ट-ट्रिपिंग: भावनात्मक कर्ज और मजबूरी का मनोविज्ञान',
    'अपराधबोध (Guilt) में डालकर अपनी बात मनवाना: इसके तंत्र को समझें और स्वस्थ सीमाएं बनाएं।',
    'सरल शब्दों में: अपनी बात मनवाने के लिए सामने वाले को यह महसूस कराना कि अगर उसने मना किया तो वह एक बुरा इंसान है।',
    'गिल्ट-ट्रिपिंग तब होती है जब कोई व्यक्ति सीधे अनुरोध करने के बजाय ताने मारता है, आहें भरता है या पुराने त्याग गिनाता है। इससे आपके भीतर एक बेचैनी होती है कि "अगर मैंने ना कहा तो मैं स्वार्थी कहलाऊंगा," और आप केवल उस अपराधबोध से बचने के लिए मान जाते हैं।',
    'गिल्ट-ट्रिपिंग एक ऐसा मनोवैज्ञानिक हेरफेर है जो इंसान की सहानुभूति और नैतिकता का अनुचित लाभ उठाता है। सामने वाला अपने दुख को आपकी जिम्मेदारी बना देता है।',
    [
      'सहानुभूति का दुरुपयोग: संवेदनशील और जिम्मेदार लोग इसके शिकार सबसे जल्दी होते हैं',
      'अप्रत्यक्ष दबाव: साफ-साफ बात करने के बजाय बलिदान का नाटक करना',
      'सहानुभूति बनाम मजबूरी: किसी की चिंता करने का यह अर्थ नहीं कि आप उनकी हर अनुचित मांग स्वीकार करें',
      'स्वस्थ सीमाओं का निर्माण: बिना अपराधबोध महसूस किए दृढ़ता से "ना" कहना सीखें',
    ]
  ),
  gu: createLocalizedGuiltTrippingRecord(
    'gu',
    'ગિલ્ટ-ટ્રિપિંગ: ભાવનાત્મક અપરાધભાવ અને મજબૂરીનું મનોવિજ્ઞાન',
    'અપરાધભાવ કરાવીને પોતાની વાત મનાવવી: આ પેટર્નને ઓળખો અને સીમાઓ બનાવો.',
    'સરળ શબ્દોમાં: પોતાની વાત મનાવવા માટે સામેવાળાને એવું મહેસૂસ કરાવવું કે જો તે ના પાડશે તો તે ખરાબ વ્યક્તિ છે.',
    'જ્યારે કોઈ સીધી વાત કરવાને બદલે પોતાના ત્યાગ અને ઉપકારો ગણાવીને તમને અપરાધભાવમાં મૂકે છે, ત્યારે તેને ગિલ્ટ-ટ્રિપિંગ કહે છે.',
    'ગિલ્ટ-ટ્રિપિંગ એ લાગણીઓનું એવું શોષણ છે જેમાં વ્યક્તિ પોતાની ઈચ્છા પૂરી કરવા માટે બીજાના નૈતિક મૂલ્યો પર પ્રહાર કરે છે.',
    [
      'લાગણીઓનો દુરુપયોગ રોકો',
      'ત્યાગના નામે થતા દબાણને ઓળખો',
      'અપરાધભાવ વિના મક્કમતાથી ના કહેતા શીખો',
    ]
  ),
  mr: createLocalizedGuiltTrippingRecord(
    'mr',
    'गिल्ट-ट्रिपिंग: भावनिक दबाव आणि अपराधीपणाचे मानसशास्त्र',
    'अपराधीपणाची जाणीव करून देऊन काम करून घेणे: या तंत्राला ओळखा आणि सीमा सांभाळा.',
    'सोप्या भाषेत: स्वतःची गोष्ट मान्य करून घेण्यासाठी समोरच्याला तो कसा स्वार्थी आहे हे भासवणे.',
    'जेव्हा एखादी व्यक्ती थेट मागणी न करता स्वतःचे जुने उपकार आठवून देते किंवा भावनिक नाटक करते, तेव्हा त्याला गिल्ट-ट्रिपिंग म्हणतात. या अपराधीपणातून सुटका मिळवण्यासाठी आपण अनिच्छेने होकार देतो.',
    'गिल्ट-ट्रिपिंग ही समोरच्या व्यक्तीच्या सहृदयतेचा गैरफायदा घेणारी वर्तणूक आहे.',
    [
      'भावनिक दबावाला बळी पडू नका',
      'जुने उपकार आणि सध्याचे निर्णय यातील फरक ओळखा',
      'शांतपणे स्वतःची मर्यादा स्पष्ट करा',
    ]
  ),
  bn: createLocalizedGuiltTrippingRecord(
    'bn',
    'গিল্ট-ট্রিপিং: অপরাধবোধের মানসিক চাপ এবং প্রতিরোধ কৌশল',
    'কাউকে অপরাধবোধে ফেলে নিজের দাবি আদায় করার গোপন কৌশল।',
    'সহজ কথায়: কাউকে মানসিকভাবে অপরাধী বোধ করিয়ে নিজের স্বার্থ হাসিল করা।',
    'গিল্ট-ট্রিপিং হলো এমন এক আচরণ যেখানে সরাসরি কথা না বলে অতীত ত্যাগ বা নিজের অসহায়ত্ব তুলে ধরে অন্যকে বাধ্য করা হয় যাতে সে অপরাধবোধ থেকে মুক্ত হতে আদেশ মেনে নেয়।',
    'এটি মানুষের সহানুভূতির অপব্যবহার করে তৈরি করা একটি অযৌক্তিক চাপ।',
    [
      'সহানুভূতির ফাঁদে পা না দেওয়া',
      'অতীতের ত্যাগের সাথে বর্তমান অযৌক্তিক দাবির তুলনা না করা',
      'অপরাধবোধহীনভাবে আত্মবিশ্বাসের সাথে না বলতে শেখা',
    ]
  ),
  ta: createLocalizedGuiltTrippingRecord(
    'ta',
    'கில்ட்-ட்ரிப்பிங்: குற்ற உணர்ச்சியைத் தூண்டி காரியம் சாதிக்கும் உளவியல்',
    'மற்றவர்களைக் குற்றவாளியாக உணரவைத்து அடிபணிய வைக்கும் உளவியல் தந்திரம்.',
    'எளிய சொற்களில்: தனது பேச்சை கேட்க வைப்பதற்காக அடுத்தவருக்கு குற்ற உணர்ச்சியை ஏற்படுத்துவது.',
    'ஒருவர் தனது தேவைகளை நேரடியாகக் கேட்காமல், தனது தியாகங்களையும் கஷ்டங்களையும் கூறி, "நீங்கள் மறுத்தால் நீங்கள் கெட்டவர்" போன்ற உணர்வை ஏற்படுத்துவதே கில்ட்-ட்ரிப்பிங்.',
    'இது அடுத்தவரின் இரக்க குணத்தையும் நேர்மையையும் தவறாகப் பயன்படுத்தும் ஒரு சூழ்ச்சியாகும்.',
    [
      'இரக்க குணம் சுரண்டப்படுவதைத் தடுத்தல்',
      'உணர்ச்சிபூர்வமான நாடகங்களைப் புறந்தள்ளி உண்மைகளைப் பேசுதல்',
      'குற்ற உணர்வின்றி உறுதியாக மறுக்கக் கற்றுக்கொள்ளுங்கள்',
    ]
  ),
  te: createLocalizedGuiltTrippingRecord(
    'te',
    'గిల్ట్-ట్రిప్పింగ్: అపరాధ భావనను ఆయుధంగా మార్చే మనస్తత్వం',
    'ఎదుటివారిలో అపరాధ భావాన్ని (Guilt) కలిగించి తమ పనులను సాధించుకునే పద్ధతి.',
    'సరళమైన మాటల్లో: తమ కోరికలను నెరవేర్చుకోవడానికి అవతలి వ్యక్తిని దోషిగా భావింపజేయడం.',
    'నేరుగా అడగకుండా తమ త్యాగాలను పదేపదే గుర్తుచేస్తూ, "నువ్వు కాదంటే నువ్వు స్వార్థపరుడివి" అనే భావనను కలిగించడమే గిల్ట్-ట్రిప్పింగ్.',
    'ఈ మానసిక ఒత్తిడి వల్ల ఎదుటివారు ఇష్టం లేకపోయినా ఒప్పుకోవాల్సి వస్తుంది.',
    [
      'సానుభూతిని దుర్వినియోగం కాకుండా చూసుకోవడం',
      'గత త్యాగాలను ప్రస్తుతం బ్లాక్‌మెయిల్ కోసం వాడనివ్వకపోవడం',
      'స్పష్టమైన నిరాకరణను ప్రశాంతంగా చెప్పడం',
    ]
  ),
  kn: createLocalizedGuiltTrippingRecord(
    'kn',
    'ಗಿಲ್ಟ್-ಟ್ರಿಪ್ಪಿಂಗ್: ಅಪರಾಧಿ ಭಾವನೆ ಮೂಡಿಸಿ ಒಪ್ಪಿಸುವ ಮನೋವಿಜ್ಞಾನ',
    'ಇನ್ನೊಬ್ಬರಲ್ಲಿ ತಪ್ಪಿತಸ್ಥ ಭಾವನೆ ಹುಟ್ಟಿಸಿ ತಮ್ಮ ಇಷ್ಟದಂತೆ ಕೆಲಸ ಮಾಡಿಸಿಕೊಳ್ಳುವ ತಂತ್ರ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ತಮ್ಮ ಮಾತನ್ನು ಕೇಳುವಂತೆ ಮಾಡಲು ಇನ್ನೊಬ್ಬರಿಗೆ ತಾವೇ ತಪ್ಪಿತಸ್ಥರೆಂದು ಅನಿಸುವಂತೆ ಮಾಡುವುದು.',
    'ನೇರವಾಗಿ ಕೇಳುವ ಬದಲು ಹಿಂದಿನ ತ್ಯಾಗಗಳನ್ನು ಎತ್ತಿ ತೋರಿಸಿ ಭಾವನಾತ್ಮಕ ಒತ್ತಡ ತರುವುದೇ ಗಿಲ್ಟ್-ಟ್ರಿಪ್ಪಿಂಗ್.',
    'ಇದು ಇನ್ನೊಬ್ಬರ ಒಳ್ಳೆಯತನ ಮತ್ತು ಸಹಾನುಭೂತಿಯನ್ನು ದುರುಪಯೋಗಪಡಿಸಿಕೊಳ್ಳುವ ವಿಧಾನವಾಗಿದೆ.',
    [
      'ಭಾವನಾತ್ಮಕ ಬ್ಲಾಕ್‌ಮೇಲ್‌ಗೆ ಮಣಿಯಬೇಡಿ',
      'ಸಹಾನುಭೂತಿ ಮತ್ತು ಸ್ವಂತ ನಿರ್ಧಾರಗಳ ನಡುವೆ ಸಮತೋಲನವಿರಲಿ',
      'ದೃಢವಾಗಿ ನಿರಾಕರಿಸುವುದನ್ನು ಕಲಿಯಿರಿ',
    ]
  ),
  ml: createLocalizedGuiltTrippingRecord(
    'ml',
    'ഗിൽറ്റ്-ട്രിപ്പിംഗ്: കുറ്റബോധം ഉണ്ടാക്കി കാര്യം നേടുന്ന രീതി',
    'മറ്റുള്ളവരിൽ കുറ്റബോധം കുത്തിനിറച്ച് അവരെ തങ്ങളുടെ ഇഷ്ടത്തിനനുസരിച്ച് മാറ്റിയെടുക്കുന്ന തന്ത്രം.',
    'ലളിതമായി പറഞ്ഞാൽ: തങ്ങളുടെ ആവശ്യം നേടാൻ മറ്റുള്ളവരെ കുറ്റക്കാരായി തോന്നിപ്പിക്കുക.',
    'നേരിട്ട് ആവശ്യപ്പെടാതെ സ്വന്തം ത്യാഗങ്ങൾ നിരത്തി മറ്റുള്ളവരിൽ കുറ്റബോധം ജനിപ്പിക്കുന്നതാണ് ഗിൽറ്റ്-ട്രിപ്പിംഗ്.',
    'മറ്റുള്ളവരുടെ ദയയും മനസ്സാക്ഷിയും മുതലെടുത്താണ് ഈ തന്ത്രം പ്രയോഗിക്കുന്നത്.',
    [
      'വൈകാരിക ചൂഷണങ്ങളെ തിരിച്ചറിയുക',
      'സഹതാപവും സ്വന്തം സ്വാതന്ത്ര്യവും തമ്മിലുള്ള അതിർവരമ്പുകൾ കാത്തുസൂക്ഷിക്കുക',
      'ശാന്തമായി അതിരുകൾ നിശ്ചയിക്കുക',
    ]
  ),
  pa: createLocalizedGuiltTrippingRecord(
    'pa',
    'ਗਿਲਟ-ਟ੍ਰਿਪਿੰਗ: ਅਹਿਸਾਸ-ਏ-ਜੁਰਮ ਪੈਦਾ ਕਰਕੇ ਆਪਣੀ ਗੱਲ ਮਨਵਾਉਣਾ',
    'ਦੂਜਿਆਂ ਨੂੰ ਦੋਸ਼ੀ ਮਹਿਸੂਸ ਕਰਵਾ ਕੇ ਆਪਣੇ ਹੱਕ ਵਿੱਚ ਫੈਸਲਾ ਲੈਣ ਲਈ ਮਜਬੂਰ ਕਰਨਾ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਆਪਣੀ ਗੱਲ ਮਨਵਾਉਣ ਲਈ ਦੂਜੇ ਨੂੰ ਇਹ ਮਹਿਸੂਸ ਕਰਵਾਉਣਾ ਕਿ ਜੇ ਉਸਨੇ ਨਾਂਹ ਕੀਤੀ ਤਾਂ ਉਹ ਮਾੜਾ ਇਨਸਾਨ ਹੈ।',
    'ਸਿੱਧੇ ਤੌਰ \'ਤੇ ਗੱਲ ਕਰਨ ਦੀ ਬਜਾਏ ਪੁਰਾਣੇ ਅਹਿਸਾਨ ਗਿਣਾ ਕੇ ਜਾਂ ਮਜ਼ਲੂਮ ਬਣ ਕੇ ਦੂਜੇ ਉੱਤੇ ਦਬਾਅ ਬਣਾਉਣ ਨੂੰ ਗਿਲਟ-ਟ੍ਰਿਪਿੰਗ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
    'ਇਹ ਹਮਦਰਦੀ ਅਤੇ ਸ਼ਰਾਫ਼ਤ ਦਾ ਨਾਜਾਇਜ਼ ਫਾਇਦਾ ਉਠਾਉਣ ਦਾ ਤਰੀਕਾ ਹੈ।',
    [
      'ਜਜ਼ਬਾਤੀ ਦਬਾਅ ਨੂੰ ਪਛਾਣੋ',
      'ਪੁਰਾਣੀਆਂ ਕੁਰਬਾਨੀਆਂ ਦੀ ਆੜ ਵਿੱਚ ਹੋਣ ਵਾਲੀ ਧੱਕੇਸ਼ਾਹੀ ਤੋਂ ਬਚੋ',
      'ਬਿਨਾਂ ਡਰੇ ਆਪਣੀ ਹੱਦ ਤੈਅ ਕਰੋ',
    ]
  ),
  ur: createLocalizedGuiltTrippingRecord(
    'ur',
    'گلٹ ٹرپنگ: احساسِ جرم دلا کر بات منوانے کی نفسیات',
    'سامنے والے کو قصوروار محسوس کروا کر اپنی خواہشات پوری کروانے کا فریب۔',
    'آسان الفاظ میں: اپنی بات منوانے کے لیے دوسرے کو یہ جتلانا کہ وہ ایک برا یا خود غرض انسان ہے۔',
    'گلٹ ٹرپنگ میں لوگ براہِ راست بات کرنے کے بجائے اپنی قربانیوں اور مصیبتوں کا واسطہ دے کر سامنے والے پر دباؤ ڈالتے ہیں تاکہ وہ احساسِ جرم کے تحت ہاں کر دے۔',
    'یہ دوسروں کی ہمدردی اور اخلاقی احساس کو یرغمال بنانے کا غیر صحت مند طریقہ ہے۔',
    [
      'جذباتی بلیک میلنگ کو سمجھیں',
      'ہمدردی اور زبردستی کے درمیان حد قائم کریں',
      'بغیر کسی احساسِ ندامت کے آرام سے انکار کرنا سیکھیں',
    ]
  ),
  or: createLocalizedGuiltTrippingRecord(
    'or',
    'ଗିଲ୍ଟ-ଟ୍ରିପିଙ୍ଗ୍: ଅପରାଧବୋଧ ଜନ୍ମାଇ ବାଧ୍ୟ କରିବାର ମାନସିକତା',
    'ଅନ୍ୟକୁ ଦୋଷୀ ଅନୁଭବ କରାଇ ନିଜ ଜିଦ୍ ପୂରଣ କରିବାର କୌଶଳ।',
    'ସରଳ ଭାଷାରେ: ନିଜ କଥା ମନାଇବା ପାଇଁ ଅନ୍ୟକୁ ଏହା ଅନୁଭବ କରାଇବା ଯେ ମନା କଲେ ସେ ଜଣେ ଖରାପ ବ୍ୟକ୍ତି।',
    'ସିଧାସଳଖ ନକହି ନିଜ ତ୍ୟାଗ ଏବଂ କଷ୍ଟର ଦ୍ୱାହି ଦେଇ ଅନ୍ୟ ଉପରେ ଚାପ ପକାଇବା ହିଁ ଗିଲ୍ଟ-ଟ୍ରିପିଙ୍ଗ୍ ଅଟେ।',
    'ଏହା ଅନ୍ୟର ସହାନୁଭୂତିକୁ ଦୁରୁପଯୋଗ କରି କାର୍ଯ୍ୟ ହାସଲ କରିବାର ଏକ ଅନୁଚିତ ମାଧ୍ୟମ।',
    [
      'ଭାବପ୍ରବଣତାର ଶିକାର ହୁଅନ୍ତୁ ନାହିଁ',
      'ଅପରାଧବୋଧ ବିନା ନିଜ ସୀମା ବଜାୟ ରଖନ୍ତୁ',
      'ଶାନ୍ତ ଭାବରେ ସ୍ପଷ୍ଟ ମନା କରିବା ଶିଖନ୍ତୁ',
    ]
  ),
  as: createLocalizedGuiltTrippingRecord(
    'as',
    'গিল্ট-ট্ৰিপিং: অপৰাধবোধৰ সৃষ্টি কৰি বাধ্য কৰোৱাৰ মানসিক কৌশল',
    'আনক অপৰাধী অনুভৱ কৰাই নিজৰ স্বাৰ্থ সিদ্ধি কৰাৰ এক মনস্তাত্ত্বিক ফাঁদ।',
    'সহজ ভাষাত: নিজৰ কথা মনাবৰ বাবে আন এজনক অপৰাধী অনুভৱ কৰোৱা।',
    'পোনপটীয়াকৈ অনুৰোধ নকৰি পুৰণি ত্যাগ বা দুখৰ কথা কৈ আনৰ ওপৰত মানসিক চাপ সৃষ্টি কৰাটোৱেই হৈছে গিল্ট-ট্ৰিপিং।',
    'এই ধৰণৰ আৱেগিক হেঁচাত মানুহে নিজৰ অনিচ্ছা সত্ত্বেও বাধ্য হৈ সমৰ্থন জনায়।',
    [
      'আৱেগিক ব্ল্যাকমেইলিং প্ৰতিহত কৰক',
      'সহানুভূতি আৰু বাধ্যবাধকতাৰ মাজৰ পাৰ্থক্য বুজক',
      'অপৰাধবোধ অনুভৱ নকৰাকৈ স্পষ্ট সীমা নিৰ্ধাৰণ কৰক',
    ]
  ),
};
