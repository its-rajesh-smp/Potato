import axios from "axios"
import { USERS } from "../../Firebase/API_URL"
import { addAddress, setAddress } from "../Reducer/userAddressReducer"

export const addNewAddress = (addressData) => {
    return async (dispatch, getState) => {
        const userEmail = getState().authSlice.userDetails.email.replace(".", "").replace("@", "")
        try {
            const { data } = await axios.post(`${USERS}/${userEmail}/address.json`, addressData)
            dispatch(addAddress({ ...addressData, addressId: data.name }))
        } catch (error) {
            console.log(error);
        }
    }
}


export const editAddress = (addressData, addressId) => {
    return async (dispatch, getState) => {
        const userEmail = getState().authSlice.userDetails.email.replace(".", "").replace("@", "")
        const prevAddress = getState().userAddressSlice.address
        try {
            const { data } = await axios.patch(`${USERS}/${userEmail}/address/${addressId}.json`, addressData)
            const updatedAddress = prevAddress.map((address) => {
                if (addressId === address.addressId) {
                    return { ...addressData, addressId: addressId }
                }
                return address
            })
            console.log(updatedAddress);
            dispatch(setAddress(updatedAddress))

        } catch (error) {
            console.log(error);
        }
    }
}



export const removeAddress = (addressId) => {
    return async (dispatch, getState) => {
        const userEmail = getState().authSlice.userDetails.email.replace(".", "").replace("@", "")
        const prevAddress = getState().userAddressSlice.address
        try {
            await axios.delete(`${USERS}/${userEmail}/address/${addressId}.json`)
            const updatedAddress = prevAddress.filter((address) => {
                return (address.addressId !== addressId)
            })
            dispatch(setAddress(updatedAddress))
        } catch (error) {
            console.log(error);
        }
    }
}