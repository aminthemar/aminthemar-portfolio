import React from 'react'

import './SectionTitle.scss';
import { images } from '../../constants/'

const SectionTitle = ({ title, darkmode = false, decorations = true, subtitle = null }) => {
    return (
        <div className={`section__title ${darkmode ? 'section__title-dark' : ''}`}>
            {decorations && (
                <img src={images.botejeqe} alt='heading_top' />
            )}
            <h1 className='p-h1'>{title}</h1>
            {subtitle != null && (
                <p className='p-text'>{subtitle}</p>
            )}
        </div>
    )
}

export default SectionTitle