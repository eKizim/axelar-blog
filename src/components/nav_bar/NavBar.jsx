import React from 'react';
import NavLogo from '../../images/Nav-Logo.png';
import './NavBar.scss';

export default function NavBar() {
	return (
		<nav id="nav_bar">
			<a className="nav_bar__item" href="#">Blog</a>
			<a className="nav_bar__item" href="#">News</a>
			<a className="nav_bar__logo" href="">
				<img src={NavLogo} alt=""/>
			</a>
			<a className="nav_bar__item" href="#">Press</a>
			<a className="nav_bar__item" href="#">Community</a>
		</nav>
	)
}