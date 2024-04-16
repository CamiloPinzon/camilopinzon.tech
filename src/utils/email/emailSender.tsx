import { IContactForm } from "../interfaces.tsx";
//import ContactEmailTemplate from "./contactEmailTemplate/contactEmailTemplate.tsx";

const EmailSender = async (emailData: IContactForm) => {
	const { name, email, message } = emailData;
	console.log( name, email, message);
	
};

export default EmailSender;
