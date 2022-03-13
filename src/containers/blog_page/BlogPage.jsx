import React from 'react';
import { Outlet } from 'react-router-dom';
import LastBlogPost from '../../components/last_blog_post/LastBlogPost.jsx';
import SectionWrapper from '../../components/section_wrapper/SectionWrapper.jsx';
import BlogPost from '../../components/blog_post/BlogPost.jsx';
import './BlogPage.scss';

import { articleBase } from '../../test_storage/article_examples.js';

export default function BlogPage() {
    const lastArticle = articleBase[0];
    const renderArticles = articleBase.slice(1).map(el => (
        <BlogPost
            key={el.post_id}
            post_id={el.post_id}
            titleImg={el.title_img}
            title={el.title} date={el.date}
            titleParagraph={el.title_p}
        />));

    return (
        <SectionWrapper sectionId='blog_page'>
            <h3 className='section_title'>Axelar blog</h3>
            <LastBlogPost
                post_id={lastArticle.post_id}
                title={lastArticle.title}
                date={lastArticle.date}
                titleImg={lastArticle.title_img}
                titleParagraph={lastArticle.title_p}/>
            <div className='blog_page__grid'>
                {renderArticles}
            </div>
            <Outlet />
        </SectionWrapper>
    );
}
