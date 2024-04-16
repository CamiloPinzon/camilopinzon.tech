import { useState } from "react";
import { ReCAPTCHA } from "react-google-recaptcha";

import InputComponent from "../inputComponent/inputComponent";
import MainButton from "../mainButton/mainButton";

import { IContactForm } from "../../utils/interfaces";

import "./contactForm.scss";

const ContactForm = () => {
	const [contactForm, setContactForm] = useState<IContactForm>({
		name: "",
		email: "",
		message: "",
	});

	const [captchaToken, setCaptchaToken] = useState<string>("");

	const handleReCaptchaChange = (token: string | null) => {
		setCaptchaToken(token ?? "");
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setContactForm({ ...contactForm, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (captchaToken) {
			console.error("reCaptcha validation failed!");
			return;
		} else {
			console.log("Send Data!");
		}
	};

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
			<MainButton type="submit" text="Submit" />
			<div className="captchaLegal">
				This site is protected by reCAPTCHA and the Google
				<a href="https://policies.google.com/privacy">Privacy Policy</a> and
				<a href="https://policies.google.com/terms">Terms of Service</a> apply.
			</div>
		</form>
	);
};

export default ContactForm;