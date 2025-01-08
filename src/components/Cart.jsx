import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { clearCart } from "../store/cartSlice";

function Cart() {

    const cart = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    // Function to calculate the subtotal of the cart
    const calculateCartSubtotal = (cart) => {
        if (!cart || cart.length === 0) return 0;
        return cart.reduce((subtotal, cartItem) => {
            return subtotal + (cartItem.product.price * cartItem.quantity);
        }, 0);
    };

    const subTotal = calculateCartSubtotal(cart);

    return (
        <>
            <div className="cart-outer">
                <div className="cart-container">
                    {
                        cart.length > 0 ? (
                            cart.map((c) => <CartItem item={c} key={c.product.id} />)
                        ) : (
                            <p className="empty-cart">Your cart is empty !</p>
                        )
                    }
                    <div className="subtotal-container">
                        {
                            cart.length > 0 && <p><span>Subtotal: </span> ₹{subTotal.toFixed(2)}</p>
                        }
                    </div>
                </div>
                <div className="place-order-container">
                    {
                        cart.length > 0 &&
                        <Link>
                            <button onClick={() => dispatch(clearCart())} className="clear-cart">
                                Clear Cart
                            </button>
                        </Link>
                    }
                    {
                        cart.length > 0 &&
                        <Link to="/checkout">
                            <button onClick={() => dispatch(clearCart())}>Place Order</button>
                        </Link>
                    }

                </div>
            </div>
        </>
    );
}

export default Cart;
