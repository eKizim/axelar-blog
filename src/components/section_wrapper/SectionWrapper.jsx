import React, { useState, useEffect } from 'react';
import './SectionWrapper.scss';

export default function SectionWrapper({ sectionId, children }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => setLoaded(true), []);

    return (
        <section id={sectionId} className={`section_wrapper ${loaded && "loaded"}`}>
            { children }
        </section>
    )
}

