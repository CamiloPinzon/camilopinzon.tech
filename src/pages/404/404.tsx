import { useTranslation } from "react-i18next";
import GetCurrentLanguage from "../../utils/getCurrentLanguage";

import "./404.scss";

const NotFound = () => {
	const { t } = useTranslation();
	const currentLanguage = GetCurrentLanguage();
	return (
		<div className="not-found">
			<h1>404</h1>
			<p>{t("404.message", { lng: currentLanguage })}</p>
		</div>
	);
};

export default NotFound;
