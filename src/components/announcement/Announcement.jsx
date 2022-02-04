import React from 'react';
import './Announcement.scss';

export default function Announcement() {
    const closeAnnouncement = (_e) => {
        document.getElementById('announcement').style.display = 'none';
    };

    return (
        <div id="announcement">
            <button className="announcement_close" onClick={closeAnnouncement}><b>X</b></button>
            <div className="announcement_block">
                <h2 className="announcement_block__title">Announcing the Launch of Axelar's incentivized Quantum Community Program!</h2>
                <p className="announcement_block__description">This is your chance to contribute to Axelar’s resource base and get more involved with the network!</p>
                <a className="announcement_block__link" href="">Learn More Here</a>
            </div>
        </div>
    );
};
