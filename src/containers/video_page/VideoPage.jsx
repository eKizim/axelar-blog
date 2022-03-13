import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import SectionWrapper from '../../components/section_wrapper/SectionWrapper.jsx';
import VideoList from '../../components/video_list/VideoList.jsx';
import './VideoPage.scss';

import { videoBase } from '../../test_storage/video_base.js';

export default function VideoPage() {
    const [curVid, setCurVid] = useState(videoBase[0].link);
    const [vidId, setVidId] = useState(videoBase[0].video_id);

    return (
        <SectionWrapper sectionId='video_page'>
            <h3 className='section_title'>Axelar video</h3>
            <div className='video_container'>
                <div className='video_container__viewer'>
                    <ReactPlayer url={curVid} width='100%' height='100%'/>
                </div>
                <VideoList setCurVid={setCurVid} vidId={vidId} setVidId={setVidId}/>
            </div>
        </SectionWrapper>
    );
}
