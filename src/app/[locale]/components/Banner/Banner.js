import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";

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
                        <button className="btn-to-products"><Link href={"/products"}>{t('button')}</Link></button>

                        <div className="banner-footer" id="banner-footer-1">
                            <ButtonTemplate width={39} height={39} text={"+"} className="btn-banner-plus" />
                            <span>{t('promo.span1')}<br /> {t('promo.span2')}</span>
                            <ButtonTemplate width={39} height={39} text={"+"} className="btn-banner-plus" />
                            <span>{t('promo.span3')}<br />
                                <b>{t('promo.span4')}</b>
                            </span>
                        </div>
                    </div>

                </div>


            </div>
            <div className="banner-footer-mobile" >
                <ButtonTemplate width={18} height={18} text={"+"} className="btn-banner-plus" />
                <span>{t('promo.span1')} {t('promo.span2')}</span> <br />
                <ButtonTemplate width={18} height={18} text={"+"} className="btn-banner-plus" />
                <span>{t('promo.span3')}<b> {t('promo.span4')}</b>
                </span>

            </div>
        </>
    )
}

export default Banner;
