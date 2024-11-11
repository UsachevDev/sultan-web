
import { useTranslations } from "next-intl";
import Image from "next/image";
import "./ToBasketButton.css";

export function ToBasketButton() {
    const t = useTranslations("ToBasketButton");

    return (
        <>
            <button className="btn-basket">
                <span>{t("text")}</span>
                <span><Image src={"/icon/basket-icon.svg"} width={27} height={27} alt="basket" /></span>
            </button>
        </>
    );
};
