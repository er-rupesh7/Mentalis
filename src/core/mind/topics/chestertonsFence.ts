import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_CHESTERTONS_FENCE_EN: MindTopicDetail = {
  id: 'chestertons_fence',
  categoryId: 'critical_thinking',
  slug: 'chestertons-fence',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 9,
  viewCount: 3880,
  shareCount: 315,
  bookmarkCount: 645,
  title: "Chesterton’s Fence: Why Reforms Destroy Working Systems",
  subtitle: "G.K. Chesterton’s principle on why you must never tear down a fence until you know why it was put up.",
  shortDescription: "A decision-making principle stating that reforms, deletions, or policy removals should not be executed until the underlying reason for the existing state of affairs is fully understood.",
  oneLineExplanation: "Do not remove a barrier until you know what dangerous beast it was built to keep out.",

  summary30s: "Articulated in 1929 by British writer G.K. Chesterton in *The Thing*, this mental model targets arrogant reformers and ambitious junior leaders. Chesterton envisioned a fence erected across a country road. A modern reformer says: \"I see no use for this fence; let us tear it down!\" A wise thinker replies: \"If you do not see its use, I certainly will not let you tear it down. Go find out why it was built, and only then may you remove it.\"",
  coreConcept: "Complex institutions, traditions, biological adaptations, and software architectures rarely evolve by random accident. They exist because they solved a painful, forgotten historical crisis. When newcomers enter an organization, their immediate instinct is to view existing complexities as archaic stupidity. Tearing down the \"useless\" fence invariably releases the hidden monster it was built to contain.",
  summary60s: "In software development, this manifests when a new developer deletes an ugly, convoluted 50-line `if/else` block, thinking \"this is sloppy legacy code\". Within 2 hours of deployment, production crashes because that messy block was handling an obscure bug in a legacy bank payment gateway. Respect systemic evolution before refactoring.",
  quickTakeaways: ["Never remove a rule, habit, or code block until you discover why it was created","Things that appear useless to a newcomer often solve an invisible historical problem","Reforms carried out in ignorance invariably resurrect the ancient crisis","Humility in the face of existing complex systems is the hallmark of great leadership"],

  whyItHappens: "Presentism and naive interventionism: the tendency to assume past actors were less intelligent than ourselves because we lack their historical context.",
  evolutionaryMechanism: "Cultural taboos (e.g. food preparation rituals, marriage kinship rules) preserved tribal survival across generations without explicit scientific theories.",

  howItWorks: "Newcomer observes legacy barrier -> Concludes it is irrational -> Destroys barrier without investigation -> Latent crisis unleashes -> Catastrophic failure -> Rebuilding at 10x cost.",
  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: "Arrogant Deletion vs. Chesterton’s Historic Audit",
    description: "G.K. Chesterton’s systemic barrier preservation model.",
    analogySideA: {
      label: "Arrogant Reformer (Naive)",
      detail: "\"Why does our database have this weird cache invalidation script? It looks redundant; deleting it!\" -> Server outages hit 500k users.",
    },
    analogySideB: {
      label: "Chesterton’s Thinker (Wise)",
      detail: "\"Let's read git blame and commit logs from 2021 to understand what specific race condition this script was written to prevent.\"",
    },
  },

  researchSummary: "Chesterton (1929, The Thing: Why I Am a Catholic) and Taleb (2012, Antifragile: Things That Gain from Disorder - The Lindy Effect) documented how unconsidered removals destroy evolved institutional antifragility.",
  references: [
    {
      id: 'ref_chestertons_fence_01',
      title: "The Thing: Why I Am a Catholic / Antifragile",
      citation: "Chesterton, G. K. (1929). Sheed & Ward.",
      authors: "Chesterton, G. K. & Taleb, N. N.",
      publicationYear: 1929,
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'empirical_study',
      doiOrUrl: "https://doi.org/10.1002/9781118536858",
      relevance: 'Foundational empirical grounding.',
      displayOrder: 1,
    },
  ],

  scenarios: [
    {
      id: 'scen_chestertons_fence_01',
      scenarioType: 'indian_context',
      displayOrder: 1,
      isFeatured: true,
      title: "The Deleted Safety Protocol in Pune",
      narrativeContext: "A newly appointed operations manager at an auto-parts manufacturing plant in Pune noticed that workers were required to wait 90 seconds after pressing an emergency shutdown button before opening machine panels. Calling it \"a waste of productivity,\" he abolished the rule. Two weeks later, a technician opened a panel prematurely and suffered severe thermal burns from unvented pressurized steam.",
      biasInAction: "The manager saw the fence (the 90-second wait) but failed to investigate the beast it kept out (hydraulic steam depressurization).",
      optimalResponse: "Before modifying any SOP or safety regulation, interview veteran staff and examine incident logs to understand the blood that wrote the original rule.",
      reflectionPrompt: "What daily habit or boundary do you feel tempted to drop right now without remembering why you set it up in the first place?",
    },
  ],

  examples: [
    {
      id: 'ex_chestertons_fence_01',
      domain: 'workplace',
      displayOrder: 1,
      title: "The Deleted Safety Protocol in Pune",
      description: "A newly appointed operations manager at an auto-parts manufacturing plant in Pune noticed that workers were required to wait 90 seconds after pressing...",
      takeaway: "Never remove a rule, habit, or code block until you discover why it was created",
    },
  ],

  howToRecognize: "Looking at an old company policy, code repository, or cultural tradition and thinking: \"These people were so stupid; this serves no purpose.\"",
  whereYouEncounterIt: "Software engineering refactoring, corporate restructuring, constitutional law amendments, and personal lifestyle boundary changes.",
  commonMisconceptions: "Myth: \"Chesterton’s Fence is a conservative excuse to never change anything.\" Fact: Chesterton explicitly allowed removing the fence—ONCE you have proven you understand its exact original purpose and have an alternative defense.",
  limitationsAndControversies: "When a barrier was built for an environment that objectively no longer exists (e.g. keeping buggy whips in an electric car era), removal is fully justified after validation.",

  howToRespond: "The Archaeological Inquiry: Whenever you want to delete a feature or rule, write a 1-paragraph summary explaining the problem it originally solved before executing the deletion.",
  psychologicalDefenses: [{"title":"The Git Blame Protocol","instruction":"Never delete code without running `git blame` and reading the original developer's pull request comments."},{"title":"The Veteran Interview","instruction":"Speak to the longest-tenured employee or architect to understand what disaster triggered the creation of the policy."}],

  practiceQuestions: [
    {
      id: 'pq_chestertons_fence_01',
      difficulty: 'intermediate',
      questionFormat: 'scenario_analysis',
      displayOrder: 1,
      prompt: "A new junior software engineer finds a 40-line chunk of convoluted code marked \"DO NOT TOUCH\". It appears to do nothing in their local environment. What is the correct Chestertonian approach?",
      scenarioText: "The engineer wants to clean up the codebase to improve readability scores on GitHub.",
      explanation: "Chesterton’s Fence demands discovering why the code was written (checking commit history, tests, and speaking to the author) before deleting it.",
      antidoteAdvice: "Investigate the history before touching the fence.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Delete the code immediately because clean code is the top priority.",
          text: "Delete the code immediately because clean code is the top priority.",
          feedbackText: "Incorrect. This creates high-risk production bugs.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Investigate commit history, Jira tickets, and consult senior architects to understand what edge case it protects before considering removal.",
          text: "Investigate commit history, Jira tickets, and consult senior architects to understand what edge case it protects before considering removal.",
          feedbackText: "Correct! This embodies Chesterton’s Fence in modern engineering.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Rewrite the entire codebase in a new programming language over the weekend.",
          text: "Rewrite the entire codebase in a new programming language over the weekend.",
          feedbackText: "Incorrect. Reckless arrogance.",
        }
      ],
    },
  ],

  reflectionPrompt: "What is an annoying rule at your job or in your family that you now realize might be protecting everyone from a hidden disaster?",
  tags: ['Mentalab Mind', 'critical_thinking'],
  relatedTopics: [],
  seoTitle: `${"Chesterton’s Fence: Why Reforms Destroy Working Systems"} | Mentalab Mind`,
  seoDescription: "A decision-making principle stating that reforms, deletions, or policy removals should not be executed until the underlying reason for the existing state of affairs is fully understood.",
  canonicalUrl: '/mind/critical-thinking/chestertons-fence',
  ogImageUrl: '/images/mind/chestertons-fence.png',
  publishedAt: '2026-09-10T00:00:00Z',
  deepExplanation: "In software development, this manifests when a new developer deletes an ugly, convoluted 50-line `if/else` block, thinking \"this is sloppy legacy code\". Within 2 hours of deployment, production crashes because that messy block was handling an obscure bug in a legacy bank payment gateway. Respect systemic evolution before refactoring.",
};

export const TOPIC_CHESTERTONS_FENCE_HINGLISH: MindTopicDetail = {
  ...TOPIC_CHESTERTONS_FENCE_EN,
  title: "Chesterton’s Fence: Purane Niyamo Ko Todne Ki Jaldbazi Mat Karo",
  subtitle: "G.K. Chesterton ka principle: Jab tak yeh na pata chal jaye ki deewar kyu banayi gayi thi, tab tak use girane ka haq kisi ko nahi hai.",
  shortDescription: "Unintended Consequences of Reform: Naye log purani cheezon ko bekaar samajh kar hata dete hain aur fir bada nuksan uthate hain.",
  oneLineExplanation: "Pehle yeh pata lagao ki baadh (fence) kyu lagayi gayi thi, fir decide karo ki use todna hai ya nahi.",
  summary30s: "1929 me writer G.K. Chesterton ne ek misaal di: Do log raste par chal rahe the aur beech me ek lakdi ki fence (baadh) lagi thi. Pehla bola: \"Mujhe iska koi use nahi dikh raha, ise tod dete hain!\" Doosra bola: \"Agar tumhe iska use nahi pata, to main tumhe ise chhoone bhi nahi dunga. Pehle pata karo yeh kyu lagayi gayi thi, fir todne ki baat karna.\"",
  coreConcept: "Office me ya coding me naye log aate hi kehte hain: \"Purane log kitne pagal the, yeh faltu rule kyu banaya!\" Fir wo us rule ya code ko delete kar dete hain, aur agle hi din production phat jata hai! Kyuki wo \"faltu\" rule darasal kisi purane bade haadse ya bug se bachne ke liye banaya gaya tha.",
  summary60s: "Factory me ek naye manager ne dekha ki machine band karne ke baad 2 minute rukne ka rule tha. Usne kaha \"Time waste hai, rule hata do!\" Agle hafte ek worker ne machine kholi aur andar ki garam steam se uska hath jal gaya. Purane niyam bekaar nahi hote, unke peeche dardnaak galtiyon ka itihas hota hai.",
  quickTakeaways: ["Jab tak kisi rule ka purpose na pata chale, use badalne ki koshish mat karo","Purane log bewakoof nahi the; unhone kisi bade haadse ke baad hi wo deewar khadi ki thi","Jaldbazi me reforms karne se purana daanav wapas bahar nikal aata hai","Asli samajhdaari purani cheezon ke peeche ke karan ko samajhne me hai"],
  howItWorks: "Naya insaan aaya -> Purana rule bekaar laga -> Bina soche delete kiya -> Purani museebat wapas aa gayi -> 10 guna bada nuksan hua.",
  howToRespond: "Itihas check karo: Kisi bhi purane rule ya code ko hatane se pehle purane seniors se poochho ya documentation padho: \"Yeh rule kyu bana tha?\" Jab samajh aa jaye, tabhi change karo.",
  practiceQuestions: [
    {
      ...TOPIC_CHESTERTONS_FENCE_EN.practiceQuestions[0],
      prompt: "Ek naye coder ne dekha ki code me ek ajeeb sa 20-line ka block hai. Use lagta hai yeh bekaar hai. Chesterton’s Fence ke hisaab se use kya karna chahiye?",
      explanation: "Pehle git commit history aur tickets check karne chahiye taaki pata chale yeh code kis bug ko rokne ke liye likha gaya tha.",
      options: [
        {
          id: 'opt_a',
          isCorrect: false,
          displayOrder: 1,
          optionText: "Turant delete karke weekend par chutti par chale jana.",
          text: "Turant delete karke weekend par chutti par chale jana.",
          feedbackText: "Galat. Production crash hone ka risk hai.",
        },
        {
          id: 'opt_b',
          isCorrect: true,
          displayOrder: 2,
          optionText: "Git history aur seniors se pata karna ki yeh code kis bug ya edge case ko handle karne ke liye banaya gaya tha.",
          text: "Git history aur seniors se pata karna ki yeh code kis bug ya edge case ko handle karne ke liye banaya gaya tha.",
          feedbackText: "Sahi! Yahi Chesterton’s Fence ka practical software application hai.",
        },
        {
          id: 'opt_c',
          isCorrect: false,
          displayOrder: 3,
          optionText: "Code ko copy karke social media par mazak udana.",
          text: "Code ko copy karke social media par mazak udana.",
          feedbackText: "Galat.",
        }
      ],
    },
  ],
  seoTitle: `${"Chesterton’s Fence: Purane Niyamo Ko Todne Ki Jaldbazi Mat Karo"} | Mentalab Mind`,
  seoDescription: "Unintended Consequences of Reform: Naye log purani cheezon ko bekaar samajh kar hata dete hain aur fir bada nuksan uthate hain.",
};

function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_CHESTERTONS_FENCE_EN,
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

export const TOPIC_CHESTERTONS_FENCE: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_CHESTERTONS_FENCE_EN,
  hinglish: TOPIC_CHESTERTONS_FENCE_HINGLISH,
  hi: createLocalizedRecord('hi', "चेस्टरटन की बाड़ (Chesterton’s Fence)", "किसी भी स्थापित नियम, परंपरा या संरचना को तब तक न हटाने का सिद्धांत, जब तक कि उसके निर्माण के मूल कारण और उद्देश्य को पूरी तरह न समझ लिया जाए।", ["किसी नियम को हटाने से पहले यह जानें कि उसे क्यों बनाया गया था","अनुभवहीन सुधारक अक्सर पुरानी व्यवस्थाओं को मूर्खतापूर्ण मानकर बड़ी तबाही लाते हैं","जटिल प्रणालियों के विकासवादी इतिहास का सम्मान करें"]),
  gu: createLocalizedRecord('gu', "ચેસ્ટરટનની વાડ (Chesterton’s Fence)", "જ્યાં સુધી જૂનો નિયમ કે પરંપરા શા માટે બનાવવામાં આવી હતી તે ન સમજાય, ત્યાં સુધી તેને દૂર ન કરવાનો સિદ્ધાંત.", ["જૂના નિયમો પાછળનું કારણ શોધો","ઉતાવળે ફેરફાર કરવાનું ટાળો","સિસ્ટમના ઇતિહાસનો આદર કરો"]),
  mr: createLocalizedRecord('mr', "चेस्टरटनचे कुंपण (Chesterton’s Fence)", "एखादा जुना नियम किंवा कुंपण कशासाठी तयार केले होते हे समजल्याशिवाय ते नष्ट करू नये ही विवेकपूर्ण विचारसरणी.", ["नियम हटवण्यापूर्वी त्याचे कारण शोधा","सुधारणांच्या घाईत नुकसान टाळा","अनुभवातून शिकलेल्या गोष्टींचा आदर करा"]),
  te: createLocalizedRecord('te', "చెస్టర్‌టన్ కంచె (Chesterton’s Fence)", "ఒక నియమం లేదా కంచె ఎందుకు ఏర్పాటు చేయబడిందో తెలుసుకోకుండా దానిని తొలగించకూడదనే వివేకవంతమైన సూత్రం.", ["నియమాల వెనుక ఉన్న కారణాన్ని తెలుసుకోండి","తొందరపడి మార్పులు చేయవద్దు","వ్యవస్థ చరిత్రను గౌరవించండి"]),
  ta: createLocalizedRecord('ta', "செஸ்டர்டனின் வேலி (Chesterton’s Fence)", "ஒரு பழைய விதி அல்லது வேலி எதற்காக அமைக்கப்பட்டது என்பதை புரிந்து கொள்ளாமல் அதை அகற்றக்கூடாது என்ற விவேகமான கொள்கை.", ["விதிகளின் பின்னணியை அறிந்து கொள்ளுங்கள்","அவசர சீர்திருத்தங்களை தவிருங்கள்","அனுபவத்தின் உண்மையை மதியுங்கள்"]),
  kn: createLocalizedRecord('kn', "ಚೆಸ್ಟರ್‌ಟನ್ ಬೇಲಿ (Chesterton’s Fence)", "ಒಂದು ಹಳೆಯ ನಿಯಮ ಅಥವಾ ಬೇಲಿಯನ್ನು ಏಕೆ ನಿರ್ಮಿಸಲಾಯಿತು ಎಂದು ತಿಳಿಯುವವರೆಗೆ ಅದನ್ನು ತೆಗೆದುಹಾಕಬಾರದು ಎಂಬ ವಿವೇಕಯುತ ತತ್ವ.", ["ನಿಯಮಗಳ ಹಿಂದಿನ ಉದ್ದೇಶ ತಿಳಿಯಿರಿ","ಅತಿಯಾದ ಆತುರದಿಂದ ಬದಲಾವಣೆ ಮಾಡಬೇಡಿ","ಹಳೆಯ ವ್ಯವಸ್ಥೆಗಳ ಇತಿಹಾಸವನ್ನು ಗೌರವಿಸಿ"]),
  ml: createLocalizedRecord('ml', "ചെസ്റ്റർട്ടന്റെ വേലി (Chesterton’s Fence)", "ഒരു പഴയ നിയമമോ വേലിയോ എന്തിനാണ് ഉണ്ടാക്കിയതെന്ന് മനസ്സിലാക്കാതെ അത് മാറ്റരുതെന്ന വിവേകപൂർണ്ണമായ തത്വം.", ["നിയമങ്ങൾക്ക് പിന്നിലെ കാരണം കണ്ടെത്തുക","ധൃതിപിടിച്ചുള്ള മാറ്റങ്ങൾ ഒഴിവാക്കുക","പഴയ അനുഭവങ്ങളെ ബഹുമാനിക്കുക"]),
  bn: createLocalizedRecord('bn', "চেস্টারটনের বেড়া (Chesterton’s Fence)", "একটি পুরোনো নিয়ম বা প্রতিবন্ধকতা কেন তৈরি করা হয়েছিল তা না জেনে তা ভেঙে ফেলা অনুচিত—এই বিষয়ক সংস্কারমূলক সতর্কতা।", ["নিয়ম ভাঙার আগে তার পেছনের কারণ জানুন","সংস্কারের অন্ধ আবেগে ভুল করবেন না","বিবর্তিত ব্যবস্থার ইতিহাসকে শ্রদ্ধা করুন"]),
  pa: createLocalizedRecord('pa', "ਚੈਸਟਰਟਨ ਦਾ ਵਾੜਾ (Chesterton’s Fence)", "ਜਦੋਂ ਤੱਕ ਇਹ ਪਤਾ ਨਾ ਲੱਗੇ ਕਿ ਪੁਰਾਣਾ ਨਿਯਮ ਜਾਂ ਵਾੜ ਕਿਉਂ ਲਗਾਈ ਗਈ ਸੀ, ਉਦੋਂ ਤੱਕ ਉਸਨੂੰ ਨਾ ਹਟਾਉਣ ਦਾ ਸਿਆਣਾ ਸਿਧਾਂਤ।", ["ਨਿਯਮ ਹਟਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਕਾਰਨ ਲੱਭੋ","ਬਦਲਾਅ ਦੀ ਕਾਹਲ ਤੋਂ ਬਚੋ","ਪੁਰਾਣੇ ਤਜਰਬੇ ਦਾ ਸਤਿਕਾਰ ਕਰੋ"]),
  ur: createLocalizedRecord('ur', "چیسٹرٹن کی باڑ (Chesterton’s Fence)", "جب تک یہ معلوم نہ ہو جائے کہ کوئی پرانا قانون یا باڑ کیوں بنائی گئی تھی، تب تک اسے ہٹانا غیر دانشمندانہ ہے۔", ["اصولوں کے پس منظر کو سمجھیں","جلدی میں تبدیلیاں کرنے سے گریز کریں","پرانے تجربات اور تاریخ کا احترام کریں"]),
  or: createLocalizedRecord('or', "ଚେଷ୍ଟରଟନଙ୍କ ବାଡ଼ (Chesterton’s Fence)", "କୌଣସି ପୁରୁଣା ନିୟମ ବା ବାଡ଼ କାହିଁକି ତିଆରି ହୋଇଥିଲା ତାହା ନଜାଣି ତାହାକୁ ନଭାଙ୍ଗିବାର ବିଜ୍ଞତାପୂର୍ଣ୍ଣ ନୀତି।", ["ନିୟମ ପଛର କାରଣ ଖୋଜନ୍ତୁ","ବଦଳାଇବାରେ ତରବର ହୁଅନ୍ତୁ ନାହିଁ","ପୁରୁଣା ଅନୁଭବକୁ ସମ୍ମାନ ଦିଅନ୍ତୁ"]),
  as: createLocalizedRecord('as', "চেষ্টাৰটনৰ বেৰা (Chesterton’s Fence)", "এটা পুৰণি নিয়ম বা বেৰা কিয় নিৰ্মাণ কৰা হৈছিল সেয়া নজনাকৈ তাক আঁতৰাই পেলোৱা অনুচিত—এই সম্পৰ্কীয় সতৰ্কতামূলক নীতি।", ["নিয়ম ভঙাৰ পূৰ্বে কাৰণ বিচাৰক","সংস্কাৰৰ নামত খৰখেদা নকৰিব","পুৰণি অভিজ্ঞতা আৰু ইতিহাসক শ্ৰদ্ধা কৰক"]),
};
