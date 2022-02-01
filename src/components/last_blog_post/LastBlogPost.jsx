import React from 'react';
import { Link } from 'react-router-dom';
import LastBlogPostImg from '../../images/blog_post_img.png';
import './LastBlogPost.scss';

export default function LastBlogPost({fromHome, post_id, title, date, titleImg, titleParagraph}) {
    const articleLink = post_id + '_' + title.toLowerCase().split(' ').join('_');

    return (
        <div className="last_blog_post" data-post-id={post_id}>
            <Link className="last_blog_post__img" to={fromHome ? 'blog/' + articleLink : articleLink}>
                <img src={titleImg} alt=""/>
            </Link>
            <div className="last_blog_post__info">
                <Link className="last_blog_post__info-title" to={fromHome ? 'blog/' + articleLink : articleLink}>{title}</Link>
                <p className="last_blog_post__info-date">{date}</p>
                <p className="last_blog_post__info-intro">{titleParagraph}</p>
            </div>
        </div>
    );
};
