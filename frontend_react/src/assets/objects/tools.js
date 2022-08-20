import { images } from "../../constants";

const data = {
    name: 'tools',
    content: [
        {
            "title": "Unity",
            "websiteurl": "https://unity.com/",
            "logo": images.codetool_1,
            "category": "برنامه‌نویسی",
        },
        {
            "title": "ReactJS",
            "websiteurl": "https://reactjs.org/",
            "logo": images.codetool_2,
            "category": "برنامه‌نویسی",
        },
        {
            "title": "C-Sharp",
            "websiteurl": "https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
            "logo": images.codetool_3,
            "category": "برنامه‌نویسی",
        },
        {
            "title": "Git",
            "websiteurl": "https://git-scm.com/",
            "logo": images.codetool_4,
            "category": "برنامه‌نویسی",
        },
        {
            "title": "HTML 5.0",
            "websiteurl": "https://www.geeksforgeeks.org/html/",
            "logo": images.codetool_5,
            "category": "برنامه‌نویسی",
        },
        {
            "title": "CSS 3.0",
            "websiteurl": "https://www.geeksforgeeks.org/css/",
            "logo": images.codetool_6,
            "category": "برنامه‌نویسی",
        },
        {
            "title": "Figma",
            "websiteurl": "https://www.figma.com/",
            "logo": images.designtool_3,
            "category": "طراحی",
        },
        {
            "title": "Adobe XD",
            "websiteurl": "https://www.adobe.com/products/xd.html",
            "logo": images.designtool_4,
            "category": "طراحی",
        },
        {
            "title": "Photoshop",
            "websiteurl": "https://www.adobe.com/products/photoshop.html",
            "logo": images.designtool_1,
            "category": "طراحی",
        },
        {
            "title": "Illustrator",
            "websiteurl": "https://www.adobe.com/products/illustrator.html",
            "logo": images.designtool_2,
            "category": "طراحی",
        },
        {
            "title": "Zeplin",
            "websiteurl": "https://zeplin.io/",
            "logo": images.designtool_5,
            "category": "طراحی",
        },
        {
            "title": "SASS",
            "websiteurl": "https://sass-lang.com/",
            "logo": images.designtool_6,
            "category": "طراحی",
        },
    ]
}

const getTools = (n_tools, category) => {
    return (new Promise((resolve) => {
        setTimeout(() => {
            var temp_data = {
                name: 'tools',
                content: []
            }

            let index = 0;
            while (temp_data.content.length < n_tools && index < data.content.length) {
                if (data.content[index]['category'] == category) {
                    temp_data.content.push(data.content[index]);
                }
                index++;
            }
            resolve(temp_data);
        }, 100);
    }));
}

export default { getTools }