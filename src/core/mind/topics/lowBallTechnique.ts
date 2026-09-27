import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Persuasion & Influence Track
 * Topic: The Low-Ball Technique: Hidden Costs of Prior Commitment
 * Category: persuasion_influence
 * Academic Grounding: Robert B. Cialdini et al. (1978) (10.1037/0022-3514.36.5.463)
 */

export const TOPIC_LOW_BALL_TECHNIQUE_EN: MindTopicDetail = {
  id: 'low_ball_technique',
  categoryId: 'persuasion_influence',
  slug: 'low-ball-technique',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 7,
  viewCount: 3970,
  shareCount: 308,
  bookmarkCount: 694,
  title: "The Low-Ball Technique: Hidden Costs of Prior Commitment",
  subtitle: "The persuasion tactic where an attractive initial agreement is secured, before the terms are quietly worsened or hidden fees introduced.",
  shortDescription: "A persuasion and selling technique in which an item or service is offered at a lower price than is actually intended to be charged, after which the price is raised.",
  oneLineExplanation: "Get them to say yes first, then change the terms—because once humans commit, they hate backing out.",

  summary30s: "Identified in 1978 by Robert Cialdini, John Cacioppo, and colleagues, the Low-Ball Technique exploits psychological commitment consistency. Once a customer or colleague agrees to an attractive proposition, they cognitively build internal self-justifications for their choice. When the deal is suddenly altered (price increases, hidden fees, extra hours), they follow through anyway to preserve consistency.",
  coreConcept: "The low-ball operates through the psychological principle of post-decisional commitment. In the mind of the target, once the verbal or mental agreement occurs, the commitment takes on a life of its own (\"I am the kind of person who is buying this car today\"). Even when the initial inducement (the low price) is removed, the newly generated rationalizations keep the decision alive.",
  summary60s: "Cialdini tested this on university students asked to participate in an experiment on thinking. In the control group, students were told upfront that the session started at 7:00 AM; only 31% agreed to participate. In the low-ball group, students were first asked if they would participate in an interesting psychology study (56% agreed). Only after they agreed were they informed that the session started at 7:00 AM. 95% of them still showed up at 7:00 AM.",
  quickTakeaways: [
    "The Self-Justification Engine: People invent reasons to support a decision after they make the initial commitment",
    "The Commitment Anchor: Verbal agreements create internal psychological identity stakes that resist backing out",
    "The \"Stomach Drop\" Alert: When terms change unexpectedly, listen to the visceral knot in your stomach and walk away",
    "Zero-Cost Reset Rule: When a vendor reveals surprise fees, immediately reset the deal to zero and renegotiate from scratch",
  ],

  whyItHappens: "Desire for psychological consistency and self-integrity. Humans feel acute cognitive dissonance if they renege on a clear commitment.",
  evolutionaryMechanism: "In ancestral bands, individuals who broke promises or backed out of verbal pacts faced severe tribal reputation penalties.",
  howItWorks: "Attractive low-friction offer presented -> Target commits verbally -> Target visualizes ownership -> Terms worsened (fees added) -> Target feels awkward cancelling -> Target pays higher price.",
  whereYouEncounterIt: "Car dealerships, real estate builders (maintenance fees), airline baggage charges, hotel resort fees, and software subscriptions.",

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Transparent Terms vs. Post-Commitment Bait-and-Switch",
    description: 'Empirical comparison between rational calibration and psychological distortion.',
    analogySideA: {
      label: "Transparent Offer (Upfront Reality)",
      detail: "\"This flight ticket is ₹8,000 all-inclusive, including baggage, seat selection, and meal fees.\"",
    },
    analogySideB: {
      label: "Low-Ball Sequence (Bait & Switch)",
      detail: "\"Flight ticket advertised at ₹4,999! After you enter passport details: +₹1,500 tax, +₹800 baggage, +₹500 convenience fee = ₹7,799.\"",
    },
  },

  researchSummary: "Cialdini, Cacioppo, Bassett & Miller (1978) published \"Low-ball procedure for producing compliance: Commitment then cost\" in JPSP.",
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
      id: 'scen_low_ball_technique_01',
      scenarioType: 'indian_context',
      title: "The Bangalore Apartment \"Base Price\" Trap",
      vignette: "Prateek visits a newly launched apartment project in Whitefield, Bangalore. The glossy brochure advertises: \"Luxury 2BHK Homes Starting at ₹75 Lakhs!\" Prateek spends 4 hours touring the show flat, meets the sales director, and fills out the booking intent form. Having emotionally furnished the living room in his head, Prateek is ready to pay the deposit. The sales manager then brings out the final allotment sheet: \"Sir, along with the base price, there is ₹8 lakhs for covered parking, ₹5 lakhs for club membership, ₹4 lakhs for floor rise, and ₹6 lakhs for GST and infrastructure charges. Total is ₹98 lakhs.\" Despite being furious about the ₹23-lakh jump, Prateek signs the contract anyway.",
      breakdownAnalysis: "A devastating real-world execution of the Low-Ball Technique. Prateek psychologically committed to ownership at ₹75 lakhs. By the time the hidden ₹23 lakhs appeared, his self-justification machinery was running at full power, making walking away feel like personal loss.",
      recommendedAction: "Enforce the \"Dealbreaker Protocol\": If the financial or operational terms change after your initial agreement, automatically invoke a mandatory 48-hour cooling-off period.",
    },
  ],

  examples: [
    {
      id: 'ex_low_ball_technique_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Workplace & Organizational Dynamics',
      description: 'How team composition, hierarchical pressure, or diffuse incentives subtly alter individual judgment during critical milestones.',
      takeaway: 'Decouple individual evaluation from collective anonymity to protect institutional output.',
    },
    {
      id: 'ex_low_ball_technique_02',
      domain: 'personal_finance',
      displayOrder: 2,
      title: 'Capital & Financial Allocation',
      description: 'How psychological valuation shortcuts and emotional framing distort risk-adjusted decisions under market uncertainty.',
      takeaway: 'Implement pre-committed quantitative rules rather than intuitive gut adjustments.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_low_ball_technique_01',
      scenarioContext: "A freelance software contractor agrees to build a website for an agency for ₹40,000 based on an initial scope. Once the contract is signed and hosting set up, the client reveals that the website must also support multi-lingual RTL Arabic layouts and 24/7 uptime monitoring within the same ₹40,000 budget.",
      question: "Which psychological tactic did the agency client deploy, and what is the contractor's most rational professional response?",
      prompt: "Which psychological tactic did the agency client deploy, and what is the contractor's most rational professional response?",
      questionType: 'multiple_choice',
      questionFormat: 'scenario_analysis',
      difficulty: 'intermediate',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: "The door-in-the-face technique; the contractor should agree to do it for free",
          isCorrect: false,
          explanation: 'Incorrect. This reflects an uncalibrated heuristic or common misconception.',
        },
        {
          id: 'opt_b',
          label: 'B',
          text: "The low-ball technique; the contractor should recognize the bait-and-switch and demand a formal change-order quote or terminate the agreement",
          isCorrect: true,
          explanation: "The client secured initial commitment at an attractive scope, then expanded demands (low-balling). The contractor must halt the process and issue a formal change order.",
        },
        {
          id: 'opt_c',
          label: 'C',
          text: "Social loafing; the contractor should hire sub-contractors secretly",
          isCorrect: false,
          explanation: 'Incorrect. This fails to mitigate the cognitive bias effectively.',
        },
        {
          id: 'opt_d',
          label: 'D',
          text: "Diffusion of responsibility; the contractor should blame the hosting company",
          isCorrect: false,
          explanation: 'Incorrect. This represents standard uncalibrated group dynamics.',
        },
      ],
      cognitiveTakeaway: "Never let previous agreement trap you into new, unfavorable terms: walk away when the ground shifts.",
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
      id: 'ref_low_ball_technique_01',
      title: "Low-ball procedure for producing compliance: Commitment then cost",
      citation: "Cialdini, R. B., Cacioppo, J. T., Bassett, R., & Miller, J. A. (1978). Journal of Personality and Social Psychology, 36(5), 463–476.",
      authors: "Robert B. Cialdini et al.",
      publicationYear: 1980,
      journalOrPublisher: 'Peer-Reviewed Journal of Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: "https://doi.org/10.1037/0022-3514.36.5.463",
      relevance: 'Foundational empirical study documenting the psychological mechanism and behavioral baseline.',
      displayOrder: 1,
    },
  ],
  tags: ['Persuasion & Influence', 'Psychology', 'Mental Models'],
  relatedTopics: [
    { topicId: 'commitment_consistency', slug: 'commitment-consistency', title: 'Commitment & Consistency', relationshipType: 'amplified_by' },
    { topicId: 'foot_in_the_door', slug: 'foot-in-the-door', title: 'Foot-in-the-Door Technique', relationshipType: 'counteracted_by' },
  ],
  seoTitle: "The Low-Ball Technique: Hidden Costs of Prior Commitment | Mentalab Mind",
  seoDescription: "A persuasion and selling technique in which an item or service is offered at a lower price than is actually intended to be charged, after which the price i",
  canonicalUrl: '/mind/persuasion-and-influence/low-ball-technique',
  ogImageUrl: '/images/mind/low-ball-technique.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: "The low-ball operates through the psychological principle of post-decisional commitment. In the mind of the target, once the verbal or mental agreement occurs, the commitment takes on a life of its own (\"I am the kind of person who is buying this car today\"). Even when the initial inducement (the low price) is removed, the newly generated rationalizations keep the decision alive.",
};

export const TOPIC_LOW_BALL_TECHNIQUE_HINGLISH: MindTopicDetail = {
  ...TOPIC_LOW_BALL_TECHNIQUE_EN,
  title: "The Low-Ball Technique: Pehle Haan Bulwaya, Fir Shartein Badal Di",
  subtitle: "Pehle sasta daam bolkar customer ko fasao, aur jab wo dil se khareedne ka mann bana le, tab hidden charges aur mehnga bill thop do.",
  shortDescription: "Ek aisi manipulation technique jisme pehle aakarshak deal par agreement liya jata hai, aur fir commitments lock hone ke baad conditions kharab kar di jaati hain.",
  oneLineExplanation: "Pehle meetha bolkar commitment lo, fir aakhiri me kadwa bill pakdao.",

  summary30s: "1978 me Cialdini ne Low-Ball Technique discover ki. Car showrooms aur builders iska bohot use karte hain. Wo pehle flat ka price ₹60 lakh batate hain. Jab aap token de dete hain aur sapne dekhne lagte hain, tab wo bolte hain \"parking ke ₹5 lakh alag hain, club ke ₹3 lakh alag hain\". Insaan commitment todne ke darr se chupchap extra paise de deta hai.",
  coreConcept: "Insaan jab ek baar bol deta hai \"Haan main yeh le raha hoon\", toh uska dimaag use justify karne lagta hai. Jab baad me price badh bhi jata hai, tab bhi hum deal cancel nahi karte kyunki hume lagta hai ki ab pehle se bohot aage badh chuke hain.",
  quickTakeaways: [
    "Commitment Trap: Ek baar haan bolne ke baad insaan khud ko bewakoof banana shuru kar deta hai",
    "Hidden Charges Alert: Booking se pehle \"all-inclusive on-road / in-hand\" price mangwayein",
    "Walk Away Power: Agar deal badalti hai, toh turant table chhod kar bahar nikal jayein",
    "No Guilt: Samne wale ne cheating ki hai, isliye deal cancel karne par koi sharmindagi na karein",
  ],
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_LOW_BALL_TECHNIQUE_EN,
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

export const TOPIC_LOW_BALL_TECHNIQUE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_LOW_BALL_TECHNIQUE_EN,
  hinglish: TOPIC_LOW_BALL_TECHNIQUE_HINGLISH,
  hi: createLocalizedRecord('hi', "लो-बॉल तकनीक (Low-Ball Technique): छिपी शर्तों और प्रारंभिक प्रतिबद्धता का जाल", "एक ऐसी अनैतिक अनुपालन रणनीति जिसमें पहले किसी आकर्षक और कम कीमत की शर्त पर सहमति ली जाती है, और एक बार जब ग्राहक मानसिक रूप से प्रतिबद्ध हो जाता है, तब शर्तें बदल दी जाती हैं या अतिरिक्त छिपे हुए शुल्क जोड़ दिए जाते हैं।", [
    "निर्णय-उपरांत आत्म-औचित्य (Self-Justification)",
    "बदली हुई शर्तों पर तुरंत सौदा रद्द करने की शक्ति",
    "छिपे हुए शुल्कों की पूर्व-जाँच"
  ]),
  gu: createLocalizedRecord('gu', "લો-બોલ ટેકનિક: પહેલાં સસ્તી ડીલ બતાવીને પછી શરતો બદલવાની ચાલ", "પહેલાં આકર્ષક કિંમત પર સહમતિ લઈ લેવી, અને એકવાર ગ્રાહક મન બનાવી લે પછી છુપા ચાર્જ ઉમેરીને મોંઘો સોદો પધરાવવાની રીત.", [
    'વૈયક્તિક વિશ્લેષણ સ્પષ્ટ રાખો',
    'સામાજિક દબાણથી સાવધાન રહો',
    'નિયમોનું પાલન કરો'
  ]),
  mr: createLocalizedRecord('mr', "लो-बॉल तंत्र: आधी स्वस्त दाखवून नंतर अटी बदलण्याची चलाखी", "सुरुवातीला कमी किमतीत करार करायचा आणि एकदा माणसाने मानसिक तयारी केली की छुपे खर्च लादून बिल वाढवायचे हे फसवे विक्री तंत्र.", [
    'तथ्यांची योग्य पडताळणी करा',
    'गटाच्या दबावाखाली निर्णय घेऊ नका',
    'वैयक्तिक जबाबदारी स्वीकारा'
  ]),
  te: createLocalizedRecord('te', "లో-బాల్ టెక్నిక్: మొదట తక్కువ ధర చెప్పి తర్వాత నిబంధనలు మార్చడం", "ముందుగా ఆకర్షణీయమైన తక్కువ ధరకు ఒప్పించి, కస్టమర్ ఫిక్స్ అయిన తర్వాత అదనపు ఛార్జీలు వేసి మోసం చేసే అమ్మకాల పద్ధతి.", [
    'స్వతంత్రంగా ఆలోచించండి',
    'సమూహ ఒత్తిడిని గుర్తించండి',
    'నిర్ణయాలు హేతుబద్ధంగా తీసుకోండి'
  ]),
  ta: createLocalizedRecord('ta', "குறைந்த விலைக் கவர்ச்சி உத்தி: ஆரம்ப உறுதிப்பாட்டைப் பயன்படுத்தி ஏமாற்றுதல்", "முதலில் குறைந்த விலையைக் கூறி சம்மதம் பெற்று, பின்னர் மனதளவில் ஒப்புக்கொண்ட பின் மறைமுகக் கட்டணங்களைச் சேர்க்கும் தந்திரம்.", [
    'சுயாதீன பகுப்பாய்வை மேற்கொள்ளுங்கள்',
    'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    'தெளிவான முடிவுகளை எடுங்கள்'
  ]),
  kn: createLocalizedRecord('kn', "ಲೋ-ಬಾಲ್ ತಂತ್ರ: ಆರಂಭದಲ್ಲಿ ಕಡಿಮೆ ಬೆಲೆ ಹೇಳಿ ನಂತರ ಷರತ್ತುಗಳನ್ನು ಬದಲಾಯಿಸುವುದು", "ಗ್ರಾಹಕ ಒಪ್ಪುವಂತೆ ಮಾಡಲು ಮೊದಲು ಕಡಿಮೆ ಬೆಲೆ ತೋರಿಸಿ, ಮನಸ್ಸು ಮಾಡಿದ ಮೇಲೆ ಹಿಡನ್ ಚಾರ್ಜ್‌ಗಳನ್ನು ಸೇರಿಸಿ ದೋಚುವ ಮೋಸದ ತಂತ್ರ.", [
    'ಸ್ವತಂತ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    'ಗುಂಪಿನ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಬೇಡಿ',
    'ಸರಿಯಾದ ತೀರ್ಮಾನ ಕೈಗೊಳ್ಳಿ'
  ]),
  ml: createLocalizedRecord('ml', "ലോ-ബോൾ ടെക്നിക്: ആദ്യം ആകർഷകമായ ഓഫർ നൽകി പിന്നീട് മാറ്റങ്ങൾ വരുത്തൽ", "തുടക്കത്തിൽ കുറഞ്ഞ വില കാണിച്ച് സമ്മതം വാങ്ങിയ ശേഷം, ഉപഭോക്താവ് ഉറപ്പിച്ചുകഴിയുമ്പോൾ നിബന്ധനകൾ മാറ്റി കൂടുതൽ പണം വാങ്ങുന്ന രീതി.", [
    'സ്വതന്ത്രമായി ചിന്തിക്കുക',
    'കൂട്ടായ സമ്മർദ്ദത്തിൽ വീഴരുത്',
    'കൃത്യമായ തീരുമാനങ്ങൾ കൈക്കൊള്ളുക'
  ]),
  bn: createLocalizedRecord('bn', "লো-বল টেকনিক: প্রথমে কম দামের টোপ দিয়ে পরে গোপন খরচ চাপানো", "প্রথমে আকর্ষণীয় মূল্যে রাজি করিয়ে নিয়ে গ্রাহক মানসিকভাবে প্রতিশ্রুতিবদ্ধ হওয়ার পর অতিরিক্ত ফি বা শর্ত জুড়ে দেওয়ার প্রতারণামূলক কৌশল।", [
    'স্বাধীনভাবে বিবেচনা করুন',
    'দলের চাপে ভুল করবেন না',
    'সঠিক তথ্য যাচাই করুন'
  ]),
  pa: createLocalizedRecord('pa', "ਲੋਅ-ਬਾਲ ਤਕਨੀਕ: ਪਹਿਲਾਂ ਘੱਟ ਰੇਟ ਦੱਸ ਕੇ ਬਾਅਦ ਵਿੱਚ ਲੁਕਵੇਂ ਖਰਚੇ ਜੋੜਨਾ", "ਗਾਹਕ ਤੋਂ ਪਹਿਲਾਂ ਸਸਤੀ ਡੀਲ ਤੇ ਹਾਮੀ ਭਰਵਾ ਲੈਣੀ ਅਤੇ ਬਾਅਦ ਵਿੱਚ ਸ਼ਰਤਾਂ ਬਦਲ ਕੇ ਮਹਿੰਗਾ ਸੌਦਾ ਕਰਵਾਉਣ ਦਾ ਮਨੋਵਿਗਿਆਨਕ ਜਾਲ।", [
    'ਸੁਤੰਤਰ ਸੋਚ ਬਣਾਈ ਰੱਖੋ',
    'ਭੀੜ ਦੇ ਦਬਾਅ ਤੋਂ ਬਚੋ',
    'ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ ਕਰੋ'
  ]),
  ur: createLocalizedRecord('ur', "کم قیمت کا جھانسہ: پہلے سستا سودا طے کر کے بعد میں شرائط بدلنا", "ابتداء میں پرکشش قیمت پر رضامندی حاصل کرنا، اور جب گاہک ارادہ پکا کر لے تو خفیہ چارجز کا بوجھ ڈال دینا۔", [
    'آزادانہ تجزیہ کریں',
    'اجتماعی دباؤ سے محفوظ رہیں',
    'سوچ سمجھ کر فیصلہ لیں'
  ]),
  or: createLocalizedRecord('or', "ଲୋ-ବଲ୍ କୌଶଳ: ପ୍ରଥମେ କମ୍ ଦାମ୍ କହି ପରେ ଅତିରିକ୍ତ ଶୁଳ୍କ ଲଗାଇବା", "ପ୍ରଥମେ ଆକର୍ଷଣୀୟ ଦରରେ ରାଜି କରାଇ ନେବା ଏବଂ ଗ୍ରାହକ ମନସ୍ଥ କଲା ପରେ ଗୁପ୍ତ ଖର୍ଚ୍ଚ ଯୋଡ଼ି ଲୁଟିବାର ବିକ୍ରୟ କୌଶଳ।", [
    'ସ୍ୱାଧୀନ ଭାବରେ ବିଚାର କରନ୍ତୁ',
    'ଦଳୀୟ ଚାପରେ ଭୁଲ କରନ୍ତୁ ନାହିଁ',
    'ସଠିକ୍ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ'
  ]),
  as: createLocalizedRecord('as', "ল’-বল কৌশল: প্ৰথমে কম মূল্যৰ প্ৰলোভন দেখুৱাই পিছত চৰ্ত সলনি কৰা", "আগতীয়াকৈ সস্তাত চুক্তি কৰি মানুহক আৱদ্ধ কৰাৰ পিছত লুকাই থকা মাচুল যোগ কৰি মূল্য বৃদ্ধি কৰাৰ কুটিল ব্যৱসায়িক পদ্ধতি।", [
    'স্বতন্ত্ৰভাৱে বিশ্লেষণ কৰক',
    'দলৰ অনুচিত প্ৰভাৱত নপৰিব',
    'সঠিক সিদ্ধান্ত লওক'
  ]),
};
