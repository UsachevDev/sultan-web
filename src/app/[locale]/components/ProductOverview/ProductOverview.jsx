import { useState } from "react";
import { useTranslations } from "next-intl";
import { ShowProductSize } from "../ProductCard/ProductCard";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import "./ProductOverview.scss";

const ProductOverview = ({ card }) => {
    const t = useTranslations("ProductCard");

    // Состояние для количества товара
    const [quantity, setQuantity] = useState(1);

    // Состояние для видимости контента
    const [isDescriptionVisible, setDescriptionVisible] = useState(false);
    const [isSpecificationsVisible, setSpecificationsVisible] = useState(false);

    // Переключение видимости
    const toggleDescription = () =>
        setDescriptionVisible(!isDescriptionVisible);
    const toggleSpecifications = () =>
        setSpecificationsVisible(!isSpecificationsVisible);

    // Изменение количества товара
    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 1 && value <= 100) {
            setQuantity(value);
        } else if (value > 100) {
            setQuantity(100);
        } else {
            setQuantity(1);
        }

        e.target.style.width = `${e.target.value.length + 5}ch`;
    };
    
    const handleIncrease = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = Math.min(prevQuantity + 1, 100);
            updateInputWidth(newQuantity);
            return newQuantity;
        });
    };

    const handleDecrease = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity > 1 ? prevQuantity - 1 : 1;
            updateInputWidth(newQuantity);
            return newQuantity;
        });
    };

    // Функция для обновления ширины инпута
    const updateInputWidth = (value) => {
        const inputElement = document.querySelector(
            ".product-overview__quantity-value"
        );
        inputElement.style.width = `${value.toString().length + 5}ch`;
    };

    return (
        <article className="product-overview">
            <figure className="product-overview__image">
                <img
                    src="/image/bio-mio-soap.png"
                    alt="BioMio Bio-Soap Экологичное туалетное мыло"
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
                            aria-label="Уменьшить количество"
                            onClick={handleDecrease}
                        >
                            -
                        </button>
                        <input
                            type="number"
                            className="product-overview__quantity-value"
                            value={quantity}
                            onChange={handleInputChange}
                            min="1"
                            max="100"
                            aria-live="polite"
                        />
                        <button
                            className="product-overview__quantity-increase"
                            aria-label="Увеличить количество"
                            onClick={handleIncrease}
                        >
                            +
                        </button>
                    </div>
                    <ButtonUI
                        icon="basket"
                        size="sm"
                        label="В корзину"
                        className="product-overview__add-to-cart"
                    />

                    <ButtonUI
                        icon="share"
                        size="sm"
                        className="product-overview__share-button"
                    />
                    <p className="product-overview__delivery-info">
                        При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву
                        и области
                    </p>
                    <ButtonUI
                        icon="download-dark"
                        size="sm"
                        label="Прайс-лист"
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
                    <section className="product-overview__description">
                        <h2
                            className={`product-overview__description-title ${
                                isDescriptionVisible ? "open" : ""
                            }`}
                            onClick={toggleDescription}
                        >
                            {t("desc")}
                        </h2>
                        {isDescriptionVisible && (
                            <p>
                                {t("locale") === "ru"
                                    ? card.descriptionRu
                                    : card.descriptionEn}
                            </p>
                        )}
                    </section>

                    <section className="product-overview__specifications">
                        <div className="product-overview__specifications-title-container">
                            <h2
                                className={`product-overview__specifications-title ${
                                    isSpecificationsVisible ? "open" : ""
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
                                    <dt>
                                        {card.isLiquid
                                            ? t("volume")
                                            : t("weight")}
                                        :
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
                        )}
                    </section>
                </footer>
            </div>
        </article>
    );
};

export default ProductOverview;
