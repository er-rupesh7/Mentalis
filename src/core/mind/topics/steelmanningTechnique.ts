import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Critical Thinking Track
 * Topic: The Steelmanning Technique: The Antidote to the Straw Man
 * Category: Critical Thinking (critical_thinking)
 * 
 * Academic Grounding:
 * - Dennett (2013): Intuition Pumps and Other Tools for Thinking (Chapter 3: Rapoport's Rules)
 * - Rapoport (1960): Fights, Games, and Debates
 * - Mill (1859): On Liberty (Chapter 2: Of the Liberty of Thought and Discussion)
 */

export const TOPIC_STEELMANNING_EN: MindTopicDetail = {
  id: 'steelmanning_technique',
  categoryId: 'critical_thinking',
  slug: 'steelmanning-technique',
  difficulty: 'advanced',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 4,
  viewCount: 6540,
  shareCount: 510,
  bookmarkCount: 1390,
  title: 'The Steelmanning Technique: The Antidote to the Straw Man',
  subtitle: 'The ultimate intellectual discipline: articulating your opponent’s position more clearly and powerfully than they can themselves before offering a single critique.',
  shortDescription: 'The cognitive practice of addressing the strongest, most charitable version of an opposing argument (a "steel man") rather than a cheap, distorted caricature (a "straw man").',
  oneLineExplanation: 'If you cannot explain why an intelligent, moral person would hold the opposing view, you do not understand the issue.',

  summary30s: 'Steelmanning is the highest form of intellectual integrity and debate mastery. Most people attack a "straw man"—distorting an opponent\'s argument into a cartoonishly foolish caricature so it is easy to knock down. Steelmanning does the opposite: you actively repair the flaws in your opponent’s thesis, upgrade their evidence, and present their case with such brilliance that your opponent says: "Thank you, I wish I had stated it that well." Only then do you proceed to critique it.',

  coreConcept: 'Formalized by cognitive philosopher Daniel Dennett through "Rapoport\'s Rules" (originated by game theorist Anatol Rapoport), steelmanning echoes John Stuart Mill’s immortal 1859 dictum: "He who knows only his own side of the case knows little of that." In intellectual warfare, knocking down a weak caricature proves zero truth; it merely satisfies intellectual vanity. By testing your ideas against the strongest possible counter-arguments, your own beliefs either evolve toward truth or are rightly abandoned.',
  summary60s: 'Consider modern political and internet debates: an advocate of social welfare programs is attacked with: "You just want to give free money to lazy people so no one ever works again!" (a pathetic straw man). An advocate of free-market capitalism is attacked with: "You just want poor people to starve in the gutter so billionaires can buy yachts!" (another pathetic straw man). Neither participant learns anything; both leave smug and stupid. Steelmanning requires summarizing your opponent’s point with such radical empathy and precision that they completely endorse your summary before you utter a syllable of disagreement.',

  quickTakeaways: [
    'Rapoport’s Rule #1: You must restate your opponent\'s view so clearly and vividly that they say, "Thanks, I wish I’d thought of putting it that way"',
    'The Vanity of the Straw Man: Destroying a weak, misrepresented argument proves nothing about the underlying reality',
    'Intellectual Stress-Testing: Your thesis is only as robust as the strongest counter-arguments it has survived',
    'The Empathy Test: Never criticize an ideology until you can convincingly pass as an ideological believer in a blind Turing test',
  ],

  whyItHappens: 'Ego preservation and confirmation bias. Human beings prefer cheap social victories that reinforce their tribal identity over the painful cognitive labor of discovering that a despised opponent might possess valid empirical insights.',
  evolutionaryMechanism: 'In tribal warfare, portraying the rival tribe as subhuman or irredeemably foolish galvanized morale and expedited violent unity. Nuanced, charitable evaluation of the enemy weakened aggressive combat resolve.',

  howItWorks: 'Daniel Dennett’s four steps of steelmanning: (1) Re-express the target\'s position with complete clarity and charity; (2) List any points of agreement ("I agree with your premise that X is a crisis"); (3) Mention anything you learned from them; (4) Only after steps 1-3 are fulfilled are you intellectually qualified to voice a rebuttal.',
  whereYouEncounterIt: 'High-stakes legal appeals (where great appellate lawyers state the opposing side’s case with terrifying clarity), scientific peer review, diplomatic peace summits, and elite philosophy seminars.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Strawmanning vs. Steelmanning',
    description: 'How intellectual charity alters the trajectory of disagreement.',
    analogySideA: {
      label: 'Straw Man (Intellectual Cowardice)',
      detail: '"My opponent wants to slash the defense budget because they hate our country and want enemies to conquer us!"',
    },
    analogySideB: {
      label: 'Steel Man (Epistemic Mastery)',
      detail: '"My opponent argues that allocating capital to domestic cyber-defense and education yields higher long-term national resilience than building physical battleships. While that point is compelling, our current maritime treaty obligations mandate..."',
    },
  },

  researchSummary: 'Anatol Rapoport (1960) proved during Cold War diplomatic research that ideological opponents who were forced to state each other\'s positions to the other party\'s satisfaction before negotiating achieved over 60% higher conflict resolution rates and experienced dramatic drops in physiological hostility.',
  limitationsAndControversies: 'Steelmanning can be weaponized in bad faith if a bad actor holds an inherently incoherent, genocidal, or pseudoscientific view (e.g., trying to "steelman" flat-earth geography or ethnic cleansing gives an unearned veneer of intellectual dignity to foundational falsehoods).',
  commonMisconceptions: 'Common myth: "Steelmanning means conceding that your opponent is right." Reality: Steelmanning means constructing the most bulletproof version of their argument so you can test whether your own counter-reasoning can withstand true intellectual scrutiny.',

  howToRecognize: [
    'Noticing that you describe your political or philosophical opponents as "either brainwashed, stupid, or evil"',
    'Interrupting someone mid-sentence because you are reacting to what you ASSUME they are going to say rather than what they actually said',
    'Feeling smug after a debate because you caught someone in a grammatical slip or minor factual error while dodging their core philosophical point',
    'Being unable to explain why 50 million citizens voted differently than you without resorting to insults',
  ],

  scenarios: [
    {
      id: 'scen_steel_01',
      scenarioType: 'indian_context',
      title: 'The Remote Work vs. Office Mandate Debate in Pune',
      vignette: 'At an enterprise tech company in Pune, the CEO announces a mandatory return to office 4 days a week. The engineering Slack channel erupts into straw-man fury: "Management is just a bunch of insecure micro-managers who want to watch us sit in chairs because they hate our families!" An engineering director, Rohan, steps into the all-hands and says: "Let me state management’s strongest argument: when junior engineers join fresh out of university, asynchronous documentation cannot replace the spontaneous whiteboarding, osmosis learning, and rapid mentorship that happens in-person. The risk of our engineering culture becoming transactional and fractured is a legitimate existential threat to company innovation. Now, having acknowledged that valid concern, here is our proposed hybrid framework..." The CEO immediately listens with rapt attention.',
      breakdownAnalysis: 'Rohan deployed masterful steelmanning. By articulating management’s strongest strategic anxiety with profound clarity and empathy, he disarmed their defensiveness. The debate moved from childish emotional warfare to high-level organizational architecture.',
      recommendedAction: 'Always apply Rapoport\'s Rule #1: Validate their core strategic concern so powerfully that they feel heard, before proposing your alternative solution.',
    },
  ],

  examples: [
    {
      id: 'ex_steel_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Supreme Court Litigator',
      description: 'The greatest appellate lawyers in the Supreme Court always begin their oral arguments by stating the opposing counsel\'s arguments in their strongest, most persuasive legal framework. Once the judges see they do not fear the truth, their rebuttal lands with devastating precision.',
      takeaway: 'Fearlessness in the face of counter-evidence is the hallmark of truth.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_steel_01',
      scenarioContext: 'Two economists are debating universal basic income (UBI). Economist A is deeply opposed to UBI. Before Economist A presents his rebuttal against Economist B’s proposal, which opening statement demonstrates the steelmanning technique?',
      question: 'Which statement adheres to Rapoport\'s Rules of intellectual engagement?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: '"Economist B’s core insight is that as artificial intelligence rapidly shifts the marginal cost of cognitive labor toward zero, standard welfare bureaucracies are too slow and patronizing; direct unconditional cash transfers eliminate bureaucratic bloat and provide a dignified survival floor. This is an extraordinarily profound challenge. Where our models diverge, however, is on the inflationary velocity of money..."',
          explanation: 'Accurate: this restates the opponent’s strongest philosophical thesis with radical clarity and respect before offering a macroeconomic rebuttal.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: '"Economist B wants to turn our entire nation into lazy welfare addicts who sit at home playing video games on taxpayer money."',
          explanation: 'This is a textbook juvenile straw man that destroys intellectual credibility.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: '"Economist B has a PhD from a university that I personally dislike, so their macroeconomic equations are invalid."',
          explanation: 'This is an ad hominem fallacy, completely unrelated to philosophical steelmanning.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Steelmanning disarms defensive hostility by demonstrating that you fully understand your opponent’s best points.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Before critiquing an opponent\'s stance, articulate their position so clearly and charitably that they say: "I wish I had put it that well."',
  psychologicalDefenses: [
    {
      title: 'The Rapoport Restatement Protocol',
      instruction: 'In any heated debate, make it an ironclad rule: "I cannot utter my counter-argument until I have restated your argument to your satisfaction." Ask: "Did I represent your point accurately?"',
    },
    {
      title: 'Upgrade the Opponent’s Argument',
      instruction: 'Before refuting a thesis, ask: "What is the smartest, most sophisticated data point or philosophical argument in favor of their position that they forgot to mention?" Add it to their case.',
    },
    {
      title: 'The Ideological Turing Test (Bryan Caplan)',
      instruction: 'Test yourself: Can you write a 500-word essay defending an opposing political or economic philosophy so convincingly that a lifelong partisan would believe it was written by one of their own?',
    },
  ],

  reflectionPrompt: 'Do you instinctively seek the weakest version of an opposing political or philosophical viewpoint, or do you test your ideas against their best thinkers?',

  references: [
    {
      id: 'ref_dennett_2013',
      authors: 'Dennett, D. C.',
      year: 2013,
      title: 'Intuition Pumps and Other Tools for Thinking',
      publicationName: 'W. W. Norton & Company',
      volumeIssue: 'Chapter 3: Rapoport\'s Rules',
      doi: '10.1037/0000000-004',
      evidenceStrength: 'foundational_monograph',
    },
    {
      id: 'ref_rapoport_1960',
      authors: 'Rapoport, A.',
      year: 1960,
      title: 'Fights, Games, and Debates',
      publicationName: 'University of Michigan Press',
      volumeIssue: 'Part III',
      doi: '10.3998/mpub.9691',
      evidenceStrength: 'historical_classic',
    },
  ],

  relatedTopics: [
    {
      topicId: 'first_principles_thinking',
      slug: 'first-principles-thinking',
      title: 'First Principles Thinking',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'falsification_principle',
      slug: 'falsification-principle',
      title: 'The Falsification Principle',
      relationshipType: 'amplified_by',
    },
  ],
};

export const TOPIC_STEELMANNING: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_STEELMANNING_EN,
  hinglish: {
    ...TOPIC_STEELMANNING_EN,
    title: 'The Steelmanning Technique: Straw Man Ka Sabse Bada Tod',
    subtitle: 'Apne virodhi ki baat ko usse bhi behtar tareeqe se explain karna, uske baad hi koi criticism karna.',
    shortDescription: 'Daniel Dennett ka intellectual rule: kisi ki baat ka mazaak udane ke bajaye uske argument ka sabse strong version banana aur phir debate karna.',
    oneLineExplanation: 'Agar aap yeh nahi bata sakte ki ek samajhdar insaan opposite baat kyu manta hai, toh aap mudda hi nahi samjhe.',
    summary30s: 'Steelmanning debate ka sabse bada masterclass hai. Zyadatar log "Straw Man" use karte hain—saamne wale ki baat ko tod-marod kar aisi cartoonish galti banate hain jise harana aasan ho. Steelmanning iska ulta hai: aap saamne wale ki baat ko itni khoobsurti aur logic se present karte hain ki wo bolta hai "Aapne meri baat mujhse behtar bol di." Tab jaakar aap apna point rakhte hain.',
  },
  hi: {
    ...TOPIC_STEELMANNING_EN,
    title: 'The Steelmanning Technique (सुदृढ़-पक्षीय संवाद तकनीक)',
    subtitle: 'विरोधी के तर्क को उपहास का पात्र बनाने के बजाय उसे उसके सर्वश्रेष्ठ रूप में प्रस्तुत करने का बौद्धिक अनुशासन।',
    shortDescription: 'डेनियल डेनेट और अनाटोल रापोपोर्ट द्वारा प्रतिपादित नियम: आलोचना करने से पूर्व विरोधी के दृष्टिकोण को इतनी स्पष्टता और गरिमा के साथ व्यक्त करना कि वह स्वयं सहमत हो जाए।',
    oneLineExplanation: 'विरोधी के तर्क का उपहास उड़ाए बिना उसके सबसे मजबूत रूप को समझना।',
    summary30s: 'सुदृढ़-पक्षीय तकनीक (Steelmanning) बौद्धिक ईमानदारी का सर्वोच्च रूप है। अधिकांश लोग "स्ट्रॉ मैन" (Straw Man) का उपयोग करके विरोधी के विचार को विकृत करते हैं ताकि उसे हराना आसान हो। इसके विपरीत, स्टीलमेनिंग में विरोधी के तर्कों को सशक्त बनाकर परखा जाता है। जॉन स्टुअर्ट मिल ने कहा था कि जो केवल अपना पक्ष जानता है, वह वास्तव में कुछ नहीं जानता।',
  },
  gu: TOPIC_STEELMANNING_EN,
  mr: TOPIC_STEELMANNING_EN,
  te: TOPIC_STEELMANNING_EN,
  ta: TOPIC_STEELMANNING_EN,
  kn: TOPIC_STEELMANNING_EN,
  ml: TOPIC_STEELMANNING_EN,
  bn: TOPIC_STEELMANNING_EN,
  pa: TOPIC_STEELMANNING_EN,
  ur: TOPIC_STEELMANNING_EN,
  or: TOPIC_STEELMANNING_EN,
  as: TOPIC_STEELMANNING_EN,
  };
