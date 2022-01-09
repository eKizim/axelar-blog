import React from 'react';
import './PressUnit.scss';

export default function PressUnit({img, title, date, link}) {
    return (
        <a className="press_unit" href={link}>
            <div className="press_unit__head">
              <img className="press_unit__head-img" src={img} alt=""/>
              <p className="press_unit__head-date">{date}</p>
            </div>
            <p className="press_unit__title">{title}</p>
        </a>
    );
};
