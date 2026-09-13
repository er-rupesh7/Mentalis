export type SupportedLocale =
  | 'hi'
  | 'en'
  | 'gu'
  | 'mr'
  | 'te'
  | 'ta'
  | 'kn'
  | 'ml'
  | 'bn'
  | 'pa'
  | 'ur'
  | 'or'
  | 'as';

export interface LanguageMeta {
  code: SupportedLocale;
  nativeName: string;
  englishName: string;
  script: string;
  dir: 'ltr' | 'rtl';
}

export const defaultLocale: SupportedLocale = 'hi';

export const locales: SupportedLocale[] = [
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

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  { code: 'hi', nativeName: 'हिन्दी', englishName: 'Hindi', script: 'Devanagari', dir: 'ltr' },
  { code: 'en', nativeName: 'English', englishName: 'English', script: 'Latin', dir: 'ltr' },
  { code: 'gu', nativeName: 'ગુજરાતી', englishName: 'Gujarati', script: 'Gujarati', dir: 'ltr' },
  { code: 'mr', nativeName: 'मराठी', englishName: 'Marathi', script: 'Devanagari', dir: 'ltr' },
  { code: 'te', nativeName: 'తెలుగు', englishName: 'Telugu', script: 'Telugu', dir: 'ltr' },
  { code: 'ta', nativeName: 'தமிழ்', englishName: 'Tamil', script: 'Tamil', dir: 'ltr' },
  { code: 'kn', nativeName: 'ಕನ್ನಡ', englishName: 'Kannada', script: 'Kannada', dir: 'ltr' },
  { code: 'ml', nativeName: 'മലയാളം', englishName: 'Malayalam', script: 'Malayalam', dir: 'ltr' },
  { code: 'bn', nativeName: 'বাংলা', englishName: 'Bengali', script: 'Bengali', dir: 'ltr' },
  { code: 'pa', nativeName: 'ਪੰਜਾਬੀ', englishName: 'Punjabi', script: 'Gurmukhi', dir: 'ltr' },
  { code: 'ur', nativeName: 'اردو', englishName: 'Urdu', script: 'Perso-Arabic', dir: 'rtl' },
  { code: 'or', nativeName: 'ଓଡ଼ିଆ', englishName: 'Odia', script: 'Odia', dir: 'ltr' },
  { code: 'as', nativeName: 'অসমীয়া', englishName: 'Assamese', script: 'Bengali-Assamese', dir: 'ltr' },
];

export function getLanguageMeta(code: SupportedLocale): LanguageMeta {
  const found = SUPPORTED_LANGUAGES.find((lang) => lang.code === code);
  return found || SUPPORTED_LANGUAGES[0];
}

export function isRTL(locale: SupportedLocale): boolean {
  return locale === 'ur';
}
