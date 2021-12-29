import React from 'react';
import LastBlogPostImg from './../../images/blog_post_img.png';
import './LastBlogPost.scss';

export default function LastBlogPost() {
	return (
		<div className="last_blog_post">
			<a className="last_blog_post__img">
				<img src={LastBlogPostImg} alt=""/>
			</a>
			<div className="last_blog_post__info">
				<a className="last_blog_post__info-title" href="">Title for test</a>
				<p className="last_blog_post__info-date">29.12.2021</p>
				<p className="last_blog_post__info-intro">Description for test Description for test Description for test Description for test Description for test</p>
			</div>
		</div>
	);
};
