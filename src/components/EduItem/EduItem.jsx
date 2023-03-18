import React, { useState, useRef } from 'react';
import { AiOutlineLink } from 'react-icons/ai';

// import { motion } from 'framer-motion';
import './EduItem.scss';

const EduItem = ({ edu_data }) => {

    // const [isActive, setActive] = useState(false);

    // const onComplete = () => {
    //     setActive(true);
    // };

    return (
        <div className='edu__item'>
            <span>
                <p className='p-title'>{edu_data.title}</p>
                <div className='app__edu-grade app__flex-start'>
                    <p className='p-small'>نمره: {edu_data.grade}</p>
                    ·
                    <p className='p-small'>رتبه: {edu_data.rank}</p>
                </div>
                <p className='p-text'>{edu_data.description}</p>
                <a href={edu_data.websiteurl} key={`edu-${edu_data.websiteurl}`}
                    target="_blank" rel="noreferrer" className='app__flex-start'>
                    <div className='app__edu-external app__flex'>
                        <p className='p-text p-link'>{edu_data.place}</p>
                        <AiOutlineLink />
                    </div>
                </a>
            </span>
            <section className='app__edu-card'>
                <img src={edu_data.logo} alt={edu_data.place} />
                <p className='p-text app__yeartag'>{edu_data.yearend} - {edu_data.yearstart}</p>
            </section>
        </div>
    )
}

export default EduItem