import React from 'react';
import { Link } from 'react-router-dom';
import LastBlogPostImg from '../../images/blog_post_img.png';
import './LastBlogPost.scss';

export default function LastBlogPost({clipped, title, date, titleImg, titleParagraph}) {
	const articleLink = title.toLowerCase().split(' ').join('_');

	return (
		<div className={`last_blog_post ${clipped ? 'clipped': ''}`}>
			<Link className="last_blog_post__img" to={clipped ? 'blog/' + articleLink : articleLink}>
				<img src={titleImg} alt=""/>
			</Link>
			<div className="last_blog_post__info">
				<Link className="last_blog_post__info-title" to={clipped ? 'blog/' + articleLink : articleLink}>{title}</Link>
				<p className="last_blog_post__info-date">{date}</p>
				<p className="last_blog_post__info-intro">{titleParagraph}</p>
			</div>
		</div>
	);
};
