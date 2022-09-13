import { React, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router';
import { BsArrowRight, BsCameraVideo, BsPlusCircleFill } from 'react-icons/bs'
import { ImEye } from 'react-icons/im'

import { works_data } from '../../constants';
import './Project.scss';

const Project = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [work, setWork] = useState({});
    const [width, setWidth] = useState(0);
    const [moved, setMoved] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        works_data.getWorkbyId(id)
            .then(data => {
                setWork(data.content);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                updateWidth()
            }, 250);
        }
    }, [loading]);

    function updateWidth() {
        setWidth(itemRef.current.scrollWidth - itemRef.current.offsetWidth);
    }

    function toggleMoved(toggle) {
        setMoved(toggle);
    }

    function handleImageOpen(url) {
        if (!moved) {
            window.open(url, '_blank', 'location=yes,height=720,width=1280,scrollbars=yes,status=yes');
        }
    }

    return (
        <div className='app__project-header'>
            <div className='app__project app__flex-start app__container section_pad'>
                {(!loading &&
                    <>
                        <section>
                            <motion.div
                                initial={{ y: 60 }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4 }}
                                className='app__project-logo'>
                                <img src={work["logo"]} alt='project-logo' />

                                {(work["websiteurl"].length > 2) &&
                                    <a href={work["websiteurl"]}
                                        rel="external"
                                        className='app__flex link_icon-primary squishy'>
                                        <p className='p-text p-link'>نسخه‌ی لایو</p>
                                        <ImEye />
                                    </a>
                                }

                                <a href="/works"
                                    rel="next"
                                    className='app__flex'>
                                    <div className='app__flex-start link_icon app__project-back'>
                                        <BsArrowRight />
                                        <p className='p-text p-link'>بازگشت</p>
                                    </div>
                                    <p className='p-text'>{work["date"]}</p>
                                </a>
                            </motion.div>
                        </section>
                        <span>
                            <div className='app__flex-start app__project-stats'>
                                <div>
                                    <div className='app__flex-start'>
                                        <h1 className='p-h1'>{work["title"]}</h1>
                                        <p className='p-text app__project-category'>{work["category"]}</p>
                                    </div>
                                    <p className='p-title'>{work["company"]}</p>
                                </div>
                                <ul className='app__project-tags app__flex-start'>
                                    {work["tags"].map((tag_item, index) => (
                                        <li className='p-text' key={`tag-${index}`}>
                                            <p>{tag_item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className='app__project-logo'>
                                <img src={work["logo"]} alt='project-logo' />

                                {(work["websiteurl"].length > 2) &&
                                    <a href={work["websiteurl"]}
                                        rel="external"
                                        className='app__flex link_icon-primary squishy'>
                                        <p className='p-text p-link'>نسخه‌ی لایو</p>
                                        <ImEye />
                                    </a>
                                }

                                <a href="/works"
                                    rel="next"
                                    className='app__flex'>
                                    <div className='app__flex-start link_icon app__project-back'>
                                        <BsArrowRight />
                                        <p className='p-text p-link'>بازگشت</p>
                                    </div>
                                    <p className='p-text'>{work["date"]}</p>
                                </a>
                            </div>

                            <div className='app__project-contentbox'>
                                <p className='p-title'>توضیحات</p>
                                <p className='p-text'>{work["description"]}</p>
                            </div>
                            <div className='app__project-contentbox'>
                                <div className='app__flex-start app__project-title-icon'>
                                    <p className='p-title'>نگارخانه</p>
                                    <figure className='app__project-scroll-indicator' />
                                </div>

                                <div className='app__project-screenshots'>
                                    <motion.ul
                                        drag='x'
                                        dragConstraints={{
                                            right: width,
                                            left: 0,
                                        }}
                                        ref={itemRef}
                                        dragTransition={{ bounceStiffness: 600, bounceDamping: 40 }}
                                        dragElastic={0.1}
                                        onDragStart={updateWidth}
                                        onDrag={() => toggleMoved(true)}
                                        onMouseDown={() => toggleMoved(false)}
                                        className='app__flex-start'>
                                        {work["screenshots"].map((shot_item, index) => (
                                            <li key={`shot-${index}`} onClick={() => handleImageOpen(shot_item)}>
                                                <img src={shot_item} alt={`${work["title"]}-shot-${index}`} />
                                                <BsPlusCircleFill />
                                            </li>
                                        ))}
                                    </motion.ul>
                                </div>
                            </div>

                            {(work["aparatID"].length > 2) &&
                                <div className='app__project-contentbox'>
                                    <div className='app__flex-start app__project-title-icon'>
                                        <p className='p-title'>پیش‌نمایش</p>
                                        <figure><BsCameraVideo /></figure>
                                    </div>
                                    <div className="h_iframe-aparat_embed_frame">
                                        <span />
                                        <iframe src={`https://www.aparat.com/video/video/embed/videohash/${work["aparatID"]}/vt/frame`} allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true" />
                                    </div>
                                </div>
                            }
                        </span>
                    </>
                )}
            </div>
        </div>
    )
}

export default Project