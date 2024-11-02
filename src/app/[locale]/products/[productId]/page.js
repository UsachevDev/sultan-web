
async function getProducts() {
    const res = await fetch('http://localhost:3000/data/products.json');
    const resJson = await res.json();
    return resJson;
}

export default async function Product({params}){
    const products = await getProducts();
    const product = products[params.productId];

    return (
        <div>
            <h1>{product.productName}</h1><br/>
            <p>{product.description}</p><br/>
            <p>Price: {product.price}</p>

        </div>
    )
}