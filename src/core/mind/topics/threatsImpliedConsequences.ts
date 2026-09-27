import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 06: Threats and Implied Consequences
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Coercive Control & Interpersonal Subjugation (Stark, 2007)
 * - Coercive Action & Implicit Social Threats (Tedeschi & Felson, 1994)
 * - Ambient Dread & Chronic Stress Signaling (McEwen, 1998)
 * - The Architecture of Veiled and Plausibly Deniable Intimidation
 */

export const TOPIC_THREATS_IMPLIED_CONSEQUENCES_EN: MindTopicDetail = {
  id: 'threats_implied_consequences',
  categoryId: 'manipulation_awareness',
  slug: 'threats-and-implied-consequences',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 8,
  scientificConsensusTier: 'established',
  sortWeight: 6,
  viewCount: 5410,
  shareCount: 470,
  bookmarkCount: 890,
  title: 'Threats & Implied Consequences: Decoding Veiled Coercion & Ambient Dread',
  subtitle: 'Recognizing subtle warnings, plausibly deniable intimidation, and protecting autonomy without escalating conflict.',
  shortDescription: 'The strategic use of direct or veiled suggestions of harm, social ruin, or loss to compel obedience while preserving deniability.',
  oneLineExplanation: 'In simple terms: Hinting that something terrible will happen to you if you don’t obey, while phrasing it just carefully enough to deny they ever threatened you.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'Threats and implied consequences work by cultivating ambient dread. Unlike overt aggression, implied threats are often masked in sweet concern or ominous ambiguity: "It would be such a shame if something happened to your career," or "I would hate for your family to hear about this." By leaving the threat unstated, the manipulator activates your worst fears while maintaining complete plausible deniability if confronted.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Formulated in sociocognitive conflict theory (Tedeschi & Felson, 1994), coercive influence operates on anticipation of cost. An overt threat ("Do this or I will fire you") carries high reputational and legal risk for the perpetrator. An implied threat shifts the psychological labor to the victim: your imagination fills in the terrifying blanks, while the aggressor can retreat behind "I was only offering friendly advice!" if challenged.',
  summary60s: 'Human beings have an extraordinary capacity for threat detection. When a colleague says, "You know how delicate the CEO’s temper is regarding team loyalty," your nervous system interprets this as an implicit threat of dismissal, even though the word "fired" was never uttered. Manipulators exploit this cognitive pattern matching. They pair benign syntax with menacing paralanguage (prolonged eye contact, dropping vocal pitch, ominous pauses) to paralyze boundary defense. Because the coercion is unspoken, the victim second-guesses their instincts, wondering: "Are they threatening me, or am I being paranoid?"',

  quickTakeaways: [
    'The Plausible Deniability Shield: Veiled threats are designed so the speaker can always claim: "I was only trying to help you!"',
    'Ambient Dread: Implied threats linger longer than direct ones because your own brain invents the worst-case scenario',
    'Transparent Policy vs. Veiled Coercion: Legitimate consequences are objective, written, and proportional; manipulative threats are ambiguous and personal',
    'The "Name and Clarify" Counter: Forcing implicit threats into explicit daylight immediately disarms deniability',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Ambiguity amplifies threat perception. Bruce McEwen’s research on allostatic load demonstrates that unpredictable or unconfirmed danger activates chronic sympathetic nervous system arousal. When a threat is vague, the brain cannot calculate a precise defense, leading to cognitive fatigue, hypervigilance, and compliant appeasement to restore perceived safety.',
  evolutionaryMechanism: 'In social primates, dominant rivals frequently use sub-lethal veiled displays (glaring, jaw clenching, showing canines) before physical combat. Subordinates evolved to detect and preempt these cues to avoid fatal violence. Manipulators hijack this evolved sensitivity to force submission without expending energy on physical confrontation.',

  // SECTION E — WHY MIGHT SOMEONE USE THIS PATTERN?
  howItWorks: 'Perpetrators favor implied threats because they circumvent institutional rules against harassment. An HR department or court struggles to penalize a sentence that reads politely on paper. In personal relationships, it preserves the speaker’s moral self-image as a loving partner while keeping the other person walking on eggshells.',
  whereYouEncounterIt: 'Corporate politics, tenancy and property disputes, authoritarian parenting, political backrooms, and covertly abusive romantic relationships.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Phrasing demands as "friendly advice" with ominous subtext ("I’m just telling you for your own good...")',
    'Hypothetical disaster stories featuring people who defied them ("Remember what happened to Sharma when he spoke up?")',
    'Conspicuous references to your private vulnerabilities during disagreements (mentioning your debt, visa status, or family secrets)',
    'Sudden shifts in body language: intense, unblinking eye contact paired with a soft, chillingly calm voice',
    'Gaslighting if questioned: "How could you think that? I was just trying to protect you!"',
  ],

  // SECTION G — NORMAL BEHAVIOR VS UNHEALTHY PATTERN
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Transparent Stated Boundaries vs. Veiled Manipulative Threats',
    description: 'Distinguishing professional, documented accountability from coercive ambient intimidation.',
    analogySideA: {
      label: 'Transparent Stated Boundary (Objective & Accountable)',
      detail: '"If the project deliverables are not submitted by Friday, company policy requires a formal performance review with HR." (Clear, documented, proportional, impersonal).',
    },
    analogySideB: {
      label: 'Implied Manipulative Threat (Ambiguous & Personal)',
      detail: '"It would be terrible if your reputation in this company took a hit right before bonus season. You wouldn’t want that, would you?" (Veiled, deniable, personal terror).',
    },
  },

  // SECTION H, I, J — REAL-LIFE EXAMPLES & INDIAN CONTEXT
  examples: [
    {
      id: 'tic_ex_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The "Friendly Caution" in the Hallway',
      description: 'A project manager approaches an engineer who objected to cutting safety tests: "Look, I like you. That’s why I’m warning you: the VP values team players above all else. People who make waves tend to find their desks moved to the basement, or worse. Just think about your promotion next quarter before you raise your hand in tomorrow’s all-hands."',
      takeaway: 'Notice how the threat is disguised as personal loyalty and mentorship, making direct confrontation awkward.',
    },
    {
      id: 'tic_ex_02',
      domain: 'relationships',
      displayOrder: 2,
      title: 'The Relational Vulnerability Drop',
      description: 'During a disagreement about weekend plans, a partner casually mentions: "You know, my mother always warned me that people with your background struggle to stay faithful. I’d hate to think she was right. It would break my heart if I had to rethink our engagement."',
      takeaway: 'Leveraging existential relationship dissolution over a minor logistical preference.',
    },
  ],

  scenarios: [
    {
      id: 'tic_scen_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'The Ancestral Property Disinheritance Hint',
      narrativeContext: 'Vikram, a 28-year-old graphic designer in Delhi, informs his family that he wants to move out of the joint-family residence into an apartment closer to his design studio. His uncle, who manages the family business and ancestral property trusts, sits down beside him, sips his chai, and murmurs: "Beta, independence is a very modern idea. But remember, the family trust will be divided among those who respect our traditions and stay under this roof. Your cousin Rahul is always here. It would be very sad if your name was missing from the revenue registry next Diwali because you were too busy enjoying city life."',
      biasInAction: 'The uncle avoids directly shouting or stating "You are cut off," but deliberately pairs ancestral wealth deprivation with modern autonomy to create paralyzing ambient anxiety.',
      optimalResponse: 'Bring the veiled consequence into explicit clarity without aggression: "Uncle ji, I respect our family and traditions deeply. But my career requires me to live closer to work. If you are stating that living near my office disqualifies me from my lawful inheritance, let us sit with our lawyer and discuss the trust deed openly tomorrow."',
      reflectionPrompt: 'Have you ever had an elder or supervisor offer "advice" that felt like a cold knife held to your throat, leaving you wondering if you were overreacting?',
    },
  ],

  // SECTION K — SPOT THE PATTERN (Interactive Scenario)
  interactiveScenarios: [
    {
      id: 'scen_tic_01',
      topicId: 'threats_implied_consequences',
      title: 'Spot the Pattern: The "Plausibly Deniable" Vendor Meeting',
      contextVignette: 'You are auditing procurement invoices at work and notice irregular payments to a specific contractor. The contractor stops by your desk with a coffee, smiles warmly, and says: "You’re doing very thorough work! You know, my brother is the Deputy Police Commissioner in your hometown where your parents live. Small world, isn’t it? Anyway, let’s make sure these invoices get approved smoothly this week."',
      vignetteSourceType: 'workplace',
      question: 'What is the most accurate psychological and procedural assessment of this statement?',
      options: [
        {
          id: 'opt_tic_a',
          label: 'A',
          text: 'It is a friendly piece of small talk celebrating a happy coincidence about hometown connections.',
          explanation: 'Naive denial. Bringing up family location and law enforcement connections in an audit dispute is textbook veiled coercion.',
          isCorrect: false,
        },
        {
          id: 'opt_tic_b',
          label: 'B',
          text: 'It is a calculated implied threat leveraging your parents’ physical security to extract fraudulent financial compliance, executed with plausible deniability.',
          explanation: 'Correct. Linking family residence with police power during an audit negotiation is a deliberate intimidation tactic designed to bypass formal paper trails.',
          isCorrect: true,
        },
        {
          id: 'opt_tic_c',
          label: 'C',
          text: 'Immediately approve the invoices to keep your parents safe without telling anyone.',
          explanation: 'Submission makes you complicit in criminal procurement fraud and exposes you to future escalating extortion.',
          isCorrect: false,
        },
      ],
      revealedExplanation: {
        correctSummary: 'Recognize the anatomy of implied threats: Unrelated vulnerability drop + Urgent compliance demand.',
        whyItMatters: 'Veiled threats seek to bypass whistleblowing procedures. Documenting the verbatim conversation immediately establishes legal evidence.',
        cognitiveTrap: 'Normalcy Bias: Wanting to believe the speaker is just making polite conversation rather than intimidating you.',
        actionableAntidote: 'The "Verbatim Memo": Write down the exact date, time, words, and context immediately, and notify corporate compliance or legal counsel.',
      },
      difficulty: 'hard',
      culturalContext: 'indian_general',
    },
  ],

  // SECTION L & Q — "BUT BE CAREFUL" & LIMITATIONS
  limitationsAndControversies: 'Caution: Distinguish authentic disclosure of inevitable natural consequences from manipulative threats. If a bank warns: "Late payments will result in a 2% penalty as outlined in your loan agreement," that is a contractual fact. If a doctor warns: "Untreated hypertension increases stroke risk," that is medical science. A manipulative threat requires artificial manufacture of harm by the speaker to force compliance.',

  // SECTION M & N — HOW TO RESPOND & SCRIPTS
  howToRespond: 'Apply the "DAYLIGHT & DOCUMENT" Protocol: (1) Call Out the Ambiguity: Force the veiled subtext into direct speech: "Are you saying that..."; (2) Maintain Physical Calm: Drop your vocal tone to deny them the emotional payoff of seeing you sweat; (3) Create Written Records: Follow up ambiguous oral statements with a confirmatory email.',
  psychologicalDefenses: [
    {
      title: 'The Subtext Clarifier',
      instruction: 'Say calmly: "That sounds like a warning. Are you stating that if I do not agree with you, you will take steps against my position?"',
    },
    {
      title: 'The Written Confirmation Trap',
      instruction: 'Send an email within one hour: "Per our hallway conversation, you mentioned that proceeding with the audit might impact my family standing. Please confirm if I understood your guidance correctly."',
    },
    {
      title: 'The Boundary Hold',
      instruction: 'Say: "I make decisions based on merit and documented policy, not unspoken consequences. Let us discuss the facts."',
    },
    {
      title: 'The Legal Escalation Protocol',
      instruction: 'If veiled physical or economic threats are repeated, consult an attorney, notify internal audit/compliance, or register an official police diary (NCR/GD entry).',
    },
  ],

  // SECTION P — RESEARCH & CITATIONS
  researchSummary: 'Evan Stark’s (2007) foundational work on "Coercive Control" established that interpersonal subjugation relies far more heavily on continuous ambient threat, surveillance, and micro-consequences than isolated physical explosions. Tedeschi & Felson (1994) showed that veiled coercion is strategically selected by perpetrators to minimize institutional retribution while maximizing target compliance. McEwen (1998) demonstrated that living under ambiguous threat creates chronic allostatic load, impairing executive cognitive control.',

  references: [
    {
      id: 'tic_ref_01',
      title: 'Coercive Control: How Men Entrap Women in Personal Life',
      citation: 'Stark, E. (2007). Oxford University Press.',
      authors: 'Evan Stark',
      publicationYear: 2007,
      journalOrPublisher: 'Oxford University Press',
      sourceType: 'academic_textbook',
      evidenceStrength: 'foundational_book',
      doiOrUrl: 'https://doi.org/10.1093/acprof:oso/9780195384048.001.0001',
      relevance: 'Foundational framework demonstrating how ambient implied threat strips individual sovereignty.',
      displayOrder: 1,
    },
    {
      id: 'tic_ref_02',
      title: 'Violence, Aggression, and Coercive Actions',
      citation: 'Tedeschi, J. T., & Felson, R. B. (1994). American Psychological Association.',
      authors: 'James T. Tedeschi, Richard B. Felson',
      publicationYear: 1994,
      journalOrPublisher: 'American Psychological Association',
      sourceType: 'academic_textbook',
      evidenceStrength: 'foundational_book',
      doiOrUrl: 'https://doi.org/10.1037/10160-000',
      relevance: 'Sociocognitive taxonomy of implicit threats and decision calculus in coercive interpersonal bargaining.',
      displayOrder: 2,
    },
    {
      id: 'tic_ref_03',
      title: 'Protective and damaging effects of stress mediators',
      citation: 'McEwen, B. S. (1998). New England Journal of Medicine, 338(3), 171–179.',
      authors: 'Bruce S. McEwen',
      publicationYear: 1998,
      journalOrPublisher: 'New England Journal of Medicine',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_meta_analysis',
      doiOrUrl: 'https://doi.org/10.1056/NEJM199801153380307',
      relevance: 'Clinical proof of how chronic ambient dread and anticipatory stress wear down neurobiological resilience.',
      displayOrder: 3,
    },
  ],

  // SECTION R — COMMON MYTHS
  commonMisconceptions: 'Myth: "If someone never explicitly said \'I will hurt you,\' it cannot legally or psychologically be considered a threat." Reality: Psychological and forensic research proves that veiled, contextual intimidation produces identical or higher trauma compared to explicit threats because ambiguity fuels hypervigilance.',

  // SECTION S — REFLECTION PROMPT
  reflectionPrompt: 'Have you ever felt paralyzed by a conversation where every word sounded polite on paper, but your gut knew you were being backed into a corner?',

  // SECTION T — PRACTICE QUESTIONS (6 Distinct Questions)
  practiceQuestions: [
    {
      id: 'tic_pq_01',
      questionType: 'identify_influence_principle',
      question: 'What is the primary psychological purpose of keeping an implied threat ambiguous rather than stating it explicitly?',
      options: [
        {
          id: 'opt_1',
          optionText: 'It gives the perpetrator plausible deniability while forcing the victim’s imagination to amplify the dread.',
          isCorrect: true,
          feedbackText: 'Correct. Plausible deniability protects the aggressor, and ambiguity forces the victim into worst-case scenario panic.',
        },
        {
          id: 'opt_2',
          optionText: 'Because the speaker forgot what they were going to say.',
          isCorrect: false,
          feedbackText: 'Veiled threats are deliberate tactical communication patterns.',
        },
        {
          id: 'opt_3',
          optionText: 'To help the victim sleep better at night.',
          isCorrect: false,
          feedbackText: 'Ambiguity produces insomnia and hypervigilance, not comfort.',
        },
      ],
      cognitiveTakeaway: 'Ambiguity weaponizes the target\'s own imagination while shielding the aggressor from accountability.',
    },
    {
      id: 'tic_pq_02',
      questionType: 'distinction',
      question: 'How does an authentic organizational policy differ from a veiled manipulative threat?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Authentic policy is written, transparent, universally applied, and impersonal; manipulative threats are ambiguous, selective, and weaponize personal vulnerabilities.',
          isCorrect: true,
          feedbackText: 'Correct. Genuine governance relies on published transparency, not ominous hallway whispers.',
        },
        {
          id: 'opt_2',
          optionText: 'Policies are always communicated via email, while threats are only spoken.',
          isCorrect: false,
          feedbackText: 'Both can occur in writing or speech; the distinction is transparency and procedural justice.',
        },
        {
          id: 'opt_3',
          optionText: 'There is no difference; all expectations in life are threats.',
          isCorrect: false,
          feedbackText: 'Fair contracts and healthy boundaries are essential for social trust.',
        },
      ],
      cognitiveTakeaway: 'Procedural transparency distinguishes legitimate governance from coercive extortion.',
    },
    {
      id: 'tic_pq_03',
      questionType: 'scenario_analysis',
      question: 'A supervisor tells an analyst: "You’re doing great, but remember: the job market is brutal right now, and loyalty is the only thing protecting anyone here." What tactic is being deployed?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Veiled existential threat: cultivating ambient economic insecurity to suppress questioning of unreasonable demands.',
          isCorrect: true,
          feedbackText: 'Correct. Leverages broad economic terror to force unconditional compliance without direct documentation.',
        },
        {
          id: 'opt_2',
          optionText: 'A routine performance evaluation.',
          isCorrect: false,
          feedbackText: 'Objective reviews assess KPIs and deliverables, not existential employment dread.',
        },
        {
          id: 'opt_3',
          optionText: 'Empathetic career mentorship.',
          isCorrect: false,
          feedbackText: 'True mentorship empowers competence rather than instilling precarity.',
        },
      ],
      cognitiveTakeaway: 'Economic precarity references are often deployed to silence ethical or technical dissent.',
    },
    {
      id: 'tic_pq_04',
      questionType: 'best_response',
      question: 'What is the most effective psychological technique to disarm an implied threat in a business or personal conversation?',
      options: [
        {
          id: 'opt_1',
          optionText: 'The "Subtext Clarifier": Calmly ask them to state their unsaid meaning explicitly in plain language.',
          isCorrect: true,
          feedbackText: 'Correct. Dragging implicit subtext into explicit daylight shatters plausible deniability.',
        },
        {
          id: 'opt_2',
          optionText: 'Threaten to physically harm them immediately.',
          isCorrect: false,
          feedbackText: 'Escalates to criminal liability and physical danger.',
        },
        {
          id: 'opt_3',
          optionText: 'Smile nervously and agree to whatever they want.',
          isCorrect: false,
          feedbackText: 'Submission validates the tactic and guarantees escalating extortion.',
        },
      ],
      cognitiveTakeaway: 'Forcing veiled subtext into plain daylight neutralizes manipulative ambiguity.',
    },
    {
      id: 'tic_pq_05',
      questionType: 'what_would_you_do',
      question: 'A relative says during an argument: "You keep standing on your principles. But remember who pays for your grandmother’s assisted living care. It would be tragic if that had to stop." How should you handle this?',
      options: [
        {
          id: 'opt_1',
          optionText: 'State calmly: "Grandmother’s medical care should never be weaponized as leverage in our disagreement. Let us keep her well-being separate from our personal dispute."',
          isCorrect: true,
          feedbackText: 'Correct. Directly labels the ethical hostage-taking while holding personal dignity.',
        },
        {
          id: 'opt_2',
          optionText: 'Immediately surrender your life choices to keep the money flowing.',
          isCorrect: false,
          feedbackText: 'Reinforces financial hostage-taking indefinitely.',
        },
        {
          id: 'opt_3',
          optionText: 'Refuse to ever speak to anyone in your family again.',
          isCorrect: false,
          feedbackText: 'Extreme isolation can harm safety and complicates grandmother\'s care.',
        },
      ],
      cognitiveTakeaway: 'Refuse to allow vulnerable third parties to be held as emotional hostages.',
    },
    {
      id: 'tic_pq_06',
      questionType: 'misconception_detection',
      question: 'Why do victims of chronic implied threats often suffer from severe exhaustion and allostatic load (McEwen, 1998)?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Because the ambiguity prevents the brain from entering either full rest or decisive action, keeping the nervous system trapped in constant anticipatory hypervigilance.',
          isCorrect: true,
          feedbackText: 'Correct. Unresolved ambient threat produces unrelenting stress hormone elevation.',
        },
        {
          id: 'opt_2',
          optionText: 'Because people who experience threats are physically weak.',
          isCorrect: false,
          feedbackText: 'Allostatic load is a neurobiological consequence of prolonged threat, not personal weakness.',
        },
        {
          id: 'opt_3',
          optionText: 'Because words have no biological impact on human bodies.',
          isCorrect: false,
          feedbackText: 'Psychological threats trigger identical neuroendocrine cascades to physical threats.',
        },
      ],
      cognitiveTakeaway: 'Chronic ambiguous threat keeps the autonomic nervous system on high alert, causing systemic exhaustion.',
    },
  ],

  // VISUAL CONTENT
  visualContent: {
    id: 'vis_threats_implied',
    type: 'comparison_graphic',
    title: 'The Spectrum of Coercion: From Transparent Boundaries to Veiled Threats',
    altText: 'A conceptual diagram contrasting Transparent Consequences (documented, predictable, proportional) with Veiled Threats (ambiguous, deniable, ambient dread).',
    caption: 'Figure 1: Coercion Spectrum: How veiled threats hide behind plausible deniability while inflicting chronic psychological pressure.',
    interactiveExplanation: 'When consequence language shifts from published objective standards to ambiguous personal hints, you are dealing with coercive manipulation.',
  },

  // TAGS & RELATED TOPICS
  tags: ['Manipulation Awareness', 'Threats & Implied Consequences', 'Coercive Control', 'Plausible Deniability', 'Workplace Politics', 'Boundaries'],
  relatedTopics: [
    {
      topicId: 'intimidation',
      slug: 'intimidation',
      title: 'Intimidation',
      relationshipType: 'amplified_by',
    },
    {
      topicId: 'emotional_blackmail',
      slug: 'emotional-blackmail',
      title: 'Emotional Blackmail',
      relationshipType: 'progresses_to',
    },
    {
      topicId: 'fear_based_persuasion',
      slug: 'fear-based-persuasion',
      title: 'Fear-Based Persuasion',
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
  seoTitle: 'Threats & Implied Consequences: Meaning, Signs & Defense Scripts | Mentalab Mind',
  seoDescription: 'Learn how to recognize veiled threats and implied consequences in relationships and the workplace. Decode plausible deniability and assert boundaries safely.',
  canonicalUrl: '/mind/manipulation-awareness/threats-and-implied-consequences',
  ogImageUrl: '/images/mind/threats-and-implied-consequences.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Implied threats leverage sociocognitive ambiguity and anticipatory dread to extract compliance without incurring overt accountability.',
};

/**
 * High-Quality Hinglish Translation
 */
export const TOPIC_THREATS_IMPLIED_CONSEQUENCES_HINGLISH: MindTopicDetail = {
  ...TOPIC_THREATS_IMPLIED_CONSEQUENCES_EN,
  title: 'Threats & Implied Consequences: Chhupi Hui Dhamkiyon Ko Samjhein',
  subtitle: 'Jaaniye veiled threats aur "kuch bura ho sakta hai" ke darr ko kaise pehchanein, aur bina lade clear boundaries kaise set karein.',
  shortDescription: 'Apni baat manwane ke liye seedha bolne ke bajaye aisi baatein kehna jisse samne wale ko darr lage, par kehne wala baad me mukar sake.',
  oneLineExplanation: 'In simple terms: Aise andaaz me darr dikhana ki baat bhi keh di jaye aur kal ko mukar bhi sakein ki "maine to aisa kuch nahi kaha tha".',

  summary30s: 'Threats and implied consequences tab hoti hain jab koi khulkar dhamki nahi deta, balki meethi baaton ya chuppi me aisi baat bolta hai jisse aapke pet me darr ka gola ban jaye. Jaise: "Aapke career ke liye bohot bura hoga agar yeh baat bahar gayi," ya "Main nahi chahta ki aapke gharwalon ko yeh pata chale." Saamne wala baat aadhi bolta hai, aur aapka dimaag bura se bura anjaam soch kar darr ke maare surrender kar deta hai.',

  coreConcept: 'Psychology me isse "veiled threat" ya "plausibly deniable coercion" kehte hain. Seedhi dhamki ("main tumhe nikal dunga") dene par police ya HR action le sakta hai. Isliye manipulator gol-mol baat bolta hai taaki aap darr bhi jayein aur kal ko koi sawal kare toh wo bole: "Are main to bas tumhara bhala soch kar advice de raha tha!"',
  summary60s: 'Insaan ka dimaag khatre ko jaldi pehchanta hai. Jab boss bolta hai: "Company me loyalty bohot zaroori hai, wave banane wale log achanak gayab ho jaate hain," toh aap samajh jaate hain ki naukri khatre me hai. Manipulator aapki isi thinking ka use karta hai. Wo baaton me aisi personal cheezein le aata hai—jaise aapka loan, aapke secrets ya aapke parivar ki izzat. Aapko lagta hai ki kya main pagal hu ya yeh sach me dhamki de raha hai?',

  quickTakeaways: [
    'Plausible Deniability: Dhamki aise di jati hai taaki baad me kaha ja sake "main to bas friendly advice de raha tha"',
    'Ambient Dread: Chhupi hui dhamki zyada pareshan karti hai kyunki dimaag worst-case scenario sochta rehta hai',
    'Real Rules vs Veiled Coercion: Asli rule written aur sabke liye barabar hota hai; manipulative threat personal aur ambiguous hoti hai',
    'Daylight Rule: Chhupi hui dhamki ko seedhe shabdon me publicly clarify karna iska sabse bada tod hai',
  ],

  whyItHappens: 'Ambiguity (aspathta) se darr double ho jata hai. Jab khatra saaf nahi hota, toh brain ka fight-or-flight mode lagatar on rehta hai. Is continuous stress ki wajah se insaan thak kar samne wale ke aage ghutne tek deta hai.',
  evolutionaryMechanism: 'Jungali janwar ladne se pehle daant dikhate hain aur ghoorte hain taaki samne wala bina lade haar maan le. Manipulators isi primitive signal ka use karte hain.',

  howItWorks: 'Log iska use isliye karte hain kyunki iska koi written proof nahi banta. Corporate politics me, joint families me property ke jhagdo me, aur toxic rishton me log bina badnaam huye control karte hain.',
  whereYouEncounterIt: 'Office appraisals me, joint family property disputes me, aur controlling dating partners ke sath.',

  howToRecognize: [
    '"Main to bas tumhare bhalay ke liye keh raha hu" bolkar aage nuksaan ka hint dena',
    'Purane kisi insaan ka example dena jisko unhone barbad kar diya tha ("Yaad hai Sharma ji ke sath kya hua tha?")',
    'Ladai ke beech achanak aapki personal kamzori ya family secret ka zikr chhedna',
    'Aankhon me ajeeb si chilling look aur aawaz achanak bohot dheemi aur gambhir kar lena',
    'Agar aap poochhein toh turant palat jana: "Tum kitna negative sochte ho! Maine aisa kab kaha?"',
  ],

  examples: [
    {
      id: 'tic_ex_hi_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Hallway Me Di Gayi "Friendly Caution"',
      description: 'Senior manager cubicle ke paas aakar bolta hai: "Dekho, main tumhara dost hu isliye samjha raha hu. Board ko team players pasand hain. Jo log audit me zyada sawal puchte hain, unki promotion list se naam gayab ho jata hai. Kal ki meeting se pehle thoda dhyan rakhna."',
      takeaway: 'Notice karein ki dhamki ko "dosti aur mentorship" ka roop dekar pesh kiya gaya.',
    },
  ],

  scenarios: [
    {
      id: 'tic_scen_hi_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'Khandaani Property Se Bedakhal Karne Ka Hint',
      narrativeContext: 'Vikram (28, Delhi me graphic designer) apni joint family ko batata hai ki wo studio ke paas ek rent apartment me shift hona chahta hai. Uske bade chacha ji chai peete huye aaram se bolte hain: "Beta, azaadi achhi baat hai. Lekin yaad rakhna, khandaani business aur zameen unhi ko milti hai jo chhat ke neeche rehte hain. Rahul to hamesha ghar par hi rehta hai. Bura lagega agar agli Diwali par registry se tumhara naam hat jaye bas isliye kyunki tum akele rehna chahte the."',
      biasInAction: 'Chacha ji ne chillakar nahi bola, lekin azaadi maangne par khandaani haq cheen lene ka veiled darr dimag me daal diya.',
      optimalResponse: 'Chhupi hui baat ko khulkar clear karein: "Chacha ji, main family ki bohot izzat karta hu, lekin kaam ke liye paas rehna zaroori hai. Agar studio ke paas rehne se property trust par asar padta hai, toh kal lawyer ke sath baithkar trust deed dekh lete hain."',
      reflectionPrompt: 'Kya aapko kisi ne kabhi "main to tumhare bhale ke liye bol raha hu" bolkar aisi baat boli hai jisse aap andar se hil gaye hon?',
    },
  ],

  limitationsAndControversies: 'Caution: Har warning manipulation nahi hoti. Agar bank bolta hai ki "Late payment par 2% fine lagega jo agreement me likha hai," toh yeh transparent fact hai. Agar doctor bolta hai ki "Smoking band nahi ki toh heart attack ka risk hai," yeh medical truth hai. Threat tab manipulation banti hai jab bolne wala khud aapse apna kaam nikalwane ke liye darr create kare.',

  howToRespond: 'DAYLIGHT & DOCUMENT Rule: (1) Force the Subtext: Chhupi hui baat ko seedhe sawal me badlein: "Kya aap yeh keh rahe hain ki..."; (2) Body Language Calm Rakhein: Unhe yeh mat dikhne dein ki aap darr gaye hain; (3) Written Record Banayein: Baat ke baad turant email ya chat par confirmatory message bhein.',
  psychologicalDefenses: [
    {
      title: 'Subtext Clarification Script',
      instruction: 'Bolein: "Yeh baat warning jaisi lag rahi hai. Kya aap saaf shabdon me bata sakte hain ki agar main agree na karu toh kya hoga?"',
    },
    {
      title: 'Written Email Followup',
      instruction: 'Meeting ke baad email bhejein: "Aapne jo baat kahi thi ki audit report submit karne par career par asar pad sakta hai, kya aap ise clarify kar sakte hain?"',
    },
    {
      title: 'Merit Par Tike Rahein',
      instruction: 'Bolein: "Main decision rules aur facts par leta hu, hints par nahi. Baat ko clear rakhein."',
    },
    {
      title: 'Formal Record Protocol',
      instruction: 'Agar dhamki serious ho, toh chup rehne ke bajaye internal compliance ya legal expert se advise lein.',
    },
  ],

  researchSummary: 'Evan Stark (2007) ke mutabiq Coercive Control me physically ladne ke bajaye ambient darr ka mahol banaya jata hai. Tedeschi & Felson (1994) ne dikhaya ki manipulators veiled threats isliye dete hain taaki un par koi legal blame na aaye. Bruce McEwen (1998) ne prove kiya ki aise darr me jeene se dimaag aur shareer jaldi thak jata hai.',

  references: TOPIC_THREATS_IMPLIED_CONSEQUENCES_EN.references,
  commonMisconceptions: 'Myth: "Agar kisi ne direct gaali ya dhamki nahi di, toh wo threat nahi hai." Reality: Psychology aur law dono maante hain ki context aur darr paida karne ka tareeqa implied threat ko utna hi dangerous banata hai.',

  reflectionPrompt: 'Kya aapke sath kabhi hua hai ki kisi ki meethi baaton me aisi dhamki chhupi thi jiska jawab aap us waqt nahi de paaye?',

  practiceQuestions: TOPIC_THREATS_IMPLIED_CONSEQUENCES_EN.practiceQuestions,
  visualContent: TOPIC_THREATS_IMPLIED_CONSEQUENCES_EN.visualContent,
  tags: TOPIC_THREATS_IMPLIED_CONSEQUENCES_EN.tags,
  relatedTopics: TOPIC_THREATS_IMPLIED_CONSEQUENCES_EN.relatedTopics,
  seoTitle: 'Chhupi Hui Dhamki (Implied Threats) Ko Kaise Pehchanein | Mentalab Mind',
  seoDescription: 'Veiled threats aur implied consequences ki psychology samjhein. Janiye kaise log darr dikhakar mukar jaate hain aur kaise unhe disarm karein.',
  canonicalUrl: '/mind/manipulation-awareness/threats-and-implied-consequences',
  ogImageUrl: '/images/mind/threats-and-implied-consequences.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Implied threats sociocognitive ambiguity aur ambient dread ka use karke boundary dismantle karti hain.',
};

/**
 * Localized Helper
 */
function createLocalizedThreatsRecord(
  langCode: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_THREATS_IMPLIED_CONSEQUENCES_EN,
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

export const TOPIC_THREATS_IMPLIED_CONSEQUENCES: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_THREATS_IMPLIED_CONSEQUENCES_EN,
  hinglish: TOPIC_THREATS_IMPLIED_CONSEQUENCES_HINGLISH,
  hi: createLocalizedThreatsRecord(
    'hi',
    'धमकियां और निहित परिणाम: अप्रत्यक्ष भय, अस्पष्ट दबाव और आत्मरक्षा',
    'गोल-मोल चेतावनियों, परोक्ष धमकियों और निरंतर आतंक के मनोविज्ञान को समझें और निडर होकर सीमाएं बनाएं।',
    'सरल शब्दों में: नुकसान की ऐसी परोक्ष चेतावनी देना जिससे सामने वाला डर भी जाए और बाद में मुकरने की गुंजाइश भी रहे।',
    'धमकियां और निहित परिणाम तब सामने आते हैं जब कोई व्यक्ति सीधे चिल्लाने के बजाय अस्पष्ट या मीठी भाषा में भयानक परिणामों का संकेत देता है। जैसे: "आपके करियर के लिए बहुत बुरा होगा यदि यह बात आगे बढ़ी।" स्पष्ट न कहने से आपका दिमाग खुद सबसे बुरे नतीजे की कल्पना करके भयभीत हो जाता है।',
    'टेडेशी और फेलसन (1994) के अनुसार, अप्रत्यक्ष धमकियों का उपयोग इसलिए किया जाता है ताकि कानूनी या संस्थागत कार्रवाई से बचा जा सके और पीड़िता पर मनोवैज्ञानिक आतंक बना रहे।',
    [
      'पलायन की रणनीति: परोक्ष धमकी देने वाला हमेशा यह दावा कर सकता है कि वह केवल सलाह दे रहा था',
      'सतत आतंक: अस्पष्ट धमकियां अधिक समय तक परेशान करती हैं क्योंकि कल्पना सबसे बुरे परिणाम गढ़ती है',
      'पारदर्शी नियम बनाम परोक्ष दबाव: वैध नियम लिखित और समान होते हैं; दबाव व्यक्तिगत और अस्पष्ट होता है',
      'स्पष्टीकरण का नियम: छिपी हुई धमकी को सीधे शब्दों में सामने लाकर प्रश्न पूछना इसका सबसे बड़ा तोड़ है',
    ]
  ),
  gu: createLocalizedThreatsRecord(
    'gu',
    'ધમકીઓ અને ગર્ભિત પરિણામો: પરોક્ષ દબાણ અને છૂપી ચેતવણીઓ સામે રક્ષણ',
    'સ્પષ્ટ બોલ્યા વગર ડર ઊભો કરવાની યુક્તિઓને ઓળખો અને શાંતિથી સ્પષ્ટતા માંગો.',
    'સરળ શબ્દોમાં: નુકસાનનો એવો ઈશારો કરવો જેથી સામેવાળો ડરી જાય પરંતુ સાબિત ન કરી શકાય.',
    'જ્યારે કોઈ સીધી ધમકી આપવાને બદલે એવા શબ્દો વાપરે છે જેનો અર્થ ભયાનક નુકસાન થાય, ત્યારે તેને ગર્ભિત ધમકી કહે છે.',
    'આવી ધમકીઓ સામે ડર્યા વગર બધું લિખિતમાં રાખવું અને ખુલ્લી વાતચીત કરવી જરૂરી છે.',
    [
      'છૂપી ધમકીઓને ઓળખો',
      'વાતચીતને લેખિત પુરાવામાં ફેરવો',
      'અસ્પષ્ટ વાતો પર સીધો ખુલાસો માંગો',
    ]
  ),
  mr: createLocalizedThreatsRecord(
    'mr',
    'अप्रत्यक्ष धमक्या आणि परिणाम: छुप्या भीतीचे मानसशास्त्र आणि उपाय',
    'स्पष्ट न बोलता भीती निर्माण करून आपले काम करून घेण्याच्या पद्धती ओळखा.',
    'सोप्या भाषेत: मोठे नुकसान होण्याचा असा इशारा देणे की समोरचा घाबरेल, पण पुरावा राहणार नाही.',
    'अप्रत्यक्ष धमक्यांमध्ये व्यक्ती गोड बोलून किंवा इशारे देऊन करिअर किंवा कुटुंबाचे नुकसान होण्याची भीती दाखवते.',
    'भीतीपोटी शरण न जाता स्पष्ट आणि लेखी स्वरूपात संवाद साधणे हाच यावर उपाय आहे.',
    [
      'अस्पष्ट भीतीला बळी पडू नका',
      'इशारे समजून न घेता स्पष्ट प्रश्न विचारा',
      'महत्त्वाच्या बाबींचे लेखी पुरावे ठेवा',
    ]
  ),
  bn: createLocalizedThreatsRecord(
    'bn',
    'হুমকি ও পরোক্ষ পরিণতি: অদৃশ্য ভীতি ও মানসিক জবরদস্তি প্রতিরোধ',
    'সরাসরি না বলে মিষ্টি ভাষায় বা ইঙ্গিতে চরম বিপদের ভয় দেখানোর অপকৌশল।',
    'সহজ কথায়: এমনভাবে ভয়ের ইঙ্গিত দেওয়া যাতে অন্যজন আতঙ্কিত হয় কিন্তু সরাসরি প্রমাণ না থাকে।',
    'পরোক্ষ হুমকি হলো এমন এক কৌশল যেখানে ভবিষ্যৎ ধ্বংস বা সামাজিক সম্মানের ভয় দেখিয়ে বাধ্য করা হয়, অথচ আক্রমণকারী নির্দোষ সাজার সুযোগ রাখে।',
    'এই ধরণের মানসিক চাপের মুখে শান্ত থেকে লিখিত তথ্যের ভিত্তিতে অবস্থান নেওয়া উচিত।',
    [
      'অস্পষ্ট ভয়ের ফাঁদ চিনুন',
      'মৌখিক ইঙ্গিতের স্পষ্ট লিখিত ব্যাখ্যা চান',
      'অযৌক্তিক চাপের কাছে মাথা নত করবেন না',
    ]
  ),
  ta: createLocalizedThreatsRecord(
    'ta',
    'மிரட்டல்கள் மற்றும் மறைமுக விளைவுகள்: மறைமுக பயமுறுத்தல்களை எதிர்கொள்ளுதல்',
    'வெளிப்படையாக மிரட்டாமல் குறிப்பால் உணர்த்தி பணிய வைக்கும் உளவியல் தந்திரம்.',
    'எளிய சொற்களில்: எதிர்காலத்தில் ஆபத்து நேரிடும் என்று நாசூக்காக எச்சரித்து அடிபணிய வைப்பது.',
    'நேரடியாக அச்சுறுத்தாமல் உறவுகள் அல்லது வேலைக்கு ஆபத்து வரும் என்று குறிப்பால் உணர்த்துவதே மறைமுக மிரட்டலாகும்.',
    'பதற்றமடையாமல் அவர்களின் உள்நோக்கத்தை வெளிப்படையாகக் கேட்டு எல்லைகளைக் காப்பதே சிறந்தது.',
    [
      'மறைமுக பயமுறுத்தல்களுக்குப் பணியாதீர்கள்',
      'எல்லாவற்றையும் ஆவணப்படுத்துங்கள்',
      'தெளிவான எல்லைகளை உறுதிப்படுத்துங்கள்',
    ]
  ),
  te: createLocalizedThreatsRecord(
    'te',
    'బెదిరింపులు మరియు పరోక్ష పరిణామాలు: నిగూఢ భయాందోళనల నుండి రక్షణ',
    'స్పష్టంగా చెప్పకుండా సూచనల ద్వారా భయం కలిగించి లొంగదీసుకునే పద్ధతులు.',
    'సరళమైన మాటల్లో: తీవ్ర నష్టం జరుగుతుందనే సంకేతాలు ఇచ్చి ఎదుటివారిని దారికి తెచ్చుకోవడం.',
    'పరోక్ష బెదిరింపులలో నేరుగా మాట్లాడకుండా, కెరీర్ లేదా పరువుకు ముప్పు వాటిల్లుతుందని పరోక్షంగా భయపెడతారు.',
    'భయాన్ని స్పష్టమైన ప్రశ్నలతో ఎదుర్కొని రాతపూర్వక ఆధారాలను సంపాదించడం ముఖ్యం.',
    [
      'పరోక్ష బెదిరింపులను గుర్తించండి',
      'స్పష్టమైన వివరణను డిమాండ్ చేయండి',
      'సమస్యను లిఖితపూర్వకంగా ఉంచండి',
    ]
  ),
  kn: createLocalizedThreatsRecord(
    'kn',
    'ಬೆದರಿಕೆಗಳು ಮತ್ತು ಪರೋಕ್ಷ ಪರಿಣಾಮಗಳು: ಅಸ್ಪಷ್ಟ ಭೀತಿಯ ಮನೋವಿಜ್ಞಾನ',
    'ನೇರವಾಗಿ ಹೇಳದೆ ಪರೋಕ್ಷವಾಗಿ ಭಯ ಹುಟ್ಟಿಸಿ ಮಣಿಸುವ ತಂತ್ರಗಳನ್ನು ತಿಳಿಯಿರಿ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ದೊಡ್ಡ ಹಾನಿಯ ಸೂಚನೆ ನೀಡಿ ಯಾರಲ್ಲೂ ಸಂಶಯ ಬಾರದಂತೆ ನಿಯಂತ್ರಿಸುವುದು.',
    'ಪರೋಕ್ಷ ಬೆದರಿಕೆಗಳಲ್ಲಿ ವ್ಯಕ್ತಿಯು ಭವಿಷ್ಯದ ಅನಾಹುತದ ಸೂಚನೆಗಳನ್ನು ನೀಡಿ ತನ್ನ ಮಾತನ್ನು ಒಪ್ಪಿಸಿಕೊಳ್ಳುತ್ತಾನೆ.',
    'ಭಯಕ್ಕೆ ಒಳಗಾಗದೆ ಪರೋಕ್ಷ ಮಾತುಗಳಿಗೆ ನೇರ ಸ್ಪಷ್ಟನೆ ಕೇಳುವುದು ಸೂಕ್ತ.',
    [
      'ಅಸ್ಪಷ್ಟ ಬೆದರಿಕೆಗಳಿಗೆ ಹೆದರಬೇಡಿ',
      'ದಾಖಲೆಗಳನ್ನು ಸರಿಯಾಗಿ ಇರಿಸಿ',
      'ನೇರ ಮತ್ತು ಸ್ಪಷ್ಟ ನಿಲುವು ತಳೆಯಿರಿ',
    ]
  ),
  ml: createLocalizedThreatsRecord(
    'ml',
    'ഭീഷണികളും പരോക്ഷ പ്രത്യാഘാതങ്ങളും: അദൃശ്യ സമ്മർദ്ദങ്ങളെ പ്രതിരോധിക്കാം',
    'വ്യക്തമായി ഭീഷണിപ്പെടുത്താതെ പരോക്ഷമായി ഭയം ജനിപ്പിച്ച് കാര്യങ്ങൾ നേടുന്ന രീതി.',
    'ലളിതമായി പറഞ്ഞാൽ: വലിയ പ്രത്യാഘാതം ഉണ്ടാകുമെന്ന് സൂചിപ്പിച്ച് മറ്റുള്ളവരെ വഴങ്ങാൻ നിർബന്ധിക്കുക.',
    'തങ്ങളുടെ വാക്കുകൾ അനുസരിച്ചില്ലെങ്കിൽ മോശം കാര്യങ്ങൾ സംഭവിക്കുമെന്ന് പരോക്ഷമായി ഭയപ്പെടുത്തുന്നതാണ് ഈ രീതി.',
    'ഇത്തരം അദൃശ്യ ഭീഷണികൾക്കെതിരെ രേഖാമൂലമുള്ള തെളിവുകൾ സൂക്ഷിക്കുക.',
    [
      'പരോക്ഷ ഭീഷണികളെ തിരിച്ചറിയുക',
      'വ്യക്തമായ വിശദീകരണം ആവശ്യപ്പെടുക',
      'മാനസിക സമ്മർദ്ദത്തിന് വഴങ്ങാതിരിക്കുക',
    ]
  ),
  pa: createLocalizedThreatsRecord(
    'pa',
    'ਧਮਕੀਆਂ ਅਤੇ ਅਸਿੱਧੇ ਨਤੀਜੇ: ਲੁਕਵੇਂ ਡਰ ਅਤੇ ਦਬਾਅ ਦਾ ਟਾਕਰਾ',
    'ਸਿੱਧੀ ਧਮਕੀ ਦਿੱਤੇ ਬਿਨਾਂ ਇਸ਼ਾਰਿਆਂ ਵਿੱਚ ਡਰਾਉਣ ਦੇ ਪੈਟਰਨ ਨੂੰ ਸਮਝੋ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਨੁਕਸਾਨ ਦਾ ਅਜਿਹਾ ਇਸ਼ਾਰਾ ਕਰਨਾ ਕਿ ਸਾਹਮਣੇ ਵਾਲਾ ਡਰ ਜਾਵੇ ਪਰ ਸਬੂਤ ਨਾ ਰਹੇ।',
    'ਅਸਿੱਧੀਆਂ ਧਮਕੀਆਂ ਵਿੱਚ ਵਿਅਕਤੀ ਮਿੱਠੀਆਂ ਗੱਲਾਂ ਵਿੱਚ ਨੁਕਸਾਨ ਦਾ ਖ਼ੌਫ਼ ਦਿਖਾ ਕੇ ਆਪਣੀ ਗੱਲ ਮਨਵਾਉਂਦਾ ਹੈ।',
    'ਅਜਿਹੇ ਲੁਕਵੇਂ ਦਬਾਅ ਅੱਗੇ ਝੁਕਣ ਦੀ ਬਜਾਏ ਲਿਖਤੀ ਸਪੱਸ਼ਟੀਕਰਨ ਮੰਗਣਾ ਚਾਹੀਦਾ ਹੈ।',
    [
      'ਲੁਕਵੀਆਂ ਧਮਕੀਆਂ ਨੂੰ ਪਛਾਣੋ',
      'ਗੱਲਬਾਤ ਨੂੰ ਲਿਖਤੀ ਰਿਕਾਰਡ ਵਿੱਚ ਲਿਆਓ',
      'ਡਰ ਤੋਂ ਬਿਨਾਂ ਸਪੱਸ਼ਟ ਸਵਾਲ ਪੁੱਛੋ',
    ]
  ),
  ur: createLocalizedThreatsRecord(
    'ur',
    'دھمکیاں اور مضمر نتائج: پوشیدہ خوف اور مبہم دباؤ سے تحفظ',
    'براہِ راست کہنے کے بجائے اشاروں میں سنگین نتائج کا خوف دکھانے کی نفسیات۔',
    'آسان الفاظ میں: نقصان کا ایسا مبہم اشارہ دینا کہ سامنے والا ڈر جائے اور بعد میں مکرنے کی گنجائش بھی رہے۔',
    'مضمر دھمکیوں میں انسان کی عزت، نوکری یا ذاتی زندگی کو خطرے میں ڈالنے کے اشارے دیے جاتے ہیں تاکہ وہ گھٹنے ٹیک دے۔',
    'خوفزدہ ہونے کے بجائے ان مبہم باتوں کی تحریری وضاحت مانگنا اس کا مؤثر ترین علاج ہے۔',
    [
      'پوشیدہ دھمکیوں کے جال کو سمجھیں',
      'مبہم باتوں پر کھلی اور دو ٹوک وضاحت طلب کریں',
      'اہم معاملات کا تحریری ریکارڈ رکھیں',
    ]
  ),
  or: createLocalizedThreatsRecord(
    'or',
    'ଧମକ ଓ ପରୋକ୍ଷ ପରିଣାମ: ଅଦୃଶ୍ୟ ଭୟ ଓ ମାନସିକ ଚାପର ପ୍ରତିରୋଧ',
    'ସିଧାସଳଖ ନ କହି ଇଙ୍ଗିତ ମାଧ୍ୟମରେ ଭୟଭୀତ କରାଇ କାର୍ଯ୍ୟ ହାସଲ କରିବାର କୌଶଳ।',
    'ସରଳ ଭାଷାରେ: କ୍ଷତି ହେବାର ଏପରି ଆଭାସ ଦେବା ଯାହାଦ୍ୱାରା ଅନ୍ୟ ଜଣକ ଡରିଯିବ କିନ୍ତୁ ପ୍ରମାଣ ରହିବ ନାହିଁ।',
    'ପରୋକ୍ଷ ଧମକରେ ବ୍ୟକ୍ତି ମିଠା କଥାରେ ଭବିଷ୍ୟତ ବିପଦର ଡର ଦେଖାଇ ନିଜ ଜିଦ୍ ପୂରଣ କରାଏ।',
    'ଏହା ବିରୁଦ୍ଧରେ ଲିଖିତ ପ୍ରମାଣ ସହ ଶାନ୍ତ ଭାବରେ ସ୍ପଷ୍ଟୀକରଣ ମାଗିବା ଉଚିତ।',
    [
      'ଲୁକ୍କାୟିତ ଧମକକୁ ଚିହ୍ନନ୍ତୁ',
      'ସ୍ପଷ୍ଟ ଉତ୍ତର ଦାବି କରନ୍ତୁ',
      'ମାନସିକ ଚାପ ଆଗରେ ହାର ମାନନ୍ତୁ ନାହିଁ',
    ]
  ),
  as: createLocalizedThreatsRecord(
    'as',
    'ভাবুকি আৰু পৰোক্ষ পৰিণতি: অদৃশ্য ভয় আৰু মানসিক হেঁচা প্ৰতিৰোধ',
    'স্পষ্টকৈ নকৈ ইঙ্গিতেৰে ভয়াৱহ পৰিস্থিতিৰ ভয় দেখুৱাই বশ কৰোৱাৰ কৌশল।',
    'সহজ ভাষাত: ক্ষতি হোৱাৰ এনে এক ইংগিত দিয়া যাতে আনজন ভয় খায় কিন্তু প্ৰত্যক্ষ প্ৰমাণ নাথাকে।',
    'পৰোক্ষ ভাবুকিত ব্যক্তিয়ে শুভাকাংক্ষীৰ বেশত ভৱিষ্যতৰ বিপদৰ ভয় দেখুৱাই নিজৰ স্বাৰ্থ সিদ্ধি কৰে।',
    'ভয় নোখোৱাকৈ লিখিত তথ্যৰ জৰিয়তে এনে পৰিস্থিতিৰ মোকাবিলা কৰা উচিত।',
    [
      'অস্পষ্ট ভাবুকিক চিনাক্ত কৰক',
      'স্পষ্ট আৰু মুকলি প্ৰশ্ন সোধক',
      'তথ্যৰ লিখিত ৰেকৰ্ড ৰাখক',
    ]
  ),
};
