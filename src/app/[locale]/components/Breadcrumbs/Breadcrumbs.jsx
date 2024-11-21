import { useTranslations } from "next-intl";
import "./Breadcrumbs.scss";

const Breadcrumbs = () => {
    const t = useTranslations("123");

    return (
        <nav class="breadcrumbs">
            <ul class="breadcrumbs__list">
                <li class="breadcrumbs__item">
                    <a href="/" class="breadcrumbs__link">Главная</a>
                </li>
                <li class="breadcrumbs__item">
                    <a href="/category" class="breadcrumbs__link">Каталог</a>
                </li>
                <li class="breadcrumbs__item">
                    Продукт
                </li>
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
