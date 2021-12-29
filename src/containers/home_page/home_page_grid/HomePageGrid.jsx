import React from 'react';
import NewsSection from './news_section/NewsSection.jsx';
import BlogSection from './blog_section/BlogSection.jsx';
import VideoSection from './video_section/VideoSection.jsx';
import './HomePageGrid.scss';

export default function HomePageGrid() {
	return (
		<div id="home_page__grid">
			<NewsSection/>
			<BlogSection/>
			<VideoSection/>
		</div>
	);
};