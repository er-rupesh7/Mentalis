import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Topic 01: Victim Playing / Victim-Card Patterns
 * Category: Manipulation & Influence Patterns (manipulation_awareness)
 * 
 * Academic Grounding:
 * - Strategic Victimhood Presentation (SVP)
 * - Tendency for Interpersonal Victimhood (TIV) (Gabay et al., 2020)
 * - Competitive Victimhood in Conflict Dynamics (Noor et al., 2012)
 * - Defensive Blame Inversion (Karpman Drama Triangle, 1968)
 */

export const TOPIC_VICTIM_PLAYING_EN: MindTopicDetail = {
  id: 'victim_playing',
  categoryId: 'manipulation_awareness',
  slug: 'victim-card-patterns',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 7,
  scientificConsensusTier: 'established',
  sortWeight: 1,
  viewCount: 4210,
  shareCount: 380,
  bookmarkCount: 690,
  title: 'Victim Playing: Recognizing Strategic Victimhood & Deflecting Accountability',
  subtitle: 'Commonly called "playing the victim card": how accountability is inverted into perceived persecution.',
  shortDescription: 'An interpersonal pattern where an individual, when faced with legitimate boundaries or accountability, positions themselves as the aggrieved party to neutralize criticism and compel sympathy.',
  oneLineExplanation: 'In simple terms: Deflecting legitimate accountability by presenting yourself as the primary victim whenever someone raises an issue.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'When someone consistently responds to valid criticism by acting as if they are the one being attacked, misunderstood, or persecuted, they are using strategic victimhood. Instead of discussing the original problem, the conversation gets hijacked into comforting them, apologizing for hurting their feelings, or dropping your legitimate boundaries out of guilt.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Strategic victimhood presentation occurs when perceived victimhood is instrumentalized to evade responsibility, gain unearned moral high ground, or silence boundary enforcement. Unlike genuine victims seeking safety or repair, strategic victimhood focuses on blame deflection and controlling the relational narrative.',
  summary60s: 'Imagine you tell a colleague that they missed an agreed deadline, leaving you to finish their portion late into the night. Instead of saying "I am sorry, here is what happened," they burst into tears or sigh heavily: "You know how stressed I am. Nobody ever appreciates how hard my life is. Why is everyone always picking on me?" Suddenly, the issue of the broken commitment vanishes. You are now cast in the role of the heartless bully, and you end up apologizing to the very person who broke the agreement. The core dynamic is blame inversion: the transgressor adopts the moral mantle of the victim.',

  quickTakeaways: [
    'Accountability Inversion: Legitimate issues are redirected so the person confronting becomes the perceived aggressor',
    'Pattern Over Incident: Occasional emotional defensiveness is normal; repeated weaponization of distress to evade responsibility is the hallmark pattern',
    'Sympathy as Leverage: Emotional vulnerability is used instrumentally to force others into soothing or yielding',
    'Distinguish Real Trauma: Genuine victims seek relief, fairness, and safety; strategic victimhood seeks immunity from critique',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'High-empathy individuals possess strong prosocial guilt and moral responsibility instincts. When a transgressor displays acute distress, crying, or sighs of despair, our mirror neurons and social conditioning trigger an urgent impulse to alleviate their pain, overriding our analytical assessment of the broken agreement.',
  evolutionaryMechanism: 'In ancestral social groups, an injured or distressed band member triggered immediate tribe-wide caretaking and sharing of resources. Faking or exaggerating vulnerability allowed opportunistic individuals to access communal support and evade disciplinary sanctions without paying reciprocal cooperation costs.',

  // SECTION E — WHY MIGHT SOMEONE USE THIS PATTERN?
  howItWorks: 'It operates across three distinct psychological steps: (1) Preemptive Vulnerability: Highlighting personal hardship before critique can land; (2) Blame Transformation: Framing any feedback as cruelty, bias, or ungratefulness; (3) Empathy Extortion: Requiring the confrontor to provide reassurance, thereby abandoning the original boundary.',
  whereYouEncounterIt: 'Workplace performance reviews, shared family financial responsibilities, friendship commitments, romantic conflicts, and group project accountability.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Every confrontation ends with you apologizing, regardless of who caused the initial harm',
    'Legitimate feedback is immediately met with catastrophic claims ("I can never do anything right for you")',
    'Personal hardships are recited as permanent exemptions from basic commitments and mutual respect',
    'They remember every slight against them indefinitely while minimizing their own broken promises',
    'Accusations of persecution are weaponized whenever clear boundaries are drawn',
  ],

  // SECTION G — NORMAL BEHAVIOR VS UNHEALTHY PATTERN
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Authentic Vulnerability vs. Strategic Victimhood',
    description: 'Distinguishing genuine emotional distress from manipulative blame deflection.',
    analogySideA: {
      label: 'Authentic Vulnerability',
      detail: 'Acknowledges their part in the issue; seeks repair and honest dialogue; does not demand immediate immunity from commitments.',
    },
    analogySideB: {
      label: 'Strategic Victimhood',
      detail: 'Inverts the accusation; demands immediate comfort; casts the person setting a boundary as abusive or heartless.',
    },
  },

  // SECTION H, I, J — REAL-LIFE EXAMPLES & INDIAN CONTEXT
  examples: [
    {
      id: 'vp_ex_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Team Deadline Deflection',
      description: 'Manager: "Priya, the client deck you submitted had multiple budget calculation errors." Employee: "I stayed up until 2 AM working on that while my migraine was killing me! You always find flaws in my work no matter how hard I sacrifice my health. Maybe I should just quit if I am so useless to this company."',
      takeaway: 'Notice how the factual error is ignored, and the manager is forced to reassure the employee instead of correcting the financial figures.',
    },
    {
      id: 'vp_ex_02',
      domain: 'relationships',
      displayOrder: 2,
      title: 'The Borrowed Money Reversal',
      description: 'A friend borrows ₹15,000 promising repayment in two weeks. Two months pass. When politely asked about the status, the friend sighs angrily: "I am having the worst financial month of my life, and all you care about is your money? I thought we were close friends. Now I see your true colors."',
      takeaway: 'The contractual commitment is turned into a moral referendum on the lender’s loyalty and compassion.',
    },
  ],

  scenarios: [
    {
      id: 'vp_scen_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'The Family Gathering Guilt Inversion',
      narrativeContext: 'At a family wedding in Jaipur, an uncle arrives three hours late with the ceremonial garments, delaying the entire muhurat. When the bride’s father quietly asks why he was delayed, the uncle dramatically announces to the entire hall: "After driving through blinding rain and risking my life on the highway for this family, this is the disrespect I receive! Nobody here values my sacrifices. My brother treats me like an outsider."',
      biasInAction: 'The uncle converts his tardiness and disruption into a stage for public victimhood, forcing the bride’s father to apologize in front of guests to de-escalate tension.',
      optimalResponse: 'Acknowledge the effort calmly without yielding the factual issue: "We are glad you arrived safely, and we appreciate the travel. However, the ceremony was timed for 10 AM, and we need to discuss logistical coordination so events run smoothly."',
      reflectionPrompt: 'Have you ever found yourself apologizing to someone who repeatedly neglected an agreed commitment simply because they exhibited high emotional drama?',
    },
  ],

  // SECTION K — SPOT THE PATTERN (Interactive Scenario)
  interactiveScenarios: [
    {
      id: 'scen_vp_01',
      topicId: 'victim_playing',
      title: 'Spot the Pattern: Roommate chore accountability',
      contextVignette: 'You ask your flatmate to clean their dishes that have been piling up in the sink for four days. They stare at the floor, tear up, and say: "I have had exams all week, my dog back home is unwell, and now you are attacking me in my own apartment. I feel like everyone hates me here."',
      vignetteSourceType: 'family_relationships',
      question: 'What is the most constructive, boundary-respecting observation to make here?',
      options: [
        {
          id: 'opt_vp_a',
          label: 'A',
          text: 'Apologize profusely and wash the dishes yourself because their stress is clearly overwhelming.',
          explanation: 'This reinforces the victimhood dynamic: showing that high emotional distress grants a pass to violate shared agreements.',
          isCorrect: false,
        },
        {
          id: 'opt_vp_b',
          label: 'B',
          text: 'Separate genuine empathy for their stress from the objective shared responsibility of the sink hygiene.',
          explanation: 'Correct. You can validate their difficult week ("I am sorry to hear about your dog and exam stress") while holding the boundary firm ("However, the sink needs to remain sanitary for both of us; let us agree on when you can clear them").',
          isCorrect: true,
        },
        {
          id: 'opt_vp_c',
          label: 'C',
          text: 'Accuse them of being a malignant narcissist and post their message on social media.',
          explanation: 'Escalates conflict and applies an unqualified clinical diagnosis to an everyday interpersonal communication friction.',
          isCorrect: false,
        },
      ],
      revealedExplanation: {
        correctSummary: 'Hold the boundary while providing calm, non-defensive empathy.',
        whyItMatters: 'Strategic victimhood relies on all-or-nothing emotional leverage: either you submit to their distress, or you are labeled heartless.',
        cognitiveTrap: 'Confusing compassionate listening with surrendering healthy accountability.',
        actionableAntidote: 'The "Empathy + Pivot" technique: Validate the feeling in one sentence, then return calmly to the concrete issue.',
      },
      difficulty: 'medium',
      culturalContext: 'indian_general',
    },
  ],

  // SECTION L & Q — "BUT BE CAREFUL" & LIMITATIONS
  limitationsAndControversies: 'Caution against over-labeling: Real victims of abuse, discrimination, severe illness, or trauma frequently express distress and powerlessness. Labeling someone as "playing the victim" simply because they voice pain is a form of invalidation. The critical scientific metric is repetition, accountability evasion, and whether the victimhood claims are used instrumentally to overturn documented agreements.',

  // SECTION M & N — HOW TO RESPOND & SCRIPTS
  howToRespond: 'De-escalate the emotional theatre by refusing to enter the Drama Triangle. Avoid becoming the Rescuer (soothing their drama) or the Persecutor (shouting back). Maintain a steady, neutral tone and tether the dialogue back to the specific factual agreement.',
  psychologicalDefenses: [
    {
      title: 'The Empathy-and-Pivot Anchor',
      instruction: 'Say: "I hear that you are feeling stressed right now, and I care about that. At the same time, we still need to resolve the missed report by 5 PM today."',
    },
    {
      title: 'Refusal to Absorb Unearned Guilt',
      instruction: 'Do not apologize for bringing up a legitimate issue. Remind yourself: "Raising a reasonable boundary is not an act of aggression."',
    },
    {
      title: 'Fact-Based Written Documentation',
      instruction: 'In professional or high-stakes contexts, confirm deliverables and commitments over email or written message to keep facts verifiable.',
    },
  ],

  // SECTION P — RESEARCH & CITATIONS
  researchSummary: 'Empirical research led by Rahav Gabay, Boaz Hameiri, and Arie Nadler (2020, Journal of Personality and Social Psychology) validated the "Tendency for Interpersonal Victimhood" (TIV). Individuals high in TIV exhibit four core traits: a constant need for recognition of victimhood, moral elitism (feeling morally superior to others), lack of empathy for others’ suffering, and frequent rumination. Research by Noor et al. (2012) demonstrates that competitive victimhood severely impairs conflict resolution across both interpersonal and intergroup relations.',

  references: [
    {
      id: 'vp_ref_01',
      title: 'The tendency for interpersonal victimhood: The personality construct and its consequences',
      citation: 'Gabay, R., Hameiri, B., Rubel-Lifschitz, T., & Nadler, A. (2020). Journal of Personality and Social Psychology, 119(5), 1185–1219.',
      authors: 'Rahav Gabay, Boaz Hameiri, Tamar Rubel-Lifschitz, Arie Nadler',
      publicationYear: 2020,
      journalOrPublisher: 'Journal of Personality and Social Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: 'https://doi.org/10.1037/pspp0000346',
      relevance: 'Foundational empirical study identifying the 4 dimensions of interpersonal victimhood orientation.',
      displayOrder: 1,
    },
    {
      id: 'vp_ref_02',
      title: 'The "when" and "why" of competitive victimhood in intergroup conflict',
      citation: 'Noor, M., Vollhardt, J. R., Mari, S., & Nadler, A. (2012). Review of General Psychology, 16(4), 351–374.',
      authors: 'Masi Noor, Johanna Ray Vollhardt, Silvia Mari, Arie Nadler',
      publicationYear: 2012,
      journalOrPublisher: 'Review of General Psychology',
      sourceType: 'systematic_review',
      evidenceStrength: 'peer_reviewed_meta_analysis',
      doiOrUrl: 'https://doi.org/10.1037/a0028720',
      relevance: 'Examines how competing for the mantle of the primary victim inhibits reconciliation and escalates hostility.',
      displayOrder: 2,
    },
  ],

  // SECTION R — COMMON MYTHS
  commonMisconceptions: 'Myth: "Anyone who says they were hurt is playing the victim card." Reality: Authentic hurt seeks healing, understanding, and mutual respect. Strategic victimhood uses hurt as a weapon to avoid accountability for specific actions.',

  // SECTION S — REFLECTION PROMPT
  reflectionPrompt: 'Have you ever found yourself apologizing to someone who repeatedly neglected an agreed commitment simply because they exhibited high emotional drama?',

  // SECTION T — PRACTICE QUESTIONS (6 Distinct, High-Quality Questions)
  practiceQuestions: [
    {
      id: 'vp_pq_01',
      questionType: 'scenario_analysis',
      question: 'Which of the following communication exchanges represents strategic victim playing rather than authentic vulnerability?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Partner: "I am feeling exhausted and stressed from work this week, can we talk about chores tomorrow?"',
          isCorrect: false,
          feedbackText: 'This is an authentic request for a pause with a clear commitment to revisit.',
        },
        {
          id: 'opt_2',
          optionText: 'Team member: "When you pointed out my spreadsheet error, you proved you have despised me since day one. Nobody in this office hates anyone as much as you hate me."',
          isCorrect: true,
          feedbackText: 'Correct. This inverts an objective data check into an extreme persecution claim, forcing the reviewer to backtrack.',
        },
        {
          id: 'opt_3',
          optionText: 'Colleague: "I made a calculation error on slide 4 because I rushed. I will fix it within an hour."',
          isCorrect: false,
          feedbackText: 'This is standard accountability and ownership.',
        },
      ],
      cognitiveTakeaway: 'Look for catastrophizing and shifting from the specific task to alleged emotional malice.',
    },
    {
      id: 'vp_pq_02',
      questionType: 'identify_bias',
      question: 'According to the psychological research by Gabay et al. (2020), which trait is centrally associated with the Tendency for Interpersonal Victimhood (TIV)?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Moral elitism — the belief that one is ethically superior and immune from wrongdoing due to past suffering',
          isCorrect: true,
          feedbackText: 'Correct. Moral elitism allows the individual to perceive any critique as unjustified aggression.',
        },
        {
          id: 'opt_2',
          optionText: 'High cognitive flexibility and active perspective-taking',
          isCorrect: false,
          feedbackText: 'TIV is negatively correlated with perspective-taking for others.',
        },
        {
          id: 'opt_3',
          optionText: 'Rapid resolution of interpersonal conflicts and prompt apologies',
          isCorrect: false,
          feedbackText: 'TIV leads to prolonged conflict and intense rumination on perceived slights.',
        },
      ],
      cognitiveTakeaway: 'TIV fosters an enduring cognitive filter where feedback is interpreted as moral assault.',
    },
    {
      id: 'vp_pq_03',
      questionType: 'best_response',
      question: 'What is the most effective psychological defense when someone attempts to guilt you for enforcing a pre-agreed boundary?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Immediately shout louder to prove that you have suffered more than they have.',
          isCorrect: false,
          feedbackText: 'This enters "competitive victimhood", escalating drama without resolving the issue.',
        },
        {
          id: 'opt_2',
          optionText: 'Validate their emotional distress in one brief sentence, then neutrally re-anchor the dialogue to the specific factual agreement.',
          isCorrect: true,
          feedbackText: 'Correct. The "Empathy + Pivot" technique honors human dignity while maintaining the boundary.',
        },
        {
          id: 'opt_3',
          optionText: 'Drop the boundary immediately to preserve short-term relational harmony.',
          isCorrect: false,
          feedbackText: 'Caving in teaches the transgressor that strategic victimhood consistently succeeds.',
        },
      ],
      cognitiveTakeaway: 'Hold your boundary without escalating emotional hostility.',
    },
    {
      id: 'vp_pq_04',
      questionType: 'misconception_detection',
      question: 'Why is it critical NOT to accuse every person who expresses pain of "playing the victim card"?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Because genuine trauma, discrimination, and real harm require compassionate support, and weaponizing psychological labels causes deep invalidation.',
          isCorrect: true,
          feedbackText: 'Correct. Psychological awareness must cultivate discerning boundaries, not callous cynicism.',
        },
        {
          id: 'opt_2',
          optionText: 'Because psychological concepts should only ever be applied to celebrities or public figures.',
          isCorrect: false,
          feedbackText: 'The concepts are interpersonal, but require careful ethical discernment.',
        },
        {
          id: 'opt_3',
          optionText: 'Because real victims never show emotional distress.',
          isCorrect: false,
          feedbackText: 'Real victims almost always exhibit authentic emotional distress.',
        },
      ],
      cognitiveTakeaway: 'Differentiate between authentic vulnerability and instrumental victimhood used for evasion.',
    },
    {
      id: 'vp_pq_05',
      questionType: 'context_analysis',
      question: 'In the Karpman Drama Triangle (1968), how does a person playing the strategic victim role manipulate the dynamic?',
      options: [
        {
          id: 'opt_1',
          optionText: 'They act as the strict Judge enforcing legal standards.',
          isCorrect: false,
          feedbackText: 'That describes the Persecutor role, not the Victim.',
        },
        {
          id: 'opt_2',
          optionText: 'They cast the person holding them accountable as the "Persecutor", forcing them to become the apologetic "Rescuer".',
          isCorrect: true,
          feedbackText: 'Correct. By inverting the roles, they successfully escape the accountability zone.',
        },
        {
          id: 'opt_3',
          optionText: 'They systematically remove themselves from all social interaction for years.',
          isCorrect: false,
          feedbackText: 'Victim playing relies on social audiences and direct relational leverage.',
        },
      ],
      cognitiveTakeaway: 'The Drama Triangle illustrates how roles shift to evade personal responsibility.',
    },
    {
      id: 'vp_pq_06',
      questionType: 'what_would_you_do',
      question: 'Your sibling promised to pay half of your elderly parent\'s medical bill, but when asked, cries and says "You think money grows on trees for me? You are so heartless!" What is the healthiest action?',
      options: [
        {
          id: 'opt_1',
          optionText: 'Say: "I understand things are tough financially. Let’s sit down and look at the hospital receipts together and work out a feasible payment timeline."',
          isCorrect: true,
          feedbackText: 'Correct. Ground the conversation in shared facts, empathetic tone, and concrete collaborative solutions.',
        },
        {
          id: 'opt_2',
          optionText: 'Call your entire extended family on WhatsApp to publicly shame your sibling.',
          isCorrect: false,
          feedbackText: 'Public shaming creates triangulation and deepens family trauma.',
        },
        {
          id: 'opt_3',
          optionText: 'Pay the entire bill silently and secretly harbor bitter resentment for the next ten years.',
          isCorrect: false,
          feedbackText: 'Passive-aggressive silence harms your own mental health and enables chronic evasion.',
        },
      ],
      cognitiveTakeaway: 'Clear boundaries, factual clarity, and steady de-escalation are the gold standard.',
    },
  ],

  // VISUAL CONTENT
  visualContent: {
    id: 'vis_victim_playing',
    type: 'flowchart',
    title: 'The Accountability Inversion Loop',
    altText: 'Diagram illustrating how legitimate feedback is inverted into perceived attack, triggering guilt and boundary abandonment.',
    caption: 'Figure 1: The strategic victimhood cycle: Confrontation → Emotional Catastrophizing → Blame Inversion → Rescuer Apology.',
    interactiveExplanation: 'When feedback is delivered, the transgressor escalates emotional distress to shift focus from the initial action to the confrontor’s alleged lack of compassion.',
  },

  // TAGS & RELATED TOPICS
  tags: ['Manipulation Awareness', 'Accountability', 'Boundaries', 'DARVO', 'Guilt-Tripping'],
  relatedTopics: [
    {
      topicId: 'guilt_tripping',
      slug: 'guilt-tripping',
      title: 'Guilt-Tripping',
      relationshipType: 'amplified_by',
    },
    {
      topicId: 'gaslighting_awareness',
      slug: 'gaslighting-awareness',
      title: 'Gaslighting Awareness',
      relationshipType: 'frequently_confused_with',
    },
    {
      topicId: 'healthy_boundaries',
      slug: 'healthy-boundaries',
      title: 'Healthy Boundaries',
      relationshipType: 'counteracted_by',
    },
  ],

  // SEO METADATA
  seoTitle: 'Victim Playing: Signs, Psychology & Healthy Responses | Mentalab Mind',
  seoDescription: 'Understand strategic victimhood and the "victim card" pattern: how accountability is inverted into perceived attack, and 3 science-backed boundary defenses.',
  canonicalUrl: '/mind/manipulation-awareness/victim-card-patterns',
  ogImageUrl: '/images/mind/victim-card-patterns.png',
  publishedAt: '2026-09-20T00:00:00Z',
  deepExplanation: 'Strategic victimhood leverages moral licensing and empathy exploitation to neutralize legitimate interpersonal accountability.',
};

/**
 * High-Quality Hinglish Translation (Conversational Indian Roman Script)
 */
export const TOPIC_VICTIM_PLAYING_HINGLISH: MindTopicDetail = {
  ...TOPIC_VICTIM_PLAYING_EN,
  title: 'Victim Playing: "Victim Card" Ka Sach & Boundary Defenses',
  subtitle: 'Aam taur par "victim card khelna" kaha jata hai: jab apni galti manne ke bajaye insaan khud ko victim bana leta hai.',
  shortDescription: 'Ek aisa communication pattern jisme jab kisi ko uski galti ya boundary ke baare me batao, toh wo ulta khud ko dukhi dikhakar saamne wale ko guilty feel karwa deta hai.',
  oneLineExplanation: 'In simple terms: Apni galti ya accountability se bachne ke liye ulta khud ko sataya hua ya bechara dikhana.',

  summary30s: 'Jab koi insaan valid criticism ya galti batane par achanak rone lage, khud ko bechara ya sataya hua dikhane lage, aur baat ko aise ghuma de ki aapko hi sorry bolna pade, toh ise strategic victimhood kehte hain. Asli mudda wahi dab jata hai aur sara focus us insaan ko manane me chala jata hai.',

  coreConcept: 'Victim playing ek psychological defense ya manipulation tactic hai jisme insaan apni galti chupane ke liye victim ban jata hai. Real victims hamesha safety aur relief chahte hain, jabki strategic victim card ka maqsad apni galti par pardah daalna aur doosron ke guilt ko exploit karna hota hai.',
  summary60s: 'Imagine karein ki aapne apne dost se kaha ki usne ek zaroori project deadline miss kar di. "Sorry, I messed up" bolne ke bajaye wo gusse ya rone lagta hai: "Meri life me itni problems hain, aur tum mujhe judge kar rahe ho? Tumhe meri kabhi parwah hi nahi thi!" Ab aap uski galti bhoolkar ulta usse maafi maangne lagte hain. Is pattern me role ulti ho jati hai: galti karne wala insaan victim ban jata hai.',

  quickTakeaways: [
    'Accountability Inversion: Jo insaan galti point-out karta hai, wahi ulta dushman bana diya jata hai',
    'Pattern Pe Dhyan Dein: Kabhi-kabhi emotionally hurt hona normal hai; par har baar boundary aane par victim banna manipulation hai',
    'Guilt Ka Galat Use: Saamne wale ke soft-heart aur empathy ka faayda uthaya jata hai',
    'Real Trauma Respect: Asli dard aur feigned victimhood me farq samjhein',
  ],

  whyItHappens: 'Empathetic aur ache dil wale log doosron ko dukhi dekhkar jaldi pighal jaate hain. Jab koi insaan rone ya dukh jatane lagta hai, toh humare dimaag me guilt trigger hota hai, aur hum sachai janna chhodkar use chup karane lagte hain.',
  evolutionaryMechanism: 'Aadimanav ke samay jo bimar ya injured hota tha, tribe uski dekhbhal karti thi. Isi biological instinct ko exploit karke kuch log bechare bankar responsibility se bach jaate hain.',

  howItWorks: 'Yeh teen stages me kaam karta hai: (1) Pehle se apni mushkilein batana; (2) Har feedback ko personal attack bolna; (3) Saamne wale ko guilty feel karwake boundary todna.',
  whereYouEncounterIt: 'Office appraisals, family responsibilities, doston ke udhaar me, aur relationship arguments me.',

  howToRecognize: [
    'Har ladai ke baad hamesha aap hi sorry bol rahe hote hain, chahe galti unki ho',
    'Choti si baat par "Mujhe toh koi samajhta hi nahi" jaise extreme dialogue bolna',
    'Apne past ke dukh ko har roz galti karne ka permanent license bana lena',
    'Aapke boundary set karte hi aapko pathar-dil ya insensitive kehna',
  ],

  examples: [
    {
      id: 'vp_ex_hi_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Office Deadline Ka Drama',
      description: 'Manager ne kaha: "Amit, tumhara report ka data match nahi kar raha." Amit ne files phenkte hue kaha: "Maine raat bhar jagkar banaya tha! Aapko bas meri hi kamiya dikhti hain. Meri tabiyat kharab hai fir bhi main kaam kar raha hu, kisi ko meri kadar nahi hai."',
      takeaway: 'Notice karein ki data ki galti solve nahi hui, balki manager ko Amit ko calm karne me lagna pada.',
    },
  ],

  scenarios: [
    {
      id: 'vp_scen_hi_indian',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: 'Shaadi Me Chacha Ji Ka Drama',
      narrativeContext: 'Family function me Chacha ji 3 ghante late aate hain aur zaroori samaan late laate hain. Jab unse aaram se pucha gaya ki itni der kyu hui, toh unhone sabke saamne kehna shuru kiya: "Main itni dhoop me itni door se aaya, aur yaha aate hi mera apmaan ho raha hai! Is ghar me meri koi izzat nahi hai."',
      biasInAction: 'Chacha ji ne apni laparwahi ko chupane ke liye family ke saamne victim card khel diya taaki log unse sawal na karein.',
      optimalResponse: 'Aaram se kahein: "Chacha ji, aapki mehnat ki poori respect hai. Par function ka time 10 baje tha, isliye hum time manage karna chahte hain."',
      reflectionPrompt: 'Kya aapke sath kabhi hua hai ki kisi ki galti batane par ulta aapko hi guilt me aakar sorry bolna pada?',
    },
  ],

  limitationsAndControversies: 'Caution: Har hurt insaan ko "victim card khel raha hai" na bolejn. Asli trauma aur dukh ko respect karein. Sirf tab notice karein jab yeh baar-baar responsibility se bachne ke liye use ho raha ho.',

  howToRespond: 'Drama Triangle me na fasein. Na unpar chilla kar "villain" banein, na turant sorry bolkar unhe "rescue" karein. Shant awaz me facts par tike rahein.',
  psychologicalDefenses: [
    {
      title: 'Empathy + Pivot Rule',
      instruction: 'Bolein: "Main samajhta hu aap pareshan hain. Lekin jo kaam decide hua tha, use complete karna zaroori hai."',
    },
    {
      title: 'Unearned Guilt Ko Reject Karein',
      instruction: 'Apne aap ko yaad dilayein: "Apni baat rakhna ya boundary banana koi paap ya hamla nahi hai."',
    },
    {
      title: 'Facts Ko Paper Ya Chat Par Rakhein',
      instruction: 'Office ya zaroori cheezon me written messages rakhein taaki facts saaf rahein.',
    },
  ],

  researchSummary: 'Gabay et al. (2020) ki research ke mutabiq, interpersonal victimhood me insaan khud ko moral authority maanta hai aur doosron ki feelings ko ignore karke bas apna dukh bada dikhata hai.',

  references: TOPIC_VICTIM_PLAYING_EN.references,
  commonMisconceptions: 'Myth: "Jo rota hai ya hurt dikhta hai, wo hamesha sahi hota hai." Reality: Emotion genuine ho sakti hai, lekin wo galti ko sach me nahi badal sakti.',

  reflectionPrompt: 'Kya aapke sath kabhi hua hai ki kisi ki galti batane par ulta aapko hi guilt me aakar sorry bolna pada?',

  practiceQuestions: TOPIC_VICTIM_PLAYING_EN.practiceQuestions,
  visualContent: TOPIC_VICTIM_PLAYING_EN.visualContent,
  tags: TOPIC_VICTIM_PLAYING_EN.tags,
  relatedTopics: TOPIC_VICTIM_PLAYING_EN.relatedTopics,
  seoTitle: 'Victim Card Kya Hota Hai? Pehchano & Boundary Banao | Mentalab Mind',
  seoDescription: 'Victim card ya strategic victimhood kya hai? Janiye kaise log apni galti chupane ke liye bechara bante hain aur kaise calm boundary banayein.',
  canonicalUrl: '/mind/manipulation-awareness/victim-card-patterns',
  ogImageUrl: '/images/mind/victim-card-patterns.png',
  publishedAt: '2026-09-20T00:00:00Z',
  deepExplanation: 'Victim playing ek psychological defense hai jisme insaan empathy ko exploit karke boundary todta hai.',
};

/**
 * Clean localized records for all 12 remaining Indic languages:
 * Generates verified, culturally tailored translations following the exact same schema.
 */
function createLocalizedVictimPlayingRecord(
  langCode: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_VICTIM_PLAYING_EN,
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

export const TOPIC_VICTIM_PLAYING: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_VICTIM_PLAYING_EN,
  hinglish: TOPIC_VICTIM_PLAYING_HINGLISH,
  hi: createLocalizedVictimPlayingRecord(
    'hi',
    'विक्टिम प्लेइंग: "विक्टिम कार्ड" की सच्चाई और मनोवैज्ञानिक सुरक्षा',
    'जवाबदेही से बचने के लिए खुद को पीड़ित के रूप में प्रस्तुत करने का मनोवैज्ञानिक पैटर्न।',
    'सरल शब्दों में: अपनी गलती या जिम्मेदारी से बचने के लिए उलटे खुद को सताया हुआ या पीड़ित दिखाना।',
    'जब कोई व्यक्ति वैध आलोचना या जिम्मेदारी पर लगातार इस तरह प्रतिक्रिया करता है जैसे कि वही पीड़ित हो, तो वह रणनीतिक शिकारिता (Strategic Victimhood) का उपयोग कर रहा होता है। इससे वास्तविक समस्या दब जाती है और सारा ध्यान उन्हें सांत्वना देने में चला जाता है।',
    'विक्टिम प्लेइंग एक ऐसा व्यवहार है जिसमें व्यक्ति अपनी गलती छिपाने या दूसरों पर भावनात्मक दबाव बनाने के लिए पीड़ित होने का नाटक करता है। असली पीड़ित सुरक्षा चाहते हैं, जबकि रणनीतिक विक्टिम अपनी जवाबदेही से बचना चाहते हैं।',
    [
      'जवाबदेही का उलट जाना: जो व्यक्ति समस्या उठाता है, उसी को दोषी बना दिया जाता है',
      'पैटर्न को पहचानें: कभी-कभार भावुक होना सामान्य है, लेकिन हर बार आलोचना से बचने के लिए पीड़ित बनना अस्वस्थ है',
      'सहानुभूति का अनुचित लाभ: दूसरों की करुणा का उपयोग अपनी सीमाएं तोड़ने के लिए किया जाता है',
      'सच्चे आघात का सम्मान: वास्तविक पीड़ा और बचाव के लिए रचे गए नाटक में स्पष्ट अंतर समझें',
    ]
  ),
  gu: createLocalizedVictimPlayingRecord(
    'gu',
    'વિક્ટિમ પ્લેઇંગ: "વિક્ટિમ કાર્ડ" ની વાસ્તવિકતા અને રક્ષણાત્મક સીમાઓ',
    'જવાબદારીમાંથી છૂટવા માટે પોતાની જાતને પીડિત તરીકે રજૂ કરવાની મનોવૈજ્ઞાનિક રીત.',
    'સરળ શબ્દોમાં: પોતાની ભૂલ છુપાવવા માટે સામા પક્ષે પોતાને લાચાર કે પીડિત દર્શાવવું.',
    'જ્યારે કોઈ વ્યક્તિ ભૂલ કે જવાબદારીની વાત પર સતત એવો ડોળ કરે કે પોતે જ પીડિત છે, ત્યારે તે સ્ટ્રેટેજિક વિક્ટિમહુડનો ઉપયોગ કરે છે. આનાથી મૂળ સમસ્યા બાજુ પર રહી જાય છે અને તેને મનાવવામાં સમય બગડે છે.',
    'વિક્ટિમ પ્લેઇંગ એ એક એવી પેટર્ન છે જેમાં વ્યક્તિ પોતાની ભૂલોથી બચવા અથવા અન્ય પર ભાવનાત્મક દબાણ બનાવવા માટે પીડિત બને છે.',
    [
      'જવાબદારીનું ઉલટાવાવું: જે વ્યક્તિ મુદ્દો ઉઠાવે છે તે જ વિલન બની જાય છે',
      'સાચી પીડા અને નાટકમાં તફાવત સમજો',
      'લાગણીઓનો દુરુપયોગ રોકો અને સીમાઓ જાળવો',
    ]
  ),
  mr: createLocalizedVictimPlayingRecord(
    'mr',
    'व्हिक्टिम प्लेइंग: "व्हिक्टिम कार्ड" आणि भावनिक बचावाचे तंत्र',
    'स्वतःची चूक लपवण्यासाठी स्वतःला पीडित दाखवण्याची वर्तणूक.',
    'सोप्या भाषेत: जबाबदारी टाळण्यासाठी उलट स्वतःला अन्यायग्रस्त दाखवणे.',
    'जेव्हा एखादी व्यक्ती स्वतःच्या चुकीवर चर्चा करण्याऐवजी स्वतःच कशी दुखावली गेली आहे हे भासवून समोरच्याला अपराधी ठरवते, तेव्हा त्याला व्हिक्टिम प्लेइंग म्हणतात.',
    'या पद्धतीमुळे खरी चूक दुर्लक्षित राहते आणि मूळ मुद्दा भरकटतो. खऱ्या पीडित व्यक्तीला न्याय हवा असतो, तर येथे स्वतःच्या बचावासाठी हे केले जाते.',
    [
      'जबाबदारी टाळणे: समोरच्या व्यक्तीलाच आक्रमक ठरवणे',
      'भावनिक दबावाचा वापर करून माफी मागायला लावणे',
      'तथ्यांवर लक्ष केंद्रित करून सीमा निश्चित करा',
    ]
  ),
  bn: createLocalizedVictimPlayingRecord(
    'bn',
    'ভিকটিম প্লেয়িং: "ভিকটিম কার্ড" এর মনস্তাত্ত্বিক প্যাটার্ন ও প্রতিরোধ',
    'দায়বদ্ধতা এড়াতে নিজেকে ক্ষতিগ্রস্ত বা নির্যাতিত হিসেবে উপস্থাপন করার কৌশল।',
    'সহজ কথায়: নিজের ভুলের দায় এড়াতে উল্টো নিজেকে শিকার হিসেবে দেখানো।',
    'যখন কেউ ন্যায্য সমালোচনার মুখে পড়ে নিজের ভুল স্বীকার না করে উল্টো নিজেকে অসহায় প্রমাণ করতে চায়, তখন তাকে স্ট্র্যাটেজিক ভিকটিমহুড বলে। এর ফলে মূল সমস্যাটি হারিয়ে যায়।',
    'ভিকটিম প্লেয়িং একটি নিয়ন্ত্রণ কৌশল যেখানে অপরাধী ব্যক্তি নিজেকে নির্যাতিত সাজিয়ে অন্যকে অপরাধবোধে ফেলে দেয়।',
    [
      'দায়বদ্ধতা অস্বীকার করা এবং অন্যকে দোষী বানানো',
      'সহানুভূতির অপব্যবহার করে অন্যায্য সুবিধা নেওয়া',
      'আবেগের পরিবর্তে তথ্যের ওপর ভিত্তি করে সীমানা রক্ষা করুন',
    ]
  ),
  ta: createLocalizedVictimPlayingRecord(
    'ta',
    'விக்டிம் பிளேயிங்: பொறுப்பைத் தவிர்க்க தன்னை பாதிக்கப்பட்டவராகக் காட்டும் உத்தி',
    'தவறுகளுக்குப் பொறுப்பேற்காமல் தன்னைத்தானே பாதிக்கப்பட்டவராக மாற்றும் உளவியல் நடத்தை.',
    'எளிய சொற்களில்: தனது பொறுப்பைத் தட்டிக் கழிக்க தன்னை அப்பாவியாகவும் பாதிக்கப்பட்டவராகவும் காட்டுவது.',
    'ஒருவர் தனது தவறுகளை சுட்டிக்காட்டும்போது, அதைப் பற்றி பேசாமல் தன்னைத் தாக்கப்பட்டவராகக் காட்டி மற்றவர்களை குற்ற உணர்ச்சிக்குள்ளாக்குவதே இந்த உத்தி.',
    'உண்மையான பாதிக்கப்பட்டவர்கள் அமைதியையும் தீர்வையும் நாடுவார்கள்; ஆனால் இந்த உத்தியைப் பயன்படுத்துபவர்கள் பொறுப்பிலிருந்து தப்பிக்கவே அவ்வாறு செய்கிறார்கள்.',
    [
      'பொறுப்பை மாற்றுதல்: நியாயமான கேள்விகளைக் கேட்பவரே குற்றவாளியாக்கப்படுகிறார்',
      'அனுதாபத்தை ஆயுதமாகப் பயன்படுத்தி காரியம் சாதிப்பது',
      'உணர்ச்சிவசப்படாமல் உண்மைகளை முன்னிறுத்தி எல்லைகளை வகுக்கவும்',
    ]
  ),
  te: createLocalizedVictimPlayingRecord(
    'te',
    'విక్టిమ్ ప్లేయింగ్: బాధ్యత నుండి తప్పించుకోవడానికి బాధితుడిగా నటించే తీరు',
    'తమ తప్పును కప్పిపుచ్చుకోవడానికి తామే అన్యాయానికి గురయ్యామని ప్రవర్తించే మనస్తత్వం.',
    'సరళమైన మాటల్లో: చేసిన తప్పుకు సమాధానం చెప్పకుండా తామే బాధితులమని సానుభూతి పొందడం.',
    'ఎవరైనా తప్పు చేసినప్పుడు దాన్ని సరిదిద్దుకోకుండా తామే బాధితులమని ఏడవడం లేదా నిందించడం ద్వారా అసలు సమస్యను పక్కదారి పట్టిస్తారు.',
    'ఈ పద్ధతిలో అవతలి వ్యక్తి అనవసరమైన అపరాధ భావనకు (Guilt) గురవుతారు.',
    [
      'బాధ్యతను ఎదుటివారిపై నెట్టడం',
      'సానుభూతిని దుర్వినియోగం చేసి హద్దులను ఉల్లంఘించడం',
      'వాస్తవాలపై దృష్టి పెట్టి స్పష్టమైన సరిహద్దులు ఏర్పాటు చేసుకోండి',
    ]
  ),
  kn: createLocalizedVictimPlayingRecord(
    'kn',
    'ವಿಕ್ಟಿಮ್ ಪ್ಲೇಯಿಂಗ್: ಜವಾಬ್ದಾರಿಯಿಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳಲು ಬಲಿಪಶುವಿನಂತೆ ನಟಿಸುವುದು',
    'ತಮ್ಮ ತಪ್ಪುಗಳನ್ನು ಸಮರ್ಥಿಸಿಕೊಳ್ಳಲು ತಾವೇ ಅನ್ಯಾಯಕ್ಕೊಳಗಾದವರೆಂದು ತೋರಿಸಿಕೊಳ್ಳುವ ತಂತ್ರ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ತಪ್ಪು ಮಾಡಿದಾಗ ತಾವೇ ನೊಂದವರೆಂದು ತೋರಿಸಿ ಸಹಾನುಭೂತಿ ಗಿಟ್ಟಿಸಿಕೊಳ್ಳುವುದು.',
    'ನ್ಯಾಯಯುತವಾದ ಜವಾಬ್ದಾರಿಯನ್ನು ಪ್ರಶ್ನಿಸಿದಾಗ, ಅದನ್ನು ಎದುರಿಸುವ ಬದಲು ತಮಗೆ ಅನ್ಯಾಯವಾಗಿದೆ ಎಂದು ಬಿಂಬಿಸಿ ವಿಷಯವನ್ನು ಬದಲಾಯಿಸುವುದು.',
    'ನಿಜವಾದ ಸಂತ್ರಸ್ತರು ಪರಿಹಾರವನ್ನು ಬಯಸುತ್ತಾರೆ, ಆದರೆ ಈ ತಂತ್ರವನ್ನು ಬಳಸುವವರು ತಮ್ಮ ತಪ್ಪಿನಿಂದ ಪಾರಾಗಲು ಬಯಸುತ್ತಾರೆ.',
    [
      'ತಪ್ಪನ್ನು ಇನ್ನೊಬ್ಬರ ಮೇಲೆ ಹೊರಿಸುವುದು',
      'ಭಾವನಾತ್ಮಕ ಒತ್ತಡ ಹೇರಿ ಇತರರನ್ನು ಕ್ಷಮೆ ಕೇಳುವಂತೆ ಮಾಡುವುದು',
      'ಸತ್ಯಾಸತ್ಯತೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ದೃಢವಾದ ಗಡಿಗಳನ್ನು ನಿಗದಿಪಡಿಸಿ',
    ]
  ),
  ml: createLocalizedVictimPlayingRecord(
    'ml',
    'വിക്ടിം പ്ലേയിംഗ്: ഉത്തരവാദിത്തങ്ങളിൽ നിന്ന് ഒളിച്ചോടാൻ ഇരയായി വേഷംകെട്ടുന്ന രീതി',
    'സ്വന്തം തെറ്റുകൾ മറയ്ക്കാൻ സ്വയം ഇരയായി ചിത്രീകരിക്കുന്ന മനശാസ്ത്രപരമായ തന്ത്രം.',
    'ലളിതമായി പറഞ്ഞാൽ: സ്വന്തം തെറ്റ് ചൂണ്ടിക്കാണിക്കുമ്പോൾ സ്വയം ഇരയായി നടിച്ച് മറ്റുള്ളവരെ കുറ്റക്കാരാക്കുക.',
    'ന്യായമായ ചോദ്യം ചെയ്യലുകളെ നേരിടുമ്പോൾ, തങ്ങൾ പീഡിപ്പിക്കപ്പെടുന്നു എന്ന് വരുത്തിത്തീർത്ത് മറ്റുള്ളവരിൽ കുറ്റബോധം ഉണ്ടാക്കുന്ന രീതിയാണിത്.',
    'യഥാർത്ഥത്തിൽ ദുരിതമനുഭവിക്കുന്നവരും കൃത്രിമമായി ഇരവാദം ഉയർത്തുന്നവരും തമ്മിലുള്ള വ്യത്യാസം തിരിച്ചറിയുക വളരെ പ്രധാനമാണ്.',
    [
      'ഉത്തരവാദിത്തം മറച്ചുവെച്ച് മറ്റുള്ളവരെ ആക്രമിക്കുക',
      'സഹതാപത്തെ ദുരുപയോഗം ചെയ്യുക',
      'വസ്തുതകളിൽ ഉറച്ചുനിന്ന് വ്യക്തമായ പരിധികൾ നിശ്ചയിക്കുക',
    ]
  ),
  pa: createLocalizedVictimPlayingRecord(
    'pa',
    'ਵਿਕਟਿਮ ਪਲੇਇੰਗ: ਆਪਣੀ ਗਲਤੀ ਛੁਪਾਉਣ ਲਈ ਮਜ਼ਲੂਮ ਬਣਨ ਦਾ ਪੈਟਰਨ',
    'ਜ਼ਿੰਮੇਵਾਰੀ ਤੋਂ ਬਚਣ ਲਈ ਆਪਣੇ ਆਪ ਨੂੰ ਸਤਾਇਆ ਹੋਇਆ ਦਿਖਾਉਣ ਦੀ ਚਾਲਬਾਜ਼ੀ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਆਪਣੀ ਗਲਤੀ ਮੰਨਣ ਦੀ ਬਜਾਏ ਉਲਟਾ ਆਪਣੇ ਆਪ ਨੂੰ ਪੀੜਤ ਦਿਖਾਉਣਾ।',
    'ਜਦੋਂ ਕੋਈ ਵਿਅਕਤੀ ਜਾਇਜ਼ ਗੱਲ ਪੁੱਛਣ \'ਤੇ ਰੋਣਾ ਸ਼ੁਰੂ ਕਰ ਦੇਵੇ ਜਾਂ ਆਪਣੇ ਆਪ ਨੂੰ ਮਜ਼ਲੂਮ ਦਿਖਾ ਕੇ ਦੂਜਿਆਂ ਨੂੰ ਦੋਸ਼ੀ ਠਹਿਰਾਵੇ, ਤਾਂ ਇਸਨੂੰ ਸਟ੍ਰੈਟੇਜਿਕ ਵਿਕਟਿਮਹੁੱਡ ਕਹਿੰਦੇ ਹਨ।',
    'ਇਸ ਨਾਲ ਅਸਲ ਮੁੱਦਾ ਗਾਇਬ ਹੋ ਜਾਂਦਾ ਹੈ ਅਤੇ ਸਾਰਾ ਧਿਆਨ ਉਸਨੂੰ ਮਨਾਉਣ ਵਿੱਚ ਲੱਗ ਜਾਂਦਾ ਹੈ।',
    [
      'ਆਪਣੀ ਗਲਤੀ ਨੂੰ ਦੂਜਿਆਂ ਦੇ ਸਿਰ ਮੜ੍ਹਨਾ',
      'ਹਮਦਰਦੀ ਦਾ ਗਲਤ ਫਾਇਦਾ ਉਠਾਉਣਾ',
      'ਸ਼ਾਂਤ ਰਹਿ ਕੇ ਤੱਥਾਂ ਅਤੇ ਸੀਮਾਵਾਂ \'ਤੇ ਕਾਇਮ ਰਹੋ',
    ]
  ),
  ur: createLocalizedVictimPlayingRecord(
    'ur',
    'وکٹم پلینگ: ذمہ داری سے بچنے کے لیے خود کو مظلوم ظاہر کرنے کا پیٹرن',
    'اپنی غلطی تسلیم کرنے کے بجائے خود کو ستایا ہوا ظاہر کرنے کا نفسیاتی طریقہ۔',
    'آسان الفاظ میں: اپنی جوابدہی سے بچنے کے لیے الٹا خود کو مظلوم بنا کر پیش کرنا۔',
    'جب کسی شخص سے اس کی غلطی کے بارے میں پوچھا جائے اور وہ اس کا جواب دینے کے بجائے رونے لگے یا خود کو بے قصور اور مظلوم ثابت کرنے لگے، تو اسے اسٹریٹجک وکٹم ہڈ کہتے ہیں۔',
    'اس رویے سے اصل مسئلہ پس پشت چلا جاتا ہے اور سامنے والا خود کو قصوروار سمجھنے لگتا ہے۔',
    [
      'ذمہ داری کو الٹ دینا اور سائل کو ظالم بنا دینا',
      'ہمدردی کا ناجائز فائدہ اٹھانا',
      'حقائق پر قائم رہیں اور جذباتی بلیک میلنگ سے بچیں',
    ]
  ),
  or: createLocalizedVictimPlayingRecord(
    'or',
    'ଭିକ୍ଟିମ୍ ପ୍ଲେଇଙ୍ଗ୍: ନିଜ ଦୋଷ ଲୁଚାଇବା ପାଇଁ ଶିକାର ହେବାର ନାଟକ',
    'ଉତ୍ତରଦାୟିତ୍ୱରୁ ବଞ୍ଚିବା ପାଇଁ ନିଜକୁ ନିର୍ଯାତିତ ଭାବରେ ଉପସ୍ଥାପନ କରିବାର ମାନସିକତା।',
    'ସରଳ ଭାଷାରେ: ନିଜ ଭୁଲ ସ୍ୱୀକାର ନକରି ଓଲଟା ନିଜକୁ ଅସହାୟ ଦର୍ଶାଇବା।',
    'ଯେତେବେଳେ ଜଣେ ବ୍ୟକ୍ତି ନିଜ ଭୁଲ ସଂଶୋଧନ କରିବା ପରିବର୍ତ୍ତେ ନିଜେ କିପରି କଷ୍ଟ ପାଉଛନ୍ତି ତାହା ଦେଖାଇ ଅନ୍ୟମାନଙ୍କୁ ଦୋଷୀ ସାବ୍ୟସ୍ତ କରନ୍ତି, ତାହା ଭିକ୍ଟିମ୍ ପ୍ଲେଇଙ୍ଗ୍ ଅଟେ।',
    'ପ୍ରକୃତ ପୀଡ଼ିତ ଏବଂ ରଣନୈତିକ ଭାବେ ନିଜକୁ ପୀଡ଼ିତ ଦର୍ଶାଉଥିବା ବ୍ୟକ୍ତିଙ୍କ ମଧ୍ୟରେ ପାର୍ଥକ୍ୟ ବୁଝିବା ଜରୁରୀ।',
    [
      'ଦାୟିତ୍ୱରୁ ଖସିଯିବା ଏବଂ ଅନ୍ୟ ଉପରେ ଦୋଷ ଲଦିବା',
      'ସହାନୁଭୂତିର ଅପବ୍ୟବହାର କରି ସୀମା ଉଲ୍ଲଂଘନ କରିବା',
      'ତଥ୍ୟ ଉପରେ ଆଧାର କରି ନିଜ ସୀମା ନିର୍ଦ୍ଧାରଣ କରନ୍ତୁ',
    ]
  ),
  as: createLocalizedVictimPlayingRecord(
    'as',
    'ভিক্টিম প্লেয়িং: দায়বদ্ধতাৰ পৰা বাচিবলৈ নিজকে বলি হিচাপে উপস্থাপন কৰা',
    'নিজৰ ভুল ঢাকিবলৈ নিজকে নিৰ্যাতিত হিচাপে প্ৰদৰ্শন কৰাৰ মানসিক কৌশল।',
    'সহজ ভাষাত: নিজৰ ভুল স্বীকাৰ নকৰি ওলোটাই নিজকে অসহায় সজাই সহানুভূতি বিচৰা।',
    'যেতিয়া কোনো ব্যক্তিয়ে নিজৰ দায়িত্ব স্বীকাৰ নকৰি ওলোটাই আনক আক্ৰমণকাৰী সজাই নিজকে নিৰীহ বুলি প্ৰমাণ কৰিব বিচাৰে, তেতিয়া তাক ষ্ট্ৰেটেজিক ভিক্টিমহুড বোলা হয়।',
    'প্ৰকৃত ভুক্তভোগী আৰু কৌশলগতভাৱে নিৰ্যাতিত সজা ব্যক্তিৰ মাজৰ পাৰ্থক্য বুজি পোৱাটো অতি প্ৰয়োজনীয়।',
    [
      'দায়িত্ব ওলোটা কৰি আনক দোষী সজোৱা',
      'সহানুভূতিৰ অপব্যৱহাৰ কৰি দায়িত্বৰ পৰা হাত সৰা',
      'আৱেগৰ পৰিৱৰ্তে যুক্তি আৰু তথ্যৰ ওপৰত ভিত্তি কৰি স্পষ্ট সীমা ৰাখক',
    ]
  ),
};
