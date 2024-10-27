// 'use client'
import "./Footer.css";
import Image from "next/image";
// import { sliderData } from '../../../../public/data/sliderData';

const Footer = () => {
    // const catalogSlide = sliderData[1];

    return (
        <footer className="page-footer">
            <div className="footer-container">
                <div className="footer-section company-info">
                    <Image
                        src="/image/logo.svg"
                        alt="Логотип компании Султан"
                        className="company-logo"
                        width={156}
                        height={66}
                    />
                    <p className="company-info-description">
                        Компания «Султан» — снабжаем розничные магазины товарами
                        &quot;под ключ&quot; в Кокчетаве и Акмолинской области
                    </p>
                    <form action="#" method="post" className="subscribe-form">
                        <label className="subscribe-form-label" htmlFor="email">
                            Подпишитесь на скидки и акции
                        </label>
                        <div className="email-input">
                            <input
                                type="email"
                                id="email"
                                placeholder="Введите ваш E-mail"
                                required
                            />
                            <button type="submit" className="subscribe-button">
                                <svg
                                    width="8"
                                    height="15"
                                    viewBox="0 0 8 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 12.8571L5 7.5L0 2.14286L1 0L8 7.5L1 15L0 12.8571Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="footer-section site-menu">
                    <h3>Меню сайта:</h3>
                    <ul>
                        <li>
                            <a href="#">О компании</a>
                        </li>
                        <li>
                            <a href="#">Доставка и оплата</a>
                        </li>
                        <li>
                            <a href="#">Возврат</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section categories">
                    <h3>Категории:</h3>
                    <ul>
                        <li>
                            <a href="#">Бытовая химия</a>
                        </li>
                        <li>
                            <a href="#">Косметика и гигиена</a>
                        </li>
                        <li>
                            <a href="#">Товары для дома</a>
                        </li>
                        <li>
                            <a href="#">Товары для детей и мам</a>
                        </li>
                        <li>
                            <a href="#">Посуда</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section price-list">
                    <h3>Скачать прайс-лист:</h3>
                    <a href="#" className="price-list-button">
                        Прайс-лист
                        <span className="price-list-button-icon">
                            <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.9583 4.375H8.12492V0.125H3.87492V4.375H1.04159L5.99992 10.0417L10.9583 4.375ZM0.333252 11.4583H11.6666V12.875H0.333252V11.4583Z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                    </a>
                    <p className="messengers-label">Связь в мессенджерах:</p>
                    <div className="messengers">
                        <a target="_blank" href="https://www.whatsapp.com/">
                            <Image
                                src="/image/whatsapp-icon.png"
                                alt="WhatsApp"
                                width={39}
                                height={39}
                            />
                        </a>
                        <a target="_blank" href="https://telegram.org/">
                            <Image
                                src="/image/telegram-icon.png"
                                alt="Telegram"
                                width={39}
                                height={39}
                            />
                        </a>
                    </div>
                </div>

                <div className="footer-section contacts">
                    <h3>Контакты:</h3>
                    <div className="contacts-phone-container">
                        <a className="phone-number" href="tel:+77774900091">+7 (777) 490-00-91</a>
                        <p className="work-time">время работы: 9:00-20:00</p>
                        <a className="order-call-ref" href="#">Заказать звонок</a>
                    </div>

                    <div className="contacts-email-container">
                        <p>
                            <a href="mailto:opt.sultan@mail.ru">
                                opt.sultan@mail.ru
                            </a>
                        </p>
                        <p className="contacts-email-container-span">На связи в любое время</p>
                    </div>

                    <div className="payment-methods">
                        <Image
                            src="/image/visa-icon.png"
                            alt="Visa"
                            width={50}
                            height={30}
                        />
                        <Image
                            src="/image/mastercard-icon.png"
                            alt="Mastercard"
                            width={50}
                            height={30}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
