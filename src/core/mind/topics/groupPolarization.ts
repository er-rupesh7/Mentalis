import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: Group Polarization: The Risky Shift and Echo Chamber Extremism
 * Category: social_psychology
 * Academic Grounding: Moscovici & Zavalloni (1969) (10.1037/h0027568)
 */

export const TOPIC_GROUP_POLARIZATION_EN: MindTopicDetail = {
  id: 'group_polarization',
  categoryId: 'social_psychology',
  slug: 'group-polarization',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 8,
  viewCount: 4080,
  shareCount: 322,
  bookmarkCount: 716,
  title: "Group Polarization: The Risky Shift and Echo Chamber Extremism",
  subtitle: "Why like-minded groups inevitably migrate toward more extreme, radicalized versions of their initial opinions after discussion.",
  shortDescription: "The tendency for a group to make decisions that are more extreme than the initial inclination of its members, shifting either toward greater caution or greater risk.",
  oneLineExplanation: "Echo chambers do not just reinforce beliefs; they push them to radical extremes.",

  summary30s: "First identified as the \"risky shift\" by James Stoner in 1961 and generalized by Moscovici and Zavalloni in 1969, Group Polarization proves that discussing a topic with people who agree with you doesn't bring moderation—it shifts everyone toward a more extreme stance. Social media feeds and political factions are natural incubators for this phenomenon.",
  coreConcept: "Two complementary mechanisms drive polarization: (1) Persuasive Arguments Theory (Informational Influence): In a room of like-minded peers, you hear novel arguments supporting your preexisting view, giving you fresh justification to become more confident and extreme; (2) Social Comparison Theory (Normative Influence): Group members compete to be perceived as \"true believers\" or exemplary leaders of the group's core value, pulling the consensus outward.",
  summary60s: "In a 1970 study by David Myers and George Bishop, high school students were pre-screened on racial attitudes. Moderately prejudiced students were grouped together, as were moderately unprejudiced students. After 30 minutes of discussion, the unprejudiced group became significantly more progressive, while the prejudiced group became dramatically more hostile. Unmoderated homophily naturally generates radicalism.",
  quickTakeaways: [
    "The Radicalizing Shift: Group discussion pulls members toward the extreme end of their initial shared bias",
    "The Novel Argument Surge: Hearing fresh arguments supporting your view increases overconfidence",
    "One-Upmanship Signaling: Members compete to prove they are the most loyal, virtuous member of the tribe",
    "Deliberate Depolarization: Force groups to read and summarize the strongest arguments of the opposition",
  ],

  whyItHappens: "Information asymmetry and normative status signaling. People want to stand out positively within their peer group while hearing only one-sided evidence.",
  evolutionaryMechanism: "In inter-tribal conflict, cohesive ideological zeal and decisive collective aggression increased war-band solidarity against competing tribes.",
  howItWorks: "Mild initial leaning -> Deliberation with like-minded peers -> Novel supportive arguments shared -> Social signaling causes members to out-radicalize each other -> Group adopts an extreme, uncompromising stance.",
  whereYouEncounterIt: "WhatsApp family groups, RWA resident societies, political rallies, cryptocurrency forum threads, and investment subreddits.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Individual Moderation vs. Echo Chamber Extremism",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Individual Baseline (Moderate)",
      detail: "\"I think we should look into increasing apartment security fees slightly to fix the back gate.\"",
    },
    analogySideB: {
      label: "Post-Discussion Polarization (Extreme)",
      detail: "\"We must ban all outside delivery workers, install biometric fences, and fine anyone who questions the policy!\"",
    },
  },

  researchSummary: "Moscovici & Zavalloni (1969) established that French students discussing Charles de Gaulle or American policy moved to significantly more extreme consensus positions than their individual pre-test averages.",
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
      id: 'scen_group_polarization_01',
      scenarioType: 'indian_context',
      title: "The Gurgaon RWA WhatsApp Escalation",
      vignette: "A high-rise apartment society in Gurgaon creates a WhatsApp group to discuss food delivery bikes parking on society lawns. Initial opinions are moderate: \"Let's designate two parking slots near the gate.\" But over three days of feverish messaging, members share angry photos, complain about traffic noise, and compete to sound the most vigilant. By Sunday's general meeting, the group passes an aggressive resolution banning all delivery partners from entering the premises and imposing ₹5,000 fines on residents ordering groceries.",
      breakdownAnalysis: "Group Polarization in full effect. Echo-chamber interaction provided a cascade of one-sided grievances, and members competed to signal uncompromising loyalty to \"society safety,\" resulting in a hyper-extreme policy.",
      recommendedAction: "Require asynchronous structured polls with neutral question framing, and mandate that both sides of an issue are represented equally before any general body vote.",
    },
  ],

  examples: [
    {
      id: 'ex_group_polarization_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_group_polarization_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_group_polarization_01',
      scenarioContext: "A retail investor Telegram channel in Mumbai dedicated to a specific small-cap green-energy stock starts out discussing whether the company's quarterly revenue is decent. Three weeks later, members are actively liquidating emergency savings to double down, labeling anyone who takes profits as \"a traitor.\"",
      question: "What psychological dynamic explains this rapid descent into radical financial risk-taking?",
      prompt: "What psychological dynamic explains this rapid descent into radical financial risk-taking?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Social Facilitation enhancing individual mathematical accuracy",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Group Polarization amplifying initial optimism into collective zealotry through one-sided argument exposure",
          isCorrect: true,
          explanation: "Group polarization occurs when like-minded individuals discuss a shared belief, exposing each other to exclusively positive arguments and competitive in-group status signaling.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "The Ringelmann Effect reducing the total number of stock shares purchased",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Diffusion of responsibility making individual investors indifferent to their money",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Homogeneous discussion radicalizes: always inject opposing empirical viewpoints to maintain calibration.",
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
      id: 'ref_group_polarization_01',
      title: "The group as a polarizer of attitudes",
      citation: "Moscovici, S., & Zavalloni, M. (1969). Journal of Personality and Social Psychology, 12(2), 125–135.",
      authors: "Moscovici & Zavalloni",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1037/h0027568",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Social Psychology', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'confirmation_bias', slug: 'confirmation-bias', title: 'Confirmation Bias', relationshipType: 'amplified_by' },
    { topicId: 'ingroup_outgroup_bias', slug: 'ingroup-outgroup-bias', title: 'Ingroup-Outgroup Bias', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Group Polarization: The Risky Shift and Echo Chamber Extremism | Mentalab Mind",
  seoDescription: "The tendency for a group to make decisions that are more extreme than the initial inclination of its members, shifting either toward greater caution or gre",
  canonicalUrl: '/mind/social-psychology/group-polarization',
  ogImageUrl: '/images/mind/group-polarization.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Two complementary mechanisms drive polarization: (1) Persuasive Arguments Theory (Informational Influence): In a room of like-minded peers, you hear novel arguments supporting your preexisting view, giving you fresh justification to become more confident and extreme; (2) Social Comparison Theory (Normative Influence): Group members compete to be perceived as \"true believers\" or exemplary leaders of the group's core value, pulling the consensus outward.",
};

export const TOPIC_GROUP_POLARIZATION_HINGLISH: MindTopicDetail = {
  ...TOPIC_GROUP_POLARIZATION_EN,
  title: "Group Polarization: Echo Chamber Me Baatcheet Se Log Radical Kyu Ho Jate Hain?",
  subtitle: "Jab ek jaisi soch wale log aapas me baat karte hain, toh unke vichaar moderate hone ke bajaye aur extreme ho jate hain.",
  shortDescription: "Group discussion ke baad sabka faisla pehle se zyada aggressive ya risky ban jana.",
  oneLineExplanation: "Echo chamber me baatein karne se aam log bhi kattar aur extreme ban jate hain.",

  summary30s: "1961 me James Stoner ne discover kiya ki log akele me safe sochte hain, par jab ek hi vichar wale 10 log baithkar baat karte hain, toh wo bohot risky aur aggressive faisla le lete hain. Ise Group Polarization kehte hain. Social media groups aur political WhatsApp chats iska sabse bada example hain.",
  coreConcept: "Yeh do vajah se hota hai: (1) Naye arguments milte hain jo purani baat ko aur pakka karte hain; (2) Group me sabse zyada loyal aur radical dikhne ki hod lagti hai (Social Comparison).",
  quickTakeaways: [
    "Echo Chamber Trap: Sirf apne jaisi soch walo se milne par vichar extreme ho jate hain",
    "One-Upmanship: Group me log ek-doosre se zyada aggressive banne ki koshish karte hain",
    "Nuance Khatam: Grey area gayab ho jata hai aur sab kuch black-and-white lagta hai",
    "Remedy: Hamesha opposite perspective wale logo ke arguments padhein aur samjhein",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_GROUP_POLARIZATION_EN,
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

export const TOPIC_GROUP_POLARIZATION: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_GROUP_POLARIZATION_EN,
  hinglish: TOPIC_GROUP_POLARIZATION_HINGLISH,
  hi: createLocalizedRecord('hi', "समूह ध्रुवीकरण (Group Polarization): चर्चा से विचारों का कट्टर होना", "समान विचारधारा वाले लोगों के समूह में चर्चा के बाद सदस्यों के विचार अधिक चरम और आक्रामक हो जाते हैं। इसे समूह ध्रुवीकरण कहते हैं।", [
    "विचारों का अतिवाद",
    "इको चैंबर का प्रभाव",
    "विपरीत दृष्टिकोण सुनना अनिवार्य"
  ]),
  gu: createLocalizedRecord('gu', "જૂથ ધ્રુવીકરણ: ચર્ચા પછી વિચારોનું વધુ કટ્ટર બનવું", "જ્યારે સમાન વિચારધારા ધરાવતા લોકો ચર્ચા કરે છે, ત્યારે તેમના નિર્ણયો વધુ જોખમી અને આત્યંતિક બને છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "गट ध्रुवीकरण: चर्चेतून विचारांचे टोकाचे स्वरूप", "समान विचारसरणीच्या लोकांमध्ये चर्चा झाल्यावर त्यांचे मत मवाळ होण्याऐवजी अधिक तीव्र आणि आक्रमक बनते.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "సమూహ ధ్రువీకరణ: చర్చల ద్వారా ఆలోచనలు తీవ్రతరం కావడం", "ఒకే రకమైన ఆలోచనలు కలిగిన వ్యక్తులు చర్చించినప్పుడు మరింత తీవ్రమైన నిర్ణయాలు తీసుకుంటారు.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "குழு துருவமுனைப்பு: உரையாடலால் தீவிரமடையும் கருத்துகள்", "ஒத்த கருத்துடையவர்கள் குழுவாகப் பேசும்போது அவர்களின் நிலைப்பாடு மேலும் தீவிரமடைகிறது.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಗುಂಪು ಧ್ರುವೀಕರಣ: ಚರ್ಚೆಯ ನಂತರ ತೀವ್ರಗಾಮಿ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳುವುದು", "ಒಂದೇ ರೀತಿಯ ಅಭಿಪ್ರಾಯವಿರುವ ಜನರು ಚರ್ಚಿಸಿದಾಗ ಅವರ ಅಭಿಪ್ರಾಯಗಳು ಮತ್ತಷ್ಟು ತೀವ್ರಗೊಳ್ಳುತ್ತವೆ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "ഗ്രൂപ്പ് ധ്രുവീകരണം: ചർച്ചകൾക്കൊടുവിൽ നിലപാടുകൾ തീവ്രമാകൽ", "ഒരേ ചിന്താഗതിയുള്ള ആളുകൾ ഒരുമിച്ചു സംസാരിക്കുമ്പോൾ അഭിപ്രായങ്ങൾ കൂടുതൽ തീവ്രമായ അവസ്ഥയിലേക്ക് മാറുന്നു.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "গ্রুপ মেরুকরণ: আলোচনার মাধ্যমে মতামতের চরমপন্থায় রূপান্তর", "একই মতাদর্শের মানুষের মধ্যে আলোচনার পর তাদের মনোভাব আরও কট্টর ও চরম আকার ধারণ করে।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਗਰੁੱਪ ਪੋਲਰਾਈਜ਼ੇਸ਼ਨ: ਗੱਲਬਾਤ ਰਾਹੀਂ ਵਿਚਾਰਾਂ ਦਾ ਕੱਟੜ ਹੋਣਾ", "ਇੱਕੋ ਸੋਚ ਵਾਲੇ ਲੋਕਾਂ ਦੀ ਚਰਚਾ ਤੋਂ ਬਾਅਦ ਫੈਸਲੇ ਹੋਰ ਵੀ ਤਿੱਖੇ ਅਤੇ ਕੱਟੜਪੰਥੀ ਹੋ ਜਾਂਦੇ ਹਨ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "گروپ پولرائزیشن: بحث و تکرار سے خیالات کا انتہا پسندی کی طرف جانا", "ہم خیال افراد جب آپس میں بحث کرتے ہیں تو ان کے فیصلے اور خیالات مزید انتہا پسندانہ ہو جاتے ہیں۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ଗୋଷ୍ଠୀ ଧ୍ରୁବୀକରଣ: ଆଲୋଚନା ପରେ ମତାମତ ଉଗ୍ର ହେବା", "ସମାନ ବିଚାରଧାରାର ଲୋକେ ଏକାଠି ହୋଇ ଚର୍ଚ୍ଚା କଲେ ସେମାନଙ୍କ ନିଷ୍ପତ୍ତି ଅଧିକ ଚରମ ସୀମାରେ ପହଞ୍ଚିଥାଏ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "দলীয় মেৰুকৰণ: আলোচনাৰ জৰিয়তে মতাদৰ্শ অধিক উগ্ৰ হোৱা", "একে মতৰ মানুহ একেলগ হৈ আলোচনা কৰিলে সিদ্ধান্তসমূহ মধ্যপন্থী হোৱাৰ পৰিৱৰ্তে অধিক চৰমপন্থী হৈ পৰে।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
