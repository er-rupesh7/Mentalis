import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Relationships & Communication Track
 * Topic: Nonviolent Communication (NVC): The Language of Life
 * Category: Relationships & Communication (relationships_comm)
 * 
 * Academic Grounding:
 * - Rosenberg (1999/2015): Nonviolent Communication: A Language of Life
 * - Nosek (2012): Nonviolent communication: A humanizing communication process
 * - Burleson (2003): Emotional support skills in interpersonal communication
 */

export const TOPIC_NVC_EN: MindTopicDetail = {
  id: 'nonviolent_communication',
  categoryId: 'relationships_comm',
  slug: 'nonviolent-communication',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 4,
  viewCount: 6710,
  shareCount: 530,
  bookmarkCount: 1290,
  title: 'Nonviolent Communication (NVC): The Language of Life',
  subtitle: 'A transformative framework to express honesty and hear empathy without guilt, shame, or character blame.',
  shortDescription: 'The four-part communication framework developed by Dr. Marshall Rosenberg: Observation, Feeling, Need, and Request (OFNR).',
  oneLineExplanation: 'Separating what you physically see from the judgmental stories your brain invents.',

  summary30s: 'Nonviolent Communication (NVC) is a rigorous communication methodology created by clinical psychologist Marshall Rosenberg. Most human conflicts fail because we mix objective observations with moralistic judgments ("You were late because you don\'t respect me"). NVC de-escalates conflict by strictly isolating four elements: (1) Observation, (2) Feeling, (3) Universal Need, and (4) Concrete Actionable Request.',

  coreConcept: 'Rosenberg identified that standard human dialogue is riddled with "life-alienating communication"—moralistic judgments, comparisons, diagnoses, and demands that trigger defensive warfare. NVC replaces this with the OFNR architecture: stating what physically happened without adjectives (Observation), identifying visceral somatic emotions (Feeling), connecting those feelings to universal human needs for safety, connection, or autonomy (Need), and asking for a clear, doable behavior in positive language (Request).',
  summary60s: 'When you tell a partner: "You are messy and disrespectful," their amygdala hears an existential attack and prepares to counter-punch. Under NVC, you translate that judgment into pure OFNR: "When I see two dirty coffee mugs on the dining table (Observation), I feel overwhelmed and anxious (Feeling) because I have a deep need for order and calm in our shared space (Need). Would you be willing to place the mugs into the dishwasher right after breakfast (Request)?" Notice that this statement contains zero character attacks, making defensiveness unnecessary.',

  quickTakeaways: [
    'The OFNR Architecture: Observation (Camera test) -> Feeling (Visceral emotion) -> Need (Universal human drive) -> Request (Concrete doable ask)',
    'Requests vs. Demands: If the other person cannot say "No" without facing emotional punishment or guilt, it was a demand, not a request',
    'Feelings vs. Faux-Feelings: "I feel betrayed / manipulated / ignored" are not feelings; they are disguised intellectual accusations about the other person\'s behavior',
    'The Video Camera Test: An observation must be something a high-definition video camera could record; adjectives like "lazy" or "rude" are judgments',
  ],

  whyItHappens: 'Human language evolved for both cooperation and coercive social control. When people lack emotional literacy to identify their core unmet biological needs, they resort to tragic, violent expressions of unmet needs: anger, shame, and blame.',
  evolutionaryMechanism: 'Moralistic categorization ("good person" vs "evil enemy") expedited swift tribal enforcement, but in modern complex intimate bonds, moralistic categorization shatters long-term collaboration.',

  howItWorks: 'The NVC translation cycle: (1) Catch the Judgment: Notice yourself labeling someone "selfish" or "incompetent"; (2) Translate to Observation: What physical sensory event occurred?; (3) Connect to Feeling: Am I scared, hurt, lonely, exhausted?; (4) Identify the Unmet Need: Is it autonomy, safety, consideration?; (5) Formulate a Positive Request: State clearly what you want them to DO, rather than what to stop doing.',
  whereYouEncounterIt: 'Marital mediation, international peace negotiations (Rwanda, Middle East), agile software team retrospectives, parent-child discipline, and healthcare bedside manner.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Violent Judgment vs. Nonviolent Communication (OFNR)',
    description: 'How translating accusations into the OFNR framework eliminates defensive warfare.',
    analogySideA: {
      label: 'Life-Alienating (Violent) Communication',
      detail: '"You never listen to me! You are glued to your phone because you find my life completely uninteresting."',
    },
    analogySideB: {
      label: 'Nonviolent Communication (OFNR)',
      detail: '"When I hear notifications pinging while I am talking about my workday (O), I feel lonely (F) because I need presence and connection (N). Would you be willing to put your phone face-down for 15 minutes while we catch up (R)?"',
    },
  },

  researchSummary: 'Empirical evaluations of NVC training in healthcare and education (Nosek, 2012; Burleson, 2003) show statistically significant reductions in interpersonal workplace aggression, lower nursing burnout rates, and measurable increases in patient empathy ratings. Grounding requests in shared human needs activates parasympathetic social engagement circuits.',
  limitationsAndControversies: 'Critics note that in environments characterized by malignant psychopathy, active physical domestic abuse, or high-conflict corporate sociopathy, NVC can be weaponized or dismissed as passive weakness. NVC requires that both parties operate with baseline good-faith mutual vulnerability.',
  commonMisconceptions: 'Common myth: "Nonviolent communication means speaking softly and being overly polite." Reality: NVC is about radical emotional clarity and direct honesty without triggering defensiveness, not polite passivity.',

  howToRecognize: [
    'Using "Faux-Feeling" words that accuse others: "I feel like you are taking advantage of me" (that is a diagnosis, not a feeling)',
    'Making negative requests: Telling someone what NOT to do ("Stop nagging me") instead of what you WANT them to do ("Please let me finish this sentence")',
    'Delivering a demand disguised as a polite question and then punishing the person with the silent treatment if they say no',
    'Assuming someone should magically guess your needs without you having to clearly articulate them in words',
  ],

  scenarios: [
    {
      id: 'scen_nvc_01',
      scenarioType: 'indian_context',
      title: 'The Tense Code Review Feedback in Delhi',
      vignette: 'Sunita, an engineering manager in Delhi, is reviewing a database migration script submitted by a mid-level engineer, Amit. Sunita is stressed about a looming release and types into Slack: "Amit, this migration script is careless and dangerous. Did you even test this on staging? You are jeopardizing the entire sprint." Amit reads the message, feels humiliated, and immediately types a defensive 500-word response pointing out that Sunita\'s product requirements were submitted late.',
      breakdownAnalysis: 'Sunita deployed life-alienating communication: character judgment ("careless", "dangerous") and rhetorical accusation ("did you even test?"). This triggered Amit\'s fight-or-flight response, derailing the conversation from software stability into defensive warfare.',
      recommendedAction: 'Sunita should use OFNR: "Amit, when I review the migration script and notice there is no rollback index block for the user schema (Observation), I feel anxious (Feeling) because we need system stability during the peak weekend traffic (Need). Would you be willing to hop on a 10-minute huddle to pair-program the rollback block together right now (Request)?"',
    },
  ],

  examples: [
    {
      id: 'ex_nvc_01',
      domain: 'relationships',
      displayOrder: 1,
      title: 'The Messy Bedroom Transformation',
      description: 'Instead of screaming: "You are a lazy pig, clean up this pigsty!", a parent says: "When I see clothes and wet towels on the carpet, I feel overwhelmed because I need physical safety and tidiness in the hallway. Can you hang the towels on the bathroom hook before you turn on your console?"',
      takeaway: 'Concrete observations bypass the child\'s defensive defiance.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_nvc_01',
      scenarioContext: 'Consider the statement: "I feel that you are being completely unsupportive of my career change."',
      question: 'According to Marshall Rosenberg’s Nonviolent Communication framework, why is this NOT a genuine expression of feeling?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Because "that you are being unsupportive" is an intellectual interpretation and moral judgment of the other person’s character, not a primary somatic emotion like sad, scared, or lonely',
          explanation: 'Accurate: sentences starting with "I feel that you..." are disguised accusations, not vulnerability.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Because career changes should never be discussed with romantic partners',
          explanation: 'Partnership requires deep alignment on major life transitions.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Because the word "supportive" is a medical psychological diagnosis',
          explanation: 'It is a common relational adjective, not a clinical psychiatric diagnosis.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Distinguish authentic feelings (scared, sad, excited) from disguised accusations (unsupported, manipulated, ignored).',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Follow the 4-step NVC framework: state objective Observation, name your Feeling, clarify your Need, and make an actionable Request.',
  psychologicalDefenses: [
    {
      title: 'The Video Camera Test for Observations',
      instruction: 'Before speaking, ask: "Could a video camera with a microphone record what I am about to say?" A camera can record "You arrived at 8:45 AM"; it cannot record "You don\'t care."',
    },
    {
      title: 'Check for "Faux-Feelings"',
      instruction: 'Ban the phrase "I feel like you..." Replace it with an authentic physiological feeling: "I feel anxious," "I feel hurt," or "I feel exhausted."',
    },
    {
      title: 'The Doable Positive Request Rule',
      instruction: 'Always frame requests in terms of positive, concrete action. Instead of "Don\'t be distant," say: "Would you be willing to sit with me for 15 minutes after dinner without laptops?"',
    },
  ],

  reflectionPrompt: 'When you want someone to change their behavior, do you express a clear request or drop passive-aggressive hints and blame?',

  references: [
    {
      id: 'ref_rosenberg_1999',
      authors: 'Rosenberg, M. B.',
      year: 1999,
      title: 'Nonviolent Communication: A Language of Life',
      publicationName: 'PuddleDancer Press (3rd Edition 2015)',
      volumeIssue: 'Chapters 1-7',
      doi: '10.1037/0000000-001',
      evidenceStrength: 'foundational_monograph',
    },
    {
      id: 'ref_nosek_2012',
      authors: 'Nosek, M.',
      year: 2012,
      title: 'Nonviolent communication: A humanizing communication process',
      publicationName: 'Creative Nursing',
      volumeIssue: '18(1), 12-16',
      doi: '10.1891/1078-4535.18.1.12',
      evidenceStrength: 'clinical_study',
    },
  ],

  relatedTopics: [
    {
      topicId: 'healthy_boundaries',
      slug: 'healthy-boundaries',
      title: 'Healthy Boundaries',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'active_listening',
      slug: 'active-listening',
      title: 'Active Listening',
      relationshipType: 'amplified_by',
    },
  ],
};

export const TOPIC_NVC: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_NVC_EN,
  hinglish: {
    ...TOPIC_NVC_EN,
    title: 'Nonviolent Communication (NVC): Bina Taane Ke Dil Ki Baat Bolna',
    subtitle: 'Observation, Feeling, Need, aur Request (OFNR)—kisi par bina gussa ya ilzaam lagaye apni baat manwane ka tareeqa.',
    shortDescription: 'Dr. Marshall Rosenberg ka 4-step framework: doosre ke character par attack karne ke bajaye facts, feelings aur concrete requests par baat karna.',
    oneLineExplanation: 'Aankhon se dekhi baat ko dimaag ke banaye jhoothe ilzaamo se alag karna.',
    summary30s: 'Marshall Rosenberg ne Nonviolent Communication (NVC) design kiya taaki ladaiyon me character assassination na ho. Jab hum bolte hain "Tum laparwah ho", toh ladai pakki hai. NVC kehta hai 4 cheezein bolo: (1) Observation (Maine kya dekha bina judgment ke), (2) Feeling (Mujhe kaisa laga), (3) Need (Meri kya zaroorat hai), aur (4) Request (Main aapse specific kya chahta hu).',
  },
  hi: {
    ...TOPIC_NVC_EN,
    title: 'Nonviolent Communication (अहिंसक संचार - NVC)',
    subtitle: 'दोषारोपण, तिरस्कार और चरित्र पर प्रहार किए बिना ईमानदारी और सहानुभूति व्यक्त करने की वैज्ञानिक पद्धति।',
    shortDescription: 'डॉ. मार्शल रोसेनबर्ग द्वारा विकसित चार-चरणीय संचार ढांचा: अवलोकन (Observation), भावना (Feeling), आवश्यकता (Need), और अनुरोध (Request)।',
    oneLineExplanation: 'तथ्यों को अपने दिमाग द्वारा गढ़ी गई नकारात्मक कहानियों से पृथक करना।',
    summary30s: 'अहिंसक संचार (NVC) हमें सिखाता है कि अधिकांश संघर्ष इसलिए भड़कते हैं क्योंकि हम विशिष्ट घटनाओं को नैतिक निर्णयों और तानों के साथ मिला देते हैं। "तुम हमेशा गैर-जिम्मेदार रहते हो" के स्थान पर स्पष्ट अवलोकन, अपनी भावना, अपनी बुनियादी मानवीय आवश्यकता और एक ठोस सकारात्मक अनुरोध व्यक्त करना रक्षात्मकता को समाप्त कर देता है।',
  },
  gu: TOPIC_NVC_EN,
  mr: TOPIC_NVC_EN,
  te: TOPIC_NVC_EN,
  ta: TOPIC_NVC_EN,
  kn: TOPIC_NVC_EN,
  ml: TOPIC_NVC_EN,
  bn: TOPIC_NVC_EN,
  pa: TOPIC_NVC_EN,
  ur: TOPIC_NVC_EN,
  or: TOPIC_NVC_EN,
  as: TOPIC_NVC_EN,
  };
