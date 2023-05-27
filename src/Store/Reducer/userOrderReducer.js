import { createSlice } from "@reduxjs/toolkit";

const userOrderReducer = createSlice({
    name: "order/info",
    initialState: {
        selectedAddress: {},
        subscription: { from: "", to: "" },
    },
    reducers: {
        setSelectedAddress: (state, action) => {
            state.selectedAddress = action.payload
        },
        setSubscription: (state, action) => {
            state.subscription = action.payload
        },
        removeSubscription: (state, action) => {
            state.subscription = { from: "", to: "" }
        }
    }
})

export const { setSubscription, setSelectedAddress, removeSubscription } = userOrderReducer.actions
export default userOrderReducer