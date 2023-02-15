import { images } from "../../constants";

const data = {
    name: 'jobs',
    content: [
        {
            "company": "استودیو چوب‌خط",
            "role": "برنامه‌نویس و بازاریاب",
            "websiteurl": "https://www.instagram.com/choobkhatstudio",
            "logo": images.job_icon_1,
            "months": "20",
            "rating": "10",
        },
        {
            "company": "فروشگاه برگ مارکت",
            "role": "طراح وبسایت و لوگو",
            "websiteurl": "https://barg.market/",
            "logo": images.job_icon_2,
            "months": "6",
            "rating": "7",
        },
        {
            "company": "مرکز تخصصی آپا",
            "role": "برنامه‌نویس و طراح بازی",
            "websiteurl": "http://cert.qom.ac.ir/",
            "logo": images.job_icon_4,
            "months": "11",
            "rating": "8",
        },
        {
            "company": "اکسیس مارکت",
            "role": "طراح وبسایت و لوگو",
            "websiteurl": "https://www.axis.market/",
            "logo": images.job_icon_3,
            "months": "6",
            "rating": "6",
        },
    ]
}

const getJobsData = (n_jobs) => {
    return (new Promise((resolve) => {
        setTimeout(() => {
            var temp_data = {
                name: 'jobs',
                content: data.content.slice(0, n_jobs)
            }
            resolve(temp_data);
        }, 100);
    }));
}

export default { getJobsData }