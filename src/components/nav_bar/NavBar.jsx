import React from 'react';
import NavLogo from '../../images/Nav-Logo.png';
import './NavBar.scss';

export default function NavBar() {
	return (
		<nav id="nav_bar">
			<a href="#">Blog</a>
			<a href="#">News</a>
			<a href="">
				<img src={NavLogo} alt=""/>
			</a>
			<a href="#">Press</a>
			<a href="#">Community</a>
		</nav>
	)
}