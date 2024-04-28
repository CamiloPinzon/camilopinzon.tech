import { useTranslation } from "react-i18next";
import GetCurrentLanguage from "../../utils/getCurrentLanguage";

import "./Greeting.styles.scss";

const Greeting = () => {
	const { t } = useTranslation();
	const currentLanguage = GetCurrentLanguage();

	return (
		<div className="greeting">
			<h1>
				{t("about.greeting.greet", { lng: currentLanguage })}
				<br />
				{t("about.greeting.introduce", { lng: currentLanguage })}
			</h1>
		</div>
	);
};

export default Greeting;
