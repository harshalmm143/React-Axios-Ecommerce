import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    noOfItems: 0,
    totalAmt: 0,
    isLoading: true,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },

        addItem: (state, action) => {
            const cartItem = { ...action.payload, qty: 1 }
            state.cartItems = [...state.cartItems, cartItem]
            state.noOfItems = state.cartItems.length
        },

        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },

        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.qty = cartItem.qty + 1;
        },

        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.qty = cartItem.qty - 1;
        },

        CalculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.qty;
                total += item.qty * item.price;
            });
            state.noOfItems = amount;
            state.totalAmt = total;
        },
    },
});

export const { clearCart, removeItem, increase, decrease, CalculateTotals
    , addItem } = cartSlice.actions;
export default cartSlice.reducer;
