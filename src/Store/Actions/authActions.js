import axios from "axios"
import { GET_USER, SIGN_IN, SIGN_UP, USERS } from "../../Firebase/API_URL"
import { createUser, fetchUser, loginUser } from "../Reducer/authReducer"



/* -------------------------------------------------------------------------- */
/*                                 CREATE USER                                */
/* -------------------------------------------------------------------------- */
export const createNewUser = (enteredInput, setLoading) => {
    return async (dispatch, getState) => {
        try {
            const enteredEmail = enteredInput.email.replace(".", "").replace("@", "")

            const { data: authData } = await axios.post(SIGN_UP, { ...enteredInput, returnSecureToken: true })
            const { data: userData } = await axios.put(`${USERS}/${enteredEmail}.json`, { email: enteredInput.email })

            localStorage.setItem("potatoUser", authData.idToken)
            dispatch(createUser({ ...authData, ...userData }))
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }
}




/* -------------------------------------------------------------------------- */
/*                                 FETCH USER                                 */
/* -------------------------------------------------------------------------- */
export const fetchExistingUser = () => {
    return async (dispatch, getState) => {
        try {
            const localIdToken = localStorage.getItem("potatoUser")
            if (localIdToken === null) { return }
            const { data: authData } = await axios.post(GET_USER, { idToken: localIdToken })
            const userEmail = authData.users[0].email.replace(".", "").replace("@", "")
            const { data: userData } = await axios.get(`${USERS}/${userEmail}.json`)
            dispatch(fetchUser({ ...authData, ...userData }))

        } catch (error) {
            console.log(error);
        }
    }
}




/* -------------------------------------------------------------------------- */
/*                                 LOGIN USER                                 */
/* -------------------------------------------------------------------------- */
export const loginExistingUser = (enteredInput, setLoading) => {
    return async (dispatch, getState) => {
        try {
            const enteredEmail = enteredInput.email.replace(".", "").replace("@", "")

            const { data: authData } = await axios.post(SIGN_IN, { ...enteredInput, returnSecureToken: true })
            const { data: userData } = await axios.get(`${USERS}/${enteredEmail}.json`)


            localStorage.setItem("potatoUser", authData.idToken)
            dispatch(loginUser({ ...authData, ...userData }))
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }
}