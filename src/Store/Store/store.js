import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducer/authReducer";

const store = configureStore({
    reducer: {
        authSlice: authReducer.reducer
    }
})

export default store