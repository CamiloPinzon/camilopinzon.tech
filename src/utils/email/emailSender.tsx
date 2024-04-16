import { IContactForm } from "../../utils/interfaces";

import ContactEmailTemplate from "../../utils/email/contactEmailTemplate/contactEmailTemplate";

export const EmailSender = async (contactData: IContactForm) => {
	try {
		const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
			method: "POST",
			headers: {
				Autorization: `Bearer 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`,
			},
			body: JSON.stringify({
				personalizations: [
					{
						to: [
							{
								email: "pinzonac@gmail.com",
							},
						],
						subject: "New page Contact",
					},
				],
				from: {
					email: { email: "pinzonac@gmail.com" },
					content: [
						{
							type: "text/plain",
							value: ContactEmailTemplate(contactData),
						},
					],
				},
			}),
		});

		const responseData = await response.json();
		console.log(`Email sent: ${responseData}`);
		return responseData;
	} catch (error) {
		console.error("Error sending email:", error);
		throw error;
	}
};
