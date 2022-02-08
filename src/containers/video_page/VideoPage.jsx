import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import SectionWrapper from '../../components/section_wrapper/SectionWrapper.jsx';
import PlayIcon from '../../images/play.svg';
import ActivePlayIcon from '../../images/play_active.svg';
import './VideoPage.scss';

import { videoBase } from '../../test_storage/video_base.jsx';

export default function VideoPage() {
    const [curVid, setCurVid] = useState(videoBase[0].link);
    const [vidId, setVidId] = useState(videoBase[0].video_id);

    return (
        <SectionWrapper sectionId="video_page">
            <h3 className="section_title">Axelar video</h3>
            <div className="video_container">
                <div className="video_container__viewer">
                    <ReactPlayer url={curVid} width="100%" height="100%"/>
                </div>
                <VideoList setCurVid={setCurVid} vidId={vidId} setVidId={setVidId}/>
            </div>
        </SectionWrapper>
    );
};


function VideoList({setCurVid, vidId, setVidId}) {
    const renderVids = videoBase.map(el => (
        <VideoItem
            key={el.video_id}
            video_id={el.video_id}
            title={el.video_title}
            pub_date={el.pub_date}
            link={el.link}
            num={el}
            vidId={vidId}
            setVidId={setVidId}
            setCurVid={setCurVid}
        />)
    );

    return (
        <div className="video_container__list">
            {renderVids}
        </div>
    );
};


function VideoItem({video_id, link, title, pub_date, vidId, setVidId, setCurVid}) {
    const [icon, setIcon] = useState();

    useEffect(() => vidId === video_id ? setIcon(ActivePlayIcon) : setIcon(PlayIcon), [vidId]);

    return (
        <div className="video_item" onChange={() => {setCurVid(link); setVidId(video_id);}}>
            <input type="radio" name="video" id={video_id} value={video_id} defaultChecked={video_id === "v0001"}/>
            <label className="video_item__label" htmlFor={video_id}>
                <img className="video_item__img" src={icon} alt=""/>
                <p className="video_item__title">{title}</p>
            </label>
        </div>
    );
};
