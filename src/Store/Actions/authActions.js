import axios from "axios";
import { GET_USER, SIGN_IN, SIGN_UP, USERS } from "../../Firebase/API_URL";
import { createUser, fetchUser, loginUser } from "../Reducer/authReducer";
import { setToCart } from "../Reducer/userCartReducer";
import { setTotal } from "../Reducer/totalCartReducer";
import { fetchAddress } from "../Reducer/userAddressReducer";

/* -------------------------------------------------------------------------- */
/*                                 CREATE USER                                */
/* -------------------------------------------------------------------------- */
export const createNewUser = (enteredInput, setLoading) => {
  return async (dispatch, getState) => {
    try {
      const enteredEmail = enteredInput.email.replace(".", "").replace("@", "");

      const { data: authData } = await axios.post(SIGN_UP, {
        ...enteredInput,
        returnSecureToken: true,
      });
      const { data: userData } = await axios.put(
        `${USERS}/${enteredEmail}.json`,
        { email: enteredInput.email }
      );

      localStorage.setItem("potatoUser", authData.idToken);
      dispatch(createUser({ ...authData, ...userData }));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
};

/* -------------------------------------------------------------------------- */
/*                                 FETCH USER                                 */
/* -------------------------------------------------------------------------- */
export const fetchExistingUser = (setLoading) => {
  return async (dispatch, getState) => {
    try {
      const localIdToken = localStorage.getItem("potatoUser");
      if (!localIdToken) {
        setLoading(false);
        return;
      }
      const { data: authData } = await axios.post(GET_USER, {
        idToken: localIdToken,
      });
      const userEmail = authData.users[0].email
        .replace(".", "")
        .replace("@", "");
      const { data: userData } = await axios.get(`${USERS}/${userEmail}.json`);

      // Forming User Address Arr Address
      const userAddress = Object.keys(userData.address).map((addressId) => {
        return { ...userData.address[addressId], addressId: addressId };
      });

      //   Forming Cart Obj
      const newCartData = {};
      let totalAmount = 0;
      let totalQuantity = 0;
      const cartData = userData.cart;
      Object.keys(cartData).forEach((cartId) => {
        totalQuantity += cartData[cartId].quantity;
        totalAmount += cartData[cartId].quantity * cartData[cartId].price;
        newCartData[cartData[cartId].id] = {
          ...cartData[cartId],
          cartId: cartId,
        };
      });

      /* -------------------------------------------------------------------------- */
      /*                                  DISPATCH                                  */
      /* -------------------------------------------------------------------------- */
      dispatch(setToCart(newCartData));
      dispatch(
        setTotal({ totalAmount: totalAmount, totalQuantity: totalQuantity })
      );
      dispatch(fetchAddress(userAddress));
      dispatch(fetchUser({ ...authData.users[0], idToken: localIdToken }));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
};

/* -------------------------------------------------------------------------- */
/*                                 LOGIN USER                                 */
/* -------------------------------------------------------------------------- */
export const loginExistingUser = (enteredInput, setLoading) => {
  return async (dispatch, getState) => {
    try {
      const enteredEmail = enteredInput.email.replace(".", "").replace("@", "");

      const { data: authData } = await axios.post(SIGN_IN, {
        ...enteredInput,
        returnSecureToken: true,
      });
      const { data: userData } = await axios.get(
        `${USERS}/${enteredEmail}.json`
      );
      localStorage.setItem("potatoUser", authData.idToken);

      // Forming User Address Arr Address
      const userAddress = Object.keys(userData.address).map((addressId) => {
        return { ...userData.address[addressId], addressId: addressId };
      });

      //   Forming Cart Obj
      const newCartData = {};
      let totalAmount = 0;
      let totalQuantity = 0;
      const cartData = userData.cart;
      Object.keys(cartData).forEach((cartId) => {
        totalQuantity += cartData[cartId].quantity;
        totalAmount += cartData[cartId].quantity * cartData[cartId].price;
        newCartData[cartData[cartId].id] = {
          ...cartData[cartId],
          cartId: cartId,
        };
      });

      /* -------------------------------------------------------------------------- */
      /*                                  DISPATCH                                  */
      /* -------------------------------------------------------------------------- */
      dispatch(setToCart(newCartData));
      dispatch(
        setTotal({ totalAmount: totalAmount, totalQuantity: totalQuantity })
      );
      dispatch(fetchAddress(userAddress));

      dispatch(loginUser({ ...authData, ...userData }));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
};
