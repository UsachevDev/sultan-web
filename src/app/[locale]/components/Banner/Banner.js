
import "./Banner.scss";
import { Link } from "@/i18n/routing";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";





const Banner = () => {

    return (
        <>
        <div className="banner">
            <div className="banner-blur" />
            <div className="banner-container" >
                <div className="banner-content">
                    <h1>
                        Бытовая химия, косметика<br /> и хозтовары
                    </h1>
                    <h2>ОПТОМ ПО КОКЧЕТАВУ И ОБЛАСТИ</h2>
                    <button className="btn-to-products"><Link href={"/products"}>В КАТАЛОГ</Link></button>

                    <div className="banner-footer" id="banner-footer-1">
                        <ButtonTemplate width={39} height={39} text={"+"} className="btn-banner-plus"/>
                        <span>Только самые<br /> выгодные предложения</span>
                        <ButtonTemplate width={39} height={39} text={"+"} className="btn-banner-plus"/>
                        <span>Бесплатная доставка<br /> 
                        по <b>Кокчетаву от 10 тыс ₽</b>
                        </span>
                    </div>
                </div>

            </div>

      
        </div>
        <div className="banner-footer-mobile" >
                <ButtonTemplate width={18} height={18} text={"+"} className="btn-banner-plus"/>
                <span>Только самые выгодные предложения</span> <br />
                <ButtonTemplate width={18} height={18} text={"+"} className="btn-banner-plus"/>
                <span>Бесплатная доставка
                по <b>Кокчетаву от 10 тыс ₽</b>
                </span>         

        </div>
        </>
       


    )
}

export default Banner;