import { images } from "../../constants";

const data = {
    name: 'works',
    content: [
        {
            "title": "بازی بادکنک‌ها",
            "company": "مرکز تخصصی آپا دانشگاه قم",
            "websiteurl": "#",
            "logo": images.codeport_1,
            "category": "برنامه‌نویسی",
        },
        {
            "title": "بازی کوش",
            "company": "استودیو چوب‌خط",
            "websiteurl": "#",
            "logo": images.codeport_4,
            "category": "برنامه‌نویسی",
        },
        {
            "title": "بازی راز امنیت",
            "company": "مرکز تخصصی آپا دانشگاه قم",
            "websiteurl": "#",
            "logo": images.codeport_2,
            "category": "برنامه‌نویسی",
        },
        {
            "title": "بازی اورنگ",
            "company": "مسابقه‌ی کژوال کمپ",
            "websiteurl": "#",
            "logo": images.codeport_3,
            "category": "برنامه‌نویسی",
        },
        {
            "title": "طراحی کاراکتر",
            "company": "محمد نظری",
            "websiteurl": "#",
            "logo": images.designport_2,
            "category": "طراحی",
        },
        {
            "title": "لوگوی برگ",
            "company": "برگ مارکت",
            "websiteurl": "#",
            "logo": images.designport_4,
            "category": "طراحی",
        },
        {
            "title": "لوگوی اکسیس",
            "company": "فروشگاه اکسیس",
            "websiteurl": "#",
            "logo": images.designport_1,
            "category": "طراحی",
        },
        {
            "title": "طراحی برند راف",
            "company": "دکوراسیون داخلی راف دکو",
            "websiteurl": "#",
            "logo": images.designport_3,
            "category": "طراحی",
        },
    ]
}

const getWorksPreview = (n_works, category) => {
    return (new Promise((resolve) => {
        setTimeout(() => {
            var temp_data = {
                name: 'pworks',
                content: []
            }

            let index = 0;
            while (temp_data.content.length < n_works && index < data.content.length) {
                if (data.content[index]['category'] == category) {
                    var temp_dict = {};
                    temp_dict['title'] = data.content[index]['title'];
                    temp_dict['company'] = data.content[index]['company'];
                    temp_dict['websiteurl'] = data.content[index]['websiteurl'];
                    temp_dict['logo'] = data.content[index]['logo'];
                    temp_data.content.push(temp_dict);
                }
                index++;
            }
            resolve(temp_data);
        }, 100);
    }));
}

export default { getWorksPreview }