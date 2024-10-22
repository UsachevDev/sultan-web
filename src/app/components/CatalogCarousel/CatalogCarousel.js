'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './CatalogCarousel.css';
import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
import { sliderData } from '../../../../public/data/sliderData';

const CatalogCarousel = () => {
    const catalogSlide = sliderData[1];

    return (
        <>
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
                <SwiperSlide>
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
                        {catalogSlide.map((image, imgIndex) => (
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
                <SwiperSlide>
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
                        {catalogSlide.map((image, imgIndex) => (
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
                <SwiperSlide>
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
                        {catalogSlide.map((image, imgIndex) => (
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
            </Swiper>
        </>
    );
};

export default CatalogCarousel;