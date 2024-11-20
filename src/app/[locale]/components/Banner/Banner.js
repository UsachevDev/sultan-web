"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import useWidth from "../../core/hooks/useWidth";
import { elemPlus, PromoContent } from "./BannerPromo";
import ButtonUI from "../UI/ButtonUI/ButtonUI";

import "./Banner.scss";

const Banner = () => {
    const { isMobile, isMobileSmall } = useWidth();
    const promoData = PromoContent();
    const t = useTranslations("Banner");
    return (
        <>
            {!isMobile && !isMobileSmall
                ?
                <div className="banner">
                    <div className="banner-blur" />
                    <div className="banner-container" >
                        <div className="banner-content">
                            <h1>
                                {t('h1.firstLine')}<br /> {t('h1.secondLine')}
                            </h1>
                            <h2>{t('h2')}</h2>
                            <Link href={"/products"}>
                                <ButtonUI
                                    label={t('button')}
                                    size="lg"
                                    className="btn-catalog">
                                </ButtonUI>
                            </Link>
                            <div className="banner-footer">
                                {promoData.map((el, index) => (
                                    <span className="banner-footer-promo" key={"promo" + index}>
                                        {elemPlus}
                                        <p>{el.span}</p>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                :
                <section className="banner-mobile">
                    <div className="banner">
                        <div className="banner-blur" />
                        <div className="banner-container" >
                            <div className="banner-content">
                                <h1>
                                    {t('h1.firstLine')}<br /> {t('h1.secondLine')}
                                </h1>
                                <h2>{t('h2')}</h2>

                            </div>
                        </div>
                    </div>
                    <div className="banner-footer-mobile" >
                        {promoData.map((el, index) => (
                            <span className="banner-footer-promo" key={"promo" + index}>
                                {elemPlus}
                                <p>{el.span}</p>
                            </span>
                        ))}
                    </div>
                </section>
            }
        </>
    )
}

export default Banner;
