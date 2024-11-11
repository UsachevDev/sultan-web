"use client";
import { useTranslations } from "next-intl";
import Cards from "../Cards/Cards";
import "./FeaturedProducts.scss";

export default function FeaturedProducts() {
    const t = useTranslations("GoodsForSale");
    return (
        <div className="featured-products">
            <div>
                <h2 className="featured-products-head"><span>{t("h1.firstPart")}</span> {t("h1.secondPart")}</h2>
                <Cards info="popular" />
            </div>
        </div>
    )
}
