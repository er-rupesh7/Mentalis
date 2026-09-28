import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_ACTOR_OBSERVER_IN_RELATIONSHIPS_EN: MindTopicDetail = {
  id: 'actor_observer_in_relationships',
  categoryId: 'relationships_comm',
  slug: 'actor-observer-in-relationships',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 10,
  viewCount: 4000,
  shareCount: 330,
  bookmarkCount: 670,
  title: "Attribution Asymmetry: The Flaw in Couple Explanations",
  subtitle: "Frank Fincham’s relationship attribution research on why we excuse our own mistakes while blaming our partner’s character.",
  shortDescription: "The tendency in intimate relationships to attribute one’s own negative behaviors to temporary situational stress while attributing a partner’s mistakes to deep-seated character flaws.",
  oneLineExplanation: "\"When I snap, it is because I had a hard day; when you snap, it is because you are mean.\"",

  summary30s: "Relationship psychologist Frank Fincham demonstrated that in unhappy relationships, partners suffer from severe attributional asymmetry. If I am late, it is traffic (situational); if you are late, you are selfish and disrespectful (dispositional). This double standard turns minor frictions into chronic character assassinations.",
  coreConcept: "Attribution theory distinguishes between locus of causality (internal vs. external), stability (permanent vs. temporary), and globality (pervasive vs. specific). In distressed couples, negative partner behaviors are attributed to internal, stable, and global character flaws (\"You always ruin everything\"), making forgiveness cognitively impossible.",
  summary60s: "Conversely, in flourishing relationships, partners maintain a \"Generous Attribution Style\": when their partner makes a mistake, they attribute it to external stress (\"They must be overwhelmed with work today\"). When the partner does something wonderful, they credit their core character (\"She is so thoughtful\"). Flipping this attributional filter is the primary therapeutic intervention in marital therapy.",
  quickTakeaways: ["We judge ourselves by our internal good intentions, but judge partners by their external impact","Unhappy couples attribute partner mistakes to permanent character defects (\"You are lazy\")","Happy couples grant situational grace to their partner (\"He had an exhausting shift\")","The antidote is practicing the Benefit of the Doubt before assigning malice"],

  whyItHappens: "We have direct access to our own internal stress, fatigue, and intentions, but only perceive our partner’s external actions.",
  evolutionaryMechanism: "Early detection of defection or disloyalty in pair-bonds was critical for parental investment security.",

  howItWorks: "Partner forgets task -> I evaluate action -> My brain skips situational factors -> Labels partner \"selfish\" -> Resentful attack launched -> Partner defends themselves -> Intimacy deteriorates.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Distressed Attributions vs. Generous Relationship Attributions",
    description: "How cognitive interpretation filters transform identical relationship events.",
    analogySideA: {
      label: "Distressed Attribution Filter",
      detail: "Partner is late -> \"They don’t respect my time because they only care about themselves.\"",
    },
    analogySideB: {
      label: "Generous Attribution Filter",
      detail: "Partner is late -> \"Traffic must be terrible today; let me check if they are okay.\"",
    },
  },

  researchSummary: "Fincham & Bradbury (1992, JPSP) and Bradbury & Fincham (1990) proved that marital distress is strongly mediated by negative attributional patterns, predicting marital dissolution across 10-year longitudinal studies.",
  references: [
    {
      id: 'ref_actor_observer_in_relationships_01',
      title: "Assessing Attributions in Marriage: The Relationship Attribution Measure",
      citation: "Fincham, F. D., & Bradbury, T. N. (1992). Journal of Personality and Social Psychology, 62(3), 457–468.",
      authors: "Fincham, F. D. & Bradbury, T. N.",
      publicationYear: 1992,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1037/0022-3514.62.3.457",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_actor_observer_in_relationships_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Forgotten Anniversary in Ahmedabad",
      narrativeContext: "Dev and Radhika were celebrating their 4th anniversary in Ahmedabad. Dev forgot to book the restaurant. Radhika immediately erupted: \"You never care about me! You are completely selfish and self-absorbed!\" Meanwhile, when Radhika forgot Dev's sister's birthday the previous month, she excused herself: \"I had an insane tax audit deadline.\"",
      biasInAction: "Radhika applied double attribution: she excused her own forgetfulness as situational stress, while labeling Dev’s forgetfulness as a permanent flaw in his character.",
      optimalResponse: "Practice generous attribution: \"Dev, I am hurt that the reservation wasn't made, but I know how exhausted you’ve been with the factory audit. Let’s order in and celebrate tonight.\"",
      reflectionPrompt: "When your partner makes an annoying mistake, is your immediate thought about their situation or about their personality?",
    },
  ],

  examples: [
    {
      id: 'ex_actor_observer_in_relationships_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Forgotten Anniversary in Ahmedabad",
      description: "Dev and Radhika were celebrating their 4th anniversary in Ahmedabad. Dev forgot to book the restaurant. Radhika immediately erupted: \"You never care a...",
      takeaway: "We judge ourselves by our internal good intentions, but judge partners by their external impact",
    },
  ],

  howToRecognize: "Using absolute words like \"You always\" or \"You never\" to turn a single situational oversight into an indictment of your partner's entire character.",
  whereYouEncounterIt: "Chore divisions, punctuality disputes, financial disagreements, and in-law relations.",
  commonMisconceptions: "Myth: \"Generous attribution means tolerating chronic abuse.\" Fact: Generous attribution applies to normal human errors in healthy partners; chronic patterns of deliberate harm require firm boundaries.",
  limitationsAndControversies: "If a partner is actively deceitful or abusive, attributing their behavior to external stress enables toxicity; situational grace requires mutual goodwill.",

  howToRespond: "The Reverse Mirror Technique: Ask yourself: \"If I had made this exact same mistake today, what excuse would I have given myself? Can I offer that same grace to my partner?\"",
  psychologicalDefenses: [{"title":"The Ban on \"Always\" and \"Never\"","instruction":"Purge the words \"You always\" and \"You never\" from your conflict vocabulary; address only the specific incident today."},{"title":"The Generous Hypothesis Rule","instruction":"Before speaking, formulate at least one plausible benevolent explanation for why your partner made the mistake."}],

  practiceQuestions: [
    {
      id: 'pq_actor_observer_in_relationships_01',
      difficulty: 'intermediate',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "Your partner forgot to buy milk on their way home from a 10-hour workday. What represents a generous, healthy attribution?",
      scenarioText: "You are standing in the kitchen frustrated because you wanted evening coffee.",
      explanation: "Attributing the mistake to situational fatigue (\"They had an exhausting shift\") rather than personal disrespect preserves emotional connection.",
      antidoteAdvice: "Give situational grace for honest errors and discuss practical reminders neutrally.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Say: \"You are so lazy and selfish, you never think of anyone but yourself!\"",
          text: "Say: \"You are so lazy and selfish, you never think of anyone but yourself!\"",
          feedbackText: "Incorrect. This attacks their character with a toxic global attribution.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Think: \"They had a grueling 10-hour day and their brain was overloaded. I will order via quick commerce and remind them tomorrow.\"",
          text: "Think: \"They had a grueling 10-hour day and their brain was overloaded. I will order via quick commerce and remind them tomorrow.\"",
          feedbackText: "Correct! This generous attribution protects relationship warmth.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Throw the coffee mug in the sink and refuse to speak to them for the rest of the evening.",
          text: "Throw the coffee mug in the sink and refuse to speak to them for the rest of the evening.",
          feedbackText: "Incorrect. Passive-aggressive punishment destroys intimacy.",
        }
      ],
    },
  ],

  reflectionPrompt: "How would your relationship change if you gave your partner the exact same benefit of the doubt that you give yourself?",
  tags: ['Mentalab Mind', 'relationships_comm'],
  relatedTopics: [],
  seoTitle: `${"Attribution Asymmetry: The Flaw in Couple Explanations"} | Mentalab Mind`,
  seoDescription: "The tendency in intimate relationships to attribute one’s own negative behaviors to temporary situational stress while attributing a partner’s mistakes to deep-seated character flaws.",
  canonicalUrl: '/mind/relationships-comm/actor-observer-in-relationships',
  ogImageUrl: '/images/mind/actor-observer-in-relationships.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Conversely, in flourishing relationships, partners maintain a \"Generous Attribution Style\": when their partner makes a mistake, they attribute it to external stress (\"They must be overwhelmed with work today\"). When the partner does something wonderful, they credit their core character (\"She is so thoughtful\"). Flipping this attributional filter is the primary therapeutic intervention in marital therapy.",
};

export const TOPIC_ACTOR_OBSERVER_IN_RELATIONSHIPS_HINGLISH: MindTopicDetail = {
  ...TOPIC_ACTOR_OBSERVER_IN_RELATIONSHIPS_EN,
  title: "Attribution Asymmetry: Apni Galti Majboori, Partner Ki Fitrat",
  subtitle: "Kyu hum apni galti par kehte hain \"main thaka tha\", par partner ki galti par bolte hain \"tum ho hi aise\".",
  shortDescription: "Frank Fincham ki research: Rishto me double standard rakhna jisme hum partner ke character par attack karte hain.",
  oneLineExplanation: "Main late hua to traffic tha, tum late huye to tum laparwah ho.",
  summary30s: "Fincham ne prove kiya ki tootte huye rishton me log double standard use karte hain. Jab khud se galti ho to kehte hain \"aaj bohot stress tha\", lekin jab partner wahi galti kare to kehte hain \"tumhara character hi kharab hai, tum kabhi kisi ki parwah nahi karte\".",
  coreConcept: "Hum apne dimaag ki majboori jante hain, lekin partner ka sirf bahar ka action dekhte hain. Isliye hum unki galti ko unki \"fitrat\" (disposition) maan lete hain aur apni galti ko \"halat\" (situation). Ise kehte hain Attribution Asymmetry.",
  summary60s: "Khushaal rishton me log apne partner ko \"Benefit of the Doubt\" dete hain: \"Shayad wo thaka hua tha isliye bhool gaya.\" Jabki dukhi rishton me log har choti bhool par partner ke character par attack karte hain (\"Tum hamesha laparwah rehte ho\"). Words like \"Always\" aur \"Never\" rishto me zeher gholte hain.",
  quickTakeaways: ["Hum khud ko intentions se judge karte hain aur partner ko unke actions se","Ladai me \"Tum hamesha aise hi karte ho\" bolna character assassination hai","Partner ko thoda grace aur benefit of the doubt dena mature pyaar ki nishani hai","Single incident par baat karein, unke poore wajood par ilzam mat lagayein"],
  howItWorks: "Partner se galti hui -> Humne uski situation nahi sochi -> Uske character ko dosh diya (\"Tum matlabi ho\") -> Usne defend kiya -> Badi ladai ban gayi.",
  howToRespond: "Reverse Mirror rule: Sochein agar yahi galti maine ki hoti to main kya bahana banata? Wahi maafi partner ko bhi dein.",
  practiceQuestions: [
    {
      ...TOPIC_ACTOR_OBSERVER_IN_RELATIONSHIPS_EN.practiceQuestions[0],
      prompt: "Partner office se aate waqt dahi lana bhool gaya. Healthy attribution ke hisab se aapko kya sochna chahiye?",
      explanation: "Usse thakan aur busy schedule ki bhool samajhna rishte me shanti banaye rakhta hai.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Sochna: \"Isse meri koi parwah nahi hai, yeh hamesha mujhe ignore karta hai.\"",
          text: "Sochna: \"Isse meri koi parwah nahi hai, yeh hamesha mujhe ignore karta hai.\"",
          feedbackText: "Galat. Yeh toxic character blaming hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Sochna: \"Bechaara thak gaya hoga, main Blinkit se manga leta hu, koi badi baat nahi.\"",
          text: "Sochna: \"Bechaara thak gaya hoga, main Blinkit se manga leta hu, koi badi baat nahi.\"",
          feedbackText: "Sahi! Yeh generous attribution rishte ko majboot banata hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Khana banana band kar dena taaki use galti ka ehsaas ho.",
          text: "Khana banana band kar dena taaki use galti ka ehsaas ho.",
          feedbackText: "Galat. Yeh passive-aggressive childishness hai.",
        }
      ],
    },
  ],
  seoTitle: `${"Attribution Asymmetry: Apni Galti Majboori, Partner Ki Fitrat"} | Mentalab Mind`,
  seoDescription: "Frank Fincham ki research: Rishto me double standard rakhna jisme hum partner ke character par attack karte hain.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_ACTOR_OBSERVER_IN_RELATIONSHIPS_EN,
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

export const TOPIC_ACTOR_OBSERVER_IN_RELATIONSHIPS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_ACTOR_OBSERVER_IN_RELATIONSHIPS_EN,
  hinglish: TOPIC_ACTOR_OBSERVER_IN_RELATIONSHIPS_HINGLISH,
  hi: createLocalizedRecord('hi', "संबंधों में आरोपण विषमता (Attribution Asymmetry)", "रिश्तों में अपनी गलतियों को परिस्थितियों का दोष देना परंतु साथी की गलतियों को उसके चरित्र की कमी ठहराने का मनोवैज्ञानिक दोहरा मापदंड।", ["हम स्वयं को इरादों से और दूसरों को कर्मों से आंकते हैं","चरित्र पर हमला करने के बजाय परिस्थिति को समझें","सहानुभूतिपूर्ण दृष्टिकोण संबंधों को बचाता है"]),
  gu: createLocalizedRecord('gu', "સંબંધોમાં બેવડા ધોરણો (Attribution Asymmetry)", "સંબંધોમાં પોતાની ભૂલને સંજોગોનો દોષ આપવો પરંતુ સાથીદારની ભૂલને તેના ખરાબ સ્વભાવનું પરિણામ માનવું.", ["બેવડા ધોરણો છોડો","સાથીદારની મજબૂરી સમજો","સ્વભાવ પર આક્ષેપ ન કરો"]),
  mr: createLocalizedRecord('mr', "नात्यातील दुटप्पी दृष्टिकोन (Attribution Asymmetry)", "स्वतःच्या चुकीला परिस्थिती जबाबदार धरणे पण जोडीदाराच्या चुकीला त्याचा स्वभाव कारणीभूत मानणे.", ["दुटप्पी विचार थांबवा","जोडीदाराला समजून घ्या","स्वभावावर दोषारोप करू नका"]),
  te: createLocalizedRecord('te', "సంబంధాలలో ఆపాదనా అసమానత", "మన తప్పులకు పరిస్థితులను సమర్థించుకుంటూ భాగస్వామి తప్పులకు వారి గుణాన్ని నిందించే ద్వంద్వ వైఖరి.", ["ద్వంద్వ వైఖరిని విడనాడండి","పరిస్థితిని అర్థం చేసుకోండి","వ్యక్తిత్వాన్ని నిందించవద్దు"]),
  ta: createLocalizedRecord('ta', "உறவுகளில் இரட்டை நிலைப்பாடு (Attribution Asymmetry)", "நம் தவறுகளுக்கு சூழ்நிலையை காரணமாகக் கூறிவிட்டு துணையின் தவறுகளுக்கு அவரது குணத்தைக் குறை கூறும் போக்கு.", ["இரட்டை நிலைப்பாட்டை தவிருங்கள்","சூழ்நிலையை புரிந்து கொள்ளுங்கள்","குணத்தை குறை கூறாதீர்கள்"]),
  kn: createLocalizedRecord('kn', "ಸಂಬಂಧಗಳಲ್ಲಿ ದ್ವಂದ್ವ ದೃಷ್ಟಿಕೋನ (Attribution Asymmetry)", "ತನ್ನ ತಪ್ಪಿಗೆ ಸಂದರ್ಭವನ್ನು ದೂಷಿಸಿ ಸಂಗಾತಿಯ ತಪ್ಪಿಗೆ ಅವರ ಗುಣವನ್ನೇ ಹಳಿಯುವ ಮಾನಸಿಕ ಪಕ್ಷಪಾತ.", ["ದ್ವಂದ್ವ ಧೋರಣೆ ಬಿಡಿ","ಸಂದರ್ಭವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ","ವ್ಯಕ್ತಿತ್ವದ ಮೇಲೆ ದಾಳಿ ಮಾಡಬೇಡಿ"]),
  ml: createLocalizedRecord('ml', "ബന്ധങ്ങളിലെ ഇരട്ടത്താപ്പ് മനോഭാവം", "സ്വന്തം തെറ്റുകൾക്ക് സാഹചര്യങ്ങളെ പഴിചാരുകയും പങ്കാളിയുടെ തെറ്റുകൾക്ക് അവരുടെ സ്വഭാവത്തെ കുറ്റപ്പെടുത്തുകയും ചെയ്യുന്ന രീതി.", ["ഇരട്ടത്താപ്പ് ഉപേക്ഷിക്കുക","സാഹചര്യങ്ങൾ മനസ്സിലാക്കുക","സ്വഭാവത്തെ കുറ്റപ്പെടുത്തരുത്"]),
  bn: createLocalizedRecord('bn', "সম্পর্কের পক্ষপাতমূলক মূল্যায়ন", "নিজের ভুলের জন্য পরিস্থিতিকে দায়ী করা কিন্তু সঙ্গীর ভুলের জন্য তার চরিত্রকে দোষারোপ করার দ্বিমুখী নীতি।", ["দ্বিমুখী নীতি ত্যাগ করুন","পরিস্থিতি বোঝার চেষ্টা করুন","ব্যক্তিত্বকে আক্রমণ করবেন না"]),
  pa: createLocalizedRecord('pa', "ਰਿਸ਼ਤਿਆਂ ਵਿੱਚ ਦੋਹਰਾ ਮਾਪਦੰਡ (Attribution Asymmetry)", "ਆਪਣੀ ਗਲਤੀ ਨੂੰ ਹਾਲਾਤਾਂ ਦਾ ਕਸੂਰ ਦੱਸਣਾ ਪਰ ਸਾਥੀ ਦੀ ਗਲਤੀ ਨੂੰ ਉਸਦੇ ਸੁਭਾਅ ਦਾ ਨੁਕਸ ਮੰਨਣਾ।", ["ਦੋਹਰਾ ਮਾਪਦੰਡ ਛੱਡੋ","ਸਾਥੀ ਦੇ ਹਾਲਾਤ ਸਮਝੋ","ਸੁਭਾਅ ਤੇ ਚਿੱਕੜ ਨਾ ਉਛਾਲੋ"]),
  ur: createLocalizedRecord('ur', "رشتوں میں دہرا معیار (Attribution Asymmetry)", "اپنی غلطی کو مجبوری اور حالات کا نتیجہ قرار دینا مگر ساتھی کی غلطی کو اس کی بری فطرت کہنا۔", ["دوہرے معیار سے بچیں","ساتھی کی مجبوری سمجھیں","کردار پر حملہ نہ کریں"]),
  or: createLocalizedRecord('or', "ସମ୍ପର୍କରେ ଦ୍ୱିମୁଖୀ ମୂଲ୍ୟାଙ୍କନ", "ନିଜ ଭୁଲ୍ ପାଇଁ ପରିସ୍ଥିତିକୁ ଦୋଷ ଦେବା କିନ୍ତୁ ସାଥୀଙ୍କ ଭୁଲ୍ ପାଇଁ ତାଙ୍କ ଚରିତ୍ରକୁ ଦାୟୀ କରିବା।", ["ଦ୍ୱିମୁଖୀ ନୀତି ତ୍ୟାଗ କରନ୍ତୁ","ପରିସ୍ଥିତିକୁ ବୁଝିବାକୁ ଚେଷ୍ଟା କରନ୍ତୁ","ସ୍ୱଭାବକୁ ନିନ୍ଦା କରନ୍ତୁ ନାହିଁ"]),
  as: createLocalizedRecord('as', "সম্পৰ্কত দ্বৈত দৃষ্টিভংগী (Attribution Asymmetry)", "নিজৰ ভুলক পৰিস্থিতিৰ দোষ বুলি কোৱা কিন্তু সংগীৰ ভুলক তেওঁৰ চৰিত্ৰৰ দোষ বুলি ভবাৰ মানসিকতা।", ["দ্বৈত নীতি পৰিহাৰ কৰক","পৰিস্থিতিক বুজিবলৈ যত্ন কৰক","চৰিত্ৰক আক্ৰমণ নকৰিব"]),
};
