import { IMainButton } from "../../utils/interfaces";

import "./mainButton.scss";

const MainButton = ({ text, handler, type="button", disabled= false}: IMainButton) => {
	return (
		<button className="main-button" onClick={handler} type={type} disabled={disabled}>
			{text}
		</button>
	);
};

export default MainButton;
