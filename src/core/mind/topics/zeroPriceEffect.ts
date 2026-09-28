import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_ZERO_PRICE_EFFECT_EN: MindTopicDetail = {
  id: 'zero_price_effect',
  categoryId: 'consumer_advertising',
  slug: 'zero-price-effect',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 7,
  viewCount: 3640,
  shareCount: 285,
  bookmarkCount: 595,
  title: "The Zero Price Effect: The Irrational Magnetism of \"Free\"",
  subtitle: "Dan Ariely’s MIT truffle experiment on why zero is an emotional hot button, not just another price.",
  shortDescription: "A psychological phenomenon where the demand for a good, service, or bundle increases exponentially when its price drops to exactly zero, far beyond standard rational economic models.",
  oneLineExplanation: "Zero is not just a price; it is an emotional trigger that disables rational trade-off math.",

  summary30s: "Demonstrated in landmark research by Kristina Shampanier, Nina Mazar, and Dan Ariely at MIT, \"Free\" is a psychological superpower. When given a choice between a luxury Lindt truffle for 15 cents and an ordinary Hershey’s Kiss for 1 cent, 73% chose the luxury truffle. But when both prices were reduced by just one cent (14 cents vs. Free), 69% switched to the inferior Kiss!",
  coreConcept: "In classical economics, a 1-cent price drop should produce the exact same shift in demand across options. But the difference between ₹1 and ₹0 is psychologically infinite compared to the difference between ₹2 and ₹1. The price of zero eliminates the \"pain of paying\" and eliminates the perceived risk of making a mistake, creating a flood of positive affect.",
  summary60s: "Retailers leverage the Zero Price Effect through \"Buy One Get One Free\", \"Free Shipping with ₹999\", and \"Free Gift with Purchase\". Consumers routinely spend ₹400 on extra unneeded items just to avoid a ₹50 shipping fee, acting completely counter to their own financial self-interest.",
  quickTakeaways: ["Zero is an emotional trigger that eliminates the perceived possibility of loss","A 1-cent drop from 1 to 0 produces a massive non-linear surge in consumer demand","Consumers routinely overspend hundreds of rupees just to qualify for \"Free\" shipping","Nothing is free; the cost is paid in personal attention, data, time, or surplus buying"],

  whyItHappens: "Loss aversion and affect heuristic: humans hate losing; paying even 1 rupee involves risk and loss, but zero feels risk-free.",
  evolutionaryMechanism: "Opportunistic foraging: discovering calories or tools that required zero energetic expenditure provided an uncontested survival dividend.",

  howItWorks: "Option A (Luxury @ ₹10) vs Option B (Standard @ ₹1) -> Both reduced by ₹1 -> Option A @ ₹9 vs Option B @ Free -> Brain perceives zero risk in B -> Disregards superior value in A -> Chooses inferior free item.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Rational Economic Step vs. The Zero Price Abyss",
    description: "Ariely’s MIT truffle pricing experiment visualized.",
    analogySideA: {
      label: "15¢ Lindt vs. 1¢ Hershey Kiss",
      detail: "73% choose Lindt Truffle (superior luxury taste worth the extra 14 cents).",
    },
    analogySideB: {
      label: "14¢ Lindt vs. FREE Hershey Kiss",
      detail: "69% switch to FREE Hershey Kiss! Rational trade-off calculation completely collapses.",
    },
  },

  researchSummary: "Shampanier, Mazar & Ariely (2007, Marketing Science) demonstrated across four experiments that the zero price effect cannot be explained by standard economic transaction costs, proving it is driven by emotional affect.",
  references: [
    {
      id: 'ref_zero_price_effect_01',
      title: "Zero as a Special Price: The True Value of Free Products",
      citation: "Shampanier, K., et al. (2007). Marketing Science, 26(6), 742–757.",
      authors: "Shampanier, K., Mazar, N., & Ariely, D.",
      publicationYear: 2007,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1287/mksc.1060.0254",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_zero_price_effect_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Free Shipping Trap in South Delhi",
      narrativeContext: "Karan was buying a ₹650 book online in South Delhi. At checkout, delivery was ₹60. The banner said: \"Add ₹350 more to get FREE Delivery!\" Karan spent 35 minutes searching the site and bought a ₹450 water bottle he didn’t need, spending ₹1,100 instead of ₹710.",
      biasInAction: "Karan fell victim to the Zero Price Effect: he spent ₹450 in actual cash purely to experience the psychological dopamine of \"saving\" ₹60 on shipping.",
      optimalResponse: "Calculate the net ledger: paying ₹60 shipping saves ₹390 in hard currency compared to adding unneeded junk.",
      reflectionPrompt: "Have you ever waited in a 45-minute queue in the summer heat for a \"free\" ice cream cone or promotional umbrella worth ₹100?",
    },
  ],

  examples: [
    {
      id: 'ex_zero_price_effect_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Free Shipping Trap in South Delhi",
      description: "Karan was buying a ₹650 book online in South Delhi. At checkout, delivery was ₹60. The banner said: \"Add ₹350 more to get FREE Delivery!\" Karan spent ...",
      takeaway: "Zero is an emotional trigger that eliminates the perceived possibility of loss",
    },
  ],

  howToRecognize: "Feeling an overwhelming impulse to take a sample, qualify for a freebie, or grab an item solely because the price tag says \"₹0\".",
  whereYouEncounterIt: "E-commerce checkout shipping tiers, buffet dining, free smartphone apps (selling user data), and exhibition freebies.",
  commonMisconceptions: "Myth: \"Taking free stuff has no downside.\" Fact: Free items clutter physical living space, consume precious time, and often tie you to expensive recurring maintenance or upgrades.",
  limitationsAndControversies: "When the free item is something you were 100% committed to purchasing anyway, qualifying for free shipping without extra spending is genuine optimization.",

  howToRespond: "The Dollar Substitute Test: Ask yourself: \"If this free gift had a price tag of ₹20, would I reach into my wallet and pay cash for it?\" If not, reject the freebie.",
  psychologicalDefenses: [{"title":"The Shipping Fee Discipline","instruction":"Treat shipping fees as standard transaction overhead; never add extra cart items to avoid a shipping charge under ₹100."},{"title":"The Hidden Cost Audit","instruction":"Whenever a digital service or app is free, audit the true currency: how is your attention, privacy, or behavioral data being monetized?"}],

  practiceQuestions: [
    {
      id: 'pq_zero_price_effect_01',
      difficulty: 'beginner',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "An online clothing store offers a shirt for ₹1,200 with ₹100 delivery, or a bundle with an ugly pair of socks for ₹1,500 with FREE delivery. How should a rational consumer decide?",
      scenarioText: "The consumer loves the shirt but will never wear the socks.",
      explanation: "The Zero Price Effect tempts people to pay ₹300 extra just to see the word \"FREE\" next to shipping. Paying the delivery fee results in a net saving of ₹200.",
      antidoteAdvice: "Compare total out-of-pocket costs directly (₹1,300 vs ₹1,500) rather than focusing on shipping.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Buy the ₹1,500 bundle because paying for shipping is a waste of money.",
          text: "Buy the ₹1,500 bundle because paying for shipping is a waste of money.",
          feedbackText: "Incorrect. You spend ₹200 more in total cash.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Pay ₹1,200 + ₹100 shipping = ₹1,300, saving ₹200 in total out-of-pocket cash.",
          text: "Pay ₹1,200 + ₹100 shipping = ₹1,300, saving ₹200 in total out-of-pocket cash.",
          feedbackText: "Correct! Total expenditure is what matters, not whether shipping is zero.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Email the CEO demanding free clothes.",
          text: "Email the CEO demanding free clothes.",
          feedbackText: "Incorrect. Unrealistic and unproductive.",
        }
      ],
    },
  ],

  reflectionPrompt: "What is one useless promotional item currently cluttering your house that you only brought home because it was \"free\"?",
  tags: ['Mentalab Mind', 'consumer_advertising'],
  relatedTopics: [],
  seoTitle: `${"The Zero Price Effect: The Irrational Magnetism of \"Free\""} | Mentalab Mind`,
  seoDescription: "A psychological phenomenon where the demand for a good, service, or bundle increases exponentially when its price drops to exactly zero, far beyond standard rational economic models.",
  canonicalUrl: '/mind/consumer-advertising/zero-price-effect',
  ogImageUrl: '/images/mind/zero-price-effect.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Retailers leverage the Zero Price Effect through \"Buy One Get One Free\", \"Free Shipping with ₹999\", and \"Free Gift with Purchase\". Consumers routinely spend ₹400 on extra unneeded items just to avoid a ₹50 shipping fee, acting completely counter to their own financial self-interest.",
};

export const TOPIC_ZERO_PRICE_EFFECT_HINGLISH: MindTopicDetail = {
  ...TOPIC_ZERO_PRICE_EFFECT_EN,
  title: "The Zero Price Effect: \"Muft\" Ka Zeher",
  subtitle: "Dan Ariely ki research: Kyu \"FREE\" sunte hi hamara dimaag dimaag lagana band kar deta hai.",
  shortDescription: "Zero ka psychological trigger: Kaise log ₹50 ki delivery bachane ke liye ₹500 ka faltu samaan khareed lete hain.",
  oneLineExplanation: "Free koi price nahi hai, yeh ek emotional nasha hai jo calculation ko khatam kar deta hai.",
  summary30s: "Dan Ariely ne MIT me experiment kiya: Ek 15 cent ki luxury chocolate thi aur 1 cent ki normal chocolate. 73% logo ne luxury chocolate chuni. Par jab dono ka daam 1 cent kam kiya (14 cent vs FREE), to 69% log sasti chocolate lene bhaage! \"Free\" shabd logic ko hila deta hai.",
  coreConcept: "Zero me koi risk nahi lagta. Jab hum ₹1 bhi dete hain to lagta hai nuksan ho sakta hai, par Free me lagta hai \"kya hi jayega\". Iska fayda utha kar online sites kehti hain: \"₹500 ka aur samaan lo aur ₹60 ki Free delivery pao!\" Aur log fas jate hain.",
  summary60s: "Zindagi me kuch bhi free nahi hota. Jo app free hai, wahan aapka data aur attention bika raha hai. Aur jo free delivery hai, uske chakkar me aap hazaro rupaye ka kachra ghar le aate hain. Free cheez lene se pehle socho: \"Kya main iske liye ₹10 bhi deta?\"",
  quickTakeaways: ["\"Free\" sunte hi dimaag ka rational hissa switch off ho jata hai","Delivery fee bachane ke chakkar me log har saal hazaaron rupaye faltu kharch karte hain","Free gifts ghar me kachra aur dimaag me distraction laate hain","Hamesha total bill dekho, \"Free\" ka sticker mat dekho"],
  howItWorks: "Cart me ₹600 ka samaan -> Delivery fee ₹50 dikhi -> Banner aaya \"Add ₹400 for FREE delivery\" -> ₹400 ka bekaar samaan add kiya -> ₹50 bachane ke chakkar me ₹350 extra kharch kiye.",
  howToRespond: "Total Cost Rule: Shipping fee ko normal service charge mano. Kabhi bhi delivery fee bachane ke liye aisi cheez mat khareedo jiski zaroorat na ho.",
  practiceQuestions: [
    {
      ...TOPIC_ZERO_PRICE_EFFECT_EN.practiceQuestions[0],
      prompt: "Amazon par ₹500 ki t-shirt par ₹50 delivery lag rahi hai. \"Free delivery\" ke liye ₹300 ka aur samaan lena padega. Kya karna chahiye?",
      explanation: "₹550 pay karna ₹800 pay karne se ₹250 sasta hai. Shipping fee pay karna financially smart hai.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "₹300 ki faltu socks add kar lena taaki delivery free ho jaye.",
          text: "₹300 ki faltu socks add kar lena taaki delivery free ho jaye.",
          feedbackText: "Galat. Aapne ₹250 extra kharch kar diye.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "₹50 delivery dekar ₹550 me order khatam karna, kyuki yeh ₹800 se ₹250 sasta hai.",
          text: "₹50 delivery dekar ₹550 me order khatam karna, kyuki yeh ₹800 se ₹250 sasta hai.",
          feedbackText: "Sahi! Total out-of-pocket paisa bachana hi samajhdari hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Shopping karna hi chhod dena.",
          text: "Shopping karna hi chhod dena.",
          feedbackText: "Galat. Agar zaroorat hai to sasta option choose karein.",
        }
      ],
    },
  ],
  seoTitle: `${"The Zero Price Effect: \"Muft\" Ka Zeher"} | Mentalab Mind`,
  seoDescription: "Zero ka psychological trigger: Kaise log ₹50 ki delivery bachane ke liye ₹500 ka faltu samaan khareed lete hain.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_ZERO_PRICE_EFFECT_EN,
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

export const TOPIC_ZERO_PRICE_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_ZERO_PRICE_EFFECT_EN,
  hinglish: TOPIC_ZERO_PRICE_EFFECT_HINGLISH,
  hi: createLocalizedRecord('hi', "शून्य मूल्य प्रभाव (The Zero Price Effect)", "किसी वस्तु का मूल्य शून्य (मुफ़्त) होते ही उसकी मांग में आने वाली अत्यधिक अतार्किक वृद्धि का मनोवैज्ञानिक विश्लेषण।", ["मुफ़्त शब्द मस्तिष्क में तार्किक मूल्यांकन को समाप्त कर देता है","डिलिवरी शुल्क बचाने के चक्कर में अधिक खर्च से बचें","कुल व्यय का हिसाब लगाएं, मुफ़्त के प्रलोभन से बचें"]),
  gu: createLocalizedRecord('gu', "શૂન્ય કિંમત અસર (મફતનું આકર્ષણ)", "કોઈપણ વસ્તુ મફત મળતી હોય ત્યારે તાર્કિક ગણતરી ભૂલી જવાની ગ્રાહકની માનસિકતા.", ["મફત પાછળનો છૂપો ખર્ચ સમજો","ડિલિવરી ચાર્જ બચાવવા વધારાનો ખર્ચ ન કરો","કુલ ખર્ચ પર ધ્યાન આપો"]),
  mr: createLocalizedRecord('mr', "शून्य किंमत प्रभाव (मोफतची भुरळ)", "वस्तू मोफत मिळताच तार्किक विचार बाजूला सारून ती मिळवण्याची मानवी मनाची अतार्किक ओढ.", ["मोफतच्या मोहात पडू नका","डिलिव्हरी शुल्कापेक्षा जास्त खर्च टाळा","एकूण खर्चाचा विचार करा"]),
  te: createLocalizedRecord('te', "సున్నా ధర ప్రభావం (ఉచితం అనే ఆకర్షణ)", "ఏదైనా వస్తువు ఉచితంగా లభించినప్పుడు తార్కిక ఆలోచనను కోల్పోయే వినియోగదారుల మానసిక ప్రవర్తన.", ["ఉచితం వెనుక దాగివున్న ఖర్చును గ్రహించండి","డెలివరీ ఛార్జీల కోసం ఎక్కువ కొనవద్దు","మొత్తం ఖర్చును లెక్కించండి"]),
  ta: createLocalizedRecord('ta', "பூஜ்ஜிய விலை விளைவு (இலவசத்தின் ஈர்ப்பு)", "ஒரு பொருள் இலவசம் என்றவுடன் தர்க்கரீதியான கணக்குகளை மறந்து வாங்கும் மனித மனோபாவம்.", ["இலவசத்தின் மாயையில் விழாதீர்கள்","டெலிவரி கட்டணத்தை தவிர்க்க வீண் செலவு செய்யாதீர்கள்","மொத்த செலவை பாருங்கள்"]),
  kn: createLocalizedRecord('kn', "ಶೂನ್ಯ ಬೆಲೆಯ ಪರಿಣಾಮ (ಉಚಿತದ ಆಕರ್ಷಣೆ)", "ಯಾವುದಾದರೂ ವಸ್ತು ಉಚಿತ ಎಂದಾಗ ತಾರ್ಕಿಕ ಲೆಕ್ಕಾಚಾರಗಳನ್ನು ಮರೆತು ಮುಗಿಬೀಳುವ ಮಾನಸಿಕ ಪ್ರವೃತ್ತಿ.", ["ಉಚಿತದ ಹಿಂದಿನ ತಂತ್ರವನ್ನು ತಿಳಿಯಿರಿ","ಡೆಲಿವರಿ ಶುಲ್ಕ ಉಳಿಸಲು ಹೆಚ್ಚು ಖರ್ಚು ಮಾಡಬೇಡಿ","ಒಟ್ಟು ವೆಚ್ಚವನ್ನು ಗಮನಿಸಿ"]),
  ml: createLocalizedRecord('ml', "പൂജ്യം വില പ്രഭാവം (സൗജന്യത്തിന്റെ ആകർഷണം)", "സൗജന്യമായി ലഭിക്കുമ്പോൾ യുക്തിസഹമായ കണക്കുകൂട്ടലുകൾ ഉപേക്ഷിച്ച് സാധനങ്ങൾ വാങ്ങുന്ന രീതി.", ["സൗജന്യങ്ങളുടെ ചതിക്കുഴികൾ തിരിച്ചറിയുക","ഡെലിവറി ചാർജ് ഒഴിവാക്കാൻ കൂടുതൽ വാങ്ങരുത്","മൊത്തം ചെലവ് കണക്കാക്കുക"]),
  bn: createLocalizedRecord('bn', "শূন্য মূল্য প্রভাব (বিনামূল্যের অন্ধ মোহ)", "কোনো পণ্য বিনামূল্যে পেলেই অযৌক্তিক চাহিদার ব্যাপক বৃদ্ধি ঘটার মনস্তাত্ত্বিক সত্যতা।", ["বিনামূল্যের প্রলোভন থেকে দূরে থাকুন","ডেলিভারি চার্জ বাঁচাতে অতিরিক্ত খরচ করবেন না","মোট খরচের হিসাব রাখুন"]),
  pa: createLocalizedRecord('pa', "ਜ਼ੀਰੋ ਕੀਮਤ ਦਾ ਪ੍ਰਭਾਵ (ਮੁਫ਼ਤ ਦਾ ਲਾਲਚ)", "ਕੋਈ ਚੀਜ਼ ਮੁਫ਼ਤ ਮਿਲਣ ਤੇ ਤਰਕਸ਼ੀਲ ਸੋਚ ਨੂੰ ਛੱਡ ਕੇ ਉਸਦੇ ਪਿੱਛੇ ਭੱਜਣ ਦੀ ਮਾਨਸਿਕ ਆਦਤ।", ["ਮੁਫ਼ਤ ਦੇ ਲਾਲਚ ਤੋਂ ਬਚੋ","ਡਿਲੀਵਰੀ ਫੀਸ ਬਚਾਉਣ ਲਈ ਵਾਧੂ ਖਰਚ ਨਾ ਕਰੋ","ਕੁੱਲ ਬਿੱਲ ਵੱਲ ਧਿਆਨ ਦਿਓ"]),
  ur: createLocalizedRecord('ur', "صفر قیمت کا اثر (مفت کا لالچ)", "کسی چیز کے مفت ملنے پر عقلی سوچ اور حساب کتاب کو بالائے طاق رکھنے کا نفسیاتی رجحان۔", ["مفت کے دھوکے سے بچیں","ڈیلیوری چارجز بچانے کے لیے زیادہ خرچ نہ کریں","کل لاگت کا حساب لگائیں"]),
  or: createLocalizedRecord('or', "ଶୂନ୍ୟ ମୂଲ୍ୟ ପ୍ରଭାବ (ମାଗଣାର ମୋହ)", "କୌଣସି ଜିନିଷ ମାଗଣାରେ ମିଳିଲେ ଯୁକ୍ତିଯୁକ୍ତ ଚିନ୍ତାଧାରା ଭୁଲିଯିବାର ମାନସିକ ଦୁର୍ବଳତା।", ["ମାଗଣାର ମାୟାଜାଲ ବୁଝନ୍ତୁ","ଡେଲିଭରୀ ଫି ବଞ୍ଚାଇବାକୁ ଅଧିକ ଖର୍ଚ୍ଚ କରନ୍ତୁ ନାହିଁ","ମୋଟ ଖର୍ଚ୍ଚ ଉପରେ ନଜର ରଖନ୍ତୁ"]),
  as: createLocalizedRecord('as', "শূন্য মূল্যৰ প্ৰভাৱ (বিনামূলীয়াৰ অন্ধ মোহ)", "কোনো বস্তু বিনামূলীয়াকৈ পালে যুক্তি-তৰ্ক পাহৰি তাৰ প্ৰতি আকৃষ্ট হোৱাৰ মানৱীয় মানসিকতা।", ["বিনামূলীয়াৰ প্ৰলোভনৰ পৰা আঁতৰি থাকক","ডেলিভাৰী মাচুল বচাবলৈ অতিৰিক্ত খৰচ নকৰিব","মুঠ খৰচৰ হিচাপ ৰাখক"]),
};
