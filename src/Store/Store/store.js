import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducer/authReducer";
import cartToggleReducer from "../Reducer/cartToggleReducer";

const store = configureStore({
    reducer: {
        authSlice: authReducer.reducer,
        cartToggleSlice: cartToggleReducer.reducer
    }
})

export default store