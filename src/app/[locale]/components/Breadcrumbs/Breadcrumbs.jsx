import { useTranslations } from "next-intl";
import "./Breadcrumbs.scss";

const Breadcrumbs = ({current}) => {
    const t = useTranslations("Breadcrumbs");

    return (
        <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                    <a href="/" className="breadcrumbs__link">{t("HomePage")}</a>
                </li>
                <li className="breadcrumbs__item">
                    <a href="/category" className="breadcrumbs__link">{t("Catalog")}</a>
                </li>
                <li className="breadcrumbs__item">
                    {current}
                </li>
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
