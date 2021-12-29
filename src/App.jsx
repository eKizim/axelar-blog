import React from 'react';
import NavBar from './components/nav_bar/NavBar.jsx';
import Announcement from './components/announcement/Announcement.jsx';
import HomePage from './containers/home_page/HomePage.jsx';
import SectionButton from './components/section_button/SectionButton.jsx';
import './style.scss';

export default function App() {
	return (
		<React.Fragment>
			<NavBar/>
			<Announcement/>
			<HomePage/>
		</React.Fragment>
	)
}