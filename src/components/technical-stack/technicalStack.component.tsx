import { useTranslation } from "react-i18next";
import GetCurrentLanguage from "../../utils/getCurrentLanguage";

import "./technicalStack.styles.scss";

const TechnicalStack = () => {
	const { t } = useTranslation();
	const currentLanguage = GetCurrentLanguage();
	return (
		<section className="technical-container">
			<h2>{t("about.tech-stack.main-title", { lng: currentLanguage })}</h2>
			<div className="technical-container__icons">
				<div className="technical-container__icons__icon">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
						alt="javascript"
					/>
					<p>JavaScript</p>
				</div>
				<div className="technical-container__icons__icon">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
						alt="react"
					/>
					<p>React</p>
				</div>
				<div className="technical-container__icons__icon">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
						alt="typescript"
					/>
					<p>TypeScript</p>
				</div>
				<div className="technical-container__icons__icon">
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="wordpress" />
					<p>Wordpress</p>
				</div>
				<div className="technical-container__icons__icon">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
						alt="git"
					/>
					<p>Git</p>
				</div>
				<div className="technical-container__icons__icon">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
						alt="github"
					/>
					<p>GitHub</p>
				</div>
				<div className="technical-container__icons__icon">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
						alt="sass"
					/>
					<p>Sass</p>
				</div>
				<div className="technical-container__icons__icon">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
						alt="firebase"
					/>
					<p>Firebase</p>
				</div>
				<div className="technical-container__icons__icon">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
						alt="html5"
					/>
					<p>HTML</p>
				</div>
				<div className="technical-container__icons__icon">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
						alt="css3"
					/>
					<p>CSS</p>
				</div>
			</div>
		</section>
	);
};

export default TechnicalStack;
