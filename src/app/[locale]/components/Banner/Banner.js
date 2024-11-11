"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import ButtonUI from "../UI/ButtonUI/ButtonUI";

import "./Banner.scss";

const Banner = () => {
    const t = useTranslations("Banner");
    return (
        <>
            <div className="banner">
                <div className="banner-blur" />
                <div className="banner-container" >
                    <div className="banner-content">
                        <h1>
                            {t('h1.firstLine')}<br /> {t('h1.secondLine')}
                        </h1>
                        <h2>{t('h2')}</h2>
                        <Link href={"/products"}><ButtonUI label={t('button')} size="lg" className="btn-catalog"></ButtonUI></Link>
                        <div className="banner-footer" id="banner-footer-1">
                            <ButtonUI label="+" size="xs" />
                            <span className="banner-footer-promo">{t('promo.span1')}<br /> {t('promo.span2')}</span>
                            <ButtonUI label="+" size="xs" />
                            <span className="banner-footer-promo">{t('promo.span3')}<br /> <b>{t('promo.span4')}</b>
                            </span>
                        </div>
                    </div>

                </div>


            </div>
            <div className="banner-footer-mobile" >
                <span>
                    <ButtonUI label="+" size="xs" />
                    {t('promo.span1')} {t('promo.span2')} <br />             
                </span>
                <span>
                    <ButtonUI label="+" size="xs" /> 
                    {t('promo.span3')} <b>{t('promo.span4')}</b>
                </span>
            </div>
        </>
    )
}

export default Banner;
