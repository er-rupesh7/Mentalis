import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_GOAL_GRADIENT_EFFECT_EN: MindTopicDetail = {
  id: 'goal_gradient_effect',
  categoryId: 'consumer_advertising',
  slug: 'goal-gradient-effect',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 9,
  viewCount: 3880,
  shareCount: 315,
  bookmarkCount: 645,
  title: "The Goal-Gradient Effect: The Artificial Finish Line Rush",
  subtitle: "Clark Hull’s behavioral discovery on why people accelerate effort and spending as they approach a reward.",
  shortDescription: "The psychological tendency for humans and animals to increase their effort, frequency of action, and motivation as they perceive themselves getting closer to a desired goal or reward.",
  oneLineExplanation: "The closer you feel to the finish line, the faster you run and the more you spend.",

  summary30s: "First discovered in 1932 by psychologist Clark Hull with rats in a maze and proven in consumer marketing by Ran Kivetz, Oleg Urminsky, and Yuhuang Zheng in 2006, the Goal-Gradient Effect explains loyalty programs. Customers accelerate coffee purchases as they approach a free 10th cup stamp.",
  coreConcept: "Motivation is not linear; it is an accelerating exponential curve governed by perceived distance to completion. Furthermore, Kivetz proved the power of \"Endowed Progress\": customers given a 12-stamp loyalty card with 2 pre-stamped bonus circles completed the card twice as fast as customers given a blank 10-stamp card, even though both required purchasing 10 coffees!",
  summary60s: "Consumer platforms exploit this through progress bars (LinkedIn profile completion at 85%), tier status qualification (only 1,200 points to Gold status!), and delivery trackers. By granting illusionary head starts and displaying proximity to rewards, companies trigger urgency and repeat purchases.",
  quickTakeaways: ["Effort and spending accelerate dramatically as the finish line approaches","Endowed progress (giving an artificial head start) doubles completion rates","A 12-stamp card with 2 free stamps outperforms a blank 10-stamp card","The antidote is auditing whether you actually want the reward or are just addicted to completing the bar"],

  whyItHappens: "Dopamine reward prediction: dopamine ramps up continuously as spatial or temporal distance to an anticipated reward contracts.",
  evolutionaryMechanism: "Predators stalking prey sprint with maximum energy during the final meters when success probability is highest.",

  howItWorks: "Start at Step 1 (Low motivation) -> Reach Step 8 (Dopamine spikes) -> Urge to cross line peaks -> Extra purchases made hastily -> Reward claimed -> Post-achievement motivation crash.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Blank 10-Stamp Card vs. 12-Stamp Card with 2 Free Stamps",
    description: "Kivetz’s famous Columbia University loyalty card field experiment.",
    analogySideA: {
      label: "Blank 10-Stamp Card (0% Complete)",
      detail: "Took 15.6 days to complete; 19% completion rate. Perceived as starting from zero.",
    },
    analogySideB: {
      label: "12-Stamp Card with 2 Pre-stamps (16% Complete)",
      detail: "Took only 8.6 days to complete! 34% completion rate! Same 10 coffees, but perceived as an active race.",
    },
  },

  researchSummary: "Kivetz, Urminsky & Zheng (2006, Journal of Marketing Research) and Hull (1932, Psychological Review) demonstrated that proximity to rewards significantly accelerates purchase velocity and decreases inter-purchase intervals.",
  references: [
    {
      id: 'ref_goal_gradient_effect_01',
      title: "The Goal-Gradient Hypothesis Resurrected: Purchase Acceleration, Illusionary Progress, and Customer Retention",
      citation: "Kivetz, R., et al. (2006). Journal of Marketing Research, 43(1), 39–58.",
      authors: "Kivetz, R., Urminsky, O., & Zheng, Y.",
      publicationYear: 2006,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1509/jmkr.43.1.39",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_goal_gradient_effect_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Airline Tier Rush in Mumbai",
      narrativeContext: "Vikram realized on December 20 that he was only 800 tier points away from maintaining his Airline Gold status. He booked a totally unnecessary round-trip weekend flight from Mumbai to Goa for ₹14,000, sat in the airport lounge, and flew back on the same plane just to cross the threshold.",
      biasInAction: "Vikram fell into the Goal-Gradient trap: the close proximity of the status finish line triggered an irrational urgency that blinded him to the financial absurdity of the flight.",
      optimalResponse: "Calculate the cold cash value of the reward: Gold tier perks (free bags and lounge access) were worth ₹3,000, yet he spent ₹14,000 to acquire them.",
      reflectionPrompt: "Have you ever bought an extra coffee, pizza, or flight purely to fill the last remaining stamp or badge on a loyalty app?",
    },
  ],

  examples: [
    {
      id: 'ex_goal_gradient_effect_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Airline Tier Rush in Mumbai",
      description: "Vikram realized on December 20 that he was only 800 tier points away from maintaining his Airline Gold status. He booked a totally unnecessary round-t...",
      takeaway: "Effort and spending accelerate dramatically as the finish line approaches",
    },
  ],

  howToRecognize: "Feeling an accelerating impatience and spending urge when you notice a progress meter sitting between 80% and 95% complete.",
  whereYouEncounterIt: "Coffee loyalty cards, frequent flyer tiers, gaming battle passes, fitness streak apps, and profile setup bars.",
  commonMisconceptions: "Myth: \"Loyalty cards give me free value.\" Fact: Loyalty programs are engineered behavioral accelerants designed to increase your purchase frequency and total lifetime spend by 20% to 40%.",
  limitationsAndControversies: "When applied to personal health habits (e.g., closing your Apple Watch fitness rings), the goal-gradient effect can be harnessed as a positive motivational engine.",

  howToRespond: "The Reward Valuation Test: Before making a purchase to complete a streak or tier, calculate: \"How much would I pay for this final perk in cash right now?\" If less than the required spend, abandon the goal.",
  psychologicalDefenses: [{"title":"The Tier Rationality Audit","instruction":"Never spend money to maintain an airline or hotel tier unless the guaranteed future savings exceed the qualification expense."},{"title":"The Artificial Head Start Immunity","instruction":"When an app gives you \"Bonus points just for signing up!\", recognize it as an endowed progress hook to drag you into their goal gradient."}],

  practiceQuestions: [
    {
      id: 'pq_goal_gradient_effect_01',
      difficulty: 'beginner',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A coffee shop runs two loyalty promotions. Card A requires 8 stamps (starts blank). Card B requires 10 stamps (comes with 2 stamps already stamped for free). Which card will customers complete faster and why?",
      scenarioText: "Both cards require purchasing exactly 8 coffees to earn the free drink.",
      explanation: "Card B leverages Endowed Progress and the Goal-Gradient Effect: starting at 20% progress makes customers feel they are already on the home stretch, accelerating purchase frequency.",
      antidoteAdvice: "Focus on the absolute number of transactions required, not the illusionary percentage of completion.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Card A, because 8 total boxes looks less intimidating than 10 boxes.",
          text: "Card A, because 8 total boxes looks less intimidating than 10 boxes.",
          feedbackText: "Incorrect. Starting from absolute zero triggers procrastination.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Card B, because endowed progress makes consumers perceive themselves as closer to the goal, accelerating purchases.",
          text: "Card B, because endowed progress makes consumers perceive themselves as closer to the goal, accelerating purchases.",
          feedbackText: "Correct! This was proven empirically by Kivetz and colleagues.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Both cards will be completed at the exact same speed because the math is identical.",
          text: "Both cards will be completed at the exact same speed because the math is identical.",
          feedbackText: "Incorrect. Human behavior is influenced by framing, not just pure math.",
        }
      ],
    },
  ],

  reflectionPrompt: "Which loyalty app on your phone is currently nudging you to spend money just to \"maintain\" a streak or status level?",
  tags: ['Mentalab Mind', 'consumer_advertising'],
  relatedTopics: [],
  seoTitle: `${"The Goal-Gradient Effect: The Artificial Finish Line Rush"} | Mentalab Mind`,
  seoDescription: "The psychological tendency for humans and animals to increase their effort, frequency of action, and motivation as they perceive themselves getting closer to a desired goal or reward.",
  canonicalUrl: '/mind/consumer-advertising/goal-gradient-effect',
  ogImageUrl: '/images/mind/goal-gradient-effect.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Consumer platforms exploit this through progress bars (LinkedIn profile completion at 85%), tier status qualification (only 1,200 points to Gold status!), and delivery trackers. By granting illusionary head starts and displaying proximity to rewards, companies trigger urgency and repeat purchases.",
};

export const TOPIC_GOAL_GRADIENT_EFFECT_HINGLISH: MindTopicDetail = {
  ...TOPIC_GOAL_GRADIENT_EFFECT_EN,
  title: "Goal-Gradient Effect: Aakhri Kadam Ki Bhaagdoud",
  subtitle: "Kyu manjil ke paas aate hi hamara kharcha aur bechaini dono double ho jate hain.",
  shortDescription: "Clark Hull aur Kivetz ki research: Progress bar 80% dekh kar log faltu shopping karke target poora karne daudte hain.",
  oneLineExplanation: "Manjil jitni paas dikhti hai, dimaag utni tezi se bina soche daudta hai.",
  summary30s: "1932 me Clark Hull ne dekha ki choohe cheese ke paas aate hi tezi se bhaagne lagte hain. Columbia University ke Kivetz ne prove kiya ki yahi insaano ke sath hota hai: Coffee shop me 10 cup par 1 free cup ka card ho, to 8th aur 9th cup log roz-roz peene lagte hain taaki reward mil jaye.",
  coreConcept: "Ise kehte hain \"Endowed Progress\". Agar aapko 10 stamps ka khali card mile to aap sust rahoge. Par agar 12 stamps ka card mile jisme 2 pehle se stamped ho, to aap do guna tezi se coffee khareedoge! Halanki dono me 10 coffee hi khareedni thi, par 2 pre-stamps ne dimaag ko race me daal diya.",
  summary60s: "Airlines ke status points aur Zomato Gold is trick se chalte hain. Saal ke end me log Gold tier bachane ke liye ₹15,000 ki faltu flight book kar lete hain, jabki Gold tier ke fayde sirf ₹3,000 ke hote hain! Progress bar ka nasha insaan se bewakoofi karwata hai.",
  quickTakeaways: ["Progress bar 80% hote hi dimaag rationality kho kar andha daudne lagta hai","Companies 2 free stamps dekar aapko jhootha head start deti hain (Endowed Progress)","Tier status ya streaks bachane ke liye faltu shopping karna sabse bada financial loss hai","Free reward ke value ko required kharche ke sath compare karein"],
  howItWorks: "Card mila (2 stamps free) -> Dimaag ne socha \"20% to ho gaya\" -> Tezi se shopping ki -> 90% par aakar bechaini hui -> Faltu kharcha karke target poora kiya.",
  howToRespond: "Math over Progress Bar: Poocho ki reward ki asli keemat kya hai? Agar ₹500 ke free reward ke liye ₹2,000 ka extra kharcha karna pad raha hai, to card faad kar phek do.",
  practiceQuestions: [
    {
      ...TOPIC_GOAL_GRADIENT_EFFECT_EN.practiceQuestions[0],
      prompt: "Ek coffee shop Card A deti hai (8 stamps khali) aur Card B (10 stamps jisme 2 pehle se free stamped hain). Dono me 8 coffee khareedni hain. Log kaunsa card jaldi poora karenge?",
      explanation: "Card B me 2 free stamps hone ki wajah se endowed progress feel hoti hai, jisse log jaldi-jaldi khareedte hain.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Card A, kyuki 8 boxes kam lagte hain.",
          text: "Card A, kyuki 8 boxes kam lagte hain.",
          feedbackText: "Galat. Zero se start karna boring lagta hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Card B, kyuki 2 free stamps se lagta hai ki hum race me aage hain (Endowed Progress).",
          text: "Card B, kyuki 2 free stamps se lagta hai ki hum race me aage hain (Endowed Progress).",
          feedbackText: "Sahi! Kivetz ki research ne yahi prove kiya tha.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Dono me barabar time lagega kyuki dono me 8 coffee hi leni hain.",
          text: "Dono me barabar time lagega kyuki dono me 8 coffee hi leni hain.",
          feedbackText: "Galat. Psychology math se alag behave karti hai.",
        }
      ],
    },
  ],
  seoTitle: `${"Goal-Gradient Effect: Aakhri Kadam Ki Bhaagdoud"} | Mentalab Mind`,
  seoDescription: "Clark Hull aur Kivetz ki research: Progress bar 80% dekh kar log faltu shopping karke target poora karne daudte hain.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_GOAL_GRADIENT_EFFECT_EN,
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

export const TOPIC_GOAL_GRADIENT_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_GOAL_GRADIENT_EFFECT_EN,
  hinglish: TOPIC_GOAL_GRADIENT_EFFECT_HINGLISH,
  hi: createLocalizedRecord('hi', "लक्ष्य-प्रवणता प्रभाव (Goal-Gradient Effect)", "लक्ष्य या पुरस्कार के निकट पहुंचते ही प्रयास, गति और व्यय में होने वाली अप्रत्याशित तीव्र वृद्धि का मनोवैज्ञानिक विश्लेषण।", ["समाप्ति रेखा के निकट आते ही व्यय और प्रयास तीव्र हो जाते हैं","कृत्रिम शुरुआत (Endowed Progress) निष्ठा कार्यक्रमों की सफलता बढ़ाती है","पुरस्कार के वास्तविक मूल्य की तुलना आवश्यक खर्च से करें"]),
  gu: createLocalizedRecord('gu', "ધ્યેય-પ્રવણતા અસર (Goal-Gradient Effect)", "લક્ષ્ય નજીક દેખાતા જ ઉત્સાહ અને ખર્ચમાં ઝડપી વધારો થવાની ગ્રાહકની માનસિકતા.", ["લક્ષ્ય નજીક હોય ત્યારે સંયમ રાખો","લોયલ્ટી કાર્ડ્સના ચક્કરમાં ન પડો","વાસ્તવિક લાભની ગણતરી કરો"]),
  mr: createLocalizedRecord('mr', "ध्येय-प्रवणता प्रभाव (Goal-Gradient Effect)", "ध्येय किंवा बक्षीस जवळ आल्याचे दिसताच प्रयत्न आणि खर्चाचा वेग वाढण्याचे मानसशास्त्र.", ["शेवटच्या टप्प्यात घाईगडबड टाळा","लॉयल्टी प्रोग्राम्सचे गणित समजून घ्या","बक्षिसाचे वास्तविक मूल्य तपासा"]),
  te: createLocalizedRecord('te', "లక్ష్య ప్రవణత ప్రభావం (Goal-Gradient Effect)", "లక్ష్యం లేదా బహుమతి సమీపిస్తున్న కొద్దీ శ్రమ మరియు ఖర్చు వేగవంతమయ్యే మానసిక ప్రవర్తన.", ["ముగింపు రేఖ వద్ద సంయమనం పాటించండి","లాయల్టీ కార్డుల ఉచ్చులో పడవద్దు","నిజమైన ప్రయోజనాన్ని లెక్కించండి"]),
  ta: createLocalizedRecord('ta', "இலக்கு சாய்வு விளைவு (Goal-Gradient Effect)", "இலக்கு அல்லது வெகுமதி நெருங்கும் போது முயற்சியும் செலவும் அதிவேகமாக அதிகரிக்கும் உளவியல்.", ["இலக்கு நெருங்கும் போது நிதானம் தேவை","விசுவாச அட்டைகளின் தந்திரத்தை உணருங்கள்","உண்மையான மதிப்பை கணக்கிடுங்கள்"]),
  kn: createLocalizedRecord('kn', "ಗುರಿ-ಪ್ರವಣತೆಯ ಪರಿಣಾಮ (Goal-Gradient Effect)", "ಗುರಿ ಅಥವಾ ಬಹುಮಾನ ಸಮೀಪಿಸಿದಂತೆ ಪ್ರಯತ್ನ ಮತ್ತು ಖರ್ಚಿನ ವೇಗ ಹೆಚ್ಚಾಗುವ ಮಾನಸಿಕ ಪ್ರವೃತ್ತಿ.", ["ಅಂತಿಮ ಹಂತದಲ್ಲಿ ಸಂಯಮವಿರಲಿ","ಲಾಯಲ್ಟಿ ಕಾರ್ಡ್‌ಗಳ ತಂತ್ರ ತಿಳಿಯಿರಿ","ನಿಜವಾದ ಲಾಭವನ್ನು ಲೆಕ್ಕಹಾಕಿ"]),
  ml: createLocalizedRecord('ml', "ലക്ഷ്യ-പ്രവണതാ പ്രഭാവം (Goal-Gradient Effect)", "ലക്ഷ്യം അടുത്തെത്തുമ്പോൾ പരിശ്രമവും ചെലവും വേഗത്തിലാക്കുന്ന ഉപഭോക്തൃ മാനസികാവസ്ഥ.", ["അവസാന ഘട്ടത്തിൽ വിവേകം കൈവിടരുത്","ലോയൽറ്റി ഓഫറുകളിൽ ജാഗ്രത പാലിക്കുക","യഥാർത്ഥ മൂല്യം പരിശോധിക്കുക"]),
  bn: createLocalizedRecord('bn', "লক্ষ্য-প্রবণতা প্রভাব (Goal-Gradient Effect)", "লক্ষ্য বা পুরস্কারের কাছাকাছি পৌঁছানোর সাথে সাথে প্রচেষ্টা ও ব্যয়ের গতি নাটকীয়ভাবে বৃদ্ধির মনস্তাত্ত্বিক সত্যতা।", ["শেষ মুহূর্তে অযথা খরচ এড়িয়ে চলুন","লয়ালটি কার্ডের কৌশল বুঝুন","পুরস্কারের আসল মূল্য বিচার করুন"]),
  pa: createLocalizedRecord('pa', "ਟੀਚਾ-ਪ੍ਰਵਣਤਾ ਪ੍ਰਭਾਵ (Goal-Gradient Effect)", "ਇਨਾਮ ਜਾਂ ਟੀਚੇ ਦੇ ਨੇੜੇ ਪਹੁੰਚਦੇ ਹੀ ਖਰਚੇ ਅਤੇ ਜਲਦਬਾਜ਼ੀ ਦੀ ਰਫ਼ਤਾਰ ਤੇਜ਼ ਹੋਣ ਦੀ ਮਾਨਸਿਕ ਆਦਤ।", ["ਆਖ਼ਰੀ ਪਲਾਂ ਵਿੱਚ ਸੰਜਮ ਰੱਖੋ","ਲੌਇਲਟੀ ਕਾਰਡਾਂ ਦੀ ਚਾਲ ਸਮਝੋ","ਇਨਾਮ ਦੇ ਅਸਲ ਮੁੱਲ ਦਾ ਹਿਸਾਬ ਲਗਾਓ"]),
  ur: createLocalizedRecord('ur', "ہدف کی کشش کا اثر (Goal-Gradient Effect)", "کسی انعام یا ہدف کے قریب پہنچتے ہی کوشش اور خریداری کی رفتار غیر معمولی طور پر تیز ہونے کا رجحان۔", ["آخری لمحات میں ہوش مندی برقرار رکھیں","وفاداری کارڈز کے جال سے بچیں","انعام کی اصل قیمت کا اندازہ لگائیں"]),
  or: createLocalizedRecord('or', "ଲକ୍ଷ୍ୟ-ପ୍ରବଣତା ପ୍ରଭାବ (Goal-Gradient Effect)", "ଲକ୍ଷ୍ୟ ବା ପୁରସ୍କାର ନିକଟତର ହେଲେ ଉଦ୍ୟମ ଓ ଖର୍ଚ୍ଚର ଗତି ଦ୍ରୁତ ହେବାର ମନସ୍ତାତ୍ତ୍ୱିକ ପ୍ରବୃତ୍ତି।", ["ଶେଷ ମୁହୂର୍ତ୍ତରେ ସତର୍କ ରୁହନ୍ତୁ","ଲୟାଲ୍ଟି କାର୍ଡର ରହସ୍ୟ ବୁଝନ୍ତୁ","ପ୍ରକୃତ ଲାଭର ହିସାବ କରନ୍ତୁ"]),
  as: createLocalizedRecord('as', "লক্ষ্য-প্ৰৱণতাৰ প্ৰভাৱ (Goal-Gradient Effect)", "লক্ষ্য বা পুৰস্কাৰ ওচৰ চাপিলেই প্ৰচেষ্টা আৰু খৰচৰ গতি অস্বাভাৱিকভাৱে বৃদ্ধি পোৱাৰ মানসিকতা।", ["অন্তিম মুহূৰ্তত সংযম ৰাখক","লয়ালিটি কাৰ্ডৰ কৌশল বুজক","পুৰস্কাৰৰ প্ৰকৃত মূল্য নিৰ্ণয় কৰক"]),
};
