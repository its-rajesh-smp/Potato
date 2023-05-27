import axios from "axios"
import { USERS } from "../../Firebase/API_URL"
import { setToCart } from "../Reducer/userCartReducer"

export const addToCart = (product, quantity) => {
    return async (dispatch, getState) => {
        try {
            const userEmail = getState().authSlice.userDetails.email.replace(".", "").replace("@", "")
            const currentPrducts = getState().userCartSlice.cart

            if (currentPrducts[product.id]) {
                const cartId = currentPrducts[product.id].cartId
                const { data } = await axios.patch(`${USERS}/${userEmail}/cart/${cartId}.json`, { quantity: quantity + 1 })

                dispatch(setToCart({ [product.id]: { ...product, quantity: quantity + 1, cartId: cartId } }))
            }
            else {
                const { data } = await axios.post(`${USERS}/${userEmail}/cart.json`, { ...product, quantity: quantity + 1 })

                dispatch(setToCart({ [product.id]: { ...product, quantity: quantity + 1, cartId: data.name } }))
            }
        } catch (error) {
            console.log(error);
        }
    }
}



export const fetchToCart = () => {
    return async (dispatch, getState) => {
        try {
            const userEmail = getState().authSlice.userDetails.email.replace(".", "").replace("@", "")
            const { data } = await axios.get(`${USERS}/${userEmail}/cart.json`)
            const newCartData = {}
            Object.keys(data).forEach((cartId) => {
                newCartData[data[cartId].id] = { ...data[cartId], cartId: cartId }
            })
            dispatch(setToCart(newCartData))
        } catch (error) {
            console.log(error);
        }
    }
}