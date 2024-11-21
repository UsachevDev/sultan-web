import { useTranslations } from "next-intl";
import { ShowProductSize } from "../ProductCard/ProductCard";
import "./ProductOverview.scss";

const ProductOverview = ({ card }) => {
    const t = useTranslations("ProductCard");

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
                        <button className="product-overview__add-to-cart" aria-label="Добавить в корзину">В корзину</button>
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
                        <h2 class="product-overview__description-title">{t("desc")}</h2>
                        <p>{t("locale") == "ru" ? card.descriptionRu : card.descriptionEn}</p>
                    </section>
                    <section className="product-overview__specifications">
                        <h2 class="product-overview__specifications-title">Характеристики</h2>
                        <dl>
                            {/* <div>
                                <dt>Назначение:</dt>
                                <dd>BioMio</dd>
                            </div>
                            <div>
                                <dt>Тип:</dt>
                                <dd>BioMio</dd>
                            </div> */}
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
                                <dd><ShowProductSize card={card} t={t} disableIcon={true} /></dd>
                            </div>
                            <div>
                                <dt>{t("amount")}:</dt>
                                <dd>{card.amount}</dd>
                            </div>
                        </dl>
                    </section>

                </footer>


            </div>
        </article>
    );
};

export default ProductOverview;
