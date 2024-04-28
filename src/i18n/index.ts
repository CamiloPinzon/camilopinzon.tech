import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./locales/es/translation.json";
import en from "./locales/en/translation.json";

const resources = {
	es: {
		translation: es,
	},
	en: {
		translation: en,
	},
};

i18next.use(initReactI18next).init({
	interpolation: { escapeValue: false },
	lng: 'es',
	resources,
});

export default i18next;