import { useState } from "react";
import { useTranslations } from "next-intl";
import { ShowProductSize } from "../ProductCard/ProductCard";
import "./ProductOverview.scss";
import ButtonUI from "../UI/ButtonUI/ButtonUI";

const ProductOverview = ({ card }) => {
    const t = useTranslations("ProductCard");

    // Состояние для видимости контента
    const [isDescriptionVisible, setDescriptionVisible] = useState(false);
    const [isSpecificationsVisible, setSpecificationsVisible] = useState(false);

    // Переключение видимости
    const toggleDescription = () => setDescriptionVisible(!isDescriptionVisible);
    const toggleSpecifications = () => setSpecificationsVisible(!isSpecificationsVisible);

    return (
        <article className="product-overview">
            <figure className="product-overview__image">
                <img src="/image/bio-mio-soap.png" alt="BioMio Bio-Soap Экологичное туалетное мыло" />
            </figure>
            <div className="product-overview__content">
                <header className="product-overview__header">
                    <h1 className="product-overview__title">
                        <span className="product-overview__title-span">{card.brand.name}</span> {t("locale") == "ru" ? card.nameRu : card.nameEn}
                    </h1>
                    <ShowProductSize card={card} t={t} className={"product-overview__subtitle"} />
                </header>

                <section className="product-overview__details">
                    <p className="product-overview__price">
                        <strong>{card.price} ₸</strong>
                    </p>

                    <div className="product-overview__actions">
                        <div className="product-overview__quantity">
                            <button className="product-overview__quantity-decrease" aria-label="Уменьшить количество">-</button>
                            <span className="product-overview__quantity-value" aria-live="polite">1</span>
                            <button className="product-overview__quantity-increase" aria-label="Увеличить количество">+</button>
                        </div>
                        <ButtonUI icon="basket" size="sm" label="В корзину" className="product-overview__add-to-cart" />
                    </div>

                    <div className="product-overview__extras">
                        <button className="product-overview__share-button"></button>
                        <p className="product-overview__delivery-info">
                            При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области
                        </p>
                        <button className="product-overview__download-price-list">Скачать прайс-лист</button>
                    </div>

                </section>

                <footer className="product-overview__footer">
                    <section className="product-overview__specifications">
                        <dl>
                            <div>
                                <dt>{t("manufacturer")}:</dt>
                                <dd>{card.manufacturer}</dd>
                            </div>
                            <div>
                                <dt>{t("brand")}:</dt>
                                <dd>{card.brand.name}</dd>
                            </div>
                            <div>
                                <dt>{t("article")}:</dt>
                                <dd>{card.article}</dd>
                            </div>
                            <div>
                                <dt>{t("barcode")}:</dt>
                                <dd>{card.barcode}</dd>
                            </div>
                        </dl>
                    </section>
                    <section className="product-overview__description">
                        <h2
                            className={`product-overview__description-title ${isDescriptionVisible ? "open" : ""
                                }`}
                            onClick={toggleDescription}
                        >
                            {t("desc")}
                        </h2>
                        {isDescriptionVisible && (
                            <p>{t("locale") === "ru" ? card.descriptionRu : card.descriptionEn}</p>
                        )}
                    </section>

                    <section className="product-overview__specifications">
                        <div className="product-overview__specifications-title-container">
                            <h2
                                className={`product-overview__specifications-title ${isSpecificationsVisible ? "open" : ""
                                    }`}
                                onClick={toggleSpecifications}
                            >
                                Характеристики
                            </h2>
                        </div>

                        {isSpecificationsVisible && (
                            <dl>
                                <div>
                                    <dt>{t("manufacturer")}:</dt>
                                    <dd>{card.manufacturer}</dd>
                                </div>
                                <div>
                                    <dt>{t("brand")}:</dt>
                                    <dd>{card.brand.name}</dd>
                                </div>
                                <div>
                                    <dt>{t("article")}:</dt>
                                    <dd>{card.article}</dd>
                                </div>
                                <div>
                                    <dt>{t("barcode")}:</dt>
                                    <dd>{card.barcode}</dd>
                                </div>
                                <div>
                                    <dt>{card.isLiquid ? t("volume") : t("weight")}:</dt>
                                    <dd>
                                        <ShowProductSize card={card} t={t} disableIcon={true} />
                                    </dd>
                                </div>
                                <div>
                                    <dt>{t("amount")}:</dt>
                                    <dd>{card.amount}</dd>
                                </div>
                            </dl>
                        )}
                    </section>

                </footer>


            </div>
        </article>
    );
};

export default ProductOverview;
