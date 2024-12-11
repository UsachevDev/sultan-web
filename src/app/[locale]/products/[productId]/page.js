"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductOverview from "../../components/ProductOverview/ProductOverview";
import { ProductsSwiper } from "../../components/Cards/Cards";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./productCardPage.scss";

export default function Product({ params }) {
    const t = useTranslations("ProductCard");
    const pageT = useTranslations("ProductPage");
    const [isLoading, setIsLoading] = useState(true);
    const [card, setCard] = useState([]);
    const [similar, setSimilar] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch("/data/products.json");
                const data = await response.json();
                const cardTmp = data.find((el) => el.id == params.productId);
                setCard(cardTmp);
                setSimilar(
                    data.filter(
                        ({ category, id }) =>
                            category == cardTmp.category && id != cardTmp.id
                    )
                );
                setIsLoading(false);
            } catch (error) {
                console.error("Ошибка загрузки данных товаров:", error);
                setIsLoading(false);
            }
        };

        fetchCards();
    }, []);

    if (isLoading) {
        return <p>{t("locale") === "ru" ? "Загрузка..." : "Downloading..."}</p>;
    }

    return (
        <div className="page-product-card">
            <Breadcrumbs
                current={t("locale") == "ru" ? card.nameRu : card.nameEn}
            />
            <ProductOverview card={card} />
            <section className="page-product-card__similar">
                <h1>
                    <b>{pageT("headerPrimary")}</b>
                    {pageT("headerSecondary")}
                </h1>
                <ProductsSwiper cards={similar} />
            </section>
        </div>
    );
}
