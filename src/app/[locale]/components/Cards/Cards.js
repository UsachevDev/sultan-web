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
    const [cards, setCards] = useState([]);
    const { isDesktop, isLaptop } = useWidth();

    useEffect(() => {
        const fetchCards = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("/data/productDTOs_main.json");
                const data = await response.json();
                setCards(data);
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
            {isDesktop || isLaptop
                ? <ProductsInARow cards={cards} />
                : <ProductsSwiper cards={cards} />
            }
        </>
    )
};

export default Cards;
