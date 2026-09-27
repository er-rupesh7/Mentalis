import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: The Spotlight Effect: Overestimating How Much Others Notice You
 * Category: social_psychology
 * Academic Grounding: Gilovich, Medvec & Savitsky (2000) (10.1037/0022-3514.78.2.211)
 */

export const TOPIC_SPOTLIGHT_EFFECT_EN: MindTopicDetail = {
  id: 'spotlight_effect',
  categoryId: 'social_psychology',
  slug: 'spotlight-effect',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 14,
  viewCount: 4740,
  shareCount: 406,
  bookmarkCount: 848,
  title: "The Spotlight Effect: Overestimating How Much Others Notice You",
  subtitle: "The egocentric cognitive bias where we assume a harsh public spotlight is tracking our every flaw, stain, and stumble.",
  shortDescription: "A psychological phenomenon where people tend to overestimate the degree to which they are noticed, observed, and evaluated by others.",
  oneLineExplanation: "You are the center of your own universe, but a background extra in everyone else's.",

  summary30s: "Discovered in 2000 by Thomas Gilovich and colleagues at Cornell University, the Spotlight Effect proves that humans systematically exaggerate how much the world is watching them. Whether you have a stained shirt, an awkward stutter in a meeting, or bad hair, you assume the entire room is judging you—when in truth, barely anyone noticed.",
  coreConcept: "The Spotlight Effect is rooted in egocentric anchoring and insufficient adjustment. Because we are continuously trapped inside our own sensory experience, our internal state (embarrassment, anxiety, self-consciousness) is intensely salient to us. When estimating what others perceive, we anchor on our own heightened awareness and fail to adjust for the fact that other people are busy thinking about themselves.",
  summary60s: "In Gilovich's famous experiment, students were forced to put on an embarrassing Barry Manilow t-shirt before entering a crowded seminar room. The students predicted that at least 50% of the room would notice the ridiculous shirt. In reality, post-room surveys showed that only 23% had even registered what shirt the student was wearing. The students had doubled the perceived audience.",
  quickTakeaways: [
    "The Egocentric Anchor: We assume our internal embarrassment is visible to external observers",
    "The 50% Rule of Thumb: In social situations, assume people notice less than half of what you obsess over",
    "Freedom from Scrutiny: Recognizing the spotlight effect liberates you from crippling social anxiety",
    "Audience Narcissism: Everyone around you is too busy worrying about their own spotlight to watch yours",
  ],

  whyItHappens: "Egocentric cognitive anchoring. We cannot turn off our first-person perspective, so our own mistakes feel massively magnified.",
  evolutionaryMechanism: "In small ancestral bands of 50 people, public blunders could affect tribal reputation and mating opportunities, evolving an over-sensitive paranoia.",
  howItWorks: "You make a small mistake -> Intense internal emotional flash -> Assume your internal state is radiated externally -> Overestimate observer scrutiny -> Experience intense social anxiety.",
  whereYouEncounterIt: "Public speaking slip-ups, spilling food at parties, bad haircuts, wearing casual clothes to formal events, and making a typo in a company email.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Perceived Scrutiny vs. Actual Indifference",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Your Internal Perception",
      detail: "\"I stumbled on that slide transition; everyone in this 50-person board meeting thinks I am unqualified.\"",
    },
    analogySideB: {
      label: "Actual Audience Reality",
      detail: "\"The attendees were checking their Slack messages, wondering what to eat for lunch, and noticed nothing.\"",
    },
  },

  researchSummary: "Gilovich, Medvec & Savitsky (2000) proved across multiple experiments that targets overestimate the salience of their appearance and actions by more than 100%.",
  limitationsAndControversies: 'Contextual variables include individual cognitive reflection, cultural collectivism, stake size, and institutional transparency.',
  commonMisconceptions: 'Common myth: Intellectual intelligence or domain expertise protects individuals from this dynamic. Reality: Controlled empirical trials prove that cognitive reflection tests and structured institutional rubrics are necessary to prevent distortion.',

  howToRecognize: [
    'Noticing an immediate emotional reluctance to question an emerging collective consensus',
    'Feeling personal accountability evaporate when responsibility is diffused into a committee',
    'Justifying an inconsistent action through creative rationalization rather than behavioral adjustment',
    'Experiencing decision paralysis when presented with an uncurated set of alternatives',
  ],

  scenarios: [
    {
      id: 'scen_spotlight_effect_01',
      scenarioType: 'indian_context',
      title: "The Spilled Chai at a Jaipur Sangeet",
      vignette: "Rohan attends a grand wedding sangeet in Jaipur. While greeting relatives, he accidentally spills a drop of hot chai on his beige silk kurta, leaving a quarter-sized brown spot near his collar. Rohan is paralyzed with mortification: \"The bride's family, my cousins, everyone is staring at my messy stain!\" He spends the next four hours hiding behind pillars, refusing to dance, and leaving before dinner. The next morning, when he mentions the stain to his sister, she laughs: \"What stain? Nobody was looking at your kurta, Rohan.\"",
      breakdownAnalysis: "The Spotlight Effect in full swing. Rohan anchored on his own acute embarrassment, ruining an entire evening over an imaginary audience.",
      recommendedAction: "Apply the \"Nobody Cares Rule\": Remind yourself that every other person in that room is completely occupied thinking about their own clothes, hair, and status.",
    },
  ],

  examples: [
    {
      id: 'ex_spotlight_effect_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_spotlight_effect_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_spotlight_effect_01',
      scenarioContext: "A product manager in Bangalore stutters for 3 seconds during a 45-minute sprint demo to 30 colleagues. Afterward, he is so humiliated that he avoids speaking in meetings for the rest of the week.",
      question: "Which empirical insight from the Spotlight Effect would most effectively recalibrate his anxiety?",
      prompt: "Which empirical insight from the Spotlight Effect would most effectively recalibrate his anxiety?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'beginner',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Research shows that over 80% of meeting attendees were intensely analyzing his vocal rhythm",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Most attendees were focused on their own upcoming speaking slots and barely registered the 3-second hesitation",
          isCorrect: true,
          explanation: "The spotlight effect proves that people massively overestimate external scrutiny; colleagues are preoccupied with their own tasks and self-presentation.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Taking public speaking classes will eliminate the spotlight effect completely",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Social loafing prevented anyone from paying attention to the entire demo",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "You are rarely the main character in other people's minds: forgive your minor social slips.",
    },
  ],

  howToRespond: 'Implement structured individual accountability, pre-commitments, and independent auditing protocols.',
  psychologicalDefenses: [
    {
      title: 'Independent Analytical Separation',
      instruction: 'Formulate your assessment and write down confidence intervals privately before hearing the group consensus or market narrative.',
    },
    {
      title: 'Counterfactual Inversion',
      instruction: 'Explicitly invert the proposition: "If the exact opposite hypothesis were true, what tangible evidence would we expect to observe today?"',
    },
    {
      title: 'Binding Ulysses Pre-Commitments',
      instruction: 'Lock in objective exit points, decision rules, and resource ceilings in advance when your mind is calm and uncompromised.',
    },
  ],

  reflectionPrompt: 'Where in your daily professional or personal life are you quietly conforming to an unspoken norm that you privately recognize as irrational?',
  references: [
    {
      id: 'ref_spotlight_effect_01',
      title: "The spotlight effect in social judgment: An egocentric bias in estimates of the salience of one's own actions and appearance",
      citation: "Gilovich, T., Medvec, V. H., & Savitsky, K. (2000). Journal of Personality and Social Psychology, 78(2), 211–222.",
      authors: "Gilovich, Medvec & Savitsky",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1037/0022-3514.78.2.211",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Social Psychology', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'illusion_of_transparency', slug: 'illusion-of-transparency', title: 'The Illusion of Transparency', relationshipType: 'amplified_by' },
    { topicId: 'social_facilitation', slug: 'social-facilitation', title: 'Social Facilitation', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "The Spotlight Effect: Overestimating How Much Others Notice You | Mentalab Mind",
  seoDescription: "A psychological phenomenon where people tend to overestimate the degree to which they are noticed, observed, and evaluated by others.",
  canonicalUrl: '/mind/social-psychology/spotlight-effect',
  ogImageUrl: '/images/mind/spotlight-effect.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "The Spotlight Effect is rooted in egocentric anchoring and insufficient adjustment. Because we are continuously trapped inside our own sensory experience, our internal state (embarrassment, anxiety, self-consciousness) is intensely salient to us. When estimating what others perceive, we anchor on our own heightened awareness and fail to adjust for the fact that other people are busy thinking about themselves.",
};

export const TOPIC_SPOTLIGHT_EFFECT_HINGLISH: MindTopicDetail = {
  ...TOPIC_SPOTLIGHT_EFFECT_EN,
  title: "The Spotlight Effect: Hum Sabko Lagta Hai Ki Puri Duniya Hume Dekh Rahi Hai",
  subtitle: "Kapde par chota sa daag lagne par hume lagta hai sab hume judge kar rahe hain, jabki kisi ko parwah nahi hoti.",
  shortDescription: "Ek aisi egocentric soch jisme hume lagta hai ki log hamari har choti galti aur appearance ko continuously observe kar rahe hain.",
  oneLineExplanation: "Aap apni movie ke hero hain, par baaki logo ki movie me aap bas ek background extra hain.",

  summary30s: "2000 me Thomas Gilovich ne Spotlight Effect discover kiya. Jab hamare kapde kharab hote hain ya presentation me koi slip of tongue hota hai, toh hume lagta hai ki room ke sab log hamara mazaak uda rahe hain. Sachai yeh hai ki 80% logo ne us baat par dhyaan bhi nahi diya hota, kyunki wo sab apne baare me sochne me busy hote hain.",
  coreConcept: "Hum apne dimaag me band hain, isliye hamari choti si sharmindagi hume bohot badi lagti hai. Ise Egocentric Anchoring kehte hain. Sachai yeh hai ki duniya aapko utna closely track nahi kar rahi jitna aap sochte hain.",
  quickTakeaways: [
    "50% Rule: Log aapki galti ko aapki expectation se aadhi se bhi kam notice karte hain",
    "Nobody Cares: Har insaan apne baal, kapde aur phone me busy hai",
    "Freedom: Is bias ko samajhne se public anxiety aur self-doubt khatam ho jata hai",
    "Mistakes Are Normal: Minor slip-ups par over-apologize karne ki zaroorat nahi hai",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_SPOTLIGHT_EFFECT_EN,
    title,
    subtitle: summary.slice(0, 80) + '...',
    oneLineExplanation: summary.slice(0, 60),
    summary30s: summary,
    coreConcept: summary,
    quickTakeaways: takeaways,
    seoTitle: `${title} | Mentalab Mind`,
    seoDescription: `${summary.slice(0, 150)}...`,
  };
}

export const TOPIC_SPOTLIGHT_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SPOTLIGHT_EFFECT_EN,
  hinglish: TOPIC_SPOTLIGHT_EFFECT_HINGLISH,
  hi: createLocalizedRecord('hi', "स्पॉटलाइट प्रभाव (Spotlight Effect): अत्यधिक सार्वजनिक ध्यान का भ्रम", "एक ऐसा आत्म-केंद्रित पूर्वाग्रह जिसमें व्यक्ति यह मान बैठता है कि उसकी हर छोटी गलती, रूप-रंग और व्यवहार पर सभी लोग लगातार ध्यान दे रहे हैं और उसका मूल्यांकन कर रहे हैं।", [
    "अहं-केंद्रित दृष्टिकोण का प्रभाव",
    "सार्वजनिक जांच का अत्यधिक अनुमान",
    "सामाजिक चिंता से मुक्ति का उपाय"
  ]),
  gu: createLocalizedRecord('gu', "સ્પોટલાઇટ ઇફેક્ટ: લોકો તમને જ જોઈ રહ્યા છે તેવો ભ્રમ", "જ્યારે આપણને લાગે છે કે આપણી દરેક નાની ભૂલ અને વર્તનને આખી દુનિયા નોંધી રહી છે, જ્યારે હકીકતમાં કોઈનું ધ્યાન હોતું નથી.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "स्पॉटलाइट इफेक्ट: संपूर्ण जग आपल्यावरच लक्ष ठेवून असल्याचा भ्रम", "आपल्या छोट्या चुका, कपडे किंवा वागण्यावर सर्वांचेच बारीक लक्ष आहे हा गैरसमज असतो. प्रत्यक्षात लोक स्वतःतच मग्न असतात.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "స్పాట్‌లైట్ ఎఫెక్ట్: అందరూ మనల్నే గమనిస్తున్నారనే భ్రమ", "మన చిన్న తప్పులు మరియు రూపాన్ని ఇతరులు తీవ్రంగా గమనిస్తున్నారని అతిగా అంచనా వేసే మానసిక పరిస్థితి.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "ஸ்பாட்லைட் விளைவு: அனைவரும் நம்மையே கவனிக்கிறார்கள் என்ற மாயை", "நமது சிறிய தவறுகளையும் தோற்றத்தையும் மற்றவர்கள் கூர்ந்து கவனிக்கிறார்கள் என்று நாம் தேவையின்றி பயப்படும் நிலை.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಸ್ಪಾಟ್‌ಲೈಟ್ ಎಫೆಕ್ಟ್: ಎಲ್ಲರೂ ನಮ್ಮನ್ನೇ ಗಮನಿಸುತ್ತಿದ್ದಾರೆಂಬ ಭ್ರಮೆ", "ನಮ್ಮ ಸಣ್ಣ ತಪ್ಪುಗಳು ಮತ್ತು ನಡವಳಿಕೆಯನ್ನು ಪ್ರತಿಯೊಬ್ಬರೂ ಸೂಕ್ಷ್ಮವಾಗಿ ಗಮನಿಸುತ್ತಿದ್ದಾರೆ ಎಂದು ಅತಿಯಾಗಿ ಯೋಚಿಸುವ ಮಾನಸಿಕ ದೋಷ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "സ്പോട്ട്‌ലൈറ്റ് ഇഫക്റ്റ്: എല്ലാവരും നമ്മെത്തന്നെ ശ്രദ്ധിക്കുന്നു എന്ന തെറ്റിദ്ധാരണ", "നമ്മുടെ ചെറിയ വീഴ്ചകളെയും രൂപഭാവങ്ങളെയും മറ്റുള്ളവർ സൂക്ഷ്മമായി വീക്ഷിക്കുന്നുണ്ടെന്ന് അനാവശ്യമായി ചിന്തിക്കുന്ന അവസ്ഥ.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "স্পটলাইট প্রভাব: সবাই আমাকেই দেখছে—এই অহেতুক বিভ্রম", "নিজের ছোটখাটো ভুল বা পোশাকের খুঁত নিয়ে সবাই সমালোচনা করছে ভেবে অহেতুক হীনম্মন্যতায় ভোগার মানসিকতা।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਸਪੌਟਲਾਈਟ ਪ੍ਰਭਾਵ: ਸਭ ਮੇਰੇ ਵੱਲ ਹੀ ਦੇਖ ਰਹੇ ਹਨ ਦਾ ਭੁਲੇਖਾ", "ਇੱਕ ਮਨੋਵਿਗਿਆਨਕ ਭਰਮ ਜਿਸ ਵਿੱਚ ਵਿਅਕਤੀ ਸੋਚਦਾ ਹੈ ਕਿ ਉਸਦੀ ਹਰ ਨਿੱਕੀ ਗਲਤੀ ਉੱਤੇ ਸਾਰੇ ਲੋਕ ਨਜ਼ਰ ਰੱਖ ਰਹੇ ਹਨ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "اسپاٹ لائٹ اثر: ہر وقت توجہ کا مرکز سمجھے جانے کا وہم", "یہ سوچنا کہ آپ کی چھوٹی سی غلطی یا لباس کی خامی کو تمام لوگ غور سے دیکھ کر فیصلہ صادر کر رہے ہیں۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ସ୍ପଟ୍‌ଲାଇଟ୍ ପ୍ରଭାବ: ସମସ୍ତେ ମୋତେ ହିଁ ଦେଖୁଛନ୍ତି ବୋଲି ଭ୍ରମ", "ନିଜର ସାମାନ୍ୟ ଭୁଲ୍ ବା ବେଶଭୂଷାକୁ ନେଇ ସାରା ଦୁନିଆ ଆଲୋଚନା କରୁଛି ବୋଲି ଭାବି ଆତଙ୍କିତ ହେବାର ମନସ୍ତତ୍ତ୍ୱ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "স্পটলাইট প্ৰভাৱ: সকলোৱে মোক লক্ষ্য কৰিছে বুলি ভবাৰ ভুল", "নিজা ভুল বা সাজ-পোছাকৰ ত্রুটি সকলোৱে লক্ষ্য কৰি আছে বুলি ভাবি অহেতুক সামাজিক লাজ পোৱাৰ মানসিকতা।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
