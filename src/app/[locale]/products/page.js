import Link from "next/link";

async function getProductDTOs() {
    const res = await fetch('http://localhost:3000/data/productsDTOs_main.json');
    const resJson = await res.json();
    return resJson;
}

export default async function Catalog()
{
    const products = await getProductDTOs();

    return(
        <div>
            <h1>Каталог</h1>

            {products.map(el => (
                <div key={el.id} className="product">
                    <Link href={'/products/' + el.id}><p><strong>{el.brandName}</strong> {el.productName}</p></Link>
                    <ul>
                        <li>{el.barCode}</li>
                        <li>{el.manufacturer}</li>
                        <li>{el.brandName}</li>
                        <li><strong>{el.price}</strong></li>
                    </ul>
                    <br />
                </div>
            ))}
        </div>
    )
}