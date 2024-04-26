import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

import { IoClose } from "react-icons/io5";

import "./toast.styles.scss";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ToastComponenet = () => {
	const { message, kind, isOpen, time } = useSelector(
		(state: RootState) => state.toast
	);

	console.log('Root state info: ', message, kind, isOpen, time);

	return (
		<div className={`toastContainer ${isOpen ? "show" : "hide"}`}>
			<div className={`toastContainer__content ${kind}`}>
				<div className="toastContainer__content__closeButton">
					<IoClose
						onClick={() => {
							console.log("clicked");
						}}
					/>
				</div>
				<div className="toastContainer__content__message">{message}</div>
			</div>
		</div>
	);
};

export default ToastComponenet;
