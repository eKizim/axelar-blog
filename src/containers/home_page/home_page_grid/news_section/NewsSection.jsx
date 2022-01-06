import React from 'react';
import SectionTitle from './../../../../components/section_title/SectionTitle.jsx';
import SectionButton from './../../../../components/section_button/SectionButton.jsx';
import './NewsSection.scss';

export default function NewsSection() {
	let posts = [<NewsUnit/>, <NewsUnit/>, <NewsUnit/>, <NewsUnit/>];
	return (
		<section id="news_section">
			<SectionTitle title="News" buttonText="Read all news"/>
			<div className="news_container">
				{posts}
			</div>
		</section>
	);
};


function NewsUnit() {
	return (
		<div className="news_unit">
			<a className="news_unit__title" href="">Test Title</a>
			<div className="news_unit__info">
				<p className="news_unit__info-date">26.12.2021</p>
				<SectionButton buttonText="Read"/>
			</div>
		</div>
	);
}
