import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_FEYNMAN_TECHNIQUE_EN: MindTopicDetail = {
  id: 'feynman_technique',
  categoryId: 'learning_psychology',
  slug: 'the-feynman-technique',
  difficulty: 'beginner',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 10,
  viewCount: 4000,
  shareCount: 330,
  bookmarkCount: 670,
  title: "The Feynman Technique: Ultimate Mental Model Simplification",
  subtitle: "Nobel laureate Richard Feynman’s 4-step framework for uncovering hidden ignorance and mastering any subject.",
  shortDescription: "A mental model for deep conceptual mastery where a learner identifies gaps in their understanding by attempting to explain a complex topic in simple language as if teaching a sixth-grader.",
  oneLineExplanation: "If you cannot explain it to an 11-year-old in simple words, you don’t understand it yourself.",

  summary30s: "Developed by Nobel Prize-winning theoretical physicist Richard Feynman (dubbed the \"Great Explainer\"), this 4-step learning protocol exposes the difference between knowing the *name* of something and knowing the *thing*. By forcing yourself to explain ideas without complex terminology, you strip away deceptive vocabulary masks.",
  coreConcept: "Human beings regularly hide their conceptual deficits behind domain jargon (e.g. reciting that \"gravity is the curvature of spacetime caused by mass-energy tensor fields\" without having any intuitive grasp of what that means). The Feynman Technique consists of 4 distinct steps: 1) Choose a concept, 2) Teach it to a child without jargon, 3) Identify gaps and return to source material, 4) Simplify and create concrete analogies.",
  summary60s: "This technique harnesses metacognition, the generation effect, and elaboration. When forced to explain quantum electrodynamics, calculus, or economics in everyday language, your brain must compress the underlying causal mechanisms into foundational first principles. Gaps in your explanation reveal exactly where your cognitive model is broken.",
  quickTakeaways: ["Knowing the name of a concept is completely different from understanding how it works","Explaining ideas to a child exposes hidden knowledge gaps and false confidence","The 4 steps: Choose concept -> Teach to a novice -> Pinpoint gaps -> Simplify & analogize","Replace all domain jargon with concrete physical metaphors from everyday life"],

  whyItHappens: "Jargon operates as a semantic black box; decomposing the black box into simple mechanical primitives forces deep relational understanding.",
  evolutionaryMechanism: "Early human culture transmitted fire-making and tool-crafting entirely through concrete demonstration and simple oral storytelling.",

  howItWorks: "Select topic -> Take blank paper -> Write simple explanation for a 6th grader -> Hit stumbling block (jargon required) -> Re-open textbook -> Master the underlying primitive -> Complete the analogy.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "The 4 Steps of the Feynman Protocol",
    description: "Richard Feynman’s conceptual distillation loop.",
    analogySideA: {
      label: "Jargon Mask (Shallow Knowledge)",
      detail: "\"Mitochondria is the powerhouse of the cell via ATP oxidative phosphorylation.\" (Recited from memory; zero real comprehension).",
    },
    analogySideB: {
      label: "Feynman Distillation (Deep Understanding)",
      detail: "\"It’s like a tiny furnace in every brick of your body that burns food with oxygen to charge microscopic batteries.\" (Intuitive mastery!).",
    },
  },

  researchSummary: "Feynman (1985, Surely You're Joking, Mr. Feynman!) and Chi et al. (1994, Cognitive Science) demonstrated that self-explanation and teaching aloud produce massive gains in problem-solving transfer.",
  references: [
    {
      id: 'ref_feynman_technique_01',
      title: "Surely You're Joking, Mr. Feynman!: Adventures of a Curious Character",
      citation: "Feynman, R. P. (1985). W. W. Norton & Company.",
      authors: "Feynman, R. P.",
      publicationYear: 1985,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1063/1.2814641",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_feynman_technique_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Machine Learning Interview in Gurugram",
      narrativeContext: "Dev applied for a Data Scientist role in Gurugram. When asked how an artificial neural network learns, he regurgitated: \"It computes the gradient of the loss function via the chain rule of backpropagation.\" When the interviewer asked: \"Explain that as if I were a farmer,\" Dev froze, unable to formulate a single sentence.",
      biasInAction: "Dev possessed name knowledge and mathematical jargon, but lacked first-principles mental models.",
      optimalResponse: "Use the Feynman technique: \"It’s like adjusting dials on a radio in the dark; you turn a knob slightly, see if the music gets clearer, and keep nudging it in that direction until the static vanishes.\"",
      reflectionPrompt: "What is a concept in your profession that you regularly talk about using acronyms that you would struggle to explain to your mother?",
    },
  ],

  examples: [
    {
      id: 'ex_feynman_technique_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Machine Learning Interview in Gurugram",
      description: "Dev applied for a Data Scientist role in Gurugram. When asked how an artificial neural network learns, he regurgitated: \"It computes the gradient of t...",
      takeaway: "Knowing the name of a concept is completely different from understanding how it works",
    },
  ],

  howToRecognize: "Realizing that every time someone asks \"how does that actually work?\", you default to repeating complex definitions verbatim from a textbook.",
  whereYouEncounterIt: "Technical interview preparation, teaching, scientific communication, executive presentations, and university exam revision.",
  commonMisconceptions: "Myth: \"Simplifying a topic makes it dumbed down and unscientific.\" Fact: Albert Einstein and Richard Feynman proved that simplifying a topic to its essence is the ultimate hallmark of genius.",
  limitationsAndControversies: "For highly technical mathematical derivations, simplification serves to build intuition; the formal mathematical rigor must still be practiced alongside it.",

  howToRespond: "The Whiteboard Child Challenge: Grab an empty notebook and write down an explanation of your most difficult work problem as if explaining it to an 11-year-old child.",
  psychologicalDefenses: [{"title":"The Jargon Ban Protocol","instruction":"Whenever you write notes, highlight every technical buzzword or acronym in red and rewrite the sentence using only words found in a children's dictionary."},{"title":"The Analogy Generator","instruction":"Find an everyday mechanical analogy (plumbing, cooking, sports) for every abstract algorithmic or theoretical process."}],

  practiceQuestions: [
    {
      id: 'pq_feynman_technique_01',
      difficulty: 'beginner',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A student claims they thoroughly understand blockchain technology because they can recite: \"It is a decentralized, cryptographically secured, immutable distributed ledger.\" How can an educator verify if they actually understand it?",
      scenarioText: "The student memorized this exact definition from an online article.",
      explanation: "Reciting definitions is name knowledge. Asking the student to explain the mechanism using an everyday analogy (like an open ledger on a town square table) tests first-principles understanding.",
      antidoteAdvice: "Apply the Feynman test: ask them to explain how it works without using the words \"cryptographic\", \"immutable\", or \"distributed\".",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Give them an A+ because their definition matches the textbook verbatim.",
          text: "Give them an A+ because their definition matches the textbook verbatim.",
          feedbackText: "Incorrect. This measures rote recall, not conceptual mastery.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Ask them to explain how a blockchain prevents double-spending using an analogy of a shared notebook among 5 friends without using any tech jargon.",
          text: "Ask them to explain how a blockchain prevents double-spending using an analogy of a shared notebook among 5 friends without using any tech jargon.",
          feedbackText: "Correct! The Feynman Technique strips away vocabulary and tests true causal comprehension.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Ask them to spell the word \"cryptographic\" backwards.",
          text: "Ask them to spell the word \"cryptographic\" backwards.",
          feedbackText: "Incorrect. Meaningless trivia test.",
        }
      ],
    },
  ],

  reflectionPrompt: "Pick one concept you studied this week. Can you explain it right now in 3 simple sentences without using a single technical term?",
  tags: ['Mentalab Mind', 'learning_psychology'],
  relatedTopics: [],
  seoTitle: `${"The Feynman Technique: Ultimate Mental Model Simplification"} | Mentalab Mind`,
  seoDescription: "A mental model for deep conceptual mastery where a learner identifies gaps in their understanding by attempting to explain a complex topic in simple language as if teaching a sixth-grader.",
  canonicalUrl: '/mind/learning-psychology/the-feynman-technique',
  ogImageUrl: '/images/mind/the-feynman-technique.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "This technique harnesses metacognition, the generation effect, and elaboration. When forced to explain quantum electrodynamics, calculus, or economics in everyday language, your brain must compress the underlying causal mechanisms into foundational first principles. Gaps in your explanation reveal exactly where your cognitive model is broken.",
};

export const TOPIC_FEYNMAN_TECHNIQUE_HINGLISH: MindTopicDetail = {
  ...TOPIC_FEYNMAN_TECHNIQUE_EN,
  title: "The Feynman Technique: Asli Samajh Ka 4-Step Formula",
  subtitle: "Nobel prize winner Richard Feynman ka tareeqa: Kisi bhi mushkil cheez ko 10 saal ke bacche ko samjhane layak banana.",
  shortDescription: "Feynman Method: Definition ratne aur asli samajh ke beech ka farq jaan kar kisi bhi topic ke master banna.",
  oneLineExplanation: "Agar aap kisi cheez ko simple shabdo me nahi samjha sakte, to sach yeh hai ki aapko khud samajh nahi aayi.",
  summary30s: "Nobel prize winner physicist Richard Feynman ko \"The Great Explainer\" kaha jata tha. Unhone kaha ki kisi cheez ka \"naam janna\" aur us cheez ko \"samajhna\" do bilkul alag baatein hain. Jab aap bina technical words use kiye kisi cheez ko aasan bhasha me samjha lete ho, tabhi aap uske asli master bante ho.",
  coreConcept: "Log aksar technical terms ke peeche apni ignorance chupate hain (Jaise bolna: \"Mitochondria is the powerhouse of the cell\"). Feynman ke 4 steps hain: 1) Topic chuno, 2) Ek 10 saal ke bacche ko aasan bhasha me samjhao, 3) Jahan ruko ya jargon bolna pade, wahan wapas book kholo aur gap door karo, 4) Real-life analogy banao.",
  summary60s: "Coding interviews aur competitive exams me wahi log reject hote hain jo ratta maar kar aate hain. Agar aapse poocha jaye ki \"Machine Learning kya hai?\" aur aap bolo \"Algorithm optimizing weights via loss function\", to yeh ratta hai. Par agar aap bolo: \"Yeh ek radio ke knob ghumane jaisa hai jahan gaana saaf aane tak hum switch hilate hain\", to yeh Feynman mastery hai.",
  quickTakeaways: ["Bhaari-bharkam technical words aksar kamzori ko chupane ke liye use kiye jate hain","Simple bhasha me bolna intelligence ka sabse bada saboot hai","Feynman ke 4 steps: Chuno -> Bacche ko sikhao -> Gap identify karo -> Simplify karo","Har abstract concept ke liye aam zindagi ka ek concrete example dhoondo"],
  howItWorks: "Topic padha -> Blank page par 10 saal ke bacche ke liye likha -> Jahan technical word aaya wahan ruk gaye -> Wapas padha aur basic primitive samjha -> Simple analogy banayi -> Master ban gaye.",
  howToRespond: "Feynman Test lagao: Padhne ke baad khud se poocho: \"Agar mujhe yeh apni nani ya 10 saal ke bhai ko samjhana ho, to main bina English words ke kaise samjhaunga?\"",
  practiceQuestions: [
    {
      ...TOPIC_FEYNMAN_TECHNIQUE_EN.practiceQuestions[0],
      prompt: "Ek student bolta hai: \"Blockchain ek decentralized immutable cryptographic ledger hai.\" Kya wo sach me blockchain samajhta hai?",
      explanation: "Feynman technique ke mutabiq yeh sirf definition ratna hai. Asli samajh tab prove hogi jab wo bina technical terms ke 5 dosto ke khate ki analogy se samjha sake.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Haan, usne 100% sahi definition boli hai to wo master hai.",
          text: "Haan, usne 100% sahi definition boli hai to wo master hai.",
          feedbackText: "Galat. Yeh sirf bookish rote memorization hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Nahi, jab tak wo bina jargon ke aam zindagi ke example se na samjhaye, tab tak yeh sirf name knowledge hai.",
          text: "Nahi, jab tak wo bina jargon ke aam zindagi ke example se na samjhaye, tab tak yeh sirf name knowledge hai.",
          feedbackText: "Sahi! Yahi Feynman Technique ka sabse bada lesson hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Blockchain samajhna impossible hai.",
          text: "Blockchain samajhna impossible hai.",
          feedbackText: "Galat.",
        }
      ],
    },
  ],
  seoTitle: `${"The Feynman Technique: Asli Samajh Ka 4-Step Formula"} | Mentalab Mind`,
  seoDescription: "Feynman Method: Definition ratne aur asli samajh ke beech ka farq jaan kar kisi bhi topic ke master banna.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_FEYNMAN_TECHNIQUE_EN,
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

export const TOPIC_FEYNMAN_TECHNIQUE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_FEYNMAN_TECHNIQUE_EN,
  hinglish: TOPIC_FEYNMAN_TECHNIQUE_HINGLISH,
  hi: createLocalizedRecord('hi', "फाइनमैन तकनीक (The Feynman Technique)", "नोबेल पुरस्कार विजेता रिचर्ड फाइनमैन द्वारा प्रतिपादित 4-चरणीय शिक्षण मॉडल, जो किसी भी जटिल विषय को अत्यंत सरल भाषा में समझाने पर आधारित है।", ["किसी अवधारणा का नाम जानना और उसे समझना दो अलग बातें हैं","10 वर्ष के बच्चे को समझाने से समझ की वास्तविक कमियां उजागर होती हैं","जटिल पारिभाषिक शब्दों के स्थान पर दैनिक जीवन के रूपकों का उपयोग करें"]),
  gu: createLocalizedRecord('gu', "ફેનમેન ટેકનિક (સરળતાથી શીખવાની કળા)", "નોબેલ વિજેતા રિચાર્ડ ફેનમેનની કોઈપણ અઘરા વિષયને સરળ ભાષામાં સમજવાની ૪-પગલાંની પદ્ધતિ.", ["સરળ ભાષામાં સમજાવો","ગોખણપટ્ટીથી દૂર રહો","વાસ્તવિક ઉદાહરણો વાપરો"]),
  mr: createLocalizedRecord('mr', "फेनमन तंत्र (Feynman Technique)", "कोणताही कठीण विषय लहान मुलाला समजेल इतक्या सोप्या भाषेत मांडून त्यावर प्रभुत्व मिळवण्याची ४-टप्प्यांची पद्धत.", ["पारिभाषिक शब्दांमागे लपू नका","लहान मुलाला समजावून सांगा","ज्ञानातील त्रुटी ओळखून दूर करा"]),
  te: createLocalizedRecord('te', "ఫెయిన్‌మాన్ పద్ధతి (Feynman Technique)", "ఏదైనా సంక్లిష్టమైన అంశాన్ని చిన్న పిల్లాడికి అర్థమయ్యేలా సులభమైన భాషలో వివరించి నైపుణ్యం సాధించే పద్ధతి.", ["సాధారణ భాషలో వివరించండి","కంఠస్థం చేయవద్దు","అవగాహన లోపాలను సరిదిద్దుకోండి"]),
  ta: createLocalizedRecord('ta', "ஃபெய்ன்மேன் நுட்பம் (Feynman Technique)", "எந்தவொரு கடினமான பாடத்தையும் ஒரு சிறுவனுக்கு புரியும் வகையில் எளிய மொழியில் கற்பித்து முழுமையாக புரிந்து கொள்ளும் முறை.", ["எளிய மொழியில் விளக்குங்கள்","மனப்பாடம் செய்வதை தவிருங்கள்","புரிதலில் உள்ள இடைவெளிகளை நிரப்புங்கள்"]),
  kn: createLocalizedRecord('kn', "ಫೆನ್‌ಮನ್ ತಂತ್ರಜ್ಞಾನ (Feynman Technique)", "ಯಾವುದೇ ಕಠಿಣ ವಿಷಯವನ್ನು ಪುಟ್ಟ ಮಗುವಿಗೆ ಅರ್ಥವಾಗುವಂತೆ ಸರಳ ಭಾಷೆಯಲ್ಲಿ ವಿವರಿಸಿ ಕಲಿಯುವ ೪ ಹಂತಗಳ ಮಾದರಿ.", ["ಸರಳ ಭಾಷೆಯಲ್ಲಿ ವಿವರಿಸಿ","ಬಾಯಿಪಾಠ ಮಾಡುವುದನ್ನು ಬಿಡಿ","ಅರಿವಿನ ಕೊರತೆಗಳನ್ನು ಸರಿಪಡಿಸಿ"]),
  ml: createLocalizedRecord('ml', "ഫെയ്ൻമാൻ ടെക്നിക് (Feynman Technique)", "ഏതൊരു സങ്കീർണ്ണമായ വിഷയവും ഒരു കൊച്ചുകുട്ടിക്ക് മനസ്സിലാകുന്ന ലളിതമായ ഭാഷയിൽ വിശദീകരിച്ച് പഠിക്കുന്ന രീതി.", ["ലളിതമായ ഭാഷയിൽ വിശദീകരിക്കുക","ഹൃദിസ്ഥമാക്കൽ ഉപേക്ഷിക്കുക","അറിവിലെ വിടവുകൾ നികത്തുക"]),
  bn: createLocalizedRecord('bn', "ফাইনম্যান পদ্ধতি (Feynman Technique)", "যেকোনো জটিল বিষয়কে একজন শিশুর কাছে সহজ ভাষায় ব্যাখ্যা করার মাধ্যমে প্রকৃত জ্ঞান অর্জনের ৪-ধাপের বৈজ্ঞানিক মডেল।", ["সহজ ভাষায় প্রকাশ করুন","মুখস্থ বিদ্যার ফাঁদ এড়িয়ে চলুন","বাস্তব জীবনের উদাহরণের সাহায্য নিন"]),
  pa: createLocalizedRecord('pa', "ਫਾਈਨਮੈਨ ਤਕਨੀਕ (Feynman Technique)", "ਕਿਸੇ ਵੀ ਔਖੇ ਵਿਸ਼ੇ ਨੂੰ ਇੱਕ ਨਿੱਕੇ ਬੱਚੇ ਨੂੰ ਸਮਝਾਉਣ ਵਾਂਗ ਸੌਖੀ ਬੋਲੀ ਵਿੱਚ ਬਿਆਨ ਕਰਕੇ ਮੁਹਾਰਤ ਹਾਸਲ ਕਰਨ ਦਾ ਢੰਗ।", ["ਸੌਖੀ ਬੋਲੀ ਵਿੱਚ ਸਮਝਾਓ","ਰੱਟਾ ਲਾਉਣ ਤੋਂ ਬਚੋ","ਸਮਝ ਦੀਆਂ ਕਮੀਆਂ ਦੂਰ ਕਰੋ"]),
  ur: createLocalizedRecord('ur', "فائن مین تکنیک (Feynman Technique)", "کسی بھی پیچیدہ تصور کو ایک بچے کو سمجھانے کی طرح آسان زبان میں پیش کر کے مکمل مہارت حاصل کرنے کا طریقہ۔", ["آسان زبان میں بیان کریں","رٹا لگانے سے گریز کریں","علم کی خامیوں کو دور کریں"]),
  or: createLocalizedRecord('or', "ଫାଇନମ୍ୟାନ୍ କୌଶଳ (Feynman Technique)", "ଯେକୌଣସି ଜଟିଳ ବିଷୟକୁ ଜଣେ ଛୋଟ ପିଲାକୁ ବୁଝାଇବା ଭଳି ସରଳ ଭାଷାରେ ବ୍ୟାଖ୍ୟା କରି ପାରଙ୍ଗମ ହେବାର ୪-ସ୍ତରୀୟ ପଦ୍ଧତି।", ["ସରଳ ଭାଷାରେ ବୁଝାନ୍ତୁ","ମୁଖସ୍ଥ କରିବା ଛାଡ଼ନ୍ତୁ","ଅବବୋଧର ତ୍ରୁଟି ସୁଧାରନ୍ତୁ"]),
  as: createLocalizedRecord('as', "ফাইনমেন কৌশল (Feynman Technique)", "যিকোনো জটিল বিষয় এটা শিশুৱে বুজি পোৱাকৈ সহজ ভাষাত ব্যাখ্যা কৰি প্ৰকৃত জ্ঞান আহৰণ কৰাৰ ৪-স্তৰীয় আৰ্হি।", ["সহজ ভাষাত বুজাওক","মুখস্থ কৰা ত্যাগ কৰক","বুজি পোৱাৰ ঘাটি পূৰণ কৰক"]),
};
