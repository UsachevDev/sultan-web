
import Image from "next/image";
import "./ToBasketButton.css";
import { useTranslations } from "next-intl";

export async function ToBasketButton() {  
    const t = useTranslations("ToBasketButton");

    return (
        <> 
            <button className="btn-basket">
                <span>{t("text")}</span>
                <span><Image src={"/icon/basket-icon.svg"} width={27} height={27} alt="basket"/></span>
            </button>          
        </>
    );
};