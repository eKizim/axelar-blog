import React from 'react';
import ArrowsIcon from './../../images/arrows.png';
import './SectionButton.scss';

export default function SectionButton({buttonText}) {
	return (
		<a className="section_button" href="">
			<p>{buttonText}</p>
			<img src={ArrowsIcon} alt=""/>
		</a>
	)
}