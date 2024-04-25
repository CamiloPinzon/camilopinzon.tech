import { useState } from "react";

import { IToast } from "../../utils/interfaces";

import { IoClose } from "react-icons/io5";

import "./toast.styles.scss";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ToastComponenet = ({ message, kind, time = 0 }: IToast) => {
	const [show, setShow] = useState(true);
	const showToggler = () => {
		setShow(!show);
    };

	return (
		<div className={`toastContainer ${show ? "show" : "hide"}`}>
			<div className={`toastContainer__content ${kind}`}>
				<div className="toastContainer__content__closeButton">
					<IoClose onClick={showToggler} />
				</div>
				<div className="toastContainer__content__message">{message}</div>
			</div>
		</div>
	);
};

export default ToastComponenet;
