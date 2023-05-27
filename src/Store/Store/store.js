import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducer/authReducer";
import cartToggleReducer from "../Reducer/cartToggleReducer";
import productReducer from "../Reducer/productReducer";
import userCartReducer from "../Reducer/userCartReducer";

const store = configureStore({
    reducer: {
        authSlice: authReducer.reducer,
        cartToggleSlice: cartToggleReducer.reducer,
        productSlice: productReducer.reducer,
        userCartSlice: userCartReducer.reducer
    }
})

export default store