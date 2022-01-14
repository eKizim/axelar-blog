import React from 'react';
import FooterLogo from '../../images/Footer_Logo.png';
import Discord from '../../images/Discord.png';
import Telegram from '../../images/Telegram.png';
import Twitter from '../../images/Twitter.png';
import LinkedIn from '../../images/LinkedIn.png';
import YouTube from '../../images/Youtube.png';
import Forum from '../../images/Forum.png';
import AxelarGear from '../../images/Axelar-Gear.png';
import './Footer.scss';

export default function Footer() {
    return (
	<footer id="footer">
	    <img className="footer_gear__1" src={AxelarGear} alt=""/>
	    <img className="footer_gear__2" src={AxelarGear} alt=""/>
	    <FooterContainer/>
	</footer>
    );
};

function FooterContainer() {
    return (
	<div className="footer_container">
	    <img className="footer_container__logo" src={FooterLogo} alt=""/>
	    <h3>Empowering dApp builders and blockchain ecosystems</h3>
	    <p>Join our community</p>
	    <CommunityContainer/>
	</div>
    );
};

function CommunityContainer() {
    return (
	<div className="community_container">
  	    <a className="community_container__item" href="#">
  	        <img src={Discord} alt=""/>
  	    </a>
  	    <a className="community_container__item" href="#">
  	        <img src={Telegram} alt=""/>
  	    </a>
  	    <a className="community_container__item" href="#">
  	        <img src={Twitter} alt=""/>
  	    </a>
  	    <a className="community_container__item" href="#">
  	        <img src={LinkedIn} alt=""/>
  	    </a>
  	    <a className="community_container__item" href="#">
  	        <img src={YouTube} alt=""/>
  	    </a>
  	    <a className="community_container__item" href="#">
  	        <img src={Forum} alt=""/>
  	    </a>
	</div>
    );
}
