import { createSlice } from "@reduxjs/toolkit";

const userOrderReducer = createSlice({
  name: "orders",
  initialState: { orders: [] },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    addOrder: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
  },
});

export const { setOrders, addOrder } = userOrderReducer.actions;
export default userOrderReducer;
