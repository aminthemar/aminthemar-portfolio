import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./Jobs.scss";
import { SectionTitle } from "../../components";
import { AppWrap } from "../../wrapper";
import { images, jobs_data } from "../../constants";

const job_count = 4;

const Jobs = () => {
  const [job_items, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  function getMonthsPassed(startDateString, endDateString) {
    const startDate = new Date(startDateString);
    const endDate = endDateString ? new Date(endDateString) : new Date();
    const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = endDate.getMonth() - startDate.getMonth();
    let totalMonths = yearsDiff * 12 + monthsDiff;
    if (endDate.getDate() < startDate.getDate()) {
      totalMonths -= 1;
    }
    return totalMonths;
  }

  const getLocalData = () => {
    jobs_data
      .getJobsData(job_count)
      .then((data) => {
        setJobs(data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(true);
      });
  };

  useEffect(() => {
    getLocalData();
  }, []);

  return (
    <div className="app__jobs-laurier">
      <div className="app__container section_pad">
        <SectionTitle title="سابقه‌ی همکاری با ..." decorations={false} darkmode={true} />

        {loading ? (
          <motion.img src={images.loading} className="app__flex app__loading" />
        ) : (
          <ul className="app__jobs">
            {job_items.map((job_item, index) => (
              <li key={`job-${index}`}>
                <a href={`${job_item.websiteurl}`} target="_blank" rel="noreferrer">
                  <img src={job_item.logo} alt={`job-${index}`} />
                  <div className="app__yeartag-dark p-text">{getMonthsPassed(job_item.startDate, job_item.endDate)} ماه</div>
                  <motion.section
                    initial={{ maxHeight: "0", padding: "0" }}
                    whileInView={{ maxHeight: "100px", padding: "0.75rem" }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.3, delay: index / 10, ease: "easeOut" }}
                  >
                    <p className="p-title">{job_item.company}</p>
                    <p className="p-small">{job_item.role}</p>
                  </motion.section>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AppWrap(Jobs, "jobs");
