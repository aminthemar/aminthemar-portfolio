import { React, useState } from "react";
import { motion } from "framer-motion";
import { MdArrowDownward, MdOutlineInsertDriveFile } from "react-icons/md";
import { IoBalloonSharp } from "react-icons/io5";
import { FaHardHat } from "react-icons/fa";

import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { PrimaryButton, SecondaryButton } from "../../components";
import "./Hero.scss";

const Hero = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <>
      <div className="visually-hidden">
        <img src={images.selfie_3} alt="محمدامین رشید - پروفایل" />
        <img src={images.selfie_4} alt="Mohammad Amin Rashid Portfolio" />
        <img src={images.selfie_1} alt="Mohammad Amin Rashid - Profile" />
        <img src={images.selfie_2} alt="محمدامین رشید" />
      </div>
      <div className="app__hero-bg app__flex-start">
        <div className="app__container section_pad">
          <div className="app__hero">
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
              className="h-card app__hero-profile"
            >
              <div className="app__hero-asl">
                <div>
                  <div className="p-title">
                    <img className="app__hero-h1" src={images.selfie_3} alt="محمدامین رشید - پروفایل" />
                    <h1 className="p-name" lang="fa">
                      محمدامین رشید
                    </h1>
                  </div>

                  <div className="app__flex app__hero-location">
                    <div className="app__flex-start">
                      <IoBalloonSharp />
                      <p className="p-small p-link">خرداد 1376</p>
                    </div>
                    <div className="app__flex-start">
                      <FaHardHat />
                      <p className="p-small p-link">معافیت تحصیلی</p>
                    </div>
                  </div>
                </div>

                <ul>
                  {["دکتری مهندسی کامپیوتر", "توسعه‌دهنده وب", "طراح برند دیجیتال", "برنامه‌نویس یونیتی"].map((item) => (
                    <li className="p-text" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
              className="app__flex-start app__hero-buttons-parent"
            >
              <PrimaryButton text="پیشینه‌ی من" btn_icon={MdArrowDownward} href="#jobs" />
              <SecondaryButton
                text="دانلود رزومه"
                btn_icon={MdOutlineInsertDriveFile}
                // href={require("../../assets/MohammadAminRashidCV.pdf")} />
                href="https://cvresume.ir/r/yutB-_Hdtkif4OrenPG_JQ"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(Hero, "home");
