import React from 'react';
import "./CartProductsContainer.css"
import CartItem from "../UI/CartSection/CartItem/CartItem"


function CartProductsContainer(props) {




    return (
        <div className=' CartProductsContainer-div '>
            {
                <CartItem name={"CHICKEN"} price={299} quantity={30} key={Math.random()} />
            }
        </div>
    );
}

export default CartProductsContainer;
