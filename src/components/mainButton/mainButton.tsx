import { IMainButton } from "../../utils/interfaces";

import "./mainButton.scss";

const MainButton = ({ text, handler, type="button"}: IMainButton) => {
	return (
		<button className="main-button" onClick={handler} type={type} >
			{text}
		</button>
	);
};

export default MainButton;
