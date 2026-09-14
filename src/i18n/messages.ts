import hi from '../messages/hi.json';
import en from '../messages/en.json';
import gu from '../messages/gu.json';
import mr from '../messages/mr.json';
import te from '../messages/te.json';
import ta from '../messages/ta.json';
import kn from '../messages/kn.json';
import ml from '../messages/ml.json';
import bn from '../messages/bn.json';
import pa from '../messages/pa.json';
import ur from '../messages/ur.json';
import or from '../messages/or.json';
import as from '../messages/as.json';
import { SupportedLocale, defaultLocale } from './config';

export const allMessages: Record<SupportedLocale, Record<string, any>> = {
  hi,
  en,
  gu,
  mr,
  te,
  ta,
  kn,
  ml,
  bn,
  pa,
  ur,
  or,
  as,
};

/**
 * Deep merges two message objects recursively.
 * Keys in source take precedence over target.
 */
function deepMerge(target: Record<string, any>, source: Record<string, any>): Record<string, any> {
  const output: Record<string, any> = { ...target };
  for (const key of Object.keys(source)) {
    const sVal = source[key];
    const tVal = output[key];
    if (sVal !== undefined && sVal !== null) {
      if (typeof sVal === 'object' && !Array.isArray(sVal)) {
        output[key] = deepMerge(
          tVal && typeof tVal === 'object' && !Array.isArray(tVal) ? tVal : {},
          sVal
        );
      } else {
        output[key] = sVal;
      }
    }
  }
  return output;
}

const resolvedMessagesCache = new Map<SupportedLocale, Record<string, any>>();

/**
 * High-performance, memoized message resolver with hierarchical fallback:
 * English base -> Hindi (default Indic) overlay -> User Locale.
 * Guarantees zero missing keys, zero crashes, and zero raw translation identifiers.
 */
export function getMessagesForLocale(locale: SupportedLocale): Record<string, any> {
  if (resolvedMessagesCache.has(locale)) {
    return resolvedMessagesCache.get(locale)!;
  }

  const baseEn = allMessages.en || {};
  const baseHi = allMessages.hi || {};

  let resolved: Record<string, any>;
  if (locale === 'en') {
    resolved = deepMerge(baseHi, baseEn);
  } else if (locale === 'hi') {
    resolved = deepMerge(baseEn, baseHi);
  } else {
    const indicBase = deepMerge(baseEn, baseHi);
    const targetRaw = allMessages[locale] || {};
    resolved = deepMerge(indicBase, targetRaw);
  }

  resolvedMessagesCache.set(locale, resolved);
  return resolved;
}

