import { createSlice } from "@reduxjs/toolkit";

const userOrderReducer = createSlice({
  name: "orders",
  initialState: { orders: [] },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { setOrders } = userOrderReducer.actions;
export default userOrderReducer;
