import emailjs from "@emailjs/browser";

import { IContactForm } from "../interfaces.tsx";

const EmailSender = async (emailData: IContactForm) => {
	const templateParams = {
		name: emailData.name,
		email: emailData.email,
		message: emailData.message,
	};
	emailjs
		.send(
			process.env.EMAILJS_SERVICE_ID!,
			process.env.EMAILJS_TEMPLATE_ID!,
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
