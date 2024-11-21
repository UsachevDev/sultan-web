"use client";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useState, useEffect } from "react";
import ProductOverview from "../../components/ProductOverview/ProductOverview";
import "./productCardPage.scss";

export default function Product({ params }) {
    const [isLoading, setIsLoading] = useState(true);
    const [card, setCard] = useState([]);
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch("/data/products.json");
                const data = await response.json();
                setCard(data.find(el => el.id == params.productId));
                setIsLoading(false);
            } catch (error) {
                console.error("Ошибка загрузки данных товаров:", error);
                setIsLoaded(false);
            }
        };

        fetchCards();
    }, []);

    if (isLoading) {
        return <p>Загрузка...</p>
    }

    return (
        <div className="page-product-card">
            <h1>WW card</h1>
            <Breadcrumbs />
            <ProductOverview card={card}/>
        </div>
    )
}
