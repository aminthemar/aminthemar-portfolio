import React, { useState, useEffect, useRef } from 'react';
import { MdMenu, MdOutlineClear, MdHome } from 'react-icons/md';
import { RiLinkedinBoxFill, RiTelegramFill, RiMailFill, RiWhatsappFill } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

// import { images } from '../../constants';
import './Navbar.scss';

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },
// }

const Navbar = ({ options = false }) => {

  const [styleClass, setStyleClass] = useState('-dark');
  const [toggle, setToggle] = useState(false);
  const navElements = useRef([]);
  const [currentNav, setCurrentNav] = useState(-1);
  const navRef = useRef(null);

  useEffect(() => {
    if (!options) {
      navElements.current[0] = document.getElementById("contacts");
      return;
    } console.log("h")

    const ids = ['jobs', 'edu', 'program', 'contacts'];
    for (let index = 0; index < ids.length; index++) {
      navElements.current[index] = document.getElementById(ids[index]);
    }
    setCurrentNav(navElements.current.length - 1);
  }, [options]);

  useEffect(() => {
    const updateHiding = () => {
      if (window.pageYOffset < navElements.current[0].offsetTop) {
        setStyleClass('-dark');
      } else {
        setStyleClass('-light');
      }
    }

    const updateNavHighlights = () => {
      for (let index = 0; index < navElements.current.length; index++) {
        if ((navElements.current[index].offsetTop - 200 < window.pageYOffset) && (navElements.current[index].offsetHeight + navElements.current[index].offsetTop - 200 > window.pageYOffset)) {
          if (index !== currentNav) {
            navRef.current.childNodes[index].className = "p-text p-link app__navbar-navitem-active";
            navRef.current.childNodes[currentNav].className = "p-text p-link";
            setCurrentNav(index);
          }
          return;
        }
      }

      navRef.current.childNodes[currentNav].className = "p-text p-link";
      setCurrentNav(navElements.current.length - 1);
    }

    window.addEventListener("scroll", updateHiding);
    if (options) window.addEventListener("scroll", updateNavHighlights);

    return () => {
      window.removeEventListener("scroll", updateHiding);
      if (options) window.removeEventListener("scroll", updateNavHighlights);
    }
  }, [currentNav]);


  return (
    <div className={'app__navbar-box' + styleClass}>
      <nav className='app__navbar'>

        <a href="/" className='app__navbar-home app__flex-start squishy'>
          <MdHome alt="خانه" />
          <p>خانه</p>
        </a>

        {options &&
          <ul ref={navRef} className='app__flex app__navbar-links'>
            {[['jobs', 'سوابق'],
            ['edu', 'آموزشی'],
            ['program', 'پروژه‌های من'],
            ['contacts', 'تماس‌ها'],].map((item) => (
              <li className='p-text p-link' key={`link-${item[0]}`}>
                <a href={`#${item[0]}`}>{item[1]}</a>
              </li>
            ))}
          </ul>
        }

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

                  {options
                    ? <ul>
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
                    : <ul>
                      <li key='link-home'>
                        <a href='/'>خانه</a>
                      </li>
                      <li key='link-works'>
                        <a href='/works'>پروژه‌های من</a>
                      </li>
                      <li key='link-fonts'>
                        <a href='https://rastikerdar.github.io/vazirmatn/'>فونت وزیر</a>
                      </li>
                    </ul>}

                  <div className='app__flex app__navbar-social'>
                    <a href="mailto:aminthemar@hotmail.com" target="_blank" rel="noreferrer"><RiMailFill /></a>
                    <a href="https://www.linkedin.com/in/aminthemar" target="_blank" rel="noreferrer"><RiLinkedinBoxFill /></a>
                    <a href="https://wa.me/qr/L4I2UEGCSLS4N1" target="_blank" rel="noreferrer"><RiWhatsappFill /></a>
                    <a href="https://t.me/aminthemar" target="_blank" rel="noreferrer"><RiTelegramFill /></a>
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