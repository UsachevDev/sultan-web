import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from 'next-intl';
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ShowProductSize } from "../ProductCard/ProductCard";
import { useBasket } from "../../core/context/BasketContext";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import { LOCALES } from '../constants.js';
import "./ProductBasket.scss";

const ProductBasket = ({ card }) => {
    const t = useTranslations("ProductCard");
    const currentLocale = useLocale();
    
    const { getQuantity, updateQuantity, removeFromBasket } = useBasket();
    const existingQuantity = getQuantity(card.id);
    const [quantity, setQuantity] = useState(existingQuantity);

    const updateQuantityLocal = (value) => {
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

        if (!value) {
            setQuantity("");
            return;
        }

        const parsedValue = parseInt(value, 10);

        if (!isNaN(parsedValue)) {
            const newQuantity = updateQuantityLocal(parsedValue);
            setQuantity(newQuantity);
            updateQuantity(card.id, newQuantity)
        }
    };

    const handleBlur = () => {
        if (!quantity) {
            setQuantity(1);
        }
    };

    const updateQuantityInBasket = (quantityChange) => {
        return setQuantity((prevQuantity) => {
          const newQuantity = updateQuantityLocal(prevQuantity + quantityChange);
          updateQuantity(card.id, newQuantity);
          return newQuantity;
        });
      };

    const handleIncrease = () => {
        updateQuantityInBasket(1);
    };

    const handleDecrease = () => {
        updateQuantityInBasket(-1);
    };

    const handleRemoveFromBasket = () => {
        removeFromBasket(card.id);
    };

    return (
        <article className="product-basket">
           <Link href={"/products/" + card.id} className="product-basket__image">
                <Image
                    src={"/image/productCards/card" + card.id + ".svg"}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="top"
                    alt={card.id}
                />
            </Link> 
            <div className="product-basket__text">
                <ShowProductSize
                    card={card}
                    t={t}
                    className={"product-basket__size"}
                />
                <Link href={"/products/" + card.id} className="product-basket__title">
                    <span>{card.brand.name}</span>
                    <span>{" "}{currentLocale == LOCALES.RU ? card.nameRu : card.nameEn}</span>
                </Link>
                <p className="product-basket__description">
                    {currentLocale == LOCALES.RU ? card.descriptionRu : card.descriptionEn}
                </p>
            </div>
            <div className="product-basket__details">
                <div className="product-basket__quantity">
                    <button className="product-basket__quantity-dec" onClick={handleDecrease}>-</button>
                    <input
                        type="number"
                        className="product-basket__quantity-val"
                        value={quantity}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        min="1"
                        max="100"
                        aria-live="polite"
                    />
                    <button className="product-basket__quantity-inc" onClick={handleIncrease}>+</button>
                </div>
                <p className="product-basket__price"><strong>{(quantity * card.price).toFixed(2)} ₽</strong></p>
                <ButtonUI 
                    icon="delete" 
                    size="24px"
                    className="product-basket__delete"
                    onClick={handleRemoveFromBasket}
                />
            </div>
        </article>
    )
};

export default ProductBasket;
