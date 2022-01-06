import React from 'react';
import './NewsItem.scss';

import ImagePlaceholder from '../../images/blog_post_img.png';

export default function NewsItem() {
    return (
        <div className="news_item">
            <a className="news_item__title" href="#">Axelar Announces Strategic Investment from Crypto.com Capital</a>
            <p>November 23, 2021</p>
        </div>
    );
};
