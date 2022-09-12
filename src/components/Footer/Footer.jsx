import React from 'react';
import { FaCopyright } from 'react-icons/fa'

import './Footer.scss';

const Footer = () => {

  return (
    <div className='app__Footer'>
      <section className='app__flex app__container'>
        <a href="https://rastikerdar.github.io/vazirmatn/"
          target="_blank" rel="noreferrer"
          className='app__flex-start link_icon'>
          <FaCopyright />
          <p className='p-small p-link'>فونت فارسی وزیرمتن</p>
        </a>
        <p className='p-small'>از شما متشکرم که پیشینه‌ی من را مشاهده کردید.</p>
        <div className='p-small app__Footer-username'>aminthemar@</div>
      </section>
    </div >
  )
}

export default Footer