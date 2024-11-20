import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { MENU_ITEMS } from "../constants";
import styles from "./componentsStyles.module.scss";

const NavMenu = () => {
    const t = useTranslations('Header.menu');
    
    return (
        <nav className={styles.menu}>
            {MENU_ITEMS.map((item, index) => (
                <Link key={index} href={item.href} className={styles['menu__item']}>
                    {t(item.title)}
                </Link>
            ))}
        </nav>
    )
}

export default NavMenu;
