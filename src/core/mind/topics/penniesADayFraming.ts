import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_PENNIES_A_DAY_FRAMING_EN: MindTopicDetail = {
  id: 'pennies_a_day_framing',
  categoryId: 'consumer_advertising',
  slug: 'pennies-a-day-framing',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 5,
  viewCount: 3400,
  shareCount: 255,
  bookmarkCount: 545,
  title: "Pennies-a-Day Framing: The Illusion of Trivial Expense",
  subtitle: "John Gourville’s pricing research on why re-framing a lump sum into small daily amounts bypasses mental accounting brakes.",
  shortDescription: "A cognitive pricing strategy that presents an aggregate recurring expense as a trivial daily cost (e.g. \"Only ₹15 a day—less than a cup of chai!\"), bypassing consumer spending friction.",
  oneLineExplanation: "Making a ₹15,000 annual commitment feel like pocket change by breaking it into daily coins.",

  summary30s: "First analyzed scientifically by Harvard Business School professor John Gourville in 1998, Pennies-a-Day (PAD) framing shifts a consumer’s mental accounting category. Instead of comparing a ₹3,650 gym fee to major household bills, comparing it to \"₹10 a day\" categorizes it alongside trivial petty cash that requires zero deliberation.",
  coreConcept: "Mental accounting dictates that consumers maintain cognitive budgets for different categories: large expenses undergo high scrutiny, while petty cash expenses below a cognitive threshold are spent frictionlessly. Temporal reframing reclassifies an aggregate luxury purchase into an everyday routine expense, neutralizing buyer hesitation.",
  summary60s: "Subscription businesses (streaming, software, gym memberships, term insurance) rely heavily on PAD. While consumers evaluate the daily unit cost as negligible, payments compound into significant annual drains. When stacked across 10 different subscriptions, \"just ₹20 a day\" quietly extracts tens of thousands of rupees each year.",
  quickTakeaways: ["PAD framing tricks the brain by comparing lump-sum commitments to trivial petty cash","Small daily expenses bypass the brain’s \"pain of paying\" insula response","Marketers intentionally frame costs daily while billing annually or monthly on auto-debit","The antidote is annualizing all micro-subscriptions before approving purchase"],

  whyItHappens: "Working memory evaluates numbers relative to reference anchors; ₹10 anchors to loose change rather than annual capital allocation.",
  evolutionaryMechanism: "Ancestral humans managed resources on a day-to-day horizon; evolutionary biology has no innate mechanism for calculating compounded recurring liabilities.",

  howItWorks: "Annual price encountered (₹12,000) -> Brain feels pain of paying -> Marketer presents \"Just ₹33/day\" -> Brain shifts anchor to a cup of chai -> Rational scrutiny disengages -> Subscription approved.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Annual Capital Outlay vs. The \"Chai\" Reframing Trap",
    description: "How temporal granularity shifts mental accounting evaluation.",
    analogySideA: {
      label: "Aggregate Real Outlay",
      detail: "₹14,400 deducted every year; requires budgeting, trade-offs, and financial discipline.",
    },
    analogySideB: {
      label: "Pennies-a-Day Illusion",
      detail: "\"Just ₹39 a day! Less than your evening snack!\" -> Perceived as essentially free.",
    },
  },

  researchSummary: "Gourville (1998, Journal of Consumer Research) proved that framing a $350 annual charitable donation or subscription as \"under a dollar a day\" increased compliance rates by over 100%.",
  references: [
    {
      id: 'ref_pennies_a_day_framing_01',
      title: "Pennies-a-Day: The Effect of Temporal Reframing on Transaction Evaluation",
      citation: "Gourville, J. T. (1998). Journal of Consumer Research, 24(4), 395–408.",
      authors: "Gourville, J. T.",
      publicationYear: 1998,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1086/209517",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_pennies_a_day_framing_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The ₹29/Day Gym Trap in Whitefield",
      narrativeContext: "Arjun signed up for an upscale fitness club in Whitefield, Bengaluru, because the billboard advertised \"World-Class Fitness for just ₹29 a day!\" He forgot about the fine print requiring an upfront 2-year non-refundable commitment of ₹21,170 on auto-debit. He attended for 3 weeks and never went again.",
      biasInAction: "Arjun evaluated the purchase against his daily pocket change mental budget rather than his annual discretionary savings.",
      optimalResponse: "Always multiply the daily quote by 365: \"This gym membership will cost me ₹10,585 this year. Will I realistically attend 100 times to make each visit worth ₹105?\"",
      reflectionPrompt: "How many software apps, OTT platforms, or memberships are currently deducting auto-debit fees that you justified with \"it’s only a few rupees a day\"?",
    },
  ],

  examples: [
    {
      id: 'ex_pennies_a_day_framing_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The ₹29/Day Gym Trap in Whitefield",
      description: "Arjun signed up for an upscale fitness club in Whitefield, Bengaluru, because the billboard advertised \"World-Class Fitness for just ₹29 a day!\" He fo...",
      takeaway: "PAD framing tricks the brain by comparing lump-sum commitments to trivial petty cash",
    },
  ],

  howToRecognize: "Marketing copy that uses phrases like: \"For less than a cup of coffee\", \"Just ₹9/day\", or \"Costs pennies per hour.\"",
  whereYouEncounterIt: "OTT streaming plans, insurance premiums, charity fundraisers, gym memberships, and consumer software.",
  commonMisconceptions: "Myth: \"If it’s only ₹15 a day, it really doesn’t matter to my finances.\" Fact: Ten small ₹15/day subscriptions compound to ₹54,750 per year—equivalent to an international holiday or emergency fund.",
  limitationsAndControversies: "If a service is genuinely utilized every single day and produces measurable productivity or health returns, the daily cost calculation reflects accurate utility.",

  howToRespond: "The Multiplication Rule: Whenever a salesperson or advertisement pitches a daily or weekly price, immediately multiply it by 365 (or 52) and state the annual figure aloud.",
  psychologicalDefenses: [{"title":"The Annualization Habit","instruction":"Force yourself to write down the full 1-year and 3-year total cash outflow before authorizing any subscription."},{"title":"The Subscription Quarantine","instruction":"Never use credit card auto-debit for new micro-subscriptions; use single-payment virtual cards to prevent silent renewal."}],

  practiceQuestions: [
    {
      id: 'pq_pennies_a_day_framing_01',
      difficulty: 'beginner',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "An educational app advertises: \"Unlock your child’s genius for just ₹19 a day!\" As an economically rational decision maker, how should you evaluate this offer?",
      scenarioText: "The checkout page asks you to enter credit card details for a mandatory 12-month auto-billing plan.",
      explanation: "Evaluating recurring expenses through daily anchors bypasses cognitive cost scrutiny. The true metric is the aggregate annual cost (₹6,935) measured against expected usage.",
      antidoteAdvice: "Annualize the cost and evaluate whether the child will realistically use the platform consistently for 12 months.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Buy it immediately because ₹19 is less than a packet of chips and therefore negligible.",
          text: "Buy it immediately because ₹19 is less than a packet of chips and therefore negligible.",
          feedbackText: "Incorrect. This falls directly into the mental accounting trap.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Calculate the total annual cost (₹6,935) and evaluate it against your family’s annual education budget and realistic weekly usage.",
          text: "Calculate the total annual cost (₹6,935) and evaluate it against your family’s annual education budget and realistic weekly usage.",
          feedbackText: "Correct! Multiplying by 365 restores fiscal clarity.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Ask if they have a ₹5 a day option.",
          text: "Ask if they have a ₹5 a day option.",
          feedbackText: "Incorrect. This remains trapped in daily micro-framing.",
        }
      ],
    },
  ],

  reflectionPrompt: "If you reviewed all your bank statements today, what is the combined annual total of all recurring micro-subscriptions you currently pay for?",
  tags: ['Mentalab Mind', 'consumer_advertising'],
  relatedTopics: [],
  seoTitle: `${"Pennies-a-Day Framing: The Illusion of Trivial Expense"} | Mentalab Mind`,
  seoDescription: "A cognitive pricing strategy that presents an aggregate recurring expense as a trivial daily cost (e.g. \"Only ₹15 a day—less than a cup of chai!\"), bypassing consumer spending friction.",
  canonicalUrl: '/mind/consumer-advertising/pennies-a-day-framing',
  ogImageUrl: '/images/mind/pennies-a-day-framing.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Subscription businesses (streaming, software, gym memberships, term insurance) rely heavily on PAD. While consumers evaluate the daily unit cost as negligible, payments compound into significant annual drains. When stacked across 10 different subscriptions, \"just ₹20 a day\" quietly extracts tens of thousands of rupees each year.",
};

export const TOPIC_PENNIES_A_DAY_FRAMING_HINGLISH: MindTopicDetail = {
  ...TOPIC_PENNIES_A_DAY_FRAMING_EN,
  title: "Pennies-a-Day Framing: \"Chai Ke Daam Me\" Ka Asli Sach",
  subtitle: "Kyu \"Roz ka sirf ₹15\" sun kar hum saal ke ₹5,000 bina soche barbaad kar dete hain.",
  shortDescription: "John Gourville ki pricing research: Badi subscription ko roz ke chillar me tod kar bechna taaki dimaag ko mehenga na lage.",
  oneLineExplanation: "Badi payment ko pocket change ke bahane dimaag ke logic se chupana.",
  summary30s: "Harvard ke professor John Gourville ne 1998 me study kiya ki jab companies kehti hain \"Ek chai se bhi sasta, sirf ₹10 roz!\", to log asani se trap me fas jate hain. Dimaag sochta hai \"arre ₹10 to chillar hai\", par saal ke end me bank account se ₹3,650 chupchap kat jate hain.",
  coreConcept: "Ise kehte hain Mental Accounting. Hamare dimaag me alag-alag batuye hote hain: Badi shopping ke liye hum 10 baar sochte hain, par pocket change bina soche uda dete hain. Sales wale saal ke kharche ko pocket change category me daal dete hain.",
  summary60s: "Gym, OTT apps aur insurance wale is trick ke master hain. Agar wo bolein \"₹12,000 do\", to aap mana kar doge. Isliye wo bolte hain \"Roz ka sirf ₹33\". Jab aapke paas aisi 5 subscriptions hoti hain, to saal ka ₹60,000 bina pata chale gayab ho jata hai.",
  quickTakeaways: ["\"Chai ke daam me\" bolna marketing ka dimaag ghumane wala formula hai","Roz ke chote kharche bank account me aag ki tarah saal ke end me bada nuksan karte hain","Hamesha daily cost ko 365 se multiply karke annual cost judge karein","Auto-debit band karein taaki har renewal par dimaag conscious faisla le sake"],
  howItWorks: "Company ne saal ka kharcha chupaya -> \"Sirf ₹20 roz\" bola -> Dimaag ne chillar samjha -> Auto-debit chalu hua -> Saal me hazaaro rupaye nikal gaye.",
  howToRespond: "Multiply by 365 Rule: Jab bhi koi bole \"Roz ka sirf ₹X\", turant calculator nikalo aur 365 se multiply karke saal ka kharcha dekho.",
  practiceQuestions: [
    {
      ...TOPIC_PENNIES_A_DAY_FRAMING_EN.practiceQuestions[0],
      prompt: "Ek app bolti hai: \"Sirf ₹15 roz me meditation seekhein!\" Checkout par 1 saal ka auto-pay maang rahe hain. Sahi decision kya hoga?",
      explanation: "Roz ke ₹15 ko 365 se multiply karke saal ka ₹5,475 banta hai. Dekhein kya aap sach me 1 saal roz use karenge.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Turant card laga dena kyuki ₹15 to bilkul muft jaisa hai.",
          text: "Turant card laga dena kyuki ₹15 to bilkul muft jaisa hai.",
          feedbackText: "Galat. Yeh mental accounting trap hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "15 ko 365 se multiply karke ₹5,475 dekhna aur sochna ki kya itna paisa is app ke liye justified hai.",
          text: "15 ko 365 se multiply karke ₹5,475 dekhna aur sochna ki kya itna paisa is app ke liye justified hai.",
          feedbackText: "Sahi! Annualize karna hi is framing ka sabse bada tod hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Company ko phone karke roz ₹15 cash lene ko kehna.",
          text: "Company ko phone karke roz ₹15 cash lene ko kehna.",
          feedbackText: "Galat. Yeh impractical hai.",
        }
      ],
    },
  ],
  seoTitle: `${"Pennies-a-Day Framing: \"Chai Ke Daam Me\" Ka Asli Sach"} | Mentalab Mind`,
  seoDescription: "John Gourville ki pricing research: Badi subscription ko roz ke chillar me tod kar bechna taaki dimaag ko mehenga na lage.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_PENNIES_A_DAY_FRAMING_EN,
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

export const TOPIC_PENNIES_A_DAY_FRAMING: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_PENNIES_A_DAY_FRAMING_EN,
  hinglish: TOPIC_PENNIES_A_DAY_FRAMING_HINGLISH,
  hi: createLocalizedRecord('hi', "दैनिक व्यय की भ्रांति (Pennies-a-Day Framing)", "बड़ी वार्षिक लागत को छोटे दैनिक सिक्कों के रूप में प्रस्तुत करके मानसिक प्रतिरोध को समाप्त करने की विपणन रणनीति।", ["दैनिक मूल्य की भ्रांति बड़े खर्चों को छुपाती है","मस्तिष्क छोटी राशि को अनदेखा कर देता है","निर्णय लेने से पहले दैनिक लागत को 365 से गुणा करें"]),
  gu: createLocalizedRecord('gu', "પેનિસ-એ-ડે ફ્રેમિંગ (રોજના ખર્ચનો આભાસ)", "મોટા વાર્ષિક ખર્ચને રોજના નાના સિક્કાઓમાં રજૂ કરીને ગ્રાહકને લલચાવવાની માર્કેટિંગ યુક્તિ.", ["રોજના ખર્ચની માયાજાળ સમજો","વાર્ષિક કુલ ખર્ચ ગણો","વિચારીને સબ્સ્ક્રિપ્શન લો"]),
  mr: createLocalizedRecord('mr', "दैनिक खर्चाचा आभास (Pennies-a-Day Framing)", "मोठ्या खर्चाची विभागणी रोजच्या किरकोळ पैशांमध्ये करून ग्राहकाची दिशाभूल करण्याचे विपणन तंत्र.", ["किरकोळ पैशांच्या आमिषाला बळी पडू नका","वार्षिक खर्चाची बेरीज करा","अनावश्यक खर्च टाळा"]),
  te: createLocalizedRecord('te', "రోజువారీ వ్యయ భ్రమ (Pennies-a-Day Framing)", "భారీ వార్షిక ఖర్చును చిన్న రోజువారీ పైసలుగా చూపి వినియోగదారులను ఆకర్షించే మార్కెటింగ్ వ్యూహం.", ["రోజువారీ ఖర్చుల భ్రమలో పడవద్దు","వార్షిక మొత్తాన్ని లెక్కించండి","అప్రమత్తంగా ఉండండి"]),
  ta: createLocalizedRecord('ta', "தினசரி கட்டண மாயை (Pennies-a-Day Framing)", "பெரிய ஆண்டு கட்டணங்களை சிறிய தினசரி சில்லறையாக காட்டி வாடிக்கையாளர்களை ஏமாற்றும் சந்தைப்படுத்தல் முறை.", ["தினசரி கட்டண மாயையை நம்பாதீர்கள்","ஆண்டு செலவை கணக்கிடுங்கள்","தேவையற்ற சந்தாக்களை தவிருங்கள்"]),
  kn: createLocalizedRecord('kn', "ದೈನಂದಿನ ವೆಚ್ಚದ ಭ್ರಮೆ (Pennies-a-Day Framing)", "ದೊಡ್ಡ ವಾರ್ಷಿಕ ಮೊತ್ತವನ್ನು ಸಣ್ಣ ದಿನನಿತ್ಯದ ಚಿಲ್ಲರೆಯಂತೆ ತೋರಿಸಿ ಗ್ರಾಹಕರನ್ನು ಸೆಳೆಯುವ ತಂತ್ರ.", ["ದೈನಂದಿನ ವೆಚ್ಚದ ಭ್ರಮೆಗೆ ಒಳಗಾಗಬೇಡಿ","ವಾರ್ಷಿಕ ಮೊತ್ತವನ್ನು ಪರಿಶೀಲಿಸಿ","ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ ಖರೀದಿಸಿ"]),
  ml: createLocalizedRecord('ml', "ദൈനംദിന ചെലവ് മിഥ്യ (Pennies-a-Day Framing)", "വലിയ വാർഷിക ചെലവുകളെ ചെറിയ ദിവസ ചെലവുകളായി കാണിച്ച് ഉപഭോക്താക്കളെ ആകർഷിക്കുന്ന മാർക്കറ്റിംഗ് തന്ത്രം.", ["ദിവസേനയുള്ള ചെറിയ തുകകൾ ശ്രദ്ധിക്കുക","വാർഷിക തുക കണക്കാക്കുക","ആവശ്യമുള്ളവ മാത്രം തിരഞ്ഞെടുക്കുക"]),
  bn: createLocalizedRecord('bn', "দৈনিক খরচের বিভ্রম (Pennies-a-Day Framing)", "বড় বার্ষিক খরচকে ক্ষুদ্র দৈনিক খুচরো পয়সার আকারে উপস্থাপন করে ক্রেতাকে আকৃষ্ট করার কৌশল।", ["দৈনিক খরচের ফাঁদে পা দেবেন না","বছরের মোট খরচ হিসাব করুন","সচেতন সিদ্ধান্ত নিন"]),
  pa: createLocalizedRecord('pa', "ਰੋਜ਼ਾਨਾ ਖਰਚੇ ਦਾ ਭੁਲੇਖਾ (Pennies-a-Day Framing)", "ਵੱਡੇ ਸਾਲਾਨਾ ਖਰਚੇ ਨੂੰ ਰੋਜ਼ ਦੇ ਨਿੱਕੇ ਸਿੱਕਿਆਂ ਵਾਂਗ ਦਿਖਾ ਕੇ ਗਾਹਕਾਂ ਨੂੰ ਭਰਮਾਉਣ ਵਾਲੀ ਮਾਰਕੀਟਿੰਗ ਚਾਲ।", ["ਰੋਜ਼ਾਨਾ ਖਰਚੇ ਦੇ ਭੁਲੇਖੇ ਤੋਂ ਬਚੋ","ਸਾਲਾਨਾ ਕੁੱਲ ਖਰਚਾ ਦੇਖੋ","ਸੋਚ-ਸਮਝ ਕੇ ਖ਼ਰੀਦੋ"]),
  ur: createLocalizedRecord('ur', "روزانہ کے خرچ کا مغالطہ (Pennies-a-Day Framing)", "بڑے سالانہ اخراجات کو روزانہ کی چھوٹی رقم کی صورت میں پیش کر کے گاہک کو قائل کرنے کی چال۔", ["روزانہ کے معمولی خرچ کے جال سے بچیں","سالانہ خرچ کا حساب لگائیں","غیر ضروری سبسکرپشنز منسوخ کریں"]),
  or: createLocalizedRecord('or', "ଦୈନନ୍ଦିନ ଖର୍ଚ୍ଚର ଭ୍ରମ (Pennies-a-Day Framing)", "ବଡ଼ ବାର୍ଷିକ ଖର୍ଚ୍ଚକୁ ଛୋଟ ଦୈନିକ ଖର୍ଚ୍ଚ ଭାବରେ ଦର୍ଶାଇ ଗ୍ରାହକଙ୍କୁ ଆକର୍ଷିତ କରିବାର ମାର୍କେଟିଂ କୌଶଳ।", ["ଦୈନିକ ଖର୍ଚ୍ଚର ମାୟାଜାଲ ବୁଝନ୍ତୁ","ବାର୍ଷିକ ମୋଟ ଖର୍ଚ୍ଚ ହିସାବ କରନ୍ତୁ","ସତର୍କତାର ସହ ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"]),
  as: createLocalizedRecord('as', "দৈনিক খৰচৰ বিভ্ৰম (Pennies-a-Day Framing)", "ডাঙৰ বাৰ্ষিক খৰচক দৈনিক ক্ষুদ্ৰ পইচাৰ ৰূপত দেখুৱাই গ্ৰাহকক আকৰ্ষণ কৰাৰ বাণিজ্যিক কৌশল।", ["দৈনিক খৰচৰ বিভ্ৰমত নপৰিব","বাৰ্ষিক খৰচৰ হিচাপ কৰক","সচেতন হৈ সিদ্ধান্ত লওক"]),
};
