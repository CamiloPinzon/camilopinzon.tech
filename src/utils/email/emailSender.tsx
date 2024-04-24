import emailjs from "@emailjs/browser";

import { IContactForm } from "../interfaces.tsx";

const EmailSender = async (emailData: IContactForm) => {
	const templateParams = {
		name: emailData.name,
		email: emailData.email,
		message: emailData.message,
	};
	emailjs.send("service_zctf1go", "template_ytxrmit", templateParams).then(
		(response) => {
			console.log("SUCCESS!", response.status, response.text);
		},
		(error) => {
			console.log("FAILED...", error);
		}
	);
};

export default EmailSender;
