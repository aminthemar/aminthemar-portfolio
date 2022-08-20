import { React, useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BsFillPlayCircleFill, BsArrowLeft, BsFillPersonFill } from 'react-icons/bs'

import './Unity.scss';
import { images } from '../../constants';
import { videos } from '../../constants';

const unity_thumbs = [
  [images.unity_1, 'https://www.aparat.com/v/yM30E?playlist=1214480'],
  [images.unity_2, 'https://www.aparat.com/v/9hUJB?playlist=1214480'],
  [images.unity_3, 'https://www.aparat.com/v/cQpuG?playlist=1214480'],
  [images.unity_4, 'https://www.aparat.com/v/1HF0R?playlist=1214480'],
  [images.unity_5, 'https://www.aparat.com/v/qCYXw?playlist=1214480'],
  [images.unity_6, 'https://www.aparat.com/v/qCYXw?playlist=1214480'],
  [images.unity_7, 'https://www.aparat.com/playlist/1214480']
]

const Unity = () => {
  const [width, setWidth] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth - 16);
  });

  let moved = false;
  let moveListener = () => {
    moved = true;
  };

  function handleDrag() {
    setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth - 16);
    document.addEventListener('mousemove', moveListener);
    // console.log("clicked");
  }

  function handleSwipe() {
    setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth - 16);
    document.addEventListener('touchmove', moveListener);
    // console.log("touched");
  }

  function handleSubmit(url) {
    document.removeEventListener('mousemove', moveListener);
    if (!moved) {
      window.open(url, '_blank', 'location=yes,height=720,width=1280,scrollbars=yes,status=yes');
    }
    moved = false;
    // console.log("click up");
  }

  function handleSubmitTouch(url) {
    document.addEventListener('touchmove', moveListener);
    moved = false;
    // console.log("touch up");
  }

  return (
    <div className='app__unity-bg'>

      <motion.video
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        autoPlay muted loop className='app__unity-video'>
        <source src={videos.unity_vid} type="video/mp4" />
      </motion.video>

      <span />

      <div className='app__flex-start'>
        <div className='app__unity section_pad'>

          <div className='app__unity-header'>
            <div>
              <h2 className='p-h2'>مجموعه‌ی آموزشی ساخت بازی اندروید با یونیتی</h2>
              <span className='app__flex-start'>

                <a href="https://www.aparat.com/AminTheMar"
                  target="_blank" rel="external"
                  className='app__flex-start app__unity-teacher button_icon squishy'>
                  <BsFillPersonFill />
                  <p className='p-text p-link'>مدرس . محمدامین رشید</p>
                </a>
                <p className='p-text'>رایگان</p>
              </span>
              <p className='p-text'>
                یادگیری کار با موتور بازی‌سازی یونیتی بسیار ساده و لذت‌بخش است! در این مجموعه‌ی آموزشی به طراحی، برنامه‌نویسی و عرضه‌ی نهایی یک بازی ساده‌ی اندرویدی  می‌پردازیم.
              </p>
            </div>
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.3 }}
              src={images.unity_logo} alt={'unity-logo'} />
          </div>

          <motion.ul
            drag='x'
            dragConstraints={{
              right: width,
              left: 0,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 40 }}
            dragElastic={0.1}
            ref={sliderRef}
            onMouseDown={handleDrag}
            onTouchStart={handleSwipe}
            className='app__flex-start app__unity-slider'>

            {unity_thumbs.map((item, index) => (
              <li key={`unity-${index}`}>
                <section onTouchEnd={() => handleSubmitTouch(item[1])} onMouseUp={() => handleSubmit(item[1])}>
                  <img src={item[0]} alt={`unity-tutorial-${index}`} />
                  <BsFillPlayCircleFill className='app__unity-playbutton' />
                </section>
              </li>
            ))}

          </motion.ul>

          <a href="https://www.aparat.com/playlist/1214480"
            target="_blank" rel="next"
            className='app__flex-start link_icon link_icon-secondary'>
            <p className='p-text p-link'>مشاهده همه</p>
            <BsArrowLeft />
          </a>
        </div>
      </div>

    </div >
  )
}

export default Unity