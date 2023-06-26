import React from "react";
import "./ProductDetailsPage.css";
import ProductImageContainer from "../../Components/Product Details Page/Product Image Container/ProductImageContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Store/Actions/userCartActions";

function ProductDetailsPage(props) {
  const params = useParams();
  const dispatch = useDispatch()
  const navgate = useNavigate()
  const foodDetails = useSelector(
    (state) => state.productSlice.products[params.foodId]
  );
  const cartItems = useSelector((state) => state.userCartSlice.cart);
  const currentQuantity = cartItems[foodDetails.id] ? cartItems[foodDetails.id].quantity : 0

  const addToCartHandler = () => {
    dispatch(addToCart(foodDetails, 0))
    navgate("/cart")
  }

  return (
    <div className=" ProductDetailsPage-div ">
      <ProductImageContainer data={foodDetails} />
      {
        currentQuantity === 0 ? <button onClick={addToCartHandler} className=" ProductDetailsPage-div_addToCartBTN">BUY NOW</button>
          : <button disabled style={{ opacity: 0.7 }} className=" ProductDetailsPage-div_addToCartBTN">ALREADY IN CART</button>
      }

    </div>
  );
}

export default ProductDetailsPage;
