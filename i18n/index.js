import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import { getOptions } from './i18n/settings';

i18next
  .use(initReactI18next)
  .use(Backend)
  .init(getOptions());

export default i18next;
