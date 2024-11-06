'use client'
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './CatalogCarousel.css';

const CatalogCarousel = () => {
    const [mainSlider, setMainSlider] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/catalogData.json");
                const data = await response.json();
                setMainSlider(data.mainSlider);
                setIsLoading(false);
            } catch (error) {
                console.error("Ошибка загрузки данных:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <p>Загрузка...</p>;
    }

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={false}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="catalog-swiper"
        >
            {mainSlider.map((slideGroup, groupIndex) => (
                <SwiperSlide key={groupIndex}>
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={10}
                        loop={false}
                        freeMode={{
                            enabled: true,
                        }}
                        modules={[FreeMode]}
                        className="catalog-swiper-slide"
                    >
                        {slideGroup.slides.map((image, imgIndex) => (
                            <SwiperSlide key={imgIndex} style={{ width: `${image.width}px` }}>
                                <Image
                                    className="catalog-slider-image"
                                    src={image.imageSrc}
                                    alt={image.title}
                                    width={image.width}
                                    height={image.height}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CatalogCarousel;
