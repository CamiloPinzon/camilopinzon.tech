import { contactStructuredData } from "../../utils/SEO/seoStructuredData";

import ContactForm from "../../components/contactForm/contactForm";

import "./contact.scss";

const Contact = () => {
	return (
		<div className="contact">
			{contactStructuredData()}
			<h1 className="text">Let's work together, Contact Me!</h1>
			<ContactForm />
		</div>
	);
};

export default Contact;
