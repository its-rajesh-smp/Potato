import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: "user/auth",
    initialState: {
        isAuth: false,
        idToken: "",
        userDetails: {
            email: "",
            userName: "",
        },
        userAddress: [],
    },
    reducers: {
        authUser: (state, action) => {
            state.isAuth = true
            state.idToken = action.idToken
            state.userDetails = action.userDetails
            state.userAddress = action.userAddress
        },
        fetchUser: (state, action) => {
            state.isAuth = true
            state.userDetails = action.userDetails
            state.userAddress = action.userAddress
        }

    }
})

export const { authUser, fetchUser } = authReducer.actions
export default authReducer