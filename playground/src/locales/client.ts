import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

import { settings } from '@/locales/index';

i18next.use(initReactI18next).init(settings, err => {
  if (err) console.log('I18Next error :', err);
});

export default i18next;
