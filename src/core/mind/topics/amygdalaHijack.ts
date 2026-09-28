import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_AMYGDALA_HIJACK_EN: MindTopicDetail = {
  id: 'amygdala_hijack',
  categoryId: 'emotions',
  slug: 'amygdala-hijack',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 5,
  viewCount: 3400,
  shareCount: 255,
  bookmarkCount: 545,
  title: "Amygdala Hijack: The Neural Surge That Overrides Reason",
  subtitle: "When the primitive threat center triggers fight-or-flight before the rational prefrontal cortex can process facts.",
  shortDescription: "A sudden, overwhelming emotional explosion triggered when the amygdala bypasses the prefrontal cortex, perceiving a social threat as physical danger.",
  oneLineExplanation: "The brain reacting with survival aggression before logical thought even begins.",

  summary30s: "Coined by Daniel Goleman based on Joseph LeDoux’s neuroscience research, an amygdala hijack happens when sensory input bypasses the neocortex, flooding your body with adrenaline in milliseconds before your logical mind can intervene.",
  coreConcept: "Sensory signals split at the thalamus: a high road leads to the rational prefrontal cortex, while a low, emergency road goes straight to the amygdala. In high-stress conflicts, the amygdala triggers a neurochemical storm before the rational mind can formulate words.",
  summary60s: "When someone insults or criticizes you, your primitive amygdala cannot distinguish between a physical tiger and a social attack. It triggers cortisol and adrenaline release, hijacking working memory and disabling logical reflection. The biological reaction takes roughly 6 seconds to subside if you do not add fuel through defensive self-talk.",
  quickTakeaways: ["The subcortical pathway reacts in milliseconds, far faster than the rational neocortex","Blood flow shifts away from the prefrontal cortex, causing temporary logical blindness","A conscious 6-second pause gives the prefrontal cortex time to regain executive control","Physical markers like heart pounding and shallow breathing precede verbal explosions"],

  whyItHappens: "Evolutionary survival prioritized speed over accuracy: reacting to a false alarm is harmless, but hesitating in front of a predator is fatal.",
  evolutionaryMechanism: "Early humans faced lethal predators; immediate neurochemical readiness was essential for clan survival.",

  howItWorks: "Social stimulus perceived as threat -> Thalamus routes signal directly to amygdala -> Adrenaline surge disables working memory -> Prefrontal cortex goes offline -> Regrettable outburst occurs.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "The Fast Low Road vs. The Deliberate High Road",
    description: "How emergency subcortical wiring bypasses rational cortical processing.",
    analogySideA: {
      label: "Rational High Road (Prefrontal Cortex)",
      detail: "Takes 250–500ms to analyze context, understand nuance, and choose an assertive response.",
    },
    analogySideB: {
      label: "Amygdala Low Road (Survival Hijack)",
      detail: "Fires in 12–20ms, dumping adrenaline and screaming fight-or-flight before you can think.",
    },
  },

  researchSummary: "LeDoux (1996, The Emotional Brain) and Goleman (1995) documented the anatomical short-circuit between the sensory thalamus and the amygdala, proving that emotional response can precede cognitive evaluation.",
  references: [
    {
      id: 'ref_amygdala_hijack_01',
      title: "Emotional Intelligence and the Emotional Brain",
      citation: "Goleman, D. (1995). Emotional Intelligence. Bantam Books.",
      authors: "Goleman, D. & LeDoux, J. E.",
      publicationYear: 1995,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1037/0003-066X.51.10.1069",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_amygdala_hijack_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Startup Pitch Outburst in Gurgaon",
      narrativeContext: "During a crucial funding pitch in Cyber City Gurgaon, an investor casually remarked that Rohan's financial model was \"childish\". Rohan felt a flash of intense heat in his face and immediately snapped, shouting that the investor didn't understand modern tech.",
      biasInAction: "Rohan experienced an acute amygdala hijack: the investor's critique felt like an identity-level threat, disabling his composure.",
      optimalResponse: "Take a deliberate 6-second sip of water to allow the prefrontal cortex to come back online, then respond calmly: \"Let me walk you through the unit economics that justify that estimate.\"",
      reflectionPrompt: "When was the last time you felt sudden physical heat or heart pounding during an argument before speaking words you regretted?",
    },
  ],

  examples: [
    {
      id: 'ex_amygdala_hijack_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Startup Pitch Outburst in Gurgaon",
      description: "During a crucial funding pitch in Cyber City Gurgaon, an investor casually remarked that Rohan's financial model was \"childish\". Rohan felt a flash of...",
      takeaway: "The subcortical pathway reacts in milliseconds, far faster than the rational neocortex",
    },
  ],

  howToRecognize: "Sudden surge of bodily heat, clenched jaw, racing heartbeat, and an irresistible urge to interrupt or shout.",
  whereYouEncounterIt: "High-stakes negotiations, family arguments, performance reviews, and heated online comments.",
  commonMisconceptions: "Myth: Emotional intelligence means never feeling anger. Reality: High EQ people feel the exact same adrenaline surge, but have trained the ability to insert a pause before reacting.",
  limitationsAndControversies: "In physical emergencies (fire, physical assault), the amygdala hijack is life-saving and should not be suppressed.",

  howToRespond: "Implement the 6-Second Circuit Breaker: breathe in for 4 seconds, exhale for 4, drink water, and label the emotion internally (\"I am feeling threatened right now\").",
  psychologicalDefenses: [{"title":"The 6-Second Biological Buffer","instruction":"Never speak for the first 6 seconds after hearing triggering criticism; sip water or take a deep belly breath."},{"title":"Name It to Tame It","instruction":"Silently say: \"My amygdala is firing an alarm bell.\" Linguistic labeling activates the left prefrontal cortex."}],

  practiceQuestions: [
    {
      id: 'pq_amygdala_hijack_01',
      difficulty: 'intermediate',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A colleague loudly questions your integrity in front of the entire department. What is the scientifically optimal immediate reaction?",
      scenarioText: "Your heart is racing at 130 bpm and you feel a wave of intense anger rushing through your chest.",
      explanation: "During an amygdala hijack, your logical reasoning is biologically impaired. Forcing a physical pause and conscious breath lets the prefrontal cortex regain control.",
      antidoteAdvice: "Pause for 6 seconds, acknowledge the surge, and delay verbal response until pulse stabilizes.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Instantly shout back with equal aggression to maintain status and assert dominance.",
          text: "Instantly shout back with equal aggression to maintain status and assert dominance.",
          feedbackText: "Incorrect. This fuels the hijack and damages professional credibility.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Pause, take a slow 4-second breath, sip water, and respond with a neutral fact-based question.",
          text: "Pause, take a slow 4-second breath, sip water, and respond with a neutral fact-based question.",
          feedbackText: "Correct! The pause allows prefrontal cortex re-engagement.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Walk out of the room slamming the door to show complete disgust.",
          text: "Walk out of the room slamming the door to show complete disgust.",
          feedbackText: "Incorrect. This is an emotional surrender to the hijack.",
        }
      ],
    },
  ],

  reflectionPrompt: "Can you identify the specific physical bodily cue (jaw clench, stomach flutter, throat tight) that signals your amygdala is activating?",
  tags: ['Mentalab Mind', 'emotions'],
  relatedTopics: [],
  seoTitle: `${"Amygdala Hijack: The Neural Surge That Overrides Reason"} | Mentalab Mind`,
  seoDescription: "A sudden, overwhelming emotional explosion triggered when the amygdala bypasses the prefrontal cortex, perceiving a social threat as physical danger.",
  canonicalUrl: '/mind/emotions/amygdala-hijack',
  ogImageUrl: '/images/mind/amygdala-hijack.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "When someone insults or criticizes you, your primitive amygdala cannot distinguish between a physical tiger and a social attack. It triggers cortisol and adrenaline release, hijacking working memory and disabling logical reflection. The biological reaction takes roughly 6 seconds to subside if you do not add fuel through defensive self-talk.",
};

export const TOPIC_AMYGDALA_HIJACK_HINGLISH: MindTopicDetail = {
  ...TOPIC_AMYGDALA_HIJACK_EN,
  title: "Amygdala Hijack: Jab Gussa Dimaag Ke Logic Ko Band Kar Deta Hai",
  subtitle: "Kyu achanak choti si baat par insaan bina soche samjhe chilla padta hai aur baad me regret karta hai.",
  shortDescription: "Ek achanak hone wala emotional explosion jisme dimaag ka threat center logic ko bypass kar deta hai.",
  oneLineExplanation: "Dimaag ka logic chhodkar purani animal survival instinct par chale jana.",
  summary30s: "Daniel Goleman ne samjhaya ki dimaag ka emergency alarm (amygdala) prefrontal cortex se pehle trigger hota hai. Choti si criticism par dimaag adrenaline release kar deta hai, jisse logic temporary tor par band ho jata hai.",
  coreConcept: "Hamare dimaag me do raste hote hain: lamba rasta jo soch-samajh kar faisla leta hai, aur chota emergency rasta jo direct amygdala se judta hai. Gusse me emergency rasta jeet jata hai.",
  summary60s: "Jab koi aapki beizzati karta hai, to dimaag use physical attack samajhta hai. Dil ki dhadkan badh jati hai aur prefrontal cortex offline chala jata hai. Is biological storm ko shant hone me lagbhag 6 second lagte hain.",
  quickTakeaways: ["Gusse me logic isliye band hota hai kyuki dimaag survival mode me chala jata hai","React karne se pehle 6 second ka pause biological circuit breaker ka kaam karta hai","Physical signals jaise garam chehra ya tezi se dhadakta dil hijack ki pehli warning hain","Apne emotion ko silently naam dein: \"Mujhe gussa aa raha hai\" kehne se prefrontal cortex active hota hai"],
  howItWorks: "Trigger milte hi amygdala adrenaline pump karta hai -> Bood flow dimaag ke logic part se muscle ki taraf chala jata hai -> Muh se bina soche baatein nikal jati hain -> Baad me guilt hota hai.",
  howToRespond: "6-Second Rule apnayein: Kuch bhi bolne se pehle 6 second ka pause lein, paani piyein aur lambi saans lein.",
  practiceQuestions: [
    {
      ...TOPIC_AMYGDALA_HIJACK_EN.practiceQuestions[0],
      prompt: "Office meeting me kisi ne aapke kaam par public me galat ilzam lagaya. Sabse scientific reaction kya hoga?",
      explanation: "Pehle 6 second me aapka prefrontal cortex offline hota hai. Pause lene se hi aap sensible answer de sakte hain.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Turant uth kar samne wale par chilana taaki log kamzor na samjhein.",
          text: "Turant uth kar samne wale par chilana taaki log kamzor na samjhein.",
          feedbackText: "Galat. Yeh amygdala hijack ka victim banna hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "6 second ka pause lein, paani piyein, aur shanti se facts ke sath sawal puchein.",
          text: "6 second ka pause lein, paani piyein, aur shanti se facts ke sath sawal puchein.",
          feedbackText: "Sahi! Yeh logic ko wapas lane ka scientific tareeqa hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Meeting chhod kar bahar nikal jana aur gusse me resignation likhna.",
          text: "Meeting chhod kar bahar nikal jana aur gusse me resignation likhna.",
          feedbackText: "Galat. Yeh impulsivity hai.",
        }
      ],
    },
  ],
  seoTitle: `${"Amygdala Hijack: Jab Gussa Dimaag Ke Logic Ko Band Kar Deta Hai"} | Mentalab Mind`,
  seoDescription: "Ek achanak hone wala emotional explosion jisme dimaag ka threat center logic ko bypass kar deta hai.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_AMYGDALA_HIJACK_EN,
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

export const TOPIC_AMYGDALA_HIJACK: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_AMYGDALA_HIJACK_EN,
  hinglish: TOPIC_AMYGDALA_HIJACK_HINGLISH,
  hi: createLocalizedRecord('hi', "अमिग्डाला अपहरण (Amygdala Hijack)", "जब मस्तिष्क का भावुक केंद्र तार्किक प्रीफ्रंटल कॉर्टेक्स को बाईपास करके तात्कालिक क्रोध या भय की प्रतिक्रिया शुरू कर देता है।", ["भावनाएं तर्क से पहले सक्रिय होती हैं","६ सेकंड का विराम तर्क को पुनः सक्रिय करता है","सहानुभूतिपूर्ण तंत्रिका तंत्र तात्कालिक प्रतिक्रिया देता है"]),
  gu: createLocalizedRecord('gu', "એમિગ્ડાલા હાઇજેક (આવેગિક પ્રતિક્રિયા)", "જ્યારે તીવ્ર ક્રોધ વિચારશક્તિ પર હાવી થઈને અવિચારી નિર્ણય લેવડાવે છે.", ["આવેગ પર કાબૂ રાખો","૬ સેકન્ડનો વિરામ લો","શાંતિથી વિચાર કરો"]),
  mr: createLocalizedRecord('mr', "अमिग्डाला हायजॅक (आवेगाचा स्फोट)", "तार्किक विचारांआधी मेंदूच्या भावनिक केंद्राकडून तात्काळ आक्रमक प्रतिक्रिया उमटणे.", ["आवेगावर नियंत्रण ठेवा","६ सेकंदांचा विराम घ्या","तर्कशुद्ध विचार करा"]),
  te: createLocalizedRecord('te', "అమిగ్డాలా హైజాక్ (ఆవేశపు స్పందన)", "మెదడులోని భావోద్వేగ కేంద్రం విచక్షణా జ్ఞానాన్ని నిలిపివేసి ఆవేశంతో స్పందించే స్థితి.", ["ఆవేశాన్ని అదుపులో ఉంచండి","క్షణికావేశాన్ని ఆపండి","శాంతంగా ఆలోచించండి"]),
  ta: createLocalizedRecord('ta', "அமிக்டாலா கடத்தல் (உணர்ச்சி வெடிப்பு)", "மூளையின் தர்க்கரீதியான சிந்தனையை முடக்கி உடனடி கோபத்தை உருவாக்கும் நரம்பியல் செயல்முறை.", ["உணர்ச்சியை கட்டுப்படுத்துங்கள்","ஆறு நொடிகள் தாமதிக்கவும்","அமைதியாக சிந்தியுங்கள்"]),
  kn: createLocalizedRecord('kn', "ಅಮಿಗ್ಡಾಲಾ ಹೈಜಾಕ್ (ಭಾವೋದ್ರೇಕದ ಸೆಳೆತ)", "ತರ್ಕಬದ್ಧ ಚಿಂತನೆಗೆ ಮುನ್ನವೇ ಮೆದುಳಿನ ಭಾವನಾತ್ಮಕ ಕೇಂದ್ರವು ತಕ್ಷಣದ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಪ್ರಚೋದಿಸುವ ಸ್ಥಿತಿ.", ["ಭಾವೋದ್ರೇಕವನ್ನು ನಿಯಂತ್ರಿಸಿ","ಶಾಂತರಾಗಿ ನಿರ್ಧರಿಸಿ","ತರ್ಕಕ್ಕೆ ಆದ್ಯತೆ ನೀಡಿ"]),
  ml: createLocalizedRecord('ml', "അമിഗ്ഡല ഹൈജാക്ക് (വൈകാരിക തരംഗം)", "യുക്തിസഹമായ ചിന്തയെ മറികടന്ന് മസ്തിഷ്കം പെട്ടെന്നുള്ള വൈകാരിക പ്രതികരണം നൽകുന്ന അവസ്ഥ.", ["വികാരങ്ങളെ നിയന്ത്രിക്കുക","ആറ് സെക്കൻഡ് നിശബ്ദത പാലിക്കുക","ശാന്തമായി പ്രതികരിക്കുക"]),
  bn: createLocalizedRecord('bn', "অ্যামিগডালা হাইজ্যাক (আবেগীয় বিস্ফোরণ)", "মস্তিষ্কের যৌক্তিক অংশ কাজ করার আগেই তাত্ক্ষণিক রাগ বা ভয়ের অপ্রতিরোধ্য বহিঃপ্রকাশ।", ["আবেগ নিয়ন্ত্রণ করুন","ছয় সেকেন্ডের বিরতি নিন","শান্তভাবে সিদ্ধান্ত নিন"]),
  pa: createLocalizedRecord('pa', "ਐਮਿਗਡਾਲਾ ਹਾਈਜੈਕ (ਗੁੱਸੇ ਦਾ ਉਛਾਲ)", "ਜਦੋਂ ਤਰਕ ਤੋਂ ਪਹਿਲਾਂ ਦਿਮਾਗ ਦਾ ਭਾਵਨਾਤਮਕ ਕੇਂਦਰ ਬੇਕਾਬੂ ਪ੍ਰਤੀਕਿਰਿਆ ਸ਼ੁਰੂ ਕਰ ਦਿੰਦਾ ਹੈ।", ["ਗੁੱਸੇ ਤੇ ਕਾਬੂ ਰੱਖੋ","ਕੁਝ ਪਲ ਰੁਕ ਕੇ ਸੋਚੋ","ਸ਼ਾਂਤਮਈ ਹੱਲ ਲੱਭੋ"]),
  ur: createLocalizedRecord('ur', "امیگڈالا ہائی جیک (جذباتی طوفان)", "جب دماغ کا جذباتی مرکز عقل و شعور کو معطل کر کے فوری اور بے قابو ردعمل پیدا کرتا ہے۔", ["جذبات پر قابو پائیں","چھ سیکنڈ کا وقفہ لیں","ہوش مندی سے جواب دیں"]),
  or: createLocalizedRecord('or', "ଆମିଗ୍ଡାଲା ହାଇଜ୍ୟାକ୍ (ଆବେଗପୂର୍ଣ୍ଣ ପ୍ରତିକ୍ରିୟା)", "ତର୍କପୂର୍ଣ୍ଣ ଚିନ୍ତା ପୂର୍ବରୁ ମସ୍ତିଷ୍କର ଭାବପ୍ରବଣ କେନ୍ଦ୍ର ଅପ୍ରତ୍ୟାଶିତ କ୍ରୋଧ ସୃଷ୍ଟି କରିବା।", ["ଆବେଗ ନିୟନ୍ତ୍ରଣ କରନ୍ତୁ","ଧୈର୍ଯ୍ୟ ରଖନ୍ତୁ","ଶାନ୍ତ ଭାବରେ ପ୍ରତିକ୍ରିୟା ଦିଅନ୍ତୁ"]),
  as: createLocalizedRecord('as', "এমিগডালা হাইজেক (আৱেগিক আক্ৰমণ)", "যুক্তিগত চিন্তাৰ পূৰ্বেই মগজুৰ আৱেগিক কেন্দ্ৰই নিয়ন্ত্ৰণহীন খং বা ভয় সৃষ্টি কৰে।", ["খং নিয়ন্ত্ৰণ কৰক","কিছু সময় শান্ত থাকক","বিচাৰ-বিবেচনাৰে উত্তৰ দিয়ক"]),
};
