import "./ToBasketButton.css"

export function ToBasketButton() {  


    return (
        <div> 
            <button className="btn-basket">
                <div>
                    <span>В КОРЗИНУ</span>
                    <span className="icon-basket" />
                </div>
            </button>
            
        </div>
    );
}