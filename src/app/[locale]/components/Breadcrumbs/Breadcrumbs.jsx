import { useTranslations } from "next-intl";
import "./Breadcrumbs.scss";

const Breadcrumbs = () => {
    return (
        <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                    <a href="/" className="breadcrumbs__link">Главная</a>
                </li>
                <li className="breadcrumbs__item">
                    <a href="/category" className="breadcrumbs__link">Каталог</a>
                </li>
                <li className="breadcrumbs__item">
                    Продукт
                </li>
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
