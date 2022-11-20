import { React, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight, BsCameraVideo, BsPlusCircleFill } from 'react-icons/bs'
import { ImEye, ImFileText2 } from 'react-icons/im'

import { works_data } from '../../constants';
import './Project.scss';
import { Link } from 'react-router-dom';

const Project = ({ id }) => {
    const [loading, setLoading] = useState(true);
    const [work, setWork] = useState({});
    const [width, setWidth] = useState(250);
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
    }, [id]);

    useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                updateWidth();
            }, 500);
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
                            <div className='app__project-logo'>
                                <img src={work["logo"]} alt='project-logo'
                                    style={{ backgroundColor: work["color"] }}
                                />

                                <div className='app__flex-end'>
                                    {(work["websiteurl"].length > 2) &&
                                        <a href={work["websiteurl"]}
                                            rel="external"
                                            target='_blank'
                                            className='app__flex link_icon-primary squishy'
                                            style={{ backgroundColor: work["color"] }}>
                                            <p className='p-text p-link'>نسخه‌ی لایو</p>
                                            <ImEye />
                                        </a>
                                    }

                                    <Link to="/works"
                                        rel="noopener noreferrer"
                                        className='app__flex squishy'>
                                        <div className='app__flex-start link_icon app__project-back'>
                                            <BsArrowRight />
                                            <p className='p-text p-link'>همه پروژه‌ها</p>
                                        </div>
                                        <p className='p-text'>{work["date"]}</p>
                                    </Link>
                                </div>

                            </div>
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
                                <img src={work["logo"]} alt='project-logo'
                                    style={{ backgroundColor: work["color"] }}
                                />

                                <div className='app__flex-end'>
                                    {(work["websiteurl"].length > 2) &&
                                        <a href={work["websiteurl"]}
                                            rel="external"
                                            target='_blank'
                                            className='app__flex link_icon-primary squishy'
                                            style={{ backgroundColor: work["color"] }}>
                                            <p className='p-text p-link'>نسخه‌ی لایو</p>
                                            <ImEye />
                                        </a>
                                    }

                                    <Link to="/works"
                                        rel="noopener noreferrer"
                                        className='app__flex squishy'>
                                        <div className='app__flex-start link_icon app__project-back'>
                                            <BsArrowRight />
                                            <p className='p-text p-link'>همه پروژه‌ها</p>
                                        </div>
                                        <p className='p-text'>{work["date"]}</p>
                                    </Link>
                                </div>

                            </div>

                            <div className='app__project-infosection'>

                                <div className='app__project-contentbox'>
                                    <div className='app__flex-start app__project-title-icon'>
                                        <p className='p-title'>توضیحات</p>
                                        <figure><ImFileText2 /></figure>
                                    </div>
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

                            </div>
                        </span>
                    </>
                )}
            </div>
        </div>
    )
}

export default Project