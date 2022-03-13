import React from 'react';
import NewsItem from '../news_item/NewsItem.jsx';
import './NewsList.scss';

import { newsBase } from '../../test_storage/news_examples';

export default function NewsList({curId}) {
    const renderNews = newsBase.map(el => (
        <NewsItem
            active={curId === el.news_item_id}
            key={el.news_item_id}
            news_item_id={el.news_item_id}
            title={el.title}
            date={el.date}
            titleImg={el.title_img}
            onClick={() => window.scrollTo(0, 0)}
        />
    ));

    return (
        <div className='news_list'>
            <div className='news_list__container'>
                {renderNews}
            </div>
        </div>
    );
}
