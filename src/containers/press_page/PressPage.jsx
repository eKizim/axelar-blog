import React from 'react';
import SectionWrapper from '../../components/section_wrapper/SectionWrapper.jsx';
import PressUnit from '../../components/press_unit/PressUnit.jsx';
import './PressPage.scss';

import {pressBase} from '../../test_storage/press_examples.jsx';

export default function PressPage() {
    const renderPress = pressBase.map(el => (
        <PressUnit
            key={el.press_id}
            img={el.img}
            date={el.date}
            title={el.title}
            link={el.link}
        />)
    );

    return (
        <SectionWrapper secrionId="press_page">
            <h3 className="section_title">Press mentions</h3>
            <div className="press_page__container">
                {renderPress}
            </div>
        </SectionWrapper>
    );
};
