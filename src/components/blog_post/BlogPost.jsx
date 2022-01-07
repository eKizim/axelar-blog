import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostImg from './../../images/blog_post_img.png';
import './BlogPost.scss';

export default function BlogPost({clipped, title, date, titleImg, titleParagraph}) {
	const articleLink = title.toLowerCase().split(' ').join('_');

	return (
    <div className={`blog_post ${clipped ? 'clipped' : ''}`}>
			<Link to={clipped ? 'blog/' + articleLink : articleLink} className="blog_post__img">
				<img src={titleImg} />
			</Link>
			<div className="blog_post__info">
				<Link to={clipped ? 'blog/' + articleLink : articleLink}>{title}</Link>
				<p className="blog_post__info-date">{date}</p>
				<p className="blog_post__info-content">{titleParagraph}</p>
			</div>
		</div>
	);
};
