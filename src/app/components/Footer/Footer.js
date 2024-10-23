// 'use client'
import './Footer.css';
import Image from 'next/image';
// import { sliderData } from '../../../../public/data/sliderData';

const Footer = () => {
    // const catalogSlide = sliderData[1];

    return (
        <footer className="page-footer">
            <div className="footer-container">
                <div className="footer-section company-info">
                    <Image src="/logo.png" alt="Логотип компании Султан" className="company-logo" width={150} height={50} />
                    <p>Компания «Султан» — снабжаем розничные магазины товарами &quot;под ключ&quot; в Кокшетау и Акмолинской области</p>
                    <form action="#" method="post" className="subscribe-form">
                        <label htmlFor="email">Подпишитесь на скидки и акции:</label>
                        <div className="email-input">
                            <input type="email" id="email" placeholder="Введите ваш E-mail" required />
                            <button type="submit" className="subscribe-button">➔</button>
                        </div>
                    </form>
                </div>

                <div className="footer-section site-menu">
                    <h3>Меню сайта:</h3>
                    <ul>
                        <li><a href="#">О компании</a></li>
                        <li><a href="#">Доставка и оплата</a></li>
                        <li><a href="#">Возврат</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </div>

                <div className="footer-section categories">
                    <h3>Категории:</h3>
                    <ul>
                        <li><a href="#">Бытовая химия</a></li>
                        <li><a href="#">Косметика и гигиена</a></li>
                        <li><a href="#">Товары для дома</a></li>
                        <li><a href="#">Товары для детей и мам</a></li>
                        <li><a href="#">Посуда</a></li>
                    </ul>
                </div>

                <div className="footer-section price-list">
                    <h3>Скачать прайс-лист:</h3>
                    <a href="#" className="price-list-button">Прайс-лист <span>⬇️</span></a>
                    <p>Связь в мессенджерах:</p>
                    <div className="messengers">
                        <a href="#"><Image src="/whatsapp-icon.png" alt="WhatsApp" width={24} height={24} /></a>
                        <a href="#"><Image src="/telegram-icon.png" alt="Telegram" width={24} height={24} /></a>
                    </div>
                </div>

                <div className="footer-section contacts">
                    <h3>Контакты:</h3>
                    <a href="tel:+77774900091">+7 (777) 490-00-91</a>
                    <p>время работы: 9:00-20:00</p>
                    <a href="#">Заказать звонок</a>
                    <p><a href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</a></p>
                    <p>На связи в любое время</p>
                    <div className="payment-methods">
                        <Image src="/visa-icon.png" alt="Visa" width={50} height={30} />
                        <Image src="/mastercard-icon.png" alt="Mastercard" width={50} height={30} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;