import { images_works } from "../../constants";

const data = {
    name: 'works',
    content: {
        "balloons": {
            "id": "balloons",
            "title": "بادکنک‌ها",
            "company": "مرکز تخصصی آپا",
            "logo": images_works.balloons_logo,
            "category": "بازی",
        },
        "koosh": {
            "id": "koosh",
            "title": "کوش",
            "company": "استودیو چوب‌خط",
            "logo": images_works.koosh_logo,
            "category": "بازی",
        },
        "security": {
            "id": "security",
            "title": "راز امنیت",
            "company": "مرکز تخصصی آپا",
            "logo": images_works.security_logo,
            "category": "بازی",
        },
        "urang": {
            "id": "urang",
            "title": "اورنگ",
            "company": "مسابقه‌ی کژوال کمپ",
            "logo": images_works.urang_logo,
            "category": "بازی",
        },
        "#": {
            "id": "#",
            "title": "طراحی کاراکتر",
            "company": "محمد نظری",
            "logo": images_works.balloons_logo,
            "category": "پوستر",
        },
        "#": {
            "id": "#",
            "title": "برگ",
            "company": "برگ مارکت",
            "logo": images_works.balloons_logo,
            "category": "لوگو",
        },
        "#": {
            "id": "#",
            "title": "اکسیس",
            "company": "فروشگاه اکسیس",
            "logo": images_works.balloons_logo,
            "category": "لوگو",
        },
        "#": {
            "id": "#",
            "title": "برند راف",
            "company": "دکوراسیون داخلی راف",
            "logo": images_works.balloons_logo,
            "category": "لوگو",
        },
    }
}

const getWorksbyCategory = (category) => {
    return (new Promise((resolve) => {
        setTimeout(() => {
            var temp_data = {
                name: 'works',
                content: []
            }

            var obj = Object.values(data.content);
            for (var key in obj) {
                if (obj[key]['category'] === category) {
                    var temp_dict = {};
                    temp_dict['id'] = obj[key]['id'];
                    temp_dict['title'] = obj[key]['title'];
                    temp_dict['company'] = obj[key]['company'];
                    temp_dict['logo'] = obj[key]['logo'];
                    temp_data.content.push(temp_dict);
                }
            }
            resolve(temp_data);
        }, 100);
    }));
}

const getWorkbyId = (id) => {
    return (new Promise((resolve) => {
        setTimeout(() => {
            var temp_data = {
                name: 'work',
                content: {}
            }
            temp_data.content = data.content[id];
            resolve(temp_data);
        }, 100);
    }));
}

export default { getWorksbyCategory, getWorkbyId }