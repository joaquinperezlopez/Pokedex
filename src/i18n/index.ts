import { Leaves } from '@utils/types';
import { I18n, TranslateOptions } from 'i18n-js';
import en from './en.json';
import es from './es.json';

const translations = {
  en,
  es,
};

export const i18n = new I18n(translations);

// 3 means how deep the object is, we currently allow 3 levels of nesting in our translations
export type ValidI18nKey = Leaves<typeof en, 3>;

// Create a wrapper function around the existing translate function
// This provides autocompletion for translations
const translate = (key: ValidI18nKey, options?: TranslateOptions): string => {
  // Modify the key argument here, if necessary
  const modifiedKey = key;

  // Call the original translate function with the modified key
  const translation = i18n.t(modifiedKey, options);

  // Return the translation as a string
  return String(translation);
};

export default translate;
