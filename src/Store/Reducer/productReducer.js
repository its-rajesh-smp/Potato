import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
    name: "product",
    initialState: {
        products: []
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export const { setProducts } = productReducer.actions
export default productReducer