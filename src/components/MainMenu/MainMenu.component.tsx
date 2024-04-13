import { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import { PiHamburger } from "react-icons/pi";
import { CgClose } from "react-icons/cg";

import "./MainMenu.styles.scss";

const MainMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<nav className={`main-menu ${isMenuOpen ? "open" : ""}`}>
				<div className={`menu-icon ${isMenuOpen ? "" : "centered"}`} onClick={toggleMenu}>
					{isMenuOpen ? <CgClose /> : <PiHamburger />}
				</div>
				<ul className={`${isMenuOpen ? "open" : ""}`}>
					<li>
						<Link to={"/"} onClick={toggleMenu}>
							About
						</Link>
					</li>
					<li>
						<Link to={"/experience"} onClick={toggleMenu}>
							Experience
						</Link>
					</li>
					<li>
						<Link to={"/pills"} onClick={toggleMenu}>
							Pills
						</Link>
					</li>
					<li>
						<Link to={"/contact"} onClick={toggleMenu}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default MainMenu;
