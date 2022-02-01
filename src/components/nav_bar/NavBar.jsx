import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavLogo from '../../images/NavLogo.svg';
import MobileNavLogo from '../../images/MobileNavLogo.svg';
import './NavBar.scss';

export default function NavBar() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
    });

    const activeLink = { backgroundColor: 'var(--main-dark-color)', color: 'var(--main-light-color)'};

    return (
    <nav id="nav_bar">
        { screenWidth > 768 ? <DesktopNavBar activeLink={activeLink}/> : <MobileNavBar activeLink={activeLink}/>}
    </nav>
    );
};


function DesktopNavBar({activeLink}) {
    return (
        <React.Fragment>
            <NavLink style={({isActive}) => isActive ? activeLink : {}} className="nav_bar__item" to="/blog">Blog</NavLink>
            <NavLink style={({isActive}) => isActive ? activeLink : {}} className="nav_bar__item" to="/video">Video</NavLink>
            <NavLink className="nav_bar__logo" to="/">
                <img src={NavLogo} alt=""/>
            </NavLink>
            <NavLink style={({isActive}) => isActive ? activeLink : {}} className="nav_bar__item" to="/news">News</NavLink>
            <NavLink style={({isActive}) => isActive ? activeLink : {}} className="nav_bar__item" to="/press">Press</NavLink>
        </React.Fragment>
    );
}


function MobileNavBar({activeLink}) {

    const toggleMenu = (e) => {
        const target = e.target;
    
        if(target.classList.contains('nav_bar__item') || target.classList.contains('burger_button')) {
            document.querySelector('.burger_button').classList.toggle('active');
            document.querySelector('.nav_bar__container').classList.toggle('active');
        }
    };

    return (
        <React.Fragment>
            <NavLink className="nav_bar__logo" to="/">
                <img src={MobileNavLogo} alt=""/>
            </NavLink>
            <div className="nav_bar__container" onClick={toggleMenu}>
                <NavLink style={({isActive}) => isActive ? activeLink : {}} className="nav_bar__item" to="/">Home</NavLink>
                <NavLink style={({isActive}) => isActive ? activeLink : {}} className="nav_bar__item" to="/blog">Blog</NavLink>
                <NavLink style={({isActive}) => isActive ? activeLink : {}} className="nav_bar__item" to="/video">Video</NavLink>
                <NavLink style={({isActive}) => isActive ? activeLink : {}} className="nav_bar__item" to="/news">News</NavLink>
                <NavLink style={({isActive}) => isActive ? activeLink : {}} className="nav_bar__item" to="/press">Press</NavLink>
            </div>
            <button className="burger_button" onClick={toggleMenu}><span></span></button>
        </React.Fragment>
    );
};
