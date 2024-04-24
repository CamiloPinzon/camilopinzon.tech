import emailjs from "@emailjs/browser";

import { IContactForm } from "../interfaces.tsx";

const EmailSender = async (emailData: IContactForm) => {
	const templateParams = {
		name: emailData.name,
		email: emailData.email,
		message: emailData.message,
	};
	emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
	emailjs
		.send(
			import.meta.env.VITE_EMAILJS_SERVICE_ID,
			import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
			templateParams
		)
		.then(
			(response) => {
				console.log("SUCCESS!", response.status, response.text);
			},
			(error) => {
				console.log("FAILED...", error);
			}
		);
};

export default EmailSender;
