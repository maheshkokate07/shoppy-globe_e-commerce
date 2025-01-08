import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addProduct: (state, action) => {
            const existingProduct = state.items.find(item => item.product.id === action.payload.product.id);

            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        removeProduct: (state, action) => {
            state.items = state.items.filter(item => item.product.id !== action.payload.id);
        },
        increaseQuantity: (state, action) => {
            const product = state.items.find(item => item.product.id === action.payload.id);

            if (product) {
                product.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const product = state.items.find(item => item.product.id === action.payload.id);

            if (product) {
                product.quantity -= 1;

                if (product.quantity <= 0) {
                    state.items = state.items.filter(item => item.product.id !== action.payload.id);
                }
            }
        },
        clearCart: (state, action) => {
            state.items = [];
        }
    }
})

export const { addProduct, removeProduct, decreaseQuantity, increaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;