import axios from "axios";
import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import config from "../../../Utils/Config";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get<ProductModel[]>(config.productsUrl);
                setProducts(response.data);
            }
            catch (err: any) {
                alert(err.message);
            }
        })();
    }, []);

    return (
        <div className="ProductList">
            <h2>Products List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => <ProductCard key={p.id} product={p} />)}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;
