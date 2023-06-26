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

      const userOrderObj = {
        orderId: new Date().getTime(),
        orderItem: Object.values(userCart),
        orderAddress: selectedAddress,
        orderSubscription: selectedSubscription,
        orderTotal: totalCart,
      };

      console.log(userOrderObj);
      // const {data}=
    } catch (error) {}
  };
};
