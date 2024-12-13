"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { useEffect } from "react";

import "./CategoriesList.scss";

export default function CategoriesList({ categoryId }) {
    const [isLoading, setIsLoading] = useState(true);
    const [category, setCategory] = useState();
    const t = useTranslations("CatalogPage");
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await fetch("/data/categories.json");
                const data = await response.json();
                setCategory(data.find(((el) => el.id == categoryId)));

                setIsLoading(false);
            } catch (error) {
                console.error("Ошибка загрузки", error);
                setIsLoading(false);
            }
        };

        fetchCategory();
    }, []);

    if (isLoading) {
        return <p>{t("locale") === "ru" ? "Загрузка..." : "Downloading..."}</p>;
    }

    return (
        <section className="categories-section">
            {category.subcategories.map((el,index) => (
                <div className={"categories-section-subcategory"} key={index}>
                    <h2>{t("locale") == "ru" ? el.nameRu : el.nameEn}</h2>
                    <ul>
                        {(el.subcategoriesRu).map((sub,index) => (
                            <li key={index}>{sub}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
