import React from 'react';
import SectionTitle from '../../../components/section_title/SectionTitle.jsx';
import PressUnit from '../../../components/press_unit/PressUnit.jsx';
import './PressSection.scss';

import { pressBase } from '../../../test_storage/press_examples.js';

export default function PressSection() {
    const renderPress = pressBase.slice(0, 4).map(el => (
        <PressUnit
            key={el.press_id}
            img={el.img}
            date={el.date}
            title={el.title}
        />
    ));

    return (
        <section id='press_section'>
            <SectionTitle title='Last press mentions' buttonText='Read all publications'/>
            <div className='press_section__container'>
                {renderPress}
            </div>
        </section>
    );
}
