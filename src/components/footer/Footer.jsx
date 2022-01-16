import React from 'react';
import FooterLogo from '../../images/footer_logo.svg';
import Discord from '../../images/discord.svg';
import Telegram from '../../images/telegram.svg';
import Twitter from '../../images/twitter.svg';
import LinkedIn from '../../images/linkedin.svg';
import YouTube from '../../images/youtube.svg';
import Forum from '../../images/forum.svg';
import AxelarGear from '../../images/axelar_gear.svg';
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
