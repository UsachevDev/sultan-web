"use client";

import { useTranslations } from "next-intl";

export const elemPlus = <span className="banner-footer-plus">+</span>;

export const PromoContent = () => {
    const t = useTranslations("Banner");
    return (
        [
            {
                "span": t('promo.span1')
            },
            {
                "span": t('promo.span2')
            }
        ]
    )
}

export default PromoContent;
