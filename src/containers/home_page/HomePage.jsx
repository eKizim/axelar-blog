import React from 'react';
import HomePageGrid from './home_page_grid/HomePageGrid.jsx';
import PressSection from './press_section/PressSection.jsx';
import Footer from '../../components/footer/Footer.jsx';
import './HomePage.scss';

export default function HomePage() {
	return (
		<div id="home_page">
			<h5 className="home_page__title">Last Updates</h5>
			<HomePageGrid/>
			<PressSection/>
			<Footer/>
		</div>
	);
};

