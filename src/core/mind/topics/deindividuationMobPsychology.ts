import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: Deindividuation & Mob Psychology: The Cloak of Anonymity
 * Category: Social Psychology (social_psychology)
 * 
 * Academic Grounding:
 * - Festinger, Pepitone & Newcomb (1952): Some conditions of deindividuation in a group
 * - Zimbardo (1969): The human choice: Individuation, reason, and order versus deindividuation, impulse, and chaos
 * - Diener (1976): Effects of deindividuation variables on stealing among Halloween trick-or-treaters
 * - Postmes & Spears (1998): Deindividuation and antinormative behavior: A meta-analysis
 */

export const TOPIC_DEINDIVIDUATION_EN: MindTopicDetail = {
  id: 'deindividuation_mob_psychology',
  categoryId: 'social_psychology',
  slug: 'deindividuation-and-mob-psychology',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 5,
  viewCount: 6890,
  shareCount: 540,
  bookmarkCount: 1210,
  title: 'Deindividuation & Mob Psychology: The Cloak of Anonymity',
  subtitle: 'When individuality dissolves into a crowd or behind an anonymous screen, normal moral inhibitions collapse.',
  shortDescription: 'A state of lowered self-awareness and reduced social identity that leads to anti-normative behavior when embedded in anonymous groups or online mobs.',
  oneLineExplanation: 'Gentle, polite individuals turning into vicious monsters in an anonymous crowd or Twitter comment thread.',

  summary30s: 'Deindividuation occurs when individual accountability vanishes inside a crowd, behind a uniform, or under an anonymous online handle. Stripped of their unique identity and fear of personal consequences, civilized humans frequently engage in destructive, cruel, or unhinged mob behaviors that they would violently condemn when acting alone.',

  coreConcept: 'Coined by Leon Festinger et al. in 1952 and expanded by Philip Zimbardo in 1969, deindividuation reveals how fragile human self-regulation is when external surveillance disappears. When people feel submerged in a collective entity (a riot, a packed stadium, a dark room, or a Reddit forum), their self-monitoring prefrontal cortex dials down. The sense of personal agency is outsourced to the group\'s emotional contagion.',
  summary60s: 'Consider an accountant who coaches youth soccer on weekends and donates to animal shelters. Put that same accountant into a roaring mob of 40,000 rival soccer fans after a controversial referee call: within twenty minutes, he is hurling plastic chairs, screaming obscenities, and vandalizing streetlights. He did not undergo a personality transplant; his self-awareness was submerged. The crowd provided three toxic ingredients: anonymity, diffused responsibility, and emotional arousal.',

  quickTakeaways: [
    'The Anonymity Effect: Unidentifiable individuals act significantly more aggressively and unethically than identifiable ones',
    'Diffused Responsibility: "Nobody is responsible because everybody was doing it"',
    'The Halloween Candy Experiment: Children stole vastly more candy when hidden in masks and tested in large groups than when addressed by name',
    'Re-Individuation Antidote: Highlighting personal identity (a mirror, name tags, direct eye contact) instantly restores moral self-regulation',
  ],

  whyItHappens: 'Reduced cognitive self-awareness and accountability cues. When an individual cannot be singled out for punishment or reputation damage, evolutionary checks against anti-social behavior disappear.',
  evolutionaryMechanism: 'Warfare in ancestral bands required synchronized, fearless collective violence. Warriors painted their faces, wore masks, and danced to rhythmic chanting to shed individual hesitation and execute coordinated group aggression.',

  howItWorks: 'The deindividuation cascade: (1) Anonymity & Group Immersion: Physical or digital disguise in a large crowd; (2) Attentional Shift: Attention focuses outward on the crowd\'s emotional frenzy rather than internal values; (3) Moral Dissolution: Group norms replace personal conscience; (4) Impulsive Escalation: Extreme actions are committed without guilt.',
  whereYouEncounterIt: 'Internet harassment pile-ons, road rage through tinted car windows, stadium riots, black Friday shopping stampedes, and wartime atrocities.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Individuated Conscience vs. Deindividuated Mob',
    description: 'How individual moral responsibility shifts under the cloak of anonymity.',
    analogySideA: {
      label: 'Individuated State (Named & Visible)',
      detail: '"My name and face are known. My personal integrity, career, and legal record are on the line."',
    },
    analogySideB: {
      label: 'Deindividuated State (Anonymous in a Mob)',
      detail: '"I am just one of 10,000 screaming voices behind an anonymous mask. No one can pin this on me."',
    },
  },

  researchSummary: 'In Ed Diener’s famous 1976 Halloween study, 1,352 children trick-or-treating were instructed to take only one piece of candy from an unattended bowl. When children were alone and forced to state their name, only 8% stole extra candy. When children were in anonymous groups and their names were not requested, the stealing rate surged to 57.2%.',
  limitationsAndControversies: 'Postmes & Spears’ (1998) meta-analysis found that deindividuation does not always lead to anti-social behavior. Rather than destroying all norms, it makes individuals hyper-sensitive to the specific situational norms of the salient group (e.g., if a crowd is unified around peace or celebration, deindividuation increases prosocial generosity).',
  commonMisconceptions: 'Common myth: "Mobs turn violent because naturally evil individuals gather together." Reality: Normal, law-abiding individuals routinely commit destructive acts when anonymity and group arousal dissolve individual accountability and self-monitoring.',

  howToRecognize: [
    'Typing vicious insults on social media under an anonymous handle that you would never utter face-to-face',
    'Joining a public pile-on or petition condemning someone whose full story you haven’t read, simply because the crowd is angry',
    'Feeling a bizarre, intoxicating adrenaline surge when a group begins chanting or attacking an opponent',
    'Looting or taking shortcuts because "everyone else is getting away with it"',
  ],

  scenarios: [
    {
      id: 'scen_deind_01',
      scenarioType: 'indian_context',
      title: 'The Viral Doxxing Campaign on X (Twitter)',
      vignette: 'Kavita, a mild-mannered college lecturer in Pune, is browsing social media when she sees a 10-second out-of-context video of a restaurant waiter arguing with a customer. A viral account posts the waiter\'s personal phone number and home address with the hashtag #CancelThisMonster. Under an anonymous anime avatar account, Kavita retweets the address and types: "Hope his life is ruined, let’s call his employer non-stop!" Forty-eight hours later, the full 5-minute video surfaces, revealing the waiter was defending a teenage hostess from physical assault. Kavita stares at her tweet in horror, sick to her stomach.',
      breakdownAnalysis: 'Kavita experienced digital deindividuation. Her anonymous handle severed her personal professional identity from her digital actions. The roaring crowd on her feed created normative frenzy, convincing her she was participating in righteous collective justice.',
      recommendedAction: 'Apply the Billboard Rule: Never post, forward, or chant anything under an anonymous account that you would not proudly sign your real name to on a highway billboard in your hometown.',
    },
  ],

  examples: [
    {
      id: 'ex_deind_01',
      domain: 'general',
      displayOrder: 1,
      title: 'The Tinted-Window Transformation',
      description: 'People who are gentle and courteous in a walking line at a grocery store become venomous, screaming maniacs behind the tinted windows and heavy metal chassis of a speeding car.',
      takeaway: 'Vehicular anonymity severs human-to-human micro-empathy.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_deind_01',
      scenarioContext: 'An online discussion forum experiences an explosion of toxic harassment, trolling, and death threats. The product team considers three architectural changes to restore civil discourse.',
      question: 'Which intervention is most directly grounded in deindividuation research to suppress toxic mob behavior?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Requiring real-name identity verification and displaying user location and profile photos next to comments',
          explanation: 'Accurate: re-individuating users eliminates the cloak of anonymity and forces personal accountability.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Allowing users to create unlimited temporary throwaway accounts to protect their privacy',
          explanation: 'This maximizes anonymity, leading to catastrophic spikes in anti-normative cruelty.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Increasing the maximum comment character limit from 280 to 2,000 characters',
          explanation: 'Character length has zero relationship to accountability cues or deindividuation.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'When you make individuals visible and accountable, cruelty drops exponentially.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Address individuals by name and bring personal accountability back into the room when group energy turns hostile.',
  psychologicalDefenses: [
    {
      title: 'The Real-Name Mirror Test',
      instruction: 'Before posting anything controversial or hostile online, ask: "Would I be proud to read this comment aloud at my family dinner or in front of my coworkers?" If not, delete it.',
    },
    {
      title: 'Break the Physical/Digital Uniform',
      instruction: 'In tense group settings, make direct personal eye contact, use individual names ("Ramesh, look at me"), and physically step away from the crowd perimeter to re-engage your prefrontal cortex.',
    },
    {
      title: 'Resist the Lure of Anonymous Mobs',
      instruction: 'Recognize that participating in collective shaming or cancel mobs does not make you a moral hero; it makes you a deindividuated cog in an ancient tribal mob.',
    },
  ],

  reflectionPrompt: 'Have you ever posted a harsher comment under an anonymous username than you would ever say to someone\'s face? What drove that shift?',

  references: [
    {
      id: 'ref_festinger_1952',
      authors: 'Festinger, L., Pepitone, A., & Newcomb, T.',
      year: 1952,
      title: 'Some conditions of deindividuation in a group',
      publicationName: 'The Journal of Abnormal and Social Psychology',
      volumeIssue: '47(2S), 382-389',
      doi: '10.1037/h0057906',
      evidenceStrength: 'historical_classic',
    },
    {
      id: 'ref_diener_1976',
      authors: 'Diener, E., Fraser, S. C., Beaman, A. L., & Kelem, R. T.',
      year: 1976,
      title: 'Effects of deindividuation variables on stealing among Halloween trick-or-treaters',
      publicationName: 'Journal of Personality and Social Psychology',
      volumeIssue: '33(2), 178-183',
      doi: '10.1037/0022-3514.33.2.178',
      evidenceStrength: 'empirical_study',
    },
  ],

  relatedTopics: [
    {
      topicId: 'bystander_effect',
      slug: 'bystander-effect',
      title: 'The Bystander Effect',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'ingroup_outgroup_bias',
      slug: 'ingroup-outgroup-bias',
      title: 'Ingroup-Outgroup Bias',
      relationshipType: 'amplified_by',
    },
  ],
};

export const TOPIC_DEINDIVIDUATION: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_DEINDIVIDUATION_EN,
  hinglish: {
    ...TOPIC_DEINDIVIDUATION_EN,
    title: 'Deindividuation: Bheed Aur Anonymity Ka Zeher',
    subtitle: 'Jab chehra chhip jata hai ya insaan bheed ka hissa ban jata hai, tab sabse shareef log bhi jaanwar ban jate hain.',
    shortDescription: 'Ek aisi psychological state jisme anonymity aur bheed ke darr se insaan ki personal morality khatam ho jati hai.',
    oneLineExplanation: 'Real life me shareef aadmi ka Twitter par fake account se galiya bakna.',
    summary30s: 'Leon Festinger aur Philip Zimbardo ne prove kiya ki jab insaan ko lagta hai ki use koi pehchan nahi sakta (bheed me, mask ke piche, ya anonymous internet account par), toh uska personal conscience switch off ho jata hai. Woh aise violent aur gande kaam kar jata hai jiska akele me wo soch bhi nahi sakta tha.',
  },
  hi: {
    ...TOPIC_DEINDIVIDUATION_EN,
    title: 'Deindividuation (व्यक्तिहीनता और भीड़ मनोविज्ञान)',
    subtitle: 'गुमनामी की आड़ में व्यक्तिगत नैतिकता का पतन और भीड़ की हिंसक मानसिकता।',
    shortDescription: 'जब व्यक्ति भीड़ या इंटरनेट की गुमनामी में अपनी व्यक्तिगत पहचान खो देता है, तो उसकी सामाजिक और नैतिक संकोच की भावना समाप्त हो जाती है।',
    oneLineExplanation: 'भीड़ या अज्ञात मुखौटे के पीछे सभ्य व्यक्ति का बर्बर आचरण।',
    summary30s: 'व्यक्तिहीनता (Deindividuation) तब घटित होती है जब व्यक्ति को लगता है कि उसकी पहचान छिपी हुई है और उस पर कोई व्यक्तिगत दायित्व नहीं आएगा। 1976 के हैलोवीन कैंडी प्रयोग में साबित हुआ कि जब बच्चों के चेहरे मुखौटे से ढके थे, तब उन्होंने अकेले और खुले चेहरे की तुलना में 7 गुना अधिक चोरी की।',
  },
  gu: TOPIC_DEINDIVIDUATION_EN,
  mr: TOPIC_DEINDIVIDUATION_EN,
  te: TOPIC_DEINDIVIDUATION_EN,
  ta: TOPIC_DEINDIVIDUATION_EN,
  kn: TOPIC_DEINDIVIDUATION_EN,
  ml: TOPIC_DEINDIVIDUATION_EN,
  bn: TOPIC_DEINDIVIDUATION_EN,
  pa: TOPIC_DEINDIVIDUATION_EN,
  ur: TOPIC_DEINDIVIDUATION_EN,
  or: TOPIC_DEINDIVIDUATION_EN,
  as: TOPIC_DEINDIVIDUATION_EN,
  };
