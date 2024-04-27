import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./locales/en/translation.json";
import translationEs from "./locales/es/translation.json";

const resources = {
	en: {
		translation: translationEn,
	},
	es: {
		translation: translationEs,
	},
};

i18next.use(initReactI18next).init({
	resources,
	lng: "en",
	debug: true,
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
	ns: "translation",
	defaultNS: "translation",
});

export default i18next;
