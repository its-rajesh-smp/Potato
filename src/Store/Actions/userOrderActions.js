import axios from "axios";
import { USERS } from "../../Firebase/API_URL";

export const createOrder = () => {
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
    } catch (error) {
      console.log(error);
    }
  };
};
