import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import GetCurrentLanguage from "../../utils/getCurrentLanguage";
import GATracker from "../../utils/gaTracker";
import { pillsStructuredData } from "../../utils/SEO/seoStructuredData";
import Divisor from "../divisor/divisor.component";

import { articlesData } from "../../utils/data/en/articles";

import "./pillsPreview.styles.scss";

const PillsPreview = () => {
	GATracker();
	const { t } = useTranslation();
	const currentLanguage = GetCurrentLanguage();
	return (
		<div>
			{pillsStructuredData()}
			<h1 className="text section-title">
				{t("pills.title", { lng: currentLanguage })}
			</h1>
			<div>
				{articlesData
					.filter((article) => article.lng === currentLanguage)
					.map(({ id, name, preview, tags }, idx) => (
						<div key={id} className="item-container">
							<h2 className="text">{name}</h2>
							<p>{preview}</p>
							<Link to={`${name}`}>{`Read More >>>`}</Link>
							<div className="tags-container">
								{tags.map((tag, idx) => (
									<span key={idx} className="pill">
										{tag}
									</span>
								))}
							</div>
							{idx !== articlesData.length - 1 && <Divisor />}
						</div>
					))}
			</div>
		</div>
	);
};

export default PillsPreview;
