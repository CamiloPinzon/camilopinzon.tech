import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PiHamburger } from "react-icons/pi";
import { CgClose } from "react-icons/cg";

import ToastComponenet from "../toast/toast.component";
import Footer from "../Footer/footer.component";
import GoogleTerms from "../googleTerms/googleTerms";
import LangSelector from "../langSelector/langSelector.component";
import GetCurrentLanguage from "../../utils/getCurrentLanguage";

import "./MainMenu.styles.scss";

const MainMenu = () => {
	const { t } = useTranslation();
	const currentLanguage = GetCurrentLanguage();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<ToastComponenet />
			<nav className={`main-menu ${isMenuOpen ? "open" : ""}`} role="menu">
				<div
					className={`menu-icon ${isMenuOpen ? "" : "centered"}`}
					onClick={toggleMenu}
				>
					{isMenuOpen ? <CgClose /> : <PiHamburger />}
				</div>
				<div className="siteNmae">
					<NavLink to={"/"} onClick={toggleMenu} role="menuitem">
						Camilo Pinzón
					</NavLink>
				</div>
				<ul className={`${isMenuOpen ? "open" : ""}`}>
					<li>
						<NavLink to={"/"} onClick={toggleMenu} role="menuitem">
							{t("nav.about", { lng: currentLanguage })}
						</NavLink>
					</li>
					<li>
						<NavLink to={"/experience"} onClick={toggleMenu} role="menuitem">
							{t("nav.experience", { lng: currentLanguage })}
						</NavLink>
					</li>
					<li>
						<NavLink to={"/pills"} onClick={toggleMenu} role="menuitem">
							{t("nav.pills", { lng: currentLanguage })}
						</NavLink>
					</li>
					<li>
						<NavLink to={"/contact"} onClick={toggleMenu} role="menuitem">
							{t("nav.contact", { lng: currentLanguage })}
						</NavLink>
					</li>
					<li>
						<a
							href={`/public/downloads/CV-${currentLanguage}-2024.pdf`}
							target="_blank"
							download
						>
							{t("nav.download", { lng: currentLanguage })}
						</a>
					</li>
					<li>
						<LangSelector />
					</li>
				</ul>
			</nav>
			<div className="outlet">
				<Outlet />
			</div>
			<GoogleTerms />
			<Footer />
		</>
	);
};

export default MainMenu;
