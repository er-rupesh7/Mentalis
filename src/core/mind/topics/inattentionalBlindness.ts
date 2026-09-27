import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: Inattentional Blindness: Looking Without Seeing
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Simons, D. J., & Chabris, C. F. (1999): Gorillas in our midst: Sustained inattentional blindness for dynamic events. Perception.
 * - Mack, A., & Rock, I. (1998): Inattentional Blindness. MIT Press.
 * - Neisser, U. (1979): The control of information pickup in selective looking.
 */

export const TOPIC_INATTENTIONAL_BLINDNESS_EN: MindTopicDetail = {
  id: 'inattentional_blindness',
  categoryId: 'cognitive_biases',
  slug: 'inattentional-blindness',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 15,
  viewCount: 6890,
  shareCount: 540,
  bookmarkCount: 1190,
  title: 'Inattentional Blindness: Looking Without Seeing',
  subtitle: 'The psychological failure to perceive fully visible, unexpected objects when attention is focused on another task.',
  shortDescription: 'A perceptual bias where an individual fails to perceive an unexpected stimulus that is in plain sight, purely due to lack of attention rather than any visual defect.',
  oneLineExplanation: 'Staring straight at a gorilla walking through a basketball game and not noticing it at all.',

  summary30s: 'Famously demonstrated by Christopher Chabris and Daniel Simons in their 1999 "Invisible Gorilla" study, inattentional blindness reveals that conscious seeing requires focused attention. When your brain is intensely occupied counting passes or looking at a smartphone, prominent objects right in front of your eyes are filtered out before reaching conscious awareness.',

  coreConcept: 'The human visual apparatus captures massive amounts of raw sensory data, but working memory bandwidth is severely bottlenecked. To prevent sensory overload, the brain deploys selective attention filters. Anything that does not match the active attentional template is actively suppressed as background noise—even if it is bizarre, dangerous, or obvious.',
  summary60s: 'In the classic experiment, participants watched a video of students passing basketballs and were told to count the exact number of passes made by players wearing white shirts. Halfway through the 60-second video, a person in a full gorilla suit walked into the center of the court, beat their chest at the camera, and walked off. Roughly 50% of viewers completely failed to see the gorilla. When asked: "Did you see anything unusual?", they were astounded when shown the replay. We mistakenly believe we see our entire environment, but we only see what we are actively searching for.',

  quickTakeaways: [
    'Attention Is Vision: Without active cognitive attention, the eye can record an image without the mind ever registering it',
    'Smartphone Danger: Distracted driving is fatal not because hands are busy, but because cognitive attention is hijacked',
    'Auditing Blindspots: Financial auditors and radiologists frequently miss massive anomalies if they fall outside their specific checklist',
    'Cognitive Defibrillation: Intentionally pause focused tasks to execute wide-angle environmental scans',
  ],

  whyItHappens: 'Working memory limitations and thalamic sensory gating. The brain processes high-priority task targets while suppressing non-matching sensory inputs to optimize energy expenditure.',
  evolutionaryMechanism: 'Hunting predators or tracking prey in dense savannah required laser-focused visual attention. Filtering out swaying branches and irrelevant fauna was essential for rapid tactical survival.',

  howItWorks: 'Three physiological steps: (1) Attentional Template: The prefrontal cortex defines a search filter (e.g., "count white shirts"); (2) Thalamic Gating: Visual cortex signals matching the filter are amplified; non-matching signals (the black gorilla) are actively suppressed; (3) Conscious Amnesia: Unattended stimuli vanish without forming episodic memory.',
  whereYouEncounterIt: 'Motorcycle accidents ("Looked But Failed to See" crashes), aviation cockpit errors, medical X-ray readings, cybersecurity monitoring, and walking into lampposts while texting.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Camera Lens vs. Human Consciousness',
    description: 'Why human vision is not an objective video recorder.',
    analogySideA: {
      label: 'The Camera Model (Myth)',
      detail: 'Believes that anything physically reflected onto the retina is consciously seen and recorded.',
    },
    analogySideB: {
      label: 'The Attentional Spotlight (Reality)',
      detail: 'Only objects inside the narrow cone of active attention are perceived; everything else is deleted.',
    },
  },

  researchSummary: 'Simons & Chabris (1999) replicated Neisser\'s selective looking paradigms and proved that roughly 50% of healthy adults miss a 9-second gorilla display. Drew, Vo, and Wolfe (2013) repeated this with 24 experienced radiologists searching for lung nodules: 83% of radiologists failed to notice a gorilla printed in the lung scan that was 48 times larger than an average nodule.',
  limitationsAndControversies: 'Semantic Priming: If an unexpected stimulus is personally meaningful (such as hearing your own name in a loud room or seeing a snake), evolutionary threat circuits can override selective attention.',
  commonMisconceptions: 'Common myth: "I am a skilled multitasker; I can glance at my phone while driving and still notice if a pedestrian steps out." Reality: Inattentional blindness causes your reaction latency to drop to the level of legal intoxication.',

  howToRecognize: [
    'Searching desperately for your car keys or eyeglasses when they are sitting directly in front of you on the table',
    'Driving through a familiar intersection and realizing you have no memory of the last three traffic lights',
    'Proofreading an essay multiple times and missing a duplicated word ("the the") because your brain was processing meaning rather than spelling',
    'Missing a glaring accounting discrepancy because it appeared in an unexpected spreadsheet column',
  ],

  scenarios: [
    {
      id: 'scen_inatt_01',
      scenarioType: 'indian_context',
      title: 'The Ring Road Merge in Bengaluru',
      vignette: 'Deepak was driving on the outer ring road in Bengaluru. He was trying to follow Google Maps directions on his dashboard mount, calculating which flyover exit to take in heavy traffic. While checking the exit sign, he checked his side mirror for approaching cars, saw an open gap, and initiated a right turn. Suddenly, he slammed his brakes as a motorcycle honked inches away. Deepak protested: "Where did you appear from? The road was completely empty!" The motorcyclist had had his headlight on and was traveling in plain sight for 50 meters.',
      breakdownAnalysis: 'Deepak suffered from the classic "Looked But Failed to See" phenomenon. His cognitive template was exclusively filtering for large cars and exit road markers. Because the narrow motorcycle did not match his mental template, his brain suppressed the visual signal.',
      recommendedAction: 'Adopt active "Look-Twice" vehicle scanning: Specifically verbalize "Looking for two-wheelers and pedestrians" before turning, actively resetting your attentional filter.',
    },
  ],

  examples: [
    {
      id: 'ex_inatt_01',
      domain: 'health',
      displayOrder: 1,
      title: 'The Radiologist\'s Gorilla Scan',
      description: 'In a famous Harvard study, 83% of expert radiologists looking for microscopic cancer nodules in CT lung scans failed to notice a picture of a gorilla placed inside the lung scan.',
      takeaway: 'Domain expertise does not protect against inattentional blindness when searching for specific targets.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_inatt_01',
      scenarioContext: 'A fraud analyst is reviewing bank records for unauthorized credit card transactions. She is instructed to flag all single transactions exceeding ₹50,000.',
      question: 'Which systemic risk is most likely to occur due to inattentional blindness?',
      prompt: 'Which systemic risk is most likely to occur due to inattentional blindness?',
      scenarioText: 'A fraud analyst is reviewing bank records for unauthorized credit card transactions. She is instructed to flag all single transactions exceeding ₹50,000.',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Failing to notice an automated bot making thousands of micro-transactions of ₹499 right under her nose',
          explanation: 'Accurate: because her attentional template is hyper-focused on large single amounts, high-frequency small amounts are filtered out as background noise.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Accidentally flagging transactions that are perfectly legitimate',
          explanation: 'This is a false positive error, not inattentional blindness.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Becoming mathematically faster at detecting large transactions over time',
          explanation: 'This describes perceptual learning, not the blindness penalty.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Hyper-specific search targets create blind spots for obvious anomalies that lie outside the target definition.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Perform wide-angle context resets and use automated cross-checks to catch unexpected anomalies.',
  psychologicalDefenses: [
    {
      title: 'The Wide-Angle Scan',
      instruction: 'Before finalizing any high-stakes visual decision (driving, contract review, medical diagnosis), step back for 5 seconds and look without any specific target in mind.',
    },
    {
      title: 'Zero Phone Tolerance During High-Vigilance Tasks',
      instruction: 'Never use hands-free voice calls or text while driving or monitoring critical systems; hands are free, but cognitive bandwidth is zero.',
    },
  ],

  reflectionPrompt: 'When was the last time you looked directly at an object you were searching for and failed to register that it was right in front of your eyes?',
  references: [
    {
      id: 'ref_inatt_01',
      title: 'Gorillas in our midst: Sustained inattentional blindness for dynamic events',
      citation: 'Simons, D. J., & Chabris, C. F. (1999). Perception, 28(9), 1059–1074.',
      authors: 'Daniel J. Simons, Christopher F. Chabris',
      publicationYear: 1999,
      journalOrPublisher: 'Perception',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1068/p281059',
      relevance: 'The iconic invisible gorilla experiment demonstrating widespread human inattentional blindness.',
      displayOrder: 1,
    },
  ],
  tags: ['Cognitive Biases', 'Attention', 'Perception', 'Inattentional Blindness'],
  relatedTopics: [
    { topicId: 'confirmation_bias', slug: 'confirmation-bias', title: 'Confirmation Bias', relationshipType: 'amplified_by' },
  ],
  seoTitle: 'Inattentional Blindness: Why We Look Without Seeing | Mentalab Mind',
  seoDescription: 'Discover the invisible gorilla experiment and why focused attention makes us blind to obvious objects right in front of our eyes.',
  canonicalUrl: '/mind/cognitive-biases/inattentional-blindness',
  ogImageUrl: '/images/mind/inattentional-blindness.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: 'Inattentional blindness is a failure of conscious perceptual access caused by selective attentional gating in working memory.',
};

export const TOPIC_INATTENTIONAL_BLINDNESS_HINGLISH: MindTopicDetail = {
  ...TOPIC_INATTENTIONAL_BLINDNESS_EN,
  title: 'Inattentional Blindness: Saamne Hote Hue Bhi Aankhon Ka Na Dekh Paana',
  subtitle: 'Jab dimaag kisi ek kaam me laga ho, toh saamne khadi obvious cheez bhi gayab ho jati hai.',
  shortDescription: 'Ek aisa perceptual bias jisme insaan ki aankhein theek hone ke bawajood, attention na hone par saamne aayi badi se badi ghatna ya cheez dimaag me register hi nahi hoti.',
  oneLineExplanation: 'Basketball game me ball count karte waqt saamne se gorilla nikal jaye aur pata bhi na chale.',

  summary30s: '1999 me Christopher Chabris aur Daniel Simons ne "Invisible Gorilla" experiment kiya tha. Unhone logon ko basketball passes count karne ko kaha. Video ke beech me ek insaan gorilla suit pehenkar aaya, camera ke saamne chhaati peeti aur chala gaya. 50% log gorilla dekh hi nahi paaye! Kyunki dimaag ka attention passes count karne me laga tha, isliye saamne khada gorilla gayab ho gaya.',
  coreConcept: 'Human vision camera jaisi nahi hoti jo sab record kar le. Dimaag ke paas limited bandwidth hoti hai. Jab hum kisi ek cheez par focus karte hain, toh dimaag baaki saari cheezon ko background noise maan kar delete kar deta hai.',
  summary60s: 'Driving karte waqt phone par baat karne se accident isliye nahi hote ki haath busy hain, balki isliye hote hain kyunki dimaag ka visual attention hijack ho chuka hota hai. Raaste par saamne bike ya pedestrian aane par bhi dimaag use tab tak process nahi karta jab tak takkar na ho jaye. Isko "Looked But Failed to See" accident kehte hain.',

  quickTakeaways: [
    'Attention Hi Vision Hai: Bina dhyan ke aankhein dekh sakti hain par dimaag andha rehta hai',
    'Phone Driving Danger: Phone par baat karte waqt road par achanak aane wali gaadi dikhti hi nahi',
    'Auditing Blindspots: Kisi specific cheez ko dhoondhte waqt doosra bada fraud saamne hone par bhi miss ho jata hai',
    'Wide-Angle Reset: Koi bada faisla lene se pehle 5 second ke liye bina kisi focus ke poore scene ko dekhein',
  ],

  whyItHappens: 'Working memory bottleneck aur sensory filtering. Dimaag overload se bachne ke liye sirf wahi data process karta hai jiska order humne use diya hota hai.',
  evolutionaryMechanism: 'Shikaar karte waqt dhyan bhatakne se bachne ke liye dimaag ne laser focus develop kiya tha.',

  howItWorks: 'Teen steps: (1) Goal Definition: Dimaag ko target diya (jaise "white shirt walo ke passes count karo"); (2) Gating: Target se match na hone wale visuals suppress ho jate hain; (3) Erasure: Gorilla saamne se nikal gaya par memory me zero trace bacha.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Camera Lens vs Dimaagi Spotlight',
    description: 'Kyu hamari aankhein camera ki tarah sab kuch record nahi karti.',
    analogySideA: {
      label: 'Camera Model (Galat Yakeen)',
      detail: 'Jo bhi aankhon ke saamne aata hai, dimaag use automatically dekh leta hai.',
    },
    analogySideB: {
      label: 'Attentional Spotlight (Sach)',
      detail: 'Sirf wahi dikhta hai jahan dhyan ki batti jal rahi ho; baaki sab invisible rehta hai.',
    },
  },

  examples: [
    {
      id: 'ex_inatt_01',
      domain: 'health',
      displayOrder: 1,
      title: 'Radiologist Ka Gorilla Experiment',
      description: 'Harvard ke experiment me 83% senior radiologists lung X-ray me microscopic cancer nodule dhoondhte waqt X-ray me chipka hua bada gorilla dekh hi nahi paaye.',
      takeaway: 'Expert hona bhi inattentional blindness se nahi bachaata agar target alag ho.',
    },
  ],

  scenarios: [
    {
      id: 'scen_inatt_01',
      scenarioType: 'indian_context',
      title: 'Bengaluru Outer Ring Road Ka Cut',
      narrativeContext: 'Deepak Bengaluru Ring Road par car chala raha tha aur phone par Google Maps me flyover ka exit dhoondh raha tha. Usne right turn lene ke liye mirror dekha aur turn le liya. Achanak ek bike wale ne zor se horn maara aur Deepak ne emergency brake lagayi. Deepak chillaane laga: "Tu kahan se achanak aa gaya, raasta toh bilkul khali tha!" Jabki bike wala 50 meter se headlight on karke saamne hi chal raha tha.',
      biasInAction: 'Deepak ka dimaag sirf badi cars aur highway exit signs dhoondh raha tha. Narrow bike uske dimaagi filter me fit nahi baithi, isliye aankhon ke saamne hote hue bhi dimaag ne use delete kar diya.',
      optimalResponse: '"Look-Twice" habit banayein: Turn lene se pehle khud se bolein "Bikes aur paidal logo ko check kar raha hoon" taaki dimaag ka filter refresh ho jaye.',
      vignette: 'Deepak Bengaluru Ring Road par car chala raha tha aur phone par Google Maps me flyover ka exit dhoondh raha tha. Usne right turn lene ke liye mirror dekha aur turn le liya. Achanak ek bike wale ne zor se horn maara aur Deepak ne emergency brake lagayi. Deepak chillaane laga: "Tu kahan se achanak aa gaya, raasta toh bilkul khali tha!" Jabki bike wala 50 meter se headlight on karke saamne hi chal raha tha.',
      breakdownAnalysis: 'Deepak ka dimaag sirf badi cars aur highway exit signs dhoondh raha tha. Narrow bike uske dimaagi filter me fit nahi baithi, isliye aankhon ke saamne hote hue bhi dimaag ne use delete kar diya.',
      recommendedAction: '"Look-Twice" habit banayein: Turn lene se pehle khud se bolein "Bikes aur paidal logo ko check kar raha hoon" taaki dimaag ka filter refresh ho jaye.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_inatt_01',
      scenarioContext: 'Bank me ek fraud analyst ko bola gaya hai ki wo saare ₹50,000 se bade transactions check kare.',
      question: 'Inattentional blindness ki wajah se kaunsa fraud miss hone ka sabse bada khatra hai?',
      prompt: 'Inattentional blindness ki wajah se kaunsa fraud miss hone ka sabse bada khatra hai?',
      scenarioText: 'Bank me ek fraud analyst ko bola gaya hai ki wo saare ₹50,000 se bade transactions check kare.',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Ek hacker automated bot se ₹499 ke 10,000 micro-transactions chura raha ho aur analyst use notice hi na kare',
          explanation: 'Sahi: Kyunki analyst ka dhyan sirf bade single amounts par hai, isliye micro-transactions background noise ban kar chhip jayenge.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Legitimate genuine transactions ko galti se reject kar dena',
          explanation: 'Yeh false positive hai, inattentional blindness nahi.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Bade transactions ko bohot jaldi pakad lena',
          explanation: 'Yeh skill improvement hai, blindness penalty nahi.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Hyper-focused target dhoondhne par saamne hone wala dusra bada khatra dimaag se gayab ho jata hai.',
      difficulty: 'medium',
    },
  ],

  howToRespond: 'Visual resets lein aur critical tasks me multitasking ko zero karein.',
  psychologicalDefenses: [
    {
      title: 'Wide-Angle Scan',
      instruction: 'Final check se pehle 5 second aankhein band karke poore page ya scene ko bina kisi specific rule ke broad view se dekhein.',
    },
    {
      title: 'Zero Phone Distraction',
      instruction: 'Driving ya monitoring ke waqt phone use bilkul na karein; dimaagi bandwidth split hote hi reaction time zero ho jata hai.',
    },
  ],

  reflectionPrompt: 'Kabhi aisa hua hai ki car ki chaabi table par hi padi thi aur aapne 10 baar dekh kar bhi use dhoondh nahi paaye?',
  seoTitle: 'Inattentional Blindness Kya Hai? Invisible Gorilla Ki Science | Mentalab Mind',
  seoDescription: 'Janiye kyu dhyan na hone par saamne khada gorilla bhi dikhai nahi deta. Seekhein visual attention aur driving safety ke tareeqe.',
  canonicalUrl: '/mind/cognitive-biases/inattentional-blindness',
};

export const TOPIC_INATTENTIONAL_BLINDNESS_HI: MindTopicDetail = {
  ...TOPIC_INATTENTIONAL_BLINDNESS_EN,
  title: 'Inattentional Blindness (असावधानी जन्य अंधता)',
  subtitle: 'जब ध्यान किसी अन्य कार्य में केंद्रित हो, तो सामने उपस्थित स्पष्ट वस्तु भी दिखाई नहीं देती।',
  shortDescription: 'एक ऐसा प्रत्यक्षीकरण पूर्वाग्रह जहाँ व्यक्ति दृष्टि दोष न होने पर भी किसी अप्रत्याशित दृश्य वस्तु को देखने में पूरी तरह असफल हो जाता है।',
  oneLineExplanation: 'आंखों के सामने होने पर भी मन के ध्यान के बिना कुछ न देख पाना।',
  summary30s: '1999 के प्रसिद्ध "अदृश्य गोरिल्ला" प्रयोग में साबित हुआ कि जब मनुष्य किसी विशिष्ट वस्तु को खोजने में व्यस्त होता है, तो उसके सामने से गुजरने वाली विशाल और असामान्य वस्तुएं भी मस्तिष्क द्वारा अनदेखी कर दी जाती हैं।',
};

export const TOPIC_INATTENTIONAL_BLINDNESS: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_INATTENTIONAL_BLINDNESS_EN,
  hinglish: TOPIC_INATTENTIONAL_BLINDNESS_HINGLISH,
  hi: TOPIC_INATTENTIONAL_BLINDNESS_HI,
  gu: TOPIC_INATTENTIONAL_BLINDNESS_EN,
  mr: TOPIC_INATTENTIONAL_BLINDNESS_EN,
  te: TOPIC_INATTENTIONAL_BLINDNESS_EN,
  ta: TOPIC_INATTENTIONAL_BLINDNESS_EN,
  kn: TOPIC_INATTENTIONAL_BLINDNESS_EN,
  ml: TOPIC_INATTENTIONAL_BLINDNESS_EN,
  bn: TOPIC_INATTENTIONAL_BLINDNESS_EN,
  pa: TOPIC_INATTENTIONAL_BLINDNESS_EN,
  ur: TOPIC_INATTENTIONAL_BLINDNESS_EN,
  or: TOPIC_INATTENTIONAL_BLINDNESS_EN,
  as: TOPIC_INATTENTIONAL_BLINDNESS_EN,
};
