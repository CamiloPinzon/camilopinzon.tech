import { Link } from "react-router-dom";

import { pillsStructuredData } from "../../utils/SEO/seoStructuredData";
import Divisor from "../divisor/divisor.component";

import { articlesData } from "../../utils/data/en/articles";

import './pillsPreview.styles.scss';

const PillsPreview = () => {
	return (
		<div>
			{pillsStructuredData()}
			<h1 className="text section-title">Usefull pills for developers</h1>
			<div>
				{articlesData.map(({ id, name, preview, tags }, idx) => (
					<div key={id} className="item-container">
						<h2 className="text">{name}</h2>
                        <p>{preview}</p>
                        <Link to={`${name}`}>{`Read More >>>`}</Link>
						<div className="tags-container">
							{tags.map((tag, idx) => (
								<span key={idx} className="pill">{tag}</span>
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
