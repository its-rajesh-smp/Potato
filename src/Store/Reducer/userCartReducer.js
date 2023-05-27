import { createSlice } from "@reduxjs/toolkit";

const userCartReducer = createSlice({
    name: "user/Cart",
    initialState: { cart: {} },
    reducers: {
        setToCart: (state, action) => {
            state.cart = { ...state.cart, ...action.payload }
        }
    }
})

export const { setToCart } = userCartReducer.actions
export default userCartReducer 