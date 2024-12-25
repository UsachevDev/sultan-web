"use client";
import { useTranslations } from "next-intl";
import { useBasket } from "../core/context/BasketContext";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ProductBasket from "../components/ProductBasket";
import ButtonUI from "../components/UI/ButtonUI/ButtonUI";
import "./basketPage.scss";

export default function Basket() {
    const { basket, totalCost } = useBasket();
    const t = useTranslations("BasketPage");

    return (
        <div className="page-basket">
            <Breadcrumbs
                current={t("title")}
            />
            <h1 className="page-basket__title">
                <b>{t("title")}</b>
            </h1>
            {!basket.length ? (
                <p>{t("emptyBasket")}</p>
            ) : (
            <>
                <div className="page-basket__products">
                    {basket.map((product, index) => (
                        <div key={index} className="page-basket__product-wrapper">
                            <ProductBasket card={product} />
                        </div>
                    ))}
                </div>
                <div className="page-basket__footer">
                    <ButtonUI 
                        label={t("order")}
                        className="page-basket__button"
                    />
                    <span className="page-basket__cost">{totalCost} ₽</span>
                </div>
            </> 
            )}
        </div>
    );
}
