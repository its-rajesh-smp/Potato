import React from 'react';
import "./DelivaryAddress.css"

function  DelivaryAddress (props) {
    return ( 
        <div className=' DelivaryAddress-div '>

            <h3>Your Order</h3>
            <p className='formTo'>form <span>Kolkata Local</span></p>
            <p className='formTo'>to <span>New Town</span></p>

            <p className='deliveryTime'>Scheduled delivery for <span>Wednesday</span>, <span>05 Apr 2023</span> between <span>10:00 PM - 11:00 PM</span></p>
        </div>
     );
}

export default DelivaryAddress;
