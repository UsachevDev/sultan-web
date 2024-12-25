import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import Icon from "../UI/Icons/Icons";
import "./ProductCard.scss";

export function ShowProductSize({
    card: card,
    t: t,
    className: name,
    disableIcon = false,
}) {
    let size = +(card.size / card.amount).toFixed(2);
    if (card.amount > 1) {
        size = card.amount + "x" + size;
    }

    let icon, type;
    card.isLiquid
        ? ((icon = <Icon name="bottle" />), (type = t("liquidType")))
        : ((icon = <Icon name="box" />), (type = t("type")));

    return (
        <span className={name}>
            {!disableIcon && icon}
            {size}
            <b>{type}</b>
        </span>
    );
}

export default function ProductCard({ card: element }) {
    const t = useTranslations("ProductCard");
    const productName =
        t("productName") === "ru" ? element.nameRu : element.nameEn;
    return (
        <article className="product-card">
            <Link href={`/products/${element.id}`}>
                <div className="product-img">
                    {element.isPopular && (
                        <span className="popular">{t("popular")}</span>
                    )}
                    <Image
                        src={"/image/productCards/card" + element.id + ".svg"}
                        fill={true}
                        alt={productName}
                    />
                    <ShowProductSize
                        card={element}
                        t={t}
                        className="product-size"
                    />
                </div>
                <div className="product">
                    <div className="product-name">
                        <strong style={{ fontWeight: 800 }}>
                            {element.brand.name}{" "}
                        </strong>
                        {productName}
                    </div>
                    <div className="product-desc">
                        <ul>
                            <li>
                                <span className="product-desc-name">
                                    {t("barcode")}:{" "}
                                </span>
                                {element.barcode}
                            </li>
                            <li>
                                <span className="product-desc-name">
                                    {t("manufacturer")}:{" "}
                                </span>
                                {element.manufacturer}
                            </li>
                            <li>
                                <span className="product-desc-name">
                                    {t("brand")}:{" "}
                                </span>
                                {element.brand.name}
                            </li>
                        </ul>
                    </div>
                    <span className="product-footer">
                        <span
                            className="product-price"
                            style={{ fontWeight: 800 }}
                        >
                            {element.price}₽
                        </span>
                        <Link href={`/basket`}>
                            <ButtonUI
                            icon="basket"
                            size="sm"
                            label={t("button")}
                            className="btn-tocart"
                            />
                        </Link>
                    </span>
                </div>
            </Link>
        </article>
    );
}
