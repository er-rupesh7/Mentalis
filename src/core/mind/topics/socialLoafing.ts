import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: Social Loafing: The Ringelmann Effect and Free-Riding in Groups
 * Category: social_psychology
 * Academic Grounding: Latané, Williams & Harkins (1979) (10.1037/0022-3514.37.6.822)
 */

export const TOPIC_SOCIAL_LOAFING_EN: MindTopicDetail = {
  id: 'social_loafing',
  categoryId: 'social_psychology',
  slug: 'social-loafing',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 6,
  viewCount: 3860,
  shareCount: 294,
  bookmarkCount: 672,
  title: "Social Loafing: The Ringelmann Effect and Free-Riding in Groups",
  subtitle: "Why individuals exert substantially less physical and mental effort when working in a team than when working alone.",
  shortDescription: "The psychological tendency for individuals to expend less effort on a task when working collectively as part of a group compared to when working alone.",
  oneLineExplanation: "Assuming others in the team will pull the weight, so individual output quietly drops.",

  summary30s: "First discovered in rope-pulling experiments by Max Ringelmann in 1913, Social Loafing shows that as group size increases, individual effort drops dramatically. When people feel their individual contributions cannot be identified, their motivation and energy decrease because accountability is diffused across the collective.",
  coreConcept: "Social loafing is driven by evaluation diffusion and perceived dispensability. In individual work, performance is 100% visible and tied to self-esteem and accountability. In a team without granular individual metrics, members experience the free-rider effect or the sucker effect (withholding effort to avoid being taken advantage of by slackers).",
  summary60s: "In a 1979 landmark study by Bibb Latané and colleagues, participants were asked to shout and clap as loud as possible. When individuals believed they were shouting in a group of six, they produced only one-third of the sound output compared to shouting alone, even when blindfolded and wearing noise-canceling headphones. The drop was completely unconscious and purely psychological.",
  quickTakeaways: [
    "The Ringelmann Curve: Group performance increases at a diminishing rate as individual output siphons off",
    "The Free-Rider Instinct: When rewards are shared equally regardless of input, effort drops",
    "The Sucker Effect: High performers deliberately slow down when they notice peers slacking",
    "Granular Accountability Antidote: Make every individual's output measurable and publicly visible",
  ],

  whyItHappens: "Reduced evaluation apprehension and moral dispersion. When individual contributions cannot be separated from the total pool, social pressure drops and cognitive energy is conserved.",
  evolutionaryMechanism: "In ancestral foraging bands, conserving metabolic calories during shared communal tasks was advantageous as long as the group achieved the minimum baseline threshold.",
  howItWorks: "Group is formed -> Individual roles are left vague -> Output is evaluated only as a collective total -> High performers carry the workload -> Low performers fade into the background -> Overall group efficiency deteriorates.",
  whereYouEncounterIt: "College group projects, corporate brainstorming meetings, open-source pull requests, joint household chores, and committee governance.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Individual Effort vs. Group Dilution",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Solo Accountability (100% Visible)",
      detail: "\"Every line of code and every deliverable is tied directly to my name; I must perform.\"",
    },
    analogySideB: {
      label: "Collective Group (Diffused Output)",
      detail: "\"There are 8 of us on this project; if I don't finish this slide tonight, someone else will handle it.\"",
    },
  },

  researchSummary: "Latané, Williams & Harkins (1979) published \"Many hands make light the work,\" proving that social loafing occurs across cognitive, creative, and physical tasks whenever individual contribution is unidentifiable.",
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
      id: 'scen_social_loafing_01',
      scenarioType: 'indian_context',
      title: "The College Capstone Project in Pune",
      vignette: "A team of five final-year computer science students in Pune is assigned a semester-long project. Rahul and Sneha write 95% of the backend and frontend code. The other three teammates skip meetings, submit plagiarized documentation slides, and promise to \"handle the final presentation.\" At graduation evaluation, the whole team receives an \"A\" grade equally, leaving Rahul and Sneha feeling exploited and burnt out.",
      breakdownAnalysis: "Classic social loafing compounded by the sucker effect. The absence of individual peer-evaluated scorecards allowed three members to free-ride on the high conscientiousness of two students.",
      recommendedAction: "Implement Git commit tracking and peer contribution matrices where 40% of the final score is determined by anonymous intra-team rubric ratings.",
    },
  ],

  examples: [
    {
      id: 'ex_social_loafing_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_social_loafing_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_social_loafing_01',
      scenarioContext: "An IT consultancy in Hyderabad notices that moving developers from individual solo feature branches into a shared 10-person \"general backlog swarm\" resulted in a 35% decrease in overall tickets completed per engineer.",
      question: "Which intervention directly counteracts the core psychological driver of Social Loafing in this team?",
      prompt: "Which intervention directly counteracts the core psychological driver of Social Loafing in this team?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'beginner',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Offering a collective pizza party if the entire 10-person team hits the milestone",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Assigning explicit single-owner tickets and reviewing individual commit velocity in weekly 1-on-1s",
          isCorrect: true,
          explanation: "Social loafing is dissolved when individual contributions are clearly delineated, measurable, and tied to personal accountability rather than hidden behind collective obscurity.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Increasing the size of the team to 15 engineers to handle the ticket volume",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Sending daily motivational emails emphasizing the importance of team spirit",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Visibility dissolves loafing: whenever individual input is identifiable, social loafing drops to zero.",
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
      id: 'ref_social_loafing_01',
      title: "Many hands make light the work: The causes and consequences of social loafing",
      citation: "Latané, B., Williams, K., & Harkins, S. (1979). Journal of Personality and Social Psychology, 37(6), 822–832.",
      authors: "Latané, Williams & Harkins",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1037/0022-3514.37.6.822",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Social Psychology', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'bystander_effect', slug: 'bystander-effect', title: 'Bystander Effect', relationshipType: 'amplified_by' },
    { topicId: 'social_proof', slug: 'social-proof', title: 'Social Proof', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Social Loafing: The Ringelmann Effect and Free-Riding in Groups | Mentalab Mind",
  seoDescription: "The psychological tendency for individuals to expend less effort on a task when working collectively as part of a group compared to when working alone.",
  canonicalUrl: '/mind/social-psychology/social-loafing',
  ogImageUrl: '/images/mind/social-loafing.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Social loafing is driven by evaluation diffusion and perceived dispensability. In individual work, performance is 100% visible and tied to self-esteem and accountability. In a team without granular individual metrics, members experience the free-rider effect or the sucker effect (withholding effort to avoid being taken advantage of by slackers).",
};

export const TOPIC_SOCIAL_LOAFING_HINGLISH: MindTopicDetail = {
  ...TOPIC_SOCIAL_LOAFING_EN,
  title: "Social Loafing: Team Me Kaam Chori Aur Free-Riding Ka Psychology",
  subtitle: "Jab log akele kaam karte hain toh poori jaan lagate hain, par group me aate hi effort kyu kam ho jata hai?",
  shortDescription: "Group me kaam karte waqt individual mehnat ka achanak kam ho jana kyunki lagta hai ki koi aur sambhal lega.",
  oneLineExplanation: "Bheed me chupkar aaram karna: \"Baaki log toh kar hi rahe hain, mere akele se kya farak padega.\"",

  summary30s: "1913 me Max Ringelmann ne dekha ki rassi kheenchne ke game me akele aadmi ne jitni taqat lagayi, 8 logo ke group me har ek ki taqat aadhe se bhi kam reh gayi. Ise Social Loafing kehte hain: jab hamari akele ki mehnat track nahi hoti, toh dimaag bina bataye energy bachana shuru kar deta hai.",
  coreConcept: "Social loafing ke do mukhya kaaran hote hain: Free-rider effect (doosro ki mehnat par credit lena) aur Sucker effect (jab hard workers dekhte hain ki baaki aaram kar rahe hain, toh wo bhi apna effort gira dete hain).",
  quickTakeaways: [
    "Team ka size jitna bada hoga, har insaan ka individual effort utna hi kam hoga",
    "Free-Rider Problem: Jab credit sabko barabar milta hai, toh log shortcut dhundte hain",
    "Sucker Effect: Mehanti log bhi dheere-dheere kaam karna kam kar dete hain",
    "Solution: Har bande ka kaam alag aur clearly visible hona chahiye",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_SOCIAL_LOAFING_EN,
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

export const TOPIC_SOCIAL_LOAFING: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_SOCIAL_LOAFING_EN,
  hinglish: TOPIC_SOCIAL_LOAFING_HINGLISH,
  hi: createLocalizedRecord('hi', "सामाजिक अकर्मण्यता (Social Loafing): समूह में व्यक्तिगत प्रयास की कमी", "जब व्यक्ति किसी समूह में मिलकर काम करता है, तो वह अकेले काम करने की तुलना में काफी कम मेहनत और ऊर्जा खर्च करता है। इसे रिंगेलमैन प्रभाव कहा जाता है।", [
    "समूह में उत्तरदायित्व का बिखराव",
    "व्यक्तिगत योगदान की माप आवश्यक",
    "मुफ्तखोरी की प्रवृत्ति से बचाव"
  ]),
  gu: createLocalizedRecord('gu', "સોશિયલ લોફિંગ: જૂથમાં વ્યક્તિગત પ્રયાસોમાં ઘટાડો", "જ્યારે લોકો જૂથમાં કામ કરે છે ત્યારે વ્યક્તિગત પ્રયાસો આપમેળે ઘટી જાય છે કારણ કે જવાબદારી વહેંચાઈ જાય છે.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "सोशल लोफिंग: समूहात काम करताना वैयक्तिक प्रयत्नांची चोरी", "एकट्याने काम करताना जितकी मेहनत घेतली जाते, तितकी समूहात घेतली जात नाही. वैयक्तिक मोजमाप नसल्याने ही प्रवृत्ती वाढते.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "సోషల్ లోఫింగ్: సమూహంలో వ్యక్తిగత ప్రయత్నం తగ్గడం", "వ్యక్తిగతంగా కాకుండా బృందంలో పనిచేస్తున్నప్పుడు శ్రమను తగ్గించే మానసిక ప్రవృత్తి.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "சமூக சோம்பல்: குழுவில் உழைப்பைக் குறைக்கும் உளவியல்", "தனியாக உழைக்கும் போது காட்டும் தீவிரத்தை குழுவில் இருக்கும் போது மக்கள் காட்டுவதில்லை.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಸಾಮಾಜಿಕ ಸೋಮಾರಿತನ: ಗುಂಪಿನಲ್ಲಿ ವೈಯಕ್ತಿಕ ಶ್ರಮ ಕುಸಿಯುವ ಪ್ರವೃತ್ತಿ", "ಗುಂಪಿನಲ್ಲಿ ಕೆಲಸ ಮಾಡುವಾಗ ಪ್ರತಿಯೊಬ್ಬರ ವೈಯಕ್ತಿಕ ಪರಿಶ್ರಮ ಕಡಿಮೆಯಾಗುವ ಮಾನಸಿಕ ವಿದ್ಯಮಾನ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "സോഷ്യൽ ലോഫിംഗ്: കൂട്ടായ്മയിൽ അധ്വാനം കുറയ്ക്കുന്ന സ്വഭാവം", "ഗ്രൂപ്പിൽ പ്രവർത്തിക്കുമ്പോൾ വ്യക്തിഗതമായ പരിശ്രമം കുറയുന്ന പ്രവണതയാണിത്.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "সোশ্যাল লোফিং: দলবদ্ধ কাজে ব্যক্তিগত প্রচেষ্টার ঘাটতি", "দলে কাজ করার সময় প্রত্যেকে নিজের সম্পূর্ণ পরিশ্রম না দিয়ে অন্যদের ওপর নির্ভর করার প্রবণতা।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਸੋਸ਼ਲ ਲੋਫਿੰਗ: ਸਮੂਹ ਵਿੱਚ ਨਿੱਜੀ ਮਿਹਨਤ ਘਟਾਉਣ ਦੀ ਪ੍ਰਵਿਰਤੀ", "ਇਕੱਲੇ ਕੰਮ ਕਰਨ ਦੇ ਮੁਕਾਬਲੇ ਗਰੁੱਪ ਵਿੱਚ ਵਿਅਕਤੀ ਦਾ ਯੋਗਦਾਨ ਘੱਟ ਜਾਣ ਦੀ ਮਨੋਵਿਗਿਆਨਕ ਆਦਤ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "سوشل لوفنگ: گروہ میں انفرادی محنت کی کمی", "جب لوگ گروہ میں کام کرتے ہیں تو وہ انفرادی سطح کے مقابلے میں کم محنت اور توجہ صرف کرتے ہیں۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ସୋସିଆଲ୍ ଲୋଫିଂ: ଗୋଷ୍ଠୀଗତ କାର୍ଯ୍ୟରେ ବ୍ୟକ୍ତିଗତ ପରିଶ୍ରମ ହ୍ରାସ", "ଏକାକୀ କାମ କରିବା ତୁଳନାରେ ଗୋଷ୍ଠୀରେ କାମ କଲାବେଳେ ଲୋକେ କମ୍ ଶ୍ରମ ପ୍ରୟୋଗ କରିବାର ମାନସିକତା।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "ছচিয়েল লোফিং: দলীয় কামত ব্যক্তিগত পৰিশ্ৰম হ্ৰাস পোৱাৰ মানসিকতা", "দলত কাম কৰাৰ সময়ত ব্যক্তিগত দায়িত্ব এৰাই চলি কম পৰিশ্ৰম কৰাৰ মানসিক প্ৰৱণতা।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
