import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavLogo from '../../images/Nav-Logo.png';
import './NavBar.scss';

export default function NavBar() {
	return (
		<nav id="nav_bar">
			<NavLink className="nav_bar__item" to="/blog">Blog</NavLink>
			<NavLink className="nav_bar__item" to="/video">Video</NavLink>
			<NavLink className="nav_bar__logo" to="/">
				<img src={NavLogo} alt=""/>
			</NavLink>
			<NavLink className="nav_bar__item" to="/news">News</NavLink>
			<NavLink className="nav_bar__item" to="/press">Press</NavLink>
		</nav>
	);
};
