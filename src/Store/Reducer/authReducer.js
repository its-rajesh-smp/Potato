import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: "user/auth",
    initialState: {
        isAuth: false,
        idToken: "",
        userDetails: {
            email: "",
        },

    },
    reducers: {
        createUser: (state, action) => {
            state.isAuth = true
            state.idToken = action.payload.idToken
            state.userDetails.email = action.payload.email
        },
        loginUser: (state, action) => {
            state.isAuth = true
            state.idToken = action.payload.idToken
            state.userDetails.email = action.payload.email

        },
        fetchUser: (state, action) => {
            state.isAuth = true
            state.idToken = action.payload.idToken
            state.userDetails.email = action.payload.email

        }

    }
})

export const { createUser, loginUser, fetchUser } = authReducer.actions
export default authReducer