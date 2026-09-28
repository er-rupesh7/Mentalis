import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_EMOTIONAL_BIDS_REPAIR_EN: MindTopicDetail = {
  id: 'emotional_bids_repair',
  categoryId: 'relationships_comm',
  slug: 'emotional-bids-and-repair-attempts',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 9,
  viewCount: 3880,
  shareCount: 315,
  bookmarkCount: 645,
  title: "Emotional Bids & Repair Attempts: The Micro-Currency of Intimacy",
  subtitle: "John Gottman’s landmark research on turning toward connection and saving conversations mid-conflict.",
  shortDescription: "The fundamental micro-interactions that determine relationship success: responding to bids for connection and deploying timely de-escalation repair attempts during fights.",
  oneLineExplanation: "A relationship is built or destroyed in ordinary 5-second moments of attention.",

  summary30s: "Over 40 years at the University of Washington's \"Love Lab\", Dr. John Gottman discovered that couples who stay together turn toward each other’s bids for emotional connection 86% of the time, while couples who divorce do so only 33% of the time. Intimacy is not sustained by grand vacations, but by small moments of acknowledged attention.",
  coreConcept: "A \"bid\" is any verbal or nonverbal attempt to get attention, affection, humor, or support (e.g. \"Look at that pretty bird outside!\"). The partner can respond in three ways: Turning Toward (acknowledging enthusiastically), Turning Away (ignoring/glancing at phone), or Turning Against (snapping irritably). Additionally, \"Repair Attempts\" are verbal seatbelts deployed mid-fight to prevent physiological flooding.",
  summary60s: "Gottman discovered that master couples fight just as passionately as disasters, but they succeed because they deploy and accept repair attempts: humorous smiles, self-deprecating apologies, or physical touch. When an apology is offered (\"Hey, I was rude, let me try again\"), accepting it stops the heart-rate escalation and preserves relational safety.",
  quickTakeaways: ["Masters of relationships turn toward bids 86% of the time; disasters only 33%","Ignoring a bid (turning away) hurts connection far more than active arguing","Repair attempts are verbal circuit breakers that prevent marital flooding","The effectiveness of a repair attempt depends on the emotional bank account built beforehand"],

  whyItHappens: "Mammalian attachment systems continuously test for safety and reciprocity through low-stakes social pings.",
  evolutionaryMechanism: "In close-knit ancestral tribes, knowing which partner had your back in micro-moments was vital for reliable mutual defense.",

  howItWorks: "Partner makes bid (\"Look at this article\") -> Choice point -> Partner turns toward (\"That is fascinating, tell me more\") -> Emotional bank account grows -> Conflict resilience skyrockets.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Turning Toward vs. Turning Away from Micro-Bids",
    description: "How everyday 3-second responses determine long-term marital longevity.",
    analogySideA: {
      label: "Turning Toward (86% of Masters)",
      detail: "Looks up from laptop, makes eye contact, smiles: \"Wow, that looks interesting! What happened?\"",
    },
    analogySideB: {
      label: "Turning Away (33% of Disasters)",
      detail: "Stares silently at phone screen, mumbles \"uh-huh\", ignores the partner's bid for connection.",
    },
  },

  researchSummary: "Gottman & Silver (1999, The Seven Principles for Making Marriage Work) and Driver & Gottman (2004, Journal of Family Psychology) documented how bid response rates predict divorce with 90%+ statistical accuracy.",
  references: [
    {
      id: 'ref_emotional_bids_repair_01',
      title: "The Seven Principles for Making Marriage Work",
      citation: "Gottman, J. M., & Silver, N. (1999). Crown Publishers.",
      authors: "Gottman, J. M. & Silver, N.",
      publicationYear: 1999,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1037/0022-006X.68.5.759",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_emotional_bids_repair_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Evening Chai Moment in Kolkata",
      narrativeContext: "Anirban was scrolling LinkedIn while his wife Tanu served evening tea and said: \"Look at the rain on the balcony, doesn't it smell amazing?\" Anirban didn't look up and muttered: \"Hmm.\" Over five years, hundreds of these tiny missed bids turned their Kolkata apartment into a silent emotional desert.",
      biasInAction: "Anirban practiced chronic \"Turning Away\": he didn't attack Tanu, but his persistent lack of engagement eroded her emotional security.",
      optimalResponse: "Put the phone face down for 5 seconds, look her in the eye, and say: \"It really does; let’s sit out on the balcony for 10 minutes.\" This deposits currency in the emotional bank account.",
      reflectionPrompt: "When your partner or child shares a trivial observation, do you routinely look up and engage, or do you stay glued to your screen?",
    },
  ],

  examples: [
    {
      id: 'ex_emotional_bids_repair_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Evening Chai Moment in Kolkata",
      description: "Anirban was scrolling LinkedIn while his wife Tanu served evening tea and said: \"Look at the rain on the balcony, doesn't it smell amazing?\" Anirban d...",
      takeaway: "Masters of relationships turn toward bids 86% of the time; disasters only 33%",
    },
  ],

  howToRecognize: "Noticing small comments like \"Did you see that?\", sighs, gentle shoulder taps, or shared funny memes—these are all bids for connection.",
  whereYouEncounterIt: "Evening dinners, car rides, bedside conversations, and remote work spaces.",
  commonMisconceptions: "Myth: \"Great relationships are made by grand anniversary surprises.\" Fact: Daily micro-bids of attention are 100 times more predictive of marital stability than expensive vacations.",
  limitationsAndControversies: "When under intense work deadlines, it is impossible to catch every bid; turning away occasionally is normal as long as you circle back and repair.",

  howToRespond: "The 3-Second Turn: Whenever a loved one speaks to you, force yourself to make direct eye contact for at least 3 seconds before responding.",
  psychologicalDefenses: [{"title":"The Mid-Fight Repair Statement","instruction":"When an argument gets loud, insert a pre-agreed repair phrase: \"I love you, but we are both screaming. Can we pause and hold hands for 60 seconds?\""},{"title":"The Postponed Bid Reconnection","instruction":"If you are genuinely busy, don't ignore: \"I am in the middle of this email, but I want to hear this. Give me 10 minutes and let's talk.\""}],

  practiceQuestions: [
    {
      id: 'pq_emotional_bids_repair_01',
      difficulty: 'beginner',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "During a heated fight about finances, your partner suddenly stops, smiles weakly, and says: \"Hey, we are both starving and exhausted. I am sorry I raised my voice.\" What is the scientifically optimal response?",
      scenarioText: "You are still feeling angry and have 3 more counter-arguments prepared.",
      explanation: "This is a Gottman Repair Attempt. Accepting a repair attempt de-escalates physiological flooding and preserves the relationship; rejecting it leads to contempt.",
      antidoteAdvice: "Accept the repair attempt immediately, acknowledge the shared exhaustion, and pause the fight.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Say: \"Don't try to change the subject with food! You always do this when you are losing an argument!\"",
          text: "Say: \"Don't try to change the subject with food! You always do this when you are losing an argument!\"",
          feedbackText: "Incorrect. Rejecting a repair attempt pushes the conflict toward contempt and stonewalling.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Breathe, take their hand, and say: \"You are right. I am sorry too. Let’s eat first and finish this calmly later.\"",
          text: "Breathe, take their hand, and say: \"You are right. I am sorry too. Let’s eat first and finish this calmly later.\"",
          feedbackText: "Correct! Accepting repair attempts is the single biggest predictor of relationship longevity.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Roll your eyes and walk out of the house silently.",
          text: "Roll your eyes and walk out of the house silently.",
          feedbackText: "Incorrect. This triggers emotional abandonment panic.",
        }
      ],
    },
  ],

  reflectionPrompt: "What is your favorite \"repair phrase\" that helps you and your partner de-escalate tension during a disagreement?",
  tags: ['Mentalab Mind', 'relationships_comm'],
  relatedTopics: [],
  seoTitle: `${"Emotional Bids & Repair Attempts: The Micro-Currency of Intimacy"} | Mentalab Mind`,
  seoDescription: "The fundamental micro-interactions that determine relationship success: responding to bids for connection and deploying timely de-escalation repair attempts during fights.",
  canonicalUrl: '/mind/relationships-comm/emotional-bids-and-repair-attempts',
  ogImageUrl: '/images/mind/emotional-bids-and-repair-attempts.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "Gottman discovered that master couples fight just as passionately as disasters, but they succeed because they deploy and accept repair attempts: humorous smiles, self-deprecating apologies, or physical touch. When an apology is offered (\"Hey, I was rude, let me try again\"), accepting it stops the heart-rate escalation and preserves relational safety.",
};

export const TOPIC_EMOTIONAL_BIDS_REPAIR_HINGLISH: MindTopicDetail = {
  ...TOPIC_EMOTIONAL_BIDS_REPAIR_EN,
  title: "Emotional Bids & Repair: Rishto Ka Chota Chota Currency",
  subtitle: "John Gottman ki 40 saal ki research: Kaise 5 second ke micro-moments tay karte hain ki rishta chalega ya tootega.",
  shortDescription: "Ek doosre ke attention maangne ke chote signals (Bids) ko acknowledge karna aur ladaai me repair attempts accept karna.",
  oneLineExplanation: "Rishta mehenge gifts se nahi, balki mobile chhod kar 5 second dekhne se banta hai.",
  summary30s: "Dr. John Gottman ne dekha ki jo couples 40 saal sath rehte hain, wo din me choti-choti baaton par ek doosre ko 86% time attention dete hain (\"Turning toward\"). Jo log mobile me ghuse rehte hain aur partner ko ignore karte hain (\"Turning away\"), unka divorce hona 90% tay hota hai.",
  coreConcept: "Bid har wo choti baat hai jisme partner attention chahta hai (jaise: \"Dekho kitni pyaari baarish ho rahi hai!\"). Agar aap phone se nazar utha kar smile karte hain, to emotional bank account me paise jama hote hain. Ladai ke waqt maafi maangna \"Repair attempt\" kehlata hai.",
  summary60s: "Master couples bhi ladte hain, lekin ladai ke beech me koi ek bol deta hai: \"Chalo ladai rokte hain, dono ko bhookh lagi hai.\" Agar doosra partner is repair attempt ko accept kar leta hai, to rishta bach jata hai. Repair attempt ko ignore karna rishte ka murder karna hai.",
  quickTakeaways: ["Rishte bade vacations se nahi, balki roz ke 5 second ke dhyan se bante hain","Partner ki baat ko ignore karna ladne se bhi zyada toxic hota hai","Ladai ke beech me sorry ya mazaaq karna \"Repair Attempt\" hai, use accept karein","Emotional bank account bhara ho to badi se badi ladaai asani se sulajh jati hai"],
  howItWorks: "Partner ne kuch bola -> Phone chhod kar uski taraf dekha -> Trust badha -> Ladaai ke waqt ek ne bola \"Sorry main zyada bol gaya\" -> Doosre ne gale lagaya -> Rishta strong hua.",
  howToRespond: "3-Second Rule apnayein: Jab bhi partner ya bachha kuch bole, screen se nazar hata kar 3 second unki aankhon me dekh kar jawab dein.",
  practiceQuestions: [
    {
      ...TOPIC_EMOTIONAL_BIDS_REPAIR_EN.practiceQuestions[0],
      prompt: "Garma-garam behes ke beech partner ne bola: \"Sorry main gusse me chilla gaya, hum dono thak gaye hain, thoda paani peete hain.\" Kya karein?",
      explanation: "Yeh Gottman ka Repair Attempt hai. Isko accept karne se ladai turant de-escalate ho jati hai.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Bolo: \"Muddha mat bhatkao! Tum haar rahe ho isliye paani ka bahana bana rahe ho!\"",
          text: "Bolo: \"Muddha mat bhatkao! Tum haar rahe ho isliye paani ka bahana bana rahe ho!\"",
          feedbackText: "Galat. Repair attempt ko reject karna rishte ko barbaad karta hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Paani lein, shant ho jayein aur bolein: \"Haan yaar, main bhi zyada bol gaya tha.\"",
          text: "Paani lein, shant ho jayein aur bolein: \"Haan yaar, main bhi zyada bol gaya tha.\"",
          feedbackText: "Sahi! Repair accept karna hi mature rishto ki pehchan hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Chilla kar kamre ka darwaza band kar lena.",
          text: "Chilla kar kamre ka darwaza band kar lena.",
          feedbackText: "Galat. Yeh toxic stonewalling hai.",
        }
      ],
    },
  ],
  seoTitle: `${"Emotional Bids & Repair: Rishto Ka Chota Chota Currency"} | Mentalab Mind`,
  seoDescription: "Ek doosre ke attention maangne ke chote signals (Bids) ko acknowledge karna aur ladaai me repair attempts accept karna.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_EMOTIONAL_BIDS_REPAIR_EN,
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

export const TOPIC_EMOTIONAL_BIDS_REPAIR: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_EMOTIONAL_BIDS_REPAIR_EN,
  hinglish: TOPIC_EMOTIONAL_BIDS_REPAIR_HINGLISH,
  hi: createLocalizedRecord('hi', "भावनात्मक संकेत और समाधान (Bids & Repair Attempts)", "संबंधों में छोटे-छोटे भावनात्मक संकेतों पर ध्यान देने और विवाद के बीच समाधान के प्रयासों को स्वीकार करने का विज्ञान।", ["दैनिक छोटे क्षण बड़े उपहारों से अधिक महत्वपूर्ण हैं","संकेतों की अनदेखी करना संबंधों को खोखला करता है","विवाद के बीच माफी और शांति के प्रयासों को स्वीकार करें"]),
  gu: createLocalizedRecord('gu', "લાગણીઓના સંકેતો અને સમાધાન (Bids & Repair)", "રોજિંદા જીવનમાં સાથીદારના નાના સંકેતોને મહત્વ આપવું અને ઝઘડા વખતે સમાધાન સ્વીકારવું.", ["નાની પળોમાં પ્રેમ દર્શાવો","સાથીદારની અવગણના ન કરો","સમાધાનના પ્રયાસો સ્વીકારો"]),
  mr: createLocalizedRecord('mr', "भावनिक संकेत आणि संवाद दुरुस्ती (Bids & Repair)", "नात्यांमध्ये रोजच्या छोट्या क्षणांमध्ये लक्ष देणे आणि भांडणाच्या वेळी समेट घडवून आणण्याचे महत्त्व.", ["छोट्या क्षणांना महत्त्व द्या","दुर्लक्ष करणे टाळा","माफी आणि समेटाचे प्रयत्न स्वीकारा"]),
  te: createLocalizedRecord('te', "భావోద్వేగ ఆహ్వానాలు మరియు పరిష్కారాలు", "సంబంధాలలో రోజువారీ చిన్నపాటి శ్రద్ధ మరియు గొడవల సమయంలో సర్దుబాటు ప్రయత్నాల ప్రాముఖ్యత.", ["చిన్న క్షణాలను గుర్తించండి","నిర్లక్ష్యం చేయవద్దు","సర్దుబాటు ప్రయత్నాలను అంగీకరించండి"]),
  ta: createLocalizedRecord('ta', "உணர்ச்சி சமிக்ஞைகளும் சமரசங்களும்", "உறவுகளில் அன்றாட சிறு கவனங்களும் சண்டைகளின் போது செய்யப்படும் சமரச முயற்சிகளும்.", ["சிறு தருணங்களை கவனியுங்கள்","புறக்கணிக்காதீர்கள்","சமரச முயற்சிகளை ஏற்றுக்கொள்ளுங்கள்"]),
  kn: createLocalizedRecord('kn', "ಭಾವನಾತ್ಮಕ ಸಂಕೇತಗಳು ಮತ್ತು ಸರಿಪಡಿಸುವಿಕೆ", "ದೈನಂದಿನ ಸಣ್ಣಪುಟ್ಟ ಗಮನ ಮತ್ತು ಜಗಳಗಳ ಸಮಯದಲ್ಲಿ ರಾಜಿ ಪ್ರಯತ್ನಗಳ ಪ್ರಾಮುಖ್ಯತೆ.", ["ಸಣ್ಣ ಕ್ಷಣಗಳನ್ನು ಗೌರವಿಸಿ","ಅಲಕ್ಷ್ಯ ಮಾಡಬೇಡಿ","ರಾಜಿ ಪ್ರಯತ್ನಗಳನ್ನು ಒಪ್ಪಿಕೊಳ್ಳಿ"]),
  ml: createLocalizedRecord('ml', "വൈകാരിക സൂചനകളും അനുരഞ്ജന ശ്രമങ്ങളും", "ബന്ധങ്ങളിൽ ദൈനംദിന ചെറിയ ശ്രദ്ധയും വഴക്കുകൾക്കിടയിലെ അനുരഞ്ജന ശ്രമങ്ങളും ചെലുത്തുന്ന സ്വാധീനം.", ["ചെറിയ നിമിഷങ്ങൾ ശ്രദ്ധിക്കുക","അവഗണിക്കരുത്","അനുരഞ്ജന ശ്രമങ്ങൾ സ്വീകരിക്കുക"]),
  bn: createLocalizedRecord('bn', "মানসিক সংকেত এবং পুনর্মিলন প্রচেষ্টা", "সম্পর্কের দৈনন্দিন ছোট ছোট মুহূর্তের মনোযোগ এবং ঝগড়ার মাঝে পুনর্মিলন প্রচেষ্টার বিজ্ঞান।", ["ছোট মুহূর্তগুলোকে গুরুত্ব দিন","উপেক্ষা করবেন না","পুনর্মিলনের প্রস্তাব গ্রহণ করুন"]),
  pa: createLocalizedRecord('pa', "ਭਾਵਨਾਤਮਕ ਸੰਕੇਤ ਅਤੇ ਸੁਲ੍ਹਾ ਦੇ ਯਤਨ", "ਰਿਸ਼ਤਿਆਂ ਵਿੱਚ ਰੋਜ਼ਾਨਾ ਦੇ ਛੋਟੇ ਪਲਾਂ ਵਿੱਚ ਧਿਆਨ ਦੇਣਾ ਅਤੇ ਲੜਾਈ ਵੇਲੇ ਸੁਲ੍ਹਾ ਦੀ ਕੋਸ਼ਿਸ਼ ਨੂੰ ਸਵੀਕਾਰ ਕਰਨਾ।", ["ਛੋਟੇ ਪਲਾਂ ਦੀ ਕਦਰ ਕਰੋ","ਅਣਦੇਖਾ ਨਾ ਕਰੋ","ਸੁਲ੍ਹਾ ਦੇ ਯਤਨਾਂ ਨੂੰ ਅਪਣਾਓ"]),
  ur: createLocalizedRecord('ur', "جذباتی اشارے اور صلح کی کوششیں (Bids & Repair)", "روزمرہ کے رشتوں میں چھوٹی چھوٹی باتوں پر توجہ دینا اور لڑائی کے دوران صلح کو قبول کرنا۔", ["چھوٹے لمحات کو اہمیت دیں","نظر انداز نہ کریں","صلح کی پیشکش قبول کریں"]),
  or: createLocalizedRecord('or', "ଭାବନାଗତ ସଙ୍କେତ ଓ ସମାଧାନର ପ୍ରୟାସ", "ସମ୍ପର୍କରେ ଦୈନନ୍ଦିନ ଛୋଟ ଛୋଟ ମୁହୂର୍ତ୍ତ ପ୍ରତି ଧ୍ୟାନ ଏବଂ କଳହ ମଧ୍ୟରେ ସମାଧାନର ପ୍ରୟାସ।", ["ଛୋଟ ମୁହୂର୍ତ୍ତକୁ ଗୁରୁତ୍ୱ ଦିଅନ୍ତୁ","ଅଣଦେଖା କରନ୍ତୁ ନାହିଁ","ସମାଧାନ ପ୍ରସ୍ତାବ ଗ୍ରହଣ କରନ୍ତୁ"]),
  as: createLocalizedRecord('as', "আৱেগিক সংকেত আৰু মিলামিছাৰ প্ৰয়াস", "দৈনন্দিন জীৱনত সংগীৰ সৰু সৰু কথাত গুৰুত্ব দিয়া আৰু কাজিয়াৰ মাজত মিলামিছাৰ প্ৰচেষ্টা গ্ৰহণ কৰা।", ["ক্ষুদ্ৰ মুহূৰ্তক মূল্য দিয়ক","অৱহেলা নকৰিব","শান্তিৰ প্ৰচেষ্টা স্বীকাৰ কৰক"]),
};
