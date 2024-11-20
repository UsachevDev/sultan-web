import Image from "next/image";
import { useTranslations } from "next-intl";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import "./ProductCard.scss";
import Icon from "../UI/Icons/Icons";

function ShowSize({ card: card, t: t }) {
    let size = +(card.size / card.amount).toFixed(2);
    if (card.amount > 1) {
        size = card.amount + "x" + size;
    }

    let icon, type;
    card.isLiquid 
        ? (icon = <Icon name="bottle"/>, type = t('liquidType'))
        : (icon = <Icon name="box"/>, type = t('type'))

    return (
        <span className="product-size">
            {icon}
            {size}
            {type}
        </span>);
}

export default function ProductCard({ card: el }) {
    const t = useTranslations("ProductCard");
    const productName = t("productName") === "ru" ? el.nameRu : el.nameEn;
    return (
        <article className="product-card">
            <div className="product-img">
                {el.isPopular && (
                    <span className="popular">{t("popular")}</span>
                )}
                <Image
                    src={"/image/productCards/card" + el.id + ".svg"}
                    fill={true}
                    alt={productName}
                />
                <ShowSize card={el} t={t}/>
            </div>
            <div className="product">
                <div className="product-name">
                    <strong style={{ fontWeight: 800 }}>{el.brand.name} </strong>
                    {productName}</div>
                <div className="product-desc">
                    <ul>
                        <li><span className="product-desc-name">{t("barcode")}: </span>{el.barcode}</li>
                        <li><span className="product-desc-name">{t("manufacturer")}: </span>{el.manufacturer}</li>
                        <li><span className="product-desc-name">{t("brand")}: </span>{el.brand.name}</li>
                    </ul>
                </div>
                <span className="product-footer">
                    <span className="product-price" style={{ fontWeight: 800 }}>{el.price}₽</span>
                    <ButtonUI icon="basket" size="sm" label="В КОРЗИНУ" className="btn-tocart" />
                </span>
            </div>
        </article>
    )
};
