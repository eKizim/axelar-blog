import React from 'react';
import ReactPlayer from 'react-player/youtube';
import SectionTitle from '../../../components/section_title/SectionTitle.jsx';
import './VideoSection.scss';

import { videoBase } from '../../../test_storage/video_base.js';

export default function VideoSection() {
    const renderVideo = videoBase.slice(0, 2).map(el => (
        <div className='video_elem' key={el.link}>
            <ReactPlayer
                url={el.link}
                width='100%'
                height='100%'
            />
        </div>
    ));

    return (
        <section id='video_section'>
            <SectionTitle title='Video' buttonText='Watch all video' link='/video'/>
            <div className='video_section__container'>
                {renderVideo}
            </div>
        </section>
    );
}
