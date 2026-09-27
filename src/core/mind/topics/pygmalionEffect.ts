import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: The Pygmalion Effect: How Expectations Shape Human Reality
 * Category: social_psychology
 * Academic Grounding: Rosenthal & Jacobson (1968) (10.1177/004208596800300403)
 */

export const TOPIC_PYGMALION_EFFECT_EN: MindTopicDetail = {
  id: 'pygmalion_effect',
  categoryId: 'social_psychology',
  slug: 'pygmalion-effect',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 13,
  viewCount: 4630,
  shareCount: 392,
  bookmarkCount: 826,
  title: "The Pygmalion Effect: How Expectations Shape Human Reality",
  subtitle: "The self-fulfilling prophecy where high expectations unconsciously drive higher performance, while low expectations crush potential.",
  shortDescription: "A psychological phenomenon in which high expectations lead to improved performance in a given area, and vice versa (the Golem Effect).",
  oneLineExplanation: "Treat people as who they could be, and their performance will rise to meet your belief.",

  summary30s: "Documented in classrooms by Robert Rosenthal and Lenore Jacobson in 1968, the Pygmalion Effect proves that human performance is intensely malleable to the expectations of authority figures. When teachers or managers believe someone is exceptionally gifted, they unconsciously provide more warmth, feedback, and challenging opportunities, causing the person's actual competence to skyrocket.",
  coreConcept: "The Pygmalion mechanism operates across a continuous circular feedback loop: (1) Our beliefs about others -> (2) Influence our subtle actions toward them (micro-expressions, patience, opportunity allocation) -> (3) Impact their self-beliefs and confidence -> (4) Cause their actions and performance to improve -> (5) Reinforces our original belief. The inverse is the Golem Effect, where negative expectations systematically destroy talent.",
  summary60s: "In Rosenthal & Jacobson's classic experiment, elementary school teachers were told that a standardized test had identified specific students as \"intellectual bloomers\" destined for dramatic academic growth. In reality, the students were chosen completely at random. One year later, those randomly selected \"bloomers\" demonstrated significantly higher real IQ score gains than their peers. The teachers' belief literally altered the students' cognitive development.",
  quickTakeaways: [
    "The Expectancy Loop: High expectations create supportive micro-behaviors that genuinely boost competence",
    "The Golem Hazard: Low expectations communicate mistrust, causing employees and students to mentally check out",
    "Micro-Behaviors Matter: Teachers and bosses signal confidence through tone of voice, eye contact, and patience during mistakes",
    "Calibrated Optimism: Set rigorous, ambitious goals while providing unconditional emotional support",
  ],

  whyItHappens: "Interpersonal expectancy bias. Subordinates read nonverbal cues from leaders and unconsciously adjust their internal self-efficacy and effort.",
  evolutionaryMechanism: "In ancestral social groups, young hunters invested effort into skills that tribal elders recognized and rewarded with high status.",
  howItWorks: "Leader forms high expectation -> Leader allocates high-leverage challenges and detailed coaching -> Subordinate feels trusted -> Self-efficacy increases -> Subordinate works harder -> Performance surges -> Leader's expectation confirmed.",
  whereYouEncounterIt: "School classrooms, engineering mentorship, executive coaching, parenting, sports coaching, and medical patient rehabilitation.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Pygmalion Lift vs. Golem Destruction",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Pygmalion Expectations (High Trust)",
      detail: "\"I know this architecture is complex, but I have seen your analytical depth; you will crack it.\"",
    },
    analogySideB: {
      label: "Golem Trap (Low Expectations)",
      detail: "\"Don't give him the critical payment module; he is slow and will probably introduce bugs.\"",
    },
  },

  researchSummary: "Rosenthal & Jacobson (1968) demonstrated that false teacher expectations generated statistically significant, real-world IQ increases in elementary students.",
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
      id: 'scen_pygmalion_effect_01',
      scenarioType: 'indian_context',
      title: "The Junior Data Analyst in Hyderabad",
      vignette: "Pooja joins a top analytics firm in Hyderabad as a junior hire with average college grades. Her manager, Vikram, reviews her initial work and says: \"Pooja has rare conceptual clarity; she is going to be our lead machine-learning architect in two years.\" Vikram invites her to client presentations, gives her complex feature-engineering assignments, and spends time patiently reviewing her math. Pooja feels immensely valued, studies ML papers late into the night, and within 18 months files two patents for the company.",
      breakdownAnalysis: "The Pygmalion Effect in full bloom. Vikram's genuine high expectations led to elevated opportunities, feedback, and warmth, which transformed Pooja's internal confidence and real performance.",
      recommendedAction: "Identify one struggling or average performer in your organization and deliberately assign them a high-autonomy project with enthusiastic, public executive backing.",
    },
  ],

  examples: [
    {
      id: 'ex_pygmalion_effect_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_pygmalion_effect_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_pygmalion_effect_01',
      scenarioContext: "A high school mathematics teacher in Delhi is assigned two identical sections of 10th-grade algebra. He is falsely informed that Section A is \"gifted mathematically\" and Section B is \"remedial.\" At the end of the semester, Section A scores 25% higher on the standardized state board exam.",
      question: "According to Rosenthal's research on the Pygmalion Effect, what caused this dramatic score divergence?",
      prompt: "According to Rosenthal's research on the Pygmalion Effect, what caused this dramatic score divergence?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'beginner',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Section A students possessed superior natural genetic mathematical aptitude",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "The teacher unconsciously provided more wait-time for answers, richer conceptual feedback, and warmer encouragement to Section A",
          isCorrect: true,
          explanation: "The Pygmalion effect is transmitted through subtle teacher micro-behaviors: tone of voice, patience, question difficulty, and high-frequency constructive feedback.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Section B students experienced social loafing due to large classroom headcount",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Section A students engaged in pluralistic ignorance during exams",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Expectations become self-fulfilling: human beings almost always rise or fall to the expectations set by their leaders.",
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
      id: 'ref_pygmalion_effect_01',
      title: "Pygmalion in the classroom: Teacher expectation and pupils' intellectual development",
      citation: "Rosenthal, R., & Jacobson, L. (1968). The Urban Review, 3(1), 16–20.",
      authors: "Rosenthal & Jacobson",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1177/004208596800300403",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Social Psychology', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'halo_effect', slug: 'halo-effect', title: 'The Halo Effect', relationshipType: 'amplified_by' },
    { topicId: 'confirmation_bias', slug: 'confirmation-bias', title: 'Confirmation Bias', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "The Pygmalion Effect: How Expectations Shape Human Reality | Mentalab Mind",
  seoDescription: "A psychological phenomenon in which high expectations lead to improved performance in a given area, and vice versa (the Golem Effect).",
  canonicalUrl: '/mind/social-psychology/pygmalion-effect',
  ogImageUrl: '/images/mind/pygmalion-effect.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "The Pygmalion mechanism operates across a continuous circular feedback loop: (1) Our beliefs about others -> (2) Influence our subtle actions toward them (micro-expressions, patience, opportunity allocation) -> (3) Impact their self-beliefs and confidence -> (4) Cause their actions and performance to improve -> (5) Reinforces our original belief. The inverse is the Golem Effect, where negative expectations systematically destroy talent.",
};

export const TOPIC_PYGMALION_EFFECT_HINGLISH: MindTopicDetail = {
  ...TOPIC_PYGMALION_EFFECT_EN,
  title: "The Pygmalion Effect: Aapki Ummeedein Doosro Ki Reality Kaise Badal Deti Hain",
  subtitle: "Jab boss ya teacher kisi ko genius maante hain, toh wo sach me genius ki tarah perform karne lagta hai.",
  shortDescription: "Ek aisi self-fulfilling prophecy jahan high expectations insaan ke confidence aur real performance ko aasmaan par pahuncha deti hain.",
  oneLineExplanation: "Kisi ko vishwas do ki wo kamaal kar sakta hai, aur uska dimaag use sach kar dikhayega.",

  summary30s: "1968 me Robert Rosenthal ne ek school me experiment kiya. Unhone teachers se jhooth bola ki kuch random bacche \"super gifted\" hain. Ek saal baad, unhi randomly selected baccho ka real IQ sach me 25% badh gaya! Kyunki teachers unhe pyaar, patience aur challenging kaam dete the. Ise Pygmalion Effect kehte hain.",
  coreConcept: "Insaan waisa hi perform karta hai jaisi ummeed usse ki jaati hai. Agar aap kisi employee ko nalaayak samjhoge (Golem Effect), toh wo galti hi karega. Agar aap uspe genuine bharosa dikhaoge aur bada task doge, toh uska dimaag us standard par uth jayega.",
  quickTakeaways: [
    "Expectation Loop: Aapki soch aapke gestures aur tone me jhalakti hai",
    "Golem Effect Ka Khatra: Kisi ko useless kehna uski skills ko sach me destroy kar deta hai",
    "Patience Ka Khel: Mistakes par daantne ke bajaye sikhane se performance double hoti hai",
    "Leadership Rule: Team ko unke past records se nahi, unki future potential se judge karo",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_PYGMALION_EFFECT_EN,
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

export const TOPIC_PYGMALION_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_PYGMALION_EFFECT_EN,
  hinglish: TOPIC_PYGMALION_EFFECT_HINGLISH,
  hi: createLocalizedRecord('hi', "पिग्मेलियन प्रभाव (Pygmalion Effect): अपेक्षाएं बनाती हैं वास्तविकता", "जब किसी शिक्षक, माता-पिता या प्रबंधक की किसी व्यक्ति से उच्च अपेक्षाएं होती हैं, तो वह व्यक्ति अनजाने में अधिक प्रयास करता है और उसका प्रदर्शन वास्तव में बेहतर हो जाता है।", [
    "अपेक्षाओं का प्रत्यक्ष प्रभाव",
    "आत्म-संतुष्टि की भविष्यवाणी",
    "सहानुभूतिपूर्ण और उच्च मानक आवश्यक"
  ]),
  gu: createLocalizedRecord('gu', "પિગ્મેલિયન ઇફેક્ટ: અપેક્ષાઓ વાસ્તવિકતામાં પરિવર્તિત થાય છે", "જ્યારે નેતા કે શિક્ષક કોઈ વ્યક્તિમાં વિશ્વાસ દર્શાવે છે, ત્યારે તે વ્યક્તિનું વાસ્તવિક પ્રદર્શન નોંધપાત્ર રીતે સુધરે છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "पिग्मॅलियन इफेक्ट: उच्च अपेक्षांमधून घडणारे उत्तम प्रदर्शन", "जेव्हा अधिकारपद व्यक्ती एखाद्यावर विश्वास ठेवते आणि उच्च अपेक्षा बाळगते, तेव्हा ती व्यक्ती स्वतःला सिद्ध करून दाखवते.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "పిగ్మాలియన్ ఎఫెక్ట్: అంచనాలు వాస్తవ రూపాన్ని సంతరించుకోవడం", "నాయకులు తమ సహచరులపై ఉంచే ఉన్నతమైన నమ్మకం వారి పనితీరును స్వయంచాలకంగా మెరుగుపరుస్తుంది.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "பிக்மேலியன் விளைவு: எதிர்பார்ப்புகள் உருவாக்கும் உண்மை", "ஒருவர் மீது நாம் வைக்கும் உயர்ந்த எதிர்பார்ப்புகள் அவர்களை அறியாமலேயே அவர்களின் செயல்திறனை உயர்த்துகின்றன.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಪಿಗ್ಮ್ಯಾಲಿಯನ್ ಎಫೆಕ್ಟ್: ಉನ್ನತ ನಿರೀಕ್ಷೆಗಳು ವಾಸ್ತವವನ್ನು ರೂಪಿಸುವ ವಿಧಾನ", "ನಾಯಕರು ಅಥವಾ ಶಿಕ್ಷಕರು ವ್ಯಕ್ತಿಯ ಮೇಲೆ ಇಡುವ ವಿಶ್ವಾಸವು ಅವರ ನೈಜ ಸಾಮರ್ಥ್ಯವನ್ನು ಗಮನಾರ್ಹವಾಗಿ ಹೆಚ್ಚಿಸುತ್ತದೆ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "പിഗ്മാലിയൻ ഇഫക്റ്റ്: പ്രതീക്ഷകൾ യാഥാർത്ഥ്യത്തെ രൂപപ്പെടുത്തുന്ന വിധം", "മറ്റുള്ളവരിൽ അർപ്പിക്കുന്ന ഉയർന്ന പ്രതീക്ഷകൾ അവരുടെ യഥാർത്ഥ പ്രകടനത്തെ മെച്ചപ്പെടുത്തുന്ന മനശാസ്ത്രപരമായ പ്രതിഭാസം.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "পিগম্যালিয়ন প্রভাব: উচ্চ প্রত্যাশার জাদুকরী বাস্তব রূপায়ন", "শিক্ষক বা নেতার গভীর বিশ্বাস এবং উচ্চ প্রত্যাশা যেকোনো সাধারণ মানুষের ভেতরের প্রতিভাকে জাগিয়ে তোলে।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਪਿਗਮੈਲੀਅਨ ਪ੍ਰਭਾਵ: ਉਮੀਦਾਂ ਕਿਵੇਂ ਅਸਲੀਅਤ ਬਣ ਜਾਂਦੀਆਂ ਹਨ", "ਜਦੋਂ ਕਿਸੇ ਵਿਅਕਤੀ ਉੱਤੇ ਭਰੋਸਾ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਅਤੇ ਵੱਡੀਆਂ ਉਮੀਦਾਂ ਰੱਖੀਆਂ ਜਾਂਦੀਆਂ ਹਨ, ਤਾਂ ਉਸਦੀ ਕਾਰਗੁਜ਼ਾਰੀ ਆਪਣੇ ਆਪ ਵਧ ਜਾਂਦੀ ਹੈ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "پگمیلین اثر: توقعات کیسے حقیقت کا روپ دھار لیتی ہیں", "جب سربراہ اپنے ماتحتوں سے بلند توقعات وابستہ کرتا ہے تو ان کی حقیقی کارکردگی میں غیر معمولی اضافہ ہوتا ہے۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ପିଗ୍‌ମାଲିଅନ୍ ପ୍ରଭାବ: ଆଶା ଓ ବିଶ୍ୱାସର ଶକ୍ତି", "ଯେତେବେଳେ ଜଣେ ଶିକ୍ଷକ ବା ଅଧିକାରୀ କୌଣସି ବ୍ୟକ୍ତି ଉପରେ ଦୃଢ଼ ବିଶ୍ୱାସ ପ୍ରକଟ କରନ୍ତି, ସେହି ବ୍ୟକ୍ତି ନିଜ କାର୍ଯ୍ୟଦକ୍ଷତା ବୃଦ୍ଧି କରେ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "পিগমেলিয়ন প্ৰভাৱ: উচ্চ প্রত্যাশাই কেনেকৈ সফলতা কঢ়িয়াই আনে", "নেতা বা শিক্ষকে যেতিয়া এজন ব্যক্তিৰ পৰা ভাল প্ৰদৰ্শন আশা কৰে, তেতিয়া ব্যক্তিজনৰ আত্মবিশ্বাস আৰু দক্ষতা বৃদ্ধি পায়।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
