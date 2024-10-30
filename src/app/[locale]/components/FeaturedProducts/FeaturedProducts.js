import "./FeaturedProducts.css";
import Cards from "../Cards/Cards";


export default function FeaturedProducts(){
    return(
        <div className="page-main">
            <div>
                <h2 className="featured-products-head"><span>АКЦИОННЫЕ</span> ТОВАРЫ</h2>
                <Cards info="popular"/>   
            </div>
            
        </div>
    )
}