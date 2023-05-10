import React from 'react';
import "./CartOffersAndCoupons.css"


function CartOffersAndCoupons() {
    return (
        <div className='CartOffersAndCoupons-div'>
            <div className='CartOffersAndCoupons-div-head'>
                <i className='bx bxs-offer'></i>
                <h3>Offers & coupons</h3>
            </div>


            <div className='CartOffersAndCoupons-div-foot'>
                <p>Loyalty rewards & store offers</p>
                <i className='bx bx-chevron-right'></i>
            </div>

        </div>
    )
}


export default CartOffersAndCoupons