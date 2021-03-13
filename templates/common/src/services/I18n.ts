import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en/translation.json';

type PathImpl<T, K extends keyof T> = K extends string
  ? T[K] extends Record<string, any>
    ? T[K] extends ArrayLike<any>
      ? K | `${K}.${PathImpl<T[K], Exclude<keyof T[K], keyof Array<any>>>}`
      : K | `${K}.${PathImpl<T[K], keyof T[K]>}`
    : K
  : never;

type Path<T> = PathImpl<T, keyof T> | keyof T;
type DefaultDictionary = typeof en;

const parseMissingKeyHandler = (key: string) => {
  const scopes = key.split('.');
  const lastScope = scopes[scopes.length - 1];

  return lastScope;
};

i18n.use(initReactI18next).init({
  debug: __DEV__,
  resources: {
    en: { translation: en },
  },

  /**
   * To get current phone locale use `expo-localize` or `react-native-localize`
   */
  lng: 'en',
  fallbackLng: 'en',
  parseMissingKeyHandler,
  interpolation: {
    escapeValue: false, // react already safes from xss
    prefix: '%{',
    suffix: '}',
  },
});

export function t<T>(
  key: Path<DefaultDictionary> | T,
  params?: ToDo,
  options?: ToDo,
) {
  // @ts-expect-error
  return i18n.t(key, params, options);
}

export const currentLocale = () => i18n.languages[0];
