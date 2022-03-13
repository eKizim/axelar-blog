import React from 'react';
import VideoItem from '../video_item/VideoItem.jsx';
import './VideoList.scss';

import { videoBase } from '../../test_storage/video_base';

export default function VideoList({ setCurVid, vidId, setVidId }) {
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
        />
    ));

    return (
        <div className='video_container__list'>
            {renderVids}
        </div>
    );
}
