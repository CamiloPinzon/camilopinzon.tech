import { aboutStructuredData } from "../../utils/SEO/seoStructuredData";
import Greeting from "../../components/greeting/Greeting.component";
import Introduction from "../../components/introduction/introduction.component";
import Divisor from "../../components/divisor/divisor.component";
import TechnicalStack from "../../components/technical-stack/technicalStack.component";

const AboutPage = () => {
	return (
		<main className="about-page">
			{aboutStructuredData()}
			<Greeting />
			<Introduction />
			<Divisor />
			<TechnicalStack />
		</main>
	);
};

export default AboutPage;
