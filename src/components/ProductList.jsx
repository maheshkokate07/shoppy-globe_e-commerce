import { useEffect, useState } from "react";
import { fetchProducts } from "../hooks/fetchProducts";
import ProductItem from "./ProductItem";

function ProductList() {

    // State for products
    const [products, setProducts] = useState([]);

    // State for filtered products while searching the product
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [apiEndPoint, setApiEndPoint] = useState("/products");

    useEffect(() => {

        // Function for fetching the products
        async function fetchData() {
            setLoading(true);
            setError(null);

            const { data, error: fetchError } = await fetchProducts(apiEndPoint);

            if (fetchError) {
                setError(fetchError);
            } else {
                setProducts(data?.products || []);
                setFilteredProducts(data?.products || []);
            }

            setLoading(false);
        }
        fetchData();
    }, [apiEndPoint])

    // Function for handling the search
    function handleSearch(searchText) {
        if (searchText == "") {
            setFilteredProducts(products)
        }
        const fProducts = products.filter((product) => {
            return product.title.toLowerCase().includes(searchText.toLowerCase())
        })
        setFilteredProducts(fProducts);
    }

    if (loading) return <div className="loading"><p>Loading...</p></div>
    if (error) return <div className="error"><p>Error: {error}</p></div>

    return (
        <>
            <div className="search">
                <input type="text" placeholder="Enter product name to search" className="search-input" onChange={(e) => handleSearch(e.target.value)} />
                {/* <button onClick={handleSearch}>Search</button> */}
            </div>
            <div className="product-list-container">
                {
                    filteredProducts.map((p) => {
                        return <ProductItem product={p} key={p.id} />
                    })
                }
            </div>
        </>
    )
}

export default ProductList;