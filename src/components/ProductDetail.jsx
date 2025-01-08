import { useEffect, useState } from "react";
import { fetchProducts } from "../hooks/fetchProducts";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/cartSlice";

function ProductDetail() {

    // States for product, loading, error
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // State for handling the display image in image slideshow
    const [selectedImage, setSelectedImage] = useState();

    const params = useParams();

    const dispatch = useDispatch()

    useEffect(() => {

        // Function for fetching the data using the id we get in params
        async function fetchData() {
            setLoading(true);
            setError(null);

            const { data, error: fetchError } = await fetchProducts(`/products/${params.id}`);

            if (fetchError) {
                setError(fetchError);
            } else {
                setProduct(data);
                setSelectedImage(data.images[0])
            }

            setLoading(false);
        }
        fetchData();
    }, [params.id]);

    // Function for handling the add product to cart
    function handleAddProduct() {
        const formattedCartItem = {
            product: product,
            quantity: 1
        }

        dispatch(addProduct(formattedCartItem));
    }

    // Showing the loading while fetching product details or show error if occured
    if (loading) return <div className="loading"><p>Loading...</p></div>
    if (error) return <div className="error"><p>Error: {error}</p></div>

    return (
        <>
            <div className="go-back">
                <Link to="/">
                    <i className="fa-solid fa-angle-left"></i><span>Back</span>
                </Link>
            </div>
            <div className="product-detail-out">
                <div className="product-detail-container">
                    <div className="image-container">
                        <div className="left-images">
                            {
                                product.images.map((image, index) => {
                                    return <div
                                        key={index}
                                        style={{
                                            border: selectedImage === image ? "2px solid blue" : "2px solid #c1c1c1"
                                        }}
                                        onMouseEnter={() => setSelectedImage(image)}
                                    >
                                        <img src={image} alt="image" />
                                    </div>
                                })
                            }
                        </div>
                        <div className="display-image">
                            <img src={selectedImage} alt="main-img" />
                        </div>
                    </div>
                    <div className="details-container">
                        <p className="product-name">{product.title}</p>
                        <div className="product-rating"><p>{product.rating}<i className="fa-solid fa-star"></i></p></div>
                        <div className="product-price">
                            <p className="special-price">Special price</p>
                            <p className="price"><span>&#8377;</span>{product.price}<span className="discount">{product.discountPercentage}% off</span></p>
                        </div>
                        <p className="product-brand"><span>Brand: </span>{product.brand}</p>
                        <p className="product-description"><span>Description: </span>{product.description}</p>
                        <p className="product-category"><span>Category: </span>{product.category}</p>
                        <div className="product-features">
                            <p><i className="fa-solid fa-circle"></i> {product.warrantyInformation}</p>
                            <p><i className="fa-solid fa-circle"></i> {product.shippingInformation}</p>
                            <p><i className="fa-solid fa-circle"></i> {product.returnPolicy}</p>
                        </div>
                        <div className="buttons">
                            <Link>
                                <button onClick={handleAddProduct}>Add to Cart</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;