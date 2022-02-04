import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsItem from '../../components/news_item/NewsItem.jsx';
import './NewsPage.scss';

import { newsBase } from '../../test_storage/news_examples.jsx';

export default function NewsPage() {
    const [curId, setCurId] = useState();
    
    return (
        <section id="news_page">
            <h3 className="section_title">News</h3>
            <div className="news_container">
                <NewsViewer setCurId={setCurId}/>
                <NewsList curId={curId}/>
            </div>
        </section>
    );
};


function NewsViewer({setCurId}) {
    const [viewerBody, setViewerBody] = useState();
    const params = useParams();
    const currentItem = params.invoiceId ? newsBase.find(el => el.news_item_id === params.invoiceId.split('_')[0]) : newsBase[0];

    useEffect(() => {
        setViewerBody(currentItem.body);
        setCurId(currentItem.news_item_id);
    });

    const setBodyHTML = () => {
        return {__html: viewerBody};
    };

    return (
        <article className="news_viewer" data-current-item={currentItem.news_item_id}>
            <p className="news_viewer__date">{currentItem.date}</p>
            <h5 className="news_viewer__title">{currentItem.title}</h5>
            <div className="news_viewer__body" dangerouslySetInnerHTML={setBodyHTML()}></div>
        </article>
    );
};


function NewsList({curId}) {
    const renderNews = newsBase.map(el => (
        <NewsItem
            active={curId === el.news_item_id}
            key={el.news_item_id}
            news_item_id={el.news_item_id}
            title={el.title}
            date={el.date}
            titleImg={el.title_img}
        />)
    );
    
    return (
        <div className="news_list">
            <div className="news_list__container">
                {renderNews}
            </div>
        </div>
    );
};
