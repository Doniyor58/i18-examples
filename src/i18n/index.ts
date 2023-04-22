import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { default as en } from './en';
import { default as ru } from './ru';
import { pluralsFormatter } from './formatters';

export const resources = {
  en,
  ru,
} as const;

i18n
  .use(initReactI18next)
  .init({
    lng: 'ru',
    resources,
    returnObjects: true,
    defaultNS: 'translation',
    react: { defaultTransParent: 'span' },
  });

if (i18n.services.formatter) {
  i18n.services.formatter.add('plurals', pluralsFormatter);
}

export default i18n;
