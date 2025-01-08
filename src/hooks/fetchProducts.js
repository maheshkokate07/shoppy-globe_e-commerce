// Function for fetching the products from api

export async function fetchProducts(apiEndPoint) {
    try {
        const response = await fetch(apiEndPoint);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return { data, error: null };
    } catch (err) {
        return { data: null, error: err.message };
    }
}  