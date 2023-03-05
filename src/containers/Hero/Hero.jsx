import React from 'react';
import { motion } from 'framer-motion';
import { MdArrowDownward, MdOutlineInsertDriveFile } from 'react-icons/md';
import { IoBalloonSharp } from 'react-icons/io5';
import { FaHardHat } from 'react-icons/fa';

import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import { PrimaryButton, SecondaryButton } from '../../components';
import './Hero.scss';

const Hero = () => {
  return (
    <div className='app__hero-bg app__flex-start'>

      <section />

      <div className='app__container section_pad'>
        <div className='app__hero'>

          <span
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // viewport={{ once: true }}
          // transition={{ duration: 3, ease: 'easeInOut' }}
          ><img src={images.parche} alt="persian calligraphy" /></span>

          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
            className='app__hero-h1'>
            {/* در همه چیزی هنر و عِیب هست <br /> عیب مَبین تا هنر آری به دست */}
            {/* من به صفت چون مَه گردون شوَم<br />نشکنم، اَر بشکنم افزون شوَم */}
            {/* رَقص و جولان بر سرِ میدان کنند <br /> رقص اَندر خون خود، مَردان کنند */}
            چون جَهَند از دست خود، دَستی زنند <br /> چون رَهند از نقص خود، رقصی کنند
          </motion.h1>

          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
            className='app__hero-profile'>
            <img src={images.selfie_1} alt='mohammad_amin_rashid' />

            <div className='app__hero-asl'>
              <div>
                <div className='p-title'>محمدامین رشید</div>

                <div className='app__flex-start app__hero-location'>
                  <div className='app__flex-start'>
                    <IoBalloonSharp />
                    <p className='p-text p-link'>خرداد 1376</p>
                  </div>
                  <div className='app__flex-start'>
                    <FaHardHat />
                    <p className='p-text p-link'>معافیت تحصیلی</p>
                  </div>
                </div>

              </div>

              <ul>
                {
                  ['کارشناس ارشد فناوری اطلاعات',
                    'برنامه‌نویس یونیتی',
                    'مهندس UI/UX',
                    'طراح لوگو و برند دیجیتال'].map((item) => (
                      <li className='p-text' key={item}>{item}</li>
                    ))
                }
              </ul>
            </div>

          </motion.div>

          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
            className='app__flex-start app__hero-buttons-parent'>
            <PrimaryButton text='پیشینه‌ی من' btn_icon={MdArrowDownward} href="#jobs" />
            <SecondaryButton text='دانلود رزومه' btn_icon={MdOutlineInsertDriveFile}
              href={require("../../assets/MohammadAminRashidCV.pdf")} />
          </motion.div>

        </div>

      </div>

    </div>
  )
}

export default AppWrap(Hero, 'home')