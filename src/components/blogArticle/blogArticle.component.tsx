import { useEffect, useState } from "react";
import GATracker from "../../utils/gaTracker";
import { useParams } from "react-router-dom";

import { IArticle } from "../../utils/interfaces";

import './blogArticle.style.scss';

const BlogArticle = () => {
	GATracker();
	const path = useParams();
	const [article, setArticle] = useState({} as IArticle);

	useEffect(() => {
		const loadArticle = async () => {
			return await import(`../../utils/data/en/${path.id}.tsx`).then(
				(module) => {
					setArticle(module.article[0]);
				}
			);
		};

		loadArticle();
	}, [article, path.id]);

    return (
			<div className="article">
				<h1 className="article__title text">{article.title}</h1>
				<div
					className="article__content"
					dangerouslySetInnerHTML={{ __html: article.content }}
				/>
				<span className="article__author text">
					By: {article.author} / {article.date}
				</span>
			</div>
		);
};

export default BlogArticle;
