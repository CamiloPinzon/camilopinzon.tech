import emailjs from "@emailjs/browser";

import { IContactForm, IEmailStatus } from "../interfaces.tsx";

let status: IEmailStatus;

const EmailSender = async (emailData: IContactForm): Promise<IEmailStatus> => {
	const templateParams = {
		name: emailData.name,
		email: emailData.email,
		message: emailData.message,
	};

	await emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
	await emailjs
		.send(
			import.meta.env.VITE_EMAILJS_SERVICE_ID,
			import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
			templateParams
		)
		.then(
			() => {
				status = {
					status: "success",
					message:
						"Your data has been sent properly, in short I will be in contact",
				};
			},
			() => {
				status = {
					status: "error",
					message:
						"Has been an error sending your data, please check your conection and try again",
				};
			}
		)
		.catch(() => {
			status = {
				status: "error",
				message:
					"Has been an error sending your data, please check your conection and try again",
			};
		});

	return status;
};

export default EmailSender;
