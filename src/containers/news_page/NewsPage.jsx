import React from 'react';

import './NewsPage.scss';

export default function NewsPage() {
    let tempArr = [<NewsItem/>, <NewsItem/>, <NewsItem/>, <NewsItem/>,];
    return (
        <section id="news_page">
            <h5 className="section_title">News</h5>
            <div className="news_container">
                <article className="news_container__viewer"></article>
                <div className="news_container__list">
                    {tempArr}
                </div>
            </div>
        </section>
    );
};

function NewsItem() {
    return (
        <div className="news_item">
            <a className="news_item__title" href="#">Axelar Announces Strategic Investment from Crypto.com Capital</a>
            <p>November 23, 2021</p>
        </div>
    );
};
