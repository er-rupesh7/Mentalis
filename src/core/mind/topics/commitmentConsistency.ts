import { MindTopicDetail, MindLanguageCode } from '../types';

/**
 * Mentalab Mind — Persuasion & Influence Track
 * Topic: Commitment and Consistency: The Foot-in-the-Door Principle
 * Category: Persuasion & Influence (persuasion_influence)
 * 
 * Academic Grounding:
 * - Cialdini (1984): Influence: The Psychology of Persuasion (Principle of Consistency)
 * - Freedman & Fraser (1966): Compliance Without Pressure: The Foot-in-the-Door Technique
 * - Festinger (1957): A Theory of Cognitive Dissonance
 * - Deutsch & Gerard (1955): A study of normative and informational social influences upon individual judgment
 */

export const TOPIC_COMMITMENT_CONSISTENCY_EN: MindTopicDetail = {
  id: 'commitment_consistency',
  categoryId: 'persuasion_influence',
  slug: 'commitment-and-consistency',
  difficulty: 'intermediate',
  estimatedReadingMinutes: 6,
  scientificConsensusTier: 'established',
  sortWeight: 2,
  viewCount: 6540,
  shareCount: 530,
  bookmarkCount: 1120,
  title: 'Commitment & Consistency: How Small Agreemements Trap Big Decisions',
  subtitle: 'The Foot-in-the-Door technique, cognitive dissonance, and why our desire to appear consistent overrides rational self-interest.',
  shortDescription: 'The psychological drive where individuals feel intense pressure to align their future actions and beliefs with an initial, even trivial, commitment.',
  oneLineExplanation: 'In simple terms: Saying "yes" to a tiny favor first makes you dramatically more likely to agree to a huge, costly request later.',

  // SECTION A — QUICK UNDERSTANDING (30 Seconds)
  summary30s: 'Human beings have an almost obsessive drive to be—and appear—consistent with what we have previously said, believed, or done. Once you make a small, public commitment (signing a benign petition, answering a polite survey, wearing a ribbon), your self-image shifts: "I am someone who cares about this." When the persuader returns days later asking for a massive donation or personal sacrifice, you say yes simply to avoid feeling like a hypocrite.',

  // SECTION B & C — WHAT EXACTLY IS HAPPENING?
  coreConcept: 'Documented extensively by Dr. Robert Cialdini and first demonstrated empirically by Jonathan Freedman and Scott Fraser (1966), the consistency principle operates through identity calibration. When a person takes even a microscopic action toward a cause, cognitive dissonance theory (Festinger, 1957) dictates that their internal self-concept shifts to harmonize with their external behavior. Once internal identity is anchored, refusing subsequent escalating requests produces acute psychological discomfort.',
  summary60s: 'In Freedman and Fraser\'s landmark 1966 study, researchers went door-to-door in California asking homeowners to install a massive, ugly billboard on their front lawns reading "DRIVE CAREFULLY," which completely blocked the view of their houses. Only 17% agreed. But with a second group of homeowners, researchers had first asked two weeks earlier to display a tiny 3-inch sticker that said "Be a safe driver." Virtually everyone agreed to the sticker. Two weeks later, when asked to install the giant ugly billboard, a staggering 76% of those who had agreed to the tiny sticker said YES! That is the Foot-in-the-Door technique: small commitments quietly pave the highway for massive compliance.',

  quickTakeaways: [
    'The Foot-in-the-Door: Getting someone to agree to a trivial request skyrockets compliance on a subsequent large request',
    'Cognitive Dissonance: The human mind hates internal contradictions; it will endure financial loss just to protect perceived consistency',
    'Public Commitments Stick: Commitments made in writing, in public, or after personal effort are 5x more durable than private thoughts',
    'The Stomach-Sign Defense: Cialdini advises listening to the flash of physical queasiness in your gut when you realize you are being trapped by your own past words',
  ],

  // SECTION D — WHY CAN IT AFFECT PEOPLE? (Psychological Mechanisms)
  whyItHappens: 'Consistency is socially celebrated as honesty, integrity, and stability, whereas inconsistency is condemned as two-faced or fickle. Furthermore, consistency provides an automatic mental shortcut: once we decide an issue once, we never have to waste cognitive energy thinking about it again; we simply react according to our recorded stance.',
  evolutionaryMechanism: 'Predictability in social pacts was vital for tribal survival. An individual whose behavior flipped erratically was deemed dangerous and untrustworthy. Evolution rewarded rigid adherence to social oaths.',

  // SECTION E — HOW DOES IT WORK?
  howItWorks: 'The persuader uses a 3-step escalation: (1) Secure a micro-commitment that feels trivial, free, or morally neutral ("Do you agree that child nutrition is important?"); (2) Label the target\'s identity ("Thank you for being someone who stands for children"); (3) Present the heavy, costly request that aligns with the newly established identity ("Will you pledge ₹2,000 every month?").',
  whereYouEncounterIt: 'Fundraising drives, gym membership contracts, sales negotiations (the "lowball" tactic), romantic relationships, political campaigns, and free trial subscriptions.',

  visualExplanation: {
    type: 'contrast_matrix',
    visualConceptType: 'comparison_matrix',
    headline: 'Direct Request vs. Foot-in-the-Door Technique',
    description: 'How a micro-agreement alters cognitive resistance.',
    analogySideA: {
      label: 'Direct Big Request',
      detail: '"Will you donate ₹5,000 today to our cause?" -> Immediate cognitive guard goes up; evaluation of bank balance; 85% rejection.',
    },
    analogySideB: {
      label: 'Foot-in-the-Door Sequence',
      detail: 'Step 1: "Will you sign this petition?" (Agreed). Step 2: "Wear this badge?" (Agreed). Step 3: "Now will you donate ₹5,000?" -> Mind says: "I already committed to this cause, I must be consistent."',
    },
  },

  researchSummary: 'Freedman & Fraser (1966) published in the Journal of Personality and Social Psychology demonstrated that even when the initial small request (signing a petition about keeping California beautiful) was in a completely different domain from the subsequent big request (installing a road safety billboard), compliance still nearly tripled from 17% to 48%.',
  limitationsAndControversies: 'Consistency tactics backfire if the initial commitment is perceived as forced, bribed, or coerced. If the individual feels external pressure, their internal identity does not shift because they attribute the act to the bribe rather than personal values (Deci\'s Self-Determination Theory).',

  // SECTION F — WARNING SIGNS CHECKLIST
  howToRecognize: [
    'A salesperson or charity worker asking leading questions designed to extract obvious "Yes" answers ("Do you believe children deserve clean water?")',
    'A free trial or contest asking you to write a 50-word statement explaining "Why you love our brand" (written commitment creates brand loyalty)',
    'Feeling trapped into saying yes to an expensive or time-consuming request purely because you previously agreed to a 5-minute meeting',
    'A dealer quoting a low car price, having you fill out financing paperwork, and then discovering "the manager says there was an error of ₹40,000" (Lowballing)',
    'Doing something you actively hate just so people won\'t think you changed your mind',
  ],

  // SECTION G — REALISTIC SCENARIOS
  scenarios: [
    {
      id: 'scen_commit_01',
      scenarioType: 'indian_context',
      title: 'The Mall Charity Ambassador Encounter',
      vignette: 'Kabir is walking through a shopping mall in Gurgaon. A pleasant, well-dressed charity representative stops him: "Sir, do you have just 10 seconds? Do you believe that every child in India deserves access to primary school education?" Kabir naturally smiles and says: "Yes, of course." The rep hands him a digital tablet: "Wonderful, could you just tap your name and email to support our awareness campaign?" Kabir enters his details. The rep immediately smiles warmly: "Kabir ji, thank you for showing you care. As one of our verified education champions, our members sponsor one underprivileged student for ₹1,500 every month. Which credit card would you like to set up the auto-debit on?" Kabir feels a knot in his stomach, but because he just declared himself an education champion and entered his name, he pulls out his wallet to avoid feeling cheap.',
      breakdownAnalysis: 'The representative executed a textbook Foot-in-the-Door sequence. Kabir was maneuvered from an abstract moral question to a micro-act (entering name) to a public identity label ("education champion"), making saying "No" to the financial pledge feel like an excruciating internal betrayal of his own words.',
      recommendedAction: 'Kabir must break the false consistency trap: "I support child education, but I do not sign recurring financial pledges in shopping malls. My agreement to the principle does not obligate me to a financial contract. Have a good evening."',
    },
  ],

  examples: [
    {
      id: 'ex_commit_01',
      domain: 'workplace',
      displayOrder: 1,
      title: 'The "Quick 5-Minute Favor" Project Creep',
      description: 'A colleague asks: "Can you just look over this one slide for 5 minutes?" You agree. Two hours later, you are rewriting their entire 40-page deck until midnight because you already took partial ownership.',
      takeaway: 'Agreeing to tiny collaborative favors creates a mental sense of joint responsibility that is easily exploited.',
    },
  ],

  // SECTION H — HOW TO RESPOND & STRATEGIES
  howToRespond: 'To protect yourself from manipulative consistency traps, practice "Foolish Consistency Immunity." Remember Ralph Waldo Emerson\'s famous dictum: "A foolish consistency is the hobgoblin of little minds." You have the absolute right to change your mind the moment new information or higher stakes are introduced. When you feel trapped by your past words, address it head-on: "Yes, I agreed to step one, but step two is a completely different scope, and my answer is No."',
  psychologicalDefenses: [
    'Separate the Principle from the Transaction: Agreeing that a cause is noble does not mean you must buy their product or donate your salary',
    'Listen to the Stomach Flash: When you feel physical hesitation during a negotiation, ask: "Knowing what I know now, if I could turn back the clock to 10 minutes ago, would I make that same opening commitment?"',
    'Normalize Changing Your Mind: Reframe changing your mind as adaptability and intelligence rather than weakness',
    'The Scope Boundary Script: "My agreement was strictly limited to signing the petition. I do not take on recurring financial commitments"',
  ],

  commonMisconceptions: [
    {
      misconception: 'If I change my mind, it proves that I am dishonest or unreliable.',
      reality: 'Authentic integrity means aligning your decisions with present truth, not slavishly obeying an outdated commitment made under different circumstances or incomplete data.',
    },
  ],

  reflectionPrompt: 'Have you ever continued attending an event, paying for a subscription, or helping someone with a draining project simply because you said "Yes" weeks ago and felt embarrassed to back out?',

  interactiveScenario: {
    id: 'interactive_commit_01',
    topicId: 'commitment_consistency',
    scenarioTitle: 'The Freelance Scope Creep Trap',
    scenarioDescription: 'You agreed to design a simple 1-page website for an acquaintance for ₹10,000 as a favor. Once you deliver the draft, the acquaintance smiles and says: "It looks fantastic! Since we already built the foundation, could you just quickly add an e-commerce shop, payment gateway, and customer login system for another ₹2,000? We already started this together!"',
    vignetteSourceType: 'workplace',
    options: [
      {
        id: 'opt_1',
        text: 'Agree to do it because you already committed to helping them and you do not want to look like someone who leaves projects half-done.',
        isCorrect: false,
        cognitiveTakeaway: 'You fell for the consistency trap! You are performing ₹40,000 worth of complex backend development for ₹2,000 just to maintain a false self-image.',
      },
      {
        id: 'opt_2',
        text: 'Politely establish the boundary: "I am happy to complete the 1-page site we agreed on. An e-commerce and payment portal is a completely separate engineering phase that costs an additional ₹35,000. Let me know if you would like a formal quote for phase two."',
        isCorrect: true,
        cognitiveTakeaway: 'Mastery of consistency defense! You honor your original scope while treating new requests as distinct commercial transactions.',
      },
      {
        id: 'opt_3',
        text: 'Ghost the acquaintance completely and never send them the original 1-page site files.',
        isCorrect: false,
        cognitiveTakeaway: 'Unprofessional avoidance that breaches your original agreed commitment.',
      },
    ],
  },

  practiceQuestions: [
    {
      id: 'q_commit_01',
      questionType: 'multiple_choice',
      prompt: 'In social influence psychology, what is the "Foot-in-the-Door" technique?',
      options: [
        { id: 'opt_a', text: 'Physically blocking someone from closing an entrance door during door-to-door sales', isCorrect: false },
        { id: 'opt_b', text: 'Securing an initial small, easy agreement to increase the likelihood that the person will subsequently comply with a much larger request', isCorrect: true, feedbackText: 'Correct! The small initial agreement shifts the person\'s internal self-image, making subsequent compliance feel like natural consistency.' },
        { id: 'opt_c', text: 'Making an outrageous request first and then retreating to a smaller one', isCorrect: false },
      ],
      cognitiveTakeaway: 'Small agreements anchor identity and unlock future compliance.',
    },
  ],

  references: [
    {
      citation: 'Cialdini, R. B. (1984). Influence: The psychology of persuasion. William Morrow & Company.',
      doiOrUrl: 'https://doi.org/10.1037/0022-3514.51.5.1015',
      relevance: 'Foundational framework identifying Commitment and Consistency as one of the six primary weapons of influence.',
      displayOrder: 1,
    },
    {
      citation: 'Freedman, J. L., & Fraser, S. C. (1966). Compliance without pressure: The foot-in-the-door technique. Journal of Personality and Social Psychology, 4(2), 195–202.',
      doiOrUrl: 'https://doi.org/10.1037/h0023552',
      relevance: 'The original empirical experiment demonstrating the foot-in-the-door effect using road safety signs.',
      displayOrder: 2,
    },
  ],

  tags: ['Persuasion', 'Influence', 'Commitment', 'Consistency', 'Foot-in-the-door', 'Cialdini'],
  relatedTopics: [
    { topicId: 'reciprocity_principle', slug: 'reciprocity-principle', title: 'Reciprocity Principle', relationshipType: 'amplified_by' },
    { topicId: 'sunk_cost_fallacy', slug: 'sunk-cost-fallacy', title: 'Sunk Cost Fallacy', relationshipType: 'general_related' },
  ],
  seoTitle: 'Commitment & Consistency: The Psychology of Persuasion & Influence | Mentalab Mind',
  seoDescription: 'Master the science of Commitment and Consistency. Learn how the Foot-in-the-Door technique works, why our brains crave consistency, and how to say no with confidence.',
  canonicalUrl: '/mind/persuasion-and-influence/commitment-and-consistency',
  ogImageUrl: '/images/mind/commitment-and-consistency.png',
  publishedAt: '2026-09-26T00:00:00Z',
  deepExplanation: 'The commitment and consistency principle leverages cognitive dissonance to align subsequent behaviors with past public actions.',
};

export const TOPIC_COMMITMENT_CONSISTENCY_HINGLISH: MindTopicDetail = {
  ...TOPIC_COMMITMENT_CONSISTENCY_EN,
  title: 'Commitment & Consistency: Chhote "Haan" Se Badi Zid Manwane Ka Psychological Trap',
  subtitle: 'Foot-in-the-door technique aur dimaag ki aadat: Hum apni baat se palatne se itna kyu darte hain?',
  shortDescription: 'Ek aisi psychological tendency jisme ek baar chhota sa commit karne ke baad insaan khud ko consistent dikhane ke liye bohot badi sharton ko bhi maan leta hai.',
  oneLineExplanation: 'Simple shabdon me: Pehle ek chhota sa favor maang kar aage chalkar bohot bada kaam nikalwa lena.',

  summary30s: 'Humans ki ek bohot gehri aadat hoti hai: hum hamesha wahi dikhna chahte hain jo humne pehle kaha ya kiya tha. Agar koi aapse pehle ek chhota sa form bharwa le ya chhota sa favor maang le ("Kya aap bachhon ki education me vishwas rakhte hain?"), toh aapke dimaag me ek image ban jaati hai ki "Main ek achha insaan hoon." Do din baad wahi person aapse ₹5,000 ka donation maangta hai, aur aap sirf isliye mana nahi kar paate kyunki aapko lagta hai ki mana karne par aap hypocrite lagenge.',
  coreConcept: 'Robert Cialdini (1984) aur Freedman & Fraser (1966) ne prove kiya tha ki isko "Foot-in-the-Door" technique kehte hain. Dimaag ke andar cognitive dissonance (mental tension) hota hai jab humare actions hamari purani baaton se alag hote hain. Is tension se bachne ke liye log apna nuksaan karwake bhi purani baat par tike rehte hain.',
  summary60s: '1966 ke famous experiment me California ke logon ke ghar jaakar unke aangan me ek bohot bada aur badsurat board lagane ko kaha gaya jisme likha tha "DRIVE CAREFULLY." Sirf 17% logon ne haan kaha. Lekin doosre group ke logon se do hafte pehle sirf ek chhota sa 3-inch ka sticker car par lagane ko kaha gaya tha. Do hafte baad jab unse wahi bada badsurat board lagane ko kaha gaya, toh 76% logon ne haan keh diya! Chhote se sticker ne unka self-concept badal diya tha.',

  quickTakeaways: [
    'Foot-in-the-Door: Pehle chhota agreement lo, fir bada demand rakho',
    'Hypocrite banne ka darr: Dimaag consistency dikhane ke liye nuksaan utha leta hai',
    'Public commitment: Jo baat likh kar ya sabke saamne boli jaye, use badalna 5 guna mushkil hota hai',
    'Ilaaj: Apne dimaag ko samjhayein ki naye facts aane par decision badalna samajhdari hai, dhokha nahi',
  ],

  whyItHappens: 'Samaj me jo log roz apni baat badalte hain unhe irresponsible kaha jata hai. Hum bachpan se seekhte hain ki ek baar jo bol diya uspar tiko, chahe halat kitne bhi badal jayein.',
  evolutionaryMechanism: 'Tribe me wahi insaan trusted member rehta tha jiske actions predictable aur consistent the.',

  howItWorks: 'Mall me sales executive pehle aapse poochega: "Kya aapko lagta hai fit rehna zaroori hai?" Aap bolte hain "Haan." Fir wo kehta hai: "Toh fir aap hamara yeh ₹30,000 ka gym membership card lijiye, kyunki aapne abhi kaha ki aap health ko priority dete hain."',
  howToRespond: 'Kahiye: "Mera us baat par agree karna ek theoretical truth tha. Lekin ₹30,000 kharch karna ek commercial transaction hai jiske liye main abhi agree nahi karta."',

  reflectionPrompt: 'Kya aapne kabhi kisi ko isliye haan bola kyunki aapne pehle unhe ek chhota sa favor diya tha aur aapko mana karte huye awkward lag raha tha?',
  seoTitle: 'Commitment Consistency Kya Hai? Cialdini Persuasion Psychology | Mentalab Mind',
  seoDescription: 'Samjhein Foot-in-the-door technique aur Commitment Consistency ka science. Sales aur persuasion traps se bachne ke practical tareeqe.',
  canonicalUrl: '/mind/persuasion-and-influence/commitment-and-consistency',
};

function createLocalizedCommitmentRecord(
  lang: MindLanguageCode,
  title: string,
  subtitle: string,
  oneLine: string,
  summary30s: string,
  coreConcept: string,
  takeaways: string[]
): MindTopicDetail {
  return {
    ...TOPIC_COMMITMENT_CONSISTENCY_EN,
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

export const TOPIC_COMMITMENT_CONSISTENCY: Record<MindLanguageCode, MindTopicDetail> = {
  en: TOPIC_COMMITMENT_CONSISTENCY_EN,
  hinglish: TOPIC_COMMITMENT_CONSISTENCY_HINGLISH,
  hi: createLocalizedCommitmentRecord(
    'hi',
    'प्रतिबद्धता और निरंतरता (Commitment & Consistency): छोटी सहमति से बड़े निर्णय का जाल',
    'फुट-इन-द-डोर तकनीक: पहले छोटी सहमति लेकर बाद में बड़ी शर्तें मनवाने का मनोविज्ञान।',
    'सरल शब्दों में: किसी छोटी सी बात पर हां करवाकर बाद में बहुत बड़ी मांग मनवा लेना।',
    'प्रतिबद्धता और निरंतरता का सिद्धांत बताता है कि लोग अपने पिछले बयानों और कार्यों के साथ सुसंगत दिखने का भारी दबाव महसूस करते हैं।',
    'रॉबर्ट सियाल्डिनी (1984) के अनुसार, लोग पाखंडी दिखने के डर से अक्सर प्रतिकूल निर्णयों पर भी टिके रहते हैं।',
    [
      'फुट-इन-द-डोर तकनीक: छोटी शुरुआत बड़ी सहमति का मार्ग प्रशस्त करती है',
      'सुसंगत दिखने का दबाव: आंतरिक विरोधाभास से बचने के लिए लोग नुकसान झेलते हैं',
      'सार्वजनिक प्रतिबद्धता: लिखित या सार्वजनिक रूप से कही गई बात को बदलना कठिन होता है',
      'बचाव: परिस्थितियों के बदलने पर निर्णय बदलने में संकोच न करें',
    ]
  ),
  gu: createLocalizedCommitmentRecord(
    'gu',
    'પ્રતિબદ્ધતા અને સાતત્ય: નાની સંમતિમાંથી મોટી માંગણીઓ મનાવવાની યુક્તિ',
    'ફૂટ-ઇન-ધ-ડોર તકનીક અને સાતત્ય જાળવવાના મનોવૈજ્ઞાનિક દબાણનું રહસ્ય.',
    'સરળ શબ્દોમાં: પહેલાં નાની વાત મનાવીને પછી મોટો ફાયદો ઉઠાવવો.',
    'વ્યક્તિ પોતે સત્યવાદી દેખાવાના દબાણમાં આવીને અનિચ્છનીય નિર્ણયો સ્વીકારી લે છે.',
    'સ્થિતિ બદલાય ત્યારે નિર્ણય બદલવાની હિંમત રાખવી જરૂરી છે.',
    ['નાની જાળથી સાવધ રહો', 'નિર્ણય બદલવાનો અધિકાર', 'દબાણમાં ન આવો']
  ),
  mr: createLocalizedCommitmentRecord(
    'mr',
    'वचनबद्धता आणि सुसंगतता: लहान होकारावरून मोठी मागणी लादण्याचे तंत्र',
    'फूट-इन-द-डोअर पद्धत: भूतकाळातील शब्दांना बांधिल राहण्याच्या दबावाचा गैरफायदा.',
    'सोप्या भाषेत: आधी छोट्या गोष्टीला होकार मिळवून नंतर मोठी मागणी पदरात पाडून घेणे.',
    'लोक स्वतःचे वर्तन सुसंगत दाखवण्याच्या नादात अनेकदा अवाजवी मागण्या पूर्ण करतात.',
    'नवीन माहिती मिळाल्यावर जुना निर्णय बदलणे हे गैर नाही.',
    ['सावध राहा', 'ठाम नकार द्या', 'सुसंगततेचा हट्ट नको']
  ),
  bn: createLocalizedCommitmentRecord(
    'bn',
    'প্রতিশ্রুতি ও ধারাবাহিকতা: ছোট সম্মতি থেকে বড় দাবি আদায়ের ফাঁদ',
    'ফুট-ইন-দ্য-ডোর টেকনিক: নিজের কথার সাথে মিল রাখার মানসিক চাপের সুযোগ নেওয়া।',
    'সহজ কথায়: প্রথমে ছোট একটি বিষয়ে রাজি করিয়ে পরে বড় দাবি আদায় করা।',
    'মানুষ অসঙ্গত বা ভণ্ড প্রমাণের ভয়ে অনেক সময় ভুল সিদ্ধান্তে অনড় থাকে।',
    'পরিস্থিতির প্রয়োজনে মত বদলানো অন্যায় নয়।',
    ['ছোট ফাঁদ চিনুন', 'অনড় থাকা ত্যাগ করুন', 'স্পষ্ট সীমানা রাখুন']
  ),
  ta: createLocalizedCommitmentRecord(
    'ta',
    'அர்ப்பணிப்பு மற்றும் நிலைத்தன்மை: சிறிய ஒப்புதலில் இருந்து பெரிய தேவைகளை ஏற்கும் பொறி',
    'ஃபுட்-இன்-தி-டோர் நுட்பம்: முந்தைய முடிவுகளுக்கு இணங்க இருக்க வேண்டும் என்ற உளவியல் அழுத்தம்.',
    'எளிய சொற்களில்: முதலில் ஒரு சிறிய விஷயத்திற்கு ஒப்புதல் பெற்று, பின்னர் பெரிய கோரிக்கையை நிறைவேற்ற வைப்பது.',
    'நிலைத்தன்மையைக் காட்ட வேண்டும் என்ற அவசியத்தில் மக்கள் பலவீனமான முடிவுகளை எடுக்கிறார்கள்.',
    'சூழ்நிலை மாறும்போது முடிவை மாற்றுவது தவறல்ல.',
    ['சிறிய பொறியை உணருங்கள்', 'முடிவை மாற்ற தயங்காதீர்கள்', 'தெளிவான எல்லை']
  ),
  te: createLocalizedCommitmentRecord(
    'te',
    'నిబద్ధత మరియు స్థిరత్వం: చిన్న ఒప్పందంతో పెద్ద కోరికలను ఒప్పించే తంత్రం',
    'ఫుట్-ఇన్-ది-డోర్ టెక్నిక్: గతంలో తీసుకున్న నిర్ణయాలకు అనుగుణంగా ఉండాలనే మానసిక ఒత్తిడి.',
    'సులభమైన మాటల్లో: మొదట ఒక చిన్న విషయానికి అంగీకరింపజేసి, తర్వాత పెద్ద పని చేయించుకోవడం.',
    'తాము స్థిరంగా ఉన్నామని నిరూపించుకునే ప్రయత్నంలో ప్రజలు తప్పుడు నిర్ణయాలు తీసుకుంటారు.',
    'పరిస్థితులు మారినప్పుడు నిర్ణయాన్ని మార్చుకోవడమే వివేకం.',
    ['చిన్న ఒప్పందాలతో జాగ్రత్త', 'నిర్ణయాన్ని మార్చుకోండి', 'హద్దులు పాటించండి']
  ),
  kn: createLocalizedCommitmentRecord(
    'kn',
    'ಬದ್ಧತೆ ಮತ್ತು ಸ್ಥಿರತೆ: ಸಣ್ಣ ಒಪ್ಪಿಗೆಯಿಂದ ದೊಡ್ಡ ಬೇಡಿಕೆ ಈಡೇರಿಸುವ ತಂತ್ರ',
    'ಫುಟ್-ಇನ್-ದಿ-ಡೋರ್ ತಂತ್ರ: ಹಿಂದಿನ ಮಾತುಗಳಿಗೆ ಬದ್ಧರಾಗಿರಬೇಕೆಂಬ ಮಾನಸಿಕ ಒತ್ತಡದ ದುರುಪಯೋಗ.',
    'ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ: ಮೊದಲು ಸಣ್ಣ ವಿಷಯಕ್ಕೆ ಒಪ್ಪಿಗೆ ಪಡೆದು ನಂತರ ದೊಡ್ಡ ಬೇಡಿಕೆಯನ್ನು ಹೇರುವುದು.',
    'ಜನರು ತಮ್ಮನ್ನು ಸ್ಥಿರರೆಂದು ತೋರಿಸಿಕೊಳ್ಳಲು ನಷ್ಟಕರ ನಿರ್ಧಾರಗಳನ್ನೂ ಒಪ್ಪಿಕೊಳ್ಳುತ್ತಾರೆ.',
    'ಅಗತ್ಯವಿದ್ದಾಗ ನಿರ್ಧಾರ ಬದಲಿಸುವುದು ಜಾಣತನ.',
    ['ತಂತ್ರವನ್ನು ಗುರುತಿಸಿ', 'ಹಿಂದಿನ ಮಾತಿಗೆ ಕಟ್ಟುಬೀಳದಿರಿ', 'ಸ್ಪಷ್ಟ ನಿಲುವು ತಾಳಿ']
  ),
  ml: createLocalizedCommitmentRecord(
    'ml',
    'പ്രതിബദ്ധതയും സ്ഥിരതയും: ചെറിയ സമ്മതത്തിൽ നിന്ന് വലിയ ആവശ്യങ്ങളിലേക്ക് നയിക്കുന്ന കെണി',
    'ഫൂട്ട്-ഇൻ-ദി-ഡോർ ടെക്നിക്: മുൻ തീരുമാനങ്ങളിൽ ഉറച്ചുനിൽക്കണമെന്ന സമ്മർദ്ദത്തിന്റെ ദുരുപയോഗം.',
    'ലളിതമായി പറഞ്ഞാൽ: ആദ്യം ഒരു ചെറിയ കാര്യത്തിന് സമ്മതിപ്പിച്ച് പിന്നീട് വലിയ ഡിമാൻഡ് നടപ്പിലാക്കുക.',
    'സ്വന്തം വാക്കിന് മാറ്റം വരാതിരിക്കാൻ വേണ്ടി ആളുകൾ നഷ്ടങ്ങൾ സഹിക്കുന്നു.',
    'സാഹചര്യത്തിനനുസരിച്ച് തീരുമാനം മാറ്റാൻ മടിക്കരുത്.',
    ['ചെറിയ കെണികൾ തിരിച്ചറിയുക', 'നിലപാട് മാറ്റാൻ മടിക്കരുത്', 'വ്യക്തമായ അതിരുകൾ']
  ),
  pa: createLocalizedCommitmentRecord(
    'pa',
    'ਪ੍ਰਤੀਬੱਧਤਾ ਅਤੇ ਇਕਸਾਰਤਾ: ਛੋਟੀ ਹਾਂ ਨਾਲ ਵੱਡੀਆਂ ਸ਼ਰਤਾਂ ਮਨਵਾਉਣ ਦਾ ਢੰਗ',
    'ਫੁੱਟ-ਇਨ-ਦ-ਡੋਰ ਤਕਨੀਕ: ਆਪਣੀ ਪੁਰਾਣੀ ਗੱਲ ਤੇ ਕਾਇਮ ਰਹਿਣ ਦੇ ਮਾਨਸਿਕ ਦਬਾਅ ਦਾ ਫਾਇਦਾ ਚੁੱਕਣਾ।',
    'ਸੌਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ: ਪਹਿਲਾਂ ਛੋਟੀ ਜਿਹੀ ਗੱਲ ਮਨਵਾ ਕੇ ਬਾਅਦ ਵਿੱਚ ਵੱਡਾ ਕੰਮ ਕਢਵਾਉਣਾ।',
    'ਲੋਕ ਆਪਣੇ ਆਪ ਨੂੰ ਇਕਸਾਰ ਦਿਖਾਉਣ ਲਈ ਗਲਤ ਫੈਸਲਿਆਂ ਨਾਲ ਵੀ ਚਿਪਕੇ ਰਹਿੰਦੇ ਹਨ।',
    'ਹਾਲਾਤ ਬਦਲਣ ਤੇ ਆਪਣਾ ਫੈਸਲਾ ਬਦਲਣਾ ਸਿਆਣਪ ਹੈ।',
    ['ਝਾਂਸਾ ਪਛਾਣੋ', 'ਫੈਸਲਾ ਬਦਲਣ ਦੀ ਆਜ਼ਾਦੀ', 'ਦਬਾਅ ਤੋਂ ਬਚੋ']
  ),
  ur: createLocalizedCommitmentRecord(
    'ur',
    'عزم اور مستقل مزاجی: چھوٹے اقرار سے بڑے فیصلوں کا جال',
    'فٹ ان دی ڈور تکنیک: اپنی بات پر قائم رہنے کے نفسیاتی دباؤ کا استحصالی استعمال۔',
    'آسان الفاظ میں: پہلے کسی چھوٹی بات پر راضی کر کے بعد میں بڑا مطالبہ منوا لینا۔',
    'لوگ منافق دکھنے کے خوف سے نقصان دہ سودوں پر بھی رضامند ہو جاتے ہیں۔',
    'حالات کے بدلنے پر اپنا فیصلہ بدلنے میں کوئی برائی نہیں۔',
    ['چھوٹا جال پہچانیں', 'فیصلہ بدلنے کی ہمت رکھیں', 'سختی سے انکار کریں']
  ),
  or: createLocalizedCommitmentRecord(
    'or',
    'ପ୍ରତିବଦ୍ଧତା ଏବଂ ସ୍ଥିରତା: ଛୋଟ ସହମତିରୁ ବଡ଼ ଦାବି ହାସଲ କରିବାର ଫାନ୍ଦ',
    'ଫୁଟ୍-ଇନ୍-ଦ-ଡୋର୍ କୌଶଳ: ପୂର୍ବ କଥାରେ ଅଟଳ ରହିବାର ମାନସିକ ଚାପର ଦୁରୁପଯୋଗ।',
    'ସହଜ ଭାଷାରେ: ପ୍ରଥମେ ଗୋଟିଏ ଛୋଟ କଥାରେ ହଁ କରାଇ ପରେ ବଡ଼ ଦାବି ପୂରଣ କରାଇବା।',
    'ଲୋକେ ନିଜକୁ ସ୍ଥିର ପ୍ରମାଣିତ କରିବା ପାଇଁ ଅନେକ ସମୟରେ କ୍ଷତି ସହିଥାନ୍ତି।',
    'ପରିସ୍ଥିତି ବଦଳିଲେ ନିଷ୍ପତ୍ତି ବଦଳାଇବା ଉଚିତ।',
    ['ଜାଲ ଚିହ୍ନନ୍ତୁ', 'ନିଷ୍ପତ୍ତି ବଦଳାନ୍ତୁ', 'ଦୃଢ଼ ରୁହନ୍ତୁ']
  ),
  as: createLocalizedCommitmentRecord(
    'as',
    'প্ৰতিশ্ৰুতি আৰু স্থিৰতা: সৰু সন্মতিৰ পৰা ডাঙৰ দাবী আদায়ৰ ফাঁকি',
    'ফুট-ইন-দ্য-ডোৰ কৌশল: অতীতৰ কথাৰ সৈতে সংগতি ৰখাৰ মানসিক চাপৰ সুযোগ লোৱা।',
    'সহজ কথাত: প্ৰথমে এটা সৰু কথাত সন্মত কৰাই পিছত ডাঙৰ দাবী আদায় কৰা।',
    'মানুহে নিজৰ ব্যক্তিত্ব সংগতিপূৰ্ণ দেখুৱাবলৈ ভুল সিদ্ধান্ততো অটল থাকে।',
    'প্ৰয়োজন অনুসৰি সিদ্ধান্ত সলনি কৰাটোৱেই উচিত।',
    ['ফাঁকি বুজি লওক', 'সিদ্ধান্ত সলনি কৰক', 'সীমা নিৰ্ধাৰণ কৰক']
  ),
};
