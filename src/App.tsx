import { Routes, Route } from "react-router-dom";

import MainMenu from "./components/MainMenu/MainMenu.component";
import AboutPage from "./pages/about/about";
import Experience from "./pages/experience/experience";
function App() {
	return (
		<Routes>
			<Route path="/" element={<MainMenu />}>
				<Route index element={<AboutPage />} />
				<Route path="experience" element={<Experience />} />
			</Route>
		</Routes>
	);
}

export default App;
