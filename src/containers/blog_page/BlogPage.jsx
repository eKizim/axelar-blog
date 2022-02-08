import React, { useEffect, useState } from 'react';
import { Link, useParams, Outlet, useNavigate } from 'react-router-dom';
import LastBlogPost from '../../components/last_blog_post/LastBlogPost.jsx';
import SectionWrapper from '../../components/section_wrapper/SectionWrapper.jsx';
import BlogPost from '../../components/blog_post/BlogPost.jsx';
import './BlogPage.scss';

import { articleBase } from '../../test_storage/article_examples.jsx';

export default function BlogPage() {
    const lastArticle = articleBase[0];
    const renderArticles = articleBase.slice(1).map(el => (
        <BlogPost
            key={el.post_id}
            post_id={el.post_id}
            titleImg={el.title_img}
            title={el.title} date={el.date}
            titleParagraph={el.title_p}
        />)
    );

    return (
        <SectionWrapper sectionId="blog_page">
            <h3 className="section_title">Axelar blog</h3>
            <LastBlogPost
                post_id={lastArticle.post_id}
                title={lastArticle.title}
                date={lastArticle.date}
                titleImg={lastArticle.title_img}
                titleParagraph={lastArticle.title_p}/>
            <div className="blog_page__grid">
                {renderArticles}
            </div>
            <Outlet/>
        </SectionWrapper>
    );
};

export function BlogPostReader() {
    const params = useParams();
    const [readerBody, setReaderBody] = useState();
    const navigate = useNavigate();

    const currentArticle = articleBase.find(el => el.post_id === params.invoiceId.split('_')[0]);

    useEffect(() => {
        setReaderBody(currentArticle.body);
        document.querySelector('body').style.overflow = 'hidden';

        return () => document.querySelector('body').style.overflow = 'auto';
    });

    const setBodyHTML = () => {
        return {__html: readerBody};
    };

    return (
        <div id="reader_modal">
            <button className="close_modal" onClick={() => navigate('/blog')}>X</button>
            <article className="post_reader">
                <h5 className="post_reader__title">{currentArticle.title}</h5>
                <p className="post_reader__date">{currentArticle.date}</p>
                <img className="post_reader__title-img" src={currentArticle.title_img} alt=""/>
                <div className="post_reader__body" dangerouslySetInnerHTML={setBodyHTML()}></div>
            </article>
        </div>
    );
};
