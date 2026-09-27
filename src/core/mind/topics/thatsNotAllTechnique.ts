import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Persuasion & Influence Track
 * Topic: The That's-Not-All Technique: Sweetening the Deal to Trigger Reciprocity
 * Category: persuasion_influence
 * Academic Grounding: Jerry M. Burger (1986) (10.1037/0022-3514.51.2.277)
 */

export const TOPIC_THATS_NOT_ALL_TECHNIQUE_EN: MindTopicDetail = {
  id: 'thats_not_all_technique',
  categoryId: 'persuasion_influence',
  slug: 'thats-not-all-technique',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 15,
  viewCount: 4850,
  shareCount: 420,
  bookmarkCount: 870,
  title: "The That's-Not-All Technique: Sweetening the Deal to Trigger Reciprocity",
  subtitle: "The persuasion tactic where an initial offer is immediately sweetened with an extra bonus or price discount before the customer can respond.",
  shortDescription: "A compliance procedure in which an offer is made, but before the target can respond, the persuader adds a bonus feature or lowers the price.",
  oneLineExplanation: "Offer the product, pause for a second, and shout \"Wait! That's not all, you also get this free!\"—and conversion doubles.",

  summary30s: "First empirically investigated in 1986 by Jerry M. Burger, the That's-Not-All Technique (TNA) is the backbone of late-night infomercials and festive bazaar shopping. A salesperson presents a product at a price, pauses momentarily, and before the customer can evaluate or decline, sweetens the pot: \"And if you buy right now, I will throw in this extra accessory completely free!\"",
  coreConcept: "TNA works through two simultaneous cognitive mechanisms: (1) Norm of Reciprocity (the bonus feels like an unsolicited personal gift from the seller, triggering psychological pressure to repay the kindness by buying); (2) Perceptual Anchoring (the customer anchors on the initial baseline price, perceiving the bonus item as pure free surplus utility rather than a bundled package).",
  summary60s: "In Burger's classic bake sale experiment, cupcakes were placed on a table. In the control group, customers were told that a cupcake plus two cookies cost 75 cents; 40% purchased the bundle. In the TNA group, customers were told that a cupcake cost 75 cents—and then the seller paused and added: \"And that includes two free cookies as well!\" With identical prices and identical items, purchase rates skyrocketed from 40% to 73%.",
  quickTakeaways: [
    "The Unsolicited Bonus Effect: An add-on presented as an impromptu gift triggers reciprocity far more than a pre-bundled package",
    "The Value Anchor: Customers evaluate the bonus against the baseline price as \"free money\"",
    "The Bundling Illusion: Recognize that sellers price the total bundle in advance; the \"free\" item was never free",
    "The Analytical Pause: When a deal is sweetened, mentally unbundle the items and ask: \"Would I pay for this bonus separately?\"",
  ],

  whyItHappens: "Reciprocity impulse and perceived bargaining victory. The customer feels they witnessed a spontaneous price concession.",
  evolutionaryMechanism: "In ancestral trade bartering, receiving unexpected bonus goods from a trading partner cemented reciprocal trade pacts.",
  howItWorks: "Product presented at baseline price -> Brief hesitation -> Seller spontaneously adds bonus or drops price -> Target perceives gift -> Reciprocity triggers -> Purchase completed.",
  whereYouEncounterIt: "Teleshopping infomercials, street market shopping, software SaaS upsells (\"Sign up today and get 3 extra seats free\"), and festive appliance bundles.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Static Bundle vs. Dynamic \"That's-Not-All\" Sequence",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Static Pre-Packaged Bundle (40% Buy)",
      detail: "\"This laptop package includes a wireless mouse and laptop backpack for ₹55,000.\"",
    },
    analogySideB: {
      label: "That's-Not-All Dynamic Sweetener (73% Buy)",
      detail: "\"This laptop is ₹55,000. But wait! Buy right now, and I will throw in a wireless mouse and premium backpack for free!\"",
    },
  },

  researchSummary: "Jerry M. Burger (1986) published \"Increasing compliance by improving the deal: The that's-not-all technique\" in JPSP.",
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
      id: 'scen_thats_not_all_technique_01',
      scenarioType: 'indian_context',
      title: "The Diwali Consumer Electronics Bazaar in Hyderabad",
      vignette: "Kavita visits an electronics mega-store in Banjara Hills, Hyderabad, to buy a 55-inch smart television. The price tag is ₹48,000. While Kavita is inspecting the screen, the store manager approaches: \"Madam, this TV is ₹48,000. But since you visited on Dhanteras, if you billing today, I will personally add a 2.1 channel Dolby soundbar and a 2-year extended screen warranty worth ₹12,000 completely free of cost!\" Delighted by this impromptu windfall, Kavita purchases the TV immediately, telling her husband: \"The manager was so generous, he gifted us a ₹12,000 soundbar!\"",
      breakdownAnalysis: "A textbook real-world demonstration of the That's-Not-All technique. The store had negotiated the soundbar bundle with the manufacturer weeks prior. Presenting it dynamically as a spontaneous personal gift triggered intense reciprocity and perceived surplus value.",
      recommendedAction: "Deconstruct the bundle: search online for the standalone market price of each item and decide if the total package price matches competitive market value.",
    },
  ],

  examples: [
    {
      id: 'ex_thats_not_all_technique_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_thats_not_all_technique_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_thats_not_all_technique_01',
      scenarioContext: "A software SaaS company sells a project management tool for ₹2,000/month. On the checkout page, before users click away, a popup appears: \"Wait! Complete your signup in the next 10 minutes and get our AI Task Automator (worth ₹1,500/month) absolutely free forever!\"",
      question: "Which persuasion technique is the SaaS company deploying to maximize checkout conversion?",
      prompt: "Which persuasion technique is the SaaS company deploying to maximize checkout conversion?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'beginner',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "The door-in-the-face technique by demanding an extreme fee",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "The that's-not-all technique by dynamically sweetening the offer before the user can abandon the cart, triggering perceived gift reciprocity",
          isCorrect: true,
          explanation: "The that's-not-all technique sweetens an existing offer with an immediate bonus feature before refusal occurs, converting perceived extra value into purchase momentum.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Social loafing across software developers",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "The sleeper effect regarding software bugs",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "There is no such thing as a free bonus: always evaluate the total price against what you actually need.",
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
      id: 'ref_thats_not_all_technique_01',
      title: "Increasing Compliance by Improving the Deal: The That's-Not-All Technique",
      citation: "Burger, J. M. (1986). Increasing compliance by improving the deal: The that's-not-all technique. Journal of Personality and Social Psychology, 51(2), 277–283.",
      authors: "Jerry M. Burger",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1037/0022-3514.51.2.277",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Persuasion & Influence', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'reciprocity_principle', slug: 'reciprocity-principle', title: 'The Reciprocity Principle', relationshipType: 'amplified_by' },
    { topicId: 'anchoring_effect', slug: 'anchoring-effect', title: 'The Anchoring Effect', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "The That's-Not-All Technique: Sweetening the Deal to Trigger Reciprocity | Mentalab Mind",
  seoDescription: "A compliance procedure in which an offer is made, but before the target can respond, the persuader adds a bonus feature or lowers the price.",
  canonicalUrl: '/mind/persuasion-and-influence/thats-not-all-technique',
  ogImageUrl: '/images/mind/thats-not-all-technique.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "TNA works through two simultaneous cognitive mechanisms: (1) Norm of Reciprocity (the bonus feels like an unsolicited personal gift from the seller, triggering psychological pressure to repay the kindness by buying); (2) Perceptual Anchoring (the customer anchors on the initial baseline price, perceiving the bonus item as pure free surplus utility rather than a bundled package).",
};

export const TOPIC_THATS_NOT_ALL_TECHNIQUE_HINGLISH: MindTopicDetail = {
  ...TOPIC_THATS_NOT_ALL_TECHNIQUE_EN,
  title: "The That's-Not-All Technique: \"Rukiye! Iske Sath Yeh Bhi Free Milega\"",
  subtitle: "Offer dete hi turant bolna \"Ruko, baat yahi khatam nahi hui, iske sath yeh gift bhi free hai\"—isse customer ko lagta hai uski lottery lag gayi.",
  shortDescription: "Ek aisi sales technique jisme deal offer karne ke turant baad ek extra bonus ya discount jod diya jata hai taaki deal irresistible lagne lage.",
  oneLineExplanation: "₹100 me dono cheezein bechne ke bajaye bolo: \"₹100 me yeh lo, aur doosra meri taraf se free!\"",

  summary30s: "1986 me Jerry Burger ne That's-Not-All technique prove ki. Teleshopping channels (jaise Naaptol) isi par chalte hain: \"Yeh knife set ₹1,000 ka hai... par rukiye! Abhi call karein toh yeh chopping board aur scissors bilkul free!\". Research dikhati hai ki agar pehle se dono cheezein bundle me becho toh 40% log lete hain, par agar beech me \"free gift\" bolkar add karo toh 73% log khareed lete hain.",
  coreConcept: "Customer ko lagta hai ki seller ne uspar ehsaan kiya hai ya spontaneous concession diya hai. Is reciprocity ke chakkar me insaan wo cheez khareed leta hai jiski use asal me zaroorat bhi nahi hoti.",
  quickTakeaways: [
    "The Free Gift Illusion: Koi bhi cheez free nahi hoti, price pehle se total bundle me juda hota hai",
    "Reciprocity Trigger: Bonus sunte hi dimaag logic chhod kar emotional obligation me aa jata hai",
    "Unbundle Karein: Har item ka alag price check karein aur sochein \"Kya main ise alag se khareedta?\"",
    "Teleshopping Trap: \"Abhi call karein aur paayein free\" sunte hi 10 minute ka pause lein",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_THATS_NOT_ALL_TECHNIQUE_EN,
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

export const TOPIC_THATS_NOT_ALL_TECHNIQUE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_THATS_NOT_ALL_TECHNIQUE_EN,
  hinglish: TOPIC_THATS_NOT_ALL_TECHNIQUE_HINGLISH,
  hi: createLocalizedRecord('hi', "यही सब कुछ नहीं तकनीक (That's-Not-All Technique): अतिरिक्त लाभ का सम्मोहन", "जैरी बर्गर का अध्ययन जो यह सिद्ध करता है कि किसी प्रारंभिक प्रस्ताव पर ग्राहक द्वारा विचार करने के दौरान ही विक्रेता द्वारा तुरंत कोई अतिरिक्त उपहार (Bonus) या छूट जोड़ देने से ग्राहक को व्यक्तिगत रियायत का अनुभव होता है और बिक्री की संभावना लगभग दोगुनी हो जाती है।", [
    "अयाचित उपहार से पारस्परिकता की भावना (Reciprocity)",
    "मूल्य लंगर (Anchoring) और अधिशेष का भ्रम",
    "बंडल से अलग कर वास्तविक मूल्य की गणना"
  ]),
  gu: createLocalizedRecord('gu', "ધેટ્સ-નોટ-ઓલ ટેકનિક: \"આટલું જ નહીં, સાથે આ પણ ફ્રી\"નો મોહ", "સોદો નક્કી કરતી વખતે તરત જ \"સાથે આ ગિફ્ટ પણ તદ્દન મફત\" કહીને ગ્રાહકને મોહી લેવાની અને ખરીદી કરાવવાની અકસીર રીત.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "दॅट्स-नॉट-ऑल तंत्र: \"अजून संपलेलं नाही, हेही मोफत मिळेल\" चे आमिष", "मूळ किमतीतच एखादी गोष्ट विकताना ती मोफत भेट म्हणून दिल्याचा आभास निर्माण करून ग्राहकाची खरेदीची तयारी वाढवणे.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "దట్స్-నాట్-ఆల్ టెక్నిక్: \"ఇంతే కాదు, దీనితో పాటు ఇది కూడా ఉచితం\"", "ఒక వస్తువును అమ్మేటప్పుడు మధ్యలోనే ఆపి \"దీనితో పాటు మరొకటి ఉచితం\" అని ఆఫర్ చేయడం ద్వారా కస్టమర్‌ను వెంటనే కొనేలా చేసే వ్యూహం.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "இது மட்டுமல்ல உத்தி: \"இத்துடன் இதுவும் முற்றிலும் இலவசம்\" என்ற கவர்ச்சி", "ஒரு பொருளை விற்கும் போது, வாடிக்கையாளர் யோசிக்கும் முன்பே \"இத்துடன் இந்த இலவசப் பொருளும் உண்டு\" எனக் கூறி மயக்கும் வர்த்தக தந்திரம்.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ದಟ್ಸ್-ನಾಟ್-ಆಲ್ ತಂತ್ರ: \"ಇಷ್ಟೇ ಅಲ್ಲ, ಇದರೊಂದಿಗೆ ಇದೂ ಉಚಿತ\" ಎಂಬ ಪ್ರಲೋಭನೆ", "ಗ್ರಾಹಕ ಯೋಚಿಸುವಷ್ಟರಲ್ಲಿಯೇ \"ಇದರ ಜೊತೆಗೆ ಈ ಗಿಫ್ಟ್ ಕೂಡ ಉಚಿತ\" ಎಂದು ಹೇಳಿ ಖರೀದಿಯ ಪ್ರಮಾಣವನ್ನು ಹೆಚ್ಚಿಸುವ ವ್ಯಾಪಾರ ಕಲೆ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "ദാറ്റ്സ്-നോട്ട്-ഓൾ ടെക്നിക്: \"ഇതുമാത്രമല്ല, ഇതുംകൂടി സൗജന്യം\" എന്ന പ്രലോഭനം", "ഒരു ഉൽപ്പന്നം വിൽക്കുമ്പോൾ ഉപഭോക്താവ് മടിക്കുന്നതിന് മുമ്പേ \"കൂടെ ഇതുകൂടി തികച്ചും സൗജന്യം\" എന്ന് കാണിച്ച് ആകർഷിക്കുന്ന രീതി.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "দ্যাটস-নট-অল টেকনিক: \"শুধু এটাই নয়, সাথে এটাও সম্পূর্ণ ফ্রি\"", "পণ্য বিক্রির সময় ক্রেতা সিদ্ধান্ত নেওয়ার আগেই \"এর সাথে এটাও একদম বিনামূল্যে দেওয়া হচ্ছে\" বলে অতিরিক্ত উপহারের চমক দিয়ে কেনার তাগিদ বাড়ানো।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਦੈਟਸ-ਨੌਟ-ਆਲ ਤਕਨੀਕ: \"ਸਿਰਫ਼ ਇਹੀ ਨਹੀਂ, ਨਾਲ ਇਹ ਵੀ ਬਿਲਕੁਲ ਮੁਫ਼ਤ\"", "ਗਾਹਕ ਦੇ ਫੈਸਲਾ ਲੈਣ ਤੋਂ ਪਹਿਲਾਂ ਹੀ \"ਨਾਲ ਇਹ ਚੀਜ਼ ਮੁਫ਼ਤ ਮਿਲੇਗੀ\" ਕਹਿ ਕੇ ਅਹਿਸਾਨ ਜਤਾਉਣਾ ਅਤੇ ਸੌਦਾ ਪੱਕਾ ਕਰਵਾਉਣਾ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "ابھی بات ختم نہیں ہوئی تکنیک: \"صرف یہی نہیں، ساتھ یہ بھی مفت ہے\"", "گاہک کے فیصلے سے قبل ہی سودے میں اچانک مفت تحفہ یا رعایت شامل کر کے اسے فوری خریداری پر مجبور کرنے کی مہارت۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ଦ୍ୟାଟ୍ସ-ନଟ୍-ଅଲ୍ କୌଶଳ: \"କେବଳ ଏତିକି ନୁହେଁ, ସାଙ୍ଗରେ ଏହା ମଧ୍ୟ ମାଗଣା\"", "ଜିନିଷ ବିକ୍ରି କଲାବେଳେ ଗ୍ରାହକ ଭାବିବା ପୂର୍ବରୁ \"ଏହା ସହ ଆଉ ଗୋଟିଏ ଉପହାର ସମ୍ପୂର୍ଣ୍ଣ ମାଗଣା\" କହି ତୁରନ୍ତ ରାଜି କରାଇବାର ଚତୁରତା।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "দ্যাটছ-নট-অল কৌশল: \"কেৱল এয়াই নহয়, লগত এইটোও সম্পূৰ্ণ বিনামূলীয়া\"", "বস্তু এটা বিক্ৰী কৰাৰ সময়ত গ্ৰাহকে ভাবি পোৱাৰ আগতেই \"লগত এইটোও বিনামূলীয়া উপহাৰ\" বুলি কৈ তৎক্ষণাৎ সন্মতি আদায় কৰাৰ পদ্ধতি।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
