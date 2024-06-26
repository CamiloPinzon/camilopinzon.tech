import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";

import MainMenu from "./components/MainMenu/MainMenu.component";
import AboutPage from "./pages/about/about";
import Experience from "./pages/experience/experience";
import Pills from "./pages/pills/pills";
import BlogArticle from "./components/blogArticle/blogArticle.component";
import PillsPreview from "./components/pillsPreview/pillsPreview.component";
import Contact from "./pages/contact/contact";
import NotFound from "./pages/404/404";
function App() {
	ReactGA.initialize("G-3HS6105HYQ");
	return (
		<Routes>
			<Route path="/" element={<MainMenu />}>
				<Route index element={<AboutPage />} />
				<Route path="experience" element={<Experience />} />
				<Route path="pills" element={<Pills />}>
					<Route index element={<PillsPreview />} />
					<Route path=":id" element={<BlogArticle />} />
				</Route>
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
