import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 04: Fear-Based Persuasion
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Extended Parallel Process Model (EPPM; Witte, 1992, 1994)
 * - Loss Aversion & Prospect Theory (Kahneman & Tversky, 1979)
 * - The Affect Heuristic in Risk Assessment (Slovic et al., 2007)
 * - Danger Control vs. Fear Control Systems
 */

export const TOPIC_FEAR_BASED_PERSUASION_EN: MindTopicDetail = {
  id: 'fear_based_persuasion',
  categoryId: 'manipulation_awareness',
  slug: 'fear-based-persuasion',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 8,
  scientificConsensusTier: 'established',
  sortWeight: 4,
  viewCount: 7120,
  shareCount: 640,
  bookmarkCount: 1120,
  title: 'Fear-Based Persuasion: The Extended Parallel Process Model & Alarm Manipulation',
  subtitle: 'How synthetic panic, catastrophic framing, and manufactured urgency hijack rational decision-making.',
  shortDescription: 'The strategic elicitation of anxiety, dread, or loss aversion to induce rushed compliance before rational risk appraisal can occur.',
  oneLineExplanation: 'In simple terms: Making someone so frightened of a catastrophic outcome that they blindly accept a offered "solution" without questioning it.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'Fear-based persuasion works by triggering an acute stress reaction—convincing you that imminent ruin, financial loss, social disgrace, or illness is moments away. Once your amygdala is hijacked by panic, the influencer presents a single, pre-packaged escape route ("Sign now," "Transfer money," "Vote for me," or "Buy this treatment"). You comply not because the evidence is sound, but because your nervous system is desperate to make the terrifying feeling stop.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Psychologically formalized by Dr. Kim Witte as the Extended Parallel Process Model (EPPM), fear appeals create perceived threat. When perceived threat is high but perceived self-efficacy is low, individuals enter "Fear Control" (panic, denial, or desperate submission) rather than "Danger Control" (rational, calculated problem-solving). Manipulators deliberately crush your sense of independent efficacy to force compliance.',
  summary60s: 'Human beings are wired to prioritize existential survival over reflective thought. When someone yells "Fire!", you run before evaluating the room’s thermal data. Fear-based manipulators exploit this survival shortcut in mundane domains—finance, health, workplace performance, and digital interactions. They systematically magnify the severity ("You will lose everything"), inflate the personal susceptibility ("You have already been compromised"), create artificial time scarcity ("Within the next 10 minutes or it is irreversible"), and monopolize the escape route ("Only our proprietary service can save you"). When all four elements are active, rational deliberation shuts down.',

  quickTakeaways: [
    'The EPPM Trap: When fear is huge and immediate solutions are narrow, rational thinking shuts down',
    'Manufactured Urgency: Manipulators always claim immediate action is mandatory to prevent you from doing independent research',
    'Legitimate Warning vs. Fear-Mongering: Legitimate warnings provide transparent verifiable data; fear manipulation demands blind immediate compliance',
    'The 24-Hour Reality Check: Real emergencies are rare in email and sales; pausing defuses acute panic arousal',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Fear rapidly activates the sympathetic nervous system and the amygdala, flooding the brain with cortisol and adrenaline while restricting prefrontal cortex activity (executive functioning, probabilistic assessment, and long-term planning). Under high threat, Kahneman & Tversky\'s "Loss Aversion" takes over: humans feel the pain of potential loss twice as intensely as the pleasure of equivalent gain. We will take irrational risks just to avoid a perceived certain loss.',
  evolutionaryMechanism: 'In ancestral environments, hesitating when hearing a predator\'s rustle was fatal; evolutionary selection favored the "better safe than sorry" hyperactive error-management heuristic. Manipulative persuasion triggers this ancient false-alarm system for commercial, relational, or ideological gain.',

  // SECTION E — WHY MIGHT SOMEONE USE THIS PATTERN?
  howItWorks: 'Actors employ fear persuasion because it is computationally cheap and bypasses critical debate. Marketers use it to generate FOMO and insurance panics; cyber-scammers use it to extract savings; toxic managers use it to force unpaid overtime; political actors use it to homogenize in-group cohesion against a demonized out-group.',
  whereYouEncounterIt: 'Digital arrest and cyber-fraud scams, predatory health supplement pitches, alarmist news broadcasts, high-pressure timeshare/financial sales, and authoritarian workplace demands.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Catastrophic, apocalyptic framing of ordinary uncertainties ("If you do not act today, your entire future is ruined")',
    'Artificial time scarcity ("You have 15 minutes before the authorities freeze your assets")',
    'Monopoly of rescue: The same person instilling the terror presents themselves as the sole possible protector',
    'Aggressive discouragement of external second opinions ("Do not tell your family or lawyer; they will only panic")',
    'Emotional flooding: Physical symptoms of racing heart, dry mouth, and an overwhelming urgency to comply',
  ],

  // SECTION G — NORMAL BEHAVIOR VS UNHEALTHY PATTERN
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Legitimate Risk Warning vs. Manipulative Fear Appeal',
    description: 'Distinguishing professional, objective safety advisories from coercive panic manufacturing.',
    analogySideA: {
      label: 'Legitimate Risk Warning (Objective & Verifiable)',
      detail: '"This router firmware contains a known security flaw. Please update your software within the next two weeks using the manufacturer\'s official website. Here is the technical documentation."',
    },
    analogySideB: {
      label: 'Fear-Based Persuasion (Coercive & Closed)',
      detail: '"WARNING: Your computer has been seized by Federal Cyber Crime Unit. All bank accounts are suspended. Call this private number within 7 minutes or face immediate arrest."',
    },
  },

  // SECTION H, I, J — REAL-LIFE EXAMPLES & INDIAN CONTEXT
  examples: [
    {
      id: 'fbp_ex_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Layoff Guillotine Memo',
      description: 'A manager addresses their team on Friday evening: "Corporate is looking to cut 30% of headcount next month. Those who log off before 9 PM or refuse weekend shifts clearly do not care about keeping their jobs. I will be submitting performance logs directly to HR on Monday."',
      takeaway: 'Notice how abstract organizational uncertainty is weaponized into an existential survival panic to extract uncompensated overtime without objective merit metrics.',
    },
    {
      id: 'fbp_ex_02',
      domain: 'health',
      displayOrder: 2,
      title: 'The Miracle Detox Panic Pitch',
      description: 'An online influencer tells followers: "Silent toxins in everyday tap water are secretly rotting your gut lining and causing permanent autoimmune decay. In three months, the damage becomes irreversible. My proprietary $120 algae tincture is the only clinical detox solution."',
      takeaway: 'Severe fabricated pathology + zero peer-reviewed diagnostic proof + exclusive proprietary paywalled cure.',
    },
  ],

  scenarios: [
    {
      id: 'fbp_scen_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'The "Digital Arrest" & Fake Police Video Call',
      narrativeContext: 'Ramesh, a 64-year-old retired bank auditor in Bengaluru, receives a Skype video call from someone dressed in a police uniform against a backdrop labeled "CBI Special Crime Cell". The caller barks: "A parcel containing narcotics and forged passports sent to Malaysia has been seized in Mumbai with your Aadhaar number. A non-bailable arrest warrant has been issued against you under the UAPA Act. You are currently under digital house arrest. If you disconnect, a police squad will raid your home within 30 minutes and your arrest will be broadcast on national television. Transfer your retirement funds into this RBI verification holding account immediately to prove your financial integrity."',
      biasInAction: 'The scammers engineer maximum perceived threat (social humiliation, prison, UAPA) + total helplessness + manufactured panic + an urgent single exit route (wire transfer).',
      optimalResponse: 'Disconnect immediately, refuse to transfer any money, and report to the official national cybercrime portal: "No government agency, police department, or court conducts \'digital arrests\' or asks for money transfers via video call. I am hanging up and contacting the 1930 Cyber Fraud Helpline and my local police station directly."',
      reflectionPrompt: 'Have you or an elderly relative ever felt sudden chest tightness and urgent compliance pressure after receiving an official-sounding threat message or email?',
    },
  ],

  // SECTION K — SPOT THE PATTERN (Interactive Scenario)
  interactiveScenarios: [
    {
      id: 'scen_fbp_01',
      topicId: 'fear_based_persuasion',
      title: 'Spot the Pattern: The "Impending Regulatory Catastrophe" Pitch',
      contextVignette: 'An unsolicited financial advisor calls you and states: "New secret tax amendments are passing at midnight tonight that will confiscate 40% of all liquid savings accounts above 5 lakhs. The mainstream news is intentionally hiding this until it is too late. Move your money into our offshore gold trust before 5:00 PM today, or lose half your family\'s net worth forever."',
      vignetteSourceType: 'personal_finance',
      question: 'What is the most accurate psychological and practical appraisal of this call?',
      options: [
        {
          id: 'opt_fbp_a',
          label: 'A',
          text: 'Immediately wire 50% of your savings to the offshore trust to hedge against legislative risk.',
          explanation: 'This is capitulating to manufactured urgency and giving your money directly to potential fraudsters.',
          isCorrect: false,
        },
        {
          id: 'opt_fbp_b',
          label: 'B',
          text: 'Recognize the classic fear-appeal structure: catastrophic consequence, unsubstantiated conspiracy, artificial same-day deadline, and a single proprietary escape route.',
          explanation: 'Correct. Legitimate financial legislation is published in gazettes with public commentary periods. High-pressure deadlines with catastrophic loss framing are signatures of fraud and predatory persuasion.',
          isCorrect: true,
        },
        {
          id: 'opt_fbp_c',
          label: 'C',
          text: 'Argue with the caller for two hours trying to convince them that tax laws do not work that way.',
          explanation: 'Wastes your cognitive energy and keeps you on the line where professional manipulators will find other fear angles.',
          isCorrect: false,
        },
      ],
      revealedExplanation: {
        correctSummary: 'Identify the 4-part fear framework: Catastrophe + Urgency + Conspiracy + Exclusive Savior.',
        whyItMatters: 'Recognizing the architecture of fear-based appeals instantly breaks the physiological adrenaline trance, restoring prefrontal executive control.',
        cognitiveTrap: 'Loss Aversion (Kahneman & Tversky): The dread of losing 40% blinds the victim to the 100% probability of fraud.',
        actionableAntidote: 'The 24-Hour Cooling Rule: Never execute financial, relational, or legal actions while experiencing physiological fear arousal.',
      },
      difficulty: 'medium',
      culturalContext: 'indian_general',
    },
  ],

  // SECTION L & Q — "BUT BE CAREFUL" & LIMITATIONS
  limitationsAndControversies: 'Nuance is critical: Not all fear-inducing information is manipulation. When a doctor tells a smoker that continuing will multiply lung cancer risk, or when civil defense authorities warn of a Category 5 cyclone, they are communicating objective probabilistic reality. The difference lies in proportionality, empirical verifiability, transparent secondary validation, and whether the warner personally profits from your panic.',

  // SECTION M & N — HOW TO RESPOND & SCRIPTS
  howToRespond: 'Employ the "DE-ESCALATE & VERIFY" Protocol: (1) Intersect the Physiological Alarm: Take slow diaphragmatic breaths to bring heart rate below 80 BPM; (2) Break Urgency: Refuse same-day ultimatums as a matter of policy; (3) Triangulate Independently: Never use contact numbers or links provided by the alarmist; search official directories.',
  psychologicalDefenses: [
    {
      title: 'The Circuit-Breaker Script',
      instruction: 'Say: "I have a strict personal rule: I never sign agreements or make financial transfers under same-day urgency. Send your documentation in writing, and I will review it with my advisor tomorrow."',
    },
    {
      title: 'The Verification Demand',
      instruction: 'Say: "If this is an official legal, medical, or administrative proceeding, provide your registered case filing number and official government domain email. I will verify through official channels."',
    },
    {
      title: 'The Internal Reality Check',
      instruction: 'Ask yourself: "Who benefits from me feeling terrified right now? Does this person get my money, my vote, my labor, or my submission?"',
    },
    {
      title: 'The National Cybercrime Helpline Protocol',
      instruction: 'If subjected to digital arrest threats or cyber extortion, immediately call 1930 (India) or visit cybercrime.gov.in. Never transfer verification funds.',
    },
  ],

  // SECTION P — RESEARCH & CITATIONS
  researchSummary: 'Kim Witte\'s (1992, 1994) Extended Parallel Process Model demonstrated that fear appeals only result in healthy adaptive behavior when "perceived self-efficacy" (the belief that one is capable of executing the solution) and "response efficacy" (the belief that the solution will work) match or exceed the perceived threat. When threat outstrips efficacy, subjects enter irrational "fear control" states. Slovic et al. (2007) established the "Affect Heuristic", proving that strong negative emotional arousal systematically causes humans to underestimate probabilities and overestimate risks.',

  references: [
    {
      id: 'fbp_ref_01',
      title: 'Putting the fear back into fear appeals: The extended parallel process model',
      citation: 'Witte, K. (1992). Communication Monographs, 59(4), 329–349.',
      authors: 'Kim Witte',
      publicationYear: 1992,
      journalOrPublisher: 'Communication Monographs',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: 'https://doi.org/10.1080/03637759209376276',
      relevance: 'Foundational framework establishing Danger Control vs. Fear Control mechanisms under threat.',
      displayOrder: 1,
    },
    {
      id: 'fbp_ref_02',
      title: 'Prospect Theory: An Analysis of Decision under Risk',
      citation: 'Kahneman, D., & Tversky, A. (1979). Econometrica, 47(2), 263–291.',
      authors: 'Daniel Kahneman, Amos Tversky',
      publicationYear: 1979,
      journalOrPublisher: 'Econometrica',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: 'https://doi.org/10.2307/1914185',
      relevance: 'Mathematical formulation of loss aversion, demonstrating why fear of loss overwhelms rational optimization.',
      displayOrder: 2,
    },
    {
      id: 'fbp_ref_03',
      title: 'The affect heuristic',
      citation: 'Slovic, P., Finucane, M. L., Peters, E., & MacGregor, D. G. (2007). European Journal of Operational Research, 177(3), 1333–1352.',
      authors: 'Paul Slovic, Melissa L. Finucane, Ellen Peters, Donald G. MacGregor',
      publicationYear: 2007,
      journalOrPublisher: 'European Journal of Operational Research',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'systematic_review',
      doiOrUrl: 'https://doi.org/10.1016/j.ejor.2005.04.006',
      relevance: 'Explains how emotional dread replaces objective probabilistic calculation in human risk assessment.',
      displayOrder: 3,
    },
  ],

  // SECTION R — COMMON MYTHS
  commonMisconceptions: 'Myth: "Smart, educated professionals never fall for fear-based scams." Reality: Highly educated professionals fall victim frequently because acute fear bypasses intellectual knowledge and activates primitive limbic survival circuitry. Vulnerability is neurobiological, not an intelligence deficiency.',

  // SECTION S — REFLECTION PROMPT
  reflectionPrompt: 'Have you or an elderly relative ever felt sudden chest tightness and urgent compliance pressure after receiving an official-sounding threat message or email?',

  // SECTION T — PRACTICE QUESTIONS (6 Distinct Questions)
  practiceQuestions: [
    {
      id: 'fbp_pq_01',
      questionType: 'identify_influence_principle',
      question: 'According to Kim Witte\'s Extended Parallel Process Model (EPPM), what happens when a message creates immense fear but gives the recipient no clear, realistic way to solve the problem independently?',
      options: [
        {
          id: 'opt_1',
          optionText: 'The recipient enters "Fear Control", experiencing panic, denial, or desperate surrender to whatever quick escape is offered.',
          isCorrect: true,
          feedbackText: 'Correct. When threat exceeds efficacy, people focus on eliminating the uncomfortable feeling of fear rather than solving the danger rationally.',
        },
        {
          id: 'opt_2',
          optionText: 'The recipient becomes mathematically objective and performs deep probabilistic analysis.',
          isCorrect: false,
          feedbackText: 'Acute fear inhibits reflective mathematical calculation.',
        },
        {
          id: 'opt_3',
          optionText: 'The recipient automatically falls asleep.',
          isCorrect: false,
          feedbackText: 'Adrenaline arousal causes alertness and panic, not sedation.',
        },
      ],
      cognitiveTakeaway: 'High threat coupled with low perceived efficacy triggers irrational fear-control behaviors.',
    },
    {
      id: 'fbp_pq_02',
      questionType: 'distinction',
      question: 'How do you distinguish an authentic public health or safety warning from manipulative fear-based persuasion?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Legitimate warnings cite transparent, verifiable public data and encourage multiple verification channels; manipulative appeals demand blind, urgent compliance and monopolize the remedy.',
          isCorrect: true,
          feedbackText: 'Correct. Genuine safety notices invite verification; manipulative fear demands immediate surrender to a single source.',
        },
        {
          id: 'opt_2',
          optionText: 'Legitimate warnings are always cheerful and never mention risks.',
          isCorrect: false,
          feedbackText: 'Legitimate warnings must convey risk clearly, but without emotional extortion.',
        },
        {
          id: 'opt_3',
          optionText: 'There is no difference; all risk communication is manipulative.',
          isCorrect: false,
          feedbackText: 'Societal safety requires objective, evidence-based hazard warnings.',
        },
      ],
      cognitiveTakeaway: 'Verify whether the speaker encourages independent verification or insists on exclusive compliance.',
    },
    {
      id: 'fbp_pq_03',
      questionType: 'scenario_analysis',
      question: 'A pop-up window locks your browser, blares an alarm siren, flashes red text claiming "Trojan.Spyware has copied your passwords", and gives you a 120-second countdown to call a toll-free number. What cognitive lever is being exploited?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Manufactured sensory alarm paired with artificial countdown urgency to trigger the amygdala before the user checks their actual antivirus software.',
          isCorrect: true,
          feedbackText: 'Correct. Tech-support scams use sensory shock and ticking clocks to bypass rational inspection.',
        },
        {
          id: 'opt_2',
          optionText: 'The Reciprocity Principle.',
          isCorrect: false,
          feedbackText: 'Reciprocity relies on unearned favors, not terrifying sirens.',
        },
        {
          id: 'opt_3',
          optionText: 'Anchoring Bias on product pricing.',
          isCorrect: false,
          feedbackText: 'This is pure terror-induced compliance, not price comparison.',
        },
      ],
      cognitiveTakeaway: 'Sensory overload + countdown timers = classic cognitive bypass via manufactured panic.',
    },
    {
      id: 'fbp_pq_04',
      questionType: 'best_response',
      question: 'You receive an urgent WhatsApp message claiming that an unknown virus is spreading through local drinking water and that boiling water is useless; you must purchase a specific proprietary UV filter bottle within 24 hours. What should you do first?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Pause, do not forward the message, and check the official website of your municipal water authority and recognized health departments (e.g., WHO, ICMR).',
          isCorrect: true,
          feedbackText: 'Correct. Independent triangulation from public regulatory authorities defuses false alarms instantly.',
        },
        {
          id: 'opt_2',
          optionText: 'Forward the message to all your family groups immediately with "Urgent! Please share!"',
          isCorrect: false,
          feedbackText: 'This fuels viral panic and amplifies commercial exploitation.',
        },
        {
          id: 'opt_3',
          optionText: 'Buy five filter bottles immediately just in case.',
          isCorrect: false,
          feedbackText: 'This rewards the fear-based marketing campaign.',
        },
      ],
      cognitiveTakeaway: 'Triangulate with official regulatory bodies before allowing viral fear to dictate actions.',
    },
    {
      id: 'fbp_pq_05',
      questionType: 'what_would_you_do',
      question: 'In an office meeting, a manager says: "If we don’t release this unverified code by midnight, our competitors will bankrupt us by next quarter and everyone in this room will be unemployed." As a lead engineer, how should you address this?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Acknowledge the competitive anxiety, then ground the discussion in objective engineering risks: "I understand the competitive pressure, but shipping unverified code creates critical vulnerabilities that guarantee customer attrition. Let us review the critical release path calmly."',
          isCorrect: true,
          feedbackText: 'Correct. Reframes catastrophic existential fear into objective risk-reward appraisal.',
        },
        {
          id: 'opt_2',
          optionText: 'Start sobbing and tell everyone the company is doomed.',
          isCorrect: false,
          feedbackText: 'Validates and amplifies irrational panic.',
        },
        {
          id: 'opt_3',
          optionText: 'Silently delete the codebase so nobody can ship anything.',
          isCorrect: false,
          feedbackText: 'Destructive and unprofessional behavior.',
        },
      ],
      cognitiveTakeaway: 'Separate emotional catastrophe narratives from systematic risk assessment.',
    },
    {
      id: 'fbp_pq_06',
      questionType: 'misconception_detection',
      question: 'Why does Kahneman & Tversky\'s "Loss Aversion" make humans particularly susceptible to fear-based sales pitches (e.g., "Don\'t lose your home!")?',
      options: [
        {
          id: 'opt_1',
          optionText: 'The psychological pain of a potential loss is felt approximately twice as intensely as the pleasure of an equivalent gain, motivating irrational preventive actions.',
          isCorrect: true,
          feedbackText: 'Correct. The prospect of loss creates an urgent emotional deficit that people will pay heavily to neutralize.',
        },
        {
          id: 'opt_2',
          optionText: 'Because humans care more about math than emotions.',
          isCorrect: false,
          feedbackText: 'Loss aversion demonstrates that emotional valuation departs from pure mathematical expected value.',
        },
        {
          id: 'opt_3',
          optionText: 'Because losses can never actually happen in real life.',
          isCorrect: false,
          feedbackText: 'Losses are real; the distortion lies in how disproportionately fear exaggerates their likelihood.',
        },
      ],
      cognitiveTakeaway: 'Loss aversion magnifies perceived threats, making preventive expenditures feel overwhelmingly necessary.',
    },
  ],

  // VISUAL CONTENT
  visualContent: {
    id: 'vis_fear_persuasion',
    type: 'flowchart',
    title: 'The EPPM Fear Decision Tree',
    altText: 'A flowchart of the Extended Parallel Process Model showing how High Threat with Low Efficacy leads to Fear Control and panic compliance, whereas High Efficacy leads to Danger Control.',
    caption: 'Figure 1: Witte\'s EPPM Model: When fear is magnified and personal agency is minimized, rational danger control is replaced by desperate panic compliance.',
    interactiveExplanation: 'Manipulators intentionally lower your perceived efficacy ("You cannot solve this alone; you must pay us") to ensure you stay in fear control.',
  },

  // TAGS & RELATED TOPICS
  tags: ['Manipulation Awareness', 'Fear-Based Persuasion', 'EPPM', 'Loss Aversion', 'Scam Awareness', 'Critical Thinking'],
  relatedTopics: [
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
      relationshipType: 'progresses_to',
    },
    {
      topicId: 'first_principles_thinking',
      slug: 'first-principles-thinking',
      title: 'First Principles Thinking',
      relationshipType: 'counteracted_by',
    },
  ],

  // SEO METADATA
  seoTitle: 'Fear-Based Persuasion: Meaning, EPPM Science & Scam Defenses | Mentalab Mind',
  seoDescription: 'Understand how fear-based persuasion and catastrophic framing manipulate human decision-making. Learn the EPPM framework and practical scripts to stay calm.',
  canonicalUrl: '/mind/manipulation-awareness/fear-based-persuasion',
  ogImageUrl: '/images/mind/fear-based-persuasion.png',
  publishedAt: '2026-09-22T00:00:00Z',
  deepExplanation: 'Fear-based persuasion leverages acute autonomic arousal, loss aversion, and cognitive narrowing to force unreflective compliance.',
};

/**
 * High-Quality Hinglish Translation
 */
export const TOPIC_FEAR_BASED_PERSUASION_HINGLISH: MindTopicDetail = {
  ...TOPIC_FEAR_BASED_PERSUASION_EN,
  title: 'Fear-Based Persuasion: Darr Ka Khel Aur Fake Urgency Ko Samjhein',
  subtitle: 'Jaaniye kaise darr, panic aur "abhi karo nahi toh sab khatam" kehkar logon se galat decisions karwaye jaate hain.',
  shortDescription: 'Ek aisi manipulation technique jisme saamne wale ko itna dara diya jata hai ki wo bina soche-samjhe unki batayi baat par surrender kar de.',
  oneLineExplanation: 'In simple terms: Bada nuksaan hone ka jhootha darr dikhakar aapse jaldbaazi me manchaaha faisla karwana.',

  summary30s: 'Fear-based persuasion tab hoti hai jab koi aapko kisi aane wali musibat, jail, bimari ya financial loss ka darr dikhakar panic me daal deta hai. Jab dimaag darr jata hai, toh rational thinking band ho jati hai. Usi waqt wo apna ek "solution" pesh karte hain (jaise paise transfer karo, product khareedo ya shart maano). Aap samajhdari se nahi, balki darr se chhutkara paane ke liye unki baat maan lete hain.',

  coreConcept: 'Dr. Kim Witte ke Extended Parallel Process Model (EPPM) ke mutabiq, jab darr bohot zyada hota hai aur insaan ko lagta hai ki wo khud kuch nahi kar sakta, toh wo "Fear Control" me chala jata hai—yani panic me aakar jo samne dikha wahi kar diya. Scammers aur manipulators jaanbujhkar aapko bebas feel karate hain taaki aap unpar depend ho jayein.',
  summary60s: 'Insaan ka dimaag khatre ke waqt soch-vichar band karke "fight or flight" mode me chala jata hai. Fear-based manipulators iska galat fayda uthate hain. Wo 4 cheezein karte hain: (1) Nuksaan ko bohot bada batate hain, (2) Kehte hain ki yeh aapke sath hi hone wala hai, (3) Fake countdown banate hain ("agli 10 minute me karo"), aur (4) Kehte hain ki sirf wahi aapko bacha sakte hain. Jab yeh 4 cheezein milti hain, toh acche-bhale padhe-likhe log bhi fas jaate hain.',

  quickTakeaways: [
    'The EPPM Trap: Jab darr bohot bada ho aur rasta ek hi dikhe, toh dimaag sochna band kar deta hai',
    'Fake Urgency: Scammers hamesha kehte hain ki "abhi turant karo" taaki aap kisi aur se pooch na sakein',
    'Real Warning vs Fear-Mongering: Asli warning me proof aur official website hoti hai; manipulation me bas darr aur paisa manga jata hai',
    'The 24-Hour Rule: Jab bhi dil ki dhadkan tez ho aur darr lage, koi bhi transaction ya bada faisla na karein',
  ],

  whyItHappens: 'Darr ke waqt dimaag me amygdala active ho jata hai aur cortisol/adrenaline release hota hai. Kahneman aur Tversky ki "Loss Aversion" theory ke mutabiq, hume nuksaan hone ka darr kisi fayde ki khushi se 2 guna zyada lagta hai. Isliye hum nuksaan se bachne ke liye kuch bhi karne ko tayyar ho jaate hain.',
  evolutionaryMechanism: 'Jungalon me rehne wale insaan ke liye aawaz aate hi bhaagna zaroori tha. Wahi purana survival instinct aaj WhatsApp messages aur phone scams me trigger ho jata hai.',

  howItWorks: 'Iska use digital arrest scams me, unverified health products bechne me, office me boss dwara nikalne ki dhamki dekar extra kaam karwane me, aur news channels me TRP ke liye hota hai.',
  whereYouEncounterIt: 'Digital arrest fake calls, WhatsApp miracle cures, high-pressure property/insurance sales, aur toxic workplaces.',

  howToRecognize: [
    'Choti baat ko "zindagi barbaad ho jayegi" ki tarah present karna',
    '"Sirf 15 minute hain aapke paas" jaisi artificial time limits',
    'Kaha jaye ki kisi lawyer, police ya family member ko mat batana',
    'Wahi insaan darr dikhaye aur wahi insaan bachaane ke badle paise maange',
    'Sharir me achanak ghabrahat, pasina aana aur turant kuch karne ki bechaini hona',
  ],

  examples: [
    {
      id: 'fbp_ex_hi_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Layoff Ka Darr Dikhakar Overtime',
      description: 'Manager Friday sham ko kehta hai: "Company 30% logon ko nikalne wali hai. Jo log weekend par kaam nahi karenge, unka naam main layoff list me daal dunga."',
      takeaway: 'Notice karein ki company ki normal uncertainty ko weapon bana kar bina compensation ke extra kaam karwaya gaya.',
    },
  ],

  scenarios: [
    {
      id: 'fbp_scen_hi_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'Digital Arrest Aur Fake Police Video Call',
      narrativeContext: 'Ramesh ji (64 years, retired bank manager, Bengaluru) ko ek Skype video call aati hai jisme samne police uniform me aadmi baitha hai aur peeche "CBI Cyber Cell" likha hai. Wo chilakar kehta hai: "Aapke Aadhaar card par Mumbai se ek parcel mila hai jisme drugs aur fake passports hain. Aapke khilaaf non-bailable arrest warrant nikal chuka hai. Aap digital arrest me hain. Agar phone kata toh 30 minute me police ghar par raid maregi aur TV par khabar aayegi. Apni innocence prove karne ke liye apne 20 lakh rupees is RBI verification account me transfer karein."',
      biasInAction: 'Scammers ne maximum darr (jail, badnami) + helplessness + fake urgency create ki taaki Ramesh ji bina soche saare paise bhej dein.',
      optimalResponse: 'Turant call kaatein, darre nahi aur 1930 par report karein: "Koi bhi government agency ya police video call par digital arrest nahi karti aur na hi paise maangti hai. Main phone kaat raha hu aur local police station ja raha hu."',
      reflectionPrompt: 'Kya aapke ya aapke kisi family member ke sath kabhi official darr dikhakar aisi call aayi hai?',
    },
  ],

  limitationsAndControversies: 'Caution: Har warning manipulation nahi hoti. Jab doctor kehta hai ki smoking se cancer ka risk hai, ya mausam vibhag cyclone ka alert deta hai, toh wo scientific facts batate hain. Farq yeh hai ki asli warning me proof hota hai aur koi aapse turant paise ya surrender nahi maangta.',

  howToRespond: 'STOP & VERIFY Protocol apnayein: (1) Lambi saans lein aur dil ki dhadkan normal karein; (2) "Main turant faisla nahi leta" kehkar time maangein; (3) Diye gaye number par call na karein, official website se contact dhoondhein.',
  psychologicalDefenses: [
    {
      title: 'The Time-Out Rule',
      instruction: 'Bolein: "Mera rule hai ki main urgency me koi payment ya sign nahi karta. Details email karein, main kal review karunga."',
    },
    {
      title: 'Official Channel Verification',
      instruction: 'Bolein: "Aap apna case number aur police station batayein, main khud station aakar baat karunga."',
    },
    {
      title: 'Internal Reality Check',
      instruction: 'Sochein: "Mere darne se kisko fayda ho raha hai? Kya ye mujhse paise ya surrender chahte hain?"',
    },
  ],

  researchSummary: 'Kim Witte (1992) ka EPPM model dikhata hai ki jab darr bohot zyada aur solution kam hota hai, toh insaan logic bhool jata hai. Kahneman & Tversky (1979) ki Prospect Theory prove karti hai ki loss ka darr dimag ko manipulate karne ka sabse aasan tareeqa hai.',

  references: TOPIC_FEAR_BASED_PERSUASION_EN.references,
  commonMisconceptions: 'Myth: "Sirf kam padhe-likhe log darr me aate hain." Reality: Bade-bade doctors, engineers aur officers bhi digital arrest me phas jaate hain kyunki darr intelligence ko nahi, nervous system ko target karta hai.',

  reflectionPrompt: 'Kya aapke ya aapke kisi family member ke sath kabhi official darr dikhakar aisi call aayi hai?',

  practiceQuestions: TOPIC_FEAR_BASED_PERSUASION_EN.practiceQuestions,
  visualContent: TOPIC_FEAR_BASED_PERSUASION_EN.visualContent,
  tags: TOPIC_FEAR_BASED_PERSUASION_EN.tags,
  relatedTopics: TOPIC_FEAR_BASED_PERSUASION_EN.relatedTopics,
  seoTitle: 'Fear-Based Persuasion Kya Hai? Digital Arrest & Scam Defenses | Mentalab Mind',
  seoDescription: 'Darr aur fake urgency ke zariye hone wali manipulation ko samjhein. Janiye EPPM model aur cyber scam se bachne ke practical tareeqe.',
  canonicalUrl: '/mind/manipulation-awareness/fear-based-persuasion',
  ogImageUrl: '/images/mind/fear-based-persuasion.png',
  publishedAt: '2026-09-22T00:00:00Z',
  deepExplanation: 'Fear-based persuasion ek psychological mechanism hai jo loss aversion aur amygdala activation ka fayda uthata hai.',
};

/**
 * Localized Helper
 */
function createLocalizedFearPersuasionRecord(
  langCode: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_FEAR_BASED_PERSUASION_EN,
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

export const TOPIC_FEAR_BASED_PERSUASION: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_FEAR_BASED_PERSUASION_EN,
  hinglish: TOPIC_FEAR_BASED_PERSUASION_HINGLISH,
  hi: createLocalizedFearPersuasionRecord(
    'hi',
    'डर-आधारित अनुनय: कृत्रिम आतंक, EPPM मॉडल और त्वरित निर्णयों का मनोविज्ञान',
    'समझें कि कैसे भय और तत्काल खतरे का भ्रम दिखाकर तार्किक सोच को पंगु बना दिया जाता है।',
    'सरल शब्दों में: भारी नुकसान या तबाही का डर दिखाकर किसी से जल्दबाजी में अपनी मनचाही बात मनवाना।',
    'डर-आधारित अनुनय तब होता है जब कोई व्यक्ति या संगठन आपको किसी आसन्न संकट, कानूनी कार्रवाई या आर्थिक नुकसान का डर दिखाकर घबराहट में डाल देता है। जब मस्तिष्क भयभीत होता है, तो तार्किक सोच शिथिल हो जाती है और व्यक्ति भय से मुक्ति पाने के लिए सामने वाले के समाधान को स्वीकार कर लेता है।',
    'डॉ. किम विटे का एक्सटेंडेड पैरेलल प्रोसेस मॉडल (EPPM) समझाता है कि जब भय बहुत अधिक होता है और व्यक्ति को कोई रास्ता नहीं दिखता, तो वह आतंक-नियंत्रण (Fear Control) में जाकर अविवेकपूर्ण फैसले लेता है।',
    [
      'EPPM मॉडल: अत्यधिक भय और सीमित विकल्पों में तार्किक सोच बंद हो जाती है',
      'कृत्रिम तात्कालिकता: धोखेबाज हमेशा तुरंत कार्रवाई का दबाव बनाते हैं ताकि आप पुष्टि न कर सकें',
      'वास्तविक चेतावनी बनाम भय का दुरुपयोग: वास्तविक चेतावनी में पारदर्शी प्रमाण होते हैं, जबकि हेरफेर में केवल दबाव होता है',
      '24 घंटे का नियम: घबराहट की स्थिति में कभी भी कोई वित्तीय या कानूनी कदम न उठाएं',
    ]
  ),
  gu: createLocalizedFearPersuasionRecord(
    'gu',
    'ડર-આધારિત પ્રભાવ: નકલી ગભરાટ અને ખોટી તાકીદથી બચવાના ઉપાયો',
    'મોટા નુકસાનનો ડર બતાવીને ઉતાવળે નિર્ણયો લેવડાવવાની યુક્તિઓને સમજો.',
    'સરળ શબ્દોમાં: ગંભીર સંકટનો ડર ઊભો કરીને વિચાર્યા વગર નિર્ણયો લેવા માટે મજબૂર કરવું.',
    'જ્યારે કોઈ વ્યક્તિ કે સંસ્થા નુકસાન કે જેલનો ડર બતાવીને તાત્કાલિક નિર્ણય લેવાનું દબાણ કરે છે, ત્યારે તેને ડર-આધારિત પ્રભાવ કહે છે.',
    'ડરના કારણે મગજ તાર્કિક વિચારણા કરવાનું બંધ કરી દે છે અને વ્યક્તિ ઉતાવળમાં છેતરાઈ જાય છે.',
    [
      'નકલી તાકીદથી સાવધાન રહો',
      'ગભરાટમાં કોઈ પણ નાણાકીય લેવડદેવડ ન કરો',
      'સાયબર છેતરપિંડીના કિસ્સામાં તાત્કાલિક 1930 પર સંપર્ક કરો',
    ]
  ),
  mr: createLocalizedFearPersuasionRecord(
    'mr',
    'भीतीवर आधारित प्रभाव: बनावट घबराट आणि तात्काळ निर्णयांचे मानसशास्त्र',
    'भीती दाखवून आणि दबाव निर्माण करून चुकीचे निर्णय लादण्याच्या पद्धती ओळखा.',
    'सोप्या भाषेत: मोठे नुकसान होण्याची भीती दाखवून विचार न करता निर्णय घेण्यास भाग पाडणे.',
    'भीतीवर आधारित प्रभाव तेव्हा वापरला जातो जेव्हा एखाद्याला कायदेशीर कारवाई किंवा आर्थिक नुकसानीची भीती दाखवून तात्काळ निर्णय घेण्यास भाग पाडले जाते.',
    'घाबरलेल्या अवस्थेत मेंदू तर्कशुद्ध विचार करू शकत नाही, ज्याचा गैरफायदा फसवणूक करणारे घेतात.',
    [
      'भीतीपोटी घाईघाईत कोणताही निर्णय घेऊ नका',
      'अधिकृत माहितीची स्वतंत्रपणे पडताळणी करा',
      'डिजिटल अरेस्टच्या बनावट कॉल्सपासून सावध राहा',
    ]
  ),
  bn: createLocalizedFearPersuasionRecord(
    'bn',
    'ভয়-ভিত্তিক প্ররোচনা: কৃত্রিম আতঙ্ক ও তাৎক্ষণিক সিদ্ধান্তের মনস্তত্ত্ব',
    'বিপর্যয় বা আর্থিক ক্ষতির ভয় দেখিয়ে অযৌক্তিক সিদ্ধান্ত নিতে বাধ্য করার কৌশল।',
    'সহজ কথায়: বড় কোনো বিপদের ভয় দেখিয়ে যাচাই করার সুযোগ না দিয়েই সিদ্ধান্ত চাপিয়ে দেওয়া।',
    'ভয়-ভিত্তিক প্ররোচনা হলো এমন একটি অপকৌশল যেখানে চরম আতঙ্ক সৃষ্টি করে মানুষকে তাড়াহুড়ো করে অনুগত হতে বাধ্য করা হয়।',
    'ভয়ের কারণে মস্তিষ্কের যৌক্তিক বিশ্লেষণ ক্ষমতা সাময়িকভাবে অকার্যকর হয়ে পড়ে।',
    [
      'কৃত্রিম তাড়ার ফাঁদে পা দেবেন না',
      'ভয়ের মুখে শান্ত থাকুন এবং স্বাধীনভাবে তথ্য যাচাই করুন',
      'সাইবার জালিয়াতির ক্ষেত্রে অবিলম্বে সরকারি হেল্পলাইনে যোগাযোগ করুন',
    ]
  ),
  ta: createLocalizedFearPersuasionRecord(
    'ta',
    'பயம் சார்ந்த தூண்டுதல்: செயற்கை பீதி மற்றும் அவசர முடிவுகளின் உளவியல்',
    'பெரும் இழப்பு ஏற்படும் என்று அச்சுறுத்தி தவறான முடிவுகளை எடுக்க வைக்கும் தந்திரங்களை அறிதல்.',
    'எளிய சொற்களில்: ஆபத்து அல்லது இழப்பு பற்றிய பயத்தை உருவாக்கி அவசரமாக ஒரு முடிவை ஏற்க வைப்பது.',
    'பயம் சார்ந்த தூண்டுதல் என்பது ஒருவரைப் பதற்றமடையச் செய்து, சிந்திக்க நேரம் தராமல் உடனடியாகக் கீழ்ப்படிய வைக்கும் உத்தியாகும்.',
    'பயத்தின் போது மனித மூளை தர்க்கரீதியான சிந்தனையை இழந்து விடுகிறது, இதை ஏமாற்றுபவர்கள் தங்களுக்கு சாதகமாகப் பயன்படுத்துகின்றனர்.',
    [
      'செயற்கையான அவசரத்தை நம்பாதீர்கள்',
      'பதற்றத்தில் பணப் பரிவர்த்தனைகளைச் செய்யாதீர்கள்',
      'அதிகாரப்பூர்வ ஆதாரங்களைச் சரிபார்க்கவும்',
    ]
  ),
  te: createLocalizedFearPersuasionRecord(
    'te',
    'భయం ఆధారిత ప్రభావం: కృత్రిమ భయాందోళనలు మరియు ఆందోళన నిర్ణయాల మనస్తత్వం',
    'తీవ్ర నష్టం జరుగుతుందనే భయాన్ని సృష్టించి ఆలోచించకుండా నిర్ణయాలు తీసుకునేలా చేసే పద్ధతులు.',
    'సరళమైన మాటల్లో: ఏదో ముప్పు ముంచుకొస్తుందనే భయంతో ఒత్తిడి తెచ్చి తమ మాటకు లొంగదీసుకోవడం.',
    'భయం ఆధారిత ప్రభావం అనేది అత్యవసర పరిస్థితిని సృష్టించి, బాధితుడిని ఆలోచించనీయకుండా తమ షరతులను ఒప్పుకునేలా చేసే ఒక మానసిక దాడి.',
    'భయంలో ఉన్నప్పుడు మెదడు విచక్షణా జ్ఞానాన్ని కోల్పోతుంది, దీన్ని మోసగాళ్లు ఆసరాగా చేసుకుంటారు.',
    [
      'కృత్రిమ ఆందోళనతో వెంటనే నిర్ణయాలు తీసుకోకండి',
      'స్వతంత్రంగా వివరాలను నిర్ధారించుకోండి',
      'డిజిటల్ అరెస్ట్ వంటి బెదిరింపులకు భయపడకండి',
    ]
  ),
  kn: createLocalizedFearPersuasionRecord(
    'kn',
    'ಭಯ ಆಧಾರಿತ ಪ್ರಭಾವ: ಕೃತಕ ಆತಂಕ ಮತ್ತು ಅವಸರದ ನಿರ್ಧಾರಗಳ ಮನೋವಿಜ್ಞಾನ',
    'ದೊಡ್ಡ ನಷ್ಟದ ಭಯ ಹುಟ್ಟಿಸಿ ಆಲೋಚನೆಗೆ ಆಸ್ಪದ ನೀಡದೆ ನಿರ್ಧಾರಗಳನ್ನು ಹೇರುವ ತಂತ್ರಗಳನ್ನು ತಿಳಿಯಿರಿ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ತೀವ್ರ ಹಾನಿಯ ಭಯ ತೋರಿಸಿ ತರಾತುರಿಯಲ್ಲಿ ಒಪ್ಪಿಗೆ ಪಡೆಯುವುದು.',
    'ಭಯ ಆಧಾರಿತ ಪ್ರಭಾವದಲ್ಲಿ ವ್ಯಕ್ತಿಯನ್ನು ಭಯಭೀತಗೊಳಿಸಿ, ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸಲು ಅವಕಾಶ ನೀಡದೆ ತಮ್ಮ ಪರಿಹಾರವನ್ನು ಒಪ್ಪಿಕೊಳ್ಳುವಂತೆ ಮಾಡಲಾಗುತ್ತದೆ.',
    'ತೀವ್ರ ಆತಂಕದಲ್ಲಿ ಮೆದುಳಿನ ತಾರ್ಕಿಕ ಸಾಮರ್ಥ್ಯ ಕುಂಠಿತಗೊಳ್ಳುತ್ತದೆ.',
    [
      'ಕೃತಕ ಆತುರದ ಬಲೆಗೆ ಬೀಳಬೇಡಿ',
      'ಆತಂಕದಲ್ಲಿ ಹಣಕಾಸಿನ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಬೇಡಿ',
      'ಅಧಿಕೃತ ಮೂಲಗಳಿಂದ ಮಾಹಿತಿಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ',
    ]
  ),
  ml: createLocalizedFearPersuasionRecord(
    'ml',
    'ഭയം അടിസ്ഥാനമാക്കിയുള്ള പ്രേരണ: കൃത്രിമ പരിഭ്രാന്തിയും സമ്മർദ്ദ തന്ത്രങ്ങളും',
    'വലിയ നഷ്ടം ഭയപ്പെടുത്തി ചിന്തിക്കാതെ തീരുമാനങ്ങൾ എടുക്കാൻ പ്രേരിപ്പിക്കുന്ന രീതികൾ.',
    'ലളിതമായി പറഞ്ഞാൽ: അപകടഭീതി സൃഷ്ടിച്ച് തിടുക്കത്തിൽ കാര്യങ്ങൾ സാധിപ്പിച്ചെടുക്കുക.',
    'ഒരു വ്യക്തിയെ അല്ലെങ്കിൽ ഉപഭോക്താവിനെ കടുത്ത ഭയത്തിലാക്കി, ചിന്തിക്കാൻ അവസരം നൽകാതെ തീരുമാനങ്ങൾ എടുപ്പിക്കുന്നതാണ് ഭയ-അധിഷ്ഠിത പ്രേരണ.',
    'പരിഭ്രാന്തിയുടെ നിമിഷങ്ങളിൽ യുക്തിസഹമായി ചിന്തിക്കാനുള്ള തലച്ചോറിന്റെ കഴിവ് നഷ്ടപ്പെടുന്നു.',
    [
      'കൃത്രിമ ധൃതിയെ തിരിച്ചറിയുക',
      'ഭയപ്പെട്ട് പണം കൈമാറാതിരിക്കുക',
      'വിവരങ്ങൾ ഔദ്യോഗികമായി സ്ഥിരീകരിക്കുക',
    ]
  ),
  pa: createLocalizedFearPersuasionRecord(
    'pa',
    'ਡਰ-ਅਧਾਰਿਤ ਪ੍ਰਭਾਵ: ਨਕਲੀ ਘਬਰਾਹਟ ਅਤੇ ਜਲਦਬਾਜ਼ੀ ਦੇ ਫ਼ੈਸਲਿਆਂ ਦਾ ਮਨੋਵਿਗਿਆਨ',
    'ਵੱਡੇ ਨੁਕਸਾਨ ਦਾ ਡਰ ਦਿਖਾ ਕੇ ਬਿਨਾਂ ਸੋਚੇ-ਸਮਝੇ ਫ਼ੈਸਲੇ ਕਰਵਾਉਣ ਦੀ ਚਾਲ ਨੂੰ ਸਮਝੋ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਮੁਸੀਬਤ ਜਾਂ ਨੁਕਸਾਨ ਦਾ ਖ਼ੌਫ਼ ਪੈਦਾ ਕਰਕੇ ਆਪਣੀ ਗੱਲ ਮਨਵਾਉਣੀ।',
    'ਡਰ-ਅਧਾਰਿਤ ਪ੍ਰਭਾਵ ਵਿੱਚ ਵਿਅਕਤੀ ਨੂੰ ਇੰਨਾ ਡਰਾ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ ਕਿ ਉਹ ਘਬਰਾਹਟ ਵਿੱਚ ਆ ਕੇ ਸਾਹਮਣੇ ਵਾਲੇ ਦੀ ਹਰ ਗੱਲ ਮੰਨ ਲੈਂਦਾ ਹੈ।',
    'ਡਰ ਦੇ ਸਾਏ ਵਿੱਚ ਦਿਮਾਗ਼ ਦੀ ਸੋਚਣ-ਸਮਝਣ ਦੀ ਸ਼ਕਤੀ ਕਮਜ਼ੋਰ ਹੋ ਜਾਂਦੀ ਹੈ।',
    [
      'ਨਕਲੀ ਐਮਰਜੈਂਸੀ ਦੇ ਜਾਲ ਵਿੱਚ ਨਾ ਫਸੋ',
      'ਘਬਰਾਹਟ ਵਿੱਚ ਪੈਸੇ ਟਰਾਂਸਫਰ ਨਾ ਕਰੋ',
      'ਸਰਕਾਰੀ ਸਾਈਬਰ ਹੈਲਪਲਾਈਨ 1930 ਦੀ ਵਰਤੋਂ ਕਰੋ',
    ]
  ),
  ur: createLocalizedFearPersuasionRecord(
    'ur',
    'خوف پر مبنی ترغیب: مصنوعی گھبراہٹ اور جلد بازی کے فیصلوں کی نفسیات',
    'تباہی یا قانونی کارروائی کا خوف دکھا کر اندھا دھند فیصلے مسلط کرنے کے حربے۔',
    'آسان الفاظ میں: شدید نقصان کا خوف دلا کر کسی کو جلد بازی میں فیصلے پر مجبور کرنا۔',
    'خوف پر مبنی ترغیب میں انسان کو اس قدر خوفزدہ کر دیا جاتا ہے کہ اس کی سوچنے سمجھنے کی صلاحیت مفلوج ہو جاتی ہے اور وہ خوف سے نجات کے لیے کوئی بھی شرط مان لیتا ہے۔',
    'جب خوف شدید ہوتا ہے تو عقل و شعور پر جذبات حاوی ہو جاتے ہیں، جس کا فائدہ دھوکہ باز اٹھاتے ہیں۔',
    [
      'مصنوعی جلدی کے جھانسے میں نہ آئیں',
      'خوف کے عالم میں فوری مالی یا قانونی قدم نہ اٹھائیں',
      'ہمیشہ معتبر اور سرکاری ذرائع سے تصدیق کریں',
    ]
  ),
  or: createLocalizedFearPersuasionRecord(
    'or',
    'ଭୟ-ଆଧାରିତ ପ୍ରଭାବ: କୃତ୍ରିମ ଆତଙ୍କ ଓ ତରବରିଆ ନିଷ୍ପତ୍ତିର ମନୋବିଜ୍ଞାନ',
    'ବଡ଼ କ୍ଷତିର ଭୟ ଦେଖାଇ ବିନା ବିଚାରରେ ନିଷ୍ପତ୍ତି ନେବାକୁ ବାଧ୍ୟ କରିବାର କୌଶଳ।',
    'ସରଳ ଭାଷାରେ: ବିପଦର ଆଶଙ୍କା ସୃଷ୍ଟି କରି ଚାପ ପ୍ରୟୋଗ ମାଧ୍ୟମରେ ନିଜ କଥା ମନାଇବା।',
    'ଭୟ-ଆଧାରିତ ପ୍ରଭାବରେ ବ୍ୟକ୍ତିକୁ ଅତ୍ୟଧିକ ଆତଙ୍କିତ କରି ସତ୍ୟତା ଯାଞ୍ଚ କରିବାକୁ ସୁଯୋଗ ନ ଦେଇ ନିଜ ପକ୍ଷରେ ନିଷ୍ପତ୍ତି ନିଆଯାଏ।',
    'ଭୟର ମୁହୂର୍ତ୍ତରେ ମସ୍ତିଷ୍କ ଠିକ୍ ଭାବେ କାର୍ଯ୍ୟ କରିପାରେ ନାହିଁ।',
    [
      'କୃତ୍ରିମ ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତିରୁ ସାବଧାନ ରୁହନ୍ତୁ',
      'ଭୟରେ କୌଣସି ଟଙ୍କା କାରବାର କରନ୍ତୁ ନାହିଁ',
      'ସରକାରୀ ହେଲ୍ପଲାଇନ୍ ୧୯୩୦ ର ସାହାଯ୍ୟ ନିଅନ୍ତୁ',
    ]
  ),
  as: createLocalizedFearPersuasionRecord(
    'as',
    'ভয়-ভিত্তিক প্ৰৰোচনা: কৃত্ৰিম আতংক আৰু তৎক্ষণাৎ সিদ্ধান্তৰ মনোবিজ্ঞান',
    'ডাঙৰ ক্ষতিৰ ভয় দেখুৱাই যুক্তিহীন সিদ্ধান্ত ল’বলৈ বাধ্য কৰোৱাৰ কৌশল।',
    'সহজ ভাষাত: ভয় আৰু আতংকৰ সৃষ্টি কৰি মানুহক নিজৰ কথা মানিবলৈ বাধ্য কৰোৱা।',
    'ভয়-ভিত্তিক প্ৰৰোচনাত ভুক্তভোগীক ইমানেই আতংকিত কৰি তোলা হয় যে তেওঁ বস্তুনিষ্ঠ তথ্য পৰীক্ষা কৰাৰ সুযোগ হেৰুৱাই পেলায়।',
    'ভয়ৰ সময়ত মগজুৰ যুক্তিবাদী চিন্তা শক্তি স্তব্ধ হৈ পৰে।',
    [
      'কৃত্ৰিম জৰুৰীকালীন অৱস্থাক বিশ্বাস নকৰিব',
      'আতংকৰ মাজত কোনো আৰ্থিক লেনদেন নকৰিব',
      'তথ্যৰ সত্যতা নিশ্চিত কৰক',
    ]
  ),
};
