import {Link} from '@/i18n/routing';
import styles from './navMenu.module.css';
import { useTranslations } from 'next-intl';

const NavigationMenu = () => {
    const t = useTranslations('Header.menu');
  return (
    <nav className={styles.menu}>
      <Link href="" className={styles.menuItem}>
      {t("1")}
      </Link>
      <div className={styles.divider}></div>
      <Link href="" className={styles.menuItem}>
      {t("2")}
      </Link>
      <div className={styles.divider}></div>
      <Link href="" className={styles.menuItem}>
      {t("3")}
      </Link>
      <div className={styles.divider}></div>
      <Link href="" className={styles.menuItem}>
      {t("4")}
      </Link>
    </nav>
  );
};

export default NavigationMenu;
