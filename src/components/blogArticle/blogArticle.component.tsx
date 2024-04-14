import { useParams } from "react-router-dom";

const BlogArticle = () => {
    const path = useParams();
    console.log(path);
    

	return (
		<>
			<div>BlogArticle</div>
		</>
	);
};

export default BlogArticle;
