import { useTranslation } from "react-i18next";
import GetCurrentLanguage from "../../utils/getCurrentLanguage";

import GATracker from "../../utils/gaTracker";
import { contactStructuredData } from "../../utils/SEO/seoStructuredData";
import ContactForm from "../../components/contactForm/contactForm";

import "./contact.scss";

const Contact = () => {
	GATracker();
	const { t } = useTranslation();
	const currentLanguage = GetCurrentLanguage();

	return (
		<div className="contact">
			{contactStructuredData()}
			<h1 className="text">{t("contact.title", { lng: currentLanguage })}</h1>
			<ContactForm />
		</div>
	);
};

export default Contact;
