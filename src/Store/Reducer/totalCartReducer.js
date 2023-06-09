import { createSlice } from "@reduxjs/toolkit";

const totalCartReducer = createSlice({
  name: "totalCart",
  initialState: { cartTotal: { totalAmount: 0, totalQuantity: 0 } },
  reducers: {
    setTotal: (state, action) => {
      state.cartTotal = action.payload;
    },
    increamentTotal: (state, action) => {
      state.cartTotal.totalAmount +=
        action.payload.amount * action.payload.quantity;
      state.cartTotal.totalQuantity += action.payload.quantity;
    },
    decreamentTotal: (state, action) => {
      state.cartTotal.totalAmount -=
        action.payload.amount * action.payload.quantity;
      state.cartTotal.totalQuantity -= action.payload.quantity;
    },
    clearTotal: (state) => {
      state.cartTotal = { totalAmount: 0, totalQuantity: 0 };
    },
  },
});

export const { setTotal, increamentTotal, decreamentTotal, clearTotal } =
  totalCartReducer.actions;
export default totalCartReducer;
