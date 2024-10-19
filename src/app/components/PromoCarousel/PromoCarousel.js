'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './PromoCarousel.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const PromoCarousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="swiper"
            >
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="content">
                            <p className="promo-date">*АКЦИЯ ДЕЙСТВУЕТ ДО 04/09/22</p>
                            <h2 className="promo-title">Название <span className="promo-title-span">Акции</span></h2>
                            <p className="promo-description">Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк</p>
                            <button className="promo-button">Принять участие</button>
                        </div>
                        <Image
                            className="slider-image"
                            src="/image/carousel-image.png"
                            alt="Рекламное изображение"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="content">
                            <p className="promo-date">*АКЦИЯ ДЕЙСТВУЕТ ДО 04/09/22</p>
                            <h2 className="promo-title">Название <span className="promo-title-span">Акции</span></h2>
                            <p className="promo-description">Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк</p>
                            <button className="promo-button">Принять участие</button>
                        </div>
                        <Image
                            className="slider-image"
                            src="/image/carousel-image.png"
                            alt="Рекламное изображение"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="content">
                            <p className="promo-date">*АКЦИЯ ДЕЙСТВУЕТ ДО 04/09/22</p>
                            <h2 className="promo-title">Название <span className="promo-title-span">Акции</span></h2>
                            <p className="promo-description">Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк</p>
                            <button className="promo-button">Принять участие</button>
                        </div>
                        <Image
                            className="slider-image"
                            src="/image/carousel-image.png"
                            alt="Рекламное изображение"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default PromoCarousel;
