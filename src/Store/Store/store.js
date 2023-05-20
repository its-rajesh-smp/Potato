import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducer/authReducer";
import cartToggleReducer from "../Reducer/cartToggleReducer";
import productReducer from "../Reducer/productReducer";

const store = configureStore({
    reducer: {
        authSlice: authReducer.reducer,
        cartToggleSlice: cartToggleReducer.reducer,
        productSlice: productReducer.reducer
    }
})

export default store