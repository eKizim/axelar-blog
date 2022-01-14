import React from 'react';
import NewsSection from './news_section/NewsSection.jsx';
import BlogSection from './blog_section/BlogSection.jsx';
import VideoSection from './video_section/VideoSection.jsx';
import PressSection from './press_section/PressSection.jsx';
import './HomePage.scss';

export default function HomePage() {
    return (
        <section id="home_page">
            <h3 className="section_title">Last Updates</h3>
            <HomePageGrid/>
        </section>
    );
};


function HomePageGrid() {
    return (
	<div id="home_page__grid">
  	    <NewsSection/>
	    <BlogSection/>
	    <VideoSection/>
            <PressSection/>
	</div>
    );
};
