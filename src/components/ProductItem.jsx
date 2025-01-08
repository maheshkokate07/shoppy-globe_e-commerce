import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../store/cartSlice";

function ProductItem(props) {

    const dispatch = useDispatch();

    function handleAddProduct() {
        const formattedCartItem = {
            product: props.product,
            quantity: 1
        }

        dispatch(addProduct(formattedCartItem));
    }

    return (
        <>
            <div className="product-card">
                <div className="image-container">
                    <img src={props.product.thumbnail} alt="product-image" />
                </div>
                <div className="product-data">
                    <p className="product-title">{props.product.title.slice(0, 25)}</p>
                    <div className="product-rating"><p>{props.product.rating}<i className="fa-solid fa-star"></i></p></div>
                    {
                        props.product.brand && <p className="product-brand"><span>Brand: </span>{props.product.brand}</p>
                    }
                    <p className="product-price"><span>Price:</span> <span className="price">{props.product.price}</span> &#8377;</p>
                </div>
                <div className="product-buttons">
                    <Link to={`products/${props.product.id}`}>
                        <button className="view-product">View Details</button>
                    </Link>
                    <button onClick={handleAddProduct} className="add-to-cart">Add To Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductItem;