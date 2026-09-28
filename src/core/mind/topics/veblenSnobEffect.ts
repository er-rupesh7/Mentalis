import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_VEBLEN_SNOB_EFFECT_EN: MindTopicDetail = {
  id: 'veblen_snob_effect',
  categoryId: 'consumer_advertising',
  slug: 'veblen-and-snob-effect',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 8,
  viewCount: 3760,
  shareCount: 300,
  bookmarkCount: 620,
  title: "The Veblen & Snob Effect: Conspicuous Consumption and Social Signaling",
  subtitle: "Thorstein Veblen and Harvey Leibenstein on why people buy luxury goods specifically because they are expensive and exclusive.",
  shortDescription: "Economic anomalies where demand for a luxury good increases as its price rises (Veblen Good) and decreases as more people own it (Snob Effect), driven by evolutionary status signaling.",
  oneLineExplanation: "Buying things not for their utility, but to broadcast that you have the wealth to waste.",

  summary30s: "Coined by economist Thorstein Veblen in 1899 and formalized by Harvey Leibenstein in 1950, Veblen and Snob effects defy the law of demand. People do not buy a Rolex, a Hermès Birkin bag, or an iPhone Pro for their technical functionality; they buy them precisely because the high price acts as an unforgeable biological signal of wealth, prestige, and high social rank.",
  coreConcept: "Amotz Zahavi’s evolutionary \"Handicap Principle\" explains why conspicuous consumption works: an honest signal must be costly to be credible. Just as a peacock’s heavy, colorful tail handicaps its survival to prove genetic fitness to peahens, wasting capital on overpriced luxury goods proves to the tribe that one has surplus resources to burn.",
  summary60s: "The \"Snob Effect\" dictates that once a luxury brand becomes too accessible to the middle class (losing exclusivity), true elites abandon it for obscure, harder-to-acquire alternatives. Luxury conglomerates intentionally burn unsold stock, enforce artificial waitlists, and raise prices annually to preserve this snob prestige barrier.",
  quickTakeaways: ["Veblen goods violate the law of demand: demand rises as the price increases","The Snob Effect causes demand to crash if an item becomes widely accessible to the masses","Conspicuous luxury consumption is evolutionary status signaling (Handicap Principle)","True financial security is quiet wealth; loud luxury is often debt-financed status anxiety"],

  whyItHappens: "Costly signaling theory: displaying surplus resources without immediate survival utility serves as an honest indicator of social and sexual fitness.",
  evolutionaryMechanism: "In ancestral groups, individuals with surplus resources attracted superior mating opportunities and political protection.",

  howItWorks: "Brand raises price from ₹2 Lakh to ₹5 Lakh -> Middle-class buyers priced out -> Perceived status signal increases -> Ultra-wealthy desire item more -> Sales volume and margins expand.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Standard Economic Good vs. Veblen Status Good",
    description: "Comparing traditional downward sloping demand against the upward sloping Veblen curve.",
    analogySideA: {
      label: "Standard Good (Price Elasticity)",
      detail: "Price rises -> Demand drops. (e.g., cooking oil, laptops, train tickets). Utility-driven.",
    },
    analogySideB: {
      label: "Veblen Good (Status Elasticity)",
      detail: "Price rises -> Demand surges! (e.g., Rolex Daytona, Birkin Bags). Signaling-driven.",
    },
  },

  researchSummary: "Leibenstein (1950, Quarterly Journal of Economics) and Bagwell & Bernheim (1996, American Economic Review) mathematically modeled the signaling equilibria of conspicuous consumption and snob preferences.",
  references: [
    {
      id: 'ref_veblen_snob_effect_01',
      title: "The Theory of the Leisure Class / Bandwagon, Snob, and Veblen Effects",
      citation: "Leibenstein, H. (1950). Quarterly Journal of Economics, 64(2), 183–207.",
      authors: "Veblen, T. & Leibenstein, H.",
      publicationYear: 1899,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.2307/1882692",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_veblen_snob_effect_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The ₹1.5 Lakh Phone EMI in Delhi NCR",
      narrativeContext: "Kunal earns ₹45,000 per month as a junior designer in Noida. When the latest flagship phone launched at ₹1,60,000, he took out an 18-month predatory high-interest EMI to buy it, putting the phone face-up on every restaurant table he visited so others would see the distinctive three-camera lens.",
      biasInAction: "Kunal engaged in compensatory conspicuous consumption: he sacrificed his nutritional and investment savings to purchase a Veblen status signal that would mask his financial insecurity.",
      optimalResponse: "Remember that displaying luxury items signals consumption, not wealth. Shift identity toward building invisible, income-producing assets (equity, real estate, emergency funds).",
      reflectionPrompt: "Have you ever bought an expensive branded item primarily so that coworkers, relatives, or peers would perceive you as successful?",
    },
  ],

  examples: [
    {
      id: 'ex_veblen_snob_effect_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The ₹1.5 Lakh Phone EMI in Delhi NCR",
      description: "Kunal earns ₹45,000 per month as a junior designer in Noida. When the latest flagship phone launched at ₹1,60,000, he took out an 18-month predatory h...",
      takeaway: "Veblen goods violate the law of demand: demand rises as the price increases",
    },
  ],

  howToRecognize: "Feeling a desire for an item multiply after finding out how expensive it is, or losing interest in a brand the moment everyone in your neighborhood starts wearing it.",
  whereYouEncounterIt: "Luxury watches, designer sneakers, exclusive private clubs, VIP airport lounges, and flagship smartphones.",
  commonMisconceptions: "Myth: \"People buy luxury because the materials are 10x better.\" Fact: Manufacturing costs of luxury goods are typically 5% to 10% of the retail price; 90% is pure status rent.",
  limitationsAndControversies: "When high prices correlate with genuine artisanal longevity (e.g. hand-stitched Goodyear-welted leather boots that last 25 years), the purchase is driven by durability utility, not Veblen signaling.",

  howToRespond: "The \"Invisible Wealth\" Rule: Never spend money on visible consumer badges to impress people you don't respect; channel capital into assets that generate dividends rather than depreciation.",
  psychologicalDefenses: [{"title":"The Status Inversion Drill","instruction":"Recognize that the ultra-wealthy often dress in unbranded, simple clothes (\"stealth wealth\"), while loud logos are marketed to the insecure middle class."},{"title":"The 30-Day Luxury Waiting Period","instruction":"Force a mandatory 30-day delay on all luxury purchases over ₹10,000 to allow the dopamine signaling impulse to dissipate."}],

  practiceQuestions: [
    {
      id: 'pq_veblen_snob_effect_01',
      difficulty: 'intermediate',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A luxury handbag brand raises its prices by 30% without changing the leather or manufacturing quality. In response, their waiting list doubles from 6 months to 12 months. What economic phenomenon explains this?",
      scenarioText: "The price increase made the item completely unaffordable to upper-middle-class consumers.",
      explanation: "This is the Veblen Good dynamic: the higher price amplifies the item’s scarcity and social signaling value, increasing demand among status-seeking elites.",
      antidoteAdvice: "Decouple personal self-worth from expensive consumer signaling.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "The brand discovered a magical new leather tanning process.",
          text: "The brand discovered a magical new leather tanning process.",
          feedbackText: "Incorrect. The product specifications remained unchanged.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "The price hike transformed the handbag into a stronger Veblen signal of exclusivity, boosting elite desire.",
          text: "The price hike transformed the handbag into a stronger Veblen signal of exclusivity, boosting elite desire.",
          feedbackText: "Correct! Higher price increases status utility and triggers the Veblen effect.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Inflation made consumers richer overnight.",
          text: "Inflation made consumers richer overnight.",
          feedbackText: "Incorrect. Inflation reduces real purchasing power.",
        }
      ],
    },
  ],

  reflectionPrompt: "If nobody in the world could ever see your clothes, watch, or car, what would you choose to buy based purely on personal comfort?",
  tags: ['Mentalab Mind', 'consumer_advertising'],
  relatedTopics: [],
  seoTitle: `${"The Veblen & Snob Effect: Conspicuous Consumption and Social Signaling"} | Mentalab Mind`,
  seoDescription: "Economic anomalies where demand for a luxury good increases as its price rises (Veblen Good) and decreases as more people own it (Snob Effect), driven by evolutionary status signaling.",
  canonicalUrl: '/mind/consumer-advertising/veblen-and-snob-effect',
  ogImageUrl: '/images/mind/veblen-and-snob-effect.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "The \"Snob Effect\" dictates that once a luxury brand becomes too accessible to the middle class (losing exclusivity), true elites abandon it for obscure, harder-to-acquire alternatives. Luxury conglomerates intentionally burn unsold stock, enforce artificial waitlists, and raise prices annually to preserve this snob prestige barrier.",
};

export const TOPIC_VEBLEN_SNOB_EFFECT_HINGLISH: MindTopicDetail = {
  ...TOPIC_VEBLEN_SNOB_EFFECT_EN,
  title: "Veblen & Snob Effect: Ameeri Ka Dikhaawa Aur Status Ka Khel",
  subtitle: "Kyu log ₹1.5 lakh ka phone aur ₹5 lakh ki ghadi utility ke liye nahi, balki aukat dikhane ke liye khareedte hain.",
  shortDescription: "Thorstein Veblen aur Leibenstein ki research: Cheez jitni mehngi hoti hai log utna zyada khareedte hain taaki samaj me status ban sake.",
  oneLineExplanation: "Cheez kaam ke liye nahi, balki yeh dikhane ke liye khareedna ki mere paas barbaad karne ke liye paisa hai.",
  summary30s: "1899 me Thorstein Veblen ne dekha ki aam cheezon me daam badhta hai to demand kam hoti hai, par Luxury cheezon (Veblen goods) me daam badhane par demand aur badh jati hai! Rolex ya iPhone log time dekhne ya call karne ke liye nahi, balki status dikhane ke liye khareedte hain.",
  coreConcept: "Biology me mor (peacock) ke bhaari aur chamakdaar pankh shikaari se bachne me rukawat bante hain, par mor unhe dikhata hai taaki morani ko lage ki wo kitna powerful hai (Handicap Principle). Insaan bhi EMI par mehngi gaadi aur kapde lekar yahi dikhaawa karte hain.",
  summary60s: "Doosra hota hai \"Snob Effect\": Jaise hi koi brand aam logo ke haath me aane lagta hai, ameer log use pehanna chhod dete hain aur koi naya anokha brand dhoondte hain. Asli ameer log simple kapde pehante hain (\"Stealth Wealth\"), jabki EMI par jeene wale loud logos wale kapde pehante hain.",
  quickTakeaways: ["Veblen goods me daam badhne se demand badhti hai kyuki status badhta hai","Snob effect ke mutabiq ameer log aam logo wali cheez chhod dete hain","Loud logos aksar financial insecurity ko chupane ke liye use kiye jate hain","Asli daulat wo hai jo dikhayi nahi deti (bank balance, equity, mental peace)"],
  howItWorks: "Brand ne daam 50% badhaya -> Aam log bahar huye -> Exclusivity badhi -> Status seekers ne aur shauk se khareeda -> Brand ka profit aasmaan chhu gaya.",
  howToRespond: "Stealth Wealth mindset apnayein: Un logo ko impress karne ke liye paisa mat udao jinhe aap pasand bhi nahi karte. Paisa show-off me nahi, investments me lagao.",
  practiceQuestions: [
    {
      ...TOPIC_VEBLEN_SNOB_EFFECT_EN.practiceQuestions[0],
      prompt: "Ek designer brand ne bina quality badle apne bag ka daam ₹1 lakh se ₹2 lakh kar diya. Uski sale double ho gayi. Kyu?",
      explanation: "Daam badhne se bag ek behtar Veblen status symbol ban gaya jisse ameer logo me uski demand badh gayi.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Bag ke andar sone ke taar lage huye the.",
          text: "Bag ke andar sone ke taar lage huye the.",
          feedbackText: "Galat. Quality wahi thi.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Veblen effect ki wajah se daam badhne par status signaling badh gayi aur demand badh gayi.",
          text: "Veblen effect ki wajah se daam badhne par status signaling badh gayi aur demand badh gayi.",
          feedbackText: "Sahi! Yahi Veblen good ka standard definition hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Customer andhe the aur unhe daam nahi dikha.",
          text: "Customer andhe the aur unhe daam nahi dikha.",
          feedbackText: "Galat. Customer ne specifically daam dekh kar hi khareeda.",
        }
      ],
    },
  ],
  seoTitle: `${"Veblen & Snob Effect: Ameeri Ka Dikhaawa Aur Status Ka Khel"} | Mentalab Mind`,
  seoDescription: "Thorstein Veblen aur Leibenstein ki research: Cheez jitni mehngi hoti hai log utna zyada khareedte hain taaki samaj me status ban sake.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_VEBLEN_SNOB_EFFECT_EN,
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

export const TOPIC_VEBLEN_SNOB_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_VEBLEN_SNOB_EFFECT_EN,
  hinglish: TOPIC_VEBLEN_SNOB_EFFECT_HINGLISH,
  hi: createLocalizedRecord('hi', "वेबलेन और स्नॉब प्रभाव (Veblen & Snob Effect)", "सामाजिक प्रतिष्ठा, दिखावे और विशिष्टता के प्रदर्शन हेतु मूल्य वृद्धि के साथ विलासिता वस्तुओं की मांग में होने वाली वृद्धि का अध्ययन।", ["वेबलेन वस्तुएं आर्थिक मांग के सामान्य नियमों का उल्लंघन करती हैं","उच्च मूल्य सामाजिक स्थिति और संपन्नता का संकेत देता है","दिखावे के उपभोग के बजाय स्थायी संपत्ति निर्माण पर ध्यान दें"]),
  gu: createLocalizedRecord('gu', "વેબલેન અને સ્નોબ અસર (દિખાવાનો પ્રભાવ)", "સમાજમાં મોભો અને ધનવાન હોવાનું દર્શાવવા માટે મોંઘી વસ્તુઓ ખરીદવાની ગ્રાહકની વૃત્તિ.", ["દિખાવાથી દૂર રહો","બ્રાન્ડ મોહ છોડી ઉપયોગિતા જુઓ","વાસ્તવિક સંપત્તિ બનાવો"]),
  mr: createLocalizedRecord('mr', "वेबलेन आणि स्नॉब प्रभाव (दिखाऊपणाचे अर्थशास्त्र)", "समाजात प्रतिष्ठा आणि श्रीमंती दाखवण्यासाठी जाणीवपूर्वक अति-महागड्या वस्तूंची मागणी वाढण्याचे मानसशास्त्र.", ["दिखाऊपणाच्या मोहात पडू नका","किंमत नव्हे उपयोगिता तपासा","अदृश्य संपत्ती निर्माण करा"]),
  te: createLocalizedRecord('te', "వెబ్లెన్ మరియు స్నాబ్ ప్రభావం (దర్పం ప్రదర్శన)", "సమాజంలో హోదా మరియు దర్పం చూపించడానికి అధిక ధర కలిగిన లగ్జరీ వస్తువులను కొనుగోలు చేసే ధోరణి.", ["దర్ప ప్రదర్శనకు దూరంగా ఉండండి","ఉపయోగాన్ని బట్టి కొనండి","నిజమైన సంపదను సృష్టించండి"]),
  ta: createLocalizedRecord('ta', "வெப்லென் மற்றும் ஸ்னாப் விளைவு (ஆடம்பர தற்பெருமை)", "சமூகத்தில் அந்தஸ்தையும் செல்வத்தையும் காட்டிக்கொள்ள அதிக விலை கொண்ட பொருட்களை வாங்கும் உளவியல்.", ["ஆடம்பர மாயையில் சிக்காதீர்கள்","பயன்பாட்டுக்கு முன்னுரிமை கொடுங்கள்","உண்மையான சொத்துக்களை உருவாக்குங்கள்"]),
  kn: createLocalizedRecord('kn', "ವೆಬ್ಲೆನ್ ಮತ್ತು ಸ್ನಾಬ್ ಪರಿಣಾಮ (ಪ್ರತಿಷ್ಠೆಯ ಪ್ರದರ್ಶನ)", "ಸಮಾಜದಲ್ಲಿ ಅಂತಸ್ತು ಮತ್ತು ಸಿರಿವಂತಿಕೆಯನ್ನು ತೋರ್ಪಡಿಸಿಕೊಳ್ಳಲು ದುಬಾರಿ ವಸ್ತುಗಳನ್ನು ಖರೀದಿಸುವ ಮಾನಸಿಕತೆ.", ["ಆಡಂಬರಕ್ಕೆ ಬಲಿಯಾಗಬೇಡಿ","ಉಪಯುಕ್ತತೆಗೆ ಆದ್ಯತೆ ನೀಡಿ","ನಿಜವಾದ ಆಸ್ತಿ ಬೆಳೆಸಿಕೊಳ್ಳಿ"]),
  ml: createLocalizedRecord('ml', "വെബ്ലെൻ ആന്റ് സ്നോബ് പ്രഭാവം (ആഡംബര പ്രദർശനം)", "സമൂഹത്തിൽ പദവിയും പ്രൗഢിയും കാണിക്കാൻ വേണ്ടി മാത്രം ഉയർന്ന വിലയുള്ള വസ്തുക്കൾ വാങ്ങിക്കൂട്ടുന്ന രീതി.", ["ആഡംബര ഭ്രമം ഉപേക്ഷിക്കുക","ഉപയോഗത്തിന് പ്രാധാന്യം നൽകുക","യഥാർത്ഥ സമ്പത്ത് കെട്ടിപ്പടുക്കുക"]),
  bn: createLocalizedRecord('bn', "ভেবলেন ও স্নব প্রভাব (দেখনদারি আভিজাত্য)", "সমাজে মর্যাদা ও প্রাচুর্য প্রদর্শনের জন্য উচ্চমূল্যের বিলাসবহুল পণ্যের চাহিদা বৃদ্ধির মনস্তাত্ত্বিক অর্থনীতি।", ["দেখনদারির ফাঁদ এড়িয়ে চলুন","কার্যকারিতা দেখে কিনুন","বাস্তব সম্পদ গঠনে মন দিন"]),
  pa: createLocalizedRecord('pa', "ਵੈਬਲਨ ਅਤੇ ਸਨੌਬ ਪ੍ਰਭਾਵ (ਦਿਖਾਵੇ ਦੀ ਖਪਤ)", "ਸਮਾਜ ਵਿੱਚ ਆਪਣੀ ਹੈਸੀਅਤ ਅਤੇ ਅਮੀਰੀ ਦਿਖਾਉਣ ਲਈ ਜਾਣਬੁੱਝ ਕੇ ਮਹਿੰਗੀਆਂ ਚੀਜ਼ਾਂ ਖ਼ਰੀਦਣ ਦੀ ਮਾਨਸਿਕ ਆਦਤ।", ["ਦਿਖਾਵੇ ਦੀ ਖ਼ਰੀਦਦਾਰੀ ਤੋਂ ਬਚੋ","ਚੀਜ਼ ਦੀ ਲੋੜ ਸਮਝੋ","ਅਸਲ ਪੂੰਜੀ ਇਕੱਠੀ ਕਰੋ"]),
  ur: createLocalizedRecord('ur', "ویبلین اور اسنوب اثر (نمود و نمائش کا اثر)", "معاشرے میں اپنی امارت اور اونچے رتبے کی نمائش کے لیے مہنگی ترین اشیاء کی خریداری کا نفسیاتی رجحان۔", ["دکھاوے کے جال سے بچیں","افادیت کو ترجیح دیں","حقیقی مالی استحکام پیدا کریں"]),
  or: createLocalizedRecord('or', "ଭେବଲେନ୍ ଓ ସ୍ନୋବ୍ ପ୍ରଭାବ (ଦେଖାଣିଆ ମନୋବୃତ୍ତି)", "ସମାଜରେ ପ୍ରତିଷ୍ଠା ଓ ଆଭିଜାତ୍ୟ ପ୍ରଦର୍ଶନ କରିବା ପାଇଁ ଅତ୍ୟଧିକ ମୂଲ୍ୟବାନ ସାମଗ୍ରୀ କ୍ରୟ କରିବାର ମାନସିକତା।", ["ଦେଖାଣିଆ ଖର୍ଚ୍ଚରୁ ଦୂରେଇ ରୁହନ୍ତୁ","ଆବଶ୍ୟକତାକୁ ପ୍ରାଥମିକତା ଦିଅନ୍ତୁ","ପ୍ରକୃତ ସମ୍ପତ୍ତି ଗଠନ କରନ୍ତୁ"]),
  as: createLocalizedRecord('as', "ভেবলেন আৰু স্ন’ব প্ৰভাৱ (প্ৰদৰ্শনকামিতাৰ অৰ্থনীতি)", "সমাজত মৰ্যাদা আৰু ঐশ্বৰ্য প্ৰদৰ্শনৰ বাবে অত্যধিক মূল্যৰ বিলাসী সামগ্ৰী ক্ৰয় কৰাৰ মানসিক প্ৰৱণতা।", ["প্ৰদৰ্শনকামিতা পৰিহাৰ কৰক","ব্যৱহাৰযোগ্যতা চাই কিনক","বাস্তৱ সম্পদ গঢ়ি তোলক"]),
};
