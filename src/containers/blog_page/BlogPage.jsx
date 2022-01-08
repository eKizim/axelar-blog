import React, { useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import LastBlogPost from '../../components/last_blog_post/LastBlogPost.jsx';
import BlogPost from '../../components/blog_post/BlogPost.jsx';
import './BlogPage.scss';

import { articleBase } from '../../test_storage/article_examples.jsx';

export default function BlogPage() {
    const lastArticle = articleBase[0];
    const renderArticles = articleBase.slice(1).map(el => el = <BlogPost key={el.post_id} post_id={el.post_id} titleImg={el.title_img} title={el.title} date={el.date} titleParagraph={el.title_p}/>);
    
    return (
        <section id="blog_page">
            <h5 className="section_title">Axelar blog</h5>
            <LastBlogPost post_id={lastArticle.post_id} title={lastArticle.title} date={lastArticle.date} titleImg={lastArticle.title_img} titleParagraph={lastArticle.title_p}/>
            <div className="blog_page__grid">
                {renderArticles}
            </div>
            <Outlet/>
        </section>
    );
};

export function BlogPostReader() {
    const params = useParams();
    const currentArticle = articleBase.find(el => el.post_id === params.invoiceId.split('_')[0]);

    useEffect(() => {
        document.querySelector('.post_reader__body').innerHTML = currentArticle.body;
        document.querySelector('body').style.overflow = 'hidden';
        return () => document.querySelector('body').style.overflow = 'auto';
    });

    return (
        <div id="reader_modal">
            <Link to="/blog" className="close_modal">X</Link>
            <article className="post_reader">
                <h5 className="post_reader__title">{currentArticle.title}</h5>
                <p className="post_reader__date">{currentArticle.date}</p>
                <img className="post_reader__title-img" src={currentArticle.title_img} alt=""/>
                <div className="post_reader__body"></div>
            </article>
        </div>
    );
};
