import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store/store";
import { setToast } from "../../redux/toast.slice";

import { IoClose } from "react-icons/io5";

import "./toast.styles.scss";
const ToastComponenet = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { message, kind, isOpen, time } = useSelector(
		(state: RootState) => state.toast
	);

	const closeToast = () => {
		dispatch(setToast({ message: "", kind: "error", time: 0, isOpen: false }));
	};

	useEffect(() => {
		isOpen && setTimeout(closeToast, time);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen])

	return (
		<div className={`toastContainer ${isOpen ? "show" : "hide"}`}>
			<div className={`toastContainer__content ${kind}`}>
				<div className="toastContainer__content__closeButton">
					<IoClose onClick={closeToast} />
				</div>
				<div className="toastContainer__content__message">{message}</div>
			</div>
		</div>
	);
};

export default ToastComponenet;
