import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { setLang } from "../../redux/lang.slice";
import { useTranslation } from "react-i18next";
import GetCurrentLanguage from "../../utils/getCurrentLanguage";

import "./langSelector.styles.scss";

const LangSelector = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const currentLang = GetCurrentLanguage();

	const handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(setLang(e.target.value));
	};

	return (
		<select className="languageSelect" value={currentLang} onChange={handleChangeLang}>
			<option value="en">{t("languages.en", { lng: currentLang })}</option>
			<option value="es">{t("languages.es", { lng: currentLang })}</option>
		</select>
	);
};

export default LangSelector;
