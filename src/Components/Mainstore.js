import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"

export const MainStore = configureStore({
    reducer: {
        cart: cartReducer
    }
})



