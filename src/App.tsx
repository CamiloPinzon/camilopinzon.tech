import { Routes, Route } from "react-router-dom";

import MainMenu from "./components/MainMenu/MainMenu.component";
import AboutPage from "./pages/about/about";
function App() {
	return (
		<Routes>
			<Route path="/" element={<MainMenu />}>
				<Route index element={<AboutPage />} />
			</Route>
		</Routes>
	);
}

export default App;
