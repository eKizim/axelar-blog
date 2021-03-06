import React from 'react';
import LastBlogPost from '../../../components/last_blog_post/LastBlogPost.jsx';
import BlogPost from '../../../components/blog_post/BlogPost.jsx';
import SectionTitle from '../../../components/section_title/SectionTitle.jsx';
import './BlogSection.scss';

import { articleBase } from '../../../test_storage/article_examples.js';

export default function BlogSection() {
    const lastArticle = articleBase[0];
    const recentPosts = articleBase.slice(1).length === 3 ? articleBase.slice(1) : articleBase.slice(1, 4);
    const renderRecentPosts = recentPosts.map(el => (
        <BlogPost
            key={el.post_id}
            fromHome
            clipped
            post_id={el.post_id}
            titleImg={el.title_img}
            date={el.date}
            title={el.title}
            titleParagraph={el.title_p}
        />
    ));

    return (
        <section id='blog_section'>
            <SectionTitle title='Blog' buttonText='Read all posts' link='/blog'/>
            <div className='blog_section__container'>
                <LastBlogPost
                    fromHome
                    clipped
                    post_id={lastArticle.post_id}
                    title={lastArticle.title}
                    date={lastArticle.date}
                    titleImg={lastArticle.title_img}
                    titleParagraph={lastArticle.title_p}
                />
                <div className='recent_posts'>
                    {renderRecentPosts}
                </div>
            </div>
        </section>
    );
}
