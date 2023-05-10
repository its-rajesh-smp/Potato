import React from 'react';
import "./CartItem.css"

function CartItem(props) {
    return (
        <div className=' CartItem-div '>

            <div className='CartItem-div-item'>
                <i className='bx bx-checkbox-square'></i>
                <p>{props.name}</p>
            </div>


            <div className='CartItem-div-item-price'>
                <p className='CartItem-div-item-quantity'>{props.quantity}</p>

                <p className='original'><span>{props.quantity}</span> * <span>{props.price}</span> = <span>{props.quantity * props.price}</span></p>

                {/* <p className='discount'>{"DISCOUNT"}</p> */}
            </div>
        </div>
    );
}

export default CartItem;
