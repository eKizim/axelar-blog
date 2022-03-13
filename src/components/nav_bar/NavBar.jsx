import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import NavLogo from '../../images/NavLogo.svg';
import MobileNavLogo from '../../images/MobileNavLogo.svg';
import './NavBar.scss';

export default function NavBar() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => setLoaded(true), []);

    useEffect(() => {
        window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
    });

    const scrollToTop = (e) => {
        if(e.target.className === 'nav_bar__item') {
            return window.scrollTo(0, 0);
        }
    };

    return (
        <nav id='nav_bar' className={loaded ? 'loaded' : ''} onClick={scrollToTop}>
            {screenWidth > 768 ? <DesktopNavBar /> : <MobileNavBar />}
        </nav>
    );
}


function DesktopNavBar() {
    return (
        <React.Fragment>
            <NavLink
                className={({ isActive }) => isActive ? 'nav_bar__item active' : 'nav_bar__item'}
                to='/blog'
            >
                Blog
            </NavLink>

            <NavLink
                className={({ isActive }) => isActive ? 'nav_bar__item active' : 'nav_bar__item'}
                to='/video'
            >
                Video
            </NavLink>

            <NavLink className='nav_bar__logo' to='/'>
                <img src={NavLogo} alt='' />
            </NavLink>

            <NavLink
                className={({isActive}) => isActive ? 'nav_bar__item active' : 'nav_bar__item'}
                to='/news'
            >
                News
            </NavLink>

            <NavLink
                className={({isActive}) => isActive ? 'nav_bar__item active' : 'nav_bar__item'}
                to='/press'
            >
                Press
            </NavLink>
        </React.Fragment>
    );
}


function MobileNavBar() {
    const navBarArr = [
        { link:      '', section:  'Home'},
        { link:  'blog', section:  'Blog'},
        { link: 'video', section: 'Video'},
        { link: 'news', section:   'News'},
        { link: 'press', section: 'Press'}
    ];

    const toggleMenu = (e) => {
        const target = e.target;

        if(target.classList.contains('nav_bar__item') || target.classList.contains('burger_button')) {
            document.querySelector('.burger_button').classList.toggle('active');
            document.querySelector('.nav_bar__container').classList.toggle('active');
        }
    };

    const renderedNavLinks = navBarArr.map(item => (
        <NavLink
            className={({isActive}) => isActive ? 'nav_bar__item active' : 'nav_bar__item'}
            key={item.link}
            to={`/${item.link}`}
        >
            {item.section}
        </NavLink>
    ));

    return (
        <React.Fragment>
            <NavLink className='nav_bar__logo' to='/'>
                <img src={MobileNavLogo} alt=''/>
            </NavLink>

            <div className='nav_bar__container' onClick={toggleMenu}>
                {renderedNavLinks}
            </div>

            <button className='burger_button' onClick={toggleMenu}>
                <span></span>
            </button>
        </React.Fragment>
    );
}
