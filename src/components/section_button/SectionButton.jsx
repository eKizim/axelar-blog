import React from 'react';
import { Link } from 'react-router-dom';
import ArrowsIcon from './../../images/arrows.png';
import './SectionButton.scss';

export default function SectionButton({ buttonText, link }) {
    return (
        <Link className='section_button' to={link ? link : ''}>
            <p>{buttonText}</p>
            <img src={ArrowsIcon} alt='' />
        </Link>
    );
}
