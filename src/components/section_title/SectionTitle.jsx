import React from 'react';
import SectionButton from './../section_button/SectionButton.jsx';
import './SectionTitle.scss';

export default function SectionTitle({title, buttonText, link}) {
	return (
		<div className="blog_section__title">
			<h4>{title}</h4>
			<SectionButton buttonText={buttonText} link={link}/>
		</div>
	)
}