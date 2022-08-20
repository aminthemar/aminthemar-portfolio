import React, { useState, useEffect } from 'react';
import { MdMenu, MdOutlineClear, MdHome } from 'react-icons/md';
import { RiLinkedinBoxFill, RiTelegramFill, RiMailFill, RiWhatsappFill } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

// import { images } from '../../constants';
import './Navbar.scss';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const Navbar = () => {

  const [styleClass, setStyleClass] = useState('-dark');

  useEffect(() => {
    const updateHiding = () => {
      if (window.pageYOffset < 1400) {
        setStyleClass('-dark');
      } else {
        setStyleClass('-light');
      }
    }

    updateHiding();
    window.addEventListener("scroll", updateHiding);
    return () => window.removeEventListener("scroll", updateHiding);

  }, []);

  const [toggle, setToggle] = useState(false);

  return (
    <div className={'app__navbar-box' + styleClass}>
      <nav className='app__navbar'>

        <a href="" className='app__navbar-home app__flex-start squishy'>
          <MdHome alt="خانه" />
          <p>خانه</p>
        </a>

        <ul className='app__navbar-links'>
          {[['jobs', 'سوابق'],
          ['edu', 'آموزشی'],
          ['program', 'پروژه‌های من'],
          ['contacts', 'تماس‌ها'],].map((item) => (
            <li className='app__flex p-text p-link' key={`link-${item[0]}`}>
              <a href={`#${item[0]}`}>{item[1]}</a>
            </li>
          ))}
        </ul>

        <div className='app__navbar-menu'>
          <span className={'app__navbar-burger app__navbar-burger' + styleClass + ' squishy'}
            onClick={() => setToggle(true)}><MdMenu /></span>

          <AnimatePresence>
            {toggle && (
              <>
                <motion.canvas
                  key="canvas"
                  transition={{ duration: 0.4 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 10 }}
                  exit={{ scale: [5, 0] }}
                />

                <motion.section
                  key="menu"
                  transition={{ duration: 0.3, delay: 0.3 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: [1, 0], transition: { duration: 0.1, delay: 0 } }}
                  onClick={() => setToggle(false)}
                >
                  <MdOutlineClear />
                  <ul>
                    {[['', 'خانه'],
                    ['jobs', 'سوابق'],
                    ['edu', 'آموزشی'],
                    ['program', 'پروژه‌های من'],
                    ['contacts', 'تماس‌ها'],].map((item) => (
                      <li key={`link-${item[0]}`}>
                        <a href={`#${item[0]}`}>{item[1]}</a>
                      </li>
                    ))}
                  </ul>
                  <div className='app__flex app__navbar-social'>
                    <a href="mailto:aminthemar@hotmail.com" target="_blank" rel="external"><RiMailFill /></a>
                    <a href="https://www.linkedin.com/in/aminthemar" target="_blank" rel="external"><RiLinkedinBoxFill /></a>
                    <a href="https://wa.me/qr/L4I2UEGCSLS4N1" target="_blank" rel="external"><RiWhatsappFill /></a>
                    <a href="https://t.me/aminthemar" target="_blank" rel="external"><RiTelegramFill /></a>
                  </div>
                </motion.section>
              </>
            )}
          </AnimatePresence>

        </div>

        <a href='#contacts' className={'squishy app__navbar-logo' + styleClass}>
          {/* <img src={images.irflag} alt="Iran" /> */}
          <p className='p-text p-link'>ثبت همکاری</p>
        </a>

      </nav >
    </div >
  )
}

export default Navbar