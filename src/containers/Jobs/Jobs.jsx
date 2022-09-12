import { React, useState } from 'react'
import { motion } from 'framer-motion'

import './Jobs.scss'
import { SectionTitle } from '../../components'
import { AppWrap } from '../../wrapper'
import { images, jobs_data } from '../../constants';

const Jobs = () => {
    const [job_items, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    const getLocalData = () => {
        jobs_data.getJobsData(4)
            .then(data => {
                setJobs(data.content);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(true);
            });
    };

    return (
        <div className='app__jobs-laurier'>
            <div className='app__container section_pad'>

                <SectionTitle title="سابقه‌ی همکاری با ..."
                    decorations={false}
                    darkmode={true}
                    subtitle="سلام! در این بخش، نقش من را در برترین سازمان‌هایی که افتخار کار با آنها داشته‌ام، مشاهده می‌کنید. برای آشنایی با نمونه کارها به بازدید خود ادامه دهید." />

                {loading
                    ? <motion.img
                        src={images.loading}
                        onViewportEnter={getLocalData}
                        className='app__flex app__loading' />
                    : <ul className='app__jobs'>
                        {job_items.map((job_item, index) => (
                            <motion.li
                                initial={{ y: 60, opacity: 0.2 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.7 }}
                                transition={{ duration: 0.3, delay: (index / 10), ease: 'easeOut' }}
                                key={`job-${index}`}
                            >
                                <a href={`${job_item.websiteurl}`}
                                    target="_blank" rel="noreferrer">
                                    <span className='app__flex'>
                                        <div className='app__jobs-span'></div>
                                        <img src={job_item.logo} alt={`job-${index}`} />
                                        <div className='app__yeartag-dark p-text'>{job_item.months} ماه</div>
                                    </span>
                                    <p className='p-title'>{job_item.company}</p>
                                    <p className='p-text'>{job_item.role}</p>
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                }

            </div>

            <div className='app__jobs-mandala' />
            {/* <img src={images.mandala} alt="background-mandala" />
            </div> */}
        </div>
    )
}

export default AppWrap(Jobs, 'jobs')