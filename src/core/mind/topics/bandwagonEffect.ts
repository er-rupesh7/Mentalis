import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Cognitive Biases Track
 * Topic: The Bandwagon Effect: Believing Something Because Everyone Else Does
 * Category: Cognitive Biases (cognitive_biases)
 * 
 * Academic Grounding:
 * - Leibenstein, H. (1950): Bandwagon, snob, and Veblen effects in the theory of consumers' demand. Quarterly Journal of Economics.
 * - Asch, S. E. (1956): Studies of independence and conformity: A minority of one against a unanimous majority. Psychological Monographs.
 * - Simon, H. A. (1954): Bandwagon and underdog effects and the possibility of election predictions. Public Opinion Quarterly.
 */

export const TOPIC_BANDWAGON_EFFECT_EN: MindTopicDetail = {
  id: 'bandwagon_effect',
  categoryId: 'cognitive_biases',
  slug: 'bandwagon-effect',
  difficulty: 'beginner',
  estimatedReadingMinutes: 4,
  scientificConsensusTier: 'established',
  sortWeight: 16,
  viewCount: 8140,
  shareCount: 690,
  bookmarkCount: 1410,
  title: 'The Bandwagon Effect: Believing Something Because Everyone Else Does',
  subtitle: 'The psychological momentum where the probability of adopting an idea increases with the number of people already holding it.',
  shortDescription: 'A cognitive bias where people adopt beliefs, behaviors, or trends simply because many other people are doing so, regardless of underlying evidence.',
  oneLineExplanation: 'Rushing to buy a cryptocurrency or join a trend because you fear being the only one left behind.',

  summary30s: 'First formalized in economics by Harvey Leibenstein in 1950, the Bandwagon Effect describes how human beliefs gain viral momentum. When we observe a crowd adopting a fashion trend, political candidate, or financial asset, our brain uses their participation as a substitute for independent validation. The sheer size of the crowd creates an illusion of truth.',

  coreConcept: 'The Bandwagon Effect stems from informational and normative social influence. Informational influence assumes: "Thousands of people cannot all be mistaken; they must possess secret information I lack." Normative influence fears: "If I do not adopt this trend, I will be ostracized or labeled obsolete." Together, these forces generate runaway positive feedback loops in markets, elections, and social media.',
  summary60s: 'Consider a speculative asset bubble. When a stock or coin rises 500%, financial fundamentals have not changed, but social validation has skyrocketed. People who know nothing about the underlying technology buy in simply because their neighbors, barbers, and cousins bought in. The desire to belong and avoid missing out overrides critical mathematical calculation.',

  quickTakeaways: [
    'Momentum Over Evidence: Popularity is treated as empirical truth, leading to herd behavior and speculative bubbles',
    'Manufactured Consensus: Bots, fake reviews, and trending algorithms artificially engineer bandwagons to manipulate public opinion',
    'The Solitary Thinker Cost: Resisting a bandwagon causes acute social anxiety and fear of missing out (FOMO)',
    'Independent Audit Antidote: Ask: "If nobody else was doing this, would this idea have any intrinsic value to me?"',
  ],

  whyItHappens: 'Cognitive offloading and attachment need. Independent research is exhausting; copying the tribe is effortless and socially safe.',
  evolutionaryMechanism: 'In hunter-gatherer bands, straying from the group consensus was fatal. Following the stampede when the tribe started running kept our ancestors alive even before they saw the tiger.',

  howItWorks: 'The loop operates in three stages: (1) Initial Adoption: An early minority promotes an idea; (2) Critical Mass: As numbers grow, observers assume consensus equals quality; (3) Cascading Pressure: Holdouts experience intense social isolation and conform to survive.',
  whereYouEncounterIt: 'Stock market bubbles, bestseller lists, restaurant lines, viral TikTok challenges, and political election polling.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Bandwagon Momentum vs. First-Principles Value',
    description: 'Why the size of the crowd has zero mathematical correlation with objective truth.',
    analogySideA: {
      label: 'Intrinsic Value Analysis',
      detail: 'Evaluates balance sheets, cash flows, and empirical research independently from popularity.',
    },
    analogySideB: {
      label: 'The Bandwagon Surge',
      detail: '"Everyone in my college WhatsApp group bought this token, so it must be the future of finance."',
    },
  },

  researchSummary: 'Solomon Asch (1956) demonstrated that when surrounded by confederates who unanimously gave the wrong answer to a simple line-matching test, 75% of participants conformed to the obviously incorrect majority at least once. Leibenstein (1950) proved that demand curves slope upward when social bandwagon effects dominate.',
  limitationsAndControversies: 'The Snob Effect: A minority of contrarian consumers actively reject bandwagons to signal high status through exclusive, counter-trend behaviors.',
  commonMisconceptions: 'Common myth: "Educated, intelligent people do not follow bandwagons." Reality: Highly educated professionals frequently join intellectual bandwagons (corporate buzzwords, management fads) due to intense peer conformity pressure.',

  howToRecognize: [
    'Buying a product or stock because "everyone is talking about it" without having read the technical whitepaper',
    'Liking or retweeting a viral hot-take before verifying whether the underlying video clip was edited or taken out of context',
    'Choosing a restaurant with a 45-minute queue over an identical quiet restaurant next door simply because a crowd is present',
    'Adopting a political stance solely to avoid awkward arguments at the family dinner table',
  ],

  scenarios: [
    {
      id: 'scen_band_01',
      scenarioType: 'indian_context',
      title: 'The Meme Coin Mania in Ahmedabad',
      vignette: 'During a festive gathering in Ahmedabad, Varun hears three cousins boasting about a new cryptocurrency named "RocketDoge" that rose 800% in two weeks. None of his cousins know what blockchain consensus mechanism it uses. That night, Varun checks social media and sees thousands of Indian influencers urging followers: "Don\'t miss the train! 100x guaranteed!" Feeling intense anxiety that all his friends will buy luxury cars while he stays behind, Varun liquidates ₹2,00,000 from his fixed deposit and buys the coin at its peak. Within 10 days, the coin drops 94%.',
      breakdownAnalysis: 'Varun was swept up by the Bandwagon Effect. He substituted viral social momentum and FOMO for financial auditing. The large number of buyers created a false signal of safety.',
      recommendedAction: 'Apply the 72-Hour Anti-FOMO Pause: Never invest in or adopt a trending asset within 72 hours of hearing about it. Demand to read independent financial statements first.',
    },
  ],

  examples: [
    {
      id: 'ex_band_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'The Bestseller List Effect',
      description: 'Books that reach the New York Times bestseller list experience an automatic 400% boost in subsequent sales purely because buyers use the bestseller tag as proof of literary quality.',
      takeaway: 'Popularity creates an artificial feedback loop that feeds its own expansion.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_band_01',
      scenarioContext: 'A tech startup team is deciding which programming framework to use for a new multi-million dollar banking platform. Two senior architects advocate for an established, battle-tested framework with 15 years of banking security history. Five junior developers lobby enthusiastically for a 6-month-old trending JavaScript framework because "it has 40,000 GitHub stars and everyone on Twitter is migrating to it."',
      question: 'Which argument exposes the Bandwagon Effect in this technical debate?',
      prompt: 'Which argument exposes the Bandwagon Effect in this technical debate?',
      scenarioText: 'A tech startup team is deciding which programming framework to use for a new multi-million dollar banking platform. Two senior architects advocate for an established, battle-tested framework with 15 years of banking security history. Five junior developers lobby enthusiastically for a 6-month-old trending JavaScript framework because "it has 40,000 GitHub stars and everyone on Twitter is migrating to it."',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Using Twitter popularity and GitHub star counts as evidence of banking enterprise security',
          explanation: 'Accurate: confusing social media buzz with rigorous financial-grade security benchmarks is the classic bandwagon trap.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Auditing the memory performance and cryptographic libraries of both frameworks in a benchmark lab',
          explanation: 'This is objective technical testing, the exact antidote to herd behavior.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Consulting the central banking compliance guidelines for legacy systems',
          explanation: 'Regulatory compliance review is an objective legal audit.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'In technical and financial architecture, popularity is not proof of resilience.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Isolate the core proposition from social proof: Ask yourself what value remains if everyone else abandons the trend tomorrow.',
  psychologicalDefenses: [
    {
      title: 'The Solitary Value Audit',
      instruction: 'Ask yourself: "If I were completely forbidden from telling anyone I bought or believe this, would I still want it?"',
    },
    {
      title: 'The Anti-FOMO Quarantine',
      instruction: 'Never commit capital or public support to a viral trend on the same day you encounter it. Implement a mandatory 3-day quarantine.',
    },
  ],

  reflectionPrompt: 'What belief or product do you currently support primarily because your friend group or online community supports it?',
  references: [
    {
      id: 'ref_band_01',
      title: 'Bandwagon, snob, and Veblen effects in the theory of consumers\' demand',
      citation: 'Leibenstein, H. (1950). The Quarterly Journal of Economics, 64(2), 183–207.',
      authors: 'Harvey Leibenstein',
      publicationYear: 1950,
      journalOrPublisher: 'The Quarterly Journal of Economics',
      sourceType: 'peer_reviewed_journal',
      evidenceStrength: 'peer_reviewed_experimental',
      doiOrUrl: 'https://doi.org/10.2307/1882692',
      relevance: 'Seminal economic analysis demonstrating how social bandwagon effects violate classical consumer utility.',
      displayOrder: 1,
    },
  ],
  tags: ['Cognitive Biases', 'Social Proof', 'Herd Mentality', 'Bandwagon Effect'],
  relatedTopics: [
    { topicId: 'social_proof', slug: 'social-proof', title: 'Social Proof', relationshipType: 'amplified_by' },
    { topicId: 'conformity_asch_effect', slug: 'conformity-asch-effect', title: 'Conformity (Asch Effect)', relationshipType: 'amplified_by' },
  ],
  seoTitle: 'The Bandwagon Effect: Herd Mentality & Viral Trends | Mentalab Mind',
  seoDescription: 'Why we adopt ideas just because everyone else is doing so. Learn how bandwagon effects create market bubbles and how to stay independent.',
  canonicalUrl: '/mind/cognitive-biases/bandwagon-effect',
  ogImageUrl: '/images/mind/bandwagon-effect.png',
  publishedAt: '2026-09-27T00:00:00Z',
  deepExplanation: 'The bandwagon effect is a positive feedback cognitive loop driven by social proof heuristic and normative conformity.',
};

export const TOPIC_BANDWAGON_EFFECT_HINGLISH: MindTopicDetail = {
  ...TOPIC_BANDWAGON_EFFECT_EN,
  title: 'The Bandwagon Effect: Sab Kar Rahe Hain Toh Main Bhi Karunga (Bheed Chaal)',
  subtitle: 'Kisi baat ko sirf isliye sach maan lena kyunki hazaron log use follow kar rahe hain.',
  shortDescription: 'Ek aisi cognitive bias jisme log kisi trend, fashion ya crypto asset ko bina research kiye sirf is darr se adopt kar lete hain ki wo akele piche na chhoot jayein.',
  oneLineExplanation: 'Sab log daud rahe hain toh main bhi daudne laga, bina yeh jaane ki aage khayi hai.',

  summary30s: 'Bandwagon Effect hamare andar ka wo darr hai jisme hum bheed ke volume ko sach ka saboot maan lete hain. Jab social media par koi stock, crypto coin ya diet viral hoti hai, toh humara dimaag sochta hai: "Itne saare log pagal thodi honge, inko kuch extra pata hoga." Is bheed-chaal ki wajah se stock market ke bubbles bante hain aur hazaron log paise gawaate hain.',
  coreConcept: 'Harvey Leibenstein ne 1950 me ise economics me formalize kiya tha. Insaan do darr se bandwagon join karta hai: Pehla, Informational ("Bheed ko mujhse zyada pata hai"); Doosra, Normative ("Agar maine yeh nahi kiya toh log mujhe pichhda hua samjhenge"). Yeh dono darr milkar common sense ko hijack kar lete hain.',
  summary60s: 'Crypto bull market me yeh roz hota hai. Ek coin jiska koi real-world use nahi hai 10 din me 10x ho jata hai. Dost bolte hain: "Maine toh car khareed li!" Dekhte hi dekhte student, taxi driver, aur corporate employee sab usme savings daalne lagte hain. Bheed ka aana hi price badhata hai, aur jab bheed khatam hoti hai toh 90% log barbad ho jate hain.',

  quickTakeaways: [
    'Bheed Ka Jhooth: Kisi baat ko 10 lakh log bol rahe hon, tab bhi wo galat ho sakti hai',
    'FOMO Ka Khel: Piche chhootne ka darr research karne ke dimagi dhang ko band kar deta hai',
    'Manufactured Trends: Social media bots aur fake reviews janbujhkar bandwagon create karte hain',
    'Anti-FOMO Test: Khud se poochein: "Agar koi aur yeh na karta, toh kya main akela isme paise lagata?"',
  ],

  whyItHappens: 'Cognitive offloading. Independent research me dimagi energy lagti hai; bheed ko copy karna bilkul effortless aur safe lagta hai.',
  evolutionaryMechanism: 'Jungle me agar poora qabila achanak bhaagne lagta tha, toh bina soche bhaagna hi bachta tha. Rukk kar tiger dekhne wale shikaar ban jate the.',

  howItWorks: 'Teen stages: (1) Chhoti Shuruat: Kuch log trend shuru karte hain; (2) Critical Mass: Bheed aate hi dimaag use quality maan leta hai; (3) Peer Pressure: Jo join nahi karta use lonely feel karwaya jata hai.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Bheed Chaal vs Asli Value',
    description: 'Kyu bheed ka size objective sach ka saboot nahi hota.',
    analogySideA: {
      label: 'Intrinsic Value Analysis',
      detail: 'Company ke balance sheet aur reality ko bheed ke bina akele evaluate karna.',
    },
    analogySideB: {
      label: 'Bandwagon Surge',
      detail: '"Poore college group ne yeh token liya hai, yeh pakka future hai."',
    },
  },

  examples: [
    {
      id: 'ex_band_01',
      domain: 'personal_finance',
      displayOrder: 1,
      title: 'Bestseller Books Ka Trap',
      description: 'Jo kitaab ek baar bestseller list me aa jati hai uski sales 4 guna badh jati hai, kyunki log kitaab padhe bina sirf list dekh kar khareed lete hain.',
      takeaway: 'Popularity khud ka hi fake advertisement ban jati hai.',
    },
  ],

  scenarios: [
    {
      id: 'scen_band_01',
      scenarioType: 'indian_context',
      title: 'Ahmedabad Me Meme Coin Ka Craze',
      vignette: 'Ahmedabad me ek family function ke dauran Varun ne suna ki uske 3 cousins ne "RocketDoge" coin se 2 hafte me 800% profit banaya. Kisine whitepaper nahi padha tha. Ghar aakar Varun ne Twitter dekha toh influencers bol rahe the: "Train miss mat karo!" Varun ko laga ki saare dost crorepati ban jayenge aur wo akela reh jayega. Darr ke maare usne apni ₹2,00,000 ki FD tudwayi aur peak par coin khareed liya. 10 din me coin 94% crash ho gaya.',
      breakdownAnalysis: 'Varun Bandwagon Effect aur FOMO ka shikaar hua. Usne bheed ke shor ko financial safety ka stamp samajh liya.',
      recommendedAction: '72-Hour Anti-FOMO Pause: Viral trend sunte hi kam se kam 3 din tak koi paisa na lagayein aur fundamental data check karein.',
    },
  ],

  practiceQuestions: [
    {
      id: 'pq_band_01',
      scenarioContext: 'Ek software startup me banking software banana hai. Senior architects ek 15 saal puraane battle-tested secure framework ko suggest karte hain. Junior developers ek 6 mahine naye trending framework ke liye bolte hain kyunki "Twitter par sabhi wahi use kar rahe hain aur uske 40,000 GitHub stars hain."',
      question: 'Kaunsa argument Bandwagon Effect ka saboot hai?',
      prompt: 'Kaunsa argument Bandwagon Effect ka saboot hai?',
      scenarioText: 'Ek software startup me banking software banana hai. Senior architects ek 15 saal puraane battle-tested secure framework ko suggest karte hain. Junior developers ek 6 mahine naye trending framework ke liye bolte hain kyunki "Twitter par sabhi wahi use kar rahe hain aur uske 40,000 GitHub stars hain."',
      options: [
        {
          id: 'opt_a',
          label: 'A',
          text: 'Twitter buzz aur GitHub stars ko banking-grade security ka saboot maan lena',
          explanation: 'Sahi: Social media hype ko technical audit samajhna hi classic bandwagon fallacy hai.',
          isCorrect: true,
        },
        {
          id: 'opt_b',
          label: 'B',
          text: 'Dono frameworks ke cryptographic algorithms ka load-testing audit karna',
          explanation: 'Yeh scientific evaluation hai, bandwagon trap nahi.',
          isCorrect: false,
        },
        {
          id: 'opt_c',
          label: 'C',
          text: 'Central bank ke regulatory compliance guidelines check karna',
          explanation: 'Yeh legal compliance check hai.',
          isCorrect: false,
        },
      ],
      correctAnswerId: 'opt_a',
      cognitiveTakeaway: 'Engineering aur finance me popularity kabhi bhi security ya truth ka saboot nahi hoti.',
      difficulty: 'easy',
    },
  ],

  howToRespond: 'Trend ko isolate karke dekhein ki bina bheed ke iska akele me kya value hai.',
  psychologicalDefenses: [
    {
      title: 'Solitary Value Check',
      instruction: 'Khud se poochein: "Agar kisi ko batana mana ho ki maine yeh khareeda hai, toh kya main fir bhi ise chahta?"',
    },
    {
      title: '72-Hour Quarantine',
      instruction: 'Viral trend dekhte hi turant jump na karein; dimaag ko 3 din shant hone dein.',
    },
  ],

  reflectionPrompt: 'Aisa kaunsa opinion ya product hai jo aap sirf isliye support karte hain kyunki aapke saare dost use support karte hain?',
  seoTitle: 'Bandwagon Effect Kya Hai? Bheed Chaal Se Kaise Bachein | Mentalab Mind',
  seoDescription: 'Janiye kyu hum bina soche doosron ko copy karne lagte hain. Bandwagon effect aur financial FOMO se bachne ke 3 scientific rules.',
  canonicalUrl: '/mind/cognitive-biases/bandwagon-effect',
};

export const TOPIC_BANDWAGON_EFFECT_HI: MindTopicDetail = {
  ...TOPIC_BANDWAGON_EFFECT_EN,
  title: 'Bandwagon Effect (भेड़चाल प्रभाव)',
  subtitle: 'किसी विचार या प्रवृत्ति को केवल इसलिए अपनाना क्योंकि अधिकांश लोग ऐसा कर रहे हैं।',
  shortDescription: 'एक संज्ञानात्मक पूर्वाग्रह जहाँ व्यक्ति तार्किक प्रमाण के बिना केवल भीड़ का हिस्सा बनने और पीछे छूट जाने के डर से दूसरों का अनुकरण करने लगता है।',
  oneLineExplanation: 'सब दौड़ रहे हैं तो मैं भी दौड़ रहा हूँ, बिना यह जाने कि मंज़िल क्या है।',
  summary30s: '1950 में हार्वे लिबेनस्टीन द्वारा पहचाना गया भेड़चाल प्रभाव (Bandwagon Effect) यह समझाता है कि जब कोई विचार या फैशन लोकप्रिय होता है, तो मानव मस्तिष्क उसकी गुणवत्ता की स्वतंत्र जांच किए बिना उसे सच मान लेता है।',
};


function createLocalizedRecord(
  lang: MindLanguageCode,
  title: string,
  summary: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_BANDWAGON_EFFECT_EN,
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

export const TOPIC_BANDWAGON_EFFECT: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_BANDWAGON_EFFECT_EN,
  hinglish: TOPIC_BANDWAGON_EFFECT_HINGLISH,
  hi: TOPIC_BANDWAGON_EFFECT_HI,
  gu: createLocalizedRecord('gu', "The Bandwagon Effect: Believing Something Because Everyone Else Does (પ્રભાવ)", "The Bandwagon Effect: Believing Something Because Everyone Else Does એ માનવ મગજનો એક એવો મનોવૈજ્ઞાનિક પ્રભાવ છે જે વિચારસરણી અને નિર્ણયોને પ્રભાવિત કરે છે.", [
    "તથ્યોનું નિષ્પક્ષ વિશ્લેષણ કરો",
    "જૂથના દબાણથી સાવધાન રહો",
    "સ્વતંત્ર નિર્ણય લેવાની ટેવ પાડો"
  ]),
  mr: createLocalizedRecord('mr', "The Bandwagon Effect: Believing Something Because Everyone Else Does (प्रभाव)", "The Bandwagon Effect: Believing Something Because Everyone Else Does हा मानवी मेंदूचा असा एक मनोवैज्ञानिक प्रभाव आहे जो निर्णयप्रक्रियेवर थेट परिणाम करतो.", [
    "तथ्यांची योग्य पडताळणी करा",
    "भावनिक दबावाखाली निर्णय घेऊ नका",
    "वैयक्तिक जबाबदारी स्वीकारा"
  ]),
  te: createLocalizedRecord('te', "The Bandwagon Effect: Believing Something Because Everyone Else Does (ప్రభావం)", "The Bandwagon Effect: Believing Something Because Everyone Else Does అనేది నిర్ణయాలు తీసుకునే సమయంలో మానవ మనస్తత్వం ప్రదర్శించే ముఖ్యమైన ప్రభావం.", [
    "వాస్తవాలను నిష్పాక్షికంగా విశ్లేషించండి",
    "సమూహ ఒత్తిడికి లొంగకండి",
    "స్వతంత్ర నిర్ణయాలు తీసుకోండి"
  ]),
  ta: createLocalizedRecord('ta', "The Bandwagon Effect: Believing Something Because Everyone Else Does (விளைவு)", "The Bandwagon Effect: Believing Something Because Everyone Else Does என்பது மனித முடிவெடுக்கும் திறனை மறைமுகமாக பாதிக்கும் ஒரு முக்கியமான உளவியல் விளைவு.", [
    "உண்மைகளை நடுநிலையோடு ஆராயுங்கள்",
    "குழு அழுத்தத்திற்கு அடிபணியாதீர்கள்",
    "சுயாதீன முடிவுகளை எடுங்கள்"
  ]),
  kn: createLocalizedRecord('kn', "The Bandwagon Effect: Believing Something Because Everyone Else Does (ಪರಿಣಾಮ)", "The Bandwagon Effect: Believing Something Because Everyone Else Does ಎಂಬುದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಲ್ಲಿ ಮಾನವ ಮನಸ್ಸು ತೋರುವ ಪ್ರಮುಖ ಮಾನಸಿಕ ಪರಿಣಾಮ.", [
    "ವಾಸ್ತವಗಳನ್ನು ನಿಷ್ಪಕ್ಷಪಾತವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ",
    "ಸಾಮಾಜಿಕ ಒತ್ತಡಕ್ಕೆ ಮಣಿಯಬೇಡಿ",
    "ಸ್ವತಂತ್ರ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ"
  ]),
  ml: createLocalizedRecord('ml', "The Bandwagon Effect: Believing Something Because Everyone Else Does (സ്വാധീനം)", "The Bandwagon Effect: Believing Something Because Everyone Else Does എന്നത് തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ മനുഷ്യൻ്റെ മനസ്സ് കാണിക്കുന്ന ഒരു പ്രധാന മനശാസ്ത്രപരമായ സ്വാധീനം.", [
    "വസ്തുതകളെ നിഷ്പക്ഷമായി പരിശോധിക്കുക",
    "ഗ്രൂപ്പ് സമ്മർദ്ദത്തിന് വഴങ്ങരുത്",
    "സ്വതന്ത്രമായി ചിന്തിക്കുക"
  ]),
  bn: createLocalizedRecord('bn', "The Bandwagon Effect: Believing Something Because Everyone Else Does (প্রভাব)", "The Bandwagon Effect: Believing Something Because Everyone Else Does হলো সিদ্ধান্ত গ্রহণের সময় মানুষের মনস্তাত্ত্বিক চিন্তাভাবনার একটি গুরুত্বপূর্ণ প্রভাব।", [
    "তথ্য নিরপেক্ষভাবে বিশ্লেষণ করুন",
    "সামাজিক চাপের বশবর্তী হবেন না",
    "স্বাধীনভাবে সিদ্ধান্ত নিন"
  ]),
  pa: createLocalizedRecord('pa', "The Bandwagon Effect: Believing Something Because Everyone Else Does (ਪ੍ਰਭਾਵ)", "The Bandwagon Effect: Believing Something Because Everyone Else Does ਫੈਸਲੇ ਲੈਣ ਸਮੇਂ ਮਨੁੱਖੀ ਦਿਮਾਗ ਦੀ ਸੋਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਹੈ।", [
    "ਤੱਥਾਂ ਦੀ ਨਿਰਪੱਖ ਪੜਤਾਲ ਕਰੋ",
    "ਗਰੁੱਪ ਦਬਾਅ ਤੋਂ ਸੁਚੇਤ ਰਹੋ",
    "ਸੁਤੰਤਰ ਫੈਸਲੇ ਲਓ"
  ]),
  ur: createLocalizedRecord('ur', "The Bandwagon Effect: Believing Something Because Everyone Else Does (اثر)", "The Bandwagon Effect: Believing Something Because Everyone Else Does انسانی سوچ اور فیصلوں کو متاثر کرنے والا ایک اہم نفسیاتی اثر ہے۔", [
    "حقائق کا غیر جانبدارانہ تجزیہ کریں",
    "گروہی دباؤ سے ہوشیار رہیں",
    "آزادانہ فیصلے کرنے کی عادت ڈالیں"
  ]),
  or: createLocalizedRecord('or', "The Bandwagon Effect: Believing Something Because Everyone Else Does (ପ୍ରଭାବ)", "The Bandwagon Effect: Believing Something Because Everyone Else Does ମନୁଷ୍ୟର ନିଷ୍ପତ୍ତି ନେବା ପ୍ରକ୍ରିୟାକୁ ପ୍ରଭାବିତ କରୁଥିବା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମନୋବୈଜ୍ଞାନିକ ପ୍ରଭାବ।", [
    "ତଥ୍ୟର ନିରପେକ୍ଷ ବିଶ୍ଳେଷଣ କରନ୍ତୁ",
    "ସାମାଜିକ ଚାପରୁ ସାବଧାନ ରୁହନ୍ତୁ",
    "ନିଜେ ସ୍ୱତନ୍ତ୍ର ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ"
  ]),
  as: createLocalizedRecord('as', "The Bandwagon Effect: Believing Something Because Everyone Else Does (প্ৰভাৱ)", "The Bandwagon Effect: Believing Something Because Everyone Else Does সিদ্ধান্ত গ্ৰহণৰ ক্ষেত্ৰত মানুহৰ চিন্তাশক্তিক প্ৰভাৱিত কৰা এটা উল্লেখযোগ্য মানসিক প্ৰভাৱ।", [
    "তথ্যসমূহ নিৰপেক্ষভাৱে বিশ্লেষণ কৰক",
    "সামাজিক চাপৰ বশৱৰ্তী নহ’ব",
    "স্বাধীন সিদ্ধান্ত গ্ৰহণ কৰক"
  ]),
};
