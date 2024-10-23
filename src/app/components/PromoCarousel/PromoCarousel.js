'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './PromoCarousel.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { sliderData } from '../../../../public/data/sliderData';

const promotionSlide = sliderData[0];

const PromoCarousel = () => {
    return (
        <div
            className="promo-container"
        >
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="promo-swiper"
            >
                <SwiperSlide>
                    <div className="promo-swiper-slide swiper-slide">
                        <div className="promo-content">
                            <p className="promo-date">{promotionSlide.promoDate}</p>
                            <h2 className="promo-title">{promotionSlide.promoTitle} <span className="promo-title-span">{promotionSlide.promoTitleSpan}</span></h2>
                            <p className="promo-description">{promotionSlide.promoDescriptor}</p>
                            <button className="promo-button" onClick={() => console.log('Кнопка нажата!')}>
                                {promotionSlide.promoButton}
                            </button>
                        </div>
                        <Image
                            className="promo-slider-image"
                            src={promotionSlide.imageSrc}
                            alt={promotionSlide.title}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="promo-swiper-slide swiper-slide">
                        <div className="promo-content">
                            <p className="promo-date">{promotionSlide.promoDate}</p>
                            <h2 className="promo-title">{promotionSlide.promoTitle} <span className="promo-title-span">{promotionSlide.promoTitleSpan}</span></h2>
                            <p className="promo-description">{promotionSlide.promoDescriptor}</p>
                            <button className="promo-button">{promotionSlide.promoButton}</button>
                        </div>
                        <Image
                            className="promo-slider-image"
                            src={promotionSlide.imageSrc}
                            alt={promotionSlide.title}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="promo-swiper-slide swiper-slide">
                        <div className="promo-content">
                            <p className="promo-date">{promotionSlide.promoDate}</p>
                            <h2 className="promo-title">{promotionSlide.promoTitle} <span className="promo-title-span">{promotionSlide.promoTitleSpan}</span></h2>
                            <p className="promo-description">{promotionSlide.promoDescriptor}</p>
                            <button className="promo-button">{promotionSlide.promoButton}</button>
                        </div>
                        <Image
                            className="promo-slider-image"
                            src={promotionSlide.imageSrc}
                            alt={promotionSlide.title}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="promo-swiper-slide swiper-slide">
                        <div className="promo-content">
                            <p className="promo-date">{promotionSlide.promoDate}</p>
                            <h2 className="promo-title">{promotionSlide.promoTitle} <span className="promo-title-span">{promotionSlide.promoTitleSpan}</span></h2>
                            <p className="promo-description">{promotionSlide.promoDescriptor}</p>
                            <button className="promo-button">{promotionSlide.promoButton}</button>
                        </div>
                        <Image
                            className="promo-slider-image"
                            src={promotionSlide.imageSrc}
                            alt={promotionSlide.title}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default PromoCarousel;
