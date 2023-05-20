import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: "user/auth",
    initialState: {
        isAuth: false,
        idToken: "",
        userDetails: {
            email: "",
        },
        userAddress: [],
    },
    reducers: {
        createUser: (state, action) => {
            state.isAuth = true
            state.idToken = action.payload.idToken
            state.userDetails.email = action.payload.idToken
        },
        loginUser: (state, action) => {
            state.isAuth = true
            state.idToken = action.payload.idToken
            state.userDetails = action.payload.userDetails
            state.userAddress = action.payload.userAddress
        },
        fetchUser: (state, action) => {
            state.isAuth = true
            state.userDetails = action.payload.userDetails
            state.userAddress = action.payload.userAddress
        }

    }
})

export const { createUser, loginUser, fetchUser } = authReducer.actions
export default authReducer