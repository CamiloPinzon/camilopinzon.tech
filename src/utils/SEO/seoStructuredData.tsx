import { Helmet } from "react-helmet";

const scripData = (
	<script
		type="application/ld+json"
		dangerouslySetInnerHTML={{
			__html: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Camilo Pinzon",
				legalName: "Camilo Pinzon",
				url: "https://camilopinzon.tech",
				logo: "https://camilopinzon.tech/images/profile-pic.webp",
			}),
		}}
	/>
);

const tilte = "Camilo Pinzon - Web Developer | JavaScript | React";

export const aboutStructuredData = () => (
	<Helmet>
		{scripData}
		<title>{tilte}</title>
		<meta name="title" content={tilte} />
		<meta
			name="description"
			content="Dedicated and self-taught web developer with the ability to assimilate work under pressure and great facility for teamwork. Bringing experience to find solutions for all project stages and calm to the customer."
		/>
		<meta
			name="keywords"
			content="web developer, self-taught, dedicated, teamwork, problem-solving, experience, calm, pressure, remote work, JavaScript, TypeScript, HTML5, CSS, Sass, React JS, StyledComponents, Gamification"
		/>
		<meta name="robots" content="index, follow" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="language" content="English" />
		<meta name="author" content="Camilo Pinzon" />
		<meta name="Copyright" content="Camilo Pinzon" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta property="og:url" content="https://camilopinzon.tech" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={tilte} />
		<meta
			property="og:description"
			content="Dedicated and self-taught web developer with the ability to assimilate work under pressure and great facility for teamwork. Bringing experience to find solutions for all project stages and calm to the customer."
		/>
		<meta
			property="og:image"
			content="https://camilopinzon.tech/images/profile-pic.webp"
		/>
		<link
			rel="icon"
			type="image/png"
			href="https://camilopinzon.tech/images/profile-pic.webp"
		/>
		<link rel="canonical" href="https://camilopinzon.tech" />
	</Helmet>
);
