import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { articleBase } from '../../test_storage/article_examples';
import './BlogPostReader.scss';

export default function BlogPostReader() {
    const params = useParams();
    const [readerBody, setReaderBody] = useState();
    const navigate = useNavigate();

    const currentArticle = articleBase.find((el) => el.post_id === params.invoiceId.split('_')[0]);

    useEffect(() => {
        setReaderBody(currentArticle.body);
        document.querySelector('body').style.overflow = 'hidden';

        return () => document.querySelector('body').style.overflow = 'auto';
    });

    const setBodyHTML = () => {
        return { __html: readerBody };
    };

    return (
        <div id='reader_modal'>
            <button className='close_modal' onClick={() => navigate('/blog')}><span></span></button>
            <article className='post_reader'>
                <h5 className='post_reader__title'>{ currentArticle.title }</h5>
                <p className='post_reader__date'>{ currentArticle.date }</p>
                <img className='post_reader__title-img' src={currentArticle.title_img} alt='' />
                <div className='post_reader__body' dangerouslySetInnerHTML={setBodyHTML()} />
            </article>
        </div>
    );
}
