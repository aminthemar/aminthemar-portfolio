import { images } from "../../constants";

const data = {
    name: 'jobs',
    content: [
        {
            "company": "استودیو چوب‌خط",
            "role": "برنامه‌نویس و بازاریاب",
            "websiteurl": "https://www.instagram.com/choobkhatstudio",
            "logo": images.job_icon_1,
            "months": "22",
            "rating": "10",
        },
        {
            "company": "دانشگاه خواجه نصیر",
            "role": "پژوهشگر هوش مصنوعی",
            "websiteurl": "https://www.kntu.ac.ir/",
            "logo": images.job_icon_3,
            "months": "4",
            "rating": "7",
        },
        {
            "company": "مرکز تخصصی آپا",
            "role": "طراح و برنامه‌نویس بازی",
            "websiteurl": "http://cert.qom.ac.ir/",
            "logo": images.job_icon_4,
            "months": "10",
            "rating": "8",
        },
        {
            "company": "فروشگاه برگ مارکت",
            "role": "طراحی وبسایت و لوگو",
            "websiteurl": "https://barg.market/",
            "logo": images.job_icon_2,
            "months": "9",
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
            resolve(data);
        }, 100);
    }));
}

export default { getJobsData }