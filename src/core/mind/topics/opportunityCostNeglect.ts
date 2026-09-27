import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Decision Making Track
 * Topic: Opportunity Cost Neglect: The Hidden Alternatives We Fail to See
 * Category: decision_making
 * Academic Grounding: Shane Frederick et al. (2009) (10.1086/593683)
 */

export const TOPIC_OPPORTUNITY_COST_NEGLECT_EN: MindTopicDetail = {
  id: 'opportunity_cost_neglect',
  categoryId: 'decision_making',
  slug: 'opportunity-cost-neglect',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 8,
  viewCount: 4080,
  shareCount: 322,
  bookmarkCount: 716,
  title: "Opportunity Cost Neglect: The Hidden Alternatives We Fail to See",
  subtitle: "The systematic cognitive tendency to evaluate financial and time commitments in complete isolation, blindly ignoring the alternative uses of those resources.",
  shortDescription: "A decision-making failure where people consider only the immediate attributes of an option without calculating what they must sacrifice by choosing it.",
  oneLineExplanation: "Every time you say \"yes\" to one purchase or commitment, you are silently saying \"no\" to everything else that resource could buy.",

  summary30s: "Documented in 2009 by Shane Frederick, Nathan Novemsky, and colleagues, Opportunity Cost Neglect explains why people make foolish financial purchases. When deciding whether to spend money or time, our minds focus exclusively on the item in front of us. We fail to instinctively generate the counterfactual alternative: \"If I spend ₹1,00,000 on this luxury watch, what specific other investments or trips am I forfeiting?\"",
  coreConcept: "Economists assume consumers automatically consider the trade-offs of their scarce resources. Cognitive psychology proves they almost never do unless explicitly prompted. When consumers are asked: \"Do you want to buy this DVD for $15?\", over 75% buy it. But when prompted: \"Do you want to buy this DVD for $15 or keep the $15 for other things?\", purchase rates plummet by 20%. Simply making the unchosen alternative visible transforms rational decision-making.",
  summary60s: "Frederick's research demonstrated that consumers treat money like isolated buckets rather than a fluid, universally convertible resource. When buying an expensive car with monthly financing, buyers scrutinize minor features like seat leather while ignoring that the ₹15,000 monthly difference over five years equals ₹9,00,000 that could have funded emergency savings or compound interest investments.",
  quickTakeaways: [
    "The Invisible Sacrifice: Every financial outlay has an invisible list of sacrificed alternatives",
    "The \"Or Keep the Cash\" Prompt: Whenever contemplating a purchase, explicitly ask: \"What else could this exact money do?\"",
    "Time Opportunity Cost: Saying yes to an unnecessary 2-hour meeting is saying no to your core priority projects",
    "Compound Opportunity Cost: A ₹10,000 discretionary spend is not ₹10,000; it is ₹40,000 of lost future retirement compounding",
  ],

  whyItHappens: "Cognitive ease and out-of-sight neglect. The item in front of you has bright colors and immediate sensory stimulation; the foregone alternative is an abstract, invisible idea.",
  evolutionaryMechanism: "Ancestral hunter-gatherers had no stored currency or financial compounding; choices were immediate and tangible (eat this berry now or leave it).",
  howItWorks: "Product presented -> Emotional desire triggered -> Brain checks bank balance -> \"I can afford it\" -> Purchase completed -> Realizes months later that emergency savings are depleted.",
  whereYouEncounterIt: "Automobile dealership add-ons, luxury fashion impulse buys, corporate capital expenditure requests, and scheduling time.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Isolated Evaluation vs. Foregone Opportunity",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Isolated Blindness (Neglect)",
      detail: "\"This brand new SUV costs only ₹35,000 per month on EMI; our family income can cover it, so let us buy it.\"",
    },
    analogySideB: {
      label: "Opportunity Cost Calculus",
      detail: "\"Committing ₹35,000/month means forfeiting our children's higher education fund and our annual international family holiday.\"",
    },
  },

  researchSummary: "Frederick et al. (2009) published \"Opportunity Cost Neglect\" in the Journal of Consumer Research, proving simple reminders of alternative spending alter choice.",
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
      id: 'scen_opportunity_cost_neglect_01',
      scenarioType: 'indian_context',
      title: "The ₹50,000 Gym Membership in Gurgaon",
      vignette: "Dev, a 28-year-old marketing manager in Gurgaon, visits a trendy luxury gym featuring steam baths and neon lighting. The salesperson pitches an annual package: \"It's just ₹50,000 upfront for 12 months of unlimited access!\" Dev checks his bank app: he has ₹75,000 in his account. He swipes his card, feeling virtuous about investing in health. Three months later, Dev has visited the gym only four times. Meanwhile, his laptop breaks down, and he has to borrow money on an expensive 36% APR credit card EMI to replace it because his liquid cash was sunk into the gym.",
      breakdownAnalysis: "Dev fell victim to Opportunity Cost Neglect. When viewing the gym, he evaluated it in isolation (\"I have ₹50k, fitness is good\"). He failed to generate the alternative: \"By locking this cash, I forfeit my emergency contingency buffer and tech replacement fund.\"",
      recommendedAction: "Before committing any lump sum, write down three alternative uses for that exact amount of capital and wait 48 hours.",
    },
  ],

  examples: [
    {
      id: 'ex_opportunity_cost_neglect_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_opportunity_cost_neglect_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_opportunity_cost_neglect_01',
      scenarioContext: "A company's leadership debates spending ₹20 lakhs on redesigning the corporate logo and office stationery. The finance director points out: \"If we don't spend this ₹20 lakhs, we can hire two junior customer success engineers who will reduce client churn by 15%.\"",
      question: "Which cognitive principle did the finance director introduce to counter the executive team's isolated bias?",
      prompt: "Which cognitive principle did the finance director introduce to counter the executive team's isolated bias?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "Prospect Theory loss weighting",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "Opportunity cost salience by explicitly identifying the foregone valuable alternative",
          isCorrect: true,
          explanation: "By making the sacrificed alternative (two junior engineers) explicit, the director overcame opportunity cost neglect.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Diffusion of responsibility across customer success",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "The Dunning-Kruger effect regarding graphic design",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Always ask what you are giving up: the best way to evaluate a choice is to look at what it displaces.",
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
      id: 'ref_opportunity_cost_neglect_01',
      title: "Opportunity Cost Neglect",
      citation: "Frederick, S., Novemsky, N., Wang, J., Dhar, R., & Nowlis, S. (2009). Opportunity Cost Neglect. Journal of Consumer Research, 36(4), 553–561.",
      authors: "Shane Frederick et al.",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1086/593683",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Decision Making', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'mental_accounting', slug: 'mental-accounting', title: 'Mental Accounting', relationshipType: 'amplified_by' },
    { topicId: 'sunk_cost_fallacy', slug: 'sunk-cost-fallacy', title: 'Sunk Cost Fallacy', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "Opportunity Cost Neglect: The Hidden Alternatives We Fail to See | Mentalab Mind",
  seoDescription: "A decision-making failure where people consider only the immediate attributes of an option without calculating what they must sacrifice by choosing it.",
  canonicalUrl: '/mind/decision-making/opportunity-cost-neglect',
  ogImageUrl: '/images/mind/opportunity-cost-neglect.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "Economists assume consumers automatically consider the trade-offs of their scarce resources. Cognitive psychology proves they almost never do unless explicitly prompted. When consumers are asked: \"Do you want to buy this DVD for $15?\", over 75% buy it. But when prompted: \"Do you want to buy this DVD for $15 or keep the $15 for other things?\", purchase rates plummet by 20%. Simply making the unchosen alternative visible transforms rational decision-making.",
};

export const TOPIC_OPPORTUNITY_COST_NEGLECT_HINGLISH: MindTopicDetail = {
  ...TOPIC_OPPORTUNITY_COST_NEGLECT_EN,
  title: "Opportunity Cost Neglect: Wo Dusra Kharcha Jo Hume Dikhai Nahi Deta",
  subtitle: "Jab hum koi cheez khareedte hain toh hum bas uski price dekhte hain; hum yeh bhool jaate hain ki us paise se hum kya-kya aur kar sakte the.",
  shortDescription: "Ek aisi aam galti jisme insaan paisa ya waqt kharch karte waqt un alternatives ko calculate nahi karta jo use chhodne pad rahe hain.",
  oneLineExplanation: "Har \"Haan\" ke peeche ek invisible \"Na\" chhupa hota hai.",

  summary30s: "2009 me Shane Frederick ne Opportunity Cost Neglect prove kiya. Jab hum kisi showroom me ₹40,000 ka phone dekhte hain, toh hamara dimaag bas yeh sochta hai \"kya mere account me paise hain?\". Hum yeh sochna bhool jaate hain ki agar yeh ₹40,000 na kharch karein toh emergency fund ban sakta tha ya family trip ho sakti thi.",
  coreConcept: "Paisa ek limit me hota hai. Har kharcha doosre kharche ko maar kar hota hai. EMI lete waqt log bas monthly ₹5,000 dekhte hain, par unhe yeh nahi dikhta ki agle 5 saal tak unki aazadi girvi rakh di gayi hai.",
  quickTakeaways: [
    "Invisible Sacrifice: Kisi cheez ko khareedna matlab kisi doosri cheez ko hamesha ke liye chhodna",
    "The \"Or Keep The Cash\" Rule: Khareedte waqt sochein: \"Agar yeh na loon toh is paise se kya behtar ho sakta hai?\"",
    "Time Ka Kharcha: Faltu meeting me 1 ghanta baithna matlab apne main project ko reject karna",
    "Compound Nuksan: Aaj ka ₹10,000 ka faltu kharcha asal me future ka ₹40,000 ka nuksan hai",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_OPPORTUNITY_COST_NEGLECT_EN,
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

export const TOPIC_OPPORTUNITY_COST_NEGLECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_OPPORTUNITY_COST_NEGLECT_EN,
  hinglish: TOPIC_OPPORTUNITY_COST_NEGLECT_HINGLISH,
  hi: createLocalizedRecord('hi', "अवसर लागत की उपेक्षा (Opportunity Cost Neglect): अनदेखे विकल्पों का नुकसान", "यह निर्णय लेने की एक बड़ी मानवीय विफलता है जिसमें व्यक्ति किसी वस्तु या निर्णय पर विचार करते समय केवल उसी के लाभ देखता है, और यह भूल जाता है कि उन संसाधनों (धन/समय) का उपयोग किन अन्य महत्वपूर्ण कार्यों के लिए किया जा सकता था।", [
    "अप्रत्यक्ष त्याग की पहचान",
    "खर्च से पहले वैकल्पिक उपयोगों की गणना",
    "समय और धन की विनिमेयता (Fungibility)"
  ]),
  gu: createLocalizedRecord('gu', "ઓપોર્ચ્યુનિટી કોસ્ટ નેગ્લેક્ટ: અદ્રશ્ય વિકલ્પોની અવગણના", "કોઈપણ ખરીદી કે નિર્ણય લેતી વખતે એ ભૂલી જવું કે આ જ પૈસા કે સમય અન્ય કઈ મહત્વપૂર્ણ જગ્યાએ વાપરી શકાયા હોત.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "ऑपॉर्च्युनिटी कॉस्ट निगलेक्ट: गमावलेल्या पर्यायांकडे होणारे दुर्लक्ष", "एखादा खर्च करताना त्या पैशातून किंवा वेळेतून इतर काय करता आले असते या पर्यायी फायद्यांचा पूर्णपणे विसर पडण्याची चूक.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "ఆపర్చునిటీ కాస్ట్ నెగ్లెక్ట్: కనిపించని ప్రత్యామ్నాయాల విస్మరణ", "డబ్బు లేదా సమయాన్ని ఖర్చు చేసేటప్పుడు, ఆ వనరులతో చేయగల ఇతర ముఖ్యమైన పనులను లేదా ప్రత్యామ్నాయాలను పూర్తిగా విస్మరించే అలవాటు.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "வாய்ப்புச் செலவு புறக்கணிப்பு: கண்ணுக்குத் தெரியாத மாற்று வழிகளை மறத்தல்", "ஒரு பொருளை வாங்கும் போது, அதே பணத்தைக் கொண்டு செய்யக்கூடிய பிற அத்தியாவசிய முதலீடுகளையோ வாய்ப்புகளையோ கருத்தில் கொள்ளத் தவறும் மனப்பான்மை.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಆಪರ್ಚುನಿಟಿ ಕಾಸ್ಟ್ ನೆಗ್ಲೆಕ್ಟ್: ಕಣ್ಣಿಗೆ ಕಾಣದ ಇತರ ಆಯ್ಕೆಗಳ ನಿರ್ಲಕ್ಷ್ಯ", "ಹಣ ಅಥವಾ ಸಮಯವನ್ನು ಖರ್ಚು ಮಾಡುವಾಗ, ಅದೇ ಸಂಪನ್ಮೂಲದಿಂದ ಸಾಧಿಸಬಹುದಾಗಿದ್ದ ಇತರ ಪ್ರಮುಖ ಪರ್ಯಾಯಗಳನ್ನು ಮರೆತುಬಿಡುವ ತಪ್ಪು.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "ഓപ്പർച്യുണിറ്റി കോസ്റ്റ് നെഗ്ലെക്റ്റ്: കാണാതെ പോകുന്ന മറ്റ് സാധ്യതകൾ", "പണമോ സമയമോ ചിലവഴിക്കുമ്പോൾ, ആ വിഭവം കൊണ്ട് ചെയ്യാൻ കഴിയുമായിരുന്ന മറ്റ് പ്രധാന കാര്യങ്ങളെ ഓർക്കാതെ പോകുന്ന അവസ്ഥ.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "অপরচুনিটি কস্ট অবহেলা: অদেখা বিকল্পগুলির মূল্যের প্রতি অন্ধত্ব", "টাকা বা সময় খরচের সময় মানুষ কেবল বর্তমান জিনিসটিই দেখে, কিন্তু এর ফলে কোন কোন গুরুত্বপূর্ণ সুযোগ হাতছাড়া হলো তা ভুলে যায়।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਅਵਸਰ ਲਾਗਤ ਦੀ ਅਣਦੇਖੀ: ਦੂਜੇ ਵਿਕਲਪਾਂ ਨੂੰ ਭੁੱਲਣ ਦੀ ਆਦਤ", "ਕੋਈ ਚੀਜ਼ ਖਰੀਦਣ ਵੇਲੇ ਇਹ ਭੁੱਲ ਜਾਣਾ ਕਿ ਇਸੇ ਪੈਸੇ ਜਾਂ ਸਮੇਂ ਨਾਲ ਹੋਰ ਕਿਹੜੇ ਜ਼ਰੂਰੀ ਕੰਮ ਕੀਤੇ ਜਾ ਸਕਦੇ ਸਨ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "موقع کی قیمت سے غفلت: نادیدہ متبادل راستوں کو نظر انداز کرنا", "پیسہ یا وقت لگاتے وقت یہ نہ سوچنا کہ انہی وسائل سے ہم اور کون سے مفید کام انجام دے سکتے تھے۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ଅପର୍ଚ୍ୟୁନିଟି କଷ୍ଟ ନେଗ୍ଲେକ୍ଟ: ଅଦୃଶ୍ୟ ବିକଳ୍ପର ଅବହେଳା", "ଟଙ୍କା ବା ସମୟ ଖର୍ଚ୍ଚ କଲାବେଳେ ସେହି ସମ୍ବଳରେ ଅନ୍ୟ କେଉଁ ଜରୁରୀ କାର୍ଯ୍ୟ ହୋଇପାରିଥାନ୍ତା, ତାହା ଚିନ୍ତା ନକରିବାର ଭୁଲ୍।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "অপৰচুনিটি কষ্ট অৱহেলা: চকুত নপৰা বিকল্পসমূহৰ ক্ষতি", "ধন বা সময় ব্যয় কৰাৰ সময়ত সেই সম্পদখিনিৰে আন কি কি ভাল কাম কৰিব পৰা গ’লহেঁতেন সেয়া পাহৰি যোৱাৰ অভ্যাস।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
