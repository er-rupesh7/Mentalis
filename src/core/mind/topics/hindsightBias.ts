import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: Hindsight Bias: The "I Knew It All Along" Illusion
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Fischhoff (1975): Hindsight is not equal to foresight: The effect of outcome knowledge
 * - Roese & Vohs (2012): Hindsight bias: Perspectives on Psychological Science
 * - Hawkins & Hastie (1990): Hindsight: Biased judgments of past events
 */

export const TOPIC_HINDSIGHT_BIAS_EN: MindTopicDetail = {
  id: 'hindsight_bias',
  categoryId: 'cognitive_biases',
  slug: 'hindsight-bias',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 4,
  viewCount: 6120,
  shareCount: 420,
  bookmarkCount: 980,
  title: 'Hindsight Bias: The "I Knew It All Along" Illusion',
  subtitle: 'Once an outcome occurs, our brains instantly rewrite past uncertainty to make the result feel inevitable.',
  shortDescription: 'The psychological inclination to see past events as having been predictable and obvious before they happened, even when there was zero prior certainty.',
  oneLineExplanation: 'Looking backward through clear glasses at what was previously completely opaque.',

  summary30s: 'Hindsight bias occurs the instant an outcome is revealed: your brain silently retrofits your memory of past beliefs to match the final result, convincing you that "I knew it was going to happen all along." This cognitive flaw prevents genuine learning from mistakes by making unforeseen events appear completely obvious in retrospect.',

  coreConcept: 'First experimentally measured by Baruch Fischhoff in 1975, hindsight bias operates through memory distortion, inevitability attribution, and perceived foreseeability. Before an event (an election, a startup launch, an unexpected market crash), the future is characterized by radical uncertainty and competing probabilities. Once the result is known, the brain reconstructs the historical timeline, discarding contradictory possibilities and elevating clues that pointed toward the actual result.',
  summary60s: 'Consider a colleague who wavered for weeks between two job offers, confessing intense anxiety over the choice. Two years later, the chosen company goes public, making them wealthy. In interviews, they now confidently assert: "I always knew this company was the right horse to back; the signs were unmistakable from day one." They are not lying deliberately; their brain has genuinely rewritten their narrative memory to eliminate past ambiguity. Hindsight bias breeds dangerous overconfidence because it makes forecasting seem trivially easy.',

  quickTakeaways: [
    'Creeping Determinism: Once an outcome is known, it feels like the only logical conclusion that could have transpired',
    'Memory Rewriting: People unconsciously alter their recollection of past probability estimates to match current reality',
    'Blame Inflation: In law, medicine, and leadership, people harshly punish leaders for outcomes that no reasonable person could have anticipated',
    'The Decision Journal Antidote: The only true cure is writing down predictions and reasoning in real-time before outcomes unfold',
  ],

  whyItHappens: 'Sense-making and cognitive closure. The human mind craves causal coherence. A world governed by pure probability and erratic chance triggers existential anxiety; an orderly world where outcomes are retrospectively obvious provides comforting illusions of control and predictability.',
  evolutionaryMechanism: 'Learning requires extracting causal rules from the environment. Once a sabertooth tiger attacks from a specific ravine, it is computationally efficient to conclude "that ravine was always dangerous," rapidly forming defensive heuristics for future territory navigation.',

  howItWorks: 'Hindsight bias unfolds in three phases: (1) Outcome Knowledge: Receiving confirmation of what occurred; (2) Memory Reconstruction: Selectively recalling evidence supporting this outcome and suppressing counter-signals; (3) Inevitability Projection: Concluding that the outcome was inevitable and anyone with foresight should have predicted it.',
  whereYouEncounterIt: 'Monday morning sports commentators, political pundits after surprise election results, medical malpractice lawsuits ("any competent doctor should have caught this rare symptom"), and venture capital post-mortems.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Real-Time Uncertainty vs. Retrospective Inevitability',
    description: 'How knowledge of the final result rewires our memory of past probability.',
    analogySideA: {
      label: 'Foresight (Before the Event)',
      detail: '"There are 5 mutually exclusive scenarios with complex probabilities. Anything could happen."',
    },
    analogySideB: {
      label: 'Hindsight (After the Event)',
      detail: '"It was completely obvious what was going to happen. The warning signs were everywhere!"',
    },
  },

  researchSummary: 'In Fischhoff\'s 1975 seminal study, participants read historical narratives about the British-Gurkha military conflict with five possible historical outcomes. When informed of which outcome actually occurred, participants overwhelmingly rated that outcome\'s prior probability as significantly higher than participants who were evaluated under blind conditions without outcome knowledge.',
  limitationsAndControversies: 'Roese & Vohs (2012) distinguished three distinct levels of hindsight bias: memory distortion ("I said it would happen"), inevitability ("It had to happen"), and foreseeability ("I knew it would happen"). Different interventions are required for each distinct cognitive layer.',
  commonMisconceptions: 'Common myth: "Hindsight bias just means good intuition." Reality: Hindsight bias systematically creates false confidence by erasing our recollection of how uncertain we actually were before the outcome occurred, severely impairing future risk calibration.',

  howToRecognize: [
    'Saying "I knew that startup would fail" or "I knew that couple would divorce" only after the event has already concluded',
    'Judging the quality of a past decision purely by its final outcome rather than the information available at the moment of decision',
    'Feeling smug about historical events that baffled the greatest contemporary experts of the era',
    'Severely penalizing team members for unpredictable black-swan disruptions by claiming they "should have planned for it"',
  ],

  scenarios: [
    {
      id: 'scen_hind_01',
      scenarioType: 'indian_context',
      title: 'The Post-Mortem Blame Assignment in Tech',
      vignette: 'A fintech startup spends 6 months designing an innovative micro-lending feature. Every engineer and product manager voted in favor during sprint planning. When an unforeseen regulatory change by the central bank bans the product structure 3 days post-launch, the VP of Product shouts in the post-mortem: "I always knew this regulatory risk would sink us! Why did none of you listen to basic common sense?" In reality, the VP had signed off on the product roadmap with zero written objections.',
      breakdownAnalysis: 'The VP is experiencing intense hindsight bias coupled with self-serving attribution. Now that the central bank decree has materialized, the regulatory ambiguity of 6 months ago has vanished, making the outcome seem glaringly obvious in retrospect.',
      recommendedAction: 'Institute written decision logs: "In our documented risk log from March, all 6 senior leaders (including product and legal) assessed regulatory approval probability at 85%. The decision was sound based on available evidence; the regulatory decree was an external black-swan shock."',
    },
  ],

  examples: [
    {
      id: 'ex_hind_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'The Post-Crash Stock Analyst',
      description: 'After an unexpected market crash, financial television pundits claim the bubble was "obvious to anyone who looked at P/E ratios," conveniently forgetting that they issued "Strong Buy" ratings 48 hours prior.',
      takeaway: 'Separating decision process from outcome luck is essential for sound long-term decision making.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_hind_01',
      scenarioContext: 'A surgeon performs a high-risk cardiac bypass with an 85% success rate and a 15% complication risk. The patient suffers an unpredictable, rare allergic reaction to a standard suture material and experiences complications. The hospital review board claims the surgeon made a negligent choice because "the danger was clearly foreseeable."',
      question: 'Why does this review board verdict demonstrate hindsight bias (outcome bias)?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Because the surgeon should have anticipated every single 1-in-1,000 biological reaction',
          explanation: 'No biological procedure carries zero risk; demanding omniscience reflects cognitive distortion.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Because the board is evaluating the decision quality based on an unfortunate outcome rather than the ex-ante risk-benefit evidence',
          explanation: 'Accurate: evaluating decisions by their probabilistic rigor at the moment of choice prevents hindsight distortion.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Because medical outcomes are always 100% predictable with modern diagnostic imaging',
          explanation: 'Empirical medicine is inherently probabilistic, never deterministic.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Good decisions can produce bad outcomes, and bad decisions can produce good outcomes due to probabilistic variance.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Maintain a real-time decision journal recording predictions and estimated probabilities before events occur, and review past assumptions objectively.',
  psychologicalDefenses: [
    {
      title: 'Maintain a Decision Journal',
      instruction: 'Before any major decision (hiring, investing, relocating), write down: (1) what you expect to happen, (2) the confidence percentage, and (3) all alternative possibilities considered. Review it 12 months later.',
    },
    {
      title: 'Conduct Prospective Hindsight (Pre-Mortem)',
      instruction: 'Before executing a plan, imagine yourself 1 year in the future where the project failed disastrously. Ask: "What caused this failure?" This forces your brain to generate counter-evidence before outcomes occur.',
    },
    {
      title: 'Decouple Process from Outcome',
      instruction: 'Judge team members and yourself by the rigor of the decision process given the information available at the time, not by retroactive luck.',
    },
  ],

  reflectionPrompt: 'When was the last time you said "I knew it all along"? What were you actually thinking and feeling before the outcome happened?',

  references: [
    {
      id: 'ref_fischhoff_1975',
      authors: 'Fischhoff, B.',
      year: 1975,
      title: 'Hindsight is not equal to foresight: The effect of outcome knowledge on judgment under uncertainty',
      publicationName: 'Journal of Experimental Psychology: Human Perception and Performance',
      volumeIssue: '1(3), 288-299',
      doi: '10.1037/0096-1523.1.3.288',
      evidenceStrength: 'empirical_study',
    },
    {
      id: 'ref_roese_2012',
      authors: 'Roese, N. J., & Vohs, K. D.',
      year: 2012,
      title: 'Hindsight bias',
      publicationName: 'Perspectives on Psychological Science',
      volumeIssue: '7(5), 411-426',
      doi: '10.1177/1745691612454303',
      evidenceStrength: 'systematic_review',
    },
  ],

  relatedTopics: [
    {
      topicId: 'confirmation_bias',
      slug: 'confirmation-bias',
      title: 'Confirmation Bias',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'availability_heuristic',
      slug: 'availability-heuristic',
      title: 'Availability Heuristic',
      relationshipType: 'amplified_by',
    },
  ],
};

export const TOPIC_HINDSIGHT_BIAS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_HINDSIGHT_BIAS_EN,
  hinglish: {
    ...TOPIC_HINDSIGHT_BIAS_EN,
    title: 'Hindsight Bias: "Mujhe Toh Pehle Se Pata Tha" Ka Dhokha',
    subtitle: 'Jab koi ghatna ho jati hai, tab hamara dimaag pichli anishchittata ko mita deta hai.',
    shortDescription: 'Kisi natije ke nikalne ke baad yeh mehsus karna ki yeh toh pehle se bilkul obvious aur predictable tha.',
    oneLineExplanation: 'Peeche mudkar dekhna aur anjaan baat ko pehle se tay maanna.',
    summary30s: 'Hindsight Bias hamare dimaag ki wo chalaki hai jisme koi result aane ke baad dimaag purani yaadon ko rewrite kar leta hai aur kehta hai: "Mujhe toh shuru se pata tha yeh hi hone wala hai." Yeh bias hume apni galtiyo se seekhne nahi deta kyunki hume har anjaan cheez retrospect me obvious lagti hai.',
  },
  hi: {
    ...TOPIC_HINDSIGHT_BIAS_EN,
    title: 'Hindsight Bias (पश्चदृष्टि पूर्वाग्रह)',
    subtitle: 'परिणाम आने के बाद अतीत की अनिश्चितता को भूल जाना और यह मानना कि "मुझे तो पहले से पता था"।',
    shortDescription: 'घटना घट जाने के बाद यह दावा करने की मनोवैज्ञानिक प्रवृत्ति कि यह पूरी तरह से पूर्वानुमेय और स्पष्ट थी।',
    oneLineExplanation: 'परिणाम जानने के बाद अतीत को स्पष्ट चश्मे से देखना।',
    summary30s: 'पश्चदृष्टि पूर्वाग्रह (Hindsight Bias) तब होता है जब किसी निर्णय का परिणाम सामने आने पर हमारा दिमाग अतीत के भ्रम और संदेह को मिटाकर यह विश्वास कर लेता है कि घटना तो अवश्यंभावी थी। यह पूर्वाग्रह सीखने की प्रक्रिया को बाधित करता है।',
  },
  gu: TOPIC_HINDSIGHT_BIAS_EN,
  mr: TOPIC_HINDSIGHT_BIAS_EN,
  te: TOPIC_HINDSIGHT_BIAS_EN,
  ta: TOPIC_HINDSIGHT_BIAS_EN,
  kn: TOPIC_HINDSIGHT_BIAS_EN,
  ml: TOPIC_HINDSIGHT_BIAS_EN,
  bn: TOPIC_HINDSIGHT_BIAS_EN,
  pa: TOPIC_HINDSIGHT_BIAS_EN,
  ur: TOPIC_HINDSIGHT_BIAS_EN,
  or: TOPIC_HINDSIGHT_BIAS_EN,
  as: TOPIC_HINDSIGHT_BIAS_EN,
  };
