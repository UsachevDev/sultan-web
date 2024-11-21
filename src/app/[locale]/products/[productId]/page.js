import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductOverview from "../../components/ProductOverview/ProductOverview";
import "./productCardPage.scss";

// async function getProducts() {
//     const res = await fetch('http://localhost:3000/data/products.json');
//     const resJson = await res.json();
//     return resJson;
// }
export default async function Product({ params }) {
    // const products = await getProducts();
    // const product = products[params.productId];

    return (
        <div className="page-product-card">
            <h1>WW card</h1>
            <Breadcrumbs />
            <ProductOverview />
        </div>
    )
}
