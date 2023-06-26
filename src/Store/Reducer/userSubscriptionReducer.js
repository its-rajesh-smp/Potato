import { createSlice } from "@reduxjs/toolkit";

const userSubscriptionReducer = createSlice({
  name: "subscription",
  initialState: {
    subscription: { from: "", to: "", totalDate: 0 },
  },
  reducers: {
    setSubscription: (state, action) => {
      state.subscription = action.payload;
    },
    removeSubscription: (state, action) => {
      state.subscription = { from: "", to: "", totalDate: 0 };
    },
  },
});

export const { setSubscription, removeSubscription } =
  userSubscriptionReducer.actions;
export default userSubscriptionReducer;
