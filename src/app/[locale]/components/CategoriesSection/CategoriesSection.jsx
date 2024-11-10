"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./CategoriesSection.scss";

const CategoriesSection = () => {
    const [title, setTitle] = useState({});
    const [subtitle, setSubtitle] = useState("");
    const [items, setItems] = useState([]);
    const t = useTranslations("Categories");

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch("/data/categoriesData.json");
            const data = await response.json();
            setTitle(data.title);
            setSubtitle(data.subtitle);
            setItems(data.items);
        };

        fetchCategories();
    }, []);

    return (
        <div className="categories-section">
            <h2>
                {t("title")}
                <span>{t("titleSpan")}</span>
            </h2>
            <p className="subtitle">{t("subtitle")}</p>
            <ul className="categories-section-list">
                {items.map((item) => (
                    <li key={item.id} className="categories-section-item">
                        <a href={item.link}>
                            <Image
                                src={item.image}
                                alt={t(`items.${item.name}`)}
                                className="category-image"
                                width={250}
                                height={250}
                            />
                            <p className="category-name">
                                {t(`items.${item.name}`)}
                            </p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesSection;
