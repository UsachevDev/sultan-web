import { useTranslations } from "next-intl";
import "./ProductOverview.scss";

const ProductOverview = () => {
    const t = useTranslations("123");

    return (
        <article className="product-overview">
            <figure className="product-overview__image">
                <img src="/image/bio-mio-soap.png" alt="BioMio Bio-Soap Экологичное туалетное мыло" />
            </figure>
            <div className="product-overview__content">
                <header className="product-overview__header">
                    <h1 className="product-overview__title">
                        <span className="product-overview__title-span">BioMio BIO-SOAP</span> Экологичное туалетное мыло. Литсея и бергамот
                    </h1>
                    <p className="product-overview__subtitle">90 г</p>
                </header>

                <section className="product-overview__details">
                    <p className="product-overview__price">
                        <strong>48,76 ₸</strong>
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
                                <dt>Производитель:</dt>
                                <dd>BioMio</dd>
                            </div>
                            <div>
                                <dt>Бренд:</dt>
                                <dd>BioMio</dd>
                            </div>
                            <div>
                                <dt>Артикул:</dt>
                                <dd>460404</dd>
                            </div>
                            <div>
                                <dt>Штрихкод:</dt>
                                <dd>4604049097548</dd>
                            </div>
                            <div>
                                <dt>Размеры коробки:</dt>
                                <dd>10x10x10</dd>
                            </div>
                            <div>
                                <dt>Вес коробки:</dt>
                                <dd>1020 г</dd>
                            </div>
                        </dl>
                    </section>
                    <section className="product-overview__description">
                        <h2 class="product-overview__description-title">Описание</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, omnis autem similique iste natus beatae, esse vero aspernatur magni asperiores reiciendis laboriosam deserunt! Vitae hic qui assumenda, eveniet quaerat dicta.</p>
                    </section>
                    <section className="product-overview__specifications">
                        <h2 class="product-overview__specifications-title">Характеристики</h2>
                        <dl>
                            <div>
                                <dt>Назначение:</dt>
                                <dd>BioMio</dd>
                            </div>
                            <div>
                                <dt>Тип:</dt>
                                <dd>BioMio</dd>
                            </div>
                            <div>
                                <dt>Производитель:</dt>
                                <dd>460404</dd>
                            </div>
                            <div>
                                <dt>Бренд:</dt>
                                <dd>4604049097548</dd>
                            </div>
                            <div>
                                <dt>Артикул:</dt>
                                <dd>4604049097548</dd>
                            </div>
                            <div>
                                <dt>Штрихкод:</dt>
                                <dd>4604049097548</dd>
                            </div>
                            <div>
                                <dt>Вес:</dt>
                                <dd>90 г</dd>
                            </div>
                            <div>
                                <dt>Объем:</dt>
                                <dd>90 г</dd>
                            </div>
                            <div>
                                <dt>Кол-во в коробке:</dt>
                                <dd>90 г</dd>
                            </div>
                        </dl>
                    </section>

                </footer>


            </div>
        </article>
    );
};

export default ProductOverview;
