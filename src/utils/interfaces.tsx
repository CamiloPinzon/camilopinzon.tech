export interface IExperienceData {
	company: string;
	position: string;
	projects: string[];
	responsibilities: string[];
	dates: string;
}

export interface IArticle {
	author: string;
	content: string;
	date: string;
	title: string;
}

export interface IContactForm {
	name: string;
	email: string;
	message: string;
}

export interface IInput {
	type: string;
	name: string;
	id: string;
	placeholder: string;
	value: string;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	required?: boolean;
}

export interface IMainButton {
	text: string;
	handler?: () => void;
	type?: "submit" | "reset" | "button";
}

export interface IToast {
	message: string;
	kind: "warning" | "error" | "success";
	time: number;
	isOpen: boolean;
}

export interface IEmailStatus {
	status: "success" | "error" | "warning";
	message: string;
}

export interface IExperienceData {
	company: string;
	position: string;
	projects: string[];
	responsibilities: string[];
	dates: string;
}

export interface IToken {
	token: string | null;
}
