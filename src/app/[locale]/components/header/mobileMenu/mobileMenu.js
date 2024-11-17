import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import MobileButton from '../../UI/mobileButton';
import ButtonUI from '../../UI/ButtonUI/ButtonUI';
import handleDownload from '../handleDownload';
import LocalSwitcher from '../../LocalSwitcher';
import NavMenu from '../navMenu';
import styles from './mobileMenu.module.scss';

const MobileMenu = () => {
  const t = useTranslations('Header');
  return (
    <div className={styles.overlay}>
      <div className={styles.mobileMenu}>
        <div className={styles.contactInformation}>
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
          <div className={styles.phoneBlock}>
            <div className={styles.phoneBlockInner}>
              <Image src="/icon/header-phone-icon.svg" height={18} width={18} alt="phone icon"/>
              <div className={styles.phoneBlockInnerText1}>
                <span>{t('salesDep')}</span>
                <Link href="tel:+77774900091">+7 (777) 490-00-91</Link>
              </div>
            </div>
            <span className={styles.phoneBlockText2}>{t('workingHours')}</span>
            <Link href="tel:+77774900091" className={styles.phoneBlockReqCall}>
              <MobileButton 
              icon={<Image src="/icon/header-mobile-phone-icon.svg" width={10} height={10} alt="small phone icnon"/>} 
              customStyle={{width: '30px', height: '30px'}}/>
              <span>{t("call")}</span>
            </Link>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuText}>{t('siteMenu')}</div>
          <NavMenu />
          <div className={styles.button2}>
          <ButtonUI label={t('button-2')}
            icon='download'
            onClick={handleDownload}
            className={styles.customStyleButton}/>
          </div>
        </div>
        <LocalSwitcher/>
      </div>
    </div>
  );
};

export default MobileMenu;
