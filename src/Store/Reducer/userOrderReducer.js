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
        }
    }
})

export const { setSubscription, setSelectedAddress } = userOrderReducer.actions
export default userOrderReducer