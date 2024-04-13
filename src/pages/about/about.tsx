import Greeting from "../../components/greeting/Greeting.component";
import Introduction from "../../components/introduction/introduction.component";

const AboutPage = () => {
	return (
		<main className="about-page">
			<Greeting />
			<Introduction />
		</main>
	);
};

export default AboutPage;
