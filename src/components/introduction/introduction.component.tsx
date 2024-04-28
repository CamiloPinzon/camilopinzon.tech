import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import MainButton from "../mainButton/mainButton";
import GetCurrentLanguage from "../../utils/getCurrentLanguage";

import ProfilePicture from "../../assets/profile-pic.webp";
import "./introduction.styles.scss";

const Introduction = () => {
	const { t } = useTranslation();
	const currentLanguage = GetCurrentLanguage();
	const Navigate = useNavigate();
	const handleButtonClick = () => {
		Navigate("/contact");
	};
	return (
		<section className="introduction">
			<div className="introduction__item">
				<img src={ProfilePicture} alt="camilo pinzon" />
			</div>
			<div className="introduction__item">
				<div className="introduction__item__content">
					<h2>{t("about.personal.title", { lng: currentLanguage })}</h2>
					<p>{t("about.personal.bio", { lng: currentLanguage })}</p>
					<MainButton
						text={t("about.personal.contact", { lng: currentLanguage })}
						handler={handleButtonClick}
					/>
				</div>
			</div>
		</section>
	);
};

export default Introduction;
