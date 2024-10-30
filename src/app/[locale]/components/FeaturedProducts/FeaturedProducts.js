import "./FeaturedProducts.css";
import Cards from "../Cards/Cards";


export default function FeaturedProducts({leng: leng}){
    return(
        <div className="featured-products">
            <div>
                <h2 className="featured-products-head"><span>АКЦИОННЫЕ</span> ТОВАРЫ</h2>
                <Cards info="popular" leng ={leng}/>   
            </div>
            
        </div>
    )
}