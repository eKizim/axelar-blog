import React from 'react';
import NewsItem from '../../../components/news_item/NewsItem.jsx';
import SectionTitle from '../../../components/section_title/SectionTitle.jsx';
import SectionButton from '../../../components/section_button/SectionButton.jsx';
import './NewsSection.scss';

import { newsBase } from '../../../test_storage/news_examples.jsx';

export default function NewsSection() {
    const lastNews = newsBase.length === 3 ? newsBase : newsBase.slice(0, 3);
    const renderNews = lastNews.map(el => el = <NewsItem key={el.news_item_id} fromHome news_item_id={el.news_item_id} title={el.title} date={el.date} titleImg={el.title_img}/>);

    return (
	<section id="news_section">
	    <SectionTitle title="News" buttonText="Read all news" link="/news"/>
	    <div className="news_section__list">
              <div className="news_section__container">
	        {renderNews}
              </div>
	    </div>
	</section>
    );
};

