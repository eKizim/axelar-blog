import React from 'react';
import ReactPlayer from 'react-player/youtube';
import SectionTitle from './../../../../components/section_title/SectionTitle.jsx';
import './VideoSection.scss';

export default function VideoSection() {
	return (
		<section id="video_section">
			<SectionTitle title="Video" buttonText="Watch all video" link="/video"/>
			<div className="video_section__container">
				<div className="video_elem">
					<ReactPlayer url="https://www.youtube.com/watch?v=9EBCZJk1aTA" width="100%" height="100%"/>
				</div>
				<div className="video_elem">
					<ReactPlayer url="https://www.youtube.com/watch?v=9EBCZJk1aTA" width="100%" height="100%"/>
				</div>
				<div className="video_elem">
					<ReactPlayer url="https://www.youtube.com/watch?v=9EBCZJk1aTA" width="100%" height="100%"/>
				</div>
			</div>
		</section>
	);
};