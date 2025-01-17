import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    defaultNS: "home",
    ns: "home",
    lng: localStorage.getItem("lng") ||"uz",
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    }
  });

export default i18n;