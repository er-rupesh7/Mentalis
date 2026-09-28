import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_CONTEXT_COLLAPSE_EN: MindTopicDetail = {
  id: 'context_collapse',
  categoryId: 'social_media_tech',
  slug: 'context-collapse',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 8,
  viewCount: 3760,
  shareCount: 300,
  bookmarkCount: 620,
  title: "Context Collapse: When Audiences Collide on Social Media",
  subtitle: "danah boyd’s sociological insight into why posting to everyone makes communicating with anyone exhausting.",
  shortDescription: "The phenomenon that occurs on social media when historically distinct social contexts and audiences (family, boss, college friends, strangers) merge into a single flattened audience.",
  oneLineExplanation: "Trying to speak to your grandmother, your employer, and your party friends in the exact same sentence.",

  summary30s: "First articulated by media scholar danah boyd and Alice Marwick in 2011, context collapse occurs because social platforms flatten diverse social groups into a single audience. In physical reality, you speak differently to your boss than to your childhood friends. On social media, all these audiences overlap, generating anxiety and self-censorship.",
  coreConcept: "Erving Goffman’s sociological theory of \"impression management\" established that human sanity relies on presenting nuanced, context-dependent versions of the self to different groups. Context collapse destroys boundaries: a harmless inside joke meant for college peers can be screenshotted and viewed by an HR recruiter or conservative in-law, destroying careers and marriages.",
  summary60s: "To cope with context collapse, social media users either default to bland, sterilized corporate platitudes (lowest common denominator communication) or engage in \"steganography\" (encoded subtext that only certain friends understand). The cognitive strain of managing infinite imaginary audiences is a primary cause of creator burnout.",
  quickTakeaways: ["Social media flattens separate life contexts (family, career, friends) into one audience","Communicating without social context creates constant fear of misunderstanding and cancellation","The lowest common denominator trap forces individuals to speak in bland corporate clichés","Segregating digital communication into private group chats restores authentic nuance"],

  whyItHappens: "Digital architecture lacks physical walls, spatial boundaries, and organic social segregation.",
  evolutionaryMechanism: "Ancestral humans interacted in face-to-face circles where the physical setting (hunting field, campfire, sacred cave) automatically dictated behavioral norms.",

  howItWorks: "Post created -> Distributed to 800 followers -> Mix of parents, boss, college friends, strangers -> Different audiences apply contradictory social norms -> Outrage or misunderstanding erupts.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Organic Physical Segregation vs. Digital Context Collapse",
    description: "Goffman’s social spheres collapsed onto a single flattened broadcast timeline.",
    analogySideA: {
      label: "Physical Social Segregation",
      detail: "Office: Professional dialogue; Friday night pub: Uncensored humor; Sunday dinner: Respectful family bonding.",
    },
    analogySideB: {
      label: "Social Media Context Collapse",
      detail: "One public tweet read simultaneously by boss, parents, ex-partner, and 50,000 strangers looking for offense.",
    },
  },

  researchSummary: "Marwick & boyd (2011, New Media & Society) and boyd (2014, It’s Complicated) demonstrated how teenagers and professionals navigate the collapsing boundaries between public and private spheres online.",
  references: [
    {
      id: 'ref_context_collapse_01',
      title: "I Tweet Honestly, I Tweet Passionately: Twitter Users, Context Collapse, and the Imagined Audience",
      citation: "Marwick, A. E., & boyd, d. (2011). New Media & Society, 13(1), 114–133.",
      authors: "Marwick, A. E. & boyd, d.",
      publicationYear: 2011,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1177/1461444810365313",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_context_collapse_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Sarcastic Meme Controversy in Pune",
      narrativeContext: "Tanmay posted a darkly humorous meme about corporate burnout on his public Instagram story, intended for 4 close college roommates. His uncle saw it and told his father he was failing at life, while his HR director screenshotted it as evidence of poor team motivation.",
      biasInAction: "Tanmay suffered from context collapse: he created content with a specific intimate micro-audience in mind, but published it to a collapsed public stage.",
      optimalResponse: "Use Close Friends lists or private WhatsApp group chats for edgy humor, reserving public feeds exclusively for professional public-domain updates.",
      reflectionPrompt: "Have you ever felt an instinctive dread before posting something because you remembered a specific family member or boss might see it?",
    },
  ],

  examples: [
    {
      id: 'ex_context_collapse_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Sarcastic Meme Controversy in Pune",
      description: "Tanmay posted a darkly humorous meme about corporate burnout on his public Instagram story, intended for 4 close college roommates. His uncle saw it a...",
      takeaway: "Social media flattens separate life contexts (family, career, friends) into one audience",
    },
  ],

  howToRecognize: "Hesitating before posting and feeling anxious about which audience group will misinterpret your message or take offense.",
  whereYouEncounterIt: "Public Twitter, LinkedIn, Instagram Stories, and family WhatsApp groups that include distant relatives.",
  commonMisconceptions: "Myth: \"If you have nothing to hide, context collapse shouldn’t bother you.\" Fact: Contextual nuance is the essence of human communication; taking words out of social context is inherently distortive.",
  limitationsAndControversies: "For public politicians and celebrities, context collapse is unavoidable and managed through dedicated public relations teams.",

  howToRespond: "Balkanize your social footprint: move intimate, uncensored social interactions to end-to-end encrypted micro-channels (Signal, private groups) and treat public social media as a professional broadcast billboard.",
  psychologicalDefenses: [{"title":"The Close Friends Wall","instruction":"Never post personal opinions or humor to public stories; strictly restrict sensitive posts to an audited list of under 20 trusted friends."},{"title":"The Front-Page Newspaper Test","instruction":"Before hitting post on public platforms, ask: \"Would I be comfortable with this on the front page of tomorrow’s newspaper with my boss watching?\""}],

  practiceQuestions: [
    {
      id: 'pq_context_collapse_01',
      difficulty: 'intermediate',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A professional wants to share an inside joke about medical school with three doctor friends on social media. What is the scientifically safest digital architecture?",
      scenarioText: "Their followers include patients, hospital directors, and conservative relatives.",
      explanation: "Public broadcasts suffer from context collapse. Direct messaging channels preserve the organic social context necessary for accurate interpretation.",
      antidoteAdvice: "Route the message exclusively through an encrypted private group rather than a public timeline.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Post it publicly on Twitter with a disclaimer saying \"Only doctors will understand this.\"",
          text: "Post it publicly on Twitter with a disclaimer saying \"Only doctors will understand this.\"",
          feedbackText: "Incorrect. Disclaimers do not prevent out-of-context screenshots and moral outrage.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Share it in a private 4-person group chat where all members share the exact same contextual framing.",
          text: "Share it in a private 4-person group chat where all members share the exact same contextual framing.",
          feedbackText: "Correct! This avoids context collapse by preserving social boundaries.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Post it on LinkedIn to demonstrate healthcare industry experience.",
          text: "Post it on LinkedIn to demonstrate healthcare industry experience.",
          feedbackText: "Incorrect. LinkedIn has severe professional reputational risks.",
        }
      ],
    },
  ],

  reflectionPrompt: "How has the awareness of multiple watching audiences changed the way you express yourself online over the last 5 years?",
  tags: ['Mentalab Mind', 'social_media_tech'],
  relatedTopics: [],
  seoTitle: `${"Context Collapse: When Audiences Collide on Social Media"} | Mentalab Mind`,
  seoDescription: "The phenomenon that occurs on social media when historically distinct social contexts and audiences (family, boss, college friends, strangers) merge into a single flattened audience.",
  canonicalUrl: '/mind/social-media-tech/context-collapse',
  ogImageUrl: '/images/mind/context-collapse.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "To cope with context collapse, social media users either default to bland, sterilized corporate platitudes (lowest common denominator communication) or engage in \"steganography\" (encoded subtext that only certain friends understand). The cognitive strain of managing infinite imaginary audiences is a primary cause of creator burnout.",
};

export const TOPIC_CONTEXT_COLLAPSE_HINGLISH: MindTopicDetail = {
  ...TOPIC_CONTEXT_COLLAPSE_EN,
  title: "Context Collapse: Sabke Samne Bolne Ki Majboori",
  subtitle: "Kyu social media par post karte waqt darr lagta hai ki rishtedaar ya boss bura na maan jayein.",
  shortDescription: "danah boyd ka sociological concept: Jab office, dosti, aur parivaar ek hi feed me aakar merge ho jate hain.",
  oneLineExplanation: "Ek hi sentence me dadi, boss aur pub ke dosto se ek sath baat karne ki koshish.",
  summary30s: "Real life me hum boss se alag baat karte hain, dosto se alag mazaak karte hain, aur parivaar ke samne alag sanskari bante hain. Lekin social media par yeh teeno ek hi jagah aakar khade ho jate hain. Ise kehte hain Context Collapse.",
  coreConcept: "Jab hum Instagram ya Twitter par post karte hain, to context gayab ho jata hai. Dosto ke liye banaya gaya ek halka mazaak boss dekh le to naukri chali jati hai aur rishtedaar dekh lein to ghar me panchayat baith jati hai. Is dar se log fake ya boring corporate baatein karne lagte hain.",
  summary60s: "Is mental pressure se bachne ka ek hi tareeqa hai: Sabke samne sab kuch bolna band karo. Close Friends list banao ya WhatsApp/Telegram ke private groups me baat karo. Public profile ko sirf ek professional billboard ki tarah treat karo.",
  quickTakeaways: ["Social media par sabhi rishte ek sath khade hain, jisse natural communication mushkil ho jati hai","Bina context ke chota sa mazaak bhi badi misunderstanding ban sakta hai","Public profile par wahi likho jo aap newspaper ke front page par chhapne par comfortable ho","Asli dil ki baatein private group chats me karo, public timeline par nahi"],
  howItWorks: "Dosto ke liye mazaak post kiya -> Chacha ji aur HR ne dekh liya -> Galat matlab nikala -> Ghar aur office me behes hui -> Insaan ne post karna hi band kar diya.",
  howToRespond: "Public vs Private boundary banao: Har baat public me mat daalo. Sensitive baatein sirf 5 logo ke private group me share karo.",
  practiceQuestions: [
    {
      ...TOPIC_CONTEXT_COLLAPSE_EN.practiceQuestions[0],
      prompt: "Aapne college ke dosto ke liye ek sarcastic meme banaya. Usko share karne ka sabse safe tareeqa kya hoga?",
      explanation: "Context collapse se bachne ke liye meme ko sirf un dosto ke private group me share karna chahiye jo context jante hain.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "LinkedIn par post kar dena taaki HR ko aapka sense of humor pata chale.",
          text: "LinkedIn par post kar dena taaki HR ko aapka sense of humor pata chale.",
          feedbackText: "Galat. Yeh career ke liye khatarnak ho sakta hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "College ke dosto ke private WhatsApp group me bhejna jahan sab context samajhte hain.",
          text: "College ke dosto ke private WhatsApp group me bhejna jahan sab context samajhte hain.",
          feedbackText: "Sahi! Yeh context collapse se bachata hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Public Twitter par post karna taaki viral ho sake.",
          text: "Public Twitter par post karna taaki viral ho sake.",
          feedbackText: "Galat. Isse misunderstanding aur outrage ka khatra hai.",
        }
      ],
    },
  ],
  seoTitle: `${"Context Collapse: Sabke Samne Bolne Ki Majboori"} | Mentalab Mind`,
  seoDescription: "danah boyd ka sociological concept: Jab office, dosti, aur parivaar ek hi feed me aakar merge ho jate hain.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_CONTEXT_COLLAPSE_EN,
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

export const TOPIC_CONTEXT_COLLAPSE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_CONTEXT_COLLAPSE_EN,
  hinglish: TOPIC_CONTEXT_COLLAPSE_HINGLISH,
  hi: createLocalizedRecord('hi', "संदर्भ पतन (Context Collapse)", "सोशल मीडिया पर विभिन्न सामाजिक संदर्भों (परिवार, सहकर्मी, मित्र) के एक साथ मिल जाने से उत्पन्न होने वाला संवाद संकट।", ["सोशल मीडिया विभिन्न सामाजिक संदर्भों को मिटा देता है","बिना संदर्भ के कही गई बात विवाद उत्पन्न करती है","निजी और सार्वजनिक संवाद को स्पष्ट रूप से अलग रखें"]),
  gu: createLocalizedRecord('gu', "કન્ટેક્સ્ટ કોલેપ્સ (સંદર્ભનું વિભાજન)", "સોશિયલ મીડિયા પર વિવિધ સામાજિક જૂથો ભેગા થઈ જવાથી વાતચીતમાં ઊભી થતી ગેરસમજ.", ["વાતચીતનો સંદર્ભ જાળવો","જાહેર પ્લેટફોર્મ પર સાવચેત રહો","ખાનગી ગ્રૂપમાં જ અંગત વાતો કરો"]),
  mr: createLocalizedRecord('mr', "संदर्भ संकोच (Context Collapse)", "सोशल मीडियावर कुटुंब, कार्यालय आणि मित्र एकत्र आल्यामुळे संवाद साधताना होणारा गोंधळ.", ["संवादाचा योग्य संदर्भ ओळखा","सार्वजनिक पोस्ट करताना काळजी घ्या","खाजगी गटांचा वापर करा"]),
  te: createLocalizedRecord('te', "సందర్భ పతనం (Context Collapse)", "సోషల్ మీడియాలో కుటుంబం, ఉద్యోగం మరియు స్నేహితులు ఒకే చోట చేరడం వల్ల వచ్చే సంభాషణ సంక్షోభం.", ["సందర్భాన్ని కాపాడుకోండి","బహిరంగ వేదికలపై జాగ్రత్త వహించండి","వ్యక్తిగత విషయాలను పరిమితం చేయండి"]),
  ta: createLocalizedRecord('ta', "சூழல் முறிவு (Context Collapse)", "சமூக வலைத்தளங்களில் குடும்பம், வேலை மற்றும் நண்பர்கள் ஒன்றிணைவதால் ஏற்படும் கருத்து மோதல்கள்.", ["சூழலுக்கு ஏற்ப பேசுங்கள்","பொதுவெளியில் கவனமாக இருங்கள்","தனிப்பட்ட குழுக்களை பயன்படுத்துங்கள்"]),
  kn: createLocalizedRecord('kn', "ಸಂದರ್ಭದ ಕುಸಿತ (Context Collapse)", "ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮಗಳಲ್ಲಿ ಕುಟುಂಬ, ವೃತ್ತಿ ಮತ್ತು ಸ್ನೇಹಿತರು ಒಂದೇ ವೇದಿಕೆಗೆ ಬರುವುದರಿಂದಾಗುವ ಸಂವಹನ ಗೊಂದಲ.", ["ಸಂದರ್ಭಕ್ಕೆ ತಕ್ಕಂತೆ ವರ್ತಿಸಿ","ಸಾರ್ವಜನಿಕ ಪೋಸ್ಟ್‌ಗಳಲ್ಲಿ ಜಾಗರೂಕರಾಗಿರಿ","ಖಾಸಗಿ ಸಂವಹನಕ್ಕೆ ಆದ್ಯತೆ ನೀಡಿ"]),
  ml: createLocalizedRecord('ml', "സാഹചര്യ തകർച്ച (Context Collapse)", "സോഷ്യൽ മീഡിയയിൽ കുടുംബം, ജോലി, സുഹൃത്തുക്കൾ എന്നിവർ ഒന്നിച്ചു വരുമ്പോഴുണ്ടാകുന്ന ആശയവിനിമയ പ്രതിസന്ധി.", ["സാഹചര്യം തിരിച്ചറിഞ്ഞ് സംസാരിക്കുക","പൊതു പ്ലാറ്റ്‌ഫോമുകളിൽ ജാഗ്രത പാലിക്കുക","സ്വകാര്യ ഗ്രൂപ്പുകൾ ഉപയോഗിക്കുക"]),
  bn: createLocalizedRecord('bn', "প্রসঙ্গের অবক্ষয় (Context Collapse)", "সোশ্যাল মিডিয়ায় পরিবার, সহকর্মী ও বন্ধুদের সীমানা বিলীন হয়ে যাওয়ার ফলে সৃষ্ট মানসিক অস্বস্তি।", ["কথার প্রেক্ষাপট বজায় রাখুন","পাবলিক পোস্টে সতর্ক থাকুন","ব্যক্তিগত আলাপের জন্য আলাদা গ্রুপ রাখুন"]),
  pa: createLocalizedRecord('pa', "ਪ੍ਰਸੰਗ ਦਾ ਢਹਿਣਾ (Context Collapse)", "ਸੋਸ਼ਲ ਮੀਡੀਆ ਤੇ ਪਰਿਵਾਰ, ਨੌਕਰੀ ਅਤੇ ਦੋਸਤਾਂ ਦੇ ਇਕੱਠੇ ਹੋਣ ਕਾਰਨ ਗੱਲਬਾਤ ਵਿੱਚ ਪੈਦਾ ਹੋਣ ਵਾਲੀ ਉਲਝਣ।", ["ਗੱਲ ਦਾ ਪ੍ਰਸੰਗ ਸਮਝੋ","ਖੁੱਲ੍ਹੇ ਮੰਚ ਤੇ ਸੋਚ ਕੇ ਬੋਲੋ","ਨਿੱਜੀ ਗੱਲਾਂ ਲਈ ਵੱਖਰੇ ਗਰੁੱਪ ਵਰਤੋ"]),
  ur: createLocalizedRecord('ur', "سیاق و سباق کا خاتمہ (Context Collapse)", "سوشل میڈیا پر خاندان، دوستوں اور دفتر کے لوگوں کے ایک جگہ جمع ہونے سے پیدا ہونے والی الجھن۔", ["گفتگو کے ماحول کا خیال رکھیں","پبلک پلیٹ فارم پر محتاط رہیں","نجی گروپس میں بات کریں"]),
  or: createLocalizedRecord('or', "ପ୍ରସଙ୍ଗ ପତନ (Context Collapse)", "ସୋସିଆଲ ମିଡ଼ିଆରେ ପରିବାର, କାର୍ଯ୍ୟାଳୟ ଓ ସାଙ୍ଗମାନେ ଏକାଠି ହେବା ଦ୍ୱାରା ସୃଷ୍ଟି ହେଉଥିବା ଭ୍ରାନ୍ତି।", ["ପ୍ରସଙ୍ଗର ସଠିକ୍ ବ୍ୟବହାର କରନ୍ତୁ","ସର୍ବସାଧାରଣରେ ସତର୍କ ରୁହନ୍ତୁ","ବ୍ୟକ୍ତିଗତ କଥା ବ୍ୟକ୍ତିଗତ ରଖନ୍ତୁ"]),
  as: createLocalizedRecord('as', "প্ৰসংগৰ পতন (Context Collapse)", "ছচিয়েল মিডিয়াত পৰিয়াল, কৰ্মক্ষেত্ৰ আৰু বন্ধু-বান্ধৱী একত্ৰিত হোৱাৰ ফলত সৃষ্টি হোৱা যোগাযোগৰ জটিলতা।", ["প্ৰসংগ বুজি কথা কওক","ৰাজহুৱা পোষ্টত সাৱধান হওক","ব্যক্তিগত কথাৰ বাবে সুকীয়া গ্ৰুপ ব্যৱহাৰ কৰক"]),
};
