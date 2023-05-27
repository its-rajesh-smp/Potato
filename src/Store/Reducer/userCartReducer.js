import { createSlice } from "@reduxjs/toolkit";

const userCartReducer = createSlice({
    name: "user/Cart",
    initialState: { cart: {} },
    reducers: {
        setToCart: (state, action) => {
            state.cart = { ...state.cart, ...action.payload }
        },
        updateCart: (state, action) => {
            state.cart = action.payload
        }
    }
})

export const { setToCart, updateCart } = userCartReducer.actions
export default userCartReducer 