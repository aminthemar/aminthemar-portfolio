import React from "react";
import { FaCopyright } from "react-icons/fa";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="app__Footer h-card">
      <section className="app__flex app__container">
        <a
          href="https://rastikerdar.github.io/vazirmatn/"
          target="_blank"
          rel="noopener noreferrer"
          className="app__flex-start link_icon"
          title="Visit Vazirmatn Font Project"
        >
          <FaCopyright />
          <p className="p-small p-link">فونت فارسی وزیرمتن</p>
        </a>
        <p className="p-small">از شما متشکرم که پیشینه‌ی من را مشاهده کردید.</p>
        <a className="p-name u-url footer-name p-small app__Footer-username" href="https://aminthemar.ir" rel="me">
          Mohammad Amin Rashid
        </a>
      </section>
    </div>
  );
};

export default Footer;
