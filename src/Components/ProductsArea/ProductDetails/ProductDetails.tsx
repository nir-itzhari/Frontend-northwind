import "./ProductDetails.css";
import { useEffect } from 'react';
import axios from 'axios';
import config from './../../../Utils/Config';
import { useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import { useState } from 'react';

function ProductDetails(): JSX.Element {
    const params = useParams()
    const id = params.id
    const [product, setProduct] = useState<ProductModel>()

    useEffect(() => {
        (async () => {
            const response = await axios.get<ProductModel[]>(config.productsUrl)
            const products = response.data
            const productIndex = products.findIndex(p => p.id.toString() === id)
            setProduct(products[productIndex])
        })()
    }, [])

    return (
        <div className="ProductDetails">
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <h2>{product.stock}</h2>
        </div>
    );
}

export default ProductDetails;
