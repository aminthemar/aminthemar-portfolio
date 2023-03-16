import { images } from "../../constants";

const data = {
    name: 'edus',
    content: [
        {
            "title": "مدرک زبان انگلیسی MSRT",
            "yearstart": "1401",
            "yearend": "1403",
            "websiteurl": "https://portal.saorg.ir/inquiry/?code=14011217344299379620",
            "logo": images.edu_6,
            "place": "استعلام مدرک",
            "description": "وزارت علوم، تحقیقات و فناوری ایران آزمون MSRT را برای داوطلبان دکتری کشور در نظر گرفته است. با توجه به میزان سختی سوالات، تنها 20 درصد از متقاضیان نمره‌ی قبولی (50 به بالا) را کسب می‌نمایند. سطح دشواری آزمون MSRT در سطح آزمون‌های بین المللی بوده که به آزمون تافل کوچک معروف است.",
            "grade": "76 از 100",
            "rank": "A",
        },
        {
            "title": "مقاله‌ی ژورنال BERT+Edit-Unsup",
            "yearstart": "1400",
            "yearend": "1401",
            "websiteurl": "https://doi.org/10.1016/j.patrec.2023.01.009",
            "logo": images.edu_5,
            "place": "چکیده‌ی پژوهش",
            "description": "استخراج شده از پایان‌نامه‌ی کارشناسی ارشد با موضوع «بهبود عملکرد ساده‌سازی بدون نظارت جملات با استفاده از مدل‌های زبانی پوشیده» \nنمره‌ی 19 (درجه عالی) - استاد راهنما: دکتر حسین امیرخانی\nچاپ شده در ژورنال Pattern Recognition Letters (2023)، نشر Elsevier",
            "grade": "چاپ شده",
            "rank": "Q1",
        },
        {
            "title": "کارشناسی ارشد فناوری اطلاعات",
            "yearstart": "1398",
            "yearend": "1401",
            "websiteurl": "https://qom.ac.ir/",
            "logo": images.edu_2,
            "place": "دانشگاه سراسری قم",
            "description": "پذیرش با سهمیه استعداد درخشان (بدون آزمون)\nدانشگاه دولتی قم، بیست و چهارمین دانشگاه برتر ایران است. این مجموعه شامل امکاناتی از جمله شبکه‌ی اینترنت، سالن ورزشی، زمین فوتبال، والیبال ساحلی، زمین چمن، رستوران، مسجد، استخر، سونا و... می‌باشد.",
            "grade": "18.81",
            "rank": "1 در 21 نفر",
        },
        {
            "title": "مقاله‌ی کنفرانسی Masked-EDA",
            "yearstart": "1399",
            "yearend": "1400",
            "websiteurl": "https://doi.org/10.1109/CSICC52343.2021.9420616",
            "logo": images.edu_4,
            "place": "چکیده‌ی پژوهش",
            "description": "پذیرفته و دفاع شده در بیست و ششمین کنفرانس بین المللی انجمن کامپیوتر ایران (2021) با نمایه IEEE - استاد راهنما: دکتر حسین امیرخانی\nرویکرد Masked-EDA دقت مدل‌های شبکه‌ی عصبی طبقه‌بندی متن را بهبود می‌دهد.",
            "grade": "پذیرفته شده",
            "rank": "-",
        },
        {
            "title": "کارشناسی مهندسی کامپیوتر",
            "yearstart": "1394",
            "yearend": "1398",
            "websiteurl": "https://qom.ac.ir/",
            "logo": images.edu_3,
            "place": "دانشگاه سراسری قم",
            "description": "پذیرش با آزمون سراسری (رتبه 6647)\nدانشگاه دولتی قم، اولین دانشگاه تأسیس شده در ایران پس از پیروزی انقلاب اسلامی می‌باشد. یکی از افتخارات دانشگاه قم، کسب شاخص کارآفرینی A+ در سال 1401 است.",
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