import RNLanguages from 'react-native-languages';
import I18n from 'i18n-js';
import en from './en';
import es from './es';

// Default locale
I18n.locale = RNLanguages.language;

// Enable fallback if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

// Available languages
I18n.translations = {
  en,
  es,
};

const getLocale = (start, end) => {
  if (typeof start !== 'undefined' && typeof end !== 'undefined') {
    return RNLanguages.language.substring(start, end);
  }
  return RNLanguages.language;
};

const initTranslations = () => I18n.translations;

/**
 * The method we'll use instead of a regular string
 * @param name
 * @param params
 */
const strings = (name, params = {}) => I18n.t(name, params);

export { I18n, getLocale, initTranslations, strings };
