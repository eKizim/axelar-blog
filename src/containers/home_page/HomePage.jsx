import React from 'react';
import HomePageGrid from './home_page_grid/HomePageGrid.jsx';
import PressSection from './press_section/PressSection.jsx';
import './HomePage.scss';

export default function HomePage() {
    return (
        <section id="home_page">
            <h5 className="section_title">Last Updates</h5>
            <HomePageGrid/>
            <PressSection/>
        </section>
    );
};

