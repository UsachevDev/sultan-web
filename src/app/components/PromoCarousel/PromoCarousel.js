'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const PromoCarousel = () => {
    return (
        <div>
            <Carousel
                showArrows={true}
                showIndicators={true}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                stopOnHover={true}
                showThumbs={false}
            >
                <div className="slider" style={{backgroundImage: 'url("/data/image/carousel-image.png")'}}>
                    <div className="content">
                        <p className="promoDate">*АКЦИЯ ДЕЙСТВУЕТ ДО 04/09/22</p>
                        <h2 className="promoTitle">Название Акции</h2>
                        <p className="promoDescription">Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк</p>
                        <button className="promoButton">Принять участие</button>
                    </div>
                </div>
                <div className="slider" style={{backgroundImage: 'url("/data/image/carousel-image.png")'}}>
                    <div className="content">
                        <p className="promoDate">*АКЦИЯ ДЕЙСТВУЕТ ДО 04/09/22</p>
                        <h2 className="promoTitle">Название Акции</h2>
                        <p className="promoDescription">Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк</p>
                        <button className="promoButton">Принять участие</button>
                    </div>
                </div>
                <div className="slider" style={{backgroundImage: 'url("/data/image/carousel-image.png")'}}>
                    <div className="content">
                        <p className="promoDate">*АКЦИЯ ДЕЙСТВУЕТ ДО 04/09/22</p>
                        <h2 className="promoTitle">Название Акции</h2>
                        <p className="promoDescription">Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк</p>
                        <button className="promoButton">Принять участие</button>
                    </div>
                </div>
                <div className="slider" style={{backgroundImage: 'url("/data/image/carousel-image.png")'}}>
                    <div className="content">
                        <p className="promoDate">*АКЦИЯ ДЕЙСТВУЕТ ДО 04/09/22</p>
                        <h2 className="promoTitle">Название Акции</h2>
                        <p className="promoDescription">Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк</p>
                        <button className="promoButton">Принять участие</button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default PromoCarousel;
