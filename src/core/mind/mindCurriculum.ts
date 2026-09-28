/**
 * Mentalab Mind Psychology Knowledge Architecture & Curriculum Registry
 * 
 * Structured knowledge system answering the 9 Core Principles for every topic:
 * 1. What is it?
 * 2. Why does it happen?
 * 3. How does it work?
 * 4. What does research say?
 * 5. What does it look like in real life?
 * 6. How can I recognize it?
 * 7. What misconceptions exist?
 * 8. What should I do about it?
 * 9. Can I test whether I understood it?
 *
 * Covers the 10 Primary Content Areas + Critical Thinking across
 * Beginner, Intermediate, and Advanced conceptual difficulty tiers.
 */

import {
  MindCategory,
  MindTopicDetail,
  MindLanguageCode,
  MindDifficulty,
  PrimaryMindCategoryKey,
} from './types';

// ============================================================================
// 10 PRIMARY CONTENT AREAS (+ CRITICAL THINKING)
// ============================================================================

export const PRIMARY_MIND_CATEGORIES: Record<
  PrimaryMindCategoryKey,
  {
    slug: string;
    iconName: string;
    accentColor: string;
    displayOrder: number;
    titleEn: string;
    titleHinglish: string;
    subtitleEn: string;
    subtitleHinglish: string;
    descriptionEn: string;
    descriptionHinglish: string;
  }
> = {
  cognitive_biases: {
    slug: 'cognitive-biases',
    iconName: 'Brain',
    accentColor: 'violet',
    displayOrder: 1,
    titleEn: 'Cognitive Biases',
    titleHinglish: 'Cognitive Biases',
    subtitleEn: 'Systematic deviations from rationality in human judgment.',
    subtitleHinglish: 'Humara dimaag decisions lete waqt kaunse shortcuts leta hai.',
    descriptionEn: 'Learn how the brain takes mental shortcuts (heuristics) that lead to predictable perception errors.',
    descriptionHinglish: 'Janiye kaise dimaag ki natural tendencies hume galat conclusions aur judgments tak le jati hain.',
  },
  social_psychology: {
    slug: 'social-psychology',
    iconName: 'Users',
    accentColor: 'blue',
    displayOrder: 2,
    titleEn: 'Social Psychology',
    titleHinglish: 'Social Psychology',
    subtitleEn: 'How the presence of others shapes human thinking and action.',
    subtitleHinglish: 'Logon ki presence humari thinking aur actions ko kaise badalti hai.',
    descriptionEn: 'Explore conformity, social proof, bystander intervention, obedience, and collective group dynamics.',
    descriptionHinglish: 'Samjhein social proof, bheed ka asar (conformity), aur groups me decision lene ke scientific patterns.',
  },
  persuasion_influence: {
    slug: 'persuasion-and-influence',
    iconName: 'Eye',
    accentColor: 'indigo',
    displayOrder: 3,
    titleEn: 'Persuasion & Influence',
    titleHinglish: 'Persuasion & Influence',
    subtitleEn: 'The science of how attitudes and behaviors are shaped ethically.',
    subtitleHinglish: 'Log doosron ko kaise convince aur influence karte hain.',
    descriptionEn: 'Scientifically validated principles: reciprocity, scarcity, commitment, liking, and ethical framing.',
    descriptionHinglish: 'Cialdini ke core principles aur social influence ke scientific rules seekhein, ethical boundaries ke sath.',
  },
  manipulation_awareness: {
    slug: 'manipulation-awareness',
    iconName: 'ShieldAlert',
    accentColor: 'rose',
    displayOrder: 4,
    titleEn: 'Manipulation Awareness',
    titleHinglish: 'Manipulation Awareness',
    subtitleEn: 'Recognize emotional coercion while understanding context.',
    subtitleHinglish: 'Emotional manipulation aur pressure tactics ko pehchanein.',
    descriptionEn: 'Build psychological immunity against guilt-tripping and gaslighting, while distinguishing malice from normal misunderstanding.',
    descriptionHinglish: 'Seekhein kaise guilt-tripping aur gaslighting se bachein, aur samjhein ki kab baat sirf misunderstanding hai.',
  },
  decision_making: {
    slug: 'decision-making',
    iconName: 'Scale',
    accentColor: 'amber',
    displayOrder: 5,
    titleEn: 'Decision Making',
    titleHinglish: 'Decision Making',
    subtitleEn: 'Risk evaluation, uncertainty intuition, and choice architecture.',
    subtitleHinglish: 'Accurate aur rational decisions lene ki mental frameworks.',
    descriptionEn: 'Understand overconfidence, probability misjudgments, the planning fallacy, and sunk-cost traps.',
    descriptionHinglish: 'Risk, uncertainty, aur planning fallacy ko samjhkar bade decisions me expensive galtiyo se bachein.',
  },
  emotions: {
    slug: 'emotions-and-regulation',
    iconName: 'Heart',
    accentColor: 'red',
    displayOrder: 6,
    titleEn: 'Emotions & Regulation',
    titleHinglish: 'Emotions & Regulation',
    subtitleEn: 'Neurobiology of feelings, triggers, motivation, and regulation.',
    subtitleHinglish: 'Feelings, stress aur emotional triggers ka scientific control.',
    descriptionEn: 'Master cognitive reappraisal, understand amygdala activation, and build emotional resilience without toxic suppression.',
    descriptionHinglish: 'Gusse, darr aur motivation ke biological reasons samjhein aur seekhein unhe rationally regulate karna.',
  },
  relationships_comm: {
    slug: 'relationships-and-communication',
    iconName: 'HeartHandshake',
    accentColor: 'pink',
    displayOrder: 7,
    titleEn: 'Relationships & Communication',
    titleHinglish: 'Relationships & Communication',
    subtitleEn: 'Assertiveness, boundaries, active listening, and conflict resolution.',
    subtitleHinglish: 'Healthy boundaries aur effective communication ka science.',
    descriptionEn: 'Non-pathologizing, evidence-based frameworks to express boundaries and resolve interpersonal friction cleanly.',
    descriptionHinglish: 'Seekhein bina rude huye "Na" bolna, active listening, aur misunderstanding ko clear karne ke tareeqe.',
  },
  social_media_tech: {
    slug: 'social-media-psychology',
    iconName: 'Radio',
    accentColor: 'cyan',
    displayOrder: 8,
    titleEn: 'Social Media Psychology',
    titleHinglish: 'Social Media Psychology',
    subtitleEn: 'Algorithmic reinforcement, variable rewards, and attention economics.',
    subtitleHinglish: 'Apps aur algorithms hamare attention ko kaise capture karte hain.',
    descriptionEn: 'Understand how notification loops, moral outrage contagion, and infinite scrolls hijack neurochemical reward pathways.',
    descriptionHinglish: 'Dopamine reward loops, infinite scroll aur online outrage ke piche ki psychology samjhein.',
  },
  consumer_advertising: {
    slug: 'consumer-and-advertising-psychology',
    iconName: 'ShoppingBag',
    accentColor: 'orange',
    displayOrder: 9,
    titleEn: 'Consumer & Advertising Psychology',
    titleHinglish: 'Consumer & Advertising Psychology',
    subtitleEn: 'Anchoring, decoy effects, default biases, and retail nudges.',
    subtitleHinglish: 'Brands aur ads humse paise kharch karwane ke liye kya karte hain.',
    descriptionEn: 'Detect commercial persuasion tactics such as fake countdown timers, strike-through pricing, and decoy options.',
    descriptionHinglish: 'Pricing tricks, fake discount tags, aur decoy options ko pehchan kar smart consumer banein.',
  },
  learning_psychology: {
    slug: 'learning-psychology',
    iconName: 'Sparkles',
    accentColor: 'emerald',
    displayOrder: 10,
    titleEn: 'Learning Psychology',
    titleHinglish: 'Learning Psychology',
    subtitleEn: 'Retrieval practice, spacing, cognitive load, and deliberate training.',
    subtitleHinglish: 'Dimaag nayi cheezein kaise seekhta aur yaad rakhta hai.',
    descriptionEn: 'Directly connects with Mentalab calculation mastery: the cognitive science of memory consolidation and rapid skill acquisition.',
    descriptionHinglish: 'Retrieval practice, spaced repetition aur Mentalab speed drills ka scientific connection samjhein.',
  },
  critical_thinking: {
    slug: 'critical-thinking',
    iconName: 'Compass',
    accentColor: 'teal',
    displayOrder: 11,
    titleEn: 'Critical Thinking',
    titleHinglish: 'Critical Thinking',
    subtitleEn: 'First-principles reasoning, falsification, and mental models.',
    subtitleHinglish: 'Clear thinking, logic aur mental models ka practical guide.',
    descriptionEn: 'Learn to separate personal identity from hypotheses, detect logical fallacies, and stress-test assumptions.',
    descriptionHinglish: 'Har information ko blind trust karne ke bajaye scientific tareeqe se question karna seekhein.',
  },
};

// ============================================================================
// COMPREHENSIVE CURRICULUM TOPICS (Fully Answering the 9 Core Principles)
// ============================================================================


// ============================================================================
// TOPIC 2: GASLIGHTING & REALITY DISTORTION (Manipulation Awareness)
// Essential: "Context Matters" — distinguishing intentional malice from misunderstandings
// ============================================================================


// ============================================================================
// TOPIC 3: RETRIEVAL PRACTICE & SPACING (Learning Psychology)
// Deep bridge with Mentalab calculation mastery
// ============================================================================



import { TOPIC_CONFIRMATION_BIAS } from './topics/confirmationBias';
import { TOPIC_GASLIGHTING_AWARENESS } from './topics/gaslightingAwareness';
import { TOPIC_RETRIEVAL_PRACTICE } from './topics/retrievalPractice';
import { TOPIC_SOCIAL_PROOF } from './topics/socialProof';
import { TOPIC_ANCHORING_EFFECT } from './topics/anchoringEffect';
import { TOPIC_HEALTHY_BOUNDARIES } from './topics/healthyBoundaries';
import { TOPIC_ALGORITHMIC_REINFORCEMENT } from './topics/algorithmicReinforcement';
import { TOPIC_RECIPROCITY_PRINCIPLE } from './topics/reciprocityPrinciple';
import { TOPIC_EMOTIONAL_REGULATION } from './topics/emotionalRegulation';
import { TOPIC_FIRST_PRINCIPLES } from './topics/firstPrinciplesThinking';
import { TOPIC_VICTIM_PLAYING } from './topics/victimPlaying';
import { TOPIC_GUILT_TRIPPING } from './topics/guiltTripping';
import { TOPIC_EMOTIONAL_BLACKMAIL } from './topics/emotionalBlackmail';
import { TOPIC_FEAR_BASED_PERSUASION } from './topics/fearBasedPersuasion';
import { TOPIC_INTIMIDATION } from './topics/intimidation';
import { TOPIC_THREATS_IMPLIED_CONSEQUENCES } from './topics/threatsImpliedConsequences';
import { TOPIC_SHAME_BASED_INFLUENCE } from './topics/shameBasedInfluence';
import { TOPIC_LOVE_BOMBING } from './topics/loveBombing';
import { TOPIC_SILENT_TREATMENT } from './topics/silentTreatment';
import { TOPIC_STONEWALLING } from './topics/stonewalling';
import { TOPIC_SUNK_COST_FALLACY } from './topics/sunkCostFallacy';
import { TOPIC_DUNNING_KRUGER } from './topics/dunningKrugerEffect';
import { TOPIC_BYSTANDER_EFFECT } from './topics/bystanderEffect';
import { TOPIC_COMMITMENT_CONSISTENCY } from './topics/commitmentConsistency';
import { TOPIC_LOSS_AVERSION } from './topics/lossAversion';
import { TOPIC_COGNITIVE_REAPPRAISAL } from './topics/cognitiveReappraisal';
import { TOPIC_ACTIVE_LISTENING } from './topics/activeListening';
import { TOPIC_VARIABLE_REWARD_SCHEDULES } from './topics/variableRewardSchedules';
import { TOPIC_DECOY_EFFECT } from './topics/decoyEffect';
import { TOPIC_SPACED_REPETITION } from './topics/spacedRepetition';
import { TOPIC_FALSIFICATION_PRINCIPLE } from './topics/falsificationPrinciple';
import { TOPIC_INTERMITTENT_REINFORCEMENT } from './topics/intermittentReinforcement';
import { TOPIC_MOVING_GOALPOSTS } from './topics/movingTheGoalposts';
import { TOPIC_BLAME_SHIFTING } from './topics/blameShifting';
import { TOPIC_DARVO_PATTERN } from './topics/darvoPattern';
import { TOPIC_GASLIGHTING_DYNAMICS } from './topics/gaslightingDeepDive';
import { TOPIC_TRIANGULATION_PATTERN } from './topics/triangulationPattern';
import { TOPIC_SCAPEGOATING_PATTERN } from './topics/scapegoatingPattern';
import { TOPIC_PLAYING_PEOPLE_AGAINST_EACH_OTHER } from './topics/playingPeopleAgainstEachOther';
import { TOPIC_BOUNDARY_TESTING } from './topics/boundaryTesting';
import { TOPIC_INFORMATION_WITHHOLDING } from './topics/informationWithholding';

// New Multi-Track Curriculum Topics
import { TOPIC_AVAILABILITY_HEURISTIC } from './topics/availabilityHeuristic';
import { TOPIC_HINDSIGHT_BIAS } from './topics/hindsightBias';
import { TOPIC_FAE } from './topics/fundamentalAttributionError';
import { TOPIC_FRAMING_EFFECT } from './topics/framingEffect';
import { TOPIC_SURVIVORSHIP_BIAS } from './topics/survivorshipBias';
import { TOPIC_NEGATIVITY_BIAS } from './topics/negativityBias';
import { TOPIC_CONFORMITY_ASCH } from './topics/conformityAschEffect';
import { TOPIC_INGROUP_OUTGROUP } from './topics/ingroupOutgroupBias';
import { TOPIC_DEINDIVIDUATION } from './topics/deindividuationMobPsychology';
import { TOPIC_SCARCITY } from './topics/scarcityHeuristic';
import { TOPIC_AUTHORITY_BIAS } from './topics/authorityBiasMilgram';
import { TOPIC_FOOT_IN_THE_DOOR } from './topics/footInTheDoorTechnique';
import { TOPIC_STATUS_QUO } from './topics/statusQuoBias';
import { TOPIC_PLANNING_FALLACY } from './topics/planningFallacy';
import { TOPIC_HYPERBOLIC_DISCOUNTING } from './topics/hyperbolicDiscounting';
import { TOPIC_AFFECT_HEURISTIC } from './topics/affectHeuristic';
import { TOPIC_EMOTIONAL_CONTAGION } from './topics/emotionalContagion';
import { TOPIC_GOTTMAN_HORSEMEN } from './topics/gottmanFourHorsemen';
import { TOPIC_NVC } from './topics/nonviolentCommunication';
import { TOPIC_SOCIAL_COMPARISON } from './topics/socialComparisonTheory';
import { TOPIC_FOMO_ATTENTION } from './topics/fomoAttentionCapture';
import { TOPIC_ENDOWMENT_EFFECT } from './topics/endowmentEffect';
import { TOPIC_PARADOX_OF_CHOICE } from './topics/paradoxOfChoice';
import { TOPIC_INTERLEAVING_EFFECT } from './topics/interleavingEffect';
import { TOPIC_COGNITIVE_LOAD } from './topics/cognitiveLoadTheory';
import { TOPIC_OCCAMS_RAZOR } from './topics/occamsRazor';
import { TOPIC_STEELMANNING } from './topics/steelmanningTechnique';
import { TOPIC_CORRELATION_CAUSATION } from './topics/correlationVsCausation';

// Additional Cognitive Biases Topics (24 Core Curriculum Topics)
import { TOPIC_SELF_SERVING_BIAS } from './topics/selfServingBias';
import { TOPIC_HALO_EFFECT } from './topics/haloEffect';
import { TOPIC_INATTENTIONAL_BLINDNESS } from './topics/inattentionalBlindness';
import { TOPIC_BANDWAGON_EFFECT } from './topics/bandwagonEffect';
import { TOPIC_OPTIMISM_BIAS } from './topics/optimismBias';
import { TOPIC_GAMBLERS_FALLACY } from './topics/gamblersFallacy';
import { TOPIC_OUTCOME_BIAS } from './topics/outcomeBias';
import { TOPIC_BIAS_BLIND_SPOT } from './topics/biasBlindSpot';
import { TOPIC_BELIEF_PERSEVERANCE } from './topics/beliefPerseverance';
import { TOPIC_OVERCONFIDENCE_EFFECT } from './topics/overconfidenceEffect';
import { TOPIC_FALSE_CONSENSUS_EFFECT } from './topics/falseConsensusEffect';
import { TOPIC_ACTOR_OBSERVER_BIAS } from './topics/actorObserverBias';
import { TOPIC_BASE_RATE_FALLACY } from './topics/baseRateFallacy';
import { TOPIC_CURSE_OF_KNOWLEDGE } from './topics/curseOfKnowledge';
import { TOPIC_REPRESENTATIVENESS_HEURISTIC } from './topics/representativenessHeuristic';
import { TOPIC_OMISSION_BIAS } from './topics/omissionBias';

// Social Psychology Expansion Topics
import { TOPIC_SOCIAL_LOAFING } from './topics/socialLoafing';
import { TOPIC_GROUPTHINK } from './topics/groupthink';
import { TOPIC_GROUP_POLARIZATION } from './topics/groupPolarization';
import { TOPIC_COGNITIVE_DISSONANCE } from './topics/cognitiveDissonance';
import { TOPIC_SOCIAL_FACILITATION } from './topics/socialFacilitation';
import { TOPIC_PLURALISTIC_IGNORANCE } from './topics/pluralisticIgnorance';
import { TOPIC_DIFFUSION_OF_RESPONSIBILITY } from './topics/diffusionOfResponsibility';
import { TOPIC_PYGMALION_EFFECT } from './topics/pygmalionEffect';
import { TOPIC_SPOTLIGHT_EFFECT } from './topics/spotlightEffect';
import { TOPIC_PSYCHOLOGICAL_REACTANCE } from './topics/psychologicalReactance';
import { TOPIC_JUST_WORLD_HYPOTHESIS } from './topics/justWorldHypothesis';
import { TOPIC_REALISTIC_CONFLICT_THEORY } from './topics/realisticConflictTheory';
import { TOPIC_SOCIAL_IDENTITY_THEORY } from './topics/socialIdentityTheory';
import { TOPIC_NORMATIVE_INFORMATIONAL_INFLUENCE } from './topics/normativeInformationalInfluence';
import { TOPIC_ILLUSION_OF_TRANSPARENCY } from './topics/illusionOfTransparency';

// Decision Making Expansion Topics
import { TOPIC_PROSPECT_THEORY } from './topics/prospectTheory';
import { TOPIC_SATISFICING_VS_MAXIMIZING } from './topics/satisficingVsMaximizing';
import { TOPIC_OPPORTUNITY_COST_NEGLECT } from './topics/opportunityCostNeglect';
import { TOPIC_CHOICE_OVERLOAD } from './topics/choiceOverload';
import { TOPIC_ESCALATION_OF_COMMITMENT } from './topics/escalationOfCommitment';
import { TOPIC_MENTAL_ACCOUNTING } from './topics/mentalAccounting';
import { TOPIC_BOUNDED_RATIONALITY } from './topics/boundedRationality';
import { TOPIC_REGRET_AVERSION } from './topics/regretAversion';
import { TOPIC_ZERO_SUM_BIAS } from './topics/zeroSumBias';
import { TOPIC_PRESENT_BIAS_COMMITMENT } from './topics/presentBiasCommitment';

// Persuasion & Influence Expansion Topics
import { TOPIC_DOOR_IN_THE_FACE } from './topics/doorInTheFaceTechnique';
import { TOPIC_LOW_BALL_TECHNIQUE } from './topics/lowBallTechnique';
import { TOPIC_ELABORATION_LIKELIHOOD_MODEL } from './topics/elaborationLikelihoodModel';
import { TOPIC_PRE_SUASION } from './topics/preSuasionTechnique';
import { TOPIC_LIKING_PRINCIPLE } from './topics/likingPrinciple';
import { TOPIC_SLEEPER_EFFECT } from './topics/sleeperEffect';
import { TOPIC_INOCULATION_THEORY } from './topics/inoculationTheory';
import { TOPIC_MERE_EXPOSURE_EFFECT } from './topics/mereExposureEffect';
import { TOPIC_LABELING_TECHNIQUE } from './topics/labelingTechnique';
import { TOPIC_THATS_NOT_ALL_TECHNIQUE } from './topics/thatsNotAllTechnique';

// Emotions & Regulation Expansion Topics
import { TOPIC_AMYGDALA_HIJACK } from './topics/amygdalaHijack';
import { TOPIC_SOMATIC_MARKER_HYPOTHESIS } from './topics/somaticMarkerHypothesis';
import { TOPIC_HEDONIC_TREADMILL } from './topics/hedonicTreadmill';
import { TOPIC_BROADEN_AND_BUILD } from './topics/broadenAndBuildTheory';
import { TOPIC_EMOTIONAL_GRANULARITY } from './topics/emotionalGranularity';
import { TOPIC_EXPRESSIVE_SUPPRESSION_PARADOX } from './topics/expressiveSuppressionParadox';

// Relationships & Communication Expansion Topics
import { TOPIC_ATTACHMENT_STYLES_ADULTS } from './topics/attachmentStylesAdults';
import { TOPIC_MICHELANGELO_PHENOMENON } from './topics/michelangeloPhenomenon';
import { TOPIC_PASSIVE_AGGRESSIVE_PATTERNS } from './topics/passiveAggressivePatterns';
import { TOPIC_DRAMA_TRIANGLE } from './topics/karpmanDramaTriangle';
import { TOPIC_EMOTIONAL_BIDS_REPAIR } from './topics/emotionalBidsRepairAttempts';
import { TOPIC_ACTOR_OBSERVER_IN_RELATIONSHIPS } from './topics/actorObserverInRelationships';

// Social Media Psychology Expansion Topics
import { TOPIC_DOOMSCROLLING_CYCLE } from './topics/doomscrollingCycle';
import { TOPIC_PHANTOM_VIBRATION_SYNDROME } from './topics/phantomVibrationSyndrome';
import { TOPIC_PARASOCIAL_INTERACTION } from './topics/parasocialInteraction';
import { TOPIC_CONTEXT_COLLAPSE } from './topics/contextCollapse';
import { TOPIC_ONLINE_DISINHIBITION_EFFECT } from './topics/onlineDisinhibitionEffect';
import { TOPIC_INFINITE_SCROLL_CESSATION } from './topics/infiniteScrollCessation';

// Consumer & Advertising Psychology Expansion Topics
import { TOPIC_PENNIES_A_DAY_FRAMING } from './topics/penniesADayFraming';
import { TOPIC_PRICE_QUALITY_HEURISTIC } from './topics/priceQualityHeuristic';
import { TOPIC_ZERO_PRICE_EFFECT } from './topics/zeroPriceEffect';
import { TOPIC_VEBLEN_SNOB_EFFECT } from './topics/veblenSnobEffect';
import { TOPIC_GOAL_GRADIENT_EFFECT } from './topics/goalGradientEffect';
import { TOPIC_SCARCITY_COUNTDOWN_TRIGGERS } from './topics/scarcityCountdownTriggers';

// Learning Psychology Expansion Topics
import { TOPIC_GENERATION_EFFECT } from './topics/generationEffect';
import { TOPIC_DUAL_CODING_THEORY } from './topics/dualCodingTheory';
import { TOPIC_DESIRABLE_DIFFICULTIES } from './topics/desirableDifficulties';
import { TOPIC_FEYNMAN_TECHNIQUE } from './topics/feynmanTechnique';

// Critical Thinking Expansion Topics
import { TOPIC_SECOND_ORDER_THINKING } from './topics/secondOrderThinking';
import { TOPIC_INVERSION_TECHNIQUE } from './topics/inversionTechnique';
import { TOPIC_HANLONS_RAZOR } from './topics/hanlonsRazor';
import { TOPIC_MAP_TERRITORY_FALLACY } from './topics/mapTerritoryFallacy';
import { TOPIC_CHESTERTONS_FENCE } from './topics/chestertonsFence';

export {
  TOPIC_CONFIRMATION_BIAS,
  TOPIC_GASLIGHTING_AWARENESS,
  TOPIC_RETRIEVAL_PRACTICE,
  TOPIC_SOCIAL_PROOF,
  TOPIC_ANCHORING_EFFECT,
  TOPIC_HEALTHY_BOUNDARIES,
  TOPIC_ALGORITHMIC_REINFORCEMENT,
  TOPIC_RECIPROCITY_PRINCIPLE,
  TOPIC_EMOTIONAL_REGULATION,
  TOPIC_FIRST_PRINCIPLES,
  TOPIC_VICTIM_PLAYING,
  TOPIC_GUILT_TRIPPING,
  TOPIC_EMOTIONAL_BLACKMAIL,
  TOPIC_FEAR_BASED_PERSUASION,
  TOPIC_INTIMIDATION,
  TOPIC_THREATS_IMPLIED_CONSEQUENCES,
  TOPIC_SHAME_BASED_INFLUENCE,
  TOPIC_LOVE_BOMBING,
  TOPIC_SILENT_TREATMENT,
  TOPIC_STONEWALLING,
  TOPIC_INTERMITTENT_REINFORCEMENT,
  TOPIC_MOVING_GOALPOSTS,
  TOPIC_BLAME_SHIFTING,
  TOPIC_DARVO_PATTERN,
  TOPIC_GASLIGHTING_DYNAMICS,
  TOPIC_TRIANGULATION_PATTERN,
  TOPIC_SCAPEGOATING_PATTERN,
  TOPIC_PLAYING_PEOPLE_AGAINST_EACH_OTHER,
  TOPIC_BOUNDARY_TESTING,
  TOPIC_INFORMATION_WITHHOLDING,
  TOPIC_SUNK_COST_FALLACY,
  TOPIC_DUNNING_KRUGER,
  TOPIC_BYSTANDER_EFFECT,
  TOPIC_COMMITMENT_CONSISTENCY,
  TOPIC_LOSS_AVERSION,
  TOPIC_COGNITIVE_REAPPRAISAL,
  TOPIC_ACTIVE_LISTENING,
  TOPIC_VARIABLE_REWARD_SCHEDULES,
  TOPIC_DECOY_EFFECT,
  TOPIC_SPACED_REPETITION,
  TOPIC_FALSIFICATION_PRINCIPLE,
  TOPIC_AVAILABILITY_HEURISTIC,
  TOPIC_HINDSIGHT_BIAS,
  TOPIC_FAE,
  TOPIC_FRAMING_EFFECT,
  TOPIC_SURVIVORSHIP_BIAS,
  TOPIC_NEGATIVITY_BIAS,
  TOPIC_CONFORMITY_ASCH,
  TOPIC_INGROUP_OUTGROUP,
  TOPIC_DEINDIVIDUATION,
  TOPIC_SCARCITY,
  TOPIC_AUTHORITY_BIAS,
  TOPIC_FOOT_IN_THE_DOOR,
  TOPIC_STATUS_QUO,
  TOPIC_PLANNING_FALLACY,
  TOPIC_HYPERBOLIC_DISCOUNTING,
  TOPIC_AFFECT_HEURISTIC,
  TOPIC_EMOTIONAL_CONTAGION,
  TOPIC_GOTTMAN_HORSEMEN,
  TOPIC_NVC,
  TOPIC_SOCIAL_COMPARISON,
  TOPIC_FOMO_ATTENTION,
  TOPIC_ENDOWMENT_EFFECT,
  TOPIC_PARADOX_OF_CHOICE,
  TOPIC_INTERLEAVING_EFFECT,
  TOPIC_COGNITIVE_LOAD,
  TOPIC_OCCAMS_RAZOR,
  TOPIC_STEELMANNING,
  TOPIC_CORRELATION_CAUSATION,
  TOPIC_SELF_SERVING_BIAS,
  TOPIC_HALO_EFFECT,
  TOPIC_INATTENTIONAL_BLINDNESS,
  TOPIC_BANDWAGON_EFFECT,
  TOPIC_OPTIMISM_BIAS,
  TOPIC_GAMBLERS_FALLACY,
  TOPIC_OUTCOME_BIAS,
  TOPIC_BIAS_BLIND_SPOT,
  TOPIC_BELIEF_PERSEVERANCE,
  TOPIC_OVERCONFIDENCE_EFFECT,
  TOPIC_FALSE_CONSENSUS_EFFECT,
  TOPIC_ACTOR_OBSERVER_BIAS,
  TOPIC_BASE_RATE_FALLACY,
  TOPIC_CURSE_OF_KNOWLEDGE,
  TOPIC_REPRESENTATIVENESS_HEURISTIC,
  TOPIC_OMISSION_BIAS,
  // Social Psychology Exports
  TOPIC_SOCIAL_LOAFING,
  TOPIC_GROUPTHINK,
  TOPIC_GROUP_POLARIZATION,
  TOPIC_COGNITIVE_DISSONANCE,
  TOPIC_SOCIAL_FACILITATION,
  TOPIC_PLURALISTIC_IGNORANCE,
  TOPIC_DIFFUSION_OF_RESPONSIBILITY,
  TOPIC_PYGMALION_EFFECT,
  TOPIC_SPOTLIGHT_EFFECT,
  TOPIC_PSYCHOLOGICAL_REACTANCE,
  TOPIC_JUST_WORLD_HYPOTHESIS,
  TOPIC_REALISTIC_CONFLICT_THEORY,
  TOPIC_SOCIAL_IDENTITY_THEORY,
  TOPIC_NORMATIVE_INFORMATIONAL_INFLUENCE,
  TOPIC_ILLUSION_OF_TRANSPARENCY,
  // Decision Making Exports
  TOPIC_PROSPECT_THEORY,
  TOPIC_SATISFICING_VS_MAXIMIZING,
  TOPIC_OPPORTUNITY_COST_NEGLECT,
  TOPIC_CHOICE_OVERLOAD,
  TOPIC_ESCALATION_OF_COMMITMENT,
  TOPIC_MENTAL_ACCOUNTING,
  TOPIC_BOUNDED_RATIONALITY,
  TOPIC_REGRET_AVERSION,
  TOPIC_ZERO_SUM_BIAS,
  TOPIC_PRESENT_BIAS_COMMITMENT,
  // Persuasion & Influence Exports
  TOPIC_DOOR_IN_THE_FACE,
  TOPIC_LOW_BALL_TECHNIQUE,
  TOPIC_ELABORATION_LIKELIHOOD_MODEL,
  TOPIC_PRE_SUASION,
  TOPIC_LIKING_PRINCIPLE,
  TOPIC_SLEEPER_EFFECT,
  TOPIC_INOCULATION_THEORY,
  TOPIC_MERE_EXPOSURE_EFFECT,
  TOPIC_LABELING_TECHNIQUE,
  TOPIC_THATS_NOT_ALL_TECHNIQUE,
  // Emotions & Regulation Expansion Exports
  TOPIC_AMYGDALA_HIJACK,
  TOPIC_SOMATIC_MARKER_HYPOTHESIS,
  TOPIC_HEDONIC_TREADMILL,
  TOPIC_BROADEN_AND_BUILD,
  TOPIC_EMOTIONAL_GRANULARITY,
  TOPIC_EXPRESSIVE_SUPPRESSION_PARADOX,
  // Relationships & Communication Expansion Exports
  TOPIC_ATTACHMENT_STYLES_ADULTS,
  TOPIC_MICHELANGELO_PHENOMENON,
  TOPIC_PASSIVE_AGGRESSIVE_PATTERNS,
  TOPIC_DRAMA_TRIANGLE,
  TOPIC_EMOTIONAL_BIDS_REPAIR,
  TOPIC_ACTOR_OBSERVER_IN_RELATIONSHIPS,
  // Social Media Psychology Expansion Exports
  TOPIC_DOOMSCROLLING_CYCLE,
  TOPIC_PHANTOM_VIBRATION_SYNDROME,
  TOPIC_PARASOCIAL_INTERACTION,
  TOPIC_CONTEXT_COLLAPSE,
  TOPIC_ONLINE_DISINHIBITION_EFFECT,
  TOPIC_INFINITE_SCROLL_CESSATION,
  // Consumer & Advertising Psychology Expansion Exports
  TOPIC_PENNIES_A_DAY_FRAMING,
  TOPIC_PRICE_QUALITY_HEURISTIC,
  TOPIC_ZERO_PRICE_EFFECT,
  TOPIC_VEBLEN_SNOB_EFFECT,
  TOPIC_GOAL_GRADIENT_EFFECT,
  TOPIC_SCARCITY_COUNTDOWN_TRIGGERS,
  // Learning Psychology Expansion Exports
  TOPIC_GENERATION_EFFECT,
  TOPIC_DUAL_CODING_THEORY,
  TOPIC_DESIRABLE_DIFFICULTIES,
  TOPIC_FEYNMAN_TECHNIQUE,
  // Critical Thinking Expansion Exports
  TOPIC_SECOND_ORDER_THINKING,
  TOPIC_INVERSION_TECHNIQUE,
  TOPIC_HANLONS_RAZOR,
  TOPIC_MAP_TERRITORY_FALLACY,
  TOPIC_CHESTERTONS_FENCE,
};

// ============================================================================
// CURRICULUM CATALOG REGISTRY
// ============================================================================

export const CURRICULUM_CATALOG: Record<string, Record<MindLanguageCode, MindTopicDetail>> = {
  // Track 1: Cognitive Biases (24 Core Empirical Topics)
  confirmation_bias: TOPIC_CONFIRMATION_BIAS,
  dunning_kruger_effect: TOPIC_DUNNING_KRUGER,
  availability_heuristic: TOPIC_AVAILABILITY_HEURISTIC,
  hindsight_bias: TOPIC_HINDSIGHT_BIAS,
  fundamental_attribution_error: TOPIC_FAE,
  framing_effect: TOPIC_FRAMING_EFFECT,
  survivorship_bias: TOPIC_SURVIVORSHIP_BIAS,
  negativity_bias: TOPIC_NEGATIVITY_BIAS,
  self_serving_bias: TOPIC_SELF_SERVING_BIAS,
  halo_effect: TOPIC_HALO_EFFECT,
  inattentional_blindness: TOPIC_INATTENTIONAL_BLINDNESS,
  bandwagon_effect: TOPIC_BANDWAGON_EFFECT,
  optimism_bias: TOPIC_OPTIMISM_BIAS,
  gamblers_fallacy: TOPIC_GAMBLERS_FALLACY,
  outcome_bias: TOPIC_OUTCOME_BIAS,
  bias_blind_spot: TOPIC_BIAS_BLIND_SPOT,
  belief_perseverance: TOPIC_BELIEF_PERSEVERANCE,
  overconfidence_effect: TOPIC_OVERCONFIDENCE_EFFECT,
  false_consensus_effect: TOPIC_FALSE_CONSENSUS_EFFECT,
  actor_observer_bias: TOPIC_ACTOR_OBSERVER_BIAS,
  base_rate_fallacy: TOPIC_BASE_RATE_FALLACY,
  curse_of_knowledge: TOPIC_CURSE_OF_KNOWLEDGE,
  representativeness_heuristic: TOPIC_REPRESENTATIVENESS_HEURISTIC,
  omission_bias: TOPIC_OMISSION_BIAS,

  // Track 2: Social Psychology (20 Core Foundational Topics)
  social_proof: TOPIC_SOCIAL_PROOF,
  bystander_effect: TOPIC_BYSTANDER_EFFECT,
  conformity_asch_effect: TOPIC_CONFORMITY_ASCH,
  ingroup_outgroup_bias: TOPIC_INGROUP_OUTGROUP,
  deindividuation_mob_psychology: TOPIC_DEINDIVIDUATION,
  social_loafing: TOPIC_SOCIAL_LOAFING,
  groupthink: TOPIC_GROUPTHINK,
  group_polarization: TOPIC_GROUP_POLARIZATION,
  cognitive_dissonance: TOPIC_COGNITIVE_DISSONANCE,
  social_facilitation: TOPIC_SOCIAL_FACILITATION,
  pluralistic_ignorance: TOPIC_PLURALISTIC_IGNORANCE,
  diffusion_of_responsibility: TOPIC_DIFFUSION_OF_RESPONSIBILITY,
  pygmalion_effect: TOPIC_PYGMALION_EFFECT,
  spotlight_effect: TOPIC_SPOTLIGHT_EFFECT,
  psychological_reactance: TOPIC_PSYCHOLOGICAL_REACTANCE,
  just_world_hypothesis: TOPIC_JUST_WORLD_HYPOTHESIS,
  realistic_conflict_theory: TOPIC_REALISTIC_CONFLICT_THEORY,
  social_identity_theory: TOPIC_SOCIAL_IDENTITY_THEORY,
  normative_informational_influence: TOPIC_NORMATIVE_INFORMATIONAL_INFLUENCE,
  illusion_of_transparency: TOPIC_ILLUSION_OF_TRANSPARENCY,

  // Track 3: Persuasion & Influence (15 Core Foundational Topics)
  reciprocity_principle: TOPIC_RECIPROCITY_PRINCIPLE,
  commitment_consistency: TOPIC_COMMITMENT_CONSISTENCY,
  scarcity_heuristic: TOPIC_SCARCITY,
  authority_bias_milgram: TOPIC_AUTHORITY_BIAS,
  foot_in_the_door: TOPIC_FOOT_IN_THE_DOOR,
  door_in_the_face: TOPIC_DOOR_IN_THE_FACE,
  low_ball_technique: TOPIC_LOW_BALL_TECHNIQUE,
  elaboration_likelihood_model: TOPIC_ELABORATION_LIKELIHOOD_MODEL,
  pre_suasion: TOPIC_PRE_SUASION,
  liking_principle: TOPIC_LIKING_PRINCIPLE,
  sleeper_effect: TOPIC_SLEEPER_EFFECT,
  inoculation_theory: TOPIC_INOCULATION_THEORY,
  mere_exposure_effect: TOPIC_MERE_EXPOSURE_EFFECT,
  labeling_technique: TOPIC_LABELING_TECHNIQUE,
  thats_not_all_technique: TOPIC_THATS_NOT_ALL_TECHNIQUE,

  // Track 4: Manipulation Awareness (21 Core Curated Topics)
  gaslighting_awareness: TOPIC_GASLIGHTING_AWARENESS,
  victim_playing: TOPIC_VICTIM_PLAYING,
  guilt_tripping: TOPIC_GUILT_TRIPPING,
  emotional_blackmail: TOPIC_EMOTIONAL_BLACKMAIL,
  fear_based_persuasion: TOPIC_FEAR_BASED_PERSUASION,
  intimidation: TOPIC_INTIMIDATION,
  threats_implied_consequences: TOPIC_THREATS_IMPLIED_CONSEQUENCES,
  shame_based_influence: TOPIC_SHAME_BASED_INFLUENCE,
  love_bombing: TOPIC_LOVE_BOMBING,
  silent_treatment: TOPIC_SILENT_TREATMENT,
  stonewalling: TOPIC_STONEWALLING,
  intermittent_reinforcement: TOPIC_INTERMITTENT_REINFORCEMENT,
  moving_the_goalposts: TOPIC_MOVING_GOALPOSTS,
  blame_shifting: TOPIC_BLAME_SHIFTING,
  darvo_pattern: TOPIC_DARVO_PATTERN,
  gaslighting_dynamics: TOPIC_GASLIGHTING_DYNAMICS,
  triangulation_pattern: TOPIC_TRIANGULATION_PATTERN,
  scapegoating_pattern: TOPIC_SCAPEGOATING_PATTERN,
  playing_people_against_each_other: TOPIC_PLAYING_PEOPLE_AGAINST_EACH_OTHER,
  boundary_testing: TOPIC_BOUNDARY_TESTING,
  information_withholding: TOPIC_INFORMATION_WITHHOLDING,

  // Track 5: Decision Making (15 Core Foundational Topics)
  sunk_cost_fallacy: TOPIC_SUNK_COST_FALLACY,
  loss_aversion: TOPIC_LOSS_AVERSION,
  status_quo_bias: TOPIC_STATUS_QUO,
  planning_fallacy: TOPIC_PLANNING_FALLACY,
  hyperbolic_discounting: TOPIC_HYPERBOLIC_DISCOUNTING,
  prospect_theory: TOPIC_PROSPECT_THEORY,
  satisficing_vs_maximizing: TOPIC_SATISFICING_VS_MAXIMIZING,
  opportunity_cost_neglect: TOPIC_OPPORTUNITY_COST_NEGLECT,
  choice_overload: TOPIC_CHOICE_OVERLOAD,
  escalation_of_commitment: TOPIC_ESCALATION_OF_COMMITMENT,
  mental_accounting: TOPIC_MENTAL_ACCOUNTING,
  bounded_rationality: TOPIC_BOUNDED_RATIONALITY,
  regret_aversion: TOPIC_REGRET_AVERSION,
  zero_sum_bias: TOPIC_ZERO_SUM_BIAS,
  present_bias_commitment: TOPIC_PRESENT_BIAS_COMMITMENT,

  // Track 6: Emotions & Regulation (10 Core Topics)
  emotional_regulation: TOPIC_EMOTIONAL_REGULATION,
  cognitive_reappraisal: TOPIC_COGNITIVE_REAPPRAISAL,
  affect_heuristic: TOPIC_AFFECT_HEURISTIC,
  emotional_contagion: TOPIC_EMOTIONAL_CONTAGION,
  amygdala_hijack: TOPIC_AMYGDALA_HIJACK,
  somatic_marker_hypothesis: TOPIC_SOMATIC_MARKER_HYPOTHESIS,
  hedonic_treadmill: TOPIC_HEDONIC_TREADMILL,
  broaden_and_build: TOPIC_BROADEN_AND_BUILD,
  emotional_granularity: TOPIC_EMOTIONAL_GRANULARITY,
  expressive_suppression_paradox: TOPIC_EXPRESSIVE_SUPPRESSION_PARADOX,

  // Track 7: Relationships & Communication (10 Core Topics)
  healthy_boundaries: TOPIC_HEALTHY_BOUNDARIES,
  active_listening: TOPIC_ACTIVE_LISTENING,
  gottman_four_horsemen: TOPIC_GOTTMAN_HORSEMEN,
  nonviolent_communication: TOPIC_NVC,
  attachment_styles_adults: TOPIC_ATTACHMENT_STYLES_ADULTS,
  michelangelo_phenomenon: TOPIC_MICHELANGELO_PHENOMENON,
  passive_aggressive_patterns: TOPIC_PASSIVE_AGGRESSIVE_PATTERNS,
  drama_triangle: TOPIC_DRAMA_TRIANGLE,
  bids_and_repairs: TOPIC_EMOTIONAL_BIDS_REPAIR,
  actor_observer_relationships: TOPIC_ACTOR_OBSERVER_IN_RELATIONSHIPS,

  // Track 8: Social Media Psychology (10 Core Topics)
  algorithmic_reinforcement: TOPIC_ALGORITHMIC_REINFORCEMENT,
  variable_reward_schedules: TOPIC_VARIABLE_REWARD_SCHEDULES,
  social_comparison_theory: TOPIC_SOCIAL_COMPARISON,
  fomo_attention_capture: TOPIC_FOMO_ATTENTION,
  doomscrolling_cycle: TOPIC_DOOMSCROLLING_CYCLE,
  phantom_vibration: TOPIC_PHANTOM_VIBRATION_SYNDROME,
  parasocial_interaction: TOPIC_PARASOCIAL_INTERACTION,
  context_collapse: TOPIC_CONTEXT_COLLAPSE,
  online_disinhibition: TOPIC_ONLINE_DISINHIBITION_EFFECT,
  infinite_scroll_trap: TOPIC_INFINITE_SCROLL_CESSATION,

  // Track 9: Consumer & Advertising Psychology (10 Core Topics)
  anchoring_effect: TOPIC_ANCHORING_EFFECT,
  decoy_effect: TOPIC_DECOY_EFFECT,
  endowment_effect: TOPIC_ENDOWMENT_EFFECT,
  paradox_of_choice: TOPIC_PARADOX_OF_CHOICE,
  pennies_a_day: TOPIC_PENNIES_A_DAY_FRAMING,
  price_quality_heuristic: TOPIC_PRICE_QUALITY_HEURISTIC,
  zero_price_effect: TOPIC_ZERO_PRICE_EFFECT,
  veblen_effect: TOPIC_VEBLEN_SNOB_EFFECT,
  goal_gradient_effect: TOPIC_GOAL_GRADIENT_EFFECT,
  countdown_timer_urgency: TOPIC_SCARCITY_COUNTDOWN_TRIGGERS,

  // Track 10: Learning Psychology (8 Core Topics)
  retrieval_practice: TOPIC_RETRIEVAL_PRACTICE,
  spaced_repetition: TOPIC_SPACED_REPETITION,
  interleaving_effect: TOPIC_INTERLEAVING_EFFECT,
  cognitive_load_theory: TOPIC_COGNITIVE_LOAD,
  generation_effect: TOPIC_GENERATION_EFFECT,
  dual_coding_theory: TOPIC_DUAL_CODING_THEORY,
  desirable_difficulties: TOPIC_DESIRABLE_DIFFICULTIES,
  feynman_technique: TOPIC_FEYNMAN_TECHNIQUE,

  // Track 11: Critical Thinking (10 Core Topics)
  first_principles_thinking: TOPIC_FIRST_PRINCIPLES,
  falsification_principle: TOPIC_FALSIFICATION_PRINCIPLE,
  occams_razor: TOPIC_OCCAMS_RAZOR,
  steelmanning_technique: TOPIC_STEELMANNING,
  correlation_vs_causation: TOPIC_CORRELATION_CAUSATION,
  second_order_thinking: TOPIC_SECOND_ORDER_THINKING,
  inversion_technique: TOPIC_INVERSION_TECHNIQUE,
  hanlons_razor: TOPIC_HANLONS_RAZOR,
  map_territory_fallacy: TOPIC_MAP_TERRITORY_FALLACY,
  chestertons_fence: TOPIC_CHESTERTONS_FENCE,
};

/**
 * Get all 10 Primary Categories + Critical Thinking localized
 */
export function getCurriculumCategories(lang: MindLanguageCode = 'en'): MindCategory[] {
  return Object.entries(PRIMARY_MIND_CATEGORIES).map(([id, cat]) => {
    const isHinglish = lang === 'hinglish';
    const topicsInCat = Object.values(CURRICULUM_CATALOG).filter(
      (topicRecord) => (topicRecord.en || topicRecord.hinglish)?.categoryId === id
    ).length;

    return {
      id,
      slug: cat.slug,
      iconName: cat.iconName,
      accentColor: cat.accentColor,
      displayOrder: cat.displayOrder,
      isActive: true,
      title: isHinglish ? cat.titleHinglish : cat.titleEn,
      subtitle: isHinglish ? cat.subtitleHinglish : cat.subtitleEn,
      description: isHinglish ? cat.descriptionHinglish : cat.descriptionEn,
      topicCount: topicsInCat,
    };
  });
}

/**
 * Helper to select the best available topic translation from a catalog entry
 */
function resolveTopicFromRecord(
  topicRecord: Record<MindLanguageCode, MindTopicDetail>,
  lang: MindLanguageCode
): MindTopicDetail {
  const candidate = (topicRecord as any)[lang];
  if (candidate && candidate.title && candidate.title.length > 0) {
    return candidate;
  }
  if (lang === 'hinglish' && topicRecord.hinglish) {
    return topicRecord.hinglish;
  }
  return topicRecord.en || topicRecord.hinglish;
}

/**
 * Get all topics in a given category localized
 */
export function getTopicsByCategory(
  categoryId: string,
  lang: MindLanguageCode = 'en'
): MindTopicDetail[] {
  // Normalize categoryId: match either category id ('cognitive_biases') or slug ('cognitive-biases')
  let resolvedCatId = categoryId;
  for (const [id, cat] of Object.entries(PRIMARY_MIND_CATEGORIES)) {
    if (id === categoryId || cat.slug === categoryId) {
      resolvedCatId = id;
      break;
    }
  }

  const list: MindTopicDetail[] = [];
  for (const topicRecord of Object.values(CURRICULUM_CATALOG)) {
    const topic = resolveTopicFromRecord(topicRecord, lang);
    if (topic && (topic.categoryId === resolvedCatId || topic.categoryId === categoryId)) {
      list.push(topic);
    }
  }
  return list.sort((a, b) => a.sortWeight - b.sortWeight);
}

/**
 * Find topic by slug or ID localized
 */
export function getTopicBySlugOrId(
  slugOrId: string,
  lang: MindLanguageCode = 'en'
): MindTopicDetail | null {
  const norm = slugOrId.toLowerCase().trim();
  const normNoDash = norm.replace(/-/g, '_');
  const normDash = norm.replace(/_/g, '-');
  const normWithoutThe = norm.replace(/^the[-_]/, '');

  for (const topicRecord of Object.values(CURRICULUM_CATALOG)) {
    const topic = resolveTopicFromRecord(topicRecord, lang);
    if (!topic) continue;
    const tSlug = (topic.slug || '').toLowerCase();
    const tId = (topic.id || '').toLowerCase();
    const tSlugWithoutThe = tSlug.replace(/^the[-_]/, '');
    const tIdWithoutThe = tId.replace(/^the[-_]/, '');

    if (
      tSlug === norm ||
      tId === norm ||
      tSlug === normNoDash ||
      tId === normNoDash ||
      tSlug === normDash ||
      tId === normDash ||
      tSlugWithoutThe === normWithoutThe ||
      tIdWithoutThe === normWithoutThe
    ) {
      return topic;
    }
  }
  return null;
}

/**
 * Search topics across titles, keywords, and descriptions
 */
export function searchCurriculum(
  query: string,
  lang: MindLanguageCode = 'en'
): MindTopicDetail[] {
  const cleanQ = query.toLowerCase().trim();
  if (!cleanQ) return [];

  const results: MindTopicDetail[] = [];
  for (const topicRecord of Object.values(CURRICULUM_CATALOG)) {
    const topic = resolveTopicFromRecord(topicRecord, lang);
    if (!topic) continue;

    const matchTitle = topic.title?.toLowerCase().includes(cleanQ) ?? false;
    const matchDesc = topic.shortDescription?.toLowerCase().includes(cleanQ) ?? false;
    const matchTags = (topic.tags || []).some((t) => t.toLowerCase().includes(cleanQ));

    if (matchTitle || matchDesc || matchTags) {
      results.push(topic);
    }
  }
  return results;
}

/**
 * Filter topics by conceptual difficulty tier (Beginner, Intermediate, Advanced)
 */
export function getTopicsByDifficulty(
  difficulty: MindDifficulty,
  lang: MindLanguageCode = 'en'
): MindTopicDetail[] {
  const list: MindTopicDetail[] = [];
  for (const topicRecord of Object.values(CURRICULUM_CATALOG)) {
    const topic = resolveTopicFromRecord(topicRecord, lang);
    if (topic && topic.difficulty === difficulty) {
      list.push(topic);
    }
  }
  return list;
}
