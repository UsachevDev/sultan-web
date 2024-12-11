"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

import "./catalogPage.scss";

export default function Product({ params }) {
    const t = useTranslations("CatalogPage");
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [similar, setSimilar] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/productDTOs_main.json");
                const data = await response.json();
                const cardTmp = data.find((element) => element.id == params.productId);
                setData(cardTmp);
                setSimilar(
                    data.filter(
                        ({ category, id }) =>
                            category == cardTmp.category && id != cardTmp.id
                    )
                );
                setIsLoading(false);
            } catch (error) {
                console.error("Ошибка загрузки данных:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <p>{t("locale") === "ru" ? "Загрузка..." : "Downloading..."}</p>;
    }

    return (
        <div className="page-catalog">
            <Breadcrumbs
                current={""}
            />
            <h2>{t("title")}</h2>
        </div>
    );
}
