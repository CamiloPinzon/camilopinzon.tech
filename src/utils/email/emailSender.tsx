import emailjs from "@emailjs/browser";

import { IContactForm, IEmailStatus } from "../interfaces.tsx";

let status: IEmailStatus;

const EmailSender = async (emailData: IContactForm): Promise<IEmailStatus> => {
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
				status = { status: "success", message: response.text };
			},
			(error) => {
				status = { status: "error", message: error.text };
			}
		);

	return status;
};

export default EmailSender;
