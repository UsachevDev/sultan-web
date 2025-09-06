"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import useWidth from "../../core/hooks/useWidth";
import ProductCard from "../ProductCard/ProductCard";
import "./Cards.scss";

export const ProductsInARow = ({ cards }) => {
    return (
        <div className="cards">
            {cards.map((card) => (
                <ProductCard
                    card={card}
                    key={card.id}
                />
            ))}
        </div>
    );
};

export const ProductsSwiper = ({ cards }) => {
    return (
        <div className="cards-mobile">
            <Swiper
                className="cards-slider"
                slidesPerView="auto"
                loop={false}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
            >
                {cards.map((card) => (
                    <SwiperSlide key={card.id} style={{ width: 326 }}>
                        <ProductCard
                            card={card}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

const Cards = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cards, setCards] = useState([]);
    const { isDesktop, isLaptop } = useWidth();

    useEffect(() => {
        let aborted = false;
        const ctrl = new AbortController();

        const fetchCards = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const res = await fetch("/data/productDTOs_main.json", { signal: ctrl.signal });
                if (!res.ok) throw new Error('HTTP ${res.status}');
                const data = await res.json();
                if (!aborted) setCards(data);
            } catch (e) {
                if (!aborted) setError(e.message || "Ошибка загрузки");
            } finally {
                if (!aborted) setIsLoading(false);
            }
        };

        fetchCards();
        return () => { aborted = true; ctrl.abort(); };
    }, []);

    if (isLoading) {
        return <p>Загрузка...</p>
    }

    return (
        <>
            {isDesktop || isLaptop
                ? <ProductsInARow cards={cards} />
                : <ProductsSwiper cards={cards} />
            }
        </>
    )
};

export default Cards;
