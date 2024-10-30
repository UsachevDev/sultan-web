'use client';
import React, {useState} from 'react';
import NavigationMenu from './navMenu';
import LocalSwitcher from './local-switcher';
import LogoButton from '../logo-button';
import Button from '../button';
import SearchBar from '../searchBar';
import Cart from './cart';
import styles from './header.module.css';
import ContactCard from './contactCard';
import LocationEmail from './locationEmail';
import { useTranslations } from 'next-intl';
import handleDownload from './handleDownload';
import MobileButton from '../mobileButton';
import { Link } from '@/i18n/routing';
import MobileMenu from './mobileMenu';

const icon1 = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z" stroke="white"/>
  <path d="M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z" stroke="white"/>
  <path d="M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z" stroke="white"/>
  <path d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z" stroke="white"/>
  </svg>
);

const icon2 = (
  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.9583 6.375H11.1249V2.125H6.87492V6.375H4.04159L8.99992 12.0417L13.9583 6.375ZM3.33325 13.4583H14.6666V14.875H3.33325V13.4583Z" fill="white"/>
  </svg>
);

const icon3 = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.79993 6.5999H10.1999V5.3999H1.79993V6.5999ZM1.79993 9.5999H10.1999V8.3999H1.79993V9.5999ZM1.79993 2.3999V3.5999H10.1999V2.3999H1.79993Z" fill="white"/>
  </svg>
);

const iconClick = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.76746 8.42432L3.57558 9.23244L9.23243 3.57558L8.42431 2.76746L2.76746 8.42432Z" fill="white"/>
  <path d="M8.42432 9.23242L9.23244 8.4243L3.57558 2.76745L2.76746 3.57557L8.42432 9.23242Z" fill="white"/>
  </svg>
);


const Header = () => {
  const t = useTranslations('Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  
  return (
    <header className={styles.header}>
      <div className={styles.menu}>
        {/* desktop  vesion*/}
        <div className={styles.locationBlock}><LocationEmail /></div>
        <div className={styles.navigationMenu}><NavigationMenu /></div>
        <div className={styles.localSwitcher}><LocalSwitcher /></div>

        {/* mobile  vesion*/}
        <div className={styles.mobileMenuButton}><MobileButton icon={icon3} iconClick={iconClick} onClick={toggleMenu} isClick={isMenuOpen}/></div>
        <div className={styles.mobileLogo}><LogoButton /></div>
        <div className={styles.mobileCart}><Cart /></div>
      </div>

      <div className={styles.rectangle}></div>

      <div className={styles.headerMain}>
         {/* desktop  vesion*/}
        <div className={styles.logo}><LogoButton /></div>
        <div className={styles.button1}>
          <Button text={t('button-1')} icon={icon1} href="/catalog" />
        </div>
        <div className={styles.searchBar}><SearchBar /></div>
        <div className={styles.contactCard}><ContactCard /></div>
        <div className={styles.divider1}></div>
        <div className={styles.button2}>
          <Button 
          text={t('button-2')} 
          icon={icon2}
          onClick={handleDownload}/>
        </div>
        <div className={styles.divider2}></div>
        <div className={styles.cart}><Cart /></div>

        {/* mobile  vesion*/}
        <Link href="/catalog" className={styles.mobileCatalog}>
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z" stroke="#3F4E65"/>
          <path d="M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z" stroke="#3F4E65"/>
          <path d="M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z" stroke="#3F4E65"/>
          <path d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z" stroke="#3F4E65"/>
          </svg>
          <span className={styles.mobileCatalogText}>{t('button-1')}</span>
        </Link>
        <div className={styles.mobileDevider1}></div>
        <Link href="/" className={styles.mobileSearch}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.125 13.125L10.3212 10.3162L13.125 13.125ZM11.875 6.5625C11.875 7.97146 11.3153 9.32272 10.319 10.319C9.32272 11.3153 7.97146 11.875 6.5625 11.875C5.15354 11.875 3.80228 11.3153 2.806 10.319C1.80971 9.32272 1.25 7.97146 1.25 6.5625C1.25 5.15354 1.80971 3.80228 2.806 2.806C3.80228 1.80971 5.15354 1.25 6.5625 1.25C7.97146 1.25 9.32272 1.80971 10.319 2.806C11.3153 3.80228 11.875 5.15354 11.875 6.5625V6.5625Z" stroke="#3F4E65" stroke-linecap="round"/>
          </svg>
          <span className={styles.mobileSearchText}>{t('searchMobile')}</span>
        </Link>
      </div>

      <div className={styles.rectangleBottom}></div>
      {isMenuOpen && <MobileMenu onClose={toggleMenu}/>}
    </header>
  );
};

export default Header;
