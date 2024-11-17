'use client';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import LocalSwitcher from '../LocalSwitcher';
import LogoButton from './logo-button';
import ButtonUI from '../UI/ButtonUI/ButtonUI';
import SearchBar from './searchBar';
import Cart from './cart';
import handleDownload from './handleDownload';
import MobileButton from '../UI/mobileButton';
import MobileMenu from './mobileMenu';
import NavMenu from './navMenu';
import styles from './header.module.scss';

const Header = () => {
  const t = useTranslations('Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsDesktop(width > 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.menuHeader}>
        {isDesktop && (
          <>
            <div className={styles.block1}>
              <div className={styles.locationBlockHeader}>
                <div className={styles.wrapper}>
                    <div className={styles.locationBlock}>
                        <Image src="/icon/header-location-icon.svg" height={20} width={20} alt="location icon"/>
                        <div className={styles.addressText}>
                          <span>{t('address-1')}</span>
                          <span>{t('address-2')}</span>
                        </div>
                    </div>
                    <div className={styles.emailBlock}>
                        <Image src="/icon/header-email-icon.svg" height={20} width={20} alt="email icon"/>
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
            </div>
            <div className={styles.localSwitcher}><LocalSwitcher /></div>
          </>
        )}
        {isMobile && (
          <>
            <div className={styles.mobileMenuButton}>
              <MobileButton icon={<Image src="/icon/header-mobile-menu-icon1.svg" height={12} width={12} alt="mobile menu icon"/>} 
              iconClick={<Image src="/icon/header-mobile-menu-icon2.svg" height={12} width={12} alt="mobile menu icon"/>} 
              onClick={toggleMenu}/>
            </div>
            <div className={styles.mobileLogo}><LogoButton /></div>
            <div className={styles.mobileCart}><Cart /></div>
          </>
        )}
      </div>
      <div className={styles.rectangle}></div>
      <div className={styles.headerMain}>
        {isDesktop && (
          <>
            <div className={styles.block2}>
              <div className={styles.block3}>
                <div className={styles.logo}><LogoButton /></div>
                <div className={styles.button1}>
                  <Link href="/catalog" className={styles.linkStyle}>
                    <ButtonUI label={t('button-1')}
                    icon='catalog'
                    className={styles.customStyleButton}/>
                  </Link>
                </div>
                <div className={styles.tabletButton1}>
                  <Link href="/catalog">
                    <MobileButton icon={<Image src="/icon/header-catalog-icon.svg" height={16} width={16} alt="catalog icon"/>} customStyle={{width: '39px', height: '39px'}}/>
                  </Link>
                </div>
                <div className={styles.searchBar}><SearchBar /></div>
                <div className={styles.tabletButton2}>
                <Link href="">
                  <MobileButton icon={<Image src="/icon/header-search-icon.svg" height={16} width={16} alt="catalog icon"/>} customStyle={{width: '39px', height: '39px'}}/>
                </Link>
              </div>
              </div>
              <div className={styles.block4}>
              <div className={styles.contactCard}>
                <div className={styles.contactWrapper}>
                    <div className={styles.text}>
                      <span>+7 (777) 490-00-91</span>
                      <span>{t("workingHours")}</span>
                      <Link href="tel:+77774900091">{t("call")}</Link>
                    </div>
                    <div className={styles.image}>
                      <Image src="/image/header-image.png" width={472} height={719} alt="contacts image" />
                    </div>
                    <div className={styles.ellipse}></div>
                </div>
              </div>
              <div className={styles.button2}>
                <ButtonUI label={t('button-2')}
                icon='download'
                onClick={handleDownload}
                className={styles.customStyleButton}/>
              </div>
              <div className={styles.tabletButton3}>
                <MobileButton icon={<Image src="/icon/download.svg" height={17} width={18} alt="download icon"/>}
                onClick={handleDownload}
                customStyle={{width: '39px', height: '39px'}}/>
              </div>
              <div className={styles.cart}><Cart /></div>
            </div>
            </div>
          </>
        )}
        {isMobile && (
          <>
            <Link href="/catalog" className={styles.mobileCatalog}>
              <Image src="/icon/header-mobile-catalog-icon.svg" height={15} width={15} alt="mobile catalog icon"/>
              <span className={styles.mobileCatalogText}>{t('button-1')}</span>
            </Link>
            <div className={styles.mobileDivider1}></div>
            <Link href="/" className={styles.mobileSearch}>
              <Image src="/icon/header-mobile-search-icon.svg" height={15} width={15} alt="mobile search icon"/>
              <span className={styles.mobileSearchText}>{t('searchMobile')}</span>
            </Link>
          </>
        )}
      </div>
      <div className={styles.rectangleBottom}></div>
      {isMenuOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
