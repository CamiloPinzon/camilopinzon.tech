import { useState } from "react";

import { Outlet, NavLink } from "react-router-dom";
import { PiHamburger } from "react-icons/pi";
import { CgClose } from "react-icons/cg";

import Footer from "../Footer/footer.component";
import GoogleTerms from "../googleTerms/googleTerms";

import "./MainMenu.styles.scss";

const MainMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
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
							About
						</NavLink>
					</li>
					<li>
						<NavLink to={"/experience"} onClick={toggleMenu} role="menuitem">
							Experience
						</NavLink>
					</li>
					<li>
						<NavLink to={"/pills"} onClick={toggleMenu} role="menuitem">
							Pills
						</NavLink>
					</li>
					<li>
						<NavLink to={"/contact"} onClick={toggleMenu} role="menuitem">
							Contact
						</NavLink>
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
