import React, { useState, useEffect } from 'react';
import PlayIcon from '../../images/play.svg';
import ActivePlayIcon from '../../images/play_active.svg';
import './VideoItem.scss';

export default function VideoItem({video_id, link, title, vidId, setVidId, setCurVid}) {
    const [icon, setIcon] = useState();

    useEffect(() => vidId === video_id ? setIcon(ActivePlayIcon) : setIcon(PlayIcon), [vidId]);

    return (
        <div className='video_item' onChange={() => {setCurVid(link); setVidId(video_id);}}>
            <input type='radio' name='video' id={video_id} value={video_id} defaultChecked={video_id === 'v0001'}/>
            <label className='video_item__label' htmlFor={video_id}>
                <img className='video_item__img' src={icon} alt=''/>
                <p className='video_item__title'>{title}</p>
            </label>
        </div>
    );
}
