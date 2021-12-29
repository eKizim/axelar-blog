import React from 'react';
import SectionTitle from './../../../../components/section_title/SectionTitle.jsx';
import './VideoSection.scss';

export default function VideoSection() {
	return (
		<section id="video_section">
			<SectionTitle title="Videos" buttonText="Watch all videos"/>
			<div className="video_section__container">
				<div className="video_elem"></div>
				<div className="video_elem"></div>
			</div>
		</section>
	);
};