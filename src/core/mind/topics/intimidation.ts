import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 05: Intimidation
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Coercive Power and Social Influence Bases (French & Raven, 1959)
 * - Dominance vs. Prestige Social Hierarchy Theory (Henrich & Gil-White, 2001)
 * - The Polyvagal Freeze Response and Interpersonal Threat (Porges, 2011)
 * - Workplace Bullying & Psychosocial Safety (Einarsen et al., 2011)
 */

export const TOPIC_INTIMIDATION_EN: MindTopicDetail = {
  id: 'intimidation',
  categoryId: 'manipulation_awareness',
  slug: 'intimidation',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 8,
  scientificConsensusTier: 'established',
  sortWeight: 5,
  viewCount: 6890,
  shareCount: 580,
  bookmarkCount: 1040,
  title: 'Intimidation: Dominance Displays, Social Power & Boundary Defense',
  subtitle: 'Recognizing overt and subtle intimidation, understanding the freeze reflex, and disarming coercive dominance.',
  shortDescription: 'The deliberate projection of physical, social, vocal, or institutional power to force compliance through implicit or explicit dread of reprisal.',
  oneLineExplanation: 'In simple terms: Using force, status, volume, or body language to scare someone into submitting without a fair fight.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'Intimidation is the tactical projection of power designed to make another person feel small, vulnerable, and physically or socially endangered. Whether through looming physical stature, slamming fists on desks, sudden verbal roar, cold prolonged glares, or status-flexing ("Do you know who my father is?"), the goal is simple: trigger your primal freeze reflex so that you surrender your boundaries without debating the merits.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'In evolutionary psychology (Henrich & Gil-White, 2001), human hierarchy is built on two distinct pillars: Prestige (influence earned through competence and prosocial sharing) and Dominance (influence extracted through force, threat, and intimidation). Intimidators lack or refuse to rely on prestige, relying instead on French & Raven\'s (1959) "Coercive Power Base". They manufacture compliance by demonstrating their willingness to inflict acute social, economic, or physical pain.',
  summary60s: 'Intimidation exists on a continuum from overt physical hostility to subtle corporate or relational browbeating. Overt intimidation includes cornering someone in an enclosed doorway, towering over a seated person, or aggressive physical posturing. Subtle intimidation is often institutional: a senior manager staring down a junior employee in silence, reminding them of their precarious visa status, or scheduling meetings in deliberately hostile configurations. In all cases, the intention is to bypass democratic negotiation by demonstrating asymmetry of consequence: "I can hurt you far worse than you can hurt me."',

  quickTakeaways: [
    'Dominance vs. Prestige: True leadership inspires emulation (prestige); intimidation forces obedience (dominance)',
    'The Freeze Reflex: Shaking, dry mouth, or muteness in the presence of an aggressor is a natural polyvagal defense, not cowardice',
    'Firmness vs. Intimidation: Assertiveness defends one\'s own boundary; intimidation invades another\'s personal safety',
    'The Shield of Documentation: Intimidation thrives in private, unrecorded spaces; sunlight and third-party witnessing disarm it',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Stephen Porges\' Polyvagal Theory explains that when humans encounter high-amplitude aggressive cues (deep roaring vocal frequencies, expanded physical mass, predatory staring), the unmyelinated vagal pathway triggers "neuroception of danger". The nervous system rapidly suppresses cortical verbal processing, inducing either hyperarousal (fight/flight) or tonic immobility (freeze/appease). Targets often find themselves agreeing to unfair demands simply because their vocal cords feel paralyzed.',
  evolutionaryMechanism: 'In primate bands, confronting a physically dominant silverback risked lethal injury. Primates evolved an innate submissive surrender display (lowered gaze, curled posture, appeasing smiles) to signal non-threat. Intimidators hijack this evolutionary surrender reflex.',

  // SECTION E — WHY MIGHT SOMEONE USE THIS PATTERN?
  howItWorks: 'Contrary to pop-culture myths of the "strong alpha", intimidation is frequently a defense mechanism against deep incompetence. When an individual cannot win through evidence, logic, or technical skill, aggression is the quickest shortcut to silence dissent. In other cases, it is learned intergenerational behavior inherited from authoritarian families or rigid institutional cultures.',
  whereYouEncounterIt: 'Toxic corporate environments, authoritarian family households, sports coaching, landlord-tenant disputes, road rage, and student hostel hierarchies.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Encroaching into personal physical space (standing too close, towering over seated colleagues)',
    'Violent acoustic outbursts (table slamming, door banging, explosive shouting)',
    'Status weaponization ("Do you know who I am?", "You are nothing in this company without me")',
    'Deliberately isolating the target in closed-door sessions where no witnesses are present',
    'Prolonged predatory eye contact designed to force the other person to look down first',
  ],

  // SECTION G — NORMAL BEHAVIOR VS UNHEALTHY PATTERN
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Assertive Leadership vs. Bullying Intimidation',
    description: 'Distinguishing between passionate, rigorous communication and coercive dominance displays.',
    analogySideA: {
      label: 'Assertive Communication (Dignity-Preserving)',
      detail: '"This quarterly audit report has major accounting errors that we must fix immediately. Sit with me, let\'s examine the discrepancy, and draft the correction."',
    },
    analogySideB: {
      label: 'Intimidation Pattern (Domination-Seeking)',
      detail: '"[Slams laptop shut, stands over employee] If you embarrass me in front of the board again, I will destroy your career in this town. You\'ll be begging for a job."',
    },
  },

  // SECTION H, I, J — REAL-LIFE EXAMPLES & INDIAN CONTEXT
  examples: [
    {
      id: 'int_ex_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Closed-Door Cornering',
      description: 'During a sprint planning meeting, a team member respectfully points out a technical debt bottleneck. The Director walks over, stands directly behind the seated engineer, leans down to whisper in their ear: "You have a lot of opinions for someone whose performance review is sitting on my desk right now. Keep your mouth shut during client demos."',
      takeaway: 'Notice the physical proximity encroachment combined with institutional performance appraisal extortion.',
    },
    {
      id: 'int_ex_02',
      domain: 'general',
      displayOrder: 2,
      title: 'The Security Deposit Stand-off',
      description: 'A tenant asks for their security deposit back upon moving out. The landlord brings three muscular local associates, blocks the hallway exit, and raises his voice: "Who are you to demand money from me? If you want to leave this building safely today, hand over the keys and get out."',
      takeaway: 'Leveraging physical swarm intimidation to unlawfully extract financial forfeiture.',
    },
  ],

  scenarios: [
    {
      id: 'int_scen_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'The Engineering College Hostel "Senior-Junior" Confrontation',
      narrativeContext: 'Arjun, a 19-year-old first-year engineering student in Bhopal, is surrounded in his hostel room at midnight by four senior students. The senior wing president kicks Arjun’s study chair, blows cigarette smoke in his face, and barks: "Who gave you permission to look me in the eye when walking past the canteen? You freshers have forgotten your place. You will write all six of my laboratory journals by tomorrow morning, or you won’t be able to step out of this hostel without getting beaten up."',
      biasInAction: 'Classic dominance hierarchy extraction: weaponizing physical mass, group isolation, territorial confinement, and physical threat to force unpaid labor.',
      optimalResponse: 'Do not attempt a solo physical altercation; de-escalate calmly in the moment, refuse isolated private confrontations, and utilize anti-ragging statutory helplines: "I will not write anyone else\'s journals. If there is an issue, we can speak with the hostel warden in the morning." Document the incident immediately and notify the UGC National Anti-Ragging Helpline (1800-180-5522).',
      reflectionPrompt: 'Have you ever noticed your voice shaking or your body freezing when an authority figure suddenly escalated their volume or blocked your physical exit?',
    },
  ],

  // SECTION K — SPOT THE PATTERN (Interactive Scenario)
  interactiveScenarios: [
    {
      id: 'scen_int_01',
      topicId: 'intimidation',
      title: 'Spot the Pattern: The "Performance Review" Showdown',
      contextVignette: 'During an annual review, your manager closes the blinds, stands behind your chair, slams a heavy file on the table next to your elbow, and glares at you with crossed arms: "Sign this waiver accepting a zero percent increment right now, or I will mark you as non-cooperative and initiate immediate termination proceedings."',
      vignetteSourceType: 'workplace',
      question: 'What is the most scientifically sound protocol to neutralize this intimidation tactic without provoking violence?',
      options: [
        {
          id: 'opt_int_a',
          label: 'A',
          text: 'Immediately sign the waiver out of fear to prevent termination.',
          explanation: 'Submission surrenders your statutory legal rights and rewards the coercive tactic.',
          isCorrect: false,
        },
        {
          id: 'opt_int_b',
          label: 'B',
          text: 'Stand up calmly to equalize physical height, take a step back to re-establish personal space, and request documentation for external HR review.',
          explanation: 'Correct. Equalizing eye level breaks postural dominance, increasing personal space reduces sympathetic nervous arousal, and demanding written procedure brings legal sunlight to private bullying.',
          isCorrect: true,
        },
        {
          id: 'opt_int_c',
          label: 'C',
          text: 'Shout louder than the manager and shove their desk back.',
          explanation: 'Escalating to physical aggression or reciprocal shouting creates grounds for disciplinary dismissal.',
          isCorrect: false,
        },
      ],
      revealedExplanation: {
        correctSummary: 'Neutralize postural intimidation: equalize height, step back, and shift to formal written record.',
        whyItMatters: 'Physical intimidation relies on cornering and vertical dominance. Breaking the physical constraint restores cognitive agency.',
        cognitiveTrap: 'Tonic Immobility (Freeze): Mistaking the nervous system\'s temporary shock for personal helplessness.',
        actionableAntidote: 'The "Open-Door Protocol": Never conduct contentious disciplinary discussions behind locked doors without a neutral witness or HR representative.',
      },
      difficulty: 'hard',
      culturalContext: 'indian_general',
    },
  ],

  // SECTION L & Q — "BUT BE CAREFUL" & LIMITATIONS
  limitationsAndControversies: 'Caution: Distinguish between intense urgency and malicious intimidation. If a senior surgeon barks a sharp order in an emergency operating theater, or if a factory foreman shouts "Get back!" to prevent a crane collision, vocal amplitude is driven by immediate physical safety. Intimidation requires the deliberate intent or systemic pattern of using dread to subjugate another person\'s legitimate rights.',

  // SECTION M & N — HOW TO RESPOND & SCRIPTS
  howToRespond: 'Apply the "GROUND, SPACE, WITNESS" Protocol: (1) GROUND: Plant both feet firmly, drop shoulders, and breathe slowly to disengage the freeze response; (2) SPACE: Step sideways or backward to eliminate physical crowding; (3) WITNESS: Refuse unrecorded one-on-one sessions; say "I am happy to continue this discussion with HR present."',
  psychologicalDefenses: [
    {
      title: 'The Volume Reset',
      instruction: 'When someone shouts, speak one octave lower and 20% slower: "I want to hear what you are saying, but I cannot process this while you are shouting. Let us lower our voices."',
    },
    {
      title: 'The Physical Boundary Step',
      instruction: 'If someone looms over you: Stand up deliberately, step behind your chair to place a neutral physical barrier between you, and maintain steady eye contact.',
    },
    {
      title: 'The Record-Keeping Pivot',
      instruction: 'State: "Please put this directive in writing via email so there is no ambiguity on our respective responsibilities."',
    },
    {
      title: 'Statutory Recourse Protocol',
      instruction: 'For college hostel intimidation, utilize the UGC Anti-Ragging Helpline (1800-180-5522). For corporate harassment, escalate to Internal Complaints Committees (POSH) or labor conciliation authorities.',
    },
  ],

  // SECTION P — RESEARCH & CITATIONS
  researchSummary: 'French & Raven\'s (1959) seminal taxonomy of social power defined Coercive Power as compliance driven by the perception that the power-holder can administer punishment. Henrich & Gil-White\'s (2001) dual-model theory demonstrated that dominance-based hierarchies produce fear, avoidance, and secret sabotage in subordinates, whereas prestige-based hierarchies foster innovation and voluntary cooperation. Einarsen, Hoel, Zapf, & Cooper (2011) showed that chronic exposure to workplace intimidation triggers clinical PTSD symptoms, cardiovascular deterioration, and catastrophic team turnover.',

  references: [
    {
      id: 'int_ref_01',
      title: 'The bases of social power',
      citation: 'French, J. R., & Raven, B. (1959). In D. Cartwright (Ed.), Studies in Social Power (pp. 150–167). University of Michigan Press.',
      authors: 'John R. P. French, Bertram Raven',
      publicationYear: 1959,
      journalOrPublisher: 'University of Michigan Press',
      sourceType: 'academic_textbook',
      evidenceStrength: 'foundational_book',
      doiOrUrl: 'https://archive.org/details/studiesinsocialp00cart',
      relevance: 'Foundational framework classifying coercive power as the exploitation of fear of punishment.',
      displayOrder: 1,
    },
    {
      id: 'int_ref_02',
      title: 'The evolution of prestige: Freely conferred deference as a mechanism for enhancing the benefits of cultural transmission',
      citation: 'Henrich, J., & Gil-White, F. J. (2001). Evolution and Human Behavior, 22(3), 165–196.',
      authors: 'Joseph Henrich, Francisco J. Gil-White',
      publicationYear: 2001,
      journalOrPublisher: 'Evolution and Human Behavior',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: 'https://doi.org/10.1016/S1090-5138(00)00071-4',
      relevance: 'Seminal paper contrasting dominance (force-based influence) with prestige (competence-based deference).',
      displayOrder: 2,
    },
    {
      id: 'int_ref_03',
      title: 'Bullying and Harassment in the Workplace: Developments in Theory, Research, and Practice',
      citation: 'Einarsen, S., Hoel, H., Zapf, D., & Cooper, C. L. (2011). CRC Press.',
      authors: 'Ståle Einarsen, Helge Hoel, Dieter Zapf, Cary L. Cooper',
      publicationYear: 2011,
      journalOrPublisher: 'CRC Press',
      sourceType: 'academic_textbook',
      evidenceStrength: 'systematic_review',
      doiOrUrl: 'https://doi.org/10.1201/EBK1439804896',
      relevance: 'Comprehensive international meta-review on the physiological and organizational tolls of intimidation.',
      displayOrder: 3,
    },
  ],

  // SECTION R — COMMON MYTHS
  commonMisconceptions: 'Myth: "Intimidation produces high-performing teams because fear keeps people disciplined." Reality: Research (Einarsen et al., 2011) proves that intimidation destroys psychological safety, suppresses error reporting, triggers burnout, and leads to catastrophic organizational failures.',

  // SECTION S — REFLECTION PROMPT
  reflectionPrompt: 'Have you ever noticed your voice shaking or your body freezing when an authority figure suddenly escalated their volume or blocked your physical exit?',

  // SECTION T — PRACTICE QUESTIONS (6 Distinct Questions)
  practiceQuestions: [
    {
      id: 'int_pq_01',
      questionType: 'identify_influence_principle',
      question: 'According to Henrich & Gil-White (2001), what is the fundamental difference between "Dominance" and "Prestige"?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Dominance extracts compliance through force, fear, and threat of cost; Prestige earns voluntary deference through demonstrated competence and generosity.',
          isCorrect: true,
          feedbackText: 'Correct. Dominance relies on coercion, while prestige is freely granted by peers.',
        },
        {
          id: 'opt_2',
          optionText: 'Dominance is only used in politics, while prestige is only used in sports.',
          isCorrect: false,
          feedbackText: 'Both dynamics operate across all human social domains.',
        },
        {
          id: 'opt_3',
          optionText: 'Dominance and prestige are identical terms for physical strength.',
          isCorrect: false,
          feedbackText: 'Prestige is based on cultural skill and knowledge sharing, not force.',
        },
      ],
      cognitiveTakeaway: 'Dominance coerces obedience; prestige inspires voluntary respect.',
    },
    {
      id: 'int_pq_02',
      questionType: 'distinction',
      question: 'How does healthy assertiveness differ from intimidation in communication?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Assertiveness firmly defends one\'s own rights while honoring the other person\'s dignity; intimidation attempts to diminish the other person\'s safety or agency through dread.',
          isCorrect: true,
          feedbackText: 'Correct. Assertiveness is about self-respect; intimidation is about dominance over others.',
        },
        {
          id: 'opt_2',
          optionText: 'Assertiveness is always whispered, while intimidation is always shouted.',
          isCorrect: false,
          feedbackText: 'Intimidation can be chillingly quiet, and assertiveness can be clear and loud.',
        },
        {
          id: 'opt_3',
          optionText: 'There is no difference; all confident communication is intimidation.',
          isCorrect: false,
          feedbackText: 'Confidence without hostility or violation of others is healthy assertiveness.',
        },
      ],
      cognitiveTakeaway: 'Assertiveness holds personal boundaries; intimidation violates the boundaries of others.',
    },
    {
      id: 'int_pq_03',
      questionType: 'scenario_analysis',
      question: 'In a meeting, a senior executive stands up, kicks his chair back, walks behind a junior analyst, places both hands on the analyst\'s desk, and stares at them in silence for 15 seconds after an honest question. What is the psychological function of this behavior?',
      options: [
        {
          id: 'opt_1',
          optionText: 'A nonverbal postural dominance display designed to trigger the subordinate\'s autonomic freeze reflex and suppress dissent without verbal debate.',
          isCorrect: true,
          feedbackText: 'Correct. Encroaching personal territory and prolonged hostile silence are classic nonverbal dominance tactics.',
        },
        {
          id: 'opt_2',
          optionText: 'A yoga mindfulness exercise.',
          isCorrect: false,
          feedbackText: 'This is hostile physical posturing, not relaxation.',
        },
        {
          id: 'opt_3',
          optionText: 'A legitimate technical peer review.',
          isCorrect: false,
          feedbackText: 'Technical reviews focus on data, code, or evidence, not physical territory bullying.',
        },
      ],
      cognitiveTakeaway: 'Territorial encroachment and threatening silence substitute physical dominance for intellectual merit.',
    },
    {
      id: 'int_pq_04',
      questionType: 'best_response',
      question: 'When dealing with a colleague who suddenly starts screaming and slamming their fist on your desk, what is the best immediate physiological and behavioral move?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Maintain an upright, grounded posture, lower your vocal pitch, speak more slowly, and say: "I am ready to speak with you when you lower your voice and stop hitting the furniture."',
          isCorrect: true,
          feedbackText: 'Correct. De-escalates autonomic contagion, refuses to match aggressive volume, and establishes a clear behavioral condition.',
        },
        {
          id: 'opt_2',
          optionText: 'Slam your fist back harder and challenge them to a fight.',
          isCorrect: false,
          feedbackText: 'Triggers physical violence and mutual disciplinary termination.',
        },
        {
          id: 'opt_3',
          optionText: 'Cower under the desk and apologize for existing.',
          isCorrect: false,
          feedbackText: 'Reinforces the intimidator’s perceived dominance.',
        },
      ],
      cognitiveTakeaway: 'De-escalate auditory volume while standing firm on behavioral conditions.',
    },
    {
      id: 'int_pq_05',
      questionType: 'what_would_you_do',
      question: 'Your supervisor demands that you attend a closed-door, one-on-one session at 7:00 PM on a Friday with no agenda, after previously threatening to "take care of you off the record". How should you protect yourself?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Decline the isolated evening meeting politely and request that it occur during standard business hours with HR or another team lead present: "I want to ensure we have a productive meeting with clear next steps."',
          isCorrect: true,
          feedbackText: 'Correct. Intimidation relies on isolation; insisting on professional hours and witnesses neutralizes bullying.',
        },
        {
          id: 'opt_2',
          optionText: 'Go alone and say nothing the entire time.',
          isCorrect: false,
          feedbackText: 'Leaves you vulnerable to undocumented threats and psychological trauma.',
        },
        {
          id: 'opt_3',
          optionText: 'Bring an illegal recording device and post the audio on social media immediately.',
          isCorrect: false,
          feedbackText: 'Violates legal/corporate wiretapping statutes and can backfire legally.',
        },
      ],
      cognitiveTakeaway: 'Bring difficult meetings into the light of standard business hours with formal witnesses.',
    },
    {
      id: 'int_pq_06',
      questionType: 'misconception_detection',
      question: 'Why do human beings often experience "tonic immobility" (freezing, shaking, or muteness) when confronted by an intense, aggressive intimidator?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Because Polyvagal evolutionary wiring automatically shifts the nervous system into a freeze response to minimize lethal damage when confrontation appears unwinnable.',
          isCorrect: true,
          feedbackText: 'Correct. Porges\' Polyvagal Theory explains freeze as a mammalian survival reflex, not a moral failing or lack of courage.',
        },
        {
          id: 'opt_2',
          optionText: 'Because human beings naturally prefer being dominated.',
          isCorrect: false,
          feedbackText: 'Humans universally desire autonomy and respect; freezing is an autonomic distress state.',
        },
        {
          id: 'opt_3',
          optionText: 'Because vocal cords only function when people are happy.',
          isCorrect: false,
          feedbackText: 'Neurological inhibition of the laryngeal nerve occurs specifically during extreme threat perception.',
        },
      ],
      cognitiveTakeaway: 'Freezing is a neurobiological survival response, not a character flaw.',
    },
  ],

  // VISUAL CONTENT
  visualContent: {
    id: 'vis_intimidation',
    type: 'flowchart',
    title: 'Dominance vs. Prestige Social Influence Models',
    altText: 'A conceptual diagram contrasting Dominance (Force, Threat, Intimidation, Coercion) with Prestige (Skill, Knowledge, Respect, Free Deference).',
    caption: 'Figure 1: Henrich & Gil-White\'s Dual Model: Dominance forces compliance through fear of reprisal, while Prestige earns influence through competence.',
    interactiveExplanation: 'When leaders lack genuine competence or prestige, they often regress into dominance-based intimidation to maintain control.',
  },

  // TAGS & RELATED TOPICS
  tags: ['Manipulation Awareness', 'Intimidation', 'Dominance Displays', 'Workplace Bullying', 'Polyvagal Theory', 'Assertiveness'],
  relatedTopics: [
    {
      topicId: 'fear_based_persuasion',
      slug: 'fear-based-persuasion',
      title: 'Fear-Based Persuasion',
      relationshipType: 'amplified_by',
    },
    {
      topicId: 'emotional_blackmail',
      slug: 'emotional-blackmail',
      title: 'Emotional Blackmail',
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
  seoTitle: 'Intimidation: Psychology, Warning Signs & De-escalation Scripts | Mentalab Mind',
  seoDescription: 'Learn how to recognize physical and subtle workplace intimidation. Understand the freeze reflex, dominance theory, and how to assert boundaries safely.',
  canonicalUrl: '/mind/manipulation-awareness/intimidation',
  ogImageUrl: '/images/mind/intimidation.png',
  publishedAt: '2026-09-22T00:00:00Z',
  deepExplanation: 'Intimidation leverages physical posture, vocal amplitude, status rank, and coercive threat to induce autonomic surrender.',
};

/**
 * High-Quality Hinglish Translation
 */
export const TOPIC_INTIMIDATION_HINGLISH: MindTopicDetail = {
  ...TOPIC_INTIMIDATION_EN,
  title: 'Intimidation: Rowb, Darr Aur Bullying Ke Psychology Ko Samjhein',
  subtitle: 'Jaaniye physical aur subtle intimidation ko kaise pehchanein, freeze reflex se kaise bachein, aur bina lade boundary kaise set karein.',
  shortDescription: 'Taqat, unchi aawaz, body language ya status ka use karke kisi ko darana taaki wo bina bahas kiye jhuk jaye.',
  oneLineExplanation: 'In simple terms: Apna darr, status ya unchi aawaz dikhakar doosre ko dabaana taaki wo aapse sawal na pooch sake.',

  summary30s: 'Intimidation tab hoti hai jab koi insaan apni unchi aawaz, badi body language, gusse se ghoorna ya "Jaante ho mera baap kaun hai?" bolkar aapko darata hai. Iska maqsad yeh hota hai ki aap darr ke maare freeze ho jayein aur unke aage chupchap surrender kar dein. Yeh communication nahi, balki taqat ka ghamand dikhakar doosre ko dabane ka tareeqa hai.',

  coreConcept: 'Evolutionary psychology (Henrich & Gil-White, 2001) me do tarah ki power hoti hai: Prestige (achhe kaam aur competence se milne wali izzat) aur Dominance (dhamki aur darr se cheeni gayi power). Intimidators ke paas jab logic ya competence nahi hoti, toh wo Dominance aur gusse ka sahara lete hain taaki log unse dar kar chup rahein.',
  summary60s: 'Intimidation do tarah ki hoti hai: Overt (khuli hui) jaise table par haath patakna, rasta rokna, ya chilana. Aur doosri hoti hai Subtle (chhupi hui) jaise office me akele cabin me bula kar chupchap ghoorna, visa cancel karwane ki dhamki dena, ya performance review bigaadne ka darr dikhana. Dono hi situations me samne wale ka maqsad yeh dikhana hota hai: "Main tumhe bohot bada nuksaan pahuncha sakta hu, isliye chup raho."',

  quickTakeaways: [
    'Dominance vs Prestige: Asli leader respect se kaam karwata hai; intimidator darr aur dhamki se',
    'Freeze Reflex: Gusse ke samne aawaz ka kapkapana ya chup ho jana normal biological reaction hai, koi kamzori nahi',
    'Firmness vs Intimidation: Apni boundary banana self-respect hai; doosre ko darana intimidation hai',
    'Documentation Ka Hathiyar: Bullying akele me hoti hai; email aur witnesses ke samne aate hi intimidator thanda pad jata hai',
  ],

  whyItHappens: 'Polyvagal Theory (Porges, 2011) ke mutabiq jab humare samne koi bohot unchi aawaz me chilata hai ya violent gesture karta hai, toh humara nervous system "freeze" mode me chala jata hai. Vocal cords jam jaati hain aur insaan darr me bina soche haan bol deta hai.',
  evolutionaryMechanism: 'Jungalon me bade sher ya taqatwar janwar ke aage surrender karna jaan bachane ka tareeqa tha. Wahi darr aaj toxic boss ya aggressive senior ke samne trigger ho jata hai.',

  howItWorks: 'Log intimidation isliye use karte hain kyunki unke paas logic ya saboot nahi hota. Chillane aur darane se unhe lagta hai ki wo jeet gaye.',
  whereYouEncounterIt: 'Toxic corporate offices me, college ragging me, aggressive landlords ke sath, aur road rage me.',

  howToRecognize: [
    'Aapke bohot qareeb aakar khade hona ya rasta rokna',
    'Table patakna, darwaza zor se band karna ya chilana',
    'Status ka ghamand dikhana ("Meri poonch upar tak hai")',
    'Hamesha akele me band kamre me baat karne ka pressure banana',
    'Aankhon me aisi aggressive look dena jisse aap nazrein jhuka lein',
  ],

  examples: [
    {
      id: 'int_ex_hi_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Cabin Me Bullying',
      description: 'Manager employee ke peechhe aakar khada hota hai aur kaan me bolta hai: "Tumhari performance review mere haath me hai. Agar meeting me zyada smart bane toh company se bahar nikalwa dunga."',
      takeaway: 'Notice karein ki physical space invade karke authority ka misuse kiya gaya.',
    },
  ],

  scenarios: [
    {
      id: 'int_scen_hi_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'Hostel Ki Ragging Aur Senior Rowb',
      narrativeContext: 'Arjun, Bhopal ke ek engineering college ka first-year student hai. Raat 12 baje char seniors uske room me aate hain. Ek senior chair par laat maarta hai, Arjun ke munh par dhuwan chhodta hai aur kehta hai: "Teri itni himmat ki tu canteen me humari taraf dekh raha tha? Kal subah tak meri 6 lab files likhkar table par honi chahiye, warna hostel se nikalna band kar denge."',
      biasInAction: 'Taqat, physical mass aur group ka darr dikhakar muft me kaam karwane ka dominance pattern.',
      optimalResponse: 'Akele ladai na karein, shaant rahein aur official anti-ragging portal par complaint karein: "Main kisi ki assignment nahi likhunga. Subah warden sir ke samne baat karenge." UGC Anti-Ragging Helpline (1800-180-5522) par report karein.',
      reflectionPrompt: 'Kya aapke sath kabhi aisa hua hai ki kisi authority figure ke chillane par aapki aawaz achanak ruk gayi ho?',
    },
  ],

  limitationsAndControversies: 'Caution: Har unchi aawaz intimidation nahi hoti. Agar factory me machine girne wali ho aur supervisor chilakar bole "Peechhe hato!", toh wo jaan bachane ke liye hai. Intimidation tab hoti hai jab kisi ke haq aur boundary ko dabane ke liye darr ka use kiya jaye.',

  howToRespond: 'GROUND, SPACE, WITNESS Rule: (1) Dono paanv zameen par tika kar deep breath lein taaki freeze reflex tute; (2) Ek kadam peechhe hokar personal space banayein; (3) Akele me baat karne se mana karein: "Hum HR ke presence me baat karenge."',
  psychologicalDefenses: [
    {
      title: 'Voice Volume Reset',
      instruction: 'Agar saamne wala chila raha hai, toh aap dheere aur shaant aawaz me bolein: "Main aapki baat sunna chahta hu, lekin chilane par nahi. Pehle aawaz dheere kijiye."',
    },
    {
      title: 'Equalize Height',
      instruction: 'Agar koi khade hokar aap par rob jama raha hai, toh aap bhi aaram se khade ho jayein aur ek step peechhe lein.',
    },
    {
      title: 'Written Record',
      instruction: 'Bolein: "Aap jo bhi keh rahe hain, please mujhe email par bhejiye taaki record clear rahe."',
    },
  ],

  researchSummary: 'French & Raven (1959) ne Coercive Power ko identify kiya tha. Henrich & Gil-White (2001) ne prove kiya ki Dominance darr paida karti hai aur Prestige respect paida karti hai. Einarsen et al. (2011) ne dikhaya ki intimidation se stress aur burnout hota hai.',

  references: TOPIC_INTIMIDATION_EN.references,
  commonMisconceptions: 'Myth: "Chilane se aur darane se log zyada achha kaam karte hain." Reality: Research dikhati hai ki intimidation se log galtiyan chhupate hain, innovate nahi karte, aur jaldi resign karte hain.',

  reflectionPrompt: 'Kya aapke sath kabhi aisa hua hai ki kisi authority figure ke chillane par aapki aawaz achanak ruk gayi ho?',

  practiceQuestions: TOPIC_INTIMIDATION_EN.practiceQuestions,
  visualContent: TOPIC_INTIMIDATION_EN.visualContent,
  tags: TOPIC_INTIMIDATION_EN.tags,
  relatedTopics: TOPIC_INTIMIDATION_EN.relatedTopics,
  seoTitle: 'Intimidation Kya Hai? Dominance Displays & De-escalation Scripts | Mentalab Mind',
  seoDescription: 'Intimidation aur rowb jamane ki psychology ko samjhein. Janiye freeze reflex se kaise bachein aur bina dare boundary kaise set karein.',
  canonicalUrl: '/mind/manipulation-awareness/intimidation',
  ogImageUrl: '/images/mind/intimidation.png',
  publishedAt: '2026-09-22T00:00:00Z',
  deepExplanation: 'Intimidation ek social dominance mechanism hai jo coercive power aur autonomic freeze response ka use karta hai.',
};

/**
 * Localized Helper
 */
function createLocalizedIntimidationRecord(
  langCode: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_INTIMIDATION_EN,
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

export const TOPIC_INTIMIDATION: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_INTIMIDATION_EN,
  hinglish: TOPIC_INTIMIDATION_HINGLISH,
  hi: createLocalizedIntimidationRecord(
    'hi',
    'धमकाना और दबंगई (Intimidation): शारीरिक रौब, पद का दुरुपयोग और आत्मरक्षा',
    'ऊंची आवाज, आक्रामक शारीरिक भाषा और पद के दुरुपयोग से उत्पन्न भय को समझें और शांत रहकर सीमाएं तय करें।',
    'सरल शब्दों में: ताकत, पद, ऊंची आवाज या शारीरिक हाव-भाव से किसी को इतना डरा देना कि वह बिना विरोध के झुक जाए।',
    'दबंगई या धमकाना (Intimidation) तब होता है जब कोई व्यक्ति अपनी शारीरिक उपस्थिति, मेज पर हाथ पटकने, चिल्लाने या अपने पद का रौब दिखाकर आपको डराता है। इसका उद्देश्य आपके सोचने और विरोध करने की क्षमता को पंगु बनाकर अपनी बात मनवाना होता है।',
    'हेनरिक और गिल-व्हाइट (2001) के अनुसार, प्रभाव दो प्रकार का होता है: प्रतिष्ठा (सम्मान और योग्यता से अर्जित) और प्रभुत्व (बल और भय से छीना गया)। दबंग लोग योग्यता के अभाव में प्रभुत्व और आतंक का सहारा लेते हैं।',
    [
      'प्रभुत्व बनाम प्रतिष्ठा: सच्चा नेतृत्व सम्मान से काम करवाता है; दबंगई केवल भय से आज्ञाकारिता छीनती है',
      'फ्रीज रिफ्लेक्स: अत्यधिक भय में आवाज का कांपना या चुप हो जाना प्राकृतिक जैविक सुरक्षा तंत्र है, कोई कमजोरी नहीं',
      'दृढ़ता बनाम दबंगई: अपनी सीमा की रक्षा करना दृढ़ता है; दूसरे की सुरक्षा का उल्लंघन करना दबंगई है',
      'लिखित रिकॉर्ड का सुरक्षा कवच: दबंगई अकेले में पनपती है; गवाहों और लिखित संचार के सामने दबंग शांत हो जाते हैं',
    ]
  ),
  gu: createLocalizedIntimidationRecord(
    'gu',
    'ધમકાવવું અને દાદાગીરી: શારીરિક રોફ અને સત્તાના દુરુપયોગ સામે રક્ષણ',
    'મોટા અવાજ અને આક્રમક વર્તન દ્વારા ડરાવવાની યુક્તિઓને ઓળખો અને સીમાઓ બનાવો.',
    'સરળ શબ્દોમાં: તાકાત, મોભા કે મોટા અવાજનો ઉપયોગ કરીને કોઈને દબાવવું જેથી તે વિરોધ ન કરી શકે.',
    'જ્યારે કોઈ વ્યક્તિ પોતાની શારીરિક તાકાત કે હોદ્દાનો રોફ જમાવીને બીજાને ડરાવીને પોતાની વાત મનાવે છે, ત્યારે તેને ઇન્ટિમિડેશન કહે છે.',
    'આ વર્તન સામે ડર્યા વગર શાંતિપૂર્ણ રીતે સ્પષ્ટ સીમાઓ રાખવી જરૂરી છે.',
    [
      'દાદાગીરી સામે શાંતિથી મક્કમ રહો',
      'એકાંતમાં ધમકીઓ આપનારાઓ સામે લેખિત પુરાવા રાખો',
      'ગંભીર કિસ્સામાં સત્તાવાળાઓનો સંપર્ક કરો',
    ]
  ),
  mr: createLocalizedIntimidationRecord(
    'mr',
    'दबदबा आणि धमकावणे: शारीरिक दरारा, अधिकाराचा गैरवापर आणि प्रतिकार',
    'मोठ्या आवाजात बोलून, टेबलवर हात आपटून किंवा अधिकाराचा धाક दाखवून झुकवण्याच्या पद्धती ओळखा.',
    'सोप्या भाषेत: ताकद, पद किंवा मोठ्या आवाजाचा धाक दाखवून कोणालाही विरोध करण्यापासून रोखणे.',
    'जेव्हा एखादी व्यक्ती स्वतःच्या पदाचा किंवा शारीरिक ताकदीचा गैरवापर करून इतरांना घाबरवून निर्णय लादते, तेव्हा त्याला धमकावणे म्हणतात.',
    'शांत राहून आणि लेखी पुराव्यांच्या आधारे अशा दबावाचा सामना करता येतो.',
    [
      'दबावाला बळी न पडता ठाम राहा',
      'शारीरिक आक्रमकतेसमोर शांतपणे पाऊल मागे घ्या',
      'कामाच्या ठिकाणी अशा वागणुकीची एचआरकडे तक्रार करा',
    ]
  ),
  bn: createLocalizedIntimidationRecord(
    'bn',
    'ভীতি প্রদর্শন ও আধিপত্য বিস্তার: শারীরিক ক্ষমতা ও পদের অপব্যবহার প্রতিরোধ',
    'উচ্চ কণ্ঠস্বর ও আগ্রাসী আচরণের মাধ্যমে ভয় দেখিয়ে বশ্যতা স্বীকার করানোর মনস্তত্ত্ব।',
    'সহজ কথায়: ক্ষমতা, পদমর্যাদা বা শারীরিক ভঙ্গি দিয়ে কাউকে এমনভাবে ভয় দেখানো যাতে সে প্রতিবাদ না করে।',
    'ভীতি প্রদর্শন হলো এমন এক আচরণ যেখানে ব্যক্তি তার শক্তি বা কর্তৃত্বের অপব্যবহার করে অন্যকে মানসিকভাবে স্তব্ধ করে দেয়।',
    'ভয় পেয়ে তাৎক্ষণিক সিদ্ধান্ত না নিয়ে শান্তভাবে নথিপত্র সংরক্ষণের মাধ্যমে এর মোকাবিলা করা যায়।',
    [
      'আগ্রাসনের মুখে শান্ত এবং দৃঢ় থাকুন',
      'অন্যায় আধিপত্যের কাছে আত্মসমর্পণ করবেন না',
      'কর্মক্ষেত্রে বা প্রতিষ্ঠানে লিখিত অভিযোগ দায়ের করুন',
    ]
  ),
  ta: createLocalizedIntimidationRecord(
    'ta',
    'மிரட்டுதல் மற்றும் ஆதிக்கம் செலுத்துதல்: அதிகார துஷ்பிரயோகத்தை எதிர்கொள்ளுதல்',
    'உரத்த குரல், ஆக்ரோஷமான உடல் அசைவுகள் மூலம் பயமுறுத்தி பணிய வைக்கும் உளவியல்.',
    'எளிய சொற்களில்: வலிமை, பதவி அல்லது மிரட்டல் மூலம் ஒருவரைப் பயமுறுத்தி பணிய வைப்பது.',
    'மிரட்டுதல் என்பது ஒருவர் தன் உடல் வலிமையையோ அல்லது அதிகாரத்தையோ பயன்படுத்தி மற்றவர்களை அச்சுறுத்தும் செயலாகும்.',
    'பதற்றப்படாமல் அமைதியாகவும் உறுதியாகவும் எல்லைகளை அமைப்பதே இதற்குச் சிறந்த தீர்வாகும்.',
    [
      'பயமுறுத்தல்களுக்குப் பணியாதீர்கள்',
      'அமைதியான குரலில் உறுதியாகப் பேசுங்கள்',
      'அதிகாரப்பூர்வமாகப் புகாரளிக்கவும்',
    ]
  ),
  te: createLocalizedIntimidationRecord(
    'te',
    'బెదిరింపు మరియు ఆధిపత్య ప్రదర్శన: అధికార దుర్వినియోగాన్ని ఎదుర్కొనే విధానం',
    'పెద్ద గొంతుతో అరవడం, దూకుడు ప్రవర్తనతో భయపెట్టి లొంగదీసుకునే మనస్తత్వాన్ని అర్థం చేసుకోండి.',
    'సరళమైన మాటల్లో: బలం, హోదా లేదా బెదిరింపులతో ఎదుటివారిని భయపెట్టి తమ దారికి తెచ్చుకోవడం.',
    'బెదిరింపు అనేది శారీరక లేదా అధికారిక ఆధిక్యతను ప్రదర్శించి ఎదుటివారిని లొంగదీసుకునే ఒక నియంత్రణ పద్ధతి.',
    'ఆందోళన చెందకుండా ప్రశాంతంగా, దృఢంగా స్పందించడం ముఖ్యం.',
    [
      'బెదిరింపులకు లొంగిపోకండి',
      'రాతపూర్వక ఆధారాలను భద్రపరుచుకోండి',
      'సంస్థాగత రక్షణ మార్గాలను ఉపయోగించండి',
    ]
  ),
  kn: createLocalizedIntimidationRecord(
    'kn',
    'ಬೆದರಿಕೆ ಮತ್ತು ದಬ್ಬಾಳಿಕೆ: ದೈಹಿಕ ಪ್ರಭಾವ ಮತ್ತು ಅಧಿಕಾರ ದುರ್ಬಳಕೆಯ ಪ್ರತಿರೋಧ',
    'ದೊಡ್ಡ ಧ್ವನಿ, ಆಕ್ರಮಣಕಾರಿ ವರ್ತನೆಯ ಮೂಲಕ ಹೆದರಿಸಿ ಒಪ್ಪಿಸುವ ತಂತ್ರಗಳನ್ನು ತಿಳಿಯಿರಿ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಬಲ, ಅಧಿಕಾರ ಅಥವಾ ಬೆದರಿಕೆಯ ಮೂಲಕ ಇತರರನ್ನು ಹೆದರಿಸಿ ಮಣಿಸುವುದು.',
    'ಬೆದರಿಕೆಯು ಅಧಿಕಾರ ಅಥವಾ ಶಕ್ತಿಯನ್ನು ಬಳಸಿಕೊಂಡು ಇತರರಲ್ಲಿ ಭೀತಿಯನ್ನು ಹುಟ್ಟಿಸಿ ನಿಯಂತ್ರಿಸುವ ಒಂದು ಪ್ರಕ್ರಿಯೆಯಾಗಿದೆ.',
    'ಶಾಂತಚಿತ್ತದಿಂದ ಮತ್ತು ದೃಢವಾದ ಗಡಿಗಳನ್ನು ನಿಗದಿಪಡಿಸುವ ಮೂಲಕ ಇದನ್ನು ಎದುರಿಸಬಹುದು.',
    [
      'ದಬ್ಬಾಳಿಕೆಗೆ ಮಣಿಯಬೇಡಿ',
      'ಶಾಂತವಾಗಿ ದೃಢ ನಿಲುವು ತಳೆಯಿರಿ',
      'ದಾಖಲೆಗಳನ್ನು ಸರಿಯಾಗಿ ನಿರ್ವಹಿಸಿ',
    ]
  ),
  ml: createLocalizedIntimidationRecord(
    'ml',
    'ഭീഷണിപ്പെടുത്തലും ആധിപത്യ പ്രകടനവും: അധികാര ദുർവിനിയോഗത്തെ പ്രതിരോധിക്കാം',
    'ഉയർന്ന ശബ്ദത്തിലും അക്രമണോത്സുകമായ പെരുമാറ്റത്തിലും ഭയപ്പെടുത്തി കീഴ്പ്പെടുത്തുന്ന രീതികൾ.',
    'ലളിതമായി പറഞ്ഞാൽ: അധികാരം, ബലം, അല്ലെങ്കിൽ ഭീഷണി എന്നിവ ഉപയോഗിച്ച് മറ്റുള്ളവരെ പേടിപ്പിച്ച് കാര്യം നേടുക.',
    'ഒരു വ്യക്തി തന്റെ പദവിയോ ശാരീരിക ബലമോ കാണിച്ച് മറ്റൊരാളെ ഭയപ്പെടുത്തി വരുതിയിലാക്കുന്നതാണ് ഭീഷണിപ്പെടുത്തൽ.',
    'പകരം ദേഷ്യപ്പെടാതെ ശാന്തതയോടും വ്യക്തമായ തെളിവുകളോടും കൂടി നേരിടുക.',
    [
      'ഭയത്തിന് വഴങ്ങാതിരിക്കുക',
      'ശാന്തവും ദൃഢവുമായ പ്രതികരണം നിലനിർത്തുക',
      'രേഖാമൂലം പരാതിപ്പെടുക',
    ]
  ),
  pa: createLocalizedIntimidationRecord(
    'pa',
    'ਧਮਕਾਉਣਾ ਅਤੇ ਦਬੰਗਈ: ਸਰੀਰਕ ਰੋਹਬ ਅਤੇ ਤਾਕਤ ਦੇ ਗ਼ਲਤ ਇਸਤੇਮਾਲ ਦਾ ਟਾਕਰਾ',
    'ਉੱਚੀ ਆਵਾਜ਼ ਅਤੇ ਹਮਲਾਵਰ ਰਵੱਈਏ ਨਾਲ ਦਬਾਉਣ ਦੇ ਪੈਟਰਨ ਨੂੰ ਸਮਝੋ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਤਾਕਤ, ਅਹੁਦੇ ਜਾਂ ਡਰ ਦਾ ਰੋਹਬ ਪਾ ਕੇ ਕਿਸੇ ਨੂੰ ਚੁੱਪ ਕਰਵਾਉਣਾ।',
    'ਜਦੋਂ ਕੋਈ ਵਿਅਕਤੀ ਆਪਣੀ ਤਾਕਤ ਜਾਂ ਰੁਤਬੇ ਦਾ ਗ਼ਲਤ ਇਸਤੇਮਾਲ ਕਰਕੇ ਦੂਜਿਆਂ ਨੂੰ ਡਰਾਉਂਦਾ ਹੈ, ਤਾਂ ਇਸਨੂੰ ਇੰਟੀਮੀਡੇਸ਼ਨ ਕਹਿੰਦੇ ਹਨ।',
    'ਸ਼ਾਂਤ ਰਹਿ ਕੇ ਅਤੇ ਸੀਮਾਵਾਂ ਨਿਰਧਾਰਤ ਕਰਕੇ ਅਜਿਹੇ ਦਬਾਅ ਦਾ ਟਾਕਰਾ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।',
    [
      'ਦਬੰਗਈ ਅੱਗੇ ਹਾਰ ਨਾ ਮੰਨੋ',
      'ਸ਼ਾਂਤ ਅਤੇ ਦ੍ਰਿੜ੍ਹ ਰਵੱਈਆ ਅਪਣਾਓ',
      'ਲਿਖਤੀ ਰਿਕਾਰਡ ਰੱਖੋ',
    ]
  ),
  ur: createLocalizedIntimidationRecord(
    'ur',
    'دھمکانا اور دباؤ ڈالنا (Intimidation): رعب، جارحیت اور خود داری کا دفاع',
    'اونچی آواز، سخت لہجے اور عہدے کا رعب جما کر ڈرانے اور جھکانے کی نفسیات۔',
    'آسان الفاظ میں: طاقت، عہدے یا اونچی آواز سے کسی کو اتنا ڈرا دینا کہ وہ بغیر بحث کے سر تسلیم خم کر دے۔',
    'جب کوئی شخص اپنی جسمانی طاقت یا سرکاری/دفتری حیثیت کا رعب جما کر دوسروں کو خاموش کرائے، تو یہ انٹیمیڈیشن ہے۔',
    'خوف کے بجائے پُرسکون اور تحریری ثبوتوں کے ساتھ اس کا مقابلہ کرنا چاہیے۔',
    [
      'دھمکیوں اور غصے سے خوفزدہ نہ ہوں',
      'پُرسکون رہ کر اپنی حدود پر قائم رہیں',
      'تحریری اور باضابطہ ذرائع کا سہارا لیں',
    ]
  ),
  or: createLocalizedIntimidationRecord(
    'or',
    'ଧମକାଇବା ଓ ଦବଙ୍ଗଗିରି: ଶାରୀରିକ ରୋବ୍ ଏବଂ କ୍ଷମତାର ଅପବ୍ୟବହାର ବିରୋଧରେ ପ୍ରତିରୋଧ',
    'ଉଚ୍ଚ ସ୍ୱର ଏବଂ ଆକ୍ରମଣାତ୍ମକ ଆଚରଣ ମାଧ୍ୟମରେ ଭୟଭୀତ କରି ନିଜ ବଶରେ ରଖିବାର କୌଶଳ।',
    'ସରଳ ଭାଷାରେ: ଶକ୍ତି, ପଦବୀ କିମ୍ବା ଧମକ ଦ୍ୱାରା ଅନ୍ୟକୁ ଭୟଭୀତ କରି ନିଜ କଥା ମନାଇବା।',
    'ଧମକାଇବା ହେଉଛି ଅନ୍ୟ ଉପରେ ନିଜର ବାହୁବଳ କିମ୍ବା ପଦବୀର ଦୁରୁପଯୋଗ କରି ନିୟନ୍ତ୍ରଣ ହାସଲ କରିବାର ଏକ ଅନୈତିକ ଉପାୟ।',
    'ଏହା ବିରୁଦ୍ଧରେ ଶାନ୍ତ ରହି ଦୃଢ଼ତା ସହ ସୀମା ନିର୍ଦ୍ଧାରଣ କରିବା ଉଚିତ।',
    [
      'ଦବଙ୍ଗଗିରି ଆଗରେ ମୁଣ୍ଡ ନୁଆଁନ୍ତୁ ନାହିଁ',
      'ଶାନ୍ତ ଭାବରେ ସ୍ପଷ୍ଟ ସୀମା ବଜାୟ ରଖନ୍ତୁ',
      'ଆବଶ୍ୟକ ସ୍ଥଳେ ଲିଖିତ ଅଭିଯୋଗ କରନ୍ତୁ',
    ]
  ),
  as: createLocalizedIntimidationRecord(
    'as',
    'ভাবুকি আৰু আধিপত্য প্ৰদৰ্শন: শক্তি আৰু পদমৰ্যাদাৰ অপব্যৱহাৰ প্ৰতিৰোধ',
    'ডাঙৰ মাত আৰু আক্ৰমণাত্মক ভংগীৰে ভয় দেখুৱাই বশ কৰাৰ মানসিকতাক বুজি উঠক।',
    'সহজ ভাষাত: শক্তি, পদবী বা ভাবুকি ব্যৱহাৰ কৰি আনক ভয় খুৱাই নিজৰ কথা মানিবলৈ বাধ্য কৰা।',
    'যেতিয়া কোনো ব্যক্তিয়ে নিজৰ স্থিতি বা শাৰীৰিক শক্তিৰ অহংকাৰ দেখুৱাই আনক দমন কৰে, তেতিয়া তাক ইন্টিমিডেচন বোলা হয়।',
    'ভয় নোখোৱাকৈ শান্ত আৰু দৃঢ়ভাৱে ইয়াৰ বিৰোধিতা কৰা উচিত।',
    [
      'ভাবুকিৰ আগত আত্মসমৰ্পণ নকৰিব',
      'শান্তভাৱে নিজৰ মৰ্যাদা ৰক্ষা কৰক',
      'আইনগত আৰু আনুষ্ঠানিক ব্যৱস্থা গ্ৰহণ কৰক',
    ]
  ),
};
