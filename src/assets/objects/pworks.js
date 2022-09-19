import { images } from "../../constants";

const data = {
    name: 'pworks',
    content: [
        {
            "id": "balloons",
            "title": "بازی بادکنک‌ها",
            "company": "مرکز تخصصی آپا",
            "logo": images.codeport_1,
            "category": "برنامه‌نویسی",
        },
        {
            "id": "koosh",
            "title": "بازی کوش",
            "company": "استودیو چوب‌خط",
            "logo": images.codeport_4,
            "category": "برنامه‌نویسی",
        },
        {
            "id": "security",
            "title": "بازی راز امنیت",
            "company": "مرکز تخصصی آپا",
            "logo": images.codeport_2,
            "category": "برنامه‌نویسی",
        },
        {
            "id": "urang",
            "title": "بازی اورنگ",
            "company": "مسابقه‌ی کژوال کمپ",
            "logo": images.codeport_3,
            "category": "برنامه‌نویسی",
        },
        {
            "id": "mn76",
            "title": "طراحی کاراکتر",
            "company": "محمد نظری",
            "logo": images.designport_2,
            "category": "طراحی",
        },
        {
            "id": "barg",
            "title": "لوگوی برگ",
            "company": "برگ مارکت",
            "logo": images.designport_4,
            "category": "طراحی",
        },
        {
            "id": "axis",
            "title": "لوگوی اکسیس",
            "company": "فروشگاه اکسیس",
            "logo": images.designport_1,
            "category": "طراحی",
        },
        {
            "id": "raf",
            "title": "طراحی برند راف",
            "company": "دکوراسیون داخلی راف",
            "logo": images.designport_3,
            "category": "طراحی",
        },
    ]
}

const getnPWorksbyCategory = (n_pworks, category) => {
    return (new Promise((resolve) => {
        setTimeout(() => {
            var temp_data = {
                name: 'pworks',
                content: []
            }

            let index = 0;
            while (temp_data.content.length < n_pworks && index < data.content.length) {
                if (data.content[index]['category'] === category) {
                    var temp_dict = {};
                    temp_dict['title'] = data.content[index]['title'];
                    temp_dict['company'] = data.content[index]['company'];
                    temp_dict['id'] = data.content[index]['id'];
                    temp_dict['logo'] = data.content[index]['logo'];
                    temp_data.content.push(temp_dict);
                }
                index++;
            }
            resolve(temp_data);
        }, 100);
    }));
}

export default { getnPWorksbyCategory }