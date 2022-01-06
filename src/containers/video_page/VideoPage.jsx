import React, { useState, useEffect } from 'react';
import PlayIcon from '../../images/play.svg';
import ActivePlayIcon from '../../images/play_active.svg';
import './VideoPage.scss';

export default function VideoPage() {
    const [curVid, setCurVid] = useState();

    return (
        <section id="video_page">
            <h5 className="section_title">Axelar videos</h5>
            <div className="video_container">
                <div className="video_container__viewer">{curVid}</div>
                <VideoList curVid={curVid} setCurVid={setCurVid}/>
            </div>
        </section>
    );
};


function VideoList({curVid, setCurVid}) {
    const [vids, setVids] = useState([]);

    useEffect(() => {
        let tempArr = ["#1", "#2", "#3"];
        setVids(tempArr);
        setCurVid(tempArr[0]);
    }, []);

    const renderVids = vids.map(el => el = <VideoItem key={el} num={el} curVid={curVid} setCurVid={setCurVid}/>);

    return (
        <div className="video_container__list">
            {renderVids}
        </div>
    );
};


function VideoItem({num, curVid, setCurVid}) {
    const [icon, setIcon] = useState();

    useEffect(() => curVid === num ? setIcon(ActivePlayIcon) : setIcon(PlayIcon), [curVid]);

    return (
        <div className="video_item" onChange={() => setCurVid(num)}>
            <input type="radio" name="video" id={num} value={num} defaultChecked={num === "#1"}/>
            <label htmlFor={num}>
                <img src={icon} alt=""/>
                <p>Test</p>
                <p>1:58:00</p>
            </label>
        </div>
    );
};