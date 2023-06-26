import axios from "axios";
import { USERS } from "../../Firebase/API_URL";
import { addOrder } from "../Reducer/userOrderReducer";
import { removeSubscription } from "../Reducer/userSubscriptionReducer";
import { clearCart } from "../Reducer/userCartReducer";
import { clearSelectedAddress } from "../Reducer/userAddressReducer";
import { clearTotal } from "../Reducer/totalCartReducer";

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

      dispatch(addOrder(userOrderObj));
      dispatch(removeSubscription());
      dispatch(clearCart());
      dispatch(clearSelectedAddress());
      dispatch(clearTotal());

      axios.delete(`${USERS}/${userEmail}/cart.json`);
    } catch (error) {
      console.log(error);
    }
  };
};
