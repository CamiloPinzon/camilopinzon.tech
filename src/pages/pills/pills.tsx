import { Routes, Route } from "react-router-dom";

import PillsPreview from "../../components/pillsPreview/pillsPreview.component";
import BlogArticle from "../../components/blogArticle/blogArticle.component";

import "./pills.scss";

const Pills = () => {
    return (
			<Routes>
				<Route index element={<PillsPreview />} />
				<Route path=":id" element={<BlogArticle />} />
			</Routes>
		);
};

export default Pills;
