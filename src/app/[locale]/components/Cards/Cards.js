import ProductCard from "../ProductCard/ProductCard";
import "./Cards.css";

export default async function Cards({info: filter}){
    const cards = await fetch("http://localhost:3000/data/productDTOs_main.json")
    .then((res) => res.json());

    return (
        <div className="cards">
            {cards.map((card) => (
                <ProductCard 
                    card={card} 
                    info={filter} 
                    key={card.id}
                />          
            ))}
        </div>
    )
};