import { images } from "../../constants";

const data = {
    name: 'edus',
    content: [
        {
            "title": "کارشناسی ارشد فناوری اطلاعات",
            "yearstart": "1398",
            "yearend": "1401",
            "websiteurl": "https://qom.ac.ir/",
            "logo": images.edu_2,
            "place": "دانشگاه سراسری قم",
            "description": "دانشگاه دولتی قم، بیست و چهارمین دانشگاه برتر ایران است. این مجموعه شامل امکاناتی از جمله شبکه‌ی اینترنت، سالن ورزشی، زمین فوتبال، والیبال ساحلی، زمین چمن، رستوران، مسجد، استخر، سونا و... می‌باشد.",
            "grade": "18.8",
            "rank": "2 در 21 نفر",
        },
        {
            "title": "مقاله‌ی کنفرانسی Masked-EDA",
            "yearstart": "1399",
            "yearend": "1400",
            "websiteurl": "https://ieeexplore.ieee.org/abstract/document/9420616",
            "logo": images.edu_4,
            "place": "چکیده‌ی پژوهش",
            "description": "رویکرد Masked-EDA دقت مدل‌های شبکه‌ی عصبی طبقه‌بندی متن را بهبود می‌دهد. این پژوهش، با راهنمایی دکتر حسین امیرخانی در بیست و ششمین کنفرانس بین المللی انجمن کامپیوتر ایران (CSICC 2021) پذیرفته شده و نمایه‌ی IEEE شده است.",
            "grade": "-",
            "rank": "پذیرفته شده",
        },
        {
            "title": "کارشناسی مهندسی کامپیوتر",
            "yearstart": "1394",
            "yearend": "1398",
            "websiteurl": "https://qom.ac.ir/",
            "logo": images.edu_3,
            "place": "دانشگاه سراسری قم",
            "description": "دانشگاه دولتی قم، اولین دانشگاه تأسیس شده در ایران پس از پیروزی انقلاب اسلامی می‌باشد. یکی از افتخارات دانشگاه قم، کسب شاخص کارآفرینی A+ در سال 1401 است.",
            "grade": "17.34",
            "rank": "6 در 17 نفر",
        },
        {
            "title": "دیپلم ریاضی و فیزیک",
            "yearstart": "1390",
            "yearend": "1394",
            "websiteurl": "http://drhashtroudi.ir/",
            "logo": images.edu_1,
            "place": "مجتمع آموزشی دکتر هشترودی",
            "description": "مجتمع فرهنگی آموزشی دکتر هشترودی یک مدرسه‌ی غیرانتفاعی واقع در خیابان مرزداران تهران است. چشم‌انداز این مجموعه، تربیت شهروندانی سالم از نظر جسمی و روحی، فرهیخته، با ایمان و آگاه به تاریخ و تمدّن سرشار از حکمت ایران می‌باشد.",
            "grade": "17.61",
            "rank": "-",
        },
    ]
}

const getEdusData = () => {
    return (new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 100);
    }));
}

export default { getEdusData }