import axios from "axios";
import { USERS } from "../../Firebase/API_URL";
import { addOrder } from "../Reducer/userOrderReducer";
import { removeSubscription } from "../Reducer/userSubscriptionReducer";
import { clearCart } from "../Reducer/userCartReducer";
import { clearSelectedAddress } from "../Reducer/userAddressReducer";
import { clearTotal } from "../Reducer/totalCartReducer";

export const createOrder = (showOrderSuccess) => {
  return async (dispatch, getState) => {
    try {
      const userEmail = getState()
        .authSlice.userDetails.email.replace("@", "")
        .replace(".", "");
      const userCart = getState().userCartSlice.cart;
      const selectedAddress = getState().userAddressSlice.selectedAddress;
      const selectedSubscription =
        getState().userSubscriptionSlice.subscription;

      const totalCart = getState().totalCartSlice.cartTotal;

      // Checking For Empty Field
      if (Object.keys(selectedAddress).length === 0) {
        alert("NO ADDRESS CHOOSED");
        return;
      }

      let orderId = new Date().getTime();
      const userOrderObj = {
        orderId: orderId,
        orderItem: Object.values(userCart),
        orderAddress: selectedAddress,
        orderSubscription: selectedSubscription,
        orderTotal: totalCart,
        orderStatus: "PENDING",
      };
      const { data } = axios.patch(`${USERS}/${userEmail}/order.json`, {
        [orderId]: userOrderObj,
      });
      axios.delete(`${USERS}/${userEmail}/cart.json`);

      showOrderSuccess();

      dispatch(addOrder(userOrderObj));
    } catch (error) {
      console.log(error);
    }
  };
};
