import ProductModel from "../../../Models/ProductModel";
import "./ProductCard.css";
import { useNavigate } from 'react-router-dom';


interface ProductCardProps {
    product: ProductModel
}


function ProductCard(props: ProductCardProps): JSX.Element {
const navigate = useNavigate()
    return (
        <tr onClick={() => navigate("/product-details" + props.product.id)}>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td>{props.product.stock}</td>
        </tr>
    );
}

export default ProductCard;
