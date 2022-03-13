import React, { useState } from 'react';
import SectionWrapper from '../../components/section_wrapper/SectionWrapper.jsx';
import NewsViewer from '../../components/news_viewer/NewsViewer.jsx';
import NewsList from '../../components/news_list/NewsList.jsx';
import './NewsPage.scss';

export default function NewsPage() {
    const [curId, setCurId] = useState();

    return (
        <SectionWrapper sectionId='news_page'>
            <h3 className='section_title'>News</h3>
            <div className='news_container'>
                <NewsViewer setCurId={setCurId} />
                <NewsList curId={curId} />
            </div>
        </SectionWrapper>
    );
}
