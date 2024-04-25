import { Helmet } from "react-helmet";

const tilte = "Camilo Pinzon - Web Developer | JavaScript | React";

const scriptData = () => (
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

export const aboutStructuredData = () => (
	<Helmet>
		{scriptData()}
		<title>{tilte}</title>
		<meta name="title" content={tilte} />
		<meta
			name="keywords"
			content="web developer, self-taught, dedicated, teamwork, problem-solving, experience, calm, remote work, JavaScript, TypeScript, HTML5, CSS, Sass, React JS, StyledComponents, Gamification"
		/>
		<meta name="robots" content="index, follow" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="language" content="English" />
		<meta name="author" content="Camilo Pinzon" />
		<meta name="Copyright" content="Camilo Pinzon" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={tilte} />
		<meta
			property="og:image"
			content="https://camilopinzon.tech/images/profile-pic.webp"
		/>
		<link
			rel="icon"
			type="image/png"
			href="https://camilopinzon.tech/images/profile-pic.webp"
        />
        
		<meta
			name="description"
			content="Dedicated and self-taught web developer with the ability to assimilate work under pressure and great facility for teamwork. Bringing experience to find solutions for all project stages and calm to the customer."
		/>
		<meta property="og:url" content="https://camilopinzon.tech" />
		<meta
			property="og:description"
			content="Dedicated and self-taught web developer with the ability to assimilate work under pressure and great facility for teamwork. Bringing experience to find solutions for all project stages and calm to the customer."
		/>
		<link rel="canonical" href="https://camilopinzon.tech" />
	</Helmet>
);

export const experienceStructuredData = () => (
	<Helmet>
		{scriptData()}
		<title>{tilte}</title>
		<meta name="title" content={tilte} />
		<meta
			name="keywords"
			content="web developer, self-taught, dedicated, teamwork, problem-solving, experience, calm, remote work, JavaScript, TypeScript, HTML5, CSS, Sass, React JS, StyledComponents, Gamification"
		/>
		<meta name="robots" content="index, follow" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="language" content="English" />
		<meta name="author" content="Camilo Pinzon" />
		<meta name="Copyright" content="Camilo Pinzon" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={tilte} />
		<meta
			property="og:image"
			content="https://camilopinzon.tech/images/profile-pic.webp"
		/>
		<link
			rel="icon"
			type="image/png"
			href="https://camilopinzon.tech/images/profile-pic.webp"
		/>

		<meta
			name="description"
			content="Explore my professional journey as a web developer, including roles at top companies like Huge, Mill 5, BairesDev, and Globant. Discover my experience in developing cutting-edge digital projects, implementing technologies such as JavaScript, TypeScript, React JS, HTML5, CSS, and Sass. Learn about my roles in software engineering, web UI development, team management, and my ability to thrive in fast-paced, collaborative environments."
		/>
		<meta property="og:url" content="https://camilopinzon.tech/experience" />
		<meta
			property="og:description"
			content="Explore my professional journey as a web developer, including roles at top companies like Huge, Mill 5, BairesDev, and Globant. Discover my experience in developing cutting-edge digital projects, implementing technologies such as JavaScript, TypeScript, React JS, HTML5, CSS, and Sass. Learn about my roles in software engineering, web UI development, team management, and my ability to thrive in fast-paced, collaborative environments."
		/>
		<link rel="canonical" href="https://camilopinzon.tech/experience" />
	</Helmet>
);

export const pillsStructuredData = () => (
	<Helmet>
		{scriptData()}
		<title>{tilte}</title>
		<meta name="title" content={tilte} />
		<meta
			name="keywords"
			content="web developer, self-taught, dedicated, teamwork, problem-solving, experience, calm, remote work, JavaScript, TypeScript, HTML5, CSS, Sass, React JS, StyledComponents, Gamification"
		/>
		<meta name="robots" content="index, follow" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="language" content="English" />
		<meta name="author" content="Camilo Pinzon" />
		<meta name="Copyright" content="Camilo Pinzon" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={tilte} />
		<meta
			property="og:image"
			content="https://camilopinzon.tech/images/profile-pic.webp"
		/>
		<link
			rel="icon"
			type="image/png"
			href="https://camilopinzon.tech/images/profile-pic.webp"
		/>

		<meta
			name="description"
			content="Discover valuable insights and tips for web development on my Pills page. Learn about best practices, coding techniques, and innovative strategies to enhance your skills as a developer. Explore topics such as JavaScript, TypeScript, React JS, HTML5, CSS, Sass, and more. Whether you're a beginner or an experienced developer, find actionable advice to level up your coding game and stay updated with the latest trends in the industry."
		/>
		<meta property="og:url" content="https://camilopinzon.tech/experience" />
		<meta
			property="og:description"
			content="Discover valuable insights and tips for web development on my Pills page. Learn about best practices, coding techniques, and innovative strategies to enhance your skills as a developer. Explore topics such as JavaScript, TypeScript, React JS, HTML5, CSS, Sass, and more. Whether you're a beginner or an experienced developer, find actionable advice to level up your coding game and stay updated with the latest trends in the industry."
		/>
		<link rel="canonical" href="https://camilopinzon.tech/experience" />
	</Helmet>
);

export const contactStructuredData = () => (
	<Helmet>
		{scriptData()}
		<title>{tilte}</title>
		<meta name="title" content={tilte} />
		<meta
			name="keywords"
			content="web developer, self-taught, dedicated, teamwork, problem-solving, experience, calm, remote work, JavaScript, TypeScript, HTML5, CSS, Sass, React JS, StyledComponents, Gamification"
		/>
		<meta name="robots" content="index, follow" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="language" content="English" />
		<meta name="author" content="Camilo Pinzon" />
		<meta name="Copyright" content="Camilo Pinzon" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={tilte} />
		<meta
			property="og:image"
			content="https://camilopinzon.tech/images/profile-pic.webp"
		/>
		<link
			rel="icon"
			type="image/png"
			href="https://camilopinzon.tech/images/profile-pic.webp"
		/>

		<meta
			name="description"
			content="Get in touch with me through the Contact page to discuss collaboration opportunities, inquire about my services, or simply say hello. Feel free to reach out via the provided contact form or connect with me on social media. I'm available to answer any questions you may have and look forward to hearing from you."
		/>
		<meta property="og:url" content="https://camilopinzon.tech/experience" />
		<meta
			property="og:description"
			content="Get in touch with me through the Contact page to discuss collaboration opportunities, inquire about my services, or simply say hello. Feel free to reach out via the provided contact form or connect with me on social media. I'm available to answer any questions you may have and look forward to hearing from you."
		/>
		<link rel="canonical" href="https://camilopinzon.tech/experience" />
	</Helmet>
);
