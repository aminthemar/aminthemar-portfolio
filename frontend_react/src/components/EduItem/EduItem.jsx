import React, { useState, useRef } from 'react';
import { AiOutlineLink } from 'react-icons/ai';

import { motion } from 'framer-motion';
import './EduItem.scss';

const EduItem = ({ edu_data }) => {

    const [isActive, setActive] = useState(false);
    const edu_item = useRef(null);

    const onComplete = () => {
        setActive(true);
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.3 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0.2, y: 30 }
            }}
            onAnimationComplete={onComplete}
            ref={edu_item}
            className={`edu__item ${isActive ? "line-draw-down" : ""}`}>
            <span>
                <p className='p-title' style={{ marginTop: '-0.4em' }}>{edu_data.title}</p>
                <div className='app__edu-grade app__flex-start'>
                    <p className='p-small'>معدل: {edu_data.grade}</p>
                    <p className='p-small'>رتبه: {edu_data.rank}</p>
                </div>
                <p className='p-text'>{edu_data.description}</p>
                <a href={edu_data.websiteurl} key={`edu-${edu_data.websiteurl}`}
                    target="_blank" rel="external" className='app__flex-start'>
                    <div className='app__edu-external app__flex'>
                        <p className='p-text p-link'>{edu_data.place}</p>
                        <AiOutlineLink />
                    </div>
                </a>
            </span>
            <section className='app__edu-card lifty'>
                <img src={edu_data.logo} alt={edu_data.place} />
                <p className='p-text app__yeartag'>{edu_data.yearend} - {edu_data.yearstart}</p>
                {/* <div className='app__edu-external'>
                        <div className='app__flex-start'>
                            <p className='p-text p-link'>{edu_data.place}</p>
                            <AiOutlineLink />
                        </div>
                    </div> */}
            </section>
        </motion.div>
    )
}

export default EduItem