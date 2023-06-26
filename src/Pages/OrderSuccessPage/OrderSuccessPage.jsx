import React, { useEffect } from 'react';
import "./OrderSuccessPage.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeSubscription } from '../../Store/Reducer/userSubscriptionReducer';
import { clearTotal } from '../../Store/Reducer/totalCartReducer';
import { clearSelectedAddress } from '../../Store/Reducer/userAddressReducer';
import { clearCart } from '../../Store/Reducer/userCartReducer';

function OrderSuccessPage(props) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {

        let timeout;


        timeout = setTimeout(() => {
            props.setCartPage(true)
            navigate("/myorder")
            dispatch(removeSubscription());
            dispatch(clearCart());
            dispatch(clearSelectedAddress());
            dispatch(clearTotal());
        }, 5000)

        return () => {
            clearTimeout(timeout)
        }

    }, [])

    return (
        <div className=' OrderSuccessPage-div '>
            <h1>Order Successfull</h1>
            <p>Order details will send to your mobile..</p>
        </div>
    );
}

export default OrderSuccessPage;
