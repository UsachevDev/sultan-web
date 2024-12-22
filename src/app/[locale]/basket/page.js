"use client";

import { useBasket } from "../core/context/BasketContext";
import ProductBasket from "../components/ProductBasket/ProductBasket";

export default function Basket() {
    const { basket } = useBasket();

    if (basket.length === 0) {
        return <p>Ваша корзина пуста.</p>;
    }

    return (
        <>
            {basket.map((product) => (
                <ProductBasket key={product.id} card={product} />
            ))}
        </>
    );
}
