import { useTranslations } from "next-intl";
import "./CategoriesList.scss";


export default function CategoriesList({ category }) {
    const t = useTranslations("CatalogPage");
    return (
        <section className="categories-section">
            {category.subcategories.map((subcategory,index) => (
                <div className={"categories-section-subcategory"} key={index}>
                    <h2>{t("locale") == "ru" ? subcategory.nameRu : subcategory.nameEn}</h2>
                    <ul>
                        {(subcategory.subcategoriesRu).map((sub,index) => (
                            <li key={index}>{sub}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
