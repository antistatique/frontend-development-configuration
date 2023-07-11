import { initReactI18next } from 'react-i18next/initReactI18next';
import { createInstance } from 'i18next';

import { settings } from '@/locales';

const initI18next = async () => {
  const i18nInstance = createInstance();
  await i18nInstance.use(initReactI18next).init(settings);
  return i18nInstance;
};

export const useTranslation = async (lng: string) => {
  const i18nextInstance = await initI18next();
  return {
    t: i18nextInstance.getFixedT(lng),
    i18n: i18nextInstance,
  };
};
