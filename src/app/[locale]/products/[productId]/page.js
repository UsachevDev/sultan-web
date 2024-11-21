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
    const [isLoading, setIsLoading] = useState(true);
    const [card, setCard] = useState([]);
    const [similar, setSimilar] = useState([]);
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch("/data/products.json");
                const data = await response.json();
                const cardTmp = data.find(el => el.id == params.productId);
                setCard(cardTmp);
                setSimilar(data.filter((el) => el.category == cardTmp.category && el.id != cardTmp.id));
                setIsLoading(false);
            } catch (error) {
                console.error("Ошибка загрузки данных товаров:", error);
                setIsLoading(false);
            }
        };

        fetchCards();
    }, []);

    if (isLoading) {
        return <p>Загрузка...</p>
    }

    return (
        <>
            <div className="page-product-card">
                <Breadcrumbs current={t("locale") == "ru" ? card.nameRu : card.nameEn} />
                <ProductOverview card={card} />
            </div>
            <ProductsSwiper cards={similar} />
        </>

    )
}
