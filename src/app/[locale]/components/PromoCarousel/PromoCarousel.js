"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import ButtonUI from "UI/ButtonUI/ButtonUI.jsx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./PromoCarousel.scss";

const PromoCarousel = () => {
    const [promoData, setPromoData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const t = useTranslations("PromoCarousel");

    useEffect(() => {
        const fetchPromoData = async () => {
            try {
                const response = await fetch("/data/promoData.json");
                const data = await response.json();
                setPromoData(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Ошибка загрузки данных промо:", error);
                setIsLoading(false);
            }
        };

        fetchPromoData();
    }, []);

    if (isLoading) {
        return <p>Загрузка...</p>;
    }
    return (
        <div className="promo-container">
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                modules={[Pagination, Navigation, Autoplay]}
                className="promo-swiper"
            >
                {promoData.slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="promo-swiper-slide swiper-slide">
                            <div className="promo-content">
                                {t(slide.promoDate) && (
                                    <p className="promo-date">
                                        {t(slide.promoDate)}
                                    </p>
                                )}
                                <h2 className="promo-title">
                                    {t(slide.promoTitle)}{" "}
                                    {slide.promoTitleSpan && (
                                        <span className="promo-title-span">
                                            {t(slide.promoTitleSpan)}
                                        </span>
                                    )}
                                </h2>
                                {slide.promoDescriptor && (
                                    <p className="promo-description">
                                        {t(slide.promoDescriptor)}
                                    </p>
                                )}

                                {slide.promoButton && (
                                    <ButtonUI
                                        label={t(slide.promoButton)}
                                        size="lg"
                                    />
                                )}
                            </div>
                            <Image
                                className="promo-swiper-image"
                                src={slide.imageSrc}
                                alt={slide.title}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PromoCarousel;
