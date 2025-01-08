import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {

    // Getting the length of the cart to show how many items in the cart in header
    const cartLength = useSelector((store) => store.cart.items.length);

    return (
        <>
            <div className="header">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            {/* Showing the cart icon and number of the cart items */}
                            <span><i className="fa-solid fa-cart-shopping"></i></span>Cart <span className="cart-length">{cartLength}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;