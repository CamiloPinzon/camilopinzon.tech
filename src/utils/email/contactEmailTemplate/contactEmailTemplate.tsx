import { IContactForm } from "../../interfaces"

const ContactEmailTemplate = ({ name, email, message }: IContactForm) => {
    return (
			<div>
				<h1>New contact from web Page</h1>
				<div>
					<div>Name: {name}</div>
					<div>Email: {email}</div>
					<div>Message: {message}</div>
				</div>
			</div>
		);
}

export default ContactEmailTemplate
