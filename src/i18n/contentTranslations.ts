import { SupportedLocale } from './config';
import { TableTrainingMode, ExamSubSkill } from '../core/types';

// ============================================================================
// 1. BOOTCAMP MODES LOCALIZATION
// ============================================================================
export interface LocalizedBootcampMode {
  name: string;
  tag: string;
  description: string;
  hint: string;
}

const BOOTCAMP_MODE_TRANSLATIONS: Partial<
  Record<TableTrainingMode, Partial<Record<SupportedLocale, LocalizedBootcampMode>>>
> = {
  recognition: {
    en: {
      name: 'Mode A: Recognition',
      tag: 'Multiple Choice (4 Options)',
      description: 'Rapid reflex identification with near-miss smart distractors.',
      hint: 'Sub-1.8s reflex choice. Use keys 1, 2, 3, or 4 for lightning answers.',
    },
    hi: {
      name: 'मोड A: पहचान (Recognition)',
      tag: 'बहुविकल्पीय (4 विकल्प)',
      description: 'सटीक भ्रमित करने वाले विकल्पों के साथ त्वरित पहचान रिफ्लेक्स।',
      hint: '1.8 सेकंड से कम में उत्तर दें। 1, 2, 3 या 4 कुंजियों का उपयोग करें।',
    },
    gu: {
      name: 'મોડ A: ઓળખ (Recognition)',
      tag: 'બહુવિકલ્પી (4 વિકલ્પો)',
      description: 'ઝડપી રિફ્લેક્સ ઓળખ અને સ્માર્ટ વિકલ્પો.',
      hint: '1.8 સેકન્ડથી ઓછા સમયમાં જવાબ આપો. કી 1, 2, 3 કે 4 દબાવો.',
    },
    mr: {
      name: 'मोड A: ओळख (Recognition)',
      tag: 'पर्यायी निवड (4 पर्याय)',
      description: 'स्मार्ट पर्यायांसह जलद ओळख रिफ्लेक्स.',
      hint: '1.8 सेकंदाच्या आत उत्तर द्या. 1, 2, 3 किंवा 4 बटणे वापरा.',
    },
    te: {
      name: 'మోడ్ A: గుర్తింపు (Recognition)',
      tag: 'బహుళ ఎంపిక (4 ఎంపికలు)',
      description: 'స్మార్ట్ ఎంపికలతో శీఘ్ర రిఫ్లెక్స్ గుర్తింపు.',
      hint: '1.8 సెకన్లలోపు సమాధానం ఇవ్వండి. 1, 2, 3 లేదా 4 నొక్కండి.',
    },
    ta: {
      name: 'முறை A: அடையாளம் காணுதல்',
      tag: 'பல தேர்வு (4 தேர்வுகள்)',
      description: 'விரைவான அனிச்சை அடையாளம் காணல்.',
      hint: '1.8 வினாடிக்குள் விடையளிக்கவும். 1, 2, 3 அல்லது 4 விசைகளைப் பயன்படுத்தவும்.',
    },
  },
  recall: {
    en: {
      name: 'Mode B: Recall',
      tag: 'Direct Numeric Entry',
      description: 'Instant typed answer without multiple choice scaffolding.',
      hint: 'Sub-2.5s retrieval target. The core foundation of banking calculation speed.',
    },
    hi: {
      name: 'मोड B: स्मरण (Recall)',
      tag: 'प्रत्यक्ष संख्यात्मक प्रविष्टि',
      description: 'बिना किसी विकल्प के तुरंत टाइप करके उत्तर दें।',
      hint: '2.5 सेकंड से कम का पुनर्प्राप्ति लक्ष्य। बैंकिंग गणना का मूल आधार।',
    },
    gu: {
      name: 'મોડ B: સ્મરણ (Recall)',
      tag: 'સીધો આંકડાકીય પ્રવેશ',
      description: 'કોઈપણ વિકલ્પ વિના સીધો જવાબ ટાઇપ કરો.',
      hint: '2.5 સેકન્ડથી ઓછો સમય લક્ષ્યાંક. બેન્કિંગ ગણતરીનો મુખ્ય પાયો.',
    },
    mr: {
      name: 'मोड B: आठवणे (Recall)',
      tag: 'थेट संख्यात्मक नोंदणी',
      description: 'कोणत्याही पर्यायाशिवाय थेट टाइप करून उत्तर द्या.',
      hint: '2.5 सेकंदाच्या आत उत्तर द्या. स्पर्धा परीक्षांचे मूळ सामर्थ्य.',
    },
    te: {
      name: 'మోడ్ B: రీకాల్ (Recall)',
      tag: 'ప్రత్యక్ష సంఖ్యా నమోదు',
      description: 'ఎలాంటి ఆప్షన్స్ లేకుండా నేరుగా టైప్ చేయండి.',
      hint: '2.5 సెకన్లలోపు రిట్రీవల్ లక్ష్యం. వేగవంతమైన లెక్కింపు పునాది.',
    },
    ta: {
      name: 'முறை B: நினைவுகூர்தல்',
      tag: 'நேரடி எண் பதிவு',
      description: 'விருப்பங்கள் இல்லாமல் உடனடியாக தட்டச்சு செய்து பதிலளிக்கவும்.',
      hint: '2.5 வினாடிக்குள் இலக்கு. வங்கித் தேர்வு வேகத்தின் முக்கிய அடிப்படை.',
    },
  },
  reverse: {
    en: {
      name: 'Mode C: Reverse',
      tag: 'Inverse Factorization',
      description: 'Given product, identify the multiplier factor (e.g. 91 = 13 × ?).',
      hint: 'Essential for rapid division cancelling in Simplification and DI.',
    },
    hi: {
      name: 'मोड C: विपरीत (Reverse)',
      tag: 'व्युत्क्रम गुणनखंड',
      description: 'गुणनफल से गुणक की पहचान करें (उदा. 91 = 13 × ?)।',
      hint: 'सरलीकरण और डेटा इंटरप्रिटेशन में तेजी से भाग देने हेतु अनिवार्य।',
    },
    gu: {
      name: 'મોડ C: ઉલટું (Reverse)',
      tag: 'વ્યસ્ત અવયવીકરણ',
      description: 'ગુણાકાર પરિણામ પરથી ગુણક શોધો (દા.ત. 91 = 13 × ?).',
      hint: 'ઝડપી ભાગાકાર અને ડીઆઈ ગણતરી માટે અત્યંત ઉપયોગી.',
    },
    mr: {
      name: 'मोड C: उलटे (Reverse)',
      tag: 'व्यस्त अवयव पद्धत',
      description: 'गुणाकारावरून गुणक ओळखा (उदा. 91 = 13 × ?).',
      hint: 'भागाकार व सरलीकरणामध्ये त्वरित निष्कर्षासाठी अत्यंत आवश्यक.',
    },
    te: {
      name: 'మోడ్ C: రివర్స్ (Reverse)',
      tag: 'విలోమ కారకాలు',
      description: 'లబ్ధం ఇచ్చినప్పుడు గుణకాన్ని గుర్తించండి (ఉదా. 91 = 13 × ?).',
      hint: 'వేగవంతమైన భాగహారాల కోసం అత్యంత అవసరం.',
    },
    ta: {
      name: 'முறை C: தலைகீழ்',
      tag: 'காரணி கண்டறிதல்',
      description: 'பெருக்குத்தொகையிலிருந்து காரணியைக் கண்டறியவும் (எ.கா. 91 = 13 × ?).',
      hint: 'விரைவான வகுத்தல் மற்றும் சுருக்குதலுக்கு இன்றியமையாதது.',
    },
  },
  missing_fact: {
    en: {
      name: 'Mode D: Missing Fact',
      tag: 'Equation Filling',
      description: 'Targeted missing factor: ? × 7 = 91 or 13 × ? = 91.',
      hint: 'Builds algebraic flexibility and prevents one-way rote dependency.',
    },
    hi: {
      name: 'मोड D: लुप्त तथ्य (Missing Fact)',
      tag: 'समीकरण पूर्ति',
      description: 'लुप्त गुणनखंड खोजें: ? × 7 = 91 या 13 × ? = 91.',
      hint: 'बीजगणितीय लचीलापन बढ़ाता है और रटने की निर्भरता समाप्त करता है।',
    },
    gu: {
      name: 'મોડ D: ખૂટતો અંક (Missing Fact)',
      tag: 'સમીકરણ પૂર્તિ',
      description: 'ખૂટતો અવયવ શોધો: ? × 7 = 91 અથવા 13 × ? = 91.',
      hint: 'ગાણિતિક અનુકૂલનક્ષમતા વધારે છે અને ગોખવાની ટેવ દૂર કરે છે.',
    },
    mr: {
      name: 'मोड D: गहाळ घटक (Missing Fact)',
      tag: 'समीकरण पूर्तता',
      description: 'गहाळ घटक शोधा: ? × 7 = 91 किंवा 13 × ? = 91.',
      hint: 'बीजगणितीय विचारक्षमता वाढवते आणि पाठांतराची गरज संपवते.',
    },
    te: {
      name: 'మోడ్ D: తప్పిపోయిన అంశం (Missing Fact)',
      tag: 'సమీకరణ పూర్తి',
      description: 'తప్పిపోయిన కారకాన్ని కనుగొనండి: ? × 7 = 91 లేదా 13 × ? = 91.',
      hint: 'బీజగణిత సౌలభ్యాన్ని పెంపొందిస్తుంది.',
    },
    ta: {
      name: 'முறை D: விடுபட்ட காரணி',
      tag: 'சமன்பாடு நிரப்புதல்',
      description: 'விடுபட்ட எண்ணைக் கண்டறியவும்: ? × 7 = 91 அல்லது 13 × ? = 91.',
      hint: 'மனக்கணக்கு நெகிழ்வுத்தன்மையை உருவாக்குகிறது.',
    },
  },
  related_fact: {
    en: {
      name: 'Mode E: Related Fact',
      tag: 'Landmark Anchoring',
      description: 'Bridge from landmarks: Since 13 × 5 = 65, compute 13 × 6 (+13).',
      hint: 'Landmark anchors (×5, ×10) eliminate mental freezing during exam pressure.',
    },
    hi: {
      name: 'मोड E: संबंधित तथ्य (Related Fact)',
      tag: 'मील का पत्थर एंकरिंग (Landmark)',
      description: 'मुख्य पड़ाव से हल करें: चूंकि 13 × 5 = 65, तो 13 × 6 = 65 + 13।',
      hint: 'पड़ाव (×5, ×10) परीक्षा के दबाव में मानसिक अवरोध को समाप्त करते हैं।',
    },
    gu: {
      name: 'મોડ E: સંબંધિત તથ્ય (Related Fact)',
      tag: 'લેન્ડમાર્ક એન્કરિંગ',
      description: 'મુખ્ય પડાવથી ગણો: 13 × 5 = 65 છે, તેથી 13 × 6 = 65 + 13.',
      hint: 'પડાવ એન્કર (×5, ×10) પરીક્ષાના દબાણમાં મગજને ફ્રીઝ થવા દેતા નથી.',
    },
    mr: {
      name: 'मोड E: संबंधित तथ्य (Related Fact)',
      tag: 'लँडमार्क अँकरिंग',
      description: 'महत्त्वाच्या टप्प्यावरून गणना करा: 13 × 5 = 65, म्हणून 13 × 6 (+13).',
      hint: 'टप्पे (×5, ×10) परीक्षेच्या दबावात गणना सुलभ करतात.',
    },
    te: {
      name: 'మోడ్ E: సంబంధిత వాస్తవం',
      tag: 'ల్యాండ్‌మార్క్ యాంకరింగ్',
      description: 'ముఖ్య మైలురాయి నుండి లెక్కించండి: 13 × 5 = 65 అయితే 13 × 6 (+13).',
      hint: 'పరీక్ష ఒత్తిడిలో ల్యాండ్‌మార్క్ యాంకర్లు మనసుకు భరోసా ఇస్తాయి.',
    },
    ta: {
      name: 'முறை E: தொடர்புடைய உண்மை',
      tag: 'அடிப்படைப் புள்ளி இணைப்பு',
      description: 'அடிப்படை புள்ளியிலிருந்து கணக்கிடுங்கள்: 13 × 5 = 65 எனில், 13 × 6 (+13).',
      hint: 'தேர்வு அழுத்தத்தில் தயக்கத்தைத் தவிர்க்கிறது.',
    },
  },
  neighbour_fact: {
    en: {
      name: 'Mode F: Neighbour Fact',
      tag: 'Adjacent Table Stepping',
      description: 'Bridge from known table: Since 12 × 7 = 84, compute 13 × 7 (+7).',
      hint: 'Leverages tables you already know (Table 10, 12, 20) to reach teen tables.',
    },
    hi: {
      name: 'मोड F: पड़ोसी तथ्य (Neighbour Fact)',
      tag: 'समीपवर्ती पहाड़ा कदम',
      description: 'ज्ञात पहाड़े से हल करें: चूंकि 12 × 7 = 84, तो 13 × 7 = 84 + 7।',
      hint: 'ज्ञात पहाड़ों (10, 12, 20) का सहारा लेकर कठिन 11-20 पहाड़ों में महारत पाएं।',
    },
    gu: {
      name: 'મોડ F: પડોશી તથ્ય (Neighbour Fact)',
      tag: 'નજીકના ઘડિયાનો સહારો',
      description: 'જાણીતા ઘડિયા પરથી ગણો: 12 × 7 = 84, તેથી 13 × 7 (+7).',
      hint: 'જાણીતા ઘડિયા (10, 12, 20) નો ઉપયોગ કરીને 11-20 ઘડિયા સરળ બનાવો.',
    },
    mr: {
      name: 'मोड F: शेजारील तथ्य (Neighbour Fact)',
      tag: 'जवळच्या पाढ्याचा आधार',
      description: 'माहिती असलेल्या पाढ्यावरून गणना: 12 × 7 = 84, म्हणून 13 × 7 (+7).',
      hint: 'माहिती असलेल्या पाढ्यांचा (10, 12, 20) वापर करून 13-19 पाढे सहज साधा.',
    },
    te: {
      name: 'మోడ్ F: సమీప వాస్తవం',
      tag: 'సమీప ఎక్కాల సహాయం',
      description: 'తెలిసిన ఎక్కం నుండి లెక్కించండి: 12 × 7 = 84 అయితే 13 × 7 (+7).',
      hint: 'తెలిసిన ఎక్కాల ఆధారంగా కష్టమైన ఎక్కాలను సులభంగా సాధించండి.',
    },
    ta: {
      name: 'முறை F: பக்கத்து உண்மை',
      tag: 'அடுத்த வாய்ப்பாட்டு படிநிலை',
      description: 'தெரிந்த வாய்ப்பாட்டிலிருந்து கணக்கிடுங்கள்: 12 × 7 = 84 எனில் 13 × 7 (+7).',
      hint: 'தெரிந்த வாய்ப்பாடுகளைப் பயன்படுத்தி புதிய வாய்ப்பாடுகளை எளிதாக்குங்கள்.',
    },
  },
  decomposition: {
    en: {
      name: 'Mode G: Decomposition',
      tag: 'Tens & Units Split',
      description: 'Break into tens and units: 14 × 7 = (10 × 7) + (4 × 7) = 70 + 28 = 98.',
      hint: 'Use mental addition left-to-right.',
    },
    hi: {
      name: 'मोड G: अपघटन (Decomposition)',
      tag: 'दहाई और इकाई विभाजन',
      description: 'दहाई और इकाई में तोड़ें: 14 × 7 = (10 × 7) + (4 × 7) = 70 + 28 = 98।',
      hint: 'बाएं-से-दाएं मानसिक जोड़ का उपयोग करें।',
    },
  },
  bidirectional: {
    en: {
      name: 'Mode H: Bidirectional Family',
      tag: '4-Way Fact Interlock',
      description: 'Master all four fact angles: 13 × 7 = 91, 7 × 13 = 91, 91 ÷ 13 = 7, 91 ÷ 7 = 13.',
      hint: 'Multiplication and division are two sides of the same mental memory.',
    },
    hi: {
      name: 'मोड H: द्विदिशी परिवार (Bidirectional)',
      tag: '4-दिशा तथ्य संबंध',
      description: 'सभी चार कोणों में महारत: 13 × 7 = 91, 7 × 13 = 91, 91 ÷ 13 = 7, 91 ÷ 7 = 13।',
      hint: 'गुणा और भाग एक ही स्मृति के दो पहलू हैं।',
    },
  },
};

export function getLocalizedBootcampMode(
  modeId: TableTrainingMode,
  locale: SupportedLocale
): LocalizedBootcampMode {
  const item = BOOTCAMP_MODE_TRANSLATIONS[modeId];
  if (item && item[locale]) return item[locale]!;
  if (item && item.hi && locale !== 'en') return item.hi;
  return (
    item?.en || {
      name: modeId,
      tag: '',
      description: '',
      hint: '',
    }
  );
}

// ============================================================================
// 2. EXAM QUANT SUBSKILLS LOCALIZATION
// ============================================================================
export interface LocalizedExamSubSkill {
  title: string;
  examWeight: string;
  strategyTip: string;
}

const EXAM_SUBSKILL_TRANSLATIONS: Partial<
  Record<string, Partial<Record<SupportedLocale, LocalizedExamSubSkill>>>
> = {
  quant_simplification: {
    en: {
      title: 'Simplification (BODMAS)',
      examWeight: '10–15 Qs in Prelims',
      strategyTip: 'Factor cancellation & common denominator absorption.',
    },
    hi: {
      title: 'सरलीकरण (BODMAS)',
      examWeight: 'प्रारंभिक परीक्षा में 10-15 प्रश्न',
      strategyTip: 'गुणनखंड निरस्तीकरण और उभयनिष्ठ हर विलयन विधि।',
    },
    gu: {
      title: 'સરળીકરણ (BODMAS)',
      examWeight: 'પ્રારંભિક પરીક્ષામાં 10-15 પ્રશ્નો',
      strategyTip: 'અવયવ છેદ-ઉડાડવાની ઝડપી પદ્ધતિ.',
    },
    mr: {
      title: 'सरलीकरण (BODMAS)',
      examWeight: 'पूर्व परीक्षेत 10–15 प्रश्न',
      strategyTip: 'घटक निरसन आणि समान छेद पद्धत.',
    },
    te: {
      title: 'సరళీకరణ (BODMAS)',
      examWeight: 'ప్రిలిమ్స్‌లో 10–15 ప్రశ్నలు',
      strategyTip: 'కారకాల రద్దు మరియు వేగవంతమైన లెక్కింపు.',
    },
    ta: {
      title: 'சுருக்குதல் (BODMAS)',
      examWeight: 'முதல்நிலைத் தேர்வில் 10–15 கேள்விகள்',
      strategyTip: 'காரணி நீக்கம் மற்றும் விரைவு முறை.',
    },
  },
  quant_approximation: {
    en: {
      title: 'Approximation',
      examWeight: '5 Qs in Prelims',
      strategyTip: 'Boundary rounding (e.g. 49.8% → 50%, √145 → 12).',
    },
    hi: {
      title: 'सन्निकटन (Approximation)',
      examWeight: 'प्रारंभिक परीक्षा में 5 प्रश्न',
      strategyTip: 'सीमा पूर्णांकन नियम (उदा. 49.8% → 50%, √145 → 12)।',
    },
    gu: {
      title: 'આશરે ગણતરી (Approximation)',
      examWeight: 'પ્રારંભિક પરીક્ષામાં 5 પ્રશ્નો',
      strategyTip: 'નજીકના પૂર્ણાંકમાં ફેરવવાની પદ્ધતિ (દા.ત. 49.8% → 50%).',
    },
    mr: {
      title: 'अंदाजे मूल्य (Approximation)',
      examWeight: 'पूर्व परीक्षेत 5 प्रश्न',
      strategyTip: 'जवळच्या पूर्णांकाचा अंदाज (उदा. 49.8% → 50%, √145 → 12).',
    },
    te: {
      title: 'సుమారు విలువ (Approximation)',
      examWeight: 'ప్రిలిమ్స్‌లో 5 ప్రశ్నలు',
      strategyTip: 'సమీప పూర్ణాంక రౌండింగ్ (ఉదా. 49.8% → 50%).',
    },
    ta: {
      title: 'தோராய மதிப்பு (Approximation)',
      examWeight: 'முதல்நிலைத் தேர்வில் 5 கேள்விகள்',
      strategyTip: 'தோராய முழுமையாக்கல் (எ.கா. 49.8% → 50%).',
    },
  },
  quant_percentage: {
    en: {
      title: 'Percentage Splitting & Shortcuts',
      examWeight: '5–8 Qs in DI & Word Problems',
      strategyTip: 'x% of y = y% of x; Base 10% + 1% decomposition.',
    },
    hi: {
      title: 'प्रतिशत विभाजन और शॉर्टकट',
      examWeight: 'DI और वर्ड प्रॉब्लम्स में 5-8 प्रश्न',
      strategyTip: 'y का x% = x का y%; आधार 10% + 1% विभाजन तकनीक।',
    },
    gu: {
      title: 'ટકાવારી વિભાજન અને શોર્ટકટ્સ',
      examWeight: 'DI અને દાખલાઓમાં 5-8 પ્રશ્નો',
      strategyTip: 'y ના x% = x ના y%; બેઝ 10% + 1% વિભાજન પદ્ધતિ.',
    },
    mr: {
      title: 'टक्केवारी विभाजन आणि शॉर्टकट',
      examWeight: 'DI आणि शाब्दिक उदाहरणांमध्ये 5-8 प्रश्न',
      strategyTip: 'y चे x% = x चे y%; बेस 10% + 1% विभाजन पद्धत.',
    },
    te: {
      title: 'శాతం విభజన & షార్ట్‌కట్‌లు',
      examWeight: 'DI & సమస్యలలో 5-8 ప్రశ్నలు',
      strategyTip: 'y లో x% = x లో y%; బేస్ 10% + 1% విభజన పద్ధతి.',
    },
    ta: {
      title: 'சதவீதப் பிரிப்பு & குறுக்குவழிகள்',
      examWeight: 'DI மற்றும் கணக்குகளில் 5–8 கேள்விகள்',
      strategyTip: 'y இன் x% = x இன் y%; அடிப்படை 10% + 1% பிரிப்பு முறை.',
    },
  },
  quant_fraction_percent: {
    en: {
      title: 'Fraction to Percentage Table (1/2 to 1/20)',
      examWeight: 'Universal Speed Enabler',
      strategyTip: 'Immediate fractional recall (e.g. 1/7 = 14.28%, 1/14 = 7.14%).',
    },
    hi: {
      title: 'भिन्न से प्रतिशत तालिका (1/2 से 1/20)',
      examWeight: 'सार्वभौमिक गति उत्प्रेरक',
      strategyTip: 'त्वरित भिन्न स्मरण (उदा. 1/7 = 14.28%, 1/14 = 7.14%)।',
    },
    gu: {
      title: 'અપૂર્ણાંકથી ટકાવારી કોષ્ટક (1/2 થી 1/20)',
      examWeight: 'સાર્વત્રિક ગતિ ઉત્સાહક',
      strategyTip: 'ત્વરિત અપૂર્ણાંક સ્મરણ (દા.ત. 1/7 = 14.28%, 1/14 = 7.14%).',
    },
    mr: {
      title: 'अपूर्णांक ते टक्केवारी तक्ता (1/2 ते 1/20)',
      examWeight: 'सार्वत्रिक वेग वाढवणारा घटक',
      strategyTip: 'अपूर्णांकांचे त्वरित स्मरण (उदा. 1/7 = 14.28%, 1/14 = 7.14%).',
    },
    te: {
      title: 'భిన్నం నుండి శాతం పట్టిక (1/2 నుండి 1/20)',
      examWeight: 'సార్వత్రిక వేగ కారకం',
      strategyTip: 'తక్షణ భిన్నాల రీకాల్ (ఉదా. 1/7 = 14.28%, 1/14 = 7.14%).',
    },
    ta: {
      title: 'பின்னம் முதல் சதவீதம் அட்டவணை (1/2 முதல் 1/20)',
      examWeight: 'பொதுவான வேக ஊக்கி',
      strategyTip: 'உடனடி பின்ன நினைவுகூர்தல் (எ.கா. 1/7 = 14.28%).',
    },
  },
  quant_roots: {
    en: {
      title: 'Squares & Square Root Extraction',
      examWeight: '3–5 Qs in Quadratic & DI',
      strategyTip: 'Ending digit elimination + base-50/100 nearest anchors.',
    },
    hi: {
      title: 'वर्ग और वर्गमूल निष्कर्षण',
      examWeight: 'द्विघात समीकरण और DI में 3-5 प्रश्न',
      strategyTip: 'अंतिम अंक विलोपन + 50/100 आधार के निकटतम एंकर।',
    },
    gu: {
      title: 'વર્ગ અને વર્ગમૂળ પદ્ધતિ',
      examWeight: 'દ્વિઘાત સમીકરણ અને DI માં 3-5 પ્રશ્નો',
      strategyTip: 'અંતિમ અંક દૂર કરવો + 50/100 બેઝ એન્કર.',
    },
    mr: {
      title: 'वर्ग आणि वर्गमूळ पद्धत',
      examWeight: 'द्विघात समीकरणे आणि DI मध्ये 3-5 प्रश्न',
      strategyTip: 'शेवटचा अंक पद्धत + 50/100 बेस अँकर.',
    },
    te: {
      title: 'వర్గాలు & వర్గమూలాలు',
      examWeight: 'ద్విఘాత సమీకరణాలు & DI లో 3-5 ప్రశ్నలు',
      strategyTip: 'చివరి అంకె విలోపనం + 50/100 బేస్ యాంకర్లు.',
    },
    ta: {
      title: 'வர்க்கம் மற்றும் வர்க்கமூலம்',
      examWeight: 'இருபடி சமன்பாடு மற்றும் DI இல் 3–5 கேள்விகள்',
      strategyTip: 'கடைசி எண் நீக்குதல் + 50/100 அடிப்படை புள்ளிகள்.',
    },
  },
};

export function getLocalizedExamSubSkill(
  subSkillId: ExamSubSkill,
  locale: SupportedLocale
): LocalizedExamSubSkill {
  const item = EXAM_SUBSKILL_TRANSLATIONS[subSkillId];
  if (item && item[locale]) return item[locale]!;
  if (item && item.hi && locale !== 'en') return item.hi;
  return (
    item?.en || {
      title: subSkillId,
      examWeight: '',
      strategyTip: '',
    }
  );
}

// ============================================================================
// 3. ANZAN PRESETS LOCALIZATION
// ============================================================================
export interface LocalizedAnzanPreset {
  name: string;
  description: string;
}

const ANZAN_PRESET_TRANSLATIONS: Record<
  string,
  Partial<Record<SupportedLocale, LocalizedAnzanPreset>>
> = {
  'Novice Warmup': {
    en: {
      name: 'Novice Warmup',
      description: '5 numbers, 1-digit, 1200ms. Ideal for gentle phonological buffer pacing.',
    },
    hi: {
      name: 'आरंभिक वॉर्म-अप',
      description: '5 संख्याएं, 1-अंक, 1200ms। मानसिक संचायक गति अभ्यास के लिए आदर्श।',
    },
    gu: {
      name: 'પ્રારંભિક વોર્મ-અપ',
      description: '5 સંખ્યાઓ, 1-અંક, 1200ms. માનસિક ગણતરીની શરૂઆત માટે ઉત્તમ.',
    },
    mr: {
      name: 'आरंभी वॉर्म-अप',
      description: '5 संख्या, 1-अंक, 1200ms. मानसिक संचायक गतीसाठी आदर्श.',
    },
    te: {
      name: 'ప్రారంభ వార్మప్',
      description: '5 సంఖ్యలు, 1-అంకె, 1200ms. ప్రాథమిక వర్కింగ్ మెమరీ శిక్షణ.',
    },
    ta: {
      name: 'தொடக்கப் பயிற்சி',
      description: '5 எண்கள், 1-இலக்கம், 1200ms. எளிய வேகப் பயிற்சிக்கு ஏற்றது.',
    },
  },
  'Standard Flow': {
    en: {
      name: 'Standard Flow',
      description: '5 numbers, 2-digit, 800ms. Standard rhythm for active working memory.',
    },
    hi: {
      name: 'मानक प्रवाह (Standard Flow)',
      description: '5 संख्याएं, 2-अंक, 800ms। कार्यशील स्मृति के लिए मानक गति।',
    },
    gu: {
      name: 'પ્રમાણભૂત પ્રવાહ',
      description: '5 સંખ્યાઓ, 2-અંક, 800ms. કાર્યકારી સ્મૃતિ માટે માનક લય.',
    },
    mr: {
      name: 'प्रमाणित प्रवाह',
      description: '5 संख्या, 2-अंक, 800ms. कार्यक्षम स्मृतीसाठी प्रमाणित गती.',
    },
    te: {
      name: 'ప్రామాణిక ప్రవాహం',
      description: '5 సంఖ్యలు, 2-అంకెలు, 800ms. వర్కింగ్ మెమరీ కోసం ప్రామాణిక వేగం.',
    },
    ta: {
      name: 'வழக்கமான வேகம்',
      description: '5 எண்கள், 2-இலக்கம், 800ms. செயல்பாட்டு நினைவகத்திற்கான வழக்கமான லயம்.',
    },
  },
  'Soroban Pro': {
    en: {
      name: 'Soroban Pro',
      description: '8 numbers, 2-digit, 500ms, with negatives. Fast sub-vocal bypass.',
    },
    hi: {
      name: 'सोरोबन प्रो (Soroban Pro)',
      description: '8 संख्याएं, 2-अंक, 500ms, ऋणात्मक सहित। तीव्र मानसिक दृष्टि गणना।',
    },
    gu: {
      name: 'સોરોબન પ્રો',
      description: '8 સંખ્યાઓ, 2-અંક, 500ms, ઋણ સંખ્યાઓ સાથે. ઝડપી માનસિક ગણતરી.',
    },
    mr: {
      name: 'सोरोबन प्रो',
      description: '8 संख्या, 2-अंक, 500ms, ऋण संख्यांसह. वेगवान मानसिक दृष्टीक्षेप.',
    },
    te: {
      name: 'సోరోబన్ ప్రో',
      description: '8 సంఖ్యలు, 2-అంకెలు, 500ms, రుణ సంఖ్యలతో సహా. తీవ్ర వేగం.',
    },
    ta: {
      name: 'சோரோபன் புரோ',
      description: '8 எண்கள், 2-இலக்கம், 500ms, குறை எண்களுடன். அதிவேகக் கணக்கீடு.',
    },
  },
  'Grandmaster Flash': {
    en: {
      name: 'Grandmaster Flash',
      description: '10 numbers, 3-digit, 300ms, with negatives. Elite mental soroban speed.',
    },
    hi: {
      name: 'ग्रैंडमास्टर फ्लैश (Elite)',
      description: '10 संख्याएं, 3-अंक, 300ms, ऋणात्मक सहित। शीर्ष स्तरीय मानसिक गति।',
    },
    gu: {
      name: 'ગ્રાન્ડમાસ્ટર ફ્લેશ',
      description: '10 સંખ્યાઓ, 3-અંક, 300ms, ઋણ સંખ્યાઓ સાથે. ઉત્કૃષ્ટ માનસિક ગતિ.',
    },
    mr: {
      name: 'ग्रँडमास्टर फ्लॅश',
      description: '10 संख्या, 3-अंक, 300ms, ऋण संख्यांसह. उच्च दर्जाची मानसिक गती.',
    },
    te: {
      name: 'గ్రాండ్‌మాస్టర్ ఫ్లాష్',
      description: '10 సంఖ్యలు, 3-అంకెలు, 300ms, రుణ సంఖ్యలతో సహా. అగ్రశ్రేణి వేగం.',
    },
    ta: {
      name: 'கிராண்ட்மாஸ்டர் ஃப்ளாஷ்',
      description: '10 எண்கள், 3-இலக்கம், 300ms, குறை எண்களுடன். தலைசிறந்த வேகம்.',
    },
  },
};

export function getLocalizedAnzanPreset(
  presetName: string,
  locale: SupportedLocale
): LocalizedAnzanPreset {
  const item = ANZAN_PRESET_TRANSLATIONS[presetName];
  if (item && item[locale]) return item[locale]!;
  if (item && item.hi && locale !== 'en') return item.hi;
  return (
    item?.en || {
      name: presetName,
      description: '',
    }
  );
}

// ============================================================================
// 4. TUTORIAL LESSONS LOCALIZATION
// ============================================================================
export interface LocalizedTutorialStep {
  title: string;
  subVocalization: string;
  explanation: string;
}

export interface LocalizedTutorialLesson {
  title: string;
  subtitle: string;
  description: string;
  steps: LocalizedTutorialStep[];
  keyTakeaway: string;
}

const TUTORIAL_LESSON_TRANSLATIONS: Record<
  string,
  Partial<Record<SupportedLocale, LocalizedTutorialLesson>>
> = {
  left_to_right: {
    en: {
      title: 'Left-to-Right Accumulator Method',
      subtitle: 'Eliminate school-style carry digits forever',
      description: 'School math forces you to store ghost carry digits while calculating. Instead, always add from Most Significant Digit to Least Significant Digit.',
      steps: [
        {
          title: 'Step 1: Add the Tens (Leading Digits)',
          subVocalization: 'Echo in your mind: "110"',
          explanation: 'Decompose: 50 + 60 = 110. Your mental accumulator is now 110.',
        },
        {
          title: 'Step 2: Add the First Units Digit',
          subVocalization: 'Echo: "117"',
          explanation: 'Merge the 7 into your running accumulator: 110 + 7 = 117.',
        },
        {
          title: 'Step 3: Add the Final Units Digit',
          subVocalization: 'Resolve to: "125"',
          explanation: 'Add the remaining 8: 117 + 8 = 125. Result is finished with zero carry stress.',
        },
      ],
      keyTakeaway: 'Always update a single running sum. The auditory echo in your head holds the number so your visual cortex stays relaxed.',
    },
    hi: {
      title: 'बाएं-से-दाएं संचायक विधि (Left-to-Right)',
      subtitle: 'पारंपरिक हासिल (Carry) के तनाव को हमेशा के लिए समाप्त करें',
      description: 'पारंपरिक विधि में हासिल याद रखना पड़ता है जिससे मस्तिष्क पर बोझ पड़ता है। इसके स्थान पर हमेशा उच्चतम स्थानीय मान (बाएं) से न्यूनतम (दाएं) की ओर जोड़ें।',
      steps: [
        {
          title: 'चरण 1: दहाई (अग्रणी अंक) जोड़ें',
          subVocalization: 'मन में गूंजें: "110"',
          explanation: 'विभाजित करें: 50 + 60 = 110। आपका मानसिक संचायक अब 110 है।',
        },
        {
          title: 'चरण 2: पहली इकाई जोड़ें',
          subVocalization: 'मन में गूंजें: "117"',
          explanation: '7 को संचायक में जोड़ें: 110 + 7 = 117।',
        },
        {
          title: 'चरण 3: अंतिम इकाई जोड़ें',
          subVocalization: 'अंतिम उत्तर: "125"',
          explanation: 'शेष 8 जोड़ें: 117 + 8 = 125। बिना किसी हासिल के झंझट के उत्तर तैयार है।',
        },
      ],
      keyTakeaway: 'हमेशा एक ही संचायक (Running Sum) को अपडेट करें। आंतरिक ध्वनि संख्या को स्थिर रखती है।',
    },
    gu: {
      title: 'ડાબેથી જમણે સંચાયક પદ્ધતિ',
      subtitle: 'વદ્દીના તણાવને કાયમ માટે દૂર કરો',
      description: 'હંમેશા સૌથી મોટી સ્થાન-કિંમત (ડાબી બાજુ) થી નાની (જમણી બાજુ) તરફ સરવાળો કરો.',
      steps: [
        {
          title: 'પગલું 1: દશકનો સરવાળો',
          subVocalization: 'મનમાં ગૂંજ: "110"',
          explanation: '50 + 60 = 110. તમારો સંચાયક હવે 110 છે.',
        },
        {
          title: 'પગલું 2: એકમ ઉમેરો',
          subVocalization: 'મનમાં ગૂંજ: "117"',
          explanation: '110 + 7 = 117.',
        },
        {
          title: 'પગલું 3: અંતિમ એકમ ઉમેરો',
          subVocalization: 'અંતિમ જવાબ: "125"',
          explanation: '117 + 8 = 125. વદ્દી વગર સીધો પરિણામ.',
        },
      ],
      keyTakeaway: 'હંમેશા એક જ સતત સરવાળો યાદ રાખો.',
    },
    mr: {
      title: 'डावीकडून उजवीकडे संचायक पद्धत',
      subtitle: 'हातच्याचा ताण कायमचा नष्ट करा',
      description: 'नेहमी मोठ्या स्थानिक किमतीकडून (डावीकडून) लहान किमतीकडे (उजवीकडे) बेरीज करा.',
      steps: [
        {
          title: 'पायरी 1: दशकाची बेरीज',
          subVocalization: 'मनात गुंजवा: "110"',
          explanation: '50 + 60 = 110. तुमचा संचायक आता 110 आहे.',
        },
        {
          title: 'पायरी 2: एकक मिळवा',
          subVocalization: 'मनात गुंजवा: "117"',
          explanation: '110 + 7 = 117.',
        },
        {
          title: 'पायरी 3: अंतिम एकक मिळवा',
          subVocalization: 'अंतिम उत्तर: "125"',
          explanation: '117 + 8 = 125. हातच्याशिवाय थेट उत्तर.',
        },
      ],
      keyTakeaway: 'नेहमी एकाच धावत्या बेरजेवर लक्ष केंद्रित करा.',
    },
    te: {
      title: 'ఎడమ నుండి కుడికి సంకలన పద్ధతి',
      subtitle: 'చేతిలో ఉంచుకునే పద్ధతిని నివారించండి',
      description: 'ఎల్లప్పుడూ పెద్ద స్థాన విలువల నుండి చిన్న స్థాన విలువల వైపు లెక్కించండి.',
      steps: [
        {
          title: 'దశ 1: పదుల స్థానాన్ని కూడండి',
          subVocalization: 'మనస్సులో ప్రతిధ్వనించండి: "110"',
          explanation: '50 + 60 = 110. మీ అక్యుమ్యులేటర్ 110.',
        },
        {
          title: 'దశ 2: ఒకట్ల స్థానాన్ని కలపండి',
          subVocalization: 'ప్రతిధ్వని: "117"',
          explanation: '110 + 7 = 117.',
        },
        {
          title: 'దశ 3: తుది అంకెను కలపండి',
          subVocalization: 'తుది సమాధానం: "125"',
          explanation: '117 + 8 = 125.',
        },
      ],
      keyTakeaway: 'ఎల్లప్పుడూ ఒకే రన్నింగ్ మొత్తాన్ని నవీకరించండి.',
    },
    ta: {
      title: 'இடமிருந்து வலமாக கூட்டும் முறை',
      subtitle: 'மீதி வைக்கும் மன அழுத்தத்தை நீக்குங்கள்',
      description: 'எப்போதும் அதிக இடமதிப்பிலிருந்து குறைந்த இடமதிப்பை நோக்கி கூட்டுங்கள்.',
      steps: [
        {
          title: 'படி 1: பத்துகளைக் கூட்டுங்கள்',
          subVocalization: 'மனதில் எதிரொலிக்கவும்: "110"',
          explanation: '50 + 60 = 110. உங்கள் மனத் தொகை இப்போது 110.',
        },
        {
          title: 'படி 2: முதல் ஒன்றைக் கூட்டுங்கள்',
          subVocalization: 'எதிரொலி: "117"',
          explanation: '110 + 7 = 117.',
        },
        {
          title: 'படி 3: இறுதி ஒன்றைக் கூட்டுங்கள்',
          subVocalization: 'முடிவு: "125"',
          explanation: '117 + 8 = 125.',
        },
      ],
      keyTakeaway: 'ஒரே ஒரு தொடர் தொகையை மட்டும் மனதில் வைத்திருங்கள்.',
    },
  },
};

export function getLocalizedTutorialLesson(
  lessonId: string,
  locale: SupportedLocale,
  fallbackTitle?: string,
  fallbackSubtitle?: string
): LocalizedTutorialLesson {
  const item = TUTORIAL_LESSON_TRANSLATIONS[lessonId];
  if (item && item[locale]) return item[locale]!;
  if (item && item.hi && locale !== 'en') return item.hi;
  if (item && item.en) return item.en;
  return {
    title: fallbackTitle || lessonId,
    subtitle: fallbackSubtitle || '',
    description: '',
    steps: [],
    keyTakeaway: '',
  };
}

// ============================================================================
// 5. SKILL PROFILE CATEGORIES LOCALIZATION
// ============================================================================
export interface LocalizedSkillCategory {
  title: string;
  description: string;
}

const SKILL_CATEGORY_TRANSLATIONS: Record<
  string,
  Partial<Record<SupportedLocale, LocalizedSkillCategory>>
> = {
  add_sub: {
    en: {
      title: 'Addition & Subtraction Foundations',
      description: 'Single-digit, decade crossing, base-100 complements, and left-to-right multi-digit',
    },
    hi: {
      title: 'जोड़ और घटाव का आधार',
      description: 'एकल अंक, दहाई पार करना, आधार-100 पूरक, और बाएं-से-दाएं बहु-अंकीय जोड़',
    },
    gu: {
      title: 'સરવાળા અને બાદબાકીનો પાયો',
      description: 'એક અંક, દશક પાર કરવું, બેઝ-100 પૂરક અને ડાબેથી જમણે બહુ-અંક',
    },
    mr: {
      title: 'बेरीज आणि वजाबाकीचा पाया',
      description: 'एकल अंक, दशक ओलांडणे, बेस-100 पूरक आणि डावीकडून उजवीकडे बहु-अंकी',
    },
    te: {
      title: 'సంకలనం & వ్యవకలనం పునాదులు',
      description: 'ఒకే అంకె, పదులు దాటడం, బేస్-100 పూరకాలు మరియు ఎడమ నుండి కుడికి బహుళ అంకెలు',
    },
    ta: {
      title: 'கூட்டல் & கழித்தல் அடிப்படைகள்',
      description: 'ஒற்றை இலக்கம், பத்துகளைத் தாண்டுதல், மற்றும் இடமிருந்து வலமாக பல இலக்கக் கணக்கீடு',
    },
  },
  multiplication: {
    en: {
      title: 'Multiplication Tables & Expansion',
      description: 'Foundations (2-5, 10), core times tables (6-12), teen tables, and decade anchors',
    },
    hi: {
      title: 'पहाड़े और गुणन विस्तार',
      description: 'आधार पहाड़े (2-5, 10), मुख्य पहाड़े (6-12), 11-20 पहाड़े, और दहाई एंकर',
    },
    gu: {
      title: 'ઘડિયા અને ગુણાકાર વિસ્તાર',
      description: 'પાયાના ઘડિયા (2-5, 10), મુખ્ય ઘડિયા (6-12), 11-20 ઘડિયા અને દશક એન્કર',
    },
    mr: {
      title: 'पाढे आणि गुणाकार विस्तार',
      description: 'पायाभूत पाढे (2-5, 10), मुख्य पाढे (6-12), 11-20 पाढे आणि दशक अँकर',
    },
    te: {
      title: 'గుణకారం ఎక్కాలు & విస్తరణ',
      description: 'ప్రాథమిక ఎక్కాలు (2-5, 10), ప్రధాన ఎక్కాలు (6-12), మరియు 11-20 ఎక్కాలు',
    },
    ta: {
      title: 'வாய்ப்பாடுகள் & பெருக்கல் விரிவாக்கம்',
      description: 'அடிப்படை வாய்ப்பாடுகள் (2-5, 10), முக்கிய வாய்ப்பாடுகள் (6-12), மற்றும் 11-20 வாய்ப்பாடுகள்',
    },
  },
  squares_cubes: {
    en: {
      title: 'Mental Squares & Cubes',
      description: 'Vedic ending-5, base-50, base-100, duplex cross-multiplication, and anchor cubes',
    },
    hi: {
      title: 'मानसिक वर्ग और घन',
      description: 'वैदिक 5-अंत, 50-आधार, 100-आधार, द्वन्द्व योग, और घन संख्याएं',
    },
    gu: {
      title: 'માનસિક વર્ગ અને ઘન',
      description: 'વૈદિક 5-અંત, 50-બેઝ, 100-બેઝ અને દ્વંદ્વ ગુણાકાર',
    },
    mr: {
      title: 'मानसिक वर्ग आणि घन',
      description: 'वैदिक 5-शेवट, 50-बेस, 100-बेस आणि द्वंद्व पद्धत',
    },
    te: {
      title: 'మానసిక వర్గాలు & ఘనాలు',
      description: 'వేద 5-ముగింపు, 50-బేస్, 100-బేస్ మరియు డ్యూప్లెక్స్ పద్ధతి',
    },
    ta: {
      title: 'மன வர்க்கங்கள் & கனங்கள்',
      description: 'வேத கணித 5-முடிவு, 50-அடிப்படை, 100-அடிப்படை மற்றும் கன எண்கள்',
    },
  },
  anzan: {
    en: {
      title: 'Working Memory & Anzan Stream',
      description: 'Sequential flashed additions and dynamic working memory holding capacity',
    },
    hi: {
      title: 'कार्यशील स्मृति और अंजान स्ट्रीम',
      description: 'अनुक्रमिक फ्लैश जोड़ और गतिशील कार्यशील स्मृति संधारण क्षमता',
    },
    gu: {
      title: 'કાર્યકારી સ્મૃતિ અને અંઝાન સ્ટ્રીમ',
      description: 'સતત ફ્લેશ સરવાળા અને કાર્યકારી સ્મૃતિ ક્ષમતા',
    },
    mr: {
      title: 'कार्यरत स्मृती आणि अंझान प्रवाह',
      description: 'सतत फ्लॅश बेरीज आणि कार्यरत स्मृती धारण क्षमता',
    },
    te: {
      title: 'వర్కింగ్ మెమరీ & అంజాన్ స్ట్రీమ్',
      description: 'వరుసగా ఫ్లాష్ అయ్యే సంకలనాలు మరియు మెమరీ సామర్థ్యం',
    },
    ta: {
      title: 'செயல்பாட்டு நினைவகம் & அன்சான் ஸ்ட்ரீம்',
      description: 'தொடர்ச்சியான ஃப்ளாஷ் கூட்டல் மற்றும் நினைவகத் திறன்',
    },
  },
};

export function getLocalizedSkillCategory(
  categoryKey: string,
  locale: SupportedLocale
): LocalizedSkillCategory {
  const normalizedKey =
    categoryKey === 'addition_subtraction' ? 'add_sub' : categoryKey;
  const item =
    SKILL_CATEGORY_TRANSLATIONS[normalizedKey] ||
    SKILL_CATEGORY_TRANSLATIONS[categoryKey];
  if (item && item[locale]) return item[locale]!;
  if (item && item.hi && locale !== 'en') return item.hi;
  return (
    item?.en || {
      title: categoryKey,
      description: '',
    }
  );
}
