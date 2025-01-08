import { Link } from "react-router-dom";

function Checkout() {
    return (
        <>
            <div className="order-placed">
                <div>
                    <h2>Order placed <span><i className="fa-solid fa-check"></i></span></h2>
                </div>
                <p>
                <Link to="/">
                    Go back to home page
                </Link>
                </p>
            </div>
        </>
    )
}

export default Checkout;