import * as fs from 'fs';
import * as path from 'path';

const mcPath = path.join(__dirname, '../src/core/mind/mindCurriculum.ts');
const topicsDir = path.join(__dirname, '../src/core/mind/topics');
const mcContent = fs.readFileSync(mcPath, 'utf8');

// Helper to extract code block between two markers
function extractBlock(startMarker: string, endMarker: string): string {
  const startIdx = mcContent.indexOf(startMarker);
  if (startIdx === -1) throw new Error(`Could not find start marker: ${startMarker}`);
  const endIdx = mcContent.indexOf(endMarker, startIdx);
  if (endIdx === -1) throw new Error(`Could not find end marker: ${endMarker}`);
  return mcContent.slice(startIdx, endIdx);
}

// 1. Extract TOPIC_CONFIRMATION_BIAS
const cbEnStart = "export const TOPIC_CONFIRMATION_BIAS: Record<MindLanguageCode, MindTopicDetail> = {\n  en: {";
const cbHinglishMarker = "\n  hinglish: {";
const cbHiMarker = "\n  hi: {";
const cbGuMarker = "\n  gu: {} as any,";

const cbEnBlock = mcContent.slice(
  mcContent.indexOf(cbEnStart) + cbEnStart.length - 1,
  mcContent.indexOf(cbHinglishMarker)
);

const cbHinglishBlock = mcContent.slice(
  mcContent.indexOf(cbHinglishMarker) + cbHinglishMarker.length - 1,
  mcContent.indexOf(cbHiMarker)
);

const cbHiBlock = mcContent.slice(
  mcContent.indexOf(cbHiMarker) + cbHiMarker.length - 1,
  mcContent.indexOf(cbGuMarker)
);

const cbFileContent = `import { MindTopicDetail, MindLanguageCode } from '../types';

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_CONFIRMATION_BIAS_EN,
    title,
    subtitle: summary.slice(0, 80) + '...',
    oneLineExplanation: summary.slice(0, 60),
    summary30s: summary,
    coreConcept: summary,
    quickTakeaways: takeaways,
    seoTitle: \`\${title} | Mentalab Mind\`,
    seoDescription: \`\${summary.slice(0, 150)}...\`,
  };
}

export const TOPIC_CONFIRMATION_BIAS_EN: MindTopicDetail = ${cbEnBlock};

export const TOPIC_CONFIRMATION_BIAS_HINGLISH: MindTopicDetail = {
  ...${cbHinglishBlock},
  title: 'Confirmation Bias: Hum Wahi Dekhte Hain Jo Manna Chahte Hain',
};

export const TOPIC_CONFIRMATION_BIAS_HI: MindTopicDetail = ${cbHiBlock};

export const TOPIC_CONFIRMATION_BIAS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_CONFIRMATION_BIAS_EN,
  hinglish: TOPIC_CONFIRMATION_BIAS_HINGLISH,
  hi: TOPIC_CONFIRMATION_BIAS_HI,
  gu: createLocalizedRecord('gu', 'કન્ફર્મેશન બાયસ (પૂર્વગ્રહ)', 'આપણને જે પહેલાંથી ગમે છે તે જ માનવાની માનવીય વૃત્તિ.', ['પૂર્વગ્રહથી સાવધાન રહો', 'વિરોધી તથ્યો પણ તપાસો', 'નિષ્પક્ષ બનો']),
  mr: createLocalizedRecord('mr', 'कन्फर्मेशन बायस (पूर्वग्रह)', 'आपल्या जुन्या विचारांना अनुकूल पुरावेच शोधण्याची मानवी मेंदूची सवय.', ['तथ्यांची योग्य पडताळणी करा', 'पूर्वग्रह बाजूला ठेवा', 'सत्य स्वीकारा']),
  te: createLocalizedRecord('te', 'కన్ఫర్మేషన్ బయాస్ (పక్షపాతం)', 'మనం ముందుగా నమ్మిన విషయాలకే ప్రాధాన్యతనిచ్చే మానసిక వైఖరి.', ['వాస్తవాలను పరిశీలించండి', 'పక్షపాతాన్ని అధిగమించండి', 'స్వతంత్రంగా ఆలోచించండి']),
  ta: createLocalizedRecord('ta', 'உறுதிப்படுத்தல் சார்பு (Confirmation Bias)', 'நாம் ஏற்கனவே நம்புவதை மட்டுமே தேடும் மனித உளவியல்.', ['உண்மைகளை நடுநிலையோடு ஆராயுங்கள்', 'சார்புநிலையைத் தவிருங்கள்', 'சுயாதீனமாக முடிவெடுங்கள்']),
  kn: createLocalizedRecord('kn', 'ದೃಢೀಕರಣ ಪಕ್ಷಪಾತ (Confirmation Bias)', 'ನಾವು ಮೊದಲೇ ನಂಬಿರುವ ವಿಷಯಗಳನ್ನೇ ಪುಷ್ಟೀಕರಿಸುವ ಮಾನಸಿಕ ಪ್ರವೃತ್ತಿ.', ['ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ', 'ಪೂರ್ವಗ್ರಹ ಬಿಟ್ಟು ಯೋಚಿಸಿ', 'ಸ್ವತಂತ್ರ ನಿರ್ಧಾರ ಕೈಗೊಳ್ಳಿ']),
  ml: createLocalizedRecord('ml', 'കൺഫർമേഷൻ ബയസ് (പക്ഷപാതം)', 'നമ്മുടെ പഴയ വിശ്വാസങ്ങളെ മാത്രം ശരിവെയ്ക്കുന്ന കാര്യങ്ങൾ തേടുന്ന മനശാസ്ത്രം.', ['വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക', 'പക്ഷപാതം ഒഴിവാക്കുക', 'സ്വതന്ത്രമായി ചിന്തിക്കുക']),
  bn: createLocalizedRecord('bn', 'কনফার্মেশন বায়াস (পক্ষপাতিত্ব)', 'আগে থেকে বিশ্বাস করা বিষয়গুলোকেই সত্য বলে ধরে নেওয়ার মনস্তাত্ত্বিক প্রবণতা।', ['তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন', 'পক্ষপাত এড়িয়ে চলুন', 'স্বাধীনভাবে সিদ্ধান্ত নিন']),
  pa: createLocalizedRecord('pa', 'ਪੁਸ਼ਟੀ ਪੱਖਪਾਤ (Confirmation Bias)', 'ਆਪਣੇ ਪਹਿਲਾਂ ਤੋਂ ਬਣੇ ਵਿਚਾਰਾਂ ਨੂੰ ਹੀ ਸਹੀ ਸਾਬਤ ਕਰਨ ਦੀ ਦਿਮਾਗੀ ਆਦਤ।', ['ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ', 'ਪੱਖਪਾਤ ਤੋਂ ਬਚੋ', 'ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ']),
  ur: createLocalizedRecord('ur', 'تصدیقی جانبداری (Confirmation Bias)', 'اپنے پہلے سے طے شدہ عقائد کو درست ثابت کرنے والے دلائل تلاش کرنے کی عادت۔', ['حقائق کا غیر جانبدارانہ تجزیہ کریں', 'جانبداری سے دور رہیں', 'آزادانہ فیصلے کریں']),
  or: createLocalizedRecord('or', 'ନିଶ୍ଚିତକରଣ ପକ୍ଷପାତିତା (Confirmation Bias)', 'ନିଜର ପୂର୍ବ ବିଶ୍ୱାସକୁ ସମର୍ଥନ କରୁଥିବା ତଥ୍ୟ ଖୋଜିବାର ମାନସିକତା।', ['ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ', 'ପକ୍ଷପାତ ତ୍ୟାଗ କରନ୍ତୁ', 'ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ']),
  as: createLocalizedRecord('as', 'নিশ্চিতকৰণ পক্ষপাতিত্ব (Confirmation Bias)', 'নিজে বিশ্বাস কৰা কথাবোৰকেই সত্য বুলি ভবাৰ মানসিক প্ৰৱণতা।', ['তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক', 'পক্ষপাত এৰাই চলক', 'স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক']),
};
`;

fs.writeFileSync(path.join(topicsDir, 'confirmationBias.ts'), cbFileContent, 'utf8');
console.log('✓ Created confirmationBias.ts with full 14 languages');

// 2. Extract TOPIC_GASLIGHTING_AWARENESS
const glEnStart = "export const TOPIC_GASLIGHTING_AWARENESS: Record<MindLanguageCode, MindTopicDetail> = {\n  en: {";
const glHinglishMarker = "\n  hinglish: {";
const glHiMarker = "\n  hi: {} as any,";

const glEnBlock = mcContent.slice(
  mcContent.indexOf(glEnStart) + glEnStart.length - 1,
  mcContent.indexOf(glHinglishMarker)
);

const glHinglishBlock = mcContent.slice(
  mcContent.indexOf(glHinglishMarker) + glHinglishMarker.length - 1,
  mcContent.indexOf(glHiMarker)
);

const glFileContent = `import { MindTopicDetail, MindLanguageCode } from '../types';

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_GASLIGHTING_AWARENESS_EN,
    title,
    subtitle: summary.slice(0, 80) + '...',
    oneLineExplanation: summary.slice(0, 60),
    summary30s: summary,
    coreConcept: summary,
    quickTakeaways: takeaways,
    seoTitle: \`\${title} | Mentalab Mind\`,
    seoDescription: \`\${summary.slice(0, 150)}...\`,
  };
}

export const TOPIC_GASLIGHTING_AWARENESS_EN: MindTopicDetail = ${glEnBlock};

export const TOPIC_GASLIGHTING_AWARENESS_HINGLISH: MindTopicDetail = {
  ...${glHinglishBlock},
  title: 'Gaslighting Awareness: Apni Reality Par Bharosa Rakhna',
};

export const TOPIC_GASLIGHTING_AWARENESS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_GASLIGHTING_AWARENESS_EN,
  hinglish: TOPIC_GASLIGHTING_AWARENESS_HINGLISH,
  hi: createLocalizedRecord('hi', 'गैसलाइटिंग (Gaslighting): वास्तविकता का विरूपण', 'एक ऐसा मनोवैज्ञानिक हेरफेर जहाँ पीड़ित को अपनी ही स्मृति और समझ पर संदेह होने लगता है।', ['अपनी स्मृति पर विश्वास रखें', 'बातचीत का लिखित रिकॉर्ड रखें', 'सीमाएं निर्धारित करें']),
  gu: createLocalizedRecord('gu', 'ગેસલાઇટિંગ: માનસિક છેતરપિંડી અને ભ્રમ', 'જ્યારે કોઈ વ્યક્તિ તમારી વાસ્તવિકતા અને યાદશક્તિ પર શંકા પેદા કરવાનો પ્રયાસ કરે છે.', ['પોતાના પર ભરોસો રાખો', 'વાતચીતની નોંધ રાખો', 'મજબૂત સીમાઓ બનાવો']),
  mr: createLocalizedRecord('mr', 'गॅसलाइटिंग: वास्तवाचा विपर्यास', 'समोरच्या व्यक्तीच्या स्मृती आणि बुद्धीवर संशय निर्माण करणारी विषारी मानसिक चाल.', ['स्वतःच्या स्मरणशक्तीवर विश्वास ठेवा', 'पुरावे सांभाळा', 'नात्यात मर्यादा ठेवा']),
  te: createLocalizedRecord('te', 'గ్యాస్‌లైటింగ్: వాస్తవాన్ని తారుమారు చేసే మనస్తత్వం', 'ఒక వ్యక్తి తన సొంత జ్ఞాపకశక్తిని మరియు భావాలను అనుమానించేలా చేసే మానసిక దాడి.', ['మీ అంతర్వాణిని నమ్మండి', 'లిఖితపూర్వక ఆధారాలు ఉంచండి', 'స్పష్టమైన సరిహద్దులు గీయండి']),
  ta: createLocalizedRecord('ta', 'கேஸ்லைட்டிங்: மனதை குழப்பும் தந்திரம்', 'ஒருவர் தனது சொந்த நினைவாற்றலையும் பகுத்தறிவையும் சந்தேகிக்க வைக்கும் உளவியல் கையாளுதல்.', ['உங்கள் உள்ளுணர்வை நம்புங்கள்', 'ஆதாரங்களை சேகரியுங்கள்', 'எல்லைகளை வகுத்துக்கொள்ளுங்கள்']),
  kn: createLocalizedRecord('kn', 'ಗ್ಯಾಸ್‌ಲೈಟಿಂಗ್: ಮಾನಸಿಕ ತಿರುಚುವಿಕೆ', 'ವ್ಯಕ್ತಿಯು ತನ್ನ ಸ್ವಂತ ನೆನಪು ಮತ್ತು ಗ್ರಹಿಕೆಯನ್ನು ಸಂಶಯಿಸುವಂತೆ ಮಾಡುವ ಕುತಂತ್ರದ ವರ್ತನೆ.', ['ನಿಮ್ಮ ಗ್ರಹಿಕೆಯನ್ನು ನಂಬಿ', 'ಸತ್ಯಾಂಶಗಳನ್ನು ದಾಖಲಿಸಿ', 'ದೃಢವಾದ ಗಡಿಗಳನ್ನು ನಿಗದಿಪಡಿಸಿ']),
  ml: createLocalizedRecord('ml', 'ഗ്യാസ്‌ലൈറ്റിംഗ്: മാനസിക കബളിപ്പിക്കൽ', 'ഒരു വ്യക്തിയെ സ്വന്തം ചിന്തകളിലും ഓർമ്മകളിലും സംശയം ജനിപ്പിക്കുന്ന തരത്തിലുള്ള കൈകടത്തൽ.', ['സ്വന്തം ഓർമ്മയിൽ ഉറച്ചുനിൽക്കുക', 'സത്യം രേഖപ്പെടുത്തുക', 'വ്യക്തിപരമായ അതിരുകൾ നിശ്ചയിക്കുക']),
  bn: createLocalizedRecord('bn', 'গ্যাসলাইটিং: বাস্তবতা বিকৃতির কৌশল', 'এমন একটি মনস্তাত্ত্বিক অপকৌশল যেখানে ভুক্তভোগী নিজের স্মৃতি এবং বিচারবুদ্ধি নিয়ে দ্বিধায় পড়ে।', ['নিজের ওপর বিশ্বাস রাখুন', 'কথাবার্তার লিখিত প্রমাণ রাখুন', 'স্পষ্ট সীমানা তৈরি করুন']),
  pa: createLocalizedRecord('pa', 'ਗੈਸਲਾਈਟਿੰਗ: ਮਾਨਸਿਕ ਭਰਮ ਪੈਦਾ ਕਰਨਾ', 'ਇੱਕ ਅਜਿਹਾ ਮਨੋਵਿਗਿਆਨਕ ਹਮਲਾ ਜਿਸ ਵਿੱਚ ਵਿਅਕਤੀ ਆਪਣੀ ਹੀ ਯਾਦਦਾਸ਼ਤ ਉੱਤੇ ਸ਼ੱਕ ਕਰਨ ਲੱਗਦਾ ਹੈ।', ['ਆਪਣੀ ਸੋਚ ਉੱਤੇ ਭਰੋਸਾ ਰੱਖੋ', 'ਗੱਲਬਾਤ ਦਾ ਰਿਕਾਰਡ ਰੱਖੋ', 'ਸਖ਼ਤ ਸੀਮਾਵਾਂ ਤੈਅ ਕਰੋ']),
  ur: createLocalizedRecord('ur', 'گیس لائٹنگ: حقیقت کو مسخ کرنے کی نفسیات', 'ایک ایسا نفسیاتی حربہ جس میں متاثرہ شخص کو اپنی ہی یادداشت اور عقل پر شک ہونے لگتا ہے۔', ['اپنی عقل پر بھروسہ رکھیں', 'تحریری ثبوت محفوظ رکھیں', 'ذاتی حدود قائم کریں']),
  or: createLocalizedRecord('or', 'ଗ୍ୟାସ୍‌ଲାଇଟିଂ: ବାସ୍ତବତାକୁ ବିକୃତ କରିବାର ମାନସିକତା', 'ଅନ୍ୟ ଜଣଙ୍କର ସ୍ମୃତି ଓ ବିବେକ ଉପରେ ସନ୍ଦେହ ସୃଷ୍ଟି କରୁଥିବା ବିଷାକ୍ତ କୌଶଳ।', ['ନିଜ ଉପରେ ବିଶ୍ୱାସ ରଖନ୍ତୁ', 'ଲିଖିତ ପ୍ରମାଣ ରଖନ୍ତୁ', 'ସୁରକ୍ଷିତ ସୀମା ନିର୍ଦ୍ଧାରଣ କରନ୍ତୁ']),
  as: createLocalizedRecord('as', 'গেছলাইটিং: মানসিক বিভ্ৰম সৃষ্টিৰ অপকৌশল', 'আন এজন ব্যক্তিক নিজৰ স্মৃতি আৰু ভাবমূর্তিক সন্দেহ কৰিবলৈ বাধ্য কৰোৱা মানসিক প্ৰৱঞ্চনা।', ['নিজৰ ওপৰত বিশ্বাস ৰাখক', 'প্ৰমাণ সংৰক্ষণ কৰক', 'দৃঢ় সীমা নিৰ্ধাৰণ কৰক']),
};
`;

fs.writeFileSync(path.join(topicsDir, 'gaslightingAwareness.ts'), glFileContent, 'utf8');
console.log('✓ Created gaslightingAwareness.ts with full 14 languages');

// 3. Extract TOPIC_RETRIEVAL_PRACTICE
const rpEnStart = "export const TOPIC_RETRIEVAL_PRACTICE: Record<MindLanguageCode, MindTopicDetail> = {\n  en: {";
const rpHinglishMarker = "\n  hinglish: {";
const rpHiMarker = "\n  hi: {} as any,";

const rpEnBlock = mcContent.slice(
  mcContent.indexOf(rpEnStart) + rpEnStart.length - 1,
  mcContent.indexOf(rpHinglishMarker)
);

const rpHinglishBlock = mcContent.slice(
  mcContent.indexOf(rpHinglishMarker) + rpHinglishMarker.length - 1,
  mcContent.indexOf(rpHiMarker)
);

const rpFileContent = `import { MindTopicDetail, MindLanguageCode } from '../types';

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_RETRIEVAL_PRACTICE_EN,
    title,
    subtitle: summary.slice(0, 80) + '...',
    oneLineExplanation: summary.slice(0, 60),
    summary30s: summary,
    coreConcept: summary,
    quickTakeaways: takeaways,
    seoTitle: \`\${title} | Mentalab Mind\`,
    seoDescription: \`\${summary.slice(0, 150)}...\`,
  };
}

export const TOPIC_RETRIEVAL_PRACTICE_EN: MindTopicDetail = ${rpEnBlock};

export const TOPIC_RETRIEVAL_PRACTICE_HINGLISH: MindTopicDetail = {
  ...${rpHinglishBlock},
  title: 'Retrieval Practice: Padhne Se Zyada Yaad Karne Ka Khel',
};

export const TOPIC_RETRIEVAL_PRACTICE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_RETRIEVAL_PRACTICE_EN,
  hinglish: TOPIC_RETRIEVAL_PRACTICE_HINGLISH,
  hi: createLocalizedRecord('hi', 'सक्रिय स्मरण (Retrieval Practice): वैज्ञानिक अध्ययन पद्धति', 'बार-बार पढ़ने के बजाय सक्रिय रूप से स्मृति से ज्ञान को याद करने की शक्तिशाली संज्ञानात्मक तकनीक।', ['किताब बंद करके याद करने का प्रयास करें', 'फ्लैशकार्ड्स का उपयोग करें', 'नियमित स्व-मूल्यांकन करें']),
  gu: createLocalizedRecord('gu', 'રિટ્રાઇવલ પ્રેક્ટિસ (સક્રિય સ્મરણ)', 'વારંવાર વાંચવા કરતાં યાદશક્તિમાંથી માહિતી બહાર કાઢવાની વૈજ્ઞાનિક રીત.', ['પુસ્તક બંધ કરી પુનરાવર્તન કરો', 'ફ્લેશકાર્ડ્સ વાપરો', 'નિયમિત ક્વિઝ આપો']),
  mr: createLocalizedRecord('mr', 'अ‍ॅक्टिव्ह रिकॉल आणि स्पेसिंग (स्मरण पद्धती)', 'वारंवार वाचनापेक्षा स्मरणशक्तीतून उत्तरे आठवण्याचा सराव मेंदूला अधिक तीक्ष्ण करतो.', ['पुस्तक बंद करून आठवण्याचा प्रयत्न करा', 'फ्लॅशकार्ड वापरा', 'नियमित सराव करा']),
  te: createLocalizedRecord('te', 'రిట్రీవల్ ప్రాక్టీస్ (చురుకైన జ్ఞాపకశక్తి పద్ధతి)', 'పుస్తకం పదే పదే చదవడం కంటే జ్ఞాపకం నుంచి విషయాన్ని గుర్తుకు తెచ్చుకునే ఉత్తమ అభ్యాసం.', ['పుస్తకం మూసి గుర్తుచేసుకోండి', 'ఫ్లాష్ కార్డ్స్ ఉపయోగించండి', 'క్రమం తప్పకుండా పరీక్షలు రాయండి']),
  ta: createLocalizedRecord('ta', 'மீட்டெடுப்பு பயிற்சி (Retrieval Practice)', 'மீண்டும் மீண்டும் வாசிப்பதை விட நினைவிலிருந்து தகவலை மீட்டெடுக்கும் விஞ்ஞான முறை.', ['புத்தகத்தை மூடிவிட்டு நினைவு கூறுங்கள்', 'ஃபிளாஷ்கார்டுகளைப் பயன்படுத்துங்கள்', 'சுய தேர்வு எழுதுங்கள்']),
  kn: createLocalizedRecord('kn', 'ನೆನಪಿಸಿಕೊಳ್ಳುವ ಅಭ್ಯಾಸ (Retrieval Practice)', 'ಪುನರಾವರ್ತಿತ ಓದಿಗಿಂತ ನೆನಪಿನಿಂದ ಮಾಹಿತಿಯನ್ನು ಹೊರತೆಗೆಯುವ ವೈಜ್ಞಾನಿಕ ಕಲಿಕಾ ವಿಧಾನ.', ['ಪುಸ್ತಕ ಮುಚ್ಚಿ ನೆನಪಿಸಿಕೊಳ್ಳಿ', 'ಫ್ಲ್ಯಾಶ್ ಕಾರ್ಡ್ ಬಳಸಿ', 'ಆಗಾಗ ಪರೀಕ್ಷೆ ಬರೆಯಿರಿ']),
  ml: createLocalizedRecord('ml', 'റിട്രീവൽ പ്രാക്ടീസ് (സജീവ ഓർമ്മപ്പെടുത്തൽ)', 'പഠിച്ച കാര്യങ്ങൾ ഓർത്തെടുക്കാൻ ശ്രമിക്കുന്നത് വഴി തലച്ചോറിൻ്റെ ശേഷി വർദ്ധിപ്പിക്കുന്ന രീതി.', ['പുസ്തകം അടച്ചുവെച്ച് ഓർക്കുക', 'ഫ്ലാഷ് കാർഡുകൾ ഉപയോഗിക്കുക', 'പതിവായി പരീക്ഷകൾ എഴുതുക']),
  bn: createLocalizedRecord('bn', 'রিট্রিভাল প্র্যাকটিস (সক্রিয় স্মৃতিচর্চা)', 'বারবার না পড়ে স্মৃতি থেকে তথ্য মনে করার বৈজ্ঞানিক ও কার্যকর পদ্ধতি।', ['বই বন্ধ করে মনে করার চেষ্টা করুন', 'ফ্ল্যাশ কার্ড ব্যবহার করুন', 'নিয়মিত স্ব-मूल্যায়ন করুন']),
  pa: createLocalizedRecord('pa', 'ਸਰਗਰਮ ਯਾਦ ਅਭਿਆਸ (Retrieval Practice)', 'ਵਾਰ-ਵਾਰ ਪੜ੍ਹਨ ਨਾਲੋਂ ਦਿਮਾਗ ਵਿੱਚੋਂ ਜਾਣਕਾਰੀ ਨੂੰ ਯਾਦ ਕਰਨ ਦਾ ਵਿਗਿਆਨਕ ਢੰਗ।', ['ਕਿਤਾਬ ਬੰਦ ਕਰਕੇ ਯਾਦ ਕਰੋ', 'ਫਲੈਸ਼ ਕਾਰਡ ਵਰਤੋ', 'ਆਪਣਾ ਟੈਸਟ ਖੁਦ ਲਓ']),
  ur: createLocalizedRecord('ur', 'فعال بازیافت (Retrieval Practice)', 'بار بار پڑھنے کے بجائے ذہن پر زور دے کر معلومات یاد کرنے کا مؤثر طریقہ۔', ['کتاب بند کر کے دہرائیں', 'فلیش کارڈز کا استعمال کریں', 'باقاعدگی سے ٹیسٹ دیں']),
  or: createLocalizedRecord('or', 'ସକ୍ରିୟ ସ୍ମରଣ ଅଭ୍ୟାସ (Retrieval Practice)', 'ବାରମ୍ବାର ପଢ଼ିବା ଅପେକ୍ଷା ମନେ ପକାଇବାର ଚେଷ୍ଟା ଦ୍ୱାରା ସ୍ମୃତିଶକ୍ତି ବୃଦ୍ଧି କରିବାର ଉପାୟ।', ['ବହି ବନ୍ଦ କରି ମନେ ପକାନ୍ତୁ', 'ଫ୍ଲାସ୍ କାର୍ଡ ବ୍ୟବହାର କରନ୍ତୁ', 'ନିୟମିତ ନିଜର ପରୀକ୍ଷା ନିଅନ୍ତୁ']),
  as: createLocalizedRecord('as', 'সক্ৰিয় সোঁৱৰণ অভ্যাস (Retrieval Practice)', 'বাৰে বাৰে পঢ়াতকৈ মগজুৰ পৰা তথ্য মনত পেলাই শক্তিশালী স্মৃতিশক্তি গঢ়াৰ কৌশল।', ['কিতাপ বন্ধ কৰি মনত পেলাওক', 'ফ্লেছ কাৰ্ড ব্যৱহাৰ কৰক', 'নিয়মীয়াকৈ পৰীক্ষা দিয়ক']),
};
`;

fs.writeFileSync(path.join(topicsDir, 'retrievalPractice.ts'), rpFileContent, 'utf8');
console.log('✓ Created retrievalPractice.ts with full 14 languages');

// 4. Update mindCurriculum.ts:
// Replace the inline declarations of TOPIC_CONFIRMATION_BIAS, TOPIC_GASLIGHTING_AWARENESS, TOPIC_RETRIEVAL_PRACTICE
// with clean imports!
const cbFullBlock = mcContent.slice(
  mcContent.indexOf(cbEnStart),
  mcContent.indexOf("};\n\n// ============================================================================\n// TOPIC 2: GASLIGHTING") + 3
);

const glFullBlock = mcContent.slice(
  mcContent.indexOf(glEnStart),
  mcContent.indexOf("};\n\n// ============================================================================\n// TOPIC 3: RETRIEVAL PRACTICE") + 3
);

const rpFullBlock = mcContent.slice(
  mcContent.indexOf(rpEnStart),
  mcContent.indexOf("};\n\nimport { TOPIC_SOCIAL_PROOF }") + 3
);

let newMcContent = mcContent;
newMcContent = newMcContent.replace(cbFullBlock, '');
newMcContent = newMcContent.replace(glFullBlock, '');
newMcContent = newMcContent.replace(rpFullBlock, '');

// Add imports
const importsToAdd = `
import { TOPIC_CONFIRMATION_BIAS } from './topics/confirmationBias';
import { TOPIC_GASLIGHTING_AWARENESS } from './topics/gaslightingAwareness';
import { TOPIC_RETRIEVAL_PRACTICE } from './topics/retrievalPractice';
`;

newMcContent = newMcContent.replace("import { TOPIC_SOCIAL_PROOF } from './topics/socialProof';", `${importsToAdd}import { TOPIC_SOCIAL_PROOF } from './topics/socialProof';`);

fs.writeFileSync(mcPath, newMcContent, 'utf8');
console.log('✓ Updated mindCurriculum.ts with clean modular imports!');
