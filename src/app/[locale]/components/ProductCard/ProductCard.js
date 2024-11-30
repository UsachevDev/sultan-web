import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import Icon from "../UI/Icons/Icons";
import "./ProductCard.scss";

export function ShowProductSize({ card: card, t: t, className: name, disableIcon = false}) {
    let size = +(card.size / card.amount).toFixed(2);
    if (card.amount > 1) {
        size = card.amount + "x" + size;
    }

    let icon, type;
    card.isLiquid 
        ? (icon = <Icon name="bottle"/>, type = t('liquidType'))
        : (icon = <Icon name="box"/>, type = t('type'))

    return (
        <span className={name}>
            {!disableIcon && icon}
            {size}
            <b>{type}</b>
        </span>);
}

export default function ProductCard({ card: el }) {
    const t = useTranslations("ProductCard");
    const productName = t("productName") === "ru" ? el.nameRu : el.nameEn;
    return (
            <article className="product-card">
                <Link href={"/products/" + el.id}>
                    <div className="product-img">
                        {el.isPopular && (
                            <span className="popular">{t("popular")}</span>
                        )}
                        <Image
                            src={"/image/productCards/card" + el.id + ".svg"}
                            fill={true}
                            alt={productName}
                        />
                        <ShowProductSize card={el} t={t} className="product-size"/>
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
                            <ButtonUI icon="basket" size="sm" label={t('button').toUpperCase()} className="btn-tocart" />
                        </span>
                    </div>
                </Link>
            </article>
    )
};
