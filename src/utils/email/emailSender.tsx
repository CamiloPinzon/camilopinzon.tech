import { MailDataRequired } from "@sendgrid/mail";

import { IContactForm } from "../interfaces.tsx";
import ContactEmailTemplate from "./contactEmailTemplate/contactEmailTemplate.tsx";

const EmailSender = async (emailData: IContactForm) => {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const sendGrid = require("@sendgrid/mail");

	const configureSendGrid = () => {
		return sendGrid.setApiKey(`${process.env.SENDGRID_API_KEY}`);
	};
	const msg: MailDataRequired = {
		from: "pinzonac@gmail.com",
		to: "pinzonac@gmail.com",
		subject: "New contact from web Page",
		html: `${ContactEmailTemplate(emailData)}`,
		headers: { mode: "no-cors" },
	};

	try {
		await configureSendGrid();
		await sendGrid.send(msg);
		console.log("Correo electrónico enviado correctamente.");
	} catch (error) {
		console.error("Error al enviar correo electrónico:", error);
	}
};

export default EmailSender;
