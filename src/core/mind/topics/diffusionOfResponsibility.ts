import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Psychology Track
 * Topic: Diffusion of Responsibility: The Dilution of Moral Duty in Groups
 * Category: social_psychology
 * Academic Grounding: Darley & Latané (1968) (10.1037/0022-3514.8.4.377)
 */

export const TOPIC_DIFFUSION_OF_RESPONSIBILITY_EN: MindTopicDetail = {
  id: 'diffusion_of_responsibility',
  categoryId: 'social_psychology',
  slug: 'diffusion-of-responsibility',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 12,
  viewCount: 4520,
  shareCount: 378,
  bookmarkCount: 804,
  title: "Diffusion of Responsibility: The Dilution of Moral Duty in Groups",
  subtitle: "Why the psychological weight of duty shrinks as group size expands, leading to collective neglect and moral disengagement.",
  shortDescription: "A sociopsychological phenomenon whereby a person is less likely to take responsibility for action or inaction when others are present.",
  oneLineExplanation: "When everyone is responsible, nobody feels responsible.",

  summary30s: "First formulated by Darley and Latané in 1968, Diffusion of Responsibility explains why individuals feel their personal moral obligation decrease in proportion to the number of people around them. If an urgent task belongs to a 10-person team, each member feels only 10% of the burden to act, often resulting in complete collective paralysis.",
  coreConcept: "Moral accountability requires focused cognitive ownership. When an individual is alone, 100% of the blame for failure rests squarely on their shoulders. When in a group, the expected psychological penalty of inaction is divided by the number of witnesses (1/N). This fosters \"moral disengagement,\" where individuals tell themselves: \"Someone more qualified or senior will handle this.\"",
  summary60s: "Bandura (1999) expanded this to corporate and military contexts. When decisions are fragmented into small administrative sub-tasks across bureaucratic committees, no single individual feels moral culpability for destructive outcomes. The executioner blames the judge; the judge blames the law; the lawmaker blames the electorate.",
  quickTakeaways: [
    "The 1/N Psychological Rule: Felt moral obligation shrinks inversely with group size",
    "Bureaucratic Camouflage: Complex committees disperse blame, allowing unethical actions to pass without individual guilt",
    "The Open-Channel Paralysis: Asking a group \"Can someone fix this?\" guarantees delays; naming one owner guarantees action",
    "Single-Threaded Ownership: Assign exactly one name to every decision and action item",
  ],

  whyItHappens: "Shared consequence expectation. The perceived social and moral consequences of failing to act are psychologically distributed across all witnesses.",
  evolutionaryMechanism: "Diffusing blame within an ancestral hunting pack protected individual rank and avoided concentrated tribal retribution.",
  howItWorks: "Urgent situation appears -> Witness notes presence of peers -> Calculates: \"Blame will be shared by all 20 of us\" -> Personal guilt drops below action threshold -> Complete inaction ensues.",
  whereYouEncounterIt: "Broadcast emails with 50 people in CC, group chat requests, medical ward handovers, compliance auditing committees, and public road accidents.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Felt Responsibility vs. Group Headcount",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Single Assigned Owner (100% Duty)",
      detail: "\"Rohan is accountable for running the database backup at 2 AM tonight.\"",
    },
    analogySideB: {
      label: "Diffused Collective (0% Felt Duty)",
      detail: "\"The infrastructure team should ensure backups run smoothly whenever possible.\"",
    },
  },

  researchSummary: "Darley & Latané (1968) demonstrated that bystander intervention time increased linearly with perceived group size, confirming moral dilution.",
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
      id: 'scen_diffusion_of_responsibility_01',
      scenarioType: 'indian_context',
      title: "The Broken Payment Gateway at a Bengaluru Startup",
      vignette: "On a busy Saturday evening, an e-commerce startup in Bengaluru experiences a critical payment gateway outage. The automated alert fires into a public Slack channel with 450 engineers: \"URGENT: Payments failing at 90% rate!\" For four straight hours, engineers see the alert, assume the dedicated payments team or an on-call DevOps engineer is already debugging, and continue scrolling. Over ₹1.2 crores in transactions are lost before the CEO directly calls one engineer by name on mobile.",
      breakdownAnalysis: "Classic diffusion of responsibility. The public alert to 450 people meant nobody felt individually responsible. Each engineer felt only 1/450th of the guilt.",
      recommendedAction: "Never broadcast emergencies to groups without automated single-threaded on-call escalations (PagerDuty alerts routed directly to ONE person with a 15-minute phone buzzer).",
    },
  ],

  examples: [
    {
      id: 'ex_diffusion_of_responsibility_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_diffusion_of_responsibility_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_diffusion_of_responsibility_01',
      scenarioContext: "A project manager in Hyderabad sends an email to 25 stakeholders: \"Can someone please update the client slide deck before tomorrow morning's meeting?\" The next morning, the deck is completely untouched.",
      question: "Which procedural adjustment best counteracts the Diffusion of Responsibility that caused this failure?",
      prompt: "Which procedural adjustment best counteracts the Diffusion of Responsibility that caused this failure?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'beginner',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Sending the exact same email marked with HIGH IMPORTANCE and red exclamation points",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Assigning the task to one specific individual: \"Ananya, please own updating slides 4–8 by 8 PM tonight\"",
          isCorrect: true,
          explanation: "Directly naming one specific individual assigns 100% of the moral and professional responsibility, completely bypassing diffusion.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Adding 10 more stakeholders to the CC line so more people see the request",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Offering a collective team praise shoutout on LinkedIn if the deck gets completed",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Shared responsibility is no responsibility: assign singular ownership to every critical action.",
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
      id: 'ref_diffusion_of_responsibility_01',
      title: "Bystander intervention in emergencies: Diffusion of responsibility",
      citation: "Darley, J. M., & Latané, B. (1968). Journal of Personality and Social Psychology, 8(4), 377–383.",
      authors: "Darley & Latané",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1037/0022-3514.8.4.377",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Social Psychology', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'bystander_effect', slug: 'bystander-effect', title: 'The Bystander Effect', relationshipType: 'amplified_by' },
    { topicId: 'social_loafing', slug: 'social-loafing', title: 'Social Loafing', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Diffusion of Responsibility: The Dilution of Moral Duty in Groups | Mentalab Mind",
  seoDescription: "A sociopsychological phenomenon whereby a person is less likely to take responsibility for action or inaction when others are present.",
  canonicalUrl: '/mind/social-psychology/diffusion-of-responsibility',
  ogImageUrl: '/images/mind/diffusion-of-responsibility.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Moral accountability requires focused cognitive ownership. When an individual is alone, 100% of the blame for failure rests squarely on their shoulders. When in a group, the expected psychological penalty of inaction is divided by the number of witnesses (1/N). This fosters \"moral disengagement,\" where individuals tell themselves: \"Someone more qualified or senior will handle this.\"",
};

export const TOPIC_DIFFUSION_OF_RESPONSIBILITY_HINGLISH: MindTopicDetail = {
  ...TOPIC_DIFFUSION_OF_RESPONSIBILITY_EN,
  title: "Diffusion of Responsibility: Jab Zimmedari Bheed Me Gayab Ho Jati Hai",
  subtitle: "Jab sabki zimmedari hoti hai, toh koi bhi aage nahi aata kyunki har koi sochta hai koi aur kar dega.",
  shortDescription: "Bheed me har insaan ka apna moral duty kam mehsoos karna kyunki wo sochta hai ki bojh sab par bat gaya hai.",
  oneLineExplanation: "Jab sab zimmedar hote hain, toh aslyat me koi bhi zimmedar nahi hota.",

  summary30s: "1968 me Darley aur Latané ne dekha ki agar 100 logo ke WhatsApp group me poocho \"Koyi client ki file send karega?\", toh koi reply nahi karta. Har koi sochta hai: \"Bohot log hain, koi aur bhej dega.\" Par agar aap kisi ek bande ka naam lekar pucho: \"Rahul, file bhejo\", toh wo 2 minute me bhej deta hai. Ise kehte hain Diffusion of Responsibility.",
  coreConcept: "Jab koi kaam akele bande ko diya jata hai, toh 100% credit ya blame uska hota hai. Par bheed me blame 1/N hisso me bat jata hai, jisse guilt khatam ho jata hai.",
  quickTakeaways: [
    "The 1/N Rule: Bheed jitni badi hogi, zimmedari ka ehsaas utna hi kam hoga",
    "Slack/Group Trap: Open group me emergency daalna bekaar hai; naam le kar mention karo",
    "Bureaucracy Ka Khel: Bade offices me har koi doosre department par ungli uthata hai",
    "Rule: Hamesha ek task ka sirf ek hi single owner hona chahiye",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_DIFFUSION_OF_RESPONSIBILITY_EN,
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

export const TOPIC_DIFFUSION_OF_RESPONSIBILITY: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_DIFFUSION_OF_RESPONSIBILITY_EN,
  hinglish: TOPIC_DIFFUSION_OF_RESPONSIBILITY_HINGLISH,
  hi: createLocalizedRecord('hi', "उत्तरदायित्व का बिखराव (Diffusion of Responsibility): सामूहिकता में कर्तव्य का विलोपन", "जब किसी आपातकालीन स्थिति या कार्य में अनेक लोग उपस्थित होते हैं, तो प्रत्येक व्यक्ति अपने व्यक्तिगत उत्तरदायित्व को कम महसूस करता है, जिससे कोई भी कार्रवाई नहीं करता।", [
    "सामूहिकता में उत्तरदायित्व शून्य",
    "एकल स्वामित्व का सिद्धांत",
    "सीधा और व्यक्तिगत आवंटन अनिवार्य"
  ]),
  gu: createLocalizedRecord('gu', "જવાબદારીનું વિભાજન: જૂથમાં કર્તવ્યબોધનો ઘટાડો", "જ્યારે કોઈ કામ ઘણા લોકોને સોંપવામાં આવે છે, ત્યારે દરેક વ્યક્તિ માને છે કે અન્ય કોઈ તે કરશે, જેના કારણે કોઈ પગલાં લેવાતા નથી.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "जबाबदारीचे विकेंद్రీकरण: समूहात वैयक्तिक कर्तव्याचा विसर", "जेव्हा सर्वांची जबाबदारी असते, तेव्हा प्रत्यक्षात कोणाचीच जबाबदारी नसते. कामाचे वाटप एकाच व्यक्तीकडे असणे गरजेचे आहे.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "బాధ్యత విస్తరణ: సమూహంలో కర్తవ్య భావన తగ్గడం", "ఎక్కువ మంది ఉన్నప్పుడు ప్రతి ఒక్కరూ తమ వ్యక్తిగత బాధ్యతను మరచిపోయి ఇతరులపై ఆధారపడే పరిస్థితి.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "பொறுப்புப் பரவல்: குழுவில் குறையும் தார்மீகக் கடமை", "பலர் இருக்கும் இடத்தில் ஒவ்வொருவரும் தங்கள் பொறுப்பைக் குறைவாக உணர்வதால், இறுதியில் எவரும் செயல்படாமல் போகும் நிலை.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಜವಾಬ್ದಾರಿಯ ಪ್ರಸರಣ: ಗುಂಪಿನಲ್ಲಿ ಕರ್ತವ್ಯದ ಕ್ಷೀಣತೆ", "ಎಲ್ಲರಿಗೂ ಜವಾಬ್ದಾರಿ ಇದ್ದಾಗ ಯಾರೊಬ್ಬರೂ ಅದನ್ನು ಸ್ವೀಕರಿಸುವುದಿಲ್ಲ. ಪ್ರತಿಯೊಂದು ಕಾರ್ಯಕ್ಕೂ ಒಬ್ಬನೇ ಮಾಲೀಕನಿರಬೇಕು.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "ഉത്തരവാദിത്ത വിഭജനം: കൂട്ടായ്മയിൽ ഉത്തരവാദിത്തബോധം കുറയുന്ന അവസ്ഥ", "ധാരാളം ആളുകൾ ഉള്ളപ്പോൾ ആരും സ്വയം മുന്നോട്ട് വരാതിരിക്കുകയും മറ്റുള്ളവർ ചെയ്യുമെന്ന് കരുതുകയും ചെയ്യുന്ന പ്രവണത.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "দায়িত্বের বিস্তারণ: দলগত উপস্থিতিতে ব্যক্তিগত কর্তব্যের অবক্ষয়", "সবার দায়িত্ব মানে কারও দায়িত্ব নয়—দলে অনেকে থাকলে প্রত্যেকেই অন্যের ওপর ভরসা করে নিষ্ক্রিয় থাকে।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਜ਼ਿੰਮੇਵਾਰੀ ਦਾ ਖਿਲਾਰਾ: ਭੀੜ ਵਿੱਚ ਨਿੱਜੀ ਫਰਜ਼ ਦਾ ਗਾਇਬ ਹੋਣਾ", "ਜਦੋਂ ਕੰਮ ਸਾਰਿਆਂ ਦਾ ਹੁੰਦਾ ਹੈ, ਤਾਂ ਕੋਈ ਵੀ ਅੱਗੇ ਨਹੀਂ ਆਉਂਦਾ ਕਿਉਂਕਿ ਹਰ ਕੋਈ ਦੂਜੇ ਉੱਤੇ ਆਸ ਲਗਾਈ ਬੈਠਾ ਹੁੰਦਾ ਹੈ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "ذمہ داری کا پھیلاؤ: ہجوم میں انفرادی فرض کا کم ہو جانا", "جب سب کی مشترکہ ذمہ داری ہو تو درحقیقت کوئی بھی ذمہ داری قبول نہیں کرتا اور کام رک جاتا ہے۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ଦାୟିତ୍ୱର ବିଭାଜନ: ଗୋଷ୍ଠୀରେ ବ୍ୟକ୍ତିଗତ କର୍ତ୍ତବ୍ୟବୋଧ ହ୍ରାସ", "ଯେତେବେଳେ ସମସ୍ତଙ୍କର ଦାୟିତ୍ୱ ଥାଏ, ସେତେବେଳେ କେହି ଜଣେ ହେଲେ ନିଜ ତରଫରୁ କାର୍ଯ୍ୟ କରିବାକୁ ଆଗେଇ ଆସନ୍ତି ନାହିଁ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "দায়িত্বৰ বিস্তাৰণ: দলীয় পৰিৱেশত কৰ্তব্যবোধ হ্ৰাস", "সকলোৰে দায়িত্ব মানে কাৰো দায়িত্ব নহয়—মানুহ বেছি হ’লে প্রত্যেকেই আনৰ ওপৰত আশা কৰি নিষ্ক্ৰিয় হৈ ৰয়।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
