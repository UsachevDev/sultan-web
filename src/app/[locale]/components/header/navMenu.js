import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import styles from "./componentsStyles.module.css";

const NavMenu = () => {
    const t = useTranslations('Header.menu');

    const menuItems = [
        { text: t('1'), href: '' },
        { text: t('2'), href: '' },
        { text: t('3'), href: '' },
        { text: t('4'), href: '' },
    ];

    return (
        <nav className={styles.menu}>
        {menuItems.map((item, index) => (
            <Link key={index} href={item.href} className={styles.menuItem}>
                {item.text}
            </Link>
        ))}
        </nav>
    )
}

export default NavMenu;