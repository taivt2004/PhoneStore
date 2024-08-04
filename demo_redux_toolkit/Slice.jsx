import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    cart: [],
    user: null
};

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialCartState,
    reducers: {
        changeQuantity: (state, action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id);
            if (index === -1) {
                state.cart.push(action.payload);
            } else {
                let quantity = state.cart[index].quantity + action.payload.quantity;
                if (quantity <= 0) {
                    state.cart = state.cart.filter(item => item.id !== action.payload.id);
                } else {
                    state.cart[index].quantity = quantity;
                }
            }
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
    },
});

export const { changeQuantity, removeItem } = counterSlice.actions;
export default counterSlice.reducer;
