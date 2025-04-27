import { images } from "../../constants";

const data = {
  name: "jobs",
  content: [
    {
      company: "رایان صنعت",
      role: "سرپرست تیم فرانت‌اند",
      websiteurl: "https://rayansanaat.ir/",
      logo: images.job_icon_2,
      rating: "12",
      startDate: "2023-04-21",
    },
    {
      company: "استودیو چوب‌خط",
      role: "برنامه‌نویس یونیتی",
      websiteurl: "https://www.instagram.com/choobkhatstudio",
      logo: images.job_icon_1,
      rating: "10",
      startDate: "2019-12-10",
      endDate: "2021-05-01",
    },
    {
      company: "مرکز تخصصی آپا",
      role: "برنامه‌نویس یونیتی",
      websiteurl: "http://cert.qom.ac.ir/",
      logo: images.job_icon_4,
      rating: "8",
      startDate: "2018-07-10",
      endDate: "2019-04-01",
    },
    {
      company: "اکسیس مارکت",
      role: "طراح و توسعه‌دهنده وب",
      websiteurl: "https://www.axis.market/",
      logo: images.job_icon_3,
      rating: "6",
      startDate: "2017-07-10",
      endDate: "2017-11-01",
    },
  ],
};

const getJobsData = (n_jobs) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      var temp_data = {
        name: "jobs",
        content: data.content.slice(0, n_jobs),
      };
      resolve(temp_data);
    }, 1);
  });
};

export default { getJobsData };
