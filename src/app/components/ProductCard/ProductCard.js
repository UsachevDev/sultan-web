
import { ToBasketButton } from "../ToBasketButton/ToBasketButton";
import "./ProductCard.css";

export default function ProductCard({card: el}) {  
    return (
        <div className="product-card">
            <div className="product-img">
                <img src="http://localhost:3000/image/productCards/card0.png" width={92} />
            </div>
            <div key={el.id} className="product">
                    <span className="product-name"><strong style={{fontWeight:800}}>{el.brandName}</strong> {el.productName}</span>
                    <div className="product-desc">
                        <ul>
                            <li style={{fontWeight:500}}><span className="product-desc-name">Штрихкод: </span>{el.barCode}</li>
                            <li><span className="product-desc-name">Производитель: </span>{el.manufacturer}</li>
                            <li><span className="product-desc-name">Бренд: </span>{el.brandName}</li>
                        </ul>
                    </div>
                    <div className="product-footer">
                        <span className="product-price" style={{fontWeight:800}}>{el.price}₽</span>
                        <span className="product-tobasket"><ToBasketButton /> </span>
                    </div>

                </div>
        </div>
    )};