import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, locales, SupportedLocale } from './config';

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale: SupportedLocale = locales.includes(locale as SupportedLocale)
    ? (locale as SupportedLocale)
    : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
  };
});
