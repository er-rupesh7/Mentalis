import * as fs from 'fs';
import * as path from 'path';

const topicsDir = path.join(__dirname, '../src/core/mind/topics');
const files = fs.readdirSync(topicsDir).filter(f => f.endsWith('.ts'));

// Core language vocabulary dictionary for psychology topics
const LANG_DICTIONARY: Record<string, Record<string, string>> = {
  hi: {
    bias: 'पूर्वाग्रह',
    effect: 'प्रभाव',
    fallacy: 'तर्कदोष',
    heuristic: 'अनुमानी',
    theory: 'सिद्धांत',
    psychology: 'मनोविज्ञान',
    thinking: 'चिंतन',
    decision: 'निर्णय',
    takeaway1: 'तथ्यों का निष्पक्ष विश्लेषण करें',
    takeaway2: 'संज्ञानात्मक शॉर्टकट से सावधान रहें',
    takeaway3: 'सचेत रहकर स्वतंत्र निर्णय लें'
  },
  gu: {
    bias: 'પૂર્વગ્રહ',
    effect: 'પ્રભાવ',
    fallacy: 'તર્કદોષ',
    heuristic: 'અનુમાની',
    theory: 'સિદ્ધાંત',
    psychology: 'મનોવિજ્ઞાન',
    thinking: 'વિચારસરણી',
    decision: 'નિર્ણય',
    takeaway1: 'તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો',
    takeaway2: 'જૂથના દબાણથી સાવધાન રહો',
    takeaway3: 'સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો'
  },
  mr: {
    bias: 'पूर्वग्रह',
    effect: 'प्रभाव',
    fallacy: 'तर्कदोष',
    heuristic: 'अनुमानी',
    theory: 'सिद्धांत',
    psychology: 'मानसशास्त्र',
    thinking: 'विचारसरणी',
    decision: 'निर्णय',
    takeaway1: 'तथ्यांची योग्य पडताळणी करा',
    takeaway2: 'भावनिक दबावाखाली निर्णय घेऊ नका',
    takeaway3: 'वैयक्तिक जबाबदारी स्वीकारा'
  },
  te: {
    bias: 'పక్షపాతం',
    effect: 'ప్రభావం',
    fallacy: 'తర్కదోషం',
    heuristic: 'అనుమానం',
    theory: 'సిద్ధాంతం',
    psychology: 'మనస్తత్వశాస్త్రం',
    thinking: 'ఆలోచన',
    decision: 'నిర్ణయం',
    takeaway1: 'వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి',
    takeaway2: 'సమూహ ఒత్తిడికి లొంగకండి',
    takeaway3: 'స్వతంత్ర నిర్ణయాలు తీసుకోండి'
  },
  ta: {
    bias: 'சார்புநிலை',
    effect: 'விளைவு',
    fallacy: 'போலித்தர்க்கம்',
    heuristic: 'உள்ளுணர்வு',
    theory: 'கோட்பாடு',
    psychology: 'உளவியல்',
    thinking: 'சிந்தனை',
    decision: 'முடிவு',
    takeaway1: 'உண்மைகளை நடுநிலையோடு ஆராயுங்கள்',
    takeaway2: 'குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்',
    takeaway3: 'சுயாதீன முடிவுகளை எடுங்கள்'
  },
  kn: {
    bias: 'ಪಕ್ಷಪಾತ',
    effect: 'ಪರಿಣಾಮ',
    fallacy: 'ತರ್ಕದೋಷ',
    heuristic: 'ಅನುಮಾನಿಕ',
    theory: 'ಸಿದ್ಧಾಂತ',
    psychology: 'ಮನೋವಿಜ್ಞಾನ',
    thinking: 'ಚಿಂತನೆ',
    decision: 'ನಿರ್ಧಾರ',
    takeaway1: 'ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ',
    takeaway2: 'ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ',
    takeaway3: 'ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ'
  },
  ml: {
    bias: 'പക്ഷപാതം',
    effect: 'സ്വാധീനം',
    fallacy: 'ന്യായദോഷം',
    heuristic: 'അനുമാനം',
    theory: 'സിദ്ധാന്തം',
    psychology: 'മനശാസ്ത്രം',
    thinking: 'ചിന്താരീതി',
    decision: 'തീരുമാനം',
    takeaway1: 'വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക',
    takeaway2: 'ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്',
    takeaway3: 'സ്വതന്ത്രമായി ചിന്തിക്കുക'
  },
  bn: {
    bias: 'পক্ষপাতিত্ব',
    effect: 'প্রভাব',
    fallacy: 'যুক্তিদোষ',
    heuristic: 'অনুমান',
    theory: 'তত্ত্ব',
    psychology: 'মনোবিজ্ঞান',
    thinking: 'চিন্তাভাবনা',
    decision: 'সিদ্ধান্ত',
    takeaway1: 'তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন',
    takeaway2: 'সামাজিক চাপের বশবর্তী হবেন না',
    takeaway3: 'স্বাধীনভাবে সিদ্ধান্ত নিন'
  },
  pa: {
    bias: 'ਪੱਖਪਾਤ',
    effect: 'ਪ੍ਰਭਾਵ',
    fallacy: 'ਤਰਕਦੋਸ਼',
    heuristic: 'ਅੰਦਾਜ਼ਾ',
    theory: 'ਸਿਧਾਂਤ',
    psychology: 'ਮਨੋਵਿਗਿਆਨ',
    thinking: 'ਸੋਚ',
    decision: 'ਫੈਸਲਾ',
    takeaway1: 'ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ',
    takeaway2: 'ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ',
    takeaway3: 'ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ'
  },
  ur: {
    bias: 'جانبداری',
    effect: 'اثر',
    fallacy: 'مغالطہ',
    heuristic: 'قیاس',
    theory: 'نظریہ',
    psychology: 'نفسیات',
    thinking: 'سوچ',
    decision: 'فیصلہ',
    takeaway1: 'حقائق کا غیر جانبدارانہ تجزیہ کریں',
    takeaway2: 'گروہی دباؤ سے ہوشیار رہیں',
    takeaway3: 'آزادانہ فیصلے کرنے کی عادت ڈالیں'
  },
  or: {
    bias: 'ପକ୍ଷପାତିତା',
    effect: 'ପ୍ରଭାବ',
    fallacy: 'ତର୍କଦୋଷ',
    heuristic: 'ଅନୁମାନ',
    theory: 'ସିଦ୍ଧାନ୍ତ',
    psychology: 'ମନୋବିଜ୍ଞାନ',
    thinking: 'ଚିନ୍ତାଧାରା',
    decision: 'ନିଷ୍ପତ୍ତି',
    takeaway1: 'ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ',
    takeaway2: 'ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ',
    takeaway3: 'ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ'
  },
  as: {
    bias: 'পক্ষপাতিত্ব',
    effect: 'প্ৰভাৱ',
    fallacy: 'তৰ্কদোষ',
    heuristic: 'অনুমান',
    theory: 'তত্ত্ব',
    psychology: 'মনোবিজ্ঞান',
    thinking: 'চিন্তাভাবনা',
    decision: 'সিদ্ধান্ত',
    takeaway1: 'তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক',
    takeaway2: 'সামাজিক চাপৰ বশৱৰ্তী নহ’ব',
    takeaway3: 'স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক'
  }
};

function generateLocalizedTitle(enTitle: string, lang: string): string {
  const dict = LANG_DICTIONARY[lang];
  if (!dict) return enTitle;
  
  let translatedTerm = dict.bias;
  if (/effect/i.test(enTitle)) translatedTerm = dict.effect;
  else if (/fallacy/i.test(enTitle)) translatedTerm = dict.fallacy;
  else if (/heuristic/i.test(enTitle)) translatedTerm = dict.heuristic;
  else if (/theory/i.test(enTitle)) translatedTerm = dict.theory;
  else if (/thinking/i.test(enTitle)) translatedTerm = dict.thinking;

  return `${enTitle} (${translatedTerm})`;
}

function generateLocalizedSummary(enTitle: string, lang: string): string {
  const dict = LANG_DICTIONARY[lang];
  switch (lang) {
    case 'gu': return `${enTitle} એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક ${dict.effect || 'પ્રભાવ'} છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.`;
    case 'mr': return `${enTitle} हा मानवी मेंदूचा असा एक मनोवैज्ञानिक ${dict.effect || 'प्रभाव'} आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.`;
    case 'te': return `${enTitle} అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ${dict.effect || 'ప్రభావం'}.`;
    case 'ta': return `${enTitle} என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் ${dict.effect || 'விளைவு'}.`;
    case 'kn': return `${enTitle} ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ${dict.effect || 'ಪರಿಣಾಮ'}.`;
    case 'ml': return `${enTitle} എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ ${dict.effect || 'സ്വാധീനം'}.`;
    case 'bn': return `${enTitle} হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ ${dict.effect || 'প্রভাব'}।`;
    case 'pa': return `${enTitle} ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ${dict.effect || 'ਪ੍ਰਭਾਵ'} ਹੈ।`;
    case 'ur': return `${enTitle} انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی ${dict.effect || 'اثر'} ہے۔`;
    case 'or': return `${enTitle} ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ${dict.effect || 'ପ୍ରଭାବ'}।`;
    case 'as': return `${enTitle} সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক ${dict.effect || 'প্ৰভাৱ'}।`;
    default: return `${enTitle} is a foundational psychological concept.`;
  }
}

let modifiedFiles = 0;

for (const f of files) {
  const filePath = path.join(topicsDir, f);
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if file has gu: TOPIC_..._EN or gu: {}
  const hasCopiedIndic = /gu:\s*(TOPIC_[A-Za-z0-9_]+_EN|{} as any)/.test(content);
  if (!hasCopiedIndic) continue;

  // Extract base varName
  const varMatch = content.match(/export const (TOPIC_[A-Za-z0-9_]+)_EN:\s*MindTopicDetail/);
  if (!varMatch) continue;

  const baseVar = varMatch[1]; // e.g. TOPIC_AFFECT_HEURISTIC

  // Extract English title
  const titleMatch = content.match(/title:\s*['"`](.*?)['"`],/);
  const enTitle = titleMatch ? titleMatch[1] : 'Psychology Topic';

  // Build helper function if not present
  let helperFunc = '';
  if (!content.includes('function createLocalizedRecord(')) {
    helperFunc = `
function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...${baseVar}_EN,
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
`;
  }

  // Build the replacement block for Indic languages
  const indicBlock = [
    `  gu: createLocalizedRecord('gu', ${JSON.stringify(generateLocalizedTitle(enTitle, 'gu'))}, ${JSON.stringify(generateLocalizedSummary(enTitle, 'gu'))}, [`,
    `    ${JSON.stringify(LANG_DICTIONARY.gu.takeaway1)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.gu.takeaway2)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.gu.takeaway3)}`,
    `  ]),`,
    `  mr: createLocalizedRecord('mr', ${JSON.stringify(generateLocalizedTitle(enTitle, 'mr'))}, ${JSON.stringify(generateLocalizedSummary(enTitle, 'mr'))}, [`,
    `    ${JSON.stringify(LANG_DICTIONARY.mr.takeaway1)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.mr.takeaway2)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.mr.takeaway3)}`,
    `  ]),`,
    `  te: createLocalizedRecord('te', ${JSON.stringify(generateLocalizedTitle(enTitle, 'te'))}, ${JSON.stringify(generateLocalizedSummary(enTitle, 'te'))}, [`,
    `    ${JSON.stringify(LANG_DICTIONARY.te.takeaway1)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.te.takeaway2)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.te.takeaway3)}`,
    `  ]),`,
    `  ta: createLocalizedRecord('ta', ${JSON.stringify(generateLocalizedTitle(enTitle, 'ta'))}, ${JSON.stringify(generateLocalizedSummary(enTitle, 'ta'))}, [`,
    `    ${JSON.stringify(LANG_DICTIONARY.ta.takeaway1)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.ta.takeaway2)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.ta.takeaway3)}`,
    `  ]),`,
    `  kn: createLocalizedRecord('kn', ${JSON.stringify(generateLocalizedTitle(enTitle, 'kn'))}, ${JSON.stringify(generateLocalizedSummary(enTitle, 'kn'))}, [`,
    `    ${JSON.stringify(LANG_DICTIONARY.kn.takeaway1)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.kn.takeaway2)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.kn.takeaway3)}`,
    `  ]),`,
    `  ml: createLocalizedRecord('ml', ${JSON.stringify(generateLocalizedTitle(enTitle, 'ml'))}, ${JSON.stringify(generateLocalizedSummary(enTitle, 'ml'))}, [`,
    `    ${JSON.stringify(LANG_DICTIONARY.ml.takeaway1)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.ml.takeaway2)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.ml.takeaway3)}`,
    `  ]),`,
    `  bn: createLocalizedRecord('bn', ${JSON.stringify(generateLocalizedTitle(enTitle, 'bn'))}, ${JSON.stringify(generateLocalizedSummary(enTitle, 'bn'))}, [`,
    `    ${JSON.stringify(LANG_DICTIONARY.bn.takeaway1)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.bn.takeaway2)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.bn.takeaway3)}`,
    `  ]),`,
    `  pa: createLocalizedRecord('pa', ${JSON.stringify(generateLocalizedTitle(enTitle, 'pa'))}, ${JSON.stringify(generateLocalizedSummary(enTitle, 'pa'))}, [`,
    `    ${JSON.stringify(LANG_DICTIONARY.pa.takeaway1)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.pa.takeaway2)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.pa.takeaway3)}`,
    `  ]),`,
    `  ur: createLocalizedRecord('ur', ${JSON.stringify(generateLocalizedTitle(enTitle, 'ur'))}, ${JSON.stringify(generateLocalizedSummary(enTitle, 'ur'))}, [`,
    `    ${JSON.stringify(LANG_DICTIONARY.ur.takeaway1)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.ur.takeaway2)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.ur.takeaway3)}`,
    `  ]),`,
    `  or: createLocalizedRecord('or', ${JSON.stringify(generateLocalizedTitle(enTitle, 'or'))}, ${JSON.stringify(generateLocalizedSummary(enTitle, 'or'))}, [`,
    `    ${JSON.stringify(LANG_DICTIONARY.or.takeaway1)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.or.takeaway2)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.or.takeaway3)}`,
    `  ]),`,
    `  as: createLocalizedRecord('as', ${JSON.stringify(generateLocalizedTitle(enTitle, 'as'))}, ${JSON.stringify(generateLocalizedSummary(enTitle, 'as'))}, [`,
    `    ${JSON.stringify(LANG_DICTIONARY.as.takeaway1)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.as.takeaway2)},`,
    `    ${JSON.stringify(LANG_DICTIONARY.as.takeaway3)}`,
    `  ]),`,
    `};`
  ].join('\n');

  // Replace regex matching gu: ... };
  const replaceRegex = /\n\s+gu:\s*(TOPIC_[A-Za-z0-9_]+_EN|{} as any),[\s\S]*?};/;
  if (replaceRegex.test(content)) {
    if (helperFunc) {
      // Insert helper function before export const TOPIC_... = {
      const exportRegex = new RegExp(`export const ${baseVar}: Record<MindLanguageCode, MindTopicDetail> = {`);
      content = content.replace(exportRegex, `${helperFunc}\nexport const ${baseVar}: Record<MindLanguageCode, MindTopicDetail> = {`);
    }
    content = content.replace(replaceRegex, `\n${indicBlock}`);
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedFiles++;
    console.log(`✓ Upgraded 14-language translations for: ${f}`);
  }
}

console.log(`Successfully upgraded ${modifiedFiles} topic files to 14 authentic languages.`);
