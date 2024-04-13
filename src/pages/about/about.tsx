import Greeting from "../../components/greeting/Greeting.component";
import Introduction from "../../components/introduction/introduction.component";
import Divisor from "../../components/divisor/divisor.component";

const AboutPage = () => {
	return (
		<main className="about-page">
			<Greeting />
			<Introduction />
			<Divisor />
		</main>
	);
};

export default AboutPage;
