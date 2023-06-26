import React, { useEffect } from 'react';
import "./OrderSuccessPage.css"
import { useNavigate } from 'react-router-dom';

function OrderSuccessPage(props) {

    const navigate = useNavigate()
    useEffect(() => {
        let timeout;
        timeout = setTimeout(() => {
            props.setCartPage(true)
            navigate("/myorder")
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
