import { React, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';

import { RiLinkedinBoxLine, RiTelegramLine, RiWhatsappLine } from 'react-icons/ri'
import { MdGames, MdThumbUpAlt, MdAccessTimeFilled } from 'react-icons/md'
import { HiOutlineCheckCircle, HiOutlineMail } from 'react-icons/hi'

import { AppWrap } from '../../wrapper/'
import { works_data } from '../../constants';
import './Contacts.scss'

const Contacts = () => {
    const [formData, setFormData] = useState({ email: "", message: "" });
    const [errors, setErrors] = useState({ emailError: "", messageError: "" })
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [worksStats, setWorksStats] = useState([0, 0]);

    useEffect(() => {
        works_data.getWorksStats().then(count => { setWorksStats(count) })
            .catch(err => {
                console.error(err);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = () => {
        let temp_errors = { emailError: "", messageError: "" };
        let isOK = true;

        if (sent) return;

        if (formData['email'] === "") {
            temp_errors.emailError = "نمی‌تواند خالی باشد.";
            isOK = false;
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData['email'])) {
            temp_errors.emailError = "اشتباه وارد شده است.";
            isOK = false;
        }
        if (formData['message'] === "") {
            temp_errors.messageError = "نمی‌تواند خالی باشد.";
            isOK = false;
        }
        setErrors(temp_errors);

        if (isOK) {
            // also disables button
            setLoading(true);

            const params = {
                from_name: formData.email,
                message: formData.message
            };

            emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                params,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
                .then((result) => {
                    setSent(true);
                }, (error) => {
                    console.log(error.text);
                });
        }
    }

    return (
        <div className='app__contacts'>
            <div className='app__contacts-hero' />

            <div className='app__container section_pad'>
                <ul className='app__contacts-stats app__flex'>
                    {[[worksStats[0], 'پروژه‌ی موفق', <MdThumbUpAlt />],
                    [(new Date().getFullYear() - 2020) + '+', 'سال تجربه‌ی کار', <MdAccessTimeFilled />],
                    [worksStats[1], 'بازی منتشر', <MdGames />],
                    ].map((stat_item, index) => (
                        <motion.li
                            initial={{ y: 60, opacity: 0.2 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.7 }}
                            transition={{ duration: 0.3, delay: (index / 10), ease: 'easeOut' }}
                            className='app__flex' key={stat_item[1]}>
                            <div>{stat_item[2]}</div>
                            <div>
                                <h1>{stat_item[0]}</h1>
                                <p className='p-text'>{stat_item[1]}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
                <div className='app__flex'>
                    <div className='app__flex app__contacts-form'>
                        <span>
                            <h2 className='p-h2'>راه‌های ارتباطی</h2>
                            <p className='p-text'>می‌توانید درخواست همکاری خود را از طریق این فرم یا شبکه‌های اجتماعی زیر ارسال کنید. پیام شما تا حداکثر دو روز بررسی خواهد شد.</p>
                            <ul className='app__flex-start app__contacts-social'>
                                <a href="mailto:info@aminthemar.ir" target="_blank" rel="noreferrer"><HiOutlineMail /></a>
                                <a href="https://www.linkedin.com/in/aminthemar" target="_blank" rel="noreferrer"><RiLinkedinBoxLine /></a>
                                <a href="https://eitaa.com/aminthemar" target="_blank" rel="noreferrer"><RiWhatsappLine /></a>
                                <a href="https://t.me/aminthemar" target="_blank" rel="noreferrer"><RiTelegramLine /></a>
                            </ul>
                            <iframe
                                title='project-trailer'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12954.687022097798!2d51.35864307701019!3d35.73429043689173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e073b0e459749%3A0x31816dd54a095378!2sGisha%2C%20District%202%2C%20Tehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2sfr!4v1660638091029!5m2!1sen!2sfr"
                                width="100%"
                                height="198"
                                loading="lazy"
                                style={{ border: "0", borderRadius: "12px" }}
                            ></iframe>
                        </span>
                        <section>
                            <form action="/action_page.php">
                                <div className='app__flex-start app__contacts-error'>
                                    <label className='p-text p-link' htmlFor="email">ایمیل شما</label>
                                    <p className='p-small'>{errors.emailError}</p>
                                </div>
                                <input className='input' name="email" placeholder='example@mail.com' onChange={handleInputChange} />

                                <div className='app__flex-start app__contacts-error'>
                                    <label className='p-text p-link' htmlFor="message">متن درخواست</label>
                                    <p className='p-small'>{errors.messageError}</p>
                                </div>
                                <textarea rows="8" className='input' name="message" placeholder="توضیحی کوتاه بنویسید..." onChange={handleInputChange} />

                                {!sent
                                    ? <button type='button' className='p-title' disabled={loading} onClick={handleSubmit}>{loading ? '...' : 'بفرست'}</button>
                                    : <div className='app__flex p-link app__contacts-form-success'>
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 4 }}
                                            transition={{ duration: 0.3, delay: 0.2, ease: 'backOut' }}>
                                            <HiOutlineCheckCircle />
                                        </motion.div>
                                        <motion.p
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.3, ease: 'backOut' }}>
                                            پیام شما دریافت شد.</motion.p>
                                    </div>
                                }
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppWrap(Contacts, 'contacts')