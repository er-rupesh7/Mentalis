import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Decision Making Track
 * Topic: Escalation of Commitment: Pouring Good Resources into Sunk Traps
 * Category: decision_making
 * Academic Grounding: Barry M. Staw (1976) (10.1016/0030-5073(76)90005-2)
 */

export const TOPIC_ESCALATION_OF_COMMITMENT_EN: MindTopicDetail = {
  id: 'escalation_of_commitment',
  categoryId: 'decision_making',
  slug: 'escalation-of-commitment',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 10,
  viewCount: 4300,
  shareCount: 350,
  bookmarkCount: 760,
  title: "Escalation of Commitment: Pouring Good Resources into Sunk Traps",
  subtitle: "The psychological compulsion to redouble investments in a visibly deteriorating course of action to defend personal ego and past judgment.",
  shortDescription: "A human behavior pattern in which an individual or group facing increasingly negative outcomes from a decision nevertheless continues the behavior instead of altering course.",
  oneLineExplanation: "Throwing good money, time, and reputation after bad just to prove that your original decision wasn't a mistake.",

  summary30s: "First analyzed in 1976 by Barry Staw in his seminal work \"Knee-Deep in the Big Muddy,\" Escalation of Commitment explains why leaders and founders drive projects off cliffs. When early feedback reveals that a project is hemorrhaging resources, rational logic dictates immediate termination. Instead, the decision-maker experiences intense self-justification threat, investing even more money and prestige to rescue their ego.",
  coreConcept: "While the Sunk Cost Fallacy focuses on the irrational honoring of historical costs, Escalation of Commitment specifically involves active redoubling: increasing allocation of future resources to salvage personal reputation. Factors fueling escalation include: (1) Personal responsibility for the original choice; (2) Public visibility of the project; (3) Confirmation bias filtering out negative indicators; (4) The cultural stigma attached to \"quitting\".",
  summary60s: "Staw's controlled laboratory experiments proved that managers who were personally responsible for choosing a corporate investment allocated significantly more subsequent R&D capital to that division when it suffered severe financial losses compared to managers who had not made the original choice. The original decision-makers were desperate to validate their initial judgment, choosing financial ruin over admitting error.",
  quickTakeaways: [
    "The Ego Defense Shield: We don't double down because the project is viable; we double down to defend our pride",
    "The Independent Review Rule: Have people who did not make the initial investment decide whether to continue funding",
    "Pre-Committed Kill Criteria: Define concrete operational failure metrics in advance that trigger automatic termination",
    "Normalize Strategic Quitting: Distinguish between lack of discipline and the intelligent retirement of failed hypotheses",
  ],

  whyItHappens: "Self-justification theory and impression management. Admitting that a multi-million-rupee initiative was a blunder threatens self-esteem and social status.",
  evolutionaryMechanism: "In ancestral social groups, consistency and unwavering determination signaled leadership reliability; erratic course-changing looked weak.",
  howItWorks: "Initial decision made -> Negative results emerge -> Decision-maker feels cognitive dissonance -> Attributes failure to \"temporary headwinds\" -> Pours in fresh capital -> Catastrophic collapse.",
  whereYouEncounterIt: "Failed tech startup pivots, troubled government megaprojects, toxic romantic relationships, and deteriorating stock positions.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Rational Abandonment vs. Ego-Driven Doubling Down",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Escalation Trap (Doubling Down)",
      detail: "\"We have already spent ₹50 crores on this customized ERP software that doesn't work; let's approve another ₹25 crores to fix it.\"",
    },
    analogySideB: {
      label: "Rational Termination (Sunk Cost Reset)",
      detail: "\"The software architecture is fundamentally flawed. We cut our loss at ₹50 crores today and switch to an off-the-shelf solution.\"",
    },
  },

  researchSummary: "Barry M. Staw (1976) published \"Knee-deep in the big muddy: A study of escalating commitment to a chosen course of action\" in OBHP.",
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
      id: 'scen_escalation_of_commitment_01',
      scenarioType: 'indian_context',
      title: "The Unviable Logistics App in Koramangala",
      vignette: "Sameer launched a hyper-local B2B trucking app in Bangalore with ₹1.5 crore of seed money. After 18 months, user retention is under 4%, competitor margins are zero, and each delivery loses ₹400. Advisors urge him to shut down and return the remaining ₹40 lakhs to investors. However, Sameer's entire identity is tied to being \"the logistics innovator.\" Terrified of telling his college batchmates that he failed, Sameer takes out a personal home loan of ₹50 lakhs and borrows ₹30 lakhs from his father-in-law to fund a high-burn discount campaign. Eight months later, the capital is entirely vaporized.",
      breakdownAnalysis: "A devastating real-world illustration of Escalation of Commitment. Sameer did not invest the additional ₹80 lakhs based on prospective unit economics; he escalated solely to shield his personal ego and public image from the shame of failure.",
      recommendedAction: "Establish an independent advisory board with binding voting rights on budget continuations to remove founder ego from termination decisions.",
    },
  ],

  examples: [
    {
      id: 'ex_escalation_of_commitment_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_escalation_of_commitment_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_escalation_of_commitment_01',
      scenarioContext: "A city municipal corporation awards a ₹200-crore bridge contract. Due to severe soil instability discovered later, the foundation cannot support traffic. Instead of canceling and re-routing, the chief engineer requests ₹150 crores more to reinforce the unstable foundation, stating: \"We cannot waste the taxpayers' first ₹200 crores.\"",
      question: "Which empirical cognitive distortion is driving the chief engineer's request?",
      prompt: "Which empirical cognitive distortion is driving the chief engineer's request?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Pluralistic ignorance regarding soil physics",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Escalation of commitment driven by the need to justify the original flawed decision",
          isCorrect: true,
          explanation: "The engineer is pouring additional resources into a failing project specifically to justify the original sunk expenditure and protect professional credibility.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "The spotlight effect among construction workers",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Social facilitation improving engineering output",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Never invest another rupee or hour merely to validate money that is already gone.",
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
      id: 'ref_escalation_of_commitment_01',
      title: "Knee-deep in the big muddy: A study of escalating commitment to a chosen course of action",
      citation: "Staw, B. M. (1976). Organizational Behavior and Human Performance, 16(1), 27–44.",
      authors: "Barry M. Staw",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1016/0030-5073(76)90005-2",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Decision Making', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'sunk_cost_fallacy', slug: 'sunk-cost-fallacy', title: 'Sunk Cost Fallacy', relationshipType: 'amplified_by' },
    { topicId: 'prospect_theory', slug: 'prospect-theory', title: 'Prospect Theory', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Escalation of Commitment: Pouring Good Resources into Sunk Traps | Mentalab Mind",
  seoDescription: "A human behavior pattern in which an individual or group facing increasingly negative outcomes from a decision nevertheless continues the behavior instead ",
  canonicalUrl: '/mind/decision-making/escalation-of-commitment',
  ogImageUrl: '/images/mind/escalation-of-commitment.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "While the Sunk Cost Fallacy focuses on the irrational honoring of historical costs, Escalation of Commitment specifically involves active redoubling: increasing allocation of future resources to salvage personal reputation. Factors fueling escalation include: (1) Personal responsibility for the original choice; (2) Public visibility of the project; (3) Confirmation bias filtering out negative indicators; (4) The cultural stigma attached to \"quitting\".",
};

export const TOPIC_ESCALATION_OF_COMMITMENT_HINGLISH: MindTopicDetail = {
  ...TOPIC_ESCALATION_OF_COMMITMENT_EN,
  title: "Escalation of Commitment: Doobti Kashti Me Aur Paisa Lagana",
  subtitle: "Apni purani galti ko sahi saabit karne ke chakkar me insaan aur zyada paisa, waqt aur izzat daav par laga deta hai.",
  shortDescription: "Ek aisi aadat jisme jab koi project fail ho raha hota hai, toh log use band karne ke bajaye apne ego ko bachane ke liye aur resource jhonk dete hain.",
  oneLineExplanation: "Galti maan lene ke darr se log chote nuksan ko mahavinash me badal dete hain.",

  summary30s: "1976 me Barry Staw ne Escalation of Commitment explain kiya. Jab hum kisi kaam me pehle se bohot paisa ya mehnat laga chuke hote hain, aur saaf dikh raha hota hai ki wo fail hoga, tab bhi hum use band nahi karte. Hum sochte hain \"thoda aur paisa laga dete hain shayad baat ban jaye\". Sachai yeh hoti hai ki hum project ko nahi, apne ego ko bacha rahe hote hain.",
  coreConcept: "Startups me founders tab tak company band nahi karte jab tak ghar tak na bik jaye. Iska kaaran business nahi, balki yeh darr hota hai ki \"duniya kya kahegi ki main fail ho gaya\". Is trap se nikalne ke liye ek neutral insaan se advice lena zaroori hai.",
  quickTakeaways: [
    "Ego Trap: Hum project ko bachane ke liye nahi, apni shaan bachane ke liye paisa lagate hain",
    "Independent Audit: Faisla lene ka haq unhe dein jinhone project shuru nahi kiya tha",
    "Cut The Loss: Samay par quit karna kamzori nahi, balki akalmandi hai",
    "Pre-Decided Limits: Pehle se tay karein: \"Agar is date tak profit nahi hua toh hum ise band kar denge\"",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_ESCALATION_OF_COMMITMENT_EN,
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

export const TOPIC_ESCALATION_OF_COMMITMENT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_ESCALATION_OF_COMMITMENT_EN,
  hinglish: TOPIC_ESCALATION_OF_COMMITMENT_HINGLISH,
  hi: createLocalizedRecord('hi', "प्रतिबद्धता का विस्तार (Escalation of Commitment): डूबती परियोजना में अतिरिक्त संसाधनों की बर्बादी", "बैरी स्टॉ का अध्ययन जो दर्शाता है कि जब कोई निर्णय स्पष्ट रूप से विफल हो रहा होता है, तब भी लोग अपनी गलती स्वीकार करने और आत्मसम्मान को ठेस पहुँचाने से बचने के लिए उसमें और अधिक धन, समय और प्रतिष्ठा झोंक देते हैं।", [
    "अहंकार की रक्षा में अतिरिक्त संसाधनों की हानि",
    "स्वतंत्र समीक्षकों द्वारा परियोजना का मूल्यांकन",
    "रणनीतिक विराम (Strategic Quitting) का महत्व"
  ]),
  gu: createLocalizedRecord('gu', "એસ્કેલેશન ઓફ કમિટમેન્ટ: નિષ્ફળ યોજનામાં વધુ સંસાધનો વેડફવા", "જ્યારે કોઈ પ્રોજેક્ટ નિષ્ફળ જઈ રહ્યો હોય ત્યારે પણ પોતાની ભૂલ સ્વીકારવાના ડરથી તેમાં વધુ પૈસા અને સમય નાખવાની જીદ.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "एस्कलेशन ऑफ कमिटमेंट: बुडत्या प्रकल्पात आणखी संसाधने ओतणे", "आपला पूर्वीचा निर्णय चुकीचा ठरला हे जगाला मान्य करायला लागू नये म्हणून अयशस्वी कामात अजून जास्त पैसा आणि वेळ वाया घालवण्याची प्रवृत्ती.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "ఎస్కిలేషన్ ఆఫ్ కమిట్‌మెంట్: నష్టపోతున్న ప్రాజెక్ట్‌లో మరింత పెట్టుబడి పెట్టడం", "తమ తప్పును ఒప్పుకోవడానికి ఇష్టపడక, ఇప్పటికే విఫలమైన పనిలో అదనపు డబ్బు మరియు సమయాన్ని వృధా చేసే మొండి వైఖరి.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "ஈடுபாட்டின் தீவிரம்: தோல்வியடையும் திட்டத்தில் மேலும் வளங்களை வீணடித்தல்", "நமது முந்தைய முடிவு தவறு என்று ஒப்புக்கொள்ளத் தயங்கி, நஷ்டமடையும் ஒரு காரியத்தில் மேலும் மேலும் பணத்தையும் நேரத்தையும் கொட்டும் அறியாமை.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಎಸ್ಕೆಲೇಶನ್ ಆಫ್ ಕಮಿಟ್‌ಮೆಂಟ್: ವಿಫಲ ಯೋಜನೆಯಲ್ಲಿ ಇನ್ನಷ್ಟು ಸಂಪನ್ಮೂಲಗಳನ್ನು ಪೋಲು ಮಾಡುವುದು", "ತಮ್ಮ ಹಳೆಯ ತಪ್ಪು ನಿರ್ಧಾರವನ್ನು ಸಮರ್ಥಿಸಿಕೊಳ್ಳಲು ಹೋಗಿ, ಕೈಕೊಡುತ್ತಿರುವ ಪ್ರಾಜೆಕ್ಟ್‌ನಲ್ಲಿ ಇನ್ನಷ್ಟು ಹಣ ಮತ್ತು ಶ್ರಮವನ್ನು ವ್ಯರ್ಥ ಮಾಡುವ ದುರಭ್ಯಾಸ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "എസ്കലേഷൻ ഓഫ് കമ്മിറ്റ്‌മെന്റ്: പരാജയപ്പെടുന്ന സംരംഭത്തിൽ വീണ്ടും പണം മുടക്കൽ", "മുമ്പത്തെ തെറ്റ് സമ്മതിക്കാൻ മടിച്ച്, നഷ്ടത്തിലായ ഒരു കാര്യത്തിലേക്ക് കൂടുതൽ പണവും സമയവും ഒഴുക്കിക്കളയുന്ന മനോഭാവം.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "এসকেলেশন অব কমিটমেন্ট: ডুবন্ত প্রকল্পে আরও সম্পদ ঢালার অন্ধ জেদ", "নিজের পুরোনো ভুল সিদ্ধান্ত ঢাকতে এবং অহংকার বাঁচাতে নিশ্চিত ব্যর্থ কোনো প্রজেক্টে আরও বেশি অর্থ ও সময় নষ্ট করার মানবীয় প্রবণতা।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਐਸਕੇਲੇਸ਼ਨ ਆਫ਼ ਕਮਿਟਮੈਂਟ: ਡੁੱਬਦੇ ਪ੍ਰੋਜੈਕਟ ਵਿੱਚ ਹੋਰ ਪੈਸਾ ਫੂਕਣਾ", "ਆਪਣੀ ਗਲਤੀ ਨਾ ਮੰਨਣ ਦੀ ਜ਼ਿੱਦ ਵਿੱਚ ਕਿਸੇ ਫੇਲ੍ਹ ਹੋ ਰਹੇ ਕੰਮ ਵਿੱਚ ਹੋਰ ਜ਼ਿਆਦਾ ਸਰਮਾਇਆ ਅਤੇ ਸਮਾਂ ਬਰਬਾਦ ਕਰਨ ਦੀ ਆਦਤ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "عہد کی شدت پسندی: ڈوبتے منصوبے میں مزید وسائل جھونکنے کی ضد", "اپنی ابتدائی غلطی تسلیم کرنے کی سبکی سے بچنے کے لیے ناکام منصوبے میں مزید وقت، پیسہ اور ساکھ برباد کرنا۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ଏସ୍କାଲେସନ୍ ଅଫ୍ କମିଟମେଣ୍ଟ: ବିଫଳ ଯୋଜନାରେ ଅଧିକ ସମ୍ବଳ ନଷ୍ଟ କରିବା", "ନିଜର ଭୁଲ୍ ସ୍ୱୀକାର ନକରିବା ପାଇଁ ଏକ କ୍ଷତିଗ୍ରସ୍ତ ପ୍ରକଳ୍ପରେ ଆହୁରି ଅଧିକ ଧନ ଓ ସମୟ ବରବାଦ କରିବାର ଅହଂକାରପୂର୍ଣ୍ଣ ପ୍ରବୃତ୍ତି।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "এছকেলেশ্যন অৱ কমিটমেণ্ট: ডুবন্ত ব্যৱসায়ত অধিক টকা ঢলাৰ অন্ধ মোহ", "পুৰণি ভুল ঢাকিবলৈ আৰু অহংকাৰ বচাবলৈ নিশ্চিতভাৱে ব্যৰ্থ হোৱা কাম এটাত আৰু অধিক ধন-সম্পদ অপচয় কৰাৰ প্ৰৱণতা।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
