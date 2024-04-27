/* eslint-disable @typescript-eslint/no-explicit-any */
import GATracker from "../../utils/gaTracker";
import { experienceStructuredData } from "../../utils/SEO/seoStructuredData.js";
import Divisor from "../../components/divisor/divisor.component.js";

import { IExperienceData } from "../../utils/interfaces.js";

import { experienceData } from "../../utils/data/en/experience.js";

import "./experience.scss";

const Experience = () => {
	GATracker();
	return (
		<div className="experience">
			{experienceStructuredData()}
			<h2 className="text">Experience</h2>
			{experienceData.map((experience: IExperienceData, idx: number) => (
				<div key={idx} className="experience__item">
					<h3 className="experience__item__company text">
						{experience.company}
					</h3>
					<h4 className="text">Position:</h4>
					<p className="experience__item__position text">
						{experience.position}
					</p>
					<br />
					<h4 className="experience__item__projects text">Projects:</h4>
					<ul className="experience__item__projects-list">
						{experience.projects.map((project: string, idx: number) => (
							<li
								key={idx}
								className="experience__item__projects-list__item text"
							>
								{project}
							</li>
						))}
					</ul>
					<br />
					<h4 className="experience__item__responsibilities text">
						Responsabilities:
					</h4>
					<ul className="experience__item__responsibilities-list">
						{experience.responsibilities.map((responsibility: string) => (
							<li
								key={responsibility}
								className="experience__item__responsibilities-list__item text"
							>
								{responsibility}
							</li>
						))}
					</ul>
					<br />
					<h4 className="experience__item__dates text">{experience.dates}</h4>
					{idx !== experienceData.length - 1 && <Divisor />}
				</div>
			))}
		</div>
	);
};

export default Experience;
