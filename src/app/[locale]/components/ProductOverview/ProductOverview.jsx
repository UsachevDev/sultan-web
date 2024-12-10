import { useState } from "react";
import { useTranslations } from "next-intl";
import { ShowProductSize } from "../ProductCard/ProductCard";
import Image from "next/image";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import Accordion from "../UI/Accordion/Accordion";
import "./ProductOverview.scss";

const ProductOverview = ({ card }) => {
    const t = useTranslations("ProductCard");

    const [quantity, setQuantity] = useState(1);

    // Проверка и установка значения в пределах допустимого диапазона
    const updateQuantity = (value) => {
        if (value >= 1 && value <= 100) {
            return value;
        }
        if (value > 100) {
            return 100;
        }
        return 1;
    };

    const handleInputChange = (e) => {
        const value = e.target.value;

        if (value === "") {
            setQuantity("");
            return;
        }

        const parsedValue = parseInt(value, 10);

        if (!isNaN(parsedValue)) {
            setQuantity(updateQuantity(parsedValue));
        }
    };

    const handleBlur = () => {
        if (quantity === "") {
            setQuantity(1);
        }
    };

    const handleIncrease = () => {
        setQuantity((prevQuantity) => updateQuantity(prevQuantity + 1));
    };

    const handleDecrease = () => {
        setQuantity((prevQuantity) => updateQuantity(prevQuantity - 1));
    };

    return (
        <article className="product-overview">
            <figure className="product-overview__image">
                <Image
                    src={"/image/productCards/card" + card.id + ".svg"}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="top"
                    alt={card.id}
                />
            </figure>
            <div className="product-overview__content">
                <header className="product-overview__header">
                    <h1 className="product-overview__title">
                        <span className="product-overview__title-span">
                            {card.brand.name}
                        </span>{" "}
                        {t("locale") == "ru" ? card.nameRu : card.nameEn}
                    </h1>
                    <ShowProductSize
                        card={card}
                        t={t}
                        className={"product-overview__subtitle"}
                    />
                </header>

                <section className="product-overview__details">
                    <p className="product-overview__price">
                        <strong>{card.price} ₸</strong>
                    </p>

                    <div className="product-overview__quantity">
                        <button
                            className="product-overview__quantity-decrease"
                            onClick={handleDecrease}
                        >
                            -
                        </button>
                        <input
                            type="number"
                            className="product-overview__quantity-value"
                            value={quantity}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            min="1"
                            max="100"
                            aria-live="polite"
                        />
                        <button
                            className="product-overview__quantity-increase"
                            onClick={handleIncrease}
                        >
                            +
                        </button>
                    </div>
                    <ButtonUI
                        icon="basket"
                        size="sm"
                        label={t("button")}
                        className="product-overview__add-to-cart"
                    />

                    <ButtonUI
                        icon="share"
                        size="sm"
                        className="product-overview__share-button"
                    />
                    <p className="product-overview__delivery-info">
                        {t("delivery-info")}
                    </p>
                    <ButtonUI
                        icon="download-dark"
                        size="sm"
                        label={t("button-price-list")}
                        className="product-overview__download-price-list"
                    />
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
                    <Accordion
                        title={t("desc")}
                        className="product-overview__description"
                    >
                        <p>
                            {t("locale") === "ru"
                                ? card.descriptionRu
                                : card.descriptionEn}
                        </p>
                    </Accordion>

                    <Accordion
                        title={t("spec")}
                        className="product-overview__specifications"
                    >
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
                                <dt>
                                    {card.isLiquid ? t("volume") : t("weight")}:
                                </dt>
                                <dd>
                                    <ShowProductSize
                                        card={card}
                                        t={t}
                                        disableIcon={true}
                                    />
                                </dd>
                            </div>
                            <div>
                                <dt>{t("amount")}:</dt>
                                <dd>{card.amount}</dd>
                            </div>
                        </dl>
                    </Accordion>
                </footer>
            </div>
        </article>
    );
};

export default ProductOverview;
