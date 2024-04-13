import ProfilePicture from "../../assets/profile-pic.webp";
import "./introduction.styles.scss";

const Introduction = () => {
	return (
		<section className="introduction">
			<div className="introduction__item">
				<img src={ProfilePicture} alt="camilo pinzon" />
			</div>
			<div className="introduction__item">
				<div className="introduction__item__content">
					<p>
						Self-taught and dedicated. A web developer with ability to
						assimilate work under pressure and great facility for teamwork, no
						matter if it's locally or remote. He brings his experience to find
						solutions for all the possible problems that can happen in all the
						project stages and brings calm to the customer.
					</p>
					<button className="introduction__item__btn">{"Get in touch"}</button>
				</div>
			</div>
		</section>
	);
};

export default Introduction;
