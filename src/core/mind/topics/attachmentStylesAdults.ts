import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_ATTACHMENT_STYLES_ADULTS_EN: MindTopicDetail = {
  id: 'attachment_styles_adults',
  categoryId: 'relationships_comm',
  slug: 'attachment-styles-adults',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 5,
  viewCount: 3400,
  shareCount: 255,
  bookmarkCount: 545,
  title: "Adult Attachment Theory: Anxious, Avoidant, and Secure Bonds",
  subtitle: "How early childhood caregiver dynamics shape romantic intimacy, conflict styles, and emotional security.",
  shortDescription: "The psychological framework developed by Bowlby, Ainsworth, and Hazan-Shaver describing how internal working models of trust govern adult relationship intimacy.",
  oneLineExplanation: "Your relationship conflict style is often an echo of your earliest childhood attachment blueprint.",

  summary30s: "Originating from John Bowlby’s attachment theory and adapted for adults by Hazan and Shaver in 1987, adult attachment styles (Secure, Anxious-Preoccupied, Dismissive-Avoidant, and Fearful-Avoidant) explain why some people crave constant closeness while others flee at the first sign of emotional intimacy.",
  coreConcept: "Attachment styles reflect neural \"internal working models\" about whether others are trustworthy and whether oneself is worthy of love. In romantic relationships, stress activates the attachment system: anxious individuals hyperactivate (protest behavior, clinging), avoidants deactivate (stonewalling, emotional distancing), while secures communicate vulnerably.",
  summary60s: "The classic \"Anxious-Avoidant Trap\" occurs when an anxious partner senses distance and demands closeness, which triggers the avoidant partner’s fear of engulfment, causing them to pull away further. Recognizing that these are automated survival adaptations rather than malicious intent is the first step toward \"Earned Security.\"",
  quickTakeaways: ["Attachment styles are learned coping blueprints, not immutable biological destiny","The Anxious-Avoidant trap is the most common and exhausting relational dynamic","Protest behaviors (calling 30 times, silent treatment) are maladaptive cries for safety","Earned Security can be developed through self-awareness and secure relationship modeling"],

  whyItHappens: "Infant survival depended 100% on caregiver proximity; inconsistent or cold caregiving forced infants to develop hyperactivating or deactivating strategies.",
  evolutionaryMechanism: "In dangerous ancestral environments, having individuals with hyper-vigilance (anxious) and self-reliance (avoidant) provided distinct tribal survival advantages.",

  howItWorks: "Relationship friction occurs -> Attachment system triggers -> Anxious feels abandoned (demands attention) -> Avoidant feels trapped (shuts down) -> Escalation spiral -> Eventual emotional exhaustion.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "The Anxious-Avoidant Feedback Loop",
    description: "How complementary attachment insecurities feed and amplify each other.",
    analogySideA: {
      label: "Anxious Partner (Hyperactivation)",
      detail: "\"You are emotionally distant; I must call and text until I confirm you still love me.\"",
    },
    analogySideB: {
      label: "Avoidant Partner (Deactivation)",
      detail: "\"You are suffocating me with demands; I must withdraw into my cave to feel safe.\"",
    },
  },

  researchSummary: "Hazan & Shaver (1987, JPSP) and Mikulincer & Shaver (2007) proved that roughly 50% of adults are Secure, 20% Anxious, 25% Avoidant, and 5% Fearful, strongly predicting relationship longevity.",
  references: [
    {
      id: 'ref_attachment_styles_adults_01',
      title: "Romantic Love Conceptualized as an Attachment Process",
      citation: "Hazan, C., & Shaver, P. (1987). Journal of Personality and Social Psychology, 52(3), 511–524.",
      authors: "Hazan, C. & Shaver, P.",
      publicationYear: 1987,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1037/0022-3514.52.3.511",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_attachment_styles_adults_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The WhatsApp Blue Tick Panic in Delhi",
      narrativeContext: "Kavita and Siddharth had been dating in South Delhi for 8 months. When Siddharth didn't reply to a message for three hours despite being online, Kavita sent 14 texts accusing him of losing interest. Siddharth felt overwhelmed, switched his phone off, and didn't call for two days.",
      biasInAction: "Kavita's anxious attachment triggered catastrophic abandonment fears; Siddharth's avoidant attachment triggered defensive deactivation.",
      optimalResponse: "Kavita self-soothes her physiological panic without texting; Siddharth communicates clearly: \"I am in a tight deadline meeting until 7 PM; I love you and will call you as soon as I finish.\"",
      reflectionPrompt: "When you feel insecure in a relationship, is your natural instinct to pursue and demand connection, or to retreat and become self-reliant?",
    },
  ],

  examples: [
    {
      id: 'ex_attachment_styles_adults_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The WhatsApp Blue Tick Panic in Delhi",
      description: "Kavita and Siddharth had been dating in South Delhi for 8 months. When Siddharth didn't reply to a message for three hours despite being online, Kavit...",
      takeaway: "Attachment styles are learned coping blueprints, not immutable biological destiny",
    },
  ],

  howToRecognize: "Notice if relationship disagreements quickly trigger either a panic of abandonment (anxious) or a feeling of suffocation and urge to run away (avoidant).",
  whereYouEncounterIt: "Dating apps, marriage negotiations, long-distance relationships, and parent-child conflicts.",
  commonMisconceptions: "Myth: \"Avoidant people have no feelings and don't want love.\" Fact: Avoidant individuals desire intimacy equally, but experience severe physiological panic when intimacy requires vulnerability.",
  limitationsAndControversies: "Attachment styles are spectrum tendencies, not rigid diagnostic disorders; people can be secure with friends but anxious with romantic partners.",

  howToRespond: "Practice Secure Communication: State your emotional need directly without protest behavior: \"I am feeling disconnected right now and would love 15 minutes of uninterrupted conversation tonight.\"",
  psychologicalDefenses: [{"title":"The Anti-Protest Pause","instruction":"If you feel the urge to send angry paragraphs or give the silent treatment, wait 2 hours until your nervous system calms down."},{"title":"The Reassurance Bridge","instruction":"If you need space, always provide a clear return time: \"I need 30 minutes to calm down, and I will be back at 8:00 PM to talk.\""}],

  practiceQuestions: [
    {
      id: 'pq_attachment_styles_adults_01',
      difficulty: 'intermediate',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "During an argument, your partner shuts down and says \"I can't deal with this right now\" and looks away. As an emotionally intelligent communicator, what is the best interpretation?",
      scenarioText: "Your partner’s heart rate is elevated and they appear emotionally frozen.",
      explanation: "Avoidant withdrawal during conflict is usually a physiological deactivation response to flooding, not callous indifference. Demanding immediate engagement worsens the shutdown.",
      antidoteAdvice: "Respect the need for biological de-escalation while agreeing on a specific time to resume the discussion.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Follow them from room to room demanding they answer your questions immediately.",
          text: "Follow them from room to room demanding they answer your questions immediately.",
          feedbackText: "Incorrect. This intensifies physiological flooding.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Say: \"I see you are overwhelmed. Let’s take a 20-minute break, and let’s sit down together at 8:30 PM to resolve this.\"",
          text: "Say: \"I see you are overwhelmed. Let’s take a 20-minute break, and let’s sit down together at 8:30 PM to resolve this.\"",
          feedbackText: "Correct! This provides psychological safety and structured reconnection.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Pack your bags and threaten divorce to force them to speak.",
          text: "Pack your bags and threaten divorce to force them to speak.",
          feedbackText: "Incorrect. This is destructive protest behavior.",
        }
      ],
    },
  ],

  reflectionPrompt: "How can you offer clear, predictable reassurance to the people you care about when you are feeling busy or stressed?",
  tags: ['Mentalab Mind', 'relationships_comm'],
  relatedTopics: [],
  seoTitle: `${"Adult Attachment Theory: Anxious, Avoidant, and Secure Bonds"} | Mentalab Mind`,
  seoDescription: "The psychological framework developed by Bowlby, Ainsworth, and Hazan-Shaver describing how internal working models of trust govern adult relationship intimacy.",
  canonicalUrl: '/mind/relationships-comm/attachment-styles-adults',
  ogImageUrl: '/images/mind/attachment-styles-adults.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "The classic \"Anxious-Avoidant Trap\" occurs when an anxious partner senses distance and demands closeness, which triggers the avoidant partner’s fear of engulfment, causing them to pull away further. Recognizing that these are automated survival adaptations rather than malicious intent is the first step toward \"Earned Security.\"",
};

export const TOPIC_ATTACHMENT_STYLES_ADULTS_HINGLISH: MindTopicDetail = {
  ...TOPIC_ATTACHMENT_STYLES_ADULTS_EN,
  title: "Adult Attachment Theory: Pyaar Me Hum Kyu Darrte Hain",
  subtitle: "Bachpan ke anubhav kaise tay karte hain ki hum relationship me chipakne lagte hain ya bhaagne lagte hain.",
  shortDescription: "John Bowlby aur Hazan-Shaver ki psychological theory: Anxious aur Avoidant attachment styles kaise rishto ko affect karti hain.",
  oneLineExplanation: "Rishto ke jhagde aksar bachpan ke purane darr ka reflection hote hain.",
  summary30s: "Attachment theory batati hai ki log pyaar me do tarah se react karte hain: Anxious log jinko lagta hai samne wala chhod kar chala jayega, aur Avoidant log jinko lagta hai pyaar unki azaadi cheen lega. In dono ka rishta sabse exhausting hota hai.",
  coreConcept: "Stress me hamara dimaag bachpan ka survival mode chalu kar deta hai. Anxious insaan baar-baar call karke reassurance chahta hai (protest behavior), jabki avoidant insaan phone switch off karke akelepan me bhaagta hai.",
  summary60s: "Agar aapka partner message ka reply na aane par gussa ho jata hai, to wo bura insaan nahi balki anxious attachment se lad raha hai. Aur agar koi ladai ke waqt chup ho jata hai, to wo pathar dil nahi balki overwhelmed ho chuka hai. Dono ko samjhna hi mature rishta banata hai.",
  quickTakeaways: ["Attachment styles bachpan ke blueprints hain, par unhe mature communication se badla ja sakta hai","Anxious-Avoidant loop rishton ka sabse common aur thaka dene wala pattern hai","Gusse me 50 messages bhejna ya bilkul baat band karna (Silent treatment) dono bachkaana tareeqe hain","Space maangte waqt hamesha waqt batao: \"Main 1 ghante me aakar baat karunga\""],
  howItWorks: "Jhagda hua -> Anxious ko laga \"yeh mujhe chhod dega\" (over-messaging shuru) -> Avoidant ko laga \"meri azaadi khatam\" (phone band kiya) -> Jhagda badh gaya.",
  howToRespond: "Direct baat karein: \"Mujhe abhi insecure feel ho raha hai, kya hum 10 minute baat kar sakte hain?\" Aur agar space chahiye to bolen: \"Main 30 minute baad aakar baat karta hu.\"",
  practiceQuestions: [
    {
      ...TOPIC_ATTACHMENT_STYLES_ADULTS_EN.practiceQuestions[0],
      prompt: "Ladaai ke waqt aapka partner bolta hai \"Mujhe abhi baat nahi karni\" aur chup ho jata hai. Sahi reaction kya hoga?",
      explanation: "Jab koi overwhelmed ho jata hai to usse 20-30 minute ka break chahiye hota hai taaki wo shant ho sake.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Uske peeche-peeche jao aur bolo jab tak jawab nahi doge main jane nahi dunga.",
          text: "Uske peeche-peeche jao aur bolo jab tak jawab nahi doge main jane nahi dunga.",
          feedbackText: "Galat. Isse samne wala aur zyada shut down hoga.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Bolo: \"Theek hai, 20 minute ka break lete hain, 9 baje chai ke sath baat karenge.\"",
          text: "Bolo: \"Theek hai, 20 minute ka break lete hain, 9 baje chai ke sath baat karenge.\"",
          feedbackText: "Sahi! Yeh space aur reassurance dono provide karta hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Turant status laga do ki single hona hi behtar hai.",
          text: "Turant status laga do ki single hona hi behtar hai.",
          feedbackText: "Galat. Yeh childish protest behavior hai.",
        }
      ],
    },
  ],
  seoTitle: `${"Adult Attachment Theory: Pyaar Me Hum Kyu Darrte Hain"} | Mentalab Mind`,
  seoDescription: "John Bowlby aur Hazan-Shaver ki psychological theory: Anxious aur Avoidant attachment styles kaise rishto ko affect karti hain.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_ATTACHMENT_STYLES_ADULTS_EN,
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

export const TOPIC_ATTACHMENT_STYLES_ADULTS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_ATTACHMENT_STYLES_ADULTS_EN,
  hinglish: TOPIC_ATTACHMENT_STYLES_ADULTS_HINGLISH,
  hi: createLocalizedRecord('hi', "वयस्क लगाव सिद्धांत (Adult Attachment Theory)", "बचपन के अनुभव कैसे वयस्क प्रेम संबंधों में निकटता, सुरक्षा और विवादों को प्रभावित करते हैं।", ["लगाव शैलियाँ सीखी हुई प्रवृत्तियाँ हैं","चिंतित और पलायनवादी चक्र सबसे आम है","स्पष्ट और सुरक्षित संवाद से बदलाव संभव है"]),
  gu: createLocalizedRecord('gu', "પુખ્ત જોડાણ સિદ્ધાંત (Attachment Theory)", "બાળપણના અનુભવો પુખ્ત વયના સંબંધોમાં વિશ્વાસ અને ભયને કેવી રીતે આકાર આપે છે.", ["સંબંધોની શૈલી સમજો","અસલામતી દૂર કરો","ખુલ્લી વાતચીત કરો"]),
  mr: createLocalizedRecord('mr', "प्रौढ भावनिक अनुबंध सिद्धांत", "लहानपणीचे अनुभव प्रौढ वयातील नातेसंबंधांमधील जवळीक आणि संवादावर कसा प्रभाव टाकतात.", ["भावनिक शैली ओळखा","संवादात स्पष्टता ठेवा","सुरक्षित नातेसंबंध जोपासा"]),
  te: createLocalizedRecord('te', "వయోజన అనుబంధ సిద్ధాంతం (Attachment Theory)", "బాల్య అనుభవాలు పెద్దయ్యాక ప్రేమ సంబంధాలలో భద్రత మరియు నమ్మకాన్ని ఎలా నిర్దేశిస్తాయి.", ["అనుబంధ శైలిని గుర్తించండి","అభద్రతా భావాన్ని అధిగమించండి","స్పష్టమైన సంభాషణ అవసరం"]),
  ta: createLocalizedRecord('ta', "வயதுவந்தோர் பிணைப்புக் கோட்பாடு", "குழந்தைப் பருவ அனுபவங்கள் எவ்வாறு பெரியவர்களின் காதல் மற்றும் திருமண உறவுகளை பாதிக்கின்றன.", ["பிணைப்பு முறையை புரிந்து கொள்ளுங்கள்","பயத்தை தவிருங்கள்","வெளிப்படையான உரையாடல் நன்று"]),
  kn: createLocalizedRecord('kn', "ವಯಸ್ಕ ಬಾಂಧವ್ಯ ಸಿದ್ಧಾಂತ (Attachment Theory)", "ಬಾಲ್ಯದ ಅನುಭವಗಳು ವಯಸ್ಕರ ಪ್ರೇಮ ಮತ್ತು ವೈವಾಹಿಕ ಸಂಬಂಧಗಳ ಮೇಲೆ ಹೇಗೆ ಪ್ರಭಾವ ಬೀರುತ್ತವೆ.", ["ಬಾಂಧವ್ಯದ ಶೈಲಿಯನ್ನು ಅರಿಯಿರಿ","ಅಭದ್ರತೆಯನ್ನು ದೂರವಿಡಿ","ನೇರ ಸಂವಹನ ನಡೆಸಿ"]),
  ml: createLocalizedRecord('ml', "മുതിർന്നവരിലെ അറ്റാച്ച്മെന്റ് സിദ്ധാന്തം", "കുട്ടിക്കാലത്തെ അനുഭവങ്ങൾ മുതിർന്നവരുടെ പ്രണയബന്ധങ്ങളെയും വിവാഹജീവിതത്തെയും എങ്ങനെ സ്വാധീനിക്കുന്നു.", ["വൈകാരിക ശൈലി തിരിച്ചറിയുക","അരക്ഷിതാവസ്ഥ മാറ്റുക","തുറന്ന സംസാരം ശീലിക്കുക"]),
  bn: createLocalizedRecord('bn', "প্রাপ্তবয়স্কদের সংযুক্তি তত্ত্ব", "শৈশবের অভিজ্ঞতা কীভাবে পরিণত বয়সের প্রেমের সম্পর্কে বিশ্বাস এবং টানাপোড়েন তৈরি করে।", ["মানসিক প্যাটার্ন বুঝুন","ভয় এড়িয়ে চলুন","খোলামেলা কথা বলুন"]),
  pa: createLocalizedRecord('pa', "ਬਾਲਗ ਲਗਾਓ ਸਿਧਾਂਤ (Attachment Theory)", "ਬਚਪਨ ਦੇ ਤਜਰਬੇ ਕਿਵੇਂ ਵੱਡੇ ਹੋ ਕੇ ਰਿਸ਼ਤਿਆਂ ਵਿੱਚ ਨੇੜਤਾ ਅਤੇ ਵਿਵਾਦਾਂ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਦੇ ਹਨ।", ["ਲਗਾਓ ਦੀ ਸ਼ੈਲੀ ਨੂੰ ਪਛਾਣੋ","ਡਰ ਅਤੇ ਸ਼ੱਕ ਛੱਡੋ","ਸਾਫ਼ ਗੱਲਬਾਤ ਕਰੋ"]),
  ur: createLocalizedRecord('ur', "بالغوں کا وابستگی کا نظریہ (Attachment Theory)", "بچپن کے تجربات کس طرح بالغ رشتوں میں قربت، جھجک اور بے چینی کو جنم دیتے ہیں۔", ["جذباتی انداز کو سمجھیں","عدم تحفظ پر قابو پائیں","واضح بات چیت اپنائیں"]),
  or: createLocalizedRecord('or', "ପ୍ରାପ୍ତବୟସ୍କ ଆସକ୍ତି ତତ୍ତ୍ୱ", "ବାଲ୍ୟକାଳର ଅନୁଭୂତି କିପରି ବୟସ୍କ ସମ୍ପର୍କରେ ନିରାପତ୍ତା ଓ ବିଶ୍ୱାସକୁ ପ୍ରଭାବିତ କରେ।", ["ସମ୍ପର୍କ ଶୈଳୀ ବୁଝନ୍ତୁ","ଅସୁରକ୍ଷିତ ଭାବନା ଦୂର କରନ୍ତୁ","ସ୍ପଷ୍ଟ ଆଲୋଚନା କରନ୍ତୁ"]),
  as: createLocalizedRecord('as', "প্ৰাপ্তবয়স্কৰ আসক্তি তত্ত্ব", "শৈশৱৰ অভিজ্ঞতাই কেনেকৈ প্ৰাপ্তবয়স্কৰ বৈবাহিক আৰু প্ৰেমৰ সম্পৰ্কসমূহ গঢ় দিয়ে।", ["সম্পৰ্কৰ ধৰণ বুজি লওক","ভয় আৰু দ্বিধা এৰক","স্পষ্ট যোগাযোগ বজাই ৰাখক"]),
};
