import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { IArticle } from "../../utils/interfaces";

import './blogArticle.style.scss';

const BlogArticle = () => {
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
            <div className="article__author text">By: {article.author}</div>
            <div className="article__date text">Date: {article.date}</div>
        </div>
	);
};

export default BlogArticle;
