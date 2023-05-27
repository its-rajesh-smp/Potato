import axios from "axios"
import { USERS } from "../../Firebase/API_URL"
import { setToCart, updateCart } from "../Reducer/userCartReducer"
import { setTotal, increamentTotal, decreamentTotal } from "../Reducer/totalCartReducer"

export const addToCart = (product, quantity) => {
    return async (dispatch, getState) => {
        try {
            const userEmail = getState().authSlice.userDetails.email.replace(".", "").replace("@", "")
            const currentPrducts = getState().userCartSlice.cart

            if (currentPrducts[product.id]) {
                const cartId = currentPrducts[product.id].cartId
                await axios.patch(`${USERS}/${userEmail}/cart/${cartId}.json`, { quantity: quantity + 1 })
                dispatch(setToCart({ [product.id]: { ...product, quantity: quantity + 1, cartId: cartId } }))
            }
            else {
                const { data } = await axios.post(`${USERS}/${userEmail}/cart.json`, { ...product, quantity: quantity + 1 })
                dispatch(setToCart({ [product.id]: { ...product, quantity: quantity + 1, cartId: data.name } }))
            }
            dispatch(increamentTotal({ amount: product.price, quantity: 1 }))
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

            let totalAmount = 0
            let totalQuantity = 0

            Object.keys(data).forEach((cartId) => {
                totalQuantity += data[cartId].quantity
                totalAmount += data[cartId].quantity * data[cartId].price
                newCartData[data[cartId].id] = { ...data[cartId], cartId: cartId }
            })

            dispatch(setToCart(newCartData))
            dispatch(setTotal({ totalAmount: totalAmount, totalQuantity: totalQuantity }))
        } catch (error) {
            console.log(error);
        }
    }
}


export const removeFromCart = (product, quantity) => {
    return async (dispatch, getState) => {
        try {
            const userEmail = getState().authSlice.userDetails.email.replace(".", "").replace("@", "")
            const currentPrducts = JSON.parse(JSON.stringify(getState().userCartSlice.cart))

            const cartId = currentPrducts[product.id].cartId

            if (quantity === 1) {
                await axios.delete(`${USERS}/${userEmail}/cart/${cartId}.json`)
                delete currentPrducts[product.id]
                dispatch(updateCart(currentPrducts))
            }
            else {
                await axios.patch(`${USERS}/${userEmail}/cart/${cartId}.json`, { quantity: quantity - 1 })
                currentPrducts[product.id].quantity = quantity - 1
                dispatch(setToCart(currentPrducts))
            }
            dispatch(decreamentTotal({ amount: product.price, quantity: 1 }))
        } catch (error) {
            console.log(error);
        }
    }
}