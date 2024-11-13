import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { MENU_ITEMS } from "../constants";
import styles from "./componentsStyles.module.scss";

const NavMenu = () => {
    const t = useTranslations('Header.menu');

    const menuItems = MENU_ITEMS.map((item) => ({
        ...item,
        text: t(item.key),
    }));

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
