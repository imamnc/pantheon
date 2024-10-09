import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import trasEN from './translations/en/translations.json'
import trasID from './translations/id/translations.json'

const resources = {
    en: {
        translation: trasEN
    },
    id: {
        translation: trasID
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'id', // Default language
    interpolation: {
        escapeValue: false, // React already does escaping
    },
});

export default i18n;
