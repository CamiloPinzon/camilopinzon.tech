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
			import.meta.env.VITESERVICE_ID!,
			import.meta.env.VITETEMPLATE_ID!,
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
