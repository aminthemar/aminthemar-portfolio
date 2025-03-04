import { images } from "../../constants";

const data = {
  name: "jobs",
  content: [
    {
      company: "رایان صنعت",
      role: "طراح و توسعه‌دهنده وب",
      websiteurl: "https://rayansanaat.ir/",
      logo: images.job_icon_2,
      months: "25",
      rating: "12",
    },
    {
      company: "استودیو چوب‌خط",
      role: "برنامه‌نویس یونیتی",
      websiteurl: "https://www.instagram.com/choobkhatstudio",
      logo: images.job_icon_1,
      months: "19",
      rating: "10",
    },
    {
      company: "مرکز تخصصی آپا",
      role: "برنامه‌نویس یونیتی",
      websiteurl: "http://cert.qom.ac.ir/",
      logo: images.job_icon_4,
      months: "10",
      rating: "8",
    },
    {
      company: "اکسیس مارکت",
      role: "طراح و توسعه‌دهنده وب",
      websiteurl: "https://www.axis.market/",
      logo: images.job_icon_3,
      months: "3",
      rating: "6",
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
    }, 100);
  });
};

export default { getJobsData };
