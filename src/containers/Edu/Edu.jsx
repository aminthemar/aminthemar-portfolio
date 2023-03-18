import { React, useRef, useState, useEffect } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { motion } from 'framer-motion';

import './Edu.scss';
import { SectionTitle, EduItem } from '../../components'
import { AppWrap } from '../../wrapper';
import { images, edus_data } from '../../constants';

const Edu = () => {

  const first_items = 2;
  const [itemheight, setHeight] = useState("0px");
  const [hide, setHide] = useState(true);
  const itemRef = useRef(null);

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

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        calcHeight(first_items);
      }, 1500);
    }
  }, [loading])

  useEffect(() => {
    if (!loading) {
      window.addEventListener('resize', resizeEdusWithWindow)
      return () => window.removeEventListener('resize', resizeEdusWithWindow);
    }
  }, [hide, loading])

  const calcHeight = (n_items) => {
    let sum_height = -1;
    for (let index = 0; index < n_items; index++) {
      sum_height += itemRef.current.childNodes[index].scrollHeight;
    }

    let first_child = itemRef.current.childNodes[0];
    if (first_child != null) {
      sum_height += n_items * parseInt(window.getComputedStyle(first_child).getPropertyValue('margin-bottom'));
    }

    setHeight((sum_height - 2).toString() + "px");
  };

  const toggleItemsShowHide = () => {
    if (hide) {
      setHide(false);
      calcHeight(edu_items.length);
    } else {
      setHide(true);
      calcHeight(first_items);
    }
  };

  const resizeEdusWithWindow = () => {
    if (hide) {
      calcHeight(first_items)
    } else {
      calcHeight(edu_items.length)
    }
  };

  return (
    <div className='app__bg-persian'>
      <div className='app__edu app__container' >
        <div className='section_pad'>
          <SectionTitle title="تحصیلات و دستاوردهای پژوهشی" />

          {loading
            ? <motion.img
              src={images.loading}
              onViewportEnter={getLocalData}
              className='app__flex app__loading' />
            : <><motion.ul
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              // onAnimationStart={initializeItems}
              className='app__edu-timeline'
              ref={itemRef}
              style={{ height: `${itemheight}` }}>
              {edu_items.map((item) => (
                <EduItem edu_data={item} key={`edu-${item.title}`} />
              ))}
            </motion.ul>

              <div className='link_icon-primary'>
                {hide ?
                  <a onClick={toggleItemsShowHide}
                    className='app__flex app__edu-link_icon link_icon'>
                    <p className='p-text p-link'>نمایش بیشتر ({edu_items.length - first_items})</p>
                    <MdKeyboardArrowDown /></a>
                  : <a onClick={toggleItemsShowHide}
                    className='app__flex app__edu-link_icon link_icon'>
                    <p className='p-text p-link'>مخفی کن</p>
                    <MdKeyboardArrowUp /></a>
                }
              </div>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default AppWrap(Edu, 'edu')