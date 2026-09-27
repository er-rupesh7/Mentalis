import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: The Bias Blind Spot: Seeing Everyone’s Biases Except Your Own
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Pronin, E., Lin, D. Y., & Ross, L. (2002): The bias blind spot: Perceptions of bias in self versus others. Personality and Social Psychology Bulletin.
 * - West, R. F., Meserve, R. J., & Stanovich, K. E. (2012): Cognitive sophistication does not attenuate the bias blind spot. Journal of Personality and Social Psychology.
 * - Pronin, E., Gilovich, T., & Ross, L. (2004): Objectivity in the eye of the beholder: Divergent perceptions of bias in self versus others. Psychological Review.
 */

export const TOPIC_BIAS_BLIND_SPOT_EN: MindTopicDetail = {
  id: 'bias_blind_spot',
  categoryId: 'cognitive_biases',
  slug: 'bias-blind-spot',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 5,
  scientificConsensusTier: 'established',
  sortWeight: 20,
  viewCount: 7890,
  shareCount: 650,
  bookmarkCount: 1390,
  title: 'The Bias Blind Spot: Seeing Everyone’s Biases Except Your Own',
  subtitle: 'The cognitive illusion that you are more objective, rational, and immune to psychological biases than the people around you.',
  shortDescription: 'A metacognitive bias where individuals recognize the impact of cognitive and motivational biases on others while failing to see the impact of biases on their own judgments.',
  oneLineExplanation: 'Believing that other people have biases, while you simply have "common sense and facts."',

  summary30s: 'Discovered by Emily Pronin and Lee Ross in 2002, the Bias Blind Spot is the meta-bias that protects all other biases. When surveyed, over 85% of people believe they are less biased than the average citizen. Because our own cognitive biases operate through unconscious System 1 heuristics, inspecting our conscious thoughts reveals zero trace of bias, creating the powerful illusion of pristine personal objectivity.',

  coreConcept: 'The Bias Blind Spot stems from the "introspection illusion." When evaluating our own objectivity, we search our internal thoughts and feelings: "Did I intend to be biased? No. I feel completely fair." Finding no conscious malice, we conclude we are unbiased. But when evaluating other people, we cannot see their inner thoughts; we only observe their flawed behavior, which we immediately diagnose as bias. This asymmetry poisons negotiations, political dialogue, and relationships.',
  summary60s: 'In a remarkable 2012 study by Richard West and Keith Stanovich, researchers tested whether high intelligence, superior cognitive sophistication, and advanced education would reduce the bias blind spot. The results were shocking: participants with higher cognitive ability and elite university training displayed an equal or even larger bias blind spot than average participants. Higher intelligence merely provides more sophisticated verbal ammunition to rationalize one\'s existing prejudices.',

  quickTakeaways: [
    'The Introspection Illusion: Looking inward reveals no trace of bias because cognitive distortions are unconscious',
    'Intelligence Is No Shield: High IQ and elite degrees do not reduce the blind spot; they only make rationalizations more eloquent',
    'Naive Realism: Assuming "I see reality as it actually is; anyone who disagrees with me is either ignorant or corrupt"',
    'The Third-Party Audit Antidote: Never trust your own self-assessment of fairness; submit decisions to blind algorithmic or peer audits',
  ],

  whyItHappens: 'Asymmetry in observational data. We have direct conscious access to our own benevolent intentions, but only indirect behavioral access to other people\'s actions.',
  evolutionaryMechanism: 'Doubting one\'s own perceptions creates chronic hesitation and decision paralysis. Projecting absolute conviction in tribal disputes signaled strength and rallying power.',

  howItWorks: 'Three cognitive steps: (1) Introspective Scan: Checking internal feelings for deliberate prejudice; (2) Zero-Detection: Finding no conscious malice; (3) Attribution to Others: Concluding that anyone holding an opposing conclusion must be corrupted by political, financial, or emotional bias.',
  whereYouEncounterIt: 'Political debates ("My party uses facts; your party is brainwashed"), judicial sentencing, marital arguments ("I am being logical, you are being emotional"), and academic peer reviews.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Introspective Search vs. External Observation',
    description: 'Why you feel unbiased even when exhibiting blatant prejudice.',
    analogySideA: {
      label: 'Self-Evaluation (Inner Scan)',
      detail: 'Inspects conscious feelings: "I have no evil intent, so my conclusion must be 100% rational and objective."',
    },
    analogySideB: {
      label: 'Other-Evaluation (Behavior Scan)',
      detail: 'Observes outward disagreement: "They disagree with obvious facts, so they must be completely biased."',
    },
  },

  researchSummary: 'Pronin et al. (2002) surveyed students about well-known biases (such as self-serving bias and halo effect). Participants readily acknowledged that these biases heavily distorted the average American. However, when asked about themselves, over 85% claimed they were less susceptible than the average person. West, Meserve, & Stanovich (2012) proved this blind spot was totally unattenuated by cognitive sophistication.',
  limitationsAndControversies: 'Calibrated Metacognition: While self-inspection cannot detect implicit biases, training individuals in statistical thinking and structured checklists can measurably improve external decision quality.',
  commonMisconceptions: 'Common myth: "Reading books about cognitive biases makes you unbiased." Reality: Learning about biases often makes people\'s bias blind spot WORSE because they now have technical vocabulary to diagnose biases in their enemies while remaining blind to their own.',

  howToRecognize: [
    'Thinking: "I am completely open-minded; it just so happens that the facts support my side on every single issue"',
    'Using psychological concepts (like gaslighting or confirmation bias) as weapons to dismiss others without examining yourself',
    'Assuming your political opponents only believe what they believe because they were brainwashed by propaganda',
    'Believing you are too smart or educated to be tricked by marketing algorithms or cognitive biases',
  ],

  scenarios: [
    {
      id: 'scen_blind_01',
      scenarioType: 'indian_context',
      title: 'The Family Property Dispute in Lucknow',
      vignette: 'During a property division meeting in Lucknow, two brothers—Vivek (a corporate lawyer) and Rajesh (a software architect)—argue over ancestral agricultural land. Vivek announces: "I have drafted contracts for Fortune 500 mergers. I am evaluating this purely on constitutional property rights and legal fairness." Rajesh retorts: "And I design logical database systems. My calculation is 100% mathematical and unemotional." Both brothers genuinely believe they are the sole voice of pure reason, while diagnosing the other as greedy, emotional, and biased. The dispute ends in bitter, multi-year litigation.',
      breakdownAnalysis: 'Both brothers suffer from acute Bias Blind Spot and Naive Realism. Their elite professional training gave them high cognitive sophistication, which they used to construct airtight legal and mathematical justifications for their self-interest, completely blind to their own emotional attachment.',
      recommendedAction: 'Engage an independent third-party mediator: When both sides claim complete objectivity, no consensus is possible. Let a neutral arbitrator with zero financial stake decide the allocation.',
    },
  ],

  examples: [
    {
      id: 'ex_blind_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The "Objective" Interviewer',
      description: 'A hiring manager claims: "I have 20 years of experience; I can read people instantly without letting bias get in the way." Research shows such managers exhibit the highest rates of implicit demographic bias.',
      takeaway: 'Confidence in one\'s own objectivity is the strongest predictor of biased decisions.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_blind_01',
      scenarioContext: 'A senior university professor of behavioral economics finishes writing a best-selling book on cognitive biases. In an interview, the journalist asks: "Professor, how has writing this book changed your own daily personal investment and political choices?"',
      question: 'Which response reveals an acute Bias Blind Spot?',
      prompt: 'Which response reveals an acute Bias Blind Spot?',
      scenarioText: 'A senior university professor of behavioral economics finishes writing a best-selling book on cognitive biases. In an interview, the journalist asks: "Professor, how has writing this book changed your own daily personal investment and political choices?"',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: '"Because I study cognitive biases for a living, my analytical mind is essentially immune to the irrational shortcuts that fool ordinary citizens."',
          explanation: 'Accurate: this is the textbook bias blind spot. Stanford research confirms that academic expertise does not inoculate the brain against subconscious heuristics.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: '"It has made me realize that my subconscious brain is just as prone to heuristics as anyone else, which is why I use automated index funds and peer checklists to bypass my own judgment."',
          explanation: 'This response demonstrates genuine metacognitive maturity and intellectual humility.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: '"Cognitive biases only exist in laboratory simulations and have no measurable impact on real-world investors."',
          explanation: 'This is empirical science denial, not the specific bias blind spot.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'The greatest danger of studying psychology is weaponizing it against others while declaring yourself immune.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Assume your own brain is just as corrupted by unconscious bias as anyone else\'s, and rely on external constraints rather than self-will.',
  psychologicalDefenses: [
    {
      title: 'The Structural Constraint Rule',
      instruction: 'Never rely on your own promise to be "fair." Implement structural checklists, blind reviews, and binding external algorithms.',
    },
    {
      title: 'The Steel-Manning Inversion',
      instruction: 'Whenever you find an opponent\'s stance absurd, force yourself to write a 1-page defense of their position so persuasive that their own side would approve it.',
    },
  ],

  reflectionPrompt: 'When was the last time you honestly said: "I was completely biased and unfair in that argument, and the other person was being more rational than me"?',
  references: [
    {
      id: 'ref_blind_01',
      title: 'The bias blind spot: Perceptions of bias in self versus others',
      citation: 'Pronin, E., Lin, D. Y., & Ross, L. (2002). Personality and Social Psychology Bulletin, 28(3), 369–381.',
      authors: 'Emily Pronin, Daniel Y. Lin, Lee Ross',
      publicationYear: 2002,
      journalOrPublisher: 'Personality and Social Psychology Bulletin',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1177/0146167202286008',
      relevance: 'Foundational paper introducing the bias blind spot and demonstrating widespread self-other attribution asymmetries.',
      displayOrder: 1,
    },
    {
      id: 'ref_blind_02',
      title: 'Cognitive sophistication does not attenuate the bias blind spot',
      citation: 'West, R. F., Meserve, R. J., & Stanovich, K. E. (2012). Journal of Personality and Social Psychology, 103(3), 506–519.',
      authors: 'Richard F. West, Russell J. Meserve, Keith E. Stanovich',
      publicationYear: 2012,
      journalOrPublisher: 'Journal of Personality and Social Psychology',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.1037/a0028857',
      relevance: 'Proved that higher IQ and elite academic training do not reduce the bias blind spot.',
      displayOrder: 2,
    },
  ],
  tags: ['Cognitive Biases', 'Metacognition', 'Bias Blind Spot', 'Critical Thinking'],
  relatedTopics: [
    { topicId: 'confirmation_bias', slug: 'confirmation-bias', title: 'Confirmation Bias', relationshipType: 'amplified_by' },
    { topicId: 'dunning_kruger_effect', slug: 'dunning-kruger-effect', title: 'Dunning-Kruger Effect', relationshipType: 'amplified_by' },
  ],
  seoTitle: 'The Bias Blind Spot: Seeing Everyone’s Biases But Your Own | Mentalab Mind',
  seoDescription: 'Why 85% of people believe they are more objective than others. Discover why high IQ does not stop bias, and how to build structural defenses.',
  canonicalUrl: '/mind/cognitive-biases/bias-blind-spot',
  ogImageUrl: '/images/mind/bias-blind-spot.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: 'The bias blind spot is a metacognitive failure stemming from the introspection illusion and naive realism.',
};

export const TOPIC_BIAS_BLIND_SPOT_HINGLISH: MindTopicDetail = {
  ...TOPIC_BIAS_BLIND_SPOT_EN,
  title: 'The Bias Blind Spot: "Duniya Bhar Ke Log Biased Hain, Sirf Main Objective Hoon"',
  subtitle: 'Apne dimaag ki galtiyan kabhi na dikhna, par doosron ke dimaag ke biases turant pakad lena.',
  shortDescription: 'Ek aisa metacognitive bias jisme insaan ko lagta hai ki wo facts aur logic par chalta hai, jabki uske aas-paas ke sabhi log emotional, brainwashed aur biased hain.',
  oneLineExplanation: 'Doosron me confirmation bias dekhna, aur apne confirmation bias ko "common sense" kehna.',

  summary30s: '2002 me Emily Pronin aur Lee Ross ne Bias Blind Spot discover kiya tha. Survey me 85% logon ne maana ki wo average citizen se zyada objective aur unbiased hain. Kyunki hamara dimaag subconscious biases ko internal scan me nahi dikhata, isliye hume andar se lagta hai ki hum bilkul fair hain, jabki doosron ke flawed behavior ko hum turant bias declare kar dete hain.',
  coreConcept: 'Isko "Introspection Illusion" kehte hain. Jab hum khud ko check karte hain, toh dekhte hain: "Kya meri niyat buri hai? Nahi. Toh main 100% fair hoon." Par doosron ki niyat hume nahi dikhti, sirf unki galtiyan dikhti hain. 2012 me Keith Stanovich ne prove kiya ki zyada padhe-likhe aur high IQ wale logon me yeh blind spot aur zyada bada hota hai kyunki wo apne biases ko aur fancy English me justify kar lete hain.',
  summary60s: 'Political debates me yeh roz hota hai. Har insaan sochta hai: "Meri party ke paas facts aur science hai, aur samne wali party WhatsApp university se brainwashed hai." Psychology padhne ka sabse bada khatra yeh hota hai ki log doosron par "gaslighting" ya "confirmation bias" ka tag laga kar apna palla jhaad lete hain, bina yeh dekhe ki wo khud kitne biased hain.',

  quickTakeaways: [
    'Introspection Illusion: Apne andar jhaank kar dekhne se bias nahi dikhta kyunki subconscious processes invisible hoti hain',
    'High IQ Ka Dhokha: Top college ki degree ya high intelligence blind spot ko kam nahi karti, balki arguments ko zyada clever bana deti hai',
    'Naive Realism: Yeh sochna ki "Main duniya ko waisa hi dekhta hoon jaisi wo hai, aur jo mujhse disagree kare wo corrupt hai"',
    'Third-Party Audit: Apni fairness par kabhi gumaan na karein; hamesha neutral process aur blind checklists use karein',
  ],

  whyItHappens: 'Observational data asymmetry. Apni niyat par hamara direct access hota hai, par doosron ka sirf outward behavior dikhta hai.',
  evolutionaryMechanism: 'Apne faislon par shaq karne se aadimanav shikar ke waqt paralyzed ho sakta tha. Unshakable confidence status ke liye faydemand tha.',

  howItWorks: 'Teen steps: (1) Inner Scan: "Main honest hoon"; (2) Zero Malice: Koi buri niyat nahi mili; (3) External Blame: "Samne wala biased hai isliye mujhse lad raha hai."',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Apna Introspection vs Doosron Ka Behavior',
    description: 'Kyu hume lagta hai ki sirf hum sach dekh rahe hain.',
    analogySideA: {
      label: 'Self-Evaluation (Apna Dimaag)',
      detail: '"Meri niyat saaf hai, isliye mera har conclusion 100% logical aur objective hai."',
    },
    analogySideB: {
      label: 'Other-Evaluation (Doosre Log)',
      detail: '"Yeh mujhse disagree kar raha hai, matlab yeh pakka biased aur brainwashed hai."',
    },
  },

  examples: [
    {
      id: 'ex_blind_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'Unbiased Manager Ka Myth',
      description: 'Ek HR director kehta hai: "Mera 20 saal ka experience hai, main bina kisi bias ke 2 minute me candidate pehchan leta hoon." Reality me wahi manager sabse zyada demographic bias dikhata hai.',
      takeaway: 'Apni objectivity par gumaan hona hi sabse bade bias ka saboot hai.',
    },
  ],

  scenarios: [
    {
      id: 'scen_blind_01',
      scenarioType: 'indian_context',
      title: 'Lucknow Me Zameen Ka Batwara',
      vignette: 'Lucknow me ancestral zameen ke batware par do bhai ladte hain. Bada bhai Vivek corporate lawyer hai aur bolta hai: "Maine Fortune 500 mergers kiye hain, main constitution aur property law ke hisaab se 100% fair baat kar raha hoon." Chhota bhai Rajesh software architect hai aur bolta hai: "Main data systems banata hoon, mera hisaab 100% mathematical hai aur emotion se free hai." Dono bhai khud ko logic ka devta aur doosre ko laalchi aur biased maante hain. Nateeja: 10 saal lambi court litigation.',
      breakdownAnalysis: 'Dono bhai Bias Blind Spot aur Naive Realism ke shikaar the. Dono ki high intelligence ne unhe apne fayde ke liye perfect technical arguments banane ki taqat di, par unhe apne andar ka personal greed aur ego bilkul nahi dikha.',
      recommendedAction: 'Independent Arbitrator involve kijiye: Jab dono side khud ko 100% objective maane, toh kisi neutral third party ko faisla lene dein jiska koi personal swarth na ho.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_blind_01',
      scenarioContext: 'Behavioral economics ke ek top professor ne cognitive biases par bestseller book likhi. Journalist ne poocha: "Professor, is book ne aapke personal investments aur political opinions ko kaise badla?"',
      question: 'Kaunsa jawab Bias Blind Spot ka sabse solid saboot hai?',
      prompt: 'Kaunsa jawab Bias Blind Spot ka sabse solid saboot hai?',
      scenarioText: 'Behavioral economics ke ek top professor ne cognitive biases par bestseller book likhi. Journalist ne poocha: "Professor, is book ne aapke personal investments aur political opinions ko kaise badla?"',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: '"Kyunki main biases padhata hoon, isliye mera analytical dimaag un shortcuts se immune hai jo aam janta ko bewakoof banate hain"',
          explanation: 'Sahi: Yeh textbook bias blind spot hai. Stanford aur Harvard research confirm karti hai ki expert hona subconscious biases se immune nahi banata.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: '"Isne mujhe realise karwaya ki mera subconscious bhi utna hi biased hai, isliye main automated index funds aur peer checklists par rely karta hoon"',
          explanation: 'Yeh genuine intellectual humility hai, blind spot nahi.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: '"Cognitive biases real world me exist hi nahi karte"',
          explanation: 'Yeh science denial hai.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Psychology padhne ka sabse bada khatra yeh hai ki log use doosron par hathiyar bana kar use karte hain aur khud ko sant samajh lete hain.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Apne dimaag par bharosa karne ke bajaye external constraints aur blind reviews par rely karein.',
  psychologicalDefenses: [
    {
      title: 'Structural Checklists',
      instruction: 'Kabhi yeh mat kahiye ki "main fair rahoonga." Process me blind rubrics aur objective checklists implement kijiye.',
    },
    {
      title: 'Steelmanning Opponents',
      instruction: 'Jab kisi ka vichar bekaar lage, toh 1 page me uske paksh ki sabse strong daleel likhein taaki dimaag ka ego shant ho.',
    },
  ],

  reflectionPrompt: 'Pichli baar aapne kab kisi behes me imandari se bola tha: "Main biased tha aur samne wala mujhse zyada logical tha"?',
  seoTitle: 'Bias Blind Spot Kya Hai? Apni Galtiyan Na Dikhne Ki Science | Mentalab Mind',
  seoDescription: 'Janiye kyu 85% log sochte hain ki sirf wo sach dekh rahe hain aur baaki sab biased hain. Seekhein steelmanning aur peer checklists.',
  canonicalUrl: '/mind/cognitive-biases/bias-blind-spot',
};

export const TOPIC_BIAS_BLIND_SPOT_HI: MindTopicDetail = {
  ...TOPIC_BIAS_BLIND_SPOT_EN,
  title: 'Bias Blind Spot (पूर्वाग्रह अंध-बिंदु)',
  subtitle: 'दूसरों के पूर्वाग्रहों को तुरंत पहचान लेना, परंतु अपने स्वयं के पूर्वाग्रहों के प्रति पूर्णतः अंधा रहना।',
  shortDescription: 'एक ऐसा अधिसंज्ञानात्मक (metacognitive) पूर्वाग्रह जहाँ व्यक्ति यह मानता है कि वह स्वयं वस्तुनिष्ठ और निष्पक्ष है, जबकि उसके आसपास के सभी लोग पूर्वाग्रहों से ग्रस्त हैं।',
  oneLineExplanation: 'दूसरों में पक्षपात खोजना और अपने पक्षपात को "सत्य और तथ्य" कहना।',
  summary30s: '2002 में एमिली प्रोनिन और ली रॉस द्वारा खोजा गया पूर्वाग्रह अंध-बिंदु (Bias Blind Spot) यह दर्शाता है कि 85% से अधिक लोग स्वयं को औसत व्यक्ति से अधिक निष्पक्ष मानते हैं। उच्च बौद्धिक क्षमता भी इस भ्रम को कम नहीं करती, बल्कि आत्म-समर्थन को अधिक चतुर बना देती है।',
};

export const TOPIC_BIAS_BLIND_SPOT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_BIAS_BLIND_SPOT_EN,
  hinglish: TOPIC_BIAS_BLIND_SPOT_HINGLISH,
  hi: TOPIC_BIAS_BLIND_SPOT_HI,
  gu: TOPIC_BIAS_BLIND_SPOT_EN,
  mr: TOPIC_BIAS_BLIND_SPOT_EN,
  te: TOPIC_BIAS_BLIND_SPOT_EN,
  ta: TOPIC_BIAS_BLIND_SPOT_EN,
  kn: TOPIC_BIAS_BLIND_SPOT_EN,
  ml: TOPIC_BIAS_BLIND_SPOT_EN,
  bn: TOPIC_BIAS_BLIND_SPOT_EN,
  pa: TOPIC_BIAS_BLIND_SPOT_EN,
  ur: TOPIC_BIAS_BLIND_SPOT_EN,
  or: TOPIC_BIAS_BLIND_SPOT_EN,
  as: TOPIC_BIAS_BLIND_SPOT_EN,
};
