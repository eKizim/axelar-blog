import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.scss';

export default function BlogPost({ fromHome, post_id, title, date, titleImg, titleParagraph }) {
    const articleLink = `${post_id}_${title.toLowerCase().split(' ').join('_')}`;

    return (
        <Link className='blog_post' to={fromHome ? `blog/${articleLink}` : articleLink} data-post-id={post_id}>
            <img className='blog_post__img' src={titleImg} alt='' />
            <div className='blog_post__info'>
                <h5 className='blog_post__info-title'>{title}</h5>
                <p className='blog_post__info-date'>{date}</p>
                <p className='blog_post__info-content'>{titleParagraph}</p>
            </div>
        </Link>
    );
}
