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

export function getMessagesForLocale(locale: SupportedLocale): Record<string, any> {
  return allMessages[locale] || allMessages[defaultLocale];
}
