import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: The Dunning-Kruger Effect: Why Incompetence Breeds Overconfidence
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Kruger & Dunning (1999): Unskilled and Unaware of It
 * - Ehrlinger et al. (2008): Why the Unskilled Are Unaware: Further Explorations of Absent Insight
 * - Dunning (2011): The Dunning-Kruger Effect: On Being Ignorant of One's Own Ignorance
 */

export const TOPIC_DUNNING_KRUGER_EN: MindTopicDetail = {
  id: 'dunning_kruger_effect',
  categoryId: 'cognitive_biases',
  slug: 'dunning-kruger-effect',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 2,
  viewCount: 6840,
  shareCount: 580,
  bookmarkCount: 1140,
  title: 'The Dunning-Kruger Effect: Why Incompetence Breeds Overconfidence',
  subtitle: 'The dual burden of ignorance: why people with the least knowledge often hold the strongest convictions.',
  shortDescription: 'A cognitive bias whereby people with low ability at a task overestimate their competence, lacking the metacognitive skills to realize their errors.',
  oneLineExplanation: 'In simple terms: Knowing too little about a subject to realize how little you actually know.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'The Dunning-Kruger Effect is the psychological phenomenon where beginners or novices express supreme confidence in complex topics (finance, medicine, politics, programming), while genuine experts are plagued by nuance and self-doubt. The cruel paradox of ignorance is that the very skills required to produce correct answers are the exact same skills needed to recognize that an answer is wrong.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Discovered by Justin Kruger and David Dunning (1999) at Cornell University, this bias is rooted in a deficit of metacognitive ability—the capacity to evaluate one\'s own thinking. Incompetent individuals suffer a "dual burden": not only do they reach erroneous conclusions and make unfortunate choices, but their incompetence robs them of the metacognitive ability to realize it. Conversely, highly competent individuals assume that tasks they find easy are also easy for others, leading to false consensus bias.',
  summary60s: 'Imagine a person who reads two articles about cryptocurrency or geopolitics on social media and immediately begins lecturing seasoned economists on monetary policy. When challenged, they do not feel humble; they feel confident that mainstream experts are blind. Because they do not know what they do not know, their mental model of the subject is deceptively tiny and neat. As one actually masters a field, the vastness of unexplored knowledge becomes visible, causing confidence to temporarily plummet before slowly rebuilding.',

  quickTakeaways: [
    'The Dual Burden: Lack of knowledge prevents you from realizing you lack knowledge',
    'The "Mount Stupid" Phenomenon: Novice learning curves produce a sharp, dangerous spike in unearned confidence',
    'Expert Impostor Syndrome: As competence increases, experts realize how complex reality is and often underestimate their relative superiority',
    'Metacognitive Calibration: The true cure for Dunning-Kruger is rigorous objective testing, peer review, and seeking disconfirming evidence',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Deficit in metacognitive monitoring. The brain naturally loathes information voids. When we learn 5% of a subject, our pattern-matching neural circuits construct an illusion of completeness. We mistake familiarity with jargon for deep structural comprehension.',
  evolutionaryMechanism: 'Decisiveness and supreme confidence were socially advantageous in ancestral tribes. Projecting absolute certainty attracted followers, deterred competitors, and expedited group action during crises, even when the underlying strategy was flawed.',

  // SECTION E — HOW DOES IT WORK?
  howItWorks: 'It follows the classic knowledge-confidence trajectory: (1) Zero Knowledge: Low confidence; (2) The Beginner Spike: Learning basic concepts produces inflated confidence; (3) The Valley of Despair: Deeper study reveals infinite complexity, crashing confidence; (4) The Slope of Enlightenment: Gradual, grounded mastery brings calm, calibrated confidence.',
  whereYouEncounterIt: 'Internet debate threads, novice retail stock traders, armchair medical experts diagnosing themselves on search engines, corporate leadership meetings, and driving ability surveys (where 93% of drivers rate themselves "above average").',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Novice Confidence vs. Expert Humility',
    description: 'How subjective certainty changes as real competence develops.',
    analogySideA: {
      label: 'The Novice (Beginner\'s Illusion)',
      detail: '"This topic is actually very simple and straightforward. Anyone who disagrees just lacks common sense."',
    },
    analogySideB: {
      label: 'The Expert (Calibrated Realism)',
      detail: '"The data shows strong correlations in condition X, but fails under boundary Y. More longitudinal research is required before drawing causal claims."',
    },
  },

  researchSummary: 'In Kruger & Dunning\'s original 1999 study, Cornell undergraduate students were tested on humor, grammar, and logical reasoning. Participants scoring in the bottom 12th percentile grossly overestimated their performance, estimating they were in the 62nd percentile. When trained in logic, their objective scores rose and their subjective self-estimates dropped to realistic levels.',
  limitationsAndControversies: 'Recent statistical critiques (e.g., Nuhfer et al., 2016) argue that some aspects of the Dunning-Kruger curve represent "regression toward the mean" and statistical noise. However, the core psychological reality—that poor performers struggle to accurately calibrate their deficits without external feedback—remains deeply validated across educational psychology.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Feeling absolute, black-and-white certainty about an extraordinarily complex topic after reading one book or watching three videos',
    'Dismissing consensus conclusions of lifelong researchers as "obvious foolishness" without having read their methodologies',
    'Inability to identify any personal blind spots or limitations in a domain where you actively participate',
    'Giving unsolicited advice to professionals who have decades of specialized domain experience',
    'Experiencing intense anger or mockery when someone introduces nuances that contradict your simple framework',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_dk_01',
      scenarioType: 'indian_context',
      title: 'The WhatsApp Medical Consultant Relative',
      vignette: 'During a family dinner in Delhi, Uncle Suresh begins lecturing his niece—a resident doctor in cardiology—about how chronic hypertension can be cured in 7 days by drinking boiled neem water and holding magnets. When his niece politely explains vascular resistance and renal sodium regulation, Suresh scoffs: "You young doctors are brainwashed by Western pharma companies. A simple 3-minute WhatsApp video explained everything to me yesterday. Medical science is making things complicated for money."',
      breakdownAnalysis: 'Uncle Suresh suffers from severe Dunning-Kruger effect. His complete absence of physiological and biochemical knowledge prevents him from understanding why vascular resistance cannot be cured by magnets. His simplified mental model feels complete and superior to him.',
      recommendedAction: 'Do not debate complex biochemistry with someone on the beginner confidence peak. Offer a gentle calibration: "Uncle, cardiovascular biology involves thousands of cellular pathways. There are no 7-day cures for arterial stiffening, which is why clinical trials take years."',
    },
  ],

  examples: [
    {
      id: 'ex_dk_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'The 2-Week Stock Market Master',
      description: 'A novice trader buys two tech stocks during a roaring bull market, makes a 15% gain in 10 days, and immediately starts offering paid stock-tip channels claiming they have "cracked the algorithmic market code."',
      takeaway: 'Confusing a rising market tide with personal investing genius is the classic financial Dunning-Kruger trap.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'To protect yourself from the Dunning-Kruger effect, adopt the "Intellectual Humility Protocol." Whenever you form a strong opinion, actively seek out the smartest person who disagrees with you and read their strongest arguments (Steel-manning). Ask yourself: "What specific evidence would prove my conclusion wrong?"',
  psychologicalDefenses: [
    'The Feynman Technique: Try explaining the concept to a 10-year-old without using jargon; gaps in your understanding will expose themselves instantly',
    'Steel-manning the Opposition: Never dismiss a perspective until you can articulate it so well that its proponents say: "Yes, that is my view"',
    'Calibrated Objective Testing: Subject your knowledge to standardized benchmarks, exams, or blind peer review rather than self-assessed intuition',
    'The "Beginner\'s Mind" Habit: Assume there are at least three layers of nuance you have not yet discovered in every field you study',
  ],

  commonMisconceptions: [
    {
      misconception: 'The Dunning-Kruger effect only applies to unintelligent or foolish people.',
      reality: 'Everyone suffers from the Dunning-Kruger effect in domains outside their expertise. A brilliant software architect or neurosurgeon can be completely naive and arrogant about economics or nutrition.',
    },
  ],

  reflectionPrompt: 'In what area of your life do you feel 100% confident? Have you ever studied the literature of people who disagree with your premise?',

  interactiveScenario: {
    id: 'interactive_dk_01',
    topicId: 'dunning_kruger_effect',
    scenarioTitle: 'Calibrating Competence: The Weekend Fitness Guru',
    scenarioDescription: 'You started working out at a gym 3 weeks ago and read a popular fitness influencer\'s book on diet. A gym member with chronic lower-back disc herniation asks what exercises they should do. What is the most cognitively calibrated response?',
    vignetteSourceType: 'health',
    options: [
      {
        id: 'opt_1',
        text: 'Confidently prescribe a heavy deadlift and ketogenic diet protocol, telling them that doctors overcomplicate spine injuries and discipline cures everything.',
        isCorrect: false,
        cognitiveTakeaway: 'Dangerous Dunning-Kruger arrogance! You have zero training in orthopedic pathology and risk permanently paralyzing or injuring someone.',
      },
      {
        id: 'opt_2',
        text: 'Acknowledge your limited knowledge, explain that spinal pathology requires specialized clinical assessment, and advise them to consult a qualified physiotherapist or spine specialist.',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of intellectual humility! You recognize the boundary of your knowledge and direct the person to verified expertise.',
      },
      {
        id: 'opt_3',
        text: 'Tell them to stop exercising completely forever and give up on physical fitness.',
        isCorrect: false,
        cognitiveTakeaway: 'Uninformed fatalism that provides poor guidance without clinical justification.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_dk_01',
      questionType: 'multiple_choice',
      prompt: 'What did Justin Kruger and David Dunning identify as the "dual burden" of incompetence?',
      options: [
        { id: 'opt_a', text: 'Being poor at arithmetic and bad at reading comprehension simultaneously', isCorrect: false },
        { id: 'opt_b', text: 'Making erroneous choices, AND lacking the metacognitive capacity to realize that those choices are erroneous', isCorrect: true, feedbackText: 'Correct! The lack of domain knowledge simultaneously creates mistakes and blinds the individual to those mistakes.' },
        { id: 'opt_c', text: 'Facing high societal expectations while having low financial resources', isCorrect: false },
      ],
      cognitiveTakeaway: 'Metacognitive blindness is the foundational engine of the Dunning-Kruger effect.',
    },
  ],

  references: [
    {
      citation: 'Kruger, J., & Dunning, D. (1999). Unskilled and unaware of it: How difficulties in recognizing one\'s own incompetence lead to inflated self-assessments. Journal of Personality and Social Psychology, 77(6), 1121–1134.',
      doiOrUrl: 'https://doi.org/10.1037/0022-3514.77.6.1121',
      relevance: 'The foundational empirical paper establishing the Dunning-Kruger effect.',
      displayOrder: 1,
    },
  ],

  tags: ['Cognitive Biases', 'Dunning-Kruger', 'Metacognition', 'Overconfidence', 'Critical Thinking'],
  relatedTopics: [
    { topicId: 'confirmation_bias', slug: 'confirmation-bias', title: 'Confirmation Bias', relationshipType: 'amplified_by' },
    { topicId: 'first_principles_thinking', slug: 'first-principles-thinking', title: 'First-Principles Thinking', relationshipType: 'counteracted_by' },
  ],
  seoTitle: 'The Dunning-Kruger Effect: Why Incompetence Breeds Overconfidence | Mentalab Mind',
  seoDescription: 'Understand the Dunning-Kruger effect: why novices are confident, why experts experience self-doubt, and how to calibrate your metacognitive skills.',
  canonicalUrl: '/mind/cognitive-biases/dunning-kruger-effect',
  ogImageUrl: '/images/mind/dunning-kruger-effect.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'The Dunning-Kruger effect represents an epistemic cognitive deficit where lack of metacognitive competence prevents accurate self-assessment.',
};

export const TOPIC_DUNNING_KRUGER_HINGLISH: MindTopicDetail = {
  ...TOPIC_DUNNING_KRUGER_EN,
  title: 'Dunning-Kruger Effect: Kam Jaankari Wale Log Itne Overconfident Kyun Hote Hain?',
  subtitle: 'Adhura gyan khatarnak kyun hota hai: Novice ka overconfidence aur experts ka self-doubt.',
  shortDescription: 'Ek aisi cognitive bias jisme kisi topic par sabse kam knowledge rakhne wala insaan khud ko sabse bada expert samajhne lagta hai.',
  oneLineExplanation: 'Simple shabdon me: Itna kam janna ki yeh bhi samajh na aaye ki aap kitna kam jaante hain.',

  summary30s: 'Dunning-Kruger Effect wo psychological phenomenon hai jisme thodi si jaankari milte hi insaan ka confidence aasmaan par pahunch jata hai. Social media par do post padh kar log doctors aur economists ko lecture dene lagte hain. Iska sabse bada kaaran yeh hai ki kisi subject ki kamiya pehchanne ke liye bhi usi subject ki gehraai chahiye hoti hai jo shuru me nahi hoti.',
  coreConcept: 'Cornell University ke Kruger aur Dunning (1999) ne discover kiya ki kam knowledge wale logon ke sath ek "Dual Burden" hota hai: Pehla, wo galat conclusions nikalte hain; Doosra, unke paas wo dimaagi capability (metacognition) hi nahi hoti jisse wo apni galti dekh sakein.',
  summary60s: 'Jab koi naya skill seekhta hai, toh thodi hi der me "Mount Stupid" par pahunch jata hai jahan use lagta hai: "Yeh toh kitna simple hai!" Lekin jaise-jaise wo gehraai me jaata hai, use ehsaas hota hai ki samundar kitna gehra hai, aur uska confidence down ho jata hai (Valley of Despair). Real experts hamesha humble rehte hain kyunki unhe reality ki complexity pata hoti hai.',

  quickTakeaways: [
    'Dual Burden: Jaankari ki kami hi aapko yeh dekhne se rokti hai ki aap anjaan hain',
    'Mount Stupid: Shuruat me confidence ka fake spike aata hai jo bohot risky hota hai',
    'Experts ka Humble Rehna: Asli vidwan hamesha soch-samajhkar bolte hain kyunki unhe nuances pata hote hain',
    'Ilaaj: Apne dimaag ko hamesha test kijiye aur un logon ki baat suniye jo aapse disagree karte hain',
  ],

  whyItHappens: 'Dimaag ko information gaps pasand nahi hain. 5% facts aate hi dimaag ek simple kahani bana leta hai aur overconfidence create kar deta hai.',
  evolutionaryMechanism: 'Tribal leader banne ke liye 100% confidence dikhana zaroori tha, chahe information adhuri ho.',

  howItWorks: 'Yeh teen stages me kaam karta hai: (1) Beginner Illusion: Thodi si information milte hi lagta hai sab samajh aa gaya; (2) Metacognitive Deficit: Ye dekhne ke liye bhi ki aap kitna kam jaante hain, usi subject ki depth chahiye hoti hai jo abhi aapke paas nahi hai; (3) Arrogance Trap: Apne adhure framework ko final sach maan lena.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Novice Confidence vs Expert Humility',
    description: 'Knowledge aur confidence ka fasla: shuruat me fake aasmaan, gehraai me humble sach.',
    analogySideA: {
      label: 'Novice (Beginner\'s Illusion)',
      detail: '"Yeh topic toh bohot aasaan hai. Jo mujhse agree nahi karta usme common sense nahi hai."',
    },
    analogySideB: {
      label: 'Expert (Calibrated Realism)',
      detail: '"Data condition X me kaam karta hai par Y me fail hota hai. Kisi conclusion par pahunchne se pehle bohot longitudinal research chahiye."',
    },
  },

  examples: [
    {
      id: 'ex_dk_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: '2 Hafte Ka Stock Market Genius',
      description: 'Ek naye investor ne bull market me 2 stocks khareede aur 10 din me 15% profit banaya. Turant usne paid Telegram channel khol diya ki usne market ka algorithm crack kar liya hai.',
      takeaway: 'Bazaar ke tezi ke asar ko apna personal genius samajhna finance ka classic Dunning-Kruger trap hai.',
    },
  ],

  scenarios: [
    {
      id: 'scen_dk_01',
      scenarioType: 'indian_context',
      title: 'WhatsApp Medical Consultant Rishtedaar',
      narrativeContext: 'Family dinner par Uncle Suresh apni cardiologist doctor bhanji ko samjhane lage ki subah neem ka paani peene se aur haath me magnet pakadne se 7 din me blood pressure theek ho jata hai. Jab bhanji ne vascular biology samjhayi, toh Uncle gussa ho gaye: "Tum naye doctors ko pharma companies ne brainwash kar diya hai. Mujhe kal WhatsApp video me sab pata chal gaya."',
      biasInAction: 'Uncle Suresh ke paas physiology ki zero knowledge hai, isliye unka dimaag yeh samajh hi nahi sakta ki unki information kitni adhuri aur dangerous hai.',
      optimalResponse: 'Uncle se debate karne ke bajaye softly bolein: "Uncle, dil ki arteries me hazaron biological factors hote hain. Jo cheez 7 din me theek hone ka daawa kare, wo hamesha dangerous shortcut hoti hai."',
      vignette: 'Family dinner par Uncle Suresh apni cardiologist doctor bhanji ko samjhane lage ki subah neem ka paani peene se aur haath me magnet pakadne se 7 din me blood pressure theek ho jata hai. Jab bhanji ne vascular biology samjhayi, toh Uncle gussa ho gaye: "Tum naye doctors ko pharma companies ne brainwash kar diya hai. Mujhe kal WhatsApp video me sab pata chal gaya."',
      breakdownAnalysis: 'Uncle Suresh ke paas physiology ki zero knowledge hai, isliye unka dimaag yeh samajh hi nahi sakta ki unki information kitni adhuri aur dangerous hai.',
      recommendedAction: 'Uncle se debate karne ke bajaye softly bolein: "Uncle, dil ki arteries me hazaron biological factors hote hain. Jo cheez 7 din me theek hone ka daawa kare, wo hamesha dangerous shortcut hoti hai."',
    },
  ],

  howToRespond: 'Feynman Technique use kijiye. Kisi topic ko bina jargon ke ek 10 saal ke bachhe ko samjha kar dekhiye; aapki saari kamiya saamne aa jayengi.',
  psychologicalDefenses: [
    {
      title: 'Feynman Technique',
      instruction: 'Kisi bhi topic ko bina kisi technical jargon ke 10 saal ke bachhe ko samjha kar dekhein; jahan aap atkengay, wahan aapki knowledge gap saaf dikh jayegi.',
    },
    {
      title: 'Steel-manning The Opposition',
      instruction: 'Kisi viewpoint ko tab tak reject na karein jab tak aap use unke jitna achha articulate na kar sakein jo usme yakeen rakhte hain.',
    },
    {
      title: 'Objective Benchmark Testing',
      instruction: 'Apni kabiliyat ko apne subjective gumaan se nahi, balki standardized objective tests ya anonymous peer review se naapein.',
    },
    {
      title: 'Beginner\'s Mindset',
      instruction: 'Har subject me yeh maan kar chalein ki kam se kam 3 layers of complexity aisi hain jo aapko abhi tak pata hi nahi hain.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_dk_01',
      scenarioContext: 'Aapne gym jana shuru kiya hai 3 hafte pehle aur ek fitness influencer ki book padhi hai. Ek gym member jise slip-disc ki bimari hai, aapse poochta hai ki use kya workout karna chahiye. Kaunsa decision Dunning-Kruger effect se bachaata hai?',
      question: 'Kaunsa decision intellectual humility aur Dunning-Kruger se bachav dikhata hai?',
      prompt: 'Kaunsa decision intellectual humility aur Dunning-Kruger se bachav dikhata hai?',
      scenarioText: 'Aapne gym jana shuru kiya hai 3 hafte pehle aur ek fitness influencer ki book padhi hai. Ek gym member jise slip-disc ki bimari hai, aapse poochta hai ki use kya workout karna chahiye. Kaunsa decision Dunning-Kruger effect se bachaata hai?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Use 100kg deadlift karne ki advice dena aur kehna ki discipline se saari spine injuries theek ho jati hain.',
          explanation: 'Yeh classic beginner arrogance hai jo doosre insaan ki reedh ki haddi ko permanently damage kar sakti hai.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Pehle accept karna ki spine injuries ek complex medical subject hai, aur use kisi qualified physiotherapist ya spine specialist ke paas bhejna.',
          explanation: 'Sahi: Apni knowledge ki boundary pehchanna aur real medical expert ko refer karna hi intellectual maturity hai.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Use online search karke unverified exercises ka screenshot bhej dena.',
          explanation: 'Bina clinical training ke random exercise prescribe karna overconfidence ka hi roop hai.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Jab kisi subject me aap beginner hon, toh sabse bada gyan yeh jaanna hai ki kahan chup rehna hai aur expert ko aage karna hai.',
      difficulty: 'easy',
    },
  ],

  reflectionPrompt: 'Aisa kaunsa topic hai jisme aapko lagta hai ki aap sab jaante hain? Kya aapne kabhi kisi real domain expert ki book padhi hai?',
  seoTitle: 'Dunning Kruger Effect Kya Hai? Overconfidence Se Kaise Bachein | Mentalab Mind',
  seoDescription: 'Janiye kyu kam knowledge wale log sabse zyada confidence dikhate hain. Dunning-Kruger effect ki science aur intellectual humility ke tareeqe.',
  canonicalUrl: '/mind/cognitive-biases/dunning-kruger-effect',
};

function createLocalizedDKRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_DUNNING_KRUGER_EN,
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

export const TOPIC_DUNNING_KRUGER: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_DUNNING_KRUGER_EN,
  hinglish: TOPIC_DUNNING_KRUGER_HINGLISH,
  hi: createLocalizedDKRecord(
    'hi',
    'डनिंग-क्रूगर प्रभाव (Dunning-Kruger Effect): अज्ञानता से उपजा अत्यधिक आत्मविश्वास',
    'अल्पज्ञता का दोहरा बोझ: कम ज्ञान वाले लोग सबसे अधिक दृढ़ निश्चयी क्यों होते हैं।',
    'सरल शब्दों में: किसी विषय के बारे में इतना कम जानना कि यह भी समझ न आए कि आप कितना कम जानते हैं।',
    'डनिंग-क्रूगर प्रभाव तब होता है जब किसी क्षेत्र में अनुभवहीन व्यक्ति अपनी योग्यता का अत्यधिक मूल्यांकन करता है, क्योंकि उसमें अपनी कमियों को पहचानने की क्षमता ही नहीं होती।',
    'क्रूगर और डनिंग (1999) के अनुसार, अज्ञानता आत्मविश्वास को ज्ञान से कहीं अधिक जन्म देती है।',
    [
      'दोहरा बोझ: कम ज्ञान हमें अपनी अज्ञानता पहचानने से रोकता है',
      'शुरुआती आत्मविश्वास का भ्रम: थोड़ी जानकारी बड़ा भ्रम पैदा करती है',
      'विशेषज्ञों की विनम्रता: वास्तविक विद्वान ज्ञान की विशालता देखकर हमेशा विनम्र रहते हैं',
      'समाधान: निरंतर आत्म-मूल्यांकन और आलोचनात्मक सोच',
    ]
  ),
  gu: createLocalizedDKRecord(
    'gu',
    'ડનિંગ-ક્રુગર ઇફેક્ટ: અધૂરા જ્ઞાનથી પેદા થતો અતિ-આત્મવિશ્વાસ',
    'અલ્પજ્ઞાનનો બેવડો બોજ: ઓછી માહિતી ધરાવતા લોકો વધુ દાવો કેમ કરે છે.',
    'સરળ શબ્દોમાં: વિષયનું એટલું ઓછું જ્ઞાન હોવું કે પોતાની અજ્ઞાનતાનો પણ અહેસાસ ન થાય.',
    'ડનિંગ-ક્રુગર ઇફેક્ટ ઓછી આવડત ધરાવતી વ્યક્તિને પોતે નિષ્ણાત હોવાનો ખોટો વહેમ કરાવે છે.',
    'વિનમ્રતા કેળવીને સતત નવું શીખવું એ જ સાચી સમજદારી છે.',
    ['અહંકારથી બચો', 'વાસ્તવિકતા ઓળખો', 'શીખતા રહો']
  ),
  mr: createLocalizedDKRecord(
    'mr',
    'डनिंग-क्रुगर इफेक्ट: अज्ञानातून निर्माण होणारा अतिआत्मविश्वास',
    'अल्प ज्ञानाचा दुहेरी भार: कमी माहिती असलेले लोक स्वतःला तज्ज्ञ का समजतात.',
    'सोप्या भाषेत: एखाद्या विषयाबद्दल इतकी कमी माहिती असणे की स्वतःच्या अज्ञानाची जाणीवही न होणे.',
    'डनिंग आणि क्रुगर (1999) यांच्या मते, अज्ञान ज्ञानापेक्षा जास्त आत्मविश्वास निर्माण करते.',
    'सत्य जाणून घेण्यासाठी नेहमी खुल्या विचारांनी शिकत राहिले पाहिजे.',
    ['अतिआत्मविश्वास टाळा', 'आत्मपरीक्षण करा', 'ज्ञानाची खोली ओळखा']
  ),
  bn: createLocalizedDKRecord(
    'bn',
    'ডানিং-ক্রুগার প্রভাব: অজ্ঞতা থেকে সৃষ্ট অতিরিক্ত আত্মবিশ্বাস',
    'অল্পবিদ্যার ভয়াবহ রূপ: কম জ্ঞানের মানুষরা নিজেদের বিশেষজ্ঞ ভাবার রহস্য।',
    'সহজ কথায়: কোনো বিষয় সম্পর্কে এত কম জানা যে নিজের সীমাবদ্ধতাও উপলব্ধি না হওয়া।',
    'কম জানা মানুষের মধ্যে অতিরিক্ত আত্মবিশ্বাস তৈরি করে এই মনস্তাত্ত্বিক ভ্রান্তি।',
    'প্রকৃত জ্ঞান মানুষকে বিনয়ী করে তোলে।',
    ['অহংকার বর্জন করুন', 'সঠিক মূল্যায়ন করুন', 'নম্রতা অবলম্বন করুন']
  ),
  ta: createLocalizedDKRecord(
    'ta',
    'டன்னிங்-க்ரூகர் விளைவு: அறியாமையிலிருந்து பிறக்கும் அதீத தன்னம்பிக்கை',
    'அரைகுறை அறிவின் ஆபத்து: குறைந்த அறிவுள்ளவர்கள் அதிக உரிமை கோருவது ஏன்.',
    'எளிய சொற்களில்: ஒரு விஷயத்தைப் பற்றி மிகவும் குறைவாகத் தெரிந்திருப்பதால், நாம் எவ்வளவு குறைவாக அறிவோம் என்பதே தெரியாமல் இருப்பது.',
    'அனுபவமற்றவர்கள் தங்களை நிபுணர்களாகக் கருதிக்கொள்ளும் அறிவாற்றல் குறைபாடு.',
    'தொடர்ந்து கற்றுக்கொள்வதே மெய்யான ஞானம்.',
    ['அறியாமையை உணருங்கள்', 'அடக்கத்துடன் இருங்கள்', 'கற்றலைத் தொடருங்கள்']
  ),
  te: createLocalizedDKRecord(
    'te',
    'డనింగ్-క్రూగర్ ఎఫెక్ట్: అజ్ఞానం నుండి పుట్టే మితిమీరిన ఆత్మవిశ్వాసం',
    'అల్పజ్ఞానపు ప్రమాదం: తక్కువ తెలిసిన వారు ఎక్కువ మాట్లాడే రహస్యం.',
    'సులభమైన మాటల్లో: ఒక విషయం గురించి ఎంత తక్కువ తెలుసో కూడా తెలియని స్థితి.',
    'పరిజ్ఞానం తక్కువగా ఉన్నవారు తమను తాము మేధావులుగా భావించే మానసిక భ్రమ.',
    'వినయం మరియు నిరంతర అభ్యాసమే దీనికి పరిష్కారం.',
    ['మిడిమిడి జ్ఞానం వద్దు', 'వినయంగా నేర్చుకోండి', 'పరిజ్ఞానం పెంచుకోండి']
  ),
  kn: createLocalizedDKRecord(
    'kn',
    'ಡನ್ನಿಂಗ್-ಕ್ರೂಗರ್ ಎಫೆಕ್ಟ್: ಅಜ್ಞಾನದಿಂದ ಹುಟ್ಟುವ ಅತಿಯಾದ ಆತ್ಮವಿಶ್ವಾಸ',
    'ಅರೆಬರೆ ಜ್ಞಾನದ ಅಪಾಯ: ಕಡಿಮೆ ಜ್ಞಾನವಿರುವವರು ಹೆಚ್ಚು ಹೆಮ್ಮೆಪಡುವುದೇಕೆ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಒಂದು ವಿಷಯದ ಬಗ್ಗೆ ಎಷ್ಟು ಕಡಿಮೆ ತಿಳಿದಿದೆ ಎಂಬುದು ತಿಳಿಯದಿರುವ ಸ್ಥಿತಿ.',
    'ಕಡಿಮೆ ಜ್ಞಾನವಿರುವವರು ತಮ್ಮನ್ನು ತಾವು ಪರಿಣಿತರೆಂದು ಭಾವಿಸಿಕೊಳ್ಳುವ ಮಾನಸಿಕ ಭ್ರಮೆಯಿದು.',
    'ನಿರಂತರ ಕಲಿಕೆಯೇ ಜ್ಞಾನದ ಲಕ್ಷಣ.',
    ['ಅತಿಯಾದ ನಂಬಿಕೆ ತಪ್ಪು', 'ಕಲಿಕೆ ಮುಖ್ಯ', 'ವಿನಮ್ರರಾಗಿರಿ']
  ),
  ml: createLocalizedDKRecord(
    'ml',
    'ഡണ്ണിംഗ്-ക്രൂഗർ ഇഫക്റ്റ്: അജ്ഞതയിൽ നിന്ന് ഉണ്ടാകുന്ന അമിത ആത്മവിശ്വാസം',
    'അല്പജ്ഞാനത്തിന്റെ ആപത്ത്: കുറഞ്ഞ അറിവുള്ളവർ സ്വയം വിദഗ്ദ്ധരാണെന്ന് കരുതുന്നത് എന്തുകൊണ്ട്.',
    'ലളിതമായി പറഞ്ഞാൽ: ഒരു വിഷയത്തെക്കുറിച്ച് എത്ര കുറച്ചാണ് അറിയാവുന്നത് എന്ന് പോലും തിരിച്ചറിയാത്ത അവസ്ഥ.',
    'അറിവില്ലായ്മ അമിത ആത്മവിശ്വാസത്തിന് കാരണമാകുന്ന പ്രതിഭാസമാണിത്.',
    'വിനയത്തോടെ കാര്യങ്ങൾ മനസ്സിലാക്കുക.',
    ['അറിവില്ലായ്മ തിരിച്ചറിയുക', 'വിനയം പ്രധാനം', 'പഠനം തുടരുക']
  ),
  pa: createLocalizedDKRecord(
    'pa',
    'ਡਨਿੰਗ-ਕਰੂਗਰ ਪ੍ਰਭਾਵ: ਅਗਿਆਨਤਾ ਤੋਂ ਪੈਦਾ ਹੋਇਆ ਝੂਠਾ ਆਤਮ-ਵਿਸ਼ਵਾਸ',
    'ਅਧੂਰੇ ਗਿਆਨ ਦਾ ਨੁਕਸਾਨ: ਘੱਟ ਜਾਣਕਾਰੀ ਵਾਲੇ ਲੋਕ ਵੱਡੇ ਦਾਅਵੇ ਕਿਉਂ ਕਰਦੇ ਹਨ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਕਿਸੇ ਵਿਸ਼ੇ ਬਾਰੇ ਇੰਨਾ ਘੱਟ ਜਾਣਨਾ ਕਿ ਆਪਣੀ ਕਮਜ਼ੋਰੀ ਵੀ ਨਾ ਦਿਖਾਈ ਦੇਵੇ।',
    'ਇਹ ਭਰਮ ਘੱਟ ਸਮਝ ਵਾਲੇ ਵਿਅਕਤੀ ਨੂੰ ਮਾਹਰ ਹੋਣ ਦਾ ਵਹਿਮ ਪੈਦਾ ਕਰਦਾ ਹੈ।',
    'ਨਿਮਰਤਾ ਨਾਲ ਸਿੱਖਦੇ ਰਹਿਣਾ ਹੀ ਸਹੀ ਰਸਤਾ ਹੈ।',
    ['ਵਹਿਮ ਤੋਂ ਬਚੋ', 'ਅਸਲੀਅਤ ਪਛਾਣੋ', 'ਸਿੱਖਣਾ ਜਾਰੀ ਰੱਖੋ']
  ),
  ur: createLocalizedDKRecord(
    'ur',
    'ڈننگ کروگر اثر: جہالت سے پیدا ہونے والا جھوٹا خود اعتمادی',
    'نیم حکیم خطرہ جان: کم علم والے لوگ خود کو ماہر کیوں سمجھتے ہیں۔',
    'آسان الفاظ میں: کسی موضوع کے بارے میں اتنا کم جاننا کہ اپنی لاعلمی کا احساس تک نہ ہو۔',
    'کم علمی سے پیدا ہونے والا لاپروہ اور پرخطر خود اعتمادی۔',
    'حقیقی علم انسان میں عاجزی اور سنجیدگی پیدا کرتا ہے۔',
    ['لاعلمی کا ادراک کریں', 'عاجزی اختیار کریں', 'علم حاصل کرتے رہیں']
  ),
  or: createLocalizedDKRecord(
    'or',
    'ଡନିଙ୍ଗ-କ୍ରୁଗର ପ୍ରଭାବ: ଅଜ୍ଞତାରୁ ଉପୁଜିଥିବା ଅତ୍ୟଧିକ ଆତ୍ମବିଶ୍ୱାସ',
    'ଅଳ୍ପ ବିଦ୍ୟାର ଭୟଙ୍କର ରୂପ: କମ୍ ଜ୍ଞାନ ଥିବା ଲୋକେ ନିଜକୁ ପଣ୍ଡିତ ଭାବିବା।',
    'ସହଜ ଭାଷାରେ: ଗୋଟିଏ ବିଷୟରେ ଏତେ କମ୍ ଜାଣିବା ଯେ ନିଜର ଅଜ୍ଞତାକୁ ବି ଜାଣି ନ ପାରିବା।',
    'ଅଜ୍ଞତା ମଣିଷ ଭିତରେ ମିଥ୍ୟା ଆତ୍ମବିଶ୍ୱାସ ସୃଷ୍ଟି କରେ।',
    'ବିନମ୍ର ଭାବରେ ନିରନ୍ତର ଶିଖିବା ଉଚିତ।',
    ['ଅହଂକାର ତ୍ୟାଗ କରନ୍ତୁ', 'ସତ୍ୟ ବୁଝନ୍ତୁ', 'ନିରନ୍ତର ଶିଖନ୍ତୁ']
  ),
  as: createLocalizedDKRecord(
    'as',
    'ডানিং-ক্ৰুগাৰ প্ৰভাৱ: অজ্ঞানতাৰ পৰা ওপজা অতি-আত্মবিশ্বাস',
    'অল্পবিদ্যা ভয়ংকৰ: কম জ্ঞান থকা মানুহে নিজক বিশেষজ্ঞ ভবাৰ ৰহস্য।',
    'সহজ কথাত: এটা বিষয়ত ইমান কম জনা যে নিজৰ সীমাবদ্ধতাও উপলব্ধি নোহোৱা।',
    'অজ্ঞতাই মানুহৰ মাজত ভ্ৰান্ত আত্মবিশ্বাস জন্ম দিয়ে।',
    'বিনম্ৰভাৱে শিকি থকাটোৱেই প্ৰকৃত জ্ঞানৰ চিন।',
    ['অহংকাৰ পৰিহাৰ কৰক', 'নম্ৰতা বজাই ৰাখক', 'জ্ঞান অৰ্জন কৰক']
  ),
};
