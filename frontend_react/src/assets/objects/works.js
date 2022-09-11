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
            "description": "",
            "tags": [],
            "screenshots": [],
            "date": "",
            "websiteurl": "#",
            "aparatID": "#",
        },
        "koosh": {
            "id": "koosh",
            "title": "کوش",
            "company": "استودیو چوب‌خط",
            "logo": images_works.koosh_logo,
            "category": "بازی",
            "description": "کوش یک بازی دوبعدی اندرویدی در سبک فکری یا پازل است که بازیکن باید اجسام مخفی‌شده را در نقشه‌ای شلوغ پیدا کند. ایده‌ی این بازی از کتاب خاطره‌انگیز \"Where is Waldo\" الهام گرفته شده است. \n\nاین محصول، یک پروژه‌ی شخصی بوده و تمام مسئولیت‌های تولید آن از جمله طراحی گرافیک، برنامه‌نویسی، پویانمایی و بازاریابی به عهده‌ی اینجانب قرار داشت. کوش، ابتدا روی پلتفرم‌های مایکت و ایران اپس منتشر شد اما اخیراً به دلیل کمبود محتوا و حجم زیاد آن، با وجود بیش از 4 هزار دانلود، از دسترس خارج گردید.",
            "tags": ["Unity", "C-Sharp", "Photoshop", "انیمیشن", "بازاریابی"],
            "screenshots": [images_works.koosh_shot_1, images_works.koosh_shot_2, images_works.koosh_shot_3, images_works.koosh_shot_4, images_works.koosh_shot_5],
            "date": "تیر 1396",
            "websiteurl": "https://drive.google.com/drive/folders/1xdQGL9vWCwdeXc4x0c4zL7KZ3uISFVWO",
            "aparatID": "#",
        },
        "security": {
            "id": "security",
            "title": "راز امنیت",
            "company": "مرکز تخصصی آپا",
            "logo": images_works.security_logo,
            "category": "بازی",
            "tags": [],
            "screenshots": [],
            "date": "",
            "websiteurl": "#",
            "aparatID": "#",
        },
        "urang": {
            "id": "urang",
            "title": "اورنگ",
            "company": "مسابقه‌ی کژوال کمپ",
            "logo": images_works.urang_logo,
            "category": "بازی",
            "tags": [],
            "screenshots": [],
            "date": "",
            "websiteurl": "#",
            "aparatID": "#",
        },
        "#": {
            "id": "#",
            "title": "طراحی کاراکتر",
            "company": "محمد نظری",
            "logo": images_works.balloons_logo,
            "category": "پوستر",
            "tags": [],
            "screenshots": [],
            "date": "",
            "websiteurl": "#",
            "aparatID": "#",
        },
        "#": {
            "id": "#",
            "title": "برگ",
            "company": "برگ مارکت",
            "logo": images_works.balloons_logo,
            "category": "لوگو",
            "tags": [],
            "screenshots": [],
            "date": "",
            "websiteurl": "#",
            "aparatID": "#",
        },
        "#": {
            "id": "#",
            "title": "اکسیس",
            "company": "فروشگاه اکسیس",
            "logo": images_works.balloons_logo,
            "category": "لوگو",
            "tags": [],
            "screenshots": [],
            "date": "",
            "websiteurl": "#",
            "aparatID": "#",
        },
        "#": {
            "id": "#",
            "title": "برند راف",
            "company": "دکوراسیون داخلی راف",
            "logo": images_works.balloons_logo,
            "category": "لوگو",
            "tags": [],
            "screenshots": [],
            "date": "",
            "websiteurl": "#",
            "aparatID": "#",
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