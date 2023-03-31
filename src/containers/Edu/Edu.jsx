import { React, useRef, useState, useEffect } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { motion } from 'framer-motion';

import './Edu.scss';
import { SectionTitle, EduItem } from '../../components'
import { AppWrap } from '../../wrapper';
import { images, edus_data } from '../../constants';

const Edu = () => {

  const first_items = 2;
  const [hide, setHide] = useState(true);
  const [edu_items, setEdus] = useState([]);
  const [loading, setLoading] = useState(true);

  const getLocalData = () => {
    edus_data.getEdusData()
      .then(data => {
        setEdus(data.content);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const toggleItemsShowHide = () => {
    setHide(!hide);
  };

  return (
    <div className='app__bg-persian'>
      <div className='app__container section_pad' >
        <SectionTitle title="تحصیلات و دستاوردهای پژوهشی" />

        {loading
          ?
          <motion.img src={images.loading}
            onViewportEnter={getLocalData}
            className='app__flex app__loading' />
          :
          <>
            <ul className='app__edu-timeline'>
              {edu_items.slice(0, first_items).map((item) => (
                <EduItem edu_data={item} key={`edu-${item.title}`} />
              ))}
            </ul>

            <motion.ul
              initial={{ height: "0" }}
              animate={{ height: hide ? "0" : "100%" }}
              className='app__edu-timeline'>
              {edu_items.slice(first_items, edu_items.length).map((item) => (
                <EduItem edu_data={item} key={`edu-${item.title}`} />
              ))}
            </motion.ul>

            <div className='app__flex app__edu-link_icon'>
              {hide
                ?
                <a onClick={toggleItemsShowHide}>
                  <div className='app__flex link_icon link_icon-lightmode'>
                    <p className='p-text p-link'>نمایش بیشتر ({edu_items.length - first_items})</p>
                    <MdKeyboardArrowDown />
                  </div>
                </a>
                :
                <a onClick={toggleItemsShowHide}>
                  <div className='app__flex link_icon link_icon-lightmode'>
                    <p className='p-text p-link'>مخفی کن</p>
                    <MdKeyboardArrowUp />
                  </div>
                </a>
              }
            </div>
          </>
        }
      </div>
    </div >
  )
}

export default AppWrap(Edu, 'edu')