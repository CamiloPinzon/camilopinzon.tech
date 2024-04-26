import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store.ts";
import { setToast } from "../../redux/toast.slice";
import emailjs from "@emailjs/browser";

import { IContactForm } from "../interfaces.tsx";

const EmailSender = async (emailData: IContactForm) => {
	const dispatch = useDispatch<AppDispatch>();
	const templateParams = {
		name: emailData.name,
		email: emailData.email,
		message: emailData.message,
	};

	const dispatchError = () => {
		dispatch(
			setToast({
				message: "Failed to send email!",
				kind: "error",
				time: 3000,
				isOpen: true,
			})
		);
	}
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
				dispatchError();
			}
		);
};

export default EmailSender;
