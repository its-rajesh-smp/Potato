import { createSlice } from "@reduxjs/toolkit";

const userCartReducer = createSlice({
  name: "user/Cart",
  initialState: { cart: {} },
  reducers: {
    setToCart: (state, action) => {
      state.cart = { ...state.cart, ...action.payload };
    },
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
    clearCart: (state) => {
      state.cart = {};
    },
  },
});

export const { setToCart, updateCart, clearCart } = userCartReducer.actions;
export default userCartReducer;
