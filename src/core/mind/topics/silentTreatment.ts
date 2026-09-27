import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 09: Silent Treatment
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Ostracism and Social Rejection (Williams, 1997, 2001)
 * - Neurobiology of Exclusion & Physical Pain Overlap (Eisenberger, Lieberman, & Williams, 2003)
 * - Interpersonal Hostility & Punitive Relational Withdrawal (Sommer et al., 2001)
 * - The Need-Threat Model: Belonging, Self-Esteem, Control, and Meaningful Existence
 */

export const TOPIC_SILENT_TREATMENT_EN: MindTopicDetail = {
  id: 'silent_treatment',
  categoryId: 'manipulation_awareness',
  slug: 'silent-treatment',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 8,
  scientificConsensusTier: 'established',
  sortWeight: 9,
  viewCount: 7420,
  shareCount: 610,
  bookmarkCount: 1180,
  title: 'Silent Treatment: The Psychology of Ostracism & Punitive Disengagement',
  subtitle: 'Distinguishing cooling-off periods from relational punishment, understanding the dACC pain pathway, and disarming emotional blockades.',
  shortDescription: 'The deliberate refusal to communicate, acknowledge, or respond to someone as a punitive method of control and emotional coercion.',
  oneLineExplanation: 'In simple terms: Pretending someone doesn’t exist until they apologize and submit to what you want.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'The silent treatment is the calculated weaponization of silence. Unlike taking healthy space to calm down, the silent treatment is punitive: the person looks through you like glass, ignores your messages, and withholds all emotional acknowledgment without an end date. It is designed to trigger your deepest terror of social abandonment. You find yourself pacing the floor, desperately begging for communication, and ultimately apologizing for things you didn’t do just to restore human contact.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Extensively studied by Dr. Kipling Williams (2001), ostracism is a devastating form of psychological control because it systematically assaults four core human needs: belonging, self-esteem, personal control, and meaningful existence. In the silent treatment, silence is not an absence of communication; it is an aggressive, high-decibel message of rejection: "You are insignificant, and you do not matter until you submit."',
  summary60s: 'There is a profound difference between emotional regulation and punitive ostracism. When an emotionally mature person feels flooded, they say: "I am upset right now and need two hours to cool down. Let us talk after dinner." That is self-soothing with an explicit time boundary. In contrast, the silent treatment has no timeline, no explanation, and no collaborative roadmap. The perpetrator walks around the house slamming doors, answering with dead-eyed stares, or ignoring phone calls for days. The goal is unilateral dominance: breaking your psychological will until you grovel for connection.',

  quickTakeaways: [
    'Ostracism as Pain: Neuroimaging proves the silent treatment activates the exact same brain regions as physical burns',
    'Cooling Off vs. Ostracism: Healthy space has a declared time limit ("Let’s talk at 6 PM"); the silent treatment is open-ended punishment',
    'The Begging Trap: Pleading, crying, or apologizing for phantom mistakes teaches the silent partner that ostracism always wins',
    'The Parallel Life Antidote: Refusing to dance to their silence, holding your ground, and living your day peacefully disarms the tactic',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Naomi Eisenberger’s fMRI research (2003) demonstrated that social ostracism directly activates the dorsal anterior cingulate cortex (dACC)—the identical neurological circuit that registers physical injury. The silent treatment literally hurts. Williams’ Need-Threat Model shows that prolonged silence strips a human being of perceived control and creates agonizing cognitive ambiguity: "What did I do? Are we over? Do they hate me?"',
  evolutionaryMechanism: 'In tribal evolutionary history, silence from clan members preceded formal banishment. Banishment was an absolute death sentence. Humans evolved an unbearable visceral panic when frozen out by social intimates to compel them to restore social inclusion at all costs.',

  // SECTION E — WHY MIGHT SOMEONE USE THIS PATTERN?
  howItWorks: 'Many individuals use the silent treatment because they never learned assertive conflict resolution as children. Raised in households where anger meant door-slamming and days of sulking, they view silence as safe and self-protective. For narcissistic or high-conflict personalities, however, it is an addictive power trip: watching a partner cry and beg restores an intoxicating sense of omnipotent control.',
  whereYouEncounterIt: 'Intimate partnerships, parent-child dynamics (withholding affection or food), family estrangements, and passive-aggressive workplace factions.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Refusing to speak, make eye contact, or answer direct factual questions for days without a declared cooling-off timeline',
    'Walking out of rooms when you enter, or answering only with monosyllabic grunts or icy stares',
    'Pretending not to hear you in front of children, friends, or colleagues to publicly invalidate you',
    'Demanding that you "guess what you did wrong" instead of stating their grievance plainly',
    'Ending the silence only after you break down in tears, beg for forgiveness, or surrender your original boundary',
  ],

  // SECTION G — NORMAL BEHAVIOR VS UNHEALTHY PATTERN
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Taking a Healthy Cooling-Off Break vs. Manipulative Silent Treatment',
    description: 'The critical psychological distinction between regulating one\'s nervous system and punishing a partner with ostracism.',
    analogySideA: {
      label: 'Taking Healthy Space (Regulated & Respectful)',
      detail: '"I am feeling flooded and overwhelmed right now. I need 45 minutes to go for a walk and calm down. I promise we will sit down and discuss this at 7:30 PM." (Clear timeframe, reassures attachment safety, returns to resolve).',
    },
    analogySideB: {
      label: 'Manipulative Silent Treatment (Punitive & Coercive)',
      detail: '"[Icy glare, turns back, refuses to acknowledge questions for 4 days, ignores calls, acts as if you are invisible until you apologize]." (Open-ended, induces abandonment panic, forces submission).',
    },
  },

  // SECTION H, I, J — REAL-LIFE EXAMPLES & INDIAN CONTEXT
  examples: [
    {
      id: 'st_ex_01',
      domain: 'relationships',
      displayOrder: 1,
      title: 'The Weekend Ghosting in the Same Apartment',
      description: 'After an argument about household budgeting on Thursday night, Partner A goes completely silent. From Friday morning until Sunday evening, Partner A cooks only for themselves, sleeps with their back turned, and ignores Partner B’s questions: "Are we okay? Can we talk?" On Sunday night, Partner A finally speaks: "If you had just agreed with my budget on Thursday, we wouldn’t have lost our entire weekend."',
      takeaway: 'Notice how silence was consciously maintained for 72 hours as a deliberate penalty fee for disagreement.',
    },
    {
      id: 'st_ex_02',
      domain: 'workplace',
      displayOrder: 2,
      title: 'The Cold Shoulder Project Lead',
      description: 'A team lead is upset that an analyst questioned a slide in a presentation. For the next three weeks, the lead leaves the analyst off email threads, walks past their desk without responding to "Good morning," and assigns all key client tasks to junior interns.',
      takeaway: 'Professional ostracism deployed to socially exile and punish legitimate technical feedback.',
    },
  ],

  scenarios: [
    {
      id: 'st_scen_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'The "Khana Chhodna" (Food Refusal) Boycott',
      narrativeContext: 'Kavita, a 29-year-old marketing manager in Delhi, informs her mother-in-law that she and her husband have booked a quiet weekend getaway for their wedding anniversary rather than attending a distant relative\'s prayer ceremony. The mother-in-law does not shout. Instead, she refuses to come to the dining table for dinner, declaring to her son: "I am not hungry. Eat without me; why should anyone care about an old woman?" For three days, she refuses all meals cooked by Kavita, sits in the prayer room in complete silence, and looks away whenever Kavita enters the room. The husband panics, blames Kavita, and demands: "Just cancel our trip and apologize to Maa; she hasn’t eaten in three days!"',
      biasInAction: 'The mother-in-law uses physiological food strike + silent ostracism + triangulating the son to convert an independent marital choice into a manufactured medical and moral crisis.',
      optimalResponse: 'Refuse to surrender boundaries while treating health neutrally: "Maa ji, food is always available on the table and we care about your health. But our anniversary trip was planned months ago and we are going. We can visit the relative together next week." The husband and wife must remain united, refusing to reward emotional boycotts.',
      reflectionPrompt: 'Have you ever found yourself apologizing frantically to someone who froze you out, even though you knew deep down you hadn’t done anything wrong?',
    },
  ],

  // SECTION K — SPOT THE PATTERN (Interactive Scenario)
  interactiveScenarios: [
    {
      id: 'scen_st_01',
      topicId: 'silent_treatment',
      title: 'Spot the Pattern: The "Guess What You Did" Silent Standoff',
      contextVignette: 'You come home from work in good spirits and ask your partner how their day was. Your partner ignores you, walks into the bedroom, and slams the door. When you knock and ask, "Did something happen?", they reply in a chilling, flat monotone: "If you don’t even know what you did, I’m not going to educate you. Don’t talk to me." They remain silent for the rest of the night.',
      vignetteSourceType: 'family_relationships',
      question: 'What is the most scientifically sound interpretation and response to this dynamic?',
      options: [
        {
          id: 'opt_st_a',
          label: 'A',
          text: 'Spend the next three hours texting them every possible mistake you could have made this week, begging for clues.',
          explanation: 'Rewarding the "guess what you did" game gives them total psychological control and encourages perpetual drama.',
          isCorrect: false,
        },
        {
          id: 'opt_st_b',
          label: 'B',
          text: 'Recognize this as manipulative emotional withdrawal; state once that you are ready to listen when they speak respectfully, then disengage and go about your evening peacefully.',
          explanation: 'Correct. Calling out the availability to communicate while refusing to chase or beg breaks the coercive power of the silence.',
          isCorrect: true,
        },
        {
          id: 'opt_st_c',
          label: 'C',
          text: 'Bang on the door and scream until they open it and explain themselves.',
          explanation: 'Escalates to volatile conflict and gives the partner an excuse to blame you as "abusive and aggressive."',
          isCorrect: false,
        },
      ],
      revealedExplanation: {
        correctSummary: 'Break the chase: State your willingness to communicate, then refuse to play the guessing game.',
        whyItMatters: 'The silent treatment is powered by the victim\'s frantic anxiety. When you stop chasing, the manipulator realizes the weapon has lost its leverage.',
        cognitiveTrap: 'Over-Responsibility: Believing it is your duty to mind-read another adult’s unspoken emotional states.',
        actionableAntidote: 'The "Open-Door Anchor": "I am here when you are ready to talk like adults. I will not play guessing games."',
      },
      difficulty: 'medium',
      culturalContext: 'indian_general',
    },
  ],

  // SECTION L & Q — "BUT BE CAREFUL" & LIMITATIONS
  limitationsAndControversies: 'Caution: Distinguish between the silent treatment and "going non-contact" for safety. When a victim of domestic violence or severe stalking blocks an abuser permanently, that is an act of physical and psychological self-defense, not manipulation. The silent treatment is deployed *within* an ongoing relationship to punish, disorient, and extract compliance.',

  // SECTION M & N — HOW TO RESPOND & SCRIPTS
  howToRespond: 'Apply the "STATE, STEP BACK & LIVE" Protocol: (1) State Availability Once: Make a clear, non-defensive offer to talk: "I see you are upset; I am ready when you are"; (2) Step Back: Never chase, beg, send 40 texts, or cry; (3) Live Your Life: Continue your routine, eat your meals, talk to your friends, and refuse to validate the emotional hostage-taking.',
  psychologicalDefenses: [
    {
      title: 'The Open-Door Boundary Script',
      instruction: 'Say calmly: "I notice you are choosing not to communicate. I am willing to discuss this calmly whenever you are ready. Until then, I am going to focus on my day."' ,
    },
    {
      title: 'The Guessing-Game Refusal',
      instruction: 'Say: "I am an adult and I communicate through words, not mind-reading. When you are ready to tell me what is bothering you, I am listening."' ,
    },
    {
      title: 'The Food Boycott Disarmer',
      instruction: 'Say: "The food is prepared and warm. You are an adult and you can choose whether or not to eat, but I will not negotiate our family decisions around skipped meals."' ,
    },
    {
      title: 'The Anti-Begging Rule',
      instruction: 'Do not apologize simply to make the silence stop. An unearned apology cements the silent treatment as their primary control weapon forever.' ,
    },
  ],

  // SECTION P — RESEARCH & CITATIONS
  researchSummary: 'Kipling D. Williams (1997, 2001) conducted extensive laboratory and field research on ostracism, establishing that even brief, artificial exclusion in a computer game ("Cyberball") triggers profound distress, dropping belonging and self-esteem scores across all demographics. Eisenberger, Lieberman, & Williams (2003) published landmark fMRI data in Science proving that social exclusion activates the dorsal anterior cingulate cortex (dACC), demonstrating that the human brain processes ostracism through the identical neural matrix as physical somatic pain. Sommer et al. (2001) showed that chronic silent treatments in intimate relationships predict high rates of depression, anxiety disorders, and eventual relational dissolution.',

  references: [
    {
      id: 'st_ref_01',
      title: 'Ostracism: The Power of Silence',
      citation: 'Williams, K. D. (2001). Guilford Press.',
      authors: 'Kipling D. Williams',
      publicationYear: 2001,
      journalOrPublisher: 'Guilford Press',
      sourceType: 'academic_textbook',
      evidenceStrength: 'foundational_book',
      doiOrUrl: 'https://doi.org/10.4324/9780203783016',
      relevance: 'Seminal psychological treatise establishing the Need-Threat model of interpersonal ostracism.',
      displayOrder: 1,
    },
    {
      id: 'st_ref_02',
      title: 'Does rejection hurt? An fMRI study of social exclusion',
      citation: 'Eisenberger, N. I., Lieberman, M. D., & Williams, K. D. (2003). Science, 302(5643), 290–292.',
      authors: 'Naomi I. Eisenberger, Matthew D. Lieberman, Kipling D. Williams',
      publicationYear: 2003,
      journalOrPublisher: 'Science',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: 'https://doi.org/10.1126/science.1089134',
      relevance: 'Landmark fMRI evidence showing ostracism activates physical pain circuitry in the dorsal anterior cingulate cortex.',
      displayOrder: 2,
    },
    {
      id: 'st_ref_03',
      title: 'When silence speaks louder than words: Explorations into the social psychology of ostracism',
      citation: 'Sommer, K. L., Williams, K. D., Ciarocco, N. J., & Baumeister, R. F. (2001). Basic and Applied Social Psychology, 23(4), 225–243.',
      authors: 'Kristen L. Sommer, Kipling D. Williams, Natalie J. Ciarocco, Roy F. Baumeister',
      publicationYear: 2001,
      journalOrPublisher: 'Basic and Applied Social Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: 'https://doi.org/10.1207/S15324834BASP2304_1',
      relevance: 'Empirical verification of psychological and relational damage caused by punitive silent treatment in ongoing relationships.',
      displayOrder: 3,
    },
  ],

  // SECTION R — COMMON MYTHS
  commonMisconceptions: 'Myth: "Silence is peaceful and non-violent; it is much better than fighting." Reality: Forensic psychology proves that chronic punitive ostracism is a covert form of emotional abuse. Because it offers no resolution or feedback, it is often experienced as far more psychologically traumatic than verbal arguments.',

  // SECTION S — REFLECTION PROMPT
  reflectionPrompt: 'Have you ever compromised a deeply held boundary or apologized for an imaginary fault just to break the agonizing silence of someone you loved?',

  // SECTION T — PRACTICE QUESTIONS (6 Distinct Questions)
  practiceQuestions: [
    {
      id: 'st_pq_01',
      questionType: 'identify_influence_principle',
      question: 'According to Kipling Williams\' Need-Threat Model, which four fundamental psychological needs are attacked during the silent treatment?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Belonging, self-esteem, personal control, and meaningful existence.',
          isCorrect: true,
          feedbackText: 'Correct. Ostracism systematically dismantles these four bedrock pillars of human psychological health.',
        },
        {
          id: 'opt_2',
          optionText: 'Hunger, thirst, sleep, and physical temperature.',
          isCorrect: false,
          feedbackText: 'These are primary physiological needs, not the psychological needs identified by Williams.',
        },
        {
          id: 'opt_3',
          optionText: 'Ambition, wealth, fame, and artistic taste.',
          isCorrect: false,
          feedbackText: 'Incorrect sociocognitive categories.',
        },
      ],
      cognitiveTakeaway: 'The silent treatment assaults belonging, self-esteem, control, and meaningful existence.',
    },
    {
      id: 'st_pq_02',
      questionType: 'distinction',
      question: 'What is the crucial scientific distinction between taking a healthy cooling-off period and executing the silent treatment?',
      options: [
        {
          id: 'opt_1',
          optionText: 'A cooling-off period is communicated clearly with a declared timeframe ("I need 1 hour to calm down; let’s talk at 7"); the silent treatment is open-ended, uncommunicated, and intended to punish.',
          isCorrect: true,
          feedbackText: 'Correct. Time-limited self-regulation protects relationships; open-ended ostracism coerces them.',
        },
        {
          id: 'opt_2',
          optionText: 'Cooling-off periods are only taken by men, and silent treatments are only taken by women.',
          isCorrect: false,
          feedbackText: 'Gender stereotypes have zero empirical validity; both patterns occur across all genders.',
        },
        {
          id: 'opt_3',
          optionText: 'There is no difference; all silence between two people is emotional abuse.',
          isCorrect: false,
          feedbackText: 'Taking space to prevent destructive emotional flooding is healthy emotional regulation.',
        },
      ],
      cognitiveTakeaway: 'Clear time boundaries and communicative intent distinguish healthy space from abusive ostracism.',
    },
    {
      id: 'st_pq_03',
      questionType: 'scenario_analysis',
      question: 'What was demonstrated by the landmark Eisenberger, Lieberman, & Williams (2003) fMRI study regarding social ostracism and the brain?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Social exclusion activates the dorsal anterior cingulate cortex (dACC), proving that the emotional agony of the silent treatment is processed by the brain as literal physical pain.',
          isCorrect: true,
          feedbackText: 'Correct. The brain processes social ostracism using the exact neural hardware of physical somatic injury.',
        },
        {
          id: 'opt_2',
          optionText: 'Social exclusion stimulates the visual cortex to produce hallucinations.',
          isCorrect: false,
          feedbackText: 'Incorrect neurological pathway.',
        },
        {
          id: 'opt_3',
          optionText: 'Social exclusion has zero measurable effect on human brain activity.',
          isCorrect: false,
          feedbackText: 'Decades of neuroimaging show massive, unmistakable neural cascades during exclusion.',
        },
      ],
      cognitiveTakeaway: 'The pain of ostracism is not "just in your head"—it activates the brain\'s physical pain matrix.',
    },
    {
      id: 'st_pq_04',
      questionType: 'best_response',
      question: 'When a partner gives you the silent treatment after an argument, what happens if you repeatedly call, beg, cry outside their door, and apologize for things you didn’t do?',
      options: [
        {
          id: 'opt_1',
          optionText: 'You reinforce the behavior through operant conditioning, teaching them that silence is a 100% effective weapon to extract total submission whenever conflict arises.',
          isCorrect: true,
          feedbackText: 'Correct. Chasing and begging rewards the perpetrator and guarantees that the silent treatment will be repeated.',
        },
        {
          id: 'opt_2',
          optionText: 'They immediately realize they were wrong and become deeply empathetic and mature.',
          isCorrect: false,
          feedbackText: 'Submission reinforces the power imbalance; it never inspires genuine empathy in a controller.',
        },
        {
          id: 'opt_3',
          optionText: 'The conflict permanently vanishes from the relationship.',
          isCorrect: false,
          feedbackText: 'Unresolved underlying issues fester into toxic resentment.',
        },
      ],
      cognitiveTakeaway: 'Begging and unearned apologies reward ostracism, ensuring it will be used again.',
    },
    {
      id: 'st_pq_05',
      questionType: 'what_would_you_do',
      question: 'In an office setting, a senior peer ignores you completely in meetings, fails to reply to project-critical Slack messages, and talks over you as if you are invisible because you received a promotion they wanted. How should you address this?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Shift all project requests to formal, documented company email; state deadlines neutrally; and escalate to your manager with objective paper-trail evidence if work milestones are blocked.',
          isCorrect: true,
          feedbackText: 'Correct. Professional documentation bypasses passive-aggressive ostracism without emotional drama.',
        },
        {
          id: 'opt_2',
          optionText: 'Crawl under their desk with a box of chocolates and beg them to be your friend again.',
          isCorrect: false,
          feedbackText: 'Unprofessional appeasement compromises your leadership standing.',
        },
        {
          id: 'opt_3',
          optionText: 'Silently slash their car tires in the company parking lot.',
          isCorrect: false,
          feedbackText: 'Criminal action leading to immediate termination and legal arrest.',
        },
      ],
      cognitiveTakeaway: 'Defeat workplace ostracism with formal, objective written documentation and managerial escalation.',
    },
    {
      id: 'st_pq_06',
      questionType: 'misconception_detection',
      question: 'Why is the popular belief that "Silence is always golden and causes no harm" dangerous in relationship psychology?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Because punitive silence deprives the partner of feedback, reality testing, and resolution, creating chronic ambiguity that often results in more severe trauma than heated verbal debates.',
          isCorrect: true,
          feedbackText: 'Correct. Ostracism acts as an emotional vacuum that destabilizes psychological equilibrium.',
        },
        {
          id: 'opt_2',
          optionText: 'Because human ears explode if there is complete silence for more than ten minutes.',
          isCorrect: false,
          feedbackText: 'Nonsensical biological claim.',
        },
        {
          id: 'opt_3',
          optionText: 'Because all couples are required by law to shout at least once a day.',
          isCorrect: false,
          feedbackText: 'Healthy communication is calm, verbal, and respectful; neither shouting nor ostracism is healthy.',
        },
      ],
      cognitiveTakeaway: 'Punitive silence is not peaceful—it is emotional warfare disguised as quietness.',
    },
  ],

  // VISUAL CONTENT
  visualContent: {
    id: 'vis_silent_treatment',
    type: 'flowchart',
    title: 'The Ostracism Escalation Cycle vs. Healthy Timeout Protocol',
    altText: 'A comparative flowchart showing: Track A (Manipulative Ostracism: Disagreement → Open-Ended Silence → Abandonment Panic → Begging & Submission → Reset) vs. Track B (Healthy Timeout: Flooding Detected → Time Boundary Declared → Autonomous Self-Soothing → Scheduled Return → Collaborative Resolution).',
    caption: 'Figure 1: The Ostracism Dynamics: How punitive silence relies on the victim\'s abandonment panic, and how scheduled timeouts preserve relational safety.',
    interactiveExplanation: 'When you refuse to panic during Track A, the manipulator is forced to abandon the silent treatment and use verbal communication.',
  },

  // TAGS & RELATED TOPICS
  tags: ['Manipulation Awareness', 'Silent Treatment', 'Ostracism', 'Kipling Williams', 'Emotional Abuse', 'Healthy Communication'],
  relatedTopics: [
    {
      topicId: 'stonewalling',
      slug: 'stonewalling',
      title: 'Stonewalling',
      relationshipType: 'frequently_confused_with',
    },
    {
      topicId: 'emotional_blackmail',
      slug: 'emotional-blackmail',
      title: 'Emotional Blackmail',
      relationshipType: 'amplified_by',
    },
    {
      topicId: 'shame_based_influence',
      slug: 'shame-based-influence',
      title: 'Shame-Based Influence',
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
  seoTitle: 'Silent Treatment: Psychology, Ostracism Pain & How to Respond | Mentalab Mind',
  seoDescription: 'Understand the psychology of the silent treatment and ostracism. Learn the dACC pain pathway, how to distinguish healthy space from emotional abuse, and practical response scripts.',
  canonicalUrl: '/mind/manipulation-awareness/silent-treatment',
  ogImageUrl: '/images/mind/silent-treatment.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'The silent treatment is a coercive ostracism tactic that weaponizes visceral abandonment panic and dACC physical pain circuitry to enforce subordination.',
};

/**
 * High-Quality Hinglish Translation
 */
export const TOPIC_SILENT_TREATMENT_HINGLISH: MindTopicDetail = {
  ...TOPIC_SILENT_TREATMENT_EN,
  title: 'Silent Treatment: Chuppi Ka Hathiyar Aur Rishton Me Boycott',
  subtitle: 'Jaaniye healthy space lene aur saza ke taur par baat band karne me kya farq hai, aur khana chhodne wale drama se kaise bachein.',
  shortDescription: 'Apni baat manwane ke liye saamne wale ko poori tarah ignore karna, unse baat na karna, aur aisa behave karna jaise wo exist hi nahi karte.',
  oneLineExplanation: 'In simple terms: Jab tak samne wala maafi na maange, tab tak usse baat na karke use emotionally todna.',

  summary30s: 'Silent treatment ka matlab hai chuppi ko hathiyar ki tarah use karna. Normal ladai me log bolte hain: "Main abhi gussa hu, shaam ko baat karenge." Lekin silent treatment me samne wala aapse achanak baat karna band kar deta hai, na phone uthata hai, na message ka reply deta hai, aur ghar me aise ghoomta hai jaise aap hawa ho. Iska maqsad aapke andar akelepan aur darr ka aag lagana hota hai taaki aap gidgida kar unke aage jhuk jayein.',

  coreConcept: 'Psychologist Kipling Williams ke mutabiq, kisi ko ignore karna (Ostracism) dimaag ke usi hisse par chot pahunchata hai jahan physical dard (jaise haath jalna) hota hai. Silent treatment koi shaanti nahi hai, balki bina bole yeh kehna hai: "Tumhari koi aukaat nahi hai jab tak tum meri shart na maano."',
  summary60s: 'Healthy cooling-off aur silent treatment me zameen-aasmaan ka farq hai. Mature insaan bolta hai: "Mujhe 1 ghante ka time chahiye." Yeh normal hai. Lekin silent treatment me na koi time limit hoti hai, na koi explanation. Samne wala darwaze patakta hai, dukh ka natak karta hai, aur chahta hai ki aap ghutno par aakar puchein: "Mujhse kya galti hui, please baat kar lo." Jab aap gidgidate hain, toh unhe jeet ka nasha milta hai.',

  quickTakeaways: [
    'Chuppi Ka Dard: Science prove karti hai ki ignore kiye jaane par dimaag me wahi dard hota hai jo chot lagne par hota hai',
    'Space vs Punishment: Space me time limit hoti hai ("shaam ko milte hain"); silent treatment me bas saza aur chuppi hoti hai',
    'Gidgidane Ka Nuksaan: Agar aap sorry bolkar unki chuppi todte hain, toh unhe pata chal jata hai ki yeh trick hamesha kaam karti hai',
    'Parallel Life Formula: Unke peeche bhaagne ke bajaye apna kaam aaram se karte rahein, unka hathiyar be-asar ho jayega',
  ],

  whyItHappens: 'Eisenberger (2003) ki research kehti hai ki jab qareebi insaan hume ignore karta hai, toh dimaag me survival panic trigger ho jata hai. Hawa me latke rehne ka darr insaan se kuch bhi karwa leta hai.',
  evolutionaryMechanism: 'Purane jamane me qabeele se baat band karne ka matlab jungle me akele marna tha. Wahi darr aaj partner ya family ki chuppi me trigger hota hai.',

  howItWorks: 'Log iska use isliye karte hain kyunki unhe mature tareeqe se ladna ya baat karna nahi aata. Indian households me "khana na khana" (food boycott) karke pure ghar ko guilt me daalna iska bohot common roop hai.',
  whereYouEncounterIt: 'Husband-wife disputes me, saas-bahu ke rishton me, aur toxic office colleagues ke beech.',

  howToRecognize: [
    'Bina bataye din bhar ya dino tak bilkul baat na karna aur aankhein churana',
    'Ghar me enter hone par room se nikal jana ya aise behave karna jaise aap bhoot ho',
    'Aapse sidhe bolne ke bajaye bolna: "Agar tumhe khud nahi pata ki tumne kya kiya, toh main kyu bataun"',
    'Chuppi tabhi todna jab aap ro padhein, gidgidayein ya unki baat maan lein',
    'Sabke samne aapko cut-off feel karwana taaki aap beizzati mehsoos karein',
  ],

  examples: [
    {
      id: 'st_ex_hi_01',
      domain: 'relationships',
      displayOrder: 1,
      title: 'Weekend Ka 3-Day Silent Drama',
      description: 'Thursday ko budget par bahas hui. Friday se Sunday tak partner ne ek lafz nahi bola, sirf apne liye chai banayi aur alag room me soye. Sunday raat ko bole: "Agar Thursday ko meri baat maan lete toh humara weekend kharab na hota."',
      takeaway: 'Notice karein ki 72 ghante ki chuppi ko saza aur fine ki tarah use kiya gaya.',
    },
  ],

  scenarios: [
    {
      id: 'st_scen_hi_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'Anniversary Trip Par "Maa Ka Khana Chhodna"',
      narrativeContext: 'Kavita (29, Delhi) aur uska husband anniversary ke liye do din ke trip par jane ka plan banate hain aur family function me nahi ja paate. Saas chilati nahi hain, balki dining table par aana band kar deti hain: "Mujhe bhookh nahi hai, budhiya ki kise parwah hai." 3 din tak wo kitchen ka khana nahi khati, puja room me chuppi saadh kar baithti hain aur Kavita ki taraf dekhti bhi nahi. Husband darr kar Kavita par chilata hai: "Trip cancel karo aur Maa se maafi maango, unhone 3 din se khana nahi khaya!"',
      biasInAction: 'Saas ne silent treatment + food boycott + bete ko emotional hostage banakar Kavita ki boundary ko crush karne ki koshish ki.',
      optimalResponse: 'Medical care offer karein par blackmail me trip cancel na karein: "Maa ji, khana table par ready hai aur hume aapki health ki fikar hai. Lekin humara anniversary trip pehle se planned tha aur hum ja rahe hain. Hum wapis aakar function me milenge." Husband aur wife ko ek sath rehna hoga.',
      reflectionPrompt: 'Kya aapne kabhi kisi ki chuppi aur narazgi todne ke liye bina kisi galti ke maafi maangi hai?',
    },
  ],

  limitationsAndControversies: 'Caution: Har chuppi manipulation nahi hoti. Agar kisi abusive insaan se safety ke liye aap uska number block kar dete hain ("No Contact"), toh yeh self-defense hai. Silent treatment tab hota hai jab rishte me reh kar dusre ko jhukane ke liye baat band ki jaye.',

  howToRespond: 'STATE & STEP BACK Protocol: (1) Ek Baar Offer Dein: "Main dekh raha hu aap naraz hain; jab aap aaram se baat karna chahein, main ready hu"; (2) Bhaagna Band Karein: Na 50 call karein, na gidgidayein; (3) Apni Life Normal Jiyein: Khana khayein, dosto se baat karein aur unke silence ko power na dein.',
  psychologicalDefenses: [
    {
      title: 'Open-Door Script',
      instruction: 'Bolein: "Main aapse baat karne ke liye tayyar hu jab aap shanti se bolna chahein. Tab tak main apna kaam kar raha hu."',
    },
    {
      title: 'Guessing Game Ko Khatam Karein',
      instruction: 'Bolein: "Main dimaag nahi padh sakta. Jab aap batana chahenge, main sunne ke liye tayyar hu."',
    },
    {
      title: 'Khana Chhodne Ka Counter',
      instruction: 'Bolein: "Khana bana hua hai, aap adult hain aur decide kar sakte hain. Lekin khana na khane ki wajah se hum decision nahi badlenge."',
    },
    {
      title: 'Fake Sorry Bolna Band Karein',
      instruction: 'Chuppi se darr kar jhoothi maafi mat maangiye, warna yeh unka permanent hathiyar ban jayega.',
    },
  ],

  researchSummary: 'Kipling Williams (2001) ne Cyberball experiment me prove kiya ki chuppi se self-esteem aur control khatam ho jata hai. Eisenberger (2003) ne Science journal me dikhaya ki dACC brain region physical dard aur social boycott ko ek jaisa treat karta hai. Sommer et al. (2001) ke mutabiq continuous silent treatment se rishta khatam ho jata hai.',

  references: TOPIC_SILENT_TREATMENT_EN.references,
  commonMisconceptions: 'Myth: "Ladne se achha hai chup rehna; chuppi me koi violence nahi hai." Reality: Psychology maanti hai ki open-ended punitive silence verbal ladai se zyada toxic aur traumatizing ho sakti hai kyunki isme koi resolution nahi nikalta.',

  reflectionPrompt: 'Kya aapke sath kabhi hua hai ki kisi ne aapko ghar me hote huye bhi invisible bana diya ho?',

  practiceQuestions: TOPIC_SILENT_TREATMENT_EN.practiceQuestions,
  visualContent: TOPIC_SILENT_TREATMENT_EN.visualContent,
  tags: TOPIC_SILENT_TREATMENT_EN.tags,
  relatedTopics: TOPIC_SILENT_TREATMENT_EN.relatedTopics,
  seoTitle: 'Silent Treatment Kya Hai? Meaning, Ostracism Pain & How to Respond | Mentalab Mind',
  seoDescription: 'Silent treatment ki psychology samjhein: jab koi baat band karke saza deta hai. Janiye dACC pain pathway, healthy timeout ka farq aur boundary scripts.',
  canonicalUrl: '/mind/manipulation-awareness/silent-treatment',
  ogImageUrl: '/images/mind/silent-treatment.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Silent treatment ek punitive ostracism tactic hai jo attachment terror aur physical pain pathways (dACC) ko weaponize karti hai.',
};

/**
 * Localized Helper
 */
function createLocalizedSilentRecord(
  langCode: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_SILENT_TREATMENT_EN,
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

export const TOPIC_SILENT_TREATMENT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SILENT_TREATMENT_EN,
  hinglish: TOPIC_SILENT_TREATMENT_HINGLISH,
  hi: createLocalizedSilentRecord(
    'hi',
    'साइलेंट ट्रीटमेंट (Silent Treatment): बहिष्कार, मौन की सजा और भावनात्मक नाकेबंदी',
    'सजा के रूप में बातचीत बंद करने, खाना छोड़ने और सामाजिक अलगाव के मनोविज्ञान को समझें और अडिग रहें।',
    'सरल शब्दों में: अपनी बात मनवाने के लिए सामने वाले को पूरी तरह अनदेखा करना और ऐसा व्यवहार करना जैसे वह मौजूद ही न हो।',
    'साइलेंट ट्रीटमेंट तब होता है जब कोई व्यक्ति अपनी नाराजगी जताने के लिए आपसे बात करना, नजरें मिलाना और उत्तर देना पूरी तरह बंद कर देता है। यह शांति नहीं, बल्कि एक आक्रामक सजा है जिसका उद्देश्य आपको अकेलेपन के आतंक में डालकर अपनी गलती न होने पर भी झुकने के लिए मजबूर करना होता है।',
    'किपलिंग विलियम्स (2001) और आइजेनबर्गर (2003) के अनुसार, इस प्रकार का मौन बहिष्कार मस्तिष्क में शारीरिक चोट जितना ही गहरा दर्द पैदा करता है।',
    [
      'मौन का दर्द: वैज्ञानिक प्रमाण बताते हैं कि बहिष्कार से मस्तिष्क के दर्द केंद्र सक्रिय हो जाते हैं',
      'शांति बनाम सजा: स्वस्थ विराम में समय सीमा होती है ("हम शाम को बात करेंगे"); साइलेंट ट्रीटमेंट अंतहीन सजा है',
      'गिड़गिड़ाने का नुकसान: डरकर माफी मांगने से सामने वाले को यह सीख मिलती है कि चुप रहकर हर बात मनवाई जा सकती है',
      'समानांतर जीवन का नियम: उनके पीछे भागने के बजाय अपनी दिनचर्या शांति से जारी रखना इसका सबसे बड़ा उपाय है',
    ]
  ),
  gu: createLocalizedSilentRecord(
    'gu',
    'સાયલન્ટ ટ્રીટમેન્ટ: અબોલા, મૌનની સજા અને લાગણીઓની નાકાબંધી',
    'વાતચીત બંધ કરીને સજા આપવાની યુક્તિઓને સમજો અને ગભરાયા વગર સ્વસ્થ સીમાઓ રાખો.',
    'સરળ શબ્દોમાં: પોતાની જીદ મનાવવા માટે સામેવાળા સાથે બોલવાનું સાવ બંધ કરી દેવું અને તેમને અદ્રશ્ય ગણવા.',
    'જ્યારે કોઈ વ્યક્તિ પોતાની વાત મનાવવા માટે સંબંધોમાં અબોલા લે છે અને કોઈ જવાબ આપતી નથી, ત્યારે તેને સાયલન્ટ ટ્રીટમેન્ટ કહે છે.',
    'સામેવાળા આગળ કરગરવાને બદલે શાંતિથી પોતાની વાત પર અડગ રહેવું જોઈએ.',
    [
      'અબોલાની સજાને ઓળખો',
      'માફી માંગવાની ઉતાવળ ન કરો',
      'શાંતિપૂર્ણ રીતે સંવાદ માટે દ્વાર ખુલ્લા રાખો',
    ]
  ),
  mr: createLocalizedSilentRecord(
    'mr',
    'सायलेंट ट्रीटमेंट: अबोला, मौनाची शिक्षा आणि भावनिक कोंडी',
    'बोलणे बंद करून स्वतःच्या अटी लादण्याच्या आणि दुर्लक्ष करण्याच्या प्रवृत्तीचा प्रतिकार.',
    'सोप्या भाषेत: समोरच्याला शरण येण्यास भाग पाडण्यासाठी त्याच्याशी बोलणे पूर्णपणे बंद करणे.',
    'सायलेंट ट्रीटमेंटमध्ये व्यक्ती कोणतीही चर्चा न करता अबोला धरून समोरच्याला अपराधीपणाच्या गर्તેत लोटते.',
    'लाचार न होता शांतपणे स्वतःच्या दिनक्रमावर लक्ष केंद्रित करणे हाच यावर योग्य उपाय आहे.',
    [
      'शांततेचा वापर शिक्षेसारखा करू नका',
      'अबोला धरणाऱ्यासमोर गयावया करू नका',
      'संवादासाठी स्पष्ट मर्यादा ठेवा',
    ]
  ),
  bn: createLocalizedSilentRecord(
    'bn',
    'সাইলেন্ট ট্রিটমেন্ট: নীরবতার শাস্তি, সামাজিক বর্জন ও মানসিক অবরোধ',
    'কথা বলা বন্ধ করে অবহেলার মাধ্যমে কাউকে মানসিক যন্ত্রণায় ফেলার অপকৌশল।',
    'সহজ কথায়: নিজের দাবি মানাতে অন্যকে সম্পূর্ণ উপেক্ষা করা এবং এমন ভাব করা যেন সে অস্তিত্বহীন।',
    'সাইলেন্ট ট্রিটমেন্ট হলো নীরবতাকে অস্ত্র হিসেবে ব্যবহার করে অন্য ব্যক্তির ওপর নিয়ন্ত্রণ কায়েম করার একটি নিষ্ঠুর পদ্ধতি।',
    'ভয়ে ভেঙে না পড়ে আত্মসম্মান নিয়ে শান্তভাবে পরিস্থিতি মোকাবিলা করা উচিত।',
    [
      'নীরবতার মানসিক আঘাত বুঝুন',
      'অযথা ক্ষমা চেয়ে ফাঁদে পা দেবেন না',
      'সংঘাত নিরসনে সুস্থ যোগাযোগের ওপর জোর দিন',
    ]
  ),
  ta: createLocalizedSilentRecord(
    'ta',
    'சைலண்ட் ட்ரீட்மென்ட்: மௌனத்தின் தண்டனை, புறக்கணிப்பு மற்றும் உணர்ச்சி அடைப்பு',
    'பேசுவதை நிறுத்தி ஒருவரைத் தண்டிக்கும் உளவியல் வன்முறையை எதிர்கொள்ளுதல்.',
    'எளிய சொற்களில்: தனது பேச்சை கேட்க வைப்பதற்காக ஒருவருடன் பேசுவதை முற்றிலுமாக நிறுத்துவது.',
    'சைலண்ட் ட்ரீட்மென்ட் என்பது அமைதியை ஆயுதமாகப் பயன்படுத்தி மற்றவர்களைக் குற்ற உணர்ச்சியில் ஆழ்த்தும் தந்திரமாகும்.',
    'பதற்றமடையாமல் அவர்களின் மௌனத்திற்கு அடிபணியாமல் இயல்பாக இருப்பதே சிறந்தது.',
    [
      'மௌனத்தின் வலியைப் புரிந்துகொள்ளுதல்',
      'அடிபணிந்து கெஞ்சாதீர்கள்',
      'தெளிவான எல்லைகளைப் பேணுங்கள்',
    ]
  ),
  te: createLocalizedSilentRecord(
    'te',
    'సైలెంట్ ట్రీట్‌మెంట్: మౌనంతో శిక్షించడం, ఉపేక్ష మరియు భావోద్వేగ ప్రతిష్టంభన',
    'మాట్లాడటం మానేసి లొంగదీసుకునే మనస్తత్వాన్ని ఎదుర్కొనే విధానం.',
    'సరళమైన మాటల్లో: తమ షరతులకు ఒప్పుకునేలా చేయడానికి ఎదుటివారితో మాట్లాడటం పూర్తిగా మానేయడం.',
    'సైలెంట్ ట్రీట్‌మెంట్‌లో కంటి చూపుతో కూడా పలకరించకుండా వ్యక్తిని పూర్తిగా ఒంటరిని చేసి భయపెడతారు.',
    'ఆందోళనతో రాజీ పడకుండా నిబ్బరంగా ఉండటం చాలా అవసరం.',
    [
      'మౌన పోరాటాన్ని గుర్తించండి',
      'అనవసరంగా క్షమాపణలు చెప్పకండి',
      'ప్రశాంతంగా మీ పనులను కొనసాగించండి',
    ]
  ),
  kn: createLocalizedSilentRecord(
    'kn',
    'ಸೈಲೆಂಟ್ ಟ್ರೀಟ್‌ಮೆಂಟ್: ಮೌನದ ಶಿಕ್ಷೆ, ಕಡೆಗಣನೆ ಮತ್ತು ಭಾವನಾತ್ಮಕ ದಿಗ್ಬಂಧನ',
    'ಮಾತನಾಡುವುದನ್ನು ನಿಲ್ಲಿಸಿ ಇತರರನ್ನು ಮಣಿಸುವ ತಂತ್ರಗಳ ಪ್ರತಿರೋಧ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ತಮ್ಮ ಮಾತನ್ನು ಕೇಳಿಸಿಕೊಳ್ಳುವಂತೆ ಮಾಡಲು ಇತರರೊಂದಿಗೆ ಸಂಪೂರ್ಣವಾಗಿ ಮಾತು ಬಿಡುವುದು.',
    'ಸೈಲೆಂಟ್ ಟ್ರೀಟ್‌ಮೆಂಟ್‌ನಲ್ಲಿ ವ್ಯಕ್ತಿಯನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಕಡೆಗಣಿಸಿ ಅವರಲ್ಲಿ ಅಪರಾಧ ಪ್ರಜ್ಞೆಯನ್ನು ಮೂಡಿಸಲಾಗುತ್ತದೆ.',
    'ಭಯಪಟ್ಟು ಶರಣಾಗದೆ ಶಾಂತಚಿತ್ತದಿಂದ ಇರುವುದೇ ಇದಕ್ಕೆ ಪರಿಹಾರ.',
    [
      'ಮೌನದ ಶಿಕ್ಷೆಗೆ ಬಲಿಯಾಗಬೇಡಿ',
      'ಅನಗತ್ಯವಾಗಿ ಬೇಡಿಕೊಳ್ಳಬೇಡಿ',
      'ಸ್ಪಷ್ಟ ನಿಲುವನ್ನು ಕಾಯ್ದುಕೊಳ್ಳಿ',
    ]
  ),
  ml: createLocalizedSilentRecord(
    'ml',
    'സൈലന്റ് ട്രീറ്റ്മെന്റ്: നിശബ്ദത കൊണ്ടുള്ള ശിക്ഷ, അവഗണനയും മാനസിക സമ്മർദ്ദവും',
    'സംസാരിക്കാതെ അവഗണിച്ച് സ്വാധീനം ചെലുത്തുന്ന രീതികളെ പ്രതിരോധിക്കുക.',
    'ലളിതമായി പറഞ്ഞാൽ: കാര്യം സാധിക്കാൻ മറ്റൊരാളോട് പൂർണ്ണമായും സംസാരിക്കാതിരിക്കുക.',
    'ഒരു വ്യക്തിയെ മാനസികമായി തളർത്താൻ നിശബ്ദതയെ ഒരു ആയുധമായി ഉപയോഗിക്കുന്നതാണ് ഈ രീതി.',
    'ഭയപ്പെട്ട് കീഴടങ്ങാതെ വ്യക്തമായ നിലപാട് നിലനിർത്തുക.',
    [
      'നിശബ്ദതയുടെ ക്രൂരത തിരിച്ചറിയുക',
      'അനാവശ്യമായി മാപ്പ് പറയാതിരിക്കുക',
      'ആശയവിനിമയത്തിന് അവസരം നൽകുക',
    ]
  ),
  pa: createLocalizedSilentRecord(
    'pa',
    'ਸਾਈਲੈਂਟ ਟ੍ਰੀਟਮੈਂਟ: ਚੁੱਪ ਦੀ ਸਜ਼ਾ, ਬਾਈਕਾਟ ਅਤੇ ਜਜ਼ਬਾਤੀ ਨਾਕਾਬੰਦੀ',
    'ਬੋਲਚਾਲ ਬੰਦ ਕਰਕੇ ਆਪਣੀ ਜ਼ਿੱਦ ਪੂਰੀ ਕਰਵਾਉਣ ਦੇ ਪੈਟਰਨ ਨੂੰ ਸਮਝੋ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਆਪਣੀ ਗੱਲ ਮਨਵਾਉਣ ਲਈ ਸਾਹਮਣੇ ਵਾਲੇ ਨੂੰ ਬਿਲਕੁਲ ਅਣਦੇਖਾ ਕਰ ਦੇਣਾ।',
    'ਸਾਈਲੈਂਟ ਟ੍ਰੀਟਮੈਂਟ ਵਿੱਚ ਵਿਅਕਤੀ ਚੁੱਪ ਰਹਿ ਕੇ ਸਾਹਮਣੇ ਵਾਲੇ ਨੂੰ ਕਸੂਰਵਾਰ ਮਹਿਸੂਸ ਕਰਵਾਉਂਦਾ ਹੈ।',
    'ਗਿੜਗਿੜਾਉਣ ਦੀ ਬਜਾਏ ਸ਼ਾਂਤੀ ਨਾਲ ਆਪਣੀ ਗੱਲ \'ਤੇ ਕਾਇਮ ਰਹਿਣਾ ਚਾਹੀਦਾ ਹੈ।',
    [
      'ਚੁੱਪ ਦੀ ਸਜ਼ਾ ਨੂੰ ਪਛਾਣੋ',
      'ਬਿਨਾਂ ਗ਼ਲਤੀ ਤੋਂ ਮੁਆਫ਼ੀ ਨਾ ਮੰਗੋ',
      'ਆਪਣੇ ਰੁਟੀਨ ਨੂੰ ਆਮ ਵਾਂਗ ਜਾਰੀ ਰੱਖੋ',
    ]
  ),
  ur: createLocalizedSilentRecord(
    'ur',
    'سائلنٹ ٹریٹمنٹ (Silent Treatment): خاموشی کی سزا اور جذباتی بائیکاٹ',
    'بات چیت بند کر کے بے توجہی کے ذریعے جھکانے اور مجبور کرنے کی نفسیات۔',
    'آسان الفاظ میں: اپنی مرضی منوانے کے لیے کسی کو مکمل طور پر نظر انداز کر دینا۔',
    'سائلنٹ ٹریٹمنٹ میں انسان گفتگو اور تعلق بند کر کے دوسرے کو شدید احساسِ جرم اور تنہائی میں مبتلا کرتا ہے۔',
    'خوفزدہ ہو کر گڑگڑانے کے بجائے پُرسکون رہ کر حدود قائم رکھنا ضروری ہے۔',
    [
      'خاموشی کے وار کو سمجھیں',
      'بلاوجہ معافی مانگ کر ہتھیار نہ ڈالیں',
      'گفتگو کے دروازے عزت کے ساتھ کھلے رکھیں',
    ]
  ),
  or: createLocalizedSilentRecord(
    'or',
    'ସାଇଲେଣ୍ଟ ଟ୍ରିଟମେଣ୍ଟ: ନୀରବତାର ଦଣ୍ଡ, ଅବହେଳା ଓ ଭାବପ୍ରବଣତାର ପ୍ରତିରୋଧ',
    'କଥାବାର୍ତ୍ତା ବନ୍ଦ କରି ଅନ୍ୟକୁ ମାନସିକ ଯନ୍ତ୍ରଣା ଦେବାର କୌଶଳର ମୁକାବିଲା।',
    'ସରଳ ଭାଷାରେ: ନିଜ ଜିଦ୍ ପୂରଣ ପାଇଁ ଅନ୍ୟ ସହ ସମ୍ପୂର୍ଣ୍ଣ କଥା ବନ୍ଦ କରି ଉପେକ୍ଷା କରିବା।',
    'ସାଇଲେଣ୍ଟ ଟ୍ରିଟମେଣ୍ଟରେ ବ୍ୟକ୍ତି ନୀରବ ରହି ଅନ୍ୟକୁ ନିଜ ଭୁଲ୍ ସ୍ୱୀକାର କରିବାକୁ ବାଧ୍ୟ କରେ।',
    'ଭୟଭୀତ ନ ହୋଇ ଧୈର୍ଯ୍ୟର ସହ ନିଜ ଆତ୍ମସମ୍ମାନ ବଜାୟ ରଖିବା ଉଚିତ।',
    [
      'ନୀରବତାର ଅସ୍ତ୍ରକୁ ଚିହ୍ନନ୍ତୁ',
      'ଅଯଥାରେ ଭୁଲ୍ ମାଗନ୍ତୁ ନାହିଁ',
      'ନିଜ ସୀମାକୁ ସ୍ପଷ୍ଟ ରଖନ୍ତୁ',
    ]
  ),
  as: createLocalizedSilentRecord(
    'as',
    'চাইলেণ্ট ট্ৰীটমেণ্ট: মৌনতাৰ শাস্তি, অৱহেলা আৰু আৱেগিক প্ৰতিৰোধ',
    'কথা-বতৰা বন্ধ কৰি মানসিকভাৱে দমন কৰাৰ কৌশল বুজি উঠক।',
    'সহজ ভাষাত: নিজৰ কথা মানিবলৈ আন এজনৰ লগত সম্পূৰ্ণৰূপে মাত-বোল বন্ধ কৰা।',
    'চাইলেণ্ট ট্ৰীটমেণ্টত ব্যক্তিয়ে মৌনতাক শাস্তিৰ মাধ্যম হিচাপে ব্যৱহাৰ কৰে।',
    'ভয় নোখোৱাকৈ শান্তভাৱে নিজৰ স্থিতিত অটল থকা উচিত।',
    [
      'মৌনতাৰ মানসিক চাপৰ পৰা আঁতৰি থাকক',
      'অনাহকত ক্ষমা নিবিচাৰিব',
      'সুস্থ যোগাযোগৰ পথ মুকলি ৰাখক',
    ]
  ),
};
