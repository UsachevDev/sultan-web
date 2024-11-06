import Image from "next/image";
import { useTranslations } from "next-intl";
import { ToBasketButton } from "../ToBasketButton/ToBasketButton";
import "./ProductCard.css";

function ShowInfo({ info: filter, t: t }) {
    let text;
    switch (filter) {
        case "discount": {
            text = "СКИДКА";
            break;
        }
        case "popular": {
            text = t('popular');
            break;
        }
        default:
            text = "";
    }
    if (filter != null) {
        return <span className={filter}>{text}</span>
    };
}

function ShowSize({ card: card, t: t }) {
    let size;
    let type;
    if (card.amount > 1) {
        size = card.amount + "x" + +(card.size / card.amount).toFixed(2);
    }
    else {
        size = card.size;
    }
    let icon;
    if (card.isLiquid) {
        icon = <Image src="/icon/bottle-icon.svg" width={9} height={15} />;
        type = t("liquidType")
    }
    else {
        icon = <Image src="/icon/box-icon.svg" width={20} height={14} />;
        type = t("type")
    }

    return <span className="product-size">{icon} {size} {type}</span>
}

export default function ProductCard({ card: el, info: filter }) {
    const t = useTranslations("ProductCard");

    return (
        <div className="product-card">
            <div className="product-img">
                <ShowInfo info={filter} t={t} />
                <Image
                    src={"/image/productCards/card" + el.id + ".svg"}
                    width={el.img.width}
                    height={el.img.height}
                    alt={el.img.alt}
                />
                <ShowSize card={el} t={t} />
            </div>
            <div className="product">
                <div className="product-name"><strong style={{ fontWeight: 800 }}>{el.brand.name}</strong> {t("productName") === "ru" ? el.nameRu : el.nameEn}</div>
                <div className="product-desc">
                    <ul>
                        <li><span className="product-desc-name">{t("barcode")}: </span>{el.barcode}</li>
                        <li><span className="product-desc-name">{t("manufacturer")}: </span>{el.manufacturer}</li>
                        <li><span className="product-desc-name">{t("brand")}: </span>{el.brand.name}</li>
                    </ul>
                </div>
                <span className="product-footer">
                    <span className="product-price" style={{ fontWeight: 800 }}>{el.price}₽</span>
                    <span className="product-tobasket"><ToBasketButton /> </span>
                </span>

            </div>
        </div>
    )
};