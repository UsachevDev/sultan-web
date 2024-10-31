"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../ProductCard/ProductCard";
import "./Cards.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";


const Cards = ({info: filter}) =>{
    const [isLoading, setIsLoading] = useState(true);
    const [cards, setCards] = useState(null);

    useEffect(() => {
        const fetchCards = async () => {
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

    if(isLoading)
    {
        return <p>Загрузка...</p>
    }
    return (
        <>
            {/* desktop */}
            <div className="cards">
                {cards.map((card) => (
                    <ProductCard 
                        card={card} 
                        info={filter} 
                        key={card.id}
                    />          
                ))}
            </div>

            {/* mobile */}
            <div className="cards-mobile">
            <Swiper
                slidesPerView="auto"
                spaceBetween={50}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                modules={[Pagination, Navigation, Autoplay]}
            >
                {cards.map((card) => (
                    <SwiperSlide key={card.id}>
                        <ProductCard 
                        card={card} 
                        info={filter}   
                        key={card.id}                 
                    /> 
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </>
        
    )
};

export default Cards;