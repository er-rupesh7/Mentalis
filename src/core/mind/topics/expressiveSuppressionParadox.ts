import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_EXPRESSIVE_SUPPRESSION_PARADOX_EN: MindTopicDetail = {
  id: 'expressive_suppression_paradox',
  categoryId: 'emotions',
  slug: 'expressive-suppression-paradox',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 10,
  viewCount: 4000,
  shareCount: 330,
  bookmarkCount: 670,
  title: "The Expressive Suppression Paradox: The Hidden Cost of Bottling Up",
  subtitle: "James Gross’s emotion regulation research on why hiding outward feelings spikes internal physiological stress.",
  shortDescription: "The paradoxical finding that trying to conceal outward signs of emotion does not decrease emotional experience, but drastically increases cardiovascular strain and impairs memory.",
  oneLineExplanation: "Hiding your feelings from others doubles your internal heart rate and blood pressure.",

  summary30s: "Psychologist James Gross discovered that when individuals force a \"poker face\" during distressing events, their sympathetic nervous system goes into overdrive: heart rate accelerates, vasoconstriction increases, and working memory deteriorates, even while they look perfectly calm on the outside.",
  coreConcept: "Emotion regulation occurs across a temporal timeline: antecedent-focused regulation (like cognitive reappraisal) changes the emotional trajectory before it peaks, while response-focused suppression attempts to stifle the physical expression after the feeling has already erupted in the nervous system.",
  summary60s: "Suppressing an emotional reaction requires constant, active prefrontal inhibition. This cognitive effort consumes working memory resources, meaning that while suppressing emotion during a tough conversation, you actually remember significantly less of what was said. Furthermore, conversational partners register your suppression through unconscious mirror-neuron cues, causing their own blood pressure to spike.",
  quickTakeaways: ["Bottling up emotions does not reduce internal distress; it multiplies cardiovascular strain","Suppressing emotions consumes working memory, causing memory gaps of difficult events","Other people subconsciously detect suppression, triggering anxiety in your conversational partner","Cognitive reappraisal (changing the interpretation) cools the body without any suppression costs"],

  whyItHappens: "Inhibition requires continuous metabolic prefrontal energy to overpower autonomic motor and facial expressions.",
  evolutionaryMechanism: "Hiding fear or weakness in the presence of dominant predators or hostile rivals avoided attacks, but was only intended for brief tactical emergencies.",

  howItWorks: "Emotional event occurs -> Autonomic reaction begins -> Conscious motor inhibition clamps facial muscles -> Prefrontal cortex burns metabolic glucose -> Heart rate and blood pressure soar -> Cognitive performance drops.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Cognitive Reappraisal vs. Expressive Suppression",
    description: "Gross’s Process Model of Emotion Regulation comparing antecedent vs. response modulation.",
    analogySideA: {
      label: "Cognitive Reappraisal (Antecedent-Focused)",
      detail: "Reframes meaning early: \"They are stressed, not malicious.\" Heart rate stays calm, memory intact.",
    },
    analogySideB: {
      label: "Expressive Suppression (Response-Focused)",
      detail: "Clamps poker face on the outside: Heart rate spikes 20 bpm, internal cortisol surges, memory fails.",
    },
  },

  researchSummary: "Gross & John (2003, JPSP) and Gross (1998, Review of General Psychology) proved that habitual suppressors experience less positive emotion, greater depressive symptoms, and lower relationship satisfaction.",
  references: [
    {
      id: 'ref_expressive_suppression_paradox_01',
      title: "Individual Differences in Two Emotion Regulation Processes",
      citation: "Gross, J. J., & John, O. P. (2003). Journal of Personality and Social Psychology, 85(2), 348–362.",
      authors: "Gross, J. J. & John, O. P.",
      publicationYear: 2003,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1037/0022-3514.85.2.348",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_expressive_suppression_paradox_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Silent Poker Face in Chennai",
      narrativeContext: "Anand, a software team lead in Chennai, prided himself on never showing anger. When his manager publicly assigned his promised project to someone else, Anand kept a stone-cold smile. By evening, he had a splitting migraine, elevated blood pressure of 145/95, and couldn't recall what his team briefed him on that afternoon.",
      biasInAction: "Anand practiced extreme expressive suppression: he successfully masked his facial expression, but his body bore the full metabolic punishment of the inhibited rage.",
      optimalResponse: "Practice measured verbal expression or reappraisal: \"I need to share that I feel surprised and concerned about this decision. Let's schedule 15 minutes to discuss the transition.\"",
      reflectionPrompt: "Have you ever maintained a fake smile through a humiliating situation, only to feel utterly exhausted, drained, and headache-ridden hours later?",
    },
  ],

  examples: [
    {
      id: 'ex_expressive_suppression_paradox_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Silent Poker Face in Chennai",
      description: "Anand, a software team lead in Chennai, prided himself on never showing anger. When his manager publicly assigned his promised project to someone else...",
      takeaway: "Bottling up emotions does not reduce internal distress; it multiplies cardiovascular strain",
    },
  ],

  howToRecognize: "Clamping your lips, holding your breath, freezing your facial muscles, and feeling a rising pounding sensation in your chest while trying to look unaffected.",
  whereYouEncounterIt: "Corporate hierarchy politics, family gatherings with in-laws, customer service interactions, and formal ceremonies.",
  commonMisconceptions: "Myth: \"Maturity means having a poker face at all times.\" Fact: Constant emotional suppression leads to chronic hypertension, burnout, and social alienation.",
  limitationsAndControversies: "Brief suppression in front of an aggressive stranger or in a courtroom can be tactically protective, but as a permanent lifestyle it is toxic.",

  howToRespond: "Shift from Suppression to Reappraisal: instead of trying not to look angry, change what the event means in your head, or express your boundary in calm, articulate words.",
  psychologicalDefenses: [{"title":"The De-escalation Articulation","instruction":"Do not hide anger; verbalize it neutrally: \"I am feeling frustrated by this change, so I need a moment before we continue.\""},{"title":"Post-Event Somatic Discharge","instruction":"If you had to suppress feelings during a formal meeting, take a brisk 10-minute walk or do deep exhales right after to discharge cardiovascular pressure."}],

  practiceQuestions: [
    {
      id: 'pq_expressive_suppression_paradox_01',
      difficulty: 'intermediate',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "During a heated salary review, an executive forces a calm smile while feeling intense indignation. According to Gross’s research, what is happening physiologically?",
      scenarioText: "The executive looks composed to the board, but feels internally strained.",
      explanation: "Expressive suppression prevents facial movement but causes sympathetic nervous system hyperactivation, elevating blood pressure and impairing memory.",
      antidoteAdvice: "Use cognitive reappraisal or calm verbal assertion rather than physical expressive inhibition.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Their heart rate and blood pressure are dropping because smiling tricks the brain into calmness.",
          text: "Their heart rate and blood pressure are dropping because smiling tricks the brain into calmness.",
          feedbackText: "Incorrect. Forcing a fake smile while angry significantly increases cardiovascular strain.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Their cardiovascular arousal is spiking and their working memory of the conversation is deteriorating.",
          text: "Their cardiovascular arousal is spiking and their working memory of the conversation is deteriorating.",
          feedbackText: "Correct! Expressive suppression imposes severe physiological and cognitive costs.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Their emotional experience has completely vanished.",
          text: "Their emotional experience has completely vanished.",
          feedbackText: "Incorrect. The feeling remains fully active inside.",
        }
      ],
    },
  ],

  reflectionPrompt: "Who in your life do you feel safe enough around to express authentic vulnerability without having to wear a protective mask?",
  tags: ['Mentalab Mind', 'emotions'],
  relatedTopics: [],
  seoTitle: `${"The Expressive Suppression Paradox: The Hidden Cost of Bottling Up"} | Mentalab Mind`,
  seoDescription: "The paradoxical finding that trying to conceal outward signs of emotion does not decrease emotional experience, but drastically increases cardiovascular strain and impairs memory.",
  canonicalUrl: '/mind/emotions/expressive-suppression-paradox',
  ogImageUrl: '/images/mind/expressive-suppression-paradox.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Suppressing an emotional reaction requires constant, active prefrontal inhibition. This cognitive effort consumes working memory resources, meaning that while suppressing emotion during a tough conversation, you actually remember significantly less of what was said. Furthermore, conversational partners register your suppression through unconscious mirror-neuron cues, causing their own blood pressure to spike.",
};

export const TOPIC_EXPRESSIVE_SUPPRESSION_PARADOX_HINGLISH: MindTopicDetail = {
  ...TOPIC_EXPRESSIVE_SUPPRESSION_PARADOX_EN,
  title: "Expressive Suppression Paradox: Gussa Dabane Ka Bhaari Nuqsaan",
  subtitle: "Kyu jazbaat chupana aur \"poker face\" banana andar se BP aur heart rate badha deta hai.",
  shortDescription: "James Gross ki research: Jazbaat ko dabane se dukh kam nahi hota, balki sharir par do guna load padta hai.",
  oneLineExplanation: "Bahar se shaant dikhna, par andar se blood pressure ka aasmaan chhoona.",
  summary30s: "Log samajhte hain ki gussa ya dukh chupana mature hone ki nishani hai. Lekin psychologist James Gross ne prove kiya ki jab hum chehre par jhoothi muskaan rakhte hain, to hamara heart rate 20 bpm badh jata hai aur dimaag ki memory kamzor ho jati hai.",
  coreConcept: "Emotion regulation do tareeqe se hota hai: Ya to baat ko dekhne ka nazariya badal lo (reappraisal), ya fir chehre par emotion mat aane do (suppression). Chehre par emotion dabana sharir ko heart disease aur migraine ki taraf le jata hai.",
  summary60s: "Jab aap boss ya rishtedaar ke samne gussa daba kar smile karte hain, to dimaag ko facial muscles rokne me itni energy lagti hai ki aapki yaad-daasht kamzor ho jati hai. Samne wale ko bhi subconscious tor par lag jata hai ki kuch fake hai.",
  quickTakeaways: ["Feelings dabane se wo khatam nahi hoti, balki blood pressure badha deti hain","Poker face maintain karne me dimaag ki memory aur focus kharab hota hai","Samne wale ko aapki fakeness subconscious tor par detect ho jati hai","Nazariya badalna (Reappraisal) gussa dabane se 100 guna behtar hai"],
  howItWorks: "Gussa aaya -> Zabardasti smile banayi -> Prefrontal cortex ne muscles ko lock kiya -> Dil ki dhadkan aur cortisol badha -> Shaam ko headache aur exhaustion hua.",
  howToRespond: "Gussa dabao mat, balki calmly bol do: \"Mujhe yeh sun kar bura laga, hum ispe baad me baat karte hain.\" Aur meeting ke baad tezz walk karke physical tension nikaal do.",
  practiceQuestions: [
    {
      ...TOPIC_EXPRESSIVE_SUPPRESSION_PARADOX_EN.practiceQuestions[0],
      prompt: "Office me boss ne bina baat ke daanta. Aapne fake smile karke \"Yes sir\" bola par andar se aag lag rahi hai. Research ke mutabiq aapke sharir me kya ho raha hai?",
      explanation: "Expressive suppression se heart rate aur stress hormones tezi se badhte hain, jabki bahar sab normal lagta hai.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Aapka dimaag bilkul shant ho gaya hai kyuki smile karne se gussa gayab ho jata hai.",
          text: "Aapka dimaag bilkul shant ho gaya hai kyuki smile karne se gussa gayab ho jata hai.",
          feedbackText: "Galat. Yeh dangerous myth hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Aapka blood pressure aur heart rate spike ho raha hai aur dimaag thak raha hai.",
          text: "Aapka blood pressure aur heart rate spike ho raha hai aur dimaag thak raha hai.",
          feedbackText: "Sahi! Gussa dabane ka physical cost bohot high hota hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Aapki memory aur tez ho jayegi.",
          text: "Aapki memory aur tez ho jayegi.",
          feedbackText: "Galat. Memory kharab hoti hai.",
        }
      ],
    },
  ],
  seoTitle: `${"Expressive Suppression Paradox: Gussa Dabane Ka Bhaari Nuqsaan"} | Mentalab Mind`,
  seoDescription: "James Gross ki research: Jazbaat ko dabane se dukh kam nahi hota, balki sharir par do guna load padta hai.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_EXPRESSIVE_SUPPRESSION_PARADOX_EN,
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

export const TOPIC_EXPRESSIVE_SUPPRESSION_PARADOX: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_EXPRESSIVE_SUPPRESSION_PARADOX_EN,
  hinglish: TOPIC_EXPRESSIVE_SUPPRESSION_PARADOX_HINGLISH,
  hi: createLocalizedRecord('hi', "अभिव्यक्ति दमन विरोधाभास (Expressive Suppression)", "भावनाओं को दबाने और छिपाने से आंतरिक शारीरिक तनाव, रक्तचाप और मानसिक थकान कैसे बढ़ती है।", ["भावनाओं को दबाना हृदय संबंधी तनाव बढ़ाता है","दमन से स्मरण शक्ति कमजोर होती है","विचार बदलना दमन से अधिक प्रभावी है"]),
  gu: createLocalizedRecord('gu', "લાગણી દબાવવાનો વિરોધાભાસ", "લાગણીઓ છુપાવવાથી શરીરનું બ્લડ પ્રેશર અને તણાવ કેવી રીતે બમણો થાય છે.", ["લાગણી દબાવશો નહીં","ખોટો ચહેરો તણાવ વધારે છે","વિચારો બદલવા વધુ હિતાવહ છે"]),
  mr: createLocalizedRecord('mr', "भावना दडपण्याचा विरोधाभास", "भावना मनातल्या मनात दाबून ठेवल्याने शरीरावर आणि रक्तदाबावर कसा गंभीर परिणाम होतो.", ["भावना दडपल्याने रक्तदाब वाढतो","दडपशाहीमुळे स्मरणशक्ती घटते","योग्य शब्दात भावना व्यक्त करा"]),
  te: createLocalizedRecord('te', "భావోద్వేగ అణచివేత వైరుధ్యం", "భావాలను బలవంతంగా దాచడం వల్ల గుండెపోటు మరియు రక్తపోటు ప్రమాదం ఎలా పెరుగుతుంది.", ["భావాలను అణచివేయవద్దు","కృత్రిమ ప్రశాంతత ఒత్తిడిని పెంచుతుంది","ఆలోచనా సరళిని మార్చడం శ్రేయస్కరం"]),
  ta: createLocalizedRecord('ta', "உணர்ச்சி அடக்குமுறை முரண்பாடு", "உணர்வுகளை வெளியில் காட்டாமல் அடக்கி வைப்பது ரத்த அழுத்தத்தையும் மன அழுத்தத்தையும் எவ்வாறு இரட்டிப்பாக்குகிறது.", ["உணர்வுகளை அடக்காதீர்கள்","போலி புன்னகை உடலை பாதிக்கும்","உண்மையை பக்குவமாக பேசுங்கள்"]),
  kn: createLocalizedRecord('kn', "ಭಾವನೆ ನಿಗ್ರಹದ ವಿರೋಧಾಭಾಸ", "ಭಾವನೆಗಳನ್ನು ಅದುಮಿಟ್ಟುಕೊಳ್ಳುವುದರಿಂದ ರಕ್ತದೊತ್ತಡ ಮತ್ತು ದೈಹಿಕ ಆಯಾಸ ಹೇಗೆ ಹೆಚ್ಚುತ್ತದೆ.", ["ಭಾವನೆಗಳನ್ನು ಅದುಮಬೇಡಿ","ಮುಖವಾಡ ಧರಿಸುವುದು ಆಯಾಸ ತರುತ್ತದೆ","ಸ್ಪಷ್ಟವಾಗಿ ಸಂವಹನ ನಡೆಸಿ"]),
  ml: createLocalizedRecord('ml', "വികാര അടിച്ചമർത്തൽ വൈരുദ്ധ്യം", "വികാരങ്ങൾ പുറത്തു കാണിക്കാതെ ഉള്ളിലൊതുക്കുന്നത് രക്തസമ്മർദ്ദവും ആരോഗ്യപ്രശ്നങ്ങളും എങ്ങനെ വർദ്ധിപ്പിക്കുന്നു.", ["വികാരങ്ങൾ ഉള്ളിലൊതുക്കരുത്","വ്യാജ ശാന്തത അപകടമാണ്","ചിന്താഗതിയിൽ മാറ്റം വരുത്തുക"]),
  bn: createLocalizedRecord('bn', "আবেগ দমনের বৈপরীত্য", "আবেগ চেপে রাখলে কীভাবে অভ্যন্তরীণ রক্তচাপ, হৃদস্পন্দন এবং মানসিক অবসাদ দ্বিগুণ হয়।", ["আবেগ চেপে রাখবেন না","মুখোশ পরা মানসিক চাপ বাড়ায়","খোলাখুলি কথা বলাই শ্রেয়"]),
  pa: createLocalizedRecord('pa', "ਭਾਵਨਾਵਾਂ ਦਬਾਉਣ ਦਾ ਵਿਰੋਧਾਭਾਸ", "ਭਾਵਨਾਵਾਂ ਨੂੰ ਲੁਕਾਉਣ ਅਤੇ ਦਬਾਉਣ ਨਾਲ ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ ਅਤੇ ਸਰੀਰਕ ਤਣਾਅ ਕਿਵੇਂ ਵਧਦਾ ਹੈ।", ["ਭਾਵਨਾਵਾਂ ਨੂੰ ਦਬਾਓ ਨਾ","ਨਕਲੀ ਹਾਸਾ ਤਣਾਅ ਵਧਾਉਂਦਾ ਹੈ","ਸਹੀ ਤਰੀਕੇ ਨਾਲ ਪ੍ਰਗਟ ਕਰੋ"]),
  ur: createLocalizedRecord('ur', "جذبات دبانے کا تضاد (Expressive Suppression)", "جذبات کو چھپانے اور دبانے سے بلڈ پریشر اور جسمانی تناؤ میں کس طرح اضافہ ہوتا ہے۔", ["جذبات کو اندر نہ گھونٹیں","مصنوعی مسکراہٹ نقصان دہ ہے","سوچ کا رخ بدلنا بہتر ہے"]),
  or: createLocalizedRecord('or', "ଭାବନା ଦମନର ବିରୋଧାଭାସ", "ଭାବନାକୁ ଚାପି ରଖିବା ଦ୍ୱାରା ରକ୍ତଚାପ ଓ ଆଭ୍ୟନ୍ତରୀଣ ଚାପ କିପରି ବୃଦ୍ଧି ପାଏ।", ["ଭାବନାକୁ ଚାପି ରଖନ୍ତୁ ନାହିଁ","ନକଲି ଶାନ୍ତତା କ୍ଷତିକାରକ","ସ୍ୱାଭାବିକ ପ୍ରକାଶ ଶ୍ରେୟସ୍କର"]),
  as: createLocalizedRecord('as', "আৱেগ দমনৰ বৈপৰীত্য", "আৱেগ লুকুৱাই ৰখাৰ ফলত শৰীৰৰ ৰক্তচাপ আৰু মানসিক চাপ কেনেকৈ দুগুণ বৃদ্ধি পায়।", ["আৱেগক হেঁচি নাৰাখিব","কৃত্ৰিম শান্তভাৱে ক্ষতি কৰে","উপযুক্তভাৱে প্ৰকাশ কৰক"]),
};
