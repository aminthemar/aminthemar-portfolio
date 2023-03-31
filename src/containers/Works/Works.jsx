import { React, useState, useRef, useEffect } from 'react'
import { ImEye } from 'react-icons/im'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { images, works_data } from '../../constants';
import './Works.scss';
import { Link } from 'react-router-dom';

const categories = ['بازی', 'لوگو', 'وبسایت', 'پوستر'];

const Works = () => {
    const [activeCategory, setActiveCategory] = useState(1);
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [width, setWidth] = useState(0);
    const itemRef = useRef(null);

    useEffect(() => {
        setWidth(itemRef.current.scrollWidth - itemRef.current.offsetWidth - 2);
    }, [activeCategory]);

    function ActivateCategory(new_category_idx) {
        itemRef.current.childNodes[activeCategory].childNodes[0].className = "app__works-category-deactive";
        itemRef.current.childNodes[new_category_idx].childNodes[0].className = "app__works-category-active";
        setActiveCategory(new_category_idx);
    }

    function getLocalData(new_category_idx) {
        if (activeCategory === new_category_idx) return;

        ActivateCategory(new_category_idx);
        setLoading(true);

        works_data.getWorksbyCategory(categories[new_category_idx])
            .then(data => {
                setPortfolioItems(data.content);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(true);
            });
    }

    useEffect(() => {
        getLocalData(0);
    }, []);

    return (
        <div className='app__works'>
            <div className='app__works-head app__flex'>
                <div style={{ textAlign: 'center' }}>
                    <img src={images.botejeqe} alt='botejeqe' />
                    <h1 className='p-h1'>پروژه‌های من</h1>
                </div>
                <div className='app__works-categoryBox'>
                    <motion.ul
                        drag='x'
                        dragConstraints={{
                            right: width,
                            left: 0,
                        }}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 40 }}
                        dragElastic={0.1}
                        ref={itemRef}
                        className='app__flex-start'>
                        {categories.map((category_item, index) => (
                            <li className='p-text p-link' key={`category-${index}`}
                                onClick={() => getLocalData(index)}>
                                <p className='app__works-category-deactive'>{category_item}</p>
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </div>
            <div className='app__container section_pad'>
                <div className='app__flex app__works-warning'>
                    <AiOutlineInfoCircle />
                    <p className='p-text p-link'>برای آشنایی با پروژه‌های زیر روی آنها کلیک کنید.</p>
                </div>
                {loading
                    ? <img alt='loading'
                        src={images.loading}
                        className='app__flex app__loading' />
                    : <>
                        <ul className='app__works-portfolio'>
                            {portfolioItems.map((port_item, index) => (
                                <li key={`work-${index}`} className='app__cardcover'>
                                    <figure>
                                        <Link to={`/works/${port_item['id']}`} className='app__flex' rel="noopener noreferrer">
                                            <ImEye />
                                            <p className='p-title'>{port_item['title']}</p>
                                            <p className='p-small'>{port_item['company']}</p>
                                            <section>
                                                <p className='p-small p-link'>پروژه‌ی کامل</p>
                                            </section>
                                        </Link>
                                    </figure>
                                    <img src={port_item['logo']} alt={port_item['title']} />
                                </li>
                            ))}
                        </ul>
                    </>
                }
            </div>
        </div>
    )
}

export default Works