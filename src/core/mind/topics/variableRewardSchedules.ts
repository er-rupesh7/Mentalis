import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Social Media Psychology Track
 * Topic: Variable Reward Schedules: The Casino in Your Pocket
 * Category: Social Media Psychology (social_media_tech)
 * 
 * Academic Grounding:
 * - Skinner (1953): Science and Human Behavior (Operant Conditioning & Variable Ratio Schedules)
 * - Schüll (2012): Addiction by Design: Machine Gambling in Las Vegas
 * - Alter (2017): Irresistible: The Rise of Addictive Technology and the Business of Keeping Us Hooked
 * - Schultz (1998): Predictive Reward Signal of Dopamine Neurons
 */

export const TOPIC_VARIABLE_REWARD_SCHEDULES_EN: MindTopicDetail = {
  id: 'variable_reward_schedules',
  categoryId: 'social_media_tech',
  slug: 'variable-reward-schedules',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 2,
  viewCount: 6120,
  shareCount: 520,
  bookmarkCount: 1100,
  title: 'Variable Reward Schedules: How Apps Turn Phones into Slot Machines',
  subtitle: 'The neuroscience of dopamine anticipation: pull-to-refresh, algorithmic feeds, and breaking the infinite loop.',
  shortDescription: 'An operant conditioning mechanism where rewards are delivered unpredictably, maximizing compulsive engagement and habitual checking.',
  oneLineExplanation: 'In simple terms: Checking your phone compulsively because you never know when you might win a hit of social dopamine.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'Ever wondered why you open an app with zero intent, swipe down to refresh, and repeat the action twenty times an hour? B.F. Skinner discovered that animals pull a lever with the most manic persistence not when they get food every time, but when food appears unpredictably. Tech companies borrowed the exact mathematical mechanics of Las Vegas slot machines—turning the "pull-to-refresh" gesture into an arm-pull on a digital one-armed bandit.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'In behavioral psychology, a Variable Ratio Schedule of Reinforcement delivers rewards after an unpredictable number of responses. Wolfram Schultz’s neurobiology research showed that dopamine is NOT the molecule of pleasure; it is the molecule of anticipation and prediction error. When a reward is 100% predictable, dopamine firing flatlines. But when a reward is unpredictable (maybe a notification, maybe a funny reel, maybe nothing), dopamine spikes to its highest possible biological ceiling, compelling the animal or user to repeat the behavior incessantly.',
  summary60s: 'Slot machines are the most addictive gambling devices in human history because every spin offers intermittent hope. Modern app designers explicitly modeled feed mechanics after slot machines: (1) The "Pull-to-Refresh" motion mimics pulling the slot lever; (2) The 1.5-second loading spinner mimics the spinning reels, building agonizing suspense; (3) The variable payoff delivers intermittent social validation—sometimes 50 likes (jackpot), sometimes 0 likes (loss). This intermittent reinforcement creates a compulsive behavioral loop that overrides conscious willpower.',

  quickTakeaways: [
    'Anticipation, Not Pleasure: Dopamine surges before the reward, driving the frantic search rather than the enjoyment',
    'The Slot Machine Architecture: Infinite scroll and pull-to-refresh were engineered intentionally to mimic gambling mechanics',
    'The Loss of Stopping Cues: Traditional media had natural endpoints (the end of a newspaper page or chapter); modern feeds are bottomless',
    'Friction is the Cure: Removing icons, turning off badges, and grayscale screen settings disrupt the dopamine priming loop',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Dopamine prediction error. The brain evolved to hunt and forage in environments where food was unpredictable. If berries were found in every bush, no obsessive scanning was needed. But when valuable resources appeared randomly, the brain evolved a hyper-alert dopamine search engine to keep the animal foraging.',
  evolutionaryMechanism: 'Foraging survival: unpredictable rewards guaranteed relentless effort in hunting prey and gathering scarce wild resources.',

  // SECTION E — HOW DOES IT WORK?
  howItWorks: 'The Hook Model (Nir Eyal): (1) Trigger (internal boredom or phone buzz); (2) Action (tap app and pull to refresh); (3) Variable Reward (scrolling past 5 boring posts until hitting 1 viral meme); (4) Investment (leaving a comment or posting a photo), which primes the next trigger.',
  whereYouEncounterIt: 'Instagram/TikTok reels feeds, dating apps (swiping profiles), email inbox refreshing, stock trading apps (crypto tickers), and mobile gaming loot boxes.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Fixed Rewards vs. Variable Reward Loops',
    description: 'Why unpredictability drives obsessive behavior.',
    analogySideA: {
      label: 'Fixed Reward (Predictable)',
      detail: 'Pressing a button drops exactly one biscuit every single time. The animal eats when hungry and walks away when full. Zero obsession.',
    },
    analogySideB: {
      label: 'Variable Reward (Slot Machine)',
      detail: 'Pressing the button drops a biscuit randomly (sometimes on press 3, sometimes press 40). The animal presses frantically until exhausted.',
    },
  },

  researchSummary: 'B.F. Skinner (1953) proved across thousands of trials that pigeons and rats exposed to variable ratio reinforcement pressed levers at the highest, most steady rates and showed the greatest resistance to extinction compared to any other reinforcement schedule in behavioral history.',
  limitationsAndControversies: 'Technology is not inherently evil; variable schedules also make learning games (Duolingo) and skill acquisition engaging. The ethical boundary is whether the system is designed to serve the user\'s conscious goals or to maximize advertising eyeball extraction at the expense of psychological health.',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'Unlocking your phone without knowing why, only to find yourself scrolling an app 30 seconds later',
    'Swiping down to refresh an inbox or social feed that you checked less than two minutes ago',
    'Feeling a phantom vibration in your pocket when your phone hasn\'t actually received any message',
    'Losing track of time: intending to check one message and staying trapped in an infinite feed for 45 minutes',
    'Experiencing immediate restlessness or irritability whenever you are waiting in an elevator or line without your phone',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_variable_01',
      scenarioType: 'indian_context',
      title: 'The Bedtime 10-Minute Reel Mirage',
      vignette: 'Aditya, a software engineer in Hyderabad, climbs into bed at 11:00 PM intending to sleep for an early client meeting. He decides to check Instagram for "just 5 minutes." The first three reels are unremarkable. Then, the fourth reel is an astonishing cricket video. His dopamine surges. He swipes again: boring advertisement. Swipes again: mild meme. Swipes again: hilarious regional comedy skit (jackpot!). Two hours vanish. It is 1:15 AM. His eyes burn, his brain is buzzing with cortisol, and his sleep cycle is derailed.',
      breakdownAnalysis: 'Aditya was trapped in an algorithmic variable ratio schedule. If every reel was boring, he would have closed the app. If every reel was great, he would have reached satiation. By interspersing mediocre posts with unpredictable viral hits, the recommendation engine kept his dopaminergic reward pathway perpetually on the edge of the next jackpot.',
      recommendedAction: 'Eliminate the physical environment: Aditya must charge his phone in the living room and buy a simple ₹300 analog bedside alarm clock. Removing the physical device breaks the bedtime habit loop entirely.',
    },
  ],

  examples: [
    {
      id: 'ex_variable_01',
      domain: 'social_media',
      displayOrder: 1,
      title: 'The Pull-to-Refresh Haptic Tick',
      description: 'Twitter/X and Instagram deliberately delay the loading of new posts by 1.2 seconds and provide a slight mechanical haptic click on release, mimicking the physical pull and release of a casino slot machine handle.',
      takeaway: 'Micro-delays in app loading are intentional design features engineered to build anticipation.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'To break variable reward addiction, you must introduce "Artificial Friction." The reason variable rewards work is that the cost of an action is nearly zero (a single thumb flick). When you increase the mechanical and cognitive cost of accessing the reward, compulsive checking collapses.',
  psychologicalDefenses: [
    'The Grayscale Defense: Switch your smartphone display to black-and-white (grayscale); stripping the vibrant color palette cuts visual dopamine stimulation by over 40%',
    'Kill All Non-Human Notifications: Turn off every notification badge, banner, and sound except direct messages and phone calls from real humans',
    'The 30-Second Lockout: Place social apps in nested folders off the home screen or use app-blockers with a mandatory 15-second breathing countdown',
    'Physical Device Boundaries: Keep phones out of bedrooms, off the dining table, and put them inside a drawer during deep focus sessions',
  ],

  commonMisconceptions: [
    {
      misconception: 'Phone addiction is just a personal failure of discipline and willpower.',
      reality: 'You are pitting your willpower against thousands of world-class neuroscientists and software engineers whose multi-billion-dollar stock valuation depends entirely on hijacking your brain\'s dopamine circuitry.',
    },
  ],

  reflectionPrompt: 'How many times today did you reach for your phone purely out of boredom rather than a specific operational task?',

  interactiveScenario: {
    id: 'interactive_variable_01',
    topicId: 'variable_reward_schedules',
    scenarioTitle: 'The Midnight Notification Craving',
    scenarioDescription: 'You are studying for an important exam. You feel a wave of mental fatigue and your thumb instinctively reaches to pick up your phone to check if anyone liked your recent photo.',
    vignetteSourceType: 'social_media',
    options: [
      {
        id: 'opt_1',
        text: 'Unlock the phone "for just 30 seconds" to see the notification count so you can stop thinking about it.',
        isCorrect: false,
        cognitiveTakeaway: 'You pull the slot machine lever! Even a single notification will trigger an algorithmic rabbit hole that consumes 30 minutes.',
      },
      {
        id: 'opt_2',
        text: 'Recognize the urge as a dopamine craving for variable rewards, place the phone across the room in a drawer, and take a 5-minute physical walk to drink water.',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of digital hygiene! You acknowledge the dopamine cue and replace the virtual slot machine with healthy somatic regulation.',
      },
      {
        id: 'opt_3',
        text: 'Smash your smartphone with a hammer in an emotional rage.',
        isCorrect: false,
        cognitiveTakeaway: 'Destructive impulse that fails to build internal cognitive boundaries and sustainable habits.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_variable_01',
      questionType: 'multiple_choice',
      prompt: 'Which schedule of reinforcement, discovered by B.F. Skinner, produces the highest rate of compulsive behavior and the greatest resistance to stopping?',
      options: [
        { id: 'opt_a', text: 'Fixed Interval Schedule (reward given every 10 minutes)', isCorrect: false },
        { id: 'opt_b', text: 'Variable Ratio Schedule (reward delivered after an unpredictable number of actions)', isCorrect: true, feedbackText: 'Correct! The unpredictability of the reward schedule maximizes dopamine anticipation and prevents behavioral extinction.' },
        { id: 'opt_c', text: 'Continuous Reinforcement (reward given after every single action)', isCorrect: false },
      ],
      cognitiveTakeaway: 'Unpredictable variable ratio schedules are the foundational mechanism of gambling and social media feeds.',
    },
  ],

  references: [
    {
      citation: 'Skinner, B. F. (1953). Science and human behavior. Macmillan.',
      doiOrUrl: 'https://doi.org/10.1037/10019-000',
      relevance: 'The foundational behavioral science text establishing operant conditioning and variable reinforcement schedules.',
      displayOrder: 1,
    },
    {
      citation: 'Schüll, N. D. (2012). Addiction by design: Machine gambling in Las Vegas. Princeton University Press.',
      doiOrUrl: 'https://doi.org/10.1515/9781400844784',
      relevance: 'Seminal investigation into how modern algorithmic technologies adapt casino slot machine architecture to induce human trance states.',
      displayOrder: 2,
    },
  ],

  tags: ['Social Media Psychology', 'Dopamine', 'Variable Rewards', 'Addiction by Design', 'Digital Well-being'],
  relatedTopics: [
    { topicId: 'algorithmic_reinforcement', slug: 'algorithmic-reinforcement', title: 'Algorithmic Reinforcement', relationshipType: 'amplified_by' },
    { topicId: 'emotional_regulation', slug: 'emotional-regulation', title: 'Emotional Regulation', relationshipType: 'counteracted_by' },
  ],
  seoTitle: 'Variable Reward Schedules: How Social Media Apps Hook Your Brain | Mentalab Mind',
  seoDescription: 'Master the science of Variable Reward Schedules. Learn why pull-to-refresh acts like a casino slot machine, how dopamine works, and 4 practical digital boundaries.',
  canonicalUrl: '/mind/social-media-psychology/variable-reward-schedules',
  ogImageUrl: '/images/mind/variable-reward-schedules.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'Variable ratio schedules of reinforcement maximize behavioral persistence through dopamine prediction errors in the mesolimbic pathway.',
};

export const TOPIC_VARIABLE_REWARD_SCHEDULES_HINGLISH: MindTopicDetail = {
  ...TOPIC_VARIABLE_REWARD_SCHEDULES_EN,
  title: 'Variable Reward Schedules: Social Media Apps Hamare Phone Ko Casino Slot Machine Kaise Banate Hain',
  subtitle: 'Dopamine anticipation aur infinite scroll ka science: Hum bina wajah phone refresh kyu karte rehte hain?',
  shortDescription: 'Ek aisi behavioral psychology trick jisme inaam ya notifications randomly aate hain, jisse dimaag me bar-bar app check karne ki aadat ban jaati hai.',
  oneLineExplanation: 'Simple shabdon me: Har thodi der me phone refresh karna yeh dekhne ke liye ki koi naya notification ya reel aayi ya nahi.',

  summary30s: 'Kya aapne kabhi socha hai ki aap bina kisi kaam ke phone utha kar Instagram ya WhatsApp swipe kyu karne lagte hain? B.F. Skinner ne discover kiya tha ki animals kisi lever ko sabse zyada pagalpan ke sath tab press karte hain jab unhe khana har baar nahi, balki randomly milta hai. Tech apps ne Las Vegas ke casino slot machines ki poori mathematics copy karke hamari ungliyo par set kar di hai.',
  coreConcept: 'Neuroscience batati hai ki Dopamine khushi ka nahi, balki anticipation (umeed) ka chemical hai. Agar reward fixed ho, toh dopamine nahi nikalta. Lekin jab reward unpredictable ho (kabhi 50 likes, kabhi zero, kabhi funny reel, kabhi boring ad), toh dopamine ka blast hota hai aur dimaag us app ka aadi ban jata hai.',
  summary60s: 'Pull-to-refresh ka gesture bilkul slot machine ke lever jaisa hai. Jab aap niche khichte hain, wo 1.5 second ghoomta hai (suspense create karta hai), aur fir random content nikal kar aata hai. Infinite scroll me stopping cues nahi hote (jaise newspaper ka aakhri page hota tha), isliye log 5 minute ke chakkar me 2 ghante barbaad kar dete hain.',

  quickTakeaways: [
    'Anticipation ka Dopamine: Dimaag naye reward ki umeed me pagal hota hai, reward milne ke baad nahi',
    'Casino Slot Machine: Pull-to-refresh aur reels bilkul Las Vegas ke juve ke dhabbe jaise design kiye gaye hain',
    'Stopping cues ka na hona: Infinite scroll me koi aakhri page nahi hota, isliye dimaag khud se nahi rukta',
    'Grayscale Hack: Phone ki screen ko Black & White kardo; 40% dopamine attraction turant khatam ho jayega',
  ],

  whyItHappens: 'Purane zamaane me shikar ya jungle me phal milna unpredictable tha. Dimaag me random search karne ka system ban gaya jo apps ne hack kar liya.',
  evolutionaryMechanism: 'Unpredictable food search ke liye dopamine continuous effort banaye rakhta tha.',

  howItWorks: 'Raat ko 11 baje bed par Aditya sirf 5 minute reel dekhne baithta hai. Kuch boring, fir ek super funny reel. Dimaag aur chahta hai. 1:30 AM baj jaate hain.',
  howToRespond: 'Phone ko bedroom se bahar rakhiye. Normal ghadi use kijiye. Notifications off kijiye taaki aap phone control karein, phone aapko nahi.',

  reflectionPrompt: 'Aapne aaj kitni baar bina kisi zaroori kaam ke phone unlock karke scroll kiya?',
  seoTitle: 'Variable Reward Schedules Kya Hai? Social Media Addiction Psychology | Mentalab Mind',
  seoDescription: 'Janiye kaise social media apps hamare dopamine ko hack karte hain. Variable reward schedules, infinite scroll psychology aur screen time control tips.',
  canonicalUrl: '/mind/social-media-psychology/variable-reward-schedules',
};

function createLocalizedVariableRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_VARIABLE_REWARD_SCHEDULES_EN,
    title,
    subtitle,
    oneLineExplanation: oneLine,
    summary30s,
    coreConcept,
    quickTakeaways: takeaways,
    seoTitle: `${title} | Mentalab Mind`,
    seoDescription: `${summary30s.slice(0, 150)}...`,
  };
}

export const TOPIC_VARIABLE_REWARD_SCHEDULES: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_VARIABLE_REWARD_SCHEDULES_EN,
  hinglish: TOPIC_VARIABLE_REWARD_SCHEDULES_HINGLISH,
  hi: createLocalizedVariableRecord(
    'hi',
    'परिवर्तनीय पुरस्कार कार्यक्रम (Variable Reward Schedules): मोबाइल ऐप्स द्वारा स्लॉट मशीन का निर्माण',
    'डोपामाइन और प्रत्याशा का विज्ञान: सोशल मीडिया ऐप्स हमारे ध्यान को कैसिनो की तरह कैसे बांधते हैं।',
    'सरल शब्दों में: यह जानने की उत्सुकता में बार-बार फोन जांचना कि कोई नया नोटिफिकेशन या संदेश आया है या नहीं।',
    'परिवर्तनीय पुरस्कार कार्यक्रम तब काम करता है जब पुरस्कार अनिश्चित अंतरालों पर दिए जाते हैं, जिससे व्यवहार को दोहराने की लत लग जाती है।',
    'स्किनर (1953) और शुल्ज के अनुसार, अप्रत्याशित परिणाम मस्तिष्क में डोपामाइन की भारी बाढ़ लाते हैं।',
    [
      'प्रत्याशा का प्रभाव: डोपामाइन पुरस्कार मिलने से पहले उत्सुकता में चरम पर होता है',
      'स्लॉट मशीन डिजाइन: स्क्रीन खींचकर रीफ्रेश करना कैसिनो मशीन जैसा ही है',
      'विराम का अभाव: असीमित स्क्रॉलिंग मस्तिष्क को रुकने का संकेत नहीं देती',
      'समाधान: फोन को ग्रेस्केल करें और गैर-जरूरी नोटिफिकेशन बंद रखें',
    ]
  ),
  gu: createLocalizedVariableRecord(
    'gu',
    'વેરિયેબલ રિવોર્ડ શેડ્યુલ્સ: એપ્સ ફોનને સ્લોટ મશીનમાં કેવી રીતે ફેરવે છે?',
    'ડોપામાઇન અને અનિશ્ચિત ઇનામનું વિજ્ઞાન: સોશિયલ મીડિયાની લત પાછળનું સાચું રહસ્ય.',
    'સરળ શબ્દોમાં: કંઈક નવું આવ્યું હશે તે આશામાં વારંવાર ફોન રિફ્રેશ કરવો.',
    'જ્યારે ઈનામ ક્યારે મળશે તે નક્કી ન હોય ત્યારે માણસ તે કામ વારંવાર કરવા મજબૂર બને છે.',
    'સ્ક્રીન સમય નિયંત્રિત કરવા માટે બિનજરૂરી નોટિફિકેશન બંધ રાખવા જરૂરી છે.',
    ['અનિશ્ચિતતાની જાળ', 'ડોપામાઇનનો ઉછાળો', 'સ્ક્રીન નિયંત્રણ જરૂરી']
  ),
  mr: createLocalizedVariableRecord(
    'mr',
    'व्हेरिएबल रिवॉर्ड शेड्यूल्स: सोशल मीडिया ॲप्स फोनला कॅसिनो कसे बनवतात?',
    'डोपामाइन आणि अनपेक्षित बक्षिसांचे मानसशास्त्र: सतत फोन तपासण्याच्या सवयीचे कारण.',
    'सोप्या भाषेत: काहीतरी नवीन आले असेल या आशेने विनाकारण सतत फोन उघडून पाहणे.',
    'अनपेक्षित मिळणाऱ्या प्रतिसादांमुळे मेंदूला फोन वारंवार वापरण्याचे व्यसन लागते.',
    'फोनचा मोह टाळण्यासाठी स्क्रीन ब्लॅक अँड व्हाईट करणे आणि नोटिफिकेशन्स बंद ठेवणे प्रभावी आहे.',
    ['सवयीचे मानसशास्त्र', 'अनपेक्षित बक्षिसे', 'डिजिटल डिटॉक्स करा']
  ),
  bn: createLocalizedVariableRecord(
    'bn',
    'ভেরিয়েবল রিওয়ার্ড শিডিউল: অ্যাপস কীভাবে ফোনকে স্লট মেশিনে পরিণত করে',
    'ডোপামিন ও অপ্রত্যাশিত পুরস্কারের বিজ্ঞান: সোশ্যাল মিডিয়ার আসক্তির আসল কারণ।',
    'সহজ কথায়: নতুন কিছু এসেছে কি না তা দেখার জন্য বারবার ফোন রিফ্রেশ করার মানসিকতা।',
    'পুরস্কারের অনিশ্চয়তা মানুষকে ক্রমাগত ফোন ব্যবহারে বাধ্য করে।',
    'প্রয়োজনের অতিরিক্ত স্ক্রিন টাইম নিয়ন্ত্রণে নোটিফিকেশন বন্ধ রাখুন।',
    ['অনিশ্চয়তার ফাঁদ', 'ডোপামিনের প্রভাব', 'ডিজিটাল নিয়ন্ত্রণ জরুরি']
  ),
  ta: createLocalizedVariableRecord(
    'ta',
    'மாறும் வெகுமதி அட்டவணைகள்: செயலிகள் தொலைபேசியை சூதாட்ட இயந்திரமாக மாற்றுவது எப்படி',
    'டோபமைன் மற்றும் எதிர்பார்ப்பின் அறிவியல்: சமூக ஊடக அடிமைத்தனத்தின் பின்னணி.',
    'எளிய சொற்களில்: ஏதேனும் புதிய அறிவிப்பு வந்துள்ளதா என்று அடிக்கடி திரையை புதுப்பிப்பது.',
    'வெகுமதிகள் எப்போது கிடைக்கும் என்ற நிச்சயமற்ற தன்மை தீவிர பழக்கத்தை உருவாக்குகிறது.',
    'அறிவிப்புகளை முடக்குவதும் திரைப் பழக்கத்தை மாற்றுவதும் ஆரோக்கியத்திற்கு நல்லது.',
    ['நிச்சயமற்ற தன்மை', 'டோபமைன் உந்துதல்', 'திரை நேரம் கட்டுப்பாடு']
  ),
  te: createLocalizedVariableRecord(
    'te',
    'వేరియబుల్ రివార్డ్ షెడ్యూల్స్: యాప్‌లు ఫోన్‌ను క్యాసినో మెషీన్‌గా ఎలా మారుస్తాయి?',
    'డోపమైన్ మరియు అనిశ్చిత బహుమతుల విజ్ఞానం: సోషల్ మీడియా వ్యసనం వెనుక ఉన్న రహస్యం.',
    'సులభమైన మాటల్లో: ఏదో కొత్త విషయం వచ్చి ఉంటుందనే ఆశతో మాటిమాటికీ ఫోన్ చెక్ చేయడం.',
    'ఫలితం ఎప్పుడు వస్తుందో తెలియనప్పుడు మెదడు పదేపదే అదే పనిని చేయాలని కోరుకుంటుంది.',
    'స్క్రీన్ సమయాన్ని తగ్గించడానికి నోటిఫికేషన్‌లను నిలిపివేయండి.',
    ['అనిశ్చిత బహుమతులు', 'డోపమైన్ ప్రవాహం', 'ఫోన్ వినియోగం తగ్గించండి']
  ),
  kn: createLocalizedVariableRecord(
    'kn',
    'ವೇರಿಯೇಬಲ್ ರಿವಾರ್ಡ್ ಶೆಡ್ಯೂಲ್ಸ್: ಆ್ಯಪ್‌ಗಳು ಫೋನ್ ಅನ್ನು ಕ್ಯಾಸಿನೊ ಯಂತ್ರವನ್ನಾಗಿಸುವುದು ಹೇಗೆ?',
    'ಡೋಪಮೈನ್ ಮತ್ತು ಅನಿಶ್ಚಿತ ಬಹುಮಾನಗಳ ವಿಜ್ಞಾನ: ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮಗಳ ಚಟದ ರಹಸ್ಯ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಏನಾದರೂ ಹೊಸತು ಬಂದಿರಬಹುದೆಂಬ ಕುತೂಹಲದಿಂದ ಮತ್ತೆ ಮತ್ತೆ ಫೋನ್ ನೋಡುವುದು.',
    'ಪ್ರತಿಫಲವು ಅನಿರೀಕ್ಷಿತವಾಗಿದ್ದಾಗ ಮೆದುಳು ಆ ಕೆಲಸವನ್ನು ಪದೇ ಪದೇ ಮಾಡಲು ಪ್ರಚೋದಿಸುತ್ತದೆ.',
    'ಅನಗತ್ಯ ನೋಟಿಫಿಕೇಶನ್‌ಗಳನ್ನು ಆಫ್ ಮಾಡಿ ಸಮಯ ಉಳಿಸಿ.',
    ['ಅನಿಶ್ಚಿತ ಬಹುಮಾನ', 'ಡೋಪಮೈನ್ ಪ್ರಭಾವ', 'ಸ್ಕ್ರೀನ್ ಸಮಯ ನಿಯಂತ್ರಿಸಿ']
  ),
  ml: createLocalizedVariableRecord(
    'ml',
    'വേരിയബിൾ റിവാർഡ് ഷെഡ്യൂളുകൾ: ആപ്പുകൾ ഫോണിനെ സ്ലോട്ട് മെഷീനാക്കി മാറ്റുന്നത് എങ്ങനെ',
    'ഡോപാമൈനും അനിശ്ചിത പ്രതിഫലങ്ങളുടെ ശാസ്ത്രവും: സോഷ്യൽ മീഡിയ ആസക്തിയുടെ മനഃശാസ്ത്രം.',
    'ലളിതമായി പറഞ്ഞാൽ: എന്തെങ്കിലും പുതിയ അറിയിപ്പ് വന്നിട്ടുണ്ടോ എന്നറിയാൻ ഇടയ്ക്കിടെ ഫോൺ പരിശോധിക്കുന്നത്.',
    'പ്രതിഫലം എപ്പോൾ ലഭിക്കുമെന്ന് അറിയാത്ത അവസ്ഥ പെരുമാറ്റത്തെ ആവർത്തിക്കാൻ പ്രേരിപ്പിക്കുന്നു.',
    'അനാവശ്യ നോട്ടിഫിക്കേഷനുകൾ ഒഴിവാക്കി സ്ക്രീൻ സമയം ക്രമീകരിക്കുക.',
    ['അനിശ്ചിത പ്രതിഫലം', 'ഡോപാമൈൻ സ്വാധീനം', 'ഡിജിറ്റൽ നിയന്ത്രണം']
  ),
  pa: createLocalizedVariableRecord(
    'pa',
    'ਵੇਰੀਏਬਲ ਰਿਵਾਰਡ ਸ਼ਡਿਊਲ: ਐਪਸ ਫ਼ੋਨ ਨੂੰ ਸਲਾਟ ਮਸ਼ੀਨ ਕਿਵੇਂ ਬਣਾਉਂਦੀਆਂ ਹਨ?',
    'ਡੋਪਾਮਾਈਨ ਅਤੇ ਬੇਯਕੀਨੇ ਇਨਾਮਾਂ ਦਾ ਵਿਗਿਆਨ: ਸੋਸ਼ਲ ਮੀਡੀਆ ਦੀ ਆਦਤ ਦਾ ਕਾਰਨ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਕੁਝ ਨਵਾਂ ਆਇਆ ਹੋਵੇਗਾ ਇਸ ਆਸ ਵਿੱਚ ਵਾਰ-ਵਾਰ ਫ਼ੋਨ ਨੂੰ ਰਿਫ੍ਰੈਸ਼ ਕਰਨਾ।',
    'ਜਦੋਂ ਨਤੀਜਾ ਅਚਾਨਕ ਮਿਲਦਾ ਹੈ ਤਾਂ ਦਿਮਾਗ ਉਸ ਕੰਮ ਦਾ ਆਦੀ ਹੋ ਜਾਂਦਾ ਹੈ।',
    'ਬੇਲੋੜੀਆਂ ਨੋਟੀਫਿਕੇਸ਼ਨਾਂ ਬੰਦ ਕਰਕੇ ਸਕ੍ਰੀਨ ਸਮਾਂ ਘਟਾਓ।',
    ['ਅਣਕਿਆਸਾ ਇਨਾਮ', 'ਡੋਪਾਮਾਈਨ ਦਾ ਅਸਰ', 'ਸਕ੍ਰੀਨ ਸਮਾਂ ਸੀਮਤ ਕਰੋ']
  ),
  ur: createLocalizedVariableRecord(
    'ur',
    'ویری ایبل ریوارڈ شیڈولز: ایپس فون کو سلاٹ مشین کیسے بناتی ہیں؟',
    'ڈوپامائن اور غیر متوقع انعامات کی سائنس: سوشل میڈیا کے چنگل میں پھنسنے کی نفسیات۔',
    'آسان الفاظ میں: کچھ نیا دیکھنے کی امید میں بار بار فون اسکرول اور ریفریش کرنا۔',
    'غیر متوقع نتائج انسان کے دماغ کو بار بار فون چیک کرنے پر مجبور کرتے ہیں۔',
    'غیر ضروری نوٹیفیکیشن بند کر کے سکرین ٹائم محدود کریں۔',
    ['غیر متوقع انعامات', 'ڈوپامائن کا دباؤ', 'ڈیجیٹل اعتدال پسندی']
  ),
  or: createLocalizedVariableRecord(
    'or',
    'ଭେରିଏବଲ୍ ରିୱାର୍ଡ ସିଡ୍ୟୁଲ୍ସ: ଆପ୍ସ ଫୋନକୁ ସ୍ଲଟ୍ ମେସିନ୍ କିପରି ବନାଏ?',
    'ଡୋପାମାଇନ୍ ଏବଂ ଅପ୍ରତ୍ୟାଶିତ ପୁରସ୍କାରର ବିଜ୍ଞାନ: ସୋସିଆଲ୍ ମିଡ଼ିଆ ଅଭ୍ୟାସର ରହସ୍ୟ।',
    'ସହଜ ଭାଷାରେ: କିଛି ନୂଆ ଆସିଥିବ ଭାବି ବାରମ୍ବାର ଫୋନ୍ ରିଫ୍ରେସ୍ କରିବା।',
    'ଫଳାଫଳ ଅନିଶ୍ଚିତ ହେଲେ ମସ୍ତିଷ୍କ ସେହି କାର୍ଯ୍ୟ ବାରମ୍ବାର କରିବାକୁ ବାଧ୍ୟ କରେ।',
    'ଅଦରକାରୀ ନୋଟିଫିକେସନ୍ ବନ୍ଦ କରି ସ୍କ୍ରିନ୍ ସମୟ ନିୟନ୍ତ୍ରଣ କରନ୍ତୁ।',
    ['ଅନିଶ୍ଚିତତା ଜାଲ', 'ଡୋପାମାଇନ୍ ପ୍ରଭାବ', 'ସ୍କ୍ରିନ୍ ସମୟ ସୀମିତ ରଖନ୍ତୁ']
  ),
  as: createLocalizedVariableRecord(
    'as',
    'ভেৰিয়েবল ৰিৱাৰ্ড শ্বিডিউল: এপসমূহে ফোনক স্লট মেচিনত কেনেকৈ পৰিণত কৰে',
    'ডোপামিন আৰু অপ্ৰত্যাশিত পুৰস্কাৰৰ বিজ্ঞান: সামাজিক মাধ্যমৰ আসক্তিৰ আঁৰৰ ৰহস্য।',
    'সহজ কথাত: কিবা নতুন আহিছে বুলি আশা কৰি বাৰে বাৰে ফোন ৰিফ্ৰেছ কৰা।',
    'ফলাফলৰ অনিশ্চয়তাই মানুহক বাৰে বাৰে ফোন ব্যৱহাৰ কৰিবলৈ বাধ্য কৰে।',
    'অপ্রয়োজনীয় জাননীসমূহ বন্ধ কৰি স্ক্ৰীণ সময় সীমিত ৰাখক।',
    ['অনিশ্চয়তাৰ জাল', 'ডোপামিনৰ প্রভাৱ', 'ডিজিটেল নিয়ন্ত্ৰণ']
  ),
};
