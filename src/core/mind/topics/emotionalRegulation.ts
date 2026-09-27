import { MindTopicDetail, MindLanguageCode } from '../types';

export const TOPIC_EMOTIONAL_REGULATION: Record<MindLanguageCode, MindTopicDetail> = {
  en: {
    id: 'emotional_regulation',
    categoryId: 'emotions',
    slug: 'cognitive-reappraisal-emotional-regulation',
    difficulty: 'intermediate',
    estimatedReadingMinutes: 5,
    scientificConsensusTier: 'established',
    sortWeight: 9,
    viewCount: 3640,
    shareCount: 390,
    bookmarkCount: 580,
    title: 'Cognitive Reappraisal & Emotional Regulation',
    subtitle: 'Reframing emotional triggers before the amygdala takes over',
    shortDescription: 'The science-backed cognitive strategy of reinterpreting the meaning of an emotional stimulus to alter its physiological and psychological impact.',
    oneLineExplanation: 'You cannot always control the first thought or event, but you can control the story you tell yourself about it.',

    summary30s: 'You cannot always control the events happening around you, but you can control the story you tell yourself about them. Reinterpreting a trigger cools down your brain\'s alarm system before anger or panic takes over.',
    // 1. What is it?
    coreConcept: 'Cognitive reappraisal is an emotion regulation strategy where you consciously change the narrative or interpretation of a stressful situation, which fundamentally changes your physiological and emotional response before it turns into chronic distress or rage.',
    summary60s: 'When someone cuts you off in traffic, your amygdala spikes adrenaline if your narrative is: "He deliberately disrespected me!" But if you reframe the narrative to: "He probably has a family medical emergency," your anger dissolves in seconds. The external event was identical; the cognitive interpretation changed your biology.',
    quickTakeaways: [
      'Events do not cause emotions; our interpretations (appraisals) cause emotions',
      'Reappraisal is vastly superior to suppression (bottling up feelings harms the cardiovascular system)',
      'Practicing cognitive reappraisal strengthens the prefrontal cortex\'s regulatory control over the amygdala',
    ],

    // 2. Why does it happen?
    whyItHappens: 'Dual-process neurobiology. The brain\'s emotional threat detector (amygdala) processes stimuli in ~120 milliseconds, whereas the rational prefrontal cortex requires ~300-500 milliseconds to analyze context.',
    evolutionaryMechanism: 'Reacting to a perceived threat with instant aggression or terror kept our ancestors alive when facing wild predators. However, modern social interactions rarely require physical fight-or-flight.',

    // 3. How does it work?
    howItWorks: 'The prefrontal cortex projects inhibitory neural pathways down to the amygdala, dampening cortisol and adrenaline release when an alternative, non-threatening interpretation is formulated.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'Suppression vs. Cognitive Reappraisal',
      description: 'The biological difference between swallowing your feelings and reframing them.',
      analogySideA: { label: 'Emotional Suppression', detail: 'Holding a beach ball underwater. Takes exhausting muscular energy, bursts up violently later.' },
      analogySideB: { label: 'Cognitive Reappraisal', detail: 'Deflating the beach ball by opening the valve. The pressure evaporates naturally.' },
    },

    // 4. What does research say?
    researchSummary: 'Extensively proven by James Gross (1998, 2002, Stanford University). FMRI studies show that individuals who use reappraisal show significantly reduced amygdala activation and lower sympathetic nervous system arousal compared to those who suppress emotions.',
    limitationsAndControversies: 'Reappraisal is not a panacea. When dealing with acute physical danger, abuse, or systemic injustice, reappraisal should never replace practical action or healthy boundaries.',

    // 5. What does it look like in real life?
    examples: [
      {
        id: 'er_ex_01',
        domain: 'workplace',
        displayOrder: 1,
        title: 'Critical Boss Feedback Reframe',
        description: 'Instead of thinking "My boss hates me and wants to fire me", the employee reframes: "My boss sees potential in me and wants this client presentation to be bulletproof."',
        takeaway: 'Reframing converts debilitating panic into productive preparation.',
      },
    ],
    scenarios: [
      {
        id: 'er_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'The Chaotic Silk Board / Delhi Ring Road Traffic Jam',
        narrativeContext: 'Anand is stuck in a brutal 1-hour traffic gridlock in Bengaluru. Another car abruptly cuts into his lane without signaling, brushing past his bumper. Anand\'s hands grip the steering wheel, his pulse surges to 130 BPM, and he reaches for his door to confront the driver.',
        biasInAction: 'Anand personalized the incident, viewing the bad lane change as a personal insult to his status and dignity.',
        optimalResponse: 'Take a slow exhale and apply the Hanlon\'s Razor reframe: "The city traffic is chaotic, and this driver is probably stressed or distracted, just like everyone else. Honking and fighting will not move the traffic 1 inch faster, but it will ruin my next 4 hours." Turn on calming music.',
        reflectionPrompt: 'Think of the last time you felt sudden anger. What was the exact sentence your mind told you right before the anger exploded?',
      },
    ],

    // 6. How can I recognize it?
    howToRecognize: 'Notice the sensation of emotional hijacking: tightness in the chest, heat rising in the neck, and an urgent impulse to lash out verbally or send an angry email.',
    whereYouEncounterIt: 'Traffic jams, delayed flights, curt Slack messages, family dinner debates.',

    // 7. What misconceptions exist?
    commonMisconceptions: 'Common myth: "Emotional regulation means becoming a cold robot with zero feelings." Truth: Reappraisal allows you to experience feelings fully without being enslaved by reactive, destructive impulses.',

    // 8. What should I do about it?
    howToRespond: 'Insert a 5-second cognitive buffer between the trigger and your response. Ask: "What is another equally plausible, non-malicious explanation for this?"',
    psychologicalDefenses: [
      { title: 'Hanlon\'s Razor Reframe', instruction: 'Never attribute to malice that which is adequately explained by tiredness, distraction, or incompetence.' },
      { title: 'The 10-Year Horizon Test', instruction: 'Ask: "Will this event matter in 10 days, 10 months, or 10 years?" Shrinks trivia down to size.' },
      { title: 'Physiological Sigh', instruction: 'Two quick inhales through the nose followed by one long, slow exhale through the mouth drops autonomic heart rate instantly.' },
    ],

    // 9. Can I test whether I understood it?
    practiceQuestions: [
      {
        id: 'er_q_01',
        difficulty: 'intermediate',
        questionFormat: 'choose_best_explanation',
        displayOrder: 1,
        prompt: 'Which mental process represents true Cognitive Reappraisal according to emotional regulation science?',
        scenarioText: 'A colleague does not greet you in the hallway.',
        explanation: 'Reappraisal consciously generates an alternate, non-personalized explanation ("they were deep in thought"), preventing amygdala-driven resentment.',
        antidoteAdvice: 'Do not automatically personalize ambiguity.',
        options: [
          {
            id: 'er_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Forcing a fake smile while silently plotting revenge in the next team meeting.',
            feedbackText: 'Incorrect. This is rumination and suppression.',
          },
          {
            id: 'er_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Thinking: "She looks preoccupied with a stressful deadline, it has nothing to do with me."',
            feedbackText: 'Correct! Changing the interpretation neutralizes the stress response.',
          },
          {
            id: 'er_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Immediately texting HR to report a toxic environment.',
            feedbackText: 'Incorrect. This escalates a trivial, ambiguous event.',
          },
        ],
      },
    ],

    reflectionPrompt: 'When you are upset, do you tend to suppress your emotions until you explode, or do you take a moment to examine the story you are telling yourself?',
    sections: [],
    references: [
      {
        id: 'er_ref_01',
        title: 'Emotion regulation: Affective, cognitive, and social consequences',
        citation: 'Gross, J. J. (2002). Emotion regulation: Affective, cognitive, and social consequences. Psychophysiology, 39(3), 281–291.',
        authors: 'James J. Gross',
        publicationYear: 2002,
        journalOrPublisher: 'Psychophysiology',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        doiOrUrl: 'https://doi.org/10.1111/1469-8986.3930281',
        relevance: 'Foundational process model of emotion regulation contrasting antecedent-focused reappraisal with response-focused suppression.',
        displayOrder: 1,
      },
      {
        id: 'er_ref_02',
        title: 'A meta-analysis of the relative effectiveness of emotion regulation strategies',
        citation: 'Webb, T. L., Miles, E., & Sheeran, P. (2012). Dealing with feeling: A meta-analysis of the relative effectiveness of emotion regulation strategies. Psychological Bulletin, 138(4), 775–804.',
        authors: 'Thomas L. Webb, Eleanor Miles, Paschal Sheeran',
        publicationYear: 2012,
        journalOrPublisher: 'Psychological Bulletin',
        sourceType: 'meta_analysis',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        doiOrUrl: 'https://doi.org/10.1037/a0027600',
        relevance: 'Meta-analysis of 306 studies proving cognitive reappraisal significantly downregulates both physiological and subjective emotional distress.',
        displayOrder: 2,
      },
    ],
    tags: ['Emotions', 'Emotional Regulation', 'Neuroscience'],
    relatedTopics: [
      {
        topicId: 'healthy_boundaries',
        slug: 'healthy-boundaries-and-communication',
        title: 'Healthy Boundaries',
        relationshipType: 'general_related',
      },
    ],
    seoTitle: 'Cognitive Reappraisal: The Neuroscience of Emotional Regulation | Mentalab Mind',
    seoDescription: 'Master cognitive reappraisal techniques to neutralize anger, anxiety, and stress before your amygdala hijacks your brain.',
    canonicalUrl: '/mind/emotions-and-regulation/cognitive-reappraisal-emotional-regulation',
    ogImageUrl: '/images/mind/emotional-regulation.png',
    publishedAt: '2026-09-22T00:00:00Z',
    deepExplanation: 'Cognitive reappraisal activates the dorsolateral prefrontal cortex to downregulate amygdala hyperactivity.',
  },
  hinglish: {
    id: 'emotional_regulation',
    categoryId: 'emotions',
    slug: 'cognitive-reappraisal-emotional-regulation',
    difficulty: 'intermediate',
    estimatedReadingMinutes: 5,
    scientificConsensusTier: 'established',
    sortWeight: 9,
    viewCount: 3640,
    shareCount: 390,
    bookmarkCount: 580,
    title: 'Cognitive Reappraisal & Emotional Regulation',
    subtitle: 'Gusse aur panic se pehle dimaag ko reframe karna',
    shortDescription: 'Kisi event ke meaning ya kahani ko badal kar apne gusse aur emotional stress ko shant karne ki scientific technique.',
    oneLineExplanation: 'Aap bahar ki situation ko hamesha control nahi kar sakte, lekin uspar jo kahani dimaag banata hai use badal sakte hain.',

    summary30s: 'Aap bahar hone wale events ko nahi badal sakte, par apne dimaag ki kahani ko badal sakte hain. Ek trigger ko naye nazariye se dekhne par dimaag ka alarm system bina gussa ya panic ke shaant ho jata hai.',
    coreConcept: 'Cognitive reappraisal ka matlab hai kisi situation ko ek naye nazariye se dekhna taaki gussa ya darr naturally evaporate ho jaye, bina use andar dabaye.',
    summary60s: 'Agar traffic me koi achanak samne aa jaye aur aap sochein: "Isne meri beizzati ki!", to turant gusse ka ubaal aayega. Lekin agar aap sochein: "Shayad iski family me koi medical emergency ho", to gussa turant gayab ho jayega. Situation same thi; soch badalne se physiology badal gayi.',
    quickTakeaways: [
      'Events gussa nahi dilate; hamari interpretation gussa dilati hai',
      'Gussa dabana (suppression) heart health ke liye dangerous hai; reframe karna best hai',
      'Practice karne se dimaag ka rational prefrontal cortex gusse par control pa leta hai',
    ],

    whyItHappens: 'Dimaag ki wiring. Amygdala (darr aur gusse ka centre) 120 millisecond me react karta hai, jabki sochne-samajhne wala cortex 400 millisecond leta hai.',
    evolutionaryMechanism: 'Jungle me achanak jhadap me bina soche react karna zaroori tha, lekin modern life me yeh road rage ban jata hai.',

    howItWorks: 'Prefrontal cortex ek naye meaning ke sath amygdala ko signal bhejta hai ki "Koi khatra nahi hai, relax." Isse heartbeat aur adrenaline normal ho jate hain.',
    visualExplanation: {
      type: 'contrast_matrix',
      visualConceptType: 'comparison_matrix',
      headline: 'Gussa Dabana vs Reappraisal Metaphor',
      description: 'Feelings ko dabane aur reframe karne ka farq.',
      analogySideA: { label: 'Emotion Dabana (Suppression)', detail: 'Paani me football dabane jaisa. Haath thak jata hai aur baad me ubal kar bahar aati hai.' },
      analogySideB: { label: 'Cognitive Reappraisal', detail: 'Football ki hawa nikal dena. Pressure naturally khatam ho jata hai.' },
    },

    researchSummary: 'Stanford University ke Dr. James Gross ki landmark research ne prove kiya ki jo log reappraisal karte hain unka BP aur stress hormones sabse low rehte hain.',
    limitationsAndControversies: 'Agar koi physical abuse ya real danger ho, to wahan reframe nahi karna chahiye; wahan safe jagah jana zaroori hai.',

    examples: [
      {
        id: 'er_ex_01_hi',
        domain: 'workplace',
        displayOrder: 1,
        title: 'Boss Ki Strict Feedback Ka Reframe',
        description: '"Boss mujhse nafrat karta hai" sochne ke bajaye sochna: "Boss chahta hai ki meri report presentation me koi kami na rahe."',
        takeaway: 'Depression ke bajaye positive energy milti hai.',
      },
    ],
    scenarios: [
      {
        id: 'er_scen_01',
        scenarioType: 'indian_context',
        displayOrder: 1,
        isFeatured: true,
        title: 'Silk Board / Delhi Traffic Jam Ka Road Rage',
        narrativeContext: 'Anand Bengaluru ke bhishan traffic me phasa tha. Ek car achanak bina indicator diye uske samne aa gayi. Anand ka pulse 130 ho gaya aur wo ladne ke liye darwaza kholne laga.',
        biasInAction: 'Anand ne assume kiya ki samne wale ne jaan-bujh kar uski disrespect ki.',
        optimalResponse: 'Gehri saans lein aur sochein: "Traffic itna kharab hai, sab log pareshan hain. Ladne se traffic 1 second bhi aage nahi badhega, ulta mera pura din kharab ho jayega." Shaant hoke music lagayein.',
        reflectionPrompt: 'Pichli baar jab aapko achanak gussa aaya tha, to gussa aane se theek pehle dimaag ne kya line boli thi?',
      },
    ],

    howToRecognize: 'Jab seene me ghutan ho, gale me garmi lage aur turant chillane ka mann kare—to samajh jaiye amygdala hijack ho raha hai.',
    whereYouEncounterIt: 'Road traffic, flight delay, late replies, family arguments.',

    commonMisconceptions: 'Myth: "Emotional regulation matlab bina emotion ka robot ban jana." Fact: Iska matlab emotions ko samajhna aur unka ghulam na banna hai.',

    howToRespond: 'React karne se pehle 5 second ka pause lein aur sochein: "Kya iska koi aur reasonable explanation ho sakta hai?"',
    psychologicalDefenses: [
      { title: 'Hanlon\'s Razor', instruction: 'Har baat ko dushmani mat samjhein; log aksar thake huye ya distracted hote hain.' },
      { title: '10-Din Ka Niyam', instruction: 'Sochiye: "Kya 10 mahine baad is baat ka koi matlab hoga?"' },
      { title: 'Physiological Sigh', instruction: 'Naak se 2 baar saans andar lein aur mooh se dheere-dheere lambi saans chhod dein. Heart rate turant drop hota hai.' },
    ],

    practiceQuestions: [
      {
        id: 'er_q_01',
        difficulty: 'intermediate',
        questionFormat: 'choose_best_explanation',
        displayOrder: 1,
        prompt: 'Inme se kaunsa process true Cognitive Reappraisal hai?',
        scenarioText: 'Office me colleague ne aapse hello nahi bola.',
        explanation: 'Personalize na karte huye neutral narrative banana ("wo busy hogi") stress response ko shant karta hai.',
        antidoteAdvice: 'Har cheez ko apne upar mat lijiye.',
        options: [
          {
            id: 'er_opt_01',
            isCorrect: false,
            displayOrder: 1,
            optionText: 'Man hi man badla lene ki planning karna.',
            feedbackText: 'Galat. Yeh toxic rumination hai.',
          },
          {
            id: 'er_opt_02',
            isCorrect: true,
            displayOrder: 2,
            optionText: 'Sochna: "Wo kisi urgent deadline me phasi hogi, iska mujhse koi lena-dena nahi hai."',
            feedbackText: 'Sahi! Reframe karke emotional trigger neutral kar diya.',
          },
          {
            id: 'er_opt_03',
            isCorrect: false,
            displayOrder: 3,
            optionText: 'Turant jaakar usse ladai karna.',
            feedbackText: 'Galat.',
          },
        ],
      },
    ],

    reflectionPrompt: 'Jab aap gussa hote hain, to kya aap use andar dabate hain jab tak blast na ho jaye, ya apne nazariye ko check karte hain?',
    sections: [],
    references: [
      {
        id: 'er_ref_01',
        title: 'Emotion regulation: Affective, cognitive, and social consequences',
        citation: 'Gross, J. J. (2002). Psychophysiology.',
        authors: 'James J. Gross',
        publicationYear: 2002,
        journalOrPublisher: 'Psychophysiology',
        sourceType: 'peer_reviewed_journal',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        doiOrUrl: 'https://doi.org/10.1111/1469-8986.3930281',
        relevance: 'Foundational process model of emotion regulation comparing reappraisal with suppression.',
        displayOrder: 1,
      },
      {
        id: 'er_ref_02',
        title: 'A meta-analysis of the relative effectiveness of emotion regulation strategies',
        citation: 'Webb et al. (2012). Psychological Bulletin.',
        authors: 'Thomas L. Webb, Eleanor Miles, Paschal Sheeran',
        publicationYear: 2012,
        journalOrPublisher: 'Psychological Bulletin',
        sourceType: 'meta_analysis',
        evidenceStrength: 'peer_reviewed_meta_analysis',
        doiOrUrl: 'https://doi.org/10.1037/a0027600',
        relevance: 'Meta-analysis of 306 studies proving cognitive reappraisal reduces psychological stress.',
        displayOrder: 2,
      },
    ],
    tags: ['Emotions', 'Emotional Regulation', 'Neuroscience'],
    relatedTopics: [],
    seoTitle: 'Emotional Regulation & Reappraisal | Neuroscience | Mentalab Mind',
    seoDescription: 'Gusse aur stress ko manage karne ka cognitive neuroscience tareeqa. Seekhein prefrontal cortex ka control.',
    canonicalUrl: '/mind/emotions-and-regulation/cognitive-reappraisal-emotional-regulation',
    ogImageUrl: '/images/mind/emotional-regulation.png',
    publishedAt: '2026-09-22T00:00:00Z',
    deepExplanation: 'Cognitive reappraisal prefrontal-amygdala connectivity ko optimize karta hai.',
  },
  hi: {} as any,
  gu: {} as any,
  mr: {} as any,
  te: {} as any,
  ta: {} as any,
  kn: {} as any,
  ml: {} as any,
  bn: {} as any,
  pa: {} as any,
  ur: {} as any,
  or: {} as any,
  as: {} as any,
};
