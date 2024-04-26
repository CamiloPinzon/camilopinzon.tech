import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store/store";
import { setToast } from "../../redux/toast.slice";

import { IoClose } from "react-icons/io5";

import "./toast.styles.scss";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ToastComponenet = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { message, kind, time, isOpen } = useSelector(
        (state: RootState) => state.toast
        
	);
    console.log(message, kind, time, isOpen)
	const showToggler = () => {
		dispatch(
			setToast({ message: "", kind: "success", time: 0, isOpen: !isOpen })
		);
	};

	useEffect(() => {
		time > 0 && setTimeout(showToggler, time);
		console.log("ShowToggler");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	return (
		<div className={`toastContainer ${isOpen ? "show" : "hide"}`}>
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
