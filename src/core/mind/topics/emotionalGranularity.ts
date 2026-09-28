import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_EMOTIONAL_GRANULARITY_EN: MindTopicDetail = {
  id: 'emotional_granularity',
  categoryId: 'emotions',
  slug: 'emotional-granularity',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 9,
  viewCount: 3880,
  shareCount: 315,
  bookmarkCount: 645,
  title: "Emotional Granularity: Why Naming Nuanced Feelings Calms the Brain",
  subtitle: "Lisa Feldman Barrett’s theory of constructed emotion and the neural calming effect of precise emotional vocabulary.",
  shortDescription: "The ability to construct and differentiate specific, nuanced emotional experiences rather than lumping feelings into generic categories like \"bad\" or \"stressed\".",
  oneLineExplanation: "Moving from \"I feel terrible\" to \"I feel professionally discredited and envious.\"",

  summary30s: "Neuroscientist Lisa Feldman Barrett discovered that individuals with high emotional granularity experience less physical distress, drink less under stress, and recover from trauma faster. Pinpointing exact feelings allows the brain to select targeted behavioral remedies rather than firing generic panic alarms.",
  coreConcept: "Emotions are not hardwired circuits triggered passively; they are concepts constructed in real-time by the brain using interoceptive sensations and linguistic concepts. When you label an ambiguous chest tightness as \"indignant frustration\" rather than generic \"anger\", your brain constructs a precise action plan, reducing autonomic arousal.",
  summary60s: "When people say \"I am stressed,\" the brain treats it as a massive, undefined emergency. But if you differentiate that stress into \"I am feeling time-pressured because of a deadline\" vs. \"I am feeling socially rejected because of an email\", the prefrontal cortex immediately engages targeted coping strategies. Granularity reduces the metabolic cost of emotion regulation.",
  quickTakeaways: ["Generic emotional labels (\"bad\", \"stressed\", \"fine\") amplify autonomic anxiety","Precise vocabulary (\"chagrined\", \"wistful\", \"overwhelmed\", \"resentful\") calms the amygdala","People with high granularity require 40% less medication and self-medicate less with alcohol","Expanding your emotional vocabulary directly upgrades your emotional regulation power"],

  whyItHappens: "Linguistic concepts allow the brain to categorize sensory inputs efficiently, reducing neural prediction errors and metabolic strain.",
  evolutionaryMechanism: "Complex social alliances required nuanced emotional signaling and targeted behavioral calibration rather than crude binary fight-or-flight reactions.",

  howItWorks: "Body experiences high arousal -> Brain searches conceptual dictionary -> Low granularity defaults to \"I feel bad\" -> Panic escalates -> High granularity selects \"I feel professional envy\" -> Constructive solution chosen.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Generic Distress vs. Granular Emotional Precision",
    description: "How linguistic precision guides prefrontal regulation of physiological arousal.",
    analogySideA: {
      label: "Low Granularity (Blunt Categorization)",
      detail: "\"I feel completely awful and stressed out!\" -> Brain has no specific fix -> Free-floating panic.",
    },
    analogySideB: {
      label: "High Granularity (Precision Labeling)",
      detail: "\"I feel humiliated that my junior was promoted before me.\" -> Brain recognizes specific issue -> Constructive action plan formed.",
    },
  },

  researchSummary: "Barrett et al. (2001, JPSP) and Kashdan et al. (2015, Current Directions in Psychological Science) demonstrated that high emotional granularity buffers against clinical depression, impulsive aggression, and somatic illness.",
  references: [
    {
      id: 'ref_emotional_granularity_01',
      title: "Knowing What You're Feeling and Knowing What to Do About It",
      citation: "Barrett, L. F., et al. (2001). Journal of Personality and Social Psychology, 81(4), 713–725.",
      authors: "Barrett, L. F., Gross, J., Christensen, T. C., & Benvenuto, M.",
      publicationYear: 2001,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1037/0022-3514.81.4.713",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_emotional_granularity_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Vague \"Depression\" in a Mumbai Agency",
      narrativeContext: "Kunal, a copywriter in Mumbai, felt a heavy grey fog every Sunday evening, which he labeled \"chronic depression\". Working with a cognitive therapist, he dissected the fog: it wasn’t sadness, but a mix of boredom with routine ads, resentment toward his micro-managing director, and dread of a 90-minute commute.",
      biasInAction: "Kunal had low emotional granularity, lumping complex situational dissatisfactions into a medicalized global label (\"depression\") which left him feeling helpless.",
      optimalResponse: "By distinguishing between boredom, resentment, and commute exhaustion, Kunal negotiated a hybrid schedule and pitched creative experimental campaigns, resolving the issue.",
      reflectionPrompt: "When you tell someone you are \"stressed\", what are the three distinct emotional ingredients actually brewing beneath that word?",
    },
  ],

  examples: [
    {
      id: 'ex_emotional_granularity_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Vague \"Depression\" in a Mumbai Agency",
      description: "Kunal, a copywriter in Mumbai, felt a heavy grey fog every Sunday evening, which he labeled \"chronic depression\". Working with a cognitive therapist, ...",
      takeaway: "Generic emotional labels (\"bad\", \"stressed\", \"fine\") amplify autonomic anxiety",
    },
  ],

  howToRecognize: "Notice when you default to generic one-word summaries (\"angry\", \"upset\", \"stressed\", \"okay\") instead of articulating specific nuanced feelings.",
  whereYouEncounterIt: "Therapy, couple disputes, workplace burnout, and parenting young children.",
  commonMisconceptions: "Myth: \"Emotional granularity is just academic semantics.\" Fact: Brain imaging shows that precise labeling shifts blood flow from the amygdala to the ventrolateral prefrontal cortex in real time.",
  limitationsAndControversies: "Over-intellectualizing emotions without allowing oneself to feel the bodily sensations can lead to emotional detachment.",

  howToRespond: "Use an Emotion Wheel: when upset, identify at least 3 precise words from tertiary emotional vocabularies (e.g. vulnerable, exasperated, alienated, sheepish) before reacting.",
  psychologicalDefenses: [{"title":"The 3-Word Dissection","instruction":"Never describe your negative state with just \"stressed\" or \"bad\"; write down 3 specific, granular emotions behind the feeling."},{"title":"The Bodily Location Anchor","instruction":"Match the specific word to the physical location: is the sensation in your throat, stomach, or shoulders?"}],

  practiceQuestions: [
    {
      id: 'pq_emotional_granularity_01',
      difficulty: 'intermediate',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "An employee complains: \"I am feeling totally stressed and anxious about tomorrow’s meeting.\" According to emotional granularity science, what is the best first step?",
      scenarioText: "The employee feels overwhelmed and cannot focus on writing their presentation slides.",
      explanation: "Differentiating the generic \"stress\" into specific granular components (e.g. fear of public speaking vs. lack of data) enables the brain to choose targeted solutions.",
      antidoteAdvice: "Dissect the generic emotional label into specific nuanced feelings and address each individually.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Drink a double espresso and try to suppress all thoughts about the meeting.",
          text: "Drink a double espresso and try to suppress all thoughts about the meeting.",
          feedbackText: "Incorrect. Caffeine increases autonomic arousal and suppression backfires.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Break down \"stressed\" into precise emotions: Are you unprepared, afraid of judgment, or resentful of the assignment?",
          text: "Break down \"stressed\" into precise emotions: Are you unprepared, afraid of judgment, or resentful of the assignment?",
          feedbackText: "Correct! Granular emotional labeling directly lowers amygdala arousal and guides action.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Call in sick to avoid the feeling completely.",
          text: "Call in sick to avoid the feeling completely.",
          feedbackText: "Incorrect. Avoidance reinforces emotional vulnerability.",
        }
      ],
    },
  ],

  reflectionPrompt: "What is a specific emotion you felt this week that doesn’t have a simple English name, but you can describe vividly?",
  tags: ['Mentalab Mind', 'emotions'],
  relatedTopics: [],
  seoTitle: `${"Emotional Granularity: Why Naming Nuanced Feelings Calms the Brain"} | Mentalab Mind`,
  seoDescription: "The ability to construct and differentiate specific, nuanced emotional experiences rather than lumping feelings into generic categories like \"bad\" or \"stressed\".",
  canonicalUrl: '/mind/emotions/emotional-granularity',
  ogImageUrl: '/images/mind/emotional-granularity.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "When people say \"I am stressed,\" the brain treats it as a massive, undefined emergency. But if you differentiate that stress into \"I am feeling time-pressured because of a deadline\" vs. \"I am feeling socially rejected because of an email\", the prefrontal cortex immediately engages targeted coping strategies. Granularity reduces the metabolic cost of emotion regulation.",
};

export const TOPIC_EMOTIONAL_GRANULARITY_HINGLISH: MindTopicDetail = {
  ...TOPIC_EMOTIONAL_GRANULARITY_EN,
  title: "Emotional Granularity: Feelings Ko Sahi Naam Dene Ki Taqat",
  subtitle: "Kyu sirf \"stress\" ya \"gussa\" bolne ke bajaye specific feeling pehchanna dimaag ko shaant karta hai.",
  shortDescription: "Lisa Feldman Barrett ki neuroscience research: Apni feelings ko bariki se naam dena anxiety ko 40% kam kar deta hai.",
  oneLineExplanation: "\"Main pareshan hu\" se hatkar \"Mujhe jealousy aur insecurity ho rahi hai\" bolna.",
  summary30s: "Jab hum bolte hain \"Mujhe bohot stress ho raha hai\", to dimaag use ek anjana disaster samajh kar alert ho jata hai. Lekin jab hum exactly bolte hain ki \"Mujhe rejection ka darr lag raha hai\", to dimaag ka logic center turant control me aa jata hai.",
  coreConcept: "Dimaag emotions ko banata hai. Agar aapke paas emotions ke liye sirf 3 lafz hain (achha, bura, gussa), to dimaag dhang se react nahi kar pata. Emotional dictionary jitni rich hogi, emotional intelligence utni high hogi.",
  summary60s: "Research dikhati hai ki jo log apni feelings ko bariki se pehchan lete hain (jaise: jalan, sharm, thakan, anjaan darr), wo sharab ya over-eating kam karte hain aur depression se jaldi nikalte hain. Apni feeling ko exact naam dena dimaag ki medicine hai.",
  quickTakeaways: ["Generic words (\"stress\", \"tension\") dimaag me free-floating anxiety badhate hain","Feelings ko exact naam dene se dimaag ka amygdala turant shaant hota hai","High emotional granularity wale log depression aur gusse par zyada control rakhte hain","Apni vocabulary me naye emotional lafz jodiye taaki dimaag unhe process kar sake"],
  howItWorks: "Sharir me bechaini hui -> Agar bola \"main pareshan hu\" to panic badhega -> Agar bola \"mujhe insult feel hui hai\" to solution dikhega -> Amygdala shaant ho jayega.",
  howToRespond: "Emotion Wheel ka use karein: Sirf \"bura lag raha hai\" mat bolo, dhoondo ki andar guilt hai, helplessness hai, ya regret hai.",
  practiceQuestions: [
    {
      ...TOPIC_EMOTIONAL_GRANULARITY_EN.practiceQuestions[0],
      prompt: "Ek friend bolta hai: \"Mujhe office se aane ke baad bohot ganda stress ho raha hai.\" Emotional granularity ke hisab se kya advise denge?",
      explanation: "Jab tak stress ke andar ki exact feelings (thakan, boss par gussa, boring kaam) alag nahi hongi, solution nahi milega.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Bolna ki chup chap so jao aur sochna band karo.",
          text: "Bolna ki chup chap so jao aur sochna band karo.",
          feedbackText: "Galat. Yeh suppression hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Usse poochna ki exact kya feel ho raha hai: Kya kaam zyada tha, beizzati hui, ya akelepan lag raha hai?",
          text: "Usse poochna ki exact kya feel ho raha hai: Kya kaam zyada tha, beizzati hui, ya akelepan lag raha hai?",
          feedbackText: "Sahi! Specific labeling dimaag ko problem solve karne me help karti hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Usse turant naukri chhodne ki salah dena.",
          text: "Usse turant naukri chhodne ki salah dena.",
          feedbackText: "Galat. Yeh impulsive advice hai.",
        }
      ],
    },
  ],
  seoTitle: `${"Emotional Granularity: Feelings Ko Sahi Naam Dene Ki Taqat"} | Mentalab Mind`,
  seoDescription: "Lisa Feldman Barrett ki neuroscience research: Apni feelings ko bariki se naam dena anxiety ko 40% kam kar deta hai.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_EMOTIONAL_GRANULARITY_EN,
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

export const TOPIC_EMOTIONAL_GRANULARITY: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_EMOTIONAL_GRANULARITY_EN,
  hinglish: TOPIC_EMOTIONAL_GRANULARITY_HINGLISH,
  hi: createLocalizedRecord('hi', "भावनात्मक सूक्ष्मता (Emotional Granularity)", "भावनाओं को सटीक और सूक्ष्म नाम देने की क्षमता कैसे मस्तिष्क को शांत करती है और निर्णय क्षमता सुधारती है।", ["भावनाओं को सटीक नाम देना तनाव कम करता है","सामान्य शब्द चिंता को बढ़ाते हैं","सूक्ष्म समझ बेहतर समाधान देती है"]),
  gu: createLocalizedRecord('gu', "લાગણીઓની સૂક્ષ્મતા (Emotional Granularity)", "લાગણીઓને ચોક્કસ શબ્દોમાં ઓળખવાની ક્ષમતા માનસિક શાંતિ આપે છે.", ["લાગણીઓને ચોક્કસ નામ આપો","સામાન્ય શબ્દો ચિંતા વધારે છે","સૂક્ષ્મ સમજ નિયંત્રણ આપે છે"]),
  mr: createLocalizedRecord('mr', "भावनिक सूक्ष्मता (Emotional Granularity)", "भावनांना अचूक आणि सूक्ष्म शब्दांत ओळखल्याने मेंदू कसा शांत होतो.", ["भावना अचूक ओळखा","सामान्य शब्दांमुळे गोंधळ वाढतो","योग्य शब्दांमुळे ताण कमी होतो"]),
  te: createLocalizedRecord('te', "భావోద్వేగ సూక్ష్మత (Emotional Granularity)", "భావోద్వేగాలను స్పష్టమైన పదాలతో గుర్తించడం ద్వారా మనస్సును ఎలా ప్రశాంతపరచవచ్చు.", ["భావాలను స్పష్టంగా గుర్తించండి","అస్పష్టమైన పదాలు ఆందోళన పెంచుతాయి","సూక్ష్మ గ్రహణశక్తి శాంతినిస్తుంది"]),
  ta: createLocalizedRecord('ta', "உணர்ச்சி துல்லியம் (Emotional Granularity)", "உணர்ச்சிகளை துல்லியமான பெயரிட்டு அழைப்பது மூளையை எவ்வாறு அமைதிப்படுத்துகிறது.", ["உணர்ச்சிகளை துல்லியமாக பெயரிடுங்கள்","பொதுவான வார்த்தைகள் பதற்றத்தை கூட்டும்","தெளிவான உணர்வு அமைதி தரும்"]),
  kn: createLocalizedRecord('kn', "ಭಾವನಾತ್ಮಕ ಸೂಕ್ಷ್ಮತೆ (Emotional Granularity)", "ಭಾವನೆಗಳನ್ನು ನಿಖರವಾಗಿ ಗುರುತಿಸುವುದು ಮೆದುಳನ್ನು ಹೇಗೆ ಶಾಂತಗೊಳಿಸುತ್ತದೆ.", ["ಭಾವನೆಗಳನ್ನು ನಿಖರವಾಗಿ ಹೆಸರಿಸಿ","ಅಸ್ಪಷ್ಟತೆ ಆತಂಕ ಹೆಚ್ಚಿಸುತ್ತದೆ","ಸೂಕ್ಷ್ಮ ತಿಳುವಳಿಕೆ ನೆಮ್ಮದಿ ನೀಡುತ್ತದೆ"]),
  ml: createLocalizedRecord('ml', "വൈകാരിക സൂക്ഷ്മത (Emotional Granularity)", "വികാരങ്ങൾക്ക് കൃത്യമായ പേര് നൽകുന്നത് മസ്തിഷ്കത്തെ എങ്ങനെ ശാന്തമാക്കുന്നു.", ["വികാരങ്ങളെ കൃത്യമായി തിരിച്ചറിയുക","അവ്യക്തത ഉത്കണ്ഠ കൂട്ടുന്നു","വ്യക്തമായ വിചാരങ്ങൾ സമാധാനം നൽകുന്നു"]),
  bn: createLocalizedRecord('bn', "মানসিক সূক্ষ্মতা (Emotional Granularity)", "আবেগকে সুনির্দিষ্টভাবে চিহ্নিত করার ক্ষমতা কীভাবে মানসিক উদ্বেগ কমায়।", ["আবেগকে সুনির্দিষ্ট নাম দিন","অস্পষ্ট শব্দ দুশ্চিন্তা বাড়ায়","সঠিক উপলব্ধি প্রশান্তি আনে"]),
  pa: createLocalizedRecord('pa', "ਭਾਵਨਾਤਮਕ ਸੂਖਮਤਾ (Emotional Granularity)", "ਭਾਵਨਾਵਾਂ ਨੂੰ ਸਹੀ ਸ਼ਬਦਾਂ ਵਿੱਚ ਪਛਾਣਨ ਨਾਲ ਦਿਮਾਗ ਕਿਵੇਂ ਸ਼ਾਂਤ ਹੁੰਦਾ ਹੈ।", ["ਭਾਵਨਾਵਾਂ ਨੂੰ ਸਹੀ ਨਾਂ ਦਿਓ","ਅਸਪਸ਼ਟਤਾ ਚਿੰਤਾ ਵਧਾਉਂਦੀ ਹੈ","ਸਹੀ ਪਛਾਣ ਸਕੂਨ ਦਿੰਦੀ ਹੈ"]),
  ur: createLocalizedRecord('ur', "جذباتی باریکی (Emotional Granularity)", "جذبات کو درست اور باریک بینی سے نام دینا دماغ کو کس طرح پرسکون کرتا ہے۔", ["جذبات کو واضح نام دیں","مبہم الفاظ اضطراب بڑھاتے ہیں","درست فہم سکون دیتی ہے"]),
  or: createLocalizedRecord('or', "ଭାବନାଗତ ସୂକ୍ଷ୍ମତା (Emotional Granularity)", "ଭାବନାକୁ ସଠିକ୍ ଭାବରେ ଚିହ୍ନଟ କରିବା ମସ୍ତିଷ୍କକୁ କିପରି ଶାନ୍ତ ରଖେ।", ["ଭାବନାକୁ ସଠିକ୍ ନାମ ଦିଅନ୍ତୁ","ଅସ୍ପଷ୍ଟତା ଚିନ୍ତା ବଢ଼ାଏ","ସୂକ୍ଷ୍ମ ବୁଝାମଣା ଶାନ୍ତି ଦିଏ"]),
  as: createLocalizedRecord('as', "আৱেগিক সূক্ষ্মতা (Emotional Granularity)", "আৱেগক সঠিকভাৱে নামকৰণ কৰাৰ ক্ষমতাই কেনেকৈ মগজুক শান্ত কৰে।", ["আৱেগক স্পষ্ট নাম দিয়ক","অস্পষ্টতাই উদ্বেগ বৃদ্ধি কৰে","সঠিক উপলব্ধিয়ে শান্তি আনে"]),
};
