import * as fs from 'fs';
import * as path from 'path';

const origContent = fs.readFileSync(path.join(__dirname, 'origGaslighting.txt'), 'utf8');

// Parse en block and hinglish block
const enStart = "  en: {";
const hinglishMarker = "  hinglish: {";

const enBlock = origContent.slice(
  origContent.indexOf(enStart) + enStart.length - 1,
  origContent.indexOf(hinglishMarker)
).trim().replace(/,$/, '');

const hinglishBlock = origContent.slice(
  origContent.indexOf(hinglishMarker) + hinglishMarker.length - 1
).trim().replace(/,$/, '');

const fileContent = `import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_GASLIGHTING_AWARENESS_EN: MindTopicDetail = ${enBlock};

export const TOPIC_GASLIGHTING_AWARENESS_HINGLISH: MindTopicDetail = ${hinglishBlock};

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
    limitationsAndControversies: TOPIC_GASLIGHTING_AWARENESS_EN.limitationsAndControversies,
    seoTitle: \`\${title} | Mentalab Mind\`,
    seoDescription: \`\${summary.slice(0, 150)}...\`,
  };
}

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

fs.writeFileSync(path.join(__dirname, '../src/core/mind/topics/gaslightingAwareness.ts'), fileContent, 'utf8');
console.log('✓ Successfully regenerated gaslightingAwareness.ts');
