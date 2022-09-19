import { React, useRef, useState, useEffect } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { motion } from 'framer-motion';

import './Edu.scss';
import { SectionTitle, EduItem } from '../../components'
import { AppWrap } from '../../wrapper';
import { images, edus_data } from '../../constants';

const Edu = () => {

  const first_items = 2;
  const [itemheight, setHeight] = useState("1px");
  const [hide, setHide] = useState(true);
  const itemRef = useRef(null);

  const [edu_items, setEdus] = useState([]);
  const [loading, setLoading] = useState(true);

  const getLocalData = () => {
    edus_data.getEdusData()
      .then(data => {
        setEdus(data.content);
        setLoading(false);
        setTimeout(() => calcHeight(first_items), 1000);
      })
      .catch(err => {
        console.error(err);
        setLoading(true);
      });
  };

  function calcHeight(n_items) {
    let sum_height = 0;
    for (let index = 0; index < n_items; index++) {
      sum_height += itemRef.current.childNodes[index].offsetHeight;
    }
    setHeight((sum_height - 2).toString() + "px");
  }

  function toggleItemsShowHide() {
    let show_items = first_items;
    if (hide) {
      show_items = edu_items.length;
    }
    calcHeight(show_items);
    setHide(!hide);
  }

  return (
    <div className='app__edu-bg'>
      <div className='app__edu app__container' >

        <span style={{ right: 0, transform: "scaleX(-1)" }}><img src={images.pillarTop} /></span>
        <span style={{ left: 0 }}><img src={images.pillarTop} /></span>

        <div className='section_pad'>
          <SectionTitle title="تحصیلات و دستاوردهای پژوهشی" />

          {loading
            ? <motion.img
              src={images.loading}
              onViewportEnter={getLocalData}
              className='app__flex app__loading' />
            : <><motion.ul
              whileInView={{ y: 0, margin: 1 }}
              viewport={{ once: true }}
              // onAnimationStart={initializeItems}
              className='app__edu-timeline'
              ref={itemRef}
              style={{ height: `${itemheight}` }}>
              {edu_items.map((item) => (
                <li key={`edu-${item.title}`}>
                  <EduItem edu_data={item} />
                </li>
              ))}
            </motion.ul>

              {hide ?
                <a onClick={toggleItemsShowHide}
                  className='app__flex app__edu-link_icon link_icon link_icon-primary'>
                  <p className='p-text p-link'>نمایش همه ({edu_items.length - first_items})</p>
                  <MdKeyboardArrowDown /></a>
                : <a onClick={toggleItemsShowHide}
                  className='app__flex app__edu-link_icon link_icon link_icon-primary'>
                  <p className='p-text p-link'>مخفی کن</p>
                  <MdKeyboardArrowUp /></a>
              }</>
          }
        </div>
      </div>
    </div>
  )
}

export default AppWrap(Edu, 'edu')