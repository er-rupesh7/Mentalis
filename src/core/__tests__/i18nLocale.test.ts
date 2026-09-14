import { describe, it, expect, beforeEach } from 'vitest';
import {
  defaultLocale,
  locales,
  SUPPORTED_LANGUAGES,
  getLanguageMeta,
  isRTL,
  SupportedLocale,
} from '../../i18n/config';
import { allMessages, getMessagesForLocale } from '../../i18n/messages';
import { useQuizStore } from '../store/useQuizStore';

describe('i18n Multilingual Architecture (13 Languages)', () => {
  beforeEach(() => {
    useQuizStore.setState({
      locale: defaultLocale,
      hasCompletedLanguageOnboarding: false,
    });
  });

  it('sets default locale to Hindi (hi) with Devanagari script', () => {
    expect(defaultLocale).toBe('hi');
    const hiMeta = getLanguageMeta('hi');
    expect(hiMeta.code).toBe('hi');
    expect(hiMeta.nativeName).toBe('हिन्दी');
    expect(hiMeta.script).toBe('Devanagari');
    expect(hiMeta.dir).toBe('ltr');
  });

  it('supports exactly 13 required languages with valid metadata', () => {
    const required: SupportedLocale[] = [
      'hi',
      'en',
      'gu',
      'mr',
      'te',
      'ta',
      'kn',
      'ml',
      'bn',
      'pa',
      'ur',
      'or',
      'as',
    ];

    expect(locales).toEqual(expect.arrayContaining(required));
    expect(locales.length).toBe(13);
    expect(SUPPORTED_LANGUAGES.length).toBe(13);

    for (const code of required) {
      const meta = getLanguageMeta(code);
      expect(meta.code).toBe(code);
      expect(meta.nativeName).toBeTruthy();
      expect(meta.englishName).toBeTruthy();
      expect(meta.script).toBeTruthy();
      expect(['ltr', 'rtl']).toContain(meta.dir);
    }
  });

  it('correctly identifies Urdu as RTL', () => {
    expect(isRTL('ur')).toBe(true);
    expect(isRTL('hi')).toBe(false);
    expect(isRTL('en')).toBe(false);
    expect(isRTL('gu')).toBe(false);

    const urduMeta = getLanguageMeta('ur');
    expect(urduMeta.nativeName).toBe('اردو');
    expect(urduMeta.dir).toBe('rtl');
  });

  it('has bundled, offline messages for all 13 locales with all 19 required namespaces', () => {
    const namespaces = [
      'common',
      'nav',
      'dashboard',
      'practice',
      'anzan',
      'techniques',
      'onboarding',
      'settings',
      'learningPlan',
      'customDrill',
      'tableChart',
      'bootcamp',
      'examQuant',
      'heatmap',
      'memoryMap',
      'assessment',
      'skillProfile',
      'tutorial',
      'aiCoach',
    ];

    for (const locale of locales) {
      const messages = getMessagesForLocale(locale);
      expect(messages).toBeDefined();

      for (const ns of namespaces) {
        expect(
          messages[ns],
          `Locale ${locale} is missing namespace: ${ns}`
        ).toBeDefined();
        expect(
          typeof messages[ns],
          `Locale ${locale} namespace ${ns} must be an object`
        ).toBe('object');
      }

      // Check common essential keys
      expect(messages.common.appName).toBe('Mentalis');
      expect(messages.common.calculateMentally).toBeTruthy();
      expect(messages.common.submit).toBeTruthy();
      expect(messages.nav.dashboard).toBeTruthy();
      expect(messages.dashboard.title).toBeTruthy();
      expect(messages.customDrill.title).toBeTruthy();
      expect(messages.tableChart.title).toBeTruthy();
      expect(messages.bootcamp.title).toBeTruthy();
      expect(messages.examQuant.title).toBeTruthy();
      expect(messages.tutorial.modalTitle).toBeTruthy();
      expect(messages.aiCoach.title).toBeTruthy();
      expect(messages.learningPlan.title).toBeTruthy();
    }
  });

  it('guarantees deep-merge fallback inheritance and memoization', () => {
    // 1. Memoization check (O(1) reference equality)
    const hi1 = getMessagesForLocale('hi');
    const hi2 = getMessagesForLocale('hi');
    expect(hi1).toBe(hi2);

    const gu1 = getMessagesForLocale('gu');
    const gu2 = getMessagesForLocale('gu');
    expect(gu1).toBe(gu2);

    // 2. Fallback check: all 19 namespaces are populated even in regional languages
    for (const locale of locales) {
      const msgs = getMessagesForLocale(locale);
      expect(msgs.customDrill.operations).toBeTruthy();
      expect(msgs.bootcamp.startDrill).toBeTruthy();
      expect(msgs.examQuant.startExamDrill).toBeTruthy();
      expect(msgs.heatmap.legendMastered).toBeTruthy();
      expect(msgs.memoryMap.filterMastered).toBeTruthy();
      expect(msgs.assessment.pauseAssessment).toBeTruthy();
      expect(msgs.skillProfile.recalibrate).toBeTruthy();
      expect(msgs.tutorial.innerEcho).toBeTruthy();
      expect(msgs.aiCoach.ready).toBeTruthy();
    }
  });

  it('updates and persists locale preference in useQuizStore without losing session state', () => {
    const store = useQuizStore.getState();
    expect(store.locale).toBe('hi');

    // Simulate active session state
    useQuizStore.setState({
      inputBuffer: '440',
      streak: 7,
      sessionAnswered: 5,
    });

    // Switch language to Telugu
    store.setLocale('te');
    let state = useQuizStore.getState();
    expect(state.locale).toBe('te');
    // Ensure in-flight session data is 100% preserved
    expect(state.inputBuffer).toBe('440');
    expect(state.streak).toBe(7);
    expect(state.sessionAnswered).toBe(5);

    // Switch language to Urdu (RTL)
    store.setLocale('ur');
    state = useQuizStore.getState();
    expect(state.locale).toBe('ur');
    expect(isRTL(state.locale)).toBe(true);
    expect(state.inputBuffer).toBe('440');
  });

  it('handles onboarding completion flag in store', () => {
    const store = useQuizStore.getState();
    expect(store.hasCompletedLanguageOnboarding).toBe(false);

    store.setHasCompletedLanguageOnboarding(true);
    expect(useQuizStore.getState().hasCompletedLanguageOnboarding).toBe(true);
  });

  it('provides native Devanagari Hindi and localized technique curriculum translations', async () => {
    const {
      getLocalizedModule,
      getLocalizedTechnique,
      getLocalizedStrategy,
    } = await import('../../i18n/techniqueTranslations');

    // Test Module localization in Hindi
    const modFundHi = getLocalizedModule('fundamental_operations', 'hi');
    expect(modFundHi.title).toBe('1. मूलभूत संक्रियाएं');
    expect(modFundHi.subtitle).toContain('बाएं-से-दाएं');

    // Test Module localization in English
    const modFundEn = getLocalizedModule('fundamental_operations', 'en');
    expect(modFundEn.title).toBe('1. Fundamental Operations');

    // Test Technique localization in Hindi (Devanagari)
    const techHi = getLocalizedTechnique('add_l2r_place_value', 'hi');
    expect(techHi.title).toBe('बाएं-से-दाएं स्थानीय मान जोड़');
    expect(techHi.mathSecretDesc).toContain('दहाई को पहले जोड़ें');
    expect(techHi.mindOdometerTitle).toBe('माइंड-ओडोमीटर संचायक तकनीक');

    // Test Vedic shortcut localization
    const vedicHi = getLocalizedTechnique('sq_ending_5', 'hi');
    expect(vedicHi.title).toBe('5 पर समाप्त संख्याओं का वर्ग: एकाधिकेन पूर्वेण');
    expect(vedicHi.subtitle).toContain('N(N + 1) | 25');

    // Test Pedagogical Strategy localization (Tricks)
    const stratHi = getLocalizedStrategy('elevens_sandwich', 'hi');
    expect(stratHi.name).toBe('11 का सैंडविच जोड़ (×11)');
    expect(stratHi.mentalScript).toContain('दोनों अंकों के बीच में');

    const stratDoublingHi = getLocalizedStrategy('twos_doubling', 'hi');
    expect(stratDoublingHi.name).toBe('दोगुना करना (×2)');
    expect(stratDoublingHi.mentalScript).toContain('संख्या को स्वयं में जोड़ना');

    const stratEkadhikenaHi = getLocalizedStrategy('sq_ending_5_ekadhikena', 'hi');
    expect(stratEkadhikenaHi.name).toBe('5 पर समाप्त वर्ग (एकाधिकेन)');
    expect(stratEkadhikenaHi.mentalScript).toContain('दहाई को (दहाई + 1) से गुणा करें');
  });

  it('provides structured content translations with resilient multi-tier fallback', async () => {
    const {
      getLocalizedBootcampMode,
      getLocalizedExamSubSkill,
      getLocalizedAnzanPreset,
      getLocalizedTutorialLesson,
      getLocalizedSkillCategory,
    } = await import('../../i18n/contentTranslations');

    // 1. Bootcamp modes in Hindi, Gujarati, English
    const modeHi = getLocalizedBootcampMode('recognition', 'hi');
    expect(modeHi.name).toContain('मोड A');
    expect(modeHi.tag).toBeTruthy();
    expect(modeHi.description).toBeTruthy();

    const modeGu = getLocalizedBootcampMode('recognition', 'gu');
    expect(modeGu.name).toContain('મોડ A');

    const modeEn = getLocalizedBootcampMode('recognition', 'en');
    expect(modeEn.name).toContain('Mode A');

    // 2. Exam subskills in Hindi and Tamil
    const examHi = getLocalizedExamSubSkill('quant_simplification', 'hi');
    expect(examHi.title).toBe('सरलीकरण (BODMAS)');
    expect(examHi.examWeight).toBeTruthy();

    const examTa = getLocalizedExamSubSkill('quant_simplification', 'ta');
    expect(examTa.title).toBe('சுருக்குதல் (BODMAS)');

    // 3. Anzan Presets in Hindi and Kannada
    const anzanHi = getLocalizedAnzanPreset('Novice Warmup', 'hi');
    expect(anzanHi.name).toBe('आरंभिक वॉर्म-अप');
    expect(anzanHi.description).toBeTruthy();

    const anzanKn = getLocalizedAnzanPreset('Novice Warmup', 'kn');
    expect(anzanKn.name).toBeTruthy();

    // 4. Tutorial lessons in Hindi and Marathi
    const tutHi = getLocalizedTutorialLesson(
      'left_to_right',
      'hi',
      'Left to Right',
      'Subtitle'
    );
    expect(tutHi.title).toBe('बाएं-से-दाएं संचायक विधि (Left-to-Right)');

    const tutMr = getLocalizedTutorialLesson(
      'left_to_right',
      'mr',
      'Left to Right',
      'Subtitle'
    );
    expect(tutMr.title).toBe('डावीकडून उजवीकडे संचायक पद्धत');

    // 5. Skill categories
    const catHi = getLocalizedSkillCategory('addition_subtraction', 'hi');
    expect(catHi.title).toBe('जोड़ और घटाव का आधार');
    expect(catHi.description).toBeTruthy();
  });
});

