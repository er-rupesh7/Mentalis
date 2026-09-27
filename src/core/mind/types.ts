/**
 * Mentalab Mind (Psychology) Domain & Content Types
 * Production type definitions supporting the 10 Primary Content Areas,
 * the 9 Core Principle questions, 13 Indian languages + first-class Hinglish,
 * and cognitive progressive-disclosure architecture.
 */

export type MindLanguageCode =
  | 'en'
  | 'hinglish'
  | 'hi'
  | 'gu'
  | 'mr'
  | 'te'
  | 'ta'
  | 'kn'
  | 'ml'
  | 'bn'
  | 'pa'
  | 'ur'
  | 'or'
  | 'as';

export interface MindLanguageMeta {
  code: MindLanguageCode;
  nativeName: string;
  englishName: string;
  script: string;
  dir: 'ltr' | 'rtl';
  isDedicatedReadingMode?: boolean;
  hreflang: string;
}

export interface TopicTranslationResolution {
  topic: MindTopicDetail;
  requestedLanguage: MindLanguageCode;
  actualLanguage: MindLanguageCode;
  isFallback: boolean;
  fallbackReason?: 'translation_in_review' | 'locale_not_yet_translated' | null;
  availableLanguages: MindLanguageCode[];
}

export type MindDifficulty =
  | 'easy'
  | 'medium'
  | 'hard'
  | 'beginner'
  | 'intermediate'
  | 'advanced';
export type MindConsensusTier = 'established' | 'debated' | 'myth_debunked';
export type MindPublicationStatus = 'draft' | 'review' | 'published' | 'archived';

export type MindReactionType = 'helpful' | 'interesting' | 'surprising' | 'learned' | 'thinking';

export type MindSharePlatform =
  | 'whatsapp'
  | 'twitter'
  | 'telegram'
  | 'facebook'
  | 'linkedin'
  | 'clipboard'
  | 'native_share'
  | 'other';

export type PrimaryMindCategoryKey =
  | 'cognitive_biases'
  | 'social_psychology'
  | 'persuasion_influence'
  | 'manipulation_awareness'
  | 'decision_making'
  | 'emotions'
  | 'relationships_comm'
  | 'social_media_tech'
  | 'consumer_advertising'
  | 'learning_psychology'
  | 'critical_thinking';

export interface MindCategory {
  id: string;
  slug: string;
  iconName: string;
  accentColor: string;
  displayOrder: number;
  isActive: boolean;
  title: string;
  subtitle?: string | null;
  description?: string | null;
  topicCount?: number;
}

export interface CognitiveDefense {
  title: string;
  instruction: string;
}

export type CognitiveDefenseItem = CognitiveDefense | string;

export type VisualConceptType =
  | 'simple_diagram'
  | 'flow_diagram'
  | 'timeline'
  | 'decision_tree'
  | 'comparison_matrix'
  | 'illustrated_scenario'
  | 'conceptual_image';

export interface MindVisualExplanation {
  type: 'metaphor' | 'diagram' | 'analogy' | 'contrast_matrix';
  conceptType?: VisualConceptType;
  visualConceptType?: VisualConceptType;
  headline: string;
  description: string;
  analogySideA?: { label: string; detail: string };
  analogySideB?: { label: string; detail: string };
  steps?: string[];
}

// ----------------------------------------------------------------------------
// EDUCATIONAL VISUAL SYSTEM TYPES
// ----------------------------------------------------------------------------

export type EducationalVisualType =
  | 'hero_image'
  | 'concept_illustration'
  | 'diagram'
  | 'flowchart'
  | 'comparison_graphic'
  | 'scenario_illustration'
  | 'infographic';

export interface EducationalVisualCredit {
  sourceName?: string;
  authorOrAttribution?: string;
  sourceUrl?: string;
  license?: string;
}

export interface DiagramNode {
  id: string;
  label: string;
  subtext?: string;
  category?: 'primary' | 'secondary' | 'trap' | 'antidote';
  color?: string;
}

export interface FlowchartStep {
  stepNumber: number;
  title: string;
  description: string;
  cautionNotice?: string;
  decisionQuestion?: string;
}

export interface ComparisonGraphicData {
  sideA: {
    title: string;
    badge?: string;
    points: string[];
    isOptimal?: boolean;
  };
  sideB: {
    title: string;
    badge?: string;
    points: string[];
    isOptimal?: boolean;
  };
}

export interface InfographicMetric {
  value: string;
  label: string;
  context: string;
}

export interface EducationalVisualData {
  id: string;
  type: EducationalVisualType;
  title: string;
  altText: string;
  caption?: string;
  imageUrl?: string;
  credits?: EducationalVisualCredit;
  priorityLoading?: boolean;
  flowchartSteps?: FlowchartStep[];
  comparisonData?: ComparisonGraphicData;
  diagramNodes?: DiagramNode[];
  infographicMetrics?: InfographicMetric[];
  interactiveExplanation?: string;
}

// ----------------------------------------------------------------------------
// SCENARIO SYSTEM TYPES
// ----------------------------------------------------------------------------

export interface InteractiveScenarioOption {
  id: string;
  label: string; // "A", "B", "C", "D"
  text: string;
  isCorrect: boolean;
  explanation: string; // Specific rationale explaining why this option is correct or flawed
}

export interface InteractiveScenarioData {
  id: string;
  topicId?: string;
  title: string;
  contextVignette: string;
  vignetteSourceType?: 'social_media' | 'workplace' | 'personal_finance' | 'family_relationships' | 'shopping' | 'news';
  question: string;
  options: InteractiveScenarioOption[];
  revealedExplanation: {
    correctSummary: string;
    whyItMatters: string;
    cognitiveTrap: string;
    actionableAntidote: string;
  };
  difficulty: 'easy' | 'medium' | 'hard';
  culturalContext?: 'indian_general' | 'global' | 'academic';
}

export type CredibleSourceType =
  | 'systematic_review'
  | 'meta_analysis'
  | 'peer_reviewed_journal'
  | 'academic_textbook'
  | 'scientific_institution'
  | 'replication_study';

export type PracticeQuestionFormat =
  | 'identify_bias'
  | 'identify_influence_principle'
  | 'choose_best_explanation'
  | 'scenario_analysis'
  | 'misconception_detection'
  | 'what_would_you_do'
  | 'compare_situations';

export interface ContentVersionRecord {
  id: string;
  topicId: string;
  versionNumber: number;
  editorId?: string | null;
  editorName?: string | null;
  reviewStatus: 'draft' | 'in_review' | 'verified' | 'archived';
  changeSummary: string;
  updatedAt: string;
  sources: Array<{ citation: string; doiOrUrl?: string; sourceType: string }>;
}

export interface ResearchDisclaimer {
  statementEn: string;
  statementHinglish: string;
  isEducationalOnly: true;
  avoidsMedicalDiagnosis: true;
}

export interface MindTopicSummary {
  id: string;
  categoryId: string;
  slug: string;
  difficulty: MindDifficulty;
  estimatedReadingMinutes: number;
  featuredImageUrl?: string | null;
  scientificConsensusTier: MindConsensusTier;
  sortWeight: number;
  viewCount: number;
  shareCount: number;
  bookmarkCount: number;
  title: string;
  subtitle?: string | null;
  shortDescription: string;
  oneLineExplanation?: string | null;
  summary30s?: string | null;
}

/**
 * Complete topic detail satisfying the 9 Core Principles:
 * 1. What is it? (title, oneLineExplanation, summary30s, summary60s, coreConcept)
 * 2. Why does it happen? (whyItHappens, evolutionaryMechanism)
 * 3. How does it work? (howItWorks, visualExplanation)
 * 4. What does research say? (researchSummary, references, limitationsAndControversies)
 * 5. What does it look like in real life? (examples, scenarios)
 * 6. How can I recognize it? (howToRecognize, whereYouEncounterIt)
 * 7. What misconceptions exist? (commonMisconceptions)
 * 8. What should I do about it? (howToRespond, psychologicalDefenses)
 * 9. Can I test whether I understood it? (practiceQuestions)
 */
export interface MindTopicDetail extends MindTopicSummary {
  // Layer 1: "Understand it in 30 seconds"
  summary30s?: string | null;

  // Layer 2: "Understand it"
  coreConcept: string;
  summary60s: string;
  quickTakeaways: string[];

  // Layer 3: "Go deeper"
  whyItHappens: string;
  evolutionaryMechanism?: string | null;
  howItWorks: string;
  visualExplanation?: MindVisualExplanation | null;
  researchSummary: string;
  limitationsAndControversies: string; // Crucial for scientific nuance (not overselling effects)

  // 5. What does it look like in real life?
  examples: MindExample[];
  scenarios: MindScenario[]; // Includes real-world Indian Context Scenario

  // 6. How can I recognize it?
  howToRecognize: string | string[];
  whereYouEncounterIt?: string | null;
  warningSigns?: string[];

  // 7. What misconceptions exist?
  commonMisconceptions: string | Array<{ misconception: string; reality?: string; correction?: string }>;

  // 8. What should I do about it?
  howToRespond: string;
  psychologicalDefenses: CognitiveDefenseItem[];

  // 9. Can I test whether I understood it?
  practiceQuestions: MindPracticeQuestion[];

  // Educational Visual System & Interactive Scenarios
  visualContent?: EducationalVisualData | null;
  interactiveScenario?: any;
  interactiveScenarios?: InteractiveScenarioData[];

  // Personal self-audit & Reflection
  reflectionPrompt?: string | null;

  // Relational & Scientific Grounding
  sections?: MindSection[];
  references: MindReference[];
  tags?: string[];
  relatedTopics: MindRelatedTopic[];

  // SEO & OpenGraph Metadata
  seoTitle?: string | null;
  seoDescription?: string | null;
  canonicalUrl?: string | null;
  ogImageUrl?: string | null;
  publishedAt?: string | null;

  // Backwards compatibility legacy field
  deepExplanation?: string;
}

export interface MindSection {
  id: string;
  sectionType: 'summary' | 'deep_dive' | 'mechanism' | 'misconception' | 'defense' | 'reflection' | 'custom';
  displayOrder: number;
  heading?: string | null;
  bodyMarkdown: string;
  calloutBox?: Record<string, unknown> | null;
}

export interface MindExample {
  id: string;
  domain:
    | 'personal_finance'
    | 'workplace'
    | 'relationships'
    | 'health'
    | 'social_media'
    | 'consumer_advertising'
    | 'education'
    | 'general';
  displayOrder: number;
  title: string;
  description: string;
  takeaway?: string | null;
}

export interface MindScenario {
  id: string;
  scenarioType: 'indian_context' | 'workplace' | 'personal_finance' | 'social_media' | 'interpersonal' | 'general';
  displayOrder?: number;
  isFeatured?: boolean;
  title: string;
  narrativeContext?: string;
  biasInAction?: string;
  optimalResponse?: string;
  reflectionPrompt?: string | null;
  vignette?: string;
  breakdownAnalysis?: string;
  recommendedAction?: string;
}

export interface MindQuestionOption {
  id: string;
  isCorrect: boolean;
  label?: string;
  displayOrder?: number;
  optionText?: string;
  text?: string;
  feedbackText?: string | null;
  explanation?: string | null;
}

export type MindQuestionType =
  | 'multiple_choice'
  | 'true_false'
  | 'identify_pattern'
  | 'scenario_selection'
  | 'matching'
  | 'ordering'
  | 'reflection'
  | 'identify_bias'
  | 'identify_influence_principle'
  | 'distinction'
  | 'scenario_analysis'
  | 'best_response'
  | 'what_would_you_do'
  | 'misconception_detection'
  | 'context_analysis'
  | 'compare_situations';

export interface MatchingPair {
  id: string;
  left: string;
  right: string;
  explanation?: string;
}

export interface OrderingItem {
  id: string;
  text: string;
  correctOrder: number;
  feedback?: string;
}

export interface MindPracticeQuestion {
  id: string;
  difficulty?: MindDifficulty;
  questionType?: MindQuestionType;
  questionFormat?: PracticeQuestionFormat;
  displayOrder?: number;
  prompt?: string;
  question?: string;
  cognitiveTakeaway?: string;
  scenarioText?: string | null;
  scenarioContext?: string | null;
  correctAnswerId?: string;
  explanation?: string;
  antidoteAdvice?: string | null;
  // Misconception Detection Support
  isMisconception?: boolean;
  misconceptionNuance?: string | null;
  // Standard and Scenario Options
  options: MindQuestionOption[];
  // Matching Questions
  matchingPairs?: MatchingPair[];
  // Ordering Questions
  orderingItems?: OrderingItem[];
  // True / False Questions
  isTrueStatement?: boolean;
  trueFalseRationale?: {
    ifTrue: string;
    ifFalse: string;
  };
  // Reflection Questions
  reflectionTips?: string[];
  sampleInsight?: string;
}

// ----------------------------------------------------------------------------
// PRACTICE ANALYTICS TYPES
// ----------------------------------------------------------------------------

export interface PracticeAnalyticsRecord {
  topicId: string;
  questionId: string;
  questionType: MindQuestionType;
  difficulty: 'easy' | 'medium' | 'hard';
  isCorrect: boolean;
  attemptNumber: number;
  timeSpentSeconds?: number;
  timestamp: string;
}

export interface TopicPracticeSummary {
  topicId: string;
  attempts: number;
  correctAnswers: number;
  incorrectAnswers: number;
  accuracy: number; // 0 - 100
  completed: boolean;
  difficultyBreakdown: {
    easy: { attempts: number; correct: number };
    medium: { attempts: number; correct: number };
    hard: { attempts: number; correct: number };
  };
  typeBreakdown: Partial<Record<MindQuestionType, { attempts: number; correct: number }>>;
  lastAttemptAt: string;
}

export interface OverallPracticeAnalytics {
  totalAttempts: number;
  totalCorrect: number;
  totalIncorrect: number;
  overallAccuracy: number;
  completedTopicIds: string[];
  topicSummaries: Record<string, TopicPracticeSummary>;
}

export interface MindReference {
  id?: string;
  title?: string | null;
  citation?: string;
  authors?: string | null;
  year?: number | null;
  publicationYear?: number | null;
  journalOrPublisher?: string | null;
  publicationName?: string | null;
  volumeIssue?: string | null;
  doi?: string | null;
  doiOrUrl?: string | null;
  sourceType?: CredibleSourceType | null;
  relevance?: string | null;
  relevanceSummary?: string | null;
  evidenceStrength?:
    | 'peer_reviewed_meta_analysis'
    | 'empirical_study'
    | 'foundational_book'
    | 'working_paper'
    | 'systematic_review'
    | 'foundational_monograph'
    | 'historical_classic'
    | string;
  consensusStatus?: 'established' | 'emerging' | 'mixed_or_debated' | 'replicated_limitation' | null;
  displayOrder?: number;
}

export interface MindRelatedTopic {
  topicId: string;
  slug: string;
  title: string;
  relationshipType: 'frequently_confused_with' | 'counteracted_by' | 'amplified_by' | 'foundational_to' | 'progresses_to' | 'prerequisite' | 'general_related';
}

export interface MindUserProgress {
  userId: string;
  topicId: string;
  status: 'not_started' | 'in_progress' | 'completed';
  completionPercent: number;
  sectionsViewed: string[];
  practiceAttempted: boolean;
  practiceScore?: number | null;
  firstViewedAt: string;
  lastViewedAt: string;
  completedAt?: string | null;
}

export interface MindReactionCounts {
  helpful: number;
  interesting: number;
  surprising: number;
  learned: number;
  thinking: number;
  total: number;
  userReaction?: MindReactionType | null;
}

export interface ShareableInsight {
  topicId: string;
  topicTitle: string;
  quote: string;
  categoryTitle?: string;
  mentalabBranding?: string;
  url: string;
  shareText: string;
}

export interface MindBookmarkItem {
  id: string;
  topicId: string;
  topicSlug: string;
  title: string;
  oneLineExplanation?: string | null;
  shortDescription: string;
  categoryTitle: string;
  difficulty: MindDifficulty;
  savedAt: string;
  notes?: string | null;
}

export interface MindEngagementSummary {
  views: number;
  starts: number;
  completions: number;
  shares: number;
  bookmarks: number;
  reactions: MindReactionCounts;
}
