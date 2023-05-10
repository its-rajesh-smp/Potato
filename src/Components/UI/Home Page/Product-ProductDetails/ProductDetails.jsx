import React from "react";
import "./ProductDetails.css"

function ProductDetails(props) {
    return (
        <div className="ProductDetails-div">
            <div className="productName">
                <i className="bx bx-checkbox-square"></i>
                <p>{"biriyani"}</p>
            </div>

            <p className="ProductDetails-price">
                ₹<span>{"200"}</span>
            </p>

            <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque similique aliquid dicta repudiandae dolor, delectus necessitatibus debitis esse expedita culpa rem hic numquam quod minima aliquam iusto earum quis. Rem.</p>

            <div className="likeShare">
                <button>
                    <i className="bx bx-heart"></i>
                </button>
                <button>
                    <i className="bx bx-share"></i>
                </button>
            </div>
        </div>
    );
}

export default ProductDetails