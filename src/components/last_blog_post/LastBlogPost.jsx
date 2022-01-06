import React from 'react';
import LastBlogPostImg from './../../images/blog_post_img.png';
import './LastBlogPost.scss';

export default function LastBlogPost({clipped}) {
	return (
		<div className={`last_blog_post ${clipped ? 'clipped': ''}`}>
			<a className="last_blog_post__img" href="#">
				<img src={LastBlogPostImg} alt=""/>
			</a>
			<div className="last_blog_post__info">
				<a className="last_blog_post__info-title" href="">Axelar Newsletter — December Edition</a>
				<p className="last_blog_post__info-date">December 23, 2021</p>
				<p className="last_blog_post__info-intro">Axelar Newsletter — December EditionAs 2021 comes to a close, this month’s newsletter recaps key milestones from the year and shares some of the latest updates from the Axelar team.Screenshot from coinhippo representing the live Axelar test network connecting Ethereum, Fantom, Polygon, Moonbeam, Avalanche and other EVM-based chains. </p>
			</div>
		</div>
	);
};
