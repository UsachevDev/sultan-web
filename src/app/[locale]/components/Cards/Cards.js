"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import useWidth from "../../core/hooks/useWidth";
import ProductCard from "../ProductCard/ProductCard";
import "./Cards.scss";

const Cards = ({ info: filter }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [cards, setCards] = useState([]);
    const { isDesktop, isLaptop } = useWidth();

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch("/data/productDTOs_main.json");
                const data = await response.json();
                setCards(data);
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
        <>
            {isDesktop || isLaptop
                ?
                <div className="cards">
                    {cards.map((card) => (
                        <ProductCard
                            card={card}
                            info={filter}
                            key={card.id}
                        />
                    ))}
                </div>
                :
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
                                    info={filter}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            }
        </>
    )
};

export default Cards;
