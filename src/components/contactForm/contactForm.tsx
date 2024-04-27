import { useEffect, useState } from "react";
import { ReCAPTCHA } from "react-google-recaptcha";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { setToast } from "../../redux/toast.slice";

import InputComponent from "../inputComponent/inputComponent";
import MainButton from "../mainButton/mainButton";
import EmailSender from "../../utils/email/emailSender";

import { IContactForm, IToast } from "../../utils/interfaces";

import "./contactForm.scss";

const defaultToastData: IToast = {
	message: "",
	kind: "error",
	time: 0,
	isOpen: false,
};

const defaultContactData: IContactForm = {
	name: "",
	email: "",
	message: "",
};

const ContactForm = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [contactForm, setContactForm] = useState<IContactForm>(defaultContactData);

	const [toastData, setToastData] = useState(defaultToastData);

	const [captchaToken, setCaptchaToken] = useState<string>("");

	const [sendingData, setSendingData] = useState(false);

	const handleReCaptchaChange = (token: string | null) => {
		setCaptchaToken(token ?? "");
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setContactForm({ ...contactForm, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setSendingData(true);

		if (captchaToken) {
			setToastData({
				message: "reCaptcha validation failed!",
				kind: "warning",
				time: 5000,
				isOpen: true,
			});
			setSendingData(false);
			return;
		} else {
			try {
				const emailResult = await EmailSender(contactForm);
				emailResult.status === 'success' && setContactForm(defaultContactData);
				emailResult
					? setToastData({
						message: emailResult.message,
						kind: emailResult.status,
						time: 5000,
						isOpen: true,
					})
					: setToastData({
						message: "Error from email sender",
						kind: "error",
						time: 5000,
						isOpen: true,
					});
				setSendingData(false);
			} catch (error) {
				setToastData({
					message: error as string,
					kind: "error",
					time: 5000,
					isOpen: true,
				});
				setSendingData(false);
			}
		}
	};

	useEffect(() => {
		toastData.message !== "" && dispatch(setToast(toastData));
		return;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [toastData]);

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<ReCAPTCHA
				sitekey="6LcLd7wpAAAAAMkHgeO9LLlKUYjhfXGBH39qmc7A"
				onChange={handleReCaptchaChange}
			/>
			<InputComponent
				type="text"
				name="name"
				id="name"
				placeholder="Name"
				value={contactForm.name}
				onChange={handleChange}
				required={true}
			/>
			<InputComponent
				type="email"
				name="email"
				id="email"
				placeholder="Email"
				value={contactForm.email}
				onChange={handleChange}
				required={true}
			/>
			<InputComponent
				type="textarea"
				name="message"
				id="message"
				placeholder="Message"
				value={contactForm.message}
				onChange={handleChange}
				required={true}
			/>
			<MainButton type="submit" text="Submit" disabled={sendingData} />
		</form>
	);
};

export default ContactForm;
