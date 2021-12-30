import React from 'react';
import SectionTitle from '../../../components/section_title/SectionTitle.jsx';
import PressImg_1 from '../../../images/press_img.png';
import PressImg_2 from '../../../images/press_img_2.png';
import PressImg_3 from '../../../images/press_img_3.png';
import PressImg_4 from '../../../images/press_img_4.png';
import './PressSection.scss';

export default function PressSection() {
	let posts = [<PressUnit img={PressImg_1}/>, <PressUnit img={PressImg_2}/>, <PressUnit img={PressImg_3}/>, <PressUnit img={PressImg_4}/>]
	return (
		<section id="press_section">
			<SectionTitle title="Press" buttonText="Read all publications"/>
			<div className="press_section__container">
				{posts}
			</div>
		</section>
	);
};

function PressUnit({img}) {
	return (
		<div className="press_unit">
			<div className="press_unit__head">
				<img className="press_unit__head-img" src={img} alt=""/>
				<p className="press_unit__head-date">31.12.2021</p>
			</div>
			<a href="#">The stablecoin boom won’t continue without decentralized interoperability</a>
		</div>
	);
};