import React from 'react';
import SectionWrapper from '../../components/section_wrapper/SectionWrapper.jsx';
import NewsSection from './news_section/NewsSection.jsx';
import BlogSection from './blog_section/BlogSection.jsx';
import VideoSection from './video_section/VideoSection.jsx';
import PressSection from './press_section/PressSection.jsx';
import './HomePage.scss';

export default function HomePage() {
    return (
        <SectionWrapper setcionId='home_page'>
            <h3 className='section_title'>Last Updates</h3>
            <HomePageGrid />
        </SectionWrapper>
    );
}


function HomePageGrid() {
    return (
        <div id='home_page__grid'>
            <NewsSection />
            <BlogSection />
            <VideoSection />
            <PressSection />
        </div>
    );
}
