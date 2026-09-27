import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Emotions & Regulation Track
 * Topic: Cognitive Reappraisal: Changing the Narrative to Calm the Brain
 * Category: Emotions & Regulation (emotions)
 * 
 * Academic Grounding:
 * - Gross (1998): The Emerging Field of Emotion Regulation: An Integrative Review
 * - Gross (2002): Emotion Regulation: Affective, Cognitive, and Social Consequences
 * - Ochsner & Gross (2005): The Cognitive Control of Emotion (Prefrontal-Amygdala Circuitry)
 * - Beck (1979): Cognitive Therapy of Depression
 */

export const TOPIC_COGNITIVE_REAPPRAISAL_EN: MindTopicDetail = {
  id: 'cognitive_reappraisal',
  categoryId: 'emotions',
  slug: 'cognitive-reappraisal',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 2,
  viewCount: 5740,
  shareCount: 480,
  bookmarkCount: 1040,
  title: 'Cognitive Reappraisal: Changing the Story to Calm the Nervous System',
  subtitle: 'The neuroscience of antecedent emotion regulation: how reframing interpretation down-regulates amygdala reactivity.',
  shortDescription: 'An evidence-based emotion regulation strategy that involves reinterpreting the meaning of an event to alter its emotional trajectory.',
  oneLineExplanation: 'In simple terms: Changing how you interpret a situation so your body doesn\'t trigger an emergency response.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'When someone cuts you off in traffic, your instinct is rage: "They disrespected me!" Your heart races and cortisol surges. But if you discover they are rushing an injured child to the emergency room, your rage evaporates into empathy. The external event did not change; your interpretation changed. Cognitive Reappraisal is the deliberate, clinical skill of catching your catastrophic initial interpretation and reframing it before it floods your body with chronic stress.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Developed by Stanford psychologist Dr. James Gross in his Process Model of Emotion Regulation, Cognitive Reappraisal is an "antecedent-focused" strategy. It occurs early in the emotion-generative process, before emotional responses have fully activated the autonomic nervous system. By consciously altering the semantic meaning of an event, the ventromedial prefrontal cortex (vmPFC) sends inhibitory signals to the amygdala, dampening the physiological stress response at its neurochemical root.',
  summary60s: 'In contrast to Cognitive Reappraisal, most people resort to "Expressive Suppression"—bottling up feelings, putting on a fake smile, and pretending not to be angry. Gross’s fMRI research proved that emotional suppression is biologically toxic: while the outer face looks calm, cardiovascular blood pressure spikes, memory recall degrades, and cortisol remains elevated for hours. Reappraisal, however, completely defuses both the subjective pain AND the physiological cardiovascular spike without suppressing reality.',

  quickTakeaways: [
    'Antecedent vs. Reaction: Reappraisal intercepts emotion at the meaning stage; suppression tries to strangle emotion after it has exploded',
    'Suppression is Biologically Costly: Swallowing emotions spikes blood pressure and impairs cognitive memory',
    'Not Toxic Positivity: Reappraisal does not mean pretending bad things are good; it means finding an objective, empowering framing',
    'The 3 Alternative Interpretations Rule: Whenever an event upsets you, force your brain to generate three alternative, non-malicious explanations',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Emotions are not direct reflections of reality; they are interpretations of reality mediated by our cognitive appraisals. Richard Lazarus demonstrated that stress occurs only when an event is appraised as taxing or exceeding one\'s coping resources. Changing the appraisal alters the emotion automatically.',
  evolutionaryMechanism: 'Rapid threat-detection favored assuming the worst ("That rustle in the bushes is a predator"). In modern life, treating every email or social slight as a lethal predator causes chronic inflammation and burnout.',

  // SECTION E — HOW DOES IT WORK?
  howItWorks: 'The brain uses the cognitive sequence: Situation -> Attention -> Appraisal -> Response. Reappraisal intervenes at the Appraisal junction. (1) Challenge: Viewing a public presentation as an exciting opportunity rather than a threat; (2) Compassion: Viewing a rude cashier as someone carrying severe grief rather than a personal enemy; (3) Education: Viewing a failed project as high-yield diagnostic data rather than personal incompetence.',
  whereYouEncounterIt: 'Workplace criticism, delayed flight cancellations, relationship conflicts, parenting moments with crying toddlers, and high-stakes athletic competitions.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Suppression vs. Cognitive Reappraisal',
    description: 'The internal and external consequences of how we manage difficult feelings.',
    analogySideA: {
      label: 'Expressive Suppression (Bottling Up)',
      detail: 'Swallows anger; smiles outwardly while blood pressure spikes to 140/90; experiences rumination for 3 days; higher risk of burnout.',
    },
    analogySideB: {
      label: 'Cognitive Reappraisal (Reframing)',
      detail: 'Reinterprets the intent: "Their anger is about their own anxiety, not my worth." Amygdala calms within 90 seconds; blood pressure remains stable.',
    },
  },

  researchSummary: 'Gross (2002) and Ochsner & Gross (2005) conducted neuroimaging studies showing that participants instructed to reappraise disturbing images showed marked increases in prefrontal activation and significant decreases in amygdala activity and negative affect. In contrast, participants told to suppress visible emotion showed zero reduction in amygdala activation alongside heightened sympathetic nervous system stress.',
  limitationsAndControversies: 'Cognitive reappraisal is inappropriate and dangerous in contexts of active domestic abuse, ongoing systemic exploitation, or physical danger. Reframing an abuser\'s violence as "a sign of their deep pain" traps victims in abusive environments. Reappraisal should regulate internal distress, not excuse external harm.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Automatically assuming that an unreturned text message or missed call means the other person hates or disrespects you',
    'Bottling up fury until you explode over a trivial annoyance weeks later',
    'Using catastrophic language ("This completely ruins my entire career", "Everyone is out to get me")',
    'Feeling physical tension in your jaw, neck, or stomach over events that haven\'t even happened yet',
    'Refusing to consider that someone\'s harsh tone might be caused by personal exhaustion rather than malice',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_reappraise_01',
      scenarioType: 'indian_context',
      title: 'The Critical Mother-in-Law Comment',
      vignette: 'Pooja has spent four hours preparing dinner for an extended family festival in Lucknow. As everyone sits down, her mother-in-law takes one bite of the dal and announces across the table: "The salt is a bit low today, and the tadka could have used more hing." Pooja feels her face burn with shame and rage. Her immediate internal narrative screams: "She hates me. She deliberately humiliated me in front of all the relatives to prove I am an incompetent bahu." Pooja wants to throw her spoon down and leave the dining table.',
      breakdownAnalysis: 'Pooja’s autonomic nervous system is reacting to a catastrophic appraisal ("She hates me and wants to destroy me"). This interpretation generates intense shame and defensive hostility.',
      recommendedAction: 'Pooja pauses and executes cognitive reappraisal: "My mother-in-law has cooked for 40 years; giving unsolicited food critiques is her automatic conversational habit with everyone, including her own children. Her comment is about her attachment to her spice preferences, not a verdict on my human worth." Pooja breathes, smiles, and calmly passes the salt shaker: "Here is the salt, Mummy ji, please adjust as you like." The crisis dissolves without an emotional explosion.',
    },
  ],

  examples: [
    {
      id: 'ex_reappraise_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The Harsh Code Review',
      description: 'A developer receives 15 blunt comment threads on their pull request. Rather than appraising it as "My team thinks I am stupid," they reappraise it as: "These 15 comments are a free, high-speed masterclass in distributed systems architecture."',
      takeaway: 'Reframing scrutiny from personal insult to diagnostic feedback turns pain into professional acceleration.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'To build the cognitive reappraisal habit, deploy the "Three Lenses Protocol": (1) The Reverse Lens: "What is the other person feeling, and what invisible battle might they be fighting?"; (2) The Long Lens: "How will this situation matter six months from today?"; (3) The Wide Lens: "What can I learn from this obstacle that will make me sharper tomorrow?"',
  psychologicalDefenses: [
    'Catch the Catastrophe: Notice words like "always", "never", "ruined", and replace them with specific, neutral descriptors',
    'The 90-Second Rule: Neurochemist Jill Bolte Taylor proved the chemical flush of emotion lasts only 90 seconds; allow the adrenaline wave to pass before choosing your narrative',
    'De-personalize the Incident: Treat other people\'s bad behavior as a weather event (rain, storm) rather than a personal attack against your dignity',
    'Separate Fact from Story: Fact: "The flight is delayed 2 hours." Story: "The universe is punishing me and my vacation is ruined."',
  ],

  commonMisconceptions: [
    {
      misconception: 'Cognitive reappraisal is just "positive thinking" or lying to yourself.',
      reality: 'Positive thinking is often delusional denial ("Everything is great!"). Reappraisal is objective realism ("This is difficult and frustrating, but it is manageable and I have options").',
    },
  ],

  reflectionPrompt: 'Think of a recent situation that made you furious. If you were forced to explain the other person\'s behavior using only compassion and exhaustion, how would you rewrite the story?',

  interactiveScenario: {
    id: 'interactive_reappraise_01',
    topicId: 'cognitive_reappraisal',
    scenarioTitle: 'The Cancelled Client Contract',
    scenarioDescription: 'After 3 months of hard work, your biggest freelance client sends an email: "Due to internal budget cuts, we are terminating our retainer agreement effective immediately." You feel panic and despair in your chest.',
    vignetteSourceType: 'workplace',
    options: [
      {
        id: 'opt_1',
        text: 'Tell yourself: "I am a total failure. I will never build a sustainable business and I should quit freelancing right now."',
        isCorrect: false,
        cognitiveTakeaway: 'Catastrophic appraisal that fuels depressive withdrawal and learned helplessness.',
      },
      {
        id: 'opt_2',
        text: 'Pretend you don\'t care, suppress all fear, smile at your family, and secretly drink alcohol to numb the anxiety.',
        isCorrect: false,
        cognitiveTakeaway: 'Expressive suppression that preserves physical symptoms and causes long-term psychological distress.',
      },
      {
        id: 'opt_3',
        text: 'Execute cognitive reappraisal: "This client termination is an economic reality of corporate budget cuts, not a reflection of my skills. This frees up 25 hours a week to pursue higher-paying enterprise clients with diversified risk."',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of cognitive reappraisal! You acknowledge the fact without emotional catastrophic distortion and pivot to constructive action.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_reappraise_01',
      questionType: 'multiple_choice',
      prompt: 'According to Dr. James Gross\'s emotion regulation research, how does Cognitive Reappraisal differ biologically from Expressive Suppression?',
      options: [
        { id: 'opt_a', text: 'Suppression is healthier because it prevents interpersonal conflict', isCorrect: false },
        { id: 'opt_b', text: 'Reappraisal down-regulates amygdala activation and calms cardiovascular stress; suppression leaves the amygdala active while blood pressure and cortisol rise', isCorrect: true, feedbackText: 'Correct! Neuroimaging confirms that reappraisal alters emotional physiology at the neural root, whereas suppression traps physiological stress inside.' },
        { id: 'opt_c', text: 'There is no biological difference between the two strategies', isCorrect: false },
      ],
      cognitiveTakeaway: 'Reappraisal transforms emotion at the cognitive inception; suppression merely hides external expression.',
    },
  ],

  references: [
    {
      citation: 'Gross, J. J. (2002). Emotion regulation: Affective, cognitive, and social consequences. Psychophysiology, 39(3), 281–291.',
      doiOrUrl: 'https://doi.org/10.1017/s0048577201393198',
      relevance: 'Foundational empirical paper comparing the physiological and cognitive outcomes of reappraisal versus suppression.',
      displayOrder: 1,
    },
    {
      citation: 'Ochsner, K. N., & Gross, J. J. (2005). The cognitive control of emotion. Trends in Cognitive Sciences, 9(5), 242–249.',
      doiOrUrl: 'https://doi.org/10.1016/j.tics.2005.03.010',
      relevance: 'Documents the prefrontal-amygdala neural circuitry governing cognitive reappraisal.',
      displayOrder: 2,
    },
  ],

  tags: ['Emotions', 'Emotion Regulation', 'Cognitive Reappraisal', 'Neuroscience', 'Stress Management'],
  relatedTopics: [
    { topicId: 'emotional_regulation', slug: 'emotional-regulation', title: 'Emotional Regulation', relationshipType: 'amplified_by' },
    { topicId: 'healthy_boundaries', slug: 'healthy-boundaries', title: 'Healthy Boundaries', relationshipType: 'general_related' },
  ],
  seoTitle: 'Cognitive Reappraisal: Changing the Narrative to Regulate Emotion | Mentalab Mind',
  seoDescription: 'Master the science of Cognitive Reappraisal. Learn how reframing interpretation down-regulates amygdala stress and why suppression harms your health.',
  canonicalUrl: '/mind/emotions-and-regulation/cognitive-reappraisal',
  ogImageUrl: '/images/mind/cognitive-reappraisal.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Cognitive reappraisal involves modifying the cognitive appraisal of an emotional stimulus to modulate its neurochemical and affective trajectory.',
};

export const TOPIC_COGNITIVE_REAPPRAISAL_HINGLISH: MindTopicDetail = {
  ...TOPIC_COGNITIVE_REAPPRAISAL_EN,
  title: 'Cognitive Reappraisal: Soch Badalkar Gussa Aur Stress Control Karne Ka Science',
  subtitle: 'James Gross ka Process Model: Gusse ko dabane ke bajaye dimaag ki kahani ko reframe karna seekhein.',
  shortDescription: 'Ek aisi scientific technique jisme kisi ghatna ki interpretation ko badal kar hum apne dimaag aur shareer ke stress response ko shant karte hain.',
  oneLineExplanation: 'Simple shabdon me: Baat ka matlab badal dena taaki aapka shareer emergency mode me na jaye.',

  summary30s: 'Agar traffic me koi aapse aage car ghusa de, toh turant gussa aata hai: "Isne meri beizzati ki!" Dil tezi se dhadakta hai. Lekin agar pata chale ki wo kisi bimar bachhe ko hospital le ja raha hai, toh gussa turant sympathy me badal jata hai. Ghatna wahi thi, sirf aapki soch badli. Cognitive Reappraisal isi power ko kehte hain—kisi incident par overreact karne ke bajaye usko ek realistic aur constructive tareeqe se dekhna.',
  coreConcept: 'Stanford ke Dr. James Gross ke mutabiq emotion regulation do tareeqe se hoti hai: (1) Reappraisal—shuruat me hi baat ka meaning badal dena; (2) Suppression—gusse ko andar dabana aur bahar jhoothi smile dikhana. Suppression shareer ke liye zeher hai kyunki blood pressure badhta hai aur dimaag me cortisol jama hota rehta hai.',
  summary60s: 'Neuroscience batati hai ki jab aap kisi cheez ko reframe karte hain, toh aapka Prefrontal Cortex (thinking brain) aapke Amygdala (emotional alarm) ko shant hone ka signal bhejta hai. Reappraisal toxic positivity nahi hai; yeh reality ko accept karte huye ek aisa angle dhundna hai jisse aapka blood pressure na badhe aur aap sensible decision le sakein.',

  quickTakeaways: [
    'Reappraisal vs. Suppression: Gussa dabana shareer ke liye nuksaandeh hai; meaning badalna asali ilaaj hai',
    'Suppression ka nuksaan: Andar gussa dabane se blood pressure badhta hai aur memory weak hoti hai',
    'Toxic Positivity nahi hai: Buraai ko achha mat boliye, bas usko ek manageable perspective se dekhiye',
    'Teen Nazariye Rule: Jab bhi gussa aaye, 3 alternative explanations sochiye ki samne wale ne aisa kyu kiya hoga',
  ],

  whyItHappens: 'Hamare emotions kisi ghatna se nahi, balki us ghatna ke baare me hum jo kahani banate hain usse paida hote hain.',
  evolutionaryMechanism: 'Jungli janwaron ke zamaane me har cheez ko sabse bura khatra manna survival ke liye zaroori tha.',

  howItWorks: 'Office me boss ne feedback diya. Pehla thought: "Boss mujhse nafrat karta hai." Reappraisal thought: "Boss chahta hai ki main is project ko bina galti ke complete karun."',
  howToRespond: '90-Second Rule use kijiye. Adrenaline rush ko shant hone ke liye 90 second chahiye hote hain. Uske baad puchiye: "Kya koi doosra reason ho sakta hai jisse samne wale ne yeh bola?"',

  reflectionPrompt: 'Aapne aakhri baar kab kisi ki baat par bohot gussa kiya aur baad me pata chala ki unka wo matlab hi nahi tha?',
  seoTitle: 'Cognitive Reappraisal Kya Hai? Emotions Regulate Karne Ki Science | Mentalab Mind',
  seoDescription: 'Janiye kaise cognitive reappraisal se gusse aur anxiety ko control kiya jata hai. James Gross Process Model aur neuroscience-backed emotion control.',
  canonicalUrl: '/mind/emotions-and-regulation/cognitive-reappraisal',
};

function createLocalizedReappraisalRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_COGNITIVE_REAPPRAISAL_EN,
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

export const TOPIC_COGNITIVE_REAPPRAISAL: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_COGNITIVE_REAPPRAISAL_EN,
  hinglish: TOPIC_COGNITIVE_REAPPRAISAL_HINGLISH,
  hi: createLocalizedReappraisalRecord(
    'hi',
    'संज्ञानात्मक पुनर्मूल्यांकन (Cognitive Reappraisal): दृष्टिकोण बदलकर भावनाओं का वैज्ञानिक नियमन',
    'जेम्स ग्रॉस का प्रोसेस मॉडल: भावनाओं को दबाने के बजाय घटना के अर्थ को बदलना सीखें।',
    'सरल शब्दों में: किसी स्थिति को देखने का नज़रिया बदलना ताकि शरीर में तनाव का अलार्म न बजे।',
    'संज्ञानात्मक पुनर्मूल्यांकन तब होता है जब हम किसी तनावपूर्ण घटना की व्याख्या को सचेत रूप से बदलकर उसके भावनात्मक प्रभाव को शांत करते हैं।',
    'ग्रॉस (2002) के अनुसार, भावनाओं को दबाने से रक्तचाप बढ़ता है, जबकि पुनर्मूल्यांकन मस्तिष्क के तनाव केंद्रों को शांत करता है।',
    [
      'पुनर्मूल्यांकन बनाम दमन: भावना को दबाना हानिकारक है, व्याख्या बदलना ही वास्तविक समाधान है',
      'दमन की शारीरिक हानि: भावनाएं दबाने से रक्तचाप और तनाव हार्मोन बढ़ते हैं',
      'यथार्थवादी दृष्टिकोण: यह अंधाधुंध सकारात्मकता नहीं, बल्कि तर्कसंगत समझ है',
      'तीन दृष्टिकोण का नियम: हर अप्रिय घटना के पीछे तीन वैकल्पिक कारण सोचने का अभ्यास करें',
    ]
  ),
  gu: createLocalizedReappraisalRecord(
    'gu',
    'કોગ્નિટિવ રિએપ્રાઇઝલ: દ્રષ્ટિકોણ બદલીને લાગણીઓ પર કાબૂ મેળવવાની કળા',
    'લાગણીઓને દબાવવાને બદલે પરિસ્થિતિનો અર્થ બદલીને મગજને શાંત કરવાની વૈજ્ઞાનિક રીત.',
    'સરળ શબ્દોમાં: વિચારવાની રીત બદલવી જેથી શરીરમાં તણાવ પેદા ન થાય.',
    'જ્યારે આપણે કોઈ નકારાત્મક ઘટનાને નવી રીતે સમજીએ છીએ, ત્યારે ગુસ્સો આપોઆપ શાંત થઈ જાય છે.',
    'લાગણીઓ દબાવવાને બદલે સકારાત્મક રીતે સમજવી એ જ સાચી કળા છે.',
    ['વિચાર બદલો', 'તણાવ મુક્ત થાઓ', 'શાંતિ જાળવો']
  ),
  mr: createLocalizedReappraisalRecord(
    'mr',
    'कॉग्निटिव्ह रिॲप्रायझल: दृष्टिकोन बदलून भावनांचे नियमन करण्याचे शास्त्र',
    'भावना दाबण्याऐवजी घटनेचा अर्थ बदलून मन शांत करण्याची वैज्ञानिक पद्धत.',
    'सोप्या भाषेत: विचार करण्याची पद्धत बदलणे जेणेकरून शरीरावर ताण येणार नाही.',
    'जेम्स ग्रॉस यांच्या मते, भावना दाबल्याने रक्तदाब वाढतो, पण अर्थ बदलल्याने मेंदू शांत होतो.',
    'प्रत्येक प्रसंगाकडे शांतपणे आणि वस्तुनिष्ठपणे पाहणे आवश्यक आहे.',
    ['दृष्टिकोन बदला', 'भावनांचे नियमन करा', 'आरोग्य जपा']
  ),
  bn: createLocalizedReappraisalRecord(
    'bn',
    'কগনিটিভ রিঅ্যাপ্রাইজাল: দৃষ্টিভঙ্গি বদলে আবেগ নিয়ন্ত্রণের বিজ্ঞান',
    'আবেগ চেপে রাখার বদলে পরিস্থিতির অর্থ পরিবর্তনের মাধ্যমে মন শান্ত রাখার কৌশল।',
    'সহজ কথায়: ভাবনার ধরন বদলে ফেলা যাতে মানসিক চাপ তৈরি না হয়।',
    'পরিস্থিতির নতুন ব্যাখ্যা তৈরি করলে রাগ ও হতাশা দ্রুত প্রশমিত হয়।',
    'আবেগ অবদমন স্বাস্থ্যের ক্ষতি করে; সঠিক মূল্যায়ন শান্তি আনে।',
    ['দৃষ্টিভঙ্গি বদলান', 'চাপ কমান', 'সুস্থ থাকুন']
  ),
  ta: createLocalizedReappraisalRecord(
    'ta',
    'அறிவாற்றல் மறுமதிப்பீடு: பார்வையை மாற்றி உணர்ச்சிகளைக் கட்டுப்படுத்தும் அறிவியல்',
    'உணர்ச்சிகளை அடக்குவதற்குப் பதிலாக நிகழ்வின் பொருளை மாற்றி மனதை அமைதிப்படுத்துங்கள்.',
    'எளிய சொற்களில்: மன அழுத்தம் ஏற்படாதவாறு ஒரு சூழ்நிலையைப் பார்க்கும் பார்வையை மாற்றுவது.',
    'நிலைமையின் பொருளை மாற்றியமைப்பது மூளையின் பதற்றத்தைக் குறைக்கிறது.',
    'உணர்வுகளை அடக்காமல் சரியான முறையில் நிர்வகிக்க வேண்டும்.',
    ['பார்வையை மாற்றுங்கள்', 'பதற்றத்தைக் குறையுங்கள்', 'அமைதி காக்கவும்']
  ),
  te: createLocalizedReappraisalRecord(
    'te',
    'కాగ్నిటివ్ రీఅప్రైజల్: ఆలోచనా విధానాన్ని మార్చి భావోద్వేగాలను నియంత్రించే విజ్ఞానం',
    'భావోద్వేగాలను అణచివేయకుండా పరిస్థితి అర్ధాన్ని మార్చడం ద్వారా మనస్సును ప్రశాంతపరుచుకోండి.',
    'సులభమైన మాటల్లో: శరీరంలో ఒత్తిడి రాకుండా సంఘటనను చూసే కోణాన్ని మార్చడం.',
    'విషయాన్ని చూసే కోణం మారితే కోపం, ఆందోళన తగ్గిపోతాయి.',
    'అణచివేత కంటే పునఃపరిశీలనే శ్రేయస్కరం.',
    ['దృక్కోణాన్ని మార్చండి', 'ఒత్తిడిని జయించండి', 'మనశ్శాంతి పొందండి']
  ),
  kn: createLocalizedReappraisalRecord(
    'kn',
    'ಕಾಗ್ನಿಟಿವ್ ರಿಅಪ್ರೈಸಲ್: ದೃಷ್ಟಿಕೋನ ಬದಲಿಸಿ ಭಾವನೆಗಳನ್ನು ನಿಯಂತ್ರಿಸುವ ವಿಜ್ಞಾನ',
    'ಭಾವನೆಗಳನ್ನು ಹತ್ತಿಕ್ಕುವ ಬದಲು ಸನ್ನಿವೇಶದ ಅರ್ಥವನ್ನು ಬದಲಾಯಿಸಿ ಮನಸ್ಸನ್ನು ಶಾಂತಗೊಳಿಸಿ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ದೇಹದಲ್ಲಿ ಒತ್ತಡ ಉಂಟಾಗದಂತೆ ಆಲೋಚನೆಯ ರೀತಿಯನ್ನು ಬದಲಿಸುವುದು.',
    'ದೃಷ್ಟಿಕೋನ ಬದಲಾದಾಗ ಕೋಪ ಮತ್ತು ಆತಂಕ ತಾನಾಗಿಯೇ ಕಡಿಮೆಯಾಗುತ್ತದೆ.',
    'ಭಾವನೆಗಳ ಸಕಾರಾತ್ಮಕ ನಿರ್ವಹಣೆಯೇ ಉತ್ತಮ ಆರೋಗ್ಯಕ್ಕೆ ದಾರಿ.',
    ['ದೃಷ್ಟಿಕೋನ ಬದಲಿಸಿ', 'ಒತ್ತಡ ನಿಯಂತ್ರಿಸಿ', 'ಶಾಂತರಾಗಿರಿ']
  ),
  ml: createLocalizedReappraisalRecord(
    'ml',
    'കോഗ്നിറ്റീവ് റീഅപ്രൈസൽ: വീക്ഷണം മാറ്റി വികാരങ്ങളെ നിയന്ത്രിക്കുന്ന ശാസ്ത്രം',
    'വികാരങ്ങൾ അടിച്ചമർത്താതെ സാഹചര്യത്തെ പുനർവ്യാഖ്യാനിച്ച് മനസ്സിനെ ശാന്തമാക്കുക.',
    'ലളിതമായി പറഞ്ഞാൽ: ശരീരത്തിൽ സമ്മർദ്ദം ഉണ്ടാകാത്ത രീതിയിൽ ചിന്താഗതി മാറ്റുക.',
    'വികാരങ്ങൾ അടിച്ചമർത്തുന്നത് ആരോഗ്യത്തിന് ഹാനികരമാണ്; പുനർചിന്ത ശാന്തി നൽകുന്നു.',
    'ശരിയായ ചിന്ത മനസ്സിന് ബലം നൽകുന്നു.',
    ['വീക്ഷണം മാറ്റുക', 'സമ്മർദ്ദം ലഘൂകരിക്കുക', 'ആരോഗ്യം സംരക്ഷിക്കുക']
  ),
  pa: createLocalizedReappraisalRecord(
    'pa',
    'ਕੌਗਨਿਟਿਵ ਰੀਐਪਰੇਜ਼ਲ: ਨਜ਼ਰੀਆ ਬਦਲ ਕੇ ਜਜ਼ਬਾਤਾਂ ਨੂੰ ਕਾਬੂ ਕਰਨ ਦਾ ਵਿਗਿਆਨ',
    'ਜਜ਼ਬਾਤਾਂ ਨੂੰ ਦਬਾਉਣ ਦੀ ਬਜਾਏ ਹਾਲਾਤਾਂ ਦਾ ਅਰਥ ਬਦਲ ਕੇ ਮਨ ਨੂੰ ਸ਼ਾਂਤ ਕਰਨਾ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਸੋਚਣ ਦਾ ਤਰੀਕਾ ਬਦਲਣਾ ਤਾਂ ਜੋ ਸਰੀਰ ਵਿੱਚ ਤਣਾਅ ਪੈਦਾ ਨਾ ਹੋਵੇ।',
    'ਨਜ਼ਰੀਆ ਬਦਲਣ ਨਾਲ ਗੁੱਸਾ ਅਤੇ ਤਣਾਅ ਆਪਣੇ ਆਪ ਘੱਟ ਜਾਂਦੇ ਹਨ।',
    'ਜਜ਼ਬਾਤ ਦਬਾਉਣ ਦੀ ਬਜਾਏ ਉਨ੍ਹਾਂ ਨੂੰ ਸਹੀ ਦਿਸ਼ਾ ਦੇਣਾ ਹੀ ਅਕਲਮੰਦੀ ਹੈ।',
    ['ਨਜ਼ਰੀਆ ਬਦਲੋ', 'ਤਣਾਅ ਘਟਾਓ', 'ਸ਼ਾਂਤ ਰਹੋ']
  ),
  ur: createLocalizedReappraisalRecord(
    'ur',
    'شناختی نظر ثانی: زاویہ نگاہ بدل کر جذبات پر قابو پانے کا سائنسی طریقہ',
    'جذبات کو دبانے کے بجائے صورتحال کی تشریح بدل کر اعصاب پرسکون رکھنے کا فن۔',
    'آسان الفاظ میں: سوچنے کا انداز بدلنا تاکہ جسم پر دباؤ نہ آئے۔',
    'زاویہ نگاہ بدلنے سے غصہ اور مایوسی فوری طور پر ختم ہو جاتے ہیں۔',
    'جذبات کو دبانا صحت کے لیے نقصان دہ ہے، حقیقت کو نئے زاویے سے دیکھیں۔',
    ['زاویہ نگاہ بدلیں', 'تناؤ ختم کریں', 'پرسکون رہیں']
  ),
  or: createLocalizedReappraisalRecord(
    'or',
    'କଗ୍ନିଟିଭ୍ ରିଆପ୍ରାଇଜାଲ୍: ଦୃଷ୍ଟିକୋଣ ବଦଳାଇ ଭାବନାକୁ ନିୟନ୍ତ୍ରଣ କରିବାର ବିଜ୍ଞାନ',
    'ଭାବନାକୁ ଚାପି ରଖିବା ବଦଳରେ ପରିସ୍ଥିତିର ଅର୍ଥ ବଦଳାଇ ମନକୁ ଶାନ୍ତ ରଖିବା।',
    'ସହଜ ଭାଷାରେ: ଭାବିବାର ଶୈଳୀ ବଦଳାଇବା ଯାହାଦ୍ୱାରା ଶରୀରରେ ଚାପ ସୃଷ୍ଟି ହେବ ନାହିଁ।',
    'ଦୃଷ୍ଟିକୋଣ ବଦଳିଲେ କ୍ରୋଧ ଏବଂ ଚିନ୍ତା ଦୂର ହୁଏ।',
    'ସଠିକ୍ ମୂଲ୍ୟାୟନ ହିଁ ମାନସିକ ଶାନ୍ତିର ଚାବିକାଠି।',
    ['ଦୃଷ୍ଟିକୋଣ ବଦଳାନ୍ତୁ', 'ମାନସିକ ଚାପ ରୋକନ୍ତୁ', 'ଶାନ୍ତ ରୁହନ୍ତୁ']
  ),
  as: createLocalizedReappraisalRecord(
    'as',
    'কগনিটিভ ৰিএপ্ৰাইজেল: দৃষ্টিভংগী সলনি কৰি আৱেগ নিয়ন্ত্ৰণৰ বিজ্ঞান',
    'আৱেগ দমন কৰাৰ পৰিৱৰ্তে পৰিস্থিতিৰ অৰ্থ সলনি কৰি মন শান্ত কৰাৰ উপায়।',
    'সহজ কথাত: চিন্তাৰ ধৰণ সলনি কৰা যাতে মানসিক চাপৰ সৃষ্টি নহয়।',
    'দৃষ্টিভংগী সলনি হ’লে খং আৰু হতাশা নিজে নিজেই নাইকিয়া হয়।',
    'আৱেগ দমনৰ বিপৰীতে ইতিবাচক পুনৰ্বিচাৰেই প্ৰকৃত সমাধান।',
    ['দৃষ্টিভংগী সলনি কৰক', 'চাপ মুক্ত হওক', 'শান্তি বৰ্তাই ৰাখক']
  ),
};
