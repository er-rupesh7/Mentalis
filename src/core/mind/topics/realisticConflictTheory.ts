import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: Realistic Conflict Theory: Resource Scarcity and Intergroup Hostility
 * Category: social_psychology
 * Academic Grounding: Muzafer Sherif et al. (1961) (10.1037/h0045199)
 */

export const TOPIC_REALISTIC_CONFLICT_THEORY_EN: MindTopicDetail = {
  id: 'realistic_conflict_theory',
  categoryId: 'social_psychology',
  slug: 'realistic-conflict-theory',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 17,
  viewCount: 5070,
  shareCount: 448,
  bookmarkCount: 914,
  title: "Realistic Conflict Theory: Resource Scarcity and Intergroup Hostility",
  subtitle: "How competition over scarce, zero-sum resources transforms cordial groups into bitter rivals—and how superordinate goals unite them.",
  shortDescription: "A model of intergroup conflict explaining how real or perceived competition for limited resources inevitably sparks prejudice, hostility, and discrimination.",
  oneLineExplanation: "When two groups fight over one pie, prejudice is manufactured; when they bake a bigger pie together, peace returns.",

  summary30s: "Demonstrated in 1954 by Muzafer Sherif in the legendary Robbers Cave Experiment, Realistic Conflict Theory explains that prejudice does not require ancient cultural hatreds. Merely putting two distinct groups into direct zero-sum competition over scarce rewards (trophies, promotions, water, territory) rapidly triggers dehumanization, tribal slurs, and overt hostility.",
  coreConcept: "Sherif's breakthrough proved two profound truths: (1) Intergroup conflict is easily ignited through negative interdependence (one group's victory means the other's defeat); (2) Mere contact or lecturing does not fix hostility. The only reliable cure is introducing superordinate goals—urgent challenges that neither group can solve alone without mutual cooperation.",
  summary60s: "At Robbers Cave camp, 22 well-adjusted boys were split into the \"Eagles\" and \"Rattlers\". Within days of competitive tournaments for pocketknives and trophies, the boys burned each other's banners, raided cabins, and carried socks filled with rocks. Sherif then created superordinate emergencies: the camp's sole water pipeline ruptured, and a supply truck broke down. To survive, both tribes had to pull the same rope together, dissolving all hostility into genuine camaraderie.",
  quickTakeaways: [
    "The Zero-Sum Trigger: Scarcity transforms neutral peers into bitter tribal enemies",
    "The Superordinate Goal Antidote: Intergroup peace requires shared survival objectives, not polite team-building dinners",
    "Manufactured Prejudice: Bias is often the symptom of economic competition, not its primary cause",
    "Cross-Functional Alignment: Break silo wars by tying departmental bonuses to unified company-wide metrics",
  ],

  whyItHappens: "Resource competition and zero-sum threat perception. When resources are limited, our evolutionary tribal circuitry mobilizes aggression against rivals.",
  evolutionaryMechanism: "In Paleolithic eras, bands competed for hunting grounds, fertile riverbanks, and cave shelter; outgroup aggression protected tribal lineage.",
  howItWorks: "Scarce resource identified -> Groups realize only one can win -> Ingroup solidarity tightens -> Outgroup is demonized and stereotyped -> Conflict erupts -> Superordinate goal unites both groups.",
  whereYouEncounterIt: "Departmental budget battles, startup co-founder disputes, water-sharing river disputes between states, and corporate mergers.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Zero-Sum Resource Battle vs. Superordinate Unification",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Zero-Sum Scarcity (Conflict Escalation)",
      detail: "\"Product and Sales are competing for a single fixed bonus pool; each department sabotages the other's timelines.\"",
    },
    analogySideB: {
      label: "Superordinate Goal (Cooperative Synergy)",
      detail: "\"The primary client threatened to cancel the enterprise contract unless both teams deliver a joint integration within 48 hours.\"",
    },
  },

  researchSummary: "Sherif et al. (1961) published \"Intergroup Conflict and Cooperation: The Robbers Cave Experiment,\" providing the foundation for modern conflict resolution.",
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
      id: 'scen_realistic_conflict_theory_01',
      scenarioType: 'indian_context',
      title: "The IT Silo Warfare in a Mumbai Fintech",
      vignette: "At a growing Mumbai payment gateway company, the Backend Engineering team and the Risk Management team despise each other. Backend calls Risk \"paranoid bureaucrats who slow down deployment,\" while Risk calls Backend \"reckless cowboys who ignore fraud.\" Hostility explodes during quarterly appraisals when only one team can win the \"Excellence Award.\" However, during Diwali shopping week, a massive Distributed Denial of Service (DDoS) attack knocks the payment servers offline. For 36 continuous hours, both teams sit in the war room ordering pizza, fixing firewall vulnerabilities and optimizing database locks together. By the time the servers are restored, the bitter rivalry has evaporated into mutual respect.",
      breakdownAnalysis: "A textbook real-world demonstration of Realistic Conflict Theory. The zero-sum award created tribal rivalry; the existential server threat acted as a superordinate goal requiring joint survival.",
      recommendedAction: "Abolish silo-based zero-sum competitions; replace them with collaborative cross-functional objectives and collective performance metrics.",
    },
  ],

  examples: [
    {
      id: 'ex_realistic_conflict_theory_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_realistic_conflict_theory_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_realistic_conflict_theory_01',
      scenarioContext: "Two branch offices of an Indian bank in Pune are pitted against each other to win the single \"Best Region\" trophy. Within two months, loan officers hide high-value leads and refuse to share verification files.",
      question: "Based on Sherif's Realistic Conflict Theory, which leadership intervention would most effectively resolve this inter-branch warfare?",
      prompt: "Based on Sherif's Realistic Conflict Theory, which leadership intervention would most effectively resolve this inter-branch warfare?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Organizing a mandatory weekend motivational dinner for both teams",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Increasing the cash value of the single winning trophy",
          isCorrect: false,
          explanation: 'Incorrect. This does not address the core underlying psychological mechanism.',
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Establishing a superordinate regional target where both branches must collaborate to beat a rival competitor bank",
          isCorrect: true,
          explanation: "Sherif proved that only superordinate goals requiring joint interdependence eliminate intergroup prejudice created by zero-sum competition.",
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Firing the lowest-performing employee from each branch",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "When teams fight over scraps, redirect their collective focus toward a shared, larger mission.",
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
      id: 'ref_realistic_conflict_theory_01',
      title: "Intergroup Conflict and Cooperation: The Robbers Cave Experiment",
      citation: "Sherif, M., Harvey, O. J., White, B. J., Hood, W. R., & Sherif, C. W. (1961). Intergroup Conflict and Cooperation: The Robbers Cave Experiment. University of Oklahoma Book Exchange.",
      authors: "Muzafer Sherif et al.",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1037/h0045199",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Social Psychology', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'ingroup_outgroup_bias', slug: 'ingroup-outgroup-bias', title: 'Ingroup-Outgroup Bias', relationshipType: 'amplified_by' },
    { topicId: 'social_identity_theory', slug: 'social-identity-theory', title: 'Social Identity Theory', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Realistic Conflict Theory: Resource Scarcity and Intergroup Hostility | Mentalab Mind",
  seoDescription: "A model of intergroup conflict explaining how real or perceived competition for limited resources inevitably sparks prejudice, hostility, and discriminatio",
  canonicalUrl: '/mind/social-psychology/realistic-conflict-theory',
  ogImageUrl: '/images/mind/realistic-conflict-theory.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Sherif's breakthrough proved two profound truths: (1) Intergroup conflict is easily ignited through negative interdependence (one group's victory means the other's defeat); (2) Mere contact or lecturing does not fix hostility. The only reliable cure is introducing superordinate goals—urgent challenges that neither group can solve alone without mutual cooperation.",
};

export const TOPIC_REALISTIC_CONFLICT_THEORY_HINGLISH: MindTopicDetail = {
  ...TOPIC_REALISTIC_CONFLICT_THEORY_EN,
  title: "Realistic Conflict Theory: Jab Limited Resources Se Dushmani Paida Hoti Hai",
  subtitle: "Jab do groups ek hi cheez ke liye ladte hain toh nafrat badhti hai; par jab milkar koi musibat solve karte hain toh dosti ho jati hai.",
  shortDescription: "Ek aisi psychological theory jo batati hai ki resources ki kami se aapas me dushmani kaise shuru hoti hai aur shared goals se kaise khatam hoti hai.",
  oneLineExplanation: "Resource ek aur ladne wale do, toh nafrat banegi; samasya badi aur dono mil jayein, toh dosti hogi.",

  summary30s: "1954 ke prasiddh Robbers Cave experiment me Muzafer Sherif ne dikhaya ki dushmani paida karne ke liye koi purani dushmani ki zaroorat nahi hoti. Bas do groups ke beech ek single prize ya resource rakh do, dono ek doosre ke dushman ban jayenge. Aur is nafrat ko sirf ek Superordinate Goal—yaani aisi musibat jise dono milkar hi hal kar sakein—se hi mitaya ja sakta hai.",
  coreConcept: "Office me departments ke beech jo ladaai hoti hai (jaise Tech vs Sales), wo unke nature ki wajah se nahi, balki zero-sum appraisal system ki wajah se hoti hai. Jab dono ko lagta hai ki doosre ki jeet meri haar hai, toh toxicity badhti hai.",
  quickTakeaways: [
    "Zero-Sum Ka Zehar: Jab reward ek hi team ko milna ho toh sahyog khatam ho jata hai",
    "Superordinate Goals: Shared problem hi purani dushmani ko mita sakti hai",
    "Silos Ko Todo: Sales aur Engineering ko common metric par evaluate karo",
    "Contact Hypothesis Incomplete: Sirf saath baithakar pizza khilane se dushmani khatam nahi hoti",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_REALISTIC_CONFLICT_THEORY_EN,
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

export const TOPIC_REALISTIC_CONFLICT_THEORY: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_REALISTIC_CONFLICT_THEORY_EN,
  hinglish: TOPIC_REALISTIC_CONFLICT_THEORY_HINGLISH,
  hi: createLocalizedRecord('hi', "यथार्थवादी समूह संघर्ष सिद्धांत (Realistic Conflict Theory): संसाधनों की कमी और अंतर-समूह शत्रुता", "यह सिद्धांत स्पष्ट करता है कि जब दो समूह सीमित और शून्य-योग (zero-sum) संसाधनों के लिए प्रतिस्पर्धा करते हैं, तो पूर्वाग्रह और शत्रुता स्वतः भड़क उठती है; इसे केवल साझा लक्ष्यों (superordinate goals) से ही शांत किया जा सकता है।", [
    "संसाधन प्रतिस्पर्धा से शत्रुता का जन्म",
    "साझा लक्ष्यों (Superordinate Goals) का उपचारात्मक प्रभाव",
    "शून्य-योग मूल्यांकन प्रणालियों के खतरे"
  ]),
  gu: createLocalizedRecord('gu', "રિયાલિસ્ટિક કોન્ફ્લિક્ટ થિયરી: સંસાધનોની તંગી અને જૂથ વચ્ચેનો વિવાદ", "જ્યારે બે જૂથો મર્યાદિત સંસાધનો માટે લડે છે ત્યારે અંદરોઅંદર પૂર્વગ્રહ વધે છે, જેને માત્ર એક સહિયારા મોટા લક્ષ્ય દ્વારા જ ઉકેલી શકાય છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "रिअॅलिस्टिक कॉन्फ्लिक्ट थिअरी: संसाधनांची टंचाई आणि गटांमधील संघर्ष", "जेव्हा मर्यादित फायद्यांसाठी दोन गटांमध्ये स्पर्धा लावली जाते, तेव्हा द्वेष वाढतो; मात्र जेव्हा एखादी सामायिक समस्या येते, तेव्हाच ते एकत्र येतात.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "రియలిస్టిక్ కాన్ఫ్లిక్ట్ థియరీ: వనరుల కొరత మరియు వర్గాల మధ్య వైరం", "పరిమిత వనరుల కోసం పోటీ పడినప్పుడు గ్రూపుల మధ్య ద్వేషం రగులుకుంటుంది; దీనిని పరిష్కరించడానికి ఉమ్మడి సమస్యను అధిగమించే లక్ష్యం అవసరం.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "எதார்த்த மோதல் கோட்பாடு: வளப் பற்றாக்குறையும் குழுக்களுக்கிடையேயான பகையும்", "வரையறுக்கப்பட்ட வளங்களுக்காக இரு குழுக்கள் போட்டியிடும் போது பகையுணர்வு வெடிக்கிறது; ஒரு பொதுவான பெரும் இலக்கினால் மட்டுமே ஒற்றுமை ஏற்படும்.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ರಿಯಲಿಸ್ಟಿಕ್ ಕಾನ್ಫ್ಲಿಕ್ಟ್ ಥಿಯರಿ: ಸಂಪನ್ಮೂಲಗಳ ಕೊರತೆ ಮತ್ತು ಗುಂಪುಗಳ ನಡುವಿನ ವೈಷಮ್ಯ", "ಸೀಮಿತ ಸಂಪನ್ಮೂಲಗಳಿಗಾಗಿ ಪೈಪೋಟಿ ನಡೆದಾಗ ಗುಂಪುಗಳಲ್ಲಿ ಪರಸ್ಪರ ದ್ವೇಷ ಉಂಟಾಗುತ್ತದೆ; ಇದನ್ನು ಸಾಮಾನ್ಯ ಸವಾಲುಗಳನ್ನು ಒಟ್ಟಾಗಿ ಎದುರಿಸುವ ಮೂಲಕವೇ ಸರಿಪಡಿಸಬಹುದು.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "റിയലിസ്റ്റിക് കോൺഫ്ലിക്റ്റ് തിയറി: വിഭവ ദൗർലഭ്യവും ഗ്രൂപ്പുകൾ തമ്മിലുള്ള ശത്രുതയും", "പരിമിതമായ വിഭവങ്ങൾക്കായി ഗ്രൂപ്പുകൾ മത്സരിക്കുമ്പോൾ ശത്രുത ഉടലെടുക്കുന്നു; ഒരു വലിയ പൊതു ലക്ഷ്യത്തിലൂടെ മാത്രമേ ഈ അകൽച്ച ഇല്ലാതാക്കാൻ കഴിയൂ.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "রিয়্যালিস্টিক কনফ্লিক্ট থিওরি: সম্পদের অভাব এবং দলগত সংঘাত", "সীমিত সুযোগের জন্য প্রতিযোগিতা শুরু হলে দলের মধ্যে হিংসা বাড়ে; কোনো যৌথ বড় সংকট মোকাবিলা করলেই কেবল এই শত্রুতা মেটে।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਰਿਅਲਿਸਟਿਕ ਕਨਫਲਿਕਟ ਥਿਊਰੀ: ਸੀਮਤ ਵਸੀਲਿਆਂ ਕਾਰਨ ਗਰੁੱਪਾਂ ਵਿੱਚ ਵੈਰ", "ਜਦੋਂ ਦੋ ਗਰੁੱਪ ਇੱਕੋ ਸੀਮਤ ਇਨਾਮ ਲਈ ਮੁਕਾਬਲਾ ਕਰਦੇ ਹਨ ਤਾਂ ਨਫ਼ਰਤ ਪੈਦਾ ਹੁੰਦੀ ਹੈ, ਜਿਸਨੂੰ ਸਿਰਫ਼ ਸਾਂਝੇ ਟੀਚੇ ਨਾਲ ਹੀ ਖਤਮ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "حقیقی گروہی تنازع کا نظریہ: وسائل کی کمی اور باہمی عداوت", "جب دو گروہ محدود وسائل کے حصول کے لیے آمنے سامنے آتے ہیں تو نفرت بڑھتی ہے، جسے صرف مشترکہ مقصد کے تحت ختم کیا جا سکتا ہے۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ରିଅଲିଷ୍ଟିକ୍ କନଫ୍ଲିକ୍ଟ ଥିଓରୀ: ସୀମିତ ସମ୍ବଳ ଏବଂ ଗୋଷ୍ଠୀଗତ ଶତ୍ରୁତା", "ଯେତେବେଳେ ଦୁଇଟି ଦଳ ସୀମିତ ସମ୍ବଳ ପାଇଁ ପ୍ରତିଦ୍ୱନ୍ଦ୍ୱିତା କରନ୍ତି, ସେତେବେଳେ ବିବାଦ ଉପୁଜେ; ଏକ ମିଳିତ ବଡ଼ ଲକ୍ଷ୍ୟ ହିଁ ସେମାନଙ୍କୁ ଏକାଠି କରିପାରେ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "ৰিয়েলিষ্টিক কনফ্লিক্ট থিয়ৰী: সম্পদৰ অভাৱ আৰু দলীয় সংঘাত", "সীমিত সুযোগৰ বাবে প্ৰতিযোগিতা হ’লে দলবোৰৰ মাজত শত্রুতা বাঢ়ে, যাক কেৱল যৌথ লক্ষ্যৰ দ্বাৰাহে দূৰ কৰিব পৰা যায়।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
