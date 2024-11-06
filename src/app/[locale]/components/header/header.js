'use client';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import styles from './header.module.css';
import LocalSwitcher from './local-switcher';
import LogoButton from './logo-button';
import Button from './button';
import SearchBar from './searchBar';
import Cart from './cart';
import handleDownload from './handleDownload';
import MobileButton from './mobileHeader/mobileButton';
import MobileMenu from './mobileHeader/mobileMenu';
import NavMenu from './navMenu';
import img from '../../../../../public/image/header-image.png';

const icon1 = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z" stroke="white" />
    <path d="M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z" stroke="white" />
    <path d="M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z" stroke="white" />
    <path d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z" stroke="white" />
  </svg>
);

const icon2 = (
  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.9583 6.375H11.1249V2.125H6.87492V6.375H4.04159L8.99992 12.0417L13.9583 6.375ZM3.33325 13.4583H14.6666V14.875H3.33325V13.4583Z" fill="white" />
  </svg>
);

const icon3 = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.79993 6.5999H10.1999V5.3999H1.79993V6.5999ZM1.79993 9.5999H10.1999V8.3999H1.79993V9.5999ZM1.79993 2.3999V3.5999H10.1999V2.3999H1.79993Z" fill="white" />
  </svg>
);

const iconClick = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.76746 8.42432L3.57558 9.23244L9.23243 3.57558L8.42431 2.76746L2.76746 8.42432Z" fill="white" />
    <path d="M8.42432 9.23242L9.23244 8.4243L3.57558 2.76745L2.76746 3.57557L8.42432 9.23242Z" fill="white" />
  </svg>
);


const Header = () => {
  const t = useTranslations('Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.menuHeader}>
        {/* desktop  version*/}
        <div className={styles.locationBlockHeader}>
          <div className={styles.wrapper}>
            <div className={styles.locationBlock}>
              <svg width="20" height="20" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 9.8335C9.38071 9.8335 10.5 8.71421 10.5 7.3335C10.5 5.95278 9.38071 4.8335 8 4.8335C6.61929 4.8335 5.5 5.95278 5.5 7.3335C5.5 8.71421 6.61929 9.8335 8 9.8335Z" stroke="#3F4E65" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.99992 0.666748C6.23181 0.666748 4.53612 1.36913 3.28587 2.61937C2.03563 3.86961 1.33325 5.5653 1.33325 7.33342C1.33325 8.91008 1.66825 9.94175 2.58325 11.0834L7.99992 17.3334L13.4166 11.0834C14.3316 9.94175 14.6666 8.91008 14.6666 7.33342C14.6666 5.5653 13.9642 3.86961 12.714 2.61937C11.4637 1.36913 9.76803 0.666748 7.99992 0.666748V0.666748Z" stroke="#3F4E65" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className={styles.addressText}>
                <span>{t('address-1')}</span>
                <span>{t('address-2')}</span>
              </div>
            </div>
            <div className={styles.emailBlock}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.37508 3.33325H15.6251C16.3169 3.33321 16.9824 3.59788 17.4853 4.07298C17.9881 4.54808 18.2901 5.19758 18.3293 5.88825L18.3334 6.04158V13.9583C18.3335 14.65 18.0688 15.3156 17.5937 15.8184C17.1186 16.3213 16.4691 16.6233 15.7784 16.6624L15.6251 16.6666H4.37508C3.6833 16.6666 3.01772 16.402 2.51489 15.9269C2.01205 15.4518 1.71008 14.8023 1.67091 14.1116L1.66675 13.9583V6.04158C1.6667 5.3498 1.93138 4.68423 2.40647 4.18139C2.88157 3.67856 3.53108 3.37658 4.22175 3.33742L4.37508 3.33325H15.6251H4.37508ZM17.0834 7.81075L10.2917 11.3858C10.2151 11.4263 10.1308 11.4504 10.0443 11.4565C9.95776 11.4627 9.87091 11.4508 9.78925 11.4216L9.70925 11.3866L2.91675 7.81158V13.9583C2.91676 14.3242 3.05439 14.6768 3.30231 14.9461C3.55024 15.2153 3.89033 15.3815 4.25508 15.4116L4.37508 15.4166H15.6251C15.9912 15.4166 16.3439 15.2788 16.6132 15.0307C16.8824 14.7826 17.0485 14.4423 17.0784 14.0774L17.0834 13.9583V7.81075ZM15.6251 4.58325H4.37508C4.00909 4.58327 3.65648 4.72089 3.38726 4.96882C3.11803 5.21674 2.95186 5.55683 2.92175 5.92159L2.91675 6.04158V6.39908L10.0001 10.1266L17.0834 6.39825V6.04158C17.0834 5.67546 16.9456 5.32274 16.6975 5.0535C16.4494 4.78425 16.1091 4.61817 15.7442 4.58825L15.6251 4.58325Z" fill="#3F4E65" />
              </svg>

              <div className={styles.emailText}>
                <Link href="mailto:opt.sultan@mail.ru" className={styles.emailLink}>opt.sultan@mail.ru</Link>
                <span>{t('email-text')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navigationMenu}>
          <NavMenu />
        </div>
        <div className={styles.localSwitcher}><LocalSwitcher /></div>

        {/* mobile  version*/}
        <div className={styles.mobileMenuButton}>
          <MobileButton icon={icon3}
            iconClick={iconClick}
            onClick={toggleMenu}
            isClick={isMenuOpen} /></div>
        <div className={styles.mobileLogo}><LogoButton /></div>
        <div className={styles.mobileCart}><Cart /></div>
      </div>

      <div className={styles.rectangle}></div>

      <div className={styles.headerMain}>
        {/* desktop  and tablet version*/}
        <div className={styles.logo}><LogoButton /></div>
        {/* desktop button 1 */}
        <div className={styles.button1}>
          <Button text={t('button-1')} icon={icon1} href="/catalog" />
        </div>
        {/* tablet button 1*/}
        <div className={styles.tabletButton1}>
          <MobileButton text={t('button-1')}
            icon={icon1}
            href="/catalog"
            customStyle={{ width: '39px', height: '39px' }} />
        </div>
        <div className={styles.searchBar}><SearchBar /></div>
        <div className={styles.contactCard}>
          <div className={styles['contact-wrapper']}>
            <div className={styles.text}>
              <span className={styles['text-phone']}>+7 (777) 490-00-91</span>
              <span className={styles['text-wh']}>{t("workingHours")}</span>
              <Link href="tel:+77774900091" className={styles['text-call']}>{t("call")}</Link>
            </div>
            <div className={styles.image}>
              <Image src={img} alt="Контактное изображение" />
            </div>
            <div className={styles.ellipse}></div>
          </div>
        </div>
        {/* desktop button 2 */}
        <div className={styles.button2}>
          <Button
            text={t('button-2')}
            icon={icon2}
            onClick={handleDownload} />
        </div>
        {/* tablet button 2 */}
        <div className={styles.tabletButton2}>
          <MobileButton
            text={t('button-2')}
            icon={icon2}
            onClick={handleDownload}
            customStyle={{ width: '39px', height: '39px' }} />
        </div>
        <div className={styles.cart}><Cart /></div>

        {/* mobile  version*/}
        <Link href="/catalog" className={styles.mobileCatalog}>
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z" stroke="#3F4E65" />
            <path d="M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z" stroke="#3F4E65" />
            <path d="M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z" stroke="#3F4E65" />
            <path d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z" stroke="#3F4E65" />
          </svg>
          <span className={styles.mobileCatalogText}>{t('button-1')}</span>
        </Link>
        <div className={styles.mobileDivider1}></div>
        <Link href="/" className={styles.mobileSearch}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.125 13.125L10.3212 10.3162L13.125 13.125ZM11.875 6.5625C11.875 7.97146 11.3153 9.32272 10.319 10.319C9.32272 11.3153 7.97146 11.875 6.5625 11.875C5.15354 11.875 3.80228 11.3153 2.806 10.319C1.80971 9.32272 1.25 7.97146 1.25 6.5625C1.25 5.15354 1.80971 3.80228 2.806 2.806C3.80228 1.80971 5.15354 1.25 6.5625 1.25C7.97146 1.25 9.32272 1.80971 10.319 2.806C11.3153 3.80228 11.875 5.15354 11.875 6.5625V6.5625Z" stroke="#3F4E65" strokeLinecap="round" />
          </svg>
          <span className={styles.mobileSearchText}>{t('searchMobile')}</span>
        </Link>
      </div>

      <div className={styles.rectangleBottom}></div>
      {isMenuOpen && <MobileMenu onClose={toggleMenu} />}
    </header>
  );
};

export default Header;
