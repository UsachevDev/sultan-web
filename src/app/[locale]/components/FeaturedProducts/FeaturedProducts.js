"use client";

import Cards from "../Cards/Cards";
import "./FeaturedProducts.css";

export default function FeaturedProducts(){
    return(
        <div className="featured-products">
            <div>
                <h2 className="featured-products-head"><span>АКЦИОННЫЕ</span> ТОВАРЫ</h2>
                <Cards info="popular"/>   
            </div>
        </div>
    )
}