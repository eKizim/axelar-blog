import React from 'react';
import './SectionWrapper.scss';

export default function SectionWrapper({ sectionId, children }) {
    return (
        <section id={sectionId} className={`section_wrapper`}>
            { children }
        </section>
    )
}
