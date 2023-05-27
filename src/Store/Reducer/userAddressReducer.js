import { createSlice } from "@reduxjs/toolkit";

const userAddressReducer = createSlice({
    name: "user/address",
    initialState: { address: [] },
    reducers: {
        fetchAddress: (state, action) => {
            state.address = action.payload
        }
    }
})

export const { fetchAddress } = userAddressReducer.actions
export default userAddressReducer