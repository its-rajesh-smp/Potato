import axios from "axios"
import { USERS } from "../../Firebase/API_URL"

export const addNewAddress = (addressData) => {
    return async (dispatch, getState) => {
        const userEmail = getState().authSlice.userDetails.email.replace(".", "").replace("@", "")
        try {
            const { data } = await axios.post(`${USERS}/${userEmail}/address.json`, addressData)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
}


export const editAddress = (addressData, addressId) => {
    return async (dispatch, getState) => {
        const userEmail = getState().authSlice.userDetails.email.replace(".", "").replace("@", "")
        try {
            const { data } = await axios.patch(`${USERS}/${userEmail}/address/${addressId}.json`, addressData)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
}



export const removeAddress = (addressId) => {
    return async (dispatch, getState) => {
        const userEmail = getState().authSlice.userDetails.email.replace(".", "").replace("@", "")
        try {
            await axios.delete(`${USERS}/${userEmail}/address/${addressId}.json`)
        } catch (error) {
            console.log(error);
        }
    }
}