import { React, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { BsArrowLeft, BsFillCheckCircleFill } from "react-icons/bs";
import { ImEye } from "react-icons/im";

import "./Portfolio.scss";
import { pworks_data, tools_data, images } from "../../constants";
import { SectionTitle } from "../../components";
import { AppWrap } from "../../wrapper";

const categories = ["برنامه‌نویسی", "طراحی"];

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [toolsItems, setToolsItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemRef = useRef(null);

  function ActivateCategory(new_category_idx) {
    itemRef.current.childNodes[activeCategory].childNodes[0].className = "app__portfolio-category-deactive";
    itemRef.current.childNodes[new_category_idx].childNodes[0].className = "app__portfolio-category-active";
    setActiveCategory(new_category_idx);
  }

  function getLocalData(new_category_idx) {
    if (activeCategory === new_category_idx) return;

    ActivateCategory(new_category_idx);
    setLoading(true);

    tools_data
      .getnToolsbyCategory(6, categories[new_category_idx])
      .then((data) => {
        setToolsItems(data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });

    pworks_data
      .getnPWorksbyCategory(4, categories[new_category_idx])
      .then((data) => {
        setPortfolioItems(data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="app__bg-persian">
      <div className="app__container section_pad">
        <SectionTitle title="پروژه‌های پیشین و مهارت‌ها" />
        <motion.div onViewportEnter={() => getLocalData(0)} viewport={{ once: true }} className="app__portfolio">
          <section>
            <div className="app__flex app__portfolio-categories">
              <ul className="app__flex-start" ref={itemRef}>
                {categories.map((category_item, index) => (
                  <li onClick={() => getLocalData(index)} className="p-text p-link" key={`category-${index}`}>
                    <p className="app__portfolio-category-deactive">
                      <BsFillCheckCircleFill />
                      {category_item}
                    </p>
                  </li>
                ))}
              </ul>
              <Link to="/works" rel="noopener noreferrer" className="app__flex-start link_icon link_icon-lightmode">
                <p className="p-text p-link">مشاهده همه</p>
                <BsArrowLeft />
              </Link>
            </div>

            <ul className="app__portfolio-works">
              {loading ? (
                <figure>
                  <img src={images.loading} className="app__flex app__loading" />
                </figure>
              ) : (
                portfolioItems.map((port_item, index) => (
                  <li key={`work-${index}`} className="app__cardcover">
                    <figure>
                      <Link to={`/works/${port_item["id"]}`} className="app__flex" rel="noopener noreferrer">
                        <ImEye />
                        <p className="p-title">{port_item["title"]}</p>
                        <p className="p-small">{port_item["company"]}</p>
                        <section>
                          <p className="p-small p-link">پروژه‌ی کامل</p>
                        </section>
                      </Link>
                    </figure>
                    <img src={port_item["logo"]} alt={`محمدامین رشید - ${port_item["title"]}`} />
                  </li>
                ))
              )}
            </ul>
          </section>

          <span>
            <div>
              <p className="p-title">ابزارهای من</p>
              <p className="p-text">برای آشنایی با پروژه‌ها و برنامه‌های زیر، روی آنها کلیک کنید.</p>
            </div>
            <ul className="app__portfolio-tools">
              {toolsItems.map((tool_item, index) => (
                <a className="app__flex" href={tool_item["websiteurl"]} key={`tool-${index}`} target="_blank" rel="noreferrer">
                  <img src={tool_item["logo"]} alt={`tool-${index}`} />
                  <p className="p-small">{tool_item["title"]}</p>
                </a>
              ))}
            </ul>
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Portfolio, "program");
