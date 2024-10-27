
import Image from "next/image";
import "./ToBasketButton.css"

export function ToBasketButton() {  
    return (
        <> 
            <button className="btn-basket">
                <span>В КОРЗИНУ</span>
                <span><Image src={"/icon/basket-icon.svg"} width={27} height={27} alt="basket"/></span>
            </button>          
        </>
    );
};