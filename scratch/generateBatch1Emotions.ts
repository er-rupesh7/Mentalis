import * as fs from 'fs';
import * as path from 'path';
import { ComprehensiveTopicDef, generateTopicTsCode } from './topicGeneratorHelper';

const topicsDir = path.join(__dirname, '../src/core/mind/topics');

export const BATCH1_TOPICS: ComprehensiveTopicDef[] = [
  // ==========================================
  // TRACK 6: EMOTIONS & REGULATION (emotions)
  // ==========================================
  {
    fileName: 'amygdalaHijack.ts',
    varName: 'amygdala_hijack',
    id: 'amygdala_hijack',
    categoryId: 'emotions',
    slug: 'amygdala-hijack',
    difficulty: 'intermediate',
    readTime: 5,
    sortWeight: 5,
    titleEn: 'Amygdala Hijack: The Neural Surge That Overrides Reason',
    subtitleEn: 'When the primitive threat center triggers fight-or-flight before the rational prefrontal cortex can process facts.',
    shortDescEn: 'A sudden, overwhelming emotional explosion triggered when the amygdala bypasses the prefrontal cortex, perceiving a social threat as physical danger.',
    oneLineEn: 'The brain reacting with survival aggression before logical thought even begins.',
    summary30sEn: 'Coined by Daniel Goleman based on Joseph LeDoux’s neuroscience research, an amygdala hijack happens when sensory input bypasses the neocortex, flooding your body with adrenaline in milliseconds before your logical mind can intervene.',
    coreConceptEn: 'Sensory signals split at the thalamus: a high road leads to the rational prefrontal cortex, while a low, emergency road goes straight to the amygdala. In high-stress conflicts, the amygdala triggers a neurochemical storm before the rational mind can formulate words.',
    summary60sEn: 'When someone insults or criticizes you, your primitive amygdala cannot distinguish between a physical tiger and a social attack. It triggers cortisol and adrenaline release, hijacking working memory and disabling logical reflection. The biological reaction takes roughly 6 seconds to subside if you do not add fuel through defensive self-talk.',
    takeawaysEn: [
      'The subcortical pathway reacts in milliseconds, far faster than the rational neocortex',
      'Blood flow shifts away from the prefrontal cortex, causing temporary logical blindness',
      'A conscious 6-second pause gives the prefrontal cortex time to regain executive control',
      'Physical markers like heart pounding and shallow breathing precede verbal explosions'
    ],
    whyItHappensEn: 'Evolutionary survival prioritized speed over accuracy: reacting to a false alarm is harmless, but hesitating in front of a predator is fatal.',
    evolutionaryEn: 'Early humans faced lethal predators; immediate neurochemical readiness was essential for clan survival.',
    howItWorksEn: 'Social stimulus perceived as threat -> Thalamus routes signal directly to amygdala -> Adrenaline surge disables working memory -> Prefrontal cortex goes offline -> Regrettable outburst occurs.',
    visualHeadlineEn: 'The Fast Low Road vs. The Deliberate High Road',
    visualDescEn: 'How emergency subcortical wiring bypasses rational cortical processing.',
    sideALabelEn: 'Rational High Road (Prefrontal Cortex)',
    sideADetailEn: 'Takes 250–500ms to analyze context, understand nuance, and choose an assertive response.',
    sideBLabelEn: 'Amygdala Low Road (Survival Hijack)',
    sideBDetailEn: 'Fires in 12–20ms, dumping adrenaline and screaming fight-or-flight before you can think.',
    researchSummaryEn: 'LeDoux (1996, The Emotional Brain) and Goleman (1995) documented the anatomical short-circuit between the sensory thalamus and the amygdala, proving that emotional response can precede cognitive evaluation.',
    refAuthor: 'Goleman, D. & LeDoux, J. E.',
    refYear: 1995,
    refTitle: 'Emotional Intelligence and the Emotional Brain',
    refCitation: 'Goleman, D. (1995). Emotional Intelligence. Bantam Books.',
    refDoi: 'https://doi.org/10.1037/0003-066X.51.10.1069',
    scenarioTitleEn: 'The Startup Pitch Outburst in Gurgaon',
    scenarioContextEn: 'During a crucial funding pitch in Cyber City Gurgaon, an investor casually remarked that Rohan\'s financial model was "childish". Rohan felt a flash of intense heat in his face and immediately snapped, shouting that the investor didn\'t understand modern tech.',
    scenarioBiasEn: 'Rohan experienced an acute amygdala hijack: the investor\'s critique felt like an identity-level threat, disabling his composure.',
    scenarioOptimalEn: 'Take a deliberate 6-second sip of water to allow the prefrontal cortex to come back online, then respond calmly: "Let me walk you through the unit economics that justify that estimate."',
    scenarioReflectionEn: 'When was the last time you felt sudden physical heat or heart pounding during an argument before speaking words you regretted?',
    howToRecognizeEn: 'Sudden surge of bodily heat, clenched jaw, racing heartbeat, and an irresistible urge to interrupt or shout.',
    whereEn: 'High-stakes negotiations, family arguments, performance reviews, and heated online comments.',
    misconceptionsEn: 'Myth: Emotional intelligence means never feeling anger. Reality: High EQ people feel the exact same adrenaline surge, but have trained the ability to insert a pause before reacting.',
    limitationsEn: 'In physical emergencies (fire, physical assault), the amygdala hijack is life-saving and should not be suppressed.',
    howToRespondEn: 'Implement the 6-Second Circuit Breaker: breathe in for 4 seconds, exhale for 4, drink water, and label the emotion internally ("I am feeling threatened right now").',
    defensesEn: [
      { title: 'The 6-Second Biological Buffer', instruction: 'Never speak for the first 6 seconds after hearing triggering criticism; sip water or take a deep belly breath.' },
      { title: 'Name It to Tame It', instruction: 'Silently say: "My amygdala is firing an alarm bell." Linguistic labeling activates the left prefrontal cortex.' }
    ],
    pqPromptEn: 'A colleague loudly questions your integrity in front of the entire department. What is the scientifically optimal immediate reaction?',
    pqScenarioEn: 'Your heart is racing at 130 bpm and you feel a wave of intense anger rushing through your chest.',
    pqExplanationEn: 'During an amygdala hijack, your logical reasoning is biologically impaired. Forcing a physical pause and conscious breath lets the prefrontal cortex regain control.',
    pqAntidoteEn: 'Pause for 6 seconds, acknowledge the surge, and delay verbal response until pulse stabilizes.',
    pqOptionsEn: [
      { id: 'opt_a', text: 'Instantly shout back with equal aggression to maintain status and assert dominance.', isCorrect: false, feedback: 'Incorrect. This fuels the hijack and damages professional credibility.' },
      { id: 'opt_b', text: 'Pause, take a slow 4-second breath, sip water, and respond with a neutral fact-based question.', isCorrect: true, feedback: 'Correct! The pause allows prefrontal cortex re-engagement.' },
      { id: 'opt_c', text: 'Walk out of the room slamming the door to show complete disgust.', isCorrect: false, feedback: 'Incorrect. This is an emotional surrender to the hijack.' }
    ],
    reflectionPromptEn: 'Can you identify the specific physical bodily cue (jaw clench, stomach flutter, throat tight) that signals your amygdala is activating?',
    titleHinglish: 'Amygdala Hijack: Jab Gussa Dimaag Ke Logic Ko Band Kar Deta Hai',
    subtitleHinglish: 'Kyu achanak choti si baat par insaan bina soche samjhe chilla padta hai aur baad me regret karta hai.',
    shortDescHinglish: 'Ek achanak hone wala emotional explosion jisme dimaag ka threat center logic ko bypass kar deta hai.',
    oneLineHinglish: 'Dimaag ka logic chhodkar purani animal survival instinct par chale jana.',
    summary30sHinglish: 'Daniel Goleman ne samjhaya ki dimaag ka emergency alarm (amygdala) prefrontal cortex se pehle trigger hota hai. Choti si criticism par dimaag adrenaline release kar deta hai, jisse logic temporary tor par band ho jata hai.',
    coreConceptHinglish: 'Hamare dimaag me do raste hote hain: lamba rasta jo soch-samajh kar faisla leta hai, aur chota emergency rasta jo direct amygdala se judta hai. Gusse me emergency rasta jeet jata hai.',
    summary60sHinglish: 'Jab koi aapki beizzati karta hai, to dimaag use physical attack samajhta hai. Dil ki dhadkan badh jati hai aur prefrontal cortex offline chala jata hai. Is biological storm ko shant hone me lagbhag 6 second lagte hain.',
    howItWorksHinglish: 'Trigger milte hi amygdala adrenaline pump karta hai -> Bood flow dimaag ke logic part se muscle ki taraf chala jata hai -> Muh se bina soche baatein nikal jati hain -> Baad me guilt hota hai.',
    howToRespondHinglish: '6-Second Rule apnayein: Kuch bhi bolne se pehle 6 second ka pause lein, paani piyein aur lambi saans lein.',
    takeawaysHinglish: [
      'Gusse me logic isliye band hota hai kyuki dimaag survival mode me chala jata hai',
      'React karne se pehle 6 second ka pause biological circuit breaker ka kaam karta hai',
      'Physical signals jaise garam chehra ya tezi se dhadakta dil hijack ki pehli warning hain',
      'Apne emotion ko silently naam dein: "Mujhe gussa aa raha hai" kehne se prefrontal cortex active hota hai'
    ],
    pqPromptHinglish: 'Office meeting me kisi ne aapke kaam par public me galat ilzam lagaya. Sabse scientific reaction kya hoga?',
    pqExplanationHinglish: 'Pehle 6 second me aapka prefrontal cortex offline hota hai. Pause lene se hi aap sensible answer de sakte hain.',
    pqOptionsHinglish: [
      { id: 'opt_a', text: 'Turant uth kar samne wale par chilana taaki log kamzor na samjhein.', isCorrect: false, feedback: 'Galat. Yeh amygdala hijack ka victim banna hai.' },
      { id: 'opt_b', text: '6 second ka pause lein, paani piyein, aur shanti se facts ke sath sawal puchein.', isCorrect: true, feedback: 'Sahi! Yeh logic ko wapas lane ka scientific tareeqa hai.' },
      { id: 'opt_c', text: 'Meeting chhod kar bahar nikal jana aur gusse me resignation likhna.', isCorrect: false, feedback: 'Galat. Yeh impulsivity hai.' }
    ],
    hiTitle: 'अमिग्डाला अपहरण (Amygdala Hijack)',
    hiSummary: 'जब मस्तिष्क का भावुक केंद्र तार्किक प्रीफ्रंटल कॉर्टेक्स को बाईपास करके तात्कालिक क्रोध या भय की प्रतिक्रिया शुरू कर देता है।',
    hiTakeaways: ['भावनाएं तर्क से पहले सक्रिय होती हैं', '६ सेकंड का विराम तर्क को पुनः सक्रिय करता है', 'सहानुभूतिपूर्ण तंत्रिका तंत्र तात्कालिक प्रतिक्रिया देता है'],
    guTitle: 'એમિગ્ડાલા હાઇજેક (આવેગિક પ્રતિક્રિયા)', guSummary: 'જ્યારે તીવ્ર ક્રોધ વિચારશક્તિ પર હાવી થઈને અવિચારી નિર્ણય લેવડાવે છે.', guTakeaways: ['આવેગ પર કાબૂ રાખો', '૬ સેકન્ડનો વિરામ લો', 'શાંતિથી વિચાર કરો'],
    mrTitle: 'अमिग्डाला हायजॅक (आवेगाचा स्फोट)', mrSummary: 'तार्किक विचारांआधी मेंदूच्या भावनिक केंद्राकडून तात्काळ आक्रमक प्रतिक्रिया उमटणे.', mrTakeaways: ['आवेगावर नियंत्रण ठेवा', '६ सेकंदांचा विराम घ्या', 'तर्कशुद्ध विचार करा'],
    teTitle: 'అమిగ్డాలా హైజాక్ (ఆవేశపు స్పందన)', teSummary: 'మెదడులోని భావోద్వేగ కేంద్రం విచక్షణా జ్ఞానాన్ని నిలిపివేసి ఆవేశంతో స్పందించే స్థితి.', teTakeaways: ['ఆవేశాన్ని అదుపులో ఉంచండి', 'క్షణికావేశాన్ని ఆపండి', 'శాంతంగా ఆలోచించండి'],
    taTitle: 'அமிக்டாலா கடத்தல் (உணர்ச்சி வெடிப்பு)', taSummary: 'மூளையின் தர்க்கரீதியான சிந்தனையை முடக்கி உடனடி கோபத்தை உருவாக்கும் நரம்பியல் செயல்முறை.', taTakeaways: ['உணர்ச்சியை கட்டுப்படுத்துங்கள்', 'ஆறு நொடிகள் தாமதிக்கவும்', 'அமைதியாக சிந்தியுங்கள்'],
    knTitle: 'ಅಮಿಗ್ಡಾಲಾ ಹೈಜಾಕ್ (ಭಾವೋದ್ರೇಕದ ಸೆಳೆತ)', knSummary: 'ತರ್ಕಬದ್ಧ ಚಿಂತನೆಗೆ ಮುನ್ನವೇ ಮೆದುಳಿನ ಭಾವನಾತ್ಮಕ ಕೇಂದ್ರವು ತಕ್ಷಣದ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಪ್ರಚೋದಿಸುವ ಸ್ಥಿತಿ.', knTakeaways: ['ಭಾವೋದ್ರೇಕವನ್ನು ನಿಯಂತ್ರಿಸಿ', 'ಶಾಂತರಾಗಿ ನಿರ್ಧರಿಸಿ', 'ತರ್ಕಕ್ಕೆ ಆದ್ಯತೆ ನೀಡಿ'],
    mlTitle: 'അമിഗ്ഡല ഹൈജാക്ക് (വൈകാരിക തരംഗം)', mlSummary: 'യുക്തിസഹമായ ചിന്തയെ മറികടന്ന് മസ്തിഷ്കം പെട്ടെന്നുള്ള വൈകാരിക പ്രതികരണം നൽകുന്ന അവസ്ഥ.', mlTakeaways: ['വികാരങ്ങളെ നിയന്ത്രിക്കുക', 'ആറ് സെക്കൻഡ് നിശബ്ദത പാലിക്കുക', 'ശാന്തമായി പ്രതികരിക്കുക'],
    bnTitle: 'অ্যামিগডালা হাইজ্যাক (আবেগীয় বিস্ফোরণ)', bnSummary: 'মস্তিষ্কের যৌক্তিক অংশ কাজ করার আগেই তাত্ক্ষণিক রাগ বা ভয়ের অপ্রতিরোধ্য বহিঃপ্রকাশ।', bnTakeaways: ['আবেগ নিয়ন্ত্রণ করুন', 'ছয় সেকেন্ডের বিরতি নিন', 'শান্তভাবে সিদ্ধান্ত নিন'],
    paTitle: 'ਐਮਿਗਡਾਲਾ ਹਾਈਜੈਕ (ਗੁੱਸੇ ਦਾ ਉਛਾਲ)', paSummary: 'ਜਦੋਂ ਤਰਕ ਤੋਂ ਪਹਿਲਾਂ ਦਿਮਾਗ ਦਾ ਭਾਵਨਾਤਮਕ ਕੇਂਦਰ ਬੇਕਾਬੂ ਪ੍ਰਤੀਕਿਰਿਆ ਸ਼ੁਰੂ ਕਰ ਦਿੰਦਾ ਹੈ।', paTakeaways: ['ਗੁੱਸੇ ਤੇ ਕਾਬੂ ਰੱਖੋ', 'ਕੁਝ ਪਲ ਰੁਕ ਕੇ ਸੋਚੋ', 'ਸ਼ਾਂਤਮਈ ਹੱਲ ਲੱਭੋ'],
    urTitle: 'امیگڈالا ہائی جیک (جذباتی طوفان)', urSummary: 'جب دماغ کا جذباتی مرکز عقل و شعور کو معطل کر کے فوری اور بے قابو ردعمل پیدا کرتا ہے۔', urTakeaways: ['جذبات پر قابو پائیں', 'چھ سیکنڈ کا وقفہ لیں', 'ہوش مندی سے جواب دیں'],
    orTitle: 'ଆମିଗ୍ଡାଲା ହାଇଜ୍ୟାକ୍ (ଆବେଗପୂର୍ଣ୍ଣ ପ୍ରତିକ୍ରିୟା)', orSummary: 'ତର୍କପୂର୍ଣ୍ଣ ଚିନ୍ତା ପୂର୍ବରୁ ମସ୍ତିଷ୍କର ଭାବପ୍ରବଣ କେନ୍ଦ୍ର ଅପ୍ରତ୍ୟାଶିତ କ୍ରୋଧ ସୃଷ୍ଟି କରିବା।', orTakeaways: ['ଆବେଗ ନିୟନ୍ତ୍ରଣ କରନ୍ତୁ', 'ଧୈର୍ଯ୍ୟ ରଖନ୍ତୁ', 'ଶାନ୍ତ ଭାବରେ ପ୍ରତିକ୍ରିୟା ଦିଅନ୍ତୁ'],
    asTitle: 'এমিগডালা হাইজেক (আৱেগিক আক্ৰমণ)', asSummary: 'যুক্তিগত চিন্তাৰ পূৰ্বেই মগজুৰ আৱেগিক কেন্দ্ৰই নিয়ন্ত্ৰণহীন খং বা ভয় সৃষ্টি কৰে।', asTakeaways: ['খং নিয়ন্ত্ৰণ কৰক', 'কিছু সময় শান্ত থাকক', 'বিচাৰ-বিবেচনাৰে উত্তৰ দিয়ক']
  },

  {
    fileName: 'somaticMarkerHypothesis.ts',
    varName: 'somatic_marker_hypothesis',
    id: 'somatic_marker_hypothesis',
    categoryId: 'emotions',
    slug: 'somatic-marker-hypothesis',
    difficulty: 'advanced',
    readTime: 6,
    sortWeight: 6,
    titleEn: 'The Somatic Marker Hypothesis: How Bodily Signals Guide Reasoning',
    subtitleEn: 'Antonio Damasio’s discovery that rational choices depend fundamentally on subconscious gut sensations.',
    shortDescEn: 'Neurobiological theory showing that bodily sensations associated with past outcomes unconsciously filter choices before conscious logic begins.',
    oneLineEn: 'Your gut and heart acting as subconscious data summaries of all your past experiences.',
    summary30sEn: 'Neuroscientist Antonio Damasio found that patients with damage to the ventromedial prefrontal cortex—who could not feel bodily emotional signals—could calculate probabilities endlessly but were completely paralyzed when making simple everyday choices.',
    coreConceptEn: 'Somatic markers are emotional bioreactions (shifts in heart rate, gut contraction, skin conductance) linked to past experiences. When facing multiple complex choices, somatic markers rapidly mark certain options with an internal "danger" or "reward" tag, pruning the decision tree so rational logic is not overloaded.',
    summary60sEn: 'We often think pure logic is best, but pure abstract logic without bodily feelings leads to decision paralysis. When you negotiate a deal or meet someone, your body reacts milliseconds before your conscious mind articulates reasons. Somatic markers are not mystical instincts; they are compressed neural memories stored across the insular cortex and ventromedial prefrontal cortex.',
    takeawaysEn: [
      'Emotions are not the enemy of reason; they are biological prerequisites for decisive action',
      'Patients without emotional gut markers can analyze options but cannot choose between two pens',
      'Somatic signals rapidly eliminate terrible options before working memory is overwhelmed',
      'Effective decision making pairs bodily intuition with rigorous factual verification'
    ],
    whyItHappensEn: 'Working memory can only hold 4–7 bits of data; without rapid bodily value-tagging, evaluating complex outcomes would crash mental bandwidth.',
    evolutionaryEn: 'Fast assessment of habitat danger or social deceit required immediate visceral alerts rather than mathematical probability calculation.',
    howItWorksEn: 'Scenario encountered -> Brain retrieves past emotional associations -> Autonomic signals alter heart rate and gut tension -> Sensation reported to insula -> Consciousness feels a "gut feeling" -> Logic confirms or refutes.',
    visualHeadlineEn: 'Analytical Paralysis vs. Somatic Pruning',
    visualDescEn: 'How bodily signals make complex decision making cognitively manageable.',
    sideALabelEn: 'Pure Detached Logic (Paralysis)',
    sideADetailEn: 'Endlessly calculating 142 probabilities for a minor choice, trapped in infinite analysis.',
    sideBLabelEn: 'Somatic Pruned Choice (Effective)',
    sideBDetailEn: 'Gut feeling instantly cuts 140 weak options, letting focused logic deeply evaluate the top 2.',
    researchSummaryEn: 'Damasio (1994, Descartes’ Error) and Bechara et al. (1997, Science) used the Iowa Gambling Task to prove normal subjects register skin conductance sweat responses to risky decks long before conscious awareness.',
    refAuthor: 'Damasio, A. R. & Bechara, A.',
    refYear: 1996,
    refTitle: 'The Somatic Marker Hypothesis: A Neural Theory of Decision Making',
    refCitation: 'Damasio, A. R. (1996). Philosophical Transactions of the Royal Society of London. Series B: Biological Sciences, 351(1346), 1413–1420.',
    refDoi: 'https://doi.org/10.1098/rstb.1996.0125',
    scenarioTitleEn: 'The Suspicious Warehouse Lease in Bhiwandi',
    scenarioContextEn: 'Vikram was offered an unusually cheap warehouse rental near Mumbai. On paper, the title was pristine. However, during the walkthrough, Vikram experienced persistent nausea and an unexplained heaviness in his chest, despite the landlord’s smooth charm.',
    scenarioBiasEn: 'Vikram’s somatic markers detected subtle micro-inconsistencies (evasive eye contact, freshly painted water damage) before his conscious mind could document them.',
    scenarioOptimalEn: 'Do not dismiss the bodily discomfort as superstition. Use it as an investigative prompt: hire a structural engineer and conduct a municipal audit, which revealed pending demolition.',
    scenarioReflectionEn: 'Have you ever had a strong physiological gut feeling about a deal or person that proved completely accurate weeks later?',
    howToRecognizeEn: 'Visceral bodily sensations (tight throat, stomach knot, sudden calm) emerging before logical pros-and-cons lists.',
    whereEn: 'High-stakes investments, partnership agreements, ethical dilemmas, and medical diagnoses.',
    misconceptionsEn: 'Myth: "Gut feeling is 100% infallible intuition." Fact: Somatic markers are based on past training; if you are in a brand new domain, your gut can be completely wrong.',
    limitationsEn: 'In novel environments where you lack domain expertise (e.g. quantum physics or crypto trading), somatic markers reflect random anxiety rather than wise intuition.',
    howToRespondEn: 'Treat somatic markers as internal smoke alarms: let them flag concerns, but demand documented evidence before making the final decision.',
    defensesEn: [
      { title: 'The Interoceptive Scan', instruction: 'Before signing or agreeing, pause and scan your stomach and chest for tension or constriction.' },
      { title: 'Intuition-Then-Audit Protocol', instruction: 'Never execute purely on gut alone; treat a gut feeling as a warrant to conduct deeper factual due diligence.' }
    ],
    pqPromptEn: 'A senior investor feels a sharp, unexplained stomach tightness during an otherwise flawless financial presentation. What should they do?',
    pqScenarioEn: 'The spreadsheets look mathematically sound, but an internal visceral unease persists throughout the founder’s speech.',
    pqExplanationEn: 'Somatic markers synthesize micro-cues faster than conscious logic. The investor should use the gut signal to investigate unstated assumptions without making rash decisions.',
    pqAntidoteEn: 'Leverage the bodily alert to ask forensic questions rather than dismissing the feeling or accepting the deal blindly.',
    pqOptionsEn: [
      { id: 'opt_a', text: 'Dismiss the feeling as silly irrational anxiety and wire the funds immediately.', isCorrect: false, feedback: 'Incorrect. Emotional numbness ignores valuable subconscious pattern recognition.' },
      { id: 'opt_b', text: 'Treat the visceral sensation as a prompt to conduct deeper forensic audits into hidden liabilities.', isCorrect: true, feedback: 'Correct! Somatic markers should guide deeper rational investigation.' },
      { id: 'opt_c', text: 'Accuse the founder of fraud instantly based solely on the stomach knot.', isCorrect: false, feedback: 'Incorrect. Bodily signals are alerts, not legal proof.' }
    ],
    reflectionPromptEn: 'In your career, have you made better choices by ignoring bodily signals or by using them to guide your research?',
    titleHinglish: 'Somatic Marker Hypothesis: Gut Feeling Aur Dimaag Ka Rishta',
    subtitleHinglish: 'Kyu hamara pet aur dil kisi faisle se pehle hi signal de dete hain ki kuch gadbad hai.',
    shortDescHinglish: 'Antonio Damasio ki scientific research: sharir ki physical sensations decisions lene me dimaag ki madad karti hain.',
    oneLineHinglish: 'Hamari gut feeling hamare dimaag ka compressed past experience hoti hai.',
    summary30sHinglish: 'Neuroscientist Antonio Damasio ne dikhaya ki jinke dimaag ka emotional center damage ho jata hai, wo pure logical hone ke bawajood chote chote decisions me ghanto atak jate hain. Gut feeling options ko filter karne ke liye zaroori hai.',
    coreConceptHinglish: 'Somatic markers purane tajurbon ke physical signals hote hain (pet me ajeeb lagna, dil ki dhadkan tezi hona). Jab hum naye faisle lete hain, to hamara sharir pehle hi warning de deta hai.',
    summary60sHinglish: 'Hume lagta hai ki best decision sirf thandi logic se hota hai. Lekin bina bodily feelings ke dimaag calculation paralysis me fas jata hai. Gut feeling koi jaadu nahi hai, balki past experience ka subconscious data backup hai.',
    howItWorksHinglish: 'Situation aati hai -> Dimaag purane tajurbe match karta hai -> Sharir me physical sensation bhejta hai -> Hume lagta hai "kuch galat hai" -> Hum logic se cross-check karte hain.',
    howToRespondHinglish: 'Gut feeling ko smoke alarm samjhein: jab pet me ajeeb lage, to deal cancel mat karo, balki paperwork aur background check double karo.',
    takeawaysHinglish: [
      'Gut feeling magic nahi, balki past data ka subconscious summary hai',
      'Bina emotion ke insaan super-smart nahi, balki faisla lene me bekaar ho jata hai',
      'Sharir ke physical signals ko ignore mat karo, unhe deeper investigation ka signal mano',
      'Domain me agar experience naya hai to gut feeling galat bhi ho sakti hai'
    ],
    pqPromptHinglish: 'Ek naye business partner ke sath contract sign karte waqt aapke pet me ajeeb si ghabrahat ho rahi hai, jabki paper theek lag rahe hain. Kya karein?',
    pqExplanationHinglish: 'Sharir ka signal alert karta hai ki shayad subconscious mind ne kuch notice kiya hai. Use investigate karne ka mauka samjhein.',
    pqOptionsHinglish: [
      { id: 'opt_a', text: 'Ghabrahat ko ignore karein aur bina dekhe sign kar dein.', isCorrect: false, feedback: 'Galat. Subconscious warning ko ignore mat karein.' },
      { id: 'opt_b', text: 'Is signal ko warning maan kar lawyer aur references se double verification karein.', isCorrect: true, feedback: 'Sahi! Gut feeling ko facts se verify karna hi best decision banata hai.' },
      { id: 'opt_c', text: 'Bina kisi proof ke partner par fraud ka case kar dein.', isCorrect: false, feedback: 'Galat. Gut feeling alert hai, court ka faisla nahi.' }
    ],
    hiTitle: 'शारीरिक संकेत परिकल्पना (Somatic Marker)',
    hiSummary: 'शारीरिक अनुभूतियां और अंतर्ज्ञान कैसे जटिल निर्णयों को सरल और सटीक बनाने में मस्तिष्क का मार्गदर्शन करते हैं।',
    hiTakeaways: ['शारीरिक संवेदनाएं अतीत के अनुभवों का संक्षिप्त रूप हैं', 'भावनाओं के बिना निर्णय लेना असंभव हो जाता है', 'आंतरिक अनुभूतियों को तार्किक जांच से जोड़ें'],
    guTitle: 'સોમેટિક માર્કર પૂર્વધારણા', guSummary: 'શરીરના સંકેતો અને આંતરિક લાગણીઓ નિર્ણય લેવાની ક્ષમતાને માર્ગદર્શન આપે છે.', guTakeaways: ['શરીરના સંકેતો સમજો', 'સત્યની તપાસ કરો', 'સંતુલિત નિર્ણય લો'],
    mrTitle: 'सोमॅटिक मार्कर सिद्धांत', mrSummary: 'शारीरिक संवेदना आणि अंतःप्रेरणा कशा प्रकारे जटिल निर्णयांमध्ये मेंदूला मदत करतात.', mrTakeaways: ['शारीरिक संकेत ओळखा', 'तथ्ये पडताळून पहा', 'योग्य निर्णय घ्या'],
    teTitle: 'సోమాటిక్ మార్కర్ సిద్ధాంతం', teSummary: 'శరీర సంకేతాలు మరియు సహజ అంతర్దృష్టి సరైన నిర్ణయాలు తీసుకోవడంలో ఎలా సహాయపడతాయి.', teTakeaways: ['అంతర్దృష్టిని విశ్లేషించండి', 'ఆధారాలు సరిచూడండి', 'స్పష్టమైన నిర్ణయం తీసుకోండి'],
    taTitle: 'உடல் உணர்வு கோட்பாடு (Somatic Marker)', taSummary: 'உடலின் உள்ளுணர்வு சமிக்ஞைகள் எவ்வாறு பகுத்தறிவு முடிவுகளை வழிநடத்துகின்றன.', taTakeaways: ['உடல் சமிக்ஞைகளை கவனியுங்கள்', 'உண்மைகளை ஆராயுங்கள்', 'சரியான முடிவெடுங்கள்'],
    knTitle: 'ಸೊಮ್ಯಾಟಿಕ್ ಮಾರ್ಕರ್ ಸಿದ್ಧಾಂತ', knSummary: 'ದೇಹದ ಆಂತರಿಕ ಸಂವೇದನೆಗಳು ನಿರ್ಧಾರ ಕೈಗೊಳ್ಳುವಲ್ಲಿ ಮೆದುಳಿಗೆ ಹೇಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತವೆ.', knTakeaways: ['ಆಂತರಿಕ ಸಂವೇದನೆಗಳನ್ನು ಗಮನಿಸಿ', 'ದಾಖಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ', 'ಬುದ್ಧಿವಂತ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಿ'],
    mlTitle: 'സൊമാറ്റിക് മാർക്കർ സിദ്ധാന്തം', mlSummary: 'ശരീരത്തിൻ്റെ ആന്തരിക പ്രതികരണങ്ങൾ ശരിയായ തീരുമാനങ്ങളിലേക്ക് നയിക്കുന്നു.', mlTakeaways: ['ഉള്ളുണർവുകൾ തിരിച്ചറിയുക', 'വസ്തുതകൾ പരിശോധിക്കുക', 'യുക്തിയോടെ തീരുമാനിക്കുക'],
    bnTitle: 'সোমাটিক মার্কার হাইপোথিসিস', bnSummary: 'শারীরিক অনুভূতি এবং অবচেতন সংকেত কীভাবে সঠিক সিদ্ধান্ত নিতে সাহায্য করে।', bnTakeaways: ['শারীরিক অনুভূতি বুঝুন', 'তথ্য যাচাই করুন', 'সঠিক সিদ্ধান্ত নিন'],
    paTitle: 'ਸੋਮੈਟਿਕ ਮਾਰਕਰ ਸਿਧਾਂਤ', paSummary: 'ਸਰੀਰਕ ਸੰਕੇਤ ਅਤੇ ਅੰਦਰੂਨੀ ਆਵਾਜ਼ ਫੈਸਲਾ ਲੈਣ ਵਿੱਚ ਦਿਮਾਗ ਨੂੰ ਕਿਵੇਂ ਰਾਹ ਦਿਖਾਉਂਦੇ ਹਨ।', paTakeaways: ['ਅੰਦਰੂਨੀ ਆਵਾਜ਼ ਸੁਣੋ', 'ਤੱਥਾਂ ਦੀ ਜਾਂਚ ਕਰੋ', 'ਸਹੀ ਫੈਸਲਾ ਲਓ'],
    urTitle: 'سوماتی نشاناتی مفروضہ (Somatic Marker)', urSummary: 'جسمانی کیفیات اور دل کی دھڑکن کس طرح عقلی فیصلوں کی رہنمائی کرتی ہے۔', urTakeaways: ['جسمانی اشاروں کو سمجھیں', 'حقائق کی تصدیق کریں', 'متوازن فیصلہ کریں'],
    orTitle: 'ସୋମାଟିକ୍ ମାର୍କର୍ ଅନୁମାନ', orSummary: 'ଶରୀରର ଆଭ୍ୟନ୍ତରୀଣ ସଙ୍କେତ କିପରି ନିଷ୍ପତ୍ତି ନେବାରେ ସାହାଯ୍ୟ କରେ।', orTakeaways: ['ଅନ୍ତର୍ନିହିତ ସଙ୍କେତ ବୁଝନ୍ତୁ', 'ତଥ୍ୟ ପ୍ରମାଣ ଦେଖନ୍ତୁ', 'ଠିକ୍ ନିଷ୍ପତ୍ତି ନିଅନ୍ତୁ'],
    asTitle: 'সোমেটিক মাৰ্কাৰ অনুমান', asSummary: 'শাৰীৰিক সংবেদনাই জটিল সিদ্ধান্ত গ্ৰহণত কেনেকৈ মগজুক বাট দেখুৱায়।', asTakeaways: ['শাৰীৰিক সংকেত বুজি লওক', 'তথ্য পৰীক্ষা কৰক', 'সচেতন সিদ্ধান্ত লওক']
  },

  {
    fileName: 'hedonicTreadmill.ts',
    varName: 'hedonic_treadmill',
    id: 'hedonic_treadmill',
    categoryId: 'emotions',
    slug: 'hedonic-treadmill',
    difficulty: 'beginner',
    readTime: 5,
    sortWeight: 7,
    titleEn: 'The Hedonic Treadmill: The Rapid Adaptation to Life Upgrades',
    subtitleEn: 'Why luxury, promotions, and wealth spikes quickly become the new baseline of normal.',
    shortDescEn: 'The observed psychological tendency of humans to quickly return to a relatively stable level of happiness despite major positive or negative life events.',
    oneLineEn: 'Running endlessly on the treadmill of desire, always ending up where you started.',
    summary30sEn: 'First identified by Brickman and Campbell in 1971, the hedonic treadmill describes how humans rapidly habituate to material windfalls, salary hikes, and luxuries. Within months, what once felt extraordinary becomes the invisible default, leaving baseline happiness unchanged.',
    coreConceptEn: 'Neural sensory adaptation applies directly to emotional rewards: neurons fire vigorously in response to novel positive stimuli, but reduce their firing rates as the stimulus persists. As expectations rise in tandem with accomplishments, happiness resets to the individual’s genetic and cognitive set point.',
    summary60sEn: 'In a famous 1978 study comparing lottery winners and paraplegic accident survivors, Brickman found that after one year, both groups returned remarkably close to their pre-event happiness baselines. While life circumstances account for roughly 10% of subjective well-being, the treadmill tricks us into believing that the next milestone will permanently fix our dissatisfaction.',
    takeawaysEn: [
      'Material upgrades produce temporary dopamine spikes followed by permanent sensory adaptation',
      'The "arrival fallacy" creates the false belief that hitting a future goal guarantees lasting joy',
      'Experiences, deep social bonds, and autonomy resist hedonic adaptation far longer than possessions',
      'Intentional gratitude and voluntary discomfort reset hedonic tolerance levels'
    ],
    whyItHappensEn: 'Evolutionary survival required constant striving; animals that stayed permanently satisfied after finding one fruit tree lacked motivation to seek future sustenance.',
    evolutionaryEn: 'A perpetually satisfied human would not prepare for winter or defend against competitors.',
    howItWorksEn: 'Major goal achieved -> Massive dopamine high -> Sensory habituation occurs -> Expectations recalibrate upwards -> New state feels ordinary -> Urge for next achievement begins.',
    visualHeadlineEn: 'The Hedonic Adaptation Reset Cycle',
    visualDescEn: 'How luxury upgrades become the invisible baseline over 90 days.',
    sideALabelEn: 'Perceived Future State',
    sideADetailEn: '"Once I buy this luxury apartment and car, I will never feel stressed or unhappy again."',
    sideBLabelEn: 'Actual Neurological Reality',
    sideBDetailEn: 'Day 1: Ecstatic joy; Day 30: Pleasant satisfaction; Day 90: It is just where you sleep, stress returns.',
    researchSummaryEn: 'Brickman, Coates & Janoff-Bulman (1978) in JPSP tracked lottery winners and control groups, finding that lottery winners took no more pleasure in mundane everyday events than ordinary citizens.',
    refAuthor: 'Brickman, P. & Campbell, D. T.',
    refYear: 1971,
    refTitle: 'Hedonic Relativism and Planning the Good Society',
    refCitation: 'Brickman, P., & Campbell, D. T. (1971). Adaptation-level theory: A symposium, 287–305.',
    refDoi: 'https://doi.org/10.1037/h0037340',
    scenarioTitleEn: 'The Bengaluru Tech Promotion Reset',
    scenarioContextEn: 'Neha worked 70 hours a week for two years in Bengaluru to reach Senior Engineering Director, assuming a ₹60 LPA salary would erase all anxiety. Within three months of buying a luxury German sedan, the excitement evaporated and she was consumed by envy for peers making ₹1 Crore.',
    scenarioBiasEn: 'Neha fell victim to the hedonic treadmill: her material baseline adapted instantly, resetting her dopamine threshold without changing her internal relationship to work.',
    scenarioOptimalEn: 'Anchor satisfaction in intrinsic craft and meaningful connections, using intermittent digital sabbaths and voluntary frugality to preserve emotional appreciation.',
    scenarioReflectionEn: 'Think of something you desperately wanted three years ago that you now own. How often do you actively feel intense joy about it today?',
    howToRecognizeEn: 'The persistent thought: "I will finally be happy once X happens," followed by hollow indifference weeks after achieving X.',
    whereEn: 'Luxury consumer goods, salary increments, tech device upgrades, and social status competition.',
    misconceptionsEn: 'Myth: "The hedonic treadmill means you should never pursue goals." Fact: Goals provide purpose and direction; the trap is assuming they will permanently solve your internal state.',
    limitationsEn: 'Chronic severe stressors (chronic pain, severe poverty, toxic abuse) do not adapt fully and permanently lower baseline well-being.',
    howToRespondEn: 'Practice Voluntary Hedonic Resetting: take periodic cold showers, fast, camping trips, or gratitude journaling to recalibrate the brain’s dopamine sensitivity.',
    defensesEn: [
      { title: 'The 30-Day Delay Rule', instruction: 'Wait 30 days before buying any non-essential luxury item to allow the initial hedonic craving spike to cool.' },
      { title: 'Negative Visualization (Stoic Practice)', instruction: 'Spend 2 minutes imagining life without your current health, home, or loved ones to re-sensitize appreciation.' }
    ],
    pqPromptEn: 'A professional receives a 40% salary hike and buys their dream sports car. According to hedonic adaptation research, what will their emotional state be 9 months later?',
    pqScenarioEn: 'They initially feel ecstatic and show the car to everyone in their social circle.',
    pqExplanationEn: 'Hedonic adaptation ensures that neurological habituation returns subjective well-being close to the baseline level within months.',
    pqAntidoteEn: 'Anticipate adaptation and invest in growth and relationships rather than endless material upgrades.',
    pqOptionsEn: [
      { id: 'opt_a', text: 'They will maintain a permanently elevated 40% higher level of daily happiness.', isCorrect: false, feedback: 'Incorrect. Sensory adaptation prevents permanent joy spikes from material goods.' },
      { id: 'opt_b', text: 'Their daily happiness will return close to baseline as the car becomes the new normal.', isCorrect: true, feedback: 'Correct! The hedonic treadmill resets the baseline of satisfaction.' },
      { id: 'opt_c', text: 'They will plunge into clinical depression solely due to having the car.', isCorrect: false, feedback: 'Incorrect. Baseline returns to normal, not pathological depression.' }
    ],
    reflectionPromptEn: 'What daily habit or relationship in your life provides enduring satisfaction that never seems to fade with time?',
    titleHinglish: 'The Hedonic Treadmill: Har Khushi Ka Normal Ban Jana',
    subtitleHinglish: 'Kyu nayi gaadi, salary hike aur promotions ka maza kuch hi mahino me gayab ho jata hai.',
    shortDescHinglish: 'Dimaag ka psychological habituation mechanism jo har nayi luxury ko normal default bana deta hai.',
    oneLineHinglish: 'Khushi ki treadmill par daudte rehna par hamesha wahi khade rehna.',
    summary30sHinglish: 'Brickman aur Campbell ne prove kiya ki insaan kitni bhi badi lottery jeet le ya luxury khareed le, 6 mahine me dimaag use aam baat maan leta hai aur khushi wapas purane level par aa jati hai.',
    coreConceptHinglish: 'Hamare neurons nayi cheezon par dopamine chhodte hain, lekin jab wahi cheez roz rehti hai to dimaag adapt kar leta hai. Expectations badh jati hain aur hum wapas nayi cheez ki talaash me lag jate hain.',
    summary60sHinglish: 'Aapne jo phone ya bike 3 saal pehle mar-mar ke khareedi thi, aaj wo bas ek aam cheez lagti hai. Ise kehte hain Hedonic Treadmill. Agar hum is mechanism ko nahi samjhenge to hum hamesha consumerism ke jaal me phase rahenge.',
    howItWorksHinglish: 'Naya goal achieve hua -> Dopamine spike mila -> Kuch dino me adaptation ho gayi -> Nayi luxury normal lagne lagi -> Agle goal ke peeche bhaagna shuru.',
    howToRespondHinglish: 'Negative visualization karein: Sochein agar yeh suvidhayein na hoti to kaisa hota. Aur voluntary fasting ya simplicity se dopamine baseline reset karein.',
    takeawaysHinglish: [
      'Nayi cheezon ki khushi temporary hoti hai, dimaag use jaldi hi normal bana deta hai',
      '"Bas yeh mil jaye to sab theek ho jayega" dimaag ka sabse bada dhokha hai (Arrival Fallacy)',
      'Cheezon ke bajaye anubhav aur rishte lamba sukoon dete hain',
      'Kabhi kabhi simplicity aur gratitude se baseline reset karna zaroori hai'
    ],
    pqPromptHinglish: 'Ek dost ko badi company me 50% hike mila. 6 mahine baad uski mental state research ke mutabiq kaisi hogi?',
    pqExplanationHinglish: 'Hedonic adaptation ke chalte nayi salary jaldi hi standard kharche aur baseline me badal jati hai.',
    pqOptionsHinglish: [
      { id: 'opt_a', text: 'Wo hamesha ke liye 50% zyada khush rahega aur kabhi tension nahi lega.', isCorrect: false, feedback: 'Galat. Dimaag jaldi adapt kar leta hai.' },
      { id: 'opt_b', text: 'Uski khushi wapas purane level par aa jayegi aur naye kharche normal lagne lagenge.', isCorrect: true, feedback: 'Sahi! Hedonic treadmill baseline ko reset kar deti hai.' },
      { id: 'opt_c', text: 'Wo turant salary wapas karne ki koshish karega.', isCorrect: false, feedback: 'Galat. Yeh unrealistic hai.' }
    ],
    hiTitle: 'सुखवादी ट्रेडमिल (Hedonic Treadmill)',
    hiSummary: 'जीवन में बड़ी उपलब्धियों और भौतिक सुख-सुविधाओं के बाद भी मानव मस्तिष्क का अपनी सामान्य स्थिति में वापस लौट आना।',
    hiTakeaways: ['भौतिक सुखों का प्रभाव अल्पकालिक होता है', 'मस्तिष्क नई परिस्थितियों को शीघ्र सामान्य मान लेता है', 'संतुष्टि आंतरिक दृष्टिकोण से आती है'],
    guTitle: 'હેડોનિક ટ્રેડમિલ (સુખનું અનુકૂલન)', guSummary: 'જીવનમાં ગમે તેટલી પ્રગતિ થાય તો પણ સુખનું સ્તર થોડા સમયમાં સામાન્ય થઈ જાય છે.', guTakeaways: ['ભૌતિક સુખ ક્ષણિક છે', 'મન નવી સ્થિતિ સ્વીકારી લે છે', 'આંતરિક શાંતિ કેળવો'],
    mrTitle: 'सुखवादी ट्रेडमिल (Hedonic Treadmill)', mrSummary: 'भौतिक प्रगती आणि सुखसोयींनंतरही मानवी आनंदाची पातळी पुन्हा पूर्ववत होण्याची मानसिक प्रवृत्ती.', mrTakeaways: ['भौतिक सुखाचे आकर्षण तात्पुरते असते', 'मेंदू नव्या सुखांना सरावतो', 'समाधान आंतरिक असते'],
    teTitle: 'హెడోనిక్ ట్రెడ్‌మిల్ (సుఖానికి అలవాటుపడటం)', teSummary: 'ఎంత పెద్ద విజయం సాధించినా కొంత కాలానికి ఆనందం సాధారణ స్థాయికి చేరే సహజ మానసిక లక్షణం.', teTakeaways: ['భౌతిక ఆనందం తాత్కాలికం', 'మనస్సు కొత్త స్థితిని స్వీకరిస్తుంది', 'శాశ్వత తృప్తి అంతర్గతం'],
    taTitle: 'இன்ப நடைவண்டி கோட்பாடு (Hedonic Treadmill)', taSummary: 'எவ்வளவு பெரிய மகிழ்ச்சியான நிகழ்வு நடந்தாலும் மனித மனம் மீண்டும் இயல்பு நிலைக்குத் திரும்பும் உளவியல்.', taTakeaways: ['பொருளாதார மகிழ்ச்சி தற்காலிகமானது', 'மனம் புதிய நிலைக்கு பழகிவிடும்', 'உள் அமைதியே நிலையானது'],
    knTitle: 'ಹೆಡೋನಿಕ್ ಟ್ರೆಡ್‌ಮಿಲ್ (ಸುಖದ ಹೊಂದಾಣಿಕೆ)', knSummary: 'ಎಷ್ಟೇ ದೊಡ್ಡ ಯಶಸ್ಸು ಸಿಕ್ಕರೂ ಸಂತೋಷದ ಮಟ್ಟವು ಶೀಘ್ರದಲ್ಲೇ ಸಾಮಾನ್ಯ ಸ್ಥಿತಿಗೆ ಮರಳುವ ವಿದ್ಯಮಾನ.', knTakeaways: ['ಭೌತಿಕ ಸಂತೋಷ ಕ್ಷಣಿಕ', 'ಮನಸ್ಸು ಸುಖಕ್ಕೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ', 'ಆಂತರಿಕ ತೃಪ್ತಿ ಮುಖ್ಯ'],
    mlTitle: 'ഹെഡോണിക് ട്രെഡ്മിൽ (സുഖാനുഭവത്തിന്റെ വേഗത)', mlSummary: 'വലിയ നേട്ടങ്ങൾ കൈവരിച്ചാലും സന്തോഷം വേഗത്തിൽ സാധാരണ നിലയിലേക്ക് മടങ്ങുന്ന സ്വഭാവം.', mlTakeaways: ['ഭൗതിക സുഖം താൽക്കാലികമാണ്', 'മനസ്സ് പുതിയ സാഹചര്യങ്ങളുമായി പൊരുത്തപ്പെടുന്നു', 'ശാശ്വത സമാധാനം ഉള്ളിലാണ്'],
    bnTitle: 'হেডোনিক ট্রেডমিল (সুখের অভিযোজন)', bnSummary: 'বড় প্রাপ্তি বা বিলাসিতার পরও মানুষের সুখের মাত্রা দ্রুত পূর্বের স্বাভাবিক অবস্থায় ফিরে আসার নিয়ম।', bnTakeaways: ['বস্তুগত সুখ ক্ষণস্থায়ী', 'মন নতুন অবস্থাকে স্বাভাবিক ধরে নেয়', 'অভ্যন্তরীণ তৃপ্তি স্থায়ী'],
    paTitle: 'ਹੈਡੋਨਿਕ ਟ੍ਰੈਡਮਿਲ (ਸੁੱਖ ਦਾ ਆਦੀ ਹੋਣਾ)', paSummary: 'ਕੋਈ ਵੱਡੀ ਸਫਲਤਾ ਜਾਂ ਖੁਸ਼ੀ ਮਿਲਣ ਦੇ ਬਾਵਜੂਦ ਇਨਸਾਨੀ ਮਨ ਦਾ ਮੁੜ ਆਮ ਪੱਧਰ ਤੇ ਆ ਜਾਣ ਦੀ ਆਦਤ।', paTakeaways: ['ਭੌਤਿਕ ਸੁੱਖ ਆਰਜ਼ੀ ਹੈ', 'ਦਿਮਾਗ ਨਵੀਂ ਹਾਲਤ ਦਾ ਆਦੀ ਹੋ ਜਾਂਦਾ ਹੈ', 'ਅਸਲ ਸੰਤੁਸ਼ਟੀ ਅੰਦਰੂਨੀ ਹੈ'],
    urTitle: 'ہیڈونک ٹریڈمل (خوشی کا معمول بن جانا)', urSummary: 'کسی بڑی کامیابی یا آسائش کے بعد بھی انسانی خوشی کی سطح کا جلد ہی معمول پر لوٹ آنا۔', urTakeaways: ['مادی خوشی عارضی ہوتی ہے', 'دماغ نئی آسائشوں کا عادی ہو جاتا ہے', 'حقیقی سکون اندرونی ہوتا ہے'],
    orTitle: 'ହେଡୋନିକ୍ ଟ୍ରେଡ୍‌ମିଲ୍ (ସୁଖର ଅନୁକୂଳନ)', orSummary: 'ବଡ଼ ସଫଳତା ପରେ ମଧ୍ୟ ମଣିଷର ଆନନ୍ଦ ପୁନର୍ବାର ସ୍ୱାଭାବିକ ସ୍ତରକୁ ଫେରିଆସିବାର ନିୟମ।', orTakeaways: ['ଭୌତିକ ସୁଖ କ୍ଷଣସ୍ଥାୟୀ', 'ମନ ନୂଆ ପରିସ୍ଥିତିକୁ ଗ୍ରହଣ କରେ', 'ଆତ୍ମସନ୍ତୋଷ ସବୁଠୁ ବଡ଼'],
    asTitle: 'হেডনিক ট্রেডমিল (সুখৰ অভিযোজন)', asSummary: 'ডাঙৰ সফলতা লাভৰ পিছতো মানুহৰ আনন্দৰ মাত্ৰা পুনৰ স্বাভাৱিক অৱস্থালৈ ঘূৰি অহাৰ মানসিকতা।', asTakeaways: ['বস্তুগত আনন্দ ক্ষণস্থায়ী', 'মগজুৱে নতুন অৱস্থাক স্বাভাৱিক বুলি গ্ৰহণ কৰে', 'আভ্যন্তৰীণ সন্তুষ্টিয়েই স্থায়ী']
  }
];

export function runBatch1() {
  console.log(`Writing Batch 1: ${BATCH1_TOPICS.length} topics...`);
  for (const t of BATCH1_TOPICS) {
    const filePath = path.join(topicsDir, t.fileName);
    const code = generateTopicTsCode(t);
    fs.writeFileSync(filePath, code, 'utf-8');
    console.log(`✓ Wrote ${t.fileName} (${t.id})`);
  }
}

if (require.main === module) {
  runBatch1();
}
