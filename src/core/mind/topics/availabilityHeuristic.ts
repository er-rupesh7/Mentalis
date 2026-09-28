import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: Availability Heuristic: Why Dramatic Memories Distort Probability
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Tversky & Kahneman (1973): Availability: A heuristic for judging frequency and probability
 * - Slovic, Fischhoff & Lichtenstein (1979): Rating the risks
 * - Schwarz et al. (1991): Ease of retrieval as information
 */

export const TOPIC_AVAILABILITY_HEURISTIC_EN: MindTopicDetail = {
  id: 'availability_heuristic',
  categoryId: 'cognitive_biases',
  slug: 'availability-heuristic',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 3,
  viewCount: 8420,
  shareCount: 640,
  bookmarkCount: 1420,
  title: 'Availability Heuristic: Why Dramatic Memories Distort Probability',
  subtitle: 'We judge the frequency of an event not by statistics, but by how easily an example comes to mind.',
  shortDescription: 'A mental shortcut where people evaluate the probability or frequency of an event based on how easily recent, emotional, or vivid instances can be retrieved from memory.',
  oneLineExplanation: 'If you can easily recall it, your brain instinctively assumes it happens all the time.',

  summary30s: 'The availability heuristic causes the human brain to confuse emotional vividness with real-world probability. Because a sensational airplane crash or shark attack produces intense, unforgettable mental imagery, we overestimate its statistical frequency—while completely ignoring mundane, high-probability killers like cardiovascular disease or traffic accidents.',

  coreConcept: 'Formulated by Amos Tversky and Daniel Kahneman in 1973, the availability heuristic operates on memory accessibility. The human brain does not possess a built-in statistical database; instead, it uses ease of recall as a proxy for frequency. When news outlets and social media algorithms amplify rare, terrifying, or dramatic events, those memories become highly accessible, radically warping our perception of risk.',
  summary60s: 'When asked whether homicide or diabetes claims more lives each year, most people guess homicide. In reality, diabetes kills nearly ten times more people. Why does our intuition fail so spectacularly? Because homicides are dramatic, highly publicized, and emotionally charged, making them effortless to retrieve from memory. Diabetes is quiet, gradual, and rarely leads evening news bulletins. Your brain substitutes the difficult question ("What is the mathematical frequency of X?") with an easy question ("How easily can I recall an instance of X?").',

  quickTakeaways: [
    'Vividness Over Probability: Shocking or terrifying events feel vastly more common than dull, statistical risks',
    'Media Distortion: News feeds monetize emotional arousal, creating an artificial epidemic of fear',
    'Recency Effect: Events that occurred yesterday dominate risk forecasts compared to historical trends',
    'Base-Rate Antidote: Never estimate danger from personal memory; always look up base-rate denominator data',
  ],

  whyItHappens: 'Cognitive economy and evolutionary salience. Calculating Bayesian probabilities in ancestral hunter-gatherer environments was impossible; remembering a vivid predator attack or poisonous berry encounter kept our ancestors alive. Emotional shock tags memories with high neurological priority.',
  evolutionaryMechanism: 'A single vivid encounter with a sabertooth tiger carried life-or-death significance. Overestimating the likelihood of a repeat predator ambush was harmless; underestimating it was fatal. Thus, hyper-accessible danger memories became an evolutionary survival feature.',

  howItWorks: 'The process involves three sequential cognitive steps: (1) Prompt: Facing an uncertain risk evaluation; (2) Retrieval: Searching memory for vivid reference examples; (3) Substitution: Rating the probability directly proportional to the ease and speed of that memory retrieval.',
  whereYouEncounterIt: 'Fear of flying after watching news about air turbulence, retail investors panic-selling stocks after one sensational crash headline, hypochondria after reading rare medical symptoms online, and public policy disproportionately funding sensational risks over preventive healthcare.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Perceived Risk vs. Actuarial Reality',
    description: 'How dramatic mental accessibility diverges from statistical frequency.',
    analogySideA: {
      label: 'Cognitive Availability (The News Feed)',
      detail: '"Plane crashes, terrorist attacks, and shark encounters are everywhere. Travel is becoming extremely dangerous!"',
    },
    analogySideB: {
      label: 'Actuarial Probability (The Real Data)',
      detail: '"Commercial aviation fatality rate is 1 in 11 million flights. Driving to the airport is 1,000 times more dangerous."',
    },
  },

  researchSummary: 'In Tversky & Kahneman\'s landmark 1973 experiments, participants were asked whether the English language contains more words starting with the letter "K" or words where "K" is the third letter. Although there are three times as many words with "K" in the third position (ask, lake, make), 70% of participants guessed first-letter words because words beginning with "K" (kite, kangaroo) are far easier to retrieve from memory.',
  limitationsAndControversies: 'Norbert Schwarz et al. (1991) demonstrated that availability depends not merely on the content retrieved, but on the subjective difficulty of retrieval. When subjects were asked to list 12 examples of their own assertiveness (a difficult retrieval task), they rated themselves as less assertive than those asked to list only 6 examples.',
  commonMisconceptions: 'Common myth: "Availability heuristic only affects irrational, anxious people." Reality: Highly educated professionals, including physicians diagnosing rare diseases and financial analysts forecasting market crashes, exhibit identical availability bias when memorable case studies are top of mind.',

  howToRecognize: [
    'Making urgent financial or lifestyle decisions immediately after reading a single viral social media post',
    'Experiencing overwhelming dread about extremely rare hazards (plane crashes, snake bites, lightning) while ignoring daily seatbelt or sleep habits',
    'Concluding that "crime is skyrocketing" because your neighborhood group chats share Ring doorbell clips of suspicious footsteps',
    'Assuming your friend\'s anecdotal startup failure proves that starting a business in that sector is universally doomed',
  ],

  scenarios: [
    {
      id: 'scen_avail_01',
      scenarioType: 'indian_context',
      title: 'The Flight Anxiety vs. Highway Drive to Goa',
      vignette: 'Pooja from Bengaluru has to attend a wedding in Goa. After watching television coverage of severe clear-air turbulence on an international flight, she panics and cancels her 50-minute commercial flight ticket, opting instead to drive 12 hours on an unlit, rain-slicked single-lane highway. When her husband points out that Indian highway fatal accidents occur every 3 minutes, Pooja insists: "Did you not see the airplane footage on TV? People hit the ceiling! Cars are much safer because my hands are on the steering wheel."',
      breakdownAnalysis: 'Pooja is dominated by the availability heuristic. The viral turbulence footage provided visceral, shocking mental pictures that are instantly retrievable. The chronic, dull statistical hazard of highway driving has zero emotional novelty, rendering her blind to a 100x higher actuarial fatality risk.',
      recommendedAction: 'Acknowledge the emotional response, then demand denominator data: "The airplane video was terrifying, but 100,000 commercial flights landed safely today. Statistically, highway travel is exponentially riskier."',
    },
  ],

  examples: [
    {
      id: 'ex_avail_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'The Post-Crash Stock Panic',
      description: 'An investor reads about a single company stock plunging 40% overnight due to accounting fraud. They immediately liquidate their entire diversified index fund portfolio, convinced the global economy is collapsing.',
      takeaway: 'Vivid single-company collapses do not represent systemic broad-market baseline returns.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_avail_01',
      scenarioContext: 'A manager must choose between two marketing campaigns: Campaign A has a historical average conversion of 4.2% across 80 past campaigns. Campaign B was run once last month by a charismatic colleague and produced an extraordinary, celebrated 9% viral spike that everyone in the office still talks about.',
      question: 'Which decision demonstrates resistance to the availability heuristic?',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Choose Campaign B because everyone clearly remembers its triumphant launch meeting',
          explanation: 'This is the exact availability trap: confusing memorable office buzz with replicable baseline probability.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Analyze the sample size and underlying distribution of Campaign A versus the single outlier run of Campaign B',
          explanation: 'Accurate: demanding statistical denominators rather than relying on the emotional salience of the outlier.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Select Campaign B because recent events are always more predictive of modern customer behavior',
          explanation: 'Recency without sample size validation frequently leads to chasing noisy anomalies.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'When emotional vividness clashes with statistical sample size, always anchor to the robust sample size.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Deliberately counteract mental availability by pausing to check base-rate statistical tables before making decisions based on memorable anecdotes.',
  psychologicalDefenses: [
    {
      title: 'Demand the Denominator',
      instruction: 'Whenever a dramatic story provokes anxiety, immediately ask: "Out of how many total occurrences did this happen?" Never evaluate a numerator without its denominator.',
    },
    {
      title: 'Implement the 48-Hour News Buffer',
      instruction: 'Refrain from making financial, medical, or security changes for 48 hours after encountering sensational media coverage to allow emotional arousal to decay.',
    },
    {
      title: 'Consult Actuarial Baseline Tables',
      instruction: 'Look up actual national mortality, default, or accident tables before estimating personal lifestyle or investment hazard levels.',
    },
  ],

  reflectionPrompt: 'Think of a recent fear or decision: was your perception driven by hard data or a dramatic news story or video you saw recently?',

  references: [
    {
      id: 'ref_tversky_1973',
      authors: 'Tversky, A., & Kahneman, D.',
      year: 1973,
      title: 'Availability: A heuristic for judging frequency and probability',
      publicationName: 'Cognitive Psychology',
      volumeIssue: '5(2), 207-232',
      doi: '10.1016/0010-0285(73)90033-9',
      evidenceStrength: 'meta_analysis',
    },
    {
      id: 'ref_slovic_1979',
      authors: 'Slovic, P., Fischhoff, B., & Lichtenstein, S.',
      year: 1979,
      title: 'Rating the risks',
      publicationName: 'Environment: Science and Policy for Sustainable Development',
      volumeIssue: '21(3), 14-39',
      doi: '10.1080/00139157.1979.9933091',
      evidenceStrength: 'systematic_review',
    },
  ],

  relatedTopics: [
    {
      topicId: 'confirmation_bias',
      slug: 'confirmation-bias',
      title: 'Confirmation Bias',
      relationshipType: 'prerequisite',
    },
    {
      topicId: 'algorithmic_reinforcement',
      slug: 'algorithmic-reinforcement',
      title: 'Algorithmic Reinforcement',
      relationshipType: 'amplified_by',
    },
  ],
};

export const TOPIC_AVAILABILITY_HEURISTIC_HINGLISH: MindTopicDetail = {
  ...TOPIC_AVAILABILITY_HEURISTIC_EN,
  title: 'Availability Heuristic: Dimaag Ki Dramatic Yaadein Aur Galat Andaaze',
  subtitle: 'Hum statistics dekhkar nahi, balki jo baat dimaag me aasani se yaad aa jaye uspar faisla lete hain.',
  shortDescription: 'Jab dimaag kisi ghatna ki probability ko is baat se naapta hai ki uski taaza ya dramatic misaal kitni aasani se yaad aati hai.',
  oneLineExplanation: 'Agar koi ghatna aasaani se dimaag me aa jaye, toh lagta hai wo har jagah ho rahi hai.',
  summary30s: 'Availability Heuristic hamare dimaag ka wo shortcut hai jisme hum kisi khatre ya ghatna ki frequency ko actual data se nahi, balki uski dramatic yaadon se naapte hain. Ek plane crash ya shark attack ka dar hume road accidents ya heart disease se zyada lagta hai kyunki news par crash ki visual imagery bohot intense hoti hai.',
  coreConcept: 'Amos Tversky aur Daniel Kahneman ne 1973 me discover kiya tha ki dimaag statistical calculations karne ke bajaye "ease of recall" par rely karta hai. Jo baat news ya WhatsApp par sensational banakar dikhayi jati hai, wo memory me upar rehti hai aur hume lagta hai duniya me wahi sabse bada khatra hai.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Sensational Yaad vs Statistical Sach',
    description: 'Dimaag jo aasani se recall karta hai use hi aam sach maan leta hai.',
    analogySideA: {
      label: 'Statistical Baseline',
      detail: 'Actual population data aur base rates ko check karke neutral decision lena.',
    },
    analogySideB: {
      label: 'Emotional Availability',
      detail: 'News ya WhatsApp par dekhi gayi dramatic video ke darr se overreact karna.',
    },
  },

  examples: [
    {
      id: 'ex_avail_01',
      domain: 'health',
      displayOrder: 1,
      title: 'Plane Crash vs Car Ride Ka Darr',
      description: 'Ek air crash ki khabar dekhte hi log hawaai yatra se darne lagte hain, jabki statistics ke mutabik highway par car chalana flight se 100 guna zyada khatarnak hota hai.',
      takeaway: 'Dramatic visual impact dimaag ko actual probability bhula deta hai.',
    },
  ],

  scenarios: [
    {
      id: 'scen_avail_01',
      scenarioType: 'indian_context',
      title: 'Plane vs Car Ka Safar',
      narrativeContext: 'Rohan ne TV par ek plane crash ki live news dekhi jisme bohot footage dikhayi gayi. Agle hafte use Mumbai se Goa jana tha. Dar ke maare usne flight cancel karke 14 ghante car chala kar jane ka faisla kiya, yeh soche bina ki car accident ka statistical risk flight crash se 100 guna zyada hota hai.',
      biasInAction: 'Plane crash ki visual imagery itni taaza aur frightening thi ki Rohan ke dimaag ne flight ke khatre ko bohot bada maan liya aur highway ke real khatre ko ignore kar diya.',
      optimalResponse: 'Dimaag se poochein: "Kya yeh cheez sach me zyada risky hai ya bas iski dramatic video maine haal hi me dekhi hai?" Data hamesha emotions se bada hota hai.',
      vignette: 'Rohan ne TV par ek plane crash ki live news dekhi jisme bohot footage dikhayi gayi. Agle hafte use Mumbai se Goa jana tha. Dar ke maare usne flight cancel karke 14 ghante car chala kar jane ka faisla kiya, yeh soche bina ki car accident ka statistical risk flight crash se 100 guna zyada hota hai.',
      breakdownAnalysis: 'Plane crash ki visual imagery itni taaza aur frightening thi ki Rohan ke dimaag ne flight ke khatre ko bohot bada maan liya aur highway ke real khatre ko ignore kar diya.',
      recommendedAction: 'Dimaag se poochein: "Kya yeh cheez sach me zyada risky hai ya bas iski dramatic video maine haal hi me dekhi hai?" Data hamesha emotions se bada hota hai.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_avail_01',
      scenarioContext: 'Ek marketing manager ko 2 campaigns me se ek chunna hai: Campaign A ka 80 past campaigns me average conversion 4.2% raha hai. Campaign B pichle mahine ek baar chala tha aur office me sabhi log uske 9% viral spike ki taareef kar rahe hain.',
      question: 'Kaunsa faisla availability heuristic ke trap se bachata hai?',
      prompt: 'Kaunsa faisla availability heuristic ke trap se bachata hai?',
      scenarioText: 'Ek marketing manager ko 2 campaigns me se ek chunna hai: Campaign A ka 80 past campaigns me average conversion 4.2% raha hai. Campaign B pichle mahine ek baar chala tha aur office me sabhi log uske 9% viral spike ki taareef kar rahe hain.',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Campaign B ko chunna kyunki sabhi ko uski meeting aur viral buzz achhi tarah yaad hai.',
          explanation: 'Yeh exact availability trap hai: memorable office buzz ko real baseline probability samajh lena.',
          isCorrect: false,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Campaign A ke 80 campaigns ke sample size aur underlying data ko evaluate karna, bajaye Campaign B ke single outlier ke.',
          explanation: 'Sahi: Statistical sample size par focus karna, bajaye emotional salience ke.',
          isCorrect: true,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Campaign B ko chunna kyunki recent events hamesha future behavior ko predict karte hain.',
          explanation: 'Sample size ke bina recency par bharosa karna hamesha misleading anomalies ki taraf le jata hai.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_b',
      cognitiveTakeaway: 'Jab dramatic memory aur statistical sample size me takkar ho, toh hamesha robust sample size ko chunein.',
      difficulty: 'easy',
    },
  ],

  psychologicalDefenses: [
    {
      title: 'Demand the Denominator',
      instruction: 'Jab bhi koi dramatic khabar darr paida kare, turant poochein: "Kul kitne logon me se kitno ke sath yeh hua?" (Total population baseline check karein).',
    },
    {
      title: 'Base Rate Audit',
      instruction: 'Faisla lene se pehle baseline statistical probability table check karein, na ki taaza media headline.',
    },
  ],
};

export const TOPIC_AVAILABILITY_HEURISTIC_HI: MindTopicDetail = {
  ...TOPIC_AVAILABILITY_HEURISTIC_EN,
  title: 'Availability Heuristic (उपलब्धता अनुमानी)',
  subtitle: 'हम आंकड़ों से नहीं, बल्कि जो उदाहरण दिमाग में आसानी से आ जाए उससे संभावना का अनुमान लगाते हैं।',
  shortDescription: 'एक संज्ञानात्मक पूर्वाग्रह जहाँ लोग किसी घटना की संभावना का मूल्यांकन इस आधार पर करते हैं कि उसकी याददाश्त कितनी आसानी से दिमाग में आ जाती है।',
  oneLineExplanation: 'यदि कोई बात आसानी से याद आ जाए, तो दिमाग मानता है कि वह बहुत आम है।',
  summary30s: 'उपलब्धता अनुमानी (Availability Heuristic) के कारण हमारा दिमाग नाटकीय और भावनात्मक घटनाओं को सांख्यिकीय रूप से अधिक सामान्य मान लेता है। जैसे विमान दुर्घटना या आतंकी हमले की खबर दिमाग में तुरंत कौंधती है, इसलिए हमें वह सड़क दुर्घटना या जीवनशैली की बीमारियों से अधिक खतरनाक प्रतीत होती है।',
};


function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_AVAILABILITY_HEURISTIC_EN,
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

export const TOPIC_AVAILABILITY_HEURISTIC: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_AVAILABILITY_HEURISTIC_EN,
  hinglish: TOPIC_AVAILABILITY_HEURISTIC_HINGLISH,
  hi: TOPIC_AVAILABILITY_HEURISTIC_HI,
  gu: createLocalizedRecord('gu', "Availability Heuristic: Why Dramatic Memories Distort Probability (અનુમાની)", "Availability Heuristic: Why Dramatic Memories Distort Probability એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "Availability Heuristic: Why Dramatic Memories Distort Probability (अनुमानी)", "Availability Heuristic: Why Dramatic Memories Distort Probability हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "Availability Heuristic: Why Dramatic Memories Distort Probability (అనుమానం)", "Availability Heuristic: Why Dramatic Memories Distort Probability అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "Availability Heuristic: Why Dramatic Memories Distort Probability (உள்ளுணர்வு)", "Availability Heuristic: Why Dramatic Memories Distort Probability என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "Availability Heuristic: Why Dramatic Memories Distort Probability (ಅನುಮಾನಿಕ)", "Availability Heuristic: Why Dramatic Memories Distort Probability ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "Availability Heuristic: Why Dramatic Memories Distort Probability (അനുമാനം)", "Availability Heuristic: Why Dramatic Memories Distort Probability എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "Availability Heuristic: Why Dramatic Memories Distort Probability (অনুমান)", "Availability Heuristic: Why Dramatic Memories Distort Probability হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "Availability Heuristic: Why Dramatic Memories Distort Probability (ਅੰਦਾਜ਼ਾ)", "Availability Heuristic: Why Dramatic Memories Distort Probability ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "Availability Heuristic: Why Dramatic Memories Distort Probability (قیاس)", "Availability Heuristic: Why Dramatic Memories Distort Probability انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "Availability Heuristic: Why Dramatic Memories Distort Probability (ଅନୁମାନ)", "Availability Heuristic: Why Dramatic Memories Distort Probability ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "Availability Heuristic: Why Dramatic Memories Distort Probability (অনুমান)", "Availability Heuristic: Why Dramatic Memories Distort Probability সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
