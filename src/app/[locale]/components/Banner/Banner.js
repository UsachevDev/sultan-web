"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import useWidth from "../../core/hooks/useWidth";

import "./Banner.scss";

const Banner = () => {
    const {isMobile, isMobileSmall} = useWidth();

    const btnPlus = <ButtonUI
        label="+"
        size="xs"
        className="btn-banner-plus"
    />

    const t = useTranslations("Banner");
    return (
        <>
            {!isMobile && !isMobileSmall 
            ?
               <>
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
                                        className="btn-catalog"></ButtonUI>
                                </Link>
                                <div className="banner-footer" id="banner-footer-1">
                                    {btnPlus}
                                    <span className="banner-footer-promo">{t('promo.span1')}<br /> {t('promo.span2')}</span>
                                    {btnPlus}
                                    <span className="banner-footer-promo">{t('promo.span3')}<br /> <b>{t('promo.span4')}</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                : 
                <>
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
                        <span>
                            {btnPlus}
                            {t('promo.span1')} {t('promo.span2')} <br />
                        </span>
                        <span>
                            {btnPlus}
                            {t('promo.span3')} <b>{t('promo.span4')}</b>
                        </span>
                    </div>    
                </>
            }
        </>
    )
}

export default Banner;
