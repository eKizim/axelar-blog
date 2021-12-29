import React from 'react';
import BlogPostImg from './../../images/blog_post_img.png';
import './BlogPost.scss';

export default function BlogPost() {
	let testTitle = "Title for tests";
	let testPar = "Paragraph for tests";

	return (
    <div className="blog_post">
			<a className="blog_post__img" href="#">
				<img src={BlogPostImg} />
			</a>
			<div className="blog_post__info">
				<a href="#">{testTitle}</a>
				<p>{testPar}</p>
			</div>
		</div>
	);
};
