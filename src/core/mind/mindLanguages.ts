import { SUPPORTED_LANGUAGES, LanguageMeta, SupportedLocale } from '../../i18n/config';
import { MindLanguageCode, MindLanguageMeta } from './types';

/**
 * Standard IETF BCP-47 hreflang mapping for Psychology modules.
 * Note: 'hi-Latn' is the official BCP-47 subtag for Hindi written in Latin (Roman) script.
 */
export const MIND_HREFLANG_MAP: Record<MindLanguageCode, string> = {
  en: 'en',
  hi: 'hi',
  hinglish: 'hi-Latn',
  gu: 'gu',
  mr: 'mr',
  te: 'te',
  ta: 'ta',
  kn: 'kn',
  ml: 'ml',
  bn: 'bn',
  pa: 'pa',
  ur: 'ur',
  or: 'or',
  as: 'as',
};

/**
 * Dedicated Hinglish Reading Mode Metadata.
 * Uses Roman script, conversational Indian Hindi, commonly understood English terms,
 * simple wording, and natural sentence structure.
 */
export const HINGLISH_LANGUAGE_META: MindLanguageMeta = {
  code: 'hinglish',
  nativeName: 'Hinglish',
  englishName: 'Hinglish (Conversational)',
  script: 'Latin',
  dir: 'ltr',
  isDedicatedReadingMode: true,
  hreflang: 'hi-Latn',
};

/**
 * Returns the complete list of supported psychology languages:
 * Dynamically derives from the application's actual 13-language configuration (SUPPORTED_LANGUAGES)
 * PLUS Hinglish as the dedicated Roman-script conversational reading mode.
 */
export function getMindSupportedLanguages(): MindLanguageMeta[] {
  const baseLanguages: MindLanguageMeta[] = SUPPORTED_LANGUAGES.map((lang: LanguageMeta) => ({
    code: lang.code as MindLanguageCode,
    nativeName: lang.nativeName,
    englishName: lang.englishName,
    script: lang.script,
    dir: lang.dir,
    isDedicatedReadingMode: false,
    hreflang: MIND_HREFLANG_MAP[lang.code as MindLanguageCode] || lang.code,
  }));

  // Append Hinglish directly after English and Hindi for optimal accessibility
  const englishIndex = baseLanguages.findIndex((l) => l.code === 'en');
  if (englishIndex !== -1) {
    baseLanguages.splice(englishIndex + 1, 0, HINGLISH_LANGUAGE_META);
    return baseLanguages;
  }

  return [...baseLanguages, HINGLISH_LANGUAGE_META];
}

/**
 * Get language metadata by code with graceful fallback to English
 */
export function getMindLanguageMeta(code: MindLanguageCode | string): MindLanguageMeta {
  if (code === 'hinglish') {
    return HINGLISH_LANGUAGE_META;
  }

  const all = getMindSupportedLanguages();
  const found = all.find((l) => l.code === code);
  return (
    found || {
      code: 'en',
      nativeName: 'English',
      englishName: 'English',
      script: 'Latin',
      dir: 'ltr',
      isDedicatedReadingMode: false,
      hreflang: 'en',
    }
  );
}

/**
 * Type guard for MindLanguageCode
 */
export function isValidMindLanguage(code: unknown): code is MindLanguageCode {
  if (typeof code !== 'string') return false;
  if (code === 'hinglish') return true;
  return SUPPORTED_LANGUAGES.some((lang) => lang.code === code);
}
