import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducer/authReducer";
import cartToggleReducer from "../Reducer/cartToggleReducer";
import productReducer from "../Reducer/productReducer";
import userCartReducer from "../Reducer/userCartReducer";
import totalCartReducer from "../Reducer/totalCartReducer";
import userAddressReducer from "../Reducer/userAddressReducer";

const store = configureStore({
    reducer: {
        authSlice: authReducer.reducer,
        cartToggleSlice: cartToggleReducer.reducer,
        productSlice: productReducer.reducer,
        userCartSlice: userCartReducer.reducer,
        totalCartSlice: totalCartReducer.reducer,
        userAddressSlice: userAddressReducer.reducer
    }
})

export default store