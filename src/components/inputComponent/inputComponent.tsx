import { IInput } from "../../utils/interfaces";

import "./inputComponent.scss";

const InputComponent = ({
	type,
	name,
	id,
	placeholder,
	value,
	onChange,
	required,
}: IInput) => {
	if (type === "textarea") {
		return (
			<textarea
				name={name}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				rows={5}
				cols={50}
				className="input-component__input"
				required={required}
			/>
		);
	} else {
		return (
			<input
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className="input-component__input"
				required={required}
			/>
		);
	}
};

export default InputComponent;
