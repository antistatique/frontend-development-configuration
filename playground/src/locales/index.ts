import fr from '@/locales/fr.json';

export const settings = {
  lng: 'fr',
  fallbackLng: 'fr',
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react
    format: (value: string, format: string | undefined) => {
      if (format === 'uppercase') return value.toUpperCase();
      if (format === 'lowercase') return value.toLowerCase();
      return value;
    },
  },
  resources: {
    fr: { translation: fr },
  },
};
