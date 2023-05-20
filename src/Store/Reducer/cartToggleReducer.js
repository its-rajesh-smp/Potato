import { createSlice } from "@reduxjs/toolkit";

const cartToggleReducer = createSlice({
    name: "cart/btn/toggle",
    initialState: { visibleCart: false },
    reducers: {
        setCart: (state) => {
            state.visibleCart = !state.visibleCart
        }
    }

})

export const { setCart } = cartToggleReducer.reducer
export default cartToggleReducer