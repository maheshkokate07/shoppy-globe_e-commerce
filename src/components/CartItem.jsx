import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeProduct } from "../store/cartSlice";

function CartItem(props) {

    const dispatch = useDispatch();

    // Function for handle decrease in quantity
    function handleDecreaseQuantity() {
        dispatch(decreaseQuantity({id: props.item.product.id}));
    }

    // Function for handle increase in quantity
    function handleIncreaseQuantity() {
        dispatch(increaseQuantity({id: props.item.product.id}));
    }

    return (
        <>
            <div className="cart-item">
                <div className="item-image-container">
                    <img src={props.item.product.thumbnail} width={80} alt="cart-item-image" />
                </div>
                <div className="item-details-container">
                    <div className="name-container">
                        <p className="item-name">{props.item.product.title}</p>
                        {
                            props.item.product.brand && <p className="item-brand"><span>Brand: </span>{props.item.product.brand}</p>
                        }
                    </div>
                    <div className="price-container">
                        <p className="item-price"><span>Price: </span>&#8377;{props.item.product.price}</p>
                    </div>
                    <div className="quantity-container">
                        <button onClick={handleDecreaseQuantity}>-</button>
                        <p>{props.item.quantity}</p>
                        <button onClick={handleIncreaseQuantity}>+</button>
                    </div>
                    <div className="total-container">
                        <p className="price-total"><span>Total: </span>&#8377;{props.item.product.price * props.item.quantity}</p>
                    </div>
                    <div className="remove-item-container">
                        <button onClick={() => dispatch(removeProduct({id: props.item.product.id}))}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem;