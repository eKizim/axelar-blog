import React from 'react';
import FooterLogo from '../../images/footer_logo.svg';
import AxelarGear from "../../images/axelar_gear.svg";
import "./Footer.scss";

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
    const tempCommunityData = [
        {
            app: 'Discord',
            link: '#',
            icon: require("../../images/discord.svg")
        },
        {
            app: 'Telegram',
            link: '#',
            icon: require("../../images/telegram.svg")
        },
        {
            app: 'Twitter',
            link: '#',
            icon: require("../../images/twitter.svg")
        },
        {
            app: 'LinkedIn',
            link: '#',
            icon: require("../../images/linkedin.svg")
        },
        {
            app: 'Youtube',
            link: '#',
            icon: require("../../images/youtube.svg")
        },
        {
            app: 'Forum',
            link: '#',
            icon: require("../../images/forum.svg")
        },
    ];

    const renderedItems = tempCommunityData.map(el => (
        <a key={el.app + "-key"}className="community_container__item" href={el.link}>
            <img src={el.icon} alt=""/>
        </a>
    ));
    return (
        <div className="community_container">
            {renderedItems}
        </div>
    );
}
