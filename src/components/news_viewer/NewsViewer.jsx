import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './NewsViewer.scss';

import { newsBase } from '../../test_storage/news_examples';

export default function NewsViewer({ setCurId }) {
    const [viewerBody, setViewerBody] = useState();
    const params = useParams();
    const currentItem = params.invoiceId ? newsBase.find(el => el.news_item_id === params.invoiceId.split('_')[0]) : newsBase[0];

    useEffect(() => {
        setViewerBody(currentItem.body);
        setCurId(currentItem.news_item_id);
    });

    const setBodyHTML = () => {
        return {__html: viewerBody};
    };

    return (
        <article className='news_viewer' data-current-item={currentItem.news_item_id}>
            <p className='news_viewer__date'>{currentItem.date}</p>
            <h5 className='news_viewer__title'>{currentItem.title}</h5>
            <div className='news_viewer__body' dangerouslySetInnerHTML={setBodyHTML()}></div>
        </article>
    );
}
