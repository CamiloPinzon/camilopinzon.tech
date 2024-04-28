import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

export const GetCurrentLanguage = () => {
	const { value } = useSelector((state: RootState) => state.lang);
	return value;
};

export default GetCurrentLanguage;
