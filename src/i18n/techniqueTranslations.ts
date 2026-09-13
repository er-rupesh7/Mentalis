import { CalculationTechniqueId, TechniqueModuleCategory } from '../core/types';
import { SupportedLocale } from './config';

export interface LocalizedTechniqueMeta {
  title: string;
  subtitle: string;
  mathSecretTitle?: string;
  mathSecretDesc?: string;
  mindOdometerTitle?: string;
  subvocalInstruction?: string;
}

export interface LocalizedModuleMeta {
  title: string;
  subtitle: string;
}

export interface LocalizedStrategyMeta {
  name: string;
  mentalScript: string;
  mentalTip?: string;
}

// -------------------------------------------------------------
// MODULE METADATA TRANSLATIONS (All 13 Locales)
// -------------------------------------------------------------
const MODULE_TRANSLATIONS: Record<
  TechniqueModuleCategory,
  Partial<Record<SupportedLocale, LocalizedModuleMeta>>
> = {
  fundamental_operations: {
    en: {
      title: '1. Fundamental Operations',
      subtitle: 'Left-to-Right Place-Value & Working-Memory Retainers',
    },
    hi: {
      title: '1. मूलभूत संक्रियाएं',
      subtitle: 'बाएं-से-दाएं स्थानीय मान और कार्यशील स्मृति प्रतिधारण',
    },
    gu: {
      title: '1. મૂળભૂત ક્રિયાઓ',
      subtitle: 'ડાબેથી જમણે સ્થાન-કિંમત અને કાર્યકારી સ્મૃતિ',
    },
    mr: {
      title: '1. मूलभूत क्रिया',
      subtitle: 'डावीकडून उजवीकडे स्थानिक किंमत व कार्यरत स्मृती',
    },
    te: {
      title: '1. ప్రాథమిక ప్రక్రియలు',
      subtitle: 'ఎడమ నుండి కుడికి స్థాన విలువ & వర్కింగ్ మెమరీ',
    },
    ta: {
      title: '1. அடிப்படை செயல்பாடுகள்',
      subtitle: 'இடமிருந்து வலமாக இடமதிப்பு & செயல்பாட்டு நினைவகம்',
    },
    kn: {
      title: '1. ಮೂಲಭೂತ ಕ್ರಿಯೆಗಳು',
      subtitle: 'ಎಡದಿಂದ ಬಲಕ್ಕೆ ಸ್ಥಾನಬೆಲೆ ಮತ್ತು ವರ್ಕಿಂಗ್ ಮೆಮೊರಿ',
    },
    ml: {
      title: '1. അടിസ്ഥാന ക്രിയകൾ',
      subtitle: 'ഇടത്തുനിന്ന് വലത്തോട്ട് സ്ഥാനവില & വർക്കിംഗ് മെമ്മറി',
    },
    bn: {
      title: '১. মৌলিক ক্রিয়া',
      subtitle: 'বাম-থেকে-ডান স্থানীয় মান ও কার্যকরী স্মৃতি',
    },
    pa: {
      title: '1. ਮੁੱਢਲੀਆਂ ਕਿਰਿਆਵਾਂ',
      subtitle: 'ਖੱਬੇ ਤੋਂ ਸੱਜੇ ਸਥਾਨ-ਮੁੱਲ ਅਤੇ ਕਾਰਜਕਾਰੀ ਯਾਦਦਾਸ਼ਤ',
    },
    ur: {
      title: '1. بنیادی عوامل',
      subtitle: 'بائیں سے دائیں مقامی قیمت اور ورکنگ میموری',
    },
    or: {
      title: '୧. ମୌଳିକ କ୍ରିୟା',
      subtitle: 'ବାମରୁ ଡାହାଣ ସ୍ଥାନୀୟ ମୂଲ୍ୟ ଏବଂ କାର୍ଯ୍ୟକାରୀ ସ୍ମୃତି',
    },
    as: {
      title: '১. মৌলিক কাৰ্য',
      subtitle: 'বাওঁফালৰ পৰা সোঁফাললৈ স্থানমান আৰু কাৰ্যকৰী স্মৃতি',
    },
  },
  multiplication_engine: {
    en: {
      title: '2. Multiplication Techniques',
      subtitle: 'Global Powers-of-10, Repunits & Universal Vedic Crosswise',
    },
    hi: {
      title: '2. गुणा तकनीकें',
      subtitle: '10 की घातें, पुनरावृत्त अंक और सार्वभौमिक वैदिक तिरछा गुणा',
    },
    gu: {
      title: '2. ગુણાકાર પદ્ધતિઓ',
      subtitle: '10ની ઘાતો, પુનરાવર્તિત અંકો અને વૈદિક ક્રોસ ગુણાકાર',
    },
    mr: {
      title: '2. गुणाकार तंत्र',
      subtitle: '10 च्या घातांकांसह, पुनरावृत्ती अंक व वैदिक तिरपा गुणाकार',
    },
    te: {
      title: '2. గుణకార పద్ధతులు',
      subtitle: '10 యొక్క ఘాతాలు, వేద క్రాస్‌వైస్ గుణకారం',
    },
    ta: {
      title: '2. பெருக்கல் நுட்பங்கள்',
      subtitle: '10ன் அடுக்குகள் மற்றும் வேத குறுக்குப் பெருக்கல்',
    },
    kn: {
      title: '2. ಗುಣಾಕಾರ ತಂತ್ರಗಳು',
      subtitle: '10ರ ಘಾತಗಳು ಮತ್ತು ಸಾರ್ವತ್ರಿಕ ವೇದ ಕ್ರಾಸ್ ಗುಣಾಕಾರ',
    },
    ml: {
      title: '2. ഗുണന രീതികൾ',
      subtitle: '10ന്റെ ഘാതങ്ങളും വേദിക് ക്രോസ് ഗുണനവും',
    },
    bn: {
      title: '২. গুণ পদ্ধতি',
      subtitle: '১০-এর ঘাত এবং সার্বজনীন বৈদিক আড়াআড়ি গুণ',
    },
    pa: {
      title: '2. ਗੁਣਾ ਤਕਨੀਕਾਂ',
      subtitle: '10 ਦੀਆਂ ਘਾਤਾਂ ਅਤੇ ਵੈਦਿਕ ਕ੍ਰਾਸ ਗੁਣਾ',
    },
    ur: {
      title: '2. ضرب کی تکنیکیں',
      subtitle: '10 کی طاقتیں اور عالمگیر ویدک ضرب',
    },
    or: {
      title: '୨. ଗୁଣନ କୌଶଳ',
      subtitle: '୧୦ ର ଘାତ ଏବଂ ବୈଦିକ କ୍ରସ୍ ଗୁଣନ',
    },
    as: {
      title: '২. পূৰণৰ পদ্ধতিসমূহ',
      subtitle: '১০-ৰ ঘাত আৰু বৈদিক ক্ৰছ পূৰণ',
    },
  },
  squares_cubes_powers: {
    en: {
      title: '3. Squares, Cubes & Powers',
      subtitle: 'Base Deviations, Universal Duplex & Binomial Expansions',
    },
    hi: {
      title: '3. वर्ग, घन और घात',
      subtitle: 'आधार विचलन, सार्वभौमिक द्वंद्व योग (Duplex) और द्विपद विस्तार',
    },
    gu: {
      title: '3. વર્ગ, ઘન અને ઘાત',
      subtitle: 'આધાર વિચલન, ડુપ્લેક્સ વર્ગ અને દ્વિપદી વિસ્તરણ',
    },
    mr: {
      title: '3. वर्ग, घन आणि घातांक',
      subtitle: 'पाया विचलन, द्वंद्व योग (Duplex) व द्विपद विस्तार',
    },
    te: {
      title: '3. వర్గాలు, ఘనాలు & ఘాతాలు',
      subtitle: 'బేస్ వ్యత్యాసాలు, డ్యూప్లెక్స్ & ద్విపద విస్తరణ',
    },
    ta: {
      title: '3. வர்க்கங்கள், கனங்கள் & அடுக்குகள்',
      subtitle: 'அடிப்படை விலகல்கள், டூப்ளக்ஸ் மற்றும் ஈருறுப்பு விரிவு',
    },
    kn: {
      title: '3. ವರ್ಗಗಳು, ಘನಗಳು & ಘಾತಗಳು',
      subtitle: 'ಆಧಾರ ವಿಚಲನೆಗಳು, ಡ್ಯೂಪ್ಲೆಕ್ಸ್ ಮತ್ತು ದ್ವಿಪದ ವಿಸ್ತರಣೆ',
    },
    ml: {
      title: '3. വർഗ്ഗങ്ങൾ, ഘനങ്ങൾ & ഘാതങ്ങൾ',
      subtitle: 'ബേസ് വ്യതിയാനങ്ങളും ഡ്യൂപ്ലെക്സും ദ്വിപദ വികാസവും',
    },
    bn: {
      title: '৩. বর্গ, ঘন এবং ঘাত',
      subtitle: 'ভিত্তি বিচ্যুতি, ডুপ্লেক্স বর্গ এবং দ্বিপদী বিস্তার',
    },
    pa: {
      title: '3. ਵਰਗ, ਘਣ ਅਤੇ ਘਾਤਾਂ',
      subtitle: 'ਬੇਸ ਵਿਚਲਨ, ਡੁਪਲੈਕਸ ਵਰਗ ਅਤੇ ਦੋਪਦੀ ਪਾਸਾਰ',
    },
    ur: {
      title: '3. مربع، مکعب اور قوتیں',
      subtitle: 'بنیادی انحرافات، ڈوپلیکس اور بائنومیل پھیلاؤ',
    },
    or: {
      title: '୩. ବର୍ଗ, ଘନ ଏବଂ ଘାତ',
      subtitle: 'ଭିତ୍ତି ବିଚ୍ୟୁତି, ଡୁପ୍ଲେକ୍ସ ଏବଂ ଦ୍ୱିପଦୀ ବିସ୍ତାର',
    },
    as: {
      title: '৩. বৰ্গ, ঘন আৰু ঘাত',
      subtitle: 'ভিত্তি বিচ্যুতি, ডুপ্লেক্স আৰু দ্বিপদ বিস্তাৰ',
    },
  },
  roots_approximations: {
    en: {
      title: '4. Root Extractions & Approximations',
      subtitle: 'Unit Elimination Bounding & First-Order Differentials',
    },
    hi: {
      title: '4. मूल निष्कर्षण और सन्निकटन',
      subtitle: 'इकाई अंक विलोपन सीमांकन और प्रथम-क्रम अवकलज',
    },
    gu: {
      title: '4. મૂળ ગણતરી અને અંદાજ',
      subtitle: 'એકમ અંક નિવારણ અને પ્રથમ-ક્રમ અવકલન',
    },
    mr: {
      title: '4. मूळ काढणे आणि अंदाजीकरण',
      subtitle: 'एकक अंक वगळणे व प्रथम-क्रम अवकलन',
    },
    te: {
      title: '4. మూలాల గణన & అంచనా',
      subtitle: 'యూనిట్ డిజిట్ తొలగింపు & డిఫరెన్షియల్స్',
    },
    ta: {
      title: '4. மூலங்கள் கண்டறிதல் & தோராயம்',
      subtitle: 'ஒன்றின் இலக்க நீக்கம் மற்றும் முதல்-வரிசை வகையீடு',
    },
    kn: {
      title: '4. ಮೂಲ ಶೋಧನೆ & ಅಂದಾಜು',
      subtitle: 'ಬಿಡಿ ಅಂಕಿ ನಿವಾರಣೆ ಮತ್ತು ಪ್ರಥಮ-ಶ್ರೇಣಿಯ ಡಿಫರೆನ್ಷಿಯಲ್ಸ್',
    },
    ml: {
      title: '4. റൂട്ട് നിർണ്ണയവും ഏകദേശ കണക്കുകൂട്ടലും',
      subtitle: 'യൂണിറ്റ് അക്കം ഒഴിവാക്കലും ഡിഫറൻഷ്യലുകളും',
    },
    bn: {
      title: '৪. মূল নির্ণয় এবং আসন্ন মান',
      subtitle: 'একক অঙ্ক বর্জন ও প্রথম-ক্রম অন্তরকলন',
    },
    pa: {
      title: '4. ਮੂਲ ਕੱਢਣਾ ਅਤੇ ਅੰਦਾਜ਼ਾ',
      subtitle: 'ਇਕਾਈ ਅੰਕ ਖ਼ਤਮ ਕਰਨਾ ਅਤੇ ਡਿਫਰੈਂਸ਼ੀਅਲਸ',
    },
    ur: {
      title: '4. جزر نکالنا اور تخمینہ',
      subtitle: 'اکائی ہندسہ کا خاتمہ اور ڈیفرینشل طریقہ',
    },
    or: {
      title: '୪. ମୂଳ ନିର୍ଣ୍ଣୟ ଏବଂ ଆସନ୍ନ ମାନ',
      subtitle: 'ଏକକ ଅଙ୍କ ବର୍ଜନ ଏବଂ ପ୍ରଥମ-କ୍ରମ ଅବକଳନ',
    },
    as: {
      title: '৪. মূল নিৰ্ণয় আৰু আনুমানিক মান',
      subtitle: 'একক অংক বৰ্জন আৰু প্ৰথম-ক্ৰম অৱকলন',
    },
  },
  fast_division_percentages: {
    en: {
      title: '5. Fast Division & Percentages',
      subtitle: 'Vedic Flag Method, Ekadhika Osculators & Reversible Base Pivots',
    },
    hi: {
      title: '5. तीव्र भाग और प्रतिशत',
      subtitle: 'वैदिक ध्वजांक विधि, एकाधिक ऑस्कुलेटर और प्रतिवर्ती आधार धुरी',
    },
    gu: {
      title: '5. ઝડપી ભાગાકાર અને ટકાવારી',
      subtitle: 'વૈદિક ધ્વજાંક પદ્ધતિ, એકાધિક ઓસ્ક્યુલેટર્સ અને વિપરીત ટકાવારી',
    },
    mr: {
      title: '5. जलद भागाकार आणि टक्केवारी',
      subtitle: 'वैदिक ध्वजांक पद्धत, एकाधिक ऑस्क्युलेटर व उलट टक्केवारी नियम',
    },
    te: {
      title: '5. వేగవంతమైన భాగహారం & శాతాలు',
      subtitle: 'వేద ధ్వజాంక పద్ధతి, ఆస్క్యులేటర్లు & శాతాల సూత్రాలు',
    },
    ta: {
      title: '5. வேகமான வகுத்தல் & சதவீதங்கள்',
      subtitle: 'வேத கொடி முறை, ஆஸ்குலேட்டர்கள் & சதவீத தலைகீழ் விதி',
    },
    kn: {
      title: '5. ವೇಗದ ಭಾಗಾಕಾರ & ಶೇಕಡಾವಾರು',
      subtitle: 'ವೇದ ಧ್ವಜಾಂಕ ವಿಧಾನ, ಆಸ್ಕ್ಯುಲೇಟರ್‌ಗಳು & ರಿವರ್ಸಿಬಲ್ ಪರ್ಸೆಂಟ್',
    },
    ml: {
      title: '5. വേഗത്തിലുള്ള ഹരണവും ശതമാനങ്ങളും',
      subtitle: 'വേദിക് ഫ്ലാഗ് രീതി, ഓസ്കുലേറ്ററുകൾ & റിവേഴ്സിബിൾ ശതമാനം',
    },
    bn: {
      title: '৫. দ্রুত ভাগ ও শতকরা',
      subtitle: 'বৈদিক ধ্বজাঙ্ক পদ্ধতি, অসিলেটর ও বিপরীত শতকরা নিয়ম',
    },
    pa: {
      title: '5. ਤੇਜ਼ ਵੰਡ ਅਤੇ ਪ੍ਰਤੀਸ਼ਤ',
      subtitle: 'ਵੈਦਿਕ ਧਵਜਾਂਕ ਵਿਧੀ, ਓਸਕੂਲੇਟਰ ਅਤੇ ਪ੍ਰਤੀਸ਼ਤ ਨਿਯਮ',
    },
    ur: {
      title: '5. تیز تقسیم اور فیصد',
      subtitle: 'ویدک پرچم کا طریقہ، آسکیولیٹرز اور متضاد فیصد قانون',
    },
    or: {
      title: '୫. ଦ୍ରୁତ ହରଣ ଏବଂ ପ୍ରତିଶତ',
      subtitle: 'ବୈଦିକ ଧ୍ୱଜାଙ୍କ ପଦ୍ଧତି, ଅସ୍କିଲେଟର ଏବଂ ପ୍ରତିବର୍ତ୍ତୀ ଶତକଡ଼ା ନିୟମ',
    },
    as: {
      title: '৫. দ্ৰুত হৰণ আৰু শতাংশ',
      subtitle: 'বৈদিক ধ্বজাংক পদ্ধতি, অস্কিউলেটৰ আৰু প্ৰতিৱৰ্তী শতাংশ নিয়ম',
    },
  },
};

// -------------------------------------------------------------
// TECHNIQUE LESSON TRANSLATIONS
// -------------------------------------------------------------
const TECHNIQUE_TRANSLATIONS: Record<
  string,
  Partial<Record<SupportedLocale, LocalizedTechniqueMeta>>
> = {
  add_l2r_place_value: {
    en: {
      title: 'Left-to-Right Place-Value Addition',
      subtitle: 'Accumulate highest place-value first with mental running buffer',
      mathSecretTitle: 'Place-Value Decomposition',
      mathSecretDesc: 'Add the tens first, hold the accumulator in working memory, then resolve the units without standard right-to-left paper carries.',
      mindOdometerTitle: 'The Mind-Odometer Running Accumulator',
      subvocalInstruction: 'Add tens: "70", then add units: "76". Never retain isolated digits.',
    },
    hi: {
      title: 'बाएं-से-दाएं स्थानीय मान जोड़',
      subtitle: 'उच्चतम स्थानीय मान से प्रारंभ कर संचायक को आंतरिक प्रतिध्वनि में रखें',
      mathSecretTitle: 'स्थानीय-मान विभाजन नियम',
      mathSecretDesc: 'दहाई को पहले जोड़ें, कुल योग को कार्यशील स्मृति में स्थिर रखें, फिर बिना हासिल के कागजी तनाव के सीधे इकाई जोड़ें।',
      mindOdometerTitle: 'माइंड-ओडोमीटर संचायक तकनीक',
      subvocalInstruction: 'दहाई जोड़ें: "70", फिर इकाई जोड़ें: "76"। अंकों को अलग-अलग याद न रखें।',
    },
    gu: {
      title: 'ડાબેથી જમણે સ્થાન-કિંમત સરવાળો',
      subtitle: 'સૌથી મોટી સ્થાન-કિંમત પહેલાં ઉમેરીને મનમાં સંગ્રહિત કરો',
      mathSecretTitle: 'સ્થાન-કિંમત વિભાજન પદ્ધતિ',
      mathSecretDesc: 'દશકને પહેલાં ઉમેરો, સરવાળો મનમાં સ્થિર રાખો, પછી એકમ ઉમેરો.',
      mindOdometerTitle: 'માઇન્ડ-ઓડોમીટર સંચયક પદ્ધતિ',
      subvocalInstruction: 'દશક ઉમેરો: "70", પછી એકમ ઉમેરો: "76".',
    },
    mr: {
      title: 'डावीकडून उजवीकडे स्थानिक किंमत बेरीज',
      subtitle: 'सर्वात मोठ्या स्थानिक मूल्यापासून सुरुवात करून संचयक मनात ठेवा',
      mathSecretTitle: 'स्थानिक-मूल्य विभाजन नियम',
      mathSecretDesc: 'दशकाची बेरीज आधी करा, मनात एकूण ठेवा, मग एकक जोडा.',
      mindOdometerTitle: 'माइंड-ओडोमीटर संचयक तंत्र',
      subvocalInstruction: 'दशक जोडा: "70", मग एकक जोडा: "76".',
    },
    te: {
      title: 'ఎడమ నుండి కుడికి స్థాన విలువ కూడిక',
      subtitle: 'అత్యధిక స్థాన విలువను ముందుగా కూడి మెదడులో నిల్వ చేయండి',
    },
    ta: {
      title: 'இடமிருந்து வலமாக இடமதிப்பு கூட்டல்',
      subtitle: 'அதிக இடமதிப்பை முதலில் கூட்டி மனதில் நிலைநிறுத்தவும்',
    },
    kn: {
      title: 'ಎಡದಿಂದ ಬಲಕ್ಕೆ ಸ್ಥಾನಬೆಲೆ ಸಂಕಲನ',
      subtitle: 'ಅತ್ಯುನ್ನತ ಸ್ಥಾನಬೆಲೆಯನ್ನು ಮೊದಲು ಕೂಡಿ ಮನಸ್ಸಿನಲ್ಲಿಟ್ಟುಕೊಳ್ಳಿ',
    },
    ml: {
      title: 'ഇടത്തുനിന്ന് വലത്തോട്ട് സ്ഥാനവില സങ്കലനം',
      subtitle: 'ഉയർന്ന സ്ഥാനവില ആദ്യം കൂട്ടി മനസ്സിൽ ഉറപ്പിക്കുക',
    },
    bn: {
      title: 'বাম-থেকে-ডান স্থানীয় মান যোগ',
      subtitle: 'সর্বোচ্চ স্থানীয় মান প্রথমে যোগ করে স্মৃতিতে রাখুন',
    },
    pa: {
      title: 'ਖੱਬੇ ਤੋਂ ਸੱਜੇ ਸਥਾਨ-ਮੁੱਲ ਜੋੜ',
      subtitle: 'ਸਭ ਤੋਂ ਵੱਡੇ ਸਥਾਨ-ਮੁੱਲ ਨੂੰ ਪਹਿਲਾਂ ਜੋੜੋ',
    },
    ur: {
      title: 'بائیں سے دائیں مقامی قیمت جمع',
      subtitle: 'پہلے سب سے بڑی مقامی قیمت کو جمع کریں اور ذہن میں رکھیں',
    },
    or: {
      title: 'ବାମରୁ ଡାହାଣ ସ୍ଥାନୀୟ ମୂଲ୍ୟ ଯୋଗ',
      subtitle: 'ପ୍ରଥମେ ବଡ଼ ସ୍ଥାନୀୟ ମୂଲ୍ୟ ଯୋଡ଼ି ମନେ ରଖନ୍ତୁ',
    },
    as: {
      title: 'বাওঁফালৰ পৰা সোঁফাললৈ স্থানমান যোগ',
      subtitle: 'সৰ্বোচ্চ স্থানমান প্ৰথমে যোগ কৰি মনত ৰাখক',
    },
  },
  add_bridging_base10: {
    en: {
      title: 'Base-10 Bridging Addition',
      subtitle: 'Jump to the nearest clean decade boundary and balance the remainder',
    },
    hi: {
      title: 'आधार 10 सेतु जोड़ (Base-10 Bridging)',
      subtitle: 'निकटवर्ती दहाई तक छलांग लगाएं और शेष मान को संतुलित करें',
    },
    gu: {
      title: 'આધાર 10 બ્રિજિંગ સરવાળો',
      subtitle: 'નજીકના દશક સુધી કૂદકો લગાવો અને બાકીની રકમ ઉમેરો',
    },
    mr: {
      title: 'पाया 10 सेतू बेरीज',
      subtitle: 'जवळच्या दशकापर्यंत झेप घ्या आणि उर्वरित मूल्य संतुलित करा',
    },
  },
  add_compensation: {
    en: {
      title: 'Compensation Addition (Rounding & Adjust)',
      subtitle: 'Round up to clean tens (98 → 100), add, and subtract the overage',
    },
    hi: {
      title: 'प्रतिपूरक जोड़ (Rounding & Adjust)',
      subtitle: 'निकटतम 100 या 50 मानकर जोड़ें, फिर अतिरिक्त मान घटाएं',
    },
    gu: {
      title: 'વળતર સરવાળો (રાઉન્ડિંગ અને એડજસ્ટ)',
      subtitle: 'નજીકના 100 કે 50 માનીને સરવાળો કરો, પછી વધારાની રકમ બાદ કરો',
    },
    mr: {
      title: 'भरपाई बेरीज (Rounding & Adjust)',
      subtitle: 'जवळच्या 100 किंवा 50 मानून जोडा आणि जास्तीचे मूल्य वजा करा',
    },
  },
  sub_l2r_step: {
    en: {
      title: 'Left-to-Right Step Subtraction',
      subtitle: 'Subtract the tens first from running accumulator, then peel off units',
    },
    hi: {
      title: 'बाएं-से-दाएं क्रमिक घटाव',
      subtitle: 'संचायक में से पहले दहाई घटाएं, फिर इकाई को अलग करें',
    },
  },
  sub_shopkeeper_count_up: {
    en: {
      title: "Shopkeeper's Count-Up Subtraction",
      subtitle: 'Transform subtraction into additive cash-drawer milestones',
    },
    hi: {
      title: 'दुकानदार काउंट-अप विधि',
      subtitle: 'घटाने के बजाय छोटी संख्या से बड़ी संख्या तक आगे जोड़ते हुए जाएं',
    },
  },
  sub_nikhilam_all_from_9: {
    en: {
      title: 'Vedic Nikhilam: All From 9 and Last From 10',
      subtitle: 'Universal formula for instant complement subtraction from 100, 1000, etc.',
    },
    hi: {
      title: 'वैदिक निखिलम: सब 9 से, अंतिम 10 से',
      subtitle: '100, 1000 आदि आधारों से बिजली की गति से पूरक घटाव का सार्वभौमिक सूत्र',
    },
    gu: {
      title: 'વૈદિક નિખિલમ: બધા 9 માંથી, છેલ્લો 10 માંથી',
      subtitle: '100, 1000 વગેરેમાંથી ઝડપી બાદબાકીનું વૈદિક સૂત્ર',
    },
    mr: {
      title: 'वैदिक निखिलम: सर्व 9 मधून, शेवटचा 10 मधून',
      subtitle: '100, 1000 इत्यादी पायांमधून जलद वजाबाकीचे सार्वत्रिक सूत्र',
    },
  },
  mult_power10_5: {
    en: {
      title: 'Multiplication by 5 (Half & Append 0)',
      subtitle: 'Halve the number and scale by 10: (n ÷ 2) × 10',
    },
    hi: {
      title: '5 से गुणा: आधा करें और 10 से गुणा करें',
      subtitle: 'संख्या को आधा करें और शून्य लगाएं: (n ÷ 2) × 10',
    },
    gu: {
      title: '5 વડે ગુણાકાર: અડધું કરો અને 10 વડે ગુણો',
      subtitle: 'સંખ્યાને અડધી કરો અને 10 ગણી કરો: (n ÷ 2) × 10',
    },
    mr: {
      title: '5 ने गुणाकार: निमपट करा आणि 10 ने गुणा',
      subtitle: 'संख्या निम्मी करा आणि 10 ने गुणा: (n ÷ 2) × 10',
    },
  },
  mult_power10_25: {
    en: {
      title: 'Multiplication by 25 (Quarter & Append 00)',
      subtitle: 'Divide by 4 and multiply by 100: (n ÷ 4) × 100',
    },
    hi: {
      title: '25 से गुणा: चौथाई करें और 100 से गुणा करें',
      subtitle: 'संख्या को 4 से भाग दें और दो शून्य लगाएं: (n ÷ 4) × 100',
    },
  },
  mult_repunit_11: {
    en: {
      title: 'Multiplication by 11 (Neighbor Addition Sandwich)',
      subtitle: 'Sandwich the sum of consecutive adjacent digits between ends',
    },
    hi: {
      title: '11 से गुणा: पड़ोसी जोड़ सैंडविच विधि',
      subtitle: 'प्रथम और अंतिम अंक के बीच लगातार अंकों का योग रखें',
    },
    gu: {
      title: '11 વડે ગુણાકાર: પાડોશી અંક સરવાળો',
      subtitle: 'પ્રથમ અને અંતિમ અંક વચ્ચે અંકોનો સરવાળો મૂકો',
    },
    mr: {
      title: '11 ने गुणाकार: शेजारील अंक बेरीज पद्धत',
      subtitle: 'पहिल्या व शेवटच्या अंकाच्या मध्ये सलग अंकांची बेरीज ठेवा',
    },
  },
  mult_pattern_antyayor_dasakepi: {
    en: {
      title: 'Antyayor Dasakepi (Tens Match, Units Sum to 10)',
      subtitle: 'Vedic product: Tens × (Tens + 1) | Units × Units',
    },
    hi: {
      title: 'अंत्ययोर्दशकेऽपि: दहाई समान, इकाइयों का योग 10',
      subtitle: 'वैदिक सूत्र: दहाई × (दहाई + 1) | इकाई × इकाई',
    },
  },
  mult_vedic_urdhva_tiryag: {
    en: {
      title: 'Vedic Urdhva-Tiryagbhyam (Universal Vertical & Crosswise)',
      subtitle: 'Single-line universal multiplication for all 2-digit and 3-digit combinations',
    },
    hi: {
      title: 'वैदिक ऊर्ध्व-तिर्यग्भ्याम्: सीधा व तिरछा गुणा',
      subtitle: 'सभी 2-अंकीय व 3-अंकीय गुणा का एकल-पंक्ति सार्वभौमिक सूत्र',
    },
  },
  mult_trachtenberg_rules: {
    en: {
      title: 'Trachtenberg Speed System (Multiplication by 12)',
      subtitle: 'Double each digit and add its right-hand neighbor without carry confusion',
    },
    hi: {
      title: 'ट्राचटेनबर्ग तीव्र प्रणाली: 12 से गुणा',
      subtitle: 'प्रत्येक अंक को दोगुना करें और उसके दाहिने पड़ोसी को जोड़ें',
    },
  },
  mult_vedic_base_yavadunam: {
    en: {
      title: 'Vedic Yavadunam Base Multiplication (Near 100)',
      subtitle: 'Cross-add deficits and multiply deviations: (100 ± d1)(100 ± d2)',
    },
    hi: {
      title: 'वैदिक यावदूनम्: आधार 100 के निकट गुणा',
      subtitle: 'विचलनों का क्रॉस-जोड़ और गुणन: (100 ± d1)(100 ± d2)',
    },
  },
  sq_base_50: {
    en: {
      title: 'Squares Near 50 (Base 25 Offset)',
      subtitle: 'Anchor at 25: (25 ± d) | d² for numbers from 40 to 60',
    },
    hi: {
      title: '50 के निकट संख्याओं का वर्ग (25 आधार ऑफसेट)',
      subtitle: '25 को आधार बनाएं: (25 ± d) | d² (40 से 60 तक की संख्याएं)',
    },
    gu: {
      title: '50 ની નજીકની સંખ્યાઓનો વર્ગ (25 આધાર)',
      subtitle: '25 ને આધાર બનાવો: (25 ± d) | d²',
    },
    mr: {
      title: '50 च्या जवळच्या संख्यांचा वर्ग (25 पाया ऑफसेट)',
      subtitle: '25 ला आधार माना: (25 ± d) | d²',
    },
  },
  sq_base_100: {
    en: {
      title: 'Squares Near 100 (Deficit Method)',
      subtitle: 'Subtract deficit from number, append squared deficit: (N - d) | d²',
    },
    hi: {
      title: '100 के निकट संख्याओं का वर्ग (घाटा विधि)',
      subtitle: 'संख्या में से विचलन घटाएं, आगे विचलन का वर्ग लगाएं: (N ± d) | d²',
    },
  },
  sq_ending_5: {
    en: {
      title: 'Squares Ending in 5 (Ekadhikena Purvena)',
      subtitle: 'Multiply tens by next integer and append 25: N(N + 1) | 25',
    },
    hi: {
      title: '5 पर समाप्त संख्याओं का वर्ग: एकाधिकेन पूर्वेण',
      subtitle: 'दहाई को उसके अगले अंक से गुणा करें और 25 लगाएं: N(N + 1) | 25',
    },
    gu: {
      title: '5 થી અંત પામતી સંખ્યાઓનો વર્ગ: એકાધિકેન પૂર્વેણ',
      subtitle: 'દશકને તેના પછીના અંક સાથે ગુણીને 25 લગાવો: N(N + 1) | 25',
    },
    mr: {
      title: '5 वर संपणाऱ्या संख्यांचा वर्ग: एकाधिकेन पूर्वेण',
      subtitle: 'दशकाला त्याच्या पुढच्या अंकाने गुणा आणि 25 लावा: N(N + 1) | 25',
    },
  },
  sq_universal_duplex: {
    en: {
      title: 'Algebraic Universal Duplex Squaring',
      subtitle: 'Full mental expansion: (a + b)² = a² + 2ab + b² left-to-right',
    },
    hi: {
      title: 'सार्वभौमिक द्वंद्व योग (Duplex) वर्ग विधि',
      subtitle: 'पूर्ण मानसिक विस्तार: (a + b)² = a² + 2ab + b² बाएं से दाएं',
    },
  },
  root_sqrt_perfect_6d: {
    en: {
      title: 'Square Roots of Perfect Squares (Unit Elimination)',
      subtitle: 'Pair digits, bound the tens root, and resolve units via parity',
    },
    hi: {
      title: 'पूर्ण वर्गमूल: इकाई अंक विलोपन विधि',
      subtitle: 'जोड़े बनाएं, दहाई को सीमाबद्ध करें और इकाई का सटीक मिलान करें',
    },
  },
  div_vedic_flag_dhvajanka: {
    en: {
      title: 'Vedic Flag Method (Dhvajanka Division)',
      subtitle: 'Single-line division for multi-digit divisors using operating digit & flag',
    },
    hi: {
      title: 'वैदिक ध्वजांक विधि: तीव्र भाग',
      subtitle: 'ध्वज अंक और मुख्य भाजक का उपयोग करके बहु-अंकीय भाग की एकल-पंक्ति विधि',
    },
  },
  pct_reversible_law: {
    en: {
      title: 'Reversible Percentage Law',
      subtitle: 'A% of B equals B% of A: swap to make numbers instantly solvable',
    },
    hi: {
      title: 'प्रतिशत प्रतिवर्ती नियम (Reversible Percentage)',
      subtitle: 'A% of B = B% of A: संख्याओं को पलटकर गणना को तुरंत सरल बनाएं',
    },
    gu: {
      title: 'ટકાવારી રિવર્સિબલ નિયમ',
      subtitle: 'A% of B = B% of A: ગણતરીને સરળ બનાવવા સંખ્યાઓ ઉલટાવો',
    },
    mr: {
      title: 'टक्केवारी उलट नियम',
      subtitle: 'A% of B = B% of A: आकडे उलटे करून गणित लगेच सोपे करा',
    },
  },
};

// -------------------------------------------------------------
// STRATEGY (TRICK) TRANSLATIONS
// -------------------------------------------------------------
const STRATEGY_TRANSLATIONS: Record<
  string,
  Partial<Record<SupportedLocale, LocalizedStrategyMeta>>
> = {
  zeros_ones_foundations: {
    en: {
      name: 'Zero and Identity Foundations',
      mentalScript: 'Any number multiplied by 0 is 0. Any number multiplied by 1 is itself.',
      mentalTip: 'Multiplying by 1 never changes the value.',
    },
    hi: {
      name: 'शून्य और पहचान आधार नियम',
      mentalScript: 'किसी भी संख्या को 0 से गुणा करने पर 0 आता है। 1 से गुणा करने पर संख्या अपरिवर्तित रहती है।',
      mentalTip: '1 से गुणा करने पर मान कभी नहीं बदलता।',
    },
  },
  twos_doubling: {
    en: {
      name: 'Doubling (×2)',
      mentalScript: 'Multiply by 2 by adding the number to itself (n + n).',
      mentalTip: 'Think of doubling: 2 × n is simply n + n.',
    },
    hi: {
      name: 'दोगुना करना (×2)',
      mentalScript: '2 से गुणा करने का अर्थ है संख्या को स्वयं में जोड़ना (n + n)।',
      mentalTip: '2 × n को केवल n + n के रूप में सोचें।',
    },
  },
  fives_half_decade: {
    en: {
      name: 'Half of Decade (×5)',
      mentalScript: 'Multiply by 10 and divide by 2: (10n) ÷ 2.',
      mentalTip: 'Halve first, then append zero.',
    },
    hi: {
      name: 'दहाई का आधा (×5)',
      mentalScript: '10 से गुणा करके 2 से भाग दें: (10n) ÷ 2।',
      mentalTip: 'संख्या को पहले आधा करें, फिर शून्य लगाएं।',
    },
  },
  fours_double_double: {
    en: {
      name: 'Double Double (×4)',
      mentalScript: 'Double twice: 4n = 2(2n).',
      mentalTip: 'Double the number once, then double the result again.',
    },
    hi: {
      name: 'दो बार दोगुना (×4)',
      mentalScript: 'दो बार दोगुना करें: 4n = 2(2n)।',
      mentalTip: 'संख्या को पहले दोगुना करें, फिर प्राप्त संख्या को पुनः दोगुना करें।',
    },
  },
  eights_triple_double: {
    en: {
      name: 'Triple Double (×8)',
      mentalScript: 'Double three times: 8n = 2(2(2n)).',
      mentalTip: 'Double three times successively.',
    },
    hi: {
      name: 'तीन बार दोगुना (×8)',
      mentalScript: 'तीन बार लगातार दोगुना करें: 8n = 2(2(2n))।',
      mentalTip: 'लगातार 3 बार दोगुना करते जाएं।',
    },
  },
  nines_decade_minus: {
    en: {
      name: 'Decade Minus (×9)',
      mentalScript: 'Multiply by 10 and subtract the number itself: 9n = 10n - n.',
      mentalTip: 'Add a zero to the number, then subtract the original number once.',
    },
    hi: {
      name: 'दहाई घटाव (×9)',
      mentalScript: '10 से गुणा करें और मूल संख्या घटाएं: 9n = 10n - n।',
      mentalTip: 'संख्या के आगे 0 लगाएं, फिर उसमें से मूल संख्या घटा लें।',
    },
  },
  elevens_sandwich: {
    en: {
      name: 'Elevens Sandwich (×11)',
      mentalScript: 'Insert the sum of the digits between the digits.',
      mentalTip: 'For two-digit numbers, separate digits and put their sum in the middle.',
    },
    hi: {
      name: '11 का सैंडविच जोड़ (×11)',
      mentalScript: 'दोनों अंकों के बीच में उनके योग को रखें।',
      mentalTip: 'दो अंकों की संख्या में दोनों अंकों को अलग करें और बीच में उनका योग रखें।',
    },
  },
  twelves_decade_plus_double: {
    en: {
      name: 'Decade + Double (×12)',
      mentalScript: 'Multiply by 10, then add double the number: 12n = 10n + 2n.',
      mentalTip: 'Add a zero to the number and add twice the number.',
    },
    hi: {
      name: 'दहाई + दोगुना (×12)',
      mentalScript: '10 से गुणा करें, फिर संख्या का दोगुना जोड़ें: 12n = 10n + 2n।',
      mentalTip: 'संख्या के आगे 0 लगाएं और उसमें संख्या का दोगुना जोड़ दें।',
    },
  },
  split_and_add_distributive: {
    en: {
      name: 'Split-and-Add Distributive',
      mentalScript: 'Split one number into tens and units, multiply separately and sum.',
      mentalTip: 'Multiply the tens first, hold the buffer, then add units.',
    },
    hi: {
      name: 'विभाजन और जोड़ विधि (Split & Add)',
      mentalScript: 'एक संख्या को दहाई और इकाई में बांटें, अलग-अलग गुणा करके जोड़ें।',
      mentalTip: 'पहले दहाई से गुणा करें, मान को मन में रखें, फिर इकाई का गुणा जोड़ें।',
    },
  },
  sq_ending_5_ekadhikena: {
    en: {
      name: 'Square Ending 5 (Ekadhikena)',
      mentalScript: 'Multiply tens by (tens + 1) and append 25.',
      mentalTip: 'Tens digit × next digit, then write 25 at the end.',
    },
    hi: {
      name: '5 पर समाप्त वर्ग (एकाधिकेन)',
      mentalScript: 'दहाई को (दहाई + 1) से गुणा करें और आगे 25 लगाएं।',
      mentalTip: 'दहाई का अंक × अगला अंक, फिर अंत में 25 लिख दें।',
    },
  },
  sq_base_50_offset: {
    en: {
      name: 'Square Base 50 Offset',
      mentalScript: 'Calculate deviation d = n - 50. Result is (25 + d) × 100 + d².',
      mentalTip: 'Add deviation to 25, then append square of deviation.',
    },
    hi: {
      name: '50 आधार ऑफसेट वर्ग',
      mentalScript: 'विचलन d = n - 50 निकालें। परिणाम (25 + d) | d² होगा।',
      mentalTip: '25 में विचलन जोड़ें/घटाएं, फिर विचलन का वर्ग जोड़ें।',
    },
  },
};

// -------------------------------------------------------------
// HELPER RESOLVER FUNCTIONS
// -------------------------------------------------------------
export function getLocalizedModule(
  moduleId: TechniqueModuleCategory,
  locale: SupportedLocale
): LocalizedModuleMeta {
  const mod = MODULE_TRANSLATIONS[moduleId];
  if (mod && mod[locale]) {
    return mod[locale]!;
  }
  if (mod && mod.hi && locale !== 'en') {
    return mod.hi;
  }
  return (
    mod?.en || {
      title: moduleId,
      subtitle: '',
    }
  );
}

export function getLocalizedTechnique(
  techniqueId: CalculationTechniqueId | string,
  locale: SupportedLocale,
  fallbackTitle?: string,
  fallbackSubtitle?: string
): LocalizedTechniqueMeta {
  const tech = TECHNIQUE_TRANSLATIONS[techniqueId];
  if (tech && tech[locale]) {
    return {
      title: tech[locale]!.title,
      subtitle: tech[locale]!.subtitle,
      mathSecretTitle: tech[locale]!.mathSecretTitle,
      mathSecretDesc: tech[locale]!.mathSecretDesc,
      mindOdometerTitle: tech[locale]!.mindOdometerTitle,
      subvocalInstruction: tech[locale]!.subvocalInstruction,
    };
  }
  if (tech && tech.hi && locale !== 'en') {
    return {
      title: tech.hi.title,
      subtitle: tech.hi.subtitle,
      mathSecretTitle: tech.hi.mathSecretTitle,
      mathSecretDesc: tech.hi.mathSecretDesc,
      mindOdometerTitle: tech.hi.mindOdometerTitle,
      subvocalInstruction: tech.hi.subvocalInstruction,
    };
  }
  if (tech && tech.en) {
    return {
      title: tech.en.title,
      subtitle: tech.en.subtitle,
      mathSecretTitle: tech.en.mathSecretTitle,
      mathSecretDesc: tech.en.mathSecretDesc,
      mindOdometerTitle: tech.en.mindOdometerTitle,
      subvocalInstruction: tech.en.subvocalInstruction,
    };
  }

  return {
    title: fallbackTitle || techniqueId.replace(/_/g, ' '),
    subtitle: fallbackSubtitle || '',
  };
}

export function getLocalizedStrategy(
  strategyId: string,
  locale: SupportedLocale,
  fallbackName?: string,
  fallbackScript?: string
): LocalizedStrategyMeta {
  const strat = STRATEGY_TRANSLATIONS[strategyId];
  if (strat && strat[locale]) {
    return strat[locale]!;
  }
  if (strat && strat.hi && locale !== 'en') {
    return strat.hi;
  }
  if (strat && strat.en) {
    return strat.en;
  }

  return {
    name: fallbackName || strategyId.replace(/_/g, ' '),
    mentalScript: fallbackScript || '',
  };
}
