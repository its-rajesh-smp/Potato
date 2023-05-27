import { createSlice } from "@reduxjs/toolkit";

const userAddressReducer = createSlice({
    name: "user/address",
    initialState: { address: [], selectedAddress: {} },
    reducers: {
        fetchAddress: (state, action) => {
            state.address = action.payload
        },
        addAddress: (state, action) => {
            state.address.push(action.payload)
        },
        setAddress: (state, action) => {
            state.address = action.payload
        },

    }
})

export const { fetchAddress, addAddress, setAddress } = userAddressReducer.actions
export default userAddressReducer