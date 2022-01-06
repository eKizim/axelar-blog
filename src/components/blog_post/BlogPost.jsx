import React from 'react';
import BlogPostImg from './../../images/blog_post_img.png';
import './BlogPost.scss';

export default function BlogPost({clipped}) {
	return (
    <div className={`blog_post ${clipped ? 'clipped' : ''}`}>
			<a href="#" className="blog_post__img">
				<img src={BlogPostImg} />
			</a>
			<div className="blog_post__info">
				<a href="#">Axelar welcomes Citadel.one as an Official Validator Partner!Axelar welcomes Citadel.one as an Official Validator Partner!</a>
				<p className="blog_post__info-date">December 23, 2021</p>
				<p className="blog_post__info-content"> Axelar welcomes Citadel.one as an Official Validator Partner! Axelar welcomes Citadel.one as an Official Validator Partner!Axelar welcomes Citadel.one as an Official Validator Partner! Axelar welcomes Citadel.one as an Official Validator Partner! Axelar welcomes Citadel.one as an Official Validator Partner! Axelar welcomes Citadel.one as an Official Validator Partner! Axelar welcomes Citadel.one as an Official Axelar welcomes Citadel.one as an Official Validator Partner! Axelar welcomes Citadel.one as an Official Validator Partner!Axelar welcomes Citadel.one as an Official Validator Partner! Axelar welcomes Citadel.one as an Official Validator Partner! Axelar welcomes Citadel.one as an Official Validator Partner! Axelar welcomes Citadel.one as an Official Validator Partner! Axelar welcomes Citadel.one as an Official</p>
			</div>
		</div>
	);
};
