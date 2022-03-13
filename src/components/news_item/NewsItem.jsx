import React from 'react';
import { Link } from 'react-router-dom';
import './NewsItem.scss';

export default function NewsItem({ fromHome, active, news_item_id, title, date, titleImg }) {
    const itemLink = news_item_id + '_' + title.toLowerCase().split(' ').join('_');

    return (
        <Link
            className={active ? 'news_item active' : 'news_item'}
            to={fromHome ? 'news/' + itemLink : itemLink}
            data-news-item-id={news_item_id}
        >
            <img className='news_item__img' src={titleImg} alt=''/>
            <div className='news_item__container'>
                <p className='news_item__date'>{date}</p>
                <p className='news_item__title'>{ active ? '<< Read': title}</p>
            </div>
        </Link>
    );
}
