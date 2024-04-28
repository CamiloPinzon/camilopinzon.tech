import { useTranslation } from "react-i18next";
import GetCurrentLanguage from "../../utils/getCurrentLanguage";

import {
    gitSVG, 
    leetSVG
 } from "../../assets/svgProvider";
import "./footer.styles.scss";

const Footer = () => {
	const { t } = useTranslation();
	const currentLanguage = GetCurrentLanguage();
	return (
		<footer className="footer">
			<div className="footer__social-container">
				<div className="footer__social-container__item">
					<a
						href="https://www.linkedin.com/in/camilo-pinzon/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
							alt="linkedin"
						/>
					</a>
				</div>
				<div className="footer__social-container__item">
					<a
						href="https://github.com/camilopinzon"
						target="_blank"
						rel="noreferrer"
					>
						{gitSVG}
					</a>
				</div>
				<div className="footer__social-container__item">
					<a
						href="https://leetcode.com/pinzonac/"
						target="_blank"
						rel="noreferrer"
					>
						{leetSVG}
					</a>
				</div>
			</div>
			<p className="footer__text">
				© Copyright &copy; {new Date().getFullYear()} {t("footer.legal", { lng: currentLanguage })}
			</p>
		</footer>
	);
};

export default Footer;
